import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SondageService, Sondage, QuestionSondage } from '../../../shared/service/sondage/sondage.service';

type Vue = 'liste' | 'repondre';

@Component({
  selector: 'app-adminrh-mes-sondages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminrh-mes-sondages.component.html',
  styleUrl: './adminrh-mes-sondages.component.scss',
})
export class AdminrhMesSondagesComponent implements OnInit {
  vue: Vue = 'liste';
  sondages: Sondage[] = [];
  sondagesRepondus: Sondage[] = [];
  loading = true;
  error = '';
  showHistorique = false;

  selected: Sondage | null = null;
  reponses: Record<number, any> = {};
  submitting = false;
  submitSuccess = '';
  submitError = '';
  currentStep = 0;

  constructor(private sondageService: SondageService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.sondageService.getMesSondagesRecus().subscribe({
      next: (res: any) => {
        const all: Sondage[] = res.sondages ?? [];
        this.sondages = all.filter((s: any) => !s.deja_repondu);
        this.sondagesRepondus = all.filter((s: any) => s.deja_repondu);
        this.loading = false;
      },
      error: () => { this.error = 'Impossible de charger les enquêtes.'; this.loading = false; },
    });
  }

  get aCompleter(): number { return this.sondages.length; }
  get repondus(): number { return this.sondagesRepondus.length; }
  get clotures(): number { return 0; }

  ouvrir(s: Sondage): void {
    this.selected = s;
    this.reponses = {};
    this.currentStep = 0;
    this.submitSuccess = '';
    this.submitError = '';
    this.vue = 'repondre';
  }

  retour(): void { this.vue = 'liste'; this.selected = null; }

  get questions(): QuestionSondage[] { return this.selected?.questions ?? []; }
  get currentQuestion(): QuestionSondage | null { return this.questions[this.currentStep] ?? null; }
  get isLast(): boolean { return this.currentStep === this.questions.length - 1; }
  get progress(): number { return this.questions.length ? Math.round(((this.currentStep + 1) / this.questions.length) * 100) : 0; }

  suivant(): void { if (this.currentStep < this.questions.length - 1) this.currentStep++; }
  precedent(): void { if (this.currentStep > 0) this.currentStep--; }

  toggleCheckbox(qId: number, val: string): void {
    const arr: string[] = this.reponses[qId] ?? [];
    const idx = arr.indexOf(val);
    if (idx === -1) arr.push(val); else arr.splice(idx, 1);
    this.reponses[qId] = [...arr];
  }

  isChecked(qId: number, val: string): boolean { return (this.reponses[qId] ?? []).includes(val); }

  soumettre(): void {
    if (!this.selected) return;
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
    this.sondageService.respondSondage(this.selected.id, reponses).subscribe({
      next: (res: any) => { this.submitting = false; this.submitSuccess = res.message ?? 'Merci pour votre réponse !'; },
      error: (err: any) => { this.submitting = false; this.submitError = err?.error?.message ?? 'Une erreur est survenue.'; },
    });
  }

  typeColor(type: string): string { return this.sondageService.getTypeColor(type); }
  typeLabel(type: string): string { return this.sondageService.getTypeLabel(type); }
  isEchelle(type: string): boolean { return ['echelle', 'notation'].includes(type); }
  echelleValues(q: QuestionSondage): number[] {
    const min = q.valeur_min ?? 1;
    const max = q.valeur_max ?? (q.type === 'notation' ? 5 : 10);
    return Array.from({ length: max - min + 1 }, (_, i) => min + i);
  }
}
