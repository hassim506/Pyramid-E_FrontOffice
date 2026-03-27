import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Quiz, QuizService } from '../../../shared/service/quiz/quiz.service';

@Component({
  selector: 'app-superadmin-quiz',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './superadmin-quiz.component.html',
  styleUrls: ['./superadmin-quiz.component.scss']
})
export class SuperadminQuizComponent implements OnInit, OnDestroy {
  quizzes: Quiz[] = [];
  loading = false;
  error = '';
  private subscription = new Subscription();

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.loadQuizzes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadQuizzes(): void {
    this.loading = true;
    this.error = '';

    const sub = this.quizService.getQuizzes().subscribe({
      next: (quizzes) => {
        this.quizzes = quizzes;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des quiz';
        this.loading = false;
        console.error(err);
      }
    });

    this.subscription.add(sub);
  }

  deleteQuiz(quiz: Quiz): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le quiz "${quiz.titre}" ?`)) {
      const sub = this.quizService.deleteQuiz(quiz.id).subscribe({
        next: () => {
          this.quizzes = this.quizzes.filter(q => q.id !== quiz.id);
        },
        error: (err) => {
          this.error = 'Erreur lors de la suppression';
          console.error(err);
        }
      });

      this.subscription.add(sub);
    }
  }

  getStatusClass(quiz: Quiz): string {
    return quiz.is_active ? 'badge-success' : 'badge-secondary';
  }

  getStatusText(quiz: Quiz): string {
    return quiz.is_active ? 'Actif' : 'Inactif';
  }
}