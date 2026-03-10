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

  catalogue:  any    = null;
  formations: any[]  = [];
  loading            = true;
  error              = '';

  // ✅ Source badge
  source     = 'assigne';
  badgeLabel = 'Assigné';

  // Recherche
  searchQuery         = '';
  filteredFormations: any[] = [];

  // Pagination
  currentPage  = 1;
  pageSize     = 6;
  totalPages   = 0;
  paginatedFormations: any[] = [];

  constructor(
    private route:             ActivatedRoute,
    private router:            Router,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error   = 'Catalogue introuvable';
      this.loading = false;
      return;
    }
    this.loadCatalogueDetail(id);
  }

  loadCatalogueDetail(id: number): void {
    this.loading = true;

    // ✅ 1. Récupérer source + badge_label depuis la liste assignés
    this.formationsService.getMesCataloguesAssignes().subscribe({
      next: (res: any) => {
        const all  = res.catalogues ?? [];
        const meta = all.find((c: any) => c.id === id);
        this.source     = meta?.source      ?? 'assigne';
        this.badgeLabel = meta?.badge_label ?? 'Assigné';

        // ✅ 2. Charger le détail formations
        this.formationsService.getCatalogueDetail(id).subscribe({
          next: (r: any) => {
            this.catalogue          = r.catalogue;
            this.formations         = r.formations ?? [];
            this.filteredFormations = [...this.formations];
            this.totalPages         = Math.ceil(this.filteredFormations.length / this.pageSize);
            this.paginate();
            this.loading = false;
          },
          error: () => {
            this.error   = 'Catalogue introuvable';
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

  goToDetails(formationId: number): void {
    this.router.navigate(['/courses/course-details-2', formationId], {
      state: { fromCatalogue: true, catalogueId: this.catalogue?.id }
    });
  }

  goBack(): void {
    this.router.navigate(['/student/student-courses']);
  }

  isFree(formation: any): boolean {
    return Number(formation.prix) === 0;
  }
  commencerFormation(formationId: number, event: Event): void {
  event.stopPropagation();
  this.router.navigate(['/student/lecture-formation', formationId]);
}
}