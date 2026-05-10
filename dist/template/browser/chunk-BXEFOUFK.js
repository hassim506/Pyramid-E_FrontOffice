import {
  QuizResultsService
} from "./chunk-TPIZAP5J.js";
import {
  CustomPaginationComponent
} from "./chunk-2EUN5DIU.js";
import {
  MatPaginatorModule
} from "./chunk-D36CEDK4.js";
import "./chunk-NAND5NLV.js";
import {
  MatSort,
  MatSortModule
} from "./chunk-LWTJDC5B.js";
import "./chunk-JN46OEVN.js";
import "./chunk-GJGS2IST.js";
import {
  MatTableModule
} from "./chunk-USSDRVXR.js";
import {
  MatSelectModule
} from "./chunk-5TR7ZTNG.js";
import "./chunk-BCALAYJ4.js";
import "./chunk-4UI2RZNC.js";
import "./chunk-H6U5ZWSD.js";
import "./chunk-IA7LH4QU.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-GUU2EPD7.js";
import "./chunk-TXJEXWQM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-YMJPU2MG.js";
import {
  RouterLink
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-GWJREDC5.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-quiz-results/adminrh-quiz-results.component.ts
function AdminrhQuizResultsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 3)(2, "div", 35)(3, "div", 36);
    \u0275\u0275element(4, "img", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h5", 38)(7, "a", 39);
    \u0275\u0275text(8, "R\xE9sultats des Quiz - Analyse G\xE9n\xE9rale");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 40)(10, "p", 41);
    \u0275\u0275element(11, "i", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 43);
    \u0275\u0275element(14, "i", 44);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r0.filteredResults.length, " R\xE9sultats ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Note moyenne: ", ctx_r0.getAverageScore(), "/100 ");
  }
}
function AdminrhQuizResultsComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "span", 47);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhQuizResultsComponent_div_65_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 54)(9, "div", 55);
    \u0275\u0275element(10, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td")(14, "div", 54)(15, "span", 58);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 59);
    \u0275\u0275element(18, "div", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td")(20, "span", 61);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "span", 62);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "span", 63);
    \u0275\u0275element(27, "i", 64);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "span", 65);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const result_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(result_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Quiz ", result_r3.quiz_id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("User ", result_r3.user_id);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", ctx_r0.parseFloat(result_r3.note) >= 80)("bg-warning", ctx_r0.parseFloat(result_r3.note) >= 60 && ctx_r0.parseFloat(result_r3.note) < 80)("bg-danger", ctx_r0.parseFloat(result_r3.note) < 60);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r3.note, "/100 ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.parseFloat(result_r3.note), "%");
    \u0275\u0275classProp("bg-success", ctx_r0.parseFloat(result_r3.note) >= 80)("bg-warning", ctx_r0.parseFloat(result_r3.note) >= 60 && ctx_r0.parseFloat(result_r3.note) < 80)("bg-danger", ctx_r0.parseFloat(result_r3.note) < 60);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", result_r3.points_obtenus, "/", result_r3.points_total);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(result_r3.nombre_tentatives);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success-transparent", result_r3.est_reussi)("text-success", result_r3.est_reussi)("bg-danger-transparent", !result_r3.est_reussi)("text-danger", !result_r3.est_reussi);
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-check-circle", result_r3.est_reussi)("fa-times-circle", !result_r3.est_reussi);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r3.est_reussi ? "R\xE9ussi" : "\xC9chou\xE9", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(result_r3.created_at));
  }
}
function AdminrhQuizResultsComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "table", 49);
    \u0275\u0275listener("matSortChange", function AdminrhQuizResultsComponent_div_65_Template_table_matSortChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sortData($event));
    });
    \u0275\u0275elementStart(2, "thead", 50)(3, "tr")(4, "th");
    \u0275\u0275text(5, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Tentatives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, AdminrhQuizResultsComponent_div_65_tr_21_Template, 32, 35, "tr", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r0.getPaginatedResults());
  }
}
function AdminrhQuizResultsComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 66);
    \u0275\u0275element(2, "i", 67);
    \u0275\u0275elementStart(3, "h5", 61);
    \u0275\u0275text(4, "Aucun r\xE9sultat trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6, "Essayez de modifier vos filtres de recherche.");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhQuizResultsComponent_app_custom_pagination_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-custom-pagination", 68);
    \u0275\u0275listener("pageChange", function AdminrhQuizResultsComponent_app_custom_pagination_67_Template_app_custom_pagination_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("currentPage", ctx_r0.currentPage)("totalData", ctx_r0.totalData);
  }
}
var AdminrhQuizResultsComponent = class _AdminrhQuizResultsComponent {
  quizResultsService;
  // @Component({
  //   selector: 'app-instructor-quiz-results',
  //   imports:[CommonModule,MatTableModule,MatSortModule,MatPaginatorModule,MatSelectModule,CustomPaginationComponent,RouterLink,FormsModule],
  //   templateUrl: './instructor-quiz-results.component.html',
  //   styleUrl: './instructor-quiz-results.component.scss'
  // })
  // export class InstructorQuizResultsComponent implements OnInit {
  results = [];
  filteredResults = [];
  totalResults = 0;
  userId = 0;
  isAuthenticated = false;
  loading = false;
  // Filtres
  filterQuizId = null;
  filterUserId = null;
  filterStatus = "all";
  // 'all', 'success', 'failed'
  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalData = 0;
  constructor(quizResultsService) {
    this.quizResultsService = quizResultsService;
  }
  ngOnInit() {
    this.loadResults();
  }
  loadResults() {
    this.loading = true;
    this.quizResultsService.getAllResults().subscribe({
      next: (response) => {
        this.results = response.results;
        this.filteredResults = [...this.results];
        this.totalResults = response.total_in_db;
        this.userId = response.user_id;
        this.isAuthenticated = response.is_authenticated;
        this.applyFilters();
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors du chargement des r\xE9sultats:", error);
        this.loading = false;
      }
    });
  }
  applyFilters() {
    this.filteredResults = this.results.filter((result) => {
      let matches = true;
      if (this.filterQuizId !== null) {
        matches = matches && result.quiz_id === this.filterQuizId;
      }
      if (this.filterUserId !== null) {
        matches = matches && result.user_id === this.filterUserId;
      }
      if (this.filterStatus !== "all") {
        matches = matches && (this.filterStatus === "success" ? result.est_reussi : !result.est_reussi);
      }
      return matches;
    });
    this.totalData = Math.ceil(this.filteredResults.length / this.pageSize);
    this.currentPage = 1;
  }
  clearFilters() {
    this.filterQuizId = null;
    this.filterUserId = null;
    this.filterStatus = "all";
    this.applyFilters();
  }
  getPaginatedResults() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredResults.slice(startIndex, startIndex + this.pageSize);
  }
  nextPage() {
    if (this.currentPage < this.totalData) {
      this.currentPage++;
    }
  }
  parseFloat(value) {
    return parseFloat(value);
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  sortData(event) {
    console.log("Sort event:", event);
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalData) {
      this.currentPage = page;
    }
  }
  getSuccessRate() {
    if (this.filteredResults.length === 0)
      return 0;
    const successCount = this.filteredResults.filter((r) => r.est_reussi).length;
    return Math.round(successCount / this.filteredResults.length * 100);
  }
  getAverageScore() {
    if (this.filteredResults.length === 0)
      return 0;
    const totalScore = this.filteredResults.reduce((sum, r) => sum + parseFloat(r.note), 0);
    return Math.round(totalScore / this.filteredResults.length * 100) / 100;
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  static \u0275fac = function AdminrhQuizResultsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhQuizResultsComponent)(\u0275\u0275directiveInject(QuizResultsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhQuizResultsComponent, selectors: [["app-adminrh-quiz-results"]], decls: 68, vars: 11, consts: [[1, "page-title"], ["class", "card", 4, "ngIf"], [1, "card", "mb-4"], [1, "card-body"], [1, "mb-3"], [1, "row", "g-3"], [1, "col-lg-3", "col-md-4"], [1, "form-label"], ["type", "number", "placeholder", "ID du quiz", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "ID utilisateur", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "success"], ["value", "failed"], [1, "col-lg-3", "col-md-4", "d-flex", "align-items-end"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-times", "me-2"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "card", "bg-secondary-transparent", "border-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-1", "fw-normal", "text-gray-5"], [1, "fs-20", "fw-bold", "mb-1", "d-block", "text-gray-9"], [1, "icon-box", "bg-soft-secondary"], ["src", "assets/img/icon/user-tick.svg", "alt", ""], [1, "card", "bg-info-transparent", "border-0"], [1, "icon-box", "bg-soft-info"], ["src", "assets/img/icon/document.svg", "alt", ""], [1, "card", "bg-purple-transparent", "border-0"], [1, "icon-box", "bg-soft-purple"], ["src", "assets/img/icon/clock.svg", "alt", ""], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive custom-table", 4, "ngIf"], [3, "currentPage", "totalData", "pageChange", 4, "ngIf"], [1, "card"], [1, "d-sm-flex", "align-items-center"], [1, "quiz-img", "me-3", "mb-2", "mb-sm-0"], ["src", "assets/img/students/quiz.jpg", "alt", ""], [1, "mb-2"], ["href", "javascript:void(0);"], [1, "question-info", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "fs-14", "me-2", "pe-2", "border-end", "mb-0"], [1, "isax", "isax-message-question5", "text-primary-soft", "me-2"], [1, "d-flex", "align-items-center", "fs-14", "mb-0"], [1, "isax", "isax-clock5", "text-secondary-soft", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "table-responsive", "custom-table"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead-light"], [4, "ngFor", "ngForOf"], [1, "badge", "bg-light", "text-dark"], [1, "badge", "bg-primary"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2", "bg-soft-primary"], [1, "fas", "fa-user"], [1, "fs-14"], [1, "badge", "me-2"], [1, "progress", "flex-fill", 2, "height", "6px", "max-width", "60px"], [1, "progress-bar"], [1, "text-muted"], [1, "badge", "bg-secondary"], [1, "badge"], [1, "fas", "me-1"], [1, "text-muted", "fs-12"], [1, "card-body", "text-center", "py-5"], [1, "fas", "fa-search", "fa-3x", "text-muted", "mb-3"], [3, "pageChange", "currentPage", "totalData"]], template: function AdminrhQuizResultsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h5", 0);
      \u0275\u0275text(1, "R\xE9sultats des Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, AdminrhQuizResultsComponent_div_2_Template, 16, 2, "div", 1);
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "h6", 4);
      \u0275\u0275text(6, "Filtres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "label", 7);
      \u0275\u0275text(10, "Quiz ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhQuizResultsComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterQuizId, $event) || (ctx.filterQuizId = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhQuizResultsComponent_Template_input_ngModelChange_11_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6)(13, "label", 7);
      \u0275\u0275text(14, "User ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhQuizResultsComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterUserId, $event) || (ctx.filterUserId = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhQuizResultsComponent_Template_input_ngModelChange_15_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 6)(17, "label", 7);
      \u0275\u0275text(18, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhQuizResultsComponent_Template_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhQuizResultsComponent_Template_select_ngModelChange_19_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 12);
      \u0275\u0275text(23, "R\xE9ussi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 13);
      \u0275\u0275text(25, "\xC9chou\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 14)(27, "button", 15);
      \u0275\u0275listener("click", function AdminrhQuizResultsComponent_Template_button_click_27_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275element(28, "i", 16);
      \u0275\u0275text(29, "Effacer ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 17)(31, "div", 18)(32, "div", 19)(33, "div", 3)(34, "div", 20)(35, "div")(36, "h6", 21);
      \u0275\u0275text(37, "Total R\xE9sultats");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 22);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 23);
      \u0275\u0275element(41, "img", 24);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(42, "div", 18)(43, "div", 25)(44, "div", 3)(45, "div", 20)(46, "div")(47, "h6", 21);
      \u0275\u0275text(48, "Taux de R\xE9ussite");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span", 22);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 26);
      \u0275\u0275element(52, "img", 27);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(53, "div", 18)(54, "div", 28)(55, "div", 3)(56, "div", 20)(57, "div")(58, "h6", 21);
      \u0275\u0275text(59, "Note Moyenne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span", 22);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 29);
      \u0275\u0275element(63, "img", 30);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(64, AdminrhQuizResultsComponent_div_64_Template, 4, 0, "div", 31)(65, AdminrhQuizResultsComponent_div_65_Template, 22, 1, "div", 32)(66, AdminrhQuizResultsComponent_div_66_Template, 7, 0, "div", 1)(67, AdminrhQuizResultsComponent_app_custom_pagination_67_Template, 1, 2, "app-custom-pagination", 33);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.filteredResults.length > 0);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterQuizId);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterUserId);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
      \u0275\u0275advance(20);
      \u0275\u0275textInterpolate(ctx.filteredResults.length);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1("", ctx.getSuccessRate(), "%");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1("", ctx.getAverageScore(), "/100");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredResults.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredResults.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, MatTableModule, MatSortModule, MatSort, MatPaginatorModule, MatSelectModule, CustomPaginationComponent, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhQuizResultsComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-quiz-results", imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule, CustomPaginationComponent, RouterLink, FormsModule], template: `<h5 class="page-title">R\xE9sultats des Quiz</h5>\r
\r
<div class="card" *ngIf="filteredResults.length > 0">\r
  <div class="card-body">\r
    <div class="d-sm-flex align-items-center">\r
      <div class="quiz-img me-3 mb-2 mb-sm-0">\r
        <img src="assets/img/students/quiz.jpg" alt="">\r
      </div>\r
      <div>\r
        <h5 class="mb-2"><a href="javascript:void(0);">R\xE9sultats des Quiz - Analyse G\xE9n\xE9rale</a></h5>\r
        <div class="question-info d-flex align-items-center">\r
          <p class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0">\r
            <i class="isax isax-message-question5 text-primary-soft me-2"></i>{{ filteredResults.length }} R\xE9sultats\r
          </p>\r
          <p class="d-flex align-items-center fs-14 mb-0">\r
            <i class="isax isax-clock5 text-secondary-soft me-2"></i>Note moyenne: {{ getAverageScore() }}/100\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Filtres -->\r
<div class="card mb-4">\r
  <div class="card-body">\r
    <h6 class="mb-3">Filtres</h6>\r
    <div class="row g-3">\r
      <div class="col-lg-3 col-md-4">\r
        <label class="form-label">Quiz ID</label>\r
        <input \r
          type="number" \r
          class="form-control"\r
          [(ngModel)]="filterQuizId" \r
          (ngModelChange)="applyFilters()"\r
          placeholder="ID du quiz"\r
        >\r
      </div>\r
      <div class="col-lg-3 col-md-4">\r
        <label class="form-label">User ID</label>\r
        <input \r
          type="number" \r
          class="form-control"\r
          [(ngModel)]="filterUserId" \r
          (ngModelChange)="applyFilters()"\r
          placeholder="ID utilisateur"\r
        >\r
      </div>\r
      <div class="col-lg-3 col-md-4">\r
        <label class="form-label">Statut</label>\r
        <select class="form-select" [(ngModel)]="filterStatus" (ngModelChange)="applyFilters()">\r
          <option value="all">Tous</option>\r
          <option value="success">R\xE9ussi</option>\r
          <option value="failed">\xC9chou\xE9</option>\r
        </select>\r
      </div>\r
      <div class="col-lg-3 col-md-4 d-flex align-items-end">\r
        <button class="btn btn-secondary" (click)="clearFilters()">\r
          <i class="fas fa-times me-2"></i>Effacer\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Statistiques -->\r
<div class="row">\r
  <div class="col-lg-4 col-md-6">\r
    <div class="card bg-secondary-transparent border-0">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <h6 class="mb-1 fw-normal text-gray-5">Total R\xE9sultats</h6>\r
            <span class="fs-20 fw-bold mb-1 d-block text-gray-9">{{ filteredResults.length }}</span>\r
          </div>\r
          <div class="icon-box bg-soft-secondary">\r
            <img src="assets/img/icon/user-tick.svg" alt="">\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="col-lg-4 col-md-6">\r
    <div class="card bg-info-transparent border-0">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <h6 class="mb-1 fw-normal text-gray-5">Taux de R\xE9ussite</h6>\r
            <span class="fs-20 fw-bold mb-1 d-block text-gray-9">{{ getSuccessRate() }}%</span>\r
          </div>\r
          <div class="icon-box bg-soft-info">\r
            <img src="assets/img/icon/document.svg" alt="">\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="col-lg-4 col-md-6">\r
    <div class="card bg-purple-transparent border-0">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <h6 class="mb-1 fw-normal text-gray-5">Note Moyenne</h6>\r
            <span class="fs-20 fw-bold mb-1 d-block text-gray-9">{{ getAverageScore() }}/100</span>\r
          </div>\r
          <div class="icon-box bg-soft-purple">\r
            <img src="assets/img/icon/clock.svg" alt="">\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Spinner de chargement -->\r
<div *ngIf="loading" class="text-center py-5">\r
  <div class="spinner-border text-primary" role="status">\r
    <span class="visually-hidden">Chargement...</span>\r
  </div>\r
</div>\r
\r
<!-- Tableau des r\xE9sultats -->\r
<div *ngIf="!loading" class="table-responsive custom-table">\r
  <table matSort (matSortChange)="sortData($event)" class="table">\r
    <thead class="thead-light">\r
      <tr>\r
        <th>ID</th>\r
        <th>Quiz</th>\r
        <th>Utilisateur</th>\r
        <th>Score</th>\r
        <th>Points</th>\r
        <th>Tentatives</th>\r
        <th>Statut</th>\r
        <th>Date</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr *ngFor="let result of getPaginatedResults()">\r
        <td>\r
          <span class="badge bg-light text-dark">{{ result.id }}</span>\r
        </td>\r
        <td>\r
          <span class="badge bg-primary">Quiz {{ result.quiz_id }}</span>\r
        </td>\r
        <td>\r
          <div class="d-flex align-items-center">\r
            <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2 bg-soft-primary">\r
              <i class="fas fa-user"></i>\r
            </div>\r
            <span class="fs-14">User {{ result.user_id }}</span>\r
          </div>\r
        </td>\r
        <td>\r
          <div class="d-flex align-items-center">\r
            <span class="badge me-2" \r
                  [class.bg-success]="parseFloat(result.note) >= 80"\r
                  [class.bg-warning]="parseFloat(result.note) >= 60 && parseFloat(result.note) < 80"\r
                  [class.bg-danger]="parseFloat(result.note) < 60">\r
              {{ result.note }}/100\r
            </span>\r
            <div class="progress flex-fill" style="height: 6px; max-width: 60px;">\r
              <div class="progress-bar" \r
                   [style.width.%]="parseFloat(result.note)"\r
                   [class.bg-success]="parseFloat(result.note) >= 80"\r
                   [class.bg-warning]="parseFloat(result.note) >= 60 && parseFloat(result.note) < 80"\r
                   [class.bg-danger]="parseFloat(result.note) < 60">\r
              </div>\r
            </div>\r
          </div>\r
        </td>\r
        <td>\r
          <span class="text-muted">{{ result.points_obtenus }}/{{ result.points_total }}</span>\r
        </td>\r
        <td>\r
          <span class="badge bg-secondary">{{ result.nombre_tentatives }}</span>\r
        </td>\r
        <td>\r
          <span class="badge" \r
                [class.bg-success-transparent]="result.est_reussi"\r
                [class.text-success]="result.est_reussi"\r
                [class.bg-danger-transparent]="!result.est_reussi"\r
                [class.text-danger]="!result.est_reussi">\r
            <i class="fas me-1" \r
               [class.fa-check-circle]="result.est_reussi" \r
               [class.fa-times-circle]="!result.est_reussi"></i>\r
            {{ result.est_reussi ? 'R\xE9ussi' : '\xC9chou\xE9' }}\r
          </span>\r
        </td>\r
        <td>\r
          <span class="text-muted fs-12">{{ formatDate(result.created_at) }}</span>\r
        </td>\r
      </tr>\r
    </tbody>\r
  </table>\r
</div>\r
\r
<!-- Message si aucun r\xE9sultat -->\r
<div *ngIf="!loading && filteredResults.length === 0" class="card">\r
  <div class="card-body text-center py-5">\r
    <i class="fas fa-search fa-3x text-muted mb-3"></i>\r
    <h5 class="text-muted">Aucun r\xE9sultat trouv\xE9</h5>\r
    <p class="text-muted">Essayez de modifier vos filtres de recherche.</p>\r
  </div>\r
</div>\r
\r
<!-- Pagination -->\r
<app-custom-pagination \r
  *ngIf="!loading && filteredResults.length > 0"\r
  [currentPage]="currentPage"\r
  [totalData]="totalData"\r
  (pageChange)="goToPage($event)">\r
</app-custom-pagination>` }]
  }], () => [{ type: QuizResultsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhQuizResultsComponent, { className: "AdminrhQuizResultsComponent", filePath: "src/app/features/adminrh/adminrh-quiz-results/adminrh-quiz-results.component.ts", lineNumber: 23 });
})();
export {
  AdminrhQuizResultsComponent
};
//# sourceMappingURL=chunk-BXEFOUFK.js.map
