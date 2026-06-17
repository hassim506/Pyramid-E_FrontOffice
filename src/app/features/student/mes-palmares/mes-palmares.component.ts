import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { HttpClient }        from '@angular/common/http';
import { environment }       from '../../../../environments/environment';

interface Certificat {
  id:              number;
  code_unique:     string;
  date_delivrance: string;
  date_expiration: string | null;
  score_final:     number | null;
  statut:          'valide' | 'expiré' | 'révoqué';
  url_pdf:         string | null;
  formation:       { id: number; titre: string; image_couverture: string | null; duree_totale: string | null; } | null;
  formateur:       { nom: string; prenom: string; } | null;
  session:         { titre: string; } | null;
}

type Onglet = 'certificats' | 'habilitations' | 'badges';

@Component({
  selector:    'app-mes-palmares',
  standalone:  true,
  imports:     [CommonModule, RouterModule],
  templateUrl: './mes-palmares.component.html',
  styleUrl:    './mes-palmares.component.scss',
})
export class MesPalmaresComponent implements OnInit {

  onglet: Onglet = 'certificats';

  loading     = true;
  error       = '';
  certificats: Certificat[] = [];
  recherche   = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void { this.load(); }

  setOnglet(o: Onglet): void { this.onglet = o; }

  load(): void {
    this.loading = true;
    this.error   = '';
    this.http.get<any>(`${environment.apiUrl}/mes-certificats`).subscribe({
      next: (res) => {
        this.certificats = res.data ?? [];
        this.loading     = false;
      },
      error: () => {
        this.error   = 'Impossible de charger vos certificats.';
        this.loading = false;
      }
    });
  }

  get certificatsFiltres(): Certificat[] {
    if (!this.recherche.trim()) return this.certificats;
    const q = this.recherche.toLowerCase();
    return this.certificats.filter(c =>
      c.formation?.titre.toLowerCase().includes(q) ||
      c.code_unique.toLowerCase().includes(q)
    );
  }

  telecharger(c: Certificat): void {
    if (!c.url_pdf) return;
    const url = c.url_pdf.startsWith('http')
      ? c.url_pdf
      : `${environment.apiUrl.replace('/api', '')}/storage/${c.url_pdf}`;
    window.open(url, '_blank');
  }

  formatDate(d: string | null): string {
    if (!d) return '—';
    const dt   = new Date(d);
    const mois = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc'];
    return `${dt.getDate()} ${mois[dt.getMonth()]} ${dt.getFullYear()}`;
  }

  getStatutClass(c: Certificat): string {
    if (c.statut === 'révoqué') return 'pal-badge--revoque';
    return 'pal-badge--valide';
  }

  getStatutLabel(c: Certificat): string {
    if (c.statut === 'révoqué') return 'Révoqué';
    return 'Valide';
  }

  onRecherche(event: Event): void {
    this.recherche = (event.target as HTMLInputElement).value;
  }
}