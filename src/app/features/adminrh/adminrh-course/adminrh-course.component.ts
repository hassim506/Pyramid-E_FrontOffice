import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSortModule, Sort } from '@angular/material/sort';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { routes } from '../../../shared/service/routes/routes';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { Formation } from '../../../shared/models/formation.models';

@Component({
  selector: 'app-adminrh-course',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatSortModule,
    CustomPaginationComponent
  ],
  templateUrl: './adminrh-course.component.html',
  styleUrls: ['./adminrh-course.component.scss']
})
export class AdminrhCourseComponent implements OnInit {
  routes = routes;
  
  // Données - Même logique que user-list
  allFormations: Formation[] = [];
  formations: Formation[] = [];
  searchDataValue = '';
  selectedStatus = '';
  loading = false;
  error = '';
   currentPage = 1;
   


  // Pagination - Identique à user-list
  pageSize = 10;
  serialNumberArray: number[] = [];
  totalData = 0;

  // Statistiques
  stats = {
    active: 0,
    pending: 0,
    draft: 0,
    free: 0,
    paid: 0
  };

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.getFormationsList();
  }

  // Méthodes utilitaires
  isFormationGratuite(formation: Formation): boolean {
    return parseFloat(formation.prix) === 0;
  }

  formatPrix(prix: string): string {
    const montant = parseFloat(prix);
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

  // Chargement des formations - Même pattern que user-list
  getFormationsList(): void {
    this.loading = true;
    this.error = '';
    this.formations = [];

    this.formationService.getFormationsrh().subscribe({
      next: (response) => {
        console.log('=== FORMATIONS RÉCUPÉRÉES ===');
        console.log(response);

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
        this.error = 'Erreur lors du chargement des formations';
        this.loading = false;
      }
    });
  }

  // Calcul des statistiques
  calculateStats(): void {
    this.stats = {
      active: this.allFormations.filter(f => f.est_publie && f.inscription_ouverte).length,
      pending: this.allFormations.filter(f => !f.est_publie && !f.inscription_ouverte).length,
      draft: this.allFormations.filter(f => !f.est_publie).length,
      free: this.allFormations.filter(f => this.isFormationGratuite(f)).length,
      paid: this.allFormations.filter(f => !this.isFormationGratuite(f)).length
    };
  }

  // Pagination - Copié de user-list
  calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 !== 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push({ skip: skip, limit: limit });
    }
  }

  pageNumberArray: { skip: number; limit: number }[] = [];
  totalPages = 0;
  skip = 0;
  limit = 10;

  getTableData(skip: number, limit: number): void {
    this.serialNumberArray = [];
    this.formations = [];
    
    // Filtrer d'abord selon les critères
    let filteredData = [...this.allFormations];

    // Appliquer le filtre de statut
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

    // Appliquer la recherche
    if (this.searchDataValue) {
      filteredData = filteredData.filter(formation =>
        formation.titre.toLowerCase().includes(this.searchDataValue.toLowerCase()) ||
        formation.description.toLowerCase().includes(this.searchDataValue.toLowerCase()) ||
        formation.formateur_nom.toLowerCase().includes(this.searchDataValue.toLowerCase()) ||
        formation.categorie.nom.toLowerCase().includes(this.searchDataValue.toLowerCase())
      );
    }

    this.totalData = filteredData.length;
    this.calculateTotalPages(this.totalData, this.pageSize);

    // Pagination
    const start = skip;
    const end = Math.min(skip + limit, this.totalData);
    
    for (let i = start; i < end; i++) {
      this.serialNumberArray.push(i + 1);
    }

    this.formations = filteredData.slice(start, end);
  }

  // Recherche - Même logique que user-list
  searchData(searchValue: string): void {
    this.searchDataValue = searchValue;
    this.skip = 0;
    this.getTableData(this.skip, this.limit);
  }

  // Filtrage par statut
  filterByStatus(status: string): void {
    this.selectedStatus = status;
    this.skip = 0;
    this.getTableData(this.skip, this.limit);
  }

  // Tri des données
  sortData(sort: Sort): void {
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.allFormations.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      
      switch (sort.active) {
        case 'titre':
          return this.compare(a.titre, b.titre, isAsc);
        case 'formateur':
          return this.compare(a.formateur_nom, b.formateur_nom, isAsc);
        case 'prix':
          return this.compare(parseFloat(a.prix), parseFloat(b.prix), isAsc);
        case 'duree':
          return this.compare(a.duree_totale, b.duree_totale, isAsc);
        case 'participants':
          return this.compare(a.nb_max_participants, b.nb_max_participants, isAsc);
        default:
          return 0;
      }
    });

    this.getTableData(this.skip, this.limit);
  }

  private compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  // Méthodes de pagination - Copiées de user-list
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

  // Méthodes d'affichage
  getStatusClass(formation: Formation): string {
    if (formation.est_publie && formation.inscription_ouverte) {
      return 'bg-success';
    } else if (!formation.est_publie) {
      return 'bg-info';
    } else {
      return 'bg-secondary';
    }
  }

  getStatusText(formation: Formation): string {
    if (formation.est_publie && formation.inscription_ouverte) {
      return 'Publié';
    } else if (!formation.est_publie) {
      return 'Brouillon';
    } else {
      return 'En attente';
    }
  }

  getDefaultImage(formation: Formation): string {
    // return formation.image_couverture || 'assets/img/course/course-01.jpg';
     if (formation.image_couverture) {
    // Ajoutez le chemin relatif depuis le dossier public
    return 'assets/img/formations/' + formation.image_couverture;
  }
  return 'assets/img/course/course-01.jpg';
  }

  // Suppression d'une formation
  deleteFormation(formation: Formation): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer la formation "${formation.titre}" ?`)) {
      this.loading = true;
      
      this.formationService.deleteFormation(formation.id).subscribe({
        next: (response) => {
          console.log('Formation supprimée:', response);
          this.getFormationsList();
        },
        error: (error) => {
          console.error('Erreur suppression:', error);
          this.error = 'Erreur lors de la suppression de la formation';
          this.loading = false;
        }
      });
    }
  }
}