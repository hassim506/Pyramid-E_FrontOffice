import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

@Component({
  selector: 'app-parcours-assignes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parcours-assignes.component.html',
  styleUrls: ['./parcours-assignes.component.scss'],
})
export class ParcoursAssignesComponent implements OnInit {

  allParcours:       any[] = [];
  filteredParcours:  any[] = [];
  displayedParcours: any[] = [];

  loading = false;
  error   = '';

  // Filtres
  searchTerm        = '';
  selectedCategorie = '';
  selectedFiltre    = '';

  categories: string[] = [];

  // Pagination
  currentPage = 1;
  pageSize    = 9;
  totalPages  = 0;
  totalItems  = 0;

  filtres = [
    { value: '',               label: 'Tous',               icon: 'isax-grid-1'          },
    { value: 'assigne',        label: 'Assignés',           icon: 'isax-tick-circle'     },
    { value: 'demande',        label: 'Demandes acceptées', icon: 'isax-send-2'          },
    { value: 'termine',        label: 'Terminés',           icon: 'isax-medal-star'      },
    { value: 'permanent',      label: 'Accès permanent',    icon: 'isax-infinity'        },
    { value: 'expire_bientot', label: 'Expire bientôt',     icon: 'isax-warning-2'       },
    { value: 'expire',         label: 'Expiré',             icon: 'isax-calendar-remove' },
  ];

  constructor(
    private formationsService: FormationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadParcours();
  }

  loadParcours(): void {
    this.loading = true;
    this.error   = '';

    this.formationsService.getMesParcoursAssignes().subscribe({
      next: (res: any) => {
        this.allParcours = (res.parcours ?? []).map((p: any) => {
          const estTermine = p.est_termine
            || p.progression >= 100
            || (p.total_formations > 0 && p.formations_terminees >= p.total_formations);

          const estExpire = !estTermine
            && !!p.date_expiration
            && new Date(p.date_expiration) < new Date();

          return {
            ...p,
            est_termine: estTermine,
            est_expire: p.est_expire ?? estExpire,
            // ✅ FIX : badge_label tient compte de source === 'demande'
            badge_label: estTermine
              ? 'Terminé'
              : (p.est_expire ?? estExpire
                  ? 'Expiré'
                  : p.source === 'demande'
                    ? 'Demande acceptée'
                    : p.badge_label ?? 'Assigné'),
          };
        });

        const cats = this.allParcours.map((p: any) => p.categorie).filter((c: any) => !!c);
        this.categories = [...new Set(cats)] as string[];
        this.applyFilters();
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Erreur parcours:', err);
        this.error   = 'Erreur lors du chargement de vos parcours';
        this.loading = false;
      }
    });
  }

  // ── Filtres ────────────────────────────────────────────────

  applyFilters(): void {
    let result = [...this.allParcours];

    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(p =>
        p.titre?.toLowerCase().includes(term) ||
        p.description?.toLowerCase().includes(term)
      );
    }

    if (this.selectedCategorie) {
      result = result.filter(p => p.categorie === this.selectedCategorie);
    }

    switch (this.selectedFiltre) {
      case 'assigne':
        result = result.filter(p => p.source === 'assigne');
        break;
      case 'demande':
        result = result.filter(p => p.source === 'demande');
        break;
      case 'termine':
        result = result.filter(p => p.est_termine);
        break;
      case 'permanent':
        result = result.filter(p => !p.date_expiration);
        break;
      case 'expire_bientot':
        result = result.filter(p => this.isExpiringSoon(p.date_expiration));
        break;
      case 'expire':
        result = result.filter(p => p.est_expire);
        break;
    }

    this.filteredParcours = result;
    this.totalItems       = result.length;
    this.totalPages       = Math.ceil(this.totalItems / this.pageSize);
    this.currentPage      = 1;
    this.paginate();
  }

  onSearchChange(): void               { this.currentPage = 1; this.applyFilters(); }
  onCategorieChange(c: string): void   { this.selectedCategorie = c; this.currentPage = 1; this.applyFilters(); }
  onFiltreChange(valeur: string): void { this.selectedFiltre = valeur; this.currentPage = 1; this.applyFilters(); }

  clearFilters(): void {
    this.searchTerm        = '';
    this.selectedCategorie = '';
    this.selectedFiltre    = '';
    this.currentPage       = 1;
    this.applyFilters();
  }

  get hasActiveFilters(): boolean {
    return !!this.searchTerm || !!this.selectedCategorie || !!this.selectedFiltre;
  }

  get totalAssignes(): number { return this.allParcours.filter(p => p.source === 'assigne').length; }
  get totalDemandes(): number { return this.allParcours.filter(p => p.source === 'demande').length; }
  get totalTermines(): number { return this.allParcours.filter(p => p.est_termine).length; }
  get totalExpires():  number { return this.allParcours.filter(p => p.est_expire).length; }

  // ── Pagination ─────────────────────────────────────────────

  paginate(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedParcours = this.filteredParcours.slice(start, start + this.pageSize);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get pages(): number[] {
    const delta = 2;
    const range: number[] = [];
    const left  = Math.max(1, this.currentPage - delta);
    const right = Math.min(this.totalPages, this.currentPage + delta);
    for (let i = left; i <= right; i++) range.push(i);
    return range;
  }

  // ── Navigation ─────────────────────────────────────────────

  goToDetail(parcoursId: number): void {
    this.router.navigate(['/student/mes-parcours', parcoursId]);
  }

  // ── Helpers badge ──────────────────────────────────────────

  getBadgeClass(p: any): string {
    if (p.est_termine) return 'badge--termine';
    if (p.est_expire)  return 'badge--expire';
    if (p.source === 'demande') return 'badge--demande';
    return 'badge--assigne';
  }

  getCTALabel(p: any): string {
    if (p.est_termine) return 'Revoir';
    if (p.est_expire)  return 'Consulter';
    return 'Voir le parcours';
  }

  isGrayed(p: any): boolean {
    return p.est_termine || p.est_expire;
  }

  // ── Helpers expiration ─────────────────────────────────────

  isExpiringSoon(dateExpiration: string | null): boolean {
    if (!dateExpiration) return false;
    const diff = new Date(dateExpiration).getTime() - new Date().getTime();
    return diff > 0 && diff < 7 * 24 * 60 * 60 * 1000;
  }

  getJoursRestants(dateExpiration: string | null): number | null {
    if (!dateExpiration) return null;
    const diff = new Date(dateExpiration).getTime() - new Date().getTime();
    return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0;
  }

  // ── Helpers couleur / icône catégorie ──────────────────────

  getCategorieColor(categorie: string | null): string {
    if (!categorie) return '#069b8f';
    const c = categorie.toLowerCase();
    if (c.includes('technique') || c.includes('dev') || c.includes('web'))  return '#0369a1';
    if (c.includes('management') || c.includes('leadership'))                return '#b45309';
    if (c.includes('securit')    || c.includes('cyber'))                     return '#dc2626';
    if (c.includes('certif'))                                                 return '#7c3aed';
    if (c.includes('soft')       || c.includes('communication'))             return '#0d9488';
    if (c.includes('data')       || c.includes('analyse'))                   return '#6d28d9';
    if (c.includes('marketing')  || c.includes('commercial'))                return '#b45309';
    return '#069b8f';
  }

  getCategorieIcon(categorie: string | null): string {
    if (!categorie) return 'isax isax-routing';
    const c = categorie.toLowerCase();
    if (c.includes('technique') || c.includes('dev') || c.includes('web'))  return 'isax isax-code';
    if (c.includes('management') || c.includes('leadership'))                return 'isax isax-people';
    if (c.includes('securit')    || c.includes('cyber'))                     return 'isax isax-shield';
    if (c.includes('certif'))                                                 return 'isax isax-medal-star';
    if (c.includes('soft')       || c.includes('communication'))             return 'isax isax-message';
    if (c.includes('data')       || c.includes('analyse'))                   return 'isax isax-chart';
    if (c.includes('marketing')  || c.includes('commercial'))                return 'isax isax-trend-up';
    return 'isax isax-routing';
  }
}