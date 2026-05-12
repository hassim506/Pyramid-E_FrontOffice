import {
  FormationsService
} from "./chunk-3MN45TQB.js";
import {
  routes
} from "./chunk-W6FAPSPW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-AK2M3J6O.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-3IMMP55I.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UPBSS6WA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/student-quiz-questions/student-quiz-questions.component.ts
function StudentQuizQuestionsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Chargement du quiz...");
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
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("qq-topbar__timer--danger", ctx_r1.timeLeft < 60);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.timerLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.totalTimeLabel);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_31_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_31_button_1_Template_button_click_0_listener() {
      const rep_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const question_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectReponse(question_r6.id, rep_r5.id));
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275element(6, "i", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rep_r5 = ctx.$implicit;
    const ri_r7 = ctx.index;
    const question_r6 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("qq-option--selected", ctx_r1.isSelected(question_r6.id, rep_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getOptionLetter(ri_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rep_r5.reponse_text);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_31_button_1_Template, 7, 4, "button", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const question_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", question_r6.reponses);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "textarea", 53);
    \u0275\u0275twoWayListener("ngModelChange", function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_32_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const question_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.textReponses[question_r6.id], $event) || (ctx_r1.textReponses[question_r6.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(2, "            ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54);
    \u0275\u0275element(4, "i", 55);
    \u0275\u0275text(5, " R\xE9ponse libre \u2014 orthographe exacte requise ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.textReponses[question_r6.id]);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_button_34_Template_button_click_0_listener() {
      const di_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selected = di_r10 + 1);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r11 = ctx.$implicit;
    const di_r10 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("qq-dot--active", ctx_r1.selected === di_r10 + 1)("qq-dot--answered", ctx_r1.isAnswered(q_r11) && ctx_r1.selected !== di_r10 + 1);
    \u0275\u0275property("title", "Question " + (di_r10 + 1));
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.movePrev());
    });
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2, "Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " Suivant");
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275elementContainerEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2, "Terminer le quiz ");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_40_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 60);
    \u0275\u0275text(2, "Envoi... ");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_40_span_1_Template, 3, 0, "span", 2)(2, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_40_span_2_Template, 3, 0, "span", 2);
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
    \u0275\u0275elementStart(0, "div", 13)(1, "header", 14)(2, "button", 15);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.retournerAuxQuiz());
    });
    \u0275\u0275element(3, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "span", 18);
    \u0275\u0275text(6, "Quiz final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_9_Template, 6, 4, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 21)(11, "div", 22);
    \u0275\u0275element(12, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 24)(14, "span", 25)(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 26);
    \u0275\u0275element(19, "i", 27);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 28)(22, "div", 29)(23, "div", 30)(24, "div", 31);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 32);
    \u0275\u0275element(27, "i", 33);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "p", 34);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_31_Template, 2, 1, "div", 35)(32, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_div_32_Template, 6, 1, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 37);
    \u0275\u0275template(34, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_button_34_Template, 1, 5, "button", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 39);
    \u0275\u0275template(36, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_button_36_Template, 3, 0, "button", 40)(37, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_span_37_Template, 1, 0, "span", 2);
    \u0275\u0275elementStart(38, "button", 41);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.moveNext());
    });
    \u0275\u0275template(39, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_39_Template, 3, 0, "ng-container", 2)(40, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_ng_container_40_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const question_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.quiz.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quiz.duree_minutes);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.progressPercent, "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" / ", ctx_r1.totalQuestions, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.totalAnswered, " r\xE9pondu(s) ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Q", ctx_r1.selected);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getTypeBadgeClass(question_r6.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getTypeIcon(question_r6.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTypeLabel(question_r6.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(question_r6.question_text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", question_r6.type === "multiple_choice" || question_r6.type === "true_false");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", question_r6.type === "text");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.questions);
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
    \u0275\u0275template(1, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_div_1_Template, 41, 24, "div", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selected === i_r13 + 1);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F389}");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2B50");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F3C6}");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4AA}");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4DA}");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_h2_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "F\xE9licitations ! Vous avez r\xE9ussi \u{1F389}");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_h2_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Pas cette fois...");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_p_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Excellent travail ! Votre ma\xEEtrise du sujet est confirm\xE9e.");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_p_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Ne vous d\xE9couragez pas, r\xE9visez et retentez. Vous pouvez y arriver !");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "div", 80);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 81);
    \u0275\u0275text(5, "Bonnes r\xE9ponses");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 82);
    \u0275\u0275elementStart(7, "div", 79)(8, "div", 80);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 81);
    \u0275\u0275text(11, "Total questions");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 82);
    \u0275\u0275elementStart(13, "div", 79)(14, "div", 80);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 81);
    \u0275\u0275text(17, "Tentative(s)");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.resultat.bonnes_reponses);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.resultat.total_questions ?? ctx_r1.totalQuestions);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.resultat.nombre_tentatives ?? 1);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_div_2_button_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadQuiz(ctx_r1.quiz.id));
    });
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275text(2, "R\xE9essayer ");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "header", 14)(2, "button", 15);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_div_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retournerAuxQuiz());
    });
    \u0275\u0275element(3, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "span", 18);
    \u0275\u0275text(6, "R\xE9sultat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 62)(10, "div", 63)(11, "div", 64);
    \u0275\u0275template(12, StudentQuizQuestionsComponent_ng_container_2_div_2_span_12_Template, 2, 0, "span", 2)(13, StudentQuizQuestionsComponent_ng_container_2_div_2_span_13_Template, 2, 0, "span", 2)(14, StudentQuizQuestionsComponent_ng_container_2_div_2_span_14_Template, 2, 0, "span", 2)(15, StudentQuizQuestionsComponent_ng_container_2_div_2_span_15_Template, 2, 0, "span", 2)(16, StudentQuizQuestionsComponent_ng_container_2_div_2_span_16_Template, 2, 0, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 65);
    \u0275\u0275element(18, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 67)(20, "div", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 69);
    \u0275\u0275element(22, "circle", 70)(23, "circle", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 72);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "p", 73);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 74);
    \u0275\u0275template(32, StudentQuizQuestionsComponent_ng_container_2_div_2_h2_32_Template, 2, 0, "h2", 2)(33, StudentQuizQuestionsComponent_ng_container_2_div_2_h2_33_Template, 2, 0, "h2", 2)(34, StudentQuizQuestionsComponent_ng_container_2_div_2_p_34_Template, 2, 0, "p", 2)(35, StudentQuizQuestionsComponent_ng_container_2_div_2_p_35_Template, 2, 0, "p", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, StudentQuizQuestionsComponent_ng_container_2_div_2_div_36_Template, 18, 3, "div", 75);
    \u0275\u0275elementStart(37, "div", 76)(38, "button", 57);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_2_div_2_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retournerAuxQuiz());
    });
    \u0275\u0275element(39, "i", 9);
    \u0275\u0275text(40, "Mes Quiz ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, StudentQuizQuestionsComponent_ng_container_2_div_2_button_41_Template, 3, 0, "button", 77);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.quiz.titre);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("qq-result-card--success", ctx_r1.estReussi)("qq-result-card--fail", !ctx_r1.estReussi);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275classProp("qq-result-icon--success", ctx_r1.estReussi)("qq-result-icon--fail", !ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-award", ctx_r1.estReussi)("isax-close-circle", !ctx_r1.estReussi);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("stroke-dashoffset", ctx_r1.getScoreDashOffset());
    \u0275\u0275classProp("qq-result-score__fill--success", ctx_r1.estReussi)("qq-result-score__fill--fail", !ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getNoteColor());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 34, ctx_r1.noteFinale, "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Score minimum : ", ctx_r1.quiz.score_minimum, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estReussi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.resultat == null ? null : ctx_r1.resultat.bonnes_reponses) !== void 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.estReussi);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentQuizQuestionsComponent_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 10)(2, StudentQuizQuestionsComponent_ng_container_2_div_2_Template, 42, 37, "div", 11);
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
    clearInterval(this.timerInterval);
    this.formationsService.getQuizDetail(quizId).subscribe({
      next: (res) => {
        this.quiz = res.quiz ?? res;
        this.questions = (res.questions ?? res.quiz?.questions ?? []).sort((a, b) => a.ordre - b.ordre);
        if (this.quiz?.duree_minutes) {
          this.timeLeft = this.quiz.duree_minutes * 60;
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
    if (this.selected < this.totalQuestions)
      this.selected++;
    else
      this.submitQuiz();
  }
  movePrev() {
    if (this.selected > 1)
      this.selected--;
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
  // Calcul du dashoffset pour le cercle SVG (circumference = 2π×50 ≈ 314)
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
    return new (__ngFactoryType__ || _StudentQuizQuestionsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormationsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentQuizQuestionsComponent, selectors: [["app-student-quiz-questions"]], decls: 3, vars: 3, consts: [["class", "qq-loading", 4, "ngIf"], ["class", "qq-error", 4, "ngIf"], [4, "ngIf"], [1, "qq-loading"], [1, "qq-loading__ring"], [1, "qq-error"], [1, "qq-error__icon"], [1, "isax", "isax-warning-2"], [1, "qq-btn", "qq-btn--primary", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-2"], [4, "ngFor", "ngForOf"], ["class", "qq-shell qq-shell--result", 4, "ngIf"], ["class", "qq-shell", 4, "ngIf"], [1, "qq-shell"], [1, "qq-topbar"], [1, "qq-topbar__back", 3, "click"], [1, "isax", "isax-arrow-left-2"], [1, "qq-topbar__info"], [1, "qq-topbar__label"], [1, "qq-topbar__title"], ["class", "qq-topbar__timer", 3, "qq-topbar__timer--danger", 4, "ngIf"], [1, "qq-progress-wrap"], [1, "qq-progress-bar"], [1, "qq-progress-fill"], [1, "qq-progress-info"], [1, "qq-progress-steps"], [1, "qq-progress-answered"], [1, "isax", "isax-tick-circle", "me-1"], [1, "qq-body"], [1, "qq-question-card"], [1, "qq-question-card__header"], [1, "qq-question-num"], [1, "qq-question-type-badge", 3, "ngClass"], [1, "isax", "me-1", 3, "ngClass"], [1, "qq-question-text"], ["class", "qq-options", 4, "ngIf"], ["class", "qq-text-wrap", 4, "ngIf"], [1, "qq-dots"], ["class", "qq-dot", 3, "qq-dot--active", "qq-dot--answered", "title", "click", 4, "ngFor", "ngForOf"], [1, "qq-nav"], ["class", "qq-btn qq-btn--ghost", 3, "click", 4, "ngIf"], [1, "qq-btn", 3, "click", "disabled"], [1, "qq-topbar__timer"], [1, "isax", "isax-clock"], [1, "qq-topbar__timer-total"], [1, "qq-options"], ["class", "qq-option", 3, "qq-option--selected", "click", 4, "ngFor", "ngForOf"], [1, "qq-option", 3, "click"], [1, "qq-option__letter"], [1, "qq-option__text"], [1, "qq-option__check"], [1, "isax", "isax-tick-circle"], [1, "qq-text-wrap"], ["rows", "4", "placeholder", "Saisissez votre r\xE9ponse ici...", 1, "qq-textarea", 3, "ngModelChange", "ngModel"], [1, "qq-textarea-hint"], [1, "isax", "isax-edit-2", "me-1"], [1, "qq-dot", 3, "click", "title"], [1, "qq-btn", "qq-btn--ghost", 3, "click"], [1, "isax", "isax-arrow-right-2", "ms-2"], [1, "isax", "isax-send-2", "me-2"], [1, "qq-spinner"], [1, "qq-shell", "qq-shell--result"], [1, "qq-result-body"], [1, "qq-result-card"], [1, "qq-result-card__deco"], [1, "qq-result-icon"], [1, "isax"], [1, "qq-result-score"], [1, "qq-result-score__ring"], ["viewBox", "0 0 120 120", 1, "qq-result-score__svg"], ["cx", "60", "cy", "60", "r", "50", 1, "qq-result-score__track"], ["cx", "60", "cy", "60", "r", "50", 1, "qq-result-score__fill"], [1, "qq-result-score__value"], [1, "qq-result-score__min"], [1, "qq-result-message"], ["class", "qq-result-stats", 4, "ngIf"], [1, "qq-result-actions"], ["class", "qq-btn qq-btn--primary", 3, "click", 4, "ngIf"], [1, "qq-result-stats"], [1, "qq-result-stat"], [1, "qq-result-stat__value"], [1, "qq-result-stat__label"], [1, "qq-result-stat", "qq-result-stat--sep"], [1, "isax", "isax-refresh", "me-2"]], template: function StudentQuizQuestionsComponent_Template(rf, ctx) {
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
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n\n.qq-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes _ngcontent-%COMP%_qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.qq-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 14px;\n  text-align: center;\n  padding: 40px;\n}\n.qq-error__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ef4444;\n}\n.qq-error[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.qq-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.qq-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f8fafc;\n  display: flex;\n  flex-direction: column;\n}\n.qq-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 0 24px;\n  height: 60px;\n  flex-shrink: 0;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.qq-topbar__back[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.qq-topbar__back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.16);\n}\n.qq-topbar__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.qq-topbar__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: rgba(255, 255, 255, 0.35);\n  font-weight: 600;\n}\n.qq-topbar__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.qq-topbar__timer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 99px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  font-size: 14px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.8);\n  flex-shrink: 0;\n}\n.qq-topbar__timer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #069b8f;\n}\n.qq-topbar__timer--danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: rgb(247.039408867, 161.960591133, 161.960591133);\n  animation: _ngcontent-%COMP%_qq-pulse-danger 1s ease infinite;\n}\n.qq-topbar__timer--danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgb(247.039408867, 161.960591133, 161.960591133);\n}\n.qq-topbar__timer-total[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.35);\n}\n@keyframes _ngcontent-%COMP%_qq-pulse-danger {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n.qq-progress-wrap[_ngcontent-%COMP%] {\n  padding: 12px 24px 0;\n  background: #0f172a;\n}\n.qq-progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 99px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.qq-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      rgb(8.6608695652, 223.7391304348, 206.4173913043));\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.qq-progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 12px;\n}\n.qq-progress-steps[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.qq-progress-steps[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 700;\n}\n.qq-progress-answered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: rgb(17.2049689441, 245.7950310559, 227.3850931677);\n}\n.qq-progress-answered[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.qq-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px 24px;\n  max-width: 760px;\n  width: 100%;\n  margin: 0 auto;\n}\n.qq-question-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 28px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 28px;\n  margin-bottom: 24px;\n  animation: _ngcontent-%COMP%_qq-slide-in 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_qq-slide-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.qq-question-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.qq-question-num[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      #047a6f);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.3);\n}\n.qq-question-type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 4px 12px;\n  border-radius: 99px;\n  text-transform: uppercase;\n}\n.qq-question-type-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.qq-question-type-badge--mcq[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.qq-question-type-badge--tf[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n}\n.qq-question-type-badge--text[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #047a6f;\n}\n.qq-question-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: #0f172a;\n  line-height: 1.6;\n  margin: 0 0 22px;\n  letter-spacing: -0.2px;\n}\n.qq-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.qq-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  border-radius: 14px;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: left;\n  width: 100%;\n  color: #334155;\n}\n.qq-option[_ngcontent-%COMP%]:hover {\n  background: #e6f7f5;\n  border-color: rgba(6, 155, 143, 0.3);\n  color: #047a6f;\n}\n.qq-option[_ngcontent-%COMP%]:hover   .qq-option__letter[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.qq-option--selected[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  border-color: #069b8f;\n  color: #047a6f;\n}\n.qq-option--selected[_ngcontent-%COMP%]   .qq-option__letter[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.qq-option--selected[_ngcontent-%COMP%]   .qq-option__check[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.qq-option__letter[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  font-size: 13px;\n  font-weight: 800;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.qq-option__text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n}\n.qq-option__check[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #069b8f;\n  opacity: 0;\n  transform: scale(0.6);\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.qq-text-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.qq-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  font-size: 14px;\n  color: #334155;\n  resize: vertical;\n  background: #f8fafc;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  outline: none;\n}\n.qq-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n  box-shadow: 0 0 0 4px rgba(6, 155, 143, 0.1);\n}\n.qq-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.qq-textarea-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.qq-textarea-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.qq-dots[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.qq-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  padding: 0;\n}\n.qq-dot--active[_ngcontent-%COMP%] {\n  background: #069b8f;\n  transform: scale(1.4);\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.2);\n}\n.qq-dot--answered[_ngcontent-%COMP%] {\n  background: rgb(17.2049689441, 245.7950310559, 227.3850931677);\n}\n.qq-dot[_ngcontent-%COMP%]:hover:not(.qq-dot--active) {\n  background: #cbd5e1;\n  transform: scale(1.2);\n}\n.qq-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.qq-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 24px;\n  border-radius: 50px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.qq-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.qq-btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      #047a6f);\n  color: #fff;\n  box-shadow: 0 4px 16px rgba(6, 155, 143, 0.3);\n}\n.qq-btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 24px rgba(6, 155, 143, 0.4);\n}\n.qq-btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.qq-btn--success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      rgb(11.9402985075, 138.0597014925, 96.2686567164));\n  color: #fff;\n  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);\n}\n.qq-btn--success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 24px rgba(16, 185, 129, 0.4);\n}\n.qq-btn--success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.qq-btn--ghost[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n}\n.qq-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.qq-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.6s linear infinite;\n  margin-right: 6px;\n}\n.qq-shell--result[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.qq-result-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 32px 24px;\n  max-width: 600px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.qq-result-card[_ngcontent-%COMP%] {\n  border-radius: 28px;\n  padding: 36px 28px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_qq-slide-in 0.4s ease;\n}\n.qq-result-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n}\n.qq-result-card--success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      160deg,\n      #fff 60%,\n      #f0fdf4);\n}\n.qq-result-card--success[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #069b8f);\n}\n.qq-result-card--fail[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      160deg,\n      #fff 60%,\n      #fef2f2);\n}\n.qq-result-card--fail[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #ef4444,\n      #f59e0b);\n}\n.qq-result-card__deco[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-around;\n  padding: 0 30px;\n  font-size: 22px;\n  pointer-events: none;\n}\n.qq-result-card__deco[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_lp-float 2.5s ease-in-out infinite;\n}\n.qq-result-card__deco[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.5s;\n}\n.qq-result-card__deco[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 1s;\n}\n@keyframes _ngcontent-%COMP%_lp-float {\n  0%, 100% {\n    transform: translateY(0);\n    opacity: 0.6;\n  }\n  50% {\n    transform: translateY(-8px);\n    opacity: 1;\n  }\n}\n.qq-result-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px auto 24px;\n  font-size: 32px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n.qq-result-icon--success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      rgb(11.9402985075, 138.0597014925, 96.2686567164));\n  color: #fff;\n}\n.qq-result-icon--fail[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      rgb(234.9802955665, 21.0197044335, 21.0197044335));\n  color: #fff;\n}\n.qq-result-score[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.qq-result-score__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 140px;\n  margin: 0 auto 10px;\n}\n.qq-result-score__svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.qq-result-score__track[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #e2e8f0;\n  stroke-width: 8;\n}\n.qq-result-score__fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 8;\n  stroke-linecap: round;\n  stroke-dasharray: 314;\n  transition: stroke-dashoffset 1s ease;\n}\n.qq-result-score__fill--success[_ngcontent-%COMP%] {\n  stroke: #10b981;\n}\n.qq-result-score__fill--fail[_ngcontent-%COMP%] {\n  stroke: #ef4444;\n}\n.qq-result-score__value[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: 900;\n  letter-spacing: -1px;\n}\n.qq-result-score__value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 4px;\n}\n.qq-result-score__min[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-result-message[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.qq-result-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.qq-result-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n}\n.qq-result-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  margin-bottom: 28px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.qq-result-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 10px;\n  text-align: center;\n}\n.qq-result-stat__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.qq-result-stat__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 4px;\n}\n.qq-result-stat--sep[_ngcontent-%COMP%] {\n  flex: 0;\n  width: 1px;\n  background: #e2e8f0;\n  align-self: stretch;\n  padding: 0;\n}\n.qq-result-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 575px) {\n  .qq-body[_ngcontent-%COMP%] {\n    padding: 16px 14px;\n  }\n  .qq-question-card[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n  }\n  .qq-question-text[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .qq-topbar[_ngcontent-%COMP%] {\n    padding: 0 14px;\n  }\n  .qq-topbar__title[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .qq-result-body[_ngcontent-%COMP%] {\n    padding: 20px 14px;\n  }\n  .qq-result-card[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n}\n/*# sourceMappingURL=student-quiz-questions.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentQuizQuestionsComponent, [{
    type: Component,
    args: [{ selector: "app-student-quiz-questions", standalone: true, imports: [CommonModule, RouterLink, FormsModule], template: `<!-- LOADING -->\r
<div class="qq-loading" *ngIf="loading">\r
  <div class="qq-loading__ring">\r
    <div></div><div></div><div></div><div></div>\r
  </div>\r
  <p>Chargement du quiz...</p>\r
</div>\r
\r
<!-- ERREUR -->\r
<div class="qq-error" *ngIf="error && !loading">\r
  <div class="qq-error__icon"><i class="isax isax-warning-2"></i></div>\r
  <h3>Une erreur est survenue</h3>\r
  <p>{{ error }}</p>\r
  <button class="qq-btn qq-btn--primary" (click)="retournerAuxQuiz()">\r
    <i class="isax isax-arrow-left-2 me-2"></i>Retour aux quiz\r
  </button>\r
</div>\r
\r
<ng-container *ngIf="!loading && !error && quiz">\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       QUESTIONS\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngFor="let question of questions; let i = index">\r
    <div class="qq-shell" *ngIf="selected === i + 1">\r
\r
      <!-- TOP BAR -->\r
      <header class="qq-topbar">\r
        <button class="qq-topbar__back" (click)="retournerAuxQuiz()">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
        <div class="qq-topbar__info">\r
          <span class="qq-topbar__label">Quiz final</span>\r
          <h1 class="qq-topbar__title">{{ quiz.titre }}</h1>\r
        </div>\r
        <div class="qq-topbar__timer" *ngIf="quiz.duree_minutes" [class.qq-topbar__timer--danger]="timeLeft < 60">\r
          <i class="isax isax-clock"></i>\r
          <span>{{ timerLabel }}</span>\r
          <span class="qq-topbar__timer-total">/ {{ totalTimeLabel }}</span>\r
        </div>\r
      </header>\r
\r
      <!-- PROGRESS BAR -->\r
      <div class="qq-progress-wrap">\r
        <div class="qq-progress-bar">\r
          <div class="qq-progress-fill" [style.width.%]="progressPercent"></div>\r
        </div>\r
        <div class="qq-progress-info">\r
          <span class="qq-progress-steps">\r
            <strong>{{ selected }}</strong> / {{ totalQuestions }}\r
          </span>\r
          <span class="qq-progress-answered">\r
            <i class="isax isax-tick-circle me-1"></i>\r
            {{ totalAnswered }} r\xE9pondu(s)\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- QUESTION CARD -->\r
      <div class="qq-body">\r
\r
        <!-- Num\xE9ro + question -->\r
        <div class="qq-question-card">\r
          <div class="qq-question-card__header">\r
            <div class="qq-question-num">Q{{ selected }}</div>\r
            <div class="qq-question-type-badge" [ngClass]="getTypeBadgeClass(question.type)">\r
              <i class="isax me-1" [ngClass]="getTypeIcon(question.type)"></i>\r
              {{ getTypeLabel(question.type) }}\r
            </div>\r
          </div>\r
          <p class="qq-question-text">{{ question.question_text }}</p>\r
\r
          <!-- QCM / Vrai-Faux -->\r
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
          <!-- Texte libre -->\r
          <div class="qq-text-wrap" *ngIf="question.type === 'text'">\r
            <textarea class="qq-textarea"\r
                      rows="4"\r
                      placeholder="Saisissez votre r\xE9ponse ici..."\r
                      [(ngModel)]="textReponses[question.id]">\r
            </textarea>\r
            <div class="qq-textarea-hint">\r
              <i class="isax isax-edit-2 me-1"></i>\r
              R\xE9ponse libre \u2014 orthographe exacte requise\r
            </div>\r
          </div>\r
\r
        </div>\r
\r
        <!-- DOTS NAVIGATION -->\r
        <div class="qq-dots">\r
          <button class="qq-dot"\r
                  *ngFor="let q of questions; let di = index"\r
                  [class.qq-dot--active]="selected === di + 1"\r
                  [class.qq-dot--answered]="isAnswered(q) && selected !== di + 1"\r
                  (click)="selected = di + 1"\r
                  [title]="'Question ' + (di + 1)">\r
          </button>\r
        </div>\r
\r
        <!-- NAVIGATION BUTTONS -->\r
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
              <span *ngIf="submitting">\r
                <span class="qq-spinner"></span>Envoi...\r
              </span>\r
            </ng-container>\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </ng-container>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       R\xC9SULTAT\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="qq-shell qq-shell--result" *ngIf="submitted && selected === totalQuestions + 1">\r
\r
    <!-- TOP BAR r\xE9sultat -->\r
    <header class="qq-topbar">\r
      <button class="qq-topbar__back" (click)="retournerAuxQuiz()">\r
        <i class="isax isax-arrow-left-2"></i>\r
      </button>\r
      <div class="qq-topbar__info">\r
        <span class="qq-topbar__label">R\xE9sultat</span>\r
        <h1 class="qq-topbar__title">{{ quiz.titre }}</h1>\r
      </div>\r
    </header>\r
\r
    <div class="qq-result-body">\r
\r
      <!-- Carte r\xE9sultat -->\r
      <div class="qq-result-card" [class.qq-result-card--success]="estReussi" [class.qq-result-card--fail]="!estReussi">\r
\r
        <!-- D\xE9coration -->\r
        <div class="qq-result-card__deco">\r
          <span *ngIf="estReussi">\u{1F389}</span>\r
          <span *ngIf="estReussi">\u2B50</span>\r
          <span *ngIf="estReussi">\u{1F3C6}</span>\r
          <span *ngIf="!estReussi">\u{1F4AA}</span>\r
          <span *ngIf="!estReussi">\u{1F4DA}</span>\r
        </div>\r
\r
        <!-- Ic\xF4ne -->\r
        <div class="qq-result-icon" [class.qq-result-icon--success]="estReussi" [class.qq-result-icon--fail]="!estReussi">\r
          <i class="isax" [class.isax-award]="estReussi" [class.isax-close-circle]="!estReussi"></i>\r
        </div>\r
\r
        <!-- Score -->\r
        <div class="qq-result-score">\r
          <div class="qq-result-score__ring">\r
            <svg viewBox="0 0 120 120" class="qq-result-score__svg">\r
              <circle cx="60" cy="60" r="50" class="qq-result-score__track"/>\r
              <circle cx="60" cy="60" r="50" class="qq-result-score__fill"\r
                      [class.qq-result-score__fill--success]="estReussi"\r
                      [class.qq-result-score__fill--fail]="!estReussi"\r
                      [style.stroke-dashoffset]="getScoreDashOffset()"/>\r
            </svg>\r
            <div class="qq-result-score__value" [style.color]="getNoteColor()">\r
              {{ noteFinale | number:'1.0-0' }}<span>%</span>\r
            </div>\r
          </div>\r
          <p class="qq-result-score__min">Score minimum : {{ quiz.score_minimum }}%</p>\r
        </div>\r
\r
        <!-- Message -->\r
        <div class="qq-result-message">\r
          <h2 *ngIf="estReussi">F\xE9licitations ! Vous avez r\xE9ussi \u{1F389}</h2>\r
          <h2 *ngIf="!estReussi">Pas cette fois...</h2>\r
          <p *ngIf="estReussi">Excellent travail ! Votre ma\xEEtrise du sujet est confirm\xE9e.</p>\r
          <p *ngIf="!estReussi">Ne vous d\xE9couragez pas, r\xE9visez et retentez. Vous pouvez y arriver !</p>\r
        </div>\r
\r
        <!-- Stats -->\r
        <div class="qq-result-stats" *ngIf="resultat?.bonnes_reponses !== undefined">\r
          <div class="qq-result-stat">\r
            <div class="qq-result-stat__value">{{ resultat.bonnes_reponses }}</div>\r
            <div class="qq-result-stat__label">Bonnes r\xE9ponses</div>\r
          </div>\r
          <div class="qq-result-stat qq-result-stat--sep"></div>\r
          <div class="qq-result-stat">\r
            <div class="qq-result-stat__value">{{ resultat.total_questions ?? totalQuestions }}</div>\r
            <div class="qq-result-stat__label">Total questions</div>\r
          </div>\r
          <div class="qq-result-stat qq-result-stat--sep"></div>\r
          <div class="qq-result-stat">\r
            <div class="qq-result-stat__value">{{ resultat.nombre_tentatives ?? 1 }}</div>\r
            <div class="qq-result-stat__label">Tentative(s)</div>\r
          </div>\r
        </div>\r
\r
        <!-- Actions -->\r
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
    </div>\r
  </div>\r
\r
</ng-container>`, styles: ['/* src/app/features/student/student-quiz-questions/student-quiz-questions.component.scss */\n.qq-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring div:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring div:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring div:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.qq-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 14px;\n  text-align: center;\n  padding: 40px;\n}\n.qq-error__icon {\n  font-size: 3rem;\n  color: #ef4444;\n}\n.qq-error h3 {\n  font-size: 18px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.qq-error p {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.qq-shell {\n  min-height: 100vh;\n  background: #f8fafc;\n  display: flex;\n  flex-direction: column;\n}\n.qq-topbar {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 0 24px;\n  height: 60px;\n  flex-shrink: 0;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.qq-topbar__back {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.qq-topbar__back:hover {\n  background: rgba(255, 255, 255, 0.16);\n}\n.qq-topbar__info {\n  flex: 1;\n  min-width: 0;\n}\n.qq-topbar__label {\n  display: block;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: rgba(255, 255, 255, 0.35);\n  font-weight: 600;\n}\n.qq-topbar__title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.qq-topbar__timer {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 99px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  font-size: 14px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.8);\n  flex-shrink: 0;\n}\n.qq-topbar__timer i {\n  font-size: 15px;\n  color: #069b8f;\n}\n.qq-topbar__timer--danger {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: rgb(247.039408867, 161.960591133, 161.960591133);\n  animation: qq-pulse-danger 1s ease infinite;\n}\n.qq-topbar__timer--danger i {\n  color: rgb(247.039408867, 161.960591133, 161.960591133);\n}\n.qq-topbar__timer-total {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.35);\n}\n@keyframes qq-pulse-danger {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n.qq-progress-wrap {\n  padding: 12px 24px 0;\n  background: #0f172a;\n}\n.qq-progress-bar {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 99px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.qq-progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      rgb(8.6608695652, 223.7391304348, 206.4173913043));\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.qq-progress-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 12px;\n}\n.qq-progress-steps {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.qq-progress-steps strong {\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 700;\n}\n.qq-progress-answered {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: rgb(17.2049689441, 245.7950310559, 227.3850931677);\n}\n.qq-progress-answered i {\n  font-size: 13px;\n}\n.qq-body {\n  flex: 1;\n  padding: 28px 24px;\n  max-width: 760px;\n  width: 100%;\n  margin: 0 auto;\n}\n.qq-question-card {\n  background: #fff;\n  border-radius: 28px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 28px;\n  margin-bottom: 24px;\n  animation: qq-slide-in 0.3s ease;\n}\n@keyframes qq-slide-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.qq-question-card__header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.qq-question-num {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      #047a6f);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.3);\n}\n.qq-question-type-badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 4px 12px;\n  border-radius: 99px;\n  text-transform: uppercase;\n}\n.qq-question-type-badge i {\n  font-size: 12px;\n}\n.qq-question-type-badge--mcq {\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.qq-question-type-badge--tf {\n  background: #fffbeb;\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n}\n.qq-question-type-badge--text {\n  background: #e6f7f5;\n  color: #047a6f;\n}\n.qq-question-text {\n  font-size: 17px;\n  font-weight: 600;\n  color: #0f172a;\n  line-height: 1.6;\n  margin: 0 0 22px;\n  letter-spacing: -0.2px;\n}\n.qq-options {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.qq-option {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  border-radius: 14px;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: left;\n  width: 100%;\n  color: #334155;\n}\n.qq-option:hover {\n  background: #e6f7f5;\n  border-color: rgba(6, 155, 143, 0.3);\n  color: #047a6f;\n}\n.qq-option:hover .qq-option__letter {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.qq-option--selected {\n  background: #e6f7f5;\n  border-color: #069b8f;\n  color: #047a6f;\n}\n.qq-option--selected .qq-option__letter {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.qq-option--selected .qq-option__check {\n  opacity: 1;\n  transform: scale(1);\n}\n.qq-option__letter {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  font-size: 13px;\n  font-weight: 800;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.qq-option__text {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n}\n.qq-option__check {\n  font-size: 18px;\n  color: #069b8f;\n  opacity: 0;\n  transform: scale(0.6);\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.qq-text-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.qq-textarea {\n  width: 100%;\n  padding: 14px 16px;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  font-size: 14px;\n  color: #334155;\n  resize: vertical;\n  background: #f8fafc;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  outline: none;\n}\n.qq-textarea:focus {\n  border-color: #069b8f;\n  background: #fff;\n  box-shadow: 0 0 0 4px rgba(6, 155, 143, 0.1);\n}\n.qq-textarea::placeholder {\n  color: #94a3b8;\n}\n.qq-textarea-hint {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.qq-textarea-hint i {\n  font-size: 13px;\n}\n.qq-dots {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.qq-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  padding: 0;\n}\n.qq-dot--active {\n  background: #069b8f;\n  transform: scale(1.4);\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.2);\n}\n.qq-dot--answered {\n  background: rgb(17.2049689441, 245.7950310559, 227.3850931677);\n}\n.qq-dot:hover:not(.qq-dot--active) {\n  background: #cbd5e1;\n  transform: scale(1.2);\n}\n.qq-nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.qq-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 24px;\n  border-radius: 50px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.qq-btn i {\n  font-size: 15px;\n}\n.qq-btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      #047a6f);\n  color: #fff;\n  box-shadow: 0 4px 16px rgba(6, 155, 143, 0.3);\n}\n.qq-btn--primary:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 24px rgba(6, 155, 143, 0.4);\n}\n.qq-btn--primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.qq-btn--success {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      rgb(11.9402985075, 138.0597014925, 96.2686567164));\n  color: #fff;\n  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);\n}\n.qq-btn--success:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 24px rgba(16, 185, 129, 0.4);\n}\n.qq-btn--success:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.qq-btn--ghost {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n}\n.qq-btn--ghost:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.qq-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: qq-spin 0.6s linear infinite;\n  margin-right: 6px;\n}\n.qq-shell--result {\n  background: #f8fafc;\n}\n.qq-result-body {\n  flex: 1;\n  padding: 32px 24px;\n  max-width: 600px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.qq-result-card {\n  border-radius: 28px;\n  padding: 36px 28px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  animation: qq-slide-in 0.4s ease;\n}\n.qq-result-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n}\n.qq-result-card--success {\n  background:\n    linear-gradient(\n      160deg,\n      #fff 60%,\n      #f0fdf4);\n}\n.qq-result-card--success::before {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #069b8f);\n}\n.qq-result-card--fail {\n  background:\n    linear-gradient(\n      160deg,\n      #fff 60%,\n      #fef2f2);\n}\n.qq-result-card--fail::before {\n  background:\n    linear-gradient(\n      90deg,\n      #ef4444,\n      #f59e0b);\n}\n.qq-result-card__deco {\n  position: absolute;\n  top: 16px;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-around;\n  padding: 0 30px;\n  font-size: 22px;\n  pointer-events: none;\n}\n.qq-result-card__deco span {\n  animation: lp-float 2.5s ease-in-out infinite;\n}\n.qq-result-card__deco span:nth-child(2) {\n  animation-delay: 0.5s;\n}\n.qq-result-card__deco span:nth-child(3) {\n  animation-delay: 1s;\n}\n@keyframes lp-float {\n  0%, 100% {\n    transform: translateY(0);\n    opacity: 0.6;\n  }\n  50% {\n    transform: translateY(-8px);\n    opacity: 1;\n  }\n}\n.qq-result-icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px auto 24px;\n  font-size: 32px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n.qq-result-icon--success {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      rgb(11.9402985075, 138.0597014925, 96.2686567164));\n  color: #fff;\n}\n.qq-result-icon--fail {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      rgb(234.9802955665, 21.0197044335, 21.0197044335));\n  color: #fff;\n}\n.qq-result-score {\n  margin-bottom: 24px;\n}\n.qq-result-score__ring {\n  position: relative;\n  width: 140px;\n  height: 140px;\n  margin: 0 auto 10px;\n}\n.qq-result-score__svg {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.qq-result-score__track {\n  fill: none;\n  stroke: #e2e8f0;\n  stroke-width: 8;\n}\n.qq-result-score__fill {\n  fill: none;\n  stroke-width: 8;\n  stroke-linecap: round;\n  stroke-dasharray: 314;\n  transition: stroke-dashoffset 1s ease;\n}\n.qq-result-score__fill--success {\n  stroke: #10b981;\n}\n.qq-result-score__fill--fail {\n  stroke: #ef4444;\n}\n.qq-result-score__value {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: 900;\n  letter-spacing: -1px;\n}\n.qq-result-score__value span {\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 4px;\n}\n.qq-result-score__min {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-result-message {\n  margin-bottom: 24px;\n}\n.qq-result-message h2 {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.qq-result-message p {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n}\n.qq-result-stats {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  margin-bottom: 28px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.qq-result-stat {\n  flex: 1;\n  padding: 16px 10px;\n  text-align: center;\n}\n.qq-result-stat__value {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.qq-result-stat__label {\n  font-size: 11px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 4px;\n}\n.qq-result-stat--sep {\n  flex: 0;\n  width: 1px;\n  background: #e2e8f0;\n  align-self: stretch;\n  padding: 0;\n}\n.qq-result-actions {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 575px) {\n  .qq-body {\n    padding: 16px 14px;\n  }\n  .qq-question-card {\n    padding: 18px 16px;\n  }\n  .qq-question-text {\n    font-size: 15px;\n  }\n  .qq-topbar {\n    padding: 0 14px;\n  }\n  .qq-topbar__title {\n    font-size: 13px;\n  }\n  .qq-result-body {\n    padding: 20px 14px;\n  }\n  .qq-result-card {\n    padding: 24px 16px;\n  }\n}\n/*# sourceMappingURL=student-quiz-questions.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: FormationsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentQuizQuestionsComponent, { className: "StudentQuizQuestionsComponent", filePath: "src/app/features/student/student-quiz-questions/student-quiz-questions.component.ts", lineNumber: 39 });
})();
export {
  StudentQuizQuestionsComponent
};
//# sourceMappingURL=chunk-XWEKUI4D.js.map
