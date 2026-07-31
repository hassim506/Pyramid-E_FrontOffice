import {
  SondageService
} from "./chunk-NYC46I4P.js";
import "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ZGFJXD53.js";
import "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-I2HNPZHV.js";
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
} from "./chunk-BSBCM3BI.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-mes-sondages/instructor-mes-sondages.component.ts
function InstructorMesSondagesComponent_ng_container_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function InstructorMesSondagesComponent_ng_container_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function InstructorMesSondagesComponent_ng_container_0_ng_container_28_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.sondages.length, " en attente");
  }
}
function InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h6", 32);
    \u0275\u0275text(4, "Aucune enqu\xEAte en attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 33);
    \u0275\u0275text(6, "Vous n'avez aucune enqu\xEAte \xE0 remplir pour le moment.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_10_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4.description);
  }
}
function InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_10_div_1_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59)(1, "em");
    \u0275\u0275text(2, "Aucune description fournie");
    \u0275\u0275elementEnd()();
  }
}
function InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_10_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ~", s_r4.duree_estimee, " min");
  }
}
function InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_10_div_1_Template_div_click_0_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.ouvrir(s_r4));
    });
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementStart(2, "div", 38)(3, "div", 39)(4, "span", 40);
    \u0275\u0275element(5, "i", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 42);
    \u0275\u0275text(8, "Nouveau");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h6", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_10_div_1_p_11_Template, 2, 1, "p", 44)(12, InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_10_div_1_p_12_Template, 3, 0, "p", 45);
    \u0275\u0275elementStart(13, "div", 46)(14, "span");
    \u0275\u0275element(15, "i", 47);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_10_div_1_span_17_Template, 3, 1, "span", 0);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275element(19, "i", 48);
    \u0275\u0275text(20, " Re\xE7u aujourd'hui");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 49)(22, "span", 50);
    \u0275\u0275text(23, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 51);
    \u0275\u0275text(25, "0%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 52);
    \u0275\u0275element(27, "div", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 54)(29, "button", 55);
    \u0275\u0275element(30, "i", 56);
    \u0275\u0275text(31, " R\xE9pondre \xE0 l'enqu\xEAte ");
    \u0275\u0275element(32, "i", 57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.typeColor(s_r4.type));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r0.typeColor(s_r4.type) + "18")("color", ctx_r0.typeColor(s_r4.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeLabel(s_r4.type), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r4.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r4.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r4.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", s_r4.nombre_questions, " question", s_r4.nombre_questions !== 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r4.duree_estimee);
  }
}
function InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_10_div_1_Template, 33, 13, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.sondages);
  }
}
function InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 30);
    \u0275\u0275element(2, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h6", 32);
    \u0275\u0275text(4, "Aucun sondage r\xE9pondu pour l'instant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 33);
    \u0275\u0275text(6, "Vos r\xE9ponses pass\xE9es s'afficheront ici");
    \u0275\u0275elementEnd()();
  }
}
function InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementStart(2, "div", 38)(3, "div", 39)(4, "span", 40);
    \u0275\u0275element(5, "i", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 63);
    \u0275\u0275element(8, "i", 64);
    \u0275\u0275text(9, " R\xE9pondu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h6", 43);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 46)(13, "span");
    \u0275\u0275element(14, "i", 47);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.typeColor(s_r5.type));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r0.typeColor(s_r5.type) + "18")("color", ctx_r0.typeColor(s_r5.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeLabel(s_r5.type), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r5.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", s_r5.nombre_questions, " question", s_r5.nombre_questions !== 1 ? "s" : "");
  }
}
function InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_18_div_1_Template, 16, 10, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.sondagesRepondus);
  }
}
function InstructorMesSondagesComponent_ng_container_0_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 17)(2, "div", 18)(3, "h5", 19);
    \u0275\u0275text(4, "\xC0 compl\xE9ter");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, InstructorMesSondagesComponent_ng_container_0_ng_container_28_span_5_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 21);
    \u0275\u0275listener("click", function InstructorMesSondagesComponent_ng_container_0_ng_container_28_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showHistorique = !ctx_r0.showHistorique);
    });
    \u0275\u0275element(7, "i", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_9_Template, 7, 0, "div", 23)(10, InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_10_Template, 2, 1, "div", 24);
    \u0275\u0275elementStart(11, "div", 25)(12, "div", 18)(13, "h5", 19);
    \u0275\u0275text(14, "D\xE9j\xE0 r\xE9pondus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 26);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_17_Template, 7, 0, "div", 27)(18, InstructorMesSondagesComponent_ng_container_0_ng_container_28_div_18_Template, 2, 1, "div", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.sondages.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.showHistorique ? "Masquer" : "Voir", " l'historique ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sondages.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sondages.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.repondus, " cl\xF4tur\xE9");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sondagesRepondus.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sondagesRepondus.length > 0);
  }
}
function InstructorMesSondagesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h4", 5);
    \u0275\u0275text(7, "Enqu\xEAtes & Sondages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, "Enqu\xEAtes publi\xE9es par votre organisation \xE0 votre intention");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "span", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15, "\xC0 compl\xE9ter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 8)(17, "span", 9);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 10);
    \u0275\u0275text(20, "R\xE9pondus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 8)(22, "span", 9);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 10);
    \u0275\u0275text(25, "Cl\xF4tur\xE9s");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(26, InstructorMesSondagesComponent_ng_container_0_div_26_Template, 4, 0, "div", 11)(27, InstructorMesSondagesComponent_ng_container_0_div_27_Template, 3, 1, "div", 12)(28, InstructorMesSondagesComponent_ng_container_0_ng_container_28_Template, 19, 7, "ng-container", 0);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.aCompleter);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.repondus);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.clotures);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && !ctx_r0.error);
  }
}
function InstructorMesSondagesComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275element(2, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 68);
    \u0275\u0275text(4, "Merci !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 69);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 70);
    \u0275\u0275listener("click", function InstructorMesSondagesComponent_ng_container_1_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.retour());
    });
    \u0275\u0275element(8, "i", 71);
    \u0275\u0275text(9, " Retour aux enqu\xEAtes");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.submitSuccess);
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selected.introduction);
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 92);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentQuestion.aide, " ");
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_7_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.reponses[ctx_r0.currentQuestion.id], $event) || (ctx_r0.reponses[ctx_r0.currentQuestion.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r0.currentQuestion.type);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reponses[ctx_r0.currentQuestion.id]);
    \u0275\u0275property("placeholder", ctx_r0.currentQuestion.placeholder || "Votre r\xE9ponse\u2026");
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "textarea", 95);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_8_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.reponses[ctx_r0.currentQuestion.id], $event) || (ctx_r0.reponses[ctx_r0.currentQuestion.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reponses[ctx_r0.currentQuestion.id]);
    \u0275\u0275property("placeholder", ctx_r0.currentQuestion.placeholder || "Votre r\xE9ponse\u2026");
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_9_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.reponses[ctx_r0.currentQuestion.id], $event) || (ctx_r0.reponses[ctx_r0.currentQuestion.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r0.currentQuestion.type === "numero" ? "number" : "date");
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reponses[ctx_r0.currentQuestion.id]);
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_10_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 99)(1, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_10_label_2_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.reponses[ctx_r0.currentQuestion.id], $event) || (ctx_r0.reponses[ctx_r0.currentQuestion.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 101);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("selected", ctx_r0.reponses[ctx_r0.currentQuestion.id] === opt_r12);
    \u0275\u0275advance();
    \u0275\u0275property("name", "q" + ctx_r0.currentQuestion.id)("value", opt_r12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reponses[ctx_r0.currentQuestion.id]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r12);
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 97);
    \u0275\u0275template(2, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_10_label_2_Template, 5, 6, "label", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.currentQuestion.options);
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_11_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    \u0275\u0275property("value", opt_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r14);
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "select", 102);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_11_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.reponses[ctx_r0.currentQuestion.id], $event) || (ctx_r0.reponses[ctx_r0.currentQuestion.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "option", 103);
    \u0275\u0275text(3, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_11_option_4_Template, 2, 2, "option", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reponses[ctx_r0.currentQuestion.id]);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.currentQuestion.options);
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_12_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 99)(1, "input", 106);
    \u0275\u0275listener("change", function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_12_label_2_Template_input_change_1_listener() {
      const opt_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.toggleCheckbox(ctx_r0.currentQuestion.id, opt_r16));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 107);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r16 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("selected", ctx_r0.isChecked(ctx_r0.currentQuestion.id, opt_r16));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isChecked(ctx_r0.currentQuestion.id, opt_r16));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(opt_r16);
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 97);
    \u0275\u0275template(2, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_12_label_2_Template, 5, 4, "label", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.currentQuestion.options);
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_13_button_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const v_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-star", ctx_r0.reponses[ctx_r0.currentQuestion.id] >= v_r18)("isax-star-1", !(ctx_r0.reponses[ctx_r0.currentQuestion.id] >= v_r18));
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_13_button_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const v_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r18);
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_13_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 111);
    \u0275\u0275listener("click", function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_13_button_2_Template_button_click_0_listener() {
      const v_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.reponses[ctx_r0.currentQuestion.id] = v_r18);
    });
    \u0275\u0275template(1, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_13_button_2_ng_container_1_Template, 2, 4, "ng-container", 0)(2, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_13_button_2_ng_container_2_Template, 2, 1, "ng-container", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("selected", ctx_r0.reponses[ctx_r0.currentQuestion.id] == v_r18);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestion.type === "notation");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestion.type !== "notation");
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.currentQuestion.valeur_min ?? 1, " \u2014 Min");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.currentQuestion.valeur_max ?? 10, " \u2014 Max");
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 108);
    \u0275\u0275template(2, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_13_button_2_Template, 3, 4, "button", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_13_div_3_Template, 5, 2, "div", 110);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.echelleValues(ctx_r0.currentQuestion));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestion.type === "echelle");
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 88);
    \u0275\u0275text(4);
    \u0275\u0275template(5, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_span_5_Template, 2, 0, "span", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_p_6_Template, 3, 1, "p", 90)(7, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_7_Template, 2, 3, "ng-container", 0)(8, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_8_Template, 2, 2, "ng-container", 0)(9, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_9_Template, 2, 2, "ng-container", 0)(10, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_10_Template, 3, 1, "ng-container", 0)(11, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_11_Template, 5, 2, "ng-container", 0)(12, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_12_Template, 3, 1, "ng-container", 0)(13, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_ng_container_13_Template, 4, 2, "ng-container", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Question ", ctx_r0.currentStep + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentQuestion.question, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestion.est_obligatoire);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestion.aide);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestion.type === "text" || ctx_r0.currentQuestion.type === "email");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestion.type === "textarea");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestion.type === "numero" || ctx_r0.currentQuestion.type === "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestion.type === "radio");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestion.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestion.type === "checkbox");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEchelle(ctx_r0.currentQuestion.type));
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitError, " ");
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function InstructorMesSondagesComponent_ng_container_1_ng_container_2_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.suivant());
    });
    \u0275\u0275text(1, " Suivant ");
    \u0275\u0275element(2, "i", 115);
    \u0275\u0275elementEnd();
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_button_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275text(2, " Soumettre");
    \u0275\u0275elementEnd();
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_button_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 117);
    \u0275\u0275text(2, " Envoi\u2026");
    \u0275\u0275elementEnd();
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 116);
    \u0275\u0275listener("click", function InstructorMesSondagesComponent_ng_container_1_ng_container_2_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.soumettre());
    });
    \u0275\u0275template(1, InstructorMesSondagesComponent_ng_container_1_ng_container_2_button_20_span_1_Template, 3, 0, "span", 0)(2, InstructorMesSondagesComponent_ng_container_1_ng_container_2_button_20_span_2_Template, 3, 0, "span", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.submitting);
  }
}
function InstructorMesSondagesComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 72)(2, "button", 73);
    \u0275\u0275listener("click", function InstructorMesSondagesComponent_ng_container_1_ng_container_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.retour());
    });
    \u0275\u0275element(3, "i", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h5", 74);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, InstructorMesSondagesComponent_ng_container_1_ng_container_2_p_7_Template, 2, 1, "p", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 76)(9, "div", 77);
    \u0275\u0275element(10, "div", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 79);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_13_Template, 14, 11, "div", 80)(14, InstructorMesSondagesComponent_ng_container_1_ng_container_2_div_14_Template, 3, 1, "div", 12);
    \u0275\u0275elementStart(15, "div", 81)(16, "button", 82);
    \u0275\u0275listener("click", function InstructorMesSondagesComponent_ng_container_1_ng_container_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.precedent());
    });
    \u0275\u0275element(17, "i", 71);
    \u0275\u0275text(18, " Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, InstructorMesSondagesComponent_ng_container_1_ng_container_2_button_19_Template, 3, 0, "button", 83)(20, InstructorMesSondagesComponent_ng_container_1_ng_container_2_button_20_Template, 3, 3, "button", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selected.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selected.introduction);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r0.progress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.currentStep + 1, " / ", ctx_r0.questions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.submitError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentStep === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.isLast);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLast);
  }
}
function InstructorMesSondagesComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InstructorMesSondagesComponent_ng_container_1_div_1_Template, 10, 1, "div", 65)(2, InstructorMesSondagesComponent_ng_container_1_ng_container_2_Template, 21, 11, "ng-container", 0);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.submitSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.submitSuccess);
  }
}
var InstructorMesSondagesComponent = class _InstructorMesSondagesComponent {
  sondageService;
  vue = "liste";
  sondages = [];
  sondagesRepondus = [];
  loading = true;
  error = "";
  showHistorique = false;
  selected = null;
  reponses = {};
  submitting = false;
  submitSuccess = "";
  submitError = "";
  currentStep = 0;
  constructor(sondageService) {
    this.sondageService = sondageService;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.sondageService.getMesSondagesRecus().subscribe({
      next: (res) => {
        const all = res.sondages ?? [];
        this.sondages = all.filter((s) => !s.deja_repondu);
        this.sondagesRepondus = all.filter((s) => s.deja_repondu);
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger les enqu\xEAtes.";
        this.loading = false;
      }
    });
  }
  get aCompleter() {
    return this.sondages.length;
  }
  get repondus() {
    return this.sondagesRepondus.length;
  }
  get clotures() {
    return 0;
  }
  ouvrir(s) {
    this.selected = s;
    this.reponses = {};
    this.currentStep = 0;
    this.submitSuccess = "";
    this.submitError = "";
    this.vue = "repondre";
  }
  retour() {
    this.vue = "liste";
    this.selected = null;
  }
  get questions() {
    return this.selected?.questions ?? [];
  }
  get currentQuestion() {
    return this.questions[this.currentStep] ?? null;
  }
  get isLast() {
    return this.currentStep === this.questions.length - 1;
  }
  get progress() {
    return this.questions.length ? Math.round((this.currentStep + 1) / this.questions.length * 100) : 0;
  }
  suivant() {
    if (this.currentStep < this.questions.length - 1)
      this.currentStep++;
  }
  precedent() {
    if (this.currentStep > 0)
      this.currentStep--;
  }
  toggleCheckbox(qId, val) {
    const arr = this.reponses[qId] ?? [];
    const idx = arr.indexOf(val);
    if (idx === -1)
      arr.push(val);
    else
      arr.splice(idx, 1);
    this.reponses[qId] = [...arr];
  }
  isChecked(qId, val) {
    return (this.reponses[qId] ?? []).includes(val);
  }
  soumettre() {
    if (!this.selected)
      return;
    this.submitting = true;
    this.submitError = "";
    const reponses = Object.entries(this.reponses).map(([qId, val]) => {
      const q = this.questions.find((q2) => q2.id === Number(qId));
      const isNum = q && ["echelle", "notation", "numero"].includes(q.type);
      const isMulti = q && q.type === "checkbox";
      return {
        question_id: Number(qId),
        reponse: !isMulti && !isNum ? String(val ?? "") : void 0,
        reponse_multiple: isMulti ? val : void 0,
        reponse_numerique: isNum ? Number(val) : void 0
      };
    });
    this.sondageService.respondSondage(this.selected.id, reponses).subscribe({
      next: (res) => {
        this.submitting = false;
        this.submitSuccess = res.message ?? "Merci pour votre r\xE9ponse !";
      },
      error: (err) => {
        this.submitting = false;
        this.submitError = err?.error?.message ?? "Une erreur est survenue.";
      }
    });
  }
  typeColor(type) {
    return this.sondageService.getTypeColor(type);
  }
  typeLabel(type) {
    return this.sondageService.getTypeLabel(type);
  }
  isEchelle(type) {
    return ["echelle", "notation"].includes(type);
  }
  echelleValues(q) {
    const min = q.valeur_min ?? 1;
    const max = q.valeur_max ?? (q.type === "notation" ? 5 : 10);
    return Array.from({ length: max - min + 1 }, (_, i) => min + i);
  }
  static \u0275fac = function InstructorMesSondagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorMesSondagesComponent)(\u0275\u0275directiveInject(SondageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorMesSondagesComponent, selectors: [["app-instructor-mes-sondages"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "ms-hero"], [1, "ms-hero__left"], [1, "ms-hero__icon"], [1, "isax", "isax-message-question"], [1, "ms-hero__title"], [1, "ms-hero__sub"], [1, "ms-hero__stats"], [1, "ms-stat"], [1, "ms-stat__value"], [1, "ms-stat__label"], ["class", "ms-loader", 4, "ngIf"], ["class", "ms-alert ms-alert--danger", 4, "ngIf"], [1, "ms-loader"], [1, "ms-spinner"], [1, "ms-alert", "ms-alert--danger"], [1, "isax", "isax-warning-2"], [1, "ms-section-header"], [1, "ms-section-header__left"], [1, "ms-section-title"], ["class", "ms-count-badge", 4, "ngIf"], ["type", "button", 1, "ms-link-btn", 3, "click"], [1, "isax", "isax-clock"], ["class", "ms-empty", 4, "ngIf"], ["class", "ms-grid", 4, "ngIf"], [1, "ms-section-header", "ms-section-header--secondary"], [1, "ms-count-badge", "ms-count-badge--muted"], ["class", "ms-empty ms-empty--small", 4, "ngIf"], [1, "ms-count-badge"], [1, "ms-empty"], [1, "ms-empty__icon"], [1, "isax", "isax-clipboard-tick"], [1, "ms-empty__title"], [1, "ms-empty__sub"], [1, "ms-grid"], ["class", "ms-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "ms-card", 3, "click"], [1, "ms-card__accent"], [1, "ms-card__body"], [1, "ms-card__header"], [1, "ms-badge"], [1, "isax", "isax-clipboard-text"], [1, "ms-badge", "ms-badge--new"], [1, "ms-card__title"], ["class", "ms-card__desc", 4, "ngIf"], ["class", "ms-card__desc ms-text-muted", 4, "ngIf"], [1, "ms-card__meta"], [1, "isax", "isax-note-21"], [1, "isax", "isax-calendar-1"], [1, "ms-card__progress"], [1, "ms-card__progress-label"], [1, "ms-card__progress-value"], [1, "ms-card__progress-bar"], [1, "ms-card__progress-fill", 2, "width", "0%"], [1, "ms-card__footer"], ["type", "button", 1, "ms-btn-repondre"], [1, "isax", "isax-edit-2"], [1, "isax", "isax-arrow-right-3", "ms-btn-arrow"], [1, "ms-card__desc"], [1, "ms-card__desc", "ms-text-muted"], [1, "ms-empty", "ms-empty--small"], ["class", "ms-card ms-card--done", 4, "ngFor", "ngForOf"], [1, "ms-card", "ms-card--done"], [1, "ms-badge", "ms-badge--done"], [1, "isax", "isax-tick-circle"], ["class", "ms-success-screen", 4, "ngIf"], [1, "ms-success-screen"], [1, "ms-success-icon"], [1, "ms-success-title"], [1, "ms-success-msg"], ["type", "button", 1, "ms-btn-back", 3, "click"], [1, "isax", "isax-arrow-left-2"], [1, "ms-rep-header"], ["type", "button", 1, "ms-back-btn", 3, "click"], [1, "ms-rep-title"], ["class", "ms-rep-sub", 4, "ngIf"], [1, "ms-progress-wrap"], [1, "ms-progress-bar"], [1, "ms-progress-fill"], [1, "ms-progress-label"], ["class", "ms-question-card", 4, "ngIf"], [1, "ms-nav"], ["type", "button", 1, "ms-nav-btn", "ms-nav-btn--ghost", 3, "click", "disabled"], ["type", "button", "class", "ms-nav-btn ms-nav-btn--primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "ms-nav-btn ms-nav-btn--success", 3, "disabled", "click", 4, "ngIf"], [1, "ms-rep-sub"], [1, "ms-question-card"], [1, "ms-q-num"], [1, "ms-q-text"], ["class", "ms-required", 4, "ngIf"], ["class", "ms-q-aide", 4, "ngIf"], [1, "ms-required"], [1, "ms-q-aide"], [1, "isax", "isax-info-circle"], [1, "ms-input", 3, "ngModelChange", "type", "ngModel", "placeholder"], ["rows", "4", 1, "ms-input", "ms-textarea", 3, "ngModelChange", "ngModel", "placeholder"], [1, "ms-input", "ms-input--sm", 3, "ngModelChange", "type", "ngModel"], [1, "ms-options"], ["class", "ms-option", 3, "selected", 4, "ngFor", "ngForOf"], [1, "ms-option"], ["type", "radio", 1, "ms-option-input", 3, "ngModelChange", "name", "value", "ngModel"], [1, "ms-option-dot"], [1, "ms-input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "checkbox", 1, "ms-option-input", 3, "change", "checked"], [1, "ms-option-check"], [1, "ms-scale"], ["type", "button", "class", "ms-scale-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "ms-scale-labels", 4, "ngIf"], ["type", "button", 1, "ms-scale-btn", 3, "click"], [1, "isax"], [1, "ms-scale-labels"], ["type", "button", 1, "ms-nav-btn", "ms-nav-btn--primary", 3, "click"], [1, "isax", "isax-arrow-right-3"], ["type", "button", 1, "ms-nav-btn", "ms-nav-btn--success", 3, "click", "disabled"], [1, "ms-mini-spinner"]], template: function InstructorMesSondagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorMesSondagesComponent_ng_container_0_Template, 29, 6, "ng-container", 0)(1, InstructorMesSondagesComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.vue === "liste");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vue === "repondre" && ctx.selected);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.ms-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 24px 28px;\n  margin-bottom: 28px;\n}\n.ms-hero__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.ms-hero__icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #ecfdf5;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ms-hero__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #059669;\n}\n.ms-hero__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.ms-hero__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.ms-hero__stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.ms-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 12px 20px;\n  min-width: 90px;\n}\n.ms-stat__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111827;\n}\n.ms-stat__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.ms-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.ms-section-header--secondary[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.ms-section-header__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ms-section-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.ms-count-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: #fff7ed;\n  color: #d97706;\n}\n.ms-count-badge--muted[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.ms-link-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  color: #059669;\n  transition: color 0.15s;\n}\n.ms-link-btn[_ngcontent-%COMP%]:hover {\n  color: rgb(3.3548387097, 100.6451612903, 70.4516129032);\n}\n.ms-loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  justify-content: center;\n  padding: 60px 0;\n  color: #6b7280;\n}\n.ms-spinner[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #059669;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ms-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.ms-alert--danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #DC2626;\n  border: 1px solid #fecaca;\n}\n.ms-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #f9fafb;\n  border-radius: 14px;\n  border: 1.5px dashed #e5e7eb;\n}\n.ms-empty--small[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n}\n.ms-empty__icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #d1d5db;\n  margin-bottom: 12px;\n}\n.ms-empty__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 6px;\n}\n.ms-empty__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n  margin: 0;\n}\n.ms-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  margin-bottom: 8px;\n}\n.ms-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  display: flex;\n  flex-direction: column;\n  border: 1.5px solid #e5e7eb;\n}\n.ms-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #059669;\n}\n.ms-card--done[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.ms-card--done[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.ms-card__accent[_ngcontent-%COMP%] {\n  height: 4px;\n}\n.ms-card__body[_ngcontent-%COMP%] {\n  padding: 20px 20px 14px;\n  flex: 1;\n}\n.ms-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.ms-card__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 6px;\n  line-height: 1.4;\n}\n.ms-card__desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0 0 14px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.ms-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 14px;\n}\n.ms-card__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ms-card__progress[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 4px 8px;\n}\n.ms-card__progress-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n.ms-card__progress-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #059669;\n  text-align: right;\n  grid-column: 2;\n}\n.ms-card__progress-bar[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.ms-card__progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #059669;\n  border-radius: 3px;\n  transition: width 0.3s;\n}\n.ms-card__footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid #f3f4f6;\n}\n.ms-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ms-badge--new[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.ms-badge--done[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.ms-text-muted[_ngcontent-%COMP%] {\n  color: #9ca3af !important;\n}\n.ms-btn-repondre[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n  width: 100%;\n  padding: 10px 16px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n  color: #374151;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: border-color 0.2s, background 0.2s;\n}\n.ms-btn-repondre[_ngcontent-%COMP%]:hover {\n  border-color: #059669;\n  background: #ecfdf5;\n  color: #059669;\n}\n.ms-btn-repondre[_ngcontent-%COMP%]   .ms-btn-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 16px;\n}\n.ms-rep-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.ms-back-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.ms-back-btn[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.ms-rep-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: #111827;\n}\n.ms-rep-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0;\n}\n.ms-progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 28px;\n}\n.ms-progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #e5e7eb;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ms-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #059669,\n      #34d399);\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.ms-progress-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.ms-question-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  padding: 32px 28px;\n  margin-bottom: 24px;\n}\n.ms-q-num[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #059669;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 10px;\n}\n.ms-q-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n  line-height: 1.5;\n}\n.ms-q-aide[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 0 20px;\n}\n.ms-required[_ngcontent-%COMP%] {\n  color: #DC2626;\n  margin-left: 2px;\n}\n.ms-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ms-input[_ngcontent-%COMP%]:focus {\n  border-color: #059669;\n}\n.ms-input--sm[_ngcontent-%COMP%] {\n  max-width: 220px;\n}\n.ms-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  font-family: inherit;\n}\n.ms-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ms-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 16px;\n  border-radius: 10px;\n  border: 1.5px solid #e5e7eb;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n  font-size: 14px;\n  color: #374151;\n}\n.ms-option.selected[_ngcontent-%COMP%] {\n  border-color: #059669;\n  background: #ecfdf5;\n  color: #059669;\n  font-weight: 600;\n}\n.ms-option[_ngcontent-%COMP%]:hover:not(.selected) {\n  border-color: #6ee7b7;\n  background: #f0fdf4;\n}\n.ms-option-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.ms-option-dot[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid #d1d5db;\n  flex-shrink: 0;\n}\n.ms-option.selected[_ngcontent-%COMP%]   .ms-option-dot[_ngcontent-%COMP%] {\n  border-color: #059669;\n  background: #059669;\n}\n.ms-option-check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 5px;\n  border: 2px solid #d1d5db;\n  flex-shrink: 0;\n}\n.ms-option.selected[_ngcontent-%COMP%]   .ms-option-check[_ngcontent-%COMP%] {\n  border-color: #059669;\n  background: #059669;\n}\n.ms-scale[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n.ms-scale-btn[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n  color: #374151;\n}\n.ms-scale-btn.selected[_ngcontent-%COMP%] {\n  background: #059669;\n  border-color: #059669;\n  color: #fff;\n}\n.ms-scale-btn[_ngcontent-%COMP%]:hover:not(.selected) {\n  border-color: #059669;\n  color: #059669;\n}\n.ms-scale-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ms-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.ms-nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 22px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: opacity 0.2s;\n}\n.ms-nav-btn--ghost[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n.ms-nav-btn--ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.ms-nav-btn--ghost[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ms-nav-btn--primary[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n  margin-left: auto;\n}\n.ms-nav-btn--primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.ms-nav-btn--success[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n  margin-left: auto;\n}\n.ms-nav-btn--success[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.ms-nav-btn--success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.ms-mini-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n.ms-success-screen[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n}\n.ms-success-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #059669;\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n@keyframes _ngcontent-%COMP%_pop {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.ms-success-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  margin: 0 0 10px;\n  color: #111827;\n}\n.ms-success-msg[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #6b7280;\n  margin: 0 0 28px;\n}\n.ms-btn-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 22px;\n  border-radius: 10px;\n  background: #f3f4f6;\n  border: none;\n  color: #374151;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.ms-btn-back[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n/*# sourceMappingURL=instructor-mes-sondages.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorMesSondagesComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-mes-sondages", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- VUE LISTE                                           -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<ng-container *ngIf="vue === 'liste'">

  <!-- Hero Header -->
  <div class="ms-hero">
    <div class="ms-hero__left">
      <div class="ms-hero__icon"><i class="isax isax-message-question"></i></div>
      <div>
        <h4 class="ms-hero__title">Enqu\xEAtes & Sondages</h4>
        <p class="ms-hero__sub">Enqu\xEAtes publi\xE9es par votre organisation \xE0 votre intention</p>
      </div>
    </div>
    <div class="ms-hero__stats">
      <div class="ms-stat">
        <span class="ms-stat__value">{{ aCompleter }}</span>
        <span class="ms-stat__label">\xC0 compl\xE9ter</span>
      </div>
      <div class="ms-stat">
        <span class="ms-stat__value">{{ repondus }}</span>
        <span class="ms-stat__label">R\xE9pondus</span>
      </div>
      <div class="ms-stat">
        <span class="ms-stat__value">{{ clotures }}</span>
        <span class="ms-stat__label">Cl\xF4tur\xE9s</span>
      </div>
    </div>
  </div>

  <!-- Loader -->
  <div *ngIf="loading" class="ms-loader">
    <div class="ms-spinner"></div><span>Chargement\u2026</span>
  </div>

  <!-- Error -->
  <div *ngIf="error" class="ms-alert ms-alert--danger">
    <i class="isax isax-warning-2"></i> {{ error }}
  </div>

  <ng-container *ngIf="!loading && !error">

    <!-- Section \xC0 compl\xE9ter -->
    <div class="ms-section-header">
      <div class="ms-section-header__left">
        <h5 class="ms-section-title">\xC0 compl\xE9ter</h5>
        <span class="ms-count-badge" *ngIf="sondages.length > 0">{{ sondages.length }} en attente</span>
      </div>
      <button type="button" class="ms-link-btn" (click)="showHistorique = !showHistorique">
        <i class="isax isax-clock"></i> {{ showHistorique ? 'Masquer' : 'Voir' }} l'historique
      </button>
    </div>

    <!-- Empty -->
    <div *ngIf="sondages.length === 0" class="ms-empty">
      <div class="ms-empty__icon"><i class="isax isax-clipboard-tick"></i></div>
      <h6 class="ms-empty__title">Aucune enqu\xEAte en attente</h6>
      <p class="ms-empty__sub">Vous n'avez aucune enqu\xEAte \xE0 remplir pour le moment.</p>
    </div>

    <!-- Grid -->
    <div *ngIf="sondages.length > 0" class="ms-grid">
      <div *ngFor="let s of sondages" class="ms-card" (click)="ouvrir(s)">
        <div class="ms-card__accent" [style.background]="typeColor(s.type)"></div>
        <div class="ms-card__body">
          <div class="ms-card__header">
            <span class="ms-badge" [style.background]="typeColor(s.type) + '18'" [style.color]="typeColor(s.type)">
              <i class="isax isax-clipboard-text"></i> {{ typeLabel(s.type) }}
            </span>
            <span class="ms-badge ms-badge--new">Nouveau</span>
          </div>
          <h6 class="ms-card__title">{{ s.titre }}</h6>
          <p class="ms-card__desc" *ngIf="s.description">{{ s.description }}</p>
          <p class="ms-card__desc ms-text-muted" *ngIf="!s.description"><em>Aucune description fournie</em></p>
          <div class="ms-card__meta">
            <span><i class="isax isax-note-21"></i> {{ s.nombre_questions }} question{{ s.nombre_questions !== 1 ? 's' : '' }}</span>
            <span *ngIf="s.duree_estimee"><i class="isax isax-clock"></i> ~{{ s.duree_estimee }} min</span>
            <span><i class="isax isax-calendar-1"></i> Re\xE7u aujourd'hui</span>
          </div>
          <div class="ms-card__progress">
            <span class="ms-card__progress-label">Progression</span>
            <span class="ms-card__progress-value">0%</span>
            <div class="ms-card__progress-bar">
              <div class="ms-card__progress-fill" style="width: 0%"></div>
            </div>
          </div>
        </div>
        <div class="ms-card__footer">
          <button type="button" class="ms-btn-repondre">
            <i class="isax isax-edit-2"></i> R\xE9pondre \xE0 l'enqu\xEAte
            <i class="isax isax-arrow-right-3 ms-btn-arrow"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Section D\xE9j\xE0 r\xE9pondus -->
    <div class="ms-section-header ms-section-header--secondary">
      <div class="ms-section-header__left">
        <h5 class="ms-section-title">D\xE9j\xE0 r\xE9pondus</h5>
        <span class="ms-count-badge ms-count-badge--muted">{{ repondus }} cl\xF4tur\xE9</span>
      </div>
    </div>

    <div *ngIf="sondagesRepondus.length === 0" class="ms-empty ms-empty--small">
      <div class="ms-empty__icon"><i class="isax isax-clipboard-tick"></i></div>
      <h6 class="ms-empty__title">Aucun sondage r\xE9pondu pour l'instant</h6>
      <p class="ms-empty__sub">Vos r\xE9ponses pass\xE9es s'afficheront ici</p>
    </div>

    <div *ngIf="sondagesRepondus.length > 0" class="ms-grid">
      <div *ngFor="let s of sondagesRepondus" class="ms-card ms-card--done">
        <div class="ms-card__accent" [style.background]="typeColor(s.type)"></div>
        <div class="ms-card__body">
          <div class="ms-card__header">
            <span class="ms-badge" [style.background]="typeColor(s.type) + '18'" [style.color]="typeColor(s.type)">
              <i class="isax isax-clipboard-text"></i> {{ typeLabel(s.type) }}
            </span>
            <span class="ms-badge ms-badge--done"><i class="isax isax-tick-circle"></i> R\xE9pondu</span>
          </div>
          <h6 class="ms-card__title">{{ s.titre }}</h6>
          <div class="ms-card__meta">
            <span><i class="isax isax-note-21"></i> {{ s.nombre_questions }} question{{ s.nombre_questions !== 1 ? 's' : '' }}</span>
          </div>
        </div>
      </div>
    </div>

  </ng-container>
</ng-container>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!-- VUE R\xC9PONSE                                         -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<ng-container *ngIf="vue === 'repondre' && selected">

  <div *ngIf="submitSuccess" class="ms-success-screen">
    <div class="ms-success-icon"><i class="isax isax-tick-circle"></i></div>
    <h4 class="ms-success-title">Merci !</h4>
    <p class="ms-success-msg">{{ submitSuccess }}</p>
    <button type="button" class="ms-btn-back" (click)="retour()"><i class="isax isax-arrow-left-2"></i> Retour aux enqu\xEAtes</button>
  </div>

  <ng-container *ngIf="!submitSuccess">

    <div class="ms-rep-header">
      <button type="button" class="ms-back-btn" (click)="retour()"><i class="isax isax-arrow-left-2"></i></button>
      <div>
        <h5 class="ms-rep-title">{{ selected.titre }}</h5>
        <p class="ms-rep-sub" *ngIf="selected.introduction">{{ selected.introduction }}</p>
      </div>
    </div>

    <div class="ms-progress-wrap">
      <div class="ms-progress-bar">
        <div class="ms-progress-fill" [style.width.%]="progress"></div>
      </div>
      <span class="ms-progress-label">{{ currentStep + 1 }} / {{ questions.length }}</span>
    </div>

    <div class="ms-question-card" *ngIf="currentQuestion">
      <div class="ms-q-num">Question {{ currentStep + 1 }}</div>
      <h5 class="ms-q-text">
        {{ currentQuestion.question }}
        <span *ngIf="currentQuestion.est_obligatoire" class="ms-required">*</span>
      </h5>
      <p *ngIf="currentQuestion.aide" class="ms-q-aide">
        <i class="isax isax-info-circle"></i> {{ currentQuestion.aide }}
      </p>

      <ng-container *ngIf="currentQuestion.type === 'text' || currentQuestion.type === 'email'">
        <input [type]="currentQuestion.type" class="ms-input"
               [(ngModel)]="reponses[currentQuestion.id!]"
               [placeholder]="currentQuestion.placeholder || 'Votre r\xE9ponse\u2026'">
      </ng-container>

      <ng-container *ngIf="currentQuestion.type === 'textarea'">
        <textarea class="ms-input ms-textarea" rows="4"
                  [(ngModel)]="reponses[currentQuestion.id!]"
                  [placeholder]="currentQuestion.placeholder || 'Votre r\xE9ponse\u2026'"></textarea>
      </ng-container>

      <ng-container *ngIf="currentQuestion.type === 'numero' || currentQuestion.type === 'date'">
        <input [type]="currentQuestion.type === 'numero' ? 'number' : 'date'" class="ms-input ms-input--sm"
               [(ngModel)]="reponses[currentQuestion.id!]">
      </ng-container>

      <ng-container *ngIf="currentQuestion.type === 'radio'">
        <div class="ms-options">
          <label *ngFor="let opt of currentQuestion.options" class="ms-option"
                 [class.selected]="reponses[currentQuestion.id!] === opt">
            <input type="radio" class="ms-option-input" [name]="'q' + currentQuestion.id"
                   [value]="opt" [(ngModel)]="reponses[currentQuestion.id!]">
            <span class="ms-option-dot"></span><span>{{ opt }}</span>
          </label>
        </div>
      </ng-container>

      <ng-container *ngIf="currentQuestion.type === 'select'">
        <select class="ms-input" [(ngModel)]="reponses[currentQuestion.id!]">
          <option value="">\u2014 Choisir \u2014</option>
          <option *ngFor="let opt of currentQuestion.options" [value]="opt">{{ opt }}</option>
        </select>
      </ng-container>

      <ng-container *ngIf="currentQuestion.type === 'checkbox'">
        <div class="ms-options">
          <label *ngFor="let opt of currentQuestion.options" class="ms-option"
                 [class.selected]="isChecked(currentQuestion.id!, opt)">
            <input type="checkbox" class="ms-option-input"
                   [checked]="isChecked(currentQuestion.id!, opt)"
                   (change)="toggleCheckbox(currentQuestion.id!, opt)">
            <span class="ms-option-check"></span><span>{{ opt }}</span>
          </label>
        </div>
      </ng-container>

      <ng-container *ngIf="isEchelle(currentQuestion.type)">
        <div class="ms-scale">
          <button type="button" *ngFor="let v of echelleValues(currentQuestion)"
                  class="ms-scale-btn" [class.selected]="reponses[currentQuestion.id!] == v"
                  (click)="reponses[currentQuestion.id!] = v">
            <ng-container *ngIf="currentQuestion.type === 'notation'">
              <i class="isax" [class.isax-star]="reponses[currentQuestion.id!] >= v"
                              [class.isax-star-1]="!(reponses[currentQuestion.id!] >= v)"></i>
            </ng-container>
            <ng-container *ngIf="currentQuestion.type !== 'notation'">{{ v }}</ng-container>
          </button>
        </div>
        <div class="ms-scale-labels" *ngIf="currentQuestion.type === 'echelle'">
          <span>{{ currentQuestion.valeur_min ?? 1 }} \u2014 Min</span>
          <span>{{ currentQuestion.valeur_max ?? 10 }} \u2014 Max</span>
        </div>
      </ng-container>
    </div>

    <div *ngIf="submitError" class="ms-alert ms-alert--danger">
      <i class="isax isax-warning-2"></i> {{ submitError }}
    </div>

    <div class="ms-nav">
      <button type="button" class="ms-nav-btn ms-nav-btn--ghost" (click)="precedent()" [disabled]="currentStep === 0">
        <i class="isax isax-arrow-left-2"></i> Pr\xE9c\xE9dent
      </button>
      <button type="button" *ngIf="!isLast" class="ms-nav-btn ms-nav-btn--primary" (click)="suivant()">
        Suivant <i class="isax isax-arrow-right-3"></i>
      </button>
      <button type="button" *ngIf="isLast" class="ms-nav-btn ms-nav-btn--success" [disabled]="submitting" (click)="soumettre()">
        <span *ngIf="!submitting"><i class="isax isax-tick-circle"></i> Soumettre</span>
        <span *ngIf="submitting"><span class="ms-mini-spinner"></span> Envoi\u2026</span>
      </button>
    </div>

  </ng-container>
</ng-container>
`, styles: ["/* src/app/features/instructor/instructor-mes-sondages/instructor-mes-sondages.component.scss */\n.ms-hero {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 24px 28px;\n  margin-bottom: 28px;\n}\n.ms-hero__left {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.ms-hero__icon {\n  width: 48px;\n  height: 48px;\n  background: #ecfdf5;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ms-hero__icon i {\n  font-size: 22px;\n  color: #059669;\n}\n.ms-hero__title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.ms-hero__sub {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.ms-hero__stats {\n  display: flex;\n  gap: 12px;\n}\n.ms-stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 12px 20px;\n  min-width: 90px;\n}\n.ms-stat__value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111827;\n}\n.ms-stat__label {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.ms-section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.ms-section-header--secondary {\n  margin-top: 40px;\n}\n.ms-section-header__left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ms-section-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.ms-count-badge {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: #fff7ed;\n  color: #d97706;\n}\n.ms-count-badge--muted {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.ms-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  color: #059669;\n  transition: color 0.15s;\n}\n.ms-link-btn:hover {\n  color: rgb(3.3548387097, 100.6451612903, 70.4516129032);\n}\n.ms-loader {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  justify-content: center;\n  padding: 60px 0;\n  color: #6b7280;\n}\n.ms-spinner {\n  width: 28px;\n  height: 28px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #059669;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ms-alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.ms-alert--danger {\n  background: #fef2f2;\n  color: #DC2626;\n  border: 1px solid #fecaca;\n}\n.ms-empty {\n  text-align: center;\n  padding: 60px 20px;\n  background: #f9fafb;\n  border-radius: 14px;\n  border: 1.5px dashed #e5e7eb;\n}\n.ms-empty--small {\n  padding: 40px 20px;\n}\n.ms-empty__icon {\n  font-size: 40px;\n  color: #d1d5db;\n  margin-bottom: 12px;\n}\n.ms-empty__title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 6px;\n}\n.ms-empty__sub {\n  font-size: 13px;\n  color: #9ca3af;\n  margin: 0;\n}\n.ms-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n  margin-bottom: 8px;\n}\n.ms-card {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  display: flex;\n  flex-direction: column;\n  border: 1.5px solid #e5e7eb;\n}\n.ms-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #059669;\n}\n.ms-card--done {\n  opacity: 0.7;\n}\n.ms-card--done:hover {\n  opacity: 1;\n}\n.ms-card__accent {\n  height: 4px;\n}\n.ms-card__body {\n  padding: 20px 20px 14px;\n  flex: 1;\n}\n.ms-card__header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.ms-card__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 6px;\n  line-height: 1.4;\n}\n.ms-card__desc {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0 0 14px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.ms-card__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 14px;\n}\n.ms-card__meta span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ms-card__progress {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 4px 8px;\n}\n.ms-card__progress-label {\n  font-size: 12px;\n  color: #6b7280;\n}\n.ms-card__progress-value {\n  font-size: 12px;\n  font-weight: 700;\n  color: #059669;\n  text-align: right;\n  grid-column: 2;\n}\n.ms-card__progress-bar {\n  grid-column: 1/-1;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.ms-card__progress-fill {\n  height: 100%;\n  background: #059669;\n  border-radius: 3px;\n  transition: width 0.3s;\n}\n.ms-card__footer {\n  padding: 14px 20px;\n  border-top: 1px solid #f3f4f6;\n}\n.ms-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ms-badge--new {\n  background: #d1fae5;\n  color: #059669;\n}\n.ms-badge--done {\n  background: #d1fae5;\n  color: #059669;\n}\n.ms-text-muted {\n  color: #9ca3af !important;\n}\n.ms-btn-repondre {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n  width: 100%;\n  padding: 10px 16px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n  color: #374151;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: border-color 0.2s, background 0.2s;\n}\n.ms-btn-repondre:hover {\n  border-color: #059669;\n  background: #ecfdf5;\n  color: #059669;\n}\n.ms-btn-repondre .ms-btn-arrow {\n  margin-left: auto;\n  font-size: 16px;\n}\n.ms-rep-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.ms-back-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.ms-back-btn:hover {\n  background: #f9fafb;\n}\n.ms-rep-title {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: #111827;\n}\n.ms-rep-sub {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0;\n}\n.ms-progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 28px;\n}\n.ms-progress-bar {\n  flex: 1;\n  height: 8px;\n  background: #e5e7eb;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ms-progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #059669,\n      #34d399);\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.ms-progress-label {\n  font-size: 13px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.ms-question-card {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  padding: 32px 28px;\n  margin-bottom: 24px;\n}\n.ms-q-num {\n  font-size: 12px;\n  font-weight: 600;\n  color: #059669;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 10px;\n}\n.ms-q-text {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n  line-height: 1.5;\n}\n.ms-q-aide {\n  font-size: 13px;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 0 20px;\n}\n.ms-required {\n  color: #DC2626;\n  margin-left: 2px;\n}\n.ms-input {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ms-input:focus {\n  border-color: #059669;\n}\n.ms-input--sm {\n  max-width: 220px;\n}\n.ms-textarea {\n  resize: vertical;\n  min-height: 100px;\n  font-family: inherit;\n}\n.ms-options {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ms-option {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 16px;\n  border-radius: 10px;\n  border: 1.5px solid #e5e7eb;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n  font-size: 14px;\n  color: #374151;\n}\n.ms-option.selected {\n  border-color: #059669;\n  background: #ecfdf5;\n  color: #059669;\n  font-weight: 600;\n}\n.ms-option:hover:not(.selected) {\n  border-color: #6ee7b7;\n  background: #f0fdf4;\n}\n.ms-option-input {\n  display: none;\n}\n.ms-option-dot {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid #d1d5db;\n  flex-shrink: 0;\n}\n.ms-option.selected .ms-option-dot {\n  border-color: #059669;\n  background: #059669;\n}\n.ms-option-check {\n  width: 18px;\n  height: 18px;\n  border-radius: 5px;\n  border: 2px solid #d1d5db;\n  flex-shrink: 0;\n}\n.ms-option.selected .ms-option-check {\n  border-color: #059669;\n  background: #059669;\n}\n.ms-scale {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n.ms-scale-btn {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n  color: #374151;\n}\n.ms-scale-btn.selected {\n  background: #059669;\n  border-color: #059669;\n  color: #fff;\n}\n.ms-scale-btn:hover:not(.selected) {\n  border-color: #059669;\n  color: #059669;\n}\n.ms-scale-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ms-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.ms-nav-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 22px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: opacity 0.2s;\n}\n.ms-nav-btn--ghost {\n  background: #f3f4f6;\n  color: #374151;\n}\n.ms-nav-btn--ghost:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.ms-nav-btn--ghost:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ms-nav-btn--primary {\n  background: #059669;\n  color: #fff;\n  margin-left: auto;\n}\n.ms-nav-btn--primary:hover {\n  opacity: 0.88;\n}\n.ms-nav-btn--success {\n  background: #059669;\n  color: #fff;\n  margin-left: auto;\n}\n.ms-nav-btn--success:hover {\n  opacity: 0.88;\n}\n.ms-nav-btn--success:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.ms-mini-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n.ms-success-screen {\n  text-align: center;\n  padding: 80px 20px;\n}\n.ms-success-icon {\n  font-size: 64px;\n  color: #059669;\n  margin-bottom: 20px;\n  animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n@keyframes pop {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.ms-success-title {\n  font-size: 26px;\n  font-weight: 700;\n  margin: 0 0 10px;\n  color: #111827;\n}\n.ms-success-msg {\n  font-size: 15px;\n  color: #6b7280;\n  margin: 0 0 28px;\n}\n.ms-btn-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 22px;\n  border-radius: 10px;\n  background: #f3f4f6;\n  border: none;\n  color: #374151;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.ms-btn-back:hover {\n  background: #e5e7eb;\n}\n/*# sourceMappingURL=instructor-mes-sondages.component.css.map */\n"] }]
  }], () => [{ type: SondageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorMesSondagesComponent, { className: "InstructorMesSondagesComponent", filePath: "app/features/instructor/instructor-mes-sondages/instructor-mes-sondages.component.ts", lineNumber: 15 });
})();
export {
  InstructorMesSondagesComponent
};
//# sourceMappingURL=chunk-MBQQXVVK.js.map
