/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexPlotOptions,
  ApexLegend,
  ApexYAxis,
  ApexFill,
  ApexGrid,
  ApexMarkers
} from "ng-apexcharts";
import { bestSellingCourses } from '../../../shared/models/model';
import { routes } from '../../../shared/service/routes/routes';
import { UserService } from '../../../shared/service/user/user.service';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DateRangePickerComponent } from '../../layouts/date-range-picker/date-range-picker.component';
import { AdminRHStatsService, AdminRHStats } from '../../../shared/service/stat/adminrh-stat.service';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: ApexStroke | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  fill: ApexFill | any;
  legend: ApexLegend | any;
  grid: ApexGrid | any;
  markers: ApexMarkers | any;
};

export interface FormationRecente {
  id: number;
  titre: string;
  image: string;
  inscrits: number;
  statut: string;
}

export interface FormationsParMois {
  mois: string;
  count: number;
}

@Component({
  selector: 'app-adminrh-dashboard',
  templateUrl: './adminrh-dashboard.component.html',
  styleUrls: ['./adminrh-dashboard.component.scss'],
  imports: [CommonModule, RouterLink, NgApexchartsModule, DateRangePickerComponent]
})
export class AdminrhDashboardComponent implements OnInit {
  public routes = routes;

  // Statistiques du dashboard
  stats: AdminRHStats = {
    totalUtilisateurs: 0,
    totalFormations: 0,
    totalFormateurs: 0,
    totalDemandesFormation: 0,
    totalSessionsFormation: 0
  };

  // États de chargement
  isLoading = true;
  isLoadingChart = true;
  isLoadingFormations = true;

  // Formations récentes
  formationsRecentes: FormationRecente[] = [];

  // Données du graphique
  formationsParMois: FormationsParMois[] = [];

  @ViewChild("chart") chart!: ChartComponent;
  public Earningchart!: Partial<ChartOptions>;
  public ColumnCharts!: Partial<ChartOptions>;
  public bestSellingCourses: bestSellingCourses[] = [];

  constructor(
    private adminRHStatsService: AdminRHStatsService
  ) {
    this.initializeCharts();
  }

  ngOnInit(): void {
    this.loadDashboardStats();
    this.loadFormationsParAnnee();
    this.loadFormationsRecentes();
  }

  /**
   * Charger les statistiques du dashboard
   */
  loadDashboardStats(): void {
    this.isLoading = true;
    this.adminRHStatsService.getAllStats().subscribe({
      next: (data: AdminRHStats) => {
        this.stats = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des statistiques:', error);
        this.isLoading = false;
        // Valeurs par défaut en cas d'erreur
        this.stats = {
          totalUtilisateurs: 0,
          totalFormations: 0,
          totalFormateurs: 0,
          totalDemandesFormation: 0,
          totalSessionsFormation: 0
        };
      }
    });
  }

  /**
   * Charger les données du graphique des formations par année
   */
  loadFormationsParAnnee(): void {
    this.isLoadingChart = true;
    this.adminRHStatsService.getFormationsParAnnee().subscribe({
      next: (data: FormationsParMois[]) => {
        this.formationsParMois = data;
        this.updateEarningChart(data);
        this.isLoadingChart = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des formations par année:', error);
        this.isLoadingChart = false;
        // Données par défaut
        this.updateEarningChart([]);
      }
    });
  }

  /**
   * Charger les formations récentes
   */
  loadFormationsRecentes(): void {
    this.isLoadingFormations = true;
    this.adminRHStatsService.getFormationsRecentes().subscribe({
      next: (data: FormationRecente[]) => {
        this.formationsRecentes = data;
        this.isLoadingFormations = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des formations récentes:', error);
        this.isLoadingFormations = false;
        this.formationsRecentes = [];
      }
    });
  }

  /**
   * Mettre à jour le graphique avec les données du backend
   */
  updateEarningChart(data: FormationsParMois[]): void {
    const mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    const counts = new Array(12).fill(0);

    // Remplir les données reçues du backend
    data.forEach(item => {
      const moisIndex = this.getMoisIndex(item.mois);
      if (moisIndex !== -1) {
        counts[moisIndex] = item.count;
      }
    });

    this.Earningchart = {
      ...this.Earningchart,
      series: [{
        name: 'Formations',
        data: counts
      }],
      xaxis: {
        categories: mois,
        labels: {
          style: {
            colors: '#4D4D4D',
            fontSize: '13px',
          }
        }
      }
    };
  }

  /**
   * Obtenir l'index du mois
   */
  getMoisIndex(mois: string): number {
    const moisMap: { [key: string]: number } = {
      'janvier': 0, 'jan': 0, '01': 0,
      'février': 1, 'fev': 1, 'feb': 1, '02': 1,
      'mars': 2, 'mar': 2, '03': 2,
      'avril': 3, 'avr': 3, 'apr': 3, '04': 3,
      'mai': 4, 'may': 4, '05': 4,
      'juin': 5, 'jun': 5, '06': 5,
      'juillet': 6, 'jul': 6, '07': 6,
      'août': 7, 'aou': 7, 'aug': 7, '08': 7,
      'septembre': 8, 'sep': 8, '09': 8,
      'octobre': 9, 'oct': 9, '10': 9,
      'novembre': 10, 'nov': 10, '11': 10,
      'décembre': 11, 'dec': 11, '12': 11
    };
    return moisMap[mois.toLowerCase()] ?? -1;
  }

  /**
   * Initialiser les configurations des graphiques
   */
  initializeCharts(): void {
    this.Earningchart = {
      chart: {
        height: 290,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          horizontal: false,
          endingShape: 'rounded'
        },
      },
      series: [{
        name: 'Formations',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }],
      xaxis: {
        categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
        labels: {
          style: {
            colors: '#4D4D4D',
            fontSize: '13px',
          }
        }
      },
      yaxis: {
        labels: {
          offsetX: -15,
          style: {
            colors: '#4D4D4D',
            fontSize: '13px',
          }
        }
      },
      grid: {
        borderColor: '#4D4D4D',
        strokeDashArray: 5
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'linear',
          shadeIntensity: 0.35,
          gradientToColors: ['#392C7D'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
          angle: 90
        }
      },
    };

    this.ColumnCharts = {
      series: [
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          color: "#1D9CFD"
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          borderRadius: 7
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ['Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct']
      },
      fill: {
        opacity: 1
      },
      grid: {
        show: false,
      },
    };
  }

  /**
   * Rafraîchir toutes les données du dashboard
   */
  refreshDashboard(): void {
    this.loadDashboardStats();
    this.loadFormationsParAnnee();
    this.loadFormationsRecentes();
  }

  /**
   * Gestion du filtre par date
   */
  onDateRangeChange(dateRange: { startDate: Date, endDate: Date }): void {
    this.adminRHStatsService.getFormationsParPeriode(dateRange.startDate, dateRange.endDate).subscribe({
      next: (data: FormationsParMois[]) => {
        this.updateEarningChart(data);
      },
      error: (error) => {
        console.error('Erreur lors du filtrage par date:', error);
      }
    });
  }

  /**
   * Toggle class pour les éléments interactifs
   */
  public isClassAdded: boolean[] = [false];

  toggleClass(index: number): void {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }

  /**
   * Obtenir le libellé du statut
   */
  getStatutLabel(statut: string): string {
    const statutsMap: { [key: string]: string } = {
      'publie': 'Publié',
      'brouillon': 'Brouillon',
      'archive': 'Archivé',
      'en_cours': 'En cours',
      'termine': 'Terminé'
    };
    return statutsMap[statut.toLowerCase()] || statut;
  }

  /**
   * Obtenir la classe CSS du statut
   */
  getStatutClass(statut: string): string {
    const classesMap: { [key: string]: string } = {
      'publie': 'badge bg-success',
      'brouillon': 'badge bg-warning',
      'archive': 'badge bg-secondary',
      'en_cours': 'badge bg-info',
      'termine': 'badge bg-primary'
    };
    return classesMap[statut.toLowerCase()] || 'badge bg-secondary';
  }
}