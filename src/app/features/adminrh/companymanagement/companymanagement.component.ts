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
import { Company, Client } from '../../../shared/models/client-company.models';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { CompanyAddComponent } from '../company-add/company-add.component';
import { AuthService } from '../../../shared/service/authentification/auth.service';

interface CountryInfo {
  code: string;
  nom: string;
  flag: string;
}

@Component({
  selector: 'app-companymanagement',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent, CompanyAddComponent],
  templateUrl: './companymanagement.component.html',
  styleUrl: './companymanagement.component.scss'
})
export class CompanyManagementComponent implements OnInit {
  routes = routes;
  companyDialog: boolean = false;
  isEditMode: boolean = false;
  selectedCompany: Company | null = null;
  
  // Variables de pagination
  public pageSize: number = 10;
  public tableData: Company[] = [];
  public tableDataCopy: Company[] = [];
  public actualData: Company[] = [];
  public currentPage: number = 1;
  public skip: number = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData: number = 0;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<Company>;
  public searchDataValue: string = '';
  
  // Variables de gestion d'état
  submitted: boolean = false;
  loading: boolean = false;
  error: string = '';
  successMessage: string = '';
  
  // Données utilisateur connecté
  public currentUser: any;
  
  // Liste des pays avec typage strict
  private readonly paysList: CountryInfo[] = [
    { code: 'SN', nom: 'Sénégal', flag: '🇸🇳' },
    { code: 'FR', nom: 'France', flag: '🇫🇷' },
    { code: 'ML', nom: 'Mali', flag: '🇲🇱' },
    { code: 'BF', nom: 'Burkina Faso', flag: '🇧🇫' },
    { code: 'CI', nom: 'Côte d\'Ivoire', flag: '🇨🇮' },
    { code: 'GN', nom: 'Guinée', flag: '🇬🇳' },
    { code: 'MR', nom: 'Mauritanie', flag: '🇲🇷' },
    { code: 'GM', nom: 'Gambie', flag: '🇬🇲' },
    { code: 'GW', nom: 'Guinée-Bissau', flag: '🇬🇼' },
    { code: 'CV', nom: 'Cap-Vert', flag: '🇨🇻' }
  ];

  constructor(
    private readonly data: DataService,
    private readonly router: Router,
    private readonly pagination: PaginationService,
    private readonly clientCompanyService: ClientCompanyService,
    private readonly authService: AuthService
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url === '/adminrh/companymanagement' || this.router.url.includes('adminrh-companymanagement')) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }

  ngOnInit(): void {
    this.initializeUser();
    this.loadCompanies();
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

  private loadCompanies(): void {
    if (!this.currentUser) {
      this.error = 'Utilisateur non connecté.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.successMessage = '';

    console.log('🔄 Chargement des entreprises...');

    this.clientCompanyService.getMyCompanies().subscribe({
      next: (response: any) => {
        console.log('📦 Réponse API entreprises:', response);
        
        try {
          const allCompanies = this.extractCompaniesFromResponse(response);
          console.log('🏢 Entreprises extraites:', allCompanies.length, allCompanies);

          const filteredCompanies = this.filterCompaniesByRole(allCompanies);
          
          this.actualData = filteredCompanies;
          this.totalData = this.actualData.length;
          this.getTableData({ skip: 0, limit: this.pageSize });
          this.loading = false;

          console.log('✅ Entreprises chargées avec succès:', this.actualData.length);
          
          if (this.actualData.length === 0) {
            this.error = 'Aucune entreprise trouvée pour votre profil.';
          }
        } catch (err) {
          console.error('❌ Erreur lors du traitement des données:', err);
          this.handleLoadError(new Error('Erreur lors du traitement des données'));
        }
      },
      error: (error: any) => {
        console.error('❌ Erreur lors du chargement des entreprises:', error);
        this.handleLoadError(error);
      }
    });
  }

  private extractCompaniesFromResponse(response: any): Company[] {
    if (!response) return [];

    if (Array.isArray(response)) {
      return response;
    }
    
    if (response.entreprises && Array.isArray(response.entreprises)) {
      return response.entreprises;
    }
    
    if (response.data && Array.isArray(response.data)) {
      return response.data;
    }
    
    if (response.companies && Array.isArray(response.companies)) {
      return response.companies;
    }

    return [];
  }

  private handleLoadError(error: any): void {
    this.error = this.getErrorMessage(error);
    this.loading = false;
    this.actualData = [];
    this.getTableData({ skip: 0, limit: this.pageSize });
  }

  private filterCompaniesByRole(companies: Company[]): Company[] {
    if (!this.currentUser) {
      console.warn('⚠️ Aucun utilisateur connecté');
      return [];
    }

    const userRoleId: number = Number(this.currentUser.role_id) || 0;
    const userClientId: number = Number(this.currentUser.client_id) || 0;
    const userEntrepriseId: number = Number(this.currentUser.entreprise_id) || 0;

    console.log('🔍 Filtrage des entreprises par rôle:');
    console.log('- Role ID:', userRoleId);
    console.log('- Client ID (groupe):', userClientId);
    console.log('- Entreprise ID:', userEntrepriseId);
    console.log('- Total entreprises avant filtrage:', companies.length);
    
    if (companies.length > 0) {
      console.log('- Structure entreprise exemple:', companies[0]);
    }

    let filteredCompanies: Company[] = [];

    switch (userRoleId) {
      case 1: // Super Admin
        console.log('👑 Super Admin - Accès à toutes les entreprises');
        filteredCompanies = [...companies];
        break;

      case 5: // Responsable RH Groupe
      case 14: // Super Admin RH Holding Groupe
        console.log('👥 RH Groupe - Filtrage par client_id:', userClientId);
        filteredCompanies = companies.filter(company => {
          const companyClientId = Number(company.client_id) || 0;
          const hasAccess = companyClientId === userClientId;
          
          console.log(`${hasAccess ? '✅' : '❌'} Entreprise "${company.nom || 'Sans nom'}" (client_id: ${companyClientId} ${hasAccess ? '===' : '!=='} ${userClientId})`);
          
          return hasAccess;
        });
        break;

      case 4: // Admin RH
      case 9: // Autre rôle limité
        console.log('🏢 Admin RH/Role limité - Filtrage par entreprise:', userEntrepriseId);
        filteredCompanies = companies.filter(company => {
          const companyId = Number(company.id) || 0;
          const hasAccess = companyId === userEntrepriseId;
          
          console.log(`${hasAccess ? '✅' : '❌'} Entreprise "${company.nom || 'Sans nom'}" (id: ${companyId} ${hasAccess ? '===' : '!=='} ${userEntrepriseId})`);
          
          return hasAccess;
        });
        break;

      default:
        console.warn('⚠️ Rôle non reconnu:', userRoleId);
        filteredCompanies = [];
        break;
    }

    console.log('✅ Entreprises après filtrage:', filteredCompanies.length);
    return filteredCompanies;
  }

  private getTableData(pageOption: pageSelection): void {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    
    this.actualData.forEach((company: Company, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        this.tableData.push(company);
        this.tableDataCopy.push(company);
        this.serialNumberArray.push(serialNumber);
      }
    });
    
    this.dataSource = new MatTableDataSource<Company>(this.actualData);
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

  // === MÉTHODES DE PERMISSIONS ===

  canAddCompany(): boolean {
    if (!this.currentUser) return false;
    
    const userRoleId = Number(this.currentUser.role_id) || 0;
    
    // Seuls Super Admin (1) et RH Groupe (5, 14) peuvent ajouter des entreprises
    return [1, 5, 14].includes(userRoleId);
  }

  canEditCompany(company: Company | null | undefined): boolean {
    if (!this.currentUser || !company) return false;
    
    const userRoleId = Number(this.currentUser.role_id) || 0;
    const userClientId = Number(this.currentUser.client_id) || 0;
    const userEntrepriseId = Number(this.currentUser.entreprise_id) || 0;
    const companyId = Number(company.id) || 0;
    const companyClientId = Number(company.client_id) || 0;

    switch (userRoleId) {
      case 1: // Super Admin
        return true;
      case 5: // RH Groupe
      case 14: // Super Admin RH Holding Groupe
        return companyClientId === userClientId;
      case 4:
      case 9: // Rôles limités
        return companyId === userEntrepriseId;
      default:
        return false;
    }
  }

  canDeleteCompany(company: Company | null | undefined): boolean {
    if (!this.currentUser || !company) return false;
    
    const userRoleId = Number(this.currentUser.role_id) || 0;
    
    // Seuls Super Admin et RH Groupe peuvent supprimer
    return userRoleId === 1 || ([5, 14].includes(userRoleId) && this.canEditCompany(company));
  }

  // === MÉTHODES DE RECHERCHE ET TRI ===

  public searchData(value: string): void {
    const searchValue = (value || '').toLowerCase().trim();
    
    if (searchValue === '') {
      this.tableData = [...this.tableDataCopy];
    } else {
      this.tableData = this.tableDataCopy.filter(company => 
        this.matchesSearch(company, searchValue)
      );
    }
    
    console.log(`🔍 Recherche "${value}": ${this.tableData.length} résultats`);
  }

  private matchesSearch(company: Company, searchValue: string): boolean {
    const fields = [
      company?.nom || '',
      company?.email || '',
      company?.telephone || '',
      company?.secteur_activite || '',
      this.getClientName(company.client),
      company?.ninea || '',
      company?.adresse || ''
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

  private compareValues(a: Company, b: Company, sortField: string): number {
    let aValue: any = '';
    let bValue: any = '';

    switch (sortField) {
      case 'nom':
        aValue = a.nom || '';
        bValue = b.nom || '';
        break;
      case 'email':
        aValue = a.email || '';
        bValue = b.email || '';
        break;
      case 'telephone':
        aValue = a.telephone || '';
        bValue = b.telephone || '';
        break;
      case 'secteur_activite':
        aValue = a.secteur_activite || '';
        bValue = b.secteur_activite || '';
        break;
      case 'ninea':
        aValue = a.ninea || '';
        bValue = b.ninea || '';
        break;
      case 'client':
        aValue = this.getClientName(a.client);
        bValue = this.getClientName(b.client);
        break;
      case 'taille_effectif':
        aValue = Number(a.taille_effectif || a.taille_effectif || 0);
        bValue = Number(b.taille_effectif || b.taille_effectif || 0);
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

  // === MÉTHODES UTILITAIRES POUR GESTION DES DONNÉES ===

  getCompanyField(company: Company | null | undefined, field: string): string {
    if (!company) return 'Non renseigné';
    
    const fieldMap: Record<string, string> = {
      'taille_effectif': String(company.taille_effectif || company.taille_effectif || 0),
      'email': company.email || 'Non renseigné',
      'telephone': company.telephone || 'Non renseigné',
      'adresse': company.adresse || 'Non renseignée',
      'ninea': company.ninea || 'Non renseigné',
      'secteur_activite': company.secteur_activite || 'Non renseigné',
      'pays': company.pays || 'SN'
    };

    return fieldMap[field] || 'Non renseigné';
  }

  getClientName(client: string | any): string {
    if (!client) return 'Non renseigné';
    
    if (typeof client === 'string') {
      return client;
    }
    
    if (typeof client === 'object') {
      return client.nom || client.name || client.raison_sociale || 'Non renseigné';
    }
    
    return 'Non renseigné';
  }

  getClientType(client: string | any): string {
    if (!client || typeof client === 'string') return '';
    
    if (typeof client === 'object') {
      return client.type || client.client_type || '';
    }
    
    return '';
  }

  // === MÉTHODES D'ACTIONS ===

  refreshData(): void {
    console.log('🔄 Actualisation des données...');
    this.searchDataValue = '';
    this.clearMessages();
    this.loadCompanies();
  }

  openNew(): void {
    if (!this.canAddCompany()) {
      this.error = 'Vous n\'êtes pas autorisé à ajouter une entreprise.';
      console.warn('⚠️ Utilisateur non autorisé à ajouter une entreprise');
      return;
    }

    this.companyDialog = true;
    this.isEditMode = false;
    this.selectedCompany = null;
    this.submitted = false;
    this.clearMessages();
    console.log('➕ Ouverture du formulaire de création');
  }

  editCompany(company: Company | null | undefined): void {
    if (!company) {
      this.error = 'Entreprise non valide.';
      return;
    }

    if (!this.canEditCompany(company)) {
      this.error = `Vous n'êtes pas autorisé à modifier l'entreprise "${company.nom || 'inconnue'}".`;
      console.warn('⚠️ Utilisateur non autorisé à modifier cette entreprise');
      return;
    }

    this.companyDialog = true;
    this.isEditMode = true;
    this.selectedCompany = { ...company };
    this.submitted = false;
    this.clearMessages();
    console.log('✏️ Ouverture du formulaire de modification:', company.nom);
  }

  deleteCompany(company: Company | null | undefined): void {
    if (!company) {
      this.error = 'Entreprise non valide.';
      return;
    }

    if (!this.canDeleteCompany(company)) {
      this.error = `Vous n'êtes pas autorisé à supprimer l'entreprise "${company.nom || 'inconnue'}".`;
      console.warn('⚠️ Utilisateur non autorisé à supprimer cette entreprise');
      return;
    }

    const companyName = company.nom || 'inconnue';
    const confirmMessage = `Êtes-vous sûr de vouloir supprimer l'entreprise "${companyName}" ?\n\nCette action est irréversible et supprimera également :\n- Tous les utilisateurs liés\n- Toutes les formations\n- Toutes les données associées`;
    
    if (confirm(confirmMessage)) {
      this.performDelete(company, companyName);
    }
  }
archiveCompany(company: any) {
  if (confirm('Êtes-vous sûr de vouloir archiver cette entreprise ?')) {
    const updatedCompany = { ...company, statut: 'inactive' };
    
    this.clientCompanyService.updateCompany(company.id, updatedCompany).subscribe({
      next: () => {
        console.log('Entreprise archivée avec succès');
        this.successMessage = 'Entreprise archivée avec succès';
        this.refreshData();
        setTimeout(() => this.clearMessages(), 3000);
      },
      error: (error: any) => {
        console.error('Erreur lors de l\'archivage:', error);
        this.error = 'Erreur lors de l\'archivage de l\'entreprise';
      }
    });
  }
}

// suspendCompany(company: any) {
//   if (confirm('Êtes-vous sûr de vouloir suspendre cette entreprise ?')) {
//     const updatedCompany = { ...company, statut: 'suspendue' };
    
//     this.clientCompanyService.updateCompany(company.id, updatedCompany).subscribe({
//       next: () => {
//         console.log('Entreprise suspendue avec succès');
//         this.successMessage = 'Entreprise suspendue avec succès';
//         this.refreshData();
//         setTimeout(() => this.clearMessages(), 3000);
//       },
//       error: (error: any) => {
//         console.error('Erreur lors de la suspension:', error);
//         this.error = 'Erreur lors de la suspension de l\'entreprise';
//       }
//     });
//   }
// }

reactivateCompany(company: any) {
  const message = company.statut === 'inactive' ? 'réactiver' : 'réactiver';
  if (confirm(`Êtes-vous sûr de vouloir ${message} cette entreprise ?`)) {
    const updatedCompany = { ...company, statut: 'active' };
    
    this.clientCompanyService.updateCompany(company.id, updatedCompany).subscribe({
      next: () => {
        console.log('Entreprise réactivée avec succès');
        this.successMessage = 'Entreprise réactivée avec succès';
        this.refreshData();
        setTimeout(() => this.clearMessages(), 3000);
      },
      error: (error: any) => {
        console.error('Erreur lors de la réactivation:', error);
        this.error = 'Erreur lors de la réactivation de l\'entreprise';
      }
    });
  }
}

// getStatusClass(statut: string): string {
//   switch (statut) {
//     case 'active':
//       return 'badge bg-success';
//     case 'inactive':
//       return 'badge bg-secondary';
//     case 'suspendue':
//       return 'badge bg-warning';
//     default:
//       return 'badge bg-light';
//   }
// }

// getStatusLabel(statut: string): string {
//   switch (statut) {
//     case 'active':
//       return 'Active';
//     case 'inactive':
//       return 'Inactive';
//     case 'suspendue':
//       return 'Suspendue';
//     default:
//       return 'Inconnu';
//   }
// }
  private performDelete(company: Company, companyName: string): void {
    this.loading = true;
    this.clearMessages();
    console.log('🗑️ Suppression de l\'entreprise:', companyName);
    
    this.clientCompanyService.deleteCompany(company.id).subscribe({
      next: () => {
        console.log('✅ Entreprise supprimée avec succès');
        this.successMessage = `L'entreprise "${companyName}" a été supprimée avec succès.`;
        this.refreshData();
      },
      error: (error: any) => {
        console.error('❌ Erreur lors de la suppression:', error);
        this.error = 'Erreur lors de la suppression de l\'entreprise. Vérifiez qu\'elle ne contient pas de données liées.';
        this.loading = false;
      }
    });
  }

  hideDialog(): void {
    this.companyDialog = false;
    this.submitted = false;
    this.selectedCompany = null;
    this.clearMessages();
    console.log('❌ Fermeture du modal');
  }

  onCompanySaved(): void {
    this.hideDialog();
    this.successMessage = this.isEditMode ? 'Entreprise modifiée avec succès.' : 'Entreprise créée avec succès.';
    this.refreshData();
  }

  clearMessages(): void {
    this.error = '';
    this.successMessage = '';
  }

  // === MÉTHODES UTILITAIRES D'AFFICHAGE ===

  getCountryFlag(countryCode: string | undefined): string {
    if (!countryCode) return '🌍';
    
    const country = this.paysList.find(p => 
      p.code === countryCode.toUpperCase()
    );
    return country?.flag || '🌍';
  }

  getCountryName(countryCode: string | undefined): string {
    if (!countryCode) return 'Non spécifié';
    
    const country = this.paysList.find(p => 
      p.code === countryCode.toUpperCase()
    );
    return country?.nom || countryCode;
  }

  getCompanyInitials(name: string | undefined): string {
    if (!name) return 'NC';
    
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }

  formatDate(date: Date | string | undefined): string {
    if (!date) return 'Non spécifié';
    
    try {
      return new Date(date).toLocaleDateString('fr-FR');
    } catch {
      return 'Date invalide';
    }
  }

  getStatusClass(status: string | undefined): string {
    const statusMap: Record<string, string> = {
      'active': 'badge bg-success',
      'inactive': 'badge bg-warning',
      'suspendue': 'badge bg-danger'
    };

    return statusMap[status?.toLowerCase() || ''] || 'badge bg-secondary';
  }

  getStatusLabel(status: string | undefined): string {
    const statusMap: Record<string, string> = {
      'active': 'Actif',
      'inactive': 'Inactif',
      'suspendue': 'Suspendue'
    };

    return statusMap[status?.toLowerCase() || ''] || 'Non défini';
  }

  private getErrorMessage(error: any): string {
    const errorMap: Record<number, string> = {
      403: 'Vous n\'avez pas les droits pour accéder aux entreprises.',
      401: 'Session expirée. Veuillez vous reconnecter.',
      500: 'Erreur serveur. Veuillez réessayer plus tard.',
      404: 'Aucune entreprise trouvée.'
    };

    if (error?.status && errorMap[error.status]) {
      return errorMap[error.status];
    }

    if (!navigator.onLine) {
      return 'Pas de connexion internet.';
    }

    return 'Erreur lors du chargement des données.';
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

  trackByCompanyId(index: number, company: Company | null): number {
    return company?.id || index;
  }

  // === GETTERS POUR LES STATISTIQUES ===

  get totalCompanies(): number {
    return this.actualData.length;
  }

  get activeCompanies(): number {
    return this.actualData.filter(c => 
      c.statut?.toLowerCase() === 'active'
    ).length;
  }

  get inactiveCompanies(): number {
    return this.actualData.filter(c => 
      c.statut?.toLowerCase() === 'inactive'
    ).length;
  }

  get hasData(): boolean {
    return this.actualData.length > 0;
  }

  get showEmptyState(): boolean {
    return !this.loading && !this.hasData && !this.error;
  }
}