// filepath: src/app/student/catalogue-detail/catalogue-detail.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription, filter } from 'rxjs';
import { FormationService } from '../../../../shared/service/formation/formation.service';
import { ProgressionService } from '../../../../shared/service/progression/progression.service';

@Component({
  standalone: true,
  selector: 'app-catalogue-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogue-detail.component.html',
  styleUrls: ['./catalogue-detail.component.scss'],
})
export class CatalogueDetailComponent implements OnInit, OnDestroy {

  catalogueId:  number = 0;
  catalogue:    any    = null;
  formations:   any[]  = [];
  loading              = true;
  error                = '';

  source     = 'assigne';
  badgeLabel = 'Assigné';

  dateExpiration: string | null = null;

  progressionGlobale    = 0;
  totalFormations       = 0;
  formationsTerminees   = 0;

  searchQuery          = '';
  filteredFormations:  any[] = [];

  currentPage          = 1;
  pageSize             = 6;
  totalPages           = 0;
  paginatedFormations: any[] = [];

  private routerSub?:      Subscription;
  private progressionSub?: Subscription;

  private _visibilityHandler = () => {
    if (document.visibilityState === 'visible') {
      this.refreshProgressions();
    }
  };

  constructor(
    private route:              ActivatedRoute,
    private router:             Router,
    private formationsService:  FormationService,
    public  progressionService: ProgressionService
  ) {}

  ngOnInit(): void {
    this.catalogueId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.catalogueId) {
      this.error   = 'Catalogue introuvable';
      this.loading = false;
      return;
    }

    this.loadCatalogueDetail();

    this.progressionSub = this.progressionService.change$.subscribe(() => {
      this._syncFormationsDepuisService();
    });

    this.routerSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const url = e.urlAfterRedirects || e.url;
        if (url.includes(`/catalogue-detail/${this.catalogueId}`)) {
          this.refreshProgressions();
        }
      });

    document.addEventListener('visibilitychange', this._visibilityHandler);
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.progressionSub?.unsubscribe();
    document.removeEventListener('visibilitychange', this._visibilityHandler);
  }

  // ── Expiration ─────────────────────────────────────────────
  get estExpire(): boolean {
    if (!this.dateExpiration) return false;
    return new Date(this.dateExpiration) < new Date();
  }

  // ── Chargement ────────────────────────────────────────────
  loadCatalogueDetail(): void {
    this.loading = true;

    this.formationsService.getCatalogueFormationsWithStatus(this.catalogueId).subscribe({
      next: (res: any) => {
        this.catalogue  = res.catalogue;
        this.formations = res.formations || [];

        this.totalFormations     = res.total_formations     ?? this.formations.length;
        this.formationsTerminees = res.formations_terminees ?? this.formations.filter((f: any) => f.progression >= 100).length;
        this.progressionGlobale  = res.progression          ?? 0;

        this.source         = res.source ?? res.catalogue?.source ?? 'explorer';
        this.badgeLabel     = this.source === 'assigne' ? 'Assigné' : this.source === 'demande' ? 'Demande acceptée' : 'À explorer';
        this.dateExpiration = res.catalogue?.date_expiration ?? null;

        this._applySearchAndPaginate();
        this._syncFormationsDepuisService();
        this.loading = false;
      },
      error: () => {
        this.loadCatalogueDetailFallback();
      }
    });
  }

  private loadCatalogueDetailFallback(): void {
    this.formationsService.getCatalogueProgression(this.catalogueId).subscribe({
      next: (res: any) => {
        this.formations          = res.formations           ?? [];
        this.progressionGlobale  = res.progression_globale  ?? 0;
        this.totalFormations     = res.total_formations     ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;

        this.formations = this.formations.map((f: any) => ({
          ...f,
          est_inscrit: true,
          peut_demander: false
        }));

        this.formationsService.getCatalogueDetail(this.catalogueId).subscribe({
          next: (r: any) => {
            this.catalogue = r.catalogue;
            this.source    = 'assigne';
            this.badgeLabel = 'Assigné';
            this._applySearchAndPaginate();
            this._syncFormationsDepuisService();
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          }
        });
      },
      error: () => {
        this.error   = 'Impossible de charger le catalogue';
        this.loading = false;
      }
    });
  }

  refreshProgressions(): void {
    this.formationsService.getCatalogueFormationsWithStatus(this.catalogueId).subscribe({
      next: (res: any) => {
        this.formations          = res.formations           ?? [];
        this.progressionGlobale  = res.progression          ?? 0;
        this.totalFormations     = res.total_formations     ?? this.formations.length;
        this.formationsTerminees = res.formations_terminees ?? 0;
        this._applySearchAndPaginate();
        this._syncFormationsDepuisService();
      },
      error: () => {}
    });
  }

  private _syncFormationsDepuisService(): void {
    if (!this.formations.length) return;

    let terminees         = 0;
    let sommeProgressions = 0;

    this.formations = this.formations.map(f => {
      const percentService = this.progressionService.getPercent(f.id, null, this.catalogueId);
      const progression    = percentService > 0 ? percentService : (f.progression ?? 0);
      const statut         = progression >= 100 ? 'termine'
                           : progression > 0    ? 'en_cours'
                           : (f.statut_formation ?? 'non_commence');

      if (statut === 'termine') terminees++;
      sommeProgressions += progression;

      return { ...f, progression, statut_formation: statut, est_terminee: progression >= 100 };
    });

    const total = this.formations.length;
    if (total === 0) return;

    const progressionMoyenne = Math.round(sommeProgressions / total);

    if (progressionMoyenne > this.progressionGlobale) {
      this.progressionGlobale = progressionMoyenne;
    }
    this.formationsTerminees = terminees;

    this._applySearchAndPaginate();
  }

  // ── Recherche + pagination ────────────────────────────────
  private _applySearchAndPaginate(): void {
    const q = this.searchQuery.trim().toLowerCase();
    this.filteredFormations = q
      ? this.formations.filter(f =>
          f.titre?.toLowerCase().includes(q) ||
          f.description?.toLowerCase().includes(q) ||
          f.short_description?.toLowerCase().includes(q)
        )
      : [...this.formations];
    this.totalPages  = Math.ceil(this.filteredFormations.length / this.pageSize);
    this.currentPage = 1;
    this.paginate();
  }

  onSearch(): void {
    this._applySearchAndPaginate();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this._applySearchAndPaginate();
  }

  paginate(): void {
    const start              = (this.currentPage - 1) * this.pageSize;
    this.paginatedFormations = this.filteredFormations.slice(start, start + this.pageSize);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginate();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // ── Navigation ────────────────────────────────────────────
  goToDetails(formationId: number): void {
    if (this.estExpire) return;
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/courses/course-details', formationId], {
        queryParams: { fromPage: 'catalogue', catalogueId: this.catalogueId }
      })
    );
    window.open(url, '_blank');
  }

  commencerFormation(formationId: number, event: Event): void {
    event.stopPropagation();
    if (this.estExpire) return;

    const params: Record<string, string> = { fromPage: 'catalogue' };
    if (this.catalogueId) params['catalogueId'] = String(this.catalogueId);

    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/courses/course-watch', formationId], { queryParams: params })
    );
    window.open(url, '_blank');
  }

  goBack(): void {
    this.router.navigate(['/student/students-explorer']);
  }

  demanderFormation(formationId: number, event: Event): void {
    event.stopPropagation();
    // Rediriger vers l'explorer avec le modal de demande
    this.router.navigate(['/student/students-explorer'], {
      queryParams: { formationId: formationId }
    });
  }

  // ── Helpers ───────────────────────────────────────────────
  getStatutLabel(statut: string): string {
    return ({
      termine:      '✅ Terminé',
      en_cours:     '▶ En cours',
      non_commence: '○ À commencer',
    } as any)[statut] ?? '○ À commencer';
  }

  getStatutClass(statut: string): string {
    return ({
      termine:      'pad-statut--done',
      en_cours:     'pad-statut--ongoing',
      non_commence: 'pad-statut--todo',
    } as any)[statut] ?? 'pad-statut--todo';
  }

  getProgressionColor(statut: string): string {
    return ({
      termine:      '#16a34a',
      en_cours:     '#069b8f',
      non_commence: '#e5e7eb',
    } as any)[statut] ?? '#e5e7eb';
  }

  isFree(formation: any): boolean {
    return Number(formation.prix) === 0;
  }

  getImageUrl(path: string | null | undefined): string {
    return this.formationsService.getImageUrl(path);
  }
}
