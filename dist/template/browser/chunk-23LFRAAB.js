import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  UserService
} from "./chunk-C3XHZ4TX.js";
import {
  DatePickerModule
} from "./chunk-J3WJ3JLN.js";
import {
  QuizService
} from "./chunk-NLROXVMT.js";
import {
  MatSelectModule
} from "./chunk-XFRTT6KS.js";
import "./chunk-6YZDBSHM.js";
import "./chunk-3ONGXC5Y.js";
import "./chunk-2KO2PJ3F.js";
import "./chunk-I5B54ZJK.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-4TVHDBGR.js";
import "./chunk-MQ5W77M6.js";
import {
  HasPermissionDirective
} from "./chunk-VS3ZYZPZ.js";
import "./chunk-HPF6XDYM.js";
import "./chunk-DQMJNWQC.js";
import "./chunk-GD4TWLVQ.js";
import "./chunk-K7E3GT3E.js";
import "./chunk-VJCKUHID.js";
import "./chunk-TSKCJJJI.js";
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
} from "./chunk-IKOSZIEY.js";
import {
  RouterLink
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
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
} from "./chunk-VTSSTHJF.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-quiz/adminrh-quiz.component.ts
var _c0 = (a0) => ["/adminrh/adminrh-quiz-questions", a0];
function AdminrhQuizComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhQuizComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 28);
    \u0275\u0275listener("click", function AdminrhQuizComponent_div_1_Template_button_click_2_listener() {
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
function AdminrhQuizComponent_ng_container_2_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function AdminrhQuizComponent_ng_container_2_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateModal());
    });
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2, " Nouveau quiz ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhQuizComponent_ng_container_2_tr_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quiz_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(quiz_r5.description);
  }
}
function AdminrhQuizComponent_ng_container_2_tr_30_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quiz_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", quiz_r5.duree_minutes, " min ");
  }
}
function AdminrhQuizComponent_ng_container_2_tr_30_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminrhQuizComponent_ng_container_2_tr_30_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quiz_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", quiz_r5.score_minimum, "%");
  }
}
function AdminrhQuizComponent_ng_container_2_tr_30_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminrhQuizComponent_ng_container_2_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 40)(3, "div", 41);
    \u0275\u0275element(4, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminrhQuizComponent_ng_container_2_tr_30_div_8_Template, 2, 1, "div", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "span", 45);
    \u0275\u0275element(11, "i", 46);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, AdminrhQuizComponent_ng_container_2_tr_30_span_14_Template, 3, 1, "span", 47)(15, AdminrhQuizComponent_ng_container_2_tr_30_span_15_Template, 2, 0, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, AdminrhQuizComponent_ng_container_2_tr_30_span_17_Template, 2, 1, "span", 49)(18, AdminrhQuizComponent_ng_container_2_tr_30_span_18_Template, 2, 0, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 50);
    \u0275\u0275element(21, "i", 51);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "span", 52);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "div", 53)(28, "button", 54);
    \u0275\u0275listener("click", function AdminrhQuizComponent_ng_container_2_tr_30_Template_button_click_28_listener() {
      const quiz_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetailsModal(quiz_r5));
    });
    \u0275\u0275element(29, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 56);
    \u0275\u0275listener("click", function AdminrhQuizComponent_ng_container_2_tr_30_Template_button_click_30_listener() {
      const quiz_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(quiz_r5));
    });
    \u0275\u0275element(31, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 57);
    \u0275\u0275listener("click", function AdminrhQuizComponent_ng_container_2_tr_30_Template_button_click_32_listener() {
      const quiz_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archiveQuiz(quiz_r5));
    });
    \u0275\u0275element(33, "i", 58);
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
    \u0275\u0275textInterpolate(ctx_r1.getCreateurNom(quiz_r5));
  }
}
function AdminrhQuizComponent_ng_container_2_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275element(2, "i", 42);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun quiz trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhQuizComponent_ng_container_2_div_32_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminrhQuizComponent_ng_container_2_div_32_ng_container_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function AdminrhQuizComponent_ng_container_2_div_32_ng_container_6_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const p_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ip-pg-btn--active", p_r8 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r8);
  }
}
function AdminrhQuizComponent_ng_container_2_div_32_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhQuizComponent_ng_container_2_div_32_ng_container_6_span_1_Template, 2, 0, "span", 69)(2, AdminrhQuizComponent_ng_container_2_div_32_ng_container_6_button_2_Template, 2, 3, "button", 70);
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
function AdminrhQuizComponent_ng_container_2_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65)(4, "button", 66);
    \u0275\u0275listener("click", function AdminrhQuizComponent_ng_container_2_div_32_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminrhQuizComponent_ng_container_2_div_32_ng_container_6_Template, 3, 2, "ng-container", 37);
    \u0275\u0275elementStart(7, "button", 66);
    \u0275\u0275listener("click", function AdminrhQuizComponent_ng_container_2_div_32_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
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
function AdminrhQuizComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29)(2, "div")(3, "h5", 30);
    \u0275\u0275text(4, "Quiz & \xE9valuations ");
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 32);
    \u0275\u0275text(8, "G\xE9rez les quiz et consultez les r\xE9sultats");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AdminrhQuizComponent_ng_container_2_button_9_Template, 3, 0, "button", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 34)(11, "div", 35)(12, "table", 36)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Score min.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Cr\xE9\xE9 par");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, AdminrhQuizComponent_ng_container_2_tr_30_Template, 34, 13, "tr", 37)(31, AdminrhQuizComponent_ng_container_2_tr_31_Template, 5, 0, "tr", 2);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(32, AdminrhQuizComponent_ng_container_2_div_32_Template, 9, 6, "div", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.quizzes.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("appHasPermission", "creer quiz");
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedQuizzes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quizzes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
function AdminrhQuizComponent_div_5_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75);
    \u0275\u0275element(2, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 76);
    \u0275\u0275text(5, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 77);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedQuiz.description);
  }
}
function AdminrhQuizComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275element(3, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h5", 11);
    \u0275\u0275text(6, "D\xE9tails du quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 12);
    \u0275\u0275text(8, "Informations compl\xE8tes sur le quiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "button", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "div", 14);
    \u0275\u0275elementStart(11, "div", 73)(12, "div", 74)(13, "div", 75);
    \u0275\u0275element(14, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "div", 76);
    \u0275\u0275text(17, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 77);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, AdminrhQuizComponent_div_5_div_20_Template, 8, 1, "div", 78);
    \u0275\u0275elementStart(21, "div", 79)(22, "div", 80)(23, "div", 75);
    \u0275\u0275element(24, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div")(26, "div", 76);
    \u0275\u0275text(27, "Formation associ\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 77);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 80)(31, "div", 75);
    \u0275\u0275element(32, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div")(34, "div", 76);
    \u0275\u0275text(35, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 77);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 79)(39, "div", 80)(40, "div", 75);
    \u0275\u0275element(41, "i", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div")(43, "div", 76);
    \u0275\u0275text(44, "Score minimum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 77);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 80)(48, "div", 75);
    \u0275\u0275element(49, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div")(51, "div", 76);
    \u0275\u0275text(52, "Tentatives max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 77);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 79)(56, "div", 80)(57, "div", 75);
    \u0275\u0275element(58, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div")(60, "div", 76);
    \u0275\u0275text(61, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div")(63, "span", 50);
    \u0275\u0275element(64, "i", 51);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(66, "div", 80)(67, "div", 75);
    \u0275\u0275element(68, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div")(70, "div", 76);
    \u0275\u0275text(71, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 77);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "date");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(75, "div", 14);
    \u0275\u0275elementStart(76, "div", 16)(77, "button", 17);
    \u0275\u0275text(78, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "a", 85);
    \u0275\u0275element(80, "i", 55);
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
function AdminrhQuizComponent_div_19_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1, "Le titre est obligatoire (3 caract\xE8res min.)");
    \u0275\u0275elementEnd();
  }
}
function AdminrhQuizComponent_div_19_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.createError);
  }
}
function AdminrhQuizComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "form", 87)(2, "div", 88)(3, "label", 89);
    \u0275\u0275text(4, "Titre ");
    \u0275\u0275elementStart(5, "span", 90);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 91);
    \u0275\u0275template(8, AdminrhQuizComponent_div_19_div_8_Template, 2, 0, "div", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 88)(10, "label", 89);
    \u0275\u0275text(11, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 94)(14, "div", 95)(15, "label", 89);
    \u0275\u0275text(16, "Dur\xE9e (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 96);
    \u0275\u0275element(18, "i", 97)(19, "input", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 95)(21, "label", 89);
    \u0275\u0275text(22, "Score minimum (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 96);
    \u0275\u0275element(24, "i", 99)(25, "input", 100);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 94)(27, "div", 95)(28, "label", 89);
    \u0275\u0275text(29, "Tentatives maximum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 96);
    \u0275\u0275element(31, "i", 101)(32, "input", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 95)(34, "label", 89);
    \u0275\u0275text(35, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 103)(37, "span", 104);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label", 105);
    \u0275\u0275element(40, "input", 106)(41, "span", 107);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(42, AdminrhQuizComponent_div_19_div_42_Template, 2, 1, "div", 108);
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
function AdminrhQuizComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 111);
  }
}
function AdminrhQuizComponent_i_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 112);
  }
}
function AdminrhQuizComponent_div_41_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editError);
  }
}
function AdminrhQuizComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "form", 87)(2, "div", 88)(3, "label", 89);
    \u0275\u0275text(4, "Titre ");
    \u0275\u0275elementStart(5, "span", 90);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 88)(9, "label", 89);
    \u0275\u0275text(10, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "textarea", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 94)(13, "div", 95)(14, "label", 89);
    \u0275\u0275text(15, "Dur\xE9e (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 96);
    \u0275\u0275element(17, "i", 97)(18, "input", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 95)(20, "label", 89);
    \u0275\u0275text(21, "Score minimum (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 96);
    \u0275\u0275element(23, "i", 99)(24, "input", 100);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 94)(26, "div", 95)(27, "label", 89);
    \u0275\u0275text(28, "Tentatives maximum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 96);
    \u0275\u0275element(30, "i", 101)(31, "input", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 95)(33, "label", 89);
    \u0275\u0275text(34, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 103)(36, "span", 104);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "label", 105);
    \u0275\u0275element(39, "input", 106)(40, "span", 107);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(41, AdminrhQuizComponent_div_41_div_41_Template, 2, 1, "div", 108);
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
function AdminrhQuizComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 111);
  }
}
function AdminrhQuizComponent_i_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 113);
  }
}
var AdminrhQuizComponent = class _AdminrhQuizComponent {
  quizService;
  fb;
  userService;
  quizzes = [];
  filteredQuizzes = [];
  loading = false;
  error = "";
  saving = false;
  editError = "";
  currentPage = 1;
  itemsPerPage = 10;
  selectedQuiz = null;
  editForm = null;
  createForm = null;
  createError = "";
  formateursMap = {};
  detailsModal;
  editModal;
  createModal;
  subscription = new Subscription();
  constructor(quizService, fb, userService) {
    this.quizService = quizService;
    this.fb = fb;
    this.userService = userService;
  }
  ngOnInit() {
    this.loadQuizzes();
    setTimeout(() => {
      this.detailsModal = new bootstrap.Modal(document.getElementById("arh_quiz_details_modal"));
      this.editModal = new bootstrap.Modal(document.getElementById("arh_quiz_edit_modal"));
      this.createModal = new bootstrap.Modal(document.getElementById("arh_quiz_create_modal"));
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
        console.log("Premier quiz (champs disponibles):", JSON.stringify(quizzes[0] ?? {}));
        this.filteredQuizzes = [...this.quizzes];
        this.currentPage = 1;
        this.loading = false;
        this.loadFormateursForQuizzes();
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger les quiz.");
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
    const sub = this.quizService.updateQuiz(this.selectedQuiz.id, this.editForm.value).subscribe({
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
  loadFormateursForQuizzes() {
    const ids = /* @__PURE__ */ new Set();
    this.quizzes.forEach((q) => {
      const id = q.formation?.formateur_id || q.formation?.formateur?.id || q.formateur_id || q.formateur?.id || q.createur_id || q.user_id;
      if (id)
        ids.add(id);
    });
    console.log("adminrh quiz formateur ids:", Array.from(ids));
    if (ids.size === 0)
      return;
    this.userService.getFormateurs().subscribe({
      next: (res) => {
        console.log("adminrh formateurs API response:", res);
        const raw = res.formateurs || res.users || res.data || res.data?.data || (Array.isArray(res) ? res : []);
        const list = Array.isArray(raw) ? raw : [];
        if (list.length === 0) {
          this.loadFormateursFromUsers(ids);
          return;
        }
        list.forEach((u) => {
          const userId = u?.id || u?.user_id;
          if (userId)
            this.formateursMap[userId] = u;
        });
        console.log("adminrh formateurs map:", this.formateursMap);
      },
      error: () => {
        console.log("adminrh getFormateurs failed, fallback to getUser per id");
        this.loadFormateursFromUsers(ids);
      }
    });
  }
  loadFormateursFromUsers(ids) {
    ids.forEach((id) => {
      this.userService.getUser(id).subscribe({
        next: (res) => {
          console.log(`adminrh getUser(${id}) response:`, res);
          const user = res.user || res.data || res.data?.user || res || null;
          const userId = user?.id || user?.user_id;
          if (userId)
            this.formateursMap[userId] = user;
        },
        error: () => {
          console.log(`adminrh getUser(${id}) failed`);
        }
      });
    });
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
  getCreateurNom(quiz) {
    const fid = quiz.formation?.formateur_id || quiz.formateur_id;
    if (fid && this.formateursMap[fid]) {
      const f2 = this.formateursMap[fid];
      return `${f2.prenom ?? f2.first_name ?? ""} ${f2.nom ?? f2.last_name ?? ""}`.trim();
    }
    const f = quiz.formation?.formateur || quiz.formateur || quiz.user;
    if (f)
      return `${f.prenom ?? f.name ?? ""} ${f.nom ?? ""}`.trim() || "\u2014";
    return fid ? `Formateur #${fid}` : "\u2014";
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
  static \u0275fac = function AdminrhQuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhQuizComponent)(\u0275\u0275directiveInject(QuizService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhQuizComponent, selectors: [["app-adminrh-quiz"]], decls: 50, vars: 12, consts: [["class", "ip-loader", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [4, "ngIf"], ["id", "arh_quiz_details_modal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "ip-modal-dialog"], ["class", "modal-content ip-modal-content", 4, "ngIf"], ["id", "arh_quiz_create_modal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "ip-modal-content"], [1, "ip-modal-header"], [1, "ip-modal-icon"], [1, "isax", "isax-add-circle"], [1, "ip-modal-title"], [1, "ip-modal-sub"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close", "ms-auto"], [1, "ip-modal-divider"], ["class", "ip-modal-body", 4, "ngIf"], [1, "ip-modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "ip-btn", "ip-btn--ghost"], ["type", "button", 1, "ip-btn", "ip-btn--primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "isax isax-add-circle me-1", 4, "ngIf"], ["id", "arh_quiz_edit_modal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "isax", "isax-edit-2"], ["class", "isax isax-tick-circle me-1", 4, "ngIf"], [1, "ip-loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-count"], [1, "ip-page-head__sub"], ["type", "button", "class", "ip-btn ip-btn--primary", 3, "click", 4, "appHasPermission"], [1, "ip-card"], [1, "table-responsive"], [1, "table", "ip-table"], [4, "ngFor", "ngForOf"], ["class", "ip-pagination", 4, "ngIf"], ["type", "button", 1, "ip-btn", "ip-btn--primary", 3, "click"], [1, "ip-quiz-cell"], [1, "ip-quiz-icon"], [1, "isax", "isax-award"], [1, "ip-quiz-title"], ["class", "ip-quiz-desc", 4, "ngIf"], [1, "ip-pill"], [1, "isax", "isax-book-1"], ["class", "ip-pill", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], ["class", "ip-score", 4, "ngIf"], [1, "ip-status-badge"], [1, "fa-solid", "fa-circle"], [1, "text-muted"], [1, "ip-actions"], ["type", "button", "title", "D\xE9tails", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-eye"], ["type", "button", "title", "Modifier", 1, "ip-action-btn", 3, "click"], ["type", "button", "title", "Archiver", 1, "ip-action-btn", "ip-action-btn--arch", 3, "click"], [1, "isax", "isax-archive"], [1, "ip-quiz-desc"], [1, "isax", "isax-clock"], [1, "ip-score"], ["colspan", "7", 1, "ip-empty"], [1, "ip-pagination"], [1, "ip-pagination__info"], [1, "ip-pagination__controls"], ["type", "button", 1, "ip-pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], [1, "isax", "isax-arrow-right-3"], ["class", "ip-pg-ellipsis", 4, "ngIf"], ["type", "button", "class", "ip-pg-btn", 3, "ip-pg-btn--active", "click", 4, "ngIf"], [1, "ip-pg-ellipsis"], ["type", "button", 1, "ip-pg-btn", 3, "click"], [1, "ip-modal-body"], [1, "ip-detail-block"], [1, "ip-detail-icon-wrap"], [1, "ip-detail-label"], [1, "ip-detail-value"], ["class", "ip-detail-block", 4, "ngIf"], [1, "ip-detail-row"], [1, "ip-detail-block", "ip-detail-block--half"], [1, "isax", "isax-medal-star"], [1, "isax", "isax-repeat"], [1, "isax", "isax-status"], [1, "isax", "isax-calendar"], ["data-bs-dismiss", "modal", 1, "ip-btn", "ip-btn--primary", 3, "routerLink"], [1, "isax", "isax-document-text"], [3, "formGroup"], [1, "ip-field"], [1, "ip-label"], [1, "ip-required"], ["type", "text", "formControlName", "titre", "placeholder", "Titre du quiz", 1, "ip-input"], ["class", "ip-field-error", 4, "ngIf"], ["formControlName", "description", "rows", "3", "placeholder", "Description du quiz (optionnel)", 1, "ip-input", "ip-textarea"], [1, "ip-field-row"], [1, "ip-field", "ip-field--half"], [1, "ip-input-icon-wrap"], [1, "isax", "isax-clock", "ip-input-icon"], ["type", "number", "formControlName", "duree_minutes", "placeholder", "Ex. : 30", "min", "1", 1, "ip-input", "ip-input--icon"], [1, "isax", "isax-medal-star", "ip-input-icon"], ["type", "number", "formControlName", "score_minimum", "placeholder", "Ex. : 60", "min", "0", "max", "100", 1, "ip-input", "ip-input--icon"], [1, "isax", "isax-repeat", "ip-input-icon"], ["type", "number", "formControlName", "tentatives_max", "placeholder", "Illimit\xE9es si vide", "min", "1", 1, "ip-input", "ip-input--icon"], [1, "ip-toggle-row"], [1, "ip-toggle-label"], [1, "ip-toggle"], ["type", "checkbox", "formControlName", "is_active"], [1, "ip-toggle-slider"], ["class", "alert alert-danger mt-2 py-2 small", 4, "ngIf"], [1, "ip-field-error"], [1, "alert", "alert-danger", "mt-2", "py-2", "small"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "isax", "isax-add-circle", "me-1"], [1, "isax", "isax-tick-circle", "me-1"]], template: function AdminrhQuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AdminrhQuizComponent_div_0_Template, 4, 0, "div", 0)(1, AdminrhQuizComponent_div_1_Template, 3, 1, "div", 1)(2, AdminrhQuizComponent_ng_container_2_Template, 33, 5, "ng-container", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275template(5, AdminrhQuizComponent_div_5_Template, 82, 18, "div", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 4)(8, "div", 7)(9, "div", 8)(10, "div", 9);
      \u0275\u0275element(11, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div")(13, "h5", 11);
      \u0275\u0275text(14, "Nouveau quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 12);
      \u0275\u0275text(16, "Cr\xE9er un nouveau quiz ou \xE9valuation");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "div", 14);
      \u0275\u0275template(19, AdminrhQuizComponent_div_19_Template, 43, 4, "div", 15);
      \u0275\u0275element(20, "div", 14);
      \u0275\u0275elementStart(21, "div", 16)(22, "button", 17);
      \u0275\u0275text(23, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 18);
      \u0275\u0275listener("click", function AdminrhQuizComponent_Template_button_click_24_listener() {
        return ctx.saveCreate();
      });
      \u0275\u0275template(25, AdminrhQuizComponent_span_25_Template, 1, 0, "span", 19)(26, AdminrhQuizComponent_i_26_Template, 1, 0, "i", 20);
      \u0275\u0275text(27, " Cr\xE9er le quiz ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(28, "div", 21)(29, "div", 4)(30, "div", 7)(31, "div", 8)(32, "div", 9);
      \u0275\u0275element(33, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div")(35, "h5", 11);
      \u0275\u0275text(36, "Modifier le quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 12);
      \u0275\u0275text(38, "Mettez \xE0 jour les informations du quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(39, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "div", 14);
      \u0275\u0275template(41, AdminrhQuizComponent_div_41_Template, 42, 3, "div", 15);
      \u0275\u0275element(42, "div", 14);
      \u0275\u0275elementStart(43, "div", 16)(44, "button", 17);
      \u0275\u0275text(45, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 18);
      \u0275\u0275listener("click", function AdminrhQuizComponent_Template_button_click_46_listener() {
        return ctx.saveEdit();
      });
      \u0275\u0275template(47, AdminrhQuizComponent_span_47_Template, 1, 0, "span", 19)(48, AdminrhQuizComponent_i_48_Template, 1, 0, "i", 23);
      \u0275\u0275text(49, " Enregistrer ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading && ctx.quizzes.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading || ctx.quizzes.length > 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.selectedQuiz);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.createForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", (ctx.createForm == null ? null : ctx.createForm.invalid) || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.saving);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.editForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", (ctx.editForm == null ? null : ctx.editForm.invalid) || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.saving);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, MatSelectModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, DatePickerModule, HasPermissionDirective, DatePipe], styles: ['\n\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ip-btn--primary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-quiz-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.ip-quiz-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.ip-quiz-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-quiz-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 2px;\n  max-width: 220px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ip-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-score[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #ECFDF5;\n  color: #059669;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-status-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.ip-status-badge.ip-status-active[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-status-badge.ip-status-inactive[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn.text-danger[_ngcontent-%COMP%]:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-modal-dialog[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.ip-modal-content[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.ip-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.ip-modal-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-modal-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 2px;\n}\n.ip-modal-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-modal-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E9ECEF;\n}\n.ip-modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.ip-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n}\n.ip-detail-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-detail-block[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-detail-block--half[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.ip-detail-icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #F8F9FA;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.ip-detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n}\n.ip-detail-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-field[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.ip-field-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.ip-field--half[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #3D3D56;\n  display: block;\n  margin-bottom: 5px;\n}\n.ip-required[_ngcontent-%COMP%] {\n  color: #DC3545;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ip-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 72px;\n}\n.ip-input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ip-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-top: 6px;\n}\n.ip-toggle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n}\n.ip-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: #DEE2E6;\n  border-radius: 22px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.ip-toggle-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n.ip-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-toggle-slider[_ngcontent-%COMP%] {\n  background: #D4AF37;\n}\n.ip-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-toggle-slider[_ngcontent-%COMP%]::before {\n  transform: translateX(16px);\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n  border-color: #C0C5CC;\n}\n.ip-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding: 0 2px;\n}\n.ip-pagination__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ip-pg-btn[_ngcontent-%COMP%]:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  font-weight: 600;\n  cursor: default;\n}\n.ip-pg-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n/*# sourceMappingURL=adminrh-quiz.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhQuizComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-quiz", standalone: true, imports: [CommonModule, MatSelectModule, RouterLink, FormsModule, ReactiveFormsModule, DatePickerModule, HasPermissionDirective], template: `<!-- Loading -->\r
<div *ngIf="loading && quizzes.length === 0" class="ip-loader">\r
  <div class="spinner-border" role="status"><span class="visually-hidden">Chargement...</span></div>\r
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
      <p class="ip-page-head__sub">G\xE9rez les quiz et consultez les r\xE9sultats</p>\r
    </div>\r
    <button *appHasPermission="'creer quiz'" type="button" class="ip-btn ip-btn--primary" (click)="openCreateModal()">\r
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
            <th>Cr\xE9\xE9 par</th>\r
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
              <span class="ip-status-badge"\r
                    [class.ip-status-active]="quiz.is_active"\r
                    [class.ip-status-inactive]="!quiz.is_active">\r
                <i class="fa-solid fa-circle"></i>\r
                {{ quiz.is_active ? 'Actif' : 'Inactif' }}\r
              </span>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ getCreateurNom(quiz) }}</span>\r
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
</ng-container>\r
\r
<!-- \u2500\u2500 MODAL D\xC9TAILS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="modal fade" id="arh_quiz_details_modal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-dialog-centered ip-modal-dialog">\r
    <div class="modal-content ip-modal-content" *ngIf="selectedQuiz">\r
\r
      <div class="ip-modal-header">\r
        <div class="ip-modal-icon"><i class="isax isax-award"></i></div>\r
        <div>\r
          <h5 class="ip-modal-title">D\xE9tails du quiz</h5>\r
          <p class="ip-modal-sub">Informations compl\xE8tes sur le quiz</p>\r
        </div>\r
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal"></button>\r
      </div>\r
      <div class="ip-modal-divider"></div>\r
\r
      <div class="ip-modal-body">\r
\r
        <div class="ip-detail-block">\r
          <div class="ip-detail-icon-wrap"><i class="isax isax-award"></i></div>\r
          <div>\r
            <div class="ip-detail-label">Titre</div>\r
            <div class="ip-detail-value">{{ selectedQuiz.titre }}</div>\r
          </div>\r
        </div>\r
\r
        <div class="ip-detail-block" *ngIf="selectedQuiz.description">\r
          <div class="ip-detail-icon-wrap"><i class="isax isax-document-text"></i></div>\r
          <div>\r
            <div class="ip-detail-label">Description</div>\r
            <div class="ip-detail-value">{{ selectedQuiz.description }}</div>\r
          </div>\r
        </div>\r
\r
        <div class="ip-detail-row">\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap"><i class="isax isax-book-1"></i></div>\r
            <div>\r
              <div class="ip-detail-label">Formation associ\xE9e</div>\r
              <div class="ip-detail-value">Formation #{{ selectedQuiz.formation_id }}</div>\r
            </div>\r
          </div>\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap"><i class="isax isax-clock"></i></div>\r
            <div>\r
              <div class="ip-detail-label">Dur\xE9e</div>\r
              <div class="ip-detail-value">{{ selectedQuiz.duree_minutes ? selectedQuiz.duree_minutes + ' min' : 'Non d\xE9finie' }}</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="ip-detail-row">\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap"><i class="isax isax-medal-star"></i></div>\r
            <div>\r
              <div class="ip-detail-label">Score minimum</div>\r
              <div class="ip-detail-value">{{ selectedQuiz.score_minimum ? selectedQuiz.score_minimum + '%' : 'Non d\xE9fini' }}</div>\r
            </div>\r
          </div>\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap"><i class="isax isax-repeat"></i></div>\r
            <div>\r
              <div class="ip-detail-label">Tentatives max</div>\r
              <div class="ip-detail-value">{{ selectedQuiz.tentatives_max ?? 'Illimit\xE9es' }}</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="ip-detail-row">\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap"><i class="isax isax-status"></i></div>\r
            <div>\r
              <div class="ip-detail-label">Statut</div>\r
              <div>\r
                <span class="ip-status-badge"\r
                      [class.ip-status-active]="selectedQuiz.is_active"\r
                      [class.ip-status-inactive]="!selectedQuiz.is_active">\r
                  <i class="fa-solid fa-circle"></i>\r
                  {{ selectedQuiz.is_active ? 'Actif' : 'Inactif' }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap"><i class="isax isax-calendar"></i></div>\r
            <div>\r
              <div class="ip-detail-label">Cr\xE9\xE9 le</div>\r
              <div class="ip-detail-value">{{ selectedQuiz.created_at | date:'dd/MM/yyyy' }}</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
      <div class="ip-modal-divider"></div>\r
      <div class="ip-modal-footer">\r
        <button type="button" class="ip-btn ip-btn--ghost" data-bs-dismiss="modal">Fermer</button>\r
        <a [routerLink]="['/adminrh/adminrh-quiz-questions', selectedQuiz!.id]"\r
           class="ip-btn ip-btn--primary" data-bs-dismiss="modal">\r
          <i class="isax isax-eye"></i> Voir les questions\r
        </a>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2500\u2500 MODAL CR\xC9ATION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="modal fade" id="arh_quiz_create_modal" tabindex="-1" aria-hidden="true">\r
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
\r
<!-- \u2500\u2500 MODAL MODIFICATION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="modal fade" id="arh_quiz_edit_modal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-dialog-centered ip-modal-dialog">\r
    <div class="modal-content ip-modal-content">\r
\r
      <div class="ip-modal-header">\r
        <div class="ip-modal-icon"><i class="isax isax-edit-2"></i></div>\r
        <div>\r
          <h5 class="ip-modal-title">Modifier le quiz</h5>\r
          <p class="ip-modal-sub">Mettez \xE0 jour les informations du quiz</p>\r
        </div>\r
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal"></button>\r
      </div>\r
      <div class="ip-modal-divider"></div>\r
\r
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
      <div class="ip-modal-divider"></div>\r
      <div class="ip-modal-footer">\r
        <button type="button" class="ip-btn ip-btn--ghost" data-bs-dismiss="modal">Annuler</button>\r
        <button type="button" class="ip-btn ip-btn--primary"\r
                [disabled]="editForm?.invalid || saving" (click)="saveEdit()">\r
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>\r
          <i *ngIf="!saving" class="isax isax-tick-circle me-1"></i>\r
          Enregistrer\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/adminrh/adminrh-quiz/adminrh-quiz.component.scss */\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 16px;\n}\n.ip-btn--primary {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-quiz-cell {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.ip-quiz-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.ip-quiz-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-quiz-desc {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 2px;\n  max-width: 220px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ip-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-pill i {\n  font-size: 12px;\n}\n.ip-score {\n  display: inline-block;\n  background: #ECFDF5;\n  color: #059669;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-status-badge i {\n  font-size: 8px;\n}\n.ip-status-badge.ip-status-active {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-status-badge.ip-status-inactive {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.ip-action-btn:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn.text-danger:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.ip-empty {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-modal-dialog {\n  max-width: 520px;\n}\n.ip-modal-content {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.ip-modal-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.ip-modal-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-modal-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 2px;\n}\n.ip-modal-sub {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-modal-divider {\n  height: 1px;\n  background: #E9ECEF;\n}\n.ip-modal-body {\n  padding: 20px 24px;\n}\n.ip-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n}\n.ip-detail-block {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-detail-block:last-child {\n  border-bottom: none;\n}\n.ip-detail-block--half {\n  flex: 1;\n  min-width: 0;\n}\n.ip-detail-row {\n  display: flex;\n  gap: 0;\n}\n.ip-detail-icon-wrap {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #F8F9FA;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.ip-detail-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n}\n.ip-detail-value {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-field {\n  margin-bottom: 14px;\n}\n.ip-field-row {\n  display: flex;\n  gap: 12px;\n}\n.ip-field--half {\n  flex: 1;\n  min-width: 0;\n}\n.ip-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #3D3D56;\n  display: block;\n  margin-bottom: 5px;\n}\n.ip-required {\n  color: #DC3545;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon {\n  padding-left: 34px;\n}\n.ip-textarea {\n  resize: vertical;\n  min-height: 72px;\n}\n.ip-input-icon-wrap {\n  position: relative;\n}\n.ip-input-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-toggle-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-top: 6px;\n}\n.ip-toggle-label {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-toggle {\n  position: relative;\n  display: inline-block;\n  width: 38px;\n  height: 22px;\n}\n.ip-toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-toggle-slider {\n  position: absolute;\n  inset: 0;\n  background: #DEE2E6;\n  border-radius: 22px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.ip-toggle-slider::before {\n  content: "";\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  left: 3px;\n  bottom: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n.ip-toggle input:checked + .ip-toggle-slider {\n  background: #D4AF37;\n}\n.ip-toggle input:checked + .ip-toggle-slider::before {\n  transform: translateX(16px);\n}\n.ip-btn--ghost {\n  background: transparent;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n  border-color: #C0C5CC;\n}\n.ip-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding: 0 2px;\n}\n.ip-pagination__info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn i {\n  font-size: 13px;\n}\n.ip-pg-btn:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  font-weight: 600;\n  cursor: default;\n}\n.ip-pg-btn[disabled] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n/*# sourceMappingURL=adminrh-quiz.component.css.map */\n'] }]
  }], () => [{ type: QuizService }, { type: FormBuilder }, { type: UserService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhQuizComponent, { className: "AdminrhQuizComponent", filePath: "app/features/adminrh/adminrh-quiz/adminrh-quiz.component.ts", lineNumber: 23 });
})();
export {
  AdminrhQuizComponent
};
//# sourceMappingURL=chunk-23LFRAAB.js.map
