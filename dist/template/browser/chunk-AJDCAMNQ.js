import {
  FormationService
} from "./chunk-MHGWTEI2.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-OVFIVR43.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-IKOSZIEY.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
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
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/student-quiz-questions/student-quiz-questions.component.ts
function StudentQuizQuestionsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Pr\xE9paration du quiz...");
    \u0275\u0275elementEnd()();
  }
}
function StudentQuizQuestionsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275element(2, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Une erreur est survenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 8);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retournerAuxQuiz());
    });
    \u0275\u0275element(8, "i", 9);
    \u0275\u0275text(9, "Retour aux quiz ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementStart(2, "span", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("qq-topbar__timer--warning", ctx_r1.timeLeft < 120)("qq-topbar__timer--danger", ctx_r1.timeLeft < 60);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.timerLabel);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.totalTimeLabel);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_button_46_Template_button_click_0_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.selected = i_r5 + 1;
      return \u0275\u0275resetView(ctx_r1.scrollToActive());
    });
    \u0275\u0275elementStart(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_r6 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("qq-acc-dot--active", ctx_r1.selected === i_r5 + 1)("qq-acc-dot--answered", ctx_r1.isAnswered(question_r6) && ctx_r1.selected !== i_r5 + 1);
    \u0275\u0275property("title", question_r6.question_text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(question_r6.question_text);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_60_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_60_button_1_Template_button_click_0_listener() {
      const rep_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const question_r9 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectReponse(question_r9.id, rep_r8.id));
    });
    \u0275\u0275elementStart(1, "span", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 69);
    \u0275\u0275element(6, "i", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rep_r8 = ctx.$implicit;
    const ri_r10 = ctx.index;
    const question_r9 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("qq-option--selected", ctx_r1.isSelected(question_r9.id, rep_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getOptionLetter(ri_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rep_r8.reponse_text);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_60_button_1_Template, 7, 4, "button", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const question_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", question_r9.reponses);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "textarea", 70);
    \u0275\u0275twoWayListener("ngModelChange", function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_61_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const question_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.textReponses[question_r9.id], $event) || (ctx_r1.textReponses[question_r9.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(2, "            ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71);
    \u0275\u0275element(4, "i", 72);
    \u0275\u0275text(5, " R\xE9ponse libre \u2014 orthographe exacte requise \xA0\xB7\xA0 ");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const question_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.textReponses[question_r9.id]);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("qq-char-warn", ((ctx_r1.textReponses[question_r9.id] == null ? null : ctx_r1.textReponses[question_r9.id].length) ?? 0) >= 900);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.textReponses[question_r9.id] == null ? null : ctx_r1.textReponses[question_r9.id].length) ?? 0, " / 1000 ");
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_button_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_button_63_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.movePrev());
    });
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2, "Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " Suivant");
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275elementContainerEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_67_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275text(2, "Terminer le quiz ");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_67_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275element(1, "span", 78);
    \u0275\u0275text(2, "Envoi en cours... ");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_67_span_1_Template, 3, 0, "span", 2)(2, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_67_span_2_Template, 3, 0, "span", 75);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitting);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "header", 14)(2, "div", 15)(3, "button", 16);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.retournerAuxQuiz());
    });
    \u0275\u0275element(4, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "span", 19);
    \u0275\u0275text(7, "Quiz final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 21)(11, "div", 22)(12, "div", 23);
    \u0275\u0275element(13, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 25)(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 26)(19, "div", 27);
    \u0275\u0275element(20, "i", 28);
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_23_Template, 8, 6, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "main", 30)(25, "aside", 31)(26, "div", 32)(27, "p", 33);
    \u0275\u0275text(28, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 34)(30, "span");
    \u0275\u0275text(31, "R\xE9pondues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 35)(35, "span", 36);
    \u0275\u0275element(36, "span", 37);
    \u0275\u0275text(37, "R\xE9pondu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 38);
    \u0275\u0275element(39, "span", 37);
    \u0275\u0275text(40, "En cours ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 39);
    \u0275\u0275element(42, "span", 40);
    \u0275\u0275text(43, "Non r\xE9pondu ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 41)(45, "div", 42);
    \u0275\u0275template(46, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_button_46_Template, 5, 7, "button", 43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "section", 44)(48, "div", 45)(49, "div", 46)(50, "span", 47);
    \u0275\u0275text(51, "Q");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52);
    \u0275\u0275elementStart(53, "span", 48);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 49);
    \u0275\u0275element(56, "i", 50);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "p", 51);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275template(60, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_60_Template, 2, 1, "div", 52)(61, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_61_Template, 8, 4, "div", 2);
    \u0275\u0275elementStart(62, "div", 53);
    \u0275\u0275template(63, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_button_63_Template, 3, 0, "button", 54)(64, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_span_64_Template, 1, 0, "span", 2);
    \u0275\u0275elementStart(65, "button", 55);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.moveNext());
    });
    \u0275\u0275template(66, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_66_Template, 3, 0, "ng-container", 2)(67, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_67_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const question_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.quiz.titre);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.progressPercent, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("/", ctx_r1.totalQuestions, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.totalAnswered, " / ", ctx_r1.totalQuestions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quiz.duree_minutes);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate2("", ctx_r1.totalAnswered, "/", ctx_r1.totalQuestions);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.questions);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx_r1.totalQuestions);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getTypeBadgeClass(question_r9.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getTypeIcon(question_r9.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTypeLabel(question_r9.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(question_r9.question_text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", question_r9.type === "multiple_choice" || question_r9.type === "true_false");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", question_r9.type === "text");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selected > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selected === 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("qq-btn--primary", ctx_r1.selected < ctx_r1.totalQuestions)("qq-btn--success", ctx_r1.selected === ctx_r1.totalQuestions);
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selected < ctx_r1.totalQuestions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selected === ctx_r1.totalQuestions);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_Template, 68, 28, "div", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selected === i_r13 + 1);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "span", 99);
    \u0275\u0275text(2, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 100);
    \u0275\u0275text(4, "\u2B50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 101);
    \u0275\u0275text(6, "\u{1F3C6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 102);
    \u0275\u0275text(8, "\u2728");
    \u0275\u0275elementEnd()();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "span", 99);
    \u0275\u0275text(2, "\u{1F4AA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 100);
    \u0275\u0275text(4, "\u{1F4DA}");
    \u0275\u0275elementEnd()();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_h2_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "F\xE9licitations ! \u{1F389}");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_h2_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Pas cette fois...");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Excellent travail ! Votre ma\xEEtrise du sujet est confirm\xE9e.");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Ne vous d\xE9couragez pas \u2014 r\xE9visez et retentez. Vous pouvez y arriver !");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104)(2, "div", 105);
    \u0275\u0275element(3, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 106);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 107);
    \u0275\u0275text(7, "Bonnes r\xE9ponses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 104)(9, "div", 108);
    \u0275\u0275element(10, "i", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 106);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 107);
    \u0275\u0275text(14, "Total questions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 104)(16, "div", 110);
    \u0275\u0275element(17, "i", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 106);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 107);
    \u0275\u0275text(21, "Tentative(s)");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.resultat.bonnes_reponses);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.resultat.total_questions ?? ctx_r1.totalQuestions);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.resultat.nombre_tentatives ?? 1);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_div_2_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadQuiz(ctx_r1.quiz.id));
    });
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275text(2, "R\xE9essayer ");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "header", 80)(2, "div", 15)(3, "button", 81);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retournerAuxQuiz());
    });
    \u0275\u0275element(4, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "span", 19);
    \u0275\u0275text(7, "R\xE9sultat final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "main", 82)(11, "div", 83);
    \u0275\u0275template(12, StudentQuizQuestionsComponent_ng_container_2_div_2_div_12_Template, 9, 0, "div", 84)(13, StudentQuizQuestionsComponent_ng_container_2_div_2_div_13_Template, 5, 0, "div", 84);
    \u0275\u0275elementStart(14, "div", 85);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 86);
    \u0275\u0275element(16, "circle", 87)(17, "circle", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 89);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementStart(21, "span", 90);
    \u0275\u0275text(22, "%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 91);
    \u0275\u0275element(24, "i", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 93);
    \u0275\u0275template(26, StudentQuizQuestionsComponent_ng_container_2_div_2_h2_26_Template, 2, 0, "h2", 2)(27, StudentQuizQuestionsComponent_ng_container_2_div_2_h2_27_Template, 2, 0, "h2", 2)(28, StudentQuizQuestionsComponent_ng_container_2_div_2_p_28_Template, 2, 0, "p", 2)(29, StudentQuizQuestionsComponent_ng_container_2_div_2_p_29_Template, 2, 0, "p", 2);
    \u0275\u0275elementStart(30, "div", 94);
    \u0275\u0275text(31, " Score minimum requis : ");
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, StudentQuizQuestionsComponent_ng_container_2_div_2_div_34_Template, 22, 3, "div", 95);
    \u0275\u0275elementStart(35, "div", 96)(36, "button", 73);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_div_2_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retournerAuxQuiz());
    });
    \u0275\u0275element(37, "i", 9);
    \u0275\u0275text(38, "Mes Quiz ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, StudentQuizQuestionsComponent_ng_container_2_div_2_button_39_Template, 3, 0, "button", 97);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.quiz.titre);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("qq-result-card--success", ctx_r1.estReussi)("qq-result-card--fail", !ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estReussi);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("stroke-dashoffset", ctx_r1.getScoreDashOffset());
    \u0275\u0275classProp("qq-score-ring__fill--success", ctx_r1.estReussi)("qq-score-ring__fill--fail", !ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getNoteColor());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 29, ctx_r1.noteFinale, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("qq-result-icon--success", ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-award", ctx_r1.estReussi)("isax-close-circle", !ctx_r1.estReussi);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estReussi);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.quiz.score_minimum, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.resultat == null ? null : ctx_r1.resultat.bonnes_reponses) !== void 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.estReussi);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 10)(2, StudentQuizQuestionsComponent_ng_container_2_div_2_Template, 40, 32, "div", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.questions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.selected === ctx_r1.totalQuestions + 1);
  }
}
var StudentQuizQuestionsComponent = class _StudentQuizQuestionsComponent {
  route;
  router;
  formationsService;
  routes = routes;
  // ── Données ────────────────────────────────────────────────
  quiz = null;
  questions = [];
  loading = true;
  error = "";
  // ── Navigation ─────────────────────────────────────────────
  selected = 1;
  get currentQuestion() {
    return this.questions[this.selected - 1] ?? null;
  }
  get totalQuestions() {
    return this.questions.length;
  }
  get progressPercent() {
    return this.totalQuestions ? Math.round(this.selected / this.totalQuestions * 100) : 0;
  }
  // ── Réponses ───────────────────────────────────────────────
  selectedReponses = {};
  textReponses = {};
  // ── Timer ──────────────────────────────────────────────────
  timeLeft = 0;
  timerLabel = "00:00";
  timerInterval;
  // ── Résultat ───────────────────────────────────────────────
  resultat = null;
  submitted = false;
  submitting = false;
  // ── Accordion ──────────────────────────────────────────────
  openSections = /* @__PURE__ */ new Set();
  constructor(route, router, formationsService) {
    this.route = route;
    this.router = router;
    this.formationsService = formationsService;
  }
  ngOnInit() {
    const quizId = Number(this.route.snapshot.paramMap.get("id"));
    if (!quizId) {
      this.error = "Quiz introuvable.";
      this.loading = false;
      return;
    }
    this.loadQuiz(quizId);
  }
  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }
  // ── Chargement ─────────────────────────────────────────────
  loadQuiz(quizId) {
    this.loading = true;
    this.submitted = false;
    this.submitting = false;
    this.selected = 1;
    this.selectedReponses = {};
    this.textReponses = {};
    this.resultat = null;
    this.openSections = /* @__PURE__ */ new Set();
    clearInterval(this.timerInterval);
    this.formationsService.getQuizDetail(quizId).subscribe({
      next: (res) => {
        this.quiz = res.quiz ?? res;
        this.questions = (res.questions ?? res.quiz?.questions ?? []).sort((a, b) => a.ordre - b.ordre);
        const titres = new Set(this.questions.map((q) => q.section?.titre ?? "Questions g\xE9n\xE9rales"));
        this.openSections = new Set(titres);
        const duree = this.quiz?.duree_minutes || 10;
        if (duree) {
          this.timeLeft = duree * 60;
          this.startTimer();
        }
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger le quiz.";
        this.loading = false;
      }
    });
  }
  // ── Timer ──────────────────────────────────────────────────
  startTimer() {
    this.updateTimerLabel();
    this.timerInterval = setInterval(() => {
      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.submitQuiz();
        return;
      }
      this.timeLeft--;
      this.updateTimerLabel();
    }, 1e3);
  }
  updateTimerLabel() {
    const m = Math.floor(this.timeLeft / 60).toString().padStart(2, "0");
    const s = (this.timeLeft % 60).toString().padStart(2, "0");
    this.timerLabel = `${m}:${s}`;
  }
  get totalTimeLabel() {
    if (!this.quiz?.duree_minutes)
      return "";
    return `${this.quiz.duree_minutes.toString().padStart(2, "0")}:00`;
  }
  // ── Navigation ─────────────────────────────────────────────
  moveNext() {
    if (this.selected < this.totalQuestions) {
      this.selected++;
      this.scrollToActive();
    } else {
      this.submitQuiz();
    }
  }
  movePrev() {
    if (this.selected > 1) {
      this.selected--;
      this.scrollToActive();
    }
  }
  scrollToActive() {
    setTimeout(() => {
      const el = document.querySelector(".qq-acc-dot--active");
      el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  }
  // ── Réponses ───────────────────────────────────────────────
  selectReponse(questionId, reponseId) {
    this.selectedReponses[questionId] = reponseId;
  }
  isSelected(questionId, reponseId) {
    return this.selectedReponses[questionId] === reponseId;
  }
  isAnswered(question) {
    if (question.type === "text")
      return !!this.textReponses[question.id]?.trim();
    return !!this.selectedReponses[question.id];
  }
  get totalAnswered() {
    return this.questions.filter((q) => this.isAnswered(q)).length;
  }
  get questionsBySection() {
    const groups = /* @__PURE__ */ new Map();
    this.questions.forEach((q, index) => {
      const key = q.section ? String(q.section.id) : "__none__";
      const titre = q.section?.titre ?? "Questions g\xE9n\xE9rales";
      if (!groups.has(key)) {
        groups.set(key, { titre, questions: [] });
      }
      groups.get(key).questions.push({ q, index });
    });
    return Array.from(groups.values());
  }
  // ── Accordion ──────────────────────────────────────────────
  toggleSection(titre) {
    if (this.openSections.has(titre)) {
      this.openSections.delete(titre);
    } else {
      this.openSections.add(titre);
    }
  }
  isSectionOpen(titre) {
    return this.openSections.has(titre);
  }
  // ── Soumission ─────────────────────────────────────────────
  submitQuiz() {
    if (this.submitting || !this.quiz)
      return;
    clearInterval(this.timerInterval);
    this.submitting = true;
    const answers = this.questions.map((q) => {
      if (q.type === "text") {
        return { question_id: q.id, reponse_text: this.textReponses[q.id] ?? "" };
      }
      return { question_id: q.id, reponse_id: this.selectedReponses[q.id] ?? null };
    });
    this.formationsService.soumettreQuiz(this.quiz.id, answers).subscribe({
      next: (res) => {
        this.resultat = res.result ?? res.resultat ?? res;
        this.submitted = true;
        this.submitting = false;
        this.selected = this.totalQuestions + 1;
      },
      error: (err) => {
        this.submitting = false;
        if (err?.status === 403) {
          this.error = err?.error?.message ?? "Acc\xE8s refus\xE9.";
        } else {
          this.error = "Erreur lors de la soumission du quiz.";
        }
      }
    });
  }
  // ── Helpers résultat ───────────────────────────────────────
  get estReussi() {
    return this.resultat?.est_reussi ?? false;
  }
  get noteFinale() {
    return this.resultat?.note ?? 0;
  }
  getNoteColor() {
    if (this.noteFinale >= 75)
      return "#10b981";
    if (this.noteFinale >= 50)
      return "#f59e0b";
    return "#ef4444";
  }
  getScoreDashOffset() {
    const circumference = 314;
    return circumference - this.noteFinale / 100 * circumference;
  }
  retournerAuxQuiz() {
    this.router.navigate([routes.studentsQuiz]);
  }
  // ── Helpers affichage ──────────────────────────────────────
  getOptionLetter(index) {
    return ["A", "B", "C", "D", "E"][index] ?? String(index + 1);
  }
  getTypeBadgeClass(type) {
    const map = {
      multiple_choice: "qq-type-badge--mcq",
      true_false: "qq-type-badge--tf",
      text: "qq-type-badge--text"
    };
    return map[type] ?? "";
  }
  getTypeIcon(type) {
    const map = {
      multiple_choice: "isax-task-square",
      true_false: "isax-toggle-off-circle",
      text: "isax-edit-2"
    };
    return map[type] ?? "isax-task-square";
  }
  getTypeLabel(type) {
    const map = {
      multiple_choice: "Choix unique",
      true_false: "Vrai / Faux",
      text: "R\xE9ponse libre"
    };
    return map[type] ?? type;
  }
  static \u0275fac = function StudentQuizQuestionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentQuizQuestionsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentQuizQuestionsComponent, selectors: [["app-student-quiz-questions"]], decls: 3, vars: 3, consts: [["class", "qq-loading", 4, "ngIf"], ["class", "qq-error", 4, "ngIf"], [4, "ngIf"], [1, "qq-loading"], [1, "qq-loading__ring"], [1, "qq-error"], [1, "qq-error__icon"], [1, "isax", "isax-warning-2"], [1, "qq-btn", "qq-btn--primary", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-2"], [4, "ngFor", "ngForOf"], ["class", "qq-page qq-page--result", 4, "ngIf"], ["class", "qq-page", 4, "ngIf"], [1, "qq-page"], [1, "qq-topbar"], [1, "qq-topbar__left"], ["title", "Retour", 1, "qq-topbar__back", 3, "click"], [1, "isax", "isax-arrow-left-2"], [1, "qq-topbar__meta"], [1, "qq-topbar__label"], [1, "qq-topbar__title"], [1, "qq-topbar__center"], [1, "qq-topbar__progress"], [1, "qq-topbar__progress-track"], [1, "qq-topbar__progress-fill"], [1, "qq-topbar__progress-label"], [1, "qq-topbar__right"], [1, "qq-topbar__answered"], [1, "isax", "isax-tick-circle"], ["class", "qq-topbar__timer", 3, "qq-topbar__timer--warning", "qq-topbar__timer--danger", 4, "ngIf"], [1, "qq-main"], [1, "qq-aside"], [1, "qq-aside__inner"], [1, "qq-aside__title"], [1, "qq-aside__counter"], [1, "qq-aside__legend"], [1, "qq-aside__legend-item", "qq-aside__legend-item--answered"], [1, "qq-aside__legend-dot"], [1, "qq-aside__legend-item", "qq-aside__legend-item--current"], [1, "qq-aside__legend-item"], [1, "qq-aside__legend-dot", "qq-aside__legend-dot--empty"], [1, "qq-aside__dots"], [1, "qq-questions-list"], ["class", "qq-acc-dot", 3, "qq-acc-dot--active", "qq-acc-dot--answered", "title", "click", 4, "ngFor", "ngForOf"], [1, "qq-content"], [1, "qq-question-header"], [1, "qq-question-num"], [1, "qq-q-prefix"], [1, "qq-q-total"], [1, "qq-question-type", 3, "ngClass"], [1, "isax", "me-1", 3, "ngClass"], [1, "qq-question-text"], ["class", "qq-options", 4, "ngIf"], [1, "qq-nav"], ["class", "qq-btn qq-btn--ghost", 3, "click", 4, "ngIf"], [1, "qq-btn", 3, "click", "disabled"], [1, "qq-topbar__timer"], [1, "isax", "isax-clock"], [1, "qq-topbar__timer-value"], [1, "qq-topbar__timer-sep"], [1, "qq-topbar__timer-total"], [1, "qq-acc-dot", 3, "click", "title"], [1, "qq-acc-dot__num"], [1, "qq-acc-dot__text"], [1, "qq-options"], ["class", "qq-option", 3, "qq-option--selected", "click", 4, "ngFor", "ngForOf"], [1, "qq-option", 3, "click"], [1, "qq-option__letter"], [1, "qq-option__text"], [1, "qq-option__check"], ["rows", "5", "placeholder", "Saisissez votre r\xE9ponse ici...", "maxlength", "1000", 1, "qq-textarea", 3, "ngModelChange", "ngModel"], [1, "qq-textarea-hint"], [1, "isax", "isax-edit-2", "me-1"], [1, "qq-btn", "qq-btn--ghost", 3, "click"], [1, "isax", "isax-arrow-right-2", "ms-2"], ["class", "qq-btn__loading", 4, "ngIf"], [1, "isax", "isax-send-2", "me-2"], [1, "qq-btn__loading"], [1, "qq-spinner"], [1, "qq-page", "qq-page--result"], [1, "qq-topbar", "qq-topbar--result"], [1, "qq-topbar__back", 3, "click"], [1, "qq-result-main"], [1, "qq-result-card"], ["class", "qq-result-decos", 4, "ngIf"], [1, "qq-score-ring"], ["viewBox", "0 0 140 140", 1, "qq-score-ring__svg"], ["cx", "70", "cy", "70", "r", "58", 1, "qq-score-ring__track"], ["cx", "70", "cy", "70", "r", "58", 1, "qq-score-ring__fill"], [1, "qq-score-ring__value"], [1, "qq-score-ring__pct"], [1, "qq-result-icon"], [1, "isax"], [1, "qq-result-message"], [1, "qq-result-min"], ["class", "qq-result-stats", 4, "ngIf"], [1, "qq-result-actions"], ["class", "qq-btn qq-btn--primary", 3, "click", 4, "ngIf"], [1, "qq-result-decos"], [1, "qq-deco", "qq-deco--1"], [1, "qq-deco", "qq-deco--2"], [1, "qq-deco", "qq-deco--3"], [1, "qq-deco", "qq-deco--4"], [1, "qq-result-stats"], [1, "qq-result-stat"], [1, "qq-result-stat__icon", "qq-result-stat__icon--green"], [1, "qq-result-stat__value"], [1, "qq-result-stat__label"], [1, "qq-result-stat__icon", "qq-result-stat__icon--blue"], [1, "isax", "isax-note-21"], [1, "qq-result-stat__icon", "qq-result-stat__icon--orange"], [1, "isax", "isax-repeat"], [1, "isax", "isax-refresh", "me-2"]], template: function StudentQuizQuestionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StudentQuizQuestionsComponent_div_0_Template, 8, 0, "div", 0)(1, StudentQuizQuestionsComponent_div_1_Template, 10, 1, "div", 1)(2, StudentQuizQuestionsComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.quiz);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, DecimalPipe], styles: ['\n\n.qq-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: #f8fafc;\n  gap: 24px;\n}\n.qq-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 56px;\n  height: 56px;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #11a9b7;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 42px;\n  height: 42px;\n  top: 7px;\n  left: 7px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 28px;\n  height: 28px;\n  top: 14px;\n  left: 14px;\n  border-top-color: #10b981;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 21px;\n  left: 21px;\n  border-top-color: #ef4444;\n  animation-delay: -0.9s;\n}\n@keyframes _ngcontent-%COMP%_qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.qq-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  gap: 16px;\n  background: #f8fafc;\n  text-align: center;\n  padding: 40px;\n}\n.qq-error__icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  color: #ef4444;\n}\n.qq-error[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.qq-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #f8fafc;\n  animation: _ngcontent-%COMP%_qq-fade-in 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_qq-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.qq-topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 0 32px;\n  height: 80px;\n  background: #ffffff;\n  border-bottom: 2px solid #e2e8f0;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n}\n.qq-topbar--result[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n.qq-topbar__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex: 1;\n  min-width: 0;\n}\n.qq-topbar__back[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  border: 1.5px solid #e2e8f0;\n  color: #475569;\n  cursor: pointer;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.qq-topbar__back[_ngcontent-%COMP%]:hover {\n  background: #e8f8fa;\n  border-color: rgba(17, 169, 183, 0.3);\n  color: #11a9b7;\n}\n.qq-topbar__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.qq-topbar__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #11a9b7;\n  line-height: 1;\n}\n.qq-topbar__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 3px 0 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n}\n.qq-topbar__center[_ngcontent-%COMP%] {\n  flex: 2;\n  max-width: 520px;\n}\n.qq-topbar__progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.qq-topbar__progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.qq-topbar__progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #11a9b7,\n      #10b981);\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.qq-topbar__progress-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.qq-topbar__progress-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1e293b;\n}\n.qq-topbar__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n}\n.qq-topbar__answered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 600;\n  background: #f1f5f9;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n}\n.qq-topbar__answered[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 15px;\n}\n.qq-topbar__timer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  transition: all 0.2s ease;\n}\n.qq-topbar__timer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #94a3b8;\n}\n.qq-topbar__timer-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1e293b;\n  font-variant-numeric: tabular-nums;\n}\n.qq-topbar__timer-sep[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #cbd5e1;\n}\n.qq-topbar__timer-total[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.qq-topbar__timer--warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border-color: rgba(245, 158, 11, 0.4);\n}\n.qq-topbar__timer--warning[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.qq-topbar__timer--warning[_ngcontent-%COMP%]   .qq-topbar__timer-value[_ngcontent-%COMP%] {\n  color: rgb(206.7275590551, 133.0173228346, 8.4724409449);\n}\n.qq-topbar__timer--danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: rgba(239, 68, 68, 0.4);\n  animation: _ngcontent-%COMP%_qq-pulse 1s ease-in-out infinite;\n}\n.qq-topbar__timer--danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.qq-topbar__timer--danger[_ngcontent-%COMP%]   .qq-topbar__timer-value[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n@keyframes _ngcontent-%COMP%_qq-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);\n  }\n  50% {\n    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.2);\n  }\n}\n.qq-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  gap: 0;\n  min-height: 0;\n}\n.qq-aside[_ngcontent-%COMP%] {\n  width: 320px;\n  flex-shrink: 0;\n  background: #f0fbfc;\n  border-right: 2px solid rgba(17, 169, 183, 0.15);\n  padding: 28px 20px;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n}\n.qq-aside__inner[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n.qq-aside__title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #11a9b7;\n  margin: 0 0 16px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.qq-aside__title[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 3px;\n  height: 14px;\n  background: #11a9b7;\n  border-radius: 99px;\n  display: inline-block;\n}\n.qq-aside__counter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fff;\n  border: 1.5px solid rgba(17, 169, 183, 0.2);\n  border-radius: 8px;\n  padding: 10px 14px;\n  margin-bottom: 16px;\n}\n.qq-aside__counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 500;\n}\n.qq-aside__counter[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #11a9b7;\n  font-weight: 800;\n}\n.qq-aside__dots[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.qq-aside__dot[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 700;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.qq-aside__dot[_ngcontent-%COMP%]:hover {\n  background: #e8f8fa;\n  border-color: rgba(17, 169, 183, 0.4);\n  color: #11a9b7;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 10px rgba(17, 169, 183, 0.15);\n}\n.qq-aside__dot--active[_ngcontent-%COMP%] {\n  background: #11a9b7;\n  border-color: #11a9b7;\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(17, 169, 183, 0.35);\n  transform: translateY(-1px);\n}\n.qq-aside__dot--answered[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: rgba(16, 185, 129, 0.35);\n  color: #10b981;\n}\n.qq-aside__legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n  padding: 10px 12px;\n  background: #fff;\n  border: 1.5px solid #f1f5f9;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.qq-aside__legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 10px;\n  color: #64748b;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.qq-aside__legend-item--answered[_ngcontent-%COMP%]   .qq-aside__legend-dot[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: rgba(16, 185, 129, 0.4);\n}\n.qq-aside__legend-item--current[_ngcontent-%COMP%]   .qq-aside__legend-dot[_ngcontent-%COMP%] {\n  background: #11a9b7;\n  border-color: #11a9b7;\n}\n.qq-aside__legend-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n  flex-shrink: 0;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n}\n.qq-aside__legend-dot--empty[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: #e2e8f0;\n}\n.qq-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 48px 72px;\n  overflow-y: auto;\n  max-width: 960px;\n}\n@media (max-width: 1024px) {\n  .qq-content[_ngcontent-%COMP%] {\n    padding: 28px 24px;\n  }\n}\n.qq-question-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 24px;\n}\n.qq-question-num[_ngcontent-%COMP%] {\n  min-width: 64px;\n  height: 52px;\n  border-radius: 14px;\n  background: #11a9b7;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 14px;\n  gap: 4px;\n  font-size: 15px;\n  font-weight: 900;\n  flex-shrink: 0;\n  box-shadow: 0 4px 14px rgba(17, 169, 183, 0.3);\n}\n.qq-question-num[_ngcontent-%COMP%]   span.qq-q-prefix[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0.75;\n  margin-right: 1px;\n}\n.qq-question-num[_ngcontent-%COMP%]   span.qq-q-total[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  opacity: 0.65;\n  margin-left: 2px;\n}\n.qq-question-type[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 6px 14px;\n  border-radius: 99px;\n}\n.qq-question-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.qq-question-type.qq-type-badge--mcq[_ngcontent-%COMP%] {\n  background: rgba(17, 169, 183, 0.1);\n  color: #0e8f9b;\n}\n.qq-question-type.qq-type-badge--tf[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(206.7275590551, 133.0173228346, 8.4724409449);\n}\n.qq-question-type.qq-type-badge--text[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n.qq-question-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.6;\n  margin: 0 0 32px;\n  padding: 20px 24px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-left: 4px solid #11a9b7;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 768px) {\n  .qq-question-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.qq-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 36px;\n}\n.qq-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  border-radius: 14px;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  text-align: left;\n  width: 100%;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.qq-option[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: #e8f8fa;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.qq-option[_ngcontent-%COMP%]:hover {\n  border-color: rgba(17, 169, 183, 0.45);\n  box-shadow: 0 4px 16px rgba(17, 169, 183, 0.1);\n  transform: translateX(3px);\n}\n.qq-option[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.qq-option--selected[_ngcontent-%COMP%] {\n  border-color: #11a9b7;\n  box-shadow: 0 0 0 3px rgba(17, 169, 183, 0.15);\n  background: #e8f8fa;\n  transform: translateX(3px);\n}\n.qq-option--selected[_ngcontent-%COMP%]   .qq-option__letter[_ngcontent-%COMP%] {\n  background: #11a9b7;\n  color: #fff;\n  border-color: #11a9b7;\n}\n.qq-option--selected[_ngcontent-%COMP%]   .qq-option__check[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #11a9b7;\n}\n.qq-option--selected[_ngcontent-%COMP%]   .qq-option__text[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.qq-option--selected[_ngcontent-%COMP%]::before {\n  opacity: 0;\n}\n.qq-option__letter[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  border: 1.5px solid #e2e8f0;\n  font-size: 12px;\n  font-weight: 800;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n  position: relative;\n  z-index: 1;\n}\n.qq-option__text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: #334155;\n  line-height: 1.5;\n  position: relative;\n  z-index: 1;\n  transition: all 0.2s ease;\n}\n.qq-option__check[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0;\n  transition: all 0.2s ease;\n  position: relative;\n  z-index: 1;\n}\n.qq-text-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.qq-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 18px 22px;\n  border-radius: 14px;\n  border: 2px solid #e2e8f0;\n  background: #fff;\n  font-size: 14px;\n  color: #1e293b;\n  resize: vertical;\n  outline: none;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  line-height: 1.6;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.qq-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #11a9b7;\n  box-shadow: 0 0 0 3px rgba(17, 169, 183, 0.1);\n}\n.qq-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #cbd5e1;\n}\n.qq-textarea-hint[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n}\n.qq-textarea-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.qq-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 28px;\n  border-top: 1px solid #f1f5f9;\n  margin-top: 8px;\n}\n.qq-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 28px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n  text-decoration: none;\n}\n.qq-btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #11a9b7,\n      #0e8f9b);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(17, 169, 183, 0.35);\n}\n.qq-btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(17, 169, 183, 0.45);\n}\n.qq-btn--success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      rgb(12.752238806, 147.447761194, 102.8149253731));\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);\n}\n.qq-btn--success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);\n}\n.qq-btn--ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.qq-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.qq-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.qq-btn__loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.qq-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.7s linear infinite;\n  display: inline-block;\n}\n.qq-page--result[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.qq-result-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n}\n.qq-result-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: #fff;\n  border-radius: 28px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  padding: 48px 56px;\n  max-width: 600px;\n  width: 100%;\n  text-align: center;\n  animation: _ngcontent-%COMP%_qq-fade-in 0.4s ease;\n}\n.qq-result-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n}\n.qq-result-card--success[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #11a9b7,\n      #10b981);\n}\n.qq-result-card--fail[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #ef4444);\n}\n.qq-result-decos[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.qq-deco[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 28px;\n  animation: _ngcontent-%COMP%_qq-float 4s ease-in-out infinite;\n}\n.qq-deco--1[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 8%;\n  animation-delay: 0s;\n  font-size: 32px;\n}\n.qq-deco--2[_ngcontent-%COMP%] {\n  top: 15%;\n  right: 10%;\n  animation-delay: 0.8s;\n  font-size: 24px;\n}\n.qq-deco--3[_ngcontent-%COMP%] {\n  bottom: 20%;\n  left: 12%;\n  animation-delay: 1.5s;\n  font-size: 28px;\n}\n.qq-deco--4[_ngcontent-%COMP%] {\n  bottom: 15%;\n  right: 8%;\n  animation-delay: 0.4s;\n  font-size: 20px;\n}\n@keyframes _ngcontent-%COMP%_qq-float {\n  0%, 100% {\n    transform: translateY(0) rotate(-5deg);\n  }\n  50% {\n    transform: translateY(-14px) rotate(5deg);\n  }\n}\n.qq-score-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 160px;\n  height: 160px;\n  margin: 0 auto 24px;\n}\n.qq-score-ring__svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.qq-score-ring__track[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #f1f5f9;\n  stroke-width: 10;\n}\n.qq-score-ring__fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 10;\n  stroke-linecap: round;\n  stroke-dasharray: 364;\n  transition: stroke-dashoffset 1s ease;\n}\n.qq-score-ring__fill--success[_ngcontent-%COMP%] {\n  stroke: #10b981;\n}\n.qq-score-ring__fill--fail[_ngcontent-%COMP%] {\n  stroke: #ef4444;\n}\n.qq-score-ring__value[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 36px;\n  font-weight: 900;\n  line-height: 1;\n}\n.qq-score-ring__pct[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-left: 2px;\n}\n.qq-result-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  margin: 0 auto 20px;\n  background: rgba(239, 68, 68, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.qq-result-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #ef4444;\n}\n.qq-result-icon--success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n}\n.qq-result-icon--success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.qq-result-message[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.qq-result-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.qq-result-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0 0 12px;\n}\n.qq-result-min[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  color: #94a3b8;\n  background: #f1f5f9;\n  padding: 4px 14px;\n  border-radius: 99px;\n}\n.qq-result-min[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #334155;\n}\n.qq-result-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.qq-result-stat[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  border-radius: 14px;\n  padding: 16px 12px;\n}\n.qq-result-stat__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 8px;\n}\n.qq-result-stat__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.qq-result-stat__icon--green[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n}\n.qq-result-stat__icon--green[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.qq-result-stat__icon--blue[_ngcontent-%COMP%] {\n  background: rgba(17, 169, 183, 0.1);\n}\n.qq-result-stat__icon--blue[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #11a9b7;\n}\n.qq-result-stat__icon--orange[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n}\n.qq-result-stat__icon--orange[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.qq-result-stat__value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 900;\n  color: #0f172a;\n  line-height: 1;\n}\n.qq-result-stat__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.qq-result-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n@media (max-width: 1024px) {\n  .qq-aside[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n}\n@media (max-width: 768px) {\n  .qq-topbar[_ngcontent-%COMP%] {\n    padding: 0 14px;\n    gap: 10px;\n    height: 64px;\n  }\n  .qq-topbar__center[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .qq-topbar__title[_ngcontent-%COMP%] {\n    max-width: 160px;\n    font-size: 13px;\n  }\n  .qq-topbar__answered[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .qq-topbar__timer-sep[_ngcontent-%COMP%], \n   .qq-topbar__timer-total[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .qq-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .qq-aside[_ngcontent-%COMP%] {\n    width: 100%;\n    border-right: none;\n    border-bottom: 2px solid rgba(17, 169, 183, 0.15);\n    padding: 12px 16px;\n  }\n  .qq-aside__legend[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .qq-aside__inner[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .qq-content[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .qq-question-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .qq-result-card[_ngcontent-%COMP%] {\n    padding: 32px 20px;\n  }\n  .qq-result-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n  }\n}\n.qq-char-warn[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: 700;\n}\n.qq-questions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.qq-acc-dot[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  text-align: left;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  min-height: 44px;\n}\n.qq-acc-dot__num[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: #11a9b7;\n  background: #e8f8fa;\n  border-radius: 4px;\n  padding: 2px 6px;\n  flex-shrink: 0;\n  line-height: 1.6;\n  white-space: nowrap;\n}\n.qq-acc-dot__text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #475569;\n  line-height: 1.45;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.qq-acc-dot[_ngcontent-%COMP%]:hover {\n  background: #e8f8fa;\n  border-color: rgba(17, 169, 183, 0.4);\n  transform: translateX(2px);\n  box-shadow: 0 4px 10px rgba(17, 169, 183, 0.1);\n}\n.qq-acc-dot[_ngcontent-%COMP%]:hover   .qq-acc-dot__text[_ngcontent-%COMP%] {\n  color: #11a9b7;\n}\n.qq-acc-dot[_ngcontent-%COMP%]:hover   .qq-acc-dot__num[_ngcontent-%COMP%] {\n  background: rgba(17, 169, 183, 0.2);\n}\n.qq-acc-dot--active[_ngcontent-%COMP%] {\n  background: #11a9b7;\n  border-color: #11a9b7;\n  box-shadow: 0 4px 12px rgba(17, 169, 183, 0.35);\n  transform: translateX(2px);\n}\n.qq-acc-dot--active[_ngcontent-%COMP%]   .qq-acc-dot__num[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n}\n.qq-acc-dot--active[_ngcontent-%COMP%]   .qq-acc-dot__text[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 600;\n}\n.qq-acc-dot--answered[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: rgba(16, 185, 129, 0.35);\n}\n.qq-acc-dot--answered[_ngcontent-%COMP%]   .qq-acc-dot__num[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n}\n.qq-acc-dot--answered[_ngcontent-%COMP%]   .qq-acc-dot__text[_ngcontent-%COMP%] {\n  color: rgb(13.9701492537, 161.5298507463, 112.6343283582);\n}\n/*# sourceMappingURL=student-quiz-questions.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentQuizQuestionsComponent, [{
    type: Component,
    args: [{ selector: "app-student-quiz-questions", standalone: true, imports: [CommonModule, RouterLink, FormsModule], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     LOADING\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="qq-loading" *ngIf="loading">\r
  <div class="qq-loading__ring">\r
    <div></div><div></div><div></div><div></div>\r
  </div>\r
  <p>Pr\xE9paration du quiz...</p>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     ERREUR\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="qq-error" *ngIf="error && !loading">\r
  <div class="qq-error__icon"><i class="isax isax-warning-2"></i></div>\r
  <h3>Une erreur est survenue</h3>\r
  <p>{{ error }}</p>\r
  <button class="qq-btn qq-btn--primary" (click)="retournerAuxQuiz()">\r
    <i class="isax isax-arrow-left-2 me-2"></i>Retour aux quiz\r
  </button>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     QUIZ PLEIN \xC9CRAN\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="!loading && !error && quiz">\r
\r
  <!-- \u2500\u2500\u2500 QUESTIONS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <ng-container *ngFor="let question of questions; let i = index">\r
    <div class="qq-page" *ngIf="selected === i + 1">\r
\r
      <!-- \u2500\u2500 TOPBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <header class="qq-topbar">\r
        <div class="qq-topbar__left">\r
          <button class="qq-topbar__back" (click)="retournerAuxQuiz()" title="Retour">\r
            <i class="isax isax-arrow-left-2"></i>\r
          </button>\r
          <div class="qq-topbar__meta">\r
            <span class="qq-topbar__label">Quiz final</span>\r
            <h1 class="qq-topbar__title">{{ quiz.titre }}</h1>\r
          </div>\r
        </div>\r
\r
        <div class="qq-topbar__center">\r
          <div class="qq-topbar__progress">\r
            <div class="qq-topbar__progress-track">\r
              <div class="qq-topbar__progress-fill" [style.width.%]="progressPercent"></div>\r
            </div>\r
            <span class="qq-topbar__progress-label">\r
              <strong>{{ selected }}</strong>/{{ totalQuestions }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <div class="qq-topbar__right">\r
          <div class="qq-topbar__answered">\r
            <i class="isax isax-tick-circle"></i>\r
            <span>{{ totalAnswered }} / {{ totalQuestions }}</span>\r
          </div>\r
          <div class="qq-topbar__timer"\r
               *ngIf="quiz.duree_minutes"\r
               [class.qq-topbar__timer--warning]="timeLeft < 120"\r
               [class.qq-topbar__timer--danger]="timeLeft < 60">\r
            <i class="isax isax-clock"></i>\r
            <span class="qq-topbar__timer-value">{{ timerLabel }}</span>\r
            <span class="qq-topbar__timer-sep">/</span>\r
            <span class="qq-topbar__timer-total">{{ totalTimeLabel }}</span>\r
          </div>\r
        </div>\r
      </header>\r
\r
      <!-- \u2500\u2500 CORPS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
      <main class="qq-main">\r
\r
        <!-- Panneau gauche : navigation dots -->\r
        <aside class="qq-aside">\r
          <div class="qq-aside__inner">\r
            <p class="qq-aside__title">Questions</p>\r
\r
            <!-- Compteur avancement -->\r
            <div class="qq-aside__counter">\r
              <span>R\xE9pondues</span>\r
              <strong>{{ totalAnswered }}/{{ totalQuestions }}</strong>\r
            </div>\r
\r
            <!-- L\xE9gende horizontale -->\r
            <div class="qq-aside__legend">\r
              <span class="qq-aside__legend-item qq-aside__legend-item--answered">\r
                <span class="qq-aside__legend-dot"></span>R\xE9pondu\r
              </span>\r
              <span class="qq-aside__legend-item qq-aside__legend-item--current">\r
                <span class="qq-aside__legend-dot"></span>En cours\r
              </span>\r
              <span class="qq-aside__legend-item">\r
                <span class="qq-aside__legend-dot qq-aside__legend-dot--empty"></span>Non r\xE9pondu\r
              </span>\r
            </div>\r
\r
            <div class="qq-aside__dots">\r
\r
              <!-- Liste directe des questions -->\r
              <div class="qq-questions-list">\r
                <button class="qq-acc-dot"\r
                        *ngFor="let question of questions; let i = index"\r
                        [class.qq-acc-dot--active]="selected === i + 1"\r
                        [class.qq-acc-dot--answered]="isAnswered(question) && selected !== i + 1"\r
                        (click)="selected = i + 1; scrollToActive()"\r
                        [title]="question.question_text">\r
                  <span class="qq-acc-dot__num">Q{{ i + 1 }}</span>\r
                  <span class="qq-acc-dot__text">{{ question.question_text }}</span>\r
                </button>\r
              </div>\r
\r
            </div>\r
          </div>\r
        </aside>\r
\r
        <!-- Zone principale question -->\r
        <section class="qq-content">\r
\r
          <!-- En-t\xEAte question -->\r
          <div class="qq-question-header">\r
            <div class="qq-question-num">\r
              <span class="qq-q-prefix">Q</span>{{ selected }}<span class="qq-q-total">/{{ totalQuestions }}</span>\r
            </div>\r
            <div class="qq-question-type" [ngClass]="getTypeBadgeClass(question.type)">\r
              <i class="isax me-1" [ngClass]="getTypeIcon(question.type)"></i>\r
              {{ getTypeLabel(question.type) }}\r
            </div>\r
          </div>\r
\r
          <!-- Texte de la question -->\r
          <p class="qq-question-text">{{ question.question_text }}</p>\r
\r
          <!-- \u2500\u2500 Options QCM / Vrai-Faux \u2500\u2500 -->\r
          <div class="qq-options" *ngIf="question.type === 'multiple_choice' || question.type === 'true_false'">\r
            <button class="qq-option"\r
                    *ngFor="let rep of question.reponses; let ri = index"\r
                    [class.qq-option--selected]="isSelected(question.id, rep.id)"\r
                    (click)="selectReponse(question.id, rep.id)">\r
              <span class="qq-option__letter">{{ getOptionLetter(ri) }}</span>\r
              <span class="qq-option__text">{{ rep.reponse_text }}</span>\r
              <span class="qq-option__check">\r
                <i class="isax isax-tick-circle"></i>\r
              </span>\r
            </button>\r
          </div>\r
\r
          <!-- \u2500\u2500 Texte libre \u2500\u2500 -->\r
          <div *ngIf="question.type === 'text'">\r
            <textarea class="qq-textarea"\r
                      rows="5"\r
                      placeholder="Saisissez votre r\xE9ponse ici..."\r
                      [(ngModel)]="textReponses[question.id]"\r
                      maxlength="1000">\r
            </textarea>\r
            <div class="qq-textarea-hint">\r
              <i class="isax isax-edit-2 me-1"></i>\r
              R\xE9ponse libre \u2014 orthographe exacte requise &nbsp;\xB7&nbsp;\r
              <span [class.qq-char-warn]="(textReponses[question.id]?.length ?? 0) >= 900">\r
                {{ textReponses[question.id]?.length ?? 0 }} / 1000\r
              </span>\r
            </div>\r
          </div>\r
\r
          <!-- \u2500\u2500 Navigation \u2500\u2500 -->\r
          <div class="qq-nav">\r
            <button class="qq-btn qq-btn--ghost"\r
                    *ngIf="selected > 1"\r
                    (click)="movePrev()">\r
              <i class="isax isax-arrow-left-2 me-2"></i>Pr\xE9c\xE9dent\r
            </button>\r
            <span *ngIf="selected === 1"></span>\r
\r
            <button class="qq-btn"\r
                   [class.qq-btn--primary]="selected < totalQuestions"\r
                   [class.qq-btn--success]="selected === totalQuestions"\r
                   (click)="moveNext()"\r
                   [disabled]="submitting">\r
              <ng-container *ngIf="selected < totalQuestions">\r
                Suivant<i class="isax isax-arrow-right-2 ms-2"></i>\r
              </ng-container>\r
              <ng-container *ngIf="selected === totalQuestions">\r
                <span *ngIf="!submitting">\r
                  <i class="isax isax-send-2 me-2"></i>Terminer le quiz\r
                </span>\r
                <span *ngIf="submitting" class="qq-btn__loading">\r
                  <span class="qq-spinner"></span>Envoi en cours...\r
                </span>\r
              </ng-container>\r
            </button>\r
          </div>\r
\r
        </section>\r
      </main>\r
    </div>\r
  </ng-container>\r
\r
  <!-- \u2500\u2500\u2500 R\xC9SULTAT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="qq-page qq-page--result" *ngIf="submitted && selected === totalQuestions + 1">\r
\r
    <header class="qq-topbar qq-topbar--result">\r
      <div class="qq-topbar__left">\r
        <button class="qq-topbar__back" (click)="retournerAuxQuiz()">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
        <div class="qq-topbar__meta">\r
          <span class="qq-topbar__label">R\xE9sultat final</span>\r
          <h1 class="qq-topbar__title">{{ quiz.titre }}</h1>\r
        </div>\r
      </div>\r
    </header>\r
\r
    <main class="qq-result-main">\r
      <div class="qq-result-card"\r
           [class.qq-result-card--success]="estReussi"\r
           [class.qq-result-card--fail]="!estReussi">\r
\r
        <div class="qq-result-decos" *ngIf="estReussi">\r
          <span class="qq-deco qq-deco--1">\u{1F389}</span>\r
          <span class="qq-deco qq-deco--2">\u2B50</span>\r
          <span class="qq-deco qq-deco--3">\u{1F3C6}</span>\r
          <span class="qq-deco qq-deco--4">\u2728</span>\r
        </div>\r
        <div class="qq-result-decos" *ngIf="!estReussi">\r
          <span class="qq-deco qq-deco--1">\u{1F4AA}</span>\r
          <span class="qq-deco qq-deco--2">\u{1F4DA}</span>\r
        </div>\r
\r
        <div class="qq-score-ring">\r
          <svg viewBox="0 0 140 140" class="qq-score-ring__svg">\r
            <circle cx="70" cy="70" r="58" class="qq-score-ring__track"/>\r
            <circle cx="70" cy="70" r="58" class="qq-score-ring__fill"\r
                    [class.qq-score-ring__fill--success]="estReussi"\r
                    [class.qq-score-ring__fill--fail]="!estReussi"\r
                    [style.stroke-dashoffset]="getScoreDashOffset()"/>\r
          </svg>\r
          <div class="qq-score-ring__value" [style.color]="getNoteColor()">\r
            {{ noteFinale | number:'1.0-0' }}<span class="qq-score-ring__pct">%</span>\r
          </div>\r
        </div>\r
\r
        <div class="qq-result-icon" [class.qq-result-icon--success]="estReussi">\r
          <i class="isax" [class.isax-award]="estReussi" [class.isax-close-circle]="!estReussi"></i>\r
        </div>\r
\r
        <div class="qq-result-message">\r
          <h2 *ngIf="estReussi">F\xE9licitations ! \u{1F389}</h2>\r
          <h2 *ngIf="!estReussi">Pas cette fois...</h2>\r
          <p *ngIf="estReussi">Excellent travail ! Votre ma\xEEtrise du sujet est confirm\xE9e.</p>\r
          <p *ngIf="!estReussi">Ne vous d\xE9couragez pas \u2014 r\xE9visez et retentez. Vous pouvez y arriver !</p>\r
          <div class="qq-result-min">\r
            Score minimum requis : <strong>{{ quiz.score_minimum }}%</strong>\r
          </div>\r
        </div>\r
\r
        <div class="qq-result-stats" *ngIf="resultat?.bonnes_reponses !== undefined">\r
          <div class="qq-result-stat">\r
            <div class="qq-result-stat__icon qq-result-stat__icon--green">\r
              <i class="isax isax-tick-circle"></i>\r
            </div>\r
            <div class="qq-result-stat__value">{{ resultat.bonnes_reponses }}</div>\r
            <div class="qq-result-stat__label">Bonnes r\xE9ponses</div>\r
          </div>\r
          <div class="qq-result-stat">\r
            <div class="qq-result-stat__icon qq-result-stat__icon--blue">\r
              <i class="isax isax-note-21"></i>\r
            </div>\r
            <div class="qq-result-stat__value">{{ resultat.total_questions ?? totalQuestions }}</div>\r
            <div class="qq-result-stat__label">Total questions</div>\r
          </div>\r
          <div class="qq-result-stat">\r
            <div class="qq-result-stat__icon qq-result-stat__icon--orange">\r
              <i class="isax isax-repeat"></i>\r
            </div>\r
            <div class="qq-result-stat__value">{{ resultat.nombre_tentatives ?? 1 }}</div>\r
            <div class="qq-result-stat__label">Tentative(s)</div>\r
          </div>\r
        </div>\r
\r
        <div class="qq-result-actions">\r
          <button class="qq-btn qq-btn--ghost" (click)="retournerAuxQuiz()">\r
            <i class="isax isax-arrow-left-2 me-2"></i>Mes Quiz\r
          </button>\r
          <button class="qq-btn qq-btn--primary" *ngIf="!estReussi" (click)="loadQuiz(quiz!.id)">\r
            <i class="isax isax-refresh me-2"></i>R\xE9essayer\r
          </button>\r
        </div>\r
\r
      </div>\r
    </main>\r
  </div>\r
\r
</ng-container>`, styles: ['/* src/app/features/student/student-quiz-questions/student-quiz-questions.component.scss */\n.qq-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: #f8fafc;\n  gap: 24px;\n}\n.qq-loading p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring {\n  position: relative;\n  width: 56px;\n  height: 56px;\n}\n.qq-loading__ring div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #11a9b7;\n  border-radius: 50%;\n  animation: qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring div:nth-child(2) {\n  width: 42px;\n  height: 42px;\n  top: 7px;\n  left: 7px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring div:nth-child(3) {\n  width: 28px;\n  height: 28px;\n  top: 14px;\n  left: 14px;\n  border-top-color: #10b981;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring div:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 21px;\n  left: 21px;\n  border-top-color: #ef4444;\n  animation-delay: -0.9s;\n}\n@keyframes qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.qq-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  gap: 16px;\n  background: #f8fafc;\n  text-align: center;\n  padding: 40px;\n}\n.qq-error__icon {\n  font-size: 3.5rem;\n  color: #ef4444;\n}\n.qq-error h3 {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.qq-error p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-page {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #f8fafc;\n  animation: qq-fade-in 0.3s ease;\n}\n@keyframes qq-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.qq-topbar {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 0 32px;\n  height: 80px;\n  background: #ffffff;\n  border-bottom: 2px solid #e2e8f0;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n}\n.qq-topbar--result {\n  background: #ffffff;\n}\n.qq-topbar__left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex: 1;\n  min-width: 0;\n}\n.qq-topbar__back {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  border: 1.5px solid #e2e8f0;\n  color: #475569;\n  cursor: pointer;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.qq-topbar__back:hover {\n  background: #e8f8fa;\n  border-color: rgba(17, 169, 183, 0.3);\n  color: #11a9b7;\n}\n.qq-topbar__meta {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.qq-topbar__label {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #11a9b7;\n  line-height: 1;\n}\n.qq-topbar__title {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 3px 0 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n}\n.qq-topbar__center {\n  flex: 2;\n  max-width: 520px;\n}\n.qq-topbar__progress {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.qq-topbar__progress-track {\n  flex: 1;\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.qq-topbar__progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #11a9b7,\n      #10b981);\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.qq-topbar__progress-label {\n  font-size: 13px;\n  color: #94a3b8;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.qq-topbar__progress-label strong {\n  color: #1e293b;\n}\n.qq-topbar__right {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n}\n.qq-topbar__answered {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 600;\n  background: #f1f5f9;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n}\n.qq-topbar__answered i {\n  color: #10b981;\n  font-size: 15px;\n}\n.qq-topbar__timer {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  transition: all 0.2s ease;\n}\n.qq-topbar__timer i {\n  font-size: 15px;\n  color: #94a3b8;\n}\n.qq-topbar__timer-value {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1e293b;\n  font-variant-numeric: tabular-nums;\n}\n.qq-topbar__timer-sep {\n  font-size: 12px;\n  color: #cbd5e1;\n}\n.qq-topbar__timer-total {\n  font-size: 12px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.qq-topbar__timer--warning {\n  background: #fffbeb;\n  border-color: rgba(245, 158, 11, 0.4);\n}\n.qq-topbar__timer--warning i {\n  color: #f59e0b;\n}\n.qq-topbar__timer--warning .qq-topbar__timer-value {\n  color: rgb(206.7275590551, 133.0173228346, 8.4724409449);\n}\n.qq-topbar__timer--danger {\n  background: #fef2f2;\n  border-color: rgba(239, 68, 68, 0.4);\n  animation: qq-pulse 1s ease-in-out infinite;\n}\n.qq-topbar__timer--danger i {\n  color: #ef4444;\n}\n.qq-topbar__timer--danger .qq-topbar__timer-value {\n  color: #ef4444;\n}\n@keyframes qq-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);\n  }\n  50% {\n    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.2);\n  }\n}\n.qq-main {\n  display: flex;\n  flex: 1;\n  gap: 0;\n  min-height: 0;\n}\n.qq-aside {\n  width: 320px;\n  flex-shrink: 0;\n  background: #f0fbfc;\n  border-right: 2px solid rgba(17, 169, 183, 0.15);\n  padding: 28px 20px;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n}\n.qq-aside__inner {\n  position: sticky;\n  top: 0;\n}\n.qq-aside__title {\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #11a9b7;\n  margin: 0 0 16px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.qq-aside__title::before {\n  content: "";\n  width: 3px;\n  height: 14px;\n  background: #11a9b7;\n  border-radius: 99px;\n  display: inline-block;\n}\n.qq-aside__counter {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fff;\n  border: 1.5px solid rgba(17, 169, 183, 0.2);\n  border-radius: 8px;\n  padding: 10px 14px;\n  margin-bottom: 16px;\n}\n.qq-aside__counter span {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 500;\n}\n.qq-aside__counter strong {\n  font-size: 14px;\n  color: #11a9b7;\n  font-weight: 800;\n}\n.qq-aside__dots {\n  margin-bottom: 24px;\n}\n.qq-aside__dot {\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 700;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.qq-aside__dot:hover {\n  background: #e8f8fa;\n  border-color: rgba(17, 169, 183, 0.4);\n  color: #11a9b7;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 10px rgba(17, 169, 183, 0.15);\n}\n.qq-aside__dot--active {\n  background: #11a9b7;\n  border-color: #11a9b7;\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(17, 169, 183, 0.35);\n  transform: translateY(-1px);\n}\n.qq-aside__dot--answered {\n  background: #f0fdf4;\n  border-color: rgba(16, 185, 129, 0.35);\n  color: #10b981;\n}\n.qq-aside__legend {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n  padding: 10px 12px;\n  background: #fff;\n  border: 1.5px solid #f1f5f9;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.qq-aside__legend-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 10px;\n  color: #64748b;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.qq-aside__legend-item--answered .qq-aside__legend-dot {\n  background: #f0fdf4;\n  border-color: rgba(16, 185, 129, 0.4);\n}\n.qq-aside__legend-item--current .qq-aside__legend-dot {\n  background: #11a9b7;\n  border-color: #11a9b7;\n}\n.qq-aside__legend-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n  flex-shrink: 0;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n}\n.qq-aside__legend-dot--empty {\n  background: #fff;\n  border-color: #e2e8f0;\n}\n.qq-content {\n  flex: 1;\n  padding: 48px 72px;\n  overflow-y: auto;\n  max-width: 960px;\n}\n@media (max-width: 1024px) {\n  .qq-content {\n    padding: 28px 24px;\n  }\n}\n.qq-question-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 24px;\n}\n.qq-question-num {\n  min-width: 64px;\n  height: 52px;\n  border-radius: 14px;\n  background: #11a9b7;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 14px;\n  gap: 4px;\n  font-size: 15px;\n  font-weight: 900;\n  flex-shrink: 0;\n  box-shadow: 0 4px 14px rgba(17, 169, 183, 0.3);\n}\n.qq-question-num span.qq-q-prefix {\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0.75;\n  margin-right: 1px;\n}\n.qq-question-num span.qq-q-total {\n  font-size: 11px;\n  font-weight: 500;\n  opacity: 0.65;\n  margin-left: 2px;\n}\n.qq-question-type {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 6px 14px;\n  border-radius: 99px;\n}\n.qq-question-type i {\n  font-size: 12px;\n}\n.qq-question-type.qq-type-badge--mcq {\n  background: rgba(17, 169, 183, 0.1);\n  color: #0e8f9b;\n}\n.qq-question-type.qq-type-badge--tf {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(206.7275590551, 133.0173228346, 8.4724409449);\n}\n.qq-question-type.qq-type-badge--text {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n.qq-question-text {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.6;\n  margin: 0 0 32px;\n  padding: 20px 24px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-left: 4px solid #11a9b7;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 768px) {\n  .qq-question-text {\n    font-size: 16px;\n  }\n}\n.qq-options {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 36px;\n}\n.qq-option {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  border-radius: 14px;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  text-align: left;\n  width: 100%;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.qq-option::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: #e8f8fa;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.qq-option:hover {\n  border-color: rgba(17, 169, 183, 0.45);\n  box-shadow: 0 4px 16px rgba(17, 169, 183, 0.1);\n  transform: translateX(3px);\n}\n.qq-option:hover::before {\n  opacity: 1;\n}\n.qq-option--selected {\n  border-color: #11a9b7;\n  box-shadow: 0 0 0 3px rgba(17, 169, 183, 0.15);\n  background: #e8f8fa;\n  transform: translateX(3px);\n}\n.qq-option--selected .qq-option__letter {\n  background: #11a9b7;\n  color: #fff;\n  border-color: #11a9b7;\n}\n.qq-option--selected .qq-option__check {\n  opacity: 1;\n  color: #11a9b7;\n}\n.qq-option--selected .qq-option__text {\n  color: #0f172a;\n  font-weight: 600;\n}\n.qq-option--selected::before {\n  opacity: 0;\n}\n.qq-option__letter {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  border: 1.5px solid #e2e8f0;\n  font-size: 12px;\n  font-weight: 800;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n  position: relative;\n  z-index: 1;\n}\n.qq-option__text {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: #334155;\n  line-height: 1.5;\n  position: relative;\n  z-index: 1;\n  transition: all 0.2s ease;\n}\n.qq-option__check {\n  font-size: 18px;\n  opacity: 0;\n  transition: all 0.2s ease;\n  position: relative;\n  z-index: 1;\n}\n.qq-text-wrap {\n  margin-bottom: 36px;\n}\n.qq-textarea {\n  width: 100%;\n  padding: 18px 22px;\n  border-radius: 14px;\n  border: 2px solid #e2e8f0;\n  background: #fff;\n  font-size: 14px;\n  color: #1e293b;\n  resize: vertical;\n  outline: none;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  line-height: 1.6;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.qq-textarea:focus {\n  border-color: #11a9b7;\n  box-shadow: 0 0 0 3px rgba(17, 169, 183, 0.1);\n}\n.qq-textarea::placeholder {\n  color: #cbd5e1;\n}\n.qq-textarea-hint {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n}\n.qq-textarea-hint i {\n  font-size: 13px;\n}\n.qq-nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 28px;\n  border-top: 1px solid #f1f5f9;\n  margin-top: 8px;\n}\n.qq-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 28px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n  text-decoration: none;\n}\n.qq-btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #11a9b7,\n      #0e8f9b);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(17, 169, 183, 0.35);\n}\n.qq-btn--primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(17, 169, 183, 0.45);\n}\n.qq-btn--success {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      rgb(12.752238806, 147.447761194, 102.8149253731));\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);\n}\n.qq-btn--success:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);\n}\n.qq-btn--ghost {\n  background: #fff;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.qq-btn--ghost:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.qq-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.qq-btn__loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.qq-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: qq-spin 0.7s linear infinite;\n  display: inline-block;\n}\n.qq-page--result {\n  background: #f8fafc;\n}\n.qq-result-main {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n}\n.qq-result-card {\n  position: relative;\n  overflow: hidden;\n  background: #fff;\n  border-radius: 28px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  padding: 48px 56px;\n  max-width: 600px;\n  width: 100%;\n  text-align: center;\n  animation: qq-fade-in 0.4s ease;\n}\n.qq-result-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n}\n.qq-result-card--success::before {\n  background:\n    linear-gradient(\n      90deg,\n      #11a9b7,\n      #10b981);\n}\n.qq-result-card--fail::before {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #ef4444);\n}\n.qq-result-decos {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.qq-deco {\n  position: absolute;\n  font-size: 28px;\n  animation: qq-float 4s ease-in-out infinite;\n}\n.qq-deco--1 {\n  top: 10%;\n  left: 8%;\n  animation-delay: 0s;\n  font-size: 32px;\n}\n.qq-deco--2 {\n  top: 15%;\n  right: 10%;\n  animation-delay: 0.8s;\n  font-size: 24px;\n}\n.qq-deco--3 {\n  bottom: 20%;\n  left: 12%;\n  animation-delay: 1.5s;\n  font-size: 28px;\n}\n.qq-deco--4 {\n  bottom: 15%;\n  right: 8%;\n  animation-delay: 0.4s;\n  font-size: 20px;\n}\n@keyframes qq-float {\n  0%, 100% {\n    transform: translateY(0) rotate(-5deg);\n  }\n  50% {\n    transform: translateY(-14px) rotate(5deg);\n  }\n}\n.qq-score-ring {\n  position: relative;\n  width: 160px;\n  height: 160px;\n  margin: 0 auto 24px;\n}\n.qq-score-ring__svg {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.qq-score-ring__track {\n  fill: none;\n  stroke: #f1f5f9;\n  stroke-width: 10;\n}\n.qq-score-ring__fill {\n  fill: none;\n  stroke-width: 10;\n  stroke-linecap: round;\n  stroke-dasharray: 364;\n  transition: stroke-dashoffset 1s ease;\n}\n.qq-score-ring__fill--success {\n  stroke: #10b981;\n}\n.qq-score-ring__fill--fail {\n  stroke: #ef4444;\n}\n.qq-score-ring__value {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 36px;\n  font-weight: 900;\n  line-height: 1;\n}\n.qq-score-ring__pct {\n  font-size: 18px;\n  font-weight: 600;\n  margin-left: 2px;\n}\n.qq-result-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  margin: 0 auto 20px;\n  background: rgba(239, 68, 68, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.qq-result-icon i {\n  font-size: 26px;\n  color: #ef4444;\n}\n.qq-result-icon--success {\n  background: rgba(16, 185, 129, 0.1);\n}\n.qq-result-icon--success i {\n  color: #10b981;\n}\n.qq-result-message {\n  margin-bottom: 28px;\n}\n.qq-result-message h2 {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.qq-result-message p {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0 0 12px;\n}\n.qq-result-min {\n  display: inline-block;\n  font-size: 12px;\n  color: #94a3b8;\n  background: #f1f5f9;\n  padding: 4px 14px;\n  border-radius: 99px;\n}\n.qq-result-min strong {\n  color: #334155;\n}\n.qq-result-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.qq-result-stat {\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  border-radius: 14px;\n  padding: 16px 12px;\n}\n.qq-result-stat__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 8px;\n}\n.qq-result-stat__icon i {\n  font-size: 18px;\n}\n.qq-result-stat__icon--green {\n  background: rgba(16, 185, 129, 0.1);\n}\n.qq-result-stat__icon--green i {\n  color: #10b981;\n}\n.qq-result-stat__icon--blue {\n  background: rgba(17, 169, 183, 0.1);\n}\n.qq-result-stat__icon--blue i {\n  color: #11a9b7;\n}\n.qq-result-stat__icon--orange {\n  background: rgba(245, 158, 11, 0.12);\n}\n.qq-result-stat__icon--orange i {\n  color: #f59e0b;\n}\n.qq-result-stat__value {\n  font-size: 26px;\n  font-weight: 900;\n  color: #0f172a;\n  line-height: 1;\n}\n.qq-result-stat__label {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.qq-result-actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n@media (max-width: 1024px) {\n  .qq-aside {\n    width: 260px;\n  }\n}\n@media (max-width: 768px) {\n  .qq-topbar {\n    padding: 0 14px;\n    gap: 10px;\n    height: 64px;\n  }\n  .qq-topbar__center {\n    display: none;\n  }\n  .qq-topbar__title {\n    max-width: 160px;\n    font-size: 13px;\n  }\n  .qq-topbar__answered {\n    display: none;\n  }\n  .qq-topbar__timer-sep,\n  .qq-topbar__timer-total {\n    display: none;\n  }\n  .qq-main {\n    flex-direction: column;\n  }\n  .qq-aside {\n    width: 100%;\n    border-right: none;\n    border-bottom: 2px solid rgba(17, 169, 183, 0.15);\n    padding: 12px 16px;\n  }\n  .qq-aside__legend {\n    display: none;\n  }\n  .qq-aside__inner {\n    position: static;\n  }\n  .qq-content {\n    padding: 20px 16px;\n  }\n  .qq-question-text {\n    font-size: 16px;\n  }\n  .qq-result-card {\n    padding: 32px 20px;\n  }\n  .qq-result-stats {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n  }\n}\n.qq-char-warn {\n  color: #ef4444;\n  font-weight: 700;\n}\n.qq-questions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.qq-acc-dot {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  text-align: left;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  min-height: 44px;\n}\n.qq-acc-dot__num {\n  font-size: 10px;\n  font-weight: 800;\n  color: #11a9b7;\n  background: #e8f8fa;\n  border-radius: 4px;\n  padding: 2px 6px;\n  flex-shrink: 0;\n  line-height: 1.6;\n  white-space: nowrap;\n}\n.qq-acc-dot__text {\n  font-size: 11px;\n  font-weight: 500;\n  color: #475569;\n  line-height: 1.45;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.qq-acc-dot:hover {\n  background: #e8f8fa;\n  border-color: rgba(17, 169, 183, 0.4);\n  transform: translateX(2px);\n  box-shadow: 0 4px 10px rgba(17, 169, 183, 0.1);\n}\n.qq-acc-dot:hover .qq-acc-dot__text {\n  color: #11a9b7;\n}\n.qq-acc-dot:hover .qq-acc-dot__num {\n  background: rgba(17, 169, 183, 0.2);\n}\n.qq-acc-dot--active {\n  background: #11a9b7;\n  border-color: #11a9b7;\n  box-shadow: 0 4px 12px rgba(17, 169, 183, 0.35);\n  transform: translateX(2px);\n}\n.qq-acc-dot--active .qq-acc-dot__num {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n}\n.qq-acc-dot--active .qq-acc-dot__text {\n  color: #fff;\n  font-weight: 600;\n}\n.qq-acc-dot--answered {\n  background: #f0fdf4;\n  border-color: rgba(16, 185, 129, 0.35);\n}\n.qq-acc-dot--answered .qq-acc-dot__num {\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n}\n.qq-acc-dot--answered .qq-acc-dot__text {\n  color: rgb(13.9701492537, 161.5298507463, 112.6343283582);\n}\n/*# sourceMappingURL=student-quiz-questions.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: FormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentQuizQuestionsComponent, { className: "StudentQuizQuestionsComponent", filePath: "app/features/student/student-quiz-questions/student-quiz-questions.component.ts", lineNumber: 45 });
})();
export {
  StudentQuizQuestionsComponent
};
//# sourceMappingURL=chunk-AJDCAMNQ.js.map
