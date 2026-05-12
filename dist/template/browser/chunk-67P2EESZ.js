import {
  DemandeFormationService
} from "./chunk-QSH6SDU4.js";
import {
  FormationsService
} from "./chunk-3MN45TQB.js";
import "./chunk-REZZRIDN.js";
import "./chunk-FKX6UC3I.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-AK2M3J6O.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-3IMMP55I.js";
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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
} from "./chunk-UPBSS6WA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/student-dashboard/student-dashboard.component.ts
function StudentDashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de votre tableau de bord...");
    \u0275\u0275elementEnd()();
  }
}
function StudentDashboardComponent_ng_container_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.kpi.demandes.en_attente, " ");
  }
}
function StudentDashboardComponent_ng_container_1_div_20_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275property("value", a_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r4);
  }
}
function StudentDashboardComponent_ng_container_1_div_20_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275property("value", i_r6 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r5);
  }
}
function StudentDashboardComponent_ng_container_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function StudentDashboardComponent_ng_container_1_div_20_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAnnee, $event) || (ctx_r1.selectedAnnee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function StudentDashboardComponent_ng_container_1_div_20_Template_select_change_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnneeChange());
    });
    \u0275\u0275template(2, StudentDashboardComponent_ng_container_1_div_20_option_2_Template, 2, 2, "option", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function StudentDashboardComponent_ng_container_1_div_20_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedMois, $event) || (ctx_r1.selectedMois = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function StudentDashboardComponent_ng_container_1_div_20_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMoisChange());
    });
    \u0275\u0275template(4, StudentDashboardComponent_ng_container_1_div_20_option_4_Template, 2, 2, "option", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedAnnee);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.annees);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedMois);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.moisLabels);
  }
}
function StudentDashboardComponent_ng_container_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 28);
    \u0275\u0275text(2, "5 derni\xE8res ann\xE9es");
    \u0275\u0275elementEnd()();
  }
}
function StudentDashboardComponent_ng_container_1_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.echeancesUrgentes.length);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68);
    \u0275\u0275element(2, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Certaines formations arrivent \xE0 terme dans moins de 7 jours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 71);
    \u0275\u0275text(9, "\u26A0 Action requise");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.echeancesUrgentes.length, " \xE9ch\xE9ance(s) urgente(s)");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.heuresRestantes, "h restantes");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 72);
    \u0275\u0275elementStart(2, "div", 34);
    \u0275\u0275text(3, "Formations obligatoires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.stats.kpi.formations.obligatoires_terminees, " / ", ctx_r1.stats.kpi.formations.obligatoires_total, " termin\xE9es ");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "div", 75);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.stats.kpi.formations.taux_completion, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.stats.kpi.sessions.taux, "% termin\xE9es");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "Aucune assign\xE9e");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "div", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.stats.kpi.sessions.taux, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.stats.kpi.parcours.progression, "% de progression");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "Aucun assign\xE9");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "div", 78);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.stats.kpi.parcours.taux, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.stats.kpi.catalogues.taux, "% compl\xE9t\xE9s");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_span_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "Aucun assign\xE9");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "div", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.stats.kpi.catalogues.taux, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_span_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stats.echeances.length);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_81_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", e_r7.progression, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_81_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98);
    \u0275\u0275element(2, "div", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 100);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", e_r7.progression, "%")("background", ctx_r1.getUrgenceStroke(e_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r7.progression, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 83);
    \u0275\u0275element(3, "circle", 84)(4, "circle", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 86)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 87);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 88)(11, "div", 89);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 90)(14, "span", 91);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, StudentDashboardComponent_ng_container_1_ng_container_33_div_81_span_16_Template, 2, 1, "span", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, StudentDashboardComponent_ng_container_1_ng_container_33_div_81_div_17_Template, 5, 5, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 94)(19, "span", 95);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.getUrgenceClass(e_r7));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("stroke", ctx_r1.getUrgenceStroke(e_r7))("stroke-dashoffset", ctx_r1.getCountdownOffset(e_r7.joursRestants));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r7.joursRestants <= 0 ? "!" : e_r7.joursRestants);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r7.joursRestants === 1 ? "jour" : "jours");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r7.titre);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getTypeColor(e_r7.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(e_r7.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasProgression(e_r7.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasProgression(e_r7.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getUrgenceLabelClass(e_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getUrgenceLabel(e_r7.joursRestants));
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_82_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", e_r8.progression, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_82_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98);
    \u0275\u0275element(2, "div", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 100);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", e_r8.progression, "%")("background", ctx_r1.getProgressionColor(e_r8.progression));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r8.progression, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 83);
    \u0275\u0275element(3, "circle", 84)(4, "circle", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 86)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 87);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 88)(11, "div", 89);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 90)(14, "span", 91);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, StudentDashboardComponent_ng_container_1_ng_container_33_div_82_span_16_Template, 2, 1, "span", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, StudentDashboardComponent_ng_container_1_ng_container_33_div_82_div_17_Template, 5, 5, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 94)(19, "span", 95);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.getUrgenceClass(e_r8));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("stroke", ctx_r1.getUrgenceStroke(e_r8))("stroke-dashoffset", ctx_r1.getCountdownOffset(e_r8.joursRestants));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r8.joursRestants);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r8.joursRestants === 1 ? "jour" : "jours");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r8.titre);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getTypeColor(e_r8.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(e_r8.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasProgression(e_r8.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasProgression(e_r8.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getUrgenceLabelClass(e_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getUrgenceLabel(e_r8.joursRestants));
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "i", 103);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune \xE9ch\xE9ance proche");
    \u0275\u0275elementEnd()();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "span", 106);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 107);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 108)(9, "div", 109);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 110);
    \u0275\u0275element(12, "i", 111);
    \u0275\u0275text(13);
    \u0275\u0275element(14, "i", 112);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span", 113);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 7, s_r9.date_debut, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, s_r9.date_debut, "MMM"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r9.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", s_r9.lieu || "En ligne", " \xA0\xB7\xA0 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(16, 13, s_r9.date_debut, "HH:mm"), " \u2013 ", \u0275\u0275pipeBind2(17, 16, s_r9.date_fin, "HH:mm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r9.type);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "i", 114);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune session planifi\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentDashboardComponent_ng_container_1_ng_container_33_div_1_Template, 10, 1, "div", 30);
    \u0275\u0275elementStart(2, "div", 31)(3, "div", 32);
    \u0275\u0275element(4, "div", 33);
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275text(6, "Compl\xE9tion globale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 32);
    \u0275\u0275element(10, "div", 36);
    \u0275\u0275elementStart(11, "div", 34);
    \u0275\u0275text(12, "Objectif heures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 35);
    \u0275\u0275text(14);
    \u0275\u0275template(15, StudentDashboardComponent_ng_container_1_ng_container_33_span_15_Template, 2, 1, "span", 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, StudentDashboardComponent_ng_container_1_ng_container_33_div_16_Template, 6, 2, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 38)(18, "div", 39)(19, "div", 40);
    \u0275\u0275element(20, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 42)(22, "div", 43);
    \u0275\u0275text(23, "Formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 44);
    \u0275\u0275text(25);
    \u0275\u0275elementStart(26, "span", 45);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 46);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, StudentDashboardComponent_ng_container_1_ng_container_33_div_30_Template, 3, 2, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 48)(32, "div", 40);
    \u0275\u0275element(33, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 42)(35, "div", 43);
    \u0275\u0275text(36, "Sessions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 44);
    \u0275\u0275text(38);
    \u0275\u0275elementStart(39, "span", 45);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 46);
    \u0275\u0275template(42, StudentDashboardComponent_ng_container_1_ng_container_33_span_42_Template, 2, 1, "span", 1)(43, StudentDashboardComponent_ng_container_1_ng_container_33_span_43_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, StudentDashboardComponent_ng_container_1_ng_container_33_div_44_Template, 3, 2, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 51)(46, "div", 40);
    \u0275\u0275element(47, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 42)(49, "div", 43);
    \u0275\u0275text(50, "Parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 44);
    \u0275\u0275text(52);
    \u0275\u0275elementStart(53, "span", 45);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 46);
    \u0275\u0275template(56, StudentDashboardComponent_ng_container_1_ng_container_33_span_56_Template, 2, 1, "span", 1)(57, StudentDashboardComponent_ng_container_1_ng_container_33_span_57_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, StudentDashboardComponent_ng_container_1_ng_container_33_div_58_Template, 3, 2, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 53)(60, "div", 40);
    \u0275\u0275element(61, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 42)(63, "div", 43);
    \u0275\u0275text(64, "Catalogues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 44);
    \u0275\u0275text(66);
    \u0275\u0275elementStart(67, "span", 45);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 46);
    \u0275\u0275template(70, StudentDashboardComponent_ng_container_1_ng_container_33_span_70_Template, 2, 1, "span", 1)(71, StudentDashboardComponent_ng_container_1_ng_container_33_span_71_Template, 2, 0, "span", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(72, StudentDashboardComponent_ng_container_1_ng_container_33_div_72_Template, 3, 2, "div", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 55)(74, "div", 56)(75, "div", 57)(76, "div", 58);
    \u0275\u0275element(77, "i", 59);
    \u0275\u0275text(78, "\xC9ch\xE9ances \xE0 venir");
    \u0275\u0275elementEnd();
    \u0275\u0275template(79, StudentDashboardComponent_ng_container_1_ng_container_33_span_79_Template, 2, 1, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 61);
    \u0275\u0275template(81, StudentDashboardComponent_ng_container_1_ng_container_33_div_81_Template, 21, 13, "div", 62)(82, StudentDashboardComponent_ng_container_1_ng_container_33_div_82_Template, 21, 13, "div", 63)(83, StudentDashboardComponent_ng_container_1_ng_container_33_div_83_Template, 4, 0, "div", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 56)(85, "div", 57)(86, "div", 58);
    \u0275\u0275element(87, "i", 65);
    \u0275\u0275text(88, "Sessions planifi\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 61);
    \u0275\u0275template(90, StudentDashboardComponent_ng_container_1_ng_container_33_div_90_Template, 20, 19, "div", 66)(91, StudentDashboardComponent_ng_container_1_ng_container_33_div_91_Template, 4, 0, "div", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasUrgences);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", (ctx_r1.stats.kpi.taux_completion_global == null ? null : ctx_r1.stats.kpi.taux_completion_global.total_termine) ?? ctx_r1.stats.kpi.formations.terminees, " / ", (ctx_r1.stats.kpi.taux_completion_global == null ? null : ctx_r1.stats.kpi.taux_completion_global.total_assigne) ?? ctx_r1.stats.kpi.formations.total, " \xE9l\xE9ments ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx_r1.stats.kpi.heures.total_cumulees, "h / ", ctx_r1.stats.kpi.heures.objectif_annuel, "h ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.heuresRestantes > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.formations.obligatoires_total > 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi.formations.terminees);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx_r1.stats.kpi.formations.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.kpi.formations.en_cours, " en cours");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.formations.total > 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi.sessions.terminees);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx_r1.stats.kpi.sessions.total);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.sessions.total > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.sessions.total === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.sessions.total > 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi.parcours.termines);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx_r1.stats.kpi.parcours.total);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.parcours.total > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.parcours.total === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.parcours.total > 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi.catalogues.termines);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx_r1.stats.kpi.catalogues.total);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.catalogues.total > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.catalogues.total === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.catalogues.total > 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.stats.echeances.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.echeancesUrgentes);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.echeancesNormales);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.echeances.length === 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.stats.sessions_planifiees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.sessions_planifiees.length === 0);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_34_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275element(1, "div", 138);
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 115)(2, "h5", 116);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 117);
    \u0275\u0275text(5, "Courbes d'\xE9volution des taux \xB7 Histogrammes des volumes par p\xE9riode");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 118)(7, "span", 119);
    \u0275\u0275text(8, "Taux d'\xE9volution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 120);
    \u0275\u0275text(10, "Courbes en % \u2014 suivez la tendance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 121)(12, "div", 122)(13, "span", 123);
    \u0275\u0275text(14, "KPI principal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Taux de compl\xE9tion global ");
    \u0275\u0275elementStart(16, "span", 124);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "div", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 126)(20, "div", 127);
    \u0275\u0275element(21, "div", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, StudentDashboardComponent_ng_container_1_ng_container_34_div_22_Template, 2, 0, "div", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 118)(24, "span", 130);
    \u0275\u0275text(25, "Volumes par p\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 120);
    \u0275\u0275text(27, "Histogrammes \u2014 nombre d'\xE9l\xE9ments termin\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 131)(29, "div", 127);
    \u0275\u0275element(30, "div", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 127);
    \u0275\u0275element(32, "div", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 127);
    \u0275\u0275element(34, "div", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 127);
    \u0275\u0275element(36, "div", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 127);
    \u0275\u0275element(38, "div", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 127);
    \u0275\u0275element(40, "div", 137);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\xC9volution \u2014 ", ctx_r1.periodeMode === "mois" ? "12 derniers mois" : "5 derni\xE8res ann\xE9es");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("", ctx_r1.tauxCompletionGlobal, "% actuellement");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.hasScoresQuiz);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_35_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 186);
    \u0275\u0275element(1, "div", 187);
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_35_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275element(1, "i", 189);
    \u0275\u0275text(2, "Aucune demande enregistr\xE9e pour le moment ");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_35_p_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 190);
    \u0275\u0275text(1, "Il vous reste ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " pour atteindre l'objectif");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.heuresRestantes, "h");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_35_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 191);
    \u0275\u0275text(1, "\u2705 Objectif annuel atteint !");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_35_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 140)(2, "div", 192);
    \u0275\u0275element(3, "i", 193);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h6", 143);
    \u0275\u0275text(6, "Formations obligatoires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 144);
    \u0275\u0275text(8, "Formations r\xE9glementaires ou impos\xE9es par l'entreprise");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 149)(10, "div", 150)(11, "span", 151);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 152);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 153);
    \u0275\u0275element(16, "div", 154);
    \u0275\u0275elementStart(17, "span", 155);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.kpi.formations.obligatoires_terminees, " termin\xE9es");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("sur ", ctx_r1.stats.kpi.formations.obligatoires_total, " obligatoires");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.stats.kpi.formations.taux_obligatoires, "%")("background", ctx_r1.getProgressionColor(ctx_r1.stats.kpi.formations.taux_obligatoires));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.kpi.formations.taux_obligatoires, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_35_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275element(1, "i", 194);
    \u0275\u0275text(2, "Fonctionnalit\xE9 \xE0 venir \u2014 Le PDI sera int\xE9gr\xE9 dans une prochaine version ");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_35_ng_container_53_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275element(1, "div", 203);
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_35_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 195)(2, "div", 196)(3, "div", 197);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 198);
    \u0275\u0275text(6, "/100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 199);
    \u0275\u0275text(8, "Score moyen");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 196)(10, "div", 197);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 199);
    \u0275\u0275text(13, "Quiz pass\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 196)(15, "div", 200);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 199);
    \u0275\u0275text(18, "Quiz r\xE9ussis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 196)(20, "div", 197);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 199);
    \u0275\u0275text(23, "Taux de r\xE9ussite");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 149)(25, "div", 150)(26, "span", 151);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 152);
    \u0275\u0275text(29, "seuil de r\xE9ussite : 60%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 153);
    \u0275\u0275element(31, "div", 154);
    \u0275\u0275elementStart(32, "span", 155);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, StudentDashboardComponent_ng_container_1_ng_container_35_ng_container_53_div_34_Template, 2, 0, "div", 201);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.getProgressionColor(ctx_r1.stats.kpi.evaluations.score_moyen));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.kpi.evaluations.score_moyen);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi.evaluations.nb_passees);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi.evaluations.nb_reussies);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.getProgressionColor(ctx_r1.stats.kpi.evaluations.taux_reussite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.kpi.evaluations.taux_reussite, "% ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Score moyen : ", ctx_r1.stats.kpi.evaluations.score_moyen, "%");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.stats.kpi.evaluations.score_moyen, "%")("background", ctx_r1.getProgressionColor(ctx_r1.stats.kpi.evaluations.score_moyen));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.kpi.evaluations.score_moyen, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.evaluations.nb_passees > 0);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_35_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275element(1, "i", 204);
    \u0275\u0275text(2, " Aucun quiz pass\xE9 pour le moment \u2014 Terminez une formation pour acc\xE9der au quiz final ");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 139)(2, "div", 140)(3, "div", 141);
    \u0275\u0275element(4, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h6", 143);
    \u0275\u0275text(7, "Statut global des demandes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 144);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, StudentDashboardComponent_ng_container_1_ng_container_35_div_10_Template, 2, 0, "div", 145)(11, StudentDashboardComponent_ng_container_1_ng_container_35_div_11_Template, 3, 0, "div", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 139)(13, "div", 140)(14, "div", 147);
    \u0275\u0275element(15, "i", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "h6", 143);
    \u0275\u0275text(18, "Objectif heures de formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 144);
    \u0275\u0275text(20, "Heures r\xE9alis\xE9es vs objectif annuel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 149)(22, "div", 150)(23, "span", 151);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 152);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 153);
    \u0275\u0275element(28, "div", 154);
    \u0275\u0275elementStart(29, "span", 155);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, StudentDashboardComponent_ng_container_1_ng_container_35_p_31_Template, 5, 1, "p", 156)(32, StudentDashboardComponent_ng_container_1_ng_container_35_p_32_Template, 2, 0, "p", 157);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, StudentDashboardComponent_ng_container_1_ng_container_35_div_33_Template, 19, 7, "div", 158);
    \u0275\u0275elementStart(34, "div", 139)(35, "div", 140)(36, "div", 159);
    \u0275\u0275element(37, "i", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div")(39, "h6", 143);
    \u0275\u0275text(40, "Plan de D\xE9veloppement Individuel (PDI)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 144);
    \u0275\u0275text(42, "Objectifs fix\xE9s avec votre manager");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, StudentDashboardComponent_ng_container_1_ng_container_35_div_43_Template, 3, 0, "div", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 139)(45, "div", 140)(46, "div", 141);
    \u0275\u0275element(47, "i", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div")(49, "h6", 143);
    \u0275\u0275text(50, "Score moyen aux \xE9valuations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p", 144);
    \u0275\u0275text(52, "R\xE9sultats de vos quiz de fin de formation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(53, StudentDashboardComponent_ng_container_1_ng_container_35_ng_container_53_Template, 35, 15, "ng-container", 1)(54, StudentDashboardComponent_ng_container_1_ng_container_35_div_54_Template, 3, 0, "div", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 162)(56, "div", 163)(57, "div", 164)(58, "div", 165);
    \u0275\u0275element(59, "i", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 167);
    \u0275\u0275text(61, "\xC0 venir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 168);
    \u0275\u0275text(63, "Comp\xE9tences valid\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p", 169);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 170);
    \u0275\u0275element(67, "div", 171)(68, "div", 172)(69, "div", 173);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 163)(71, "div", 164)(72, "div", 174);
    \u0275\u0275element(73, "i", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 167);
    \u0275\u0275text(75, "\xC0 venir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 168);
    \u0275\u0275text(77, "Badges obtenus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p", 169);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 176);
    \u0275\u0275element(81, "div", 177)(82, "div", 177)(83, "div", 177)(84, "div", 178)(85, "div", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 163)(87, "div", 164)(88, "div", 179);
    \u0275\u0275element(89, "i", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 167);
    \u0275\u0275text(91, "\xC0 venir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 168);
    \u0275\u0275text(93, "Classement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "p", 169);
    \u0275\u0275text(95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 170)(97, "div", 181);
    \u0275\u0275text(98, "#\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(99, "div", 163)(100, "div", 164)(101, "div", 182);
    \u0275\u0275element(102, "i", 183);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "span", 167);
    \u0275\u0275text(104, "\xC0 venir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 168);
    \u0275\u0275text(106, "\xC9cart comp\xE9tences cible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "p", 169);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "div", 170);
    \u0275\u0275element(110, "div", 184)(111, "div", 185);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Toutes cat\xE9gories confondues \u2014 ", ctx_r1.demandesTotal, " demande(s) au total");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandesTotal > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandesTotal === 0);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.kpi.heures.total_cumulees, "h r\xE9alis\xE9es");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("objectif ", ctx_r1.stats.kpi.heures.objectif_annuel, "h");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.stats.kpi.heures.taux_objectif, "%")("background", ctx_r1.getProgressionColor(ctx_r1.stats.kpi.heures.taux_objectif));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.kpi.heures.taux_objectif, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.heuresRestantes > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.heuresRestantes === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.formations.obligatoires_total > 0);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", !ctx_r1.stats.kpi.pdi.disponible);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.evaluations.disponible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.stats.kpi.evaluations.disponible);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi_futurs.competences_validees.message);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi_futurs.badges_obtenus.message);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi_futurs.classement.message);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi_futurs.ecart_competences.message);
  }
}
function StudentDashboardComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div")(3, "h3", 5);
    \u0275\u0275text(4, "Mon tableau de bord");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "a", 8);
    \u0275\u0275element(9, "i", 9);
    \u0275\u0275text(10, "Mes demandes ");
    \u0275\u0275template(11, StudentDashboardComponent_ng_container_1_span_11_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "button", 13);
    \u0275\u0275listener("click", function StudentDashboardComponent_ng_container_1_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.periodeMode = "mois";
      return \u0275\u0275resetView(ctx_r1.onPeriodeChange());
    });
    \u0275\u0275element(15, "i", 14);
    \u0275\u0275text(16, "Mensuel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275listener("click", function StudentDashboardComponent_ng_container_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.periodeMode = "annee";
      return \u0275\u0275resetView(ctx_r1.onPeriodeChange());
    });
    \u0275\u0275element(18, "i", 15);
    \u0275\u0275text(19, "Annuel ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, StudentDashboardComponent_ng_container_1_div_20_Template, 5, 4, "div", 16)(21, StudentDashboardComponent_ng_container_1_div_21_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 17)(23, "button", 18);
    \u0275\u0275listener("click", function StudentDashboardComponent_ng_container_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("aujourdhui"));
    });
    \u0275\u0275element(24, "i", 19);
    \u0275\u0275text(25, "Aujourd'hui ");
    \u0275\u0275template(26, StudentDashboardComponent_ng_container_1_span_26_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 18);
    \u0275\u0275listener("click", function StudentDashboardComponent_ng_container_1_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("progression"));
    });
    \u0275\u0275element(28, "i", 21);
    \u0275\u0275text(29, "Ma progression ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 18);
    \u0275\u0275listener("click", function StudentDashboardComponent_ng_container_1_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("objectifs"));
    });
    \u0275\u0275element(31, "i", 22);
    \u0275\u0275text(32, "Mes objectifs ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, StudentDashboardComponent_ng_container_1_ng_container_33_Template, 92, 32, "ng-container", 1)(34, StudentDashboardComponent_ng_container_1_ng_container_34_Template, 41, 3, "ng-container", 1)(35, StudentDashboardComponent_ng_container_1_ng_container_35_Template, 112, 20, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx_r1.nomMoisSelectionne, " ", ctx_r1.selectedAnnee, " \u2014 Suivez vos formations, votre progression et vos objectifs ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.demandes.en_attente > 0);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.periodeMode === "mois");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.periodeMode === "annee");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.periodeMode === "mois");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.periodeMode === "annee");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "aujourdhui");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.hasUrgences);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "progression");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "objectifs");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "aujourdhui");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "progression");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "objectifs");
  }
}
var StudentDashboardComponent = class _StudentDashboardComponent {
  formationsService;
  demandeFormationService;
  loading = true;
  stats = null;
  periodeMode = "mois";
  selectedAnnee = (/* @__PURE__ */ new Date()).getFullYear();
  selectedMois = (/* @__PURE__ */ new Date()).getMonth() + 1;
  annees = [];
  moisLabels = ["Jan", "F\xE9v", "Mar", "Avr", "Mai", "Juin", "Juil", "Ao\xFB", "Sep", "Oct", "Nov", "D\xE9c"];
  activeTab = "aujourdhui";
  charts = {};
  constructor(formationsService, demandeFormationService) {
    this.formationsService = formationsService;
    this.demandeFormationService = demandeFormationService;
  }
  ngOnInit() {
    const now = (/* @__PURE__ */ new Date()).getFullYear();
    for (let i = 0; i < 5; i++)
      this.annees.push(now - i);
    this.loadStats();
  }
  ngOnDestroy() {
    this.destroyAllCharts();
  }
  loadStats() {
    this.loading = true;
    this.destroyAllCharts();
    this.formationsService.getDashboardStats({
      periode: this.periodeMode,
      annee: this.selectedAnnee,
      mois: this.selectedMois
    }).subscribe({
      next: (res) => {
        this.stats = res.data;
        this.loading = false;
        this.scheduleCharts();
      },
      error: () => this.loadStatsFallback()
    });
  }
  loadStatsFallback() {
    Promise.all([
      this.formationsService.getMesFormations().toPromise().catch(() => null),
      this.demandeFormationService.getMesDemandes().toPromise().catch(() => null),
      this.formationsService.getMyCertificates().toPromise().catch(() => null)
    ]).then(([formRes, demRes, certRes]) => {
      const formations = formRes?.formations ?? formRes?.data ?? [];
      const demandes = demRes?.demandes ?? demRes?.data ?? [];
      const certs = certRes?.certificats ?? certRes?.data ?? certRes?.certificates ?? [];
      const terminees = formations.filter((f) => f.statut_formation === "termine");
      const enCours = formations.filter((f) => f.statut_formation === "en_cours");
      const progMoy = formations.length ? formations.reduce((s, f) => {
        const p = parseFloat(f.progression);
        return s + (isNaN(p) ? 0 : p);
      }, 0) / formations.length : 0;
      const tauxCompletion = formations.length ? Math.round(terminees.length / formations.length * 1e3) / 10 : 0;
      const courbes = this.buildCourbesAngular(formations, demandes, certs);
      const echeances = formations.filter((f) => f.statut_formation === "en_cours" && f.date_fin_prevue).map((f) => {
        const joursRestants = Math.ceil((new Date(f.date_fin_prevue).getTime() - Date.now()) / 864e5);
        return { id: f.id, titre: f.titre, type: f.est_obligatoire ? "obligatoire" : "formation", deadline: f.date_fin_prevue, joursRestants, progression: f.progression ?? 0, urgent: joursRestants <= 7 };
      }).sort((a, b) => a.joursRestants - b.joursRestants).slice(0, 5);
      this.stats = {
        kpi: {
          formations: {
            total: formations.length,
            en_cours: enCours.length,
            terminees: terminees.length,
            progression_moy: Math.round(progMoy * 10) / 10,
            taux_completion: tauxCompletion,
            taux_obligatoires: 0,
            obligatoires_total: formations.filter((f) => f.est_obligatoire).length,
            obligatoires_terminees: formations.filter((f) => f.est_obligatoire && f.statut_formation === "termine").length
          },
          sessions: { total: 0, terminees: 0, taux: 0 },
          parcours: { total: 0, termines: 0, progression: 0, taux: 0 },
          catalogues: { total: 0, termines: 0, taux: 0 },
          certifications: {
            total: certs.length,
            cette_annee: certs.filter((c) => new Date(c.created_at).getFullYear() === (/* @__PURE__ */ new Date()).getFullYear()).length
          },
          heures: {
            total_cumulees: Math.round(terminees.reduce((s, f) => s + (f.duree_totale ?? 0), 0) * 10) / 10,
            objectif_annuel: 40,
            taux_objectif: 0
          },
          demandes: {
            en_attente: demandes.filter((d) => d.statut === "en_attente").length,
            validees: demandes.filter((d) => d.statut === "validee").length,
            refusees: demandes.filter((d) => d.statut === "refusee").length,
            total: demandes.length
          },
          pdi: { disponible: false, taux_completion: 0, objectifs_total: 0, objectifs_atteints: 0, prochain_entretien: null },
          evaluations: { disponible: false, score_moyen: 0, nb_passees: 0, nb_reussies: 0, taux_reussite: 0 }
        },
        courbes,
        echeances,
        sessions_planifiees: [],
        kpi_futurs: {
          competences_validees: { disponible: false, message: "Fonctionnalit\xE9 \xE0 venir" },
          badges_obtenus: { disponible: false, message: "Fonctionnalit\xE9 \xE0 venir" },
          classement: { disponible: false, message: "Fonctionnalit\xE9 \xE0 venir" },
          ecart_competences: { disponible: false, message: "Fonctionnalit\xE9 \xE0 venir" },
          formations_recommandees: { disponible: false, message: "Fonctionnalit\xE9 \xE0 venir" }
        }
      };
      this.loading = false;
      this.scheduleCharts();
    }).catch(() => {
      this.loading = false;
    });
  }
  buildCourbesAngular(formations, demandes, certs) {
    const labels = [];
    const formationsTerminees = [];
    const certificationsObtenues = [];
    const heuresCumulees = [];
    const progressionParcours = [];
    const progressionCatalogues = [];
    const sessionsTerminees = [];
    const tauxCompletion = [];
    const tauxAbandonCourbe = [];
    const scoresQuiz = [];
    const base = this.periodeMode === "annee" ? 5 : 12;
    for (let i = base - 1; i >= 0; i--) {
      let debut, fin, label;
      if (this.periodeMode === "annee") {
        const y = (/* @__PURE__ */ new Date()).getFullYear() - i;
        debut = new Date(y, 0, 1);
        fin = new Date(y, 11, 31, 23, 59, 59);
        label = String(y);
      } else {
        const d = new Date(this.selectedAnnee, this.selectedMois - 1, 1);
        d.setMonth(d.getMonth() - i);
        debut = new Date(d.getFullYear(), d.getMonth(), 1);
        fin = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59);
        label = `${this.moisLabels[d.getMonth()]} ${String(d.getFullYear()).slice(2)}`;
      }
      labels.push(label);
      const termCe = formations.filter((f) => f.statut_formation === "termine" && f.updated_at && new Date(f.updated_at) >= debut && new Date(f.updated_at) <= fin);
      const abandCe = formations.filter((f) => f.statut_formation === "abandonne" && f.updated_at && new Date(f.updated_at) >= debut && new Date(f.updated_at) <= fin);
      const enCoursCe = formations.filter((f) => f.statut_formation === "en_cours" && f.updated_at && new Date(f.updated_at) >= debut && new Date(f.updated_at) <= fin);
      formationsTerminees.push(termCe.length);
      certificationsObtenues.push(certs.filter((c) => c.created_at && new Date(c.created_at) >= debut && new Date(c.created_at) <= fin).length);
      heuresCumulees.push(termCe.reduce((s, f) => s + (f.duree_totale ?? 0), 0));
      progressionParcours.push(0);
      progressionCatalogues.push(0);
      sessionsTerminees.push(0);
      scoresQuiz.push(0);
      const totalJLa = formations.filter((f) => f.created_at && new Date(f.created_at) <= fin).length;
      const termJLa = formations.filter((f) => f.statut_formation === "termine" && f.updated_at && new Date(f.updated_at) <= fin).length;
      tauxCompletion.push(totalJLa > 0 ? Math.round(termJLa / totalJLa * 100) : 0);
      const commences = termCe.length + abandCe.length + enCoursCe.length;
      tauxAbandonCourbe.push(commences > 0 ? Math.round(abandCe.length / commences * 100) : 0);
    }
    return {
      labels,
      formationsTerminees,
      certificationsObtenues,
      heuresCumulees,
      progressionParcours,
      progressionCatalogues,
      sessionsTerminees,
      tauxCompletion,
      tauxAbandonCourbe,
      scoresQuiz
    };
  }
  setTab(tab) {
    this.activeTab = tab;
    this.scheduleCharts();
  }
  onPeriodeChange() {
    this.loadStats();
  }
  onAnneeChange() {
    this.loadStats();
  }
  onMoisChange() {
    this.loadStats();
  }
  scheduleCharts() {
    [200, 600, 1500].forEach((delay) => {
      setTimeout(() => {
        if (!this.stats)
          return;
        const firstId = this.getFirstChartId();
        if (firstId && document.getElementById(firstId))
          this.initChartsPourOnglet();
      }, delay);
    });
  }
  getFirstChartId() {
    if (this.activeTab === "progression")
      return "chart-completion";
    if (this.activeTab === "objectifs")
      return "chart-donut-demandes";
    if (this.activeTab === "aujourdhui")
      return "chart-radial-completion";
    return null;
  }
  destroyAllCharts() {
    Object.values(this.charts).forEach((c) => {
      try {
        c?.destroy();
      } catch {
      }
    });
    this.charts = {};
  }
  initChartsPourOnglet() {
    if (!this.stats)
      return;
    const firstId = this.getFirstChartId();
    if (firstId && this.charts[firstId])
      return;
    const c = this.stats.courbes;
    if (this.activeTab === "progression") {
      this.renderChart("chart-completion", this.buildAreaConfig(c.labels, [
        { name: "Taux de compl\xE9tion (%)", data: c.tauxCompletion, color: "#069b8f" }
      ], "Taux de compl\xE9tion global"));
      this.renderChart("chart-taux-abandon", this.buildAreaConfig(c.labels, [
        { name: "Taux d'abandon (%)", data: c.tauxAbandonCourbe ?? [], color: "#ef4444" }
      ], "Taux d'abandon"));
      this.renderChart("chart-heures", this.buildBarConfig(c.labels, [
        { name: "Heures de formation", data: c.heuresCumulees, color: "#f59e0b" }
      ], "Heures cumul\xE9es"));
      this.renderChart("chart-formations-terminees", this.buildBarConfig(c.labels, [
        { name: "Formations termin\xE9es", data: c.formationsTerminees, color: "#10b981" }
      ], "Formations termin\xE9es"));
      this.renderChart("chart-certifications", this.buildBarConfig(c.labels, [
        { name: "Certifications obtenues", data: c.certificationsObtenues, color: "#7c3aed" }
      ], "Certifications obtenues"));
      this.renderChart("chart-sessions-terminees", this.buildBarConfig(c.labels, [
        { name: "Sessions termin\xE9es", data: c.sessionsTerminees ?? [], color: "#3b82f6" }
      ], "Sessions termin\xE9es"));
      this.renderChart("chart-parcours", this.buildBarConfig(c.labels, [
        { name: "Parcours progress\xE9s", data: c.progressionParcours, color: "#7c3aed" }
      ], "Progression parcours"));
      this.renderChart("chart-catalogues", this.buildBarConfig(c.labels, [
        { name: "Catalogues actifs", data: c.progressionCatalogues, color: "#3b82f6" }
      ], "Progression catalogues"));
      if (c.scoresQuiz && c.scoresQuiz.some((v) => v > 0)) {
        this.renderChart("chart-scores-quiz", this.buildAreaConfig(c.labels, [
          { name: "Score moyen quiz (%)", data: c.scoresQuiz, color: "#4f46e5" }
        ], "Score moyen aux quiz"));
      }
    }
    if (this.activeTab === "objectifs") {
      const d = this.stats.kpi.demandes;
      if (d.total > 0) {
        this.renderDonut("chart-donut-demandes", [d.validees, d.en_attente, d.refusees, Math.max(0, d.total - d.validees - d.en_attente - d.refusees)], ["Valid\xE9es", "En attente", "Refus\xE9es", "Autres"], ["#10b981", "#f59e0b", "#ef4444", "#9ca3af"]);
      }
      const ev = this.stats.kpi.evaluations;
      if (ev.disponible && ev.nb_passees > 0) {
        this.renderDonut("chart-donut-quiz", [ev.nb_reussies, ev.nb_passees - ev.nb_reussies], ["R\xE9ussis", "\xC9chou\xE9s"], ["#10b981", "#ef4444"]);
      }
      if (this.stats.kpi.formations.obligatoires_total > 0) {
        this.renderDonut("chart-donut-formations", [
          this.stats.kpi.formations.en_cours,
          this.stats.kpi.formations.terminees,
          Math.max(0, this.stats.kpi.formations.total - this.stats.kpi.formations.en_cours - this.stats.kpi.formations.terminees)
        ], ["En cours", "Termin\xE9es", "Non d\xE9marr\xE9es"], ["#069b8f", "#10b981", "#e5e7eb"]);
      }
    }
    if (this.activeTab === "aujourdhui") {
      this.renderRadial("chart-radial-completion", this.tauxCompletionGlobal, "#069b8f", "Compl\xE9tion");
      this.renderRadial("chart-radial-heures", this.stats.kpi.heures.taux_objectif, "#f59e0b", "Objectif h.");
      if (this.stats.kpi.formations.obligatoires_total > 0) {
        this.renderRadial("chart-radial-oblig", this.stats.kpi.formations.taux_obligatoires, "#ef4444", "Obligatoires");
      }
    }
  }
  renderChart(id, config) {
    const el = document.getElementById(id);
    if (!el)
      return;
    try {
      const chart = new ApexCharts(el, config);
      chart.render();
      this.charts[id] = chart;
    } catch {
    }
  }
  buildAreaConfig(labels, series, title) {
    return {
      series: series.map((s) => ({ name: s.name, data: s.data })),
      chart: { type: "area", height: 230, toolbar: { show: false }, animations: { enabled: true, easing: "easeinout", speed: 600 } },
      colors: series.map((s) => s.color),
      stroke: { curve: "smooth", width: 3 },
      markers: { size: 4, hover: { size: 6 } },
      fill: { type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.03 } },
      xaxis: { categories: labels, labels: { style: { fontSize: "11px", colors: "#9ca3af" } }, axisBorder: { show: false }, axisTicks: { show: false } },
      yaxis: { labels: { style: { fontSize: "11px", colors: "#9ca3af" }, formatter: (v) => v + "%" }, min: 0, max: 100 },
      grid: { borderColor: "#f3f4f6", strokeDashArray: 4 },
      tooltip: { theme: "light", y: { formatter: (v) => v + "%" } },
      legend: { show: false },
      title: { text: title, align: "left", style: { fontSize: "13px", fontWeight: 700, color: "#374151" } }
    };
  }
  buildBarConfig(labels, series, title) {
    return {
      series: series.map((s) => ({ name: s.name, data: s.data })),
      chart: { type: "bar", height: 230, toolbar: { show: false }, animations: { enabled: true, speed: 600 } },
      colors: series.map((s) => s.color),
      plotOptions: { bar: { borderRadius: 5, columnWidth: "52%", dataLabels: { position: "top" } } },
      dataLabels: { enabled: true, offsetY: -20, style: { fontSize: "11px", colors: ["#374151"], fontWeight: 600 }, formatter: (v) => v > 0 ? v : "" },
      xaxis: { categories: labels, labels: { style: { fontSize: "11px", colors: "#9ca3af" } }, axisBorder: { show: false }, axisTicks: { show: false } },
      yaxis: { labels: { style: { fontSize: "11px", colors: "#9ca3af" } }, min: 0 },
      grid: { borderColor: "#f3f4f6", strokeDashArray: 4 },
      tooltip: { theme: "light" },
      legend: { show: false },
      title: { text: title, align: "left", style: { fontSize: "13px", fontWeight: 700, color: "#374151" } }
    };
  }
  renderDonut(id, series, labels, colors) {
    const el = document.getElementById(id);
    if (!el)
      return;
    try {
      const total = series.reduce((a, b) => a + b, 0);
      const chart = new ApexCharts(el, {
        series,
        chart: { type: "donut", height: 260, toolbar: { show: false } },
        colors,
        labels,
        legend: {
          position: "bottom",
          fontSize: "12px",
          formatter: (val, opts) => {
            const v = opts.w.globals.series[opts.seriesIndex];
            const pct = total > 0 ? Math.round(v / total * 100) : 0;
            return `${val}: ${v} (${pct}%)`;
          }
        },
        dataLabels: {
          enabled: true,
          formatter: (_val, opts) => {
            const v = opts.w.globals.series[opts.seriesIndex];
            const pct = total > 0 ? Math.round(v / total * 100) : 0;
            return pct > 0 ? pct + "%" : "";
          }
        },
        plotOptions: { pie: { donut: { size: "60%" } } },
        tooltip: { theme: "light", y: { formatter: (v) => `${v} (${total > 0 ? Math.round(v / total * 100) : 0}%)` } }
      });
      chart.render();
      this.charts[id] = chart;
    } catch {
    }
  }
  renderRadial(id, value, color, label) {
    const el = document.getElementById(id);
    if (!el)
      return;
    try {
      const safeValue = isNaN(value) || value == null ? 0 : Math.round(value);
      const chart = new ApexCharts(el, {
        series: [safeValue],
        chart: { type: "radialBar", height: 140, toolbar: { show: false } },
        colors: [color],
        plotOptions: { radialBar: { hollow: { size: "55%" }, dataLabels: {
          name: { show: true, offsetY: -4, fontSize: "10px", color: "#9ca3af" },
          value: { show: true, offsetY: 4, fontSize: "16px", fontWeight: 700, color: "#111827", formatter: (v) => v + "%" }
        } } },
        labels: [label]
      });
      chart.render();
      this.charts[id] = chart;
    } catch {
    }
  }
  // ════════════════════════════════════════════════
  // HELPERS TEMPLATE
  // ════════════════════════════════════════════════
  getProgressionColor(v) {
    const val = v ?? 0;
    if (isNaN(val))
      return "#9ca3af";
    if (val >= 75)
      return "#10b981";
    if (val >= 40)
      return "#f59e0b";
    return "#ef4444";
  }
  getUrgenceClass(e) {
    if (e.joursRestants <= 4)
      return "ech-item--critique";
    if (e.joursRestants <= 14)
      return "ech-item--moyenne";
    return "ech-item--normale";
  }
  getUrgenceLabelClass(e) {
    if (e.joursRestants <= 4)
      return "ech-urgence__label--rouge";
    if (e.joursRestants <= 14)
      return "ech-urgence__label--orange";
    return "ech-urgence__label--vert";
  }
  getUrgenceStroke(e) {
    if (e.joursRestants <= 4)
      return "#E24B4A";
    if (e.joursRestants <= 14)
      return "#EF9F27";
    return "#1D9E75";
  }
  getCountdownOffset(joursRestants) {
    const circonference = 138.2;
    const ratio = Math.min(joursRestants, 30) / 30;
    return Math.round(circonference * (1 - ratio));
  }
  getUrgenceLabel(j) {
    if (j <= 0)
      return "Expir\xE9";
    if (j === 1)
      return "Demain";
    return `Dans ${j}j`;
  }
  getTypeLabel(type) {
    const map = {
      obligatoire: "Obligatoire",
      formation: "Formation",
      parcours: "Parcours",
      catalogue: "Catalogue",
      session: "Session"
    };
    return map[type] ?? type;
  }
  getTypeColor(type) {
    const map = {
      obligatoire: "#ef4444",
      formation: "#069b8f",
      parcours: "#7c3aed",
      catalogue: "#3b82f6",
      session: "#f59e0b"
    };
    return map[type] ?? "#9ca3af";
  }
  hasProgression(type) {
    return type !== "catalogue";
  }
  get echeancesUrgentes() {
    return (this.stats?.echeances ?? []).filter((e) => e.urgent);
  }
  get echeancesNormales() {
    return (this.stats?.echeances ?? []).filter((e) => !e.urgent);
  }
  get hasUrgences() {
    return this.echeancesUrgentes.length > 0;
  }
  get tauxCompletionGlobal() {
    const global = this.stats?.kpi?.taux_completion_global?.valeur;
    if (global != null && !isNaN(global))
      return global;
    const f = this.stats?.kpi?.formations;
    if (!f)
      return 0;
    const raw = f.taux_completion ?? 0;
    return isNaN(raw) ? 0 : raw;
  }
  get heuresRestantes() {
    const obj = this.stats?.kpi.heures.objectif_annuel ?? 40;
    const cum = this.stats?.kpi.heures.total_cumulees ?? 0;
    return Math.max(0, obj - cum);
  }
  get nomMoisSelectionne() {
    return this.moisLabels[this.selectedMois - 1] ?? "";
  }
  get demandesTotal() {
    return this.stats?.kpi.demandes.total ?? 0;
  }
  // ✅ Helper pour le ngIf de la courbe quiz dans le HTML
  get hasScoresQuiz() {
    return (this.stats?.courbes?.scoresQuiz ?? []).some((v) => v > 0);
  }
  static \u0275fac = function StudentDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentDashboardComponent)(\u0275\u0275directiveInject(FormationsService), \u0275\u0275directiveInject(DemandeFormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentDashboardComponent, selectors: [["app-student-dashboard"]], decls: 2, vars: 2, consts: [["class", "db-loading", 4, "ngIf"], [4, "ngIf"], [1, "db-loading"], [1, "db-loading__spinner"], [1, "db-page-header", "mb-4"], [1, "db-page-header__title"], [1, "db-page-header__sub"], [1, "db-header-actions"], ["routerLink", "/student/demandes", 1, "db-header-link"], [1, "isax", "isax-document-text", "me-1"], ["class", "db-header-link__badge", 4, "ngIf"], [1, "db-filters", "mb-4"], [1, "db-filters__toggle"], [3, "click"], [1, "isax", "isax-calendar", "me-1"], [1, "isax", "isax-calendar-2", "me-1"], ["class", "db-filters__selects", 4, "ngIf"], [1, "db-tabs", "mb-4"], [1, "db-tabs__tab", 3, "click"], [1, "isax", "isax-sun", "me-1"], ["class", "db-tabs__alert", 4, "ngIf"], [1, "isax", "isax-chart-2", "me-1"], [1, "isax", "isax-flag", "me-1"], [1, "db-header-link__badge"], [1, "db-filters__selects"], [1, "db-select", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "db-filters__label"], [1, "db-tabs__alert"], ["class", "db-alert-banner mb-4", 4, "ngIf"], [1, "db-radial-row", "mb-4"], [1, "db-radial-card"], ["id", "chart-radial-completion", 1, "db-radial-card__chart"], [1, "db-radial-card__label"], [1, "db-radial-card__sub"], ["id", "chart-radial-heures", 1, "db-radial-card__chart"], ["class", "db-radial-card", 4, "ngIf"], [1, "db-kpi-grid", "db-kpi-grid--4", "mb-4"], [1, "db-kpi-card", "db-kpi-card--teal"], [1, "db-kpi-card__icon"], [1, "isax", "isax-book-1"], [1, "db-kpi-card__body"], [1, "db-kpi-card__label"], [1, "db-kpi-card__value"], [1, "db-kpi-card__value-total"], [1, "db-kpi-card__sub"], ["class", "db-kpi-card__bar", 4, "ngIf"], [1, "db-kpi-card", "db-kpi-card--blue"], [1, "isax", "isax-video-play"], ["style", "font-style:italic", 4, "ngIf"], [1, "db-kpi-card", "db-kpi-card--purple"], [1, "isax", "isax-routing"], [1, "db-kpi-card", "db-kpi-card--green"], [1, "isax", "isax-book-square"], [1, "db-today-grid"], [1, "db-panel"], [1, "db-panel__header"], [1, "db-panel__title"], [1, "isax", "isax-timer", "me-2"], ["class", "db-panel__count", 4, "ngIf"], [1, "db-panel__body"], ["class", "ech-item ech-item--urgent", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "ech-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "db-empty-mini", 4, "ngIf"], [1, "isax", "isax-calendar-tick", "me-2"], ["class", "db-session-item", 4, "ngFor", "ngForOf"], [1, "db-alert-banner", "mb-4"], [1, "db-alert-banner__icon"], [1, "isax", "isax-warning-2"], [1, "db-alert-banner__body"], [1, "db-alert-banner__count"], ["id", "chart-radial-oblig", 1, "db-radial-card__chart"], [1, "db-kpi-card__bar"], [1, "db-kpi-bar"], [1, "db-kpi-bar__fill", "db-kpi-bar__fill--teal"], [2, "font-style", "italic"], [1, "db-kpi-bar__fill", "db-kpi-bar__fill--blue"], [1, "db-kpi-bar__fill", "db-kpi-bar__fill--purple"], [1, "db-kpi-bar__fill", "db-kpi-bar__fill--green"], [1, "db-panel__count"], [1, "ech-item", "ech-item--urgent", 3, "ngClass"], [1, "ech-countdown"], ["width", "52", "height", "52", "viewBox", "0 0 52 52"], ["cx", "26", "cy", "26", "r", "22", "stroke-width", "4", 1, "ech-countdown__track"], ["cx", "26", "cy", "26", "r", "22", "stroke-width", "4", "stroke-dasharray", "138.2", 1, "ech-countdown__fill"], [1, "ech-countdown__label"], [1, "ech-countdown__unit"], [1, "ech-body"], [1, "ech-title"], [1, "ech-meta"], [1, "ech-badge"], ["class", "ech-meta__prog", 4, "ngIf"], ["class", "ech-prog-wrap", 4, "ngIf"], [1, "ech-urgence"], [1, "ech-urgence__label", 3, "ngClass"], [1, "ech-meta__prog"], [1, "ech-prog-wrap"], [1, "ech-prog-bar"], [1, "ech-prog-fill"], [1, "ech-prog-pct"], [1, "ech-item", 3, "ngClass"], [1, "db-empty-mini"], [1, "isax", "isax-tick-circle"], [1, "db-session-item"], [1, "db-session-item__date"], [1, "db-session-item__day"], [1, "db-session-item__month"], [1, "db-session-item__body"], [1, "db-session-item__titre"], [1, "db-session-item__meta"], [1, "isax", "isax-location", "me-1"], [1, "isax", "isax-clock", "me-1"], [1, "db-session-item__badge"], [1, "isax", "isax-calendar"], [1, "db-charts-header", "mb-4"], [1, "db-charts-header__title"], [1, "db-charts-header__sub"], [1, "db-charts-section-label", "mb-2"], [1, "db-section-badge", "db-section-badge--teal"], [1, "db-section-hint"], [1, "db-chart-card", "db-chart-card--highlight", "mb-3"], [1, "db-chart-card__label"], [1, "db-chart-card__badge", "db-chart-card__badge--teal"], [1, "db-chart-card__current"], ["id", "chart-completion"], [1, "db-chart-grid", "db-chart-grid--2", "mb-4"], [1, "db-chart-card"], ["id", "chart-taux-abandon"], ["class", "db-chart-card", 4, "ngIf"], [1, "db-section-badge", "db-section-badge--blue"], [1, "db-chart-grid", "mb-4"], ["id", "chart-formations-terminees"], ["id", "chart-sessions-terminees"], ["id", "chart-parcours"], ["id", "chart-catalogues"], ["id", "chart-heures"], ["id", "chart-certifications"], ["id", "chart-scores-quiz"], [1, "db-objectif-section", "mb-4"], [1, "db-objectif-header"], [1, "db-objectif-header__icon", "db-objectif-header__icon--blue"], [1, "isax", "isax-document-text"], [1, "db-objectif-header__title"], [1, "db-objectif-header__sub"], ["class", "db-demandes-chart-wrap", 4, "ngIf"], ["class", "db-coming-inline", 4, "ngIf"], [1, "db-objectif-header__icon", "db-objectif-header__icon--orange"], [1, "isax", "isax-clock"], [1, "db-objectif-progress"], [1, "db-objectif-progress__values"], [1, "db-objectif-progress__done"], [1, "db-objectif-progress__target"], [1, "db-objectif-progress__bar"], [1, "db-objectif-progress__fill"], [1, "db-objectif-progress__pct"], ["class", "db-objectif-progress__note", 4, "ngIf"], ["class", "db-objectif-progress__note db-objectif-progress__note--success", 4, "ngIf"], ["class", "db-objectif-section mb-4", 4, "ngIf"], [1, "db-objectif-header__icon", "db-objectif-header__icon--teal"], [1, "isax", "isax-task-square"], [1, "isax", "isax-chart-2"], [1, "db-future-grid", "mt-4"], [1, "db-future-card"], [1, "db-future-card__header"], [1, "db-future-card__icon", "db-future-card__icon--purple"], [1, "isax", "isax-medal-star"], [1, "db-future-badge"], [1, "db-future-card__title"], [1, "db-future-card__desc"], [1, "db-future-card__placeholder"], [1, "db-placeholder-bar", 2, "width", "70%"], [1, "db-placeholder-bar", 2, "width", "50%"], [1, "db-placeholder-bar", 2, "width", "85%"], [1, "db-future-card__icon", "db-future-card__icon--orange"], [1, "isax", "isax-award"], [1, "db-future-card__placeholder", "db-future-card__placeholder--circles"], [1, "db-placeholder-circle"], [1, "db-placeholder-circle", "db-placeholder-circle--ghost"], [1, "db-future-card__icon", "db-future-card__icon--teal"], [1, "isax", "isax-ranking"], [1, "db-placeholder-rank"], [1, "db-future-card__icon", "db-future-card__icon--red"], [1, "isax", "isax-radar-2"], [1, "db-placeholder-bar", 2, "width", "60%"], [1, "db-placeholder-bar", 2, "width", "80%"], [1, "db-demandes-chart-wrap"], ["id", "chart-donut-demandes"], [1, "db-coming-inline"], [1, "isax", "isax-document", "me-2"], [1, "db-objectif-progress__note"], [1, "db-objectif-progress__note", "db-objectif-progress__note--success"], [1, "db-objectif-header__icon", "db-objectif-header__icon--red"], [1, "isax", "isax-shield-tick"], [1, "isax", "isax-flash-1", "me-2"], [1, "db-pdi-grid", "mb-3"], [1, "db-pdi-kpi"], [1, "db-pdi-kpi__value"], [2, "font-size", "14px"], [1, "db-pdi-kpi__label"], [1, "db-pdi-kpi__value", 2, "color", "#10b981"], ["class", "db-demandes-chart-wrap mt-3", 4, "ngIf"], [1, "db-demandes-chart-wrap", "mt-3"], ["id", "chart-donut-quiz"], [1, "isax", "isax-document-text", "me-2"]], template: function StudentDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StudentDashboardComponent_div_0_Template, 4, 0, "div", 0)(1, StudentDashboardComponent_ng_container_1_Template, 36, 19, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.stats);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, DatePipe], styles: ["\n\n.db-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  gap: 16px;\n}\n.db-loading__spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_db-spin 0.7s linear infinite;\n}\n.db-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 14px;\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_db-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.db-page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.db-page-header__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.db-page-header__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.db-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.db-header-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.db-header-link[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f6;\n}\n.db-header-link__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 5px;\n  background: #ef4444;\n  color: white;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.db-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.db-filters__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f3f4f6;\n  border-radius: 8px;\n  padding: 3px;\n}\n.db-filters__toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.db-filters__toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: white;\n  color: #111827;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n  font-weight: 600;\n}\n.db-filters__selects[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.db-filters__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  padding: 8px 12px;\n  background: #f3f4f6;\n  border-radius: 8px;\n}\n.db-select[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #1f2937;\n  background: white;\n  cursor: pointer;\n  outline: none;\n}\n.db-select[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n}\n.db-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  border-bottom: 2px solid #f3f4f6;\n  padding-bottom: 0;\n}\n.db-tabs__tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.2s;\n  border-radius: 8px 8px 0 0;\n}\n.db-tabs__tab[_ngcontent-%COMP%]:hover {\n  color: #111827;\n  background: #f9fafb;\n}\n.db-tabs__tab.active[_ngcontent-%COMP%] {\n  color: #069b8f;\n  border-bottom-color: #069b8f;\n  font-weight: 600;\n  background: #e6f7f6;\n}\n.db-tabs__alert[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  background: #ef4444;\n  color: white;\n  border-radius: 9px;\n  font-size: 10px;\n  font-weight: 700;\n  animation: _ngcontent-%COMP%_db-pulse 1.5s ease-in-out infinite;\n}\n.db-tabs__soon[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 6px;\n  background: #ede9fe;\n  color: #7c3aed;\n  border-radius: 4px;\n}\n@keyframes _ngcontent-%COMP%_db-pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0.85;\n  }\n}\n.db-alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  border-left: 4px solid #f59e0b;\n  border-radius: 12px;\n}\n.db-alert-banner__icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #f59e0b;\n  flex-shrink: 0;\n}\n.db-alert-banner__body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.db-alert-banner__body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #92400e;\n}\n.db-alert-banner__body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #b45309;\n}\n.db-alert-banner__count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #f59e0b;\n  white-space: nowrap;\n}\n.db-radial-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.db-radial-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px 12px 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n  text-align: center;\n  transition: box-shadow 0.2s;\n}\n.db-radial-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04);\n}\n.db-radial-card__placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 140px;\n}\n.db-radial-card__value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #069b8f;\n}\n.db-radial-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1f2937;\n  margin-top: 4px;\n}\n.db-radial-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.db-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.db-kpi-grid--5[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(5, 1fr);\n}\n@media (max-width: 1200px) {\n  .db-kpi-grid--5[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .db-kpi-grid--5[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .db-kpi-grid--5[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-kpi-grid--6[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(6, 1fr);\n}\n@media (max-width: 1400px) {\n  .db-kpi-grid--6[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .db-kpi-grid--6[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .db-kpi-grid--6[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 1024px) {\n  .db-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .db-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.2s, transform 0.2s;\n  position: relative;\n  overflow: hidden;\n}\n.db-kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04);\n  transform: translateY(-1px);\n}\n.db-kpi-card__icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.db-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.db-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1;\n}\n.db-kpi-card__value-total[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.db-kpi-card__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.db-kpi-card--teal[_ngcontent-%COMP%]   .db-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-kpi-card--green[_ngcontent-%COMP%]   .db-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #10b981;\n}\n.db-kpi-card--purple.db-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.db-kpi-card--orange.db-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.db-kpi-card--blue[_ngcontent-%COMP%]   .db-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-kpi-card--red[_ngcontent-%COMP%]   .db-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.db-kpi-card--teal[_ngcontent-%COMP%] {\n  border-top: 3px solid #069b8f;\n}\n.db-kpi-card--green[_ngcontent-%COMP%] {\n  border-top: 3px solid #10b981;\n}\n.db-kpi-card--purple[_ngcontent-%COMP%] {\n  border-top: 3px solid #7c3aed;\n}\n.db-kpi-card--orange[_ngcontent-%COMP%] {\n  border-top: 3px solid #f59e0b;\n}\n.db-kpi-card--blue[_ngcontent-%COMP%] {\n  border-top: 3px solid #3b82f6;\n}\n.db-kpi-card--red[_ngcontent-%COMP%] {\n  border-top: 3px solid #ef4444;\n}\n.db-kpi-card--warning[_ngcontent-%COMP%] {\n  border-top: 3px solid #f59e0b;\n}\n.db-kpi-card--warning[_ngcontent-%COMP%]   .db-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.db-kpi-card--warning[_ngcontent-%COMP%]   .db-kpi-card__value[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.db-kpi-card__bar[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.db-kpi-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #f3f4f6;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.db-kpi-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.6s ease;\n}\n.db-kpi-bar__fill--teal[_ngcontent-%COMP%] {\n  background: #069b8f;\n}\n.db-kpi-bar__fill--green[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.db-kpi-bar__fill--blue[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.db-kpi-bar__fill--orange[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.db-kpi-bar__fill--purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.db-kpi-bar__fill--red[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.db-today-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .db-today-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-panel[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.db-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  background: #f9fafb;\n}\n.db-panel__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1f2937;\n  display: flex;\n  align-items: center;\n}\n.db-panel__count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  background: #e6f7f6;\n  color: #069b8f;\n  border-radius: 10px;\n}\n.db-panel__body[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: 380px;\n  overflow-y: auto;\n}\n.db-session-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #f3f4f6;\n  background: white;\n}\n.db-session-item__date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: #dbeafe;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.db-session-item__day[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #3b82f6;\n  line-height: 1;\n}\n.db-session-item__month[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #3b82f6;\n  text-transform: uppercase;\n}\n.db-session-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.db-session-item__titre[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.db-session-item__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n}\n.db-session-item__badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  background: #e6f7f6;\n  color: #069b8f;\n  border-radius: 4px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.db-empty-mini[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px 16px;\n  color: #9ca3af;\n}\n.db-empty-mini[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.db-empty-mini[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.db-charts-header__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.db-charts-header__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.db-chart-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.db-chart-card--highlight[_ngcontent-%COMP%] {\n  border-top: 3px solid #069b8f;\n  background:\n    linear-gradient(\n      135deg,\n      white 0%,\n      #f0fdfc 100%);\n}\n.db-chart-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.db-chart-card__badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.db-chart-card__badge--teal[_ngcontent-%COMP%] {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-chart-card__current[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 18px;\n  font-weight: 800;\n  color: #069b8f;\n}\n.db-chart-card__donut-label[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  margin-top: 8px;\n}\n.db-chart-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .db-chart-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-kpi-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.db-kpi-stat__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.db-kpi-stat__icon--blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-kpi-stat__icon--teal[_ngcontent-%COMP%] {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-kpi-stat__icon--green[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #10b981;\n}\n.db-kpi-stat__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n.db-kpi-stat__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #111827;\n}\n.db-kpi-stat__bar-wrap[_ngcontent-%COMP%] {\n  padding: 4px 0 2px;\n}\n.db-kpi-stat__pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.db-objectif-section[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.db-objectif-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.db-objectif-header__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.db-objectif-header__icon--teal[_ngcontent-%COMP%] {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-objectif-header__icon--orange[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.db-objectif-header__icon--red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.db-objectif-header__icon--blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-objectif-header__icon--purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.db-objectif-header__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.db-objectif-header__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.db-objectif-progress__values[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  margin-bottom: 8px;\n}\n.db-objectif-progress__done[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111827;\n}\n.db-objectif-progress__target[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.db-objectif-progress__bar[_ngcontent-%COMP%] {\n  height: 10px;\n  background: #f3f4f6;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n}\n.db-objectif-progress__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.8s ease;\n}\n.db-objectif-progress__pct[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 10px;\n  font-weight: 700;\n  color: white;\n}\n.db-objectif-progress__note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 8px;\n}\n.db-objectif-progress__note--success[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-weight: 600;\n}\n.db-pdi-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.db-pdi-kpi[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n}\n.db-pdi-kpi__value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #069b8f;\n  line-height: 1;\n}\n.db-pdi-kpi__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.db-coming-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  background: #ede9fe;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #7c3aed;\n  font-weight: 500;\n}\n.db-future-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .db-future-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-future-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.db-future-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.db-future-card__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.db-future-card__icon--purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.db-future-card__icon--orange[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.db-future-card__icon--blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-future-card__icon--green[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #10b981;\n}\n.db-future-card__icon--teal[_ngcontent-%COMP%] {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-future-card__icon--red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.db-future-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.db-future-card__desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin: 0 0 12px;\n}\n.db-future-card__placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.db-future-card__placeholder--circles[_ngcontent-%COMP%] {\n  flex-direction: row;\n  gap: 6px;\n}\n.db-future-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n  background: #ede9fe;\n  color: #7c3aed;\n  border-radius: 4px;\n}\n.db-placeholder-circle[_ngcontent-%COMP%], \n.db-placeholder-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #f9fafb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.db-placeholder-bar[_ngcontent-%COMP%] {\n  height: 10px;\n}\n.db-placeholder-circle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.db-placeholder-circle--ghost[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.db-placeholder-rank[_ngcontent-%COMP%], \n.db-placeholder-score[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #e5e7eb;\n}\n.ech-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  margin-bottom: 8px;\n  background: var(--color-background-primary);\n  border: 0.5px solid var(--color-border-tertiary);\n  border-left: 4px solid transparent;\n  border-radius: 0 12px 12px 0;\n  transition: background 0.3s;\n}\n.ech-item--urgent[_ngcontent-%COMP%], \n.ech-item--critique[_ngcontent-%COMP%] {\n  border-left-color: #E24B4A;\n  background: #FCEBEB;\n  animation: _ngcontent-%COMP%_ech-pulse 2.2s ease-in-out infinite;\n}\n.ech-item--moyenne[_ngcontent-%COMP%] {\n  border-left-color: #EF9F27;\n  background: white;\n}\n.ech-item--normale[_ngcontent-%COMP%] {\n  border-left-color: #1D9E75;\n}\n@keyframes _ngcontent-%COMP%_ech-pulse {\n  0%, 100% {\n    background: #FCEBEB;\n  }\n  50% {\n    background: #F7C1C1;\n  }\n}\n.ech-countdown[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 52px;\n  height: 52px;\n  position: relative;\n}\n.ech-countdown[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.ech-countdown__track[_ngcontent-%COMP%] {\n  stroke: var(--color-border-tertiary);\n  fill: none;\n}\n.ech-countdown__fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.6s ease;\n}\n.ech-countdown__label[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  line-height: 1.1;\n}\n.ech-countdown__unit[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: var(--color-text-secondary);\n}\n.ech-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ech-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 4px;\n}\n.ech-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 5px;\n}\n.ech-meta__prog[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n}\n.ech-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: var(--border-radius-md);\n  color: #fff;\n}\n.ech-prog-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ech-prog-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: var(--color-border-tertiary);\n  border-radius: 2px;\n  overflow: hidden;\n}\n.ech-prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.6s ease;\n}\n.ech-prog-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n  min-width: 28px;\n  text-align: right;\n}\n.ech-urgence[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  text-align: center;\n}\n.ech-urgence__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.ech-urgence__label--rouge[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.ech-urgence__label--orange[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ech-urgence__label--vert[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n/*# sourceMappingURL=student-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-student-dashboard", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- LOADING                                           -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div *ngIf="loading" class="db-loading">\r
  <div class="db-loading__spinner"></div>\r
  <p>Chargement de votre tableau de bord...</p>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- DASHBOARD                                         -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="!loading && stats">\r
\r
  <!-- \u2500\u2500 PAGE HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="db-page-header mb-4">\r
    <div>\r
      <h3 class="db-page-header__title">Mon tableau de bord</h3>\r
      <p class="db-page-header__sub">\r
        {{ nomMoisSelectionne }} {{ selectedAnnee }} \u2014\r
        Suivez vos formations, votre progression et vos objectifs\r
      </p>\r
    </div>\r
    <div class="db-header-actions">\r
      <a routerLink="/student/demandes" class="db-header-link">\r
        <i class="isax isax-document-text me-1"></i>Mes demandes\r
        <span class="db-header-link__badge" *ngIf="stats.kpi.demandes.en_attente > 0">\r
          {{ stats.kpi.demandes.en_attente }}\r
        </span>\r
      </a>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 FILTRES P\xC9RIODE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="db-filters mb-4">\r
    <div class="db-filters__toggle">\r
      <button [class.active]="periodeMode === 'mois'" (click)="periodeMode='mois'; onPeriodeChange()">\r
        <i class="isax isax-calendar me-1"></i>Mensuel\r
      </button>\r
      <button [class.active]="periodeMode === 'annee'" (click)="periodeMode='annee'; onPeriodeChange()">\r
        <i class="isax isax-calendar-2 me-1"></i>Annuel\r
      </button>\r
    </div>\r
    <div class="db-filters__selects" *ngIf="periodeMode === 'mois'">\r
      <select [(ngModel)]="selectedAnnee" (change)="onAnneeChange()" class="db-select">\r
        <option *ngFor="let a of annees" [value]="a">{{ a }}</option>\r
      </select>\r
      <select [(ngModel)]="selectedMois" (change)="onMoisChange()" class="db-select">\r
        <option *ngFor="let m of moisLabels; let i = index" [value]="i + 1">{{ m }}</option>\r
      </select>\r
    </div>\r
    <div class="db-filters__selects" *ngIf="periodeMode === 'annee'">\r
      <span class="db-filters__label">5 derni\xE8res ann\xE9es</span>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 ONGLETS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="db-tabs mb-4">\r
    <button class="db-tabs__tab" [class.active]="activeTab === 'aujourdhui'" (click)="setTab('aujourdhui')">\r
      <i class="isax isax-sun me-1"></i>Aujourd'hui\r
      <span class="db-tabs__alert" *ngIf="hasUrgences">{{ echeancesUrgentes.length }}</span>\r
    </button>\r
    <button class="db-tabs__tab" [class.active]="activeTab === 'progression'" (click)="setTab('progression')">\r
      <i class="isax isax-chart-2 me-1"></i>Ma progression\r
    </button>\r
    <button class="db-tabs__tab" [class.active]="activeTab === 'objectifs'" (click)="setTab('objectifs')">\r
      <i class="isax isax-flag me-1"></i>Mes objectifs\r
    </button>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- ONGLET 1 \u2014 AUJOURD'HUI                                              -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="activeTab === 'aujourdhui'">\r
\r
    <div class="db-alert-banner mb-4" *ngIf="hasUrgences">\r
      <div class="db-alert-banner__icon"><i class="isax isax-warning-2"></i></div>\r
      <div class="db-alert-banner__body">\r
        <strong>{{ echeancesUrgentes.length }} \xE9ch\xE9ance(s) urgente(s)</strong>\r
        <span>Certaines formations arrivent \xE0 terme dans moins de 7 jours</span>\r
      </div>\r
      <span class="db-alert-banner__count">\u26A0 Action requise</span>\r
    </div>\r
\r
    <div class="db-radial-row mb-4">\r
      <div class="db-radial-card">\r
        <div class="db-radial-card__chart" id="chart-radial-completion"></div>\r
        <div class="db-radial-card__label">Compl\xE9tion globale</div>\r
        <div class="db-radial-card__sub">\r
          {{ stats.kpi.taux_completion_global?.total_termine ?? stats.kpi.formations.terminees }}\r
          / {{ stats.kpi.taux_completion_global?.total_assigne ?? stats.kpi.formations.total }} \xE9l\xE9ments\r
        </div>\r
      </div>\r
      <div class="db-radial-card">\r
        <div class="db-radial-card__chart" id="chart-radial-heures"></div>\r
        <div class="db-radial-card__label">Objectif heures</div>\r
        <div class="db-radial-card__sub">\r
          {{ stats.kpi.heures.total_cumulees }}h / {{ stats.kpi.heures.objectif_annuel }}h\r
          <span *ngIf="heuresRestantes > 0"> \xB7 {{ heuresRestantes }}h restantes</span>\r
        </div>\r
      </div>\r
      <div class="db-radial-card" *ngIf="stats.kpi.formations.obligatoires_total > 0">\r
        <div class="db-radial-card__chart" id="chart-radial-oblig"></div>\r
        <div class="db-radial-card__label">Formations obligatoires</div>\r
        <div class="db-radial-card__sub">\r
          {{ stats.kpi.formations.obligatoires_terminees }} / {{ stats.kpi.formations.obligatoires_total }} termin\xE9es\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="db-kpi-grid db-kpi-grid--4 mb-4">\r
      <div class="db-kpi-card db-kpi-card--teal">\r
        <div class="db-kpi-card__icon"><i class="isax isax-book-1"></i></div>\r
        <div class="db-kpi-card__body">\r
          <div class="db-kpi-card__label">Formations</div>\r
          <div class="db-kpi-card__value">{{ stats.kpi.formations.terminees }}<span class="db-kpi-card__value-total">/{{ stats.kpi.formations.total }}</span></div>\r
          <div class="db-kpi-card__sub">{{ stats.kpi.formations.en_cours }} en cours</div>\r
        </div>\r
        <div class="db-kpi-card__bar" *ngIf="stats.kpi.formations.total > 0">\r
          <div class="db-kpi-bar"><div class="db-kpi-bar__fill db-kpi-bar__fill--teal" [style.width.%]="stats.kpi.formations.taux_completion"></div></div>\r
        </div>\r
      </div>\r
      <div class="db-kpi-card db-kpi-card--blue">\r
        <div class="db-kpi-card__icon"><i class="isax isax-video-play"></i></div>\r
        <div class="db-kpi-card__body">\r
          <div class="db-kpi-card__label">Sessions</div>\r
          <div class="db-kpi-card__value">{{ stats.kpi.sessions.terminees }}<span class="db-kpi-card__value-total">/{{ stats.kpi.sessions.total }}</span></div>\r
          <div class="db-kpi-card__sub">\r
            <span *ngIf="stats.kpi.sessions.total > 0">{{ stats.kpi.sessions.taux }}% termin\xE9es</span>\r
            <span *ngIf="stats.kpi.sessions.total === 0" style="font-style:italic">Aucune assign\xE9e</span>\r
          </div>\r
        </div>\r
        <div class="db-kpi-card__bar" *ngIf="stats.kpi.sessions.total > 0">\r
          <div class="db-kpi-bar"><div class="db-kpi-bar__fill db-kpi-bar__fill--blue" [style.width.%]="stats.kpi.sessions.taux"></div></div>\r
        </div>\r
      </div>\r
      <div class="db-kpi-card db-kpi-card--purple">\r
        <div class="db-kpi-card__icon"><i class="isax isax-routing"></i></div>\r
        <div class="db-kpi-card__body">\r
          <div class="db-kpi-card__label">Parcours</div>\r
          <div class="db-kpi-card__value">{{ stats.kpi.parcours.termines }}<span class="db-kpi-card__value-total">/{{ stats.kpi.parcours.total }}</span></div>\r
          <div class="db-kpi-card__sub">\r
            <span *ngIf="stats.kpi.parcours.total > 0">{{ stats.kpi.parcours.progression }}% de progression</span>\r
            <span *ngIf="stats.kpi.parcours.total === 0" style="font-style:italic">Aucun assign\xE9</span>\r
          </div>\r
        </div>\r
        <div class="db-kpi-card__bar" *ngIf="stats.kpi.parcours.total > 0">\r
          <div class="db-kpi-bar"><div class="db-kpi-bar__fill db-kpi-bar__fill--purple" [style.width.%]="stats.kpi.parcours.taux"></div></div>\r
        </div>\r
      </div>\r
      <div class="db-kpi-card db-kpi-card--green">\r
        <div class="db-kpi-card__icon"><i class="isax isax-book-square"></i></div>\r
        <div class="db-kpi-card__body">\r
          <div class="db-kpi-card__label">Catalogues</div>\r
          <div class="db-kpi-card__value">{{ stats.kpi.catalogues.termines }}<span class="db-kpi-card__value-total">/{{ stats.kpi.catalogues.total }}</span></div>\r
          <div class="db-kpi-card__sub">\r
            <span *ngIf="stats.kpi.catalogues.total > 0">{{ stats.kpi.catalogues.taux }}% compl\xE9t\xE9s</span>\r
            <span *ngIf="stats.kpi.catalogues.total === 0" style="font-style:italic">Aucun assign\xE9</span>\r
          </div>\r
        </div>\r
        <div class="db-kpi-card__bar" *ngIf="stats.kpi.catalogues.total > 0">\r
          <div class="db-kpi-bar"><div class="db-kpi-bar__fill db-kpi-bar__fill--green" [style.width.%]="stats.kpi.catalogues.taux"></div></div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="db-today-grid">\r
      <div class="db-panel">\r
        <div class="db-panel__header">\r
          <div class="db-panel__title"><i class="isax isax-timer me-2"></i>\xC9ch\xE9ances \xE0 venir</div>\r
          <span class="db-panel__count" *ngIf="stats.echeances.length > 0">{{ stats.echeances.length }}</span>\r
        </div>\r
        <div class="db-panel__body">\r
          <div *ngFor="let e of echeancesUrgentes" class="ech-item ech-item--urgent" [ngClass]="getUrgenceClass(e)">\r
            <div class="ech-countdown">\r
              <svg width="52" height="52" viewBox="0 0 52 52">\r
                <circle class="ech-countdown__track" cx="26" cy="26" r="22" stroke-width="4"/>\r
                <circle class="ech-countdown__fill" cx="26" cy="26" r="22" stroke-width="4" [attr.stroke]="getUrgenceStroke(e)" stroke-dasharray="138.2" [attr.stroke-dashoffset]="getCountdownOffset(e.joursRestants)"/>\r
              </svg>\r
              <div class="ech-countdown__label">\r
                <span>{{ e.joursRestants <= 0 ? '!' : e.joursRestants }}</span>\r
                <span class="ech-countdown__unit">{{ e.joursRestants === 1 ? 'jour' : 'jours' }}</span>\r
              </div>\r
            </div>\r
            <div class="ech-body">\r
              <div class="ech-title">{{ e.titre }}</div>\r
              <div class="ech-meta">\r
                <span class="ech-badge" [style.background]="getTypeColor(e.type)">{{ getTypeLabel(e.type) }}</span>\r
                <span class="ech-meta__prog" *ngIf="hasProgression(e.type)"> \xB7 {{ e.progression }}%</span>\r
              </div>\r
              <div class="ech-prog-wrap" *ngIf="hasProgression(e.type)">\r
                <div class="ech-prog-bar"><div class="ech-prog-fill" [style.width.%]="e.progression" [style.background]="getUrgenceStroke(e)"></div></div>\r
                <span class="ech-prog-pct">{{ e.progression }}%</span>\r
              </div>\r
            </div>\r
            <div class="ech-urgence">\r
              <span class="ech-urgence__label" [ngClass]="getUrgenceLabelClass(e)">{{ getUrgenceLabel(e.joursRestants) }}</span>\r
            </div>\r
          </div>\r
          <div *ngFor="let e of echeancesNormales" class="ech-item" [ngClass]="getUrgenceClass(e)">\r
            <div class="ech-countdown">\r
              <svg width="52" height="52" viewBox="0 0 52 52">\r
                <circle class="ech-countdown__track" cx="26" cy="26" r="22" stroke-width="4"/>\r
                <circle class="ech-countdown__fill" cx="26" cy="26" r="22" stroke-width="4" [attr.stroke]="getUrgenceStroke(e)" stroke-dasharray="138.2" [attr.stroke-dashoffset]="getCountdownOffset(e.joursRestants)"/>\r
              </svg>\r
              <div class="ech-countdown__label">\r
                <span>{{ e.joursRestants }}</span>\r
                <span class="ech-countdown__unit">{{ e.joursRestants === 1 ? 'jour' : 'jours' }}</span>\r
              </div>\r
            </div>\r
            <div class="ech-body">\r
              <div class="ech-title">{{ e.titre }}</div>\r
              <div class="ech-meta">\r
                <span class="ech-badge" [style.background]="getTypeColor(e.type)">{{ getTypeLabel(e.type) }}</span>\r
                <span class="ech-meta__prog" *ngIf="hasProgression(e.type)"> \xB7 {{ e.progression }}%</span>\r
              </div>\r
              <div class="ech-prog-wrap" *ngIf="hasProgression(e.type)">\r
                <div class="ech-prog-bar"><div class="ech-prog-fill" [style.width.%]="e.progression" [style.background]="getProgressionColor(e.progression)"></div></div>\r
                <span class="ech-prog-pct">{{ e.progression }}%</span>\r
              </div>\r
            </div>\r
            <div class="ech-urgence">\r
              <span class="ech-urgence__label" [ngClass]="getUrgenceLabelClass(e)">{{ getUrgenceLabel(e.joursRestants) }}</span>\r
            </div>\r
          </div>\r
          <div class="db-empty-mini" *ngIf="stats.echeances.length === 0">\r
            <i class="isax isax-tick-circle"></i><span>Aucune \xE9ch\xE9ance proche</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="db-panel">\r
        <div class="db-panel__header">\r
          <div class="db-panel__title"><i class="isax isax-calendar-tick me-2"></i>Sessions planifi\xE9es</div>\r
        </div>\r
        <div class="db-panel__body">\r
          <div *ngFor="let s of stats.sessions_planifiees" class="db-session-item">\r
            <div class="db-session-item__date">\r
              <span class="db-session-item__day">{{ s.date_debut | date:'dd' }}</span>\r
              <span class="db-session-item__month">{{ s.date_debut | date:'MMM' }}</span>\r
            </div>\r
            <div class="db-session-item__body">\r
              <div class="db-session-item__titre">{{ s.titre }}</div>\r
              <div class="db-session-item__meta">\r
                <i class="isax isax-location me-1"></i>{{ s.lieu || 'En ligne' }}\r
                &nbsp;\xB7&nbsp;\r
                <i class="isax isax-clock me-1"></i>{{ s.date_debut | date:'HH:mm' }} \u2013 {{ s.date_fin | date:'HH:mm' }}\r
              </div>\r
            </div>\r
            <span class="db-session-item__badge">{{ s.type }}</span>\r
          </div>\r
          <div class="db-empty-mini" *ngIf="stats.sessions_planifiees.length === 0">\r
            <i class="isax isax-calendar"></i><span>Aucune session planifi\xE9e</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- ONGLET 2 \u2014 MA PROGRESSION                                           -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="activeTab === 'progression'">\r
\r
    <div class="db-charts-header mb-4">\r
      <h5 class="db-charts-header__title">\xC9volution \u2014 {{ periodeMode === 'mois' ? '12 derniers mois' : '5 derni\xE8res ann\xE9es' }}</h5>\r
      <p class="db-charts-header__sub">Courbes d'\xE9volution des taux \xB7 Histogrammes des volumes par p\xE9riode</p>\r
    </div>\r
\r
    <div class="db-charts-section-label mb-2">\r
      <span class="db-section-badge db-section-badge--teal">Taux d'\xE9volution</span>\r
      <span class="db-section-hint">Courbes en % \u2014 suivez la tendance</span>\r
    </div>\r
\r
    <div class="db-chart-card db-chart-card--highlight mb-3">\r
      <div class="db-chart-card__label">\r
        <span class="db-chart-card__badge db-chart-card__badge--teal">KPI principal</span>\r
        Taux de compl\xE9tion global\r
        <span class="db-chart-card__current">{{ tauxCompletionGlobal }}% actuellement</span>\r
      </div>\r
      <div id="chart-completion"></div>\r
    </div>\r
\r
    <div class="db-chart-grid db-chart-grid--2 mb-4">\r
      <div class="db-chart-card"><div id="chart-taux-abandon"></div></div>\r
      <!-- \u2705 Courbe quiz uniquement si donn\xE9es non nulles -->\r
      <div class="db-chart-card" *ngIf="hasScoresQuiz">\r
        <div id="chart-scores-quiz"></div>\r
      </div>\r
    </div>\r
\r
    <div class="db-charts-section-label mb-2">\r
      <span class="db-section-badge db-section-badge--blue">Volumes par p\xE9riode</span>\r
      <span class="db-section-hint">Histogrammes \u2014 nombre d'\xE9l\xE9ments termin\xE9s</span>\r
    </div>\r
\r
    <div class="db-chart-grid mb-4">\r
      <div class="db-chart-card"><div id="chart-formations-terminees"></div></div>\r
      <div class="db-chart-card"><div id="chart-sessions-terminees"></div></div>\r
      <div class="db-chart-card"><div id="chart-parcours"></div></div>\r
      <div class="db-chart-card"><div id="chart-catalogues"></div></div>\r
      <div class="db-chart-card"><div id="chart-heures"></div></div>\r
      <div class="db-chart-card"><div id="chart-certifications"></div></div>\r
    </div>\r
\r
  </ng-container>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- ONGLET 3 \u2014 MES OBJECTIFS                                            -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="activeTab === 'objectifs'">\r
\r
    <div class="db-objectif-section mb-4">\r
      <div class="db-objectif-header">\r
        <div class="db-objectif-header__icon db-objectif-header__icon--blue"><i class="isax isax-document-text"></i></div>\r
        <div>\r
          <h6 class="db-objectif-header__title">Statut global des demandes</h6>\r
          <p class="db-objectif-header__sub">Toutes cat\xE9gories confondues \u2014 {{ demandesTotal }} demande(s) au total</p>\r
        </div>\r
      </div>\r
      <div *ngIf="demandesTotal > 0" class="db-demandes-chart-wrap"><div id="chart-donut-demandes"></div></div>\r
      <div *ngIf="demandesTotal === 0" class="db-coming-inline">\r
        <i class="isax isax-document me-2"></i>Aucune demande enregistr\xE9e pour le moment\r
      </div>\r
    </div>\r
\r
    <div class="db-objectif-section mb-4">\r
      <div class="db-objectif-header">\r
        <div class="db-objectif-header__icon db-objectif-header__icon--orange"><i class="isax isax-clock"></i></div>\r
        <div>\r
          <h6 class="db-objectif-header__title">Objectif heures de formation</h6>\r
          <p class="db-objectif-header__sub">Heures r\xE9alis\xE9es vs objectif annuel</p>\r
        </div>\r
      </div>\r
      <div class="db-objectif-progress">\r
        <div class="db-objectif-progress__values">\r
          <span class="db-objectif-progress__done">{{ stats.kpi.heures.total_cumulees }}h r\xE9alis\xE9es</span>\r
          <span class="db-objectif-progress__target">objectif {{ stats.kpi.heures.objectif_annuel }}h</span>\r
        </div>\r
        <div class="db-objectif-progress__bar">\r
          <div class="db-objectif-progress__fill" [style.width.%]="stats.kpi.heures.taux_objectif" [style.background]="getProgressionColor(stats.kpi.heures.taux_objectif)"></div>\r
          <span class="db-objectif-progress__pct">{{ stats.kpi.heures.taux_objectif }}%</span>\r
        </div>\r
        <p class="db-objectif-progress__note" *ngIf="heuresRestantes > 0">Il vous reste <strong>{{ heuresRestantes }}h</strong> pour atteindre l'objectif</p>\r
        <p class="db-objectif-progress__note db-objectif-progress__note--success" *ngIf="heuresRestantes === 0">\u2705 Objectif annuel atteint !</p>\r
      </div>\r
    </div>\r
\r
    <div class="db-objectif-section mb-4" *ngIf="stats.kpi.formations.obligatoires_total > 0">\r
      <div class="db-objectif-header">\r
        <div class="db-objectif-header__icon db-objectif-header__icon--red"><i class="isax isax-shield-tick"></i></div>\r
        <div>\r
          <h6 class="db-objectif-header__title">Formations obligatoires</h6>\r
          <p class="db-objectif-header__sub">Formations r\xE9glementaires ou impos\xE9es par l'entreprise</p>\r
        </div>\r
      </div>\r
      <div class="db-objectif-progress">\r
        <div class="db-objectif-progress__values">\r
          <span class="db-objectif-progress__done">{{ stats.kpi.formations.obligatoires_terminees }} termin\xE9es</span>\r
          <span class="db-objectif-progress__target">sur {{ stats.kpi.formations.obligatoires_total }} obligatoires</span>\r
        </div>\r
        <div class="db-objectif-progress__bar">\r
          <div class="db-objectif-progress__fill" [style.width.%]="stats.kpi.formations.taux_obligatoires" [style.background]="getProgressionColor(stats.kpi.formations.taux_obligatoires)"></div>\r
          <span class="db-objectif-progress__pct">{{ stats.kpi.formations.taux_obligatoires }}%</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="db-objectif-section mb-4">\r
      <div class="db-objectif-header">\r
        <div class="db-objectif-header__icon db-objectif-header__icon--teal"><i class="isax isax-task-square"></i></div>\r
        <div>\r
          <h6 class="db-objectif-header__title">Plan de D\xE9veloppement Individuel (PDI)</h6>\r
          <p class="db-objectif-header__sub">Objectifs fix\xE9s avec votre manager</p>\r
        </div>\r
      </div>\r
      <div *ngIf="!stats.kpi.pdi.disponible" class="db-coming-inline">\r
        <i class="isax isax-flash-1 me-2"></i>Fonctionnalit\xE9 \xE0 venir \u2014 Le PDI sera int\xE9gr\xE9 dans une prochaine version\r
      </div>\r
    </div>\r
\r
    <!-- \u2705 SCORES \xC9VALUATIONS -->\r
    <div class="db-objectif-section mb-4">\r
      <div class="db-objectif-header">\r
        <div class="db-objectif-header__icon db-objectif-header__icon--blue"><i class="isax isax-chart-2"></i></div>\r
        <div>\r
          <h6 class="db-objectif-header__title">Score moyen aux \xE9valuations</h6>\r
          <p class="db-objectif-header__sub">R\xE9sultats de vos quiz de fin de formation</p>\r
        </div>\r
      </div>\r
\r
      <ng-container *ngIf="stats.kpi.evaluations.disponible">\r
        <div class="db-pdi-grid mb-3">\r
          <div class="db-pdi-kpi">\r
            <div class="db-pdi-kpi__value" [style.color]="getProgressionColor(stats.kpi.evaluations.score_moyen)">\r
              {{ stats.kpi.evaluations.score_moyen }}<span style="font-size:14px">/100</span>\r
            </div>\r
            <div class="db-pdi-kpi__label">Score moyen</div>\r
          </div>\r
          <div class="db-pdi-kpi">\r
            <div class="db-pdi-kpi__value">{{ stats.kpi.evaluations.nb_passees }}</div>\r
            <div class="db-pdi-kpi__label">Quiz pass\xE9s</div>\r
          </div>\r
          <div class="db-pdi-kpi">\r
            <div class="db-pdi-kpi__value" style="color:#10b981">{{ stats.kpi.evaluations.nb_reussies }}</div>\r
            <div class="db-pdi-kpi__label">Quiz r\xE9ussis</div>\r
          </div>\r
          <div class="db-pdi-kpi">\r
            <div class="db-pdi-kpi__value" [style.color]="getProgressionColor(stats.kpi.evaluations.taux_reussite)">\r
              {{ stats.kpi.evaluations.taux_reussite }}%\r
            </div>\r
            <div class="db-pdi-kpi__label">Taux de r\xE9ussite</div>\r
          </div>\r
        </div>\r
\r
        <div class="db-objectif-progress">\r
          <div class="db-objectif-progress__values">\r
            <span class="db-objectif-progress__done">Score moyen : {{ stats.kpi.evaluations.score_moyen }}%</span>\r
            <span class="db-objectif-progress__target">seuil de r\xE9ussite : 60%</span>\r
          </div>\r
          <div class="db-objectif-progress__bar">\r
            <div class="db-objectif-progress__fill"\r
                 [style.width.%]="stats.kpi.evaluations.score_moyen"\r
                 [style.background]="getProgressionColor(stats.kpi.evaluations.score_moyen)">\r
            </div>\r
            <span class="db-objectif-progress__pct">{{ stats.kpi.evaluations.score_moyen }}%</span>\r
          </div>\r
        </div>\r
\r
        <!-- \u2705 Donut r\xE9ussis/\xE9chou\xE9s \u2014 uniquement si donn\xE9es -->\r
        <div class="db-demandes-chart-wrap mt-3" *ngIf="stats.kpi.evaluations.nb_passees > 0">\r
          <div id="chart-donut-quiz"></div>\r
        </div>\r
      </ng-container>\r
\r
      <div *ngIf="!stats.kpi.evaluations.disponible" class="db-coming-inline">\r
        <i class="isax isax-document-text me-2"></i>\r
        Aucun quiz pass\xE9 pour le moment \u2014 Terminez une formation pour acc\xE9der au quiz final\r
      </div>\r
    </div>\r
\r
    <div class="db-future-grid mt-4">\r
      <div class="db-future-card">\r
        <div class="db-future-card__header">\r
          <div class="db-future-card__icon db-future-card__icon--purple"><i class="isax isax-medal-star"></i></div>\r
          <span class="db-future-badge">\xC0 venir</span>\r
        </div>\r
        <div class="db-future-card__title">Comp\xE9tences valid\xE9es</div>\r
        <p class="db-future-card__desc">{{ stats.kpi_futurs.competences_validees.message }}</p>\r
        <div class="db-future-card__placeholder">\r
          <div class="db-placeholder-bar" style="width:70%"></div>\r
          <div class="db-placeholder-bar" style="width:50%"></div>\r
          <div class="db-placeholder-bar" style="width:85%"></div>\r
        </div>\r
      </div>\r
      <div class="db-future-card">\r
        <div class="db-future-card__header">\r
          <div class="db-future-card__icon db-future-card__icon--orange"><i class="isax isax-award"></i></div>\r
          <span class="db-future-badge">\xC0 venir</span>\r
        </div>\r
        <div class="db-future-card__title">Badges obtenus</div>\r
        <p class="db-future-card__desc">{{ stats.kpi_futurs.badges_obtenus.message }}</p>\r
        <div class="db-future-card__placeholder db-future-card__placeholder--circles">\r
          <div class="db-placeholder-circle"></div>\r
          <div class="db-placeholder-circle"></div>\r
          <div class="db-placeholder-circle"></div>\r
          <div class="db-placeholder-circle db-placeholder-circle--ghost"></div>\r
          <div class="db-placeholder-circle db-placeholder-circle--ghost"></div>\r
        </div>\r
      </div>\r
      <div class="db-future-card">\r
        <div class="db-future-card__header">\r
          <div class="db-future-card__icon db-future-card__icon--teal"><i class="isax isax-ranking"></i></div>\r
          <span class="db-future-badge">\xC0 venir</span>\r
        </div>\r
        <div class="db-future-card__title">Classement</div>\r
        <p class="db-future-card__desc">{{ stats.kpi_futurs.classement.message }}</p>\r
        <div class="db-future-card__placeholder"><div class="db-placeholder-rank">#\u2014</div></div>\r
      </div>\r
      <div class="db-future-card">\r
        <div class="db-future-card__header">\r
          <div class="db-future-card__icon db-future-card__icon--red"><i class="isax isax-radar-2"></i></div>\r
          <span class="db-future-badge">\xC0 venir</span>\r
        </div>\r
        <div class="db-future-card__title">\xC9cart comp\xE9tences cible</div>\r
        <p class="db-future-card__desc">{{ stats.kpi_futurs.ecart_competences.message }}</p>\r
        <div class="db-future-card__placeholder">\r
          <div class="db-placeholder-bar" style="width:60%"></div>\r
          <div class="db-placeholder-bar" style="width:80%"></div>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
\r
</ng-container>`, styles: ["/* src/app/features/student/student-dashboard/student-dashboard.component.scss */\n.db-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  gap: 16px;\n}\n.db-loading__spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: db-spin 0.7s linear infinite;\n}\n.db-loading p {\n  color: #6b7280;\n  font-size: 14px;\n  margin: 0;\n}\n@keyframes db-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.db-page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.db-page-header__title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.db-page-header__sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.db-header-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.db-header-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.db-header-link:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f6;\n}\n.db-header-link__badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 5px;\n  background: #ef4444;\n  color: white;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.db-filters {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.db-filters__toggle {\n  display: flex;\n  background: #f3f4f6;\n  border-radius: 8px;\n  padding: 3px;\n}\n.db-filters__toggle button {\n  padding: 7px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.db-filters__toggle button.active {\n  background: white;\n  color: #111827;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n  font-weight: 600;\n}\n.db-filters__selects {\n  display: flex;\n  gap: 8px;\n}\n.db-filters__label {\n  font-size: 13px;\n  color: #6b7280;\n  padding: 8px 12px;\n  background: #f3f4f6;\n  border-radius: 8px;\n}\n.db-select {\n  padding: 7px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #1f2937;\n  background: white;\n  cursor: pointer;\n  outline: none;\n}\n.db-select:focus {\n  border-color: #069b8f;\n}\n.db-tabs {\n  display: flex;\n  gap: 4px;\n  border-bottom: 2px solid #f3f4f6;\n  padding-bottom: 0;\n}\n.db-tabs__tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.2s;\n  border-radius: 8px 8px 0 0;\n}\n.db-tabs__tab:hover {\n  color: #111827;\n  background: #f9fafb;\n}\n.db-tabs__tab.active {\n  color: #069b8f;\n  border-bottom-color: #069b8f;\n  font-weight: 600;\n  background: #e6f7f6;\n}\n.db-tabs__alert {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  background: #ef4444;\n  color: white;\n  border-radius: 9px;\n  font-size: 10px;\n  font-weight: 700;\n  animation: db-pulse 1.5s ease-in-out infinite;\n}\n.db-tabs__soon {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 6px;\n  background: #ede9fe;\n  color: #7c3aed;\n  border-radius: 4px;\n}\n@keyframes db-pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0.85;\n  }\n}\n.db-alert-banner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  border-left: 4px solid #f59e0b;\n  border-radius: 12px;\n}\n.db-alert-banner__icon {\n  font-size: 22px;\n  color: #f59e0b;\n  flex-shrink: 0;\n}\n.db-alert-banner__body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.db-alert-banner__body strong {\n  font-size: 14px;\n  font-weight: 700;\n  color: #92400e;\n}\n.db-alert-banner__body span {\n  font-size: 13px;\n  color: #b45309;\n}\n.db-alert-banner__count {\n  font-size: 12px;\n  font-weight: 600;\n  color: #f59e0b;\n  white-space: nowrap;\n}\n.db-radial-row {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.db-radial-card {\n  flex: 1;\n  min-width: 160px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px 12px 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n  text-align: center;\n  transition: box-shadow 0.2s;\n}\n.db-radial-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04);\n}\n.db-radial-card__placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 140px;\n}\n.db-radial-card__value {\n  font-size: 28px;\n  font-weight: 800;\n  color: #069b8f;\n}\n.db-radial-card__label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1f2937;\n  margin-top: 4px;\n}\n.db-radial-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.db-kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.db-kpi-grid--5 {\n  grid-template-columns: repeat(5, 1fr);\n}\n@media (max-width: 1200px) {\n  .db-kpi-grid--5 {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .db-kpi-grid--5 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .db-kpi-grid--5 {\n    grid-template-columns: 1fr;\n  }\n}\n.db-kpi-grid--6 {\n  grid-template-columns: repeat(6, 1fr);\n}\n@media (max-width: 1400px) {\n  .db-kpi-grid--6 {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .db-kpi-grid--6 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .db-kpi-grid--6 {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 1024px) {\n  .db-kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .db-kpi-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.db-kpi-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.2s, transform 0.2s;\n  position: relative;\n  overflow: hidden;\n}\n.db-kpi-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04);\n  transform: translateY(-1px);\n}\n.db-kpi-card__icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.db-kpi-card__label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.db-kpi-card__value {\n  font-size: 26px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1;\n}\n.db-kpi-card__value-total {\n  font-size: 16px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.db-kpi-card__sub {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.db-kpi-card--teal .db-kpi-card__icon {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-kpi-card--green .db-kpi-card__icon {\n  background: #d1fae5;\n  color: #10b981;\n}\n.db-kpi-card--purple.db-kpi-card__icon {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.db-kpi-card--orange.db-kpi-card__icon {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.db-kpi-card--blue .db-kpi-card__icon {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-kpi-card--red .db-kpi-card__icon {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.db-kpi-card--teal {\n  border-top: 3px solid #069b8f;\n}\n.db-kpi-card--green {\n  border-top: 3px solid #10b981;\n}\n.db-kpi-card--purple {\n  border-top: 3px solid #7c3aed;\n}\n.db-kpi-card--orange {\n  border-top: 3px solid #f59e0b;\n}\n.db-kpi-card--blue {\n  border-top: 3px solid #3b82f6;\n}\n.db-kpi-card--red {\n  border-top: 3px solid #ef4444;\n}\n.db-kpi-card--warning {\n  border-top: 3px solid #f59e0b;\n}\n.db-kpi-card--warning .db-kpi-card__icon {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.db-kpi-card--warning .db-kpi-card__value {\n  color: #f59e0b;\n}\n.db-kpi-card__bar {\n  margin-top: 2px;\n}\n.db-kpi-bar {\n  height: 6px;\n  background: #f3f4f6;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.db-kpi-bar__fill {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.6s ease;\n}\n.db-kpi-bar__fill--teal {\n  background: #069b8f;\n}\n.db-kpi-bar__fill--green {\n  background: #10b981;\n}\n.db-kpi-bar__fill--blue {\n  background: #3b82f6;\n}\n.db-kpi-bar__fill--orange {\n  background: #f59e0b;\n}\n.db-kpi-bar__fill--purple {\n  background: #7c3aed;\n}\n.db-kpi-bar__fill--red {\n  background: #ef4444;\n}\n.db-today-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .db-today-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.db-panel {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.db-panel__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  background: #f9fafb;\n}\n.db-panel__title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1f2937;\n  display: flex;\n  align-items: center;\n}\n.db-panel__count {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  background: #e6f7f6;\n  color: #069b8f;\n  border-radius: 10px;\n}\n.db-panel__body {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-height: 380px;\n  overflow-y: auto;\n}\n.db-session-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #f3f4f6;\n  background: white;\n}\n.db-session-item__date {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: #dbeafe;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.db-session-item__day {\n  font-size: 16px;\n  font-weight: 800;\n  color: #3b82f6;\n  line-height: 1;\n}\n.db-session-item__month {\n  font-size: 10px;\n  font-weight: 600;\n  color: #3b82f6;\n  text-transform: uppercase;\n}\n.db-session-item__body {\n  flex: 1;\n  min-width: 0;\n}\n.db-session-item__titre {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.db-session-item__meta {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n}\n.db-session-item__badge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  background: #e6f7f6;\n  color: #069b8f;\n  border-radius: 4px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.db-empty-mini {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px 16px;\n  color: #9ca3af;\n}\n.db-empty-mini i {\n  font-size: 28px;\n}\n.db-empty-mini span {\n  font-size: 13px;\n}\n.db-charts-header__title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.db-charts-header__sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.db-chart-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.db-chart-card--highlight {\n  border-top: 3px solid #069b8f;\n  background:\n    linear-gradient(\n      135deg,\n      white 0%,\n      #f0fdfc 100%);\n}\n.db-chart-card__label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.db-chart-card__badge {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.db-chart-card__badge--teal {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-chart-card__current {\n  margin-left: auto;\n  font-size: 18px;\n  font-weight: 800;\n  color: #069b8f;\n}\n.db-chart-card__donut-label {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  margin-top: 8px;\n}\n.db-chart-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .db-chart-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.db-kpi-stat {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.db-kpi-stat__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.db-kpi-stat__icon--blue {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-kpi-stat__icon--teal {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-kpi-stat__icon--green {\n  background: #d1fae5;\n  color: #10b981;\n}\n.db-kpi-stat__label {\n  font-size: 12px;\n  color: #6b7280;\n}\n.db-kpi-stat__value {\n  font-size: 22px;\n  font-weight: 800;\n  color: #111827;\n}\n.db-kpi-stat__bar-wrap {\n  padding: 4px 0 2px;\n}\n.db-kpi-stat__pct {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.db-objectif-section {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.db-objectif-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.db-objectif-header__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.db-objectif-header__icon--teal {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-objectif-header__icon--orange {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.db-objectif-header__icon--red {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.db-objectif-header__icon--blue {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-objectif-header__icon--purple {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.db-objectif-header__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.db-objectif-header__sub {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.db-objectif-progress__values {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  margin-bottom: 8px;\n}\n.db-objectif-progress__done {\n  font-weight: 700;\n  color: #111827;\n}\n.db-objectif-progress__target {\n  color: #9ca3af;\n}\n.db-objectif-progress__bar {\n  height: 10px;\n  background: #f3f4f6;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n}\n.db-objectif-progress__fill {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.8s ease;\n}\n.db-objectif-progress__pct {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 10px;\n  font-weight: 700;\n  color: white;\n}\n.db-objectif-progress__note {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 8px;\n}\n.db-objectif-progress__note--success {\n  color: #10b981;\n  font-weight: 600;\n}\n.db-pdi-grid {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.db-pdi-kpi {\n  flex: 1;\n  min-width: 120px;\n}\n.db-pdi-kpi__value {\n  font-size: 26px;\n  font-weight: 800;\n  color: #069b8f;\n  line-height: 1;\n}\n.db-pdi-kpi__label {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.db-coming-inline {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  background: #ede9fe;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #7c3aed;\n  font-weight: 500;\n}\n.db-future-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .db-future-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.db-future-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 18px 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.db-future-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.db-future-card__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.db-future-card__icon--purple {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.db-future-card__icon--orange {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.db-future-card__icon--blue {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-future-card__icon--green {\n  background: #d1fae5;\n  color: #10b981;\n}\n.db-future-card__icon--teal {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-future-card__icon--red {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.db-future-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.db-future-card__desc {\n  font-size: 12px;\n  color: #9ca3af;\n  margin: 0 0 12px;\n}\n.db-future-card__placeholder {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.db-future-card__placeholder--circles {\n  flex-direction: row;\n  gap: 6px;\n}\n.db-future-badge {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n  background: #ede9fe;\n  color: #7c3aed;\n  border-radius: 4px;\n}\n.db-placeholder-circle,\n.db-placeholder-bar {\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #f9fafb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.db-placeholder-bar {\n  height: 10px;\n}\n.db-placeholder-circle {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.db-placeholder-circle--ghost {\n  opacity: 0.4;\n}\n.db-placeholder-rank,\n.db-placeholder-score {\n  font-size: 28px;\n  font-weight: 800;\n  color: #e5e7eb;\n}\n.ech-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  margin-bottom: 8px;\n  background: var(--color-background-primary);\n  border: 0.5px solid var(--color-border-tertiary);\n  border-left: 4px solid transparent;\n  border-radius: 0 12px 12px 0;\n  transition: background 0.3s;\n}\n.ech-item--urgent,\n.ech-item--critique {\n  border-left-color: #E24B4A;\n  background: #FCEBEB;\n  animation: ech-pulse 2.2s ease-in-out infinite;\n}\n.ech-item--moyenne {\n  border-left-color: #EF9F27;\n  background: white;\n}\n.ech-item--normale {\n  border-left-color: #1D9E75;\n}\n@keyframes ech-pulse {\n  0%, 100% {\n    background: #FCEBEB;\n  }\n  50% {\n    background: #F7C1C1;\n  }\n}\n.ech-countdown {\n  flex-shrink: 0;\n  width: 52px;\n  height: 52px;\n  position: relative;\n}\n.ech-countdown svg {\n  transform: rotate(-90deg);\n}\n.ech-countdown__track {\n  stroke: var(--color-border-tertiary);\n  fill: none;\n}\n.ech-countdown__fill {\n  fill: none;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.6s ease;\n}\n.ech-countdown__label {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  line-height: 1.1;\n}\n.ech-countdown__unit {\n  font-size: 9px;\n  color: var(--color-text-secondary);\n}\n.ech-body {\n  flex: 1;\n  min-width: 0;\n}\n.ech-title {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 4px;\n}\n.ech-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 5px;\n}\n.ech-meta__prog {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n}\n.ech-badge {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: var(--border-radius-md);\n  color: #fff;\n}\n.ech-prog-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ech-prog-bar {\n  flex: 1;\n  height: 4px;\n  background: var(--color-border-tertiary);\n  border-radius: 2px;\n  overflow: hidden;\n}\n.ech-prog-fill {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.6s ease;\n}\n.ech-prog-pct {\n  font-size: 11px;\n  color: var(--color-text-secondary);\n  min-width: 28px;\n  text-align: right;\n}\n.ech-urgence {\n  flex-shrink: 0;\n  text-align: center;\n}\n.ech-urgence__label {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.ech-urgence__label--rouge {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.ech-urgence__label--orange {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ech-urgence__label--vert {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n/*# sourceMappingURL=student-dashboard.component.css.map */\n"] }]
  }], () => [{ type: FormationsService }, { type: DemandeFormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentDashboardComponent, { className: "StudentDashboardComponent", filePath: "src/app/features/student/student-dashboard/student-dashboard.component.ts", lineNumber: 82 });
})();
export {
  StudentDashboardComponent
};
//# sourceMappingURL=chunk-67P2EESZ.js.map
