import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-student-courses',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss'],
})
export class StudentCoursesComponent implements OnInit {

  // Données sources
  allCatalogues: any[] = [];
  filteredCatalogues: any[] = [];
  displayedCatalogues: any[] = [];

  loading = false;
  error = '';

  // Filtres
  searchTerm = '';
  selectedType = '';
  types = [
    { value: '',            label: 'Tous les types' },
    { value: 'technique',   label: 'Technique'      },
    { value: 'management',  label: 'Management'     },
    { value: 'soft_skills', label: 'Soft Skills'    },
    { value: 'certifiant',  label: 'Certifiant'     },
    { value: 'specialise',  label: 'Spécialisé'     },
    { value: 'general',     label: 'Général'        },
  ];

  // Pagination
  currentPage  = 1;
  pageSize     = 6;
  totalPages   = 0;
  totalItems   = 0;

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

    this.formationsService.getCataloguesEmploye().subscribe({
      next: (res: any) => {
        this.allCatalogues = res.catalogues ?? [];
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur catalogues:', err.error);
        this.error   = 'Erreur lors du chargement des catalogues';
        this.loading = false;
      }
    });
  }

  // ── FILTRES ────────────────────────────────
  applyFilters(): void {
    let result = [...this.allCatalogues];

    // Filtre recherche
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(c =>
        c.titre?.toLowerCase().includes(term) ||
        c.description?.toLowerCase().includes(term) ||
        c.short_description?.toLowerCase().includes(term)
      );
    }

    // Filtre type
    if (this.selectedType) {
      result = result.filter(c => c.type === this.selectedType);
    }

    this.filteredCatalogues = result;
    this.totalItems         = result.length;
    this.totalPages         = Math.ceil(this.totalItems / this.pageSize);
    this.currentPage        = 1;
    this.paginate();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onTypeChange(type: string): void {
    this.selectedType = type;
    this.applyFilters();
  }

  clearFilters(): void {
    this.searchTerm   = '';
    this.selectedType = '';
    this.applyFilters();
  }

  get hasActiveFilters(): boolean {
    return !!this.searchTerm || !!this.selectedType;
  }

  // ── PAGINATION ─────────────────────────────
  paginate(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedCatalogues = this.filteredCatalogues.slice(start, start + this.pageSize);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get pages(): number[] {
    const delta   = 2;
    const range: number[] = [];
    const left  = Math.max(1, this.currentPage - delta);
    const right = Math.min(this.totalPages, this.currentPage + delta);
    for (let i = left; i <= right; i++) range.push(i);
    return range;
  }

  // ── NAVIGATION ─────────────────────────────
  goToCatalogue(catalogueId: number): void {
    this.router.navigate(['/student/catalogue', catalogueId]);
  }

  // ── HELPERS ────────────────────────────────
  getTypeColor(type: string): string {
    const colors: any = {
      'technique'  : '#069b8f',
      'management' : '#16a34a',
      'soft_skills': '#d97706',
      'certifiant' : '#dc2626',
      'specialise' : '#7c3aed',
      'general'    : '#6b7280',
    };
    return colors[type] ?? '#6b7280';
  }

  getTypeLabel(type: string): string {
    const labels: any = {
      'technique'  : 'Technique',
      'management' : 'Management',
      'soft_skills': 'Soft Skills',
      'certifiant' : 'Certifiant',
      'specialise' : 'Spécialisé',
      'general'    : 'Général',
    };
    return labels[type] ?? type;
  }
}