import {
  FormationsService
} from "./chunk-MDRJR4EN.js";
import "./chunk-FKX6UC3I.js";
import {
  Router,
  RouterModule
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-MNWNTO2T.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/mes-competences/mes-competences.component.ts
function MesCompetencesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de vos comp\xE9tences...");
    \u0275\u0275elementEnd()();
  }
}
function MesCompetencesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function MesCompetencesComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCompetences());
    });
    \u0275\u0275element(5, "i", 8);
    \u0275\u0275text(6, "R\xE9essayer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function MesCompetencesComponent_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 25);
    \u0275\u0275element(4, "circle", 26)(5, "circle", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "div", 30);
    \u0275\u0275text(10, "Taux de ma\xEEtrise global");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 32)(14, "div", 33);
    \u0275\u0275element(15, "i", 34);
    \u0275\u0275elementStart(16, "div")(17, "div", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 36);
    \u0275\u0275text(20, "Acquises");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 37);
    \u0275\u0275element(22, "i", 38);
    \u0275\u0275elementStart(23, "div")(24, "div", 35);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 36);
    \u0275\u0275text(27, "En cours");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 39);
    \u0275\u0275element(29, "i", 40);
    \u0275\u0275elementStart(30, "div")(31, "div", 35);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 36);
    \u0275\u0275text(34, "Formations termin\xE9es");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("stroke-dashoffset", 263.9 - 263.9 * ctx_r1.stats.taux_maitrise / 100);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.taux_maitrise, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.stats.total_acquises, " comp\xE9tence(s) acquise(s) sur ", ctx_r1.stats.total_possible, " possibles ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.stats.total_acquises);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.total_en_cours);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.formations_terminees);
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_20_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r4, " ");
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_20_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, MesCompetencesComponent_ng_container_2_ng_container_20_div_8_div_1_Template, 3, 1, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.competencesAcquises);
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_20_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('Aucune comp\xE9tence trouv\xE9e pour "', ctx_r1.recherche, '"');
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_20_div_10_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r5, " ");
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_20_div_10_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MesCompetencesComponent_ng_container_2_ng_container_20_div_10_ng_container_10_div_1_Template, 3, 1, "div", 60);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", f_r6.competences);
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_20_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 42)(2, "div", 55);
    \u0275\u0275element(3, "i", 56);
    \u0275\u0275text(4, "En cours d'acquisition ");
    \u0275\u0275elementStart(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 58);
    \u0275\u0275text(8, "Terminez vos formations en cours pour les acqu\xE9rir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 49);
    \u0275\u0275template(10, MesCompetencesComponent_ng_container_2_ng_container_20_div_10_ng_container_10_Template, 2, 1, "ng-container", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.stats == null ? null : ctx_r1.stats.total_en_cours);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.formationsEnCours);
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 41)(2, "div", 42)(3, "div", 43);
    \u0275\u0275element(4, "i", 44);
    \u0275\u0275text(5, "Comp\xE9tences acquises ");
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, MesCompetencesComponent_ng_container_2_ng_container_20_div_8_Template, 2, 1, "div", 46)(9, MesCompetencesComponent_ng_container_2_ng_container_20_div_9_Template, 4, 1, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MesCompetencesComponent_ng_container_2_ng_container_20_div_10_Template, 11, 2, "div", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.competencesAcquises.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.competencesAcquises.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.competencesAcquises.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasEnCours);
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_21_div_1_div_6_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Termin\xE9e le ", ctx_r1.formatDateFr(f_r8.date_fin), " ");
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_21_div_1_div_6_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r9, " ");
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_21_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div", 69);
    \u0275\u0275element(3, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 70)(5, "div", 71);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 72);
    \u0275\u0275text(8);
    \u0275\u0275template(9, MesCompetencesComponent_ng_container_2_ng_container_21_div_1_div_6_span_9_Template, 2, 1, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 74);
    \u0275\u0275text(11, "Termin\xE9e");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 75);
    \u0275\u0275template(13, MesCompetencesComponent_ng_container_2_ng_container_21_div_1_div_6_div_13_Template, 3, 1, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 76)(15, "button", 77);
    \u0275\u0275listener("click", function MesCompetencesComponent_ng_container_2_ng_container_21_div_1_div_6_Template_button_click_15_listener() {
      const f_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.allerVersFormation(f_r8.formation_id, "termine"));
    });
    \u0275\u0275element(16, "i", 78);
    \u0275\u0275text(17, "Revoir la formation ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r8 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(f_r8.formation_titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r8.nb_competences, " comp\xE9tence(s) acquise(s) ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r8.date_fin);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", f_r8.competences);
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div", 43);
    \u0275\u0275element(3, "i", 44);
    \u0275\u0275text(4, "Formations termin\xE9es ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 65);
    \u0275\u0275template(6, MesCompetencesComponent_ng_container_2_ng_container_21_div_1_div_6_Template, 18, 4, "div", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.formationsAcquises);
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_21_div_2_div_6_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r11, " ");
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_21_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div", 80);
    \u0275\u0275element(3, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 70)(5, "div", 71);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 72);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 81);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 82);
    \u0275\u0275element(12, "div", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 75);
    \u0275\u0275template(14, MesCompetencesComponent_ng_container_2_ng_container_21_div_2_div_6_div_14_Template, 3, 1, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 76)(16, "button", 84);
    \u0275\u0275listener("click", function MesCompetencesComponent_ng_container_2_ng_container_21_div_2_div_6_Template_button_click_16_listener() {
      const f_r12 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.allerVersFormation(f_r12.formation_id, "en_cours"));
    });
    \u0275\u0275element(17, "i", 85);
    \u0275\u0275text(18, "Continuer la formation ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(f_r12.formation_titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r12.nb_competences, " comp\xE9tence(s) \xE0 acqu\xE9rir");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r12.progression, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", f_r12.progression, "%")("background", ctx_r1.getProgressionColor(f_r12.progression));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", f_r12.competences);
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 42)(2, "div", 55);
    \u0275\u0275element(3, "i", 56);
    \u0275\u0275text(4, "Formations en cours ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 65);
    \u0275\u0275template(6, MesCompetencesComponent_ng_container_2_ng_container_21_div_2_div_6_Template, 19, 8, "div", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.formationsEnCours);
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275elementStart(2, "h6");
    \u0275\u0275text(3, "Aucune comp\xE9tence pour le moment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Commencez une formation pour acqu\xE9rir vos premi\xE8res comp\xE9tences.");
    \u0275\u0275elementEnd()();
  }
}
function MesCompetencesComponent_ng_container_2_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MesCompetencesComponent_ng_container_2_ng_container_21_div_1_Template, 7, 1, "div", 63)(2, MesCompetencesComponent_ng_container_2_ng_container_21_div_2_Template, 7, 1, "div", 48)(3, MesCompetencesComponent_ng_container_2_ng_container_21_div_3_Template, 6, 0, "div", 64);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formationsAcquises.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formationsEnCours.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formationsAcquises.length === 0 && ctx_r1.formationsEnCours.length === 0);
  }
}
function MesCompetencesComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div")(3, "h3", 10);
    \u0275\u0275element(4, "i", 11);
    \u0275\u0275text(5, "Mes Comp\xE9tences ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7, "Comp\xE9tences acquises \xE0 travers vos formations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, MesCompetencesComponent_ng_container_2_div_8_Template, 35, 7, "div", 13);
    \u0275\u0275elementStart(9, "div", 14)(10, "div", 15);
    \u0275\u0275element(11, "i", 16);
    \u0275\u0275elementStart(12, "input", 17);
    \u0275\u0275listener("input", function MesCompetencesComponent_ng_container_2_Template_input_input_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRecherche($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 18)(14, "button", 19);
    \u0275\u0275listener("click", function MesCompetencesComponent_ng_container_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setVue("liste"));
    });
    \u0275\u0275element(15, "i", 20);
    \u0275\u0275text(16, "Vue liste ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 19);
    \u0275\u0275listener("click", function MesCompetencesComponent_ng_container_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setVue("formation"));
    });
    \u0275\u0275element(18, "i", 21);
    \u0275\u0275text(19, "Par formation ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, MesCompetencesComponent_ng_container_2_ng_container_20_Template, 11, 4, "ng-container", 2)(21, MesCompetencesComponent_ng_container_2_ng_container_21_Template, 4, 3, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.stats);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.recherche);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.vue === "liste");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.vue === "formation");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.vue === "liste");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vue === "formation");
  }
}
var MesCompetencesComponent = class _MesCompetencesComponent {
  formationsService;
  router;
  loading = true;
  error = "";
  data = null;
  recherche = "";
  vue = "formation";
  // Labels mois en français
  moisFr = [
    "janvier",
    "f\xE9vrier",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "ao\xFBt",
    "septembre",
    "octobre",
    "novembre",
    "d\xE9cembre"
  ];
  constructor(formationsService, router) {
    this.formationsService = formationsService;
    this.router = router;
  }
  ngOnInit() {
    this.loadCompetences();
  }
  loadCompetences() {
    this.loading = true;
    this.error = "";
    this.formationsService.getMesCompetences().subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger les comp\xE9tences.";
        this.loading = false;
      }
    });
  }
  // ── Getters ────────────────────────────────────────────
  get stats() {
    return this.data?.stats ?? null;
  }
  get competencesAcquises() {
    const all = this.data?.competences_a_plat ?? [];
    if (!this.recherche.trim())
      return all;
    return all.filter((c) => c.toLowerCase().includes(this.recherche.toLowerCase()));
  }
  get formationsAcquises() {
    return this.data?.par_formation.acquises ?? [];
  }
  get formationsEnCours() {
    return this.data?.par_formation.en_cours ?? [];
  }
  get hasEnCours() {
    return this.formationsEnCours.length > 0;
  }
  // ── Navigation vers formation ──────────────────────────
  // Après
  allerVersFormation(formationId, statut) {
    if (statut === "en_cours") {
      this.router.navigate(["/student/lecture-formation", formationId]);
    } else {
      this.router.navigate(["/courses/course-details-2", formationId]);
    }
  }
  // ── Date acquisition en français ──────────────────────
  formatDateFr(dateStr) {
    if (!dateStr)
      return "";
    const d = new Date(dateStr);
    if (isNaN(d.getTime()))
      return "";
    return `${d.getDate()} ${this.moisFr[d.getMonth()]} ${d.getFullYear()}`;
  }
  // ── Helpers ────────────────────────────────────────────
  getProgressionColor(v) {
    if (v >= 75)
      return "#10b981";
    if (v >= 40)
      return "#f59e0b";
    return "#ef4444";
  }
  setVue(v) {
    this.vue = v;
  }
  onRecherche(event) {
    this.recherche = event.target.value;
  }
  static \u0275fac = function MesCompetencesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MesCompetencesComponent)(\u0275\u0275directiveInject(FormationsService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MesCompetencesComponent, selectors: [["app-mes-competences"]], decls: 3, vars: 3, consts: [["class", "cp-loading", 4, "ngIf"], ["class", "cp-error", 4, "ngIf"], [4, "ngIf"], [1, "cp-loading"], [1, "cp-loading__ring"], [1, "cp-error"], [1, "isax", "isax-warning-2"], [1, "cp-btn", "cp-btn--primary", 3, "click"], [1, "isax", "isax-refresh", "me-2"], [1, "cp-header", "mb-4"], [1, "cp-header__title"], [1, "isax", "isax-medal-star", "me-2", 2, "color", "#069b8f"], [1, "cp-header__sub"], ["class", "cp-stats mb-4", 4, "ngIf"], [1, "cp-toolbar", "mb-4"], [1, "cp-search"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Rechercher une comp\xE9tence...", 1, "cp-search__input", 3, "input", "value"], [1, "cp-vue-toggle"], [3, "click"], [1, "isax", "isax-element-3", "me-1"], [1, "isax", "isax-book-1", "me-1"], [1, "cp-stats", "mb-4"], [1, "cp-stat-main"], [1, "cp-stat-main__circle"], ["viewBox", "0 0 100 100", 1, "cp-circle-svg"], ["cx", "50", "cy", "50", "r", "42", "stroke-width", "8", 1, "cp-circle-track"], ["cx", "50", "cy", "50", "r", "42", "stroke-width", "8", "stroke-dasharray", "263.9", 1, "cp-circle-fill"], [1, "cp-stat-main__value"], [1, "cp-stat-main__info"], [1, "cp-stat-main__label"], [1, "cp-stat-main__sub"], [1, "cp-stat-cards"], [1, "cp-stat-card", "cp-stat-card--green"], [1, "isax", "isax-tick-circle"], [1, "cp-stat-card__value"], [1, "cp-stat-card__label"], [1, "cp-stat-card", "cp-stat-card--orange"], [1, "isax", "isax-refresh-circle"], [1, "cp-stat-card", "cp-stat-card--teal"], [1, "isax", "isax-book-1"], [1, "cp-section", "mb-4"], [1, "cp-section__header"], [1, "cp-section__title", "cp-section__title--green"], [1, "isax", "isax-tick-circle", "me-2"], [1, "cp-section__count"], ["class", "cp-badges", 4, "ngIf"], ["class", "cp-empty-mini", 4, "ngIf"], ["class", "cp-section", 4, "ngIf"], [1, "cp-badges"], ["class", "cp-badge cp-badge--acquis", 4, "ngFor", "ngForOf"], [1, "cp-badge", "cp-badge--acquis"], [1, "isax", "isax-verify", "me-1"], [1, "cp-empty-mini"], [1, "cp-section"], [1, "cp-section__title", "cp-section__title--orange"], [1, "isax", "isax-refresh-circle", "me-2"], [1, "cp-section__count", "cp-section__count--orange"], [1, "cp-section__hint"], [4, "ngFor", "ngForOf"], ["class", "cp-badge cp-badge--encours", 4, "ngFor", "ngForOf"], [1, "cp-badge", "cp-badge--encours"], [1, "isax", "isax-clock", "me-1"], ["class", "cp-section mb-4", 4, "ngIf"], ["class", "cp-empty", 4, "ngIf"], [1, "cp-formation-grid"], ["class", "cp-formation-card", 4, "ngFor", "ngForOf"], [1, "cp-formation-card"], [1, "cp-formation-card__header"], [1, "cp-formation-card__icon", "cp-formation-card__icon--green"], [1, "cp-formation-card__info"], [1, "cp-formation-card__titre"], [1, "cp-formation-card__meta"], ["class", "cp-formation-card__date", 4, "ngIf"], [1, "cp-formation-card__badge", "cp-formation-card__badge--green"], [1, "cp-badges", "cp-badges--sm", "mt-3"], [1, "cp-formation-card__footer"], [1, "cp-btn-link", 3, "click"], [1, "isax", "isax-eye", "me-1"], [1, "cp-formation-card__date"], [1, "cp-formation-card__icon", "cp-formation-card__icon--orange"], [1, "cp-formation-card__badge", "cp-formation-card__badge--orange"], [1, "cp-prog-bar", "mt-2"], [1, "cp-prog-bar__fill"], [1, "cp-btn-link", "cp-btn-link--orange", 3, "click"], [1, "isax", "isax-play-circle", "me-1"], [1, "cp-empty"], [1, "isax", "isax-medal-star", "cp-empty__icon"]], template: function MesCompetencesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MesCompetencesComponent_div_0_Template, 4, 0, "div", 0)(1, MesCompetencesComponent_div_1_Template, 7, 1, "div", 1)(2, MesCompetencesComponent_ng_container_2_Template, 22, 8, "ng-container", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n.cp-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 16px;\n}\n.cp-loading__ring[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  animation: _ngcontent-%COMP%_cp-spin 0.7s linear infinite;\n}\n.cp-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_cp-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cp-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  gap: 12px;\n}\n.cp-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ef4444;\n}\n.cp-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.cp-header__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n}\n.cp-header__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.cp-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cp-stat-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  padding: 20px 24px;\n  flex-shrink: 0;\n}\n.cp-stat-main__circle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  flex-shrink: 0;\n}\n.cp-stat-main__value[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n  font-weight: 900;\n  color: #0f172a;\n}\n.cp-stat-main__label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.cp-stat-main__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.cp-circle-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.cp-circle-track[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #f1f5f9;\n}\n.cp-circle-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #069b8f;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.8s ease;\n}\n.cp-stat-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.cp-stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 18px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  flex: 1;\n  min-width: 140px;\n}\n.cp-stat-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n  flex-shrink: 0;\n}\n.cp-stat-card__value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.cp-stat-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.cp-stat-card--green[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.cp-stat-card--orange[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.cp-stat-card--teal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.cp-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cp-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  flex: 1;\n  max-width: 400px;\n  transition: all 0.2s ease;\n}\n.cp-search[_ngcontent-%COMP%]:focus-within {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.cp-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.cp-search__input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: #334155;\n  background: transparent;\n  width: 100%;\n}\n.cp-search__input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.cp-vue-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.cp-vue-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1.5px solid #e2e8f0;\n  transition: all 0.2s ease;\n}\n.cp-vue-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cp-vue-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.cp-vue-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #fff;\n  border-color: #1e293b;\n}\n.cp-section__header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.cp-section__title[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 15px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.cp-section__title--green[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.cp-section__title--orange[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.cp-section__count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #ecfdf5;\n  color: #10b981;\n  font-size: 11px;\n  font-weight: 800;\n}\n.cp-section__count--orange[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n}\n.cp-section__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 4px 0 0;\n}\n.cp-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.cp-badges--sm[_ngcontent-%COMP%]   .cp-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 4px 10px;\n}\n.cp-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 700;\n  transition: all 0.2s ease;\n  cursor: default;\n}\n.cp-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.cp-badge--acquis[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: rgb(13.9701492537, 161.5298507463, 112.6343283582);\n  border: 1.5px solid rgba(16, 185, 129, 0.2);\n}\n.cp-badge--acquis[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.15);\n  transform: translateY(-1px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.cp-badge--encours[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: rgb(172.4330708661, 110.9507874016, 7.0669291339);\n  border: 1.5px solid rgba(245, 158, 11, 0.2);\n}\n.cp-badge--encours[_ngcontent-%COMP%]:hover {\n  background: rgba(245, 158, 11, 0.15);\n  transform: translateY(-1px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.cp-formation-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .cp-formation-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cp-formation-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  padding: 18px 20px;\n  transition: all 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.cp-formation-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.cp-formation-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.cp-formation-card__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 20px;\n}\n.cp-formation-card__icon--green[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.cp-formation-card__icon--orange[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.cp-formation-card__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cp-formation-card__titre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.4;\n  margin-bottom: 4px;\n}\n.cp-formation-card__meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 4px;\n}\n.cp-formation-card__date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #069b8f;\n  font-weight: 600;\n  background: #e6f7f5;\n  padding: 2px 8px;\n  border-radius: 99px;\n  white-space: nowrap;\n}\n.cp-formation-card__badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex-shrink: 0;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 99px;\n}\n.cp-formation-card__badge--green[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.cp-formation-card__badge--orange[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n}\n.cp-formation-card__footer[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n}\n.cp-btn-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  background: none;\n  border: 1.5px solid rgba(6, 155, 143, 0.3);\n  color: #069b8f;\n  padding: 6px 14px;\n  border-radius: 99px;\n  transition: all 0.2s ease;\n}\n.cp-btn-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cp-btn-link[_ngcontent-%COMP%]:hover {\n  background: #e6f7f5;\n  border-color: #069b8f;\n}\n.cp-btn-link--orange[_ngcontent-%COMP%] {\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n  border-color: rgba(245, 158, 11, 0.3);\n}\n.cp-btn-link--orange[_ngcontent-%COMP%]:hover {\n  background: #fffbeb;\n  border-color: #f59e0b;\n}\n.cp-prog-bar[_ngcontent-%COMP%] {\n  height: 5px;\n  background: #f1f5f9;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.cp-prog-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.cp-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n  gap: 10px;\n}\n.cp-empty__icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  color: #069b8f;\n  opacity: 0.25;\n}\n.cp-empty[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cp-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.cp-empty-mini[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.cp-empty-mini[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.cp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n}\n.cp-btn--primary[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.cp-btn--primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n@media (max-width: 768px) {\n  .cp-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cp-stat-main[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cp-stat-cards[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cp-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .cp-search[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .cp-vue-toggle[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=mes-competences.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MesCompetencesComponent, [{
    type: Component,
    args: [{ selector: "app-mes-competences", standalone: true, imports: [CommonModule, RouterModule], template: `<!-- LOADING -->\r
<div class="cp-loading" *ngIf="loading">\r
  <div class="cp-loading__ring"></div>\r
  <p>Chargement de vos comp\xE9tences...</p>\r
</div>\r
\r
<!-- ERREUR -->\r
<div class="cp-error" *ngIf="error && !loading">\r
  <i class="isax isax-warning-2"></i>\r
  <p>{{ error }}</p>\r
  <button class="cp-btn cp-btn--primary" (click)="loadCompetences()">\r
    <i class="isax isax-refresh me-2"></i>R\xE9essayer\r
  </button>\r
</div>\r
\r
<ng-container *ngIf="!loading && !error && data">\r
\r
  <!-- \u2500\u2500 HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="cp-header mb-4">\r
    <div>\r
      <h3 class="cp-header__title">\r
        <i class="isax isax-medal-star me-2" style="color:#069b8f"></i>Mes Comp\xE9tences\r
      </h3>\r
      <p class="cp-header__sub">Comp\xE9tences acquises \xE0 travers vos formations</p>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 STATS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="cp-stats mb-4" *ngIf="stats">\r
    <div class="cp-stat-main">\r
      <div class="cp-stat-main__circle">\r
        <svg viewBox="0 0 100 100" class="cp-circle-svg">\r
          <circle class="cp-circle-track" cx="50" cy="50" r="42" stroke-width="8"/>\r
          <circle class="cp-circle-fill" cx="50" cy="50" r="42" stroke-width="8"\r
            stroke-dasharray="263.9"\r
            [attr.stroke-dashoffset]="263.9 - (263.9 * stats.taux_maitrise / 100)"/>\r
        </svg>\r
        <div class="cp-stat-main__value">{{ stats.taux_maitrise }}%</div>\r
      </div>\r
      <div class="cp-stat-main__info">\r
        <div class="cp-stat-main__label">Taux de ma\xEEtrise global</div>\r
        <div class="cp-stat-main__sub">\r
          {{ stats.total_acquises }} comp\xE9tence(s) acquise(s) sur {{ stats.total_possible }} possibles\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="cp-stat-cards">\r
      <div class="cp-stat-card cp-stat-card--green">\r
        <i class="isax isax-tick-circle"></i>\r
        <div>\r
          <div class="cp-stat-card__value">{{ stats.total_acquises }}</div>\r
          <div class="cp-stat-card__label">Acquises</div>\r
        </div>\r
      </div>\r
      <div class="cp-stat-card cp-stat-card--orange">\r
        <i class="isax isax-refresh-circle"></i>\r
        <div>\r
          <div class="cp-stat-card__value">{{ stats.total_en_cours }}</div>\r
          <div class="cp-stat-card__label">En cours</div>\r
        </div>\r
      </div>\r
      <div class="cp-stat-card cp-stat-card--teal">\r
        <i class="isax isax-book-1"></i>\r
        <div>\r
          <div class="cp-stat-card__value">{{ stats.formations_terminees }}</div>\r
          <div class="cp-stat-card__label">Formations termin\xE9es</div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 TOOLBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="cp-toolbar mb-4">\r
    <div class="cp-search">\r
      <i class="isax isax-search-normal-1"></i>\r
      <input type="text" placeholder="Rechercher une comp\xE9tence..."\r
             [value]="recherche" (input)="onRecherche($event)" class="cp-search__input"/>\r
    </div>\r
    <div class="cp-vue-toggle">\r
      <button [class.active]="vue === 'liste'" (click)="setVue('liste')">\r
        <i class="isax isax-element-3 me-1"></i>Vue liste\r
      </button>\r
      <button [class.active]="vue === 'formation'" (click)="setVue('formation')">\r
        <i class="isax isax-book-1 me-1"></i>Par formation\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- VUE LISTE                                           -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="vue === 'liste'">\r
\r
    <div class="cp-section mb-4">\r
      <div class="cp-section__header">\r
        <div class="cp-section__title cp-section__title--green">\r
          <i class="isax isax-tick-circle me-2"></i>Comp\xE9tences acquises\r
          <span class="cp-section__count">{{ competencesAcquises.length }}</span>\r
        </div>\r
      </div>\r
      <div class="cp-badges" *ngIf="competencesAcquises.length > 0">\r
        <div class="cp-badge cp-badge--acquis" *ngFor="let c of competencesAcquises">\r
          <i class="isax isax-verify me-1"></i>{{ c }}\r
        </div>\r
      </div>\r
      <div class="cp-empty-mini" *ngIf="competencesAcquises.length === 0">\r
        <i class="isax isax-search-normal-1"></i>\r
        <span>Aucune comp\xE9tence trouv\xE9e pour "{{ recherche }}"</span>\r
      </div>\r
    </div>\r
\r
    <div class="cp-section" *ngIf="hasEnCours">\r
      <div class="cp-section__header">\r
        <div class="cp-section__title cp-section__title--orange">\r
          <i class="isax isax-refresh-circle me-2"></i>En cours d'acquisition\r
          <span class="cp-section__count cp-section__count--orange">{{ stats?.total_en_cours }}</span>\r
        </div>\r
        <p class="cp-section__hint">Terminez vos formations en cours pour les acqu\xE9rir</p>\r
      </div>\r
      <div class="cp-badges">\r
        <ng-container *ngFor="let f of formationsEnCours">\r
          <div class="cp-badge cp-badge--encours" *ngFor="let c of f.competences">\r
            <i class="isax isax-clock me-1"></i>{{ c }}\r
          </div>\r
        </ng-container>\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- VUE PAR FORMATION                                   -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="vue === 'formation'">\r
\r
    <!-- Formations termin\xE9es -->\r
    <div class="cp-section mb-4" *ngIf="formationsAcquises.length > 0">\r
      <div class="cp-section__header">\r
        <div class="cp-section__title cp-section__title--green">\r
          <i class="isax isax-tick-circle me-2"></i>Formations termin\xE9es\r
        </div>\r
      </div>\r
      <div class="cp-formation-grid">\r
        <div class="cp-formation-card" *ngFor="let f of formationsAcquises">\r
          <div class="cp-formation-card__header">\r
            <div class="cp-formation-card__icon cp-formation-card__icon--green">\r
              <i class="isax isax-book-1"></i>\r
            </div>\r
            <div class="cp-formation-card__info">\r
              <div class="cp-formation-card__titre">{{ f.formation_titre }}</div>\r
              <div class="cp-formation-card__meta">\r
                {{ f.nb_competences }} comp\xE9tence(s) acquise(s)\r
                <!-- \u2705 Date d'acquisition -->\r
                <span class="cp-formation-card__date" *ngIf="f.date_fin">\r
                  \xB7 Termin\xE9e le {{ formatDateFr(f.date_fin) }}\r
                </span>\r
              </div>\r
            </div>\r
            <span class="cp-formation-card__badge cp-formation-card__badge--green">Termin\xE9e</span>\r
          </div>\r
\r
          <div class="cp-badges cp-badges--sm mt-3">\r
            <div class="cp-badge cp-badge--acquis" *ngFor="let c of f.competences">\r
              <i class="isax isax-verify me-1"></i>{{ c }}\r
            </div>\r
          </div>\r
\r
          <!-- \u2705 Lien vers la formation -->\r
          <div class="cp-formation-card__footer">\r
            <button class="cp-btn-link" (click)="allerVersFormation(f.formation_id, 'termine')">\r
              <i class="isax isax-eye me-1"></i>Revoir la formation\r
            </button>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Formations en cours -->\r
    <div class="cp-section" *ngIf="formationsEnCours.length > 0">\r
      <div class="cp-section__header">\r
        <div class="cp-section__title cp-section__title--orange">\r
          <i class="isax isax-refresh-circle me-2"></i>Formations en cours\r
        </div>\r
      </div>\r
      <div class="cp-formation-grid">\r
        <div class="cp-formation-card" *ngFor="let f of formationsEnCours">\r
          <div class="cp-formation-card__header">\r
            <div class="cp-formation-card__icon cp-formation-card__icon--orange">\r
              <i class="isax isax-book-1"></i>\r
            </div>\r
            <div class="cp-formation-card__info">\r
              <div class="cp-formation-card__titre">{{ f.formation_titre }}</div>\r
              <div class="cp-formation-card__meta">{{ f.nb_competences }} comp\xE9tence(s) \xE0 acqu\xE9rir</div>\r
            </div>\r
            <span class="cp-formation-card__badge cp-formation-card__badge--orange">{{ f.progression }}%</span>\r
          </div>\r
\r
          <div class="cp-prog-bar mt-2">\r
            <div class="cp-prog-bar__fill"\r
                 [style.width.%]="f.progression"\r
                 [style.background]="getProgressionColor(f.progression)">\r
            </div>\r
          </div>\r
\r
          <div class="cp-badges cp-badges--sm mt-3">\r
            <div class="cp-badge cp-badge--encours" *ngFor="let c of f.competences">\r
              <i class="isax isax-clock me-1"></i>{{ c }}\r
            </div>\r
          </div>\r
\r
          <!-- \u2705 Lien continuer -->\r
          <div class="cp-formation-card__footer">\r
            <button class="cp-btn-link cp-btn-link--orange"\r
                    (click)="allerVersFormation(f.formation_id, 'en_cours')">\r
              <i class="isax isax-play-circle me-1"></i>Continuer la formation\r
            </button>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="cp-empty" *ngIf="formationsAcquises.length === 0 && formationsEnCours.length === 0">\r
      <i class="isax isax-medal-star cp-empty__icon"></i>\r
      <h6>Aucune comp\xE9tence pour le moment</h6>\r
      <p>Commencez une formation pour acqu\xE9rir vos premi\xE8res comp\xE9tences.</p>\r
    </div>\r
\r
  </ng-container>\r
\r
</ng-container>`, styles: ["/* src/app/features/student/mes-competences/mes-competences.component.scss */\n.cp-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 16px;\n}\n.cp-loading__ring {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  animation: cp-spin 0.7s linear infinite;\n}\n.cp-loading p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n@keyframes cp-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cp-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  gap: 12px;\n}\n.cp-error i {\n  font-size: 3rem;\n  color: #ef4444;\n}\n.cp-error p {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.cp-header__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n}\n.cp-header__sub {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.cp-stats {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cp-stat-main {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  padding: 20px 24px;\n  flex-shrink: 0;\n}\n.cp-stat-main__circle {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  flex-shrink: 0;\n}\n.cp-stat-main__value {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n  font-weight: 900;\n  color: #0f172a;\n}\n.cp-stat-main__label {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.cp-stat-main__sub {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.cp-circle-svg {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.cp-circle-track {\n  fill: none;\n  stroke: #f1f5f9;\n}\n.cp-circle-fill {\n  fill: none;\n  stroke: #069b8f;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.8s ease;\n}\n.cp-stat-cards {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.cp-stat-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 18px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  flex: 1;\n  min-width: 140px;\n}\n.cp-stat-card i {\n  font-size: 26px;\n  flex-shrink: 0;\n}\n.cp-stat-card__value {\n  font-size: 26px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.cp-stat-card__label {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.cp-stat-card--green i {\n  color: #10b981;\n}\n.cp-stat-card--orange i {\n  color: #f59e0b;\n}\n.cp-stat-card--teal i {\n  color: #069b8f;\n}\n.cp-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cp-search {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  flex: 1;\n  max-width: 400px;\n  transition: all 0.2s ease;\n}\n.cp-search:focus-within {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.cp-search i {\n  font-size: 16px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.cp-search__input {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: #334155;\n  background: transparent;\n  width: 100%;\n}\n.cp-search__input::placeholder {\n  color: #94a3b8;\n}\n.cp-vue-toggle {\n  display: flex;\n  gap: 6px;\n}\n.cp-vue-toggle button {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1.5px solid #e2e8f0;\n  transition: all 0.2s ease;\n}\n.cp-vue-toggle button i {\n  font-size: 13px;\n}\n.cp-vue-toggle button:hover {\n  background: #e2e8f0;\n}\n.cp-vue-toggle button.active {\n  background: #1e293b;\n  color: #fff;\n  border-color: #1e293b;\n}\n.cp-section__header {\n  margin-bottom: 16px;\n}\n.cp-section__title {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 15px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.cp-section__title--green i {\n  color: #10b981;\n}\n.cp-section__title--orange i {\n  color: #f59e0b;\n}\n.cp-section__count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #ecfdf5;\n  color: #10b981;\n  font-size: 11px;\n  font-weight: 800;\n}\n.cp-section__count--orange {\n  background: #fffbeb;\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n}\n.cp-section__hint {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 4px 0 0;\n}\n.cp-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.cp-badges--sm .cp-badge {\n  font-size: 11px;\n  padding: 4px 10px;\n}\n.cp-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 700;\n  transition: all 0.2s ease;\n  cursor: default;\n}\n.cp-badge i {\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.cp-badge--acquis {\n  background: #ecfdf5;\n  color: rgb(13.9701492537, 161.5298507463, 112.6343283582);\n  border: 1.5px solid rgba(16, 185, 129, 0.2);\n}\n.cp-badge--acquis:hover {\n  background: rgba(16, 185, 129, 0.15);\n  transform: translateY(-1px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.cp-badge--encours {\n  background: #fffbeb;\n  color: rgb(172.4330708661, 110.9507874016, 7.0669291339);\n  border: 1.5px solid rgba(245, 158, 11, 0.2);\n}\n.cp-badge--encours:hover {\n  background: rgba(245, 158, 11, 0.15);\n  transform: translateY(-1px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.cp-formation-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .cp-formation-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.cp-formation-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  padding: 18px 20px;\n  transition: all 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.cp-formation-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.cp-formation-card__header {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.cp-formation-card__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 20px;\n}\n.cp-formation-card__icon--green {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.cp-formation-card__icon--orange {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.cp-formation-card__info {\n  flex: 1;\n  min-width: 0;\n}\n.cp-formation-card__titre {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.4;\n  margin-bottom: 4px;\n}\n.cp-formation-card__meta {\n  font-size: 12px;\n  color: #94a3b8;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 4px;\n}\n.cp-formation-card__date {\n  font-size: 11px;\n  color: #069b8f;\n  font-weight: 600;\n  background: #e6f7f5;\n  padding: 2px 8px;\n  border-radius: 99px;\n  white-space: nowrap;\n}\n.cp-formation-card__badge {\n  margin-left: auto;\n  flex-shrink: 0;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 99px;\n}\n.cp-formation-card__badge--green {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.cp-formation-card__badge--orange {\n  background: #fffbeb;\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n}\n.cp-formation-card__footer {\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n}\n.cp-btn-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  background: none;\n  border: 1.5px solid rgba(6, 155, 143, 0.3);\n  color: #069b8f;\n  padding: 6px 14px;\n  border-radius: 99px;\n  transition: all 0.2s ease;\n}\n.cp-btn-link i {\n  font-size: 13px;\n}\n.cp-btn-link:hover {\n  background: #e6f7f5;\n  border-color: #069b8f;\n}\n.cp-btn-link--orange {\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n  border-color: rgba(245, 158, 11, 0.3);\n}\n.cp-btn-link--orange:hover {\n  background: #fffbeb;\n  border-color: #f59e0b;\n}\n.cp-prog-bar {\n  height: 5px;\n  background: #f1f5f9;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.cp-prog-bar__fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.cp-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n  gap: 10px;\n}\n.cp-empty__icon {\n  font-size: 3.5rem;\n  color: #069b8f;\n  opacity: 0.25;\n}\n.cp-empty h6 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cp-empty p {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.cp-empty-mini {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.cp-empty-mini i {\n  font-size: 16px;\n}\n.cp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n}\n.cp-btn--primary {\n  background: #069b8f;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.cp-btn--primary:hover {\n  transform: translateY(-1px);\n}\n@media (max-width: 768px) {\n  .cp-stats {\n    flex-direction: column;\n  }\n  .cp-stat-main {\n    width: 100%;\n  }\n  .cp-stat-cards {\n    width: 100%;\n  }\n  .cp-toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .cp-search {\n    max-width: none;\n  }\n  .cp-vue-toggle {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=mes-competences.component.css.map */\n"] }]
  }], () => [{ type: FormationsService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MesCompetencesComponent, { className: "MesCompetencesComponent", filePath: "src/app/features/student/mes-competences/mes-competences.component.ts", lineNumber: 41 });
})();
export {
  MesCompetencesComponent
};
//# sourceMappingURL=chunk-XXYHKMP3.js.map
