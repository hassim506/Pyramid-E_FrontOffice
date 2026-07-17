import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonService } from '../../../../shared/service/common/common.service';
import { AuthService } from '../../../../shared/service/authentification/auth.service';
import { FormationService } from '../../../../shared/service/formation/formation.service';
import { SessionFormationService } from '../../../../shared/service/session/session-formation.service';
import { SondageService } from '../../../../shared/service/sondage/sondage.service';
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
  sessionsAVenir       = 0;
  sondagesRecusCount   = 0;
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
    private sondageService: SondageService,
  ) {
    this.common.base.subscribe((v: string) => this.base = v);
    this.common.page.subscribe((v: string) => this.page = v);
    this.common.last.subscribe((v: string) => this.last = v);
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.loadStats();
    this.loadSessionsAVenir();
    this.sondageService.getMesSondagesRecus().subscribe({
      next: (res: any) => { this.sondagesRecusCount = res?.total ?? (res?.sondages?.length ?? 0); },
      error: () => {}
    });
  }

  private loadStats(): void {
    this.formationService.getFormationsformateur().subscribe({
      next: (res) => {
        const formations = res.formations || [];
        this.formationsCount = formations.length;

        let totalCompletion = 0;
        let completionCount = 0;

        formations.forEach((f: any) => {
          const pct = Math.round(f.taux_completion ?? f.completion ?? 0);
          if (pct > 0) { totalCompletion += pct; completionCount++; }
        });

        this.completionRate = completionCount > 0 ? Math.round(totalCompletion / completionCount) : 0;

        this.progressBars = formations
          .filter((f: any) => (f.nb_participants ?? 0) > 0)
          .slice(0, 4)
          .map((f: any) => ({
            name: f.titre || 'Formation',
            pct: Math.round(f.taux_completion ?? f.completion ?? 0),
          }));

        // ✅ Compter les apprenants UNIQUES en récupérant tous les participants
        this.loadApprenantsUniques(formations);
      },
      error: () => {}
    });
  }

  private loadApprenantsUniques(formations: any[]): void {
    if (formations.length === 0) {
      this.apprenantCount = 0;
      return;
    }

    // ✅ Utiliser la même logique que students-list : déduplication via Map
    const apprenantsMap = new Map<number, boolean>();

    // Compter les apprenants depuis les données déjà chargées (relation employes)
    formations.forEach((f: any) => {
      const employes = f.employes || [];
      employes.forEach((emp: any) => {
        if (emp.id) {
          apprenantsMap.set(emp.id, true); // Map déduplique automatiquement
        }
      });
    });

    this.apprenantCount = apprenantsMap.size;
    console.log(`👥 [InstructorSidebar] Apprenants uniques: ${this.apprenantCount}`);
  }

  private loadSessionsAVenir(): void {
    const user = this.authService.getUser();
    const formateurId = user?.id;
    const params = formateurId ? { formateur_id: formateurId, statut: 'planifiee' } : { statut: 'planifiee' };

    this.sessionService.getAllSessions(params).subscribe({
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

  isRhInInstructorMode(): boolean {
    const user = this.authService.getUser();
    if (!user) return false;
    const roleType = user.role_type ?? (user as any)['role_type'] ?? '';
    return [4, 5, 9, 14].includes(user.role_id) || roleType === 'rh';
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
