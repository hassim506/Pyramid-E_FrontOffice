// src/app/features/student/mes-cours/mes-cours.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Formations, FormationsApiResponse } from '../../../shared/models/Formations.models';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';
import { FormsModule } from '@angular/forms';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';

@Component({
  standalone: true,
  selector: 'app-mes-cours',
  imports: [ CommonModule,
    FormsModule,
  CustomPaginationComponent],
  templateUrl: './mes-cours.component.html',
  styleUrls: ['./mes-cours.component.scss'],
})
export class MesCoursComponent implements OnInit {

  /** 🔹 Source complète */
  allFormations: Formations[] = [];

  /** 🔹 Page courante */
  formations: Formations[] = [];

  loading = false;
  error = '';

  /** Pagination */
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
    this.getMesFormations();
  }

  /** 🔥 Chargement formations employé */
  getMesFormations(): void {
    this.loading = true;
    this.error = '';

    this.formationsService.getMesFormations().subscribe({
      next: (res) => {
        this.allFormations = res.formations ?? [];
        this.totalData = this.allFormations.length;
        this.calculateTotalPages(this.totalData, this.pageSize);
        this.getTableData(this.skip, this.limit);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Erreur lors du chargement de vos formations';
        this.loading = false;
      }
    });
  }

  /** Pagination */
  calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = Math.ceil(totalData / pageSize);

    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push({ skip, limit });
    }
  }

  getTableData(skip: number, limit: number): void {
    const start = skip;
    const end = Math.min(skip + limit, this.totalData);
    this.formations = this.allFormations.slice(start, end);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.getTableData(this.skip, this.limit);
  }

  /** Navigation */
  goToDetails(id?: number): void {
    if (!id) return;
    this.router.navigate(['/courses/course-details-2', id]);
  }

  isFree(formation: Formations): boolean {
    return Number(formation.prix) === 0;
  }

  // 🔹 etat du bouton
  getCourseActionLabel(formation: Formations): string {
    const progression = Number(formation.progression ?? 0);

    if (progression === 100) return 'Terminé';
    if (progression > 0) return 'Continuer';
    return 'Commencer';
  }

  // 🔹 état du bouton si fini
  isCourseFinished(formaion: any): boolean {
    return Number(formaion.progression ?? 0) === 100;
  }

 
  // 🔹 Redirection vers page de lecture formation
  startCourses(id?: number): void {
  if (!id) return;
  this.router.navigate(['/student/lecture-formation', id]);
}

  // ======================= FILTRES =======================

  selectedStatus: string = '';
  searchDataValue: string = '';

  filterByStatus(status: string): void {
    this.selectedStatus = status;

    if (!status) {
      this.getMesFormations();
      return;
    }

    this.loading = true;
    this.formationsService.getMesFormationsByStatus(status).subscribe({
      next: (response: FormationsApiResponse) => {
        this.allFormations = response.formations ?? [];
        this.applyFilters();
        this.totalData = this.allFormations.length;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  searchData(value: string): void {
    this.searchDataValue = value;
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.allFormations];

    if (this.searchDataValue) {
      const search = this.searchDataValue.toLowerCase();
      filtered = filtered.filter(f =>
        f.titre.toLowerCase().includes(search) ||
        f.description.toLowerCase().includes(search)
      );
    }

    this.formations = filtered.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.applyFilters();
  }

}

