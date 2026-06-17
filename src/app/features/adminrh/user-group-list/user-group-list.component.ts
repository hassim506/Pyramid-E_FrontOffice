
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSortModule, Sort } from '@angular/material/sort';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { User } from '../../../shared/models/user.models';
import { UserService } from '../../../shared/service/user/user.service';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { UserAddComponent } from '../user-add/user-add.component';
import { pageSelection } from '../../../shared/models/model';

@Component({
  selector: 'app-user-group-list',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent, UserAddComponent],
  templateUrl: './user-group-list.component.html',
  styleUrls: ['./user-group-list.component.scss']
})
export class UserGroupListComponent implements OnInit {
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
  
  this.userService.getMyUsersgroup().subscribe({
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
      this.error = httpErrorMessage(error, 'Impossible de charger les données.');
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

  getRoleBadgeClass(role: string): string {
    switch (role?.toLowerCase()) {
      case 'superadmin':
      case 'super admin':
        return 'badge bg-danger';
      case 'admin':
        return 'badge bg-warning';
      case 'formateur':
        return 'badge bg-info';
      case 'responsable rh':
      case 'responsable rh groupe':
        return 'badge bg-primary';
      case 'employé':
        return 'badge bg-secondary';
      default:
        return 'badge bg-secondary';
    }
  }

  getStatutBadgeClass(statut: number): string {
    return statut === 1 ? 'badge bg-success' : 'badge bg-warning';
  }
}