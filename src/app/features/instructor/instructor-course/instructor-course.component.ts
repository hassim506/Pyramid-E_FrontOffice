import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataService } from '../../../shared/service/data/data.service';
import { routes } from '../../../shared/service/routes/routes';
import { apiResultFormat, instructorCourse } from '../../../shared/models/model';
import { Router, RouterLink } from '@angular/router';
import { pageSelection, PaginationService, tablePageSize } from '../../../shared/service/custom-pagination/pagination.service';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import * as bootstrap from 'bootstrap';

@Component({
    selector: 'app-instructor-course',
    templateUrl: './instructor-course.component.html',
    styleUrls: ['./instructor-course.component.scss'],
    imports:[CommonModule,MatTableModule,MatSortModule,MatPaginatorModule,MatSelectModule,CustomPaginationComponent,FormsModule,RouterLink]
})
export class InstructorCourseComponent implements OnInit {
  public routes = routes;

  // pagination variables
  public pageSize = 10;
  public tableData: any[] = [];
  public tableDataCopy: any[] = [];
  public actualData: any[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;       
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<any>;
  public searchDataValue = '';
  
  // Nouvelles propriétés
  public formations: any[] = [];
  public loading = false;
public error = '';
public selectedFormation: any = null;

  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService,
    private formationService: FormationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadFormations();
  }

  

togglePublishStatus(formation: any): void {
  // Debug pour voir la valeur actuelle
  console.log('Avant toggle - est_publie:', formation.est_publie);
  
  this.selectedFormation = formation;
  const modal = new bootstrap.Modal(document.getElementById('publish_modal')!);
  modal.show();
}

confirmTogglePublish(): void {
  if (!this.selectedFormation) return;
  
  const isCurrentlyPublished = this.selectedFormation.est_publie === true || this.selectedFormation.est_publie === 1;
  
  const action = isCurrentlyPublished ? 
    this.formationService.unpublishFormation(this.selectedFormation.id) :
    this.formationService.publishFormation(this.selectedFormation.id);
  
  action.subscribe({
    next: (response) => {
      console.log('Réponse du serveur:', response);
      
      // Mettre à jour localement avec la valeur inverse
      this.selectedFormation.est_publie = !isCurrentlyPublished;
      
      const message = this.selectedFormation.est_publie ? 
        'Formation publiée avec succès' : 
        'Formation dépubliée avec succès';
      
      console.log(message);
      this.selectedFormation = null;
    },
    error: (error) => {
      console.error('Erreur:', error);
      this.selectedFormation = null;
    }
  });
}
  loadFormations() {
    this.loading = true;
    this.error = '';
    
   this.formationService.getFormationsformateur().subscribe({
  next: (response) => {
    this.formations = response.formations || []; // <-- Correction ici
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
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    
    this.formations.map((formation: any, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        formation.sNo = serialNumber;
        this.tableData.push(formation);
        this.tableDataCopy.push(formation);
        this.serialNumberArray.push(serialNumber);
      }
    });
    
    this.dataSource = new MatTableDataSource<any>(this.actualData);
    this.pagination.calculatePageSize.next({
      totalData: this.totalData,
      pageSize: this.pageSize,
      tableData: this.tableData,
      tableDataCopy: this.tableDataCopy,
      serialNumberArray: this.serialNumberArray,
    });
  }

  public searchData(value: string): void {
    if (value == '') {
      this.tableData = this.tableDataCopy;
    } else {
      this.dataSource.filter = value.trim().toLowerCase();
      this.tableData = this.dataSource.filteredData;
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
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize,
    });
  }
   // Méthodes pour les statistiques
  getActiveFormationsCount(): number {
    return this.formations.filter(f => f.statut === 'active' || f.statut === 'actif').length;
  }

  getPendingFormationsCount(): number {
    return this.formations.filter(f => f.statut === 'pending' || f.statut === 'en_attente').length;
  }

  getDraftFormationsCount(): number {
    return this.formations.filter(f => f.statut === 'draft' || f.statut === 'brouillon').length;
  }

  getFreeFormationsCount(): number {
    return this.formations.filter(f => !f.prix || f.prix === 0).length;
  }

  getPaidFormationsCount(): number {
    return this.formations.filter(f => f.prix && f.prix > 0).length;
  }

  // Méthodes utilitaires
  isFormationGratuite(formation: any): boolean {
    return !formation.prix || formation.prix === 0;
  }

  formatPrix(prix: number): string {
    if (!prix || prix === 0) {
      return 'Gratuit';
    }
    return `${prix} €`;
  }

  getFormationImage(formation: any): string {
    return formation.image || formation.photo || 'assets/img/course/course-01.jpg';
  }

  // getStatusClass(formation: any): string {
  //   switch(formation.statut) {
  //     case 'active':
  //     case 'actif':
  //       return 'bg-success';
  //     case 'pending':
  //     case 'en_attente':
  //       return 'bg-warning';
  //     case 'draft':
  //     case 'brouillon':
  //       return 'bg-info';
  //     default:
  //       return 'bg-secondary';
  //   }
  // }


getStatusText(formation: any): string {
  if (formation.est_publie === true || formation.est_publie === 1) {
    return 'Publié';
  } else {
    return 'Brouillon';
  }
}

getStatusClass(formation: any): string {
  if (formation.est_publie === true || formation.est_publie === 1) {
    return 'bg-success'; // Vert pour publié
  } else {
    return 'bg-secondary'; // Gris pour brouillon/non publié
  }
}

// Méthode pour débugger - à ajouter temporairement
logFormationStatus(formation: any): void {
  console.log('Formation:', formation.titre);
  console.log('est_publie value:', formation.est_publie);
  console.log('typeof est_publie:', typeof formation.est_publie);
}
  trackByFormation(index: number, formation: any): number {
    return formation.id || index;
  }

  // Méthodes de filtrage
  filterByStatus(status: string): void {
    if (status === 'all') {
      this.actualData = this.formations;
    } else {
      this.actualData = this.formations.filter(f => f.statut === status);
    }
    this.getTableData({ skip: 0, limit: this.pageSize });
  }

  // Modal de suppression
  // selectedFormation: any = null;

  openDeleteModal(formation: any): void {
    this.selectedFormation = formation;
    // Ouvrir le modal (utiliser Bootstrap modal ou autre)
  }

  confirmDelete(): void {
    if (this.selectedFormation) {
      this.formationService.deleteFormation(this.selectedFormation.id).subscribe({
        next: () => {
          this.loadFormations(); // Recharger la liste
          this.selectedFormation = null;
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
        }
      });
    }
  }

}