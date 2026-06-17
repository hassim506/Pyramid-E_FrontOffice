/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AdminRHStatsService, AdminRHDashboardStats } from '../../../shared/service/stat/adminrh-stat.service';
import { routes } from '../../../shared/service/routes/routes';

export interface FormationRecente {
  id: string | number;
  titre: string;
  image?: string;
  inscrits: number;
  completes?: number;
  progression: number;
  statut: 'publie' | 'brouillon' | 'en_cours' | 'archive';
  dateCreation: Date;
}

export interface StatistiqueMensuelle {
  mois: string;
  formations: number;
  utilisateurs: number;
  formateurs: number;
  sessions: number;
}

export interface AdminRHDashboardMetrics {
  totalUtilisateurs: number;
  totalFormateurs: number;
  totalFormations: number;
  totalDemandesFormation: number;
  totalSessionsFormation: number;
  formationsPubliees: number;
  tauxCompletionGlobal: number;
  sessionsMoisCourant: number;
  heuresConsommees: number;
  scoreMoyenFormations: number;
  tauxSatisfaction: number;
  nombreCertifies: number;
  nombreIncidents: number;
}

@Component({
  selector: 'app-adminrh-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NgApexchartsModule,
    RouterModule
  ],
  providers: [DecimalPipe],
  templateUrl: './adminrh-dashboard.component.html',
  styleUrls: ['./adminrh-dashboard.component.scss']
})
export class AdminrhDashboardComponent implements OnInit {
  routes = routes;

  isLoading = true;
  dashboardStatsLoading = true;
  formationsRecentes: FormationRecente[] = [];
  statistiquesMensuelles: StatistiqueMensuelle[] = [];

  dashboardStats: AdminRHDashboardStats | null = null;

  metrics: AdminRHDashboardMetrics = {
    totalUtilisateurs: 0,
    totalFormateurs: 0,
    totalFormations: 0,
    totalDemandesFormation: 0,
    totalSessionsFormation: 0,
    formationsPubliees: 0,
    tauxCompletionGlobal: 0,
    sessionsMoisCourant: 0,
    heuresConsommees: 0,
    scoreMoyenFormations: 0,
    tauxSatisfaction: 0,
    nombreCertifies: 0,
    nombreIncidents: 0
  };

  statisticsCards = [
    { type: 'utilisateurs', label: 'Total Utilisateurs',   value: 0, icon: 'fas fa-users',           color: 'primary', growth: 0, progress: 75 },
    { type: 'formateurs',   label: 'Total Formateurs',     value: 0, icon: 'fas fa-user-tie',        color: 'success', growth: 0, progress: 60 },
    { type: 'formations',   label: 'Total Formations',     value: 0, icon: 'fas fa-graduation-cap',  color: 'info',    growth: 0, progress: 85 },
    { type: 'demandes',     label: 'Demandes Formation',   value: 0, icon: 'fas fa-file-alt',        color: 'warning', growth: 0, progress: 45 }
  ];

  get metricsCardsRow1() {
    const s = this.dashboardStats;
    return [
      { label: 'Formations publiées',     value: this.metrics.formationsPubliees,        icon: 'isax isax-book',       color: 'success', suffix: '' },
      { label: 'Taux complétion global',  value: s?.taux_completion_global  ?? this.metrics.tauxCompletionGlobal, icon: 'isax isax-chart-2', color: 'info', suffix: '%' },
      { label: 'Heures consommées',       value: s?.total_heures_consommees ?? this.metrics.heuresConsommees,     icon: 'isax isax-clock',   color: 'warning', suffix: 'h' },
      { label: 'Certifications délivrées', value: s?.total_certifications   ?? this.metrics.nombreCertifies,     icon: 'isax isax-award',   color: 'primary', suffix: '' },
    ];
  }

  get metricsCardsRow2() {
    const s = this.dashboardStats;
    return [
      { label: 'Score satisfaction',      value: s?.score_satisfaction  ?? this.metrics.tauxSatisfaction, icon: 'isax isax-star',     color: 'warning', suffix: '/100' },
      { label: 'Taux participation',       value: s?.taux_participation  ?? 0,   icon: 'isax isax-people',    color: 'success', suffix: '%' },
      { label: 'Taux abandon parcours',    value: s?.taux_abandon        ?? 0,   icon: 'isax isax-warning-2', color: 'danger',  suffix: '%' },
      { label: 'Heures / collaborateur',   value: s?.heures_par_collaborateur ?? 0, icon: 'isax isax-clock',  color: 'info',    suffix: 'h' },
    ];
  }

  chartLegend = [
    { name: 'Formations',  color: '#1D9CFD' },
    { name: 'Utilisateurs', color: '#00BFA5' },
    { name: 'Formateurs',   color: '#FFB64D' },
    { name: 'Sessions',     color: '#E91E63' }
  ];

  chartData: any = {
    series: [
      { name: 'Formations',   data: [] },
      { name: 'Utilisateurs', data: [] },
      { name: 'Formateurs',   data: [] },
      { name: 'Sessions',     data: [] }
    ],
    chart: { height: 350, type: 'area', toolbar: { show: true } },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    xaxis: { categories: [], axisBorder: { show: false }, axisTicks: { show: false } },
    yaxis: { title: { text: 'Nombre' } },
    fill: {
      type: 'gradient',
      gradient: { shade: 'light', type: 'vertical', shadeIntensity: 0.1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100, 100, 100] }
    },
    colors: ['#1D9CFD', '#00BFA5', '#FFB64D', '#E91E63'],
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 3,
      row: { colors: ['transparent', 'transparent'], opacity: 0.5 },
      column: { colors: ['#f8f9fa', 'transparent'], opacity: 1 }
    },
    tooltip: { shared: true, intersect: false, theme: 'light' }
  };

  inscriptionsChart: any = {
    series: [{ name: 'Inscriptions', data: [] }],
    chart: { height: 180, type: 'bar', toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 4, columnWidth: '55%' } },
    dataLabels: { enabled: false },
    xaxis: { categories: [] },
    colors: ['#1D9CFD'],
    grid: { borderColor: '#f1f1f1' },
    tooltip: { theme: 'light' }
  };

  constructor(private adminRHStatsService: AdminRHStatsService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.isLoading = true;
    this.dashboardStatsLoading = true;

    forkJoin({
      stats:          this.adminRHStatsService.getAllStats().pipe(catchError(() => of(null))),
      dashboardStats: this.adminRHStatsService.getDashboardStats().pipe(catchError(() => of(null))),
      formations:     this.adminRHStatsService.getFormationsRecentes().pipe(catchError(() => of([]))),
      mensuel:        this.adminRHStatsService.getFormationsParAnnee().pipe(catchError(() => of([])))
    }).subscribe({
      next: (data) => {
        this.processRealData(data);
        this.isLoading = false;
        this.dashboardStatsLoading = false;
      },
      error: () => {
        this.setDefaultData();
        this.isLoading = false;
        this.dashboardStatsLoading = false;
      }
    });
  }

  private processRealData(data: any): void {
    if (data.stats) {
      this.metrics.totalUtilisateurs      = data.stats.totalUtilisateurs      || 0;
      this.metrics.totalFormateurs        = data.stats.totalFormateurs        || 0;
      this.metrics.totalFormations        = data.stats.totalFormations        || 0;
      this.metrics.totalDemandesFormation = data.stats.totalDemandesFormation || 0;
      this.metrics.totalSessionsFormation = data.stats.totalSessionsFormation || 0;
    }

    if (data.dashboardStats) {
      this.dashboardStats = data.dashboardStats;
      this.metrics.tauxCompletionGlobal = data.dashboardStats.taux_completion_global ?? 0;
      this.metrics.heuresConsommees     = data.dashboardStats.total_heures_consommees ?? 0;
      this.metrics.nombreCertifies      = data.dashboardStats.total_certifications ?? 0;
      this.metrics.tauxSatisfaction     = data.dashboardStats.score_satisfaction ?? 0;

      if (data.dashboardStats.croissance_mensuelle?.length) {
        this.inscriptionsChart = {
          ...this.inscriptionsChart,
          series: [{ name: 'Inscriptions', data: data.dashboardStats.croissance_mensuelle.map((m: any) => m.total) }],
          xaxis: { categories: data.dashboardStats.croissance_mensuelle.map((m: any) => m.mois) }
        };
      }
    }

    this.metrics.formationsPubliees = this.metrics.totalFormations;
    this.updateStatisticsCards();

    if (Array.isArray(data.formations) && data.formations.length > 0) {
      this.formationsRecentes = data.formations.slice(0, 5).map((f: any) => ({
        id: f.id,
        titre: f.titre || 'Formation sans titre',
        image: f.image,
        inscrits: f.inscrits || 0,
        completes: Math.floor((f.inscrits || 0) * 0.6),
        progression: 60,
        statut: f.statut || 'publie',
        dateCreation: new Date(f.dateCreation || Date.now())
      }));
    } else {
      this.formationsRecentes = [];
    }

    this.generateMonthlyStats(data.mensuel);
  }

  private generateMonthlyStats(mensuelData: any): void {
    const now = new Date();
    const stats: StatistiqueMensuelle[] = [];
    const apiData = Array.isArray(mensuelData) ? mensuelData : [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const label = date.toLocaleDateString('fr-FR', { month: 'short' });
      const monthKey = date.toISOString().slice(0, 7); // "2025-06"
      const entry = apiData.find((m: any) => (m.mois || '').startsWith(monthKey));
      stats.push({
        mois:         label.charAt(0).toUpperCase() + label.slice(1),
        formations:   entry?.formations   ?? 0,
        utilisateurs: entry?.utilisateurs ?? 0,
        formateurs:   entry?.formateurs   ?? 0,
        sessions:     entry?.sessions     ?? 0,
      });
    }

    this.statistiquesMensuelles = stats;
    this.updateChart(stats);
  }

  private updateChart(stats: StatistiqueMensuelle[]): void {
    this.chartData = {
      ...this.chartData,
      series: [
        { name: 'Formations',   data: stats.map(s => s.formations) },
        { name: 'Utilisateurs', data: stats.map(s => s.utilisateurs) },
        { name: 'Formateurs',   data: stats.map(s => s.formateurs) },
        { name: 'Sessions',     data: stats.map(s => s.sessions) }
      ],
      xaxis: { ...this.chartData.xaxis, categories: stats.map(s => s.mois) }
    };
  }

  private updateStatisticsCards(): void {
    this.statisticsCards[0].value = this.metrics.totalUtilisateurs;
    this.statisticsCards[1].value = this.metrics.totalFormateurs;
    this.statisticsCards[2].value = this.metrics.totalFormations;
    this.statisticsCards[3].value = this.metrics.totalDemandesFormation;
  }

  private setDefaultData(): void {
    this.updateStatisticsCards();
    this.formationsRecentes = [];
    this.chartData = {
      ...this.chartData,
      series: [
        { name: 'Formations',   data: [] },
        { name: 'Utilisateurs', data: [] },
        { name: 'Formateurs',   data: [] },
        { name: 'Sessions',     data: [] }
      ],
      xaxis: { ...this.chartData.xaxis, categories: [] }
    };
  }

  trackByFormationId(_index: number, formation: FormationRecente): string | number {
    return formation.id;
  }

  getRelativeDate(date: Date): string {
    const diff = Math.ceil(Math.abs(new Date().getTime() - new Date(date).getTime()) / 86400000);
    if (diff === 0) return "Aujourd'hui";
    if (diff === 1) return 'Hier';
    if (diff < 7) return `Il y a ${diff} jours`;
    if (diff < 30) return `Il y a ${Math.ceil(diff / 7)} semaines`;
    return `Il y a ${Math.ceil(diff / 30)} mois`;
  }

  getStatutLabel(statut: string): string {
    const map: Record<string, string> = { publie: 'Publié', brouillon: 'Brouillon', archive: 'Archivé', en_cours: 'En cours' };
    return map[statut?.toLowerCase()] || statut;
  }

  refreshDashboard(): void {
    this.loadDashboardData();
  }
}
