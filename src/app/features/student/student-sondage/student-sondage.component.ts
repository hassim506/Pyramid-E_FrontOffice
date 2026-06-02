import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SondageService, Sondage, QuestionSondage } from '../../../shared/service/sondage/sondage.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-student-sondage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-sondage.component.html',
  styleUrl: './student-sondage.component.scss',
})
export class StudentSondageComponent implements OnInit {

  public routes = routes;

  sondage: Sondage | null = null;
  loading = true;
  error = '';
  submitted = false;
  submitting = false;
  submitError = '';

  // Step-by-step navigation
  currentStep = 0;
  answers: Map<number, { reponse?: string; reponse_multiple?: string[]; reponse_numerique?: number }> = new Map();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sondageService: SondageService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) { this.error = 'Sondage introuvable'; this.loading = false; return; }
    this.sondageService.getSondage(id).subscribe({
      next: (res) => {
        this.sondage = res.sondage;
        this.loading = false;
      },
      error: () => { this.error = 'Impossible de charger le sondage.'; this.loading = false; },
    });
  }

  get questions(): QuestionSondage[] {
    return this.sondage?.questions ?? [];
  }

  get currentQuestion(): QuestionSondage | null {
    return this.questions[this.currentStep] ?? null;
  }

  get progress(): number {
    if (!this.questions.length) return 0;
    return Math.round(((this.currentStep + 1) / this.questions.length) * 100);
  }

  // Get/set current answer
  getAnswer(qId: number) { return this.answers.get(qId); }

  setTextAnswer(qId: number, value: string): void {
    this.answers.set(qId, { reponse: value });
  }

  setNumericAnswer(qId: number, value: number): void {
    this.answers.set(qId, { reponse_numerique: value });
  }

  isChoiceSelected(qId: number, option: string): boolean {
    const ans = this.answers.get(qId);
    return ans?.reponse_multiple?.includes(option) ?? false;
  }

  toggleChoice(qId: number, option: string): void {
    const ans = this.answers.get(qId);
    const current = ans?.reponse_multiple ?? [];
    if (current.includes(option)) {
      this.answers.set(qId, { reponse_multiple: current.filter(o => o !== option) });
    } else {
      this.answers.set(qId, { reponse_multiple: [...current, option] });
    }
  }

  setRadioAnswer(qId: number, option: string): void {
    this.answers.set(qId, { reponse: option });
  }

  isRequired(q: QuestionSondage): boolean { return q.est_obligatoire ?? false; }

  canGoNext(): boolean {
    const q = this.currentQuestion;
    if (!q) return false;
    if (!this.isRequired(q)) return true;
    const ans = this.answers.get(q.id!);
    if (!ans) return false;
    if (ans.reponse !== undefined && ans.reponse !== '') return true;
    if (ans.reponse_numerique !== undefined) return true;
    if (ans.reponse_multiple && ans.reponse_multiple.length > 0) return true;
    return false;
  }

  goNext(): void {
    if (!this.canGoNext()) return;
    if (this.currentStep < this.questions.length - 1) {
      this.currentStep++;
    }
  }

  goPrev(): void {
    if (this.currentStep > 0) this.currentStep--;
  }

  isLastStep(): boolean { return this.currentStep === this.questions.length - 1; }

  submit(): void {
    if (!this.canGoNext() && this.isRequired(this.currentQuestion!)) return;
    if (!this.sondage) return;
    this.submitting = true;
    this.submitError = '';

    const reponses = Array.from(this.answers.entries()).map(([question_id, ans]) => ({
      question_id,
      ...ans,
    }));

    this.sondageService.respondSondage(this.sondage.id, reponses).subscribe({
      next: () => { this.submitting = false; this.submitted = true; },
      error: (err) => {
        this.submitting = false;
        this.submitError = err?.error?.message ?? 'Erreur lors de l\'envoi.';
      },
    });
  }

  goToDashboard(): void {
    const state = history.state;
    if (state?.fromPage === 'parcours' && state?.parcoursId) {
      this.router.navigate(['/student/parcours-assigne', state.parcoursId]);
    } else {
      this.router.navigate(['/student/mes-cours']);
    }
  }

  needsOptions(type: string): boolean {
    return ['radio', 'checkbox', 'select'].includes(type);
  }

  isNumeric(type: string): boolean {
    return ['echelle', 'notation', 'numero'].includes(type);
  }

  isTextual(type: string): boolean {
    return ['text', 'email', 'date'].includes(type);
  }

  isTextarea(type: string): boolean { return type === 'textarea'; }

  echelleRange(q: QuestionSondage): number[] {
    const min = q.valeur_min ?? 1;
    const max = q.valeur_max ?? 5;
    const result: number[] = [];
    for (let i = min; i <= max; i++) result.push(i);
    return result;
  }

  getNumericAnswer(qId: number): number | undefined {
    return this.answers.get(qId)?.reponse_numerique;
  }

  getTextAnswer(qId: number): string {
    return this.answers.get(qId)?.reponse ?? '';
  }
}
