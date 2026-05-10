import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../shared/service/common/common.service';
import { AuthService } from '../../../../shared/service/authentification/auth.service';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DemandeFormationService } from '../../../../shared/service/demande/demande-formation.service';
import { SessionFormationService, SessionFormationResponse } from '../../../../shared/service/session/session-formation.service';

@Component({
    selector: 'app-adminrh-sidebar',
    templateUrl: './adminrh-sidebar.component.html',
    styleUrl: './adminrh-sidebar.component.scss',
    imports: [CommonModule, RouterLink, RouterLinkActive]
})
export class AdminrhSidebarComponent implements OnInit {
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';
  currentUser: any;

  demandesEnAttenteCount: number = 0;
  sessionsAVenirCount: number = 0;

  openGroups: Record<string, boolean> = {
    formations: false,
    demandes:   false,
    utilisateurs: true,
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
    return u?.role?.name || (u?.role_id === 5 ? 'RH Groupe' : 'Admin RH');
  }

  constructor(
    private common: CommonService,
    private authService: AuthService,
    private demandeService: DemandeFormationService,
    private sessionService: SessionFormationService,
  ) {
    this.common.base.subscribe((base: string) => { this.base = base; });
    this.common.page.subscribe((page: string) => { this.page = page; });
    this.common.last.subscribe((last: string) => { this.last = last; });
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.loadBadgeCounts();
  }

  private loadBadgeCounts(): void {
    this.demandeService.getDemandesFormation().subscribe({
      next: (res) => {
        this.demandesEnAttenteCount = (res.demandes || [])
          .filter(d => d.statut === 'en_attente').length;
      },
      error: () => {}
    });

    this.sessionService.getAllSessionsRH().subscribe({
      next: (res: SessionFormationResponse) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        this.sessionsAVenirCount = (res.sessions || [])
          .filter(s => s.date_debut != null && new Date(s.date_debut) > today).length;
      },
      error: () => {}
    });
  }
}
