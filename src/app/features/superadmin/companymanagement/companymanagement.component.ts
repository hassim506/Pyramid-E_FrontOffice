import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { apiResultFormat, pageSelection } from '../../../shared/models/model';
import { DataService } from '../../../shared/service/data/data.service';
import { PaginationService, tablePageSize } from '../../../shared/service/custom-pagination/pagination.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { Company, Client } from '../../../shared/models/client-company.models';
import { firstValueFrom } from 'rxjs';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { CompanyAddComponent } from '../company-add/company-add.component';
import { FormationService } from '../../../shared/service/formation/formation.service';

@Component({
  selector: 'app-companymanagement',
  imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent,CompanyAddComponent],
  templateUrl: './companymanagement.component.html',
  styleUrl: './companymanagement.component.scss'
})
export class CompanyManagementComponent {
  routes = routes;
   companyDialog: boolean = false;
  isEditMode: boolean = false;
  selectedCompany: Company | null = null;
  // pagination variables
  public pageSize = 10;
  public tableData: Company[] = [];
  public tableDataCopy: Company[] = [];
  public actualData: Company[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;       
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<Company>;
  public searchDataValue = '';
    successMessage: string = '';

  // Variables pour le modal/dialog
  // companyDialog: boolean = false;
  // isEditMode: boolean = false;
  submitted: boolean = false;
  // selectedCompany: Company | null = null;
  
  // Variables pour le loading
  loading: boolean = false;
  error: string = '';

  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService,
    private clientCompanyService: ClientCompanyService,
    private formationService: FormationService
  ) {
    this.getCompanyList();
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == '/superadmin/company-management' || this.router.url.includes('superadmin-companymanagement')) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
   private paysList = [
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

  // ... existing methods ...

  // 🆕 Méthodes pour gérer les pays
  getCountryFlag(countryCode: string): string {
    const country = this.paysList.find(p => p.code === countryCode);
    return country ? country.flag : '🌍';
  }

  getCountryName(countryCode: string): string {
    const country = this.paysList.find(p => p.code === countryCode);
    return country ? country.nom : countryCode;
  }
private getCompanyList() {
  this.loading = true;
  this.error = '';
  
  this.clientCompanyService.getCompanies().subscribe({
    next: (response) => {
      console.log('Companies data:', response);
      // Correction ici :
      this.actualData = response.entreprises || [];
      this.getTableData({ skip: 0, limit: this.pageSize });
      this.loading = false;
    },
    error: (error) => {
      console.error('Erreur lors de la récupération des entreprises:', error);
      this.error = httpErrorMessage(error, 'Impossible de charger les données.');
      this.loading = false;
      this.loadMockData();
    }
  });
}
  private loadMockData() {
    console.log('Chargement des données de test...');
    // Données de test en cas d'erreur API
    const mockClients: Client[] = [
      {
        id: 1,
        nom: 'Groupe TechnoSolutions',
        type: 'groupe',
        ninea: '20240021234567',
        adresse: '456 Rue de la République, 69002 Lyon',
        telephone: '04 78 90 12 34',
        email: 'info@technosolutions.fr',
        contact_principal: 'Marie Dubois',
        secteur_activite: 'Conseil IT',
        taille: 'PME',
        statut: 'actif',
        date_contrat: '2024-06-01',
        date_fin_contrat: '2025-12-31'
      }
    ];

    const mockCompanies: Company[] = [
      {
        id: 1,
        nom: 'Innovation Digital',
        ninea: '20243011234567',
        adresse: '789 Boulevard Saint-Germain, 75007 Paris',
        telephone: '01 45 67 89 02',
        email: 'team@innovation-digital.fr',
        secteur_activite: 'Startup Digital',
        taille_effectif: 8,
        statut: 'active',
        client_id: 1,
        client: mockClients[0]
      }
    ];

    this.actualData = mockCompanies;
    this.getTableData({ skip: 0, limit: this.pageSize });
  }

  private getTableData(pageOption: pageSelection): void {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.totalData = this.actualData.length;
    
    this.actualData.map((res: Company, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        this.tableData.push(res);
        this.tableDataCopy.push(res);
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
  }

  // Rechargement des données
  refreshData() {
    this.getCompanyList();
  }

  public searchData(value: string): void {
    if (value == '') {
      this.tableData = [...this.tableDataCopy];
    } else {
      const filteredData = this.tableDataCopy.filter(company => 
        company.nom.toLowerCase().includes(value.toLowerCase()) ||
        company.email.toLowerCase().includes(value.toLowerCase()) ||
        company.telephone.toLowerCase().includes(value.toLowerCase()) ||
        company.secteur_activite.toLowerCase().includes(value.toLowerCase()) ||
        company.client?.nom.toLowerCase().includes(value.toLowerCase()) ||
        company.ninea.toLowerCase().includes(value.toLowerCase())
      );
      this.tableData = filteredData;
    }
  }

  public sortData(sort: Sort) {
    const data = this.tableData.slice();

    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
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

  // Méthodes pour les actions du template
  openNew() {
    this.companyDialog = true;
    this.isEditMode = false;
    this.selectedCompany = null;
    this.submitted = false;
  }

  editCompany(company: Company) {
    this.companyDialog = true;
    this.isEditMode = true;
    this.selectedCompany = { ...company };
    this.submitted = false;
  }

  deleteCompany(company: Company) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'entreprise "${company.nom}" ?`)) {
      this.loading = true;
      
      this.clientCompanyService.deleteCompany(company.id).subscribe({
        next: () => {
          console.log('Entreprise supprimée avec succès');
          this.refreshData(); // Recharger les données
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
          this.loading = false;
          // Fallback: suppression locale
          this.actualData = this.actualData.filter(c => c.id !== company.id);
          this.getTableData({ skip: this.skip, limit: this.limit });
        }
      });
    }
  }

  hideDialog() {
    this.companyDialog = false;
    this.submitted = false;
    this.selectedCompany = null;
  }
clearMessages(): void {
    this.error = '';
    this.successMessage = '';
  }

  saveCompany() {
    this.submitted = true;
    
    if (this.selectedCompany && this.validateCompany(this.selectedCompany)) {
      this.loading = true;
      
      if (this.isEditMode) {
        // Mise à jour
        this.clientCompanyService.updateCompany(this.selectedCompany.id, this.selectedCompany).subscribe({
          next: (response) => {
            console.log('Entreprise mise à jour avec succès');
            this.refreshData();
            this.hideDialog();
          },
          error: (error) => {
            console.error('Erreur lors de la mise à jour:', error);
            this.loading = false;
          }
        });
      } else {
        // Création
        this.clientCompanyService.createCompany(this.selectedCompany).subscribe({
          next: (response) => {
            console.log('Entreprise créée avec succès');
            this.refreshData();
            this.hideDialog();
          },
          error: (error) => {
            console.error('Erreur lors de la création:', error);
            this.loading = false;
          }
        });
      }
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

suspendCompany(company: any) {
  if (confirm('Êtes-vous sûr de vouloir suspendre cette entreprise ?')) {
    const updatedCompany = { ...company, statut: 'suspendue' };
    
    this.clientCompanyService.updateCompany(company.id, updatedCompany).subscribe({
      next: () => {
        console.log('Entreprise suspendue avec succès');
        this.successMessage = 'Entreprise suspendue avec succès';
        this.refreshData();
        setTimeout(() => this.clearMessages(), 3000);
      },
      error: (error: any) => {
        console.error('Erreur lors de la suspension:', error);
        this.error = 'Erreur lors de la suspension de l\'entreprise';
      }
    });
  }
}

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
public onPageChange(page: number): void {
  this.currentPage = page;
  const skip = (page - 1) * this.pageSize;
  this.skip = skip;
  this.getTableData({ skip: skip, limit: this.pageSize });
}

// Méthode appelée après la sauvegarde d'une entreprise
onCompanySaved(): void {
  this.successMessage = this.isEditMode ? 'Entreprise modifiée avec succès' : 'Entreprise créée avec succès';
  this.refreshData();
  this.hideDialog();
  setTimeout(() => this.clearMessages(), 3000);
}

// Méthodes manquantes pour les permissions et utilitaires
canEditCompany(company: Company | null | undefined): boolean {
  // Ajoutez votre logique de permissions ici
  return !!company;
}

canDeleteCompany(company: Company | null | undefined): boolean {
  // Ajoutez votre logique de permissions ici
  return !!company;
}

getCompanyField(company: Company | null | undefined, field: string): string {
  if (!company) return 'N/A';
  const value = (company as any)[field];
  return value || 'N/A';
}

getClientName(client: any): string {
  if (!client) return 'Aucun client';
  return typeof client === 'string' ? client : client.nom || 'Client inconnu';
}

getStatusCompanyClass(statut: string): string {
  switch (statut?.toLowerCase()) {
    case 'active':
      return 'badge bg-success';
    case 'inactive':
      return 'badge bg-warning';
    case 'suspendue':
      return 'badge bg-danger';
    default:
      return 'badge bg-secondary';
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
// TrackBy function pour optimiser les performances
trackByCompanyId(index: number, company: Company): number {
  return company.id;
}

getStatusLabel(statut: string): string {
  switch (statut) {
    case 'active':
      return 'Active';
    case 'inactive':
      return 'Inactive';
    case 'suspendue':
      return 'Suspendue';
    default:
      return 'Inconnu';
  }
}
  private validateCompany(company: Company): boolean {
    return !!(company.nom && 
             company.email && 
             company.telephone && 
             company.adresse && 
             company.secteur_activite && 
             company.ninea &&
             company.client_id);
  }

  private generateId(): number {
    return Math.max(...this.actualData.map(c => c.id), 0) + 1;
  }

  statsLoading = false;

  selectCompany(company: Company): void {
    this.selectedCompany = company;
    if (company.formations_count === undefined && company.employes_count === undefined) {
      this.statsLoading = true;
      Promise.all([
        firstValueFrom(this.clientCompanyService.getCompany(company.id)).catch(() => null),
        firstValueFrom(this.formationService.getFormationsByEntreprise(company.id)).catch(() => null),
      ]).then(([detailRes, formRes]) => {
        if (this.selectedCompany?.id !== company.id) return;
        const detail = (detailRes as any)?.entreprise || (detailRes as any)?.data || detailRes || {};
        const stats = (detail as any).statistiques ?? {};
        const formations: any[] = (formRes as any)?.formations ?? (formRes as any)?.data ?? [];
        const actives = formations.filter((f: any) => f.est_publie && f.inscription_ouverte).length;
        this.selectedCompany = {
          ...this.selectedCompany!,
          formations_count:          formations.length,
          formations_actives_count:  actives,
          employes_count:            stats.nb_employes            ?? (detail as any).employes_count ?? company.taille_effectif ?? 0,
          employes_actifs_count:     stats.nb_employes_actifs     ?? 0,
          total_users_count:         stats.nb_total_users         ?? 0,
          utilisateurs_actifs_count: stats.nb_utilisateurs_actifs ?? 0,
          taux_completion:           (detail as any).taux_completion ?? 0,
          certificats_count:         (detail as any).certificats_count ?? 0,
        };
        this.statsLoading = false;
      });
    }
  }

  getCompanyInitials(name: string): string {
    return name.split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }

  formatDate(date: Date | string | undefined): string {
    if (!date) return '';
    return new Date(date).toLocaleDateString('fr-FR');
  }

  getStatusClass(status: string | undefined): string {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'badge bg-success';
      case 'inactive':
        return 'badge bg-warning';
      case 'suspendue':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }
}