import { NavigationEnd, Router, Event as RouterEvent, RouterModule } from '@angular/router';
import { routes } from '../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FeatherIconModule } from '../../shared/module/feather.module';
import { SharedModule } from 'primeng/api';
import { InstructorSidebarComponent } from './common/instructor-sidebar/instructor-sidebar.component';
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.models';
import { SessionFormationService } from '../../shared/service/session/session-formation.service';
import { FormationService } from '../../shared/service/formation/formation.service';

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

  headerStats = { formations: 0, apprenants: 0, enDifficulte: 0, sessionsAVenir: 0 };
  nextSession: { titre: string; date: string; delai: string } | null = null;

  constructor(
    private router: Router,
    private sessionService: SessionFormationService,
    private formationService: FormationService,
  ) {
    this.router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationEnd) {
        this.last = data.url.split('/').pop() || '';
      }
    });
  }

  ngOnInit(): void {
    this.loadInstructorProfile();
    this.loadFormationStats();
    this.loadSessionStats();
  }

  loadInstructorProfile(): void {
    try {
      const raw = localStorage.getItem('pyramide_user');
      if (raw) {
        const user: any = JSON.parse(raw);
        if (!user.role && Number(user.role_id) === 3) user.role = 'Formateur';
        this.instructorProfile = user as User;
      }
    } catch (e) {
      console.error('Erreur profil instructor:', e);
    }
  }

  private loadFormationStats(): void {
    this.formationService.getFormationsformateur().subscribe({
      next: (res) => {
        const formations = res.formations || [];
        this.headerStats.formations = formations.length;

        // ✅ Compter les apprenants UNIQUES (déduplication par ID)
        const apprenantsUniquesMap = new Map<number, boolean>();
        formations.forEach((f: any) => {
          const employes = f.employes || [];
          employes.forEach((emp: any) => {
            if (emp.id) {
              apprenantsUniquesMap.set(emp.id, true);
            }
          });
        });
        this.headerStats.apprenants = apprenantsUniquesMap.size;

        this.headerStats.enDifficulte = formations.reduce((s: number, f: any) => s + (f.nb_en_difficulte ?? 0), 0);

        console.log(`👥 [InstructorComponent] Apprenants uniques: ${this.headerStats.apprenants}`);
      },
      error: () => {}
    });
  }

  private loadSessionStats(): void {
    const user = this.instructorProfile;
    const params: any = { statut: 'planifiee' };
    if (user?.id) params['formateur_id'] = user.id;

    this.sessionService.getAllSessions(params).subscribe({
      next: (res) => {
        if (res?.status && res.sessions) {
          const now = new Date();
          const upcoming = res.sessions
            .filter(s => s.statut === 'planifiee' && new Date(s.date_debut) >= now)
            .sort((a, b) => new Date(a.date_debut).getTime() - new Date(b.date_debut).getTime());

          this.headerStats.sessionsAVenir = upcoming.length;

          if (upcoming.length > 0) {
            const s = upcoming[0];
            const d = new Date(s.date_debut);
            const diffDays = Math.ceil((d.getTime() - now.getTime()) / 86400000);
            this.nextSession = {
              titre: s.titre,
              date: d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }),
              delai: diffDays === 0 ? "Aujourd'hui" : diffDays === 1 ? 'Demain' : `Dans ${diffDays} jours`
            };
          }
        }
      },
      error: () => {}
    });
  }

  getFullName(): string {
    if (!this.instructorProfile) return 'Utilisateur';
    return `${this.instructorProfile.prenom || ''} ${this.instructorProfile.nom || ''}`.trim();
  }

  getInitials(): string {
    if (!this.instructorProfile) return 'U';
    return ((this.instructorProfile.prenom?.[0] ?? '') + (this.instructorProfile.nom?.[0] ?? '')).toUpperCase() || 'U';
  }

  getFonction(): string {
    return this.instructorProfile?.fonction || 'Formateur';
  }

  getEntrepriseName(): string {
    return this.instructorProfile?.entreprise?.nom ||
           this.instructorProfile?.client?.nom || '';
  }

  getSpecialites(): { icon: string; label: string }[] {
    const tags: { icon: string; label: string }[] = [];
    const fn = this.instructorProfile?.fonction?.toLowerCase() || '';

    if (fn.includes('tech') || fn.includes('info') || fn.includes('dev')) {
      tags.push({ icon: 'isax-cpu', label: 'Technologie' });
    }
    if (fn.includes('cyber') || fn.includes('sécur')) {
      tags.push({ icon: 'isax-shield-tick', label: 'Cybersécurité' });
    }
    if (this.instructorProfile?.entreprise?.nom || this.instructorProfile?.client?.nom) {
      tags.push({ icon: 'isax-note-21', label: 'Certifiant' });
    }

    return tags.length ? tags : [
      { icon: 'isax-book-1',     label: 'Formation' },
      { icon: 'isax-note-21',    label: 'Certifiant' }
    ];
  }

  public getRoleName(user: User): string {
    if (!user.role) return 'Non défini';
    if (typeof user.role === 'object' && 'name' in user.role) return user.role.name;
    if (typeof user.role === 'string') return user.role;
    return 'Non défini';
  }

  getUserAvatar(): string {
    return (this.instructorProfile as any)?.avatar || 'assets/img/user/user-01.jpg';
  }
}
