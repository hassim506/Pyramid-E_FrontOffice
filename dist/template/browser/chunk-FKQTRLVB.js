import {
  DemandeFormationService
} from "./chunk-44TGPX27.js";
import {
  FormationService
} from "./chunk-R5DFAXQH.js";
import "./chunk-GD4TWLVQ.js";
import "./chunk-K7E3GT3E.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IKOSZIEY.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  ChangeDetectorRef,
  Component,
  NgZone,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵinterpolate1,
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
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/student-dashboard/student-dashboard.component.ts
function StudentDashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Chargement de votre tableau de bord...");
    \u0275\u0275elementEnd()();
  }
}
function StudentDashboardComponent_ng_container_1_div_18_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
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
function StudentDashboardComponent_ng_container_1_div_18_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
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
function StudentDashboardComponent_ng_container_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function StudentDashboardComponent_ng_container_1_div_18_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAnnee, $event) || (ctx_r1.selectedAnnee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function StudentDashboardComponent_ng_container_1_div_18_Template_select_change_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnneeChange());
    });
    \u0275\u0275template(2, StudentDashboardComponent_ng_container_1_div_18_option_2_Template, 2, 2, "option", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function StudentDashboardComponent_ng_container_1_div_18_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedMois, $event) || (ctx_r1.selectedMois = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function StudentDashboardComponent_ng_container_1_div_18_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMoisChange());
    });
    \u0275\u0275template(4, StudentDashboardComponent_ng_container_1_div_18_option_4_Template, 2, 2, "option", 22);
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
function StudentDashboardComponent_ng_container_1_div_19_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    \u0275\u0275property("value", a_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r8);
  }
}
function StudentDashboardComponent_ng_container_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function StudentDashboardComponent_ng_container_1_div_19_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAnnee, $event) || (ctx_r1.selectedAnnee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function StudentDashboardComponent_ng_container_1_div_19_Template_select_change_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnneeChange());
    });
    \u0275\u0275template(2, StudentDashboardComponent_ng_container_1_div_19_option_2_Template, 2, 2, "option", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function StudentDashboardComponent_ng_container_1_div_19_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedTrimestre, $event) || (ctx_r1.selectedTrimestre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function StudentDashboardComponent_ng_container_1_div_19_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTrimestreChange());
    });
    \u0275\u0275elementStart(4, "option", 23);
    \u0275\u0275text(5, "T1 \u2014 Jan \xB7 F\xE9v \xB7 Mar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 23);
    \u0275\u0275text(7, "T2 \u2014 Avr \xB7 Mai \xB7 Juin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 23);
    \u0275\u0275text(9, "T3 \u2014 Juil \xB7 Ao\xFB \xB7 Sep");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 23);
    \u0275\u0275text(11, "T4 \u2014 Oct \xB7 Nov \xB7 D\xE9c");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedAnnee);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.annees);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedTrimestre);
    \u0275\u0275advance();
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
  }
}
function StudentDashboardComponent_ng_container_1_div_20_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r10 = ctx.$implicit;
    \u0275\u0275property("value", a_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r10);
  }
}
function StudentDashboardComponent_ng_container_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function StudentDashboardComponent_ng_container_1_div_20_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedAnnee, $event) || (ctx_r1.selectedAnnee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function StudentDashboardComponent_ng_container_1_div_20_Template_select_change_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnneeChange());
    });
    \u0275\u0275template(2, StudentDashboardComponent_ng_container_1_div_20_option_2_Template, 2, 2, "option", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedAnnee);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.annees);
  }
}
function StudentDashboardComponent_ng_container_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.echeancesUrgentes.length);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275element(2, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Certaines formations arrivent \xE0 terme dans moins de 7 jours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 45);
    \u0275\u0275text(9, "\u26A0 Action requise");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.echeancesUrgentes.length, " \xE9ch\xE9ance(s) urgente(s)");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.activitesJour.length);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune activit\xE9 enregistr\xE9e aujourd'hui");
    \u0275\u0275elementEnd()();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "div", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 54)(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 56);
    \u0275\u0275text(10, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "span", 58);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const act_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getActiviteIconClass(act_r11.statut));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getActiviteIcon(act_r11.statut));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(act_r11.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getActiviteTypeLabel(act_r11.type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(act_r11.heure);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getActiviteBadgeClass(act_r11.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getActiviteStatutLabel(act_r11.statut), " ");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stats.echeances.length);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_ng_container_19_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", e_r12.progression, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_ng_container_19_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275element(2, "div", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", e_r12.progression, "%")("background", ctx_r1.getUrgenceStroke(e_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r12.progression, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 59)(2, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 61);
    \u0275\u0275element(4, "circle", 62)(5, "circle", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 64)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 65);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 66)(12, "div", 67);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 68)(15, "span", 69);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, StudentDashboardComponent_ng_container_1_ng_container_32_ng_container_19_span_17_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, StudentDashboardComponent_ng_container_1_ng_container_32_ng_container_19_div_18_Template, 5, 5, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 72)(20, "span", 73);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const e_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getUrgenceClass(e_r12));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("stroke", ctx_r1.getUrgenceStroke(e_r12))("stroke-dashoffset", ctx_r1.getCountdownOffset(e_r12.joursRestants));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r12.joursRestants <= 0 ? "!" : e_r12.joursRestants);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r12.joursRestants === 1 ? "jour" : "jours");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r12.titre);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getTypeColor(e_r12.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(e_r12.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasProgression(e_r12.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasProgression(e_r12.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getUrgenceLabelClass(e_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getUrgenceLabel(e_r12.joursRestants));
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_ng_container_20_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", e_r13.progression, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_ng_container_20_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275element(2, "div", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", e_r13.progression, "%")("background", ctx_r1.getProgressionColor(e_r13.progression));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r13.progression, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 79)(2, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 61);
    \u0275\u0275element(4, "circle", 62)(5, "circle", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 64)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 65);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 66)(12, "div", 67);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 68)(15, "span", 69);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, StudentDashboardComponent_ng_container_1_ng_container_32_ng_container_20_span_17_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, StudentDashboardComponent_ng_container_1_ng_container_32_ng_container_20_div_18_Template, 5, 5, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 72)(20, "span", 73);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const e_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getUrgenceClass(e_r13));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("stroke", ctx_r1.getUrgenceStroke(e_r13))("stroke-dashoffset", ctx_r1.getCountdownOffset(e_r13.joursRestants));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r13.joursRestants);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r13.joursRestants === 1 ? "jour" : "jours");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r13.titre);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getTypeColor(e_r13.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(e_r13.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasProgression(e_r13.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasProgression(e_r13.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getUrgenceLabelClass(e_r13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getUrgenceLabel(e_r13.joursRestants));
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune \xE9ch\xE9ance proche");
    \u0275\u0275elementEnd()();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "span", 83);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 84);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 85)(9, "div", 86);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 87);
    \u0275\u0275element(12, "i", 88);
    \u0275\u0275text(13);
    \u0275\u0275element(14, "i", 89);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span", 90);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 7, s_r14.date_debut, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, s_r14.date_debut, "MMM"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r14.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", s_r14.lieu || "En ligne", " \xA0\xB7\xA0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(16, 13, s_r14.date_debut, "HH:mm"), " \u2013 ", \u0275\u0275pipeBind2(17, 16, s_r14.date_fin, "HH:mm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r14.type);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune session planifi\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentDashboardComponent_ng_container_1_ng_container_32_div_1_Template, 10, 1, "div", 25);
    \u0275\u0275elementStart(2, "div", 26)(3, "div", 27)(4, "div", 28)(5, "div", 29);
    \u0275\u0275element(6, "i", 30);
    \u0275\u0275text(7, "Activit\xE9s du jour");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, StudentDashboardComponent_ng_container_1_ng_container_32_span_8_Template, 2, 1, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 32);
    \u0275\u0275template(10, StudentDashboardComponent_ng_container_1_ng_container_32_div_10_Template, 4, 0, "div", 33)(11, StudentDashboardComponent_ng_container_1_ng_container_32_div_11_Template, 15, 7, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 27)(13, "div", 28)(14, "div", 29);
    \u0275\u0275element(15, "i", 35);
    \u0275\u0275text(16, "\xC9ch\xE9ances \xE0 venir");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, StudentDashboardComponent_ng_container_1_ng_container_32_span_17_Template, 2, 1, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 32);
    \u0275\u0275template(19, StudentDashboardComponent_ng_container_1_ng_container_32_ng_container_19_Template, 22, 13, "ng-container", 36)(20, StudentDashboardComponent_ng_container_1_ng_container_32_ng_container_20_Template, 22, 13, "ng-container", 36)(21, StudentDashboardComponent_ng_container_1_ng_container_32_div_21_Template, 4, 0, "div", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 37)(23, "div", 28)(24, "div", 29);
    \u0275\u0275element(25, "i", 38);
    \u0275\u0275text(26, "Sessions planifi\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 39);
    \u0275\u0275template(28, StudentDashboardComponent_ng_container_1_ng_container_32_div_28_Template, 20, 19, "div", 40)(29, StudentDashboardComponent_ng_container_1_ng_container_32_div_29_Template, 4, 0, "div", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasUrgences);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.activitesJour.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activitesJour.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.activitesJour);
    \u0275\u0275advance(6);
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
function StudentDashboardComponent_ng_container_1_ng_container_33_div_13_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 1, b_r15.date, "dd/MM/yyyy"), " ");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 147);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 148)(4, "div", 149);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 150);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, StudentDashboardComponent_ng_container_1_ng_container_33_div_13_div_1_div_8_Template, 4, 4, "div", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "i", 152);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", b_r15.couleur + "20")("color", b_r15.couleur);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", b_r15.icone));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r15.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r15.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r15.date);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", b_r15.couleur);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275template(1, StudentDashboardComponent_ng_container_1_ng_container_33_div_13_div_1_Template, 10, 12, "div", 145);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.badgesObtenus.slice(0, 2));
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "div", 155);
    \u0275\u0275text(2, "\xC0 d\xE9bloquer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 156)(4, "div", 157)(5, "div", 158);
    \u0275\u0275element(6, "i", 159);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 148)(8, "div", 160);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 150);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.badgesVerrouilles[0].nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.badgesVerrouilles[0].description);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 161)(1, "div", 162)(2, "span", 163);
    \u0275\u0275text(3, "Votre score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 164);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 165);
    \u0275\u0275element(7, "div", 166);
    \u0275\u0275elementStart(8, "span", 167);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.myScore, " / 100");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.myScore, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.myScore, "%");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 114);
    \u0275\u0275element(2, "span", 115);
    \u0275\u0275elementStart(3, "span", 116);
    \u0275\u0275text(4, "Quiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 168)(6, "div", 94)(7, "div", 141);
    \u0275\u0275element(8, "i", 169);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "h6", 97);
    \u0275\u0275text(11, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 98);
    \u0275\u0275text(13, "R\xE9sultats de vos quiz de fin de formation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 170)(15, "div", 171)(16, "div", 172);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 173);
    \u0275\u0275text(19, "Quiz pass\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 171)(21, "div", 174);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 173);
    \u0275\u0275text(24, "Quiz r\xE9ussis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 171)(26, "div", 172);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 173);
    \u0275\u0275text(29, "Taux de r\xE9ussite");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 175)(31, "div", 122)(32, "div", 118);
    \u0275\u0275text(33, "Taux de r\xE9ussite aux quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "div", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 122)(36, "div", 118);
    \u0275\u0275text(37, "Score moyen aux quiz \u2014 r\xE9partition mensuelle");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "div", 177);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi.evaluations.nb_passees);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi.evaluations.nb_reussies);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.getProgressionColor(ctx_r1.stats.kpi.evaluations.taux_reussite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.kpi.evaluations.taux_reussite, "% ");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_span_84_Template(rf, ctx) {
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
function StudentDashboardComponent_ng_container_1_ng_container_33_span_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 178);
    \u0275\u0275text(1, "Aucune assign\xE9e");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_span_96_Template(rf, ctx) {
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
function StudentDashboardComponent_ng_container_1_ng_container_33_span_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 178);
    \u0275\u0275text(1, "Aucun assign\xE9");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_span_108_Template(rf, ctx) {
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
function StudentDashboardComponent_ng_container_1_ng_container_33_span_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 178);
    \u0275\u0275text(1, "Aucun assign\xE9");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_ng_container_126_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 188);
    \u0275\u0275text(1, " \u2705 Toutes les comp\xE9tences recommand\xE9es ont \xE9t\xE9 acquises ! ");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_ng_container_126_p_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 189);
    \u0275\u0275text(1, " \u{1F7E1} Bonne progression \u2014 encore ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \xE0 acqu\xE9rir. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.kpi.ecart_competences.total_ecart, " comp\xE9tence(s)");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_ng_container_126_p_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 189);
    \u0275\u0275text(1, " \u{1F4CC} ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " restantes \xE0 acqu\xE9rir pour combler l'\xE9cart. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.kpi.ecart_competences.total_ecart, " comp\xE9tence(s)");
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_ng_container_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 170)(2, "div", 171)(3, "div", 179);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 173);
    \u0275\u0275text(6, "Acquises");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 171)(8, "div", 180);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 173);
    \u0275\u0275text(11, "Recommand\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 171)(13, "div", 172);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 173);
    \u0275\u0275text(16, "\xC9cart restant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 171)(18, "div", 172);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 173);
    \u0275\u0275text(21, "Couverture");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 181)(23, "div", 162)(24, "span", 163);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 164);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 165);
    \u0275\u0275element(29, "div", 182);
    \u0275\u0275elementStart(30, "span", 167);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, StudentDashboardComponent_ng_container_1_ng_container_33_ng_container_126_p_32_Template, 2, 0, "p", 183)(33, StudentDashboardComponent_ng_container_1_ng_container_33_ng_container_126_p_33_Template, 5, 1, "p", 184)(34, StudentDashboardComponent_ng_container_1_ng_container_33_ng_container_126_p_34_Template, 5, 1, "p", 184);
    \u0275\u0275elementStart(35, "div", 185);
    \u0275\u0275element(36, "i", 186);
    \u0275\u0275elementStart(37, "a", 187);
    \u0275\u0275text(38, "Voir les comp\xE9tences \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.kpi.ecart_competences.total_acquises, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.kpi.ecart_competences.total_visees, " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.stats.kpi.ecart_competences.total_ecart > 0 ? "#ef4444" : "#10b981");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.kpi.ecart_competences.total_ecart, " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.getProgressionColor(ctx_r1.stats.kpi.ecart_competences.taux_couverture));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.kpi.ecart_competences.taux_couverture, "% ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.kpi.ecart_competences.total_acquises, " comp\xE9tences acquises ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Objectif : ", ctx_r1.stats.kpi.ecart_competences.total_visees, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.stats.kpi.ecart_competences.taux_couverture, "%")("background", ctx_r1.getProgressionColor(ctx_r1.stats.kpi.ecart_competences.taux_couverture));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.kpi.ecart_competences.taux_couverture, "% ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.ecart_competences.total_ecart === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.ecart_competences.total_ecart > 0 && ctx_r1.stats.kpi.ecart_competences.taux_couverture >= 75);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.ecart_competences.total_ecart > 0 && ctx_r1.stats.kpi.ecart_competences.taux_couverture < 75);
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 190);
    \u0275\u0275element(1, "i", 191);
    \u0275\u0275text(2, "Aucune comp\xE9tence recommand\xE9e d\xE9tect\xE9e pour ce collaborateur ");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 192);
    \u0275\u0275element(1, "div", 193);
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_div_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 190);
    \u0275\u0275element(1, "i", 194);
    \u0275\u0275text(2, "Aucune demande enregistr\xE9e pour le moment ");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_ng_container_1_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 92)(2, "div", 93)(3, "div", 94)(4, "div", 95);
    \u0275\u0275element(5, "i", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h6", 97);
    \u0275\u0275text(8, "Badges obtenus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 98);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 99);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, StudentDashboardComponent_ng_container_1_ng_container_33_div_13_Template, 2, 1, "div", 100)(14, StudentDashboardComponent_ng_container_1_ng_container_33_div_14_Template, 12, 2, "div", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 93)(16, "div", 94)(17, "div", 95);
    \u0275\u0275element(18, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "h6", 97);
    \u0275\u0275text(21, "Mon classement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 98);
    \u0275\u0275text(23, "Votre position par rapport \xE0 vos coll\xE8gues");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "span", 103);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 104)(27, "div", 105);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 106)(30, "div", 107);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 108);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 109)(35, "span", 110);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 111);
    \u0275\u0275text(38, "pts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(39, StudentDashboardComponent_ng_container_1_ng_container_33_div_39_Template, 10, 4, "div", 112);
    \u0275\u0275elementStart(40, "p", 113);
    \u0275\u0275text(41, "Le d\xE9tail du classement est confidentiel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 114);
    \u0275\u0275element(43, "span", 115);
    \u0275\u0275elementStart(44, "span", 116);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 92)(47, "div", 117)(48, "div", 118)(49, "span", 119);
    \u0275\u0275text(50, "KPI principal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Taux de compl\xE9tion global ");
    \u0275\u0275elementStart(52, "span", 120);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(54, "div", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 122)(56, "div", 118);
    \u0275\u0275text(57, " Taux d'abandon ");
    \u0275\u0275elementStart(58, "span", 123);
    \u0275\u0275text(59, "Non termin\xE9s + expir\xE9s / total assign\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(60, "div", 124);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, StudentDashboardComponent_ng_container_1_ng_container_33_ng_container_61_Template, 39, 5, "ng-container", 1);
    \u0275\u0275elementStart(62, "div", 125)(63, "div", 126);
    \u0275\u0275element(64, "div", 127);
    \u0275\u0275elementStart(65, "div", 128)(66, "div", 129);
    \u0275\u0275text(67, "Formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 130);
    \u0275\u0275text(69);
    \u0275\u0275elementStart(70, "span", 131);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 132);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "div", 126);
    \u0275\u0275element(75, "div", 133);
    \u0275\u0275elementStart(76, "div", 128)(77, "div", 129);
    \u0275\u0275text(78, "Sessions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 130);
    \u0275\u0275text(80);
    \u0275\u0275elementStart(81, "span", 131);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 132);
    \u0275\u0275template(84, StudentDashboardComponent_ng_container_1_ng_container_33_span_84_Template, 2, 1, "span", 1)(85, StudentDashboardComponent_ng_container_1_ng_container_33_span_85_Template, 2, 0, "span", 134);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 126);
    \u0275\u0275element(87, "div", 135);
    \u0275\u0275elementStart(88, "div", 128)(89, "div", 129);
    \u0275\u0275text(90, "Parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 130);
    \u0275\u0275text(92);
    \u0275\u0275elementStart(93, "span", 131);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 132);
    \u0275\u0275template(96, StudentDashboardComponent_ng_container_1_ng_container_33_span_96_Template, 2, 1, "span", 1)(97, StudentDashboardComponent_ng_container_1_ng_container_33_span_97_Template, 2, 0, "span", 134);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "div", 126);
    \u0275\u0275element(99, "div", 136);
    \u0275\u0275elementStart(100, "div", 128)(101, "div", 129);
    \u0275\u0275text(102, "Catalogues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 130);
    \u0275\u0275text(104);
    \u0275\u0275elementStart(105, "span", 131);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 132);
    \u0275\u0275template(108, StudentDashboardComponent_ng_container_1_ng_container_33_span_108_Template, 2, 1, "span", 1)(109, StudentDashboardComponent_ng_container_1_ng_container_33_span_109_Template, 2, 0, "span", 134);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(110, "div", 114);
    \u0275\u0275element(111, "span", 115);
    \u0275\u0275elementStart(112, "span", 116);
    \u0275\u0275text(113, "Autres KPI");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 137)(115, "div", 93)(116, "div", 94)(117, "div", 138);
    \u0275\u0275element(118, "i", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div")(120, "h6", 97);
    \u0275\u0275text(121, "\xC9cart de comp\xE9tences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "p", 98);
    \u0275\u0275text(123, "Comp\xE9tences acquises vs comp\xE9tences recommand\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "span", 99);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(126, StudentDashboardComponent_ng_container_1_ng_container_33_ng_container_126_Template, 39, 18, "ng-container", 1)(127, StudentDashboardComponent_ng_container_1_ng_container_33_div_127_Template, 3, 0, "div", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div", 93)(129, "div", 94)(130, "div", 141);
    \u0275\u0275element(131, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div")(133, "h6", 97);
    \u0275\u0275text(134, "Statut global des demandes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "p", 98);
    \u0275\u0275text(136);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(137, StudentDashboardComponent_ng_container_1_ng_container_33_div_137_Template, 2, 0, "div", 143)(138, StudentDashboardComponent_ng_container_1_ng_container_33_div_138_Template, 3, 0, "div", 140);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate2("", ctx_r1.badgesObtenus.length, " badge(s) d\xE9bloqu\xE9(s) sur ", ctx_r1.badges.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.badgesObtenus.length, "/", ctx_r1.badges.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.badgesObtenus.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.badgesVerrouilles.length > 0);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("#", ctx_r1.monClassement ?? "\u2013");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getRangMedal(ctx_r1.monClassement ?? 0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", ctx_r1.monClassement ?? "\u2013");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("sur ", ctx_r1.classement.length, " participants");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.myScore);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.monClassement);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Progression globale \u2014 ", ctx_r1.labelPeriodeSelectionnee);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.tauxCompletionGlobal, "%");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.evaluations.disponible);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi.formations.terminees);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx_r1.stats.kpi.formations.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.kpi.formations.en_cours, " en cours");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi.sessions.terminees);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx_r1.stats.kpi.sessions.total);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.sessions.total > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.sessions.total === 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi.parcours.termines);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx_r1.stats.kpi.parcours.total);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.parcours.total > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.parcours.total === 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.kpi.catalogues.termines);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx_r1.stats.kpi.catalogues.total);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.catalogues.total > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.catalogues.total === 0);
    \u0275\u0275advance(15);
    \u0275\u0275styleProp("background", ctx_r1.getProgressionColor(ctx_r1.stats.kpi.ecart_competences.taux_couverture) + "20")("color", ctx_r1.getProgressionColor(ctx_r1.stats.kpi.ecart_competences.taux_couverture));
    \u0275\u0275classProp("db-badge-count-pill--green", ctx_r1.stats.kpi.ecart_competences.taux_couverture >= 75)("db-badge-count-pill--orange", ctx_r1.stats.kpi.ecart_competences.taux_couverture >= 40 && ctx_r1.stats.kpi.ecart_competences.taux_couverture < 75)("db-badge-count-pill--red", ctx_r1.stats.kpi.ecart_competences.taux_couverture < 40);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.kpi.ecart_competences.taux_couverture, "% ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.ecart_competences.total_visees > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.kpi.ecart_competences.total_visees === 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Toutes cat\xE9gories \u2014 ", ctx_r1.demandesTotal, " demande(s) au total");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandesTotal > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandesTotal === 0);
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "button", 9);
    \u0275\u0275listener("click", function StudentDashboardComponent_ng_container_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.periodeMode = "mois";
      return \u0275\u0275resetView(ctx_r1.onPeriodeChange());
    });
    \u0275\u0275element(10, "i", 10);
    \u0275\u0275text(11, "Mensuel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 9);
    \u0275\u0275listener("click", function StudentDashboardComponent_ng_container_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.periodeMode = "trimestre";
      return \u0275\u0275resetView(ctx_r1.onPeriodeChange());
    });
    \u0275\u0275element(13, "i", 11);
    \u0275\u0275text(14, "Trimestriel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 9);
    \u0275\u0275listener("click", function StudentDashboardComponent_ng_container_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.periodeMode = "annee";
      return \u0275\u0275resetView(ctx_r1.onPeriodeChange());
    });
    \u0275\u0275element(16, "i", 12);
    \u0275\u0275text(17, "Annuel ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, StudentDashboardComponent_ng_container_1_div_18_Template, 5, 4, "div", 13)(19, StudentDashboardComponent_ng_container_1_div_19_Template, 12, 7, "div", 13)(20, StudentDashboardComponent_ng_container_1_div_20_Template, 3, 2, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 14)(22, "button", 15);
    \u0275\u0275listener("click", function StudentDashboardComponent_ng_container_1_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("aujourdhui"));
    });
    \u0275\u0275element(23, "i", 16);
    \u0275\u0275text(24, "Aujourd'hui ");
    \u0275\u0275template(25, StudentDashboardComponent_ng_container_1_span_25_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 15);
    \u0275\u0275listener("click", function StudentDashboardComponent_ng_container_1_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("progression"));
    });
    \u0275\u0275element(27, "i", 18);
    \u0275\u0275text(28, "Mes Performances ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 15);
    \u0275\u0275listener("click", function StudentDashboardComponent_ng_container_1_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab("objectifs"));
    });
    \u0275\u0275element(30, "i", 19);
    \u0275\u0275text(31, "Mes objectifs ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, StudentDashboardComponent_ng_container_1_ng_container_32_Template, 30, 10, "ng-container", 1)(33, StudentDashboardComponent_ng_container_1_ng_container_33_Template, 139, 46, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.labelPeriodeSelectionnee, " \u2014 Suivez vos formations, votre progression et vos objectifs ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.periodeMode === "mois");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.periodeMode === "trimestre");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.periodeMode === "annee");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.periodeMode === "mois");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.periodeMode === "trimestre");
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
  }
}
var StudentDashboardComponent = class _StudentDashboardComponent {
  formationsService;
  demandeFormationService;
  cdr;
  ngZone;
  loading = true;
  stats = null;
  periodeMode = "mois";
  selectedAnnee = (/* @__PURE__ */ new Date()).getFullYear();
  selectedMois = (/* @__PURE__ */ new Date()).getMonth() + 1;
  selectedTrimestre = Math.ceil(((/* @__PURE__ */ new Date()).getMonth() + 1) / 3);
  annees = [];
  moisLabels = ["Jan", "F\xE9v", "Mar", "Avr", "Mai", "Juin", "Juil", "Ao\xFB", "Sep", "Oct", "Nov", "D\xE9c"];
  activeTab = "aujourdhui";
  badges = [
    { id: 1, nom: "Premier pas", description: "Premi\xE8re formation termin\xE9e", icone: "isax-medal-star", couleur: "#f59e0b", obtenu: true, date: "2025-01-15" },
    { id: 2, nom: "Expert", description: "10 formations termin\xE9es", icone: "isax-award", couleur: "#7c3aed", obtenu: false }
  ];
  classement = [
    { rang: 1, nom: "Aminata D.", avatar: "AD", score: 98, isMe: false },
    { rang: 2, nom: "Ibrahima S.", avatar: "IS", score: 91, isMe: false },
    { rang: 3, nom: "Moi", avatar: "ME", score: 84, isMe: true },
    { rang: 4, nom: "Fatou N.", avatar: "FN", score: 76, isMe: false },
    { rang: 5, nom: "Omar B.", avatar: "OB", score: 70, isMe: false }
  ];
  charts = {};
  chartsInitialized = false;
  pendingCharts = false;
  // ── CORRECTIF : liste des IDs de charts par onglet ──────────────────────
  CHART_IDS_PROGRESSION = [
    "radial-formations",
    "radial-sessions",
    "radial-parcours",
    "radial-catalogues",
    "chart-completion",
    "chart-taux-abandon",
    "chart-formations-terminees",
    "chart-sessions-terminees",
    "chart-parcours-termines",
    "chart-catalogues-termines",
    "chart-heures",
    "chart-certifications",
    "chart-donut-quiz-perf",
    "chart-score-moyen-bar",
    "chart-donut-demandes",
    "chart-ecart-competences-courbe"
  ];
  CHART_IDS_OBJECTIFS = [
    "chart-donut-heures"
  ];
  constructor(formationsService, demandeFormationService, cdr, ngZone) {
    this.formationsService = formationsService;
    this.demandeFormationService = demandeFormationService;
    this.cdr = cdr;
    this.ngZone = ngZone;
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
  // ── CORRECTIF PRINCIPAL ─────────────────────────────────────────────────
  // On cherche l'ancre de l'onglet courant, pas un seul id fixe.
  // Si l'ancre est présente ET non vide (offsetParent != null), on lance les charts.
  ngAfterViewChecked() {
    if (!this.pendingCharts || !this.stats || this.chartsInitialized)
      return;
    const anchorId = this.getAnchorChartId();
    if (!anchorId) {
      this.pendingCharts = false;
      return;
    }
    const el = document.getElementById(anchorId);
    if (!el || el.offsetParent === null || el.getBoundingClientRect().width === 0)
      return;
    this.pendingCharts = false;
    this.chartsInitialized = true;
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.initChartsPourOnglet(), 150);
    });
  }
  // ── LOGIQUE DE DONNÉES ─────────────────────────────────────────────────────
  get labelPeriodeSelectionnee() {
    if (this.periodeMode === "mois")
      return `${this.moisLabels[this.selectedMois - 1]} ${this.selectedAnnee}`;
    if (this.periodeMode === "trimestre") {
      const labels = ["T1 (Jan\u2013Mar)", "T2 (Avr\u2013Juin)", "T3 (Juil\u2013Sep)", "T4 (Oct\u2013D\xE9c)"];
      return `${labels[this.selectedTrimestre - 1]} ${this.selectedAnnee}`;
    }
    return `Ann\xE9e ${this.selectedAnnee}`;
  }
  loadStats() {
    this.loading = true;
    this.chartsInitialized = false;
    this.pendingCharts = false;
    this.destroyAllCharts();
    this.formationsService.getDashboardStats({
      periode: this.periodeMode,
      annee: this.selectedAnnee,
      mois: this.selectedMois,
      trimestre: this.selectedTrimestre
    }).subscribe({
      next: (res) => {
        this.stats = res.data;
        this.loading = false;
        this.cdr.detectChanges();
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
      const { debut: pDebut, fin: pFin } = this.getPeriodeBornes();
      const formationsEcheance = formations.filter((f) => f.date_fin_prevue && new Date(f.date_fin_prevue) >= pDebut && new Date(f.date_fin_prevue) <= pFin);
      const heuresDues = Math.round(formationsEcheance.reduce((s, f) => s + (f.duree_totale ?? 0), 0) / 60 * 10) / 10;
      const heuresTerminees = Math.round(formationsEcheance.filter((f) => f.statut_formation === "termine").reduce((s, f) => s + (f.duree_totale ?? 0), 0) / 60 * 10) / 10;
      const courbes = this.buildCourbesAngular(formations, demandes, certs);
      this.stats = {
        kpi: {
          formations: {
            total: formations.length,
            en_cours: enCours.length,
            terminees: terminees.length,
            progression_moy: Math.round(progMoy * 10) / 10,
            taux_completion: formations.length ? Math.round(terminees.length / formations.length * 100) : 0,
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
            heures_produites_periode: 0,
            taux_heures_produites: 0,
            heures_dues_periode: heuresDues,
            heures_terminees_periode: heuresTerminees,
            heures_restantes_periode: Math.max(0, heuresDues - heuresTerminees),
            taux_heures_periode: heuresDues > 0 ? Math.min(100, Math.round(heuresTerminees / heuresDues * 100)) : 0,
            total_cumulees: Math.round(terminees.reduce((s, f) => s + (f.duree_totale ?? 0), 0) / 60 * 10) / 10,
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
          evaluations: { disponible: false, score_moyen: 0, nb_passees: 0, nb_reussies: 0, taux_reussite: 0 },
          competences_periode: { liste: [], total: 0 },
          ecart_competences: { total_visees: 0, total_acquises: 0, total_ecart: 0, taux_couverture: 0 }
        },
        courbes,
        echeances: formations.filter((f) => f.statut_formation === "en_cours" && f.date_fin_prevue).map((f) => {
          const jr = Math.ceil((new Date(f.date_fin_prevue).getTime() - Date.now()) / 864e5);
          return { id: f.id, titre: f.titre, type: f.est_obligatoire ? "obligatoire" : "formation", deadline: f.date_fin_prevue, joursRestants: jr, progression: f.progression ?? 0, urgent: jr <= 7 };
        }).sort((a, b) => a.joursRestants - b.joursRestants).slice(0, 5),
        sessions_planifiees: [],
        activites_jour: [],
        kpi_futurs: {
          competences_validees: { disponible: false, total: 0, liste: [] },
          badges_obtenus: { disponible: true, message: "" },
          classement: { disponible: true, message: "" },
          ecart_competences: { disponible: true, message: "" },
          formations_recommandees: { disponible: false, message: "\xC0 venir" }
        }
      };
      this.loading = false;
      this.cdr.detectChanges();
      this.scheduleCharts();
    }).catch(() => {
      this.loading = false;
    });
  }
  getPeriodeBornes() {
    const d = new Date(this.selectedAnnee, this.selectedMois - 1, 1);
    const f = new Date(this.selectedAnnee, this.selectedMois, 0, 23, 59, 59);
    return { debut: d, fin: f };
  }
  buildCourbesAngular(formations, demandes, certs) {
    return {
      labels: this.moisLabels,
      formationsTerminees: new Array(12).fill(0),
      certificationsObtenues: new Array(12).fill(0),
      heuresCumulees: new Array(12).fill(0),
      heuresProduites: new Array(12).fill(0),
      progressionParcours: new Array(12).fill(0),
      progressionCatalogues: new Array(12).fill(0),
      sessionsTerminees: new Array(12).fill(0),
      tauxCompletion: new Array(12).fill(0),
      tauxAbandonCourbe: new Array(12).fill(0),
      scoresQuiz: new Array(12).fill(0),
      tauxCouvertureCompetences: new Array(12).fill(0)
    };
  }
  // ── CHARTS MANAGEMENT ──────────────────────────────────────────────────────
  scheduleCharts() {
    if (!this.stats)
      return;
    this.pendingCharts = true;
    this.cdr.detectChanges();
  }
  // ── CORRECTIF : ancre par onglet actif ──────────────────────────────────
  getAnchorChartId() {
    if (this.activeTab === "progression")
      return "radial-formations";
    if (this.activeTab === "objectifs")
      return "chart-donut-heures";
    return null;
  }
  // ── CORRECTIF : détruire uniquement les charts de l'onglet courant ──────
  // (ou tous lors d'un rechargement complet)
  destroyAllCharts() {
    Object.values(this.charts).forEach((c) => {
      try {
        c?.destroy();
      } catch {
      }
    });
    this.charts = {};
  }
  destroyChartsForTab(tab) {
    const ids = tab === "progression" ? this.CHART_IDS_PROGRESSION : tab === "objectifs" ? this.CHART_IDS_OBJECTIFS : [];
    ids.forEach((id) => {
      if (this.charts[id]) {
        try {
          this.charts[id].destroy();
        } catch {
        }
        delete this.charts[id];
      }
    });
  }
  initChartsPourOnglet() {
    if (!this.stats)
      return;
    const c = this.stats.courbes;
    if (this.activeTab === "progression") {
      this.renderRadial("radial-formations", this.stats.kpi.formations.taux_completion, "#069b8f");
      this.renderRadial("radial-sessions", this.stats.kpi.sessions.taux, "#3b82f6");
      this.renderRadial("radial-parcours", this.stats.kpi.parcours.progression, "#7c3aed");
      this.renderRadial("radial-catalogues", this.stats.kpi.catalogues.taux, "#10b981");
      this.renderChart("chart-completion", this.buildAreaConfig(c.labels, [{ name: "Taux (%)", data: c.tauxCompletion, color: "#069b8f" }], "Taux de compl\xE9tion global"));
      this.renderChart("chart-taux-abandon", this.buildAreaConfig(c.labels, [{ name: "Taux abandon (%)", data: c.tauxAbandonCourbe, color: "#ef4444" }], "Taux d'abandon"));
      this.renderChart("chart-formations-terminees", this.buildBarConfig(c.labels, [{ name: "Formations", data: c.formationsTerminees, color: "#069b8f" }], "Formations termin\xE9es"));
      this.renderChart("chart-sessions-terminees", this.buildBarConfig(c.labels, [{ name: "Sessions", data: c.sessionsTerminees, color: "#3b82f6" }], "Sessions termin\xE9es"));
      this.renderChart("chart-parcours-termines", this.buildBarConfig(c.labels, [{ name: "Parcours", data: c.progressionParcours, color: "#7c3aed" }], "Parcours termin\xE9s"));
      this.renderChart("chart-catalogues-termines", this.buildBarConfig(c.labels, [{ name: "Catalogues", data: c.progressionCatalogues, color: "#10b981" }], "Catalogues termin\xE9s"));
      this.renderChart("chart-heures", this.buildBarConfig(c.labels, [{ name: "Heures produites", data: c.heuresProduites, color: "#f59e0b" }], "Heures produites"));
      this.renderChart("chart-certifications", this.buildBarConfig(c.labels, [{ name: "Certifications", data: c.certificationsObtenues, color: "#f59e0b" }], "Certifications obtenues"));
      if (this.stats.kpi.evaluations.disponible) {
        const e = this.stats.kpi.evaluations;
        this.renderPie3D("chart-donut-quiz-perf", [e.nb_reussies, e.nb_passees - e.nb_reussies], ["R\xE9ussis", "\xC9chou\xE9s"], ["#10b981", "#ef4444"]);
        this.renderChart("chart-score-moyen-bar", {
          series: [{ name: "Score moyen", data: c.scoresQuiz }],
          chart: { type: "bar", height: 240, toolbar: { show: false } },
          colors: ["#7c3aed"],
          xaxis: { categories: c.labels },
          yaxis: { min: 0, max: 100, tickAmount: 5 },
          plotOptions: {
            bar: { borderRadius: 5, columnWidth: "55%", dataLabels: { position: "top" } }
          },
          dataLabels: {
            enabled: true,
            formatter: (val) => val > 0 ? val + "/100" : "",
            offsetY: -20,
            style: { fontSize: "11px", fontWeight: 700, colors: ["#334155"] }
          },
          annotations: {
            yaxis: [{
              y: 60,
              borderColor: "#ef4444",
              strokeDashArray: 5,
              label: {
                text: "Seuil 60",
                position: "right",
                style: { color: "#ef4444", fontSize: "11px", background: "transparent" }
              }
            }]
          }
        });
      }
      const d = this.stats.kpi.demandes;
      if (d.total > 0) {
        this.renderPie3D("chart-donut-demandes", [d.validees, d.en_attente, d.refusees], ["Valid\xE9es", "En attente", "Refus\xE9es"], ["#10b981", "#f59e0b", "#ef4444"]);
      }
    }
    if (this.activeTab === "objectifs") {
      const h = this.stats.kpi.heures;
      if (h.heures_dues_periode > 0) {
        this.renderDonutNoLegend("chart-donut-heures", [h.heures_terminees_periode, h.heures_restantes_periode], ["Termin\xE9es", "Restantes"], ["#10b981", "#ef4444"]);
      } else {
        this.renderDonutVide("chart-donut-heures");
      }
    }
  }
  renderRadial(id, valeur, color) {
    const el = document.getElementById(id);
    if (!el || this.charts[id])
      return;
    const chart = new ApexCharts(el, {
      series: [Math.min(100, Math.max(0, valeur ?? 0))],
      chart: { type: "radialBar", height: 110, sparkline: { enabled: true } },
      plotOptions: { radialBar: { hollow: { size: "60%" }, dataLabels: { name: { show: false }, value: { offsetY: 6, fontSize: "16px", fontWeight: 800, color, formatter: (v) => v + "%" } } } },
      fill: { colors: [color] },
      stroke: { lineCap: "round" }
    });
    chart.render();
    this.charts[id] = chart;
  }
  renderChart(id, config) {
    const el = document.getElementById(id);
    if (!el || this.charts[id])
      return;
    const chart = new ApexCharts(el, config);
    chart.render();
    this.charts[id] = chart;
  }
  buildAreaConfig(labels, series, title) {
    return {
      series,
      chart: { type: "area", height: 200, toolbar: { show: false } },
      xaxis: { categories: labels },
      yaxis: { min: 0, max: 100, tickAmount: 5 },
      stroke: { curve: "smooth", width: 2 },
      fill: { type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.05 } },
      title: { text: title },
      colors: series.map((s) => s.color ?? "#069b8f")
    };
  }
  buildBarConfig(labels, series, title) {
    return {
      series,
      chart: { type: "bar", height: 200, toolbar: { show: false } },
      xaxis: { categories: labels },
      colors: series.map((s) => s.color ?? "#069b8f"),
      title: { text: title },
      plotOptions: { bar: { borderRadius: 4 } }
    };
  }
  // ── PIE 3D ────────────────────────────────────────────────────────────────
  renderPie3D(id, series, labels, colors) {
    const el = document.getElementById(id);
    if (!el || this.charts[id])
      return;
    const chart = new ApexCharts(el, {
      series,
      labels,
      colors,
      chart: {
        type: "pie",
        height: 240,
        events: {
          rendered: () => {
            const svg = el.querySelector("svg");
            if (svg) {
              svg.style.transform = "rotateX(18deg) scaleY(0.88)";
              svg.style.transformOrigin = "center bottom";
              svg.style.filter = "drop-shadow(0 8px 10px rgba(0,0,0,0.18))";
            }
          }
        }
      },
      legend: {
        show: true,
        position: "left",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 500,
        markers: { width: 10, height: 10, radius: 5 },
        itemMargin: { vertical: 6 },
        formatter: (label, opts) => {
          const val = opts.w.globals.series[opts.seriesIndex];
          const total = opts.w.globals.series.reduce((a, b) => a + b, 0);
          const pct = total > 0 ? Math.round(val / total * 100) : 0;
          return `${label}: <b>${val}</b> (${pct}%)`;
        }
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => Math.round(val) + "%",
        style: { fontSize: "12px", fontWeight: 700 },
        dropShadow: { enabled: false }
      },
      stroke: { width: 2, colors: ["#fff"] },
      tooltip: { y: { formatter: (val) => val + " demande(s)" } }
    });
    chart.render();
    this.charts[id] = chart;
  }
  renderDonutNoLegend(id, series, labels, colors) {
    const el = document.getElementById(id);
    if (!el || this.charts[id])
      return;
    const chart = new ApexCharts(el, {
      series,
      labels,
      colors,
      chart: { type: "donut", height: 220 },
      legend: { show: false }
    });
    chart.render();
    this.charts[id] = chart;
  }
  renderDonutWithLegend(id, series, labels, colors) {
    const el = document.getElementById(id);
    if (!el || this.charts[id])
      return;
    const chart = new ApexCharts(el, {
      series,
      labels,
      colors,
      chart: { type: "donut", height: 220 },
      legend: {
        show: true,
        position: "left",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 500,
        markers: { width: 10, height: 10, radius: 5 },
        itemMargin: { vertical: 6 },
        formatter: (label, opts) => {
          const val = opts.w.globals.series[opts.seriesIndex];
          return `${label}: <b>${val}</b>`;
        }
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => Math.round(val) + "%",
        style: { fontSize: "11px", fontWeight: 700 }
      },
      plotOptions: { pie: { donut: { size: "60%" } } },
      stroke: { width: 2 }
    });
    chart.render();
    this.charts[id] = chart;
  }
  renderDonutVide(id) {
    const el = document.getElementById(id);
    if (!el || this.charts[id])
      return;
    const chart = new ApexCharts(el, {
      series: [1],
      labels: ["Aucune donn\xE9e"],
      colors: ["#e2e8f0"],
      chart: { type: "donut", height: 220 },
      legend: { show: false },
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
      plotOptions: {
        pie: {
          donut: {
            size: "60%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "Compl\xE9t\xE9",
                fontSize: "13px",
                fontWeight: 600,
                color: "#94a3b8",
                formatter: () => "0%"
              }
            }
          }
        }
      },
      states: {
        hover: { filter: { type: "none" } },
        active: { filter: { type: "none" } }
      }
    });
    chart.render();
    this.charts[id] = chart;
  }
  // ── GETTERS ET HELPERS ─────────────────────────────────────────────────────
  // ── CORRECTIF : setTab détruit uniquement les charts de l'onglet qu'on quitte
  setTab(tab) {
    if (this.activeTab === tab)
      return;
    this.destroyChartsForTab(this.activeTab);
    this.activeTab = tab;
    this.chartsInitialized = false;
    this.pendingCharts = false;
    this.cdr.detectChanges();
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
  onTrimestreChange() {
    this.loadStats();
  }
  get activitesJour() {
    return this.stats?.activites_jour ?? [];
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
  get demandesTotal() {
    return this.stats?.kpi.demandes.total ?? 0;
  }
  get tauxCompletionGlobal() {
    return this.stats?.kpi?.formations?.taux_completion ?? 0;
  }
  get hasScoresQuiz() {
    return (this.stats?.courbes?.scoresQuiz ?? []).some((v) => v > 0);
  }
  get competencesPeriode() {
    return this.stats?.kpi?.competences_periode?.liste ?? [];
  }
  get competencesPeriodeVisibles() {
    return this.competencesPeriode.slice(0, 8);
  }
  get competencesPeriodeRestantes() {
    return Math.max(0, this.competencesPeriode.length - 8);
  }
  get badgesObtenus() {
    return this.badges.filter((b) => b.obtenu);
  }
  get badgesVerrouilles() {
    return this.badges.filter((b) => !b.obtenu);
  }
  get monClassement() {
    return this.classement.find((c) => c.isMe)?.rang ?? null;
  }
  get myScore() {
    return this.classement.find((c) => c.isMe)?.score ?? 0;
  }
  getActiviteIcon(statut) {
    return { termine: "isax-tick-circle", demarre: "isax-play-circle", repris: "isax-refresh-circle" }[statut] ?? "isax-book-1";
  }
  getActiviteIconClass(statut) {
    return { termine: "db-activity-item__icon--green", demarre: "db-activity-item__icon--teal", repris: "db-activity-item__icon--blue" }[statut] ?? "";
  }
  getActiviteStatutLabel(statut) {
    return { termine: "Termin\xE9", demarre: "D\xE9marr\xE9", repris: "Repris" }[statut] ?? statut;
  }
  getActiviteBadgeClass(statut) {
    return { termine: "db-activity-item__badge--green", demarre: "db-activity-item__badge--teal", repris: "db-activity-item__badge--blue" }[statut] ?? "";
  }
  getActiviteTypeLabel(type) {
    return { formation: "Formation", session: "Session", parcours: "Parcours", catalogue: "Catalogue" }[type] ?? type;
  }
  getProgressionColor(v) {
    return this.getProgressionColorStatic(v);
  }
  getProgressionColorStatic(v) {
    const val = v ?? 0;
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
    return Math.round(138.2 * (1 - Math.min(joursRestants, 30) / 30));
  }
  getUrgenceLabel(j) {
    if (j <= 0)
      return "Expir\xE9";
    if (j === 1)
      return "Demain";
    return `Dans ${j}j`;
  }
  getTypeLabel(type) {
    return { obligatoire: "Obligatoire", formation: "Formation", parcours: "Parcours", catalogue: "Catalogue", session: "Session" }[type] ?? type;
  }
  getTypeColor(type) {
    return { obligatoire: "#ef4444", formation: "#069b8f", parcours: "#7c3aed", catalogue: "#3b82f6", session: "#f59e0b" }[type] ?? "#9ca3af";
  }
  hasProgression(type) {
    return type !== "catalogue";
  }
  getRangClass(rang) {
    if (rang === 1)
      return "cl-entry--gold";
    if (rang === 2)
      return "cl-entry--silver";
    if (rang === 3)
      return "cl-entry--bronze";
    return "";
  }
  getRangMedal(rang) {
    if (rang === 1)
      return "\u{1F947}";
    if (rang === 2)
      return "\u{1F948}";
    if (rang === 3)
      return "\u{1F949}";
    return String(rang);
    ;
    ;
    ;
  }
  static \u0275fac = function StudentDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentDashboardComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(DemandeFormationService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentDashboardComponent, selectors: [["app-student-dashboard"]], decls: 2, vars: 2, consts: [["class", "db-loading", 4, "ngIf"], [4, "ngIf"], [1, "db-loading"], [1, "qq-loading__ring"], [1, "db-page-header", "mb-4"], [1, "db-page-header__title"], [1, "db-page-header__sub"], [1, "db-filters", "mb-4"], [1, "db-filters__toggle"], [3, "click"], [1, "isax", "isax-calendar", "me-1"], [1, "isax", "isax-calendar-tick", "me-1"], [1, "isax", "isax-calendar-2", "me-1"], ["class", "db-filters__selects", 4, "ngIf"], [1, "db-tabs", "mb-4"], [1, "db-tabs__tab", 3, "click"], [1, "isax", "isax-sun", "me-1"], ["class", "db-tabs__alert", 4, "ngIf"], [1, "isax", "isax-chart-2", "me-1"], [1, "isax", "isax-flag", "me-1"], [1, "db-filters__selects"], [1, "db-select", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "db-tabs__alert"], ["class", "db-alert-banner mb-4", 4, "ngIf"], [1, "db-today-grid"], [1, "db-panel"], [1, "db-panel__header"], [1, "db-panel__title"], [1, "isax", "isax-activity", "me-2"], ["class", "db-panel__count", 4, "ngIf"], [1, "db-panel__body"], ["class", "db-empty-mini", 4, "ngIf"], ["class", "db-activity-item", 4, "ngFor", "ngForOf"], [1, "isax", "isax-timer", "me-2"], [4, "ngFor", "ngForOf"], [1, "db-panel", "db-panel--full"], [1, "isax", "isax-calendar-tick", "me-2"], [1, "db-panel__body", "db-panel__body--row"], ["class", "db-session-item", 4, "ngFor", "ngForOf"], [1, "db-alert-banner", "mb-4"], [1, "db-alert-banner__icon"], [1, "isax", "isax-warning-2"], [1, "db-alert-banner__body"], [1, "db-alert-banner__count"], [1, "db-panel__count"], [1, "db-empty-mini"], [1, "isax", "isax-coffee"], [1, "db-activity-item"], [1, "db-activity-item__icon", 3, "ngClass"], [1, "isax", 3, "ngClass"], [1, "db-activity-item__body"], [1, "db-activity-item__titre"], [1, "db-activity-item__meta"], [1, "db-activity-item__type"], [1, "db-activity-item__sep"], [1, "db-activity-item__heure"], [1, "db-activity-item__badge", 3, "ngClass"], [1, "ech-item", "ech-item--urgent", 3, "ngClass"], [1, "ech-countdown"], ["width", "52", "height", "52", "viewBox", "0 0 52 52"], ["cx", "26", "cy", "26", "r", "22", "stroke-width", "4", 1, "ech-countdown__track"], ["cx", "26", "cy", "26", "r", "22", "stroke-width", "4", "stroke-dasharray", "138.2", 1, "ech-countdown__fill"], [1, "ech-countdown__label"], [1, "ech-countdown__unit"], [1, "ech-body"], [1, "ech-title"], [1, "ech-meta"], [1, "ech-badge"], ["class", "ech-meta__prog", 4, "ngIf"], ["class", "ech-prog-wrap", 4, "ngIf"], [1, "ech-urgence"], [1, "ech-urgence__label", 3, "ngClass"], [1, "ech-meta__prog"], [1, "ech-prog-wrap"], [1, "ech-prog-bar"], [1, "ech-prog-fill"], [1, "ech-prog-pct"], [1, "ech-item", 3, "ngClass"], [1, "isax", "isax-tick-circle"], [1, "db-session-item"], [1, "db-session-item__date"], [1, "db-session-item__day"], [1, "db-session-item__month"], [1, "db-session-item__body"], [1, "db-session-item__titre"], [1, "db-session-item__meta"], [1, "isax", "isax-location", "me-1"], [1, "isax", "isax-clock", "me-1"], [1, "db-session-item__badge"], [1, "isax", "isax-calendar"], [1, "db-perf-top-grid", "mb-4"], [1, "db-objectif-section"], [1, "db-objectif-header"], [1, "db-objectif-header__icon", "db-objectif-header__icon--orange"], [1, "isax", "isax-award"], [1, "db-objectif-header__title"], [1, "db-objectif-header__sub"], [1, "db-badge-count-pill", "ms-auto"], ["class", "db-badges-grid", 4, "ngIf"], ["class", "db-badges-locked", 4, "ngIf"], [1, "isax", "isax-ranking"], [1, "db-badge-count-pill", "db-badge-count-pill--indigo", "ms-auto"], [1, "db-rank-display"], [1, "db-rank-display__medal"], [1, "db-rank-display__body"], [1, "db-rank-display__value"], [1, "db-rank-display__label"], [1, "db-rank-display__score"], [1, "db-rank-display__pts"], [1, "db-rank-display__pts-label"], ["class", "db-objectif-progress mt-3", 4, "ngIf"], [1, "db-objectif-progress__note", "mt-2", 2, "font-style", "italic"], [1, "db-section-label", "mb-3"], [1, "db-section-label__bar"], [1, "db-section-label__text"], [1, "db-chart-card", "db-chart-card--highlight"], [1, "db-chart-card__label"], [1, "db-chart-card__badge", "db-chart-card__badge--teal"], [1, "db-chart-card__current"], ["id", "chart-completion", 2, "min-height", "200px"], [1, "db-chart-card"], [1, "db-chart-card__hint"], ["id", "chart-taux-abandon", 2, "min-height", "200px"], [1, "db-radial-grid", "mb-4"], [1, "db-radial-card"], ["id", "radial-formations", 1, "db-radial-card__chart"], [1, "db-radial-card__body"], [1, "db-radial-card__label"], [1, "db-radial-card__value"], [1, "db-radial-card__total"], [1, "db-radial-card__sub"], ["id", "radial-sessions", 1, "db-radial-card__chart"], ["style", "font-style:italic", 4, "ngIf"], ["id", "radial-parcours", 1, "db-radial-card__chart"], ["id", "radial-catalogues", 1, "db-radial-card__chart"], [1, "db-autres-kpi-col", "mb-4"], [1, "db-objectif-header__icon", "db-objectif-header__icon--purple"], [1, "isax", "isax-medal-star"], ["class", "db-coming-inline", 4, "ngIf"], [1, "db-objectif-header__icon", "db-objectif-header__icon--blue"], [1, "isax", "isax-document-text"], ["class", "db-donut-legend-layout", 4, "ngIf"], [1, "db-badges-grid"], ["class", "db-badge-item db-badge-item--obtenu", 4, "ngFor", "ngForOf"], [1, "db-badge-item", "db-badge-item--obtenu"], [1, "db-badge-item__icon"], [1, "db-badge-item__info"], [1, "db-badge-item__nom"], [1, "db-badge-item__desc"], ["class", "db-badge-item__date", 4, "ngIf"], [1, "isax", "isax-tick-circle", "db-badge-item__check"], [1, "db-badge-item__date"], [1, "db-badges-locked"], [1, "db-badges-locked__label"], [1, "db-badges-grid", "db-badges-grid--locked"], [1, "db-badge-item", "db-badge-item--locked"], [1, "db-badge-item__icon", "db-badge-item__icon--locked"], [1, "isax", "isax-lock"], [1, "db-badge-item__nom", "db-badge-item__nom--locked"], [1, "db-objectif-progress", "mt-3"], [1, "db-objectif-progress__values"], [1, "db-objectif-progress__done"], [1, "db-objectif-progress__target"], [1, "db-objectif-progress__bar"], [1, "db-objectif-progress__fill", 2, "background", "#069b8f"], [1, "db-objectif-progress__pct"], [1, "db-objectif-section", "mb-4"], [1, "isax", "isax-chart-2"], [1, "db-pdi-grid", "mb-3"], [1, "db-pdi-kpi"], [1, "db-pdi-kpi__value"], [1, "db-pdi-kpi__label"], [1, "db-pdi-kpi__value", 2, "color", "#10b981"], [1, "db-chart-grid", "db-chart-grid--2"], ["id", "chart-donut-quiz-perf", 1, "db-pie3d-wrap", 2, "min-height", "240px"], ["id", "chart-score-moyen-bar", 2, "min-height", "240px"], [2, "font-style", "italic"], [1, "db-pdi-kpi__value", 2, "color", "#069b8f"], [1, "db-pdi-kpi__value", 2, "color", "#3b82f6"], [1, "db-objectif-progress", "mb-3"], [1, "db-objectif-progress__fill"], ["class", "db-objectif-progress__note db-objectif-progress__note--success", 4, "ngIf"], ["class", "db-objectif-progress__note", 4, "ngIf"], [1, "db-coming-inline", "db-coming-inline--link", "mt-2"], [1, "isax", "isax-arrow-right-3", "me-2"], ["routerLink", "/student/ecart-competences"], [1, "db-objectif-progress__note", "db-objectif-progress__note--success"], [1, "db-objectif-progress__note"], [1, "db-coming-inline"], [1, "isax", "isax-medal-star", "me-2"], [1, "db-donut-legend-layout"], ["id", "chart-donut-demandes", 1, "db-donut-legend-layout__chart", 2, "min-height", "240px"], [1, "isax", "isax-document", "me-2"]], template: function StudentDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StudentDashboardComponent_div_0_Template, 8, 0, "div", 0)(1, StudentDashboardComponent_ng_container_1_Template, 34, 19, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.stats);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, DatePipe], styles: ["\n\n.db-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  gap: 16px;\n}\n.db-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n  margin: 0;\n}\n.qq-loading__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes _ngcontent-%COMP%_qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.db-page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.db-page-header__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.db-page-header__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n  margin: 0;\n}\n.db-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.db-filters__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f1f5f9;\n  border-radius: 8px;\n  padding: 3px;\n}\n.db-filters__toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.db-filters__toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: white;\n  color: #0f172a;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  font-weight: 600;\n}\n.db-filters__selects[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.db-select[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #1e293b;\n  background: white;\n  cursor: pointer;\n  outline: none;\n}\n.db-select[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n}\n.db-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  border-bottom: 2px solid #f1f5f9;\n}\n.db-tabs__tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.2s;\n  border-radius: 8px 8px 0 0;\n}\n.db-tabs__tab[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  background: #f8fafc;\n}\n.db-tabs__tab.active[_ngcontent-%COMP%] {\n  color: #069b8f;\n  border-bottom-color: #069b8f;\n  font-weight: 600;\n  background: #e6f7f6;\n}\n.db-tabs__alert[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  background: #ef4444;\n  color: white;\n  border-radius: 9px;\n  font-size: 10px;\n  font-weight: 700;\n  animation: _ngcontent-%COMP%_db-pulse 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_db-pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0.85;\n  }\n}\n.db-section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.db-section-label__bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 4px;\n  height: 18px;\n  background: #069b8f;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.db-section-label__text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.db-alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  border-left: 4px solid #f59e0b;\n  border-radius: 14px;\n}\n.db-alert-banner__icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #f59e0b;\n  flex-shrink: 0;\n}\n.db-alert-banner__body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.db-alert-banner__body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #92400e;\n}\n.db-alert-banner__body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #b45309;\n}\n.db-alert-banner__count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #f59e0b;\n  white-space: nowrap;\n}\n.db-radial-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n@media (max-width: 1024px) {\n  .db-radial-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .db-radial-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-radial-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.db-radial-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.db-radial-card__chart[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n}\n.db-radial-card__body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.db-radial-card__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.db-radial-card__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.db-radial-card__total[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #94a3b8;\n}\n.db-radial-card__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 3px;\n}\n.db-today-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .db-today-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-panel[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.db-panel--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.db-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  background: #f8fafc;\n}\n.db-panel__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1e293b;\n  display: flex;\n  align-items: center;\n}\n.db-panel__count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  background: #e6f7f6;\n  color: #069b8f;\n  border-radius: 10px;\n}\n.db-panel__body[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 360px;\n  overflow-y: auto;\n}\n.db-panel__body--row[_ngcontent-%COMP%] {\n  flex-direction: column;\n  max-height: none;\n}\n.db-activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #f1f5f9;\n  background: white;\n  transition: all 0.2s ease;\n}\n.db-activity-item[_ngcontent-%COMP%]:hover {\n  border-color: #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.db-activity-item__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.db-activity-item__icon--green[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #10b981;\n}\n.db-activity-item__icon--teal[_ngcontent-%COMP%] {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-activity-item__icon--blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-activity-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.db-activity-item__titre[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.db-activity-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 2px;\n}\n.db-activity-item__type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.db-activity-item__sep[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #cbd5e1;\n}\n.db-activity-item__heure[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-variant-numeric: tabular-nums;\n}\n.db-activity-item__badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 99px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.db-activity-item__badge--green[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: rgb(12.752238806, 147.447761194, 102.8149253731);\n}\n.db-activity-item__badge--teal[_ngcontent-%COMP%] {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-activity-item__badge--blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-session-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #f1f5f9;\n  background: white;\n}\n.db-session-item__date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: #dbeafe;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.db-session-item__day[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #3b82f6;\n  line-height: 1;\n}\n.db-session-item__month[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #3b82f6;\n  text-transform: uppercase;\n}\n.db-session-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.db-session-item__titre[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.db-session-item__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n}\n.db-session-item__badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  background: #e6f7f6;\n  color: #069b8f;\n  border-radius: 4px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.db-empty-mini[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px 16px;\n  color: #94a3b8;\n}\n.db-empty-mini[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.db-empty-mini[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.db-charts-header__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.db-charts-header__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n  margin: 0;\n}\n.db-chart-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 18px 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.db-chart-card--highlight[_ngcontent-%COMP%] {\n  border-top: 3px solid #069b8f;\n  background:\n    linear-gradient(\n      135deg,\n      white 0%,\n      #f0fdfc 100%);\n}\n.db-chart-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.db-chart-card__hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-style: italic;\n}\n.db-chart-card__badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.db-chart-card__badge--teal[_ngcontent-%COMP%] {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-chart-card__current[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 18px;\n  font-weight: 800;\n  color: #069b8f;\n}\n.db-chart-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .db-chart-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-chart-grid--2[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, 1fr);\n}\n@media (max-width: 768px) {\n  .db-chart-grid--2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-pie3d-wrap[_ngcontent-%COMP%] {\n  overflow: visible;\n  padding-bottom: 20px;\n}\n.db-pie3d-wrap[_ngcontent-%COMP%]   .apexcharts-canvas[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n.db-objectif-section[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.db-objectif-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.db-objectif-header__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.db-objectif-header__icon--teal[_ngcontent-%COMP%] {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-objectif-header__icon--orange[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.db-objectif-header__icon--red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.db-objectif-header__icon--blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-objectif-header__icon--purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.db-objectif-header__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.db-objectif-header__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n  margin: 0;\n}\n.db-objectif-progress__values[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  margin-bottom: 8px;\n}\n.db-objectif-progress__done[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n}\n.db-objectif-progress__target[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.db-objectif-progress__bar[_ngcontent-%COMP%] {\n  height: 10px;\n  background: #f1f5f9;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n}\n.db-objectif-progress__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.8s ease;\n}\n.db-objectif-progress__pct[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 10px;\n  font-weight: 700;\n  color: white;\n}\n.db-objectif-progress__note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n  margin-top: 8px;\n}\n.db-objectif-progress__note--success[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-weight: 600;\n}\n.db-heures-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .db-heures-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-heures-kpi[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 14px 16px;\n  text-align: center;\n}\n.db-heures-kpi__val[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 4px;\n}\n.db-heures-kpi__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.db-heures-kpi--total[_ngcontent-%COMP%] {\n  background: #dbeafe;\n}\n.db-heures-kpi--total[_ngcontent-%COMP%]   .db-heures-kpi__val[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.db-heures-kpi--done[_ngcontent-%COMP%] {\n  background: #d1fae5;\n}\n.db-heures-kpi--done[_ngcontent-%COMP%]   .db-heures-kpi__val[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.db-heures-kpi--reste[_ngcontent-%COMP%] {\n  background: #fef3c7;\n}\n.db-heures-kpi--reste[_ngcontent-%COMP%]   .db-heures-kpi__val[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.db-pdi-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.db-pdi-kpi[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n}\n.db-pdi-kpi__value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #069b8f;\n  line-height: 1;\n}\n.db-pdi-kpi__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n  margin-top: 4px;\n}\n.db-coming-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  background: #ede9fe;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #7c3aed;\n  font-weight: 500;\n}\n.db-demandes-chart-wrap[_ngcontent-%COMP%] {\n}\n.db-competences-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.db-competences-count__val[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  color: #7c3aed;\n  line-height: 1;\n}\n.db-competences-count__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n}\n.db-competences-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.db-competence-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #ede9fe;\n  color: #7c3aed;\n  font-size: 11px;\n  font-weight: 600;\n}\n.db-competence-tag--more[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  font-style: italic;\n}\n.db-future-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .db-future-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-future-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 18px 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  transition: box-shadow 0.2s;\n}\n.db-future-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.db-future-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.db-future-card__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.db-future-card__icon--purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.db-future-card__icon--orange[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.db-future-card__icon--teal[_ngcontent-%COMP%] {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-future-card__icon--red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.db-future-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.db-future-card__desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0 0 12px;\n}\n.db-future-card__placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.db-future-card__placeholder--circles[_ngcontent-%COMP%] {\n  flex-direction: row;\n  gap: 6px;\n  align-items: center;\n}\n.db-future-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n  background: #ede9fe;\n  color: #7c3aed;\n  border-radius: 4px;\n}\n.db-placeholder-circle[_ngcontent-%COMP%], \n.db-placeholder-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #f8fafc 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.db-placeholder-bar[_ngcontent-%COMP%] {\n  height: 10px;\n}\n.db-placeholder-circle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.db-placeholder-circle--ghost[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.ech-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  margin-bottom: 4px;\n  background: white;\n  border: 0.5px solid #e2e8f0;\n  border-left: 4px solid transparent;\n  border-radius: 0 12px 12px 0;\n  transition: background 0.3s;\n}\n.ech-item--urgent[_ngcontent-%COMP%], \n.ech-item--critique[_ngcontent-%COMP%] {\n  border-left-color: #E24B4A;\n  background: #FCEBEB;\n  animation: _ngcontent-%COMP%_ech-pulse 2.2s ease-in-out infinite;\n}\n.ech-item--moyenne[_ngcontent-%COMP%] {\n  border-left-color: #EF9F27;\n  background: white;\n}\n.ech-item--normale[_ngcontent-%COMP%] {\n  border-left-color: #1D9E75;\n}\n@keyframes _ngcontent-%COMP%_ech-pulse {\n  0%, 100% {\n    background: #FCEBEB;\n  }\n  50% {\n    background: #F7C1C1;\n  }\n}\n.ech-countdown[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 52px;\n  height: 52px;\n  position: relative;\n}\n.ech-countdown[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.ech-countdown__track[_ngcontent-%COMP%] {\n  stroke: #e2e8f0;\n  fill: none;\n}\n.ech-countdown__fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.6s ease;\n}\n.ech-countdown__label[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1e293b;\n  line-height: 1.1;\n}\n.ech-countdown__unit[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #94a3b8;\n}\n.ech-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ech-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1e293b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 4px;\n}\n.ech-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 5px;\n}\n.ech-meta__prog[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n}\n.ech-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 8px;\n  color: #fff;\n}\n.ech-prog-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ech-prog-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: #e2e8f0;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.ech-prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.6s ease;\n}\n.ech-prog-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  min-width: 28px;\n  text-align: right;\n}\n.ech-urgence[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  text-align: center;\n}\n.ech-urgence__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.ech-urgence__label--rouge[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.ech-urgence__label--orange[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ech-urgence__label--vert[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.db-perf-top-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .db-perf-top-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-obj-top-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .db-obj-top-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-donut-legend-layout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.db-donut-legend-layout__legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  min-width: 150px;\n  flex-shrink: 0;\n}\n.db-donut-legend-layout__chart[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.db-legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.db-legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.db-legend-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n  color: #475569;\n  white-space: nowrap;\n}\n.db-legend-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.db-badge-count-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 800;\n  background: #fef3c7;\n  color: #d97706;\n  border: 1.5px solid #fde68a;\n  white-space: nowrap;\n}\n.db-badge-count-pill--indigo[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #4f46e5;\n  border-color: #c7d2fe;\n}\n.db-badges-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 14px;\n}\n.db-badges-grid--locked[_ngcontent-%COMP%] {\n  margin-top: 0;\n  opacity: 0.65;\n}\n.db-badge-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.db-badge-item--obtenu[_ngcontent-%COMP%] {\n  border-color: #d1fae5;\n  background: #f0fdf4;\n}\n.db-badge-item--obtenu[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);\n  transform: translateY(-1px);\n}\n.db-badge-item--locked[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-color: #e2e8f0;\n}\n.db-badge-item__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.db-badge-item__icon--locked[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.db-badge-item__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.db-badge-item__nom[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 2px;\n}\n.db-badge-item__nom--locked[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.db-badge-item__desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n}\n.db-badge-item__date[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #10b981;\n  font-weight: 600;\n  margin-top: 3px;\n  display: flex;\n  align-items: center;\n}\n.db-badge-item__date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.db-badge-item__check[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.db-badges-locked[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px dashed #e2e8f0;\n}\n.db-badges-locked__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.db-classement-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 14px;\n}\n.db-cl-entry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n.db-cl-entry[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n}\n.db-cl-entry--me[_ngcontent-%COMP%] {\n  border-color: #069b8f;\n  background:\n    linear-gradient(\n      135deg,\n      #e6f7f5 0%,\n      #fff 60%);\n  box-shadow: 0 0 0 2px rgba(6, 155, 143, 0.15);\n}\n.db-cl-entry--gold[_ngcontent-%COMP%]   .db-cl-entry__rang[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.db-cl-entry--silver[_ngcontent-%COMP%]   .db-cl-entry__rang[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.db-cl-entry--bronze[_ngcontent-%COMP%]   .db-cl-entry__rang[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.db-cl-entry__rang[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 28px;\n  text-align: center;\n  flex-shrink: 0;\n  font-weight: 800;\n  color: #94a3b8;\n}\n.db-cl-entry__avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.db-cl-entry__avatar--me[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n}\n.db-cl-entry__nom[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.db-cl-entry__me-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  background: #069b8f;\n  color: #fff;\n  border-radius: 99px;\n}\n.db-cl-entry__score[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.db-cl-entry__score-val[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.db-cl-entry__score-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.db-cl-entry__bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: #f1f5f9;\n}\n.db-cl-entry__bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.6s ease;\n}\n.db-rank-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #e6f7f5 0%,\n      #f0fdf4 100%);\n  border-radius: 12px;\n  border: 1.5px solid #069b8f;\n}\n.db-rank-display__medal[_ngcontent-%COMP%] {\n  font-size: 40px;\n  flex-shrink: 0;\n}\n.db-rank-display__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.db-rank-display__value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 900;\n  color: #069b8f;\n  line-height: 1;\n}\n.db-rank-display__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.db-rank-display__score[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 3px;\n  flex-shrink: 0;\n}\n.db-rank-display__pts[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.db-rank-display__pts-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.db-autres-kpi-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n/*# sourceMappingURL=student-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-student-dashboard", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- LOADING                                           -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div *ngIf="loading" class="db-loading">\r
  <div class="qq-loading__ring">\r
    <div></div><div></div><div></div><div></div>\r
  </div>\r
  <p>Chargement de votre tableau de bord...</p>\r
</div>\r
\r
<ng-container *ngIf="!loading && stats">\r
\r
  <!-- \u2500\u2500 PAGE HEADER \u2500\u2500 -->\r
  <div class="db-page-header mb-4">\r
    <div>\r
      <h3 class="db-page-header__title">Mon tableau de bord</h3>\r
      <p class="db-page-header__sub">\r
        {{ labelPeriodeSelectionnee }} \u2014 Suivez vos formations, votre progression et vos objectifs\r
      </p>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 FILTRES \u2500\u2500 -->\r
  <div class="db-filters mb-4">\r
    <div class="db-filters__toggle">\r
      <button [class.active]="periodeMode === 'mois'" (click)="periodeMode='mois'; onPeriodeChange()">\r
        <i class="isax isax-calendar me-1"></i>Mensuel\r
      </button>\r
      <button [class.active]="periodeMode === 'trimestre'" (click)="periodeMode='trimestre'; onPeriodeChange()">\r
        <i class="isax isax-calendar-tick me-1"></i>Trimestriel\r
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
    <div class="db-filters__selects" *ngIf="periodeMode === 'trimestre'">\r
      <select [(ngModel)]="selectedAnnee" (change)="onAnneeChange()" class="db-select">\r
        <option *ngFor="let a of annees" [value]="a">{{ a }}</option>\r
      </select>\r
      <select [(ngModel)]="selectedTrimestre" (change)="onTrimestreChange()" class="db-select">\r
        <option [value]="1">T1 \u2014 Jan \xB7 F\xE9v \xB7 Mar</option>\r
        <option [value]="2">T2 \u2014 Avr \xB7 Mai \xB7 Juin</option>\r
        <option [value]="3">T3 \u2014 Juil \xB7 Ao\xFB \xB7 Sep</option>\r
        <option [value]="4">T4 \u2014 Oct \xB7 Nov \xB7 D\xE9c</option>\r
      </select>\r
    </div>\r
    <div class="db-filters__selects" *ngIf="periodeMode === 'annee'">\r
      <select [(ngModel)]="selectedAnnee" (change)="onAnneeChange()" class="db-select">\r
        <option *ngFor="let a of annees" [value]="a">{{ a }}</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 ONGLETS \u2500\u2500 -->\r
  <div class="db-tabs mb-4">\r
    <button class="db-tabs__tab" [class.active]="activeTab === 'aujourdhui'" (click)="setTab('aujourdhui')">\r
      <i class="isax isax-sun me-1"></i>Aujourd'hui\r
      <span class="db-tabs__alert" *ngIf="hasUrgences">{{ echeancesUrgentes.length }}</span>\r
    </button>\r
    <button class="db-tabs__tab" [class.active]="activeTab === 'progression'" (click)="setTab('progression')">\r
      <i class="isax isax-chart-2 me-1"></i>Mes Performances\r
    </button>\r
    <button class="db-tabs__tab" [class.active]="activeTab === 'objectifs'" (click)="setTab('objectifs')">\r
      <i class="isax isax-flag me-1"></i>Mes objectifs\r
    </button>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- ONGLET 1 \u2014 AUJOURD'HUI                        -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
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
    <div class="db-today-grid">\r
\r
      <!-- Activit\xE9s du jour -->\r
      <div class="db-panel">\r
        <div class="db-panel__header">\r
          <div class="db-panel__title"><i class="isax isax-activity me-2"></i>Activit\xE9s du jour</div>\r
          <span class="db-panel__count" *ngIf="activitesJour.length > 0">{{ activitesJour.length }}</span>\r
        </div>\r
        <div class="db-panel__body">\r
          <div class="db-empty-mini" *ngIf="activitesJour.length === 0">\r
            <i class="isax isax-coffee"></i>\r
            <span>Aucune activit\xE9 enregistr\xE9e aujourd'hui</span>\r
          </div>\r
          <div *ngFor="let act of activitesJour" class="db-activity-item">\r
            <div class="db-activity-item__icon" [ngClass]="getActiviteIconClass(act.statut)">\r
              <i class="isax" [ngClass]="getActiviteIcon(act.statut)"></i>\r
            </div>\r
            <div class="db-activity-item__body">\r
              <div class="db-activity-item__titre">{{ act.titre }}</div>\r
              <div class="db-activity-item__meta">\r
                <span class="db-activity-item__type">{{ getActiviteTypeLabel(act.type) }}</span>\r
                <span class="db-activity-item__sep">\xB7</span>\r
                <span class="db-activity-item__heure">{{ act.heure }}</span>\r
              </div>\r
            </div>\r
            <span class="db-activity-item__badge" [ngClass]="getActiviteBadgeClass(act.statut)">\r
              {{ getActiviteStatutLabel(act.statut) }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- \xC9ch\xE9ances \xE0 venir -->\r
      <div class="db-panel">\r
        <div class="db-panel__header">\r
          <div class="db-panel__title"><i class="isax isax-timer me-2"></i>\xC9ch\xE9ances \xE0 venir</div>\r
          <span class="db-panel__count" *ngIf="stats.echeances.length > 0">{{ stats.echeances.length }}</span>\r
        </div>\r
        <div class="db-panel__body">\r
          <ng-container *ngFor="let e of echeancesUrgentes">\r
            <div class="ech-item ech-item--urgent" [ngClass]="getUrgenceClass(e)">\r
              <div class="ech-countdown">\r
                <svg width="52" height="52" viewBox="0 0 52 52">\r
                  <circle class="ech-countdown__track" cx="26" cy="26" r="22" stroke-width="4"/>\r
                  <circle class="ech-countdown__fill" cx="26" cy="26" r="22" stroke-width="4"\r
                          [attr.stroke]="getUrgenceStroke(e)" stroke-dasharray="138.2"\r
                          [attr.stroke-dashoffset]="getCountdownOffset(e.joursRestants)"/>\r
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
          </ng-container>\r
\r
          <ng-container *ngFor="let e of echeancesNormales">\r
            <div class="ech-item" [ngClass]="getUrgenceClass(e)">\r
              <div class="ech-countdown">\r
                <svg width="52" height="52" viewBox="0 0 52 52">\r
                  <circle class="ech-countdown__track" cx="26" cy="26" r="22" stroke-width="4"/>\r
                  <circle class="ech-countdown__fill" cx="26" cy="26" r="22" stroke-width="4"\r
                          [attr.stroke]="getUrgenceStroke(e)" stroke-dasharray="138.2"\r
                          [attr.stroke-dashoffset]="getCountdownOffset(e.joursRestants)"/>\r
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
          </ng-container>\r
\r
          <div class="db-empty-mini" *ngIf="stats.echeances.length === 0">\r
            <i class="isax isax-tick-circle"></i>\r
            <span>Aucune \xE9ch\xE9ance proche</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Sessions planifi\xE9es -->\r
      <div class="db-panel db-panel--full">\r
        <div class="db-panel__header">\r
          <div class="db-panel__title"><i class="isax isax-calendar-tick me-2"></i>Sessions planifi\xE9es</div>\r
        </div>\r
        <div class="db-panel__body db-panel__body--row">\r
          <div *ngFor="let s of stats.sessions_planifiees" class="db-session-item">\r
            <div class="db-session-item__date">\r
              <span class="db-session-item__day">{{ s.date_debut | date:'dd' }}</span>\r
              <span class="db-session-item__month">{{ s.date_debut | date:'MMM' }}</span>\r
            </div>\r
            <div class="db-session-item__body">\r
              <div class="db-session-item__titre">{{ s.titre }}</div>\r
              <div class="db-session-item__meta">\r
                <i class="isax isax-location me-1"></i>{{ s.lieu || 'En ligne' }}\r
                &nbsp;\xB7&nbsp;<i class="isax isax-clock me-1"></i>\r
                {{ s.date_debut | date:'HH:mm' }} \u2013 {{ s.date_fin | date:'HH:mm' }}\r
              </div>\r
            </div>\r
            <span class="db-session-item__badge">{{ s.type }}</span>\r
          </div>\r
          <div class="db-empty-mini" *ngIf="stats.sessions_planifiees.length === 0">\r
            <i class="isax isax-calendar"></i><span>Aucune session planifi\xE9e</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </ng-container>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- ONGLET 2 \u2014 MES PERFORMANCES                   -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="activeTab === 'progression'">\r
\r
    <!-- \u2500\u2500 LIGNE 1 : Badges + Classement \u2500\u2500 -->\r
    <div class="db-perf-top-grid mb-4">\r
\r
      <!-- BADGES -->\r
      <div class="db-objectif-section">\r
        <div class="db-objectif-header">\r
          <div class="db-objectif-header__icon db-objectif-header__icon--orange">\r
            <i class="isax isax-award"></i>\r
          </div>\r
          <div>\r
            <h6 class="db-objectif-header__title">Badges obtenus</h6>\r
            <p class="db-objectif-header__sub">{{ badgesObtenus.length }} badge(s) d\xE9bloqu\xE9(s) sur {{ badges.length }}</p>\r
          </div>\r
          <span class="db-badge-count-pill ms-auto">{{ badgesObtenus.length }}/{{ badges.length }}</span>\r
        </div>\r
        <div class="db-badges-grid" *ngIf="badgesObtenus.length > 0">\r
          <div class="db-badge-item db-badge-item--obtenu" *ngFor="let b of badgesObtenus.slice(0, 2)">\r
            <div class="db-badge-item__icon" [style.background]="b.couleur + '20'" [style.color]="b.couleur">\r
              <i class="isax {{ b.icone }}"></i>\r
            </div>\r
            <div class="db-badge-item__info">\r
              <div class="db-badge-item__nom">{{ b.nom }}</div>\r
              <div class="db-badge-item__desc">{{ b.description }}</div>\r
              <div class="db-badge-item__date" *ngIf="b.date">\r
                <i class="isax isax-calendar me-1"></i>{{ b.date | date:'dd/MM/yyyy' }}\r
              </div>\r
            </div>\r
            <i class="isax isax-tick-circle db-badge-item__check" [style.color]="b.couleur"></i>\r
          </div>\r
        </div>\r
        <div class="db-badges-locked" *ngIf="badgesVerrouilles.length > 0">\r
          <div class="db-badges-locked__label">\xC0 d\xE9bloquer</div>\r
          <div class="db-badges-grid db-badges-grid--locked">\r
            <div class="db-badge-item db-badge-item--locked">\r
              <div class="db-badge-item__icon db-badge-item__icon--locked"><i class="isax isax-lock"></i></div>\r
              <div class="db-badge-item__info">\r
                <div class="db-badge-item__nom db-badge-item__nom--locked">{{ badgesVerrouilles[0].nom }}</div>\r
                <div class="db-badge-item__desc">{{ badgesVerrouilles[0].description }}</div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- CLASSEMENT -->\r
      <div class="db-objectif-section">\r
        <div class="db-objectif-header">\r
          <div class="db-objectif-header__icon db-objectif-header__icon--orange">\r
            <i class="isax isax-ranking"></i>\r
          </div>\r
          <div>\r
            <h6 class="db-objectif-header__title">Mon classement</h6>\r
            <p class="db-objectif-header__sub">Votre position par rapport \xE0 vos coll\xE8gues</p>\r
          </div>\r
          <span class="db-badge-count-pill db-badge-count-pill--indigo ms-auto">#{{ monClassement ?? '\u2013' }}</span>\r
        </div>\r
        <div class="db-rank-display">\r
          <div class="db-rank-display__medal">{{ getRangMedal(monClassement ?? 0) }}</div>\r
          <div class="db-rank-display__body">\r
            <div class="db-rank-display__value">#{{ monClassement ?? '\u2013' }}</div>\r
            <div class="db-rank-display__label">sur {{ classement.length }} participants</div>\r
          </div>\r
          <div class="db-rank-display__score">\r
            <span class="db-rank-display__pts">{{ myScore }}</span>\r
            <span class="db-rank-display__pts-label">pts</span>\r
          </div>\r
        </div>\r
        <div class="db-objectif-progress mt-3" *ngIf="monClassement">\r
          <div class="db-objectif-progress__values">\r
            <span class="db-objectif-progress__done">Votre score</span>\r
            <span class="db-objectif-progress__target">{{ myScore }} / 100</span>\r
          </div>\r
          <div class="db-objectif-progress__bar">\r
            <div class="db-objectif-progress__fill" [style.width.%]="myScore" style="background:#069b8f"></div>\r
            <span class="db-objectif-progress__pct">{{ myScore }}%</span>\r
          </div>\r
        </div>\r
        <p class="db-objectif-progress__note mt-2" style="font-style:italic">Le d\xE9tail du classement est confidentiel</p>\r
      </div>\r
\r
    </div>\r
\r
    <!-- \u2500\u2500 LIGNE 2 : Taux de compl\xE9tion global + Taux d'abandon \u2500\u2500 -->\r
    <div class="db-section-label mb-3">\r
      <span class="db-section-label__bar"></span>\r
      <span class="db-section-label__text">Progression globale \u2014 {{ labelPeriodeSelectionnee }}</span>\r
    </div>\r
\r
    <div class="db-perf-top-grid mb-4">\r
      <div class="db-chart-card db-chart-card--highlight">\r
        <div class="db-chart-card__label">\r
          <span class="db-chart-card__badge db-chart-card__badge--teal">KPI principal</span>\r
          Taux de compl\xE9tion global\r
          <span class="db-chart-card__current">{{ tauxCompletionGlobal }}%</span>\r
        </div>\r
        <div id="chart-completion" style="min-height:200px;"></div>\r
      </div>\r
      <div class="db-chart-card">\r
        <div class="db-chart-card__label">\r
          Taux d'abandon\r
          <span class="db-chart-card__hint">Non termin\xE9s + expir\xE9s / total assign\xE9s</span>\r
        </div>\r
        <div id="chart-taux-abandon" style="min-height:200px;"></div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500 QUIZ \u2500\u2500 -->\r
    <ng-container *ngIf="stats.kpi.evaluations.disponible">\r
      <div class="db-section-label mb-3">\r
        <span class="db-section-label__bar"></span>\r
        <span class="db-section-label__text">Quiz</span>\r
      </div>\r
      <div class="db-objectif-section mb-4">\r
        <div class="db-objectif-header">\r
          <div class="db-objectif-header__icon db-objectif-header__icon--blue"><i class="isax isax-chart-2"></i></div>\r
          <div>\r
            <h6 class="db-objectif-header__title">Quiz</h6>\r
            <p class="db-objectif-header__sub">R\xE9sultats de vos quiz de fin de formation</p>\r
          </div>\r
        </div>\r
        <div class="db-pdi-grid mb-3">\r
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
        <div class="db-chart-grid db-chart-grid--2">\r
          <div class="db-chart-card">\r
            <div class="db-chart-card__label">Taux de r\xE9ussite aux quiz</div>\r
            <div id="chart-donut-quiz-perf" class="db-pie3d-wrap" style="min-height:240px;"></div>\r
          </div>\r
          <div class="db-chart-card">\r
            <div class="db-chart-card__label">Score moyen aux quiz \u2014 r\xE9partition mensuelle</div>\r
            <div id="chart-score-moyen-bar" style="min-height:240px;"></div>\r
          </div>\r
        </div>\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2500\u2500 RADIALS KPI \u2500\u2500 -->\r
    <div class="db-radial-grid mb-4">\r
      <div class="db-radial-card">\r
        <div class="db-radial-card__chart" id="radial-formations"></div>\r
        <div class="db-radial-card__body">\r
          <div class="db-radial-card__label">Formations</div>\r
          <div class="db-radial-card__value">{{ stats.kpi.formations.terminees }}<span class="db-radial-card__total">/{{ stats.kpi.formations.total }}</span></div>\r
          <div class="db-radial-card__sub">{{ stats.kpi.formations.en_cours }} en cours</div>\r
        </div>\r
      </div>\r
      <div class="db-radial-card">\r
        <div class="db-radial-card__chart" id="radial-sessions"></div>\r
        <div class="db-radial-card__body">\r
          <div class="db-radial-card__label">Sessions</div>\r
          <div class="db-radial-card__value">{{ stats.kpi.sessions.terminees }}<span class="db-radial-card__total">/{{ stats.kpi.sessions.total }}</span></div>\r
          <div class="db-radial-card__sub">\r
            <span *ngIf="stats.kpi.sessions.total > 0">{{ stats.kpi.sessions.taux }}% termin\xE9es</span>\r
            <span *ngIf="stats.kpi.sessions.total === 0" style="font-style:italic">Aucune assign\xE9e</span>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="db-radial-card">\r
        <div class="db-radial-card__chart" id="radial-parcours"></div>\r
        <div class="db-radial-card__body">\r
          <div class="db-radial-card__label">Parcours</div>\r
          <div class="db-radial-card__value">{{ stats.kpi.parcours.termines }}<span class="db-radial-card__total">/{{ stats.kpi.parcours.total }}</span></div>\r
          <div class="db-radial-card__sub">\r
            <span *ngIf="stats.kpi.parcours.total > 0">{{ stats.kpi.parcours.progression }}% de progression</span>\r
            <span *ngIf="stats.kpi.parcours.total === 0" style="font-style:italic">Aucun assign\xE9</span>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="db-radial-card">\r
        <div class="db-radial-card__chart" id="radial-catalogues"></div>\r
        <div class="db-radial-card__body">\r
          <div class="db-radial-card__label">Catalogues</div>\r
          <div class="db-radial-card__value">{{ stats.kpi.catalogues.termines }}<span class="db-radial-card__total">/{{ stats.kpi.catalogues.total }}</span></div>\r
          <div class="db-radial-card__sub">\r
            <span *ngIf="stats.kpi.catalogues.total > 0">{{ stats.kpi.catalogues.taux }}% compl\xE9t\xE9s</span>\r
            <span *ngIf="stats.kpi.catalogues.total === 0" style="font-style:italic">Aucun assign\xE9</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500 AUTRES KPI \u2500\u2500 -->\r
    <div class="db-section-label mb-3">\r
      <span class="db-section-label__bar"></span>\r
      <span class="db-section-label__text">Autres KPI</span>\r
    </div>\r
\r
    <div class="db-autres-kpi-col mb-4">\r
\r
      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
      <!-- TRACKER \xC9CART DE COMP\xC9TENCES \u2014 KPI STATIQUE HONN\xCATE          -->\r
      <!-- Pas de courbe car il n'y a pas d'historique mensuel stock\xE9.  -->\r
      <!-- Affiche l'\xE9tat actuel : acquises / recommand\xE9es / \xE9cart.      -->\r
      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
      <div class="db-objectif-section">\r
        <div class="db-objectif-header">\r
          <div class="db-objectif-header__icon db-objectif-header__icon--purple">\r
            <i class="isax isax-medal-star"></i>\r
          </div>\r
          <div>\r
            <h6 class="db-objectif-header__title">\xC9cart de comp\xE9tences</h6>\r
            <p class="db-objectif-header__sub">Comp\xE9tences acquises vs comp\xE9tences recommand\xE9es</p>\r
          </div>\r
          <!-- Pilule taux de couverture -->\r
          <span\r
            class="db-badge-count-pill ms-auto"\r
            [class.db-badge-count-pill--green]="stats.kpi.ecart_competences.taux_couverture >= 75"\r
            [class.db-badge-count-pill--orange]="stats.kpi.ecart_competences.taux_couverture >= 40 && stats.kpi.ecart_competences.taux_couverture < 75"\r
            [class.db-badge-count-pill--red]="stats.kpi.ecart_competences.taux_couverture < 40"\r
            [style.background]="getProgressionColor(stats.kpi.ecart_competences.taux_couverture) + '20'"\r
            [style.color]="getProgressionColor(stats.kpi.ecart_competences.taux_couverture)"\r
          >\r
            {{ stats.kpi.ecart_competences.taux_couverture }}%\r
          </span>\r
        </div>\r
\r
        <!-- Cas : donn\xE9es disponibles -->\r
        <ng-container *ngIf="stats.kpi.ecart_competences.total_visees > 0">\r
\r
          <!-- 4 chiffres cl\xE9s -->\r
          <div class="db-pdi-grid mb-3">\r
            <div class="db-pdi-kpi">\r
              <div class="db-pdi-kpi__value" style="color:#069b8f">\r
                {{ stats.kpi.ecart_competences.total_acquises }}\r
              </div>\r
              <div class="db-pdi-kpi__label">Acquises</div>\r
            </div>\r
            <div class="db-pdi-kpi">\r
              <div class="db-pdi-kpi__value" style="color:#3b82f6">\r
                {{ stats.kpi.ecart_competences.total_visees }}\r
              </div>\r
              <div class="db-pdi-kpi__label">Recommand\xE9es</div>\r
            </div>\r
            <div class="db-pdi-kpi">\r
              <div class="db-pdi-kpi__value"\r
                   [style.color]="stats.kpi.ecart_competences.total_ecart > 0 ? '#ef4444' : '#10b981'">\r
                {{ stats.kpi.ecart_competences.total_ecart }}\r
              </div>\r
              <div class="db-pdi-kpi__label">\xC9cart restant</div>\r
            </div>\r
            <div class="db-pdi-kpi">\r
              <div class="db-pdi-kpi__value"\r
                   [style.color]="getProgressionColor(stats.kpi.ecart_competences.taux_couverture)">\r
                {{ stats.kpi.ecart_competences.taux_couverture }}%\r
              </div>\r
              <div class="db-pdi-kpi__label">Couverture</div>\r
            </div>\r
          </div>\r
\r
          <!-- Barre de progression principale -->\r
          <div class="db-objectif-progress mb-3">\r
            <div class="db-objectif-progress__values">\r
              <span class="db-objectif-progress__done">\r
                {{ stats.kpi.ecart_competences.total_acquises }} comp\xE9tences acquises\r
              </span>\r
              <span class="db-objectif-progress__target">\r
                Objectif : {{ stats.kpi.ecart_competences.total_visees }}\r
              </span>\r
            </div>\r
            <div class="db-objectif-progress__bar">\r
              <div\r
                class="db-objectif-progress__fill"\r
                [style.width.%]="stats.kpi.ecart_competences.taux_couverture"\r
                [style.background]="getProgressionColor(stats.kpi.ecart_competences.taux_couverture)">\r
              </div>\r
              <span class="db-objectif-progress__pct">\r
                {{ stats.kpi.ecart_competences.taux_couverture }}%\r
              </span>\r
            </div>\r
          </div>\r
\r
          <!-- Message contextuel selon le taux -->\r
          <p class="db-objectif-progress__note db-objectif-progress__note--success"\r
             *ngIf="stats.kpi.ecart_competences.total_ecart === 0">\r
            \u2705 Toutes les comp\xE9tences recommand\xE9es ont \xE9t\xE9 acquises !\r
          </p>\r
          <p class="db-objectif-progress__note"\r
             *ngIf="stats.kpi.ecart_competences.total_ecart > 0 && stats.kpi.ecart_competences.taux_couverture >= 75">\r
            \u{1F7E1} Bonne progression \u2014 encore\r
            <strong>{{ stats.kpi.ecart_competences.total_ecart }} comp\xE9tence(s)</strong> \xE0 acqu\xE9rir.\r
          </p>\r
          <p class="db-objectif-progress__note"\r
             *ngIf="stats.kpi.ecart_competences.total_ecart > 0 && stats.kpi.ecart_competences.taux_couverture < 75">\r
            \u{1F4CC} <strong>{{ stats.kpi.ecart_competences.total_ecart }} comp\xE9tence(s)</strong> restantes \xE0 acqu\xE9rir\r
            pour combler l'\xE9cart.\r
          </p>\r
\r
          <!-- Lien vers la page d\xE9taill\xE9e -->\r
          <div class="db-coming-inline db-coming-inline--link mt-2">\r
            <i class="isax isax-arrow-right-3 me-2"></i>\r
            <a routerLink="/student/ecart-competences">Voir les comp\xE9tences \u2192</a>\r
          </div>\r
\r
        </ng-container>\r
\r
        <!-- Cas : aucune comp\xE9tence recommand\xE9e -->\r
        <div *ngIf="stats.kpi.ecart_competences.total_visees === 0" class="db-coming-inline">\r
          <i class="isax isax-medal-star me-2"></i>Aucune comp\xE9tence recommand\xE9e d\xE9tect\xE9e pour ce collaborateur\r
        </div>\r
      </div>\r
\r
      <!-- \u2500\u2500 Statut global des demandes \u2500\u2500 -->\r
      <div class="db-objectif-section">\r
        <div class="db-objectif-header">\r
          <div class="db-objectif-header__icon db-objectif-header__icon--blue">\r
            <i class="isax isax-document-text"></i>\r
          </div>\r
          <div>\r
            <h6 class="db-objectif-header__title">Statut global des demandes</h6>\r
            <p class="db-objectif-header__sub">Toutes cat\xE9gories \u2014 {{ demandesTotal }} demande(s) au total</p>\r
          </div>\r
        </div>\r
        <div *ngIf="demandesTotal > 0" class="db-donut-legend-layout">\r
          <div id="chart-donut-demandes" class="db-donut-legend-layout__chart" style="min-height:240px;"></div>\r
        </div>\r
        <div *ngIf="demandesTotal === 0" class="db-coming-inline">\r
          <i class="isax isax-document me-2"></i>Aucune demande enregistr\xE9e pour le moment\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
  </ng-container>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- ONGLET 3 \u2014 MES OBJECTIFS                      -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--\r
  <ng-container *ngIf="activeTab === 'objectifs'">\r
\r
    <!-- Heures de formation\r
    <div class="db-objectif-section mb-4">\r
      <div class="db-objectif-header">\r
        <div class="db-objectif-header__icon db-objectif-header__icon--orange">\r
          <i class="isax isax-clock"></i>\r
        </div>\r
        <div>\r
          <h6 class="db-objectif-header__title">Heures de formation \u2014 {{ labelPeriodeSelectionnee }}</h6>\r
          <p class="db-objectif-header__sub">Formations \xE0 \xE9ch\xE9ance dans la p\xE9riode \xB7 Heures dues vs termin\xE9es</p>\r
        </div>\r
      </div>\r
      <div class="db-donut-legend-layout">\r
        <div class="db-donut-legend-layout__legend">\r
          <div class="db-legend-item">\r
            <span class="db-legend-dot" style="background:#3b82f6"></span>\r
            <span class="db-legend-label">Heures dues</span>\r
            <span class="db-legend-val">{{ stats.kpi.heures.heures_dues_periode }}h</span>\r
          </div>\r
          <div class="db-legend-item">\r
            <span class="db-legend-dot" style="background:#10b981"></span>\r
            <span class="db-legend-label">Termin\xE9es</span>\r
            <span class="db-legend-val">{{ stats.kpi.heures.heures_terminees_periode }}h</span>\r
          </div>\r
          <div class="db-legend-item">\r
            <span class="db-legend-dot"\r
              [style.background]="stats.kpi.heures.heures_restantes_periode > 0 ? '#ef4444' : '#10b981'"></span>\r
            <span class="db-legend-label">Restantes</span>\r
            <span class="db-legend-val"\r
              [style.color]="stats.kpi.heures.heures_restantes_periode > 0 ? '#ef4444' : '#10b981'">\r
              {{ stats.kpi.heures.heures_restantes_periode }}h\r
            </span>\r
          </div>\r
        </div>\r
        <div id="chart-donut-heures" class="db-donut-legend-layout__chart" style="min-height:220px;"></div>\r
      </div>\r
      <p class="db-objectif-progress__note mt-2" *ngIf="stats.kpi.heures.heures_restantes_periode > 0">\r
        Il vous reste <strong>{{ stats.kpi.heures.heures_restantes_periode }}h</strong> \xE0 terminer avant la fin de la p\xE9riode\r
      </p>\r
      <p class="db-objectif-progress__note db-objectif-progress__note--success mt-2"\r
         *ngIf="stats.kpi.heures.heures_restantes_periode === 0 && stats.kpi.heures.heures_dues_periode > 0">\r
        \u2705 Toutes les heures dues dans la p\xE9riode sont compl\xE9t\xE9es !\r
      </p>\r
    </div>\r
     -->\r
\r
    <!-- Formations obligatoires \r
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
          <div class="db-objectif-progress__fill"\r
               [style.width.%]="stats.kpi.formations.taux_obligatoires"\r
               [style.background]="getProgressionColor(stats.kpi.formations.taux_obligatoires)"></div>\r
          <span class="db-objectif-progress__pct">{{ stats.kpi.formations.taux_obligatoires }}%</span>\r
        </div>\r
      </div>\r
    </div>\r
    -->\r
\r
    <!-- PDI \r
    <div class="db-objectif-section mb-4">\r
      <div class="db-objectif-header">\r
        <div class="db-objectif-header__icon db-objectif-header__icon--teal"><i class="isax isax-task-square"></i></div>\r
        <div>\r
          <h6 class="db-objectif-header__title">Plan de D\xE9veloppement Individuel (PDI)</h6>\r
          <p class="db-objectif-header__sub">Objectifs fix\xE9s avec votre manager</p>\r
        </div>\r
      </div>\r
      <div class="db-coming-inline">\r
        <i class="isax isax-flash-1 me-2"></i>Fonctionnalit\xE9 \xE0 venir \u2014 Le PDI sera int\xE9gr\xE9 dans une prochaine version\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
\r
</ng-container>\r
 -->`, styles: ["/* src/app/features/student/student-dashboard/student-dashboard.component.scss */\n.db-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  gap: 16px;\n}\n.db-loading p {\n  color: #475569;\n  font-size: 14px;\n  margin: 0;\n}\n.qq-loading__ring {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring div:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring div:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring div:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.db-page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.db-page-header__title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.db-page-header__sub {\n  font-size: 13px;\n  color: #475569;\n  margin: 0;\n}\n.db-filters {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.db-filters__toggle {\n  display: flex;\n  background: #f1f5f9;\n  border-radius: 8px;\n  padding: 3px;\n}\n.db-filters__toggle button {\n  padding: 7px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.db-filters__toggle button.active {\n  background: white;\n  color: #0f172a;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  font-weight: 600;\n}\n.db-filters__selects {\n  display: flex;\n  gap: 8px;\n}\n.db-select {\n  padding: 7px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #1e293b;\n  background: white;\n  cursor: pointer;\n  outline: none;\n}\n.db-select:focus {\n  border-color: #069b8f;\n}\n.db-tabs {\n  display: flex;\n  gap: 4px;\n  border-bottom: 2px solid #f1f5f9;\n}\n.db-tabs__tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.2s;\n  border-radius: 8px 8px 0 0;\n}\n.db-tabs__tab:hover {\n  color: #0f172a;\n  background: #f8fafc;\n}\n.db-tabs__tab.active {\n  color: #069b8f;\n  border-bottom-color: #069b8f;\n  font-weight: 600;\n  background: #e6f7f6;\n}\n.db-tabs__alert {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  background: #ef4444;\n  color: white;\n  border-radius: 9px;\n  font-size: 10px;\n  font-weight: 700;\n  animation: db-pulse 1.5s ease-in-out infinite;\n}\n@keyframes db-pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0.85;\n  }\n}\n.db-section-label {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.db-section-label__bar {\n  display: block;\n  width: 4px;\n  height: 18px;\n  background: #069b8f;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.db-section-label__text {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.db-alert-banner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 18px;\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  border-left: 4px solid #f59e0b;\n  border-radius: 14px;\n}\n.db-alert-banner__icon {\n  font-size: 22px;\n  color: #f59e0b;\n  flex-shrink: 0;\n}\n.db-alert-banner__body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.db-alert-banner__body strong {\n  font-size: 14px;\n  font-weight: 700;\n  color: #92400e;\n}\n.db-alert-banner__body span {\n  font-size: 13px;\n  color: #b45309;\n}\n.db-alert-banner__count {\n  font-size: 12px;\n  font-weight: 600;\n  color: #f59e0b;\n  white-space: nowrap;\n}\n.db-radial-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n@media (max-width: 1024px) {\n  .db-radial-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .db-radial-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.db-radial-card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.db-radial-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.db-radial-card__chart {\n  width: 110px;\n  height: 110px;\n}\n.db-radial-card__body {\n  text-align: center;\n}\n.db-radial-card__label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.db-radial-card__value {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.db-radial-card__total {\n  font-size: 14px;\n  font-weight: 500;\n  color: #94a3b8;\n}\n.db-radial-card__sub {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 3px;\n}\n.db-today-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .db-today-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.db-panel {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.db-panel--full {\n  grid-column: 1/-1;\n}\n.db-panel__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  background: #f8fafc;\n}\n.db-panel__title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1e293b;\n  display: flex;\n  align-items: center;\n}\n.db-panel__count {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  background: #e6f7f6;\n  color: #069b8f;\n  border-radius: 10px;\n}\n.db-panel__body {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 360px;\n  overflow-y: auto;\n}\n.db-panel__body--row {\n  flex-direction: column;\n  max-height: none;\n}\n.db-activity-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #f1f5f9;\n  background: white;\n  transition: all 0.2s ease;\n}\n.db-activity-item:hover {\n  border-color: #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.db-activity-item__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.db-activity-item__icon--green {\n  background: #d1fae5;\n  color: #10b981;\n}\n.db-activity-item__icon--teal {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-activity-item__icon--blue {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-activity-item__body {\n  flex: 1;\n  min-width: 0;\n}\n.db-activity-item__titre {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.db-activity-item__meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 2px;\n}\n.db-activity-item__type {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.db-activity-item__sep {\n  font-size: 11px;\n  color: #cbd5e1;\n}\n.db-activity-item__heure {\n  font-size: 11px;\n  color: #94a3b8;\n  font-variant-numeric: tabular-nums;\n}\n.db-activity-item__badge {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 99px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.db-activity-item__badge--green {\n  background: #d1fae5;\n  color: rgb(12.752238806, 147.447761194, 102.8149253731);\n}\n.db-activity-item__badge--teal {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-activity-item__badge--blue {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-session-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #f1f5f9;\n  background: white;\n}\n.db-session-item__date {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  background: #dbeafe;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.db-session-item__day {\n  font-size: 16px;\n  font-weight: 800;\n  color: #3b82f6;\n  line-height: 1;\n}\n.db-session-item__month {\n  font-size: 10px;\n  font-weight: 600;\n  color: #3b82f6;\n  text-transform: uppercase;\n}\n.db-session-item__body {\n  flex: 1;\n  min-width: 0;\n}\n.db-session-item__titre {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.db-session-item__meta {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n}\n.db-session-item__badge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  background: #e6f7f6;\n  color: #069b8f;\n  border-radius: 4px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.db-empty-mini {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 32px 16px;\n  color: #94a3b8;\n}\n.db-empty-mini i {\n  font-size: 28px;\n}\n.db-empty-mini span {\n  font-size: 13px;\n}\n.db-charts-header__title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.db-charts-header__sub {\n  font-size: 13px;\n  color: #475569;\n  margin: 0;\n}\n.db-chart-card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 18px 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.db-chart-card--highlight {\n  border-top: 3px solid #069b8f;\n  background:\n    linear-gradient(\n      135deg,\n      white 0%,\n      #f0fdfc 100%);\n}\n.db-chart-card__label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.db-chart-card__hint {\n  font-size: 11px;\n  color: #94a3b8;\n  font-style: italic;\n}\n.db-chart-card__badge {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.db-chart-card__badge--teal {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-chart-card__current {\n  margin-left: auto;\n  font-size: 18px;\n  font-weight: 800;\n  color: #069b8f;\n}\n.db-chart-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .db-chart-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.db-chart-grid--2 {\n  grid-template-columns: repeat(2, 1fr);\n}\n@media (max-width: 768px) {\n  .db-chart-grid--2 {\n    grid-template-columns: 1fr;\n  }\n}\n.db-pie3d-wrap {\n  overflow: visible;\n  padding-bottom: 20px;\n}\n.db-pie3d-wrap .apexcharts-canvas {\n  overflow: visible !important;\n}\n.db-objectif-section {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.db-objectif-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.db-objectif-header__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.db-objectif-header__icon--teal {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-objectif-header__icon--orange {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.db-objectif-header__icon--red {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.db-objectif-header__icon--blue {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.db-objectif-header__icon--purple {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.db-objectif-header__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.db-objectif-header__sub {\n  font-size: 12px;\n  color: #475569;\n  margin: 0;\n}\n.db-objectif-progress__values {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  margin-bottom: 8px;\n}\n.db-objectif-progress__done {\n  font-weight: 700;\n  color: #0f172a;\n}\n.db-objectif-progress__target {\n  color: #94a3b8;\n}\n.db-objectif-progress__bar {\n  height: 10px;\n  background: #f1f5f9;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n}\n.db-objectif-progress__fill {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.8s ease;\n}\n.db-objectif-progress__pct {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 10px;\n  font-weight: 700;\n  color: white;\n}\n.db-objectif-progress__note {\n  font-size: 12px;\n  color: #475569;\n  margin-top: 8px;\n}\n.db-objectif-progress__note--success {\n  color: #10b981;\n  font-weight: 600;\n}\n.db-heures-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .db-heures-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.db-heures-kpi {\n  border-radius: 8px;\n  padding: 14px 16px;\n  text-align: center;\n}\n.db-heures-kpi__val {\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 4px;\n}\n.db-heures-kpi__label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.db-heures-kpi--total {\n  background: #dbeafe;\n}\n.db-heures-kpi--total .db-heures-kpi__val {\n  color: #3b82f6;\n}\n.db-heures-kpi--done {\n  background: #d1fae5;\n}\n.db-heures-kpi--done .db-heures-kpi__val {\n  color: #10b981;\n}\n.db-heures-kpi--reste {\n  background: #fef3c7;\n}\n.db-heures-kpi--reste .db-heures-kpi__val {\n  color: #f59e0b;\n}\n.db-pdi-grid {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.db-pdi-kpi {\n  flex: 1;\n  min-width: 120px;\n}\n.db-pdi-kpi__value {\n  font-size: 26px;\n  font-weight: 800;\n  color: #069b8f;\n  line-height: 1;\n}\n.db-pdi-kpi__label {\n  font-size: 12px;\n  color: #475569;\n  margin-top: 4px;\n}\n.db-coming-inline {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  background: #ede9fe;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #7c3aed;\n  font-weight: 500;\n}\n.db-demandes-chart-wrap {\n}\n.db-competences-count {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.db-competences-count__val {\n  font-size: 32px;\n  font-weight: 800;\n  color: #7c3aed;\n  line-height: 1;\n}\n.db-competences-count__label {\n  font-size: 13px;\n  color: #475569;\n}\n.db-competences-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.db-competence-tag {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #ede9fe;\n  color: #7c3aed;\n  font-size: 11px;\n  font-weight: 600;\n}\n.db-competence-tag--more {\n  background: #f1f5f9;\n  color: #475569;\n  font-style: italic;\n}\n.db-future-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .db-future-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.db-future-card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 18px 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  transition: box-shadow 0.2s;\n}\n.db-future-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.db-future-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.db-future-card__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.db-future-card__icon--purple {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.db-future-card__icon--orange {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.db-future-card__icon--teal {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.db-future-card__icon--red {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.db-future-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.db-future-card__desc {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0 0 12px;\n}\n.db-future-card__placeholder {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.db-future-card__placeholder--circles {\n  flex-direction: row;\n  gap: 6px;\n  align-items: center;\n}\n.db-future-badge {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n  background: #ede9fe;\n  color: #7c3aed;\n  border-radius: 4px;\n}\n.db-placeholder-circle,\n.db-placeholder-bar {\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #f8fafc 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.db-placeholder-bar {\n  height: 10px;\n}\n.db-placeholder-circle {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.db-placeholder-circle--ghost {\n  opacity: 0.4;\n}\n.ech-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  margin-bottom: 4px;\n  background: white;\n  border: 0.5px solid #e2e8f0;\n  border-left: 4px solid transparent;\n  border-radius: 0 12px 12px 0;\n  transition: background 0.3s;\n}\n.ech-item--urgent,\n.ech-item--critique {\n  border-left-color: #E24B4A;\n  background: #FCEBEB;\n  animation: ech-pulse 2.2s ease-in-out infinite;\n}\n.ech-item--moyenne {\n  border-left-color: #EF9F27;\n  background: white;\n}\n.ech-item--normale {\n  border-left-color: #1D9E75;\n}\n@keyframes ech-pulse {\n  0%, 100% {\n    background: #FCEBEB;\n  }\n  50% {\n    background: #F7C1C1;\n  }\n}\n.ech-countdown {\n  flex-shrink: 0;\n  width: 52px;\n  height: 52px;\n  position: relative;\n}\n.ech-countdown svg {\n  transform: rotate(-90deg);\n}\n.ech-countdown__track {\n  stroke: #e2e8f0;\n  fill: none;\n}\n.ech-countdown__fill {\n  fill: none;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.6s ease;\n}\n.ech-countdown__label {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1e293b;\n  line-height: 1.1;\n}\n.ech-countdown__unit {\n  font-size: 9px;\n  color: #94a3b8;\n}\n.ech-body {\n  flex: 1;\n  min-width: 0;\n}\n.ech-title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1e293b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 4px;\n}\n.ech-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 5px;\n}\n.ech-meta__prog {\n  font-size: 11px;\n  color: #94a3b8;\n}\n.ech-badge {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 8px;\n  color: #fff;\n}\n.ech-prog-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ech-prog-bar {\n  flex: 1;\n  height: 4px;\n  background: #e2e8f0;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.ech-prog-fill {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.6s ease;\n}\n.ech-prog-pct {\n  font-size: 11px;\n  color: #94a3b8;\n  min-width: 28px;\n  text-align: right;\n}\n.ech-urgence {\n  flex-shrink: 0;\n  text-align: center;\n}\n.ech-urgence__label {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.ech-urgence__label--rouge {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.ech-urgence__label--orange {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ech-urgence__label--vert {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.db-perf-top-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .db-perf-top-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.db-obj-top-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .db-obj-top-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.db-donut-legend-layout {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.db-donut-legend-layout__legend {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  min-width: 150px;\n  flex-shrink: 0;\n}\n.db-donut-legend-layout__chart {\n  flex: 1;\n  min-width: 0;\n}\n.db-legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.db-legend-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.db-legend-label {\n  flex: 1;\n  font-size: 12px;\n  color: #475569;\n  white-space: nowrap;\n}\n.db-legend-val {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.db-badge-count-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 800;\n  background: #fef3c7;\n  color: #d97706;\n  border: 1.5px solid #fde68a;\n  white-space: nowrap;\n}\n.db-badge-count-pill--indigo {\n  background: #eef2ff;\n  color: #4f46e5;\n  border-color: #c7d2fe;\n}\n.db-badges-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 14px;\n}\n.db-badges-grid--locked {\n  margin-top: 0;\n  opacity: 0.65;\n}\n.db-badge-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.db-badge-item--obtenu {\n  border-color: #d1fae5;\n  background: #f0fdf4;\n}\n.db-badge-item--obtenu:hover {\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);\n  transform: translateY(-1px);\n}\n.db-badge-item--locked {\n  background: #f8fafc;\n  border-color: #e2e8f0;\n}\n.db-badge-item__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.db-badge-item__icon--locked {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.db-badge-item__info {\n  flex: 1;\n  min-width: 0;\n}\n.db-badge-item__nom {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 2px;\n}\n.db-badge-item__nom--locked {\n  color: #94a3b8;\n}\n.db-badge-item__desc {\n  font-size: 11px;\n  color: #64748b;\n}\n.db-badge-item__date {\n  font-size: 10px;\n  color: #10b981;\n  font-weight: 600;\n  margin-top: 3px;\n  display: flex;\n  align-items: center;\n}\n.db-badge-item__date i {\n  font-size: 11px;\n}\n.db-badge-item__check {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.db-badges-locked {\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px dashed #e2e8f0;\n}\n.db-badges-locked__label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.db-classement-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 14px;\n}\n.db-cl-entry {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n.db-cl-entry:hover {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n}\n.db-cl-entry--me {\n  border-color: #069b8f;\n  background:\n    linear-gradient(\n      135deg,\n      #e6f7f5 0%,\n      #fff 60%);\n  box-shadow: 0 0 0 2px rgba(6, 155, 143, 0.15);\n}\n.db-cl-entry--gold .db-cl-entry__rang {\n  color: #d97706;\n}\n.db-cl-entry--silver .db-cl-entry__rang {\n  color: #64748b;\n}\n.db-cl-entry--bronze .db-cl-entry__rang {\n  color: #b45309;\n}\n.db-cl-entry__rang {\n  font-size: 18px;\n  width: 28px;\n  text-align: center;\n  flex-shrink: 0;\n  font-weight: 800;\n  color: #94a3b8;\n}\n.db-cl-entry__avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.db-cl-entry__avatar--me {\n  background: #069b8f;\n  color: #fff;\n}\n.db-cl-entry__nom {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.db-cl-entry__me-badge {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  background: #069b8f;\n  color: #fff;\n  border-radius: 99px;\n}\n.db-cl-entry__score {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.db-cl-entry__score-val {\n  font-size: 15px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.db-cl-entry__score-label {\n  font-size: 10px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.db-cl-entry__bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: #f1f5f9;\n}\n.db-cl-entry__bar-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.6s ease;\n}\n.db-rank-display {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #e6f7f5 0%,\n      #f0fdf4 100%);\n  border-radius: 12px;\n  border: 1.5px solid #069b8f;\n}\n.db-rank-display__medal {\n  font-size: 40px;\n  flex-shrink: 0;\n}\n.db-rank-display__body {\n  flex: 1;\n}\n.db-rank-display__value {\n  font-size: 32px;\n  font-weight: 900;\n  color: #069b8f;\n  line-height: 1;\n}\n.db-rank-display__label {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.db-rank-display__score {\n  display: flex;\n  align-items: baseline;\n  gap: 3px;\n  flex-shrink: 0;\n}\n.db-rank-display__pts {\n  font-size: 28px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.db-rank-display__pts-label {\n  font-size: 12px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.db-autres-kpi-col {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n/*# sourceMappingURL=student-dashboard.component.css.map */\n"] }]
  }], () => [{ type: FormationService }, { type: DemandeFormationService }, { type: ChangeDetectorRef }, { type: NgZone }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentDashboardComponent, { className: "StudentDashboardComponent", filePath: "app/features/student/student-dashboard/student-dashboard.component.ts", lineNumber: 126 });
})();
export {
  StudentDashboardComponent
};
//# sourceMappingURL=chunk-FKQTRLVB.js.map
