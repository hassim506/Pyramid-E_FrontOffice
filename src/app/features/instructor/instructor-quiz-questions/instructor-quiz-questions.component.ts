import { routes } from '../../../shared/service/routes/routes';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { QuestionQuizService, Question, QuestionAnswer, QuestionResponse } from '../../../shared/service/quiz/question-quiz.service';

declare var bootstrap: any;

@Component({
  selector: 'app-instructor-quiz-questions',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    DragDropModule,
    RouterLink
  ],
  templateUrl: './instructor-quiz-questions.component.html',
  styleUrl: './instructor-quiz-questions.component.scss'
})
export class InstructorQuizQuestionsComponent implements OnInit {
  routes = routes;
  
  // Propriétés pour la gestion des questions
  quizId!: number;
  quiz: any;
  questions: Question[] = [];
  loading = false;
  editingQuestion: Question | null = null;
  questionForm: FormGroup;

  // Modales
  addQuestionModal: any;
  editQuestionModal: any;
  deleteModal: any;

  displayedColumns = ['ordre', 'question_text', 'type', 'points', 'actions'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionQuizService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.questionForm = this.createQuestionForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = +params['quizId'];
      this.loadQuestions();
    });

    // Initialiser les modales Bootstrap après le rendu
    setTimeout(() => {
      this.addQuestionModal = new bootstrap.Modal(document.getElementById('add_question'));
      this.editQuestionModal = new bootstrap.Modal(document.getElementById('edit_question'));
      this.deleteModal = new bootstrap.Modal(document.getElementById('delete_modal'));
    }, 100);
  }

  createQuestionForm(): FormGroup {
    return this.fb.group({
      question_text: ['', Validators.required],
      type: ['multiple_choice', Validators.required],
      points: [1, [Validators.required, Validators.min(1)]],
      ordre: [1, [Validators.required, Validators.min(1)]],
      reponses: this.fb.array([])
    });
  }

  get reponsesArray(): FormArray {
    return this.questionForm.get('reponses') as FormArray;
  }

  loadQuestions(): void {
    this.loading = true;
    this.questionService.getQuestions(this.quizId).subscribe({
      next: (response: QuestionResponse) => {
        this.quiz = response.quiz;
        this.questions = response.questions;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des questions:', error);
        this.loading = false;
      }
    });
  }

  showAddQuestionModal(): void {
    this.editingQuestion = null;
    this.questionForm.reset();
    this.questionForm.patchValue({
      type: 'multiple_choice',
      points: 1,
      ordre: this.questions.length + 1
    });
    this.setupAnswersForType('multiple_choice');
    this.addQuestionModal.show();
  }

  showEditQuestionModal(question: Question): void {
    this.editingQuestion = question;
    
    // Remplir le formulaire avec les données existantes
    this.questionForm.patchValue({
      question_text: question.question_text,
      type: question.type,
      points: question.points,
      ordre: question.ordre
    });

    // Vider le FormArray des réponses
    while (this.reponsesArray.length) {
      this.reponsesArray.removeAt(0);
    }

    // Ajouter les réponses existantes
    if (question.reponses) {
      question.reponses.forEach(reponse => {
        this.reponsesArray.push(this.fb.group({
          id: [reponse.id],
          reponse_text: [reponse.reponse_text, Validators.required],
          is_correct: [reponse.is_correct],
          ordre: [reponse.ordre]
        }));
      });
    }

    this.editQuestionModal.show();
  }

  onTypeChange(): void {
    const type = this.questionForm.get('type')?.value;
    if (type) {
      this.setupAnswersForType(type);
    }
  }

  setupAnswersForType(type: string): void {
    // Vider les réponses actuelles
    while (this.reponsesArray.length) {
      this.reponsesArray.removeAt(0);
    }

    if (type === 'multiple_choice') {
      // Ajouter 4 réponses par défaut pour les QCM
      for (let i = 0; i < 4; i++) {
        this.addAnswer();
      }
      // Marquer la première comme correcte
      if (this.reponsesArray.length > 0) {
        this.reponsesArray.at(0)?.get('is_correct')?.setValue(true);
      }
    } else if (type === 'true_false') {
      // Ajouter Vrai/Faux
      this.reponsesArray.push(this.fb.group({
        reponse_text: ['Vrai', Validators.required],
        is_correct: [true],
        ordre: [1]
      }));
      this.reponsesArray.push(this.fb.group({
        reponse_text: ['Faux', Validators.required],
        is_correct: [false],
        ordre: [2]
      }));
    }
  }

  addAnswer(): void {
    this.reponsesArray.push(this.fb.group({
      reponse_text: ['', Validators.required],
      is_correct: [false],
      ordre: [this.reponsesArray.length + 1]
    }));
  }

  removeAnswer(index: number): void {
    if (this.reponsesArray.length > 1) {
      this.reponsesArray.removeAt(index);
    }
  }

  onCorrectAnswerChange(index: number): void {
    // Pour les QCM, une seule bonne réponse
    if (this.questionForm.get('type')?.value === 'multiple_choice') {
      this.reponsesArray.controls.forEach((control, i) => {
        control.get('is_correct')?.setValue(i === index);
      });
    }
  }

  saveQuestion(): void {
    if (this.questionForm.invalid) {
      return;
    }

    const formValue = this.questionForm.value;
    const questionData: Partial<Question> = {
      quizzes_id: this.quizId,
      question_text: formValue.question_text,
      type: formValue.type,
      points: formValue.points,
      ordre: formValue.ordre,
      reponses: formValue.reponses.map((rep: any, index: number) => ({
        ...rep,
        ordre: index + 1
      }))
    };

    this.loading = true;

    const request = this.editingQuestion 
      ? this.questionService.updateQuestion(this.quizId, this.editingQuestion.id!, questionData)
      : this.questionService.createQuestion(this.quizId, questionData);

    request.subscribe({
      next: () => {
        this.loadQuestions();
        this.addQuestionModal.hide();
        this.editQuestionModal.hide();
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la sauvegarde:', error);
        this.loading = false;
      }
    });
  }

  confirmDeleteQuestion(question: Question): void {
    this.editingQuestion = question;
    this.deleteModal.show();
  }

  deleteQuestion(): void {
    if (!this.editingQuestion) return;

    this.loading = true;
    this.questionService.deleteQuestion(this.quizId, this.editingQuestion.id!).subscribe({
      next: () => {
        this.loadQuestions();
        this.deleteModal.hide();
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la suppression:', error);
        this.loading = false;
      }
    });
  }

  onDrop(event: CdkDragDrop<Question[]>): void {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
    
    // Mettre à jour l'ordre
    const reorderData = {
      questions: this.questions.map((q, index) => ({
        id: q.id!,
        ordre: index + 1
      }))
    };

    this.questionService.reorderQuestions(this.quizId, reorderData).subscribe({
      next: () => {
        this.loadQuestions();
      },
      error: (error) => {
        console.error('Erreur lors du réordonnancement:', error);
        // Recharger en cas d'erreur
        this.loadQuestions();
      }
    });
  }

  cancelEdit(): void {
    this.addQuestionModal.hide();
    this.editQuestionModal.hide();
    this.editingQuestion = null;
    this.questionForm.reset();
  }

  goBack(): void {
    this.router.navigate([this.routes.instructorQuiz]);
  }

  getTypeLabel(type: string): string {
    switch (type) {
      case 'multiple_choice': return 'QCM';
      case 'true_false': return 'Vrai/Faux';
      case 'text': return 'Texte';
      default: return type;
    }
  }
}