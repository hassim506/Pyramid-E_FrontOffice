import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { routes } from '../../../shared/service/routes/routes';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { QuizService } from '../../../shared/service/quiz/quiz.service';
import { QuestionQuizService } from '../../../shared/service/quiz/question-quiz.service';
import { QuizResultsService } from '../../../shared/service/quiz/quiz-results.service';

@Component({
  selector: 'app-instructor-course-details',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './instructor-course-details.component.html',
  styleUrl: './instructor-course-details.component.scss'
})
export class InstructorCourseDetailsComponent implements OnInit, OnDestroy {
  routes = routes;

  // ── state ──────────────────────────────────────────────────────────────
  loading    = false;
  error      = '';
  success    = '';
  savingQuiz = false;
  loadingQuiz   = false;
  loadingStats  = false;

  activeTab: 'contenu' | 'stats' | 'info' = 'contenu';

  // ── formation data ─────────────────────────────────────────────────────
  formation: any = null;
  private formationId: number | null = null;
  private currentUser: any = null;

  // ── module/section navigation ──────────────────────────────────────────
  openModules: Record<number, boolean> = {};
  selectedSection: any = null;
  selectedModule: any  = null;

  // ── quiz editor ────────────────────────────────────────────────────────
  activeQuiz: any = null;
  expandedQuestion: number | null = null;

  // ── stats tab ──────────────────────────────────────────────────────────
  allFormationQuizzes: any[] = [];
  selectedQuizId: number | string = '';
  quizStats: any = null;
  scoreBands: any[] = [];
  questionStats: any[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formationService: FormationService,
    private authService: AuthService,
    private quizService: QuizService,
    private questionService: QuestionQuizService,
    private resultsService: QuizResultsService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const idParam = params.get('id');
      const id = idParam ? Number(idParam) : null;
      this.formationId = id && !Number.isNaN(id) ? id : null;
      if (this.formationId !== null) { this.loadFormation(); }
      else { this.error = 'ID de formation manquant'; }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── load formation ─────────────────────────────────────────────────────
  private loadFormation(): void {
    this.loading = true;
    this.error = '';
    this.formationService.getFormationById(this.formationId!).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (res) => {
        this.formation = res.formation || res.data || res;
        this.formation.modules = this.formation.modules || [];
        // open first module by default
        if (this.formation.modules.length) {
          this.openModules[this.formation.modules[0].id] = true;
        }
        this.loading = false;
        this.collectFormationQuizzes();
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement de la formation';
        this.loading = false;
      }
    });
  }

  // ── collect all quiz sections for stats selector ───────────────────────
  private collectFormationQuizzes(): void {
    this.allFormationQuizzes = [];
    (this.formation.modules || []).forEach((mod: any) => {
      (mod.sections || []).forEach((sec: any) => {
        if (sec.type === 'quiz' && sec.quiz_id) {
          this.allFormationQuizzes.push({ id: sec.quiz_id, titre: sec.titre });
        }
      });
    });
  }

  // ── module accordion ───────────────────────────────────────────────────
  toggleModule(id: number): void {
    this.openModules[id] = !this.openModules[id];
  }

  // ── section selection ──────────────────────────────────────────────────
  selectSection(section: any, module: any): void {
    this.selectedSection = section;
    this.selectedModule  = module;
    this.activeQuiz      = null;
    this.expandedQuestion = null;

    if (section.type === 'quiz') {
      const quizId = section.quiz_id;
      if (quizId) { this.loadQuiz(quizId); }
    }
  }

  private loadQuiz(quizId: number): void {
    this.loadingQuiz = true;
    this.quizService.getQuiz(quizId).pipe(
      takeUntil(this.destroy$),
      catchError(() => of(null))
    ).subscribe((res: any) => {
      const quiz = res?.quiz || res;
      if (quiz) {
        this.activeQuiz = quiz;
        // load questions
        this.questionService.getQuestions(quizId).pipe(
          takeUntil(this.destroy$),
          catchError(() => of({ questions: [] }))
        ).subscribe(res => {
          this.activeQuiz.questions = (res.questions || []).map((q: any) => ({
            ...q,
            reponses: q.reponses || this.defaultOptions(q.type),
          }));
          this.loadingQuiz = false;
        });
      } else {
        this.loadingQuiz = false;
      }
    });
  }

  private defaultOptions(type: string): any[] {
    if (type === 'true_false') {
      return [
        { reponse_text: 'Vrai', is_correct: true,  ordre: 1 },
        { reponse_text: 'Faux', is_correct: false, ordre: 2 },
      ];
    }
    if (type === 'multiple_choice' || type === 'multiple_choice_multi') {
      return [
        { reponse_text: '', is_correct: true,  ordre: 1 },
        { reponse_text: '', is_correct: false, ordre: 2 },
      ];
    }
    return [];
  }

  // ── add quiz to module ─────────────────────────────────────────────────
  addQuizToModule(module: any): void {
    // create a blank quiz then attach to module
    const newQuiz = {
      titre: `Quiz — ${module.titre}`,
      description: '',
      formation_id: this.formation.id,
      score_minimum: 70,
      tentatives_max: 2,
      duree_minutes: 0,
      is_active: true,
    };
    this.quizService.createQuiz(newQuiz).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (quiz: any) => {
        const quizData = quiz.quiz || quiz;
        // create a fake section in the module for navigation
        const fakeSection = {
          id: Date.now(),
          titre: quizData.titre,
          type: 'quiz',
          quiz_id: quizData.id,
        };
        module.sections = module.sections || [];
        module.sections.push(fakeSection);
        this.activeQuiz = { ...quizData, questions: [] };
        this.selectedSection = fakeSection;
        this.selectedModule  = module;
        this.success = 'Quiz créé avec succès';
        setTimeout(() => this.success = '', 3000);
      },
      error: () => { this.error = 'Erreur lors de la création du quiz'; }
    });
  }

  createQuizForSection(section: any, module: any): void {
    this.addQuizToModule(module);
  }

  // ── question accordion ─────────────────────────────────────────────────
  toggleQuestion(id: number): void {
    this.expandedQuestion = this.expandedQuestion === id ? null : id;
  }

  // ── add question ───────────────────────────────────────────────────────
  addQuestion(type: string): void {
    if (!this.activeQuiz) return;
    const newQ = {
      id: Date.now(), // temp id until saved
      quizzes_id: this.activeQuiz.id,
      question_text: '',
      type,
      points: 1,
      ordre: (this.activeQuiz.questions?.length || 0) + 1,
      reponses: this.defaultOptions(type),
      explication: '',
      _new: true,
    };
    this.activeQuiz.questions = [...(this.activeQuiz.questions || []), newQ];
    this.expandedQuestion = newQ.id;
  }

  duplicateQuestion(q: any, event: Event): void {
    event.stopPropagation();
    if (!this.activeQuiz) return;
    const copy = {
      ...JSON.parse(JSON.stringify(q)),
      id: Date.now(),
      ordre: (this.activeQuiz.questions?.length || 0) + 1,
      _new: true,
    };
    this.activeQuiz.questions = [...this.activeQuiz.questions, copy];
    this.expandedQuestion = copy.id;
  }

  deleteQuestion(q: any, event: Event): void {
    event.stopPropagation();
    if (!this.activeQuiz) return;
    if (q._new) {
      this.activeQuiz.questions = this.activeQuiz.questions.filter((x: any) => x.id !== q.id);
      return;
    }
    this.questionService.deleteQuestion(this.activeQuiz.id, q.id).pipe(
      takeUntil(this.destroy$),
      catchError(() => of(null))
    ).subscribe(() => {
      this.activeQuiz.questions = this.activeQuiz.questions.filter((x: any) => x.id !== q.id);
    });
  }

  // ── options ────────────────────────────────────────────────────────────
  toggleCorrect(q: any, opt: any): void {
    if (q.type === 'multiple_choice') {
      // single answer — deselect others
      q.reponses.forEach((r: any) => r.is_correct = false);
      opt.is_correct = true;
    } else {
      // multi or true_false — toggle
      opt.is_correct = !opt.is_correct;
    }
  }

  addOption(q: any): void {
    q.reponses = [...(q.reponses || []), {
      reponse_text: '',
      is_correct: false,
      ordre: (q.reponses?.length || 0) + 1,
    }];
  }

  removeOption(q: any, index: number): void {
    q.reponses = q.reponses.filter((_: any, i: number) => i !== index);
  }

  // ── save quiz ──────────────────────────────────────────────────────────
  saveQuiz(): void {
    if (!this.activeQuiz) return;
    this.savingQuiz = true;
    this.error = '';

    // 1. update quiz settings
    const quizUpdate = {
      titre:         this.activeQuiz.titre,
      description:   this.activeQuiz.description,
      score_minimum: this.activeQuiz.score_minimum,
      tentatives_max: this.activeQuiz.tentatives_max,
      duree_minutes: this.activeQuiz.duree_minutes,
    };

    this.quizService.updateQuiz(this.activeQuiz.id, quizUpdate).pipe(
      takeUntil(this.destroy$),
      catchError(() => of(null))
    ).subscribe(() => {
      // 2. save each question
      const saves = (this.activeQuiz.questions || []).map((q: any) => {
        const payload = {
          question_text: q.question_text,
          type:          q.type,
          points:        q.points,
          ordre:         q.ordre,
          reponses:      q.reponses,
          explication:   q.explication,
          quizzes_id:    this.activeQuiz.id,
        };
        if (q._new) {
          return this.questionService.createQuestion(this.activeQuiz.id, payload).pipe(
            catchError(() => of(null))
          );
        }
        return this.questionService.updateQuestion(this.activeQuiz.id, q.id, payload).pipe(
          catchError(() => of(null))
        );
      });

      forkJoin(saves.length ? saves : [of(null)]).subscribe(() => {
        this.savingQuiz = false;
        this.success = 'Quiz enregistré avec succès';
        setTimeout(() => this.success = '', 3000);
        // mark questions as no longer new
        this.activeQuiz.questions.forEach((q: any) => delete q._new);
      });
    });
  }

  // ── publish formation ──────────────────────────────────────────────────
  publishFormation(): void {
    if (!this.formation) return;
    const action = this.formation.est_publie
      ? this.formationService.unpublishFormation(this.formation.id)
      : this.formationService.publishFormation(this.formation.id);
    action.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.formation.est_publie = !this.formation.est_publie;
        this.success = this.formation.est_publie ? 'Formation publiée' : 'Formation dépubliée';
        setTimeout(() => this.success = '', 3000);
      },
      error: () => { this.error = 'Erreur lors de la publication'; }
    });
  }

  // ── quiz stats ─────────────────────────────────────────────────────────
  loadQuizStats(): void {
    if (!this.selectedQuizId) { this.quizStats = null; return; }
    this.loadingStats = true;
    this.resultsService.getQuizStatistics(+this.selectedQuizId).pipe(
      takeUntil(this.destroy$),
      catchError(() => of(null))
    ).subscribe(res => {
      if (res) {
        this.quizStats = res.statistics || res;
        this.buildScoreBands(res.score_distribution || []);
        this.buildQuestionStats(res.question_stats || []);
      }
      this.loadingStats = false;
    });
  }

  private buildScoreBands(dist: any[]): void {
    const bands = [
      { label: '90–100%', color: 'fill-green', textColor: 'tc-green', min: 90, max: 100 },
      { label: '70–89%',  color: 'fill-green', textColor: 'tc-green', min: 70, max: 89 },
      { label: '50–69%',  color: 'fill-amber', textColor: 'tc-amber', min: 50, max: 69 },
      { label: '0–49%',   color: 'fill-red',   textColor: 'tc-red',   min: 0,  max: 49 },
    ];
    const total = dist.reduce((s: number, d: any) => s + (d.count || 0), 0) || 1;
    this.scoreBands = bands.map(b => {
      const entry = dist.find((d: any) => d.min === b.min) || { count: 0 };
      return { ...b, count: entry.count || 0, pct: Math.round((entry.count || 0) / total * 100) };
    });
  }

  private buildQuestionStats(qs: any[]): void {
    this.questionStats = qs.map((q: any) => ({
      question: q.question_text || q.question,
      pct: Math.round(q.taux_correct ?? q.success_rate ?? 0),
    }));
  }

  getParticipationRate(): number {
    if (!this.quizStats || !this.formation?.nb_inscrits) return 0;
    return Math.round((this.quizStats.total_participants || 0) / this.formation.nb_inscrits * 100);
  }

  getReussiteRate(): number {
    if (!this.quizStats?.total_participants) return 0;
    return Math.round((this.quizStats.nb_reussis || 0) / this.quizStats.total_participants * 100);
  }

  // ── helpers ────────────────────────────────────────────────────────────
  getDisplayName(): string {
    const u = this.currentUser;
    if (!u) return this.formation?.formateur?.nom || 'Formateur';
    return u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.email || 'Formateur';
  }

  getTypeLabel(type: string): string {
    const map: Record<string, string> = {
      multiple_choice:       'Choix unique',
      multiple_choice_multi: 'Choix multiple',
      true_false:            'Vrai / Faux',
      text:                  'Texte libre',
    };
    return map[type] || type;
  }

  getNiveauLabel(niveau: string): string {
    const map: Record<string, string> = {
      debutant: 'Débutant', intermediaire: 'Intermédiaire', avance: 'Avancé', expert: 'Expert',
    };
    return map[niveau] || niveau || '—';
  }

  getLangueLabel(langue: string): string {
    const map: Record<string, string> = { fr: 'Français', en: 'Anglais', ar: 'Arabe' };
    return map[langue] || langue || '—';
  }

  formatDate(d: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
