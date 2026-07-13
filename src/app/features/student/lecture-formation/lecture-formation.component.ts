// filepath: src/app/courses/course-watch/lecture-formation.component.ts
import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { FormationService } from '../../../shared/service/formation/formation.service';
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

  // ── Mode embarqué ────────────────────────────────────────
  @Input()  embeddedFormationId:  number | null = null;
  @Input()  embeddedParcoursId:   number | null = null;
  @Input()  embeddedCatalogueId:  number | null = null;
  @Output() closePlayer = new EventEmitter<void>();
  get isEmbedded(): boolean { return this.embeddedFormationId !== null; }

  formationId!:  number;
  parcoursId:    number | null = null;
  catalogueId:   number | null = null;

  loading = true; error = '';
  formation: any = null; modules: any[] = [];
  selectedSection: any = null; hasContent = false;
  sidebarOpen = true; openModules: boolean[] = [];
  private flatSections: any[] = [];

  get completedIds(): Set<number>  {
    return this.progressionService.getCompleted(this.formationId, this.parcoursId, this.catalogueId);
  }
  get completedCount(): number     { return this.completedIds.size; }
  get totalSections(): number      { return this.flatSections.length; }
  get progressPercent(): number    {
    return this.progressionService.getPercent(this.formationId, this.parcoursId, this.catalogueId);
  }

  quizMode = false; quizSubmitted = false;
  currentAnswers: { [key: number]: string } = {};
  quizResults: { [sectionId: number]: QuizResult } = {};
  videoError = false;

  // ── Modal Quiz Final ─────────────────────────────────────
  showQuizFinalModal = false;
  quizFinalData: { id: number; titre: string; score_minimum: number; max_tentatives: number } | null = null;

  // ── Modal Sondage à chaud ─────────────────────────
  showSondageModal = false;
  sondageAChaud: any = null;

  private sub?: Subscription;

  constructor(
    private route:              ActivatedRoute,
    private router:             Router,
    private formationsService:  FormationService,
    private sanitizer:          DomSanitizer,
    public  progressionService: ProgressionService
  ) {}

  ngOnInit(): void {
    if (this.embeddedFormationId) {
      this.formationId = this.embeddedFormationId;
      this.parcoursId  = this.embeddedParcoursId  ?? null;
      this.catalogueId = this.embeddedCatalogueId ?? null;

      console.log(`🚀 [LectureFormation] Mode EMBARQUÉ → formationId=${this.formationId} | parcoursId=${this.parcoursId} | catalogueId=${this.catalogueId}`);

      this.loadStructure();
    } else {
      const idFromRoute = this.route.snapshot.paramMap.get('id');
      if (idFromRoute) {
        this.formationId = Number(idFromRoute);

        // Lire le contexte depuis history.state (navigation interne) OU queryParams (nouvel onglet)
        const state       = history.state ?? {};
        const qp          = this.route.snapshot.queryParamMap;
        this.parcoursId   = state?.parcoursId  ? Number(state.parcoursId)
                          : qp.get('parcoursId')  ? Number(qp.get('parcoursId'))  : null;
        this.catalogueId  = state?.catalogueId ? Number(state.catalogueId)
                          : qp.get('catalogueId') ? Number(qp.get('catalogueId')) : null;

        this.loadStructure();
      } else {
        console.error('❌ [LectureFormation] Aucun id dans la route');
        this.error   = 'Formation introuvable';
        this.loading = false;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['embeddedFormationId']?.currentValue) {
      this.formationId = changes['embeddedFormationId'].currentValue;
      this.parcoursId  = this.embeddedParcoursId  ?? null;
      this.catalogueId = this.embeddedCatalogueId ?? null;

      console.log(`🔄 [LectureFormation] ngOnChanges → nouveau formationId=${this.formationId} | parcoursId=${this.parcoursId} | catalogueId=${this.catalogueId}`);

      this.resetState();
      this.loadStructure();
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    console.log(`🗑️ [LectureFormation] Destruction → formationId=${this.formationId} | parcoursId=${this.parcoursId} | catalogueId=${this.catalogueId}`);
  }

  private resetState(): void {
    this.loading = true; this.error = ''; this.formation = null; this.modules = [];
    this.selectedSection = null; this.hasContent = false; this.openModules = [];
    this.flatSections = [];
    this.quizMode = false; this.quizSubmitted = false;
    this.currentAnswers = {}; this.quizResults = {}; this.videoError = false;
    this.sidebarOpen = true;
    this.showQuizFinalModal = false; this.quizFinalData = null;
    this.showSondageModal = false; this.sondageAChaud = null;
  }

  loadStructure(): void {
    this.loading = true; this.error = '';

    console.log(`📡 [LectureFormation] loadStructure() → formationId=${this.formationId} | parcoursId=${this.parcoursId} | catalogueId=${this.catalogueId}`);

    this.progressionService.loadFromApi(this.formationId, this.parcoursId, this.catalogueId).subscribe({
      next: (res) => {
        console.log(`✅ [LectureFormation] loadFromApi progression:`, res);
        console.log(`📊 [LectureFormation] Sections déjà complétées: [${res?.completed_section_ids ?? []}] | %=${res?.progression ?? 0}`);
      },
      error: (err) => {
        console.error(`❌ [LectureFormation] loadFromApi ERREUR:`, err);
      }
    });

    this.formationsService.getFormationStructure(this.formationId).subscribe({
      next: (res: any) => {
        this.formation = res?.formation || res?.structure?.formation || res?.data?.formation || null;
        this.modules   = res?.modules   || res?.structure?.modules   || res?.data?.modules   || [];
        if (!Array.isArray(this.modules)) this.modules = [];

        console.log(`✅ [LectureFormation] Structure chargée → formation:`, this.formation?.titre);

        this.openModules  = this.modules.map(() => true);
        this.flatSections = []; this.hasContent = false;

        for (const m of this.modules) {
          for (const s of m.sections || []) {
            this.flatSections.push(s);
            if (!this.hasContent) {
              this.hasContent     = true;
              this.selectedSection = s;
            }
          }
        }

        this.progressionService.init(
          this.formationId,
          this.flatSections.length,
          [],
          this.parcoursId,
          this.catalogueId
        );

        this.progressionService.debugDump();

        this.loading = false;
      },
      error: (err) => {
        console.error(`❌ [LectureFormation] getFormationStructure ERREUR:`, err);
        this.error   = 'Impossible de charger le contenu';
        this.loading = false;
      }
    });
  }

  selectSection(section: any): void {
    console.log(`📖 [LectureFormation] selectSection → id=${section.id} | titre="${section.titre}" | type=${section.type}`);

    this.selectedSection = section; this.quizMode = false;
    this.quizSubmitted = false; this.currentAnswers = {}; this.videoError = false;
    if (window.innerWidth < 992) this.sidebarOpen = false;
  }

  toggleSidebar():         void { this.sidebarOpen = !this.sidebarOpen; }
  toggleModule(i: number): void { this.openModules[i] = !this.openModules[i]; }

  private getCurrentIndex(): number {
    return this.flatSections.findIndex(s => s.id === this.selectedSection?.id);
  }
  hasPrev(): boolean { return this.getCurrentIndex() > 0; }
  hasNext(): boolean { return this.getCurrentIndex() < this.flatSections.length - 1; }
  goToPrev(): void { const i = this.getCurrentIndex(); if (i > 0) this.selectSection(this.flatSections[i - 1]); }
  goToNext(): void { const i = this.getCurrentIndex(); if (i < this.flatSections.length - 1) this.selectSection(this.flatSections[i + 1]); }

  // ✅ markCompleted — passe parcoursId + catalogueId au service
  markCompleted(sectionId: number): void {
    console.log(`✔️ [LectureFormation] markCompleted → sectionId=${sectionId} | formationId=${this.formationId} | parcoursId=${this.parcoursId} | catalogueId=${this.catalogueId}`);

    this.progressionService.markCompleted(
      this.formationId,
      sectionId,
      this.parcoursId,
      this.catalogueId
    ).subscribe((res: any) => {
      console.log(`✅ [LectureFormation] markCompleted réponse:`, {
        progression:  res?.progression,
        statut:       res?.statut,
        est_termine:  res?.est_termine,
        quiz_final:   res?.quiz_final,
        section_id:   res?.section_id,
      });

      if (this.hasQuiz(this.selectedSection) && !this.quizResults[sectionId]) {
        console.log(`🎯 [LectureFormation] Section a un quiz → démarrage automatique dans 400ms`);
        setTimeout(() => this.startQuiz(), 400);
      }

      if (res?.est_termine && res?.quiz_final) {
        console.log(`🏆 [LectureFormation] Formation TERMINÉE — quiz final disponible:`, res.quiz_final);
        setTimeout(() => this._ouvrirModalQuizFinal(res.quiz_final), 600);
      }

      if (res?.est_termine && !res?.quiz_final) {
        console.log(`🎉 [LectureFormation] Formation TERMINÉE — pas de quiz final`);
      }
    });
  }

  // ✅ isCompleted — passe parcoursId + catalogueId au service
  isCompleted(id: number): boolean {
    return this.progressionService.isCompleted(
      this.formationId,
      id,
      this.parcoursId,
      this.catalogueId
    );
  }

  hasQuiz(s: any): boolean  { return s?.quiz?.questions?.length > 0; }
  startQuiz(): void {
    console.log(`🎯 [LectureFormation] startQuiz → sectionId=${this.selectedSection?.id}`);
    this.quizMode = true; this.quizSubmitted = false; this.currentAnswers = {};
  }
  exitQuiz():  void {
    console.log(`↩️ [LectureFormation] exitQuiz`);
    this.quizMode = false; this.quizSubmitted = false; this.currentAnswers = {};
  }
  selectAnswer(qId: number, a: string): void {
    if (!this.quizSubmitted) this.currentAnswers[qId] = a;
  }
  canSubmitQuiz(): boolean {
    return (this.selectedSection?.quiz?.questions || []).every((q: QuizQuestion) => this.currentAnswers[q.id] !== undefined);
  }
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

    console.log(`📝 [LectureFormation] submitQuiz → score=${score}/${questions.length} | passed=${passed} | sectionId=${this.selectedSection.id}`);

    this.quizResults[this.selectedSection.id] = {
      sectionId: this.selectedSection.id, score, total: questions.length, passed,
      answers: { ...this.currentAnswers }
    };
    this.quizSubmitted = true;

    if (passed) {
      console.log(`✅ [LectureFormation] Quiz réussi → markCompleted sectionId=${this.selectedSection.id}`);

      this.progressionService.markCompleted(
        this.formationId,
        this.selectedSection.id,
        this.parcoursId,
        this.catalogueId
      ).subscribe((res: any) => {
        console.log(`✅ [LectureFormation] markCompleted après quiz réussi:`, {
          progression: res?.progression,
          est_termine: res?.est_termine,
          quiz_final:  res?.quiz_final,
        });

        if (res?.est_termine && res?.quiz_final) {
          console.log(`🏆 [LectureFormation] Formation TERMINÉE via quiz — quiz final:`, res.quiz_final);
          setTimeout(() => this._ouvrirModalQuizFinal(res.quiz_final), 600);
        }
      });
    } else {
      console.log(`❌ [LectureFormation] Quiz échoué → section NON marquée complétée`);
    }
  }

  retryQuiz(): void {
    console.log(`🔁 [LectureFormation] retryQuiz → sectionId=${this.selectedSection?.id}`);

    this.quizSubmitted = false; this.currentAnswers = {};
    if (this.selectedSection?.id) {
      delete this.quizResults[this.selectedSection.id];

      this.progressionService.markUncompleted(
        this.formationId,
        this.selectedSection.id,
        this.parcoursId,
        this.catalogueId
      );
    }
  }

  // ── Modal Quiz Final ─────────────────────────────────────
  private _ouvrirModalQuizFinal(quiz: any): void {
    console.log(`🏆 [LectureFormation] _ouvrirModalQuizFinal:`, quiz);
    this.quizFinalData      = quiz;
    this.showQuizFinalModal = true;
  }

  allerAuQuizFinal(): void {
    if (!this.quizFinalData) return;
    console.log(`🎯 [LectureFormation] allerAuQuizFinal → quizId=${this.quizFinalData.id}`);
    this.showQuizFinalModal = false;
    this.router.navigate(['/student/student-quiz-questions', this.quizFinalData.id]);
  }

  fermerModalQuizFinal(): void {
    console.log(`❌ [LectureFormation] fermerModalQuizFinal → goBack()`);
    this.showQuizFinalModal = false;
    this.goBack();
  }

  resterEtFairePlusTard(): void {
    console.log(`⏳ [LectureFormation] resterEtFairePlusTard — modal fermée, quiz ignoré pour l'instant`);
    this.showQuizFinalModal = false;
  }

  // ── Modal Sondage à chaud ─────────────────────────
  private _ouvrirModalSondage(sondage: any): void {
    this.sondageAChaud    = sondage;
    this.showSondageModal = true;
  }

  allerAuSondage(): void {
    if (!this.sondageAChaud) return;
    this.showSondageModal = false;
    this.router.navigate(['/student/student-sondage', this.sondageAChaud.id]);
  }

  fermerModalSondage(): void {
    this.showSondageModal = false;
    this.goBack();
  }

  ignorerSondage(): void {
    this.showSondageModal = false;
  }

  // ── Retour — navigation exacte selon le tunnel emprunté ──
  goBack(): void {
    if (this.isEmbedded) {
      this.closePlayer.emit();
      return;
    }

    // Lire le contexte depuis history.state (navigation interne) ou queryParams (nouvel onglet)
    const state    = history.state ?? {};
    const qp       = this.route.snapshot.queryParamMap;
    const fromPage = state?.fromPage ?? qp.get('fromPage') ?? '';
    const pId      = this.parcoursId  ?? (qp.get('parcoursId')  ? Number(qp.get('parcoursId'))  : null);
    const cId      = this.catalogueId ?? (qp.get('catalogueId') ? Number(qp.get('catalogueId')) : null);

    if (fromPage === 'parcours' && pId) {
      this.router.navigate(['/student/mes-parcours', pId]);
    } else if (fromPage === 'catalogue' && cId) {
      this.router.navigate(['/student/catalogue-detail', cId]);
    } else {
      this.router.navigate(['/student/mes-formations']);
    }
  }

  // ── Helpers ──────────────────────────────────────────────
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

  getQuizResult(): QuizResult | null {
    return this.quizResults[this.selectedSection?.id] ?? null;
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  isYoutube(url: string): boolean { return /youtube\.com|youtu\.be/.test(url || ''); }
  isVimeo(url: string):   boolean { return /vimeo\.com/.test(url || ''); }

  getYoutubeEmbed(url: string): SafeResourceUrl {
    const id = url.match(/(?:v=|youtu\.be\/)([^&\s]+)/)?.[1] ?? '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`
    );
  }

  getVimeoEmbed(url: string): SafeResourceUrl {
    const id = url.match(/vimeo\.com\/(\d+)/)?.[1] ?? '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://player.vimeo.com/video/${id}?title=0&byline=0`
    );
  }

  getModuleOfSection(section: any): string {
    for (const m of this.modules) {
      if ((m.sections || []).some((s: any) => s.id === section.id)) return m.titre;
    }
    return '';
  }

  getModuleProgress(module: any): number {
    const s = module.sections || [];
    if (!s.length) return 0;
    const done = s.filter((x: any) =>
      this.progressionService.isCompleted(this.formationId, x.id, this.parcoursId, this.catalogueId)
    ).length;
    const percent = Math.round(done / s.length * 100);

    console.log(`📊 [LectureFormation] getModuleProgress "${module.titre}" → ${done}/${s.length} = ${percent}%`);

    return percent;
  }

  getSectionIcon(s: any): string {
    return ({
      video:  'isax-video-play',
      texte:  'isax-document-text',
      image:  'isax-gallery',
      pdf:    'isax-document',
      audio:  'isax-voice-cricle'
    } as any)[s?.type] ?? 'isax-document-text';
  }

  getSectionTypeLabel(s: any): string {
    return ({
      video:  'Vidéo',
      texte:  'Lecture',
      image:  'Image',
      pdf:    'Document',
      audio:  'Audio'
    } as any)[s?.type] ?? 'Contenu';
  }

  getImageUrl(path: string | null | undefined): string {
    return this.formationsService.getImageUrl(path);
  }
}
