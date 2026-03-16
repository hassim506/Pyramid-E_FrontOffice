import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../../shared/service/routes/routes';
import { AdminrhSidebarComponent } from './common/adminrh-sidebar/adminrh-sidebar.component';
import { User } from '../../shared/models/user.models';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AdminrhCategorieComponent } from './adminrh-categorie/adminrh-categorie.component';

@Component({
    selector: 'app-adminrh',
    templateUrl: './adminrh.component.html',
    styleUrls: ['./adminrh.component.scss'],
    imports: [CommonModule, RouterOutlet, RouterModule, ReactiveFormsModule, FormsModule, AdminrhSidebarComponent]
})
export class AdminrhComponent implements OnInit {
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

  public getRoleName(user: User): string {
  if (!user.role) {
    return 'Non défini';
  }
  
  // Check if role is an object with a name property
  if (typeof user.role === 'object' && user.role !== null && 'name' in user.role) {
    return (user.role as { name: string }).name;
  }
  
  // Check if role is a string
  if (typeof user.role === 'string') {
    return user.role;
  }
  
  return 'Non défini';
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