// import { Component } from '@angular/core';
// import { routes } from '../../../shared/service/routes/routes';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-superadmin-course-grid',
//   imports:[CommonModule,RouterLink],
//   templateUrl: './superadmin-course-grid.component.html',
//   styleUrl: './superadmin-course-grid.component.scss'
// })
// export class SuperadminCourseGridComponent {SuperadminCourseGridComponent
// routes=routes
// }


import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { Router, RouterLink } from '@angular/router';
import { pageSelection, PaginationService } from '../../../shared/service/custom-pagination/pagination.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';

@Component({
    selector: 'app-superadmin-course-grid',
    templateUrl: './superadmin-course-grid.component.html',
    styleUrls: ['./superadmin-course-grid.component.scss'],
    imports: [CommonModule, CustomPaginationComponent, FormsModule, RouterLink]
})
export class SuperadminCourseGridComponent implements OnInit {
  public routes = routes;

  // pagination variables
  public pageSize = 12; // Plus d'éléments par page pour le grid
  public tableData: any[] = [];
  public actualData: any[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public totalData = 0;
  public searchDataValue = '';
  
  // Nouvelles propriétés
  public formations: any[] = [];
  public loading = false;
  public error = '';

  constructor(
    private router: Router,
    private pagination: PaginationService,
    private formationService: FormationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadFormations();
  }

  loadFormations() {
    this.loading = true;
    this.error = '';
    
    this.formationService.getFormations({ page: 1, limit: 12 }).subscribe({
      next: (response) => {
        this.formations = response.formations || [];
        this.actualData = this.formations;
        this.totalData = this.formations.length;
        this.loading = false;
        
        // Initialiser la pagination
        this.getTableData({ skip: 0, limit: this.pageSize });
      },
      error: (error) => {
        this.error = 'Erreur lors du chargement des formations';
        this.loading = false;
        console.error('Erreur:', error);
      }
    });
  }

  private getTableData(pageOption: pageSelection): void {
    this.tableData = [];
    
    this.formations.map((formation: any, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        formation.sNo = serialNumber;
        this.tableData.push(formation);
      }
    });
    
    this.pagination.calculatePageSize.next({
      totalData: this.totalData,
      pageSize: this.pageSize,
      tableData: this.tableData,
      tableDataCopy: this.tableData,
      serialNumberArray: [],
    });
  }

  public searchData(value: string): void {
    if (value == '') {
      this.actualData = this.formations;
    } else {
      this.actualData = this.formations.filter(formation => 
        formation.titre.toLowerCase().includes(value.toLowerCase()) ||
        formation.description.toLowerCase().includes(value.toLowerCase())
      );
    }
    this.getTableData({ skip: 0, limit: this.pageSize });
  }

  // Méthodes pour les statistiques
  getActiveFormationsCount(): number {
    return this.formations.filter(f => f.est_publie === true).length;
  }

  getPendingFormationsCount(): number {
    return this.formations.filter(f => f.est_publie === false && f.inscription_ouverte === false).length;
  }

  getDraftFormationsCount(): number {
    return this.formations.filter(f => f.est_publie === false).length;
  }

  getFreeFormationsCount(): number {
    return this.formations.filter(f => !f.prix || parseFloat(f.prix) === 0).length;
  }

  getPaidFormationsCount(): number {
    return this.formations.filter(f => f.prix && parseFloat(f.prix) > 0).length;
  }

  // Méthodes utilitaires
  isFormationGratuite(formation: any): boolean {
    return !formation.prix || parseFloat(formation.prix) === 0;
  }

  formatPrix(prix: string): string {
    if (!prix || parseFloat(prix) === 0) {
      return 'Gratuit';
    }
    return `${parseFloat(prix)} €`;
  }

  getFormationImage(formation: any): string {
    return this.formationService.getImageUrl(formation.image_couverture);
  }

  getStatusClass(formation: any): string {
    if (formation.est_publie) {
      return 'bg-success';
    } else if (formation.inscription_ouverte) {
      return 'bg-warning';
    } else {
      return 'bg-info';
    }
  }

  getStatusText(formation: any): string {
    if (formation.est_publie) {
      return 'Publié';
    } else if (formation.inscription_ouverte) {
      return 'En attente';
    } else {
      return 'Brouillon';
    }
  }

  trackByFormation(index: number, formation: any): number {
    return formation.id || index;
  }

  // Méthodes de filtrage
  filterByStatus(status: string): void {
    if (status === 'all') {
      this.actualData = this.formations;
    } else if (status === 'active') {
      this.actualData = this.formations.filter(f => f.est_publie === true);
    } else if (status === 'pending') {
      this.actualData = this.formations.filter(f => f.est_publie === false && f.inscription_ouverte === false);
    } else if (status === 'draft') {
      this.actualData = this.formations.filter(f => f.est_publie === false);
    }
    this.getTableData({ skip: 0, limit: this.pageSize });
  }

  // Modal de suppression
  selectedFormation: any = null;

  openDeleteModal(formation: any): void {
    this.selectedFormation = formation;
  }

  confirmDelete(): void {
    if (this.selectedFormation) {
      this.formationService.deleteFormation(this.selectedFormation.id).subscribe({
        next: () => {
          this.loadFormations();
          this.selectedFormation = null;
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
        }
      });
    }
  }
}