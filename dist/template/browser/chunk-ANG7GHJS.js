import {
  ProgressionService
} from "./chunk-26BTWGDU.js";
import {
  FormationService
} from "./chunk-R5DFAXQH.js";
import "./chunk-K7E3GT3E.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  filter,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTSSTHJF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/student/parcours-details/parcours-details.component.ts
var _c0 = (a0, a1, a2) => ({ "pad-badge--prog-done": a0, "pad-badge--prog-ongoing": a1, "pad-badge--prog-todo": a2 });
function ParcoursDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Chargement des formations de votre parcour...");
    \u0275\u0275elementEnd()();
  }
}
function ParcoursDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function ParcoursDetailsComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(5, "i", 8);
    \u0275\u0275text(6, " Retour ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ParcoursDetailsComponent_ng_container_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275text(2, "Parcours expir\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function ParcoursDetailsComponent_ng_container_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("pad-badge--assigned", ctx_r1.parcours.source !== "demande")("pad-badge--demande", ctx_r1.parcours.source === "demande");
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-tick-circle", ctx_r1.parcours.source !== "demande")("isax-send-2", ctx_r1.parcours.source === "demande");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.parcours.badge_label || "Assign\xE9", " ");
  }
}
function ParcoursDetailsComponent_ng_container_2_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.parcours.categorie, " ");
  }
}
function ParcoursDetailsComponent_ng_container_2_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c0, ctx_r1.progressionGlobale >= 100, ctx_r1.progressionGlobale > 0 && ctx_r1.progressionGlobale < 100, ctx_r1.progressionGlobale === 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 2, ctx_r1.progressionGlobale, "1.0-0"), "% compl\xE9t\xE9 ");
  }
}
function ParcoursDetailsComponent_ng_container_2_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.parcours.description);
  }
}
function ParcoursDetailsComponent_ng_container_2_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-calendar-add", ctx_r1.parcours.source !== "demande")("isax-tick-circle", ctx_r1.parcours.source === "demande");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.parcours.source === "demande" ? "Valid\xE9e le" : "Assign\xE9 le", " ", \u0275\u0275pipeBind2(3, 6, ctx_r1.parcours.date_assignation, "dd/MM/yyyy"), " ");
  }
}
function ParcoursDetailsComponent_ng_container_2_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275text(2, "Acc\xE8s permanent ");
    \u0275\u0275elementEnd();
  }
}
function ParcoursDetailsComponent_ng_container_2_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Expir\xE9 le ", \u0275\u0275pipeBind2(3, 1, ctx_r1.parcours.date_expiration, "dd/MM/yyyy"), " ");
  }
}
function ParcoursDetailsComponent_ng_container_2_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Expire le ", \u0275\u0275pipeBind2(3, 1, ctx_r1.parcours.date_expiration, "dd/MM/yyyy"), " ");
  }
}
function ParcoursDetailsComponent_ng_container_2_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Expire dans ", ctx_r1.getJoursRestants(ctx_r1.parcours.date_expiration), " jour(s) ! ");
  }
}
function ParcoursDetailsComponent_ng_container_2_div_32_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2, "Parcours compl\xE9t\xE9 ! ");
    \u0275\u0275elementEnd();
  }
}
function ParcoursDetailsComponent_ng_container_2_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "span", 63);
    \u0275\u0275element(3, "i", 64);
    \u0275\u0275text(4, "Progression globale ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 65);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 66);
    \u0275\u0275element(9, "div", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 68)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ParcoursDetailsComponent_ng_container_2_div_32_span_13_Template, 3, 0, "span", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("pad-progression-globale__pct--done", ctx_r1.progressionGlobale >= 100);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 12, ctx_r1.progressionGlobale, "1.0-0"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.progressionGlobale, "%");
    \u0275\u0275classProp("pad-progression-globale__fill--done", ctx_r1.progressionGlobale >= 100)("pad-progression-globale__fill--ongoing", ctx_r1.progressionGlobale > 0 && ctx_r1.progressionGlobale < 100);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.formationsTerminees, " / ", ctx_r1.totalFormations, " formations termin\xE9es");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.progressionGlobale >= 100);
  }
}
function ParcoursDetailsComponent_ng_container_2_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 37)(2, "div", 73)(3, "div", 74);
    \u0275\u0275element(4, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 76)(6, "strong");
    \u0275\u0275text(7, "Acc\xE8s expir\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, " Votre acc\xE8s \xE0 ce parcours a expir\xE9 le ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, ". Le contenu des formations est en lecture seule. Contactez votre responsable RH pour renouveler votre acc\xE8s. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 77);
    \u0275\u0275listener("click", function ParcoursDetailsComponent_ng_container_2_div_34_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(15, "i", 8);
    \u0275\u0275text(16, "Retour ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 1, ctx_r1.parcours.date_expiration, "dd/MM/yyyy"));
  }
}
function ParcoursDetailsComponent_ng_container_2_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 79);
    \u0275\u0275element(2, "span", 80);
    \u0275\u0275text(3, "Termin\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 81);
    \u0275\u0275element(5, "span", 80);
    \u0275\u0275text(6, "En cours ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 82);
    \u0275\u0275element(8, "span", 80);
    \u0275\u0275text(9, "\xC0 commencer ");
    \u0275\u0275elementEnd()();
  }
}
function ParcoursDetailsComponent_ng_container_2_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 83);
    \u0275\u0275element(2, "i", 84);
    \u0275\u0275text(3, " Contenu verrouill\xE9 \u2014 acc\xE8s expir\xE9 ");
    \u0275\u0275elementEnd()();
  }
}
function ParcoursDetailsComponent_ng_container_2_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275element(1, "div", 86);
    \u0275\u0275elementEnd();
  }
}
function ParcoursDetailsComponent_ng_container_2_div_47_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 115);
  }
}
function ParcoursDetailsComponent_ng_container_2_div_47_div_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 116);
  }
}
function ParcoursDetailsComponent_ng_container_2_div_47_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = \u0275\u0275nextContext().index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r7 + 1);
  }
}
function ParcoursDetailsComponent_ng_container_2_div_47_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r6.niveau, " ");
  }
}
function ParcoursDetailsComponent_ng_container_2_div_47_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r6.duree_totale, " min ");
  }
}
function ParcoursDetailsComponent_ng_container_2_div_47_div_1_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 120);
    \u0275\u0275listener("click", function ParcoursDetailsComponent_ng_container_2_div_47_div_1_button_31_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const f_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.commencerFormation(f_r6.id, $event));
    });
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("pad-formation-card__start-btn--resume", f_r6.statut_formation === "en_cours")("pad-formation-card__start-btn--done", f_r6.statut_formation === "termine");
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-play", f_r6.statut_formation === "non_commence")("isax-refresh", f_r6.statut_formation === "en_cours")("isax-eye", f_r6.statut_formation === "termine");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCTALabel(f_r6.statut_formation), " ");
  }
}
function ParcoursDetailsComponent_ng_container_2_div_47_div_1_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 120);
    \u0275\u0275listener("click", function ParcoursDetailsComponent_ng_container_2_div_47_div_1_button_32_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const f_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.demanderFormation(f_r6.id, $event));
    });
    \u0275\u0275element(1, "i", 121);
    \u0275\u0275text(2, " Demander ");
    \u0275\u0275elementEnd();
  }
}
function ParcoursDetailsComponent_ng_container_2_div_47_div_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275text(2, " D\xE9j\xE0 demand\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function ParcoursDetailsComponent_ng_container_2_div_47_div_1_button_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 123);
    \u0275\u0275element(1, "i", 124);
    \u0275\u0275text(2, " Verrouill\xE9 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function ParcoursDetailsComponent_ng_container_2_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90);
    \u0275\u0275listener("click", function ParcoursDetailsComponent_ng_container_2_div_47_div_1_Template_div_click_1_listener() {
      const f_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.estExpire && ctx_r1.goToFormation(f_r6.id));
    });
    \u0275\u0275elementStart(2, "div", 91);
    \u0275\u0275template(3, ParcoursDetailsComponent_ng_container_2_div_47_div_1_i_3_Template, 1, 0, "i", 92)(4, ParcoursDetailsComponent_ng_container_2_div_47_div_1_i_4_Template, 1, 0, "i", 93)(5, ParcoursDetailsComponent_ng_container_2_div_47_div_1_span_5_Template, 2, 1, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 94);
    \u0275\u0275element(7, "img", 95);
    \u0275\u0275elementStart(8, "div", 96);
    \u0275\u0275element(9, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 98);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 99)(13, "h5", 100);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 101);
    \u0275\u0275template(16, ParcoursDetailsComponent_ng_container_2_div_47_div_1_span_16_Template, 3, 1, "span", 102)(17, ParcoursDetailsComponent_ng_container_2_div_47_div_1_span_17_Template, 3, 1, "span", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 103)(19, "div", 104)(20, "span", 105);
    \u0275\u0275text(21, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 106);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 107);
    \u0275\u0275element(26, "div", 108);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 109)(28, "button", 110);
    \u0275\u0275listener("click", function ParcoursDetailsComponent_ng_container_2_div_47_div_1_Template_button_click_28_listener($event) {
      const f_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.voirDetail(f_r6.id, $event));
    });
    \u0275\u0275element(29, "i", 50);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, ParcoursDetailsComponent_ng_container_2_div_47_div_1_button_31_Template, 3, 11, "button", 111)(32, ParcoursDetailsComponent_ng_container_2_div_47_div_1_button_32_Template, 3, 0, "button", 112)(33, ParcoursDetailsComponent_ng_container_2_div_47_div_1_div_33_Template, 3, 0, "div", 113)(34, ParcoursDetailsComponent_ng_container_2_div_47_div_1_button_34_Template, 3, 1, "button", 114);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("pad-formation-card--done", f_r6.statut_formation === "termine" && !ctx_r1.estExpire)("pad-formation-card--ongoing", f_r6.statut_formation === "en_cours" && !ctx_r1.estExpire)("pad-formation-card--expire", ctx_r1.estExpire)("pad-formation-card--no-click", ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275classProp("pad-formation-card__order--done", f_r6.statut_formation === "termine" && !ctx_r1.estExpire)("pad-formation-card__order--expire", ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estExpire && f_r6.statut_formation === "termine");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estExpire && f_r6.statut_formation !== "termine");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getImageUrl(f_r6.image_couverture), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275classProp("pad-formation-card__img-overlay--expire", ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-play-circle", !ctx_r1.estExpire)("isax-lock", ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.estExpire ? "pad-statut--expire" : ctx_r1.getStatutClass(f_r6.statut_formation));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.estExpire ? "Expir\xE9" : ctx_r1.getStatutLabel(f_r6.statut_formation), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r6.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r6.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r6.duree_totale);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", ctx_r1.estExpire ? "#9ca3af" : ctx_r1.getProgressionColor(f_r6.statut_formation));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 47, +f_r6.progression, "1.0-0"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", +f_r6.progression, "%")("background", ctx_r1.estExpire ? "#9ca3af" : ctx_r1.getProgressionColor(f_r6.statut_formation));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pad-formation-card__detail-btn--disabled", ctx_r1.estExpire);
    \u0275\u0275property("disabled", ctx_r1.estExpire)("title", ctx_r1.estExpire ? "Acc\xE8s expir\xE9" : "Voir le d\xE9tail");
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-arrow-right-3", !ctx_r1.estExpire)("isax-lock", ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.estExpire ? "Acc\xE8s expir\xE9" : "Voir le d\xE9tail", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r6.est_inscrit && !ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !f_r6.est_inscrit && f_r6.peut_demander !== false && !ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !f_r6.est_inscrit && f_r6.peut_demander === false && !ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estExpire);
  }
}
function ParcoursDetailsComponent_ng_container_2_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275template(1, ParcoursDetailsComponent_ng_container_2_div_47_div_1_Template, 35, 50, "div", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formations);
  }
}
function ParcoursDetailsComponent_ng_container_2_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275element(1, "i", 126);
    \u0275\u0275elementStart(2, "h6", 127);
    \u0275\u0275text(3, "Aucune formation disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Ce parcours ne contient pas encore de formations publi\xE9es.");
    \u0275\u0275elementEnd()();
  }
}
function ParcoursDetailsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275element(2, "div", 10)(3, "div", 11);
    \u0275\u0275elementStart(4, "div", 12)(5, "div", 13)(6, "div", 14)(7, "nav", 15)(8, "button", 16);
    \u0275\u0275listener("click", function ParcoursDetailsComponent_ng_container_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(9, "i", 17);
    \u0275\u0275text(10, "Explorer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 18);
    \u0275\u0275text(12, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 20);
    \u0275\u0275template(16, ParcoursDetailsComponent_ng_container_2_span_16_Template, 3, 0, "span", 21)(17, ParcoursDetailsComponent_ng_container_2_span_17_Template, 3, 9, "span", 22)(18, ParcoursDetailsComponent_ng_container_2_span_18_Template, 3, 1, "span", 23);
    \u0275\u0275elementStart(19, "span", 24);
    \u0275\u0275element(20, "i", 25);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ParcoursDetailsComponent_ng_container_2_span_22_Template, 4, 9, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h1", 27);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ParcoursDetailsComponent_ng_container_2_p_25_Template, 2, 1, "p", 28);
    \u0275\u0275elementStart(26, "div", 29);
    \u0275\u0275template(27, ParcoursDetailsComponent_ng_container_2_span_27_Template, 4, 9, "span", 2)(28, ParcoursDetailsComponent_ng_container_2_span_28_Template, 3, 0, "span", 30)(29, ParcoursDetailsComponent_ng_container_2_span_29_Template, 4, 4, "span", 31)(30, ParcoursDetailsComponent_ng_container_2_span_30_Template, 4, 4, "span", 2)(31, ParcoursDetailsComponent_ng_container_2_span_31_Template, 3, 1, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, ParcoursDetailsComponent_ng_container_2_div_32_Template, 14, 15, "div", 33);
    \u0275\u0275element(33, "div", 34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(34, ParcoursDetailsComponent_ng_container_2_div_34_Template, 17, 4, "div", 35);
    \u0275\u0275elementStart(35, "section", 36)(36, "div", 37)(37, "div", 38)(38, "div", 39)(39, "h4", 40);
    \u0275\u0275element(40, "i", 41);
    \u0275\u0275text(41, " Formations incluses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 42);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, ParcoursDetailsComponent_ng_container_2_div_44_Template, 10, 0, "div", 43)(45, ParcoursDetailsComponent_ng_container_2_div_45_Template, 4, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, ParcoursDetailsComponent_ng_container_2_div_46_Template, 2, 0, "div", 44)(47, ParcoursDetailsComponent_ng_container_2_div_47_Template, 2, 1, "div", 45)(48, ParcoursDetailsComponent_ng_container_2_div_48_Template, 6, 0, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("pad-hero--expire", ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", ctx_r1.parcours.image_couverture ? "url(" + ctx_r1.parcours.image_couverture + ")" : "none");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.parcours.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parcours.categorie);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.parcours.nombre_formations, " formation(s) ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estExpire);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.parcours.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parcours.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.parcours.date_assignation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.parcours.date_expiration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estExpire && ctx_r1.parcours.date_expiration && !ctx_r1.isExpiringSoon(ctx_r1.parcours.date_expiration));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estExpire && ctx_r1.isExpiringSoon(ctx_r1.parcours.date_expiration));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estExpire);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275classProp("pad-section--expire", ctx_r1.estExpire);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.formations.length, " formation(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estExpire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.formations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.formations.length === 0);
  }
}
var ParcoursDetailsComponent = class _ParcoursDetailsComponent {
  route;
  router;
  formationsService;
  progressionService;
  parcoursId;
  parcours = null;
  formations = [];
  loading = true;
  error = "";
  progressionGlobale = 0;
  totalFormations = 0;
  formationsTerminees = 0;
  estTermine = false;
  source = "demande";
  filtreStatut = "tous";
  routerSub;
  progressionSub;
  _visibilityHandler = () => {
    if (document.visibilityState === "visible") {
      this.refreshProgressions();
    }
  };
  constructor(route, router, formationsService, progressionService) {
    this.route = route;
    this.router = router;
    this.formationsService = formationsService;
    this.progressionService = progressionService;
  }
  ngOnInit() {
    this.parcoursId = Number(this.route.snapshot.paramMap.get("id"));
    if (!this.parcoursId) {
      this.error = "Parcours introuvable";
      this.loading = false;
      return;
    }
    this.loadDetail();
    this.progressionSub = this.progressionService.change$.subscribe(() => {
      this._syncFormationsDepuisService();
    });
    this.routerSub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const url = e.urlAfterRedirects || e.url;
      if (url.includes(`/parcours-details/${this.parcoursId}`)) {
        this.refreshProgressions();
      }
    });
    document.addEventListener("visibilitychange", this._visibilityHandler);
  }
  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.progressionSub?.unsubscribe();
    document.removeEventListener("visibilitychange", this._visibilityHandler);
  }
  loadDetail() {
    this.loading = true;
    this.error = "";
    this.formationsService.getParcoursFormationsWithStatus(this.parcoursId).subscribe({
      next: (res) => {
        this.parcours = res.parcours ?? null;
        this.formations = res.formations ?? [];
        this.progressionGlobale = res.progression ?? 0;
        this.totalFormations = res.total_formations ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;
        this.estTermine = res.est_termine ?? false;
        this.source = res.source ?? "demande";
        if (this.parcours) {
          this.parcours.nombre_formations = this.totalFormations;
        }
        this._syncFormationsDepuisService();
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger le parcours.";
        this.loading = false;
      }
    });
  }
  refreshProgressions() {
    this.formationsService.getParcoursFormationsWithStatus(this.parcoursId).subscribe({
      next: (res) => {
        this.formations = res.formations ?? [];
        this.progressionGlobale = res.progression ?? 0;
        this.totalFormations = res.total_formations ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;
        this.estTermine = res.est_termine ?? false;
        this._syncFormationsDepuisService();
      },
      error: () => {
      }
    });
  }
  _syncFormationsDepuisService() {
    if (!this.formations.length)
      return;
    let terminees = 0;
    let sommeProgressions = 0;
    this.formations = this.formations.map((f) => {
      const percentService = this.progressionService.getPercent(f.id, this.parcoursId);
      const progression = percentService > 0 ? percentService : f.progression ?? 0;
      const statut = progression >= 100 ? "termine" : progression > 0 ? "en_cours" : f.statut_formation ?? "non_commence";
      if (statut === "termine")
        terminees++;
      sommeProgressions += progression;
      return __spreadProps(__spreadValues({}, f), { progression, statut_formation: statut, est_terminee: progression >= 100 });
    });
    const total = this.formations.length;
    if (total === 0)
      return;
    const progressionMoyenne = Math.round(sommeProgressions / total);
    if (progressionMoyenne > this.progressionGlobale) {
      this.progressionGlobale = progressionMoyenne;
    }
    this.formationsTerminees = terminees;
    this.estTermine = this.progressionGlobale >= 100;
  }
  get estExpire() {
    if (this.estTermine)
      return false;
    if (!this.parcours?.date_expiration)
      return false;
    return new Date(this.parcours.date_expiration) < /* @__PURE__ */ new Date();
  }
  isExpiringSoon(dateExpiration) {
    if (!dateExpiration)
      return false;
    const today = /* @__PURE__ */ new Date();
    const expiration = new Date(dateExpiration);
    const diffTime = expiration.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    return diffDays > 0 && diffDays <= 7;
  }
  getJoursRestants(dateExpiration) {
    if (!dateExpiration)
      return 0;
    const today = /* @__PURE__ */ new Date();
    const expiration = new Date(dateExpiration);
    const diffTime = expiration.getTime() - today.getTime();
    return Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  }
  get formationsFiltrees() {
    if (this.filtreStatut === "tous")
      return this.formations;
    return this.formations.filter((f) => f.statut_formation === this.filtreStatut);
  }
  get countTerminees() {
    return this.formations.filter((f) => f.statut_formation === "termine").length;
  }
  get countEnCours() {
    return this.formations.filter((f) => f.statut_formation === "en_cours").length;
  }
  get countNonCommence() {
    return this.formations.filter((f) => f.statut_formation === "non_commence").length;
  }
  setFiltre(f) {
    this.filtreStatut = f;
  }
  voirDetail(formationId, event) {
    event.stopPropagation();
    if (this.estExpire)
      return;
    this.router.navigate(["/courses/course-details", formationId], {
      state: { fromPage: "parcours", parcoursId: this.parcoursId }
    });
  }
  commencerFormation(formationId, event) {
    event.stopPropagation();
    if (this.estExpire)
      return;
    this.openFormationInNewTab(formationId);
  }
  goToFormation(formationId) {
    if (this.estExpire)
      return;
    this.openFormationInNewTab(formationId);
  }
  openFormationInNewTab(formationId) {
    const params = { fromPage: "parcours" };
    if (this.parcoursId)
      params["parcoursId"] = String(this.parcoursId);
    const url = this.router.serializeUrl(this.router.createUrlTree(["/courses/course-watch", formationId], { queryParams: params }));
    window.open(url, "_blank");
  }
  goBack() {
    this.router.navigate(["/student/students-explorer"]);
  }
  demanderFormation(formationId, event) {
    event.stopPropagation();
    this.router.navigate(["/student/students-explorer"], {
      queryParams: { formationId }
    });
  }
  getStatutLabel(statut) {
    return { termine: "Termin\xE9", en_cours: "En cours", non_commence: "\xC0 commencer" }[statut] ?? "\xC0 commencer";
  }
  getStatutClass(statut) {
    return { termine: "pad-statut--done", en_cours: "pad-statut--ongoing", non_commence: "pad-statut--todo" }[statut] ?? "pad-statut--todo";
  }
  getProgressionColor(statut) {
    return { termine: "#16a34a", en_cours: "#069b8f", non_commence: "#e5e7eb" }[statut] ?? "#e5e7eb";
  }
  getNiveauClass(niveau) {
    return { debutant: "niveau-debutant", intermediaire: "niveau-inter", avance: "niveau-avance" }[niveau] ?? "";
  }
  getCTALabel(statut) {
    return { termine: "Revoir", en_cours: "Reprendre", non_commence: "Commencer" }[statut] ?? "Commencer";
  }
  getImageUrl(path) {
    return this.formationsService.getImageUrl(path);
  }
  static \u0275fac = function ParcoursDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParcoursDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(ProgressionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParcoursDetailsComponent, selectors: [["app-parcours-details"]], decls: 3, vars: 3, consts: [["class", "qq-loading", 4, "ngIf"], ["class", "sc-error", 4, "ngIf"], [4, "ngIf"], [1, "qq-loading"], [1, "qq-loading__ring"], [1, "sc-error"], [1, "isax", "isax-warning-2", "sc-error__icon"], [1, "sc-error__retry", 3, "click"], [1, "isax", "isax-arrow-left", "me-1"], [1, "pad-hero"], [1, "pad-hero__bg"], [1, "pad-hero__overlay"], [1, "container", "position-relative", 2, "z-index", "2"], [1, "row"], [1, "col-lg-8"], [1, "pad-breadcrumb", "mb-3"], [1, "pad-breadcrumb__back", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "pad-breadcrumb__sep"], [1, "pad-breadcrumb__current"], [1, "pad-hero__badges", "mb-3"], ["class", "pad-badge pad-badge--expired", 4, "ngIf"], ["class", "pad-badge", 3, "pad-badge--assigned", "pad-badge--demande", 4, "ngIf"], ["class", "pad-badge pad-badge--cat", 4, "ngIf"], [1, "pad-badge", "pad-badge--count"], [1, "isax", "isax-book-1", "me-1"], ["class", "pad-badge", 3, "ngClass", 4, "ngIf"], [1, "pad-hero__title"], ["class", "pad-hero__subtitle", 4, "ngIf"], [1, "pad-hero__assignation", "mt-3"], ["class", "pad-permanent", 4, "ngIf"], ["class", "pad-expired", 4, "ngIf"], ["class", "pad-warning", 4, "ngIf"], ["class", "pad-progression-globale mt-4", 4, "ngIf"], [1, "pad-hero__divider", "mt-4"], ["class", "pad-expire-banner", 4, "ngIf"], [1, "pad-section"], [1, "container"], [1, "pad-section__header"], [1, "pad-section__header-left"], [1, "pad-section__title"], [1, "isax", "isax-book-1", "me-2", 2, "color", "#7c3aed"], [1, "pad-count-chip"], ["class", "pad-legende", 4, "ngIf"], ["class", "sc-loading py-4", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["class", "sc-empty", 4, "ngIf"], [1, "pad-badge", "pad-badge--expired"], [1, "isax", "isax-calendar-remove", "me-1"], [1, "pad-badge"], [1, "isax", "me-1"], [1, "pad-badge", "pad-badge--cat"], [1, "isax", "isax-category", "me-1"], [1, "pad-badge", 3, "ngClass"], [1, "isax", "isax-chart-2", "me-1"], [1, "pad-hero__subtitle"], [1, "pad-permanent"], [1, "isax", "isax-infinity", "me-1"], [1, "pad-expired"], [1, "pad-warning"], [1, "isax", "isax-warning-2", "me-1"], [1, "pad-progression-globale", "mt-4"], [1, "pad-progression-globale__header"], [1, "pad-progression-globale__label"], [1, "isax", "isax-chart-2", "me-2"], [1, "pad-progression-globale__pct"], [1, "pad-progression-globale__bar"], [1, "pad-progression-globale__fill"], [1, "pad-progression-globale__detail"], ["class", "pad-progression-globale__complete", 4, "ngIf"], [1, "pad-progression-globale__complete"], [1, "isax", "isax-tick-circle", "me-1"], [1, "pad-expire-banner"], [1, "pad-expire-banner__inner"], [1, "pad-expire-banner__icon"], [1, "isax", "isax-calendar-remove"], [1, "pad-expire-banner__text"], [1, "pad-expire-banner__btn", 3, "click"], [1, "pad-legende"], [1, "pad-legende__item", "pad-legende__item--done"], [1, "pad-legende__dot"], [1, "pad-legende__item", "pad-legende__item--ongoing"], [1, "pad-legende__item", "pad-legende__item--todo"], [1, "pad-legende__item", "pad-legende__item--expire"], [1, "isax", "isax-lock", "me-1", 2, "font-size", "13px"], [1, "sc-loading", "py-4"], [1, "sc-loading__spinner"], [1, "row", "g-4"], ["class", "col-xl-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "col-md-6"], [1, "pad-formation-card", 3, "click"], [1, "pad-formation-card__order"], ["class", "isax isax-lock", 4, "ngIf"], ["class", "isax isax-tick-circle", 4, "ngIf"], [1, "pad-formation-card__img-wrap"], ["alt", "", 1, "pad-formation-card__img", 3, "src"], [1, "pad-formation-card__img-overlay"], [1, "isax"], [1, "pad-formation-card__statut-badge", 3, "ngClass"], [1, "pad-formation-card__body"], [1, "pad-formation-card__title"], [1, "pad-formation-card__meta"], ["class", "pad-meta-chip", 4, "ngIf"], [1, "pad-formation-progress", "mt-3"], [1, "pad-formation-progress__header"], [1, "pad-formation-progress__label"], [1, "pad-formation-progress__pct"], [1, "pad-formation-progress__bar"], [1, "pad-formation-progress__fill"], [1, "pad-formation-card__footer"], [1, "pad-formation-card__detail-btn", 3, "click", "disabled", "title"], ["class", "pad-formation-card__start-btn", 3, "pad-formation-card__start-btn--resume", "pad-formation-card__start-btn--done", "click", 4, "ngIf"], ["class", "pad-formation-card__start-btn", 3, "click", 4, "ngIf"], ["class", "pad-formation-card__start-btn pad-formation-card__start-btn--disabled", "style", "cursor: not-allowed; opacity: 0.6;", 4, "ngIf"], ["class", "pad-formation-card__start-btn pad-formation-card__start-btn--expire", "title", "Acc\xE8s expir\xE9 \u2014 contactez votre RH", 3, "disabled", 4, "ngIf"], [1, "isax", "isax-lock"], [1, "isax", "isax-tick-circle"], [1, "pad-meta-chip"], [1, "isax", "isax-chart", "me-1"], [1, "isax", "isax-clock", "me-1"], [1, "pad-formation-card__start-btn", 3, "click"], [1, "isax", "isax-send-2", "me-1"], [1, "pad-formation-card__start-btn", "pad-formation-card__start-btn--disabled", 2, "cursor", "not-allowed", "opacity", "0.6"], ["title", "Acc\xE8s expir\xE9 \u2014 contactez votre RH", 1, "pad-formation-card__start-btn", "pad-formation-card__start-btn--expire", 3, "disabled"], [1, "isax", "isax-lock", "me-1"], [1, "sc-empty"], [1, "isax", "isax-book-1", "sc-empty__icon"], [1, "sc-empty__title"]], template: function ParcoursDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ParcoursDetailsComponent_div_0_Template, 8, 0, "div", 0)(1, ParcoursDetailsComponent_div_1_Template, 7, 1, "div", 1)(2, ParcoursDetailsComponent_ng_container_2_Template, 49, 27, "ng-container", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.parcours);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe], styles: ["\n\n.qq-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes _ngcontent-%COMP%_qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pad-hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 60px 0 40px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #034d47 0%,\n      #067a70 100%);\n}\n.pad-hero--expire[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #374151 0%,\n      #4b5563 100%);\n}\n.pad-hero__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: 0.15;\n}\n.pad-hero__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to right,\n      rgba(3, 77, 71, 0.9) 0%,\n      rgba(6, 122, 112, 0.6) 100%);\n}\n.pad-hero__badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.pad-hero__title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  color: #fff;\n  margin: 12px 0 8px;\n  line-height: 1.2;\n}\n@media (max-width: 767px) {\n  .pad-hero__title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.pad-hero__subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.75);\n  margin: 0;\n  line-height: 1.6;\n}\n.pad-hero__assignation[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-top: 12px;\n}\n.pad-hero__divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.15);\n  margin-top: 32px;\n}\n.pad-expire-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-bottom: 2px solid #fca5a5;\n}\n.pad-expire-banner__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 0;\n  flex-wrap: wrap;\n}\n.pad-expire-banner__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: #fee2e2;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.pad-expire-banner__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #ef4444;\n}\n.pad-expire-banner__text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.pad-expire-banner__text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #b91c1c;\n}\n.pad-expire-banner__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.pad-expire-banner__text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.pad-expire-banner__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 8px;\n  border: 1.5px solid #fca5a5;\n  background: #fff;\n  color: #ef4444;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.pad-expire-banner__btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.pad-progression-globale[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 14px;\n  padding: 16px 20px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.pad-progression-globale__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.pad-progression-globale__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.85);\n  display: flex;\n  align-items: center;\n}\n.pad-progression-globale__pct[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #fff;\n}\n.pad-progression-globale__pct--done[_ngcontent-%COMP%] {\n  color: #86efac;\n}\n.pad-progression-globale__bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.pad-progression-globale__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  background: rgba(255, 255, 255, 0.4);\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pad-progression-globale__fill--ongoing[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #34d399,\n      #059669);\n}\n.pad-progression-globale__fill--done[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #86efac,\n      #16a34a);\n}\n.pad-progression-globale__detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 8px 0 0;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.65);\n}\n.pad-progression-globale__complete[_ngcontent-%COMP%] {\n  color: #86efac;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n}\n.pad-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.pad-breadcrumb__back[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #fff;\n  border-radius: 8px;\n  padding: 6px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n}\n.pad-breadcrumb__back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.pad-breadcrumb__sep[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n}\n.pad-breadcrumb__current[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 500;\n}\n.pad-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 12px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.pad-badge--assigned[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.25);\n  color: #86efac;\n  border: 1px solid rgba(134, 239, 172, 0.3);\n}\n.pad-badge--cat[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.pad-badge--count[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.3);\n  color: #a7f3d0;\n  border: 1px solid rgba(167, 243, 208, 0.3);\n}\n.pad-badge--demande[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.35);\n  color: #a7f3d0;\n  border: 1px solid rgba(167, 243, 208, 0.4);\n}\n.pad-badge--prog-done[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.3);\n  color: #86efac;\n  border: 1px solid rgba(134, 239, 172, 0.4);\n}\n.pad-badge--prog-ongoing[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.3);\n  color: #a7f3d0;\n  border: 1px solid rgba(167, 243, 208, 0.3);\n}\n.pad-badge--prog-todo[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.pad-badge--expired[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.3);\n  color: #fca5a5;\n  border: 1px solid rgba(252, 165, 165, 0.4);\n}\n.pad-permanent[_ngcontent-%COMP%] {\n  color: #86efac;\n}\n.pad-warning[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.pad-expired[_ngcontent-%COMP%] {\n  color: #fca5a5;\n  font-weight: 500;\n}\n.pad-section[_ngcontent-%COMP%] {\n  padding: 40px 0 60px;\n}\n.pad-section--expire[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.pad-section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.pad-section__header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.pad-section__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.pad-count-chip[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1px solid #99f6e4;\n  padding: 3px 12px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.pad-legende[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.pad-legende__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #475569;\n}\n.pad-legende__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.pad-legende__item--done[_ngcontent-%COMP%]   .pad-legende__dot[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.pad-legende__item--ongoing[_ngcontent-%COMP%]   .pad-legende__dot[_ngcontent-%COMP%] {\n  background: #069b8f;\n}\n.pad-legende__item--todo[_ngcontent-%COMP%]   .pad-legende__dot[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  border: 1px solid #94a3b8;\n}\n.pad-legende__item--expire[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: 600;\n  font-size: 12px;\n  background: #fee2e2;\n  padding: 4px 12px;\n  border-radius: 99px;\n  border: 1px solid #fca5a5;\n}\n.pad-formation-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.pad-formation-card[_ngcontent-%COMP%]:hover:not(.pad-formation-card--expire) {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n  border-color: rgba(6, 155, 143, 0.3);\n}\n.pad-formation-card--done[_ngcontent-%COMP%] {\n  border-color: rgba(16, 185, 129, 0.3);\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.pad-formation-card--ongoing[_ngcontent-%COMP%] {\n  border-color: rgba(6, 155, 143, 0.3);\n}\n.pad-formation-card--expire[_ngcontent-%COMP%] {\n  opacity: 0.72;\n  filter: grayscale(30%);\n  cursor: not-allowed;\n  border-color: #fca5a5 !important;\n  background: #fafafa !important;\n}\n.pad-formation-card--expire[_ngcontent-%COMP%]:hover {\n  opacity: 0.82;\n  filter: grayscale(15%);\n}\n.pad-formation-card--no-click[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.pad-formation-card--no-click[_ngcontent-%COMP%]   .pad-formation-card__footer[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n.pad-formation-card__order[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 3;\n  width: 28px;\n  height: 28px;\n  background: #069b8f;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.4);\n}\n.pad-formation-card__order--done[_ngcontent-%COMP%] {\n  background: #10b981;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);\n  font-size: 14px;\n}\n.pad-formation-card__order--expire[_ngcontent-%COMP%] {\n  background: #9ca3af;\n  box-shadow: none;\n  font-size: 14px;\n}\n.pad-formation-card__img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 160px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.pad-formation-card__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.pad-formation-card[_ngcontent-%COMP%]:not(.pad-formation-card--expire):hover   .pad-formation-card__img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.pad-formation-card__img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(6, 155, 143, 0);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.25s;\n}\n.pad-formation-card__img-overlay[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #fff;\n  opacity: 0;\n  transition: opacity 0.25s;\n}\n.pad-formation-card__img-overlay--expire[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.35) !important;\n}\n.pad-formation-card__img-overlay--expire[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n  font-size: 36px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.pad-formation-card[_ngcontent-%COMP%]:not(.pad-formation-card--expire):hover   .pad-formation-card__img-overlay[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.35);\n}\n.pad-formation-card[_ngcontent-%COMP%]:not(.pad-formation-card--expire):hover   .pad-formation-card__img-overlay[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.pad-formation-card__statut-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  z-index: 2;\n  padding: 4px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.pad-formation-card__body[_ngcontent-%COMP%] {\n  padding: 16px 16px 8px;\n  flex: 1;\n}\n.pad-formation-card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 10px;\n  line-height: 1.4;\n}\n.pad-formation-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.pad-formation-card__footer[_ngcontent-%COMP%] {\n  padding: 12px 16px 16px;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  border-top: 1px solid #e2e8f0;\n  margin-top: 12px;\n}\n.pad-formation-card__detail-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: #f8fafc;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pad-formation-card__detail-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e6f7f5;\n  color: #069b8f;\n  border-color: #99f6e4;\n}\n.pad-formation-card__detail-btn--disabled[_ngcontent-%COMP%], \n.pad-formation-card__detail-btn[_ngcontent-%COMP%]:disabled {\n  background: #f8fafc !important;\n  color: #94a3b8 !important;\n  border-color: #e2e8f0 !important;\n  cursor: not-allowed !important;\n  opacity: 0.65;\n}\n.pad-formation-card__start-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: #069b8f;\n  color: #fff;\n  border: none;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.3);\n}\n.pad-formation-card__start-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(4.4795031056, 115.7204968944, 106.7614906832);\n  transform: translateY(-1px);\n}\n.pad-formation-card__start-btn--resume[_ngcontent-%COMP%] {\n  background: #0284c7;\n  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.3);\n}\n.pad-formation-card__start-btn--resume[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(1.5940298507, 105.2059701493, 158.6059701493);\n}\n.pad-formation-card__start-btn--done[_ngcontent-%COMP%] {\n  background: #10b981;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);\n}\n.pad-formation-card__start-btn--done[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(12.752238806, 147.447761194, 102.8149253731);\n}\n.pad-formation-card__start-btn--expire[_ngcontent-%COMP%], \n.pad-formation-card__start-btn[_ngcontent-%COMP%]:disabled {\n  background: #9ca3af !important;\n  box-shadow: none !important;\n  cursor: not-allowed !important;\n  opacity: 0.8;\n  transform: none !important;\n}\n.pad-statut--done[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.9);\n  color: #fff;\n}\n.pad-statut--ongoing[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.9);\n  color: #fff;\n}\n.pad-statut--todo[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.45);\n  color: rgba(255, 255, 255, 0.8);\n}\n.pad-statut--expire[_ngcontent-%COMP%] {\n  background: rgba(156, 163, 175, 0.9);\n  color: #fff;\n}\n.pad-formation-progress__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.pad-formation-progress__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.pad-formation-progress__pct[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n}\n.pad-formation-progress__bar[_ngcontent-%COMP%] {\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.pad-formation-progress__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pad-meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 500;\n  background: #f8fafc;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.pad-meta-chip--cert[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #92400e;\n  border-color: #fde047;\n}\n.sc-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n  color: #94a3b8;\n}\n.sc-loading__spinner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.sc-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 13px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sc-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.sc-error__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ef4444;\n  opacity: 0.5;\n  margin-bottom: 12px;\n}\n.sc-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #475569;\n  margin-bottom: 16px;\n}\n.sc-error__retry[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 50px;\n  border: 1.5px solid #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-error__retry[_ngcontent-%COMP%]:hover {\n  background: #069b8f;\n  color: #fff;\n}\n.sc-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 72px 20px;\n  text-align: center;\n}\n.sc-empty__icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  color: rgba(6, 155, 143, 0.2);\n  margin-bottom: 16px;\n  display: block;\n}\n.sc-empty__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #475569;\n  margin-bottom: 8px;\n}\n.sc-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin-bottom: 20px;\n}\n@media (max-width: 767px) {\n  .pad-hero[_ngcontent-%COMP%] {\n    padding: 40px 0 24px;\n  }\n  .pad-hero__title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .pad-legende[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pad-expire-banner__inner[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .pad-expire-banner__btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .pad-formation-card__img-wrap[_ngcontent-%COMP%] {\n    height: 130px;\n  }\n  .pad-formation-card__title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .pad-formation-card__footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .pad-formation-card__detail-btn[_ngcontent-%COMP%], \n   .pad-formation-card__start-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=parcours-details.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParcoursDetailsComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-parcours-details", imports: [CommonModule], template: `<!-- LOADER -->\r
\r
<div class="qq-loading" *ngIf="loading">\r
  <div class="qq-loading__ring">\r
    <div></div><div></div><div></div><div></div>\r
  </div>\r
  <p>Chargement des formations de votre parcour...</p>\r
</div>\r
\r
<!-- ERREUR -->\r
<div class="sc-error" *ngIf="error && !loading">\r
  <i class="isax isax-warning-2 sc-error__icon"></i>\r
  <p>{{ error }}</p>\r
  <button class="sc-error__retry" (click)="goBack()">\r
    <i class="isax isax-arrow-left me-1"></i> Retour\r
  </button>\r
</div>\r
\r
<!-- CONTENU -->\r
<ng-container *ngIf="!loading && !error && parcours">\r
\r
  <!-- HERO -->\r
  <div class="pad-hero" [class.pad-hero--expire]="estExpire">\r
    <div class="pad-hero__bg"\r
         [style.background-image]="parcours.image_couverture ? 'url(' + parcours.image_couverture + ')' : 'none'">\r
    </div>\r
    <div class="pad-hero__overlay"></div>\r
    <div class="container position-relative" style="z-index:2">\r
      <div class="row">\r
        <div class="col-lg-8">\r
\r
          <!-- Breadcrumb -->\r
          <nav class="pad-breadcrumb mb-3">\r
            <button class="pad-breadcrumb__back" (click)="goBack()">\r
              <i class="isax isax-arrow-left-2 me-1"></i>Explorer\r
            </button>\r
            <span class="pad-breadcrumb__sep">/</span>\r
            <span class="pad-breadcrumb__current">{{ parcours.titre }}</span>\r
          </nav>\r
\r
          <!-- Badges -->\r
          <div class="pad-hero__badges mb-3">\r
            <!-- Badge expir\xE9 prioritaire -->\r
            <span class="pad-badge pad-badge--expired" *ngIf="estExpire">\r
              <i class="isax isax-calendar-remove me-1"></i>Parcours expir\xE9\r
            </span>\r
            <span class="pad-badge"\r
                  *ngIf="!estExpire"\r
                  [class.pad-badge--assigned]="parcours.source !== 'demande'"\r
                  [class.pad-badge--demande]="parcours.source === 'demande'">\r
              <i class="isax me-1"\r
                 [class.isax-tick-circle]="parcours.source !== 'demande'"\r
                 [class.isax-send-2]="parcours.source === 'demande'"></i>\r
              {{ parcours.badge_label || 'Assign\xE9' }}\r
            </span>\r
            <span class="pad-badge pad-badge--cat" *ngIf="parcours.categorie">\r
              <i class="isax isax-category me-1"></i>{{ parcours.categorie }}\r
            </span>\r
            <span class="pad-badge pad-badge--count">\r
              <i class="isax isax-book-1 me-1"></i>{{ parcours.nombre_formations }} formation(s)\r
            </span>\r
            <span class="pad-badge" *ngIf="!estExpire" [ngClass]="{\r
              'pad-badge--prog-done':    progressionGlobale >= 100,\r
              'pad-badge--prog-ongoing': progressionGlobale > 0 && progressionGlobale < 100,\r
              'pad-badge--prog-todo':    progressionGlobale === 0\r
            }">\r
              <i class="isax isax-chart-2 me-1"></i>{{ progressionGlobale | number:'1.0-0' }}% compl\xE9t\xE9\r
            </span>\r
          </div>\r
\r
          <h1 class="pad-hero__title">{{ parcours.titre }}</h1>\r
          <p class="pad-hero__subtitle" *ngIf="parcours.description">{{ parcours.description }}</p>\r
\r
          <!-- Infos date -->\r
          <div class="pad-hero__assignation mt-3">\r
            <span *ngIf="parcours.date_assignation">\r
              <i class="isax me-1"\r
                 [class.isax-calendar-add]="parcours.source !== 'demande'"\r
                 [class.isax-tick-circle]="parcours.source === 'demande'"></i>\r
              {{ parcours.source === 'demande' ? 'Valid\xE9e le' : 'Assign\xE9 le' }}\r
              {{ parcours.date_assignation | date:'dd/MM/yyyy' }}\r
            </span>\r
            <span *ngIf="!parcours.date_expiration" class="pad-permanent">\r
              <i class="isax isax-infinity me-1"></i>Acc\xE8s permanent\r
            </span>\r
            <span *ngIf="estExpire" class="pad-expired">\r
              <i class="isax isax-calendar-remove me-1"></i>\r
              Expir\xE9 le {{ parcours.date_expiration | date:'dd/MM/yyyy' }}\r
            </span>\r
            <span *ngIf="!estExpire && parcours.date_expiration && !isExpiringSoon(parcours.date_expiration)">\r
              <i class="isax isax-calendar-remove me-1"></i>\r
              Expire le {{ parcours.date_expiration | date:'dd/MM/yyyy' }}\r
            </span>\r
            <span *ngIf="!estExpire && isExpiringSoon(parcours.date_expiration)" class="pad-warning">\r
              <i class="isax isax-warning-2 me-1"></i>\r
              Expire dans {{ getJoursRestants(parcours.date_expiration) }} jour(s) !\r
            </span>\r
          </div>\r
\r
          <!-- PROGRESSION GLOBALE (masqu\xE9e si expir\xE9) -->\r
          <div class="pad-progression-globale mt-4" *ngIf="!estExpire">\r
            <div class="pad-progression-globale__header">\r
              <span class="pad-progression-globale__label">\r
                <i class="isax isax-chart-2 me-2"></i>Progression globale\r
              </span>\r
              <span class="pad-progression-globale__pct"\r
                    [class.pad-progression-globale__pct--done]="progressionGlobale >= 100">\r
                {{ progressionGlobale | number:'1.0-0' }}%\r
              </span>\r
            </div>\r
            <div class="pad-progression-globale__bar">\r
              <div class="pad-progression-globale__fill"\r
                   [style.width.%]="progressionGlobale"\r
                   [class.pad-progression-globale__fill--done]="progressionGlobale >= 100"\r
                   [class.pad-progression-globale__fill--ongoing]="progressionGlobale > 0 && progressionGlobale < 100">\r
              </div>\r
            </div>\r
            <p class="pad-progression-globale__detail">\r
              <span>{{ formationsTerminees }} / {{ totalFormations }} formations termin\xE9es</span>\r
              <span *ngIf="progressionGlobale >= 100" class="pad-progression-globale__complete">\r
                <i class="isax isax-tick-circle me-1"></i>Parcours compl\xE9t\xE9 !\r
              </span>\r
            </p>\r
          </div>\r
\r
          <div class="pad-hero__divider mt-4"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <!-- BANNI\xC8RE EXPIRATION                        -->\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="pad-expire-banner" *ngIf="estExpire">\r
    <div class="container">\r
      <div class="pad-expire-banner__inner">\r
        <div class="pad-expire-banner__icon">\r
          <i class="isax isax-calendar-remove"></i>\r
        </div>\r
        <div class="pad-expire-banner__text">\r
          <strong>Acc\xE8s expir\xE9</strong>\r
          <span>\r
            Votre acc\xE8s \xE0 ce parcours a expir\xE9 le\r
            <strong>{{ parcours.date_expiration | date:'dd/MM/yyyy' }}</strong>.\r
            Le contenu des formations est en lecture seule. Contactez votre responsable RH pour renouveler votre acc\xE8s.\r
          </span>\r
        </div>\r
        <button class="pad-expire-banner__btn" (click)="goBack()">\r
          <i class="isax isax-arrow-left me-1"></i>Retour\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- FORMATIONS -->\r
  <section class="pad-section" [class.pad-section--expire]="estExpire">\r
    <div class="container">\r
\r
      <div class="pad-section__header">\r
        <div class="pad-section__header-left">\r
          <h4 class="pad-section__title">\r
            <i class="isax isax-book-1 me-2" style="color:#7c3aed"></i>\r
            Formations incluses\r
          </h4>\r
          <span class="pad-count-chip">{{ formations.length }} formation(s)</span>\r
        </div>\r
        <!-- L\xE9gende statuts (masqu\xE9e si expir\xE9) -->\r
        <div class="pad-legende" *ngIf="!estExpire">\r
          <span class="pad-legende__item pad-legende__item--done">\r
            <span class="pad-legende__dot"></span>Termin\xE9e\r
          </span>\r
          <span class="pad-legende__item pad-legende__item--ongoing">\r
            <span class="pad-legende__dot"></span>En cours\r
          </span>\r
          <span class="pad-legende__item pad-legende__item--todo">\r
            <span class="pad-legende__dot"></span>\xC0 commencer\r
          </span>\r
        </div>\r
        <!-- L\xE9gende expir\xE9e -->\r
        <div class="pad-legende" *ngIf="estExpire">\r
          <span class="pad-legende__item pad-legende__item--expire">\r
            <i class="isax isax-lock me-1" style="font-size:13px"></i>\r
            Contenu verrouill\xE9 \u2014 acc\xE8s expir\xE9\r
          </span>\r
        </div>\r
      </div>\r
\r
      <div class="sc-loading py-4" *ngIf="loading">\r
        <div class="sc-loading__spinner"></div>\r
      </div>\r
\r
      <div class="row g-4" *ngIf="!loading && formations.length > 0">\r
        <div class="col-xl-4 col-md-6" *ngFor="let f of formations; let i = index">\r
\r
          <!-- Carte \u2014 gris\xE9e + non cliquable si expir\xE9 -->\r
          <div class="pad-formation-card"\r
               [class.pad-formation-card--done]="f.statut_formation === 'termine' && !estExpire"\r
               [class.pad-formation-card--ongoing]="f.statut_formation === 'en_cours' && !estExpire"\r
               [class.pad-formation-card--expire]="estExpire"\r
               [class.pad-formation-card--no-click]="estExpire"\r
               (click)="!estExpire && goToFormation(f.id)">\r
\r
            <!-- Num\xE9ro ordre -->\r
            <div class="pad-formation-card__order"\r
                 [class.pad-formation-card__order--done]="f.statut_formation === 'termine' && !estExpire"\r
                 [class.pad-formation-card__order--expire]="estExpire">\r
              <i class="isax isax-lock" *ngIf="estExpire"></i>\r
              <i class="isax isax-tick-circle" *ngIf="!estExpire && f.statut_formation === 'termine'"></i>\r
              <span *ngIf="!estExpire && f.statut_formation !== 'termine'">{{ i + 1 }}</span>\r
            </div>\r
\r
            <!-- Image -->\r
            <div class="pad-formation-card__img-wrap">\r
              <img [src]="getImageUrl(f.image_couverture)"\r
                   class="pad-formation-card__img" alt="">\r
              <!-- Overlay verrouill\xE9 si expir\xE9 -->\r
              <div class="pad-formation-card__img-overlay" [class.pad-formation-card__img-overlay--expire]="estExpire">\r
                <i class="isax" [class.isax-play-circle]="!estExpire" [class.isax-lock]="estExpire"></i>\r
              </div>\r
              <div class="pad-formation-card__statut-badge"\r
                   [ngClass]="estExpire ? 'pad-statut--expire' : getStatutClass(f.statut_formation)">\r
                {{ estExpire ? 'Expir\xE9' : getStatutLabel(f.statut_formation) }}\r
              </div>\r
            </div>\r
\r
            <!-- Body -->\r
            <div class="pad-formation-card__body">\r
              <h5 class="pad-formation-card__title">{{ f.titre }}</h5>\r
              <div class="pad-formation-card__meta">\r
                <span class="pad-meta-chip" *ngIf="f.niveau">\r
                  <i class="isax isax-chart me-1"></i>{{ f.niveau }}\r
                </span>\r
                <span class="pad-meta-chip" *ngIf="f.duree_totale">\r
                  <i class="isax isax-clock me-1"></i>{{ f.duree_totale }} min\r
                </span>\r
              </div>\r
\r
              <!-- Barre progression (gris\xE9e si expir\xE9) -->\r
              <div class="pad-formation-progress mt-3">\r
                <div class="pad-formation-progress__header">\r
                  <span class="pad-formation-progress__label">Progression</span>\r
                  <span class="pad-formation-progress__pct"\r
                        [style.color]="estExpire ? '#9ca3af' : getProgressionColor(f.statut_formation)">\r
                    {{ +f.progression | number:'1.0-0' }}%\r
                  </span>\r
                </div>\r
                <div class="pad-formation-progress__bar">\r
                  <div class="pad-formation-progress__fill"\r
                       [style.width.%]="+f.progression"\r
                       [style.background]="estExpire ? '#9ca3af' : getProgressionColor(f.statut_formation)">\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Footer -->\r
            <div class="pad-formation-card__footer">\r
\r
              <!-- Bouton "Voir le d\xE9tail" -->\r
              <button class="pad-formation-card__detail-btn"\r
                      [class.pad-formation-card__detail-btn--disabled]="estExpire"\r
                      [disabled]="estExpire"\r
                      [title]="estExpire ? 'Acc\xE8s expir\xE9' : 'Voir le d\xE9tail'"\r
                      (click)="voirDetail(f.id, $event)">\r
                <i class="isax me-1" [class.isax-arrow-right-3]="!estExpire" [class.isax-lock]="estExpire"></i>\r
                {{ estExpire ? 'Acc\xE8s expir\xE9' : 'Voir le d\xE9tail' }}\r
              </button>\r
\r
              <!-- Bouton "Commencer/Reprendre/Revoir" pour formations inscrites -->\r
              <button *ngIf="f.est_inscrit && !estExpire"\r
                      class="pad-formation-card__start-btn"\r
                      [class.pad-formation-card__start-btn--resume]="f.statut_formation === 'en_cours'"\r
                      [class.pad-formation-card__start-btn--done]="f.statut_formation === 'termine'"\r
                      (click)="commencerFormation(f.id, $event)">\r
                <i class="isax me-1"\r
                   [class.isax-play]="f.statut_formation === 'non_commence'"\r
                   [class.isax-refresh]="f.statut_formation === 'en_cours'"\r
                   [class.isax-eye]="f.statut_formation === 'termine'"></i>\r
                {{ getCTALabel(f.statut_formation) }}\r
              </button>\r
\r
              <!-- Bouton "Demander" pour formations non inscrites -->\r
              <button *ngIf="!f.est_inscrit && f.peut_demander !== false && !estExpire"\r
                      class="pad-formation-card__start-btn"\r
                      (click)="demanderFormation(f.id, $event)">\r
                <i class="isax isax-send-2 me-1"></i>\r
                Demander\r
              </button>\r
\r
              <!-- Badge "D\xE9j\xE0 demand\xE9" pour formations demand\xE9es mais non valid\xE9es -->\r
              <div *ngIf="!f.est_inscrit && f.peut_demander === false && !estExpire"\r
                   class="pad-formation-card__start-btn pad-formation-card__start-btn--disabled"\r
                   style="cursor: not-allowed; opacity: 0.6;">\r
                <i class="isax isax-clock me-1"></i>\r
                D\xE9j\xE0 demand\xE9\r
              </div>\r
\r
              <!-- Bouton verrouill\xE9 si expir\xE9 -->\r
              <button *ngIf="estExpire"\r
                      class="pad-formation-card__start-btn pad-formation-card__start-btn--expire"\r
                      [disabled]="true"\r
                      title="Acc\xE8s expir\xE9 \u2014 contactez votre RH">\r
                <i class="isax isax-lock me-1"></i>\r
                Verrouill\xE9\r
              </button>\r
\r
            </div>\r
\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="sc-empty" *ngIf="!loading && formations.length === 0">\r
        <i class="isax isax-book-1 sc-empty__icon"></i>\r
        <h6 class="sc-empty__title">Aucune formation disponible</h6>\r
        <p>Ce parcours ne contient pas encore de formations publi\xE9es.</p>\r
      </div>\r
\r
    </div>\r
  </section>\r
\r
</ng-container>`, styles: ["/* src/app/features/student/parcours-details/parcours-details.component.scss */\n.qq-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring div:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring div:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring div:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pad-hero {\n  position: relative;\n  padding: 60px 0 40px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #034d47 0%,\n      #067a70 100%);\n}\n.pad-hero--expire {\n  background:\n    linear-gradient(\n      135deg,\n      #374151 0%,\n      #4b5563 100%);\n}\n.pad-hero__bg {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: 0.15;\n}\n.pad-hero__overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to right,\n      rgba(3, 77, 71, 0.9) 0%,\n      rgba(6, 122, 112, 0.6) 100%);\n}\n.pad-hero__badges {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.pad-hero__title {\n  font-size: 32px;\n  font-weight: 800;\n  color: #fff;\n  margin: 12px 0 8px;\n  line-height: 1.2;\n}\n@media (max-width: 767px) {\n  .pad-hero__title {\n    font-size: 24px;\n  }\n}\n.pad-hero__subtitle {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.75);\n  margin: 0;\n  line-height: 1.6;\n}\n.pad-hero__assignation {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-top: 12px;\n}\n.pad-hero__divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.15);\n  margin-top: 32px;\n}\n.pad-expire-banner {\n  background: #fef2f2;\n  border-bottom: 2px solid #fca5a5;\n}\n.pad-expire-banner__inner {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 0;\n  flex-wrap: wrap;\n}\n.pad-expire-banner__icon {\n  width: 44px;\n  height: 44px;\n  background: #fee2e2;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.pad-expire-banner__icon i {\n  font-size: 22px;\n  color: #ef4444;\n}\n.pad-expire-banner__text {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.pad-expire-banner__text strong {\n  font-size: 14px;\n  font-weight: 700;\n  color: #b91c1c;\n}\n.pad-expire-banner__text span {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.pad-expire-banner__text span strong {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.pad-expire-banner__btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 8px;\n  border: 1.5px solid #fca5a5;\n  background: #fff;\n  color: #ef4444;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.pad-expire-banner__btn:hover {\n  background: #fee2e2;\n}\n.pad-progression-globale {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 14px;\n  padding: 16px 20px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.pad-progression-globale__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.pad-progression-globale__label {\n  font-size: 13px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.85);\n  display: flex;\n  align-items: center;\n}\n.pad-progression-globale__pct {\n  font-size: 20px;\n  font-weight: 800;\n  color: #fff;\n}\n.pad-progression-globale__pct--done {\n  color: #86efac;\n}\n.pad-progression-globale__bar {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.pad-progression-globale__fill {\n  height: 100%;\n  border-radius: 99px;\n  background: rgba(255, 255, 255, 0.4);\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pad-progression-globale__fill--ongoing {\n  background:\n    linear-gradient(\n      90deg,\n      #34d399,\n      #059669);\n}\n.pad-progression-globale__fill--done {\n  background:\n    linear-gradient(\n      90deg,\n      #86efac,\n      #16a34a);\n}\n.pad-progression-globale__detail {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 8px 0 0;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.65);\n}\n.pad-progression-globale__complete {\n  color: #86efac;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n}\n.pad-breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.pad-breadcrumb__back {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #fff;\n  border-radius: 8px;\n  padding: 6px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n}\n.pad-breadcrumb__back:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.pad-breadcrumb__sep {\n  color: rgba(255, 255, 255, 0.3);\n}\n.pad-breadcrumb__current {\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 500;\n}\n.pad-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 12px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.pad-badge--assigned {\n  background: rgba(22, 163, 74, 0.25);\n  color: #86efac;\n  border: 1px solid rgba(134, 239, 172, 0.3);\n}\n.pad-badge--cat {\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.pad-badge--count {\n  background: rgba(6, 155, 143, 0.3);\n  color: #a7f3d0;\n  border: 1px solid rgba(167, 243, 208, 0.3);\n}\n.pad-badge--demande {\n  background: rgba(6, 155, 143, 0.35);\n  color: #a7f3d0;\n  border: 1px solid rgba(167, 243, 208, 0.4);\n}\n.pad-badge--prog-done {\n  background: rgba(22, 163, 74, 0.3);\n  color: #86efac;\n  border: 1px solid rgba(134, 239, 172, 0.4);\n}\n.pad-badge--prog-ongoing {\n  background: rgba(6, 155, 143, 0.3);\n  color: #a7f3d0;\n  border: 1px solid rgba(167, 243, 208, 0.3);\n}\n.pad-badge--prog-todo {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.pad-badge--expired {\n  background: rgba(239, 68, 68, 0.3);\n  color: #fca5a5;\n  border: 1px solid rgba(252, 165, 165, 0.4);\n}\n.pad-permanent {\n  color: #86efac;\n}\n.pad-warning {\n  color: #fbbf24;\n}\n.pad-expired {\n  color: #fca5a5;\n  font-weight: 500;\n}\n.pad-section {\n  padding: 40px 0 60px;\n}\n.pad-section--expire {\n  background: #f9fafb;\n}\n.pad-section__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.pad-section__header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.pad-section__title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.pad-count-chip {\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1px solid #99f6e4;\n  padding: 3px 12px;\n  border-radius: 99px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.pad-legende {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.pad-legende__item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #475569;\n}\n.pad-legende__dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.pad-legende__item--done .pad-legende__dot {\n  background: #10b981;\n}\n.pad-legende__item--ongoing .pad-legende__dot {\n  background: #069b8f;\n}\n.pad-legende__item--todo .pad-legende__dot {\n  background: #e2e8f0;\n  border: 1px solid #94a3b8;\n}\n.pad-legende__item--expire {\n  color: #ef4444;\n  font-weight: 600;\n  font-size: 12px;\n  background: #fee2e2;\n  padding: 4px 12px;\n  border-radius: 99px;\n  border: 1px solid #fca5a5;\n}\n.pad-formation-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.pad-formation-card:hover:not(.pad-formation-card--expire) {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n  border-color: rgba(6, 155, 143, 0.3);\n}\n.pad-formation-card--done {\n  border-color: rgba(16, 185, 129, 0.3);\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.pad-formation-card--ongoing {\n  border-color: rgba(6, 155, 143, 0.3);\n}\n.pad-formation-card--expire {\n  opacity: 0.72;\n  filter: grayscale(30%);\n  cursor: not-allowed;\n  border-color: #fca5a5 !important;\n  background: #fafafa !important;\n}\n.pad-formation-card--expire:hover {\n  opacity: 0.82;\n  filter: grayscale(15%);\n}\n.pad-formation-card--no-click {\n  pointer-events: none;\n}\n.pad-formation-card--no-click .pad-formation-card__footer {\n  pointer-events: all;\n}\n.pad-formation-card__order {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 3;\n  width: 28px;\n  height: 28px;\n  background: #069b8f;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.4);\n}\n.pad-formation-card__order--done {\n  background: #10b981;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);\n  font-size: 14px;\n}\n.pad-formation-card__order--expire {\n  background: #9ca3af;\n  box-shadow: none;\n  font-size: 14px;\n}\n.pad-formation-card__img-wrap {\n  position: relative;\n  height: 160px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.pad-formation-card__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.pad-formation-card:not(.pad-formation-card--expire):hover .pad-formation-card__img {\n  transform: scale(1.04);\n}\n.pad-formation-card__img-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(6, 155, 143, 0);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.25s;\n}\n.pad-formation-card__img-overlay i {\n  font-size: 48px;\n  color: #fff;\n  opacity: 0;\n  transition: opacity 0.25s;\n}\n.pad-formation-card__img-overlay--expire {\n  background: rgba(0, 0, 0, 0.35) !important;\n}\n.pad-formation-card__img-overlay--expire i {\n  opacity: 1 !important;\n  font-size: 36px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.pad-formation-card:not(.pad-formation-card--expire):hover .pad-formation-card__img-overlay {\n  background: rgba(6, 155, 143, 0.35);\n}\n.pad-formation-card:not(.pad-formation-card--expire):hover .pad-formation-card__img-overlay i {\n  opacity: 1;\n}\n.pad-formation-card__statut-badge {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  z-index: 2;\n  padding: 4px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.pad-formation-card__body {\n  padding: 16px 16px 8px;\n  flex: 1;\n}\n.pad-formation-card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 10px;\n  line-height: 1.4;\n}\n.pad-formation-card__meta {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.pad-formation-card__footer {\n  padding: 12px 16px 16px;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  border-top: 1px solid #e2e8f0;\n  margin-top: 12px;\n}\n.pad-formation-card__detail-btn {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: #f8fafc;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pad-formation-card__detail-btn:hover:not(:disabled) {\n  background: #e6f7f5;\n  color: #069b8f;\n  border-color: #99f6e4;\n}\n.pad-formation-card__detail-btn--disabled,\n.pad-formation-card__detail-btn:disabled {\n  background: #f8fafc !important;\n  color: #94a3b8 !important;\n  border-color: #e2e8f0 !important;\n  cursor: not-allowed !important;\n  opacity: 0.65;\n}\n.pad-formation-card__start-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: #069b8f;\n  color: #fff;\n  border: none;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.3);\n}\n.pad-formation-card__start-btn:hover:not(:disabled) {\n  background: rgb(4.4795031056, 115.7204968944, 106.7614906832);\n  transform: translateY(-1px);\n}\n.pad-formation-card__start-btn--resume {\n  background: #0284c7;\n  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.3);\n}\n.pad-formation-card__start-btn--resume:hover:not(:disabled) {\n  background: rgb(1.5940298507, 105.2059701493, 158.6059701493);\n}\n.pad-formation-card__start-btn--done {\n  background: #10b981;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);\n}\n.pad-formation-card__start-btn--done:hover:not(:disabled) {\n  background: rgb(12.752238806, 147.447761194, 102.8149253731);\n}\n.pad-formation-card__start-btn--expire,\n.pad-formation-card__start-btn:disabled {\n  background: #9ca3af !important;\n  box-shadow: none !important;\n  cursor: not-allowed !important;\n  opacity: 0.8;\n  transform: none !important;\n}\n.pad-statut--done {\n  background: rgba(16, 185, 129, 0.9);\n  color: #fff;\n}\n.pad-statut--ongoing {\n  background: rgba(6, 155, 143, 0.9);\n  color: #fff;\n}\n.pad-statut--todo {\n  background: rgba(0, 0, 0, 0.45);\n  color: rgba(255, 255, 255, 0.8);\n}\n.pad-statut--expire {\n  background: rgba(156, 163, 175, 0.9);\n  color: #fff;\n}\n.pad-formation-progress__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.pad-formation-progress__label {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.pad-formation-progress__pct {\n  font-size: 12px;\n  font-weight: 700;\n}\n.pad-formation-progress__bar {\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.pad-formation-progress__fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pad-meta-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 500;\n  background: #f8fafc;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.pad-meta-chip--cert {\n  background: #fef9c3;\n  color: #92400e;\n  border-color: #fde047;\n}\n.sc-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n  color: #94a3b8;\n}\n.sc-loading__spinner {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.sc-loading p {\n  margin-top: 16px;\n  font-size: 13px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sc-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.sc-error__icon {\n  font-size: 3rem;\n  color: #ef4444;\n  opacity: 0.5;\n  margin-bottom: 12px;\n}\n.sc-error p {\n  font-size: 14px;\n  color: #475569;\n  margin-bottom: 16px;\n}\n.sc-error__retry {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 50px;\n  border: 1.5px solid #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-error__retry:hover {\n  background: #069b8f;\n  color: #fff;\n}\n.sc-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 72px 20px;\n  text-align: center;\n}\n.sc-empty__icon {\n  font-size: 3.5rem;\n  color: rgba(6, 155, 143, 0.2);\n  margin-bottom: 16px;\n  display: block;\n}\n.sc-empty__title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #475569;\n  margin-bottom: 8px;\n}\n.sc-empty p {\n  font-size: 13px;\n  color: #94a3b8;\n  margin-bottom: 20px;\n}\n@media (max-width: 767px) {\n  .pad-hero {\n    padding: 40px 0 24px;\n  }\n  .pad-hero__title {\n    font-size: 22px;\n  }\n  .pad-legende {\n    display: none;\n  }\n  .pad-expire-banner__inner {\n    gap: 10px;\n  }\n  .pad-expire-banner__btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .pad-formation-card__img-wrap {\n    height: 130px;\n  }\n  .pad-formation-card__title {\n    font-size: 14px;\n  }\n  .pad-formation-card__footer {\n    flex-direction: column;\n  }\n  .pad-formation-card__detail-btn,\n  .pad-formation-card__start-btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=parcours-details.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: FormationService }, { type: ProgressionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParcoursDetailsComponent, { className: "ParcoursDetailsComponent", filePath: "app/features/student/parcours-details/parcours-details.component.ts", lineNumber: 15 });
})();
export {
  ParcoursDetailsComponent
};
//# sourceMappingURL=chunk-ANG7GHJS.js.map
