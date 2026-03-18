import { Component, OnInit }        from '@angular/core';
import { CommonModule }              from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormsModule }               from '@angular/forms';
import { FormationsService }         from '../../../shared/service/Formationsss/formations.service';
import { routes }                    from '../../../shared/service/routes/routes';

interface Reponse {
  id:           number;
  reponse_text: string;
  ordre:        number;
}

interface Question {
  id:           number;
  question_text:string;
  type:         'multiple_choice' | 'true_false' | 'text';
  points:       number;
  ordre:        number;
  reponses:     Reponse[];
}

interface Quiz {
  id:             number;
  titre:          string;
  description:    string | null;
  duree_minutes:  number;
  score_minimum:  number;
  formation_id:   number;
}

@Component({
  selector:    'app-student-quiz-questions',
  standalone:  true,
  imports:     [CommonModule, RouterLink, FormsModule],
  templateUrl: './student-quiz-questions.component.html',
  styleUrl:    './student-quiz-questions.component.scss'
})
export class StudentQuizQuestionsComponent implements OnInit {

  public routes = routes;

  // ── Données ────────────────────────────────────────────────
  quiz:      Quiz | null  = null;
  questions: Question[]   = [];
  loading  = true;
  error    = '';

  // ── Navigation question ────────────────────────────────────
  selected     = 1;   // index 1-based (comme avant)
  get currentQuestion(): Question | null {
    return this.questions[this.selected - 1] ?? null;
  }
  get totalQuestions(): number { return this.questions.length; }
  get progressPercent(): number {
    return this.totalQuestions ? Math.round((this.selected / this.totalQuestions) * 100) : 0;
  }

  // ── Réponses sélectionnées ─────────────────────────────────
  // Map questionId → reponseId (ou texte pour 'text')
  selectedReponses: Record<number, number | string> = {};
  textReponses:     Record<number, string>           = {};

  // ── Timer ──────────────────────────────────────────────────
  timeLeft   = 0;   // en secondes
  timerLabel = '00:00';
  private timerInterval: any;

  // ── Résultat ───────────────────────────────────────────────
  resultat: any    = null;
  submitted        = false;
  submitting       = false;

  constructor(
    private route:             ActivatedRoute,
    private router:            Router,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    const quizId = Number(this.route.snapshot.paramMap.get('id'));
    if (!quizId) { this.error = 'Quiz introuvable.'; this.loading = false; return; }
    this.loadQuiz(quizId);
  }

  // ── Chargement ─────────────────────────────────────────────
  loadQuiz(quizId: number): void {
    this.loading = true;
    this.formationsService.getQuizDetail(quizId).subscribe({
      next: (res: any) => {
        this.quiz      = res.quiz      ?? res;
        this.questions = (res.questions ?? res.quiz?.questions ?? [])
          .sort((a: Question, b: Question) => a.ordre - b.ordre);

        if (this.quiz?.duree_minutes) {
          this.timeLeft = this.quiz.duree_minutes * 60;
          this.startTimer();
        }
        this.loading = false;
      },
      error: () => {
        this.error   = 'Impossible de charger le quiz.';
        this.loading = false;
      }
    });
  }

  // ── Timer ──────────────────────────────────────────────────
  startTimer(): void {
    this.updateTimerLabel();
    this.timerInterval = setInterval(() => {
      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.submitQuiz(); // Soumission automatique
        return;
      }
      this.timeLeft--;
      this.updateTimerLabel();
    }, 1000);
  }

  updateTimerLabel(): void {
    const m = Math.floor(this.timeLeft / 60).toString().padStart(2, '0');
    const s = (this.timeLeft % 60).toString().padStart(2, '0');
    this.timerLabel = `${m}:${s}`;
  }

  get totalTimeLabel(): string {
    if (!this.quiz?.duree_minutes) return '';
    const m = this.quiz.duree_minutes.toString().padStart(2, '0');
    return `${m}:00`;
  }

  // ── Navigation ─────────────────────────────────────────────
  moveNext(): void {
    if (this.selected < this.totalQuestions) this.selected++;
    else this.submitQuiz();
  }

  movePrev(): void {
    if (this.selected > 1) this.selected--;
  }

  // ── Sélection réponse ──────────────────────────────────────
  selectReponse(questionId: number, reponseId: number): void {
    this.selectedReponses[questionId] = reponseId;
  }

  isSelected(questionId: number, reponseId: number): boolean {
    return this.selectedReponses[questionId] === reponseId;
  }

  isAnswered(question: Question): boolean {
    if (question.type === 'text') return !!this.textReponses[question.id]?.trim();
    return !!this.selectedReponses[question.id];
  }

  get totalAnswered(): number {
    return this.questions.filter(q => this.isAnswered(q)).length;
  }

  // ── Soumission ─────────────────────────────────────────────
  submitQuiz(): void {
    if (this.submitting || !this.quiz) return;
    clearInterval(this.timerInterval);
    this.submitting = true;

    const reponses = this.questions
      .filter(q => q.type !== 'text' && this.selectedReponses[q.id])
      .map(q => ({
        question_id: q.id,
        reponse_id:  this.selectedReponses[q.id] as number,
      }));

    this.formationsService.soumettreQuiz(this.quiz.id, reponses).subscribe({
      next: (res: any) => {
       this.resultat   = res.result ?? res.resultat ?? res;
       this.submitted  = true;
       this.submitting = false;
      this.selected   = this.totalQuestions + 1;
        // Aller à la page résultat (selected = totalQuestions + 1)
        this.selected   = this.totalQuestions + 1;
      },
      error: () => {
        this.submitting = false;
        this.error = 'Erreur lors de la soumission du quiz.';
      }
    });
  }

  // ── Helpers résultat ───────────────────────────────────────
  get estReussi(): boolean {
    return this.resultat?.est_reussi ?? false;
  }

  get noteFinale(): number {
    return this.resultat?.note ?? 0;
  }

  getNoteColor(): string {
    if (this.noteFinale >= 75) return '#10b981';
    if (this.noteFinale >= 50) return '#f59e0b';
    return '#ef4444';
  }

  retournerAuxQuiz(): void {
    this.router.navigate([routes.studentsQuiz]);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
  }
}