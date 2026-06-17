import { Component, OnInit, OnDestroy, AfterViewChecked, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { DemandeFormationService } from '../../../shared/service/demande/demande-formation.service';

declare var ApexCharts: any;

// ── INTERFACES ───────────────────────────────────────────────────────────────

interface Activite {
  id: number;
  titre: string;
  type: 'formation' | 'session' | 'parcours' | 'catalogue';
  statut: 'demarre' | 'termine' | 'repris';
  heure: string;
}

interface Echeance {
  id: number;
  titre: string;
  type: 'formation' | 'parcours' | 'session' | 'obligatoire' | 'catalogue';
  deadline: string;
  joursRestants: number;
  progression: number;
  urgent: boolean;
}

interface SessionPlanifiee {
  id: number;
  titre: string;
  date_debut: string;
  date_fin: string;
  lieu: string;
  type: string;
}

interface DashStats {
  kpi: {
    formations: {
      total: number; en_cours: number; terminees: number;
      progression_moy: number; taux_completion: number;
      taux_obligatoires: number; obligatoires_total: number; obligatoires_terminees: number;
    };
    sessions:   { total: number; terminees: number; taux: number; };
    parcours:   { total: number; termines: number; progression: number; taux: number; };
    catalogues: { total: number; termines: number; taux: number; };
    certifications: { total: number; cette_annee: number };
    heures: {
      heures_produites_periode: number;
      taux_heures_produites:    number;
      heures_dues_periode:      number;
      heures_terminees_periode: number;
      heures_restantes_periode: number;
      taux_heures_periode:      number;
      total_cumulees:           number;
      objectif_annuel:          number;
      taux_objectif:            number;
    };
    demandes: { en_attente: number; validees: number; refusees: number; total: number; };
    taux_completion_global?: { valeur: number; total_termine: number; total_assigne: number; };
    pdi: { disponible: boolean; taux_completion: number; objectifs_total: number; objectifs_atteints: number; prochain_entretien: string | null; };
    evaluations: { disponible: boolean; score_moyen: number; nb_passees: number; nb_reussies: number; taux_reussite: number; };
    competences_periode: { liste: string[]; total: number; };
    ecart_competences: {
      total_visees:    number;
      total_acquises:  number;
      total_ecart:     number;
      taux_couverture: number;
    };
  };
  courbes: {
    labels:                    string[];
    formationsTerminees:       number[];
    certificationsObtenues:    number[];
    heuresCumulees:            number[];
    heuresProduites:           number[];
    progressionParcours:       number[];
    progressionCatalogues:     number[];
    sessionsTerminees:         number[];
    tauxCompletion:            number[];
    tauxAbandonCourbe:         number[];
    scoresQuiz:                number[];
    tauxCouvertureCompetences: number[];
  };
  echeances:           Echeance[];
  sessions_planifiees: SessionPlanifiee[];
  activites_jour:      Activite[];
  kpi_futurs: {
    competences_validees:    { disponible: boolean; total: number; liste: string[]; };
    badges_obtenus:          { disponible: boolean; message: string };
    classement:              { disponible: boolean; message: string };
    ecart_competences:       { disponible: boolean; message: string };
    formations_recommandees: { disponible: boolean; message: string };
  };
}

interface Badge {
  id: number;
  nom: string;
  description: string;
  icone: string;
  couleur: string;
  obtenu: boolean;
  date?: string;
}

interface ClassementEntry {
  rang:   number;
  nom:    string;
  avatar: string;
  score:  number;
  isMe:   boolean;
}

// ── COMPONENT ────────────────────────────────────────────────────────────────

@Component({
  selector:    'app-student-dashboard',
  standalone:  true,
  imports:     [CommonModule, FormsModule, RouterModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls:   ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent implements OnInit, OnDestroy, AfterViewChecked {

  loading = true;
  stats: DashStats | null = null;

  periodeMode: 'mois' | 'trimestre' | 'annee' = 'mois';
  selectedAnnee     = new Date().getFullYear();
  selectedMois      = new Date().getMonth() + 1;
  selectedTrimestre = Math.ceil((new Date().getMonth() + 1) / 3);
  annees: number[]  = [];
  moisLabels = ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Aoû','Sep','Oct','Nov','Déc'];

  activeTab: 'aujourdhui' | 'progression' | 'objectifs' = 'aujourdhui';

  badges: Badge[] = [
    { id: 1, nom: 'Premier pas',  description: 'Première formation terminée', icone: 'isax-medal-star', couleur: '#f59e0b', obtenu: true,  date: '2025-01-15' },
    { id: 2, nom: 'Expert',       description: '10 formations terminées',     icone: 'isax-award',      couleur: '#7c3aed', obtenu: false },
  ];

  classement: ClassementEntry[] = [
    { rang: 1, nom: 'Aminata D.',  avatar: 'AD', score: 98, isMe: false },
    { rang: 2, nom: 'Ibrahima S.', avatar: 'IS', score: 91, isMe: false },
    { rang: 3, nom: 'Moi',         avatar: 'ME', score: 84, isMe: true  },
    { rang: 4, nom: 'Fatou N.',    avatar: 'FN', score: 76, isMe: false },
    { rang: 5, nom: 'Omar B.',     avatar: 'OB', score: 70, isMe: false },
  ];

  private charts: { [key: string]: any } = {};
  private chartsInitialized = false;
  private pendingCharts = false;

  // ── CORRECTIF : liste des IDs de charts par onglet ──────────────────────
  private readonly CHART_IDS_PROGRESSION = [
    'radial-formations', 'radial-sessions', 'radial-parcours', 'radial-catalogues',
    'chart-completion', 'chart-taux-abandon',
    'chart-formations-terminees', 'chart-sessions-terminees',
    'chart-parcours-termines', 'chart-catalogues-termines',
    'chart-heures', 'chart-certifications',
    'chart-donut-quiz-perf', 'chart-score-moyen-bar',
    'chart-donut-demandes', 'chart-ecart-competences-courbe',
  ];
  private readonly CHART_IDS_OBJECTIFS = [
    'chart-donut-heures',
  ];

  constructor(
    private formationsService: FormationService,
    private demandeFormationService: DemandeFormationService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    const now = new Date().getFullYear();
    for (let i = 0; i < 5; i++) this.annees.push(now - i);
    this.loadStats();
  }

  ngOnDestroy(): void { this.destroyAllCharts(); }

  // ── CORRECTIF PRINCIPAL ─────────────────────────────────────────────────
  // On cherche l'ancre de l'onglet courant, pas un seul id fixe.
  // Si l'ancre est présente ET non vide (offsetParent != null), on lance les charts.
  ngAfterViewChecked(): void {
    if (!this.pendingCharts || !this.stats || this.chartsInitialized) return;

    const anchorId = this.getAnchorChartId();
    if (!anchorId) { this.pendingCharts = false; return; }

    const el = document.getElementById(anchorId);
    // Vérifier que l'élément est bien dans le DOM visible (pas display:none)
    if (!el || el.offsetParent === null || el.getBoundingClientRect().width === 0) return;

    this.pendingCharts     = false;
    this.chartsInitialized = true;

    this.ngZone.runOutsideAngular(() => {
      // Délai porté à 150ms pour garantir la stabilité du DOM avant le rendu ApexCharts
      setTimeout(() => this.initChartsPourOnglet(), 150);
    });
  }

  // ── LOGIQUE DE DONNÉES ─────────────────────────────────────────────────────

  get labelPeriodeSelectionnee(): string {
    if (this.periodeMode === 'mois')
      return `${this.moisLabels[this.selectedMois - 1]} ${this.selectedAnnee}`;
    if (this.periodeMode === 'trimestre') {
      const labels = ['T1 (Jan–Mar)','T2 (Avr–Juin)','T3 (Juil–Sep)','T4 (Oct–Déc)'];
      return `${labels[this.selectedTrimestre - 1]} ${this.selectedAnnee}`;
    }
    return `Année ${this.selectedAnnee}`;
  }

  loadStats(): void {
    this.loading           = true;
    this.chartsInitialized = false;
    this.pendingCharts     = false;
    this.destroyAllCharts();

    this.formationsService.getDashboardStats({
      periode:    this.periodeMode,
      annee:      this.selectedAnnee,
      mois:       this.selectedMois,
      trimestre:  this.selectedTrimestre,
    } as any).subscribe({
      next: (res: any) => {
        this.stats   = res.data;
        this.loading = false;
        this.cdr.detectChanges();
        this.scheduleCharts();
      },
      error: () => this.loadStatsFallback(),
    });
  }

  private loadStatsFallback(): void {
    Promise.all([
      this.formationsService.getMesFormations().toPromise().catch(() => null),
      this.demandeFormationService.getMesDemandes().toPromise().catch(() => null),
      this.formationsService.getMyCertificates().toPromise().catch(() => null),
    ]).then(([formRes, demRes, certRes]: any[]) => {
      const formations = formRes?.formations ?? formRes?.data ?? [];
      const demandes   = demRes?.demandes    ?? demRes?.data  ?? [];
      const certs      = certRes?.certificats ?? certRes?.data ?? certRes?.certificates ?? [];

      const terminees = formations.filter((f: any) => f.statut_formation === 'termine');
      const enCours   = formations.filter((f: any) => f.statut_formation === 'en_cours');
      const progMoy   = formations.length
        ? formations.reduce((s: number, f: any) => {
            const p = parseFloat(f.progression);
            return s + (isNaN(p) ? 0 : p);
          }, 0) / formations.length
        : 0;

      const { debut: pDebut, fin: pFin } = this.getPeriodeBornes();
      const formationsEcheance = formations.filter((f: any) =>
        f.date_fin_prevue &&
        new Date(f.date_fin_prevue) >= pDebut &&
        new Date(f.date_fin_prevue) <= pFin
      );

      const heuresDues      = Math.round(formationsEcheance.reduce((s: number, f: any) => s + (f.duree_totale ?? 0), 0) / 60 * 10) / 10;
      const heuresTerminees = Math.round(formationsEcheance.filter((f: any) => f.statut_formation === 'termine').reduce((s: number, f: any) => s + (f.duree_totale ?? 0), 0) / 60 * 10) / 10;
      const courbes = this.buildCourbesAngular(formations, demandes, certs);

      this.stats = {
        kpi: {
          formations: {
            total: formations.length, en_cours: enCours.length, terminees: terminees.length,
            progression_moy: Math.round(progMoy * 10) / 10,
            taux_completion: formations.length ? Math.round((terminees.length / formations.length) * 100) : 0,
            taux_obligatoires: 0,
            obligatoires_total:     formations.filter((f: any) => f.est_obligatoire).length,
            obligatoires_terminees: formations.filter((f: any) => f.est_obligatoire && f.statut_formation === 'termine').length,
          },
          sessions:    { total: 0, terminees: 0, taux: 0 },
          parcours:    { total: 0, termines: 0, progression: 0, taux: 0 },
          catalogues:  { total: 0, termines: 0, taux: 0 },
          certifications: {
            total: certs.length,
            cette_annee: certs.filter((c: any) => new Date(c.created_at).getFullYear() === new Date().getFullYear()).length,
          },
          heures: {
            heures_produites_periode: 0,
            taux_heures_produites:    0,
            heures_dues_periode:      heuresDues,
            heures_terminees_periode: heuresTerminees,
            heures_restantes_periode: Math.max(0, heuresDues - heuresTerminees),
            taux_heures_periode:      heuresDues > 0 ? Math.min(100, Math.round((heuresTerminees / heuresDues) * 100)) : 0,
            total_cumulees:  Math.round(terminees.reduce((s: number, f: any) => s + (f.duree_totale ?? 0), 0) / 60 * 10) / 10,
            objectif_annuel: 40,
            taux_objectif:   0,
          },
          demandes: {
            en_attente: demandes.filter((d: any) => d.statut === 'en_attente').length,
            validees:   demandes.filter((d: any) => d.statut === 'validee').length,
            refusees:   demandes.filter((d: any) => d.statut === 'refusee').length,
            total:      demandes.length,
          },
          pdi:         { disponible: false, taux_completion: 0, objectifs_total: 0, objectifs_atteints: 0, prochain_entretien: null },
          evaluations: { disponible: false, score_moyen: 0, nb_passees: 0, nb_reussies: 0, taux_reussite: 0 },
          competences_periode: { liste: [], total: 0 },
          ecart_competences:   { total_visees: 0, total_acquises: 0, total_ecart: 0, taux_couverture: 0 },
        },
        courbes,
        echeances: formations
          .filter((f: any) => f.statut_formation === 'en_cours' && f.date_fin_prevue)
          .map((f: any) => {
            const jr = Math.ceil((new Date(f.date_fin_prevue).getTime() - Date.now()) / 86400000);
            return { id: f.id, titre: f.titre, type: f.est_obligatoire ? 'obligatoire' : 'formation', deadline: f.date_fin_prevue, joursRestants: jr, progression: f.progression ?? 0, urgent: jr <= 7 };
          })
          .sort((a: any, b: any) => a.joursRestants - b.joursRestants)
          .slice(0, 5),
        sessions_planifiees: [],
        activites_jour:      [],
        kpi_futurs: {
          competences_validees:    { disponible: false, total: 0, liste: [] },
          badges_obtenus:          { disponible: true,  message: '' },
          classement:              { disponible: true,  message: '' },
          ecart_competences:       { disponible: true,  message: '' },
          formations_recommandees: { disponible: false, message: 'À venir' },
        },
      };

      this.loading = false;
      this.cdr.detectChanges();
      this.scheduleCharts();
    }).catch(() => { this.loading = false; });
  }

  private getPeriodeBornes(): { debut: Date; fin: Date } {
    const d = new Date(this.selectedAnnee, this.selectedMois - 1, 1);
    const f = new Date(this.selectedAnnee, this.selectedMois, 0, 23, 59, 59);
    return { debut: d, fin: f };
  }

  private buildCourbesAngular(formations: any[], demandes: any[], certs: any[]): DashStats['courbes'] {
    return {
      labels:                    this.moisLabels,
      formationsTerminees:       new Array(12).fill(0),
      certificationsObtenues:    new Array(12).fill(0),
      heuresCumulees:            new Array(12).fill(0),
      heuresProduites:           new Array(12).fill(0),
      progressionParcours:       new Array(12).fill(0),
      progressionCatalogues:     new Array(12).fill(0),
      sessionsTerminees:         new Array(12).fill(0),
      tauxCompletion:            new Array(12).fill(0),
      tauxAbandonCourbe:         new Array(12).fill(0),
      scoresQuiz:                new Array(12).fill(0),
      tauxCouvertureCompetences: new Array(12).fill(0),
    };
  }

  // ── CHARTS MANAGEMENT ──────────────────────────────────────────────────────

  private scheduleCharts(): void {
    if (!this.stats) return;
    this.pendingCharts = true;
    this.cdr.detectChanges();
  }

  // ── CORRECTIF : ancre par onglet actif ──────────────────────────────────
  private getAnchorChartId(): string | null {
    if (this.activeTab === 'progression') return 'radial-formations';
    if (this.activeTab === 'objectifs')   return 'chart-donut-heures';
    return null;
  }

  // ── CORRECTIF : détruire uniquement les charts de l'onglet courant ──────
  // (ou tous lors d'un rechargement complet)
  private destroyAllCharts(): void {
    Object.values(this.charts).forEach(c => { try { c?.destroy(); } catch {} });
    this.charts = {};
  }

  private destroyChartsForTab(tab: string): void {
    const ids = tab === 'progression'
      ? this.CHART_IDS_PROGRESSION
      : tab === 'objectifs'
        ? this.CHART_IDS_OBJECTIFS
        : [];
    ids.forEach(id => {
      if (this.charts[id]) {
        try { this.charts[id].destroy(); } catch {}
        delete this.charts[id];
      }
    });
  }

  private initChartsPourOnglet(): void {
    if (!this.stats) return;
    const c = this.stats.courbes;

    if (this.activeTab === 'progression') {

      // ── Radials ───────────────────────────────────────────────────────────
      this.renderRadial('radial-formations', this.stats.kpi.formations.taux_completion, '#069b8f');
      this.renderRadial('radial-sessions',   this.stats.kpi.sessions.taux,             '#3b82f6');
      this.renderRadial('radial-parcours',   this.stats.kpi.parcours.progression,      '#7c3aed');
      this.renderRadial('radial-catalogues', this.stats.kpi.catalogues.taux,           '#10b981');

      // ── Taux de complétion global + Taux d'abandon ────────────────────────
      this.renderChart('chart-completion', this.buildAreaConfig(
        c.labels, [{ name: 'Taux (%)', data: c.tauxCompletion, color: '#069b8f' }], 'Taux de complétion global'
      ));
      this.renderChart('chart-taux-abandon', this.buildAreaConfig(
        c.labels, [{ name: 'Taux abandon (%)', data: c.tauxAbandonCourbe, color: '#ef4444' }], "Taux d'abandon"
      ));

      // ── Éléments terminés ─────────────────────────────────────────────────
      this.renderChart('chart-formations-terminees', this.buildBarConfig(
        c.labels, [{ name: 'Formations', data: c.formationsTerminees, color: '#069b8f' }], 'Formations terminées'
      ));
      this.renderChart('chart-sessions-terminees', this.buildBarConfig(
        c.labels, [{ name: 'Sessions', data: c.sessionsTerminees, color: '#3b82f6' }], 'Sessions terminées'
      ));
      this.renderChart('chart-parcours-termines', this.buildBarConfig(
        c.labels, [{ name: 'Parcours', data: c.progressionParcours, color: '#7c3aed' }], 'Parcours terminés'
      ));
      this.renderChart('chart-catalogues-termines', this.buildBarConfig(
        c.labels, [{ name: 'Catalogues', data: c.progressionCatalogues, color: '#10b981' }], 'Catalogues terminés'
      ));
      this.renderChart('chart-heures', this.buildBarConfig(
        c.labels, [{ name: 'Heures produites', data: c.heuresProduites, color: '#f59e0b' }], 'Heures produites'
      ));
      this.renderChart('chart-certifications', this.buildBarConfig(
        c.labels, [{ name: 'Certifications', data: c.certificationsObtenues, color: '#f59e0b' }], 'Certifications obtenues'
      ));

      // ── QUIZ ──────────────────────────────────────────────────────────────
      if (this.stats.kpi.evaluations.disponible) {
        const e = this.stats.kpi.evaluations;
        this.renderPie3D('chart-donut-quiz-perf',
          [e.nb_reussies, e.nb_passees - e.nb_reussies],
          ['Réussis', 'Échoués'],
          ['#10b981', '#ef4444']
        );
        this.renderChart('chart-score-moyen-bar', {
          series: [{ name: 'Score moyen', data: c.scoresQuiz }],
          chart:  { type: 'bar', height: 240, toolbar: { show: false } },
          colors: ['#7c3aed'],
          xaxis:  { categories: c.labels },
          yaxis:  { min: 0, max: 100, tickAmount: 5 },
          plotOptions: {
            bar: { borderRadius: 5, columnWidth: '55%', dataLabels: { position: 'top' } }
          },
          dataLabels: {
            enabled: true,
            formatter: (val: number) => val > 0 ? val + '/100' : '',
            offsetY: -20,
            style: { fontSize: '11px', fontWeight: 700, colors: ['#334155'] },
          },
          annotations: {
            yaxis: [{
              y: 60,
              borderColor: '#ef4444',
              strokeDashArray: 5,
              label: {
                text: 'Seuil 60',
                position: 'right',
                style: { color: '#ef4444', fontSize: '11px', background: 'transparent' },
              },
            }],
          },
        });
      }

      // ── Demandes — pie 3D ─────────────────────────────────────────────────
      const d = this.stats.kpi.demandes;
      if (d.total > 0) {
        this.renderPie3D(
          'chart-donut-demandes',
          [d.validees, d.en_attente, d.refusees],
          ['Validées', 'En attente', 'Refusées'],
          ['#10b981', '#f59e0b', '#ef4444']
        );
      }

      // Écart compétences — affiché en KPI statique dans le HTML, pas de chart.
    }

    if (this.activeTab === 'objectifs') {
      const h = this.stats.kpi.heures;
      if (h.heures_dues_periode > 0) {
        this.renderDonutNoLegend('chart-donut-heures',
          [h.heures_terminees_periode, h.heures_restantes_periode],
          ['Terminées', 'Restantes'],
          ['#10b981', '#ef4444']
        );
      } else {
        this.renderDonutVide('chart-donut-heures');
      }
    }
  }

  private renderRadial(id: string, valeur: number, color: string): void {
    const el = document.getElementById(id);
    if (!el || this.charts[id]) return;
    const chart = new ApexCharts(el, {
      series: [Math.min(100, Math.max(0, valeur ?? 0))],
      chart:  { type: 'radialBar', height: 110, sparkline: { enabled: true } },
      plotOptions: { radialBar: { hollow: { size: '60%' }, dataLabels: { name: { show: false }, value: { offsetY: 6, fontSize: '16px', fontWeight: 800, color, formatter: (v: any) => v + '%' } } } },
      fill:   { colors: [color] },
      stroke: { lineCap: 'round' },
    });
    chart.render();
    this.charts[id] = chart;
  }

  private renderChart(id: string, config: any): void {
    const el = document.getElementById(id);
    if (!el || this.charts[id]) return;
    const chart = new ApexCharts(el, config);
    chart.render();
    this.charts[id] = chart;
  }

  private buildAreaConfig(labels: string[], series: any[], title: string) {
    return {
      series,
      chart:  { type: 'area', height: 200, toolbar: { show: false } },
      xaxis:  { categories: labels },
      yaxis:  { min: 0, max: 100, tickAmount: 5 },
      stroke: { curve: 'smooth', width: 2 },
      fill:   { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.05 } },
      title:  { text: title },
      colors: series.map((s: any) => s.color ?? '#069b8f'),
    };
  }

  private buildBarConfig(labels: string[], series: any[], title: string) {
    return {
      series,
      chart:  { type: 'bar', height: 200, toolbar: { show: false } },
      xaxis:  { categories: labels },
      colors: series.map((s: any) => s.color ?? '#069b8f'),
      title:  { text: title },
      plotOptions: { bar: { borderRadius: 4 } },
    };
  }

  // ── PIE 3D ────────────────────────────────────────────────────────────────
  private renderPie3D(id: string, series: number[], labels: string[], colors: string[]): void {
    const el = document.getElementById(id);
    if (!el || this.charts[id]) return;
    const chart = new ApexCharts(el, {
      series, labels, colors,
      chart: {
        type: 'pie',
        height: 240,
        events: {
          rendered: () => {
            const svg = el.querySelector('svg');
            if (svg) {
              (svg as unknown as HTMLElement).style.transform       = 'rotateX(18deg) scaleY(0.88)';
              (svg as unknown as HTMLElement).style.transformOrigin = 'center bottom';
              (svg as unknown as HTMLElement).style.filter          = 'drop-shadow(0 8px 10px rgba(0,0,0,0.18))';
            }
          }
        }
      },
      legend: {
        show: true, position: 'left', fontSize: '12px', fontFamily: 'inherit', fontWeight: 500,
        markers: { width: 10, height: 10, radius: 5 },
        itemMargin: { vertical: 6 },
        formatter: (label: string, opts: any) => {
          const val   = opts.w.globals.series[opts.seriesIndex];
          const total = opts.w.globals.series.reduce((a: number, b: number) => a + b, 0);
          const pct   = total > 0 ? Math.round((val / total) * 100) : 0;
          return `${label}: <b>${val}</b> (${pct}%)`;
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val: number) => Math.round(val) + '%',
        style: { fontSize: '12px', fontWeight: 700 },
        dropShadow: { enabled: false },
      },
      stroke:  { width: 2, colors: ['#fff'] },
      tooltip: { y: { formatter: (val: number) => val + ' demande(s)' } },
    });
    chart.render();
    this.charts[id] = chart;
  }

  private renderDonutNoLegend(id: string, series: number[], labels: string[], colors: string[]): void {
    const el = document.getElementById(id);
    if (!el || this.charts[id]) return;
    const chart = new ApexCharts(el, {
      series, labels, colors,
      chart: { type: 'donut', height: 220 },
      legend: { show: false },
    });
    chart.render();
    this.charts[id] = chart;
  }

  private renderDonutWithLegend(id: string, series: number[], labels: string[], colors: string[]): void {
    const el = document.getElementById(id);
    if (!el || this.charts[id]) return;
    const chart = new ApexCharts(el, {
      series, labels, colors,
      chart: { type: 'donut', height: 220 },
      legend: {
        show: true, position: 'left', fontSize: '12px', fontFamily: 'inherit', fontWeight: 500,
        markers: { width: 10, height: 10, radius: 5 },
        itemMargin: { vertical: 6 },
        formatter: (label: string, opts: any) => {
          const val = opts.w.globals.series[opts.seriesIndex];
          return `${label}: <b>${val}</b>`;
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val: number) => Math.round(val) + '%',
        style: { fontSize: '11px', fontWeight: 700 },
      },
      plotOptions: { pie: { donut: { size: '60%' } } },
      stroke: { width: 2 },
    });
    chart.render();
    this.charts[id] = chart;
  }

  private renderDonutVide(id: string): void {
    const el = document.getElementById(id);
    if (!el || this.charts[id]) return;
    const chart = new ApexCharts(el, {
      series: [1],
      labels: ['Aucune donnée'],
      colors: ['#e2e8f0'],
      chart: { type: 'donut', height: 220 },
      legend: { show: false },
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
      plotOptions: {
        pie: {
          donut: {
            size: '60%',
            labels: {
              show: true,
              total: {
                show: true, label: 'Complété', fontSize: '13px', fontWeight: 600,
                color: '#94a3b8', formatter: () => '0%',
              },
            },
          },
        },
      },
      states: {
        hover:  { filter: { type: 'none' } },
        active: { filter: { type: 'none' } },
      },
    });
    chart.render();
    this.charts[id] = chart;
  }

  // ── GETTERS ET HELPERS ─────────────────────────────────────────────────────

  // ── CORRECTIF : setTab détruit uniquement les charts de l'onglet qu'on quitte
  setTab(tab: 'aujourdhui' | 'progression' | 'objectifs'): void {
    if (this.activeTab === tab) return;
    this.destroyChartsForTab(this.activeTab);
    this.activeTab         = tab;
    this.chartsInitialized = false;
    this.pendingCharts     = false;
    this.cdr.detectChanges();
    this.scheduleCharts();
  }

  onPeriodeChange(): void   { this.loadStats(); }
  onAnneeChange(): void     { this.loadStats(); }
  onMoisChange(): void      { this.loadStats(); }
  onTrimestreChange(): void { this.loadStats(); }

  get activitesJour(): Activite[]     { return this.stats?.activites_jour ?? []; }
  get echeancesUrgentes(): Echeance[] { return (this.stats?.echeances ?? []).filter(e => e.urgent); }
  get echeancesNormales(): Echeance[] { return (this.stats?.echeances ?? []).filter(e => !e.urgent); }
  get hasUrgences(): boolean          { return this.echeancesUrgentes.length > 0; }
  get demandesTotal(): number         { return this.stats?.kpi.demandes.total ?? 0; }
  get tauxCompletionGlobal(): number  { return this.stats?.kpi?.formations?.taux_completion ?? 0; }
  get hasScoresQuiz(): boolean        { return (this.stats?.courbes?.scoresQuiz ?? []).some(v => v > 0); }
  get competencesPeriode(): string[]  { return this.stats?.kpi?.competences_periode?.liste ?? []; }
  get competencesPeriodeVisibles(): string[] { return this.competencesPeriode.slice(0, 8); }
  get competencesPeriodeRestantes(): number  { return Math.max(0, this.competencesPeriode.length - 8); }
  get badgesObtenus(): Badge[]        { return this.badges.filter(b => b.obtenu); }
  get badgesVerrouilles(): Badge[]    { return this.badges.filter(b => !b.obtenu); }
  get monClassement(): number | null  { return this.classement.find(c => c.isMe)?.rang ?? null; }
  get myScore(): number               { return this.classement.find(c => c.isMe)?.score ?? 0; }

  getActiviteIcon(statut: Activite['statut']): string {
    return { termine: 'isax-tick-circle', demarre: 'isax-play-circle', repris: 'isax-refresh-circle' }[statut] ?? 'isax-book-1';
  }
  getActiviteIconClass(statut: Activite['statut']): string {
    return { termine: 'db-activity-item__icon--green', demarre: 'db-activity-item__icon--teal', repris: 'db-activity-item__icon--blue' }[statut] ?? '';
  }
  getActiviteStatutLabel(statut: Activite['statut']): string {
    return { termine: 'Terminé', demarre: 'Démarré', repris: 'Repris' }[statut] ?? statut;
  }
  getActiviteBadgeClass(statut: Activite['statut']): string {
    return { termine: 'db-activity-item__badge--green', demarre: 'db-activity-item__badge--teal', repris: 'db-activity-item__badge--blue' }[statut] ?? '';
  }
  getActiviteTypeLabel(type: Activite['type']): string {
    return { formation: 'Formation', session: 'Session', parcours: 'Parcours', catalogue: 'Catalogue' }[type] ?? type;
  }

  getProgressionColor(v: number | null | undefined): string {
    return this.getProgressionColorStatic(v);
  }

  private getProgressionColorStatic(v: number | null | undefined): string {
    const val = v ?? 0;
    if (val >= 75) return '#10b981';
    if (val >= 40) return '#f59e0b';
    return '#ef4444';
  }

  getUrgenceClass(e: Echeance): string {
    if (e.joursRestants <= 4)  return 'ech-item--critique';
    if (e.joursRestants <= 14) return 'ech-item--moyenne';
    return 'ech-item--normale';
  }
  getUrgenceLabelClass(e: Echeance): string {
    if (e.joursRestants <= 4)  return 'ech-urgence__label--rouge';
    if (e.joursRestants <= 14) return 'ech-urgence__label--orange';
    return 'ech-urgence__label--vert';
  }
  getUrgenceStroke(e: Echeance): string {
    if (e.joursRestants <= 4)  return '#E24B4A';
    if (e.joursRestants <= 14) return '#EF9F27';
    return '#1D9E75';
  }
  getCountdownOffset(joursRestants: number): number {
    return Math.round(138.2 * (1 - Math.min(joursRestants, 30) / 30));
  }
  getUrgenceLabel(j: number): string {
    if (j <= 0) return 'Expiré';
    if (j === 1) return 'Demain';
    return `Dans ${j}j`;
  }
  getTypeLabel(type: Echeance['type']): string {
    return { obligatoire: 'Obligatoire', formation: 'Formation', parcours: 'Parcours', catalogue: 'Catalogue', session: 'Session' }[type] ?? type;
  }
  getTypeColor(type: Echeance['type']): string {
    return { obligatoire: '#ef4444', formation: '#069b8f', parcours: '#7c3aed', catalogue: '#3b82f6', session: '#f59e0b' }[type] ?? '#9ca3af';
  }
  hasProgression(type: Echeance['type']): boolean { return type !== 'catalogue'; }

  getRangClass(rang: number): string {
    if (rang === 1) return 'cl-entry--gold';
    if (rang === 2) return 'cl-entry--silver';
    if (rang === 3) return 'cl-entry--bronze';
    return '';
  }
  getRangMedal(rang: number): string {
    if (rang === 1) return '🥇';
    if (rang === 2) return '🥈';
    if (rang === 3) return '🥉';
    return String(rang);;;;
  }
}