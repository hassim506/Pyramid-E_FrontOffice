import {
  AdminRHStatsService
} from "./chunk-KX6RJFTG.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BZGM6D4K.js";
import "./chunk-FKX6UC3I.js";
import {
  routes
} from "./chunk-ZAFZNJD2.js";
import {
  RouterModule
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-GWJREDC5.js";
import {
  Component,
  catchError,
  forkJoin,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2JCHGHJA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-dashboard/adminrh-dashboard.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "bg-success text-white": a0, "bg-warning text-dark": a1, "bg-info text-white": a2, "bg-secondary text-white": a3 });
var _c1 = (a0, a1, a2, a3) => ({ "fa-check-circle": a0, "fa-edit": a1, "fa-play-circle": a2, "fa-archive": a3 });
function AdminrhDashboardComponent_div_1_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 47);
  }
}
function AdminrhDashboardComponent_div_1_img_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 48);
  }
}
function AdminrhDashboardComponent_div_1_img_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 49);
  }
}
function AdminrhDashboardComponent_div_1_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 50);
  }
}
function AdminrhDashboardComponent_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "div", 52);
    \u0275\u0275elementEnd();
  }
}
function AdminrhDashboardComponent_div_1_h4_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 53);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, stat_r2.value));
  }
}
function AdminrhDashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "div", 32)(5, "span", 33);
    \u0275\u0275template(6, AdminrhDashboardComponent_div_1_img_6_Template, 1, 0, "img", 34)(7, AdminrhDashboardComponent_div_1_img_7_Template, 1, 0, "img", 35)(8, AdminrhDashboardComponent_div_1_img_8_Template, 1, 0, "img", 36)(9, AdminrhDashboardComponent_div_1_img_9_Template, 1, 0, "img", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 38)(11, "p", 39);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminrhDashboardComponent_div_1_div_13_Template, 2, 0, "div", 40)(14, AdminrhDashboardComponent_div_1_h4_14_Template, 3, 3, "h4", 41);
    \u0275\u0275elementStart(15, "small", 42);
    \u0275\u0275element(16, "i", 43);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 44)(19, "div", 45);
    \u0275\u0275element(20, "div", 46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("stat-card-" + stat_r2.type);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", "bg-" + stat_r2.color + "-transparent");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r2.type === "utilisateurs");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r2.type === "formateurs");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r2.type === "formations");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r2.type === "demandes");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+", stat_r2.growth, "% ce mois ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("bg-" + stat_r2.color);
    \u0275\u0275styleProp("width", stat_r2.progress, "%");
  }
}
function AdminrhDashboardComponent_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "div", 52);
    \u0275\u0275elementEnd();
  }
}
function AdminrhDashboardComponent_div_7_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r4.suffix);
  }
}
function AdminrhDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 54)(2, "div", 55)(3, "div", 56)(4, "div")(5, "p", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminrhDashboardComponent_div_7_div_7_Template, 2, 0, "div", 40)(8, AdminrhDashboardComponent_div_7_h4_8_Template, 4, 2, "h4", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 33);
    \u0275\u0275element(10, "i");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(card_r4.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "bg-" + card_r4.color + "-transparent");
    \u0275\u0275advance();
    \u0275\u0275classMap(card_r4.icon + " fs-24 text-" + card_r4.color);
  }
}
function AdminrhDashboardComponent_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "div", 52);
    \u0275\u0275elementEnd();
  }
}
function AdminrhDashboardComponent_div_13_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r5.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r5.suffix);
  }
}
function AdminrhDashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 54)(2, "div", 55)(3, "div", 56)(4, "div")(5, "p", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminrhDashboardComponent_div_13_div_7_Template, 2, 0, "div", 40)(8, AdminrhDashboardComponent_div_13_h4_8_Template, 4, 2, "h4", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 33);
    \u0275\u0275element(10, "i");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const card_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(card_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "bg-" + card_r5.color + "-transparent");
    \u0275\u0275advance();
    \u0275\u0275classMap(card_r5.icon + " fs-24 text-" + card_r5.color);
  }
}
function AdminrhDashboardComponent_div_26_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 74)(1, "td", 75)(2, "div", 31);
    \u0275\u0275element(3, "img", 76);
    \u0275\u0275elementStart(4, "div")(5, "h6", 77);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "td", 78)(8, "span", 79);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 78)(11, "div", 80);
    \u0275\u0275element(12, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 78)(14, "span", 82);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 78)(17, "span", 83);
    \u0275\u0275element(18, "i", 84);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 78)(21, "div", 85);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "small", 86);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 87)(27, "button", 88);
    \u0275\u0275element(28, "i", 89);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const formation_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", formation_r6.image || "assets/img/default-course.svg", \u0275\u0275sanitizeUrl)("alt", formation_r6.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(formation_r6.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(formation_r6.inscrits);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", formation_r6.progression, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", formation_r6.completes || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(15, _c0, formation_r6.statut === "publie", formation_r6.statut === "brouillon", formation_r6.statut === "en_cours", formation_r6.statut === "archive"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(20, _c1, formation_r6.statut === "publie", formation_r6.statut === "brouillon", formation_r6.statut === "en_cours", formation_r6.statut === "archive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatutLabel(formation_r6.statut), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 12, formation_r6.dateCreation, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getRelativeDate(formation_r6.dateCreation));
  }
}
function AdminrhDashboardComponent_div_26_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 90);
    \u0275\u0275element(2, "i", 91);
    \u0275\u0275elementStart(3, "h6", 92);
    \u0275\u0275text(4, "Aucune formation disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 93);
    \u0275\u0275text(6, "Les formations appara\xEEtront ici d\xE8s leur cr\xE9ation.");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhDashboardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "table", 61)(2, "thead", 62)(3, "tr")(4, "th", 63);
    \u0275\u0275element(5, "i", 64);
    \u0275\u0275text(6, "Formation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 65);
    \u0275\u0275element(8, "i", 66);
    \u0275\u0275text(9, "Inscrits ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 65);
    \u0275\u0275element(11, "i", 67);
    \u0275\u0275text(12, "Progression ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 65);
    \u0275\u0275element(14, "i", 68);
    \u0275\u0275text(15, "Compl\xE9t\xE9s ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 65);
    \u0275\u0275element(17, "i", 69);
    \u0275\u0275text(18, "Statut ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 65);
    \u0275\u0275element(20, "i", 70);
    \u0275\u0275text(21, "Depuis ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "th", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, AdminrhDashboardComponent_div_26_tr_24_Template, 29, 25, "tr", 72)(25, AdminrhDashboardComponent_div_26_tr_25_Template, 7, 0, "tr", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r2.formationsRecentes)("ngForTrackBy", ctx_r2.trackByFormationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.formationsRecentes.length === 0);
  }
}
function AdminrhDashboardComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95)(2, "span", 96);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 97);
    \u0275\u0275text(5, "Chargement des formations...");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhDashboardComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275element(1, "span", 99);
    \u0275\u0275elementStart(2, "small", 86);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const serie_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", serie_r7.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(serie_r7.name);
  }
}
function AdminrhDashboardComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "apx-chart", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("series", ctx_r2.chartData.series)("chart", ctx_r2.chartData.chart)("xaxis", ctx_r2.chartData.xaxis)("yaxis", ctx_r2.chartData.yaxis)("stroke", ctx_r2.chartData.stroke)("tooltip", ctx_r2.chartData.tooltip)("dataLabels", ctx_r2.chartData.dataLabels)("fill", ctx_r2.chartData.fill)("grid", ctx_r2.chartData.grid)("colors", ctx_r2.chartData.colors);
  }
}
function AdminrhDashboardComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95)(2, "span", 96);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 97);
    \u0275\u0275text(5, "Chargement des statistiques...");
    \u0275\u0275elementEnd()();
  }
}
var AdminrhDashboardComponent = class _AdminrhDashboardComponent {
  adminRHStatsService;
  routes = routes;
  isLoading = true;
  formationsRecentes = [];
  statistiquesMensuelles = [];
  // Métriques principales
  metrics = {
    totalUtilisateurs: 0,
    totalFormateurs: 0,
    totalFormations: 0,
    totalDemandesFormation: 0,
    totalSessionsFormation: 0,
    formationsPubliees: 0,
    tauxCompletionGlobal: 0,
    sessionsMoisCourant: 0,
    heuresConsommees: 0,
    scoreMoyenFormations: 0,
    tauxSatisfaction: 0,
    nombreCertifies: 0,
    nombreIncidents: 0
  };
  // Cartes statistiques principales
  statisticsCards = [
    { type: "utilisateurs", label: "Total Utilisateurs", value: 0, icon: "fas fa-users", color: "primary", growth: 12, progress: 75 },
    { type: "formateurs", label: "Total Formateurs", value: 0, icon: "fas fa-user-tie", color: "success", growth: 8, progress: 60 },
    { type: "formations", label: "Total Formations", value: 0, icon: "fas fa-graduation-cap", color: "info", growth: 15, progress: 85 },
    { type: "demandes", label: "Demandes Formation", value: 0, icon: "fas fa-file-alt", color: "warning", growth: 5, progress: 45 }
  ];
  // Cartes métriques Formations & Sessions
  get metricsCardsRow1() {
    return [
      { label: "Formations publi\xE9es", value: this.metrics.formationsPubliees, icon: "isax isax-book", color: "success", suffix: "" },
      { label: "Taux compl\xE9tion global", value: this.metrics.tauxCompletionGlobal, icon: "isax isax-chart-2", color: "info", suffix: "%" },
      { label: "Sessions ce mois", value: this.metrics.sessionsMoisCourant, icon: "isax isax-calendar", color: "primary", suffix: "" },
      { label: "Heures consomm\xE9es", value: this.metrics.heuresConsommees, icon: "isax isax-clock", color: "warning", suffix: "h" }
    ];
  }
  // Cartes métriques Qualité & Performance
  get metricsCardsRow2() {
    return [
      { label: "Score moyen formations", value: this.metrics.scoreMoyenFormations, icon: "isax isax-star", color: "warning", suffix: "/5" },
      { label: "Taux satisfaction", value: this.metrics.tauxSatisfaction, icon: "isax isax-smiley", color: "success", suffix: "%" },
      { label: "Total certifi\xE9s", value: this.metrics.nombreCertifies, icon: "isax isax-award", color: "primary", suffix: "" },
      { label: "Incidents signal\xE9s", value: this.metrics.nombreIncidents, icon: "isax isax-warning-2", color: "danger", suffix: "" }
    ];
  }
  chartLegend = [
    { name: "Formations", color: "#1D9CFD" },
    { name: "Utilisateurs", color: "#00BFA5" },
    { name: "Formateurs", color: "#FFB64D" },
    { name: "Sessions", color: "#E91E63" }
  ];
  chartData = {
    series: [
      { name: "Formations", data: [] },
      { name: "Utilisateurs", data: [] },
      { name: "Formateurs", data: [] },
      { name: "Sessions", data: [] }
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: { show: true }
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    xaxis: { categories: [], axisBorder: { show: false }, axisTicks: { show: false } },
    yaxis: { title: { text: "Nombre" } },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
      }
    },
    colors: ["#1D9CFD", "#00BFA5", "#FFB64D", "#E91E63"],
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 3,
      row: { colors: ["transparent", "transparent"], opacity: 0.5 },
      column: { colors: ["#f8f9fa", "transparent"], opacity: 1 }
    },
    tooltip: { shared: true, intersect: false, theme: "light" }
  };
  constructor(adminRHStatsService) {
    this.adminRHStatsService = adminRHStatsService;
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.isLoading = true;
    forkJoin({
      stats: this.adminRHStatsService.getAllStats(),
      formations: this.adminRHStatsService.getFormationsRecentes().pipe(catchError(() => of([]))),
      mensuel: this.adminRHStatsService.getFormationsParAnnee().pipe(catchError(() => of([])))
    }).subscribe({
      next: (data) => {
        this.processRealData(data);
        this.isLoading = false;
      },
      error: () => {
        this.setDefaultData();
        this.isLoading = false;
      }
    });
  }
  processRealData(data) {
    if (data.stats) {
      this.metrics.totalUtilisateurs = data.stats.totalUtilisateurs || 0;
      this.metrics.totalFormateurs = data.stats.totalFormateurs || 0;
      this.metrics.totalFormations = data.stats.totalFormations || 0;
      this.metrics.totalDemandesFormation = data.stats.totalDemandesFormation || 0;
      this.metrics.totalSessionsFormation = data.stats.totalSessionsFormation || 0;
    }
    this.updateStatisticsCards();
    this.metrics.formationsPubliees = Math.max(0, this.metrics.totalFormations);
    this.metrics.tauxCompletionGlobal = 75;
    this.metrics.sessionsMoisCourant = this.metrics.totalSessionsFormation;
    this.metrics.heuresConsommees = this.metrics.totalSessionsFormation * 2;
    this.metrics.scoreMoyenFormations = 4.2;
    this.metrics.tauxSatisfaction = 88;
    this.metrics.nombreCertifies = Math.floor(this.metrics.totalUtilisateurs * 0.35);
    this.metrics.nombreIncidents = 2;
    if (Array.isArray(data.formations) && data.formations.length > 0) {
      this.formationsRecentes = data.formations.slice(0, 5).map((f) => ({
        id: f.id,
        titre: f.titre || "Formation sans titre",
        image: f.image,
        inscrits: f.inscrits || 0,
        completes: Math.floor((f.inscrits || 0) * 0.6),
        progression: 60,
        statut: f.statut || "publie",
        dateCreation: new Date(f.dateCreation || Date.now())
      }));
    } else {
      this.formationsRecentes = [];
    }
    this.generateMonthlyStats(data.mensuel);
  }
  generateMonthlyStats(mensuelData) {
    const now = /* @__PURE__ */ new Date();
    const stats = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const label = date.toLocaleDateString("fr-FR", { month: "short" });
      stats.push({
        mois: label.charAt(0).toUpperCase() + label.slice(1),
        formations: Math.floor(Math.random() * 10) + 5,
        utilisateurs: Math.floor(Math.random() * 50) + 20,
        formateurs: Math.floor(Math.random() * 5) + 2,
        sessions: Math.floor(Math.random() * 8) + 3
      });
    }
    this.statistiquesMensuelles = stats;
    this.updateChart(stats);
  }
  updateChart(stats) {
    this.chartData = __spreadProps(__spreadValues({}, this.chartData), {
      series: [
        { name: "Formations", data: stats.map((s) => s.formations) },
        { name: "Utilisateurs", data: stats.map((s) => s.utilisateurs) },
        { name: "Formateurs", data: stats.map((s) => s.formateurs) },
        { name: "Sessions", data: stats.map((s) => s.sessions) }
      ],
      xaxis: __spreadProps(__spreadValues({}, this.chartData.xaxis), { categories: stats.map((s) => s.mois) })
    });
  }
  updateStatisticsCards() {
    this.statisticsCards[0].value = this.metrics.totalUtilisateurs;
    this.statisticsCards[1].value = this.metrics.totalFormateurs;
    this.statisticsCards[2].value = this.metrics.totalFormations;
    this.statisticsCards[3].value = this.metrics.totalDemandesFormation;
  }
  setDefaultData() {
    this.updateStatisticsCards();
    this.formationsRecentes = [];
    this.chartData = __spreadProps(__spreadValues({}, this.chartData), {
      series: [
        { name: "Formations", data: [] },
        { name: "Utilisateurs", data: [] },
        { name: "Formateurs", data: [] },
        { name: "Sessions", data: [] }
      ],
      xaxis: __spreadProps(__spreadValues({}, this.chartData.xaxis), { categories: [] })
    });
  }
  trackByFormationId(index, formation) {
    return formation.id;
  }
  getStatusLabel(status) {
    return {
      publie: "Publi\xE9",
      brouillon: "Brouillon",
      en_cours: "En cours",
      archive: "Archiv\xE9"
    }[status] || status;
  }
  getRelativeDate(date) {
    const diff = Math.ceil(Math.abs((/* @__PURE__ */ new Date()).getTime() - new Date(date).getTime()) / 864e5);
    if (diff === 0)
      return "Aujourd'hui";
    if (diff === 1)
      return "Hier";
    if (diff < 7)
      return `Il y a ${diff} jours`;
    if (diff < 30)
      return `Il y a ${Math.ceil(diff / 7)} semaines`;
    return `Il y a ${Math.ceil(diff / 30)} mois`;
  }
  getStatutLabel(statut) {
    const statutsMap = {
      "publie": "Publi\xE9",
      "brouillon": "Brouillon",
      "archive": "Archiv\xE9",
      "en_cours": "En cours"
    };
    return statutsMap[statut.toLowerCase()] || statut;
  }
  refreshDashboard() {
    this.loadDashboardData();
  }
  static \u0275fac = function AdminrhDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhDashboardComponent)(\u0275\u0275directiveInject(AdminRHStatsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhDashboardComponent, selectors: [["app-adminrh-dashboard"]], features: [\u0275\u0275ProvidersFeature([DecimalPipe])], decls: 50, vars: 11, consts: [["tableLoadingTpl", ""], ["chartLoadingTpl", ""], [1, "row", "g-3", "mb-4"], ["class", "col-md-6 col-xl-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "mb-3"], [1, "fw-bold", "mb-0", "text-dark"], [1, "isax", "isax-book", "me-2", "text-success"], [1, "isax", "isax-monitor", "me-2", "text-info"], [1, "card", "shadow-sm", "border-0", "mb-4"], [1, "card-header", "bg-white", "border-bottom", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold", "mb-1", "text-dark"], [1, "isax", "isax-book-1", "text-success", "me-2"], [1, "text-muted", "mb-0", "small"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "isax", "isax-eye", "me-1"], [1, "card-body", "p-0"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "card-header", "bg-white", "border-bottom"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3", "justify-content-between"], [1, "fas", "fa-chart-line", "text-primary", "me-2"], [1, "d-flex", "gap-2", "flex-wrap", "align-items-center"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "fas", "fa-sync-alt", "me-1"], [1, "chart-legend", "p-3", "border-bottom", "bg-light"], [1, "row", "text-center"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "chart-container", 2, "min-height", "350px"], ["class", "p-3", 4, "ngIf", "ngIfElse"], [1, "col-md-6", "col-xl-3"], [1, "card", "h-100", "shadow-sm", "border-0"], [1, "card-body", "p-3"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-3"], [1, "icon-box", 3, "ngClass"], ["src", "assets/img/icon/users.svg", "alt", "Utilisateurs", "class", "icon-img", 4, "ngIf"], ["src", "assets/img/icon/user-octagon.svg", "alt", "Formateurs", "class", "icon-img", 4, "ngIf"], ["src", "assets/img/icon/graduation.svg", "alt", "Formations", "class", "icon-img", 4, "ngIf"], ["src", "assets/img/icon/icon-23.svg", "alt", "Demandes", "class", "icon-img", 4, "ngIf"], [1, "flex-grow-1"], [1, "text-muted", "mb-1", "small", "fw-medium"], ["class", "skeleton-loader", 4, "ngIf"], ["class", "fs-24 mb-0 fw-bold text-dark", 4, "ngIf"], [1, "text-success", "d-flex", "align-items-center", "mt-1"], [1, "fas", "fa-arrow-up", "me-1"], [1, "card-footer", "bg-transparent", "border-0", "p-2"], [1, "progress", 2, "height", "4px"], ["role", "progressbar", 1, "progress-bar"], ["src", "assets/img/icon/users.svg", "alt", "Utilisateurs", 1, "icon-img"], ["src", "assets/img/icon/user-octagon.svg", "alt", "Formateurs", 1, "icon-img"], ["src", "assets/img/icon/graduation.svg", "alt", "Formations", 1, "icon-img"], ["src", "assets/img/icon/icon-23.svg", "alt", "Demandes", 1, "icon-img"], [1, "skeleton-loader"], [1, "skeleton", "skeleton-text"], [1, "fs-24", "mb-0", "fw-bold", "text-dark"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], ["class", "fw-bold mb-0", 4, "ngIf"], [1, "fw-bold", "mb-0"], [1, "fs-14", "text-muted", "ms-1"], [1, "table-responsive"], ["aria-label", "Formations actives", 1, "table", "table-hover", "mb-0"], [1, "table-light"], [1, "ps-3", "border-0"], [1, "isax", "isax-book-1", "me-1", "text-muted"], [1, "text-center", "border-0"], [1, "isax", "isax-people", "me-1", "text-muted"], [1, "isax", "isax-chart-2", "me-1", "text-muted"], [1, "isax", "isax-user-tick", "me-1", "text-muted"], [1, "isax", "isax-info-circle", "me-1", "text-muted"], [1, "isax", "isax-calendar", "me-1", "text-muted"], [1, "border-0"], ["class", "align-middle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "align-middle"], [1, "ps-3", "py-3"], ["loading", "lazy", 1, "rounded-3", "shadow-sm", "me-3", 2, "width", "44px", "height", "44px", "object-fit", "cover", 3, "src", "alt"], [1, "fw-semibold", "mb-1", "text-dark"], [1, "text-center"], [1, "fw-semibold"], [1, "progress", 2, "height", "6px", "width", "60px", "margin", "0 auto"], ["role", "progressbar", 1, "progress-bar", "bg-info"], [1, "badge", "bg-success-transparent", "text-success", "fw-semibold"], [1, "badge", "fw-medium", 3, "ngClass"], [1, "fas", "me-1", 3, "ngClass"], [1, "text-dark", "fw-medium", "small"], [1, "text-muted"], [1, "text-end", "pe-3"], ["title", "Voir les d\xE9tails", "type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"], [1, "isax", "isax-eye"], ["colspan", "7", 1, "text-center", "py-5"], [1, "isax", "isax-book-1", "display-4", "text-muted", "d-block", "mb-3"], [1, "text-muted", "mb-1"], [1, "text-muted", "small", "mb-0"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "p-5"], ["role", "status", 1, "spinner-border", "text-primary", "mb-3"], [1, "visually-hidden"], [1, "text-muted", "mb-0"], [1, "col-3"], [1, "legend-color", "d-inline-block", "rounded-circle", "me-2", 2, "width", "10px", "height", "10px"], [1, "p-3"], [3, "series", "chart", "xaxis", "yaxis", "stroke", "tooltip", "dataLabels", "fill", "grid", "colors"]], template: function AdminrhDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275template(1, AdminrhDashboardComponent_div_1_Template, 21, 15, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 4)(3, "h6", 5);
      \u0275\u0275element(4, "i", 6);
      \u0275\u0275text(5, "Formations & Sessions ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275template(7, AdminrhDashboardComponent_div_7_Template, 11, 6, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4)(9, "h6", 5);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275text(11, "Qualit\xE9 & Performance ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 2);
      \u0275\u0275template(13, AdminrhDashboardComponent_div_13_Template, 11, 6, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div")(17, "h5", 10);
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275text(19, "Formations actives ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 12);
      \u0275\u0275text(21, "Aper\xE7u des formations : inscrits & progression");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "button", 13);
      \u0275\u0275listener("click", function AdminrhDashboardComponent_Template_button_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refreshDashboard());
      });
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Voir toutes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 15);
      \u0275\u0275template(26, AdminrhDashboardComponent_div_26_Template, 26, 3, "div", 16)(27, AdminrhDashboardComponent_ng_template_27_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 8)(30, "div", 17)(31, "div", 18)(32, "div")(33, "h5", 10);
      \u0275\u0275element(34, "i", 19);
      \u0275\u0275text(35, "\xC9volution Mensuelle ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 12);
      \u0275\u0275text(37, "Suivi des formations sur 7 mois");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 20)(39, "button", 21);
      \u0275\u0275listener("click", function AdminrhDashboardComponent_Template_button_click_39_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refreshDashboard());
      });
      \u0275\u0275element(40, "i", 22);
      \u0275\u0275text(41, "Actualiser ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(42, "div", 15)(43, "div", 23)(44, "div", 24);
      \u0275\u0275template(45, AdminrhDashboardComponent_div_45_Template, 4, 3, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 26);
      \u0275\u0275template(47, AdminrhDashboardComponent_div_47_Template, 2, 10, "div", 27)(48, AdminrhDashboardComponent_ng_template_48_Template, 6, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const tableLoadingTpl_r8 = \u0275\u0275reference(28);
      const chartLoadingTpl_r9 = \u0275\u0275reference(49);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.statisticsCards);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.metricsCardsRow1);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.metricsCardsRow2);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", !ctx.isLoading)("ngIfElse", tableLoadingTpl_r8);
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275classProp("fa-spin", ctx.isLoading);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.chartLegend);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isLoading)("ngIfElse", chartLoadingTpl_r9);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgApexchartsModule, ChartComponent, RouterModule, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-dashboard", standalone: true, imports: [
      CommonModule,
      NgApexchartsModule,
      RouterModule
    ], providers: [DecimalPipe], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  BLOC 1 \u2014 Cartes principales (AdminRH)                    -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="row g-3 mb-4">\r
  <div class="col-md-6 col-xl-3" *ngFor="let stat of statisticsCards">\r
    <div class="card h-100 shadow-sm border-0" [class]="'stat-card-' + stat.type">\r
      <div class="card-body p-3">\r
        <div class="d-flex align-items-center">\r
          <div class="flex-shrink-0 me-3">\r
            <span class="icon-box" [ngClass]="'bg-' + stat.color + '-transparent'">\r
              <img *ngIf="stat.type === 'utilisateurs'"  src="assets/img/icon/users.svg"         alt="Utilisateurs"  class="icon-img">\r
              <img *ngIf="stat.type === 'formateurs'"    src="assets/img/icon/user-octagon.svg" alt="Formateurs"    class="icon-img">\r
              <img *ngIf="stat.type === 'formations'"    src="assets/img/icon/graduation.svg"   alt="Formations"    class="icon-img">\r
              <img *ngIf="stat.type === 'demandes'"      src="assets/img/icon/icon-23.svg"      alt="Demandes"      class="icon-img">\r
            </span>\r
          </div>\r
          <div class="flex-grow-1">\r
            <p class="text-muted mb-1 small fw-medium">{{ stat.label }}</p>\r
            <div *ngIf="isLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!isLoading" class="fs-24 mb-0 fw-bold text-dark">{{ stat.value | number }}</h4>\r
            <small class="text-success d-flex align-items-center mt-1">\r
              <i class="fas fa-arrow-up me-1"></i>+{{ stat.growth }}% ce mois\r
            </small>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="card-footer bg-transparent border-0 p-2">\r
        <div class="progress" style="height: 4px;">\r
          <div class="progress-bar" [class]="'bg-' + stat.color"\r
               [style.width.%]="stat.progress" role="progressbar"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  BLOC 2 \u2014 M\xE9triques Formation & Apprentissage             -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-center mb-3">\r
  <h6 class="fw-bold mb-0 text-dark">\r
    <i class="isax isax-book me-2 text-success"></i>Formations & Sessions\r
  </h6>\r
</div>\r
<div class="row g-3 mb-4">\r
  <div class="col-md-6 col-xl-3" *ngFor="let card of metricsCardsRow1">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">{{ card.label }}</p>\r
            <div *ngIf="isLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!isLoading" class="fw-bold mb-0">\r
              {{ card.value }}<span class="fs-14 text-muted ms-1">{{ card.suffix }}</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box" [ngClass]="'bg-' + card.color + '-transparent'">\r
            <i [class]="card.icon + ' fs-24 text-' + card.color"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  BLOC 3 \u2014 M\xE9triques Qualit\xE9 & Performance                 -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="d-flex align-items-center mb-3">\r
  <h6 class="fw-bold mb-0 text-dark">\r
    <i class="isax isax-monitor me-2 text-info"></i>Qualit\xE9 & Performance\r
  </h6>\r
</div>\r
<div class="row g-3 mb-4">\r
  <div class="col-md-6 col-xl-3" *ngFor="let card of metricsCardsRow2">\r
    <div class="card border-0 shadow-sm h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between">\r
          <div>\r
            <p class="text-muted mb-1 small fw-medium">{{ card.label }}</p>\r
            <div *ngIf="isLoading" class="skeleton-loader"><div class="skeleton skeleton-text"></div></div>\r
            <h4 *ngIf="!isLoading" class="fw-bold mb-0">\r
              {{ card.value }}<span class="fs-14 text-muted ms-1">{{ card.suffix }}</span>\r
            </h4>\r
          </div>\r
          <span class="icon-box" [ngClass]="'bg-' + card.color + '-transparent'">\r
            <i [class]="card.icon + ' fs-24 text-' + card.color"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  BLOC 4 \u2014 Tableau formations actives                      -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="card shadow-sm border-0 mb-4">\r
  <div class="card-header bg-white border-bottom d-flex align-items-center justify-content-between">\r
    <div>\r
      <h5 class="fw-bold mb-1 text-dark">\r
        <i class="isax isax-book-1 text-success me-2"></i>Formations actives\r
      </h5>\r
      <p class="text-muted mb-0 small">Aper\xE7u des formations : inscrits &amp; progression</p>\r
    </div>\r
    <button class="btn btn-sm btn-outline-primary" type="button"\r
            (click)="refreshDashboard()">\r
      <i class="isax isax-eye me-1"></i>Voir toutes\r
    </button>\r
  </div>\r
  <div class="card-body p-0">\r
    <div *ngIf="!isLoading; else tableLoadingTpl" class="table-responsive">\r
      <table class="table table-hover mb-0" aria-label="Formations actives">\r
        <thead class="table-light">\r
        <tr>\r
          <th class="ps-3 border-0">\r
            <i class="isax isax-book-1 me-1 text-muted"></i>Formation\r
          </th>\r
          <th class="text-center border-0">\r
            <i class="isax isax-people me-1 text-muted"></i>Inscrits\r
          </th>\r
          <th class="text-center border-0">\r
            <i class="isax isax-chart-2 me-1 text-muted"></i>Progression\r
          </th>\r
          <th class="text-center border-0">\r
            <i class="isax isax-user-tick me-1 text-muted"></i>Compl\xE9t\xE9s\r
          </th>\r
          <th class="text-center border-0">\r
            <i class="isax isax-info-circle me-1 text-muted"></i>Statut\r
          </th>\r
          <th class="text-center border-0">\r
            <i class="isax isax-calendar me-1 text-muted"></i>Depuis\r
          </th>\r
          <th class="border-0"></th>\r
        </tr>\r
        </thead>\r
        <tbody>\r
        <tr *ngFor="let formation of formationsRecentes; trackBy: trackByFormationId" class="align-middle">\r
          <td class="ps-3 py-3">\r
            <div class="d-flex align-items-center">\r
              <img [src]="formation.image || 'assets/img/default-course.svg'"\r
                   [alt]="formation.titre"\r
                   class="rounded-3 shadow-sm me-3"\r
                   style="width: 44px; height: 44px; object-fit: cover;"\r
                   loading="lazy">\r
              <div>\r
                <h6 class="fw-semibold mb-1 text-dark">{{ formation.titre }}</h6>\r
              </div>\r
            </div>\r
          </td>\r
          <td class="text-center">\r
            <span class="fw-semibold">{{ formation.inscrits }}</span>\r
          </td>\r
          <td class="text-center">\r
            <div class="progress" style="height: 6px; width: 60px; margin: 0 auto;">\r
              <div class="progress-bar bg-info" [style.width.%]="formation.progression" role="progressbar"></div>\r
            </div>\r
          </td>\r
          <td class="text-center">\r
            <span class="badge bg-success-transparent text-success fw-semibold">\r
              {{ formation.completes || 0 }}\r
            </span>\r
          </td>\r
          <td class="text-center">\r
            <span class="badge fw-medium"\r
                  [ngClass]="{\r
                    'bg-success text-white': formation.statut === 'publie',\r
                    'bg-warning text-dark':  formation.statut === 'brouillon',\r
                    'bg-info text-white':    formation.statut === 'en_cours',\r
                    'bg-secondary text-white': formation.statut === 'archive'\r
                  }">\r
              <i class="fas me-1"\r
                 [ngClass]="{\r
                   'fa-check-circle': formation.statut === 'publie',\r
                   'fa-edit':         formation.statut === 'brouillon',\r
                   'fa-play-circle':  formation.statut === 'en_cours',\r
                   'fa-archive':      formation.statut === 'archive'\r
                 }"></i>\r
              {{ getStatutLabel(formation.statut) }}\r
            </span>\r
          </td>\r
          <td class="text-center">\r
            <div class="text-dark fw-medium small">{{ formation.dateCreation | date:'dd/MM/yyyy' }}</div>\r
            <small class="text-muted">{{ getRelativeDate(formation.dateCreation) }}</small>\r
          </td>\r
          <td class="text-end pe-3">\r
            <button class="btn btn-sm btn-outline-secondary" title="Voir les d\xE9tails" type="button">\r
              <i class="isax isax-eye"></i>\r
            </button>\r
          </td>\r
        </tr>\r
        <tr *ngIf="formationsRecentes.length === 0">\r
          <td colspan="7" class="text-center py-5">\r
            <i class="isax isax-book-1 display-4 text-muted d-block mb-3"></i>\r
            <h6 class="text-muted mb-1">Aucune formation disponible</h6>\r
            <p class="text-muted small mb-0">Les formations appara\xEEtront ici d\xE8s leur cr\xE9ation.</p>\r
          </td>\r
        </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
    <ng-template #tableLoadingTpl>\r
      <div class="d-flex flex-column align-items-center justify-content-center p-5">\r
        <div class="spinner-border text-primary mb-3" role="status">\r
          <span class="visually-hidden">Chargement...</span>\r
        </div>\r
        <p class="text-muted mb-0">Chargement des formations...</p>\r
      </div>\r
    </ng-template>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  BLOC 5 \u2014 Graphique \xE9volution mensuelle                   -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="card shadow-sm border-0 mb-4">\r
  <div class="card-header bg-white border-bottom">\r
    <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between">\r
      <div>\r
        <h5 class="fw-bold mb-1 text-dark">\r
          <i class="fas fa-chart-line text-primary me-2"></i>\xC9volution Mensuelle\r
        </h5>\r
        <p class="text-muted mb-0 small">Suivi des formations sur 7 mois</p>\r
      </div>\r
      <div class="d-flex gap-2 flex-wrap align-items-center">\r
        <button class="btn btn-sm btn-outline-secondary"\r
                (click)="refreshDashboard()" [disabled]="isLoading" type="button">\r
          <i class="fas fa-sync-alt me-1" [class.fa-spin]="isLoading"></i>Actualiser\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="card-body p-0">\r
    <!-- L\xE9gende -->\r
    <div class="chart-legend p-3 border-bottom bg-light">\r
      <div class="row text-center">\r
        <div class="col-3" *ngFor="let serie of chartLegend">\r
          <span class="legend-color d-inline-block rounded-circle me-2"\r
                [style.background-color]="serie.color"\r
                style="width: 10px; height: 10px;"></span>\r
          <small class="text-muted">{{ serie.name }}</small>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- Graphique -->\r
    <div class="chart-container" style="min-height: 350px;">\r
      <div *ngIf="!isLoading; else chartLoadingTpl" class="p-3">\r
        <apx-chart\r
          [series]="chartData.series"\r
          [chart]="chartData.chart"\r
          [xaxis]="chartData.xaxis"\r
          [yaxis]="chartData.yaxis"\r
          [stroke]="chartData.stroke"\r
          [tooltip]="chartData.tooltip"\r
          [dataLabels]="chartData.dataLabels"\r
          [fill]="chartData.fill"\r
          [grid]="chartData.grid"\r
          [colors]="chartData.colors">\r
        </apx-chart>\r
      </div>\r
      <ng-template #chartLoadingTpl>\r
        <div class="d-flex flex-column align-items-center justify-content-center p-5">\r
          <div class="spinner-border text-primary mb-3" role="status">\r
            <span class="visually-hidden">Chargement...</span>\r
          </div>\r
          <p class="text-muted mb-0">Chargement des statistiques...</p>\r
        </div>\r
      </ng-template>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: AdminRHStatsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhDashboardComponent, { className: "AdminrhDashboardComponent", filePath: "src/app/features/adminrh/adminrh-dashboard/adminrh-dashboard.component.ts", lineNumber: 62 });
})();
export {
  AdminrhDashboardComponent
};
//# sourceMappingURL=chunk-AWQCDZSS.js.map
