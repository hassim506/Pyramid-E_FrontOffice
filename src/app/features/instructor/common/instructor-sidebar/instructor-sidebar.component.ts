import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonService } from '../../../../shared/service/common/common.service';
import { AuthService } from '../../../../shared/service/authentification/auth.service';
import { FormationService } from '../../../../shared/service/formation/formation.service';
import { SessionFormationService } from '../../../../shared/service/session/session-formation.service';
import { routes } from '../../../../shared/service/routes/routes';

interface ProgressBar { name: string; pct: number; }

@Component({
  selector: 'app-instructor-sidebar',
  templateUrl: './instructor-sidebar.component.html',
  styleUrl: './instructor-sidebar.component.scss',
  imports: [CommonModule, RouterLink, RouterLinkActive]
})
export class InstructorSidebarComponent implements OnInit {
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';

  currentUser: any;
  formationsCount   = 0;
  apprenantCount    = 0;
  completionRate    = 0;
  sessionsAVenir    = 0;
  progressBars: ProgressBar[] = [];

  openGroups: Record<string, boolean> = {
    formations: true,
    modules:    false,
    quiz:       false,
  };

  constructor(
    private common: CommonService,
    private authService: AuthService,
    private formationService: FormationService,
    private sessionService: SessionFormationService,
  ) {
    this.common.base.subscribe((v: string) => this.base = v);
    this.common.page.subscribe((v: string) => this.page = v);
    this.common.last.subscribe((v: string) => this.last = v);
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.loadStats();
    this.loadSessionsAVenir();
  }

  private loadStats(): void {
    this.formationService.getFormationsformateur().subscribe({
      next: (res) => {
        const formations = res.formations || [];
        this.formationsCount = formations.length;

        let totalApprenants = 0;
        let totalCompletion = 0;
        let completionCount = 0;

        formations.forEach((f: any) => {
          totalApprenants += f.nb_participants ?? 0;
          const pct = Math.round(f.taux_completion ?? f.completion ?? 0);
          if (pct > 0) { totalCompletion += pct; completionCount++; }
        });

        this.apprenantCount = totalApprenants;
        this.completionRate = completionCount > 0 ? Math.round(totalCompletion / completionCount) : 0;

        this.progressBars = formations
          .filter((f: any) => (f.nb_participants ?? 0) > 0)
          .slice(0, 4)
          .map((f: any) => ({
            name: f.titre || 'Formation',
            pct: Math.round(f.taux_completion ?? f.completion ?? 0),
          }));
      },
      error: () => {}
    });
  }

  private loadSessionsAVenir(): void {
    const user = this.authService.getUser();
    const formateurId = user?.id;
    const params = formateurId ? { formateur_id: formateurId, statut: 'planifiee' } : { statut: 'planifiee' };

    this.sessionService.getAllSessionsRH(params).subscribe({
      next: (res) => {
        if (res?.status && res.sessions) {
          const now = new Date();
          this.sessionsAVenir = res.sessions.filter(s =>
            s.statut === 'planifiee' && new Date(s.date_debut) >= now
          ).length;
        }
      },
      error: () => {}
    });
  }

  toggleGroup(key: string): void {
    this.openGroups[key] = !this.openGroups[key];
  }

  getInitials(): string {
    const u = this.currentUser;
    if (!u) return 'F';
    const n = u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.email || '';
    return n.split(' ').map((w: string) => w[0]).join('').substring(0, 2).toUpperCase() || 'F';
  }

  getDisplayName(): string {
    const u = this.currentUser;
    if (!u) return 'Formateur';
    return u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.email || 'Formateur';
  }

  getRoleLabel(): string {
    const u = this.currentUser;
    return u?.fonction || u?.role?.name || 'Formateur';
  }
}
