import { Component, OnInit, HostListener } from '@angular/core';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { HasPermissionDirective } from '../../../directive/has-permission-directive.directive';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../shared/models/user.models';
import { UserService } from '../../../shared/service/user/user.service';
import { DirectionService } from '../../../shared/service/direction/direction.service';
import { PermissionService } from '../../../shared/service/permission/permission.service';
import { RoleService } from '../../../shared/service/role/role.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { sortRoleNames } from '../../../shared/utils/role-sort.utils';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { UserAddComponent } from '../user-add/user-add.component';
import { AdminrhRoleComponent } from '../adminrh-role/adminrh-role.component';
import { pageSelection } from '../../../shared/models/model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, CustomPaginationComponent, UserAddComponent, AdminrhRoleComponent, HasPermissionDirective],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  // ── Tabs ──────────────────────────────────────
  activeTab: 'users' | 'roles' | 'matrix' = 'users';

  // ── Pagination ───────────────────────────────
  pageSize       = 10;
  tableData:     User[] = [];
  tableDataCopy: User[] = [];
  actualData:    User[] = [];
  currentPage    = 1;
  skip           = 0;
  limit          = this.pageSize;
  totalData      = 0;
  pageSelection: pageSelection[] = [];

  // ── Filtres ──────────────────────────────────
  searchDataValue      = '';
  selectedRoleFilter   = '';
  selectedStatutFilter = '';
  showRoleDropdown     = false;
  showStatutDropdown   = false;

  // ── KPIs topbar ──────────────────────────────
  get rolesCount(): number      { return this.availableRoles.length; }
  get entreprisesCount(): number {
    return new Set(this.actualData.map(u => u.entreprise_id).filter(Boolean)).size;
  }
  get availableRoles(): string[] {
    const roles = [...new Set(this.actualData.map(u => this.getRoleName(u)).filter(Boolean))];
    return sortRoleNames(roles);
  }

  // ── État ─────────────────────────────────────
  loading      = false;
  error        = '';
  userDialog   = false;
  isEditMode   = false;
  selectedUser: User | null = null;
  currentUser: any = null;

  // ── Import ───────────────────────────────────
  showImportDialog = false;
  selectedFile:    File | null = null;
  isImporting      = false;
  importProgress   = 0;
  importResult: {
    done: boolean;
    totalProcessed: number;
    totalCreated: number;
    totalErrors: number;
    headerErrors: string[];
    rowErrors: { line: number; errors: string[] }[];
  } | null = null;

  // ── Invitation en masse ───────────────────
  showMassInviteDialog = false;
  massInviteDirections: { id: number; label: string }[] = [];
  selectedMassDirection: number | null = null;
  selectedMassRole: number | null = null;
  massInviteRoles: any[] = [];
  isSendingMassInvite = false;
  massInviteResult: { message: string; success: boolean } | null = null;
  inactiveUsers: any[] = [];
  filteredInactiveUsers: any[] = [];
  selectedInactiveUserIds: number[] = [];
  massInviteSelectAll = false;

  // ── Matrice des habilitations ──────────────
  matrixRoles: any[] = [];
  matrixCategories: { name: string; permissions: any[] }[] = [];
  matrixLoading = false;
  matrixPageSize = 20;
  matrixPageSizeOptions = [20, 40, 80, 100, 200];
  matrixCurrentPage = 1;
  matrixAllPermissions: { name: string; category: string }[] = [];
  matrixTotalPermissions = 0;

  constructor(
    private userService: UserService,
    private directionService: DirectionService,
    private permissionService: PermissionService,
    private roleService: RoleService,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.getUserList();
    if (this.route.snapshot.queryParamMap.get('action') === 'create') {
      this.openNew();
    }
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.showRoleDropdown   = false;
    this.showStatutDropdown = false;
  }

  // ════════════════════════════════════════════
  // TABS
  // ════════════════════════════════════════════
  setTab(tab: 'users' | 'roles' | 'matrix'): void {
    this.activeTab = tab;
    if (tab === 'matrix' && !this.matrixRoles.length) {
      this.loadMatrix();
    }
  }

  // ════════════════════════════════════════════
  // CHARGEMENT
  // ════════════════════════════════════════════
  private getUserList(): void {
    this.loading = true;
    this.error   = '';

    const roleId = Number(this.currentUser?.role_id) || 0;
    const request$ = roleId === 5
      ? this.userService.getMyUsersgroup()
      : this.userService.getMyUsers();

    request$.subscribe({
      next: (response) => {
        this.actualData    = response.users ?? response.data ?? [];
        this.tableDataCopy = [...this.actualData];
        this.totalData     = this.actualData.length;
        this.calculateTotalPages(this.totalData, this.pageSize);
        this.applyFilters();
        this.loading = false;
      },
      error: (err: any) => {
        this.error   = httpErrorMessage(err, 'Impossible de charger les utilisateurs.');
        this.loading = false;
      }
    });
  }

  refreshData(): void { this.getUserList(); }

  // ════════════════════════════════════════════
  // FILTRES
  // ════════════════════════════════════════════
  setRoleFilter(role: string): void {
    this.selectedRoleFilter = role;
    this.showRoleDropdown   = false;
    this.applyFilters();
  }

  setStatutFilter(s: string): void {
    this.selectedStatutFilter = s;
    this.showStatutDropdown   = false;
    this.applyFilters();
  }

  searchData(value: string): void {
    this.searchDataValue = value;
    this.applyFilters();
  }

  private applyFilters(): void {
    let data = [...this.tableDataCopy];

    if (this.searchDataValue.trim()) {
      const q = this.searchDataValue.toLowerCase();
      data = data.filter(u =>
        u.nom?.toLowerCase().includes(q)        ||
        u.prenom?.toLowerCase().includes(q)     ||
        u.email?.toLowerCase().includes(q)      ||
        u.fonction?.toLowerCase().includes(q)   ||
        u.numero?.toLowerCase().includes(q)     ||
        u.matricule?.toLowerCase().includes(q)  ||
        u.direction?.toLowerCase().includes(q)  ||
        (u as any).direction_obj?.nom?.toLowerCase().includes(q) ||
        (u as any).direction_obj?.parent?.nom?.toLowerCase().includes(q) ||
        (u as any).direction_obj?.parent?.parent?.nom?.toLowerCase().includes(q)
      );
    }

    if (this.selectedRoleFilter) {
      data = data.filter(u => this.getRoleName(u) === this.selectedRoleFilter);
    }

    if (this.selectedStatutFilter !== '') {
      const s = +this.selectedStatutFilter;
      data = data.filter(u => u.statut === s);
    }

    this.actualData  = data;
    this.totalData   = data.length;
    this.currentPage = 1;
    this.calculateTotalPages(this.totalData, this.pageSize);
    this.getTableData({ skip: 0, limit: this.pageSize });
  }

  // ════════════════════════════════════════════
  // PAGINATION
  // ════════════════════════════════════════════
  getTableData(opt: { skip: number; limit: number }): void {
    this.skip      = opt.skip;
    this.limit     = opt.limit;
    this.tableData = this.actualData.slice(this.skip, this.skip + this.limit);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getTableData({ skip: (page - 1) * this.pageSize, limit: this.pageSize });
  }

  calculateTotalPages(total: number, size: number): void {
    this.pageSelection = [];
    for (let i = 1; i <= Math.ceil(total / size); i++) {
      this.pageSelection.push({ skip: (i - 1) * size, limit: size });
    }
  }

  // ════════════════════════════════════════════
  // CRUD
  // ════════════════════════════════════════════
  openNew(): void    { this.userDialog = true; this.isEditMode = false; this.selectedUser = null; }
  hideDialog(): void { this.userDialog = false; this.selectedUser = null; }

  editUser(user: User): void {
    this.userDialog   = true;
    this.isEditMode   = true;
    this.selectedUser = { ...user };
  }

  deleteUser(id: number): void {
    if (!confirm('Supprimer cet utilisateur ?')) return;
    this.userService.deleteUser(id).subscribe({ next: () => this.refreshData() });
  }

  archiveUser(user: User): void {
    if (!confirm('Archiver cet utilisateur ?')) return;
    this.userService.updateUser(user.id, { ...user, statut: 0 }).subscribe({ next: () => this.refreshData() });
  }

  reactivateUser(user: User): void {
    if (!confirm('Réactiver cet utilisateur ?')) return;
    this.userService.updateUser(user.id, { ...user, statut: 1 }).subscribe({ next: () => this.refreshData() });
  }

  // ════════════════════════════════════════════
  // IMPORT
  // ════════════════════════════════════════════
  openImportDialog(): void  {
    this.showImportDialog = true;
    this.selectedFile     = null;
    this.importProgress   = 0;
    this.importResult     = null;
  }
  closeImportDialog(): void {
    this.showImportDialog = false;
    this.isImporting      = false;
    this.importResult     = null;
  }

  onFileSelected(event: Event): void {
    const f = (event.target as HTMLInputElement).files?.[0];
    if (!f) return;
    const ok = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                 'application/vnd.ms-excel', 'text/csv'].includes(f.type);
    this.selectedFile = ok ? f : null;
    if (!ok) alert('Format non supporté. Utilisez .xlsx, .xls ou .csv');
  }

  importUsers(): void {
    if (!this.selectedFile) return;
    this.isImporting    = true;
    this.importProgress = 0;
    this.importResult   = null;
    this.userService.importUsers(this.selectedFile).subscribe({
      next: (res) => {
        this.isImporting    = false;
        this.importProgress = 100;
        this.importResult = {
          done:           true,
          totalProcessed: res.total_processed ?? 0,
          totalCreated:   res.total_created   ?? 0,
          totalErrors:    res.total_errors    ?? 0,
          headerErrors:   res.header_errors   ?? [],
          rowErrors:      (res.errors ?? []).map((e: any) => ({ line: e.line, errors: e.errors })),
        };
        if (res.total_created > 0) this.refreshData();
      },
      error: (err) => {
        this.isImporting  = false;
        this.importResult = {
          done:           true,
          totalProcessed: 0,
          totalCreated:   0,
          totalErrors:    1,
          headerErrors:   [err.error?.message ?? 'Erreur serveur lors de l\'import'],
          rowErrors:      [],
        };
      }
    });
  }

  downloadTemplate(): void {
    this.userService.downloadTemplate().subscribe({
      next: (blob) => {
        const url  = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url; link.download = 'template_import_users.xlsx';
        link.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => alert('Erreur lors du téléchargement du template')
    });
  }

  exportUsers(): void {
    const data = this.tableDataCopy;
    if (!data.length) { alert('Aucune donnée à exporter'); return; }
    const headers = ['Matricule', 'Nom', 'Prénom', 'Email', 'Direction', 'Rôle', 'Entreprise', 'Statut'];
    const rows = data.map(u => [
      u.matricule || '',
      u.nom || '',
      u.prenom || '',
      u.email || '',
      this.getDirectionPath(u),
      this.getRoleName(u),
      (u as any).entreprise?.nom || '',
      u.statut === 1 ? 'Actif' : 'Inactif',
    ]);
    const csv = [headers, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(';')).join('\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = `utilisateurs_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  }

  getDirectionPath(u: any): string {
    if (!u.direction_obj) return u.direction || '';
    const parts: string[] = [];
    if (u.direction_obj.parent?.parent) parts.push(u.direction_obj.parent.parent.nom);
    if (u.direction_obj.parent) parts.push(u.direction_obj.parent.nom);
    parts.push(u.direction_obj.nom);
    return parts.join(' → ');
  }

  // ════════════════════════════════════════════
  // MATRICE DES HABILITATIONS
  // ════════════════════════════════════════════
  private loadMatrix(): void {
    this.matrixLoading = true;
    this.userService.getRoles().subscribe({
      next: (response: any) => {
        const roles = Array.isArray(response) ? response : (response.roles || response.data || []);
        this.matrixRoles = roles
          .filter((r: any) => r.role_level != null)
          .sort((a: any, b: any) => (a.role_level || 99) - (b.role_level || 99));

        this.permissionService.getAllPermissions().subscribe({
          next: (permRes: any) => {
            const permissions = permRes.permissions || [];
            this.matrixAllPermissions = permissions
              .map((p: any) => ({ ...p, category: p.category || 'Général' }))
              .sort((a: any, b: any) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
            this.matrixTotalPermissions = this.matrixAllPermissions.length;
            this.matrixCurrentPage = 1;
            this.buildMatrixPage();
            this.matrixLoading = false;
          },
          error: () => { this.matrixLoading = false; }
        });
      },
      error: () => { this.matrixLoading = false; }
    });
  }

  private buildMatrixPage(): void {
    const start = (this.matrixCurrentPage - 1) * this.matrixPageSize;
    const pagePerms = this.matrixAllPermissions.slice(start, start + this.matrixPageSize);
    const categoryMap = new Map<string, any[]>();
    for (const perm of pagePerms) {
      const cat = perm.category || 'Général';
      if (!categoryMap.has(cat)) categoryMap.set(cat, []);
      categoryMap.get(cat)!.push(perm);
    }
    this.matrixCategories = Array.from(categoryMap.entries()).map(([name, perms]) => ({ name, permissions: perms }));
  }

  get matrixTotalPages(): number {
    return Math.ceil(this.matrixTotalPermissions / this.matrixPageSize);
  }

  get matrixPageNumbers(): number[] {
    return Array.from({ length: this.matrixTotalPages }, (_, i) => i + 1);
  }

  matrixChangePageSize(size: number): void {
    this.matrixPageSize = size;
    this.matrixCurrentPage = 1;
    this.buildMatrixPage();
  }

  matrixGoToPage(page: number): void {
    if (page < 1 || page > this.matrixTotalPages) return;
    this.matrixCurrentPage = page;
    this.buildMatrixPage();
  }

  roleHasPermission(role: any, permissionName: string): boolean {
    if (!role.permissions) return false;
    return role.permissions.some((p: any) => p.name === permissionName);
  }

  getRoleAbbrMatrix(role: any): string {
    const map: Record<string, string> = {
      'admin rh': 'ARH', 'responsable rh': 'RRH', 'manager': 'MGR',
      'formateur': 'FOR', 'consultant': 'CST', 'employé': 'EMP',
    };
    return map[role.name?.toLowerCase()] || role.name?.substring(0, 3).toUpperCase() || '?';
  }

  getRoleColorClassMatrix(role: any): string {
    const name = role.name?.toLowerCase() || '';
    if (name.includes('admin rh') || name.includes('responsable rh')) return 'ul-mh--rh';
    if (name.includes('manager')) return 'ul-mh--mgr';
    if (name.includes('formateur') || name.includes('consultant')) return 'ul-mh--form';
    if (name.includes('employé') || name.includes('employee')) return 'ul-mh--emp';
    return 'ul-mh--default';
  }

  getHierBadgeClassMatrix(role: any): string {
    const name = role.name?.toLowerCase() || '';
    if (name.includes('admin rh') || name.includes('responsable rh')) return 'ul-hier--rh';
    if (name.includes('manager')) return 'ul-hier--mgr';
    if (name.includes('formateur') || name.includes('consultant')) return 'ul-hier--form';
    if (name.includes('employé') || name.includes('employee')) return 'ul-hier--emp';
    return 'ul-hier--default';
  }

  // ════════════════════════════════════════════
  // HELPERS TEMPLATE
  // ════════════════════════════════════════════
  trackById(_: number, u: User): number { return u.id; }

  getDisplayName(u: User): string {
    return u.name || [u.prenom, u.nom].filter(Boolean).join(' ') || u.email;
  }

  getInitials(u: User): string {
    return this.getDisplayName(u).split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  }

  getRoleName(u: User): string { return u.role?.name || 'Non défini'; }

  getRoleKey(roleName: string): string {
    const map: Record<string, string> = {
      'super admin': 'superadmin', 'superadmin': 'superadmin',
      'admin rh': 'adminrh', 'responsable rh': 'adminrh', 'responsable rh groupe': 'adminrh',
      'formateur': 'formateur',
      'employé': 'employe', 'employee': 'employe',
    };
    return map[roleName?.toLowerCase()] ?? 'default';
  }

  getRoleIcon(roleName: string): string {
    const map: Record<string, string> = {
      superadmin: 'isax-shield-tick',
      adminrh:    'isax-briefcase',
      formateur:  'isax-teacher',
      employe:    'isax-user',
    };
    return map[this.getRoleKey(roleName)] ?? 'isax-user';
  }

  formatDate(d: string | Date | undefined): string {
    if (!d) return '—';
    const diff = Date.now() - new Date(d).getTime();
    const h = Math.floor(diff / 3600000);
    const j = Math.floor(diff / 86400000);
    if (h < 1)  return 'À l\'instant';
    if (h < 24) return `Il y a ${h}h`;
    if (j < 2)  return 'Hier';
    return `Il y a ${j}j`;
  }

  getStatutBadgeClass(statut: number): string {
    return statut === 1 ? 'badge bg-success' : 'badge bg-warning';
  }

  // ════════════════════════════════════════════
  // INVITATIONS
  // ════════════════════════════════════════════
  sendInvitation(user: User): void {
    if (!confirm(`Envoyer l'invitation d'activation à ${user.email} ?`)) return;
    this.userService.sendInvitation(user.id).subscribe({
      next: (res) => alert(res.message || 'Invitation envoyée'),
      error: (err) => alert(err.error?.message || 'Erreur lors de l\'envoi')
    });
  }

  activateManual(user: User): void {
    if (!confirm(`Activer manuellement le compte de ${user.email} ?`)) return;
    this.userService.activateManual(user.id).subscribe({
      next: () => this.refreshData(),
      error: (err) => alert(err.error?.message || 'Erreur lors de l\'activation')
    });
  }

  openMassInviteDialog(): void {
    this.showMassInviteDialog = true;
    this.selectedMassDirection = null;
    this.selectedMassRole = null;
    this.selectedInactiveUserIds = [];
    this.massInviteSelectAll = false;
    this.massInviteResult = null;
    this.loadMassInviteDirections();
    this.loadMassInviteRoles();
    this.loadInactiveUsers();
  }

  closeMassInviteDialog(): void {
    this.showMassInviteDialog = false;
    this.isSendingMassInvite = false;
    this.massInviteResult = null;
  }

  private loadMassInviteDirections(): void {
    this.directionService.getArborescence().subscribe({
      next: (res) => {
        this.massInviteDirections = [];
        const arbo = res.arborescence || [];
        for (const dir of arbo) {
          this.massInviteDirections.push({ id: dir.id, label: dir.nom });
          for (const dept of (dir.enfants || [])) {
            this.massInviteDirections.push({ id: dept.id, label: `${dir.nom} → ${dept.nom}` });
            for (const equipe of (dept.enfants || [])) {
              this.massInviteDirections.push({ id: equipe.id, label: `${dir.nom} → ${dept.nom} → ${equipe.nom}` });
            }
          }
        }
      }
    });
  }

  private loadMassInviteRoles(): void {
    this.roleService.getAllRoles().subscribe({
      next: (res) => {
        this.massInviteRoles = res.roles || res.data || res || [];
      }
    });
  }

  private loadInactiveUsers(): void {
    this.inactiveUsers = this.actualData.filter(u => u.statut === 0);
    this.filterInactiveUsers();
  }

  filterInactiveUsers(): void {
    let users = [...this.inactiveUsers];
    if (this.selectedMassDirection) {
      users = users.filter(u => (u as any).direction_id === this.selectedMassDirection);
    }
    if (this.selectedMassRole) {
      users = users.filter(u => (u as any).role_id === this.selectedMassRole || u.role?.id === this.selectedMassRole);
    }
    this.filteredInactiveUsers = users;
    this.selectedInactiveUserIds = this.selectedInactiveUserIds.filter(
      id => users.some(u => u.id === id)
    );
    this.massInviteSelectAll = this.filteredInactiveUsers.length > 0
      && this.filteredInactiveUsers.every(u => this.selectedInactiveUserIds.includes(u.id!));
  }

  toggleInactiveUser(userId: number): void {
    const idx = this.selectedInactiveUserIds.indexOf(userId);
    if (idx > -1) {
      this.selectedInactiveUserIds.splice(idx, 1);
    } else {
      this.selectedInactiveUserIds.push(userId);
    }
    this.massInviteSelectAll = this.filteredInactiveUsers.length > 0
      && this.filteredInactiveUsers.every(u => this.selectedInactiveUserIds.includes(u.id!));
  }

  toggleSelectAllInactive(): void {
    if (this.massInviteSelectAll) {
      this.selectedInactiveUserIds = [];
      this.massInviteSelectAll = false;
    } else {
      this.selectedInactiveUserIds = this.filteredInactiveUsers.map(u => u.id!);
      this.massInviteSelectAll = true;
    }
  }

  sendMassInvitation(): void {
    const hasFilter = this.selectedMassDirection || this.selectedMassRole;
    const hasSelection = this.selectedInactiveUserIds.length > 0;
    if (!hasFilter && !hasSelection) return;

    this.isSendingMassInvite = true;
    this.massInviteResult = null;

    const params: any = {};
    if (hasSelection) {
      params.user_ids = this.selectedInactiveUserIds;
    } else {
      if (this.selectedMassDirection) params.direction_id = this.selectedMassDirection;
      if (this.selectedMassRole) params.role_id = this.selectedMassRole;
    }

    this.userService.sendMassInvitation(params).subscribe({
      next: (res) => {
        this.isSendingMassInvite = false;
        this.massInviteResult = { message: res.message, success: true };
        this.refreshData();
      },
      error: (err) => {
        this.isSendingMassInvite = false;
        this.massInviteResult = { message: err.error?.message || 'Erreur lors de l\'envoi', success: false };
      }
    });
  }
}
