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

  // ── Map segment URL → label breadcrumb ──────────────────
  private readonly breadcrumbLabels: Record<string, string> = {
    // Dashboard & profil
    'student-dashboard':        'Tableau de bord',
    'student-profile':          'Mon profil',

    // Formations
    'mes-formations':           'Mes formations',
    'mes-cours':                'Mes formations',
    'student-courses':          'Mes formations',

    // Catalogues
    'mes-catalogues':           'Catalogues',
    'catalogue-detail':         'Détail catalogue',

    // Parcours
    'mes-parcours':             'Mes parcours',
    'mes-parcours-assignes':    'Mes parcours',
    'parcours-assignes':        'Mes parcours',
    'students-parcours':        'Mes parcours',

    // Sessions
    'students-session':         'Mes sessions',
    'sessions-acceptees':       'Mes sessions',

    // Demandes
    'students-catalogue':       'Demandes catalogues',

    // Certificats & quiz
    'student-certificate':      'Mes certifications',
    'student-quiz':             'Mes quiz',
    'student-quiz-questions':   'Questions quiz',

    // Paramètres
    'student-settings':         'Paramètres',
    'student-change-password':  'Mot de passe',
    'student-notifications':    'Notifications',
    'student-billing-address':  'Facturation',
    'student-social-profile':   'Profil social',
    'student-linked-accounts':  'Comptes liés',

    // Autres
    'student-message':          'Messages',
    'student-tickets':          'Tickets',
    'student-reviews':          'Avis',
    'student-wishlist':         'Favoris',
    'student-referral':         'Parrainage',
    'student-order-history':    'Historique',
  };

  studentProfile: User | null = null;

  constructor(private router: Router) {
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        const segments = data.url.split('/').filter(s => s.length > 0);

        // Cherche le premier segment connu dans la map (de droite à gauche)
        // en ignorant les segments purement numériques (IDs)
        let label = '';
        for (let i = segments.length - 1; i >= 0; i--) {
          const seg = segments[i];
          // Ignorer les IDs numériques et les query params
          if (/^\d+$/.test(seg) || seg.includes('?')) continue;
          if (this.breadcrumbLabels[seg]) {
            label = this.breadcrumbLabels[seg];
            break;
          }
        }

        // Fallback : dernier segment non numérique en titlecase
        if (!label) {
          const nonNumeric = segments.filter(s => !/^\d+$/.test(s));
          const fallback = nonNumeric[nonNumeric.length - 1] ?? '';
          label = fallback.replace(/-/g, ' ');
        }

        this.last = label;
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
    if (!user.role) return 'Non défini';
    if (typeof user.role === 'object' && user.role !== null && 'name' in user.role) {
      return (user.role as { name: string }).name;
    }
    if (typeof user.role === 'string') return user.role;
    return 'Non défini';
  }

  getInitials(): string {
    if (!this.studentProfile) return 'U';
    const firstNameInitial = this.studentProfile.prenom?.charAt(0) || '';
    const lastNameInitial  = this.studentProfile.nom?.charAt(0)    || '';
    return (firstNameInitial + lastNameInitial).toUpperCase();
  }

  getUserAvatar(): string {
    if (this.studentProfile && (this.studentProfile as any).avatar) {
      return (this.studentProfile as any).avatar;
    }
    return 'assets/img/user/user-01.jpg';
  }
}