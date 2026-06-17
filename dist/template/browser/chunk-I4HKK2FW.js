import {
  SondageService
} from "./chunk-TEYNJJCR.js";
import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  HasPermissionDirective
} from "./chunk-2HZFQCLP.js";
import "./chunk-MX7HREXV.js";
import "./chunk-IEFOQSOV.js";
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
} from "./chunk-HLA233IM.js";
import "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  KeyValuePipe,
  NgForOf,
  NgIf
} from "./chunk-MNWNTO2T.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7XGB4BEQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-sondage/adminrh-sondage.component.ts
var _c0 = () => [];
function AdminrhSondageComponent_ng_container_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCreate());
    });
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2, " Nouveau sondage ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 29);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_36_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.error);
  }
}
function AdminrhSondageComponent_ng_container_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_38_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r6.description);
  }
}
function AdminrhSondageComponent_ng_container_0_div_38_div_1_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 64);
    \u0275\u0275text(1, "Aucune description");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_38_div_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ~", s_r6.duree_estimee, " min");
  }
}
function AdminrhSondageComponent_ng_container_0_div_38_div_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r6.formation.titre);
  }
}
function AdminrhSondageComponent_ng_container_0_div_38_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "Anonyme");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_38_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "Obligatoire");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_38_div_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "Retour autoris\xE9");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "div", 37)(3, "div", 38)(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 40);
    \u0275\u0275element(7, "i", 41);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h6", 42);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AdminrhSondageComponent_ng_container_0_div_38_div_1_p_11_Template, 2, 1, "p", 43)(12, AdminrhSondageComponent_ng_container_0_div_38_div_1_p_12_Template, 2, 0, "p", 44);
    \u0275\u0275elementStart(13, "div", 45)(14, "span");
    \u0275\u0275element(15, "i", 46);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275element(18, "i", 47);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, AdminrhSondageComponent_ng_container_0_div_38_div_1_span_20_Template, 3, 1, "span", 0)(21, AdminrhSondageComponent_ng_container_0_div_38_div_1_span_21_Template, 3, 1, "span", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 48);
    \u0275\u0275template(23, AdminrhSondageComponent_ng_container_0_div_38_div_1_span_23_Template, 2, 0, "span", 49)(24, AdminrhSondageComponent_ng_container_0_div_38_div_1_span_24_Template, 2, 0, "span", 50)(25, AdminrhSondageComponent_ng_container_0_div_38_div_1_span_25_Template, 2, 0, "span", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 51)(27, "button", 52);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_38_div_1_Template_button_click_27_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openQuestions(s_r6));
    });
    \u0275\u0275element(28, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 54);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_38_div_1_Template_button_click_29_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openStats(s_r6));
    });
    \u0275\u0275element(30, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 56);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_38_div_1_Template_button_click_31_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEdit(s_r6));
    });
    \u0275\u0275element(32, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 58);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_38_div_1_Template_button_click_33_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleActif(s_r6));
    });
    \u0275\u0275element(34, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 59);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_38_div_1_Template_button_click_35_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.exportCsv(s_r6));
    });
    \u0275\u0275element(36, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 61);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_38_div_1_Template_button_click_37_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.confirmDelete(s_r6.id));
    });
    \u0275\u0275element(38, "i", 62);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.typeColor(s_r6.type));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r2.typeColor(s_r6.type) + "18")("color", ctx_r2.typeColor(s_r6.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.typeLabel(s_r6.type), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStatutClass(s_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatutLabel(s_r6), " ");
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
    \u0275\u0275property("ngIf", s_r6.formation);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r6.est_anonyme);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r6.est_obligatoire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r6.autorise_retour);
    \u0275\u0275advance(8);
    \u0275\u0275property("title", s_r6.est_actif ? "Archiver" : "Publier");
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r6.est_actif ? "isax isax-archive" : "isax isax-send-2");
  }
}
function AdminrhSondageComponent_ng_container_0_div_38_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun sondage trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 26);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_38_div_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openCreate());
    });
    \u0275\u0275text(5, "Cr\xE9er le premier sondage");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhSondageComponent_ng_container_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_0_div_38_div_1_Template, 39, 25, "div", 33)(2, AdminrhSondageComponent_ng_container_0_div_38_div_2_Template, 6, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.sondages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.sondages.length === 0);
  }
}
function AdminrhSondageComponent_ng_container_0_div_39_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_0_div_39_ng_container_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_39_ng_container_6_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const p_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ip-pg-btn--active", p_r10 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r10);
  }
}
function AdminrhSondageComponent_ng_container_0_div_39_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_0_div_39_ng_container_6_span_1_Template, 2, 0, "span", 77)(2, AdminrhSondageComponent_ng_container_0_div_39_ng_container_6_button_2_Template, 2, 3, "button", 78);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10 === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10 !== -1);
  }
}
function AdminrhSondageComponent_ng_container_0_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 72)(4, "button", 73);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_39_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminrhSondageComponent_ng_container_0_div_39_ng_container_6_Template, 3, 2, "ng-container", 75);
    \u0275\u0275elementStart(7, "button", 73);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_0_div_39_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 76);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.total, " sondage", ctx_r2.total !== 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
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
    \u0275\u0275text(6, "Cr\xE9ez et g\xE9rez vos sondages de satisfaction, \xE9valuations et enqu\xEAtes");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminrhSondageComponent_ng_container_0_button_7_Template, 3, 0, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
    \u0275\u0275element(12, "i", 10);
    \u0275\u0275elementStart(13, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_0_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.search, $event) || (ctx_r2.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhSondageComponent_ng_container_0_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearch());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 12)(15, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_0_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterType, $event) || (ctx_r2.filterType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhSondageComponent_ng_container_0_Template_select_ngModelChange_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadSondages());
    });
    \u0275\u0275elementStart(16, "option", 14);
    \u0275\u0275text(17, "Tous les types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 15);
    \u0275\u0275text(19, "Satisfaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 16);
    \u0275\u0275text(21, "\xC9valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 17);
    \u0275\u0275text(23, "Feedback");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 18);
    \u0275\u0275text(25, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 19);
    \u0275\u0275text(27, "Enqu\xEAte");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 12)(29, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_0_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterActif, $event) || (ctx_r2.filterActif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhSondageComponent_ng_container_0_Template_select_ngModelChange_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadSondages());
    });
    \u0275\u0275elementStart(30, "option", 14);
    \u0275\u0275text(31, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 20);
    \u0275\u0275text(33, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 21);
    \u0275\u0275text(35, "Inactif");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(36, AdminrhSondageComponent_ng_container_0_div_36_Template, 3, 1, "div", 22)(37, AdminrhSondageComponent_ng_container_0_div_37_Template, 2, 0, "div", 23)(38, AdminrhSondageComponent_ng_container_0_div_38_Template, 3, 2, "div", 24)(39, AdminrhSondageComponent_ng_container_0_div_39_Template, 9, 5, "div", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("appHasPermission", "creer sondages");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.search);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterType);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterActif);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.totalPages > 1);
  }
}
function AdminrhSondageComponent_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formError);
  }
}
function AdminrhSondageComponent_ng_container_1_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "label", 89);
    \u0275\u0275text(2, "D\xE9lai (jours)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_div_62_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.delai_jours, $event) || (ctx_r2.form.delai_jours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.delai_jours);
  }
}
function AdminrhSondageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div")(3, "button", 81);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.backToList());
    });
    \u0275\u0275element(4, "i", 74);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 82);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, AdminrhSondageComponent_ng_container_1_div_8_Template, 2, 1, "div", 83);
    \u0275\u0275elementStart(9, "div", 84)(10, "div", 85)(11, "div", 86);
    \u0275\u0275element(12, "i", 87);
    \u0275\u0275text(13, " Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 88)(15, "label", 89);
    \u0275\u0275text(16, "Titre ");
    \u0275\u0275elementStart(17, "span", 90);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.titre, $event) || (ctx_r2.form.titre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 88)(21, "label", 89);
    \u0275\u0275text(22, "Type ");
    \u0275\u0275elementStart(23, "span", 90);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.type, $event) || (ctx_r2.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(26, "option", 15);
    \u0275\u0275text(27, "Sondage de satisfaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 16);
    \u0275\u0275text(29, "\xC9valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 17);
    \u0275\u0275text(31, "Retour d'exp\xE9rience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 18);
    \u0275\u0275text(33, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 19);
    \u0275\u0275text(35, "Enqu\xEAte");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 88)(37, "label", 89);
    \u0275\u0275text(38, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "textarea", 92);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_textarea_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 88)(41, "label", 89);
    \u0275\u0275text(42, "Message d'introduction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "textarea", 93);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.introduction, $event) || (ctx_r2.form.introduction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 88)(45, "label", 89);
    \u0275\u0275text(46, "Message de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "textarea", 94);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_textarea_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.message_fin, $event) || (ctx_r2.form.message_fin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 85)(49, "div", 86);
    \u0275\u0275element(50, "i", 57);
    \u0275\u0275text(51, " Param\xE8tres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 95)(53, "label", 89);
    \u0275\u0275text(54, "D\xE9clenchement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "select", 96);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_select_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.declenchement, $event) || (ctx_r2.form.declenchement = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(56, "option", 97);
    \u0275\u0275text(57, "Manuel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 98);
    \u0275\u0275text(59, "\xC0 chaud (imm\xE9diatement apr\xE8s la formation)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 99);
    \u0275\u0275text(61, "\xC0 froid (apr\xE8s un d\xE9lai)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(62, AdminrhSondageComponent_ng_container_1_div_62_Template, 4, 1, "div", 100);
    \u0275\u0275elementStart(63, "div", 95)(64, "label", 89);
    \u0275\u0275text(65, "Dur\xE9e estim\xE9e (min)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.duree_estimee, $event) || (ctx_r2.form.duree_estimee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 95)(68, "label", 89);
    \u0275\u0275text(69, "Tentatives max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.nombre_tentatives_max, $event) || (ctx_r2.form.nombre_tentatives_max = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 95)(72, "label", 89);
    \u0275\u0275text(73, "Date de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.date_debut, $event) || (ctx_r2.form.date_debut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 95)(76, "label", 89);
    \u0275\u0275text(77, "Date de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.date_fin, $event) || (ctx_r2.form.date_fin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(79, "div", 104);
    \u0275\u0275elementStart(80, "div", 105)(81, "div")(82, "div", 106);
    \u0275\u0275text(83, "Sondage actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 107);
    \u0275\u0275text(85, "Visible et accessible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "label", 108)(87, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_87_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.est_actif, $event) || (ctx_r2.form.est_actif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(88, "span", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 105)(90, "div")(91, "div", 106);
    \u0275\u0275text(92, "Anonyme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 107);
    \u0275\u0275text(94, "R\xE9ponses non li\xE9es \xE0 l'utilisateur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "label", 108)(96, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_96_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.est_anonyme, $event) || (ctx_r2.form.est_anonyme = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(97, "span", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 105)(99, "div")(100, "div", 106);
    \u0275\u0275text(101, "Obligatoire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 107);
    \u0275\u0275text(103, "L'employ\xE9 doit r\xE9pondre");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "label", 108)(105, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_105_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.est_obligatoire, $event) || (ctx_r2.form.est_obligatoire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(106, "span", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 105)(108, "div")(109, "div", 106);
    \u0275\u0275text(110, "Retour en arri\xE8re");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 107);
    \u0275\u0275text(112, "Modifier les r\xE9ponses pr\xE9c\xE9dentes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "label", 108)(114, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_114_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.autorise_retour, $event) || (ctx_r2.form.autorise_retour = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(115, "span", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 105)(117, "div")(118, "div", 106);
    \u0275\u0275text(119, "Afficher la progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 107);
    \u0275\u0275text(121, "Barre de progression visible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "label", 108)(123, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_1_Template_input_ngModelChange_123_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.afficher_progres, $event) || (ctx_r2.form.afficher_progres = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(124, "span", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "div", 111)(126, "button", 112);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_1_Template_button_click_126_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveSondage());
    });
    \u0275\u0275element(127, "i", 113);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.tab === "creer" ? "Nouveau sondage" : "Modifier le sondage");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.formError);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.titre);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.type);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.introduction);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.message_fin);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.declenchement);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.form.declenchement === "a_froid");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.duree_estimee);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.nombre_tentatives_max);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.date_debut);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.date_fin);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.est_actif);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.est_anonyme);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.est_obligatoire);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.autorise_retour);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.afficher_progres);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? "Enregistrement\u2026" : ctx_r2.tab === "creer" ? "Cr\xE9er et ajouter des questions" : "Enregistrer", " ");
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.questionError);
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 133);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    \u0275\u0275property("value", t_r15.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r15.label);
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "label", 89);
    \u0275\u0275text(2, "Description / aide (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_div_19_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.editingQuestion.aide, $event) || (ctx_r2.editingQuestion.aide = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingQuestion.aide);
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_div_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 141)(1, "span", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 143);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_13_div_20_div_4_Template_button_click_3_listener() {
      const i_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeOption(i_r19));
    });
    \u0275\u0275element(4, "i", 144);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r20 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r20);
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_div_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275text(1, "Aucune option ajout\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "label", 89);
    \u0275\u0275text(2, "Options de r\xE9ponse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 136);
    \u0275\u0275template(4, AdminrhSondageComponent_ng_container_2_div_13_div_20_div_4_Template, 5, 1, "div", 137)(5, AdminrhSondageComponent_ng_container_2_div_13_div_20_div_5_Template, 2, 0, "div", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 139)(7, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_div_20_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newOptionText, $event) || (ctx_r2.newOptionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AdminrhSondageComponent_ng_container_2_div_13_div_20_Template_input_keyup_enter_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addOption());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 81);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_13_div_20_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addOption());
    });
    \u0275\u0275element(9, "i", 27);
    \u0275\u0275text(10, " Ajouter ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.editingQuestion.options || \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((ctx_r2.editingQuestion.options == null ? null : ctx_r2.editingQuestion.options.length) ?? 0) === 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newOptionText);
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "label", 89);
    \u0275\u0275text(2, "Valeur min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 146);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_div_21_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.editingQuestion.valeur_min, $event) || (ctx_r2.editingQuestion.valeur_min = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingQuestion.valeur_min);
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "label", 89);
    \u0275\u0275text(2, "Valeur max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 147);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_div_22_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.editingQuestion.valeur_max, $event) || (ctx_r2.editingQuestion.valeur_max = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingQuestion.valeur_max);
  }
}
function AdminrhSondageComponent_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120)(1, "div", 86);
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminrhSondageComponent_ng_container_2_div_13_div_4_Template, 2, 1, "div", 121);
    \u0275\u0275elementStart(5, "div", 122)(6, "div", 88)(7, "label", 89);
    \u0275\u0275text(8, "Question ");
    \u0275\u0275elementStart(9, "span", 90);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 123);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editingQuestion.question, $event) || (ctx_r2.editingQuestion.question = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 88)(13, "label", 89);
    \u0275\u0275text(14, "Type ");
    \u0275\u0275elementStart(15, "span", 90);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editingQuestion.type, $event) || (ctx_r2.editingQuestion.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(18, AdminrhSondageComponent_ng_container_2_div_13_option_18_Template, 2, 2, "option", 124);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, AdminrhSondageComponent_ng_container_2_div_13_div_19_Template, 4, 1, "div", 125)(20, AdminrhSondageComponent_ng_container_2_div_13_div_20_Template, 11, 4, "div", 126)(21, AdminrhSondageComponent_ng_container_2_div_13_div_21_Template, 4, 1, "div", 125)(22, AdminrhSondageComponent_ng_container_2_div_13_div_22_Template, 4, 1, "div", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 127)(24, "div", 128)(25, "div", 106);
    \u0275\u0275text(26, "Obligatoire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label", 108)(28, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSondageComponent_ng_container_2_div_13_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editingQuestion.est_obligatoire, $event) || (ctx_r2.editingQuestion.est_obligatoire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "span", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 129)(31, "button", 130);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_13_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelQuestion());
    });
    \u0275\u0275text(32, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 26);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_13_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveQuestion());
    });
    \u0275\u0275element(34, "i", 131);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingQuestion.id ? "Modifier la question" : "Nouvelle question", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.questionError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingQuestion.question);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingQuestion.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.questionTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingQuestion.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.needsOptions(ctx_r2.editingQuestion.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasEchelle(ctx_r2.editingQuestion.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasEchelle(ctx_r2.editingQuestion.type));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editingQuestion.est_obligatoire);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingQuestion.id ? "Mettre \xE0 jour" : "Ajouter la question", " ");
  }
}
function AdminrhSondageComponent_ng_container_2_div_15_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 158);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_2_div_15_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 145);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", q_r24.options.length, " option", q_r24.options.length !== 1 ? "s" : "", " ");
  }
}
function AdminrhSondageComponent_ng_container_2_div_15_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 145);
    \u0275\u0275element(1, "i", 159);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", q_r24.aide, " ");
  }
}
function AdminrhSondageComponent_ng_container_2_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150)(1, "div", 151);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 152)(4, "div", 153);
    \u0275\u0275text(5);
    \u0275\u0275template(6, AdminrhSondageComponent_ng_container_2_div_15_div_1_span_6_Template, 2, 0, "span", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 155)(8, "span", 156);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AdminrhSondageComponent_ng_container_2_div_15_div_1_span_10_Template, 2, 2, "span", 138)(11, AdminrhSondageComponent_ng_container_2_div_15_div_1_span_11_Template, 3, 1, "span", 138);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 157)(13, "button", 56);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_15_div_1_Template_button_click_13_listener() {
      const q_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.editQuestion(q_r24));
    });
    \u0275\u0275element(14, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 61);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_15_div_1_Template_button_click_15_listener() {
      const q_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.confirmDeleteQuestion(q_r24.id));
    });
    \u0275\u0275element(16, "i", 62);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r25 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", q_r24.question, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r24.est_obligatoire);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getQuestionTypeLabel(q_r24.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r24.options && q_r24.options.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r24.aide);
  }
}
function AdminrhSondageComponent_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_2_div_15_div_1_Template, 17, 6, "div", 149);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.questions);
  }
}
function AdminrhSondageComponent_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, 'Aucune question \u2014 cliquez sur "Ajouter une question"');
    \u0275\u0275elementEnd()();
  }
}
function AdminrhSondageComponent_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 161)(1, "div", 162);
    \u0275\u0275element(2, "i", 163);
    \u0275\u0275elementStart(3, "p", 164);
    \u0275\u0275text(4, "Supprimer cette question ? Les r\xE9ponses associ\xE9es seront aussi supprim\xE9es.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 165)(6, "button", 130);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmDeleteQId = null);
    });
    \u0275\u0275text(7, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 166);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_div_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteQuestion());
    });
    \u0275\u0275text(9, "Supprimer");
    \u0275\u0275elementEnd()()()();
  }
}
function AdminrhSondageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div")(3, "button", 81);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.backToList());
    });
    \u0275\u0275element(4, "i", 74);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 82);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 4);
    \u0275\u0275text(9, "G\xE9rer les questions du sondage");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 26);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newQuestion());
    });
    \u0275\u0275element(11, "i", 27);
    \u0275\u0275text(12, " Ajouter une question ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, AdminrhSondageComponent_ng_container_2_div_13_Template, 36, 11, "div", 116);
    \u0275\u0275elementStart(14, "div", 117);
    \u0275\u0275template(15, AdminrhSondageComponent_ng_container_2_div_15_Template, 2, 1, "div", 118)(16, AdminrhSondageComponent_ng_container_2_div_16_Template, 4, 0, "div", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AdminrhSondageComponent_ng_container_2_div_17_Template, 10, 0, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedSondage == null ? null : ctx_r2.selectedSondage.titre);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.editingQuestion);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.questions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.questions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.confirmDeleteQId);
  }
}
function AdminrhSondageComponent_ng_container_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 167);
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 186)(1, "div", 187);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 188);
    \u0275\u0275element(4, "div", 189);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 190);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const q_r29 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r28.key || "(vide)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.statWidth(ctx_r2.asNumber(item_r28.value), q_r29.nombre_reponses), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r28.value, " (", ctx_r2.statWidth(ctx_r2.asNumber(item_r28.value), q_r29.nombre_reponses), "%)");
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_8_div_1_Template, 7, 5, "div", 185);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, q_r29.repartition));
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191)(1, "span", 192);
    \u0275\u0275text(2, "Moyenne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 193);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 194);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r29.moyenne);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" / ", q_r29.type === "notation" ? 5 : 10);
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197);
    \u0275\u0275element(1, "i", 198);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r30 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r30, " ");
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275text(1, "Aucune r\xE9ponse textuelle");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195);
    \u0275\u0275template(1, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_10_div_1_Template, 3, 1, "div", 196)(2, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_10_div_2_Template, 2, 0, "div", 138);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r29.reponses_texte);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r29.reponses_texte.length === 0);
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176)(1, "div", 177)(2, "span", 178);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 179);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 180);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_8_Template, 3, 3, "div", 181)(9, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_9_Template, 7, 2, "div", 182)(10, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_div_10_Template, 3, 2, "div", 183);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r29 = ctx.$implicit;
    const i_r31 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", i_r31 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r29.question);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", q_r29.nombre_reponses, " r\xE9ponse", q_r29.nombre_reponses !== 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r29.repartition);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r29.moyenne !== void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r29.reponses_texte);
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune donn\xE9e disponible");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhSondageComponent_ng_container_3_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 168)(2, "div", 169)(3, "div", 170);
    \u0275\u0275element(4, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 171);
    \u0275\u0275text(7, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 172);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 169)(11, "div", 173);
    \u0275\u0275element(12, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "div", 171);
    \u0275\u0275text(15, "R\xE9ponses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 172);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 169)(19, "div", 174);
    \u0275\u0275element(20, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "div", 171);
    \u0275\u0275text(23, "Taux de r\xE9ponse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 172);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(26, AdminrhSondageComponent_ng_container_3_ng_container_12_div_26_Template, 11, 7, "div", 175)(27, AdminrhSondageComponent_ng_container_3_ng_container_12_div_27_Template, 4, 0, "div", 119);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.stats.sondage.nombre_questions);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.stats.sondage.nombre_reponses);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r2.stats.taux_reponse, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.stats.questions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.stats.questions.length === 0);
  }
}
function AdminrhSondageComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div")(3, "button", 81);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.backToList());
    });
    \u0275\u0275element(4, "i", 74);
    \u0275\u0275text(5, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 82);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 130);
    \u0275\u0275listener("click", function AdminrhSondageComponent_ng_container_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCsv(ctx_r2.selectedSondage));
    });
    \u0275\u0275element(9, "i", 60);
    \u0275\u0275text(10, " Export CSV ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AdminrhSondageComponent_ng_container_3_div_11_Template, 2, 0, "div", 23)(12, AdminrhSondageComponent_ng_container_3_ng_container_12_Template, 28, 5, "ng-container", 0);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Statistiques \u2014 ", ctx_r2.selectedSondage == null ? null : ctx_r2.selectedSondage.titre);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.statsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.statsLoading && ctx_r2.stats);
  }
}
function AdminrhSondageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 161)(1, "div", 162);
    \u0275\u0275element(2, "i", 199);
    \u0275\u0275elementStart(3, "p", 164);
    \u0275\u0275text(4, "Supprimer ce sondage d\xE9finitivement ? Toutes les questions et r\xE9ponses seront perdues.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 165)(6, "button", 130);
    \u0275\u0275listener("click", function AdminrhSondageComponent_div_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDeleteId = null);
    });
    \u0275\u0275text(7, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 166);
    \u0275\u0275listener("click", function AdminrhSondageComponent_div_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSondage());
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
  tab = "liste";
  // ── Liste ──────────────────────────────────────────────────────────────────
  sondages = [];
  loading = false;
  error = "";
  search = "";
  filterType = "";
  filterActif = "";
  currentPage = 1;
  totalPages = 1;
  total = 0;
  search$ = new Subject();
  // ── Sondage sélectionné ────────────────────────────────────────────────────
  selectedSondage = null;
  // ── Formulaire création/édition ────────────────────────────────────────────
  form = {};
  saving = false;
  formError = "";
  // ── Questions ──────────────────────────────────────────────────────────────
  questions = [];
  questionTypes = QUESTION_TYPES;
  editingQuestion = null;
  questionError = "";
  newOptionText = "";
  // ── Stats ──────────────────────────────────────────────────────────────────
  stats = null;
  statsLoading = false;
  // ── Confirm delete ─────────────────────────────────────────────────────────
  confirmDeleteId = null;
  confirmDeleteQId = null;
  constructor(sondageService) {
    this.sondageService = sondageService;
  }
  ngOnInit() {
    this.loadSondages();
    this.search$.pipe(debounceTime(350), distinctUntilChanged()).subscribe(() => {
      this.currentPage = 1;
      this.loadSondages();
    });
  }
  onSearch() {
    this.search$.next(this.search);
  }
  loadSondages() {
    this.loading = true;
    const filters = { page: this.currentPage, per_page: 12 };
    if (this.search)
      filters.search = this.search;
    if (this.filterType)
      filters.type = this.filterType;
    if (this.filterActif !== "")
      filters.est_actif = this.filterActif === "1";
    this.sondageService.getSondages(filters).subscribe({
      next: (res) => {
        this.sondages = res.sondages ?? [];
        this.totalPages = res.pagination?.last_page ?? 1;
        this.total = res.pagination?.total ?? 0;
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger les sondages.");
        this.loading = false;
      }
    });
  }
  goToPage(p) {
    if (p < 1 || p > this.totalPages)
      return;
    this.currentPage = p;
    this.loadSondages();
  }
  // ── CREATE ────────────────────────────────────────────────────────────────
  openCreate() {
    this.form = {
      type: "satisfaction",
      declenchement: "manuel",
      est_anonyme: false,
      est_obligatoire: false,
      est_actif: true,
      autorise_retour: true,
      afficher_progres: true,
      nombre_tentatives_max: 1,
      duree_estimee: 5
    };
    this.formError = "";
    this.tab = "creer";
  }
  openEdit(s) {
    this.selectedSondage = s;
    this.form = __spreadValues({}, s);
    this.formError = "";
    this.tab = "editer";
  }
  saveSondage() {
    if (!this.form.titre || !this.form.type) {
      this.formError = "Titre et type sont obligatoires.";
      return;
    }
    this.saving = true;
    this.formError = "";
    const obs = this.tab === "creer" ? this.sondageService.createSondage(this.form) : this.sondageService.updateSondage(this.selectedSondage.id, this.form);
    obs.subscribe({
      next: (res) => {
        this.saving = false;
        if (this.tab === "creer" && res.sondage) {
          this.openQuestions(res.sondage);
        } else {
          this.tab = "liste";
          this.loadSondages();
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
    obs.subscribe({ next: () => this.loadSondages() });
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
        this.loadSondages();
      },
      error: () => {
        this.confirmDeleteId = null;
      }
    });
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
    this.loadSondages();
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
  // stat bar width (%)
  statWidth(val, total) {
    if (!total)
      return 0;
    return Math.round(val / total * 100);
  }
  getQuestionTypeLabel(type) {
    return this.questionTypes.find((t) => t.value === type)?.label ?? type;
  }
  asNumber(v) {
    return Number(v);
  }
  static \u0275fac = function AdminrhSondageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhSondageComponent)(\u0275\u0275directiveInject(SondageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhSondageComponent, selectors: [["app-adminrh-sondage"]], decls: 5, vars: 5, consts: [[4, "ngIf"], ["class", "ip-confirm-overlay", 4, "ngIf"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-page-head__sub"], ["class", "ip-btn ip-btn--primary", 3, "click", 4, "appHasPermission"], [1, "ip-card", "ip-filter-card"], [1, "ip-filter-row"], [1, "ip-filter-group", "ip-filter-group--search"], [1, "ip-input-icon-wrap"], [1, "isax", "isax-search-normal", "ip-input-icon"], ["type", "text", "placeholder", "Rechercher par titre, description\u2026", 1, "ip-input", "ip-input--icon", 3, "ngModelChange", "ngModel"], [1, "ip-filter-group"], [1, "ip-input", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "satisfaction"], ["value", "evaluation"], ["value", "feedback"], ["value", "quiz"], ["value", "enquete"], ["value", "1"], ["value", "0"], ["class", "alert alert-danger alert-dismissible mb-3", 4, "ngIf"], ["class", "ip-loader", 4, "ngIf"], ["class", "ip-sondage-grid", 4, "ngIf"], ["class", "ip-pagination", 4, "ngIf"], [1, "ip-btn", "ip-btn--primary", 3, "click"], [1, "isax", "isax-add"], [1, "alert", "alert-danger", "alert-dismissible", "mb-3"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-loader"], ["role", "status", 1, "spinner-border"], [1, "ip-sondage-grid"], ["class", "ip-sondage-card", 4, "ngFor", "ngForOf"], ["class", "ip-empty-state", 4, "ngIf"], [1, "ip-sondage-card"], [1, "ip-sc-bar"], [1, "ip-sc-body"], [1, "ip-sc-header"], [1, "ip-sc-type-badge"], [1, "ip-sc-statut"], [1, "fa-solid", "fa-circle"], [1, "ip-sc-title"], ["class", "ip-sc-desc", 4, "ngIf"], ["class", "ip-sc-desc ip-text-muted", 4, "ngIf"], [1, "ip-sc-meta"], [1, "isax", "isax-note-21"], [1, "isax", "isax-people"], [1, "ip-sc-tags"], ["class", "ip-tag", 4, "ngIf"], ["class", "ip-tag ip-tag--warn", 4, "ngIf"], [1, "ip-sc-footer"], ["title", "Questions", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-edit-2"], ["title", "Statistiques", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-chart-2"], ["title", "Modifier", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-setting-2"], [1, "ip-action-btn", 3, "click", "title"], ["title", "Export CSV", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-document-download"], ["title", "Supprimer", 1, "ip-action-btn", "ip-action-btn--danger", 3, "click"], [1, "isax", "isax-trash"], [1, "ip-sc-desc"], [1, "ip-sc-desc", "ip-text-muted"], [1, "isax", "isax-clock"], [1, "isax", "isax-book-1"], [1, "ip-tag"], [1, "ip-tag", "ip-tag--warn"], [1, "ip-empty-state"], [1, "ip-pagination"], [1, "ip-pagination__info"], [1, "ip-pagination__controls"], [1, "ip-pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], [4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], ["class", "ip-pg-ellipsis", 4, "ngIf"], ["class", "ip-pg-btn", 3, "ip-pg-btn--active", "click", 4, "ngIf"], [1, "ip-pg-ellipsis"], [1, "ip-pg-btn", 3, "click"], [1, "ip-btn", "ip-btn--ghost", "ip-btn--sm", 3, "click"], [1, "ip-page-head__title", "mt-2"], ["class", "alert alert-danger", 4, "ngIf"], [1, "ip-form-layout"], [1, "ip-card", "ip-form-card"], [1, "ip-form-section-head"], [1, "isax", "isax-document-text"], [1, "ip-field"], [1, "ip-label"], [1, "ip-required"], ["type", "text", "placeholder", "Ex. Satisfaction globale de la formation", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "D\xE9crivez l'objectif du sondage\u2026", 1, "ip-input", "ip-textarea", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Texte affich\xE9 avant les questions\u2026", 1, "ip-input", "ip-textarea", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Merci pour votre participation\u2026", 1, "ip-input", "ip-textarea", 3, "ngModelChange", "ngModel"], [1, "ip-field", "ip-field--row"], [1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], ["value", "manuel"], ["value", "a_chaud"], ["value", "a_froid"], ["class", "ip-field ip-field--row", 4, "ngIf"], ["type", "number", "min", "1", "placeholder", "5", 1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "placeholder", "1", 1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], [1, "ip-divider"], [1, "ip-toggle-row"], [1, "ip-toggle-label"], [1, "ip-toggle-sub"], [1, "ip-switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "ip-switch-track"], [1, "ip-save-row"], [1, "ip-btn", "ip-btn--primary", "ip-btn--wide", 3, "click", "disabled"], [1, "isax", "isax-save-2"], [1, "alert", "alert-danger"], ["type", "number", "min", "1", "placeholder", "Ex. 30", 1, "ip-input", "ip-input--sm", 3, "ngModelChange", "ngModel"], ["class", "ip-card ip-question-form-card", 4, "ngIf"], [1, "ip-card"], ["class", "ip-questions-list", 4, "ngIf"], ["class", "ip-empty", 4, "ngIf"], [1, "ip-card", "ip-question-form-card"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "ip-question-form-grid"], ["type", "text", "placeholder", "Entrez votre question\u2026", 1, "ip-input", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "ip-field", 4, "ngIf"], ["class", "ip-field ip-field--full", 4, "ngIf"], [1, "ip-question-form-footer"], [1, "ip-toggle-row", "ip-toggle-row--inline"], [1, "ip-question-form-actions"], [1, "ip-btn", "ip-btn--ghost", 3, "click"], [1, "isax", "isax-tick-circle"], [1, "alert", "alert-danger", "mb-3"], [3, "value"], ["type", "text", "placeholder", "Pr\xE9cision ou aide pour l'utilisateur\u2026", 1, "ip-input", 3, "ngModelChange", "ngModel"], [1, "ip-field", "ip-field--full"], [1, "ip-options-list"], ["class", "ip-option-row", 4, "ngFor", "ngForOf"], ["class", "ip-text-muted ip-text-sm", 4, "ngIf"], [1, "ip-add-option-row"], ["type", "text", "placeholder", "Nouvelle option\u2026", 1, "ip-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "ip-option-row"], [1, "ip-option-text"], ["type", "button", 1, "ip-action-btn", "ip-action-btn--danger", "ip-action-btn--xs", 3, "click"], [1, "isax", "isax-minus-cirlce"], [1, "ip-text-muted", "ip-text-sm"], ["type", "number", "placeholder", "1", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "5", 1, "ip-input", 3, "ngModelChange", "ngModel"], [1, "ip-questions-list"], ["class", "ip-question-item", 4, "ngFor", "ngForOf"], [1, "ip-question-item"], [1, "ip-question-num"], [1, "ip-question-content"], [1, "ip-question-text"], ["class", "ip-required ml-1", 4, "ngIf"], [1, "ip-question-meta"], [1, "ip-q-type-badge"], [1, "ip-question-actions"], [1, "ip-required", "ml-1"], [1, "isax", "isax-info-circle"], [1, "ip-empty"], [1, "ip-confirm-overlay"], [1, "ip-confirm-box"], [1, "isax", "isax-warning-2", "ip-confirm-icon"], [1, "ip-confirm-text"], [1, "ip-confirm-actions"], [1, "ip-btn", "ip-btn--danger", 3, "click"], [1, "spinner-border"], [1, "ip-kpi-row"], [1, "ip-kpi-card"], [1, "ip-kpi-icon"], [1, "ip-kpi-label"], [1, "ip-kpi-value"], [1, "ip-kpi-icon", "ip-kpi-icon--success"], [1, "ip-kpi-icon", "ip-kpi-icon--warn"], ["class", "ip-stat-question-card ip-card", 4, "ngFor", "ngForOf"], [1, "ip-stat-question-card", "ip-card"], [1, "ip-stat-q-header"], [1, "ip-stat-q-num"], [1, "ip-stat-q-text"], [1, "ip-stat-q-count"], ["class", "ip-stat-bars", 4, "ngIf"], ["class", "ip-stat-moyenne", 4, "ngIf"], ["class", "ip-stat-textes", 4, "ngIf"], [1, "ip-stat-bars"], ["class", "ip-stat-bar-row", 4, "ngFor", "ngForOf"], [1, "ip-stat-bar-row"], [1, "ip-stat-bar-label"], [1, "ip-stat-bar-wrap"], [1, "ip-stat-bar-fill"], [1, "ip-stat-bar-val"], [1, "ip-stat-moyenne"], [1, "ip-stat-moy-label"], [1, "ip-stat-moy-val"], [1, "ip-stat-moy-max"], [1, "ip-stat-textes"], ["class", "ip-stat-texte-item", 4, "ngFor", "ngForOf"], [1, "ip-stat-texte-item"], [1, "isax", "isax-quote-up"], [1, "isax", "isax-warning-2", "ip-confirm-icon", "ip-confirm-icon--danger"]], template: function AdminrhSondageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AdminrhSondageComponent_ng_container_0_Template, 40, 8, "ng-container", 0)(1, AdminrhSondageComponent_ng_container_1_Template, 129, 20, "ng-container", 0)(2, AdminrhSondageComponent_ng_container_2_Template, 18, 5, "ng-container", 0)(3, AdminrhSondageComponent_ng_container_3_Template, 13, 3, "ng-container", 0)(4, AdminrhSondageComponent_div_4_Template, 10, 0, "div", 1);
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
      \u0275\u0275property("ngIf", ctx.confirmDeleteId);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, HasPermissionDirective, KeyValuePipe], styles: ['\n\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 160px;\n}\n.ip-text-muted[_ngcontent-%COMP%] {\n  color: #6C757D;\n}\n.ip-text-sm[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ip-btn--primary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--danger[_ngcontent-%COMP%] {\n  background: #DC3545;\n  color: #fff;\n  border: none;\n}\n.ip-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgb(197.9088607595, 34.2911392405, 49.9670886076);\n}\n.ip-btn--wide[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn--danger[_ngcontent-%COMP%]:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.ip-action-btn--xs[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  font-size: 12px;\n  border-radius: 4px;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-filter-card[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  overflow: visible;\n}\n.ip-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ip-input--sm[_ngcontent-%COMP%] {\n  width: auto;\n}\n.ip-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.ip-input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ip-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-sondage-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.ip-sondage-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: box-shadow 0.15s;\n}\n.ip-sondage-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.ip-sc-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  flex-shrink: 0;\n}\n.ip-sc-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n}\n.ip-sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ip-sc-type-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-sc-statut[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.ip-sc-statut[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 7px;\n}\n.badge-ouvert[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.badge-inactif[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.badge-termine[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-sc-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 6px;\n}\n.ip-sc-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0 0 12px;\n  line-height: 1.5;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.ip-sc-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 10px;\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-sc-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-sc-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-sc-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ip-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-tag--warn[_ngcontent-%COMP%] {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-sc-footer[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-top: 1px solid #E9ECEF;\n  background: #FAFBFF;\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  color: #6C757D;\n}\n.ip-empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  opacity: 0.3;\n  margin-bottom: 12px;\n}\n.ip-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-form-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 20px;\n  align-items: flex-start;\n}\n@media (max-width: 860px) {\n  .ip-form-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-form-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.ip-form-section-head[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 18px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-form-section-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.ip-field--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.ip-field--row[_ngcontent-%COMP%]   .ip-label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.ip-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-required[_ngcontent-%COMP%] {\n  color: #DC3545;\n}\n.ip-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E9ECEF;\n  margin: 14px 0;\n}\n.ip-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-toggle-row--inline[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n}\n.ip-toggle-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%] {\n  background: #D4AF37;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%]::before {\n  transform: translateX(18px);\n}\n.ip-save-row[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 14px;\n}\n.ip-question-form-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 16px;\n}\n.ip-question-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .ip-question-form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-question-form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 14px;\n}\n.ip-question-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.ip-options-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.ip-option-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 6px 10px;\n  background: #F8F9FA;\n  border-radius: 6px;\n}\n.ip-option-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1A1A2E;\n  flex: 1;\n}\n.ip-add-option-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.ip-add-option-row[_ngcontent-%COMP%]   .ip-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ip-questions-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ip-question-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #E9ECEF;\n  transition: background 0.1s;\n}\n.ip-question-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-question-item[_ngcontent-%COMP%]:hover {\n  background: #FAFBFF;\n}\n.ip-question-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ip-question-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-question-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A1A2E;\n  margin-bottom: 5px;\n}\n.ip-question-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.ip-q-type-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #FDF8E7;\n  color: #D4AF37;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-question-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.ip-kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn[_ngcontent-%COMP%] {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-stat-question-card[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.ip-stat-q-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.ip-stat-q-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ip-stat-q-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-stat-q-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.ip-stat-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-stat-bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-stat-bar-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1A1A2E;\n  min-width: 120px;\n}\n.ip-stat-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 10px;\n  background: #F1F3F5;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ip-stat-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #D4AF37;\n  border-radius: 99px;\n  transition: width 0.3s;\n}\n.ip-stat-bar-val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  min-width: 80px;\n  text-align: right;\n}\n.ip-stat-moyenne[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-stat-moy-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ip-stat-moy-val[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #D4AF37;\n}\n.ip-stat-moy-max[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6C757D;\n}\n.ip-stat-textes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-stat-texte-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1A1A2E;\n  background: #F8F9FA;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  gap: 8px;\n}\n.ip-stat-texte-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.ip-confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.ip-confirm-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 28px 32px;\n  max-width: 400px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n.ip-confirm-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #D97706;\n  margin-bottom: 12px;\n  display: block;\n}\n.ip-confirm-icon--danger[_ngcontent-%COMP%] {\n  color: #DC3545;\n}\n.ip-confirm-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1A1A2E;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n.ip-confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.ip-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.ip-pagination__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ip-pg-btn[_ngcontent-%COMP%]:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  cursor: default;\n}\n.ip-pg-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.ml-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=adminrh-sondage.component.css.map */'] });
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
      <p class="ip-page-head__sub">Cr\xE9ez et g\xE9rez vos sondages de satisfaction, \xE9valuations et enqu\xEAtes</p>\r
    </div>\r
    <button *appHasPermission="'creer sondages'" class="ip-btn ip-btn--primary" (click)="openCreate()">\r
      <i class="isax isax-add"></i> Nouveau sondage\r
    </button>\r
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
                 placeholder="Rechercher par titre, description\u2026">\r
        </div>\r
      </div>\r
      <div class="ip-filter-group">\r
        <select class="ip-input" [(ngModel)]="filterType" (ngModelChange)="loadSondages()">\r
          <option value="">Tous les types</option>\r
          <option value="satisfaction">Satisfaction</option>\r
          <option value="evaluation">\xC9valuation</option>\r
          <option value="feedback">Feedback</option>\r
          <option value="quiz">Quiz</option>\r
          <option value="enquete">Enqu\xEAte</option>\r
        </select>\r
      </div>\r
      <div class="ip-filter-group">\r
        <select class="ip-input" [(ngModel)]="filterActif" (ngModelChange)="loadSondages()">\r
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
    <div *ngFor="let s of sondages" class="ip-sondage-card">\r
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
          <span *ngIf="s.formation"><i class="isax isax-book-1"></i> {{ s.formation.titre }}</span>\r
        </div>\r
\r
        <!-- Badges options -->\r
        <div class="ip-sc-tags">\r
          <span *ngIf="s.est_anonyme" class="ip-tag">Anonyme</span>\r
          <span *ngIf="s.est_obligatoire" class="ip-tag ip-tag--warn">Obligatoire</span>\r
          <span *ngIf="s.autorise_retour" class="ip-tag">Retour autoris\xE9</span>\r
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
        <button class="ip-action-btn" title="Modifier" (click)="openEdit(s)">\r
          <i class="isax isax-setting-2"></i>\r
        </button>\r
        <button class="ip-action-btn" [title]="s.est_actif ? 'Archiver' : 'Publier'" (click)="toggleActif(s)">\r
          <i [class]="s.est_actif ? 'isax isax-archive' : 'isax isax-send-2'"></i>\r
        </button>\r
        <button class="ip-action-btn" title="Export CSV" (click)="exportCsv(s)">\r
          <i class="isax isax-document-download"></i>\r
        </button>\r
        <button class="ip-action-btn ip-action-btn--danger" title="Supprimer" (click)="confirmDelete(s.id)">\r
          <i class="isax isax-trash"></i>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Vide -->\r
    <div *ngIf="sondages.length === 0" class="ip-empty-state">\r
      <i class="isax isax-note-21"></i>\r
      <p>Aucun sondage trouv\xE9</p>\r
      <button class="ip-btn ip-btn--primary" (click)="openCreate()">Cr\xE9er le premier sondage</button>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div *ngIf="totalPages > 1" class="ip-pagination">\r
    <span class="ip-pagination__info">{{ total }} sondage{{ total !== 1 ? 's' : '' }}</span>\r
    <div class="ip-pagination__controls">\r
      <button class="ip-pg-btn" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)">\r
        <i class="isax isax-arrow-left-2"></i>\r
      </button>\r
      <ng-container *ngFor="let p of pageNumbers">\r
        <span *ngIf="p === -1" class="ip-pg-ellipsis">\u2026</span>\r
        <button *ngIf="p !== -1" class="ip-pg-btn" [class.ip-pg-btn--active]="p === currentPage" (click)="goToPage(p)">{{ p }}</button>\r
      </ng-container>\r
      <button class="ip-pg-btn" [disabled]="currentPage === totalPages" (click)="goToPage(currentPage + 1)">\r
        <i class="isax isax-arrow-right-3"></i>\r
      </button>\r
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
      <button class="ip-btn ip-btn--ghost ip-btn--sm" (click)="backToList()">\r
        <i class="isax isax-arrow-left-2"></i> Retour\r
      </button>\r
      <h5 class="ip-page-head__title mt-2">{{ tab === 'creer' ? 'Nouveau sondage' : 'Modifier le sondage' }}</h5>\r
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
      <div class="ip-field ip-field--row">\r
        <label class="ip-label">D\xE9clenchement</label>\r
        <select class="ip-input ip-input--sm" [(ngModel)]="form.declenchement">\r
          <option value="manuel">Manuel</option>\r
          <option value="a_chaud">\xC0 chaud (imm\xE9diatement apr\xE8s la formation)</option>\r
          <option value="a_froid">\xC0 froid (apr\xE8s un d\xE9lai)</option>\r
        </select>\r
      </div>\r
\r
      <div class="ip-field ip-field--row" *ngIf="form.declenchement === 'a_froid'">\r
        <label class="ip-label">D\xE9lai (jours)</label>\r
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
        <button class="ip-btn ip-btn--primary ip-btn--wide" [disabled]="saving" (click)="saveSondage()">\r
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
`, styles: ['/* src/app/features/adminrh/adminrh-sondage/adminrh-sondage.component.scss */\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 160px;\n}\n.ip-text-muted {\n  color: #6C757D;\n}\n.ip-text-sm {\n  font-size: 11px;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 15px;\n}\n.ip-btn--primary {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--danger {\n  background: #DC3545;\n  color: #fff;\n  border: none;\n}\n.ip-btn--danger:hover {\n  background: rgb(197.9088607595, 34.2911392405, 49.9670886076);\n}\n.ip-btn--wide {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn--danger:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.ip-action-btn--xs {\n  width: 22px;\n  height: 22px;\n  font-size: 12px;\n  border-radius: 4px;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-filter-card {\n  padding: 14px 18px;\n  overflow: visible;\n}\n.ip-filter-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon {\n  padding-left: 34px;\n}\n.ip-input--sm {\n  width: auto;\n}\n.ip-textarea {\n  resize: vertical;\n}\n.ip-input-icon-wrap {\n  position: relative;\n}\n.ip-input-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-sondage-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.ip-sondage-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: box-shadow 0.15s;\n}\n.ip-sondage-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.ip-sc-bar {\n  height: 4px;\n  flex-shrink: 0;\n}\n.ip-sc-body {\n  flex: 1;\n  padding: 16px;\n}\n.ip-sc-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ip-sc-type-badge {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-sc-statut {\n  font-size: 11px;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.ip-sc-statut i {\n  font-size: 7px;\n}\n.badge-ouvert {\n  background: #ECFDF5;\n  color: #059669;\n}\n.badge-inactif {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.badge-termine {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-sc-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 6px;\n}\n.ip-sc-desc {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0 0 12px;\n  line-height: 1.5;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.ip-sc-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 10px;\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-sc-meta span {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-sc-meta i {\n  font-size: 12px;\n}\n.ip-sc-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ip-tag {\n  font-size: 10px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-tag--warn {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-sc-footer {\n  padding: 10px 14px;\n  border-top: 1px solid #E9ECEF;\n  background: #FAFBFF;\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-empty-state {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  color: #6C757D;\n}\n.ip-empty-state i {\n  font-size: 40px;\n  opacity: 0.3;\n  margin-bottom: 12px;\n}\n.ip-empty-state p {\n  margin-bottom: 16px;\n}\n.ip-empty {\n  padding: 40px;\n  text-align: center;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-form-layout {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 20px;\n  align-items: flex-start;\n}\n@media (max-width: 860px) {\n  .ip-form-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-form-card {\n  padding: 20px;\n}\n.ip-form-section-head {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 18px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-form-section-head i {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field {\n  margin-bottom: 14px;\n}\n.ip-field--row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.ip-field--row .ip-label {\n  margin: 0;\n}\n.ip-field--full {\n  grid-column: 1/-1;\n}\n.ip-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-required {\n  color: #DC3545;\n}\n.ip-divider {\n  height: 1px;\n  background: #E9ECEF;\n  margin: 14px 0;\n}\n.ip-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row:last-child {\n  border-bottom: none;\n}\n.ip-toggle-row--inline {\n  border: none;\n  padding: 0;\n}\n.ip-toggle-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch input:checked + .ip-switch-track {\n  background: #D4AF37;\n}\n.ip-switch input:checked + .ip-switch-track::before {\n  transform: translateX(18px);\n}\n.ip-save-row {\n  padding-top: 16px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 14px;\n}\n.ip-question-form-card {\n  padding: 20px;\n  margin-bottom: 16px;\n}\n.ip-question-form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 640px) {\n  .ip-question-form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-question-form-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 14px;\n}\n.ip-question-form-actions {\n  display: flex;\n  gap: 8px;\n}\n.ip-options-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.ip-option-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 6px 10px;\n  background: #F8F9FA;\n  border-radius: 6px;\n}\n.ip-option-text {\n  font-size: 13px;\n  color: #1A1A2E;\n  flex: 1;\n}\n.ip-add-option-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.ip-add-option-row .ip-input {\n  flex: 1;\n}\n.ip-questions-list {\n  padding: 0;\n}\n.ip-question-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #E9ECEF;\n  transition: background 0.1s;\n}\n.ip-question-item:last-child {\n  border-bottom: none;\n}\n.ip-question-item:hover {\n  background: #FAFBFF;\n}\n.ip-question-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ip-question-content {\n  flex: 1;\n  min-width: 0;\n}\n.ip-question-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A1A2E;\n  margin-bottom: 5px;\n}\n.ip-question-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.ip-q-type-badge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #FDF8E7;\n  color: #D4AF37;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ip-question-actions {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.ip-kpi-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-stat-question-card {\n  padding: 18px 20px;\n}\n.ip-stat-q-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.ip-stat-q-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ip-stat-q-text {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-stat-q-count {\n  font-size: 12px;\n  color: #6C757D;\n  white-space: nowrap;\n}\n.ip-stat-bars {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-stat-bar-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-stat-bar-label {\n  font-size: 12px;\n  color: #1A1A2E;\n  min-width: 120px;\n}\n.ip-stat-bar-wrap {\n  flex: 1;\n  height: 10px;\n  background: #F1F3F5;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ip-stat-bar-fill {\n  height: 100%;\n  background: #D4AF37;\n  border-radius: 99px;\n  transition: width 0.3s;\n}\n.ip-stat-bar-val {\n  font-size: 11px;\n  color: #6C757D;\n  min-width: 80px;\n  text-align: right;\n}\n.ip-stat-moyenne {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-stat-moy-label {\n  font-size: 12px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ip-stat-moy-val {\n  font-size: 28px;\n  font-weight: 700;\n  color: #D4AF37;\n}\n.ip-stat-moy-max {\n  font-size: 14px;\n  color: #6C757D;\n}\n.ip-stat-textes {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-stat-texte-item {\n  font-size: 13px;\n  color: #1A1A2E;\n  background: #F8F9FA;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  gap: 8px;\n}\n.ip-stat-texte-item i {\n  font-size: 12px;\n  color: #6C757D;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.ip-confirm-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.ip-confirm-box {\n  background: #fff;\n  border-radius: 16px;\n  padding: 28px 32px;\n  max-width: 400px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n.ip-confirm-icon {\n  font-size: 40px;\n  color: #D97706;\n  margin-bottom: 12px;\n  display: block;\n}\n.ip-confirm-icon--danger {\n  color: #DC3545;\n}\n.ip-confirm-text {\n  font-size: 14px;\n  color: #1A1A2E;\n  margin-bottom: 20px;\n  line-height: 1.5;\n}\n.ip-confirm-actions {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.ip-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.ip-pagination__info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn i {\n  font-size: 13px;\n}\n.ip-pg-btn:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  cursor: default;\n}\n.ip-pg-btn[disabled] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n.mt-2 {\n  margin-top: 8px;\n}\n.ml-1 {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=adminrh-sondage.component.css.map */\n'] }]
  }], () => [{ type: SondageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhSondageComponent, { className: "AdminrhSondageComponent", filePath: "app/features/adminrh/adminrh-sondage/adminrh-sondage.component.ts", lineNumber: 32 });
})();
export {
  AdminrhSondageComponent
};
//# sourceMappingURL=chunk-I4HKK2FW.js.map
