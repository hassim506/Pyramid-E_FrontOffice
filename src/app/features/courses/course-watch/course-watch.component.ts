import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { ProgressionService } from '../../../shared/service/progression/progression.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-course-watch',
  imports: [CommonModule, RouterLink],
  templateUrl: './course-watch.component.html',
  styleUrl: './course-watch.component.scss'
})
export class CourseWatchComponent implements OnInit, OnDestroy {
  routes = routes;

  formation: any = null;
  loading = true;
  error = '';

  /** Section actuellement lue */
  activeSection: any = null;
  /** Module de la section active */
  activeModule: any = null;

  /** IDs des modules ouverts dans le sidebar */
  openModules = new Set<number>();

  /** Progression locale */
  progressPercent = 0;
  completedIds = new Set<number>();

  /** Onglet du panneau droit */
  activeTab: 'overview' | 'notes' | 'faq' = 'overview';

  private formationId!: number;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private formationService: FormationService,
    private progressionService: ProgressionService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const raw = params.get('id');
      if (!raw) {
        this.error = 'ID de formation manquant';
        return;
      }
      this.formationId = +raw;
      this.loadFormation();
    });

    this.progressionService.change$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (!this.formationId) return;
      this.progressPercent = this.progressionService.getPercent(this.formationId);
      this.completedIds = new Set(this.progressionService.getCompleted(this.formationId));
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ─── Chargement ─────────────────────────────────────────────────────────────

  private loadFormation(): void {
    this.loading = true;
    this.error = '';

    this.formationService.getFormationById(String(this.formationId))
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.formation = res.formation || res.data || res;
          this.formation.modules = this.formation.modules || [];
          this.processImages();
          this.initProgression();
          this.selectFirstSection();
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Impossible de charger la formation';
          this.loading = false;
          console.error(err);
        }
      });
  }

  private processImages(): void {
    if (this.formation.image_couverture && !this.formation.image_couverture.startsWith('http')) {
      this.formation.image_couverture =
        `http://localhost:8000/storage/${this.formation.image_couverture}`;
    }
  }

  private initProgression(): void {
    const total = this.allSections().length;

    // Init locale immédiate — la Map est prête avant même la réponse API
    this.progressionService.init(this.formationId, total);
    this.progressPercent = this.progressionService.getPercent(this.formationId);
    this.completedIds = new Set(this.progressionService.getCompleted(this.formationId));

    // Sync depuis l'API (remplace les données locales par les données serveur)
    this.progressionService.loadFromApi(this.formationId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.progressPercent = this.progressionService.getPercent(this.formationId);
          this.completedIds = new Set(this.progressionService.getCompleted(this.formationId));
        },
        error: (err) => {
          console.warn('Progression API indisponible, utilisation locale.', err?.status);
        }
      });
  }

  private selectFirstSection(): void {
    for (const mod of this.formation.modules) {
      if (mod.sections?.length) {
        this.openModules.add(mod.id);
        this.selectSection(mod.sections[0], mod);
        return;
      }
    }
  }

  // ─── Navigation sections ────────────────────────────────────────────────────

  selectSection(section: any, mod: any): void {
    this.activeSection = section;
    this.activeModule = mod;
    this.activeTab = 'overview';
  }

  toggleModule(modId: number): void {
    if (this.openModules.has(modId)) {
      this.openModules.delete(modId);
    } else {
      this.openModules.add(modId);
    }
  }

  isModuleOpen(modId: number): boolean {
    return this.openModules.has(modId);
  }

  isActiveSection(sectionId: number): boolean {
    return this.activeSection?.id === sectionId;
  }

  isSectionCompleted(sectionId: number): boolean {
    return this.completedIds.has(sectionId);
  }

  markDoneLoading = false;

  markDone(): void {
    if (!this.activeSection || this.markDoneLoading) return;
    const sid = this.activeSection.id;
    if (this.isSectionCompleted(sid)) return;

    this.markDoneLoading = true;
    this.error = '';

    this.progressionService.markCompleted(this.formationId, sid)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => { this.markDoneLoading = false; },
        error: (err) => {
          this.markDoneLoading = false;
          const status = err?.status;
          console.error('❌ markCompleted HTTP error', {
            status,
            url: err?.url,
            body: err?.error,
            message: err?.message
          });
          if (status === 401) {
            this.error = 'Session expirée. Veuillez vous reconnecter.';
          } else if (status === 404) {
            this.error = 'Section introuvable (id: ' + sid + ').';
          } else if (status === 422) {
            this.error = 'Données invalides: ' + JSON.stringify(err?.error?.errors ?? err?.error?.message ?? '');
          } else if (status === 500) {
            this.error = 'Erreur serveur (500). Consultez les logs Laravel.';
          } else if (status === 0) {
            this.error = 'Serveur inaccessible (CORS ou serveur arrêté).';
          } else {
            this.error = `Erreur ${status}: ${err?.error?.message ?? 'inconnue'}`;
          }
          setTimeout(() => this.error = '', 8000);
        }
      });
  }

  navigateNext(): void {
    const flat = this.allSections();
    const idx = flat.findIndex(s => s.section.id === this.activeSection?.id);
    if (idx < flat.length - 1) {
      const { section, mod } = flat[idx + 1];
      this.selectSection(section, mod);
    }
  }

  navigatePrev(): void {
    const flat = this.allSections();
    const idx = flat.findIndex(s => s.section.id === this.activeSection?.id);
    if (idx > 0) {
      const { section, mod } = flat[idx - 1];
      this.selectSection(section, mod);
    }
  }

  private allSections(): { section: any; mod: any }[] {
    const result: { section: any; mod: any }[] = [];
    for (const mod of (this.formation?.modules || [])) {
      for (const section of (mod.sections || [])) {
        result.push({ section, mod });
      }
    }
    return result;
  }

  get currentIndex(): number {
    return this.allSections().findIndex(s => s.section.id === this.activeSection?.id);
  }

  get totalSectionsCount(): number {
    return this.allSections().length;
  }

  get hasPrev(): boolean { return this.currentIndex > 0; }
  get hasNext(): boolean { return this.currentIndex < this.totalSectionsCount - 1; }

  // ─── Média ───────────────────────────────────────────────────────────────────

  /** Retourne une SafeResourceUrl pour les iframes (YouTube, PDF, etc.) */
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  /**
   * Normalise `section.ressources` qui peut être :
   *   - une string URL
   *   - un objet  { url: '...' } ou { path: '...' }
   *   - un tableau dont le 1er élément est une string ou un objet
   */
  resolveResourceUrl(raw: any): string {
    if (!raw) return '';
    if (typeof raw === 'string') return raw;
    if (Array.isArray(raw)) return this.resolveResourceUrl(raw[0]);
    if (typeof raw === 'object') {
      return raw.url || raw.path || raw.src || raw.uri || '';
    }
    return String(raw);
  }

  isYouTube(raw: any): boolean {
    const url = this.resolveResourceUrl(raw);
    if (!url) return false;
    return /youtube\.com|youtu\.be/.test(url);
  }

  getYouTubeEmbedUrl(raw: any): SafeResourceUrl {
    const url = this.resolveResourceUrl(raw);
    const id = this.extractYouTubeId(url);
    const embed = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embed);
  }

  private extractYouTubeId(url: string): string {
    if (!url || typeof url !== 'string') return '';
    const patterns = [
      /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
      /youtu\.be\/([a-zA-Z0-9_-]+)/
    ];
    for (const p of patterns) {
      const m = url.match(p);
      if (m) return m[1];
    }
    return '';
  }

  getVideoUrl(raw: any): SafeResourceUrl {
    const url = this.resolveResourceUrl(raw);
    if (this.isYouTube(url)) {
      return this.getYouTubeEmbedUrl(url);
    }
    const full = url.startsWith('http')
      ? url
      : `http://localhost:8000/storage/${url}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(full);
  }

  getPdfUrl(raw: any): SafeResourceUrl {
    const url = this.resolveResourceUrl(raw);
    const full = url.startsWith('http') ? url : `http://localhost:8000/storage/${url}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(full);
  }

  getImageUrl(url: string | null): string {
    if (!url) return 'assets/img/course/courses-06.jpg';
    if (url.startsWith('http')) return url;
    return `http://localhost:8000/storage/${url}`;
  }

  /** Retourne true si la section a une ressource exploitable */
  hasResource(section: any): boolean {
    return !!this.resolveResourceUrl(section?.ressources);
  }

  // ─── Durée ───────────────────────────────────────────────────────────────────

  formatDuration(minutes: any): string {
    const m = parseInt(minutes) || 0;
    if (!m) return '';
    if (m < 60) return `${m} min`;
    return `${Math.floor(m / 60)}h ${m % 60 ? (m % 60) + 'min' : ''}`.trim();
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    try {
      return new Date(dateStr).toLocaleDateString('fr-FR', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
    } catch { return ''; }
  }

  // ─── Icône / couleur de section ──────────────────────────────────────────────

  getSectionIcon(type: string): string {
    const map: Record<string, string> = {
      video:      'isax isax-video-play',
      lecture:    'isax isax-video-play',
      reading:    'isax isax-document-text',
      text:       'isax isax-document-text',
      pdf:        'isax isax-document',
      quiz:       'isax isax-message-question',
      assignment: 'isax isax-task-square',
    };
    return map[type] || 'isax isax-play-circle5';
  }

  getSectionColor(type: string): string {
    const map: Record<string, string> = {
      video:      'text-primary',
      lecture:    'text-primary',
      reading:    'text-info',
      text:       'text-info',
      pdf:        'text-secondary',
      quiz:       'text-warning',
      assignment: 'text-danger',
    };
    return map[type] || 'text-success';
  }

  // ─── Utilitaires template ─────────────────────────────────────────────────

  getObjectifsList(txt: string | null): string[] {
    if (!txt) return [];
    return txt.split('\n').map(l => l.replace(/^[-•*]\s*/, '').trim()).filter(Boolean);
  }

  getListFromString(txt: string | null): string[] {
    if (!txt) return [];
    try { return JSON.parse(txt); } catch { /* not json */ }
    return txt.split('\n').map(l => l.replace(/^[-•*]\s*/, '').trim()).filter(Boolean);
  }

  setTab(tab: 'overview' | 'notes' | 'faq'): void {
    this.activeTab = tab;
  }

  goBack(): void {
    this.router.navigate([this.routes.courseDetails + '/' + this.formationId]);
  }
}
