import { Component, OnInit, HostListener } from '@angular/core';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { HasPermissionDirective } from '../../../directive/has-permission-directive.directive';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../shared/models/user.models';
import { UserService } from '../../../shared/service/user/user.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
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
    return [...new Set(this.actualData.map(u => this.getRoleName(u)).filter(Boolean))];
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

  constructor(
    private userService: UserService,
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
  setTab(tab: 'users' | 'roles' | 'matrix'): void { this.activeTab = tab; }

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
        u.direction?.toLowerCase().includes(q)
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
      u.direction || '',
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
}
