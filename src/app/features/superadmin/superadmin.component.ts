import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { routes } from '../../shared/service/routes/routes';
import { SuperadminSidebarComponent } from './common/superadmin-sidebar/superadmin-sidebar.component';
import { User } from '../../shared/models/user.models';
import { HasPermissionDirective } from '../../directive/has-permission-directive.directive';
import { UserService } from '../../shared/service/user/user.service';
import { FormationService } from '../../shared/service/formation/formation.service';
import { ClientCompanyService } from '../../shared/service/client/client-company.service';
import { TicketService } from '../../shared/service/ticket/ticket.service';
import { CertificatService } from '../../shared/service/certificat/certificat.service';
import { DemandeFormationService } from '../../shared/service/demande/demande-formation.service';

@Component({
    selector: 'app-superadmin',
    templateUrl: './superadmin.component.html',
    styleUrls: ['./superadmin.component.scss'],
    imports: [CommonModule, RouterOutlet, RouterModule, SuperadminSidebarComponent, HasPermissionDirective],
    providers: [DecimalPipe]
})
export class SuperadminComponent implements OnInit {
  public routes = routes;
  public last: string = '';
  superAdminProfile: User | null = null;

  headerStats = {
    entreprises: 0,
    entreprisesGrowth: 0,
    utilisateurs: 0,
    utilisateursGrowth: 0,
    formations: 0,
    demandes: 0,
    certificats: 0,
    ticketsUrgents: 0,
    certificatsExpirant: 0,
    comptesEnAttente: 0,
  };

  constructor(
    private router: Router,
    private userService: UserService,
    private formationService: FormationService,
    private clientCompanyService: ClientCompanyService,
    private ticketService: TicketService,
    private certificatService: CertificatService,
    private demandeService: DemandeFormationService,
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
  }

  private loadHeaderStats(): void {
    forkJoin({
      users:      this.userService.getUsers().pipe(catchError(() => of(null))),
      formations: this.formationService.getFormations({ page: 1, limit: 1000 }).pipe(catchError(() => of(null))),
      companies:  this.clientCompanyService.getCompanies().pipe(catchError(() => of(null))),
      tickets:    this.ticketService.getTickets({ statut: 'ouvert', priorite: 'urgent' }).pipe(catchError(() => of(null))),
      certificats: this.certificatService.getCertificats().pipe(catchError(() => of(null))),
      demandes:   this.demandeService.getDemandesFormation().pipe(catchError(() => of(null))),
    }).subscribe(data => {
      const users      = this.extractArray(data.users,      ['utilisateurs', 'data', 'users']);
      const formations = this.extractArray(data.formations, ['formations', 'data']);
      const companies  = this.extractArray(data.companies,  ['entreprises', 'data', 'companies']);
      const tickets    = this.extractArray(data.tickets,    ['tickets', 'data']);
      const certs      = Array.isArray(data.certificats) ? data.certificats : [];
      const demandes   = this.extractArray(data.demandes,   ['demandes', 'data']);

      const now = new Date();
      const in30 = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

      this.headerStats = {
        entreprises:       companies.length,
        entreprisesGrowth: this.countThisMonth(companies),
        utilisateurs:      users.length,
        utilisateursGrowth: this.countThisMonth(users),
        formations:        formations.filter((f: any) => f.est_publie || f.statut === 'publie').length || formations.length,
        demandes:          demandes.filter((d: any) => d.statut === 'en_attente' || d.statut === 'pending').length,
        certificats:       certs.length,
        ticketsUrgents:    tickets.filter((t: any) => t.priorite === 'urgent' && t.statut === 'ouvert').length || tickets.length,
        certificatsExpirant: certs.filter((c: any) => {
          if (!c.date_expiration) return false;
          const exp = new Date(c.date_expiration);
          return exp >= now && exp <= in30;
        }).length,
        comptesEnAttente:  users.filter((u: any) => u.statut === 0 || u.statut === '0').length,
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