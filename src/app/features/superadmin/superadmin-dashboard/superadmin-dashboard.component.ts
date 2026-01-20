import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DataService } from '../../../shared/service/data/data.service';
import { User } from '../../../shared/models/user.models';
import { UserService } from '../../../shared/service/user/user.service';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
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
export class SuperAdminDashboardComponent implements OnInit {
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

  constructor(
    private router: Router,
    private dataService: DataService,
    private userService: UserService,
    private formationService: FormationService,
    private clientCompanyService: ClientCompanyService
  ) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.isLoading = true;
    
    forkJoin({
      users: this.userService.getUsers(),
      clients: this.clientCompanyService.getClients(),
      formations: this.formationService.getFormations({ page: 1, limit: 1000 }),
      companies: this.clientCompanyService.getCompanies()
    }).subscribe({
      next: (data) => {
        console.log('=== DONNÉES BRUTES RÉCUPÉRÉES ===');
        console.log('Structure complète:', data);
        console.log('Type companies:', typeof data.companies, 'IsArray:', Array.isArray(data.companies));
        console.log('Type clients:', typeof data.clients, 'IsArray:', Array.isArray(data.clients));
        console.log('Type formations:', typeof data.formations, 'IsArray:', Array.isArray(data.formations));
        console.log('Type users:', typeof data.users, 'IsArray:', Array.isArray(data.users));
        
        this.processRealData(data);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement des données:', error);
        this.setDefaultData();
        this.isLoading = false;
      }
    });
  }
private processRealData(data: any): void {
  console.log('=== EXTRACTION DES DONNÉES ===');
  
  // Extraction robuste des données
  let companies: any[] = [];
  let clients: any[] = [];
  let formations: any[] = [];
  let users: any[] = [];

  // Extraction COMPANIES - Structure API retournée
  console.log('📦 Structure companies reçue:', data.companies);
  
  if (Array.isArray(data.companies)) {
    companies = data.companies;
  } else if (data.companies?.entreprises && Array.isArray(data.companies.entreprises)) {
    // ✅ VOTRE API RETOURNE { entreprises: [...] }
    companies = data.companies.entreprises;
  } else if (data.companies?.data && Array.isArray(data.companies.data)) {
    companies = data.companies.data;
  } else if (data.companies?.results && Array.isArray(data.companies.results)) {
    companies = data.companies.results;
  } else if (data.companies?.companies && Array.isArray(data.companies.companies)) {
    companies = data.companies.companies;
  } else if (data.companies?.['hydra:member'] && Array.isArray(data.companies['hydra:member'])) {
    companies = data.companies['hydra:member'];
  } else if (data.companies?.dataList && Array.isArray(data.companies.dataList)) {
    companies = data.companies.dataList;
  } else if (data.companies?.items && Array.isArray(data.companies.items)) {
    companies = data.companies.items;
  } else {
    console.warn('⚠️ Structure companies non reconnue:', data.companies);
  }

  // Extraction CLIENTS
  console.log('📦 Structure clients reçue:', data.clients);
  
  if (Array.isArray(data.clients)) {
    clients = data.clients;
  } else if (data.clients?.clients && Array.isArray(data.clients.clients)) {
    // Même pattern pour clients
    clients = data.clients.clients;
  } else if (data.clients?.data && Array.isArray(data.clients.data)) {
    clients = data.clients.data;
  } else if (data.clients?.results && Array.isArray(data.clients.results)) {
    clients = data.clients.results;
  } else {
    console.warn('⚠️ Structure clients non reconnue:', data.clients);
  }

  // Extraction FORMATIONS
  console.log('📦 Structure formations reçue:', data.formations);
  
  if (Array.isArray(data.formations)) {
    formations = data.formations;
  } else if (data.formations?.formations && Array.isArray(data.formations.formations)) {
    // Même pattern pour formations
    formations = data.formations.formations;
  } else if (data.formations?.data && Array.isArray(data.formations.data)) {
    formations = data.formations.data;
  } else if (data.formations?.results && Array.isArray(data.formations.results)) {
    formations = data.formations.results;
  } else {
    console.warn('⚠️ Structure formations non reconnue:', data.formations);
  }

  // Extraction USERS
  console.log('📦 Structure users reçue:', data.users);
  
  if (Array.isArray(data.users)) {
    users = data.users;
  } else if (data.users?.users && Array.isArray(data.users.users)) {
    // Même pattern pour users
    users = data.users.users;
  } else if (data.users?.data && Array.isArray(data.users.data)) {
    users = data.users.data;
  } else if (data.users?.results && Array.isArray(data.users.results)) {
    users = data.users.results;
  } else {
    console.warn('⚠️ Structure users non reconnue:', data.users);
  }

  console.log('✅ Données extraites:');
  console.log('- Entreprises:', companies.length, companies);
  console.log('- Clients:', clients.length, clients);
  console.log('- Formations:', formations.length, formations);
  console.log('- Utilisateurs:', users.length, users);

  // Calculer les totaux
  this.dashboardData.totalEntreprises = companies.length;
  this.dashboardData.totalClients = clients.length;
  this.dashboardData.totalFormations = formations.length;
  this.dashboardData.totalUtilisateurs = users.length;

  console.log('📊 Totaux calculés:', this.dashboardData);

  // Mettre à jour les cartes
  this.updateStatisticsCards();

  // Générer les entreprises récentes
  if (companies.length > 0) {
    this.generateRecentEntreprises(companies, clients, formations);
  } else {
    console.warn('⚠️ Aucune entreprise à afficher');
    this.recentEntreprises = [];
  }

  // Générer les statistiques mensuelles
  this.generateMonthlyStats(companies, clients, formations, users);
}

  private updateStatisticsCards(): void {
    this.statisticsCards[0].value = this.dashboardData.totalEntreprises;
    this.statisticsCards[1].value = this.dashboardData.totalClients;
    this.statisticsCards[2].value = this.dashboardData.totalFormations;
    this.statisticsCards[3].value = this.dashboardData.totalUtilisateurs;
    
    console.log('🃏 Cartes mises à jour:', this.statisticsCards.map(c => ({ label: c.label, value: c.value })));
  }

  private generateRecentEntreprises(companies: any[], clients: any[], formations: any[]): void {
    console.log('=== GÉNÉRATION ENTREPRISES RÉCENTES ===');
    
    if (!companies || companies.length === 0) {
      this.recentEntreprises = [];
      return;
    }

    // Trier par date de création
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

    console.log('🏢 Entreprises récentes générées:', this.recentEntreprises);
  }

  private generateMonthlyStats(companies: any[], clients: any[], formations: any[], users: any[]): void {
    console.log('=== GÉNÉRATION STATISTIQUES MENSUELLES ===');
    
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
    console.log('📈 Statistiques mensuelles:', stats);
    
    this.updateChart(stats);
  }

  
  private updateChart(stats: StatistiqueMensuelle[]): void {
  this.Statisticschart = {
    ...this.Statisticschart,
    series: [
      { name: 'Entreprises', data: stats.map(s => s.entreprises) },
      { name: 'Clients', data: stats.map(s => s.clients) },
      { name: 'Formations', data: stats.map(s => s.formations) },
      { name: 'Utilisateurs', data: stats.map(s => s.utilisateurs) }
    ],
    xaxis: {
      ...this.Statisticschart.xaxis,
      categories: stats.map(s => s.mois)
    }
  };
  
  console.log('📊 Graphique mis à jour:', this.Statisticschart);
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
    console.log('🔄 Actualisation des données...');
    this.loadDashboardData();
  }
}