import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formations } from '../../../shared/models/Formations.models';
import { FormationsService } from '../../../shared/service/Formations/formations.service';

import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-student-courses',
  imports: [CommonModule],
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss'],
})

export class StudentCoursesComponent implements OnInit {

  formations: Formations[] = [];
  paginatedFormations: Formations[] = [];
  loading = true;

  // Pagination
  currentPage = 1;
  pageSize = 6;
  totalPages = 0;

  constructor(
    private formationsService: FormationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.loading = true;

    this.formationsService.getAllFormations().subscribe({
      next: (res: any) => {
        this.formations = res.formations || [];
        this.totalPages = Math.ceil(this.formations.length / this.pageSize);
        this.updatePagination();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur chargement formations', err);
        this.loading = false;
      }
    });
  }

  updatePagination(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedFormations = this.formations.slice(start, end);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagination();
  }

goToDetails(formationId?: number): void {
  if (!formationId) {
    return;
  }

  this.router.navigate(['/courses/course-details-2', formationId]);
}

}
