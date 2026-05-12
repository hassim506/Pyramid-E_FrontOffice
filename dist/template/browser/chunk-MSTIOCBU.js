import {
  FormationsService
} from "./chunk-3MN45TQB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-AK2M3J6O.js";
import {
  Router
} from "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UPBSS6WA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/sessions-acceptees/sessions-acceptees.component.ts
function SessionsAccepteesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.totalItems, " session", ctx_r0.totalItems > 1 ? "s" : "", " ");
  }
}
function SessionsAccepteesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_7_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFiltreChange("toutes"));
    });
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 24);
    \u0275\u0275text(8, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 25);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_7_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFiltreChange("a_venir"));
    });
    \u0275\u0275elementStart(10, "div", 21);
    \u0275\u0275element(11, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 22)(13, "div", 23);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 24);
    \u0275\u0275text(16, "\xC0 venir");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 27);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_7_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFiltreChange("en_cours"));
    });
    \u0275\u0275elementStart(18, "div", 21);
    \u0275\u0275element(19, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 22)(21, "div", 23);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 24);
    \u0275\u0275text(24, "En cours");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 29);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_7_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFiltreChange("terminees"));
    });
    \u0275\u0275elementStart(26, "div", 21);
    \u0275\u0275element(27, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 22)(29, "div", 23);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 24);
    \u0275\u0275text(32, "Termin\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 31);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_7_Template_div_click_33_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFiltreChange("certif"));
    });
    \u0275\u0275elementStart(34, "div", 21);
    \u0275\u0275element(35, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 22)(37, "div", 23);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 24);
    \u0275\u0275text(40, "Certifiantes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 33);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_7_Template_div_click_41_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFiltreChange("toutes"));
    });
    \u0275\u0275elementStart(42, "div", 21);
    \u0275\u0275element(43, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 22)(45, "div", 23);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 24);
    \u0275\u0275text(48, "Certifi\xE9es");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r0.selectedFiltre === "toutes");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalSessions);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r0.selectedFiltre === "a_venir");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalAVenir);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r0.selectedFiltre === "en_cours");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalEnCours);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r0.selectedFiltre === "terminees");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalTerminees);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r0.selectedFiltre === "certif");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalCertifiantes);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", false);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalCertifiees);
  }
}
function SessionsAccepteesComponent_div_8_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_8_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.searchTerm = "";
      return \u0275\u0275resetView(ctx_r0.onSearchChange());
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_8_button_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.totalAVenir, ")");
  }
}
function SessionsAccepteesComponent_div_8_button_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.totalEnCours, ")");
  }
}
function SessionsAccepteesComponent_div_8_button_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.totalTerminees, ")");
  }
}
function SessionsAccepteesComponent_div_8_button_6_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.totalCertifiantes, ")");
  }
}
function SessionsAccepteesComponent_div_8_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_8_button_6_Template_button_click_0_listener() {
      const f_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFiltreChange(f_r6.value));
    });
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2);
    \u0275\u0275template(3, SessionsAccepteesComponent_div_8_button_6_span_3_Template, 2, 1, "span", 46)(4, SessionsAccepteesComponent_div_8_button_6_span_4_Template, 2, 1, "span", 46)(5, SessionsAccepteesComponent_div_8_button_6_span_5_Template, 2, 1, "span", 46)(6, SessionsAccepteesComponent_div_8_button_6_span_6_Template, 2, 1, "span", 46);
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
    \u0275\u0275property("ngIf", f_r6.value === "a_venir" && ctx_r0.totalAVenir > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r6.value === "en_cours" && ctx_r0.totalEnCours > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r6.value === "terminees" && ctx_r0.totalTerminees > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r6.value === "certif" && ctx_r0.totalCertifiantes > 0);
  }
}
function SessionsAccepteesComponent_div_8_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_8_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, " R\xE9initialiser ");
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275element(2, "i", 36);
    \u0275\u0275elementStart(3, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function SessionsAccepteesComponent_div_8_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchTerm, $event) || (ctx_r0.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SessionsAccepteesComponent_div_8_Template_input_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SessionsAccepteesComponent_div_8_button_4_Template, 2, 0, "button", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39);
    \u0275\u0275template(6, SessionsAccepteesComponent_div_8_button_6_Template, 7, 8, "button", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SessionsAccepteesComponent_div_8_button_7_Template, 3, 0, "button", 41);
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
function SessionsAccepteesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 52);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_9_Template_button_click_4_listener() {
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
function SessionsAccepteesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "div", 54);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de vos sessions...");
    \u0275\u0275elementEnd()();
  }
}
function SessionsAccepteesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 57);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadSessions());
    });
    \u0275\u0275element(5, "i", 58);
    \u0275\u0275text(6, " R\xE9essayer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function SessionsAccepteesComponent_div_12_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275text(2, "Compl\xE9t\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_12_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275text(2, "\xC0 venir ");
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_12_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const session_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, session_r11.date_debut, "dd/MM/yyyy"));
  }
}
function SessionsAccepteesComponent_div_12_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const session_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", session_r11.duree_jours, " jour", session_r11.duree_jours > 1 ? "s" : "");
  }
}
function SessionsAccepteesComponent_div_12_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const session_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(session_r11.lieu);
  }
}
function SessionsAccepteesComponent_div_12_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Certifiante");
    \u0275\u0275elementEnd()();
  }
}
function SessionsAccepteesComponent_div_12_div_1_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275text(2, "Session compl\xE9t\xE9e ! ");
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_12_div_1_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 95)(2, "span", 96);
    \u0275\u0275text(3, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 97);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 98);
    \u0275\u0275element(8, "div", 99);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const session_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", session_r11.progression > 0 ? "#069b8f" : "#9ca3af");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, session_r11.progression, "1.0-0"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", session_r11.progression, "%");
  }
}
function SessionsAccepteesComponent_div_12_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275template(1, SessionsAccepteesComponent_div_12_div_1_div_23_div_1_Template, 3, 0, "div", 93)(2, SessionsAccepteesComponent_div_12_div_1_div_23_div_2_Template, 9, 8, "div", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !session_r11.est_termine && session_r11.progression != null);
  }
}
function SessionsAccepteesComponent_div_12_div_1_div_25_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2192 ", \u0275\u0275pipeBind2(2, 1, session_r11.date_fin, "dd/MM/yyyy"));
  }
}
function SessionsAccepteesComponent_div_12_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "i", 101);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275template(4, SessionsAccepteesComponent_div_12_div_1_div_25_span_4_Template, 3, 4, "span", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, session_r11.date_debut, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", session_r11.date_fin);
  }
}
function SessionsAccepteesComponent_div_12_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "i", 102);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Valid\xE9e le ", \u0275\u0275pipeBind2(3, 1, session_r11.date_assignation, "dd/MM/yyyy"), " ");
  }
}
function SessionsAccepteesComponent_div_12_div_1_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275text(2, "Revoir la session ");
    \u0275\u0275elementContainerEnd();
  }
}
function SessionsAccepteesComponent_div_12_div_1_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 103);
    \u0275\u0275text(2, "Voir les d\xE9tails ");
    \u0275\u0275elementContainerEnd();
  }
}
function SessionsAccepteesComponent_div_12_div_1_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275text(2, "Acc\xE9der \xE0 la session ");
    \u0275\u0275elementContainerEnd();
  }
}
function SessionsAccepteesComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_12_div_1_Template_div_click_1_listener() {
      const session_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.ouvrirDetail(session_r11));
    });
    \u0275\u0275elementStart(2, "div", 63);
    \u0275\u0275element(3, "div", 64)(4, "div", 65)(5, "i");
    \u0275\u0275template(6, SessionsAccepteesComponent_div_12_div_1_div_6_Template, 3, 0, "div", 66)(7, SessionsAccepteesComponent_div_12_div_1_div_7_Template, 3, 0, "div", 67);
    \u0275\u0275elementStart(8, "span", 68);
    \u0275\u0275element(9, "i", 69);
    \u0275\u0275text(10, "Demande accept\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 70);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 71)(14, "h5", 72);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 73);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 74);
    \u0275\u0275template(19, SessionsAccepteesComponent_div_12_div_1_div_19_Template, 5, 4, "div", 75)(20, SessionsAccepteesComponent_div_12_div_1_div_20_Template, 4, 2, "div", 75)(21, SessionsAccepteesComponent_div_12_div_1_div_21_Template, 4, 1, "div", 75)(22, SessionsAccepteesComponent_div_12_div_1_div_22_Template, 4, 0, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, SessionsAccepteesComponent_div_12_div_1_div_23_Template, 3, 2, "div", 77);
    \u0275\u0275elementStart(24, "div", 78);
    \u0275\u0275template(25, SessionsAccepteesComponent_div_12_div_1_div_25_Template, 5, 5, "div", 79)(26, SessionsAccepteesComponent_div_12_div_1_div_26_Template, 4, 4, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 80)(28, "button", 81);
    \u0275\u0275template(29, SessionsAccepteesComponent_div_12_div_1_ng_container_29_Template, 3, 0, "ng-container", 82)(30, SessionsAccepteesComponent_div_12_div_1_ng_container_30_Template, 3, 0, "ng-container", 82)(31, SessionsAccepteesComponent_div_12_div_1_ng_container_31_Template, 3, 0, "ng-container", 82);
    \u0275\u0275element(32, "i", 83);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const session_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("session-card--termine", session_r11.est_termine)("session-card--a-venir", session_r11.est_a_venir);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", session_r11.image_couverture ? "url(" + session_r11.image_couverture + ")" : "none");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getTypeIcon(session_r11.type) + " session-card__banner-icon");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r11.est_a_venir && !session_r11.est_termine);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTypeLabel(session_r11.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(session_r11.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", session_r11.description || "Aucune description disponible", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", session_r11.date_debut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r11.duree_jours);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r11.lieu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r11.certificat_delivre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r11.est_termine || session_r11.progression != null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", session_r11.date_debut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r11.date_assignation);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("session-card__btn--done", session_r11.est_termine)("session-card__btn--avenir", session_r11.est_a_venir && !session_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r11.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !session_r11.est_termine && session_r11.est_a_venir);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !session_r11.est_termine && !session_r11.est_a_venir);
  }
}
function SessionsAccepteesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, SessionsAccepteesComponent_div_12_div_1_Template, 33, 27, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.displayedSessions);
  }
}
function SessionsAccepteesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275elementStart(2, "h6", 107);
    \u0275\u0275text(3, "Aucune session disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Vous n'avez pas encore de sessions dont la demande a \xE9t\xE9 accept\xE9e.");
    \u0275\u0275elementEnd()();
  }
}
function SessionsAccepteesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "i", 108);
    \u0275\u0275elementStart(2, "h6", 107);
    \u0275\u0275text(3, "Aucun r\xE9sultat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Aucune session ne correspond \xE0 votre recherche.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 109);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275element(7, "i", 58);
    \u0275\u0275text(8, " R\xE9initialiser les filtres ");
    \u0275\u0275elementEnd()();
  }
}
function SessionsAccepteesComponent_div_15_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_15_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 121);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_15_button_11_Template_button_click_0_listener() {
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
function SessionsAccepteesComponent_div_15_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "span", 111);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 112);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 113)(6, "button", 114);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(1));
    });
    \u0275\u0275element(7, "i", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 114);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_15_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(9, "i", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SessionsAccepteesComponent_div_15_span_10_Template, 2, 0, "span", 117)(11, SessionsAccepteesComponent_div_15_button_11_Template, 2, 3, "button", 118)(12, SessionsAccepteesComponent_div_15_span_12_Template, 2, 0, "span", 117);
    \u0275\u0275elementStart(13, "button", 114);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_15_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage + 1));
    });
    \u0275\u0275element(14, "i", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 114);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.totalPages));
    });
    \u0275\u0275element(16, "i", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Page ", ctx_r0.currentPage, " / ", ctx_r0.totalPages, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r0.totalItems, " sessions)");
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
function SessionsAccepteesComponent_div_18_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275text(2, "Compl\xE9t\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_18_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 134);
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275text(2, "\xC0 venir ");
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_18_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 163);
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275text(2, "En cours ");
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_18_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 164);
    \u0275\u0275element(1, "i", 165);
    \u0275\u0275text(2, "Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_18_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275text(2, "Certificat obtenu ");
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_18_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "div", 142);
    \u0275\u0275element(2, "i", 166);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Date de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementStart(9, "span", 167);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 2, ctx_r0.sessionSelectionnee.date_debut, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 5, ctx_r0.sessionSelectionnee.date_debut, "HH:mm"), " ");
  }
}
function SessionsAccepteesComponent_div_18_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "div", 142);
    \u0275\u0275element(2, "i", 168);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Date de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 1, ctx_r0.sessionSelectionnee.date_fin, "dd/MM/yyyy"));
  }
}
function SessionsAccepteesComponent_div_18_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "div", 142);
    \u0275\u0275element(2, "i", 169);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r0.sessionSelectionnee.duree_jours, " jour", ctx_r0.sessionSelectionnee.duree_jours > 1 ? "s" : "");
  }
}
function SessionsAccepteesComponent_div_18_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "div", 142);
    \u0275\u0275element(2, "i", 170);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.sessionSelectionnee.type === "distanciel" ? "Lien de connexion" : "Lieu");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.sessionSelectionnee.lieu);
  }
}
function SessionsAccepteesComponent_div_18_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "div", 142);
    \u0275\u0275element(2, "i", 171);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Formation associ\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.sessionSelectionnee.formation_titre);
  }
}
function SessionsAccepteesComponent_div_18_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "span", 155);
    \u0275\u0275text(2, "Statut inscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getStatutInscriptionLabel(ctx_r0.sessionSelectionnee.statut_inscription));
  }
}
function SessionsAccepteesComponent_div_18_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "span", 155);
    \u0275\u0275text(2, "Statut participation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getStatutParticipationLabel(ctx_r0.sessionSelectionnee.statut_participation));
  }
}
function SessionsAccepteesComponent_div_18_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172)(1, "div", 95)(2, "span", 96);
    \u0275\u0275text(3, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 97);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 98);
    \u0275\u0275element(8, "div", 99);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r0.sessionSelectionnee.progression > 0 ? "#069b8f" : "#9ca3af");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, ctx_r0.sessionSelectionnee.progression, "1.0-0"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r0.sessionSelectionnee.progression, "%");
  }
}
function SessionsAccepteesComponent_div_18_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275text(2, "Session compl\xE9t\xE9e ! ");
    \u0275\u0275elementEnd();
  }
}
function SessionsAccepteesComponent_div_18_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174)(1, "div", 137);
    \u0275\u0275element(2, "i", 175);
    \u0275\u0275text(3, "Certificat obtenu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 176);
    \u0275\u0275text(5, " F\xE9licitations ! Vous avez obtenu votre certificat pour cette session. ");
    \u0275\u0275elementEnd()();
  }
}
function SessionsAccepteesComponent_div_18_ng_container_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275element(1, "i", 180);
    \u0275\u0275elementStart(2, "div")(3, "small");
    \u0275\u0275text(4, "Lien de connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 181);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_18_ng_container_56_div_1_Template_a_click_5_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(6, "i", 182);
    \u0275\u0275text(7, "Rejoindre la session ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r0.sessionSelectionnee.lieu, \u0275\u0275sanitizeUrl);
  }
}
function SessionsAccepteesComponent_div_18_ng_container_56_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275element(1, "i", 180);
    \u0275\u0275elementStart(2, "div")(3, "small");
    \u0275\u0275text(4, "Lien de connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 181);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_18_ng_container_56_div_2_Template_a_click_5_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(6, "i", 182);
    \u0275\u0275text(7, "Rejoindre la session ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 183);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r0.extractUrl(ctx_r0.sessionSelectionnee.lieu), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.sessionSelectionnee.lieu, " ");
  }
}
function SessionsAccepteesComponent_div_18_ng_container_56_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Le lien de connexion sera communiqu\xE9 par email avant la session.");
    \u0275\u0275elementEnd()();
  }
}
function SessionsAccepteesComponent_div_18_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SessionsAccepteesComponent_div_18_ng_container_56_div_1_Template, 8, 1, "div", 177)(2, SessionsAccepteesComponent_div_18_ng_container_56_div_2_Template, 10, 2, "div", 177)(3, SessionsAccepteesComponent_div_18_ng_container_56_div_3_Template, 4, 0, "div", 178);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isUrl(ctx_r0.sessionSelectionnee.lieu));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isUrl(ctx_r0.sessionSelectionnee.lieu) && ctx_r0.extractUrl(ctx_r0.sessionSelectionnee.lieu));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.sessionSelectionnee.lieu && !ctx_r0.sessionSelectionnee.instructions_acces);
  }
}
function SessionsAccepteesComponent_div_18_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 185);
    \u0275\u0275element(1, "i", 170);
    \u0275\u0275elementStart(2, "div")(3, "small");
    \u0275\u0275text(4, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.sessionSelectionnee.lieu);
  }
}
function SessionsAccepteesComponent_div_18_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 186)(1, "div", 187);
    \u0275\u0275element(2, "i", 188);
    \u0275\u0275text(3, " Instructions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 189);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.sessionSelectionnee.instructions_acces);
  }
}
function SessionsAccepteesComponent_div_18_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "span", 155);
    \u0275\u0275text(2, "Valid\xE9e le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.sessionSelectionnee.date_assignation, "dd/MM/yyyy \xE0 HH:mm"));
  }
}
function SessionsAccepteesComponent_div_18_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "span", 155);
    \u0275\u0275text(2, "Commentaire RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.sessionSelectionnee.notes);
  }
}
function SessionsAccepteesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 123)(2, "div", 124)(3, "div", 125);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h5", 126);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275element(9, "i", 69);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 127);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fermerDetail());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 128)(14, "div", 129)(15, "div", 130);
    \u0275\u0275template(16, SessionsAccepteesComponent_div_18_span_16_Template, 3, 0, "span", 131)(17, SessionsAccepteesComponent_div_18_span_17_Template, 3, 0, "span", 132)(18, SessionsAccepteesComponent_div_18_span_18_Template, 3, 0, "span", 133);
    \u0275\u0275elementStart(19, "span", 134);
    \u0275\u0275element(20, "i", 45);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, SessionsAccepteesComponent_div_18_span_22_Template, 3, 0, "span", 135)(23, SessionsAccepteesComponent_div_18_span_23_Template, 3, 0, "span", 131);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 136)(25, "div", 137);
    \u0275\u0275element(26, "i", 138);
    \u0275\u0275text(27, "Informations de la session ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 139);
    \u0275\u0275template(29, SessionsAccepteesComponent_div_18_div_29_Template, 12, 8, "div", 140)(30, SessionsAccepteesComponent_div_18_div_30_Template, 9, 4, "div", 140)(31, SessionsAccepteesComponent_div_18_div_31_Template, 8, 2, "div", 140)(32, SessionsAccepteesComponent_div_18_div_32_Template, 8, 2, "div", 140);
    \u0275\u0275elementStart(33, "div", 141)(34, "div", 142);
    \u0275\u0275element(35, "i", 143);
    \u0275\u0275elementStart(36, "div")(37, "small");
    \u0275\u0275text(38, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(41, SessionsAccepteesComponent_div_18_div_41_Template, 8, 1, "div", 140);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 136)(43, "div", 137);
    \u0275\u0275element(44, "i", 144);
    \u0275\u0275text(45, "Mon statut de participation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 145);
    \u0275\u0275template(47, SessionsAccepteesComponent_div_18_div_47_Template, 5, 1, "div", 146)(48, SessionsAccepteesComponent_div_18_div_48_Template, 5, 1, "div", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, SessionsAccepteesComponent_div_18_div_49_Template, 9, 8, "div", 147)(50, SessionsAccepteesComponent_div_18_div_50_Template, 3, 0, "div", 148)(51, SessionsAccepteesComponent_div_18_div_51_Template, 6, 0, "div", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 136)(53, "div", 137);
    \u0275\u0275element(54, "i", 150);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, SessionsAccepteesComponent_div_18_ng_container_56_Template, 4, 3, "ng-container", 82)(57, SessionsAccepteesComponent_div_18_div_57_Template, 7, 1, "div", 151)(58, SessionsAccepteesComponent_div_18_div_58_Template, 6, 1, "div", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 136)(60, "div", 137);
    \u0275\u0275element(61, "i", 153);
    \u0275\u0275text(62, "Ma demande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 145)(64, "div", 154)(65, "span", 155);
    \u0275\u0275text(66, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 156);
    \u0275\u0275text(68, "Valid\xE9e");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, SessionsAccepteesComponent_div_18_div_69_Template, 6, 4, "div", 146)(70, SessionsAccepteesComponent_div_18_div_70_Template, 5, 1, "div", 146);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 157)(72, "button", 158);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_18_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fermerDetail());
    });
    \u0275\u0275element(73, "i", 159);
    \u0275\u0275text(74, "Fermer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 160);
    \u0275\u0275listener("click", function SessionsAccepteesComponent_div_18_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToDetail(ctx_r0.sessionSelectionnee.id));
    });
    \u0275\u0275element(76, "i", 161);
    \u0275\u0275text(77, "Voir la page compl\xE8te ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.getTypeGradient(ctx_r0.sessionSelectionnee.type));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getTypeIcon(ctx_r0.sessionSelectionnee.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.sessionSelectionnee.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Demande accept\xE9e le ", \u0275\u0275pipeBind2(11, 32, ctx_r0.sessionSelectionnee.date_assignation, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.est_a_venir);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.sessionSelectionnee.est_termine && !ctx_r0.sessionSelectionnee.est_a_venir);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getTypeIcon(ctx_r0.sessionSelectionnee.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTypeLabel(ctx_r0.sessionSelectionnee.type), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.certificat_delivre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.certificat_obtenu);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.date_debut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.date_fin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.duree_jours);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.lieu);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", ctx_r0.sessionSelectionnee.nombre_inscrits, " / ", ctx_r0.sessionSelectionnee.capacite_max);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.formation_titre);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.statut_inscription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.statut_participation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.sessionSelectionnee.est_termine && ctx_r0.sessionSelectionnee.progression != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.est_termine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.certificat_obtenu);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.sessionSelectionnee.type === "presentiel" ? "isax-buildings-2" : "isax-monitor");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.sessionSelectionnee.type === "presentiel" ? "Acc\xE8s pr\xE9sentiel" : "Acc\xE8s \xE0 la session", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.type !== "presentiel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.type === "presentiel" && ctx_r0.sessionSelectionnee.lieu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.instructions_acces);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.date_assignation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sessionSelectionnee.notes);
  }
}
var SessionsAccepteesComponent = class _SessionsAccepteesComponent {
  formationsService;
  router;
  // ─── Data ───────────────────────────────────────────────
  allSessions = [];
  filteredSessions = [];
  displayedSessions = [];
  // ─── State ──────────────────────────────────────────────
  loading = false;
  error = null;
  // ─── Filtres ────────────────────────────────────────────
  searchTerm = "";
  selectedFiltre = "toutes";
  filtres = [
    { label: "Toutes", value: "toutes", icon: "isax-calendar-1" },
    { label: "\xC0 venir", value: "a_venir", icon: "isax-clock" },
    { label: "En cours", value: "en_cours", icon: "isax-play-circle" },
    { label: "Termin\xE9es", value: "terminees", icon: "isax-medal-star" },
    { label: "Certifiantes", value: "certif", icon: "isax-award" }
  ];
  // ─── Pagination ─────────────────────────────────────────
  currentPage = 1;
  pageSize = 9;
  totalItems = 0;
  totalPages = 1;
  // ─── Modal ──────────────────────────────────────────────
  sessionSelectionnee = null;
  modalInstance = null;
  constructor(formationsService, router) {
    this.formationsService = formationsService;
    this.router = router;
  }
  ngOnInit() {
    this.loadSessions();
  }
  // ════════════════════════════════════════════════════════
  // CHARGEMENT
  // ════════════════════════════════════════════════════════
  loadSessions() {
    this.loading = true;
    this.error = null;
    this.formationsService.getMesSessionsAcceptees().subscribe({
      next: (res) => {
        this.allSessions = res.sessions ?? [];
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        console.error("Erreur sessions:", err);
        this.error = "Impossible de charger vos sessions. Veuillez r\xE9essayer.";
        this.loading = false;
      }
    });
  }
  // ════════════════════════════════════════════════════════
  // FILTRES & RECHERCHE
  // ════════════════════════════════════════════════════════
  onFiltreChange(value) {
    this.selectedFiltre = value;
    this.currentPage = 1;
    this.applyFilters();
  }
  onSearchChange() {
    this.currentPage = 1;
    this.applyFilters();
  }
  applyFilters() {
    let result = [...this.allSessions];
    switch (this.selectedFiltre) {
      case "a_venir":
        result = result.filter((s) => s.est_a_venir && !s.est_termine);
        break;
      case "terminees":
        result = result.filter((s) => s.est_termine);
        break;
      case "en_cours":
        result = result.filter((s) => !s.est_termine && !s.est_a_venir);
        break;
      case "certif":
        result = result.filter((s) => s.certificat_delivre);
        break;
    }
    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter((s) => s.titre?.toLowerCase().includes(q) || s.formation_titre?.toLowerCase().includes(q) || s.lieu?.toLowerCase().includes(q));
    }
    this.filteredSessions = result;
    this.totalItems = result.length;
    this.totalPages = Math.max(1, Math.ceil(result.length / this.pageSize));
    if (this.currentPage > this.totalPages)
      this.currentPage = 1;
    this.updatePage();
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedFiltre = "toutes";
    this.currentPage = 1;
    this.applyFilters();
  }
  get hasActiveFilters() {
    return this.searchTerm.trim() !== "" || this.selectedFiltre !== "toutes";
  }
  // ════════════════════════════════════════════════════════
  // KPI GETTERS
  // ════════════════════════════════════════════════════════
  get totalSessions() {
    return this.allSessions.length;
  }
  get totalAVenir() {
    return this.allSessions.filter((s) => s.est_a_venir && !s.est_termine).length;
  }
  get totalEnCours() {
    return this.allSessions.filter((s) => !s.est_termine && !s.est_a_venir).length;
  }
  get totalTerminees() {
    return this.allSessions.filter((s) => s.est_termine).length;
  }
  get totalCertifiantes() {
    return this.allSessions.filter((s) => s.certificat_delivre).length;
  }
  get totalCertifiees() {
    return this.allSessions.filter((s) => s.certificat_obtenu).length;
  }
  // ════════════════════════════════════════════════════════
  // PAGINATION
  // ════════════════════════════════════════════════════════
  updatePage() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedSessions = this.filteredSessions.slice(start, start + this.pageSize);
  }
  changePage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.updatePage();
  }
  get pages() {
    const delta = 2;
    const range = [];
    for (let i = Math.max(1, this.currentPage - delta); i <= Math.min(this.totalPages, this.currentPage + delta); i++)
      range.push(i);
    return range;
  }
  // ════════════════════════════════════════════════════════
  // MODAL DÉTAIL
  // ════════════════════════════════════════════════════════
  ouvrirDetail(session) {
    this.sessionSelectionnee = session;
    setTimeout(() => {
      const el = document.getElementById("sessionDetailModal");
      if (el) {
        this.modalInstance = new bootstrap.Modal(el);
        this.modalInstance.show();
      }
    }, 50);
  }
  fermerDetail() {
    this.modalInstance?.hide();
    this.sessionSelectionnee = null;
  }
  /** Bouton "Voir la page complète" — route à créer plus tard */
  goToDetail(sessionId) {
    this.fermerDetail();
    this.router.navigate(["/student/sessions", sessionId]);
  }
  // ════════════════════════════════════════════════════════
  // HELPERS UI
  // ════════════════════════════════════════════════════════
  getTypeColor(type) {
    switch (type) {
      case "presentiel":
        return "#0369a1";
      case "distanciel":
        return "#7c3aed";
      case "hybride":
        return "#0d9488";
      default:
        return "#069b8f";
    }
  }
  getTypeGradient(type) {
    return "linear-gradient(135deg, #069b8f, #0ab09f)";
  }
  getTypeIcon(type) {
    switch (type) {
      case "presentiel":
        return "isax isax-buildings-2";
      case "distanciel":
        return "isax isax-monitor";
      case "hybride":
        return "isax isax-element-3";
      default:
        return "isax isax-calendar-1";
    }
  }
  getTypeLabel(type) {
    switch (type) {
      case "presentiel":
        return "Pr\xE9sentiel";
      case "distanciel":
        return "Distanciel";
      case "hybride":
        return "Hybride";
      default:
        return type ?? "Session";
    }
  }
  getStatutInscriptionLabel(statut) {
    switch (statut) {
      case "inscrit":
        return "Inscrit";
      case "confirme":
        return "Confirm\xE9";
      case "annule":
        return "Annul\xE9";
      default:
        return statut;
    }
  }
  getStatutParticipationLabel(statut) {
    switch (statut) {
      case "non_commence":
        return "Non commenc\xE9";
      case "en_cours":
        return "En cours";
      case "termine":
        return "Termin\xE9";
      case "absent":
        return "Absent";
      default:
        return statut;
    }
  }
  /** Vérifie si une chaîne est une URL directe */
  isUrl(value) {
    if (!value)
      return false;
    return /^https?:\/\//i.test(value.trim());
  }
  /** Extrait la première URL dans un texte mixte */
  extractUrl(value) {
    if (!value)
      return null;
    const match = value.match(/https?:\/\/[^\s]+/i);
    return match ? match[0] : null;
  }
  static \u0275fac = function SessionsAccepteesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionsAccepteesComponent)(\u0275\u0275directiveInject(FormationsService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SessionsAccepteesComponent, selectors: [["app-sessions-acceptees"]], decls: 19, vars: 11, consts: [[1, "sc-header"], [1, "sc-header__left"], [1, "sc-header__title"], [1, "sc-header__subtitle"], ["class", "sc-header__right", 4, "ngIf"], ["class", "pq-kpi-grid mb-4", 4, "ngIf"], ["class", "sc-filters", 4, "ngIf"], ["class", "sc-results-info", 4, "ngIf"], ["class", "sc-loading", 4, "ngIf"], ["class", "sc-error", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["class", "sc-empty", 4, "ngIf"], ["class", "sc-pagination", 4, "ngIf"], ["id", "sessionDetailModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], ["class", "modal-content lms-modal", 4, "ngIf"], [1, "sc-header__right"], [1, "sc-header__count"], [1, "isax", "isax-calendar-1"], [1, "pq-kpi-grid", "mb-4"], [1, "pq-kpi-card", "pq-kpi-card--teal", 3, "click"], [1, "pq-kpi-card__icon"], [1, "pq-kpi-card__body"], [1, "pq-kpi-card__value"], [1, "pq-kpi-card__label"], [1, "pq-kpi-card", "pq-kpi-card--blue", 3, "click"], [1, "isax", "isax-clock"], [1, "pq-kpi-card", "pq-kpi-card--indigo", 3, "click"], [1, "isax", "isax-play-circle"], [1, "pq-kpi-card", "pq-kpi-card--green", 3, "click"], [1, "isax", "isax-medal-star"], [1, "pq-kpi-card", "pq-kpi-card--orange", 3, "click"], [1, "isax", "isax-award"], [1, "pq-kpi-card", "pq-kpi-card--purple", 3, "click"], [1, "sc-filters"], [1, "sc-filters__search"], [1, "isax", "isax-search-normal", "sc-filters__search-icon"], ["type", "text", "placeholder", "Rechercher une session...", 1, "sc-filters__search-input", 3, "ngModelChange", "ngModel"], ["class", "sc-filters__search-clear", 3, "click", 4, "ngIf"], [1, "sc-filters__types"], ["class", "sc-filters__type-btn", 3, "sc-filters__type-btn--active", "click", 4, "ngFor", "ngForOf"], ["class", "sc-filters__reset", 3, "click", 4, "ngIf"], [1, "sc-filters__search-clear", 3, "click"], [1, "isax", "isax-close-circle"], [1, "sc-filters__type-btn", 3, "click"], [1, "isax", "me-1", 3, "ngClass"], ["class", "sc-filters__type-count", 4, "ngIf"], [1, "sc-filters__type-count"], [1, "sc-filters__reset", 3, "click"], [1, "isax", "isax-refresh"], [1, "sc-results-info"], [1, "isax", "isax-filter"], [1, "sc-results-info__clear", 3, "click"], [1, "sc-loading"], [1, "sc-loading__spinner"], [1, "sc-error"], [1, "isax", "isax-warning-2", "sc-error__icon"], [1, "sc-error__retry", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [1, "row", "g-4"], ["class", "col-xl-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "col-md-6"], [1, "session-card", 3, "click"], [1, "session-card__banner"], [1, "session-card__banner-bg"], [1, "session-card__banner-overlay"], ["class", "session-card__banner-termine", 4, "ngIf"], ["class", "session-card__banner-avenir", 4, "ngIf"], [1, "session-card__banner-assigned"], [1, "isax", "isax-send-2", "me-1"], [1, "session-card__banner-badge"], [1, "session-card__body"], [1, "session-card__title"], [1, "session-card__description"], [1, "session-card__stats"], ["class", "session-card__stat", 4, "ngIf"], ["class", "session-card__stat session-card__stat--award", 4, "ngIf"], ["class", "session-card__progression", 4, "ngIf"], [1, "session-card__assignation"], ["class", "session-card__assignation-date", 4, "ngIf"], [1, "session-card__footer"], [1, "session-card__btn"], [4, "ngIf"], [1, "isax", "isax-arrow-right-3"], [1, "session-card__banner-termine"], [1, "isax", "isax-medal-star", "me-1"], [1, "session-card__banner-avenir"], [1, "isax", "isax-clock", "me-1"], [1, "session-card__stat"], [1, "isax", "isax-calendar-2"], [1, "isax", "isax-location"], [1, "session-card__stat", "session-card__stat--award"], [1, "session-card__progression"], ["class", "session-card__termine", 4, "ngIf"], [1, "session-card__termine"], [1, "session-card__prog-header"], [1, "session-card__prog-label"], [1, "session-card__prog-pct"], [1, "session-card__prog-bar"], [1, "session-card__prog-fill"], [1, "session-card__assignation-date"], [1, "isax", "isax-calendar-2", "me-1"], [1, "isax", "isax-tick-circle", "me-1"], [1, "isax", "isax-calendar-1", "me-1"], [1, "isax", "isax-play-circle", "me-1"], [1, "sc-empty"], [1, "isax", "isax-calendar-1", "sc-empty__icon"], [1, "sc-empty__title"], [1, "isax", "isax-search-normal", "sc-empty__icon"], [1, "sc-empty__btn", 3, "click"], [1, "sc-pagination"], [1, "sc-pagination__info"], [1, "sc-pagination__info-total"], [1, "sc-pagination__controls"], [1, "sc-pagination__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-3"], [1, "isax", "isax-arrow-left-2"], ["class", "sc-pagination__ellipsis", 4, "ngIf"], ["class", "sc-pagination__btn", 3, "sc-pagination__btn--active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-2"], [1, "sc-pagination__ellipsis"], [1, "sc-pagination__btn", 3, "click"], [1, "modal-content", "lms-modal"], [1, "modal-header", "lms-modal__header"], [1, "d-flex", "align-items-center", "gap-3"], [1, "lms-modal__icon"], [1, "modal-title", "mb-0"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body", "lms-modal__body"], [1, "lms-detail-chips", "mb-4"], [1, "lms-detail-chips__left", "gap-2", "flex-wrap"], ["class", "lms-meta-chip lms-meta-chip--success", 4, "ngIf"], ["class", "lms-meta-chip lms-meta-chip--teal", 4, "ngIf"], ["class", "lms-meta-chip", 4, "ngIf"], [1, "lms-meta-chip", "lms-meta-chip--teal"], ["class", "lms-meta-chip lms-meta-chip--award", 4, "ngIf"], [1, "lms-detail-section", "mb-3"], [1, "lms-detail-section__title"], [1, "isax", "isax-calendar-1", "me-2"], [1, "row", "g-2", "mt-2"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-6"], [1, "lms-info-item"], [1, "isax", "isax-people", 2, "color", "#069b8f"], [1, "isax", "isax-chart", "me-2"], [1, "cd-demande-detail", "mt-2"], ["class", "cd-demande-row", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], ["class", "session-card__termine mt-3", 4, "ngIf"], ["class", "lms-detail-section lms-detail-section--success mt-3", 4, "ngIf"], [1, "isax", "me-2", 3, "ngClass"], ["class", "lms-info-item mt-2", 4, "ngIf"], ["class", "lms-formation-desc mt-2", 4, "ngIf"], [1, "isax", "isax-send-2", "me-2"], [1, "cd-demande-row"], [1, "cd-demande-label"], [1, "sc-statut", "statut-validee"], [1, "modal-footer", "lms-modal__footer", "lms-modal__footer--split"], [1, "btn", "lms-btn-cancel", 3, "click"], [1, "isax", "isax-close-square", "me-1"], [1, "btn", "lms-btn-submit", 3, "click"], [1, "isax", "isax-arrow-right-3", "me-1"], [1, "lms-meta-chip", "lms-meta-chip--success"], [1, "lms-meta-chip"], [1, "lms-meta-chip", "lms-meta-chip--award"], [1, "isax", "isax-award", "me-1"], [1, "isax", "isax-calendar-2", 2, "color", "#069b8f"], [1, "text-muted", "small", "ms-1"], [1, "isax", "isax-calendar-tick", 2, "color", "#069b8f"], [1, "isax", "isax-clock", 2, "color", "#069b8f"], [1, "isax", "isax-location", 2, "color", "#069b8f"], [1, "isax", "isax-book-1", 2, "color", "#069b8f"], [1, "mt-3"], [1, "session-card__termine", "mt-3"], [1, "lms-detail-section", "lms-detail-section--success", "mt-3"], [1, "isax", "isax-medal-star", "me-2"], [1, "lms-detail-section__body"], ["class", "lms-access-link mt-2", 4, "ngIf"], ["class", "lms-access-pending mt-2", 4, "ngIf"], [1, "lms-access-link", "mt-2"], [1, "isax", "isax-video", 2, "color", "#069b8f"], ["target", "_blank", "rel", "noopener", 1, "lms-access-link__url", 3, "click", "href"], [1, "isax", "isax-export-2", "me-1"], [1, "d-block", "mt-1", 2, "font-size", ".78rem", "color", "#6b7280"], [1, "lms-access-pending", "mt-2"], [1, "lms-info-item", "mt-2"], [1, "lms-formation-desc", "mt-2"], [1, "lms-formation-desc__label"], [1, "isax", "isax-info-circle"], [1, "lms-formation-desc__text"]], template: function SessionsAccepteesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Mes Sessions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Sessions assign\xE9es et demandes accept\xE9es par votre entreprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, SessionsAccepteesComponent_div_6_Template, 4, 2, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, SessionsAccepteesComponent_div_7_Template, 49, 18, "div", 5)(8, SessionsAccepteesComponent_div_8_Template, 8, 4, "div", 6)(9, SessionsAccepteesComponent_div_9_Template, 6, 2, "div", 7)(10, SessionsAccepteesComponent_div_10_Template, 4, 0, "div", 8)(11, SessionsAccepteesComponent_div_11_Template, 7, 1, "div", 9)(12, SessionsAccepteesComponent_div_12_Template, 2, 1, "div", 10)(13, SessionsAccepteesComponent_div_13_Template, 6, 0, "div", 11)(14, SessionsAccepteesComponent_div_14_Template, 9, 0, "div", 11)(15, SessionsAccepteesComponent_div_15_Template, 17, 10, "div", 12);
      \u0275\u0275elementStart(16, "div", 13)(17, "div", 14);
      \u0275\u0275template(18, SessionsAccepteesComponent_div_18_Template, 78, 35, "div", 15);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.allSessions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.allSessions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.allSessions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.hasActiveFilters && ctx.filteredSessions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.displayedSessions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.allSessions.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.allSessions.length > 0 && ctx.filteredSessions.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.totalPages > 1);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.sessionSelectionnee);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ["\n\n.pq-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n}\n.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: currentColor;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n}\n.pq-kpi-card__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.pq-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1f2937;\n  line-height: 1;\n}\n.pq-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%] {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%] {\n  border-top-color: #16a34a;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.pq-kpi-card--green.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n}\n.pq-kpi-card--blue[_ngcontent-%COMP%] {\n  border-top-color: #0369a1;\n}\n.pq-kpi-card--blue[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #0369a1;\n}\n.pq-kpi-card--blue.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #0369a1;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%] {\n  border-top-color: #f59e0b;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.pq-kpi-card--orange.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n}\n.pq-kpi-card--purple[_ngcontent-%COMP%] {\n  border-top-color: #7c3aed;\n}\n.pq-kpi-card--purple[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.pq-kpi-card--purple.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #7c3aed;\n}\n.pq-kpi-card--indigo[_ngcontent-%COMP%] {\n  border-top-color: #4f46e5;\n}\n.pq-kpi-card--indigo[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.pq-kpi-card--indigo.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n}\n.sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 28px;\n}\n.sc-header__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.sc-header__subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n}\n.sc-header__count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(6, 155, 143, 0.08);\n  color: #069b8f;\n  border: 1px solid rgba(6, 155, 143, 0.2);\n  border-radius: 20px;\n  padding: 6px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.sc-header__count[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.sc-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.sc-filters__search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n  max-width: 320px;\n}\n.sc-filters__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 0.9rem;\n}\n.sc-filters__search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 36px 9px 36px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  background: #ffffff;\n  transition: all 0.2s ease;\n}\n.sc-filters__search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.sc-filters__search-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.sc-filters__search-clear[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.sc-filters__types[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.sc-filters__type-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #ffffff;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__type-btn[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.sc-filters__type-btn--active[_ngcontent-%COMP%] {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #ffffff !important;\n}\n.sc-filters__type-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 3px;\n  opacity: 0.8;\n}\n.sc-filters__reset[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: 1.5px solid rgba(220, 38, 38, 0.3);\n  border-radius: 8px;\n  background: rgba(220, 38, 38, 0.05);\n  color: #dc2626;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-filters__reset[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.1);\n}\n.sc-results-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.sc-results-info__clear[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #069b8f;\n  font-size: 0.85rem;\n  cursor: pointer;\n  text-decoration: underline;\n  padding: 0;\n}\n.sc-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n}\n.sc-loading__spinner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  margin-bottom: 14px;\n}\n.sc-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sc-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n}\n.sc-error__icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #dc2626;\n  margin-bottom: 12px;\n}\n.sc-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.sc-error__retry[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  background: #069b8f;\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n}\n.sc-error__retry[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.sc-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.sc-empty__icon[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  color: #9ca3af;\n  margin-bottom: 16px;\n}\n.sc-empty__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 8px;\n}\n.sc-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n  max-width: 340px;\n}\n.sc-empty__btn[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 9px 20px;\n  background: #069b8f;\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n}\n.sc-empty__btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.session-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  background: #ffffff;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.session-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n}\n.session-card[_ngcontent-%COMP%]:hover   .session-card__btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.session-card__banner[_ngcontent-%COMP%] {\n  position: relative;\n  height: 160px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      #0ab09f 60%,\n      #04c4b0 100%);\n}\n.session-card__banner-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: 0.2;\n}\n.session-card__banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      160deg,\n      rgba(0, 0, 0, 0.1) 0%,\n      rgba(0, 0, 0, 0.3) 100%);\n}\n.session-card__banner-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  left: 16px;\n  font-size: 2.2rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n.session-card__banner-termine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #16a34a;\n  color: #ffffff;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  box-shadow: 0 2px 6px rgba(22, 163, 74, 0.4);\n}\n.session-card__banner-avenir[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #0369a1;\n  color: #ffffff;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  box-shadow: 0 2px 6px rgba(3, 105, 161, 0.4);\n}\n.session-card__banner-assigned[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.18);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  color: #ffffff;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n}\n.session-card__banner-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  color: #ffffff;\n  border-radius: 6px;\n  padding: 4px 12px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  background: rgba(255, 255, 255, 0.22);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.session-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 16px;\n}\n.session-card__title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.session-card__description[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  margin-bottom: 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  flex: 1;\n}\n.session-card__stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.session-card__stat[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #f3f4f6;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.session-card__stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n  font-size: 0.85rem;\n}\n.session-card__stat--award[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.session-card__progression[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.session-card__termine[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n  border-radius: 8px;\n  padding: 6px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  width: 100%;\n  justify-content: center;\n}\n.session-card__prog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.session-card__prog-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.session-card__prog-pct[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.session-card__prog-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.session-card__prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #069b8f;\n  border-radius: 99px;\n  transition: width 0.5s ease;\n}\n.session-card__assignation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  margin-bottom: 12px;\n}\n.session-card__assignation-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n}\n.session-card__assignation-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #069b8f;\n}\n.session-card__footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 4px;\n}\n.session-card__btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  background: #069b8f;\n  color: #ffffff;\n}\n.session-card__btn--done[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.session-card__btn--avenir[_ngcontent-%COMP%] {\n  background: #0369a1;\n}\n.session-card__btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateX(2px);\n}\n.sc-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 32px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.sc-pagination__info[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6b7280;\n}\n.sc-pagination__info-total[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-left: 4px;\n}\n.sc-pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sc-pagination__btn[_ngcontent-%COMP%] {\n  min-width: 36px;\n  height: 36px;\n  padding: 0 10px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #6b7280;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sc-pagination__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.sc-pagination__btn--active[_ngcontent-%COMP%] {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #ffffff !important;\n  font-weight: 700;\n}\n.sc-pagination__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.sc-pagination__ellipsis[_ngcontent-%COMP%] {\n  line-height: 36px;\n  color: #9ca3af;\n  padding: 0 4px;\n}\n.lms-modal[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.lms-modal__header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  color: #ffffff;\n  border: none;\n}\n.lms-modal__header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n}\n.lms-modal__header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.78rem;\n}\n.lms-modal__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lms-modal__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #ffffff;\n}\n.lms-modal__body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.lms-modal__footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: #f3f4f6;\n  border-top: 1px solid #e5e7eb;\n}\n.lms-modal__footer--split[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.lms-detail-chips[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.lms-detail-chips__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.lms-meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.lms-meta-chip--success[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n}\n.lms-meta-chip--teal[_ngcontent-%COMP%] {\n  background: rgba(13, 148, 136, 0.1);\n  color: #0d9488;\n}\n.lms-meta-chip--warning[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.lms-meta-chip--award[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.lms-detail-section[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  border-radius: 8px;\n  padding: 14px 16px;\n}\n.lms-detail-section__title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1f2937;\n  display: flex;\n  align-items: center;\n}\n.lms-detail-section__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.lms-detail-section__body[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin: 6px 0 0;\n}\n.lms-detail-section--success[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.07);\n  border-left: 3px solid #16a34a;\n}\n.lms-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.lms-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-top: 2px;\n}\n.lms-info-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  color: #9ca3af;\n  margin-bottom: 2px;\n}\n.lms-info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.cd-demande-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cd-demande-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  border-bottom: 1px solid #e5e7eb;\n  font-size: 0.85rem;\n}\n.cd-demande-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cd-demande-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 0.8rem;\n}\n.sc-statut[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.statut-validee[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n}\n.lms-formation-desc[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 12px;\n}\n.lms-formation-desc__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #069b8f;\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.lms-formation-desc__text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n.lms-access-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(6, 155, 143, 0.06);\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n  border-radius: 8px;\n  padding: 12px;\n}\n.lms-access-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-top: 2px;\n}\n.lms-access-link[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.lms-access-link__url[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: #069b8f;\n  font-weight: 700;\n  font-size: 0.875rem;\n  text-decoration: none;\n}\n.lms-access-link__url[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.lms-access-link__url[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.lms-access-pending[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(217, 119, 6, 0.08);\n  border: 1.5px solid rgba(217, 119, 6, 0.25);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.85rem;\n  color: #92400e;\n}\n.lms-access-pending[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #d97706;\n}\n.lms-btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n}\n.lms-btn-cancel[_ngcontent-%COMP%]:hover {\n  border-color: #dc2626;\n  color: #dc2626;\n}\n.lms-btn-submit[_ngcontent-%COMP%] {\n  padding: 9px 22px;\n  background: #069b8f;\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n}\n.lms-btn-submit[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n@media (max-width: 767px) {\n  .sc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .sc-header__title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .sc-header__subtitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sc-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .sc-filters__search[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .sc-filters__type-btn[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 6px 10px;\n  }\n  .pq-kpi-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=sessions-acceptees.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionsAccepteesComponent, [{
    type: Component,
    args: [{ selector: "app-sessions-acceptees", standalone: true, imports: [CommonModule, FormsModule, DatePipe, DecimalPipe], template: `<!-- HEADER -->\r
<div class="sc-header">\r
  <div class="sc-header__left">\r
    <h1 class="sc-header__title">Mes Sessions</h1>\r
    <p class="sc-header__subtitle">Sessions assign\xE9es et demandes accept\xE9es par votre entreprise</p>\r
  </div>\r
  <div class="sc-header__right" *ngIf="!loading && allSessions.length > 0">\r
    <span class="sc-header__count">\r
      <i class="isax isax-calendar-1"></i>\r
      {{ totalItems }} session{{ totalItems > 1 ? 's' : '' }}\r
    </span>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- KPI INDICATORS \u2014 m\xEAme style que parcours/catalogues -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="pq-kpi-grid mb-4" *ngIf="!loading && allSessions.length > 0">\r
\r
  <!-- Total -->\r
  <div class="pq-kpi-card pq-kpi-card--teal" (click)="onFiltreChange('toutes')"\r
       [class.pq-kpi-card--active]="selectedFiltre === 'toutes'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-calendar-1"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalSessions }}</div>\r
      <div class="pq-kpi-card__label">Total</div>\r
    </div>\r
  </div>\r
\r
  <!-- \xC0 venir -->\r
  <div class="pq-kpi-card pq-kpi-card--blue" (click)="onFiltreChange('a_venir')"\r
       [class.pq-kpi-card--active]="selectedFiltre === 'a_venir'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-clock"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalAVenir }}</div>\r
      <div class="pq-kpi-card__label">\xC0 venir</div>\r
    </div>\r
  </div>\r
\r
  <!-- En cours -->\r
  <div class="pq-kpi-card pq-kpi-card--indigo" (click)="onFiltreChange('en_cours')"\r
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
  <!-- Termin\xE9es -->\r
  <div class="pq-kpi-card pq-kpi-card--green" (click)="onFiltreChange('terminees')"\r
       [class.pq-kpi-card--active]="selectedFiltre === 'terminees'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-medal-star"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalTerminees }}</div>\r
      <div class="pq-kpi-card__label">Termin\xE9es</div>\r
    </div>\r
  </div>\r
\r
  <!-- Certifiantes -->\r
  <div class="pq-kpi-card pq-kpi-card--orange" (click)="onFiltreChange('certif')"\r
       [class.pq-kpi-card--active]="selectedFiltre === 'certif'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-award"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalCertifiantes }}</div>\r
      <div class="pq-kpi-card__label">Certifiantes</div>\r
    </div>\r
  </div>\r
\r
  <!-- Certificats obtenus -->\r
  <div class="pq-kpi-card pq-kpi-card--purple" (click)="onFiltreChange('toutes')"\r
       [class.pq-kpi-card--active]="false">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-medal-star"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalCertifiees }}</div>\r
      <div class="pq-kpi-card__label">Certifi\xE9es</div>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- FILTRES -->\r
<div class="sc-filters" *ngIf="!loading && allSessions.length > 0">\r
  <div class="sc-filters__search">\r
    <i class="isax isax-search-normal sc-filters__search-icon"></i>\r
    <input type="text" class="sc-filters__search-input"\r
           placeholder="Rechercher une session..."\r
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
      <span class="sc-filters__type-count" *ngIf="f.value === 'a_venir'   && totalAVenir      > 0">({{ totalAVenir }})</span>\r
      <span class="sc-filters__type-count" *ngIf="f.value === 'en_cours'  && totalEnCours     > 0">({{ totalEnCours }})</span>\r
      <span class="sc-filters__type-count" *ngIf="f.value === 'terminees' && totalTerminees   > 0">({{ totalTerminees }})</span>\r
      <span class="sc-filters__type-count" *ngIf="f.value === 'certif'    && totalCertifiantes > 0">({{ totalCertifiantes }})</span>\r
    </button>\r
  </div>\r
\r
  <button class="sc-filters__reset" *ngIf="hasActiveFilters" (click)="clearFilters()">\r
    <i class="isax isax-refresh"></i> R\xE9initialiser\r
  </button>\r
</div>\r
\r
<!-- R\xC9SULTAT FILTRE -->\r
<div class="sc-results-info" *ngIf="!loading && hasActiveFilters && filteredSessions.length > 0">\r
  <i class="isax isax-filter"></i>\r
  <span>{{ totalItems }} r\xE9sultat{{ totalItems > 1 ? 's' : '' }}</span>\r
  <button class="sc-results-info__clear" (click)="clearFilters()">Effacer les filtres</button>\r
</div>\r
\r
<!-- LOADER -->\r
<div class="sc-loading" *ngIf="loading">\r
  <div class="sc-loading__spinner"></div>\r
  <p>Chargement de vos sessions...</p>\r
</div>\r
\r
<!-- ERREUR -->\r
<div class="sc-error" *ngIf="error && !loading">\r
  <i class="isax isax-warning-2 sc-error__icon"></i>\r
  <p>{{ error }}</p>\r
  <button class="sc-error__retry" (click)="loadSessions()">\r
    <i class="isax isax-refresh me-1"></i> R\xE9essayer\r
  </button>\r
</div>\r
\r
<!-- GRILLE SESSIONS -->\r
<div class="row g-4" *ngIf="!loading && displayedSessions.length > 0">\r
  <div class="col-xl-4 col-md-6" *ngFor="let session of displayedSessions">\r
    <div class="session-card"\r
         [class.session-card--termine]="session.est_termine"\r
         [class.session-card--a-venir]="session.est_a_venir"\r
         (click)="ouvrirDetail(session)">\r
\r
      <!-- BANNI\xC8RE -->\r
      <div class="session-card__banner">\r
        <div class="session-card__banner-bg"\r
             [style.background-image]="session.image_couverture ? 'url(' + session.image_couverture + ')' : 'none'">\r
        </div>\r
        <div class="session-card__banner-overlay"></div>\r
        <i [class]="getTypeIcon(session.type) + ' session-card__banner-icon'"></i>\r
\r
        <!-- Badge Compl\xE9t\xE9 -->\r
        <div class="session-card__banner-termine" *ngIf="session.est_termine">\r
          <i class="isax isax-medal-star me-1"></i>Compl\xE9t\xE9\r
        </div>\r
\r
        <!-- Badge \xC0 venir -->\r
        <div class="session-card__banner-avenir" *ngIf="session.est_a_venir && !session.est_termine">\r
          <i class="isax isax-clock me-1"></i>\xC0 venir\r
        </div>\r
\r
        <!-- Badge source -->\r
        <span class="session-card__banner-assigned">\r
          <i class="isax isax-send-2 me-1"></i>Demande accept\xE9e\r
        </span>\r
\r
        <!-- Badge type -->\r
        <span class="session-card__banner-badge">\r
          {{ getTypeLabel(session.type) }}\r
        </span>\r
      </div>\r
\r
      <!-- BODY -->\r
      <div class="session-card__body">\r
        <h5 class="session-card__title">{{ session.titre }}</h5>\r
        <p class="session-card__description">\r
          {{ session.description || 'Aucune description disponible' }}\r
        </p>\r
\r
        <!-- Stats -->\r
        <div class="session-card__stats">\r
          <div class="session-card__stat" *ngIf="session.date_debut">\r
            <i class="isax isax-calendar-2"></i>\r
            <span>{{ session.date_debut | date:'dd/MM/yyyy' }}</span>\r
          </div>\r
          <div class="session-card__stat" *ngIf="session.duree_jours">\r
            <i class="isax isax-clock"></i>\r
            <span>{{ session.duree_jours }} jour{{ session.duree_jours > 1 ? 's' : '' }}</span>\r
          </div>\r
          <div class="session-card__stat" *ngIf="session.lieu">\r
            <i class="isax isax-location"></i>\r
            <span>{{ session.lieu }}</span>\r
          </div>\r
          <div class="session-card__stat session-card__stat--award" *ngIf="session.certificat_delivre">\r
            <i class="isax isax-award"></i>\r
            <span>Certifiante</span>\r
          </div>\r
        </div>\r
\r
        <!-- PROGRESSION / \xC9TAT -->\r
        <div class="session-card__progression" *ngIf="session.est_termine || session.progression != null">\r
          <div class="session-card__termine" *ngIf="session.est_termine">\r
            <i class="isax isax-medal-star me-1"></i>Session compl\xE9t\xE9e !\r
          </div>\r
          <div *ngIf="!session.est_termine && session.progression != null">\r
            <div class="session-card__prog-header">\r
              <span class="session-card__prog-label">Progression</span>\r
              <span class="session-card__prog-pct"\r
                    [style.color]="session.progression > 0 ? '#069b8f' : '#9ca3af'">\r
                {{ session.progression | number:'1.0-0' }}%\r
              </span>\r
            </div>\r
            <div class="session-card__prog-bar">\r
              <div class="session-card__prog-fill" [style.width.%]="session.progression"></div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Dates -->\r
        <div class="session-card__assignation">\r
          <div class="session-card__assignation-date" *ngIf="session.date_debut">\r
            <i class="isax isax-calendar-2 me-1"></i>\r
            {{ session.date_debut | date:'dd/MM/yyyy' }}\r
            <span *ngIf="session.date_fin"> \u2192 {{ session.date_fin | date:'dd/MM/yyyy' }}</span>\r
          </div>\r
          <div class="session-card__assignation-date" *ngIf="session.date_assignation">\r
            <i class="isax isax-tick-circle me-1"></i>\r
            Valid\xE9e le {{ session.date_assignation | date:'dd/MM/yyyy' }}\r
          </div>\r
        </div>\r
\r
        <!-- Footer -->\r
        <div class="session-card__footer">\r
          <button class="session-card__btn"\r
                  [class.session-card__btn--done]="session.est_termine"\r
                  [class.session-card__btn--avenir]="session.est_a_venir && !session.est_termine">\r
            <ng-container *ngIf="session.est_termine">\r
              <i class="isax isax-medal-star me-1"></i>Revoir la session\r
            </ng-container>\r
            <ng-container *ngIf="!session.est_termine && session.est_a_venir">\r
              <i class="isax isax-calendar-1 me-1"></i>Voir les d\xE9tails\r
            </ng-container>\r
            <ng-container *ngIf="!session.est_termine && !session.est_a_venir">\r
              <i class="isax isax-play-circle me-1"></i>Acc\xE9der \xE0 la session\r
            </ng-container>\r
            <i class="isax isax-arrow-right-3"></i>\r
          </button>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- EMPTY -->\r
<div class="sc-empty" *ngIf="!loading && !error && allSessions.length === 0">\r
  <i class="isax isax-calendar-1 sc-empty__icon"></i>\r
  <h6 class="sc-empty__title">Aucune session disponible</h6>\r
  <p>Vous n'avez pas encore de sessions dont la demande a \xE9t\xE9 accept\xE9e.</p>\r
</div>\r
\r
<div class="sc-empty" *ngIf="!loading && !error && allSessions.length > 0 && filteredSessions.length === 0">\r
  <i class="isax isax-search-normal sc-empty__icon"></i>\r
  <h6 class="sc-empty__title">Aucun r\xE9sultat</h6>\r
  <p>Aucune session ne correspond \xE0 votre recherche.</p>\r
  <button class="sc-empty__btn" (click)="clearFilters()">\r
    <i class="isax isax-refresh me-1"></i> R\xE9initialiser les filtres\r
  </button>\r
</div>\r
\r
<!-- PAGINATION -->\r
<div class="sc-pagination" *ngIf="!loading && totalPages > 1">\r
  <span class="sc-pagination__info">\r
    Page {{ currentPage }} / {{ totalPages }}\r
    <span class="sc-pagination__info-total">({{ totalItems }} sessions)</span>\r
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
</div>\r
\r
\r
<!-- ============================================================= -->\r
<!-- MODAL D\xC9TAIL SESSION ACCEPT\xC9E                                 -->\r
<!-- ============================================================= -->\r
<div class="modal fade" id="sessionDetailModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">\r
    <div class="modal-content lms-modal" *ngIf="sessionSelectionnee">\r
\r
      <!-- Header color\xE9 selon type -->\r
      <div class="modal-header lms-modal__header"\r
           [style.background]="getTypeGradient(sessionSelectionnee.type)">\r
        <div class="d-flex align-items-center gap-3">\r
          <div class="lms-modal__icon">\r
            <i [class]="getTypeIcon(sessionSelectionnee.type)"></i>\r
          </div>\r
          <div>\r
            <h5 class="modal-title mb-0">{{ sessionSelectionnee.titre }}</h5>\r
            <small>\r
              <i class="isax isax-send-2 me-1"></i>Demande accept\xE9e le\r
              {{ sessionSelectionnee.date_assignation | date:'dd/MM/yyyy' }}\r
            </small>\r
          </div>\r
        </div>\r
        <button type="button" class="btn-close btn-close-white" (click)="fermerDetail()"></button>\r
      </div>\r
\r
      <div class="modal-body lms-modal__body">\r
\r
        <!-- Chips statut -->\r
        <div class="lms-detail-chips mb-4">\r
          <div class="lms-detail-chips__left gap-2 flex-wrap">\r
\r
            <!-- Statut session -->\r
            <span class="lms-meta-chip lms-meta-chip--success" *ngIf="sessionSelectionnee.est_termine">\r
              <i class="isax isax-medal-star me-1"></i>Compl\xE9t\xE9e\r
            </span>\r
            <span class="lms-meta-chip lms-meta-chip--teal" *ngIf="sessionSelectionnee.est_a_venir">\r
              <i class="isax isax-clock me-1"></i>\xC0 venir\r
            </span>\r
            <span class="lms-meta-chip" *ngIf="!sessionSelectionnee.est_termine && !sessionSelectionnee.est_a_venir">\r
              <i class="isax isax-play-circle me-1"></i>En cours\r
            </span>\r
\r
            <!-- Type -->\r
            <span class="lms-meta-chip lms-meta-chip--teal">\r
              <i class="isax me-1" [ngClass]="getTypeIcon(sessionSelectionnee.type)"></i>\r
              {{ getTypeLabel(sessionSelectionnee.type) }}\r
            </span>\r
\r
            <!-- Certifiante -->\r
            <span class="lms-meta-chip lms-meta-chip--award" *ngIf="sessionSelectionnee.certificat_delivre">\r
              <i class="isax isax-award me-1"></i>Certifiante\r
            </span>\r
\r
            <!-- Certificat obtenu -->\r
            <span class="lms-meta-chip lms-meta-chip--success"\r
                  *ngIf="sessionSelectionnee.certificat_obtenu">\r
              <i class="isax isax-medal-star me-1"></i>Certificat obtenu\r
            </span>\r
\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <!-- SECTION 1 \u2014 Informations de la session    -->\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div class="lms-detail-section mb-3">\r
          <div class="lms-detail-section__title">\r
            <i class="isax isax-calendar-1 me-2"></i>Informations de la session\r
          </div>\r
\r
          <div class="row g-2 mt-2">\r
\r
            <div class="col-md-6" *ngIf="sessionSelectionnee.date_debut">\r
              <div class="lms-info-item">\r
                <i class="isax isax-calendar-2" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Date de d\xE9but</small>\r
                  <strong>{{ sessionSelectionnee.date_debut | date:'dd/MM/yyyy' }}\r
                    <span class="text-muted small ms-1">\r
                      {{ sessionSelectionnee.date_debut | date:'HH:mm' }}\r
                    </span>\r
                  </strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6" *ngIf="sessionSelectionnee.date_fin">\r
              <div class="lms-info-item">\r
                <i class="isax isax-calendar-tick" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Date de fin</small>\r
                  <strong>{{ sessionSelectionnee.date_fin | date:'dd/MM/yyyy' }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6" *ngIf="sessionSelectionnee.duree_jours">\r
              <div class="lms-info-item">\r
                <i class="isax isax-clock" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Dur\xE9e</small>\r
                  <strong>{{ sessionSelectionnee.duree_jours }} jour{{ sessionSelectionnee.duree_jours > 1 ? 's' : '' }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6" *ngIf="sessionSelectionnee.lieu">\r
              <div class="lms-info-item">\r
                <i class="isax isax-location" style="color:#069b8f"></i>\r
                <div>\r
                  <small>{{ sessionSelectionnee.type === 'distanciel' ? 'Lien de connexion' : 'Lieu' }}</small>\r
                  <strong>{{ sessionSelectionnee.lieu }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6">\r
              <div class="lms-info-item">\r
                <i class="isax isax-people" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Participants</small>\r
                  <strong>{{ sessionSelectionnee.nombre_inscrits }} / {{ sessionSelectionnee.capacite_max }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6" *ngIf="sessionSelectionnee.formation_titre">\r
              <div class="lms-info-item">\r
                <i class="isax isax-book-1" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Formation associ\xE9e</small>\r
                  <strong>{{ sessionSelectionnee.formation_titre }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <!-- SECTION 2 \u2014 Mon statut de participation   -->\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div class="lms-detail-section mb-3">\r
          <div class="lms-detail-section__title">\r
            <i class="isax isax-chart me-2"></i>Mon statut de participation\r
          </div>\r
\r
          <div class="cd-demande-detail mt-2">\r
            <div class="cd-demande-row" *ngIf="sessionSelectionnee.statut_inscription">\r
              <span class="cd-demande-label">Statut inscription</span>\r
              <span>{{ getStatutInscriptionLabel(sessionSelectionnee.statut_inscription) }}</span>\r
            </div>\r
            <div class="cd-demande-row" *ngIf="sessionSelectionnee.statut_participation">\r
              <span class="cd-demande-label">Statut participation</span>\r
              <span>{{ getStatutParticipationLabel(sessionSelectionnee.statut_participation) }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- Barre de progression -->\r
          <div class="mt-3" *ngIf="!sessionSelectionnee.est_termine && sessionSelectionnee.progression != null">\r
            <div class="session-card__prog-header">\r
              <span class="session-card__prog-label">Progression</span>\r
              <span class="session-card__prog-pct"\r
                    [style.color]="sessionSelectionnee.progression > 0 ? '#069b8f' : '#9ca3af'">\r
                {{ sessionSelectionnee.progression | number:'1.0-0' }}%\r
              </span>\r
            </div>\r
            <div class="session-card__prog-bar">\r
              <div class="session-card__prog-fill"\r
                   [style.width.%]="sessionSelectionnee.progression"></div>\r
            </div>\r
          </div>\r
\r
          <!-- Compl\xE9t\xE9e -->\r
          <div class="session-card__termine mt-3" *ngIf="sessionSelectionnee.est_termine">\r
            <i class="isax isax-medal-star me-1"></i>Session compl\xE9t\xE9e !\r
          </div>\r
\r
          <!-- Certificat obtenu -->\r
          <div class="lms-detail-section lms-detail-section--success mt-3"\r
               *ngIf="sessionSelectionnee.certificat_obtenu">\r
            <div class="lms-detail-section__title">\r
              <i class="isax isax-medal-star me-2"></i>Certificat obtenu\r
            </div>\r
            <p class="lms-detail-section__body">\r
              F\xE9licitations ! Vous avez obtenu votre certificat pour cette session.\r
            </p>\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <!-- SECTION 3 \u2014 Acc\xE8s \xE0 la session            -->\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div class="lms-detail-section mb-3">\r
          <div class="lms-detail-section__title">\r
            <i class="isax me-2"\r
               [ngClass]="sessionSelectionnee.type === 'presentiel' ? 'isax-buildings-2' : 'isax-monitor'">\r
            </i>\r
            {{ sessionSelectionnee.type === 'presentiel' ? 'Acc\xE8s pr\xE9sentiel' : 'Acc\xE8s \xE0 la session' }}\r
          </div>\r
\r
          <!-- DISTANCIEL / HYBRIDE : lien Zoom -->\r
          <ng-container *ngIf="sessionSelectionnee.type !== 'presentiel'">\r
\r
            <!-- Cas 1 : lieu = URL directe -->\r
            <div class="lms-access-link mt-2" *ngIf="isUrl(sessionSelectionnee.lieu)">\r
              <i class="isax isax-video" style="color:#069b8f"></i>\r
              <div>\r
                <small>Lien de connexion</small>\r
                <a [href]="sessionSelectionnee.lieu" target="_blank" rel="noopener"\r
                   class="lms-access-link__url" (click)="$event.stopPropagation()">\r
                  <i class="isax isax-export-2 me-1"></i>Rejoindre la session\r
                </a>\r
              </div>\r
            </div>\r
\r
            <!-- Cas 2 : lieu = texte avec URL int\xE9gr\xE9e -->\r
            <div class="lms-access-link mt-2"\r
                 *ngIf="!isUrl(sessionSelectionnee.lieu) && extractUrl(sessionSelectionnee.lieu)">\r
              <i class="isax isax-video" style="color:#069b8f"></i>\r
              <div>\r
                <small>Lien de connexion</small>\r
                <a [href]="extractUrl(sessionSelectionnee.lieu)!" target="_blank" rel="noopener"\r
                   class="lms-access-link__url" (click)="$event.stopPropagation()">\r
                  <i class="isax isax-export-2 me-1"></i>Rejoindre la session\r
                </a>\r
                <span class="d-block mt-1" style="font-size:.78rem;color:#6b7280">\r
                  {{ sessionSelectionnee.lieu }}\r
                </span>\r
              </div>\r
            </div>\r
\r
            <!-- Cas 3 : aucun lien disponible -->\r
            <div class="lms-access-pending mt-2"\r
                 *ngIf="!sessionSelectionnee.lieu && !sessionSelectionnee.instructions_acces">\r
              <i class="isax isax-clock"></i>\r
              <span>Le lien de connexion sera communiqu\xE9 par email avant la session.</span>\r
            </div>\r
\r
          </ng-container>\r
\r
          <!-- PR\xC9SENTIEL : adresse -->\r
          <div class="lms-info-item mt-2"\r
               *ngIf="sessionSelectionnee.type === 'presentiel' && sessionSelectionnee.lieu">\r
            <i class="isax isax-location" style="color:#069b8f"></i>\r
            <div>\r
              <small>Adresse</small>\r
              <strong>{{ sessionSelectionnee.lieu }}</strong>\r
            </div>\r
          </div>\r
\r
          <!-- Instructions (tous types) -->\r
          <div class="lms-formation-desc mt-2" *ngIf="sessionSelectionnee.instructions_acces">\r
            <div class="lms-formation-desc__label">\r
              <i class="isax isax-info-circle"></i> Instructions\r
            </div>\r
            <p class="lms-formation-desc__text">{{ sessionSelectionnee.instructions_acces }}</p>\r
          </div>\r
\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <!-- SECTION 4 \u2014 Ma demande                    -->\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div class="lms-detail-section mb-3">\r
          <div class="lms-detail-section__title">\r
            <i class="isax isax-send-2 me-2"></i>Ma demande\r
          </div>\r
          <div class="cd-demande-detail mt-2">\r
            <div class="cd-demande-row">\r
              <span class="cd-demande-label">Statut</span>\r
              <span class="sc-statut statut-validee">Valid\xE9e</span>\r
            </div>\r
            <div class="cd-demande-row" *ngIf="sessionSelectionnee.date_assignation">\r
              <span class="cd-demande-label">Valid\xE9e le</span>\r
              <span>{{ sessionSelectionnee.date_assignation | date:'dd/MM/yyyy \xE0 HH:mm' }}</span>\r
            </div>\r
            <div class="cd-demande-row" *ngIf="sessionSelectionnee.notes">\r
              <span class="cd-demande-label">Commentaire RH</span>\r
              <span>{{ sessionSelectionnee.notes }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <!-- Footer -->\r
      <div class="modal-footer lms-modal__footer lms-modal__footer--split">\r
        <button class="btn lms-btn-cancel" (click)="fermerDetail()">\r
          <i class="isax isax-close-square me-1"></i>Fermer\r
        </button>\r
        <button class="btn lms-btn-submit" (click)="goToDetail(sessionSelectionnee.id)">\r
          <i class="isax isax-arrow-right-3 me-1"></i>Voir la page compl\xE8te\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/student/sessions-acceptees/sessions-acceptees.component.scss */\n.pq-kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #ffffff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n}\n.pq-kpi-card--active {\n  border-color: currentColor;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n}\n.pq-kpi-card__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body {\n  min-width: 0;\n}\n.pq-kpi-card__value {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1f2937;\n  line-height: 1;\n}\n.pq-kpi-card__label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal .pq-kpi-card__icon {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green {\n  border-top-color: #16a34a;\n}\n.pq-kpi-card--green .pq-kpi-card__icon {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.pq-kpi-card--green.pq-kpi-card--active {\n  border-color: #16a34a;\n}\n.pq-kpi-card--blue {\n  border-top-color: #0369a1;\n}\n.pq-kpi-card--blue .pq-kpi-card__icon {\n  background: #dbeafe;\n  color: #0369a1;\n}\n.pq-kpi-card--blue.pq-kpi-card--active {\n  border-color: #0369a1;\n}\n.pq-kpi-card--orange {\n  border-top-color: #f59e0b;\n}\n.pq-kpi-card--orange .pq-kpi-card__icon {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.pq-kpi-card--orange.pq-kpi-card--active {\n  border-color: #f59e0b;\n}\n.pq-kpi-card--purple {\n  border-top-color: #7c3aed;\n}\n.pq-kpi-card--purple .pq-kpi-card__icon {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.pq-kpi-card--purple.pq-kpi-card--active {\n  border-color: #7c3aed;\n}\n.pq-kpi-card--indigo {\n  border-top-color: #4f46e5;\n}\n.pq-kpi-card--indigo .pq-kpi-card__icon {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.pq-kpi-card--indigo.pq-kpi-card--active {\n  border-color: #4f46e5;\n}\n.sc-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 28px;\n}\n.sc-header__title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.sc-header__subtitle {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n}\n.sc-header__count {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(6, 155, 143, 0.08);\n  color: #069b8f;\n  border: 1px solid rgba(6, 155, 143, 0.2);\n  border-radius: 20px;\n  padding: 6px 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.sc-header__count i {\n  font-size: 0.9rem;\n}\n.sc-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.sc-filters__search {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n  max-width: 320px;\n}\n.sc-filters__search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 0.9rem;\n}\n.sc-filters__search-input {\n  width: 100%;\n  padding: 9px 36px 9px 36px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  background: #ffffff;\n  transition: all 0.2s ease;\n}\n.sc-filters__search-input:focus {\n  outline: none;\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.sc-filters__search-clear {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.sc-filters__search-clear:hover {\n  color: #dc2626;\n}\n.sc-filters__types {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.sc-filters__type-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #ffffff;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__type-btn:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.sc-filters__type-btn--active {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #ffffff !important;\n}\n.sc-filters__type-count {\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 3px;\n  opacity: 0.8;\n}\n.sc-filters__reset {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: 1.5px solid rgba(220, 38, 38, 0.3);\n  border-radius: 8px;\n  background: rgba(220, 38, 38, 0.05);\n  color: #dc2626;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-filters__reset:hover {\n  background: rgba(220, 38, 38, 0.1);\n}\n.sc-results-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.sc-results-info__clear {\n  background: none;\n  border: none;\n  color: #069b8f;\n  font-size: 0.85rem;\n  cursor: pointer;\n  text-decoration: underline;\n  padding: 0;\n}\n.sc-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n}\n.sc-loading__spinner {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  margin-bottom: 14px;\n}\n.sc-loading p {\n  color: #6b7280;\n  font-size: 0.9rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sc-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n}\n.sc-error__icon {\n  font-size: 2.5rem;\n  color: #dc2626;\n  margin-bottom: 12px;\n}\n.sc-error p {\n  color: #6b7280;\n  margin-bottom: 16px;\n}\n.sc-error__retry {\n  padding: 9px 20px;\n  background: #069b8f;\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n}\n.sc-error__retry:hover {\n  opacity: 0.9;\n}\n.sc-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.sc-empty__icon {\n  font-size: 2.8rem;\n  color: #9ca3af;\n  margin-bottom: 16px;\n}\n.sc-empty__title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 8px;\n}\n.sc-empty p {\n  color: #6b7280;\n  font-size: 0.9rem;\n  max-width: 340px;\n}\n.sc-empty__btn {\n  margin-top: 16px;\n  padding: 9px 20px;\n  background: #069b8f;\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n}\n.sc-empty__btn:hover {\n  opacity: 0.9;\n}\n.session-card {\n  border-radius: 12px;\n  background: #ffffff;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.session-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n}\n.session-card:hover .session-card__btn {\n  opacity: 1;\n}\n.session-card__banner {\n  position: relative;\n  height: 160px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      #0ab09f 60%,\n      #04c4b0 100%);\n}\n.session-card__banner-bg {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: 0.2;\n}\n.session-card__banner-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      160deg,\n      rgba(0, 0, 0, 0.1) 0%,\n      rgba(0, 0, 0, 0.3) 100%);\n}\n.session-card__banner-icon {\n  position: absolute;\n  bottom: 14px;\n  left: 16px;\n  font-size: 2.2rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n.session-card__banner-termine {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #16a34a;\n  color: #ffffff;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  box-shadow: 0 2px 6px rgba(22, 163, 74, 0.4);\n}\n.session-card__banner-avenir {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #0369a1;\n  color: #ffffff;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  box-shadow: 0 2px 6px rgba(3, 105, 161, 0.4);\n}\n.session-card__banner-assigned {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.18);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  color: #ffffff;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n}\n.session-card__banner-badge {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  color: #ffffff;\n  border-radius: 6px;\n  padding: 4px 12px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  background: rgba(255, 255, 255, 0.22);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.session-card__body {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 16px;\n}\n.session-card__title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.session-card__description {\n  font-size: 0.8rem;\n  color: #6b7280;\n  margin-bottom: 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  flex: 1;\n}\n.session-card__stats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.session-card__stat {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #f3f4f6;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.session-card__stat i {\n  color: #069b8f;\n  font-size: 0.85rem;\n}\n.session-card__stat--award i {\n  color: #d97706;\n}\n.session-card__progression {\n  margin-bottom: 10px;\n}\n.session-card__termine {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n  border-radius: 8px;\n  padding: 6px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  width: 100%;\n  justify-content: center;\n}\n.session-card__prog-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.session-card__prog-label {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.session-card__prog-pct {\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.session-card__prog-bar {\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.session-card__prog-fill {\n  height: 100%;\n  background: #069b8f;\n  border-radius: 99px;\n  transition: width 0.5s ease;\n}\n.session-card__assignation {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  margin-bottom: 12px;\n}\n.session-card__assignation-date {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n}\n.session-card__assignation-date i {\n  font-size: 0.8rem;\n  color: #069b8f;\n}\n.session-card__footer {\n  margin-top: auto;\n  padding-top: 4px;\n}\n.session-card__btn {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  background: #069b8f;\n  color: #ffffff;\n}\n.session-card__btn--done {\n  background: #16a34a;\n}\n.session-card__btn--avenir {\n  background: #0369a1;\n}\n.session-card__btn:hover {\n  opacity: 0.9;\n  transform: translateX(2px);\n}\n.sc-pagination {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 32px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.sc-pagination__info {\n  font-size: 0.85rem;\n  color: #6b7280;\n}\n.sc-pagination__info-total {\n  color: #9ca3af;\n  margin-left: 4px;\n}\n.sc-pagination__controls {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sc-pagination__btn {\n  min-width: 36px;\n  height: 36px;\n  padding: 0 10px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #6b7280;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sc-pagination__btn:hover:not(:disabled) {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.sc-pagination__btn--active {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #ffffff !important;\n  font-weight: 700;\n}\n.sc-pagination__btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.sc-pagination__ellipsis {\n  line-height: 36px;\n  color: #9ca3af;\n  padding: 0 4px;\n}\n.lms-modal {\n  border-radius: 12px;\n  overflow: hidden;\n}\n.lms-modal__header {\n  padding: 20px 24px;\n  color: #ffffff;\n  border: none;\n}\n.lms-modal__header .modal-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n}\n.lms-modal__header small {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.78rem;\n}\n.lms-modal__icon {\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lms-modal__icon i {\n  font-size: 1.4rem;\n  color: #ffffff;\n}\n.lms-modal__body {\n  padding: 24px;\n}\n.lms-modal__footer {\n  padding: 16px 24px;\n  background: #f3f4f6;\n  border-top: 1px solid #e5e7eb;\n}\n.lms-modal__footer--split {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.lms-detail-chips {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.lms-detail-chips__left {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.lms-meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.lms-meta-chip--success {\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n}\n.lms-meta-chip--teal {\n  background: rgba(13, 148, 136, 0.1);\n  color: #0d9488;\n}\n.lms-meta-chip--warning {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.lms-meta-chip--award {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.lms-detail-section {\n  background: #f3f4f6;\n  border-radius: 8px;\n  padding: 14px 16px;\n}\n.lms-detail-section__title {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1f2937;\n  display: flex;\n  align-items: center;\n}\n.lms-detail-section__title i {\n  color: #069b8f;\n}\n.lms-detail-section__body {\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin: 6px 0 0;\n}\n.lms-detail-section--success {\n  background: rgba(22, 163, 74, 0.07);\n  border-left: 3px solid #16a34a;\n}\n.lms-info-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.lms-info-item i {\n  font-size: 1.1rem;\n  margin-top: 2px;\n}\n.lms-info-item small {\n  display: block;\n  font-size: 0.72rem;\n  color: #9ca3af;\n  margin-bottom: 2px;\n}\n.lms-info-item strong {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.cd-demande-detail {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cd-demande-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  border-bottom: 1px solid #e5e7eb;\n  font-size: 0.85rem;\n}\n.cd-demande-row:last-child {\n  border-bottom: none;\n}\n.cd-demande-label {\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 0.8rem;\n}\n.sc-statut {\n  padding: 3px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.statut-validee {\n  background: rgba(22, 163, 74, 0.1);\n  color: #16a34a;\n}\n.lms-formation-desc {\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 12px;\n}\n.lms-formation-desc__label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #069b8f;\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.lms-formation-desc__text {\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n.lms-access-link {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(6, 155, 143, 0.06);\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n  border-radius: 8px;\n  padding: 12px;\n}\n.lms-access-link i {\n  font-size: 1.2rem;\n  margin-top: 2px;\n}\n.lms-access-link small {\n  display: block;\n  font-size: 0.72rem;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.lms-access-link__url {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: #069b8f;\n  font-weight: 700;\n  font-size: 0.875rem;\n  text-decoration: none;\n}\n.lms-access-link__url:hover {\n  text-decoration: underline;\n}\n.lms-access-link__url i {\n  font-size: 0.85rem;\n}\n.lms-access-pending {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(217, 119, 6, 0.08);\n  border: 1.5px solid rgba(217, 119, 6, 0.25);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.85rem;\n  color: #92400e;\n}\n.lms-access-pending i {\n  font-size: 1rem;\n  color: #d97706;\n}\n.lms-btn-cancel {\n  padding: 9px 20px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n}\n.lms-btn-cancel:hover {\n  border-color: #dc2626;\n  color: #dc2626;\n}\n.lms-btn-submit {\n  padding: 9px 22px;\n  background: #069b8f;\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n}\n.lms-btn-submit:hover {\n  opacity: 0.9;\n}\n@media (max-width: 767px) {\n  .sc-header {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .sc-header__title {\n    font-size: 1.25rem;\n  }\n  .sc-header__subtitle {\n    display: none;\n  }\n  .sc-filters {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .sc-filters__search {\n    max-width: 100%;\n  }\n  .sc-filters__type-btn {\n    font-size: 0.75rem;\n    padding: 6px 10px;\n  }\n  .pq-kpi-card {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=sessions-acceptees.component.css.map */\n"] }]
  }], () => [{ type: FormationsService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SessionsAccepteesComponent, { className: "SessionsAccepteesComponent", filePath: "src/app/features/student/sessions-acceptees/sessions-acceptees.component.ts", lineNumber: 48 });
})();
export {
  SessionsAccepteesComponent
};
//# sourceMappingURL=chunk-MSTIOCBU.js.map
