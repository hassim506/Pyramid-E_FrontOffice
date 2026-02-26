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

  formations: Formations[] = [];
  allFormations: Formations[] = [];
  loading = false;

  searchDataValue = '';
  selectedStatus = '';

  currentPage = 1;
  pageSize = 9;
  totalData = 0;

  stats = {
    active: 0,
    pending: 0,
    completed: 0,
    certificates: 0
  };

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

  /**
   * ===============================
   * CHARGER MES FORMATIONS
   * ===============================
   */
  loadMesFormations(): void {
    this.loading = true;

    this.formationsService.getMesFormations().subscribe({
      next: (response: FormationsApiResponse) => {

        // 🔥 On garde les données telles que renvoyées par l'API
        this.allFormations = response.formations ?? [];

        this.computeStats();
        this.applyFilters();

        this.totalData = this.allFormations.length;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  /**
   * ===============================
   * CALCUL KPI
   * ===============================
   */
  computeStats(): void {

    this.stats.active =
      this.allFormations.filter(f => f.statut_formation === 'en_cours').length;

    this.stats.completed =
      this.allFormations.filter(f => f.statut_formation === 'termine').length;

    this.stats.pending =
      this.pendingDemandesCount;

    // 🔥 certificats = formations terminées
    this.stats.certificates =
      this.allFormations.filter(f => f.statut_formation === 'termine').length;
  }

  /**
   * ===============================
   * DEMANDES EN ATTENTE
   * ===============================
   */
  loadPendingDemandes(): void {
    this.demandeFormationService.getMesDemandes().subscribe({
      next: (res: any) => {
           console.log('✅ RÉPONSE DEMANDES:', res); // ← ajoutez ceci
        const demandes = res.demandes ?? res;
        
        const pending = demandes.filter(
          (d: any) => d.statut === 'pending'
        );

        this.pendingDemandesCount = pending.length;
        this.hasPendingDemandes = this.pendingDemandesCount > 0;

        this.computeStats();
      }
    });
  }

  /**
   * ===============================
   * CERTIFICATS
   * ===============================
   */
  loadCertificates(): void {
    this.formationsService.getMyCertificates().subscribe({
      next: (res: any) => {
        const certificates = res.certificats ?? res;
        this.stats.certificates = certificates.length ?? 0;
      }
    });
  }

  viewCertificate(formationId: number): void {
    this.formationsService.viewCertificate(formationId).subscribe({
      next: (res: any) => {
        const url = res.url ?? res.certificate_url;
        if (url) window.open(url, '_blank');
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
      }
    });
  }

  /**
   * ===============================
   * FILTRES
   * ===============================
   */
  applyFilters(): void {

    let filtered = [...this.allFormations];

    // 🔍 Recherche
    if (this.searchDataValue) {
      const search = this.searchDataValue.toLowerCase();

      filtered = filtered.filter(f =>
        f.titre?.toLowerCase().includes(search) ||
        f.description?.toLowerCase().includes(search)
      );
    }

    // 🔥 Filtre par statut (backend direct)
    if (this.selectedStatus) {
      filtered = filtered.filter(
        f => f.statut_formation === this.selectedStatus
      );
    }

    this.totalData = filtered.length;

    this.formations = filtered.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }

  filterByStatus(status: string): void {
    this.selectedStatus = status;
    this.currentPage = 1;
    this.applyFilters();
  }

  searchData(value: string): void {
    this.searchDataValue = value;
    this.currentPage = 1;
    this.applyFilters();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.applyFilters();
  }

  /**
   * ===============================
   * UTILITAIRES
   * ===============================
   */
  getFormationImage(f: Formations): string {
    return f.image_couverture || f.media_url || 'assets/images/default-course.jpg';
  }

  trackByFormation(_: number, item: Formations): number {
    return item.id;
  }
}