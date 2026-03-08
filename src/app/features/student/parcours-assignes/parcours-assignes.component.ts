import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-parcours-assignes',
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
  pageSize    = 6;
  totalPages  = 0;
  totalItems  = 0;

  filtres = [
    { value: '',               label: 'Tous',              icon: 'isax-grid-1'          },
    { value: 'assigne',        label: 'Assignés',          icon: 'isax-tick-circle'     },
    { value: 'demande',        label: 'Demandes acceptées',icon: 'isax-send-2'          },
    { value: 'permanent',      label: 'Accès permanent',   icon: 'isax-infinity'        },
    { value: 'expire_bientot', label: 'Expire bientôt',    icon: 'isax-warning-2'       },
    { value: 'expire',         label: 'Expiré',            icon: 'isax-calendar-remove' },
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
        this.allParcours = res.parcours ?? [];
        const cats = this.allParcours.map((p: any) => p.categorie).filter((c: any) => !!c);
        this.categories = [...new Set(cats)] as string[];
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur parcours:', err);
        this.error   = 'Erreur lors du chargement de vos parcours';
        this.loading = false;
      }
    });
  }

  // ── Filtres ────────────────────────────────────────

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
      case 'assigne':        result = result.filter(p => p.source === 'assigne'); break;
      case 'demande':        result = result.filter(p => p.source === 'demande'); break;
      case 'permanent':      result = result.filter(p => !p.date_expiration); break;
      case 'expire_bientot': result = result.filter(p => this.isExpiringSoon(p.date_expiration)); break;
      case 'expire':         result = result.filter(p => p.date_expiration && new Date(p.date_expiration) < new Date()); break;
    }

    this.filteredParcours = result;
    this.totalItems       = result.length;
    this.totalPages       = Math.ceil(this.totalItems / this.pageSize);
    this.currentPage      = 1;
    this.paginate();
  }

  onSearchChange(): void                  { this.applyFilters(); }
  onCategorieChange(c: string): void      { this.selectedCategorie = c; this.applyFilters(); }
  onFiltreChange(valeur: string): void    { this.selectedFiltre = valeur; this.applyFilters(); }

  clearFilters(): void {
    this.searchTerm        = '';
    this.selectedCategorie = '';
    this.selectedFiltre    = '';
    this.applyFilters();
  }

  get hasActiveFilters(): boolean {
    return !!this.searchTerm || !!this.selectedCategorie || !!this.selectedFiltre;
  }

  get totalAssignes(): number { return this.allParcours.filter(p => p.source === 'assigne').length; }
  get totalDemandes(): number { return this.allParcours.filter(p => p.source === 'demande').length; }

  // ── Pagination ─────────────────────────────────────

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

  // ── Navigation ─────────────────────────────────────

  goToDetail(parcoursId: number): void {
    this.router.navigate(['/student/parcours-assigne', parcoursId]);
  }

  // ── Helpers expiration ─────────────────────────────

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
}