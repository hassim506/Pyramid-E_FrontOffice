// src/app/features/student/mes-cours/mes-cours.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Formations } from '../../../shared/models/Formations.models';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-mes-cours',
  imports: [CommonModule],
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

}
