import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CertificatService, Certificat } from '../../../shared/service/certificat/certificat.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-instructor-certificate',
  imports: [CommonModule, FormsModule],
  templateUrl: './instructor-certificate.component.html',
  styleUrl: './instructor-certificate.component.scss'
})
export class InstructorCertificateComponent implements OnInit {
  certificates: Certificat[] = [];
  filteredCertificates: Certificat[] = [];
  loading = false;
  error = '';
  selectedCertificate: Certificat | null = null;

  searchTerm = '';
  selectedStatus = '';

  currentPage = 1;
  itemsPerPage = 10;

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private certService: CertificatService) {}

  ngOnInit(): void { this.loadCertificates(); }

  loadCertificates(): void {
    this.loading = true;
    this.error = '';
    this.http.get<Certificat[]>(`${this.apiUrl}/certificats`).subscribe({
      next: (data) => { this.certificates = data; this.applyFilters(); this.loading = false; },
      error: () => { this.error = 'Erreur lors du chargement des certificats.'; this.loading = false; }
    });
  }

  applyFilters(): void {
    this.filteredCertificates = this.certificates.filter(c => {
      const q = this.searchTerm.toLowerCase();
      const matchSearch = !q
        || c.code_unique.toLowerCase().includes(q)
        || c.employe?.name?.toLowerCase().includes(q)
        || c.formation?.titre?.toLowerCase().includes(q);
      const matchStatus = !this.selectedStatus || c.statut === this.selectedStatus;
      return matchSearch && matchStatus;
    });
    this.currentPage = 1;
  }

  get totalPages(): number { return Math.ceil(this.filteredCertificates.length / this.itemsPerPage); }

  getPaginatedCertificates(): Certificat[] {
    const s = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCertificates.slice(s, s + this.itemsPerPage);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

  get pages(): number[] {
    const total = this.totalPages;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const p = this.currentPage;
    const pages: number[] = [1];
    if (p > 3) pages.push(-1);
    for (let i = Math.max(2, p - 1); i <= Math.min(total - 1, p + 1); i++) pages.push(i);
    if (p < total - 2) pages.push(-1);
    pages.push(total);
    return pages;
  }

  openDetails(cert: Certificat): void {
    this.selectedCertificate = cert;
    setTimeout(() => {
      const el = document.getElementById('inst_cert_details_modal');
      if (el) new (window as any).bootstrap.Modal(el).show();
    }, 50);
  }

  downloading = false;

  downloadPdf(cert: Certificat): void {
    if (this.downloading) return;
    this.downloading = true;
    this.certService.downloadPdf(cert).finally(() => { this.downloading = false; });
  }

  getInitials(name: string): string {
    return name?.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  avatarColors = ['#E6F1FB,#0C447C', '#E1F5EE,#085041', '#EEEDFE,#3C3489', '#FAEEDA,#633806', '#F1EFE8,#444441'];
  getAvatarStyle(id: number): { bg: string; color: string } {
    const pair = this.avatarColors[id % this.avatarColors.length].split(',');
    return { bg: pair[0], color: pair[1] };
  }

  getScoreColor(score: string | null): string {
    if (!score) return '#6C757D';
    const n = parseFloat(score);
    if (n >= 80) return '#059669';
    if (n >= 60) return '#D97706';
    return '#DC3545';
  }

  isExpiringSoon(cert: Certificat): boolean {
    if (!cert.date_expiration) return false;
    const days = (new Date(cert.date_expiration).getTime() - Date.now()) / 86400000;
    return days > 0 && days <= 60;
  }

  parseFloat(v: string): number { return parseFloat(v); }

  get totalValides(): number { return this.certificates.filter(c => c.statut === 'valide').length; }
  get totalExpires(): number { return this.certificates.filter(c => c.statut === 'expiré').length; }
}
