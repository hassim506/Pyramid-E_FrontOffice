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
    { key: 'progression',    icon: 'isax-chart-2',       color: 'green',  label: 'Progression',     sub: 'Avancement des employés' },
    { key: 'certifications', icon: 'isax-medal',          color: 'gold',   label: 'Certifications',  sub: 'Obtenus & expirations' },
    { key: 'sessions',       icon: 'isax-calendar-1',     color: 'orange', label: 'Sessions',        sub: 'Présences & participation' },
    { key: 'quiz',           icon: 'isax-award',          color: 'purple', label: 'Quiz & scores',   sub: 'Résultats des évaluations' },
    { key: 'demandes',       icon: 'isax-document-text',  color: 'blue',   label: 'Demandes',        sub: 'Formation & parcours' },
    { key: 'bilan',          icon: 'isax-receipt-item',   color: 'gray',   label: 'Bilan RH global', sub: 'Synthèse complète' },
  ];

  // Filtres
  periode      = 'trimestre';
  employes     = 'tous';
  format       = 'pdf';
  formation    = 'toutes';
  destinataire = '';

  // Options dynamiques du select formation
  formationOptions: { value: string; label: string }[] = [];

  // Planification
  schedules = [
    { label: 'Rapport hebdo progression', sub: 'Chaque lundi · résumé de la semaine', on: true  },
    { label: 'Bilan mensuel complet',      sub: '1er du mois · envoyé à la direction', on: true  },
    { label: 'Alerte inactivité',          sub: 'Si un employé est inactif >7j',       on: false },
  ];

  // Preview stats
  stats = { completion: 0, certifies: 0, difficulte: 0 };
  formations: { label: string; pct: number }[] = [];
  loading    = false;
  generating = false;
  successMsg = '';

  // Rapports récents (simulés)
  recents: RapportRecent[] = [
    { nom: 'Progression T1 2025',      meta: 'Toutes formations · PDF',   format: 'pdf',   date: '15 jan.' },
    { nom: 'Certifications déc. 2024', meta: 'Toutes formations · Excel', format: 'excel', date: '1 jan.'  },
    { nom: 'Sessions nov. 2024',       meta: 'Présences & durées · CSV',  format: 'csv',   date: '1 déc.'  },
  ];

  // Données brutes chargées depuis l'API
  private rawUsers:    any[] = [];
  private rawCerts:    any[] = [];
  private rawFmts:     any[] = [];
  private rawSessions: any[] = [];
  private rawQuizzes:  any[] = [];
  private rawDemandes: any[] = [];

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
      users:    this.http.get<any>(`${environment.apiUrl}/mes-utilisateurs-rh`,   { headers: this.headers }).pipe(catchError(() => of({ users: [] }))),
      certs:    this.http.get<any>(`${environment.apiUrl}/certificats`,            { headers: this.headers }).pipe(catchError(() => of([]))),
      fmts:     this.http.get<any>(`${environment.apiUrl}/adminrh/formations`,     { headers: this.headers }).pipe(catchError(() => of({ formations: [] }))),
      sessions: this.http.get<any>(`${environment.apiUrl}/adminrh/sessions`,       { headers: this.headers }).pipe(catchError(() => of({ sessions: [] }))),
      quizzes:  this.http.get<any>(`${environment.apiUrl}/quizzes`,                { headers: this.headers }).pipe(catchError(() => of([]))),
      demandes: this.http.get<any>(`${environment.apiUrl}/demandes-formation`,     { headers: this.headers }).pipe(catchError(() => of({ demandes: [] }))),
    }).subscribe({
      next: ({ users, certs, fmts, sessions, quizzes, demandes }) => {
        this.rawUsers    = users.users    || users.data    || [];
        this.rawCerts    = Array.isArray(certs) ? certs : certs.certificats || certs.data || [];
        this.rawFmts     = fmts.formations || fmts.data   || [];
        this.rawSessions = sessions.sessions || sessions.data || [];
        this.rawQuizzes  = Array.isArray(quizzes) ? quizzes : quizzes.quizzes || quizzes.data || [];
        this.rawDemandes = demandes.demandes || demandes.data || (Array.isArray(demandes) ? demandes : []);

        this.stats.certifies  = this.rawCerts.length;
        this.stats.difficulte = this.rawUsers.filter((u: any) => !u.est_actif && u.statut !== 1).length;
        this.stats.completion = this.rawFmts.length
          ? Math.round(this.rawFmts.reduce((s: number, f: any) => s + (f.taux_completion ?? 0), 0) / this.rawFmts.length)
          : 0;

        this.formations = this.rawFmts.slice(0, 4).map((f: any) => ({
          label: f.titre || f.title || '—',
          pct:   f.taux_completion ?? 0,
        }));

        // Populer le select Formation
        this.formationOptions = this.rawFmts.map((f: any) => ({
          value: f.titre || f.title || '',
          label: f.titre || f.title || '—',
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
    // Petite pause visuelle, puis export
    setTimeout(() => {
      this.generating = false;
      this.doExport(this.format);
      const label = this.types.find(t => t.key === this.selectedType)?.label ?? this.selectedType;
      this.successMsg = `Rapport « ${label} » généré en ${this.format.toUpperCase()} — téléchargement lancé.`;
      setTimeout(() => { this.successMsg = ''; }, 4000);
    }, 400);
  }

  exportQuick(fmt: string): void {
    this.doExport(fmt);
    this.successMsg = `Export ${fmt.toUpperCase()} lancé.`;
    setTimeout(() => { this.successMsg = ''; }, 3000);
  }

  private doExport(fmt: string): void {
    const entreprise = this.getEntrepriseName();
    const label      = this.types.find(t => t.key === this.selectedType)?.label ?? this.selectedType;
    const date       = new Date().toISOString().slice(0, 10);
    const filename   = `rapport-${this.selectedType}-${this.periode}-${date}`;
    const pdfTitle   = `Rapport RH — ${label} — ${entreprise} — ${this.periodeLabel}`;

    if (fmt === 'csv') {
      this.exportSvc.exportCsv(this.buildRows(), filename);
    } else if (fmt === 'excel') {
      this.exportSvc.exportExcel(this.buildRows(), filename);
    } else {
      // PDF : bilan = toutes les sections ; autre = section unique du type sélectionné
      if (this.selectedType === 'bilan') {
        this.exportSvc.exportPdf(pdfTitle, [
          { heading: 'Employés',       rows: this.buildUserRows() },
          { heading: 'Formations',     rows: this.buildProgressionRows() },
          { heading: 'Certifications', rows: this.buildCertRows() },
          { heading: 'Sessions',       rows: this.buildSessionRows() },
          { heading: 'Quiz',           rows: this.buildQuizRows() },
        ], filename);
      } else {
        this.exportSvc.exportPdf(pdfTitle, [
          { heading: label, rows: this.buildRows() },
        ], filename);
      }
    }
  }

  // ── Sélecteur de lignes selon le type ────────────────────────────
  private buildRows(): any[] {
    switch (this.selectedType) {
      case 'progression':    return this.buildProgressionRows();
      case 'certifications': return this.buildCertRows();
      case 'sessions':       return this.buildSessionRows();
      case 'quiz':           return this.buildQuizRows();
      case 'demandes':       return this.buildDemandesRows();
      case 'bilan':          return this.buildUserRows();
      default:               return this.buildUserRows();
    }
  }

  // ── Constructeurs de lignes par type ─────────────────────────────

  private buildUserRows(): any[] {
    let data = [...this.rawUsers];
    if (this.employes === 'actifs') {
      data = data.filter((u: any) => u.statut === 1 || u.est_actif === true);
    }
    return data.map((u: any) => ({
      'Nom':        (u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim()) || '—',
      'Email':      u.email      || '—',
      'Rôle':       u.role?.name || u.role || '—',
      'Direction':  u.direction  || '—',
      'Matricule':  u.matricule  || '—',
      'Statut':     (u.statut === 1 || u.est_actif) ? 'Actif' : 'Inactif',
      'Inscrit le': u.created_at ? new Date(u.created_at).toLocaleDateString('fr-FR') : '—',
    }));
  }

  private buildProgressionRows(): any[] {
    let data = [...this.rawFmts];
    if (this.formation !== 'toutes' && this.formation) {
      data = data.filter((f: any) => (f.titre || f.title) === this.formation);
    }
    const threshold = this.getDateThreshold();
    if (threshold) {
      data = data.filter((f: any) => !f.created_at || new Date(f.created_at) >= threshold);
    }
    return data.map((f: any) => ({
      'Formation':  f.titre || f.title || '—',
      'Catégorie':  f.categorie?.nom   || '—',
      'Complétion': `${f.taux_completion ?? 0}%`,
      'Inscrits':   f.nb_participants  || f.nb_inscrits || 0,
      'Durée':      f.duree_totale ? `${Math.round(f.duree_totale / 60)}h` : '—',
      'Publié':     f.est_publie ? 'Oui' : 'Non',
    }));
  }

  private buildCertRows(): any[] {
    let data = [...this.rawCerts];
    const threshold = this.getDateThreshold();
    if (threshold) {
      data = data.filter((c: any) => !c.date_emission || new Date(c.date_emission) >= threshold);
    }
    if (this.employes === 'actifs') {
      // filtre approximatif sur statut si disponible
      data = data.filter((c: any) => !c.user || c.user?.statut === 1 || c.user?.est_actif === true);
    }
    if (this.formation !== 'toutes' && this.formation) {
      data = data.filter((c: any) =>
        (c.formation_titre || c.formation?.titre) === this.formation
      );
    }
    return data.map((c: any) => ({
      'Employé':    c.employe_nom || c.user?.name || c.nom_employe || '—',
      'Formation':  c.formation_titre || c.formation?.titre || '—',
      'Délivré le': c.date_emission  ? new Date(c.date_emission).toLocaleDateString('fr-FR')  : '—',
      'Expiration': c.date_expiration ? new Date(c.date_expiration).toLocaleDateString('fr-FR') : 'N/A',
      'Statut':     c.date_expiration && new Date(c.date_expiration) < new Date() ? 'Expiré' : 'Valide',
    }));
  }

  private buildSessionRows(): any[] {
    let data = [...this.rawSessions];
    const threshold = this.getDateThreshold();
    if (threshold) {
      data = data.filter((s: any) => !s.date_debut || new Date(s.date_debut) >= threshold);
    }
    if (this.formation !== 'toutes' && this.formation) {
      data = data.filter((s: any) =>
        (s.formation?.titre || s.formation_titre) === this.formation
      );
    }
    return data.map((s: any) => ({
      'Titre':      s.titre || '—',
      'Formation':  s.formation?.titre || s.formation_titre || '—',
      'Type':       s.type   || '—',
      'Statut':     s.statut || '—',
      'Date début': s.date_debut ? new Date(s.date_debut).toLocaleDateString('fr-FR') : '—',
      'Date fin':   s.date_fin   ? new Date(s.date_fin).toLocaleDateString('fr-FR')   : '—',
      'Inscrits':   s.nombre_inscrits || 0,
      'Capacité':   s.capacite_max    || 0,
    }));
  }

  private buildQuizRows(): any[] {
    let data = [...this.rawQuizzes];
    if (this.formation !== 'toutes' && this.formation) {
      data = data.filter((q: any) =>
        (q.formation?.titre || q.formation_titre) === this.formation
      );
    }
    return data.map((q: any) => ({
      'Quiz':         q.titre || '—',
      'Formation':    q.formation?.titre || q.formation_titre || '—',
      'Questions':    q.nb_questions || q.questions?.length || 0,
      'Score min':    q.score_minimum != null ? `${q.score_minimum}%` : '—',
      'Durée (min)':  q.duree_minutes || '—',
      'Statut':       q.is_active ? 'Actif' : 'Inactif',
    }));
  }

  private buildDemandesRows(): any[] {
    let data = [...this.rawDemandes];
    const threshold = this.getDateThreshold();
    if (threshold) {
      data = data.filter((d: any) => !d.created_at || new Date(d.created_at) >= threshold);
    }
    if (this.formation !== 'toutes' && this.formation) {
      data = data.filter((d: any) =>
        (d.formation?.titre) === this.formation
      );
    }
    return data.map((d: any) => {
      const nom   = d.employe ? (`${d.employe.prenom ?? ''} ${d.employe.nom ?? d.employe.name ?? ''}`.trim() || d.employe.name || '—') : '—';
      const email = d.employe?.email || '—';
      const objet = d.formation?.titre || d.catalogue?.titre || d.parcours?.nom || d.session_formation?.titre || '—';
      return {
        'Employé':        nom,
        'Email':          email,
        'Type':           d.type_demande        || '—',
        'Objet':          objet,
        'Statut':         d.statut_display      || d.statut    || '—',
        'Priorité':       d.priorite_display    || d.priorite  || '—',
        'Validé par':     d.validee_par?.name   || '—',
        'Date demande':   d.created_at          ? new Date(d.created_at).toLocaleDateString('fr-FR') : '—',
        'Date souhaitée': d.date_souhaitee_debut ? new Date(d.date_souhaitee_debut).toLocaleDateString('fr-FR') : '—',
        'Date validation':d.date_validation      ? new Date(d.date_validation).toLocaleDateString('fr-FR') : '—',
        'Motif':          d.motif_demande        || '—',
      };
    });
  }

  // ── Filtre temporel ───────────────────────────────────────────────
  private getDateThreshold(): Date | null {
    const now = new Date();
    if (this.periode === 'mois')      return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    if (this.periode === 'trimestre') return new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
    if (this.periode === 'annee')     return new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    return null;
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
    return ({ mois: 'Ce mois', trimestre: 'Ce trimestre', annee: 'Cette année', custom: 'Personnalisée' } as any)[this.periode] ?? this.periode;
  }
}
