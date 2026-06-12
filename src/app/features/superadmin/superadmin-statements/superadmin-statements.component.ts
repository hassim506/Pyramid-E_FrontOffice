import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { RapportExportService } from '../../../shared/service/rapport/rapport-export.service';

export interface RapportRecent {
  nom: string; meta: string; format: 'pdf' | 'excel' | 'csv'; date: string; url?: string;
}

@Component({
  selector: 'app-superadmin-statements',
  imports: [CommonModule, FormsModule],
  templateUrl: './superadmin-statements.component.html',
  styleUrl: './superadmin-statements.component.scss'
})
export class SuperadminStatementsComponent implements OnInit {

  selectedType = 'multi';
  readonly types = [
    { key: 'multi',         icon: 'isax-buildings-2',   color: 'purple', label: 'Multi-entreprises',   sub: 'Vue consolidée de toutes les entreprises' },
    { key: 'entreprise',    icon: 'isax-profile-2user', color: 'gray',   label: 'Par entreprise',      sub: 'Rapport ciblé sur une seule entreprise' },
    { key: 'certifications',icon: 'isax-medal',         color: 'orange', label: 'Certifications',      sub: 'Délivrés, expirations, renouvellements' },
    { key: 'support',       icon: 'isax-ticket',        color: 'gray',   label: 'Support & tickets',   sub: 'Délais de résolution, satisfaction' },
    { key: 'performance',   icon: 'isax-chart-2',       color: 'purple', label: 'Performance globale', sub: 'KPIs consolidés plateforme' },
    { key: 'financier',     icon: 'isax-wallet-add',    color: 'gray',   label: 'Financier',           sub: 'Paiements, gains, abonnements' },
  ];

  periode    = 'trimestre';
  entreprise = 'toutes';
  format     = 'pdf';
  formationsF = 'toutes';
  groupe     = 'entreprise';
  langue     = 'fr';

  schedules = [
    { label: 'Rapport hebdomadaire',          sub: 'Chaque lundi 08h00 · envoyé aux Admin RH',       on: true  },
    { label: 'Rapport mensuel consolidé',     sub: '1er de chaque mois · toutes entreprises + direction', on: true },
    { label: 'Alerte expirations certificats',sub: '30j avant · email automatique aux concernés',    on: false },
  ];

  totalUsers   = 0;
  activeUsers  = 0;
  completion   = 0;
  totalCerts   = 0;
  certExpiring = 0;
  scoresMoy    = 0;
  entreprises: { label: string; pct: number }[] = [];

  loading    = false;
  generating = false;
  successMsg = '';

  recents: RapportRecent[] = [
    { nom: 'Performance globale T1 2025', meta: 'Multi-entreprises · PDF · 24 pages',       format: 'pdf',   date: '15 jan.' },
    { nom: 'Certifications déc. 2024',    meta: 'Toutes entreprises · Excel · 1 284 lignes',format: 'excel', date: '1 jan.' },
    { nom: 'Tickets support nov. 2024',   meta: 'Délais & résolution · CSV',                format: 'csv',   date: '1 déc.' },
  ];

  private rawUsers:    any[] = [];
  private rawCerts:    any[] = [];
  private rawClients:  any[] = [];

  constructor(
    private http: HttpClient,
    private exportSvc: RapportExportService,
  ) {}

  private get headers(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({ 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' });
  }

  ngOnInit(): void { this.loadPreview(); }

  loadPreview(): void {
    this.loading = true;
    forkJoin({
      users:   this.http.get<any>(`${environment.apiUrl}/users`,       { headers: this.headers }).pipe(catchError(() => of({ users: [] }))),
      certs:   this.http.get<any>(`${environment.apiUrl}/certificats`, { headers: this.headers }).pipe(catchError(() => of([]))),
      clients: this.http.get<any>(`${environment.apiUrl}/entreprises`, { headers: this.headers }).pipe(catchError(() => of({ data: [] }))),
    }).subscribe({
      next: ({ users, certs, clients }) => {
        const ul = users.users || users.data || (Array.isArray(users) ? users : []);
        const cl = Array.isArray(certs) ? certs : (certs.certificats || []);
        const el = clients.data || clients.entreprises || (Array.isArray(clients) ? clients : []);

        this.rawUsers   = ul;
        this.rawCerts   = cl;
        this.rawClients = el;

        this.totalUsers  = ul.length;
        this.activeUsers = ul.filter((u: any) => u.statut !== 'archive').length;
        this.completion  = 73;
        this.totalCerts  = cl.length;
        this.certExpiring = cl.filter((c: any) => {
          if (!c.date_expiration) return false;
          const diff = new Date(c.date_expiration).getTime() - Date.now();
          return diff > 0 && diff < 30 * 86400000;
        }).length;
        this.scoresMoy = 76;
        this.entreprises = el.slice(0, 4).map((e: any, i: number) => ({
          label: e.nom || e.name || `Entreprise ${i + 1}`,
          pct:   Math.floor(55 + i * 8),
        }));
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  selectType(key: string): void { this.selectedType = key; }

  generate(): void {
    this.generating = true;
    this.successMsg = '';
    setTimeout(() => {
      this.generating = false;
      this.doExport(this.format);
      this.successMsg = `Rapport ${this.selectedType} généré (${this.format.toUpperCase()}) — téléchargement lancé.`;
      setTimeout(() => { this.successMsg = ''; }, 4000);
    }, 600);
  }

  exportQuick(fmt: string): void {
    this.doExport(fmt);
    this.successMsg = `Export ${fmt.toUpperCase()} lancé.`;
    setTimeout(() => { this.successMsg = ''; }, 3000);
  }

  private doExport(fmt: string): void {
    const filename = `rapport-superadmin-${this.selectedType}-${this.periode}`;

    const userRows = this.rawUsers.map((u: any) => ({
      Nom:        u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim(),
      Email:      u.email || '',
      Rôle:       u.role?.name || u.role || '',
      Entreprise: u.entreprise?.nom || u.entreprise_nom || '',
      Statut:     u.statut || 'actif',
    }));

    const certRows = this.rawCerts.map((c: any) => ({
      Employé:    c.employe_nom || c.user?.name || '',
      Formation:  c.formation_titre || c.formation?.titre || '',
      Entreprise: c.entreprise?.nom || '',
      Délivré:    c.date_emission || '',
      Expiration: c.date_expiration || '',
    }));

    const clientRows = this.rawClients.map((e: any) => ({
      Entreprise: e.nom || e.name || '',
      Email:      e.email || '',
      Statut:     e.statut || '',
    }));

    if (fmt === 'csv') {
      const rows = this.selectedType === 'certifications' ? certRows
                 : this.selectedType === 'entreprise'     ? clientRows
                 : userRows;
      this.exportSvc.exportCsv(rows, filename);
    } else if (fmt === 'excel') {
      const rows = this.selectedType === 'certifications' ? certRows
                 : this.selectedType === 'entreprise'     ? clientRows
                 : userRows;
      this.exportSvc.exportExcel(rows, filename);
    } else {
      this.exportSvc.exportPdf('Rapport global — toutes entreprises', [
        { heading: 'Utilisateurs',  rows: userRows   },
        { heading: 'Entreprises',   rows: clientRows  },
        { heading: 'Certifications', rows: certRows   },
      ], filename);
    }
  }

  downloadRecent(r: RapportRecent): void {
    if (r.url) { window.open(r.url, '_blank'); return; }
    this.doExport(r.format);
    this.successMsg = `Téléchargement de « ${r.nom} » lancé.`;
    setTimeout(() => { this.successMsg = ''; }, 3000);
  }

  getFormatIcon(fmt: string): string {
    return ({ pdf: 'isax-document', excel: 'isax-document-text', csv: 'isax-clipboard-text' } as any)[fmt] ?? 'isax-document';
  }

  get periodeLabel(): string {
    return ({ mois: 'Ce mois', trimestre: 'T1 2025', annee: 'Cette année' } as any)[this.periode] ?? this.periode;
  }
}
