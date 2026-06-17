import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-P5LMIC3O.js";
import {
  AuthService
} from "./chunk-IEFOQSOV.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-YJLHMFCU.js";
import {
  RouterLink
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgClass
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  catchError,
  forkJoin,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-dashboard/instructor-dashboard.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _c1 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
function InstructorDashboardComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function InstructorDashboardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, InstructorDashboardComponent_Conditional_9_For_2_Template, 1, 0, "div", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function InstructorDashboardComponent_Conditional_10_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r1.sub);
  }
}
function InstructorDashboardComponent_Conditional_10_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("db-kpi-trend db-kpi-trend--", k_r1.trend));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", k_r1.trend === "up" ? "isax-arrow-up-3" : "isax-arrow-down-3"));
  }
}
function InstructorDashboardComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65)(4, "div", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, InstructorDashboardComponent_Conditional_10_For_2_Conditional_8_Template, 2, 1, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, InstructorDashboardComponent_Conditional_10_For_2_Conditional_9_Template, 2, 6, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("db-kpi-icon db-kpi-icon--", k_r1.color));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", k_r1.icon));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r1.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r1.sub ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r1.trend ? 9 : -1);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("series", ctx_r1.completionChart.series)("chart", ctx_r1.completionChart.chart)("plotOptions", ctx_r1.completionChart.plotOptions)("dataLabels", ctx_r1.completionChart.dataLabels)("xaxis", ctx_r1.completionChart.xaxis)("yaxis", ctx_r1.completionChart.yaxis)("colors", ctx_r1.completionChart.colors)("grid", ctx_r1.completionChart.grid)("tooltip", ctx_r1.completionChart.tooltip);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Aucune donn\xE9e formation");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("series", ctx_r1.quizChart.series)("chart", ctx_r1.quizChart.chart)("labels", ctx_r1.quizChart.labels)("colors", ctx_r1.quizChart.colors)("legend", ctx_r1.quizChart.legend)("dataLabels", ctx_r1.quizChart.dataLabels)("plotOptions", ctx_r1.quizChart.plotOptions)("tooltip", ctx_r1.quizChart.tooltip);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Aucun r\xE9sultat quiz");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 47);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_113_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 75);
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("isax-star1", i_r3 <= ctx_r1.dashStats.note_moyenne_formateur / 2)("isax-star", i_r3 > ctx_r1.dashStats.note_moyenne_formateur / 2);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4, "/10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 73);
    \u0275\u0275repeaterCreate(6, InstructorDashboardComponent_Conditional_10_Conditional_113_For_7_Template, 1, 4, "i", 74, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dashStats.note_moyenne_formateur);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c1));
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "Non encore \xE9valu\xE9");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 47);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4, "/10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "small", 76);
    \u0275\u0275text(6, "Score satisfaction apprenant");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dashStats.nps_formation);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "Pas de donn\xE9es");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 47);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4, "commentaires");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "small", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.dashStats == null ? null : ctx_r1.dashStats.nb_feedbacks_apprenants) ?? 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.nb_feedbacks_formateur) ?? 0, " annotations formateur");
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 47);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 77)(2, "span", 78);
    \u0275\u0275text(3, "Avant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 79);
    \u0275\u0275element(5, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 77)(9, "span", 78);
    \u0275\u0275text(10, "Apr\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 79);
    \u0275\u0275element(12, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 81);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.progression_avant) ?? 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.progression_avant) ?? 0, "%");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.progression_apres) ?? (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.taux_completion_global) ?? 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.progression_apres) ?? (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.taux_completion_global) ?? 0, "% ");
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 47);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4, "heures");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "small", 76);
    \u0275\u0275text(6, "D\xE9lai moyen apr\xE8s fin de session");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dashStats.temps_moyen_correction_h);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "Pas encore de donn\xE9es");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 47);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4, "heures");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "small", 76);
    \u0275\u0275text(6, "Entre fin session et publication");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dashStats.delai_publication_resultats_h);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "Pas encore de donn\xE9es");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 47);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4, "sessions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 83)(6, "div", 84)(7, "span", 85);
    \u0275\u0275text(8, "Termin\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 86);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 24)(12, "span", 85);
    \u0275\u0275text(13, "Apprenants (sessions)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 87);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.dashStats == null ? null : ctx_r1.dashStats.nb_sessions_animees) ?? ctx_r1.sessionsAnimees);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.nb_sessions_terminees) ?? 0, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.nb_apprenants_sessions) ?? 0, " ");
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 11);
    \u0275\u0275element(2, "i", 88);
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4, "\xC9volution des inscriptions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6, "6 mois");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "apx-chart", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("series", ctx_r1.inscriptionsChart.series)("chart", ctx_r1.inscriptionsChart.chart)("plotOptions", ctx_r1.inscriptionsChart.plotOptions)("dataLabels", ctx_r1.inscriptionsChart.dataLabels)("xaxis", ctx_r1.inscriptionsChart.xaxis)("colors", ctx_r1.inscriptionsChart.colors)("grid", ctx_r1.inscriptionsChart.grid)("tooltip", ctx_r1.inscriptionsChart.tooltip);
  }
}
function InstructorDashboardComponent_Conditional_10_Conditional_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 90);
    \u0275\u0275text(2, "Aucune formation trouv\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function InstructorDashboardComponent_Conditional_10_For_187_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 91);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 92)(4, "span", 93);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "div", 94);
    \u0275\u0275element(8, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 96);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 92)(12, "span", 97);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r4.inscrits);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", f_r4.completion, "%");
    \u0275\u0275classProp("db-row-fill--green", f_r4.completion >= 70)("db-row-fill--orange", f_r4.completion < 70);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r4.completion, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatutClass(f_r4.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatutLabel(f_r4.statut), " ");
  }
}
function InstructorDashboardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, InstructorDashboardComponent_Conditional_10_For_2_Template, 10, 10, "div", 8, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10)(5, "div", 11);
    \u0275\u0275element(6, "i", 12);
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8, "Compl\xE9tion par formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275text(10, "Top 5");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, InstructorDashboardComponent_Conditional_10_Conditional_11_Template, 1, 9, "apx-chart", 15)(12, InstructorDashboardComponent_Conditional_10_Conditional_12_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17)(14, "div", 11);
    \u0275\u0275element(15, "i", 18);
    \u0275\u0275elementStart(16, "span", 13);
    \u0275\u0275text(17, "R\xE9sultats quiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, InstructorDashboardComponent_Conditional_10_Conditional_18_Template, 1, 8, "apx-chart", 19)(19, InstructorDashboardComponent_Conditional_10_Conditional_19_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "div", 21)(22, "div", 11);
    \u0275\u0275element(23, "i", 22);
    \u0275\u0275elementStart(24, "span", 13);
    \u0275\u0275text(25, "Indicateurs p\xE9dagogiques");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 23)(27, "div", 24)(28, "span", 25);
    \u0275\u0275text(29, "Taux participation live");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 26)(31, "div", 27);
    \u0275\u0275element(32, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 29);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 24)(36, "span", 25);
    \u0275\u0275text(37, "Taux compl\xE9tion cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 26)(39, "div", 27);
    \u0275\u0275element(40, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 29);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 24)(44, "span", 25);
    \u0275\u0275text(45, "Taux d'abandon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 26)(47, "div", 27);
    \u0275\u0275element(48, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 29);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 24)(52, "span", 25);
    \u0275\u0275text(53, "Score moyen \xE9valuations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 26)(55, "div", 27);
    \u0275\u0275element(56, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 29);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 24)(60, "span", 25);
    \u0275\u0275text(61, "Taux de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 26)(63, "div", 27);
    \u0275\u0275element(64, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 29);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "div", 21)(68, "div", 11);
    \u0275\u0275element(69, "i", 32);
    \u0275\u0275elementStart(70, "span", 13);
    \u0275\u0275text(71, "R\xE9sum\xE9 consultant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 33)(73, "div", 34)(74, "div", 35);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 36);
    \u0275\u0275text(77, "Sessions anim\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 34)(79, "div", 37);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 36);
    \u0275\u0275text(82, "Apprenants inscrits");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 34)(84, "div", 38);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 36);
    \u0275\u0275text(87, "Heures facturables");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 34)(89, "div", 39);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 36);
    \u0275\u0275text(92, "Taux participation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 34)(94, "div", 40);
    \u0275\u0275text(95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 36);
    \u0275\u0275text(97, "Certifications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 34)(99, "div", 41);
    \u0275\u0275text(100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 36);
    \u0275\u0275text(102, "Formations actives");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(103, "div", 42);
    \u0275\u0275element(104, "i", 43);
    \u0275\u0275text(105, " Qualit\xE9 & Satisfaction ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 44)(107, "div", 45)(108, "div", 11);
    \u0275\u0275element(109, "i", 46);
    \u0275\u0275elementStart(110, "span", 13);
    \u0275\u0275text(111, "Note moyenne formateur");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(112, InstructorDashboardComponent_Conditional_10_Conditional_112_Template, 1, 0, "div", 47)(113, InstructorDashboardComponent_Conditional_10_Conditional_113_Template, 8, 2)(114, InstructorDashboardComponent_Conditional_10_Conditional_114_Template, 2, 0, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "div", 45)(116, "div", 11);
    \u0275\u0275element(117, "i", 49);
    \u0275\u0275elementStart(118, "span", 13);
    \u0275\u0275text(119, "NPS formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(120, InstructorDashboardComponent_Conditional_10_Conditional_120_Template, 1, 0, "div", 47)(121, InstructorDashboardComponent_Conditional_10_Conditional_121_Template, 7, 1)(122, InstructorDashboardComponent_Conditional_10_Conditional_122_Template, 2, 0, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "div", 45)(124, "div", 11);
    \u0275\u0275element(125, "i", 50);
    \u0275\u0275elementStart(126, "span", 13);
    \u0275\u0275text(127, "Feedback qualitatif");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(128, InstructorDashboardComponent_Conditional_10_Conditional_128_Template, 1, 0, "div", 47)(129, InstructorDashboardComponent_Conditional_10_Conditional_129_Template, 7, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 45)(131, "div", 11);
    \u0275\u0275element(132, "i", 51);
    \u0275\u0275elementStart(133, "span", 13);
    \u0275\u0275text(134, "Progression avant / apr\xE8s");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(135, InstructorDashboardComponent_Conditional_10_Conditional_135_Template, 1, 0, "div", 47)(136, InstructorDashboardComponent_Conditional_10_Conditional_136_Template, 15, 6, "div", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 53);
    \u0275\u0275element(138, "i", 54);
    \u0275\u0275text(139, " D\xE9lais & Performance op\xE9rationnelle ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "div", 55)(141, "div", 45)(142, "div", 11);
    \u0275\u0275element(143, "i", 56);
    \u0275\u0275elementStart(144, "span", 13);
    \u0275\u0275text(145, "Temps moyen de correction");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(146, InstructorDashboardComponent_Conditional_10_Conditional_146_Template, 1, 0, "div", 47)(147, InstructorDashboardComponent_Conditional_10_Conditional_147_Template, 7, 1)(148, InstructorDashboardComponent_Conditional_10_Conditional_148_Template, 2, 0, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "div", 45)(150, "div", 11);
    \u0275\u0275element(151, "i", 57);
    \u0275\u0275elementStart(152, "span", 13);
    \u0275\u0275text(153, "D\xE9lai de publication r\xE9sultats");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(154, InstructorDashboardComponent_Conditional_10_Conditional_154_Template, 1, 0, "div", 47)(155, InstructorDashboardComponent_Conditional_10_Conditional_155_Template, 7, 1)(156, InstructorDashboardComponent_Conditional_10_Conditional_156_Template, 2, 0, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "div", 45)(158, "div", 11);
    \u0275\u0275element(159, "i", 58);
    \u0275\u0275elementStart(160, "span", 13);
    \u0275\u0275text(161, "Sessions anim\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(162, InstructorDashboardComponent_Conditional_10_Conditional_162_Template, 1, 0, "div", 47)(163, InstructorDashboardComponent_Conditional_10_Conditional_163_Template, 16, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(164, InstructorDashboardComponent_Conditional_10_Conditional_164_Template, 8, 8, "div", 59);
    \u0275\u0275elementStart(165, "div", 60)(166, "div", 11);
    \u0275\u0275element(167, "i", 12);
    \u0275\u0275elementStart(168, "span", 13);
    \u0275\u0275text(169, "Mes formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "a", 61);
    \u0275\u0275text(171, "Tout voir \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "div", 62)(173, "table", 63)(174, "thead")(175, "tr")(176, "th");
    \u0275\u0275text(177, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "th", 64);
    \u0275\u0275text(179, "Inscrits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "th");
    \u0275\u0275text(181, "Compl\xE9tion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "th", 64);
    \u0275\u0275text(183, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(184, "tbody");
    \u0275\u0275conditionalCreate(185, InstructorDashboardComponent_Conditional_10_Conditional_185_Template, 3, 0, "tr");
    \u0275\u0275repeaterCreate(186, InstructorDashboardComponent_Conditional_10_For_187_Template, 14, 11, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.kpis);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.completionChart ? 11 : 12);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.quizChart ? 18 : 19);
    \u0275\u0275advance(14);
    \u0275\u0275styleProp("width", (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.taux_participation_live) ?? ctx_r1.tauxOccupation, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.taux_participation_live) ?? ctx_r1.tauxOccupation, "%");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r1.tauxCompletion, "%");
    \u0275\u0275classProp("db-metric-fill--green", ctx_r1.tauxCompletion >= 70)("db-metric-fill--orange", ctx_r1.tauxCompletion < 70);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.tauxCompletion, "%");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r1.tauxAbandons, "%");
    \u0275\u0275classProp("db-metric-fill--red", ctx_r1.tauxAbandons > 20)("db-metric-fill--green", ctx_r1.tauxAbandons <= 20);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.tauxAbandons, "%");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.score_moyen) ?? ctx_r1.scoreMoyen, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.score_moyen) ?? ctx_r1.scoreMoyen, "%");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r1.tauxReussite, "%");
    \u0275\u0275classProp("db-metric-fill--green", ctx_r1.tauxReussite >= 60)("db-metric-fill--red", ctx_r1.tauxReussite < 60);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.tauxReussite, "%");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r1.dashStats == null ? null : ctx_r1.dashStats.nb_sessions_animees) ?? ctx_r1.sessionsAnimees);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.dashStats == null ? null : ctx_r1.dashStats.nb_apprenants_inscrits) ?? ctx_r1.apprenantsForms);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.heuresRealisees, "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.taux_participation_live) ?? ctx_r1.tauxOccupation, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.dashStats == null ? null : ctx_r1.dashStats.nb_certifications) ?? ctx_r1.certificatsDeliv);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formationsCount);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r1.statsLoading ? 112 : (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.note_moyenne_formateur) != null ? 113 : 114);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.statsLoading ? 120 : (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.nps_formation) != null ? 121 : 122);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.statsLoading ? 128 : 129);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.statsLoading ? 135 : 136);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.statsLoading ? 146 : (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.temps_moyen_correction_h) != null ? 147 : 148);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.statsLoading ? 154 : (ctx_r1.dashStats == null ? null : ctx_r1.dashStats.delai_publication_resultats_h) != null ? 155 : 156);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.statsLoading ? 162 : 163);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.inscriptionsChart ? 164 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorCourse);
    \u0275\u0275advance(15);
    \u0275\u0275conditional(!ctx_r1.formations.length ? 185 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.formations);
  }
}
var InstructorDashboardComponent = class _InstructorDashboardComponent {
  http;
  authService;
  routes = routes;
  // ── KPIs ──────────────────────────────────────────────────────
  kpis = [];
  // ── Stats API ─────────────────────────────────────────────────
  dashStats = null;
  // ── Métriques legacy (gardées pour les charts existants) ──────
  sessionsAnimees = 0;
  apprenantsForms = 0;
  heuresRealisees = 0;
  tauxOccupation = 0;
  tauxCompletion = 0;
  tauxReussite = 0;
  tauxAbandons = 0;
  scoreMoyen = 0;
  certificatsDeliv = 0;
  formationsCount = 0;
  formations = [];
  loading = true;
  statsLoading = true;
  // ── Charts ────────────────────────────────────────────────────
  completionChart = null;
  quizChart = null;
  inscriptionsChart = null;
  displayName = "";
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  get headers() {
    const token = localStorage.getItem("pyramide_token");
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  ngOnInit() {
    const user = this.authService.getUser();
    const uid = user?.id;
    this.displayName = user?.name || `${user?.prenom ?? ""} ${user?.nom ?? ""}`.trim() || "Formateur";
    forkJoin({
      dash: this.http.get(`${environment.apiUrl}/formateur/dashboard/stats`, { headers: this.headers }).pipe(catchError(() => of(null))),
      formations: this.http.get(`${environment.apiUrl}/formateur/formations`, { headers: this.headers }).pipe(catchError(() => of({ formations: [] }))),
      sessions: this.http.get(`${environment.apiUrl}/sessions-formation?formateur_id=${uid}`, { headers: this.headers }).pipe(catchError(() => of({ sessions: [] }))),
      quiz: this.http.get(`${environment.apiUrl}/quiz-results`, { headers: this.headers }).pipe(catchError(() => of([]))),
      certs: this.http.get(`${environment.apiUrl}/certificats`, { headers: this.headers }).pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ dash, formations, sessions, quiz, certs }) => {
        if (dash?.data) {
          this.dashStats = dash.data;
          this.sessionsAnimees = this.dashStats.nb_sessions_animees;
          this.apprenantsForms = this.dashStats.nb_apprenants_inscrits;
          this.tauxCompletion = this.dashStats.taux_completion_global;
          this.tauxReussite = this.dashStats.taux_reussite;
          this.tauxAbandons = this.dashStats.taux_abandon;
          this.scoreMoyen = this.dashStats.score_moyen ?? 0;
          this.certificatsDeliv = this.dashStats.nb_certifications;
        }
        const fl = formations?.formations || formations?.data || (Array.isArray(formations) ? formations : []);
        this.formationsCount = fl.length;
        if (!this.dashStats) {
          this.apprenantsForms = fl.reduce((acc, f) => acc + (f.nb_participants ?? 0), 0);
          const completions = fl.map((f) => Number(f.taux_completion ?? 0));
          this.tauxCompletion = completions.length ? Math.round(completions.reduce((a, b) => a + b, 0) / completions.length) : 0;
        }
        this.formations = fl.slice(0, 6).map((f) => ({
          id: f.id,
          titre: f.titre || f.title || "\u2014",
          inscrits: f.nb_participants ?? 0,
          completion: Number(f.taux_completion ?? 0),
          statut: f.statut || "active"
        }));
        const sl = sessions?.sessions || sessions?.data || (Array.isArray(sessions) ? sessions : []);
        const sessionsFormateur = sl.filter((s) => s.formateur_id === uid || s.formateur?.id === uid);
        const sessTerminees = sessionsFormateur.filter((s) => s.statut === "terminee");
        this.tauxOccupation = sessionsFormateur.length > 0 ? Math.round(sessTerminees.length / sessionsFormateur.length * 100) : 0;
        this.heuresRealisees = sessTerminees.reduce((acc, s) => {
          if (s.duree_en_heures)
            return acc + Number(s.duree_en_heures);
          if (s.date_debut && s.date_fin) {
            return acc + Math.round((new Date(s.date_fin).getTime() - new Date(s.date_debut).getTime()) / 36e5);
          }
          return acc;
        }, 0);
        const ql = Array.isArray(quiz) ? quiz : quiz?.data || quiz?.results || [];
        if (!this.dashStats && ql.length) {
          const scores = ql.map((r) => Number(r.score ?? r.pourcentage ?? 0));
          const seuil = ql[0]?.quiz?.seuil_reussite ?? 50;
          this.scoreMoyen = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
          const reussites = ql.filter((r) => Number(r.score ?? r.pourcentage ?? 0) >= seuil).length;
          this.tauxReussite = Math.round(reussites / ql.length * 100);
          this.tauxAbandons = 100 - this.tauxReussite;
        }
        if (!this.dashStats) {
          const cl = Array.isArray(certs) ? certs : certs?.certificats || certs?.data || [];
          this.certificatsDeliv = cl.length;
        }
        this.buildKpis();
        this.buildCompletionChart();
        this.buildQuizChart();
        this.buildInscriptionsChart();
        this.loading = false;
        this.statsLoading = false;
      },
      error: () => {
        this.loading = false;
        this.statsLoading = false;
      }
    });
  }
  buildKpis() {
    const d = this.dashStats;
    this.kpis = [
      { icon: "isax-profile-2user", color: "teal", label: "Apprenants inscrits", value: d?.nb_apprenants_inscrits ?? this.apprenantsForms, sub: "toutes formations & sessions" },
      { icon: "isax-calendar-tick", color: "blue", label: "Sessions anim\xE9es", value: d?.nb_sessions_animees ?? this.sessionsAnimees, sub: `${d?.nb_sessions_terminees ?? 0} termin\xE9es` },
      { icon: "isax-clock", color: "purple", label: "Heures r\xE9alis\xE9es", value: `${this.heuresRealisees}h`, sub: "sessions termin\xE9es" },
      { icon: "isax-people", color: "orange", label: "Participation live", value: `${d?.taux_participation_live ?? this.tauxOccupation}%`, sub: "sessions pr\xE9sentielles/distanciel", trend: (d?.taux_participation_live ?? 0) >= 70 ? "up" : "down" },
      { icon: "isax-book-1", color: "green", label: "Taux de compl\xE9tion", value: `${this.tauxCompletion}%`, sub: "moy. formations", trend: this.tauxCompletion >= 70 ? "up" : "down" },
      { icon: "isax-danger", color: "red", label: "Taux d'abandon", value: `${this.tauxAbandons}%`, sub: "formations abandonn\xE9es", trend: this.tauxAbandons > 20 ? "down" : "up" },
      { icon: "isax-chart-square", color: "gold", label: "Score moyen \xE9valuations", value: d?.score_moyen != null ? `${d.score_moyen}%` : `${this.scoreMoyen}%`, sub: `${d?.nb_evaluations ?? 0} \xE9valuations` },
      { icon: "isax-award", color: "teal", label: "Taux de r\xE9ussite", value: `${this.tauxReussite}%`, sub: "quiz & \xE9valuations", trend: this.tauxReussite >= 60 ? "up" : "down" }
    ];
  }
  buildCompletionChart() {
    const d = this.dashStats;
    const items = d?.completion_par_formation?.length ? d.completion_par_formation.slice(0, 5) : this.formations.slice(0, 5).map((f) => ({ titre: f.titre, taux: f.completion, inscrits: f.inscrits }));
    if (!items.length)
      return;
    this.completionChart = {
      series: [{ name: "Compl\xE9tion %", data: items.map((f) => f.taux) }],
      chart: { type: "bar", height: 220, toolbar: { show: false } },
      plotOptions: { bar: { borderRadius: 5, horizontal: true } },
      dataLabels: { enabled: false },
      xaxis: {
        categories: items.map((f) => this.shortTitle(f.titre)),
        max: 100,
        labels: { style: { fontSize: "11px", colors: "#64748B" } }
      },
      yaxis: { labels: { style: { fontSize: "11px", colors: "#64748B" } } },
      colors: ["#185FA5"],
      grid: { borderColor: "#E2E8F0", strokeDashArray: 4 },
      tooltip: { y: { formatter: (v) => `${v}%` } }
    };
  }
  buildQuizChart() {
    const reussite = this.tauxReussite;
    const abandon = Math.max(0, 100 - reussite);
    if (!reussite && !abandon)
      return;
    this.quizChart = {
      series: [reussite, abandon],
      chart: { type: "donut", height: 220 },
      labels: ["R\xE9ussite", "Abandon"],
      colors: ["#185FA5", "#E24B4A"],
      legend: { position: "bottom", fontSize: "12px" },
      dataLabels: { enabled: true, formatter: (v) => `${Math.round(v)}%` },
      plotOptions: { pie: { donut: { size: "60%" } } },
      tooltip: { y: { formatter: (v) => `${v}%` } }
    };
  }
  buildInscriptionsChart() {
    const data = this.dashStats?.croissance_mensuelle;
    if (!data?.length)
      return;
    this.inscriptionsChart = {
      series: [{ name: "Inscriptions", data: data.map((m) => m.total) }],
      chart: { height: 160, type: "bar", toolbar: { show: false } },
      plotOptions: { bar: { borderRadius: 4, columnWidth: "55%" } },
      dataLabels: { enabled: false },
      xaxis: { categories: data.map((m) => m.mois) },
      colors: ["#185FA5"],
      grid: { borderColor: "#E2E8F0" },
      tooltip: { theme: "light" }
    };
  }
  shortTitle(s) {
    return s.length > 22 ? s.substring(0, 20) + "\u2026" : s;
  }
  getStatutClass(s) {
    return { active: "badge--green", terminee: "badge--blue", brouillon: "badge--gray", archivee: "badge--red" }[s] ?? "badge--gray";
  }
  getStatutLabel(s) {
    return { active: "Active", terminee: "Termin\xE9e", brouillon: "Brouillon", archivee: "Archiv\xE9e" }[s] ?? s;
  }
  static \u0275fac = function InstructorDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorDashboardComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorDashboardComponent, selectors: [["app-instructor-dashboard"]], decls: 11, vars: 3, consts: [[1, "db-header"], [1, "db-header__info"], [1, "db-header__title"], [1, "db-header__sub"], [1, "db-btn", "db-btn--blue", 3, "routerLink"], [1, "isax", "isax-receipt-item"], [1, "db-kpi-grid"], [1, "db-kpi-card", "db-kpi-card--skeleton"], [1, "db-kpi-card"], [1, "db-charts-row"], [1, "db-card", "db-card--chart"], [1, "db-card__head"], [1, "isax", "isax-book-1"], [1, "db-card__title"], [1, "db-badge", "db-badge--blue"], [3, "series", "chart", "plotOptions", "dataLabels", "xaxis", "yaxis", "colors", "grid", "tooltip"], [1, "db-empty"], [1, "db-card", "db-card--chart", "db-card--narrow"], [1, "isax", "isax-award"], [3, "series", "chart", "labels", "colors", "legend", "dataLabels", "plotOptions", "tooltip"], [1, "db-metrics-row"], [1, "db-card"], [1, "isax", "isax-chart-square"], [1, "db-metric-list"], [1, "db-metric-item"], [1, "db-metric-lbl"], [1, "db-metric-bar-wrap"], [1, "db-metric-bar"], [1, "db-metric-fill", "db-metric-fill--blue"], [1, "db-metric-val"], [1, "db-metric-fill"], [1, "db-metric-fill", "db-metric-fill--purple"], [1, "isax", "isax-profile-circle"], [1, "db-summary-grid"], [1, "db-summary-item"], [1, "db-summary-val", "db-summary-val--blue"], [1, "db-summary-lbl"], [1, "db-summary-val", "db-summary-val--teal"], [1, "db-summary-val", "db-summary-val--purple"], [1, "db-summary-val", "db-summary-val--orange"], [1, "db-summary-val", "db-summary-val--gold"], [1, "db-summary-val", "db-summary-val--green"], [1, "db-section-title"], [1, "isax", "isax-star"], [1, "db-kpi-grid", "db-kpi-grid--4"], [1, "db-card", "db-card--metric"], [1, "isax", "isax-profile-circle", "text-warning"], [1, "db-kpi-card--skeleton", 2, "height", "48px", "border-radius", "8px"], [1, "db-empty", "db-empty--sm"], [1, "isax", "isax-smiley", "text-success"], [1, "isax", "isax-message", "text-info"], [1, "isax", "isax-chart-2", "text-primary"], [1, "db-progress-compare"], [1, "db-section-title", 2, "margin-top", "24px"], [1, "isax", "isax-clock"], [1, "db-kpi-grid", "db-kpi-grid--3"], [1, "isax", "isax-edit", "text-warning"], [1, "isax", "isax-send-2", "text-success"], [1, "isax", "isax-calendar-tick", "text-blue"], [1, "db-card", 2, "margin-top", "24px"], [1, "db-card", "db-card--table", 2, "margin-top", "24px"], [1, "db-link", 3, "routerLink"], [1, "db-table-wrap"], [1, "db-table"], [1, "db-th-center"], [1, "db-kpi-body"], [1, "db-kpi-val"], [1, "db-kpi-lbl"], [1, "db-kpi-sub"], [3, "class"], [1, "db-metric-big"], [1, "db-metric-big__val"], [1, "db-metric-big__unit"], [1, "db-stars"], [1, "isax", 3, "isax-star1", "isax-star"], [1, "isax"], [1, "text-muted"], [1, "db-progress-compare__item"], [1, "db-progress-compare__lbl"], [1, "db-metric-bar", 2, "flex", "1", "margin", "0 8px"], [1, "db-metric-fill", "db-metric-fill--orange"], [1, "db-progress-compare__val"], [1, "db-metric-fill", "db-metric-fill--green"], [1, "db-metric-list", 2, "margin-top", "8px"], [1, "db-metric-item", 2, "margin-bottom", "4px"], [1, "db-metric-lbl", 2, "font-size", "11px"], [1, "db-metric-val", 2, "font-size", "11px", "color", "#22c55e"], [1, "db-metric-val", 2, "font-size", "11px", "color", "#1D9CFD"], [1, "isax", "isax-people"], [3, "series", "chart", "plotOptions", "dataLabels", "xaxis", "colors", "grid", "tooltip"], ["colspan", "4", 1, "db-empty-row"], [1, "db-td-title"], [1, "db-td-center"], [1, "db-pill", "db-pill--blue"], [1, "db-row-bar"], [1, "db-row-fill"], [1, "db-row-pct"], [1, "db-badge-pill", 3, "ngClass"]], template: function InstructorDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275text(5, "Vos indicateurs p\xE9dagogiques en temps r\xE9el");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "a", 4);
      \u0275\u0275element(7, "i", 5);
      \u0275\u0275text(8, " Voir les rapports ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, InstructorDashboardComponent_Conditional_9_Template, 3, 1, "div", 6)(10, InstructorDashboardComponent_Conditional_10_Template, 188, 45);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Tableau de bord \u2014 ", ctx.displayName);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorStatements);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading ? 9 : 10);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink, NgApexchartsModule, ChartComponent], styles: ["\n\n.db-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.db-header__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1E293B;\n}\n.db-header__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  margin-top: 2px;\n}\n.db-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.db-btn--blue[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n}\n.db-btn--blue[_ngcontent-%COMP%]:hover {\n  background: rgb(20.1142857143, 79.619047619, 138.2857142857);\n}\n.db-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.db-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-bottom: 16px;\n}\n@media (max-width: 1200px) {\n  .db-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .db-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.db-kpi-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 14px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  position: relative;\n}\n.db-kpi-card--skeleton[_ngcontent-%COMP%] {\n  min-height: 80px;\n  background: #e2e8f0;\n  border: none;\n}\n.db-kpi-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.db-kpi-icon--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.db-kpi-icon--teal[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.db-kpi-icon--purple[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.db-kpi-icon--orange[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.db-kpi-icon--green[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #166534;\n}\n.db-kpi-icon--red[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.db-kpi-icon--gold[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: #B7891A;\n}\n.db-kpi-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.db-kpi-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1E293B;\n  line-height: 1.2;\n}\n.db-kpi-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.db-kpi-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgb(127.050209205, 141.7782426778, 162.949790795);\n  margin-top: 1px;\n}\n.db-kpi-trend[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 13px;\n}\n.db-kpi-trend--up[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.db-kpi-trend--down[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.db-charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 280px;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n@media (max-width: 900px) {\n  .db-charts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-metrics-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n@media (max-width: 900px) {\n  .db-metrics-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.db-card--table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.db-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #E2E8F0;\n}\n.db-card__head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #64748B;\n}\n.db-card__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1E293B;\n  flex: 1;\n}\n.db-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.db-badge--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: rgb(20.7619047619, 82.1825396825, 142.7380952381);\n}\n.db-link[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #185FA5;\n  text-decoration: none;\n}\n.db-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.db-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 120px;\n  font-size: 12px;\n  color: #64748B;\n}\n.db-metric-list[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n}\n.db-metric-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.db-metric-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  font-weight: 500;\n}\n.db-metric-bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.db-metric-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 7px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.db-metric-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.db-metric-fill--blue[_ngcontent-%COMP%] {\n  background: #185FA5;\n}\n.db-metric-fill--teal[_ngcontent-%COMP%], \n.db-metric-fill--green[_ngcontent-%COMP%] {\n  background: #0F6E56;\n}\n.db-metric-fill--purple[_ngcontent-%COMP%] {\n  background: #534AB7;\n}\n.db-metric-fill--orange[_ngcontent-%COMP%] {\n  background: #854F0B;\n}\n.db-metric-fill--red[_ngcontent-%COMP%] {\n  background: #A32D2D;\n}\n.db-metric-val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1E293B;\n  width: 35px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.db-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1px;\n  background: #E2E8F0;\n  margin: 0;\n  padding: 0;\n}\n.db-summary-item[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  padding: 14px 10px;\n  text-align: center;\n}\n.db-summary-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.db-summary-val--blue[_ngcontent-%COMP%] {\n  color: #185FA5;\n}\n.db-summary-val--teal[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.db-summary-val--purple[_ngcontent-%COMP%] {\n  color: #534AB7;\n}\n.db-summary-val--orange[_ngcontent-%COMP%] {\n  color: #854F0B;\n}\n.db-summary-val--gold[_ngcontent-%COMP%] {\n  color: #B7891A;\n}\n.db-summary-val--green[_ngcontent-%COMP%] {\n  color: #166534;\n}\n.db-summary-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 3px;\n  line-height: 1.3;\n}\n.db-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.db-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.db-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #F8FAFC;\n}\n.db-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748B;\n  border-bottom: 1px solid #E2E8F0;\n  white-space: nowrap;\n}\n.db-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid #E2E8F0;\n  color: #1E293B;\n  vertical-align: middle;\n}\n.db-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.db-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #F8FAFC;\n}\n.db-th-center[_ngcontent-%COMP%], \n.db-td-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.db-td-title[_ngcontent-%COMP%] {\n  max-width: 220px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n}\n.db-empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #64748B;\n  padding: 24px !important;\n}\n.db-row-bar[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  width: 80px;\n  height: 6px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n  margin-right: 6px;\n}\n.db-row-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.db-row-fill--green[_ngcontent-%COMP%] {\n  background: #0F6E56;\n}\n.db-row-fill--orange[_ngcontent-%COMP%] {\n  background: #854F0B;\n}\n.db-row-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1E293B;\n  vertical-align: middle;\n}\n.db-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #1E293B;\n  margin-bottom: 12px;\n}\n.db-section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #64748B;\n  font-size: 15px;\n}\n.db-kpi-grid--4[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-bottom: 12px;\n}\n@media (max-width: 1100px) {\n  .db-kpi-grid--4[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .db-kpi-grid--4[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-kpi-grid--3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 12px;\n}\n@media (max-width: 900px) {\n  .db-kpi-grid--3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .db-kpi-grid--3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.db-card--metric[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.db-card--metric[_ngcontent-%COMP%]   .db-card__head[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding: 0 0 8px 0;\n}\n.db-card--metric[_ngcontent-%COMP%]   .db-card__head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.db-card--metric[_ngcontent-%COMP%]   .db-card__head[_ngcontent-%COMP%]   .db-card__title[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.db-metric-big[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n.db-metric-big__val[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1E293B;\n  line-height: 1;\n}\n.db-metric-big__unit[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  font-weight: 500;\n}\n.db-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  margin-top: 4px;\n}\n.db-stars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #B7891A;\n}\n.db-stars[_ngcontent-%COMP%]   .isax-star[_ngcontent-%COMP%] {\n  color: #E2E8F0;\n}\n.db-empty--sm[_ngcontent-%COMP%] {\n  height: auto;\n  padding: 12px 0;\n  font-size: 11px;\n  color: #64748B;\n  justify-content: flex-start;\n}\n.db-progress-compare[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 4px;\n}\n.db-progress-compare__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.db-progress-compare__lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n  width: 32px;\n  flex-shrink: 0;\n}\n.db-progress-compare__val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1E293B;\n  width: 32px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.db-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 28px;\n  height: 20px;\n  padding: 0 7px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.db-pill--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.db-badge-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 500;\n}\n.db-badge-pill.badge--green[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.db-badge-pill.badge--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.db-badge-pill.badge--gray[_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #5F5E5A;\n}\n.db-badge-pill.badge--red[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n/*# sourceMappingURL=instructor-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-dashboard", imports: [CommonModule, RouterLink, NgApexchartsModule], template: `<!-- \u2500\u2500 HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="db-header">\r
  <div class="db-header__info">\r
    <div class="db-header__title">Tableau de bord \u2014 {{ displayName }}</div>\r
    <div class="db-header__sub">Vos indicateurs p\xE9dagogiques en temps r\xE9el</div>\r
  </div>\r
  <a [routerLink]="routes.instructorStatements" class="db-btn db-btn--blue">\r
    <i class="isax isax-receipt-item"></i> Voir les rapports\r
  </a>\r
</div>\r
\r
<!-- \u2500\u2500 SKELETON / LOADING \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
@if (loading) {\r
  <div class="db-kpi-grid">\r
    @for (_ of [1,2,3,4,5,6,7,8]; track $index) {\r
      <div class="db-kpi-card db-kpi-card--skeleton"></div>\r
    }\r
  </div>\r
} @else {\r
\r
  <!-- \u2500\u2500 KPIs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="db-kpi-grid">\r
    @for (k of kpis; track k.label) {\r
      <div class="db-kpi-card">\r
        <div class="db-kpi-icon db-kpi-icon--{{ k.color }}">\r
          <i class="isax {{ k.icon }}"></i>\r
        </div>\r
        <div class="db-kpi-body">\r
          <div class="db-kpi-val">{{ k.value }}</div>\r
          <div class="db-kpi-lbl">{{ k.label }}</div>\r
          @if (k.sub) { <div class="db-kpi-sub">{{ k.sub }}</div> }\r
        </div>\r
        @if (k.trend) {\r
          <div class="db-kpi-trend db-kpi-trend--{{ k.trend }}">\r
            <i class="isax {{ k.trend === 'up' ? 'isax-arrow-up-3' : 'isax-arrow-down-3' }}"></i>\r
          </div>\r
        }\r
      </div>\r
    }\r
  </div>\r
\r
  <!-- \u2500\u2500 GRILLE CHARTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="db-charts-row">\r
\r
    <!-- Compl\xE9tion par formation -->\r
    <div class="db-card db-card--chart">\r
      <div class="db-card__head">\r
        <i class="isax isax-book-1"></i>\r
        <span class="db-card__title">Compl\xE9tion par formation</span>\r
        <span class="db-badge db-badge--blue">Top 5</span>\r
      </div>\r
      @if (completionChart) {\r
        <apx-chart\r
          [series]="completionChart.series"\r
          [chart]="completionChart.chart"\r
          [plotOptions]="completionChart.plotOptions"\r
          [dataLabels]="completionChart.dataLabels"\r
          [xaxis]="completionChart.xaxis"\r
          [yaxis]="completionChart.yaxis"\r
          [colors]="completionChart.colors"\r
          [grid]="completionChart.grid"\r
          [tooltip]="completionChart.tooltip">\r
        </apx-chart>\r
      } @else {\r
        <div class="db-empty">Aucune donn\xE9e formation</div>\r
      }\r
    </div>\r
\r
    <!-- Quiz r\xE9ussite vs abandon -->\r
    <div class="db-card db-card--chart db-card--narrow">\r
      <div class="db-card__head">\r
        <i class="isax isax-award"></i>\r
        <span class="db-card__title">R\xE9sultats quiz</span>\r
      </div>\r
      @if (quizChart) {\r
        <apx-chart\r
          [series]="quizChart.series"\r
          [chart]="quizChart.chart"\r
          [labels]="quizChart.labels"\r
          [colors]="quizChart.colors"\r
          [legend]="quizChart.legend"\r
          [dataLabels]="quizChart.dataLabels"\r
          [plotOptions]="quizChart.plotOptions"\r
          [tooltip]="quizChart.tooltip">\r
        </apx-chart>\r
      } @else {\r
        <div class="db-empty">Aucun r\xE9sultat quiz</div>\r
      }\r
    </div>\r
\r
  </div>\r
\r
  <!-- \u2500\u2500 M\xC9TRIQUES D\xC9TAILL\xC9ES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="db-metrics-row">\r
\r
    <!-- Indicateurs p\xE9dagogiques -->\r
    <div class="db-card">\r
      <div class="db-card__head">\r
        <i class="isax isax-chart-square"></i>\r
        <span class="db-card__title">Indicateurs p\xE9dagogiques</span>\r
      </div>\r
      <div class="db-metric-list">\r
\r
        <div class="db-metric-item">\r
          <span class="db-metric-lbl">Taux participation live</span>\r
          <div class="db-metric-bar-wrap">\r
            <div class="db-metric-bar">\r
              <div class="db-metric-fill db-metric-fill--blue"\r
                   [style.width.%]="dashStats?.taux_participation_live ?? tauxOccupation"></div>\r
            </div>\r
            <span class="db-metric-val">{{ dashStats?.taux_participation_live ?? tauxOccupation }}%</span>\r
          </div>\r
        </div>\r
\r
        <div class="db-metric-item">\r
          <span class="db-metric-lbl">Taux compl\xE9tion cours</span>\r
          <div class="db-metric-bar-wrap">\r
            <div class="db-metric-bar">\r
              <div class="db-metric-fill"\r
                   [class.db-metric-fill--green]="tauxCompletion >= 70"\r
                   [class.db-metric-fill--orange]="tauxCompletion < 70"\r
                   [style.width.%]="tauxCompletion"></div>\r
            </div>\r
            <span class="db-metric-val">{{ tauxCompletion }}%</span>\r
          </div>\r
        </div>\r
\r
        <div class="db-metric-item">\r
          <span class="db-metric-lbl">Taux d'abandon</span>\r
          <div class="db-metric-bar-wrap">\r
            <div class="db-metric-bar">\r
              <div class="db-metric-fill"\r
                   [class.db-metric-fill--red]="tauxAbandons > 20"\r
                   [class.db-metric-fill--green]="tauxAbandons <= 20"\r
                   [style.width.%]="tauxAbandons"></div>\r
            </div>\r
            <span class="db-metric-val">{{ tauxAbandons }}%</span>\r
          </div>\r
        </div>\r
\r
        <div class="db-metric-item">\r
          <span class="db-metric-lbl">Score moyen \xE9valuations</span>\r
          <div class="db-metric-bar-wrap">\r
            <div class="db-metric-bar">\r
              <div class="db-metric-fill db-metric-fill--purple"\r
                   [style.width.%]="dashStats?.score_moyen ?? scoreMoyen"></div>\r
            </div>\r
            <span class="db-metric-val">{{ dashStats?.score_moyen ?? scoreMoyen }}%</span>\r
          </div>\r
        </div>\r
\r
        <div class="db-metric-item">\r
          <span class="db-metric-lbl">Taux de r\xE9ussite</span>\r
          <div class="db-metric-bar-wrap">\r
            <div class="db-metric-bar">\r
              <div class="db-metric-fill"\r
                   [class.db-metric-fill--green]="tauxReussite >= 60"\r
                   [class.db-metric-fill--red]="tauxReussite < 60"\r
                   [style.width.%]="tauxReussite"></div>\r
            </div>\r
            <span class="db-metric-val">{{ tauxReussite }}%</span>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- R\xE9sum\xE9 consultant -->\r
    <div class="db-card">\r
      <div class="db-card__head">\r
        <i class="isax isax-profile-circle"></i>\r
        <span class="db-card__title">R\xE9sum\xE9 consultant</span>\r
      </div>\r
      <div class="db-summary-grid">\r
        <div class="db-summary-item">\r
          <div class="db-summary-val db-summary-val--blue">{{ dashStats?.nb_sessions_animees ?? sessionsAnimees }}</div>\r
          <div class="db-summary-lbl">Sessions anim\xE9es</div>\r
        </div>\r
        <div class="db-summary-item">\r
          <div class="db-summary-val db-summary-val--teal">{{ dashStats?.nb_apprenants_inscrits ?? apprenantsForms }}</div>\r
          <div class="db-summary-lbl">Apprenants inscrits</div>\r
        </div>\r
        <div class="db-summary-item">\r
          <div class="db-summary-val db-summary-val--purple">{{ heuresRealisees }}h</div>\r
          <div class="db-summary-lbl">Heures facturables</div>\r
        </div>\r
        <div class="db-summary-item">\r
          <div class="db-summary-val db-summary-val--orange">{{ dashStats?.taux_participation_live ?? tauxOccupation }}%</div>\r
          <div class="db-summary-lbl">Taux participation</div>\r
        </div>\r
        <div class="db-summary-item">\r
          <div class="db-summary-val db-summary-val--gold">{{ dashStats?.nb_certifications ?? certificatsDeliv }}</div>\r
          <div class="db-summary-lbl">Certifications</div>\r
        </div>\r
        <div class="db-summary-item">\r
          <div class="db-summary-val db-summary-val--green">{{ formationsCount }}</div>\r
          <div class="db-summary-lbl">Formations actives</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!--  NOUVEAUX INDICATEURS \u2014 donn\xE9es API centralis\xE9es              -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
\r
  <!-- \u2500\u2500 Qualit\xE9 & Satisfaction \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="db-section-title">\r
    <i class="isax isax-star"></i> Qualit\xE9 & Satisfaction\r
  </div>\r
\r
  <div class="db-kpi-grid db-kpi-grid--4">\r
\r
    <!-- Note moyenne formateur -->\r
    <div class="db-card db-card--metric">\r
      <div class="db-card__head">\r
        <i class="isax isax-profile-circle text-warning"></i>\r
        <span class="db-card__title">Note moyenne formateur</span>\r
      </div>\r
      @if (statsLoading) {\r
        <div class="db-kpi-card--skeleton" style="height:48px;border-radius:8px;"></div>\r
      } @else if (dashStats?.note_moyenne_formateur != null) {\r
        <div class="db-metric-big">\r
          <span class="db-metric-big__val">{{ dashStats!.note_moyenne_formateur }}</span>\r
          <span class="db-metric-big__unit">/10</span>\r
        </div>\r
        <div class="db-stars">\r
          @for (i of [1,2,3,4,5]; track i) {\r
            <i class="isax"\r
               [class.isax-star1]="i <= (dashStats!.note_moyenne_formateur! / 2)"\r
               [class.isax-star]="i > (dashStats!.note_moyenne_formateur! / 2)"></i>\r
          }\r
        </div>\r
      } @else {\r
        <div class="db-empty db-empty--sm">Non encore \xE9valu\xE9</div>\r
      }\r
    </div>\r
\r
    <!-- NPS formation -->\r
    <div class="db-card db-card--metric">\r
      <div class="db-card__head">\r
        <i class="isax isax-smiley text-success"></i>\r
        <span class="db-card__title">NPS formation</span>\r
      </div>\r
      @if (statsLoading) {\r
        <div class="db-kpi-card--skeleton" style="height:48px;border-radius:8px;"></div>\r
      } @else if (dashStats?.nps_formation != null) {\r
        <div class="db-metric-big">\r
          <span class="db-metric-big__val">{{ dashStats!.nps_formation }}</span>\r
          <span class="db-metric-big__unit">/10</span>\r
        </div>\r
        <small class="text-muted">Score satisfaction apprenant</small>\r
      } @else {\r
        <div class="db-empty db-empty--sm">Pas de donn\xE9es</div>\r
      }\r
    </div>\r
\r
    <!-- Feedbacks apprenants -->\r
    <div class="db-card db-card--metric">\r
      <div class="db-card__head">\r
        <i class="isax isax-message text-info"></i>\r
        <span class="db-card__title">Feedback qualitatif</span>\r
      </div>\r
      @if (statsLoading) {\r
        <div class="db-kpi-card--skeleton" style="height:48px;border-radius:8px;"></div>\r
      } @else {\r
        <div class="db-metric-big">\r
          <span class="db-metric-big__val">{{ dashStats?.nb_feedbacks_apprenants ?? 0 }}</span>\r
          <span class="db-metric-big__unit">commentaires</span>\r
        </div>\r
        <small class="text-muted">{{ dashStats?.nb_feedbacks_formateur ?? 0 }} annotations formateur</small>\r
      }\r
    </div>\r
\r
    <!-- Progression avant / apr\xE8s -->\r
    <div class="db-card db-card--metric">\r
      <div class="db-card__head">\r
        <i class="isax isax-chart-2 text-primary"></i>\r
        <span class="db-card__title">Progression avant / apr\xE8s</span>\r
      </div>\r
      @if (statsLoading) {\r
        <div class="db-kpi-card--skeleton" style="height:48px;border-radius:8px;"></div>\r
      } @else {\r
        <div class="db-progress-compare">\r
          <div class="db-progress-compare__item">\r
            <span class="db-progress-compare__lbl">Avant</span>\r
            <div class="db-metric-bar" style="flex:1; margin:0 8px;">\r
              <div class="db-metric-fill db-metric-fill--orange"\r
                   [style.width.%]="dashStats?.progression_avant ?? 0"></div>\r
            </div>\r
            <span class="db-progress-compare__val">{{ dashStats?.progression_avant ?? 0 }}%</span>\r
          </div>\r
          <div class="db-progress-compare__item">\r
            <span class="db-progress-compare__lbl">Apr\xE8s</span>\r
            <div class="db-metric-bar" style="flex:1; margin:0 8px;">\r
              <div class="db-metric-fill db-metric-fill--green"\r
                   [style.width.%]="dashStats?.progression_apres ?? dashStats?.taux_completion_global ?? 0"></div>\r
            </div>\r
            <span class="db-progress-compare__val">\r
              {{ dashStats?.progression_apres ?? dashStats?.taux_completion_global ?? 0 }}%\r
            </span>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
\r
  </div>\r
\r
  <!-- \u2500\u2500 D\xE9lais & Performance op\xE9rationnelle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="db-section-title" style="margin-top:24px;">\r
    <i class="isax isax-clock"></i> D\xE9lais & Performance op\xE9rationnelle\r
  </div>\r
\r
  <div class="db-kpi-grid db-kpi-grid--3">\r
\r
    <!-- Temps moyen de correction -->\r
    <div class="db-card db-card--metric">\r
      <div class="db-card__head">\r
        <i class="isax isax-edit text-warning"></i>\r
        <span class="db-card__title">Temps moyen de correction</span>\r
      </div>\r
      @if (statsLoading) {\r
        <div class="db-kpi-card--skeleton" style="height:48px;border-radius:8px;"></div>\r
      } @else if (dashStats?.temps_moyen_correction_h != null) {\r
        <div class="db-metric-big">\r
          <span class="db-metric-big__val">{{ dashStats!.temps_moyen_correction_h }}</span>\r
          <span class="db-metric-big__unit">heures</span>\r
        </div>\r
        <small class="text-muted">D\xE9lai moyen apr\xE8s fin de session</small>\r
      } @else {\r
        <div class="db-empty db-empty--sm">Pas encore de donn\xE9es</div>\r
      }\r
    </div>\r
\r
    <!-- D\xE9lai publication r\xE9sultats -->\r
    <div class="db-card db-card--metric">\r
      <div class="db-card__head">\r
        <i class="isax isax-send-2 text-success"></i>\r
        <span class="db-card__title">D\xE9lai de publication r\xE9sultats</span>\r
      </div>\r
      @if (statsLoading) {\r
        <div class="db-kpi-card--skeleton" style="height:48px;border-radius:8px;"></div>\r
      } @else if (dashStats?.delai_publication_resultats_h != null) {\r
        <div class="db-metric-big">\r
          <span class="db-metric-big__val">{{ dashStats!.delai_publication_resultats_h }}</span>\r
          <span class="db-metric-big__unit">heures</span>\r
        </div>\r
        <small class="text-muted">Entre fin session et publication</small>\r
      } @else {\r
        <div class="db-empty db-empty--sm">Pas encore de donn\xE9es</div>\r
      }\r
    </div>\r
\r
    <!-- Nombre de sessions anim\xE9es (d\xE9tail) -->\r
    <div class="db-card db-card--metric">\r
      <div class="db-card__head">\r
        <i class="isax isax-calendar-tick text-blue"></i>\r
        <span class="db-card__title">Sessions anim\xE9es</span>\r
      </div>\r
      @if (statsLoading) {\r
        <div class="db-kpi-card--skeleton" style="height:48px;border-radius:8px;"></div>\r
      } @else {\r
        <div class="db-metric-big">\r
          <span class="db-metric-big__val">{{ dashStats?.nb_sessions_animees ?? sessionsAnimees }}</span>\r
          <span class="db-metric-big__unit">sessions</span>\r
        </div>\r
        <div class="db-metric-list" style="margin-top:8px;">\r
          <div class="db-metric-item" style="margin-bottom:4px;">\r
            <span class="db-metric-lbl" style="font-size:11px;">Termin\xE9es</span>\r
            <span class="db-metric-val" style="font-size:11px; color:#22c55e;">\r
              {{ dashStats?.nb_sessions_terminees ?? 0 }}\r
            </span>\r
          </div>\r
          <div class="db-metric-item">\r
            <span class="db-metric-lbl" style="font-size:11px;">Apprenants (sessions)</span>\r
            <span class="db-metric-val" style="font-size:11px; color:#1D9CFD;">\r
              {{ dashStats?.nb_apprenants_sessions ?? 0 }}\r
            </span>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
\r
  </div>\r
\r
  <!-- \u2500\u2500 \xC9volution inscriptions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (inscriptionsChart) {\r
    <div class="db-card" style="margin-top:24px;">\r
      <div class="db-card__head">\r
        <i class="isax isax-people"></i>\r
        <span class="db-card__title">\xC9volution des inscriptions</span>\r
        <span class="db-badge db-badge--blue">6 mois</span>\r
      </div>\r
      <apx-chart\r
        [series]="inscriptionsChart.series"\r
        [chart]="inscriptionsChart.chart"\r
        [plotOptions]="inscriptionsChart.plotOptions"\r
        [dataLabels]="inscriptionsChart.dataLabels"\r
        [xaxis]="inscriptionsChart.xaxis"\r
        [colors]="inscriptionsChart.colors"\r
        [grid]="inscriptionsChart.grid"\r
        [tooltip]="inscriptionsChart.tooltip">\r
      </apx-chart>\r
    </div>\r
  }\r
\r
  <!-- \u2500\u2500 TABLE FORMATIONS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="db-card db-card--table" style="margin-top:24px;">\r
    <div class="db-card__head">\r
      <i class="isax isax-book-1"></i>\r
      <span class="db-card__title">Mes formations</span>\r
      <a [routerLink]="routes.instructorCourse" class="db-link">Tout voir \u2192</a>\r
    </div>\r
    <div class="db-table-wrap">\r
      <table class="db-table">\r
        <thead>\r
          <tr>\r
            <th>Formation</th>\r
            <th class="db-th-center">Inscrits</th>\r
            <th>Compl\xE9tion</th>\r
            <th class="db-th-center">Statut</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @if (!formations.length) {\r
            <tr><td colspan="4" class="db-empty-row">Aucune formation trouv\xE9e</td></tr>\r
          }\r
          @for (f of formations; track f.id) {\r
            <tr>\r
              <td class="db-td-title">{{ f.titre }}</td>\r
              <td class="db-td-center">\r
                <span class="db-pill db-pill--blue">{{ f.inscrits }}</span>\r
              </td>\r
              <td>\r
                <div class="db-row-bar">\r
                  <div class="db-row-fill"\r
                       [class.db-row-fill--green]="f.completion >= 70"\r
                       [class.db-row-fill--orange]="f.completion < 70"\r
                       [style.width.%]="f.completion"></div>\r
                </div>\r
                <span class="db-row-pct">{{ f.completion }}%</span>\r
              </td>\r
              <td class="db-td-center">\r
                <span class="db-badge-pill" [ngClass]="getStatutClass(f.statut)">\r
                  {{ getStatutLabel(f.statut) }}\r
                </span>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
}\r
`, styles: ["/* src/app/features/instructor/instructor-dashboard/instructor-dashboard.component.scss */\n.db-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.db-header__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1E293B;\n}\n.db-header__sub {\n  font-size: 12px;\n  color: #64748B;\n  margin-top: 2px;\n}\n.db-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.db-btn--blue {\n  background: #185FA5;\n  color: #fff;\n}\n.db-btn--blue:hover {\n  background: rgb(20.1142857143, 79.619047619, 138.2857142857);\n}\n.db-btn i {\n  font-size: 14px;\n}\n.db-kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-bottom: 16px;\n}\n@media (max-width: 1200px) {\n  .db-kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .db-kpi-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.db-kpi-card {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 14px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  position: relative;\n}\n.db-kpi-card--skeleton {\n  min-height: 80px;\n  background: #e2e8f0;\n  border: none;\n}\n.db-kpi-icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.db-kpi-icon--blue {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.db-kpi-icon--teal {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.db-kpi-icon--purple {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.db-kpi-icon--orange {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.db-kpi-icon--green {\n  background: #DCFCE7;\n  color: #166534;\n}\n.db-kpi-icon--red {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.db-kpi-icon--gold {\n  background: #FFFBEB;\n  color: #B7891A;\n}\n.db-kpi-body {\n  flex: 1;\n  min-width: 0;\n}\n.db-kpi-val {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1E293B;\n  line-height: 1.2;\n}\n.db-kpi-lbl {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.db-kpi-sub {\n  font-size: 10px;\n  color: rgb(127.050209205, 141.7782426778, 162.949790795);\n  margin-top: 1px;\n}\n.db-kpi-trend {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 13px;\n}\n.db-kpi-trend--up {\n  color: #0F6E56;\n}\n.db-kpi-trend--down {\n  color: #A32D2D;\n}\n.db-charts-row {\n  display: grid;\n  grid-template-columns: 1fr 280px;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n@media (max-width: 900px) {\n  .db-charts-row {\n    grid-template-columns: 1fr;\n  }\n}\n.db-metrics-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n@media (max-width: 900px) {\n  .db-metrics-row {\n    grid-template-columns: 1fr;\n  }\n}\n.db-card {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.db-card--table {\n  margin-bottom: 0;\n}\n.db-card__head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #E2E8F0;\n}\n.db-card__head i {\n  font-size: 15px;\n  color: #64748B;\n}\n.db-card__title {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1E293B;\n  flex: 1;\n}\n.db-badge {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.db-badge--blue {\n  background: #E6F1FB;\n  color: rgb(20.7619047619, 82.1825396825, 142.7380952381);\n}\n.db-link {\n  font-size: 11px;\n  color: #185FA5;\n  text-decoration: none;\n}\n.db-link:hover {\n  text-decoration: underline;\n}\n.db-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 120px;\n  font-size: 12px;\n  color: #64748B;\n}\n.db-metric-list {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n}\n.db-metric-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.db-metric-lbl {\n  font-size: 11px;\n  color: #64748B;\n  font-weight: 500;\n}\n.db-metric-bar-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.db-metric-bar {\n  flex: 1;\n  height: 7px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.db-metric-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.db-metric-fill--blue {\n  background: #185FA5;\n}\n.db-metric-fill--teal,\n.db-metric-fill--green {\n  background: #0F6E56;\n}\n.db-metric-fill--purple {\n  background: #534AB7;\n}\n.db-metric-fill--orange {\n  background: #854F0B;\n}\n.db-metric-fill--red {\n  background: #A32D2D;\n}\n.db-metric-val {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1E293B;\n  width: 35px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.db-summary-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1px;\n  background: #E2E8F0;\n  margin: 0;\n  padding: 0;\n}\n.db-summary-item {\n  background: #FFFFFF;\n  padding: 14px 10px;\n  text-align: center;\n}\n.db-summary-val {\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.db-summary-val--blue {\n  color: #185FA5;\n}\n.db-summary-val--teal {\n  color: #0F6E56;\n}\n.db-summary-val--purple {\n  color: #534AB7;\n}\n.db-summary-val--orange {\n  color: #854F0B;\n}\n.db-summary-val--gold {\n  color: #B7891A;\n}\n.db-summary-val--green {\n  color: #166534;\n}\n.db-summary-lbl {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 3px;\n  line-height: 1.3;\n}\n.db-table-wrap {\n  overflow-x: auto;\n}\n.db-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.db-table thead tr {\n  background: #F8FAFC;\n}\n.db-table th {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748B;\n  border-bottom: 1px solid #E2E8F0;\n  white-space: nowrap;\n}\n.db-table td {\n  padding: 10px 14px;\n  border-bottom: 1px solid #E2E8F0;\n  color: #1E293B;\n  vertical-align: middle;\n}\n.db-table tr:last-child td {\n  border-bottom: none;\n}\n.db-table tr:hover td {\n  background: #F8FAFC;\n}\n.db-th-center,\n.db-td-center {\n  text-align: center !important;\n}\n.db-td-title {\n  max-width: 220px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n}\n.db-empty-row {\n  text-align: center;\n  color: #64748B;\n  padding: 24px !important;\n}\n.db-row-bar {\n  display: inline-block;\n  vertical-align: middle;\n  width: 80px;\n  height: 6px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n  margin-right: 6px;\n}\n.db-row-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.db-row-fill--green {\n  background: #0F6E56;\n}\n.db-row-fill--orange {\n  background: #854F0B;\n}\n.db-row-pct {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1E293B;\n  vertical-align: middle;\n}\n.db-section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #1E293B;\n  margin-bottom: 12px;\n}\n.db-section-title i {\n  color: #64748B;\n  font-size: 15px;\n}\n.db-kpi-grid--4 {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-bottom: 12px;\n}\n@media (max-width: 1100px) {\n  .db-kpi-grid--4 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .db-kpi-grid--4 {\n    grid-template-columns: 1fr;\n  }\n}\n.db-kpi-grid--3 {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 12px;\n}\n@media (max-width: 900px) {\n  .db-kpi-grid--3 {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .db-kpi-grid--3 {\n    grid-template-columns: 1fr;\n  }\n}\n.db-card--metric {\n  padding: 14px;\n}\n.db-card--metric .db-card__head {\n  border-bottom: none;\n  padding: 0 0 8px 0;\n}\n.db-card--metric .db-card__head i {\n  font-size: 16px;\n}\n.db-card--metric .db-card__head .db-card__title {\n  font-size: 12px;\n}\n.db-metric-big {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n.db-metric-big__val {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1E293B;\n  line-height: 1;\n}\n.db-metric-big__unit {\n  font-size: 12px;\n  color: #64748B;\n  font-weight: 500;\n}\n.db-stars {\n  display: flex;\n  gap: 2px;\n  margin-top: 4px;\n}\n.db-stars i {\n  font-size: 14px;\n  color: #B7891A;\n}\n.db-stars .isax-star {\n  color: #E2E8F0;\n}\n.db-empty--sm {\n  height: auto;\n  padding: 12px 0;\n  font-size: 11px;\n  color: #64748B;\n  justify-content: flex-start;\n}\n.db-progress-compare {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 4px;\n}\n.db-progress-compare__item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.db-progress-compare__lbl {\n  font-size: 10px;\n  color: #64748B;\n  width: 32px;\n  flex-shrink: 0;\n}\n.db-progress-compare__val {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1E293B;\n  width: 32px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.db-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 28px;\n  height: 20px;\n  padding: 0 7px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.db-pill--blue {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.db-badge-pill {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 500;\n}\n.db-badge-pill.badge--green {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.db-badge-pill.badge--blue {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.db-badge-pill.badge--gray {\n  background: #F1EFE8;\n  color: #5F5E5A;\n}\n.db-badge-pill.badge--red {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n/*# sourceMappingURL=instructor-dashboard.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorDashboardComponent, { className: "InstructorDashboardComponent", filePath: "app/features/instructor/instructor-dashboard/instructor-dashboard.component.ts", lineNumber: 60 });
})();
export {
  InstructorDashboardComponent
};
//# sourceMappingURL=chunk-DHU26AQH.js.map
