import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormationsService } from '../../../shared/service/Formationsss/formations.service';
import {
  Formations,
  FormationsApiResponse
} from '../../../shared/models/Formations.models';

import { DemandeFormationService } from '../../../shared/service/demande/demande-formation.service';
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

  /** ======================= FORMATIONS ======================= */
  formations: Formations[] = [];
  allFormations: Formations[] = [];
  loading = false;

  /** ======================= FILTRES ======================= */
  searchDataValue = '';
  selectedStatus = '';

  /** ======================= PAGINATION ======================= */
  currentPage = 1;
  pageSize = 9;
  totalData = 0;

  /** ======================= KPI ======================= */
  stats = {
    active: 0,
    pending: 0,       // basé sur demandes RH
    completed: 0,
    certificates: 0   // 🔥 NOUVEAU
  };

  /** ======================= DEMANDES ======================= */
  hasPendingDemandes = false;
  pendingDemandesCount = 0;

  constructor(
    private formationsService: FormationsService,
    private demandeFormationService: DemandeFormationService
  ) {}

  ngOnInit(): void {
    this.loadMesFormations();
    this.loadPendingDemandes();
    this.loadCertificates();
  }

  /** ======================= FORMATIONS ======================= */
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

  computeStats(): void {
    this.stats.active = this.allFormations.filter(f => f.status === 'active').length;
    this.stats.completed = this.allFormations.filter(f => f.status === 'completed').length;

    // pending basé uniquement sur demandes RH
    this.stats.pending = this.pendingDemandesCount;
  }

  /** ======================= DEMANDES ======================= */
  loadPendingDemandes(): void {
    this.demandeFormationService.getDemandesFormation().subscribe({
      next: (res: any) => {
        const demandes = res.demandes ?? res;

        const pending = demandes.filter(
          (d: any) => d.statut === 'pending'
        );

        this.pendingDemandesCount = pending.length;
        this.hasPendingDemandes = this.pendingDemandesCount > 0;

        this.computeStats(); // 🔥 important
      },
      error: () => {
        this.hasPendingDemandes = false;
      }
    });
  }

  /** ======================= CERTIFICATS ======================= */
  loadCertificates(): void {
    this.formationsService.getMyCertificates().subscribe({
      next: (res: any) => {
        const certificates = res.certificats ?? res;
        this.stats.certificates = certificates.length ?? 0;
      },
      error: () => {
        this.stats.certificates = 0;
      }
    });
  }

  /** ======================= ACTIONS POUR LES CERTIFICATS ======================= */

viewCertificate(formationId: number): void {
  this.formationsService.viewCertificate(formationId).subscribe({
    next: (res: any) => {
      const url = res.url ?? res.certificate_url;
      if (url) {
        window.open(url, '_blank');
      }
    },
    error: (err) => {
      console.error('Erreur visualisation certificat', err);
    }
  });
}

downloadCertificate(formationId: number): void {
  this.formationsService.downloadCertificate(formationId).subscribe({
    next: (blob: Blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = fileURL;
      a.download = `certificat_formation_${formationId}.pdf`;
      a.click();
      window.URL.revokeObjectURL(fileURL);
    },
    error: (err) => {
      console.error('Erreur téléchargement certificat', err);
    }
  });
}


  /** ======================= FILTRES ======================= */
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

  /** ======================= UI ======================= */
  getFormationImage(f: Formations): string {
    return f.image_couverture || f.media_url || 'assets/images/default-course.jpg';
  }

  trackByFormation(_: number, item: Formations): number {
    return item.id;
  }
}
