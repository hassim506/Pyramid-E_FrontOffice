import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgApexchartsModule } from 'ng-apexcharts';
import { routes } from '../../../shared/service/routes/routes';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { environment } from '../../../../environments/environment';

interface KpiCard {
  icon:    string;
  color:   string;
  label:   string;
  value:   string | number;
  sub?:    string;
  trend?:  'up' | 'down' | 'neutral';
}

interface FormationRow {
  id:          number;
  titre:       string;
  inscrits:    number;
  completion:  number;
  statut:      string;
}

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.scss'],
  imports: [CommonModule, RouterLink, NgApexchartsModule],
})
export class InstructorDashboardComponent implements OnInit {
  public routes = routes;

  // ── KPIs ──────────────────────────────────────────────────────
  kpis: KpiCard[] = [];

  // ── Métriques brutes ──────────────────────────────────────────
  sessionsAnimees   = 0;
  apprenantsForms   = 0;
  heuresRealisees   = 0;
  tauxOccupation    = 0;
  tauxCompletion    = 0;
  tauxReussite      = 0;
  tauxAbandons      = 0;
  scoreMoyen        = 0;
  certificatsDeliv  = 0;
  formationsCount   = 0;

  // ── Tableau formations ─────────────────────────────────────────
  formations: FormationRow[] = [];
  loading = true;

  // ── Chart complétion par formation ────────────────────────────
  completionChart: any = null;

  // ── Chart quiz réussite vs échec ──────────────────────────────
  quizChart: any = null;

  // ── Profil ─────────────────────────────────────────────────────
  displayName = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  private get headers(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  ngOnInit(): void {
    const user = this.authService.getUser();
    const uid  = user?.id;
    this.displayName = user?.name || `${user?.prenom ?? ''} ${user?.nom ?? ''}`.trim() || 'Formateur';

    forkJoin({
      formations: this.http.get<any>(`${environment.apiUrl}/formateur/formations`, { headers: this.headers })
                    .pipe(catchError(() => of({ formations: [] }))),
      sessions:   this.http.get<any>(`${environment.apiUrl}/sessions-formation?formateur_id=${uid}`, { headers: this.headers })
                    .pipe(catchError(() => of({ sessions: [] }))),
      quiz:       this.http.get<any>(`${environment.apiUrl}/quiz-results`, { headers: this.headers })
                    .pipe(catchError(() => of([]))),
      certs:      this.http.get<any>(`${environment.apiUrl}/certificats`, { headers: this.headers })
                    .pipe(catchError(() => of([]))),
    }).subscribe({
      next: ({ formations, sessions, quiz, certs }) => {
        const fl = formations.formations || formations.data || (Array.isArray(formations) ? formations : []);
        const sl = sessions.sessions   || sessions.data    || (Array.isArray(sessions)   ? sessions   : []);
        const ql = Array.isArray(quiz) ? quiz : quiz.data || quiz.results || [];
        const cl = Array.isArray(certs) ? certs : certs.certificats || certs.data || [];

        // ── Sessions ────────────────────────────────────────────
        const sessionsFormateur = sl.filter((s: any) =>
          s.formateur_id === uid || s.formateur?.id === uid
        );
        this.sessionsAnimees  = sessionsFormateur.length;
        const sessTerminees   = sessionsFormateur.filter((s: any) => s.statut === 'terminee');
        this.tauxOccupation   = this.sessionsAnimees > 0
          ? Math.round((sessTerminees.length / this.sessionsAnimees) * 100) : 0;

        this.heuresRealisees  = sessTerminees.reduce((acc: number, s: any) => {
          if (s.duree_en_heures) return acc + Number(s.duree_en_heures);
          if (s.date_debut && s.date_fin) {
            const diff = new Date(s.date_fin).getTime() - new Date(s.date_debut).getTime();
            return acc + Math.round(diff / 3600000);
          }
          return acc;
        }, 0);

        // ── Formations ──────────────────────────────────────────
        this.formationsCount = fl.length;
        this.apprenantsForms = fl.reduce((acc: number, f: any) => acc + (f.nb_participants ?? 0), 0);
        const completions    = fl.map((f: any) => Number(f.taux_completion ?? 0));
        this.tauxCompletion  = completions.length
          ? Math.round(completions.reduce((a: number, b: number) => a + b, 0) / completions.length) : 0;

        this.formations = fl.slice(0, 6).map((f: any) => ({
          id:         f.id,
          titre:      f.titre || f.title || '—',
          inscrits:   f.nb_participants ?? 0,
          completion: Number(f.taux_completion ?? 0),
          statut:     f.statut || 'active',
        }));

        // ── Quiz ────────────────────────────────────────────────
        if (ql.length) {
          const scores  = ql.map((r: any) => Number(r.score ?? r.pourcentage ?? 0));
          const seuil   = ql[0]?.quiz?.seuil_reussite ?? 50;
          this.scoreMoyen  = Math.round(scores.reduce((a: number, b: number) => a + b, 0) / scores.length);
          const reussites  = ql.filter((r: any) => Number(r.score ?? r.pourcentage ?? 0) >= seuil).length;
          this.tauxReussite = Math.round((reussites / ql.length) * 100);
          this.tauxAbandons = 100 - this.tauxReussite;
        }

        // ── Certifications ──────────────────────────────────────
        this.certificatsDeliv = cl.length;

        // ── KPIs cards ──────────────────────────────────────────
        this.buildKpis();

        // ── Charts ──────────────────────────────────────────────
        this.buildCompletionChart(fl);
        this.buildQuizChart();

        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  private buildKpis(): void {
    this.kpis = [
      { icon: 'isax-calendar-tick', color: 'blue',   label: 'Sessions animées',       value: this.sessionsAnimees,  sub: 'total formateur' },
      { icon: 'isax-profile-2user', color: 'teal',   label: 'Apprenants formés',       value: this.apprenantsForms,  sub: 'toutes formations' },
      { icon: 'isax-clock',         color: 'purple', label: 'Heures réalisées',         value: `${this.heuresRealisees}h`, sub: 'sessions terminées' },
      { icon: 'isax-chart-2',       color: 'orange', label: 'Taux d\'occupation',       value: `${this.tauxOccupation}%`,  sub: 'sessions terminées/total' },
      { icon: 'isax-book-1',        color: 'green',  label: 'Taux de complétion',       value: `${this.tauxCompletion}%`,  sub: 'moy. formations', trend: this.tauxCompletion >= 70 ? 'up' : 'down' },
      { icon: 'isax-award',         color: 'gold',   label: 'Taux de réussite quiz',    value: `${this.tauxReussite}%`,    sub: 'participants', trend: this.tauxReussite >= 60 ? 'up' : 'down' },
      { icon: 'isax-medal',         color: 'teal',   label: 'Certifications délivrées', value: this.certificatsDeliv, sub: 'ce cycle' },
      { icon: 'isax-danger',        color: 'red',    label: 'Taux d\'abandon',          value: `${this.tauxAbandons}%`,    sub: 'quiz non réussis', trend: this.tauxAbandons > 30 ? 'down' : 'up' },
    ];
  }

  private buildCompletionChart(fl: any[]): void {
    const top5 = fl.slice(0, 5);
    if (!top5.length) return;
    this.completionChart = {
      series: [{ name: 'Complétion %', data: top5.map((f: any) => Number(f.taux_completion ?? 0)) }],
      chart:  { type: 'bar', height: 220, toolbar: { show: false } },
      plotOptions: { bar: { borderRadius: 5, horizontal: true } },
      dataLabels: { enabled: false },
      xaxis: { categories: top5.map((f: any) => this.shortTitle(f.titre || '—')), max: 100,
               labels: { style: { fontSize: '11px', colors: '#64748B' } } },
      yaxis: { labels: { style: { fontSize: '11px', colors: '#64748B' } } },
      colors: ['#185FA5'],
      grid:   { borderColor: '#E2E8F0', strokeDashArray: 4 },
      tooltip: { y: { formatter: (v: number) => `${v}%` } },
    };
  }

  private buildQuizChart(): void {
    if (!this.tauxReussite && !this.tauxAbandons) return;
    this.quizChart = {
      series: [this.tauxReussite, this.tauxAbandons],
      chart:  { type: 'donut', height: 220 },
      labels: ['Réussite', 'Abandon'],
      colors: ['#185FA5', '#E24B4A'],
      legend: { position: 'bottom', fontSize: '12px' },
      dataLabels: { enabled: true, formatter: (v: number) => `${Math.round(v)}%` },
      plotOptions: { pie: { donut: { size: '60%' } } },
      tooltip: { y: { formatter: (v: number) => `${v}%` } },
    };
  }

  private shortTitle(s: string): string {
    return s.length > 22 ? s.substring(0, 20) + '…' : s;
  }

  getStatutClass(s: string): string {
    return ({ active: 'badge--green', terminee: 'badge--blue', brouillon: 'badge--gray', archivee: 'badge--red' } as any)[s] ?? 'badge--gray';
  }

  getStatutLabel(s: string): string {
    return ({ active: 'Active', terminee: 'Terminée', brouillon: 'Brouillon', archivee: 'Archivée' } as any)[s] ?? s;
  }
}
