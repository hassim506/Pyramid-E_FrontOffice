import { Component } from '@angular/core';
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
    imports:[CommonModule,RouterLink,RouterLinkActive,HasPermissionDirective]
})
export class SuperadminSidebarComponent {
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';

  constructor(private common: CommonService,    private auth: AuthService, private roleRedirectService: RoleRedirectService) {
      
    
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
      console.log('Permissions:', this.auth.getUserPermissions());
    console.log('A la permission lister utilisateurs:', this.auth.hasPermission('lister utilisateurs'));
  
  }

  logout(): void {
    const userData = localStorage.getItem('pyramide_user');
    let roleId = 0;
    
    if (userData) {
      try {
        const user = JSON.parse(userData);
        roleId = user.role_id;
      } catch (error) {
        console.error('Erreur lors du parsing des données utilisateur');
      }
    }
    
    // Nettoyer le localStorage
    localStorage.removeItem('pyramide_token');
    localStorage.removeItem('pyramide_user');
    
    // Rediriger selon le rôle
    this.roleRedirectService.redirectByRole(roleId);
  }
}
