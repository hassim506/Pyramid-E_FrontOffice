import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';


import { Company } from '../../../shared/models/client-company.models';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';


@Component({
  selector: 'app-company-details',
  imports: [TitleCasePipe,CommonModule],
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company | null = null;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientCompanyService: ClientCompanyService
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
  this.clientCompanyService.getCompany(id).subscribe({
    next: (response) => {
      // Correction ici : adaptez à la structure réelle de votre API
      this.company = response.entreprise || response.data || response;
      this.loading = false;
    },
    error: (error) => {
      this.error = 'Entreprise non trouvée';
      this.loading = false;
    }
  });
}
  goBack() {
    this.router.navigate(['/superadmin/company-management']);
  }

  editCompany() {
    if (this.company) {
      // Logique pour éditer l'entreprise
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