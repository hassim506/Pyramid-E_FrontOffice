import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormsModule }                   from '@angular/forms';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { routes }                        from '../../../shared/service/routes/routes';

interface Reponse {
  id:           number;
  reponse_text: string;
  ordre:        number;
}

interface Section {
  id:    number;
  titre: string;
}

interface Question {
  id:            number;
  question_text: string;
  type:          'multiple_choice' | 'multiple_choice_multi' | 'true_false' | 'text';
  points:        number;
  ordre:         number;
  reponses:      Reponse[];
  section:       Section | null;
}

interface Quiz {
  id:            number;
  titre:         string;
  description:   string | null;
  duree_minutes: number;
  score_minimum: number;
  formation_id:  number;
}

@Component({
  selector:    'app-student-quiz-questions',
  standalone:  true,
  imports:     [CommonModule, RouterLink, FormsModule],
  templateUrl: './student-quiz-questions.component.html',
  styleUrl:    './student-quiz-questions.component.scss'
})
export class StudentQuizQuestionsComponent implements OnInit, OnDestroy {

  public routes = routes;

  // ── Données ────────────────────────────────────────────────
  quiz:      Quiz | null = null;
  questions: Question[]  = [];
  loading  = true;
  error    = '';

  // ── Navigation ─────────────────────────────────────────────
  selected = 1;
  get currentQuestion(): Question | null { return this.questions[this.selected - 1] ?? null; }
  get totalQuestions(): number           { return this.questions.length; }
  get progressPercent(): number {
    return this.totalQuestions ? Math.round((this.selected / this.totalQuestions) * 100) : 0;
  }

  // ── Réponses ───────────────────────────────────────────────
selectedReponses: Record<number, number | number[] | string> = {};  textReponses:     Record<number, string>           = {};

  // ── Timer ──────────────────────────────────────────────────
  timeLeft   = 0;
  timerLabel = '00:00';
  private timerInterval: any;

  // ── Résultat ───────────────────────────────────────────────
  resultat:  any  = null;
  submitted        = false;
  submitting       = false;

  // ── Accordion ──────────────────────────────────────────────
  openSections: Set<string> = new Set();

  constructor(
    private route:             ActivatedRoute,
    private router:            Router,
    private formationsService: FormationService
  ) {}

  ngOnInit(): void {
    const quizId = Number(this.route.snapshot.paramMap.get('id'));
    if (!quizId) { this.error = 'Quiz introuvable.'; this.loading = false; return; }
    this.loadQuiz(quizId);
  }

  ngOnDestroy(): void { clearInterval(this.timerInterval); }

  // ── Chargement ─────────────────────────────────────────────
  loadQuiz(quizId: number): void {
    this.loading          = true;
    this.submitted        = false;
    this.submitting       = false;
    this.selected         = 1;
    this.selectedReponses = {};
    this.textReponses     = {};
    this.resultat         = null;
    this.openSections     = new Set();
    clearInterval(this.timerInterval);

    this.formationsService.getQuizDetail(quizId).subscribe({
      next: (res: any) => {
        this.quiz      = res.quiz      ?? res;
        this.questions = (res.questions ?? res.quiz?.questions ?? [])
          .sort((a: Question, b: Question) => a.ordre - b.ordre);

        // ── Auto-ouvrir toutes les sections dès le chargement ──
        const titres = new Set(
          this.questions.map(q => q.section?.titre ?? 'Questions générales')
        );
        this.openSections = new Set(titres);

        const duree = this.quiz?.duree_minutes || 10;
        if (duree) {
          this.timeLeft = duree * 60;
          this.startTimer();
        }
        this.loading = false;
      },
      error: () => { this.error = 'Impossible de charger le quiz.'; this.loading = false; }
    });
  }

  // ── Timer ──────────────────────────────────────────────────
  startTimer(): void {
    this.updateTimerLabel();
    this.timerInterval = setInterval(() => {
      if (this.timeLeft <= 0) { clearInterval(this.timerInterval); this.submitQuiz(); return; }
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
    return `${this.quiz.duree_minutes.toString().padStart(2, '0')}:00`;
  }

  // ── Navigation ─────────────────────────────────────────────
  moveNext(): void {
    if (this.selected < this.totalQuestions) {
      this.selected++;
      this.scrollToActive();
    } else {
      this.submitQuiz();
    }
  }

  movePrev(): void {
    if (this.selected > 1) {
      this.selected--;
      this.scrollToActive();
    }
  }

  scrollToActive(): void {
    setTimeout(() => {
      const el = document.querySelector('.qq-acc-dot--active');
      el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  }

  // ── Réponses ───────────────────────────────────────────────
selectReponse(questionId: number, reponseId: number, questionType: string): void {
  if (questionType === 'multiple_choice_multi') {
    const selected = this.selectedReponses[questionId] as number[] | undefined;
    if (selected?.includes(reponseId)) {
      this.selectedReponses[questionId] = selected.filter(id => id !== reponseId);
    } else {
      this.selectedReponses[questionId] = [...(selected || []), reponseId];
    }
    return;
  }

  this.selectedReponses[questionId] = reponseId;
}
isSelected(questionId: number, reponseId: number): boolean {
  const current = this.selectedReponses[questionId];
  return Array.isArray(current) ? current.includes(reponseId) : current === reponseId;
}
isAnswered(question: Question): boolean {
  if (question.type === 'text') {
    return !!this.textReponses[question.id]?.trim();
  }
  const answer = this.selectedReponses[question.id];
  return Array.isArray(answer) ? answer.length > 0 : !!answer;
}

  get totalAnswered(): number {
    return this.questions.filter(q => this.isAnswered(q)).length;
  }

  get questionsBySection(): { titre: string; questions: { q: Question; index: number }[] }[] {
    const groups = new Map<string, { titre: string; questions: { q: Question; index: number }[] }>();

    this.questions.forEach((q, index) => {
      const key   = q.section ? String(q.section.id) : '__none__';
      const titre = q.section?.titre ?? 'Questions générales';

      if (!groups.has(key)) {
        groups.set(key, { titre, questions: [] });
      }
      groups.get(key)!.questions.push({ q, index });
    });

    return Array.from(groups.values());
  }

  // ── Accordion ──────────────────────────────────────────────
  toggleSection(titre: string): void {
    if (this.openSections.has(titre)) {
      this.openSections.delete(titre);
    } else {
      this.openSections.add(titre);
    }
  }

  isSectionOpen(titre: string): boolean {
    return this.openSections.has(titre);
  }

  // ── Soumission ─────────────────────────────────────────────
  submitQuiz(): void {
    if (this.submitting || !this.quiz) return;
    clearInterval(this.timerInterval);
    this.submitting = true;

const answers: any[] = this.questions.map(q => {
  if (q.type === 'text') {
    return { question_id: q.id, reponse_text: this.textReponses[q.id] ?? '' };
  }

  if (q.type === 'multiple_choice_multi') {
    return {
      question_id: q.id,
      reponse_ids: (this.selectedReponses[q.id] as number[]) ?? []
    };
  }

  return {
    question_id: q.id,
    reponse_id: (this.selectedReponses[q.id] as number) ?? null
  };
});

    this.formationsService.soumettreQuiz(this.quiz.id, answers).subscribe({
      next: (res: any) => {
        this.resultat   = res.result ?? res.resultat ?? res;
        this.submitted  = true;
        this.submitting = false;
        this.selected   = this.totalQuestions + 1;
      },
      error: (err: any) => {
        this.submitting = false;
        if (err?.status === 403) {
          this.error = err?.error?.message ?? 'Accès refusé.';
        } else {
          this.error = 'Erreur lors de la soumission du quiz.';
        }
      }
    });
  }

  // ── Helpers résultat ───────────────────────────────────────
  get estReussi(): boolean  { return this.resultat?.est_reussi ?? false; }
  get noteFinale(): number  { return this.resultat?.note ?? 0; }

  getNoteColor(): string {
    if (this.noteFinale >= 75) return '#10b981';
    if (this.noteFinale >= 50) return '#f59e0b';
    return '#ef4444';
  }

  getScoreDashOffset(): number {
    const circumference = 314;
    return circumference - (this.noteFinale / 100) * circumference;
  }

  retournerAuxQuiz(): void {
    this.router.navigate([routes.studentsQuiz]);
  }

  // ── Helpers affichage ──────────────────────────────────────
  getOptionLetter(index: number): string {
    return ['A', 'B', 'C', 'D', 'E'][index] ?? String(index + 1);
  }

  getTypeBadgeClass(type: string): string {
    const map: Record<string, string> = {
      multiple_choice: 'qq-type-badge--mcq',
      true_false:      'qq-type-badge--tf',
      text:            'qq-type-badge--text',
    };
    return map[type] ?? '';
  }

  getTypeIcon(type: string): string {
    const map: Record<string, string> = {
      multiple_choice: 'isax-task-square',
      true_false:      'isax-toggle-off-circle',
      text:            'isax-edit-2',
    };
    return map[type] ?? 'isax-task-square';
  }

  getTypeLabel(type: string): string {
    const map: Record<string, string> = {
      multiple_choice: 'Choix unique',
      true_false:      'Vrai / Faux',
      text:            'Réponse libre',
    };
    return map[type] ?? type;
  }
}
