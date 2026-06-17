import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { routes } from '../../../shared/service/routes/routes';

interface Quiz {
  id:               number;
  titre:            string;
  description:      string | null;
  formation_id:     number;
  formation_titre?: string;
  duree_minutes:    number | null;
  score_minimum:    number;
  is_active:        boolean;
  nombre_questions: number;
  max_tentatives:   number;  // ← vient de l'API (champ sur la table quizzes)
  dernier_resultat?: {
    note:              number;
    est_reussi:        boolean;
    nombre_tentatives: number;
  } | null;
}

@Component({
  selector: 'app-student-quiz',
  standalone: true,
  templateUrl: './student-quiz.component.html',
  styleUrl: './student-quiz.component.scss',
  imports: [CommonModule, RouterLink, FormsModule]
})
export class StudentQuizComponent implements OnInit {

  public routes = routes;

  // ── Données ────────────────────────────────────────────────
  allQuizzes:       Quiz[] = [];
  filteredQuizzes:  Quiz[] = [];
  displayedQuizzes: Quiz[] = [];

  loading = true;
  error   = '';

  // ── Filtres ────────────────────────────────────────────────
  searchTerm      = '';
  selectedFiltre: 'tous' | 'reussi' | 'echoue' | 'non_tente' = 'tous';

  // ── Pagination ─────────────────────────────────────────────
  currentPage = 1;
  pageSize    = 6;
  totalPages  = 0;

  constructor(
    private formationsService: FormationService,
    private router:            Router
  ) {}

  ngOnInit(): void {
    this.loadQuizzes();
  }

  // ── Chargement ─────────────────────────────────────────────
  loadQuizzes(): void {
    this.loading = true;
    this.error   = '';

    Promise.all([
      this.formationsService.getTousLesQuizzes().toPromise(),
      this.formationsService.getTousMesResultatsQuiz().toPromise(),
    ]).then(([quizRes, resultRes]: any[]) => {
      const quizzes   = quizRes?.quizzes   ?? quizRes   ?? [];
      const resultats = resultRes?.results ?? resultRes ?? [];

      // map quizId → dernier résultat
      const resultMap: Record<number, any> = {};
      for (const r of resultats) {
        if (!resultMap[r.quiz_id] || r.id > resultMap[r.quiz_id].id) {
          resultMap[r.quiz_id] = r;
        }
      }

      this.allQuizzes = quizzes
        .filter((q: any) => q.is_active)
        .map((q: any) => ({
          id:               q.id,
          titre:            q.titre,
          description:      q.description ?? null,
          formation_id:     q.formation_id,
          formation_titre:  q.formation?.titre ?? null,
          duree_minutes:    q.duree_minutes ?? null,
          score_minimum:    q.score_minimum ?? 50,
          is_active:        q.is_active,
          nombre_questions: q.questions_count ?? q.questions?.length ?? 0,
          max_tentatives:   q.max_tentatives ?? 3,  // champ API, fallback 3
          dernier_resultat: resultMap[q.id]
            ? {
                note:              resultMap[q.id].note,
                est_reussi:        resultMap[q.id].est_reussi,
                nombre_tentatives: resultMap[q.id].nombre_tentatives ?? 1,
              }
            : null,
        }));

      this.applyFilters();
      this.loading = false;
    }).catch(() => {
      this.error   = 'Erreur lors du chargement des quiz.';
      this.loading = false;
    });
  }

  // ── Filtres ────────────────────────────────────────────────
  applyFilters(): void {
    let result = [...this.allQuizzes];

    if (this.searchTerm.trim()) {
      const s = this.searchTerm.toLowerCase();
      result = result.filter(q =>
        q.titre?.toLowerCase().includes(s) ||
        q.formation_titre?.toLowerCase().includes(s)
      );
    }

    switch (this.selectedFiltre) {
      case 'reussi':
        result = result.filter(q => q.dernier_resultat?.est_reussi === true);
        break;
      case 'echoue':
        result = result.filter(q => q.dernier_resultat?.est_reussi === false);
        break;
      case 'non_tente':
        result = result.filter(q => !q.dernier_resultat);
        break;
    }

    this.filteredQuizzes = result;
    this.totalPages      = Math.ceil(result.length / this.pageSize);
    this.currentPage     = 1;
    this.paginate();
  }

  paginate(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedQuizzes = this.filteredQuizzes.slice(start, start + this.pageSize);
  }

  onSearchChange(): void      { this.applyFilters(); }
  setFiltre(f: any): void     { this.selectedFiltre = f; this.applyFilters(); }
  changePage(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.currentPage = p;
    this.paginate();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // ── Stats rapides ──────────────────────────────────────────
  get totalReussis():   number { return this.allQuizzes.filter(q => q.dernier_resultat?.est_reussi === true).length; }
  get totalEchoues():   number { return this.allQuizzes.filter(q => q.dernier_resultat?.est_reussi === false).length; }
  get totalEnAttente(): number { return this.allQuizzes.filter(q => !q.dernier_resultat).length; }

  // ── Tentatives ─────────────────────────────────────────────
  /** Nombre de tentatives déjà effectuées (0 si jamais tenté) */
  getTentativesUtilisees(quiz: Quiz): number {
    return quiz.dernier_resultat?.nombre_tentatives ?? 0;
  }

  /** Tableau d'indices [0, 1, 2, ...] pour *ngFor sur les pastilles */
  getPastillesArray(quiz: Quiz): number[] {
    return Array.from({ length: quiz.max_tentatives }, (_, i) => i);
  }

  /**
   * Vrai si toutes les tentatives sont épuisées ET le quiz n'est pas réussi.
   * Le backend bloque aussi la soumission dans ce cas.
   */
  isBloquer(quiz: Quiz): boolean {
    if (!quiz.dernier_resultat)           return false;
    if (quiz.dernier_resultat.est_reussi) return false;
    return quiz.dernier_resultat.nombre_tentatives >= quiz.max_tentatives;
  }

  /** Classe CSS de chaque pastille selon son index */
  getPastilleClass(quiz: Quiz, index: number): string {
    const used   = this.getTentativesUtilisees(quiz);
    const reussi = quiz.dernier_resultat?.est_reussi ?? false;

    if (index >= used)  return 'pastille--vide';
    if (reussi)         return 'pastille--reussi';
    if (this.isBloquer(quiz)) return 'pastille--bloque';
    return 'pastille--echoue';
  }

  // ── Navigation ─────────────────────────────────────────────
  commencerQuiz(quiz: Quiz): void {
    if (this.isBloquer(quiz)) return;
    this.router.navigate([routes.studentsQuizQuestion, quiz.id]);
  }

  // ── Helpers badge / CTA ────────────────────────────────────
  getStatutClass(quiz: Quiz): string {
    if (!quiz.dernier_resultat)           return 'quiz-badge--nouveau';
    if (quiz.dernier_resultat.est_reussi) return 'quiz-badge--reussi';
    if (this.isBloquer(quiz))             return 'quiz-badge--bloque';
    return 'quiz-badge--echoue';
  }

  getStatutLabel(quiz: Quiz): string {
    if (!quiz.dernier_resultat)           return 'En attente';
    if (quiz.dernier_resultat.est_reussi) return 'Réussi';
    if (this.isBloquer(quiz))             return 'Bloqué';
    return 'Échoué';
  }

  getCTALabel(quiz: Quiz): string {
    if (!quiz.dernier_resultat)           return 'Commencer';
    if (quiz.dernier_resultat.est_reussi) return 'Revoir';
    if (this.isBloquer(quiz))             return 'Tentatives épuisées';
    return 'Reprendre';
  }

  getCTAIcon(quiz: Quiz): string {
    if (!quiz.dernier_resultat)           return 'isax-play-circle';
    if (quiz.dernier_resultat.est_reussi) return 'isax-eye';
    if (this.isBloquer(quiz))             return 'isax-lock';
    return 'isax-refresh';
  }

  getNoteColor(note: number): string {
    if (note >= 75) return '#10b981';
    if (note >= 50) return '#f59e0b';
    return '#ef4444';
  }
}