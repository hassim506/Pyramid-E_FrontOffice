import {
  FormationService
} from "./chunk-MHGWTEI2.js";
import "./chunk-K7E3GT3E.js";
import {
  RouterModule
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTSSTHJF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/student/ecart-competences/ecart-competences.component.ts
function EcartCompetencesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Analyse de votre \xE9cart de comp\xE9tences...");
    \u0275\u0275elementEnd()();
  }
}
function EcartCompetencesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function EcartCompetencesComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275element(5, "i", 9);
    \u0275\u0275text(6, "R\xE9essayer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function EcartCompetencesComponent_ng_container_2_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.competencesFiltrees.length, " r\xE9sultat(s) pour \xAB ", ctx_r1.recherche, " \xBB ");
  }
}
function EcartCompetencesComponent_ng_container_2_div_49_div_14_div_1_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const formation_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(formation_r5.formation_titre);
  }
}
function EcartCompetencesComponent_ng_container_2_div_49_div_14_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275template(1, EcartCompetencesComponent_ng_container_2_div_49_div_14_div_1_div_8_div_1_Template, 4, 1, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const competence_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", competence_r6.formations)("ngForTrackBy", ctx_r1.trackByFormation);
  }
}
function EcartCompetencesComponent_ng_container_2_div_49_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62);
    \u0275\u0275element(3, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 65);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, EcartCompetencesComponent_ng_container_2_div_49_div_14_div_1_div_8_Template, 2, 2, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const competence_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(competence_r6.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", competence_r6.formations.length, " formation(s) ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", competence_r6.formations.length);
  }
}
function EcartCompetencesComponent_ng_container_2_div_49_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, EcartCompetencesComponent_ng_container_2_div_49_div_14_div_1_Template, 9, 3, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.competencesPage)("ngForTrackBy", ctx_r1.trackByCompetence);
  }
}
function EcartCompetencesComponent_ng_container_2_div_49_div_15_tr_13_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", formation_r7.formation_titre, " ");
  }
}
function EcartCompetencesComponent_ng_container_2_div_49_div_15_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 74)(3, "span", 75);
    \u0275\u0275element(4, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "div", 76);
    \u0275\u0275template(9, EcartCompetencesComponent_ng_container_2_div_49_div_15_tr_13_span_9_Template, 2, 1, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 77);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 78);
    \u0275\u0275element(15, "i", 30);
    \u0275\u0275text(16, " \xC0 acqu\xE9rir ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const competence_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(competence_r8.nom);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", competence_r8.formations)("ngForTrackBy", ctx_r1.trackByFormation);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(competence_r8.formations.length);
  }
}
function EcartCompetencesComponent_ng_container_2_div_49_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "table", 72)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Comp\xE9tence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Formations concern\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, EcartCompetencesComponent_ng_container_2_div_49_div_15_tr_13_Template, 17, 4, "tr", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.competencesPage)("ngForTrackBy", ctx_r1.trackByCompetence);
  }
}
function EcartCompetencesComponent_ng_container_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "h5", 42);
    \u0275\u0275text(3, "Liste des comp\xE9tences \xE0 acqu\xE9rir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "span", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 45)(8, "button", 46);
    \u0275\u0275listener("click", function EcartCompetencesComponent_ng_container_2_div_49_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setViewMode("grid"));
    });
    \u0275\u0275element(9, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 46);
    \u0275\u0275listener("click", function EcartCompetencesComponent_ng_container_2_div_49_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setViewMode("list"));
    });
    \u0275\u0275element(11, "i", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 49);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, EcartCompetencesComponent_ng_container_2_div_49_div_14_Template, 2, 2, "div", 50)(15, EcartCompetencesComponent_ng_container_2_div_49_div_15_Template, 14, 2, "div", 51);
    \u0275\u0275elementStart(16, "div", 52)(17, "div", 53);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 54)(20, "button", 55);
    \u0275\u0275listener("click", function EcartCompetencesComponent_ng_container_2_div_49_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275element(21, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 55);
    \u0275\u0275listener("click", function EcartCompetencesComponent_ng_container_2_div_49_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275element(23, "i", 57);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.displayedCount, " affich\xE9e(s)");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("cp-view-toggle__btn--active", ctx_r1.viewMode === "grid");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("cp-view-toggle__btn--active", ctx_r1.viewMode === "list");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.pageSize, " par page");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "grid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "list");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Page ", ctx_r1.currentPage, " sur ", ctx_r1.totalPages, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function EcartCompetencesComponent_ng_container_2_ng_template_50_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Aucun r\xE9sultat pour \xAB ", ctx_r1.recherche, " \xBB");
  }
}
function EcartCompetencesComponent_ng_container_2_ng_template_50_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Vous avez acquis toutes les comp\xE9tences vis\xE9es dans vos formations assign\xE9es. ");
    \u0275\u0275elementEnd();
  }
}
function EcartCompetencesComponent_ng_container_2_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementStart(2, "h6");
    \u0275\u0275text(3, "Aucun \xE9cart de comp\xE9tences !");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, EcartCompetencesComponent_ng_container_2_ng_template_50_p_4_Template, 2, 1, "p", 3)(5, EcartCompetencesComponent_ng_container_2_ng_template_50_p_5_Template, 2, 0, "p", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.recherche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.recherche);
  }
}
function EcartCompetencesComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "h3", 11);
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275text(4, " \xC9cart de comp\xE9tences ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6, " Comp\xE9tences vis\xE9es dans vos formations assign\xE9es / demand\xE9es, que vous n\u2019avez pas encore acquises. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15)(9, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 17);
    \u0275\u0275element(11, "circle", 18)(12, "circle", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 21)(16, "div", 22);
    \u0275\u0275text(17, "Taux de compl\xE9tion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 23);
    \u0275\u0275text(19);
    \u0275\u0275element(20, "br");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 24)(23, "div", 25);
    \u0275\u0275element(24, "i", 26);
    \u0275\u0275elementStart(25, "div")(26, "div", 27);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 28);
    \u0275\u0275text(29, "Acquises");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 29);
    \u0275\u0275element(31, "i", 30);
    \u0275\u0275elementStart(32, "div")(33, "div", 27);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 28);
    \u0275\u0275text(36, "\xC0 acqu\xE9rir");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 31);
    \u0275\u0275element(38, "i", 32);
    \u0275\u0275elementStart(39, "div")(40, "div", 27);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 28);
    \u0275\u0275text(43, "Comp\xE9tences");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "div", 33)(45, "div", 34);
    \u0275\u0275element(46, "i", 35);
    \u0275\u0275elementStart(47, "input", 36);
    \u0275\u0275listener("input", function EcartCompetencesComponent_ng_container_2_Template_input_input_47_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRecherche($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, EcartCompetencesComponent_ng_container_2_div_48_Template, 2, 2, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, EcartCompetencesComponent_ng_container_2_div_49_Template, 24, 12, "div", 38)(50, EcartCompetencesComponent_ng_container_2_ng_template_50_Template, 6, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const emptyState_r9 = \u0275\u0275reference(51);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275attribute("stroke-dashoffset", 263.9 * (1 - ctx_r1.tauxProgression / 100));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.tauxProgression, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.total_acquises, " comp\xE9tence(s) acquise(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" sur ", ctx_r1.data.total_acquises + ctx_r1.data.total_ecart, " vis\xE9e(s) au total ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.data.total_acquises);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.data.total_ecart);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.competencesEcart.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.recherche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.recherche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasCompetences)("ngIfElse", emptyState_r9);
  }
}
var EcartCompetencesComponent = class _EcartCompetencesComponent {
  formationsService;
  loading = true;
  error = "";
  data = null;
  recherche = "";
  viewMode = "grid";
  currentPage = 1;
  pageSize = 4;
  gridPageSize = 4;
  listPageSize = 5;
  constructor(formationsService) {
    this.formationsService = formationsService;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.error = "";
    this.formationsService.getEcartCompetences().subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
        this.currentPage = 1;
      },
      error: () => {
        this.error = "Impossible de charger l\u2019\xE9cart de comp\xE9tences.";
        this.loading = false;
      }
    });
  }
  get tauxProgression() {
    if (!this.data)
      return 0;
    const total = this.data.total_acquises + this.data.total_ecart;
    if (total === 0)
      return 100;
    return Math.round(this.data.total_acquises / total * 100);
  }
  get competencesEcart() {
    const groupes = this.data?.par_domaine ?? [];
    const map = /* @__PURE__ */ new Map();
    groupes.forEach((groupe) => {
      groupe.competences.forEach((competence) => {
        if (!map.has(competence)) {
          map.set(competence, /* @__PURE__ */ new Map());
        }
        const formationsMap = map.get(competence);
        groupe.formations.filter((formation) => formation.competences.includes(competence)).forEach((formation) => {
          formationsMap.set(formation.formation_id, __spreadProps(__spreadValues({}, formation), {
            competences: [competence]
          }));
        });
      });
    });
    return Array.from(map.entries()).map(([nom, formations]) => ({
      nom,
      formations: Array.from(formations.values())
    })).sort((a, b) => a.nom.localeCompare(b.nom));
  }
  get competencesFiltrees() {
    const q = this.recherche.trim().toLowerCase();
    if (!q)
      return this.competencesEcart;
    return this.competencesEcart.filter((competence) => competence.nom.toLowerCase().includes(q) || competence.formations.some((formation) => formation.formation_titre.toLowerCase().includes(q)));
  }
  get hasCompetences() {
    return this.competencesFiltrees.length > 0;
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.competencesFiltrees.length / this.pageSize));
  }
  get competencesPage() {
    const safePage = Math.min(this.currentPage, this.totalPages);
    const start = (safePage - 1) * this.pageSize;
    return this.competencesFiltrees.slice(start, start + this.pageSize);
  }
  get displayedCount() {
    return this.competencesPage.length;
  }
  setViewMode(mode) {
    this.viewMode = mode;
    this.pageSize = mode === "grid" ? this.gridPageSize : this.listPageSize;
    this.currentPage = 1;
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  onRecherche(event) {
    this.recherche = event.target.value;
    this.currentPage = 1;
  }
  trackByCompetence(_, item) {
    return item.nom;
  }
  trackByFormation(_, item) {
    return item.formation_id;
  }
  static \u0275fac = function EcartCompetencesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EcartCompetencesComponent)(\u0275\u0275directiveInject(FormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EcartCompetencesComponent, selectors: [["app-ecart-competences"]], decls: 3, vars: 3, consts: [["emptyState", ""], ["class", "qq-loading", 4, "ngIf"], ["class", "cp-error", 4, "ngIf"], [4, "ngIf"], [1, "qq-loading"], [1, "qq-loading__ring"], [1, "cp-error"], [1, "isax", "isax-warning-2"], [1, "cp-btn", "cp-btn--primary", 3, "click"], [1, "isax", "isax-refresh", "me-2"], [1, "cp-header", "mb-4"], [1, "cp-header__title"], [1, "isax", "isax-chart-2", "me-2", 2, "color", "#ea580c"], [1, "cp-header__sub"], [1, "cp-stats", "mb-4"], [1, "cp-stat-main"], [1, "cp-stat-main__circle"], ["viewBox", "0 0 100 100", 1, "cp-circle-svg"], ["cx", "50", "cy", "50", "r", "42", "stroke-width", "8", 1, "cp-circle-track"], ["cx", "50", "cy", "50", "r", "42", "stroke-width", "8", "stroke-dasharray", "263.9", 1, "cp-circle-fill", "cp-circle-fill--orange"], [1, "cp-stat-main__value"], [1, "cp-stat-main__info"], [1, "cp-stat-main__label"], [1, "cp-stat-main__sub"], [1, "cp-stat-cards"], [1, "cp-stat-card", "cp-stat-card--green"], [1, "isax", "isax-tick-circle"], [1, "cp-stat-card__value"], [1, "cp-stat-card__label"], [1, "cp-stat-card", "cp-stat-card--orange"], [1, "isax", "isax-danger"], [1, "cp-stat-card", "cp-stat-card--indigo"], [1, "isax", "isax-teacher"], [1, "cp-toolbar", "mb-4"], [1, "cp-search"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Rechercher une comp\xE9tence ou une formation...", 1, "cp-search__input", 3, "input", "value"], ["class", "cp-search-hint", 4, "ngIf"], ["class", "cp-results-card", 4, "ngIf", "ngIfElse"], [1, "cp-search-hint"], [1, "cp-results-card"], [1, "cp-results-card__top"], [1, "cp-results-card__title"], [1, "cp-results-actions"], [1, "cp-results-count"], [1, "cp-view-toggle"], ["type", "button", 1, "cp-view-toggle__btn", 3, "click"], [1, "isax", "isax-grid-2"], [1, "isax", "isax-row-vertical"], [1, "cp-page-size"], ["class", "cp-competence-list", 4, "ngIf"], ["class", "cp-table-wrap", 4, "ngIf"], [1, "cp-pagination"], [1, "cp-pagination__label"], [1, "cp-pagination__actions"], ["type", "button", 1, "cp-pagination__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], [1, "isax", "isax-arrow-right-3"], [1, "cp-competence-list"], ["class", "cp-competence-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cp-competence-card"], [1, "cp-competence-card__header"], [1, "cp-competence-card__icon"], [1, "isax", "isax-clock"], [1, "cp-competence-card__title"], [1, "cp-competence-card__count"], ["class", "cp-formation-list", 4, "ngIf"], [1, "cp-formation-list"], ["class", "cp-formation-chip", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cp-formation-chip"], [1, "isax", "isax-book-1"], [1, "cp-table-wrap"], [1, "cp-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cp-table-skill"], [1, "cp-table-skill__icon"], [1, "cp-table-formations"], [1, "cp-pill"], [1, "cp-status"], [1, "cp-empty"], [1, "isax", "isax-tick-circle", "cp-empty__icon", 2, "color", "#16a34a"]], template: function EcartCompetencesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EcartCompetencesComponent_div_0_Template, 8, 0, "div", 1)(1, EcartCompetencesComponent_div_1_Template, 7, 1, "div", 2)(2, EcartCompetencesComponent_ng_container_2_Template, 52, 11, "ng-container", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n.qq-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes _ngcontent-%COMP%_qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cp-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  gap: 12px;\n  color: #ef4444;\n  text-align: center;\n}\n.cp-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.cp-header__title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cp-header__sub[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.cp-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cp-stat-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px 24px;\n  flex: 1;\n  min-width: 260px;\n}\n.cp-stat-main__circle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cp-stat-main__value[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #ea580c;\n}\n.cp-stat-main__label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.cp-stat-main__sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.cp-circle-svg[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  transform: rotate(-90deg);\n}\n.cp-circle-track[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #f1f5f9;\n}\n.cp-circle-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.6s ease;\n}\n.cp-circle-fill--orange[_ngcontent-%COMP%] {\n  stroke: #ea580c;\n}\n.cp-stat-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cp-stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  min-width: 130px;\n}\n.cp-stat-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.cp-stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.cp-stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.cp-stat-card--green[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.cp-stat-card--green[_ngcontent-%COMP%]   .cp-stat-card__value[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.cp-stat-card--indigo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.cp-stat-card--indigo[_ngcontent-%COMP%]   .cp-stat-card__value[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.cp-stat-card--orange[_ngcontent-%COMP%] {\n  background: rgba(234, 88, 12, 0.08);\n  border-color: rgba(234, 88, 12, 0.2);\n}\n.cp-stat-card--orange[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.cp-stat-card--orange[_ngcontent-%COMP%]   .cp-stat-card__value[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.cp-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cp-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  flex: 1;\n  min-width: 220px;\n}\n.cp-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.cp-search__input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.875rem;\n  width: 100%;\n  color: #0f172a;\n}\n.cp-search__input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.cp-search-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  font-style: italic;\n}\n.cp-results-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 1px 6px rgba(15, 23, 42, 0.05);\n}\n.cp-results-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 22px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cp-results-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.cp-results-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.cp-results-count[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #334155;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.cp-page-size[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  height: 36px;\n  padding: 0 14px;\n  border: 1px solid rgba(234, 88, 12, 0.2);\n  border-radius: 999px;\n  background: #fff;\n  color: #ea580c;\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n.cp-view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px;\n  border: 1px solid #e2e8f0;\n  border-radius: 999px;\n  background: #f8fafc;\n}\n.cp-view-toggle__btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 30px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: #64748b;\n  cursor: pointer;\n}\n.cp-view-toggle__btn--active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #ea580c;\n  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08);\n}\n.cp-competence-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n  padding: 18px;\n}\n.cp-competence-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-left: 4px solid #ea580c;\n  border-radius: 14px;\n  padding: 18px;\n  transition: all 0.2s ease;\n}\n.cp-competence-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.cp-competence-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.cp-competence-card__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 8px;\n  background: rgba(234, 88, 12, 0.08);\n  color: #ea580c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-competence-card__title[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n.cp-competence-card__count[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: rgba(234, 88, 12, 0.08);\n  color: #ea580c;\n  border: 1px solid rgba(234, 88, 12, 0.2);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.cp-formation-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px solid #f1f5f9;\n}\n.cp-formation-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  font-size: 0.8rem;\n  color: #334155;\n  transition: all 0.2s ease;\n}\n.cp-formation-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.cp-formation-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n.cp-formation-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(234, 88, 12, 0.08);\n  border-color: rgba(234, 88, 12, 0.2);\n}\n.cp-table-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.cp-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 760px;\n  border-collapse: collapse;\n}\n.cp-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  background: #f8fafc;\n  color: #526887;\n  font-size: 0.78rem;\n  font-weight: 800;\n  text-align: left;\n  text-transform: uppercase;\n}\n.cp-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top: 1px solid #f1f5f9;\n  color: #0f172a;\n  vertical-align: top;\n}\n.cp-table-skill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cp-table-skill__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: rgba(234, 88, 12, 0.08);\n  color: #ea580c;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-table-skill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n.cp-table-formations[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  color: #475569;\n  font-size: 0.86rem;\n}\n.cp-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 28px;\n  justify-content: center;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #334155;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n.cp-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: rgba(234, 88, 12, 0.08);\n  color: #ea580c;\n  border: 1px solid rgba(234, 88, 12, 0.2);\n  font-size: 0.8rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.cp-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 22px;\n  border-top: 1px solid #f1f5f9;\n}\n.cp-pagination__label[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.9rem;\n}\n.cp-pagination__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.cp-pagination__btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border: 0;\n  border-radius: 50%;\n  background: #f8fafc;\n  color: #334155;\n  cursor: pointer;\n}\n.cp-pagination__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(234, 88, 12, 0.08);\n  color: #ea580c;\n}\n.cp-pagination__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.cp-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n}\n.cp-empty__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 12px;\n  display: block;\n}\n.cp-empty[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.cp-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.cp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.cp-btn--primary[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n}\n.cp-btn--primary[_ngcontent-%COMP%]:hover {\n  background: #047a6f;\n}\n@media (max-width: 768px) {\n  .cp-stats[_ngcontent-%COMP%], \n   .cp-toolbar[_ngcontent-%COMP%], \n   .cp-results-card__top[_ngcontent-%COMP%], \n   .cp-pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .cp-stat-main[_ngcontent-%COMP%], \n   .cp-search[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n  .cp-stat-card[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 120px;\n  }\n  .cp-competence-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cp-results-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .cp-stat-main[_ngcontent-%COMP%], \n   .cp-competence-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .cp-stat-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cp-competence-card__header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .cp-competence-card__icon[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .cp-competence-card__count[_ngcontent-%COMP%] {\n    margin-top: 4px;\n  }\n}\n/*# sourceMappingURL=ecart-competences.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EcartCompetencesComponent, [{
    type: Component,
    args: [{ selector: "app-ecart-competences", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="qq-loading" *ngIf="loading">\r
  <div class="qq-loading__ring">\r
    <div></div><div></div><div></div><div></div>\r
  </div>\r
  <p>Analyse de votre \xE9cart de comp\xE9tences...</p>\r
</div>\r
\r
<div class="cp-error" *ngIf="error && !loading">\r
  <i class="isax isax-warning-2"></i>\r
  <p>{{ error }}</p>\r
  <button class="cp-btn cp-btn--primary" (click)="load()">\r
    <i class="isax isax-refresh me-2"></i>R\xE9essayer\r
  </button>\r
</div>\r
\r
<ng-container *ngIf="!loading && !error && data">\r
  <div class="cp-header mb-4">\r
    <h3 class="cp-header__title">\r
      <i class="isax isax-chart-2 me-2" style="color:#ea580c"></i>\r
      \xC9cart de comp\xE9tences\r
    </h3>\r
    <p class="cp-header__sub">\r
      Comp\xE9tences vis\xE9es dans vos formations assign\xE9es / demand\xE9es,\r
      que vous n\u2019avez pas encore acquises.\r
    </p>\r
  </div>\r
\r
  <div class="cp-stats mb-4">\r
    <div class="cp-stat-main">\r
      <div class="cp-stat-main__circle">\r
        <svg viewBox="0 0 100 100" class="cp-circle-svg">\r
          <circle class="cp-circle-track" cx="50" cy="50" r="42" stroke-width="8"></circle>\r
          <circle class="cp-circle-fill cp-circle-fill--orange"\r
                  cx="50" cy="50" r="42" stroke-width="8"\r
                  stroke-dasharray="263.9"\r
                  [attr.stroke-dashoffset]="263.9 * (1 - tauxProgression / 100)">\r
          </circle>\r
        </svg>\r
        <div class="cp-stat-main__value">{{ tauxProgression }}%</div>\r
      </div>\r
\r
      <div class="cp-stat-main__info">\r
        <div class="cp-stat-main__label">Taux de compl\xE9tion</div>\r
        <div class="cp-stat-main__sub">\r
          {{ data.total_acquises }} comp\xE9tence(s) acquise(s)<br>\r
          sur {{ data.total_acquises + data.total_ecart }} vis\xE9e(s) au total\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="cp-stat-cards">\r
      <div class="cp-stat-card cp-stat-card--green">\r
        <i class="isax isax-tick-circle"></i>\r
        <div>\r
          <div class="cp-stat-card__value">{{ data.total_acquises }}</div>\r
          <div class="cp-stat-card__label">Acquises</div>\r
        </div>\r
      </div>\r
\r
      <div class="cp-stat-card cp-stat-card--orange">\r
        <i class="isax isax-danger"></i>\r
        <div>\r
          <div class="cp-stat-card__value">{{ data.total_ecart }}</div>\r
          <div class="cp-stat-card__label">\xC0 acqu\xE9rir</div>\r
        </div>\r
      </div>\r
\r
      <div class="cp-stat-card cp-stat-card--indigo">\r
        <i class="isax isax-teacher"></i>\r
        <div>\r
          <div class="cp-stat-card__value">{{ competencesEcart.length }}</div>\r
          <div class="cp-stat-card__label">Comp\xE9tences</div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="cp-toolbar mb-4">\r
    <div class="cp-search">\r
      <i class="isax isax-search-normal-1"></i>\r
      <input type="text"\r
             placeholder="Rechercher une comp\xE9tence ou une formation..."\r
             [value]="recherche"\r
             (input)="onRecherche($event)"\r
             class="cp-search__input">\r
    </div>\r
\r
    <div class="cp-search-hint" *ngIf="recherche">\r
      {{ competencesFiltrees.length }} r\xE9sultat(s) pour \xAB {{ recherche }} \xBB\r
    </div>\r
  </div>\r
\r
  <div class="cp-results-card" *ngIf="hasCompetences; else emptyState">\r
    <div class="cp-results-card__top">\r
      <h5 class="cp-results-card__title">Liste des comp\xE9tences \xE0 acqu\xE9rir</h5>\r
\r
      <div class="cp-results-actions">\r
        <span class="cp-results-count">{{ displayedCount }} affich\xE9e(s)</span>\r
\r
        <div class="cp-view-toggle">\r
          <button type="button"\r
                  class="cp-view-toggle__btn"\r
                  [class.cp-view-toggle__btn--active]="viewMode === 'grid'"\r
                  (click)="setViewMode('grid')">\r
            <i class="isax isax-grid-2"></i>\r
          </button>\r
\r
          <button type="button"\r
                  class="cp-view-toggle__btn"\r
                  [class.cp-view-toggle__btn--active]="viewMode === 'list'"\r
                  (click)="setViewMode('list')">\r
            <i class="isax isax-row-vertical"></i>\r
          </button>\r
        </div>\r
\r
        <span class="cp-page-size">{{ pageSize }} par page</span>\r
      </div>\r
    </div>\r
\r
    <div class="cp-competence-list" *ngIf="viewMode === 'grid'">\r
      <div class="cp-competence-card"\r
           *ngFor="let competence of competencesPage; trackBy: trackByCompetence">\r
        <div class="cp-competence-card__header">\r
          <div class="cp-competence-card__icon">\r
            <i class="isax isax-clock"></i>\r
          </div>\r
\r
          <div class="cp-competence-card__title">{{ competence.nom }}</div>\r
\r
          <span class="cp-competence-card__count">\r
            {{ competence.formations.length }} formation(s)\r
          </span>\r
        </div>\r
\r
        <div class="cp-formation-list" *ngIf="competence.formations.length">\r
          <div class="cp-formation-chip"\r
               *ngFor="let formation of competence.formations; trackBy: trackByFormation">\r
            <i class="isax isax-book-1"></i>\r
            <span>{{ formation.formation_titre }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="cp-table-wrap" *ngIf="viewMode === 'list'">\r
      <table class="cp-table">\r
        <thead>\r
          <tr>\r
            <th>Comp\xE9tence</th>\r
            <th>Formations concern\xE9es</th>\r
            <th>Nombre</th>\r
            <th>Statut</th>\r
          </tr>\r
        </thead>\r
\r
        <tbody>\r
          <tr *ngFor="let competence of competencesPage; trackBy: trackByCompetence">\r
            <td>\r
              <div class="cp-table-skill">\r
                <span class="cp-table-skill__icon">\r
                  <i class="isax isax-clock"></i>\r
                </span>\r
                <strong>{{ competence.nom }}</strong>\r
              </div>\r
            </td>\r
\r
            <td>\r
              <div class="cp-table-formations">\r
                <span *ngFor="let formation of competence.formations; trackBy: trackByFormation">\r
                  {{ formation.formation_titre }}\r
                </span>\r
              </div>\r
            </td>\r
\r
            <td>\r
              <span class="cp-pill">{{ competence.formations.length }}</span>\r
            </td>\r
\r
            <td>\r
              <span class="cp-status">\r
                <i class="isax isax-danger"></i>\r
                \xC0 acqu\xE9rir\r
              </span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="cp-pagination">\r
      <div class="cp-pagination__label">\r
        Page {{ currentPage }} sur {{ totalPages }}\r
      </div>\r
\r
      <div class="cp-pagination__actions">\r
        <button type="button"\r
                class="cp-pagination__btn"\r
                [disabled]="currentPage === 1"\r
                (click)="prevPage()">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
\r
        <button type="button"\r
                class="cp-pagination__btn"\r
                [disabled]="currentPage === totalPages"\r
                (click)="nextPage()">\r
          <i class="isax isax-arrow-right-3"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <ng-template #emptyState>\r
    <div class="cp-empty">\r
      <i class="isax isax-tick-circle cp-empty__icon" style="color:#16a34a"></i>\r
      <h6>Aucun \xE9cart de comp\xE9tences !</h6>\r
      <p *ngIf="recherche">Aucun r\xE9sultat pour \xAB {{ recherche }} \xBB</p>\r
      <p *ngIf="!recherche">\r
        Vous avez acquis toutes les comp\xE9tences vis\xE9es dans vos formations assign\xE9es.\r
      </p>\r
    </div>\r
  </ng-template>\r
</ng-container>`, styles: ["/* src/app/features/student/ecart-competences/ecart-competences.component.scss */\n.qq-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring div:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring div:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring div:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cp-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  gap: 12px;\n  color: #ef4444;\n  text-align: center;\n}\n.cp-error i {\n  font-size: 2rem;\n}\n.cp-header__title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cp-header__sub {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.cp-stats {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cp-stat-main {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px 24px;\n  flex: 1;\n  min-width: 260px;\n}\n.cp-stat-main__circle {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cp-stat-main__value {\n  position: absolute;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #ea580c;\n}\n.cp-stat-main__label {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.cp-stat-main__sub {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.cp-circle-svg {\n  width: 72px;\n  height: 72px;\n  transform: rotate(-90deg);\n}\n.cp-circle-track {\n  fill: none;\n  stroke: #f1f5f9;\n}\n.cp-circle-fill {\n  fill: none;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.6s ease;\n}\n.cp-circle-fill--orange {\n  stroke: #ea580c;\n}\n.cp-stat-cards {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cp-stat-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  min-width: 130px;\n}\n.cp-stat-card i {\n  font-size: 1.4rem;\n}\n.cp-stat-card__value {\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.cp-stat-card__label {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.cp-stat-card--green i,\n.cp-stat-card--green .cp-stat-card__value {\n  color: #10b981;\n}\n.cp-stat-card--indigo i,\n.cp-stat-card--indigo .cp-stat-card__value {\n  color: #4f46e5;\n}\n.cp-stat-card--orange {\n  background: rgba(234, 88, 12, 0.08);\n  border-color: rgba(234, 88, 12, 0.2);\n}\n.cp-stat-card--orange i,\n.cp-stat-card--orange .cp-stat-card__value {\n  color: #ea580c;\n}\n.cp-toolbar {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cp-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  flex: 1;\n  min-width: 220px;\n}\n.cp-search i {\n  color: #94a3b8;\n}\n.cp-search__input {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.875rem;\n  width: 100%;\n  color: #0f172a;\n}\n.cp-search__input::placeholder {\n  color: #94a3b8;\n}\n.cp-search-hint {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  font-style: italic;\n}\n.cp-results-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 1px 6px rgba(15, 23, 42, 0.05);\n}\n.cp-results-card__top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 22px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cp-results-card__title {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.cp-results-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.cp-results-count {\n  padding: 5px 12px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #334155;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.cp-page-size {\n  display: inline-flex;\n  align-items: center;\n  height: 36px;\n  padding: 0 14px;\n  border: 1px solid rgba(234, 88, 12, 0.2);\n  border-radius: 999px;\n  background: #fff;\n  color: #ea580c;\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n.cp-view-toggle {\n  display: inline-flex;\n  padding: 3px;\n  border: 1px solid #e2e8f0;\n  border-radius: 999px;\n  background: #f8fafc;\n}\n.cp-view-toggle__btn {\n  width: 34px;\n  height: 30px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: #64748b;\n  cursor: pointer;\n}\n.cp-view-toggle__btn--active {\n  background: #fff;\n  color: #ea580c;\n  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08);\n}\n.cp-competence-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n  padding: 18px;\n}\n.cp-competence-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-left: 4px solid #ea580c;\n  border-radius: 14px;\n  padding: 18px;\n  transition: all 0.2s ease;\n}\n.cp-competence-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.cp-competence-card__header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.cp-competence-card__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 8px;\n  background: rgba(234, 88, 12, 0.08);\n  color: #ea580c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-competence-card__title {\n  flex: 1;\n  min-width: 0;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n.cp-competence-card__count {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: rgba(234, 88, 12, 0.08);\n  color: #ea580c;\n  border: 1px solid rgba(234, 88, 12, 0.2);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.cp-formation-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px solid #f1f5f9;\n}\n.cp-formation-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  font-size: 0.8rem;\n  color: #334155;\n  transition: all 0.2s ease;\n}\n.cp-formation-chip i {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.cp-formation-chip span {\n  flex: 1;\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n.cp-formation-chip:hover {\n  background: rgba(234, 88, 12, 0.08);\n  border-color: rgba(234, 88, 12, 0.2);\n}\n.cp-table-wrap {\n  width: 100%;\n  overflow-x: auto;\n}\n.cp-table {\n  width: 100%;\n  min-width: 760px;\n  border-collapse: collapse;\n}\n.cp-table th {\n  padding: 14px 16px;\n  background: #f8fafc;\n  color: #526887;\n  font-size: 0.78rem;\n  font-weight: 800;\n  text-align: left;\n  text-transform: uppercase;\n}\n.cp-table td {\n  padding: 16px;\n  border-top: 1px solid #f1f5f9;\n  color: #0f172a;\n  vertical-align: top;\n}\n.cp-table-skill {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cp-table-skill__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: rgba(234, 88, 12, 0.08);\n  color: #ea580c;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-table-skill strong {\n  overflow-wrap: anywhere;\n}\n.cp-table-formations {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  color: #475569;\n  font-size: 0.86rem;\n}\n.cp-pill {\n  display: inline-flex;\n  min-width: 28px;\n  justify-content: center;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #334155;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n.cp-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: rgba(234, 88, 12, 0.08);\n  color: #ea580c;\n  border: 1px solid rgba(234, 88, 12, 0.2);\n  font-size: 0.8rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.cp-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 22px;\n  border-top: 1px solid #f1f5f9;\n}\n.cp-pagination__label {\n  color: #475569;\n  font-size: 0.9rem;\n}\n.cp-pagination__actions {\n  display: flex;\n  gap: 10px;\n}\n.cp-pagination__btn {\n  width: 38px;\n  height: 38px;\n  border: 0;\n  border-radius: 50%;\n  background: #f8fafc;\n  color: #334155;\n  cursor: pointer;\n}\n.cp-pagination__btn:hover:not(:disabled) {\n  background: rgba(234, 88, 12, 0.08);\n  color: #ea580c;\n}\n.cp-pagination__btn:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.cp-empty {\n  text-align: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n}\n.cp-empty__icon {\n  font-size: 3rem;\n  margin-bottom: 12px;\n  display: block;\n}\n.cp-empty h6 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.cp-empty p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.cp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.cp-btn--primary {\n  background: #069b8f;\n  color: #fff;\n}\n.cp-btn--primary:hover {\n  background: #047a6f;\n}\n@media (max-width: 768px) {\n  .cp-stats,\n  .cp-toolbar,\n  .cp-results-card__top,\n  .cp-pagination {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .cp-stat-main,\n  .cp-search {\n    width: 100%;\n    min-width: 0;\n  }\n  .cp-stat-card {\n    flex: 1;\n    min-width: 120px;\n  }\n  .cp-competence-list {\n    grid-template-columns: 1fr;\n  }\n  .cp-results-actions {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .cp-stat-main,\n  .cp-competence-card {\n    padding: 16px;\n  }\n  .cp-stat-card {\n    width: 100%;\n  }\n  .cp-competence-card__header {\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .cp-competence-card__icon {\n    width: 38px;\n    height: 38px;\n  }\n  .cp-competence-card__count {\n    margin-top: 4px;\n  }\n}\n/*# sourceMappingURL=ecart-competences.component.css.map */\n"] }]
  }], () => [{ type: FormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EcartCompetencesComponent, { className: "EcartCompetencesComponent", filePath: "app/features/student/ecart-competences/ecart-competences.component.ts", lineNumber: 49 });
})();
export {
  EcartCompetencesComponent
};
//# sourceMappingURL=chunk-4GQCZAC3.js.map
