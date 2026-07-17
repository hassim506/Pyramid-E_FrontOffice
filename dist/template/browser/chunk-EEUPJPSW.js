import {
  FormationService
} from "./chunk-R5DFAXQH.js";
import "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IKOSZIEY.js";
import {
  NavigationEnd,
  Router
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  filter,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/student/mes-catalogues/mes-catalogues.component.ts
function MesCataloguesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275element(2, "i", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.totalItems, " catalogue", ctx_r0.totalItems > 1 ? "s" : "", " ");
  }
}
function MesCataloguesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_7_Template_div_click_1_listener() {
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
    \u0275\u0275text(8, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_7_Template_div_click_9_listener() {
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
    \u0275\u0275listener("click", function MesCataloguesComponent_div_7_Template_div_click_17_listener() {
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
    \u0275\u0275listener("click", function MesCataloguesComponent_div_7_Template_div_click_25_listener() {
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
    \u0275\u0275listener("click", function MesCataloguesComponent_div_7_Template_div_click_33_listener() {
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
    \u0275\u0275listener("click", function MesCataloguesComponent_div_7_Template_div_click_41_listener() {
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
    \u0275\u0275textInterpolate(ctx_r0.totalCatalogues);
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
function MesCataloguesComponent_div_8_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_8_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.searchTerm = "";
      return \u0275\u0275resetView(ctx_r0.onSearchChange());
    });
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementEnd();
  }
}
function MesCataloguesComponent_div_8_button_6_span_3_Template(rf, ctx) {
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
function MesCataloguesComponent_div_8_button_6_span_4_Template(rf, ctx) {
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
function MesCataloguesComponent_div_8_button_6_span_5_Template(rf, ctx) {
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
function MesCataloguesComponent_div_8_button_6_span_6_Template(rf, ctx) {
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
function MesCataloguesComponent_div_8_button_6_span_7_Template(rf, ctx) {
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
function MesCataloguesComponent_div_8_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_8_button_6_Template_button_click_0_listener() {
      const f_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFiltreChange(f_r6.value));
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275template(3, MesCataloguesComponent_div_8_button_6_span_3_Template, 2, 1, "span", 44)(4, MesCataloguesComponent_div_8_button_6_span_4_Template, 2, 1, "span", 44)(5, MesCataloguesComponent_div_8_button_6_span_5_Template, 2, 1, "span", 44)(6, MesCataloguesComponent_div_8_button_6_span_6_Template, 2, 1, "span", 44)(7, MesCataloguesComponent_div_8_button_6_span_7_Template, 2, 1, "span", 44);
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
function MesCataloguesComponent_div_8_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_8_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2, " R\xE9initialiser ");
    \u0275\u0275elementEnd();
  }
}
function MesCataloguesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275elementStart(3, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function MesCataloguesComponent_div_8_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchTerm, $event) || (ctx_r0.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function MesCataloguesComponent_div_8_Template_input_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MesCataloguesComponent_div_8_button_4_Template, 2, 0, "button", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275template(6, MesCataloguesComponent_div_8_button_6_Template, 8, 9, "button", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MesCataloguesComponent_div_8_button_7_Template, 3, 0, "button", 39);
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
function MesCataloguesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 50);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_9_Template_button_click_4_listener() {
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
function MesCataloguesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Chargement de vos catalogues...");
    \u0275\u0275elementEnd()();
  }
}
function MesCataloguesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 55);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadCatalogues());
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
function MesCataloguesComponent_div_12_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275text(2, "Compl\xE9t\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function MesCataloguesComponent_div_12_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275text(2, "Expir\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function MesCataloguesComponent_div_12_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const catalogue_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", catalogue_r11.duree_totale, " h");
  }
}
function MesCataloguesComponent_div_12_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const catalogue_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", catalogue_r11.formations_terminees, "/", catalogue_r11.total_formations, " termin\xE9es");
  }
}
function MesCataloguesComponent_div_12_div_1_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275text(2, " Catalogue compl\xE9t\xE9 ! ");
    \u0275\u0275elementEnd();
  }
}
function MesCataloguesComponent_div_12_div_1_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 97)(2, "span", 98);
    \u0275\u0275text(3, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 99);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 100);
    \u0275\u0275element(8, "div", 101);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const catalogue_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r0.isExpire(catalogue_r11) ? "#9ca3af" : catalogue_r11.progression > 0 ? "#069b8f" : "#9ca3af");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 7, catalogue_r11.progression, "1.0-0"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", catalogue_r11.progression, "%");
    \u0275\u0275classProp("catalogue-card__prog-fill--expire", ctx_r0.isExpire(catalogue_r11));
  }
}
function MesCataloguesComponent_div_12_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275template(1, MesCataloguesComponent_div_12_div_1_div_25_div_1_Template, 3, 0, "div", 95)(2, MesCataloguesComponent_div_12_div_1_div_25_div_2_Template, 9, 10, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const catalogue_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !catalogue_r11.est_termine);
  }
}
function MesCataloguesComponent_div_12_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const catalogue_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-calendar-add", catalogue_r11.source !== "demande")("isax-tick-circle", catalogue_r11.source === "demande");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", catalogue_r11.source === "demande" ? "Valid\xE9e le" : "Assign\xE9 le", " ", \u0275\u0275pipeBind2(3, 6, catalogue_r11.date_assignation, "dd/MM/yyyy"), " ");
  }
}
function MesCataloguesComponent_div_12_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275text(2, "Acc\xE8s permanent ");
    \u0275\u0275elementEnd();
  }
}
function MesCataloguesComponent_div_12_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const catalogue_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Expir\xE9 le ", \u0275\u0275pipeBind2(3, 1, catalogue_r11.date_expiration, "dd/MM/yyyy"), " ");
  }
}
function MesCataloguesComponent_div_12_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const catalogue_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Expire dans ", ctx_r0.getJoursRestants(catalogue_r11.date_expiration), " jour(s) ! ");
  }
}
function MesCataloguesComponent_div_12_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const catalogue_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Expire le ", \u0275\u0275pipeBind2(3, 1, catalogue_r11.date_expiration, "dd/MM/yyyy"), " ");
  }
}
function MesCataloguesComponent_div_12_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275element(1, "i", 110);
    \u0275\u0275elementStart(2, "em");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const catalogue_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(catalogue_r11.notes);
  }
}
function MesCataloguesComponent_div_12_div_1_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Revoir le catalogue");
    \u0275\u0275elementContainerEnd();
  }
}
function MesCataloguesComponent_div_12_div_1_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Consulter");
    \u0275\u0275elementContainerEnd();
  }
}
function MesCataloguesComponent_div_12_div_1_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Acc\xE9der aux formations");
    \u0275\u0275elementContainerEnd();
  }
}
function MesCataloguesComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_12_div_1_Template_div_click_1_listener() {
      const catalogue_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToCatalogue(catalogue_r11.id));
    });
    \u0275\u0275elementStart(2, "div", 61);
    \u0275\u0275element(3, "div", 62)(4, "div", 63)(5, "i");
    \u0275\u0275template(6, MesCataloguesComponent_div_12_div_1_div_6_Template, 3, 0, "div", 64)(7, MesCataloguesComponent_div_12_div_1_div_7_Template, 3, 0, "div", 65);
    \u0275\u0275elementStart(8, "span", 66);
    \u0275\u0275element(9, "i", 67);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 68);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 69)(14, "h5", 70);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 71);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 72)(19, "div", 73);
    \u0275\u0275element(20, "i", 15);
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, MesCataloguesComponent_div_12_div_1_div_23_Template, 4, 1, "div", 74)(24, MesCataloguesComponent_div_12_div_1_div_24_Template, 4, 2, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, MesCataloguesComponent_div_12_div_1_div_25_Template, 3, 2, "div", 76);
    \u0275\u0275elementStart(26, "div", 77);
    \u0275\u0275template(27, MesCataloguesComponent_div_12_div_1_div_27_Template, 4, 9, "div", 78)(28, MesCataloguesComponent_div_12_div_1_div_28_Template, 3, 0, "div", 79)(29, MesCataloguesComponent_div_12_div_1_div_29_Template, 4, 4, "div", 80)(30, MesCataloguesComponent_div_12_div_1_div_30_Template, 3, 1, "div", 81)(31, MesCataloguesComponent_div_12_div_1_div_31_Template, 4, 4, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, MesCataloguesComponent_div_12_div_1_div_32_Template, 4, 1, "div", 83);
    \u0275\u0275elementStart(33, "div", 84)(34, "button", 85);
    \u0275\u0275template(35, MesCataloguesComponent_div_12_div_1_ng_container_35_Template, 2, 0, "ng-container", 86)(36, MesCataloguesComponent_div_12_div_1_ng_container_36_Template, 2, 0, "ng-container", 86)(37, MesCataloguesComponent_div_12_div_1_ng_container_37_Template, 2, 0, "ng-container", 86);
    \u0275\u0275element(38, "i", 87);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const catalogue_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("catalogue-card--termine", catalogue_r11.est_termine)("catalogue-card--expire", ctx_r0.isExpire(catalogue_r11) && !catalogue_r11.est_termine)("catalogue-card--grayed", catalogue_r11.est_termine || ctx_r0.isExpire(catalogue_r11));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", catalogue_r11.image_couverture ? "url(" + catalogue_r11.image_couverture + ")" : "none")("background-color", !catalogue_r11.image_couverture ? catalogue_r11.couleur || "#069b8f" : "transparent");
    \u0275\u0275advance(2);
    \u0275\u0275classMap((catalogue_r11.icone || "isax isax-book-1") + " catalogue-card__banner-icon");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isExpire(catalogue_r11) && !catalogue_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275classProp("catalogue-card__banner-assigned--demande", catalogue_r11.source === "demande")("catalogue-card__banner-assigned--termine", catalogue_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-medal-star", catalogue_r11.est_termine)("isax-tick-circle", !catalogue_r11.est_termine && catalogue_r11.source !== "demande")("isax-send-2", !catalogue_r11.est_termine && catalogue_r11.source === "demande");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", catalogue_r11.source === "demande" ? "Demande accept\xE9e" : "Assign\xE9", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.getTypeColor(catalogue_r11.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTypeLabel(catalogue_r11.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(catalogue_r11.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", catalogue_r11.short_description || catalogue_r11.description || "Aucune description disponible", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", catalogue_r11.nombre_formations, " formation", catalogue_r11.nombre_formations > 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r11.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r11.formations_terminees > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r11.total_formations > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", catalogue_r11.date_assignation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !catalogue_r11.date_expiration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isExpire(catalogue_r11));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isExpire(catalogue_r11) && ctx_r0.isExpiringSoon(catalogue_r11.date_expiration));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isExpire(catalogue_r11) && catalogue_r11.date_expiration && !ctx_r0.isExpiringSoon(catalogue_r11.date_expiration));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r11.notes);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("catalogue-card__btn--done", catalogue_r11.est_termine)("catalogue-card__btn--expire", ctx_r0.isExpire(catalogue_r11) && !catalogue_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isExpire(catalogue_r11) && !catalogue_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !catalogue_r11.est_termine && !ctx_r0.isExpire(catalogue_r11));
  }
}
function MesCataloguesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275template(1, MesCataloguesComponent_div_12_div_1_Template, 39, 48, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.displayedCatalogues);
  }
}
function MesCataloguesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275elementStart(2, "h6", 113);
    \u0275\u0275text(3, "Aucun catalogue disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Vous n'avez pas encore de catalogues assign\xE9s ou de demandes accept\xE9es.");
    \u0275\u0275elementEnd()();
  }
}
function MesCataloguesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "i", 114);
    \u0275\u0275elementStart(2, "h6", 113);
    \u0275\u0275text(3, "Aucun r\xE9sultat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Aucun catalogue ne correspond \xE0 votre recherche.");
    \u0275\u0275elementEnd()();
  }
}
function MesCataloguesComponent_div_15_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function MesCataloguesComponent_div_15_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 126);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_15_button_11_Template_button_click_0_listener() {
      const p_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changePage(p_r14));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("sc-pagination__btn--active", ctx_r0.currentPage === p_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r14);
  }
}
function MesCataloguesComponent_div_15_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function MesCataloguesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "span", 116);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 117);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 118)(6, "button", 119);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(1));
    });
    \u0275\u0275element(7, "i", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 119);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_15_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(9, "i", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MesCataloguesComponent_div_15_span_10_Template, 2, 0, "span", 122)(11, MesCataloguesComponent_div_15_button_11_Template, 2, 3, "button", 123)(12, MesCataloguesComponent_div_15_span_12_Template, 2, 0, "span", 122);
    \u0275\u0275elementStart(13, "button", 119);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_15_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage + 1));
    });
    \u0275\u0275element(14, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 119);
    \u0275\u0275listener("click", function MesCataloguesComponent_div_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r12);
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
    \u0275\u0275textInterpolate1("(", ctx_r0.totalItems, " catalogues)");
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
var MesCataloguesComponent = class _MesCataloguesComponent {
  formationsService;
  router;
  allCatalogues = [];
  filteredCatalogues = [];
  displayedCatalogues = [];
  loading = false;
  error = "";
  searchTerm = "";
  selectedType = "";
  selectedFiltre = "";
  currentPage = 1;
  itemsPerPage = 9;
  totalItems = 0;
  totalPages = 0;
  pages = [];
  types = [
    { value: "", label: "Tous les types" },
    { value: "general", label: "G\xE9n\xE9ral" },
    { value: "specialise", label: "Sp\xE9cialis\xE9" },
    { value: "certifiant", label: "Certifiant" },
    { value: "technique", label: "Technique" },
    { value: "management", label: "Management" },
    { value: "soft_skills", label: "Soft Skills" }
  ];
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
  _dejaCharge = false;
  routerSub;
  _visibilityHandler = () => {
    if (document.visibilityState === "visible") {
      this._refreshProgressionsSilencieux();
    }
  };
  constructor(formationsService, router) {
    this.formationsService = formationsService;
    this.router = router;
  }
  ngOnInit() {
    this.loadCatalogues();
    this.routerSub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const url = e.urlAfterRedirects || e.url;
      if (this._dejaCharge && url.includes("mes-catalogues")) {
        this._refreshProgressionsSilencieux();
      }
      this._dejaCharge = true;
    });
    document.addEventListener("visibilitychange", this._visibilityHandler);
  }
  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    document.removeEventListener("visibilitychange", this._visibilityHandler);
  }
  loadCatalogues() {
    this.loading = true;
    this.error = "";
    this.formationsService.getMesCataloguesAssignes().subscribe({
      next: (res) => {
        this.allCatalogues = this._normaliserCatalogues(res.catalogues ?? []);
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger vos catalogues.";
        this.loading = false;
      }
    });
  }
  _refreshProgressionsSilencieux() {
    this.formationsService.getMesCataloguesAssignes().subscribe({
      next: (res) => {
        const nouveaux = this._normaliserCatalogues(res.catalogues ?? []);
        this.allCatalogues = this.allCatalogues.map((ancien) => {
          const frais = nouveaux.find((n) => n.id === ancien.id);
          if (!frais)
            return ancien;
          return __spreadProps(__spreadValues({}, ancien), {
            progression: frais.progression,
            formations_terminees: frais.formations_terminees,
            total_formations: frais.total_formations,
            est_termine: frais.est_termine
          });
        });
        this.applyFilters();
      },
      error: () => {
      }
    });
  }
  _normaliserCatalogues(liste) {
    return liste.map((c) => __spreadProps(__spreadValues({}, c), {
      est_termine: c.est_termine || c.total_formations > 0 && c.formations_terminees >= c.total_formations
    }));
  }
  isExpire(catalogue) {
    if (catalogue.est_termine)
      return false;
    if (!catalogue.date_expiration)
      return false;
    return new Date(catalogue.date_expiration) < /* @__PURE__ */ new Date();
  }
  isExpiringSoon(dateExpiration) {
    if (!dateExpiration)
      return false;
    const diff = new Date(dateExpiration).getTime() - Date.now();
    return diff > 0 && diff < 7 * 24 * 60 * 60 * 1e3;
  }
  getJoursRestants(dateExpiration) {
    if (!dateExpiration)
      return 0;
    return Math.ceil((new Date(dateExpiration).getTime() - Date.now()) / (1e3 * 60 * 60 * 24));
  }
  onSearchChange() {
    this.currentPage = 1;
    this.applyFilters();
  }
  onTypeChange(type) {
    this.selectedType = type;
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
    this.selectedType = "";
    this.selectedFiltre = "";
    this.currentPage = 1;
    this.applyFilters();
  }
  get hasActiveFilters() {
    return !!this.searchTerm || !!this.selectedType || !!this.selectedFiltre;
  }
  applyFilters() {
    let result = [...this.allCatalogues];
    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter((c) => c.titre?.toLowerCase().includes(q) || c.description?.toLowerCase().includes(q) || c.short_description?.toLowerCase().includes(q));
    }
    if (this.selectedType) {
      result = result.filter((c) => c.type === this.selectedType);
    }
    switch (this.selectedFiltre) {
      case "assigne":
        result = result.filter((c) => c.source === "assigne");
        break;
      case "demande":
        result = result.filter((c) => c.source === "demande");
        break;
      case "termine":
        result = result.filter((c) => c.est_termine);
        break;
      case "en_cours":
        result = result.filter((c) => !c.est_termine && !this.isExpire(c) && c.progression > 0);
        break;
      case "permanent":
        result = result.filter((c) => !c.date_expiration);
        break;
      case "expire_bientot":
        result = result.filter((c) => this.isExpiringSoon(c.date_expiration));
        break;
      case "expire":
        result = result.filter((c) => this.isExpire(c));
        break;
    }
    this.filteredCatalogues = result;
    this.totalItems = result.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.buildPageNumbers();
    this.updateDisplayed();
  }
  get totalCatalogues() {
    return this.allCatalogues.length;
  }
  get totalAssignes() {
    return this.allCatalogues.filter((c) => c.source === "assigne").length;
  }
  get totalDemandes() {
    return this.allCatalogues.filter((c) => c.source === "demande").length;
  }
  get totalTermines() {
    return this.allCatalogues.filter((c) => c.est_termine).length;
  }
  get totalEnCours() {
    return this.allCatalogues.filter((c) => !c.est_termine && !this.isExpire(c) && c.progression > 0).length;
  }
  get totalNonDemarres() {
    return this.allCatalogues.filter((c) => !c.est_termine && !this.isExpire(c) && c.progression === 0).length;
  }
  get totalExpires() {
    return this.allCatalogues.filter((c) => this.isExpire(c)).length;
  }
  changePage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.buildPageNumbers();
    this.updateDisplayed();
  }
  updateDisplayed() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedCatalogues = this.filteredCatalogues.slice(start, start + this.itemsPerPage);
  }
  buildPageNumbers() {
    const delta = 2;
    const start = Math.max(1, this.currentPage - delta);
    const end = Math.min(this.totalPages, this.currentPage + delta);
    this.pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  goToCatalogue(id) {
    this.router.navigate(["/student/mes-catalogues", id]);
  }
  getTypeColor(type) {
    const colors = {
      certifiant: "#7c3aed",
      technique: "#0369a1",
      management: "#b45309",
      soft_skills: "#0d9488",
      specialise: "#6d28d9",
      general: "#374151"
    };
    return colors[type] ?? "#374151";
  }
  getTypeLabel(type) {
    const labels = {
      general: "G\xE9n\xE9ral",
      specialise: "Sp\xE9cialis\xE9",
      certifiant: "Certifiant",
      technique: "Technique",
      management: "Management",
      soft_skills: "Soft Skills"
    };
    return labels[type] ?? type ?? "Catalogue";
  }
  static \u0275fac = function MesCataloguesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MesCataloguesComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MesCataloguesComponent, selectors: [["app-mes-catalogues"]], decls: 16, vars: 10, consts: [[1, "sc-header"], [1, "sc-header__left"], [1, "sc-header__title"], [1, "sc-header__subtitle"], ["class", "sc-header__right", 4, "ngIf"], ["class", "pq-kpi-grid mb-4", 4, "ngIf"], ["class", "sc-filters", 4, "ngIf"], ["class", "sc-results-info", 4, "ngIf"], ["class", "qq-loading", 4, "ngIf"], ["class", "sc-error", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["class", "sc-empty", 4, "ngIf"], ["class", "sc-pagination", 4, "ngIf"], [1, "sc-header__right"], [1, "sc-header__count"], [1, "isax", "isax-book-1"], [1, "pq-kpi-grid", "mb-4"], [1, "pq-kpi-card", "pq-kpi-card--teal", 3, "click"], [1, "pq-kpi-card__icon"], [1, "pq-kpi-card__body"], [1, "pq-kpi-card__value"], [1, "pq-kpi-card__label"], [1, "pq-kpi-card", "pq-kpi-card--blue", 3, "click"], [1, "isax", "isax-play-circle"], [1, "pq-kpi-card", "pq-kpi-card--green", 3, "click"], [1, "isax", "isax-medal-star"], [1, "pq-kpi-card", "pq-kpi-card--orange", 3, "click"], [1, "isax", "isax-flash-circle"], [1, "pq-kpi-card", "pq-kpi-card--purple", 3, "click"], [1, "isax", "isax-tick-circle"], [1, "pq-kpi-card", "pq-kpi-card--indigo", 3, "click"], [1, "isax", "isax-send-2"], [1, "sc-filters"], [1, "sc-filters__search"], [1, "isax", "isax-search-normal", "sc-filters__search-icon"], ["type", "text", "placeholder", "Rechercher un catalogue...", 1, "sc-filters__search-input", 3, "ngModelChange", "ngModel"], ["class", "sc-filters__search-clear", 3, "click", 4, "ngIf"], [1, "sc-filters__types"], ["class", "sc-filters__type-btn", 3, "sc-filters__type-btn--active", "click", 4, "ngFor", "ngForOf"], ["class", "sc-filters__reset", 3, "click", 4, "ngIf"], [1, "sc-filters__search-clear", 3, "click"], [1, "isax", "isax-close-circle"], [1, "sc-filters__type-btn", 3, "click"], [1, "isax", "me-1", 3, "ngClass"], ["class", "sc-filters__type-count", 4, "ngIf"], [1, "sc-filters__type-count"], [1, "sc-filters__reset", 3, "click"], [1, "isax", "isax-refresh"], [1, "sc-results-info"], [1, "isax", "isax-filter"], [1, "sc-results-info__clear", 3, "click"], [1, "qq-loading"], [1, "qq-loading__ring"], [1, "sc-error"], [1, "isax", "isax-warning-2", "sc-error__icon"], [1, "sc-error__retry", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [1, "row", "g-4"], ["class", "col-xl-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "col-md-6"], [1, "catalogue-card", 3, "click"], [1, "catalogue-card__banner"], [1, "catalogue-card__banner-bg"], [1, "catalogue-card__banner-overlay"], ["class", "catalogue-card__banner-termine", 4, "ngIf"], ["class", "catalogue-card__banner-expire", 4, "ngIf"], [1, "catalogue-card__banner-assigned"], [1, "isax", "me-1"], [1, "catalogue-card__banner-badge"], [1, "catalogue-card__body"], [1, "catalogue-card__title"], [1, "catalogue-card__description"], [1, "catalogue-card__stats"], [1, "catalogue-card__stat"], ["class", "catalogue-card__stat", 4, "ngIf"], ["class", "catalogue-card__stat catalogue-card__stat--done", 4, "ngIf"], ["class", "catalogue-card__progression", 4, "ngIf"], [1, "catalogue-card__assignation"], ["class", "catalogue-card__assignation-date", 4, "ngIf"], ["class", "catalogue-card__assignation-expiry catalogue-card__assignation-expiry--permanent", 4, "ngIf"], ["class", "catalogue-card__assignation-expiry catalogue-card__assignation-expiry--expired", 4, "ngIf"], ["class", "catalogue-card__assignation-expiry catalogue-card__assignation-expiry--warning", 4, "ngIf"], ["class", "catalogue-card__assignation-expiry", 4, "ngIf"], ["class", "catalogue-card__notes", 4, "ngIf"], [1, "catalogue-card__footer"], [1, "catalogue-card__btn"], [4, "ngIf"], [1, "isax", "isax-arrow-right-3"], [1, "catalogue-card__banner-termine"], [1, "isax", "isax-medal-star", "me-1"], [1, "catalogue-card__banner-expire"], [1, "isax", "isax-calendar-remove", "me-1"], [1, "isax", "isax-clock"], [1, "catalogue-card__stat", "catalogue-card__stat--done"], [1, "catalogue-card__progression"], ["class", "catalogue-card__termine", 4, "ngIf"], [1, "catalogue-card__termine"], [1, "catalogue-card__prog-header"], [1, "catalogue-card__prog-label"], [1, "catalogue-card__prog-pct"], [1, "catalogue-card__prog-bar"], [1, "catalogue-card__prog-fill"], [1, "catalogue-card__assignation-date"], [1, "catalogue-card__assignation-expiry", "catalogue-card__assignation-expiry--permanent"], [1, "isax", "isax-infinity", "me-1"], [1, "catalogue-card__assignation-expiry", "catalogue-card__assignation-expiry--expired"], [1, "catalogue-card__assignation-expiry", "catalogue-card__assignation-expiry--warning"], [1, "isax", "isax-warning-2", "me-1"], [1, "catalogue-card__assignation-expiry"], [1, "catalogue-card__notes"], [1, "isax", "isax-note-text", "me-1"], [1, "sc-empty"], [1, "isax", "isax-book-1", "sc-empty__icon"], [1, "sc-empty__title"], [1, "isax", "isax-search-normal", "sc-empty__icon"], [1, "sc-pagination"], [1, "sc-pagination__info"], [1, "sc-pagination__info-total"], [1, "sc-pagination__controls"], [1, "sc-pagination__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-3"], [1, "isax", "isax-arrow-left-2"], ["class", "sc-pagination__ellipsis", 4, "ngIf"], ["class", "sc-pagination__btn", 3, "sc-pagination__btn--active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-2"], [1, "sc-pagination__ellipsis"], [1, "sc-pagination__btn", 3, "click"]], template: function MesCataloguesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Mes Catalogues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Catalogues assign\xE9s et demandes accept\xE9es par votre entreprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, MesCataloguesComponent_div_6_Template, 4, 2, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, MesCataloguesComponent_div_7_Template, 49, 18, "div", 5)(8, MesCataloguesComponent_div_8_Template, 8, 4, "div", 6)(9, MesCataloguesComponent_div_9_Template, 6, 2, "div", 7)(10, MesCataloguesComponent_div_10_Template, 8, 0, "div", 8)(11, MesCataloguesComponent_div_11_Template, 7, 1, "div", 9)(12, MesCataloguesComponent_div_12_Template, 2, 1, "div", 10)(13, MesCataloguesComponent_div_13_Template, 6, 0, "div", 11)(14, MesCataloguesComponent_div_14_Template, 6, 0, "div", 11)(15, MesCataloguesComponent_div_15_Template, 17, 10, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.allCatalogues.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.allCatalogues.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.allCatalogues.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.hasActiveFilters && ctx.filteredCatalogues.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.displayedCatalogues.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.allCatalogues.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.allCatalogues.length > 0 && ctx.filteredCatalogues.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ["\n\n.qq-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes _ngcontent-%COMP%_qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pq-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: all 0.22s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: currentColor;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.pq-kpi-card__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.pq-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.pq-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #94a3b8;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%] {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%] {\n  border-top-color: #10b981;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #10b981;\n}\n.pq-kpi-card--green.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #10b981;\n}\n.pq-kpi-card--blue[_ngcontent-%COMP%] {\n  border-top-color: #3b82f6;\n}\n.pq-kpi-card--blue[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.pq-kpi-card--blue.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%] {\n  border-top-color: #f59e0b;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.pq-kpi-card--orange.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n}\n.pq-kpi-card--purple[_ngcontent-%COMP%] {\n  border-top-color: #7c3aed;\n}\n.pq-kpi-card--purple[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.pq-kpi-card--purple.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #7c3aed;\n}\n.pq-kpi-card--indigo[_ngcontent-%COMP%] {\n  border-top-color: #4f46e5;\n}\n.pq-kpi-card--indigo[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.pq-kpi-card--indigo.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n}\n.sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 28px;\n}\n.sc-header__left[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sc-header__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.3px;\n}\n.sc-header__subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.sc-header__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.sc-header__count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1px solid #99f6e4;\n  border-radius: 99px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.sc-header__count[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sc-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 14px 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.sc-filters__search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n  max-width: 320px;\n}\n.sc-filters__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 15px;\n  pointer-events: none;\n}\n.sc-filters__search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 36px 8px 36px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: all 0.22s ease;\n}\n.sc-filters__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.sc-filters__search-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.08);\n}\n.sc-filters__search-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 2px;\n  font-size: 16px;\n  line-height: 1;\n  transition: color 0.15s;\n}\n.sc-filters__search-clear[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.sc-filters__types[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  flex: 1;\n}\n.sc-filters__type-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 99px;\n  border: 1.5px solid #e2e8f0;\n  background: #f8fafc;\n  color: #475569;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  white-space: nowrap;\n}\n.sc-filters__type-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sc-filters__type-btn[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-filters__type-btn--active[_ngcontent-%COMP%] {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.3);\n}\n.sc-filters__type-btn--active[_ngcontent-%COMP%]:hover {\n  background: #047a6f;\n}\n.sc-filters__type-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 3px;\n  opacity: 0.8;\n}\n.sc-filters__reset[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 99px;\n  border: 1.5px solid #ef4444;\n  background: #fff;\n  color: #ef4444;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-filters__reset[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.sc-results-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #475569;\n}\n.sc-results-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n  font-size: 14px;\n}\n.sc-results-info__clear[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #069b8f;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: underline;\n  padding: 0;\n}\n.sc-results-info__clear[_ngcontent-%COMP%]:hover {\n  color: #047a6f;\n}\n.sc-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n  color: #94a3b8;\n}\n.sc-loading__spinner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_sc-spin 0.7s linear infinite;\n}\n.sc-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 13px;\n}\n@keyframes _ngcontent-%COMP%_sc-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sc-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.sc-error__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ef4444;\n  opacity: 0.5;\n  margin-bottom: 12px;\n  display: block;\n}\n.sc-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #475569;\n  margin-bottom: 16px;\n}\n.sc-error__retry[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 50px;\n  border: 1.5px solid #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-error__retry[_ngcontent-%COMP%]:hover {\n  background: #069b8f;\n  color: #fff;\n}\n.sc-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 72px 20px;\n  text-align: center;\n}\n.sc-empty__icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  color: rgba(6, 155, 143, 0.2);\n  margin-bottom: 16px;\n  display: block;\n}\n.sc-empty__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #475569;\n  margin-bottom: 8px;\n}\n.sc-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin-bottom: 20px;\n}\n.sc-empty__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 50px;\n  border: 1.5px solid #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-empty__btn[_ngcontent-%COMP%]:hover {\n  background: #069b8f;\n  color: #fff;\n}\n.catalogue-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 28px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.catalogue-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 16px 40px rgba(6, 155, 143, 0.15), 0 6px 16px rgba(0, 0, 0, 0.08);\n  border-color: rgba(6, 155, 143, 0.35);\n}\n.catalogue-card--termine[_ngcontent-%COMP%] {\n  border-color: rgba(16, 185, 129, 0.35);\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.catalogue-card--termine[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 40px rgba(16, 185, 129, 0.12), 0 6px 16px rgba(0, 0, 0, 0.06);\n  border-color: rgba(16, 185, 129, 0.5);\n}\n.catalogue-card__banner[_ngcontent-%COMP%] {\n  position: relative;\n  height: 160px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.catalogue-card__banner-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  transition: transform 0.35s ease;\n}\n.catalogue-card[_ngcontent-%COMP%]:hover   .catalogue-card__banner-bg[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.catalogue-card__banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.08) 0%,\n      rgba(0, 0, 0, 0.55) 100%);\n}\n.catalogue-card__banner-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  left: 16px;\n  font-size: 28px;\n  color: rgba(255, 255, 255, 0.9);\n  z-index: 2;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.catalogue-card__banner-termine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 11px;\n  border-radius: 99px;\n  background: rgba(16, 185, 129, 0.92);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.catalogue-card__banner-termine[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.catalogue-card__banner-assigned[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 99px;\n  background: rgba(6, 155, 143, 0.88);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.catalogue-card__banner-assigned[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.catalogue-card__banner-assigned--demande[_ngcontent-%COMP%] {\n  background: rgba(3, 105, 161, 0.88);\n}\n.catalogue-card__banner-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.catalogue-card__body[_ngcontent-%COMP%] {\n  padding: 16px 18px 8px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.catalogue-card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.catalogue-card__description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  line-height: 1.55;\n  margin: 0 0 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  flex: 1;\n}\n.catalogue-card__stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.catalogue-card__stat[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 99px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  font-size: 11px;\n  color: #475569;\n  font-weight: 500;\n}\n.catalogue-card__stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.catalogue-card__stat--done[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: rgba(16, 185, 129, 0.25);\n  color: #10b981;\n}\n.catalogue-card__stat--done[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.catalogue-card__progression[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.catalogue-card__termine[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  background: #f0fdf4;\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  color: #10b981;\n  font-size: 12px;\n  font-weight: 700;\n  width: 100%;\n  justify-content: center;\n}\n.catalogue-card__termine[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.catalogue-card__prog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.catalogue-card__prog-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.catalogue-card__prog-pct[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  transition: color 0.3s;\n}\n.catalogue-card__prog-bar[_ngcontent-%COMP%] {\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.catalogue-card__prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      #047a6f);\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 2px;\n}\n.catalogue-card__assignation[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  border-top: 1px solid #f1f5f9;\n  margin-bottom: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.catalogue-card__assignation-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #94a3b8;\n}\n.catalogue-card__assignation-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.catalogue-card__assignation-expiry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #94a3b8;\n}\n.catalogue-card__assignation-expiry[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.catalogue-card__assignation-expiry--permanent[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.catalogue-card__assignation-expiry--permanent[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.catalogue-card__assignation-expiry--warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-weight: 600;\n}\n.catalogue-card__assignation-expiry--warning[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.catalogue-card__notes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  padding: 8px 10px;\n  background: #fffbeb;\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  border-radius: 8px;\n  font-size: 11px;\n  color: rgb(187.1307086614, 120.4078740157, 7.6692913386);\n  margin-bottom: 10px;\n}\n.catalogue-card__notes[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.catalogue-card__notes[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  line-height: 1.5;\n}\n.catalogue-card__footer[_ngcontent-%COMP%] {\n  padding: 12px 18px 16px;\n  border-top: 1px solid #f1f5f9;\n}\n.catalogue-card__btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 9px 16px;\n  border-radius: 8px;\n  border: none;\n  background: #069b8f;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.25);\n}\n.catalogue-card__btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.catalogue-card__btn[_ngcontent-%COMP%]:hover {\n  background: #047a6f;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.35);\n}\n.catalogue-card__btn--done[_ngcontent-%COMP%] {\n  background: #10b981;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.25);\n}\n.catalogue-card__btn--done[_ngcontent-%COMP%]:hover {\n  background: rgb(12.752238806, 147.447761194, 102.8149253731);\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n}\n.sc-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 20px;\n  border-top: 1px solid #e2e8f0;\n}\n.sc-pagination__info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n  font-weight: 500;\n}\n.sc-pagination__info-total[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 400;\n  margin-left: 4px;\n}\n.sc-pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-pagination__btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-pagination__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-pagination__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.sc-pagination__btn--active[_ngcontent-%COMP%] {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.3);\n}\n.sc-pagination__ellipsis[_ngcontent-%COMP%] {\n  width: 28px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .sc-header__title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .sc-header__subtitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sc-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .sc-filters__search[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .sc-filters__type-btn[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 5px 10px;\n  }\n  .catalogue-card__banner[_ngcontent-%COMP%] {\n    height: 140px;\n  }\n  .catalogue-card__title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .catalogue-card__body[_ngcontent-%COMP%] {\n    padding: 14px 14px 8px;\n  }\n  .catalogue-card__footer[_ngcontent-%COMP%] {\n    padding: 10px 14px 14px;\n  }\n  .sc-pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .sc-pagination__btn[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n  .pq-kpi-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n@media (max-width: 480px) {\n  .catalogue-card__stat[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 2px 8px;\n  }\n}\n.catalogue-card--grayed[_ngcontent-%COMP%] {\n  opacity: 0.72;\n  filter: grayscale(20%);\n  transition: opacity 0.2s, filter 0.2s;\n}\n.catalogue-card--grayed[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  filter: grayscale(0%);\n}\n.catalogue-card--expire[_ngcontent-%COMP%] {\n  border: 1.5px solid #fca5a5;\n}\n.catalogue-card__banner-expire[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 11px;\n  border-radius: 99px;\n  background: rgba(239, 68, 68, 0.92);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.catalogue-card__banner-expire[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.catalogue-card__banner-assigned--termine[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.9) !important;\n}\n.catalogue-card__prog-fill--expire[_ngcontent-%COMP%] {\n  background: #9ca3af !important;\n}\n.catalogue-card__assignation-expiry--expired[_ngcontent-%COMP%] {\n  color: #ef4444 !important;\n  font-weight: 500;\n}\n.catalogue-card__assignation-expiry--expired[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ef4444 !important;\n}\n.catalogue-card__btn[_ngcontent-%COMP%] {\n  background: #069b8f !important;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.25) !important;\n}\n.catalogue-card__btn[_ngcontent-%COMP%]:hover {\n  background: #047a6f !important;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.35) !important;\n  transform: translateY(-1px);\n}\n.catalogue-card__btn--done[_ngcontent-%COMP%] {\n  background: #16a34a !important;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.25) !important;\n}\n.catalogue-card__btn--done[_ngcontent-%COMP%]:hover {\n  background: #15803d !important;\n  box-shadow: 0 4px 14px rgba(22, 163, 74, 0.35) !important;\n}\n.catalogue-card__btn--expire[_ngcontent-%COMP%] {\n  background: #6b7280 !important;\n  box-shadow: none !important;\n}\n.catalogue-card__btn--expire[_ngcontent-%COMP%]:hover {\n  background: #4b5563 !important;\n  box-shadow: none !important;\n  transform: none !important;\n}\n/*# sourceMappingURL=mes-catalogues.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MesCataloguesComponent, [{
    type: Component,
    args: [{ selector: "app-mes-catalogues", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- HEADER -->
<div class="sc-header">
  <div class="sc-header__left">
    <h1 class="sc-header__title">Mes Catalogues</h1>
    <p class="sc-header__subtitle">Catalogues assign\xE9s et demandes accept\xE9es par votre entreprise</p>
  </div>
  <div class="sc-header__right" *ngIf="!loading && allCatalogues.length > 0">
    <span class="sc-header__count">
      <i class="isax isax-book-1"></i>
      {{ totalItems }} catalogue{{ totalItems > 1 ? 's' : '' }}
    </span>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- KPI INDICATORS \u2014 m\xEAme style que la page parcours  -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="pq-kpi-grid mb-4" *ngIf="!loading && allCatalogues.length > 0">

  <!-- Total -->
  <div class="pq-kpi-card pq-kpi-card--teal" (click)="onFiltreChange('')"
       [class.pq-kpi-card--active]="selectedFiltre === ''">
    <div class="pq-kpi-card__icon">
      <i class="isax isax-book-1"></i>
    </div>
    <div class="pq-kpi-card__body">
      <div class="pq-kpi-card__value">{{ totalCatalogues }}</div>
      <div class="pq-kpi-card__label">Total</div>
    </div>
  </div>

  <!-- En cours -->
  <div class="pq-kpi-card pq-kpi-card--blue" (click)="onFiltreChange('en_cours')"
       [class.pq-kpi-card--active]="selectedFiltre === 'en_cours'">
    <div class="pq-kpi-card__icon">
      <i class="isax isax-play-circle"></i>
    </div>
    <div class="pq-kpi-card__body">
      <div class="pq-kpi-card__value">{{ totalEnCours }}</div>
      <div class="pq-kpi-card__label">En cours</div>
    </div>
  </div>

  <!-- Termin\xE9s -->
  <div class="pq-kpi-card pq-kpi-card--green" (click)="onFiltreChange('termine')"
       [class.pq-kpi-card--active]="selectedFiltre === 'termine'">
    <div class="pq-kpi-card__icon">
      <i class="isax isax-medal-star"></i>
    </div>
    <div class="pq-kpi-card__body">
      <div class="pq-kpi-card__value">{{ totalTermines }}</div>
      <div class="pq-kpi-card__label">Termin\xE9s</div>
    </div>
  </div>

  <!-- Non d\xE9marr\xE9s -->
  <div class="pq-kpi-card pq-kpi-card--orange" (click)="onFiltreChange('')"
       [class.pq-kpi-card--active]="false">
    <div class="pq-kpi-card__icon">
      <i class="isax isax-flash-circle"></i>
    </div>
    <div class="pq-kpi-card__body">
      <div class="pq-kpi-card__value">{{ totalNonDemarres }}</div>
      <div class="pq-kpi-card__label">Non d\xE9marr\xE9s</div>
    </div>
  </div>

  <!-- Assign\xE9s directement -->
  <div class="pq-kpi-card pq-kpi-card--purple" (click)="onFiltreChange('assigne')"
       [class.pq-kpi-card--active]="selectedFiltre === 'assigne'">
    <div class="pq-kpi-card__icon">
      <i class="isax isax-tick-circle"></i>
    </div>
    <div class="pq-kpi-card__body">
      <div class="pq-kpi-card__value">{{ totalAssignes }}</div>
      <div class="pq-kpi-card__label">Assign\xE9s</div>
    </div>
  </div>

  <!-- Demandes accept\xE9es -->
  <div class="pq-kpi-card pq-kpi-card--indigo" (click)="onFiltreChange('demande')"
       [class.pq-kpi-card--active]="selectedFiltre === 'demande'">
    <div class="pq-kpi-card__icon">
      <i class="isax isax-send-2"></i>
    </div>
    <div class="pq-kpi-card__body">
      <div class="pq-kpi-card__value">{{ totalDemandes }}</div>
      <div class="pq-kpi-card__label">Demandes accept\xE9es</div>
    </div>
  </div>

</div>

<!-- FILTRES -->
<div class="sc-filters" *ngIf="!loading && allCatalogues.length > 0">
  <div class="sc-filters__search">
    <i class="isax isax-search-normal sc-filters__search-icon"></i>
    <input type="text" class="sc-filters__search-input"
           placeholder="Rechercher un catalogue..."
           [(ngModel)]="searchTerm"
           (ngModelChange)="onSearchChange()">
    <button *ngIf="searchTerm" class="sc-filters__search-clear"
            (click)="searchTerm = ''; onSearchChange()">
      <i class="isax isax-close-circle"></i>
    </button>
  </div>

  <div class="sc-filters__types">
    <button *ngFor="let f of filtres"
            class="sc-filters__type-btn"
            [class.sc-filters__type-btn--active]="selectedFiltre === f.value"
            (click)="onFiltreChange(f.value)">
      <i class="isax me-1" [ngClass]="f.icon"></i>{{ f.label }}
      <span class="sc-filters__type-count" *ngIf="f.value === 'assigne'        && totalAssignes    > 0">({{ totalAssignes }})</span>
      <span class="sc-filters__type-count" *ngIf="f.value === 'demande'        && totalDemandes    > 0">({{ totalDemandes }})</span>
      <span class="sc-filters__type-count" *ngIf="f.value === 'termine'        && totalTermines    > 0">({{ totalTermines }})</span>
      <span class="sc-filters__type-count" *ngIf="f.value === 'en_cours'       && totalEnCours     > 0">({{ totalEnCours }})</span>
      <span class="sc-filters__type-count" *ngIf="f.value === 'expire'         && totalExpires     > 0">({{ totalExpires }})</span>
    </button>
  </div>

  <button class="sc-filters__reset" *ngIf="hasActiveFilters" (click)="clearFilters()">
    <i class="isax isax-refresh"></i> R\xE9initialiser
  </button>
</div>

<!-- R\xC9SULTAT FILTRE -->
<div class="sc-results-info" *ngIf="!loading && hasActiveFilters && filteredCatalogues.length > 0">
  <i class="isax isax-filter"></i>
  <span>{{ totalItems }} r\xE9sultat{{ totalItems > 1 ? 's' : '' }}</span>
  <button class="sc-results-info__clear" (click)="clearFilters()">Effacer les filtres</button>
</div>

<!-- LOADER -->

<div class="qq-loading" *ngIf="loading">
  <div class="qq-loading__ring">
    <div></div><div></div><div></div><div></div>
  </div>
  <p>Chargement de vos catalogues...</p>
</div>

<!-- ERREUR -->
<div class="sc-error" *ngIf="error && !loading">
  <i class="isax isax-warning-2 sc-error__icon"></i>
  <p>{{ error }}</p>
  <button class="sc-error__retry" (click)="loadCatalogues()">
    <i class="isax isax-refresh me-1"></i> R\xE9essayer
  </button>
</div>

<!-- GRILLE CATALOGUES -->
<div class="row g-4" *ngIf="!loading && displayedCatalogues.length > 0">
  <div class="col-xl-4 col-md-6" *ngFor="let catalogue of displayedCatalogues">
    <div class="catalogue-card"
         [class.catalogue-card--termine]="catalogue.est_termine"
         [class.catalogue-card--expire]="isExpire(catalogue) && !catalogue.est_termine"
         [class.catalogue-card--grayed]="catalogue.est_termine || isExpire(catalogue)"
         (click)="goToCatalogue(catalogue.id)">

      <!-- BANNI\xC8RE -->
      <div class="catalogue-card__banner">
        <div class="catalogue-card__banner-bg"
             [style.background-image]="catalogue.image_couverture ? 'url(' + catalogue.image_couverture + ')' : 'none'"
             [style.background-color]="!catalogue.image_couverture ? (catalogue.couleur || '#069b8f') : 'transparent'">
        </div>
        <div class="catalogue-card__banner-overlay"></div>
        <i [class]="(catalogue.icone || 'isax isax-book-1') + ' catalogue-card__banner-icon'"></i>

        <!-- Badge Compl\xE9t\xE9 (haut gauche) -->
        <div class="catalogue-card__banner-termine" *ngIf="catalogue.est_termine">
          <i class="isax isax-medal-star me-1"></i>Compl\xE9t\xE9
        </div>

        <!-- Badge Expir\xE9 (haut gauche) -->
        <div class="catalogue-card__banner-expire" *ngIf="isExpire(catalogue) && !catalogue.est_termine">
          <i class="isax isax-calendar-remove me-1"></i>Expir\xE9
        </div>

        <!-- Badge source (haut droite) -->
        <span class="catalogue-card__banner-assigned"
              [class.catalogue-card__banner-assigned--demande]="catalogue.source === 'demande'"
              [class.catalogue-card__banner-assigned--termine]="catalogue.est_termine">
          <i class="isax me-1"
             [class.isax-medal-star]="catalogue.est_termine"
             [class.isax-tick-circle]="!catalogue.est_termine && catalogue.source !== 'demande'"
             [class.isax-send-2]="!catalogue.est_termine && catalogue.source === 'demande'"></i>
          {{ catalogue.source === 'demande' ? 'Demande accept\xE9e' : 'Assign\xE9' }}
        </span>

        <!-- Badge type -->
        <span class="catalogue-card__banner-badge"
              [style.background-color]="getTypeColor(catalogue.type)">
          {{ getTypeLabel(catalogue.type) }}
        </span>
      </div>

      <!-- BODY -->
      <div class="catalogue-card__body">
        <h5 class="catalogue-card__title">{{ catalogue.titre }}</h5>
        <p class="catalogue-card__description">
          {{ catalogue.short_description || catalogue.description || 'Aucune description disponible' }}
        </p>

        <!-- Stats -->
        <div class="catalogue-card__stats">
          <div class="catalogue-card__stat">
            <i class="isax isax-book-1"></i>
            <span>{{ catalogue.nombre_formations }} formation{{ catalogue.nombre_formations > 1 ? 's' : '' }}</span>
          </div>
          <div class="catalogue-card__stat" *ngIf="catalogue.duree_totale">
            <i class="isax isax-clock"></i>
            <span>{{ catalogue.duree_totale }} h</span>
          </div>
          <div class="catalogue-card__stat catalogue-card__stat--done"
               *ngIf="catalogue.formations_terminees > 0">
            <i class="isax isax-tick-circle"></i>
            <span>{{ catalogue.formations_terminees }}/{{ catalogue.total_formations }} termin\xE9es</span>
          </div>
        </div>

        <!-- PROGRESSION -->
        <div class="catalogue-card__progression" *ngIf="catalogue.total_formations > 0">
          <!-- Badge termin\xE9 -->
          <div class="catalogue-card__termine" *ngIf="catalogue.est_termine">
            <i class="isax isax-medal-star me-1"></i>
            Catalogue compl\xE9t\xE9 !
          </div>
          <!-- Barre progression -->
          <div *ngIf="!catalogue.est_termine">
            <div class="catalogue-card__prog-header">
              <span class="catalogue-card__prog-label">Progression</span>
              <span class="catalogue-card__prog-pct"
                    [style.color]="isExpire(catalogue) ? '#9ca3af' : (catalogue.progression > 0 ? '#069b8f' : '#9ca3af')">
                {{ catalogue.progression | number:'1.0-0' }}%
              </span>
            </div>
            <div class="catalogue-card__prog-bar">
              <div class="catalogue-card__prog-fill"
                   [class.catalogue-card__prog-fill--expire]="isExpire(catalogue)"
                   [style.width.%]="catalogue.progression">
              </div>
            </div>
          </div>
        </div>

        <!-- Assignation -->
        <div class="catalogue-card__assignation">
          <div class="catalogue-card__assignation-date" *ngIf="catalogue.date_assignation">
            <i class="isax me-1"
               [class.isax-calendar-add]="catalogue.source !== 'demande'"
               [class.isax-tick-circle]="catalogue.source === 'demande'"></i>
            {{ catalogue.source === 'demande' ? 'Valid\xE9e le' : 'Assign\xE9 le' }}
            {{ catalogue.date_assignation | date:'dd/MM/yyyy' }}
          </div>

          <!-- Acc\xE8s permanent -->
          <div class="catalogue-card__assignation-expiry catalogue-card__assignation-expiry--permanent"
               *ngIf="!catalogue.date_expiration">
            <i class="isax isax-infinity me-1"></i>Acc\xE8s permanent
          </div>

          <!-- Expir\xE9 -->
          <div class="catalogue-card__assignation-expiry catalogue-card__assignation-expiry--expired"
               *ngIf="isExpire(catalogue)">
            <i class="isax isax-calendar-remove me-1"></i>
            Expir\xE9 le {{ catalogue.date_expiration | date:'dd/MM/yyyy' }}
          </div>

          <!-- Expire bient\xF4t -->
          <div class="catalogue-card__assignation-expiry catalogue-card__assignation-expiry--warning"
               *ngIf="!isExpire(catalogue) && isExpiringSoon(catalogue.date_expiration)">
            <i class="isax isax-warning-2 me-1"></i>
            Expire dans {{ getJoursRestants(catalogue.date_expiration) }} jour(s) !
          </div>

          <!-- Date expiration normale -->
          <div class="catalogue-card__assignation-expiry"
               *ngIf="!isExpire(catalogue) && catalogue.date_expiration && !isExpiringSoon(catalogue.date_expiration)">
            <i class="isax isax-calendar-remove me-1"></i>
            Expire le {{ catalogue.date_expiration | date:'dd/MM/yyyy' }}
          </div>
        </div>

        <!-- Notes -->
        <div class="catalogue-card__notes" *ngIf="catalogue.notes">
          <i class="isax isax-note-text me-1"></i>
          <em>{{ catalogue.notes }}</em>
        </div>

        <!-- Footer -->
        <div class="catalogue-card__footer">
          <button class="catalogue-card__btn"
                  [class.catalogue-card__btn--done]="catalogue.est_termine"
                  [class.catalogue-card__btn--expire]="isExpire(catalogue) && !catalogue.est_termine">
            <ng-container *ngIf="catalogue.est_termine">Revoir le catalogue</ng-container>
            <ng-container *ngIf="isExpire(catalogue) && !catalogue.est_termine">Consulter</ng-container>
            <ng-container *ngIf="!catalogue.est_termine && !isExpire(catalogue)">Acc\xE9der aux formations</ng-container>
            <i class="isax isax-arrow-right-3"></i>
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- EMPTY \u2014 aucun catalogue -->
<div class="sc-empty" *ngIf="!loading && !error && allCatalogues.length === 0">
  <i class="isax isax-book-1 sc-empty__icon"></i>
  <h6 class="sc-empty__title">Aucun catalogue disponible</h6>
  <p>Vous n'avez pas encore de catalogues assign\xE9s ou de demandes accept\xE9es.</p>
</div>

<!-- EMPTY \u2014 aucun r\xE9sultat filtre -->
<div class="sc-empty"
     *ngIf="!loading && !error && allCatalogues.length > 0 && filteredCatalogues.length === 0">
  <i class="isax isax-search-normal sc-empty__icon"></i>
  <h6 class="sc-empty__title">Aucun r\xE9sultat</h6>
  <p>Aucun catalogue ne correspond \xE0 votre recherche.</p>

</div>

<!-- PAGINATION -->
<div class="sc-pagination" *ngIf="!loading && totalPages > 1">
  <span class="sc-pagination__info">
    Page {{ currentPage }} / {{ totalPages }}
    <span class="sc-pagination__info-total">({{ totalItems }} catalogues)</span>
  </span>
  <div class="sc-pagination__controls">
    <button class="sc-pagination__btn" [disabled]="currentPage === 1" (click)="changePage(1)">
      <i class="isax isax-arrow-left-3"></i>
    </button>
    <button class="sc-pagination__btn" [disabled]="currentPage === 1" (click)="changePage(currentPage - 1)">
      <i class="isax isax-arrow-left-2"></i>
    </button>
    <span class="sc-pagination__ellipsis" *ngIf="pages[0] > 1">\u2026</span>
    <button *ngFor="let p of pages"
            class="sc-pagination__btn"
            [class.sc-pagination__btn--active]="currentPage === p"
            (click)="changePage(p)">{{ p }}</button>
    <span class="sc-pagination__ellipsis" *ngIf="pages[pages.length - 1] < totalPages">\u2026</span>
    <button class="sc-pagination__btn" [disabled]="currentPage === totalPages" (click)="changePage(currentPage + 1)">
      <i class="isax isax-arrow-right-2"></i>
    </button>
    <button class="sc-pagination__btn" [disabled]="currentPage === totalPages" (click)="changePage(totalPages)">
      <i class="isax isax-arrow-right-3"></i>
    </button>
  </div>
</div>
`, styles: ["/* src/app/features/student/mes-catalogues/mes-catalogues.component.scss */\n.qq-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring div:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring div:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring div:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pq-kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: all 0.22s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.pq-kpi-card--active {\n  border-color: currentColor;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.pq-kpi-card__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body {\n  min-width: 0;\n}\n.pq-kpi-card__value {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.pq-kpi-card__label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #94a3b8;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal .pq-kpi-card__icon {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green {\n  border-top-color: #10b981;\n}\n.pq-kpi-card--green .pq-kpi-card__icon {\n  background: #f0fdf4;\n  color: #10b981;\n}\n.pq-kpi-card--green.pq-kpi-card--active {\n  border-color: #10b981;\n}\n.pq-kpi-card--blue {\n  border-top-color: #3b82f6;\n}\n.pq-kpi-card--blue .pq-kpi-card__icon {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.pq-kpi-card--blue.pq-kpi-card--active {\n  border-color: #3b82f6;\n}\n.pq-kpi-card--orange {\n  border-top-color: #f59e0b;\n}\n.pq-kpi-card--orange .pq-kpi-card__icon {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.pq-kpi-card--orange.pq-kpi-card--active {\n  border-color: #f59e0b;\n}\n.pq-kpi-card--purple {\n  border-top-color: #7c3aed;\n}\n.pq-kpi-card--purple .pq-kpi-card__icon {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.pq-kpi-card--purple.pq-kpi-card--active {\n  border-color: #7c3aed;\n}\n.pq-kpi-card--indigo {\n  border-top-color: #4f46e5;\n}\n.pq-kpi-card--indigo .pq-kpi-card__icon {\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.pq-kpi-card--indigo.pq-kpi-card--active {\n  border-color: #4f46e5;\n}\n.sc-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 28px;\n}\n.sc-header__left {\n  flex: 1;\n  min-width: 0;\n}\n.sc-header__title {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  letter-spacing: -0.3px;\n}\n.sc-header__subtitle {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.sc-header__right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.sc-header__count {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1px solid #99f6e4;\n  border-radius: 99px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.sc-header__count i {\n  font-size: 15px;\n}\n.sc-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 14px 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.sc-filters__search {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n  max-width: 320px;\n}\n.sc-filters__search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 15px;\n  pointer-events: none;\n}\n.sc-filters__search-input {\n  width: 100%;\n  padding: 8px 36px 8px 36px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: all 0.22s ease;\n}\n.sc-filters__search-input::placeholder {\n  color: #94a3b8;\n}\n.sc-filters__search-input:focus {\n  border-color: #069b8f;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.08);\n}\n.sc-filters__search-clear {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 2px;\n  font-size: 16px;\n  line-height: 1;\n  transition: color 0.15s;\n}\n.sc-filters__search-clear:hover {\n  color: #ef4444;\n}\n.sc-filters__types {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  flex: 1;\n}\n.sc-filters__type-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 99px;\n  border: 1.5px solid #e2e8f0;\n  background: #f8fafc;\n  color: #475569;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  white-space: nowrap;\n}\n.sc-filters__type-btn i {\n  font-size: 13px;\n}\n.sc-filters__type-btn:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-filters__type-btn--active {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.3);\n}\n.sc-filters__type-btn--active:hover {\n  background: #047a6f;\n}\n.sc-filters__type-count {\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 3px;\n  opacity: 0.8;\n}\n.sc-filters__reset {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 99px;\n  border: 1.5px solid #ef4444;\n  background: #fff;\n  color: #ef4444;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-filters__reset:hover {\n  background: #fef2f2;\n}\n.sc-results-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #475569;\n}\n.sc-results-info i {\n  color: #069b8f;\n  font-size: 14px;\n}\n.sc-results-info__clear {\n  background: none;\n  border: none;\n  color: #069b8f;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: underline;\n  padding: 0;\n}\n.sc-results-info__clear:hover {\n  color: #047a6f;\n}\n.sc-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n  color: #94a3b8;\n}\n.sc-loading__spinner {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: sc-spin 0.7s linear infinite;\n}\n.sc-loading p {\n  margin-top: 16px;\n  font-size: 13px;\n}\n@keyframes sc-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sc-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.sc-error__icon {\n  font-size: 3rem;\n  color: #ef4444;\n  opacity: 0.5;\n  margin-bottom: 12px;\n  display: block;\n}\n.sc-error p {\n  font-size: 14px;\n  color: #475569;\n  margin-bottom: 16px;\n}\n.sc-error__retry {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 50px;\n  border: 1.5px solid #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-error__retry:hover {\n  background: #069b8f;\n  color: #fff;\n}\n.sc-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 72px 20px;\n  text-align: center;\n}\n.sc-empty__icon {\n  font-size: 3.5rem;\n  color: rgba(6, 155, 143, 0.2);\n  margin-bottom: 16px;\n  display: block;\n}\n.sc-empty__title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #475569;\n  margin-bottom: 8px;\n}\n.sc-empty p {\n  font-size: 13px;\n  color: #94a3b8;\n  margin-bottom: 20px;\n}\n.sc-empty__btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 50px;\n  border: 1.5px solid #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-empty__btn:hover {\n  background: #069b8f;\n  color: #fff;\n}\n.catalogue-card {\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 28px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.catalogue-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 16px 40px rgba(6, 155, 143, 0.15), 0 6px 16px rgba(0, 0, 0, 0.08);\n  border-color: rgba(6, 155, 143, 0.35);\n}\n.catalogue-card--termine {\n  border-color: rgba(16, 185, 129, 0.35);\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.catalogue-card--termine:hover {\n  box-shadow: 0 16px 40px rgba(16, 185, 129, 0.12), 0 6px 16px rgba(0, 0, 0, 0.06);\n  border-color: rgba(16, 185, 129, 0.5);\n}\n.catalogue-card__banner {\n  position: relative;\n  height: 160px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.catalogue-card__banner-bg {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  transition: transform 0.35s ease;\n}\n.catalogue-card:hover .catalogue-card__banner-bg {\n  transform: scale(1.05);\n}\n.catalogue-card__banner-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.08) 0%,\n      rgba(0, 0, 0, 0.55) 100%);\n}\n.catalogue-card__banner-icon {\n  position: absolute;\n  bottom: 14px;\n  left: 16px;\n  font-size: 28px;\n  color: rgba(255, 255, 255, 0.9);\n  z-index: 2;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n}\n.catalogue-card__banner-termine {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 11px;\n  border-radius: 99px;\n  background: rgba(16, 185, 129, 0.92);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.catalogue-card__banner-termine i {\n  font-size: 12px;\n}\n.catalogue-card__banner-assigned {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 99px;\n  background: rgba(6, 155, 143, 0.88);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.catalogue-card__banner-assigned i {\n  font-size: 11px;\n}\n.catalogue-card__banner-assigned--demande {\n  background: rgba(3, 105, 161, 0.88);\n}\n.catalogue-card__banner-badge {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.catalogue-card__body {\n  padding: 16px 18px 8px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.catalogue-card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.catalogue-card__description {\n  font-size: 12px;\n  color: #94a3b8;\n  line-height: 1.55;\n  margin: 0 0 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  flex: 1;\n}\n.catalogue-card__stats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.catalogue-card__stat {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 99px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  font-size: 11px;\n  color: #475569;\n  font-weight: 500;\n}\n.catalogue-card__stat i {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.catalogue-card__stat--done {\n  background: #f0fdf4;\n  border-color: rgba(16, 185, 129, 0.25);\n  color: #10b981;\n}\n.catalogue-card__stat--done i {\n  color: #10b981;\n}\n.catalogue-card__progression {\n  margin-bottom: 12px;\n}\n.catalogue-card__termine {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  background: #f0fdf4;\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  color: #10b981;\n  font-size: 12px;\n  font-weight: 700;\n  width: 100%;\n  justify-content: center;\n}\n.catalogue-card__termine i {\n  font-size: 14px;\n}\n.catalogue-card__prog-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.catalogue-card__prog-label {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.catalogue-card__prog-pct {\n  font-size: 12px;\n  font-weight: 700;\n  transition: color 0.3s;\n}\n.catalogue-card__prog-bar {\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.catalogue-card__prog-fill {\n  height: 100%;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      #047a6f);\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 2px;\n}\n.catalogue-card__assignation {\n  padding-top: 10px;\n  border-top: 1px solid #f1f5f9;\n  margin-bottom: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.catalogue-card__assignation-date {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #94a3b8;\n}\n.catalogue-card__assignation-date i {\n  font-size: 12px;\n}\n.catalogue-card__assignation-expiry {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #94a3b8;\n}\n.catalogue-card__assignation-expiry i {\n  font-size: 12px;\n}\n.catalogue-card__assignation-expiry--permanent {\n  color: #10b981;\n}\n.catalogue-card__assignation-expiry--permanent i {\n  color: #10b981;\n}\n.catalogue-card__assignation-expiry--warning {\n  color: #f59e0b;\n  font-weight: 600;\n}\n.catalogue-card__assignation-expiry--warning i {\n  color: #f59e0b;\n}\n.catalogue-card__notes {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  padding: 8px 10px;\n  background: #fffbeb;\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  border-radius: 8px;\n  font-size: 11px;\n  color: rgb(187.1307086614, 120.4078740157, 7.6692913386);\n  margin-bottom: 10px;\n}\n.catalogue-card__notes i {\n  font-size: 13px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.catalogue-card__notes em {\n  font-style: italic;\n  line-height: 1.5;\n}\n.catalogue-card__footer {\n  padding: 12px 18px 16px;\n  border-top: 1px solid #f1f5f9;\n}\n.catalogue-card__btn {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 9px 16px;\n  border-radius: 8px;\n  border: none;\n  background: #069b8f;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.25);\n}\n.catalogue-card__btn i {\n  font-size: 14px;\n}\n.catalogue-card__btn:hover {\n  background: #047a6f;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.35);\n}\n.catalogue-card__btn--done {\n  background: #10b981;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.25);\n}\n.catalogue-card__btn--done:hover {\n  background: rgb(12.752238806, 147.447761194, 102.8149253731);\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n}\n.sc-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 20px;\n  border-top: 1px solid #e2e8f0;\n}\n.sc-pagination__info {\n  font-size: 13px;\n  color: #475569;\n  font-weight: 500;\n}\n.sc-pagination__info-total {\n  color: #94a3b8;\n  font-weight: 400;\n  margin-left: 4px;\n}\n.sc-pagination__controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-pagination__btn {\n  width: 34px;\n  height: 34px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n.sc-pagination__btn:hover:not(:disabled) {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-pagination__btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.sc-pagination__btn--active {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.3);\n}\n.sc-pagination__ellipsis {\n  width: 28px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .sc-header__title {\n    font-size: 20px;\n  }\n  .sc-header__subtitle {\n    display: none;\n  }\n  .sc-filters {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .sc-filters__search {\n    max-width: 100%;\n  }\n  .sc-filters__type-btn {\n    font-size: 11px;\n    padding: 5px 10px;\n  }\n  .catalogue-card__banner {\n    height: 140px;\n  }\n  .catalogue-card__title {\n    font-size: 14px;\n  }\n  .catalogue-card__body {\n    padding: 14px 14px 8px;\n  }\n  .catalogue-card__footer {\n    padding: 10px 14px 14px;\n  }\n  .sc-pagination {\n    flex-direction: column;\n    align-items: center;\n  }\n  .sc-pagination__btn {\n    width: 30px;\n    height: 30px;\n  }\n  .pq-kpi-card {\n    padding: 12px;\n  }\n}\n@media (max-width: 480px) {\n  .catalogue-card__stat {\n    font-size: 10px;\n    padding: 2px 8px;\n  }\n}\n.catalogue-card--grayed {\n  opacity: 0.72;\n  filter: grayscale(20%);\n  transition: opacity 0.2s, filter 0.2s;\n}\n.catalogue-card--grayed:hover {\n  opacity: 0.9;\n  filter: grayscale(0%);\n}\n.catalogue-card--expire {\n  border: 1.5px solid #fca5a5;\n}\n.catalogue-card__banner-expire {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 3;\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 11px;\n  border-radius: 99px;\n  background: rgba(239, 68, 68, 0.92);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.catalogue-card__banner-expire i {\n  font-size: 12px;\n}\n.catalogue-card__banner-assigned--termine {\n  background: rgba(5, 150, 105, 0.9) !important;\n}\n.catalogue-card__prog-fill--expire {\n  background: #9ca3af !important;\n}\n.catalogue-card__assignation-expiry--expired {\n  color: #ef4444 !important;\n  font-weight: 500;\n}\n.catalogue-card__assignation-expiry--expired i {\n  color: #ef4444 !important;\n}\n.catalogue-card__btn {\n  background: #069b8f !important;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.25) !important;\n}\n.catalogue-card__btn:hover {\n  background: #047a6f !important;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.35) !important;\n  transform: translateY(-1px);\n}\n.catalogue-card__btn--done {\n  background: #16a34a !important;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.25) !important;\n}\n.catalogue-card__btn--done:hover {\n  background: #15803d !important;\n  box-shadow: 0 4px 14px rgba(22, 163, 74, 0.35) !important;\n}\n.catalogue-card__btn--expire {\n  background: #6b7280 !important;\n  box-shadow: none !important;\n}\n.catalogue-card__btn--expire:hover {\n  background: #4b5563 !important;\n  box-shadow: none !important;\n  transform: none !important;\n}\n/*# sourceMappingURL=mes-catalogues.component.css.map */\n"] }]
  }], () => [{ type: FormationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MesCataloguesComponent, { className: "MesCataloguesComponent", filePath: "app/features/student/mes-catalogues/mes-catalogues.component.ts", lineNumber: 15 });
})();
export {
  MesCataloguesComponent
};
//# sourceMappingURL=chunk-EEUPJPSW.js.map
