import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Client } from '../../../shared/models/client-company.models';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';

@Component({
  selector: 'app-client-details',
    imports: [TitleCasePipe,CommonModule],
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  client: Client | null = null;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientCompanyService: ClientCompanyService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const clientId = +params['id'];
      if (clientId) {
        this.loadClientDetails(clientId);
      }
    });
  }

loadClientDetails(id: number) {
  this.loading = true;
  this.error = '';
  this.clientCompanyService.getClient(id).subscribe({
    next: (response) => {
      // Accepte les deux structures possibles
      this.client = response.client || response.data || response;
      this.loading = false;
    },
    error: (error) => {
      this.error = 'Client non trouvé';
      this.loading = false;
    }
  });
}

  goBack() {
    this.router.navigate(['/superadmin/clients']);
  }

  editClient() {
    if (this.client) {
      console.log('Éditer client:', this.client);
      // Logique pour éditer le client
    }
  }

  deleteClient() {
    if (this.client && confirm(`Supprimer le client "${this.client.nom}" ?`)) {
      this.clientCompanyService.deleteClient(this.client.id).subscribe({
        next: () => {
          console.log('Client supprimé');
          this.router.navigate(['/superadmin/clients']);
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
      case 'actif':
        return 'badge bg-success';
      case 'inactif':
        return 'badge bg-warning';
      case 'suspendu':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }

  calculateContractDuration(): string {
    if (!this.client?.date_contrat || !this.client?.date_fin_contrat) {
      return 'Non défini';
    }
    
    const startDate = new Date(this.client.date_contrat);
    const endDate = new Date(this.client.date_fin_contrat);
    const diffTime = endDate.getTime() - startDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.round(diffDays / 30);
    
    if (diffMonths < 12) {
      return `${diffMonths} mois`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const remainingMonths = diffMonths % 12;
      return remainingMonths > 0 ? `${years} an(s) ${remainingMonths} mois` : `${years} an(s)`;
    }
  }
}