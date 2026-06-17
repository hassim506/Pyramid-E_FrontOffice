import {
  FormationService
} from "./chunk-335YI34S.js";
import "./chunk-K7E3GT3E.js";
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7XGB4BEQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/student/mes-competences/mes-competences.component.ts
function MesCompetencesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Chargement de vos comp\xE9tences acquises...");
    \u0275\u0275elementEnd()();
  }
}
function MesCompetencesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function MesCompetencesComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCompetences());
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
function MesCompetencesComponent_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getDomaineColorLight(ctx_r1.data.domaine_user))("color", ctx_r1.getDomaineColor(ctx_r1.data.domaine_user))("border-color", ctx_r1.getDomaineColor(ctx_r1.data.domaine_user) + "40");
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", ctx_r1.getDomaineIcon(ctx_r1.data.domaine_user), " me-1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.domaine_user.nom, " ");
  }
}
function MesCompetencesComponent_ng_container_2_div_9_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "div")(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42);
    \u0275\u0275text(6, "Mon domaine");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--d-color", ctx_r1.getDomaineColor(ctx_r1.data.domaine_user))("--d-color-lt", ctx_r1.getDomaineColorLight(ctx_r1.data.domaine_user));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", ctx_r1.getDomaineIcon(ctx_r1.data.domaine_user)));
    \u0275\u0275styleProp("color", ctx_r1.getDomaineColor(ctx_r1.data.domaine_user));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.getDomaineColor(ctx_r1.data.domaine_user));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.domaine_user.nom, " ");
  }
}
function MesCompetencesComponent_ng_container_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 31);
    \u0275\u0275element(4, "circle", 32)(5, "circle", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 35)(9, "div", 36);
    \u0275\u0275text(10, "Comp\xE9tences acquises");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 37);
    \u0275\u0275text(12);
    \u0275\u0275element(13, "br");
    \u0275\u0275text(14, " et dont le quiz final a \xE9t\xE9 valid\xE9 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 38)(16, "div", 39);
    \u0275\u0275element(17, "i", 40);
    \u0275\u0275elementStart(18, "div")(19, "div", 41);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 42);
    \u0275\u0275text(22, "Comp\xE9tences acquises");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 43);
    \u0275\u0275element(24, "i", 44);
    \u0275\u0275elementStart(25, "div")(26, "div", 41);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 42);
    \u0275\u0275text(29, "Domaines couverts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, MesCompetencesComponent_ng_container_2_div_9_div_30_Template, 7, 12, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("stroke-dashoffset", 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.stats.total_acquises);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Issues de ", ctx_r1.stats.formations_terminees, " formation(s) termin\xE9e(s) ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.total_acquises);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalDomainesBrut);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.data.domaine_user);
  }
}
function MesCompetencesComponent_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.competencesAcquises.length, " r\xE9sultat(s) pour \xAB ", ctx_r1.recherche, " \xBB ");
  }
}
function MesCompetencesComponent_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, " Domaine filtr\xE9 \xB7 ");
    \u0275\u0275elementStart(3, "button", 50);
    \u0275\u0275listener("click", function MesCompetencesComponent_ng_container_2_div_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDomaineFiltre(null));
    });
    \u0275\u0275text(4, " Tout afficher ");
    \u0275\u0275element(5, "i", 51);
    \u0275\u0275elementEnd()();
  }
}
function MesCompetencesComponent_ng_container_2_div_17_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function MesCompetencesComponent_ng_container_2_div_17_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setDomaineFiltre(ctx_r1.data.domaine_user.id));
    });
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--chip-color", ctx_r1.getDomaineColor(ctx_r1.data.domaine_user));
    \u0275\u0275classProp("cp-chip--active", ctx_r1.domaineFiltre === ctx_r1.data.domaine_user.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.domaine_user.nom, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.groupePrincipalBrut.competences.length);
  }
}
function MesCompetencesComponent_ng_container_2_div_17_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function MesCompetencesComponent_ng_container_2_div_17_button_7_Template_button_click_0_listener() {
      const d_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setDomaineFiltre(d_r8.id));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--chip-color", ctx_r1.getDomaineColor(d_r8, i_r9));
    \u0275\u0275classProp("cp-chip--active", ctx_r1.domaineFiltre === d_r8.id);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", ctx_r1.getDomaineIcon(d_r8)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r8.nom, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getNbCompetencesDomaine(d_r8.id));
  }
}
function MesCompetencesComponent_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "button", 53);
    \u0275\u0275listener("click", function MesCompetencesComponent_ng_container_2_div_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDomaineFiltre(null));
    });
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275text(3, " Tous ");
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, MesCompetencesComponent_ng_container_2_div_17_button_6_Template, 5, 6, "button", 55)(7, MesCompetencesComponent_ng_container_2_div_17_button_7_Template, 5, 9, "button", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("cp-chip--active", ctx_r1.domaineFiltre === null);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.totalDomainesBrut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.data.domaine_user && ctx_r1.groupePrincipalBrut);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.domainesDisponibles)("ngForTrackBy", ctx_r1.trackByDomaine2);
  }
}
function MesCompetencesComponent_ng_container_2_div_18_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275text(2, "Mon domaine principal ");
    \u0275\u0275elementEnd();
  }
}
function MesCompetencesComponent_ng_container_2_div_18_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r10, " ");
  }
}
function MesCompetencesComponent_ng_container_2_div_18_div_1_div_16_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDateFr(f_r12.date_fin), " ");
  }
}
function MesCompetencesComponent_ng_container_2_div_18_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function MesCompetencesComponent_ng_container_2_div_18_div_1_div_16_Template_div_click_0_listener() {
      const f_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.allerVersFormation(f_r12.formation_id));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MesCompetencesComponent_ng_container_2_div_18_div_1_div_16_span_3_Template, 2, 1, "span", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r12.formation_titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r12.date_fin);
  }
}
function MesCompetencesComponent_ng_container_2_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275template(1, MesCompetencesComponent_ng_container_2_div_18_div_1_div_1_Template, 3, 0, "div", 62);
    \u0275\u0275elementStart(2, "div", 63)(3, "div", 64);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 66);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 67);
    \u0275\u0275template(10, MesCompetencesComponent_ng_container_2_div_18_div_1_div_10_Template, 3, 1, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 69)(12, "div", 70);
    \u0275\u0275element(13, "i", 71);
    \u0275\u0275text(14, "Formations termin\xE9es ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 72);
    \u0275\u0275template(16, MesCompetencesComponent_ng_container_2_div_18_div_1_div_16_Template, 4, 2, "div", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const grp_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--d-color", ctx_r1.getDomaineColor(grp_r13.domaine, i_r14))("--d-color-lt", ctx_r1.getDomaineColorLight(grp_r13.domaine, i_r14));
    \u0275\u0275classProp("cp-domaine-card--primary", grp_r13.isPrimary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", grp_r13.isPrimary);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", ctx_r1.getDomaineIcon(grp_r13.domaine)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grp_r13.domaine.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grp_r13.competences.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", grp_r13.competences);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", grp_r13.formations);
  }
}
function MesCompetencesComponent_ng_container_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, MesCompetencesComponent_ng_container_2_div_18_div_1_Template, 17, 14, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.groupesFinaux)("ngForTrackBy", ctx_r1.trackByDomaine);
  }
}
function MesCompetencesComponent_ng_container_2_ng_template_19_p_4_Template(rf, ctx) {
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
function MesCompetencesComponent_ng_container_2_ng_template_19_p_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Aucune comp\xE9tence dans ce domaine. ");
    \u0275\u0275elementStart(2, "button", 83);
    \u0275\u0275listener("click", function MesCompetencesComponent_ng_container_2_ng_template_19_p_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setDomaineFiltre(null));
    });
    \u0275\u0275text(3, "Voir tous les domaines");
    \u0275\u0275elementEnd()();
  }
}
function MesCompetencesComponent_ng_container_2_ng_template_19_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Terminez une formation ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "et r\xE9ussissez le quiz final");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " pour d\xE9bloquer vos comp\xE9tences. ");
    \u0275\u0275elementEnd();
  }
}
function MesCompetencesComponent_ng_container_2_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275elementStart(2, "h6");
    \u0275\u0275text(3, "Aucune comp\xE9tence d\xE9bloqu\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MesCompetencesComponent_ng_container_2_ng_template_19_p_4_Template, 2, 1, "p", 3)(5, MesCompetencesComponent_ng_container_2_ng_template_19_p_5_Template, 4, 0, "p", 3)(6, MesCompetencesComponent_ng_container_2_ng_template_19_p_6_Template, 5, 0, "p", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.recherche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.domaineFiltre !== null && !ctx_r1.recherche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.recherche && ctx_r1.domaineFiltre === null);
  }
}
function MesCompetencesComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "h3", 12);
    \u0275\u0275element(4, "i", 13);
    \u0275\u0275text(5, " Mes Comp\xE9tences Acquises ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 14);
    \u0275\u0275text(7, "Comp\xE9tences valid\xE9es \xE0 travers vos formations termin\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, MesCompetencesComponent_ng_container_2_div_8_Template, 4, 10, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MesCompetencesComponent_ng_container_2_div_9_Template, 31, 6, "div", 16);
    \u0275\u0275elementStart(10, "div", 17)(11, "div", 18)(12, "div", 19);
    \u0275\u0275element(13, "i", 20);
    \u0275\u0275elementStart(14, "input", 21);
    \u0275\u0275listener("input", function MesCompetencesComponent_ng_container_2_Template_input_input_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRecherche($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, MesCompetencesComponent_ng_container_2_div_15_Template, 2, 2, "div", 22)(16, MesCompetencesComponent_ng_container_2_div_16_Template, 6, 0, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MesCompetencesComponent_ng_container_2_div_17_Template, 8, 6, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, MesCompetencesComponent_ng_container_2_div_18_Template, 2, 2, "div", 25)(19, MesCompetencesComponent_ng_container_2_ng_template_19_Template, 7, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const emptyState_r16 = \u0275\u0275reference(20);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.data.domaine_user);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.recherche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.recherche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.domaineFiltre !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalDomainesBrut > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasGroupes)("ngIfElse", emptyState_r16);
  }
}
var FALLBACK_COLORS = [
  "#4f46e5",
  "#059669",
  "#db2777",
  "#ea580c",
  "#0284c7",
  "#0d9488",
  "#64748b",
  "#7c3aed"
];
var MesCompetencesComponent = class _MesCompetencesComponent {
  formationsService;
  router;
  loading = true;
  error = "";
  data = null;
  recherche = "";
  /** Chip domaine actif — null = tous les domaines */
  domaineFiltre = null;
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
  get stats() {
    return this.data?.stats ?? null;
  }
  get competencesAcquises() {
    const all = this.data?.competences_a_plat ?? [];
    if (!this.recherche.trim())
      return all;
    return all.filter((c) => c.toLowerCase().includes(this.recherche.toLowerCase()));
  }
  // ── Chips ─────────────────────────────────────────────────────────────────
  /** Tous les groupes bruts (sans filtre chip ni recherche), pour alimenter les chips. */
  get tousGroupes() {
    return this.buildGroupes(
      this.data?.par_formation.acquises ?? [],
      this.data?.domaine_user ?? null,
      "",
      // pas de filtre recherche pour les chips
      null
    );
  }
  /** Domaines disponibles pour les chips (hors domaine principal),
   *  triés par nombre de compétences décroissant. */
  get domainesDisponibles() {
    const domaineUserId = this.data?.domaine_user?.id;
    return this.tousGroupes.filter((g) => !g.isPrimary).sort((a, b) => b.competences.length - a.competences.length).map((g) => g.domaine);
  }
  /** Groupe brut du domaine principal (pour le chip avec son count). */
  get groupePrincipalBrut() {
    return this.tousGroupes.find((g) => g.isPrimary) ?? null;
  }
  /** Nb compétences pour un domaine donné (affiché dans le badge chip). */
  getNbCompetencesDomaine(domaineId) {
    return this.tousGroupes.find((g) => g.domaine.id === domaineId)?.competences.length ?? 0;
  }
  setDomaineFiltre(id) {
    this.domaineFiltre = id;
  }
  // ── Groupes finaux (avec filtre chip + recherche) ─────────────────────────
  get groupesFinaux() {
    return this.buildGroupes(this.data?.par_formation.acquises ?? [], this.data?.domaine_user ?? null, this.recherche, this.domaineFiltre);
  }
  get hasGroupes() {
    return this.groupesFinaux.length > 0;
  }
  get totalDomainesBrut() {
    return this.tousGroupes.length;
  }
  // ── Builder central ───────────────────────────────────────────────────────
  // Toute la logique de regroupement est ici pour éviter la duplication.
  buildGroupes(formations, domaineUser, recherche, domaineFiltre) {
    const q = recherche.toLowerCase().trim();
    const formationsFiltrees = formations.map((f) => __spreadProps(__spreadValues({}, f), {
      competences: q ? f.competences.filter((c) => c.toLowerCase().includes(q)) : f.competences
    })).filter((f) => f.competences.length > 0);
    const map = /* @__PURE__ */ new Map();
    for (const f of formationsFiltrees) {
      const key = f.domaine?.id ?? "autres";
      if (!map.has(key)) {
        const domaine = f.domaine ?? {
          id: 0,
          nom: "Autres comp\xE9tences",
          slug: "autres",
          couleur: "#94a3b8",
          icone: "isax-category"
        };
        map.set(key, {
          domaine,
          competences: [],
          formations: [],
          isPrimary: domaineUser ? domaine.id === domaineUser.id : false
        });
      }
      const grp = map.get(key);
      grp.formations.push(f);
      const existing = new Set(grp.competences);
      f.competences.forEach((c) => {
        if (!existing.has(c))
          grp.competences.push(c);
      });
    }
    let groups = Array.from(map.values());
    if (domaineUser && !groups.some((g) => g.isPrimary)) {
      const idx = groups.findIndex((g) => g.domaine.id === domaineUser.id);
      if (idx >= 0)
        groups[idx].isPrimary = true;
    }
    if (domaineFiltre !== null) {
      groups = groups.filter((g) => g.domaine.id === domaineFiltre);
    }
    groups.sort((a, b) => {
      if (a.isPrimary && !b.isPrimary)
        return -1;
      if (!a.isPrimary && b.isPrimary)
        return 1;
      return b.competences.length - a.competences.length;
    });
    return groups;
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  getDomaineColor(domaine, index = 0) {
    return domaine.couleur ?? FALLBACK_COLORS[index % FALLBACK_COLORS.length];
  }
  getDomaineColorLight(domaine, index = 0) {
    return this.getDomaineColor(domaine, index) + "18";
  }
  getDomaineIcon(domaine) {
    return domaine.icone ?? "isax-category";
  }
  allerVersFormation(formationId) {
    this.router.navigate(["/courses/course-details-2", formationId]);
  }
  formatDateFr(dateStr) {
    if (!dateStr)
      return "";
    const d = new Date(dateStr);
    if (isNaN(d.getTime()))
      return "";
    return `${d.getDate()} ${this.moisFr[d.getMonth()]} ${d.getFullYear()}`;
  }
  onRecherche(event) {
    this.recherche = event.target.value;
  }
  trackByDomaine(_, g) {
    return g.domaine.id;
  }
  trackByDomaine2(_, d) {
    return d.id;
  }
  static \u0275fac = function MesCompetencesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MesCompetencesComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MesCompetencesComponent, selectors: [["app-mes-competences"]], decls: 3, vars: 3, consts: [["emptyState", ""], ["class", "qq-loading", 4, "ngIf"], ["class", "cp-error", 4, "ngIf"], [4, "ngIf"], [1, "qq-loading"], [1, "qq-loading__ring"], [1, "cp-error"], [1, "isax", "isax-warning-2"], [1, "cp-btn", "cp-btn--primary", 3, "click"], [1, "isax", "isax-refresh", "me-2"], [1, "cp-header", "mb-4"], [1, "cp-header__left"], [1, "cp-header__title"], [1, "isax", "isax-medal-star", "me-2", 2, "color", "#069b8f"], [1, "cp-header__sub"], ["class", "cp-header__domaine", 4, "ngIf"], ["class", "cp-stats mb-4", 4, "ngIf"], [1, "cp-toolbar", "mb-4"], [1, "cp-toolbar-row"], [1, "cp-search"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Rechercher une comp\xE9tence...", 1, "cp-search__input", 3, "input", "value"], ["class", "cp-search-hint", 4, "ngIf"], ["class", "cp-filter-hint", 4, "ngIf"], ["class", "cp-chips", 4, "ngIf"], ["class", "cp-domaine-grid", 4, "ngIf", "ngIfElse"], [1, "cp-header__domaine"], [1, "cp-domaine-badge"], [1, "cp-stats", "mb-4"], [1, "cp-stat-main"], [1, "cp-stat-main__circle"], ["viewBox", "0 0 100 100", 1, "cp-circle-svg"], ["cx", "50", "cy", "50", "r", "42", "stroke-width", "8", 1, "cp-circle-track"], ["cx", "50", "cy", "50", "r", "42", "stroke-width", "8", "stroke-dasharray", "263.9", 1, "cp-circle-fill"], [1, "cp-stat-main__value"], [1, "cp-stat-main__info"], [1, "cp-stat-main__label"], [1, "cp-stat-main__sub"], [1, "cp-stat-cards"], [1, "cp-stat-card", "cp-stat-card--green"], [1, "isax", "isax-tick-circle"], [1, "cp-stat-card__value"], [1, "cp-stat-card__label"], [1, "cp-stat-card", "cp-stat-card--teal"], [1, "isax", "isax-category"], ["class", "cp-stat-card", 3, "--d-color", "--d-color-lt", 4, "ngIf"], [1, "cp-stat-card"], [1, "cp-search-hint"], [1, "cp-filter-hint"], [1, "isax", "isax-filter"], [1, "cp-filter-hint__clear", 3, "click"], [1, "isax", "isax-close-circle"], [1, "cp-chips"], [1, "cp-chip", 3, "click"], [1, "cp-chip__count"], ["class", "cp-chip cp-chip--principal", 3, "cp-chip--active", "--chip-color", "click", 4, "ngIf"], ["class", "cp-chip", 3, "cp-chip--active", "--chip-color", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cp-chip", "cp-chip--principal", 3, "click"], [1, "isax", "isax-star-1"], [1, "cp-domaine-grid"], ["class", "cp-domaine-card", 3, "cp-domaine-card--primary", "--d-color", "--d-color-lt", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cp-domaine-card"], ["class", "cp-domaine-primary-tag", 4, "ngIf"], [1, "cp-domaine-card__header"], [1, "cp-domaine-card__icon"], [1, "cp-domaine-card__title"], [1, "cp-domaine-card__count"], [1, "cp-badges", "cp-badges--sm", "mt-3"], ["class", "cp-badge cp-badge--acquis", 4, "ngFor", "ngForOf"], [1, "cp-domaine-card__formations", "mt-3"], [1, "cp-domaine-card__formations-label"], [1, "isax", "isax-book-1", "me-1"], [1, "cp-formation-chips"], ["class", "cp-formation-chip", 3, "click", 4, "ngFor", "ngForOf"], [1, "cp-domaine-primary-tag"], [1, "isax", "isax-star-1", "me-1"], [1, "cp-badge", "cp-badge--acquis"], [1, "isax", "isax-verify", "me-1"], [1, "cp-formation-chip", 3, "click"], ["class", "cp-formation-chip__date", 4, "ngIf"], [1, "cp-formation-chip__date"], [1, "cp-empty"], [1, "isax", "isax-medal-star", "cp-empty__icon"], [1, "cp-btn-link", 3, "click"]], template: function MesCompetencesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MesCompetencesComponent_div_0_Template, 8, 0, "div", 1)(1, MesCompetencesComponent_div_1_Template, 7, 1, "div", 2)(2, MesCompetencesComponent_ng_container_2_Template, 21, 8, "ng-container", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ['\n\n.qq-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes _ngcontent-%COMP%_qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cp-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  gap: 12px;\n}\n.cp-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ef4444;\n}\n.cp-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.cp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.cp-header__left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cp-header__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n}\n.cp-header__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.cp-domaine-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 16px;\n  border-radius: 99px;\n  border: 1.5px solid;\n}\n.cp-domaine-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.cp-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cp-stat-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  padding: 20px 24px;\n  flex-shrink: 0;\n}\n.cp-stat-main__circle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  flex-shrink: 0;\n}\n.cp-stat-main__value[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n  font-weight: 900;\n  color: #0f172a;\n}\n.cp-stat-main__label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.cp-stat-main__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.cp-circle-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.cp-circle-track[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #f1f5f9;\n}\n.cp-circle-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #069b8f;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.8s ease;\n}\n.cp-stat-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.cp-stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 20px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  flex: 1;\n  min-width: 140px;\n}\n.cp-stat-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n  flex-shrink: 0;\n}\n.cp-stat-card__value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.cp-stat-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.cp-stat-card--green[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.cp-stat-card--orange[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.cp-stat-card--teal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.cp-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cp-toolbar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cp-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.cp-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  flex: 1;\n  max-width: 420px;\n  transition: all 0.2s ease;\n}\n.cp-search[_ngcontent-%COMP%]:focus-within {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.cp-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.cp-search__input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: #334155;\n  background: transparent;\n  width: 100%;\n}\n.cp-search__input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.cp-search-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.cp-filter-hint[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #64748b;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 99px;\n  padding: 5px 10px 5px 12px;\n  white-space: nowrap;\n  margin-left: auto;\n}\n.cp-filter-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n}\n.cp-filter-hint__clear[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px 3px 8px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.cp-filter-hint__clear[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ef4444;\n}\n.cp-filter-hint__clear[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #ef4444;\n  color: #ef4444;\n}\n.cp-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 7px 14px 7px 12px;\n  border-radius: 99px;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  color: #64748b;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  line-height: 1;\n}\n.cp-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-shrink: 0;\n  color: #94a3b8;\n  transition: all 0.2s ease;\n}\n.cp-chip__count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 6px;\n  border-radius: 99px;\n  background: #f1f5f9;\n  color: #64748b;\n  font-size: 11px;\n  font-weight: 700;\n  transition: all 0.2s ease;\n}\n.cp-chip[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  color: #334155;\n}\n.cp-chip[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.cp-chip--active[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--chip-color, #069b8f) 10%, white);\n  border-color: var(--chip-color, #069b8f);\n  color: var(--chip-color, #069b8f);\n  font-weight: 700;\n}\n.cp-chip--active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--chip-color, #069b8f);\n}\n.cp-chip--active[_ngcontent-%COMP%]   .cp-chip__count[_ngcontent-%COMP%] {\n  background: var(--chip-color, #069b8f);\n  color: #fff;\n}\n.cp-chip[_ngcontent-%COMP%]:first-child {\n  --chip-color: #069b8f;\n}\n.cp-chip--principal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--chip-color, #069b8f);\n}\n.cp-chip--principal.cp-chip--active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--chip-color, #069b8f);\n}\n.cp-domaine-principal[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid var(--dp-color);\n  border-radius: 28px;\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--dp-color) 8%, transparent), 0 1px 4px rgba(0, 0, 0, 0.06);\n  padding: 24px 28px;\n  position: relative;\n  overflow: hidden;\n}\n.cp-domaine-principal[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--dp-color-lt) 0%,\n      transparent 60%);\n  pointer-events: none;\n  border-radius: inherit;\n}\n.cp-domaine-principal__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--dp-color);\n  background: var(--dp-color-lt);\n  border: 1.5px solid color-mix(in srgb, var(--dp-color) 25%, transparent);\n  padding: 4px 12px;\n  border-radius: 99px;\n  margin-bottom: 16px;\n  position: relative;\n}\n.cp-domaine-principal__badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.cp-domaine-principal__body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n  margin-bottom: 4px;\n}\n.cp-domaine-principal__icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: var(--dp-color-lt);\n  color: var(--dp-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  flex-shrink: 0;\n  border: 1.5px solid color-mix(in srgb, var(--dp-color) 20%, transparent);\n}\n.cp-domaine-principal__title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.cp-domaine-principal__count[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  background: var(--dp-color-lt);\n  color: var(--dp-color);\n  border: 1.5px solid color-mix(in srgb, var(--dp-color) 25%, transparent);\n  padding: 6px 16px;\n  border-radius: 99px;\n  flex-shrink: 0;\n}\n.cp-domaine-principal__formations[_ngcontent-%COMP%] {\n  padding-top: 14px;\n  border-top: 1px solid color-mix(in srgb, var(--dp-color) 15%, transparent);\n  position: relative;\n}\n.cp-domaine-principal__formations-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 10px;\n}\n.cp-domaine-principal__formations-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--dp-color);\n}\n.cp-domaine-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .cp-domaine-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cp-domaine-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  padding: 22px;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n.cp-domaine-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.cp-domaine-card--primary[_ngcontent-%COMP%] {\n  border-color: var(--d-color);\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.cp-domaine-card--primary[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--d-color-lt) 0%,\n      transparent 55%);\n  pointer-events: none;\n}\n.cp-domaine-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n}\n.cp-domaine-card__icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  background: var(--d-color-lt);\n  color: var(--d-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.cp-domaine-card__title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.cp-domaine-card__count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  background: var(--d-color-lt);\n  color: var(--d-color);\n  padding: 4px 12px;\n  border-radius: 99px;\n  flex-shrink: 0;\n}\n.cp-domaine-card__formations[_ngcontent-%COMP%] {\n  padding-top: 14px;\n  border-top: 1px solid #f1f5f9;\n}\n.cp-domaine-card__formations-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n}\n.cp-domaine-card__formations-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.cp-domaine-primary-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--d-color);\n  background: var(--d-color-lt);\n  border: 1px solid color-mix(in srgb, var(--d-color) 25%, transparent);\n  padding: 3px 10px;\n  border-radius: 99px;\n  margin-bottom: 14px;\n  position: relative;\n}\n.cp-domaine-primary-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.cp-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  position: relative;\n}\n.cp-badges--sm[_ngcontent-%COMP%]   .cp-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 4px 10px;\n}\n.cp-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 700;\n  transition: all 0.2s ease;\n  cursor: default;\n}\n.cp-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.cp-badge--acquis[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: rgb(13.9701492537, 161.5298507463, 112.6343283582);\n  border: 1.5px solid rgba(16, 185, 129, 0.2);\n}\n.cp-badge--acquis[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.15);\n  transform: translateY(-1px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.cp-badge--encours[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: rgb(172.4330708661, 110.9507874016, 7.0669291339);\n  border: 1.5px solid rgba(245, 158, 11, 0.2);\n}\n.cp-badge--encours[_ngcontent-%COMP%]:hover {\n  background: rgba(245, 158, 11, 0.15);\n  transform: translateY(-1px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.cp-formation-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.cp-formation-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 8px 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 12px;\n  font-weight: 600;\n  color: #334155;\n}\n.cp-formation-chip[_ngcontent-%COMP%]:hover {\n  background: var(--dp-color-lt, var(--d-color-lt));\n  border-color: var(--dp-color, var(--d-color));\n  color: var(--dp-color, var(--d-color));\n}\n.cp-formation-chip__date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.cp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n}\n.cp-btn--primary[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.cp-btn--primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.cp-btn-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  background: none;\n  border: 1.5px solid rgba(6, 155, 143, 0.3);\n  color: #069b8f;\n  padding: 6px 14px;\n  border-radius: 99px;\n  transition: all 0.2s ease;\n}\n.cp-btn-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cp-btn-link[_ngcontent-%COMP%]:hover {\n  background: #e6f7f5;\n  border-color: #069b8f;\n}\n.cp-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n  gap: 10px;\n}\n.cp-empty__icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  color: #069b8f;\n  opacity: 0.25;\n}\n.cp-empty[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cp-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .cp-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cp-stat-main[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cp-stat-cards[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cp-toolbar-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .cp-search[_ngcontent-%COMP%] {\n    max-width: none;\n    flex: 1 1 100%;\n  }\n  .cp-filter-hint[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .cp-domaine-principal[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n  }\n  .cp-domaine-principal__title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=mes-competences.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MesCompetencesComponent, [{
    type: Component,
    args: [{ selector: "app-mes-competences", standalone: true, imports: [CommonModule, RouterModule], template: `<!-- LOADING -->\r
<div class="qq-loading" *ngIf="loading">\r
  <div class="qq-loading__ring">\r
    <div></div><div></div><div></div><div></div>\r
  </div>\r
  <p>Chargement de vos comp\xE9tences acquises...</p>\r
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
  <!-- \u2500\u2500 HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="cp-header mb-4">\r
    <div class="cp-header__left">\r
      <h3 class="cp-header__title">\r
        <i class="isax isax-medal-star me-2" style="color:#069b8f"></i>\r
        Mes Comp\xE9tences Acquises\r
      </h3>\r
      <p class="cp-header__sub">Comp\xE9tences valid\xE9es \xE0 travers vos formations termin\xE9es</p>\r
    </div>\r
    <div class="cp-header__domaine" *ngIf="data.domaine_user">\r
      <div class="cp-domaine-badge"\r
           [style.background]="getDomaineColorLight(data.domaine_user)"\r
           [style.color]="getDomaineColor(data.domaine_user)"\r
           [style.border-color]="getDomaineColor(data.domaine_user) + '40'">\r
        <i class="isax {{ getDomaineIcon(data.domaine_user) }} me-1"></i>\r
        {{ data.domaine_user.nom }}\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 STATS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="cp-stats mb-4" *ngIf="stats">\r
    <div class="cp-stat-main">\r
      <div class="cp-stat-main__circle">\r
        <svg viewBox="0 0 100 100" class="cp-circle-svg">\r
          <circle class="cp-circle-track" cx="50" cy="50" r="42" stroke-width="8"/>\r
          <circle class="cp-circle-fill"  cx="50" cy="50" r="42" stroke-width="8"\r
            stroke-dasharray="263.9"\r
            [attr.stroke-dashoffset]="0"/>\r
        </svg>\r
        <div class="cp-stat-main__value">{{ stats.total_acquises }}</div>\r
      </div>\r
      <div class="cp-stat-main__info">\r
        <div class="cp-stat-main__label">Comp\xE9tences acquises</div>\r
        <div class="cp-stat-main__sub">\r
          Issues de {{ stats.formations_terminees }} formation(s) termin\xE9e(s) <br>\r
          et dont le quiz final a \xE9t\xE9 valid\xE9\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="cp-stat-cards">\r
      <div class="cp-stat-card cp-stat-card--green">\r
        <i class="isax isax-tick-circle"></i>\r
        <div>\r
          <div class="cp-stat-card__value">{{ stats.total_acquises }}</div>\r
          <div class="cp-stat-card__label">Comp\xE9tences acquises</div>\r
        </div>\r
      </div>\r
      <div class="cp-stat-card cp-stat-card--teal">\r
        <i class="isax isax-category"></i>\r
        <div>\r
          <div class="cp-stat-card__value">{{ totalDomainesBrut }}</div>\r
          <div class="cp-stat-card__label">Domaines couverts</div>\r
        </div>\r
      </div>\r
      <div class="cp-stat-card" *ngIf="data.domaine_user"\r
           [style.--d-color]="getDomaineColor(data.domaine_user)"\r
           [style.--d-color-lt]="getDomaineColorLight(data.domaine_user)">\r
        <i class="isax {{ getDomaineIcon(data.domaine_user) }}"\r
           [style.color]="getDomaineColor(data.domaine_user)"></i>\r
        <div>\r
          <div class="cp-stat-card__value"\r
               [style.color]="getDomaineColor(data.domaine_user)">\r
            {{ data.domaine_user.nom }}\r
          </div>\r
          <div class="cp-stat-card__label">Mon domaine</div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 TOOLBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="cp-toolbar mb-4">\r
\r
    <!-- Ligne 1 : search + hints actifs -->\r
    <div class="cp-toolbar-row">\r
\r
      <div class="cp-search">\r
        <i class="isax isax-search-normal-1"></i>\r
        <input\r
          type="text"\r
          placeholder="Rechercher une comp\xE9tence..."\r
          [value]="recherche"\r
          (input)="onRecherche($event)"\r
          class="cp-search__input"\r
        />\r
      </div>\r
\r
      <div class="cp-search-hint" *ngIf="recherche">\r
        {{ competencesAcquises.length }} r\xE9sultat(s) pour \xAB {{ recherche }} \xBB\r
      </div>\r
\r
      <div class="cp-filter-hint" *ngIf="domaineFiltre !== null">\r
        <i class="isax isax-filter"></i>\r
        Domaine filtr\xE9 \xB7\r
        <button class="cp-filter-hint__clear" (click)="setDomaineFiltre(null)">\r
          Tout afficher <i class="isax isax-close-circle"></i>\r
        </button>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Ligne 2 : chips de filtre par domaine -->\r
    <div class="cp-chips" *ngIf="totalDomainesBrut > 1">\r
\r
      <!-- Chip "Tous" -->\r
      <button\r
        class="cp-chip"\r
        [class.cp-chip--active]="domaineFiltre === null"\r
        (click)="setDomaineFiltre(null)">\r
        <i class="isax isax-category"></i>\r
        Tous\r
        <span class="cp-chip__count">{{ totalDomainesBrut }}</span>\r
      </button>\r
\r
      <!-- Chip domaine principal -->\r
      <button\r
        class="cp-chip cp-chip--principal"\r
        *ngIf="data.domaine_user && groupePrincipalBrut"\r
        [class.cp-chip--active]="domaineFiltre === data.domaine_user.id"\r
        [style.--chip-color]="getDomaineColor(data.domaine_user)"\r
        (click)="setDomaineFiltre(data.domaine_user.id)">\r
        <i class="isax isax-star-1"></i>\r
        {{ data.domaine_user.nom }}\r
        <span class="cp-chip__count">{{ groupePrincipalBrut.competences.length }}</span>\r
      </button>\r
\r
      <!-- Chips autres domaines -->\r
      <button\r
        class="cp-chip"\r
        *ngFor="let d of domainesDisponibles; let i = index; trackBy: trackByDomaine2"\r
        [class.cp-chip--active]="domaineFiltre === d.id"\r
        [style.--chip-color]="getDomaineColor(d, i)"\r
        (click)="setDomaineFiltre(d.id)">\r
        <i class="isax {{ getDomaineIcon(d) }}"></i>\r
        {{ d.nom }}\r
        <span class="cp-chip__count">{{ getNbCompetencesDomaine(d.id) }}</span>\r
      </button>\r
\r
    </div>\r
\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- GRILLE PAR DOMAINE                                          -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="cp-domaine-grid" *ngIf="hasGroupes; else emptyState">\r
\r
    <div class="cp-domaine-card"\r
         *ngFor="let grp of groupesFinaux; let i = index; trackBy: trackByDomaine"\r
         [class.cp-domaine-card--primary]="grp.isPrimary"\r
         [style.--d-color]="getDomaineColor(grp.domaine, i)"\r
         [style.--d-color-lt]="getDomaineColorLight(grp.domaine, i)">\r
\r
      <!-- Tag domaine principal -->\r
      <div class="cp-domaine-primary-tag" *ngIf="grp.isPrimary">\r
        <i class="isax isax-star-1 me-1"></i>Mon domaine principal\r
      </div>\r
\r
      <!-- En-t\xEAte -->\r
      <div class="cp-domaine-card__header">\r
        <div class="cp-domaine-card__icon">\r
          <i class="isax {{ getDomaineIcon(grp.domaine) }}"></i>\r
        </div>\r
        <div class="cp-domaine-card__title">{{ grp.domaine.nom }}</div>\r
        <span class="cp-domaine-card__count">{{ grp.competences.length }}</span>\r
      </div>\r
\r
      <!-- Badges comp\xE9tences -->\r
      <div class="cp-badges cp-badges--sm mt-3">\r
        <div class="cp-badge cp-badge--acquis" *ngFor="let c of grp.competences">\r
          <i class="isax isax-verify me-1"></i>{{ c }}\r
        </div>\r
      </div>\r
\r
      <!-- Formations li\xE9es -->\r
      <div class="cp-domaine-card__formations mt-3">\r
        <div class="cp-domaine-card__formations-label">\r
          <i class="isax isax-book-1 me-1"></i>Formations termin\xE9es\r
        </div>\r
        <div class="cp-formation-chips">\r
          <div class="cp-formation-chip"\r
               *ngFor="let f of grp.formations"\r
               (click)="allerVersFormation(f.formation_id)">\r
            <span>{{ f.formation_titre }}</span>\r
            <span class="cp-formation-chip__date" *ngIf="f.date_fin">\r
              {{ formatDateFr(f.date_fin) }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- \xC9tat vide -->\r
  <ng-template #emptyState>\r
    <div class="cp-empty">\r
      <i class="isax isax-medal-star cp-empty__icon"></i>\r
      <h6>Aucune comp\xE9tence d\xE9bloqu\xE9e</h6>\r
      <p *ngIf="recherche">Aucun r\xE9sultat pour \xAB {{ recherche }} \xBB</p>\r
      <p *ngIf="domaineFiltre !== null && !recherche">\r
        Aucune comp\xE9tence dans ce domaine.\r
        <button class="cp-btn-link" (click)="setDomaineFiltre(null)">Voir tous les domaines</button>\r
      </p>\r
      <p *ngIf="!recherche && domaineFiltre === null">\r
        Terminez une formation <strong>et r\xE9ussissez le quiz final</strong>\r
        pour d\xE9bloquer vos comp\xE9tences.\r
      </p>\r
    </div>\r
  </ng-template>\r
\r
</ng-container>`, styles: ['/* src/app/features/student/mes-competences/mes-competences.component.scss */\n.qq-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring div:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring div:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring div:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cp-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  gap: 12px;\n}\n.cp-error i {\n  font-size: 3rem;\n  color: #ef4444;\n}\n.cp-error p {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.cp-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.cp-header__left {\n  flex: 1;\n}\n.cp-header__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n}\n.cp-header__sub {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.cp-domaine-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 16px;\n  border-radius: 99px;\n  border: 1.5px solid;\n}\n.cp-domaine-badge i {\n  font-size: 15px;\n}\n.cp-stats {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cp-stat-main {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  padding: 20px 24px;\n  flex-shrink: 0;\n}\n.cp-stat-main__circle {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  flex-shrink: 0;\n}\n.cp-stat-main__value {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n  font-weight: 900;\n  color: #0f172a;\n}\n.cp-stat-main__label {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.cp-stat-main__sub {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.cp-circle-svg {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.cp-circle-track {\n  fill: none;\n  stroke: #f1f5f9;\n}\n.cp-circle-fill {\n  fill: none;\n  stroke: #069b8f;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.8s ease;\n}\n.cp-stat-cards {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.cp-stat-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 20px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  flex: 1;\n  min-width: 140px;\n}\n.cp-stat-card i {\n  font-size: 26px;\n  flex-shrink: 0;\n}\n.cp-stat-card__value {\n  font-size: 26px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.cp-stat-card__label {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.cp-stat-card--green i {\n  color: #10b981;\n}\n.cp-stat-card--orange i {\n  color: #f59e0b;\n}\n.cp-stat-card--teal i {\n  color: #069b8f;\n}\n.cp-toolbar {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cp-toolbar-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cp-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.cp-search {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  flex: 1;\n  max-width: 420px;\n  transition: all 0.2s ease;\n}\n.cp-search:focus-within {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.cp-search i {\n  font-size: 16px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.cp-search__input {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: #334155;\n  background: transparent;\n  width: 100%;\n}\n.cp-search__input::placeholder {\n  color: #94a3b8;\n}\n.cp-search-hint {\n  font-size: 12px;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.cp-filter-hint {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #64748b;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 99px;\n  padding: 5px 10px 5px 12px;\n  white-space: nowrap;\n  margin-left: auto;\n}\n.cp-filter-hint i {\n  font-size: 13px;\n  color: #94a3b8;\n}\n.cp-filter-hint__clear {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px 3px 8px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.cp-filter-hint__clear i {\n  font-size: 12px;\n  color: #ef4444;\n}\n.cp-filter-hint__clear:hover {\n  background: #fef2f2;\n  border-color: #ef4444;\n  color: #ef4444;\n}\n.cp-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 7px 14px 7px 12px;\n  border-radius: 99px;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  color: #64748b;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  line-height: 1;\n}\n.cp-chip i {\n  font-size: 14px;\n  flex-shrink: 0;\n  color: #94a3b8;\n  transition: all 0.2s ease;\n}\n.cp-chip__count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 6px;\n  border-radius: 99px;\n  background: #f1f5f9;\n  color: #64748b;\n  font-size: 11px;\n  font-weight: 700;\n  transition: all 0.2s ease;\n}\n.cp-chip:hover {\n  border-color: #cbd5e1;\n  color: #334155;\n}\n.cp-chip:hover i {\n  color: #475569;\n}\n.cp-chip--active {\n  background: color-mix(in srgb, var(--chip-color, #069b8f) 10%, white);\n  border-color: var(--chip-color, #069b8f);\n  color: var(--chip-color, #069b8f);\n  font-weight: 700;\n}\n.cp-chip--active i {\n  color: var(--chip-color, #069b8f);\n}\n.cp-chip--active .cp-chip__count {\n  background: var(--chip-color, #069b8f);\n  color: #fff;\n}\n.cp-chip:first-child {\n  --chip-color: #069b8f;\n}\n.cp-chip--principal i {\n  color: var(--chip-color, #069b8f);\n}\n.cp-chip--principal.cp-chip--active i {\n  color: var(--chip-color, #069b8f);\n}\n.cp-domaine-principal {\n  background: #fff;\n  border: 2px solid var(--dp-color);\n  border-radius: 28px;\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--dp-color) 8%, transparent), 0 1px 4px rgba(0, 0, 0, 0.06);\n  padding: 24px 28px;\n  position: relative;\n  overflow: hidden;\n}\n.cp-domaine-principal::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--dp-color-lt) 0%,\n      transparent 60%);\n  pointer-events: none;\n  border-radius: inherit;\n}\n.cp-domaine-principal__badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--dp-color);\n  background: var(--dp-color-lt);\n  border: 1.5px solid color-mix(in srgb, var(--dp-color) 25%, transparent);\n  padding: 4px 12px;\n  border-radius: 99px;\n  margin-bottom: 16px;\n  position: relative;\n}\n.cp-domaine-principal__badge i {\n  font-size: 12px;\n}\n.cp-domaine-principal__body {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n  margin-bottom: 4px;\n}\n.cp-domaine-principal__icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: var(--dp-color-lt);\n  color: var(--dp-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  flex-shrink: 0;\n  border: 1.5px solid color-mix(in srgb, var(--dp-color) 20%, transparent);\n}\n.cp-domaine-principal__title {\n  flex: 1;\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.cp-domaine-principal__count {\n  font-size: 14px;\n  font-weight: 800;\n  background: var(--dp-color-lt);\n  color: var(--dp-color);\n  border: 1.5px solid color-mix(in srgb, var(--dp-color) 25%, transparent);\n  padding: 6px 16px;\n  border-radius: 99px;\n  flex-shrink: 0;\n}\n.cp-domaine-principal__formations {\n  padding-top: 14px;\n  border-top: 1px solid color-mix(in srgb, var(--dp-color) 15%, transparent);\n  position: relative;\n}\n.cp-domaine-principal__formations-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 10px;\n}\n.cp-domaine-principal__formations-label i {\n  font-size: 13px;\n  color: var(--dp-color);\n}\n.cp-domaine-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .cp-domaine-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.cp-domaine-card {\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  padding: 22px;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n.cp-domaine-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.cp-domaine-card--primary {\n  border-color: var(--d-color);\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.cp-domaine-card--primary::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--d-color-lt) 0%,\n      transparent 55%);\n  pointer-events: none;\n}\n.cp-domaine-card__header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n}\n.cp-domaine-card__icon {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  background: var(--d-color-lt);\n  color: var(--d-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.cp-domaine-card__title {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 800;\n  color: #0f172a;\n}\n.cp-domaine-card__count {\n  font-size: 12px;\n  font-weight: 800;\n  background: var(--d-color-lt);\n  color: var(--d-color);\n  padding: 4px 12px;\n  border-radius: 99px;\n  flex-shrink: 0;\n}\n.cp-domaine-card__formations {\n  padding-top: 14px;\n  border-top: 1px solid #f1f5f9;\n}\n.cp-domaine-card__formations-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n}\n.cp-domaine-card__formations-label i {\n  font-size: 12px;\n}\n.cp-domaine-primary-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: var(--d-color);\n  background: var(--d-color-lt);\n  border: 1px solid color-mix(in srgb, var(--d-color) 25%, transparent);\n  padding: 3px 10px;\n  border-radius: 99px;\n  margin-bottom: 14px;\n  position: relative;\n}\n.cp-domaine-primary-tag i {\n  font-size: 10px;\n}\n.cp-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  position: relative;\n}\n.cp-badges--sm .cp-badge {\n  font-size: 11px;\n  padding: 4px 10px;\n}\n.cp-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 700;\n  transition: all 0.2s ease;\n  cursor: default;\n}\n.cp-badge i {\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.cp-badge--acquis {\n  background: #f0fdf4;\n  color: rgb(13.9701492537, 161.5298507463, 112.6343283582);\n  border: 1.5px solid rgba(16, 185, 129, 0.2);\n}\n.cp-badge--acquis:hover {\n  background: rgba(16, 185, 129, 0.15);\n  transform: translateY(-1px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.cp-badge--encours {\n  background: #fffbeb;\n  color: rgb(172.4330708661, 110.9507874016, 7.0669291339);\n  border: 1.5px solid rgba(245, 158, 11, 0.2);\n}\n.cp-badge--encours:hover {\n  background: rgba(245, 158, 11, 0.15);\n  transform: translateY(-1px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.cp-formation-chips {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.cp-formation-chip {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 8px 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 12px;\n  font-weight: 600;\n  color: #334155;\n}\n.cp-formation-chip:hover {\n  background: var(--dp-color-lt, var(--d-color-lt));\n  border-color: var(--dp-color, var(--d-color));\n  color: var(--dp-color, var(--d-color));\n}\n.cp-formation-chip__date {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.cp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n}\n.cp-btn--primary {\n  background: #069b8f;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.cp-btn--primary:hover {\n  transform: translateY(-1px);\n}\n.cp-btn-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  background: none;\n  border: 1.5px solid rgba(6, 155, 143, 0.3);\n  color: #069b8f;\n  padding: 6px 14px;\n  border-radius: 99px;\n  transition: all 0.2s ease;\n}\n.cp-btn-link i {\n  font-size: 13px;\n}\n.cp-btn-link:hover {\n  background: #e6f7f5;\n  border-color: #069b8f;\n}\n.cp-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n  gap: 10px;\n}\n.cp-empty__icon {\n  font-size: 3.5rem;\n  color: #069b8f;\n  opacity: 0.25;\n}\n.cp-empty h6 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cp-empty p {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .cp-stats {\n    flex-direction: column;\n  }\n  .cp-stat-main {\n    width: 100%;\n  }\n  .cp-stat-cards {\n    width: 100%;\n  }\n  .cp-toolbar-row {\n    flex-wrap: wrap;\n  }\n  .cp-search {\n    max-width: none;\n    flex: 1 1 100%;\n  }\n  .cp-filter-hint {\n    margin-left: 0;\n  }\n  .cp-domaine-principal {\n    padding: 18px 16px;\n  }\n  .cp-domaine-principal__title {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=mes-competences.component.css.map */\n'] }]
  }], () => [{ type: FormationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MesCompetencesComponent, { className: "MesCompetencesComponent", filePath: "app/features/student/mes-competences/mes-competences.component.ts", lineNumber: 60 });
})();
export {
  MesCompetencesComponent
};
//# sourceMappingURL=chunk-3UC7EWPM.js.map
