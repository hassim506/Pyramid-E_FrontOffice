import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { FormsModule } from '@angular/forms';
import { MatSortModule, Sort } from '@angular/material/sort';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { routes } from '../../../shared/service/routes/routes';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { Formation } from '../../../shared/models/formation.models';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { Company } from '../../../shared/models/client-company.models';

@Component({
  selector: 'app-superadmin-course',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatSortModule, CustomPaginationComponent],
  templateUrl: './superadmin-course.component.html',
  styleUrls: ['./superadmin-course.component.scss']
})
export class SuperadminCourseComponent implements OnInit {
  routes = routes;

  allFormations: Formation[] = [];
  formations: Formation[] = [];
  searchDataValue = '';
  selectedStatus = '';
  loading = false;
  error = '';
  currentPage = 1;

  pageSize = 10;
  serialNumberArray: number[] = [];
  totalData = 0;

  stats = { active: 0, pending: 0, draft: 0, free: 0, paid: 0 };
  entrepriseId: number | null = null;
  companies: Company[] = [];

  pageNumberArray: { skip: number; limit: number }[] = [];
  totalPages = 0;
  skip = 0;
  limit = 10;

  constructor(
    private formationService: FormationService,
    private route: ActivatedRoute,
    private companyService: ClientCompanyService,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('entreprise_id');
      this.entrepriseId = id ? +id : null;
      this.getFormationsList();
    });
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe({
      next: (response: any) => {
        this.companies = response?.entreprises || response?.data || (Array.isArray(response) ? response : []);
      },
      error: () => { this.companies = []; }
    });
  }

  getCompanyName(entrepriseId: number | undefined): string {
    if (!entrepriseId) return '—';
    const c = this.companies.find(co => co.id === entrepriseId);
    return c ? c.nom : `#${entrepriseId}`;
  }

  // ✅ prix est string | number | undefined
  isFormationGratuite(formation: Formation): boolean {
    return parseFloat(String(formation.prix ?? 0)) === 0;
  }

  formatPrix(prix: string | number | undefined): string {
    const montant = parseFloat(String(prix ?? 0));
    return montant === 0 ? 'Gratuit' : `${montant.toFixed(2)} FCFA`;
  }

  trackByFormation(index: number, formation: Formation): number {
    return formation.id;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.getTableData(this.skip, this.pageSize);
  }

  getFormationsList(): void {
    this.loading = true;
    this.error = '';
    this.formations = [];

    this.formationService.getFormations({ page: 1, limit: 10, ...(this.entrepriseId ? { entreprise_id: this.entrepriseId } : {}) }).subscribe({
      next: (response) => {
        if (response.status && response.formations) {
          this.allFormations = response.formations;
          this.formations = [...this.allFormations];
          this.totalData = this.formations.length;
          this.calculateStats();
          this.calculateTotalPages(this.totalData, this.pageSize);
        } else {
          this.error = 'Aucune formation trouvée';
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur chargement formations:', error);
        this.error = httpErrorMessage(error, 'Impossible de charger les formations.');
        this.loading = false;
      }
    });
  }

  calculateStats(): void {
    this.stats = {
      active:  this.allFormations.filter(f => f.est_publie && f.inscription_ouverte).length,
      pending: this.allFormations.filter(f => !f.est_publie && !f.inscription_ouverte).length,
      draft:   this.allFormations.filter(f => !f.est_publie).length,
      free:    this.allFormations.filter(f => this.isFormationGratuite(f)).length,
      paid:    this.allFormations.filter(f => !this.isFormationGratuite(f)).length
    };
  }

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
    this.serialNumberArray = [];
    this.formations = [];

    let filteredData = [...this.allFormations];

    if (this.selectedStatus) {
      switch (this.selectedStatus.toLowerCase()) {
        case 'published':
          filteredData = filteredData.filter(f => f.est_publie && f.inscription_ouverte);
          break;
        case 'pending':
          filteredData = filteredData.filter(f => !f.est_publie && !f.inscription_ouverte);
          break;
        case 'draft':
          filteredData = filteredData.filter(f => !f.est_publie);
          break;
      }
    }

    if (this.searchDataValue) {
      const search = this.searchDataValue.toLowerCase();
      filteredData = filteredData.filter(f =>
        f.titre?.toLowerCase().includes(search) ||
        f.description?.toLowerCase().includes(search) ||
        f.formateur_nom?.toLowerCase().includes(search) ||
        f.categorie?.nom?.toLowerCase().includes(search)
      );
    }

    this.totalData = filteredData.length;
    this.calculateTotalPages(this.totalData, this.pageSize);

    const start = skip;
    const end = Math.min(skip + limit, this.totalData);
    for (let i = start; i < end; i++) {
      this.serialNumberArray.push(i + 1);
    }
    this.formations = filteredData.slice(start, end);
  }

  searchData(searchValue: string): void {
    this.searchDataValue = searchValue;
    this.skip = 0;
    this.getTableData(this.skip, this.limit);
  }

  filterByStatus(status: string): void {
    this.selectedStatus = status;
    this.skip = 0;
    this.getTableData(this.skip, this.limit);
  }

  sortData(sort: Sort): void {
    if (!sort.active || sort.direction === '') return;

    this.allFormations.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'titre':
          return this.compare(a.titre ?? '', b.titre ?? '', isAsc);
        case 'formateur':
          return this.compare(a.formateur_nom ?? '', b.formateur_nom ?? '', isAsc);
        case 'prix':
          return this.compare(
            parseFloat(String(a.prix ?? 0)),
            parseFloat(String(b.prix ?? 0)),
            isAsc
          );
        case 'duree':
          return this.compare(a.duree_totale ?? 0, b.duree_totale ?? 0, isAsc);
        case 'participants':
          return this.compare(a.nb_max_participants ?? 0, b.nb_max_participants ?? 0, isAsc);
        default:
          return 0;
      }
    });

    this.getTableData(this.skip, this.limit);
  }

  private compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  getMoreData(event: string): void {
    if (event === 'next') {
      this.skip += this.limit;
      this.getTableData(this.skip, this.limit);
    } else if (event === 'previous') {
      this.skip -= this.limit;
      this.getTableData(this.skip, this.limit);
    }
  }

  moveToPage(pageNumber: number): void {
    this.skip = this.pageNumberArray[pageNumber - 1].skip;
    this.limit = this.pageNumberArray[pageNumber - 1].limit - this.skip;
    this.getTableData(this.skip, this.limit);
  }

  PageSize(): void {
    this.skip = 0;
    this.getTableData(this.skip, this.pageSize);
  }

  getStatusClass(formation: Formation): string {
    if (formation.est_publie && formation.inscription_ouverte) return 'bg-success';
    if (!formation.est_publie) return 'bg-info';
    return 'bg-secondary';
  }

  getStatusText(formation: Formation): string {
    if (formation.est_publie && formation.inscription_ouverte) return 'Publié';
    if (!formation.est_publie) return 'Brouillon';
    return 'En attente';
  }

  getDefaultImage(formation: Formation): string {
    return this.formationService.getImageUrl(formation.image_couverture);
  }

  deleteFormation(formation: Formation): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer la formation "${formation.titre}" ?`)) {
      this.loading = true;
      this.formationService.deleteFormation(formation.id).subscribe({
        next: () => this.getFormationsList(),
        error: (error) => {
          console.error('Erreur suppression:', error);
          this.error = 'Erreur lors de la suppression de la formation';
          this.loading = false;
        }
      });
    }
  }
}