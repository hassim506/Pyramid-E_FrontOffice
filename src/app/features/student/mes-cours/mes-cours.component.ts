import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Formation } from '../../../shared/models/formation.models';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { ProgressionService } from '../../../shared/service/progression/progression.service';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';

interface Toast {
  type: 'success' | 'error' | 'warning';
  message: string;
  visible: boolean;
}

@Component({
  standalone: true,
  selector: 'app-mes-cours',
  imports: [CommonModule, FormsModule, CustomPaginationComponent],
  templateUrl: './mes-cours.component.html',
  styleUrls: ['./mes-cours.component.scss'],
})
export class MesCoursComponent implements OnInit, OnDestroy {

  // ── Vue ──────────────────────────────────────
  viewMode: 'grid' | 'table' = 'grid';

  // ── Données ──────────────────────────────────
  allFormations: Formation[] = [];
  formations:    Formation[] = [];
  loading = false;
  error   = '';

  // ── Pagination ───────────────────────────────
  currentPage = 1;
  pageSize    = 10;
  totalData   = 0;
  skip        = 0;
  limit       = 10;

  // ── Filtres ──────────────────────────────────
  selectedTab     = '';
  searchDataValue = '';

  // ── Toast ────────────────────────────────────
  toast: Toast = { type: 'success', message: '', visible: false };
  private toastTimer: any;

  // ── Abonnement progression ───────────────────
  private progressionSub?: Subscription;

  constructor(
    private formationsService: FormationService,
    public  progressionService: ProgressionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFormations();

    this.progressionSub = this.progressionService.change$.subscribe(() => {
      this.formations = [...this.formations];
    });
  }

  ngOnDestroy(): void {
    this.progressionSub?.unsubscribe();
    clearTimeout(this.toastTimer);
  }

  // ════════════════════════════════════════════
  // CHARGEMENT
  // ════════════════════════════════════════════
  loadFormations(): void {
    this.loading = true;
    this.error   = '';
    this.formationsService.getMesFormations().subscribe({
      next: (res) => {
        this.allFormations = res.formations ?? [];
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.error   = 'Erreur lors du chargement de vos formations.';
        this.loading = false;
      }
    });
  }

  // ════════════════════════════════════════════
  // PROGRESSION
  // ✅ CORRECTION CLÉ : on passe toujours parcoursId=null ici
  //    car mes-cours n'affiche QUE les formations simples (sans parcours).
  //    Le service utilise désormais une clé composite "formationId_parcoursId",
  //    donc getPercent(id, null) lit uniquement le cache de la formation simple
  //    et ne sera jamais pollué par une session dans un parcours.
  // ════════════════════════════════════════════
  getProgression(f: Formation): number {
    // Priorité au cache service (contexte formation simple, parcoursId=null)
    const fromService = this.progressionService.getPercent(f.id, null);
    // Fallback sur la valeur de l'API si le cache n'a pas encore été chargé
    return fromService > 0 ? fromService : Number((f as any).progression ?? 0);
  }

  // ════════════════════════════════════════════
  // SOURCE HELPERS
  // ════════════════════════════════════════════
  getSource(f: Formation): string {
    return (f as any).source ?? 'assigne';
  }

  isFromDemande(f: Formation): boolean {
    return this.getSource(f) === 'demande';
  }

  getBadgeLabel(f: Formation): string {
    return (f as any).badge_label ?? (this.isFromDemande(f) ? 'Demande acceptée' : 'Assignée');
  }

  // ════════════════════════════════════════════
  // KPI GETTERS
  // ════════════════════════════════════════════
  get totalFormations():   number { return this.allFormations.length; }
  get totalEnCours():      number { return this.allFormations.filter(f => { const p = this.getProgression(f); return p > 0 && p < 100; }).length; }
  get totalACommencer():   number { return this.allFormations.filter(f => this.getProgression(f) === 0).length; }
  get totalTerminees():    number { return this.allFormations.filter(f => this.getProgression(f) >= 100).length; }
  get totalCertifiantes(): number { return this.allFormations.filter(f => (f as any).est_certifiante).length; }
  get totalAssignees():    number { return this.allFormations.filter(f => this.getSource(f) === 'assigne').length; }
  get totalDemandes():     number { return this.allFormations.filter(f => this.getSource(f) === 'demande').length; }

  // ════════════════════════════════════════════
  // FILTRES
  // ════════════════════════════════════════════
  get filteredFormations(): Formation[] {
    return this.allFormations.filter(f => {
      const p      = this.getProgression(f);
      const source = this.getSource(f);

      const matchSearch = !this.searchDataValue ||
        f.titre.toLowerCase().includes(this.searchDataValue.toLowerCase()) ||
        ((f as any).description ?? '').toLowerCase().includes(this.searchDataValue.toLowerCase());

      const matchTab =
        this.selectedTab === ''            ? true :
        this.selectedTab === 'en_cours'    ? (p > 0 && p < 100) :
        this.selectedTab === 'a_commencer' ? p === 0 :
        this.selectedTab === 'termines'    ? p >= 100 :
        this.selectedTab === 'assigne'     ? source === 'assigne' :
        this.selectedTab === 'demande'     ? source === 'demande' :
        true;

      return matchSearch && matchTab;
    });
  }

  applyFilters(): void {
    const filtered   = this.filteredFormations;
    this.totalData   = filtered.length;
    this.currentPage = 1;
    this.skip        = 0;
    this.formations  = filtered.slice(0, this.limit);
  }

  selectTab(tab: string): void           { this.selectedTab     = tab; this.applyFilters(); }
  searchData(v: string): void            { this.searchDataValue = v;   this.applyFilters(); }
  resetFilters(): void                   { this.searchDataValue = ''; this.selectedTab = ''; this.applyFilters(); }
  setView(mode: 'grid' | 'table'): void  { this.viewMode = mode; }

  // ════════════════════════════════════════════
  // PAGINATION
  // ════════════════════════════════════════════
  onPageChange(page: number): void {
    this.currentPage = page;
    this.skip        = (page - 1) * this.pageSize;
    this.formations  = this.filteredFormations.slice(this.skip, this.skip + this.pageSize);
  }

  // ════════════════════════════════════════════
  // NAVIGATION
  // ✅ openPlayer passe explicitement fromPage:'demandes' sans parcoursId
  //    → lecture-formation lira parcoursId=null depuis history.state
  //    → progression stockée sous clé "formationId_null" → aucun conflit
  // ════════════════════════════════════════════
  openDetails(f: Formation): void {
    this.router.navigate(['/courses/course-details', f.id], {
      state: { fromPage: 'demandes', demande: f }
    });
  }

  openPlayer(f: Formation): void {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/courses/course-watch', f.id], {
        queryParams: { fromPage: 'demandes' }
      })
    );
    window.open(url, '_blank');
  }

  // ════════════════════════════════════════════
  // TOAST
  // ════════════════════════════════════════════
  showToast(type: 'success' | 'error' | 'warning', message: string): void {
    clearTimeout(this.toastTimer);
    this.toast = { type, message, visible: true };
    this.toastTimer = setTimeout(() => this.toast.visible = false, 4000);
  }

  closeToast(): void { this.toast.visible = false; clearTimeout(this.toastTimer); }

  // ════════════════════════════════════════════
  // HELPERS UI
  // ════════════════════════════════════════════
  isCourseFinished(f: Formation): boolean  { return this.getProgression(f) >= 100; }
  isInProgress(f: Formation): boolean      { const p = this.getProgression(f); return p > 0 && p < 100; }

  getCourseActionLabel(f: Formation): string {
    const p = this.getProgression(f);
    if (p >= 100) return 'Revoir';
    if (p > 0)    return 'Continuer';
    return 'Commencer';
  }

  getCourseActionIcon(f: Formation): string {
    const p = this.getProgression(f);
    if (p >= 100) return 'isax-refresh-2';
    if (p > 0)    return 'isax-play-circle';
    return 'isax-play';
  }

  getStatusLabel(f: Formation): string {
    const p = this.getProgression(f);
    if (p >= 100) return 'Terminé';
    if (p > 0)    return 'En cours';
    return 'À commencer';
  }

  getStatusClass(f: Formation): string {
    const p = this.getProgression(f);
    if (p >= 100) return 'statut-validee';
    if (p > 0)    return 'statut-progress';
    return 'statut-attente';
  }

  getNiveauClass(niveau: string | undefined): string {
    const map: Record<string, string> = {
      debutant:      'niveau-debutant',
      intermediaire: 'niveau-inter',
      avance:        'niveau-avance',
      expert:        'niveau-expert',
    };
    return map[niveau?.toLowerCase() ?? ''] ?? 'niveau-default';
  }

  getImageUrl(path: string | null | undefined): string {
    // Utiliser la méthode du service qui gère correctement les URLs
    return this.formationsService.getImageUrl(path);
  }
}
