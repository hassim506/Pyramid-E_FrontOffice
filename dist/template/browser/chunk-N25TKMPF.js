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
  ElementRef,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/student-planning/student-planning.component.ts
var _c0 = ["calendarGrid"];
function StudentPlanningComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Chargement de votre planning...");
    \u0275\u0275elementEnd()();
  }
}
function StudentPlanningComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function StudentPlanningComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadPlanning());
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
function StudentPlanningComponent_ng_container_2_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r4);
  }
}
function StudentPlanningComponent_ng_container_2_div_65_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 60);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const evt_r7 = ctx.$implicit;
    \u0275\u0275styleProp("background", evt_r7.couleur + "22")("border-left", "3px solid " + evt_r7.couleur);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", evt_r7.icone));
    \u0275\u0275styleProp("color", evt_r7.couleur);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(evt_r7.titre);
  }
}
function StudentPlanningComponent_ng_container_2_div_65_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const jour_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", jour_r6.evenements.length - 3, " autres ");
  }
}
function StudentPlanningComponent_ng_container_2_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function StudentPlanningComponent_ng_container_2_div_65_Template_div_click_0_listener($event) {
      const jour_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectJour(jour_r6, $event));
    });
    \u0275\u0275elementStart(1, "div", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56);
    \u0275\u0275template(4, StudentPlanningComponent_ng_container_2_div_65_div_4_Template, 4, 10, "div", 57)(5, StudentPlanningComponent_ng_container_2_div_65_div_5_Template, 2, 1, "div", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const jour_r6 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("pl-day--other-month", !jour_r6.moisCourant)("pl-day--today", jour_r6.estAujourdhui)("pl-day--has-events", jour_r6.evenements.length > 0)("pl-day--selected", (ctx_r1.selectedJour == null ? null : ctx_r1.selectedJour.date == null ? null : ctx_r1.selectedJour.date.getTime()) === (jour_r6.date == null ? null : jour_r6.date.getTime()));
    \u0275\u0275attribute("data-index", i_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(jour_r6.jour);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", jour_r6.evenements.slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", jour_r6.evenements.length > 3);
  }
}
function StudentPlanningComponent_ng_container_2_div_66_div_11_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 79);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", evt_r11.formation_titre, " ");
  }
}
function StudentPlanningComponent_ng_container_2_div_66_div_11_span_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const evt_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2013 ", ctx_r1.formatHeure(evt_r11.date_fin));
  }
}
function StudentPlanningComponent_ng_container_2_div_66_div_11_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275text(2);
    \u0275\u0275template(3, StudentPlanningComponent_ng_container_2_div_66_div_11_span_8_ng_container_3_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatHeure(evt_r11.date_debut), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r11.date_fin);
  }
}
function StudentPlanningComponent_ng_container_2_div_66_div_11_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", evt_r11.lieu, " ");
  }
}
function StudentPlanningComponent_ng_container_2_div_66_div_11_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const evt_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", evt_r11.duree, " ");
  }
}
function StudentPlanningComponent_ng_container_2_div_66_div_11_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85);
    \u0275\u0275element(2, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const evt_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", evt_r11.progression, "%")("background", evt_r11.couleur);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", evt_r11.progression, "%");
  }
}
function StudentPlanningComponent_ng_container_2_div_66_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click", function StudentPlanningComponent_ng_container_2_div_66_div_11_Template_div_click_0_listener() {
      const evt_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectEvenement(evt_r11));
    });
    \u0275\u0275elementStart(1, "div", 72);
    \u0275\u0275element(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h6", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StudentPlanningComponent_ng_container_2_div_66_div_11_p_6_Template, 3, 1, "p", 74);
    \u0275\u0275elementStart(7, "div", 75);
    \u0275\u0275template(8, StudentPlanningComponent_ng_container_2_div_66_div_11_span_8_Template, 4, 2, "span", 3)(9, StudentPlanningComponent_ng_container_2_div_66_div_11_span_9_Template, 3, 1, "span", 3)(10, StudentPlanningComponent_ng_container_2_div_66_div_11_span_10_Template, 3, 1, "span", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 76)(12, "span", 77);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, StudentPlanningComponent_ng_container_2_div_66_div_11_div_14_Template, 5, 5, "div", 78);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const evt_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("border-color", evt_r11.couleur);
    \u0275\u0275classProp("pl-evt-card--selected", (ctx_r1.selectedEvenement == null ? null : ctx_r1.selectedEvenement.id) === evt_r11.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", evt_r11.couleur);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", evt_r11.icone, " me-1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", evt_r11.label_type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(evt_r11.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r11.formation_titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", evt_r11.date_debut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r11.lieu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r11.duree);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("pl-evt-status--" + evt_r11.statut);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatutLabel(evt_r11.statut), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", evt_r11.progression > 0);
  }
}
function StudentPlanningComponent_ng_container_2_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function StudentPlanningComponent_ng_container_2_div_66_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "div", 63);
    \u0275\u0275elementStart(2, "div", 64)(3, "div")(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 67);
    \u0275\u0275listener("click", function StudentPlanningComponent_ng_container_2_div_66_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fermerDetail());
    });
    \u0275\u0275element(9, "i", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 69);
    \u0275\u0275template(11, StudentPlanningComponent_ng_container_2_div_66_div_11_Template, 15, 19, "div", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r1.popoverTop, "px")("left", ctx_r1.popoverLeft, "px");
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", ctx_r1.popoverArrowLeft, "px");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDateFr(ctx_r1.selectedJour.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedJour.evenements.length, " \xE9v\xE9nement(s)");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.selectedJour.evenements);
  }
}
function StudentPlanningComponent_ng_container_2_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "i", 88);
    \u0275\u0275elementStart(2, "h6");
    \u0275\u0275text(3, "Aucun \xE9v\xE9nement ce mois");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Naviguez vers un autre mois ou v\xE9rifiez vos inscriptions.");
    \u0275\u0275elementEnd()();
  }
}
function StudentPlanningComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "h3", 12);
    \u0275\u0275element(4, "i", 13);
    \u0275\u0275text(5, "Mon Planning ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 14);
    \u0275\u0275text(7, "Formations, webinaires et sessions planifi\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 15)(9, "div", 16);
    \u0275\u0275element(10, "i", 17);
    \u0275\u0275elementStart(11, "div")(12, "div", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 19);
    \u0275\u0275text(15, "Ce mois");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 20);
    \u0275\u0275element(17, "i", 21);
    \u0275\u0275elementStart(18, "div")(19, "div", 18);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 19);
    \u0275\u0275text(22, "Pr\xE9sentiel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 22);
    \u0275\u0275element(24, "i", 23);
    \u0275\u0275elementStart(25, "div")(26, "div", 18);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19);
    \u0275\u0275text(29, "En ligne");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 24);
    \u0275\u0275element(31, "i", 25);
    \u0275\u0275elementStart(32, "div")(33, "div", 18);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 19);
    \u0275\u0275text(36, "Sessions");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 26)(38, "div", 27)(39, "button", 28);
    \u0275\u0275listener("click", function StudentPlanningComponent_ng_container_2_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moisPrecedent());
    });
    \u0275\u0275element(40, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 30)(42, "span", 31);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 32);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 28);
    \u0275\u0275listener("click", function StudentPlanningComponent_ng_container_2_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moisSuivant());
    });
    \u0275\u0275element(47, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 34);
    \u0275\u0275listener("click", function StudentPlanningComponent_ng_container_2_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.allerAujourdhui());
    });
    \u0275\u0275text(49, "Aujourd'hui");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 35)(51, "button", 36);
    \u0275\u0275listener("click", function StudentPlanningComponent_ng_container_2_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFiltre("tous"));
    });
    \u0275\u0275text(52, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 37);
    \u0275\u0275listener("click", function StudentPlanningComponent_ng_container_2_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFiltre("presentiel"));
    });
    \u0275\u0275element(54, "i", 38);
    \u0275\u0275text(55, "Pr\xE9sentiel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 39);
    \u0275\u0275listener("click", function StudentPlanningComponent_ng_container_2_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFiltre("en_ligne"));
    });
    \u0275\u0275element(57, "i", 40);
    \u0275\u0275text(58, "En ligne ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 41);
    \u0275\u0275listener("click", function StudentPlanningComponent_ng_container_2_Template_div_click_59_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onWrapClick($event));
    });
    \u0275\u0275elementStart(60, "div", 42)(61, "div", 43);
    \u0275\u0275template(62, StudentPlanningComponent_ng_container_2_div_62_Template, 2, 1, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 45, 0);
    \u0275\u0275template(65, StudentPlanningComponent_ng_container_2_div_65_Template, 6, 12, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(66, StudentPlanningComponent_ng_container_2_div_66_Template, 12, 9, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 48)(68, "div", 49);
    \u0275\u0275element(69, "span", 50);
    \u0275\u0275text(70, "Pr\xE9sentiel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 49);
    \u0275\u0275element(72, "span", 51);
    \u0275\u0275text(73, "En ligne / Webinaire ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(74, StudentPlanningComponent_ng_container_2_div_74_Template, 6, 0, "div", 52);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.totalMois);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalPresentiels);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalEnLigne);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalSessions);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.nomMois);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.annee);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("pl-filtre--active", ctx_r1.filtreActif === "tous");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pl-filtre--active", ctx_r1.filtreActif === "presentiel");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pl-filtre--active", ctx_r1.filtreActif === "en_ligne");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.joursLabels);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.jours);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedJour);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.totalMois === 0);
  }
}
var POPOVER_WIDTH = 340;
var POPOVER_MARGIN = 12;
var StudentPlanningComponent = class _StudentPlanningComponent {
  formationsService;
  elRef;
  loading = true;
  error = "";
  // ── Calendrier ─────────────────────────────────────────
  annee = (/* @__PURE__ */ new Date()).getFullYear();
  mois = (/* @__PURE__ */ new Date()).getMonth() + 1;
  // 1-12
  jours = [];
  moisLabels = [
    "Janvier",
    "F\xE9vrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Ao\xFBt",
    "Septembre",
    "Octobre",
    "Novembre",
    "D\xE9cembre"
  ];
  joursLabels = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  joursComplets = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  moisComplets = [
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
  // ── Données ────────────────────────────────────────────
  evenements = [];
  parDate = {};
  // ── Sélection ──────────────────────────────────────────
  selectedJour = null;
  selectedEvenement = null;
  // ── Position du popover ────────────────────────────────
  popoverTop = 0;
  popoverLeft = 0;
  popoverArrowLeft = 0;
  // position de la flèche à l'intérieur du popover
  // ── Filtres ────────────────────────────────────────────
  filtreActif = "tous";
  // Référence à l'élément wrapper (pour calculer les positions relatives)
  calendarGridRef;
  constructor(formationsService, elRef) {
    this.formationsService = formationsService;
    this.elRef = elRef;
  }
  ngOnInit() {
    this.loadPlanning();
  }
  // ── Fermeture sur clic en dehors ───────────────────────
  onWrapClick(event) {
    const target = event.target;
    if (!target.closest(".pl-day") && !target.closest(".pl-popover")) {
      this.fermerDetail();
    }
  }
  // ── Chargement ─────────────────────────────────────────
  loadPlanning() {
    this.loading = true;
    this.error = "";
    this.formationsService.getMonPlanning(this.annee, this.mois).subscribe({
      next: (res) => {
        this.evenements = res.evenements ?? [];
        this.parDate = res.par_date ?? {};
        this.buildCalendrier();
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger le planning.";
        this.loading = false;
      }
    });
  }
  // ── Construction calendrier ────────────────────────────
  buildCalendrier() {
    this.jours = [];
    const aujourd = /* @__PURE__ */ new Date();
    const premierJour = new Date(this.annee, this.mois - 1, 1);
    const jourSemaine = premierJour.getDay();
    const offsetLundi = jourSemaine === 0 ? 6 : jourSemaine - 1;
    const dernierMoisPrec = new Date(this.annee, this.mois - 1, 0);
    for (let i = offsetLundi - 1; i >= 0; i--) {
      const d = new Date(dernierMoisPrec.getFullYear(), dernierMoisPrec.getMonth(), dernierMoisPrec.getDate() - i);
      this.jours.push(this.makeJour(d, false, false));
    }
    const dernierJour = new Date(this.annee, this.mois, 0).getDate();
    for (let d = 1; d <= dernierJour; d++) {
      const date = new Date(this.annee, this.mois - 1, d);
      const key = this.formatDate(date);
      const estAujd = this.annee === aujourd.getFullYear() && this.mois === aujourd.getMonth() + 1 && d === aujourd.getDate();
      this.jours.push({ date, jour: d, moisCourant: true, estAujourdhui: estAujd, evenements: this.getEvenementsJour(key) });
    }
    const reste = 42 - this.jours.length;
    for (let d = 1; d <= reste; d++) {
      const date = new Date(this.annee, this.mois, d);
      this.jours.push(this.makeJour(date, false, false));
    }
  }
  makeJour(date, moisCourant, estAujourdhui) {
    return { date, jour: date.getDate(), moisCourant, estAujourdhui, evenements: [] };
  }
  getEvenementsJour(key) {
    const evts = this.parDate[key] ?? [];
    if (this.filtreActif === "tous")
      return evts;
    return evts.filter((e) => e.type === this.filtreActif);
  }
  // ── Navigation ─────────────────────────────────────────
  moisPrecedent() {
    if (this.mois === 1) {
      this.mois = 12;
      this.annee--;
    } else
      this.mois--;
    this.resetSelection();
    this.loadPlanning();
  }
  moisSuivant() {
    if (this.mois === 12) {
      this.mois = 1;
      this.annee++;
    } else
      this.mois++;
    this.resetSelection();
    this.loadPlanning();
  }
  allerAujourdhui() {
    const now = /* @__PURE__ */ new Date();
    this.annee = now.getFullYear();
    this.mois = now.getMonth() + 1;
    this.resetSelection();
    this.loadPlanning();
  }
  resetSelection() {
    this.selectedJour = null;
    this.selectedEvenement = null;
  }
  // ── Sélection + calcul position popover ────────────────
  selectJour(jour, event) {
    if (!jour.moisCourant || jour.evenements.length === 0)
      return;
    if (this.selectedJour?.date?.getTime() === jour.date?.getTime()) {
      this.fermerDetail();
      return;
    }
    this.selectedJour = jour;
    this.selectedEvenement = null;
    setTimeout(() => this.computePopoverPosition(event), 0);
  }
  /**
   * Calcule top/left du popover pour qu'il apparaisse
   * juste AU-DESSUS de la case cliquée, centré sur elle,
   * en restant à l'intérieur du wrapper .pl-calendar-wrap.
   */
  computePopoverPosition(event) {
    const wrap = this.elRef.nativeElement.querySelector(".pl-calendar-wrap");
    const cell = event.currentTarget;
    if (!wrap || !cell)
      return;
    const wrapRect = wrap.getBoundingClientRect();
    const cellRect = cell.getBoundingClientRect();
    const cellRelTop = cellRect.top - wrapRect.top + wrap.scrollTop;
    const cellRelLeft = cellRect.left - wrapRect.left + wrap.scrollLeft;
    const cellCenterX = cellRelLeft + cellRect.width / 2;
    const popoverEl = this.elRef.nativeElement.querySelector(".pl-popover");
    const popoverH = popoverEl ? popoverEl.offsetHeight : 300;
    const top = cellRelTop - popoverH - 10 - 9;
    let left = cellCenterX - POPOVER_WIDTH / 2;
    const maxLeft = wrap.clientWidth - POPOVER_WIDTH - POPOVER_MARGIN;
    left = Math.max(POPOVER_MARGIN, Math.min(left, maxLeft));
    const arrowLeft = cellCenterX - left - 9;
    this.popoverTop = top;
    this.popoverLeft = left;
    this.popoverArrowLeft = Math.max(12, Math.min(arrowLeft, POPOVER_WIDTH - 30));
  }
  selectEvenement(evt) {
    this.selectedEvenement = this.selectedEvenement?.id === evt.id ? null : evt;
  }
  fermerDetail() {
    this.resetSelection();
  }
  // ── Filtres ────────────────────────────────────────────
  setFiltre(f) {
    this.filtreActif = f;
    this.selectedJour = null;
    this.buildCalendrier();
  }
  // ── Stats ──────────────────────────────────────────────
  get totalMois() {
    return this.evenements.length;
  }
  get totalPresentiels() {
    return this.evenements.filter((e) => e.type === "presentiel").length;
  }
  get totalEnLigne() {
    return this.evenements.filter((e) => e.type === "en_ligne").length;
  }
  get totalSessions() {
    return this.evenements.filter((e) => e.categorie === "session").length;
  }
  // ── Helpers ────────────────────────────────────────────
  formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${dd}`;
  }
  formatDateFr(date) {
    return `${this.joursComplets[date.getDay()]} ${date.getDate()} ${this.moisComplets[date.getMonth()]} ${date.getFullYear()}`;
  }
  formatHeure(datetime) {
    if (!datetime)
      return "";
    const d = new Date(datetime);
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
  getStatutLabel(statut) {
    const map = {
      non_commence: "Non commenc\xE9",
      en_cours: "En cours",
      termine: "Termin\xE9",
      planifiee: "Planifi\xE9e",
      annulee: "Annul\xE9e"
    };
    return map[statut] ?? statut;
  }
  get nomMois() {
    return this.moisLabels[this.mois - 1];
  }
  static \u0275fac = function StudentPlanningComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentPlanningComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentPlanningComponent, selectors: [["app-student-planning"]], viewQuery: function StudentPlanningComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.calendarGridRef = _t.first);
    }
  }, decls: 3, vars: 3, consts: [["calendarGrid", ""], ["class", "qq-loading", 4, "ngIf"], ["class", "pl-error", 4, "ngIf"], [4, "ngIf"], [1, "qq-loading"], [1, "qq-loading__ring"], [1, "pl-error"], [1, "isax", "isax-warning-2"], [1, "pl-btn", "pl-btn--primary", 3, "click"], [1, "isax", "isax-refresh", "me-2"], [1, "pl-header", "mb-4"], [1, "pl-header__left"], [1, "pl-header__title"], [1, "isax", "isax-calendar-2", "me-2", 2, "color", "#069b8f"], [1, "pl-header__sub"], [1, "pl-stats", "mb-4"], [1, "pl-stat-card", "pl-stat-card--total"], [1, "isax", "isax-calendar-tick"], [1, "pl-stat-card__value"], [1, "pl-stat-card__label"], [1, "pl-stat-card", "pl-stat-card--presentiel"], [1, "isax", "isax-buildings-2"], [1, "pl-stat-card", "pl-stat-card--enligne"], [1, "isax", "isax-monitor"], [1, "pl-stat-card", "pl-stat-card--session"], [1, "isax", "isax-video-play"], [1, "pl-toolbar", "mb-4"], [1, "pl-nav"], [1, "pl-nav__btn", 3, "click"], [1, "isax", "isax-arrow-left-2"], [1, "pl-nav__label"], [1, "pl-nav__mois"], [1, "pl-nav__annee"], [1, "isax", "isax-arrow-right-2"], [1, "pl-nav__today", 3, "click"], [1, "pl-filtres"], [1, "pl-filtre", 3, "click"], [1, "pl-filtre", "pl-filtre--presentiel", 3, "click"], [1, "isax", "isax-buildings-2", "me-1"], [1, "pl-filtre", "pl-filtre--enligne", 3, "click"], [1, "isax", "isax-monitor", "me-1"], [1, "pl-calendar-wrap", 3, "click"], [1, "pl-calendar"], [1, "pl-calendar__headers"], ["class", "pl-calendar__header-day", 4, "ngFor", "ngForOf"], [1, "pl-calendar__grid"], ["class", "pl-day", 3, "pl-day--other-month", "pl-day--today", "pl-day--has-events", "pl-day--selected", "click", 4, "ngFor", "ngForOf"], ["class", "pl-popover", 3, "top", "left", "click", 4, "ngIf"], [1, "pl-legende", "mt-4"], [1, "pl-legende__item"], [1, "pl-legende__dot", 2, "background", "#10b981"], [1, "pl-legende__dot", 2, "background", "#3b82f6"], ["class", "pl-empty mt-4", 4, "ngIf"], [1, "pl-calendar__header-day"], [1, "pl-day", 3, "click"], [1, "pl-day__num"], [1, "pl-day__events"], ["class", "pl-day-evt", 3, "background", "border-left", 4, "ngFor", "ngForOf"], ["class", "pl-day-evt__more", 4, "ngIf"], [1, "pl-day-evt"], [1, "pl-day-evt__title"], [1, "pl-day-evt__more"], [1, "pl-popover", 3, "click"], [1, "pl-popover__arrow"], [1, "pl-popover__header"], [1, "pl-popover__date"], [1, "pl-popover__count"], [1, "pl-popover__close", 3, "click"], [1, "isax", "isax-close-circle"], [1, "pl-popover__list"], ["class", "pl-evt-card", 3, "pl-evt-card--selected", "border-color", "click", 4, "ngFor", "ngForOf"], [1, "pl-evt-card", 3, "click"], [1, "pl-evt-card__badge"], [1, "pl-evt-card__title"], ["class", "pl-evt-card__sub", 4, "ngIf"], [1, "pl-evt-card__infos"], [1, "pl-evt-card__footer"], [1, "pl-evt-status"], ["class", "pl-evt-prog", 4, "ngIf"], [1, "pl-evt-card__sub"], [1, "isax", "isax-book-1", "me-1"], [1, "isax", "isax-clock", "me-1"], [1, "isax", "isax-location", "me-1"], [1, "isax", "isax-timer", "me-1"], [1, "pl-evt-prog"], [1, "pl-evt-prog__bar"], [1, "pl-evt-prog__fill"], [1, "pl-empty", "mt-4"], [1, "isax", "isax-calendar", "pl-empty__icon"]], template: function StudentPlanningComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StudentPlanningComponent_div_0_Template, 8, 0, "div", 1)(1, StudentPlanningComponent_div_1_Template, 7, 1, "div", 2)(2, StudentPlanningComponent_ng_container_2_Template, 75, 16, "ng-container", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ['\n\n.qq-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes _ngcontent-%COMP%_qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pl-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  gap: 12px;\n}\n.pl-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ef4444;\n}\n.pl-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.pl-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.pl-header__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n}\n.pl-header__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.pl-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 768px) {\n  .pl-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pl-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.pl-stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 18px;\n  border-radius: 20px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.pl-stat-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.pl-stat-card__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.pl-stat-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.pl-stat-card--total[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.pl-stat-card--presentiel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.pl-stat-card--enligne[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.pl-stat-card--session[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.pl-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.pl-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pl-nav__btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  cursor: pointer;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.pl-nav__btn[_ngcontent-%COMP%]:hover {\n  background: #e6f7f5;\n  color: #069b8f;\n  border-color: rgba(6, 155, 143, 0.2);\n}\n.pl-nav__label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 130px;\n  text-align: center;\n}\n.pl-nav__mois[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.pl-nav__annee[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.pl-nav__today[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1px solid rgba(6, 155, 143, 0.2);\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pl-nav__today[_ngcontent-%COMP%]:hover {\n  background: #069b8f;\n  color: #fff;\n}\n.pl-filtres[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.pl-filtre[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 7px 14px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1.5px solid #e2e8f0;\n  transition: all 0.2s ease;\n}\n.pl-filtre[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pl-filtre[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #334155;\n}\n.pl-filtre--active[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #fff;\n  border-color: #0f172a;\n}\n.pl-filtre--presentiel.pl-filtre--active[_ngcontent-%COMP%] {\n  background: #10b981;\n  border-color: #10b981;\n}\n.pl-filtre--enligne.pl-filtre--active[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n}\n.pl-calendar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.pl-calendar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  min-width: 700px;\n}\n.pl-calendar__headers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background: #0f172a;\n}\n.pl-calendar__header-day[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.5);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.pl-calendar__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-top: 1px solid #f1f5f9;\n}\n.pl-day[_ngcontent-%COMP%] {\n  min-height: 110px;\n  padding: 8px;\n  border-right: 1px solid #f1f5f9;\n  border-bottom: 1px solid #f1f5f9;\n  cursor: default;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.pl-day[_ngcontent-%COMP%]:nth-child(7n) {\n  border-right: none;\n}\n.pl-day--other-month[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.pl-day--other-month[_ngcontent-%COMP%]   .pl-day__num[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.pl-day--today[_ngcontent-%COMP%]   .pl-day__num[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pl-day--has-events[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.pl-day--has-events[_ngcontent-%COMP%]:hover {\n  background: #e6f7f5;\n}\n.pl-day--selected[_ngcontent-%COMP%] {\n  background: #e6f7f5 !important;\n  border-color: rgba(6, 155, 143, 0.3);\n}\n.pl-day__num[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 6px;\n  width: 26px;\n  height: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pl-day__events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.pl-day-evt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 6px;\n  border-radius: 5px;\n  font-size: 10px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.pl-day-evt[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  flex-shrink: 0;\n}\n.pl-day-evt__title[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n  color: #334155;\n}\n.pl-day-evt__more[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #94a3b8;\n  font-weight: 600;\n  padding: 2px 6px;\n}\n.pl-popover[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 100;\n  width: 340px;\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  display: flex;\n  flex-direction: column;\n  max-height: 480px;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_pl-pop-in 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.pl-popover__arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -9px;\n  width: 18px;\n  height: 18px;\n  background: #0f172a;\n  border-right: 1px solid #e2e8f0;\n  border-bottom: 1px solid #e2e8f0;\n  transform: rotate(45deg);\n  border-radius: 3px;\n}\n.pl-popover__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  flex-shrink: 0;\n  background: #0f172a;\n  border-radius: 20px 20px 0 0;\n}\n.pl-popover__date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  text-transform: capitalize;\n}\n.pl-popover__count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.4);\n  margin-top: 2px;\n}\n.pl-popover__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.2s ease;\n  padding: 0;\n}\n.pl-popover__close[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.pl-popover__list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.pl-popover__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.pl-popover__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 4px;\n}\n@media (max-width: 768px) {\n  .pl-popover[_ngcontent-%COMP%] {\n    position: fixed;\n    top: auto !important;\n    left: 50% !important;\n    bottom: 0;\n    transform: translateX(-50%);\n    width: 100%;\n    max-width: 100vw;\n    border-radius: 20px 20px 0 0;\n    max-height: 70vh;\n    animation: _ngcontent-%COMP%_pl-slide-up 0.25s ease;\n  }\n  .pl-popover[_ngcontent-%COMP%]   .pl-popover__arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_pl-pop-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_pl-slide-up {\n  from {\n    transform: translateX(-50%) translateY(100%);\n  }\n  to {\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.pl-evt-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 14px 16px;\n  border: 1.5px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: #fff;\n}\n.pl-evt-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.pl-evt-card--selected[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.pl-evt-card__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 3px 10px;\n  border-radius: 99px;\n  color: #fff;\n  margin-bottom: 8px;\n}\n.pl-evt-card__badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.pl-evt-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n  line-height: 1.4;\n}\n.pl-evt-card__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0 0 10px;\n  display: flex;\n  align-items: center;\n}\n.pl-evt-card__sub[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.pl-evt-card__infos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 10px;\n}\n.pl-evt-card__infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #64748b;\n}\n.pl-evt-card__infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n}\n.pl-evt-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.pl-evt-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 99px;\n  text-transform: capitalize;\n}\n.pl-evt-status--non_commence[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.pl-evt-status--en_cours[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.pl-evt-status--termine[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.pl-evt-status--planifiee[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n}\n.pl-evt-status--annulee[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.pl-evt-prog[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  max-width: 120px;\n}\n.pl-evt-prog[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.pl-evt-prog__bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: #f1f5f9;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.pl-evt-prog__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.pl-legende[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.pl-legende__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 500;\n}\n.pl-legende__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.pl-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  text-align: center;\n  gap: 10px;\n}\n.pl-empty__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #069b8f;\n  opacity: 0.3;\n}\n.pl-empty[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.pl-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.pl-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n}\n.pl-btn--primary[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.pl-btn--primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.4);\n}\n@media (max-width: 768px) {\n  .pl-day[_ngcontent-%COMP%] {\n    min-height: 70px;\n    padding: 4px;\n  }\n  .pl-day__num[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .pl-day-evt[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pl-day--has-events[_ngcontent-%COMP%]::after {\n    content: "";\n    display: block;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background: #069b8f;\n    margin: 2px auto 0;\n  }\n  .pl-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .pl-filtres[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=student-planning.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentPlanningComponent, [{
    type: Component,
    args: [{ selector: "app-student-planning", standalone: true, imports: [CommonModule, RouterModule], template: `<!-- LOADING -->\r
<div *ngIf="loading" class="qq-loading">\r
  <div class="qq-loading__ring">\r
    <div></div><div></div><div></div><div></div>\r
  </div>\r
  <p>Chargement de votre planning...</p>\r
</div>\r
\r
<!-- ERREUR -->\r
<div class="pl-error" *ngIf="error && !loading">\r
  <i class="isax isax-warning-2"></i>\r
  <p>{{ error }}</p>\r
  <button class="pl-btn pl-btn--primary" (click)="loadPlanning()">\r
    <i class="isax isax-refresh me-2"></i>R\xE9essayer\r
  </button>\r
</div>\r
\r
<ng-container *ngIf="!loading && !error">\r
\r
  <!-- \u2500\u2500 HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="pl-header mb-4">\r
    <div class="pl-header__left">\r
      <h3 class="pl-header__title">\r
        <i class="isax isax-calendar-2 me-2" style="color:#069b8f"></i>Mon Planning\r
      </h3>\r
      <p class="pl-header__sub">Formations, webinaires et sessions planifi\xE9es</p>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 STATS RAPIDES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="pl-stats mb-4">\r
    <div class="pl-stat-card pl-stat-card--total">\r
      <i class="isax isax-calendar-tick"></i>\r
      <div>\r
        <div class="pl-stat-card__value">{{ totalMois }}</div>\r
        <div class="pl-stat-card__label">Ce mois</div>\r
      </div>\r
    </div>\r
    <div class="pl-stat-card pl-stat-card--presentiel">\r
      <i class="isax isax-buildings-2"></i>\r
      <div>\r
        <div class="pl-stat-card__value">{{ totalPresentiels }}</div>\r
        <div class="pl-stat-card__label">Pr\xE9sentiel</div>\r
      </div>\r
    </div>\r
    <div class="pl-stat-card pl-stat-card--enligne">\r
      <i class="isax isax-monitor"></i>\r
      <div>\r
        <div class="pl-stat-card__value">{{ totalEnLigne }}</div>\r
        <div class="pl-stat-card__label">En ligne</div>\r
      </div>\r
    </div>\r
    <div class="pl-stat-card pl-stat-card--session">\r
      <i class="isax isax-video-play"></i>\r
      <div>\r
        <div class="pl-stat-card__value">{{ totalSessions }}</div>\r
        <div class="pl-stat-card__label">Sessions</div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 NAVIGATION + FILTRES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="pl-toolbar mb-4">\r
    <div class="pl-nav">\r
      <button class="pl-nav__btn" (click)="moisPrecedent()">\r
        <i class="isax isax-arrow-left-2"></i>\r
      </button>\r
      <div class="pl-nav__label">\r
        <span class="pl-nav__mois">{{ nomMois }}</span>\r
        <span class="pl-nav__annee">{{ annee }}</span>\r
      </div>\r
      <button class="pl-nav__btn" (click)="moisSuivant()">\r
        <i class="isax isax-arrow-right-2"></i>\r
      </button>\r
      <button class="pl-nav__today" (click)="allerAujourdhui()">Aujourd'hui</button>\r
    </div>\r
    <div class="pl-filtres">\r
      <button class="pl-filtre"\r
              [class.pl-filtre--active]="filtreActif === 'tous'"\r
              (click)="setFiltre('tous')">Tous</button>\r
      <button class="pl-filtre pl-filtre--presentiel"\r
              [class.pl-filtre--active]="filtreActif === 'presentiel'"\r
              (click)="setFiltre('presentiel')">\r
        <i class="isax isax-buildings-2 me-1"></i>Pr\xE9sentiel\r
      </button>\r
      <button class="pl-filtre pl-filtre--enligne"\r
              [class.pl-filtre--active]="filtreActif === 'en_ligne'"\r
              (click)="setFiltre('en_ligne')">\r
        <i class="isax isax-monitor me-1"></i>En ligne\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 CALENDRIER (wrapper relatif pour le popover) \u2500\u2500 -->\r
  <div class="pl-calendar-wrap" (click)="onWrapClick($event)">\r
\r
    <div class="pl-calendar">\r
      <div class="pl-calendar__headers">\r
        <div class="pl-calendar__header-day" *ngFor="let j of joursLabels">{{ j }}</div>\r
      </div>\r
      <div class="pl-calendar__grid" #calendarGrid>\r
        <div class="pl-day"\r
             *ngFor="let jour of jours; let i = index"\r
             [attr.data-index]="i"\r
             [class.pl-day--other-month]="!jour.moisCourant"\r
             [class.pl-day--today]="jour.estAujourdhui"\r
             [class.pl-day--has-events]="jour.evenements.length > 0"\r
             [class.pl-day--selected]="selectedJour?.date?.getTime() === jour.date?.getTime()"\r
             (click)="selectJour(jour, $event)">\r
          <div class="pl-day__num">{{ jour.jour }}</div>\r
          <div class="pl-day__events">\r
            <div class="pl-day-evt"\r
                 *ngFor="let evt of jour.evenements.slice(0, 3)"\r
                 [style.background]="evt.couleur + '22'"\r
                 [style.border-left]="'3px solid ' + evt.couleur">\r
              <i class="isax {{ evt.icone }}" [style.color]="evt.couleur"></i>\r
              <span class="pl-day-evt__title">{{ evt.titre }}</span>\r
            </div>\r
            <div class="pl-day-evt__more" *ngIf="jour.evenements.length > 3">\r
              +{{ jour.evenements.length - 3 }} autres\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500 POPOVER FLOTTANT AU-DESSUS DU CALENDRIER \u2500\u2500 -->\r
    <div class="pl-popover"\r
         *ngIf="selectedJour"\r
         [style.top.px]="popoverTop"\r
         [style.left.px]="popoverLeft"\r
         (click)="$event.stopPropagation()">\r
\r
      <!-- Fl\xE8che de pointage vers la case -->\r
      <div class="pl-popover__arrow" [style.left.px]="popoverArrowLeft"></div>\r
\r
      <div class="pl-popover__header">\r
        <div>\r
          <div class="pl-popover__date">{{ formatDateFr(selectedJour.date) }}</div>\r
          <div class="pl-popover__count">{{ selectedJour.evenements.length }} \xE9v\xE9nement(s)</div>\r
        </div>\r
        <button class="pl-popover__close" (click)="fermerDetail()">\r
          <i class="isax isax-close-circle"></i>\r
        </button>\r
      </div>\r
\r
      <div class="pl-popover__list">\r
        <div class="pl-evt-card"\r
             *ngFor="let evt of selectedJour.evenements"\r
             [class.pl-evt-card--selected]="selectedEvenement?.id === evt.id"\r
             [style.border-color]="evt.couleur"\r
             (click)="selectEvenement(evt)">\r
          <div class="pl-evt-card__badge" [style.background]="evt.couleur">\r
            <i class="isax {{ evt.icone }} me-1"></i>{{ evt.label_type }}\r
          </div>\r
          <h6 class="pl-evt-card__title">{{ evt.titre }}</h6>\r
          <p class="pl-evt-card__sub" *ngIf="evt.formation_titre">\r
            <i class="isax isax-book-1 me-1"></i>{{ evt.formation_titre }}\r
          </p>\r
          <div class="pl-evt-card__infos">\r
            <span *ngIf="evt.date_debut">\r
              <i class="isax isax-clock me-1"></i>\r
              {{ formatHeure(evt.date_debut) }}\r
              <ng-container *ngIf="evt.date_fin"> \u2013 {{ formatHeure(evt.date_fin) }}</ng-container>\r
            </span>\r
            <span *ngIf="evt.lieu">\r
              <i class="isax isax-location me-1"></i>{{ evt.lieu }}\r
            </span>\r
            <span *ngIf="evt.duree">\r
              <i class="isax isax-timer me-1"></i>{{ evt.duree }}\r
            </span>\r
          </div>\r
          <div class="pl-evt-card__footer">\r
            <span class="pl-evt-status" [class]="'pl-evt-status--' + evt.statut">\r
              {{ getStatutLabel(evt.statut) }}\r
            </span>\r
            <div class="pl-evt-prog" *ngIf="evt.progression > 0">\r
              <div class="pl-evt-prog__bar">\r
                <div class="pl-evt-prog__fill"\r
                     [style.width.%]="evt.progression"\r
                     [style.background]="evt.couleur"></div>\r
              </div>\r
              <span>{{ evt.progression }}%</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div><!-- /pl-calendar-wrap -->\r
\r
  <!-- L\xC9GENDE -->\r
  <div class="pl-legende mt-4">\r
    <div class="pl-legende__item">\r
      <span class="pl-legende__dot" style="background:#10b981"></span>Pr\xE9sentiel\r
    </div>\r
    <div class="pl-legende__item">\r
      <span class="pl-legende__dot" style="background:#3b82f6"></span>En ligne / Webinaire\r
    </div>\r
  </div>\r
\r
  <!-- EMPTY -->\r
  <div class="pl-empty mt-4" *ngIf="totalMois === 0">\r
    <i class="isax isax-calendar pl-empty__icon"></i>\r
    <h6>Aucun \xE9v\xE9nement ce mois</h6>\r
    <p>Naviguez vers un autre mois ou v\xE9rifiez vos inscriptions.</p>\r
  </div>\r
\r
</ng-container>`, styles: ['/* src/app/features/student/student-planning/student-planning.component.scss */\n.qq-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring div:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring div:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring div:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pl-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  gap: 12px;\n}\n.pl-error i {\n  font-size: 3rem;\n  color: #ef4444;\n}\n.pl-error p {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n}\n.pl-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.pl-header__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n}\n.pl-header__sub {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.pl-stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 768px) {\n  .pl-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pl-stats {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.pl-stat-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 18px;\n  border-radius: 20px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.pl-stat-card i {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.pl-stat-card__value {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.pl-stat-card__label {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.pl-stat-card--total i {\n  color: #069b8f;\n}\n.pl-stat-card--presentiel i {\n  color: #10b981;\n}\n.pl-stat-card--enligne i {\n  color: #3b82f6;\n}\n.pl-stat-card--session i {\n  color: #f59e0b;\n}\n.pl-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.pl-nav {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pl-nav__btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  cursor: pointer;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.pl-nav__btn:hover {\n  background: #e6f7f5;\n  color: #069b8f;\n  border-color: rgba(6, 155, 143, 0.2);\n}\n.pl-nav__label {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 130px;\n  text-align: center;\n}\n.pl-nav__mois {\n  font-size: 16px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.pl-nav__annee {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.pl-nav__today {\n  padding: 7px 16px;\n  border-radius: 8px;\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1px solid rgba(6, 155, 143, 0.2);\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pl-nav__today:hover {\n  background: #069b8f;\n  color: #fff;\n}\n.pl-filtres {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.pl-filtre {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 7px 14px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1.5px solid #e2e8f0;\n  transition: all 0.2s ease;\n}\n.pl-filtre i {\n  font-size: 13px;\n}\n.pl-filtre:hover {\n  background: #e2e8f0;\n  color: #334155;\n}\n.pl-filtre--active {\n  background: #0f172a;\n  color: #fff;\n  border-color: #0f172a;\n}\n.pl-filtre--presentiel.pl-filtre--active {\n  background: #10b981;\n  border-color: #10b981;\n}\n.pl-filtre--enligne.pl-filtre--active {\n  background: #3b82f6;\n  border-color: #3b82f6;\n}\n.pl-calendar-wrap {\n  position: relative;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.pl-calendar {\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  min-width: 700px;\n}\n.pl-calendar__headers {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background: #0f172a;\n}\n.pl-calendar__header-day {\n  padding: 12px 8px;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.5);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.pl-calendar__grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-top: 1px solid #f1f5f9;\n}\n.pl-day {\n  min-height: 110px;\n  padding: 8px;\n  border-right: 1px solid #f1f5f9;\n  border-bottom: 1px solid #f1f5f9;\n  cursor: default;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.pl-day:nth-child(7n) {\n  border-right: none;\n}\n.pl-day--other-month {\n  background: #f8fafc;\n}\n.pl-day--other-month .pl-day__num {\n  color: #cbd5e1;\n}\n.pl-day--today .pl-day__num {\n  background: #069b8f;\n  color: #fff;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pl-day--has-events {\n  cursor: pointer;\n}\n.pl-day--has-events:hover {\n  background: #e6f7f5;\n}\n.pl-day--selected {\n  background: #e6f7f5 !important;\n  border-color: rgba(6, 155, 143, 0.3);\n}\n.pl-day__num {\n  font-size: 13px;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 6px;\n  width: 26px;\n  height: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pl-day__events {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.pl-day-evt {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 6px;\n  border-radius: 5px;\n  font-size: 10px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.pl-day-evt i {\n  font-size: 11px;\n  flex-shrink: 0;\n}\n.pl-day-evt__title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n  color: #334155;\n}\n.pl-day-evt__more {\n  font-size: 10px;\n  color: #94a3b8;\n  font-weight: 600;\n  padding: 2px 6px;\n}\n.pl-popover {\n  position: absolute;\n  z-index: 100;\n  width: 340px;\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  display: flex;\n  flex-direction: column;\n  max-height: 480px;\n  overflow: hidden;\n  animation: pl-pop-in 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.pl-popover__arrow {\n  position: absolute;\n  bottom: -9px;\n  width: 18px;\n  height: 18px;\n  background: #0f172a;\n  border-right: 1px solid #e2e8f0;\n  border-bottom: 1px solid #e2e8f0;\n  transform: rotate(45deg);\n  border-radius: 3px;\n}\n.pl-popover__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  flex-shrink: 0;\n  background: #0f172a;\n  border-radius: 20px 20px 0 0;\n}\n.pl-popover__date {\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  text-transform: capitalize;\n}\n.pl-popover__count {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.4);\n  margin-top: 2px;\n}\n.pl-popover__close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.2s ease;\n  padding: 0;\n}\n.pl-popover__close:hover {\n  color: #fff;\n}\n.pl-popover__list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.pl-popover__list::-webkit-scrollbar {\n  width: 4px;\n}\n.pl-popover__list::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 4px;\n}\n@media (max-width: 768px) {\n  .pl-popover {\n    position: fixed;\n    top: auto !important;\n    left: 50% !important;\n    bottom: 0;\n    transform: translateX(-50%);\n    width: 100%;\n    max-width: 100vw;\n    border-radius: 20px 20px 0 0;\n    max-height: 70vh;\n    animation: pl-slide-up 0.25s ease;\n  }\n  .pl-popover .pl-popover__arrow {\n    display: none;\n  }\n}\n@keyframes pl-pop-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes pl-slide-up {\n  from {\n    transform: translateX(-50%) translateY(100%);\n  }\n  to {\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.pl-evt-card {\n  border-radius: 14px;\n  padding: 14px 16px;\n  border: 1.5px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: #fff;\n}\n.pl-evt-card:hover {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.pl-evt-card--selected {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.pl-evt-card__badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 3px 10px;\n  border-radius: 99px;\n  color: #fff;\n  margin-bottom: 8px;\n}\n.pl-evt-card__badge i {\n  font-size: 11px;\n}\n.pl-evt-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n  line-height: 1.4;\n}\n.pl-evt-card__sub {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0 0 10px;\n  display: flex;\n  align-items: center;\n}\n.pl-evt-card__sub i {\n  font-size: 12px;\n}\n.pl-evt-card__infos {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 10px;\n}\n.pl-evt-card__infos span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #64748b;\n}\n.pl-evt-card__infos span i {\n  font-size: 13px;\n  color: #94a3b8;\n}\n.pl-evt-card__footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.pl-evt-status {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 99px;\n  text-transform: capitalize;\n}\n.pl-evt-status--non_commence {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.pl-evt-status--en_cours {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.pl-evt-status--termine {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.pl-evt-status--planifiee {\n  background: rgba(245, 158, 11, 0.1);\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n}\n.pl-evt-status--annulee {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.pl-evt-prog {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  max-width: 120px;\n}\n.pl-evt-prog span {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.pl-evt-prog__bar {\n  flex: 1;\n  height: 4px;\n  background: #f1f5f9;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.pl-evt-prog__fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.pl-legende {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.pl-legende__item {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 500;\n}\n.pl-legende__dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.pl-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  text-align: center;\n  gap: 10px;\n}\n.pl-empty__icon {\n  font-size: 3rem;\n  color: #069b8f;\n  opacity: 0.3;\n}\n.pl-empty h6 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.pl-empty p {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.pl-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n}\n.pl-btn--primary {\n  background: #069b8f;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.pl-btn--primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.4);\n}\n@media (max-width: 768px) {\n  .pl-day {\n    min-height: 70px;\n    padding: 4px;\n  }\n  .pl-day__num {\n    font-size: 11px;\n  }\n  .pl-day-evt {\n    display: none;\n  }\n  .pl-day--has-events::after {\n    content: "";\n    display: block;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background: #069b8f;\n    margin: 2px auto 0;\n  }\n  .pl-toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .pl-filtres {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=student-planning.component.css.map */\n'] }]
  }], () => [{ type: FormationService }, { type: ElementRef }], { calendarGridRef: [{
    type: ViewChild,
    args: ["calendarGrid"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentPlanningComponent, { className: "StudentPlanningComponent", filePath: "app/features/student/student-planning/student-planning.component.ts", lineNumber: 45 });
})();
export {
  StudentPlanningComponent
};
//# sourceMappingURL=chunk-N25TKMPF.js.map
