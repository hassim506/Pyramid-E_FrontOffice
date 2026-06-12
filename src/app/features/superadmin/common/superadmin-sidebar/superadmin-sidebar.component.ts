import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../shared/service/common/common.service';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HasPermissionDirective } from '../../../../directive/has-permission-directive.directive';
import { AuthService } from '../../../../shared/service/authentification/auth.service';
import { RoleRedirectService } from '../../../../shared/service/role/role-redirect.service';

@Component({
    selector: 'app-superadmin-sidebar',
    templateUrl: './superadmin-sidebar.component.html',
    styleUrl: './superadmin-sidebar.component.scss',
    imports: [CommonModule, RouterLink, RouterLinkActive, HasPermissionDirective]
})
export class SuperadminSidebarComponent implements OnInit {
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';
  currentUser: any;

  openGroups: Record<string, boolean> = {
    utilisateurs: true,
    pedagogie:    false,
    finance:      false,
  };

  toggleGroup(key: string): void {
    this.openGroups[key] = !this.openGroups[key];
  }

  getInitials(): string {
    const u = this.currentUser;
    if (!u) return 'SA';
    const n = u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.email || '';
    return n.split(' ').map((w: string) => w[0]).join('').substring(0, 2).toUpperCase() || 'SA';
  }

  getDisplayName(): string {
    const u = this.currentUser;
    if (!u) return 'Super Admin';
    return u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.email || 'Super Admin';
  }

  getRoleLabel(): string {
    return this.currentUser?.role?.name || 'Superadministrateur';
  }

  constructor(
    private common: CommonService,
    private auth: AuthService,
    private roleRedirectService: RoleRedirectService,
  ) {
    this.common.base.subscribe((base: string) => { this.base = base; });
    this.common.page.subscribe((page: string) => { this.page = page; });
    this.common.last.subscribe((last: string) => { this.last = last; });
  }

  ngOnInit(): void {
    this.currentUser = this.auth.getUser();
  }

  logout(): void {
    const userData = localStorage.getItem('pyramide_user');
    let roleId = 0;
    if (userData) {
      try { roleId = JSON.parse(userData).role_id; } catch {}
    }
    localStorage.removeItem('pyramide_token');
    localStorage.removeItem('pyramide_user');
    this.roleRedirectService.redirectByRole(roleId);
  }
}
