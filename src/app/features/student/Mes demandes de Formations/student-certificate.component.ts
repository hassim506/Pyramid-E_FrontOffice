import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeFormationService } from '../../../shared/service/demande/demande-formation.service';

@Component({
  selector: 'app-student-certificate',
  templateUrl: './student-certificate.component.html',
  styleUrl: './student-certificate.component.scss',
  imports : [CommonModule]
})
export class StudentCertificateComponent {

  loading = true;
  demandes: any[] = [];

  // pagination
  totalData = 0;
  pageSize = 10;
  currentPage = 1;

  constructor(
    private demandeFormationService: DemandeFormationService
  ) {}

  ngOnInit(): void {
    this.loadDemandes();
  }

  loadDemandes(): void {
    this.loading = true;

    this.demandeFormationService.getDemandesFormation().subscribe({
      next: (res: any) => {
        this.demandes = res.demandes ?? res;
        this.totalData = this.demandes.length;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getStatusClass(statut: string): string {
    switch (statut) {
      case 'en_attente': return 'badge bg-warning';
      case 'validee': return 'badge bg-success';
      case 'refusee': return 'badge bg-danger';
      case 'annulee': return 'badge bg-secondary';
      default: return 'badge bg-light';
    }
  }

  annulerDemande(id: number): void {
    this.demandeFormationService.annulerDemande(id).subscribe(() => {
      this.loadDemandes();
    });
  }
}
