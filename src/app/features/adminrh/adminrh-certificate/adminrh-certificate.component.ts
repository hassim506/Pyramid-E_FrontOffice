import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CertificatService, Certificat, CertConfig, DEFAULT_CERT_CONFIG } from '../../../shared/service/certificat/certificat.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { environment } from '../../../../environments/environment';

const DEFAULT_CONFIG: CertConfig = { ...DEFAULT_CERT_CONFIG };

const PALETTE = ['#059669', '#1D6EBF', '#7B5EA7', '#A0522D', '#C0392B', '#1A1A2E'];

@Component({
  selector: 'app-adminrh-certificate',
  imports: [CommonModule, FormsModule],
  templateUrl: './adminrh-certificate.component.html',
  styleUrl: './adminrh-certificate.component.scss'
})
export class AdminrhCertificateComponent implements OnInit {
  // ── tabs ──────────────────────────────────────────────────────────────────
  activeTab: 'personnalisation' | 'certificats' = 'personnalisation';

  // ── certificate list ──────────────────────────────────────────────────────
  certificats: Certificat[] = [];
  filteredCertificats: Certificat[] = [];
  loading = false;
  error = '';

  filterStatut = 'all';
  filterSearch = '';

  selectedCert: Certificat | null = null;

  // ── pagination ────────────────────────────────────────────────────────────
  currentPage = 1;
  itemsPerPage = 10;

  // ── customizer ────────────────────────────────────────────────────────────
  config: CertConfig = { ...DEFAULT_CONFIG };
  modeleId: number | null = null;
  saving = false;
  saveSuccess = false;

  readonly palette = PALETTE;

  get totalValides(): number { return this.certificats.filter(c => c.statut === 'valide').length; }
  get totalExpires(): number { return this.certificats.filter(c => c.statut === 'expiré').length; }
  get totalCertificats(): number { return this.certificats.length; }

  private get apiUrl(): string { return environment.apiUrl; }
  private get entrepriseId(): number { return this.auth.getUser()?.entreprise_id ?? 0; }

  constructor(
    private http: HttpClient,
    private certService: CertificatService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeTab = this.router.url.includes('modele') ? 'personnalisation' : 'certificats';
    this.loadCertificats();
    this.loadModele();
  }

  // ── Certificats ───────────────────────────────────────────────────────────
  loadCertificats(): void {
    this.loading = true;
    this.certService.getCertificats().subscribe({
      next: (data) => { this.certificats = data; this.applyFilters(); this.loading = false; },
      error: () => { this.error = 'Erreur chargement certificats.'; this.loading = false; }
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
    setTimeout(() => {
      const el = document.getElementById('arh_cert_details_modal');
      if (el) new (window as any).bootstrap.Modal(el).show();
    }, 50);
  }

  // ── Modèle customizer ─────────────────────────────────────────────────────
  loadModele(): void {
    const eid = this.entrepriseId;
    if (!eid) return;
    this.http.get<{ data: any }>(`${this.apiUrl}/modeles-certificat/entreprise/${eid}`).subscribe({
      next: (res) => {
        if (res.data) {
          this.modeleId = res.data.id;
          if (res.data.config) {
            this.config = { ...DEFAULT_CONFIG, ...res.data.config };
          }
          if (!this.config.entreprise_nom && res.data.entreprise?.nom) {
            this.config.entreprise_nom = res.data.entreprise.nom;
          }
        } else {
          // Pre-fill from auth user
          const user = this.auth.getUser();
          if (user?.entreprise?.nom) this.config.entreprise_nom = user.entreprise.nom;
          if (user?.prenom && user?.nom)
            this.config.signataire_nom = `${user.prenom} ${user.nom}`;
        }
      },
      error: () => {}
    });
  }

  saveModele(): void {
    const eid = this.entrepriseId;
    if (!eid) return;
    this.saving = true;
    const payload = {
      nom: `Modèle ${this.config.entreprise_nom || 'défaut'}`,
      config: this.config
    };
    this.http.post<{ data: any }>(`${this.apiUrl}/modeles-certificat/entreprise/${eid}`, payload).subscribe({
      next: (res) => {
        this.modeleId = res.data?.id ?? this.modeleId;
        this.saving = false;
        this.saveSuccess = true;
        setTimeout(() => this.saveSuccess = false, 3000);
      },
      error: () => { this.saving = false; this.error = 'Erreur lors de la sauvegarde.'; }
    });
  }

  setPalette(color: string): void { this.config.couleur_principale = color; }

  // ── Helpers ───────────────────────────────────────────────────────────────
  getInitials(name: string): string {
    return name?.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  isExpiringSoon(cert: Certificat): boolean {
    if (!cert.date_expiration) return false;
    const days = (new Date(cert.date_expiration).getTime() - Date.now()) / 86400000;
    return days > 0 && days <= 60;
  }

  getScoreColor(score: string | null): string {
    if (!score) return '#6C757D';
    const n = parseFloat(score);
    if (n >= 80) return '#059669';
    if (n >= 60) return '#D97706';
    return '#DC3545';
  }

  avatarColors = ['#E6F1FB,#0C447C', '#E1F5EE,#085041', '#EEEDFE,#3C3489', '#FAEEDA,#633806', '#F1EFE8,#444441'];
  getAvatarStyle(id: number): { bg: string; color: string } {
    const pair = this.avatarColors[id % this.avatarColors.length].split(',');
    return { bg: pair[0], color: pair[1] };
  }

  parseFloat(v: string): number { return parseFloat(v); }

  downloading = false;

  downloadPdf(cert: Certificat): void {
    if (this.downloading) return;
    this.downloading = true;
    this.certService.downloadPdf(cert, this.config).finally(() => { this.downloading = false; });
  }

  downloadPreview(): void {
    if (this.downloading) return;
    const fakeCert: Certificat = {
      id: 0, code_unique: 'CERT-DEMO-2025', employe_id: 0, formation_id: 0,
      entreprise_id: 0, formateur_id: 0,
      date_delivrance: new Date().toISOString(), date_expiration: null,
      score_final: '87', statut: 'valide', url_pdf: null, created_at: '',
      employe: { id: 0, matricule: '', name: 'Moussa Ndiaye', prenom: 'Moussa', nom: 'Ndiaye',
        fonction: 'Développeur', direction: '', avatar: null, entreprise_id: 0 },
      formation: { id: 0, titre: 'Cybersécurité & protection des données', duree_totale: 8,
        niveau: '', image_couverture: null },
      formateur: { id: 0, name: 'Ibrahima Sow', prenom: 'Ibrahima', nom: 'Sow', fonction: '' },
    };
    this.downloading = true;
    this.certService.downloadPdf(fakeCert, this.config).finally(() => { this.downloading = false; });
  }

  // preview helpers – use fake data so the live preview always shows something
  get previewInitials(): string {
    return this.getInitials(this.config.signataire_nom || 'Employé Exemple');
  }
}
