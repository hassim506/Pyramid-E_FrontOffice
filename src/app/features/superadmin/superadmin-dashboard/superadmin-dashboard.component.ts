import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { forkJoin, of, Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { AdminRHStatsService } from '../../../shared/service/stat/adminrh-stat.service';
import { SuperAdminDashboardService, SuperAdminStats } from '../../../shared/service/stat/superadmin-dashboard.service';
import { routes } from '../../../shared/service/routes/routes';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

export interface SuperAdminDashboardData {
  totalEntreprises: number;
  totalClients: number;
  totalFormations: number;
  totalUtilisateurs: number;
  statistiquesMensuelles: StatistiqueMensuelle[];
}

export interface StatistiqueMensuelle {
  mois: string;
  entreprises: number;
  clients: number;
  formations: number;
  utilisateurs: number;
}

export interface EntrepriseRecente {
  id: string;
  nom: string;
  logo?: string;
  secteur: string;
  nombreClients: number;
  nombreFormations: number;
  statut: 'active' | 'pending' | 'inactive';
  dateCreation: Date;
}

@Component({
  selector: 'app-superadmin-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    MatDatepickerModule, 
    MatInputModule, 
    MatNativeDateModule, 
    FormsModule, 
    NgApexchartsModule, 
    RouterModule
  ],
  providers: [DecimalPipe],
  templateUrl: './superadmin-dashboard.component.html',
  styleUrls: ['./superadmin-dashboard.component.scss']
})
export class SuperAdminDashboardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  routes = routes;
  
  dashboardData: SuperAdminDashboardData = {
    totalEntreprises: 0,
    totalClients: 0,
    totalFormations: 0,
    totalUtilisateurs: 0,
    statistiquesMensuelles: []
  };

  selectedRange: { startDate: Date | null; endDate: Date | null } | null = null;
  recentEntreprises: EntrepriseRecente[] = [];
  isLoading = true;

  // ── Données AdminRH ──────────────────────────────────────────
  rhMetrics = {
    totalUtilisateurs: 0,
    totalFormateurs: 0,
    totalFormations: 0,
    totalDemandesFormation: 0,
    totalSessionsFormation: 0,
    formationsPubliees: 0,
    tauxCompletionGlobal: 75,
    sessionsMoisCourant: 0,
    heuresConsommees: 0,
    scoreMoyenFormations: 4.2,
    tauxSatisfaction: 88,
    nombreCertifies: 0,
    nombreIncidents: 2
  };

  rhStatisticsCards = [
    { type: 'utilisateurs', label: 'Total Utilisateurs',  value: 0, icon: 'fas fa-users',          color: 'primary', growth: 12, progress: 75 },
    { type: 'formateurs',   label: 'Total Formateurs',    value: 0, icon: 'fas fa-user-tie',        color: 'success', growth: 8,  progress: 60 },
    { type: 'formations',   label: 'Total Formations',    value: 0, icon: 'fas fa-graduation-cap',  color: 'info',    growth: 15, progress: 85 },
    { type: 'demandes',     label: 'Demandes Formation',  value: 0, icon: 'fas fa-file-alt',        color: 'warning', growth: 5,  progress: 45 }
  ];

  get rhMetricsRow1() {
    return [
      { label: 'Formations publiées',    value: this.rhMetrics.formationsPubliees,   icon: 'isax isax-book',     color: 'success', suffix: '' },
      { label: 'Taux complétion global', value: this.rhMetrics.tauxCompletionGlobal, icon: 'isax isax-chart-2',  color: 'info',    suffix: '%' },
      { label: 'Sessions ce mois',       value: this.rhMetrics.sessionsMoisCourant,  icon: 'isax isax-calendar', color: 'primary', suffix: '' },
      { label: 'Heures consommées',      value: this.rhMetrics.heuresConsommees,     icon: 'isax isax-clock',    color: 'warning', suffix: 'h' },
    ];
  }

  get rhMetricsRow2() {
    return [
      { label: 'Score moyen formations', value: this.rhMetrics.scoreMoyenFormations, icon: 'isax isax-star',      color: 'warning', suffix: '/5' },
      { label: 'Taux satisfaction',      value: this.rhMetrics.tauxSatisfaction,     icon: 'isax isax-smiley',    color: 'success', suffix: '%' },
      { label: 'Total certifiés',        value: this.rhMetrics.nombreCertifies,      icon: 'isax isax-award',     color: 'primary', suffix: '' },
      { label: 'Incidents signalés',     value: this.rhMetrics.nombreIncidents,      icon: 'isax isax-warning-2', color: 'danger',  suffix: '' },
    ];
  }

  rhFormationsRecentes: Array<{
    id: number; titre: string; image: string;
    inscrits: number; completes: number; progression: number;
    statut: string; dateCreation: Date;
  }> = [];

  rhChartLegend = [
    { name: 'Formations',   color: '#1D9CFD' },
    { name: 'Utilisateurs', color: '#00BFA5' },
    { name: 'Formateurs',   color: '#FFB64D' },
    { name: 'Sessions',     color: '#E91E63' }
  ];

  rhChartData: any = {
    series: [
      { name: 'Formations',   data: [] },
      { name: 'Utilisateurs', data: [] },
      { name: 'Formateurs',   data: [] },
      { name: 'Sessions',     data: [] }
    ],
    chart:       { height: 350, type: 'area', toolbar: { show: true } },
    dataLabels:  { enabled: false },
    stroke:      { curve: 'smooth', width: 2 },
    xaxis:       { categories: [], axisBorder: { show: false }, axisTicks: { show: false } },
    yaxis:       { title: { text: 'Nombre' } },
    fill: {
      type: 'gradient',
      gradient: { shade: 'light', type: 'vertical', shadeIntensity: 0.1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100, 100, 100] }
    },
    colors: ['#1D9CFD', '#00BFA5', '#FFB64D', '#E91E63'],
    grid: {
      borderColor: '#f1f1f1', strokeDashArray: 3,
      row: { colors: ['transparent', 'transparent'], opacity: 0.5 },
      column: { colors: ['#f8f9fa', 'transparent'], opacity: 1 }
    },
    tooltip: { shared: true, intersect: false, theme: 'light' }
  };

  statisticsCards = [
    {
      type: 'companies',
      label: 'Total Entreprises',
      value: 0,
      icon: 'fas fa-building',
      color: 'primary',
      growth: 12,
      progress: 75
    },
    {
      type: 'clients', 
      label: 'Total Clients',
      value: 0,
      icon: 'fas fa-user-tie',
      color: 'info',
      growth: 8,
      progress: 60
    },
    {
      type: 'formations',
      label: 'Total Formations', 
      value: 0,
      icon: 'fas fa-graduation-cap',
      color: 'success',
      growth: 15,
      progress: 85
    },
    {
      type: 'users',
      label: 'Total Utilisateurs',
      value: 0,
      icon: 'fas fa-users',
      color: 'warning',
      growth: 5,
      progress: 45
    }
  ];

  chartLegend = [
    { name: 'Entreprises', color: '#D4AF37' },
    { name: 'Clients', color: '#006F78' },
    { name: 'Formations', color: '#c45c3e' },
    { name: 'Utilisateurs', color: '#2d5a3d' }
  ];


Statisticschart: any = {
  series: [
    { name: 'Entreprises', data: [] },
    { name: 'Clients', data: [] },
    { name: 'Formations', data: [] },
    { name: 'Utilisateurs', data: [] }
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: { 
      show: true,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true
      }
    },
    sparkline: {
      enabled: false
    }
  },
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  xaxis: {
    categories: [],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    title: { text: 'Nombre' },
    labels: {
      style: {
        fontSize: '12px'
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.1,
      gradientToColors: undefined,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100]
    }
  },
  colors: ['#C8B8A0', '#A8D5BA', '#F7D9C4', '#B4C7E7'], // Couleurs soft et elegantes
  grid: {
    borderColor: '#f1f1f1',
    strokeDashArray: 3,
    row: {
      colors: ['transparent', 'transparent'],
      opacity: 0.5
    },
    column: {
      colors: ['#f8f9fa', 'transparent'],
      opacity: 1
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'light',
    style: {
      fontSize: '12px'
    },
    x: {
      show: true
    }
  },
  plotOptions: {
    area: {
      fillTo: 'end'
    }
  }
};

  // ── Nouvelles métriques superadmin ───────────────────────────────────────
  superStats: SuperAdminStats | null = null;
  superStatsLoading = true;

  // Graphique croissance mensuelle inscriptions
  inscriptionsChart: any = {
    series: [{ name: 'Inscriptions', data: [] }],
    chart:  { height: 160, type: 'bar', toolbar: { show: false }, sparkline: { enabled: false } },
    plotOptions: { bar: { borderRadius: 4, columnWidth: '55%' } },
    dataLabels: { enabled: false },
    xaxis: { categories: [], labels: { style: { fontSize: '11px' } } },
    yaxis: { labels: { style: { fontSize: '11px' } } },
    colors: ['#1D9CFD'],
    grid: { borderColor: '#f1f1f1' },
    tooltip: { theme: 'light' },
  };

  constructor(
    private router: Router,
    private adminRHStatsService: AdminRHStatsService,
    private superAdminDashboardService: SuperAdminDashboardService
  ) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadDashboardData(): void {
    this.isLoading = true;
    this.superStatsLoading = true;

    // Phase 1 : stats légères seulement (pas de getUsers/getFormations sans pagination)
    forkJoin({
      rhStats:      this.adminRHStatsService.getAllStats().pipe(catchError(() => of(null))),
      rhFormations: this.adminRHStatsService.getFormationsRecentes().pipe(catchError(() => of([]))),
      superStats:   this.superAdminDashboardService.getStats().pipe(catchError(() => of(null))),
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.processRhData(data);
        this.processSuperStats(data.superStats);
        this.buildCountsFromStats(data);
        this.isLoading = false;
      },
      error: () => {
        this.setDefaultData();
        this.isLoading = false;
        this.superStatsLoading = false;
      }
    });
  }

  private buildCountsFromStats(data: any): void {
    // Totaux depuis les stats agrégées — pas besoin de charger toutes les listes
    const rh = data.rhStats;
    const su = data.superStats?.data;

    this.dashboardData.totalUtilisateurs = rh?.totalUtilisateurs  ?? su?.total_utilisateurs ?? 0;
    this.dashboardData.totalFormations   = rh?.totalFormations     ?? su?.total_formations   ?? 0;
    this.dashboardData.totalEntreprises  = su?.total_entreprises   ?? 0;
    this.dashboardData.totalClients      = su?.total_clients       ?? 0;

    this.updateStatisticsCards();
    this.generateMonthlyStats([], [], [], []);
  }

  private processSuperStats(res: { status: boolean; data: SuperAdminStats } | null): void {
    this.superStatsLoading = false;
    if (!res?.data) return;
    this.superStats = res.data;

    const cm = res.data.croissance_mensuelle ?? [];
    this.inscriptionsChart = {
      ...this.inscriptionsChart,
      series: [{ name: 'Inscriptions', data: cm.map((m: any) => m.total) }],
      xaxis:  { ...this.inscriptionsChart.xaxis, categories: cm.map((m: any) => m.mois) },
    };
  }

  private processRhData(data: any): void {
    if (data.rhStats) {
      this.rhMetrics.totalUtilisateurs      = data.rhStats.totalUtilisateurs || 0;
      this.rhMetrics.totalFormateurs        = data.rhStats.totalFormateurs || 0;
      this.rhMetrics.totalFormations        = data.rhStats.totalFormations || 0;
      this.rhMetrics.totalDemandesFormation = data.rhStats.totalDemandesFormation || 0;
      this.rhMetrics.totalSessionsFormation = data.rhStats.totalSessionsFormation || 0;
      this.rhMetrics.formationsPubliees     = data.rhStats.totalFormations || 0;
      this.rhMetrics.sessionsMoisCourant    = data.rhStats.totalSessionsFormation || 0;
      this.rhMetrics.heuresConsommees       = (data.rhStats.totalSessionsFormation || 0) * 2;
      this.rhMetrics.nombreCertifies        = Math.floor((data.rhStats.totalUtilisateurs || 0) * 0.35);
    }

    this.rhStatisticsCards[0].value = this.rhMetrics.totalUtilisateurs;
    this.rhStatisticsCards[1].value = this.rhMetrics.totalFormateurs;
    this.rhStatisticsCards[2].value = this.rhMetrics.totalFormations;
    this.rhStatisticsCards[3].value = this.rhMetrics.totalDemandesFormation;

    if (Array.isArray(data.rhFormations)) {
      this.rhFormationsRecentes = data.rhFormations.slice(0, 5).map((f: any) => ({
        id: f.id,
        titre: f.titre || 'Formation sans titre',
        image: f.image || 'assets/img/default-course.svg',
        inscrits: f.inscrits || 0,
        completes: Math.floor((f.inscrits || 0) * 0.6),
        progression: 60,
        statut: f.statut || 'publie',
        dateCreation: new Date(f.dateCreation || Date.now())
      }));
    }

    this.updateRhChart(data.rhMensuel);
  }

  private updateRhChart(mensuelData: any): void {
    const now = new Date();
    const apiData = Array.isArray(mensuelData) ? mensuelData : [];
    const stats: Array<{ mois: string; formations: number; utilisateurs: number; formateurs: number; sessions: number }> = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const label = date.toLocaleDateString('fr-FR', { month: 'short' });
      const monthKey = date.toISOString().slice(0, 7);
      const entry = apiData.find((m: any) => (m.mois || '').startsWith(monthKey));
      stats.push({
        mois:         label.charAt(0).toUpperCase() + label.slice(1),
        formations:   entry?.formations   ?? 0,
        utilisateurs: entry?.utilisateurs ?? 0,
        formateurs:   entry?.formateurs   ?? 0,
        sessions:     entry?.sessions     ?? 0,
      });
    }

    this.rhChartData = {
      ...this.rhChartData,
      series: [
        { name: 'Formations',   data: stats.map(s => s.formations) },
        { name: 'Utilisateurs', data: stats.map(s => s.utilisateurs) },
        { name: 'Formateurs',   data: stats.map(s => s.formateurs) },
        { name: 'Sessions',     data: stats.map(s => s.sessions) }
      ],
      xaxis: { ...this.rhChartData.xaxis, categories: stats.map(s => s.mois) }
    };
  }

  getRhStatutLabel(statut: string): string {
    return ({ publie: 'Publié', brouillon: 'Brouillon', en_cours: 'En cours', archive: 'Archivé' } as any)[statut] || statut;
  }

  trackByRhFormationId(_index: number, f: { id: number }): number {
    return f.id;
  }
private extractArray(data: any, ...keys: string[]): any[] {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    for (const key of keys) {
      if (Array.isArray(data[key])) return data[key];
    }
    return [];
  }

  private processRealData(data: any): void {
    const companies = this.extractArray(data.companies, 'entreprises', 'companies', 'data', 'results', 'items', 'dataList', 'hydra:member');
    const clients   = this.extractArray(data.clients,   'clients',    'data', 'results');
    const formations= this.extractArray(data.formations,'formations', 'data', 'results');
    const users     = this.extractArray(data.users,     'users',      'data', 'results');

    this.dashboardData.totalEntreprises  = companies.length;
    this.dashboardData.totalClients      = clients.length;
    this.dashboardData.totalFormations   = formations.length;
    this.dashboardData.totalUtilisateurs = users.length;

    this.updateStatisticsCards();
    this.generateRecentEntreprises(companies, clients, formations);
    this.generateMonthlyStats(companies, clients, formations, users);
  }

  private updateStatisticsCards(): void {
    this.statisticsCards[0].value = this.dashboardData.totalEntreprises;
    this.statisticsCards[1].value = this.dashboardData.totalClients;
    this.statisticsCards[2].value = this.dashboardData.totalFormations;
    this.statisticsCards[3].value = this.dashboardData.totalUtilisateurs;
  }

  private generateRecentEntreprises(companies: any[], clients: any[], formations: any[]): void {
    if (!companies || companies.length === 0) {
      this.recentEntreprises = [];
      return;
    }

    const sortedCompanies = [...companies]
      .filter(company => company && company.id)
      .sort((a, b) => {
        const dateA = new Date(a.dateCreation || a.created_at || a.createdAt || a.date_creation || Date.now()).getTime();
        const dateB = new Date(b.dateCreation || b.created_at || b.createdAt || b.date_creation || Date.now()).getTime();
        return dateB - dateA;
      })
      .slice(0, 5);

    this.recentEntreprises = sortedCompanies.map(company => {
      const companyId = company.id?.toString();
      
      const nombreClients = clients.filter(c => 
        c.entreprise_id === companyId || 
        c.company_id === companyId || 
        c.companyId === companyId
      ).length;

      const nombreFormations = formations.filter(f => 
        f.entreprise_id === companyId || 
        f.company_id === companyId || 
        f.companyId === companyId
      ).length;

      return {
        id: companyId,
        nom: company.nom || company.name || company.company_name || 'Entreprise sans nom',
        logo: company.logo || company.avatar,
        secteur: company.secteur || company.industry || company.sector || 'Non spécifié',
        nombreClients,
        nombreFormations,
        statut: (company.statut || company.status || company.state || 'active') as 'active' | 'pending' | 'inactive',
        dateCreation: new Date(company.dateCreation || company.created_at || company.createdAt || company.date_creation)
      };
    });
  }

  private generateMonthlyStats(companies: any[], clients: any[], formations: any[], users: any[]): void {
    const currentDate = new Date();
    const stats: StatistiqueMensuelle[] = [];
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const monthName = date.toLocaleDateString('fr-FR', { month: 'short' });
      const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
      const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);

      const entreprisesCount = companies.filter(c => {
        const createdDate = new Date(c.dateCreation || c.created_at || c.createdAt || c.date_creation);
        return createdDate >= monthStart && createdDate <= monthEnd;
      }).length;

      const clientsCount = clients.filter(c => {
        const createdDate = new Date(c.dateCreation || c.created_at || c.createdAt || c.date_creation);
        return createdDate >= monthStart && createdDate <= monthEnd;
      }).length;

      const formationsCount = formations.filter(f => {
        const createdDate = new Date(f.dateCreation || f.created_at || f.createdAt || f.date_creation);
        return createdDate >= monthStart && createdDate <= monthEnd;
      }).length;

      const utilisateursCount = users.filter(u => {
        const createdDate = new Date(u.dateCreation || u.created_at || u.createdAt || u.date_creation);
        return createdDate >= monthStart && createdDate <= monthEnd;
      }).length;

      stats.push({
        mois: monthName.charAt(0).toUpperCase() + monthName.slice(1),
        entreprises: entreprisesCount,
        clients: clientsCount,
        formations: formationsCount,
        utilisateurs: utilisateursCount
      });
    }

    this.dashboardData.statistiquesMensuelles = stats;
    this.updateChart(stats);
  }

  
  private updateChart(stats: StatistiqueMensuelle[]): void {
    this.Statisticschart = {
      ...this.Statisticschart,
      series: [
        { name: 'Entreprises',  data: stats.map(s => s.entreprises) },
        { name: 'Clients',      data: stats.map(s => s.clients) },
        { name: 'Formations',   data: stats.map(s => s.formations) },
        { name: 'Utilisateurs', data: stats.map(s => s.utilisateurs) }
      ],
      xaxis: { ...this.Statisticschart.xaxis, categories: stats.map(s => s.mois) }
    };
  }

  private setDefaultData(): void {
    this.dashboardData = {
      totalEntreprises: 0,
      totalClients: 0,
      totalFormations: 0,
      totalUtilisateurs: 0,
      statistiquesMensuelles: []
    };
    
    this.updateStatisticsCards();
    this.recentEntreprises = [];
    
    this.Statisticschart = {
      ...this.Statisticschart,
      series: [
        { name: 'Entreprises', data: [] },
        { name: 'Clients', data: [] },
        { name: 'Formations', data: [] },
        { name: 'Utilisateurs', data: [] }
      ],
      xaxis: { categories: [] }
    };
  }

  trackByCompanyId(index: number, company: EntrepriseRecente): string {
    return company.id;
  }

  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      'active': 'Actif',
      'pending': 'En attente',
      'inactive': 'Inactif'
    };
    return labels[status] || status;
  }

  getRelativeDate(date: Date): string {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - new Date(date).getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Aujourd'hui";
    if (diffDays === 1) return 'Hier';
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    if (diffDays < 30) return `Il y a ${Math.ceil(diffDays / 7)} semaines`;
    return `Il y a ${Math.ceil(diffDays / 30)} mois`;
  }

  onDateRangeChange(dateRange: { startDate: Date | null; endDate: Date | null }): void {
    this.selectedRange = dateRange;
    console.log('📅 Filtrage des données pour la période:', dateRange);
    // Implémenter le filtrage par date si nécessaire
  }

  refreshData(): void {
    this.loadDashboardData();
  }
}