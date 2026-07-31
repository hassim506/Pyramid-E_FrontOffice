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
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ZGFJXD53.js";
import {
  ActivatedRoute
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
  ɵɵattribute,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BSBCM3BI.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/sondage-public/sondage-public.component.ts
function SondagePublicComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement du sondage\u2026");
    \u0275\u0275elementEnd()();
  }
}
function SondagePublicComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "D\xE9j\xE0 r\xE9pondu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Vous avez d\xE9j\xE0 r\xE9pondu \xE0 ce sondage. Votre avis a bien \xE9t\xE9 enregistr\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 8);
    \u0275\u0275text(8, "Merci pour votre participation !");
    \u0275\u0275elementEnd()();
  }
}
function SondagePublicComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9);
    \u0275\u0275text(2, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Sondage ferm\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Ce sondage n'est plus disponible.");
    \u0275\u0275elementEnd()();
  }
}
function SondagePublicComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 10);
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Lien invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.erreurMessage || "Ce lien est invalide ou a expir\xE9.");
  }
}
function SondagePublicComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 11);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Merci !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.messageFin);
  }
}
function SondagePublicComponent_div_6_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.sondage.introduction);
  }
}
function SondagePublicComponent_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span");
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.erreurMessage, " ");
  }
}
function SondagePublicComponent_div_6_div_9_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SondagePublicComponent_div_6_div_9_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r3.description);
  }
}
function SondagePublicComponent_div_6_div_9_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SondagePublicComponent_div_6_div_9_input_8_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const q_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.reponses[q_r3.id], $event) || (ctx_r0.reponses[q_r3.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("type", q_r3.type === "numero" ? "number" : q_r3.type === "email" ? "email" : "text");
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reponses[q_r3.id]);
    \u0275\u0275property("placeholder", q_r3.placeholder || "");
    \u0275\u0275attribute("minlength", q_r3.min_caracteres || null)("maxlength", q_r3.max_caracteres || null);
  }
}
function SondagePublicComponent_div_6_div_9_textarea_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SondagePublicComponent_div_6_div_9_textarea_9_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const q_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.reponses[q_r3.id], $event) || (ctx_r0.reponses[q_r3.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reponses[q_r3.id]);
    \u0275\u0275property("placeholder", q_r3.placeholder || "");
    \u0275\u0275attribute("minlength", q_r3.min_caracteres || null)("maxlength", q_r3.max_caracteres || null);
  }
}
function SondagePublicComponent_div_6_div_9_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function SondagePublicComponent_div_6_div_9_input_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const q_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.reponses[q_r3.id], $event) || (ctx_r0.reponses[q_r3.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reponses[q_r3.id]);
  }
}
function SondagePublicComponent_div_6_div_9_div_11_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 47)(1, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SondagePublicComponent_div_6_div_9_div_11_label_1_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const q_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.reponses[q_r3.id], $event) || (ctx_r0.reponses[q_r3.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    const q_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", "q" + q_r3.id)("value", opt_r8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reponses[q_r3.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r8);
  }
}
function SondagePublicComponent_div_6_div_9_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, SondagePublicComponent_div_6_div_9_div_11_label_1_Template, 4, 4, "label", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r3.options);
  }
}
function SondagePublicComponent_div_6_div_9_select_12_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    \u0275\u0275property("value", opt_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r10);
  }
}
function SondagePublicComponent_div_6_div_9_select_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function SondagePublicComponent_div_6_div_9_select_12_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const q_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.reponses[q_r3.id], $event) || (ctx_r0.reponses[q_r3.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 50);
    \u0275\u0275text(2, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SondagePublicComponent_div_6_div_9_select_12_option_3_Template, 2, 2, "option", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reponses[q_r3.id]);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", q_r3.options);
  }
}
function SondagePublicComponent_div_6_div_9_div_13_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 47)(1, "input", 53);
    \u0275\u0275listener("change", function SondagePublicComponent_div_6_div_9_div_13_label_1_Template_input_change_1_listener() {
      const opt_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const q_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleCheckbox(q_r3.id, opt_r12));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    const q_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isChecked(q_r3.id, opt_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r12);
  }
}
function SondagePublicComponent_div_6_div_9_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, SondagePublicComponent_div_6_div_9_div_13_label_1_Template, 4, 2, "label", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r3.options);
  }
}
function SondagePublicComponent_div_6_div_9_div_14_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function SondagePublicComponent_div_6_div_9_div_14_button_4_Template_button_click_0_listener() {
      const n_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const q_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setNotation(q_r3.id, +(q_r3.valeur_min ?? 1) + n_r14 - 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r14 = ctx.$implicit;
    const q_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.reponses[q_r3.id] === +(q_r3.valeur_min ?? 1) + n_r14 - 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", +(q_r3.valeur_min ?? 1) + n_r14 - 1, " ");
  }
}
function SondagePublicComponent_div_6_div_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56);
    \u0275\u0275template(4, SondagePublicComponent_div_6_div_9_div_14_button_4_Template, 2, 3, "button", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r3.valeur_min ?? 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getEtoiles(+(q_r3.valeur_max ?? 10) - +(q_r3.valeur_min ?? 1) + 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r3.valeur_max ?? 10);
  }
}
function SondagePublicComponent_div_6_div_9_div_15_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function SondagePublicComponent_div_6_div_9_div_15_button_1_Template_button_click_0_listener() {
      const star_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const q_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setNotation(q_r3.id, star_r16));
    });
    \u0275\u0275text(1, " \u2605 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r16 = ctx.$implicit;
    const q_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.reponses[q_r3.id] !== null && star_r16 <= ctx_r0.reponses[q_r3.id]);
    \u0275\u0275attribute("aria-label", star_r16 + " \xE9toile(s)");
  }
}
function SondagePublicComponent_div_6_div_9_div_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.reponses[q_r3.id], " / ", q_r3.valeur_max ?? 5);
  }
}
function SondagePublicComponent_div_6_div_9_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, SondagePublicComponent_div_6_div_9_div_15_button_1_Template, 2, 3, "button", 60)(2, SondagePublicComponent_div_6_div_9_div_15_span_2_Template, 2, 2, "span", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.getEtoiles(+(q_r3.valeur_max ?? 5)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.reponses[q_r3.id]);
  }
}
function SondagePublicComponent_div_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275template(6, SondagePublicComponent_div_6_div_9_span_6_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SondagePublicComponent_div_6_div_9_p_7_Template, 2, 1, "p", 32)(8, SondagePublicComponent_div_6_div_9_input_8_Template, 1, 5, "input", 33)(9, SondagePublicComponent_div_6_div_9_textarea_9_Template, 1, 4, "textarea", 34)(10, SondagePublicComponent_div_6_div_9_input_10_Template, 1, 1, "input", 35)(11, SondagePublicComponent_div_6_div_9_div_11_Template, 2, 1, "div", 36)(12, SondagePublicComponent_div_6_div_9_select_12_Template, 4, 2, "select", 37)(13, SondagePublicComponent_div_6_div_9_div_13_Template, 2, 1, "div", 36)(14, SondagePublicComponent_div_6_div_9_div_14_Template, 7, 3, "div", 38)(15, SondagePublicComponent_div_6_div_9_div_15_Template, 3, 2, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = ctx.$implicit;
    const i_r17 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r17 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", q_r3.question, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.est_obligatoire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.type === "text" || q_r3.type === "email" || q_r3.type === "numero");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.type === "textarea");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.type === "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.type === "radio");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.type === "checkbox");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.type === "echelle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.type === "notation");
  }
}
function SondagePublicComponent_div_6_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Envoyer mes r\xE9ponses");
    \u0275\u0275elementEnd();
  }
}
function SondagePublicComponent_div_6_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
}
function SondagePublicComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275text(3, "Pyramide-e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SondagePublicComponent_div_6_p_6_Template, 2, 1, "p", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SondagePublicComponent_div_6_div_7_Template, 4, 1, "div", 18);
    \u0275\u0275elementStart(8, "div", 19);
    \u0275\u0275template(9, SondagePublicComponent_div_6_div_9_Template, 16, 12, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 21)(11, "button", 22);
    \u0275\u0275listener("click", function SondagePublicComponent_div_6_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.soumettre());
    });
    \u0275\u0275template(12, SondagePublicComponent_div_6_span_12_Template, 2, 0, "span", 23)(13, SondagePublicComponent_div_6_span_13_Template, 1, 0, "span", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.sondage.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sondage.introduction);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.erreurMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.questions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.soumettre_loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.soumettre_loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.soumettre_loading);
  }
}
var SondagePublicComponent = class _SondagePublicComponent {
  route;
  sondageService;
  etat = "chargement";
  token = "";
  sondage = null;
  questions = [];
  reponses = {};
  messageFin = "";
  erreurMessage = "";
  soumettre_loading = false;
  // Pour les questions checkbox (tableau de valeurs)
  reponsesCheckbox = {};
  constructor(route, sondageService) {
    this.route = route;
    this.sondageService = sondageService;
  }
  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token") ?? "";
    if (!this.token) {
      this.etat = "erreur";
      return;
    }
    this.chargerSondage();
  }
  chargerSondage() {
    this.etat = "chargement";
    this.sondageService.getSondagePublic(this.token).subscribe({
      next: (res) => {
        if (res.deja_repondu) {
          this.etat = "deja_repondu";
          return;
        }
        this.sondage = res.sondage;
        this.questions = res.sondage.questions ?? [];
        this.questions.forEach((q) => {
          if (q.type === "echelle" || q.type === "notation") {
            this.reponses[q.id] = null;
          } else if (q.type === "checkbox") {
            this.reponsesCheckbox[q.id] = [];
          } else {
            this.reponses[q.id] = "";
          }
        });
        this.etat = "formulaire";
      },
      error: (err) => {
        if (err.status === 409) {
          this.etat = "deja_repondu";
        } else if (err.status === 410) {
          this.etat = "inactif";
        } else {
          this.etat = "erreur";
          this.erreurMessage = err.error?.message ?? "Lien invalide ou expir\xE9.";
        }
      }
    });
  }
  toggleCheckbox(questionId, option) {
    const arr = this.reponsesCheckbox[questionId] ?? [];
    const idx = arr.indexOf(option);
    if (idx === -1)
      arr.push(option);
    else
      arr.splice(idx, 1);
    this.reponsesCheckbox[questionId] = arr;
  }
  isChecked(questionId, option) {
    return (this.reponsesCheckbox[questionId] ?? []).includes(option);
  }
  setNotation(questionId, val) {
    this.reponses[questionId] = val;
  }
  getEtoiles(max) {
    return Array.from({ length: max ?? 5 }, (_, i) => i + 1);
  }
  soumettre() {
    for (const q of this.questions) {
      if (!q.est_obligatoire)
        continue;
      const val = q.type === "checkbox" ? this.reponsesCheckbox[q.id] : this.reponses[q.id];
      if (val === null || val === void 0 || val === "" || Array.isArray(val) && val.length === 0) {
        this.erreurMessage = `La question "${q.question}" est obligatoire.`;
        this.scrollToTop();
        return;
      }
    }
    const payload = __spreadValues({}, this.reponses);
    this.questions.filter((q) => q.type === "checkbox").forEach((q) => {
      payload[q.id] = this.reponsesCheckbox[q.id];
    });
    this.soumettre_loading = true;
    this.erreurMessage = "";
    this.sondageService.soumettreReponsePublique(this.token, payload).subscribe({
      next: (res) => {
        this.messageFin = res.message_fin ?? "Merci pour votre r\xE9ponse !";
        this.soumettre_loading = false;
        this.etat = "succes";
      },
      error: (err) => {
        this.soumettre_loading = false;
        if (err.status === 409) {
          this.etat = "deja_repondu";
        } else {
          this.erreurMessage = err.error?.message ?? "Une erreur est survenue. Veuillez r\xE9essayer.";
        }
      }
    });
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  static \u0275fac = function SondagePublicComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SondagePublicComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SondageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SondagePublicComponent, selectors: [["app-sondage-public"]], decls: 7, vars: 6, consts: [[1, "sondage-public-page"], ["class", "sp-center", 4, "ngIf"], ["class", "sp-card sp-state", 4, "ngIf"], ["class", "sp-wrap", 4, "ngIf"], [1, "sp-center"], [1, "sp-spinner"], [1, "sp-card", "sp-state"], [1, "sp-icon", "sp-icon--warn"], [1, "sp-muted"], [1, "sp-icon", "sp-icon--muted"], [1, "sp-icon", "sp-icon--danger"], [1, "sp-icon", "sp-icon--success"], [1, "sp-message-fin"], [1, "sp-wrap"], [1, "sp-header"], [1, "sp-logo"], [1, "sp-titre"], ["class", "sp-intro", 4, "ngIf"], ["class", "sp-alert", 4, "ngIf"], [1, "sp-questions"], ["class", "sp-question", 4, "ngFor", "ngForOf"], [1, "sp-footer"], [1, "sp-btn-submit", 3, "click", "disabled"], [4, "ngIf"], ["class", "sp-btn-spinner", 4, "ngIf"], [1, "sp-intro"], [1, "sp-alert"], [1, "sp-question"], [1, "sp-question-label"], [1, "sp-num"], [1, "sp-text"], ["class", "sp-obligatoire", "title", "Obligatoire", 4, "ngIf"], ["class", "sp-description", 4, "ngIf"], ["class", "sp-input", 3, "type", "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["class", "sp-textarea", "rows", "4", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["type", "date", "class", "sp-input", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "sp-options", 4, "ngIf"], ["class", "sp-select", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "sp-echelle", 4, "ngIf"], ["class", "sp-notation", 4, "ngIf"], ["title", "Obligatoire", 1, "sp-obligatoire"], [1, "sp-description"], [1, "sp-input", 3, "ngModelChange", "type", "ngModel", "placeholder"], ["rows", "4", 1, "sp-textarea", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "date", 1, "sp-input", 3, "ngModelChange", "ngModel"], [1, "sp-options"], ["class", "sp-option", 4, "ngFor", "ngForOf"], [1, "sp-option"], ["type", "radio", 3, "ngModelChange", "name", "value", "ngModel"], [1, "sp-select", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "checkbox", 3, "change", "checked"], [1, "sp-echelle"], [1, "sp-echelle-label"], [1, "sp-echelle-btns"], ["type", "button", "class", "sp-echelle-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "sp-echelle-btn", 3, "click"], [1, "sp-notation"], ["type", "button", "class", "sp-star", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "sp-star-label", 4, "ngIf"], ["type", "button", 1, "sp-star", 3, "click"], [1, "sp-star-label"], [1, "sp-btn-spinner"]], template: function SondagePublicComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, SondagePublicComponent_div_1_Template, 4, 0, "div", 1)(2, SondagePublicComponent_div_2_Template, 9, 0, "div", 2)(3, SondagePublicComponent_div_3_Template, 7, 0, "div", 2)(4, SondagePublicComponent_div_4_Template, 7, 1, "div", 2)(5, SondagePublicComponent_div_5_Template, 7, 1, "div", 2)(6, SondagePublicComponent_div_6_Template, 14, 7, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.etat === "chargement");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.etat === "deja_repondu");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.etat === "inactif");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.etat === "erreur");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.etat === "succes");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.etat === "formulaire");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.sondage-public-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f4f6f8;\n  font-family:\n    "Segoe UI",\n    Arial,\n    sans-serif;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 48px 16px 80px;\n}\n.sp-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 16px;\n  color: #6b7280;\n}\n.sp-spinner[_ngcontent-%COMP%], \n.sp-btn-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.sp-btn-spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-width: 2px;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sp-card.sp-state[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  padding: 56px 40px;\n  text-align: center;\n  max-width: 480px;\n  width: 100%;\n}\n.sp-card.sp-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 16px 0 8px;\n}\n.sp-card.sp-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 15px;\n  line-height: 1.6;\n  margin: 0;\n}\n.sp-card.sp-state[_ngcontent-%COMP%]   .sp-muted[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-top: 8px;\n}\n.sp-card.sp-state[_ngcontent-%COMP%]   .sp-message-fin[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #1f2937;\n}\n.sp-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  font-weight: 700;\n  margin: 0 auto;\n}\n.sp-icon--success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.sp-icon--warn[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.sp-icon--danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.sp-icon--muted[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #9ca3af;\n}\n.sp-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 680px;\n}\n.sp-header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px 16px 0 0;\n  padding: 32px 40px 28px;\n  border-bottom: 3px solid #069b8f;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);\n}\n.sp-header[_ngcontent-%COMP%]   .sp-logo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #069b8f;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin-bottom: 12px;\n}\n.sp-header[_ngcontent-%COMP%]   .sp-titre[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1f2937;\n  margin: 0 0 10px;\n}\n.sp-header[_ngcontent-%COMP%]   .sp-intro[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.7;\n  margin: 0;\n}\n.sp-alert[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  border: 1px solid #fcd34d;\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #92400e;\n  margin: 12px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sp-questions[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);\n}\n.sp-question[_ngcontent-%COMP%] {\n  padding: 28px 40px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.sp-question[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sp-question-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.sp-question-label[_ngcontent-%COMP%]   .sp-num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 26px;\n  height: 26px;\n  background: #069b8f;\n  color: #ffffff;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1px;\n}\n.sp-question-label[_ngcontent-%COMP%]   .sp-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1f2937;\n  line-height: 1.5;\n}\n.sp-question-label[_ngcontent-%COMP%]   .sp-obligatoire[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-left: 3px;\n}\n.sp-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: -8px 0 12px 38px;\n  line-height: 1.6;\n}\n.sp-input[_ngcontent-%COMP%], \n.sp-select[_ngcontent-%COMP%], \n.sp-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #1f2937;\n  background: #ffffff;\n  transition: border-color 0.15s;\n  box-sizing: border-box;\n}\n.sp-input[_ngcontent-%COMP%]:focus, \n.sp-select[_ngcontent-%COMP%]:focus, \n.sp-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.sp-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 96px;\n}\n.sp-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sp-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  font-size: 14px;\n  color: #1f2937;\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  transition: background 0.12s, border-color 0.12s;\n}\n.sp-option[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n  border-color: #069b8f;\n}\n.sp-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #069b8f;\n  flex-shrink: 0;\n}\n.sp-echelle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.sp-echelle[_ngcontent-%COMP%]   .sp-echelle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  min-width: 20px;\n  text-align: center;\n}\n.sp-echelle-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.sp-echelle-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #ffffff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sp-echelle-btn[_ngcontent-%COMP%]:hover, \n.sp-echelle-btn.active[_ngcontent-%COMP%] {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #ffffff;\n}\n.sp-notation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sp-star[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #d1d5db;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0 2px;\n  transition: color 0.12s, transform 0.1s;\n  line-height: 1;\n}\n.sp-star[_ngcontent-%COMP%]:hover, \n.sp-star.active[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  transform: scale(1.1);\n}\n.sp-star-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-left: 8px;\n}\n.sp-footer[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 28px 40px;\n  border-radius: 0 0 16px 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);\n  display: flex;\n  justify-content: flex-end;\n}\n.sp-btn-submit[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #ffffff;\n  border: none;\n  padding: 12px 32px;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 180px;\n  justify-content: center;\n}\n.sp-btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047a70;\n}\n.sp-btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 600px) {\n  .sondage-public-page[_ngcontent-%COMP%] {\n    padding: 24px 8px 60px;\n  }\n  .sp-header[_ngcontent-%COMP%], \n   .sp-question[_ngcontent-%COMP%], \n   .sp-footer[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .sp-question-label[_ngcontent-%COMP%]   .sp-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .sp-echelle-btn[_ngcontent-%COMP%] {\n    width: 34px;\n    height: 34px;\n  }\n  .sp-star[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=sondage-public.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SondagePublicComponent, [{
    type: Component,
    args: [{ selector: "app-sondage-public", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="sondage-public-page">\r
\r
  <!-- \u2500\u2500 CHARGEMENT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="etat === 'chargement'" class="sp-center">\r
    <div class="sp-spinner"></div>\r
    <p>Chargement du sondage\u2026</p>\r
  </div>\r
\r
  <!-- \u2500\u2500 D\xC9J\xC0 R\xC9PONDU \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="etat === 'deja_repondu'" class="sp-card sp-state">\r
    <div class="sp-icon sp-icon--warn">\u2713</div>\r
    <h2>D\xE9j\xE0 r\xE9pondu</h2>\r
    <p>Vous avez d\xE9j\xE0 r\xE9pondu \xE0 ce sondage. Votre avis a bien \xE9t\xE9 enregistr\xE9.</p>\r
    <p class="sp-muted">Merci pour votre participation !</p>\r
  </div>\r
\r
  <!-- \u2500\u2500 INACTIF / EXPIR\xC9 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="etat === 'inactif'" class="sp-card sp-state">\r
    <div class="sp-icon sp-icon--muted">\u{1F512}</div>\r
    <h2>Sondage ferm\xE9</h2>\r
    <p>Ce sondage n'est plus disponible.</p>\r
  </div>\r
\r
  <!-- \u2500\u2500 ERREUR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="etat === 'erreur'" class="sp-card sp-state">\r
    <div class="sp-icon sp-icon--danger">\u2715</div>\r
    <h2>Lien invalide</h2>\r
    <p>{{ erreurMessage || 'Ce lien est invalide ou a expir\xE9.' }}</p>\r
  </div>\r
\r
  <!-- \u2500\u2500 SUCC\xC8S \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="etat === 'succes'" class="sp-card sp-state">\r
    <div class="sp-icon sp-icon--success">\u2713</div>\r
    <h2>Merci !</h2>\r
    <p class="sp-message-fin">{{ messageFin }}</p>\r
  </div>\r
\r
  <!-- \u2500\u2500 FORMULAIRE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div *ngIf="etat === 'formulaire'" class="sp-wrap">\r
\r
    <!-- En-t\xEAte sondage -->\r
    <div class="sp-header">\r
      <div class="sp-logo">Pyramide-e</div>\r
      <h1 class="sp-titre">{{ sondage.titre }}</h1>\r
      <p *ngIf="sondage.introduction" class="sp-intro">{{ sondage.introduction }}</p>\r
    </div>\r
\r
    <!-- Alerte validation -->\r
    <div *ngIf="erreurMessage" class="sp-alert">\r
      <span>\u26A0</span> {{ erreurMessage }}\r
    </div>\r
\r
    <!-- Questions -->\r
    <div class="sp-questions">\r
      <div *ngFor="let q of questions; let i = index" class="sp-question">\r
\r
        <div class="sp-question-label">\r
          <span class="sp-num">{{ i + 1 }}</span>\r
          <span class="sp-text">\r
            {{ q.question }}\r
            <span *ngIf="q.est_obligatoire" class="sp-obligatoire" title="Obligatoire">*</span>\r
          </span>\r
        </div>\r
\r
        <p *ngIf="q.description" class="sp-description">{{ q.description }}</p>\r
\r
        <!-- TEXT -->\r
        <input *ngIf="q.type === 'text' || q.type === 'email' || q.type === 'numero'"\r
          [type]="q.type === 'numero' ? 'number' : q.type === 'email' ? 'email' : 'text'"\r
          class="sp-input"\r
          [(ngModel)]="reponses[q.id!]"\r
          [placeholder]="q.placeholder || ''"\r
          [attr.minlength]="q.min_caracteres || null"\r
          [attr.maxlength]="q.max_caracteres || null" />\r
\r
        <!-- TEXTAREA -->\r
        <textarea *ngIf="q.type === 'textarea'"\r
          class="sp-textarea"\r
          [(ngModel)]="reponses[q.id!]"\r
          [placeholder]="q.placeholder || ''"\r
          rows="4"\r
          [attr.minlength]="q.min_caracteres || null"\r
          [attr.maxlength]="q.max_caracteres || null"></textarea>\r
\r
        <!-- DATE -->\r
        <input *ngIf="q.type === 'date'"\r
          type="date"\r
          class="sp-input"\r
          [(ngModel)]="reponses[q.id!]" />\r
\r
        <!-- RADIO -->\r
        <div *ngIf="q.type === 'radio'" class="sp-options">\r
          <label *ngFor="let opt of q.options" class="sp-option">\r
            <input type="radio" [name]="'q' + q.id" [value]="opt" [(ngModel)]="reponses[q.id!]" />\r
            <span>{{ opt }}</span>\r
          </label>\r
        </div>\r
\r
        <!-- SELECT -->\r
        <select *ngIf="q.type === 'select'" class="sp-select" [(ngModel)]="reponses[q.id!]">\r
          <option value="" disabled selected>\u2014 Choisir \u2014</option>\r
          <option *ngFor="let opt of q.options" [value]="opt">{{ opt }}</option>\r
        </select>\r
\r
        <!-- CHECKBOX -->\r
        <div *ngIf="q.type === 'checkbox'" class="sp-options">\r
          <label *ngFor="let opt of q.options" class="sp-option">\r
            <input type="checkbox"\r
              [checked]="isChecked(q.id!, opt)"\r
              (change)="toggleCheckbox(q.id!, opt)" />\r
            <span>{{ opt }}</span>\r
          </label>\r
        </div>\r
\r
        <!-- ECHELLE -->\r
        <div *ngIf="q.type === 'echelle'" class="sp-echelle">\r
          <span class="sp-echelle-label">{{ q.valeur_min ?? 1 }}</span>\r
          <div class="sp-echelle-btns">\r
            <button *ngFor="let n of getEtoiles(+(q.valeur_max ?? 10) - +(q.valeur_min ?? 1) + 1)"\r
              type="button"\r
              class="sp-echelle-btn"\r
              [class.active]="reponses[q.id!] === (+(q.valeur_min ?? 1) + n - 1)"\r
              (click)="setNotation(q.id!, +(q.valeur_min ?? 1) + n - 1)">\r
              {{ +(q.valeur_min ?? 1) + n - 1 }}\r
            </button>\r
          </div>\r
          <span class="sp-echelle-label">{{ q.valeur_max ?? 10 }}</span>\r
        </div>\r
\r
        <!-- NOTATION (\xE9toiles) -->\r
        <div *ngIf="q.type === 'notation'" class="sp-notation">\r
          <button *ngFor="let star of getEtoiles(+(q.valeur_max ?? 5))"\r
            type="button"\r
            class="sp-star"\r
            [class.active]="reponses[q.id!] !== null && star <= reponses[q.id!]"\r
            (click)="setNotation(q.id!, star)"\r
            [attr.aria-label]="star + ' \xE9toile(s)'">\r
            \u2605\r
          </button>\r
          <span *ngIf="reponses[q.id!]" class="sp-star-label">{{ reponses[q.id!] }} / {{ q.valeur_max ?? 5 }}</span>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- Bouton soumettre -->\r
    <div class="sp-footer">\r
      <button class="sp-btn-submit" (click)="soumettre()" [disabled]="soumettre_loading">\r
        <span *ngIf="!soumettre_loading">Envoyer mes r\xE9ponses</span>\r
        <span *ngIf="soumettre_loading" class="sp-btn-spinner"></span>\r
      </button>\r
    </div>\r
\r
  </div><!-- /sp-wrap -->\r
\r
</div>\r
`, styles: ['/* src/app/features/sondage-public/sondage-public.component.scss */\n.sondage-public-page {\n  min-height: 100vh;\n  background: #f4f6f8;\n  font-family:\n    "Segoe UI",\n    Arial,\n    sans-serif;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 48px 16px 80px;\n}\n.sp-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 80px 16px;\n  color: #6b7280;\n}\n.sp-spinner,\n.sp-btn-spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.sp-btn-spinner {\n  width: 18px;\n  height: 18px;\n  border-width: 2px;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sp-card.sp-state {\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  padding: 56px 40px;\n  text-align: center;\n  max-width: 480px;\n  width: 100%;\n}\n.sp-card.sp-state h2 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 16px 0 8px;\n}\n.sp-card.sp-state p {\n  color: #6b7280;\n  font-size: 15px;\n  line-height: 1.6;\n  margin: 0;\n}\n.sp-card.sp-state .sp-muted {\n  font-size: 13px;\n  margin-top: 8px;\n}\n.sp-card.sp-state .sp-message-fin {\n  font-size: 16px;\n  color: #1f2937;\n}\n.sp-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  font-weight: 700;\n  margin: 0 auto;\n}\n.sp-icon--success {\n  background: #d1fae5;\n  color: #059669;\n}\n.sp-icon--warn {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.sp-icon--danger {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.sp-icon--muted {\n  background: #f3f4f6;\n  color: #9ca3af;\n}\n.sp-wrap {\n  width: 100%;\n  max-width: 680px;\n}\n.sp-header {\n  background: #ffffff;\n  border-radius: 16px 16px 0 0;\n  padding: 32px 40px 28px;\n  border-bottom: 3px solid #069b8f;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);\n}\n.sp-header .sp-logo {\n  font-size: 13px;\n  font-weight: 700;\n  color: #069b8f;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin-bottom: 12px;\n}\n.sp-header .sp-titre {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1f2937;\n  margin: 0 0 10px;\n}\n.sp-header .sp-intro {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.7;\n  margin: 0;\n}\n.sp-alert {\n  background: #fef3c7;\n  border: 1px solid #fcd34d;\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #92400e;\n  margin: 12px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sp-questions {\n  background: #ffffff;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);\n}\n.sp-question {\n  padding: 28px 40px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.sp-question:last-child {\n  border-bottom: none;\n}\n.sp-question-label {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.sp-question-label .sp-num {\n  flex-shrink: 0;\n  width: 26px;\n  height: 26px;\n  background: #069b8f;\n  color: #ffffff;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1px;\n}\n.sp-question-label .sp-text {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1f2937;\n  line-height: 1.5;\n}\n.sp-question-label .sp-obligatoire {\n  color: #ef4444;\n  margin-left: 3px;\n}\n.sp-description {\n  font-size: 13px;\n  color: #6b7280;\n  margin: -8px 0 12px 38px;\n  line-height: 1.6;\n}\n.sp-input,\n.sp-select,\n.sp-textarea {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #1f2937;\n  background: #ffffff;\n  transition: border-color 0.15s;\n  box-sizing: border-box;\n}\n.sp-input:focus,\n.sp-select:focus,\n.sp-textarea:focus {\n  outline: none;\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.sp-textarea {\n  resize: vertical;\n  min-height: 96px;\n}\n.sp-options {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sp-option {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  font-size: 14px;\n  color: #1f2937;\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  transition: background 0.12s, border-color 0.12s;\n}\n.sp-option:hover {\n  background: #f0fdf4;\n  border-color: #069b8f;\n}\n.sp-option input {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #069b8f;\n  flex-shrink: 0;\n}\n.sp-echelle {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.sp-echelle .sp-echelle-label {\n  font-size: 12px;\n  color: #6b7280;\n  min-width: 20px;\n  text-align: center;\n}\n.sp-echelle-btns {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.sp-echelle-btn {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #ffffff;\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sp-echelle-btn:hover,\n.sp-echelle-btn.active {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #ffffff;\n}\n.sp-notation {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sp-star {\n  font-size: 32px;\n  color: #d1d5db;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0 2px;\n  transition: color 0.12s, transform 0.1s;\n  line-height: 1;\n}\n.sp-star:hover,\n.sp-star.active {\n  color: #f59e0b;\n  transform: scale(1.1);\n}\n.sp-star-label {\n  font-size: 13px;\n  color: #6b7280;\n  margin-left: 8px;\n}\n.sp-footer {\n  background: #ffffff;\n  padding: 28px 40px;\n  border-radius: 0 0 16px 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);\n  display: flex;\n  justify-content: flex-end;\n}\n.sp-btn-submit {\n  background: #069b8f;\n  color: #ffffff;\n  border: none;\n  padding: 12px 32px;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 180px;\n  justify-content: center;\n}\n.sp-btn-submit:hover:not(:disabled) {\n  background: #047a70;\n}\n.sp-btn-submit:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 600px) {\n  .sondage-public-page {\n    padding: 24px 8px 60px;\n  }\n  .sp-header,\n  .sp-question,\n  .sp-footer {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .sp-question-label .sp-text {\n    font-size: 14px;\n  }\n  .sp-echelle-btn {\n    width: 34px;\n    height: 34px;\n  }\n  .sp-star {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=sondage-public.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: SondageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SondagePublicComponent, { className: "SondagePublicComponent", filePath: "app/features/sondage-public/sondage-public.component.ts", lineNumber: 16 });
})();
export {
  SondagePublicComponent
};
//# sourceMappingURL=chunk-2WYBMUNU.js.map
