import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-catalogue-detail',
  imports: [CommonModule],
  templateUrl: './catalogue-detail.component.html',
  styleUrls: ['./catalogue-detail.component.scss'],
})
export class CatalogueDetailComponent implements OnInit {

  catalogue: any = null;
  formations: any[] = [];
  loading = false;
  error = '';

  // Pagination
  currentPage = 1;
  pageSize = 6;
  totalPages = 0;
  paginatedFormations: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.loadCatalogueDetail(id);
  }

  loadCatalogueDetail(id: number): void {
    this.loading = true;
    this.formationsService.getCatalogueDetail(id).subscribe({
      next: (res: any) => {
        this.catalogue  = res.catalogue;
        this.formations = res.formations ?? [];
        this.totalPages = Math.ceil(this.formations.length / this.pageSize);
        this.paginate();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur catalogue detail:', err.error);
        this.error   = 'Catalogue introuvable';
        this.loading = false;
      }
    });
  }

  paginate(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedFormations = this.formations.slice(start, start + this.pageSize);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginate();
  }

  goToDetails(formationId: number): void {
    this.router.navigate(['/courses/course-details-2', formationId]);
  }

  goBack(): void {
    this.router.navigate(['/student/student-courses']);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  isFree(formation: any): boolean {
    return Number(formation.prix) === 0;
  }
}