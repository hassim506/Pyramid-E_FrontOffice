import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-catalogue-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogue-detail.component.html',
  styleUrls: ['./catalogue-detail.component.scss'],
})
export class CatalogueDetailComponent implements OnInit {

  catalogueId:  number = 0;
  catalogue:    any    = null;
  formations:   any[]  = [];
  loading              = true;
  error                = '';

  // Source badge
  source     = 'assigne';
  badgeLabel = 'Assigné';

  // ── Expiration ────────────────────────────────────────────
  dateExpiration: string | null = null;

  // ── Progression ───────────────────────────────────────────
  progressionGlobale    = 0;
  totalFormations       = 0;
  formationsTerminees   = 0;

  // Recherche
  searchQuery          = '';
  filteredFormations:  any[] = [];

  // Pagination
  currentPage          = 1;
  pageSize             = 6;
  totalPages           = 0;
  paginatedFormations: any[] = [];

  constructor(
    private route:             ActivatedRoute,
    private router:            Router,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    this.catalogueId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.catalogueId) {
      this.error   = 'Catalogue introuvable';
      this.loading = false;
      return;
    }
    this.loadCatalogueDetail();
  }

  // ── Expiration ─────────────────────────────────────────────

  /** Vrai si le catalogue est expiré (date dépassée) */
  get estExpire(): boolean {
    if (!this.dateExpiration) return false;
    return new Date(this.dateExpiration) < new Date();
  }

  // ── Chargement ────────────────────────────────────────────

  loadCatalogueDetail(): void {
    this.loading = true;

    this.formationsService.getMesCataloguesAssignes().subscribe({
      next: (res: any) => {
        const all  = res.catalogues ?? [];
        const meta = all.find((c: any) => c.id === this.catalogueId);
        this.source         = meta?.source         ?? 'assigne';
        this.badgeLabel     = meta?.badge_label     ?? 'Assigné';
        this.dateExpiration = meta?.date_expiration ?? null;

        this.loadFormations();
      },
      error: () => {
        this.error   = 'Impossible de charger le catalogue';
        this.loading = false;
      }
    });
  }

  loadFormations(): void {
    this.formationsService.getCatalogueProgression(this.catalogueId).subscribe({
      next: (res: any) => {
        this.formations          = res.formations           ?? [];
        this.progressionGlobale  = res.progression_globale  ?? 0;
        this.totalFormations     = res.total_formations     ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;

        this.formationsService.getCatalogueDetail(this.catalogueId).subscribe({
          next: (r: any) => {
            this.catalogue          = r.catalogue;
            this.filteredFormations = [...this.formations];
            this.totalPages         = Math.ceil(this.filteredFormations.length / this.pageSize);
            this.paginate();
            this.loading = false;
          },
          error: () => { this.loading = false; }
        });
      },
      error: () => {
        // Fallback sur l'ancienne méthode
        this.formationsService.getCatalogueDetail(this.catalogueId).subscribe({
          next: (r: any) => {
            this.catalogue          = r.catalogue;
            this.formations         = r.formations ?? [];
            this.filteredFormations = [...this.formations];
            this.totalPages         = Math.ceil(this.filteredFormations.length / this.pageSize);
            this.paginate();
            this.loading = false;
          },
          error: () => { this.error = 'Catalogue introuvable'; this.loading = false; }
        });
      }
    });
  }

  // ── Recherche ──────────────────────────────────────────────
  onSearch(): void {
    const q = this.searchQuery.trim().toLowerCase();
    this.filteredFormations = q
      ? this.formations.filter(f =>
          f.titre?.toLowerCase().includes(q) ||
          f.description?.toLowerCase().includes(q) ||
          f.short_description?.toLowerCase().includes(q)
        )
      : [...this.formations];
    this.currentPage = 1;
    this.totalPages  = Math.ceil(this.filteredFormations.length / this.pageSize);
    this.paginate();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.onSearch();
  }

  // ── Pagination ─────────────────────────────────────────────
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

  /**
   * Tunnel : students-catalogue → catalogue/:id → course-details-2
   * On passe fromPage + catalogueId pour que le retour revienne ici
   */
  goToDetails(formationId: number): void {
    if (this.estExpire) return;
    this.router.navigate(['/courses/course-details-2', formationId], {
      state: {
        fromPage:    'catalogue',
        catalogueId: this.catalogueId,
      }
    });
  }

  commencerFormation(formationId: number, event: Event): void {
    event.stopPropagation();
    if (this.estExpire) return;
    this.router.navigate(['/student/lecture-formation', formationId], {
      state: {
        fromPage:    'catalogue',
        catalogueId: this.catalogueId,
      }
    });
  }

  /**
   * Retour vers la liste des catalogues
   * Tunnel : students-catalogue → catalogue/:id
   */
  goBack(): void {
    this.router.navigate(['/student/mes-catalogues']);
  }

  // ── Helpers progression ────────────────────────────────────
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
}