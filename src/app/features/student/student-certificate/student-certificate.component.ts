import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CertificatService, Certificat, CertConfig, DEFAULT_CERT_CONFIG } from '../../../shared/service/certificat/certificat.service';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { catchError, of } from 'rxjs';

declare var bootstrap: any;

@Component({
  standalone: true,
  selector: 'app-student-certificate',
  templateUrl: './student-certificate.component.html',
  styleUrl: './student-certificate.component.scss',
  imports: [CommonModule, FormsModule]
})
export class StudentCertificateComponent implements OnInit {

  // ── tabs ──────────────────────────────────────────────────────────────────
  activeTab: 'obtenus' | 'historique' | 'encours' = 'obtenus';

  // ── user ──────────────────────────────────────────────────────────────────
  userName     = '';
  userEntreprise = '';

  // ── data ──────────────────────────────────────────────────────────────────
  loading      = true;
  allCertificats: Certificat[] = [];
  formationsEnCours: any[] = [];

  // ── filters ───────────────────────────────────────────────────────────────
  filterSearch  = '';
  filterStatut  = '';   // '' | 'valide' | 'expiré'
  sortOrder     = 'recent';

  // ── config for PDF gen ────────────────────────────────────────────────────
  config: CertConfig = { ...DEFAULT_CERT_CONFIG };

  downloading = false;
  copiedId: number | null = null;
  selectedCert: Certificat | null = null;
  logoLoadError = false;
  private previewModal: any;

  constructor(
    private certService:      CertificatService,
    private formationsService: FormationsService,
    private auth:              AuthService
  ) {}

  ngOnInit(): void {
    const user = this.auth.getUser();
    this.userName      = user ? `${user.prenom ?? ''} ${user.nom ?? ''}`.trim() || user.name || '' : '';
    this.userEntreprise = user?.entreprise?.nom ?? '';
    this.loadCertificats();
    this.loadFormationsEnCours();
    this.loadConfig();
  }

  // ── Loaders ───────────────────────────────────────────────────────────────
  loadCertificats(): void {
    this.loading = true;
    this.formationsService.getMyCertificates()
      .pipe(catchError((err) => {
        console.error('❌ Erreur chargement certificats:', err);
        return of({ data: [] });
      }))
      .subscribe((res: any) => {
        console.log('📦 Réponse certificats:', res);
        const raw: any[] = res?.data ?? res?.certificats ?? res ?? [];
        console.log('✅ Certificats extraits:', raw);
        this.allCertificats = Array.isArray(raw) ? raw : [];
        console.log('📊 Total certificats:', this.allCertificats.length);

        // ✅ Si un certificat a un modèle, utiliser sa config
        if (this.allCertificats.length > 0 && this.allCertificats[0].modele) {
          const modele = this.allCertificats[0].modele;
          if (modele.config) {
            this.config = { ...this.config, ...modele.config };
            console.log('✅ Config du modèle appliquée:', this.config);
          } else if (modele.template_html) {
            try {
              const parsed = JSON.parse(modele.template_html);
              if (parsed && typeof parsed === 'object') {
                this.config = { ...this.config, ...parsed };
                console.log('✅ Config du template_html appliquée:', this.config);
              }
            } catch (e) {
              console.warn('⚠️ Impossible de parser template_html');
            }
          }
        }

        this.loading = false;
      });
  }

  loadFormationsEnCours(): void {
    this.formationsService.getMesFormations()
      .pipe(catchError(() => of({ formations: [] })))
      .subscribe((res: any) => {
        const all: any[] = res?.formations ?? [];
        this.formationsEnCours = all.filter((f: any) => {
          const p = f.progression ?? 0;
          return p < 100 && f.est_certifiante;
        }).slice(0, 6);
      });
  }

  loadConfig(): void {
    const user = this.auth.getUser();
    const eid  = user?.entreprise_id;
    if (!eid) return;

    // Charger le modèle de certificat personnalisé de l'entreprise
    import('../../../shared/service/certificat/certificat.service').then(m => {
      const apiUrl = m.CertificatService.baseUrl + '/api';

      fetch(`${apiUrl}/modeles-certificat/entreprise/${eid}`, {
        headers: {
          'Authorization': `Bearer ${this.auth.getToken()}`,
          'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then((response: any) => {
        if (response.data?.config) {
          this.config = { ...m.DEFAULT_CERT_CONFIG, ...response.data.config };

          // ✅ Convertir l'URL relative en URL complète pour l'affichage
          if (this.config.logo_url && !this.config.logo_url.startsWith('http')) {
            const baseUrl = m.CertificatService.baseUrl;
            this.config.logo_url = baseUrl + this.config.logo_url;
            console.log('✅ Logo URL convertie:', this.config.logo_url);
          }

          console.log('✅ Configuration certificat chargée:', this.config);
        } else {
          // Fallback : utiliser le nom de l'entreprise
          if (user?.entreprise?.nom) {
            this.config.entreprise_nom = user.entreprise.nom;
          }
        }
      })
      .catch(err => {
        console.warn('⚠️ Impossible de charger la config certificat:', err);
        if (user?.entreprise?.nom) {
          this.config.entreprise_nom = user.entreprise.nom;
        }
      });
    });
  }

  // ── KPIs ──────────────────────────────────────────────────────────────────
  get nbObtenus():      number { return this.allCertificats.length; }
  get nbValides():      number { return this.allCertificats.filter(c => c.statut === 'valide').length; }
  get nbExpireBientot(): number {
    return this.allCertificats.filter(c => this.isExpiringSoon(c)).length;
  }
  get scoreMoyen(): number {
    const scores = this.allCertificats.map(c => parseFloat(c.score_final)).filter(n => !isNaN(n));
    return scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }
  get nbObtenusCeMois(): number {
    const now = new Date();
    return this.allCertificats.filter(c => {
      const d = new Date(c.date_delivrance ?? c.created_at);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
  }

  // ── Computed lists ────────────────────────────────────────────────────────
  get firstExpiring(): Certificat | null {
    return this.allCertificats
      .filter(c => this.isExpiringSoon(c))
      .sort((a, b) => new Date(a.date_expiration!).getTime() - new Date(b.date_expiration!).getTime())[0] ?? null;
  }

  get filteredCertificats(): Certificat[] {
    let list = [...this.allCertificats];
    if (this.filterStatut === 'valide')   list = list.filter(c => c.statut === 'valide' && !this.isExpiringSoon(c));
    if (this.filterStatut === 'expirant') list = list.filter(c => this.isExpiringSoon(c));
    if (this.filterStatut === 'expiré')   list = list.filter(c => c.statut === 'expiré');
    if (this.filterSearch) {
      const s = this.filterSearch.toLowerCase();
      list = list.filter(c =>
        c.formation?.titre?.toLowerCase().includes(s) ||
        c.code_unique?.toLowerCase().includes(s) ||
        c.formateur?.name?.toLowerCase().includes(s)
      );
    }
    if (this.sortOrder === 'recent') list.sort((a, b) => new Date(b.date_delivrance ?? b.created_at).getTime() - new Date(a.date_delivrance ?? a.created_at).getTime());
    if (this.sortOrder === 'score')  list.sort((a, b) => parseFloat(b.score_final) - parseFloat(a.score_final));
    return list;
  }

  get historiqueList(): Certificat[] {
    return [...this.allCertificats].sort(
      (a, b) => new Date(b.date_delivrance ?? b.created_at).getTime() - new Date(a.date_delivrance ?? a.created_at).getTime()
    );
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  isExpiringSoon(cert: Certificat): boolean {
    if (!cert.date_expiration || cert.statut === 'expiré') return false;
    const days = (new Date(cert.date_expiration).getTime() - Date.now()) / 86400000;
    return days > 0 && days <= 60;
  }

  daysUntilExpiry(cert: Certificat): number {
    if (!cert.date_expiration) return 0;
    return Math.round((new Date(cert.date_expiration).getTime() - Date.now()) / 86400000);
  }

  getCardStatus(cert: Certificat): 'valid' | 'expiring' | 'expired' {
    if (cert.statut === 'expiré') return 'expired';
    if (this.isExpiringSoon(cert)) return 'expiring';
    return 'valid';
  }

  isNewCert(cert: Certificat): boolean {
    const days = (Date.now() - new Date(cert.date_delivrance ?? cert.created_at).getTime()) / 86400000;
    return days <= 30;
  }

  getScoreColor(cert: Certificat): string {
    const n = parseFloat(cert.score_final);
    if (isNaN(n)) return '#6b7280';
    if (n >= 80) return '#059669';
    if (n >= 60) return '#854F0B';
    return '#A32D2D';
  }

  accentColors = [
    '#1D9E75', '#534AB7', '#185FA5', '#EF9F27', '#C0392B', '#2980B9'
  ];

  getAccentColor(cert: Certificat): string {
    if (this.isExpiringSoon(cert)) return '#EF9F27';
    if (cert.statut === 'expiré') return '#F09595';
    return this.accentColors[(cert.id ?? 0) % this.accentColors.length];
  }

  iconBgMap = [
    { bg: '#E1F5EE', color: '#0F6E56', icon: 'isax-shield-tick' },
    { bg: '#EEEDFE', color: '#534AB7', icon: 'isax-award' },
    { bg: '#E6F1FB', color: '#185FA5', icon: 'isax-people' },
    { bg: '#FAEEDA', color: '#854F0B', icon: 'isax-chart' },
    { bg: '#FCEBEB', color: '#A32D2D', icon: 'isax-medal' },
    { bg: '#EAF3DE', color: '#3B6D11', icon: 'isax-tick-circle' },
  ];

  getIconStyle(cert: Certificat): { bg: string; color: string; icon: string } {
    return this.iconBgMap[(cert.id ?? 0) % this.iconBgMap.length];
  }

  getFormateurName(cert: Certificat): string {
    const f = cert.formateur;
    if (!f) return '—';
    return [f.prenom, f.nom].filter(Boolean).join(' ') || f.name || '—';
  }

  getEmployeeName(cert: Certificat): string {
    const e = cert.employe;
    if (e) {
      const full = [e.prenom, e.nom].filter(Boolean).join(' ');
      if (full) return full;
      if (e.name) return e.name;
    }
    return this.userName || '—';
  }

  formatDate(dateStr: string | null | undefined): string {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  copyCode(cert: Certificat): void {
    if (cert.code_unique) {
      navigator.clipboard.writeText(cert.code_unique).catch(() => {});
      this.copiedId = cert.id;
      setTimeout(() => this.copiedId = null, 2000);
    }
  }

  downloadPdf(cert: Certificat): void {
    if (this.downloading) return;
    this.downloading = true;
    this.certService.downloadPdf(cert, this.config).finally(() => this.downloading = false);
  }

  setFilter(f: string): void {
    this.filterStatut = this.filterStatut === f ? '' : f;
  }

  setSort(s: string): void { this.sortOrder = s; }

  openPreview(cert: Certificat): void {
    this.selectedCert = cert;
    this.logoLoadError = false; // Reset logo error state

    // ✅ Si le certificat a un modèle avec config, l'utiliser
    if (cert.modele?.config) {
      this.config = { ...DEFAULT_CERT_CONFIG, ...cert.modele.config };

      // ✅ Convertir l'URL relative en URL complète pour l'affichage
      if (this.config.logo_url && !this.config.logo_url.startsWith('http')) {
        import('../../../shared/service/certificat/certificat.service').then(m => {
          const baseUrl = m.CertificatService.baseUrl;
          this.config.logo_url = baseUrl + this.config.logo_url;
          console.log('✅ Logo URL convertie dans preview:', this.config.logo_url);
        });
      }

      console.log('✅ Config du modèle appliquée pour la prévisualisation:', this.config);
    } else if (cert.modele?.template_html) {
      try {
        const parsed = JSON.parse(cert.modele.template_html);
        if (parsed && typeof parsed === 'object') {
          this.config = { ...DEFAULT_CERT_CONFIG, ...parsed };

          // ✅ Convertir l'URL relative en URL complète
          if (this.config.logo_url && !this.config.logo_url.startsWith('http')) {
            import('../../../shared/service/certificat/certificat.service').then(m => {
              const baseUrl = m.CertificatService.baseUrl;
              this.config.logo_url = baseUrl + this.config.logo_url;
            });
          }

          console.log('✅ Config du template_html appliquée:', this.config);
        }
      } catch (e) {
        console.warn('⚠️ Impossible de parser le template_html du modèle');
      }
    }

    setTimeout(() => {
      const el = document.getElementById('sc_cert_preview_modal');
      if (el) {
        this.previewModal = new bootstrap.Modal(el);
        this.previewModal.show();
      }
    }, 50);
  }

  closePreview(): void {
    this.previewModal?.hide();
    this.selectedCert = null;
  }

  onPreviewLogoError(): void {
    this.logoLoadError = true;
    console.warn('⚠️ Erreur de chargement du logo dans la prévisualisation');
  }
}
