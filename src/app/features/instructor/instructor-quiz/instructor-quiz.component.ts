import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quiz, QuizService } from '../../../shared/service/quiz/quiz.service';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

declare var bootstrap: any;

@Component({
  selector: 'app-instructor-quiz',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, DatePickerModule, CustomPaginationComponent],
  templateUrl: './instructor-quiz.component.html',
  styleUrls: ['./instructor-quiz.component.scss']
})
export class InstructorQuizComponent implements OnInit, OnDestroy {
  quizzes: Quiz[] = [];
  loading = false;
  error = '';
  saving = false;
  editError = '';
  currentPage = 1;
  totalData = 0;
  itemsPerPage = 10;

  selectedQuiz: Quiz | null = null;
  editForm: FormGroup | null = null;

  private detailsModal: any;
  private editModal: any;
  private subscription = new Subscription();

  constructor(private quizService: QuizService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadQuizzes();
    setTimeout(() => {
      this.detailsModal = new bootstrap.Modal(document.getElementById('quiz_details_modal'));
      this.editModal    = new bootstrap.Modal(document.getElementById('quiz_edit_modal'));
    }, 100);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadQuizzes(): void {
    this.loading = true;
    this.error = '';
    const sub = this.quizService.getQuizzes().subscribe({
      next: (quizzes) => { this.quizzes = quizzes; this.loading = false; },
      error: (err)    => { this.error = 'Erreur lors du chargement des quiz'; this.loading = false; console.error(err); }
    });
    this.subscription.add(sub);
  }

  openDetailsModal(quiz: Quiz): void {
    this.selectedQuiz = quiz;
    this.detailsModal?.show();
  }

  openEditModal(quiz: Quiz): void {
    this.selectedQuiz = quiz;
    this.editError = '';
    this.editForm = this.fb.group({
      titre:          [quiz.titre,           [Validators.required, Validators.minLength(3)]],
      description:    [quiz.description      ?? ''],
      duree_minutes:  [quiz.duree_minutes    ?? null],
      score_minimum:  [quiz.score_minimum    ?? null],
      tentatives_max: [quiz.tentatives_max   ?? null],
      is_active:      [quiz.is_active]
    });
    this.editModal?.show();
  }

  saveEdit(): void {
    if (!this.editForm || this.editForm.invalid || !this.selectedQuiz) return;
    this.saving = true;
    this.editError = '';
    const payload: Partial<Quiz> = { ...this.editForm.value };
    const sub = this.quizService.updateQuiz(this.selectedQuiz.id, payload).subscribe({
      next: (updated) => {
        const idx = this.quizzes.findIndex(q => q.id === this.selectedQuiz!.id);
        if (idx !== -1) this.quizzes[idx] = { ...this.quizzes[idx], ...updated };
        this.saving = false;
        this.editModal?.hide();
      },
      error: (err) => {
        this.editError = 'Erreur lors de la sauvegarde';
        this.saving = false;
        console.error(err);
      }
    });
    this.subscription.add(sub);
  }

  deleteQuiz(quiz: Quiz): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le quiz "${quiz.titre}" ?`)) {
      const sub = this.quizService.deleteQuiz(quiz.id).subscribe({
        next: ()    => { this.quizzes = this.quizzes.filter(q => q.id !== quiz.id); },
        error: (err) => { this.error = 'Erreur lors de la suppression'; console.error(err); }
      });
      this.subscription.add(sub);
    }
  }

  archiveQuiz(quiz: Quiz): void {
    if (!confirm(`Archiver le quiz "${quiz.titre}" ?`)) return;
    const sub = this.quizService.deleteQuiz(quiz.id).subscribe({
      next: ()     => { this.quizzes = this.quizzes.filter(q => q.id !== quiz.id); },
      error: (err) => { this.error = 'Erreur lors de l\'archivage'; console.error(err); }
    });
    this.subscription.add(sub);
  }

  getStatusClass(quiz: Quiz): string { return quiz.is_active ? 'badge-success' : 'badge-secondary'; }
  getStatusText(quiz: Quiz):  string { return quiz.is_active ? 'Actif' : 'Inactif'; }
}
