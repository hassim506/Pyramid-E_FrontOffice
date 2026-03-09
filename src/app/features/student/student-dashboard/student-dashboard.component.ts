import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { FormationsService }       from '../../../shared/service/Formationsss/formations.service';
import { DemandeFormationService } from '../../../shared/service/demande/demande-formation.service';

declare var ApexCharts: any;

// ══════════════════════════════════════════════════
// INTERFACES
// ══════════════════════════════════════════════════

interface Echeance {
  id:           number;
  titre:        string;
  type:         'formation' | 'parcours' | 'session' | 'obligatoire';
  deadline:     string;
  joursRestants:number;
  progression:  number;
  urgent:       boolean;
}

interface SessionPlanifiee {
  id:         number;
  titre:      string;
  date_debut: string;
  date_fin:   string;
  lieu:       string;
  type:       string;
}

interface DashStats {
  kpi: {
    formations: {
      total:           number;
      en_cours:        number;
      terminees:       number;
      progression_moy: number;
      taux_completion: number;   // formations terminées / total assignées
      taux_achevement: number;   // alias taux_completion pour rétro-compat
      obligatoires_total:     number;
      obligatoires_terminees: number;
      taux_obligatoires:      number;
    };
    certifications: { total: number; cette_annee: number };
    heures: {
      total_cumulees: number;
      objectif_annuel: number;
      taux_objectif:   number;
    };
    parcours: { total: number; progression: number; termines: number };
    demandes: { en_attente: number; validees: number; refusees: number; total: number };
    pdi: {
      disponible:        boolean;
      taux_completion:   number;
      objectifs_total:   number;
      objectifs_atteints:number;
      prochain_entretien:string | null;
    };
    evaluations: {
      disponible:   boolean;
      score_moyen:  number;
      nb_passees:   number;
    };
  };
  courbes: {
    labels:                  string[];
    formations_terminees:    number[];
    certifications_obtenues: number[];
    demandes_soumises:       number[];
    heures_cumulees:         number[];
    progression_parcours:    number[];
    taux_completion:         number[];
  };
  echeances:          Echeance[];
  sessions_planifiees: SessionPlanifiee[];
  kpi_futurs: {
    competences_validees:    { disponible: boolean; message: string };
    badges_obtenus:          { disponible: boolean; message: string };
    classement:              { disponible: boolean; message: string };
    ecart_competences:       { disponible: boolean; message: string };
    formations_recommandees: { disponible: boolean; message: string };
  };
}

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent implements OnInit, OnDestroy {

  // ── ÉTAT ─────────────────────────────────────────
  loading = true;
  stats: DashStats | null = null;

  // ── FILTRES ───────────────────────────────────────
  periodeMode: 'mois' | 'annee' = 'mois';
  selectedAnnee = new Date().getFullYear();
  selectedMois  = new Date().getMonth() + 1;
  annees: number[] = [];
  moisLabels = ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Aoû','Sep','Oct','Nov','Déc'];

  // ── ONGLET ACTIF ──────────────────────────────────
  activeTab: 'aujourdhui' | 'progression' | 'objectifs' = 'aujourdhui';

  // ── GRAPHIQUES ────────────────────────────────────
  private charts: { [key: string]: any } = {};

  constructor(
    private formationsService:       FormationsService,
    private demandeFormationService: DemandeFormationService,
  ) {}

  ngOnInit(): void {
    const now = new Date().getFullYear();
    for (let i = 0; i < 5; i++) this.annees.push(now - i);
    this.loadStats();
  }

  ngOnDestroy(): void {
    this.destroyAllCharts();
  }

  // ════════════════════════════════════════════════
  // CHARGEMENT
  // ════════════════════════════════════════════════
  loadStats(): void {
    this.loading = true;
    this.destroyAllCharts(); // reset complet avant rechargement

    this.formationsService.getDashboardStats({
      periode: this.periodeMode,
      annee:   this.selectedAnnee,
      mois:    this.selectedMois,
    }).subscribe({
      next: (res: any) => {
        this.stats   = res.data;
        this.loading = false;
        this.scheduleCharts();
      },
      error: () => this.loadStatsFallback(),
    });
  }

  private loadStatsFallback(): void {
    Promise.all([
      this.formationsService.getMesFormations().toPromise(),
      this.demandeFormationService.getMesDemandes().toPromise(),
      this.formationsService.getMyCertificates().toPromise(),
    ]).then(([formRes, demRes, certRes]: any[]) => {
      const formations = formRes?.formations  ?? [];
      const demandes   = demRes?.demandes     ?? [];
      const certs      = certRes?.certificats ?? [];

      const terminees  = formations.filter((f: any) => f.statut_formation === 'termine');
      const enCours    = formations.filter((f: any) => f.statut_formation === 'en_cours');
      const progMoy = formations.length
        ? formations.reduce((s: number, f: any) => {
            const p = parseFloat(f.progression);
            return s + (isNaN(p) ? 0 : p);
          }, 0) / formations.length
        : 0;
      const heures     = terminees.reduce((s: number, f: any) => s + (f.duree_totale ?? 0), 0);
      const tauxCompletion = formations.length
        ? Math.round((terminees.length / formations.length) * 1000) / 10 : 0;

      const courbes = this.buildCourbesAngular(formations, demandes, certs);

      // Calcul échéances depuis les formations en cours
      const echeances: Echeance[] = formations
        .filter((f: any) => f.statut_formation === 'en_cours' && f.date_fin_prevue)
        .map((f: any) => {
          const joursRestants = Math.ceil(
            (new Date(f.date_fin_prevue).getTime() - Date.now()) / 86400000
          );
          return {
            id:            f.id,
            titre:         f.titre,
            type:          f.est_obligatoire ? 'obligatoire' : 'formation',
            deadline:      f.date_fin_prevue,
            joursRestants,
            progression:   f.progression ?? 0,
            urgent:        joursRestants <= 7,
          } as Echeance;
        })
        .sort((a: Echeance, b: Echeance) => a.joursRestants - b.joursRestants)
        .slice(0, 5);

      this.stats = {
        kpi: {
          formations: {
            total:                  formations.length,
            en_cours:               enCours.length,
            terminees:              terminees.length,
            progression_moy:        Math.round(progMoy * 10) / 10,
            taux_completion:        tauxCompletion,
            taux_achevement:        tauxCompletion,
            obligatoires_total:     formations.filter((f: any) => f.est_obligatoire).length,
            obligatoires_terminees: formations.filter((f: any) => f.est_obligatoire && f.statut_formation === 'termine').length,
            taux_obligatoires:      0,
          },
          certifications: { total: certs.length, cette_annee: certs.filter((c: any) =>
            new Date(c.created_at).getFullYear() === new Date().getFullYear()).length },
          heures: {
            total_cumulees:  Math.round(heures * 10) / 10,
            objectif_annuel: 40,
            taux_objectif:   Math.min(Math.round((heures / 40) * 100), 100),
          },
          parcours:  { total: 0, progression: 0, termines: 0 },
          demandes: {
            en_attente: demandes.filter((d: any) => d.statut === 'en_attente').length,
            validees:   demandes.filter((d: any) => d.statut === 'validee').length,
            refusees:   demandes.filter((d: any) => d.statut === 'refusee').length,
            total:      demandes.length,
          },
          pdi: {
            disponible: false, taux_completion: 0,
            objectifs_total: 0, objectifs_atteints: 0, prochain_entretien: null,
          },
          evaluations: { disponible: false, score_moyen: 0, nb_passees: 0 },
        },
        courbes,
        echeances,
        sessions_planifiees: [],
        kpi_futurs: {
          competences_validees:    { disponible: false, message: 'Fonctionnalité à venir' },
          badges_obtenus:          { disponible: false, message: 'Fonctionnalité à venir' },
          classement:              { disponible: false, message: 'Fonctionnalité à venir' },
          ecart_competences:       { disponible: false, message: 'Fonctionnalité à venir' },
          formations_recommandees: { disponible: false, message: 'Fonctionnalité à venir' },
        },
      };

      this.loading = false;
      this.scheduleCharts();
    }).catch(() => { this.loading = false; });
  }

  // ════════════════════════════════════════════════
  // COURBES CÔTÉ ANGULAR
  // ════════════════════════════════════════════════
  private buildCourbesAngular(formations: any[], demandes: any[], certs: any[]): DashStats['courbes'] {
    const labels: string[]            = [];
    const fTerminees: number[]        = [];
    const certObt: number[]           = [];
    const demSoum: number[]           = [];
    const heures: number[]            = [];
    const progParcours: number[]      = [];
    const tauxCompletion: number[]    = [];

    const base = this.periodeMode === 'annee' ? 5 : 12;

    for (let i = base - 1; i >= 0; i--) {
      let debut: Date, fin: Date, label: string;

      if (this.periodeMode === 'annee') {
        const y = new Date().getFullYear() - i;
        debut = new Date(y, 0, 1);
        fin   = new Date(y, 11, 31, 23, 59, 59);
        label = String(y);
      } else {
        const d = new Date(this.selectedAnnee, this.selectedMois - 1, 1);
        d.setMonth(d.getMonth() - i);
        debut = new Date(d.getFullYear(), d.getMonth(), 1);
        fin   = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59);
        label = `${this.moisLabels[d.getMonth()]} ${String(d.getFullYear()).slice(2)}`;
      }

      labels.push(label);

      const termCePeriode = formations.filter(f =>
        f.statut_formation === 'termine' &&
        f.updated_at && new Date(f.updated_at) >= debut && new Date(f.updated_at) <= fin
      );

      fTerminees.push(termCePeriode.length);

      certObt.push(certs.filter(c =>
        c.created_at && new Date(c.created_at) >= debut && new Date(c.created_at) <= fin
      ).length);

      demSoum.push(demandes.filter(d =>
        d.created_at && new Date(d.created_at) >= debut && new Date(d.created_at) <= fin
      ).length);

      heures.push(termCePeriode.reduce((s: number, f: any) => s + (f.duree_totale ?? 0), 0));
      progParcours.push(0);

      // Taux de complétion cumulatif jusqu'à cette période
      const totalJusqueLa = formations.filter(f =>
        f.created_at && new Date(f.created_at) <= fin
      ).length;
      const termJusqueLa = formations.filter(f =>
        f.statut_formation === 'termine' && f.updated_at && new Date(f.updated_at) <= fin
      ).length;
      tauxCompletion.push(totalJusqueLa > 0
        ? Math.round((termJusqueLa / totalJusqueLa) * 100) : 0);
    }

    return {
      labels, formations_terminees: fTerminees,
      certifications_obtenues: certObt, demandes_soumises: demSoum,
      heures_cumulees: heures, progression_parcours: progParcours,
      taux_completion: tauxCompletion,
    };
  }

  // ════════════════════════════════════════════════
  // ONGLETS
  // ════════════════════════════════════════════════
  setTab(tab: 'aujourdhui' | 'progression' | 'objectifs'): void {
    this.activeTab = tab;
    // Laisser Angular terminer le rendu *ngIf avant d'injecter ApexCharts
    this.scheduleCharts();
  }

  onPeriodeChange(): void { this.loadStats(); }
  onAnneeChange(): void   { this.loadStats(); }
  onMoisChange(): void    { this.loadStats(); }

  /**
   * Retry à 200 / 600 / 1500ms — couvre les cas où Angular CD
   * n'a pas encore rendu les éléments *ngIf au premier tick.
   */
  private scheduleCharts(): void {
    [200, 600, 1500].forEach(delay => {
      setTimeout(() => {
        if (!this.stats) return;
        const firstId = this.getFirstChartId();
        if (firstId && document.getElementById(firstId)) {
          this.initChartsPourOnglet();
        }
      }, delay);
    });
  }

  private getFirstChartId(): string | null {
    if (this.activeTab === 'progression') return 'chart-completion';
    if (this.activeTab === 'objectifs')   return 'chart-demandes';
    if (this.activeTab === 'aujourdhui')  return 'chart-radial-completion';
    return null;
  }

  // ════════════════════════════════════════════════
  // APEX CHARTS
  // ════════════════════════════════════════════════
  private destroyAllCharts(): void {
    Object.values(this.charts).forEach(c => { try { c?.destroy(); } catch {} });
    this.charts = {};
  }

  private initChartsPourOnglet(): void {
    if (!this.stats) return;

    // Ne pas re-rendre si les charts de cet onglet existent déjà
    const firstId = this.getFirstChartId();
    if (firstId && this.charts[firstId]) return;

    const c = this.stats.courbes;

    if (this.activeTab === 'progression') {
      this.renderChart('chart-completion', this.buildAreaConfig(c.labels, [
        { name: 'Taux de complétion (%)', data: c.taux_completion, color: '#069b8f' },
      ], 'Taux de complétion'));

      this.renderChart('chart-heures', this.buildBarConfig(c.labels, [
        { name: 'Heures de formation', data: c.heures_cumulees, color: '#f59e0b' },
      ], 'Heures cumulées'));

      this.renderChart('chart-formations-terminees', this.buildLineConfig(c.labels, [
        { name: 'Formations terminées', data: c.formations_terminees, color: '#10b981' },
      ], 'Formations terminées'));

      this.renderChart('chart-certifications', this.buildAreaConfig(c.labels, [
        { name: 'Certifications', data: c.certifications_obtenues, color: '#7c3aed' },
      ], 'Certifications obtenues'));
    }

    if (this.activeTab === 'objectifs') {
      this.renderChart('chart-demandes', this.buildLineConfig(c.labels, [
        { name: 'Demandes soumises', data: c.demandes_soumises, color: '#3b82f6' },
      ], 'Demandes soumises'));

      if (this.stats.kpi.formations.total > 0) {
        this.renderDonut('chart-donut-formations', [
          this.stats.kpi.formations.en_cours,
          this.stats.kpi.formations.terminees,
          Math.max(0, this.stats.kpi.formations.total
            - this.stats.kpi.formations.en_cours
            - this.stats.kpi.formations.terminees),
        ], ['En cours', 'Terminées', 'Non démarrées'], ['#069b8f', '#10b981', '#e5e7eb']);
      }
    }

    // Radial taux complétion toujours visible sur Aujourd'hui
    if (this.activeTab === 'aujourdhui') {
      this.renderRadial('chart-radial-completion',
        this.stats.kpi.formations.taux_completion, '#069b8f', 'Complétion');
      this.renderRadial('chart-radial-heures',
        this.stats.kpi.heures.taux_objectif, '#f59e0b', 'Objectif h.');
      if (this.stats.kpi.formations.obligatoires_total > 0) {
        this.renderRadial('chart-radial-oblig',
          this.stats.kpi.formations.taux_obligatoires, '#ef4444', 'Obligatoires');
      }
    }
  }

  private renderChart(id: string, config: any): void {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      const chart = new ApexCharts(el, config);
      chart.render();
      this.charts[id] = chart;
    } catch {}
  }

  private buildLineConfig(labels: string[], series: { name: string; data: number[]; color: string }[], title: string): any {
    return {
      series:  series.map(s => ({ name: s.name, data: s.data })),
      chart:   { type: 'line', height: 230, toolbar: { show: false }, animations: { enabled: true, easing: 'easeinout', speed: 600 } },
      colors:  series.map(s => s.color),
      stroke:  { curve: 'smooth', width: 3 },
      markers: { size: 4, hover: { size: 6 } },
      xaxis:   { categories: labels, labels: { style: { fontSize: '11px', colors: '#9ca3af' } }, axisBorder: { show: false }, axisTicks: { show: false } },
      yaxis:   { labels: { style: { fontSize: '11px', colors: '#9ca3af' } }, min: 0 },
      grid:    { borderColor: '#f3f4f6', strokeDashArray: 4 },
      tooltip: { theme: 'light' },
      legend:  { show: false },
      title:   { text: title, align: 'left', style: { fontSize: '13px', fontWeight: 700, color: '#374151' } },
    };
  }

  private buildAreaConfig(labels: string[], series: { name: string; data: number[]; color: string }[], title: string): any {
    const cfg = this.buildLineConfig(labels, series, title);
    cfg.chart.type = 'area';
    cfg.fill = { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.03 } };
    return cfg;
  }

  private buildBarConfig(labels: string[], series: { name: string; data: number[]; color: string }[], title: string): any {
    return {
      series:      series.map(s => ({ name: s.name, data: s.data })),
      chart:       { type: 'bar', height: 230, toolbar: { show: false }, animations: { enabled: true, speed: 600 } },
      colors:      series.map(s => s.color),
      plotOptions: { bar: { borderRadius: 6, columnWidth: '52%' } },
      dataLabels:  { enabled: false },
      xaxis:       { categories: labels, labels: { style: { fontSize: '11px', colors: '#9ca3af' } }, axisBorder: { show: false }, axisTicks: { show: false } },
      yaxis:       { labels: { style: { fontSize: '11px', colors: '#9ca3af' } }, min: 0 },
      grid:        { borderColor: '#f3f4f6', strokeDashArray: 4 },
      tooltip:     { theme: 'light' },
      legend:      { show: false },
      title:       { text: title, align: 'left', style: { fontSize: '13px', fontWeight: 700, color: '#374151' } },
    };
  }

  private renderDonut(id: string, series: number[], labels: string[], colors: string[]): void {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      const chart = new ApexCharts(el, {
        series, chart: { type: 'donut', height: 200, toolbar: { show: false } },
        colors, labels,
        legend:      { position: 'bottom', fontSize: '11px' },
        dataLabels:  { enabled: false },
        plotOptions: { pie: { donut: { size: '65%' } } },
        tooltip:     { theme: 'light' },
      });
      chart.render();
      this.charts[id] = chart;
    } catch {}
  }

  private renderRadial(id: string, value: number, color: string, label: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      const chart = new ApexCharts(el, {
        series: [Math.round(value)],
        chart:  { type: 'radialBar', height: 140, toolbar: { show: false } },
        colors: [color],
        plotOptions: {
          radialBar: {
            hollow:    { size: '55%' },
            dataLabels: {
              name:  { show: true, offsetY: -4, fontSize: '10px', color: '#9ca3af' },
              value: { show: true, offsetY: 4,  fontSize: '16px', fontWeight: 700, color: '#111827',
                formatter: (v: number) => v + '%' },
            },
          },
        },
        labels: [label],
      });
      chart.render();
      this.charts[id] = chart;
    } catch {}
  }

  // ════════════════════════════════════════════════
  // HELPERS TEMPLATE
  // ════════════════════════════════════════════════
  getProgressionColor(v: number | null | undefined): string {
    const val = v ?? 0;
    if (isNaN(val)) return '#9ca3af';
    if (val >= 75) return '#10b981';
    if (val >= 40) return '#f59e0b';
    return '#ef4444';
  }

  getUrgenceClass(e: Echeance): string {
    if (e.joursRestants <= 3)  return 'urgence--critique';
    if (e.joursRestants <= 7)  return 'urgence--haute';
    if (e.joursRestants <= 14) return 'urgence--moyenne';
    return 'urgence--normale';
  }

  getUrgenceLabel(j: number): string {
    if (j <= 0)  return 'Expiré';
    if (j === 1) return 'Demain';
    if (j <= 7)  return `Dans ${j}j`;
    return `Dans ${j}j`;
  }

  get echeancesUrgentes(): Echeance[] {
    return (this.stats?.echeances ?? []).filter(e => e.urgent);
  }

  get echeancesNormales(): Echeance[] {
    return (this.stats?.echeances ?? []).filter(e => !e.urgent);
  }

  get hasUrgences(): boolean {
    return this.echeancesUrgentes.length > 0;
  }

  get tauxCompletionGlobal(): number {
    return this.stats?.kpi.formations.taux_completion ?? 0;
  }

  get heuresRestantes(): number {
    const obj = this.stats?.kpi.heures.objectif_annuel ?? 40;
    const cum = this.stats?.kpi.heures.total_cumulees  ?? 0;
    return Math.max(0, obj - cum);
  }

  get nomMoisSelectionne(): string {
    return this.moisLabels[this.selectedMois - 1] ?? '';
  }
}