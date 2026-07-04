import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SondageService, QuestionSondage } from '../../shared/service/sondage/sondage.service';

type Etat = 'chargement' | 'formulaire' | 'deja_repondu' | 'succes' | 'erreur' | 'inactif';

@Component({
  selector: 'app-sondage-public',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sondage-public.component.html',
  styleUrl: './sondage-public.component.scss',
})
export class SondagePublicComponent implements OnInit {
  etat: Etat = 'chargement';
  token = '';

  sondage: any = null;
  questions: QuestionSondage[] = [];
  reponses: Record<string, any> = {};
  messageFin = '';
  erreurMessage = '';
  soumettre_loading = false;

  // Pour les questions checkbox (tableau de valeurs)
  reponsesCheckbox: Record<string, string[]> = {};

  constructor(
    private route: ActivatedRoute,
    private sondageService: SondageService
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token') ?? '';
    if (!this.token) { this.etat = 'erreur'; return; }
    this.chargerSondage();
  }

  chargerSondage(): void {
    this.etat = 'chargement';
    this.sondageService.getSondagePublic(this.token).subscribe({
      next: (res) => {
        if (res.deja_repondu) { this.etat = 'deja_repondu'; return; }
        this.sondage   = res.sondage;
        this.questions = res.sondage.questions ?? [];
        // Initialiser les valeurs par défaut
        this.questions.forEach(q => {
          if (q.type === 'echelle' || q.type === 'notation') {
            this.reponses[q.id!] = null;
          } else if (q.type === 'checkbox') {
            this.reponsesCheckbox[q.id!] = [];
          } else {
            this.reponses[q.id!] = '';
          }
        });
        this.etat = 'formulaire';
      },
      error: (err) => {
        if (err.status === 409) { this.etat = 'deja_repondu'; }
        else if (err.status === 410) { this.etat = 'inactif'; }
        else { this.etat = 'erreur'; this.erreurMessage = err.error?.message ?? 'Lien invalide ou expiré.'; }
      },
    });
  }

  toggleCheckbox(questionId: number, option: string): void {
    const arr = this.reponsesCheckbox[questionId] ?? [];
    const idx = arr.indexOf(option);
    if (idx === -1) arr.push(option);
    else arr.splice(idx, 1);
    this.reponsesCheckbox[questionId] = arr;
  }

  isChecked(questionId: number, option: string): boolean {
    return (this.reponsesCheckbox[questionId] ?? []).includes(option);
  }

  setNotation(questionId: number, val: number): void {
    this.reponses[questionId] = val;
  }

  getEtoiles(max: number): number[] {
    return Array.from({ length: max ?? 5 }, (_, i) => i + 1);
  }

  soumettre(): void {
    // Valider les obligatoires
    for (const q of this.questions) {
      if (!q.est_obligatoire) continue;
      const val = q.type === 'checkbox' ? this.reponsesCheckbox[q.id!] : this.reponses[q.id!];
      if (val === null || val === undefined || val === '' || (Array.isArray(val) && val.length === 0)) {
        this.erreurMessage = `La question "${q.question}" est obligatoire.`;
        this.scrollToTop();
        return;
      }
    }

    // Fusionner reponses + checkboxes en un seul objet
    const payload: Record<string, any> = { ...this.reponses };
    this.questions.filter(q => q.type === 'checkbox').forEach(q => {
      payload[q.id!] = this.reponsesCheckbox[q.id!];
    });

    this.soumettre_loading = true;
    this.erreurMessage     = '';

    this.sondageService.soumettreReponsePublique(this.token, payload).subscribe({
      next: (res) => {
        this.messageFin       = res.message_fin ?? 'Merci pour votre réponse !';
        this.soumettre_loading = false;
        this.etat             = 'succes';
      },
      error: (err) => {
        this.soumettre_loading = false;
        if (err.status === 409) { this.etat = 'deja_repondu'; }
        else { this.erreurMessage = err.error?.message ?? 'Une erreur est survenue. Veuillez réessayer.'; }
      },
    });
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
