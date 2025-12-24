import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Permission } from '../../../shared/models/permission.models';
import { PermissionService } from '../../../shared/service/permission/permission.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-superadmin-permission',
  templateUrl: './superadmin-permission.component.html',
  styleUrls: ['./superadmin-permission.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule]
})
export class SuperadminPermissionComponent implements OnInit {
  public routes = routes;
  
  // État des données
  permissions: Permission[] = [];
  filteredPermissions: Permission[] = [];
  paginatedPermissions: Permission[] = [];
  
  // Formulaire et modal
  permissionForm!: FormGroup;
  isEditing = false;
  selectedPermission: Permission | null = null;
  showModal = false;
  
  // États de l'interface
  loading = false;
  searchText = '';
  successMessage = '';
  errorMessage = '';

  // Configuration de la pagination
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;
  itemsPerPageOptions = [5, 10, 25, 50];

  constructor(
    private permissionService: PermissionService,
    private fb: FormBuilder
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.loadPermissions();
  }

  // ============= INITIALISATION =============
  
  private initializeForm(): void {
    this.permissionForm = this.fb.group({
      name: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(100),
          Validators.pattern(/^[a-zA-Z0-9\s\-_.]+$/) // Caractères autorisés
        ]
      ],
      guard_name: ['web', [Validators.required]]
    });
  }

  // ============= CHARGEMENT DES DONNÉES =============

  loadPermissions(): void {
    this.loading = true;
    console.log('🔍 Chargement des permissions...');
    
    this.permissionService.getAllPermissions().subscribe({
      next: (response) => {
        console.log('✅ Réponse des permissions:', response);
        
        // Gérer différentes structures de réponse
        this.permissions = this.extractPermissionsFromResponse(response);
        
        console.log(`✅ ${this.permissions.length} permissions chargées`);
        
        // Initialiser le filtrage et la pagination
        this.initializeDataDisplay();
        this.loading = false;
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement des permissions:', error);
        this.handleError(error, 'chargement');
        this.permissions = [];
        this.initializeDataDisplay();
        this.loading = false;
      }
    });
  }

  private extractPermissionsFromResponse(response: any): Permission[] {
    if (Array.isArray(response)) {
      return response;
    } else if (response?.data && Array.isArray(response.data)) {
      return response.data;
    } else if (response?.success && Array.isArray(response.data)) {
      return response.data;
    } else if (response?.permissions && Array.isArray(response.permissions)) {
      return response.permissions;
    } else {
      console.warn('⚠️ Structure de réponse non reconnue:', response);
      return [];
    }
  }

  private initializeDataDisplay(): void {
    this.filteredPermissions = [...this.permissions];
    this.currentPage = 1;
    this.updatePagination();
  }

  // ============= RECHERCHE ET FILTRAGE =============

  searchPermissions(): void {
    const searchTerm = this.searchText.trim().toLowerCase();
    
    if (!searchTerm) {
      this.filteredPermissions = [...this.permissions];
    } else {
      this.filteredPermissions = this.permissions.filter(permission =>
        permission.name.toLowerCase().includes(searchTerm) ||
        permission.guard_name.toLowerCase().includes(searchTerm)
      );
    }
    
    this.currentPage = 1;
    this.updatePagination();
    
    console.log(`🔍 Recherche "${searchTerm}": ${this.filteredPermissions.length} résultat(s)`);
  }

  clearSearch(): void {
    this.searchText = '';
    this.searchPermissions();
  }

  // ============= PAGINATION =============

  updatePagination(): void {
    this.totalItems = this.filteredPermissions.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    
    // Validation de la page courante
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    } else if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    
    // Calcul des éléments paginés
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPermissions = this.filteredPermissions.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  onItemsPerPageChange(): void {
    this.currentPage = 1;
    this.updatePagination();
  }

  getPaginationArray(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    
    // Ajustement si on est près de la fin
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  getStartIndex(): number {
    return Math.min((this.currentPage - 1) * this.itemsPerPage + 1, this.totalItems);
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  // ============= GESTION DES MODALS =============

  openModal(permission?: Permission): void {
    this.showModal = true;
    
    if (permission) {
      this.isEditing = true;
      this.selectedPermission = permission;
      this.permissionForm.patchValue({
        name: permission.name,
        guard_name: permission.guard_name
      });
      
      console.log('📝 Mode édition:', permission.name);
    } else {
      this.isEditing = false;
      this.selectedPermission = null;
      this.permissionForm.reset({ 
        guard_name: 'web' 
      });
      
      console.log('➕ Mode création');
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.permissionForm.reset({ guard_name: 'web' });
    this.selectedPermission = null;
    this.isEditing = false;
    this.clearMessages();
  }

  // ============= CRUD OPERATIONS =============

  onSubmit(): void {
    if (this.permissionForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.loading = true;
    const permissionData = this.sanitizeFormData(this.permissionForm.value);

    if (this.isEditing && this.selectedPermission) {
      this.updatePermission(permissionData);
    } else {
      this.createPermission(permissionData);
    }
  }

  private createPermission(permissionData: any): void {
    console.log('➕ Création d\'une permission:', permissionData);
    
    this.permissionService.createPermission(permissionData).subscribe({
      next: (response) => {
        console.log('✅ Permission créée:', response);
        this.showSuccess('Permission créée avec succès');
        this.loadPermissions();
        this.closeModal();
        this.loading = false;
      },
      error: (error) => {
        this.handleError(error, 'création');
        this.loading = false;
      }
    });
  }

  private updatePermission(permissionData: any): void {
    if (!this.selectedPermission) return;
    
    console.log('📝 Mise à jour de la permission:', this.selectedPermission.id, permissionData);
    
    this.permissionService.updatePermission(this.selectedPermission.id, permissionData).subscribe({
      next: (response) => {
        console.log('✅ Permission mise à jour:', response);
        this.showSuccess('Permission mise à jour avec succès');
        this.loadPermissions();
        this.closeModal();
        this.loading = false;
      },
      error: (error) => {
        this.handleError(error, 'mise à jour');
        this.loading = false;
      }
    });
  }

  deletePermission(permission: Permission): void {
    const confirmMessage = `Êtes-vous sûr de vouloir supprimer la permission "${permission.name}" ?\n\nCette action est irréversible et peut affecter les rôles utilisant cette permission.`;
    
    if (confirm(confirmMessage)) {
      this.loading = true;
      console.log('🗑️ Suppression de la permission:', permission.id);
      
      this.permissionService.deletePermission(permission.id).subscribe({
        next: (response) => {
          console.log('✅ Permission supprimée:', response);
          this.showSuccess(`Permission "${permission.name}" supprimée avec succès`);
          this.loadPermissions();
          this.loading = false;
        },
        error: (error) => {
          this.handleError(error, 'suppression');
          this.loading = false;
        }
      });
    }
  }

  // ============= UTILITAIRES =============

  private sanitizeFormData(data: any): any {
    return {
      ...data,
      name: data.name?.trim(),
      guard_name: data.guard_name?.trim()
    };
  }

  private markFormGroupTouched(): void {
    Object.keys(this.permissionForm.controls).forEach(key => {
      const control = this.permissionForm.get(key);
      control?.markAsTouched();
    });
  }

  // ============= GESTION DES ERREURS ET MESSAGES =============

  private handleError(error: any, action: string): void {
    console.error(`❌ Erreur lors de la ${action}:`, error);
    
    if (error.status === 422 && error.error?.errors) {
      // Erreurs de validation Laravel
      const messages = Object.values(error.error.errors).flat().join('\n');
      this.showError(messages);
    } else if (error.status === 404) {
      this.showError('Permission introuvable');
    } else if (error.status === 403) {
      this.showError('Vous n\'avez pas les droits pour effectuer cette action');
    } else if (error.error?.message) {
      this.showError(error.error.message);
    } else {
      this.showError(`Erreur lors de la ${action} de la permission`);
    }
  }

  showSuccess(message: string): void {
    this.clearMessages();
    this.successMessage = message;
    console.log('✅ Succès:', message);
    
    setTimeout(() => {
      this.successMessage = '';
    }, 4000);
  }

  showError(message: string): void {
    this.clearMessages();
    this.errorMessage = message;
    console.error('❌ Erreur:', message);
    
    setTimeout(() => {
      this.errorMessage = '';
    }, 5000);
  }

  private clearMessages(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }

  // ============= TRACKBY FUNCTIONS =============

  trackByPermissionId(index: number, permission: Permission): number {
    return permission.id;
  }

  // ============= GETTERS =============

  get f() {
    return this.permissionForm.controls;
  }

  get hasPermissions(): boolean {
    return this.permissions.length > 0;
  }

  get hasFilteredResults(): boolean {
    return this.filteredPermissions.length > 0;
  }

  get isSearching(): boolean {
    return this.searchText.trim().length > 0;
  }

  get totalGuards(): string[] {
    const guards = [...new Set(this.permissions.map(p => p.guard_name))];
    return guards.sort();
  }

  // ============= MÉTHODES DE STATISTIQUES =============

  getPermissionsByGuard(guardName: string): Permission[] {
    return this.permissions.filter(p => p.guard_name === guardName);
  }

  getGuardCount(guardName: string): number {
    return this.getPermissionsByGuard(guardName).length;
  }

  getGuardPercentage(guardName: string): number {
    if (this.permissions.length === 0) return 0;
    return (this.getGuardCount(guardName) / this.permissions.length) * 100;
  }
}