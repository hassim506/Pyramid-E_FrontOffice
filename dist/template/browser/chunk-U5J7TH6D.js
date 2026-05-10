import {
  DatePickerModule
} from "./chunk-UCM5CGSC.js";
import {
  QuizService
} from "./chunk-V27TZFZO.js";
import {
  CustomPaginationComponent
} from "./chunk-2EUN5DIU.js";
import "./chunk-JN46OEVN.js";
import "./chunk-KJG6A5PB.js";
import "./chunk-FKX6UC3I.js";
import "./chunk-P54CRWS4.js";
import "./chunk-FT5Q6NE3.js";
import {
  FormsModule
} from "./chunk-YMJPU2MG.js";
import {
  RouterLink
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-GWJREDC5.js";
import {
  Component,
  Subscription,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-quiz/instructor-quiz.component.ts
var _c0 = () => ["/quiz/create"];
var _c1 = (a0) => ["/instructor/instructor-quiz-questions", a0];
var _c2 = (a0) => ["/quizes", a0, "edit"];
function InstructorQuizComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function InstructorQuizComponent_div_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function InstructorQuizComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorQuizComponent_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275elementStart(2, "h5");
    \u0275\u0275text(3, "Aucun quiz trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, "Commencez par cr\xE9er votre premier quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 21);
    \u0275\u0275element(7, "i", 5);
    \u0275\u0275text(8, " Cr\xE9er un quiz ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
  }
}
function InstructorQuizComponent_div_12_div_5_tr_21_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quiz_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", quiz_r4.duree_minutes, " min ");
  }
}
function InstructorQuizComponent_div_12_div_5_tr_21_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, " Non d\xE9finie ");
    \u0275\u0275elementEnd();
  }
}
function InstructorQuizComponent_div_12_div_5_tr_21_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quiz_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", quiz_r4.score_minimum, "% ");
  }
}
function InstructorQuizComponent_div_12_div_5_tr_21_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, " Non d\xE9fini ");
    \u0275\u0275elementEnd();
  }
}
function InstructorQuizComponent_div_12_div_5_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, InstructorQuizComponent_div_12_div_5_tr_21_span_11_Template, 2, 1, "span", 29)(12, InstructorQuizComponent_div_12_div_5_tr_21_span_12_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, InstructorQuizComponent_div_12_div_5_tr_21_span_14_Template, 2, 1, "span", 29)(15, InstructorQuizComponent_div_12_div_5_tr_21_span_15_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "div", 31)(24, "button", 32);
    \u0275\u0275element(25, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 34);
    \u0275\u0275element(27, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 36);
    \u0275\u0275listener("click", function InstructorQuizComponent_div_12_div_5_tr_21_Template_button_click_28_listener() {
      const quiz_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteQuiz(quiz_r4));
    });
    \u0275\u0275element(29, "i", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const quiz_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(quiz_r4.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", quiz_r4.description || "Aucune description", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Formation #", quiz_r4.formation_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", quiz_r4.duree_minutes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !quiz_r4.duree_minutes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", quiz_r4.score_minimum);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !quiz_r4.score_minimum);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + ctx_r1.getStatusClass(quiz_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(quiz_r4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 13, quiz_r4.created_at, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c1, quiz_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c2, quiz_r4.id));
  }
}
function InstructorQuizComponent_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead", 24)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Note min.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 25);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, InstructorQuizComponent_div_12_div_5_tr_21_Template, 30, 20, "tr", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.quizzes);
  }
}
function InstructorQuizComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h5", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, InstructorQuizComponent_div_12_div_4_Template, 9, 2, "div", 17)(5, InstructorQuizComponent_div_12_div_5_Template, 22, 1, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Quiz (", ctx_r1.quizzes.length, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quizzes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quizzes.length > 0);
  }
}
var InstructorQuizComponent = class _InstructorQuizComponent {
  quizService;
  quizzes = [];
  loading = false;
  error = "";
  currentPage = 1;
  totalData = 0;
  itemsPerPage = 10;
  subscription = new Subscription();
  constructor(quizService) {
    this.quizService = quizService;
  }
  ngOnInit() {
    this.loadQuizzes();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  loadQuizzes() {
    this.loading = true;
    this.error = "";
    const sub = this.quizService.getQuizzes().subscribe({
      next: (quizzes) => {
        this.quizzes = quizzes;
        this.loading = false;
      },
      error: (err) => {
        this.error = "Erreur lors du chargement des quiz";
        this.loading = false;
        console.error(err);
      }
    });
    this.subscription.add(sub);
  }
  deleteQuiz(quiz) {
    if (confirm(`\xCAtes-vous s\xFBr de vouloir supprimer le quiz "${quiz.titre}" ?`)) {
      const sub = this.quizService.deleteQuiz(quiz.id).subscribe({
        next: () => {
          this.quizzes = this.quizzes.filter((q) => q.id !== quiz.id);
        },
        error: (err) => {
          this.error = "Erreur lors de la suppression";
          console.error(err);
        }
      });
      this.subscription.add(sub);
    }
  }
  getStatusClass(quiz) {
    return quiz.is_active ? "badge-success" : "badge-secondary";
  }
  getStatusText(quiz) {
    return quiz.is_active ? "Actif" : "Inactif";
  }
  static \u0275fac = function InstructorQuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorQuizComponent)(\u0275\u0275directiveInject(QuizService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorQuizComponent, selectors: [["app-instructor-quiz"]], decls: 13, vars: 5, consts: [[1, "container-fluid", "px-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-0"], [1, "text-muted"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], [1, "fas", "fa-plus", "me-2"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", 1, "btn-close", 3, "click"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], ["class", "card-body text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "card-body", "text-center", "py-5"], [1, "fas", "fa-question-circle", "fa-3x", "text-muted", "mb-3"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "table-responsive"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], ["width", "150"], [4, "ngFor", "ngForOf"], [1, "text-truncate", 2, "max-width", "200px", "display", "inline-block"], [1, "badge", "bg-light", "text-dark"], [4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "btn-group", "btn-group-sm"], ["type", "button", "title", "Voir les questions du quiz", 1, "btn", "btn-outline-primary", 3, "routerLink"], [1, "fas", "fa-eye"], ["type", "button", "title", "Modifier", 1, "btn", "btn-outline-warning", 3, "routerLink"], [1, "fas", "fa-edit"], ["type", "button", "title", "Supprimer", 1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash"]], template: function InstructorQuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Gestion des Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Liste de tous les quiz disponibles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Nouveau Quiz ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, InstructorQuizComponent_div_10_Template, 3, 1, "div", 6)(11, InstructorQuizComponent_div_11_Template, 4, 0, "div", 7)(12, InstructorQuizComponent_div_12_Template, 6, 3, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, DatePickerModule, DatePipe], styles: ["\n\n.badge-success[_ngcontent-%COMP%] {\n  background-color: #198754 !important;\n}\n.badge-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d !important;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.btn-group-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.text-truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=instructor-quiz.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorQuizComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-quiz", standalone: true, imports: [CommonModule, RouterLink, FormsModule, DatePickerModule, CustomPaginationComponent], template: `<div class="container-fluid px-4">\r
  <!-- En-t\xEAte -->\r
  <div class="d-flex justify-content-between align-items-center mb-4">\r
    <div>\r
      <h1 class="h3 mb-0">Gestion des Quiz</h1>\r
      <p class="text-muted">Liste de tous les quiz disponibles</p>\r
    </div>\r
    <button type="button" class="btn btn-primary" [routerLink]="['/quiz/create']">\r
      <i class="fas fa-plus me-2"></i>\r
      Nouveau Quiz\r
    </button>\r
  </div>\r
\r
  <!-- Messages d'erreur -->\r
  <div *ngIf="error" class="alert alert-danger alert-dismissible fade show" role="alert">\r
    {{ error }}\r
    <button type="button" class="btn-close" (click)="error = ''"></button>\r
  </div>\r
\r
  <!-- Chargement -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">Chargement...</span>\r
    </div>\r
  </div>\r
\r
  <!-- Liste des quiz -->\r
  <div *ngIf="!loading" class="card">\r
    <div class="card-header">\r
      <h5 class="card-title mb-0">\r
        Quiz ({{ quizzes.length }})\r
      </h5>\r
    </div>\r
\r
    <div *ngIf="quizzes.length === 0" class="card-body text-center py-5">\r
      <i class="fas fa-question-circle fa-3x text-muted mb-3"></i>\r
      <h5>Aucun quiz trouv\xE9</h5>\r
      <p class="text-muted">Commencez par cr\xE9er votre premier quiz</p>\r
      <button class="btn btn-primary" [routerLink]="['/quiz/create']">\r
        <i class="fas fa-plus me-2"></i>\r
        Cr\xE9er un quiz\r
      </button>\r
    </div>\r
\r
    <div *ngIf="quizzes.length > 0" class="table-responsive">\r
      <table class="table table-hover mb-0">\r
        <thead class="table-light">\r
          <tr>\r
            <th>Titre</th>\r
            <th>Description</th>\r
            <th>Formation</th>\r
            <th>Dur\xE9e</th>\r
            <th>Note min.</th>\r
            <th>Statut</th>\r
            <th>Cr\xE9\xE9 le</th>\r
            <th width="150">Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let quiz of quizzes">\r
            <td>\r
              <strong>{{ quiz.titre }}</strong>\r
            </td>\r
            <td>\r
              <span class="text-truncate" style="max-width: 200px; display: inline-block;">\r
                {{ quiz.description || 'Aucune description' }}\r
              </span>\r
            </td>\r
            <td>\r
              <span class="badge bg-light text-dark">\r
                Formation #{{ quiz.formation_id }}\r
              </span>\r
            </td>\r
            <td>\r
              <span *ngIf="quiz.duree_minutes">\r
			{{ quiz.duree_minutes }} min\r
			</span>\r
			<span *ngIf="!quiz.duree_minutes" class="text-muted">\r
			Non d\xE9finie\r
			</span>\r
            </td>\r
            <td>                          \r
             <span *ngIf="quiz.score_minimum">\r
				{{ quiz.score_minimum }}%\r
				</span>\r
				<span *ngIf="!quiz.score_minimum" class="text-muted">\r
				Non d\xE9fini\r
				</span>\r
            </td>\r
            <td>\r
              <span [class]="'badge ' + getStatusClass(quiz)">\r
                {{ getStatusText(quiz) }}\r
              </span>\r
            </td>\r
            <td>\r
              {{ quiz.created_at | date:'dd/MM/yyyy' }}\r
            </td>\r
            <td>\r
              <div class="btn-group btn-group-sm">\r
            <button \r
			type="button" \r
			class="btn btn-outline-primary"\r
			[routerLink]="['/instructor/instructor-quiz-questions', quiz.id]"\r
			title="Voir les questions du quiz">\r
			<i class="fas fa-eye"></i>\r
			</button>\r
                <button \r
                  type="button" \r
                  class="btn btn-outline-warning"\r
                  [routerLink]="['/quizes', quiz.id, 'edit']"\r
                  title="Modifier">\r
                  <i class="fas fa-edit"></i>\r
                </button>\r
                <button \r
                  type="button" \r
                  class="btn btn-outline-danger"\r
                  (click)="deleteQuiz(quiz)"\r
                  title="Supprimer">\r
                  <i class="fas fa-trash"></i>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/instructor/instructor-quiz/instructor-quiz.component.scss */\n.badge-success {\n  background-color: #198754 !important;\n}\n.badge-secondary {\n  background-color: #6c757d !important;\n}\n.table th {\n  border-top: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.btn-group-sm .btn {\n  padding: 0.25rem 0.5rem;\n}\n.card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.spinner-border {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=instructor-quiz.component.css.map */\n"] }]
  }], () => [{ type: QuizService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorQuizComponent, { className: "InstructorQuizComponent", filePath: "src/app/features/instructor/instructor-quiz/instructor-quiz.component.ts", lineNumber: 38 });
})();
export {
  InstructorQuizComponent
};
//# sourceMappingURL=chunk-U5J7TH6D.js.map
