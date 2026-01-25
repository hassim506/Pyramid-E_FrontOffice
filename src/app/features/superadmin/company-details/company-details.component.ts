import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Company } from '../../../shared/models/client-company.models';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { UserService } from '../../../shared/service/authentification/user.service';

@Component({
  selector: 'app-company-details',
  imports: [TitleCasePipe, CommonModule],
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company | null = null;
  loading: boolean = true;
  error: string = '';
  employeeCount: number = 0;
  employees: any[] = []; // Liste des employés (optionnel)
  loadingEmployees: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientCompanyService: ClientCompanyService,
    private userService: UserService 
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const companyId = +params['id'];
      if (companyId) {
        this.loadCompanyDetails(companyId);
      }
    });
  }

  loadCompanyDetails(id: number) {
    this.loading = true;
    this.error = '';
    
    // Charger les détails de l'entreprise et le nombre d'employés en parallèle
    forkJoin({
      company: this.clientCompanyService.getCompany(id),
      employees: this.userService.getUsersByCompany(id)
    }).subscribe({
      next: (response) => {
        // Charger les détails de l'entreprise
        this.company = response.company.entreprise || response.company.data || response.company;
        
        // Charger les employés
        const employeesData = response.employees.users || response.employees.data || response.employees;
        this.employees = Array.isArray(employeesData) ? employeesData : [];
        this.employeeCount = this.employees.length;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement:', error);
        this.error = 'Erreur lors du chargement des données';
        this.loading = false;
      }
    });
  }

  // Méthode alternative si vous voulez charger les employés séparément
  loadEmployeeCount(companyId: number) {
    this.loadingEmployees = true;
    
    this.userService.getUsersByCompany(companyId).subscribe({
      next: (response) => {
        const employeesData = response.users || response.data || response;
        this.employees = Array.isArray(employeesData) ? employeesData : [];
        this.employeeCount = this.employees.length;
        this.loadingEmployees = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des employés:', error);
        this.employeeCount = 0;
        this.loadingEmployees = false;
      }
    });
  }

  // Méthodes utilitaires pour l'affichage
  getEmployeesByRole(role: string): any[] {
    return this.employees.filter(emp => emp.role === role);
  }

  getActiveEmployeesCount(): number {
    return this.employees.filter(emp => emp.est_actif).length;
  }

  // ...existing methods...
  goBack() {
    this.router.navigate(['/superadmin/company-management']);
  }

  editCompany() {
    if (this.company) {
      console.log('Éditer entreprise:', this.company);
    }
  }

  deleteCompany() {
    if (this.company && confirm(`Supprimer l'entreprise "${this.company.nom}" ?`)) {
      this.clientCompanyService.deleteCompany(this.company.id).subscribe({
        next: () => {
          console.log('Entreprise supprimée');
          this.router.navigate(['/superadmin/company-management']);
        },
        error: (error) => {
          console.error('Erreur suppression:', error);
        }
      });
    }
  }

  formatDate(date: string | Date | undefined): string {
    if (!date) return '';
    return new Date(date).toLocaleDateString('fr-FR');
  }

  getStatusClass(status: string | undefined): string {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'badge bg-success';
      case 'inactive':
        return 'badge bg-warning';
      case 'suspendue':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }
}