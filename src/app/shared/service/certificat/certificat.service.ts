import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { environment } from '../../../../environments/environment';

export interface CertificatEmploye {
  id: number;
  matricule: string;
  name: string;
  prenom: string;
  nom: string;
  fonction: string;
  direction: string;
  avatar: string | null;
  entreprise_id: number;
}

export interface CertificatFormation {
  id: number;
  titre: string;
  duree_totale: number;
  niveau: string;
  image_couverture: string | null;
}

export interface CertificatFormateur {
  id: number;
  name: string;
  prenom: string;
  nom: string;
  fonction: string;
}

export interface CertificatEntreprise {
  id: number;
  nom: string;
}

export interface Certificat {
  id: number;
  code_unique: string;
  employe_id: number;
  formation_id: number;
  entreprise_id: number;
  formateur_id: number;
  date_delivrance: string;
  date_expiration: string | null;
  score_final: string;
  statut: 'valide' | 'expiré' | 'révoqué';
  url_pdf: string | null;
  employe: CertificatEmploye;
  formation: CertificatFormation;
  formateur: CertificatFormateur;
  entreprise?: CertificatEntreprise;
  created_at: string;
}

export interface CertConfig {
  entreprise_nom: string;
  entreprise_sous_titre: string;
  logo_url: string;
  couleur_principale: string;
  accroche: string;
  signataire_nom: string;
  signataire_role: string;
  duree_validite: string;
  show_score: boolean;
  show_duree: boolean;
  show_formateur: boolean;
  show_qr: boolean;
  show_numero: boolean;
  show_date_expiration: boolean;
  bg_couleur: string;
}

export const DEFAULT_CERT_CONFIG: CertConfig = {
  entreprise_nom: '',
  entreprise_sous_titre: 'Learning Management System',
  logo_url: '',
  couleur_principale: '#059669',
  accroche: 'a complété avec succès la formation',
  signataire_nom: '',
  signataire_role: 'Responsable RH',
  duree_validite: '1 an',
  show_score: true,
  show_duree: true,
  show_formateur: true,
  show_qr: true,
  show_numero: true,
  show_date_expiration: true,
  bg_couleur: '#FAFBFF',
};

@Injectable({ providedIn: 'root' })
export class CertificatService {
  static readonly baseUrl = environment.apiUrl.replace(/\/api$/, '');
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCertificats(): Observable<Certificat[]> {
    return this.http.get<Certificat[]>(`${this.apiUrl}/certificats`);
  }

  async downloadPdf(cert: Certificat, config?: Partial<CertConfig>): Promise<void> {
    const cfg: CertConfig = { ...DEFAULT_CERT_CONFIG, ...config };
    const html = this.buildCertHtml(cert, cfg);

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:fixed;top:-9999px;left:-9999px;z-index:-1;pointer-events:none;';
    wrapper.innerHTML = html;
    document.body.appendChild(wrapper);

    try {
      const el = wrapper.firstElementChild as HTMLElement;
      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: cfg.bg_couleur || '#FAFBFF',
      });

      const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const ratio = canvas.height / canvas.width;
      const imgH = pageW * ratio;
      const yOff = Math.max(0, (pageH - imgH) / 2);

      pdf.addImage(canvas.toDataURL('image/jpeg', 0.95), 'JPEG', 0, yOff, pageW, Math.min(imgH, pageH));
      pdf.save(`certificat-${cert.code_unique}.pdf`);
    } finally {
      document.body.removeChild(wrapper);
    }
  }

  private fmt(dateStr: string | null): string {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  private initials(name: string): string {
    return (name || '').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  private buildCertHtml(cert: Certificat, c: CertConfig): string {
    const pri = c.couleur_principale;
    const priLight = pri + '20';
    const employeeName = [cert.employe?.prenom, cert.employe?.nom].filter(Boolean).join(' ')
      || cert.employe?.name || '—';
    const formateurName = [cert.formateur?.prenom, cert.formateur?.nom].filter(Boolean).join(' ')
      || cert.formateur?.name || '—';

    const logoHtml = c.logo_url
      ? `<img src="${c.logo_url}" style="width:44px;height:44px;object-fit:contain;border-radius:8px;" crossorigin="anonymous">`
      : `<div style="width:44px;height:44px;border-radius:8px;background:${pri};display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0;">${this.initials(c.entreprise_nom || 'E')}</div>`;

    const numeroHtml = c.show_numero
      ? `<div style="font-size:10px;color:#6c757d;letter-spacing:1px;font-family:monospace;">N° ${cert.code_unique}</div>`
      : '';

    const statsHtml = (c.show_score || c.show_duree) ? `
      <div style="display:flex;align-items:center;justify-content:center;gap:24px;margin:16px 0 20px;">
        ${c.show_score ? `<div style="text-align:center;">
          <div style="font-size:26px;font-weight:800;color:${pri};">${cert.score_final || '—'}%</div>
          <div style="font-size:11px;color:#6c757d;letter-spacing:.5px;">Score obtenu</div>
        </div>` : ''}
        ${c.show_score && c.show_duree ? `<div style="width:1px;height:40px;background:#dee2e6;"></div>` : ''}
        ${c.show_duree ? `<div style="text-align:center;">
          <div style="font-size:26px;font-weight:800;color:#1a1a2e;">${cert.formation?.duree_totale || '—'}h</div>
          <div style="font-size:11px;color:#6c757d;letter-spacing:.5px;">Durée totale</div>
        </div>` : ''}
      </div>` : '';

    const sigLines: string[] = [];
    if (c.signataire_nom || c.signataire_role) {
      sigLines.push(`
        <div style="text-align:center;min-width:140px;">
          <div style="height:1px;background:#6c757d;margin-bottom:8px;"></div>
          <div style="font-size:12px;font-weight:600;color:#1a1a2e;">${c.signataire_nom || '—'}</div>
          <div style="font-size:11px;color:#6c757d;">${c.signataire_role}</div>
        </div>`);
    }
    if (c.show_formateur) {
      sigLines.push(`
        <div style="text-align:center;min-width:140px;">
          <div style="height:1px;background:#6c757d;margin-bottom:8px;"></div>
          <div style="font-size:12px;font-weight:600;color:#1a1a2e;">${formateurName}</div>
          <div style="font-size:11px;color:${pri};">Formateur · ${cert.formation?.titre || ''}</div>
        </div>`);
    }

    const sigsHtml = sigLines.length
      ? `<div style="display:flex;align-items:flex-end;justify-content:center;gap:48px;margin:16px 0;">${sigLines.join('')}</div>`
      : '';

    const validityHtml = `Délivré le ${this.fmt(cert.date_delivrance)}`
      + (c.show_date_expiration && cert.date_expiration
        ? ` · Valide jusqu'au ${this.fmt(cert.date_expiration)} (${c.duree_validite})`
        : '');

    return `
      <div style="
        width:820px;
        background:${c.bg_couleur || '#FAFBFF'};
        border-radius:12px;
        overflow:hidden;
        font-family:'Segoe UI',Arial,sans-serif;
        box-shadow:0 4px 32px rgba(0,0,0,0.12);
      ">
        <div style="height:6px;background:${pri};"></div>

        <div style="padding:24px 36px 0;display:flex;align-items:center;gap:14px;">
          ${logoHtml}
          <div style="flex:1;">
            <div style="font-size:17px;font-weight:700;color:#1a1a2e;line-height:1.2;">${c.entreprise_nom || 'Entreprise'}</div>
            <div style="font-size:11px;color:#6c757d;">${c.entreprise_sous_titre}</div>
          </div>
          ${numeroHtml}
        </div>

        <div style="padding:20px 36px 28px;text-align:center;">
          <div style="display:inline-block;background:${priLight};color:${pri};font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:4px 16px;border-radius:20px;margin-bottom:14px;">
            CERTIFICAT DE RÉUSSITE
          </div>
          <div style="font-size:30px;font-weight:800;color:#1a1a2e;margin-bottom:8px;">${employeeName}</div>
          <div style="font-size:13px;color:#6c757d;margin-bottom:6px;">${c.accroche}</div>
          <div style="font-size:18px;font-weight:700;color:${pri};margin-bottom:4px;">${cert.formation?.titre || '—'}</div>

          ${statsHtml}
          ${sigsHtml}

          <div style="font-size:11px;color:#6c757d;border-top:1px solid #dee2e6;padding-top:12px;margin-top:8px;">
            ${validityHtml}
          </div>
        </div>

        <div style="height:4px;background:${priLight};"></div>
      </div>`;
  }
}
