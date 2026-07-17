import {
  FormationService
} from "./chunk-R5DFAXQH.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  Router,
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
import "./chunk-4MWRP73S.js";

// src/app/features/student/mes-competences-recommandees/mes-competences-recommandees.component.ts
function MesCompetencesRecommandeesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Chargement de vos comp\xE9tences recommand\xE9es...");
    \u0275\u0275elementEnd()();
  }
}
function MesCompetencesRecommandeesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function MesCompetencesRecommandeesComponent_div_1_Template_button_click_4_listener() {
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
function MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_14_div_1_button_9_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatDuree(formation_r6.duree));
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_14_div_1_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_14_div_1_button_9_Template_button_click_0_listener() {
      const formation_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.allerVersFormation(formation_r6.formation_id));
    });
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_14_div_1_button_9_small_4_Template, 2, 1, "small", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(formation_r6.formation_titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r6.duree);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "div", 60);
    \u0275\u0275element(3, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 63);
    \u0275\u0275template(9, MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_14_div_1_button_9_Template, 5, 2, "button", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const competence_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(competence_r7.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", competence_r7.formations.length, " formation(s) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", competence_r7.formations)("ngForTrackBy", ctx_r1.trackByFormation);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_14_div_1_Template, 10, 4, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.competencesPage)("ngForTrackBy", ctx_r1.trackByCompetence);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_15_tr_13_button_9_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", ctx_r1.formatDuree(formation_r9.duree));
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_15_tr_13_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_15_tr_13_button_9_Template_button_click_0_listener() {
      const formation_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.allerVersFormation(formation_r9.formation_id));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_15_tr_13_button_9_small_2_Template, 2, 1, "small", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", formation_r9.formation_titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r9.duree);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_15_tr_13_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_15_tr_13_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const competence_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.allerVersFormation(competence_r11.formations[0].formation_id));
    });
    \u0275\u0275text(1, " Voir ");
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275elementEnd();
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_15_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 69)(3, "span", 70);
    \u0275\u0275element(4, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "div", 71);
    \u0275\u0275template(9, MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_15_tr_13_button_9_Template, 3, 2, "button", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 73);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_15_tr_13_button_14_Template, 3, 0, "button", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const competence_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(competence_r11.nom);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", competence_r11.formations)("ngForTrackBy", ctx_r1.trackByFormation);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(competence_r11.formations.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", competence_r11.formations.length);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "table", 67)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Comp\xE9tence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Formations concern\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_15_tr_13_Template, 15, 5, "tr", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.competencesPage)("ngForTrackBy", ctx_r1.trackByCompetence);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "h5", 40);
    \u0275\u0275text(3, "Liste des comp\xE9tences recommand\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41)(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 43)(8, "button", 44);
    \u0275\u0275listener("click", function MesCompetencesRecommandeesComponent_ng_container_2_div_48_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setViewMode("grid"));
    });
    \u0275\u0275element(9, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 44);
    \u0275\u0275listener("click", function MesCompetencesRecommandeesComponent_ng_container_2_div_48_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setViewMode("list"));
    });
    \u0275\u0275element(11, "i", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 47);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_14_Template, 2, 2, "div", 48)(15, MesCompetencesRecommandeesComponent_ng_container_2_div_48_div_15_Template, 14, 2, "div", 49);
    \u0275\u0275elementStart(16, "div", 50)(17, "div", 51);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 52)(20, "button", 53);
    \u0275\u0275listener("click", function MesCompetencesRecommandeesComponent_ng_container_2_div_48_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275element(21, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 53);
    \u0275\u0275listener("click", function MesCompetencesRecommandeesComponent_ng_container_2_div_48_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275element(23, "i", 55);
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
function MesCompetencesRecommandeesComponent_ng_container_2_ng_template_49_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Aucun r\xE9sultat pour \xAB ", ctx_r1.recherche, " \xBB.");
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_ng_template_49_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Vous avez d\xE9j\xE0 acc\xE8s \xE0 toutes les formations disponibles.");
    \u0275\u0275elementEnd();
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275elementStart(2, "h6");
    \u0275\u0275text(3, "Aucune comp\xE9tence recommand\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MesCompetencesRecommandeesComponent_ng_container_2_ng_template_49_p_4_Template, 2, 1, "p", 3)(5, MesCompetencesRecommandeesComponent_ng_container_2_ng_template_49_p_5_Template, 2, 0, "p", 3);
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
function MesCompetencesRecommandeesComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "h3", 11);
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275text(4, " Comp\xE9tences recommand\xE9es ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6, " Comp\xE9tences que vous pourriez acqu\xE9rir via les formations disponibles. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15)(9, "div", 16);
    \u0275\u0275element(10, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "div", 18);
    \u0275\u0275text(13, "Comp\xE9tences accessibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 19);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 20)(17, "div", 21);
    \u0275\u0275element(18, "i", 22);
    \u0275\u0275elementStart(19, "div")(20, "div", 23);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 24);
    \u0275\u0275text(23, "Formations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 25);
    \u0275\u0275element(25, "i", 26);
    \u0275\u0275elementStart(26, "div")(27, "div", 23);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 24);
    \u0275\u0275text(30, "Comp\xE9tences");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 27);
    \u0275\u0275element(32, "i", 28);
    \u0275\u0275elementStart(33, "div")(34, "div", 23);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 24);
    \u0275\u0275text(37, "Affich\xE9es");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(38, "div", 29)(39, "div", 30);
    \u0275\u0275element(40, "i", 31);
    \u0275\u0275elementStart(41, "input", 32);
    \u0275\u0275listener("input", function MesCompetencesRecommandeesComponent_ng_container_2_Template_input_input_41_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRecherche($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 33)(43, "select", 34);
    \u0275\u0275listener("change", function MesCompetencesRecommandeesComponent_ng_container_2_Template_select_change_43_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTri($event.target.value));
    });
    \u0275\u0275elementStart(44, "option", 35);
    \u0275\u0275text(45, "Trier : Formations \u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 36);
    \u0275\u0275text(47, "Trier : Dur\xE9e \u2193");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(48, MesCompetencesRecommandeesComponent_ng_container_2_div_48_Template, 24, 12, "div", 37)(49, MesCompetencesRecommandeesComponent_ng_container_2_ng_template_49_Template, 6, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const emptyState_r12 = \u0275\u0275reference(50);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate2(" ", ctx_r1.totalCompetences, " comp\xE9tence(s) r\xE9partie(s) sur ", ctx_r1.total, " formation(s) disponible(s) ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalCompetences);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.competencesRecommandees.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.recherche);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.tri);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.hasCompetences)("ngIfElse", emptyState_r12);
  }
}
var MesCompetencesRecommandeesComponent = class _MesCompetencesRecommandeesComponent {
  formationsService;
  router;
  loading = true;
  error = "";
  total = 0;
  formations = [];
  recherche = "";
  tri = "competences";
  viewMode = "grid";
  currentPage = 1;
  pageSize = 4;
  gridPageSize = 4;
  listPageSize = 5;
  imageBase = environment.apiUrl.replace(/\/api$/, "") + "/storage/";
  constructor(formationsService, router) {
    this.formationsService = formationsService;
    this.router = router;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.error = "";
    this.formationsService.getCompetencesRecommandees().subscribe({
      next: (res) => {
        this.formations = res.formations ?? [];
        this.total = res.total ?? 0;
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger les comp\xE9tences recommand\xE9es.";
        this.loading = false;
      }
    });
  }
  get competencesRecommandees() {
    const q = this.recherche.trim().toLowerCase();
    const map = /* @__PURE__ */ new Map();
    this.formations.forEach((formation) => {
      formation.competences.forEach((competence) => {
        const match = !q || competence.toLowerCase().includes(q) || formation.formation_titre.toLowerCase().includes(q);
        if (!match)
          return;
        if (!map.has(competence)) {
          map.set(competence, /* @__PURE__ */ new Map());
        }
        map.get(competence).set(formation.formation_id, formation);
      });
    });
    const list = Array.from(map.entries()).map(([nom, formations]) => ({
      nom,
      formations: Array.from(formations.values())
    }));
    if (this.tri === "competences") {
      return list.sort((a, b) => b.formations.length - a.formations.length || a.nom.localeCompare(b.nom));
    }
    return list.sort((a, b) => this.maxDuree(b.formations) - this.maxDuree(a.formations) || a.nom.localeCompare(b.nom));
  }
  get hasCompetences() {
    return this.competencesRecommandees.length > 0;
  }
  get totalCompetences() {
    const all = /* @__PURE__ */ new Set();
    this.formations.forEach((f) => f.competences.forEach((c) => all.add(c)));
    return all.size;
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.competencesRecommandees.length / this.pageSize));
  }
  get competencesPage() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.competencesRecommandees.slice(start, start + this.pageSize);
  }
  get displayedCount() {
    return this.competencesPage.length;
  }
  setViewMode(mode) {
    this.viewMode = mode;
    this.pageSize = mode === "grid" ? this.gridPageSize : this.listPageSize;
    this.currentPage = 1;
  }
  setTri(t) {
    this.tri = t;
    this.currentPage = 1;
  }
  onRecherche(event) {
    this.recherche = event.target.value;
    this.currentPage = 1;
  }
  nextPage() {
    if (this.currentPage < this.totalPages)
      this.currentPage++;
  }
  prevPage() {
    if (this.currentPage > 1)
      this.currentPage--;
  }
  allerVersFormation(id) {
    this.router.navigate(["/courses/course-details-2", id]);
  }
  getImage(image) {
    if (!image)
      return null;
    if (image.startsWith("http"))
      return image;
    return this.imageBase + image;
  }
  formatDuree(duree) {
    if (!duree)
      return "";
    const n = parseFloat(duree);
    if (isNaN(n))
      return duree;
    return n < 1 ? `${Math.round(n * 60)} min` : `${n}h`;
  }
  maxDuree(formations) {
    return Math.max(...formations.map((f) => parseFloat(f.duree ?? "0") || 0), 0);
  }
  trackByCompetence(_, item) {
    return item.nom;
  }
  trackByFormation(_, item) {
    return item.formation_id;
  }
  static \u0275fac = function MesCompetencesRecommandeesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MesCompetencesRecommandeesComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MesCompetencesRecommandeesComponent, selectors: [["app-mes-competences-recommandees"]], decls: 3, vars: 3, consts: [["emptyState", ""], ["class", "qq-loading", 4, "ngIf"], ["class", "cp-error", 4, "ngIf"], [4, "ngIf"], [1, "qq-loading"], [1, "qq-loading__ring"], [1, "cp-error"], [1, "isax", "isax-warning-2"], [1, "cp-btn", "cp-btn--primary", 3, "click"], [1, "isax", "isax-refresh", "me-2"], [1, "cp-header", "mb-4"], [1, "cp-header__title"], [1, "isax", "isax-lamp-on", "me-2", 2, "color", "#069b8f"], [1, "cp-header__sub"], [1, "cp-stats", "mb-4"], [1, "cp-stat-main"], [1, "cp-stat-main__circle", "cp-stat-main__circle--reco"], [1, "isax", "isax-lamp-on", 2, "font-size", "2rem", "color", "#069b8f"], [1, "cp-stat-main__label"], [1, "cp-stat-main__sub"], [1, "cp-stat-cards"], [1, "cp-stat-card", "cp-stat-card--teal"], [1, "isax", "isax-book-1"], [1, "cp-stat-card__value"], [1, "cp-stat-card__label"], [1, "cp-stat-card", "cp-stat-card--green"], [1, "isax", "isax-medal-star"], [1, "cp-stat-card", "cp-stat-card--indigo"], [1, "isax", "isax-lamp-on"], [1, "cp-toolbar", "mb-4"], [1, "cp-search"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Rechercher une comp\xE9tence ou une formation...", 1, "cp-search__input", 3, "input", "value"], [1, "cp-sort"], [1, "cp-sort__select", 3, "change", "value"], ["value", "competences"], ["value", "duree"], ["class", "cp-results-card", 4, "ngIf", "ngIfElse"], [1, "cp-results-card"], [1, "cp-results-card__top"], [1, "cp-results-card__title"], [1, "cp-results-actions"], [1, "cp-results-count"], [1, "cp-view-toggle"], ["type", "button", 1, "cp-view-toggle__btn", 3, "click"], [1, "isax", "isax-grid-2"], [1, "isax", "isax-row-vertical"], [1, "cp-page-size"], ["class", "cp-competence-list", 4, "ngIf"], ["class", "cp-table-wrap", 4, "ngIf"], [1, "cp-pagination"], [1, "cp-pagination__label"], [1, "cp-pagination__actions"], ["type", "button", 1, "cp-pagination__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], [1, "isax", "isax-arrow-right-3"], [1, "cp-competence-list"], ["class", "cp-competence-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cp-competence-card"], [1, "cp-competence-card__header"], [1, "cp-competence-card__icon"], [1, "cp-competence-card__title"], [1, "cp-competence-card__count"], [1, "cp-formation-list"], ["type", "button", "class", "cp-formation-chip", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "cp-formation-chip", 3, "click"], [1, "cp-table-wrap"], [1, "cp-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cp-table-skill"], [1, "cp-table-skill__icon"], [1, "cp-table-formations"], ["type", "button", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cp-pill"], ["type", "button", "class", "cp-action", 3, "click", 4, "ngIf"], ["type", "button", 3, "click"], ["type", "button", 1, "cp-action", 3, "click"], [1, "cp-empty"], [1, "isax", "isax-lamp-on", "cp-empty__icon"]], template: function MesCompetencesRecommandeesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MesCompetencesRecommandeesComponent_div_0_Template, 8, 0, "div", 1)(1, MesCompetencesRecommandeesComponent_div_1_Template, 7, 1, "div", 2)(2, MesCompetencesRecommandeesComponent_ng_container_2_Template, 51, 9, "ng-container", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n.qq-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes _ngcontent-%COMP%_qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cp-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  gap: 12px;\n  color: #ef4444;\n  text-align: center;\n}\n.cp-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.cp-header__title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cp-header__sub[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.cp-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cp-stat-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px 24px;\n  flex: 1;\n  min-width: 260px;\n}\n.cp-stat-main__circle--reco[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: rgba(6, 155, 143, 0.12);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-stat-main__label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.cp-stat-main__sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.cp-stat-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cp-stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  min-width: 130px;\n}\n.cp-stat-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.cp-stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.cp-stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.cp-stat-card--teal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.cp-stat-card--teal[_ngcontent-%COMP%]   .cp-stat-card__value[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.cp-stat-card--green[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.cp-stat-card--green[_ngcontent-%COMP%]   .cp-stat-card__value[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.cp-stat-card--indigo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.cp-stat-card--indigo[_ngcontent-%COMP%]   .cp-stat-card__value[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.cp-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cp-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  flex: 1;\n  min-width: 220px;\n}\n.cp-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.cp-search__input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.875rem;\n  width: 100%;\n  color: #0f172a;\n}\n.cp-search__input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.cp-sort__select[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 0.875rem;\n  color: #334155;\n  background: #fff;\n  outline: none;\n  cursor: pointer;\n}\n.cp-sort__select[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n}\n.cp-results-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 1px 6px rgba(15, 23, 42, 0.05);\n}\n.cp-results-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 22px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cp-results-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.cp-results-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.cp-results-count[_ngcontent-%COMP%], \n.cp-page-size[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  height: 34px;\n  padding: 0 12px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #334155;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.cp-page-size[_ngcontent-%COMP%] {\n  border: 1px solid rgba(6, 155, 143, 0.22);\n  background: #fff;\n  color: #069b8f;\n}\n.cp-view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px;\n  border: 1px solid #e2e8f0;\n  border-radius: 999px;\n  background: #f8fafc;\n}\n.cp-view-toggle__btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 30px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: #64748b;\n  cursor: pointer;\n}\n.cp-view-toggle__btn--active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #069b8f;\n  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08);\n}\n.cp-competence-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n  padding: 18px;\n}\n.cp-competence-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-left: 4px solid #069b8f;\n  border-radius: 14px;\n  padding: 18px;\n  transition: all 0.2s ease;\n}\n.cp-competence-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.cp-competence-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.cp-competence-card__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 8px;\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-competence-card__title[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n.cp-competence-card__count[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n  border: 1px solid rgba(6, 155, 143, 0.22);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.cp-formation-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px solid #f1f5f9;\n}\n.cp-formation-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 8px 10px;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  font-size: 0.8rem;\n  color: #334155;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.cp-formation-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.cp-formation-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n.cp-formation-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.cp-formation-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(6, 155, 143, 0.12);\n  border-color: rgba(6, 155, 143, 0.22);\n  color: #069b8f;\n}\n.cp-table-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.cp-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 760px;\n  border-collapse: collapse;\n}\n.cp-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  background: #f8fafc;\n  color: #526887;\n  font-size: 0.78rem;\n  font-weight: 800;\n  text-align: left;\n  text-transform: uppercase;\n}\n.cp-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top: 1px solid #f1f5f9;\n  color: #0f172a;\n  vertical-align: top;\n}\n.cp-table-skill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cp-table-skill__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-table-skill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n.cp-table-formations[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.cp-table-formations[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: fit-content;\n  border: 0;\n  background: transparent;\n  color: #475569;\n  padding: 0;\n  font-size: 0.86rem;\n  text-align: left;\n  cursor: pointer;\n}\n.cp-table-formations[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #069b8f;\n  text-decoration: underline;\n}\n.cp-table-formations[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.cp-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 28px;\n  justify-content: center;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #334155;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n.cp-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: 1px solid rgba(6, 155, 143, 0.22);\n  border-radius: 999px;\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n  padding: 6px 12px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.cp-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 22px;\n  border-top: 1px solid #f1f5f9;\n}\n.cp-pagination__label[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.9rem;\n}\n.cp-pagination__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.cp-pagination__btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border: 0;\n  border-radius: 50%;\n  background: #f8fafc;\n  color: #334155;\n  cursor: pointer;\n}\n.cp-pagination__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n}\n.cp-pagination__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.cp-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n}\n.cp-empty__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 12px;\n  display: block;\n  color: #069b8f;\n}\n.cp-empty[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.cp-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.cp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.cp-btn--primary[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n}\n.cp-btn--primary[_ngcontent-%COMP%]:hover {\n  background: #047a6f;\n}\n@media (max-width: 768px) {\n  .cp-stats[_ngcontent-%COMP%], \n   .cp-toolbar[_ngcontent-%COMP%], \n   .cp-results-card__top[_ngcontent-%COMP%], \n   .cp-pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .cp-stat-main[_ngcontent-%COMP%], \n   .cp-search[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n  .cp-competence-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cp-results-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .cp-stat-main[_ngcontent-%COMP%], \n   .cp-competence-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .cp-competence-card__header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .cp-competence-card__count[_ngcontent-%COMP%] {\n    margin-top: 4px;\n  }\n}\n/*# sourceMappingURL=mes-competences-recommandees.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MesCompetencesRecommandeesComponent, [{
    type: Component,
    args: [{ selector: "app-mes-competences-recommandees", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="qq-loading" *ngIf="loading">\r
  <div class="qq-loading__ring">\r
    <div></div><div></div><div></div><div></div>\r
  </div>\r
  <p>Chargement de vos comp\xE9tences recommand\xE9es...</p>\r
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
<ng-container *ngIf="!loading && !error">\r
  <div class="cp-header mb-4">\r
    <h3 class="cp-header__title">\r
      <i class="isax isax-lamp-on me-2" style="color:#069b8f"></i>\r
      Comp\xE9tences recommand\xE9es\r
    </h3>\r
    <p class="cp-header__sub">\r
      Comp\xE9tences que vous pourriez acqu\xE9rir via les formations disponibles.\r
    </p>\r
  </div>\r
\r
  <div class="cp-stats mb-4">\r
    <div class="cp-stat-main">\r
      <div class="cp-stat-main__circle cp-stat-main__circle--reco">\r
        <i class="isax isax-lamp-on" style="font-size:2rem; color:#069b8f"></i>\r
      </div>\r
      <div>\r
        <div class="cp-stat-main__label">Comp\xE9tences accessibles</div>\r
        <div class="cp-stat-main__sub">\r
          {{ totalCompetences }} comp\xE9tence(s) r\xE9partie(s) sur {{ total }} formation(s) disponible(s)\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="cp-stat-cards">\r
      <div class="cp-stat-card cp-stat-card--teal">\r
        <i class="isax isax-book-1"></i>\r
        <div>\r
          <div class="cp-stat-card__value">{{ total }}</div>\r
          <div class="cp-stat-card__label">Formations</div>\r
        </div>\r
      </div>\r
\r
      <div class="cp-stat-card cp-stat-card--green">\r
        <i class="isax isax-medal-star"></i>\r
        <div>\r
          <div class="cp-stat-card__value">{{ totalCompetences }}</div>\r
          <div class="cp-stat-card__label">Comp\xE9tences</div>\r
        </div>\r
      </div>\r
\r
      <div class="cp-stat-card cp-stat-card--indigo">\r
        <i class="isax isax-lamp-on"></i>\r
        <div>\r
          <div class="cp-stat-card__value">{{ competencesRecommandees.length }}</div>\r
          <div class="cp-stat-card__label">Affich\xE9es</div>\r
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
    <div class="cp-sort">\r
      <select class="cp-sort__select" [value]="tri" (change)="setTri($any($event.target).value)">\r
        <option value="competences">Trier : Formations \u2193</option>\r
        <option value="duree">Trier : Dur\xE9e \u2193</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <div class="cp-results-card" *ngIf="hasCompetences; else emptyState">\r
    <div class="cp-results-card__top">\r
      <h5 class="cp-results-card__title">Liste des comp\xE9tences recommand\xE9es</h5>\r
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
            <i class="isax isax-lamp-on"></i>\r
          </div>\r
\r
          <div class="cp-competence-card__title">{{ competence.nom }}</div>\r
\r
          <span class="cp-competence-card__count">\r
            {{ competence.formations.length }} formation(s)\r
          </span>\r
        </div>\r
\r
        <div class="cp-formation-list">\r
          <button type="button"\r
                  class="cp-formation-chip"\r
                  *ngFor="let formation of competence.formations; trackBy: trackByFormation"\r
                  (click)="allerVersFormation(formation.formation_id)">\r
            <i class="isax isax-book-1"></i>\r
            <span>{{ formation.formation_titre }}</span>\r
            <small *ngIf="formation.duree">{{ formatDuree(formation.duree) }}</small>\r
          </button>\r
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
            <th>Action</th>\r
          </tr>\r
        </thead>\r
\r
        <tbody>\r
          <tr *ngFor="let competence of competencesPage; trackBy: trackByCompetence">\r
            <td>\r
              <div class="cp-table-skill">\r
                <span class="cp-table-skill__icon">\r
                  <i class="isax isax-lamp-on"></i>\r
                </span>\r
                <strong>{{ competence.nom }}</strong>\r
              </div>\r
            </td>\r
\r
            <td>\r
              <div class="cp-table-formations">\r
                <button type="button"\r
                        *ngFor="let formation of competence.formations; trackBy: trackByFormation"\r
                        (click)="allerVersFormation(formation.formation_id)">\r
                  {{ formation.formation_titre }}\r
                  <small *ngIf="formation.duree">\xB7 {{ formatDuree(formation.duree) }}</small>\r
                </button>\r
              </div>\r
            </td>\r
\r
            <td>\r
              <span class="cp-pill">{{ competence.formations.length }}</span>\r
            </td>\r
\r
            <td>\r
              <button type="button"\r
                      class="cp-action"\r
                      *ngIf="competence.formations.length"\r
                      (click)="allerVersFormation(competence.formations[0].formation_id)">\r
                Voir\r
                <i class="isax isax-arrow-right-3"></i>\r
              </button>\r
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
      <i class="isax isax-lamp-on cp-empty__icon"></i>\r
      <h6>Aucune comp\xE9tence recommand\xE9e</h6>\r
      <p *ngIf="recherche">Aucun r\xE9sultat pour \xAB {{ recherche }} \xBB.</p>\r
      <p *ngIf="!recherche">Vous avez d\xE9j\xE0 acc\xE8s \xE0 toutes les formations disponibles.</p>\r
    </div>\r
  </ng-template>\r
</ng-container>`, styles: ["/* src/app/features/student/mes-competences-recommandees/mes-competences-recommandees.component.scss */\n.qq-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring div:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring div:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring div:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cp-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  gap: 12px;\n  color: #ef4444;\n  text-align: center;\n}\n.cp-error i {\n  font-size: 2rem;\n}\n.cp-header__title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cp-header__sub {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.cp-stats {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cp-stat-main {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px 24px;\n  flex: 1;\n  min-width: 260px;\n}\n.cp-stat-main__circle--reco {\n  width: 72px;\n  height: 72px;\n  background: rgba(6, 155, 143, 0.12);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-stat-main__label {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.cp-stat-main__sub {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.cp-stat-cards {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cp-stat-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  min-width: 130px;\n}\n.cp-stat-card i {\n  font-size: 1.4rem;\n}\n.cp-stat-card__value {\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.cp-stat-card__label {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.cp-stat-card--teal i,\n.cp-stat-card--teal .cp-stat-card__value {\n  color: #069b8f;\n}\n.cp-stat-card--green i,\n.cp-stat-card--green .cp-stat-card__value {\n  color: #10b981;\n}\n.cp-stat-card--indigo i,\n.cp-stat-card--indigo .cp-stat-card__value {\n  color: #4f46e5;\n}\n.cp-toolbar {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cp-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  flex: 1;\n  min-width: 220px;\n}\n.cp-search i {\n  color: #94a3b8;\n}\n.cp-search__input {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.875rem;\n  width: 100%;\n  color: #0f172a;\n}\n.cp-search__input::placeholder {\n  color: #94a3b8;\n}\n.cp-sort__select {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 0.875rem;\n  color: #334155;\n  background: #fff;\n  outline: none;\n  cursor: pointer;\n}\n.cp-sort__select:focus {\n  border-color: #069b8f;\n}\n.cp-results-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 1px 6px rgba(15, 23, 42, 0.05);\n}\n.cp-results-card__top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 22px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cp-results-card__title {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.cp-results-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.cp-results-count,\n.cp-page-size {\n  display: inline-flex;\n  align-items: center;\n  height: 34px;\n  padding: 0 12px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #334155;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.cp-page-size {\n  border: 1px solid rgba(6, 155, 143, 0.22);\n  background: #fff;\n  color: #069b8f;\n}\n.cp-view-toggle {\n  display: inline-flex;\n  padding: 3px;\n  border: 1px solid #e2e8f0;\n  border-radius: 999px;\n  background: #f8fafc;\n}\n.cp-view-toggle__btn {\n  width: 34px;\n  height: 30px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: #64748b;\n  cursor: pointer;\n}\n.cp-view-toggle__btn--active {\n  background: #fff;\n  color: #069b8f;\n  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08);\n}\n.cp-competence-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n  padding: 18px;\n}\n.cp-competence-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-left: 4px solid #069b8f;\n  border-radius: 14px;\n  padding: 18px;\n  transition: all 0.2s ease;\n}\n.cp-competence-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.cp-competence-card__header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.cp-competence-card__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 8px;\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-competence-card__title {\n  flex: 1;\n  min-width: 0;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n.cp-competence-card__count {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n  border: 1px solid rgba(6, 155, 143, 0.22);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.cp-formation-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px solid #f1f5f9;\n}\n.cp-formation-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 8px 10px;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  font-size: 0.8rem;\n  color: #334155;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.cp-formation-chip i {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.cp-formation-chip span {\n  flex: 1;\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n.cp-formation-chip small {\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.cp-formation-chip:hover {\n  background: rgba(6, 155, 143, 0.12);\n  border-color: rgba(6, 155, 143, 0.22);\n  color: #069b8f;\n}\n.cp-table-wrap {\n  width: 100%;\n  overflow-x: auto;\n}\n.cp-table {\n  width: 100%;\n  min-width: 760px;\n  border-collapse: collapse;\n}\n.cp-table th {\n  padding: 14px 16px;\n  background: #f8fafc;\n  color: #526887;\n  font-size: 0.78rem;\n  font-weight: 800;\n  text-align: left;\n  text-transform: uppercase;\n}\n.cp-table td {\n  padding: 16px;\n  border-top: 1px solid #f1f5f9;\n  color: #0f172a;\n  vertical-align: top;\n}\n.cp-table-skill {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cp-table-skill__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-table-skill strong {\n  overflow-wrap: anywhere;\n}\n.cp-table-formations {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.cp-table-formations button {\n  width: fit-content;\n  border: 0;\n  background: transparent;\n  color: #475569;\n  padding: 0;\n  font-size: 0.86rem;\n  text-align: left;\n  cursor: pointer;\n}\n.cp-table-formations button:hover {\n  color: #069b8f;\n  text-decoration: underline;\n}\n.cp-table-formations small {\n  color: #94a3b8;\n}\n.cp-pill {\n  display: inline-flex;\n  min-width: 28px;\n  justify-content: center;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #334155;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n.cp-action {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: 1px solid rgba(6, 155, 143, 0.22);\n  border-radius: 999px;\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n  padding: 6px 12px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.cp-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 22px;\n  border-top: 1px solid #f1f5f9;\n}\n.cp-pagination__label {\n  color: #475569;\n  font-size: 0.9rem;\n}\n.cp-pagination__actions {\n  display: flex;\n  gap: 10px;\n}\n.cp-pagination__btn {\n  width: 38px;\n  height: 38px;\n  border: 0;\n  border-radius: 50%;\n  background: #f8fafc;\n  color: #334155;\n  cursor: pointer;\n}\n.cp-pagination__btn:hover:not(:disabled) {\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n}\n.cp-pagination__btn:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.cp-empty {\n  text-align: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n}\n.cp-empty__icon {\n  font-size: 3rem;\n  margin-bottom: 12px;\n  display: block;\n  color: #069b8f;\n}\n.cp-empty h6 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.cp-empty p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.cp-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.cp-btn--primary {\n  background: #069b8f;\n  color: #fff;\n}\n.cp-btn--primary:hover {\n  background: #047a6f;\n}\n@media (max-width: 768px) {\n  .cp-stats,\n  .cp-toolbar,\n  .cp-results-card__top,\n  .cp-pagination {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .cp-stat-main,\n  .cp-search {\n    width: 100%;\n    min-width: 0;\n  }\n  .cp-competence-list {\n    grid-template-columns: 1fr;\n  }\n  .cp-results-actions {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .cp-stat-main,\n  .cp-competence-card {\n    padding: 16px;\n  }\n  .cp-competence-card__header {\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .cp-competence-card__count {\n    margin-top: 4px;\n  }\n}\n/*# sourceMappingURL=mes-competences-recommandees.component.css.map */\n"] }]
  }], () => [{ type: FormationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MesCompetencesRecommandeesComponent, { className: "MesCompetencesRecommandeesComponent", filePath: "app/features/student/mes-competences-recommandees/mes-competences-recommandees.component.ts", lineNumber: 33 });
})();
export {
  MesCompetencesRecommandeesComponent
};
//# sourceMappingURL=chunk-CXQDTVNB.js.map
