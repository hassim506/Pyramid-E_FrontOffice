import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SondageService, Sondage, QuestionSondage } from '../../../shared/service/sondage/sondage.service';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';

type Tab = 'liste' | 'creer' | 'editer' | 'questions' | 'stats' | 'envoyer' | 'resultats';
type SondageCategorie = 'a_chaud' | 'a_froid' | 'enquete';

const QUESTION_TYPES = [
  { value: 'text',       label: 'Texte court' },
  { value: 'textarea',   label: 'Texte long' },
  { value: 'radio',      label: 'Choix unique' },
  { value: 'checkbox',   label: 'Choix multiples' },
  { value: 'select',     label: 'Liste déroulante' },
  { value: 'echelle',    label: 'Échelle (1-5/1-10)' },
  { value: 'notation',   label: 'Notation étoiles' },
  { value: 'date',       label: 'Date' },
  { value: 'email',      label: 'Email' },
  { value: 'numero',     label: 'Nombre' },
];

@Component({
  selector: 'app-superadmin-sondage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './superadmin-sondage.component.html',
  styleUrl: './superadmin-sondage.component.scss',
})
export class SuperadminSondageComponent implements OnInit {
  tab: Tab = 'liste';
  categorieActive: SondageCategorie = 'a_chaud';

  // ── Listes par catégorie ───────────────────────────────────────────────────
  sondagesChaud:   Sondage[] = [];
  sondagesFroid:   Sondage[] = [];
  sondagesEnquete: Sondage[] = []; // toutes : superadmin (entreprise_id=null) + entreprises
  // Templates globaux (null entreprise_id)
  templatesChaud:   Sondage[] = [];
  templatesFroid:   Sondage[] = [];

  // Enquêtes libres — sous-listes pour l'affichage
  get enquetesSuperadmin(): Sondage[] { return this.sondagesEnquete.filter(s => !s.entreprise_id); }
  get enquetesEntreprises(): Sondage[] { return this.sondagesEnquete.filter(s =>  s.entreprise_id); }
  loading = false;
  error = '';

  // ── Filtres liste ──────────────────────────────────────────────────────────
  search = '';
  filterActif = '';
  filterEntrepriseId: string = '';   // '' = tous, 'global' = templates, ou ID numérique
  currentPage = 1;
  totalPages = 1;
  total = 0;
  private search$ = new Subject<string>();

  // ── Entreprises disponibles ────────────────────────────────────────────────
  entreprises: { id: number; nom: string }[] = [];
  entreprisesLoading = false;

  // ── Sondage sélectionné ────────────────────────────────────────────────────
  selectedSondage: Sondage | null = null;

  // ── Formations disponibles ────────────────────────────────────────────────
  formations: { id: number; titre: string }[] = [];
  formationsLoading = false;
  formFormationIds: number[] = [];

  // ── Formulaire création/édition ────────────────────────────────────────────
  form: Partial<Sondage> = {};
  saving = false;
  formError = '';
  formCategorie: SondageCategorie = 'enquete';
  formEntrepriseId: string = '';         // '' = global template, sinon ID
  formCibleEntrepriseIds: number[] = []; // entreprises destinataires (enquête libre)

  // ── Questions ──────────────────────────────────────────────────────────────
  questions: QuestionSondage[] = [];
  questionTypes = QUESTION_TYPES;
  editingQuestion: Partial<QuestionSondage> | null = null;
  questionError = '';
  newOptionText = '';

  // ── Stats ──────────────────────────────────────────────────────────────────
  stats: any = null;
  statsLoading = false;

  // ── Résultats détaillés ────────────────────────────────────────────────────
  resultats: any = null;
  resultatsLoading = false;
  resultatsQuestions: any[] = [];

  // ── Envoi sondage ──────────────────────────────────────────────────────────
  envoyerLoading = false;
  envoyerSuccess = '';
  envoyerError = '';
  envoyerEntrepriseIds: number[] = [];   // multi-select entreprises dans la vue Envoyer

  // ── Confirm delete ─────────────────────────────────────────────────────────
  confirmDeleteId: number | null = null;
  confirmDeleteQId: number | null = null;

  constructor(
    private sondageService: SondageService,
    private clientCompanyService: ClientCompanyService,
    private formationService: FormationService,
  ) {}

  ngOnInit(): void {
    this.loadAll();
    this.loadEntreprises();
    this.search$.pipe(debounceTime(350), distinctUntilChanged()).subscribe(() => {
      this.currentPage = 1;
      this.loadAll();
    });
  }

  onSearch(): void { this.search$.next(this.search); }

  loadAll(): void {
    this.loading = true;
    this.error = '';
    const base: any = { per_page: 100 };
    if (this.search)             base.search   = this.search;
    if (this.filterActif !== '') base.est_actif = this.filterActif === '1';

    // Le filtre entreprise s'applique aux à chaud/froid mais pas aux enquêtes libres
    // (celles-ci ont toujours entreprise_id=null, filtrées par cible_entreprise_ids)
    const baseAvecEntreprise = this.filterEntrepriseId
      ? { ...base, entreprise_id: this.filterEntrepriseId }
      : base;

    this.sondageService.getSondages({ ...baseAvecEntreprise, declenchement: 'a_chaud' }).subscribe({
      next: (res) => {
        const all: Sondage[] = res.sondages ?? [];
        this.sondagesChaud  = all.filter(s => !s.est_template);
        this.templatesChaud = all.filter(s =>  s.est_template);
        this.loading = false;
      },
      error: (err) => { this.error = httpErrorMessage(err, 'Erreur chargement.'); this.loading = false; },
    });
    this.sondageService.getSondages({ ...baseAvecEntreprise, declenchement: 'a_froid' }).subscribe({
      next: (res) => {
        const all: Sondage[] = res.sondages ?? [];
        this.sondagesFroid  = all.filter(s => !s.est_template);
        this.templatesFroid = all.filter(s =>  s.est_template);
      },
    });
    // Enquêtes libres : tout récupérer (superadmin=null + entreprises), sans filtre entreprise
    this.sondageService.getSondages({ ...base, declenchement: 'manuel', per_page: 500 }).subscribe({
      next: (res) => { this.sondagesEnquete = res.sondages ?? []; },
    });
  }

  get sondagesCourants(): Sondage[] {
    if (this.categorieActive === 'a_chaud')  return this.sondagesChaud;
    if (this.categorieActive === 'a_froid')  return this.sondagesFroid;
    return this.sondagesEnquete;
  }

  get templatesCourants(): Sondage[] {
    if (this.categorieActive === 'a_chaud') return this.templatesChaud;
    if (this.categorieActive === 'a_froid') return this.templatesFroid;
    return [];
  }

  loadEntreprises(): void {
    this.entreprisesLoading = true;
    this.clientCompanyService.getCompanies({ per_page: 200 }).subscribe({
      next: (res: any) => {
        try {
          const data: any[] = Array.isArray(res) ? res
            : (res.entreprises ?? res.data ?? res.companies ?? []);
          this.entreprises = data.map((e: any) => ({ id: e.id, nom: e.nom ?? e.name ?? e.raison_sociale ?? `#${e.id}` }));
        } finally {
          this.entreprisesLoading = false;
        }
      },
      error: () => { this.entreprisesLoading = false; },
    });
  }

  loadFormations(entrepriseId?: number): void {
    this.formationsLoading = true;
    const params: any = { page: 1, limit: 500 };
    if (entrepriseId) params.entreprise_id = entrepriseId;
    this.formationService.getFormations(params).subscribe({
      next: (res: any) => {
        this.formations = (res.formations ?? res.data ?? res ?? []).map((f: any) => ({ id: f.id, titre: f.titre }));
        this.formFormationIds = this.formFormationIds.filter(id => this.formations.some(f => f.id === id));
        this.formationsLoading = false;
      },
      error: () => { this.formationsLoading = false; },
    });
  }

  onEntrepriseChange(): void {
    const eid = this.formEntrepriseId ? Number(this.formEntrepriseId) : undefined;
    this.formFormationIds = [];
    this.loadFormations(eid);
  }

  setCategorie(c: SondageCategorie): void { this.categorieActive = c; }

  getEntrepriseNom(entrepriseId: number | null | undefined): string {
    if (!entrepriseId) return 'Modèle global';
    return this.entreprises.find(e => e.id === entrepriseId)?.nom ?? `Entreprise #${entrepriseId}`;
  }

  // ── CREATE ────────────────────────────────────────────────────────────────
  openCreate(categorie: SondageCategorie, estTemplate = false): void {
    this.formCategorie = categorie;
    this.formEntrepriseId = '';
    const declenchement = categorie === 'enquete' ? 'manuel' : categorie;
    this.form = {
      type: categorie === 'enquete' ? 'enquete' : 'satisfaction',
      declenchement,
      delai_jours: categorie === 'a_froid' ? 30 : null,
      formation_id: null,
      entreprise_id: null,
      est_template: estTemplate,
      est_anonyme: false,
      est_obligatoire: categorie !== 'enquete',
      est_actif: true,
      autorise_retour: true,
      afficher_progres: true,
      nombre_tentatives_max: 1,
      duree_estimee: 5,
    };
    this.formFormationIds = [];
    this.formCibleEntrepriseIds = [];
    this.formError = '';
    this.tab = 'creer';
  }

  openEdit(s: Sondage): void {
    this.selectedSondage = s;
    this.form = { ...s };
    this.formCategorie = s.declenchement === 'a_chaud' ? 'a_chaud'
                       : s.declenchement === 'a_froid' ? 'a_froid' : 'enquete';
    this.formEntrepriseId = s.entreprise_id ? String(s.entreprise_id) : '';
    this.formFormationIds = s.formation_ids ? [...s.formation_ids]
                          : (s.formation_id ? [s.formation_id] : []);
    this.formCibleEntrepriseIds = s.parametres?.cible_entreprise_ids ?? [];
    // Recharger les formations de l'entreprise concernée
    if (s.entreprise_id) this.loadFormations(s.entreprise_id);
    this.formError = '';
    this.tab = 'editer';
  }

  toggleCibleEntreprise(id: number): void {
    const idx = this.formCibleEntrepriseIds.indexOf(id);
    if (idx === -1) this.formCibleEntrepriseIds.push(id);
    else this.formCibleEntrepriseIds.splice(idx, 1);
  }

  toggleAllCibleEntreprises(): void {
    if (this.allCibleEntreprisesSelected) this.formCibleEntrepriseIds = [];
    else this.formCibleEntrepriseIds = this.entreprises.map(e => e.id);
  }

  get allCibleEntreprisesSelected(): boolean {
    return this.entreprises.length > 0 && this.formCibleEntrepriseIds.length === this.entreprises.length;
  }

  isCibleEntrepriseSelected(id: number): boolean {
    return this.formCibleEntrepriseIds.includes(id);
  }

  toggleFormation(id: number): void {
    const idx = this.formFormationIds.indexOf(id);
    if (idx === -1) this.formFormationIds.push(id);
    else this.formFormationIds.splice(idx, 1);
  }

  toggleAllFormations(): void {
    if (this.allFormationsSelected) this.formFormationIds = [];
    else this.formFormationIds = this.formations.map(f => f.id);
  }

  get allFormationsSelected(): boolean {
    return this.formations.length > 0 && this.formFormationIds.length === this.formations.length;
  }

  isFormationSelected(id: number): boolean {
    return this.formFormationIds.includes(id);
  }

  getCibleEntreprisesNoms(s: Sondage): string[] {
    const ids: number[] = s.parametres?.cible_entreprise_ids ?? [];
    if (ids.length === 0) return s.entreprise_id ? [this.getEntrepriseNom(s.entreprise_id)] : [];
    if (ids.length === this.entreprises.length && this.entreprises.length > 0) return ['Toutes les entreprises'];
    return ids.map(id => this.entreprises.find(e => e.id === id)?.nom ?? `Entreprise #${id}`);
  }

  getFormationsTitres(s: Sondage): string[] {
    const ids: number[] = s.formation_ids?.length ? s.formation_ids
                        : (s.formation_id ? [s.formation_id] : []);
    return ids.map(id => this.formations.find(f => f.id === id)?.titre ?? `Formation #${id}`);
  }

  saveSondage(): void {
    if (!this.form.titre) { this.formError = 'Le titre est obligatoire.'; return; }
    // Pour une instance entreprise (non template), formation obligatoire si à chaud/à froid
    if (this.formEntrepriseId && this.formCategorie !== 'enquete' && this.formFormationIds.length === 0) {
      this.formError = 'Veuillez sélectionner au moins une formation associée.';
      return;
    }
    this.saving = true;
    this.formError = '';

    // Résoudre entreprise_id et est_template
    if (this.formCategorie === 'enquete') {
      // Enquête libre superadmin : portée via cible_entreprise_ids, jamais rattachée à une entreprise
      this.form.entreprise_id = null;
      this.form.est_template  = false;
    } else if (this.formEntrepriseId === '' || this.formEntrepriseId === null) {
      this.form.entreprise_id = null;
      this.form.est_template  = true;
    } else {
      this.form.entreprise_id = Number(this.formEntrepriseId);
      this.form.est_template  = false;
    }

    const payload = {
      ...this.form,
      formation_ids: this.formFormationIds,
      formation_id: this.formFormationIds[0] ?? null,
      parametres: {
        ...(this.form.parametres ?? {}),
        cible_entreprise_ids: this.formCibleEntrepriseIds,
      },
    };

    const obs = this.tab === 'creer'
      ? this.sondageService.createSondage(payload)
      : this.sondageService.updateSondage(this.selectedSondage!.id, payload);

    obs.subscribe({
      next: (res) => {
        this.saving = false;
        if (this.tab === 'creer' && res.sondage) { this.openQuestions(res.sondage); }
        else { this.tab = 'liste'; this.loadAll(); }
      },
      error: (err) => { this.saving = false; this.formError = err?.error?.message ?? 'Erreur lors de la sauvegarde.'; },
    });
  }

  // ── QUESTIONS ─────────────────────────────────────────────────────────────
  openQuestions(s: Sondage): void {
    this.selectedSondage = s;
    this.questions = [...(s.questions ?? [])];
    this.editingQuestion = null;
    this.questionError = '';
    this.tab = 'questions';
    this.sondageService.getSondage(s.id).subscribe({
      next: (res) => { this.selectedSondage = res.sondage; this.questions = res.sondage.questions ?? []; },
    });
  }

  newQuestion(): void { this.editingQuestion = { type: 'radio', est_obligatoire: false, options: [] }; this.questionError = ''; this.newOptionText = ''; }
  editQuestion(q: QuestionSondage): void { this.editingQuestion = { ...q, options: q.options ? [...(q.options as string[])] : [] }; this.questionError = ''; this.newOptionText = ''; }
  cancelQuestion(): void { this.editingQuestion = null; this.questionError = ''; }

  addOption(): void {
    if (!this.newOptionText.trim()) return;
    const opts = this.editingQuestion!.options as string[] ?? [];
    opts.push(this.newOptionText.trim());
    this.editingQuestion!.options = opts;
    this.newOptionText = '';
  }
  removeOption(i: number): void { (this.editingQuestion!.options as string[]).splice(i, 1); }

  saveQuestion(): void {
    if (!this.editingQuestion?.question || !this.editingQuestion?.type) {
      this.questionError = 'La question et le type sont obligatoires.'; return;
    }
    const sid = this.selectedSondage!.id;
    const obs = this.editingQuestion.id
      ? this.sondageService.updateQuestion(sid, this.editingQuestion.id, this.editingQuestion)
      : this.sondageService.addQuestion(sid, this.editingQuestion);
    obs.subscribe({
      next: () => { this.editingQuestion = null; this.reloadQuestions(sid); },
      error: (err) => { this.questionError = err?.error?.message ?? 'Erreur sauvegarde.'; },
    });
  }

  confirmDeleteQuestion(qId: number): void { this.confirmDeleteQId = qId; }
  deleteQuestion(): void {
    if (!this.confirmDeleteQId || !this.selectedSondage) return;
    this.sondageService.deleteQuestion(this.selectedSondage.id, this.confirmDeleteQId).subscribe({
      next: () => { this.confirmDeleteQId = null; this.reloadQuestions(this.selectedSondage!.id); },
      error: () => { this.confirmDeleteQId = null; },
    });
  }

  private reloadQuestions(sid: number): void {
    this.sondageService.getSondage(sid).subscribe({
      next: (res) => { this.selectedSondage = res.sondage; this.questions = res.sondage.questions ?? []; },
    });
  }

  // ── STATS ─────────────────────────────────────────────────────────────────
  openStats(s: Sondage): void {
    this.selectedSondage = s; this.statsLoading = true; this.stats = null; this.tab = 'stats';
    this.sondageService.getStatistiques(s.id).subscribe({
      next: (res) => { this.stats = res.statistiques; this.statsLoading = false; },
      error: () => { this.statsLoading = false; },
    });
  }

  // ── TOGGLE ACTIF ─────────────────────────────────────────────────────────
  toggleActif(s: Sondage): void {
    const obs = s.est_actif ? this.sondageService.archiveSondage(s.id) : this.sondageService.publishSondage(s.id);
    obs.subscribe({ next: () => this.loadAll() });
  }

  // ── DELETE ────────────────────────────────────────────────────────────────
  confirmDelete(id: number): void { this.confirmDeleteId = id; }
  deleteSondage(): void {
    if (!this.confirmDeleteId) return;
    this.sondageService.deleteSondage(this.confirmDeleteId).subscribe({
      next: () => { this.confirmDeleteId = null; this.loadAll(); },
      error: () => { this.confirmDeleteId = null; },
    });
  }

  // ── ENVOYER ───────────────────────────────────────────────────────────────
  openEnvoyer(s: Sondage): void {
    this.selectedSondage = s;
    this.envoyerSuccess = '';
    this.envoyerError = '';
    // Pré-remplir depuis cible_entreprise_ids sauvegardé, puis fallback sur entreprise_id
    const cibles: number[] = s.parametres?.cible_entreprise_ids ?? [];
    this.envoyerEntrepriseIds = cibles.length > 0 ? [...cibles]
                              : (s.entreprise_id ? [s.entreprise_id] : []);
    this.tab = 'envoyer';
  }

  get isEnqueteLibreSansFormation(): boolean {
    return !!(this.selectedSondage
      && this.selectedSondage.declenchement === 'manuel'
      && this.getFormationsTitres(this.selectedSondage).length === 0);
  }

  toggleEnvoyerEntreprise(id: number): void {
    const idx = this.envoyerEntrepriseIds.indexOf(id);
    if (idx === -1) this.envoyerEntrepriseIds.push(id);
    else this.envoyerEntrepriseIds.splice(idx, 1);
  }

  toggleAllEnvoyerEntreprises(): void {
    if (this.allEnvoyerEntreprisesSelected) this.envoyerEntrepriseIds = [];
    else this.envoyerEntrepriseIds = this.entreprises.map(e => e.id);
  }

  get allEnvoyerEntreprisesSelected(): boolean {
    return this.entreprises.length > 0 && this.envoyerEntrepriseIds.length === this.entreprises.length;
  }

  isEnvoyerEntrepriseSelected(id: number): boolean {
    return this.envoyerEntrepriseIds.includes(id);
  }

  envoyerSondage(): void {
    if (!this.selectedSondage) return;
    // Pour une enquête libre sans formation, au moins une entreprise doit être choisie
    if (this.isEnqueteLibreSansFormation && this.envoyerEntrepriseIds.length === 0) {
      this.envoyerError = 'Veuillez sélectionner au moins une entreprise destinataire.';
      return;
    }
    this.envoyerLoading = true;
    this.envoyerSuccess = '';
    this.envoyerError = '';
    this.sondageService.envoyerSondage(this.selectedSondage.id, undefined, this.envoyerEntrepriseIds).subscribe({
      next: (res) => { this.envoyerLoading = false; this.envoyerSuccess = res.message ?? 'Emails mis en file d\'attente.'; },
      error: (err) => { this.envoyerLoading = false; this.envoyerError = err?.error?.message ?? 'Erreur lors de l\'envoi.'; },
    });
  }

  // ── RÉSULTATS DÉTAILLÉS ───────────────────────────────────────────────────
  openResultats(s: Sondage): void {
    this.selectedSondage = s;
    this.resultatsLoading = true;
    this.resultats = null;
    this.resultatsQuestions = [];
    this.tab = 'resultats';
    this.sondageService.getResultats(s.id).subscribe({
      next: (res) => { this.resultats = res.reponses ?? []; this.resultatsQuestions = res.questions ?? []; this.resultatsLoading = false; },
      error: () => { this.resultatsLoading = false; },
    });
  }

  getReponseLabel(reponses: Record<string, any> | any[] | null, questionId: number): string {
    if (!reponses) return '—';
    let val: any;
    if (Array.isArray(reponses)) {
      // Format tableau [{question_id, reponse, reponse_multiple, reponse_numerique}]
      const item = reponses.find((r: any) => r.question_id === questionId);
      if (!item) return '—';
      val = item.reponse_multiple ?? item.reponse_numerique ?? item.reponse;
    } else {
      // Format map {question_id: valeur}
      val = reponses[questionId];
    }
    if (val === null || val === undefined || val === '') return '—';
    if (Array.isArray(val)) return val.join(', ');
    return String(val);
  }

  exportCsv(s: Sondage): void { window.open(this.sondageService.getExportUrl(s.id), '_blank'); }

  // ── Helpers ───────────────────────────────────────────────────────────────
  typeLabel(type: string): string { return this.sondageService.getTypeLabel(type); }
  typeColor(type: string): string { return this.sondageService.getTypeColor(type); }
  needsOptions(type: string): boolean { return ['radio', 'checkbox', 'select'].includes(type); }
  hasEchelle(type: string): boolean { return ['echelle', 'notation'].includes(type); }

  getStatutClass(s: Sondage): string {
    if (!s.est_actif) return 'badge-inactif';
    if (s.date_fin && new Date(s.date_fin) < new Date()) return 'badge-termine';
    return 'badge-ouvert';
  }
  getStatutLabel(s: Sondage): string {
    if (!s.est_actif) return 'Inactif';
    if (s.date_fin && new Date(s.date_fin) < new Date()) return 'Terminé';
    return 'Ouvert';
  }

  backToList(): void { this.tab = 'liste'; this.loadAll(); }
  getQuestionTypeLabel(type: string): string { return this.questionTypes.find(t => t.value === type)?.label ?? type; }
  statWidth(val: number, total: number): number { if (!total) return 0; return Math.round((val / total) * 100); }
  asNumber(v: unknown): number { return Number(v); }

  get pageNumbers(): number[] {
    const total = this.totalPages;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const p = this.currentPage;
    const pages: number[] = [1];
    if (p > 3) pages.push(-1);
    for (let i = Math.max(2, p - 1); i <= Math.min(total - 1, p + 1); i++) pages.push(i);
    if (p < total - 2) pages.push(-1);
    pages.push(total);
    return pages;
  }
}
