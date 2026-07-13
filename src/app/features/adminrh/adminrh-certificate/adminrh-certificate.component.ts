import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CertificatService, Certificat, CertConfig, DEFAULT_CERT_CONFIG } from '../../../shared/service/certificat/certificat.service';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { environment } from '../../../../environments/environment';

const DEFAULT_CONFIG: CertConfig = { ...DEFAULT_CERT_CONFIG };

@Component({
  selector: 'app-adminrh-certificate',
  imports: [CommonModule, FormsModule],
  templateUrl: './adminrh-certificate.component.html',
  styleUrl: './adminrh-certificate.component.scss'
})
export class AdminrhCertificateComponent implements OnInit {
  certificats: Certificat[] = [];
  filteredCertificats: Certificat[] = [];
  loading = false;
  error = '';

  filterStatut = 'all';
  filterSearch = '';

  selectedCert: Certificat | null = null;

  currentPage = 1;
  itemsPerPage = 10;

  // config kept for modal styling (colours from saved modèle)
  config: CertConfig = { ...DEFAULT_CONFIG };

  get totalValides(): number { return this.certificats.filter(c => c.statut === 'valide').length; }
  get totalExpires(): number { return this.certificats.filter(c => c.statut === 'expiré').length; }
  get totalCertificats(): number { return this.certificats.length; }

  private get apiUrl(): string { return environment.apiUrl; }
  private get entrepriseId(): number { return this.auth.getUser()?.entreprise_id ?? 0; }

  constructor(
    private http: HttpClient,
    private certService: CertificatService,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.loadCertificats();
    this.loadModeleConfig();
  }

  loadModeleConfig(): void {
    const eid = this.entrepriseId;
    if (!eid) return;
    this.http.get<{ data: any }>(`${this.apiUrl}/modeles-certificat/entreprise/${eid}`).subscribe({
      next: (res) => {
        if (res.data?.config) {
          this.config = { ...DEFAULT_CONFIG, ...res.data.config };

          // ✅ Convertir l'URL relative en URL complète pour l'affichage
          if (this.config.logo_url && !this.config.logo_url.startsWith('http')) {
            const baseUrl = this.apiUrl.replace('/api', '');
            this.config.logo_url = baseUrl + this.config.logo_url;
            console.log('✅ Logo URL chargée AdminRH:', this.config.logo_url);
          }
        }
      },
      error: () => {}
    });
  }

  loadCertificats(): void {
    this.loading = true;
    this.certService.getCertificats().subscribe({
      next: (data) => { this.certificats = data; this.applyFilters(); this.loading = false; },
      error: (err: any) => { this.error = httpErrorMessage(err, 'Impossible de charger les certificats.'); this.loading = false; }
    });
  }

  syncing = false;
  syncResult = '';

  syncCertificats(): void {
    this.syncing = true;
    this.syncResult = '';
    this.http.post<{ created: number; total_eligible: number }>(`${this.apiUrl}/certificats/backfill`, {}).subscribe({
      next: (res) => {
        this.syncing = false;
        this.syncResult = `${res.created} nouveau(x) certificat(s) créé(s) sur ${res.total_eligible} formations terminées.`;
        if (res.created > 0) this.loadCertificats();
        setTimeout(() => this.syncResult = '', 6000);
      },
      error: () => { this.syncing = false; this.error = 'Erreur lors de la synchronisation.'; }
    });
  }

  applyFilters(): void {
    this.filteredCertificats = this.certificats.filter(c => {
      const matchStatut = this.filterStatut === 'all' || c.statut === this.filterStatut;
      const s = this.filterSearch.toLowerCase();
      const matchSearch = !s
        || c.employe?.name?.toLowerCase().includes(s)
        || c.formation?.titre?.toLowerCase().includes(s)
        || c.code_unique?.toLowerCase().includes(s);
      return matchStatut && matchSearch;
    });
    this.currentPage = 1;
  }

  get totalPages(): number { return Math.ceil(this.filteredCertificats.length / this.itemsPerPage); }

  get paginatedCertificats(): Certificat[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCertificats.slice(start, start + this.itemsPerPage);
  }

  get pageNumbers(): number[] {
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

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

  get pageEnd(): number { return Math.min(this.currentPage * this.itemsPerPage, this.filteredCertificats.length); }

  openDetails(cert: Certificat): void {
    this.selectedCert = cert;

    // ✅ Si le certificat a un modèle avec config, l'utiliser
    if (cert.modele?.config) {
      this.config = { ...DEFAULT_CONFIG, ...cert.modele.config };

      // ✅ Convertir l'URL relative en URL complète pour l'affichage
      if (this.config.logo_url && !this.config.logo_url.startsWith('http')) {
        const baseUrl = this.apiUrl.replace('/api', '');
        this.config.logo_url = baseUrl + this.config.logo_url;
        console.log('✅ Logo URL convertie dans preview AdminRH:', this.config.logo_url);
      }

      console.log('✅ Config du modèle appliquée pour la prévisualisation AdminRH:', this.config);
    } else if (cert.modele?.template_html) {
      try {
        const parsed = JSON.parse(cert.modele.template_html);
        if (parsed && typeof parsed === 'object') {
          this.config = { ...DEFAULT_CONFIG, ...parsed };

          // ✅ Convertir l'URL relative en URL complète
          if (this.config.logo_url && !this.config.logo_url.startsWith('http')) {
            const baseUrl = this.apiUrl.replace('/api', '');
            this.config.logo_url = baseUrl + this.config.logo_url;
          }

          console.log('✅ Config du template_html appliquée AdminRH:', this.config);
        }
      } catch (e) {
        console.warn('⚠️ Impossible de parser le template_html du modèle');
      }
    }

    setTimeout(() => {
      const el = document.getElementById('arh_cert_details_modal');
      if (el) new (window as any).bootstrap.Modal(el).show();
    }, 50);
  }

  getInitials(name: string): string {
    return name?.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  isExpiringSoon(cert: Certificat): boolean {
    if (!cert.date_expiration) return false;
    const days = (new Date(cert.date_expiration).getTime() - Date.now()) / 86400000;
    return days > 0 && days <= 60;
  }

  avatarColors = ['#E6F1FB,#0C447C', '#E1F5EE,#085041', '#EEEDFE,#3C3489', '#FAEEDA,#633806', '#F1EFE8,#444441'];
  getAvatarStyle(id: number): { bg: string; color: string } {
    const pair = this.avatarColors[id % this.avatarColors.length].split(',');
    return { bg: pair[0], color: pair[1] };
  }

  downloading = false;

  downloadPdf(cert: Certificat): void {
    if (this.downloading) return;
    this.downloading = true;
    this.certService.downloadPdf(cert, this.config).finally(() => { this.downloading = false; });
  }
}
