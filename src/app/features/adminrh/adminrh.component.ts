import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { routes } from '../../shared/service/routes/routes';
import { AdminrhSidebarComponent } from './common/adminrh-sidebar/adminrh-sidebar.component';
import { User } from '../../shared/models/user.models';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../shared/service/authentification/auth.service';
import { DemandeFormationService } from '../../shared/service/demande/demande-formation.service';
import { SessionFormationService } from '../../shared/service/session/session-formation.service';
import { UserService } from '../../shared/service/user/user.service';

@Component({
    selector: 'app-adminrh',
    templateUrl: './adminrh.component.html',
    styleUrls: ['./adminrh.component.scss'],
    imports: [CommonModule, RouterOutlet, RouterModule, ReactiveFormsModule, FormsModule, AdminrhSidebarComponent],
    providers: [DecimalPipe]
})
export class AdminrhComponent implements OnInit {
  public routes = routes;
  public last: string = '';
  superAdminProfile: User | null = null;

  headerStats = {
    employes: 0,
    employesGrowth: 0,
    tauxCompletion: 0,
    tauxVariation: 4,
    sessionsAVenir: 0,
    demandesEnAttente: 0,
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private demandeService: DemandeFormationService,
    private sessionService: SessionFormationService,
    private userService: UserService,
  ) {
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.last = data.url.split('/')[data.url.split('/').length - 1];
      }
    });
  }

  ngOnInit(): void {
    this.loadSuperAdminProfile();
    this.loadHeaderStats();
    this.authService.refreshMe().subscribe({ error: () => {} });
  }

  private loadHeaderStats(): void {
    forkJoin({
      users:    this.userService.getUsers().pipe(catchError(() => of(null))),
      demandes: this.demandeService.getDemandesFormation().pipe(catchError(() => of(null))),
      sessions: this.sessionService.getAllSessionsRH().pipe(catchError(() => of(null))),
    }).subscribe(data => {
      const users    = this.extractArray(data.users,    ['utilisateurs', 'data', 'users']);
      const demandes = this.extractArray(data.demandes, ['demandes', 'data']);
      const sessions = this.extractArray(data.sessions, ['sessions', 'data']);

      const now = new Date();
      now.setHours(0, 0, 0, 0);

      this.headerStats = {
        employes:          users.length,
        employesGrowth:    this.countThisMonth(users),
        tauxCompletion:    73,
        tauxVariation:     4,
        sessionsAVenir:    sessions.filter((s: any) => s.date_debut && new Date(s.date_debut) > now).length,
        demandesEnAttente: demandes.filter((d: any) => d.statut === 'en_attente').length,
      };
    });
  }

  private extractArray(response: any, keys: string[]): any[] {
    if (Array.isArray(response)) return response;
    for (const key of keys) {
      if (response?.[key] && Array.isArray(response[key])) return response[key];
    }
    return [];
  }

  private countThisMonth(items: any[]): number {
    const now = new Date();
    return items.filter((item: any) => {
      const d = new Date(item.created_at || item.dateCreation || '');
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
  }

  loadSuperAdminProfile(): void {
    try {
      const userDataString = localStorage.getItem('pyramide_user');
      if (userDataString) {
        this.superAdminProfile = JSON.parse(userDataString) as User;
      }
    } catch (error) {
      console.error('Erreur lors du chargement du profil:', error);
    }
  }

  getFullName(): string {
    if (!this.superAdminProfile) return 'Utilisateur';
    return `${this.superAdminProfile.prenom ?? ''} ${this.superAdminProfile.nom ?? ''}`.trim();
  }

  getInitials(): string {
    if (!this.superAdminProfile) return 'RH';
    const p = this.superAdminProfile.prenom?.charAt(0) || '';
    const n = this.superAdminProfile.nom?.charAt(0) || '';
    return (p + n).toUpperCase() || 'RH';
  }

  getEntrepriseName(): string {
    const u = this.superAdminProfile as any;
    return u?.entreprise?.nom || u?.entreprise_nom || 'Entreprise';
  }

  getRoleLabel(): string {
    const u = this.superAdminProfile as any;
    if (!u) return 'Administrateur RH';
    if (typeof u.role === 'object' && u.role?.name) return u.role.name;
    if (u.role_id === 5) return 'RH Groupe';
    return 'Administrateur RH';
  }
}
