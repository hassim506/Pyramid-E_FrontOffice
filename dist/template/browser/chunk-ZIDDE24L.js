import {
  QuizResultsService
} from "./chunk-PTO3C7UG.js";
import "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IKOSZIEY.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/superadmin-quiz-results/superadmin-quiz-results.component.ts
function SuperadminQuizResultsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function SuperadminQuizResultsComponent_ng_container_1_tr_82_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(result_r3.user == null ? null : result_r3.user.matricule);
  }
}
function SuperadminQuizResultsComponent_ng_container_1_tr_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 41)(6, "span", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td")(9, "div", 43)(10, "div", 44);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "div", 45);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SuperadminQuizResultsComponent_ng_container_1_tr_82_div_15_Template, 2, 1, "div", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td")(17, "div", 47)(18, "span", 48);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 49);
    \u0275\u0275element(21, "div", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "td")(23, "span", 51);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "span", 52);
    \u0275\u0275element(27, "i", 53);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "span", 54);
    \u0275\u0275element(31, "i", 55);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td")(34, "span", 51);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const result_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", result_r3.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((result_r3.quiz == null ? null : result_r3.quiz.titre) || "Quiz #" + result_r3.quiz_id);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.getAvatarStyle(result_r3.user_id).bg)("color", ctx_r1.getAvatarStyle(result_r3.user_id).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(result_r3), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getUserName(result_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", result_r3.user == null ? null : result_r3.user.matricule);
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
function SuperadminQuizResultsComponent_ng_container_1_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun r\xE9sultat trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function SuperadminQuizResultsComponent_ng_container_1_div_84_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function SuperadminQuizResultsComponent_ng_container_1_div_84_ng_container_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function SuperadminQuizResultsComponent_ng_container_1_div_84_ng_container_6_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ip-pg-btn--active", p_r6 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6);
  }
}
function SuperadminQuizResultsComponent_ng_container_1_div_84_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminQuizResultsComponent_ng_container_1_div_84_ng_container_6_span_1_Template, 2, 0, "span", 65)(2, SuperadminQuizResultsComponent_ng_container_1_div_84_ng_container_6_button_2_Template, 2, 3, "button", 66);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r6 === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r6 !== -1);
  }
}
function SuperadminQuizResultsComponent_ng_container_1_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "button", 62);
    \u0275\u0275listener("click", function SuperadminQuizResultsComponent_ng_container_1_div_84_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SuperadminQuizResultsComponent_ng_container_1_div_84_ng_container_6_Template, 3, 2, "ng-container", 38);
    \u0275\u0275elementStart(7, "button", 62);
    \u0275\u0275listener("click", function SuperadminQuizResultsComponent_ng_container_1_div_84_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", (ctx_r1.currentPage - 1) * ctx_r1.itemsPerPage + 1, "\u2013", ctx_r1.pageEnd, " sur ", ctx_r1.filteredResults.length, " r\xE9sultats ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function SuperadminQuizResultsComponent_ng_container_1_Template(rf, ctx) {
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
    \u0275\u0275text(40, "Recherche");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 24);
    \u0275\u0275element(42, "i", 25);
    \u0275\u0275elementStart(43, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminQuizResultsComponent_ng_container_1_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterSearch, $event) || (ctx_r1.filterSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SuperadminQuizResultsComponent_ng_container_1_Template_input_ngModelChange_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 27)(45, "label", 23);
    \u0275\u0275text(46, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminQuizResultsComponent_ng_container_1_Template_select_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterStatus, $event) || (ctx_r1.filterStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SuperadminQuizResultsComponent_ng_container_1_Template_select_ngModelChange_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(48, "option", 29);
    \u0275\u0275text(49, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 30);
    \u0275\u0275text(51, "R\xE9ussi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 31);
    \u0275\u0275text(53, "\xC9chou\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 32)(55, "label", 23);
    \u0275\u0275text(56, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 33);
    \u0275\u0275listener("click", function SuperadminQuizResultsComponent_ng_container_1_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(58, "i", 34);
    \u0275\u0275text(59, " R\xE9initialiser ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 35)(61, "div", 36)(62, "table", 37)(63, "thead")(64, "tr")(65, "th");
    \u0275\u0275text(66, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th");
    \u0275\u0275text(68, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "th");
    \u0275\u0275text(70, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th");
    \u0275\u0275text(72, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "th");
    \u0275\u0275text(74, "Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "th");
    \u0275\u0275text(76, "Tentatives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "th");
    \u0275\u0275text(78, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th");
    \u0275\u0275text(80, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "tbody");
    \u0275\u0275template(82, SuperadminQuizResultsComponent_ng_container_1_tr_82_Template, 36, 33, "tr", 38)(83, SuperadminQuizResultsComponent_ng_container_1_tr_83_Template, 5, 0, "tr", 1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(84, SuperadminQuizResultsComponent_ng_container_1_div_84_Template, 9, 6, "div", 39);
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
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterSearch);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterStatus);
    \u0275\u0275advance(35);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedResults);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredResults.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
var SuperadminQuizResultsComponent = class _SuperadminQuizResultsComponent {
  quizResultsService;
  results = [];
  filteredResults = [];
  loading = false;
  filterSearch = "";
  filterStatus = "all";
  currentPage = 1;
  itemsPerPage = 10;
  constructor(quizResultsService) {
    this.quizResultsService = quizResultsService;
  }
  ngOnInit() {
    this.loadResults();
  }
  loadResults() {
    this.loading = true;
    this.quizResultsService.getAllResults().subscribe({
      next: (res) => {
        this.results = res.results;
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilters() {
    const s = this.filterSearch.toLowerCase();
    this.filteredResults = this.results.filter((r) => {
      const matchStatus = this.filterStatus === "all" || (this.filterStatus === "success" ? r.est_reussi : !r.est_reussi);
      const matchSearch = !s || r.quiz?.titre?.toLowerCase().includes(s) || r.user?.prenom?.toLowerCase().includes(s) || r.user?.nom?.toLowerCase().includes(s) || r.user?.name?.toLowerCase().includes(s) || r.user?.matricule?.toLowerCase().includes(s);
      return matchStatus && matchSearch;
    });
    this.currentPage = 1;
  }
  clearFilters() {
    this.filterSearch = "";
    this.filterStatus = "all";
    this.applyFilters();
  }
  get totalPages() {
    return Math.ceil(this.filteredResults.length / this.itemsPerPage);
  }
  get paginatedResults() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredResults.slice(start, start + this.itemsPerPage);
  }
  get pageEnd() {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredResults.length);
  }
  get pageNumbers() {
    const total = this.totalPages;
    if (total <= 7)
      return Array.from({ length: total }, (_, i) => i + 1);
    const p = this.currentPage;
    const pages = [1];
    if (p > 3)
      pages.push(-1);
    for (let i = Math.max(2, p - 1); i <= Math.min(total - 1, p + 1); i++)
      pages.push(i);
    if (p < total - 2)
      pages.push(-1);
    pages.push(total);
    return pages;
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages)
      this.currentPage = page;
  }
  parseFloat(v) {
    return parseFloat(v);
  }
  getSuccessRate() {
    if (!this.filteredResults.length)
      return 0;
    return Math.round(this.filteredResults.filter((r) => r.est_reussi).length / this.filteredResults.length * 100);
  }
  getAverageScore() {
    if (!this.filteredResults.length)
      return 0;
    return Math.round(this.filteredResults.reduce((s, r) => s + parseFloat(r.note), 0) / this.filteredResults.length * 100) / 100;
  }
  formatDate(d) {
    return new Date(d).toLocaleDateString("fr-FR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
  }
  getUserName(r) {
    if (r.user?.prenom && r.user?.nom)
      return `${r.user.prenom} ${r.user.nom}`;
    return r.user?.name || `Utilisateur #${r.user_id}`;
  }
  getInitials(r) {
    const name = this.getUserName(r);
    return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "?";
  }
  avatarColors = ["#E6F1FB,#0C447C", "#E1F5EE,#085041", "#EEEDFE,#3C3489", "#FAEEDA,#633806", "#F1EFE8,#444441"];
  getAvatarStyle(id) {
    const pair = this.avatarColors[id % this.avatarColors.length].split(",");
    return { bg: pair[0], color: pair[1] };
  }
  static \u0275fac = function SuperadminQuizResultsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminQuizResultsComponent)(\u0275\u0275directiveInject(QuizResultsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminQuizResultsComponent, selectors: [["app-superadmin-quiz-results"]], decls: 2, vars: 2, consts: [["class", "ip-loader", 4, "ngIf"], [4, "ngIf"], [1, "ip-loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-count"], [1, "ip-page-head__sub"], [1, "ip-kpi-row"], [1, "ip-kpi-card"], [1, "ip-kpi-icon"], [1, "isax", "isax-chart-1"], [1, "ip-kpi-label"], [1, "ip-kpi-value"], [1, "ip-kpi-icon", "ip-kpi-icon--success"], [1, "isax", "isax-tick-circle"], [1, "ip-kpi-icon", "ip-kpi-icon--gold"], [1, "isax", "isax-medal-star"], [1, "ip-kpi-unit"], [1, "ip-card", "ip-filter-card"], [1, "ip-filter-row"], [1, "ip-filter-group", "ip-filter-group--search"], [1, "ip-label"], [1, "ip-input-icon-wrap"], [1, "isax", "isax-search-normal", "ip-input-icon"], ["type", "text", "placeholder", "Nom employ\xE9, titre quiz\u2026", 1, "ip-input", "ip-input--icon", 3, "ngModelChange", "ngModel"], [1, "ip-filter-group"], [1, "ip-input", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "success"], ["value", "failed"], [1, "ip-filter-group", "ip-filter-group--action"], ["type", "button", 1, "ip-btn", "ip-btn--ghost", 3, "click"], [1, "isax", "isax-refresh"], [1, "ip-card"], [1, "table-responsive"], [1, "table", "ip-table"], [4, "ngFor", "ngForOf"], ["class", "ip-pagination", 4, "ngIf"], [1, "ip-id-badge"], [1, "ip-quiz-cell"], [1, "ip-quiz-title"], [1, "ip-user-cell"], [1, "ip-avatar"], [1, "ip-user-name"], ["class", "ip-user-sub", 4, "ngIf"], [1, "ip-score-cell"], [1, "ip-score-badge"], [1, "ip-progress-wrap"], [1, "ip-progress-bar"], [1, "text-muted"], [1, "ip-pill"], [1, "isax", "isax-repeat"], [1, "ip-status-badge"], [1, "fa-solid", "fa-circle"], [1, "ip-user-sub"], ["colspan", "8", 1, "ip-empty"], [1, "isax", "isax-search-normal"], [1, "ip-pagination"], [1, "ip-pagination__info"], [1, "ip-pagination__controls"], ["type", "button", 1, "ip-pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], [1, "isax", "isax-arrow-right-3"], ["class", "ip-pg-ellipsis", 4, "ngIf"], ["type", "button", "class", "ip-pg-btn", 3, "ip-pg-btn--active", "click", 4, "ngIf"], [1, "ip-pg-ellipsis"], ["type", "button", 1, "ip-pg-btn", 3, "click"]], template: function SuperadminQuizResultsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SuperadminQuizResultsComponent_div_0_Template, 4, 0, "div", 0)(1, SuperadminQuizResultsComponent_ng_container_1_Template, 85, 9, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.ip-kpi-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-kpi-icon--success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--gold[_ngcontent-%COMP%] {\n  background: #FDF8E7;\n  color: #D4AF37;\n}\n.ip-kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 4px;\n}\n.ip-kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-kpi-unit[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 400;\n  color: #6C757D;\n}\n.ip-filter-card[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  margin-bottom: 20px;\n}\n.ip-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-filter-group--action[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-id-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.ip-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-quiz-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.ip-quiz-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ip-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-score-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ip-score-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.ip-score-badge.ip-score--high[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-score-badge.ip-score--mid[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: #D97706;\n}\n.ip-score-badge.ip-score--low[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-progress-wrap[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 5px;\n  background: #E9ECEF;\n  border-radius: 99px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.ip-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n}\n.ip-progress-bar.ip-progress--high[_ngcontent-%COMP%] {\n  background: #059669;\n}\n.ip-progress-bar.ip-progress--mid[_ngcontent-%COMP%] {\n  background: #D97706;\n}\n.ip-progress-bar.ip-progress--low[_ngcontent-%COMP%] {\n  background: #DC3545;\n}\n.ip-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-status-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.ip-status-badge.ip-status-active[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-status-badge.ip-status-inactive[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #3D3D56;\n  display: block;\n  margin-bottom: 5px;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ip-input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ip-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n  border-color: #C0C5CC;\n}\n.ip-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding: 0 2px;\n}\n.ip-pagination__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ip-pg-btn[_ngcontent-%COMP%]:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  font-weight: 600;\n  cursor: default;\n}\n.ip-pg-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n/*# sourceMappingURL=superadmin-quiz-results.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminQuizResultsComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-quiz-results", imports: [CommonModule, FormsModule], template: `<!-- Loading -->\r
<div *ngIf="loading" class="ip-loader">\r
  <div class="spinner-border" role="status"><span class="visually-hidden">Chargement...</span></div>\r
</div>\r
\r
<ng-container *ngIf="!loading">\r
\r
  <!-- Page header -->\r
  <div class="ip-page-head">\r
    <div>\r
      <h5 class="ip-page-head__title">R\xE9sultats des quiz <span class="ip-count">{{ filteredResults.length }}</span></h5>\r
      <p class="ip-page-head__sub">Consultez et analysez les r\xE9sultats des \xE9valuations</p>\r
    </div>\r
  </div>\r
\r
  <!-- KPI cards -->\r
  <div class="ip-kpi-row">\r
    <div class="ip-kpi-card">\r
      <div class="ip-kpi-icon"><i class="isax isax-chart-1"></i></div>\r
      <div>\r
        <div class="ip-kpi-label">Total r\xE9sultats</div>\r
        <div class="ip-kpi-value">{{ filteredResults.length }}</div>\r
      </div>\r
    </div>\r
    <div class="ip-kpi-card">\r
      <div class="ip-kpi-icon ip-kpi-icon--success"><i class="isax isax-tick-circle"></i></div>\r
      <div>\r
        <div class="ip-kpi-label">Taux de r\xE9ussite</div>\r
        <div class="ip-kpi-value">{{ getSuccessRate() }}%</div>\r
      </div>\r
    </div>\r
    <div class="ip-kpi-card">\r
      <div class="ip-kpi-icon ip-kpi-icon--gold"><i class="isax isax-medal-star"></i></div>\r
      <div>\r
        <div class="ip-kpi-label">Note moyenne</div>\r
        <div class="ip-kpi-value">{{ getAverageScore() }}<span class="ip-kpi-unit">/100</span></div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Filters -->\r
  <div class="ip-card ip-filter-card">\r
    <div class="ip-filter-row">\r
      <div class="ip-filter-group ip-filter-group--search">\r
        <label class="ip-label">Recherche</label>\r
        <div class="ip-input-icon-wrap">\r
          <i class="isax isax-search-normal ip-input-icon"></i>\r
          <input type="text" class="ip-input ip-input--icon"\r
                 [(ngModel)]="filterSearch" (ngModelChange)="applyFilters()"\r
                 placeholder="Nom employ\xE9, titre quiz\u2026">\r
        </div>\r
      </div>\r
      <div class="ip-filter-group">\r
        <label class="ip-label">Statut</label>\r
        <select class="ip-input" [(ngModel)]="filterStatus" (ngModelChange)="applyFilters()">\r
          <option value="all">Tous</option>\r
          <option value="success">R\xE9ussi</option>\r
          <option value="failed">\xC9chou\xE9</option>\r
        </select>\r
      </div>\r
      <div class="ip-filter-group ip-filter-group--action">\r
        <label class="ip-label">&nbsp;</label>\r
        <button type="button" class="ip-btn ip-btn--ghost" (click)="clearFilters()">\r
          <i class="isax isax-refresh"></i> R\xE9initialiser\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Table -->\r
  <div class="ip-card">\r
    <div class="table-responsive">\r
      <table class="table ip-table">\r
        <thead>\r
          <tr>\r
            <th>#</th>\r
            <th>Quiz</th>\r
            <th>Employ\xE9</th>\r
            <th>Score</th>\r
            <th>Points</th>\r
            <th>Tentatives</th>\r
            <th>Statut</th>\r
            <th>Date</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let result of paginatedResults">\r
            <td><span class="ip-id-badge">#{{ result.id }}</span></td>\r
            <td>\r
              <div class="ip-quiz-cell">\r
                <span class="ip-quiz-title">{{ result.quiz?.titre || ('Quiz #' + result.quiz_id) }}</span>\r
              </div>\r
            </td>\r
            <td>\r
              <div class="ip-user-cell">\r
                <div class="ip-avatar"\r
                     [style.background]="getAvatarStyle(result.user_id).bg"\r
                     [style.color]="getAvatarStyle(result.user_id).color">\r
                  {{ getInitials(result) }}\r
                </div>\r
                <div>\r
                  <div class="ip-user-name">{{ getUserName(result) }}</div>\r
                  <div class="ip-user-sub" *ngIf="result.user?.matricule">{{ result.user?.matricule }}</div>\r
                </div>\r
              </div>\r
            </td>\r
            <td>\r
              <div class="ip-score-cell">\r
                <span class="ip-score-badge"\r
                      [class.ip-score--high]="parseFloat(result.note) >= 80"\r
                      [class.ip-score--mid]="parseFloat(result.note) >= 60 && parseFloat(result.note) < 80"\r
                      [class.ip-score--low]="parseFloat(result.note) < 60">\r
                  {{ result.note }}/100\r
                </span>\r
                <div class="ip-progress-wrap">\r
                  <div class="ip-progress-bar"\r
                       [style.width.%]="parseFloat(result.note)"\r
                       [class.ip-progress--high]="parseFloat(result.note) >= 80"\r
                       [class.ip-progress--mid]="parseFloat(result.note) >= 60 && parseFloat(result.note) < 80"\r
                       [class.ip-progress--low]="parseFloat(result.note) < 60">\r
                  </div>\r
                </div>\r
              </div>\r
            </td>\r
            <td><span class="text-muted">{{ result.points_obtenus }}/{{ result.points_total }}</span></td>\r
            <td>\r
              <span class="ip-pill">\r
                <i class="isax isax-repeat"></i> {{ result.nombre_tentatives }}\r
              </span>\r
            </td>\r
            <td>\r
              <span class="ip-status-badge"\r
                    [class.ip-status-active]="result.est_reussi"\r
                    [class.ip-status-inactive]="!result.est_reussi">\r
                <i class="fa-solid fa-circle"></i>\r
                {{ result.est_reussi ? 'R\xE9ussi' : '\xC9chou\xE9' }}\r
              </span>\r
            </td>\r
            <td><span class="text-muted">{{ formatDate(result.created_at) }}</span></td>\r
          </tr>\r
          <tr *ngIf="filteredResults.length === 0">\r
            <td colspan="8" class="ip-empty">\r
              <i class="isax isax-search-normal"></i>\r
              <span>Aucun r\xE9sultat trouv\xE9</span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div *ngIf="totalPages > 1" class="ip-pagination">\r
    <span class="ip-pagination__info">\r
      {{ (currentPage - 1) * itemsPerPage + 1 }}\u2013{{ pageEnd }} sur {{ filteredResults.length }} r\xE9sultats\r
    </span>\r
    <div class="ip-pagination__controls">\r
      <button type="button" class="ip-pg-btn" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)">\r
        <i class="isax isax-arrow-left-2"></i>\r
      </button>\r
      <ng-container *ngFor="let p of pageNumbers">\r
        <span *ngIf="p === -1" class="ip-pg-ellipsis">\u2026</span>\r
        <button type="button" *ngIf="p !== -1" class="ip-pg-btn"\r
                [class.ip-pg-btn--active]="p === currentPage"\r
                (click)="goToPage(p)">{{ p }}</button>\r
      </ng-container>\r
      <button type="button" class="ip-pg-btn" [disabled]="currentPage === totalPages" (click)="goToPage(currentPage + 1)">\r
        <i class="isax isax-arrow-right-3"></i>\r
      </button>\r
    </div>\r
  </div>\r
\r
</ng-container>\r
`, styles: ["/* src/app/features/superadmin/superadmin-quiz-results/superadmin-quiz-results.component.scss */\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-kpi-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card {\n  flex: 1;\n  min-width: 180px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.ip-kpi-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-kpi-icon--success {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--gold {\n  background: #FDF8E7;\n  color: #D4AF37;\n}\n.ip-kpi-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 4px;\n}\n.ip-kpi-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-kpi-unit {\n  font-size: 13px;\n  font-weight: 400;\n  color: #6C757D;\n}\n.ip-filter-card {\n  padding: 16px 20px;\n  margin-bottom: 20px;\n}\n.ip-filter-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-filter-group--action {\n  flex: 0 0 auto;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-id-badge {\n  display: inline-block;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.ip-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-pill i {\n  font-size: 12px;\n}\n.ip-quiz-cell {\n  display: flex;\n  flex-direction: column;\n}\n.ip-quiz-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ip-user-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-score-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ip-score-badge {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.ip-score-badge.ip-score--high {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-score-badge.ip-score--mid {\n  background: #FFFBEB;\n  color: #D97706;\n}\n.ip-score-badge.ip-score--low {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-progress-wrap {\n  width: 60px;\n  height: 5px;\n  background: #E9ECEF;\n  border-radius: 99px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.ip-progress-bar {\n  height: 100%;\n  border-radius: 99px;\n}\n.ip-progress-bar.ip-progress--high {\n  background: #059669;\n}\n.ip-progress-bar.ip-progress--mid {\n  background: #D97706;\n}\n.ip-progress-bar.ip-progress--low {\n  background: #DC3545;\n}\n.ip-status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-status-badge i {\n  font-size: 8px;\n}\n.ip-status-badge.ip-status-active {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-status-badge.ip-status-inactive {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-empty {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #3D3D56;\n  display: block;\n  margin-bottom: 5px;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon {\n  padding-left: 34px;\n}\n.ip-input-icon-wrap {\n  position: relative;\n}\n.ip-input-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 16px;\n}\n.ip-btn--ghost {\n  background: transparent;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n  border-color: #C0C5CC;\n}\n.ip-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding: 0 2px;\n}\n.ip-pagination__info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn i {\n  font-size: 13px;\n}\n.ip-pg-btn:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  font-weight: 600;\n  cursor: default;\n}\n.ip-pg-btn[disabled] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n/*# sourceMappingURL=superadmin-quiz-results.component.css.map */\n"] }]
  }], () => [{ type: QuizResultsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminQuizResultsComponent, { className: "SuperadminQuizResultsComponent", filePath: "app/features/superadmin/superadmin-quiz-results/superadmin-quiz-results.component.ts", lineNumber: 12 });
})();
export {
  SuperadminQuizResultsComponent
};
//# sourceMappingURL=chunk-ZIDDE24L.js.map
