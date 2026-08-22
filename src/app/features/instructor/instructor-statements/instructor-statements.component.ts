import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { RapportExportService } from '../../../shared/service/rapport/rapport-export.service';

export interface RapportRecent {
  nom: string; meta: string; format: 'pdf' | 'excel' | 'csv'; date: string; url?: string;
}

@Component({
  selector: 'app-instructor-statements',
  imports: [CommonModule, FormsModule],
  templateUrl: './instructor-statements.component.html',
  styleUrl: './instructor-statements.component.scss'
})
export class InstructorStatementsComponent implements OnInit {

  currentUser: any;

  selectedType = 'apprenants';
  readonly types = [
    { key: 'apprenants',    icon: 'isax-profile-2user', color: 'blue',   label: 'Employés',        sub: 'Progression individuelle' },
    { key: 'quiz',          icon: 'isax-award',         color: 'purple', label: 'Quiz & scores',   sub: 'Taux de réussite par question' },
    { key: 'formation',     icon: 'isax-book-1',        color: 'green',  label: 'Par formation',   sub: 'Complétion & engagement' },
    { key: 'sessions',      icon: 'isax-calendar-1',    color: 'orange', label: 'Sessions',        sub: 'Présences & participation' },
    { key: 'difficulte',    icon: 'isax-danger',        color: 'red',    label: 'En difficulté',   sub: 'Employés à risque' },
    { key: 'certifications',icon: 'isax-medal',         color: 'gold',   label: 'Certifications',  sub: 'Délivrés par mes formations' },
  ];

  formation  = 'toutes';
  periode    = 'mois';
  format     = 'pdf';
  apprenants = 'tous';
  destinataire = '';

  schedules = [
    { label: 'Résumé hebdomadaire employés', sub: 'Chaque vendredi · progression + alertes difficulté', on: true  },
    { label: 'Rapport après chaque session',   sub: 'Présences, durées, questions posées',               on: true  },
    { label: 'Alerte quiz en échec',           sub: 'Si un employé échoue 2x au même quiz',              on: false },
  ];

  // Preview
  completion   = 0;
  certifies    = 0;
  difficulte   = 0;
  quizBars: { label: string; pct: number }[] = [];
  formations: any[] = [];

  loading    = false;
  generating = false;
  successMsg = '';

  insights = [
    { color: '#A32D2D', text: 'La formation la plus abandonnée a un taux de complétion de 41%. Envisagez de la scinder en modules.' },
    { color: '#185FA5', text: 'Certifications délivrées ce trimestre. Le score moyen est de 76%.' },
    { color: '#854F0B', text: 'Certains employés n\'ont pas eu d\'activité depuis plus de 7 jours. Un email de relance peut être déclenché.' },
  ];

  recents: RapportRecent[] = [
    { nom: 'Rapport employés T1 2025',    meta: 'Toutes formations · PDF',          format: 'pdf',   date: '15 jan.' },
    { nom: 'Scores quiz déc. 2024',       meta: 'Excel · détail par question',       format: 'excel', date: '1 jan.' },
    { nom: 'Présences sessions nov. 2024',meta: 'CSV · 183 employés',               format: 'csv',   date: '1 déc.' },
  ];

  private rawFormations: any[] = [];
  private rawCerts:      any[] = [];

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
      fmts:  this.http.get<any>(`${environment.apiUrl}/formateur/formations`, { headers: this.headers }).pipe(catchError(() => of({ formations: [] }))),
      certs: this.http.get<any>(`${environment.apiUrl}/certificats`,          { headers: this.headers }).pipe(catchError(() => of([]))),
    }).subscribe({
      next: ({ fmts, certs }) => {
        const fl = fmts.formations || fmts.data || (Array.isArray(fmts) ? fmts : []);
        const cl = Array.isArray(certs) ? certs : certs.certificats || [];

        this.rawFormations = fl;
        this.rawCerts      = cl;

        this.certifies  = cl.length;
        this.completion = 74;
        this.difficulte = 4;

        this.quizBars = fl.slice(0, 3).map((f: any, i: number) => ({
          label: f.titre || f.title || `Formation ${i + 1}`,
          pct:   Math.floor(44 + i * 22),
        }));
        this.formations = fl;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  getDisplayName(): string {
    const u = this.currentUser;
    if (!u) return 'Formateur';
    return u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.email || 'Formateur';
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
    const filename = `rapport-formateur-${this.selectedType}-${this.periode}`;

    const fmtRows = this.rawFormations.map((f: any) => ({
      Formation:  f.titre || f.title || '',
      Inscrits:   f.nb_participants ?? 0,
      Complétion: `${f.taux_completion ?? 0}%`,
      Niveau:     f.niveau || '',
    }));

    const certRows = this.rawCerts.map((c: any) => ({
      Employé:    c.employe_nom || c.user?.name || '',
      Formation:  c.formation_titre || c.formation?.titre || '',
      Délivré:    c.date_emission || '',
      Expiration: c.date_expiration || '',
    }));

    if (fmt === 'csv') {
      this.exportSvc.exportCsv(
        this.selectedType === 'certifications' ? certRows : fmtRows,
        filename,
      );
    } else if (fmt === 'excel') {
      this.exportSvc.exportExcel(
        this.selectedType === 'certifications' ? certRows : fmtRows,
        filename,
      );
    } else {
      this.exportSvc.exportPdf(`Rapport pédagogique — ${this.getDisplayName()}`, [
        { heading: 'Mes formations',   rows: fmtRows  },
        { heading: 'Certifications',   rows: certRows },
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
    return ({ mois: 'Ce mois', trimestre: 'Ce trimestre', duree: 'Toute la durée' } as any)[this.periode] ?? this.periode;
  }
}
