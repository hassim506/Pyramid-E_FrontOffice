import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DemandeFormationService } from '../../../shared/service/demande/demande-formation.service';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';

@Component({
  standalone: true,
  selector: 'app-student-certificate',
  templateUrl: './student-certificate.component.html',
  styleUrl: './student-certificate.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomPaginationComponent
  ]
})
export class StudentCertificateComponent {

  loading = true;

  /** =======================
   *  DONNÉES
   * ======================= */
  allDemandes: any[] = [];
  demandes: any[] = [];

  /** =======================
   *  FILTRES
   * ======================= */
  searchDataValue = '';
  selectedStatus = '';

  /** =======================
   *  PAGINATION
   * ======================= */
  totalData = 0;
  pageSize = 10;
  currentPage = 1;
  skip = 0;
  limit = 10;

  constructor(
    private demandeFormationService: DemandeFormationService
  ) {}

  ngOnInit(): void {
    this.loadDemandes();
  }

  /** =======================
   *  CHARGEMENT API
   * ======================= */
  loadDemandes(): void {
    this.loading = true;

    this.demandeFormationService.getMesDemandes().subscribe({
      next: (res: any) => {
        const demandes = res.demandes ?? res;

        // ✅ NORMALISATION DES DONNÉES FORMATION
        this.allDemandes = demandes.map((d: any) => ({
          ...d,
          formation: {
            ...d.formation,
            categorie: d.formation?.categorie ?? null,
            niveau: d.formation?.niveau ?? '—',
            langue: d.formation?.langue ?? 'FR',
            difficulte: d.formation?.difficulte ?? '—'
          }
        }));

        this.totalData = this.allDemandes.length;
        this.getTableData(this.skip, this.limit);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  /** =======================
   *  FILTRE + RECHERCHE + PAGINATION
   * ======================= */
  getTableData(skip: number, limit: number): void {
    let filteredData = [...this.allDemandes];

    if (this.selectedStatus) {
      filteredData = filteredData.filter(
        d => d.statut === this.selectedStatus
      );
    }

    if (this.searchDataValue) {
      const search = this.searchDataValue.toLowerCase();
      filteredData = filteredData.filter(d =>
        d.formation?.titre?.toLowerCase().includes(search) ||
        d.formation?.description?.toLowerCase().includes(search) ||
        d.formation?.formateur_nom?.toLowerCase().includes(search) ||
        d.formation?.categorie?.nom?.toLowerCase().includes(search)
      );
    }

    this.totalData = filteredData.length;
    this.demandes = filteredData.slice(skip, skip + limit);
  }

  searchData(value: string): void {
    this.searchDataValue = value;
    this.currentPage = 1;
    this.skip = 0;
    this.getTableData(this.skip, this.limit);
  }

  filterByStatus(status: string): void {
    this.selectedStatus = status;
    this.currentPage = 1;
    this.skip = 0;
    this.getTableData(this.skip, this.limit);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.getTableData(this.skip, this.pageSize);
  }

  /** =======================
   *  UI HELPERS
   * ======================= */
  annulerDemande(id: number): void {
    this.demandeFormationService.annulerDemande(id).subscribe(() => {
      this.loadDemandes();
    });
  }
}
