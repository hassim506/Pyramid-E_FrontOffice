import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormationsService } from '../../../shared/service/Formationsss/formations.service';
import {
  Formations,
  FormationsApiResponse
} from '../../../shared/models/Formations.models';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';



@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CustomPaginationComponent
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent implements OnInit {

  formations: Formations[] = [];
  allFormations: Formations[] = [];

  loading = false;

  /* Filtres */
  searchDataValue = '';
  selectedStatus = '';

  /* Pagination */
  currentPage = 1;
  pageSize = 9;
  totalData = 0;

  /* KPI employé */
  stats = {
    active: 0,     // formations en cours
    pending: 0,    // en attente validation RH
    completed: 0,  // terminées
  };

  constructor(private formationsService: FormationsService) {}

  ngOnInit(): void {
    this.loadMesFormations();
  }

  loadMesFormations(): void {
    this.loading = true;

    this.formationsService.getMesFormations().subscribe({
      next: (response: FormationsApiResponse) => {
        this.allFormations = response.formations ?? [];
        this.computeStats();
        this.applyFilters();
        this.totalData = this.allFormations.length;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  filterByStatus(status: string): void {
    this.selectedStatus = status;

    if (!status) {
      this.loadMesFormations();
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

  computeStats(): void {
    this.stats.active = this.allFormations.filter(f => f.status === 'active').length;
    this.stats.pending = this.allFormations.filter(f => f.status === 'pending').length;
    this.stats.completed = this.allFormations.filter(f => f.status === 'completed').length;
  }

  getFormationImage(f: Formations): string {
    return f.image_couverture || f.media_url || 'assets/images/default-course.jpg';
  }

  trackByFormation(_: number, item: Formations): number {
    return item.id;
  }
}
