import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSortModule, Sort } from '@angular/material/sort';
import { User } from '../../../shared/models/user.models';
import { UserService } from '../../../shared/service/user/user.service';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { UserAddComponent } from '../user-add/user-add.component';
import { pageSelection } from '../../../shared/models/model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent, UserAddComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public pageSize = 10;
  public tableData: User[] = [];
  public tableDataCopy: User[] = [];
  public actualData: User[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  public pageSelection: pageSelection[] = [];
  public searchDataValue = '';
  public loading = false;
  public error = '';
  public userDialog = false;
  public isEditMode = false;
  public selectedUser: User | null = null;
    selectedFile: File | null = null;
  isImporting: boolean = false;
  importProgress: number = 0;
  showImportDialog: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserList();
  }
  

  private getUserList() {
  this.loading = true;
  this.error = '';
  
  this.userService.getUsers().subscribe({
    next: (response) => {
      console.log('===== RÉPONSE COMPLÈTE API =====');
      console.log(response);
      console.log('Nombre total d\'utilisateurs:', response.users?.length || response.data?.length || 0);
      console.log('================================');
      
      this.actualData = response.users || response.data || response || [];
      this.tableDataCopy = [...this.actualData];
      this.totalData = this.actualData.length;
      this.calculateTotalPages(this.totalData, this.pageSize);
      this.getTableData({ skip: 0, limit: this.pageSize });
      this.loading = false;
    },
    error: (error) => {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
      this.error = 'Erreur lors du chargement des données';
      this.loading = false;
    }
  });
}
  public getTableData(data: { skip: number; limit: number }): void {
    this.skip = data.skip;
    this.limit = data.limit;
    const startIndex = this.skip;
    const endIndex = startIndex + this.limit;
    this.tableData = this.actualData.slice(startIndex, endIndex);
    this.serialNumberArray = Array.from(
      { length: this.tableData.length },
      (_, i) => startIndex + i + 1
    );
  }
public getRoleName(user: User): string {
  if (user.role && typeof user.role === 'object' && user.role.name) {
    return user.role.name;
  }
  return 'Non défini';
}

  public onPageChange(page: number): void {
    this.currentPage = page;
    const skip = (page - 1) * this.pageSize;
    this.getTableData({ skip: skip, limit: this.pageSize });
  }

  public searchData(value: string): void {
    this.searchDataValue = value;
    if (value.trim()) {
      this.actualData = this.tableDataCopy.filter((user: User) =>
        user.nom?.toLowerCase().includes(value.toLowerCase()) ||
        user.prenom?.toLowerCase().includes(value.toLowerCase()) ||
        user.email?.toLowerCase().includes(value.toLowerCase()) ||
        user.fonction?.toLowerCase().includes(value.toLowerCase()) ||
        user.numero?.toLowerCase().includes(value.toLowerCase())
      );
    } else {
      this.actualData = [...this.tableDataCopy];
    }
    this.totalData = this.actualData.length;
    this.currentPage = 1;
    this.calculateTotalPages(this.totalData, this.pageSize);
    this.getTableData({ skip: 0, limit: this.pageSize });
  }

  public sortData(sort: Sort): void {
    const data = this.actualData.slice();
    if (!sort.active || sort.direction === '') {
      this.actualData = data;
      return;
    }

    this.actualData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nom':
          return this.compare(a.nom, b.nom, isAsc);
        case 'email':
          return this.compare(a.email, b.email, isAsc);
        case 'fonction':
          return this.compare(a.fonction, b.fonction, isAsc);
        case 'statut':
          return this.compare(a.statut, b.statut, isAsc);
        default:
          return 0;
      }
    });
    this.getTableData({ skip: this.skip, limit: this.limit });
  }

  compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  calculateTotalPages(totalData: number, pageSize: number): void {
    const totalPages = Math.ceil(totalData / pageSize);
    this.pageSelection = [];
    for (let i = 1; i <= totalPages; i++) {
      this.pageSelection.push({
        skip: (i - 1) * pageSize,
        limit: pageSize
      });
    }
  }

  openNew() {
    this.userDialog = true;
    this.isEditMode = false;
    this.selectedUser = null;
  }

  editUser(user: User) {
    this.userDialog = true;
    this.isEditMode = true;
    this.selectedUser = { ...user };
  }

  deleteUser(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          console.log('Utilisateur supprimé');
          this.refreshData();
        },
        error: (error: any) => {
          console.error('Erreur lors de la suppression:', error);
          alert('Erreur lors de la suppression');
        }
      });
    }
  }

  hideDialog() {
    this.userDialog = false;
    this.selectedUser = null;
  }

  refreshData() {
    this.getUserList();
  }

  archiveUser(user: any) {
  if (confirm('Êtes-vous sûr de vouloir archiver cet utilisateur ?')) {
    const updatedUser = { ...user, statut: 0 };
    
    this.userService.updateUser(user.id, updatedUser).subscribe({
      next: () => {
        console.log('Utilisateur archivé avec succès');
        this.refreshData();
      },
      error: (error: any) => {
        console.error('Erreur lors de l\'archivage:', error);
        alert('Erreur lors de l\'archivage de l\'utilisateur');
      }
    });
  }
}

reactivateUser(user: any) {
  if (confirm('Êtes-vous sûr de vouloir réactiver cet utilisateur ?')) {
    const updatedUser = { ...user, statut: 1 };
    
    this.userService.updateUser(user.id, updatedUser).subscribe({
      next: () => {
        console.log('Utilisateur réactivé avec succès');
        this.refreshData();
      },
      error: (error: any) => {
        console.error('Erreur lors de la réactivation:', error);
        alert('Erreur lors de la réactivation de l\'utilisateur');
      }
    });
  }
}


  // Ouvrir le dialog d'import
  openImportDialog() {
    this.showImportDialog = true;
    this.selectedFile = null;
    this.importProgress = 0;
  }

  // Fermer le dialog d'import
  closeImportDialog() {
    this.showImportDialog = false;
    this.selectedFile = null;
    this.isImporting = false;
    this.importProgress = 0;
  }

  // Sélection du fichier
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      
      // Vérifier le type de fichier
      const allowedTypes = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
        'application/vnd.ms-excel', // .xls
        'text/csv' // .csv
      ];
      
      if (allowedTypes.includes(file.type)) {
        this.selectedFile = file;
      } else {
        alert('Format de fichier non supporté. Veuillez utiliser .xlsx, .xls ou .csv');
        this.selectedFile = null;
      }
    }
  }

  // Import des utilisateurs
  importUsers(): void {
    if (!this.selectedFile) {
      alert('Veuillez sélectionner un fichier');
      return;
    }

    this.isImporting = true;
    this.importProgress = 0;

    this.userService.importUsers(this.selectedFile).subscribe({
      next: (response) => {
        console.log('Import réussi:', response);
        this.importProgress = 100;
        
        // Afficher un message de succès avec les détails
        let message = 'Import réussi !';
        if (response.created) {
          message += `\n${response.created} utilisateur(s) créé(s)`;
        }
        if (response.updated) {
          message += `\n${response.updated} utilisateur(s) mis à jour`;
        }
        if (response.errors && response.errors.length > 0) {
          message += `\n${response.errors.length} erreur(s)`;
        }
        
        alert(message);
        
        // Recharger les données
        this.refreshData();
        this.closeImportDialog();
      },
      error: (error) => {
        console.error('Erreur lors de l\'import:', error);
        this.isImporting = false;
        
        let errorMessage = 'Erreur lors de l\'import.';
        if (error.error?.message) {
          errorMessage += '\n' + error.error.message;
        }
        if (error.error?.errors) {
          errorMessage += '\nDétails: ' + JSON.stringify(error.error.errors);
        }
        
        alert(errorMessage);
      }
    });
  }

  // Télécharger le template
downloadTemplate(): void {
  console.log('Début du téléchargement du template...');
  
  this.userService.downloadTemplate().subscribe({
    next: (blob) => {
      console.log('Blob reçu:', blob);
      console.log('Taille du blob:', blob.size);
      console.log('Type du blob:', blob.type);
      
      if (blob.size === 0) {
        console.error('Blob vide reçu');
        alert('Le fichier template est vide');
        return;
      }
      
      try {
        const url = window.URL.createObjectURL(blob);
        console.log('URL du blob créée:', url);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'template_import_users.xlsx';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        console.log('Déclenchement du téléchargement...');
        link.click();
        
        // Nettoyage
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          console.log('Nettoyage terminé');
        }, 100);
        
      } catch (error) {
        console.error('Erreur lors de la création du téléchargement:', error);
        alert('Erreur lors de la création du téléchargement');
      }
    },
    error: (error) => {
      console.error('Détails de l\'erreur de téléchargement:', error);
      console.error('Statut de l\'erreur:', error.status);
      console.error('Message d\'erreur:', error.message);
      console.error('Réponse d\'erreur:', error.error);
      
      let errorMessage = 'Erreur lors du téléchargement du template';
      if (error.status === 404) {
        errorMessage += '\nL\'endpoint n\'existe pas sur le serveur';
      } else if (error.status === 401) {
        errorMessage += '\nProblème d\'authentification';
      } else if (error.status === 500) {
        errorMessage += '\nErreur serveur interne';
      } else if (error.status === 0) {
        errorMessage += '\nProblème de connexion au serveur';
      }
      
      alert(errorMessage);
    }
  });
}

public getRoleBadgeClass(roleName: string): string {
  switch (roleName?.toLowerCase()) {
    case 'super admin':
    case 'superadmin':
      return 'badge bg-danger';
    case 'admin':
      return 'badge bg-warning';
    case 'formateur':
      return 'badge bg-info';
    case 'responsable rh':
    case 'responsable rh groupe':
      return 'badge bg-primary';
    case 'employé':
    case 'employee':
      return 'badge bg-secondary';
    default:
      return 'badge bg-light text-dark';
  }
}


  getStatutBadgeClass(statut: number): string {
    return statut === 1 ? 'badge bg-success' : 'badge bg-warning';
  }
}