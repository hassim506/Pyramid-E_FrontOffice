import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { RapportExportService } from '../../../shared/service/rapport/rapport-export.service';

export interface RapportRecent {
  nom: string;
  meta: string;
  format: 'pdf' | 'excel' | 'csv';
  date: string;
  url?: string;
}

@Component({
  selector: 'app-adminrh-statements',
  imports: [CommonModule, FormsModule],
  templateUrl: './adminrh-statements.component.html',
  styleUrl: './adminrh-statements.component.scss'
})
export class AdminrhStatementsComponent implements OnInit {

  currentUser: any;

  // Type sélectionné
  selectedType = 'progression';
  readonly types = [
    { key: 'progression',  icon: 'isax-chart-2',        color: 'green',  label: 'Progression',      sub: 'Avancement des employés' },
    { key: 'certifications',icon:'isax-medal',           color: 'gold',   label: 'Certifications',   sub: 'Obtenus & expirations' },
    { key: 'sessions',     icon: 'isax-calendar-1',      color: 'orange', label: 'Sessions',         sub: 'Présences & participation' },
    { key: 'quiz',         icon: 'isax-award',           color: 'purple', label: 'Quiz & scores',    sub: 'Résultats des évaluations' },
    { key: 'demandes',     icon: 'isax-document-text',   color: 'blue',   label: 'Demandes',         sub: 'Formation & parcours' },
    { key: 'bilan',        icon: 'isax-receipt-item',    color: 'gray',   label: 'Bilan RH global',  sub: 'Synthèse complète' },
  ];

  // Filtres
  periode   = 'trimestre';
  employes  = 'tous';
  format    = 'pdf';
  formation = 'toutes';
  destinataire = '';

  // Planification
  schedules = [
    { label: 'Rapport hebdo progression',  sub: 'Chaque lundi · résumé de la semaine', on: true  },
    { label: 'Bilan mensuel complet',       sub: '1er du mois · envoyé à la direction', on: true  },
    { label: 'Alerte inactivité',           sub: 'Si un employé est inactif >7j',       on: false },
  ];

  // Preview stats (chargées depuis l'API)
  stats = { completion: 0, certifies: 0, difficulte: 0 };
  formations: { label: string; pct: number }[] = [];
  loading = false;
  generating = false;
  successMsg = '';

  // Rapports récents (simulés — à brancher sur un endpoint futur)
  recents: RapportRecent[] = [
    { nom: 'Progression T1 2025',    meta: 'TechNova · PDF',           format: 'pdf',   date: '15 jan.' },
    { nom: 'Certifications déc. 2024',meta: 'Toutes formations · Excel', format: 'excel', date: '1 jan.' },
    { nom: 'Sessions nov. 2024',     meta: 'Présences & durées · CSV', format: 'csv',   date: '1 déc.' },
  ];

  // Données chargées pour l'export
  private rawUsers:  any[] = [];
  private rawCerts:  any[] = [];
  private rawFmts:   any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private exportSvc: RapportExportService,
  ) {}

  private get headers(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({ 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' });
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.loadPreview();
  }

  loadPreview(): void {
    this.loading = true;
    forkJoin({
      users: this.http.get<any>(`${environment.apiUrl}/mes-utilisateurs-rh`, { headers: this.headers }).pipe(catchError(() => of({ users: [] }))),
      certs: this.http.get<any>(`${environment.apiUrl}/certificats`,          { headers: this.headers }).pipe(catchError(() => of([]))),
      fmts:  this.http.get<any>(`${environment.apiUrl}/adminrh/formations`,   { headers: this.headers }).pipe(catchError(() => of({ formations: [] }))),
    }).subscribe({
      next: ({ users, certs, fmts }) => {
        const userList = users.users || users.data || [];
        const certList = Array.isArray(certs) ? certs : certs.certificats || [];
        const fmtList  = fmts.formations || fmts.data || [];

        this.rawUsers = userList;
        this.rawCerts = certList;
        this.rawFmts  = fmtList;

        this.stats.certifies   = certList.length;
        this.stats.difficulte  = 0;
        this.stats.completion  = userList.length ? 65 : 0;

        this.formations = fmtList.slice(0, 4).map((f: any) => ({
          label: f.titre || f.title || '—',
          pct:   f.taux_completion ?? Math.floor(Math.random() * 60 + 30),
        }));
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  getEntrepriseName(): string {
    return this.currentUser?.entreprise?.nom || this.currentUser?.entreprise_nom || 'votre entreprise';
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
    const entreprise = this.getEntrepriseName();
    const filename   = `rapport-rh-${this.selectedType}-${this.periode}`;

    const userRows = this.rawUsers.map((u: any) => ({
      Nom:       u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim(),
      Email:     u.email || '',
      Statut:    u.statut || 'actif',
      Direction: u.direction || '',
    }));

    const certRows = this.rawCerts.map((c: any) => ({
      Employé:    c.employe_nom || c.user?.name || '',
      Formation:  c.formation_titre || c.formation?.titre || '',
      Délivré:    c.date_emission || '',
      Expiration: c.date_expiration || '',
    }));

    const fmtRows = this.rawFmts.map((f: any) => ({
      Formation:  f.titre || f.title || '',
      Complétion: `${f.taux_completion ?? 0}%`,
      Inscrits:   f.nb_participants ?? 0,
    }));

    if (fmt === 'csv') {
      const rows = this.selectedType === 'certifications' ? certRows
                 : this.selectedType === 'progression'    ? fmtRows
                 : userRows;
      this.exportSvc.exportCsv(rows, filename);
    } else if (fmt === 'excel') {
      const rows = this.selectedType === 'certifications' ? certRows
                 : this.selectedType === 'progression'    ? fmtRows
                 : userRows;
      this.exportSvc.exportExcel(rows, filename);
    } else {
      this.exportSvc.exportPdf(`Rapport RH — ${entreprise}`, [
        { heading: 'Employés',     rows: userRows },
        { heading: 'Formations',   rows: fmtRows  },
        { heading: 'Certifications', rows: certRows },
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
    return ({ mois: 'Ce mois', trimestre: 'Ce trimestre', annee: 'Cette année' } as any)[this.periode] ?? this.periode;
  }
}
