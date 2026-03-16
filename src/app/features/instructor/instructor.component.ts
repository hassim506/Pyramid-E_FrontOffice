import { NavigationStart, NavigationEnd, Router, Event as RouterEvent, RouterModule } from '@angular/router';
import { routes } from '../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FeatherIconModule } from '../../shared/module/feather.module';
import { SharedModule } from 'primeng/api';
import { InstructorSidebarComponent } from './common/instructor-sidebar/instructor-sidebar.component';
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.models';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-instructor',
    templateUrl: './instructor.component.html',
    styleUrls: ['./instructor.component.scss'],
    imports: [
      CommonModule,
      FeatherIconModule,
      RouterModule,
      SharedModule,
      InstructorSidebarComponent
    ],
})
export class InstructorComponent implements OnInit {
  public routes = routes;
  public last: string = '';
  instructorProfile: User | null = null;

  constructor(private router: Router) {
    this.router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationEnd) {
        this.last = data.url.split('/')[data.url.split('/').length - 1];
      }
    });
  }

  ngOnInit(): void {
    this.loadInstructorProfile();
  }

  loadInstructorProfile(): void {
    try {
      const userDataString = localStorage.getItem('pyramide_user');
      if (userDataString) {
        const currentUser: any = JSON.parse(userDataString);
        
        // Ajouter le champ role si absent
        if (!currentUser.role && currentUser.role_id === 3) {
          currentUser.role = 'Instructeur';
        }
        
        this.instructorProfile = currentUser as User;
      }
    } catch (error) {
      console.error('Erreur lors du chargement du profil:', error);
    }
  }

  getFullName(): string {
    if (!this.instructorProfile) return 'Utilisateur';
    return `${this.instructorProfile.prenom} ${this.instructorProfile.nom}`;
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
    if (!this.instructorProfile) return 'U';
    const firstNameInitial = this.instructorProfile.prenom?.charAt(0) || '';
    const lastNameInitial = this.instructorProfile.nom?.charAt(0) || '';
    return (firstNameInitial + lastNameInitial).toUpperCase();
  }

  getUserAvatar(): string {
    // Si vous avez un champ avatar dans votre modèle User
    if (this.instructorProfile && (this.instructorProfile as any).avatar) {
      return (this.instructorProfile as any).avatar;
    }
    return 'assets/img/user/user-01.jpg';
  }
}
  
  