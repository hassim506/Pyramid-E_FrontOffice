import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSortModule, Sort } from '@angular/material/sort';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { routes } from '../../../shared/service/routes/routes';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { Formation } from '../../../shared/models/formation.models';
import { UserService } from '../../../shared/service/user/user.service';
import { ParcoursService, Parcours, ParcoursRequest } from '../../../shared/service/parcours/parcours.service';
import { SessionFormationService, SessionFormation } from '../../../shared/service/session/session-formation.service';
import { CatalogueService, Catalogue } from '../../../shared/service/catalogue/catalogue.service';
import { HasPermissionDirective } from '../../../directive/has-permission-directive.directive';

@Component({
  selector: 'app-adminrh-course',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    CustomPaginationComponent,
    HasPermissionDirective
  ],
  templateUrl: './adminrh-course.component.html',
  styleUrls: ['./adminrh-course.component.scss']
})
export class AdminrhCourseComponent implements OnInit {
  routes = routes;

  allFormations: Formation[] = [];
  formations: Formation[] = [];
  tableData: Formation[] = [];
  searchDataValue = '';
  selectedStatus = '';
  loading = false;
  error = '';
  currentPage = 1;
  publishTarget: Formation | null = null;

  pageSize = 10;
  serialNumberArray: number[] = [];
  totalData = 0;

  // ── Tabs ──────────────────────────────────────
  activeTab: 'formations' | 'parcours' | 'catalogue' | 'sessions' = 'formations';
  setTab(t: typeof this.activeTab): void {
    this.activeTab = t;
    if (t === 'parcours'  && !this.parcoursLoaded)  this.loadParcours();
    if (t === 'catalogue' && !this.catalogueLoaded) this.loadCatalogues();
    if (t === 'sessions'  && !this.sessionsLoaded)  this.loadSessions();
  }

  // ── Vue grille/liste ──────────────────────────
  viewMode: 'grid' | 'list' = 'grid';

  // ── Parcours ──────────────────────────────────
  parcours: Parcours[] = [];
  parcoursFiltered: Parcours[] = [];
  parcoursLoading = false;
  parcoursLoaded = false;
  parcoursSearch = '';
  parcoursStatut = '';

  // ── Sessions ──────────────────────────────────
  sessions: SessionFormation[] = [];
  sessionsFiltered: SessionFormation[] = [];
  sessionsLoading = false;
  sessionsLoaded = false;
  sessionsSearch = '';
  sessionsType = '';
  sessionsView: 'list' | 'calendar' = 'list';
  calendarYear = new Date().getFullYear();
  calendarMonth = new Date().getMonth();

  // ── Catalogue ─────────────────────────────────
  catalogues: Catalogue[] = [];
  cataloguesFiltered: Catalogue[] = [];
  catalogueLoading = false;
  catalogueLoaded = false;
  catalogueSearch = '';
  catalogueType = '';
  catalogueTypes: string[] = [];

  // ── Wizard Catalogue ──────────────────────────
  catWizardOpen = false;
  catWizardMode: 'create' | 'edit' | 'view' = 'create';
  catWizardSaving = false;
  catWizardError = '';
  catWizardSelected: Catalogue | null = null;
  catWizardForm!: FormGroup;
  catWizardTags: string[] = [];
  catWizardTagInput = '';
  catWizardDomains: string[] = [];
  catWizardLevel = 'intermediaire';
  catWizardVisibility = 'entreprise';
  catWizardSelectedFormations: any[] = [];
  catWizardPoolSearch = '';

  readonly catDomains = [
    { key: 'technologie',  label: 'Technologie',         icon: 'isax-cpu',           cls: 'tech' },
    { key: 'management',   label: 'Management',          icon: 'isax-briefcase',     cls: 'mgmt' },
    { key: 'rh',           label: 'Ressources humaines', icon: 'isax-people',        cls: 'rh'   },
    { key: 'finance',      label: 'Finance',             icon: 'isax-chart-2',       cls: 'fin'  },
    { key: 'conformite',   label: 'Conformité',          icon: 'isax-shield-tick',   cls: 'conf' },
    { key: 'commercial',   label: 'Commercial',          icon: 'isax-trend-up',      cls: 'com'  },
  ];

  readonly catLevels = [
    { key: 'debutant',       label: 'Débutant',       sub: 'Aucun prérequis'      },
    { key: 'intermediaire',  label: 'Intermédiaire',  sub: 'Bases requises'       },
    { key: 'avance',         label: 'Avancé',         sub: 'Expérience nécessaire'},
  ];

  get catWizardPoolFiltered(): any[] {
    const q = this.catWizardPoolSearch.toLowerCase();
    return this.wizardAllFormations.filter((f: any) =>
      !q || f.titre?.toLowerCase().includes(q) || f.categorie?.nom?.toLowerCase().includes(q)
    );
  }

  isCatFormationSelected(f: any): boolean {
    return this.catWizardSelectedFormations.some(s => s.id === f.id);
  }

  catWizardToggleFormation(f: any): void {
    if (this.catWizardMode === 'view') return;
    const idx = this.catWizardSelectedFormations.findIndex(s => s.id === f.id);
    if (idx > -1) this.catWizardSelectedFormations.splice(idx, 1);
    else this.catWizardSelectedFormations.push(f);
  }

  catWizardRemoveFormation(f: any): void {
    this.catWizardSelectedFormations = this.catWizardSelectedFormations.filter(s => s.id !== f.id);
  }

  openCatWizardCreate(): void {
    this.catWizardMode = 'create';
    this.catWizardSelected = null;
    this.catWizardError = '';
    this.catWizardTags = [];
    this.catWizardDomains = [];
    this.catWizardLevel = 'intermediaire';
    this.catWizardVisibility = 'entreprise';
    this.catWizardSelectedFormations = [];
    this.catWizardPoolSearch = '';
    this.initCatWizardForm();
    this.loadWizardFormations();
    this.catWizardOpen = true;
  }

  openCatWizardEdit(c: Catalogue): void {
    this.catWizardMode = 'edit';
    this.catWizardSelected = c;
    this.catWizardError = '';
    this.catWizardTags = [...(c.tags || [])];
    this.catWizardDomains = c.type ? [c.type] : [];
    this.catWizardLevel = c.metadata?.niveau || 'intermediaire';
    this.catWizardVisibility = c.est_public ? 'public' : 'entreprise';
    this.catWizardSelectedFormations = [...(c.formations || [])];
    this.catWizardPoolSearch = '';
    this.initCatWizardForm(c);
    this.loadWizardFormations();
    this.catWizardOpen = true;
  }

  openCatWizardView(c: Catalogue): void {
    this.catWizardMode = 'view';
    this.catWizardSelected = c;
    this.catWizardError = '';
    this.catWizardTags = [...(c.tags || [])];
    this.catWizardDomains = c.type ? [c.type] : [];
    this.catWizardLevel = c.metadata?.niveau || 'intermediaire';
    this.catWizardVisibility = c.est_public ? 'public' : 'entreprise';
    this.catWizardSelectedFormations = [...(c.formations || [])];
    this.catWizardPoolSearch = '';
    this.initCatWizardForm(c);
    this.loadWizardFormations();
    this.catWizardOpen = true;
  }

  closeCatWizard(): void { this.catWizardOpen = false; }

  private initCatWizardForm(c?: Catalogue): void {
    this.catWizardForm = this.fb.group({
      titre:           [c?.titre || '',           [Validators.required, Validators.minLength(3)]],
      short_description:[c?.short_description || '', [Validators.required]],
      description:     [c?.description || '',     []],
      duree_totale:    [c?.duree_totale || '',     []],
      est_certifiante: [c?.metadata?.certificat_disponible ?? false, []],
    });
  }

  catWizardToggleDomain(key: string): void {
    if (this.catWizardMode === 'view') return;
    const i = this.catWizardDomains.indexOf(key);
    if (i > -1) this.catWizardDomains.splice(i, 1);
    else this.catWizardDomains.push(key);
  }

  catWizardAddTag(event: KeyboardEvent): void {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    const val = this.catWizardTagInput.trim();
    if (val && !this.catWizardTags.includes(val)) this.catWizardTags.push(val);
    this.catWizardTagInput = '';
  }

  catWizardRemoveTag(tag: string): void {
    this.catWizardTags = this.catWizardTags.filter(t => t !== tag);
  }

  catWizardSubmit(draft = false): void {
    if (this.catWizardMode === 'view') { this.closeCatWizard(); return; }
    if (this.catWizardForm.invalid) return;
    this.catWizardSaving = true;
    this.catWizardError = '';

    const fv = this.catWizardForm.value;
    const payload: any = {
      titre:             fv.titre.trim(),
      description:       fv.description?.trim() || fv.short_description.trim(),
      short_description: fv.short_description.trim(),
      couleur:           '#1D9E75',
      icone:             'category',
      ordre:             1,
      tags:              this.catWizardTags,
      metadata: {
        niveau:                this.catWizardLevel,
        prerequis:             [],
        duree_moyenne:         parseFloat(String(fv.duree_totale)) || 0,
        certificat_disponible: Boolean(fv.est_certifiante),
      },
      est_publie:          !draft,
      est_public:          this.catWizardVisibility === 'public',
      inscription_requise: false,
      type:                this.catWizardDomains[0] || 'general',
    };

    const isEdit = this.catWizardMode === 'edit' && this.catWizardSelected;
    const op = isEdit
      ? this.catalogueService.updateCatalogue(this.catWizardSelected!.id, payload)
      : this.catalogueService.createCatalogue(payload);

    op.pipe(
      switchMap((res: any) => {
        const catId = res.data?.id ?? res.catalogue?.id
          ?? (isEdit ? this.catWizardSelected!.id : null);
        if (!catId || !this.catWizardSelectedFormations.length) return of(null);
        // For edit: remove existing formations then re-add; for create: just add
        const existingIds = new Set((this.catWizardSelected?.formations || []).map((f: any) => f.id));
        const toAdd = this.catWizardSelectedFormations.filter(f => !existingIds.has(f.id));
        if (!toAdd.length) return of(null);
        const calls = toAdd.map((f, i) =>
          this.catalogueService.ajouterFormation(catId, { formation_id: f.id, ordre: i + 1 })
        );
        return calls.reduce(
          (acc$: any, call$) => acc$.pipe(switchMap(() => call$)),
          of(null) as any
        );
      })
    ).subscribe({
      next: () => {
        this.catWizardSaving = false;
        this.closeCatWizard();
        this.catalogueLoaded = false;
        this.loadCatalogues();
      },
      error: (err) => {
        this.catWizardSaving = false;
        this.catWizardError = err.error?.message || 'Erreur lors de la sauvegarde.';
      }
    });
  }

  // ── Wizard Parcours ───────────────────────────
  wizardOpen = false;
  wizardMode: 'create' | 'edit' | 'view' = 'create';
  wizardStep = 1;
  wizardSaving = false;
  wizardError = '';
  wizardSelectedParcours: Parcours | null = null;
  wizardPoolSearch = '';
  wizardSelectedFormations: Formation[] = [];
  wizardAllFormations: Formation[] = [];
  wizardLoadingFormations = false;
  wizardDomain = '';
  wizardForm!: FormGroup;

  readonly domains = [
    { key: 'management',   label: 'Management',         icon: 'isax-briefcase',     color: '#534AB7' },
    { key: 'technologie',  label: 'Technologie',        icon: 'isax-cpu',           color: '#185FA5' },
    { key: 'rh',           label: 'Ressources humaines',icon: 'isax-people',        color: '#0F6E56' },
    { key: 'finance',      label: 'Finance',            icon: 'isax-chart-2',       color: '#854F0B' },
    { key: 'conformite',   label: 'Conformité',         icon: 'isax-shield-tick',   color: '#3B6D11' },
    { key: 'commercial',   label: 'Commercial',         icon: 'isax-trend-up',      color: '#993C1D' },
  ];

  get wizardPoolFiltered(): Formation[] {
    const q = this.wizardPoolSearch.toLowerCase();
    return this.wizardAllFormations.filter(f =>
      !q || f.titre?.toLowerCase().includes(q) || f.categorie?.nom?.toLowerCase().includes(q)
    );
  }

  isWizardFormationSelected(f: Formation): boolean {
    return this.wizardSelectedFormations.some(s => s.id === f.id);
  }

  wizardToggleFormation(f: Formation): void {
    if (this.wizardMode === 'view') return;
    const idx = this.wizardSelectedFormations.findIndex(s => s.id === f.id);
    if (idx > -1) this.wizardSelectedFormations.splice(idx, 1);
    else this.wizardSelectedFormations.push(f);
  }

  wizardRemoveFormation(f: Formation): void {
    this.wizardSelectedFormations = this.wizardSelectedFormations.filter(s => s.id !== f.id);
  }

  wizardGetFormationThumb(f: Formation): string {
    return this.getThumbKey(f as any);
  }

  openWizardCreate(): void {
    this.wizardMode = 'create';
    this.wizardStep = 1;
    this.wizardError = '';
    this.wizardSelectedParcours = null;
    this.wizardSelectedFormations = [];
    this.wizardDomain = '';
    this.initWizardForm();
    this.loadWizardFormations();
    this.wizardOpen = true;
  }

  openWizardEdit(p: Parcours): void {
    this.wizardMode = 'edit';
    this.wizardStep = 1;
    this.wizardError = '';
    this.wizardSelectedParcours = p;
    this.wizardSelectedFormations = [...(p.formations as any[] || [])];
    this.wizardDomain = '';
    this.initWizardForm(p);
    this.loadWizardFormations();
    this.wizardOpen = true;
  }

  openWizardView(p: Parcours): void {
    this.wizardMode = 'view';
    this.wizardStep = 1;
    this.wizardError = '';
    this.wizardSelectedParcours = p;
    this.wizardSelectedFormations = [...(p.formations as any[] || [])];
    this.wizardDomain = '';
    this.initWizardForm(p);
    this.loadWizardFormations();
    this.wizardOpen = true;
  }

  closeWizard(): void {
    this.wizardOpen = false;
  }

  wizardNext(): void {
    if (this.wizardStep < 4) this.wizardStep++;
  }

  wizardPrev(): void {
    if (this.wizardStep > 1) this.wizardStep--;
  }

  private initWizardForm(p?: Parcours): void {
    this.wizardForm = this.fb.group({
      nom:          [p?.nom || '',          [Validators.required, Validators.minLength(3)]],
      description:  [p?.description || '',  []],
      duree_estimee:[p?.duree_estimee || 1, [Validators.required, Validators.min(1)]],
      prix:         [p?.prix || '0',        []],
      actif:        [p?.actif ?? true,      []],
      image_url:    [p?.image_url || '',    []],
      // settings (step 3)
      certificat:          [true],
      sequentielle:        [true],
      notifications:       [false],
      validation_rh:       [true],
      score_min:           [70],
    });
    if (p) {
      const niv = p.niveau || '';
      const domainMap: Record<string, string> = {
        debutant: 'technologie', intermediaire: 'technologie',
        avance: 'technologie', expert: 'technologie'
      };
      this.wizardDomain = domainMap[niv] || '';
    }
  }

  private loadWizardFormations(): void {
    if (this.wizardAllFormations.length) return;
    this.wizardLoadingFormations = true;
    this.formationService.getFormationsrh().subscribe({
      next: (res) => {
        this.wizardAllFormations = res.formations || [];
        this.wizardLoadingFormations = false;
      },
      error: () => { this.wizardLoadingFormations = false; }
    });
  }

  wizardSubmit(): void {
    if (this.wizardMode === 'view') { this.closeWizard(); return; }
    if (this.wizardForm.invalid) return;
    this.wizardSaving = true;
    this.wizardError = '';

    const fv = this.wizardForm.value;
    const entrepriseId = this.parcoursService.getCurrentUserEntrepriseId();
    const data: ParcoursRequest = {
      nom: fv.nom.trim(),
      description: fv.description?.trim() || '',
      niveau: 'intermediaire',
      duree_estimee: parseInt(fv.duree_estimee),
      prix: parseFloat(fv.prix || '0').toFixed(2),
      actif: fv.actif,
      objectifs: [],
      prerequis: [],
      statut: fv.actif,
      entreprise_id: entrepriseId,
      image_url: fv.image_url?.trim() || undefined,
    };

    const isEdit = this.wizardMode === 'edit' && this.wizardSelectedParcours;
    const op = isEdit
      ? this.parcoursService.updateParcours(this.wizardSelectedParcours!.id, data)
      : this.parcoursService.createParcours(data);

    op.pipe(
      switchMap((res) => {
        // Récupérer l'ID du parcours : créé ou mis à jour
        const parcoursId = res.parcours?.id ?? res.data?.id
          ?? (isEdit ? this.wizardSelectedParcours!.id : null);

        if (!parcoursId || !this.wizardSelectedFormations.length) {
          return of(null);
        }

        const formationsPayload = {
          formations: this.wizardSelectedFormations.map((f, i) => ({
            id: f.id,
            ordre: i + 1,
            obligatoire: false,
          }))
        };
        return this.parcoursService.updateFormations(parcoursId, formationsPayload);
      })
    ).subscribe({
      next: () => {
        this.wizardSaving = false;
        this.closeWizard();
        this.parcoursLoaded = false;
        this.loadParcours();
      },
      error: (err) => {
        this.wizardSaving = false;
        this.wizardError = err.error?.message || 'Erreur lors de la sauvegarde.';
      }
    });
  }

  stats = {
    active: 0,
    pending: 0,
    draft: 0,
    free: 0,
    paid: 0
  };

  pageNumberArray: { skip: number; limit: number }[] = [];
  totalPages = 0;
  skip = 0;
  limit = 10;

  // ── Modal participants ────────────────────────────────────────
  participantsModalOpen = false;
  selectedFormation: Formation | null = null;
  participants: any[] = [];
  participantsLoading = false;
  participantsSearch = '';
  availableUsers: any[] = [];
  availableUsersFiltered: any[] = [];
  usersSearch = '';
  usersLoading = false;
  inscriptionPending = false;
  inscriptionSuccess = '';
  inscriptionError = '';

  constructor(
    private formationService: FormationService,
    private parcoursService: ParcoursService,
    private sessionService: SessionFormationService,
    private catalogueService: CatalogueService,
    private fb: FormBuilder,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getFormationsList();
  }

  // ✅ Corrigé : prix peut être undefined ou string ou number
  isFormationGratuite(formation: Formation): boolean {
    return parseFloat(String(formation.prix ?? 0)) === 0;
  }

  formatPrix(prix: string | number | undefined): string {
    const montant = parseFloat(String(prix ?? 0));
    return montant === 0 ? 'Gratuit' : `${montant.toFixed(2)} FCFA`;
  }

  trackByFormation(_index: number, formation: Formation): number {
    return formation.id;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.getTableData(this.skip, this.pageSize);
  }

  getFormationsList(): void {
    this.loading = true;
    this.error = '';
    this.formations = [];

    this.formationService.getFormationsrh().subscribe({
      next: (response) => {
        if (response.status && response.formations) {
          this.allFormations = response.formations;
          this.formations = [...this.allFormations];
          this.tableData = [...this.allFormations];
          this.totalData = this.formations.length;
          this.calculateStats();
          this.calculateTotalPages(this.totalData, this.pageSize);
          this.getTableData(0, this.pageSize);
        } else {
          this.error = 'Aucune formation trouvée';
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur chargement formations:', error);
        this.error = httpErrorMessage(error, 'Impossible de charger les formations.');
        this.loading = false;
      }
    });
  }

  // ════════════════════════════════════════════
  // PARCOURS
  // ════════════════════════════════════════════
  loadParcours(): void {
    this.parcoursLoading = true;
    this.parcoursService.getRhParcours().subscribe({
      next: (res) => {
        this.parcours = res.parcours || [];
        this.parcoursLoaded = true;
        this.parcoursLoading = false;
        this.applyParcoursFilters();
      },
      error: () => { this.parcoursLoading = false; }
    });
  }

  applyParcoursFilters(): void {
    const q = this.parcoursSearch.toLowerCase();
    this.parcoursFiltered = this.parcours.filter(p => {
      const actif = Boolean(p.actif);
      const matchSearch = !q || p.nom.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      const matchStatut = !this.parcoursStatut
        || (this.parcoursStatut === 'actif'   && actif)
        || (this.parcoursStatut === 'archive' && !actif);
      return matchSearch && matchStatut;
    });
  }

  getParcoursActifs(): number { return this.parcours.filter(p => p.actif).length; }

  getNiveauKey(niveau: string): string {
    const map: Record<string, string> = { debutant: 'deb', intermediaire: 'int', avance: 'adv', expert: 'exp' };
    return map[niveau] ?? 'deb';
  }

  getNiveauLabel(niveau: string): string {
    const map: Record<string, string> = { debutant: 'Débutant', intermediaire: 'Intermédiaire', avance: 'Avancé', expert: 'Expert' };
    return map[niveau] ?? niveau;
  }

  getTotalDuration(formations: any[]): number {
    return formations?.reduce((t, f) => t + (f.duree_totale || 0), 0) ?? 0;
  }

  // ════════════════════════════════════════════
  // SESSIONS
  // ════════════════════════════════════════════
  loadSessions(): void {
    this.sessionsLoading = true;
    this.sessionService.getAllSessionsRH().subscribe({
      next: (res) => {
        this.sessions = res.sessions || [];
        this.sessionsLoaded = true;
        this.sessionsLoading = false;
        this.applySessionsFilters();
      },
      error: () => { this.sessionsLoading = false; }
    });
  }

  applySessionsFilters(): void {
    const q = this.sessionsSearch.toLowerCase();
    this.sessionsFiltered = this.sessions.filter(s => {
      const matchSearch = !q || s.titre?.toLowerCase().includes(q) || s.formation?.titre?.toLowerCase().includes(q);
      const matchType = !this.sessionsType || s.type === this.sessionsType;
      return matchSearch && matchType;
    });
  }

  getSessionsCount(statut: string): number {
    return this.sessions.filter(s => s.statut === statut).length;
  }

  getSessionsByType(type: string): number {
    return this.sessions.filter(s => s.type === type).length;
  }

  getSessionStatutKey(statut: string): string {
    const map: Record<string, string> = { planifiee: 'plan', en_cours: 'live', terminee: 'done', annulee: 'cancel' };
    return map[statut] ?? 'plan';
  }

  getTypeKey(type: string): string { return type || 'presentiel'; }

  formatSessionDate(d: string): string {
    if (!d) return '—';
    const dt = new Date(d);
    return dt.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })
      + ' ' + dt.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  getSessionDay(d: string): string {
    return d ? new Date(d).getDate().toString().padStart(2, '0') : '—';
  }

  getSessionMonth(d: string): string {
    return d ? new Date(d).toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase() : '';
  }

  // ════════════════════════════════════════════
  // CATALOGUE
  // ════════════════════════════════════════════
  loadCatalogues(): void {
    this.catalogueLoading = true;
    this.catalogueService.getCatalogues().subscribe({
      next: (res) => {
        this.catalogues = res.catalogues || [];
        this.catalogueLoaded = true;
        this.catalogueLoading = false;
        // Collect unique types
        const types = new Set<string>();
        this.catalogues.forEach(c => { if (c.type) types.add(c.type); });
        this.catalogueTypes = Array.from(types);
        this.applyCatalogueFilters();
      },
      error: () => { this.catalogueLoading = false; }
    });
  }

  applyCatalogueFilters(): void {
    const q = this.catalogueSearch.toLowerCase();
    this.cataloguesFiltered = this.catalogues.filter(c => {
      const matchSearch = !q || c.titre.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
      const matchType = !this.catalogueType || c.type === this.catalogueType;
      return matchSearch && matchType;
    });
  }

  getCatalogueThumb(c: Catalogue): string {
    const t = c.type?.toLowerCase() || '';
    if (t.includes('tech'))   return 'blue';
    if (t.includes('manage')) return 'purple';
    if (t.includes('soft'))   return 'teal';
    return 'amber';
  }

  formatDureeMoy(minutes: number): string {
    if (!minutes) return '—';
    return minutes >= 60 ? `${Math.round(minutes / 60)}h` : `${minutes}min`;
  }

  // ════════════════════════════════════════════
  // EXISTING STATS
  // ════════════════════════════════════════════
  calculateStats(): void {
    this.stats = {
      active:  this.allFormations.filter(f => f.est_publie && f.inscription_ouverte).length,
      pending: this.allFormations.filter(f => !f.est_publie && !f.inscription_ouverte).length,
      draft:   this.allFormations.filter(f => !f.est_publie).length,
      free:    this.allFormations.filter(f => this.isFormationGratuite(f)).length,
      paid:    this.allFormations.filter(f => !this.isFormationGratuite(f)).length
    };
  }

  calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 !== 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push({ skip, limit });
    }
  }

  getTableData(skip: number, limit: number): void {
    this.serialNumberArray = [];
    this.formations = [];
    this.tableData = [];

    let filteredData = [...this.allFormations];

    if (this.selectedStatus && this.selectedStatus !== 'all') {
      switch (this.selectedStatus.toLowerCase()) {
        case 'published':
          filteredData = filteredData.filter(f => f.est_publie);
          break;
        case 'pending':
          filteredData = filteredData.filter(f => !f.est_publie && !f.inscription_ouverte);
          break;
        case 'draft':
          filteredData = filteredData.filter(f => !f.est_publie);
          break;
      }
    }

    if (this.searchDataValue) {
      const search = this.searchDataValue.toLowerCase();
      filteredData = filteredData.filter(f =>
        f.titre?.toLowerCase().includes(search) ||
        f.description?.toLowerCase().includes(search) ||
        f.formateur_nom?.toLowerCase().includes(search) ||
        f.categorie?.nom?.toLowerCase().includes(search)
      );
    }

    this.totalData = filteredData.length;
    this.calculateTotalPages(this.totalData, this.pageSize);

    const start = skip;
    const end = Math.min(skip + limit, this.totalData);
    for (let i = start; i < end; i++) {
      this.serialNumberArray.push(i + 1);
    }

    this.formations = filteredData.slice(start, end);
    this.tableData = this.formations;
  }

  getActiveFormationsCount(): number {
    return this.allFormations.filter(f => f.est_publie).length;
  }

  getPendingFormationsCount(): number {
    return this.allFormations.filter(f => !f.est_publie && !f.inscription_ouverte).length;
  }

  getDraftFormationsCount(): number {
    return this.allFormations.filter(f => !f.est_publie).length;
  }

  getTotalParticipants(): number {
    return this.allFormations.reduce((sum, f) => sum + ((f as any).nb_participants || 0), 0);
  }

  togglePublishStatus(f: Formation): void {
    this.publishTarget = f;
  }

  confirmTogglePublish(): void {
    if (!this.publishTarget) return;
    const target = this.publishTarget;
    const isPublished = !!target.est_publie;
    const op = isPublished
      ? this.formationService.unpublishFormation(target.id)
      : this.formationService.publishFormation(target.id);

    op.subscribe({
      next: () => {
        (target as any).est_publie = !isPublished;
        this.calculateStats();
        this.publishTarget = null;
      },
      error: () => { this.publishTarget = null; }
    });
  }

  searchData(searchValue: string): void {
    this.searchDataValue = searchValue;
    this.skip = 0;
    this.getTableData(this.skip, this.limit);
  }

  filterByStatus(status: string): void {
    this.selectedStatus = status;
    this.skip = 0;
    this.getTableData(this.skip, this.limit);
  }

  sortData(sort: Sort): void {
    if (!sort.active || sort.direction === '') return;

    this.allFormations.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'titre':
          return this.compare(a.titre ?? '', b.titre ?? '', isAsc);
        case 'formateur':
          // ✅ Corrigé : formateur_nom est optionnel
          return this.compare(a.formateur_nom ?? '', b.formateur_nom ?? '', isAsc);
        case 'prix':
          return this.compare(
            parseFloat(String(a.prix ?? 0)),
            parseFloat(String(b.prix ?? 0)),
            isAsc
          );
        case 'duree':
          return this.compare(a.duree_totale ?? 0, b.duree_totale ?? 0, isAsc);
        case 'participants':
          // ✅ Corrigé : nb_max_participants est optionnel
          return this.compare(a.nb_max_participants ?? 0, b.nb_max_participants ?? 0, isAsc);
        default:
          return 0;
      }
    });

    this.getTableData(this.skip, this.limit);
  }

  private compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  getMoreData(event: string): void {
    if (event === 'next') {
      this.skip += this.limit;
      this.getTableData(this.skip, this.limit);
    } else if (event === 'previous') {
      this.skip -= this.limit;
      this.getTableData(this.skip, this.limit);
    }
  }

  moveToPage(pageNumber: number): void {
    this.skip = this.pageNumberArray[pageNumber - 1].skip;
    this.limit = this.pageNumberArray[pageNumber - 1].limit - this.skip;
    this.getTableData(this.skip, this.limit);
  }

  PageSize(): void {
    this.skip = 0;
    this.getTableData(this.skip, this.pageSize);
  }

  getStatusClass(formation: Formation): string {
    if (formation.est_publie && formation.inscription_ouverte) return 'bg-success';
    if (!formation.est_publie) return 'bg-info';
    return 'bg-secondary';
  }

  getStatusText(formation: Formation): string {
    if (formation.est_publie && formation.inscription_ouverte) return 'Publiée';
    if (!formation.est_publie) return 'Brouillon';
    return 'En attente';
  }

  getStatusKey(formation: Formation): string {
    if (formation.est_publie && formation.inscription_ouverte) return 'pub';
    if (!formation.est_publie) return 'draft';
    return 'pending';
  }

  getCatKey(f: Formation): string {
    const n = (f.categorie?.nom || '').toLowerCase();
    if (n.includes('tech') || n.includes('info') || n.includes('num')) return 'tech';
    if (n.includes('rh') || n.includes('human') || n.includes('conform') || n.includes('recruit')) return 'rh';
    if (n.includes('manage') || n.includes('leader')) return 'mgmt';
    if (n.includes('finan') || n.includes('compt')) return 'fin';
    return 'default';
  }

  getThumbKey(f: Formation): string {
    const key = this.getCatKey(f);
    const map: Record<string, string> = { tech: 'blue', rh: 'amber', mgmt: 'purple', fin: 'teal', default: 'green' };
    return map[key] ?? 'blue';
  }

  getDuree(f: Formation): string {
    const d = f.duree_totale ?? f.duree_estimee;
    if (!d) return '—';
    const n = parseFloat(String(d));
    if (isNaN(n)) return String(d);
    return n >= 60 ? `${Math.round(n / 60)}h` : `${n}min`;
  }

  getCompletion(f: Formation): number {
    return (f as any).taux_completion ?? 0;
  }

  getDefaultImage(formation: Formation): string {
    return this.formationService.getImageUrl(formation.image_couverture);
  }

  // ════════════════════════════════════════════
  // CALENDAR HELPERS
  // ════════════════════════════════════════════
  get calendarMonthLabel(): string {
    return new Date(this.calendarYear, this.calendarMonth).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  }

  calendarPrevMonth(): void {
    if (this.calendarMonth === 0) { this.calendarMonth = 11; this.calendarYear--; }
    else { this.calendarMonth--; }
  }

  calendarNextMonth(): void {
    if (this.calendarMonth === 11) { this.calendarMonth = 0; this.calendarYear++; }
    else { this.calendarMonth++; }
  }

  getCalendarDays(): { date: Date; sessions: SessionFormation[] }[] {
    const year = this.calendarYear;
    const month = this.calendarMonth;
    const firstDay = new Date(year, month, 1).getDay();
    const offset = firstDay === 0 ? 6 : firstDay - 1; // Mon=0
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const grid: { date: Date; sessions: SessionFormation[] }[] = [];
    // Leading empty cells
    for (let i = 0; i < offset; i++) {
      grid.push({ date: new Date(year, month, -(offset - i - 1)), sessions: [] });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const sessions = this.sessionsFiltered.filter(s => {
        if (!s.date_debut) return false;
        const sd = new Date(s.date_debut);
        return sd.getFullYear() === year && sd.getMonth() === month && sd.getDate() === d;
      });
      grid.push({ date, sessions });
    }
    return grid;
  }

  isToday(date: Date): boolean {
    const t = new Date();
    return date.getFullYear() === t.getFullYear() && date.getMonth() === t.getMonth() && date.getDate() === t.getDate();
  }

  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.calendarMonth;
  }

  deleteFormation(formation: Formation): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer la formation "${formation.titre}" ?`)) {
      this.loading = true;
      this.formationService.deleteFormation(formation.id).subscribe({
        next: () => this.getFormationsList(),
        error: (error) => {
          console.error('Erreur suppression:', error);
          this.error = 'Erreur lors de la suppression de la formation';
          this.loading = false;
        }
      });
    }
  }

  // ── PARTICIPANTS ──────────────────────────────────────────────

  openParticipants(f: Formation): void {
    this.selectedFormation = f;
    this.participants = [];
    this.availableUsers = [];
    this.availableUsersFiltered = [];
    this.participantsSearch = '';
    this.usersSearch = '';
    this.inscriptionSuccess = '';
    this.inscriptionError = '';
    this.participantsModalOpen = true;
    this.loadParticipants(f.id);
  }

  closeParticipants(): void {
    this.participantsModalOpen = false;
    this.selectedFormation = null;
  }

  private loadParticipants(formationId: number): void {
    this.participantsLoading = true;
    this.formationService.getParticipantsFormation(formationId).subscribe({
      next: (res: any) => {
        this.participants = res.participants || [];
        this.participantsLoading = false;
        // Charger les users disponibles APRÈS avoir les inscrits
        this.loadAvailableUsers();
      },
      error: () => { this.participantsLoading = false; }
    });
  }

  private loadAvailableUsers(): void {
    this.usersLoading = true;
    this.userService.getMyUsers().subscribe({
      next: (res: any) => {
        const enrolled = new Set(this.participants.map((p: any) => p.id));
        const all: any[] = res.users || res.data || [];
        this.availableUsers = all.filter((u: any) => !enrolled.has(u.id));
        this.applyUsersFilter();
        this.usersLoading = false;
      },
      error: () => { this.usersLoading = false; }
    });
  }

  applyUsersFilter(): void {
    const q = this.usersSearch.toLowerCase();
    this.availableUsersFiltered = this.availableUsers.filter((u: any) =>
      !q || u.name?.toLowerCase().includes(q) || u.nom?.toLowerCase().includes(q)
        || u.prenom?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q)
    );
  }

  get participantsFiltered(): any[] {
    const q = this.participantsSearch.toLowerCase();
    return this.participants.filter((p: any) =>
      !q || p.name?.toLowerCase().includes(q) || p.nom?.toLowerCase().includes(q)
        || p.prenom?.toLowerCase().includes(q) || p.email?.toLowerCase().includes(q)
    );
  }

  inscrireUser(user: any): void {
    if (!this.selectedFormation || this.inscriptionPending) return;
    this.inscriptionPending = true;
    this.inscriptionSuccess = '';
    this.inscriptionError = '';

    this.formationService.inscriptionDirecte({
      formation_id: this.selectedFormation.id,
      user_id: user.id
    }).subscribe({
      next: () => {
        this.inscriptionPending = false;
        const displayName = (user.prenom && user.nom) ? `${user.prenom} ${user.nom}` : (user.name || user.email);
        this.inscriptionSuccess = `${displayName} a été inscrit(e) avec succès.`;
        this.participants.push(user);
        this.availableUsers = this.availableUsers.filter((u: any) => u.id !== user.id);
        this.applyUsersFilter();
      },
      error: (err: any) => {
        this.inscriptionPending = false;
        this.inscriptionError = err?.error?.message || 'Erreur lors de l\'inscription.';
      }
    });
  }

  desinscrireUser(user: any): void {
    if (!this.selectedFormation || this.inscriptionPending) return;
    this.inscriptionPending = true;
    this.inscriptionSuccess = '';
    this.inscriptionError = '';

    this.formationService.desinscriptionDirecte({
      formation_id: this.selectedFormation.id,
      user_id: user.id
    }).subscribe({
      next: () => {
        this.inscriptionPending = false;
        const displayName = (user.prenom && user.nom) ? `${user.prenom} ${user.nom}` : (user.name || user.email);
        this.inscriptionSuccess = `${displayName} a été désinscrit(e).`;
        this.participants = this.participants.filter((p: any) => p.id !== user.id);
        this.availableUsers.push(user);
        this.applyUsersFilter();
      },
      error: (err: any) => {
        this.inscriptionPending = false;
        this.inscriptionError = err?.error?.message || 'Erreur lors de la désinscription.';
      }
    });
  }

  trackByUserId(_i: number, u: any): number { return u.id; }

  archiveFormation(formation: Formation): void {
    if (!confirm(`Archiver la formation "${formation.titre}" ?`)) return;
    this.loading = true;
    this.formationService.deleteFormation(formation.id).subscribe({
      next: () => this.getFormationsList(),
      error: () => { this.error = 'Erreur lors de l\'archivage'; this.loading = false; }
    });
  }
}