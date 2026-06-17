import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SondageService, Sondage, QuestionSondage } from '../../../shared/service/sondage/sondage.service';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { HasPermissionDirective } from '../../../directive/has-permission-directive.directive';

type Tab = 'liste' | 'creer' | 'editer' | 'questions' | 'stats';

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
  selector: 'app-adminrh-sondage',
  standalone: true,
  imports: [CommonModule, FormsModule, HasPermissionDirective],
  templateUrl: './adminrh-sondage.component.html',
  styleUrl: './adminrh-sondage.component.scss',
})
export class AdminrhSondageComponent implements OnInit {
  tab: Tab = 'liste';

  // ── Liste ──────────────────────────────────────────────────────────────────
  sondages: Sondage[] = [];
  loading = false;
  error = '';
  search = '';
  filterType = '';
  filterActif = '';
  currentPage = 1;
  totalPages = 1;
  total = 0;
  private search$ = new Subject<string>();

  // ── Sondage sélectionné ────────────────────────────────────────────────────
  selectedSondage: Sondage | null = null;

  // ── Formulaire création/édition ────────────────────────────────────────────
  form: Partial<Sondage> = {};
  saving = false;
  formError = '';

  // ── Questions ──────────────────────────────────────────────────────────────
  questions: QuestionSondage[] = [];
  questionTypes = QUESTION_TYPES;
  editingQuestion: Partial<QuestionSondage> | null = null;
  questionError = '';
  newOptionText = '';

  // ── Stats ──────────────────────────────────────────────────────────────────
  stats: any = null;
  statsLoading = false;

  // ── Confirm delete ─────────────────────────────────────────────────────────
  confirmDeleteId: number | null = null;
  confirmDeleteQId: number | null = null;

  constructor(private sondageService: SondageService) {}

  ngOnInit(): void {
    this.loadSondages();
    this.search$.pipe(debounceTime(350), distinctUntilChanged()).subscribe(() => {
      this.currentPage = 1;
      this.loadSondages();
    });
  }

  onSearch(): void { this.search$.next(this.search); }

  loadSondages(): void {
    this.loading = true;
    const filters: any = { page: this.currentPage, per_page: 12 };
    if (this.search)      filters.search   = this.search;
    if (this.filterType)  filters.type     = this.filterType;
    if (this.filterActif !== '') filters.est_actif = this.filterActif === '1';

    this.sondageService.getSondages(filters).subscribe({
      next: (res) => {
        this.sondages    = res.sondages ?? [];
        this.totalPages  = res.pagination?.last_page ?? 1;
        this.total       = res.pagination?.total ?? 0;
        this.loading     = false;
      },
      error: (err: any) => { this.error = httpErrorMessage(err, 'Impossible de charger les sondages.'); this.loading = false; },
    });
  }

  goToPage(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.currentPage = p;
    this.loadSondages();
  }

  // ── CREATE ────────────────────────────────────────────────────────────────
  openCreate(): void {
    this.form = {
      type: 'satisfaction',
      declenchement: 'manuel',
      est_anonyme: false,
      est_obligatoire: false,
      est_actif: true,
      autorise_retour: true,
      afficher_progres: true,
      nombre_tentatives_max: 1,
      duree_estimee: 5,
    };
    this.formError = '';
    this.tab = 'creer';
  }

  openEdit(s: Sondage): void {
    this.selectedSondage = s;
    this.form = { ...s };
    this.formError = '';
    this.tab = 'editer';
  }

  saveSondage(): void {
    if (!this.form.titre || !this.form.type) { this.formError = 'Titre et type sont obligatoires.'; return; }
    this.saving = true;
    this.formError = '';

    const obs = this.tab === 'creer'
      ? this.sondageService.createSondage(this.form)
      : this.sondageService.updateSondage(this.selectedSondage!.id, this.form);

    obs.subscribe({
      next: (res) => {
        this.saving = false;
        if (this.tab === 'creer' && res.sondage) {
          this.openQuestions(res.sondage);
        } else {
          this.tab = 'liste';
          this.loadSondages();
        }
      },
      error: (err) => {
        this.saving = false;
        this.formError = err?.error?.message ?? 'Erreur lors de la sauvegarde.';
      },
    });
  }

  // ── QUESTIONS ─────────────────────────────────────────────────────────────
  openQuestions(s: Sondage): void {
    this.selectedSondage = s;
    this.questions = [...(s.questions ?? [])];
    this.editingQuestion = null;
    this.questionError = '';
    this.tab = 'questions';
    // reload fresh from API
    this.sondageService.getSondage(s.id).subscribe({
      next: (res) => {
        this.selectedSondage = res.sondage;
        this.questions = res.sondage.questions ?? [];
      },
    });
  }

  newQuestion(): void {
    this.editingQuestion = { type: 'radio', est_obligatoire: false, options: [] };
    this.questionError = '';
    this.newOptionText = '';
  }

  editQuestion(q: QuestionSondage): void {
    this.editingQuestion = { ...q, options: q.options ? [...(q.options as string[])] : [] };
    this.questionError = '';
    this.newOptionText = '';
  }

  cancelQuestion(): void { this.editingQuestion = null; this.questionError = ''; }

  addOption(): void {
    if (!this.newOptionText.trim()) return;
    const opts = this.editingQuestion!.options as string[] ?? [];
    opts.push(this.newOptionText.trim());
    this.editingQuestion!.options = opts;
    this.newOptionText = '';
  }

  removeOption(i: number): void {
    (this.editingQuestion!.options as string[]).splice(i, 1);
  }

  saveQuestion(): void {
    if (!this.editingQuestion?.question || !this.editingQuestion?.type) {
      this.questionError = 'La question et le type sont obligatoires.'; return;
    }
    const sid = this.selectedSondage!.id;
    const obs = this.editingQuestion.id
      ? this.sondageService.updateQuestion(sid, this.editingQuestion.id, this.editingQuestion)
      : this.sondageService.addQuestion(sid, this.editingQuestion);

    obs.subscribe({
      next: () => {
        this.editingQuestion = null;
        this.reloadQuestions(sid);
      },
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
    this.selectedSondage = s;
    this.statsLoading = true;
    this.stats = null;
    this.tab = 'stats';
    this.sondageService.getStatistiques(s.id).subscribe({
      next: (res) => { this.stats = res.statistiques; this.statsLoading = false; },
      error: () => { this.statsLoading = false; },
    });
  }

  // ── TOGGLE ACTIF ─────────────────────────────────────────────────────────
  toggleActif(s: Sondage): void {
    const obs = s.est_actif
      ? this.sondageService.archiveSondage(s.id)
      : this.sondageService.publishSondage(s.id);
    obs.subscribe({ next: () => this.loadSondages() });
  }

  // ── DELETE ────────────────────────────────────────────────────────────────
  confirmDelete(id: number): void { this.confirmDeleteId = id; }

  deleteSondage(): void {
    if (!this.confirmDeleteId) return;
    this.sondageService.deleteSondage(this.confirmDeleteId).subscribe({
      next: () => { this.confirmDeleteId = null; this.loadSondages(); },
      error: () => { this.confirmDeleteId = null; },
    });
  }

  exportCsv(s: Sondage): void {
    window.open(this.sondageService.getExportUrl(s.id), '_blank');
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  typeLabel(type: string): string { return this.sondageService.getTypeLabel(type); }
  typeColor(type: string): string { return this.sondageService.getTypeColor(type); }

  needsOptions(type: string): boolean {
    return ['radio', 'checkbox', 'select'].includes(type);
  }

  hasEchelle(type: string): boolean {
    return ['echelle', 'notation'].includes(type);
  }

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

  backToList(): void { this.tab = 'liste'; this.loadSondages(); }

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

  // stat bar width (%)
  statWidth(val: number, total: number): number {
    if (!total) return 0;
    return Math.round((val / total) * 100);
  }

  getQuestionTypeLabel(type: string): string {
    return this.questionTypes.find(t => t.value === type)?.label ?? type;
  }

  asNumber(v: unknown): number { return Number(v); }
}
