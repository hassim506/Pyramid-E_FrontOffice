import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { NgApexchartsModule } from 'ng-apexcharts';
import { routes } from '../../../shared/service/routes/routes';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { environment } from '../../../../environments/environment';

interface KpiCard {
  icon:   string;
  color:  string;
  label:  string;
  value:  string | number;
  sub?:   string;
  trend?: 'up' | 'down' | 'neutral';
}

interface FormationRow {
  id:         number;
  titre:      string;
  inscrits:   number;
  completion: number;
  statut:     string;
}

export interface FormateurDashStats {
  nb_apprenants_inscrits:        number;
  nb_apprenants_formations:      number;
  nb_apprenants_sessions:        number;
  nb_sessions_animees:           number;
  nb_sessions_terminees:         number;
  nb_certifications:             number;
  taux_participation_live:       number;
  taux_completion_global:        number;
  taux_abandon:                  number;
  completion_par_formation:      { titre: string; taux: number; inscrits: number }[];
  score_moyen:                   number | null;
  taux_reussite:                 number;
  nb_evaluations:                number;
  progression_avant:             number;
  progression_apres:             number | null;
  note_moyenne_formateur:        number | null;
  nps_formation:                 number | null;
  nb_feedbacks_apprenants:       number;
  nb_feedbacks_formateur:        number;
  temps_moyen_correction_h:      number | null;
  delai_publication_resultats_h: number | null;
  croissance_mensuelle:          { mois: string; total: number }[];
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

  // ── Stats API ─────────────────────────────────────────────────
  dashStats: FormateurDashStats | null = null;

  // ── Métriques legacy (gardées pour les charts existants) ──────
  sessionsAnimees  = 0;
  apprenantsForms  = 0;
  heuresRealisees  = 0;
  tauxOccupation   = 0;
  tauxCompletion   = 0;
  tauxReussite     = 0;
  tauxAbandons     = 0;
  scoreMoyen       = 0;
  certificatsDeliv = 0;
  formationsCount  = 0;

  formations: FormationRow[] = [];
  loading     = true;
  statsLoading = true;

  // ── Charts ────────────────────────────────────────────────────
  completionChart: any = null;
  quizChart:       any = null;
  inscriptionsChart: any = null;

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
      dash:       this.http.get<any>(`${environment.apiUrl}/formateur/dashboard/stats`, { headers: this.headers })
                    .pipe(timeout(10000), catchError(() => of(null))),
      formations: this.http.get<any>(`${environment.apiUrl}/formateur/formations`, { headers: this.headers })
                    .pipe(timeout(10000), catchError(() => of({ formations: [] }))),
      sessions:   this.http.get<any>(`${environment.apiUrl}/sessions-formation?formateur_id=${uid}`, { headers: this.headers })
                    .pipe(timeout(10000), catchError(() => of({ sessions: [] }))),
      quiz:       this.http.get<any>(`${environment.apiUrl}/quiz-results`, { headers: this.headers })
                    .pipe(timeout(10000), catchError(() => of([]))),
      certs:      this.http.get<any>(`${environment.apiUrl}/certificats`, { headers: this.headers })
                    .pipe(timeout(10000), catchError(() => of([]))),
    }).subscribe({
      next: ({ dash, formations, sessions, quiz, certs }) => {
        // ── Stats API centralisées ────────────────────────────
        if (dash?.data) {
          this.dashStats = dash.data as FormateurDashStats;
          this.sessionsAnimees  = this.dashStats.nb_sessions_animees;
          this.apprenantsForms  = this.dashStats.nb_apprenants_inscrits;
          this.tauxCompletion   = this.dashStats.taux_completion_global;
          this.tauxReussite     = this.dashStats.taux_reussite;
          this.tauxAbandons     = this.dashStats.taux_abandon;
          this.scoreMoyen       = this.dashStats.score_moyen ?? 0;
          this.certificatsDeliv = this.dashStats.nb_certifications;
        }

        // ── Formations (pour le tableau) ───────────────────────
        const fl = formations?.formations || formations?.data || (Array.isArray(formations) ? formations : []);
        this.formationsCount = fl.length;

        if (!this.dashStats) {
          // Fallback calcul local si l'API centralisée échoue
          this.apprenantsForms = fl.reduce((acc: number, f: any) => acc + (f.nb_participants ?? 0), 0);
          const completions    = fl.map((f: any) => Number(f.taux_completion ?? 0));
          this.tauxCompletion  = completions.length
            ? Math.round(completions.reduce((a: number, b: number) => a + b, 0) / completions.length) : 0;
        }

        this.formations = fl.slice(0, 6).map((f: any) => ({
          id:         f.id,
          titre:      f.titre || f.title || '—',
          inscrits:   f.nb_participants ?? 0,
          completion: Number(f.taux_completion ?? 0),
          statut:     f.statut || 'active',
        }));

        // ── Sessions (heures réalisées) ────────────────────────
        const sl = sessions?.sessions || sessions?.data || (Array.isArray(sessions) ? sessions : []);
        const sessionsFormateur = sl.filter((s: any) => s.formateur_id === uid || s.formateur?.id === uid);
        const sessTerminees     = sessionsFormateur.filter((s: any) => s.statut === 'terminee');
        this.tauxOccupation     = sessionsFormateur.length > 0
          ? Math.round((sessTerminees.length / sessionsFormateur.length) * 100) : 0;
        this.heuresRealisees    = sessTerminees.reduce((acc: number, s: any) => {
          if (s.duree_en_heures) return acc + Number(s.duree_en_heures);
          if (s.date_debut && s.date_fin) {
            return acc + Math.round((new Date(s.date_fin).getTime() - new Date(s.date_debut).getTime()) / 3600000);
          }
          return acc;
        }, 0);

        // ── Quiz (fallback si API centralisée indisponible) ────
        const ql = Array.isArray(quiz) ? quiz : quiz?.data || quiz?.results || [];
        if (!this.dashStats && ql.length) {
          const scores = ql.map((r: any) => Number(r.score ?? r.pourcentage ?? 0));
          const seuil  = ql[0]?.quiz?.seuil_reussite ?? 50;
          this.scoreMoyen   = Math.round(scores.reduce((a: number, b: number) => a + b, 0) / scores.length);
          const reussites   = ql.filter((r: any) => Number(r.score ?? r.pourcentage ?? 0) >= seuil).length;
          this.tauxReussite = Math.round((reussites / ql.length) * 100);
          this.tauxAbandons = 100 - this.tauxReussite;
        }

        // ── Certifs fallback ───────────────────────────────────
        if (!this.dashStats) {
          const cl = Array.isArray(certs) ? certs : certs?.certificats || certs?.data || [];
          this.certificatsDeliv = cl.length;
        }

        this.buildKpis();
        this.buildCompletionChart();
        this.buildQuizChart();
        this.buildInscriptionsChart();

        this.loading      = false;
        this.statsLoading = false;
      },
      error: () => {
        this.loading      = false;
        this.statsLoading = false;
      },
    });
  }

  private buildKpis(): void {
    const d = this.dashStats;
    this.kpis = [
      { icon: 'isax-profile-2user', color: 'teal',   label: 'Employés inscrits',      value: d?.nb_apprenants_inscrits ?? this.apprenantsForms, sub: 'toutes formations & sessions' },
      { icon: 'isax-calendar-tick', color: 'blue',   label: 'Sessions animées',          value: d?.nb_sessions_animees ?? this.sessionsAnimees, sub: `${d?.nb_sessions_terminees ?? 0} terminées` },
      { icon: 'isax-clock',         color: 'purple', label: 'Heures réalisées',           value: `${this.heuresRealisees}h`, sub: 'sessions terminées' },
      { icon: 'isax-people',        color: 'orange', label: 'Participation live',         value: `${d?.taux_participation_live ?? this.tauxOccupation}%`, sub: 'sessions présentielles/distanciel', trend: (d?.taux_participation_live ?? 0) >= 70 ? 'up' : 'down' },
      { icon: 'isax-book-1',        color: 'green',  label: 'Taux de complétion',         value: `${this.tauxCompletion}%`, sub: 'moy. formations', trend: this.tauxCompletion >= 70 ? 'up' : 'down' },
      { icon: 'isax-danger',        color: 'red',    label: "Taux d'abandon",             value: `${this.tauxAbandons}%`, sub: 'formations abandonnées', trend: this.tauxAbandons > 20 ? 'down' : 'up' },
      { icon: 'isax-chart-square',  color: 'gold',   label: 'Score moyen évaluations',   value: d?.score_moyen != null ? `${d.score_moyen}%` : `${this.scoreMoyen}%`, sub: `${d?.nb_evaluations ?? 0} évaluations` },
      { icon: 'isax-award',         color: 'teal',   label: 'Taux de réussite',           value: `${this.tauxReussite}%`, sub: 'quiz & évaluations', trend: this.tauxReussite >= 60 ? 'up' : 'down' },
    ];
  }

  private buildCompletionChart(): void {
    const d = this.dashStats;
    const items = d?.completion_par_formation?.length
      ? d.completion_par_formation.slice(0, 5)
      : this.formations.slice(0, 5).map(f => ({ titre: f.titre, taux: f.completion, inscrits: f.inscrits }));

    if (!items.length) return;
    this.completionChart = {
      series: [{ name: 'Complétion %', data: items.map(f => f.taux) }],
      chart:  { type: 'bar', height: 220, toolbar: { show: false } },
      plotOptions: { bar: { borderRadius: 5, horizontal: true } },
      dataLabels: { enabled: false },
      xaxis: { categories: items.map(f => this.shortTitle(f.titre)), max: 100,
               labels: { style: { fontSize: '11px', colors: '#64748B' } } },
      yaxis: { labels: { style: { fontSize: '11px', colors: '#64748B' } } },
      colors: ['#185FA5'],
      grid:   { borderColor: '#E2E8F0', strokeDashArray: 4 },
      tooltip: { y: { formatter: (v: number) => `${v}%` } },
    };
  }

  private buildQuizChart(): void {
    const reussite = this.tauxReussite;
    const abandon  = Math.max(0, 100 - reussite);
    if (!reussite && !abandon) return;
    this.quizChart = {
      series: [reussite, abandon],
      chart:  { type: 'donut', height: 220 },
      labels: ['Réussite', 'Abandon'],
      colors: ['#185FA5', '#E24B4A'],
      legend: { position: 'bottom', fontSize: '12px' },
      dataLabels: { enabled: true, formatter: (v: number) => `${Math.round(v)}%` },
      plotOptions: { pie: { donut: { size: '60%' } } },
      tooltip: { y: { formatter: (v: number) => `${v}%` } },
    };
  }

  private buildInscriptionsChart(): void {
    const data = this.dashStats?.croissance_mensuelle;
    if (!data?.length) return;
    this.inscriptionsChart = {
      series: [{ name: 'Inscriptions', data: data.map(m => m.total) }],
      chart:  { height: 160, type: 'bar', toolbar: { show: false } },
      plotOptions: { bar: { borderRadius: 4, columnWidth: '55%' } },
      dataLabels: { enabled: false },
      xaxis: { categories: data.map(m => m.mois) },
      colors: ['#185FA5'],
      grid:   { borderColor: '#E2E8F0' },
      tooltip: { theme: 'light' },
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
