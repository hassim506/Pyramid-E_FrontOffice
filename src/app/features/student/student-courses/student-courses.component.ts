import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss'],
})
export class StudentCoursesComponent implements OnInit {

  allCatalogues:       any[] = [];
  filteredCatalogues:  any[] = [];
  displayedCatalogues: any[] = [];

  loading = false;
  error   = '';

  // Filtres
  searchTerm     = '';
  selectedType   = '';
  selectedFiltre: '' | 'assigne' | 'demande' | 'permanent' | 'expire_bientot' | 'expire' = '';

  // Pagination
  currentPage  = 1;
  itemsPerPage = 9;
  totalItems   = 0;
  totalPages   = 0;
  pages:       number[] = [];

  types = [
    { value: '',           label: 'Tous les types' },
    { value: 'general',    label: 'Général'        },
    { value: 'specialise', label: 'Spécialisé'     },
    { value: 'certifiant', label: 'Certifiant'     },
    { value: 'technique',  label: 'Technique'      },
    { value: 'management', label: 'Management'     },
    { value: 'soft_skills',label: 'Soft Skills'    },
  ];

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
    this.loadCatalogues();
  }

  loadCatalogues(): void {
    this.loading = true;
    this.error   = '';
    this.formationsService.getMesCataloguesAssignes().subscribe({
      next: (res) => {
        this.allCatalogues = res.catalogues ?? [];
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.error   = 'Impossible de charger vos catalogues.';
        this.loading = false;
      },
    });
  }

  // ── Filtres ────────────────────────────────────────────────

  onSearchChange(): void { this.currentPage = 1; this.applyFilters(); }

  onTypeChange(type: string): void {
    this.selectedType = type; this.currentPage = 1; this.applyFilters();
  }
onFiltreChange(valeur: string): void {
  this.selectedFiltre = valeur as any;
  this.currentPage    = 1;
  this.applyFilters();
}

  clearFilters(): void {
    this.searchTerm     = '';
    this.selectedType   = '';
    this.selectedFiltre = '';
    this.currentPage    = 1;
    this.applyFilters();
  }

  get hasActiveFilters(): boolean {
    return !!this.searchTerm || !!this.selectedType || !!this.selectedFiltre;
  }

  applyFilters(): void {
    let result = [...this.allCatalogues];

    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter(c =>
        c.titre?.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q) ||
        c.short_description?.toLowerCase().includes(q)
      );
    }

    if (this.selectedType) {
      result = result.filter(c => c.type === this.selectedType);
    }

    switch (this.selectedFiltre) {
      case 'assigne':        result = result.filter(c => c.source === 'assigne'); break;
      case 'demande':        result = result.filter(c => c.source === 'demande'); break;
      case 'permanent':      result = result.filter(c => !c.date_expiration); break;
      case 'expire_bientot': result = result.filter(c => this.isExpiringSoon(c.date_expiration)); break;
      case 'expire':         result = result.filter(c => c.date_expiration && new Date(c.date_expiration) < new Date()); break;
    }

    this.filteredCatalogues = result;
    this.totalItems         = result.length;
    this.totalPages         = Math.ceil(this.totalItems / this.itemsPerPage);
    this.buildPageNumbers();
    this.updateDisplayed();
  }

  // ── Pagination ─────────────────────────────────────────────

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.buildPageNumbers();
    this.updateDisplayed();
  }

  private updateDisplayed(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedCatalogues = this.filteredCatalogues.slice(start, start + this.itemsPerPage);
  }

  private buildPageNumbers(): void {
    const delta = 2;
    const start = Math.max(1, this.currentPage - delta);
    const end   = Math.min(this.totalPages, this.currentPage + delta);
    this.pages  = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  // ── Helpers ────────────────────────────────────────────────

  goToCatalogue(id: number): void {
    this.router.navigate(['/student/catalogue-detail', id]);
  }

  isExpiringSoon(dateExpiration: string | null): boolean {
    if (!dateExpiration) return false;
    const diff = new Date(dateExpiration).getTime() - Date.now();
    return diff > 0 && diff < 7 * 24 * 60 * 60 * 1000;
  }

  getJoursRestants(dateExpiration: string | null): number {
    if (!dateExpiration) return 0;
    return Math.ceil((new Date(dateExpiration).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  }

  getTypeColor(type: string): string {
    const colors: Record<string, string> = {
      certifiant:  '#7c3aed',
      technique:   '#0369a1',
      management:  '#b45309',
      soft_skills: '#0d9488',
      specialise:  '#6d28d9',
      general:     '#374151',
    };
    return colors[type] ?? '#374151';
  }

  getTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      general:     'Général',
      specialise:  'Spécialisé',
      certifiant:  'Certifiant',
      technique:   'Technique',
      management:  'Management',
      soft_skills: 'Soft Skills',
    };
    return labels[type] ?? type ?? 'Catalogue';
  }
}