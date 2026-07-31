import {
  QuizResultsService
} from "./chunk-53T3WACJ.js";
import {
  QuestionQuizService
} from "./chunk-OB2NVPEG.js";
import {
  QuizService
} from "./chunk-3C7UQEN3.js";
import {
  FormationService
} from "./chunk-QDYFEC2R.js";
import {
  AuthService
} from "./chunk-I3LFGWFR.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-37V3B3KY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ZGFJXD53.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-UFFO2UKW.js";
import "./chunk-U7UKDAOZ.js";
import "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  Subject,
  catchError,
  forkJoin,
  of,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
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
} from "./chunk-BSBCM3BI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/courses/instructor-course-details/instructor-course-details.component.ts
function InstructorCourseDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorCourseDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 9);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error);
  }
}
function InstructorCourseDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 9);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_div_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.success = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.success);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_div_8_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_div_8_div_7_div_1_Template_div_click_0_listener() {
      const sec_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const mod_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectSection(sec_r9, mod_r6));
    });
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sec_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("active", (ctx_r1.selectedSection == null ? null : ctx_r1.selectedSection.id) === sec_r9.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-video-circle", sec_r9.type === "video")("isax-document-text", sec_r9.type === "document" || sec_r9.type === "pdf")("isax-award", sec_r9.type === "quiz");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sec_r9.titre);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-vid", sec_r9.type === "video")("badge-doc", sec_r9.type === "document" || sec_r9.type === "pdf")("badge-quiz", sec_r9.type === "quiz");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sec_r9.type === "video" ? "Vid\xE9o" : sec_r9.type === "quiz" ? "Quiz" : "Doc", " ");
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, InstructorCourseDetailsComponent_ng_container_3_div_23_div_8_div_7_div_1_Template, 6, 16, "div", 44);
    \u0275\u0275elementStart(2, "div", 45)(3, "button", 46);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_div_8_div_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const mod_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addQuizToModule(mod_r6));
    });
    \u0275\u0275element(4, "i", 47);
    \u0275\u0275text(5, " Ajouter un quiz ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mod_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", mod_r6.sections);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_div_8_Template_div_click_1_listener() {
      const mod_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleModule(mod_r6.id));
    });
    \u0275\u0275elementStart(2, "div", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, InstructorCourseDetailsComponent_ng_container_3_div_23_div_8_div_7_Template, 6, 1, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r6 = ctx.$implicit;
    const mi_r10 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.openModules[mod_r6.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mi_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mod_r6.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.openModules[mod_r6.id]);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucun module \u2014 modifiez la formation");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3, "S\xE9lectionnez un quiz dans la liste des modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5, "ou ajoutez un quiz \xE0 un module existant");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Pass\xE9 par ", ctx_r1.activeQuiz.statistics.total_participants, " apprenants \xB7 Score moyen : ", ctx_r1.activeQuiz.statistics.note_moyenne, "% ");
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_div_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 110);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_div_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 111);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_div_1_i_4_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const oi_r18 = \u0275\u0275nextContext().index;
      const q_r13 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeOption(q_r13, oi_r18));
    });
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_div_1_Template_div_click_1_listener() {
      const opt_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const q_r13 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleCorrect(q_r13, opt_r16));
    });
    \u0275\u0275template(2, InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_div_1_i_2_Template, 1, 0, "i", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_div_1_Template_input_ngModelChange_3_listener($event) {
      const opt_r16 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(opt_r16.reponse_text, $event) || (opt_r16.reponse_text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_div_1_i_4_Template, 1, 0, "i", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r16 = ctx.$implicit;
    const q_r13 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("correct", opt_r16.is_correct);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r16.is_correct);
    \u0275\u0275advance();
    \u0275\u0275classProp("correct", opt_r16.is_correct);
    \u0275\u0275twoWayProperty("ngModel", opt_r16.reponse_text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r13.type !== "true_false");
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const q_r13 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.addOption(q_r13));
    });
    \u0275\u0275element(1, "i", 113);
    \u0275\u0275text(2, " Ajouter une option ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275template(1, InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_div_1_Template, 5, 7, "div", 103)(2, InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_button_2_Template, 3, 0, "button", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r13.reponses);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r13.type === "multiple_choice");
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275text(1, " R\xE9ponse libre \u2014 \xE9valu\xE9e manuellement par le formateur ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const q_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(q_r13.question_text, $event) || (q_r13.question_text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 94)(3, "label", 95);
    \u0275\u0275text(4, "Points :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const q_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(q_r13.points, $event) || (q_r13.points = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_6_Template, 3, 2, "div", 97)(7, InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_div_7_Template, 2, 0, "div", 98);
    \u0275\u0275elementStart(8, "div", 99)(9, "label", 100);
    \u0275\u0275text(10, "Explication :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r14);
      const q_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(q_r13.explication, $event) || (q_r13.explication = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", q_r13.question_text);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", q_r13.points);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r13.type !== "text");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r13.type === "text");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", q_r13.explication);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_Template_div_click_1_listener() {
      const q_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleQuestion(q_r13.id));
    });
    \u0275\u0275elementStart(2, "div", 82);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 83);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 84);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 85);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 86)(11, "button", 87);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_Template_button_click_11_listener($event) {
      const q_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.duplicateQuestion(q_r13, $event));
    });
    \u0275\u0275element(12, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 89);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_Template_button_click_13_listener($event) {
      const q_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteQuestion(q_r13, $event));
    });
    \u0275\u0275element(14, "i", 90);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_div_15_Template, 12, 5, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r13 = ctx.$implicit;
    const qi_r20 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("expanded", ctx_r1.expandedQuestion === q_r13.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(qi_r20 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r13.question_text || "Nouvelle question");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(q_r13.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", q_r13.points, " pt", q_r13.points > 1 ? "s" : "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.expandedQuestion === q_r13.id);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 54)(2, "div")(3, "div", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_5_Template, 2, 2, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 58)(9, "button", 59);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveQuiz());
    });
    \u0275\u0275element(10, "i", 60);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 61)(13, "div", 62)(14, "div", 63);
    \u0275\u0275text(15, "Param\xE8tres du quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 64)(17, "div", 65)(18, "label", 66);
    \u0275\u0275text(19, "Score de r\xE9ussite (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.activeQuiz.score_minimum, $event) || (ctx_r1.activeQuiz.score_minimum = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 65)(22, "label", 66);
    \u0275\u0275text(23, "Tentatives autoris\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 68);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.activeQuiz.tentatives_max, $event) || (ctx_r1.activeQuiz.tentatives_max = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 69);
    \u0275\u0275text(26, "1 tentative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 69);
    \u0275\u0275text(28, "2 tentatives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 69);
    \u0275\u0275text(30, "3 tentatives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 69);
    \u0275\u0275text(32, "Illimit\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 65)(34, "label", 66);
    \u0275\u0275text(35, "Dur\xE9e (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.activeQuiz.duree_minutes, $event) || (ctx_r1.activeQuiz.duree_minutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 71);
    \u0275\u0275template(38, InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_div_38_Template, 16, 8, "div", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 73)(40, "button", 74);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addQuestion("multiple_choice"));
    });
    \u0275\u0275element(41, "i", 75);
    \u0275\u0275text(42, " Choix unique ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 74);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addQuestion("multiple_choice_multi"));
    });
    \u0275\u0275element(44, "i", 76);
    \u0275\u0275text(45, " Choix multiple ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 74);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addQuestion("true_false"));
    });
    \u0275\u0275element(47, "i", 77);
    \u0275\u0275text(48, " Vrai / Faux ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 74);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addQuestion("text"));
    });
    \u0275\u0275element(50, "i", 78);
    \u0275\u0275text(51, " Texte libre ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.activeQuiz.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeQuiz.statistics);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r1.activeQuiz.questions == null ? null : ctx_r1.activeQuiz.questions.length) || 0, " questions");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingQuiz);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingQuiz ? "Sauvegarde\u2026" : "Enregistrer", " ");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.activeQuiz.score_minimum);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.activeQuiz.tentatives_max);
    \u0275\u0275advance();
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.activeQuiz.duree_minutes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.activeQuiz.questions);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_div_13_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 126);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedSection.duree_estimee, " min");
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_div_13_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "h5", 128);
    \u0275\u0275text(2, "Contenu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedSection.description || ctx_r1.selectedSection.contenu);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_div_13_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129)(1, "h5", 128);
    \u0275\u0275text(2, "Ressource");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 130);
    \u0275\u0275element(4, "i", 131);
    \u0275\u0275text(5, "Ouvrir la ressource ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.selectedSection.ressources, \u0275\u0275sanitizeUrl);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_div_13_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 132);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5, "Aucun contenu d\xE9fini pour cette section");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedSection.titre);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116)(2, "span", 117);
    \u0275\u0275element(3, "i", 118);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 119);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 120);
    \u0275\u0275template(8, InstructorCourseDetailsComponent_ng_container_3_div_23_div_13_span_8_Template, 3, 1, "span", 3);
    \u0275\u0275elementStart(9, "span", 121);
    \u0275\u0275element(10, "i", 122);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 123);
    \u0275\u0275template(13, InstructorCourseDetailsComponent_ng_container_3_div_23_div_13_div_13_Template, 5, 1, "div", 124)(14, InstructorCourseDetailsComponent_ng_container_3_div_23_div_13_div_14_Template, 6, 1, "div", 125)(15, InstructorCourseDetailsComponent_ng_container_3_div_23_div_13_div_15_Template, 6, 1, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-vid", ctx_r1.selectedSection.type === "video")("badge-doc", ctx_r1.selectedSection.type === "pdf" || ctx_r1.selectedSection.type === "document" || ctx_r1.selectedSection.type === "text" || ctx_r1.selectedSection.type === "texte" || ctx_r1.selectedSection.type === "reading")("badge-res", ctx_r1.selectedSection.type === "ressource" || ctx_r1.selectedSection.type === "exercice");
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-video-circle", ctx_r1.selectedSection.type === "video")("isax-document-text", ctx_r1.selectedSection.type === "pdf" || ctx_r1.selectedSection.type === "document" || ctx_r1.selectedSection.type === "text" || ctx_r1.selectedSection.type === "texte" || ctx_r1.selectedSection.type === "reading")("isax-link-2", ctx_r1.selectedSection.type === "ressource" || ctx_r1.selectedSection.type === "exercice");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSection.type === "video" ? "Vid\xE9o" : ctx_r1.selectedSection.type === "pdf" ? "PDF" : ctx_r1.selectedSection.type === "ressource" ? "Ressource" : "Lecture", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedSection.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedSection.duree_estimee);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedSection.obligatoire ? "Obligatoire" : "Optionnelle");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedSection.description || ctx_r1.selectedSection.contenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSection.ressources);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedSection.description && !ctx_r1.selectedSection.contenu && !ctx_r1.selectedSection.ressources);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3, "Quiz introuvable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 133);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_div_23_div_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.createQuizForSection(ctx_r1.selectedSection, ctx_r1.selectedModule));
    });
    \u0275\u0275element(5, "i", 113);
    \u0275\u0275text(6, " Cr\xE9er le quiz ");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "div", 134);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement du quiz\u2026");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "span", 30);
    \u0275\u0275text(4, "Modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 31);
    \u0275\u0275element(6, "i", 32);
    \u0275\u0275text(7, " Modifier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, InstructorCourseDetailsComponent_ng_container_3_div_23_div_8_Template, 8, 5, "div", 33)(9, InstructorCourseDetailsComponent_ng_container_3_div_23_div_9_Template, 4, 0, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 35);
    \u0275\u0275template(11, InstructorCourseDetailsComponent_ng_container_3_div_23_div_11_Template, 6, 0, "div", 4)(12, InstructorCourseDetailsComponent_ng_container_3_div_23_ng_container_12_Template, 52, 13, "ng-container", 3)(13, InstructorCourseDetailsComponent_ng_container_3_div_23_div_13_Template, 16, 19, "div", 36)(14, InstructorCourseDetailsComponent_ng_container_3_div_23_div_14_Template, 7, 0, "div", 4)(15, InstructorCourseDetailsComponent_ng_container_3_div_23_div_15_Template, 4, 0, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", "/courses/instructor-course-edit/" + ctx_r1.formation.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.formation.modules);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.formation.modules == null ? null : ctx_r1.formation.modules.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedSection);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSection && ctx_r1.selectedSection.type === "quiz" && ctx_r1.activeQuiz);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSection && ctx_r1.selectedSection.type !== "quiz");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSection && ctx_r1.selectedSection.type === "quiz" && !ctx_r1.activeQuiz && !ctx_r1.loadingQuiz);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingQuiz);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 136);
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r23 = ctx.$implicit;
    \u0275\u0275property("value", q_r23.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r23.titre);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_ng_container_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "span", 153);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154);
    \u0275\u0275element(4, "div", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 156);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const band_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(band_r24.label);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(band_r24.color);
    \u0275\u0275styleProp("width", band_r24.pct, "%");
    \u0275\u0275advance();
    \u0275\u0275classMap(band_r24.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", band_r24.count, " apprenants");
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_ng_container_6_div_34_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160)(1, "span", 161);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 162);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 163);
    \u0275\u0275element(6, "div", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 165);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const qs_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", i_r26 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(qs_r25.question);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", qs_r25.pct, "%");
    \u0275\u0275classProp("fill-g", qs_r25.pct >= 70)("fill-a", qs_r25.pct >= 50 && qs_r25.pct < 70)("fill-r", qs_r25.pct < 50);
    \u0275\u0275advance();
    \u0275\u0275classProp("pct-g", qs_r25.pct >= 70)("pct-a", qs_r25.pct >= 50 && qs_r25.pct < 70)("pct-r", qs_r25.pct < 50);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", qs_r25.pct, "%");
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_ng_container_6_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 158);
    \u0275\u0275text(2, "Taux de bonne r\xE9ponse par question");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_ng_container_6_div_34_div_3_Template, 9, 17, "div", 159);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.questionStats);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 141)(2, "div", 142)(3, "div", 143);
    \u0275\u0275text(4, "Apprenants ayant pass\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 144);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 145);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 142)(10, "div", 143);
    \u0275\u0275text(11, "Score moyen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 144);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 146);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 142)(17, "div", 143);
    \u0275\u0275text(18, "Taux de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 144);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 147);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 142)(24, "div", 143);
    \u0275\u0275text(25, "R\xE9sultats totaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 144);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 145);
    \u0275\u0275text(29, "tentatives enregistr\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 148)(31, "div", 149);
    \u0275\u0275text(32, "Distribution des scores");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_ng_container_6_div_33_Template, 7, 8, "div", 150);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_ng_container_6_div_34_Template, 4, 1, "div", 151);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.quizStats.total_participants || 0, "/", ctx_r1.formation.nb_inscrits || "?");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getParticipationRate(), "% de participation");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.quizStats.note_moyenne || 0, "%");
    \u0275\u0275advance();
    \u0275\u0275classProp("up", (ctx_r1.quizStats.note_moyenne || 0) >= ((ctx_r1.activeQuiz == null ? null : ctx_r1.activeQuiz.score_minimum) || 70))("down", (ctx_r1.quizStats.note_moyenne || 0) < ((ctx_r1.activeQuiz == null ? null : ctx_r1.activeQuiz.score_minimum) || 70));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.quizStats.note_moyenne || 0) >= ((ctx_r1.activeQuiz == null ? null : ctx_r1.activeQuiz.score_minimum) || 70) ? "Au-dessus du seuil" : "Sous le seuil", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.getReussiteRate(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.quizStats.nb_reussis || 0, " r\xE9ussis");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.quizStats.total_participants || 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.scoreBands);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.questionStats.length > 0);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "S\xE9lectionnez un quiz pour voir les r\xE9sultats");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 137)(2, "select", 138);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedQuizId, $event) || (ctx_r1.selectedQuizId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_Template_select_change_2_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadQuizStats());
    });
    \u0275\u0275elementStart(3, "option", 139);
    \u0275\u0275text(4, "S\xE9lectionner un quiz\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_option_5_Template, 2, 2, "option", 140);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_ng_container_6_Template, 35, 14, "ng-container", 3)(7, InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_div_7_Template, 4, 0, "div", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedQuizId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.allFormationQuizzes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quizStats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.quizStats && !ctx_r1.loadingStats);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275template(1, InstructorCourseDetailsComponent_ng_container_3_div_24_div_1_Template, 2, 0, "div", 0)(2, InstructorCourseDetailsComponent_ng_container_3_div_24_ng_container_2_Template, 8, 4, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingStats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingStats);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_25_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168)(1, "h6", 169);
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 175);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r1.formation.description, \u0275\u0275sanitizeHtml);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166)(1, "div", 167)(2, "div", 168)(3, "h6", 169);
    \u0275\u0275text(4, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "table", 170)(6, "tr")(7, "td");
    \u0275\u0275text(8, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 171);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tr")(12, "td");
    \u0275\u0275text(13, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "tr")(17, "td");
    \u0275\u0275text(18, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tr")(22, "td");
    \u0275\u0275text(23, "Langue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "tr")(27, "td");
    \u0275\u0275text(28, "Dur\xE9e totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "td");
    \u0275\u0275text(33, "Prix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "tr")(37, "td");
    \u0275\u0275text(38, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td")(40, "span", 172);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(42, "div", 168)(43, "h6", 169);
    \u0275\u0275text(44, "Statistiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "table", 170)(46, "tr")(47, "td");
    \u0275\u0275text(48, "Modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td", 171);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "tr")(52, "td");
    \u0275\u0275text(53, "Apprenants inscrits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td", 171);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "tr")(57, "td");
    \u0275\u0275text(58, "Taux de compl\xE9tion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td", 171);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "tr")(62, "td");
    \u0275\u0275text(63, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "tr")(67, "td");
    \u0275\u0275text(68, "Mis \xE0 jour le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td");
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "a", 173);
    \u0275\u0275element(72, "i", 32);
    \u0275\u0275text(73, " Modifier la formation ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(74, InstructorCourseDetailsComponent_ng_container_3_div_25_div_74_Template, 4, 1, "div", 174);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formation.titre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.formation.categorie == null ? null : ctx_r1.formation.categorie.nom) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getNiveauLabel(ctx_r1.formation.niveau));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getLangueLabel(ctx_r1.formation.langue));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.formation.duree_totale, "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formation.prix == 0 ? "Gratuit" : ctx_r1.formation.prix + " FCFA");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("published", ctx_r1.formation.est_publie);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formation.est_publie ? "Publi\xE9" : "Brouillon", " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r1.formation.modules == null ? null : ctx_r1.formation.modules.length) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formation.nb_inscrits || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.formation.taux_completion || 0, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.formation.created_at));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.formation.updated_at));
    \u0275\u0275advance();
    \u0275\u0275property("href", "/courses/instructor-course-edit/" + ctx_r1.formation.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.formation.description);
  }
}
function InstructorCourseDetailsComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "a", 12);
    \u0275\u0275element(3, "i", 13);
    \u0275\u0275text(4, " Mes formations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14)(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 17);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.publishFormation());
    });
    \u0275\u0275element(11, "i", 18);
    \u0275\u0275text(12, " Publier les modifications ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 19)(14, "button", 20);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "contenu");
    });
    \u0275\u0275element(15, "i", 21);
    \u0275\u0275text(16, " Contenu & modules ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 20);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.activeTab = "stats";
      return \u0275\u0275resetView(ctx_r1.loadQuizStats());
    });
    \u0275\u0275element(18, "i", 22);
    \u0275\u0275text(19, " R\xE9sultats quiz ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 20);
    \u0275\u0275listener("click", function InstructorCourseDetailsComponent_ng_container_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "info");
    });
    \u0275\u0275element(21, "i", 23);
    \u0275\u0275text(22, " Informations ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, InstructorCourseDetailsComponent_ng_container_3_div_23_Template, 16, 8, "div", 24)(24, InstructorCourseDetailsComponent_ng_container_3_div_24_Template, 3, 2, "div", 25)(25, InstructorCourseDetailsComponent_ng_container_3_div_25_Template, 75, 16, "div", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorCourse);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formation.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Formateur : ", ctx_r1.getDisplayName(), " \xA0\xB7\xA0 ", (ctx_r1.formation.modules == null ? null : ctx_r1.formation.modules.length) || 0, " modules \xA0\xB7\xA0 ", ctx_r1.formation.nb_inscrits || 0, " apprenants ");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "contenu");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "stats");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "info");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "contenu");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "stats");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "info");
  }
}
function InstructorCourseDetailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 176);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Formation introuvable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 177);
    \u0275\u0275text(5, "Retour aux formations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorCourse);
  }
}
var InstructorCourseDetailsComponent = class _InstructorCourseDetailsComponent {
  route;
  router;
  formationService;
  authService;
  quizService;
  questionService;
  resultsService;
  routes = routes;
  // ── state ──────────────────────────────────────────────────────────────
  loading = false;
  error = "";
  success = "";
  savingQuiz = false;
  loadingQuiz = false;
  loadingStats = false;
  activeTab = "contenu";
  // ── formation data ─────────────────────────────────────────────────────
  formation = null;
  formationId = null;
  currentUser = null;
  // ── module/section navigation ──────────────────────────────────────────
  openModules = {};
  selectedSection = null;
  selectedModule = null;
  // ── quiz editor ────────────────────────────────────────────────────────
  activeQuiz = null;
  expandedQuestion = null;
  // ── stats tab ──────────────────────────────────────────────────────────
  allFormationQuizzes = [];
  selectedQuizId = "";
  quizStats = null;
  scoreBands = [];
  questionStats = [];
  destroy$ = new Subject();
  constructor(route, router, formationService, authService, quizService, questionService, resultsService) {
    this.route = route;
    this.router = router;
    this.formationService = formationService;
    this.authService = authService;
    this.quizService = quizService;
    this.questionService = questionService;
    this.resultsService = resultsService;
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const idParam = params.get("id");
      const id = idParam ? Number(idParam) : null;
      this.formationId = id && !Number.isNaN(id) ? id : null;
      if (this.formationId !== null) {
        this.loadFormation();
      } else {
        this.error = "ID de formation manquant";
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ── load formation ─────────────────────────────────────────────────────
  loadFormation() {
    this.loading = true;
    this.error = "";
    this.formationService.getFormationById(this.formationId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.formation = res.formation || res.data || res;
        this.formation.modules = this.formation.modules || [];
        if (this.formation.modules.length) {
          this.openModules[this.formation.modules[0].id] = true;
        }
        this.loading = false;
        this.collectFormationQuizzes();
      },
      error: (err) => {
        this.error = "Erreur lors du chargement de la formation";
        this.loading = false;
      }
    });
  }
  // ── collect all quiz sections for stats selector ───────────────────────
  collectFormationQuizzes() {
    this.allFormationQuizzes = [];
    (this.formation.modules || []).forEach((mod) => {
      (mod.sections || []).forEach((sec) => {
        if (sec.type === "quiz" && sec.quiz_id) {
          this.allFormationQuizzes.push({ id: sec.quiz_id, titre: sec.titre });
        }
      });
    });
  }
  // ── module accordion ───────────────────────────────────────────────────
  toggleModule(id) {
    this.openModules[id] = !this.openModules[id];
  }
  // ── section selection ──────────────────────────────────────────────────
  selectSection(section, module) {
    this.selectedSection = section;
    this.selectedModule = module;
    this.activeQuiz = null;
    this.expandedQuestion = null;
    if (section.type === "quiz") {
      const quizId = section.quiz_id;
      if (quizId) {
        this.loadQuiz(quizId);
      }
    }
  }
  loadQuiz(quizId) {
    this.loadingQuiz = true;
    this.quizService.getQuiz(quizId).pipe(takeUntil(this.destroy$), catchError(() => of(null))).subscribe((res) => {
      const quiz = res?.quiz || res;
      if (quiz) {
        this.activeQuiz = quiz;
        this.questionService.getQuestions(quizId).pipe(takeUntil(this.destroy$), catchError(() => of({ questions: [] }))).subscribe((res2) => {
          this.activeQuiz.questions = (res2.questions || []).map((q) => __spreadProps(__spreadValues({}, q), {
            reponses: q.reponses || this.defaultOptions(q.type)
          }));
          this.loadingQuiz = false;
        });
      } else {
        this.loadingQuiz = false;
      }
    });
  }
  defaultOptions(type) {
    if (type === "true_false") {
      return [
        { reponse_text: "Vrai", is_correct: true, ordre: 1 },
        { reponse_text: "Faux", is_correct: false, ordre: 2 }
      ];
    }
    if (type === "multiple_choice" || type === "multiple_choice_multi") {
      return [
        { reponse_text: "", is_correct: true, ordre: 1 },
        { reponse_text: "", is_correct: false, ordre: 2 }
      ];
    }
    return [];
  }
  // ── add quiz to module ─────────────────────────────────────────────────
  addQuizToModule(module) {
    const newQuiz = {
      titre: `Quiz \u2014 ${module.titre}`,
      description: "",
      formation_id: this.formation.id,
      score_minimum: 70,
      tentatives_max: 2,
      duree_minutes: 0,
      is_active: true
    };
    this.quizService.createQuiz(newQuiz).pipe(takeUntil(this.destroy$)).subscribe({
      next: (quiz) => {
        const quizData = quiz.quiz || quiz;
        const fakeSection = {
          id: Date.now(),
          titre: quizData.titre,
          type: "quiz",
          quiz_id: quizData.id
        };
        module.sections = module.sections || [];
        module.sections.push(fakeSection);
        this.activeQuiz = __spreadProps(__spreadValues({}, quizData), { questions: [] });
        this.selectedSection = fakeSection;
        this.selectedModule = module;
        this.success = "Quiz cr\xE9\xE9 avec succ\xE8s";
        setTimeout(() => this.success = "", 3e3);
      },
      error: () => {
        this.error = "Erreur lors de la cr\xE9ation du quiz";
      }
    });
  }
  createQuizForSection(section, module) {
    this.addQuizToModule(module);
  }
  // ── question accordion ─────────────────────────────────────────────────
  toggleQuestion(id) {
    this.expandedQuestion = this.expandedQuestion === id ? null : id;
  }
  // ── add question ───────────────────────────────────────────────────────
  addQuestion(type) {
    if (!this.activeQuiz)
      return;
    const newQ = {
      id: Date.now(),
      // temp id until saved
      quizzes_id: this.activeQuiz.id,
      question_text: "",
      type,
      points: 1,
      ordre: (this.activeQuiz.questions?.length || 0) + 1,
      reponses: this.defaultOptions(type),
      explication: "",
      _new: true
    };
    this.activeQuiz.questions = [...this.activeQuiz.questions || [], newQ];
    this.expandedQuestion = newQ.id;
  }
  duplicateQuestion(q, event) {
    event.stopPropagation();
    if (!this.activeQuiz)
      return;
    const copy = __spreadProps(__spreadValues({}, JSON.parse(JSON.stringify(q))), {
      id: Date.now(),
      ordre: (this.activeQuiz.questions?.length || 0) + 1,
      _new: true
    });
    this.activeQuiz.questions = [...this.activeQuiz.questions, copy];
    this.expandedQuestion = copy.id;
  }
  deleteQuestion(q, event) {
    event.stopPropagation();
    if (!this.activeQuiz)
      return;
    if (q._new) {
      this.activeQuiz.questions = this.activeQuiz.questions.filter((x) => x.id !== q.id);
      return;
    }
    this.questionService.deleteQuestion(this.activeQuiz.id, q.id).pipe(takeUntil(this.destroy$), catchError(() => of(null))).subscribe(() => {
      this.activeQuiz.questions = this.activeQuiz.questions.filter((x) => x.id !== q.id);
    });
  }
  // ── options ────────────────────────────────────────────────────────────
  toggleCorrect(q, opt) {
    if (q.type === "multiple_choice") {
      q.reponses.forEach((r) => r.is_correct = false);
      opt.is_correct = true;
    } else {
      opt.is_correct = !opt.is_correct;
    }
  }
  addOption(q) {
    q.reponses = [...q.reponses || [], {
      reponse_text: "",
      is_correct: false,
      ordre: (q.reponses?.length || 0) + 1
    }];
  }
  removeOption(q, index) {
    q.reponses = q.reponses.filter((_, i) => i !== index);
  }
  // ── save quiz ──────────────────────────────────────────────────────────
  saveQuiz() {
    if (!this.activeQuiz)
      return;
    this.savingQuiz = true;
    this.error = "";
    const quizUpdate = {
      titre: this.activeQuiz.titre,
      description: this.activeQuiz.description,
      score_minimum: this.activeQuiz.score_minimum,
      tentatives_max: this.activeQuiz.tentatives_max,
      duree_minutes: this.activeQuiz.duree_minutes
    };
    this.quizService.updateQuiz(this.activeQuiz.id, quizUpdate).pipe(takeUntil(this.destroy$), catchError(() => of(null))).subscribe(() => {
      const saves = (this.activeQuiz.questions || []).map((q) => {
        const payload = {
          question_text: q.question_text,
          type: q.type,
          points: q.points,
          ordre: q.ordre,
          reponses: q.reponses,
          explication: q.explication,
          quizzes_id: this.activeQuiz.id
        };
        if (q._new) {
          return this.questionService.createQuestion(this.activeQuiz.id, payload).pipe(catchError(() => of(null)));
        }
        return this.questionService.updateQuestion(this.activeQuiz.id, q.id, payload).pipe(catchError(() => of(null)));
      });
      forkJoin(saves.length ? saves : [of(null)]).subscribe(() => {
        this.savingQuiz = false;
        this.success = "Quiz enregistr\xE9 avec succ\xE8s";
        setTimeout(() => this.success = "", 3e3);
        this.activeQuiz.questions.forEach((q) => delete q._new);
      });
    });
  }
  // ── publish formation ──────────────────────────────────────────────────
  publishFormation() {
    if (!this.formation)
      return;
    const action = this.formation.est_publie ? this.formationService.unpublishFormation(this.formation.id) : this.formationService.publishFormation(this.formation.id);
    action.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.formation.est_publie = !this.formation.est_publie;
        this.success = this.formation.est_publie ? "Formation publi\xE9e" : "Formation d\xE9publi\xE9e";
        setTimeout(() => this.success = "", 3e3);
      },
      error: () => {
        this.error = "Erreur lors de la publication";
      }
    });
  }
  // ── quiz stats ─────────────────────────────────────────────────────────
  loadQuizStats() {
    if (!this.selectedQuizId) {
      this.quizStats = null;
      return;
    }
    this.loadingStats = true;
    this.resultsService.getQuizStatistics(+this.selectedQuizId).pipe(takeUntil(this.destroy$), catchError(() => of(null))).subscribe((res) => {
      if (res) {
        this.quizStats = res.statistics || res;
        this.buildScoreBands(res.score_distribution || []);
        this.buildQuestionStats(res.question_stats || []);
      }
      this.loadingStats = false;
    });
  }
  buildScoreBands(dist) {
    const bands = [
      { label: "90\u2013100%", color: "fill-green", textColor: "tc-green", min: 90, max: 100 },
      { label: "70\u201389%", color: "fill-green", textColor: "tc-green", min: 70, max: 89 },
      { label: "50\u201369%", color: "fill-amber", textColor: "tc-amber", min: 50, max: 69 },
      { label: "0\u201349%", color: "fill-red", textColor: "tc-red", min: 0, max: 49 }
    ];
    const total = dist.reduce((s, d) => s + (d.count || 0), 0) || 1;
    this.scoreBands = bands.map((b) => {
      const entry = dist.find((d) => d.min === b.min) || { count: 0 };
      return __spreadProps(__spreadValues({}, b), { count: entry.count || 0, pct: Math.round((entry.count || 0) / total * 100) });
    });
  }
  buildQuestionStats(qs) {
    this.questionStats = qs.map((q) => ({
      question: q.question_text || q.question,
      pct: Math.round(q.taux_correct ?? q.success_rate ?? 0)
    }));
  }
  getParticipationRate() {
    if (!this.quizStats || !this.formation?.nb_inscrits)
      return 0;
    return Math.round((this.quizStats.total_participants || 0) / this.formation.nb_inscrits * 100);
  }
  getReussiteRate() {
    if (!this.quizStats?.total_participants)
      return 0;
    return Math.round((this.quizStats.nb_reussis || 0) / this.quizStats.total_participants * 100);
  }
  // ── helpers ────────────────────────────────────────────────────────────
  getDisplayName() {
    const u = this.currentUser;
    if (!u)
      return this.formation?.formateur?.nom || "Formateur";
    return u.name || `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || u.email || "Formateur";
  }
  getTypeLabel(type) {
    const map = {
      multiple_choice: "Choix unique",
      multiple_choice_multi: "Choix multiple",
      true_false: "Vrai / Faux",
      text: "Texte libre"
    };
    return map[type] || type;
  }
  getNiveauLabel(niveau) {
    const map = {
      debutant: "D\xE9butant",
      intermediaire: "Interm\xE9diaire",
      avance: "Avanc\xE9",
      expert: "Expert"
    };
    return map[niveau] || niveau || "\u2014";
  }
  getLangueLabel(langue) {
    const map = { fr: "Fran\xE7ais", en: "Anglais", ar: "Arabe" };
    return map[langue] || langue || "\u2014";
  }
  formatDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
  }
  static \u0275fac = function InstructorCourseDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorCourseDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(QuizService), \u0275\u0275directiveInject(QuestionQuizService), \u0275\u0275directiveInject(QuizResultsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorCourseDetailsComponent, selectors: [["app-instructor-course-details"]], decls: 5, vars: 5, consts: [["class", "icd-loader", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible mx-0 mb-3", 4, "ngIf"], ["class", "alert alert-success alert-dismissible mx-0 mb-3", 4, "ngIf"], [4, "ngIf"], ["class", "icd-editor-empty", 4, "ngIf"], [1, "icd-loader"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "alert", "alert-danger", "alert-dismissible", "mx-0", "mb-3"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-success", "alert-dismissible", "mx-0", "mb-3"], [1, "icd-head"], [1, "icd-back-btn", 3, "routerLink"], [1, "isax", "isax-arrow-left-2"], [1, "icd-head-info"], [1, "icd-head-title"], [1, "icd-head-sub"], ["type", "button", 1, "icd-pub-btn", 3, "click"], [1, "isax", "isax-send-2"], [1, "icd-tabs"], ["type", "button", 1, "icd-tab", 3, "click"], [1, "isax", "isax-element-4"], [1, "isax", "isax-chart-2"], [1, "isax", "isax-info-circle"], ["class", "icd-layout", 4, "ngIf"], ["class", "icd-stats", 4, "ngIf"], ["class", "icd-info", 4, "ngIf"], [1, "icd-layout"], [1, "icd-modules-panel"], [1, "icd-mp-head"], [1, "icd-mp-label"], ["target", "_blank", 1, "icd-add-btn", 3, "href"], [1, "isax", "isax-edit-2"], ["class", "icd-module", 4, "ngFor", "ngForOf"], ["class", "icd-empty-modules", 4, "ngIf"], [1, "icd-editor"], ["class", "icd-section-preview", 4, "ngIf"], [1, "icd-module"], [1, "icd-mod-hd", 3, "click"], [1, "icd-mod-num"], [1, "icd-mod-name"], [1, "isax", "isax-arrow-right-3", "icd-mod-arr"], ["class", "icd-mod-body", 4, "ngIf"], [1, "icd-mod-body"], ["class", "icd-sec-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "icd-add-quiz-row"], ["type", "button", 1, "icd-add-quiz-btn", 3, "click"], [1, "isax", "isax-award"], [1, "icd-sec-item", 3, "click"], [1, "isax", "icd-sec-icon"], [1, "icd-sec-name"], [1, "icd-sec-badge"], [1, "icd-empty-modules"], [1, "icd-editor-empty"], [1, "icd-etb"], [1, "icd-etb-title"], ["class", "icd-etb-sub", 4, "ngIf"], [1, "icd-etb-badge"], [1, "icd-etb-actions"], ["type", "button", 1, "icd-sm-btn", 3, "click", "disabled"], [1, "isax", "isax-device-message"], [1, "icd-qeditor"], [1, "icd-qsettings"], [1, "icd-qset-title"], [1, "icd-qset-grid"], [1, "icd-qset-field"], [1, "icd-qset-label"], ["type", "number", "min", "0", "max", "100", "title", "Score de r\xE9ussite en pourcentage", 1, "icd-qset-inp", 3, "ngModelChange", "ngModel"], [1, "icd-qset-inp", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "number", "min", "0", "title", "Dur\xE9e du quiz en minutes", 1, "icd-qset-inp", 3, "ngModelChange", "ngModel"], [1, "icd-questions"], ["class", "icd-qcard", 3, "expanded", 4, "ngFor", "ngForOf"], [1, "icd-add-bar"], ["type", "button", 1, "icd-aq-btn", 3, "click"], [1, "isax", "isax-record-circle"], [1, "isax", "isax-tick-square"], [1, "isax", "isax-toggle-on-circle"], [1, "isax", "isax-edit"], [1, "icd-etb-sub"], [1, "icd-qcard"], [1, "icd-qcard-hd", 3, "click"], [1, "icd-qnum"], [1, "icd-qtext"], [1, "icd-qtype-badge"], [1, "icd-qpts"], [1, "icd-qcard-actions"], ["type", "button", "title", "Dupliquer", 1, "icd-qbtn", 3, "click"], [1, "isax", "isax-copy"], ["type", "button", "title", "Supprimer", 1, "icd-qbtn", "danger", 3, "click"], [1, "isax", "isax-trash"], ["class", "icd-qcard-body", 4, "ngIf"], [1, "icd-qcard-body"], ["type", "text", "placeholder", "\xC9nonc\xE9 de la question\u2026", 1, "icd-qprompt", 3, "ngModelChange", "ngModel"], [1, "icd-pts-row"], [1, "icd-pts-label"], ["type", "number", "min", "1", "max", "10", "title", "Points attribu\xE9s \xE0 cette question", 1, "icd-pts-inp", 3, "ngModelChange", "ngModel"], ["class", "icd-options", 4, "ngIf"], ["class", "icd-text-hint", 4, "ngIf"], [1, "icd-expl-row"], [1, "icd-expl-label"], ["type", "text", "placeholder", "Affich\xE9 \xE0 l'apprenant apr\xE8s sa r\xE9ponse\u2026", 1, "icd-expl-inp", 3, "ngModelChange", "ngModel"], [1, "icd-options"], ["class", "icd-opt-row", 4, "ngFor", "ngForOf"], ["type", "button", "class", "icd-add-opt", 3, "click", 4, "ngIf"], [1, "icd-opt-row"], [1, "icd-opt-check", 3, "click"], ["class", "isax isax-tick-circle", 4, "ngIf"], ["type", "text", "placeholder", "R\xE9ponse\u2026", 1, "icd-opt-inp", 3, "ngModelChange", "ngModel"], ["class", "isax isax-trash icd-opt-del", 3, "click", 4, "ngIf"], [1, "isax", "isax-tick-circle"], [1, "isax", "isax-trash", "icd-opt-del", 3, "click"], ["type", "button", 1, "icd-add-opt", 3, "click"], [1, "isax", "isax-add-circle"], [1, "icd-text-hint"], [1, "icd-section-preview"], [1, "icd-sp-head"], [1, "icd-sp-badge"], [1, "isax"], [1, "icd-sp-title"], [1, "icd-sp-meta"], [1, "ms-3"], [1, "isax", "isax-flag", "me-1"], [1, "icd-sp-body"], ["class", "icd-sp-content", 4, "ngIf"], ["class", "icd-sp-resource mt-3", 4, "ngIf"], [1, "isax", "isax-clock", "me-1"], [1, "icd-sp-content"], [1, "icd-sp-section-label"], [1, "icd-sp-resource", "mt-3"], ["target", "_blank", 1, "icd-sp-link", 3, "href"], [1, "isax", "isax-link-2", "me-1"], [1, "isax", "isax-document-text"], ["type", "button", 1, "icd-sm-btn", "mt-2", 3, "click"], [1, "spinner-border", "text-primary", "spinner-border-sm"], [1, "icd-stats"], [1, "spinner-border", "text-primary"], [1, "icd-stats-toolbar"], [1, "ip-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "icd-stats-grid"], [1, "icd-stat-card"], [1, "icd-sc-label"], [1, "icd-sc-val"], [1, "icd-sc-sub", "neutral"], [1, "icd-sc-sub"], [1, "icd-sc-sub", "up"], [1, "icd-dist-card"], [1, "icd-dist-title"], ["class", "icd-dist-row", 4, "ngFor", "ngForOf"], ["class", "icd-qa-card", 4, "ngIf"], [1, "icd-dist-row"], [1, "icd-dist-label"], [1, "icd-dist-bar"], [1, "icd-dist-fill"], [1, "icd-dist-count"], [1, "icd-qa-card"], [1, "icd-qa-title"], ["class", "icd-qa-row", 4, "ngFor", "ngForOf"], [1, "icd-qa-row"], [1, "icd-qa-num"], [1, "icd-qa-text"], [1, "icd-qa-bar"], [1, "icd-qa-fill"], [1, "icd-qa-pct"], [1, "icd-info"], [1, "icd-info-grid"], [1, "icd-info-card"], [1, "icd-info-h"], [1, "icd-info-table"], [1, "fw"], [1, "icd-statut"], ["target", "_blank", 1, "icd-edit-link", 3, "href"], ["class", "icd-info-card", 4, "ngIf"], [1, "icd-desc", 3, "innerHTML"], [1, "isax", "isax-book-1"], [1, "icd-sm-btn", "mt-2", 3, "routerLink"]], template: function InstructorCourseDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorCourseDetailsComponent_div_0_Template, 4, 0, "div", 0)(1, InstructorCourseDetailsComponent_div_1_Template, 3, 1, "div", 1)(2, InstructorCourseDetailsComponent_div_2_Template, 3, 1, "div", 2)(3, InstructorCourseDetailsComponent_ng_container_3_Template, 26, 14, "ng-container", 3)(4, InstructorCourseDetailsComponent_div_4_Template, 6, 1, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formation && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.formation && !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n.icd-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.icd-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 0;\n}\n.icd-back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #6C757D;\n  text-decoration: none;\n  padding: 5px 10px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  white-space: nowrap;\n  transition: all 0.12s;\n}\n.icd-back-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.icd-back-btn[_ngcontent-%COMP%]:hover {\n  border-color: #534AB7;\n  color: #534AB7;\n}\n.icd-head-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.icd-head-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A1A2E;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icd-head-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.icd-pub-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  background: #534AB7;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.12s;\n}\n.icd-pub-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.icd-pub-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(69.2181818182, 61.5272727273, 154.6727272727);\n}\n.icd-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #E9ECEF;\n  background: #fff;\n  padding: 0 16px;\n}\n.icd-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #6C757D;\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.icd-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.icd-tab[_ngcontent-%COMP%]:hover {\n  color: #1A1A2E;\n}\n.icd-tab.active[_ngcontent-%COMP%] {\n  color: #534AB7;\n  border-bottom-color: #534AB7;\n  font-weight: 500;\n}\n.icd-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  background: #F8F9FA;\n  min-height: calc(100vh - 180px);\n}\n.icd-modules-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border-right: 1px solid #E9ECEF;\n  overflow-y: auto;\n}\n.icd-mp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 12px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.icd-mp-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.icd-add-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #534AB7;\n  text-decoration: none;\n  padding: 4px 8px;\n  border: 1px solid #AFA9EC;\n  border-radius: 8px;\n  transition: background 0.1s;\n}\n.icd-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.icd-add-btn[_ngcontent-%COMP%]:hover {\n  background: #EEF2FF;\n}\n.icd-module[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #E9ECEF;\n}\n.icd-mod-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.icd-mod-hd[_ngcontent-%COMP%]:hover {\n  background: #FAFBFF;\n}\n.icd-mod-hd.open[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n}\n.icd-mod-hd.open[_ngcontent-%COMP%]   .icd-mod-arr[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.icd-mod-num[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #EEEDFE;\n  color: #3C3489;\n  font-size: 10px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.icd-mod-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1A1A2E;\n  flex: 1;\n}\n.icd-mod-arr[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  transition: transform 0.15s;\n  flex-shrink: 0;\n}\n.icd-mod-body[_ngcontent-%COMP%] {\n  padding: 0 12px 8px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.icd-sec-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 5px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #6C757D;\n  transition: all 0.12s;\n}\n.icd-sec-item[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.icd-sec-item.active[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.icd-sec-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.icd-sec-name[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icd-sec-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 1px 6px;\n  border-radius: 20px;\n  flex-shrink: 0;\n}\n.icd-sec-badge.badge-vid[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.icd-sec-badge.badge-doc[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #085041;\n}\n.icd-sec-badge.badge-quiz[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.icd-add-quiz-row[_ngcontent-%COMP%] {\n  padding: 4px 0 2px 4px;\n}\n.icd-add-quiz-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #6C757D;\n  background: none;\n  border: 1px dashed #E9ECEF;\n  border-radius: 8px;\n  padding: 3px 8px;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.icd-add-quiz-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.icd-add-quiz-btn[_ngcontent-%COMP%]:hover {\n  border-color: #AFA9EC;\n  color: #534AB7;\n}\n.icd-empty-modules[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 32px 16px;\n  color: #6C757D;\n  font-size: 12px;\n  text-align: center;\n}\n.icd-empty-modules[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  opacity: 0.3;\n}\n.icd-editor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n.icd-editor-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 320px;\n  color: #6C757D;\n  font-size: 13px;\n}\n.icd-editor-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  opacity: 0.25;\n}\n.icd-editor-empty[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgb(147.4356223176, 155.1802575107, 162.0643776824);\n}\n.icd-etb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding: 10px 14px;\n  border-bottom: 1px solid #E9ECEF;\n  background: #fff;\n}\n.icd-etb-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.icd-etb-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.icd-etb-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #EEEDFE;\n  color: #3C3489;\n  white-space: nowrap;\n}\n.icd-etb-actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  gap: 6px;\n}\n.icd-sm-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #6C757D;\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.icd-sm-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.icd-sm-btn[_ngcontent-%COMP%]:hover {\n  border-color: #534AB7;\n  color: #534AB7;\n}\n.icd-sm-btn.primary[_ngcontent-%COMP%] {\n  background: #534AB7;\n  border-color: #534AB7;\n  color: #fff;\n}\n.icd-sm-btn.primary[_ngcontent-%COMP%]:hover {\n  background: rgb(69.2181818182, 61.5272727273, 154.6727272727);\n}\n.icd-sm-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.icd-qeditor[_ngcontent-%COMP%] {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex: 1;\n}\n.icd-qsettings[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.icd-qset-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 10px;\n}\n.icd-qset-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n@media (max-width: 700px) {\n  .icd-qset-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.icd-qset-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.icd-qset-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.icd-qset-inp[_ngcontent-%COMP%] {\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 6px 9px;\n  font-size: 12px;\n  color: #1A1A2E;\n  background: #fff;\n  outline: none;\n  transition: border-color 0.12s;\n}\n.icd-qset-inp[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.icd-questions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.icd-qcard[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.icd-qcard.expanded[_ngcontent-%COMP%] {\n  border-color: #AFA9EC;\n}\n.icd-qcard-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid transparent;\n  transition: background 0.1s;\n}\n.icd-qcard-hd[_ngcontent-%COMP%]:hover {\n  background: #FAFBFF;\n}\n.icd-qcard.expanded[_ngcontent-%COMP%]   .icd-qcard-hd[_ngcontent-%COMP%] {\n  border-bottom-color: #E9ECEF;\n}\n.icd-qnum[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #EEEDFE;\n  color: #3C3489;\n  font-size: 11px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.icd-qtext[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1A1A2E;\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icd-qtype-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #F1EFE8;\n  color: #444;\n  white-space: nowrap;\n}\n.icd-qpts[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.icd-qcard-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.icd-qbtn[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #6C757D;\n  cursor: pointer;\n  transition: all 0.1s;\n}\n.icd-qbtn[_ngcontent-%COMP%]:hover {\n  border-color: #534AB7;\n  color: #534AB7;\n}\n.icd-qbtn.danger[_ngcontent-%COMP%]:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.icd-qcard-body[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.icd-qprompt[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 7px 10px;\n  font-size: 13px;\n  color: #1A1A2E;\n  background: #fff;\n  outline: none;\n}\n.icd-qprompt[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.icd-pts-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.icd-pts-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.icd-pts-inp[_ngcontent-%COMP%] {\n  width: 64px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 4px 8px;\n  font-size: 12px;\n  text-align: center;\n  outline: none;\n}\n.icd-pts-inp[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.icd-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.icd-opt-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.icd-opt-check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 1px solid #E9ECEF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  flex-shrink: 0;\n  cursor: pointer;\n  transition: all 0.1s;\n}\n.icd-opt-check.correct[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  border-color: #97C459;\n  color: #27500A;\n}\n.icd-opt-inp[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 5px 9px;\n  font-size: 12px;\n  color: #1A1A2E;\n  background: #fff;\n  outline: none;\n}\n.icd-opt-inp[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.icd-opt-inp.correct[_ngcontent-%COMP%] {\n  border-color: #97C459;\n  background: #F5FAF0;\n}\n.icd-opt-del[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6C757D;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.icd-opt-del[_ngcontent-%COMP%]:hover {\n  color: #DC3545;\n}\n.icd-add-opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #6C757D;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.icd-add-opt[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.icd-add-opt[_ngcontent-%COMP%]:hover {\n  color: #1A1A2E;\n}\n.icd-text-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  font-style: italic;\n  background: #F8F9FA;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\n.icd-expl-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 6px;\n  border-top: 1px solid #E9ECEF;\n}\n.icd-expl-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.icd-expl-inp[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 5px 9px;\n  font-size: 12px;\n  color: #6C757D;\n  background: #fff;\n  outline: none;\n}\n.icd-expl-inp[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.icd-add-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding: 2px 0;\n}\n.icd-aq-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border: 1px dashed #E9ECEF;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #6C757D;\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.icd-aq-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.icd-aq-btn[_ngcontent-%COMP%]:hover {\n  border-color: #AFA9EC;\n  color: #534AB7;\n}\n.icd-stats[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.icd-stats-toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 12px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  min-width: 260px;\n}\n.icd-stats-toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.icd-stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n}\n@media (max-width: 800px) {\n  .icd-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.icd-stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.icd-sc-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-bottom: 4px;\n}\n.icd-sc-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.icd-sc-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 3px;\n}\n.icd-sc-sub.up[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.icd-sc-sub.down[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.icd-sc-sub.neutral[_ngcontent-%COMP%] {\n  color: #6C757D;\n}\n.icd-dist-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 14px;\n}\n.icd-dist-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #6C757D;\n  margin-bottom: 12px;\n}\n.icd-dist-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 7px;\n}\n.icd-dist-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.icd-dist-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  width: 64px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.icd-dist-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 12px;\n  background: #F0F0F0;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.icd-dist-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  transition: width 0.3s;\n}\n.fill-green[_ngcontent-%COMP%] {\n  background: #97C459;\n}\n.fill-amber[_ngcontent-%COMP%] {\n  background: #EF9F27;\n}\n.fill-red[_ngcontent-%COMP%] {\n  background: #F09595;\n}\n.icd-dist-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  width: 90px;\n}\n.icd-dist-count.tc-green[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.icd-dist-count.tc-amber[_ngcontent-%COMP%] {\n  color: #854F0B;\n}\n.icd-dist-count.tc-red[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.icd-qa-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 14px;\n}\n.icd-qa-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #6C757D;\n  margin-bottom: 10px;\n}\n.icd-qa-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 0;\n  border-bottom: 1px solid #E9ECEF;\n}\n.icd-qa-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.icd-qa-num[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  width: 24px;\n  flex-shrink: 0;\n}\n.icd-qa-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1A1A2E;\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icd-qa-bar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 6px;\n  background: #F0F0F0;\n  border-radius: 4px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.icd-qa-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n}\n.fill-g[_ngcontent-%COMP%] {\n  background: #639922;\n}\n.fill-a[_ngcontent-%COMP%] {\n  background: #BA7517;\n}\n.fill-r[_ngcontent-%COMP%] {\n  background: #E24B4A;\n}\n.icd-qa-pct[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  width: 36px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.icd-qa-pct.pct-g[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.icd-qa-pct.pct-a[_ngcontent-%COMP%] {\n  color: #854F0B;\n}\n.icd-qa-pct.pct-r[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.icd-info[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.icd-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 14px;\n}\n@media (max-width: 700px) {\n  .icd-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.icd-info-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 14px 16px;\n}\n.icd-info-h[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 10px;\n}\n.icd-info-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.icd-info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  vertical-align: top;\n}\n.icd-info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  color: #6C757D;\n  width: 130px;\n  padding-right: 12px;\n}\n.icd-info-table[_ngcontent-%COMP%]   td.fw[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.icd-statut[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 6px;\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.icd-statut.published[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.icd-edit-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 10px;\n  font-size: 12px;\n  color: #534AB7;\n  text-decoration: none;\n}\n.icd-edit-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.icd-edit-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.icd-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  line-height: 1.6;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.ms-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.me-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.icd-section-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 22px;\n  background: #fff;\n  flex: 1;\n}\n.icd-sp-head[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n  border-bottom: 1px solid #E9ECEF;\n  margin-bottom: 18px;\n}\n.icd-sp-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 3px 10px;\n  border-radius: 20px;\n  margin-bottom: 10px;\n}\n.icd-sp-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.icd-sp-badge.badge-vid[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.icd-sp-badge.badge-doc[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #085041;\n}\n.icd-sp-badge.badge-res[_ngcontent-%COMP%] {\n  background: #FFF3E0;\n  color: #7C4600;\n}\n.icd-sp-badge[_ngcontent-%COMP%]:not(.badge-vid):not(.badge-doc):not(.badge-res) {\n  background: #EEF2FF;\n  color: #534AB7;\n}\n.icd-sp-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 10px;\n  line-height: 1.35;\n}\n.icd-sp-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-size: 12px;\n  color: #6C757D;\n}\n.icd-sp-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  vertical-align: middle;\n}\n.icd-sp-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.icd-sp-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  line-height: 1.65;\n  margin: 0;\n  white-space: pre-line;\n}\n.icd-sp-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin: 0 0 6px;\n}\n.icd-sp-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 13px;\n  color: #534AB7;\n  text-decoration: none;\n  padding: 7px 14px;\n  border: 1px solid #AFA9EC;\n  border-radius: 8px;\n  transition: all 0.12s;\n}\n.icd-sp-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.icd-sp-link[_ngcontent-%COMP%]:hover {\n  background: #EEF2FF;\n  border-color: #534AB7;\n}\n/*# sourceMappingURL=instructor-course-details.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorCourseDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-course-details", imports: [CommonModule, RouterLink, FormsModule], template: `<!-- Loading -->\r
<div *ngIf="loading" class="icd-loader">\r
  <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Chargement...</span></div>\r
</div>\r
\r
<!-- Error -->\r
<div *ngIf="error" class="alert alert-danger alert-dismissible mx-0 mb-3">\r
  {{ error }}<button type="button" class="btn-close" (click)="error=''"></button>\r
</div>\r
<div *ngIf="success" class="alert alert-success alert-dismissible mx-0 mb-3">\r
  {{ success }}<button type="button" class="btn-close" (click)="success=''"></button>\r
</div>\r
\r
<ng-container *ngIf="formation && !loading">\r
\r
  <!-- \u2500\u2500 PAGE HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="icd-head">\r
    <a [routerLink]="routes.instructorCourse" class="icd-back-btn">\r
      <i class="isax isax-arrow-left-2"></i> Mes formations\r
    </a>\r
    <div class="icd-head-info">\r
      <div class="icd-head-title">{{ formation.titre }}</div>\r
      <div class="icd-head-sub">\r
        Formateur : {{ getDisplayName() }} &nbsp;\xB7&nbsp;\r
        {{ formation.modules?.length || 0 }} modules &nbsp;\xB7&nbsp;\r
        {{ formation.nb_inscrits || 0 }} apprenants\r
      </div>\r
    </div>\r
    <button type="button" class="icd-pub-btn" (click)="publishFormation()">\r
      <i class="isax isax-send-2"></i> Publier les modifications\r
    </button>\r
  </div>\r
\r
  <!-- \u2500\u2500 TAB NAV \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="icd-tabs">\r
    <button type="button" class="icd-tab" [class.active]="activeTab==='contenu'" (click)="activeTab='contenu'">\r
      <i class="isax isax-element-4"></i> Contenu & modules\r
    </button>\r
    <button type="button" class="icd-tab" [class.active]="activeTab==='stats'" (click)="activeTab='stats'; loadQuizStats()">\r
      <i class="isax isax-chart-2"></i> R\xE9sultats quiz\r
    </button>\r
    <button type="button" class="icd-tab" [class.active]="activeTab==='info'" (click)="activeTab='info'">\r
      <i class="isax isax-info-circle"></i> Informations\r
    </button>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- TAB : CONTENU & MODULES                                              -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="activeTab==='contenu'" class="icd-layout">\r
\r
    <!-- \u2500\u2500 LEFT : modules panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="icd-modules-panel">\r
      <div class="icd-mp-head">\r
        <span class="icd-mp-label">Modules</span>\r
        <a [href]="'/courses/instructor-course-edit/' + formation.id" target="_blank" class="icd-add-btn">\r
          <i class="isax isax-edit-2"></i> Modifier\r
        </a>\r
      </div>\r
\r
      <div *ngFor="let mod of formation.modules; let mi = index" class="icd-module">\r
        <!-- module header -->\r
        <div class="icd-mod-hd" [class.open]="openModules[mod.id]" (click)="toggleModule(mod.id)">\r
          <div class="icd-mod-num">{{ mi + 1 }}</div>\r
          <span class="icd-mod-name">{{ mod.titre }}</span>\r
          <i class="isax isax-arrow-right-3 icd-mod-arr"></i>\r
        </div>\r
\r
        <!-- module sections -->\r
        <div class="icd-mod-body" *ngIf="openModules[mod.id]">\r
          <div *ngFor="let sec of mod.sections"\r
               class="icd-sec-item"\r
               [class.active]="selectedSection?.id === sec.id"\r
               (click)="selectSection(sec, mod)">\r
            <i class="isax icd-sec-icon"\r
               [class.isax-video-circle]="sec.type==='video'"\r
               [class.isax-document-text]="sec.type==='document' || sec.type==='pdf'"\r
               [class.isax-award]="sec.type==='quiz'"></i>\r
            <span class="icd-sec-name">{{ sec.titre }}</span>\r
            <span class="icd-sec-badge"\r
                  [class.badge-vid]="sec.type==='video'"\r
                  [class.badge-doc]="sec.type==='document'||sec.type==='pdf'"\r
                  [class.badge-quiz]="sec.type==='quiz'">\r
              {{ sec.type === 'video' ? 'Vid\xE9o' : sec.type === 'quiz' ? 'Quiz' : 'Doc' }}\r
            </span>\r
          </div>\r
\r
          <!-- add quiz button -->\r
          <div class="icd-add-quiz-row">\r
            <button type="button" class="icd-add-quiz-btn" (click)="addQuizToModule(mod)">\r
              <i class="isax isax-award"></i> Ajouter un quiz\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="!formation.modules?.length" class="icd-empty-modules">\r
        <i class="isax isax-element-4"></i>\r
        <span>Aucun module \u2014 modifiez la formation</span>\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500 RIGHT : editor area \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <div class="icd-editor">\r
\r
      <!-- empty state -->\r
      <div *ngIf="!selectedSection" class="icd-editor-empty">\r
        <i class="isax isax-award"></i>\r
        <div>S\xE9lectionnez un quiz dans la liste des modules</div>\r
        <small>ou ajoutez un quiz \xE0 un module existant</small>\r
      </div>\r
\r
      <!-- quiz editor -->\r
      <ng-container *ngIf="selectedSection && selectedSection.type === 'quiz' && activeQuiz">\r
\r
        <!-- editor topbar -->\r
        <div class="icd-etb">\r
          <div>\r
            <div class="icd-etb-title">{{ activeQuiz.titre }}</div>\r
            <div class="icd-etb-sub" *ngIf="activeQuiz.statistics">\r
              Pass\xE9 par {{ activeQuiz.statistics.total_participants }} apprenants\r
              \xB7 Score moyen : {{ activeQuiz.statistics.note_moyenne }}%\r
            </div>\r
          </div>\r
          <span class="icd-etb-badge">{{ activeQuiz.questions?.length || 0 }} questions</span>\r
          <div class="icd-etb-actions">\r
            <button type="button" class="icd-sm-btn" [disabled]="savingQuiz" (click)="saveQuiz()">\r
              <i class="isax isax-device-message"></i>\r
              {{ savingQuiz ? 'Sauvegarde\u2026' : 'Enregistrer' }}\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="icd-qeditor">\r
\r
          <!-- settings row -->\r
          <div class="icd-qsettings">\r
            <div class="icd-qset-title">Param\xE8tres du quiz</div>\r
            <div class="icd-qset-grid">\r
              <div class="icd-qset-field">\r
                <label class="icd-qset-label">Score de r\xE9ussite (%)</label>\r
                <input type="number" class="icd-qset-inp" [(ngModel)]="activeQuiz.score_minimum" min="0" max="100" title="Score de r\xE9ussite en pourcentage">\r
              </div>\r
              <div class="icd-qset-field">\r
                <label class="icd-qset-label">Tentatives autoris\xE9es</label>\r
                <select class="icd-qset-inp" [(ngModel)]="activeQuiz.tentatives_max">\r
                  <option [value]="1">1 tentative</option>\r
                  <option [value]="2">2 tentatives</option>\r
                  <option [value]="3">3 tentatives</option>\r
                  <option [value]="0">Illimit\xE9es</option>\r
                </select>\r
              </div>\r
              <div class="icd-qset-field">\r
                <label class="icd-qset-label">Dur\xE9e (minutes)</label>\r
                <input type="number" class="icd-qset-inp" [(ngModel)]="activeQuiz.duree_minutes" min="0" title="Dur\xE9e du quiz en minutes">\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- questions list -->\r
          <div class="icd-questions">\r
            <div *ngFor="let q of activeQuiz.questions; let qi = index"\r
                 class="icd-qcard"\r
                 [class.expanded]="expandedQuestion === q.id">\r
\r
              <!-- question header -->\r
              <div class="icd-qcard-hd" (click)="toggleQuestion(q.id)">\r
                <div class="icd-qnum">{{ qi + 1 }}</div>\r
                <span class="icd-qtext">{{ q.question_text || 'Nouvelle question' }}</span>\r
                <span class="icd-qtype-badge">{{ getTypeLabel(q.type) }}</span>\r
                <span class="icd-qpts">{{ q.points }} pt{{ q.points > 1 ? 's' : '' }}</span>\r
                <div class="icd-qcard-actions">\r
                  <button type="button" class="icd-qbtn" title="Dupliquer" (click)="duplicateQuestion(q, $event)">\r
                    <i class="isax isax-copy"></i>\r
                  </button>\r
                  <button type="button" class="icd-qbtn danger" title="Supprimer" (click)="deleteQuestion(q, $event)">\r
                    <i class="isax isax-trash"></i>\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <!-- question body (expanded) -->\r
              <div class="icd-qcard-body" *ngIf="expandedQuestion === q.id">\r
                <input type="text" class="icd-qprompt" [(ngModel)]="q.question_text"\r
                       placeholder="\xC9nonc\xE9 de la question\u2026">\r
\r
                <!-- points -->\r
                <div class="icd-pts-row">\r
                  <label class="icd-pts-label">Points :</label>\r
                  <input type="number" class="icd-pts-inp" [(ngModel)]="q.points" min="1" max="10" title="Points attribu\xE9s \xE0 cette question">\r
                </div>\r
\r
                <!-- options for multiple_choice / true_false -->\r
                <div *ngIf="q.type !== 'text'" class="icd-options">\r
                  <div *ngFor="let opt of q.reponses; let oi = index" class="icd-opt-row">\r
                    <div class="icd-opt-check"\r
                         [class.correct]="opt.is_correct"\r
                         (click)="toggleCorrect(q, opt)">\r
                      <i class="isax isax-tick-circle" *ngIf="opt.is_correct"></i>\r
                    </div>\r
                    <input type="text" class="icd-opt-inp" [class.correct]="opt.is_correct"\r
                           [(ngModel)]="opt.reponse_text" placeholder="R\xE9ponse\u2026">\r
                    <i class="isax isax-trash icd-opt-del"\r
                       *ngIf="q.type !== 'true_false'"\r
                       (click)="removeOption(q, oi)"></i>\r
                  </div>\r
                  <button type="button" class="icd-add-opt"\r
                          *ngIf="q.type === 'multiple_choice'"\r
                          (click)="addOption(q)">\r
                    <i class="isax isax-add-circle"></i> Ajouter une option\r
                  </button>\r
                </div>\r
\r
                <!-- text answer hint -->\r
                <div *ngIf="q.type === 'text'" class="icd-text-hint">\r
                  R\xE9ponse libre \u2014 \xE9valu\xE9e manuellement par le formateur\r
                </div>\r
\r
                <!-- explanation -->\r
                <div class="icd-expl-row">\r
                  <label class="icd-expl-label">Explication :</label>\r
                  <input type="text" class="icd-expl-inp" [(ngModel)]="q.explication"\r
                         placeholder="Affich\xE9 \xE0 l'apprenant apr\xE8s sa r\xE9ponse\u2026">\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- add question bar -->\r
          <div class="icd-add-bar">\r
            <button type="button" class="icd-aq-btn" (click)="addQuestion('multiple_choice')">\r
              <i class="isax isax-record-circle"></i> Choix unique\r
            </button>\r
            <button type="button" class="icd-aq-btn" (click)="addQuestion('multiple_choice_multi')">\r
              <i class="isax isax-tick-square"></i> Choix multiple\r
            </button>\r
            <button type="button" class="icd-aq-btn" (click)="addQuestion('true_false')">\r
              <i class="isax isax-toggle-on-circle"></i> Vrai / Faux\r
            </button>\r
            <button type="button" class="icd-aq-btn" (click)="addQuestion('text')">\r
              <i class="isax isax-edit"></i> Texte libre\r
            </button>\r
          </div>\r
\r
        </div><!-- /icd-qeditor -->\r
      </ng-container>\r
\r
      <!-- section preview (non-quiz) -->\r
      <div *ngIf="selectedSection && selectedSection.type !== 'quiz'" class="icd-section-preview">\r
        <div class="icd-sp-head">\r
          <span class="icd-sp-badge"\r
                [class.badge-vid]="selectedSection.type==='video'"\r
                [class.badge-doc]="selectedSection.type==='pdf'||selectedSection.type==='document'||selectedSection.type==='text'||selectedSection.type==='texte'||selectedSection.type==='reading'"\r
                [class.badge-res]="selectedSection.type==='ressource'||selectedSection.type==='exercice'">\r
            <i class="isax"\r
               [class.isax-video-circle]="selectedSection.type==='video'"\r
               [class.isax-document-text]="selectedSection.type==='pdf'||selectedSection.type==='document'||selectedSection.type==='text'||selectedSection.type==='texte'||selectedSection.type==='reading'"\r
               [class.isax-link-2]="selectedSection.type==='ressource'||selectedSection.type==='exercice'"></i>\r
            {{ selectedSection.type === 'video' ? 'Vid\xE9o' : selectedSection.type === 'pdf' ? 'PDF' : selectedSection.type === 'ressource' ? 'Ressource' : 'Lecture' }}\r
          </span>\r
          <h3 class="icd-sp-title">{{ selectedSection.titre }}</h3>\r
          <div class="icd-sp-meta">\r
            <span *ngIf="selectedSection.duree_estimee"><i class="isax isax-clock me-1"></i>{{ selectedSection.duree_estimee }} min</span>\r
            <span class="ms-3"><i class="isax isax-flag me-1"></i>{{ selectedSection.obligatoire ? 'Obligatoire' : 'Optionnelle' }}</span>\r
          </div>\r
        </div>\r
        <div class="icd-sp-body">\r
          <div *ngIf="selectedSection.description || selectedSection.contenu" class="icd-sp-content">\r
            <h5 class="icd-sp-section-label">Contenu</h5>\r
            <p>{{ selectedSection.description || selectedSection.contenu }}</p>\r
          </div>\r
          <div *ngIf="selectedSection.ressources" class="icd-sp-resource mt-3">\r
            <h5 class="icd-sp-section-label">Ressource</h5>\r
            <a [href]="selectedSection.ressources" target="_blank" class="icd-sp-link">\r
              <i class="isax isax-link-2 me-1"></i>Ouvrir la ressource\r
            </a>\r
          </div>\r
          <div *ngIf="!selectedSection.description && !selectedSection.contenu && !selectedSection.ressources" class="icd-editor-empty">\r
            <i class="isax isax-document-text"></i>\r
            <div>{{ selectedSection.titre }}</div>\r
            <small>Aucun contenu d\xE9fini pour cette section</small>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- quiz section with no quiz yet -->\r
      <div *ngIf="selectedSection && selectedSection.type === 'quiz' && !activeQuiz && !loadingQuiz"\r
           class="icd-editor-empty">\r
        <i class="isax isax-award"></i>\r
        <div>Quiz introuvable</div>\r
        <button type="button" class="icd-sm-btn mt-2" (click)="createQuizForSection(selectedSection, selectedModule)">\r
          <i class="isax isax-add-circle"></i> Cr\xE9er le quiz\r
        </button>\r
      </div>\r
\r
      <div *ngIf="loadingQuiz" class="icd-editor-empty">\r
        <div class="spinner-border text-primary spinner-border-sm"></div>\r
        <span>Chargement du quiz\u2026</span>\r
      </div>\r
\r
    </div><!-- /icd-editor -->\r
  </div><!-- /icd-layout -->\r
\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- TAB : R\xC9SULTATS QUIZ                                                  -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="activeTab==='stats'" class="icd-stats">\r
\r
    <div *ngIf="loadingStats" class="icd-loader"><div class="spinner-border text-primary"></div></div>\r
\r
    <ng-container *ngIf="!loadingStats">\r
\r
      <!-- quiz selector -->\r
      <div class="icd-stats-toolbar">\r
        <select class="ip-select" [(ngModel)]="selectedQuizId" (change)="loadQuizStats()">\r
          <option value="">S\xE9lectionner un quiz\u2026</option>\r
          <option *ngFor="let q of allFormationQuizzes" [value]="q.id">{{ q.titre }}</option>\r
        </select>\r
      </div>\r
\r
      <ng-container *ngIf="quizStats">\r
        <!-- KPI cards -->\r
        <div class="icd-stats-grid">\r
          <div class="icd-stat-card">\r
            <div class="icd-sc-label">Apprenants ayant pass\xE9</div>\r
            <div class="icd-sc-val">{{ quizStats.total_participants || 0 }}/{{ formation.nb_inscrits || '?' }}</div>\r
            <div class="icd-sc-sub neutral">{{ getParticipationRate() }}% de participation</div>\r
          </div>\r
          <div class="icd-stat-card">\r
            <div class="icd-sc-label">Score moyen</div>\r
            <div class="icd-sc-val">{{ quizStats.note_moyenne || 0 }}%</div>\r
            <div class="icd-sc-sub" [class.up]="(quizStats.note_moyenne||0) >= (activeQuiz?.score_minimum||70)"\r
                 [class.down]="(quizStats.note_moyenne||0) < (activeQuiz?.score_minimum||70)">\r
              {{ (quizStats.note_moyenne||0) >= (activeQuiz?.score_minimum||70) ? 'Au-dessus du seuil' : 'Sous le seuil' }}\r
            </div>\r
          </div>\r
          <div class="icd-stat-card">\r
            <div class="icd-sc-label">Taux de r\xE9ussite</div>\r
            <div class="icd-sc-val">{{ getReussiteRate() }}%</div>\r
            <div class="icd-sc-sub up">{{ quizStats.nb_reussis || 0 }} r\xE9ussis</div>\r
          </div>\r
          <div class="icd-stat-card">\r
            <div class="icd-sc-label">R\xE9sultats totaux</div>\r
            <div class="icd-sc-val">{{ quizStats.total_participants || 0 }}</div>\r
            <div class="icd-sc-sub neutral">tentatives enregistr\xE9es</div>\r
          </div>\r
        </div>\r
\r
        <!-- score distribution -->\r
        <div class="icd-dist-card">\r
          <div class="icd-dist-title">Distribution des scores</div>\r
          <div *ngFor="let band of scoreBands" class="icd-dist-row">\r
            <span class="icd-dist-label">{{ band.label }}</span>\r
            <div class="icd-dist-bar">\r
              <div class="icd-dist-fill" [class]="band.color" [style.width.%]="band.pct"></div>\r
            </div>\r
            <span class="icd-dist-count" [class]="band.textColor">{{ band.count }} apprenants</span>\r
          </div>\r
        </div>\r
\r
        <!-- per-question rates -->\r
        <div class="icd-qa-card" *ngIf="questionStats.length > 0">\r
          <div class="icd-qa-title">Taux de bonne r\xE9ponse par question</div>\r
          <div *ngFor="let qs of questionStats; let i = index" class="icd-qa-row">\r
            <span class="icd-qa-num">Q{{ i + 1 }}</span>\r
            <span class="icd-qa-text">{{ qs.question }}</span>\r
            <div class="icd-qa-bar">\r
              <div class="icd-qa-fill"\r
                   [class.fill-g]="qs.pct >= 70"\r
                   [class.fill-a]="qs.pct >= 50 && qs.pct < 70"\r
                   [class.fill-r]="qs.pct < 50"\r
                   [style.width.%]="qs.pct"></div>\r
            </div>\r
            <span class="icd-qa-pct"\r
                  [class.pct-g]="qs.pct >= 70"\r
                  [class.pct-a]="qs.pct >= 50 && qs.pct < 70"\r
                  [class.pct-r]="qs.pct < 50">{{ qs.pct }}%</span>\r
          </div>\r
        </div>\r
      </ng-container>\r
\r
      <div *ngIf="!quizStats && !loadingStats" class="icd-editor-empty">\r
        <i class="isax isax-chart-2"></i>\r
        <span>S\xE9lectionnez un quiz pour voir les r\xE9sultats</span>\r
      </div>\r
    </ng-container>\r
  </div>\r
\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- TAB : INFORMATIONS                                                   -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="activeTab==='info'" class="icd-info">\r
    <div class="icd-info-grid">\r
\r
      <div class="icd-info-card">\r
        <h6 class="icd-info-h">Informations g\xE9n\xE9rales</h6>\r
        <table class="icd-info-table">\r
          <tr><td>Titre</td><td class="fw">{{ formation.titre }}</td></tr>\r
          <tr><td>Cat\xE9gorie</td><td>{{ formation.categorie?.nom || '\u2014' }}</td></tr>\r
          <tr><td>Niveau</td><td>{{ getNiveauLabel(formation.niveau) }}</td></tr>\r
          <tr><td>Langue</td><td>{{ getLangueLabel(formation.langue) }}</td></tr>\r
          <tr><td>Dur\xE9e totale</td><td>{{ formation.duree_totale }}h</td></tr>\r
          <tr><td>Prix</td><td>{{ formation.prix == 0 ? 'Gratuit' : formation.prix + ' FCFA' }}</td></tr>\r
          <tr><td>Statut</td><td>\r
            <span class="icd-statut" [class.published]="formation.est_publie">\r
              {{ formation.est_publie ? 'Publi\xE9' : 'Brouillon' }}\r
            </span>\r
          </td></tr>\r
        </table>\r
      </div>\r
\r
      <div class="icd-info-card">\r
        <h6 class="icd-info-h">Statistiques</h6>\r
        <table class="icd-info-table">\r
          <tr><td>Modules</td><td class="fw">{{ formation.modules?.length || 0 }}</td></tr>\r
          <tr><td>Apprenants inscrits</td><td class="fw">{{ formation.nb_inscrits || 0 }}</td></tr>\r
          <tr><td>Taux de compl\xE9tion</td><td class="fw">{{ formation.taux_completion || 0 }}%</td></tr>\r
          <tr><td>Cr\xE9\xE9 le</td><td>{{ formatDate(formation.created_at) }}</td></tr>\r
          <tr><td>Mis \xE0 jour le</td><td>{{ formatDate(formation.updated_at) }}</td></tr>\r
        </table>\r
        <a [href]="'/courses/instructor-course-edit/' + formation.id" target="_blank" class="icd-edit-link">\r
          <i class="isax isax-edit-2"></i> Modifier la formation\r
        </a>\r
      </div>\r
\r
      <div class="icd-info-card" *ngIf="formation.description">\r
        <h6 class="icd-info-h">Description</h6>\r
        <div class="icd-desc" [innerHTML]="formation.description"></div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</ng-container>\r
\r
<!-- No formation -->\r
<div *ngIf="!formation && !loading && !error" class="icd-editor-empty">\r
  <i class="isax isax-book-1"></i>\r
  <span>Formation introuvable</span>\r
  <a [routerLink]="routes.instructorCourse" class="icd-sm-btn mt-2">Retour aux formations</a>\r
</div>\r
`, styles: ["/* src/app/features/courses/instructor-course-details/instructor-course-details.component.scss */\n.icd-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.icd-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 0;\n}\n.icd-back-btn {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #6C757D;\n  text-decoration: none;\n  padding: 5px 10px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  white-space: nowrap;\n  transition: all 0.12s;\n}\n.icd-back-btn i {\n  font-size: 14px;\n}\n.icd-back-btn:hover {\n  border-color: #534AB7;\n  color: #534AB7;\n}\n.icd-head-info {\n  flex: 1;\n  min-width: 0;\n}\n.icd-head-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A1A2E;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icd-head-sub {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.icd-pub-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  background: #534AB7;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.12s;\n}\n.icd-pub-btn i {\n  font-size: 14px;\n}\n.icd-pub-btn:hover {\n  background: rgb(69.2181818182, 61.5272727273, 154.6727272727);\n}\n.icd-tabs {\n  display: flex;\n  border-bottom: 1px solid #E9ECEF;\n  background: #fff;\n  padding: 0 16px;\n}\n.icd-tab {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #6C757D;\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.icd-tab i {\n  font-size: 15px;\n}\n.icd-tab:hover {\n  color: #1A1A2E;\n}\n.icd-tab.active {\n  color: #534AB7;\n  border-bottom-color: #534AB7;\n  font-weight: 500;\n}\n.icd-layout {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  background: #F8F9FA;\n  min-height: calc(100vh - 180px);\n}\n.icd-modules-panel {\n  background: #fff;\n  border-right: 1px solid #E9ECEF;\n  overflow-y: auto;\n}\n.icd-mp-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 12px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.icd-mp-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.icd-add-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #534AB7;\n  text-decoration: none;\n  padding: 4px 8px;\n  border: 1px solid #AFA9EC;\n  border-radius: 8px;\n  transition: background 0.1s;\n}\n.icd-add-btn i {\n  font-size: 13px;\n}\n.icd-add-btn:hover {\n  background: #EEF2FF;\n}\n.icd-module {\n  border-bottom: 1px solid #E9ECEF;\n}\n.icd-mod-hd {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.icd-mod-hd:hover {\n  background: #FAFBFF;\n}\n.icd-mod-hd.open {\n  background: #F5F3FF;\n}\n.icd-mod-hd.open .icd-mod-arr {\n  transform: rotate(90deg);\n}\n.icd-mod-num {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #EEEDFE;\n  color: #3C3489;\n  font-size: 10px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.icd-mod-name {\n  font-size: 12px;\n  color: #1A1A2E;\n  flex: 1;\n}\n.icd-mod-arr {\n  font-size: 13px;\n  color: #6C757D;\n  transition: transform 0.15s;\n  flex-shrink: 0;\n}\n.icd-mod-body {\n  padding: 0 12px 8px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.icd-sec-item {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 5px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #6C757D;\n  transition: all 0.12s;\n}\n.icd-sec-item:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.icd-sec-item.active {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.icd-sec-icon {\n  font-size: 14px;\n}\n.icd-sec-name {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icd-sec-badge {\n  font-size: 10px;\n  padding: 1px 6px;\n  border-radius: 20px;\n  flex-shrink: 0;\n}\n.icd-sec-badge.badge-vid {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.icd-sec-badge.badge-doc {\n  background: #E1F5EE;\n  color: #085041;\n}\n.icd-sec-badge.badge-quiz {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.icd-add-quiz-row {\n  padding: 4px 0 2px 4px;\n}\n.icd-add-quiz-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #6C757D;\n  background: none;\n  border: 1px dashed #E9ECEF;\n  border-radius: 8px;\n  padding: 3px 8px;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.icd-add-quiz-btn i {\n  font-size: 13px;\n}\n.icd-add-quiz-btn:hover {\n  border-color: #AFA9EC;\n  color: #534AB7;\n}\n.icd-empty-modules {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 32px 16px;\n  color: #6C757D;\n  font-size: 12px;\n  text-align: center;\n}\n.icd-empty-modules i {\n  font-size: 28px;\n  opacity: 0.3;\n}\n.icd-editor {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n.icd-editor-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 320px;\n  color: #6C757D;\n  font-size: 13px;\n}\n.icd-editor-empty i {\n  font-size: 40px;\n  opacity: 0.25;\n}\n.icd-editor-empty small {\n  font-size: 11px;\n  color: rgb(147.4356223176, 155.1802575107, 162.0643776824);\n}\n.icd-etb {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding: 10px 14px;\n  border-bottom: 1px solid #E9ECEF;\n  background: #fff;\n}\n.icd-etb-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.icd-etb-sub {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.icd-etb-badge {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #EEEDFE;\n  color: #3C3489;\n  white-space: nowrap;\n}\n.icd-etb-actions {\n  margin-left: auto;\n  display: flex;\n  gap: 6px;\n}\n.icd-sm-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #6C757D;\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.icd-sm-btn i {\n  font-size: 14px;\n}\n.icd-sm-btn:hover {\n  border-color: #534AB7;\n  color: #534AB7;\n}\n.icd-sm-btn.primary {\n  background: #534AB7;\n  border-color: #534AB7;\n  color: #fff;\n}\n.icd-sm-btn.primary:hover {\n  background: rgb(69.2181818182, 61.5272727273, 154.6727272727);\n}\n.icd-sm-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.icd-qeditor {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex: 1;\n}\n.icd-qsettings {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.icd-qset-title {\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 10px;\n}\n.icd-qset-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n@media (max-width: 700px) {\n  .icd-qset-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.icd-qset-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.icd-qset-label {\n  font-size: 11px;\n  color: #6C757D;\n}\n.icd-qset-inp {\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 6px 9px;\n  font-size: 12px;\n  color: #1A1A2E;\n  background: #fff;\n  outline: none;\n  transition: border-color 0.12s;\n}\n.icd-qset-inp:focus {\n  border-color: #534AB7;\n}\n.icd-questions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.icd-qcard {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.icd-qcard.expanded {\n  border-color: #AFA9EC;\n}\n.icd-qcard-hd {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid transparent;\n  transition: background 0.1s;\n}\n.icd-qcard-hd:hover {\n  background: #FAFBFF;\n}\n.icd-qcard.expanded .icd-qcard-hd {\n  border-bottom-color: #E9ECEF;\n}\n.icd-qnum {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #EEEDFE;\n  color: #3C3489;\n  font-size: 11px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.icd-qtext {\n  font-size: 13px;\n  color: #1A1A2E;\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icd-qtype-badge {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #F1EFE8;\n  color: #444;\n  white-space: nowrap;\n}\n.icd-qpts {\n  font-size: 11px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.icd-qcard-actions {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.icd-qbtn {\n  width: 26px;\n  height: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #6C757D;\n  cursor: pointer;\n  transition: all 0.1s;\n}\n.icd-qbtn:hover {\n  border-color: #534AB7;\n  color: #534AB7;\n}\n.icd-qbtn.danger:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.icd-qcard-body {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.icd-qprompt {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 7px 10px;\n  font-size: 13px;\n  color: #1A1A2E;\n  background: #fff;\n  outline: none;\n}\n.icd-qprompt:focus {\n  border-color: #534AB7;\n}\n.icd-pts-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.icd-pts-label {\n  font-size: 11px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.icd-pts-inp {\n  width: 64px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 4px 8px;\n  font-size: 12px;\n  text-align: center;\n  outline: none;\n}\n.icd-pts-inp:focus {\n  border-color: #534AB7;\n}\n.icd-options {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.icd-opt-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.icd-opt-check {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 1px solid #E9ECEF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  flex-shrink: 0;\n  cursor: pointer;\n  transition: all 0.1s;\n}\n.icd-opt-check.correct {\n  background: #EAF3DE;\n  border-color: #97C459;\n  color: #27500A;\n}\n.icd-opt-inp {\n  flex: 1;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 5px 9px;\n  font-size: 12px;\n  color: #1A1A2E;\n  background: #fff;\n  outline: none;\n}\n.icd-opt-inp:focus {\n  border-color: #534AB7;\n}\n.icd-opt-inp.correct {\n  border-color: #97C459;\n  background: #F5FAF0;\n}\n.icd-opt-del {\n  font-size: 14px;\n  color: #6C757D;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.icd-opt-del:hover {\n  color: #DC3545;\n}\n.icd-add-opt {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #6C757D;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.icd-add-opt i {\n  font-size: 14px;\n}\n.icd-add-opt:hover {\n  color: #1A1A2E;\n}\n.icd-text-hint {\n  font-size: 12px;\n  color: #6C757D;\n  font-style: italic;\n  background: #F8F9FA;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\n.icd-expl-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-top: 6px;\n  border-top: 1px solid #E9ECEF;\n}\n.icd-expl-label {\n  font-size: 11px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.icd-expl-inp {\n  flex: 1;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 5px 9px;\n  font-size: 12px;\n  color: #6C757D;\n  background: #fff;\n  outline: none;\n}\n.icd-expl-inp:focus {\n  border-color: #534AB7;\n}\n.icd-add-bar {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding: 2px 0;\n}\n.icd-aq-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border: 1px dashed #E9ECEF;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #6C757D;\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.icd-aq-btn i {\n  font-size: 15px;\n}\n.icd-aq-btn:hover {\n  border-color: #AFA9EC;\n  color: #534AB7;\n}\n.icd-stats {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.icd-stats-toolbar select {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 12px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  min-width: 260px;\n}\n.icd-stats-toolbar select:focus {\n  border-color: #534AB7;\n}\n.icd-stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n}\n@media (max-width: 800px) {\n  .icd-stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.icd-stat-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.icd-sc-label {\n  font-size: 11px;\n  color: #6C757D;\n  margin-bottom: 4px;\n}\n.icd-sc-val {\n  font-size: 22px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.icd-sc-sub {\n  font-size: 11px;\n  margin-top: 3px;\n}\n.icd-sc-sub.up {\n  color: #3B6D11;\n}\n.icd-sc-sub.down {\n  color: #A32D2D;\n}\n.icd-sc-sub.neutral {\n  color: #6C757D;\n}\n.icd-dist-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 14px;\n}\n.icd-dist-title {\n  font-size: 12px;\n  font-weight: 500;\n  color: #6C757D;\n  margin-bottom: 12px;\n}\n.icd-dist-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 7px;\n}\n.icd-dist-row:last-child {\n  margin-bottom: 0;\n}\n.icd-dist-label {\n  font-size: 12px;\n  color: #6C757D;\n  width: 64px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.icd-dist-bar {\n  flex: 1;\n  height: 12px;\n  background: #F0F0F0;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.icd-dist-fill {\n  height: 100%;\n  border-radius: 6px;\n  transition: width 0.3s;\n}\n.fill-green {\n  background: #97C459;\n}\n.fill-amber {\n  background: #EF9F27;\n}\n.fill-red {\n  background: #F09595;\n}\n.icd-dist-count {\n  font-size: 12px;\n  font-weight: 500;\n  width: 90px;\n}\n.icd-dist-count.tc-green {\n  color: #3B6D11;\n}\n.icd-dist-count.tc-amber {\n  color: #854F0B;\n}\n.icd-dist-count.tc-red {\n  color: #A32D2D;\n}\n.icd-qa-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 14px;\n}\n.icd-qa-title {\n  font-size: 12px;\n  font-weight: 500;\n  color: #6C757D;\n  margin-bottom: 10px;\n}\n.icd-qa-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 0;\n  border-bottom: 1px solid #E9ECEF;\n}\n.icd-qa-row:last-child {\n  border-bottom: none;\n}\n.icd-qa-num {\n  font-size: 11px;\n  color: #6C757D;\n  width: 24px;\n  flex-shrink: 0;\n}\n.icd-qa-text {\n  font-size: 12px;\n  color: #1A1A2E;\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.icd-qa-bar {\n  width: 80px;\n  height: 6px;\n  background: #F0F0F0;\n  border-radius: 4px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.icd-qa-fill {\n  height: 100%;\n  border-radius: 4px;\n}\n.fill-g {\n  background: #639922;\n}\n.fill-a {\n  background: #BA7517;\n}\n.fill-r {\n  background: #E24B4A;\n}\n.icd-qa-pct {\n  font-size: 12px;\n  font-weight: 500;\n  width: 36px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.icd-qa-pct.pct-g {\n  color: #3B6D11;\n}\n.icd-qa-pct.pct-a {\n  color: #854F0B;\n}\n.icd-qa-pct.pct-r {\n  color: #A32D2D;\n}\n.icd-info {\n  padding: 16px;\n}\n.icd-info-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 14px;\n}\n@media (max-width: 700px) {\n  .icd-info-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.icd-info-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 14px 16px;\n}\n.icd-info-h {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 10px;\n}\n.icd-info-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.icd-info-table td {\n  padding: 5px 0;\n  vertical-align: top;\n}\n.icd-info-table td:first-child {\n  color: #6C757D;\n  width: 130px;\n  padding-right: 12px;\n}\n.icd-info-table td.fw {\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.icd-statut {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 6px;\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.icd-statut.published {\n  background: #ECFDF5;\n  color: #059669;\n}\n.icd-edit-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 10px;\n  font-size: 12px;\n  color: #534AB7;\n  text-decoration: none;\n}\n.icd-edit-link i {\n  font-size: 14px;\n}\n.icd-edit-link:hover {\n  text-decoration: underline;\n}\n.icd-desc {\n  font-size: 13px;\n  color: #6C757D;\n  line-height: 1.6;\n}\n.mt-2 {\n  margin-top: 8px;\n}\n.mt-3 {\n  margin-top: 12px;\n}\n.ms-3 {\n  margin-left: 12px;\n}\n.me-1 {\n  margin-right: 4px;\n}\n.icd-section-preview {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 22px;\n  background: #fff;\n  flex: 1;\n}\n.icd-sp-head {\n  padding-bottom: 16px;\n  border-bottom: 1px solid #E9ECEF;\n  margin-bottom: 18px;\n}\n.icd-sp-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 3px 10px;\n  border-radius: 20px;\n  margin-bottom: 10px;\n}\n.icd-sp-badge i {\n  font-size: 13px;\n}\n.icd-sp-badge.badge-vid {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.icd-sp-badge.badge-doc {\n  background: #E1F5EE;\n  color: #085041;\n}\n.icd-sp-badge.badge-res {\n  background: #FFF3E0;\n  color: #7C4600;\n}\n.icd-sp-badge:not(.badge-vid):not(.badge-doc):not(.badge-res) {\n  background: #EEF2FF;\n  color: #534AB7;\n}\n.icd-sp-title {\n  font-size: 17px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 10px;\n  line-height: 1.35;\n}\n.icd-sp-meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-size: 12px;\n  color: #6C757D;\n}\n.icd-sp-meta i {\n  font-size: 13px;\n  vertical-align: middle;\n}\n.icd-sp-body {\n  display: flex;\n  flex-direction: column;\n}\n.icd-sp-content p {\n  font-size: 13px;\n  color: #6C757D;\n  line-height: 1.65;\n  margin: 0;\n  white-space: pre-line;\n}\n.icd-sp-section-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin: 0 0 6px;\n}\n.icd-sp-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 13px;\n  color: #534AB7;\n  text-decoration: none;\n  padding: 7px 14px;\n  border: 1px solid #AFA9EC;\n  border-radius: 8px;\n  transition: all 0.12s;\n}\n.icd-sp-link i {\n  font-size: 14px;\n}\n.icd-sp-link:hover {\n  background: #EEF2FF;\n  border-color: #534AB7;\n}\n/*# sourceMappingURL=instructor-course-details.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: FormationService }, { type: AuthService }, { type: QuizService }, { type: QuestionQuizService }, { type: QuizResultsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorCourseDetailsComponent, { className: "InstructorCourseDetailsComponent", filePath: "app/features/courses/instructor-course-details/instructor-course-details.component.ts", lineNumber: 21 });
})();
export {
  InstructorCourseDetailsComponent
};
//# sourceMappingURL=chunk-3ESMFDMF.js.map
