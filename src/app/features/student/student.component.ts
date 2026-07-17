import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { routes } from '../../shared/service/routes/routes';
import { StudentSidebarComponent } from './common/student-sidebar/student-sidebar.component';
import { AuthService } from '../../shared/service/authentification/auth.service';
import { FormationsService } from '../../shared/service/Formationsss/formations.service';

interface FormationEnCours {
  id: number;
  titre: string;
  progression: number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, RouterOutlet, RouterModule, StudentSidebarComponent]
})
export class StudentComponent implements OnInit {
  public routes = routes;
  public last = '';
  public isExplorerRoute = false;

  // ── Profil ────────────────────────────────────────
  userName      = '';
  userInitials  = '';
  userRole      = 'Employé';
  userFonction  = '';
  userEntreprise = '';

  // ── Formations en cours ───────────────────────────
  formationsEnCours: FormationEnCours[] = [];
  completionGlobale = 0;

  // ── Badges ────────────────────────────────────────
  nbCertificats   = 0;
  nbExpireBientot = 0;
  prochainSession: string | null = null;

  private readonly breadcrumbLabels: Record<string, string> = {
    'student-dashboard':       'Tableau de bord',
    'student-profile':         'Mon profil',
    'mes-formations':          'Mes formations',
    'mes-cours':               'Mes formations',
    'student-courses':         'Mes catalogues',
    'mes-catalogues':          'Catalogues',
    'catalogue-detail':        'Détail catalogue',
    'mes-parcours':            'Mes parcours',
    'mes-parcours-assignes':      'Mes parcours',
    'parcours-assignes':          'Mes parcours',
    'students-parcours':          'Mes parcours',
    'mes-demandes-parcours':      'Demandes parcours',
    'students-session':           'Mes sessions',
    'sessions-acceptees':         'Mes sessions',
    'students-catalogue':         'Demandes catalogues',
    'student-demande-catalogue':  'Demandes catalogues',
    'student-certificate':        'Mes certifications',
    'student-quiz':            'Mes quiz',
    'student-quiz-questions':  'Questions quiz',
    'student-settings':        'Paramètres',
    'student-change-password': 'Mot de passe',
    'student-notifications':   'Notifications',
    'student-billing-address': 'Facturation',
    'student-social-profile':  'Profil social',
    'student-linked-accounts': 'Comptes liés',
    'student-message':         'Messages',
    'student-tickets':         'Tickets',
    'student-reviews':         'Avis',
    'student-wishlist':        'Favoris',
    'student-referral':        'Parrainage',
    'student-order-history':   'Historique',
  };

  constructor(
    private router: Router,
    private auth: AuthService,
    private formationsService: FormationsService
  ) {
    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        const segments = data.url.split('/').filter(s => s.length > 0);
        this.isExplorerRoute = segments.includes('students-explorer') ||
                               segments.includes('catalogue-detail') ||
                               segments.includes('parcours-details');
        let label = '';
        for (let i = segments.length - 1; i >= 0; i--) {
          const seg = segments[i];
          if (/^\d+$/.test(seg) || seg.includes('?')) continue;
          if (this.breadcrumbLabels[seg]) { label = this.breadcrumbLabels[seg]; break; }
        }
        if (!label) {
          const nonNumeric = segments.filter(s => !/^\d+$/.test(s));
          label = (nonNumeric[nonNumeric.length - 1] ?? '').replace(/-/g, ' ');
        }
        this.last = label;
      }
    });
  }

  ngOnInit(): void {
    const segments = this.router.url.split('/').filter(s => s.length > 0);
    this.isExplorerRoute = segments.includes('students-explorer') ||
                           segments.includes('catalogue-detail') ||
                           segments.includes('parcours-details');
    this.loadProfile();
    this.loadData();
  }

  private loadProfile(): void {
    const user = this.auth.getUser();
    if (!user) return;
    const prenom = user.prenom || user.first_name || '';
    const nom    = user.nom    || user.last_name  || '';
    this.userName      = [prenom, nom].filter(Boolean).join(' ') || user.name || user.email || '';
    this.userInitials  = ([prenom[0], nom[0]].filter(Boolean).join('') || this.userName.slice(0, 2)).toUpperCase();
    this.userFonction  = user.fonction || '';
    this.userEntreprise = user.entreprise?.nom || user.company || '';
    const roleMap: Record<number, string> = { 1: 'Super Admin', 2: 'Admin RH', 3: 'Formateur', 4: 'Employé' };
    this.userRole = roleMap[user.role_id] || user.role || 'Employé';
  }

  private loadData(): void {
    forkJoin({
      formations:  this.formationsService.getMesFormations().pipe(catchError(() => of({ formations: [] } as any))),
      certificats: this.formationsService.getMyCertificates().pipe(catchError(() => of({ certificats: [] } as any))),
      sessions:    this.formationsService.getMesSessionsAcceptees().pipe(catchError(() => of({ sessions: [] } as any))),
    }).subscribe(({ formations, certificats, sessions }) => {
      // Formations en cours (progression entre 0 et 100 exclu)
      const raw: any[] = (formations as any)?.formations ?? (formations as any) ?? [];
      const enCours = raw.filter((f: any) => { const p = f.progression ?? 0; return p > 0 && p < 100; });
      this.formationsEnCours = enCours.slice(0, 4).map((f: any) => ({
        id: f.id, titre: f.titre, progression: f.progression ?? 0,
      }));
      if (this.formationsEnCours.length > 0) {
        this.completionGlobale = Math.round(
          this.formationsEnCours.reduce((s, f) => s + f.progression, 0) / this.formationsEnCours.length
        );
      }

      // Certificats — backend retourne { success, data: [...] }
      const certs: any[] = (certificats as any)?.data ?? (certificats as any)?.certificats ?? (certificats as any) ?? [];
      this.nbCertificats  = Array.isArray(certs) ? certs.length : 0;
      const now  = new Date();
      const in30 = new Date(now.getTime() + 30 * 24 * 3600 * 1000);
      this.nbExpireBientot = certs.filter((c: any) => {
        if (!c.date_expiration) return false;
        const exp = new Date(c.date_expiration);
        return exp > now && exp <= in30;
      }).length;

      // Prochaine session de l'étudiant
      const sess: any[] = (sessions as any)?.sessions ?? (sessions as any) ?? [];
      const now2 = new Date();
      const futures = sess
        .filter((s: any) => {
          // Priorité au flag backend, sinon fallback sur la date
          if (typeof s.est_a_venir !== 'undefined') return !!s.est_a_venir;
          const d = s.date_debut ?? s.date_session;
          return d && new Date(d) > now2;
        })
        .sort((a: any, b: any) =>
          new Date(a.date_debut ?? a.date_session ?? 0).getTime() -
          new Date(b.date_debut ?? b.date_session ?? 0).getTime()
        );
      if (futures.length > 0) {
        const dateStr = futures[0].date_debut ?? futures[0].date_session;
        this.prochainSession = dateStr
          ? new Date(dateStr).toLocaleDateString('fr-FR', { weekday: 'short', day: '2-digit', month: 'short' })
          : 'À venir';
      } else {
        this.prochainSession = null;
      }
    });
  }

  get prenom(): string { return this.userName.split(' ')[0] || this.userName; }

  getProgressionClass(p: number): string {
    if (p >= 80) return 'bar--green';
    if (p >= 40) return 'bar--orange';
    return 'bar--gray';
  }
}
