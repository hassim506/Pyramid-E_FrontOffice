import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { forkJoin } from 'rxjs';

import { Company } from '../../../shared/models/client-company.models';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { UserService } from '../../../shared/service/authentification/user.service';
import { CompanyAddComponent } from '../company-add/company-add.component';

@Component({
  selector: 'app-company-details',
  imports: [TitleCasePipe, CommonModule, CompanyAddComponent],
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company | null = null;
  loading: boolean = true;
  error: string = '';
  // Compteurs distincts
  nbEmployesDeclares: number = 0;      // taille_effectif (RH déclaré)
  nbInscritsPlateforme: number = 0;    // utilisateurs inscrits en BDD (rôle employé)
  nbActifsPlateforme: number = 0;      // utilisateurs inscrits ET actifs (statut=1)
  employees: any[] = [];
  loadingEmployees: boolean = false;

  // Dialog modification
  companyDialog: boolean = false;

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

    forkJoin({
      company: this.clientCompanyService.getCompany(id),
      employees: this.userService.getUsersByCompany(id)
    }).subscribe({
      next: (response) => {
        const detail = response.company.entreprise || response.company.data || response.company;
        this.company = detail;

        const stats = detail?.statistiques ?? {};
        this.nbEmployesDeclares   = detail?.taille_effectif        ?? 0;
        this.nbInscritsPlateforme = stats.nb_employes              ?? 0;
        this.nbActifsPlateforme   = stats.nb_employes_actifs       ?? 0;

        const employeesData = response.employees.users || response.employees.data || response.employees;
        this.employees = Array.isArray(employeesData) ? employeesData : [];

        // Fallback si l'API ne renvoie pas encore les stats
        if (!stats.nb_employes) {
          this.nbInscritsPlateforme = this.employees.length;
          this.nbActifsPlateforme   = this.employees.filter((e: any) => e.statut == 1 || e.est_actif).length;
        }

        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement:', error);
        this.error = 'Erreur lors du chargement des données';
        this.loading = false;
      }
    });
  }

  // Méthodes utilitaires pour l'affichage
  getEmployeesByRole(role: string): any[] {
    return this.employees.filter(emp => emp.role === role);
  }

  getActiveEmployeesCount(): number {
    return this.nbActifsPlateforme;
  }

  // ...existing methods...
  goBack() {
    this.router.navigate(['/superadmin/company-management']);
  }

  editCompany() {
    if (!this.company) return;
    this.companyDialog = true;
  }

  onEditSaved() {
    this.companyDialog = false;
    if (this.company) {
      this.loadCompanyDetails(this.company.id);
    }
  }

  onEditClosed() {
    this.companyDialog = false;
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