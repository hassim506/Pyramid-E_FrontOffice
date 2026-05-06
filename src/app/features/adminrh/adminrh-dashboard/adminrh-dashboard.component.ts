/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AdminRHStatsService, AdminRHStats } from '../../../shared/service/stat/adminrh-stat.service';
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

  // Formations & Sessions
  formationsPubliees: number;
  tauxCompletionGlobal: number;
  sessionsMoisCourant: number;
  heuresConsommees: number;

  // Qualité & Performance
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
  formationsRecentes: FormationRecente[] = [];
  statistiquesMensuelles: StatistiqueMensuelle[] = [];

  // Métriques principales
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

  // Cartes statistiques principales
  statisticsCards = [
    { type: 'utilisateurs', label: 'Total Utilisateurs',   value: 0, icon: 'fas fa-users',           color: 'primary', growth: 12, progress: 75 },
    { type: 'formateurs',   label: 'Total Formateurs',     value: 0, icon: 'fas fa-user-tie',        color: 'success', growth: 8,  progress: 60 },
    { type: 'formations',   label: 'Total Formations',     value: 0, icon: 'fas fa-graduation-cap',  color: 'info',    growth: 15, progress: 85 },
    { type: 'demandes',     label: 'Demandes Formation',   value: 0, icon: 'fas fa-file-alt',        color: 'warning', growth: 5,  progress: 45 }
  ];

  // Cartes métriques Formations & Sessions
  get metricsCardsRow1() {
    return [
      { label: 'Formations publiées',     value: this.metrics.formationsPubliees,      icon: 'isax isax-book',       color: 'success', suffix: '' },
      { label: 'Taux complétion global',  value: this.metrics.tauxCompletionGlobal,    icon: 'isax isax-chart-2',    color: 'info',    suffix: '%' },
      { label: 'Sessions ce mois',        value: this.metrics.sessionsMoisCourant,     icon: 'isax isax-calendar',   color: 'primary', suffix: '' },
      { label: 'Heures consommées',       value: this.metrics.heuresConsommees,        icon: 'isax isax-clock',      color: 'warning', suffix: 'h' },
    ];
  }

  // Cartes métriques Qualité & Performance
  get metricsCardsRow2() {
    return [
      { label: 'Score moyen formations',  value: this.metrics.scoreMoyenFormations,    icon: 'isax isax-star',       color: 'warning', suffix: '/5' },
      { label: 'Taux satisfaction',       value: this.metrics.tauxSatisfaction,        icon: 'isax isax-smiley',     color: 'success', suffix: '%' },
      { label: 'Total certifiés',         value: this.metrics.nombreCertifies,         icon: 'isax isax-award',      color: 'primary', suffix: '' },
      { label: 'Incidents signalés',      value: this.metrics.nombreIncidents,         icon: 'isax isax-warning-2',  color: 'danger',  suffix: '' },
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
    chart: {
      height: 350,
      type: 'area',
      toolbar: { show: true }
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    xaxis: { categories: [], axisBorder: { show: false }, axisTicks: { show: false } },
    yaxis: { title: { text: 'Nombre' } },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
      }
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

  constructor(
    private adminRHStatsService: AdminRHStatsService
  ) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.isLoading = true;

    forkJoin({
      stats: this.adminRHStatsService.getAllStats(),
      formations: this.adminRHStatsService.getFormationsRecentes().pipe(catchError(() => of([]))),
      mensuel: this.adminRHStatsService.getFormationsParAnnee().pipe(catchError(() => of([])))
    }).subscribe({
      next: (data) => {
        this.processRealData(data);
        this.isLoading = false;
      },
      error: () => {
        this.setDefaultData();
        this.isLoading = false;
      }
    });
  }

  private processRealData(data: any): void {
    // Charger les statistiques de base
    if (data.stats) {
      this.metrics.totalUtilisateurs = data.stats.totalUtilisateurs || 0;
      this.metrics.totalFormateurs = data.stats.totalFormateurs || 0;
      this.metrics.totalFormations = data.stats.totalFormations || 0;
      this.metrics.totalDemandesFormation = data.stats.totalDemandesFormation || 0;
      this.metrics.totalSessionsFormation = data.stats.totalSessionsFormation || 0;
    }

    // Mettre à jour les cartes statistiques
    this.updateStatisticsCards();

    // Formations publiées
    this.metrics.formationsPubliees = Math.max(0, this.metrics.totalFormations);

    // Taux de complétion (exemple : 75%)
    this.metrics.tauxCompletionGlobal = 75;

    // Sessions du mois
    this.metrics.sessionsMoisCourant = this.metrics.totalSessionsFormation;

    // Heures consommées
    this.metrics.heuresConsommees = this.metrics.totalSessionsFormation * 2;

    // Score moyen
    this.metrics.scoreMoyenFormations = 4.2;

    // Taux satisfaction
    this.metrics.tauxSatisfaction = 88;

    // Certifiés
    this.metrics.nombreCertifies = Math.floor(this.metrics.totalUtilisateurs * 0.35);

    // Incidents
    this.metrics.nombreIncidents = 2;

    // Traiter les formations récentes
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

    // Générer les statistiques mensuelles
    this.generateMonthlyStats(data.mensuel);
  }

  private generateMonthlyStats(mensuelData: any): void {
    const now = new Date();
    const stats: StatistiqueMensuelle[] = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const label = date.toLocaleDateString('fr-FR', { month: 'short' });

      stats.push({
        mois: label.charAt(0).toUpperCase() + label.slice(1),
        formations: Math.floor(Math.random() * 10) + 5,
        utilisateurs: Math.floor(Math.random() * 50) + 20,
        formateurs: Math.floor(Math.random() * 5) + 2,
        sessions: Math.floor(Math.random() * 8) + 3
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

  trackByFormationId(index: number, formation: FormationRecente): string | number {
    return formation.id;
  }

  getStatusLabel(status: string): string {
    return ({
      publie: 'Publié',
      brouillon: 'Brouillon',
      en_cours: 'En cours',
      archive: 'Archivé'
    } as any)[status] || status;
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
    const statutsMap: { [key: string]: string } = {
      'publie': 'Publié',
      'brouillon': 'Brouillon',
      'archive': 'Archivé',
      'en_cours': 'En cours'
    };
    return statutsMap[statut.toLowerCase()] || statut;
  }

  refreshDashboard(): void {
    this.loadDashboardData();
  }
}
