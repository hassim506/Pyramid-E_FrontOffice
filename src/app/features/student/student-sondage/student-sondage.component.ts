import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SondageService, Sondage, QuestionSondage } from '../../../shared/service/sondage/sondage.service';

@Component({
  selector: 'app-student-sondage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-sondage.component.html',
  styleUrl: './student-sondage.component.scss',
})
export class StudentSondageComponent implements OnInit {

  sondage: Sondage | null = null;
  loading = true;
  error = '';
  submitted = false;
  submitting = false;
  submitError = '';
  submitSuccess = '';

  currentStep = 0;
  reponses: Record<number, any> = {};

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

  get questions(): QuestionSondage[] { return this.sondage?.questions ?? []; }
  get currentQuestion(): QuestionSondage | null { return this.questions[this.currentStep] ?? null; }
  get isLast(): boolean { return this.currentStep === this.questions.length - 1; }
  get progress(): number { return this.questions.length ? Math.round(((this.currentStep + 1) / this.questions.length) * 100) : 0; }

  suivant(): void { if (this.currentStep < this.questions.length - 1) this.currentStep++; }
  precedent(): void { if (this.currentStep > 0) this.currentStep--; }

  toggleCheckbox(qId: number, val: string): void {
    const arr: string[] = this.reponses[qId] ?? [];
    const idx = arr.indexOf(val);
    if (idx === -1) arr.push(val);
    else arr.splice(idx, 1);
    this.reponses[qId] = [...arr];
  }

  isChecked(qId: number, val: string): boolean {
    return (this.reponses[qId] ?? []).includes(val);
  }

  isEchelle(type: string): boolean { return ['echelle', 'notation'].includes(type); }

  echelleValues(q: QuestionSondage): number[] {
    const min = q.valeur_min ?? 1;
    const max = q.valeur_max ?? (q.type === 'notation' ? 5 : 10);
    return Array.from({ length: max - min + 1 }, (_, i) => min + i);
  }

  soumettre(): void {
    if (!this.sondage) return;
    this.submitting = true;
    this.submitError = '';

    const reponses = Object.entries(this.reponses).map(([qId, val]) => {
      const q = this.questions.find(q => q.id === Number(qId));
      const isNum = q && ['echelle', 'notation', 'numero'].includes(q.type);
      const isMulti = q && q.type === 'checkbox';
      return {
        question_id: Number(qId),
        reponse: !isMulti && !isNum ? String(val ?? '') : undefined,
        reponse_multiple: isMulti ? (val as string[]) : undefined,
        reponse_numerique: isNum ? Number(val) : undefined,
      };
    });

    this.sondageService.respondSondage(this.sondage.id, reponses).subscribe({
      next: (res: any) => {
        this.submitting = false;
        this.submitSuccess = res.message ?? 'Merci pour votre réponse !';
        this.submitted = true;
      },
      error: (err: any) => {
        this.submitting = false;
        this.submitError = err?.error?.message ?? 'Une erreur est survenue.';
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/student/student-mes-sondages']);
  }
}
