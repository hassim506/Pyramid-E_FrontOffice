import {
  SondageService
} from "./chunk-WRAB2K2L.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-OVFIVR43.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-IKOSZIEY.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTSSTHJF.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/student/student-sondage/student-sondage.component.ts
var _c0 = () => [];
function StudentSondageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
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
      return \u0275\u0275resetView(ctx_r1.goToDashboard());
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
function StudentSondageComponent_div_2_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sondage == null ? null : ctx_r1.sondage.message_fin);
  }
}
function StudentSondageComponent_div_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, " Votre sondage a bien \xE9t\xE9 envoy\xE9. Vos r\xE9ponses nous aideront \xE0 am\xE9liorer nos formations. ");
    \u0275\u0275elementEnd();
  }
}
function StudentSondageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275element(3, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 15);
    \u0275\u0275text(5, "Merci pour vos r\xE9ponses !");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StudentSondageComponent_div_2_p_6_Template, 2, 1, "p", 16)(7, StudentSondageComponent_div_2_p_7_Template, 2, 0, "p", 16);
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function StudentSondageComponent_div_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToDashboard());
    });
    \u0275\u0275element(9, "i", 18);
    \u0275\u0275text(10, " Retour au tableau de bord ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.sondage == null ? null : ctx_r1.sondage.message_fin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.sondage == null ? null : ctx_r1.sondage.message_fin));
  }
}
function StudentSondageComponent_div_3_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.sondage.formation.titre, " ");
  }
}
function StudentSondageComponent_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.progress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.progress, "%");
  }
}
function StudentSondageComponent_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sondage.introduction);
  }
}
function StudentSondageComponent_div_3_div_11_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "Obligatoire");
    \u0275\u0275elementEnd();
  }
}
function StudentSondageComponent_div_3_div_11_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r5.aide);
  }
}
function StudentSondageComponent_div_3_div_11_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 57);
    \u0275\u0275listener("input", function StudentSondageComponent_div_3_div_11_input_8_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const q_r5 = \u0275\u0275nextContext().ngIf;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTextAnswer(q_r5.id, $event.target.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("type", q_r5.type === "email" ? "email" : q_r5.type === "date" ? "date" : "text")("placeholder", q_r5.placeholder || "")("value", ctx_r1.getTextAnswer(q_r5.id));
  }
}
function StudentSondageComponent_div_3_div_11_textarea_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 58);
    \u0275\u0275listener("input", function StudentSondageComponent_div_3_div_11_textarea_9_Template_textarea_input_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const q_r5 = \u0275\u0275nextContext().ngIf;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setTextAnswer(q_r5.id, $event.target.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("placeholder", q_r5.placeholder || "")("value", ctx_r1.getTextAnswer(q_r5.id));
  }
}
function StudentSondageComponent_div_3_div_11_div_10_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 61)(1, "input", 62);
    \u0275\u0275listener("change", function StudentSondageComponent_div_3_div_11_div_10_label_1_Template_input_change_1_listener() {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const q_r5 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRadioAnswer(q_r5.id, opt_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 63);
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_9_0;
    const opt_r9 = ctx.$implicit;
    const q_r5 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ss-option-row--selected", ((tmp_6_0 = ctx_r1.getAnswer(q_r5.id)) == null ? null : tmp_6_0.reponse) === opt_r9);
    \u0275\u0275advance();
    \u0275\u0275property("name", "q_" + q_r5.id)("value", opt_r9)("checked", ((tmp_9_0 = ctx_r1.getAnswer(q_r5.id)) == null ? null : tmp_9_0.reponse) === opt_r9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r9);
  }
}
function StudentSondageComponent_div_3_div_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, StudentSondageComponent_div_3_div_11_div_10_label_1_Template, 5, 6, "label", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r5.options || \u0275\u0275pureFunction0(1, _c0));
  }
}
function StudentSondageComponent_div_3_div_11_div_11_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 66)(1, "input", 67);
    \u0275\u0275listener("change", function StudentSondageComponent_div_3_div_11_div_11_label_1_Template_input_change_1_listener() {
      const opt_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const q_r5 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleChoice(q_r5.id, opt_r11));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 68);
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    const q_r5 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ss-option-row--selected", ctx_r1.isChoiceSelected(q_r5.id, opt_r11));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isChoiceSelected(q_r5.id, opt_r11));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r11);
  }
}
function StudentSondageComponent_div_3_div_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, StudentSondageComponent_div_3_div_11_div_11_label_1_Template, 5, 4, "label", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r5.options || \u0275\u0275pureFunction0(1, _c0));
  }
}
function StudentSondageComponent_div_3_div_11_select_12_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    \u0275\u0275property("value", opt_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r13);
  }
}
function StudentSondageComponent_div_3_div_11_select_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 69);
    \u0275\u0275listener("change", function StudentSondageComponent_div_3_div_11_select_12_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const q_r5 = \u0275\u0275nextContext().ngIf;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRadioAnswer(q_r5.id, $event.target.value));
    });
    \u0275\u0275elementStart(1, "option", 70);
    \u0275\u0275text(2, "Choisir une option\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StudentSondageComponent_div_3_div_11_select_12_option_3_Template, 2, 2, "option", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const q_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ((tmp_4_0 = ctx_r1.getAnswer(q_r5.id)) == null ? null : tmp_4_0.reponse) || "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", q_r5.options || \u0275\u0275pureFunction0(2, _c0));
  }
}
function StudentSondageComponent_div_3_div_11_div_13_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function StudentSondageComponent_div_3_div_11_div_13_button_7_Template_button_click_0_listener() {
      const n_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const q_r5 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setNumericAnswer(q_r5.id, n_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r15 = ctx.$implicit;
    const q_r5 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ss-echelle-btn--active", ctx_r1.getNumericAnswer(q_r5.id) === n_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r15);
  }
}
function StudentSondageComponent_div_3_div_11_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 75);
    \u0275\u0275template(7, StudentSondageComponent_div_3_div_11_div_13_button_7_Template, 2, 3, "button", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r5.valeur_min ?? 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.valeur_max ?? 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.echelleRange(q_r5));
  }
}
function StudentSondageComponent_div_3_div_11_div_14_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function StudentSondageComponent_div_3_div_11_div_14_button_1_Template_button_click_0_listener() {
      const n_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const q_r5 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setNumericAnswer(q_r5.id, n_r17));
    });
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r17 = ctx.$implicit;
    const q_r5 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ss-star-btn--active", (ctx_r1.getNumericAnswer(q_r5.id) ?? 0) >= n_r17);
  }
}
function StudentSondageComponent_div_3_div_11_div_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const val_r18 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(val_r18);
  }
}
function StudentSondageComponent_div_3_div_11_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, StudentSondageComponent_div_3_div_11_div_14_button_1_Template, 2, 2, "button", 79)(2, StudentSondageComponent_div_3_div_11_div_14_span_2_Template, 2, 1, "span", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.echelleRange(q_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getNumericAnswer(q_r5.id));
  }
}
function StudentSondageComponent_div_3_div_11_input_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 84);
    \u0275\u0275listener("input", function StudentSondageComponent_div_3_div_11_input_15_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const q_r5 = \u0275\u0275nextContext().ngIf;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setNumericAnswer(q_r5.id, +$event.target.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("placeholder", q_r5.placeholder || "")("min", q_r5.valeur_min ?? void 0)("max", q_r5.valeur_max ?? void 0)("value", ctx_r1.getNumericAnswer(q_r5.id) ?? "");
  }
}
function StudentSondageComponent_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StudentSondageComponent_div_3_div_11_span_4_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StudentSondageComponent_div_3_div_11_p_7_Template, 2, 1, "p", 47)(8, StudentSondageComponent_div_3_div_11_input_8_Template, 1, 3, "input", 48)(9, StudentSondageComponent_div_3_div_11_textarea_9_Template, 1, 2, "textarea", 49)(10, StudentSondageComponent_div_3_div_11_div_10_Template, 2, 2, "div", 50)(11, StudentSondageComponent_div_3_div_11_div_11_Template, 2, 2, "div", 50)(12, StudentSondageComponent_div_3_div_11_select_12_Template, 4, 3, "select", 51)(13, StudentSondageComponent_div_3_div_11_div_13_Template, 8, 3, "div", 52)(14, StudentSondageComponent_div_3_div_11_div_14_Template, 3, 2, "div", 53)(15, StudentSondageComponent_div_3_div_11_input_15_Template, 1, 4, "input", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", ctx_r1.currentStep + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isRequired(q_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.question);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r5.aide);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTextual(q_r5.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTextarea(q_r5.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r5.type === "radio");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r5.type === "checkbox");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r5.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r5.type === "echelle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r5.type === "notation");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r5.type === "numero");
  }
}
function StudentSondageComponent_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.submitError);
  }
}
function StudentSondageComponent_div_3_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function StudentSondageComponent_div_3_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goNext());
    });
    \u0275\u0275text(1, " Suivant ");
    \u0275\u0275element(2, "i", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.canGoNext());
  }
}
function StudentSondageComponent_div_3_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function StudentSondageComponent_div_3_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting ? "Envoi\u2026" : "Envoyer le sondage", " ");
  }
}
function StudentSondageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "h4", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StudentSondageComponent_div_3_p_5_Template, 3, 1, "p", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25)(7, "span", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, StudentSondageComponent_div_3_div_9_Template, 5, 3, "div", 27)(10, StudentSondageComponent_div_3_div_10_Template, 3, 1, "div", 28)(11, StudentSondageComponent_div_3_div_11_Template, 16, 12, "div", 29)(12, StudentSondageComponent_div_3_div_12_Template, 2, 1, "div", 30);
    \u0275\u0275elementStart(13, "div", 31)(14, "button", 32);
    \u0275\u0275listener("click", function StudentSondageComponent_div_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goPrev());
    });
    \u0275\u0275element(15, "i", 10);
    \u0275\u0275text(16, " Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, StudentSondageComponent_div_3_button_17_Template, 3, 1, "button", 33)(18, StudentSondageComponent_div_3_button_18_Template, 3, 2, "button", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.sondage.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sondage.formation);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.currentStep + 1, " / ", ctx_r1.questions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sondage.afficher_progres);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 0 && ctx_r1.sondage.introduction);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentStep === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isLastStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLastStep());
  }
}
var StudentSondageComponent = class _StudentSondageComponent {
  route;
  router;
  sondageService;
  routes = routes;
  sondage = null;
  loading = true;
  error = "";
  submitted = false;
  submitting = false;
  submitError = "";
  // Step-by-step navigation
  currentStep = 0;
  answers = /* @__PURE__ */ new Map();
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
  get progress() {
    if (!this.questions.length)
      return 0;
    return Math.round((this.currentStep + 1) / this.questions.length * 100);
  }
  // Get/set current answer
  getAnswer(qId) {
    return this.answers.get(qId);
  }
  setTextAnswer(qId, value) {
    this.answers.set(qId, { reponse: value });
  }
  setNumericAnswer(qId, value) {
    this.answers.set(qId, { reponse_numerique: value });
  }
  isChoiceSelected(qId, option) {
    const ans = this.answers.get(qId);
    return ans?.reponse_multiple?.includes(option) ?? false;
  }
  toggleChoice(qId, option) {
    const ans = this.answers.get(qId);
    const current = ans?.reponse_multiple ?? [];
    if (current.includes(option)) {
      this.answers.set(qId, { reponse_multiple: current.filter((o) => o !== option) });
    } else {
      this.answers.set(qId, { reponse_multiple: [...current, option] });
    }
  }
  setRadioAnswer(qId, option) {
    this.answers.set(qId, { reponse: option });
  }
  isRequired(q) {
    return q.est_obligatoire ?? false;
  }
  canGoNext() {
    const q = this.currentQuestion;
    if (!q)
      return false;
    if (!this.isRequired(q))
      return true;
    const ans = this.answers.get(q.id);
    if (!ans)
      return false;
    if (ans.reponse !== void 0 && ans.reponse !== "")
      return true;
    if (ans.reponse_numerique !== void 0)
      return true;
    if (ans.reponse_multiple && ans.reponse_multiple.length > 0)
      return true;
    return false;
  }
  goNext() {
    if (!this.canGoNext())
      return;
    if (this.currentStep < this.questions.length - 1) {
      this.currentStep++;
    }
  }
  goPrev() {
    if (this.currentStep > 0)
      this.currentStep--;
  }
  isLastStep() {
    return this.currentStep === this.questions.length - 1;
  }
  submit() {
    if (!this.canGoNext() && this.isRequired(this.currentQuestion))
      return;
    if (!this.sondage)
      return;
    this.submitting = true;
    this.submitError = "";
    const reponses = Array.from(this.answers.entries()).map(([question_id, ans]) => __spreadValues({
      question_id
    }, ans));
    this.sondageService.respondSondage(this.sondage.id, reponses).subscribe({
      next: () => {
        this.submitting = false;
        this.submitted = true;
      },
      error: (err) => {
        this.submitting = false;
        this.submitError = err?.error?.message ?? "Erreur lors de l'envoi.";
      }
    });
  }
  goToDashboard() {
    const state = history.state;
    if (state?.fromPage === "parcours" && state?.parcoursId) {
      this.router.navigate(["/student/parcours-assigne", state.parcoursId]);
    } else {
      this.router.navigate(["/student/mes-cours"]);
    }
  }
  needsOptions(type) {
    return ["radio", "checkbox", "select"].includes(type);
  }
  isNumeric(type) {
    return ["echelle", "notation", "numero"].includes(type);
  }
  isTextual(type) {
    return ["text", "email", "date"].includes(type);
  }
  isTextarea(type) {
    return type === "textarea";
  }
  echelleRange(q) {
    const min = q.valeur_min ?? 1;
    const max = q.valeur_max ?? 5;
    const result = [];
    for (let i = min; i <= max; i++)
      result.push(i);
    return result;
  }
  getNumericAnswer(qId) {
    return this.answers.get(qId)?.reponse_numerique;
  }
  getTextAnswer(qId) {
    return this.answers.get(qId)?.reponse ?? "";
  }
  static \u0275fac = function StudentSondageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentSondageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SondageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentSondageComponent, selectors: [["app-student-sondage"]], decls: 4, vars: 4, consts: [["class", "ss-loader", 4, "ngIf"], ["class", "ss-error-wrap", 4, "ngIf"], ["class", "ss-submitted-wrap", 4, "ngIf"], ["class", "ss-wrap", 4, "ngIf"], [1, "ss-loader"], ["role", "status", 1, "spinner-border"], [1, "ss-error-wrap"], [1, "ss-error-card"], [1, "isax", "isax-warning-2"], [1, "ss-btn", "ss-btn--ghost", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-2"], [1, "ss-submitted-wrap"], [1, "ss-submitted-card"], [1, "ss-submitted-icon"], [1, "isax", "isax-tick-circle"], [1, "ss-submitted-title"], ["class", "ss-submitted-sub", 4, "ngIf"], [1, "ss-btn", "ss-btn--primary", 3, "click"], [1, "isax", "isax-home-2", "me-2"], [1, "ss-submitted-sub"], [1, "ss-wrap"], [1, "ss-header"], [1, "ss-header__left"], [1, "ss-title"], ["class", "ss-sub", 4, "ngIf"], [1, "ss-header__right"], [1, "ss-step-badge"], ["class", "ss-progress-wrap", 4, "ngIf"], ["class", "ss-introduction", 4, "ngIf"], ["class", "ss-question-card", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "ss-nav"], [1, "ss-btn", "ss-btn--ghost", 3, "click", "disabled"], ["class", "ss-btn ss-btn--primary", 3, "disabled", "click", 4, "ngIf"], ["class", "ss-btn ss-btn--success", 3, "disabled", "click", 4, "ngIf"], [1, "ss-sub"], [1, "isax", "isax-book-1", "me-1"], [1, "ss-progress-wrap"], [1, "ss-progress-bar"], [1, "ss-progress-fill"], [1, "ss-progress-label"], [1, "ss-introduction"], [1, "ss-question-card"], [1, "ss-q-header"], [1, "ss-q-num"], ["class", "ss-q-required", 4, "ngIf"], [1, "ss-q-text"], ["class", "ss-q-aide", 4, "ngIf"], ["class", "ss-input", 3, "type", "placeholder", "value", "input", 4, "ngIf"], ["class", "ss-input ss-textarea", "rows", "4", 3, "placeholder", "value", "input", 4, "ngIf"], ["class", "ss-options-list", 4, "ngIf"], ["class", "ss-input ss-select", 3, "value", "change", 4, "ngIf"], ["class", "ss-echelle-wrap", 4, "ngIf"], ["class", "ss-stars-wrap", 4, "ngIf"], ["type", "number", "class", "ss-input", 3, "placeholder", "min", "max", "value", "input", 4, "ngIf"], [1, "ss-q-required"], [1, "ss-q-aide"], [1, "ss-input", 3, "input", "type", "placeholder", "value"], ["rows", "4", 1, "ss-input", "ss-textarea", 3, "input", "placeholder", "value"], [1, "ss-options-list"], ["class", "ss-option-row", 3, "ss-option-row--selected", 4, "ngFor", "ngForOf"], [1, "ss-option-row"], ["type", "radio", 3, "change", "name", "value", "checked"], [1, "ss-option-check"], [1, "ss-option-label"], ["class", "ss-option-row ss-option-row--check", 3, "ss-option-row--selected", 4, "ngFor", "ngForOf"], [1, "ss-option-row", "ss-option-row--check"], ["type", "checkbox", 3, "change", "checked"], [1, "ss-option-check", "ss-option-check--box"], [1, "ss-input", "ss-select", 3, "change", "value"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "ss-echelle-wrap"], [1, "ss-echelle-labels"], [1, "ss-echelle-btns"], ["class", "ss-echelle-btn", 3, "ss-echelle-btn--active", "click", 4, "ngFor", "ngForOf"], [1, "ss-echelle-btn", 3, "click"], [1, "ss-stars-wrap"], ["class", "ss-star-btn", 3, "ss-star-btn--active", "click", 4, "ngFor", "ngForOf"], ["class", "ss-star-val", 4, "ngIf"], [1, "ss-star-btn", 3, "click"], [1, "isax", "isax-star1"], [1, "ss-star-val"], ["type", "number", 1, "ss-input", 3, "input", "placeholder", "min", "max", "value"], [1, "alert", "alert-danger", "mt-3"], [1, "ss-btn", "ss-btn--primary", 3, "click", "disabled"], [1, "isax", "isax-arrow-right-3", "ms-2"], [1, "ss-btn", "ss-btn--success", 3, "click", "disabled"], [1, "isax", "isax-send-2", "me-2"]], template: function StudentSondageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StudentSondageComponent_div_0_Template, 4, 0, "div", 0)(1, StudentSondageComponent_div_1_Template, 8, 1, "div", 1)(2, StudentSondageComponent_div_2_Template, 11, 2, "div", 2)(3, StudentSondageComponent_div_3_Template, 19, 11, "div", 3);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption], styles: ['\n\n.ss-wrap[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n}\n.ss-loader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  gap: 1rem;\n  color: #6c757d;\n}\n.ss-error-wrap[_ngcontent-%COMP%], \n.ss-submitted-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  padding: 2rem;\n}\n.ss-error-card[_ngcontent-%COMP%], \n.ss-submitted-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);\n  max-width: 480px;\n  width: 100%;\n}\n.ss-error-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #dc3545;\n  display: block;\n  margin-bottom: 1rem;\n}\n.ss-submitted-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: #d1fae5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n}\n.ss-submitted-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #059669;\n}\n.ss-submitted-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 0.75rem;\n}\n.ss-submitted-sub[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n}\n.ss-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n}\n.ss-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.ss-sub[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin: 0.25rem 0 0;\n}\n.ss-step-badge[_ngcontent-%COMP%] {\n  background: #f0f4ff;\n  color: #1D6EBF;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.ss-progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n.ss-progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ss-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #1D6EBF,\n      #059669);\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.ss-progress-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #1D6EBF;\n  font-weight: 600;\n  min-width: 36px;\n  text-align: right;\n}\n.ss-introduction[_ngcontent-%COMP%] {\n  background: #f0f4ff;\n  border-left: 4px solid #1D6EBF;\n  border-radius: 0 8px 8px 0;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.5rem;\n  color: #374151;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n}\n.ss-question-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 2rem;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);\n  margin-bottom: 1.5rem;\n}\n.ss-q-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.ss-q-num[_ngcontent-%COMP%] {\n  background: #1D6EBF;\n  color: #fff;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  padding: 0.2rem 0.6rem;\n  border-radius: 6px;\n}\n.ss-q-required[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #dc3545;\n  background: #fff5f5;\n  padding: 0.15rem 0.5rem;\n  border-radius: 4px;\n}\n.ss-q-text[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 0.5rem;\n  line-height: 1.5;\n}\n.ss-q-aide[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 1.25rem;\n}\n.ss-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  color: #374151;\n  background: #fff;\n  transition: border-color 0.2s;\n}\n.ss-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1D6EBF;\n  box-shadow: 0 0 0 3px rgba(29, 110, 191, 0.1);\n}\n.ss-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n.ss-select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ss-options-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.ss-option-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e9ecef;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: border-color 0.2s, background 0.2s;\n}\n.ss-option-row[_ngcontent-%COMP%]:hover {\n  border-color: rgba(29, 110, 191, 0.1254901961);\n  background: #f0f4ff;\n}\n.ss-option-row--selected[_ngcontent-%COMP%] {\n  border-color: #1D6EBF;\n  background: #f0f4ff;\n}\n.ss-option-row[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%], \n.ss-option-row[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.ss-option-check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid #dee2e6;\n  border-radius: 50%;\n  flex-shrink: 0;\n  transition: all 0.2s;\n  position: relative;\n}\n.ss-option-row--selected[_ngcontent-%COMP%]   .ss-option-check[_ngcontent-%COMP%] {\n  border-color: #1D6EBF;\n  background: #1D6EBF;\n}\n.ss-option-row--selected[_ngcontent-%COMP%]   .ss-option-check[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fff;\n}\n.ss-option-check--box[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n.ss-option-label[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #374151;\n}\n.ss-echelle-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.ss-echelle-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8125rem;\n  color: #6c757d;\n}\n.ss-echelle-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.ss-echelle-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 2px solid #dee2e6;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ss-echelle-btn[_ngcontent-%COMP%]:hover {\n  border-color: #1D6EBF;\n  background: #f0f4ff;\n}\n.ss-echelle-btn--active[_ngcontent-%COMP%] {\n  border-color: #1D6EBF;\n  background: #1D6EBF;\n  color: #fff;\n}\n.ss-stars-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.ss-star-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.25rem;\n  transition: transform 0.15s;\n}\n.ss-star-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #dee2e6;\n  transition: color 0.2s;\n}\n.ss-star-btn--active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #F59E0B;\n}\n.ss-star-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.ss-star-val[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #F59E0B;\n  margin-left: 0.5rem;\n}\n.ss-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.ss-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.625rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n}\n.ss-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ss-btn--primary[_ngcontent-%COMP%] {\n  background: #1D6EBF;\n  color: #fff;\n}\n.ss-btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1558a0;\n}\n.ss-btn--success[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n}\n.ss-btn--success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n}\n.ss-btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.ss-btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8f9fa;\n  color: #374151;\n}\n/*# sourceMappingURL=student-sondage.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentSondageComponent, [{
    type: Component,
    args: [{ selector: "app-student-sondage", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Loading -->\r
<div *ngIf="loading" class="ss-loader">\r
  <div class="spinner-border" role="status"></div>\r
  <p>Chargement du sondage\u2026</p>\r
</div>\r
\r
<!-- Error -->\r
<div *ngIf="!loading && error" class="ss-error-wrap">\r
  <div class="ss-error-card">\r
    <i class="isax isax-warning-2"></i>\r
    <p>{{ error }}</p>\r
    <button class="ss-btn ss-btn--ghost" (click)="goToDashboard()">\r
      <i class="isax isax-arrow-left-2 me-2"></i> Retour\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- Submitted -->\r
<div *ngIf="!loading && submitted" class="ss-submitted-wrap">\r
  <div class="ss-submitted-card">\r
    <div class="ss-submitted-icon">\r
      <i class="isax isax-tick-circle"></i>\r
    </div>\r
    <h2 class="ss-submitted-title">Merci pour vos r\xE9ponses !</h2>\r
    <p class="ss-submitted-sub" *ngIf="sondage?.message_fin">{{ sondage?.message_fin }}</p>\r
    <p class="ss-submitted-sub" *ngIf="!sondage?.message_fin">\r
      Votre sondage a bien \xE9t\xE9 envoy\xE9. Vos r\xE9ponses nous aideront \xE0 am\xE9liorer nos formations.\r
    </p>\r
    <button class="ss-btn ss-btn--primary" (click)="goToDashboard()">\r
      <i class="isax isax-home-2 me-2"></i> Retour au tableau de bord\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- Sondage -->\r
<div *ngIf="!loading && !error && !submitted && sondage" class="ss-wrap">\r
\r
  <!-- Header -->\r
  <div class="ss-header">\r
    <div class="ss-header__left">\r
      <h4 class="ss-title">{{ sondage.titre }}</h4>\r
      <p class="ss-sub" *ngIf="sondage.formation">\r
        <i class="isax isax-book-1 me-1"></i>{{ sondage.formation.titre }}\r
      </p>\r
    </div>\r
    <div class="ss-header__right">\r
      <span class="ss-step-badge">{{ currentStep + 1 }} / {{ questions.length }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Progress bar -->\r
  <div class="ss-progress-wrap" *ngIf="sondage.afficher_progres">\r
    <div class="ss-progress-bar">\r
      <div class="ss-progress-fill" [style.width.%]="progress"></div>\r
    </div>\r
    <span class="ss-progress-label">{{ progress }}%</span>\r
  </div>\r
\r
  <!-- Introduction (step 0 only) -->\r
  <div *ngIf="currentStep === 0 && sondage.introduction" class="ss-introduction">\r
    <p>{{ sondage.introduction }}</p>\r
  </div>\r
\r
  <!-- Question card -->\r
  <div class="ss-question-card" *ngIf="currentQuestion as q">\r
\r
    <div class="ss-q-header">\r
      <span class="ss-q-num">Q{{ currentStep + 1 }}</span>\r
      <span *ngIf="isRequired(q)" class="ss-q-required">Obligatoire</span>\r
    </div>\r
\r
    <p class="ss-q-text">{{ q.question }}</p>\r
    <p class="ss-q-aide" *ngIf="q.aide">{{ q.aide }}</p>\r
\r
    <!-- TEXT / EMAIL / DATE -->\r
    <input *ngIf="isTextual(q.type)"\r
           [type]="q.type === 'email' ? 'email' : q.type === 'date' ? 'date' : 'text'"\r
           class="ss-input"\r
           [placeholder]="q.placeholder || ''"\r
           [value]="getTextAnswer(q.id!)"\r
           (input)="setTextAnswer(q.id!, $any($event.target).value)">\r
\r
    <!-- TEXTAREA -->\r
    <textarea *ngIf="isTextarea(q.type)"\r
              class="ss-input ss-textarea"\r
              rows="4"\r
              [placeholder]="q.placeholder || ''"\r
              [value]="getTextAnswer(q.id!)"\r
              (input)="setTextAnswer(q.id!, $any($event.target).value)"></textarea>\r
\r
    <!-- RADIO -->\r
    <div *ngIf="q.type === 'radio'" class="ss-options-list">\r
      <label *ngFor="let opt of (q.options || [])" class="ss-option-row"\r
             [class.ss-option-row--selected]="getAnswer(q.id!)?.reponse === opt">\r
        <input type="radio" [name]="'q_' + q.id" [value]="opt"\r
               [checked]="getAnswer(q.id!)?.reponse === opt"\r
               (change)="setRadioAnswer(q.id!, opt)">\r
        <span class="ss-option-check"></span>\r
        <span class="ss-option-label">{{ opt }}</span>\r
      </label>\r
    </div>\r
\r
    <!-- CHECKBOX -->\r
    <div *ngIf="q.type === 'checkbox'" class="ss-options-list">\r
      <label *ngFor="let opt of (q.options || [])" class="ss-option-row ss-option-row--check"\r
             [class.ss-option-row--selected]="isChoiceSelected(q.id!, opt)">\r
        <input type="checkbox" [checked]="isChoiceSelected(q.id!, opt)"\r
               (change)="toggleChoice(q.id!, opt)">\r
        <span class="ss-option-check ss-option-check--box"></span>\r
        <span class="ss-option-label">{{ opt }}</span>\r
      </label>\r
    </div>\r
\r
    <!-- SELECT -->\r
    <select *ngIf="q.type === 'select'" class="ss-input ss-select"\r
            [value]="getAnswer(q.id!)?.reponse || ''"\r
            (change)="setRadioAnswer(q.id!, $any($event.target).value)">\r
      <option value="" disabled>Choisir une option\u2026</option>\r
      <option *ngFor="let opt of (q.options || [])" [value]="opt">{{ opt }}</option>\r
    </select>\r
\r
    <!-- ECHELLE -->\r
    <div *ngIf="q.type === 'echelle'" class="ss-echelle-wrap">\r
      <div class="ss-echelle-labels">\r
        <span>{{ q.valeur_min ?? 1 }}</span>\r
        <span>{{ q.valeur_max ?? 5 }}</span>\r
      </div>\r
      <div class="ss-echelle-btns">\r
        <button *ngFor="let n of echelleRange(q)" class="ss-echelle-btn"\r
                [class.ss-echelle-btn--active]="getNumericAnswer(q.id!) === n"\r
                (click)="setNumericAnswer(q.id!, n)">{{ n }}</button>\r
      </div>\r
    </div>\r
\r
    <!-- NOTATION (\xE9toiles) -->\r
    <div *ngIf="q.type === 'notation'" class="ss-stars-wrap">\r
      <button *ngFor="let n of echelleRange(q)" class="ss-star-btn"\r
              [class.ss-star-btn--active]="(getNumericAnswer(q.id!) ?? 0) >= n"\r
              (click)="setNumericAnswer(q.id!, n)">\r
        <i class="isax isax-star1"></i>\r
      </button>\r
      <span class="ss-star-val" *ngIf="getNumericAnswer(q.id!) as val">{{ val }}</span>\r
    </div>\r
\r
    <!-- NUMERO -->\r
    <input *ngIf="q.type === 'numero'" type="number" class="ss-input"\r
           [placeholder]="q.placeholder || ''"\r
           [min]="q.valeur_min ?? undefined"\r
           [max]="q.valeur_max ?? undefined"\r
           [value]="getNumericAnswer(q.id!) ?? ''"\r
           (input)="setNumericAnswer(q.id!, +$any($event.target).value)">\r
\r
  </div>\r
\r
  <!-- Submit error -->\r
  <div *ngIf="submitError" class="alert alert-danger mt-3">{{ submitError }}</div>\r
\r
  <!-- Navigation -->\r
  <div class="ss-nav">\r
    <button class="ss-btn ss-btn--ghost" (click)="goPrev()" [disabled]="currentStep === 0">\r
      <i class="isax isax-arrow-left-2 me-2"></i> Pr\xE9c\xE9dent\r
    </button>\r
\r
    <button *ngIf="!isLastStep()" class="ss-btn ss-btn--primary" (click)="goNext()" [disabled]="!canGoNext()">\r
      Suivant <i class="isax isax-arrow-right-3 ms-2"></i>\r
    </button>\r
\r
    <button *ngIf="isLastStep()" class="ss-btn ss-btn--success" (click)="submit()" [disabled]="submitting">\r
      <i class="isax isax-send-2 me-2"></i>\r
      {{ submitting ? 'Envoi\u2026' : 'Envoyer le sondage' }}\r
    </button>\r
  </div>\r
\r
</div>\r
`, styles: ['/* src/app/features/student/student-sondage/student-sondage.component.scss */\n.ss-wrap {\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n}\n.ss-loader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  gap: 1rem;\n  color: #6c757d;\n}\n.ss-error-wrap,\n.ss-submitted-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  padding: 2rem;\n}\n.ss-error-card,\n.ss-submitted-card {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);\n  max-width: 480px;\n  width: 100%;\n}\n.ss-error-card i {\n  font-size: 3rem;\n  color: #dc3545;\n  display: block;\n  margin-bottom: 1rem;\n}\n.ss-submitted-icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: #d1fae5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n}\n.ss-submitted-icon i {\n  font-size: 2rem;\n  color: #059669;\n}\n.ss-submitted-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 0.75rem;\n}\n.ss-submitted-sub {\n  color: #6c757d;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n}\n.ss-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n}\n.ss-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.ss-sub {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin: 0.25rem 0 0;\n}\n.ss-step-badge {\n  background: #f0f4ff;\n  color: #1D6EBF;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.ss-progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n.ss-progress-bar {\n  flex: 1;\n  height: 8px;\n  background: #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ss-progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #1D6EBF,\n      #059669);\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.ss-progress-label {\n  font-size: 0.8125rem;\n  color: #1D6EBF;\n  font-weight: 600;\n  min-width: 36px;\n  text-align: right;\n}\n.ss-introduction {\n  background: #f0f4ff;\n  border-left: 4px solid #1D6EBF;\n  border-radius: 0 8px 8px 0;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.5rem;\n  color: #374151;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n}\n.ss-question-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 2rem;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);\n  margin-bottom: 1.5rem;\n}\n.ss-q-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.ss-q-num {\n  background: #1D6EBF;\n  color: #fff;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  padding: 0.2rem 0.6rem;\n  border-radius: 6px;\n}\n.ss-q-required {\n  font-size: 0.75rem;\n  color: #dc3545;\n  background: #fff5f5;\n  padding: 0.15rem 0.5rem;\n  border-radius: 4px;\n}\n.ss-q-text {\n  font-size: 1.0625rem;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 0.5rem;\n  line-height: 1.5;\n}\n.ss-q-aide {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 1.25rem;\n}\n.ss-input {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  color: #374151;\n  background: #fff;\n  transition: border-color 0.2s;\n}\n.ss-input:focus {\n  outline: none;\n  border-color: #1D6EBF;\n  box-shadow: 0 0 0 3px rgba(29, 110, 191, 0.1);\n}\n.ss-textarea {\n  resize: vertical;\n  min-height: 100px;\n}\n.ss-select {\n  cursor: pointer;\n}\n.ss-options-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.ss-option-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e9ecef;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: border-color 0.2s, background 0.2s;\n}\n.ss-option-row:hover {\n  border-color: rgba(29, 110, 191, 0.1254901961);\n  background: #f0f4ff;\n}\n.ss-option-row--selected {\n  border-color: #1D6EBF;\n  background: #f0f4ff;\n}\n.ss-option-row input[type=radio],\n.ss-option-row input[type=checkbox] {\n  display: none;\n}\n.ss-option-check {\n  width: 18px;\n  height: 18px;\n  border: 2px solid #dee2e6;\n  border-radius: 50%;\n  flex-shrink: 0;\n  transition: all 0.2s;\n  position: relative;\n}\n.ss-option-row--selected .ss-option-check {\n  border-color: #1D6EBF;\n  background: #1D6EBF;\n}\n.ss-option-row--selected .ss-option-check::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fff;\n}\n.ss-option-check--box {\n  border-radius: 4px;\n}\n.ss-option-label {\n  font-size: 0.9375rem;\n  color: #374151;\n}\n.ss-echelle-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.ss-echelle-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8125rem;\n  color: #6c757d;\n}\n.ss-echelle-btns {\n  display: flex;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.ss-echelle-btn {\n  width: 44px;\n  height: 44px;\n  border: 2px solid #dee2e6;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ss-echelle-btn:hover {\n  border-color: #1D6EBF;\n  background: #f0f4ff;\n}\n.ss-echelle-btn--active {\n  border-color: #1D6EBF;\n  background: #1D6EBF;\n  color: #fff;\n}\n.ss-stars-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.ss-star-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.25rem;\n  transition: transform 0.15s;\n}\n.ss-star-btn i {\n  font-size: 2rem;\n  color: #dee2e6;\n  transition: color 0.2s;\n}\n.ss-star-btn--active i {\n  color: #F59E0B;\n}\n.ss-star-btn:hover {\n  transform: scale(1.1);\n}\n.ss-star-val {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #F59E0B;\n  margin-left: 0.5rem;\n}\n.ss-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.ss-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.625rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n}\n.ss-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ss-btn--primary {\n  background: #1D6EBF;\n  color: #fff;\n}\n.ss-btn--primary:hover:not(:disabled) {\n  background: #1558a0;\n}\n.ss-btn--success {\n  background: #059669;\n  color: #fff;\n}\n.ss-btn--success:hover:not(:disabled) {\n  background: #047857;\n}\n.ss-btn--ghost {\n  background: transparent;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.ss-btn--ghost:hover:not(:disabled) {\n  background: #f8f9fa;\n  color: #374151;\n}\n/*# sourceMappingURL=student-sondage.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: SondageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentSondageComponent, { className: "StudentSondageComponent", filePath: "app/features/student/student-sondage/student-sondage.component.ts", lineNumber: 15 });
})();
export {
  StudentSondageComponent
};
//# sourceMappingURL=chunk-MSRVEQHJ.js.map
