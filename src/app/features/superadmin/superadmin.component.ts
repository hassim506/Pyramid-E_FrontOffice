import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../../shared/service/routes/routes';
import { SuperadminSidebarComponent } from './common/superadmin-sidebar/superadmin-sidebar.component';
import { User } from '../../shared/models/user.models';

@Component({
    selector: 'app-superadmin',
    templateUrl: './superadmin.component.html',
    styleUrls: ['./superadmin.component.scss'],
    imports: [CommonModule, RouterOutlet, RouterModule, SuperadminSidebarComponent]
})
export class SuperadminComponent implements OnInit {
  public routes = routes;
  public last: string = '';
  superAdminProfile: User | null = null;

  constructor(private router: Router) {
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.last = data.url.split('/')[data.url.split('/').length - 1];
      }
    });
  }

  ngOnInit(): void {
    this.loadSuperAdminProfile();
  }

  loadSuperAdminProfile(): void {
    try {
      const userDataString = localStorage.getItem('pyramide_user');
      if (userDataString) {
        const currentUser: any = JSON.parse(userDataString);
        
        // Ajouter le champ role si absent
        if (!currentUser.role && currentUser.role_id === 1) {
          currentUser.role = 'Super Admin';
        }
        
        this.superAdminProfile = currentUser as User;
      }
    } catch (error) {
      console.error('Erreur lors du chargement du profil:', error);
    }
  }

  getFullName(): string {
    if (!this.superAdminProfile) return 'Utilisateur';
    return `${this.superAdminProfile.prenom} ${this.superAdminProfile.nom}`;
  }

  getRoleName(): string {
    if (!this.superAdminProfile) return 'Utilisateur';
    return this.superAdminProfile.role || 'Super Admin';
  }

  getInitials(): string {
    if (!this.superAdminProfile) return 'U';
    const firstNameInitial = this.superAdminProfile.prenom?.charAt(0) || '';
    const lastNameInitial = this.superAdminProfile.nom?.charAt(0) || '';
    return (firstNameInitial + lastNameInitial).toUpperCase();
  }

  getUserAvatar(): string {
    // Si vous avez un champ avatar dans votre modèle User
    if (this.superAdminProfile && (this.superAdminProfile as any).avatar) {
      return (this.superAdminProfile as any).avatar;
    }
    return 'assets/img/user/user-01.jpg';
  }
}