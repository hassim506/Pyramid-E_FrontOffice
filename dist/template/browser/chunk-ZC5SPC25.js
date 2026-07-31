import {
  DatePickerModule
} from "./chunk-WO7L6M4Q.js";
import {
  QuizService
} from "./chunk-3C7UQEN3.js";
import "./chunk-T567WOGV.js";
import "./chunk-K7E3GT3E.js";
import "./chunk-BRO54S2I.js";
import "./chunk-EZB4A4KZ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZGFJXD53.js";
import {
  RouterLink
} from "./chunk-UFFO2UKW.js";
import "./chunk-U7UKDAOZ.js";
import "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  Subscription,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-BSBCM3BI.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-quiz/instructor-quiz.component.ts
var _c0 = (a0) => ["/instructor/instructor-quiz-questions", a0];
function InstructorQuizComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorQuizComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 29);
    \u0275\u0275listener("click", function InstructorQuizComponent_div_1_Template_button_click_2_listener() {
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
function InstructorQuizComponent_ng_container_2_tr_32_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quiz_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(quiz_r5.description);
  }
}
function InstructorQuizComponent_ng_container_2_tr_32_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quiz_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", quiz_r5.duree_minutes, " min ");
  }
}
function InstructorQuizComponent_ng_container_2_tr_32_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function InstructorQuizComponent_ng_container_2_tr_32_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quiz_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", quiz_r5.score_minimum, "%");
  }
}
function InstructorQuizComponent_ng_container_2_tr_32_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function InstructorQuizComponent_ng_container_2_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 39)(3, "div", 40);
    \u0275\u0275element(4, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, InstructorQuizComponent_ng_container_2_tr_32_div_8_Template, 2, 1, "div", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "span", 44);
    \u0275\u0275element(11, "i", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, InstructorQuizComponent_ng_container_2_tr_32_span_14_Template, 3, 1, "span", 46)(15, InstructorQuizComponent_ng_container_2_tr_32_span_15_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, InstructorQuizComponent_ng_container_2_tr_32_span_17_Template, 2, 1, "span", 48)(18, InstructorQuizComponent_ng_container_2_tr_32_span_18_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 49);
    \u0275\u0275element(21, "i", 50);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "span", 51);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "div", 52)(29, "button", 53);
    \u0275\u0275listener("click", function InstructorQuizComponent_ng_container_2_tr_32_Template_button_click_29_listener() {
      const quiz_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetailsModal(quiz_r5));
    });
    \u0275\u0275element(30, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 55);
    \u0275\u0275listener("click", function InstructorQuizComponent_ng_container_2_tr_32_Template_button_click_31_listener() {
      const quiz_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(quiz_r5));
    });
    \u0275\u0275element(32, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 56);
    \u0275\u0275listener("click", function InstructorQuizComponent_ng_container_2_tr_32_Template_button_click_33_listener() {
      const quiz_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archiveQuiz(quiz_r5));
    });
    \u0275\u0275element(34, "i", 57);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const quiz_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(quiz_r5.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", quiz_r5.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFormationTitre(quiz_r5), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", quiz_r5.duree_minutes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !quiz_r5.duree_minutes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", quiz_r5.score_minimum);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !quiz_r5.score_minimum);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ip-status-active", quiz_r5.is_active)("ip-status-inactive", !quiz_r5.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", quiz_r5.is_active ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 13, quiz_r5.created_at, "dd/MM/yyyy"));
  }
}
function InstructorQuizComponent_ng_container_2_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 61);
    \u0275\u0275element(2, "i", 41);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun quiz trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorQuizComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30)(2, "div")(3, "h5", 31);
    \u0275\u0275text(4, "Quiz & \xE9valuations ");
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 33);
    \u0275\u0275text(8, "G\xE9rez vos quiz et consultez les r\xE9sultats");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 34);
    \u0275\u0275listener("click", function InstructorQuizComponent_ng_container_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateModal());
    });
    \u0275\u0275element(10, "i", 23);
    \u0275\u0275text(11, " Nouveau quiz ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 35)(13, "div", 36)(14, "table", 37)(15, "thead")(16, "tr")(17, "th");
    \u0275\u0275text(18, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Score min.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275template(32, InstructorQuizComponent_ng_container_2_tr_32_Template, 35, 16, "tr", 38)(33, InstructorQuizComponent_ng_container_2_tr_33_Template, 5, 0, "tr", 2);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.quizzes.length);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedQuizzes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quizzes.length === 0);
  }
}
function InstructorQuizComponent_div_3_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function InstructorQuizComponent_div_3_ng_container_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function InstructorQuizComponent_div_3_ng_container_6_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const p_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ip-pg-btn--active", p_r8 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r8);
  }
}
function InstructorQuizComponent_div_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InstructorQuizComponent_div_3_ng_container_6_span_1_Template, 2, 0, "span", 68)(2, InstructorQuizComponent_div_3_ng_container_6_button_2_Template, 2, 3, "button", 69);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r8 === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r8 !== -1);
  }
}
function InstructorQuizComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "button", 65);
    \u0275\u0275listener("click", function InstructorQuizComponent_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InstructorQuizComponent_div_3_ng_container_6_Template, 3, 2, "ng-container", 38);
    \u0275\u0275elementStart(7, "button", 65);
    \u0275\u0275listener("click", function InstructorQuizComponent_div_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", (ctx_r1.currentPage - 1) * ctx_r1.itemsPerPage + 1, "\u2013", ctx_r1.pageEnd, " sur ", ctx_r1.filteredQuizzes.length, " quiz ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function InstructorQuizComponent_div_6_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 75);
    \u0275\u0275text(5, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedQuiz.description);
  }
}
function InstructorQuizComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275element(3, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h5", 12);
    \u0275\u0275text(6, "D\xE9tails du quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 13);
    \u0275\u0275text(8, "Informations compl\xE8tes sur le quiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "div", 15);
    \u0275\u0275elementStart(11, "div", 72)(12, "div", 73)(13, "div", 74);
    \u0275\u0275element(14, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "div", 75);
    \u0275\u0275text(17, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 76);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, InstructorQuizComponent_div_6_div_20_Template, 8, 1, "div", 77);
    \u0275\u0275elementStart(21, "div", 78)(22, "div", 79)(23, "div", 74);
    \u0275\u0275element(24, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div")(26, "div", 75);
    \u0275\u0275text(27, "Formation associ\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 76);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 79)(31, "div", 74);
    \u0275\u0275element(32, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div")(34, "div", 75);
    \u0275\u0275text(35, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 76);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 78)(39, "div", 79)(40, "div", 74);
    \u0275\u0275element(41, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div")(43, "div", 75);
    \u0275\u0275text(44, "Score minimum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 76);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 79)(48, "div", 74);
    \u0275\u0275element(49, "i", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div")(51, "div", 75);
    \u0275\u0275text(52, "Tentatives max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 76);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 78)(56, "div", 79)(57, "div", 74);
    \u0275\u0275element(58, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div")(60, "div", 75);
    \u0275\u0275text(61, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div")(63, "span", 49);
    \u0275\u0275element(64, "i", 50);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(66, "div", 79)(67, "div", 74);
    \u0275\u0275element(68, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div")(70, "div", 75);
    \u0275\u0275text(71, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 76);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "date");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(75, "div", 15);
    \u0275\u0275elementStart(76, "div", 17)(77, "button", 18);
    \u0275\u0275text(78, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "a", 84);
    \u0275\u0275element(80, "i", 54);
    \u0275\u0275text(81, " Voir les questions ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(ctx_r1.selectedQuiz.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedQuiz.description);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Formation #", ctx_r1.selectedQuiz.formation_id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedQuiz.duree_minutes ? ctx_r1.selectedQuiz.duree_minutes + " min" : "Non d\xE9finie");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.selectedQuiz.score_minimum ? ctx_r1.selectedQuiz.score_minimum + "%" : "Non d\xE9fini");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedQuiz.tentatives_max ?? "Illimit\xE9es");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("ip-status-active", ctx_r1.selectedQuiz.is_active)("ip-status-inactive", !ctx_r1.selectedQuiz.is_active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedQuiz.is_active ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 13, ctx_r1.selectedQuiz.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, ctx_r1.selectedQuiz.id));
  }
}
function InstructorQuizComponent_div_20_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editError);
  }
}
function InstructorQuizComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "form", 86)(2, "div", 87)(3, "label", 88);
    \u0275\u0275text(4, "Titre ");
    \u0275\u0275elementStart(5, "span", 89);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 87)(9, "label", 88);
    \u0275\u0275text(10, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "textarea", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 92)(13, "div", 93)(14, "label", 88);
    \u0275\u0275text(15, "Dur\xE9e (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 94);
    \u0275\u0275element(17, "i", 95)(18, "input", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 93)(20, "label", 88);
    \u0275\u0275text(21, "Score minimum (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 94);
    \u0275\u0275element(23, "i", 97)(24, "input", 98);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 92)(26, "div", 93)(27, "label", 88);
    \u0275\u0275text(28, "Tentatives maximum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 94);
    \u0275\u0275element(30, "i", 99)(31, "input", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 93)(33, "label", 88);
    \u0275\u0275text(34, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 101)(36, "span", 102);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "label", 103);
    \u0275\u0275element(39, "input", 104)(40, "span", 105);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(41, InstructorQuizComponent_div_20_div_41_Template, 2, 1, "div", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance(36);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r1.editForm.get("is_active")) == null ? null : tmp_2_0.value) ? "Actif" : "Inactif");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editError);
  }
}
function InstructorQuizComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 108);
  }
}
function InstructorQuizComponent_i_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 109);
  }
}
function InstructorQuizComponent_div_42_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275text(1, "Le titre est obligatoire (3 caract\xE8res min.)");
    \u0275\u0275elementEnd();
  }
}
function InstructorQuizComponent_div_42_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.createError);
  }
}
function InstructorQuizComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "form", 86)(2, "div", 87)(3, "label", 88);
    \u0275\u0275text(4, "Titre ");
    \u0275\u0275elementStart(5, "span", 89);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 90);
    \u0275\u0275template(8, InstructorQuizComponent_div_42_div_8_Template, 2, 0, "div", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 87)(10, "label", 88);
    \u0275\u0275text(11, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 92)(14, "div", 93)(15, "label", 88);
    \u0275\u0275text(16, "Dur\xE9e (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 94);
    \u0275\u0275element(18, "i", 95)(19, "input", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 93)(21, "label", 88);
    \u0275\u0275text(22, "Score minimum (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 94);
    \u0275\u0275element(24, "i", 97)(25, "input", 98);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 92)(27, "div", 93)(28, "label", 88);
    \u0275\u0275text(29, "Tentatives maximum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 94);
    \u0275\u0275element(31, "i", 99)(32, "input", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 93)(34, "label", 88);
    \u0275\u0275text(35, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 101)(37, "span", 102);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label", 103);
    \u0275\u0275element(40, "input", 104)(41, "span", 105);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(42, InstructorQuizComponent_div_42_div_42_Template, 2, 1, "div", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.createForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.createForm.get("titre")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.createForm.get("titre")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(30);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r1.createForm.get("is_active")) == null ? null : tmp_3_0.value) ? "Actif" : "Inactif");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.createError);
  }
}
function InstructorQuizComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 108);
  }
}
function InstructorQuizComponent_i_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 112);
  }
}
var InstructorQuizComponent = class _InstructorQuizComponent {
  quizService;
  fb;
  quizzes = [];
  filteredQuizzes = [];
  loading = false;
  error = "";
  saving = false;
  editError = "";
  createError = "";
  currentPage = 1;
  itemsPerPage = 10;
  selectedQuiz = null;
  editForm = null;
  createForm = null;
  detailsModal;
  editModal;
  createModal;
  subscription = new Subscription();
  constructor(quizService, fb) {
    this.quizService = quizService;
    this.fb = fb;
  }
  ngOnInit() {
    this.loadQuizzes();
    setTimeout(() => {
      this.detailsModal = new bootstrap.Modal(document.getElementById("quiz_details_modal"));
      this.editModal = new bootstrap.Modal(document.getElementById("quiz_edit_modal"));
      this.createModal = new bootstrap.Modal(document.getElementById("quiz_create_modal"));
    }, 100);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  loadQuizzes() {
    this.loading = true;
    this.error = "";
    const sub = this.quizService.getQuizzes().subscribe({
      next: (quizzes) => {
        this.quizzes = quizzes.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        this.filteredQuizzes = [...this.quizzes];
        this.currentPage = 1;
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
  openDetailsModal(quiz) {
    this.selectedQuiz = quiz;
    this.detailsModal?.show();
  }
  openEditModal(quiz) {
    this.selectedQuiz = quiz;
    this.editError = "";
    this.editForm = this.fb.group({
      titre: [quiz.titre, [Validators.required, Validators.minLength(3)]],
      description: [quiz.description ?? ""],
      duree_minutes: [quiz.duree_minutes ?? null],
      score_minimum: [quiz.score_minimum ?? null],
      tentatives_max: [quiz.tentatives_max ?? null],
      is_active: [quiz.is_active]
    });
    this.editModal?.show();
  }
  openCreateModal() {
    this.createError = "";
    this.createForm = this.fb.group({
      titre: ["", [Validators.required, Validators.minLength(3)]],
      description: [""],
      duree_minutes: [null],
      score_minimum: [null],
      tentatives_max: [null],
      is_active: [true]
    });
    this.createModal?.show();
  }
  saveCreate() {
    if (!this.createForm || this.createForm.invalid)
      return;
    this.saving = true;
    this.createError = "";
    const sub = this.quizService.createQuiz(this.createForm.value).subscribe({
      next: (created) => {
        this.quizzes = [created, ...this.quizzes];
        this.saving = false;
        this.createModal?.hide();
      },
      error: (err) => {
        this.createError = err?.error?.message || "Erreur lors de la cr\xE9ation";
        this.saving = false;
      }
    });
    this.subscription.add(sub);
  }
  saveEdit() {
    if (!this.editForm || this.editForm.invalid || !this.selectedQuiz)
      return;
    this.saving = true;
    this.editError = "";
    const payload = __spreadValues({}, this.editForm.value);
    const sub = this.quizService.updateQuiz(this.selectedQuiz.id, payload).subscribe({
      next: (updated) => {
        const idx = this.quizzes.findIndex((q) => q.id === this.selectedQuiz.id);
        if (idx !== -1)
          this.quizzes[idx] = __spreadValues(__spreadValues({}, this.quizzes[idx]), updated);
        this.saving = false;
        this.editModal?.hide();
      },
      error: (err) => {
        this.editError = "Erreur lors de la sauvegarde";
        this.saving = false;
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
  archiveQuiz(quiz) {
    if (!confirm(`Archiver le quiz "${quiz.titre}" ?`))
      return;
    const sub = this.quizService.deleteQuiz(quiz.id).subscribe({
      next: () => {
        this.quizzes = this.quizzes.filter((q) => q.id !== quiz.id);
      },
      error: (err) => {
        this.error = "Erreur lors de l'archivage";
        console.error(err);
      }
    });
    this.subscription.add(sub);
  }
  getStatusClass(quiz) {
    return quiz.is_active ? "badge-success" : "badge-secondary";
  }
  getStatusText(quiz) {
    return quiz.is_active ? "Actif" : "Inactif";
  }
  getFormationTitre(quiz) {
    return quiz.formation?.titre || quiz.formation?.nom || `Formation #${quiz.formation_id}`;
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.filteredQuizzes.length / this.itemsPerPage));
  }
  get paginatedQuizzes() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredQuizzes.slice(start, start + this.itemsPerPage);
  }
  get pageEnd() {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredQuizzes.length);
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
  static \u0275fac = function InstructorQuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorQuizComponent)(\u0275\u0275directiveInject(QuizService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorQuizComponent, selectors: [["app-instructor-quiz"]], decls: 51, vars: 13, consts: [["class", "ip-loader", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [4, "ngIf"], ["class", "ip-pagination", 4, "ngIf"], ["id", "quiz_details_modal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "ip-modal-dialog"], ["class", "modal-content ip-modal-content", 4, "ngIf"], ["id", "quiz_edit_modal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "ip-modal-content"], [1, "ip-modal-header"], [1, "ip-modal-icon"], [1, "isax", "isax-edit-2"], [1, "ip-modal-title"], [1, "ip-modal-sub"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close", "ms-auto"], [1, "ip-modal-divider"], ["class", "ip-modal-body", 4, "ngIf"], [1, "ip-modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "ip-btn", "ip-btn--ghost"], ["type", "button", 1, "ip-btn", "ip-btn--primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "isax isax-tick-circle me-1", 4, "ngIf"], ["id", "quiz_create_modal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "isax", "isax-add-circle"], ["class", "isax isax-add-circle me-1", 4, "ngIf"], [1, "ip-loader"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-count"], [1, "ip-page-head__sub"], ["type", "button", 1, "ip-btn", "ip-btn--primary", 3, "click"], [1, "ip-card"], [1, "table-responsive"], [1, "table", "ip-table"], [4, "ngFor", "ngForOf"], [1, "ip-quiz-cell"], [1, "ip-quiz-icon"], [1, "isax", "isax-award"], [1, "ip-quiz-title"], ["class", "ip-quiz-desc", 4, "ngIf"], [1, "ip-pill"], [1, "isax", "isax-book-1"], ["class", "ip-pill", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["class", "ip-score", 4, "ngIf"], [1, "ip-status-badge"], [1, "fa-solid", "fa-circle"], [1, "text-muted"], [1, "ip-actions"], ["type", "button", "title", "D\xE9tails", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-eye"], ["type", "button", "title", "Modifier", 1, "ip-action-btn", 3, "click"], ["type", "button", "title", "Archiver", 1, "ip-action-btn", "ip-action-btn--arch", 3, "click"], [1, "isax", "isax-archive"], [1, "ip-quiz-desc"], [1, "isax", "isax-clock"], [1, "ip-score"], ["colspan", "7", 1, "ip-empty"], [1, "ip-pagination"], [1, "ip-pagination__info"], [1, "ip-pagination__controls"], ["type", "button", 1, "ip-pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], [1, "isax", "isax-arrow-right-3"], ["class", "ip-pg-ellipsis", 4, "ngIf"], ["type", "button", "class", "ip-pg-btn", 3, "ip-pg-btn--active", "click", 4, "ngIf"], [1, "ip-pg-ellipsis"], ["type", "button", 1, "ip-pg-btn", 3, "click"], [1, "ip-modal-body"], [1, "ip-detail-block"], [1, "ip-detail-icon-wrap"], [1, "ip-detail-label"], [1, "ip-detail-value"], ["class", "ip-detail-block", 4, "ngIf"], [1, "ip-detail-row"], [1, "ip-detail-block", "ip-detail-block--half"], [1, "isax", "isax-medal-star"], [1, "isax", "isax-repeat"], [1, "isax", "isax-status"], [1, "isax", "isax-calendar"], ["data-bs-dismiss", "modal", 1, "ip-btn", "ip-btn--primary", 3, "routerLink"], [1, "isax", "isax-document-text"], [3, "formGroup"], [1, "ip-field"], [1, "ip-label"], [1, "ip-required"], ["type", "text", "formControlName", "titre", "placeholder", "Titre du quiz", 1, "ip-input"], ["formControlName", "description", "rows", "3", "placeholder", "Description du quiz (optionnel)", 1, "ip-input", "ip-textarea"], [1, "ip-field-row"], [1, "ip-field", "ip-field--half"], [1, "ip-input-icon-wrap"], [1, "isax", "isax-clock", "ip-input-icon"], ["type", "number", "formControlName", "duree_minutes", "placeholder", "Ex. : 30", "min", "1", 1, "ip-input", "ip-input--icon"], [1, "isax", "isax-medal-star", "ip-input-icon"], ["type", "number", "formControlName", "score_minimum", "placeholder", "Ex. : 60", "min", "0", "max", "100", 1, "ip-input", "ip-input--icon"], [1, "isax", "isax-repeat", "ip-input-icon"], ["type", "number", "formControlName", "tentatives_max", "placeholder", "Illimit\xE9es si vide", "min", "1", 1, "ip-input", "ip-input--icon"], [1, "ip-toggle-row"], [1, "ip-toggle-label"], [1, "ip-toggle"], ["type", "checkbox", "formControlName", "is_active"], [1, "ip-toggle-slider"], ["class", "alert alert-danger mt-2 py-2 small", 4, "ngIf"], [1, "alert", "alert-danger", "mt-2", "py-2", "small"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "isax", "isax-tick-circle", "me-1"], ["class", "ip-field-error", 4, "ngIf"], [1, "ip-field-error"], [1, "isax", "isax-add-circle", "me-1"]], template: function InstructorQuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorQuizComponent_div_0_Template, 4, 0, "div", 0)(1, InstructorQuizComponent_div_1_Template, 3, 1, "div", 1)(2, InstructorQuizComponent_ng_container_2_Template, 34, 3, "ng-container", 2)(3, InstructorQuizComponent_div_3_Template, 9, 6, "div", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
      \u0275\u0275template(6, InstructorQuizComponent_div_6_Template, 82, 18, "div", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 5)(9, "div", 8)(10, "div", 9)(11, "div", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div")(14, "h5", 12);
      \u0275\u0275text(15, "Modifier le quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 13);
      \u0275\u0275text(17, "Mettez \xE0 jour les informations du quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(18, "button", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "div", 15);
      \u0275\u0275template(20, InstructorQuizComponent_div_20_Template, 42, 3, "div", 16);
      \u0275\u0275element(21, "div", 15);
      \u0275\u0275elementStart(22, "div", 17)(23, "button", 18);
      \u0275\u0275text(24, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 19);
      \u0275\u0275listener("click", function InstructorQuizComponent_Template_button_click_25_listener() {
        return ctx.saveEdit();
      });
      \u0275\u0275template(26, InstructorQuizComponent_span_26_Template, 1, 0, "span", 20)(27, InstructorQuizComponent_i_27_Template, 1, 0, "i", 21);
      \u0275\u0275text(28, " Enregistrer ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(29, "div", 22)(30, "div", 5)(31, "div", 8)(32, "div", 9)(33, "div", 10);
      \u0275\u0275element(34, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div")(36, "h5", 12);
      \u0275\u0275text(37, "Nouveau quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 13);
      \u0275\u0275text(39, "Cr\xE9er un nouveau quiz ou \xE9valuation");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(40, "button", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "div", 15);
      \u0275\u0275template(42, InstructorQuizComponent_div_42_Template, 43, 4, "div", 16);
      \u0275\u0275element(43, "div", 15);
      \u0275\u0275elementStart(44, "div", 17)(45, "button", 18);
      \u0275\u0275text(46, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 19);
      \u0275\u0275listener("click", function InstructorQuizComponent_Template_button_click_47_listener() {
        return ctx.saveCreate();
      });
      \u0275\u0275template(48, InstructorQuizComponent_span_48_Template, 1, 0, "span", 20)(49, InstructorQuizComponent_i_49_Template, 1, 0, "i", 24);
      \u0275\u0275text(50, " Cr\xE9er le quiz ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading && ctx.quizzes.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading || ctx.quizzes.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.selectedQuiz);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.editForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", (ctx.editForm == null ? null : ctx.editForm.invalid) || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.saving);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.createForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", (ctx.createForm == null ? null : ctx.createForm.invalid) || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.saving);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, DatePickerModule, DatePipe], styles: ['\n\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ip-btn--primary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-quiz-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.ip-quiz-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.ip-quiz-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-quiz-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 2px;\n  max-width: 220px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ip-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-score[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #ECFDF5;\n  color: #059669;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-status-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.ip-status-badge.ip-status-active[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-status-badge.ip-status-inactive[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn.text-danger[_ngcontent-%COMP%]:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-modal-dialog[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.ip-modal-content[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.ip-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.ip-modal-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-modal-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 2px;\n}\n.ip-modal-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-modal-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E9ECEF;\n}\n.ip-modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.ip-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n}\n.ip-detail-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-detail-block[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-detail-block--half[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.ip-detail-icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #F8F9FA;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.ip-detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n}\n.ip-detail-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-field[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.ip-field-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.ip-field--half[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #3D3D56;\n  display: block;\n  margin-bottom: 5px;\n}\n.ip-required[_ngcontent-%COMP%] {\n  color: #DC3545;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ip-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 72px;\n}\n.ip-input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ip-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-top: 6px;\n}\n.ip-toggle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n}\n.ip-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: #DEE2E6;\n  border-radius: 22px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.ip-toggle-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n.ip-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-toggle-slider[_ngcontent-%COMP%] {\n  background: #D4AF37;\n}\n.ip-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-toggle-slider[_ngcontent-%COMP%]::before {\n  transform: translateX(16px);\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n  border-color: #C0C5CC;\n}\n.ip-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding: 0 2px;\n}\n.ip-pagination__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ip-pg-btn[_ngcontent-%COMP%]:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  font-weight: 600;\n  cursor: default;\n}\n.ip-pg-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n/*# sourceMappingURL=instructor-quiz.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorQuizComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-quiz", standalone: true, imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, DatePickerModule], template: `<!-- Loading -->\r
<div *ngIf="loading && quizzes.length === 0" class="ip-loader">\r
  <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Chargement...</span></div>\r
</div>\r
\r
<!-- Error -->\r
<div *ngIf="error" class="alert alert-danger alert-dismissible">\r
  {{ error }}\r
  <button type="button" class="btn-close" (click)="error = ''"></button>\r
</div>\r
\r
<ng-container *ngIf="!loading || quizzes.length > 0">\r
\r
  <!-- Page header -->\r
  <div class="ip-page-head">\r
    <div>\r
      <h5 class="ip-page-head__title">Quiz & \xE9valuations <span class="ip-count">{{ quizzes.length }}</span></h5>\r
      <p class="ip-page-head__sub">G\xE9rez vos quiz et consultez les r\xE9sultats</p>\r
    </div>\r
    <button type="button" class="ip-btn ip-btn--primary" (click)="openCreateModal()">\r
      <i class="isax isax-add-circle"></i> Nouveau quiz\r
    </button>\r
  </div>\r
\r
  <!-- Table -->\r
  <div class="ip-card">\r
    <div class="table-responsive">\r
      <table class="table ip-table">\r
        <thead>\r
          <tr>\r
            <th>Quiz</th>\r
            <th>Formation</th>\r
            <th>Dur\xE9e</th>\r
            <th>Score min.</th>\r
            <th>Statut</th>\r
            <th>Cr\xE9\xE9 le</th>\r
            <th>Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let quiz of paginatedQuizzes">\r
            <td>\r
              <div class="ip-quiz-cell">\r
                <div class="ip-quiz-icon"><i class="isax isax-award"></i></div>\r
                <div>\r
                  <div class="ip-quiz-title">{{ quiz.titre }}</div>\r
                  <div class="ip-quiz-desc" *ngIf="quiz.description">{{ quiz.description }}</div>\r
                </div>\r
              </div>\r
            </td>\r
            <td>\r
              <span class="ip-pill">\r
                <i class="isax isax-book-1"></i> {{ getFormationTitre(quiz) }}\r
              </span>\r
            </td>\r
            <td>\r
              <span *ngIf="quiz.duree_minutes" class="ip-pill">\r
                <i class="isax isax-clock"></i> {{ quiz.duree_minutes }} min\r
              </span>\r
              <span *ngIf="!quiz.duree_minutes" class="text-muted">\u2014</span>\r
            </td>\r
            <td>\r
              <span *ngIf="quiz.score_minimum" class="ip-score">{{ quiz.score_minimum }}%</span>\r
              <span *ngIf="!quiz.score_minimum" class="text-muted">\u2014</span>\r
            </td>\r
            <td>\r
              <span class="ip-status-badge" [class.ip-status-active]="quiz.is_active" [class.ip-status-inactive]="!quiz.is_active">\r
                <i class="fa-solid fa-circle"></i>\r
                {{ quiz.is_active ? 'Actif' : 'Inactif' }}\r
              </span>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ quiz.created_at | date:'dd/MM/yyyy' }}</span>\r
            </td>\r
            <td>\r
              <div class="ip-actions">\r
                <button type="button" class="ip-action-btn" title="D\xE9tails" (click)="openDetailsModal(quiz)">\r
                  <i class="isax isax-eye"></i>\r
                </button>\r
                <button type="button" class="ip-action-btn" title="Modifier" (click)="openEditModal(quiz)">\r
                  <i class="isax isax-edit-2"></i>\r
                </button>\r
                <button type="button" class="ip-action-btn ip-action-btn--arch" title="Archiver"\r
                        (click)="archiveQuiz(quiz)">\r
                  <i class="isax isax-archive"></i>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
          <tr *ngIf="quizzes.length === 0">\r
            <td colspan="7" class="ip-empty">\r
              <i class="isax isax-award"></i>\r
              <span>Aucun quiz trouv\xE9</span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
</ng-container>\r
\r
<!-- Pagination -->\r
<div *ngIf="totalPages > 1" class="ip-pagination">\r
  <span class="ip-pagination__info">\r
    {{ (currentPage - 1) * itemsPerPage + 1 }}\u2013{{ pageEnd }} sur {{ filteredQuizzes.length }} quiz\r
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
<!-- \u2500\u2500 MODAL D\xC9TAILS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="modal fade" id="quiz_details_modal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-dialog-centered ip-modal-dialog">\r
    <div class="modal-content ip-modal-content" *ngIf="selectedQuiz">\r
\r
      <!-- Header -->\r
      <div class="ip-modal-header">\r
        <div class="ip-modal-icon">\r
          <i class="isax isax-award"></i>\r
        </div>\r
        <div>\r
          <h5 class="ip-modal-title">D\xE9tails du quiz</h5>\r
          <p class="ip-modal-sub">Informations compl\xE8tes sur le quiz</p>\r
        </div>\r
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal"></button>\r
      </div>\r
\r
      <div class="ip-modal-divider"></div>\r
\r
      <!-- Body -->\r
      <div class="ip-modal-body">\r
\r
        <div class="ip-detail-block">\r
          <div class="ip-detail-icon-wrap">\r
            <i class="isax isax-award"></i>\r
          </div>\r
          <div>\r
            <div class="ip-detail-label">Titre</div>\r
            <div class="ip-detail-value">{{ selectedQuiz.titre }}</div>\r
          </div>\r
        </div>\r
\r
        <div class="ip-detail-block" *ngIf="selectedQuiz.description">\r
          <div class="ip-detail-icon-wrap">\r
            <i class="isax isax-document-text"></i>\r
          </div>\r
          <div>\r
            <div class="ip-detail-label">Description</div>\r
            <div class="ip-detail-value">{{ selectedQuiz.description }}</div>\r
          </div>\r
        </div>\r
\r
        <div class="ip-detail-row">\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap">\r
              <i class="isax isax-book-1"></i>\r
            </div>\r
            <div>\r
              <div class="ip-detail-label">Formation associ\xE9e</div>\r
              <div class="ip-detail-value">Formation #{{ selectedQuiz.formation_id }}</div>\r
            </div>\r
          </div>\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap">\r
              <i class="isax isax-clock"></i>\r
            </div>\r
            <div>\r
              <div class="ip-detail-label">Dur\xE9e</div>\r
              <div class="ip-detail-value">{{ selectedQuiz.duree_minutes ? selectedQuiz.duree_minutes + ' min' : 'Non d\xE9finie' }}</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="ip-detail-row">\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap">\r
              <i class="isax isax-medal-star"></i>\r
            </div>\r
            <div>\r
              <div class="ip-detail-label">Score minimum</div>\r
              <div class="ip-detail-value">{{ selectedQuiz.score_minimum ? selectedQuiz.score_minimum + '%' : 'Non d\xE9fini' }}</div>\r
            </div>\r
          </div>\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap">\r
              <i class="isax isax-repeat"></i>\r
            </div>\r
            <div>\r
              <div class="ip-detail-label">Tentatives max</div>\r
              <div class="ip-detail-value">{{ selectedQuiz.tentatives_max ?? 'Illimit\xE9es' }}</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="ip-detail-row">\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap">\r
              <i class="isax isax-status"></i>\r
            </div>\r
            <div>\r
              <div class="ip-detail-label">Statut</div>\r
              <div>\r
                <span class="ip-status-badge" [class.ip-status-active]="selectedQuiz.is_active" [class.ip-status-inactive]="!selectedQuiz.is_active">\r
                  <i class="fa-solid fa-circle"></i>\r
                  {{ selectedQuiz.is_active ? 'Actif' : 'Inactif' }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap">\r
              <i class="isax isax-calendar"></i>\r
            </div>\r
            <div>\r
              <div class="ip-detail-label">Cr\xE9\xE9 le</div>\r
              <div class="ip-detail-value">{{ selectedQuiz.created_at | date:'dd/MM/yyyy' }}</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <div class="ip-modal-divider"></div>\r
\r
      <!-- Footer -->\r
      <div class="ip-modal-footer">\r
        <button type="button" class="ip-btn ip-btn--ghost" data-bs-dismiss="modal">Fermer</button>\r
        <a [routerLink]="['/instructor/instructor-quiz-questions', selectedQuiz.id]"\r
           class="ip-btn ip-btn--primary" data-bs-dismiss="modal">\r
          <i class="isax isax-eye"></i> Voir les questions\r
        </a>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2500\u2500 MODAL MODIFICATION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="modal fade" id="quiz_edit_modal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-dialog-centered ip-modal-dialog">\r
    <div class="modal-content ip-modal-content">\r
\r
      <!-- Header -->\r
      <div class="ip-modal-header">\r
        <div class="ip-modal-icon">\r
          <i class="isax isax-edit-2"></i>\r
        </div>\r
        <div>\r
          <h5 class="ip-modal-title">Modifier le quiz</h5>\r
          <p class="ip-modal-sub">Mettez \xE0 jour les informations du quiz</p>\r
        </div>\r
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal"></button>\r
      </div>\r
\r
      <div class="ip-modal-divider"></div>\r
\r
      <!-- Body -->\r
      <div class="ip-modal-body" *ngIf="editForm">\r
        <form [formGroup]="editForm">\r
\r
          <div class="ip-field">\r
            <label class="ip-label">Titre <span class="ip-required">*</span></label>\r
            <input type="text" class="ip-input" formControlName="titre" placeholder="Titre du quiz">\r
          </div>\r
\r
          <div class="ip-field">\r
            <label class="ip-label">Description</label>\r
            <textarea class="ip-input ip-textarea" formControlName="description" rows="3"\r
                      placeholder="Description du quiz (optionnel)"></textarea>\r
          </div>\r
\r
          <div class="ip-field-row">\r
            <div class="ip-field ip-field--half">\r
              <label class="ip-label">Dur\xE9e (minutes)</label>\r
              <div class="ip-input-icon-wrap">\r
                <i class="isax isax-clock ip-input-icon"></i>\r
                <input type="number" class="ip-input ip-input--icon" formControlName="duree_minutes"\r
                       placeholder="Ex. : 30" min="1">\r
              </div>\r
            </div>\r
            <div class="ip-field ip-field--half">\r
              <label class="ip-label">Score minimum (%)</label>\r
              <div class="ip-input-icon-wrap">\r
                <i class="isax isax-medal-star ip-input-icon"></i>\r
                <input type="number" class="ip-input ip-input--icon" formControlName="score_minimum"\r
                       placeholder="Ex. : 60" min="0" max="100">\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="ip-field-row">\r
            <div class="ip-field ip-field--half">\r
              <label class="ip-label">Tentatives maximum</label>\r
              <div class="ip-input-icon-wrap">\r
                <i class="isax isax-repeat ip-input-icon"></i>\r
                <input type="number" class="ip-input ip-input--icon" formControlName="tentatives_max"\r
                       placeholder="Illimit\xE9es si vide" min="1">\r
              </div>\r
            </div>\r
            <div class="ip-field ip-field--half">\r
              <label class="ip-label">Statut</label>\r
              <div class="ip-toggle-row">\r
                <span class="ip-toggle-label">{{ editForm.get('is_active')?.value ? 'Actif' : 'Inactif' }}</span>\r
                <label class="ip-toggle">\r
                  <input type="checkbox" formControlName="is_active">\r
                  <span class="ip-toggle-slider"></span>\r
                </label>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="editError" class="alert alert-danger mt-2 py-2 small">{{ editError }}</div>\r
\r
        </form>\r
      </div>\r
\r
      <div class="ip-modal-divider"></div>\r
\r
      <!-- Footer -->\r
      <div class="ip-modal-footer">\r
        <button type="button" class="ip-btn ip-btn--ghost" data-bs-dismiss="modal">Annuler</button>\r
        <button type="button" class="ip-btn ip-btn--primary"\r
                [disabled]="editForm?.invalid || saving"\r
                (click)="saveEdit()">\r
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>\r
          <i *ngIf="!saving" class="isax isax-tick-circle me-1"></i>\r
          Enregistrer\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2500\u2500 MODAL CR\xC9ATION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="modal fade" id="quiz_create_modal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-dialog-centered ip-modal-dialog">\r
    <div class="modal-content ip-modal-content">\r
\r
      <div class="ip-modal-header">\r
        <div class="ip-modal-icon"><i class="isax isax-add-circle"></i></div>\r
        <div>\r
          <h5 class="ip-modal-title">Nouveau quiz</h5>\r
          <p class="ip-modal-sub">Cr\xE9er un nouveau quiz ou \xE9valuation</p>\r
        </div>\r
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal"></button>\r
      </div>\r
      <div class="ip-modal-divider"></div>\r
\r
      <div class="ip-modal-body" *ngIf="createForm">\r
        <form [formGroup]="createForm">\r
\r
          <div class="ip-field">\r
            <label class="ip-label">Titre <span class="ip-required">*</span></label>\r
            <input type="text" class="ip-input" formControlName="titre" placeholder="Titre du quiz">\r
            <div *ngIf="createForm.get('titre')?.invalid && createForm.get('titre')?.touched"\r
                 class="ip-field-error">Le titre est obligatoire (3 caract\xE8res min.)</div>\r
          </div>\r
\r
          <div class="ip-field">\r
            <label class="ip-label">Description</label>\r
            <textarea class="ip-input ip-textarea" formControlName="description" rows="3"\r
                      placeholder="Description du quiz (optionnel)"></textarea>\r
          </div>\r
\r
          <div class="ip-field-row">\r
            <div class="ip-field ip-field--half">\r
              <label class="ip-label">Dur\xE9e (minutes)</label>\r
              <div class="ip-input-icon-wrap">\r
                <i class="isax isax-clock ip-input-icon"></i>\r
                <input type="number" class="ip-input ip-input--icon" formControlName="duree_minutes"\r
                       placeholder="Ex. : 30" min="1">\r
              </div>\r
            </div>\r
            <div class="ip-field ip-field--half">\r
              <label class="ip-label">Score minimum (%)</label>\r
              <div class="ip-input-icon-wrap">\r
                <i class="isax isax-medal-star ip-input-icon"></i>\r
                <input type="number" class="ip-input ip-input--icon" formControlName="score_minimum"\r
                       placeholder="Ex. : 60" min="0" max="100">\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="ip-field-row">\r
            <div class="ip-field ip-field--half">\r
              <label class="ip-label">Tentatives maximum</label>\r
              <div class="ip-input-icon-wrap">\r
                <i class="isax isax-repeat ip-input-icon"></i>\r
                <input type="number" class="ip-input ip-input--icon" formControlName="tentatives_max"\r
                       placeholder="Illimit\xE9es si vide" min="1">\r
              </div>\r
            </div>\r
            <div class="ip-field ip-field--half">\r
              <label class="ip-label">Statut</label>\r
              <div class="ip-toggle-row">\r
                <span class="ip-toggle-label">{{ createForm.get('is_active')?.value ? 'Actif' : 'Inactif' }}</span>\r
                <label class="ip-toggle">\r
                  <input type="checkbox" formControlName="is_active">\r
                  <span class="ip-toggle-slider"></span>\r
                </label>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="createError" class="alert alert-danger mt-2 py-2 small">{{ createError }}</div>\r
\r
        </form>\r
      </div>\r
      <div class="ip-modal-divider"></div>\r
      <div class="ip-modal-footer">\r
        <button type="button" class="ip-btn ip-btn--ghost" data-bs-dismiss="modal">Annuler</button>\r
        <button type="button" class="ip-btn ip-btn--primary"\r
                [disabled]="createForm?.invalid || saving" (click)="saveCreate()">\r
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>\r
          <i *ngIf="!saving" class="isax isax-add-circle me-1"></i>\r
          Cr\xE9er le quiz\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/instructor/instructor-quiz/instructor-quiz.component.scss */\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 16px;\n}\n.ip-btn--primary {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-quiz-cell {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.ip-quiz-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.ip-quiz-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-quiz-desc {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 2px;\n  max-width: 220px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ip-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-pill i {\n  font-size: 12px;\n}\n.ip-score {\n  display: inline-block;\n  background: #ECFDF5;\n  color: #059669;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-status-badge i {\n  font-size: 8px;\n}\n.ip-status-badge.ip-status-active {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-status-badge.ip-status-inactive {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.ip-action-btn:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn.text-danger:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.ip-empty {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-modal-dialog {\n  max-width: 520px;\n}\n.ip-modal-content {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.ip-modal-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.ip-modal-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-modal-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 2px;\n}\n.ip-modal-sub {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-modal-divider {\n  height: 1px;\n  background: #E9ECEF;\n}\n.ip-modal-body {\n  padding: 20px 24px;\n}\n.ip-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n}\n.ip-detail-block {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-detail-block:last-child {\n  border-bottom: none;\n}\n.ip-detail-block--half {\n  flex: 1;\n  min-width: 0;\n}\n.ip-detail-row {\n  display: flex;\n  gap: 0;\n}\n.ip-detail-icon-wrap {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #F8F9FA;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.ip-detail-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n}\n.ip-detail-value {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-field {\n  margin-bottom: 14px;\n}\n.ip-field-row {\n  display: flex;\n  gap: 12px;\n}\n.ip-field--half {\n  flex: 1;\n  min-width: 0;\n}\n.ip-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #3D3D56;\n  display: block;\n  margin-bottom: 5px;\n}\n.ip-required {\n  color: #DC3545;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon {\n  padding-left: 34px;\n}\n.ip-textarea {\n  resize: vertical;\n  min-height: 72px;\n}\n.ip-input-icon-wrap {\n  position: relative;\n}\n.ip-input-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-toggle-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-top: 6px;\n}\n.ip-toggle-label {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-toggle {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n}\n.ip-toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-toggle-slider {\n  position: absolute;\n  inset: 0;\n  background: #DEE2E6;\n  border-radius: 22px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.ip-toggle-slider::before {\n  content: "";\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n.ip-toggle input:checked + .ip-toggle-slider {\n  background: #D4AF37;\n}\n.ip-toggle input:checked + .ip-toggle-slider::before {\n  transform: translateX(16px);\n}\n.ip-btn--ghost {\n  background: transparent;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n  border-color: #C0C5CC;\n}\n.ip-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding: 0 2px;\n}\n.ip-pagination__info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn i {\n  font-size: 13px;\n}\n.ip-pg-btn:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  font-weight: 600;\n  cursor: default;\n}\n.ip-pg-btn[disabled] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n/*# sourceMappingURL=instructor-quiz.component.css.map */\n'] }]
  }], () => [{ type: QuizService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorQuizComponent, { className: "InstructorQuizComponent", filePath: "app/features/instructor/instructor-quiz/instructor-quiz.component.ts", lineNumber: 19 });
})();
export {
  InstructorQuizComponent
};
//# sourceMappingURL=chunk-ZC5SPC25.js.map
