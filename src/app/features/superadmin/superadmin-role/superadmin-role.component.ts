import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Role } from '../../../shared/models/role.models';
import { Permission } from '../../../shared/models/permission.models';
import { RoleService } from '../../../shared/service/role/role.service';
import { PermissionService } from '../../../shared/service/permission/permission.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-superadmin-role',
  templateUrl: './superadmin-role.component.html',
  styleUrls: ['./superadmin-role.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule]
})
export class SuperadminRoleComponent implements OnInit {
  public routes = routes;

  // ── Constantes modal ────────────────────────────────────────────────────────
  readonly SYSTEM_ROLES = [
    { name: 'Responsable RH',    icon: 'isax-people' },
    { name: 'Admin RH',          icon: 'isax-people' },
    { name: 'Admin IT',          icon: 'isax-setting-2' },
    { name: 'Formateur',         icon: 'isax-teacher' },
    { name: 'Employé',           icon: 'isax-user' },
    { name: 'Consultant',        icon: 'isax-briefcase' },
    { name: 'Manager',           icon: 'isax-chart' },
    { name: 'Admin RH Holding',  icon: 'isax-building-4' },
    { name: 'Superadmin Holding', icon: 'isax-crown' },
  ];

  readonly ROLE_TYPES = [
    { value: 'admin',     label: 'Admin',     color: 'danger',  icon: 'isax-crown',   description: 'Accès total à la plateforme' },
    { value: 'rh',        label: 'Admin RH',  color: 'primary', icon: 'isax-people',  description: 'Gestion RH de l\'entreprise' },
    { value: 'formateur', label: 'Formateur', color: 'info',    icon: 'isax-teacher', description: 'Création et animation de formations' },
    { value: 'employe',   label: 'Employé',   color: 'success', icon: 'isax-user',    description: 'Accès aux formations assignées' },
    { value: 'manager',   label: 'Manager',   color: 'warning', icon: 'isax-chart',   description: 'Suivi d\'équipe et rapports' },
  ];

  readonly PERMISSION_CATEGORIES: { key: string; label: string; keywords?: string[] }[] = [
    { key: 'all',          label: 'Toutes' },
    { key: 'utilisateurs', label: 'Utilisateurs', keywords: ['utilisateur', 'user', 'compte', 'profil', 'client'] },
    { key: 'formations',   label: 'Formations',   keywords: ['formation', 'module', 'cours', 'session', 'contenu'] },
    { key: 'quiz',         label: 'Quiz',         keywords: ['quiz', 'question', 'reponse', 'évaluation', 'evaluation'] },
    { key: 'rapports',     label: 'Rapports',     keywords: ['rapport', 'statistique', 'export', 'log'] },
  ];

  minRoleLevel = 1;
  activePermissionCategory = 'all';
  permissionSearchText = '';

  // ============= ÉTAT DES DONNÉES =============
  roles: Role[] = [];
  allPermissions: Permission[] = [];
  filteredRoles: Role[] = [];
  paginatedRoles: Role[] = [];

  // ============= FORMULAIRE ET MODALS =============
  roleForm!: FormGroup;
  isEditing = false;
  selectedRole: Role | null = null;
  selectedRolePermissions: Permission[] = [];
  showModal = false;
  showPermissionsModal = false;

  // ============= ÉTATS DE L'INTERFACE =============
  loading = false;
  searchText = '';
  successMessage = '';
  errorMessage = '';

  // ============= CONFIGURATION DE LA PAGINATION =============
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;
  itemsPerPageOptions = [5, 10, 25, 50];

  constructor(
    private roleService: RoleService,
    private permissionService: PermissionService,
    private fb: FormBuilder
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.loadRoles();
    this.loadPermissions();
    
    // Debug temporaire
    setTimeout(() => {
      console.log('🔍 État final après chargement:');
      console.log('- Rôles:', this.roles.length);
      console.log('- Permissions:', this.allPermissions.length);
    }, 3000);
  }

  // ============= INITIALISATION =============
  
  private initializeForm(): void {
    this.roleForm = this.fb.group({
      name:        ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      guard_name:  ['web', [Validators.required]],
      type:        ['', [Validators.required]],
      role_level:  [this.minRoleLevel, [Validators.required, Validators.min(1), Validators.max(10)]],
      permissions: this.fb.array([])
    });
  }

  // ============= CHARGEMENT DES DONNÉES =============

  loadRoles(): void {
    this.loading = true;
    console.log('🔍 Début du chargement des rôles...');
    
    this.roleService.getAllRoles().subscribe({
      next: (response) => {
        console.log('✅ Réponse complète du backend:', response);
        
        this.roles = this.extractRolesFromResponse(response);
        
        console.log('✅ Nombre de rôles chargés:', this.roles.length);
        if (this.roles.length > 0) {
          console.log('✅ Premier rôle:', this.roles[0]);
          
          // Vérifier les permissions pour chaque rôle
          this.roles.forEach(role => {
            console.log(`📊 Rôle "${role.name}":`, {
              id: role.id,
              permissions: role.permissions?.length || 0,
              firstPermission: role.permissions?.[0]?.name || 'Aucune'
            });
          });
        }
        
        this.initializeDataDisplay();
        this.loading = false;
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement des rôles:', error);
        this.handleError(error, 'chargement des rôles');
        this.roles = [];
        this.initializeDataDisplay();
        this.loading = false;
      }
    });
  }

  loadPermissions(): void {
    console.log('🔍 Début du chargement des permissions...');
    
    this.permissionService.getAllPermissions().subscribe({
      next: (response) => {
        console.log('✅ Réponse des permissions:', response);
        
        this.allPermissions = this.extractPermissionsFromResponse(response);
        
        console.log('✅ Permissions chargées:', this.allPermissions.length);
        if (this.allPermissions.length > 0) {
          console.log('📊 Première permission:', this.allPermissions[0]);
        }
        
        this.createPermissionsFormArray();
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement des permissions:', error);
        this.handleError(error, 'chargement des permissions');
        this.allPermissions = [];
      }
    });
  }

  private extractRolesFromResponse(response: any): Role[] {
    if (response.roles && Array.isArray(response.roles)) {
      return response.roles;
    } else if (Array.isArray(response)) {
      return response;
    } else if (response.data && Array.isArray(response.data)) {
      return response.data;
    } else if (response.success && Array.isArray(response.data)) {
      return response.data;
    } else {
      console.warn('⚠️ Structure de réponse des rôles non reconnue:', response);
      return [];
    }
  }

  private extractPermissionsFromResponse(response: any): Permission[] {
    if (Array.isArray(response)) {
      return response;
    } else if (response.data && Array.isArray(response.data)) {
      return response.data;
    } else if (response.success && Array.isArray(response.data)) {
      return response.data;
    } else if (response.permissions && Array.isArray(response.permissions)) {
      return response.permissions;
    } else {
      console.warn('⚠️ Structure de réponse des permissions non reconnue:', response);
      return [];
    }
  }

  private readonly ROLE_ORDER: string[] = [
    'Super Admin',
    'Superadmin Holding',
    'Super Admin Holding',
    'Super Admin RH Holding',
    'Administrateur RH Holding',
    'Admin RH Holding',
    'Admin RH',
    'Administrateur RH',
    'Admin IT',
    'Administrateur IT',
    'Responsable RH Groupe',
    'Responsable RH',
    'Gestionnaire de Contenu',
    'Gestionnaire de Compte Client',
    'Administrateur Entreprise',
    'Admin RH Entreprise',
    'Manager',
    'Formateur',
    'Consultant',
    'Employé',
    'Employe',
  ];

  private sortRoles(roles: Role[]): Role[] {
    return [...roles].sort((a, b) => {
      const ia = this.ROLE_ORDER.indexOf(a.name);
      const ib = this.ROLE_ORDER.indexOf(b.name);
      // Rôles connus : tri par ordre défini
      if (ia !== -1 && ib !== -1) return ia - ib;
      // Un seul connu : il passe devant
      if (ia !== -1) return -1;
      if (ib !== -1) return 1;
      // Tous deux inconnus : tri par role_level puis par nom
      const la = (a as any).role_level ?? 99;
      const lb = (b as any).role_level ?? 99;
      if (la !== lb) return la - lb;
      return a.name.localeCompare(b.name, 'fr');
    });
  }

  private initializeDataDisplay(): void {
    this.filteredRoles = this.sortRoles(this.roles);
    this.currentPage = 1;
    this.updatePagination();
  }

  // ============= GESTION DU FORMARRAY DES PERMISSIONS =============

  createPermissionsFormArray(): void {
    if (this.allPermissions.length === 0) {
      console.warn('⚠️ Aucune permission disponible pour créer le FormArray');
      return;
    }

    const permissionsFormArray = this.fb.array(
      this.allPermissions.map(() => this.fb.control(false))
    );
    
    this.roleForm.setControl('permissions', permissionsFormArray);
    
    console.log('✅ FormArray des permissions créé avec', permissionsFormArray.length, 'contrôles');
  }

  get permissionsFormArray(): FormArray {
    return this.roleForm.get('permissions') as FormArray;
  }

  // ============= RECHERCHE ET FILTRAGE =============

  searchRoles(): void {
    const searchTerm = this.searchText.trim().toLowerCase();
    const source = !searchTerm
      ? this.roles
      : this.roles.filter(role =>
          role.name.toLowerCase().includes(searchTerm) ||
          role.guard_name.toLowerCase().includes(searchTerm) ||
          (role.description && role.description.toLowerCase().includes(searchTerm))
        );
    this.filteredRoles = this.sortRoles(source);
    this.currentPage = 1;
    this.updatePagination();
    
    console.log(`🔍 Recherche "${searchTerm}": ${this.filteredRoles.length} résultat(s)`);
  }

  clearSearch(): void {
    this.searchText = '';
    this.searchRoles();
  }

  // ============= PAGINATION =============

  updatePagination(): void {
    this.totalItems = this.filteredRoles.length;
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
    this.paginatedRoles = this.filteredRoles.slice(startIndex, endIndex);
    
    console.log(`📊 Pagination: Page ${this.currentPage}/${this.totalPages}, ${this.paginatedRoles.length} rôles affichés`);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
      console.log(`📄 Changement de page vers: ${page}`);
    }
  }

  onItemsPerPageChange(): void {
    this.currentPage = 1;
    this.updatePagination();
    console.log(`📊 Changement d'éléments par page: ${this.itemsPerPage}`);
  }

  getPaginationArray(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    
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

  // ============= GESTION DES PERMISSIONS =============

  getPermissionsCount(role: Role | null): number {
    return role?.permissions?.length || 0;
  }

  selectAllPermissions(): void {
    const permissionsArray = this.permissionsFormArray;
    
    if (!permissionsArray || permissionsArray.length === 0) {
      console.warn('⚠️ FormArray des permissions non disponible');
      return;
    }
    
    for (let i = 0; i < permissionsArray.length; i++) {
      permissionsArray.at(i).setValue(true);
    }
    
    console.log('✅ Toutes les permissions sélectionnées:', this.getSelectedPermissionsCount());
  }

  deselectAllPermissions(): void {
    const permissionsArray = this.permissionsFormArray;
    
    if (!permissionsArray || permissionsArray.length === 0) {
      console.warn('⚠️ FormArray des permissions non disponible');
      return;
    }
    
    for (let i = 0; i < permissionsArray.length; i++) {
      permissionsArray.at(i).setValue(false);
    }
    
    console.log('✅ Toutes les permissions désélectionnées:', this.getSelectedPermissionsCount());
  }

  getSelectedPermissionsCount(): number {
    const permissionsArray = this.permissionsFormArray;
    
    if (!permissionsArray || permissionsArray.length === 0) {
      return 0;
    }
    
    let count = 0;
    for (let i = 0; i < permissionsArray.length; i++) {
      if (permissionsArray.at(i).value === true) {
        count++;
      }
    }
    
    return count;
  }

  selectPermissionsByGuard(guardName: string): void {
    const permissionsArray = this.permissionsFormArray;
    
    if (!permissionsArray || permissionsArray.length === 0) {
      console.warn('⚠️ FormArray des permissions non disponible');
      return;
    }
    
    this.allPermissions.forEach((permission, index) => {
      if (permission.guard_name === guardName) {
        permissionsArray.at(index).setValue(true);
      }
    });
    
    console.log(`✅ Permissions ${guardName} sélectionnées:`, this.getSelectedPermissionsCount());
  }

  areAllPermissionsSelected(): boolean {
    const permissionsArray = this.permissionsFormArray;
    if (!permissionsArray || permissionsArray.length === 0) return false;
    return this.getSelectedPermissionsCount() === permissionsArray.length;
  }

  areNoPermissionsSelected(): boolean {
    return this.getSelectedPermissionsCount() === 0;
  }

  getSelectedPermissions(): Permission[] {
    const permissionsArray = this.permissionsFormArray;
    const selectedPermissions: Permission[] = [];
    
    if (!permissionsArray || permissionsArray.length === 0) {
      return selectedPermissions;
    }
    
    for (let i = 0; i < permissionsArray.length; i++) {
      if (permissionsArray.at(i).value === true) {
        selectedPermissions.push(this.allPermissions[i]);
      }
    }
    
    return selectedPermissions;
  }

  private getSelectedPermissionIds(): number[] {
    return this.getSelectedPermissions().map(p => p.id);
  }

  // ============= GESTION DES MODALS =============

  openModal(role?: Role): void {
    // S'assurer que les permissions sont chargées
    if (this.allPermissions.length === 0) {
      console.log('⚠️ Permissions pas encore chargées, rechargement...');
      this.loadPermissions();
      
      setTimeout(() => {
        if (this.allPermissions.length > 0) {
          this.openModal(role);
        } else {
          this.showError('Impossible de charger les permissions. Veuillez réessayer.');
        }
      }, 1000);
      return;
    }

    this.showModal = true;
    
    // Créer le FormArray des permissions si nécessaire
    if (!this.roleForm.get('permissions') || 
        this.permissionsFormArray.length !== this.allPermissions.length) {
      this.createPermissionsFormArray();
    }

    this.activePermissionCategory = 'all';
    this.permissionSearchText = '';

    if (role) {
      this.isEditing = true;
      this.selectedRole = role;

      // Remplir le formulaire avec les données du rôle
      this.roleForm.patchValue({
        name:       role.name,
        guard_name: role.guard_name,
        type:       (role as any).type      || '',
        role_level: (role as any).role_level ?? this.minRoleLevel,
      });

      // Marquer les permissions assignées à ce rôle
      const permissionsArray = this.permissionsFormArray;
      const rolePermissionIds = role.permissions?.map(p => p.id) || [];
      
      this.allPermissions.forEach((permission, index) => {
        const isAssigned = rolePermissionIds.includes(permission.id);
        permissionsArray.at(index).setValue(isAssigned);
      });
      
      console.log('✅ Rôle chargé avec', rolePermissionIds.length, 'permissions assignées');
    } else {
      this.isEditing = false;
      this.selectedRole = null;
      this.roleForm.reset({
        guard_name:  'web',
        type:        '',
        role_level:  this.minRoleLevel,
        permissions: this.allPermissions.map(() => false)
      });
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.roleForm.reset({ guard_name: 'web' });
    this.selectedRole = null;
    this.isEditing = false;
    this.clearMessages();
  }

  viewRolePermissions(role: Role): void {
    console.log('🔍 Visualisation des permissions pour le rôle:', role.name);
    console.log('📊 Permissions du rôle:', role.permissions);
    
    this.selectedRole = role;
    this.selectedRolePermissions = role.permissions || [];
    
    console.log('✅ Permissions sélectionnées:', this.selectedRolePermissions.length);
    this.showPermissionsModal = true;
  }

  closePermissionsModal(): void {
    this.showPermissionsModal = false;
    this.selectedRole = null;
    this.selectedRolePermissions = [];
  }

  editRoleFromPermissionsView(): void {
    const role = this.selectedRole;
    this.showPermissionsModal = false;
    this.selectedRolePermissions = [];
    this.openModal(role!);
  }

  // ============= CRUD OPERATIONS =============

  onSubmit(): void {
    if (this.roleForm.invalid) {
      this.markFormGroupTouched();
      this.showError('Veuillez corriger les erreurs dans le formulaire');
      return;
    }

    this.loading = true;
    const roleData = this.prepareRoleData();

    if (this.isEditing && this.selectedRole) {
      this.updateRole(roleData);
    } else {
      this.createRole(roleData);
    }
  }

  private prepareRoleData(): any {
    const formValue = this.roleForm.value;
    return {
      name:        formValue.name?.trim(),
      guard_name:  formValue.guard_name,
      type:        formValue.type,
      role_level:  formValue.role_level,
      permissions: this.getSelectedPermissionIds()
    };
  }

  private createRole(roleData: any): void {
    console.log('➕ Création d\'un rôle:', roleData);
    
    this.roleService.createRole(roleData).subscribe({
      next: (response) => {
        console.log('✅ Rôle créé:', response);
        this.showSuccess('Rôle créé avec succès');
        this.loadRoles();
        this.closeModal();
        this.loading = false;
      },
      error: (error) => {
        this.handleError(error, 'création');
        this.loading = false;
      }
    });
  }

 private updateRole(roleData: any): void {
  if (!this.selectedRole) return;

  console.log('📝 Mise à jour du rôle:', this.selectedRole.id);
  console.log('📊 Données COMPLÈTES à envoyer:', JSON.stringify(roleData, null, 2));
  console.log('📋 Permissions sélectionnées (IDs):', roleData.permissions);
  console.log('📋 Permissions sélectionnées (Détails):', this.getSelectedPermissions().map(p => ({id: p.id, name: p.name})));

  this.roleService.updateRole(this.selectedRole.id, roleData).subscribe({
    next: (response: any) => {
      console.log('✅ Réponse serveur COMPLÈTE:', JSON.stringify(response, null, 2));
      
      // Vérifier la structure de la réponse
      if (response?.role?.permissions) {
        console.log('✅ Permissions dans la réponse:', response.role.permissions);
      } else if (response?.data?.role?.permissions) {
        console.log('✅ Permissions dans la réponse (data.role):', response.data.role.permissions);
      } else {
        console.warn('⚠️ PROBLÈME: Le backend ne retourne pas les permissions dans sa réponse');
        console.warn('⚠️ Structure de la réponse:', Object.keys(response || {}));
      }
      
      this.showSuccess('Rôle mis à jour avec succès');
      
      // Attendre 500ms avant de recharger pour laisser le temps au backend
      setTimeout(() => {
        this.loadRoles();
      }, 500);
      
      this.closeModal();
      this.loading = false;
    },
    error: (error) => {
      console.error('❌ Erreur COMPLÈTE:', error);
      console.error('❌ Status:', error.status);
      console.error('❌ Message:', error.message);
      console.error('❌ Body:', error.error);
      this.handleError(error, 'mise à jour');
      this.loading = false;
    }
  });
}
  deleteRole(role: Role): void {
    const confirmMessage = `Êtes-vous sûr de vouloir supprimer le rôle "${role.name}" ?\n\nCette action est irréversible et peut affecter les utilisateurs ayant ce rôle.`;
    
    if (confirm(confirmMessage)) {
      this.loading = true;
      console.log('🗑️ Suppression du rôle:', role.id);
      
      this.roleService.deleteRole(role.id).subscribe({
        next: (response) => {
          console.log('✅ Rôle supprimé:', response);
          this.showSuccess(`Rôle "${role.name}" supprimé avec succès`);
          this.loadRoles();
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

  private markFormGroupTouched(): void {
    Object.keys(this.roleForm.controls).forEach(key => {
      const control = this.roleForm.get(key);
      control?.markAsTouched();
      
      if (control instanceof FormArray) {
        control.controls.forEach(arrayControl => {
          arrayControl.markAsTouched();
        });
      }
    });
  }

  debugPermissions(): void {
    console.log('🔍 Debug des permissions:');
    console.log('- Total permissions chargées:', this.allPermissions.length);
    console.log('- FormArray permissions:', this.permissionsFormArray?.length);
    console.log('- Permissions sélectionnées:', this.getSelectedPermissionsCount());
    console.log('- Premières permissions:', this.allPermissions.slice(0, 3));
  }

  // ============= CATÉGORIES & RECHERCHE PERMISSIONS MODAL =============

  setPermissionCategory(key: string): void {
    this.activePermissionCategory = key;
  }

  get filteredPermissionsForModal(): Permission[] {
    let list = this.allPermissions;

    // Filtre par catégorie
    if (this.activePermissionCategory !== 'all') {
      const cat = this.PERMISSION_CATEGORIES.find(c => c.key === this.activePermissionCategory);
      if (cat?.keywords?.length) {
        list = list.filter(p =>
          cat.keywords!.some(kw => p.name.toLowerCase().includes(kw))
        );
      }
    }

    // Filtre par texte de recherche
    const term = this.permissionSearchText.trim().toLowerCase();
    if (term) {
      list = list.filter(p => p.name.toLowerCase().includes(term));
    }

    return list;
  }

  getPermissionIndex(permission: Permission): number {
    return this.allPermissions.findIndex(p => p.id === permission.id);
  }

  getSystemRoleFromLoaded(name: string): Role | undefined {
    return this.roles.find(r => r.name === name);
  }

  // ============= HELPERS AFFICHAGE LISTE =============

  getRoleTypeKey(role: Role): string {
    const t = role.type?.toLowerCase();
    if (t === 'admin') return 'superadmin';
    if (t === 'rh' || t === 'manager') return 'adminrh';
    if (t === 'formateur') return 'formateur';
    if (t === 'employe') return 'employe';
    return 'default';
  }

  getRoleTypeIcon(role: Role): string {
    const t = role.type?.toLowerCase();
    if (t === 'admin')     return 'isax-crown';
    if (t === 'rh')        return 'isax-people';
    if (t === 'manager')   return 'isax-chart';
    if (t === 'formateur') return 'isax-teacher';
    if (t === 'employe')   return 'isax-user';
    return 'isax-user-tag';
  }

  getRoleTypeLabel(role: Role): string {
    const t = role.type?.toLowerCase();
    if (t === 'admin')     return 'Admin';
    if (t === 'rh')        return 'Admin RH';
    if (t === 'manager')   return 'Manager';
    if (t === 'formateur') return 'Formateur';
    if (t === 'employe')   return 'Employé';
    return role.type || '—';
  }

  // ============= TRACKBY FUNCTIONS =============

  trackByRoleId(index: number, role: Role): number {
    return role.id;
  }

  trackByPermissionId(index: number, permission: Permission): number {
    return permission.id;
  }

  // ============= GESTION DES ERREURS ET MESSAGES =============

  private handleError(error: any, action: string): void {
    console.error(`❌ Erreur lors de la ${action}:`, error);

    const backendMessage = error.error?.message;

    if (error.status === 422 && error.error?.errors) {
      const messages = Object.values(error.error.errors).flat().join(' — ');
      this.showError(messages);
    } else if (backendMessage) {
      this.showError(backendMessage);
    } else if (error.status === 404) {
      this.showError('Rôle introuvable.');
    } else if (error.status === 403) {
      this.showError('Action non autorisée.');
    } else if (error.status === 409) {
      this.showError('Un rôle avec ce nom existe déjà.');
    } else {
      this.showError(`Erreur lors de la ${action} du rôle.`);
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

  // ============= GETTERS ET PROPRIÉTÉS CALCULÉES =============

  get f() {
    return this.roleForm.controls;
  }

  get hasRoles(): boolean {
    return this.roles.length > 0;
  }

  get hasFilteredResults(): boolean {
    return this.filteredRoles.length > 0;
  }

  get isSearching(): boolean {
    return this.searchText.trim().length > 0;
  }

  get totalPermissions(): number {
    return this.allPermissions.length;
  }

  get selectedPermissionsText(): string {
    const count = this.getSelectedPermissionsCount();
    if (count === 0) return 'Aucune permission sélectionnée';
    if (count === 1) return '1 permission sélectionnée';
    return `${count} permissions sélectionnées`;
  }

  // ============= MÉTHODES DE STATISTIQUES =============

  getPermissionsByGuard(guardName: string): Permission[] {
    return this.allPermissions.filter(p => p.guard_name === guardName);
  }

  getGuardCount(guardName: string): number {
    return this.getPermissionsByGuard(guardName).length;
  }

  getRolesByGuard(guardName: string): Role[] {
    return this.roles.filter(r => r.guard_name === guardName);
  }

  getAveragePermissionsPerRole(): number {
    if (this.roles.length === 0) return 0;
    const total = this.roles.reduce((sum, role) => sum + (role.permissions?.length || 0), 0);
    return Math.round(total / this.roles.length * 100) / 100;
  }

  getMostPermissionsRole(): Role | null {
    if (this.roles.length === 0) return null;
    return this.roles.reduce((max, role) => 
      (role.permissions?.length || 0) > (max.permissions?.length || 0) ? role : max
    );
  }

  getTotalGuards(): string[] {
    const guards = [...new Set(this.allPermissions.map(p => p.guard_name))];
    return guards.sort();
  }

  getGuardPercentage(guardName: string): number {
    if (this.allPermissions.length === 0) return 0;
    return (this.getGuardCount(guardName) / this.allPermissions.length) * 100;
  }
}