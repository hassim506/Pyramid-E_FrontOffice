import { Component, OnInit } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { pageSelection } from '../../../shared/models/model';
import { DataService } from '../../../shared/service/data/data.service';
import { PaginationService, tablePageSize } from '../../../shared/service/custom-pagination/pagination.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { DemandeFormation, DemandeFormationResponse } from '../../../shared/models/formation.models';
import { DemandeFormationService } from '../../../shared/service/demande/demande-formation.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';

interface StatutFilter {
  value: string;
  label: string;
  count: number;
  color: string;
}

@Component({
  selector: 'app-adminrh-demande',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent],
  templateUrl: './adminrh-demande.component.html',
  styleUrl: './adminrh-demande.component.scss'
})
export class AdminrhDemandeComponent implements OnInit {
  routes = routes;

  // Variables de pagination
  public pageSize: number = 10;
  public tableData: DemandeFormation[] = [];
  public tableDataCopy: DemandeFormation[] = [];
  public actualData: DemandeFormation[] = [];
  public currentPage: number = 1;
  public skip: number = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData: number = 0;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<DemandeFormation>;
  public searchDataValue: string = '';

  // Variables de gestion d'état
  loading: boolean = false;
  error: string = '';
  successMessage: string = '';

  // Filtres
  selectedStatutFilter: string = 'tous';
  selectedPrioriteFilter: string = 'tous';

  // Données utilisateur connecté
  public currentUser: any;

  // Statistiques
  public stats: any = {};

  // Source non filtrée
  private allDemandes: DemandeFormation[] = [];
  activeTab: string = 'tous';

  // Filtres de statut
  public statutFilters: StatutFilter[] = [
    { value: 'tous', label: 'Tous les statuts', count: 0, color: 'secondary' },
    { value: 'en_attente', label: 'En attente', count: 0, color: 'warning' },
    { value: 'validee', label: 'Validées', count: 0, color: 'success' },
    { value: 'refusee', label: 'Refusées', count: 0, color: 'danger' },
    { value: 'annulee', label: 'Annulées', count: 0, color: 'secondary' }
  ];

  // Actions en cours
  validatingIds: Set<number> = new Set();
  refusingIds: Set<number> = new Set();

  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService,
    private demandeFormationService: DemandeFormationService,
    private authService: AuthService
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url === '/adminrh/adminrh-demande' || this.router.url.includes('adminrh-demande')) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }

  ngOnInit(): void {
    this.initializeUser();
    this.loadDemandes();
  }

  // === INITIALISATION ===

  private initializeUser(): void {
    this.currentUser = this.authService.getUser();
    if (!this.currentUser) {
      this.error = 'Utilisateur non connecté. Veuillez vous reconnecter.';
      console.error('❌ Aucun utilisateur connecté');
      return;
    }
    console.log('👤 Utilisateur connecté:', this.currentUser);
  }

  // === MÉTHODES DE CHARGEMENT DES DONNÉES ===

  private loadDemandes(): void {
    if (!this.currentUser) {
      this.error = 'Utilisateur non connecté.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.successMessage = '';

    console.log('🔄 Chargement des demandes de formation...');

    this.demandeFormationService.getDemandesFormation().subscribe({
      next: (response: DemandeFormationResponse) => {
        console.log('📦 Réponse API demandes formation:', response);

        try {
          this.allDemandes = response.demandes || [];

          this.stats = {
            total:      this.allDemandes.length,
            en_attente: this.allDemandes.filter(d => d.statut === 'en_attente').length,
            validee:    this.allDemandes.filter(d => d.statut === 'validee').length,
            refusee:    this.allDemandes.filter(d => d.statut === 'refusee').length,
            annulee:    this.allDemandes.filter(d => d.statut === 'annulee').length,
          };
          this.updateStatutFilters();

          this.actualData = [...this.allDemandes];
          this.totalData = this.actualData.length;
          this.applyFilters();
          this.loading = false;

          console.log('✅ Demandes chargées avec succès:', this.actualData.length);

          if (this.actualData.length === 0) {
            this.error = 'Aucune demande de formation trouvée.';
          }
        } catch (err) {
          console.error('❌ Erreur lors du traitement des données:', err);
          this.handleLoadError(new Error('Erreur lors du traitement des données'));
        }
      },
      error: (error: any) => {
        console.error('❌ Erreur lors du chargement des demandes:', error);
        this.handleLoadError(error);
      }
    });
  }

  private updateStatutFilters(): void {
    this.statutFilters.forEach(filter => {
      if (filter.value === 'tous') {
        filter.count = this.stats.total || 0;
      } else {
        filter.count = this.stats[filter.value] || 0;
      }
    });
  }

  private handleLoadError(error: any): void {
    this.error = this.getErrorMessage(error);
    this.loading = false;
    this.actualData = [];
    this.getTableData({ skip: 0, limit: this.pageSize });
  }

  private getTableData(pageOption: pageSelection): void {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];

    this.actualData.forEach((demande: DemandeFormation, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        this.tableData.push(demande);
        this.tableDataCopy.push(demande);
        this.serialNumberArray.push(serialNumber);
      }
    });

    this.dataSource = new MatTableDataSource<DemandeFormation>(this.actualData);
    this.pagination.calculatePageSize.next({
      totalData: this.totalData,
      pageSize: this.pageSize,
      tableData: this.tableData,
      tableDataCopy: this.tableDataCopy,
      serialNumberArray: this.serialNumberArray,
    });

    console.log('📊 Données du tableau mises à jour:', {
      totalData: this.totalData,
      tableData: this.tableData.length,
      pageSize: this.pageSize
    });
  }

  // === MÉTHODES DE FILTRAGE ===

  setTab(tab: string): void {
    this.activeTab = tab;
    this.applyFilters();
  }

  get tabCounts(): { tous: number; formation: number; parcours: number; catalogue: number } {
    return {
      tous:      this.allDemandes.length,
      formation: this.allDemandes.filter(d => d.type_demande === 'formation').length,
      parcours:  this.allDemandes.filter(d => d.type_demande === 'parcours').length,
      catalogue: this.allDemandes.filter(d => d.type_demande === 'catalogue').length,
    };
  }

  applyFilters(): void {
    let filteredData = this.activeTab === 'tous'
      ? [...this.allDemandes]
      : this.allDemandes.filter(d => d.type_demande === this.activeTab);

    // Filtre par statut
    if (this.selectedStatutFilter !== 'tous') {
      filteredData = filteredData.filter(demande => demande.statut === this.selectedStatutFilter);
    }

    // Filtre par priorité
    if (this.selectedPrioriteFilter !== 'tous') {
      filteredData = filteredData.filter(demande => demande.priorite === this.selectedPrioriteFilter);
    }

    // Filtre par recherche
    if (this.searchDataValue.trim()) {
      const searchValue = this.searchDataValue.toLowerCase().trim();
      filteredData = filteredData.filter(demande => this.matchesSearch(demande, searchValue));
    }

    this.actualData = filteredData;
    this.totalData = this.actualData.length;
    this.getTableData({ skip: 0, limit: this.pageSize });
  }

  onStatutFilterChange(statut: string): void {
    this.selectedStatutFilter = statut;
    this.applyFilters();
  }

  onPrioriteFilterChange(priorite: string): void {
    this.selectedPrioriteFilter = priorite;
    this.applyFilters();
  }

  // === MÉTHODES DE RECHERCHE ET TRI ===

  public searchData(value: string): void {
    this.searchDataValue = value;
    this.applyFilters();
    console.log(`🔍 Recherche "${value}": ${this.actualData.length} résultats`);
  }

  private matchesSearch(demande: DemandeFormation, searchValue: string): boolean {
    const fields = [
      demande.formation?.titre || '',
      demande.employe?.name || '',
      demande.employe?.email || '',
      demande.motif_demande || '',
      demande.objectifs_personnels || '',
      demande.statut_display || '',
      demande.priorite_display || ''
    ];

    return fields.some(field =>
      field.toLowerCase().includes(searchValue)
    );
  }

  public sortData(sort: Sort): void {
    const data = [...this.tableData];

    if (!sort.active || sort.direction === '') {
      this.tableData = data;
      return;
    }

    this.tableData = data.sort((a, b) => {
      const result = this.compareValues(a, b, sort.active);
      return sort.direction === 'asc' ? result : -result;
    });
  }

  private compareValues(a: DemandeFormation, b: DemandeFormation, sortField: string): number {
    let aValue: any = '';
    let bValue: any = '';

    switch (sortField) {
      case 'formation':
        aValue = a.formation?.titre || '';
        bValue = b.formation?.titre || '';
        break;
      case 'employe':
        aValue = a.employe?.name || '';
        bValue = b.employe?.name || '';
        break;
      case 'statut':
        aValue = a.statut_display || '';
        bValue = b.statut_display || '';
        break;
      case 'priorite':
        aValue = a.priorite_display || '';
        bValue = b.priorite_display || '';
        break;
      case 'created_at':
        aValue = new Date(a.created_at || 0).getTime();
        bValue = new Date(b.created_at || 0).getTime();
        break;
      case 'date_souhaitee_debut':
        aValue = new Date(a.date_souhaitee_debut || 0).getTime();
        bValue = new Date(b.date_souhaitee_debut || 0).getTime();
        break;
      default:
        aValue = String((a as any)[sortField] || '');
        bValue = String((b as any)[sortField] || '');
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return aValue - bValue;
    }

    return String(aValue).localeCompare(String(bValue));
  }

  // === MÉTHODES D'ACTIONS ===

  refreshData(): void {
    console.log('🔄 Actualisation des données...');
    this.searchDataValue = '';
    this.selectedStatutFilter = 'tous';
    this.selectedPrioriteFilter = 'tous';
    this.clearMessages();
    this.loadDemandes();
  }

  // Valider une demande
  validerDemande(demande: DemandeFormation, commentaire: string = ''): void {
    if (this.validatingIds.has(demande.id)) return;

    const confirmMessage = `Êtes-vous sûr de vouloir valider la demande de formation "${demande.formation?.titre}" pour ${demande.employe?.name} ?`;

    if (confirm(confirmMessage)) {
      this.validatingIds.add(demande.id);
      this.clearMessages();

      const data = commentaire ? { commentaire_rh: commentaire } : {};

      this.demandeFormationService.validerDemande(demande.id, data).subscribe({
        next: () => {
          this.successMessage = `Demande de formation validée avec succès.`;
          this.validatingIds.delete(demande.id);
          this.refreshData();
          console.log('✅ Demande validée:', demande.id);
        },
        error: (error) => {
          console.error('❌ Erreur lors de la validation:', error);
          this.error = 'Erreur lors de la validation de la demande.';
          this.validatingIds.delete(demande.id);
        }
      });
    }
  }

  // Refuser une demande
  refuserDemande(demande: DemandeFormation): void {
    if (this.refusingIds.has(demande.id)) return;

    const motif = prompt(`Pourquoi refusez-vous la demande de formation "${demande.formation?.titre}" pour ${demande.employe?.name} ?\n\nVeuillez saisir un motif :`);

    if (motif === null) return; // Annulation

    if (!motif.trim()) {
      this.error = 'Un motif de refus est obligatoire.';
      return;
    }

    this.refusingIds.add(demande.id);
    this.clearMessages();

    this.demandeFormationService.refuserDemande(demande.id, { motif_refus: motif }).subscribe({
      next: () => {
        this.successMessage = `Demande de formation refusée.`;
        this.refusingIds.delete(demande.id);
        this.refreshData();
        console.log('✅ Demande refusée:', demande.id);
      },
      error: (error) => {
        console.error('❌ Erreur lors du refus:', error);
        this.error = 'Erreur lors du refus de la demande.';
        this.refusingIds.delete(demande.id);
      }
    });
  }

  // Annuler une demande
  annulerDemande(demande: DemandeFormation): void {
    const confirmMessage = `Êtes-vous sûr de vouloir annuler la demande de formation "${demande.formation?.titre}" pour ${demande.employe?.name} ?`;

    if (confirm(confirmMessage)) {
      this.clearMessages();

      this.demandeFormationService.annulerDemande(demande.id).subscribe({
        next: () => {
          this.successMessage = `Demande de formation annulée.`;
          this.refreshData();
          console.log('✅ Demande annulée:', demande.id);
        },
        error: (error) => {
          console.error('❌ Erreur lors de l\'annulation:', error);
          this.error = 'Erreur lors de l\'annulation de la demande.';
        }
      });
    }
  }

  clearMessages(): void {
    this.error = '';
    this.successMessage = '';
  }

  // === MÉTHODES UTILITAIRES ===

  getStatutClass(statut: string): string {
    const statutMap: Record<string, string> = {
      'en_attente': 'badge bg-warning',
      'validee': 'badge bg-success',
      'refusee': 'badge bg-danger',
      'annulee': 'badge bg-secondary'
    };

    return statutMap[statut] || 'badge bg-secondary';
  }

  // ============================================================
// REMPLACE ces 3 méthodes dans adminrh-demande.component.ts
// ============================================================

  // ✅ Corrigé : priorite peut être undefined
  getPrioriteClass(priorite: string | undefined): string {
    const prioriteMap: Record<string, string> = {
      'basse':   'badge bg-light text-dark',
      'normale': 'badge bg-info',
      'haute':   'badge bg-warning',
      'urgente': 'badge bg-danger'
    };
    return prioriteMap[priorite ?? ''] || 'badge bg-secondary';
  }

  // ✅ Corrigé : date peut être string | null | undefined
  formatDate(date: string | null | undefined): string {
    if (!date) return 'Non spécifié';
    try {
      return new Date(date).toLocaleDateString('fr-FR');
    } catch {
      return 'Date invalide';
    }
  }

  // ✅ Corrigé : date peut être string | null | undefined
  formatDateTime(date: string | null | undefined): string {
    if (!date) return 'Non spécifié';
    try {
      return new Date(date).toLocaleString('fr-FR');
    } catch {
      return 'Date invalide';
    }
  }

  canValidate(demande: DemandeFormation): boolean {
    return demande.statut === 'en_attente' && !this.validatingIds.has(demande.id);
  }

  canRefuse(demande: DemandeFormation): boolean {
    return demande.statut === 'en_attente' && !this.refusingIds.has(demande.id);
  }

  canCancel(demande: DemandeFormation): boolean {
    return ['en_attente', 'validee'].includes(demande.statut);
  }

  trackByDemandeId(index: number, demande: DemandeFormation): number {
    return demande.id;
  }

  public changePageSize(pageSize: number): void {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pageSize = pageSize;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize,
    });
  }

  private getErrorMessage(error: any): string {
    const errorMap: Record<number, string> = {
      403: 'Vous n\'avez pas les droits pour accéder aux demandes de formation.',
      401: 'Session expirée. Veuillez vous reconnecter.',
      500: 'Erreur serveur. Veuillez réessayer plus tard.',
      404: 'Aucune demande trouvée.'
    };

    if (error?.status && errorMap[error.status]) {
      return errorMap[error.status];
    }

    if (!navigator.onLine) {
      return 'Pas de connexion internet.';
    }

    return 'Erreur lors du chargement des données.';
  }

  // === GETTERS POUR LES STATISTIQUES ===

  get totalDemandes(): number {
    return this.stats.total || 0;
  }

  get demandesEnAttente(): number {
    return this.stats.en_attente || 0;
  }

  get demandesValidees(): number {
    return this.stats.validee || 0;
  }

  get demandesRefusees(): number {
    return this.stats.refusee || 0;
  }

  get hasData(): boolean {
    return this.actualData.length > 0;
  }

  get showEmptyState(): boolean {
    return !this.loading && !this.hasData && !this.error;
  }

  get totalPages(): number { return Math.ceil(this.totalData / this.pageSize); }
  get pagesArray(): number[] { return Array.from({ length: this.totalPages }, (_, i) => i); }
  onPageChange(page: number): void {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.limit = page * this.pageSize;
    this.pagination.tablePageSize.next({ skip: this.skip, limit: this.limit, pageSize: this.pageSize });
  }
}
