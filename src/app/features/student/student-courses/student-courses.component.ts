import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Formations } from '../../../shared/models/Formations.models';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-student-courses',
  imports: [CommonModule],
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss'],
})
export class StudentCoursesComponent implements OnInit {

  // Source principale (comme Admin RH)
  allFormations: Formations[] = [];

  // Données affichées
  formations: Formations[] = [];

  loading = false;
  error = '';

  // Pagination (même logique Admin RH)
  currentPage = 1;
  pageSize = 6;
  totalData = 0;
  totalPages = 0;
  skip = 0;
  limit = this.pageSize;

  pageNumberArray: { skip: number; limit: number }[] = [];

  constructor(
    private formationsService: FormationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFormations();
  }

  // 🔹 Récupération des formations
  getFormations(): void {
    this.loading = true;
    this.error = '';

    this.formationsService.getAllFormations().subscribe({
      next: (res: any) => {
        if (res?.formations) {
          this.allFormations = res.formations;
          this.totalData = this.allFormations.length;
          this.calculateTotalPages(this.totalData, this.pageSize);
          this.getTableData(this.skip, this.limit);
        } else {
          this.allFormations = [];
          this.formations = [];
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur chargement formations', err);
        this.error = 'Erreur lors du chargement des formations';
        this.loading = false;
      }
    });
  }

  // 🔹 Pagination centrale (copiée Admin RH)
  calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;

    if (this.totalPages % 1 !== 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }

    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push({ skip, limit });
    }
  }

  getTableData(skip: number, limit: number): void {
    this.formations = [];

    const start = skip;
    const end = Math.min(skip + limit, this.totalData);

    this.formations = this.allFormations.slice(start, end);
  }

  // 🔹 Navigation pagination
  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.limit = this.pageSize;
    this.getTableData(this.skip, this.limit);
  }

  // 🔹 Navigation vers détails
  goToDetails(formationId?: number): void {
    if (!formationId) return;
    this.router.navigate(['/courses/course-details-2', formationId]);
  }

  // 🔹 Helpers UI
  isFree(formation: Formations): boolean {
    return Number(formation.prix) === 0;
  }
}
