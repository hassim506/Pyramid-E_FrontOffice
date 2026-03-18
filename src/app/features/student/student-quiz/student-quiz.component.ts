  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterLink, Router } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  import { FormationsService } from '../../../shared/service/Formationsss/formations.service';
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
    // Résultat précédent si disponible
    dernier_resultat?: {
      note:             number;
      est_reussi:       boolean;
      nombre_tentatives:number;
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
    allQuizzes:      Quiz[] = [];
    filteredQuizzes: Quiz[] = [];
    displayedQuizzes:Quiz[] = [];

    loading = true;
    error   = '';

    // ── Filtres ────────────────────────────────────────────────
    searchTerm     = '';
    selectedFiltre: 'tous' | 'reussi' | 'echoue' | 'non_tente' = 'tous';

    // ── Pagination ─────────────────────────────────────────────
    currentPage = 1;
    pageSize    = 6;
    totalPages  = 0;

    // ── Toast ──────────────────────────────────────────────────
    toast = { visible: false, type: 'success', message: '' };
    private toastTimer: any;

    constructor(
      private formationsService: FormationsService,
      private router:            Router
    ) {}

    ngOnInit(): void {
      this.loadQuizzes();
    }

    // ── Chargement ─────────────────────────────────────────────
    loadQuizzes(): void {
      this.loading = true;
      this.error   = '';

      // Charger tous les quiz + mes résultats en parallèle
      Promise.all([
        this.formationsService.getTousLesQuizzes().toPromise(),
        this.formationsService.getTousMesResultatsQuiz().toPromise(),
      ]).then(([quizRes, resultRes]: any[]) => {
        const quizzes  = quizRes?.quizzes  ?? quizRes  ?? [];
        const resultats = resultRes?.results ?? resultRes ?? [];

        // Construire un map quizId → dernier résultat
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

    onSearchChange(): void        { this.applyFilters(); }
    setFiltre(f: any): void       { this.selectedFiltre = f; this.applyFilters(); }
    changePage(p: number): void   {
      if (p < 1 || p > this.totalPages) return;
      this.currentPage = p;
      this.paginate();
    }

    get pages(): number[] {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    // ── Stats rapides ──────────────────────────────────────────
    get totalReussis():   number { return this.allQuizzes.filter(q => q.dernier_resultat?.est_reussi).length; }
    get totalEchoues():   number { return this.allQuizzes.filter(q => q.dernier_resultat?.est_reussi === false).length; }
    get totalNonTentes(): number { return this.allQuizzes.filter(q => !q.dernier_resultat).length; }

    // ── Navigation ─────────────────────────────────────────────
    commencerQuiz(quizId: number): void {
      this.router.navigate([routes.studentsQuizQuestion, quizId]);
    }

    // ── Helpers ────────────────────────────────────────────────
    getStatutClass(quiz: Quiz): string {
      if (!quiz.dernier_resultat)          return 'quiz-badge--nouveau';
      if (quiz.dernier_resultat.est_reussi) return 'quiz-badge--reussi';
      return 'quiz-badge--echoue';
    }

    getStatutLabel(quiz: Quiz): string {
      if (!quiz.dernier_resultat)          return 'Nouveau';
      if (quiz.dernier_resultat.est_reussi) return 'Réussi';
      return 'À reprendre';
    }

    getCTALabel(quiz: Quiz): string {
      if (!quiz.dernier_resultat) return 'Commencer';
      if (quiz.dernier_resultat.est_reussi) return 'Revoir';
      return 'Reprendre';
    }

    getCTAIcon(quiz: Quiz): string {
      if (!quiz.dernier_resultat) return 'isax-play-circle';
      if (quiz.dernier_resultat.est_reussi) return 'isax-eye';
      return 'isax-refresh';
    }

    getNoteColor(note: number): string {
      if (note >= 75) return '#10b981';
      if (note >= 50) return '#f59e0b';
      return '#ef4444';
    }
  }