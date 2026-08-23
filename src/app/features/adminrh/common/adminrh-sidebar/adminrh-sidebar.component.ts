import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { CommonService } from '../../../../shared/service/common/common.service';
import { AuthService } from '../../../../shared/service/authentification/auth.service';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DemandeFormationService } from '../../../../shared/service/demande/demande-formation.service';
import { SondageService } from '../../../../shared/service/sondage/sondage.service';
import { SessionFormationService, SessionFormationResponse } from '../../../../shared/service/session/session-formation.service';
import { UserService } from '../../../../shared/service/user/user.service';
import { CertificatService } from '../../../../shared/service/certificat/certificat.service';
import { TicketService } from '../../../../shared/service/ticket/ticket.service';
import { HasPermissionDirective } from '../../../../directive/has-permission-directive.directive';

@Component({
    selector: 'app-adminrh-sidebar',
    templateUrl: './adminrh-sidebar.component.html',
    styleUrl: './adminrh-sidebar.component.scss',
    imports: [CommonModule, RouterLink, RouterLinkActive, HasPermissionDirective]
})
export class AdminrhSidebarComponent implements OnInit, OnDestroy {
  private refreshSub?: Subscription;
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';
  currentUser: any;

  demandesEnAttenteCount = 0;
  sessionsAVenirCount    = 0;
  certificatsCount       = 0;
  messagesCount          = 0;
  ticketsCount           = 0;
  sondagesRecusCount     = 0;
  employes               = 0;
  tauxCompletion         = 73;

  quotaUsed  = 18;
  quotaTotal = 25;
  get quotaPercent() { return Math.round((this.quotaUsed / this.quotaTotal) * 100); }

  openGroups: Record<string, boolean> = {
    demandes:  false,
    formation: false,
    quiz:      false,
  };

  toggleGroup(key: string): void {
    this.openGroups[key] = !this.openGroups[key];
  }

  isHoldingAdmin(): boolean {
    return this.currentUser?.role_id === 5
        || this.currentUser?.role === 'Superadmin RH Holding';
  }

  getInitials(): string {
    const u = this.currentUser;
    if (!u) return 'RH';
    const n = u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.email || '';
    return n.split(' ').map((w: string) => w[0]).join('').substring(0, 2).toUpperCase() || 'RH';
  }

  getDisplayName(): string {
    const u = this.currentUser;
    if (!u) return 'Admin RH';
    return u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.email || 'Admin RH';
  }

  getRoleLabel(): string {
    const u = this.currentUser;
    return u?.role?.name || (u?.role_id === 5 ? 'RH Groupe' : 'Administratrice RH');
  }

  getEntrepriseName(): string {
    const u = this.currentUser;
    return u?.entreprise?.nom || u?.entreprise_nom || 'Entreprise';
  }

  constructor(
    private common: CommonService,
    private authService: AuthService,
    private demandeService: DemandeFormationService,
    private sessionService: SessionFormationService,
    private userService: UserService,
    private certificatService: CertificatService,
    private ticketService: TicketService,
    private sondageService: SondageService,
    private router: Router,
  ) {
    this.common.base.subscribe((base: string) => { this.base = base; });
    this.common.page.subscribe((page: string) => { this.page = page; });
    this.common.last.subscribe((last: string) => { this.last = last; });
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.loadBadgeCounts();
    if (this.router.url.includes('demande')) {
      this.openGroups['demandes'] = true;
    }
    if (this.router.url.includes('quiz')) {
      this.openGroups['quiz'] = true;
    }
    if (this.router.url.includes('adminrh-course') ||
        this.router.url.includes('adminrh-catalogue') ||
        this.router.url.includes('adminrh-parcours')) {
      this.openGroups['formation'] = true;
    }
    // Rafraîchir les badges toutes les 60s
    this.refreshSub = interval(60000).subscribe(() => this.loadSessionsBadge());
  }

  ngOnDestroy(): void {
    this.refreshSub?.unsubscribe();
  }

  loadSessionsBadge(): void {
    this.sessionService.getAllSessionsRH().subscribe({
      next: (res: SessionFormationResponse) => {
        const now = new Date();
        this.sessionsAVenirCount = (res.sessions || [])
          .filter(s => s.statut === 'planifiee' && s.date_debut != null && new Date(s.date_debut) >= now)
          .length;
      },
      error: () => {}
    });
  }

  private loadBadgeCounts(): void {
    this.demandeService.getDemandesFormation().subscribe({
      next: (res) => {
        this.demandesEnAttenteCount = (res.demandes || [])
          .filter(d => d.statut === 'en_attente').length;
      },
      error: () => {}
    });

    this.loadSessionsBadge();

    this.userService.getMyUsers().subscribe({
      next: (res: any) => {
        const users = res?.users || [];
        this.employes = users.filter((u: any) => u.statut !== false && u.statut !== 0).length;
      },
      error: () => {}
    });

    this.certificatService.getCertificats().subscribe({
      next: (res: any) => {
        const arr = res?.certificats || res?.data || (Array.isArray(res) ? res : []);
        this.certificatsCount = arr.length;
      },
      error: () => {}
    });

    this.ticketService.getTickets().subscribe({
      next: (res: any) => {
        const arr = res?.tickets || res?.data || (Array.isArray(res) ? res : []);
        this.ticketsCount = arr.filter((t: any) => t.statut === 'ouvert').length;
      },
      error: () => {}
    });

    this.sondageService.getMesSondagesRecus().subscribe({
      next: (res: any) => { this.sondagesRecusCount = res?.total ?? (res?.sondages?.length ?? 0); },
      error: () => {}
    });
  }
}
