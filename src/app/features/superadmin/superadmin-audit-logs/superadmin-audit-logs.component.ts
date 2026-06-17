import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, forkJoin } from 'rxjs';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AuditLogService, AuditLog, AuditStats } from '../../../shared/service/audit-log/audit-log.service';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { routes } from '../../../shared/service/routes/routes';

export interface SecurityAlert {
  icon: string;
  iconClass: string;
  title: string;
  sub: string;
  time: string;
}

export interface ActionStat {
  label: string;
  key: string;
  value: number;
  barWidth: number;
  fillClass: string;
}

@Component({
  selector: 'app-superadmin-audit-logs',
  templateUrl: './superadmin-audit-logs.component.html',
  styleUrls: ['./superadmin-audit-logs.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class SuperadminAuditLogsComponent implements OnInit, OnDestroy {
  public routes = routes;

  // ── État chargement ──────────────────────────────────────────────────────────
  loading       = false;
  loadingStats  = false;
  error: string | null = null;

  // ── Filtres ──────────────────────────────────────────────────────────────────
  searchQuery    = '';
  filterType     = '';
  filterProfile  = '';
  filterCompany  = '';
  filterSeverity = '';
  dateFrom       = '';
  dateTo         = '';

  activeChips: { label: string; class: string; icon: string; key: string }[] = [];

  private searchSubject = new Subject<string>();
  private destroy$      = new Subject<void>();

  // ── Pagination ───────────────────────────────────────────────────────────────
  currentPage = 1;
  pageSize    = 50;
  totalItems  = 0;
  lastPage    = 1;

  // ── KPI ──────────────────────────────────────────────────────────────────────
  kpi = {
    logsToday:          0,
    tendancePourcent:   0,
    alertesCritiques:   0,
    connexionsEchouees: 0,
    utilisateursActifs: 0,
    suppressions:       0
  };

  // ── Données ──────────────────────────────────────────────────────────────────
  logs: AuditLog[]              = [];
  securityAlerts: SecurityAlert[]= [];
  actionStats: ActionStat[]      = [];
  entreprises: { id: number; nom: string }[] = [];

  // ── Drawer détail ────────────────────────────────────────────────────────────
  selectedLog: AuditLog | null = null;
  drawerOpen = false;

  private readonly STAT_LABELS: Record<string, { label: string; fillClass: string }> = {
    connexion:       { label: 'Connexions réussies',  fillClass: 'sf-g' },
    modification:    { label: 'Modifications',        fillClass: 'sf-p' },
    creation:        { label: 'Créations',            fillClass: 'sf-p' },
    export:          { label: 'Exports de données',   fillClass: 'sf-a' },
    echec_connexion: { label: 'Connexions échouées',  fillClass: 'sf-a' },
    suppression:     { label: 'Suppressions',         fillClass: 'sf-r' },
    acces_refuse:    { label: 'Accès refusés',        fillClass: 'sf-r' },
    revocation:      { label: 'Révocations',          fillClass: 'sf-r' },
    approbation:     { label: 'Approbations',         fillClass: 'sf-g' },
    generation:      { label: 'Générations',          fillClass: 'sf-g' },
  };

  constructor(
    private auditLogService: AuditLogService,
    private companyService: ClientCompanyService
  ) {}

  ngOnInit(): void {
    this.initSearchDebounce();
    this.loadAll();
    this.loadEntreprises();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Chargement ────────────────────────────────────────────────────────────────

  private initSearchDebounce(): void {
    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.currentPage = 1;
      this.loadLogs();
      this.buildActiveChips();
    });
  }

  loadAll(): void {
    this.loadLogs();
    this.loadStats();
  }

  loadLogs(): void {
    this.loading = true;
    this.error   = null;

    this.auditLogService.getLogs(this.buildFilters()).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (res) => {
        const paginated   = res.data;
        this.logs         = paginated.data          ?? [];
        this.totalItems   = paginated.total         ?? 0;
        this.lastPage     = paginated.last_page     ?? 1;
        this.currentPage  = paginated.current_page  ?? 1;
        this.loading      = false;
      },
      error: (err: any) => {
        this.error   = httpErrorMessage(err, 'Impossible de charger les logs.');
        this.loading = false;
      }
    });
  }

  loadStats(): void {
    this.loadingStats = true;
    this.auditLogService.getStatistiques(this.dateFrom || undefined, this.dateTo || undefined).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (res: { success: boolean; data: AuditStats }) => {
        const data = res.data;

        // KPI
        this.kpi = {
          logsToday:          data.kpi.logs_aujourdhui,
          tendancePourcent:   data.kpi.tendance_pourcent,
          alertesCritiques:   data.kpi.alertes_critiques,
          connexionsEchouees: data.kpi.connexions_echouees,
          utilisateursActifs: data.kpi.utilisateurs_actifs,
          suppressions:       data.kpi.suppressions_mois,
        };

        // Répartition des actions
        const repartition = data.repartition ?? {};
        const max = Math.max(...Object.values(repartition) as number[], 1);
        this.actionStats = Object.entries(repartition)
          .sort(([, a], [, b]) => (b as number) - (a as number))
          .map(([key, value]) => {
            const meta = this.STAT_LABELS[key] ?? { label: key, fillClass: 'sf-p' };
            return {
              key,
              label:     meta.label,
              value:     value as number,
              barWidth:  Math.round(((value as number) / max) * 100),
              fillClass: meta.fillClass,
            };
          });

        // Alertes sécurité
        this.securityAlerts = (data.alertes_actives ?? []).map((log: AuditLog) => ({
          icon:      this.getAlertIcon(log.type_action),
          iconClass: log.severite === 'critique' ? 'ai-icon-r' : 'ai-icon-a',
          title:     log.libelle_action,
          sub:       [log.entite_label, log.details, log.ip_address].filter(Boolean).join(' · '),
          time:      this.timeAgo(new Date(log.created_at)),
        }));

        this.loadingStats = false;
      },
      error: () => { this.loadingStats = false; }
    });
  }

  refresh(): void {
    this.loadAll();
  }

  private loadEntreprises(): void {
    this.companyService.getCompanies({ per_page: 200 }).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (res: any) => {
        const data = res.data ?? res.entreprises ?? res ?? [];
        this.entreprises = (Array.isArray(data) ? data : []).map((e: any) => ({
          id:  e.id,
          nom: e.nom,
        }));
      },
      error: () => { /* silencieux — le filtre restera vide */ }
    });
  }

  // ── Filtres ────────────────────────────────────────────────────────────────────

  private buildFilters() {
    return {
      search:            this.searchQuery    || undefined,
      type_action:       this.filterType     || undefined,
      acteur_role:       this.filterProfile  || undefined,
      acteur_entreprise: this.filterCompany  || undefined,
      severite:          this.filterSeverity || undefined,
      date_debut:        this.dateFrom       || undefined,
      date_fin:          this.dateTo         || undefined,
      par_page:          this.pageSize,
      page:              this.currentPage,
    };
  }

  onSearch(): void {
    this.searchSubject.next(this.searchQuery);
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.loadLogs();
    this.loadStats();
    this.buildActiveChips();
  }

  private buildActiveChips(): void {
    const chips: { label: string; class: string; icon: string; key: string }[] = [];

    const sevLabels: Record<string, string> = { critique: 'Critique', attention: 'Avertissement', info: 'Info' };
    if (this.filterSeverity) {
      chips.push({ label: sevLabels[this.filterSeverity] ?? this.filterSeverity, class: 'afc-r', icon: 'isax-warning-2', key: 'severity' });
    }
    if (this.filterProfile) {
      chips.push({ label: this.filterProfile, class: 'afc-p', icon: 'isax-shield', key: 'profile' });
    }
    if (this.filterCompany) {
      chips.push({ label: this.filterCompany, class: 'afc-b', icon: 'isax-buildings-2', key: 'company' });
    }
    if (this.filterType) {
      chips.push({ label: this.filterType, class: 'afc-g', icon: 'isax-tag', key: 'type' });
    }
    if (this.dateFrom) {
      chips.push({ label: this.dateFrom + (this.dateTo && this.dateTo !== this.dateFrom ? ' → ' + this.dateTo : ''), class: 'afc-a', icon: 'isax-calendar', key: 'date' });
    }

    this.activeChips = chips;
  }

  removeChip(key: string): void {
    if (key === 'severity') this.filterSeverity = '';
    if (key === 'profile')  this.filterProfile  = '';
    if (key === 'company')  this.filterCompany  = '';
    if (key === 'type')     this.filterType     = '';
    if (key === 'date')     { this.dateFrom = ''; this.dateTo = ''; }
    this.onFilterChange();
  }

  clearAllFilters(): void {
    this.filterSeverity = '';
    this.filterProfile  = '';
    this.filterCompany  = '';
    this.filterType     = '';
    this.dateFrom       = '';
    this.dateTo         = '';
    this.searchQuery    = '';
    this.onFilterChange();
  }

  // ── Pagination ────────────────────────────────────────────────────────────────

  get totalPages(): number { return this.lastPage; }
  get displayStart(): number { return this.totalItems === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1; }
  get displayEnd(): number   { return Math.min(this.currentPage * this.pageSize, this.totalItems); }

  get pageNumbers(): number[] {
    const pages: number[] = [];
    const start = Math.max(1, this.currentPage - 1);
    const end   = Math.min(this.totalPages, this.currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
    this.loadLogs();
  }

  onPageSizeChange(): void {
    this.currentPage = 1;
    this.loadLogs();
  }

  // ── Drawer détail ────────────────────────────────────────────────────────────

  openDetail(log: AuditLog): void {
    this.selectedLog = log;
    this.drawerOpen  = true;
  }

  closeDetail(): void {
    this.drawerOpen  = false;
    setTimeout(() => { this.selectedLog = null; }, 250); // après l'animation
  }

  // ── Export CSV ────────────────────────────────────────────────────────────────

  exportCSV(): void {
    const url = this.auditLogService.getExportCsvUrl({
      date_debut: this.dateFrom || undefined,
      date_fin:   this.dateTo   || undefined,
      severite:   this.filterSeverity || undefined,
    });
    const a    = document.createElement('a');
    a.href     = url;
    a.target   = '_blank';
    a.download = `audit-logs-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  }

  // ── Helpers affichage ────────────────────────────────────────────────────────

  getActorInitials(log: AuditLog): string {
    if (!log.acteur_nom) return '??';
    return log.acteur_nom.split(' ').map(w => w[0] ?? '').join('').substring(0, 2).toUpperCase();
  }

  getActorClass(log: AuditLog): string {
    const role = (log.acteur_role ?? '').toLowerCase();
    if (!log.user_id) return 'av-r';
    if (role.includes('superadmin') || role.includes('super admin')) return 'av-p';
    if (role.includes('admin rh'))   return 'av-a';
    if (role.includes('formateur'))  return 'av-g';
    if (role.includes('syst'))       return 'av-sys';
    return 'av-b';
  }

  getActionClass(type: string): string {
    const m: Record<string, string> = {
      connexion:       'ap-login',
      deconnexion:     'ap-logout',
      echec_connexion: 'ap-fail',
      creation:        'ap-create',
      modification:    'ap-update',
      suppression:     'ap-delete',
      export:          'ap-export',
      import:          'ap-update',
      approbation:     'ap-approve',
      refus:           'ap-reject',
      revocation:      'ap-revoke',
      generation:      'ap-create',
      acces_refuse:    'ap-fail',
    };
    return m[type] ?? 'ap-update';
  }

  getActionIcon(type: string): string {
    const m: Record<string, string> = {
      connexion:       'isax-login',
      deconnexion:     'isax-logout',
      echec_connexion: 'isax-lock',
      creation:        'isax-add-circle',
      modification:    'isax-edit-2',
      suppression:     'isax-trash',
      export:          'isax-import',
      import:          'isax-document-upload',
      approbation:     'isax-tick-circle',
      refus:           'isax-close-circle',
      revocation:      'isax-forbidden',
      generation:      'isax-medal-star',
      acces_refuse:    'isax-lock',
      autre:           'isax-info-circle',
    };
    return m[type] ?? 'isax-info-circle';
  }

  getActionLabel(type: string): string {
    const m: Record<string, string> = {
      connexion:       'Connexion',
      deconnexion:     'Déconnexion',
      echec_connexion: 'Échec login',
      creation:        'Création',
      modification:    'Modification',
      suppression:     'Suppression',
      export:          'Export données',
      import:          'Import',
      approbation:     'Approbation',
      refus:           'Refus',
      revocation:      'Révocation',
      generation:      'Génération',
      acces_refuse:    'Accès refusé',
      autre:           'Autre',
    };
    return m[type] ?? type;
  }

  getSeverityDotClass(sev: string): string {
    return { info: 'sev-ok', attention: 'sev-warn', critique: 'sev-danger' }[sev] ?? 'sev-ok';
  }

  getSeverityTextClass(sev: string): string {
    return { info: 'text-info', attention: 'text-warn', critique: 'text-danger' }[sev] ?? 'text-info';
  }

  getSeverityLabel(sev: string): string {
    return { info: 'Info', attention: 'Attention', critique: 'Critique' }[sev] ?? sev;
  }

  getStatusClass(status: string): string {
    return { ok: 'st-ok', bloque: 'st-bloque', en_cours: 'st-encours' }[status] ?? 'st-ok';
  }

  getStatusLabel(status: string): string {
    return { ok: 'OK', bloque: 'Bloqué', en_cours: 'En cours' }[status] ?? status;
  }

  getRowClass(log: AuditLog): string {
    if (log.severite === 'critique') return 'row-danger';
    if (log.severite === 'attention') return 'row-warn';
    return '';
  }

  formatTime(dateStr: string): string {
    const d = new Date(dateStr);
    const day = d.getDate().toString().padStart(2, '0');
    const mo  = (d.getMonth() + 1).toString().padStart(2, '0');
    const h   = d.getHours().toString().padStart(2, '0');
    const mi  = d.getMinutes().toString().padStart(2, '0');
    const s   = d.getSeconds().toString().padStart(2, '0');
    return `${day}/${mo} · ${h}:${mi}:${s}`;
  }

  timeAgo(dateStr: string | Date): string {
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 60000);
    if (diff < 1)  return 'À l\'instant';
    if (diff < 60) return `Il y a ${diff} min`;
    const h = Math.floor(diff / 60);
    if (h < 24) return `Il y a ${h}h`;
    return `Il y a ${Math.floor(h / 24)}j`;
  }

  private getAlertIcon(type: string): string {
    const m: Record<string, string> = {
      echec_connexion: 'isax-lock',
      acces_refuse:    'isax-global',
      export:          'isax-import',
      suppression:     'isax-trash',
    };
    return m[type] ?? 'isax-warning-2';
  }

  get tendanceLabel(): string {
    const t = this.kpi.tendancePourcent;
    if (t > 0)  return `↑ +${t}% vs hier`;
    if (t < 0)  return `↓ ${t}% vs hier`;
    return '= vs hier';
  }

  get tendanceClass(): string {
    return this.kpi.tendancePourcent >= 0 ? 'trend-up' : 'trend-down';
  }
}
