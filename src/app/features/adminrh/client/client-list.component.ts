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
import { Client } from '../../../shared/models/client-company.models';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { ClientAddComponent } from '../client-add/client-add.component';

@Component({
  selector: 'app-client-list',
    imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent,ClientAddComponent],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent {
  routes = routes;
  
  // pagination variables
  public pageSize = 10;
  public tableData: Client[] = [];
  public tableDataCopy: Client[] = [];
  public actualData: Client[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;       
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<Client>;
  public searchDataValue = '';
  
  // Variables pour le modal/dialog
  clientDialog: boolean = false;
  isEditMode: boolean = false;
  submitted: boolean = false;
  selectedClient: Client | null = null;
  
  // Variables pour le loading
  loading: boolean = false;
  error: string = '';

  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService,
    private clientCompanyService: ClientCompanyService
  ) {
    this.getClientList();
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == '/superadmin/clients' || this.router.url.includes('clients')) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }

  private getClientList() {
  this.loading = true;
  this.error = '';
  
  this.clientCompanyService.getClients().subscribe({
    next: (response) => {
      console.log('Clients data:', response);
      // Correction ici :
      this.actualData = response.clients || [];
      this.getTableData({ skip: 0, limit: this.pageSize });
      this.loading = false;
    },
    error: (error) => {
      console.error('Erreur lors de la récupération des clients:', error);
      this.error = httpErrorMessage(error, 'Impossible de charger les clients.');
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
      },
      {
        id: 2,
        nom: 'Startup Innovante SARL',
        type: 'entreprise',
        ninea: '20240027890123',
        adresse: '123 Avenue des Entrepreneurs, 75011 Paris',
        telephone: '01 42 78 90 12',
        email: 'contact@startup-innovante.com',
        contact_principal: 'Thomas Martin',
        secteur_activite: 'Tech',
        taille: 'TPE',
        statut: 'actif',
        date_contrat: '2024-03-15',
        date_fin_contrat: '2025-03-15'
      }
    ];

    this.actualData = mockClients;
    this.getTableData({ skip: 0, limit: this.pageSize });
  }

  private getTableData(pageOption: pageSelection): void {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.totalData = this.actualData.length;
    
    this.actualData.map((res: Client, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        this.tableData.push(res);
        this.tableDataCopy.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });
    
    this.dataSource = new MatTableDataSource<Client>(this.actualData);
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
    this.getClientList();
  }

  public searchData(value: string): void {
    if (value == '') {
      this.tableData = [...this.tableDataCopy];
    } else {
      const filteredData = this.tableDataCopy.filter(client => 
        client.nom.toLowerCase().includes(value.toLowerCase()) ||
        client.email.toLowerCase().includes(value.toLowerCase()) ||
        client.telephone.toLowerCase().includes(value.toLowerCase()) ||
        client.secteur_activite.toLowerCase().includes(value.toLowerCase()) ||
        client.ninea.toLowerCase().includes(value.toLowerCase()) ||
        client.type.toLowerCase().includes(value.toLowerCase()) ||
        client.contact_principal.toLowerCase().includes(value.toLowerCase())
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
    this.clientDialog = true;
    this.isEditMode = false;
    this.selectedClient = null;
    this.submitted = false;
    console.log('Ouvrir nouveau client');
  }

  editClient(client: Client) {
    this.clientDialog = true;
    this.isEditMode = true;
    this.selectedClient = { ...client };
    this.submitted = false;
    console.log('Éditer client:', client);
  }

  deleteClient(client: Client) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le client "${client.nom}" ?`)) {
      this.loading = true;
      
      this.clientCompanyService.deleteClient(client.id).subscribe({
        next: () => {
          console.log('Client supprimé avec succès');
          this.refreshData(); // Recharger les données
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
          this.loading = false;
          // Fallback: suppression locale
          this.actualData = this.actualData.filter(c => c.id !== client.id);
          this.getTableData({ skip: this.skip, limit: this.limit });
        }
      });
    }
  }

  hideDialog() {
    this.clientDialog = false;
    this.submitted = false;
    this.selectedClient = null;
  }

  saveClient() {
    this.submitted = true;
    
    if (this.selectedClient && this.validateClient(this.selectedClient)) {
      this.loading = true;
      
      if (this.isEditMode) {
        // Mise à jour
        this.clientCompanyService.updateClient(this.selectedClient.id, this.selectedClient).subscribe({
          next: (response) => {
            console.log('Client mis à jour avec succès');
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
        this.clientCompanyService.createClient(this.selectedClient).subscribe({
          next: (response) => {
            console.log('Client créé avec succès');
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

  private validateClient(client: Client): boolean {
    return !!(client.nom && 
             client.email && 
             client.telephone && 
             client.adresse && 
             client.secteur_activite && 
             client.ninea &&
             client.type &&
             client.contact_principal);
  }

  getStatusClass(status: string | undefined): string {
    switch (status?.toLowerCase()) {
      case 'actif':
        return 'badge bg-success';
      case 'renouvele':
        return 'badge bg-primary';
      case 'en_cours_renouvellement':
        return 'badge bg-info';
      case 'litigieux':
        return 'badge bg-danger';
      case 'inactif':
        return 'badge bg-warning';
      case 'suspendu':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }

  formatDate(date: Date | string | undefined): string {
    if (!date) return '';
    return new Date(date).toLocaleDateString('fr-FR');
  }

  getClientInitials(name: string): string {
    return name.split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }
}