import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { forkJoin, of } from 'rxjs';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Company } from '../../../shared/models/client-company.models';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { environment } from '../../../../environments/environment';

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
  employees: any[] = [];
  loadingEmployees: boolean = false;

  private currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientCompanyService: ClientCompanyService,
    private authService: AuthService,
    private http: HttpClient,
  ) {}

  private get headers(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({ 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' });
  }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.route.params.subscribe(params => {
      const companyId = +params['id'];
      if (companyId) {
        this.loadCompanyDetails(companyId);
      }
    });
  }

  loadCompanyDetails(id: number) {
    this.loading = true;
    this.error   = '';

    // /mes-entreprises/{id} : sans middleware permission, vérifie le périmètre côté contrôleur
    // /entreprises/{id}/employes : supporte rôle 4 et 5 via peutVoirEmployesEntreprise()
    forkJoin({
      company:   this.http.get<any>(`${environment.apiUrl}/mes-entreprises/${id}`,      { headers: this.headers }).pipe(catchError(() => of(null))),
      employees: this.http.get<any>(`${environment.apiUrl}/entreprises/${id}/employes`, { headers: this.headers }).pipe(catchError(() => of({ employes: [] }))),
    }).subscribe({
      next: ({ company, employees }) => {
        if (!company || company.status === false) {
          this.error   = company?.message || 'Accès non autorisé à cette entreprise';
          this.loading = false;
          return;
        }
        this.company       = company.entreprise || company.data || company;
        const empData      = employees?.employes || employees?.data || employees?.users || [];
        this.employees     = Array.isArray(empData) ? empData : [];
        this.employeeCount = employees?.pagination?.total ?? this.employees.length;
        this.loading       = false;
      },
      error: (err: any) => {
        this.error   = httpErrorMessage(err, 'Impossible de charger les données.');
        this.loading = false;
      }
    });
  }

  loadEmployeeCount(companyId: number) {
    this.loadingEmployees = true;
    this.http.get<any>(`${environment.apiUrl}/entreprises/${companyId}/employes`, { headers: this.headers }).subscribe({
      next: (response) => {
        const empData      = response?.employes || response?.data || [];
        this.employees     = Array.isArray(empData) ? empData : [];
        this.employeeCount = response?.pagination?.total ?? this.employees.length;
        this.loadingEmployees = false;
      },
      error: () => { this.employeeCount = 0; this.loadingEmployees = false; }
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
    this.router.navigate(['/adminrh/adminrh-companymanagement']);
  }

  editCompany() {
    if (this.company) {
      console.log('Éditer entreprise:', this.company);
    }
  }

  deleteCompany() {
    if (this.company && confirm(`Supprimer l'entreprise "${this.company.nom}" ?`)) {
      this.clientCompanyService.deleteCompany(this.company.id).subscribe({
        next: () => this.router.navigate(['/adminrh/adminrh-companymanagement']),
        error: (error) => console.error('Erreur suppression:', error)
      });
    }
  }

  archiveCompany() {
    if (this.company && confirm(`Archiver l'entreprise "${this.company.nom}" ?`)) {
      this.clientCompanyService.deleteCompany(this.company.id).subscribe({
        next: () => this.router.navigate(['/adminrh/adminrh-companymanagement']),
        error: (error) => console.error('Erreur archivage:', error)
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