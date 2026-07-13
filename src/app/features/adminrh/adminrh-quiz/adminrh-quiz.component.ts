import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DatePickerModule } from 'primeng/datepicker';
import { Quiz, QuizService } from '../../../shared/service/quiz/quiz.service';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { HasPermissionDirective } from '../../../directive/has-permission-directive.directive';
import { UserService } from '../../../shared/service/user/user.service';


declare var bootstrap: any;

@Component({
  selector: 'app-adminrh-quiz',
  standalone: true,
  templateUrl: './adminrh-quiz.component.html',
  styleUrls: ['./adminrh-quiz.component.scss'],
  imports: [CommonModule, MatSelectModule, RouterLink, FormsModule, ReactiveFormsModule, DatePickerModule, HasPermissionDirective]
})
export class AdminrhQuizComponent implements OnInit, OnDestroy {
  quizzes: Quiz[] = [];
  filteredQuizzes: Quiz[] = [];
  loading = false;
  error = '';
  saving = false;
  editError = '';

  currentPage = 1;
  readonly itemsPerPage = 10;

  selectedQuiz: Quiz | null = null;
  editForm: FormGroup | null = null;

  createForm: FormGroup | null = null;
  createError = '';
formateursMap: Record<number, any> = {};

  private detailsModal: any;
  private editModal: any;
  private createModal: any;
  private subscription = new Subscription();

  constructor(private quizService: QuizService, private fb: FormBuilder,private userService: UserService) {}

  ngOnInit(): void {
    this.loadQuizzes();
    setTimeout(() => {
      this.detailsModal = new bootstrap.Modal(document.getElementById('arh_quiz_details_modal'));
      this.editModal    = new bootstrap.Modal(document.getElementById('arh_quiz_edit_modal'));
      this.createModal  = new bootstrap.Modal(document.getElementById('arh_quiz_create_modal'));
    }, 100);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadQuizzes(): void {
    this.loading = true;
    this.error = '';
    const sub = this.quizService.getQuizzes().subscribe({
      next: (quizzes) => {
        this.quizzes = quizzes.sort((a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        console.log('Premier quiz (champs disponibles):', JSON.stringify(quizzes[0] ?? {}));
        this.filteredQuizzes = [...this.quizzes];
        this.currentPage = 1;
        this.loading = false;
        this.loadFormateursForQuizzes();
      },
      error: (err: any) => { this.error = httpErrorMessage(err, 'Impossible de charger les quiz.'); this.loading = false; console.error(err); }
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

  openCreateModal(): void {
    this.createError = '';
    this.createForm = this.fb.group({
      titre:          ['', [Validators.required, Validators.minLength(3)]],
      description:    [''],
      duree_minutes:  [null],
      score_minimum:  [null],
      tentatives_max: [null],
      is_active:      [true],
    });
    this.createModal?.show();
  }

  saveCreate(): void {
    if (!this.createForm || this.createForm.invalid) return;
    this.saving = true;
    this.createError = '';
    const sub = this.quizService.createQuiz(this.createForm.value).subscribe({
      next: (created) => {
        this.quizzes = [created, ...this.quizzes];
        this.saving = false;
        this.createModal?.hide();
      },
      error: (err) => {
        this.createError = err?.error?.message || 'Erreur lors de la création';
        this.saving = false;
      }
    });
    this.subscription.add(sub);
  }

  saveEdit(): void {
    if (!this.editForm || this.editForm.invalid || !this.selectedQuiz) return;
    this.saving = true;
    this.editError = '';
    const sub = this.quizService.updateQuiz(this.selectedQuiz.id, this.editForm.value).subscribe({
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
        next: ()     => { this.quizzes = this.quizzes.filter(q => q.id !== quiz.id); },
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
private loadFormateursForQuizzes(): void {
  const ids = new Set<number>();
  this.quizzes.forEach(q => {
    const id = q.formation?.formateur_id
      || q.formation?.formateur?.id
      || (q as any).formateur_id
      || (q as any).formateur?.id
      || (q as any).createur_id
      || (q as any).user_id;
    if (id) ids.add(id);
  });
  console.log('adminrh quiz formateur ids:', Array.from(ids));
  if (ids.size === 0) return;

  this.userService.getFormateurs().subscribe({
    next: (res: any) => {
      console.log('adminrh formateurs API response:', res);
      const raw = res.formateurs
        || res.users
        || res.data
        || res.data?.data
        || (Array.isArray(res) ? res : []);
      const list = Array.isArray(raw) ? raw : [];
      if (list.length === 0) {
        this.loadFormateursFromUsers(ids);
        return;
      }
      list.forEach((u: any) => {
        const userId = u?.id || u?.user_id;
        if (userId) this.formateursMap[userId] = u;
      });
      console.log('adminrh formateurs map:', this.formateursMap);
    },
    error: () => {
      console.log('adminrh getFormateurs failed, fallback to getUser per id');
      this.loadFormateursFromUsers(ids);
    }
  });
}

private loadFormateursFromUsers(ids: Set<number>): void {
  ids.forEach(id => {
    this.userService.getUser(id).subscribe({
      next: (res: any) => {
        console.log(`adminrh getUser(${id}) response:`, res);
        const user = res.user || res.data || res.data?.user || res || null;
        const userId = user?.id || user?.user_id;
        if (userId) this.formateursMap[userId] = user;
      },
      error: () => {
        console.log(`adminrh getUser(${id}) failed`);
      }
    });
  });
}
  getStatusClass(quiz: Quiz): string { return quiz.is_active ? 'badge-success' : 'badge-secondary'; }
  getStatusText(quiz: Quiz):  string { return quiz.is_active ? 'Actif' : 'Inactif'; }

  getFormationTitre(quiz: Quiz): string {
    return quiz.formation?.titre || quiz.formation?.nom || `Formation #${quiz.formation_id}`;
  }

getCreateurNom(quiz: Quiz): string {
  const fid = quiz.formation?.formateur_id || (quiz as any).formateur_id;
  if (fid && this.formateursMap[fid]) {
    const f = this.formateursMap[fid];
    return `${f.prenom ?? f.first_name ?? ''} ${f.nom ?? f.last_name ?? ''}`.trim();
  }
  // fallback existant
  const f = quiz.formation?.formateur || (quiz as any).formateur || (quiz as any).user;
  if (f) return `${f.prenom ?? f.name ?? ''} ${f.nom ?? ''}`.trim() || '—';
  return fid ? `Formateur #${fid}` : '—';
}

  get totalPages(): number { return Math.max(1, Math.ceil(this.filteredQuizzes.length / this.itemsPerPage)); }

  get paginatedQuizzes(): Quiz[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredQuizzes.slice(start, start + this.itemsPerPage);
  }

  get pageEnd(): number { return Math.min(this.currentPage * this.itemsPerPage, this.filteredQuizzes.length); }

  get pageNumbers(): number[] {
    const total = this.totalPages;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const p = this.currentPage;
    const pages: number[] = [1];
    if (p > 3) pages.push(-1);
    for (let i = Math.max(2, p - 1); i <= Math.min(total - 1, p + 1); i++) pages.push(i);
    if (p < total - 2) pages.push(-1);
    pages.push(total);
    return pages;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }
}
