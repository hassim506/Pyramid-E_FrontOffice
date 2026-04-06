import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { FormationsService }       from '../../../shared/service/Formationsss/formations.service';
import { DemandeFormationService } from '../../../shared/service/demande/demande-formation.service';

declare var ApexCharts: any;

// ── Interfaces ───────────────────────────────────────────────────────────────

interface Activite {
  id:     number;
  titre:  string;
  type:   'formation' | 'session' | 'parcours' | 'catalogue';
  statut: 'demarre' | 'termine' | 'repris';
  heure:  string;
}

interface Echeance {
  id:            number;
  titre:         string;
  type:          'formation' | 'parcours' | 'session' | 'obligatoire' | 'catalogue';
  deadline:      string;
  joursRestants: number;
  progression:   number;
  urgent:        boolean;
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
      total: number; en_cours: number; terminees: number;
      progression_moy: number; taux_completion: number;
      taux_obligatoires: number; obligatoires_total: number; obligatoires_terminees: number;
    };
    sessions:   { total: number; terminees: number; taux: number; };
    parcours:   { total: number; termines: number; progression: number; taux: number; };
    catalogues: { total: number; termines: number; taux: number; };
    certifications: { total: number; cette_annee: number };
    heures: {
      heures_dues_periode:      number;
      heures_terminees_periode: number;
      heures_restantes_periode: number;
      taux_heures_periode:      number;
      total_cumulees:  number;
      objectif_annuel: number;
      taux_objectif:   number;
    };
    demandes: { en_attente: number; validees: number; refusees: number; total: number; };
    taux_completion_global?: { valeur: number; total_termine: number; total_assigne: number; };
    pdi: { disponible: boolean; taux_completion: number; objectifs_total: number; objectifs_atteints: number; prochain_entretien: string | null; };
    evaluations: { disponible: boolean; score_moyen: number; nb_passees: number; nb_reussies: number; taux_reussite: number; };
    competences_periode: { liste: string[]; total: number; };
  };
  courbes: {
    labels:                 string[];
    formationsTerminees:    number[];
    certificationsObtenues: number[];
    heuresCumulees:         number[];
    progressionParcours:    number[];
    progressionCatalogues:  number[];
    sessionsTerminees:      number[];
    tauxCompletion:         number[];
    tauxAbandonCourbe:      number[];
    scoresQuiz:             number[];
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

@Component({
  selector:    'app-student-dashboard',
  standalone:  true,
  imports:     [CommonModule, FormsModule, RouterModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls:   ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent implements OnInit, OnDestroy {

  loading = true;
  stats: DashStats | null = null;

  periodeMode: 'mois' | 'trimestre' | 'annee' = 'mois';
  selectedAnnee     = new Date().getFullYear();
  selectedMois      = new Date().getMonth() + 1;
  selectedTrimestre = Math.ceil((new Date().getMonth() + 1) / 3);
  annees: number[]  = [];
  moisLabels = ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Aoû','Sep','Oct','Nov','Déc'];

  activeTab: 'aujourdhui' | 'progression' | 'objectifs' = 'aujourdhui';

  private charts: { [key: string]: any } = {};

  private radialColors: Record<string, string> = {
    formations: '#069b8f',
    sessions:   '#3b82f6',
    parcours:   '#7c3aed',
    catalogues: '#10b981',
  };

  constructor(
    private formationsService:       FormationsService,
    private demandeFormationService: DemandeFormationService,
  ) {}

  ngOnInit(): void {
    const now = new Date().getFullYear();
    for (let i = 0; i < 5; i++) this.annees.push(now - i);
    this.loadStats();
  }

  ngOnDestroy(): void { this.destroyAllCharts(); }

  // ── Label période ─────────────────────────────────────────────────────────
  get labelPeriodeSelectionnee(): string {
    if (this.periodeMode === 'mois')
      return `${this.moisLabels[this.selectedMois - 1]} ${this.selectedAnnee}`;
    if (this.periodeMode === 'trimestre') {
      const labels = ['T1 (Jan–Mar)','T2 (Avr–Juin)','T3 (Juil–Sep)','T4 (Oct–Déc)'];
      return `${labels[this.selectedTrimestre - 1]} ${this.selectedAnnee}`;
    }
    return `Année ${this.selectedAnnee}`;
  }

  // ── Chargement ────────────────────────────────────────────────────────────
  loadStats(): void {
    this.loading = true;
    this.destroyAllCharts();

    this.formationsService.getDashboardStats({
      periode:   this.periodeMode,
      annee:     this.selectedAnnee,
      mois:      this.selectedMois,
      trimestre: this.selectedTrimestre,
    } as any).subscribe({
      next:  (res: any) => { this.stats = res.data; this.loading = false; this.scheduleCharts(); },
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

      const terminees = formations.filter((f: any) => f.statut_formation === 'termine');
      const enCours   = formations.filter((f: any) => f.statut_formation === 'en_cours');
      const progMoy   = formations.length
        ? formations.reduce((s: number, f: any) => { const p = parseFloat(f.progression); return s + (isNaN(p) ? 0 : p); }, 0) / formations.length
        : 0;

      const tauxCompletion = formations.length
        ? Math.round((terminees.length / formations.length) * 1000) / 10 : 0;

      const now = new Date();
      const nonTermines = formations.filter((f: any) => f.statut_formation !== 'termine');
      const abandonnes  = nonTermines.filter((f: any) => {
        if (f.statut_formation === 'abandonne') return true;
        if (f.statut_formation === 'en_cours' && f.date_fin_prevue) {
          return new Date(f.date_fin_prevue) < now;
        }
        if (!f.statut_formation || f.statut_formation === 'assigne') {
          return f.date_fin_prevue && new Date(f.date_fin_prevue) < now;
        }
        return false;
      });

      const { debut: pDebut, fin: pFin } = this.getPeriodeBornes();
      const formationsEcheanceDansPeriode = formations.filter((f: any) =>
        f.date_fin_prevue &&
        new Date(f.date_fin_prevue) >= pDebut &&
        new Date(f.date_fin_prevue) <= pFin
      );
      const heuresDues = Math.round(
        formationsEcheanceDansPeriode.reduce((s: number, f: any) => s + (f.duree_totale ?? 0), 0) / 60 * 10
      ) / 10;
      const heuresTerminees = Math.round(
        formationsEcheanceDansPeriode
          .filter((f: any) => f.statut_formation === 'termine')
          .reduce((s: number, f: any) => s + (f.duree_totale ?? 0), 0) / 60 * 10
      ) / 10;
      const heuresRestantes = Math.max(0, Math.round((heuresDues - heuresTerminees) * 10) / 10);
      const tauxHeures = heuresDues > 0 ? Math.min(100, Math.round((heuresTerminees / heuresDues) * 100)) : 0;

      const competencesList: string[] = [];
      formationsEcheanceDansPeriode.forEach((f: any) => {
        if (f.competences_cibles || f.competences_acquises) {
          try {
            const src = f.competences_cibles ?? f.competences_acquises;
            const decoded = JSON.parse(src);
            if (Array.isArray(decoded)) competencesList.push(...decoded);
          } catch {}
        }
      });
      const competencesUniques = [...new Set(competencesList)];

      const courbes = this.buildCourbesAngular(formations, demandes, certs);
      const tauxAbandon = formations.length > 0
        ? Math.round((abandonnes.length / formations.length) * 100) : 0;

      const echeances: Echeance[] = formations
        .filter((f: any) => f.statut_formation === 'en_cours' && f.date_fin_prevue)
        .map((f: any) => {
          const joursRestants = Math.ceil((new Date(f.date_fin_prevue).getTime() - Date.now()) / 86400000);
          return { id: f.id, titre: f.titre, type: f.est_obligatoire ? 'obligatoire' : 'formation',
            deadline: f.date_fin_prevue, joursRestants, progression: f.progression ?? 0,
            urgent: joursRestants <= 7 } as Echeance;
        })
        .sort((a: Echeance, b: Echeance) => a.joursRestants - b.joursRestants)
        .slice(0, 5);

      const today = new Date().toDateString();
      const activitesJour: Activite[] = formations
        .filter((f: any) => f.updated_at && new Date(f.updated_at).toDateString() === today)
        .map((f: any) => ({
          id: f.id, titre: f.titre, type: 'formation' as const,
          statut: f.statut_formation === 'termine' ? 'termine' : 'demarre',
          heure: new Date(f.updated_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        }));

      this.stats = {
        kpi: {
          formations: {
            total: formations.length, en_cours: enCours.length, terminees: terminees.length,
            progression_moy: Math.round(progMoy * 10) / 10, taux_completion: tauxCompletion,
            taux_obligatoires: 0,
            obligatoires_total:     formations.filter((f: any) => f.est_obligatoire).length,
            obligatoires_terminees: formations.filter((f: any) => f.est_obligatoire && f.statut_formation === 'termine').length,
          },
          sessions:   { total: 0, terminees: 0, taux: 0 },
          parcours:   { total: 0, termines: 0, progression: 0, taux: 0 },
          catalogues: { total: 0, termines: 0, taux: 0 },
          certifications: {
            total: certs.length,
            cette_annee: certs.filter((c: any) => new Date(c.created_at).getFullYear() === new Date().getFullYear()).length,
          },
          heures: {
            heures_dues_periode:      heuresDues,
            heures_terminees_periode: heuresTerminees,
            heures_restantes_periode: heuresRestantes,
            taux_heures_periode:      tauxHeures,
            total_cumulees:  Math.round(terminees.reduce((s: number, f: any) => s + (f.duree_totale ?? 0), 0) / 60 * 10) / 10,
            objectif_annuel: 40, taux_objectif: 0,
          },
          demandes: {
            en_attente: demandes.filter((d: any) => d.statut === 'en_attente').length,
            validees:   demandes.filter((d: any) => d.statut === 'validee').length,
            refusees:   demandes.filter((d: any) => d.statut === 'refusee').length,
            total: demandes.length,
          },
          pdi:         { disponible: false, taux_completion: 0, objectifs_total: 0, objectifs_atteints: 0, prochain_entretien: null },
          evaluations: { disponible: false, score_moyen: 0, nb_passees: 0, nb_reussies: 0, taux_reussite: 0 },
          competences_periode: { liste: competencesUniques, total: competencesUniques.length },
        },
        courbes,
        echeances,
        sessions_planifiees: [],
        activites_jour: activitesJour,
        kpi_futurs: {
          competences_validees:    { disponible: false, total: 0, liste: [] },
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

  // ── Bornes de la période ──────────────────────────────────────────────────
  private getPeriodeBornes(): { debut: Date; fin: Date } {
    if (this.periodeMode === 'mois') {
      const debut = new Date(this.selectedAnnee, this.selectedMois - 1, 1);
      const fin   = new Date(this.selectedAnnee, this.selectedMois, 0, 23, 59, 59);
      return { debut, fin };
    }
    if (this.periodeMode === 'trimestre') {
      const moisDebut = (this.selectedTrimestre - 1) * 3;
      const debut = new Date(this.selectedAnnee, moisDebut, 1);
      const fin   = new Date(this.selectedAnnee, moisDebut + 3, 0, 23, 59, 59);
      return { debut, fin };
    }
    const debut = new Date(this.selectedAnnee, 0, 1);
    const fin   = new Date(this.selectedAnnee, 11, 31, 23, 59, 59);
    return { debut, fin };
  }

  private buildCourbesAngular(formations: any[], demandes: any[], certs: any[]): DashStats['courbes'] {
    const labels: string[]                = [];
    const formationsTerminees: number[]   = [];
    const certificationsObtenues: number[]= [];
    const heuresCumulees: number[]        = [];
    const progressionParcours: number[]   = [];
    const progressionCatalogues: number[] = [];
    const sessionsTerminees: number[]     = [];
    const tauxCompletion: number[]        = [];
    const tauxAbandonCourbe: number[]     = [];
    const scoresQuiz: number[]            = [];

    const base = this.periodeMode === 'annee' ? 5 : this.periodeMode === 'trimestre' ? 4 : 12;

    for (let i = base - 1; i >= 0; i--) {
      let debut: Date, fin: Date, label: string;

      if (this.periodeMode === 'annee') {
        const y = new Date().getFullYear() - i;
        debut = new Date(y, 0, 1); fin = new Date(y, 11, 31, 23, 59, 59); label = String(y);
      } else if (this.periodeMode === 'trimestre') {
        let qMois = (this.selectedTrimestre - 1) * 3;
        let qAnnee = this.selectedAnnee;
        qMois -= i * 3;
        while (qMois < 0) { qMois += 12; qAnnee--; }
        debut = new Date(qAnnee, qMois, 1);
        fin   = new Date(qAnnee, qMois + 3, 0, 23, 59, 59);
        label = `T${Math.floor(qMois / 3) + 1} ${qAnnee}`;
      } else {
        const d = new Date(this.selectedAnnee, this.selectedMois - 1, 1);
        d.setMonth(d.getMonth() - i);
        debut = new Date(d.getFullYear(), d.getMonth(), 1);
        fin   = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59);
        label = `${this.moisLabels[d.getMonth()]} ${String(d.getFullYear()).slice(2)}`;
      }

      labels.push(label);

      const termCe = formations.filter(f =>
        f.statut_formation === 'termine' && f.updated_at &&
        new Date(f.updated_at) >= debut && new Date(f.updated_at) <= fin
      );

      const assignesDansPeriode = formations.filter(f =>
        f.created_at && new Date(f.created_at) >= debut && new Date(f.created_at) <= fin
      );
      const abandonnesDansPeriode = assignesDansPeriode.filter(f => {
        if (f.statut_formation === 'abandonne') return true;
        if (f.statut_formation !== 'termine' && f.date_fin_prevue && new Date(f.date_fin_prevue) < fin) return true;
        return false;
      });
      tauxAbandonCourbe.push(
        assignesDansPeriode.length > 0
          ? Math.round((abandonnesDansPeriode.length / assignesDansPeriode.length) * 100) : 0
      );

      formationsTerminees.push(termCe.length);
      certificationsObtenues.push(certs.filter(c =>
        c.created_at && new Date(c.created_at) >= debut && new Date(c.created_at) <= fin
      ).length);
      heuresCumulees.push(Math.round(termCe.reduce((s: number, f: any) => s + (f.duree_totale ?? 0), 0) / 60 * 10) / 10);
      progressionParcours.push(0);
      progressionCatalogues.push(0);
      sessionsTerminees.push(0);
      scoresQuiz.push(0);

      const totF  = formations.filter(f => f.created_at && new Date(f.created_at) <= fin).length;
      const termF = formations.filter(f => f.statut_formation === 'termine' && f.updated_at && new Date(f.updated_at) <= fin).length;
      tauxCompletion.push(totF > 0 ? Math.round((termF / totF) * 100) : 0);
    }

    return {
      labels, formationsTerminees, certificationsObtenues, heuresCumulees,
      progressionParcours, progressionCatalogues, sessionsTerminees,
      tauxCompletion, tauxAbandonCourbe, scoresQuiz,
    };
  }

  // ── Onglets & filtres ─────────────────────────────────────────────────────
  setTab(tab: 'aujourdhui' | 'progression' | 'objectifs'): void {
    this.activeTab = tab;
    this.scheduleCharts();
  }

  onPeriodeChange(): void  { this.loadStats(); }
  onAnneeChange(): void    { this.loadStats(); }
  onMoisChange(): void     { this.loadStats(); }
  onTrimestreChange(): void { this.loadStats(); }

  // ── Charts ────────────────────────────────────────────────────────────────
  private scheduleCharts(): void {
    [200, 600, 1500].forEach(delay =>
      setTimeout(() => {
        if (!this.stats) return;
        const firstId = this.getFirstChartId();
        if (firstId && document.getElementById(firstId)) this.initChartsPourOnglet();
      }, delay)
    );
  }

  private getFirstChartId(): string | null {
    if (this.activeTab === 'progression') return 'radial-formations';
    if (this.activeTab === 'objectifs')   return 'chart-donut-demandes';
    return null;
  }

  private destroyAllCharts(): void {
    Object.values(this.charts).forEach(c => { try { c?.destroy(); } catch {} });
    this.charts = {};
  }

  private initChartsPourOnglet(): void {
    if (!this.stats) return;
    const firstId = this.getFirstChartId();
    if (firstId && this.charts[firstId]) return;

    const c = this.stats.courbes;

    if (this.activeTab === 'progression') {

      // ── RADIALS ──────────────────────────────────────────────────────────
      this.renderRadial('radial-formations', this.stats.kpi.formations.taux_completion, '#069b8f');
      this.renderRadial('radial-sessions',   this.stats.kpi.sessions.taux,              '#3b82f6');
      this.renderRadial('radial-parcours',   this.stats.kpi.parcours.progression,       '#7c3aed');
      this.renderRadial('radial-catalogues', this.stats.kpi.catalogues.taux,            '#10b981');

      // ── Taux de complétion global (area) ──
      this.renderChart('chart-completion', this.buildAreaConfig(c.labels, [
        { name: 'Taux de complétion (%)', data: c.tauxCompletion, color: '#069b8f' },
      ], 'Taux de complétion global'));

      // ── Taux d'abandon (area) ──
      this.renderChart('chart-taux-abandon', this.buildAreaConfig(c.labels, [
        { name: "Taux d'abandon (%)", data: c.tauxAbandonCourbe ?? [], color: '#ef4444' },
      ], "Taux d'abandon"));

      // ── Score moyen quiz (histogramme) ──
      if (c.scoresQuiz?.some(v => v > 0)) {
        this.renderChart('chart-scores-quiz-bar', this.buildBarConfig(c.labels, [
          { name: 'Score moyen quiz (%)', data: c.scoresQuiz, color: '#4f46e5' },
        ], 'Score moyen mensuel aux évaluations'));
      }

      // ── Volumes terminés ──
      this.renderChart('chart-formations-terminees', this.buildBarConfig(c.labels,
        [{ name: 'Formations terminées', data: c.formationsTerminees, color: '#10b981' }],
        'Formations terminées'));
      this.renderChart('chart-sessions-terminees', this.buildBarConfig(c.labels,
        [{ name: 'Sessions terminées', data: c.sessionsTerminees ?? [], color: '#3b82f6' }],
        'Sessions terminées'));
      this.renderChart('chart-parcours-termines', this.buildBarConfig(c.labels,
        [{ name: 'Parcours terminés', data: c.progressionParcours, color: '#7c3aed' }],
        'Parcours terminés'));
      this.renderChart('chart-catalogues-termines', this.buildBarConfig(c.labels,
        [{ name: 'Catalogues terminés', data: c.progressionCatalogues, color: '#3b82f6' }],
        'Catalogues terminés'));
      this.renderChart('chart-heures', this.buildBarConfig(c.labels,
        [{ name: 'Heures cumulées', data: c.heuresCumulees, color: '#f59e0b' }],
        'Heures cumulées'));
      this.renderChart('chart-certifications', this.buildBarConfig(c.labels,
        [{ name: 'Certifications obtenues', data: c.certificationsObtenues, color: '#7c3aed' }],
        'Certifications obtenues'));

      // ── Donut quiz ──
      const ev = this.stats.kpi.evaluations;
      if (ev.disponible && ev.nb_passees > 0) {
        this.renderDonut('chart-donut-quiz-perf',
          [ev.nb_reussies, ev.nb_passees - ev.nb_reussies],
          ['Réussis', 'Échoués'], ['#10b981', '#ef4444']
        );
      }
    }

    if (this.activeTab === 'objectifs') {

      // ── Donut Demandes ──
      const d = this.stats.kpi.demandes;
      if (d.total > 0) {
        this.renderDonutNoLegend('chart-donut-demandes',
          [d.validees, d.en_attente, d.refusees, Math.max(0, d.total - d.validees - d.en_attente - d.refusees)],
          ['Validées', 'En attente', 'Refusées', 'Autres'],
          ['#10b981', '#f59e0b', '#ef4444', '#9ca3af']
        );
      }

      // ── Donut Heures ──
      const h = this.stats.kpi.heures;
      if (h.heures_dues_periode > 0) {
        this.renderDonutNoLegend('chart-donut-heures',
          [h.heures_terminees_periode, Math.max(0, h.heures_restantes_periode)],
          ['Terminées', 'Restantes'],
          ['#10b981', '#ef4444']
        );
      } else {
        this.renderDonutNoLegend('chart-donut-heures',
          [1], ['Aucune heure due'], ['#e2e8f0']
        );
      }
    }
  }

  // ── Rendu radial ApexCharts ───────────────────────────────────────────────
  private renderRadial(id: string, valeur: number, color: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      const chart = new ApexCharts(el, {
        series: [Math.min(100, Math.max(0, valeur ?? 0))],
        chart:  { type: 'radialBar', height: 110, sparkline: { enabled: true } },
        plotOptions: {
          radialBar: {
            startAngle: -135, endAngle: 135,
            hollow: { size: '60%' },
            track:  { background: '#f1f5f9', strokeWidth: '100%' },
            dataLabels: {
              name:  { show: false },
              value: {
                offsetY: 6, fontSize: '16px', fontWeight: 800, color,
                formatter: (v: number) => v + '%',
              },
            },
          },
        },
        fill:   { colors: [color] },
        stroke: { lineCap: 'round' },
      });
      chart.render();
      this.charts[id] = chart;
    } catch {}
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

  private buildAreaConfig(labels: string[], series: { name: string; data: number[]; color: string }[], title: string): any {
    return {
      series:  series.map(s => ({ name: s.name, data: s.data })),
      chart:   { type: 'area', height: 200, toolbar: { show: false }, animations: { enabled: true, easing: 'easeinout', speed: 600 } },
      colors:  series.map(s => s.color),
      stroke:  { curve: 'smooth', width: 3 },
      markers: { size: 4, hover: { size: 6 } },
      fill:    { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.03 } },
      xaxis:   { categories: labels, labels: { style: { fontSize: '11px', colors: '#9ca3af' } }, axisBorder: { show: false }, axisTicks: { show: false } },
      yaxis:   { labels: { style: { fontSize: '11px', colors: '#9ca3af' }, formatter: (v: number) => v + '%' }, min: 0, max: 100 },
      grid:    { borderColor: '#f3f4f6', strokeDashArray: 4 },
      tooltip: { theme: 'light', y: { formatter: (v: number) => v + '%' } },
      legend:  { show: false },
      title:   { text: title, align: 'left', style: { fontSize: '13px', fontWeight: 700, color: '#374151' } },
    };
  }

  private buildBarConfig(labels: string[], series: { name: string; data: number[]; color: string }[], title: string): any {
    return {
      series:      series.map(s => ({ name: s.name, data: s.data })),
      chart:       { type: 'bar', height: 200, toolbar: { show: false }, animations: { enabled: true, speed: 600 } },
      colors:      series.map(s => s.color),
      plotOptions: { bar: { borderRadius: 5, columnWidth: '52%', dataLabels: { position: 'top' } } },
      dataLabels:  { enabled: true, offsetY: -20, style: { fontSize: '11px', colors: ['#374151'], fontWeight: 600 }, formatter: (v: number) => v > 0 ? v : '' },
      xaxis:  { categories: labels, labels: { style: { fontSize: '11px', colors: '#9ca3af' } }, axisBorder: { show: false }, axisTicks: { show: false } },
      yaxis:  { labels: { style: { fontSize: '11px', colors: '#9ca3af' } }, min: 0 },
      grid:   { borderColor: '#f3f4f6', strokeDashArray: 4 },
      tooltip:{ theme: 'light' },
      legend: { show: false },
      title:  { text: title, align: 'left', style: { fontSize: '13px', fontWeight: 700, color: '#374151' } },
    };
  }

  // ── Donut AVEC légende ApexCharts (quiz) ──────────────────────────────────
  private renderDonut(id: string, series: number[], labels: string[], colors: string[]): void {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      const total = series.reduce((a, b) => a + b, 0);
      const chart = new ApexCharts(el, {
        series, chart: { type: 'donut', height: 240, toolbar: { show: false } },
        colors, labels,
        legend: {
          position: 'bottom', fontSize: '12px',
          formatter: (val: string, opts: any) => {
            const v   = opts.w.globals.series[opts.seriesIndex];
            const pct = total > 0 ? Math.round((v / total) * 100) : 0;
            return `${val}: ${v} (${pct}%)`;
          },
        },
        dataLabels: {
          enabled: true,
          formatter: (_v: any, opts: any) => {
            const v   = opts.w.globals.series[opts.seriesIndex];
            const pct = total > 0 ? Math.round((v / total) * 100) : 0;
            return pct > 0 ? pct + '%' : '';
          },
        },
        plotOptions: { pie: { donut: { size: '60%' } } },
        tooltip: { theme: 'light', y: { formatter: (v: number) => `${v} (${total > 0 ? Math.round((v / total) * 100) : 0}%)` } },
      });
      chart.render();
      this.charts[id] = chart;
    } catch {}
  }

  // ── Donut SANS légende ApexCharts (légende custom HTML à gauche) ──────────
  private renderDonutNoLegend(id: string, series: number[], labels: string[], colors: string[]): void {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      const total = series.reduce((a, b) => a + b, 0);
      const chart = new ApexCharts(el, {
        series,
        chart: { type: 'donut', height: 220, toolbar: { show: false } },
        colors,
        labels,
        legend: { show: false },
        dataLabels: {
          enabled: true,
          formatter: (_v: any, opts: any) => {
            const v   = opts.w.globals.series[opts.seriesIndex];
            const pct = total > 0 ? Math.round((v / total) * 100) : 0;
            return pct > 0 ? pct + '%' : '';
          },
          style: { fontSize: '12px', fontWeight: 700 },
          dropShadow: { enabled: false },
        },
        plotOptions: {
          pie: {
            donut: {
              size: '62%',
              labels: {
                show: true,
                total: {
                  show: true,
                  label: 'Total',
                  fontSize: '12px',
                  color: '#64748b',
                  formatter: () => String(total),
                },
              },
            },
          },
        },
        stroke: { width: 2, colors: ['#fff'] },
        tooltip: {
          theme: 'light',
          y: { formatter: (v: number) => `${v} (${total > 0 ? Math.round((v / total) * 100) : 0}%)` },
        },
      });
      chart.render();
      this.charts[id] = chart;
    } catch {}
  }

  // ── Getters ──────────────────────────────────────────────────────────────

  get activitesJour():     Activite[] { return this.stats?.activites_jour ?? []; }
  get echeancesUrgentes(): Echeance[] { return (this.stats?.echeances ?? []).filter(e => e.urgent); }
  get echeancesNormales(): Echeance[] { return (this.stats?.echeances ?? []).filter(e => !e.urgent); }
  get hasUrgences():       boolean    { return this.echeancesUrgentes.length > 0; }
  get demandesTotal():     number     { return this.stats?.kpi.demandes.total ?? 0; }

  get tauxCompletionGlobal(): number {
    const global = this.stats?.kpi?.taux_completion_global?.valeur;
    if (global != null && !isNaN(global)) return global;
    return this.stats?.kpi?.formations?.taux_completion ?? 0;
  }

  get hasScoresQuiz(): boolean {
    return (this.stats?.courbes?.scoresQuiz ?? []).some(v => v > 0);
  }

  // ── Compétences visées dans la période ───────────────────────────────────
  get competencesPeriode(): string[] {
    return this.stats?.kpi?.competences_periode?.liste ?? [];
  }

  get competencesPeriodeVisibles(): string[] {
    return this.competencesPeriode.slice(0, 8);
  }

  get competencesPeriodeRestantes(): number {
    return Math.max(0, this.competencesPeriode.length - 8);
  }

  // ── Helpers activités ────────────────────────────────────────────────────
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

  // ── Helpers urgences ─────────────────────────────────────────────────────
  getProgressionColor(v: number | null | undefined): string {
    const val = v ?? 0;
    if (isNaN(val)) return '#9ca3af';
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
    if (j <= 0) return 'Expiré'; if (j === 1) return 'Demain'; return `Dans ${j}j`;
  }
  getTypeLabel(type: Echeance['type']): string {
    return { obligatoire: 'Obligatoire', formation: 'Formation', parcours: 'Parcours', catalogue: 'Catalogue', session: 'Session' }[type] ?? type;
  }
  getTypeColor(type: Echeance['type']): string {
    return { obligatoire: '#ef4444', formation: '#069b8f', parcours: '#7c3aed', catalogue: '#3b82f6', session: '#f59e0b' }[type] ?? '#9ca3af';
  }
  hasProgression(type: Echeance['type']): boolean { return type !== 'catalogue'; }
}