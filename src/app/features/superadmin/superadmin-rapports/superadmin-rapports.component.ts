import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { RapportExportService } from '../../../shared/service/rapport/rapport-export.service';
import { TicketService } from '../../../shared/service/ticket/ticket.service';

export interface RapportRecent {
  nom: string; meta: string; format: 'pdf' | 'excel' | 'csv'; date: string; url?: string;
}

@Component({
  selector: 'app-superadmin-rapports',
  imports: [CommonModule, FormsModule],
  templateUrl: './superadmin-rapports.component.html',
  styleUrl: './superadmin-rapports.component.scss'
})
export class SuperadminRapportsComponent implements OnInit {

  selectedType = 'multi';
  readonly types = [
    { key: 'multi',         icon: 'isax-buildings-2',   color: 'purple', label: 'Multi-entreprises',   sub: 'Vue consolidée de toutes les entreprises' },
    { key: 'entreprise',    icon: 'isax-profile-2user', color: 'gray',   label: 'Par entreprise',      sub: 'Rapport ciblé sur une seule entreprise' },
    { key: 'certifications',icon: 'isax-medal',         color: 'orange', label: 'Certifications',      sub: 'Délivrés, expirations, renouvellements' },
    { key: 'support',       icon: 'isax-ticket',          color: 'gray',  label: 'Support & tickets',   sub: 'Délais de résolution, satisfaction' },
    { key: 'performance',   icon: 'isax-chart-2',       color: 'purple', label: 'Performance globale', sub: 'KPIs consolidés plateforme' },
    { key: 'financier',     icon: 'isax-wallet-add',    color: 'gray',   label: 'Financier',           sub: 'Formations, prix, inscrits' },
  ];

  periode     = 'trimestre';
  entreprise  = 'toutes';
  format      = 'pdf';
  formationsF = 'toutes';
  groupe      = 'entreprise';
  langue      = 'fr';

  schedules = [
    { label: 'Rapport hebdomadaire',          sub: 'Chaque lundi 08h00 · envoyé aux Admin RH',           on: true  },
    { label: 'Rapport mensuel consolidé',     sub: '1er de chaque mois · toutes entreprises + direction', on: true  },
    { label: 'Alerte expirations certificats',sub: '30j avant · email automatique aux concernés',         on: false },
  ];

  // ── KPIs ───────────────────────────────────────────────
  totalUsers      = 0;
  activeUsers     = 0;
  completion      = 0;
  totalCerts      = 0;
  certExpiring    = 0;
  scoresMoy       = 0;
  totalFormations = 0;
  totalSessions   = 0;
  totalDemandes   = 0;

  entreprises:       { label: string; pct: number }[]            = [];
  entrepriseOptions: { value: string; label: string }[]          = [];

  loading    = false;
  generating = false;
  successMsg = '';

  recents: RapportRecent[] = [];

  // ── Données brutes ─────────────────────────────────────
  private rawUsers:      any[] = [];
  private rawCerts:      any[] = [];
  private rawClients:    any[] = [];
  private rawFormations: any[] = [];
  private rawSessions:   any[] = [];
  private rawQuizzes:    any[] = [];
  private rawDemandes:   any[] = [];
  private rawTickets:    any[] = [];

  totalTickets    = 0;
  ticketsOuverts  = 0;

  constructor(
    private http: HttpClient,
    private exportSvc: RapportExportService,
    private ticketService: TicketService,
  ) {}

  private get headers(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({ 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' });
  }

  ngOnInit(): void { this.loadPreview(); }

  // ════════════════════════════════════════════════════════
  // CHARGEMENT
  // ════════════════════════════════════════════════════════
  loadPreview(): void {
    this.loading = true;
    forkJoin({
      users:      this.http.get<any>(`${environment.apiUrl}/users`,              { headers: this.headers }).pipe(catchError(() => of({ users: [] }))),
      certs:      this.http.get<any>(`${environment.apiUrl}/certificats`,        { headers: this.headers }).pipe(catchError(() => of([]))),
      clients:    this.http.get<any>(`${environment.apiUrl}/entreprises`,        { headers: this.headers }).pipe(catchError(() => of({ data: [] }))),
      formations: this.http.get<any>(`${environment.apiUrl}/formations`,         { headers: this.headers }).pipe(catchError(() => of([]))),
      sessions:   this.http.get<any>(`${environment.apiUrl}/sessions-formation`, { headers: this.headers }).pipe(catchError(() => of([]))),
      quizzes:    this.http.get<any>(`${environment.apiUrl}/quizzes`,            { headers: this.headers }).pipe(catchError(() => of([]))),
      demandes:   this.http.get<any>(`${environment.apiUrl}/demandes-formation`, { headers: this.headers }).pipe(catchError(() => of([]))),
      tickets:    this.ticketService.getTickets({ par_page: 1000 }).pipe(catchError(() => of({ data: { data: [] } }))),
    }).subscribe({
      next: ({ users, certs, clients, formations, sessions, quizzes, demandes, tickets }) => {
        // Normalisation
        this.rawUsers     = users.users      || users.data      || (Array.isArray(users)      ? users      : []);
        this.rawCerts     = Array.isArray(certs) ? certs        : (certs.certificats           || certs.data  || []);
        this.rawClients   = clients.data     || clients.entreprises || (Array.isArray(clients) ? clients    : []);
        this.rawFormations= formations.data  || formations.formations || (Array.isArray(formations) ? formations : []);
        this.rawSessions  = sessions.data    || sessions.sessions    || (Array.isArray(sessions)   ? sessions   : []);
        this.rawQuizzes   = quizzes.data     || quizzes.quizzes      || (Array.isArray(quizzes)    ? quizzes    : []);
        this.rawDemandes  = demandes.demandes || demandes.data || (Array.isArray(demandes) ? demandes : []);
        this.rawTickets   = tickets?.data?.data || tickets?.data || [];

        // KPIs utilisateurs
        this.totalUsers  = this.rawUsers.length;
        this.activeUsers = this.rawUsers.filter((u: any) => u.statut === 1 || u.statut === 'actif').length;

        // Complétion = % d'utilisateurs ayant au moins 1 certificat
        const certifiedIds = new Set(this.rawCerts.map((c: any) => c.employe_id));
        this.completion = this.totalUsers
          ? Math.round((certifiedIds.size / this.totalUsers) * 100)
          : 0;

        // KPIs certifications
        this.totalCerts   = this.rawCerts.length;
        this.certExpiring = this.rawCerts.filter((c: any) => {
          if (!c.date_expiration) return false;
          const diff = new Date(c.date_expiration).getTime() - Date.now();
          return diff > 0 && diff < 30 * 86400000;
        }).length;

        // Score moyen (depuis score_final des certificats)
        const scores = this.rawCerts
          .map((c: any) => Number(c.score_final))
          .filter(n => !isNaN(n) && n > 0);
        this.scoresMoy = scores.length
          ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
          : 0;

        // Totaux
        this.totalFormations = this.rawFormations.length;
        this.totalSessions   = this.rawSessions.length;
        this.totalDemandes   = this.rawDemandes.length;
        this.totalTickets    = this.rawTickets.length;
        this.ticketsOuverts  = this.rawTickets.filter((t: any) => t.statut === 'ouvert' || t.statut === 'en_cours').length;

        // Options dropdown entreprise
        this.entrepriseOptions = this.rawClients.map((e: any) => ({
          value: String(e.id),
          label: e.nom || e.name || `Entreprise ${e.id}`,
        }));

        // Barres par entreprise : % certifiés / employés
        this.entreprises = this.rawClients.slice(0, 5).map((e: any) => {
          const empCount  = this.rawUsers.filter((u: any) => u.entreprise_id === e.id).length;
          const certCount = this.rawCerts.filter((c: any) => c.entreprise_id === e.id).length;
          const pct = empCount > 0 ? Math.min(100, Math.round((certCount / empCount) * 100)) : 0;
          return { label: e.nom || e.name || `Entreprise ${e.id}`, pct };
        });

        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  // ════════════════════════════════════════════════════════
  // ACTIONS
  // ════════════════════════════════════════════════════════
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

  downloadRecent(r: RapportRecent): void {
    if (r.url) { window.open(r.url, '_blank'); return; }
    this.doExport(r.format);
    this.successMsg = `Téléchargement de « ${r.nom} » lancé.`;
    setTimeout(() => { this.successMsg = ''; }, 3000);
  }

  // ════════════════════════════════════════════════════════
  // EXPORT
  // ════════════════════════════════════════════════════════
  private doExport(fmt: string): void {
    const filename = `rapport-superadmin-${this.selectedType}-${this.periode}-${new Date().toISOString().slice(0, 10)}`;

    if (fmt === 'pdf') {
      if (this.selectedType === 'multi') {
        this.exportSvc.exportPdf('Rapport global — toutes entreprises', [
          { heading: 'Utilisateurs',          rows: this.buildUserRows()       },
          { heading: 'Entreprises',           rows: this.buildClientRows()     },
          { heading: 'Certifications',        rows: this.buildCertRows()       },
          { heading: 'Support & tickets',       rows: this.buildTicketRows()    },
        ], filename);
      } else {
        const labelMap: Record<string, string> = {
          entreprise:     'Par entreprise',
          certifications: 'Certifications',
          support:        'Support & tickets',
          performance:    'Performance globale',
          financier:      'Données financières',
        };
        this.exportSvc.exportPdf(
          `Rapport — ${labelMap[this.selectedType] ?? this.selectedType}`,
          [{ heading: labelMap[this.selectedType] ?? this.selectedType, rows: this.buildRows() }],
          filename,
        );
      }
    } else if (fmt === 'excel') {
      this.exportSvc.exportExcel(this.buildRows(), filename);
    } else if (fmt === 'csv') {
      this.exportSvc.exportCsv(this.buildRows(), filename);
    } else if (fmt === 'json') {
      const json = JSON.stringify(this.buildRows(), null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href = url; a.download = filename + '.json';
      document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
    }
  }

  // ════════════════════════════════════════════════════════
  // BUILDERS (dispatch par type)
  // ════════════════════════════════════════════════════════
  private buildRows(): any[] {
    switch (this.selectedType) {
      case 'certifications': return this.buildCertRows();
      case 'entreprise':     return this.buildClientRows();
      case 'performance':    return this.buildPerformanceRows();
      case 'financier':      return this.buildFinancierRows();
      case 'support':        return this.buildTicketRows();
      default:               return this.buildUserRows();
    }
  }

  private buildUserRows(): any[] {
    return this.applyFilters(this.rawUsers, 'entreprise_id', 'created_at').map((u: any) => ({
      'Nom':        u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || '—',
      'Email':      u.email || '—',
      'Rôle':       u.role?.name || u.role || '—',
      'Entreprise': u.entreprise?.nom || u.entreprise_nom || '—',
      'Direction':  u.direction || '—',
      'Matricule':  u.matricule || '—',
      'Statut':     u.statut === 1 || u.statut === 'actif' ? 'Actif' : 'Inactif',
      'Inscrit le': u.created_at ? new Date(u.created_at).toLocaleDateString('fr-FR') : '—',
    }));
  }

  private buildCertRows(): any[] {
    return this.applyFilters(this.rawCerts, 'entreprise_id', 'date_delivrance').map((c: any) => ({
      'Employé':    c.employe ? (`${c.employe.prenom ?? ''} ${c.employe.nom ?? c.employe.name ?? ''}`.trim() || c.employe.name || '—') : '—',
      'Email':      c.employe?.email || '—',
      'Formation':  c.formation?.titre || '—',
      'Session':    c.session?.titre || '—',
      'Entreprise': c.entreprise?.nom || '—',
      'Formateur':  c.formateur ? (`${c.formateur.prenom ?? ''} ${c.formateur.nom ?? c.formateur.name ?? ''}`.trim() || '—') : '—',
      'Code':       c.code_unique || '—',
      'Score':      c.score_final != null ? `${c.score_final}%` : '—',
      'Délivré le': c.date_delivrance ? new Date(c.date_delivrance).toLocaleDateString('fr-FR') : '—',
      'Expiration': c.date_expiration ? new Date(c.date_expiration).toLocaleDateString('fr-FR') : '—',
      'Statut':     c.statut || '—',
    }));
  }

  private buildClientRows(): any[] {
    return this.rawClients.map((e: any) => {
      const empCount  = this.rawUsers.filter((u: any) => u.entreprise_id === e.id).length;
      const certCount = this.rawCerts.filter((c: any) => c.entreprise_id === e.id).length;
      return {
        'Entreprise':     e.nom || e.name || '—',
        'Email':          e.email || '—',
        'Secteur':        e.secteur_activite || '—',
        'Pays':           e.pays || '—',
        'Statut':         e.statut || '—',
        'Employés':       empCount,
        'Certifications': certCount,
        'Abonnement':     e.abonnement || '—',
      };
    });
  }

  private buildPerformanceRows(): any[] {
    return this.rawClients.map((e: any) => {
      const users   = this.rawUsers.filter((u: any) => u.entreprise_id === e.id);
      const actives = users.filter((u: any) => u.statut === 1 || u.statut === 'actif').length;
      const certs   = this.rawCerts.filter((c: any) => c.entreprise_id === e.id);
      const scores  = certs.map((c: any) => Number(c.score_final)).filter(n => !isNaN(n) && n > 0);
      const avg     = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
      const fmts    = this.rawFormations.filter((f: any) => f.entreprise_id === e.id);
      return {
        'Entreprise':     e.nom || '—',
        'Employés total': users.length,
        'Actifs':         actives,
        'Formations':     fmts.length,
        'Certifications': certs.length,
        'Score moyen':    avg ? `${avg}%` : '—',
      };
    });
  }

  private buildFinancierRows(): any[] {
    return this.applyFilters(this.rawFormations, 'entreprise_id', 'created_at').map((f: any) => ({
      'Formation':  f.titre || '—',
      'Entreprise': f.entreprise?.nom || '—',
      'Type':       f.type || '—',
      'Prix':       f.prix != null && f.prix > 0 ? `${f.prix} XOF` : 'Gratuit',
      'Statut':     f.est_publie ? 'Publiée' : 'Non publiée',
      'Inscrits':   f.nb_inscriptions ?? '—',
      'Date début': f.date_debut ? new Date(f.date_debut).toLocaleDateString('fr-FR') : '—',
    }));
  }

  private buildDemandesRows(): any[] {
    return this.rawDemandes.map((d: any) => ({
      'Employé':        d.employe ? (`${d.employe.prenom ?? ''} ${d.employe.nom ?? d.employe.name ?? ''}`.trim() || d.employe.name || '—') : '—',
      'Email':          d.employe?.email || '—',
      'Entreprise':     d.employe?.entreprise_id ? `#${d.employe.entreprise_id}` : '—',
      'Type':           d.type_demande || '—',
      'Objet':          d.formation?.titre || d.catalogue?.titre || d.parcours?.nom || d.session_formation?.titre || '—',
      'Statut':         d.statut_display || d.statut || '—',
      'Priorité':       d.priorite_display || d.priorite || '—',
      'Validé par':     d.validee_par?.name || '—',
      'Date demande':   d.created_at ? new Date(d.created_at).toLocaleDateString('fr-FR') : '—',
      'Date validation':d.date_validation ? new Date(d.date_validation).toLocaleDateString('fr-FR') : '—',
      'Motif':          d.motif_demande || '—',
    }));
  }

  private buildTicketRows(): any[] {
    let data = [...this.rawTickets];

    // Filtre entreprise
    if (this.entreprise && this.entreprise !== 'toutes') {
      data = data.filter((t: any) => String(t.entreprise_id) === String(this.entreprise));
    }

    // Filtre période
    const thresh = this.getDateThreshold();
    if (thresh) {
      data = data.filter((t: any) => t.created_at && new Date(t.created_at).getTime() >= thresh);
    }

    return data.map((t: any) => {
      const statutLabel: Record<string, string> = {
        ouvert: 'Ouvert', en_cours: 'En cours', en_attente: 'En attente',
        resolu: 'Résolu', ferme: 'Fermé', annule: 'Annulé',
      };
      const prioriteLabel: Record<string, string> = {
        basse: 'Basse', moyenne: 'Moyenne', haute: 'Haute', critique: 'Critique',
      };

      const tempsMins = t.temps_resolution_minutes;
      const tempsLabel = tempsMins != null
        ? (tempsMins >= 60 ? `${Math.floor(tempsMins / 60)}h${tempsMins % 60 ? (tempsMins % 60) + 'min' : ''}` : `${tempsMins}min`)
        : '—';

      return {
        'Référence':    t.reference || `#${t.id}`,
        'Sujet':        t.sujet || '—',
        'Créateur':     t.createur?.name || '—',
        'Email':        t.createur?.email || '—',
        'Entreprise':   t.entreprise?.nom || '—',
        'Catégorie':    t.categorie || '—',
        'Type':         t.type || '—',
        'Canal':        t.canal || '—',
        'Priorité':     prioriteLabel[t.priorite] || t.priorite || '—',
        'Statut':       statutLabel[t.statut] || t.statut || '—',
        'Agent assigné':t.agent_assigne?.name || '—',
        'SLA respecté': t.sla_respecte === true ? 'Oui' : t.sla_respecte === false ? 'Non' : '—',
        'Temps résol.': tempsLabel,
        'Satisfaction': t.satisfaction_score != null ? `${t.satisfaction_score}/5` : '—',
        'Escaladé':     t.est_escalade ? 'Oui' : 'Non',
        'Date création':t.created_at ? new Date(t.created_at).toLocaleDateString('fr-FR') : '—',
        'Date résol.':  t.date_resolution ? new Date(t.date_resolution).toLocaleDateString('fr-FR') : '—',
      };
    });
  }

  // ════════════════════════════════════════════════════════
  // FILTRES (période + entreprise)
  // ════════════════════════════════════════════════════════
  private applyFilters(items: any[], entField: string, dateField: string): any[] {
    let data = [...items];
    if (this.entreprise && this.entreprise !== 'toutes') {
      data = data.filter(i => String(i[entField]) === String(this.entreprise));
    }
    const thresh = this.getDateThreshold();
    if (thresh) {
      data = data.filter(i => i[dateField] && new Date(i[dateField]).getTime() >= thresh);
    }
    return data;
  }

  private getDateThreshold(): number | null {
    const now = new Date();
    if (this.periode === 'mois') {
      return new Date(now.getFullYear(), now.getMonth(), 1).getTime();
    } else if (this.periode === 'trimestre') {
      const q = Math.floor(now.getMonth() / 3);
      return new Date(now.getFullYear(), q * 3, 1).getTime();
    } else if (this.periode === 'annee') {
      return new Date(now.getFullYear(), 0, 1).getTime();
    }
    return null;
  }

  // ════════════════════════════════════════════════════════
  // HELPERS
  // ════════════════════════════════════════════════════════
  getFormatIcon(fmt: string): string {
    return ({ pdf: 'isax-document', excel: 'isax-document-text', csv: 'isax-clipboard-text' } as any)[fmt] ?? 'isax-document';
  }

  get periodeLabel(): string {
    const now = new Date();
    if (this.periode === 'mois')      return now.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    if (this.periode === 'trimestre') return `T${Math.floor(now.getMonth() / 3) + 1} ${now.getFullYear()}`;
    if (this.periode === 'annee')     return String(now.getFullYear());
    return 'Personnalisée';
  }
}
