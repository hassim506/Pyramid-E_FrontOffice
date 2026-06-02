import {
  QuizResultsService
} from "./chunk-PPEGAICU.js";
import {
  MatPaginatorModule
} from "./chunk-6MYGRHMQ.js";
import "./chunk-VA4RW3DX.js";
import {
  MatSortModule
} from "./chunk-OA5BMQAL.js";
import {
  MatTableModule
} from "./chunk-NOEW3IZK.js";
import "./chunk-T2CZWFC6.js";
import {
  CustomPaginationComponent
} from "./chunk-3XTSKOGE.js";
import "./chunk-EDMPVZTI.js";
import {
  MatSelectModule
} from "./chunk-GA2NYQ5M.js";
import "./chunk-QTOOGUTQ.js";
import "./chunk-YBM3WONH.js";
import "./chunk-NXSV6HFX.js";
import "./chunk-LRPYRVGX.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-5I6ORW2F.js";
import "./chunk-CBU3D44N.js";
import "./chunk-FKX6UC3I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-45DOGZAU.js";
import {
  RouterLink
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-quiz-results/instructor-quiz-results.component.ts
function InstructorQuizResultsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorQuizResultsComponent_ng_container_1_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 42);
    \u0275\u0275element(6, "i", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "div", 44)(10, "div", 45);
    \u0275\u0275element(11, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td")(15, "div", 47)(16, "span", 48);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 49);
    \u0275\u0275element(19, "div", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td")(21, "span", 51);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "span", 42);
    \u0275\u0275element(25, "i", 52);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "span", 53);
    \u0275\u0275element(29, "i", 54);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td")(32, "span", 51);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const result_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", result_r3.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Quiz #", result_r3.quiz_id, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("User #", result_r3.user_id);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ip-score--high", ctx_r1.parseFloat(result_r3.note) >= 80)("ip-score--mid", ctx_r1.parseFloat(result_r3.note) >= 60 && ctx_r1.parseFloat(result_r3.note) < 80)("ip-score--low", ctx_r1.parseFloat(result_r3.note) < 60);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r3.note, "/100 ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.parseFloat(result_r3.note), "%");
    \u0275\u0275classProp("ip-progress--high", ctx_r1.parseFloat(result_r3.note) >= 80)("ip-progress--mid", ctx_r1.parseFloat(result_r3.note) >= 60 && ctx_r1.parseFloat(result_r3.note) < 80)("ip-progress--low", ctx_r1.parseFloat(result_r3.note) < 60);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", result_r3.points_obtenus, "/", result_r3.points_total);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", result_r3.nombre_tentatives, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ip-status-active", result_r3.est_reussi)("ip-status-inactive", !result_r3.est_reussi);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", result_r3.est_reussi ? "R\xE9ussi" : "\xC9chou\xE9", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(result_r3.created_at));
  }
}
function InstructorQuizResultsComponent_ng_container_1_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
    \u0275\u0275element(2, "i", 56);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun r\xE9sultat trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorQuizResultsComponent_ng_container_1_app_custom_pagination_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-custom-pagination", 57);
    \u0275\u0275listener("pageChange", function InstructorQuizResultsComponent_ng_container_1_app_custom_pagination_88_Template_app_custom_pagination_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("currentPage", ctx_r1.currentPage)("totalData", ctx_r1.totalData);
  }
}
function InstructorQuizResultsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5)(2, "div")(3, "h5", 6);
    \u0275\u0275text(4, "R\xE9sultats des quiz ");
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 8);
    \u0275\u0275text(8, "Consultez et analysez les r\xE9sultats des \xE9valuations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "div", 11);
    \u0275\u0275element(12, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "div", 13);
    \u0275\u0275text(15, "Total r\xE9sultats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 14);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 10)(19, "div", 15);
    \u0275\u0275element(20, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "div", 13);
    \u0275\u0275text(23, "Taux de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 10)(27, "div", 17);
    \u0275\u0275element(28, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "div", 13);
    \u0275\u0275text(31, "Note moyenne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 14);
    \u0275\u0275text(33);
    \u0275\u0275elementStart(34, "span", 19);
    \u0275\u0275text(35, "/100");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "div", 20)(37, "div", 21)(38, "div", 22)(39, "label", 23);
    \u0275\u0275text(40, "Quiz ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 24);
    \u0275\u0275element(42, "i", 25);
    \u0275\u0275elementStart(43, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizResultsComponent_ng_container_1_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterQuizId, $event) || (ctx_r1.filterQuizId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function InstructorQuizResultsComponent_ng_container_1_Template_input_ngModelChange_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 22)(45, "label", 23);
    \u0275\u0275text(46, "Utilisateur ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 24);
    \u0275\u0275element(48, "i", 27);
    \u0275\u0275elementStart(49, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizResultsComponent_ng_container_1_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterUserId, $event) || (ctx_r1.filterUserId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function InstructorQuizResultsComponent_ng_container_1_Template_input_ngModelChange_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 22)(51, "label", 23);
    \u0275\u0275text(52, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizResultsComponent_ng_container_1_Template_select_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterStatus, $event) || (ctx_r1.filterStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function InstructorQuizResultsComponent_ng_container_1_Template_select_ngModelChange_53_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(54, "option", 30);
    \u0275\u0275text(55, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 31);
    \u0275\u0275text(57, "R\xE9ussi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 32);
    \u0275\u0275text(59, "\xC9chou\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 33)(61, "button", 34);
    \u0275\u0275listener("click", function InstructorQuizResultsComponent_ng_container_1_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(62, "i", 35);
    \u0275\u0275text(63, " R\xE9initialiser ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "div", 36)(65, "div", 37)(66, "table", 38)(67, "thead")(68, "tr")(69, "th");
    \u0275\u0275text(70, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th");
    \u0275\u0275text(72, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "th");
    \u0275\u0275text(74, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "th");
    \u0275\u0275text(76, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "th");
    \u0275\u0275text(78, "Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th");
    \u0275\u0275text(80, "Tentatives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "th");
    \u0275\u0275text(82, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "th");
    \u0275\u0275text(84, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "tbody");
    \u0275\u0275template(86, InstructorQuizResultsComponent_ng_container_1_tr_86_Template, 34, 27, "tr", 39)(87, InstructorQuizResultsComponent_ng_container_1_tr_87_Template, 5, 0, "tr", 1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(88, InstructorQuizResultsComponent_ng_container_1_app_custom_pagination_88_Template, 1, 2, "app-custom-pagination", 40);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.filteredResults.length);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.filteredResults.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.getSuccessRate(), "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getAverageScore());
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterQuizId);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterUserId);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterStatus);
    \u0275\u0275advance(33);
    \u0275\u0275property("ngForOf", ctx_r1.getPaginatedResults());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredResults.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredResults.length > 0);
  }
}
var InstructorQuizResultsComponent = class _InstructorQuizResultsComponent {
  quizResultsService;
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
  static \u0275fac = function InstructorQuizResultsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorQuizResultsComponent)(\u0275\u0275directiveInject(QuizResultsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorQuizResultsComponent, selectors: [["app-instructor-quiz-results"]], decls: 2, vars: 2, consts: [["class", "ip-loader", 4, "ngIf"], [4, "ngIf"], [1, "ip-loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-count"], [1, "ip-page-head__sub"], [1, "ip-kpi-row"], [1, "ip-kpi-card"], [1, "ip-kpi-icon"], [1, "isax", "isax-chart-1"], [1, "ip-kpi-label"], [1, "ip-kpi-value"], [1, "ip-kpi-icon", "ip-kpi-icon--success"], [1, "isax", "isax-tick-circle"], [1, "ip-kpi-icon", "ip-kpi-icon--gold"], [1, "isax", "isax-medal-star"], [1, "ip-kpi-unit"], [1, "ip-card", "ip-filter-card"], [1, "ip-filter-row"], [1, "ip-filter-group"], [1, "ip-label"], [1, "ip-input-icon-wrap"], [1, "isax", "isax-award", "ip-input-icon"], ["type", "number", "placeholder", "ID du quiz", 1, "ip-input", "ip-input--icon", 3, "ngModelChange", "ngModel"], [1, "isax", "isax-user", "ip-input-icon"], ["type", "number", "placeholder", "ID utilisateur", 1, "ip-input", "ip-input--icon", 3, "ngModelChange", "ngModel"], [1, "ip-input", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "success"], ["value", "failed"], [1, "ip-filter-group", "ip-filter-group--action"], ["type", "button", 1, "ip-btn", "ip-btn--ghost", 3, "click"], [1, "isax", "isax-refresh"], [1, "ip-card"], [1, "table-responsive"], [1, "table", "ip-table"], [4, "ngFor", "ngForOf"], [3, "currentPage", "totalData", "pageChange", 4, "ngIf"], [1, "ip-id-badge"], [1, "ip-pill"], [1, "isax", "isax-award"], [1, "ip-user-cell"], [1, "ip-user-avatar"], [1, "isax", "isax-user"], [1, "ip-score-cell"], [1, "ip-score-badge"], [1, "ip-progress-wrap"], [1, "ip-progress-bar"], [1, "text-muted"], [1, "isax", "isax-repeat"], [1, "ip-status-badge"], [1, "fa-solid", "fa-circle"], ["colspan", "8", 1, "ip-empty"], [1, "isax", "isax-search-normal"], [3, "pageChange", "currentPage", "totalData"]], template: function InstructorQuizResultsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorQuizResultsComponent_div_0_Template, 4, 0, "div", 0)(1, InstructorQuizResultsComponent_ng_container_1_Template, 89, 10, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule, CustomPaginationComponent, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.ip-kpi-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-kpi-icon--success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--gold[_ngcontent-%COMP%] {\n  background: #FDF8E7;\n  color: #D4AF37;\n}\n.ip-kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 4px;\n}\n.ip-kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-kpi-unit[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 400;\n  color: #6C757D;\n}\n.ip-filter-card[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  margin-bottom: 20px;\n}\n.ip-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--action[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-id-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.ip-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ip-user-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n}\n.ip-score-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ip-score-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.ip-score-badge.ip-score--high[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-score-badge.ip-score--mid[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: #D97706;\n}\n.ip-score-badge.ip-score--low[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-progress-wrap[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 5px;\n  background: #E9ECEF;\n  border-radius: 99px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.ip-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n}\n.ip-progress-bar.ip-progress--high[_ngcontent-%COMP%] {\n  background: #059669;\n}\n.ip-progress-bar.ip-progress--mid[_ngcontent-%COMP%] {\n  background: #D97706;\n}\n.ip-progress-bar.ip-progress--low[_ngcontent-%COMP%] {\n  background: #DC3545;\n}\n.ip-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-status-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.ip-status-badge.ip-status-active[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-status-badge.ip-status-inactive[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #3D3D56;\n  display: block;\n  margin-bottom: 5px;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ip-input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ip-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n  border-color: #C0C5CC;\n}\n/*# sourceMappingURL=instructor-quiz-results.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorQuizResultsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-quiz-results", imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule, CustomPaginationComponent, RouterLink, FormsModule], template: `<!-- Loading -->
<div *ngIf="loading" class="ip-loader">
  <div class="spinner-border" role="status"><span class="visually-hidden">Chargement...</span></div>
</div>

<ng-container *ngIf="!loading">

  <!-- Page header -->
  <div class="ip-page-head">
    <div>
      <h5 class="ip-page-head__title">R\xE9sultats des quiz <span class="ip-count">{{ filteredResults.length }}</span></h5>
      <p class="ip-page-head__sub">Consultez et analysez les r\xE9sultats des \xE9valuations</p>
    </div>
  </div>

  <!-- KPI cards -->
  <div class="ip-kpi-row">
    <div class="ip-kpi-card">
      <div class="ip-kpi-icon"><i class="isax isax-chart-1"></i></div>
      <div>
        <div class="ip-kpi-label">Total r\xE9sultats</div>
        <div class="ip-kpi-value">{{ filteredResults.length }}</div>
      </div>
    </div>
    <div class="ip-kpi-card">
      <div class="ip-kpi-icon ip-kpi-icon--success"><i class="isax isax-tick-circle"></i></div>
      <div>
        <div class="ip-kpi-label">Taux de r\xE9ussite</div>
        <div class="ip-kpi-value">{{ getSuccessRate() }}%</div>
      </div>
    </div>
    <div class="ip-kpi-card">
      <div class="ip-kpi-icon ip-kpi-icon--gold"><i class="isax isax-medal-star"></i></div>
      <div>
        <div class="ip-kpi-label">Note moyenne</div>
        <div class="ip-kpi-value">{{ getAverageScore() }}<span class="ip-kpi-unit">/100</span></div>
      </div>
    </div>
  </div>

  <!-- Filters -->
  <div class="ip-card ip-filter-card">
    <div class="ip-filter-row">
      <div class="ip-filter-group">
        <label class="ip-label">Quiz ID</label>
        <div class="ip-input-icon-wrap">
          <i class="isax isax-award ip-input-icon"></i>
          <input type="number" class="ip-input ip-input--icon"
                 [(ngModel)]="filterQuizId" (ngModelChange)="applyFilters()"
                 placeholder="ID du quiz">
        </div>
      </div>
      <div class="ip-filter-group">
        <label class="ip-label">Utilisateur ID</label>
        <div class="ip-input-icon-wrap">
          <i class="isax isax-user ip-input-icon"></i>
          <input type="number" class="ip-input ip-input--icon"
                 [(ngModel)]="filterUserId" (ngModelChange)="applyFilters()"
                 placeholder="ID utilisateur">
        </div>
      </div>
      <div class="ip-filter-group">
        <label class="ip-label">Statut</label>
        <select class="ip-input" [(ngModel)]="filterStatus" (ngModelChange)="applyFilters()">
          <option value="all">Tous</option>
          <option value="success">R\xE9ussi</option>
          <option value="failed">\xC9chou\xE9</option>
        </select>
      </div>
      <div class="ip-filter-group ip-filter-group--action">
        <button type="button" class="ip-btn ip-btn--ghost" (click)="clearFilters()">
          <i class="isax isax-refresh"></i> R\xE9initialiser
        </button>
      </div>
    </div>
  </div>

  <!-- Table -->
  <div class="ip-card">
    <div class="table-responsive">
      <table class="table ip-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Quiz</th>
            <th>Utilisateur</th>
            <th>Score</th>
            <th>Points</th>
            <th>Tentatives</th>
            <th>Statut</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let result of getPaginatedResults()">
            <td><span class="ip-id-badge">#{{ result.id }}</span></td>
            <td>
              <span class="ip-pill">
                <i class="isax isax-award"></i> Quiz #{{ result.quiz_id }}
              </span>
            </td>
            <td>
              <div class="ip-user-cell">
                <div class="ip-user-avatar"><i class="isax isax-user"></i></div>
                <span>User #{{ result.user_id }}</span>
              </div>
            </td>
            <td>
              <div class="ip-score-cell">
                <span class="ip-score-badge"
                      [class.ip-score--high]="parseFloat(result.note) >= 80"
                      [class.ip-score--mid]="parseFloat(result.note) >= 60 && parseFloat(result.note) < 80"
                      [class.ip-score--low]="parseFloat(result.note) < 60">
                  {{ result.note }}/100
                </span>
                <div class="ip-progress-wrap">
                  <div class="ip-progress-bar"
                       [style.width.%]="parseFloat(result.note)"
                       [class.ip-progress--high]="parseFloat(result.note) >= 80"
                       [class.ip-progress--mid]="parseFloat(result.note) >= 60 && parseFloat(result.note) < 80"
                       [class.ip-progress--low]="parseFloat(result.note) < 60">
                  </div>
                </div>
              </div>
            </td>
            <td><span class="text-muted">{{ result.points_obtenus }}/{{ result.points_total }}</span></td>
            <td>
              <span class="ip-pill">
                <i class="isax isax-repeat"></i> {{ result.nombre_tentatives }}
              </span>
            </td>
            <td>
              <span class="ip-status-badge"
                    [class.ip-status-active]="result.est_reussi"
                    [class.ip-status-inactive]="!result.est_reussi">
                <i class="fa-solid fa-circle"></i>
                {{ result.est_reussi ? 'R\xE9ussi' : '\xC9chou\xE9' }}
              </span>
            </td>
            <td><span class="text-muted">{{ formatDate(result.created_at) }}</span></td>
          </tr>
          <tr *ngIf="filteredResults.length === 0">
            <td colspan="8" class="ip-empty">
              <i class="isax isax-search-normal"></i>
              <span>Aucun r\xE9sultat trouv\xE9</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Pagination -->
  <app-custom-pagination
    *ngIf="filteredResults.length > 0"
    [currentPage]="currentPage"
    [totalData]="totalData"
    (pageChange)="goToPage($event)">
  </app-custom-pagination>

</ng-container>
`, styles: ["/* src/app/features/instructor/instructor-quiz-results/instructor-quiz-results.component.scss */\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-kpi-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card {\n  flex: 1;\n  min-width: 180px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.ip-kpi-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-kpi-icon--success {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--gold {\n  background: #FDF8E7;\n  color: #D4AF37;\n}\n.ip-kpi-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 4px;\n}\n.ip-kpi-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-kpi-unit {\n  font-size: 13px;\n  font-weight: 400;\n  color: #6C757D;\n}\n.ip-filter-card {\n  padding: 16px 20px;\n  margin-bottom: 20px;\n}\n.ip-filter-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--action {\n  flex: 0 0 auto;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-id-badge {\n  display: inline-block;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.ip-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-pill i {\n  font-size: 12px;\n}\n.ip-user-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ip-user-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n}\n.ip-score-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ip-score-badge {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.ip-score-badge.ip-score--high {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-score-badge.ip-score--mid {\n  background: #FFFBEB;\n  color: #D97706;\n}\n.ip-score-badge.ip-score--low {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-progress-wrap {\n  width: 60px;\n  height: 5px;\n  background: #E9ECEF;\n  border-radius: 99px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.ip-progress-bar {\n  height: 100%;\n  border-radius: 99px;\n}\n.ip-progress-bar.ip-progress--high {\n  background: #059669;\n}\n.ip-progress-bar.ip-progress--mid {\n  background: #D97706;\n}\n.ip-progress-bar.ip-progress--low {\n  background: #DC3545;\n}\n.ip-status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-status-badge i {\n  font-size: 8px;\n}\n.ip-status-badge.ip-status-active {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-status-badge.ip-status-inactive {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-empty {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #3D3D56;\n  display: block;\n  margin-bottom: 5px;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon {\n  padding-left: 34px;\n}\n.ip-input-icon-wrap {\n  position: relative;\n}\n.ip-input-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 16px;\n}\n.ip-btn--ghost {\n  background: transparent;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n  border-color: #C0C5CC;\n}\n/*# sourceMappingURL=instructor-quiz-results.component.css.map */\n"] }]
  }], () => [{ type: QuizResultsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorQuizResultsComponent, { className: "InstructorQuizResultsComponent", filePath: "src/app/features/instructor/instructor-quiz-results/instructor-quiz-results.component.ts", lineNumber: 28 });
})();
export {
  InstructorQuizResultsComponent
};
//# sourceMappingURL=chunk-NNB7B7E4.js.map
