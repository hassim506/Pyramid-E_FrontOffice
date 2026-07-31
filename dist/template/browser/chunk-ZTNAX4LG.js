import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  ClientCompanyService
} from "./chunk-X44DCWVU.js";
import {
  SondageService
} from "./chunk-NYC46I4P.js";
import {
  FormationService
} from "./chunk-QDYFEC2R.js";
import "./chunk-K7E3GT3E.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ZGFJXD53.js";
import "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  DatePipe,
  KeyValuePipe,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  UpperCasePipe
} from "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  Subject,
  debounceTime,
  distinctUntilChanged,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
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

// src/app/features/superadmin/superadmin-sondage/superadmin-sondage.component.ts
var _c0 = (a0) => ({ $implicit: a0, editable: true });
var _c1 = (a0) => ({ $implicit: a0, editable: false });
var _c2 = () => [];
function SuperadminSondageComponent_ng_container_0_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2, "\xC9valuation \xE0 chaud");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2014 Envoy\xE9e imm\xE9diatement apr\xE8s la fin d'une formation. ");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2, "\xC9valuation \xE0 froid");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2014 Envoy\xE9e automatiquement X jours apr\xE8s la formation. ");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2, "Enqu\xEAtes libres");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2014 Envoy\xE9es manuellement \xE0 tous les employ\xE9s ou aux participants d'une formation. ");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreate(ctx_r1.categorieActive, true));
    });
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2, " Nouveau mod\xE8le global ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouvelle \xE9valuation \xE0 chaud");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouvelle \xE9valuation \xE0 froid");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouvelle enqu\xEAte");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_option_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    \u0275\u0275property("value", e_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r4.nom);
  }
}
function SuperadminSondageComponent_ng_container_0_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 37);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_div_59_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error);
  }
}
function SuperadminSondageComponent_ng_container_0_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_1_div_8_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7.description);
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "div", 46);
    \u0275\u0275elementStart(2, "div", 47)(3, "div", 48)(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 50);
    \u0275\u0275element(7, "i", 34);
    \u0275\u0275text(8, " Mod\xE8le global");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h6", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_1_div_8_p_11_Template, 2, 1, "p", 52);
    \u0275\u0275elementStart(12, "div", 53)(13, "span");
    \u0275\u0275element(14, "i", 54);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 55)(17, "button", 56);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_1_div_8_Template_button_click_17_listener() {
      const s_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openQuestions(s_r7));
    });
    \u0275\u0275element(18, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 58);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_1_div_8_Template_button_click_19_listener() {
      const s_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openEdit(s_r7));
    });
    \u0275\u0275element(20, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 60);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_1_div_8_Template_button_click_21_listener() {
      const s_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(s_r7.id));
    });
    \u0275\u0275element(22, "i", 61);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.typeColor(s_r7.type));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.typeColor(s_r7.type) + "18")("color", ctx_r1.typeColor(s_r7.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.typeLabel(s_r7.type), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r7.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r7.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", s_r7.nombre_questions, " question", s_r7.nombre_questions !== 1 ? "s" : "");
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 40)(2, "div", 41);
    \u0275\u0275element(3, "i", 34);
    \u0275\u0275text(4, " Mod\xE8les globaux ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6, "Partag\xE9s avec toutes les entreprises");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 43);
    \u0275\u0275template(8, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_1_div_8_Template, 23, 11, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.templatesCourants);
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 67);
    \u0275\u0275element(2, "i", 68);
    \u0275\u0275text(3, " Par entreprise ");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r9.description);
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 88);
    \u0275\u0275text(1, "Aucune description");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ~", s_r9.duree_estimee, " min");
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r10);
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEntrepriseNom(s_r9.entreprise_id));
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1, "Anonyme");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("J+", s_r9.delai_jours);
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 46);
    \u0275\u0275elementStart(2, "div", 47)(3, "div", 48)(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 70);
    \u0275\u0275element(7, "i", 71);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h6", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_p_11_Template, 2, 1, "p", 52)(12, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_p_12_Template, 2, 0, "p", 72);
    \u0275\u0275elementStart(13, "div", 53)(14, "span");
    \u0275\u0275element(15, "i", 54);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275element(18, "i", 73);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_span_20_Template, 3, 1, "span", 1)(21, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_span_21_Template, 3, 1, "span", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 75);
    \u0275\u0275template(23, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_span_23_Template, 3, 1, "span", 76)(24, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_span_24_Template, 2, 0, "span", 77)(25, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_span_25_Template, 2, 1, "span", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 55)(27, "button", 56);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_Template_button_click_27_listener() {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openQuestions(s_r9));
    });
    \u0275\u0275element(28, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 79);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_Template_button_click_29_listener() {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openStats(s_r9));
    });
    \u0275\u0275element(30, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 81);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_Template_button_click_31_listener() {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openResultats(s_r9));
    });
    \u0275\u0275element(32, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 83);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_Template_button_click_33_listener() {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openEnvoyer(s_r9));
    });
    \u0275\u0275element(34, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 58);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_Template_button_click_35_listener() {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openEdit(s_r9));
    });
    \u0275\u0275element(36, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 85);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_Template_button_click_37_listener() {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleActif(s_r9));
    });
    \u0275\u0275element(38, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 86);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_Template_button_click_39_listener() {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.exportCsv(s_r9));
    });
    \u0275\u0275element(40, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 60);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_Template_button_click_41_listener() {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(s_r9.id));
    });
    \u0275\u0275element(42, "i", 61);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.typeColor(s_r9.type));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.typeColor(s_r9.type) + "18")("color", ctx_r1.typeColor(s_r9.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(s_r9.type));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatutClass(s_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatutLabel(s_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r9.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r9.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r9.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", s_r9.nombre_questions, " question", s_r9.nombre_questions !== 1 ? "s" : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", s_r9.nombre_reponses, " r\xE9ponse", s_r9.nombre_reponses !== 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r9.duree_estimee);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getFormationsTitres(s_r9));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r9.entreprise_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r9.est_anonyme);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "a_froid" && s_r9.delai_jours);
    \u0275\u0275advance(12);
    \u0275\u0275property("title", s_r9.est_actif ? "Archiver" : "Publier");
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r9.est_actif ? "isax isax-archive" : "isax isax-refresh");
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_4_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Aucune \xE9valuation \xE0 chaud");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_4_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Aucune \xE9valuation \xE0 froid");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275template(2, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_4_p_2_Template, 2, 0, "p", 1)(3, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_4_p_3_Template, 2, 0, "p", 1);
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openCreate(ctx_r1.categorieActive, false));
    });
    \u0275\u0275text(5, "Cr\xE9er maintenant");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "a_chaud");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "a_froid");
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_1_Template, 4, 0, "div", 63);
    \u0275\u0275elementStart(2, "div", 64);
    \u0275\u0275template(3, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_3_Template, 43, 25, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_div_4_Template, 6, 2, "div", 66);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sondagesCourants.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.sondagesCourants);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sondagesCourants.length === 0 && ctx_r1.templatesCourants.length === 0);
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 40)(2, "div", 41);
    \u0275\u0275element(3, "i", 34);
    \u0275\u0275text(4, " Mes enqu\xEAtes globales ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6, "Cr\xE9\xE9es par vous, envoy\xE9es aux entreprises cibles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64);
    \u0275\u0275template(8, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_ng_container_1_ng_container_8_Template, 1, 0, "ng-container", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const cardEnquete_r12 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngTemplateOutlet", cardEnquete_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, ctx_r1.enquetesSuperadmin));
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_ng_container_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 40)(2, "div", 67);
    \u0275\u0275element(3, "i", 68);
    \u0275\u0275text(4, " Enqu\xEAtes des entreprises ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6, "Cr\xE9\xE9es par les AdminRH de leurs entreprises");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64);
    \u0275\u0275template(8, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_ng_container_2_ng_container_8_Template, 1, 0, "ng-container", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const cardEnquete_r12 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("margin-top", ctx_r1.enquetesSuperadmin.length > 0 ? "24px" : "0");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngTemplateOutlet", cardEnquete_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c1, ctx_r1.enquetesEntreprises));
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune enqu\xEAte cr\xE9\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openCreate("enquete", false));
    });
    \u0275\u0275text(5, "Cr\xE9er maintenant");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_ng_container_1_Template, 9, 4, "ng-container", 1)(2, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_ng_container_2_Template, 9, 6, "ng-container", 1)(3, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_div_3_Template, 6, 0, "div", 66);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enquetesSuperadmin.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enquetesEntreprises.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sondagesEnquete.length === 0);
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r15.description);
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 88);
    \u0275\u0275text(1, "Aucune description");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ~", s_r15.duree_estimee, " min");
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_ng_container_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nom_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", nom_r16, " ");
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_ng_container_22_span_1_Template, 3, 1, "span", 97);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getCibleEntreprisesNoms(s_r15));
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEntrepriseNom(s_r15.entreprise_id), " ");
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1, "Anonyme");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 56);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_ng_container_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const s_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openQuestions(s_r15));
    });
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 58);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_ng_container_26_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const s_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openEdit(s_r15));
    });
    \u0275\u0275element(4, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 85);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_ng_container_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const s_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleActif(s_r15));
    });
    \u0275\u0275element(6, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("title", s_r15.est_actif ? "Archiver" : "Publier");
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r15.est_actif ? "isax isax-archive" : "isax isax-refresh");
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 60);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_ng_container_35_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const s_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(s_r15.id));
    });
    \u0275\u0275element(2, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 46);
    \u0275\u0275elementStart(2, "div", 47)(3, "div", 48)(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 70);
    \u0275\u0275element(7, "i", 71);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h6", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_p_11_Template, 2, 1, "p", 52)(12, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_p_12_Template, 2, 0, "p", 72);
    \u0275\u0275elementStart(13, "div", 53)(14, "span");
    \u0275\u0275element(15, "i", 54);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275element(18, "i", 73);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_span_20_Template, 3, 1, "span", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 75);
    \u0275\u0275template(22, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_ng_container_22_Template, 2, 1, "ng-container", 1)(23, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_span_23_Template, 3, 1, "span", 76)(24, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_span_24_Template, 2, 0, "span", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 55);
    \u0275\u0275template(26, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_ng_container_26_Template, 7, 3, "ng-container", 1);
    \u0275\u0275elementStart(27, "button", 79);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_Template_button_click_27_listener() {
      const s_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openStats(s_r15));
    });
    \u0275\u0275element(28, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 81);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_Template_button_click_29_listener() {
      const s_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openResultats(s_r15));
    });
    \u0275\u0275element(30, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 83);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_Template_button_click_31_listener() {
      const s_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openEnvoyer(s_r15));
    });
    \u0275\u0275element(32, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 86);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_Template_button_click_33_listener() {
      const s_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.exportCsv(s_r15));
    });
    \u0275\u0275element(34, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_ng_container_35_Template, 3, 0, "ng-container", 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r15 = ctx.$implicit;
    const editable_r19 = \u0275\u0275nextContext().editable;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ip-sondage-card--readonly", !editable_r19);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.typeColor(s_r15.type));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.typeColor(s_r15.type) + "18")("color", ctx_r1.typeColor(s_r15.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(s_r15.type));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatutClass(s_r15));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatutLabel(s_r15));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r15.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r15.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r15.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", s_r15.nombre_questions, " question", s_r15.nombre_questions !== 1 ? "s" : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", s_r15.nombre_reponses, " r\xE9ponse", s_r15.nombre_reponses !== 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r15.duree_estimee);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !s_r15.entreprise_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r15.entreprise_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r15.est_anonyme);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", editable_r19);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", editable_r19);
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_div_0_Template, 36, 25, "div", 96);
  }
  if (rf & 2) {
    const list_r20 = ctx.$implicit;
    \u0275\u0275property("ngForOf", list_r20);
  }
}
function SuperadminSondageComponent_ng_container_0_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_1_Template, 9, 1, "ng-container", 1)(2, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_2_Template, 5, 3, "ng-container", 1)(3, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_container_3_Template, 4, 3, "ng-container", 1)(4, SuperadminSondageComponent_ng_container_0_ng_container_61_ng_template_4_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive !== "enquete" && ctx_r1.templatesCourants.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive !== "enquete");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "enquete");
  }
}
function SuperadminSondageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div")(3, "h5", 4);
    \u0275\u0275text(4, "Sondages & enqu\xEAtes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6, "G\xE9rez les mod\xE8les globaux et les sondages de toutes les entreprises");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCategorie("a_chaud"));
    });
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\xC9valuation \xE0 chaud");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 7);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCategorie("a_froid"));
    });
    \u0275\u0275element(15, "i", 10);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\xC9valuation \xE0 froid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 9);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 7);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCategorie("enquete"));
    });
    \u0275\u0275element(21, "i", 11);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Enqu\xEAtes libres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 9);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 12)(27, "div", 13);
    \u0275\u0275template(28, SuperadminSondageComponent_ng_container_0_ng_container_28_Template, 4, 0, "ng-container", 1)(29, SuperadminSondageComponent_ng_container_0_ng_container_29_Template, 4, 0, "ng-container", 1)(30, SuperadminSondageComponent_ng_container_0_ng_container_30_Template, 4, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 14);
    \u0275\u0275template(32, SuperadminSondageComponent_ng_container_0_button_32_Template, 3, 0, "button", 15);
    \u0275\u0275elementStart(33, "button", 16);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate(ctx_r1.categorieActive, false));
    });
    \u0275\u0275element(34, "i", 17);
    \u0275\u0275template(35, SuperadminSondageComponent_ng_container_0_ng_container_35_Template, 2, 0, "ng-container", 1)(36, SuperadminSondageComponent_ng_container_0_ng_container_36_Template, 2, 0, "ng-container", 1)(37, SuperadminSondageComponent_ng_container_0_ng_container_37_Template, 2, 0, "ng-container", 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 18)(39, "div", 19)(40, "div", 20)(41, "div", 21);
    \u0275\u0275element(42, "i", 22);
    \u0275\u0275elementStart(43, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_0_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SuperadminSondageComponent_ng_container_0_Template_input_ngModelChange_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 24)(45, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_0_Template_select_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterEntrepriseId, $event) || (ctx_r1.filterEntrepriseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SuperadminSondageComponent_ng_container_0_Template_select_ngModelChange_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadAll());
    });
    \u0275\u0275elementStart(46, "option", 26);
    \u0275\u0275text(47, "Toutes les entreprises");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 27);
    \u0275\u0275text(49, "Mod\xE8les globaux uniquement");
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, SuperadminSondageComponent_ng_container_0_option_50_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 24)(52, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_0_Template_select_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterActif, $event) || (ctx_r1.filterActif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SuperadminSondageComponent_ng_container_0_Template_select_ngModelChange_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadAll());
    });
    \u0275\u0275elementStart(53, "option", 26);
    \u0275\u0275text(54, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 29);
    \u0275\u0275text(56, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 30);
    \u0275\u0275text(58, "Inactif");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(59, SuperadminSondageComponent_ng_container_0_div_59_Template, 3, 1, "div", 31)(60, SuperadminSondageComponent_ng_container_0_div_60_Template, 2, 0, "div", 32)(61, SuperadminSondageComponent_ng_container_0_ng_container_61_Template, 6, 3, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("active", ctx_r1.categorieActive === "a_chaud");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.templatesChaud.length + ctx_r1.sondagesChaud.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.categorieActive === "a_froid");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.templatesFroid.length + ctx_r1.sondagesFroid.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.categorieActive === "enquete");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.sondagesEnquete.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "a_chaud");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "a_froid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "enquete");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.categorieActive !== "enquete");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "a_chaud");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "a_froid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "enquete");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.search);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterEntrepriseId);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.entreprises);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterActif);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
  }
}
function SuperadminSondageComponent_ng_container_1_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouvelle \xE9valuation \xE0 chaud");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_1_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouvelle \xE9valuation \xE0 froid");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_1_ng_container_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouvelle enqu\xEAte libre");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminSondageComponent_ng_container_1_ng_container_7_ng_container_1_Template, 2, 0, "ng-container", 1)(2, SuperadminSondageComponent_ng_container_1_ng_container_7_ng_container_2_Template, 2, 0, "ng-container", 1)(3, SuperadminSondageComponent_ng_container_1_ng_container_7_ng_container_3_Template, 2, 0, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCategorie === "a_chaud");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCategorie === "a_froid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCategorie === "enquete");
  }
}
function SuperadminSondageComponent_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Modifier \u2014 ", ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.titre);
  }
}
function SuperadminSondageComponent_ng_container_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275text(2, " \xC0 chaud ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 140);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2, " \xC0 froid ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 141);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2, " Enqu\xEAte libre ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function SuperadminSondageComponent_ng_container_1_option_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r22 = ctx.$implicit;
    \u0275\u0275property("value", e_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r22.nom);
  }
}
function SuperadminSondageComponent_ng_container_1_div_49_label_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 149)(1, "input", 150);
    \u0275\u0275listener("change", function SuperadminSondageComponent_ng_container_1_div_49_label_10_Template_input_change_1_listener() {
      const e_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleCibleEntreprise(e_r25.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.isCibleEntrepriseSelected(e_r25.id));
    \u0275\u0275property("title", e_r25.nom);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isCibleEntrepriseSelected(e_r25.id))("title", e_r25.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r25.nom);
  }
}
function SuperadminSondageComponent_ng_container_1_div_49_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275text(1, "Aucune entreprise disponible");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_1_div_49_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.allCibleEntreprisesSelected ? "Toutes les entreprises s\xE9lectionn\xE9es" : ctx_r1.formCibleEntrepriseIds.length + " entreprise" + (ctx_r1.formCibleEntrepriseIds.length > 1 ? "s" : "") + " s\xE9lectionn\xE9e" + (ctx_r1.formCibleEntrepriseIds.length > 1 ? "s" : ""), " ");
  }
}
function SuperadminSondageComponent_ng_container_1_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "label", 110);
    \u0275\u0275text(2, " Entreprise(s) cible(s) ");
    \u0275\u0275elementStart(3, "span", 118);
    \u0275\u0275text(4, "(employ\xE9s qui recevront l'enqu\xEAte)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 143)(6, "label", 144)(7, "input", 145);
    \u0275\u0275listener("change", function SuperadminSondageComponent_ng_container_1_div_49_Template_input_change_7_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAllCibleEntreprises());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Toutes les entreprises");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, SuperadminSondageComponent_ng_container_1_div_49_label_10_Template, 4, 6, "label", 146)(11, SuperadminSondageComponent_ng_container_1_div_49_div_11_Template, 2, 0, "div", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SuperadminSondageComponent_ng_container_1_div_49_div_12_Template, 2, 1, "div", 148);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("selected", ctx_r1.allCibleEntreprisesSelected);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.allCibleEntreprisesSelected);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.entreprises);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entreprises.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCibleEntrepriseIds.length > 0);
  }
}
function SuperadminSondageComponent_ng_container_1_div_50_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1, "Chargement des formations\u2026");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_1_div_50_div_6_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 149)(1, "input", 150);
    \u0275\u0275listener("change", function SuperadminSondageComponent_ng_container_1_div_50_div_6_label_5_Template_input_change_1_listener() {
      const f_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleFormation(f_r28.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r1.isFormationSelected(f_r28.id));
    \u0275\u0275property("title", f_r28.titre);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isFormationSelected(f_r28.id))("title", f_r28.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r28.titre);
  }
}
function SuperadminSondageComponent_ng_container_1_div_50_div_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275text(1, "Aucune formation disponible");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_1_div_50_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143)(1, "label", 156)(2, "input", 157);
    \u0275\u0275listener("change", function SuperadminSondageComponent_ng_container_1_div_50_div_6_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAllFormations());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Toutes les formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, SuperadminSondageComponent_ng_container_1_div_50_div_6_label_5_Template, 4, 6, "label", 146)(6, SuperadminSondageComponent_ng_container_1_div_50_div_6_div_6_Template, 2, 0, "div", 158);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r1.allFormationsSelected);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.allFormationsSelected);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.formations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formations.length === 0);
  }
}
function SuperadminSondageComponent_ng_container_1_div_50_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.allFormationsSelected ? "Toutes les formations s\xE9lectionn\xE9es" : ctx_r1.formFormationIds.length + " formation" + (ctx_r1.formFormationIds.length > 1 ? "s" : "") + " s\xE9lectionn\xE9e" + (ctx_r1.formFormationIds.length > 1 ? "s" : ""), " ");
  }
}
function SuperadminSondageComponent_ng_container_1_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "label", 110);
    \u0275\u0275text(2, " Formation(s) li\xE9e(s) ");
    \u0275\u0275elementStart(3, "span", 111);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, SuperadminSondageComponent_ng_container_1_div_50_div_5_Template, 2, 0, "div", 153)(6, SuperadminSondageComponent_ng_container_1_div_50_div_6_Template, 7, 5, "div", 154)(7, SuperadminSondageComponent_ng_container_1_div_50_div_7_Template, 2, 1, "div", 148);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.formationsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.formationsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formFormationIds.length > 0);
  }
}
function SuperadminSondageComponent_ng_container_1_ng_container_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\xC0 chaud \u2014 imm\xE9diatement apr\xE8s la formation");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_1_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\xC0 froid \u2014 apr\xE8s un d\xE9lai");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_1_ng_container_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Manuel (enqu\xEAte libre)");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_1_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123)(1, "label", 110);
    \u0275\u0275text(2, "D\xE9lai apr\xE8s la formation (jours)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 160);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_div_74_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.delai_jours, $event) || (ctx_r1.form.delai_jours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.delai_jours);
  }
}
function SuperadminSondageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div")(3, "button", 98);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275element(4, "i", 99);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 100);
    \u0275\u0275template(7, SuperadminSondageComponent_ng_container_1_ng_container_7_Template, 4, 3, "ng-container", 1)(8, SuperadminSondageComponent_ng_container_1_ng_container_8_Template, 2, 1, "ng-container", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SuperadminSondageComponent_ng_container_1_span_9_Template, 3, 0, "span", 101)(10, SuperadminSondageComponent_ng_container_1_span_10_Template, 3, 0, "span", 102)(11, SuperadminSondageComponent_ng_container_1_span_11_Template, 3, 0, "span", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, SuperadminSondageComponent_ng_container_1_div_12_Template, 2, 1, "div", 104);
    \u0275\u0275elementStart(13, "div", 105)(14, "div", 106)(15, "div", 107);
    \u0275\u0275element(16, "i", 108);
    \u0275\u0275text(17, " Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 109)(19, "label", 110);
    \u0275\u0275text(20, "Titre ");
    \u0275\u0275elementStart(21, "span", 111);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.titre, $event) || (ctx_r1.form.titre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 109)(25, "label", 110);
    \u0275\u0275text(26, "Type ");
    \u0275\u0275elementStart(27, "span", 111);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option", 113);
    \u0275\u0275text(31, "Sondage de satisfaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 114);
    \u0275\u0275text(33, "\xC9valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 115);
    \u0275\u0275text(35, "Retour d'exp\xE9rience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 116);
    \u0275\u0275text(37, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 117);
    \u0275\u0275text(39, "Enqu\xEAte");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 109)(41, "label", 110);
    \u0275\u0275text(42, " Port\xE9e ");
    \u0275\u0275elementStart(43, "span", 118);
    \u0275\u0275text(44, "(mod\xE8le global = visible par toutes les entreprises)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_select_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formEntrepriseId, $event) || (ctx_r1.formEntrepriseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_select_ngModelChange_45_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEntrepriseChange());
    });
    \u0275\u0275elementStart(46, "option", 26);
    \u0275\u0275text(47, "Mod\xE8le global (toutes entreprises)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, SuperadminSondageComponent_ng_container_1_option_48_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, SuperadminSondageComponent_ng_container_1_div_49_Template, 13, 6, "div", 119)(50, SuperadminSondageComponent_ng_container_1_div_50_Template, 8, 3, "div", 119);
    \u0275\u0275elementStart(51, "div", 109)(52, "label", 110);
    \u0275\u0275text(53, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "textarea", 120);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_textarea_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 109)(56, "label", 110);
    \u0275\u0275text(57, "Message d'introduction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "textarea", 121);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_textarea_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.introduction, $event) || (ctx_r1.form.introduction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 109)(60, "label", 110);
    \u0275\u0275text(61, "Message de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "textarea", 122);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_textarea_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.message_fin, $event) || (ctx_r1.form.message_fin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 106)(64, "div", 107);
    \u0275\u0275element(65, "i", 59);
    \u0275\u0275text(66, " Param\xE8tres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 123)(68, "label", 110);
    \u0275\u0275text(69, "D\xE9clenchement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 124);
    \u0275\u0275template(71, SuperadminSondageComponent_ng_container_1_ng_container_71_Template, 2, 0, "ng-container", 1)(72, SuperadminSondageComponent_ng_container_1_ng_container_72_Template, 2, 0, "ng-container", 1)(73, SuperadminSondageComponent_ng_container_1_ng_container_73_Template, 2, 0, "ng-container", 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(74, SuperadminSondageComponent_ng_container_1_div_74_Template, 4, 1, "div", 125);
    \u0275\u0275elementStart(75, "div", 123)(76, "label", 110);
    \u0275\u0275text(77, "Dur\xE9e estim\xE9e (min)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_input_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.duree_estimee, $event) || (ctx_r1.form.duree_estimee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 123)(80, "label", 110);
    \u0275\u0275text(81, "Tentatives max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_input_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nombre_tentatives_max, $event) || (ctx_r1.form.nombre_tentatives_max = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 123)(84, "label", 110);
    \u0275\u0275text(85, "Date de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "input", 128);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_input_ngModelChange_86_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.date_debut, $event) || (ctx_r1.form.date_debut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 123)(88, "label", 110);
    \u0275\u0275text(89, "Date de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "input", 128);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_input_ngModelChange_90_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.date_fin, $event) || (ctx_r1.form.date_fin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(91, "div", 129);
    \u0275\u0275elementStart(92, "div", 130)(93, "div")(94, "div", 131);
    \u0275\u0275text(95, "Sondage actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 132);
    \u0275\u0275text(97, "Visible et accessible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "label", 133)(99, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_input_ngModelChange_99_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.est_actif, $event) || (ctx_r1.form.est_actif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(100, "span", 135);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 130)(102, "div")(103, "div", 131);
    \u0275\u0275text(104, "Anonyme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "div", 132);
    \u0275\u0275text(106, "R\xE9ponses non li\xE9es \xE0 l'utilisateur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "label", 133)(108, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_input_ngModelChange_108_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.est_anonyme, $event) || (ctx_r1.form.est_anonyme = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(109, "span", 135);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 130)(111, "div")(112, "div", 131);
    \u0275\u0275text(113, "Obligatoire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "div", 132);
    \u0275\u0275text(115, "L'employ\xE9 doit r\xE9pondre");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "label", 133)(117, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_input_ngModelChange_117_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.est_obligatoire, $event) || (ctx_r1.form.est_obligatoire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(118, "span", 135);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "div", 130)(120, "div")(121, "div", 131);
    \u0275\u0275text(122, "Retour en arri\xE8re");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "div", 132);
    \u0275\u0275text(124, "Modifier les r\xE9ponses pr\xE9c\xE9dentes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "label", 133)(126, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_input_ngModelChange_126_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.autorise_retour, $event) || (ctx_r1.form.autorise_retour = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(127, "span", 135);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "div", 130)(129, "div")(130, "div", 131);
    \u0275\u0275text(131, "Afficher la progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 132);
    \u0275\u0275text(133, "Barre de progression visible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "label", 133)(135, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_1_Template_input_ngModelChange_135_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.afficher_progres, $event) || (ctx_r1.form.afficher_progres = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(136, "span", 135);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 136)(138, "button", 137);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_1_Template_button_click_138_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveSondage());
    });
    \u0275\u0275element(139, "i", 138);
    \u0275\u0275text(140);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.tab === "creer");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tab === "editer");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCategorie === "a_chaud");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCategorie === "a_froid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCategorie === "enquete");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formError);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.titre);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formEntrepriseId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.entreprises);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCategorie === "enquete");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formEntrepriseId && ctx_r1.formCategorie !== "enquete");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.introduction);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.message_fin);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.formCategorie === "a_chaud");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCategorie === "a_froid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCategorie === "enquete");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCategorie === "a_froid");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.duree_estimee);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nombre_tentatives_max);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.date_debut);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.date_fin);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.est_actif);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.est_anonyme);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.est_obligatoire);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.autorise_retour);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.afficher_progres);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Enregistrement\u2026" : ctx_r1.tab === "creer" ? "Cr\xE9er et ajouter des questions" : "Enregistrer", " ");
  }
}
function SuperadminSondageComponent_ng_container_2_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.questionError);
  }
}
function SuperadminSondageComponent_ng_container_2_div_13_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r32 = ctx.$implicit;
    \u0275\u0275property("value", t_r32.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r32.label);
  }
}
function SuperadminSondageComponent_ng_container_2_div_13_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "label", 110);
    \u0275\u0275text(2, "Description / aide (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 175);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_2_div_13_div_19_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingQuestion.aide, $event) || (ctx_r1.editingQuestion.aide = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editingQuestion.aide);
  }
}
function SuperadminSondageComponent_ng_container_2_div_13_div_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 181)(1, "span", 182);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 183);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_2_div_13_div_20_div_4_Template_button_click_3_listener() {
      const i_r36 = \u0275\u0275restoreView(_r35).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeOption(i_r36));
    });
    \u0275\u0275element(4, "i", 184);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r37 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r37);
  }
}
function SuperadminSondageComponent_ng_container_2_div_13_div_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1, "Aucune option ajout\xE9e");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_2_div_13_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 176)(1, "label", 110);
    \u0275\u0275text(2, "Options de r\xE9ponse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 177);
    \u0275\u0275template(4, SuperadminSondageComponent_ng_container_2_div_13_div_20_div_4_Template, 5, 1, "div", 178)(5, SuperadminSondageComponent_ng_container_2_div_13_div_20_div_5_Template, 2, 0, "div", 153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 179)(7, "input", 180);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_2_div_13_div_20_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newOptionText, $event) || (ctx_r1.newOptionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function SuperadminSondageComponent_ng_container_2_div_13_div_20_Template_input_keyup_enter_7_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addOption());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 98);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_2_div_13_div_20_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addOption());
    });
    \u0275\u0275element(9, "i", 17);
    \u0275\u0275text(10, " Ajouter ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.editingQuestion.options || \u0275\u0275pureFunction0(3, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r1.editingQuestion.options == null ? null : ctx_r1.editingQuestion.options.length) ?? 0) === 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOptionText);
  }
}
function SuperadminSondageComponent_ng_container_2_div_13_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "label", 110);
    \u0275\u0275text(2, "Valeur min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 185);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_2_div_13_div_21_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingQuestion.valeur_min, $event) || (ctx_r1.editingQuestion.valeur_min = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editingQuestion.valeur_min);
  }
}
function SuperadminSondageComponent_ng_container_2_div_13_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "label", 110);
    \u0275\u0275text(2, "Valeur max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 186);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_2_div_13_div_22_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingQuestion.valeur_max, $event) || (ctx_r1.editingQuestion.valeur_max = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editingQuestion.valeur_max);
  }
}
function SuperadminSondageComponent_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 165)(1, "div", 107);
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SuperadminSondageComponent_ng_container_2_div_13_div_4_Template, 2, 1, "div", 166);
    \u0275\u0275elementStart(5, "div", 167)(6, "div", 109)(7, "label", 110);
    \u0275\u0275text(8, "Question ");
    \u0275\u0275elementStart(9, "span", 111);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 168);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_2_div_13_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingQuestion.question, $event) || (ctx_r1.editingQuestion.question = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 109)(13, "label", 110);
    \u0275\u0275text(14, "Type ");
    \u0275\u0275elementStart(15, "span", 111);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_2_div_13_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingQuestion.type, $event) || (ctx_r1.editingQuestion.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(18, SuperadminSondageComponent_ng_container_2_div_13_option_18_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, SuperadminSondageComponent_ng_container_2_div_13_div_19_Template, 4, 1, "div", 119)(20, SuperadminSondageComponent_ng_container_2_div_13_div_20_Template, 11, 4, "div", 169)(21, SuperadminSondageComponent_ng_container_2_div_13_div_21_Template, 4, 1, "div", 119)(22, SuperadminSondageComponent_ng_container_2_div_13_div_22_Template, 4, 1, "div", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 170)(24, "div", 171)(25, "div", 131);
    \u0275\u0275text(26, "Obligatoire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label", 133)(28, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminSondageComponent_ng_container_2_div_13_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingQuestion.est_obligatoire, $event) || (ctx_r1.editingQuestion.est_obligatoire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "span", 135);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 172)(31, "button", 33);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_2_div_13_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelQuestion());
    });
    \u0275\u0275text(32, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 16);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_2_div_13_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveQuestion());
    });
    \u0275\u0275element(34, "i", 173);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingQuestion.id ? "Modifier la question" : "Nouvelle question", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.questionError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editingQuestion.question);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editingQuestion.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.questionTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingQuestion.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.needsOptions(ctx_r1.editingQuestion.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasEchelle(ctx_r1.editingQuestion.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasEchelle(ctx_r1.editingQuestion.type));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editingQuestion.est_obligatoire);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingQuestion.id ? "Mettre \xE0 jour" : "Ajouter la question", " ");
  }
}
function SuperadminSondageComponent_ng_container_2_div_15_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 197);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_2_div_15_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 155);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r41 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", q_r41.options.length, " option", q_r41.options.length !== 1 ? "s" : "", " ");
  }
}
function SuperadminSondageComponent_ng_container_2_div_15_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 155);
    \u0275\u0275element(1, "i", 198);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r41 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", q_r41.aide, " ");
  }
}
function SuperadminSondageComponent_ng_container_2_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 189)(1, "div", 190);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 191)(4, "div", 192);
    \u0275\u0275text(5);
    \u0275\u0275template(6, SuperadminSondageComponent_ng_container_2_div_15_div_1_span_6_Template, 2, 0, "span", 193);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 194)(8, "span", 195);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SuperadminSondageComponent_ng_container_2_div_15_div_1_span_10_Template, 2, 2, "span", 153)(11, SuperadminSondageComponent_ng_container_2_div_15_div_1_span_11_Template, 3, 1, "span", 153);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 196)(13, "button", 58);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_2_div_15_div_1_Template_button_click_13_listener() {
      const q_r41 = \u0275\u0275restoreView(_r40).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editQuestion(q_r41));
    });
    \u0275\u0275element(14, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 60);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_2_div_15_div_1_Template_button_click_15_listener() {
      const q_r41 = \u0275\u0275restoreView(_r40).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteQuestion(q_r41.id));
    });
    \u0275\u0275element(16, "i", 61);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r41 = ctx.$implicit;
    const i_r42 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r42 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", q_r41.question, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r41.est_obligatoire);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getQuestionTypeLabel(q_r41.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r41.options && q_r41.options.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r41.aide);
  }
}
function SuperadminSondageComponent_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275template(1, SuperadminSondageComponent_ng_container_2_div_15_div_1_Template, 17, 6, "div", 188);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.questions);
  }
}
function SuperadminSondageComponent_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, 'Aucune question \u2014 cliquez sur "Ajouter une question"');
    \u0275\u0275elementEnd()();
  }
}
function SuperadminSondageComponent_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 200)(1, "div", 201);
    \u0275\u0275element(2, "i", 202);
    \u0275\u0275elementStart(3, "p", 203);
    \u0275\u0275text(4, "Supprimer cette question ? Les r\xE9ponses associ\xE9es seront aussi supprim\xE9es.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 204)(6, "button", 33);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_2_div_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteQId = null);
    });
    \u0275\u0275text(7, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 205);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_2_div_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteQuestion());
    });
    \u0275\u0275text(9, "Supprimer");
    \u0275\u0275elementEnd()()()();
  }
}
function SuperadminSondageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div")(3, "button", 98);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275element(4, "i", 99);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 100);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 5);
    \u0275\u0275text(9, "G\xE9rer les questions du sondage");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 16);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newQuestion());
    });
    \u0275\u0275element(11, "i", 17);
    \u0275\u0275text(12, " Ajouter une question ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, SuperadminSondageComponent_ng_container_2_div_13_Template, 36, 11, "div", 161);
    \u0275\u0275elementStart(14, "div", 162);
    \u0275\u0275template(15, SuperadminSondageComponent_ng_container_2_div_15_Template, 2, 1, "div", 163)(16, SuperadminSondageComponent_ng_container_2_div_16_Template, 4, 0, "div", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, SuperadminSondageComponent_ng_container_2_div_17_Template, 10, 0, "div", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.titre);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.editingQuestion);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.questions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.questions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.confirmDeleteQId);
  }
}
function SuperadminSondageComponent_ng_container_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 206);
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 225)(1, "div", 226);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 227);
    \u0275\u0275element(4, "div", 228);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 229);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r45 = ctx.$implicit;
    const q_r46 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r45.key || "(vide)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.statWidth(ctx_r1.asNumber(item_r45.value), q_r46.nombre_reponses), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r45.value, " (", ctx_r1.statWidth(ctx_r1.asNumber(item_r45.value), q_r46.nombre_reponses), "%)");
  }
}
function SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223);
    \u0275\u0275template(1, SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_div_8_div_1_Template, 7, 5, "div", 224);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r46 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, q_r46.repartition));
  }
}
function SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230)(1, "span", 231);
    \u0275\u0275text(2, "Moyenne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 232);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 233);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r46 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r46.moyenne);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" / ", q_r46.type === "notation" ? 5 : 10);
  }
}
function SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 236);
    \u0275\u0275element(1, "i", 237);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r47 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r47, " ");
  }
}
function SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1, "Aucune r\xE9ponse textuelle");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 234);
    \u0275\u0275template(1, SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_div_10_div_1_Template, 3, 1, "div", 235)(2, SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_div_10_div_2_Template, 2, 0, "div", 153);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r46 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r46.reponses_texte);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r46.reponses_texte.length === 0);
  }
}
function SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 215)(1, "div", 216)(2, "span", 217);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 218);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 219);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_div_8_Template, 3, 3, "div", 220)(9, SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_div_9_Template, 7, 2, "div", 221)(10, SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_div_10_Template, 3, 2, "div", 222);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r46 = ctx.$implicit;
    const i_r48 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", i_r48 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r46.question);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", q_r46.nombre_reponses, " r\xE9ponse", q_r46.nombre_reponses !== 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r46.repartition);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r46.moyenne !== void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r46.reponses_texte);
  }
}
function SuperadminSondageComponent_ng_container_3_ng_container_12_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune donn\xE9e disponible");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminSondageComponent_ng_container_3_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 207)(2, "div", 208)(3, "div", 209);
    \u0275\u0275element(4, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 210);
    \u0275\u0275text(7, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 211);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 208)(11, "div", 212);
    \u0275\u0275element(12, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "div", 210);
    \u0275\u0275text(15, "R\xE9ponses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 211);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 208)(19, "div", 213);
    \u0275\u0275element(20, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "div", 210);
    \u0275\u0275text(23, "Taux de r\xE9ponse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 211);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(26, SuperadminSondageComponent_ng_container_3_ng_container_12_div_26_Template, 11, 7, "div", 214)(27, SuperadminSondageComponent_ng_container_3_ng_container_12_div_27_Template, 4, 0, "div", 164);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.stats.sondage.nombre_questions);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.sondage.nombre_reponses);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.taux_reponse, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.stats.questions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.questions.length === 0);
  }
}
function SuperadminSondageComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div")(3, "button", 98);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275element(4, "i", 99);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 100);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 33);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportCsv(ctx_r1.selectedSondage));
    });
    \u0275\u0275element(9, "i", 87);
    \u0275\u0275text(10, " Export CSV ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, SuperadminSondageComponent_ng_container_3_div_11_Template, 2, 0, "div", 32)(12, SuperadminSondageComponent_ng_container_3_ng_container_12_Template, 28, 5, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Statistiques \u2014 ", ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.titre);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.statsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.statsLoading && ctx_r1.stats);
  }
}
function SuperadminSondageComponent_ng_container_4_ng_container_14_span_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ", ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_4_ng_container_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SuperadminSondageComponent_ng_container_4_ng_container_14_span_1_span_2_Template, 2, 0, "span", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r50 = ctx.$implicit;
    const last_r51 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r50);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r51);
  }
}
function SuperadminSondageComponent_ng_container_4_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminSondageComponent_ng_container_4_ng_container_14_span_1_Template, 3, 2, "span", 249);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getFormationsTitres(ctx_r1.selectedSondage));
  }
}
function SuperadminSondageComponent_ng_container_4_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\u2014 (aucune)");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSondageComponent_ng_container_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 240)(1, "span", 241);
    \u0275\u0275text(2, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 242);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getEntrepriseNom(ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.entreprise_id));
  }
}
function SuperadminSondageComponent_ng_container_4_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250);
    \u0275\u0275element(1, "i", 251);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, " Cibles enregistr\xE9es : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.parametres == null ? null : ctx_r1.selectedSondage.parametres.cible_entreprise_ids) ?? \u0275\u0275pureFunction0(2, _c2)).length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" entreprise", ((ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.parametres == null ? null : ctx_r1.selectedSondage.parametres.cible_entreprise_ids == null ? null : ctx_r1.selectedSondage.parametres.cible_entreprise_ids.length) ?? 0) > 1 ? "s" : "", " ");
  }
}
function SuperadminSondageComponent_ng_container_4_ng_container_24_label_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 149)(1, "input", 150);
    \u0275\u0275listener("change", function SuperadminSondageComponent_ng_container_4_ng_container_24_label_11_Template_input_change_1_listener() {
      const e_r54 = \u0275\u0275restoreView(_r53).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleEnvoyerEntreprise(e_r54.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r54 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.isEnvoyerEntrepriseSelected(e_r54.id));
    \u0275\u0275property("title", e_r54.nom);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isEnvoyerEntrepriseSelected(e_r54.id))("title", e_r54.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r54.nom);
  }
}
function SuperadminSondageComponent_ng_container_4_ng_container_24_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.allEnvoyerEntreprisesSelected ? "Toutes les entreprises s\xE9lectionn\xE9es" : ctx_r1.envoyerEntrepriseIds.length + " entreprise" + (ctx_r1.envoyerEntrepriseIds.length > 1 ? "s" : "") + " s\xE9lectionn\xE9e" + (ctx_r1.envoyerEntrepriseIds.length > 1 ? "s" : ""), " ");
  }
}
function SuperadminSondageComponent_ng_container_4_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 252)(2, "label", 110);
    \u0275\u0275text(3, " Entreprise(s) destinataire(s) ");
    \u0275\u0275elementStart(4, "span", 111);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 143)(7, "label", 144)(8, "input", 145);
    \u0275\u0275listener("change", function SuperadminSondageComponent_ng_container_4_ng_container_24_Template_input_change_8_listener() {
      \u0275\u0275restoreView(_r52);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAllEnvoyerEntreprises());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "Toutes les entreprises");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, SuperadminSondageComponent_ng_container_4_ng_container_24_label_11_Template, 4, 6, "label", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SuperadminSondageComponent_ng_container_4_ng_container_24_div_12_Template, 2, 1, "div", 148);
    \u0275\u0275elementStart(13, "div", 253);
    \u0275\u0275element(14, "i", 198);
    \u0275\u0275text(15, " L'email sera envoy\xE9 \xE0 tous les employ\xE9s des entreprises s\xE9lectionn\xE9es. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("selected", ctx_r1.allEnvoyerEntreprisesSelected);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.allEnvoyerEntreprisesSelected);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.entreprises);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.envoyerEntrepriseIds.length > 0);
  }
}
function SuperadminSondageComponent_ng_container_4_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 254);
    \u0275\u0275text(1, " Un email contenant un lien personnel \xE0 usage unique sera envoy\xE9 \xE0 tous les participants des formations s\xE9lectionn\xE9es. ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_4_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 255);
    \u0275\u0275element(1, "i", 198);
    \u0275\u0275text(2, " Ce sondage n'est li\xE9 \xE0 aucune formation. L'invitation sera envoy\xE9e \xE0 tous les employ\xE9s de l'entreprise concern\xE9e. ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_4_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275element(1, "i", 173);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.envoyerSuccess, " ");
  }
}
function SuperadminSondageComponent_ng_container_4_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 257);
    \u0275\u0275element(1, "i", 258);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.envoyerError, " ");
  }
}
function SuperadminSondageComponent_ng_container_4_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275text(2, " Envoyer \xE0 tous les participants");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_4_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 259);
    \u0275\u0275text(2, " Envoi en cours\u2026");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div")(3, "button", 98);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275element(4, "i", 99);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 100);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 238)(9, "div", 239)(10, "div", 240)(11, "span", 241);
    \u0275\u0275text(12, "Formation(s) li\xE9e(s)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 242);
    \u0275\u0275template(14, SuperadminSondageComponent_ng_container_4_ng_container_14_Template, 2, 1, "ng-container", 1)(15, SuperadminSondageComponent_ng_container_4_ng_container_15_Template, 2, 0, "ng-container", 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 240)(17, "span", 241);
    \u0275\u0275text(18, "D\xE9clenchement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 242);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, SuperadminSondageComponent_ng_container_4_div_21_Template, 5, 1, "div", 243);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "div", 129);
    \u0275\u0275template(23, SuperadminSondageComponent_ng_container_4_div_23_Template, 7, 3, "div", 244)(24, SuperadminSondageComponent_ng_container_4_ng_container_24_Template, 16, 5, "ng-container", 1)(25, SuperadminSondageComponent_ng_container_4_p_25_Template, 2, 0, "p", 245)(26, SuperadminSondageComponent_ng_container_4_div_26_Template, 3, 0, "div", 246)(27, SuperadminSondageComponent_ng_container_4_div_27_Template, 3, 1, "div", 247)(28, SuperadminSondageComponent_ng_container_4_div_28_Template, 3, 1, "div", 248);
    \u0275\u0275elementStart(29, "button", 137);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_4_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.envoyerSondage());
    });
    \u0275\u0275template(30, SuperadminSondageComponent_ng_container_4_span_30_Template, 3, 0, "span", 1)(31, SuperadminSondageComponent_ng_container_4_span_31_Template, 3, 0, "span", 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Envoyer \u2014 ", ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.titre);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.selectedSondage && ctx_r1.getFormationsTitres(ctx_r1.selectedSondage).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedSondage || ctx_r1.getFormationsTitres(ctx_r1.selectedSondage).length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.declenchement) === "a_chaud" ? "\xC0 chaud" : (ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.declenchement) === "a_froid" ? "\xC0 froid (" + ((ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.delai_jours) || "?") + " j)" : "Manuel", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEnqueteLibreSansFormation);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isEnqueteLibreSansFormation && ((ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.parametres == null ? null : ctx_r1.selectedSondage.parametres.cible_entreprise_ids == null ? null : ctx_r1.selectedSondage.parametres.cible_entreprise_ids.length) ?? 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEnqueteLibreSansFormation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSondage && ctx_r1.getFormationsTitres(ctx_r1.selectedSondage).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSondage && !ctx_r1.isEnqueteLibreSansFormation && ctx_r1.getFormationsTitres(ctx_r1.selectedSondage).length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.envoyerSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.envoyerError);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.envoyerLoading || !!ctx_r1.envoyerSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.envoyerLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.envoyerLoading);
  }
}
function SuperadminSondageComponent_ng_container_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 206);
    \u0275\u0275elementEnd();
  }
}
function SuperadminSondageComponent_ng_container_5_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune r\xE9ponse re\xE7ue pour ce sondage.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_5_ng_container_14_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEnvoyer(ctx_r1.selectedSondage));
    });
    \u0275\u0275element(5, "i", 84);
    \u0275\u0275text(6, " Envoyer le sondage ");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminSondageComponent_ng_container_5_ng_container_14_div_2_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r57 = ctx.$implicit;
    const i_r58 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Q", i_r58 + 1, " \u2014 ", q_r57.question);
  }
}
function SuperadminSondageComponent_ng_container_5_ng_container_14_div_2_tr_14_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 274);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r59 = ctx.$implicit;
    const r_r60 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getReponseLabel(r_r60.reponses, q_r59.id), " ");
  }
}
function SuperadminSondageComponent_ng_container_5_ng_container_14_div_2_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 268)(3, "span", 269);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "div", 270);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 271);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td", 272);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, SuperadminSondageComponent_ng_container_5_ng_container_14_div_2_tr_14_td_14_Template, 2, 1, "td", 273);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r60 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, ((r_r60.user == null ? null : r_r60.user.prenom) || (r_r60.user == null ? null : r_r60.user.name) || "?")[0]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", r_r60.user == null ? null : r_r60.user.prenom, " ", r_r60.user == null ? null : r_r60.user.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r60.user == null ? null : r_r60.user.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 8, r_r60.repondu_at, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.resultatsQuestions);
  }
}
function SuperadminSondageComponent_ng_container_5_ng_container_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 261)(1, "div", 262)(2, "span", 263);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 264)(5, "table", 265)(6, "thead")(7, "tr")(8, "th", 266);
    \u0275\u0275text(9, "Participant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 267);
    \u0275\u0275text(11, "R\xE9pondu le");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SuperadminSondageComponent_ng_container_5_ng_container_14_div_2_th_12_Template, 2, 2, "th", 249);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, SuperadminSondageComponent_ng_container_5_ng_container_14_div_2_tr_14_Template, 15, 11, "tr", 249);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", ctx_r1.resultats.length, " r\xE9ponse", ctx_r1.resultats.length > 1 ? "s" : "", " re\xE7ue", ctx_r1.resultats.length > 1 ? "s" : "");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.resultatsQuestions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.resultats);
  }
}
function SuperadminSondageComponent_ng_container_5_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminSondageComponent_ng_container_5_ng_container_14_div_1_Template, 7, 0, "div", 66)(2, SuperadminSondageComponent_ng_container_5_ng_container_14_div_2_Template, 15, 5, "div", 260);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.resultats || ctx_r1.resultats.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resultats && ctx_r1.resultats.length > 0);
  }
}
function SuperadminSondageComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div")(3, "button", 98);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275element(4, "i", 99);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 100);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 5);
    \u0275\u0275text(9, "R\xE9ponses individuelles par participant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 33);
    \u0275\u0275listener("click", function SuperadminSondageComponent_ng_container_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportCsv(ctx_r1.selectedSondage));
    });
    \u0275\u0275element(11, "i", 87);
    \u0275\u0275text(12, " Export CSV ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, SuperadminSondageComponent_ng_container_5_div_13_Template, 2, 0, "div", 32)(14, SuperadminSondageComponent_ng_container_5_ng_container_14_Template, 3, 2, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("R\xE9sultats \u2014 ", ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.titre);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.resultatsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.resultatsLoading);
  }
}
function SuperadminSondageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 200)(1, "div", 201);
    \u0275\u0275element(2, "i", 275);
    \u0275\u0275elementStart(3, "p", 203);
    \u0275\u0275text(4, "Supprimer ce sondage d\xE9finitivement ? Toutes les questions et r\xE9ponses seront perdues.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 204)(6, "button", 33);
    \u0275\u0275listener("click", function SuperadminSondageComponent_div_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteId = null);
    });
    \u0275\u0275text(7, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 205);
    \u0275\u0275listener("click", function SuperadminSondageComponent_div_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r61);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteSondage());
    });
    \u0275\u0275text(9, "Supprimer d\xE9finitivement");
    \u0275\u0275elementEnd()()()();
  }
}
var QUESTION_TYPES = [
  { value: "text", label: "Texte court" },
  { value: "textarea", label: "Texte long" },
  { value: "radio", label: "Choix unique" },
  { value: "checkbox", label: "Choix multiples" },
  { value: "select", label: "Liste d\xE9roulante" },
  { value: "echelle", label: "\xC9chelle (1-5/1-10)" },
  { value: "notation", label: "Notation \xE9toiles" },
  { value: "date", label: "Date" },
  { value: "email", label: "Email" },
  { value: "numero", label: "Nombre" }
];
var SuperadminSondageComponent = class _SuperadminSondageComponent {
  sondageService;
  clientCompanyService;
  formationService;
  tab = "liste";
  categorieActive = "a_chaud";
  // ── Listes par catégorie ───────────────────────────────────────────────────
  sondagesChaud = [];
  sondagesFroid = [];
  sondagesEnquete = [];
  // toutes : superadmin (entreprise_id=null) + entreprises
  // Templates globaux (null entreprise_id)
  templatesChaud = [];
  templatesFroid = [];
  // Enquêtes libres — sous-listes pour l'affichage
  get enquetesSuperadmin() {
    return this.sondagesEnquete.filter((s) => !s.entreprise_id);
  }
  get enquetesEntreprises() {
    return this.sondagesEnquete.filter((s) => s.entreprise_id);
  }
  loading = false;
  error = "";
  // ── Filtres liste ──────────────────────────────────────────────────────────
  search = "";
  filterActif = "";
  filterEntrepriseId = "";
  // '' = tous, 'global' = templates, ou ID numérique
  currentPage = 1;
  totalPages = 1;
  total = 0;
  search$ = new Subject();
  // ── Entreprises disponibles ────────────────────────────────────────────────
  entreprises = [];
  entreprisesLoading = false;
  // ── Sondage sélectionné ────────────────────────────────────────────────────
  selectedSondage = null;
  // ── Formations disponibles ────────────────────────────────────────────────
  formations = [];
  formationsLoading = false;
  formFormationIds = [];
  // ── Formulaire création/édition ────────────────────────────────────────────
  form = {};
  saving = false;
  formError = "";
  formCategorie = "enquete";
  formEntrepriseId = "";
  // '' = global template, sinon ID
  formCibleEntrepriseIds = [];
  // entreprises destinataires (enquête libre)
  // ── Questions ──────────────────────────────────────────────────────────────
  questions = [];
  questionTypes = QUESTION_TYPES;
  editingQuestion = null;
  questionError = "";
  newOptionText = "";
  // ── Stats ──────────────────────────────────────────────────────────────────
  stats = null;
  statsLoading = false;
  // ── Résultats détaillés ────────────────────────────────────────────────────
  resultats = null;
  resultatsLoading = false;
  resultatsQuestions = [];
  // ── Envoi sondage ──────────────────────────────────────────────────────────
  envoyerLoading = false;
  envoyerSuccess = "";
  envoyerError = "";
  envoyerEntrepriseIds = [];
  // multi-select entreprises dans la vue Envoyer
  // ── Confirm delete ─────────────────────────────────────────────────────────
  confirmDeleteId = null;
  confirmDeleteQId = null;
  constructor(sondageService, clientCompanyService, formationService) {
    this.sondageService = sondageService;
    this.clientCompanyService = clientCompanyService;
    this.formationService = formationService;
  }
  ngOnInit() {
    this.loadAll();
    this.loadEntreprises();
    this.search$.pipe(debounceTime(350), distinctUntilChanged()).subscribe(() => {
      this.currentPage = 1;
      this.loadAll();
    });
  }
  onSearch() {
    this.search$.next(this.search);
  }
  loadAll() {
    this.loading = true;
    this.error = "";
    const base = { per_page: 100 };
    if (this.search)
      base.search = this.search;
    if (this.filterActif !== "")
      base.est_actif = this.filterActif === "1";
    const baseAvecEntreprise = this.filterEntrepriseId ? __spreadProps(__spreadValues({}, base), { entreprise_id: this.filterEntrepriseId }) : base;
    this.sondageService.getSondages(__spreadProps(__spreadValues({}, baseAvecEntreprise), { declenchement: "a_chaud" })).subscribe({
      next: (res) => {
        const all = res.sondages ?? [];
        this.sondagesChaud = all.filter((s) => !s.est_template);
        this.templatesChaud = all.filter((s) => s.est_template);
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Erreur chargement.");
        this.loading = false;
      }
    });
    this.sondageService.getSondages(__spreadProps(__spreadValues({}, baseAvecEntreprise), { declenchement: "a_froid" })).subscribe({
      next: (res) => {
        const all = res.sondages ?? [];
        this.sondagesFroid = all.filter((s) => !s.est_template);
        this.templatesFroid = all.filter((s) => s.est_template);
      }
    });
    this.sondageService.getSondages(__spreadProps(__spreadValues({}, base), { declenchement: "manuel", per_page: 500 })).subscribe({
      next: (res) => {
        this.sondagesEnquete = res.sondages ?? [];
      }
    });
  }
  get sondagesCourants() {
    if (this.categorieActive === "a_chaud")
      return this.sondagesChaud;
    if (this.categorieActive === "a_froid")
      return this.sondagesFroid;
    return this.sondagesEnquete;
  }
  get templatesCourants() {
    if (this.categorieActive === "a_chaud")
      return this.templatesChaud;
    if (this.categorieActive === "a_froid")
      return this.templatesFroid;
    return [];
  }
  loadEntreprises() {
    this.entreprisesLoading = true;
    this.clientCompanyService.getCompanies({ per_page: 200 }).subscribe({
      next: (res) => {
        try {
          const data = Array.isArray(res) ? res : res.entreprises ?? res.data ?? res.companies ?? [];
          this.entreprises = data.map((e) => ({ id: e.id, nom: e.nom ?? e.name ?? e.raison_sociale ?? `#${e.id}` }));
        } finally {
          this.entreprisesLoading = false;
        }
      },
      error: () => {
        this.entreprisesLoading = false;
      }
    });
  }
  loadFormations(entrepriseId) {
    this.formationsLoading = true;
    const params = { page: 1, limit: 500 };
    if (entrepriseId)
      params.entreprise_id = entrepriseId;
    this.formationService.getFormations(params).subscribe({
      next: (res) => {
        this.formations = (res.formations ?? res.data ?? res ?? []).map((f) => ({ id: f.id, titre: f.titre }));
        this.formFormationIds = this.formFormationIds.filter((id) => this.formations.some((f) => f.id === id));
        this.formationsLoading = false;
      },
      error: () => {
        this.formationsLoading = false;
      }
    });
  }
  onEntrepriseChange() {
    const eid = this.formEntrepriseId ? Number(this.formEntrepriseId) : void 0;
    this.formFormationIds = [];
    this.loadFormations(eid);
  }
  setCategorie(c) {
    this.categorieActive = c;
  }
  getEntrepriseNom(entrepriseId) {
    if (!entrepriseId)
      return "Mod\xE8le global";
    return this.entreprises.find((e) => e.id === entrepriseId)?.nom ?? `Entreprise #${entrepriseId}`;
  }
  // ── CREATE ────────────────────────────────────────────────────────────────
  openCreate(categorie, estTemplate = false) {
    this.formCategorie = categorie;
    this.formEntrepriseId = "";
    const declenchement = categorie === "enquete" ? "manuel" : categorie;
    this.form = {
      type: categorie === "enquete" ? "enquete" : "satisfaction",
      declenchement,
      delai_jours: categorie === "a_froid" ? 30 : null,
      formation_id: null,
      entreprise_id: null,
      est_template: estTemplate,
      est_anonyme: false,
      est_obligatoire: categorie !== "enquete",
      est_actif: true,
      autorise_retour: true,
      afficher_progres: true,
      nombre_tentatives_max: 1,
      duree_estimee: 5
    };
    this.formFormationIds = [];
    this.formCibleEntrepriseIds = [];
    this.formError = "";
    this.tab = "creer";
  }
  openEdit(s) {
    this.selectedSondage = s;
    this.form = __spreadValues({}, s);
    this.formCategorie = s.declenchement === "a_chaud" ? "a_chaud" : s.declenchement === "a_froid" ? "a_froid" : "enquete";
    this.formEntrepriseId = s.entreprise_id ? String(s.entreprise_id) : "";
    this.formFormationIds = s.formation_ids ? [...s.formation_ids] : s.formation_id ? [s.formation_id] : [];
    this.formCibleEntrepriseIds = s.parametres?.cible_entreprise_ids ?? [];
    if (s.entreprise_id)
      this.loadFormations(s.entreprise_id);
    this.formError = "";
    this.tab = "editer";
  }
  toggleCibleEntreprise(id) {
    const idx = this.formCibleEntrepriseIds.indexOf(id);
    if (idx === -1)
      this.formCibleEntrepriseIds.push(id);
    else
      this.formCibleEntrepriseIds.splice(idx, 1);
  }
  toggleAllCibleEntreprises() {
    if (this.allCibleEntreprisesSelected)
      this.formCibleEntrepriseIds = [];
    else
      this.formCibleEntrepriseIds = this.entreprises.map((e) => e.id);
  }
  get allCibleEntreprisesSelected() {
    return this.entreprises.length > 0 && this.formCibleEntrepriseIds.length === this.entreprises.length;
  }
  isCibleEntrepriseSelected(id) {
    return this.formCibleEntrepriseIds.includes(id);
  }
  toggleFormation(id) {
    const idx = this.formFormationIds.indexOf(id);
    if (idx === -1)
      this.formFormationIds.push(id);
    else
      this.formFormationIds.splice(idx, 1);
  }
  toggleAllFormations() {
    if (this.allFormationsSelected)
      this.formFormationIds = [];
    else
      this.formFormationIds = this.formations.map((f) => f.id);
  }
  get allFormationsSelected() {
    return this.formations.length > 0 && this.formFormationIds.length === this.formations.length;
  }
  isFormationSelected(id) {
    return this.formFormationIds.includes(id);
  }
  getCibleEntreprisesNoms(s) {
    const ids = s.parametres?.cible_entreprise_ids ?? [];
    if (ids.length === 0)
      return s.entreprise_id ? [this.getEntrepriseNom(s.entreprise_id)] : [];
    if (ids.length === this.entreprises.length && this.entreprises.length > 0)
      return ["Toutes les entreprises"];
    return ids.map((id) => this.entreprises.find((e) => e.id === id)?.nom ?? `Entreprise #${id}`);
  }
  getFormationsTitres(s) {
    const ids = s.formation_ids?.length ? s.formation_ids : s.formation_id ? [s.formation_id] : [];
    return ids.map((id) => this.formations.find((f) => f.id === id)?.titre ?? `Formation #${id}`);
  }
  saveSondage() {
    if (!this.form.titre) {
      this.formError = "Le titre est obligatoire.";
      return;
    }
    if (this.formEntrepriseId && this.formCategorie !== "enquete" && this.formFormationIds.length === 0) {
      this.formError = "Veuillez s\xE9lectionner au moins une formation associ\xE9e.";
      return;
    }
    this.saving = true;
    this.formError = "";
    if (this.formCategorie === "enquete") {
      this.form.entreprise_id = null;
      this.form.est_template = false;
    } else if (this.formEntrepriseId === "" || this.formEntrepriseId === null) {
      this.form.entreprise_id = null;
      this.form.est_template = true;
    } else {
      this.form.entreprise_id = Number(this.formEntrepriseId);
      this.form.est_template = false;
    }
    const payload = __spreadProps(__spreadValues({}, this.form), {
      formation_ids: this.formFormationIds,
      formation_id: this.formFormationIds[0] ?? null,
      parametres: __spreadProps(__spreadValues({}, this.form.parametres ?? {}), {
        cible_entreprise_ids: this.formCibleEntrepriseIds
      })
    });
    const obs = this.tab === "creer" ? this.sondageService.createSondage(payload) : this.sondageService.updateSondage(this.selectedSondage.id, payload);
    obs.subscribe({
      next: (res) => {
        this.saving = false;
        if (this.tab === "creer" && res.sondage) {
          this.openQuestions(res.sondage);
        } else {
          this.tab = "liste";
          this.loadAll();
        }
      },
      error: (err) => {
        this.saving = false;
        this.formError = err?.error?.message ?? "Erreur lors de la sauvegarde.";
      }
    });
  }
  // ── QUESTIONS ─────────────────────────────────────────────────────────────
  openQuestions(s) {
    this.selectedSondage = s;
    this.questions = [...s.questions ?? []];
    this.editingQuestion = null;
    this.questionError = "";
    this.tab = "questions";
    this.sondageService.getSondage(s.id).subscribe({
      next: (res) => {
        this.selectedSondage = res.sondage;
        this.questions = res.sondage.questions ?? [];
      }
    });
  }
  newQuestion() {
    this.editingQuestion = { type: "radio", est_obligatoire: false, options: [] };
    this.questionError = "";
    this.newOptionText = "";
  }
  editQuestion(q) {
    this.editingQuestion = __spreadProps(__spreadValues({}, q), { options: q.options ? [...q.options] : [] });
    this.questionError = "";
    this.newOptionText = "";
  }
  cancelQuestion() {
    this.editingQuestion = null;
    this.questionError = "";
  }
  addOption() {
    if (!this.newOptionText.trim())
      return;
    const opts = this.editingQuestion.options ?? [];
    opts.push(this.newOptionText.trim());
    this.editingQuestion.options = opts;
    this.newOptionText = "";
  }
  removeOption(i) {
    this.editingQuestion.options.splice(i, 1);
  }
  saveQuestion() {
    if (!this.editingQuestion?.question || !this.editingQuestion?.type) {
      this.questionError = "La question et le type sont obligatoires.";
      return;
    }
    const sid = this.selectedSondage.id;
    const obs = this.editingQuestion.id ? this.sondageService.updateQuestion(sid, this.editingQuestion.id, this.editingQuestion) : this.sondageService.addQuestion(sid, this.editingQuestion);
    obs.subscribe({
      next: () => {
        this.editingQuestion = null;
        this.reloadQuestions(sid);
      },
      error: (err) => {
        this.questionError = err?.error?.message ?? "Erreur sauvegarde.";
      }
    });
  }
  confirmDeleteQuestion(qId) {
    this.confirmDeleteQId = qId;
  }
  deleteQuestion() {
    if (!this.confirmDeleteQId || !this.selectedSondage)
      return;
    this.sondageService.deleteQuestion(this.selectedSondage.id, this.confirmDeleteQId).subscribe({
      next: () => {
        this.confirmDeleteQId = null;
        this.reloadQuestions(this.selectedSondage.id);
      },
      error: () => {
        this.confirmDeleteQId = null;
      }
    });
  }
  reloadQuestions(sid) {
    this.sondageService.getSondage(sid).subscribe({
      next: (res) => {
        this.selectedSondage = res.sondage;
        this.questions = res.sondage.questions ?? [];
      }
    });
  }
  // ── STATS ─────────────────────────────────────────────────────────────────
  openStats(s) {
    this.selectedSondage = s;
    this.statsLoading = true;
    this.stats = null;
    this.tab = "stats";
    this.sondageService.getStatistiques(s.id).subscribe({
      next: (res) => {
        this.stats = res.statistiques;
        this.statsLoading = false;
      },
      error: () => {
        this.statsLoading = false;
      }
    });
  }
  // ── TOGGLE ACTIF ─────────────────────────────────────────────────────────
  toggleActif(s) {
    const obs = s.est_actif ? this.sondageService.archiveSondage(s.id) : this.sondageService.publishSondage(s.id);
    obs.subscribe({ next: () => this.loadAll() });
  }
  // ── DELETE ────────────────────────────────────────────────────────────────
  confirmDelete(id) {
    this.confirmDeleteId = id;
  }
  deleteSondage() {
    if (!this.confirmDeleteId)
      return;
    this.sondageService.deleteSondage(this.confirmDeleteId).subscribe({
      next: () => {
        this.confirmDeleteId = null;
        this.loadAll();
      },
      error: () => {
        this.confirmDeleteId = null;
      }
    });
  }
  // ── ENVOYER ───────────────────────────────────────────────────────────────
  openEnvoyer(s) {
    this.selectedSondage = s;
    this.envoyerSuccess = "";
    this.envoyerError = "";
    const cibles = s.parametres?.cible_entreprise_ids ?? [];
    this.envoyerEntrepriseIds = cibles.length > 0 ? [...cibles] : s.entreprise_id ? [s.entreprise_id] : [];
    this.tab = "envoyer";
  }
  get isEnqueteLibreSansFormation() {
    return !!(this.selectedSondage && this.selectedSondage.declenchement === "manuel" && this.getFormationsTitres(this.selectedSondage).length === 0);
  }
  toggleEnvoyerEntreprise(id) {
    const idx = this.envoyerEntrepriseIds.indexOf(id);
    if (idx === -1)
      this.envoyerEntrepriseIds.push(id);
    else
      this.envoyerEntrepriseIds.splice(idx, 1);
  }
  toggleAllEnvoyerEntreprises() {
    if (this.allEnvoyerEntreprisesSelected)
      this.envoyerEntrepriseIds = [];
    else
      this.envoyerEntrepriseIds = this.entreprises.map((e) => e.id);
  }
  get allEnvoyerEntreprisesSelected() {
    return this.entreprises.length > 0 && this.envoyerEntrepriseIds.length === this.entreprises.length;
  }
  isEnvoyerEntrepriseSelected(id) {
    return this.envoyerEntrepriseIds.includes(id);
  }
  envoyerSondage() {
    if (!this.selectedSondage)
      return;
    if (this.isEnqueteLibreSansFormation && this.envoyerEntrepriseIds.length === 0) {
      this.envoyerError = "Veuillez s\xE9lectionner au moins une entreprise destinataire.";
      return;
    }
    this.envoyerLoading = true;
    this.envoyerSuccess = "";
    this.envoyerError = "";
    this.sondageService.envoyerSondage(this.selectedSondage.id, void 0, this.envoyerEntrepriseIds).subscribe({
      next: (res) => {
        this.envoyerLoading = false;
        this.envoyerSuccess = res.message ?? "Emails mis en file d'attente.";
      },
      error: (err) => {
        this.envoyerLoading = false;
        this.envoyerError = err?.error?.message ?? "Erreur lors de l'envoi.";
      }
    });
  }
  // ── RÉSULTATS DÉTAILLÉS ───────────────────────────────────────────────────
  openResultats(s) {
    this.selectedSondage = s;
    this.resultatsLoading = true;
    this.resultats = null;
    this.resultatsQuestions = [];
    this.tab = "resultats";
    this.sondageService.getResultats(s.id).subscribe({
      next: (res) => {
        this.resultats = res.reponses ?? [];
        this.resultatsQuestions = res.questions ?? [];
        this.resultatsLoading = false;
      },
      error: () => {
        this.resultatsLoading = false;
      }
    });
  }
  getReponseLabel(reponses, questionId) {
    if (!reponses)
      return "\u2014";
    let val;
    if (Array.isArray(reponses)) {
      const item = reponses.find((r) => r.question_id === questionId);
      if (!item)
        return "\u2014";
      val = item.reponse_multiple ?? item.reponse_numerique ?? item.reponse;
    } else {
      val = reponses[questionId];
    }
    if (val === null || val === void 0 || val === "")
      return "\u2014";
    if (Array.isArray(val))
      return val.join(", ");
    return String(val);
  }
  exportCsv(s) {
    window.open(this.sondageService.getExportUrl(s.id), "_blank");
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  typeLabel(type) {
    return this.sondageService.getTypeLabel(type);
  }
  typeColor(type) {
    return this.sondageService.getTypeColor(type);
  }
  needsOptions(type) {
    return ["radio", "checkbox", "select"].includes(type);
  }
  hasEchelle(type) {
    return ["echelle", "notation"].includes(type);
  }
  getStatutClass(s) {
    if (!s.est_actif)
      return "badge-inactif";
    if (s.date_fin && new Date(s.date_fin) < /* @__PURE__ */ new Date())
      return "badge-termine";
    return "badge-ouvert";
  }
  getStatutLabel(s) {
    if (!s.est_actif)
      return "Inactif";
    if (s.date_fin && new Date(s.date_fin) < /* @__PURE__ */ new Date())
      return "Termin\xE9";
    return "Ouvert";
  }
  backToList() {
    this.tab = "liste";
    this.loadAll();
  }
  getQuestionTypeLabel(type) {
    return this.questionTypes.find((t) => t.value === type)?.label ?? type;
  }
  statWidth(val, total) {
    if (!total)
      return 0;
    return Math.round(val / total * 100);
  }
  asNumber(v) {
    return Number(v);
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
  static \u0275fac = function SuperadminSondageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminSondageComponent)(\u0275\u0275directiveInject(SondageService), \u0275\u0275directiveInject(ClientCompanyService), \u0275\u0275directiveInject(FormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminSondageComponent, selectors: [["app-superadmin-sondage"]], decls: 7, vars: 7, consts: [["cardEnquete", ""], [4, "ngIf"], ["class", "ip-confirm-overlay", 4, "ngIf"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-page-head__sub"], [1, "ip-cat-tabs"], ["type", "button", 1, "ip-cat-tab", 3, "click"], [1, "isax", "isax-flash-1"], [1, "ip-cat-tab__count"], [1, "isax", "isax-clock"], [1, "isax", "isax-message-question"], [1, "ip-cat-header"], [1, "ip-cat-desc"], [1, "ip-cat-actions"], ["type", "button", "class", "ip-btn ip-btn--ghost", 3, "click", 4, "ngIf"], ["type", "button", 1, "ip-btn", "ip-btn--primary", 3, "click"], [1, "isax", "isax-add"], [1, "ip-card", "ip-filter-card"], [1, "ip-filter-row"], [1, "ip-filter-group", "ip-filter-group--search"], [1, "ip-input-icon-wrap"], [1, "isax", "isax-search-normal", "ip-input-icon"], ["type", "text", "placeholder", "Rechercher par titre\u2026", 1, "ip-input", "ip-input--icon", 3, "ngModelChange", "ngModel"], [1, "ip-filter-group"], [1, "ip-input", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "global"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "1"], ["value", "0"], ["class", "alert alert-danger alert-dismissible mb-3", 4, "ngIf"], ["class", "ip-loader", 4, "ngIf"], ["type", "button", 1, "ip-btn", "ip-btn--ghost", 3, "click"], [1, "isax", "isax-global"], [3, "value"], [1, "alert", "alert-danger", "alert-dismissible", "mb-3"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-loader"], ["role", "status", 1, "spinner-border"], [1, "ip-section-header"], [1, "ip-section-badge", "ip-section-badge--global"], [1, "ip-section-hint"], [1, "ip-sondage-grid", "ip-sondage-grid--sm"], ["class", "ip-sondage-card ip-sondage-card--template", 4, "ngFor", "ngForOf"], [1, "ip-sondage-card", "ip-sondage-card--template"], [1, "ip-sc-bar"], [1, "ip-sc-body"], [1, "ip-sc-header"], [1, "ip-sc-type-badge"], [1, "ip-template-badge"], [1, "ip-sc-title"], ["class", "ip-sc-desc", 4, "ngIf"], [1, "ip-sc-meta"], [1, "isax", "isax-note-21"], [1, "ip-sc-footer"], ["title", "Questions", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-edit-2"], ["title", "Modifier", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-setting-2"], ["title", "Supprimer", 1, "ip-action-btn", "ip-action-btn--danger", 3, "click"], [1, "isax", "isax-trash"], [1, "ip-sc-desc"], ["class", "ip-section-header", 4, "ngIf"], [1, "ip-sondage-grid"], ["class", "ip-sondage-card", 4, "ngFor", "ngForOf"], ["class", "ip-empty-state", 4, "ngIf"], [1, "ip-section-badge"], [1, "isax", "isax-building-3"], [1, "ip-sondage-card"], [1, "ip-sc-statut"], [1, "fa-solid", "fa-circle"], ["class", "ip-sc-desc ip-text-muted", 4, "ngIf"], [1, "isax", "isax-people"], ["class", "ip-sc-formation-tag", 4, "ngFor", "ngForOf"], [1, "ip-sc-tags"], ["class", "ip-tag ip-tag--entreprise", 4, "ngIf"], ["class", "ip-tag", 4, "ngIf"], ["class", "ip-tag ip-tag--info", 4, "ngIf"], ["title", "Statistiques", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-chart-2"], ["title", "R\xE9sultats", 1, "ip-action-btn", "ip-action-btn--results", 3, "click"], [1, "isax", "isax-eye"], ["title", "Envoyer", 1, "ip-action-btn", "ip-action-btn--send", 3, "click"], [1, "isax", "isax-send-2"], [1, "ip-action-btn", 3, "click", "title"], ["title", "Export CSV", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-document-download"], [1, "ip-sc-desc", "ip-text-muted"], [1, "ip-sc-formation-tag"], [1, "isax", "isax-book-1"], [1, "ip-tag", "ip-tag--entreprise"], [1, "ip-tag"], [1, "ip-tag", "ip-tag--info"], [1, "ip-empty-state"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ip-sondage-card", 3, "ip-sondage-card--readonly", 4, "ngFor", "ngForOf"], ["class", "ip-tag ip-tag--entreprise", 4, "ngFor", "ngForOf"], ["type", "button", 1, "ip-btn", "ip-btn--ghost", "ip-btn--sm", 3, "click"], [1, "isax", "isax-arrow-left-2"], [1, "ip-page-head__title", "mt-2"], ["class", "ip-cat-badge ip-cat-badge--chaud", 4, "ngIf"], ["class", "ip-cat-badge ip-cat-badge--froid", 4, "ngIf"], ["class", "ip-cat-badge ip-cat-badge--enquete", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "ip-form-layout"], [1, "ip-card", "ip-form-card"], [1, "ip-form-section-head"], [1, "isax", "isax-document-text"], [1, "ip-field"], [1, "ip-label"], [1, "ip-required"], ["type", "text", "placeholder", "Ex. Satisfaction globale de la formation", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["value", "satisfaction"], ["value", "evaluation"], ["value", "feedback"], ["value", "quiz"], ["value", "enquete"], [1, "ip-label-hint"], ["class", "ip-field", 4, "ngIf"], ["rows", "3", "placeholder", "D\xE9crivez l'objectif du sondage\u2026", 1, "ip-input", "ip-textarea", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Texte affich\xE9 avant les questions\u2026", 1, "ip-input", "ip-textarea", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Merci pour votre participation\u2026", 1, "ip-input", "ip-textarea", 3, "ngModelChange", "ngModel"], [1, "ip-field", "ip-field--row"], [1, "ip-input-readonly"], ["class", "ip-field ip-field--row", 4, "ngIf"], ["type", "number", "min", "1", "placeholder", "5", 1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "placeholder", "1", 1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], [1, "ip-divider"], [1, "ip-toggle-row"], [1, "ip-toggle-label"], [1, "ip-toggle-sub"], [1, "ip-switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "ip-switch-track"], [1, "ip-save-row"], ["type", "button", 1, "ip-btn", "ip-btn--primary", "ip-btn--wide", 3, "click", "disabled"], [1, "isax", "isax-save-2"], [1, "ip-cat-badge", "ip-cat-badge--chaud"], [1, "ip-cat-badge", "ip-cat-badge--froid"], [1, "ip-cat-badge", "ip-cat-badge--enquete"], [1, "alert", "alert-danger"], [1, "ip-multiselect-list"], ["title", "Toutes les entreprises", 1, "ip-multiselect-item", "ip-multiselect-item--all"], ["type", "checkbox", "title", "Toutes les entreprises", 1, "ip-multiselect-cb", 3, "change", "checked"], ["class", "ip-multiselect-item", 3, "selected", "title", 4, "ngFor", "ngForOf"], ["class", "ip-multiselect-empty ip-text-muted ip-text-sm", 4, "ngIf"], ["class", "ip-multiselect-summary", 4, "ngIf"], [1, "ip-multiselect-item", 3, "title"], ["type", "checkbox", 1, "ip-multiselect-cb", 3, "change", "checked", "title"], [1, "ip-multiselect-empty", "ip-text-muted", "ip-text-sm"], [1, "ip-multiselect-summary"], ["class", "ip-text-muted ip-text-sm", 4, "ngIf"], ["class", "ip-multiselect-list", 4, "ngIf"], [1, "ip-text-muted", "ip-text-sm"], ["title", "Toutes les formations", 1, "ip-multiselect-item", "ip-multiselect-item--all"], ["type", "checkbox", "title", "Toutes les formations", 1, "ip-multiselect-cb", 3, "change", "checked"], ["class", "ip-text-muted ip-text-sm ip-multiselect-empty", 4, "ngIf"], [1, "ip-text-muted", "ip-text-sm", "ip-multiselect-empty"], ["type", "number", "min", "1", "placeholder", "Ex. 30", 1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], ["class", "ip-card ip-question-form-card", 4, "ngIf"], [1, "ip-card"], ["class", "ip-questions-list", 4, "ngIf"], ["class", "ip-empty", 4, "ngIf"], [1, "ip-card", "ip-question-form-card"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "ip-question-form-grid"], ["type", "text", "placeholder", "Entrez votre question\u2026", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["class", "ip-field ip-field--full", 4, "ngIf"], [1, "ip-question-form-footer"], [1, "ip-toggle-row", "ip-toggle-row--inline"], [1, "ip-question-form-actions"], [1, "isax", "isax-tick-circle"], [1, "alert", "alert-danger", "mb-3"], ["type", "text", "placeholder", "Pr\xE9cision ou aide pour l'utilisateur\u2026", 1, "ip-input", 3, "ngModelChange", "ngModel"], [1, "ip-field", "ip-field--full"], [1, "ip-options-list"], ["class", "ip-option-row", 4, "ngFor", "ngForOf"], [1, "ip-add-option-row"], ["type", "text", "placeholder", "Nouvelle option\u2026", 1, "ip-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "ip-option-row"], [1, "ip-option-text"], ["type", "button", 1, "ip-action-btn", "ip-action-btn--danger", "ip-action-btn--xs", 3, "click"], [1, "isax", "isax-minus-cirlce"], ["type", "number", "placeholder", "1", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "5", 1, "ip-input", 3, "ngModelChange", "ngModel"], [1, "ip-questions-list"], ["class", "ip-question-item", 4, "ngFor", "ngForOf"], [1, "ip-question-item"], [1, "ip-question-num"], [1, "ip-question-content"], [1, "ip-question-text"], ["class", "ip-required ml-1", 4, "ngIf"], [1, "ip-question-meta"], [1, "ip-q-type-badge"], [1, "ip-question-actions"], [1, "ip-required", "ml-1"], [1, "isax", "isax-info-circle"], [1, "ip-empty"], [1, "ip-confirm-overlay"], [1, "ip-confirm-box"], [1, "isax", "isax-warning-2", "ip-confirm-icon"], [1, "ip-confirm-text"], [1, "ip-confirm-actions"], ["type", "button", 1, "ip-btn", "ip-btn--danger", 3, "click"], [1, "spinner-border"], [1, "ip-kpi-row"], [1, "ip-kpi-card"], [1, "ip-kpi-icon"], [1, "ip-kpi-label"], [1, "ip-kpi-value"], [1, "ip-kpi-icon", "ip-kpi-icon--success"], [1, "ip-kpi-icon", "ip-kpi-icon--warn"], ["class", "ip-stat-question-card ip-card", 4, "ngFor", "ngForOf"], [1, "ip-stat-question-card", "ip-card"], [1, "ip-stat-q-header"], [1, "ip-stat-q-num"], [1, "ip-stat-q-text"], [1, "ip-stat-q-count"], ["class", "ip-stat-bars", 4, "ngIf"], ["class", "ip-stat-moyenne", 4, "ngIf"], ["class", "ip-stat-textes", 4, "ngIf"], [1, "ip-stat-bars"], ["class", "ip-stat-bar-row", 4, "ngFor", "ngForOf"], [1, "ip-stat-bar-row"], [1, "ip-stat-bar-label"], [1, "ip-stat-bar-wrap"], [1, "ip-stat-bar-fill"], [1, "ip-stat-bar-val"], [1, "ip-stat-moyenne"], [1, "ip-stat-moy-label"], [1, "ip-stat-moy-val"], [1, "ip-stat-moy-max"], [1, "ip-stat-textes"], ["class", "ip-stat-texte-item", 4, "ngFor", "ngForOf"], [1, "ip-stat-texte-item"], [1, "isax", "isax-quote-up"], [1, "ip-card", "ip-envoyer-card"], [1, "ip-envoyer-info"], [1, "ip-envoyer-info-row"], [1, "ip-envoyer-info-label"], [1, "ip-envoyer-info-val"], ["class", "ip-envoyer-info-row", 4, "ngIf"], ["class", "ip-envoyer-cibles-info", 4, "ngIf"], ["class", "ip-envoyer-desc", 4, "ngIf"], ["class", "ip-alert ip-alert--info ip-alert--mb", 4, "ngIf"], ["class", "ip-alert ip-alert--success", 4, "ngIf"], ["class", "ip-alert ip-alert--danger", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ip-envoyer-cibles-info"], [1, "isax", "isax-buildings-2"], [1, "ip-field", "ip-field--mb"], [1, "ip-field-hint"], [1, "ip-envoyer-desc"], [1, "ip-alert", "ip-alert--info", "ip-alert--mb"], [1, "ip-alert", "ip-alert--success"], [1, "ip-alert", "ip-alert--danger"], [1, "isax", "isax-warning-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["class", "ip-card ip-resultats-card", 4, "ngIf"], [1, "ip-card", "ip-resultats-card"], [1, "ip-resultats-header"], [1, "ip-resultats-count"], [1, "ip-resultats-table-wrap"], [1, "ip-resultats-table"], [1, "ip-th--participant"], [1, "ip-th--date"], [1, "ip-res-user"], [1, "ip-res-avatar"], [1, "ip-res-name"], [1, "ip-res-email"], [1, "ip-res-date"], ["class", "ip-res-val", 4, "ngFor", "ngForOf"], [1, "ip-res-val"], [1, "isax", "isax-warning-2", "ip-confirm-icon", "ip-confirm-icon--danger"]], template: function SuperadminSondageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SuperadminSondageComponent_ng_container_0_Template, 62, 23, "ng-container", 1)(1, SuperadminSondageComponent_ng_container_1_Template, 141, 30, "ng-container", 1)(2, SuperadminSondageComponent_ng_container_2_Template, 18, 5, "ng-container", 1)(3, SuperadminSondageComponent_ng_container_3_Template, 13, 3, "ng-container", 1)(4, SuperadminSondageComponent_ng_container_4_Template, 32, 14, "ng-container", 1)(5, SuperadminSondageComponent_ng_container_5_Template, 15, 3, "ng-container", 1)(6, SuperadminSondageComponent_div_6_Template, 10, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.tab === "liste");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tab === "creer" || ctx.tab === "editer");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tab === "questions");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tab === "stats");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tab === "envoyer");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tab === "resultats");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.confirmDeleteId);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, UpperCasePipe, DatePipe, KeyValuePipe], styles: ['\n\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 160px;\n}\n.ip-text-muted[_ngcontent-%COMP%] {\n  color: #6C757D;\n}\n.ip-text-sm[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ip-btn--primary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--danger[_ngcontent-%COMP%] {\n  background: #DC3545;\n  color: #fff;\n  border: none;\n}\n.ip-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgb(197.9088607595, 34.2911392405, 49.9670886076);\n}\n.ip-btn--wide[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn--danger[_ngcontent-%COMP%]:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.ip-action-btn--xs[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  font-size: 12px;\n  border-radius: 4px;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-filter-card[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  overflow: visible;\n}\n.ip-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ip-input--sm[_ngcontent-%COMP%] {\n  width: auto;\n}\n.ip-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.ip-input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ip-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-sondage-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.ip-sondage-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: box-shadow 0.15s;\n}\n.ip-sondage-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.ip-sc-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  flex-shrink: 0;\n}\n.ip-sc-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n}\n.ip-sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ip-sc-type-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-sc-statut[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.ip-sc-statut[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 7px;\n}\n.badge-ouvert[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.badge-inactif[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.badge-termine[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-sc-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 6px;\n}\n.ip-sc-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0 0 12px;\n  line-height: 1.5;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.ip-sc-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 10px;\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-sc-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-sc-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-sc-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ip-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-tag--warn[_ngcontent-%COMP%] {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-sc-footer[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-top: 1px solid #E9ECEF;\n  background: #FAFBFF;\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  color: #6C757D;\n}\n.ip-empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  opacity: 0.3;\n  margin-bottom: 12px;\n}\n.ip-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-form-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 20px;\n  align-items: flex-start;\n}\n@media (max-width: 860px) {\n  .ip-form-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-form-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.ip-form-section-head[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 18px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-form-section-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.ip-field--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.ip-field--row[_ngcontent-%COMP%]   .ip-label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.ip-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-required[_ngcontent-%COMP%] {\n  color: #DC3545;\n}\n.ip-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E9ECEF;\n  margin: 14px 0;\n}\n.ip-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-toggle-row--inline[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n}\n.ip-toggle-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%] {\n  background: #D4AF37;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%]::before {\n  transform: translateX(18px);\n}\n.ip-save-row[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 14px;\n}\n.ip-question-form-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 16px;\n}\n.ip-question-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .ip-question-form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-question-form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 14px;\n}\n.ip-question-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.ip-options-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.ip-option-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 6px 10px;\n  background: #F8F9FA;\n  border-radius: 6px;\n}\n.ip-option-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1A1A2E;\n  flex: 1;\n}\n.ip-add-option-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.ip-add-option-row[_ngcontent-%COMP%]   .ip-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ip-questions-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ip-question-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #E9ECEF;\n  transition: background 0.1s;\n}\n.ip-question-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-question-item[_ngcontent-%COMP%]:hover {\n  background: #FAFBFF;\n}\n.ip-question-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ip-question-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-question-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A1A2E;\n  margin-bottom: 5px;\n}\n.ip-question-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.ip-q-type-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #FDF8E7;\n  color: #D4AF37;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-question-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.ip-kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn[_ngcontent-%COMP%] {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-stat-question-card[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.ip-stat-q-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.ip-stat-q-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ip-stat-q-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-stat-q-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.ip-stat-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-stat-bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-stat-bar-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1A1A2E;\n  min-width: 120px;\n}\n.ip-stat-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 10px;\n  background: #F1F3F5;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ip-stat-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #D4AF37;\n  border-radius: 99px;\n  transition: width 0.3s;\n}\n.ip-stat-bar-val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  min-width: 80px;\n  text-align: right;\n}\n.ip-stat-moyenne[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-stat-moy-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ip-stat-moy-val[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #D4AF37;\n}\n.ip-stat-moy-max[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6C757D;\n}\n.ip-stat-textes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-stat-texte-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1A1A2E;\n  background: #F8F9FA;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  gap: 8px;\n}\n.ip-stat-texte-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.ip-confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.ip-confirm-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 28px 32px;\n  max-width: 400px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n.ip-confirm-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #D97706;\n  margin-bottom: 12px;\n  display: block;\n}\n.ip-confirm-icon--danger[_ngcontent-%COMP%] {\n  color: #DC3545;\n}\n.ip-confirm-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1A1A2E;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n.ip-confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.ip-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.ip-pagination__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ip-pg-btn[_ngcontent-%COMP%]:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  cursor: default;\n}\n.ip-pg-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.ml-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.ip-cat-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.ip-cat-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6C757D;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.ip-cat-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ip-cat-tab__count[_ngcontent-%COMP%] {\n  background: #F1F3F5;\n  color: #6C757D;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 20px;\n  min-width: 22px;\n  text-align: center;\n}\n.ip-cat-tab[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-cat-tab.active[_ngcontent-%COMP%] {\n  border-color: #D4AF37;\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-cat-tab.active[_ngcontent-%COMP%]   .ip-cat-tab__count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n}\n.ip-cat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.ip-cat-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  line-height: 1.5;\n}\n.ip-cat-desc[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1A1A2E;\n}\n.ip-cat-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ip-cat-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 6px;\n}\n.ip-cat-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-cat-badge--chaud[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #D97706;\n}\n.ip-cat-badge--froid[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #1D6EBF;\n}\n.ip-cat-badge--enquete[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.ip-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n  margin-top: 4px;\n}\n.ip-section-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-section-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-section-badge--global[_ngcontent-%COMP%] {\n  background: #FDF8E7;\n  color: #D4AF37;\n}\n.ip-section-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-sondage-card--template[_ngcontent-%COMP%] {\n  border-style: dashed;\n  border-color: rgb(218.2368421053, 223.25, 228.2631578947);\n  background: rgb(253.7846153846, 250.7461538462, 240.4153846154);\n}\n.ip-sondage-card--readonly[_ngcontent-%COMP%] {\n  border-color: rgb(224.1421052632, 228.35, 232.5578947368);\n  background: #fafafa;\n  opacity: 0.92;\n}\n.ip-template-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #FDF8E7;\n  color: #D4AF37;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-template-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ip-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-tag--warn[_ngcontent-%COMP%] {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-tag--info[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #1D6EBF;\n}\n.ip-tag--enquete[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.ip-tag--entreprise[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #166534;\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n}\n.ip-tag--entreprise[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.ip-input-readonly[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1A1A2E;\n  font-weight: 500;\n  padding: 8px 12px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  flex: 1;\n}\n.ip-field-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-field-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-label-hint[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 10px;\n  color: #6C757D;\n  margin-left: 4px;\n}\n.ip-resultats-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.ip-resultats-header[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 13px;\n  color: #6C757D;\n}\n.ip-resultats-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-envoyer-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 0;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 13px;\n}\n.ip-envoyer-info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-envoyer-info-label[_ngcontent-%COMP%] {\n  color: #6C757D;\n  min-width: 140px;\n  flex-shrink: 0;\n}\n.ip-envoyer-info-val[_ngcontent-%COMP%] {\n  color: #1A1A2E;\n  font-weight: 500;\n}\n.ip-action-btn--send[_ngcontent-%COMP%]:hover {\n  border-color: #059669;\n  color: #059669;\n  background: #ECFDF5;\n}\n.ip-action-btn--results[_ngcontent-%COMP%]:hover {\n  border-color: #7C3AED;\n  color: #7C3AED;\n  background: #F5F3FF;\n}\n.ip-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.ip-alert[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.ip-alert--success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  border: 1px solid #A7F3D0;\n  color: #065F46;\n}\n.ip-alert--danger[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  border: 1px solid #FCA5A5;\n  color: #991B1B;\n}\n.ip-alert--warn[_ngcontent-%COMP%] {\n  background: #FFF9EC;\n  border: 1px solid #FCD34D;\n  color: #92400E;\n}\n.ip-alert--info[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  border: 1px solid #BFDBFE;\n  color: #1E40AF;\n}\n.ip-envoyer-info[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-envoyer-info__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 13px;\n}\n.ip-envoyer-info__label[_ngcontent-%COMP%] {\n  min-width: 140px;\n  font-weight: 600;\n  color: #6C757D;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-envoyer-info__val[_ngcontent-%COMP%] {\n  color: #1A1A2E;\n}\n.ip-btn-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-multiselect-list[_ngcontent-%COMP%] {\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  background: #fff;\n}\n.ip-multiselect-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 14px;\n  cursor: pointer;\n  font-size: 13px;\n  color: #1A1A2E;\n  border-bottom: 1px solid #E9ECEF;\n  transition: background 0.1s;\n}\n.ip-multiselect-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-multiselect-item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.ip-multiselect-item.selected[_ngcontent-%COMP%] {\n  background: #FDF8E7;\n  color: rgb(177.7777777778, 144.8888888889, 38.2222222222);\n  font-weight: 500;\n}\n.ip-multiselect-cb[_ngcontent-%COMP%] {\n  accent-color: #D4AF37;\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.ip-multiselect-summary[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgb(177.7777777778, 144.8888888889, 38.2222222222);\n  font-weight: 600;\n  margin-top: 5px;\n  padding: 3px 6px;\n  background: #FDF8E7;\n  border-radius: 4px;\n  display: inline-block;\n}\n.ip-multiselect-empty[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n}\n.ip-envoyer-card[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.ip-field--mb[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.ip-envoyer-cibles-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0fdf4;\n  border: 1px solid #a7f3d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #065f46;\n  margin-bottom: 16px;\n}\n.ip-envoyer-cibles-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ip-envoyer-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 20px;\n  line-height: 1.6;\n}\n.ip-alert--mb[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.ip-th--participant[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.ip-th--date[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.ip-sc-formation-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #374151;\n  background: #f3f4f6;\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.ip-sc-formation-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-resultats-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.ip-resultats-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.ip-res-th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #F8F9FA;\n  border-bottom: 2px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  white-space: nowrap;\n  text-align: left;\n}\n.ip-res-th--participant[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.ip-res-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #E9ECEF;\n  transition: background 0.1s;\n}\n.ip-res-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-res-row[_ngcontent-%COMP%]:hover {\n  background: #FAFBFF;\n}\n.ip-res-td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  vertical-align: middle;\n  color: #1A1A2E;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ip-res-participant[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-res-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ip-res-user[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.ip-res-nom[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ip-res-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ip-res-date[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: #6C757D;\n  font-size: 12px;\n}\n/*# sourceMappingURL=superadmin-sondage.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminSondageComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-sondage", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE : LISTE                                                              -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="tab === 'liste'">\r
\r
  <div class="ip-page-head">\r
    <div>\r
      <h5 class="ip-page-head__title">Sondages &amp; enqu\xEAtes</h5>\r
      <p class="ip-page-head__sub">G\xE9rez les mod\xE8les globaux et les sondages de toutes les entreprises</p>\r
    </div>\r
  </div>\r
\r
  <!-- Onglets cat\xE9gories -->\r
  <div class="ip-cat-tabs">\r
    <button type="button" class="ip-cat-tab" [class.active]="categorieActive === 'a_chaud'" (click)="setCategorie('a_chaud')">\r
      <i class="isax isax-flash-1"></i>\r
      <span>\xC9valuation \xE0 chaud</span>\r
      <span class="ip-cat-tab__count">{{ templatesChaud.length + sondagesChaud.length }}</span>\r
    </button>\r
    <button type="button" class="ip-cat-tab" [class.active]="categorieActive === 'a_froid'" (click)="setCategorie('a_froid')">\r
      <i class="isax isax-clock"></i>\r
      <span>\xC9valuation \xE0 froid</span>\r
      <span class="ip-cat-tab__count">{{ templatesFroid.length + sondagesFroid.length }}</span>\r
    </button>\r
    <button type="button" class="ip-cat-tab" [class.active]="categorieActive === 'enquete'" (click)="setCategorie('enquete')">\r
      <i class="isax isax-message-question"></i>\r
      <span>Enqu\xEAtes libres</span>\r
      <span class="ip-cat-tab__count">{{ sondagesEnquete.length }}</span>\r
    </button>\r
  </div>\r
\r
  <!-- Description cat\xE9gorie + boutons cr\xE9er -->\r
  <div class="ip-cat-header">\r
    <div class="ip-cat-desc">\r
      <ng-container *ngIf="categorieActive === 'a_chaud'">\r
        <strong>\xC9valuation \xE0 chaud</strong> \u2014 Envoy\xE9e imm\xE9diatement apr\xE8s la fin d'une formation.\r
      </ng-container>\r
      <ng-container *ngIf="categorieActive === 'a_froid'">\r
        <strong>\xC9valuation \xE0 froid</strong> \u2014 Envoy\xE9e automatiquement X jours apr\xE8s la formation.\r
      </ng-container>\r
      <ng-container *ngIf="categorieActive === 'enquete'">\r
        <strong>Enqu\xEAtes libres</strong> \u2014 Envoy\xE9es manuellement \xE0 tous les employ\xE9s ou aux participants d'une formation.\r
      </ng-container>\r
    </div>\r
    <div class="ip-cat-actions">\r
      <button *ngIf="categorieActive !== 'enquete'" type="button" class="ip-btn ip-btn--ghost" (click)="openCreate(categorieActive, true)">\r
        <i class="isax isax-global"></i> Nouveau mod\xE8le global\r
      </button>\r
      <button type="button" class="ip-btn ip-btn--primary" (click)="openCreate(categorieActive, false)">\r
        <i class="isax isax-add"></i>\r
        <ng-container *ngIf="categorieActive === 'a_chaud'">Nouvelle \xE9valuation \xE0 chaud</ng-container>\r
        <ng-container *ngIf="categorieActive === 'a_froid'">Nouvelle \xE9valuation \xE0 froid</ng-container>\r
        <ng-container *ngIf="categorieActive === 'enquete'">Nouvelle enqu\xEAte</ng-container>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Filtres -->\r
  <div class="ip-card ip-filter-card">\r
    <div class="ip-filter-row">\r
      <div class="ip-filter-group ip-filter-group--search">\r
        <div class="ip-input-icon-wrap">\r
          <i class="isax isax-search-normal ip-input-icon"></i>\r
          <input type="text" class="ip-input ip-input--icon"\r
                 [(ngModel)]="search" (ngModelChange)="onSearch()"\r
                 placeholder="Rechercher par titre\u2026">\r
        </div>\r
      </div>\r
      <div class="ip-filter-group">\r
        <select class="ip-input" [(ngModel)]="filterEntrepriseId" (ngModelChange)="loadAll()">\r
          <option value="">Toutes les entreprises</option>\r
          <option value="global">Mod\xE8les globaux uniquement</option>\r
          <option *ngFor="let e of entreprises" [value]="e.id">{{ e.nom }}</option>\r
        </select>\r
      </div>\r
      <div class="ip-filter-group">\r
        <select class="ip-input" [(ngModel)]="filterActif" (ngModelChange)="loadAll()">\r
          <option value="">Tous les statuts</option>\r
          <option value="1">Actif</option>\r
          <option value="0">Inactif</option>\r
        </select>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Error -->\r
  <div *ngIf="error" class="alert alert-danger alert-dismissible mb-3">\r
    {{ error }}<button type="button" class="btn-close" (click)="error=''"></button>\r
  </div>\r
\r
  <!-- Loader -->\r
  <div *ngIf="loading" class="ip-loader">\r
    <div class="spinner-border" role="status"></div>\r
  </div>\r
\r
  <ng-container *ngIf="!loading">\r
\r
    <!-- \u2500\u2500 Section : Mod\xE8les globaux (uniquement \xC0 chaud / \xC0 froid) \u2500\u2500 -->\r
    <ng-container *ngIf="categorieActive !== 'enquete' && templatesCourants.length > 0">\r
      <div class="ip-section-header">\r
        <div class="ip-section-badge ip-section-badge--global">\r
          <i class="isax isax-global"></i> Mod\xE8les globaux\r
        </div>\r
        <span class="ip-section-hint">Partag\xE9s avec toutes les entreprises</span>\r
      </div>\r
      <div class="ip-sondage-grid ip-sondage-grid--sm">\r
        <div *ngFor="let s of templatesCourants" class="ip-sondage-card ip-sondage-card--template">\r
          <div class="ip-sc-bar" [style.background]="typeColor(s.type)"></div>\r
          <div class="ip-sc-body">\r
            <div class="ip-sc-header">\r
              <span class="ip-sc-type-badge" [style.background]="typeColor(s.type) + '18'" [style.color]="typeColor(s.type)">\r
                {{ typeLabel(s.type) }}\r
              </span>\r
              <span class="ip-template-badge"><i class="isax isax-global"></i> Mod\xE8le global</span>\r
            </div>\r
            <h6 class="ip-sc-title">{{ s.titre }}</h6>\r
            <p class="ip-sc-desc" *ngIf="s.description">{{ s.description }}</p>\r
            <div class="ip-sc-meta">\r
              <span><i class="isax isax-note-21"></i> {{ s.nombre_questions }} question{{ s.nombre_questions !== 1 ? 's' : '' }}</span>\r
            </div>\r
          </div>\r
          <div class="ip-sc-footer">\r
            <button class="ip-action-btn" title="Questions" (click)="openQuestions(s)">\r
              <i class="isax isax-edit-2"></i>\r
            </button>\r
            <button class="ip-action-btn" title="Modifier" (click)="openEdit(s)">\r
              <i class="isax isax-setting-2"></i>\r
            </button>\r
            <button class="ip-action-btn ip-action-btn--danger" title="Supprimer" (click)="confirmDelete(s.id)">\r
              <i class="isax isax-trash"></i>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <!-- MODE : \xC9valuation \xE0 chaud / \xE0 froid                           -->\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <ng-container *ngIf="categorieActive !== 'enquete'">\r
      <div class="ip-section-header" *ngIf="sondagesCourants.length > 0">\r
        <div class="ip-section-badge">\r
          <i class="isax isax-building-3"></i> Par entreprise\r
        </div>\r
      </div>\r
\r
      <div class="ip-sondage-grid">\r
        <div *ngFor="let s of sondagesCourants" class="ip-sondage-card">\r
          <div class="ip-sc-bar" [style.background]="typeColor(s.type)"></div>\r
          <div class="ip-sc-body">\r
            <div class="ip-sc-header">\r
              <span class="ip-sc-type-badge" [style.background]="typeColor(s.type) + '18'" [style.color]="typeColor(s.type)">{{ typeLabel(s.type) }}</span>\r
              <span class="ip-sc-statut" [class]="getStatutClass(s)"><i class="fa-solid fa-circle"></i> {{ getStatutLabel(s) }}</span>\r
            </div>\r
            <h6 class="ip-sc-title">{{ s.titre }}</h6>\r
            <p class="ip-sc-desc" *ngIf="s.description">{{ s.description }}</p>\r
            <p class="ip-sc-desc ip-text-muted" *ngIf="!s.description">Aucune description</p>\r
            <div class="ip-sc-meta">\r
              <span><i class="isax isax-note-21"></i> {{ s.nombre_questions }} question{{ s.nombre_questions !== 1 ? 's' : '' }}</span>\r
              <span><i class="isax isax-people"></i> {{ s.nombre_reponses }} r\xE9ponse{{ s.nombre_reponses !== 1 ? 's' : '' }}</span>\r
              <span *ngIf="s.duree_estimee"><i class="isax isax-clock"></i> ~{{ s.duree_estimee }} min</span>\r
              <span *ngFor="let t of getFormationsTitres(s)" class="ip-sc-formation-tag"><i class="isax isax-book-1"></i> {{ t }}</span>\r
            </div>\r
            <div class="ip-sc-tags">\r
              <span class="ip-tag ip-tag--entreprise" *ngIf="s.entreprise_id"><i class="isax isax-building-3"></i> {{ getEntrepriseNom(s.entreprise_id) }}</span>\r
              <span *ngIf="s.est_anonyme" class="ip-tag">Anonyme</span>\r
              <span *ngIf="categorieActive === 'a_froid' && s.delai_jours" class="ip-tag ip-tag--info">J+{{ s.delai_jours }}</span>\r
            </div>\r
          </div>\r
          <div class="ip-sc-footer">\r
            <button class="ip-action-btn" title="Questions" (click)="openQuestions(s)"><i class="isax isax-edit-2"></i></button>\r
            <button class="ip-action-btn" title="Statistiques" (click)="openStats(s)"><i class="isax isax-chart-2"></i></button>\r
            <button class="ip-action-btn ip-action-btn--results" title="R\xE9sultats" (click)="openResultats(s)"><i class="isax isax-eye"></i></button>\r
            <button class="ip-action-btn ip-action-btn--send" title="Envoyer" (click)="openEnvoyer(s)"><i class="isax isax-send-2"></i></button>\r
            <button class="ip-action-btn" title="Modifier" (click)="openEdit(s)"><i class="isax isax-setting-2"></i></button>\r
            <button class="ip-action-btn" [title]="s.est_actif ? 'Archiver' : 'Publier'" (click)="toggleActif(s)"><i [class]="s.est_actif ? 'isax isax-archive' : 'isax isax-refresh'"></i></button>\r
            <button class="ip-action-btn" title="Export CSV" (click)="exportCsv(s)"><i class="isax isax-document-download"></i></button>\r
            <button class="ip-action-btn ip-action-btn--danger" title="Supprimer" (click)="confirmDelete(s.id)"><i class="isax isax-trash"></i></button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="sondagesCourants.length === 0 && templatesCourants.length === 0" class="ip-empty-state">\r
        <i class="isax isax-note-21"></i>\r
        <p *ngIf="categorieActive === 'a_chaud'">Aucune \xE9valuation \xE0 chaud</p>\r
        <p *ngIf="categorieActive === 'a_froid'">Aucune \xE9valuation \xE0 froid</p>\r
        <button type="button" class="ip-btn ip-btn--primary" (click)="openCreate(categorieActive, false)">Cr\xE9er maintenant</button>\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <!-- MODE : Enqu\xEAtes libres \u2014 deux sections                         -->\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <ng-container *ngIf="categorieActive === 'enquete'">\r
\r
      <!-- Section 1 : Mes enqu\xEAtes globales (superadmin, entreprise_id=null) -->\r
      <ng-container *ngIf="enquetesSuperadmin.length > 0">\r
        <div class="ip-section-header">\r
          <div class="ip-section-badge ip-section-badge--global">\r
            <i class="isax isax-global"></i> Mes enqu\xEAtes globales\r
          </div>\r
          <span class="ip-section-hint">Cr\xE9\xE9es par vous, envoy\xE9es aux entreprises cibles</span>\r
        </div>\r
        <div class="ip-sondage-grid">\r
          <ng-container *ngTemplateOutlet="cardEnquete; context: { $implicit: enquetesSuperadmin, editable: true }"></ng-container>\r
        </div>\r
      </ng-container>\r
\r
      <!-- Section 2 : Enqu\xEAtes des entreprises (AdminRH) -->\r
      <ng-container *ngIf="enquetesEntreprises.length > 0">\r
        <div class="ip-section-header" [style.margin-top]="enquetesSuperadmin.length > 0 ? '24px' : '0'">\r
          <div class="ip-section-badge">\r
            <i class="isax isax-building-3"></i> Enqu\xEAtes des entreprises\r
          </div>\r
          <span class="ip-section-hint">Cr\xE9\xE9es par les AdminRH de leurs entreprises</span>\r
        </div>\r
        <div class="ip-sondage-grid">\r
          <ng-container *ngTemplateOutlet="cardEnquete; context: { $implicit: enquetesEntreprises, editable: false }"></ng-container>\r
        </div>\r
      </ng-container>\r
\r
      <!-- Vide total -->\r
      <div *ngIf="sondagesEnquete.length === 0" class="ip-empty-state">\r
        <i class="isax isax-note-21"></i>\r
        <p>Aucune enqu\xEAte cr\xE9\xE9e</p>\r
        <button type="button" class="ip-btn ip-btn--primary" (click)="openCreate('enquete', false)">Cr\xE9er maintenant</button>\r
      </div>\r
\r
    </ng-container>\r
\r
    <!-- \u2500\u2500 Template carte enqu\xEAte (r\xE9utilis\xE9 pour les 2 sections) \u2500\u2500 -->\r
    <ng-template #cardEnquete let-list let-editable="editable">\r
      <div *ngFor="let s of list" class="ip-sondage-card" [class.ip-sondage-card--readonly]="!editable">\r
        <div class="ip-sc-bar" [style.background]="typeColor(s.type)"></div>\r
        <div class="ip-sc-body">\r
          <div class="ip-sc-header">\r
            <span class="ip-sc-type-badge" [style.background]="typeColor(s.type) + '18'" [style.color]="typeColor(s.type)">{{ typeLabel(s.type) }}</span>\r
            <span class="ip-sc-statut" [class]="getStatutClass(s)"><i class="fa-solid fa-circle"></i> {{ getStatutLabel(s) }}</span>\r
          </div>\r
          <h6 class="ip-sc-title">{{ s.titre }}</h6>\r
          <p class="ip-sc-desc" *ngIf="s.description">{{ s.description }}</p>\r
          <p class="ip-sc-desc ip-text-muted" *ngIf="!s.description">Aucune description</p>\r
          <div class="ip-sc-meta">\r
            <span><i class="isax isax-note-21"></i> {{ s.nombre_questions }} question{{ s.nombre_questions !== 1 ? 's' : '' }}</span>\r
            <span><i class="isax isax-people"></i> {{ s.nombre_reponses }} r\xE9ponse{{ s.nombre_reponses !== 1 ? 's' : '' }}</span>\r
            <span *ngIf="s.duree_estimee"><i class="isax isax-clock"></i> ~{{ s.duree_estimee }} min</span>\r
          </div>\r
          <div class="ip-sc-tags">\r
            <!-- Mes enqu\xEAtes : badges cibles -->\r
            <ng-container *ngIf="!s.entreprise_id">\r
              <span *ngFor="let nom of getCibleEntreprisesNoms(s)" class="ip-tag ip-tag--entreprise">\r
                <i class="isax isax-building-3"></i> {{ nom }}\r
              </span>\r
            </ng-container>\r
            <!-- Enqu\xEAtes entreprise : badge de l'entreprise propri\xE9taire -->\r
            <span *ngIf="s.entreprise_id" class="ip-tag ip-tag--entreprise">\r
              <i class="isax isax-building-3"></i> {{ getEntrepriseNom(s.entreprise_id) }}\r
            </span>\r
            <span *ngIf="s.est_anonyme" class="ip-tag">Anonyme</span>\r
          </div>\r
        </div>\r
        <div class="ip-sc-footer">\r
          <ng-container *ngIf="editable">\r
            <button class="ip-action-btn" title="Questions" (click)="openQuestions(s)"><i class="isax isax-edit-2"></i></button>\r
            <button class="ip-action-btn" title="Modifier" (click)="openEdit(s)"><i class="isax isax-setting-2"></i></button>\r
            <button class="ip-action-btn" [title]="s.est_actif ? 'Archiver' : 'Publier'" (click)="toggleActif(s)"><i [class]="s.est_actif ? 'isax isax-archive' : 'isax isax-refresh'"></i></button>\r
          </ng-container>\r
          <button class="ip-action-btn" title="Statistiques" (click)="openStats(s)"><i class="isax isax-chart-2"></i></button>\r
          <button class="ip-action-btn ip-action-btn--results" title="R\xE9sultats" (click)="openResultats(s)"><i class="isax isax-eye"></i></button>\r
          <button class="ip-action-btn ip-action-btn--send" title="Envoyer" (click)="openEnvoyer(s)"><i class="isax isax-send-2"></i></button>\r
          <button class="ip-action-btn" title="Export CSV" (click)="exportCsv(s)"><i class="isax isax-document-download"></i></button>\r
          <ng-container *ngIf="editable">\r
            <button class="ip-action-btn ip-action-btn--danger" title="Supprimer" (click)="confirmDelete(s.id)"><i class="isax isax-trash"></i></button>\r
          </ng-container>\r
        </div>\r
      </div>\r
    </ng-template>\r
\r
  </ng-container>\r
\r
</ng-container>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE : CR\xC9ER / \xC9DITER                                                     -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="tab === 'creer' || tab === 'editer'">\r
\r
  <div class="ip-page-head">\r
    <div>\r
      <button type="button" class="ip-btn ip-btn--ghost ip-btn--sm" (click)="backToList()">\r
        <i class="isax isax-arrow-left-2"></i> Retour\r
      </button>\r
      <h5 class="ip-page-head__title mt-2">\r
        <ng-container *ngIf="tab === 'creer'">\r
          <ng-container *ngIf="formCategorie === 'a_chaud'">Nouvelle \xE9valuation \xE0 chaud</ng-container>\r
          <ng-container *ngIf="formCategorie === 'a_froid'">Nouvelle \xE9valuation \xE0 froid</ng-container>\r
          <ng-container *ngIf="formCategorie === 'enquete'">Nouvelle enqu\xEAte libre</ng-container>\r
        </ng-container>\r
        <ng-container *ngIf="tab === 'editer'">Modifier \u2014 {{ selectedSondage?.titre }}</ng-container>\r
      </h5>\r
      <span class="ip-cat-badge ip-cat-badge--chaud" *ngIf="formCategorie === 'a_chaud'">\r
        <i class="isax isax-flash-1"></i> \xC0 chaud\r
      </span>\r
      <span class="ip-cat-badge ip-cat-badge--froid" *ngIf="formCategorie === 'a_froid'">\r
        <i class="isax isax-clock"></i> \xC0 froid\r
      </span>\r
      <span class="ip-cat-badge ip-cat-badge--enquete" *ngIf="formCategorie === 'enquete'">\r
        <i class="isax isax-message-question"></i> Enqu\xEAte libre\r
      </span>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="formError" class="alert alert-danger">{{ formError }}</div>\r
\r
  <div class="ip-form-layout">\r
\r
    <!-- Infos g\xE9n\xE9rales -->\r
    <div class="ip-card ip-form-card">\r
      <div class="ip-form-section-head"><i class="isax isax-document-text"></i> Informations g\xE9n\xE9rales</div>\r
\r
      <div class="ip-field">\r
        <label class="ip-label">Titre <span class="ip-required">*</span></label>\r
        <input type="text" class="ip-input" [(ngModel)]="form.titre" placeholder="Ex. Satisfaction globale de la formation">\r
      </div>\r
\r
      <div class="ip-field">\r
        <label class="ip-label">Type <span class="ip-required">*</span></label>\r
        <select class="ip-input" [(ngModel)]="form.type">\r
          <option value="satisfaction">Sondage de satisfaction</option>\r
          <option value="evaluation">\xC9valuation</option>\r
          <option value="feedback">Retour d'exp\xE9rience</option>\r
          <option value="quiz">Quiz</option>\r
          <option value="enquete">Enqu\xEAte</option>\r
        </select>\r
      </div>\r
\r
      <!-- Port\xE9e : global ou entreprise sp\xE9cifique -->\r
      <div class="ip-field">\r
        <label class="ip-label">\r
          Port\xE9e\r
          <span class="ip-label-hint">(mod\xE8le global = visible par toutes les entreprises)</span>\r
        </label>\r
        <select class="ip-input" [(ngModel)]="formEntrepriseId"\r
                (ngModelChange)="onEntrepriseChange()">\r
          <option value="">Mod\xE8le global (toutes entreprises)</option>\r
          <option *ngFor="let e of entreprises" [value]="e.id">{{ e.nom }}</option>\r
        </select>\r
      </div>\r
\r
      <!-- Entreprises cibles \u2014 enqu\xEAte libre uniquement, visible m\xEAme si port\xE9e = global -->\r
      <div class="ip-field" *ngIf="formCategorie === 'enquete'">\r
        <label class="ip-label">\r
          Entreprise(s) cible(s)\r
          <span class="ip-label-hint">(employ\xE9s qui recevront l'enqu\xEAte)</span>\r
        </label>\r
        <div class="ip-multiselect-list">\r
          <label class="ip-multiselect-item ip-multiselect-item--all"\r
                 [class.selected]="allCibleEntreprisesSelected"\r
                 title="Toutes les entreprises">\r
            <input type="checkbox" class="ip-multiselect-cb"\r
                   [checked]="allCibleEntreprisesSelected"\r
                   (change)="toggleAllCibleEntreprises()"\r
                   title="Toutes les entreprises">\r
            <strong>Toutes les entreprises</strong>\r
          </label>\r
          <label *ngFor="let e of entreprises" class="ip-multiselect-item"\r
                 [class.selected]="isCibleEntrepriseSelected(e.id)"\r
                 [title]="e.nom">\r
            <input type="checkbox" class="ip-multiselect-cb"\r
                   [checked]="isCibleEntrepriseSelected(e.id)"\r
                   (change)="toggleCibleEntreprise(e.id)"\r
                   [title]="e.nom">\r
            <span>{{ e.nom }}</span>\r
          </label>\r
          <div *ngIf="entreprises.length === 0" class="ip-multiselect-empty ip-text-muted ip-text-sm">Aucune entreprise disponible</div>\r
        </div>\r
        <div *ngIf="formCibleEntrepriseIds.length > 0" class="ip-multiselect-summary">\r
          {{ allCibleEntreprisesSelected ? 'Toutes les entreprises s\xE9lectionn\xE9es' : formCibleEntrepriseIds.length + ' entreprise' + (formCibleEntrepriseIds.length > 1 ? 's' : '') + ' s\xE9lectionn\xE9e' + (formCibleEntrepriseIds.length > 1 ? 's' : '') }}\r
        </div>\r
      </div>\r
\r
      <!-- Formations li\xE9es \u2014 multi-select checkboxes -->\r
      <div class="ip-field" *ngIf="formEntrepriseId && formCategorie !== 'enquete'">\r
        <label class="ip-label">\r
          Formation(s) li\xE9e(s)\r
          <span class="ip-required">*</span>\r
        </label>\r
        <div *ngIf="formationsLoading" class="ip-text-muted ip-text-sm">Chargement des formations\u2026</div>\r
        <div *ngIf="!formationsLoading" class="ip-multiselect-list">\r
          <label class="ip-multiselect-item ip-multiselect-item--all"\r
                 [class.selected]="allFormationsSelected"\r
                 title="Toutes les formations">\r
            <input type="checkbox" class="ip-multiselect-cb"\r
                   [checked]="allFormationsSelected"\r
                   (change)="toggleAllFormations()"\r
                   title="Toutes les formations">\r
            <strong>Toutes les formations</strong>\r
          </label>\r
          <label *ngFor="let f of formations" class="ip-multiselect-item"\r
                 [class.selected]="isFormationSelected(f.id)"\r
                 [title]="f.titre">\r
            <input type="checkbox" class="ip-multiselect-cb"\r
                   [checked]="isFormationSelected(f.id)"\r
                   (change)="toggleFormation(f.id)"\r
                   [title]="f.titre">\r
            <span>{{ f.titre }}</span>\r
          </label>\r
          <div *ngIf="formations.length === 0" class="ip-text-muted ip-text-sm ip-multiselect-empty">Aucune formation disponible</div>\r
        </div>\r
        <div *ngIf="formFormationIds.length > 0" class="ip-multiselect-summary">\r
          {{ allFormationsSelected ? 'Toutes les formations s\xE9lectionn\xE9es' : formFormationIds.length + ' formation' + (formFormationIds.length > 1 ? 's' : '') + ' s\xE9lectionn\xE9e' + (formFormationIds.length > 1 ? 's' : '') }}\r
        </div>\r
      </div>\r
\r
      <div class="ip-field">\r
        <label class="ip-label">Description</label>\r
        <textarea class="ip-input ip-textarea" [(ngModel)]="form.description" rows="3"\r
                  placeholder="D\xE9crivez l'objectif du sondage\u2026"></textarea>\r
      </div>\r
\r
      <div class="ip-field">\r
        <label class="ip-label">Message d'introduction</label>\r
        <textarea class="ip-input ip-textarea" [(ngModel)]="form.introduction" rows="3"\r
                  placeholder="Texte affich\xE9 avant les questions\u2026"></textarea>\r
      </div>\r
\r
      <div class="ip-field">\r
        <label class="ip-label">Message de fin</label>\r
        <textarea class="ip-input ip-textarea" [(ngModel)]="form.message_fin" rows="2"\r
                  placeholder="Merci pour votre participation\u2026"></textarea>\r
      </div>\r
    </div>\r
\r
    <!-- Param\xE8tres -->\r
    <div class="ip-card ip-form-card">\r
      <div class="ip-form-section-head"><i class="isax isax-setting-2"></i> Param\xE8tres</div>\r
\r
      <!-- D\xE9clenchement en lecture seule -->\r
      <div class="ip-field ip-field--row">\r
        <label class="ip-label">D\xE9clenchement</label>\r
        <div class="ip-input-readonly">\r
          <ng-container *ngIf="formCategorie === 'a_chaud'">\xC0 chaud \u2014 imm\xE9diatement apr\xE8s la formation</ng-container>\r
          <ng-container *ngIf="formCategorie === 'a_froid'">\xC0 froid \u2014 apr\xE8s un d\xE9lai</ng-container>\r
          <ng-container *ngIf="formCategorie === 'enquete'">Manuel (enqu\xEAte libre)</ng-container>\r
        </div>\r
      </div>\r
\r
      <!-- D\xE9lai uniquement pour \xE0 froid -->\r
      <div class="ip-field ip-field--row" *ngIf="formCategorie === 'a_froid'">\r
        <label class="ip-label">D\xE9lai apr\xE8s la formation (jours)</label>\r
        <input type="number" class="ip-input ip-input--sm" [(ngModel)]="form.delai_jours" min="1" placeholder="Ex. 30">\r
      </div>\r
\r
      <div class="ip-field ip-field--row">\r
        <label class="ip-label">Dur\xE9e estim\xE9e (min)</label>\r
        <input type="number" class="ip-input ip-input--sm" [(ngModel)]="form.duree_estimee" min="1" placeholder="5">\r
      </div>\r
\r
      <div class="ip-field ip-field--row">\r
        <label class="ip-label">Tentatives max</label>\r
        <input type="number" class="ip-input ip-input--sm" [(ngModel)]="form.nombre_tentatives_max" min="1" placeholder="1">\r
      </div>\r
\r
      <div class="ip-field ip-field--row">\r
        <label class="ip-label">Date de d\xE9but</label>\r
        <input type="date" class="ip-input ip-input--sm" [(ngModel)]="form.date_debut">\r
      </div>\r
\r
      <div class="ip-field ip-field--row">\r
        <label class="ip-label">Date de fin</label>\r
        <input type="date" class="ip-input ip-input--sm" [(ngModel)]="form.date_fin">\r
      </div>\r
\r
      <div class="ip-divider"></div>\r
\r
      <div class="ip-toggle-row">\r
        <div><div class="ip-toggle-label">Sondage actif</div><div class="ip-toggle-sub">Visible et accessible</div></div>\r
        <label class="ip-switch"><input type="checkbox" [(ngModel)]="form.est_actif"><span class="ip-switch-track"></span></label>\r
      </div>\r
      <div class="ip-toggle-row">\r
        <div><div class="ip-toggle-label">Anonyme</div><div class="ip-toggle-sub">R\xE9ponses non li\xE9es \xE0 l'utilisateur</div></div>\r
        <label class="ip-switch"><input type="checkbox" [(ngModel)]="form.est_anonyme"><span class="ip-switch-track"></span></label>\r
      </div>\r
      <div class="ip-toggle-row">\r
        <div><div class="ip-toggle-label">Obligatoire</div><div class="ip-toggle-sub">L'employ\xE9 doit r\xE9pondre</div></div>\r
        <label class="ip-switch"><input type="checkbox" [(ngModel)]="form.est_obligatoire"><span class="ip-switch-track"></span></label>\r
      </div>\r
      <div class="ip-toggle-row">\r
        <div><div class="ip-toggle-label">Retour en arri\xE8re</div><div class="ip-toggle-sub">Modifier les r\xE9ponses pr\xE9c\xE9dentes</div></div>\r
        <label class="ip-switch"><input type="checkbox" [(ngModel)]="form.autorise_retour"><span class="ip-switch-track"></span></label>\r
      </div>\r
      <div class="ip-toggle-row">\r
        <div><div class="ip-toggle-label">Afficher la progression</div><div class="ip-toggle-sub">Barre de progression visible</div></div>\r
        <label class="ip-switch"><input type="checkbox" [(ngModel)]="form.afficher_progres"><span class="ip-switch-track"></span></label>\r
      </div>\r
\r
      <div class="ip-save-row">\r
        <button type="button" class="ip-btn ip-btn--primary ip-btn--wide" [disabled]="saving" (click)="saveSondage()">\r
          <i class="isax isax-save-2"></i>\r
          {{ saving ? 'Enregistrement\u2026' : (tab === 'creer' ? 'Cr\xE9er et ajouter des questions' : 'Enregistrer') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
</ng-container>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE : QUESTIONS                                                          -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="tab === 'questions'">\r
\r
  <div class="ip-page-head">\r
    <div>\r
      <button type="button" class="ip-btn ip-btn--ghost ip-btn--sm" (click)="backToList()">\r
        <i class="isax isax-arrow-left-2"></i> Retour\r
      </button>\r
      <h5 class="ip-page-head__title mt-2">{{ selectedSondage?.titre }}</h5>\r
      <p class="ip-page-head__sub">G\xE9rer les questions du sondage</p>\r
    </div>\r
    <button type="button" class="ip-btn ip-btn--primary" (click)="newQuestion()">\r
      <i class="isax isax-add"></i> Ajouter une question\r
    </button>\r
  </div>\r
\r
  <!-- Formulaire question -->\r
  <div *ngIf="editingQuestion" class="ip-card ip-question-form-card">\r
    <div class="ip-form-section-head">\r
      <i class="isax isax-edit-2"></i>\r
      {{ editingQuestion.id ? 'Modifier la question' : 'Nouvelle question' }}\r
    </div>\r
\r
    <div *ngIf="questionError" class="alert alert-danger mb-3">{{ questionError }}</div>\r
\r
    <div class="ip-question-form-grid">\r
      <div class="ip-field">\r
        <label class="ip-label">Question <span class="ip-required">*</span></label>\r
        <input type="text" class="ip-input" [(ngModel)]="editingQuestion.question"\r
               placeholder="Entrez votre question\u2026">\r
      </div>\r
\r
      <div class="ip-field">\r
        <label class="ip-label">Type <span class="ip-required">*</span></label>\r
        <select class="ip-input" [(ngModel)]="editingQuestion.type">\r
          <option *ngFor="let t of questionTypes" [value]="t.value">{{ t.label }}</option>\r
        </select>\r
      </div>\r
\r
      <div class="ip-field" *ngIf="editingQuestion.type">\r
        <label class="ip-label">Description / aide (optionnel)</label>\r
        <input type="text" class="ip-input" [(ngModel)]="editingQuestion.aide"\r
               placeholder="Pr\xE9cision ou aide pour l'utilisateur\u2026">\r
      </div>\r
\r
      <!-- Options pour radio/checkbox/select -->\r
      <div class="ip-field ip-field--full" *ngIf="needsOptions(editingQuestion.type!)">\r
        <label class="ip-label">Options de r\xE9ponse</label>\r
        <div class="ip-options-list">\r
          <div *ngFor="let opt of (editingQuestion.options || []); let i = index" class="ip-option-row">\r
            <span class="ip-option-text">{{ opt }}</span>\r
            <button type="button" class="ip-action-btn ip-action-btn--danger ip-action-btn--xs" (click)="removeOption(i)">\r
              <i class="isax isax-minus-cirlce"></i>\r
            </button>\r
          </div>\r
          <div *ngIf="(editingQuestion.options?.length ?? 0) === 0" class="ip-text-muted ip-text-sm">Aucune option ajout\xE9e</div>\r
        </div>\r
        <div class="ip-add-option-row">\r
          <input type="text" class="ip-input" [(ngModel)]="newOptionText" placeholder="Nouvelle option\u2026"\r
                 (keyup.enter)="addOption()">\r
          <button type="button" class="ip-btn ip-btn--ghost ip-btn--sm" (click)="addOption()">\r
            <i class="isax isax-add"></i> Ajouter\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Min/max pour \xE9chelle/notation -->\r
      <div class="ip-field" *ngIf="hasEchelle(editingQuestion.type!)">\r
        <label class="ip-label">Valeur min</label>\r
        <input type="number" class="ip-input" [(ngModel)]="editingQuestion.valeur_min" placeholder="1">\r
      </div>\r
      <div class="ip-field" *ngIf="hasEchelle(editingQuestion.type!)">\r
        <label class="ip-label">Valeur max</label>\r
        <input type="number" class="ip-input" [(ngModel)]="editingQuestion.valeur_max" placeholder="5">\r
      </div>\r
    </div>\r
\r
    <div class="ip-question-form-footer">\r
      <div class="ip-toggle-row ip-toggle-row--inline">\r
        <div class="ip-toggle-label">Obligatoire</div>\r
        <label class="ip-switch"><input type="checkbox" [(ngModel)]="editingQuestion.est_obligatoire"><span class="ip-switch-track"></span></label>\r
      </div>\r
      <div class="ip-question-form-actions">\r
        <button type="button" class="ip-btn ip-btn--ghost" (click)="cancelQuestion()">Annuler</button>\r
        <button type="button" class="ip-btn ip-btn--primary" (click)="saveQuestion()">\r
          <i class="isax isax-tick-circle"></i>\r
          {{ editingQuestion.id ? 'Mettre \xE0 jour' : 'Ajouter la question' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Liste des questions -->\r
  <div class="ip-card">\r
    <div class="ip-questions-list" *ngIf="questions.length > 0">\r
      <div *ngFor="let q of questions; let i = index" class="ip-question-item">\r
        <div class="ip-question-num">{{ i + 1 }}</div>\r
        <div class="ip-question-content">\r
          <div class="ip-question-text">\r
            {{ q.question }}\r
            <span *ngIf="q.est_obligatoire" class="ip-required ml-1">*</span>\r
          </div>\r
          <div class="ip-question-meta">\r
            <span class="ip-q-type-badge">{{ getQuestionTypeLabel(q.type) }}</span>\r
            <span *ngIf="q.options && q.options.length > 0" class="ip-text-muted ip-text-sm">\r
              {{ q.options.length }} option{{ q.options.length !== 1 ? 's' : '' }}\r
            </span>\r
            <span *ngIf="q.aide" class="ip-text-muted ip-text-sm">\r
              <i class="isax isax-info-circle"></i> {{ q.aide }}\r
            </span>\r
          </div>\r
        </div>\r
        <div class="ip-question-actions">\r
          <button class="ip-action-btn" title="Modifier" (click)="editQuestion(q)">\r
            <i class="isax isax-edit-2"></i>\r
          </button>\r
          <button class="ip-action-btn ip-action-btn--danger" title="Supprimer" (click)="confirmDeleteQuestion(q.id!)">\r
            <i class="isax isax-trash"></i>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="questions.length === 0" class="ip-empty">\r
      <i class="isax isax-note-21"></i>\r
      <span>Aucune question \u2014 cliquez sur "Ajouter une question"</span>\r
    </div>\r
  </div>\r
\r
  <!-- Confirm suppression question -->\r
  <div *ngIf="confirmDeleteQId" class="ip-confirm-overlay">\r
    <div class="ip-confirm-box">\r
      <i class="isax isax-warning-2 ip-confirm-icon"></i>\r
      <p class="ip-confirm-text">Supprimer cette question ? Les r\xE9ponses associ\xE9es seront aussi supprim\xE9es.</p>\r
      <div class="ip-confirm-actions">\r
        <button type="button" class="ip-btn ip-btn--ghost" (click)="confirmDeleteQId = null">Annuler</button>\r
        <button type="button" class="ip-btn ip-btn--danger" (click)="deleteQuestion()">Supprimer</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
</ng-container>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE : STATISTIQUES                                                       -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="tab === 'stats'">\r
\r
  <div class="ip-page-head">\r
    <div>\r
      <button type="button" class="ip-btn ip-btn--ghost ip-btn--sm" (click)="backToList()">\r
        <i class="isax isax-arrow-left-2"></i> Retour\r
      </button>\r
      <h5 class="ip-page-head__title mt-2">Statistiques \u2014 {{ selectedSondage?.titre }}</h5>\r
    </div>\r
    <button type="button" class="ip-btn ip-btn--ghost" (click)="exportCsv(selectedSondage!)">\r
      <i class="isax isax-document-download"></i> Export CSV\r
    </button>\r
  </div>\r
\r
  <div *ngIf="statsLoading" class="ip-loader"><div class="spinner-border"></div></div>\r
\r
  <ng-container *ngIf="!statsLoading && stats">\r
    <div class="ip-kpi-row">\r
      <div class="ip-kpi-card">\r
        <div class="ip-kpi-icon"><i class="isax isax-note-21"></i></div>\r
        <div><div class="ip-kpi-label">Questions</div><div class="ip-kpi-value">{{ stats.sondage.nombre_questions }}</div></div>\r
      </div>\r
      <div class="ip-kpi-card">\r
        <div class="ip-kpi-icon ip-kpi-icon--success"><i class="isax isax-people"></i></div>\r
        <div><div class="ip-kpi-label">R\xE9ponses</div><div class="ip-kpi-value">{{ stats.sondage.nombre_reponses }}</div></div>\r
      </div>\r
      <div class="ip-kpi-card">\r
        <div class="ip-kpi-icon ip-kpi-icon--warn"><i class="isax isax-chart-2"></i></div>\r
        <div><div class="ip-kpi-label">Taux de r\xE9ponse</div><div class="ip-kpi-value">{{ stats.taux_reponse }}%</div></div>\r
      </div>\r
    </div>\r
\r
    <div *ngFor="let q of stats.questions; let i = index" class="ip-stat-question-card ip-card">\r
      <div class="ip-stat-q-header">\r
        <span class="ip-stat-q-num">Q{{ i + 1 }}</span>\r
        <div class="ip-stat-q-text">{{ q.question }}</div>\r
        <span class="ip-stat-q-count">{{ q.nombre_reponses }} r\xE9ponse{{ q.nombre_reponses !== 1 ? 's' : '' }}</span>\r
      </div>\r
\r
      <div *ngIf="q.repartition" class="ip-stat-bars">\r
        <div *ngFor="let item of q.repartition | keyvalue" class="ip-stat-bar-row">\r
          <div class="ip-stat-bar-label">{{ item.key || '(vide)' }}</div>\r
          <div class="ip-stat-bar-wrap">\r
            <div class="ip-stat-bar-fill" [style.width.%]="statWidth(asNumber(item.value), q.nombre_reponses)"></div>\r
          </div>\r
          <div class="ip-stat-bar-val">{{ item.value }} ({{ statWidth(asNumber(item.value), q.nombre_reponses) }}%)</div>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="q.moyenne !== undefined" class="ip-stat-moyenne">\r
        <span class="ip-stat-moy-label">Moyenne</span>\r
        <span class="ip-stat-moy-val">{{ q.moyenne }}<span class="ip-stat-moy-max"> / {{ q.type === 'notation' ? 5 : 10 }}</span></span>\r
      </div>\r
\r
      <div *ngIf="q.reponses_texte" class="ip-stat-textes">\r
        <div *ngFor="let t of q.reponses_texte" class="ip-stat-texte-item">\r
          <i class="isax isax-quote-up"></i> {{ t }}\r
        </div>\r
        <div *ngIf="q.reponses_texte.length === 0" class="ip-text-muted ip-text-sm">Aucune r\xE9ponse textuelle</div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="stats.questions.length === 0" class="ip-empty">\r
      <i class="isax isax-chart-2"></i><span>Aucune donn\xE9e disponible</span>\r
    </div>\r
  </ng-container>\r
\r
</ng-container>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE : ENVOYER PAR EMAIL                                                   -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="tab === 'envoyer'">\r
\r
  <div class="ip-page-head">\r
    <div>\r
      <button type="button" class="ip-btn ip-btn--ghost ip-btn--sm" (click)="backToList()">\r
        <i class="isax isax-arrow-left-2"></i> Retour\r
      </button>\r
      <h5 class="ip-page-head__title mt-2">Envoyer \u2014 {{ selectedSondage?.titre }}</h5>\r
    </div>\r
  </div>\r
\r
  <div class="ip-card ip-envoyer-card">\r
\r
    <div class="ip-envoyer-info">\r
      <div class="ip-envoyer-info-row">\r
        <span class="ip-envoyer-info-label">Formation(s) li\xE9e(s)</span>\r
        <span class="ip-envoyer-info-val">\r
          <ng-container *ngIf="selectedSondage && getFormationsTitres(selectedSondage).length > 0">\r
            <span *ngFor="let t of getFormationsTitres(selectedSondage!); let last = last">{{ t }}<span *ngIf="!last">, </span></span>\r
          </ng-container>\r
          <ng-container *ngIf="!selectedSondage || getFormationsTitres(selectedSondage).length === 0">\u2014 (aucune)</ng-container>\r
        </span>\r
      </div>\r
      <div class="ip-envoyer-info-row">\r
        <span class="ip-envoyer-info-label">D\xE9clenchement</span>\r
        <span class="ip-envoyer-info-val">\r
          {{ selectedSondage?.declenchement === 'a_chaud' ? '\xC0 chaud' : selectedSondage?.declenchement === 'a_froid' ? '\xC0 froid (' + (selectedSondage?.delai_jours || '?') + ' j)' : 'Manuel' }}\r
        </span>\r
      </div>\r
      <div class="ip-envoyer-info-row" *ngIf="!isEnqueteLibreSansFormation">\r
        <span class="ip-envoyer-info-label">Entreprise</span>\r
        <span class="ip-envoyer-info-val">{{ getEntrepriseNom(selectedSondage?.entreprise_id) }}</span>\r
      </div>\r
    </div>\r
\r
    <div class="ip-divider"></div>\r
\r
    <!-- Enqu\xEAte libre : r\xE9sum\xE9 des entreprises cibles sauvegard\xE9es -->\r
    <div *ngIf="isEnqueteLibreSansFormation && (selectedSondage?.parametres?.cible_entreprise_ids?.length ?? 0) > 0" class="ip-envoyer-cibles-info">\r
      <i class="isax isax-buildings-2"></i>\r
      <span>\r
        Cibles enregistr\xE9es : <strong>{{ (selectedSondage?.parametres?.cible_entreprise_ids ?? []).length }}</strong> entreprise{{ (selectedSondage?.parametres?.cible_entreprise_ids?.length ?? 0) > 1 ? 's' : '' }}\r
      </span>\r
    </div>\r
\r
    <!-- Enqu\xEAte libre sans formation : s\xE9lecteur multi-entreprises (modifiable avant envoi) -->\r
    <ng-container *ngIf="isEnqueteLibreSansFormation">\r
      <div class="ip-field ip-field--mb">\r
        <label class="ip-label">\r
          Entreprise(s) destinataire(s) <span class="ip-required">*</span>\r
        </label>\r
        <div class="ip-multiselect-list">\r
          <label class="ip-multiselect-item ip-multiselect-item--all"\r
                 [class.selected]="allEnvoyerEntreprisesSelected"\r
                 title="Toutes les entreprises">\r
            <input type="checkbox" class="ip-multiselect-cb"\r
                   [checked]="allEnvoyerEntreprisesSelected"\r
                   (change)="toggleAllEnvoyerEntreprises()"\r
                   title="Toutes les entreprises">\r
            <strong>Toutes les entreprises</strong>\r
          </label>\r
          <label *ngFor="let e of entreprises" class="ip-multiselect-item"\r
                 [class.selected]="isEnvoyerEntrepriseSelected(e.id)"\r
                 [title]="e.nom">\r
            <input type="checkbox" class="ip-multiselect-cb"\r
                   [checked]="isEnvoyerEntrepriseSelected(e.id)"\r
                   (change)="toggleEnvoyerEntreprise(e.id)"\r
                   [title]="e.nom">\r
            <span>{{ e.nom }}</span>\r
          </label>\r
        </div>\r
        <div *ngIf="envoyerEntrepriseIds.length > 0" class="ip-multiselect-summary">\r
          {{ allEnvoyerEntreprisesSelected ? 'Toutes les entreprises s\xE9lectionn\xE9es' : envoyerEntrepriseIds.length + ' entreprise' + (envoyerEntrepriseIds.length > 1 ? 's' : '') + ' s\xE9lectionn\xE9e' + (envoyerEntrepriseIds.length > 1 ? 's' : '') }}\r
        </div>\r
        <div class="ip-field-hint">\r
          <i class="isax isax-info-circle"></i>\r
          L'email sera envoy\xE9 \xE0 tous les employ\xE9s des entreprises s\xE9lectionn\xE9es.\r
        </div>\r
      </div>\r
    </ng-container>\r
\r
    <p *ngIf="selectedSondage && getFormationsTitres(selectedSondage).length > 0" class="ip-envoyer-desc">\r
      Un email contenant un lien personnel \xE0 usage unique sera envoy\xE9 \xE0 tous les participants des formations s\xE9lectionn\xE9es.\r
    </p>\r
    <div *ngIf="selectedSondage && !isEnqueteLibreSansFormation && getFormationsTitres(selectedSondage).length === 0" class="ip-alert ip-alert--info ip-alert--mb">\r
      <i class="isax isax-info-circle"></i>\r
      Ce sondage n'est li\xE9 \xE0 aucune formation. L'invitation sera envoy\xE9e \xE0 tous les employ\xE9s de l'entreprise concern\xE9e.\r
    </div>\r
\r
    <div *ngIf="envoyerSuccess" class="ip-alert ip-alert--success">\r
      <i class="isax isax-tick-circle"></i> {{ envoyerSuccess }}\r
    </div>\r
    <div *ngIf="envoyerError" class="ip-alert ip-alert--danger">\r
      <i class="isax isax-warning-2"></i> {{ envoyerError }}\r
    </div>\r
\r
    <button type="button" class="ip-btn ip-btn--primary ip-btn--wide"\r
            [disabled]="envoyerLoading || !!envoyerSuccess"\r
            (click)="envoyerSondage()">\r
      <span *ngIf="!envoyerLoading"><i class="isax isax-send-2"></i> Envoyer \xE0 tous les participants</span>\r
      <span *ngIf="envoyerLoading"><span class="spinner-border spinner-border-sm me-2"></span> Envoi en cours\u2026</span>\r
    </button>\r
  </div>\r
\r
</ng-container>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE : R\xC9SULTATS D\xC9TAILL\xC9S                                                 -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="tab === 'resultats'">\r
\r
  <div class="ip-page-head">\r
    <div>\r
      <button type="button" class="ip-btn ip-btn--ghost ip-btn--sm" (click)="backToList()">\r
        <i class="isax isax-arrow-left-2"></i> Retour\r
      </button>\r
      <h5 class="ip-page-head__title mt-2">R\xE9sultats \u2014 {{ selectedSondage?.titre }}</h5>\r
      <p class="ip-page-head__sub">R\xE9ponses individuelles par participant</p>\r
    </div>\r
    <button type="button" class="ip-btn ip-btn--ghost" (click)="exportCsv(selectedSondage!)">\r
      <i class="isax isax-document-download"></i> Export CSV\r
    </button>\r
  </div>\r
\r
  <div *ngIf="resultatsLoading" class="ip-loader"><div class="spinner-border"></div></div>\r
\r
  <ng-container *ngIf="!resultatsLoading">\r
    <div *ngIf="!resultats || resultats.length === 0" class="ip-empty-state">\r
      <i class="isax isax-note-21"></i>\r
      <p>Aucune r\xE9ponse re\xE7ue pour ce sondage.</p>\r
      <button type="button" class="ip-btn ip-btn--primary" (click)="openEnvoyer(selectedSondage!)">\r
        <i class="isax isax-send-2"></i> Envoyer le sondage\r
      </button>\r
    </div>\r
\r
    <div *ngIf="resultats && resultats.length > 0" class="ip-card ip-resultats-card">\r
      <div class="ip-resultats-header">\r
        <span class="ip-resultats-count">{{ resultats.length }} r\xE9ponse{{ resultats.length > 1 ? 's' : '' }} re\xE7ue{{ resultats.length > 1 ? 's' : '' }}</span>\r
      </div>\r
      <div class="ip-resultats-table-wrap">\r
        <table class="ip-resultats-table">\r
          <thead>\r
            <tr>\r
              <th class="ip-th--participant">Participant</th>\r
              <th class="ip-th--date">R\xE9pondu le</th>\r
              <th *ngFor="let q of resultatsQuestions; let i = index">Q{{ i + 1 }} \u2014 {{ q.question }}</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let r of resultats">\r
              <td>\r
                <div class="ip-res-user">\r
                  <span class="ip-res-avatar">{{ (r.user?.prenom || r.user?.name || '?')[0] | uppercase }}</span>\r
                  <div>\r
                    <div class="ip-res-name">{{ r.user?.prenom }} {{ r.user?.nom }}</div>\r
                    <div class="ip-res-email">{{ r.user?.email }}</div>\r
                  </div>\r
                </div>\r
              </td>\r
              <td class="ip-res-date">{{ r.repondu_at | date:'dd/MM/yyyy HH:mm' }}</td>\r
              <td *ngFor="let q of resultatsQuestions" class="ip-res-val">\r
                {{ getReponseLabel(r.reponses, q.id) }}\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </ng-container>\r
\r
</ng-container>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- CONFIRM SUPPRESSION SONDAGE                                               -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div *ngIf="confirmDeleteId" class="ip-confirm-overlay">\r
  <div class="ip-confirm-box">\r
    <i class="isax isax-warning-2 ip-confirm-icon ip-confirm-icon--danger"></i>\r
    <p class="ip-confirm-text">Supprimer ce sondage d\xE9finitivement ? Toutes les questions et r\xE9ponses seront perdues.</p>\r
    <div class="ip-confirm-actions">\r
      <button type="button" class="ip-btn ip-btn--ghost" (click)="confirmDeleteId = null">Annuler</button>\r
      <button type="button" class="ip-btn ip-btn--danger" (click)="deleteSondage()">Supprimer d\xE9finitivement</button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/superadmin/superadmin-sondage/superadmin-sondage.component.scss */\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 160px;\n}\n.ip-text-muted {\n  color: #6C757D;\n}\n.ip-text-sm {\n  font-size: 11px;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 15px;\n}\n.ip-btn--primary {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--danger {\n  background: #DC3545;\n  color: #fff;\n  border: none;\n}\n.ip-btn--danger:hover {\n  background: rgb(197.9088607595, 34.2911392405, 49.9670886076);\n}\n.ip-btn--wide {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn--danger:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.ip-action-btn--xs {\n  width: 22px;\n  height: 22px;\n  font-size: 12px;\n  border-radius: 4px;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-filter-card {\n  padding: 14px 18px;\n  overflow: visible;\n}\n.ip-filter-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon {\n  padding-left: 34px;\n}\n.ip-input--sm {\n  width: auto;\n}\n.ip-textarea {\n  resize: vertical;\n}\n.ip-input-icon-wrap {\n  position: relative;\n}\n.ip-input-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-sondage-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.ip-sondage-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: box-shadow 0.15s;\n}\n.ip-sondage-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.ip-sc-bar {\n  height: 4px;\n  flex-shrink: 0;\n}\n.ip-sc-body {\n  flex: 1;\n  padding: 16px;\n}\n.ip-sc-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ip-sc-type-badge {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-sc-statut {\n  font-size: 11px;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.ip-sc-statut i {\n  font-size: 7px;\n}\n.badge-ouvert {\n  background: #ECFDF5;\n  color: #059669;\n}\n.badge-inactif {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.badge-termine {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-sc-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 6px;\n}\n.ip-sc-desc {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0 0 12px;\n  line-height: 1.5;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.ip-sc-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 10px;\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-sc-meta span {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-sc-meta i {\n  font-size: 12px;\n}\n.ip-sc-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ip-tag {\n  font-size: 10px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-tag--warn {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-sc-footer {\n  padding: 10px 14px;\n  border-top: 1px solid #E9ECEF;\n  background: #FAFBFF;\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-empty-state {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  color: #6C757D;\n}\n.ip-empty-state i {\n  font-size: 40px;\n  opacity: 0.3;\n  margin-bottom: 12px;\n}\n.ip-empty-state p {\n  margin-bottom: 16px;\n}\n.ip-empty {\n  padding: 40px;\n  text-align: center;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-form-layout {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 20px;\n  align-items: flex-start;\n}\n@media (max-width: 860px) {\n  .ip-form-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-form-card {\n  padding: 20px;\n}\n.ip-form-section-head {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 18px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-form-section-head i {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field {\n  margin-bottom: 14px;\n}\n.ip-field--row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.ip-field--row .ip-label {\n  margin: 0;\n}\n.ip-field--full {\n  grid-column: 1/-1;\n}\n.ip-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-required {\n  color: #DC3545;\n}\n.ip-divider {\n  height: 1px;\n  background: #E9ECEF;\n  margin: 14px 0;\n}\n.ip-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row:last-child {\n  border-bottom: none;\n}\n.ip-toggle-row--inline {\n  border: none;\n  padding: 0;\n}\n.ip-toggle-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch input:checked + .ip-switch-track {\n  background: #D4AF37;\n}\n.ip-switch input:checked + .ip-switch-track::before {\n  transform: translateX(18px);\n}\n.ip-save-row {\n  padding-top: 16px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 14px;\n}\n.ip-question-form-card {\n  padding: 20px;\n  margin-bottom: 16px;\n}\n.ip-question-form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .ip-question-form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-question-form-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 14px;\n}\n.ip-question-form-actions {\n  display: flex;\n  gap: 8px;\n}\n.ip-options-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.ip-option-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 6px 10px;\n  background: #F8F9FA;\n  border-radius: 6px;\n}\n.ip-option-text {\n  font-size: 13px;\n  color: #1A1A2E;\n  flex: 1;\n}\n.ip-add-option-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.ip-add-option-row .ip-input {\n  flex: 1;\n}\n.ip-questions-list {\n  padding: 0;\n}\n.ip-question-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #E9ECEF;\n  transition: background 0.1s;\n}\n.ip-question-item:last-child {\n  border-bottom: none;\n}\n.ip-question-item:hover {\n  background: #FAFBFF;\n}\n.ip-question-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ip-question-content {\n  flex: 1;\n  min-width: 0;\n}\n.ip-question-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A1A2E;\n  margin-bottom: 5px;\n}\n.ip-question-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.ip-q-type-badge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #FDF8E7;\n  color: #D4AF37;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-question-actions {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.ip-kpi-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-stat-question-card {\n  padding: 18px 20px;\n}\n.ip-stat-q-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.ip-stat-q-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ip-stat-q-text {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-stat-q-count {\n  font-size: 12px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.ip-stat-bars {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-stat-bar-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-stat-bar-label {\n  font-size: 12px;\n  color: #1A1A2E;\n  min-width: 120px;\n}\n.ip-stat-bar-wrap {\n  flex: 1;\n  height: 10px;\n  background: #F1F3F5;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ip-stat-bar-fill {\n  height: 100%;\n  background: #D4AF37;\n  border-radius: 99px;\n  transition: width 0.3s;\n}\n.ip-stat-bar-val {\n  font-size: 11px;\n  color: #6C757D;\n  min-width: 80px;\n  text-align: right;\n}\n.ip-stat-moyenne {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-stat-moy-label {\n  font-size: 12px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ip-stat-moy-val {\n  font-size: 28px;\n  font-weight: 700;\n  color: #D4AF37;\n}\n.ip-stat-moy-max {\n  font-size: 14px;\n  color: #6C757D;\n}\n.ip-stat-textes {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-stat-texte-item {\n  font-size: 13px;\n  color: #1A1A2E;\n  background: #F8F9FA;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  gap: 8px;\n}\n.ip-stat-texte-item i {\n  font-size: 12px;\n  color: #6C757D;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.ip-confirm-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.ip-confirm-box {\n  background: #fff;\n  border-radius: 16px;\n  padding: 28px 32px;\n  max-width: 400px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n.ip-confirm-icon {\n  font-size: 40px;\n  color: #D97706;\n  margin-bottom: 12px;\n  display: block;\n}\n.ip-confirm-icon--danger {\n  color: #DC3545;\n}\n.ip-confirm-text {\n  font-size: 14px;\n  color: #1A1A2E;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n.ip-confirm-actions {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.ip-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.ip-pagination__info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn i {\n  font-size: 13px;\n}\n.ip-pg-btn:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  cursor: default;\n}\n.ip-pg-btn[disabled] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n.mt-2 {\n  margin-top: 8px;\n}\n.ml-1 {\n  margin-left: 4px;\n}\n.ip-cat-tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.ip-cat-tab {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6C757D;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.ip-cat-tab i {\n  font-size: 15px;\n}\n.ip-cat-tab__count {\n  background: #F1F3F5;\n  color: #6C757D;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 20px;\n  min-width: 22px;\n  text-align: center;\n}\n.ip-cat-tab:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-cat-tab.active {\n  border-color: #D4AF37;\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-cat-tab.active .ip-cat-tab__count {\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n}\n.ip-cat-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.ip-cat-desc {\n  font-size: 13px;\n  color: #6C757D;\n  line-height: 1.5;\n}\n.ip-cat-desc strong {\n  color: #1A1A2E;\n}\n.ip-cat-actions {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ip-cat-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 6px;\n}\n.ip-cat-badge i {\n  font-size: 12px;\n}\n.ip-cat-badge--chaud {\n  background: #FEF3C7;\n  color: #D97706;\n}\n.ip-cat-badge--froid {\n  background: #EFF6FF;\n  color: #1D6EBF;\n}\n.ip-cat-badge--enquete {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.ip-section-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n  margin-top: 4px;\n}\n.ip-section-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-section-badge i {\n  font-size: 12px;\n}\n.ip-section-badge--global {\n  background: #FDF8E7;\n  color: #D4AF37;\n}\n.ip-section-hint {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-sondage-card--template {\n  border-style: dashed;\n  border-color: rgb(218.2368421053, 223.25, 228.2631578947);\n  background: rgb(253.7846153846, 250.7461538462, 240.4153846154);\n}\n.ip-sondage-card--readonly {\n  border-color: rgb(224.1421052632, 228.35, 232.5578947368);\n  background: #fafafa;\n  opacity: 0.92;\n}\n.ip-template-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #FDF8E7;\n  color: #D4AF37;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-template-badge i {\n  font-size: 11px;\n}\n.ip-tag {\n  font-size: 10px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-tag--warn {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-tag--info {\n  background: #EFF6FF;\n  color: #1D6EBF;\n}\n.ip-tag--enquete {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.ip-tag--entreprise {\n  background: #F0FDF4;\n  color: #166534;\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n}\n.ip-tag--entreprise i {\n  font-size: 10px;\n}\n.ip-input-readonly {\n  font-size: 13px;\n  color: #1A1A2E;\n  font-weight: 500;\n  padding: 8px 12px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  flex: 1;\n}\n.ip-field-hint {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-field-hint i {\n  font-size: 12px;\n}\n.ip-label-hint {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 10px;\n  color: #6C757D;\n  margin-left: 4px;\n}\n.ip-resultats-card {\n  padding: 0;\n  overflow: hidden;\n}\n.ip-resultats-header {\n  padding: 14px 20px;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 13px;\n  color: #6C757D;\n}\n.ip-resultats-count {\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-envoyer-info-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 0;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 13px;\n}\n.ip-envoyer-info-row:last-child {\n  border-bottom: none;\n}\n.ip-envoyer-info-label {\n  color: #6C757D;\n  min-width: 140px;\n  flex-shrink: 0;\n}\n.ip-envoyer-info-val {\n  color: #1A1A2E;\n  font-weight: 500;\n}\n.ip-action-btn--send:hover {\n  border-color: #059669;\n  color: #059669;\n  background: #ECFDF5;\n}\n.ip-action-btn--results:hover {\n  border-color: #7C3AED;\n  color: #7C3AED;\n  background: #F5F3FF;\n}\n.ip-alert {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.ip-alert i {\n  font-size: 15px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.ip-alert--success {\n  background: #ECFDF5;\n  border: 1px solid #A7F3D0;\n  color: #065F46;\n}\n.ip-alert--danger {\n  background: #FFF5F5;\n  border: 1px solid #FCA5A5;\n  color: #991B1B;\n}\n.ip-alert--warn {\n  background: #FFF9EC;\n  border: 1px solid #FCD34D;\n  color: #92400E;\n}\n.ip-alert--info {\n  background: #EFF6FF;\n  border: 1px solid #BFDBFE;\n  color: #1E40AF;\n}\n.ip-envoyer-info {\n  background: #FAFBFF;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-envoyer-info__row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 13px;\n}\n.ip-envoyer-info__label {\n  min-width: 140px;\n  font-weight: 600;\n  color: #6C757D;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-envoyer-info__val {\n  color: #1A1A2E;\n}\n.ip-btn-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n  flex-shrink: 0;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-multiselect-list {\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  background: #fff;\n}\n.ip-multiselect-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 14px;\n  cursor: pointer;\n  font-size: 13px;\n  color: #1A1A2E;\n  border-bottom: 1px solid #E9ECEF;\n  transition: background 0.1s;\n}\n.ip-multiselect-item:last-child {\n  border-bottom: none;\n}\n.ip-multiselect-item:hover {\n  background: #f9fafb;\n}\n.ip-multiselect-item.selected {\n  background: #FDF8E7;\n  color: rgb(177.7777777778, 144.8888888889, 38.2222222222);\n  font-weight: 500;\n}\n.ip-multiselect-cb {\n  accent-color: #D4AF37;\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.ip-multiselect-summary {\n  font-size: 11px;\n  color: rgb(177.7777777778, 144.8888888889, 38.2222222222);\n  font-weight: 600;\n  margin-top: 5px;\n  padding: 3px 6px;\n  background: #FDF8E7;\n  border-radius: 4px;\n  display: inline-block;\n}\n.ip-multiselect-empty {\n  padding: 10px 14px;\n}\n.ip-envoyer-card {\n  max-width: 600px;\n}\n.ip-field--mb {\n  margin-bottom: 20px;\n}\n.ip-envoyer-cibles-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0fdf4;\n  border: 1px solid #a7f3d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #065f46;\n  margin-bottom: 16px;\n}\n.ip-envoyer-cibles-info i {\n  font-size: 15px;\n}\n.ip-envoyer-desc {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 20px;\n  line-height: 1.6;\n}\n.ip-alert--mb {\n  margin-bottom: 20px;\n}\n.ip-th--participant {\n  width: 180px;\n}\n.ip-th--date {\n  width: 130px;\n}\n.ip-sc-formation-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #374151;\n  background: #f3f4f6;\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.ip-sc-formation-tag i {\n  font-size: 12px;\n}\n.ip-resultats-table-wrap {\n  overflow-x: auto;\n}\n.ip-resultats-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.ip-res-th {\n  padding: 10px 14px;\n  background: #F8F9FA;\n  border-bottom: 2px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  white-space: nowrap;\n  text-align: left;\n}\n.ip-res-th--participant {\n  min-width: 180px;\n}\n.ip-res-row {\n  border-bottom: 1px solid #E9ECEF;\n  transition: background 0.1s;\n}\n.ip-res-row:last-child {\n  border-bottom: none;\n}\n.ip-res-row:hover {\n  background: #FAFBFF;\n}\n.ip-res-td {\n  padding: 10px 14px;\n  vertical-align: middle;\n  color: #1A1A2E;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ip-res-participant {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-res-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ip-res-user {\n  min-width: 0;\n}\n.ip-res-nom {\n  font-weight: 500;\n  font-size: 13px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ip-res-email {\n  font-size: 11px;\n  color: #6C757D;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ip-res-date {\n  white-space: nowrap;\n  color: #6C757D;\n  font-size: 12px;\n}\n/*# sourceMappingURL=superadmin-sondage.component.css.map */\n'] }]
  }], () => [{ type: SondageService }, { type: ClientCompanyService }, { type: FormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminSondageComponent, { className: "SuperadminSondageComponent", filePath: "app/features/superadmin/superadmin-sondage/superadmin-sondage.component.ts", lineNumber: 34 });
})();
export {
  SuperadminSondageComponent
};
//# sourceMappingURL=chunk-ZTNAX4LG.js.map
