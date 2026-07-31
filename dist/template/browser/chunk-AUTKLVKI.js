import {
  SondageService
} from "./chunk-NYC46I4P.js";
import "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ZGFJXD53.js";
import {
  ActivatedRoute,
  Router
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
} from "./chunk-BSBCM3BI.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/student-sondage/student-sondage.component.ts
function StudentSondageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement du sondage\u2026");
    \u0275\u0275elementEnd()();
  }
}
function StudentSondageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function StudentSondageComponent_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(6, "i", 10);
    \u0275\u0275text(7, " Retour ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function StudentSondageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 14);
    \u0275\u0275text(4, "Merci !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 9);
    \u0275\u0275listener("click", function StudentSondageComponent_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(8, "i", 10);
    \u0275\u0275text(9, " Retour aux sondages ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.submitSuccess);
  }
}
function StudentSondageComponent_ng_container_3_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sondage.introduction);
  }
}
function StudentSondageComponent_ng_container_3_div_13_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function StudentSondageComponent_ng_container_3_div_13_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentQuestion.aide, " ");
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function StudentSondageComponent_ng_container_3_div_13_ng_container_7_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.reponses[ctx_r1.currentQuestion.id], $event) || (ctx_r1.reponses[ctx_r1.currentQuestion.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r1.currentQuestion.type);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reponses[ctx_r1.currentQuestion.id]);
    \u0275\u0275property("placeholder", ctx_r1.currentQuestion.placeholder || "Votre r\xE9ponse\u2026");
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "textarea", 41);
    \u0275\u0275twoWayListener("ngModelChange", function StudentSondageComponent_ng_container_3_div_13_ng_container_8_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.reponses[ctx_r1.currentQuestion.id], $event) || (ctx_r1.reponses[ctx_r1.currentQuestion.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reponses[ctx_r1.currentQuestion.id]);
    \u0275\u0275property("placeholder", ctx_r1.currentQuestion.placeholder || "Votre r\xE9ponse\u2026");
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function StudentSondageComponent_ng_container_3_div_13_ng_container_9_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.reponses[ctx_r1.currentQuestion.id], $event) || (ctx_r1.reponses[ctx_r1.currentQuestion.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reponses[ctx_r1.currentQuestion.id]);
    \u0275\u0275property("placeholder", ctx_r1.currentQuestion.placeholder || "");
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function StudentSondageComponent_ng_container_3_div_13_ng_container_10_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.reponses[ctx_r1.currentQuestion.id], $event) || (ctx_r1.reponses[ctx_r1.currentQuestion.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reponses[ctx_r1.currentQuestion.id]);
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_11_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 46)(1, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function StudentSondageComponent_ng_container_3_div_13_ng_container_11_label_2_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.reponses[ctx_r1.currentQuestion.id], $event) || (ctx_r1.reponses[ctx_r1.currentQuestion.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 48);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r1.reponses[ctx_r1.currentQuestion.id] === opt_r10);
    \u0275\u0275advance();
    \u0275\u0275property("name", "q" + ctx_r1.currentQuestion.id)("value", opt_r10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reponses[ctx_r1.currentQuestion.id]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r10);
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275template(2, StudentSondageComponent_ng_container_3_div_13_ng_container_11_label_2_Template, 5, 6, "label", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.currentQuestion.options);
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_12_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    \u0275\u0275property("value", opt_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r12);
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function StudentSondageComponent_ng_container_3_div_13_ng_container_12_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.reponses[ctx_r1.currentQuestion.id], $event) || (ctx_r1.reponses[ctx_r1.currentQuestion.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "option", 50);
    \u0275\u0275text(3, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StudentSondageComponent_ng_container_3_div_13_ng_container_12_option_4_Template, 2, 2, "option", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reponses[ctx_r1.currentQuestion.id]);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.currentQuestion.options);
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_13_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 46)(1, "input", 53);
    \u0275\u0275listener("change", function StudentSondageComponent_ng_container_3_div_13_ng_container_13_label_2_Template_input_change_1_listener() {
      const opt_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleCheckbox(ctx_r1.currentQuestion.id, opt_r14));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 54);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r1.isChecked(ctx_r1.currentQuestion.id, opt_r14));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isChecked(ctx_r1.currentQuestion.id, opt_r14));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r14);
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275template(2, StudentSondageComponent_ng_container_3_div_13_ng_container_13_label_2_Template, 5, 4, "label", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.currentQuestion.options);
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_14_button_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-star", ctx_r1.reponses[ctx_r1.currentQuestion.id] >= v_r16)("isax-star-1", !(ctx_r1.reponses[ctx_r1.currentQuestion.id] >= v_r16));
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_14_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r16);
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_14_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function StudentSondageComponent_ng_container_3_div_13_ng_container_14_button_2_Template_button_click_0_listener() {
      const v_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.reponses[ctx_r1.currentQuestion.id] = v_r16);
    });
    \u0275\u0275template(1, StudentSondageComponent_ng_container_3_div_13_ng_container_14_button_2_span_1_Template, 2, 4, "span", 3)(2, StudentSondageComponent_ng_container_3_div_13_ng_container_14_button_2_span_2_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r1.reponses[ctx_r1.currentQuestion.id] == v_r16);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion.type === "notation");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion.type !== "notation");
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.currentQuestion.valeur_min ?? 1, " \u2014 Min");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.currentQuestion.valeur_max ?? 10, " \u2014 Max");
  }
}
function StudentSondageComponent_ng_container_3_div_13_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 55);
    \u0275\u0275template(2, StudentSondageComponent_ng_container_3_div_13_ng_container_14_button_2_Template, 3, 4, "button", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StudentSondageComponent_ng_container_3_div_13_ng_container_14_div_3_Template, 5, 2, "div", 57);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.echelleValues(ctx_r1.currentQuestion));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion.type === "echelle");
  }
}
function StudentSondageComponent_ng_container_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 34);
    \u0275\u0275text(4);
    \u0275\u0275template(5, StudentSondageComponent_ng_container_3_div_13_span_5_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StudentSondageComponent_ng_container_3_div_13_p_6_Template, 3, 1, "p", 36)(7, StudentSondageComponent_ng_container_3_div_13_ng_container_7_Template, 2, 3, "ng-container", 3)(8, StudentSondageComponent_ng_container_3_div_13_ng_container_8_Template, 2, 2, "ng-container", 3)(9, StudentSondageComponent_ng_container_3_div_13_ng_container_9_Template, 2, 2, "ng-container", 3)(10, StudentSondageComponent_ng_container_3_div_13_ng_container_10_Template, 2, 1, "ng-container", 3)(11, StudentSondageComponent_ng_container_3_div_13_ng_container_11_Template, 3, 1, "ng-container", 3)(12, StudentSondageComponent_ng_container_3_div_13_ng_container_12_Template, 5, 2, "ng-container", 3)(13, StudentSondageComponent_ng_container_3_div_13_ng_container_13_Template, 3, 1, "ng-container", 3)(14, StudentSondageComponent_ng_container_3_div_13_ng_container_14_Template, 4, 2, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Question ", ctx_r1.currentStep + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentQuestion.question, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion.est_obligatoire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion.aide);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion.type === "text" || ctx_r1.currentQuestion.type === "email");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion.type === "textarea");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion.type === "numero");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion.type === "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion.type === "radio");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion.type === "checkbox");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEchelle(ctx_r1.currentQuestion.type));
  }
}
function StudentSondageComponent_ng_container_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitError, " ");
  }
}
function StudentSondageComponent_ng_container_3_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function StudentSondageComponent_ng_container_3_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.suivant());
    });
    \u0275\u0275text(1, " Suivant ");
    \u0275\u0275element(2, "i", 63);
    \u0275\u0275elementEnd();
  }
}
function StudentSondageComponent_ng_container_3_button_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2, " Soumettre");
    \u0275\u0275elementEnd();
  }
}
function StudentSondageComponent_ng_container_3_button_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 65);
    \u0275\u0275text(2, " Envoi\u2026");
    \u0275\u0275elementEnd();
  }
}
function StudentSondageComponent_ng_container_3_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function StudentSondageComponent_ng_container_3_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.soumettre());
    });
    \u0275\u0275template(1, StudentSondageComponent_ng_container_3_button_20_span_1_Template, 3, 0, "span", 3)(2, StudentSondageComponent_ng_container_3_button_20_span_2_Template, 3, 0, "span", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitting);
  }
}
function StudentSondageComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16)(2, "button", 17);
    \u0275\u0275listener("click", function StudentSondageComponent_ng_container_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(3, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "h5", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StudentSondageComponent_ng_container_3_p_7_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "div", 22);
    \u0275\u0275element(10, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, StudentSondageComponent_ng_container_3_div_13_Template, 15, 12, "div", 25)(14, StudentSondageComponent_ng_container_3_div_14_Template, 3, 1, "div", 26);
    \u0275\u0275elementStart(15, "div", 27)(16, "button", 28);
    \u0275\u0275listener("click", function StudentSondageComponent_ng_container_3_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.precedent());
    });
    \u0275\u0275element(17, "i", 10);
    \u0275\u0275text(18, " Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, StudentSondageComponent_ng_container_3_button_19_Template, 3, 0, "button", 29)(20, StudentSondageComponent_ng_container_3_button_20_Template, 3, 3, "button", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.sondage.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sondage.introduction);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.progress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.currentStep + 1, " / ", ctx_r1.questions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentStep === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isLast);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLast);
  }
}
var StudentSondageComponent = class _StudentSondageComponent {
  route;
  router;
  sondageService;
  sondage = null;
  loading = true;
  error = "";
  submitted = false;
  submitting = false;
  submitError = "";
  submitSuccess = "";
  currentStep = 0;
  reponses = {};
  constructor(route, router, sondageService) {
    this.route = route;
    this.router = router;
    this.sondageService = sondageService;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.error = "Sondage introuvable";
      this.loading = false;
      return;
    }
    this.sondageService.getSondage(id).subscribe({
      next: (res) => {
        this.sondage = res.sondage;
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger le sondage.";
        this.loading = false;
      }
    });
  }
  get questions() {
    return this.sondage?.questions ?? [];
  }
  get currentQuestion() {
    return this.questions[this.currentStep] ?? null;
  }
  get isLast() {
    return this.currentStep === this.questions.length - 1;
  }
  get progress() {
    return this.questions.length ? Math.round((this.currentStep + 1) / this.questions.length * 100) : 0;
  }
  suivant() {
    if (this.currentStep < this.questions.length - 1)
      this.currentStep++;
  }
  precedent() {
    if (this.currentStep > 0)
      this.currentStep--;
  }
  toggleCheckbox(qId, val) {
    const arr = this.reponses[qId] ?? [];
    const idx = arr.indexOf(val);
    if (idx === -1)
      arr.push(val);
    else
      arr.splice(idx, 1);
    this.reponses[qId] = [...arr];
  }
  isChecked(qId, val) {
    return (this.reponses[qId] ?? []).includes(val);
  }
  isEchelle(type) {
    return ["echelle", "notation"].includes(type);
  }
  echelleValues(q) {
    const min = q.valeur_min ?? 1;
    const max = q.valeur_max ?? (q.type === "notation" ? 5 : 10);
    return Array.from({ length: max - min + 1 }, (_, i) => min + i);
  }
  soumettre() {
    if (!this.sondage)
      return;
    this.submitting = true;
    this.submitError = "";
    const reponses = Object.entries(this.reponses).map(([qId, val]) => {
      const q = this.questions.find((q2) => q2.id === Number(qId));
      const isNum = q && ["echelle", "notation", "numero"].includes(q.type);
      const isMulti = q && q.type === "checkbox";
      return {
        question_id: Number(qId),
        reponse: !isMulti && !isNum ? String(val ?? "") : void 0,
        reponse_multiple: isMulti ? val : void 0,
        reponse_numerique: isNum ? Number(val) : void 0
      };
    });
    this.sondageService.respondSondage(this.sondage.id, reponses).subscribe({
      next: (res) => {
        this.submitting = false;
        this.submitSuccess = res.message ?? "Merci pour votre r\xE9ponse !";
        this.submitted = true;
      },
      error: (err) => {
        this.submitting = false;
        this.submitError = err?.error?.message ?? "Une erreur est survenue.";
      }
    });
  }
  goBack() {
    this.router.navigate(["/student/student-mes-sondages"]);
  }
  static \u0275fac = function StudentSondageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentSondageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SondageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentSondageComponent, selectors: [["app-student-sondage"]], decls: 4, vars: 4, consts: [["class", "ss-loader", 4, "ngIf"], ["class", "ss-error-wrap", 4, "ngIf"], ["class", "ss-success-screen", 4, "ngIf"], [4, "ngIf"], [1, "ss-loader"], [1, "ss-spinner"], [1, "ss-error-wrap"], [1, "ss-error-card"], [1, "isax", "isax-warning-2"], [1, "ss-btn", "ss-btn--ghost", 3, "click"], [1, "isax", "isax-arrow-left-2"], [1, "ss-success-screen"], [1, "ss-success-icon"], [1, "isax", "isax-tick-circle"], [1, "ss-success-title"], [1, "ss-success-msg"], [1, "ss-rep-header"], [1, "ss-back-btn", 3, "click"], [1, "ss-rep-title-wrap"], [1, "ss-rep-title"], ["class", "ss-rep-sub", 4, "ngIf"], [1, "ss-progress-wrap"], [1, "ss-progress-bar"], [1, "ss-progress-fill"], [1, "ss-progress-label"], ["class", "ss-question-card", 4, "ngIf"], ["class", "ss-alert ss-alert--danger", 4, "ngIf"], [1, "ss-nav"], [1, "ss-nav-btn", "ss-nav-btn--ghost", 3, "click", "disabled"], ["class", "ss-nav-btn ss-nav-btn--primary", 3, "click", 4, "ngIf"], ["class", "ss-nav-btn ss-nav-btn--success", 3, "disabled", "click", 4, "ngIf"], [1, "ss-rep-sub"], [1, "ss-question-card"], [1, "ss-q-num"], [1, "ss-q-text"], ["class", "ss-required", 4, "ngIf"], ["class", "ss-q-aide", 4, "ngIf"], [1, "ss-required"], [1, "ss-q-aide"], [1, "isax", "isax-info-circle"], [1, "ss-input", 3, "ngModelChange", "type", "ngModel", "placeholder"], ["rows", "4", 1, "ss-input", "ss-textarea", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "number", 1, "ss-input", "ss-input--sm", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "date", 1, "ss-input", "ss-input--sm", 3, "ngModelChange", "ngModel"], [1, "ss-options"], ["class", "ss-option", 3, "selected", 4, "ngFor", "ngForOf"], [1, "ss-option"], ["type", "radio", 1, "ss-option-input", 3, "ngModelChange", "name", "value", "ngModel"], [1, "ss-option-dot"], [1, "ss-input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "checkbox", 1, "ss-option-input", 3, "change", "checked"], [1, "ss-option-check"], [1, "ss-scale"], ["class", "ss-scale-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "ss-scale-labels", 4, "ngIf"], [1, "ss-scale-btn", 3, "click"], [1, "isax"], [1, "ss-scale-labels"], [1, "ss-alert", "ss-alert--danger"], [1, "ss-nav-btn", "ss-nav-btn--primary", 3, "click"], [1, "isax", "isax-arrow-right-3"], [1, "ss-nav-btn", "ss-nav-btn--success", 3, "click", "disabled"], [1, "ss-mini-spinner"]], template: function StudentSondageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StudentSondageComponent_div_0_Template, 4, 0, "div", 0)(1, StudentSondageComponent_div_1_Template, 8, 1, "div", 1)(2, StudentSondageComponent_div_2_Template, 10, 1, "div", 2)(3, StudentSondageComponent_ng_container_3_Template, 21, 11, "ng-container", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.submitted);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && !ctx.submitted && ctx.sondage);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.ss-loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  justify-content: center;\n  padding: 60px 0;\n  color: #6b7280;\n}\n.ss-spinner[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #1D6EBF;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ss-error-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40vh;\n  padding: 2rem;\n}\n.ss-error-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  max-width: 480px;\n  width: 100%;\n}\n.ss-error-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #DC2626;\n  display: block;\n  margin-bottom: 1rem;\n}\n.ss-error-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #374151;\n  margin-bottom: 1.5rem;\n}\n.ss-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.ss-alert--danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #DC2626;\n  border: 1px solid #fecaca;\n}\n.ss-success-screen[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n}\n.ss-success-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #059669;\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n@keyframes _ngcontent-%COMP%_pop {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.ss-success-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  margin: 0 0 10px;\n  color: #111827;\n}\n.ss-success-msg[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #6b7280;\n  margin: 0 0 28px;\n}\n.ss-rep-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.ss-back-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.ss-back-btn[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.ss-rep-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: #111827;\n}\n.ss-rep-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0;\n}\n.ss-progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 28px;\n}\n.ss-progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #e5e7eb;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ss-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #1D6EBF,\n      #60a5fa);\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.ss-progress-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.ss-question-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  padding: 32px 28px;\n  margin-bottom: 24px;\n}\n.ss-q-num[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1D6EBF;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 10px;\n}\n.ss-q-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n  line-height: 1.5;\n}\n.ss-q-aide[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 0 20px;\n}\n.ss-required[_ngcontent-%COMP%] {\n  color: #DC2626;\n  margin-left: 2px;\n}\n.ss-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ss-input[_ngcontent-%COMP%]:focus {\n  border-color: #1D6EBF;\n}\n.ss-input--sm[_ngcontent-%COMP%] {\n  max-width: 220px;\n}\n.ss-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  font-family: inherit;\n}\n.ss-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ss-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 16px;\n  border-radius: 10px;\n  border: 1.5px solid #e5e7eb;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n  font-size: 14px;\n  color: #374151;\n}\n.ss-option.selected[_ngcontent-%COMP%] {\n  border-color: #1D6EBF;\n  background: #eff6ff;\n  color: #1D6EBF;\n  font-weight: 600;\n}\n.ss-option[_ngcontent-%COMP%]:hover:not(.selected) {\n  border-color: #93c5fd;\n  background: #f8faff;\n}\n.ss-option-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.ss-option-dot[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid #d1d5db;\n  flex-shrink: 0;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ss-option.selected[_ngcontent-%COMP%]   .ss-option-dot[_ngcontent-%COMP%] {\n  border-color: #1D6EBF;\n  background: #1D6EBF;\n}\n.ss-option-check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 5px;\n  border: 2px solid #d1d5db;\n  flex-shrink: 0;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ss-option.selected[_ngcontent-%COMP%]   .ss-option-check[_ngcontent-%COMP%] {\n  border-color: #1D6EBF;\n  background: #1D6EBF;\n}\n.ss-scale[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n.ss-scale-btn[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n  color: #374151;\n}\n.ss-scale-btn.selected[_ngcontent-%COMP%] {\n  background: #1D6EBF;\n  border-color: #1D6EBF;\n  color: #fff;\n}\n.ss-scale-btn[_ngcontent-%COMP%]:hover:not(.selected) {\n  border-color: #1D6EBF;\n  color: #1D6EBF;\n}\n.ss-scale-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #dee2e6;\n  transition: color 0.2s;\n}\n.ss-scale-btn.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #F59E0B;\n}\n.ss-scale-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ss-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.ss-nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 22px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: opacity 0.2s;\n}\n.ss-nav-btn--ghost[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n.ss-nav-btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.ss-nav-btn--ghost[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ss-nav-btn--primary[_ngcontent-%COMP%] {\n  background: #1D6EBF;\n  color: #fff;\n  margin-left: auto;\n}\n.ss-nav-btn--primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.ss-nav-btn--success[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n  margin-left: auto;\n}\n.ss-nav-btn--success[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.ss-nav-btn--success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.ss-mini-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n.ss-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 22px;\n  border-radius: 10px;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ss-btn--ghost[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n.ss-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n/*# sourceMappingURL=student-sondage.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentSondageComponent, [{
    type: Component,
    args: [{ selector: "app-student-sondage", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Loading -->
<div *ngIf="loading" class="ss-loader">
  <div class="ss-spinner"></div>
  <span>Chargement du sondage\u2026</span>
</div>

<!-- Error -->
<div *ngIf="!loading && error" class="ss-error-wrap">
  <div class="ss-error-card">
    <i class="isax isax-warning-2"></i>
    <p>{{ error }}</p>
    <button class="ss-btn ss-btn--ghost" (click)="goBack()">
      <i class="isax isax-arrow-left-2"></i> Retour
    </button>
  </div>
</div>

<!-- Submitted -->
<div *ngIf="!loading && submitted" class="ss-success-screen">
  <div class="ss-success-icon"><i class="isax isax-tick-circle"></i></div>
  <h4 class="ss-success-title">Merci !</h4>
  <p class="ss-success-msg">{{ submitSuccess }}</p>
  <button class="ss-btn ss-btn--ghost" (click)="goBack()">
    <i class="isax isax-arrow-left-2"></i> Retour aux sondages
  </button>
</div>

<!-- Sondage -->
<ng-container *ngIf="!loading && !error && !submitted && sondage">

  <!-- Header -->
  <div class="ss-rep-header">
    <button class="ss-back-btn" (click)="goBack()">
      <i class="isax isax-arrow-left-2"></i>
    </button>
    <div class="ss-rep-title-wrap">
      <h5 class="ss-rep-title">{{ sondage.titre }}</h5>
      <p class="ss-rep-sub" *ngIf="sondage.introduction">{{ sondage.introduction }}</p>
    </div>
  </div>

  <!-- Progress bar -->
  <div class="ss-progress-wrap">
    <div class="ss-progress-bar">
      <div class="ss-progress-fill" [style.width.%]="progress"></div>
    </div>
    <span class="ss-progress-label">{{ currentStep + 1 }} / {{ questions.length }}</span>
  </div>

  <!-- Question card -->
  <div class="ss-question-card" *ngIf="currentQuestion">
    <div class="ss-q-num">Question {{ currentStep + 1 }}</div>
    <h5 class="ss-q-text">
      {{ currentQuestion.question }}
      <span *ngIf="currentQuestion.est_obligatoire" class="ss-required">*</span>
    </h5>
    <p *ngIf="currentQuestion.aide" class="ss-q-aide">
      <i class="isax isax-info-circle"></i> {{ currentQuestion.aide }}
    </p>

    <!-- TEXT / EMAIL -->
    <ng-container *ngIf="currentQuestion.type === 'text' || currentQuestion.type === 'email'">
      <input [type]="currentQuestion.type" class="ss-input"
             [(ngModel)]="reponses[currentQuestion.id!]"
             [placeholder]="currentQuestion.placeholder || 'Votre r\xE9ponse\u2026'">
    </ng-container>

    <!-- TEXTAREA -->
    <ng-container *ngIf="currentQuestion.type === 'textarea'">
      <textarea class="ss-input ss-textarea" rows="4"
                [(ngModel)]="reponses[currentQuestion.id!]"
                [placeholder]="currentQuestion.placeholder || 'Votre r\xE9ponse\u2026'"></textarea>
    </ng-container>

    <!-- NUMBER -->
    <ng-container *ngIf="currentQuestion.type === 'numero'">
      <input type="number" class="ss-input ss-input--sm"
             [(ngModel)]="reponses[currentQuestion.id!]"
             [placeholder]="currentQuestion.placeholder || ''">
    </ng-container>

    <!-- DATE -->
    <ng-container *ngIf="currentQuestion.type === 'date'">
      <input type="date" class="ss-input ss-input--sm"
             [(ngModel)]="reponses[currentQuestion.id!]">
    </ng-container>

    <!-- RADIO -->
    <ng-container *ngIf="currentQuestion.type === 'radio'">
      <div class="ss-options">
        <label *ngFor="let opt of currentQuestion.options" class="ss-option"
               [class.selected]="reponses[currentQuestion.id!] === opt">
          <input type="radio" class="ss-option-input"
                 [name]="'q' + currentQuestion.id"
                 [value]="opt"
                 [(ngModel)]="reponses[currentQuestion.id!]">
          <span class="ss-option-dot"></span>
          <span>{{ opt }}</span>
        </label>
      </div>
    </ng-container>

    <!-- SELECT -->
    <ng-container *ngIf="currentQuestion.type === 'select'">
      <select class="ss-input" [(ngModel)]="reponses[currentQuestion.id!]">
        <option value="">\u2014 Choisir \u2014</option>
        <option *ngFor="let opt of currentQuestion.options" [value]="opt">{{ opt }}</option>
      </select>
    </ng-container>

    <!-- CHECKBOX -->
    <ng-container *ngIf="currentQuestion.type === 'checkbox'">
      <div class="ss-options">
        <label *ngFor="let opt of currentQuestion.options" class="ss-option"
               [class.selected]="isChecked(currentQuestion.id!, opt)">
          <input type="checkbox" class="ss-option-input"
                 [checked]="isChecked(currentQuestion.id!, opt)"
                 (change)="toggleCheckbox(currentQuestion.id!, opt)">
          <span class="ss-option-check"></span>
          <span>{{ opt }}</span>
        </label>
      </div>
    </ng-container>

    <!-- \xC9CHELLE / NOTATION -->
    <ng-container *ngIf="isEchelle(currentQuestion.type)">
      <div class="ss-scale">
        <button *ngFor="let v of echelleValues(currentQuestion)"
                class="ss-scale-btn"
                [class.selected]="reponses[currentQuestion.id!] == v"
                (click)="reponses[currentQuestion.id!] = v">
          <span *ngIf="currentQuestion.type === 'notation'">
            <i class="isax" [class.isax-star]="reponses[currentQuestion.id!] >= v" [class.isax-star-1]="!(reponses[currentQuestion.id!] >= v)"></i>
          </span>
          <span *ngIf="currentQuestion.type !== 'notation'">{{ v }}</span>
        </button>
      </div>
      <div class="ss-scale-labels" *ngIf="currentQuestion.type === 'echelle'">
        <span>{{ currentQuestion.valeur_min ?? 1 }} \u2014 Min</span>
        <span>{{ currentQuestion.valeur_max ?? 10 }} \u2014 Max</span>
      </div>
    </ng-container>
  </div>

  <!-- Submit error -->
  <div *ngIf="submitError" class="ss-alert ss-alert--danger">
    <i class="isax isax-warning-2"></i> {{ submitError }}
  </div>

  <!-- Navigation -->
  <div class="ss-nav">
    <button class="ss-nav-btn ss-nav-btn--ghost" (click)="precedent()" [disabled]="currentStep === 0">
      <i class="isax isax-arrow-left-2"></i> Pr\xE9c\xE9dent
    </button>
    <button *ngIf="!isLast" class="ss-nav-btn ss-nav-btn--primary" (click)="suivant()">
      Suivant <i class="isax isax-arrow-right-3"></i>
    </button>
    <button *ngIf="isLast" class="ss-nav-btn ss-nav-btn--success" [disabled]="submitting" (click)="soumettre()">
      <span *ngIf="!submitting"><i class="isax isax-tick-circle"></i> Soumettre</span>
      <span *ngIf="submitting"><span class="ss-mini-spinner"></span> Envoi\u2026</span>
    </button>
  </div>

</ng-container>
`, styles: ["/* src/app/features/student/student-sondage/student-sondage.component.scss */\n.ss-loader {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  justify-content: center;\n  padding: 60px 0;\n  color: #6b7280;\n}\n.ss-spinner {\n  width: 28px;\n  height: 28px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #1D6EBF;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ss-error-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40vh;\n  padding: 2rem;\n}\n.ss-error-card {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  max-width: 480px;\n  width: 100%;\n}\n.ss-error-card i {\n  font-size: 3rem;\n  color: #DC2626;\n  display: block;\n  margin-bottom: 1rem;\n}\n.ss-error-card p {\n  color: #374151;\n  margin-bottom: 1.5rem;\n}\n.ss-alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.ss-alert--danger {\n  background: #fef2f2;\n  color: #DC2626;\n  border: 1px solid #fecaca;\n}\n.ss-success-screen {\n  text-align: center;\n  padding: 80px 20px;\n}\n.ss-success-icon {\n  font-size: 64px;\n  color: #059669;\n  margin-bottom: 20px;\n  animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n@keyframes pop {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.ss-success-title {\n  font-size: 26px;\n  font-weight: 700;\n  margin: 0 0 10px;\n  color: #111827;\n}\n.ss-success-msg {\n  font-size: 15px;\n  color: #6b7280;\n  margin: 0 0 28px;\n}\n.ss-rep-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.ss-back-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s;\n}\n.ss-back-btn:hover {\n  background: #f9fafb;\n}\n.ss-rep-title {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: #111827;\n}\n.ss-rep-sub {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0;\n}\n.ss-progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 28px;\n}\n.ss-progress-bar {\n  flex: 1;\n  height: 8px;\n  background: #e5e7eb;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ss-progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #1D6EBF,\n      #60a5fa);\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.ss-progress-label {\n  font-size: 13px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.ss-question-card {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  padding: 32px 28px;\n  margin-bottom: 24px;\n}\n.ss-q-num {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1D6EBF;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 10px;\n}\n.ss-q-text {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n  line-height: 1.5;\n}\n.ss-q-aide {\n  font-size: 13px;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 0 20px;\n}\n.ss-required {\n  color: #DC2626;\n  margin-left: 2px;\n}\n.ss-input {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ss-input:focus {\n  border-color: #1D6EBF;\n}\n.ss-input--sm {\n  max-width: 220px;\n}\n.ss-textarea {\n  resize: vertical;\n  min-height: 100px;\n  font-family: inherit;\n}\n.ss-options {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ss-option {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 16px;\n  border-radius: 10px;\n  border: 1.5px solid #e5e7eb;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n  font-size: 14px;\n  color: #374151;\n}\n.ss-option.selected {\n  border-color: #1D6EBF;\n  background: #eff6ff;\n  color: #1D6EBF;\n  font-weight: 600;\n}\n.ss-option:hover:not(.selected) {\n  border-color: #93c5fd;\n  background: #f8faff;\n}\n.ss-option-input {\n  display: none;\n}\n.ss-option-dot {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid #d1d5db;\n  flex-shrink: 0;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ss-option.selected .ss-option-dot {\n  border-color: #1D6EBF;\n  background: #1D6EBF;\n}\n.ss-option-check {\n  width: 18px;\n  height: 18px;\n  border-radius: 5px;\n  border: 2px solid #d1d5db;\n  flex-shrink: 0;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ss-option.selected .ss-option-check {\n  border-color: #1D6EBF;\n  background: #1D6EBF;\n}\n.ss-scale {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n.ss-scale-btn {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n  color: #374151;\n}\n.ss-scale-btn.selected {\n  background: #1D6EBF;\n  border-color: #1D6EBF;\n  color: #fff;\n}\n.ss-scale-btn:hover:not(.selected) {\n  border-color: #1D6EBF;\n  color: #1D6EBF;\n}\n.ss-scale-btn i {\n  font-size: 1.5rem;\n  color: #dee2e6;\n  transition: color 0.2s;\n}\n.ss-scale-btn.selected i {\n  color: #F59E0B;\n}\n.ss-scale-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ss-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.ss-nav-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 22px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: opacity 0.2s;\n}\n.ss-nav-btn--ghost {\n  background: #f3f4f6;\n  color: #374151;\n}\n.ss-nav-btn--ghost:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.ss-nav-btn--ghost:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ss-nav-btn--primary {\n  background: #1D6EBF;\n  color: #fff;\n  margin-left: auto;\n}\n.ss-nav-btn--primary:hover {\n  opacity: 0.88;\n}\n.ss-nav-btn--success {\n  background: #059669;\n  color: #fff;\n  margin-left: auto;\n}\n.ss-nav-btn--success:hover {\n  opacity: 0.88;\n}\n.ss-nav-btn--success:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.ss-mini-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n.ss-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 22px;\n  border-radius: 10px;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ss-btn--ghost {\n  background: #f3f4f6;\n  color: #374151;\n}\n.ss-btn--ghost:hover {\n  background: #e5e7eb;\n}\n/*# sourceMappingURL=student-sondage.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: SondageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentSondageComponent, { className: "StudentSondageComponent", filePath: "app/features/student/student-sondage/student-sondage.component.ts", lineNumber: 14 });
})();
export {
  StudentSondageComponent
};
//# sourceMappingURL=chunk-AUTKLVKI.js.map
