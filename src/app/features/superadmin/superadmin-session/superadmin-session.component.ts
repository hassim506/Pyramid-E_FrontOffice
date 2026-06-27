import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { SessionFormationService, SessionFormation } from '../../../shared/service/session/session-formation.service';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { Company } from '../../../shared/models/client-company.models';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-superadmin-session',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, CustomPaginationComponent],
  templateUrl: './superadmin-session.component.html',
  styleUrls: ['./superadmin-session.component.scss']
})
export class SuperadminSessionComponent implements OnInit {
  routes = routes;

  allSessions: SessionFormation[] = [];
  sessions: SessionFormation[] = [];
  companies: Company[] = [];

  loading = false;
  error = '';

  // Filters
  searchTerm = '';
  selectedEntreprise = '';
  selectedStatut = '';
  selectedType = '';
  dateDebut = '';
  dateFin = '';

  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalData = 0;

  // Stats
  stats = { total: 0, planifiees: 0, enCours: 0, terminees: 0, annulees: 0 };

  constructor(
    private sessionService: SessionFormationService,
    private companyService: ClientCompanyService
  ) {}

  ngOnInit(): void {
    this.loadSessions();
    this.loadCompanies();
  }

  loadSessions(): void {
    this.loading = true;
    this.error = '';

    this.sessionService.getAllSessions().subscribe({
      next: (response) => {
        this.loading = false;
        if (response?.status && response.sessions) {
          this.allSessions = response.sessions;
          this.calculateStats();
          this.applyFilters();
        } else {
          this.error = 'Aucune session trouvée';
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Erreur chargement sessions:', err);
        this.error = httpErrorMessage(err, 'Impossible de charger les sessions.');
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
      total: this.allSessions.length,
      planifiees: this.allSessions.filter(s => s.statut === 'planifiee').length,
      enCours: this.allSessions.filter(s => s.statut === 'en_cours').length,
      terminees: this.allSessions.filter(s => s.statut === 'terminee').length,
      annulees: this.allSessions.filter(s => s.statut === 'annulee').length
    };
  }

  applyFilters(): void {
    let data = [...this.allSessions];

    if (this.searchTerm) {
      const q = this.searchTerm.toLowerCase();
      data = data.filter(s =>
        s.titre?.toLowerCase().includes(q) ||
        s.code_session?.toLowerCase().includes(q) ||
        s.lieu?.toLowerCase().includes(q) ||
        s.formation?.titre?.toLowerCase().includes(q) ||
        s.formateur?.nom?.toLowerCase().includes(q) ||
        s.formateur?.prenom?.toLowerCase().includes(q)
      );
    }

    if (this.selectedStatut) {
      data = data.filter(s => s.statut === this.selectedStatut);
    }

    if (this.selectedType) {
      data = data.filter(s => s.type === this.selectedType);
    }

    if (this.selectedEntreprise) {
      data = data.filter(s =>
        s.formation?.entreprise_id === +this.selectedEntreprise ||
        s.organisateur?.entreprise_id === +this.selectedEntreprise
      );
    }

    if (this.dateDebut) {
      const d = new Date(this.dateDebut);
      data = data.filter(s => new Date(s.date_debut) >= d);
    }

    if (this.dateFin) {
      const d = new Date(this.dateFin);
      data = data.filter(s => new Date(s.date_debut) <= d);
    }

    this.totalData = data.length;
    const start = (this.currentPage - 1) * this.pageSize;
    this.sessions = data.slice(start, start + this.pageSize);
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
    this.selectedStatut = '';
    this.selectedType = '';
    this.dateDebut = '';
    this.dateFin = '';
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

  deleteSession(session: SessionFormation): void {
    if (confirm(`Supprimer la session "${session.titre}" ?`)) {
      this.sessionService.deleteSession(session.id).subscribe({
        next: () => this.loadSessions(),
        error: (err) => {
          console.error('Erreur suppression:', err);
          this.error = 'Erreur lors de la suppression';
        }
      });
    }
  }

  formatDate(date: string): string {
    if (!date) return '—';
    return new Date(date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  formatDateShort(date: string): string {
    if (!date) return '—';
    return new Date(date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
  }

  getStatutData(statut: string): string {
    const map: Record<string, string> = {
      planifiee: 'plan',
      en_cours: 'live',
      terminee: 'done',
      annulee: 'cancel'
    };
    return map[statut] || 'draft';
  }

  getStatutLabel(statut: string): string {
    const map: Record<string, string> = {
      planifiee: 'Planifiée',
      en_cours: 'En cours',
      terminee: 'Terminée',
      annulee: 'Annulée'
    };
    return map[statut] || statut;
  }

  getTypeData(type: string): string {
    const map: Record<string, string> = {
      presentiel: 'pub',
      distanciel: 'pending',
      hybride: 'done'
    };
    return map[type] || 'draft';
  }

  getTypeLabel(type: string): string {
    const map: Record<string, string> = {
      presentiel: 'Présentiel',
      distanciel: 'Distanciel',
      hybride: 'Hybride'
    };
    return map[type] || type;
  }

  getCompanyName(entrepriseId: number | undefined): string {
    if (!entrepriseId) return '—';
    const c = this.companies.find(co => co.id === entrepriseId);
    return c ? c.nom : `#${entrepriseId}`;
  }

  trackBySession(index: number, session: SessionFormation): number {
    return session.id;
  }

  get hasActiveFilters(): boolean {
    return !!(this.searchTerm || this.selectedEntreprise || this.selectedStatut || this.selectedType || this.dateDebut || this.dateFin);
  }
}
