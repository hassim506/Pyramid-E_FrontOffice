import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';
import { ProgressionService } from '../../../shared/service/progression/progression.service';

export interface QuizQuestion {
  id: number; question: string; type: 'qcm' | 'vrai_faux';
  options?: string[]; reponse_correcte?: string | string[]; explication?: string;
}
export interface QuizResult {
  sectionId: number; score: number; total: number; passed: boolean;
  answers: { [key: number]: string };
}

@Component({
  standalone: true,
  selector: 'app-lecture-formation',
  imports: [CommonModule, FormsModule],
  templateUrl: './lecture-formation.component.html',
  styleUrls: ['./lecture-formation.component.scss']
})
export class LectureFormationComponent implements OnInit, OnChanges, OnDestroy {

  // ── Mode embarqué ────────────────────────────────
  @Input()  embeddedFormationId: number | null = null;
  @Output() closePlayer = new EventEmitter<void>();
  get isEmbedded(): boolean { return this.embeddedFormationId !== null; }

  formationId!: number;
  loading = true; error = '';
  formation: any = null; modules: any[] = [];
  selectedSection: any = null; hasContent = false;
  sidebarOpen = true; openModules: boolean[] = [];
  private flatSections: any[] = [];

  // ── Progression via service partagé ─────────────
  get completedIds(): Set<number>  { return this.progressionService.getCompleted(this.formationId); }
  get completedCount(): number     { return this.completedIds.size; }
  get totalSections(): number      { return this.flatSections.length; }
  get progressPercent(): number    { return this.progressionService.getPercent(this.formationId); }

  quizMode = false; quizSubmitted = false;
  currentAnswers: { [key: number]: string } = {};
  quizResults: { [sectionId: number]: QuizResult } = {};
  videoError = false;

  // ── Modal Quiz Final ─────────────────────────────
  showQuizFinalModal = false;
  quizFinalData: { id: number; titre: string; score_minimum: number; max_tentatives: number } | null = null;

  private sub?: Subscription;

  constructor(
    private route:              ActivatedRoute,
    private router:             Router,
    private formationsService:  FormationsService,
    private sanitizer:          DomSanitizer,
    public  progressionService: ProgressionService
  ) {}

  ngOnInit(): void {
    if (this.embeddedFormationId) {
      this.formationId = this.embeddedFormationId;
      this.loadStructure();
    } else {
      const idFromRoute = this.route.snapshot.paramMap.get('id');
      if (idFromRoute) {
        this.formationId = Number(idFromRoute);
        this.loadStructure();
      } else {
        this.error   = 'Formation introuvable';
        this.loading = false;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['embeddedFormationId']?.currentValue) {
      this.formationId = changes['embeddedFormationId'].currentValue;
      this.resetState();
      this.loadStructure();
    }
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }

  private resetState(): void {
    this.loading = true; this.error = ''; this.formation = null; this.modules = [];
    this.selectedSection = null; this.hasContent = false; this.openModules = [];
    this.flatSections = [];
    this.quizMode = false; this.quizSubmitted = false;
    this.currentAnswers = {}; this.quizResults = {}; this.videoError = false;
    this.sidebarOpen = true;
    this.showQuizFinalModal = false; this.quizFinalData = null;
  }

  loadStructure(): void {
    this.loading = true; this.error = '';
    this.progressionService.loadFromApi(this.formationId).subscribe();
    this.formationsService.getFormationStructure(this.formationId).subscribe({
      next: (res: any) => {
        this.formation = res?.formation || res?.structure?.formation || res?.data?.formation || null;
        this.modules   = res?.modules   || res?.structure?.modules   || res?.data?.modules   || [];
        if (!Array.isArray(this.modules)) this.modules = [];
        this.openModules = this.modules.map(() => true);
        this.flatSections = []; this.hasContent = false;
        for (const m of this.modules) {
          for (const s of m.sections || []) {
            this.flatSections.push(s);
            if (!this.hasContent) { this.hasContent = true; this.selectedSection = s; }
          }
        }
        if (!this.progressionService.hasData(this.formationId)) {
          this.progressionService.init(this.formationId, this.flatSections.length, []);
        } else {
          this.progressionService.init(this.formationId, this.flatSections.length);
        }
        this.loading = false;
      },
      error: () => { this.error = 'Impossible de charger le contenu'; this.loading = false; }
    });
  }

  selectSection(section: any): void {
    this.selectedSection = section; this.quizMode = false;
    this.quizSubmitted = false; this.currentAnswers = {}; this.videoError = false;
    if (window.innerWidth < 992) this.sidebarOpen = false;
  }
  toggleSidebar():         void { this.sidebarOpen = !this.sidebarOpen; }
  toggleModule(i: number): void { this.openModules[i] = !this.openModules[i]; }

  private getCurrentIndex(): number { return this.flatSections.findIndex(s => s.id === this.selectedSection?.id); }
  hasPrev(): boolean { return this.getCurrentIndex() > 0; }
  hasNext(): boolean { return this.getCurrentIndex() < this.flatSections.length - 1; }
  goToPrev(): void { const i = this.getCurrentIndex(); if (i > 0) this.selectSection(this.flatSections[i - 1]); }
  goToNext(): void { const i = this.getCurrentIndex(); if (i < this.flatSections.length - 1) this.selectSection(this.flatSections[i + 1]); }

  // ✅ markCompleted — souscrit à l'Observable et gère quiz_final
  markCompleted(sectionId: number): void {
    this.progressionService.markCompleted(this.formationId, sectionId)
      .subscribe((res: any) => {
        if (this.hasQuiz(this.selectedSection) && !this.quizResults[sectionId]) {
          setTimeout(() => this.startQuiz(), 400);
        }
        if (res?.est_termine && res?.quiz_final) {
          setTimeout(() => this._ouvrirModalQuizFinal(res.quiz_final), 600);
        }
      });
  }

  isCompleted(id: number): boolean { return this.progressionService.isCompleted(this.formationId, id); }

  hasQuiz(s: any): boolean  { return s?.quiz?.questions?.length > 0; }
  startQuiz(): void { this.quizMode = true; this.quizSubmitted = false; this.currentAnswers = {}; }
  exitQuiz():  void { this.quizMode = false; this.quizSubmitted = false; this.currentAnswers = {}; }
  selectAnswer(qId: number, a: string): void { if (!this.quizSubmitted) this.currentAnswers[qId] = a; }
  canSubmitQuiz(): boolean { return (this.selectedSection?.quiz?.questions || []).every((q: QuizQuestion) => this.currentAnswers[q.id] !== undefined); }
  getAnsweredCount(): number { return Object.keys(this.currentAnswers).length; }

  submitQuiz(): void {
    if (!this.canSubmitQuiz()) return;
    const questions: QuizQuestion[] = this.selectedSection?.quiz?.questions || [];
    let score = 0;
    questions.forEach(q => {
      const ua = this.currentAnswers[q.id];
      if (Array.isArray(q.reponse_correcte)) { if (q.reponse_correcte.includes(ua)) score++; }
      else { if (ua?.toLowerCase() === q.reponse_correcte?.toLowerCase()) score++; }
    });
    const passed = score >= Math.ceil(questions.length * 0.6);
    this.quizResults[this.selectedSection.id] = {
      sectionId: this.selectedSection.id, score, total: questions.length, passed,
      answers: { ...this.currentAnswers }
    };
    this.quizSubmitted = true;
    if (passed) {
      this.progressionService.markCompleted(this.formationId, this.selectedSection.id)
        .subscribe((res: any) => {
          if (res?.est_termine && res?.quiz_final) {
            setTimeout(() => this._ouvrirModalQuizFinal(res.quiz_final), 600);
          }
        });
    }
  }

  retryQuiz(): void {
    this.quizSubmitted = false; this.currentAnswers = {};
    if (this.selectedSection?.id) {
      delete this.quizResults[this.selectedSection.id];
      this.progressionService.markUncompleted(this.formationId, this.selectedSection.id);
    }
  }

  // ── Modal Quiz Final ─────────────────────────────
  private _ouvrirModalQuizFinal(quiz: any): void {
    this.quizFinalData      = quiz;
    this.showQuizFinalModal = true;
  }

  allerAuQuizFinal(): void {
    if (!this.quizFinalData) return;
    this.showQuizFinalModal = false;
    this.router.navigate(['/student/student-quiz-questions', this.quizFinalData.id]);
  }

  fermerModalQuizFinal(): void {
    this.showQuizFinalModal = false;
    this.goBack();
  }

  resterEtFairePlusTard(): void {
    this.showQuizFinalModal = false;
  }

  // ── Retour — navigation exacte selon le tunnel emprunté ──
  goBack(): void {
    if (this.isEmbedded) { this.closePlayer.emit(); return; }

    const state = history.state;

    if (state?.fromPage === 'parcours' && state?.parcoursId) {
      // Tunnel : mes-parcours/:id → lecture-formation
      this.router.navigate(['/student/mes-parcours', state.parcoursId]);
    } else if (state?.fromPage === 'catalogue' && state?.catalogueId) {
      // Tunnel : catalogue-detail/:id → lecture-formation
      this.router.navigate(['/student/catalogue-detail', state.catalogueId]);
    } else {
      // Tunnel : mes-formations → lecture-formation (fromPage: 'demandes' ou fallback)
      this.router.navigate(['/student/mes-formations']);
    }
  }

  // ── Helpers ──────────────────────────────────────
  isCorrectAnswer(q: QuizQuestion, opt: string): boolean {
    if (Array.isArray(q.reponse_correcte)) return q.reponse_correcte.includes(opt);
    return opt?.toLowerCase() === q.reponse_correcte?.toLowerCase();
  }
  getAnswerClass(q: QuizQuestion, opt: string): string {
    if (!this.quizSubmitted) return this.currentAnswers[q.id] === opt ? 'lp-quiz-opt--selected' : '';
    if (this.isCorrectAnswer(q, opt)) return 'lp-quiz-opt--correct';
    if (this.currentAnswers[q.id] === opt) return 'lp-quiz-opt--wrong';
    return '';
  }
  getQuizResult(): QuizResult | null { return this.quizResults[this.selectedSection?.id] ?? null; }

  getSafeUrl(url: string): SafeResourceUrl { return this.sanitizer.bypassSecurityTrustResourceUrl(url); }
  isYoutube(url: string): boolean { return /youtube\.com|youtu\.be/.test(url || ''); }
  isVimeo(url: string):   boolean { return /vimeo\.com/.test(url || ''); }
  getYoutubeEmbed(url: string): SafeResourceUrl {
    const id = url.match(/(?:v=|youtu\.be\/)([^&\s]+)/)?.[1] ?? '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`);
  }
  getVimeoEmbed(url: string): SafeResourceUrl {
    const id = url.match(/vimeo\.com\/(\d+)/)?.[1] ?? '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${id}?title=0&byline=0`);
  }

  getModuleOfSection(section: any): string {
    for (const m of this.modules) { if ((m.sections || []).some((s: any) => s.id === section.id)) return m.titre; }
    return '';
  }
  getModuleProgress(module: any): number {
    const s = module.sections || [];
    return s.length ? Math.round(
      s.filter((x: any) => this.progressionService.isCompleted(this.formationId, x.id)).length / s.length * 100
    ) : 0;
  }

  getSectionIcon(s: any): string {
    return ({ video: 'isax-video-play', texte: 'isax-document-text', image: 'isax-gallery', pdf: 'isax-document', audio: 'isax-voice-cricle' } as any)[s?.type] ?? 'isax-document-text';
  }
  getSectionTypeLabel(s: any): string {
    return ({ video: 'Vidéo', texte: 'Lecture', image: 'Image', pdf: 'Document', audio: 'Audio' } as any)[s?.type] ?? 'Contenu';
  }
}