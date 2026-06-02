import {
  FormationsService
} from "./chunk-MDRJR4EN.js";
import "./chunk-FKX6UC3I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-45DOGZAU.js";
import {
  Router
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  UpperCasePipe
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
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
} from "./chunk-7XGB4BEQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/student/parcours-assignes/parcours-assignes.component.ts
function ParcoursAssignesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275element(2, "i", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.totalItems, " parcours ");
  }
}
function ParcoursAssignesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_7_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFiltreChange(""));
    });
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275text(8, "Total assign\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_7_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFiltreChange("en_cours"));
    });
    \u0275\u0275elementStart(10, "div", 18);
    \u0275\u0275element(11, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 19)(13, "div", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 21);
    \u0275\u0275text(16, "En cours");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 24);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_7_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFiltreChange("termine"));
    });
    \u0275\u0275elementStart(18, "div", 18);
    \u0275\u0275element(19, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 19)(21, "div", 20);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 21);
    \u0275\u0275text(24, "Termin\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 26);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_7_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFiltreChange(""));
    });
    \u0275\u0275elementStart(26, "div", 18);
    \u0275\u0275element(27, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19)(29, "div", 20);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 21);
    \u0275\u0275text(32, "Non d\xE9marr\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 28);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_7_Template_div_click_33_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFiltreChange("assigne"));
    });
    \u0275\u0275elementStart(34, "div", 18);
    \u0275\u0275element(35, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 19)(37, "div", 20);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 21);
    \u0275\u0275text(40, "Assign\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 30);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_7_Template_div_click_41_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFiltreChange("demande"));
    });
    \u0275\u0275elementStart(42, "div", 18);
    \u0275\u0275element(43, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 19)(45, "div", 20);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 21);
    \u0275\u0275text(48, "Demandes accept\xE9es");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r0.selectedFiltre === "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalParcours);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r0.selectedFiltre === "en_cours");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalEnCours);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r0.selectedFiltre === "termine");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalTermines);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", false);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalNonDemarres);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r0.selectedFiltre === "assigne");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalAssignes);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r0.selectedFiltre === "demande");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalDemandes);
  }
}
function ParcoursAssignesComponent_div_8_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_8_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.searchTerm = "";
      return \u0275\u0275resetView(ctx_r0.onSearchChange());
    });
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementEnd();
  }
}
function ParcoursAssignesComponent_div_8_button_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.totalAssignes, ")");
  }
}
function ParcoursAssignesComponent_div_8_button_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.totalDemandes, ")");
  }
}
function ParcoursAssignesComponent_div_8_button_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.totalTermines, ")");
  }
}
function ParcoursAssignesComponent_div_8_button_6_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.totalEnCours, ")");
  }
}
function ParcoursAssignesComponent_div_8_button_6_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.totalExpires, ")");
  }
}
function ParcoursAssignesComponent_div_8_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_8_button_6_Template_button_click_0_listener() {
      const f_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFiltreChange(f_r6.value));
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275template(3, ParcoursAssignesComponent_div_8_button_6_span_3_Template, 2, 1, "span", 44)(4, ParcoursAssignesComponent_div_8_button_6_span_4_Template, 2, 1, "span", 44)(5, ParcoursAssignesComponent_div_8_button_6_span_5_Template, 2, 1, "span", 44)(6, ParcoursAssignesComponent_div_8_button_6_span_6_Template, 2, 1, "span", 44)(7, ParcoursAssignesComponent_div_8_button_6_span_7_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("sc-filters__type-btn--active", ctx_r0.selectedFiltre === f_r6.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", f_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", f_r6.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r6.value === "assigne" && ctx_r0.totalAssignes > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r6.value === "demande" && ctx_r0.totalDemandes > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r6.value === "termine" && ctx_r0.totalTermines > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r6.value === "en_cours" && ctx_r0.totalEnCours > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r6.value === "expire" && ctx_r0.totalExpires > 0);
  }
}
function ParcoursAssignesComponent_div_8_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_8_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2, " R\xE9initialiser ");
    \u0275\u0275elementEnd();
  }
}
function ParcoursAssignesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275elementStart(3, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ParcoursAssignesComponent_div_8_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchTerm, $event) || (ctx_r0.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ParcoursAssignesComponent_div_8_Template_input_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ParcoursAssignesComponent_div_8_button_4_Template, 2, 0, "button", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275template(6, ParcoursAssignesComponent_div_8_button_6_Template, 8, 9, "button", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ParcoursAssignesComponent_div_8_button_7_Template, 3, 0, "button", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.filtres);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasActiveFilters);
  }
}
function ParcoursAssignesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 50);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275text(5, "Effacer les filtres");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.totalItems, " r\xE9sultat", ctx_r0.totalItems > 1 ? "s" : "");
  }
}
function ParcoursAssignesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "div", 52);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de vos parcours...");
    \u0275\u0275elementEnd()();
  }
}
function ParcoursAssignesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 55);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadParcours());
    });
    \u0275\u0275element(5, "i", 56);
    \u0275\u0275text(6, " R\xE9essayer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275text(2, "Compl\xE9t\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275text(2, "Expir\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function ParcoursAssignesComponent_div_12_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parcours_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r0.getCategorieColor(parcours_r11.categorie));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, parcours_r11.categorie), " ");
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const parcours_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", parcours_r11.duree_totale, " h");
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const parcours_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", parcours_r11.formations_terminees, "/", parcours_r11.total_formations, " termin\xE9es");
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275text(2, " Parcours Termin\xE9 ! ");
    \u0275\u0275elementEnd();
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 99)(2, "span", 100);
    \u0275\u0275text(3, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 101);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 102);
    \u0275\u0275element(8, "div", 103);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const parcours_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", parcours_r11.est_expire ? "#9ca3af" : parcours_r11.progression > 0 ? "#069b8f" : "#9ca3af");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 7, parcours_r11.progression, "1.0-0"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", parcours_r11.progression, "%");
    \u0275\u0275classProp("parcours-card__prog-fill--expire", parcours_r11.est_expire);
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275template(1, ParcoursAssignesComponent_div_12_div_1_div_24_div_1_Template, 3, 0, "div", 96)(2, ParcoursAssignesComponent_div_12_div_1_div_24_div_2_Template, 9, 10, "div", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parcours_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", parcours_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !parcours_r11.est_termine);
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parcours_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-calendar-add", parcours_r11.source !== "demande")("isax-tick-circle", parcours_r11.source === "demande");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", parcours_r11.source === "demande" ? "Valid\xE9e le" : "Assign\xE9 le", " ", \u0275\u0275pipeBind2(3, 6, parcours_r11.date_assignation, "dd/MM/yyyy"), " ");
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275text(2, "Acc\xE8s permanent ");
    \u0275\u0275elementEnd();
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parcours_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Expir\xE9 le ", \u0275\u0275pipeBind2(3, 1, parcours_r11.date_expiration, "dd/MM/yyyy"), " ");
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parcours_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Expire dans ", ctx_r0.getJoursRestants(parcours_r11.date_expiration), " jour(s) ! ");
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parcours_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Expire le ", \u0275\u0275pipeBind2(3, 1, parcours_r11.date_expiration, "dd/MM/yyyy"), " ");
  }
}
function ParcoursAssignesComponent_div_12_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275elementStart(2, "em");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const parcours_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(parcours_r11.notes);
  }
}
function ParcoursAssignesComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_12_div_1_Template_div_click_1_listener() {
      const parcours_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToDetail(parcours_r11.id));
    });
    \u0275\u0275elementStart(2, "div", 61);
    \u0275\u0275element(3, "div", 62)(4, "div", 63)(5, "i");
    \u0275\u0275template(6, ParcoursAssignesComponent_div_12_div_1_div_6_Template, 3, 0, "div", 64)(7, ParcoursAssignesComponent_div_12_div_1_div_7_Template, 3, 0, "div", 65);
    \u0275\u0275elementStart(8, "span", 66);
    \u0275\u0275element(9, "i", 67);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ParcoursAssignesComponent_div_12_div_1_span_11_Template, 3, 5, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 69)(13, "h5", 70);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 71);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 72)(18, "div", 73);
    \u0275\u0275element(19, "i", 74);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ParcoursAssignesComponent_div_12_div_1_div_22_Template, 4, 1, "div", 75)(23, ParcoursAssignesComponent_div_12_div_1_div_23_Template, 4, 2, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ParcoursAssignesComponent_div_12_div_1_div_24_Template, 3, 2, "div", 77);
    \u0275\u0275elementStart(25, "div", 78);
    \u0275\u0275template(26, ParcoursAssignesComponent_div_12_div_1_div_26_Template, 4, 9, "div", 79)(27, ParcoursAssignesComponent_div_12_div_1_div_27_Template, 3, 0, "div", 80)(28, ParcoursAssignesComponent_div_12_div_1_div_28_Template, 4, 4, "div", 81)(29, ParcoursAssignesComponent_div_12_div_1_div_29_Template, 3, 1, "div", 82)(30, ParcoursAssignesComponent_div_12_div_1_div_30_Template, 4, 4, "div", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, ParcoursAssignesComponent_div_12_div_1_div_31_Template, 4, 1, "div", 84);
    \u0275\u0275elementStart(32, "div", 85)(33, "button", 86);
    \u0275\u0275text(34);
    \u0275\u0275element(35, "i", 87);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const parcours_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("parcours-card--termine", parcours_r11.est_termine)("parcours-card--expire", parcours_r11.est_expire && !parcours_r11.est_termine)("parcours-card--grayed", ctx_r0.isGrayed(parcours_r11));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", parcours_r11.image_couverture ? "url(" + parcours_r11.image_couverture + ")" : "none")("background-color", !parcours_r11.image_couverture ? ctx_r0.getCategorieColor(parcours_r11.categorie) : "transparent");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getCategorieIcon(parcours_r11.categorie) + " parcours-card__banner-icon");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", parcours_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", parcours_r11.est_expire && !parcours_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275classProp("parcours-card__banner-assigned--demande", parcours_r11.source === "demande")("parcours-card__banner-assigned--termine", parcours_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-medal-star", parcours_r11.est_termine)("isax-tick-circle", !parcours_r11.est_termine && parcours_r11.source !== "demande")("isax-send-2", !parcours_r11.est_termine && parcours_r11.source === "demande");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", parcours_r11.source === "demande" ? "Demande accept\xE9e" : "Assign\xE9", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", parcours_r11.categorie);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(parcours_r11.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", parcours_r11.description || "Aucune description disponible", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", parcours_r11.nombre_formations, " formation", parcours_r11.nombre_formations > 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", parcours_r11.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", parcours_r11.formations_terminees > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", parcours_r11.total_formations > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", parcours_r11.date_assignation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !parcours_r11.date_expiration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", parcours_r11.est_expire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !parcours_r11.est_expire && ctx_r0.isExpiringSoon(parcours_r11.date_expiration));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !parcours_r11.est_expire && parcours_r11.date_expiration && !ctx_r0.isExpiringSoon(parcours_r11.date_expiration));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", parcours_r11.notes);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("parcours-card__btn--done", parcours_r11.est_termine)("parcours-card__btn--expire", parcours_r11.est_expire && !parcours_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getCTALabel(parcours_r11), " ");
  }
}
function ParcoursAssignesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275template(1, ParcoursAssignesComponent_div_12_div_1_Template, 36, 44, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.displayedParcours);
  }
}
function ParcoursAssignesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275element(1, "i", 114);
    \u0275\u0275elementStart(2, "h6", 115);
    \u0275\u0275text(3, "Aucun parcours disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Vous n'avez pas encore de parcours assign\xE9s ou de demandes accept\xE9es.");
    \u0275\u0275elementEnd()();
  }
}
function ParcoursAssignesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275element(1, "i", 116);
    \u0275\u0275elementStart(2, "h6", 115);
    \u0275\u0275text(3, "Aucun r\xE9sultat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Aucun parcours ne correspond \xE0 votre recherche.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 117);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275element(7, "i", 56);
    \u0275\u0275text(8, " R\xE9initialiser les filtres ");
    \u0275\u0275elementEnd()();
  }
}
function ParcoursAssignesComponent_div_15_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 128);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function ParcoursAssignesComponent_div_15_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_15_button_11_Template_button_click_0_listener() {
      const p_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changePage(p_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("sc-pagination__btn--active", ctx_r0.currentPage === p_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r15);
  }
}
function ParcoursAssignesComponent_div_15_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 128);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function ParcoursAssignesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118)(1, "span", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 120);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 121)(6, "button", 122);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(1));
    });
    \u0275\u0275element(7, "i", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 122);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_15_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(9, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ParcoursAssignesComponent_div_15_span_10_Template, 2, 0, "span", 125)(11, ParcoursAssignesComponent_div_15_button_11_Template, 2, 3, "button", 126)(12, ParcoursAssignesComponent_div_15_span_12_Template, 2, 0, "span", 125);
    \u0275\u0275elementStart(13, "button", 122);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_15_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage + 1));
    });
    \u0275\u0275element(14, "i", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 122);
    \u0275\u0275listener("click", function ParcoursAssignesComponent_div_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.totalPages));
    });
    \u0275\u0275element(16, "i", 87);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Page ", ctx_r0.currentPage, " / ", ctx_r0.totalPages, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r0.totalItems, " parcours)");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.pages[0] > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.pages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pages[ctx_r0.pages.length - 1] < ctx_r0.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
var ParcoursAssignesComponent = class _ParcoursAssignesComponent {
  formationsService;
  router;
  allParcours = [];
  filteredParcours = [];
  displayedParcours = [];
  loading = false;
  error = "";
  // Filtres
  searchTerm = "";
  selectedCategorie = "";
  selectedFiltre = "";
  categories = [];
  // Pagination
  currentPage = 1;
  pageSize = 9;
  totalPages = 0;
  totalItems = 0;
  filtres = [
    { value: "", label: "Tous", icon: "isax-grid-1" },
    { value: "assigne", label: "Assign\xE9s", icon: "isax-tick-circle" },
    { value: "demande", label: "Demandes accept\xE9es", icon: "isax-send-2" },
    { value: "termine", label: "Termin\xE9s", icon: "isax-medal-star" },
    { value: "en_cours", label: "En cours", icon: "isax-play-circle" },
    { value: "permanent", label: "Acc\xE8s permanent", icon: "isax-infinity" },
    { value: "expire_bientot", label: "Expire bient\xF4t", icon: "isax-warning-2" },
    { value: "expire", label: "Expir\xE9", icon: "isax-calendar-remove" }
  ];
  constructor(formationsService, router) {
    this.formationsService = formationsService;
    this.router = router;
  }
  ngOnInit() {
    this.loadParcours();
  }
  loadParcours() {
    this.loading = true;
    this.error = "";
    this.formationsService.getMesParcoursAssignes().subscribe({
      next: (res) => {
        this.allParcours = (res.parcours ?? []).map((p) => {
          const estTermine = p.est_termine || p.progression >= 100 || p.total_formations > 0 && p.formations_terminees >= p.total_formations;
          const estExpire = !estTermine && !!p.date_expiration && new Date(p.date_expiration) < /* @__PURE__ */ new Date();
          const estEnCours = !estTermine && !estExpire && p.progression > 0;
          const nonDemarre = !estTermine && !estExpire && p.progression === 0;
          return __spreadProps(__spreadValues({}, p), {
            est_termine: estTermine,
            est_expire: p.est_expire ?? estExpire,
            est_en_cours: estEnCours,
            non_demarre: nonDemarre,
            badge_label: estTermine ? "Termin\xE9" : p.est_expire ?? estExpire ? "Expir\xE9" : p.source === "demande" ? "Demande accept\xE9e" : p.badge_label ?? "Assign\xE9"
          });
        });
        const cats = this.allParcours.map((p) => p.categorie).filter((c) => !!c);
        this.categories = [...new Set(cats)];
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        console.error("Erreur parcours:", err);
        this.error = "Erreur lors du chargement de vos parcours";
        this.loading = false;
      }
    });
  }
  // ── Filtres ────────────────────────────────────────────────
  applyFilters() {
    let result = [...this.allParcours];
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter((p) => p.titre?.toLowerCase().includes(term) || p.description?.toLowerCase().includes(term));
    }
    if (this.selectedCategorie) {
      result = result.filter((p) => p.categorie === this.selectedCategorie);
    }
    switch (this.selectedFiltre) {
      case "assigne":
        result = result.filter((p) => p.source === "assigne");
        break;
      case "demande":
        result = result.filter((p) => p.source === "demande");
        break;
      case "termine":
        result = result.filter((p) => p.est_termine);
        break;
      case "en_cours":
        result = result.filter((p) => p.est_en_cours);
        break;
      case "permanent":
        result = result.filter((p) => !p.date_expiration);
        break;
      case "expire_bientot":
        result = result.filter((p) => this.isExpiringSoon(p.date_expiration));
        break;
      case "expire":
        result = result.filter((p) => p.est_expire);
        break;
    }
    this.filteredParcours = result;
    this.totalItems = result.length;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.currentPage = 1;
    this.paginate();
  }
  onSearchChange() {
    this.currentPage = 1;
    this.applyFilters();
  }
  onCategorieChange(c) {
    this.selectedCategorie = c;
    this.currentPage = 1;
    this.applyFilters();
  }
  onFiltreChange(valeur) {
    this.selectedFiltre = valeur;
    this.currentPage = 1;
    this.applyFilters();
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedCategorie = "";
    this.selectedFiltre = "";
    this.currentPage = 1;
    this.applyFilters();
  }
  get hasActiveFilters() {
    return !!this.searchTerm || !!this.selectedCategorie || !!this.selectedFiltre;
  }
  // ── KPI Getters ────────────────────────────────────────────
  get totalParcours() {
    return this.allParcours.length;
  }
  get totalAssignes() {
    return this.allParcours.filter((p) => p.source === "assigne").length;
  }
  get totalDemandes() {
    return this.allParcours.filter((p) => p.source === "demande").length;
  }
  get totalTermines() {
    return this.allParcours.filter((p) => p.est_termine).length;
  }
  get totalEnCours() {
    return this.allParcours.filter((p) => p.est_en_cours).length;
  }
  get totalNonDemarres() {
    return this.allParcours.filter((p) => p.non_demarre && !p.est_expire).length;
  }
  get totalExpires() {
    return this.allParcours.filter((p) => p.est_expire).length;
  }
  // ── Pagination ─────────────────────────────────────────────
  paginate() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedParcours = this.filteredParcours.slice(start, start + this.pageSize);
  }
  changePage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.paginate();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  get pages() {
    const delta = 2;
    const range = [];
    const left = Math.max(1, this.currentPage - delta);
    const right = Math.min(this.totalPages, this.currentPage + delta);
    for (let i = left; i <= right; i++)
      range.push(i);
    return range;
  }
  // ── Navigation ─────────────────────────────────────────────
  goToDetail(parcoursId) {
    this.router.navigate(["/student/mes-parcours", parcoursId]);
  }
  // ── Helpers badge ──────────────────────────────────────────
  getCTALabel(p) {
    if (p.est_termine)
      return "Revoir";
    if (p.est_expire)
      return "Consulter";
    return "Voir le parcours";
  }
  isGrayed(p) {
    return p.est_termine || p.est_expire;
  }
  // ── Helpers expiration ─────────────────────────────────────
  isExpiringSoon(dateExpiration) {
    if (!dateExpiration)
      return false;
    const diff = new Date(dateExpiration).getTime() - (/* @__PURE__ */ new Date()).getTime();
    return diff > 0 && diff < 7 * 24 * 60 * 60 * 1e3;
  }
  getJoursRestants(dateExpiration) {
    if (!dateExpiration)
      return null;
    const diff = new Date(dateExpiration).getTime() - (/* @__PURE__ */ new Date()).getTime();
    return diff > 0 ? Math.ceil(diff / (1e3 * 60 * 60 * 24)) : 0;
  }
  // ── Helpers couleur / icône catégorie ──────────────────────
  getCategorieColor(categorie) {
    if (!categorie)
      return "#069b8f";
    const c = categorie.toLowerCase();
    if (c.includes("technique") || c.includes("dev") || c.includes("web"))
      return "#0369a1";
    if (c.includes("management") || c.includes("leadership"))
      return "#b45309";
    if (c.includes("securit") || c.includes("cyber"))
      return "#dc2626";
    if (c.includes("certif"))
      return "#7c3aed";
    if (c.includes("soft") || c.includes("communication"))
      return "#0d9488";
    if (c.includes("data") || c.includes("analyse"))
      return "#6d28d9";
    if (c.includes("marketing") || c.includes("commercial"))
      return "#b45309";
    return "#069b8f";
  }
  getCategorieIcon(categorie) {
    if (!categorie)
      return "isax isax-routing";
    const c = categorie.toLowerCase();
    if (c.includes("technique") || c.includes("dev") || c.includes("web"))
      return "isax isax-code";
    if (c.includes("management") || c.includes("leadership"))
      return "isax isax-people";
    if (c.includes("securit") || c.includes("cyber"))
      return "isax isax-shield";
    if (c.includes("certif"))
      return "isax isax-medal-star";
    if (c.includes("soft") || c.includes("communication"))
      return "isax isax-message";
    if (c.includes("data") || c.includes("analyse"))
      return "isax isax-chart";
    if (c.includes("marketing") || c.includes("commercial"))
      return "isax isax-trend-up";
    return "isax isax-routing";
  }
  static \u0275fac = function ParcoursAssignesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParcoursAssignesComponent)(\u0275\u0275directiveInject(FormationsService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParcoursAssignesComponent, selectors: [["app-parcours-assignes"]], decls: 16, vars: 10, consts: [[1, "sc-header"], [1, "sc-header__left"], [1, "sc-header__title"], [1, "sc-header__subtitle"], ["class", "sc-header__right", 4, "ngIf"], ["class", "pq-kpi-grid mb-4", 4, "ngIf"], ["class", "sc-filters", 4, "ngIf"], ["class", "sc-results-info", 4, "ngIf"], ["class", "sc-loading", 4, "ngIf"], ["class", "sc-error", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["class", "sc-empty", 4, "ngIf"], ["class", "sc-pagination", 4, "ngIf"], [1, "sc-header__right"], [1, "sc-header__count"], [1, "isax", "isax-routing"], [1, "pq-kpi-grid", "mb-4"], [1, "pq-kpi-card", "pq-kpi-card--teal", 3, "click"], [1, "pq-kpi-card__icon"], [1, "pq-kpi-card__body"], [1, "pq-kpi-card__value"], [1, "pq-kpi-card__label"], [1, "pq-kpi-card", "pq-kpi-card--blue", 3, "click"], [1, "isax", "isax-play-circle"], [1, "pq-kpi-card", "pq-kpi-card--green", 3, "click"], [1, "isax", "isax-medal-star"], [1, "pq-kpi-card", "pq-kpi-card--orange", 3, "click"], [1, "isax", "isax-flash-circle"], [1, "pq-kpi-card", "pq-kpi-card--purple", 3, "click"], [1, "isax", "isax-tick-circle"], [1, "pq-kpi-card", "pq-kpi-card--indigo", 3, "click"], [1, "isax", "isax-send-2"], [1, "sc-filters"], [1, "sc-filters__search"], [1, "isax", "isax-search-normal", "sc-filters__search-icon"], ["type", "text", "placeholder", "Rechercher un parcours...", 1, "sc-filters__search-input", 3, "ngModelChange", "ngModel"], ["class", "sc-filters__search-clear", 3, "click", 4, "ngIf"], [1, "sc-filters__types"], ["class", "sc-filters__type-btn", 3, "sc-filters__type-btn--active", "click", 4, "ngFor", "ngForOf"], ["class", "sc-filters__reset", 3, "click", 4, "ngIf"], [1, "sc-filters__search-clear", 3, "click"], [1, "isax", "isax-close-circle"], [1, "sc-filters__type-btn", 3, "click"], [1, "isax", "me-1", 3, "ngClass"], ["class", "sc-filters__type-count", 4, "ngIf"], [1, "sc-filters__type-count"], [1, "sc-filters__reset", 3, "click"], [1, "isax", "isax-refresh"], [1, "sc-results-info"], [1, "isax", "isax-filter"], [1, "sc-results-info__clear", 3, "click"], [1, "sc-loading"], [1, "sc-loading__spinner"], [1, "sc-error"], [1, "isax", "isax-warning-2", "sc-error__icon"], [1, "sc-error__retry", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [1, "row", "g-4"], ["class", "col-xl-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "col-md-6"], [1, "parcours-card", 3, "click"], [1, "parcours-card__banner"], [1, "parcours-card__banner-bg"], [1, "parcours-card__banner-overlay"], ["class", "parcours-card__banner-termine", 4, "ngIf"], ["class", "parcours-card__banner-expire", 4, "ngIf"], [1, "parcours-card__banner-assigned"], [1, "isax", "me-1"], ["class", "parcours-card__banner-badge", 3, "background-color", 4, "ngIf"], [1, "parcours-card__body"], [1, "parcours-card__title"], [1, "parcours-card__description"], [1, "parcours-card__stats"], [1, "parcours-card__stat"], [1, "isax", "isax-book-1"], ["class", "parcours-card__stat", 4, "ngIf"], ["class", "parcours-card__stat parcours-card__stat--done", 4, "ngIf"], ["class", "parcours-card__progression", 4, "ngIf"], [1, "parcours-card__assignation"], ["class", "parcours-card__assignation-date", 4, "ngIf"], ["class", "parcours-card__assignation-expiry parcours-card__assignation-expiry--permanent", 4, "ngIf"], ["class", "parcours-card__assignation-expiry parcours-card__assignation-expiry--expired", 4, "ngIf"], ["class", "parcours-card__assignation-expiry parcours-card__assignation-expiry--warning", 4, "ngIf"], ["class", "parcours-card__assignation-expiry", 4, "ngIf"], ["class", "parcours-card__notes", 4, "ngIf"], [1, "parcours-card__footer"], [1, "parcours-card__btn"], [1, "isax", "isax-arrow-right-3"], [1, "parcours-card__banner-termine"], [1, "isax", "isax-medal-star", "me-1"], [1, "parcours-card__banner-expire"], [1, "isax", "isax-calendar-remove", "me-1"], [1, "parcours-card__banner-badge"], [1, "isax", "isax-clock"], [1, "parcours-card__stat", "parcours-card__stat--done"], [1, "parcours-card__progression"], ["class", "parcours-card__termine", 4, "ngIf"], [4, "ngIf"], [1, "parcours-card__termine"], [1, "parcours-card__prog-header"], [1, "parcours-card__prog-label"], [1, "parcours-card__prog-pct"], [1, "parcours-card__prog-bar"], [1, "parcours-card__prog-fill"], [1, "parcours-card__assignation-date"], [1, "parcours-card__assignation-expiry", "parcours-card__assignation-expiry--permanent"], [1, "isax", "isax-infinity", "me-1"], [1, "parcours-card__assignation-expiry", "parcours-card__assignation-expiry--expired"], [1, "parcours-card__assignation-expiry", "parcours-card__assignation-expiry--warning"], [1, "isax", "isax-warning-2", "me-1"], [1, "parcours-card__assignation-expiry"], [1, "parcours-card__notes"], [1, "isax", "isax-note-text", "me-1"], [1, "sc-empty"], [1, "isax", "isax-routing", "sc-empty__icon"], [1, "sc-empty__title"], [1, "isax", "isax-search-normal", "sc-empty__icon"], [1, "sc-empty__btn", 3, "click"], [1, "sc-pagination"], [1, "sc-pagination__info"], [1, "sc-pagination__info-total"], [1, "sc-pagination__controls"], [1, "sc-pagination__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-3"], [1, "isax", "isax-arrow-left-2"], ["class", "sc-pagination__ellipsis", 4, "ngIf"], ["class", "sc-pagination__btn", 3, "sc-pagination__btn--active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-2"], [1, "sc-pagination__ellipsis"], [1, "sc-pagination__btn", 3, "click"]], template: function ParcoursAssignesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Mes Parcours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Parcours assign\xE9s et demandes accept\xE9es par votre entreprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ParcoursAssignesComponent_div_6_Template, 4, 1, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ParcoursAssignesComponent_div_7_Template, 49, 18, "div", 5)(8, ParcoursAssignesComponent_div_8_Template, 8, 4, "div", 6)(9, ParcoursAssignesComponent_div_9_Template, 6, 2, "div", 7)(10, ParcoursAssignesComponent_div_10_Template, 4, 0, "div", 8)(11, ParcoursAssignesComponent_div_11_Template, 7, 1, "div", 9)(12, ParcoursAssignesComponent_div_12_Template, 2, 1, "div", 10)(13, ParcoursAssignesComponent_div_13_Template, 6, 0, "div", 11)(14, ParcoursAssignesComponent_div_14_Template, 9, 0, "div", 11)(15, ParcoursAssignesComponent_div_15_Template, 17, 10, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.allParcours.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.allParcours.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.allParcours.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.hasActiveFilters && ctx.filteredParcours.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.displayedParcours.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.allParcours.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.allParcours.length > 0 && ctx.filteredParcours.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, UpperCasePipe, DecimalPipe, DatePipe], styles: ["\n\n.pq-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  transition: all 0.22s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05);\n}\n.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: currentColor;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05);\n}\n.pq-kpi-card__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.pq-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1;\n}\n.pq-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%] {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%] {\n  border-top-color: #16a34a;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.pq-kpi-card--green.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n}\n.pq-kpi-card--blue[_ngcontent-%COMP%] {\n  border-top-color: #3b82f6;\n}\n.pq-kpi-card--blue[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.pq-kpi-card--blue.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%] {\n  border-top-color: #f59e0b;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.pq-kpi-card--orange.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n}\n.pq-kpi-card--purple[_ngcontent-%COMP%] {\n  border-top-color: #7c3aed;\n}\n.pq-kpi-card--purple[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.pq-kpi-card--purple.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #7c3aed;\n}\n.pq-kpi-card--indigo[_ngcontent-%COMP%] {\n  border-top-color: #4f46e5;\n}\n.pq-kpi-card--indigo[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.pq-kpi-card--indigo.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n}\n.sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 28px;\n}\n.sc-header__left[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sc-header__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #111827;\n  margin: 0 0 4px;\n  letter-spacing: -0.3px;\n}\n.sc-header__subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n  margin: 0;\n}\n.sc-header__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.sc-header__count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1px solid rgba(6, 155, 143, 0.3);\n  border-radius: 99px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.sc-header__count[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sc-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 14px 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sc-filters__search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n  max-width: 320px;\n}\n.sc-filters__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 15px;\n  pointer-events: none;\n}\n.sc-filters__search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 36px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #f9fafb;\n  outline: none;\n  transition: all 0.22s ease;\n}\n.sc-filters__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.sc-filters__search-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.08);\n}\n.sc-filters__search-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 2px;\n  font-size: 16px;\n  line-height: 1;\n  transition: color 0.15s;\n}\n.sc-filters__search-clear[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.sc-filters__types[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  flex: 1;\n}\n.sc-filters__type-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 99px;\n  border: 1.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #4b5563;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  white-space: nowrap;\n}\n.sc-filters__type-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sc-filters__type-btn[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-filters__type-btn--active[_ngcontent-%COMP%] {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.3);\n}\n.sc-filters__type-btn--active[_ngcontent-%COMP%]:hover {\n  background: #047a6f;\n}\n.sc-filters__type-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 3px;\n  opacity: 0.8;\n}\n.sc-filters__reset[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 99px;\n  border: 1.5px solid #dc2626;\n  background: #fff;\n  color: #dc2626;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-filters__reset[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.sc-results-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #4b5563;\n}\n.sc-results-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n  font-size: 14px;\n}\n.sc-results-info__clear[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #069b8f;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: underline;\n  padding: 0;\n}\n.sc-results-info__clear[_ngcontent-%COMP%]:hover {\n  color: #047a6f;\n}\n.sc-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n  color: #9ca3af;\n}\n.sc-loading__spinner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_sc-spin 0.7s linear infinite;\n}\n.sc-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 13px;\n}\n@keyframes _ngcontent-%COMP%_sc-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sc-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.sc-error__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #dc2626;\n  opacity: 0.5;\n  margin-bottom: 12px;\n  display: block;\n}\n.sc-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4b5563;\n  margin-bottom: 16px;\n}\n.sc-error__retry[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 50px;\n  border: 1.5px solid #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-error__retry[_ngcontent-%COMP%]:hover {\n  background: #069b8f;\n  color: #fff;\n}\n.sc-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 72px 20px;\n  text-align: center;\n}\n.sc-empty__icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  color: rgba(6, 155, 143, 0.2);\n  margin-bottom: 16px;\n  display: block;\n}\n.sc-empty__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #4b5563;\n  margin-bottom: 8px;\n}\n.sc-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n  margin-bottom: 20px;\n}\n.sc-empty__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 50px;\n  border: 1.5px solid #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-empty__btn[_ngcontent-%COMP%]:hover {\n  background: #069b8f;\n  color: #fff;\n}\n.parcours-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 20px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.parcours-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 16px 40px rgba(6, 155, 143, 0.15), 0 6px 16px rgba(0, 0, 0, 0.08);\n  border-color: rgba(6, 155, 143, 0.35);\n}\n.parcours-card--termine[_ngcontent-%COMP%] {\n  border-color: rgba(22, 163, 74, 0.35);\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.parcours-card--termine[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 40px rgba(22, 163, 74, 0.12), 0 6px 16px rgba(0, 0, 0, 0.06);\n  border-color: rgba(22, 163, 74, 0.5);\n}\n.parcours-card--expire[_ngcontent-%COMP%] {\n  border-color: rgba(156, 163, 175, 0.4);\n  opacity: 0.85;\n}\n.parcours-card--expire[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n  border-color: rgba(156, 163, 175, 0.5);\n}\n.parcours-card__banner[_ngcontent-%COMP%] {\n  position: relative;\n  height: 160px;\n  overflow: hidden;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #034d47 0%,\n      #069b8f 60%,\n      #2dd4bf 100%);\n}\n.parcours-card__banner-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  transition: transform 0.35s ease;\n}\n.parcours-card[_ngcontent-%COMP%]:hover   .parcours-card__banner-bg[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.parcours-card__banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.08) 0%,\n      rgba(0, 0, 0, 0.55) 100%);\n}\n.parcours-card__banner-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  left: 16px;\n  font-size: 28px;\n  color: rgba(255, 255, 255, 0.9);\n  z-index: 2;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.parcours-card__banner-termine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 11px;\n  border-radius: 99px;\n  background: rgba(22, 163, 74, 0.92);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.parcours-card__banner-termine[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.parcours-card__banner-expire[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 11px;\n  border-radius: 99px;\n  background: rgba(75, 85, 99, 0.88);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.parcours-card__banner-expire[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.parcours-card__banner-assigned[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 99px;\n  background: rgba(6, 155, 143, 0.88);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.parcours-card__banner-assigned[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.parcours-card__banner-assigned--demande[_ngcontent-%COMP%] {\n  background: rgba(3, 105, 161, 0.88);\n}\n.parcours-card__banner-assigned--termine[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.88);\n}\n.parcours-card__banner-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.parcours-card__body[_ngcontent-%COMP%] {\n  padding: 16px 18px 8px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.parcours-card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.parcours-card__description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  line-height: 1.55;\n  margin: 0 0 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  flex: 1;\n}\n.parcours-card__stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.parcours-card__stat[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 99px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  font-size: 11px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.parcours-card__stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.parcours-card__stat--done[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border-color: rgba(22, 163, 74, 0.25);\n  color: #16a34a;\n}\n.parcours-card__stat--done[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.parcours-card__progression[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.parcours-card__termine[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  background: #dcfce7;\n  border: 1px solid rgba(22, 163, 74, 0.25);\n  color: #16a34a;\n  font-size: 12px;\n  font-weight: 700;\n  width: 100%;\n  justify-content: center;\n}\n.parcours-card__termine[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.parcours-card__prog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.parcours-card__prog-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.parcours-card__prog-pct[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  transition: color 0.3s;\n}\n.parcours-card__prog-bar[_ngcontent-%COMP%] {\n  height: 5px;\n  background: #e5e7eb;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.parcours-card__prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      #047a6f);\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 2px;\n}\n.parcours-card__prog-fill--expire[_ngcontent-%COMP%] {\n  background: #9ca3af;\n}\n.parcours-card__assignation[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  border-top: 1px solid #f3f4f6;\n  margin-bottom: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.parcours-card__assignation-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.parcours-card__assignation-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.parcours-card__assignation-expiry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.parcours-card__assignation-expiry[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.parcours-card__assignation-expiry--permanent[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.parcours-card__assignation-expiry--permanent[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.parcours-card__assignation-expiry--warning[_ngcontent-%COMP%] {\n  color: #d97706;\n  font-weight: 600;\n}\n.parcours-card__assignation-expiry--warning[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.parcours-card__assignation-expiry--expired[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 600;\n}\n.parcours-card__assignation-expiry--expired[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.parcours-card__notes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  padding: 8px 10px;\n  background: #fef3c7;\n  border: 1px solid rgba(217, 119, 6, 0.2);\n  border-radius: 8px;\n  font-size: 11px;\n  color: rgb(157.4466367713, 86.3417040359, 4.3533632287);\n  margin-bottom: 10px;\n}\n.parcours-card__notes[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.parcours-card__notes[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  line-height: 1.5;\n}\n.parcours-card__footer[_ngcontent-%COMP%] {\n  padding: 12px 18px 16px;\n  border-top: 1px solid #f3f4f6;\n}\n.parcours-card__btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 9px 16px;\n  border-radius: 8px;\n  border: none;\n  background: #069b8f;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.25);\n}\n.parcours-card__btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.parcours-card__btn[_ngcontent-%COMP%]:hover {\n  background: #047a6f;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.35);\n}\n.parcours-card__btn--done[_ngcontent-%COMP%] {\n  background: #16a34a;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.25);\n}\n.parcours-card__btn--done[_ngcontent-%COMP%]:hover {\n  background: rgb(17.1481081081, 127.0518918919, 57.68);\n  box-shadow: 0 4px 14px rgba(22, 163, 74, 0.35);\n}\n.parcours-card__btn--expire[_ngcontent-%COMP%] {\n  background: #9ca3af;\n  box-shadow: none;\n}\n.parcours-card__btn--expire[_ngcontent-%COMP%]:hover {\n  background: #4b5563;\n}\n.sc-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.sc-pagination__info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.sc-pagination__info-total[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-weight: 400;\n  margin-left: 4px;\n}\n.sc-pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-pagination__btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-pagination__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-pagination__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.sc-pagination__btn--active[_ngcontent-%COMP%] {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.3);\n}\n.sc-pagination__ellipsis[_ngcontent-%COMP%] {\n  width: 28px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .sc-header__title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .sc-header__subtitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sc-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .sc-filters__search[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .sc-filters__type-btn[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 5px 10px;\n  }\n  .parcours-card__banner[_ngcontent-%COMP%] {\n    height: 140px;\n  }\n  .parcours-card__title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .parcours-card__body[_ngcontent-%COMP%] {\n    padding: 14px 14px 8px;\n  }\n  .parcours-card__footer[_ngcontent-%COMP%] {\n    padding: 10px 14px 14px;\n  }\n  .sc-pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .sc-pagination__btn[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .parcours-card__stat[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 2px 8px;\n  }\n  .pq-kpi-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=parcours-assignes.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParcoursAssignesComponent, [{
    type: Component,
    args: [{ selector: "app-parcours-assignes", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- HEADER -->\r
<div class="sc-header">\r
  <div class="sc-header__left">\r
    <h1 class="sc-header__title">Mes Parcours</h1>\r
    <p class="sc-header__subtitle">Parcours assign\xE9s et demandes accept\xE9es par votre entreprise</p>\r
  </div>\r
  <div class="sc-header__right" *ngIf="!loading && allParcours.length > 0">\r
    <span class="sc-header__count">\r
      <i class="isax isax-routing"></i>\r
      {{ totalItems }} parcours\r
    </span>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- KPI INDICATORS \u2014 m\xEAme style que la page quiz      -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="pq-kpi-grid mb-4" *ngIf="!loading && allParcours.length > 0">\r
\r
  <!-- Total -->\r
  <div class="pq-kpi-card pq-kpi-card--teal" (click)="onFiltreChange('')"\r
       [class.pq-kpi-card--active]="selectedFiltre === ''">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-routing"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalParcours }}</div>\r
      <div class="pq-kpi-card__label">Total assign\xE9s</div>\r
    </div>\r
  </div>\r
\r
  <!-- En cours -->\r
  <div class="pq-kpi-card pq-kpi-card--blue" (click)="onFiltreChange('en_cours')"\r
       [class.pq-kpi-card--active]="selectedFiltre === 'en_cours'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-play-circle"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalEnCours }}</div>\r
      <div class="pq-kpi-card__label">En cours</div>\r
    </div>\r
  </div>\r
\r
  <!-- Termin\xE9s -->\r
  <div class="pq-kpi-card pq-kpi-card--green" (click)="onFiltreChange('termine')"\r
       [class.pq-kpi-card--active]="selectedFiltre === 'termine'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-medal-star"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalTermines }}</div>\r
      <div class="pq-kpi-card__label">Termin\xE9s</div>\r
    </div>\r
  </div>\r
\r
  <!-- Non d\xE9marr\xE9s -->\r
  <div class="pq-kpi-card pq-kpi-card--orange" (click)="onFiltreChange('')"\r
       [class.pq-kpi-card--active]="false">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-flash-circle"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalNonDemarres }}</div>\r
      <div class="pq-kpi-card__label">Non d\xE9marr\xE9s</div>\r
    </div>\r
  </div>\r
\r
  <!-- Assign\xE9s directement -->\r
  <div class="pq-kpi-card pq-kpi-card--purple" (click)="onFiltreChange('assigne')"\r
       [class.pq-kpi-card--active]="selectedFiltre === 'assigne'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-tick-circle"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalAssignes }}</div>\r
      <div class="pq-kpi-card__label">Assign\xE9s</div>\r
    </div>\r
  </div>\r
\r
  <!-- Demandes accept\xE9es -->\r
  <div class="pq-kpi-card pq-kpi-card--indigo" (click)="onFiltreChange('demande')"\r
       [class.pq-kpi-card--active]="selectedFiltre === 'demande'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-send-2"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalDemandes }}</div>\r
      <div class="pq-kpi-card__label">Demandes accept\xE9es</div>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- FILTRES -->\r
<div class="sc-filters" *ngIf="!loading && allParcours.length > 0">\r
  <div class="sc-filters__search">\r
    <i class="isax isax-search-normal sc-filters__search-icon"></i>\r
    <input type="text" class="sc-filters__search-input"\r
           placeholder="Rechercher un parcours..."\r
           [(ngModel)]="searchTerm"\r
           (ngModelChange)="onSearchChange()">\r
    <button *ngIf="searchTerm" class="sc-filters__search-clear"\r
            (click)="searchTerm = ''; onSearchChange()">\r
      <i class="isax isax-close-circle"></i>\r
    </button>\r
  </div>\r
\r
  <div class="sc-filters__types">\r
    <button *ngFor="let f of filtres"\r
            class="sc-filters__type-btn"\r
            [class.sc-filters__type-btn--active]="selectedFiltre === f.value"\r
            (click)="onFiltreChange(f.value)">\r
      <i class="isax me-1" [ngClass]="f.icon"></i>{{ f.label }}\r
      <span class="sc-filters__type-count" *ngIf="f.value === 'assigne'  && totalAssignes > 0">({{ totalAssignes }})</span>\r
      <span class="sc-filters__type-count" *ngIf="f.value === 'demande'  && totalDemandes > 0">({{ totalDemandes }})</span>\r
      <span class="sc-filters__type-count" *ngIf="f.value === 'termine'  && totalTermines > 0">({{ totalTermines }})</span>\r
      <span class="sc-filters__type-count" *ngIf="f.value === 'en_cours' && totalEnCours  > 0">({{ totalEnCours }})</span>\r
      <span class="sc-filters__type-count" *ngIf="f.value === 'expire'   && totalExpires  > 0">({{ totalExpires }})</span>\r
    </button>\r
  </div>\r
\r
  <button class="sc-filters__reset" *ngIf="hasActiveFilters" (click)="clearFilters()">\r
    <i class="isax isax-refresh"></i> R\xE9initialiser\r
  </button>\r
</div>\r
\r
<!-- R\xC9SULTAT FILTRE -->\r
<div class="sc-results-info" *ngIf="!loading && hasActiveFilters && filteredParcours.length > 0">\r
  <i class="isax isax-filter"></i>\r
  <span>{{ totalItems }} r\xE9sultat{{ totalItems > 1 ? 's' : '' }}</span>\r
  <button class="sc-results-info__clear" (click)="clearFilters()">Effacer les filtres</button>\r
</div>\r
\r
<!-- LOADER -->\r
<div class="sc-loading" *ngIf="loading">\r
  <div class="sc-loading__spinner"></div>\r
  <p>Chargement de vos parcours...</p>\r
</div>\r
\r
<!-- ERREUR -->\r
<div class="sc-error" *ngIf="error && !loading">\r
  <i class="isax isax-warning-2 sc-error__icon"></i>\r
  <p>{{ error }}</p>\r
  <button class="sc-error__retry" (click)="loadParcours()">\r
    <i class="isax isax-refresh me-1"></i> R\xE9essayer\r
  </button>\r
</div>\r
\r
<!-- GRILLE PARCOURS -->\r
<div class="row g-4" *ngIf="!loading && displayedParcours.length > 0">\r
  <div class="col-xl-4 col-md-6" *ngFor="let parcours of displayedParcours">\r
    <div class="parcours-card"\r
         [class.parcours-card--termine]="parcours.est_termine"\r
         [class.parcours-card--expire]="parcours.est_expire && !parcours.est_termine"\r
         [class.parcours-card--grayed]="isGrayed(parcours)"\r
         (click)="goToDetail(parcours.id)">\r
\r
      <!-- BANNI\xC8RE -->\r
      <div class="parcours-card__banner">\r
        <div class="parcours-card__banner-bg"\r
             [style.background-image]="parcours.image_couverture ? 'url(' + parcours.image_couverture + ')' : 'none'"\r
             [style.background-color]="!parcours.image_couverture ? getCategorieColor(parcours.categorie) : 'transparent'">\r
        </div>\r
        <div class="parcours-card__banner-overlay"></div>\r
        <i [class]="getCategorieIcon(parcours.categorie) + ' parcours-card__banner-icon'"></i>\r
\r
        <div class="parcours-card__banner-termine" *ngIf="parcours.est_termine">\r
          <i class="isax isax-medal-star me-1"></i>Compl\xE9t\xE9\r
        </div>\r
\r
        <div class="parcours-card__banner-expire" *ngIf="parcours.est_expire && !parcours.est_termine">\r
          <i class="isax isax-calendar-remove me-1"></i>Expir\xE9\r
        </div>\r
\r
        <span class="parcours-card__banner-assigned"\r
              [class.parcours-card__banner-assigned--demande]="parcours.source === 'demande'"\r
              [class.parcours-card__banner-assigned--termine]="parcours.est_termine">\r
          <i class="isax me-1"\r
             [class.isax-medal-star]="parcours.est_termine"\r
             [class.isax-tick-circle]="!parcours.est_termine && parcours.source !== 'demande'"\r
             [class.isax-send-2]="!parcours.est_termine && parcours.source === 'demande'"></i>\r
          {{ parcours.source === 'demande' ? 'Demande accept\xE9e' : 'Assign\xE9' }}\r
        </span>\r
\r
        <span class="parcours-card__banner-badge"\r
              *ngIf="parcours.categorie"\r
              [style.background-color]="getCategorieColor(parcours.categorie)">\r
          {{ parcours.categorie | uppercase }}\r
        </span>\r
      </div>\r
\r
      <!-- BODY -->\r
      <div class="parcours-card__body">\r
        <h5 class="parcours-card__title">{{ parcours.titre }}</h5>\r
        <p class="parcours-card__description">\r
          {{ parcours.description || 'Aucune description disponible' }}\r
        </p>\r
\r
        <div class="parcours-card__stats">\r
          <div class="parcours-card__stat">\r
            <i class="isax isax-book-1"></i>\r
            <span>{{ parcours.nombre_formations }} formation{{ parcours.nombre_formations > 1 ? 's' : '' }}</span>\r
          </div>\r
          <div class="parcours-card__stat" *ngIf="parcours.duree_totale">\r
            <i class="isax isax-clock"></i>\r
            <span>{{ parcours.duree_totale }} h</span>\r
          </div>\r
          <div class="parcours-card__stat parcours-card__stat--done"\r
               *ngIf="parcours.formations_terminees > 0">\r
            <i class="isax isax-tick-circle"></i>\r
            <span>{{ parcours.formations_terminees }}/{{ parcours.total_formations }} termin\xE9es</span>\r
          </div>\r
        </div>\r
\r
        <div class="parcours-card__progression" *ngIf="parcours.total_formations > 0">\r
          <div class="parcours-card__termine" *ngIf="parcours.est_termine">\r
            <i class="isax isax-medal-star me-1"></i>\r
            Parcours Termin\xE9 !\r
          </div>\r
          <div *ngIf="!parcours.est_termine">\r
            <div class="parcours-card__prog-header">\r
              <span class="parcours-card__prog-label">Progression</span>\r
              <span class="parcours-card__prog-pct"\r
                    [style.color]="parcours.est_expire ? '#9ca3af' : (parcours.progression > 0 ? '#069b8f' : '#9ca3af')">\r
                {{ parcours.progression | number:'1.0-0' }}%\r
              </span>\r
            </div>\r
            <div class="parcours-card__prog-bar">\r
              <div class="parcours-card__prog-fill"\r
                   [class.parcours-card__prog-fill--expire]="parcours.est_expire"\r
                   [style.width.%]="parcours.progression">\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="parcours-card__assignation">\r
          <div class="parcours-card__assignation-date" *ngIf="parcours.date_assignation">\r
            <i class="isax me-1"\r
               [class.isax-calendar-add]="parcours.source !== 'demande'"\r
               [class.isax-tick-circle]="parcours.source === 'demande'"></i>\r
            {{ parcours.source === 'demande' ? 'Valid\xE9e le' : 'Assign\xE9 le' }}\r
            {{ parcours.date_assignation | date:'dd/MM/yyyy' }}\r
          </div>\r
          <div class="parcours-card__assignation-expiry parcours-card__assignation-expiry--permanent"\r
               *ngIf="!parcours.date_expiration">\r
            <i class="isax isax-infinity me-1"></i>Acc\xE8s permanent\r
          </div>\r
          <div class="parcours-card__assignation-expiry parcours-card__assignation-expiry--expired"\r
               *ngIf="parcours.est_expire">\r
            <i class="isax isax-calendar-remove me-1"></i>\r
            Expir\xE9 le {{ parcours.date_expiration | date:'dd/MM/yyyy' }}\r
          </div>\r
          <div class="parcours-card__assignation-expiry parcours-card__assignation-expiry--warning"\r
               *ngIf="!parcours.est_expire && isExpiringSoon(parcours.date_expiration)">\r
            <i class="isax isax-warning-2 me-1"></i>\r
            Expire dans {{ getJoursRestants(parcours.date_expiration) }} jour(s) !\r
          </div>\r
          <div class="parcours-card__assignation-expiry"\r
               *ngIf="!parcours.est_expire && parcours.date_expiration && !isExpiringSoon(parcours.date_expiration)">\r
            <i class="isax isax-calendar-remove me-1"></i>\r
            Expire le {{ parcours.date_expiration | date:'dd/MM/yyyy' }}\r
          </div>\r
        </div>\r
\r
        <div class="parcours-card__notes" *ngIf="parcours.notes">\r
          <i class="isax isax-note-text me-1"></i>\r
          <em>{{ parcours.notes }}</em>\r
        </div>\r
\r
        <div class="parcours-card__footer">\r
          <button class="parcours-card__btn"\r
                  [class.parcours-card__btn--done]="parcours.est_termine"\r
                  [class.parcours-card__btn--expire]="parcours.est_expire && !parcours.est_termine">\r
            {{ getCTALabel(parcours) }}\r
            <i class="isax isax-arrow-right-3"></i>\r
          </button>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- EMPTY \u2014 aucun parcours -->\r
<div class="sc-empty" *ngIf="!loading && !error && allParcours.length === 0">\r
  <i class="isax isax-routing sc-empty__icon"></i>\r
  <h6 class="sc-empty__title">Aucun parcours disponible</h6>\r
  <p>Vous n'avez pas encore de parcours assign\xE9s ou de demandes accept\xE9es.</p>\r
</div>\r
\r
<!-- EMPTY \u2014 aucun r\xE9sultat filtre -->\r
<div class="sc-empty" *ngIf="!loading && !error && allParcours.length > 0 && filteredParcours.length === 0">\r
  <i class="isax isax-search-normal sc-empty__icon"></i>\r
  <h6 class="sc-empty__title">Aucun r\xE9sultat</h6>\r
  <p>Aucun parcours ne correspond \xE0 votre recherche.</p>\r
  <button class="sc-empty__btn" (click)="clearFilters()">\r
    <i class="isax isax-refresh me-1"></i> R\xE9initialiser les filtres\r
  </button>\r
</div>\r
\r
<!-- PAGINATION -->\r
<div class="sc-pagination" *ngIf="!loading && totalPages > 1">\r
  <span class="sc-pagination__info">\r
    Page {{ currentPage }} / {{ totalPages }}\r
    <span class="sc-pagination__info-total">({{ totalItems }} parcours)</span>\r
  </span>\r
  <div class="sc-pagination__controls">\r
    <button class="sc-pagination__btn" [disabled]="currentPage === 1" (click)="changePage(1)">\r
      <i class="isax isax-arrow-left-3"></i>\r
    </button>\r
    <button class="sc-pagination__btn" [disabled]="currentPage === 1" (click)="changePage(currentPage - 1)">\r
      <i class="isax isax-arrow-left-2"></i>\r
    </button>\r
    <span class="sc-pagination__ellipsis" *ngIf="pages[0] > 1">\u2026</span>\r
    <button *ngFor="let p of pages"\r
            class="sc-pagination__btn"\r
            [class.sc-pagination__btn--active]="currentPage === p"\r
            (click)="changePage(p)">{{ p }}</button>\r
    <span class="sc-pagination__ellipsis" *ngIf="pages[pages.length - 1] < totalPages">\u2026</span>\r
    <button class="sc-pagination__btn" [disabled]="currentPage === totalPages" (click)="changePage(currentPage + 1)">\r
      <i class="isax isax-arrow-right-2"></i>\r
    </button>\r
    <button class="sc-pagination__btn" [disabled]="currentPage === totalPages" (click)="changePage(totalPages)">\r
      <i class="isax isax-arrow-right-3"></i>\r
    </button>\r
  </div>\r
</div>`, styles: ["/* src/app/features/student/parcours-assignes/parcours-assignes.component.scss */\n.pq-kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  transition: all 0.22s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05);\n}\n.pq-kpi-card--active {\n  border-color: currentColor;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05);\n}\n.pq-kpi-card__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body {\n  min-width: 0;\n}\n.pq-kpi-card__value {\n  font-size: 22px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1;\n}\n.pq-kpi-card__label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal .pq-kpi-card__icon {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green {\n  border-top-color: #16a34a;\n}\n.pq-kpi-card--green .pq-kpi-card__icon {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.pq-kpi-card--green.pq-kpi-card--active {\n  border-color: #16a34a;\n}\n.pq-kpi-card--blue {\n  border-top-color: #3b82f6;\n}\n.pq-kpi-card--blue .pq-kpi-card__icon {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.pq-kpi-card--blue.pq-kpi-card--active {\n  border-color: #3b82f6;\n}\n.pq-kpi-card--orange {\n  border-top-color: #f59e0b;\n}\n.pq-kpi-card--orange .pq-kpi-card__icon {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.pq-kpi-card--orange.pq-kpi-card--active {\n  border-color: #f59e0b;\n}\n.pq-kpi-card--purple {\n  border-top-color: #7c3aed;\n}\n.pq-kpi-card--purple .pq-kpi-card__icon {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.pq-kpi-card--purple.pq-kpi-card--active {\n  border-color: #7c3aed;\n}\n.pq-kpi-card--indigo {\n  border-top-color: #4f46e5;\n}\n.pq-kpi-card--indigo .pq-kpi-card__icon {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.pq-kpi-card--indigo.pq-kpi-card--active {\n  border-color: #4f46e5;\n}\n.sc-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 28px;\n}\n.sc-header__left {\n  flex: 1;\n  min-width: 0;\n}\n.sc-header__title {\n  font-size: 24px;\n  font-weight: 800;\n  color: #111827;\n  margin: 0 0 4px;\n  letter-spacing: -0.3px;\n}\n.sc-header__subtitle {\n  font-size: 13px;\n  color: #9ca3af;\n  margin: 0;\n}\n.sc-header__right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.sc-header__count {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1px solid rgba(6, 155, 143, 0.3);\n  border-radius: 99px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.sc-header__count i {\n  font-size: 15px;\n}\n.sc-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 14px 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sc-filters__search {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n  max-width: 320px;\n}\n.sc-filters__search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 15px;\n  pointer-events: none;\n}\n.sc-filters__search-input {\n  width: 100%;\n  padding: 8px 36px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #f9fafb;\n  outline: none;\n  transition: all 0.22s ease;\n}\n.sc-filters__search-input::placeholder {\n  color: #9ca3af;\n}\n.sc-filters__search-input:focus {\n  border-color: #069b8f;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.08);\n}\n.sc-filters__search-clear {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 2px;\n  font-size: 16px;\n  line-height: 1;\n  transition: color 0.15s;\n}\n.sc-filters__search-clear:hover {\n  color: #dc2626;\n}\n.sc-filters__types {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  flex: 1;\n}\n.sc-filters__type-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 99px;\n  border: 1.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #4b5563;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  white-space: nowrap;\n}\n.sc-filters__type-btn i {\n  font-size: 13px;\n}\n.sc-filters__type-btn:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-filters__type-btn--active {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.3);\n}\n.sc-filters__type-btn--active:hover {\n  background: #047a6f;\n}\n.sc-filters__type-count {\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 3px;\n  opacity: 0.8;\n}\n.sc-filters__reset {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 99px;\n  border: 1.5px solid #dc2626;\n  background: #fff;\n  color: #dc2626;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-filters__reset:hover {\n  background: #fef2f2;\n}\n.sc-results-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #4b5563;\n}\n.sc-results-info i {\n  color: #069b8f;\n  font-size: 14px;\n}\n.sc-results-info__clear {\n  background: none;\n  border: none;\n  color: #069b8f;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: underline;\n  padding: 0;\n}\n.sc-results-info__clear:hover {\n  color: #047a6f;\n}\n.sc-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n  color: #9ca3af;\n}\n.sc-loading__spinner {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: sc-spin 0.7s linear infinite;\n}\n.sc-loading p {\n  margin-top: 16px;\n  font-size: 13px;\n}\n@keyframes sc-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sc-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.sc-error__icon {\n  font-size: 3rem;\n  color: #dc2626;\n  opacity: 0.5;\n  margin-bottom: 12px;\n  display: block;\n}\n.sc-error p {\n  font-size: 14px;\n  color: #4b5563;\n  margin-bottom: 16px;\n}\n.sc-error__retry {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 50px;\n  border: 1.5px solid #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-error__retry:hover {\n  background: #069b8f;\n  color: #fff;\n}\n.sc-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 72px 20px;\n  text-align: center;\n}\n.sc-empty__icon {\n  font-size: 3.5rem;\n  color: rgba(6, 155, 143, 0.2);\n  margin-bottom: 16px;\n  display: block;\n}\n.sc-empty__title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #4b5563;\n  margin-bottom: 8px;\n}\n.sc-empty p {\n  font-size: 13px;\n  color: #9ca3af;\n  margin-bottom: 20px;\n}\n.sc-empty__btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 50px;\n  border: 1.5px solid #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-empty__btn:hover {\n  background: #069b8f;\n  color: #fff;\n}\n.parcours-card {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 20px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.parcours-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 16px 40px rgba(6, 155, 143, 0.15), 0 6px 16px rgba(0, 0, 0, 0.08);\n  border-color: rgba(6, 155, 143, 0.35);\n}\n.parcours-card--termine {\n  border-color: rgba(22, 163, 74, 0.35);\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.parcours-card--termine:hover {\n  box-shadow: 0 16px 40px rgba(22, 163, 74, 0.12), 0 6px 16px rgba(0, 0, 0, 0.06);\n  border-color: rgba(22, 163, 74, 0.5);\n}\n.parcours-card--expire {\n  border-color: rgba(156, 163, 175, 0.4);\n  opacity: 0.85;\n}\n.parcours-card--expire:hover {\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n  border-color: rgba(156, 163, 175, 0.5);\n}\n.parcours-card__banner {\n  position: relative;\n  height: 160px;\n  overflow: hidden;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #034d47 0%,\n      #069b8f 60%,\n      #2dd4bf 100%);\n}\n.parcours-card__banner-bg {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  transition: transform 0.35s ease;\n}\n.parcours-card:hover .parcours-card__banner-bg {\n  transform: scale(1.05);\n}\n.parcours-card__banner-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.08) 0%,\n      rgba(0, 0, 0, 0.55) 100%);\n}\n.parcours-card__banner-icon {\n  position: absolute;\n  bottom: 14px;\n  left: 16px;\n  font-size: 28px;\n  color: rgba(255, 255, 255, 0.9);\n  z-index: 2;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.parcours-card__banner-termine {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 11px;\n  border-radius: 99px;\n  background: rgba(22, 163, 74, 0.92);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.parcours-card__banner-termine i {\n  font-size: 12px;\n}\n.parcours-card__banner-expire {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 11px;\n  border-radius: 99px;\n  background: rgba(75, 85, 99, 0.88);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.parcours-card__banner-expire i {\n  font-size: 12px;\n}\n.parcours-card__banner-assigned {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 99px;\n  background: rgba(6, 155, 143, 0.88);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.parcours-card__banner-assigned i {\n  font-size: 11px;\n}\n.parcours-card__banner-assigned--demande {\n  background: rgba(3, 105, 161, 0.88);\n}\n.parcours-card__banner-assigned--termine {\n  background: rgba(22, 163, 74, 0.88);\n}\n.parcours-card__banner-badge {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.parcours-card__body {\n  padding: 16px 18px 8px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.parcours-card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.parcours-card__description {\n  font-size: 12px;\n  color: #9ca3af;\n  line-height: 1.55;\n  margin: 0 0 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  flex: 1;\n}\n.parcours-card__stats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.parcours-card__stat {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 99px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  font-size: 11px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.parcours-card__stat i {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.parcours-card__stat--done {\n  background: #dcfce7;\n  border-color: rgba(22, 163, 74, 0.25);\n  color: #16a34a;\n}\n.parcours-card__stat--done i {\n  color: #16a34a;\n}\n.parcours-card__progression {\n  margin-bottom: 12px;\n}\n.parcours-card__termine {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  background: #dcfce7;\n  border: 1px solid rgba(22, 163, 74, 0.25);\n  color: #16a34a;\n  font-size: 12px;\n  font-weight: 700;\n  width: 100%;\n  justify-content: center;\n}\n.parcours-card__termine i {\n  font-size: 14px;\n}\n.parcours-card__prog-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.parcours-card__prog-label {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.parcours-card__prog-pct {\n  font-size: 12px;\n  font-weight: 700;\n  transition: color 0.3s;\n}\n.parcours-card__prog-bar {\n  height: 5px;\n  background: #e5e7eb;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.parcours-card__prog-fill {\n  height: 100%;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      #047a6f);\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 2px;\n}\n.parcours-card__prog-fill--expire {\n  background: #9ca3af;\n}\n.parcours-card__assignation {\n  padding-top: 10px;\n  border-top: 1px solid #f3f4f6;\n  margin-bottom: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.parcours-card__assignation-date {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.parcours-card__assignation-date i {\n  font-size: 12px;\n}\n.parcours-card__assignation-expiry {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.parcours-card__assignation-expiry i {\n  font-size: 12px;\n}\n.parcours-card__assignation-expiry--permanent {\n  color: #16a34a;\n}\n.parcours-card__assignation-expiry--permanent i {\n  color: #16a34a;\n}\n.parcours-card__assignation-expiry--warning {\n  color: #d97706;\n  font-weight: 600;\n}\n.parcours-card__assignation-expiry--warning i {\n  color: #d97706;\n}\n.parcours-card__assignation-expiry--expired {\n  color: #dc2626;\n  font-weight: 600;\n}\n.parcours-card__assignation-expiry--expired i {\n  color: #dc2626;\n}\n.parcours-card__notes {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  padding: 8px 10px;\n  background: #fef3c7;\n  border: 1px solid rgba(217, 119, 6, 0.2);\n  border-radius: 8px;\n  font-size: 11px;\n  color: rgb(157.4466367713, 86.3417040359, 4.3533632287);\n  margin-bottom: 10px;\n}\n.parcours-card__notes i {\n  font-size: 13px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.parcours-card__notes em {\n  font-style: italic;\n  line-height: 1.5;\n}\n.parcours-card__footer {\n  padding: 12px 18px 16px;\n  border-top: 1px solid #f3f4f6;\n}\n.parcours-card__btn {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 9px 16px;\n  border-radius: 8px;\n  border: none;\n  background: #069b8f;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.25);\n}\n.parcours-card__btn i {\n  font-size: 14px;\n}\n.parcours-card__btn:hover {\n  background: #047a6f;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.35);\n}\n.parcours-card__btn--done {\n  background: #16a34a;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.25);\n}\n.parcours-card__btn--done:hover {\n  background: rgb(17.1481081081, 127.0518918919, 57.68);\n  box-shadow: 0 4px 14px rgba(22, 163, 74, 0.35);\n}\n.parcours-card__btn--expire {\n  background: #9ca3af;\n  box-shadow: none;\n}\n.parcours-card__btn--expire:hover {\n  background: #4b5563;\n}\n.sc-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.sc-pagination__info {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.sc-pagination__info-total {\n  color: #9ca3af;\n  font-weight: 400;\n  margin-left: 4px;\n}\n.sc-pagination__controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-pagination__btn {\n  width: 34px;\n  height: 34px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-pagination__btn:hover:not(:disabled) {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-pagination__btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.sc-pagination__btn--active {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.3);\n}\n.sc-pagination__ellipsis {\n  width: 28px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .sc-header__title {\n    font-size: 20px;\n  }\n  .sc-header__subtitle {\n    display: none;\n  }\n  .sc-filters {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .sc-filters__search {\n    max-width: 100%;\n  }\n  .sc-filters__type-btn {\n    font-size: 11px;\n    padding: 5px 10px;\n  }\n  .parcours-card__banner {\n    height: 140px;\n  }\n  .parcours-card__title {\n    font-size: 14px;\n  }\n  .parcours-card__body {\n    padding: 14px 14px 8px;\n  }\n  .parcours-card__footer {\n    padding: 10px 14px 14px;\n  }\n  .sc-pagination {\n    flex-direction: column;\n    align-items: center;\n  }\n  .sc-pagination__btn {\n    width: 30px;\n    height: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .parcours-card__stat {\n    font-size: 10px;\n    padding: 2px 8px;\n  }\n  .pq-kpi-card {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=parcours-assignes.component.css.map */\n"] }]
  }], () => [{ type: FormationsService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParcoursAssignesComponent, { className: "ParcoursAssignesComponent", filePath: "src/app/features/student/parcours-assignes/parcours-assignes.component.ts", lineNumber: 14 });
})();
export {
  ParcoursAssignesComponent
};
//# sourceMappingURL=chunk-EIRT44DL.js.map
