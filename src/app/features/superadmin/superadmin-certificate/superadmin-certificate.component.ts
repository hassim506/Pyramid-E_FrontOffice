import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Certificate {
  id: number;
  code_unique: string;
  employe_id: number;
  formation_id: number;
  entreprise_id: number;
  formateur_id: number;
  modele_certificat_id: number;
  date_delivrance: string;
  date_expiration: string | null;
  score_final: string | null;
  statut: 'valide' | 'expiré' | 'révoqué';
  url_pdf: string;
  created_at: string;
  updated_at: string;
  employe: {
    id: number;
    name: string;
    prenom: string;
    nom: string;
    email: string;
    fonction: string;
  };
  formation: {
    id: number;
    titre: string;
    description: string;
  };
  entreprise: {
    id: number;
    nom: string;
  };
  formateur: {
    id: number;
    name: string;
    prenom: string;
    nom: string;
  };
}

@Component({
  selector: 'app-superadmin-certificate',
  imports: [CommonModule, FormsModule],
  templateUrl: './superadmin-certificate.component.html',
  styleUrl: './superadmin-certificate.component.scss'
})
export class SuperadminCertificateComponent implements OnInit {
  certificates: Certificate[] = [];
  filteredCertificates: Certificate[] = [];
  loading = false;
  error = '';
  selectedCertificate: Certificate | null = null;
  
  // Filtres
  searchTerm = '';
  selectedStatus = '';
  selectedEntreprise = '';
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 8;
  totalPages = 0;
  
  // URLs de l'API
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCertificates();
  }

  loadCertificates(): void {
    this.loading = true;
    this.error = '';
    
    this.http.get<Certificate[]>(`${this.apiUrl}/certificats`).subscribe({
      next: (data) => {
        this.certificates = data;
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des certificats';
        this.loading = false;
        console.error('Erreur:', err);
      }
    });
  }

  applyFilters(): void {
    this.filteredCertificates = this.certificates.filter(cert => {
      const matchesSearch = !this.searchTerm || 
        cert.code_unique.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        cert.employe.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        cert.formation.titre.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = !this.selectedStatus || cert.statut === this.selectedStatus;
      const matchesEntreprise = !this.selectedEntreprise || cert.entreprise_id.toString() === this.selectedEntreprise;
      
      return matchesSearch && matchesStatus && matchesEntreprise;
    });
    
    this.totalPages = Math.ceil(this.filteredCertificates.length / this.itemsPerPage);
    this.currentPage = 1;
  }

  getPaginatedCertificates(): Certificate[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredCertificates.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  viewCertificate(certificate: Certificate): void {
    this.selectedCertificate = certificate;
  }

  downloadCertificate(certificate: Certificate): void {
    const link = document.createElement('a');
    link.href = `${this.apiUrl}${certificate.url_pdf}`;
    link.download = `certificat-${certificate.code_unique}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  updateCertificateStatus(certificateId: number, newStatus: string): void {
    this.http.put(`${this.apiUrl}/certificats/${certificateId}`, { statut: newStatus }).subscribe({
      next: () => {
        const index = this.certificates.findIndex(c => c.id === certificateId);
        if (index !== -1) {
          this.certificates[index].statut = newStatus as any;
          this.applyFilters();
        }
      },
      error: (err) => {
        this.error = 'Erreur lors de la mise à jour du statut';
        console.error('Erreur:', err);
      }
    });
  }

  revokeCertificate(certificate: Certificate): void {
    if (confirm(`Êtes-vous sûr de vouloir révoquer le certificat ${certificate.code_unique} ?`)) {
      this.updateCertificateStatus(certificate.id, 'révoqué');
    }
  }

  reactivateCertificate(certificate: Certificate): void {
    if (confirm(`Êtes-vous sûr de vouloir réactiver le certificat ${certificate.code_unique} ?`)) {
      this.updateCertificateStatus(certificate.id, 'valide');
    }
  }

  deleteCertificate(certificate: Certificate): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer définitivement le certificat ${certificate.code_unique} ?`)) {
      this.http.delete(`${this.apiUrl}/certificats/${certificate.id}`).subscribe({
        next: () => {
          this.certificates = this.certificates.filter(c => c.id !== certificate.id);
          this.applyFilters();
        },
        error: (err) => {
          this.error = 'Erreur lors de la suppression du certificat';
          console.error('Erreur:', err);
        }
      });
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'valide': return 'badge bg-success';
      case 'expiré': return 'badge bg-warning';
      case 'révoqué': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  }

  getUniqueEntreprises(): Array<{id: number, nom: string}> {
    const entreprises = this.certificates.map(c => ({id: c.entreprise_id, nom: c.entreprise.nom}));
    return entreprises.filter((e, index, self) => 
      index === self.findIndex(x => x.id === e.id)
    );
  }

  isExpired(certificate: Certificate): boolean {
    if (!certificate.date_expiration) return false;
    return new Date(certificate.date_expiration) < new Date();
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('fr-FR');
  }
}