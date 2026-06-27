import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { ParcoursService, Parcours } from '../../../shared/service/parcours/parcours.service';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { Company } from '../../../shared/models/client-company.models';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-superadmin-parcours',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, CustomPaginationComponent],
  templateUrl: './superadmin-parcours.component.html',
  styleUrls: ['./superadmin-parcours.component.scss']
})
export class SuperadminParcoursComponent implements OnInit {
  routes = routes;

  allParcours: Parcours[] = [];
  parcours: Parcours[] = [];
  companies: Company[] = [];

  loading = false;
  error = '';

  // Filters
  searchTerm = '';
  selectedEntreprise = '';
  selectedNiveau = '';
  selectedStatut = '';

  niveaux = ['Débutant', 'Intermédiaire', 'Avancé', 'Expert'];

  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalData = 0;

  // Stats
  stats = { total: 0, actifs: 0, inactifs: 0, gratuits: 0, payants: 0 };

  constructor(
    private parcoursService: ParcoursService,
    private companyService: ClientCompanyService
  ) {}

  ngOnInit(): void {
    this.loadParcours();
    this.loadCompanies();
  }

  loadParcours(): void {
    this.loading = true;
    this.error = '';

    this.parcoursService.getParcours(1, 1000).subscribe({
      next: (response) => {
        this.loading = false;
        if (response?.status && response.parcours) {
          this.allParcours = response.parcours.map(p => ({ ...p, actif: Boolean(p.actif) }));
          this.calculateStats();
          this.applyFilters();
        } else {
          this.error = 'Aucun parcours trouvé';
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Erreur chargement parcours:', err);
        this.error = httpErrorMessage(err, 'Impossible de charger les parcours.');
      }
    });
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe({
      next: (response: any) => {
        this.companies = response?.entreprises || response?.data || (Array.isArray(response) ? response : []);
      },
      error: () => { this.companies = []; }
    });
  }

  calculateStats(): void {
    this.stats = {
      total: this.allParcours.length,
      actifs: this.allParcours.filter(p => p.actif).length,
      inactifs: this.allParcours.filter(p => !p.actif).length,
      gratuits: this.allParcours.filter(p => parseFloat(p.prix || '0') === 0).length,
      payants: this.allParcours.filter(p => parseFloat(p.prix || '0') > 0).length
    };
  }

  applyFilters(): void {
    let data = [...this.allParcours];

    if (this.searchTerm) {
      const q = this.searchTerm.toLowerCase();
      data = data.filter(p =>
        p.nom?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
      );
    }

    if (this.selectedEntreprise) {
      data = data.filter(p => p.entreprise_id === +this.selectedEntreprise);
    }

    if (this.selectedNiveau) {
      data = data.filter(p => p.niveau === this.selectedNiveau);
    }

    if (this.selectedStatut === 'actif') {
      data = data.filter(p => p.actif);
    } else if (this.selectedStatut === 'inactif') {
      data = data.filter(p => !p.actif);
    }

    this.totalData = data.length;
    const start = (this.currentPage - 1) * this.pageSize;
    this.parcours = data.slice(start, start + this.pageSize);
  }

  onSearch(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedEntreprise = '';
    this.selectedNiveau = '';
    this.selectedStatut = '';
    this.currentPage = 1;
    this.applyFilters();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.applyFilters();
  }

  PageSize(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  deleteParcours(p: Parcours): void {
    if (confirm(`Supprimer le parcours "${p.nom}" ?`)) {
      this.parcoursService.deleteParcours(p.id).subscribe({
        next: () => this.loadParcours(),
        error: (err) => {
          console.error('Erreur suppression:', err);
          this.error = 'Erreur lors de la suppression';
        }
      });
    }
  }

  getCompanyName(entrepriseId: number): string {
    const c = this.companies.find(co => co.id === entrepriseId);
    return c ? c.nom : `#${entrepriseId}`;
  }

  formatPrix(prix: string | undefined): string {
    const v = parseFloat(prix || '0');
    return v === 0 ? 'Gratuit' : `${v.toFixed(0)} FCFA`;
  }

  isGratuit(prix: string | undefined): boolean {
    return parseFloat(prix || '0') === 0;
  }

  getNiveauData(niveau: string): string {
    const map: Record<string, string> = {
      'Débutant': 'pub',
      'Intermédiaire': 'pending',
      'Avancé': 'done',
      'Expert': 'plan'
    };
    return map[niveau] || 'draft';
  }

  trackByParcours(index: number, p: Parcours): number {
    return p.id;
  }

  get hasActiveFilters(): boolean {
    return !!(this.searchTerm || this.selectedEntreprise || this.selectedNiveau || this.selectedStatut);
  }
}
