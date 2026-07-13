import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CertificatService, Certificat, CertConfig, DEFAULT_CERT_CONFIG } from '../../../shared/service/certificat/certificat.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { environment } from '../../../../environments/environment';

const DEFAULT_CONFIG: CertConfig = { ...DEFAULT_CERT_CONFIG };
const PALETTE = ['#059669', '#1D6EBF', '#7B5EA7', '#A0522D', '#C0392B', '#1A1A2E'];

@Component({
  selector: 'app-adminrh-certificate-modele',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminrh-certificate-modele.component.html',
  styleUrl: './adminrh-certificate-modele.component.scss'
})
export class AdminrhCertificateModeleComponent implements OnInit {
  config: CertConfig = { ...DEFAULT_CONFIG };
  modeleId: number | null = null;
  saving = false;
  saveSuccess = false;
  error = '';
  downloading = false;
  uploadingLogo = false;
  logoUploadError = '';
  previewLogoError = false;

  readonly palette = PALETTE;

  private get apiUrl(): string { return environment.apiUrl; }
  private get entrepriseId(): number { return this.auth.getUser()?.entreprise_id ?? 0; }

  // recently issued (up to 5) for preview panel
  recentCertificats: Certificat[] = [];

  constructor(
    private http: HttpClient,
    private certService: CertificatService,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.loadModele();
    this.loadRecent();
  }

  loadModele(): void {
    const eid = this.entrepriseId;
    if (!eid) return;
    this.http.get<{ data: any }>(`${this.apiUrl}/modeles-certificat/entreprise/${eid}`).subscribe({
      next: (res) => {
        if (res.data) {
          this.modeleId = res.data.id;
          if (res.data.config) {
            this.config = { ...DEFAULT_CONFIG, ...res.data.config };

            // ✅ Convertir l'URL relative en URL complète pour l'affichage
            if (this.config.logo_url && !this.config.logo_url.startsWith('http')) {
              const baseUrl = this.apiUrl.replace('/api', '');
              this.config.logo_url = baseUrl + this.config.logo_url;
              console.log('✅ Logo URL chargée:', this.config.logo_url);
            }
          }
          if (!this.config.entreprise_nom && res.data.entreprise?.nom) {
            this.config.entreprise_nom = res.data.entreprise.nom;
          }
        } else {
          const user = this.auth.getUser();
          if (user?.entreprise?.nom) this.config.entreprise_nom = user.entreprise.nom;
          if (user?.prenom && user?.nom)
            this.config.signataire_nom = `${user.prenom} ${user.nom}`;
        }
      },
      error: () => {}
    });
  }

  loadRecent(): void {
    this.certService.getCertificats().subscribe({
      next: (data) => { this.recentCertificats = data.slice(0, 5); },
      error: () => {}
    });
  }

  saveModele(): void {
    const eid = this.entrepriseId;
    if (!eid) return;
    this.saving = true;

    // ✅ Créer une copie de la config pour la sauvegarde
    const configToSave = { ...this.config };

    // ✅ Convertir l'URL complète en URL relative pour la sauvegarde en BD
    if (configToSave.logo_url && configToSave.logo_url.includes('/storage/')) {
      // Extraire seulement la partie /storage/... de l'URL
      const match = configToSave.logo_url.match(/\/storage\/.+$/);
      if (match) {
        configToSave.logo_url = match[0];
        console.log('💾 Sauvegarde du logo avec URL relative:', configToSave.logo_url);
      }
    }

    const payload = {
      nom: `Modèle ${this.config.entreprise_nom || 'défaut'}`,
      config: configToSave
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

  downloadPdf(cert: Certificat): void {
    if (this.downloading) return;
    this.downloading = true;
    this.certService.downloadPdf(cert, this.config).finally(() => { this.downloading = false; });
  }

  getInitials(name: string): string {
    return name?.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  avatarColors = ['#E6F1FB,#0C447C', '#E1F5EE,#085041', '#EEEDFE,#3C3489', '#FAEEDA,#633806', '#F1EFE8,#444441'];
  getAvatarStyle(id: number): { bg: string; color: string } {
    const pair = this.avatarColors[id % this.avatarColors.length].split(',');
    return { bg: pair[0], color: pair[1] };
  }

  onLogoFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const maxSize = 2 * 1024 * 1024; // 2MB

    // Validation
    if (file.size > maxSize) {
      this.logoUploadError = 'Le fichier est trop volumineux (max 2MB)';
      input.value = '';
      return;
    }

    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/svg+xml', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      this.logoUploadError = 'Format non supporté. Utilisez PNG, JPG, GIF, SVG ou WebP';
      input.value = '';
      return;
    }

    // Upload
    this.uploadingLogo = true;
    this.logoUploadError = '';

    const formData = new FormData();
    formData.append('logo', file);
    formData.append('entreprise_id', this.entrepriseId.toString());

    this.http.post<{ success: boolean; url: string; path: string }>(
      `${this.apiUrl}/modeles-certificat/upload-logo`,
      formData
    ).subscribe({
      next: (res) => {
        console.log('📦 Réponse upload logo:', res);
        if (res.success && res.url) {
          // L'URL retournée par Laravel est relative: /storage/...
          // Si elle commence par http://, elle est déjà complète
          if (res.url.startsWith('http://') || res.url.startsWith('https://')) {
            this.config.logo_url = res.url;
          } else {
            // Construire l'URL complète pour l'affichage dans l'interface
            const baseUrl = this.apiUrl.replace('/api', '');
            this.config.logo_url = baseUrl + res.url;
          }
          console.log('✅ Logo URL finale:', this.config.logo_url);

          // Sauvegarder automatiquement le modèle avec le nouveau logo
          this.saveModele();

          this.uploadingLogo = false;
          input.value = '';
        } else {
          this.logoUploadError = 'Réponse invalide du serveur';
          this.uploadingLogo = false;
          input.value = '';
        }
      },
      error: (err) => {
        console.error('❌ Erreur upload logo:', err);
        this.logoUploadError = err?.error?.message || err?.message || 'Erreur lors de l\'upload du logo';
        this.uploadingLogo = false;
        input.value = '';
      }
    });
  }

  removeLogo(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer le logo ?')) {
      this.config.logo_url = '';
    }
  }

  onLogoError(): void {
    console.warn('⚠️ Erreur de chargement du logo uploadé');
  }

  onPreviewLogoError(): void {
    this.previewLogoError = true;
    console.warn('⚠️ Erreur de chargement du logo dans la prévisualisation');
    console.log('URL du logo:', this.config.logo_url);
  }
}
