import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  SondageService
} from "./chunk-NYC46I4P.js";
import {
  FormationService
} from "./chunk-QDYFEC2R.js";
import {
  HasPermissionDirective
} from "./chunk-LPKZQSDR.js";
import "./chunk-MFYPUOQJ.js";
import "./chunk-I3LFGWFR.js";
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
import "./chunk-UFFO2UKW.js";
import "./chunk-U7UKDAOZ.js";
import "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  DatePipe,
  KeyValuePipe,
  NgForOf,
  NgIf,
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
} from "./chunk-BSBCM3BI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-sondage/adminrh-sondage.component.ts
var _c0 = () => [];
function AdminrhSondageComponent_ng_container_0_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2, "\xC9valuation \xE0 chaud");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2014 Envoy\xE9e imm\xE9diatement apr\xE8s la fin d'une formation, li\xE9e obligatoirement \xE0 une formation. ");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2, "\xC9valuation \xE0 froid");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2014 Envoy\xE9e automatiquement X jours apr\xE8s la formation pour mesurer l'impact r\xE9el. ");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2, "Enqu\xEAtes libres");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2014 Envoy\xE9es manuellement \xE0 tous les employ\xE9s ou aux participants d'une formation. ");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_button_31_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouvelle \xE9valuation \xE0 chaud");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_button_31_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouvelle \xE9valuation \xE0 froid");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_button_31_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouvelle enqu\xEAte");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreate(ctx_r1.categorieActive));
    });
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275template(2, AdminrhSondageComponent_ng_container_0_button_31_ng_container_2_Template, 2, 0, "ng-container", 0)(3, AdminrhSondageComponent_ng_container_0_button_31_ng_container_3_Template, 2, 0, "ng-container", 0)(4, AdminrhSondageComponent_ng_container_0_button_31_ng_container_4_Template, 2, 0, "ng-container", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "a_chaud");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "a_froid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "enquete");
  }
}
function AdminrhSondageComponent_ng_container_0_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_46_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
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
function AdminrhSondageComponent_ng_container_0_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r6.description);
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_1_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 70);
    \u0275\u0275text(1, "Aucune description");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ~", s_r6.duree_estimee, " min");
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_1_ng_container_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r7, " ");
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_1_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_0_div_48_div_1_ng_container_21_span_1_Template, 3, 1, "span", 71);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getFormationsTitres(s_r6));
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, " Tous les employ\xE9s ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "Anonyme");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "Obligatoire");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_1_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("J+", s_r6.delai_jours);
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementStart(2, "div", 39)(3, "div", 40)(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 42);
    \u0275\u0275element(7, "i", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h6", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AdminrhSondageComponent_ng_container_0_div_48_div_1_p_11_Template, 2, 1, "p", 45)(12, AdminrhSondageComponent_ng_container_0_div_48_div_1_p_12_Template, 2, 0, "p", 46);
    \u0275\u0275elementStart(13, "div", 47)(14, "span");
    \u0275\u0275element(15, "i", 48);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275element(18, "i", 49);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, AdminrhSondageComponent_ng_container_0_div_48_div_1_span_20_Template, 3, 1, "span", 0)(21, AdminrhSondageComponent_ng_container_0_div_48_div_1_ng_container_21_Template, 2, 1, "ng-container", 0)(22, AdminrhSondageComponent_ng_container_0_div_48_div_1_span_22_Template, 3, 0, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 51);
    \u0275\u0275template(24, AdminrhSondageComponent_ng_container_0_div_48_div_1_span_24_Template, 2, 0, "span", 52)(25, AdminrhSondageComponent_ng_container_0_div_48_div_1_span_25_Template, 2, 0, "span", 53)(26, AdminrhSondageComponent_ng_container_0_div_48_div_1_span_26_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 55)(28, "button", 56);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_48_div_1_Template_button_click_28_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openQuestions(s_r6));
    });
    \u0275\u0275element(29, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 58);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_48_div_1_Template_button_click_30_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openStats(s_r6));
    });
    \u0275\u0275element(31, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 60);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_48_div_1_Template_button_click_32_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openResultats(s_r6));
    });
    \u0275\u0275element(33, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 62);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_48_div_1_Template_button_click_34_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEnvoyer(s_r6));
    });
    \u0275\u0275element(35, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 64);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_48_div_1_Template_button_click_36_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEdit(s_r6));
    });
    \u0275\u0275element(37, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 66);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_48_div_1_Template_button_click_38_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleActif(s_r6));
    });
    \u0275\u0275element(39, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 67);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_48_div_1_Template_button_click_40_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(s_r6.id));
    });
    \u0275\u0275element(41, "i", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.typeColor(s_r6.type));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.typeColor(s_r6.type) + "18")("color", ctx_r1.typeColor(s_r6.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.typeLabel(s_r6.type), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatutClass(s_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatutLabel(s_r6), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r6.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r6.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r6.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", s_r6.nombre_questions, " question", s_r6.nombre_questions !== 1 ? "s" : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", s_r6.nombre_reponses, " r\xE9ponse", s_r6.nombre_reponses !== 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r6.duree_estimee);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFormationsTitres(s_r6).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFormationsTitres(s_r6).length === 0 && ctx_r1.categorieActive === "enquete");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r6.est_anonyme);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r6.est_obligatoire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "a_froid" && s_r6.delai_jours);
    \u0275\u0275advance(12);
    \u0275\u0275property("title", s_r6.est_actif ? "Archiver" : "Publier");
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r6.est_actif ? "isax isax-archive" : "isax isax-refresh");
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_2_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Aucune \xE9valuation \xE0 chaud configur\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_2_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Aucune \xE9valuation \xE0 froid configur\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_2_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Aucune enqu\xEAte cr\xE9\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_2_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_48_div_2_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openCreate(ctx_r1.categorieActive));
    });
    \u0275\u0275text(1, "Cr\xE9er maintenant");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275template(2, AdminrhSondageComponent_ng_container_0_div_48_div_2_p_2_Template, 2, 0, "p", 0)(3, AdminrhSondageComponent_ng_container_0_div_48_div_2_p_3_Template, 2, 0, "p", 0)(4, AdminrhSondageComponent_ng_container_0_div_48_div_2_p_4_Template, 2, 0, "p", 0)(5, AdminrhSondageComponent_ng_container_0_div_48_div_2_button_5_Template, 2, 0, "button", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "a_chaud");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "a_froid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categorieActive === "enquete");
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "creer sondages");
  }
}
function AdminrhSondageComponent_ng_container_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_0_div_48_div_1_Template, 42, 26, "div", 35)(2, AdminrhSondageComponent_ng_container_0_div_48_div_2_Template, 6, 4, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sondagesCourants);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sondagesCourants.length === 0);
  }
}
function AdminrhSondageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div")(3, "h5", 3);
    \u0275\u0275text(4, "Sondages & enqu\xEAtes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, "G\xE9rez les \xE9valuations \xE0 chaud, \xE0 froid et les enqu\xEAtes libres de votre entreprise");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCategorie("a_chaud"));
    });
    \u0275\u0275element(9, "i", 7);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "\xC9valuation \xE0 chaud");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 6);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCategorie("a_froid"));
    });
    \u0275\u0275element(15, "i", 9);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "\xC9valuation \xE0 froid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 8);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 6);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCategorie("enquete"));
    });
    \u0275\u0275element(21, "i", 10);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Enqu\xEAtes libres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 8);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 11)(27, "div", 12);
    \u0275\u0275template(28, AdminrhSondageComponent_ng_container_0_ng_container_28_Template, 4, 0, "ng-container", 0)(29, AdminrhSondageComponent_ng_container_0_ng_container_29_Template, 4, 0, "ng-container", 0)(30, AdminrhSondageComponent_ng_container_0_ng_container_30_Template, 4, 0, "ng-container", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, AdminrhSondageComponent_ng_container_0_button_31_Template, 5, 3, "button", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 14)(33, "div", 15)(34, "div", 16)(35, "div", 17);
    \u0275\u0275element(36, "i", 18);
    \u0275\u0275elementStart(37, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_0_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhSondageComponent_ng_container_0_Template_input_ngModelChange_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 20)(39, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_0_Template_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterActif, $event) || (ctx_r1.filterActif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhSondageComponent_ng_container_0_Template_select_ngModelChange_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadAll());
    });
    \u0275\u0275elementStart(40, "option", 22);
    \u0275\u0275text(41, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 23);
    \u0275\u0275text(43, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 24);
    \u0275\u0275text(45, "Inactif");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(46, AdminrhSondageComponent_ng_container_0_div_46_Template, 3, 1, "div", 25)(47, AdminrhSondageComponent_ng_container_0_div_47_Template, 2, 0, "div", 26)(48, AdminrhSondageComponent_ng_container_0_div_48_Template, 3, 2, "div", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("active", ctx_r1.categorieActive === "a_chaud");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.sondagesChaud.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.categorieActive === "a_froid");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.sondagesFroid.length);
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
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "creer sondages");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.search);
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
function AdminrhSondageComponent_ng_container_1_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouvelle \xE9valuation \xE0 chaud");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouvelle \xE9valuation \xE0 froid");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_ng_container_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Nouvelle enqu\xEAte libre");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_1_ng_container_7_ng_container_1_Template, 2, 0, "ng-container", 0)(2, AdminrhSondageComponent_ng_container_1_ng_container_7_ng_container_2_Template, 2, 0, "ng-container", 0)(3, AdminrhSondageComponent_ng_container_1_ng_container_7_ng_container_3_Template, 2, 0, "ng-container", 0);
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
function AdminrhSondageComponent_ng_container_1_ng_container_8_Template(rf, ctx) {
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
function AdminrhSondageComponent_ng_container_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275text(2, " \xC0 chaud ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2, " \xC0 froid ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2, " Enqu\xEAte libre ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function AdminrhSondageComponent_ng_container_1_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 128);
    \u0275\u0275text(1, "(optionnelle \u2014 laissez vide pour envoyer \xE0 tous)");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275text(1, "Chargement des formations\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_div_46_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 135)(1, "input", 136);
    \u0275\u0275listener("change", function AdminrhSondageComponent_ng_container_1_div_46_label_5_Template_input_change_1_listener() {
      const f_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleFormation(f_r12.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.isFormationSelected(f_r12.id));
    \u0275\u0275property("title", f_r12.titre);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isFormationSelected(f_r12.id))("title", f_r12.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r12.titre);
  }
}
function AdminrhSondageComponent_ng_container_1_div_46_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275text(1, "Aucune formation disponible");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130)(1, "label", 131)(2, "input", 132);
    \u0275\u0275listener("change", function AdminrhSondageComponent_ng_container_1_div_46_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAllFormations());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Toutes les formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, AdminrhSondageComponent_ng_container_1_div_46_label_5_Template, 4, 6, "label", 133)(6, AdminrhSondageComponent_ng_container_1_div_46_div_6_Template, 2, 0, "div", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
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
function AdminrhSondageComponent_ng_container_1_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.allFormationsSelected ? "Toutes les formations s\xE9lectionn\xE9es" : ctx_r1.formFormationIds.length + " formation" + (ctx_r1.formFormationIds.length > 1 ? "s" : "") + " s\xE9lectionn\xE9e" + (ctx_r1.formFormationIds.length > 1 ? "s" : ""), " ");
  }
}
function AdminrhSondageComponent_ng_container_1_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275element(1, "i", 140);
    \u0275\u0275text(2, " Le sondage sera envoy\xE9 aux participants de toutes les formations s\xE9lectionn\xE9es. ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\xC0 chaud \u2014 imm\xE9diatement apr\xE8s la formation");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_ng_container_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\xC0 froid \u2014 apr\xE8s un d\xE9lai");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_ng_container_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Manuel (enqu\xEAte libre)");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_1_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "label", 91);
    \u0275\u0275text(2, "D\xE9lai apr\xE8s la formation (jours) ");
    \u0275\u0275elementStart(3, "span", 92);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 141);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_div_72_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.delai_jours, $event) || (ctx_r1.form.delai_jours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.delai_jours);
  }
}
function AdminrhSondageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div")(3, "button", 79);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275element(4, "i", 80);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 81);
    \u0275\u0275template(7, AdminrhSondageComponent_ng_container_1_ng_container_7_Template, 4, 3, "ng-container", 0)(8, AdminrhSondageComponent_ng_container_1_ng_container_8_Template, 2, 1, "ng-container", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminrhSondageComponent_ng_container_1_span_9_Template, 3, 0, "span", 82)(10, AdminrhSondageComponent_ng_container_1_span_10_Template, 3, 0, "span", 83)(11, AdminrhSondageComponent_ng_container_1_span_11_Template, 3, 0, "span", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AdminrhSondageComponent_ng_container_1_div_12_Template, 2, 1, "div", 85);
    \u0275\u0275elementStart(13, "div", 86)(14, "div", 87)(15, "div", 88);
    \u0275\u0275element(16, "i", 89);
    \u0275\u0275text(17, " Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 90)(19, "label", 91);
    \u0275\u0275text(20, "Titre ");
    \u0275\u0275elementStart(21, "span", 92);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.titre, $event) || (ctx_r1.form.titre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 90)(25, "label", 91);
    \u0275\u0275text(26, "Type ");
    \u0275\u0275elementStart(27, "span", 92);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option", 94);
    \u0275\u0275text(31, "Sondage de satisfaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 95);
    \u0275\u0275text(33, "\xC9valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 96);
    \u0275\u0275text(35, "Retour d'exp\xE9rience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 97);
    \u0275\u0275text(37, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 98);
    \u0275\u0275text(39, "Enqu\xEAte");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 90)(41, "label", 91);
    \u0275\u0275text(42, " Formation(s) li\xE9e(s) ");
    \u0275\u0275template(43, AdminrhSondageComponent_ng_container_1_span_43_Template, 2, 0, "span", 99)(44, AdminrhSondageComponent_ng_container_1_span_44_Template, 2, 0, "span", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, AdminrhSondageComponent_ng_container_1_div_45_Template, 2, 0, "div", 101)(46, AdminrhSondageComponent_ng_container_1_div_46_Template, 7, 5, "div", 102)(47, AdminrhSondageComponent_ng_container_1_div_47_Template, 2, 1, "div", 103)(48, AdminrhSondageComponent_ng_container_1_div_48_Template, 3, 0, "div", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 90)(50, "label", 91);
    \u0275\u0275text(51, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "textarea", 105);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_textarea_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 90)(54, "label", 91);
    \u0275\u0275text(55, "Message d'introduction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "textarea", 106);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_textarea_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.introduction, $event) || (ctx_r1.form.introduction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 90)(58, "label", 91);
    \u0275\u0275text(59, "Message de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "textarea", 107);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_textarea_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.message_fin, $event) || (ctx_r1.form.message_fin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 87)(62, "div", 88);
    \u0275\u0275element(63, "i", 65);
    \u0275\u0275text(64, " Param\xE8tres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 108)(66, "label", 91);
    \u0275\u0275text(67, "D\xE9clenchement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 109);
    \u0275\u0275template(69, AdminrhSondageComponent_ng_container_1_ng_container_69_Template, 2, 0, "ng-container", 0)(70, AdminrhSondageComponent_ng_container_1_ng_container_70_Template, 2, 0, "ng-container", 0)(71, AdminrhSondageComponent_ng_container_1_ng_container_71_Template, 2, 0, "ng-container", 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(72, AdminrhSondageComponent_ng_container_1_div_72_Template, 6, 1, "div", 110);
    \u0275\u0275elementStart(73, "div", 108)(74, "label", 91);
    \u0275\u0275text(75, "Dur\xE9e estim\xE9e (min)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "input", 111);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_76_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.duree_estimee, $event) || (ctx_r1.form.duree_estimee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 108)(78, "label", 91);
    \u0275\u0275text(79, "Tentatives max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nombre_tentatives_max, $event) || (ctx_r1.form.nombre_tentatives_max = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 108)(82, "label", 91);
    \u0275\u0275text(83, "Date de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_84_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.date_debut, $event) || (ctx_r1.form.date_debut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 108)(86, "label", 91);
    \u0275\u0275text(87, "Date de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_88_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.date_fin, $event) || (ctx_r1.form.date_fin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(89, "div", 114);
    \u0275\u0275elementStart(90, "div", 115)(91, "div")(92, "div", 116);
    \u0275\u0275text(93, "Sondage actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 117);
    \u0275\u0275text(95, "Visible et accessible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "label", 118)(97, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_97_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.est_actif, $event) || (ctx_r1.form.est_actif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "span", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 115)(100, "div")(101, "div", 116);
    \u0275\u0275text(102, "Anonyme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 117);
    \u0275\u0275text(104, "R\xE9ponses non li\xE9es \xE0 l'utilisateur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "label", 118)(106, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_106_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.est_anonyme, $event) || (ctx_r1.form.est_anonyme = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(107, "span", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 115)(109, "div")(110, "div", 116);
    \u0275\u0275text(111, "Obligatoire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 117);
    \u0275\u0275text(113, "L'employ\xE9 doit r\xE9pondre");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "label", 118)(115, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_115_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.est_obligatoire, $event) || (ctx_r1.form.est_obligatoire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(116, "span", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "div", 115)(118, "div")(119, "div", 116);
    \u0275\u0275text(120, "Retour en arri\xE8re");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 117);
    \u0275\u0275text(122, "Modifier les r\xE9ponses pr\xE9c\xE9dentes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "label", 118)(124, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_124_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.autorise_retour, $event) || (ctx_r1.form.autorise_retour = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(125, "span", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "div", 115)(127, "div")(128, "div", 116);
    \u0275\u0275text(129, "Afficher la progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 117);
    \u0275\u0275text(131, "Barre de progression visible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "label", 118)(133, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_133_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.afficher_progres, $event) || (ctx_r1.form.afficher_progres = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(134, "span", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div", 121)(136, "button", 122);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_1_Template_button_click_136_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveSondage());
    });
    \u0275\u0275element(137, "i", 123);
    \u0275\u0275text(138);
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
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ctx_r1.formCategorie !== "enquete");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCategorie === "enquete");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formationsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.formationsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formFormationIds.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formCategorie !== "enquete");
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
function AdminrhSondageComponent_ng_container_2_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.questionError);
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 160);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r16 = ctx.$implicit;
    \u0275\u0275property("value", t_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r16.label);
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "label", 91);
    \u0275\u0275text(2, "Description / aide (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 161);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_div_19_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r17);
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
function AdminrhSondageComponent_ng_container_2_div_13_div_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 167)(1, "span", 168);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 169);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_13_div_20_div_4_Template_button_click_3_listener() {
      const i_r20 = \u0275\u0275restoreView(_r19).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeOption(i_r20));
    });
    \u0275\u0275element(4, "i", 170);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r21);
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_div_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275text(1, "Aucune option ajout\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 162)(1, "label", 91);
    \u0275\u0275text(2, "Options de r\xE9ponse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 163);
    \u0275\u0275template(4, AdminrhSondageComponent_ng_container_2_div_13_div_20_div_4_Template, 5, 1, "div", 164)(5, AdminrhSondageComponent_ng_container_2_div_13_div_20_div_5_Template, 2, 0, "div", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 165)(7, "input", 166);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_div_20_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newOptionText, $event) || (ctx_r1.newOptionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AdminrhSondageComponent_ng_container_2_div_13_div_20_Template_input_keyup_enter_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addOption());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 142);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_13_div_20_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addOption());
    });
    \u0275\u0275element(9, "i", 29);
    \u0275\u0275text(10, " Ajouter ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.editingQuestion.options || \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r1.editingQuestion.options == null ? null : ctx_r1.editingQuestion.options.length) ?? 0) === 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOptionText);
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "label", 91);
    \u0275\u0275text(2, "Valeur min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 171);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_div_21_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r22);
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
function AdminrhSondageComponent_ng_container_2_div_13_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "label", 91);
    \u0275\u0275text(2, "Valeur max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 172);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_div_22_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r23);
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
function AdminrhSondageComponent_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 88);
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminrhSondageComponent_ng_container_2_div_13_div_4_Template, 2, 1, "div", 148);
    \u0275\u0275elementStart(5, "div", 149)(6, "div", 90)(7, "label", 91);
    \u0275\u0275text(8, "Question ");
    \u0275\u0275elementStart(9, "span", 92);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 150);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingQuestion.question, $event) || (ctx_r1.editingQuestion.question = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 90)(13, "label", 91);
    \u0275\u0275text(14, "Type ");
    \u0275\u0275elementStart(15, "span", 92);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingQuestion.type, $event) || (ctx_r1.editingQuestion.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(18, AdminrhSondageComponent_ng_container_2_div_13_option_18_Template, 2, 2, "option", 151);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, AdminrhSondageComponent_ng_container_2_div_13_div_19_Template, 4, 1, "div", 152)(20, AdminrhSondageComponent_ng_container_2_div_13_div_20_Template, 11, 4, "div", 153)(21, AdminrhSondageComponent_ng_container_2_div_13_div_21_Template, 4, 1, "div", 152)(22, AdminrhSondageComponent_ng_container_2_div_13_div_22_Template, 4, 1, "div", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 154)(24, "div", 155)(25, "div", 116);
    \u0275\u0275text(26, "Obligatoire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label", 118)(28, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingQuestion.est_obligatoire, $event) || (ctx_r1.editingQuestion.est_obligatoire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "span", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 156)(31, "button", 157);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_13_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelQuestion());
    });
    \u0275\u0275text(32, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 28);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_13_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveQuestion());
    });
    \u0275\u0275element(34, "i", 158);
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
function AdminrhSondageComponent_ng_container_2_div_15_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 183);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_2_div_15_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", q_r25.options.length, " option", q_r25.options.length !== 1 ? "s" : "", " ");
  }
}
function AdminrhSondageComponent_ng_container_2_div_15_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275element(1, "i", 140);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", q_r25.aide, " ");
  }
}
function AdminrhSondageComponent_ng_container_2_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 175)(1, "div", 176);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 177)(4, "div", 178);
    \u0275\u0275text(5);
    \u0275\u0275template(6, AdminrhSondageComponent_ng_container_2_div_15_div_1_span_6_Template, 2, 0, "span", 179);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 180)(8, "span", 181);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AdminrhSondageComponent_ng_container_2_div_15_div_1_span_10_Template, 2, 2, "span", 101)(11, AdminrhSondageComponent_ng_container_2_div_15_div_1_span_11_Template, 3, 1, "span", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 182)(13, "button", 64);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_15_div_1_Template_button_click_13_listener() {
      const q_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editQuestion(q_r25));
    });
    \u0275\u0275element(14, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 67);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_15_div_1_Template_button_click_15_listener() {
      const q_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteQuestion(q_r25.id));
    });
    \u0275\u0275element(16, "i", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r26 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", q_r25.question, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r25.est_obligatoire);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getQuestionTypeLabel(q_r25.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r25.options && q_r25.options.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r25.aide);
  }
}
function AdminrhSondageComponent_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_2_div_15_div_1_Template, 17, 6, "div", 174);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.questions);
  }
}
function AdminrhSondageComponent_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, 'Aucune question \u2014 cliquez sur "Ajouter une question"');
    \u0275\u0275elementEnd()();
  }
}
function AdminrhSondageComponent_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 185)(1, "div", 186);
    \u0275\u0275element(2, "i", 187);
    \u0275\u0275elementStart(3, "p", 188);
    \u0275\u0275text(4, "Supprimer cette question ? Les r\xE9ponses associ\xE9es seront aussi supprim\xE9es.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 189)(6, "button", 157);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteQId = null);
    });
    \u0275\u0275text(7, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 190);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteQuestion());
    });
    \u0275\u0275text(9, "Supprimer");
    \u0275\u0275elementEnd()()()();
  }
}
function AdminrhSondageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div")(3, "button", 142);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275element(4, "i", 80);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 4);
    \u0275\u0275text(9, "G\xE9rer les questions du sondage");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 28);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newQuestion());
    });
    \u0275\u0275element(11, "i", 29);
    \u0275\u0275text(12, " Ajouter une question ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, AdminrhSondageComponent_ng_container_2_div_13_Template, 36, 11, "div", 143);
    \u0275\u0275elementStart(14, "div", 144);
    \u0275\u0275template(15, AdminrhSondageComponent_ng_container_2_div_15_Template, 2, 1, "div", 145)(16, AdminrhSondageComponent_ng_container_2_div_16_Template, 4, 0, "div", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AdminrhSondageComponent_ng_container_2_div_17_Template, 10, 0, "div", 1);
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
function AdminrhSondageComponent_ng_container_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 192);
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 211)(1, "div", 212);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 213);
    \u0275\u0275element(4, "div", 214);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 215);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const q_r30 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r29.key || "(vide)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.statWidth(ctx_r1.asNumber(item_r29.value), q_r30.nombre_reponses), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r29.value, " (", ctx_r1.statWidth(ctx_r1.asNumber(item_r29.value), q_r30.nombre_reponses), "%)");
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_8_div_1_Template, 7, 5, "div", 210);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r30 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, q_r30.repartition));
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 216)(1, "span", 217);
    \u0275\u0275text(2, "Moyenne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 218);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 219);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r30 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r30.moyenne);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" / ", q_r30.type === "notation" ? 5 : 10);
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 222);
    \u0275\u0275element(1, "i", 223);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r31, " ");
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275text(1, "Aucune r\xE9ponse textuelle");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 220);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_10_div_1_Template, 3, 1, "div", 221)(2, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_10_div_2_Template, 2, 0, "div", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r30 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r30.reponses_texte);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r30.reponses_texte.length === 0);
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201)(1, "div", 202)(2, "span", 203);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 204);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 205);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_8_Template, 3, 3, "div", 206)(9, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_9_Template, 7, 2, "div", 207)(10, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_10_Template, 3, 2, "div", 208);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r30 = ctx.$implicit;
    const i_r32 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", i_r32 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r30.question);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", q_r30.nombre_reponses, " r\xE9ponse", q_r30.nombre_reponses !== 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r30.repartition);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r30.moyenne !== void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r30.reponses_texte);
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune donn\xE9e disponible");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 193)(2, "div", 194)(3, "div", 195);
    \u0275\u0275element(4, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 196);
    \u0275\u0275text(7, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 197);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 194)(11, "div", 198);
    \u0275\u0275element(12, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "div", 196);
    \u0275\u0275text(15, "R\xE9ponses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 197);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 194)(19, "div", 199);
    \u0275\u0275element(20, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "div", 196);
    \u0275\u0275text(23, "Taux de r\xE9ponse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 197);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(26, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_Template, 11, 7, "div", 200)(27, AdminrhSondageComponent_ng_container_3_ng_container_12_div_27_Template, 4, 0, "div", 146);
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
function AdminrhSondageComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div")(3, "button", 142);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275element(4, "i", 80);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 157);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportCsv(ctx_r1.selectedSondage));
    });
    \u0275\u0275element(9, "i", 191);
    \u0275\u0275text(10, " Export CSV ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AdminrhSondageComponent_ng_container_3_div_11_Template, 2, 0, "div", 26)(12, AdminrhSondageComponent_ng_container_3_ng_container_12_Template, 28, 5, "ng-container", 0);
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
function AdminrhSondageComponent_ng_container_4_ng_container_16_span_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, ", ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_4_ng_container_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, AdminrhSondageComponent_ng_container_4_ng_container_16_span_1_span_2_Template, 2, 0, "span", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r34 = ctx.$implicit;
    const last_r35 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r34);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r35);
  }
}
function AdminrhSondageComponent_ng_container_4_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_4_ng_container_16_span_1_Template, 3, 2, "span", 234);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getFormationsTitres(ctx_r1.selectedSondage));
  }
}
function AdminrhSondageComponent_ng_container_4_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\u2014 (aucune formation associ\xE9e)");
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhSondageComponent_ng_container_4_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 235);
    \u0275\u0275text(1, " Un email contenant un lien personnel \xE0 usage unique sera envoy\xE9 \xE0 tous les participants des formations s\xE9lectionn\xE9es. Les participants ayant d\xE9j\xE0 r\xE9pondu ne recevront pas de nouvel email. ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_4_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 236);
    \u0275\u0275element(1, "i", 140);
    \u0275\u0275text(2, " Ce sondage n'est li\xE9 \xE0 aucune formation. L'invitation sera envoy\xE9e \xE0 tous les employ\xE9s de votre entreprise. ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_4_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237);
    \u0275\u0275element(1, "i", 158);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.envoyerSuccess, " ");
  }
}
function AdminrhSondageComponent_ng_container_4_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 238);
    \u0275\u0275element(1, "i", 239);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.envoyerError, " ");
  }
}
function AdminrhSondageComponent_ng_container_4_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, " Envoyer \xE0 tous les participants");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_4_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 240);
    \u0275\u0275text(2, " Envoi en cours\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div")(3, "button", 142);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275element(4, "i", 80);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 4);
    \u0275\u0275text(9, "Envoie un lien unique \xE0 chaque participant de la formation associ\xE9e.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 224)(11, "div", 225)(12, "div", 226)(13, "span", 227);
    \u0275\u0275text(14, "Formation(s) li\xE9e(s)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 228);
    \u0275\u0275template(16, AdminrhSondageComponent_ng_container_4_ng_container_16_Template, 2, 1, "ng-container", 0)(17, AdminrhSondageComponent_ng_container_4_ng_container_17_Template, 2, 0, "ng-container", 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 226)(19, "span", 227);
    \u0275\u0275text(20, "D\xE9clenchement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 228);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 226)(24, "span", 227);
    \u0275\u0275text(25, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 228);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(28, "div", 114);
    \u0275\u0275template(29, AdminrhSondageComponent_ng_container_4_p_29_Template, 2, 0, "p", 229)(30, AdminrhSondageComponent_ng_container_4_div_30_Template, 3, 0, "div", 230)(31, AdminrhSondageComponent_ng_container_4_div_31_Template, 3, 1, "div", 231)(32, AdminrhSondageComponent_ng_container_4_div_32_Template, 3, 1, "div", 232);
    \u0275\u0275elementStart(33, "button", 233);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_4_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.envoyerSondage());
    });
    \u0275\u0275template(34, AdminrhSondageComponent_ng_container_4_span_34_Template, 3, 0, "span", 0)(35, AdminrhSondageComponent_ng_container_4_span_35_Template, 3, 0, "span", 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Envoyer \u2014 ", ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.titre);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.selectedSondage && ctx_r1.getFormationsTitres(ctx_r1.selectedSondage).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedSondage || ctx_r1.getFormationsTitres(ctx_r1.selectedSondage).length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.declenchement) === "a_chaud" ? "\xC0 chaud" : (ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.declenchement) === "a_froid" ? "\xC0 froid (" + ((ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.delai_jours) || "?") + " j)" : "Manuel", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSondage == null ? null : ctx_r1.selectedSondage.nombre_questions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedSondage && ctx_r1.getFormationsTitres(ctx_r1.selectedSondage).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedSondage || ctx_r1.getFormationsTitres(ctx_r1.selectedSondage).length === 0);
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
function AdminrhSondageComponent_ng_container_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 192);
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_5_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune r\xE9ponse re\xE7ue pour ce sondage.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 28);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_5_ng_container_14_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEnvoyer(ctx_r1.selectedSondage));
    });
    \u0275\u0275element(5, "i", 63);
    \u0275\u0275text(6, " Envoyer le sondage ");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhSondageComponent_ng_container_5_ng_container_14_div_2_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Q", i_r39 + 1, " \u2014 ", q_r38.question, " ");
  }
}
function AdminrhSondageComponent_ng_container_5_ng_container_14_div_2_tr_14_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 255);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r40 = ctx.$implicit;
    const r_r41 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getReponseLabel(r_r41.reponses, q_r40.id), " ");
  }
}
function AdminrhSondageComponent_ng_container_5_ng_container_14_div_2_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 249)(3, "span", 250);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "div", 251);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 252);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td", 253);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AdminrhSondageComponent_ng_container_5_ng_container_14_div_2_tr_14_td_14_Template, 2, 1, "td", 254);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r41 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, ((r_r41.user == null ? null : r_r41.user.prenom) || (r_r41.user == null ? null : r_r41.user.name) || "?")[0]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", r_r41.user == null ? null : r_r41.user.prenom, " ", r_r41.user == null ? null : r_r41.user.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r41.user == null ? null : r_r41.user.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 8, r_r41.repondu_at, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.resultatsQuestions);
  }
}
function AdminrhSondageComponent_ng_container_5_ng_container_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 242)(1, "div", 243)(2, "span", 244);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 245)(5, "table", 246)(6, "thead")(7, "tr")(8, "th", 247);
    \u0275\u0275text(9, "Participant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 248);
    \u0275\u0275text(11, "R\xE9pondu le");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminrhSondageComponent_ng_container_5_ng_container_14_div_2_th_12_Template, 2, 2, "th", 234);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, AdminrhSondageComponent_ng_container_5_ng_container_14_div_2_tr_14_Template, 15, 11, "tr", 234);
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
function AdminrhSondageComponent_ng_container_5_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_5_ng_container_14_div_1_Template, 7, 0, "div", 36)(2, AdminrhSondageComponent_ng_container_5_ng_container_14_div_2_Template, 15, 5, "div", 241);
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
function AdminrhSondageComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div")(3, "button", 142);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275element(4, "i", 80);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 4);
    \u0275\u0275text(9, "R\xE9ponses individuelles par participant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 157);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportCsv(ctx_r1.selectedSondage));
    });
    \u0275\u0275element(11, "i", 191);
    \u0275\u0275text(12, " Export CSV ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, AdminrhSondageComponent_ng_container_5_div_13_Template, 2, 0, "div", 26)(14, AdminrhSondageComponent_ng_container_5_ng_container_14_Template, 3, 2, "ng-container", 0);
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
function AdminrhSondageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 185)(1, "div", 186);
    \u0275\u0275element(2, "i", 256);
    \u0275\u0275elementStart(3, "p", 188);
    \u0275\u0275text(4, "Supprimer ce sondage d\xE9finitivement ? Toutes les questions et r\xE9ponses seront perdues.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 189)(6, "button", 157);
    \u0275\u0275listener("click", function AdminrhSondageComponent_div_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteId = null);
    });
    \u0275\u0275text(7, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 190);
    \u0275\u0275listener("click", function AdminrhSondageComponent_div_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r42);
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
var AdminrhSondageComponent = class _AdminrhSondageComponent {
  sondageService;
  formationService;
  tab = "liste";
  categorieActive = "a_chaud";
  // ── Listes par catégorie ───────────────────────────────────────────────────
  sondagesChaud = [];
  sondagesFroid = [];
  sondagesEnquete = [];
  loading = false;
  error = "";
  // ── Filtres liste ──────────────────────────────────────────────────────────
  search = "";
  filterActif = "";
  currentPage = 1;
  totalPages = 1;
  total = 0;
  search$ = new Subject();
  // ── Formations disponibles (pour sélection) ────────────────────────────────
  formations = [];
  formationsLoading = false;
  formFormationIds = [];
  // multi-select formation_ids pour le formulaire
  // ── Sondage sélectionné ────────────────────────────────────────────────────
  selectedSondage = null;
  // ── Formulaire création/édition ────────────────────────────────────────────
  form = {};
  saving = false;
  formError = "";
  formCategorie = "enquete";
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
  // ── Confirm delete ─────────────────────────────────────────────────────────
  confirmDeleteId = null;
  confirmDeleteQId = null;
  constructor(sondageService, formationService) {
    this.sondageService = sondageService;
    this.formationService = formationService;
  }
  ngOnInit() {
    this.loadAll();
    this.loadFormations();
    this.search$.pipe(debounceTime(350), distinctUntilChanged()).subscribe(() => {
      this.currentPage = 1;
      this.loadAll();
    });
  }
  onSearch() {
    this.search$.next(this.search);
  }
  // Charge les 3 catégories en une seule passe
  loadAll() {
    this.loading = true;
    this.error = "";
    const base = { per_page: 100 };
    if (this.search)
      base.search = this.search;
    if (this.filterActif !== "")
      base.est_actif = this.filterActif === "1";
    this.sondageService.getSondages(__spreadProps(__spreadValues({}, base), { declenchement: "a_chaud" })).subscribe({
      next: (res) => {
        this.sondagesChaud = res.sondages ?? [];
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Erreur chargement.");
        this.loading = false;
      }
    });
    this.sondageService.getSondages(__spreadProps(__spreadValues({}, base), { declenchement: "a_froid" })).subscribe({
      next: (res) => {
        this.sondagesFroid = res.sondages ?? [];
      }
    });
    this.sondageService.getSondages(__spreadProps(__spreadValues({}, base), { declenchement: "manuel" })).subscribe({
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
  loadFormations() {
    this.formationsLoading = true;
    this.formationService.getFormationsrh().subscribe({
      next: (res) => {
        this.formations = (res.formations ?? res.data ?? res ?? []).map((f) => ({ id: f.id, titre: f.titre }));
        this.formationsLoading = false;
      },
      error: () => {
        this.formationsLoading = false;
      }
    });
  }
  setCategorie(c) {
    this.categorieActive = c;
  }
  // ── CREATE ────────────────────────────────────────────────────────────────
  openCreate(categorie) {
    this.formCategorie = categorie;
    const declenchement = categorie === "enquete" ? "manuel" : categorie;
    this.form = {
      type: categorie === "enquete" ? "enquete" : "satisfaction",
      declenchement,
      delai_jours: categorie === "a_froid" ? 30 : null,
      formation_id: null,
      est_anonyme: false,
      est_obligatoire: categorie !== "enquete",
      est_actif: true,
      autorise_retour: true,
      afficher_progres: true,
      nombre_tentatives_max: 1,
      duree_estimee: 5
    };
    this.formFormationIds = [];
    this.formError = "";
    this.tab = "creer";
  }
  openEdit(s) {
    this.selectedSondage = s;
    this.form = __spreadValues({}, s);
    this.formFormationIds = s.formation_ids ? [...s.formation_ids] : s.formation_id ? [s.formation_id] : [];
    this.formCategorie = s.declenchement === "a_chaud" ? "a_chaud" : s.declenchement === "a_froid" ? "a_froid" : "enquete";
    this.formError = "";
    this.tab = "editer";
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
  saveSondage() {
    if (!this.form.titre) {
      this.formError = "Le titre est obligatoire.";
      return;
    }
    if (this.formCategorie !== "enquete" && this.formFormationIds.length === 0) {
      this.formError = "Veuillez s\xE9lectionner au moins une formation associ\xE9e.";
      return;
    }
    this.saving = true;
    this.formError = "";
    const payload = __spreadProps(__spreadValues({}, this.form), {
      formation_ids: this.formFormationIds,
      formation_id: this.formFormationIds[0] ?? null
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
    this.tab = "envoyer";
  }
  envoyerSondage() {
    if (!this.selectedSondage)
      return;
    this.envoyerLoading = true;
    this.envoyerSuccess = "";
    this.envoyerError = "";
    this.sondageService.envoyerSondage(this.selectedSondage.id).subscribe({
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
  getFormationsTitres(s) {
    const ids = s.formation_ids?.length ? s.formation_ids : s.formation_id ? [s.formation_id] : [];
    return ids.map((id) => this.formations.find((f) => f.id === id)?.titre ?? `Formation #${id}`);
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
  static \u0275fac = function AdminrhSondageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhSondageComponent)(\u0275\u0275directiveInject(SondageService), \u0275\u0275directiveInject(FormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhSondageComponent, selectors: [["app-adminrh-sondage"]], decls: 7, vars: 7, consts: [[4, "ngIf"], ["class", "ip-confirm-overlay", 4, "ngIf"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-page-head__sub"], [1, "ip-cat-tabs"], [1, "ip-cat-tab", 3, "click"], [1, "isax", "isax-flash-1"], [1, "ip-cat-tab__count"], [1, "isax", "isax-clock"], [1, "isax", "isax-message-question"], [1, "ip-cat-header"], [1, "ip-cat-desc"], ["class", "ip-btn ip-btn--primary", 3, "click", 4, "appHasPermission"], [1, "ip-card", "ip-filter-card"], [1, "ip-filter-row"], [1, "ip-filter-group", "ip-filter-group--search"], [1, "ip-input-icon-wrap"], [1, "isax", "isax-search-normal", "ip-input-icon"], ["type", "text", "placeholder", "Rechercher par titre\u2026", 1, "ip-input", "ip-input--icon", 3, "ngModelChange", "ngModel"], [1, "ip-filter-group"], [1, "ip-input", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "1"], ["value", "0"], ["class", "alert alert-danger alert-dismissible mb-3", 4, "ngIf"], ["class", "ip-loader", 4, "ngIf"], ["class", "ip-sondage-grid", 4, "ngIf"], [1, "ip-btn", "ip-btn--primary", 3, "click"], [1, "isax", "isax-add"], [1, "alert", "alert-danger", "alert-dismissible", "mb-3"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-loader"], ["role", "status", 1, "spinner-border"], [1, "ip-sondage-grid"], ["class", "ip-sondage-card", 4, "ngFor", "ngForOf"], ["class", "ip-empty-state", 4, "ngIf"], [1, "ip-sondage-card"], [1, "ip-sc-bar"], [1, "ip-sc-body"], [1, "ip-sc-header"], [1, "ip-sc-type-badge"], [1, "ip-sc-statut"], [1, "fa-solid", "fa-circle"], [1, "ip-sc-title"], ["class", "ip-sc-desc", 4, "ngIf"], ["class", "ip-sc-desc ip-text-muted", 4, "ngIf"], [1, "ip-sc-meta"], [1, "isax", "isax-note-21"], [1, "isax", "isax-people"], ["class", "ip-text-muted", 4, "ngIf"], [1, "ip-sc-tags"], ["class", "ip-tag", 4, "ngIf"], ["class", "ip-tag ip-tag--warn", 4, "ngIf"], ["class", "ip-tag ip-tag--info", 4, "ngIf"], [1, "ip-sc-footer"], ["title", "Questions", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-edit-2"], ["title", "Statistiques", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-chart-2"], ["title", "R\xE9sultats d\xE9taill\xE9s", 1, "ip-action-btn", "ip-action-btn--results", 3, "click"], [1, "isax", "isax-eye"], ["title", "Envoyer par email", 1, "ip-action-btn", "ip-action-btn--send", 3, "click"], [1, "isax", "isax-send-2"], ["title", "Modifier", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-setting-2"], [1, "ip-action-btn", 3, "click", "title"], ["title", "Supprimer", 1, "ip-action-btn", "ip-action-btn--danger", 3, "click"], [1, "isax", "isax-trash"], [1, "ip-sc-desc"], [1, "ip-sc-desc", "ip-text-muted"], ["class", "ip-sc-formation-tag", 4, "ngFor", "ngForOf"], [1, "ip-sc-formation-tag"], [1, "isax", "isax-book-1"], [1, "ip-text-muted"], [1, "ip-tag"], [1, "ip-tag", "ip-tag--warn"], [1, "ip-tag", "ip-tag--info"], [1, "ip-empty-state"], ["type", "button", 1, "ip-btn", "ip-btn--ghost", "ip-btn--sm", 3, "click"], [1, "isax", "isax-arrow-left-2"], [1, "ip-page-head__title", "mt-2"], ["class", "ip-cat-badge ip-cat-badge--chaud", 4, "ngIf"], ["class", "ip-cat-badge ip-cat-badge--froid", 4, "ngIf"], ["class", "ip-cat-badge ip-cat-badge--enquete", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "ip-form-layout"], [1, "ip-card", "ip-form-card"], [1, "ip-form-section-head"], [1, "isax", "isax-document-text"], [1, "ip-field"], [1, "ip-label"], [1, "ip-required"], ["type", "text", "placeholder", "Ex. Satisfaction globale de la formation", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["value", "satisfaction"], ["value", "evaluation"], ["value", "feedback"], ["value", "quiz"], ["value", "enquete"], ["class", "ip-required", 4, "ngIf"], ["class", "ip-label-hint", 4, "ngIf"], ["class", "ip-text-muted ip-text-sm", 4, "ngIf"], ["class", "ip-multiselect-list", 4, "ngIf"], ["class", "ip-multiselect-summary", 4, "ngIf"], ["class", "ip-field-hint", 4, "ngIf"], ["rows", "3", "placeholder", "D\xE9crivez l'objectif du sondage\u2026", 1, "ip-input", "ip-textarea", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Texte affich\xE9 avant les questions\u2026", 1, "ip-input", "ip-textarea", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Merci pour votre participation\u2026", 1, "ip-input", "ip-textarea", 3, "ngModelChange", "ngModel"], [1, "ip-field", "ip-field--row"], [1, "ip-input-readonly"], ["class", "ip-field ip-field--row", 4, "ngIf"], ["type", "number", "min", "1", "placeholder", "5", 1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "placeholder", "1", 1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], [1, "ip-divider"], [1, "ip-toggle-row"], [1, "ip-toggle-label"], [1, "ip-toggle-sub"], [1, "ip-switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "ip-switch-track"], [1, "ip-save-row"], ["type", "button", 1, "ip-btn", "ip-btn--primary", "ip-btn--wide", 3, "click", "disabled"], [1, "isax", "isax-save-2"], [1, "ip-cat-badge", "ip-cat-badge--chaud"], [1, "ip-cat-badge", "ip-cat-badge--froid"], [1, "ip-cat-badge", "ip-cat-badge--enquete"], [1, "alert", "alert-danger"], [1, "ip-label-hint"], [1, "ip-text-muted", "ip-text-sm"], [1, "ip-multiselect-list"], ["title", "Toutes les formations", 1, "ip-multiselect-item", "ip-multiselect-item--all"], ["type", "checkbox", "title", "Toutes les formations", 1, "ip-multiselect-cb", 3, "change", "checked"], ["class", "ip-multiselect-item", 3, "selected", "title", 4, "ngFor", "ngForOf"], ["class", "ip-text-muted ip-text-sm ip-multiselect-empty", 4, "ngIf"], [1, "ip-multiselect-item", 3, "title"], ["type", "checkbox", 1, "ip-multiselect-cb", 3, "change", "checked", "title"], [1, "ip-text-muted", "ip-text-sm", "ip-multiselect-empty"], [1, "ip-multiselect-summary"], [1, "ip-field-hint"], [1, "isax", "isax-info-circle"], ["type", "number", "min", "1", "placeholder", "Ex. 30", 1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], [1, "ip-btn", "ip-btn--ghost", "ip-btn--sm", 3, "click"], ["class", "ip-card ip-question-form-card", 4, "ngIf"], [1, "ip-card"], ["class", "ip-questions-list", 4, "ngIf"], ["class", "ip-empty", 4, "ngIf"], [1, "ip-card", "ip-question-form-card"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "ip-question-form-grid"], ["type", "text", "placeholder", "Entrez votre question\u2026", 1, "ip-input", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "ip-field", 4, "ngIf"], ["class", "ip-field ip-field--full", 4, "ngIf"], [1, "ip-question-form-footer"], [1, "ip-toggle-row", "ip-toggle-row--inline"], [1, "ip-question-form-actions"], [1, "ip-btn", "ip-btn--ghost", 3, "click"], [1, "isax", "isax-tick-circle"], [1, "alert", "alert-danger", "mb-3"], [3, "value"], ["type", "text", "placeholder", "Pr\xE9cision ou aide pour l'utilisateur\u2026", 1, "ip-input", 3, "ngModelChange", "ngModel"], [1, "ip-field", "ip-field--full"], [1, "ip-options-list"], ["class", "ip-option-row", 4, "ngFor", "ngForOf"], [1, "ip-add-option-row"], ["type", "text", "placeholder", "Nouvelle option\u2026", 1, "ip-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "ip-option-row"], [1, "ip-option-text"], ["type", "button", 1, "ip-action-btn", "ip-action-btn--danger", "ip-action-btn--xs", 3, "click"], [1, "isax", "isax-minus-cirlce"], ["type", "number", "placeholder", "1", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "5", 1, "ip-input", 3, "ngModelChange", "ngModel"], [1, "ip-questions-list"], ["class", "ip-question-item", 4, "ngFor", "ngForOf"], [1, "ip-question-item"], [1, "ip-question-num"], [1, "ip-question-content"], [1, "ip-question-text"], ["class", "ip-required ml-1", 4, "ngIf"], [1, "ip-question-meta"], [1, "ip-q-type-badge"], [1, "ip-question-actions"], [1, "ip-required", "ml-1"], [1, "ip-empty"], [1, "ip-confirm-overlay"], [1, "ip-confirm-box"], [1, "isax", "isax-warning-2", "ip-confirm-icon"], [1, "ip-confirm-text"], [1, "ip-confirm-actions"], [1, "ip-btn", "ip-btn--danger", 3, "click"], [1, "isax", "isax-document-download"], [1, "spinner-border"], [1, "ip-kpi-row"], [1, "ip-kpi-card"], [1, "ip-kpi-icon"], [1, "ip-kpi-label"], [1, "ip-kpi-value"], [1, "ip-kpi-icon", "ip-kpi-icon--success"], [1, "ip-kpi-icon", "ip-kpi-icon--warn"], ["class", "ip-stat-question-card ip-card", 4, "ngFor", "ngForOf"], [1, "ip-stat-question-card", "ip-card"], [1, "ip-stat-q-header"], [1, "ip-stat-q-num"], [1, "ip-stat-q-text"], [1, "ip-stat-q-count"], ["class", "ip-stat-bars", 4, "ngIf"], ["class", "ip-stat-moyenne", 4, "ngIf"], ["class", "ip-stat-textes", 4, "ngIf"], [1, "ip-stat-bars"], ["class", "ip-stat-bar-row", 4, "ngFor", "ngForOf"], [1, "ip-stat-bar-row"], [1, "ip-stat-bar-label"], [1, "ip-stat-bar-wrap"], [1, "ip-stat-bar-fill"], [1, "ip-stat-bar-val"], [1, "ip-stat-moyenne"], [1, "ip-stat-moy-label"], [1, "ip-stat-moy-val"], [1, "ip-stat-moy-max"], [1, "ip-stat-textes"], ["class", "ip-stat-texte-item", 4, "ngFor", "ngForOf"], [1, "ip-stat-texte-item"], [1, "isax", "isax-quote-up"], [1, "ip-card", 2, "max-width", "600px"], [1, "ip-envoyer-info"], [1, "ip-envoyer-info-row"], [1, "ip-envoyer-info-label"], [1, "ip-envoyer-info-val"], ["class", "ip-envoyer-desc", 4, "ngIf"], ["class", "ip-alert ip-alert--info ip-alert--mb", 4, "ngIf"], ["class", "ip-alert ip-alert--success", 4, "ngIf"], ["class", "ip-alert ip-alert--danger", 4, "ngIf"], [1, "ip-btn", "ip-btn--primary", "ip-btn--wide", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "ip-envoyer-desc"], [1, "ip-alert", "ip-alert--info", "ip-alert--mb"], [1, "ip-alert", "ip-alert--success"], [1, "ip-alert", "ip-alert--danger"], [1, "isax", "isax-warning-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["class", "ip-card ip-resultats-card", 4, "ngIf"], [1, "ip-card", "ip-resultats-card"], [1, "ip-resultats-header"], [1, "ip-resultats-count"], [1, "ip-resultats-table-wrap"], [1, "ip-resultats-table"], [2, "width", "180px"], [2, "width", "130px"], [1, "ip-res-user"], [1, "ip-res-avatar"], [1, "ip-res-name"], [1, "ip-res-email"], [1, "ip-res-date"], ["class", "ip-res-val", 4, "ngFor", "ngForOf"], [1, "ip-res-val"], [1, "isax", "isax-warning-2", "ip-confirm-icon", "ip-confirm-icon--danger"]], template: function AdminrhSondageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AdminrhSondageComponent_ng_container_0_Template, 49, 18, "ng-container", 0)(1, AdminrhSondageComponent_ng_container_1_Template, 139, 32, "ng-container", 0)(2, AdminrhSondageComponent_ng_container_2_Template, 18, 5, "ng-container", 0)(3, AdminrhSondageComponent_ng_container_3_Template, 13, 3, "ng-container", 0)(4, AdminrhSondageComponent_ng_container_4_Template, 36, 12, "ng-container", 0)(5, AdminrhSondageComponent_ng_container_5_Template, 15, 3, "ng-container", 0)(6, AdminrhSondageComponent_div_6_Template, 10, 0, "div", 1);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, HasPermissionDirective, UpperCasePipe, DatePipe, KeyValuePipe], styles: ['\n\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 160px;\n}\n.ip-text-muted[_ngcontent-%COMP%] {\n  color: #6C757D;\n}\n.ip-text-sm[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ip-btn--primary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--danger[_ngcontent-%COMP%] {\n  background: #DC3545;\n  color: #fff;\n  border: none;\n}\n.ip-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgb(197.9088607595, 34.2911392405, 49.9670886076);\n}\n.ip-btn--wide[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn--danger[_ngcontent-%COMP%]:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.ip-action-btn--xs[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  font-size: 12px;\n  border-radius: 4px;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-filter-card[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  overflow: visible;\n}\n.ip-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ip-input--sm[_ngcontent-%COMP%] {\n  width: auto;\n}\n.ip-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.ip-input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ip-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-sondage-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.ip-sondage-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: box-shadow 0.15s;\n}\n.ip-sondage-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.ip-sc-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  flex-shrink: 0;\n}\n.ip-sc-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n}\n.ip-sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ip-sc-type-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-sc-statut[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.ip-sc-statut[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 7px;\n}\n.badge-ouvert[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.badge-inactif[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.badge-termine[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-sc-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 6px;\n}\n.ip-sc-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0 0 12px;\n  line-height: 1.5;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.ip-sc-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 10px;\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-sc-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-sc-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-sc-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ip-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-tag--warn[_ngcontent-%COMP%] {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-sc-footer[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-top: 1px solid #E9ECEF;\n  background: #FAFBFF;\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  color: #6C757D;\n}\n.ip-empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  opacity: 0.3;\n  margin-bottom: 12px;\n}\n.ip-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-form-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 20px;\n  align-items: flex-start;\n}\n@media (max-width: 860px) {\n  .ip-form-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-form-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.ip-form-section-head[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 18px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-form-section-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.ip-field--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.ip-field--row[_ngcontent-%COMP%]   .ip-label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.ip-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-required[_ngcontent-%COMP%] {\n  color: #DC3545;\n}\n.ip-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E9ECEF;\n  margin: 14px 0;\n}\n.ip-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-toggle-row--inline[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n}\n.ip-toggle-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%] {\n  background: #D4AF37;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%]::before {\n  transform: translateX(18px);\n}\n.ip-save-row[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 14px;\n}\n.ip-question-form-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 16px;\n}\n.ip-question-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .ip-question-form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-question-form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 14px;\n}\n.ip-question-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.ip-options-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.ip-option-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 6px 10px;\n  background: #F8F9FA;\n  border-radius: 6px;\n}\n.ip-option-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1A1A2E;\n  flex: 1;\n}\n.ip-add-option-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.ip-add-option-row[_ngcontent-%COMP%]   .ip-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ip-questions-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ip-question-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #E9ECEF;\n  transition: background 0.1s;\n}\n.ip-question-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-question-item[_ngcontent-%COMP%]:hover {\n  background: #FAFBFF;\n}\n.ip-question-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ip-question-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-question-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A1A2E;\n  margin-bottom: 5px;\n}\n.ip-question-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.ip-q-type-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #FDF8E7;\n  color: #D4AF37;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-question-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.ip-kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn[_ngcontent-%COMP%] {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-stat-question-card[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.ip-stat-q-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.ip-stat-q-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ip-stat-q-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-stat-q-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.ip-stat-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-stat-bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-stat-bar-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1A1A2E;\n  min-width: 120px;\n}\n.ip-stat-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 10px;\n  background: #F1F3F5;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ip-stat-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #D4AF37;\n  border-radius: 99px;\n  transition: width 0.3s;\n}\n.ip-stat-bar-val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  min-width: 80px;\n  text-align: right;\n}\n.ip-stat-moyenne[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-stat-moy-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ip-stat-moy-val[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #D4AF37;\n}\n.ip-stat-moy-max[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6C757D;\n}\n.ip-stat-textes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-stat-texte-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1A1A2E;\n  background: #F8F9FA;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  gap: 8px;\n}\n.ip-stat-texte-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.ip-confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.ip-confirm-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 28px 32px;\n  max-width: 400px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n.ip-confirm-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #D97706;\n  margin-bottom: 12px;\n  display: block;\n}\n.ip-confirm-icon--danger[_ngcontent-%COMP%] {\n  color: #DC3545;\n}\n.ip-confirm-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1A1A2E;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n.ip-confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.ip-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.ip-pagination__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ip-pg-btn[_ngcontent-%COMP%]:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  cursor: default;\n}\n.ip-pg-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.ml-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.ip-cat-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.ip-cat-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6C757D;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.ip-cat-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ip-cat-tab__count[_ngcontent-%COMP%] {\n  background: #F1F3F5;\n  color: #6C757D;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 20px;\n  min-width: 22px;\n  text-align: center;\n}\n.ip-cat-tab[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-cat-tab.active[_ngcontent-%COMP%] {\n  border-color: #D4AF37;\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-cat-tab.active[_ngcontent-%COMP%]   .ip-cat-tab__count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n}\n.ip-cat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.ip-cat-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  line-height: 1.5;\n}\n.ip-cat-desc[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1A1A2E;\n}\n.ip-cat-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 6px;\n}\n.ip-cat-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-cat-badge--chaud[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #D97706;\n}\n.ip-cat-badge--froid[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #1D6EBF;\n}\n.ip-cat-badge--enquete[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.ip-input-readonly[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1A1A2E;\n  font-weight: 500;\n  padding: 8px 12px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  flex: 1;\n}\n.ip-field-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-field-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-label-hint[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 10px;\n  color: #6C757D;\n  margin-left: 4px;\n}\n.ip-tag--info[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #1D6EBF;\n}\n.ip-action-btn--send[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #f0fdf4;\n}\n.ip-action-btn--results[_ngcontent-%COMP%]:hover {\n  border-color: #7c3aed;\n  color: #7c3aed;\n  background: #f5f3ff;\n}\n.ip-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 14px;\n}\n.ip-alert--success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.ip-alert--danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.ip-alert--warn[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #fcd34d;\n}\n.ip-alert--info[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1e40af;\n  border: 1px solid #bfdbfe;\n}\n.ip-envoyer-info[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.ip-envoyer-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 8px 0;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 13px;\n}\n.ip-envoyer-info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-envoyer-info-label[_ngcontent-%COMP%] {\n  color: #6C757D;\n  min-width: 140px;\n  flex-shrink: 0;\n}\n.ip-envoyer-info-val[_ngcontent-%COMP%] {\n  color: #1A1A2E;\n  font-weight: 500;\n}\n.ip-resultats-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ip-resultats-header[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 13px;\n  color: #6C757D;\n}\n.ip-resultats-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-resultats-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.ip-resultats-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.ip-resultats-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #E9ECEF;\n  font-weight: 600;\n  color: #374151;\n  text-align: left;\n  white-space: nowrap;\n  position: sticky;\n  top: 0;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ip-resultats-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid #E9ECEF;\n  vertical-align: middle;\n}\n.ip-resultats-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-resultats-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ip-res-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-res-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #D4AF37;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.ip-res-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1A1A2E;\n  font-size: 13px;\n}\n.ip-res-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-res-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.ip-res-val[_ngcontent-%COMP%] {\n  color: #374151;\n  max-width: 180px;\n}\n.ip-multiselect-list[_ngcontent-%COMP%] {\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  background: #fff;\n}\n.ip-multiselect-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 14px;\n  cursor: pointer;\n  font-size: 13px;\n  color: #1A1A2E;\n  border-bottom: 1px solid #E9ECEF;\n  transition: background 0.1s;\n}\n.ip-multiselect-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-multiselect-item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.ip-multiselect-item.selected[_ngcontent-%COMP%] {\n  background: #FDF8E7;\n  color: rgb(177.7777777778, 144.8888888889, 38.2222222222);\n  font-weight: 500;\n}\n.ip-multiselect-cb[_ngcontent-%COMP%] {\n  accent-color: #D4AF37;\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.ip-multiselect-summary[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgb(177.7777777778, 144.8888888889, 38.2222222222);\n  font-weight: 600;\n  margin-top: 5px;\n  padding: 3px 6px;\n  background: #FDF8E7;\n  border-radius: 4px;\n  display: inline-block;\n}\n.ip-multiselect-empty[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n}\n.ip-envoyer-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 20px;\n  line-height: 1.6;\n}\n.ip-alert--mb[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.ip-sc-formation-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #374151;\n  background: #f3f4f6;\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.ip-sc-formation-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=adminrh-sondage.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhSondageComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-sondage", standalone: true, imports: [CommonModule, FormsModule, HasPermissionDirective], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE : LISTE                                                              -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="tab === 'liste'">\r
\r
  <div class="ip-page-head">\r
    <div>\r
      <h5 class="ip-page-head__title">Sondages &amp; enqu\xEAtes</h5>\r
      <p class="ip-page-head__sub">G\xE9rez les \xE9valuations \xE0 chaud, \xE0 froid et les enqu\xEAtes libres de votre entreprise</p>\r
    </div>\r
  </div>\r
\r
  <!-- Onglets cat\xE9gories -->\r
  <div class="ip-cat-tabs">\r
    <button class="ip-cat-tab" [class.active]="categorieActive === 'a_chaud'" (click)="setCategorie('a_chaud')">\r
      <i class="isax isax-flash-1"></i>\r
      <span>\xC9valuation \xE0 chaud</span>\r
      <span class="ip-cat-tab__count">{{ sondagesChaud.length }}</span>\r
    </button>\r
    <button class="ip-cat-tab" [class.active]="categorieActive === 'a_froid'" (click)="setCategorie('a_froid')">\r
      <i class="isax isax-clock"></i>\r
      <span>\xC9valuation \xE0 froid</span>\r
      <span class="ip-cat-tab__count">{{ sondagesFroid.length }}</span>\r
    </button>\r
    <button class="ip-cat-tab" [class.active]="categorieActive === 'enquete'" (click)="setCategorie('enquete')">\r
      <i class="isax isax-message-question"></i>\r
      <span>Enqu\xEAtes libres</span>\r
      <span class="ip-cat-tab__count">{{ sondagesEnquete.length }}</span>\r
    </button>\r
  </div>\r
\r
  <!-- Description cat\xE9gorie + bouton cr\xE9er -->\r
  <div class="ip-cat-header">\r
    <div class="ip-cat-desc">\r
      <ng-container *ngIf="categorieActive === 'a_chaud'">\r
        <strong>\xC9valuation \xE0 chaud</strong> \u2014 Envoy\xE9e imm\xE9diatement apr\xE8s la fin d'une formation, li\xE9e obligatoirement \xE0 une formation.\r
      </ng-container>\r
      <ng-container *ngIf="categorieActive === 'a_froid'">\r
        <strong>\xC9valuation \xE0 froid</strong> \u2014 Envoy\xE9e automatiquement X jours apr\xE8s la formation pour mesurer l'impact r\xE9el.\r
      </ng-container>\r
      <ng-container *ngIf="categorieActive === 'enquete'">\r
        <strong>Enqu\xEAtes libres</strong> \u2014 Envoy\xE9es manuellement \xE0 tous les employ\xE9s ou aux participants d'une formation.\r
      </ng-container>\r
    </div>\r
    <button *appHasPermission="'creer sondages'" class="ip-btn ip-btn--primary" (click)="openCreate(categorieActive)">\r
      <i class="isax isax-add"></i>\r
      <ng-container *ngIf="categorieActive === 'a_chaud'">Nouvelle \xE9valuation \xE0 chaud</ng-container>\r
      <ng-container *ngIf="categorieActive === 'a_froid'">Nouvelle \xE9valuation \xE0 froid</ng-container>\r
      <ng-container *ngIf="categorieActive === 'enquete'">Nouvelle enqu\xEAte</ng-container>\r
    </button>\r
  </div>\r
\r
  <!-- Filtre recherche + statut -->\r
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
  <!-- Grid de cartes -->\r
  <div *ngIf="!loading" class="ip-sondage-grid">\r
    <div *ngFor="let s of sondagesCourants" class="ip-sondage-card">\r
\r
      <!-- Bandeau type -->\r
      <div class="ip-sc-bar" [style.background]="typeColor(s.type)"></div>\r
\r
      <div class="ip-sc-body">\r
        <!-- Header -->\r
        <div class="ip-sc-header">\r
          <span class="ip-sc-type-badge" [style.background]="typeColor(s.type) + '18'" [style.color]="typeColor(s.type)">\r
            {{ typeLabel(s.type) }}\r
          </span>\r
          <span class="ip-sc-statut" [class]="getStatutClass(s)">\r
            <i class="fa-solid fa-circle"></i> {{ getStatutLabel(s) }}\r
          </span>\r
        </div>\r
\r
        <h6 class="ip-sc-title">{{ s.titre }}</h6>\r
        <p class="ip-sc-desc" *ngIf="s.description">{{ s.description }}</p>\r
        <p class="ip-sc-desc ip-text-muted" *ngIf="!s.description">Aucune description</p>\r
\r
        <!-- M\xE9ta -->\r
        <div class="ip-sc-meta">\r
          <span><i class="isax isax-note-21"></i> {{ s.nombre_questions }} question{{ s.nombre_questions !== 1 ? 's' : '' }}</span>\r
          <span><i class="isax isax-people"></i> {{ s.nombre_reponses }} r\xE9ponse{{ s.nombre_reponses !== 1 ? 's' : '' }}</span>\r
          <span *ngIf="s.duree_estimee"><i class="isax isax-clock"></i> ~{{ s.duree_estimee }} min</span>\r
          <ng-container *ngIf="getFormationsTitres(s).length > 0">\r
            <span *ngFor="let t of getFormationsTitres(s)" class="ip-sc-formation-tag">\r
              <i class="isax isax-book-1"></i> {{ t }}\r
            </span>\r
          </ng-container>\r
          <span *ngIf="getFormationsTitres(s).length === 0 && categorieActive === 'enquete'" class="ip-text-muted">\r
            <i class="isax isax-people"></i> Tous les employ\xE9s\r
          </span>\r
        </div>\r
\r
        <!-- Badges options -->\r
        <div class="ip-sc-tags">\r
          <span *ngIf="s.est_anonyme" class="ip-tag">Anonyme</span>\r
          <span *ngIf="s.est_obligatoire" class="ip-tag ip-tag--warn">Obligatoire</span>\r
          <span *ngIf="categorieActive === 'a_froid' && s.delai_jours" class="ip-tag ip-tag--info">J+{{ s.delai_jours }}</span>\r
        </div>\r
      </div>\r
\r
      <!-- Actions -->\r
      <div class="ip-sc-footer">\r
        <button class="ip-action-btn" title="Questions" (click)="openQuestions(s)">\r
          <i class="isax isax-edit-2"></i>\r
        </button>\r
        <button class="ip-action-btn" title="Statistiques" (click)="openStats(s)">\r
          <i class="isax isax-chart-2"></i>\r
        </button>\r
        <button class="ip-action-btn ip-action-btn--results" title="R\xE9sultats d\xE9taill\xE9s" (click)="openResultats(s)">\r
          <i class="isax isax-eye"></i>\r
        </button>\r
        <button class="ip-action-btn ip-action-btn--send" title="Envoyer par email" (click)="openEnvoyer(s)">\r
          <i class="isax isax-send-2"></i>\r
        </button>\r
        <button class="ip-action-btn" title="Modifier" (click)="openEdit(s)">\r
          <i class="isax isax-setting-2"></i>\r
        </button>\r
        <button class="ip-action-btn" [title]="s.est_actif ? 'Archiver' : 'Publier'" (click)="toggleActif(s)">\r
          <i [class]="s.est_actif ? 'isax isax-archive' : 'isax isax-refresh'"></i>\r
        </button>\r
        <button class="ip-action-btn ip-action-btn--danger" title="Supprimer" (click)="confirmDelete(s.id)">\r
          <i class="isax isax-trash"></i>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Vide -->\r
    <div *ngIf="sondagesCourants.length === 0" class="ip-empty-state">\r
      <i class="isax isax-note-21"></i>\r
      <p *ngIf="categorieActive === 'a_chaud'">Aucune \xE9valuation \xE0 chaud configur\xE9e</p>\r
      <p *ngIf="categorieActive === 'a_froid'">Aucune \xE9valuation \xE0 froid configur\xE9e</p>\r
      <p *ngIf="categorieActive === 'enquete'">Aucune enqu\xEAte cr\xE9\xE9e</p>\r
      <button *appHasPermission="'creer sondages'" class="ip-btn ip-btn--primary" (click)="openCreate(categorieActive)">Cr\xE9er maintenant</button>\r
    </div>\r
  </div>\r
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
      <!-- Badge cat\xE9gorie -->\r
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
      <!-- Formations li\xE9es \u2014 multi-select checkboxes -->\r
      <div class="ip-field">\r
        <label class="ip-label">\r
          Formation(s) li\xE9e(s)\r
          <span class="ip-required" *ngIf="formCategorie !== 'enquete'">*</span>\r
          <span class="ip-label-hint" *ngIf="formCategorie === 'enquete'">(optionnelle \u2014 laissez vide pour envoyer \xE0 tous)</span>\r
        </label>\r
        <div *ngIf="formationsLoading" class="ip-text-muted ip-text-sm">Chargement des formations\u2026</div>\r
        <div *ngIf="!formationsLoading" class="ip-multiselect-list">\r
          <!-- Tout s\xE9lectionner -->\r
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
        <div *ngIf="formCategorie !== 'enquete'" class="ip-field-hint">\r
          <i class="isax isax-info-circle"></i>\r
          Le sondage sera envoy\xE9 aux participants de toutes les formations s\xE9lectionn\xE9es.\r
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
      <!-- D\xE9clenchement en lecture seule (fix\xE9 par la cat\xE9gorie) -->\r
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
        <label class="ip-label">D\xE9lai apr\xE8s la formation (jours) <span class="ip-required">*</span></label>\r
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
      <button class="ip-btn ip-btn--ghost ip-btn--sm" (click)="backToList()">\r
        <i class="isax isax-arrow-left-2"></i> Retour\r
      </button>\r
      <h5 class="ip-page-head__title mt-2">{{ selectedSondage?.titre }}</h5>\r
      <p class="ip-page-head__sub">G\xE9rer les questions du sondage</p>\r
    </div>\r
    <button class="ip-btn ip-btn--primary" (click)="newQuestion()">\r
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
          <button class="ip-btn ip-btn--ghost ip-btn--sm" (click)="addOption()">\r
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
        <button class="ip-btn ip-btn--ghost" (click)="cancelQuestion()">Annuler</button>\r
        <button class="ip-btn ip-btn--primary" (click)="saveQuestion()">\r
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
        <button class="ip-btn ip-btn--ghost" (click)="confirmDeleteQId = null">Annuler</button>\r
        <button class="ip-btn ip-btn--danger" (click)="deleteQuestion()">Supprimer</button>\r
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
      <button class="ip-btn ip-btn--ghost ip-btn--sm" (click)="backToList()">\r
        <i class="isax isax-arrow-left-2"></i> Retour\r
      </button>\r
      <h5 class="ip-page-head__title mt-2">Statistiques \u2014 {{ selectedSondage?.titre }}</h5>\r
    </div>\r
    <button class="ip-btn ip-btn--ghost" (click)="exportCsv(selectedSondage!)">\r
      <i class="isax isax-document-download"></i> Export CSV\r
    </button>\r
  </div>\r
\r
  <div *ngIf="statsLoading" class="ip-loader"><div class="spinner-border"></div></div>\r
\r
  <ng-container *ngIf="!statsLoading && stats">\r
    <!-- KPIs -->\r
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
    <!-- Par question -->\r
    <div *ngFor="let q of stats.questions; let i = index" class="ip-stat-question-card ip-card">\r
      <div class="ip-stat-q-header">\r
        <span class="ip-stat-q-num">Q{{ i + 1 }}</span>\r
        <div class="ip-stat-q-text">{{ q.question }}</div>\r
        <span class="ip-stat-q-count">{{ q.nombre_reponses }} r\xE9ponse{{ q.nombre_reponses !== 1 ? 's' : '' }}</span>\r
      </div>\r
\r
      <!-- R\xE9partition bar chart (radio/select/checkbox) -->\r
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
      <!-- Moyenne (echelle/notation) -->\r
      <div *ngIf="q.moyenne !== undefined" class="ip-stat-moyenne">\r
        <span class="ip-stat-moy-label">Moyenne</span>\r
        <span class="ip-stat-moy-val">{{ q.moyenne }}<span class="ip-stat-moy-max"> / {{ q.type === 'notation' ? 5 : 10 }}</span></span>\r
      </div>\r
\r
      <!-- Textes libres -->\r
      <div *ngIf="q.reponses_texte" class="ip-stat-textes">\r
        <div *ngFor="let t of q.reponses_texte" class="ip-stat-texte-item">\r
          <i class="isax isax-quote-up"></i> {{ t }}\r
        </div>\r
        <div *ngIf="q.reponses_texte.length === 0" class="ip-text-muted ip-text-sm">Aucune r\xE9ponse textuelle</div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="stats.questions.length === 0" class="ip-empty">\r
      <i class="isax isax-chart-2"></i>\r
      <span>Aucune donn\xE9e disponible</span>\r
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
      <button class="ip-btn ip-btn--ghost ip-btn--sm" (click)="backToList()">\r
        <i class="isax isax-arrow-left-2"></i> Retour\r
      </button>\r
      <h5 class="ip-page-head__title mt-2">Envoyer \u2014 {{ selectedSondage?.titre }}</h5>\r
      <p class="ip-page-head__sub">Envoie un lien unique \xE0 chaque participant de la formation associ\xE9e.</p>\r
    </div>\r
  </div>\r
\r
  <div class="ip-card" style="max-width:600px;">\r
\r
    <!-- R\xE9sum\xE9 sondage -->\r
    <div class="ip-envoyer-info">\r
      <div class="ip-envoyer-info-row">\r
        <span class="ip-envoyer-info-label">Formation(s) li\xE9e(s)</span>\r
        <span class="ip-envoyer-info-val">\r
          <ng-container *ngIf="selectedSondage && getFormationsTitres(selectedSondage).length > 0">\r
            <span *ngFor="let t of getFormationsTitres(selectedSondage!); let last = last">{{ t }}<span *ngIf="!last">, </span></span>\r
          </ng-container>\r
          <ng-container *ngIf="!selectedSondage || getFormationsTitres(selectedSondage).length === 0">\u2014 (aucune formation associ\xE9e)</ng-container>\r
        </span>\r
      </div>\r
      <div class="ip-envoyer-info-row">\r
        <span class="ip-envoyer-info-label">D\xE9clenchement</span>\r
        <span class="ip-envoyer-info-val">\r
          {{ selectedSondage?.declenchement === 'a_chaud' ? '\xC0 chaud' : selectedSondage?.declenchement === 'a_froid' ? '\xC0 froid (' + (selectedSondage?.delai_jours || '?') + ' j)' : 'Manuel' }}\r
        </span>\r
      </div>\r
      <div class="ip-envoyer-info-row">\r
        <span class="ip-envoyer-info-label">Questions</span>\r
        <span class="ip-envoyer-info-val">{{ selectedSondage?.nombre_questions }}</span>\r
      </div>\r
    </div>\r
\r
    <div class="ip-divider"></div>\r
\r
    <!-- Description dynamique selon pr\xE9sence formation -->\r
    <p *ngIf="selectedSondage && getFormationsTitres(selectedSondage).length > 0" class="ip-envoyer-desc">\r
      Un email contenant un lien personnel \xE0 usage unique sera envoy\xE9 \xE0 tous les participants\r
      des formations s\xE9lectionn\xE9es. Les participants ayant d\xE9j\xE0 r\xE9pondu ne recevront pas de nouvel email.\r
    </p>\r
    <div *ngIf="!selectedSondage || getFormationsTitres(selectedSondage).length === 0" class="ip-alert ip-alert--info ip-alert--mb">\r
      <i class="isax isax-info-circle"></i>\r
      Ce sondage n'est li\xE9 \xE0 aucune formation. L'invitation sera envoy\xE9e \xE0 tous les employ\xE9s de votre entreprise.\r
    </div>\r
\r
    <!-- Alertes r\xE9sultat -->\r
    <div *ngIf="envoyerSuccess" class="ip-alert ip-alert--success">\r
      <i class="isax isax-tick-circle"></i> {{ envoyerSuccess }}\r
    </div>\r
    <div *ngIf="envoyerError" class="ip-alert ip-alert--danger">\r
      <i class="isax isax-warning-2"></i> {{ envoyerError }}\r
    </div>\r
\r
    <button class="ip-btn ip-btn--primary ip-btn--wide"\r
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
      <button class="ip-btn ip-btn--ghost ip-btn--sm" (click)="backToList()">\r
        <i class="isax isax-arrow-left-2"></i> Retour\r
      </button>\r
      <h5 class="ip-page-head__title mt-2">R\xE9sultats \u2014 {{ selectedSondage?.titre }}</h5>\r
      <p class="ip-page-head__sub">R\xE9ponses individuelles par participant</p>\r
    </div>\r
    <button class="ip-btn ip-btn--ghost" (click)="exportCsv(selectedSondage!)">\r
      <i class="isax isax-document-download"></i> Export CSV\r
    </button>\r
  </div>\r
\r
  <div *ngIf="resultatsLoading" class="ip-loader"><div class="spinner-border"></div></div>\r
\r
  <ng-container *ngIf="!resultatsLoading">\r
\r
    <!-- Aucune r\xE9ponse -->\r
    <div *ngIf="!resultats || resultats.length === 0" class="ip-empty-state">\r
      <i class="isax isax-note-21"></i>\r
      <p>Aucune r\xE9ponse re\xE7ue pour ce sondage.</p>\r
      <button class="ip-btn ip-btn--primary" (click)="openEnvoyer(selectedSondage!)">\r
        <i class="isax isax-send-2"></i> Envoyer le sondage\r
      </button>\r
    </div>\r
\r
    <!-- Tableau des r\xE9ponses -->\r
    <div *ngIf="resultats && resultats.length > 0" class="ip-card ip-resultats-card">\r
      <div class="ip-resultats-header">\r
        <span class="ip-resultats-count">{{ resultats.length }} r\xE9ponse{{ resultats.length > 1 ? 's' : '' }} re\xE7ue{{ resultats.length > 1 ? 's' : '' }}</span>\r
      </div>\r
\r
      <div class="ip-resultats-table-wrap">\r
        <table class="ip-resultats-table">\r
          <thead>\r
            <tr>\r
              <th style="width:180px;">Participant</th>\r
              <th style="width:130px;">R\xE9pondu le</th>\r
              <th *ngFor="let q of resultatsQuestions; let i = index">\r
                Q{{ i + 1 }} \u2014 {{ q.question }}\r
              </th>\r
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
              <td class="ip-res-date">\r
                {{ r.repondu_at | date:'dd/MM/yyyy HH:mm' }}\r
              </td>\r
              <td *ngFor="let q of resultatsQuestions" class="ip-res-val">\r
                {{ getReponseLabel(r.reponses, q.id) }}\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
\r
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
      <button class="ip-btn ip-btn--ghost" (click)="confirmDeleteId = null">Annuler</button>\r
      <button class="ip-btn ip-btn--danger" (click)="deleteSondage()">Supprimer d\xE9finitivement</button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/adminrh/adminrh-sondage/adminrh-sondage.component.scss */\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 160px;\n}\n.ip-text-muted {\n  color: #6C757D;\n}\n.ip-text-sm {\n  font-size: 11px;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 15px;\n}\n.ip-btn--primary {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--danger {\n  background: #DC3545;\n  color: #fff;\n  border: none;\n}\n.ip-btn--danger:hover {\n  background: rgb(197.9088607595, 34.2911392405, 49.9670886076);\n}\n.ip-btn--wide {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn--danger:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.ip-action-btn--xs {\n  width: 22px;\n  height: 22px;\n  font-size: 12px;\n  border-radius: 4px;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-filter-card {\n  padding: 14px 18px;\n  overflow: visible;\n}\n.ip-filter-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon {\n  padding-left: 34px;\n}\n.ip-input--sm {\n  width: auto;\n}\n.ip-textarea {\n  resize: vertical;\n}\n.ip-input-icon-wrap {\n  position: relative;\n}\n.ip-input-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-sondage-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.ip-sondage-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: box-shadow 0.15s;\n}\n.ip-sondage-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.ip-sc-bar {\n  height: 4px;\n  flex-shrink: 0;\n}\n.ip-sc-body {\n  flex: 1;\n  padding: 16px;\n}\n.ip-sc-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ip-sc-type-badge {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-sc-statut {\n  font-size: 11px;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.ip-sc-statut i {\n  font-size: 7px;\n}\n.badge-ouvert {\n  background: #ECFDF5;\n  color: #059669;\n}\n.badge-inactif {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.badge-termine {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-sc-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 6px;\n}\n.ip-sc-desc {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0 0 12px;\n  line-height: 1.5;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.ip-sc-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 10px;\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-sc-meta span {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-sc-meta i {\n  font-size: 12px;\n}\n.ip-sc-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ip-tag {\n  font-size: 10px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-tag--warn {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-sc-footer {\n  padding: 10px 14px;\n  border-top: 1px solid #E9ECEF;\n  background: #FAFBFF;\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-empty-state {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  color: #6C757D;\n}\n.ip-empty-state i {\n  font-size: 40px;\n  opacity: 0.3;\n  margin-bottom: 12px;\n}\n.ip-empty-state p {\n  margin-bottom: 16px;\n}\n.ip-empty {\n  padding: 40px;\n  text-align: center;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-form-layout {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 20px;\n  align-items: flex-start;\n}\n@media (max-width: 860px) {\n  .ip-form-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-form-card {\n  padding: 20px;\n}\n.ip-form-section-head {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 18px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-form-section-head i {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field {\n  margin-bottom: 14px;\n}\n.ip-field--row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.ip-field--row .ip-label {\n  margin: 0;\n}\n.ip-field--full {\n  grid-column: 1/-1;\n}\n.ip-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-required {\n  color: #DC3545;\n}\n.ip-divider {\n  height: 1px;\n  background: #E9ECEF;\n  margin: 14px 0;\n}\n.ip-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row:last-child {\n  border-bottom: none;\n}\n.ip-toggle-row--inline {\n  border: none;\n  padding: 0;\n}\n.ip-toggle-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch input:checked + .ip-switch-track {\n  background: #D4AF37;\n}\n.ip-switch input:checked + .ip-switch-track::before {\n  transform: translateX(18px);\n}\n.ip-save-row {\n  padding-top: 16px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 14px;\n}\n.ip-question-form-card {\n  padding: 20px;\n  margin-bottom: 16px;\n}\n.ip-question-form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .ip-question-form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-question-form-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 14px;\n}\n.ip-question-form-actions {\n  display: flex;\n  gap: 8px;\n}\n.ip-options-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.ip-option-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 6px 10px;\n  background: #F8F9FA;\n  border-radius: 6px;\n}\n.ip-option-text {\n  font-size: 13px;\n  color: #1A1A2E;\n  flex: 1;\n}\n.ip-add-option-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.ip-add-option-row .ip-input {\n  flex: 1;\n}\n.ip-questions-list {\n  padding: 0;\n}\n.ip-question-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #E9ECEF;\n  transition: background 0.1s;\n}\n.ip-question-item:last-child {\n  border-bottom: none;\n}\n.ip-question-item:hover {\n  background: #FAFBFF;\n}\n.ip-question-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ip-question-content {\n  flex: 1;\n  min-width: 0;\n}\n.ip-question-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A1A2E;\n  margin-bottom: 5px;\n}\n.ip-question-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.ip-q-type-badge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #FDF8E7;\n  color: #D4AF37;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-question-actions {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.ip-kpi-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-stat-question-card {\n  padding: 18px 20px;\n}\n.ip-stat-q-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.ip-stat-q-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ip-stat-q-text {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-stat-q-count {\n  font-size: 12px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.ip-stat-bars {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-stat-bar-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-stat-bar-label {\n  font-size: 12px;\n  color: #1A1A2E;\n  min-width: 120px;\n}\n.ip-stat-bar-wrap {\n  flex: 1;\n  height: 10px;\n  background: #F1F3F5;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ip-stat-bar-fill {\n  height: 100%;\n  background: #D4AF37;\n  border-radius: 99px;\n  transition: width 0.3s;\n}\n.ip-stat-bar-val {\n  font-size: 11px;\n  color: #6C757D;\n  min-width: 80px;\n  text-align: right;\n}\n.ip-stat-moyenne {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-stat-moy-label {\n  font-size: 12px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ip-stat-moy-val {\n  font-size: 28px;\n  font-weight: 700;\n  color: #D4AF37;\n}\n.ip-stat-moy-max {\n  font-size: 14px;\n  color: #6C757D;\n}\n.ip-stat-textes {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-stat-texte-item {\n  font-size: 13px;\n  color: #1A1A2E;\n  background: #F8F9FA;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  gap: 8px;\n}\n.ip-stat-texte-item i {\n  font-size: 12px;\n  color: #6C757D;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.ip-confirm-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.ip-confirm-box {\n  background: #fff;\n  border-radius: 16px;\n  padding: 28px 32px;\n  max-width: 400px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n.ip-confirm-icon {\n  font-size: 40px;\n  color: #D97706;\n  margin-bottom: 12px;\n  display: block;\n}\n.ip-confirm-icon--danger {\n  color: #DC3545;\n}\n.ip-confirm-text {\n  font-size: 14px;\n  color: #1A1A2E;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n.ip-confirm-actions {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.ip-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.ip-pagination__info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn i {\n  font-size: 13px;\n}\n.ip-pg-btn:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  cursor: default;\n}\n.ip-pg-btn[disabled] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n.mt-2 {\n  margin-top: 8px;\n}\n.ml-1 {\n  margin-left: 4px;\n}\n.ip-cat-tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.ip-cat-tab {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6C757D;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.ip-cat-tab i {\n  font-size: 15px;\n}\n.ip-cat-tab__count {\n  background: #F1F3F5;\n  color: #6C757D;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 20px;\n  min-width: 22px;\n  text-align: center;\n}\n.ip-cat-tab:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-cat-tab.active {\n  border-color: #D4AF37;\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-cat-tab.active .ip-cat-tab__count {\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n}\n.ip-cat-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.ip-cat-desc {\n  font-size: 13px;\n  color: #6C757D;\n  line-height: 1.5;\n}\n.ip-cat-desc strong {\n  color: #1A1A2E;\n}\n.ip-cat-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 6px;\n}\n.ip-cat-badge i {\n  font-size: 12px;\n}\n.ip-cat-badge--chaud {\n  background: #FEF3C7;\n  color: #D97706;\n}\n.ip-cat-badge--froid {\n  background: #EFF6FF;\n  color: #1D6EBF;\n}\n.ip-cat-badge--enquete {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.ip-input-readonly {\n  font-size: 13px;\n  color: #1A1A2E;\n  font-weight: 500;\n  padding: 8px 12px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  flex: 1;\n}\n.ip-field-hint {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-field-hint i {\n  font-size: 12px;\n}\n.ip-label-hint {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 10px;\n  color: #6C757D;\n  margin-left: 4px;\n}\n.ip-tag--info {\n  background: #EFF6FF;\n  color: #1D6EBF;\n}\n.ip-action-btn--send:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #f0fdf4;\n}\n.ip-action-btn--results:hover {\n  border-color: #7c3aed;\n  color: #7c3aed;\n  background: #f5f3ff;\n}\n.ip-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 14px;\n}\n.ip-alert--success {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.ip-alert--danger {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.ip-alert--warn {\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #fcd34d;\n}\n.ip-alert--info {\n  background: #eff6ff;\n  color: #1e40af;\n  border: 1px solid #bfdbfe;\n}\n.ip-envoyer-info {\n  margin-bottom: 16px;\n}\n.ip-envoyer-info-row {\n  display: flex;\n  gap: 12px;\n  padding: 8px 0;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 13px;\n}\n.ip-envoyer-info-row:last-child {\n  border-bottom: none;\n}\n.ip-envoyer-info-label {\n  color: #6C757D;\n  min-width: 140px;\n  flex-shrink: 0;\n}\n.ip-envoyer-info-val {\n  color: #1A1A2E;\n  font-weight: 500;\n}\n.ip-resultats-card {\n  padding: 0;\n}\n.ip-resultats-header {\n  padding: 14px 20px;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 13px;\n  color: #6C757D;\n}\n.ip-resultats-count {\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-resultats-table-wrap {\n  overflow-x: auto;\n}\n.ip-resultats-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.ip-resultats-table th {\n  padding: 10px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #E9ECEF;\n  font-weight: 600;\n  color: #374151;\n  text-align: left;\n  white-space: nowrap;\n  position: sticky;\n  top: 0;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ip-resultats-table td {\n  padding: 10px 14px;\n  border-bottom: 1px solid #E9ECEF;\n  vertical-align: middle;\n}\n.ip-resultats-table tr:last-child td {\n  border-bottom: none;\n}\n.ip-resultats-table tr:hover td {\n  background: #f9fafb;\n}\n.ip-res-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-res-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #D4AF37;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.ip-res-name {\n  font-weight: 600;\n  color: #1A1A2E;\n  font-size: 13px;\n}\n.ip-res-email {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-res-date {\n  font-size: 12px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.ip-res-val {\n  color: #374151;\n  max-width: 180px;\n}\n.ip-multiselect-list {\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  background: #fff;\n}\n.ip-multiselect-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 14px;\n  cursor: pointer;\n  font-size: 13px;\n  color: #1A1A2E;\n  border-bottom: 1px solid #E9ECEF;\n  transition: background 0.1s;\n}\n.ip-multiselect-item:last-child {\n  border-bottom: none;\n}\n.ip-multiselect-item:hover {\n  background: #f9fafb;\n}\n.ip-multiselect-item.selected {\n  background: #FDF8E7;\n  color: rgb(177.7777777778, 144.8888888889, 38.2222222222);\n  font-weight: 500;\n}\n.ip-multiselect-cb {\n  accent-color: #D4AF37;\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.ip-multiselect-summary {\n  font-size: 11px;\n  color: rgb(177.7777777778, 144.8888888889, 38.2222222222);\n  font-weight: 600;\n  margin-top: 5px;\n  padding: 3px 6px;\n  background: #FDF8E7;\n  border-radius: 4px;\n  display: inline-block;\n}\n.ip-multiselect-empty {\n  padding: 10px 14px;\n}\n.ip-envoyer-desc {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 20px;\n  line-height: 1.6;\n}\n.ip-alert--mb {\n  margin-bottom: 20px;\n}\n.ip-sc-formation-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #374151;\n  background: #f3f4f6;\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.ip-sc-formation-tag i {\n  font-size: 12px;\n}\n/*# sourceMappingURL=adminrh-sondage.component.css.map */\n'] }]
  }], () => [{ type: SondageService }, { type: FormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhSondageComponent, { className: "AdminrhSondageComponent", filePath: "app/features/adminrh/adminrh-sondage/adminrh-sondage.component.ts", lineNumber: 37 });
})();
export {
  AdminrhSondageComponent
};
//# sourceMappingURL=chunk-DZSTO337.js.map
