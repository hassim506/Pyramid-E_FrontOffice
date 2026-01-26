import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../../shared/service/routes/routes';
import { StudentSidebarComponent } from './common/student-sidebar/student-sidebar.component';
import { User } from '../../shared/models/user.models';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss'],
    imports: [CommonModule, RouterOutlet, RouterModule, StudentSidebarComponent]
})
export class StudentComponent implements OnInit {
  public routes = routes;
  public last: string = '';
  studentProfile: User | null = null;

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
        if (!currentUser.role && currentUser.role_id === 2) {
          currentUser.role = 'Student';
        }
        
        this.studentProfile = currentUser as User;
      }
    } catch (error) {
      console.error('Erreur lors du chargement du profil:', error);
    }
  }

  getFullName(): string {
    if (!this.studentProfile) return 'Utilisateur';
    return `${this.studentProfile.prenom} ${this.studentProfile.nom}`;
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
    if (!this.studentProfile) return 'U';
    const firstNameInitial = this.studentProfile.prenom?.charAt(0) || '';
    const lastNameInitial = this.studentProfile.nom?.charAt(0) || '';
    return (firstNameInitial + lastNameInitial).toUpperCase();
  }

  getUserAvatar(): string {
    // Si vous avez un champ avatar dans votre modèle User
    if (this.studentProfile && (this.studentProfile as any).avatar) {
      return (this.studentProfile as any).avatar;
    }
    return 'assets/img/user/user-01.jpg';
  }
}