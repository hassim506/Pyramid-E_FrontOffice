import {
  FormationService
} from "./chunk-QDYFEC2R.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-37V3B3KY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ZGFJXD53.js";
import {
  Router,
  RouterLink
} from "./chunk-UFFO2UKW.js";
import "./chunk-U7UKDAOZ.js";
import "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
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

// src/app/features/student/student-quiz/student-quiz.component.ts
function StudentQuizComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Chargement de vos quiz...");
    \u0275\u0275elementEnd()();
  }
}
function StudentQuizComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function StudentQuizComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadQuizzes());
    });
    \u0275\u0275element(5, "i", 8);
    \u0275\u0275text(6, "R\xE9essayer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function StudentQuizComponent_ng_container_2_div_50_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quiz_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", quiz_r5.formation_titre, " ");
  }
}
function StudentQuizComponent_ng_container_2_div_50_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quiz_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(2, 2, quiz_r5.description, 0, 90), "", quiz_r5.description && quiz_r5.description.length > 90 ? "\u2026" : "", " ");
  }
}
function StudentQuizComponent_ng_container_2_div_50_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const quiz_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", quiz_r5.duree_minutes, " min ");
  }
}
function StudentQuizComponent_ng_container_2_div_50_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    const quiz_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.getPastilleClass(quiz_r5, i_r6))("title", i_r6 < ctx_r1.getTentativesUtilisees(quiz_r5) ? "Tentative " + (i_r6 + 1) : "Non utilis\xE9e");
  }
}
function StudentQuizComponent_ng_container_2_div_50_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "span", 67);
    \u0275\u0275text(3, "Dernier score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 68);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 69);
    \u0275\u0275element(8, "div", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const quiz_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.getNoteColor(quiz_r5.dernier_resultat.note));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 7, quiz_r5.dernier_resultat.note, "1.0-0"), "% ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", quiz_r5.dernier_resultat.note, "%")("background", ctx_r1.getNoteColor(quiz_r5.dernier_resultat.note));
  }
}
function StudentQuizComponent_ng_container_2_div_50_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275text(2, " Toutes les tentatives ont \xE9t\xE9 utilis\xE9es sans succ\xE8s. ");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizComponent_ng_container_2_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StudentQuizComponent_ng_container_2_div_50_div_1_span_4_Template, 3, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42)(6, "h6", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, StudentQuizComponent_ng_container_2_div_50_div_1_p_8_Template, 3, 6, "p", 44);
    \u0275\u0275elementStart(9, "div", 45)(10, "span", 46);
    \u0275\u0275element(11, "i", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, StudentQuizComponent_ng_container_2_div_50_div_1_span_13_Template, 3, 1, "span", 48);
    \u0275\u0275elementStart(14, "span", 46);
    \u0275\u0275element(15, "i", 49);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 50)(18, "span", 51);
    \u0275\u0275element(19, "i", 52);
    \u0275\u0275text(20, " Tentatives ");
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 53);
    \u0275\u0275template(24, StudentQuizComponent_ng_container_2_div_50_div_1_span_24_Template, 1, 2, "span", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, StudentQuizComponent_ng_container_2_div_50_div_1_div_25_Template, 9, 10, "div", 55)(26, StudentQuizComponent_ng_container_2_div_50_div_1_div_26_Template, 3, 0, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 57)(28, "button", 58);
    \u0275\u0275listener("click", function StudentQuizComponent_ng_container_2_div_50_div_1_Template_button_click_28_listener() {
      const quiz_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.commencerQuiz(quiz_r5));
    });
    \u0275\u0275element(29, "i", 59);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const quiz_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("quiz-card--bloque", ctx_r1.isBloquer(quiz_r5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatutClass(quiz_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatutLabel(quiz_r5), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", quiz_r5.formation_titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(quiz_r5.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", quiz_r5.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", quiz_r5.nombre_questions, " question", quiz_r5.nombre_questions > 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", quiz_r5.duree_minutes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Min ", quiz_r5.score_minimum, "% ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.getTentativesUtilisees(quiz_r5), " / ", quiz_r5.max_tentatives);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getPastillesArray(quiz_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", quiz_r5.dernier_resultat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBloquer(quiz_r5));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("quiz-card__btn--reussi", quiz_r5.dernier_resultat == null ? null : quiz_r5.dernier_resultat.est_reussi)("quiz-card__btn--reprendre", quiz_r5.dernier_resultat && !quiz_r5.dernier_resultat.est_reussi && !ctx_r1.isBloquer(quiz_r5))("quiz-card__btn--bloque", ctx_r1.isBloquer(quiz_r5));
    \u0275\u0275property("disabled", ctx_r1.isBloquer(quiz_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getCTAIcon(quiz_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCTALabel(quiz_r5), " ");
  }
}
function StudentQuizComponent_ng_container_2_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, StudentQuizComponent_ng_container_2_div_50_div_1_Template, 31, 25, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.displayedQuizzes);
  }
}
function StudentQuizComponent_ng_container_2_div_51_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Essayez de modifier vos filtres.");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizComponent_ng_container_2_div_51_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Aucun quiz disponible pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizComponent_ng_container_2_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementStart(2, "h6");
    \u0275\u0275text(3, "Aucun quiz trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StudentQuizComponent_ng_container_2_div_51_p_4_Template, 2, 0, "p", 2)(5, StudentQuizComponent_ng_container_2_div_51_p_5_Template, 2, 0, "p", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedFiltre !== "tous" || ctx_r1.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFiltre === "tous" && !ctx_r1.searchTerm);
  }
}
function StudentQuizComponent_ng_container_2_div_52_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 86)(1, "a", 81);
    \u0275\u0275listener("click", function StudentQuizComponent_ng_container_2_div_52_li_9_Template_a_click_1_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changePage(p_r9));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.currentPage === p_r9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9);
  }
}
function StudentQuizComponent_ng_container_2_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "p", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 78)(5, "ul", 79)(6, "li", 80)(7, "a", 81);
    \u0275\u0275listener("click", function StudentQuizComponent_ng_container_2_div_52_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(8, "i", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, StudentQuizComponent_ng_container_2_div_52_li_9_Template, 3, 3, "li", 83);
    \u0275\u0275elementStart(10, "li", 84)(11, "a", 81);
    \u0275\u0275listener("click", function StudentQuizComponent_ng_container_2_div_52_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(12, "i", 85);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.currentPage, " / ", ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function StudentQuizComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div")(3, "h5", 10);
    \u0275\u0275element(4, "i", 11);
    \u0275\u0275text(5, "Mes Quiz ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7, "Testez vos connaissances sur vos formations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 14);
    \u0275\u0275element(10, "i", 15);
    \u0275\u0275elementStart(11, "div")(12, "div", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17);
    \u0275\u0275text(15, "Total quiz");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 18);
    \u0275\u0275element(17, "i", 19);
    \u0275\u0275elementStart(18, "div")(19, "div", 16);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17);
    \u0275\u0275text(22, "R\xE9ussis");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 20);
    \u0275\u0275element(24, "i", 21);
    \u0275\u0275elementStart(25, "div")(26, "div", 16);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 17);
    \u0275\u0275text(29, "\xC9chou\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 22);
    \u0275\u0275element(31, "i", 23);
    \u0275\u0275elementStart(32, "div")(33, "div", 16);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 17);
    \u0275\u0275text(36, "En attente");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 24)(38, "div", 25);
    \u0275\u0275element(39, "i", 26);
    \u0275\u0275elementStart(40, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function StudentQuizComponent_ng_container_2_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function StudentQuizComponent_ng_container_2_Template_input_ngModelChange_40_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 28)(42, "button", 29);
    \u0275\u0275listener("click", function StudentQuizComponent_ng_container_2_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFiltre("tous"));
    });
    \u0275\u0275text(43, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 30);
    \u0275\u0275listener("click", function StudentQuizComponent_ng_container_2_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFiltre("non_tente"));
    });
    \u0275\u0275text(45, "En attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 31);
    \u0275\u0275listener("click", function StudentQuizComponent_ng_container_2_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFiltre("reussi"));
    });
    \u0275\u0275text(47, "R\xE9ussis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 32);
    \u0275\u0275listener("click", function StudentQuizComponent_ng_container_2_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFiltre("echoue"));
    });
    \u0275\u0275text(49, "\xC9chou\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(50, StudentQuizComponent_ng_container_2_div_50_Template, 2, 1, "div", 33)(51, StudentQuizComponent_ng_container_2_div_51_Template, 6, 2, "div", 34)(52, StudentQuizComponent_ng_container_2_div_52_Template, 13, 7, "div", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.allQuizzes.length);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalReussis);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalEchoues);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalEnAttente);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("quiz-filters__pill--active", ctx_r1.selectedFiltre === "tous");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("quiz-filters__pill--active", ctx_r1.selectedFiltre === "non_tente");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("quiz-filters__pill--active", ctx_r1.selectedFiltre === "reussi");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("quiz-filters__pill--active", ctx_r1.selectedFiltre === "echoue");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.displayedQuizzes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayedQuizzes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
var StudentQuizComponent = class _StudentQuizComponent {
  formationsService;
  router;
  routes = routes;
  // ── Données ────────────────────────────────────────────────
  allQuizzes = [];
  filteredQuizzes = [];
  displayedQuizzes = [];
  loading = true;
  error = "";
  // ── Filtres ────────────────────────────────────────────────
  searchTerm = "";
  selectedFiltre = "tous";
  // ── Pagination ─────────────────────────────────────────────
  currentPage = 1;
  pageSize = 6;
  totalPages = 0;
  constructor(formationsService, router) {
    this.formationsService = formationsService;
    this.router = router;
  }
  ngOnInit() {
    this.loadQuizzes();
  }
  // ── Chargement ─────────────────────────────────────────────
  loadQuizzes() {
    this.loading = true;
    this.error = "";
    Promise.all([
      this.formationsService.getTousLesQuizzes().toPromise(),
      this.formationsService.getTousMesResultatsQuiz().toPromise()
    ]).then(([quizRes, resultRes]) => {
      const quizzes = quizRes?.quizzes ?? quizRes ?? [];
      const resultats = resultRes?.results ?? resultRes ?? [];
      const resultMap = {};
      for (const r of resultats) {
        if (!resultMap[r.quiz_id] || r.id > resultMap[r.quiz_id].id) {
          resultMap[r.quiz_id] = r;
        }
      }
      this.allQuizzes = quizzes.filter((q) => q.is_active).map((q) => ({
        id: q.id,
        titre: q.titre,
        description: q.description ?? null,
        formation_id: q.formation_id,
        formation_titre: q.formation?.titre ?? null,
        duree_minutes: q.duree_minutes ?? null,
        score_minimum: q.score_minimum ?? 50,
        is_active: q.is_active,
        nombre_questions: q.questions_count ?? q.questions?.length ?? 0,
        max_tentatives: q.max_tentatives ?? 3,
        // champ API, fallback 3
        dernier_resultat: resultMap[q.id] ? {
          note: resultMap[q.id].note,
          est_reussi: resultMap[q.id].est_reussi,
          nombre_tentatives: resultMap[q.id].nombre_tentatives ?? 1
        } : null
      }));
      this.applyFilters();
      this.loading = false;
    }).catch(() => {
      this.error = "Erreur lors du chargement des quiz.";
      this.loading = false;
    });
  }
  // ── Filtres ────────────────────────────────────────────────
  applyFilters() {
    let result = [...this.allQuizzes];
    if (this.searchTerm.trim()) {
      const s = this.searchTerm.toLowerCase();
      result = result.filter((q) => q.titre?.toLowerCase().includes(s) || q.formation_titre?.toLowerCase().includes(s));
    }
    switch (this.selectedFiltre) {
      case "reussi":
        result = result.filter((q) => q.dernier_resultat?.est_reussi === true);
        break;
      case "echoue":
        result = result.filter((q) => q.dernier_resultat?.est_reussi === false);
        break;
      case "non_tente":
        result = result.filter((q) => !q.dernier_resultat);
        break;
    }
    this.filteredQuizzes = result;
    this.totalPages = Math.ceil(result.length / this.pageSize);
    this.currentPage = 1;
    this.paginate();
  }
  paginate() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedQuizzes = this.filteredQuizzes.slice(start, start + this.pageSize);
  }
  onSearchChange() {
    this.applyFilters();
  }
  setFiltre(f) {
    this.selectedFiltre = f;
    this.applyFilters();
  }
  changePage(p) {
    if (p < 1 || p > this.totalPages)
      return;
    this.currentPage = p;
    this.paginate();
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  // ── Stats rapides ──────────────────────────────────────────
  get totalReussis() {
    return this.allQuizzes.filter((q) => q.dernier_resultat?.est_reussi === true).length;
  }
  get totalEchoues() {
    return this.allQuizzes.filter((q) => q.dernier_resultat?.est_reussi === false).length;
  }
  get totalEnAttente() {
    return this.allQuizzes.filter((q) => !q.dernier_resultat).length;
  }
  // ── Tentatives ─────────────────────────────────────────────
  /** Nombre de tentatives déjà effectuées (0 si jamais tenté) */
  getTentativesUtilisees(quiz) {
    return quiz.dernier_resultat?.nombre_tentatives ?? 0;
  }
  /** Tableau d'indices [0, 1, 2, ...] pour *ngFor sur les pastilles */
  getPastillesArray(quiz) {
    return Array.from({ length: quiz.max_tentatives }, (_, i) => i);
  }
  /**
   * Vrai si toutes les tentatives sont épuisées ET le quiz n'est pas réussi.
   * Le backend bloque aussi la soumission dans ce cas.
   */
  isBloquer(quiz) {
    if (!quiz.dernier_resultat)
      return false;
    if (quiz.dernier_resultat.est_reussi)
      return false;
    return quiz.dernier_resultat.nombre_tentatives >= quiz.max_tentatives;
  }
  /** Classe CSS de chaque pastille selon son index */
  getPastilleClass(quiz, index) {
    const used = this.getTentativesUtilisees(quiz);
    const reussi = quiz.dernier_resultat?.est_reussi ?? false;
    if (index >= used)
      return "pastille--vide";
    if (reussi)
      return "pastille--reussi";
    if (this.isBloquer(quiz))
      return "pastille--bloque";
    return "pastille--echoue";
  }
  // ── Navigation ─────────────────────────────────────────────
  commencerQuiz(quiz) {
    if (this.isBloquer(quiz))
      return;
    this.router.navigate([routes.studentsQuizQuestion, quiz.id]);
  }
  // ── Helpers badge / CTA ────────────────────────────────────
  getStatutClass(quiz) {
    if (!quiz.dernier_resultat)
      return "quiz-badge--nouveau";
    if (quiz.dernier_resultat.est_reussi)
      return "quiz-badge--reussi";
    if (this.isBloquer(quiz))
      return "quiz-badge--bloque";
    return "quiz-badge--echoue";
  }
  getStatutLabel(quiz) {
    if (!quiz.dernier_resultat)
      return "En attente";
    if (quiz.dernier_resultat.est_reussi)
      return "R\xE9ussi";
    if (this.isBloquer(quiz))
      return "Bloqu\xE9";
    return "\xC9chou\xE9";
  }
  getCTALabel(quiz) {
    if (!quiz.dernier_resultat)
      return "Commencer";
    if (quiz.dernier_resultat.est_reussi)
      return "Revoir";
    if (this.isBloquer(quiz))
      return "Tentatives \xE9puis\xE9es";
    return "Reprendre";
  }
  getCTAIcon(quiz) {
    if (!quiz.dernier_resultat)
      return "isax-play-circle";
    if (quiz.dernier_resultat.est_reussi)
      return "isax-eye";
    if (this.isBloquer(quiz))
      return "isax-lock";
    return "isax-refresh";
  }
  getNoteColor(note) {
    if (note >= 75)
      return "#10b981";
    if (note >= 50)
      return "#f59e0b";
    return "#ef4444";
  }
  static \u0275fac = function StudentQuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentQuizComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentQuizComponent, selectors: [["app-student-quiz"]], decls: 3, vars: 3, consts: [["class", "qq-loading", 4, "ngIf"], ["class", "quiz-error", 4, "ngIf"], [4, "ngIf"], [1, "qq-loading"], [1, "qq-loading__ring"], [1, "quiz-error"], [1, "isax", "isax-warning-2"], [3, "click"], [1, "isax", "isax-refresh", "me-1"], [1, "quiz-page-header", "mb-4"], [1, "quiz-page-header__title"], [1, "isax", "isax-document-text", "me-2", 2, "color", "#069b8f"], [1, "quiz-page-header__sub"], [1, "quiz-stats-row", "mb-4"], [1, "quiz-stat-card", "quiz-stat-card--total"], [1, "isax", "isax-document-text"], [1, "quiz-stat-card__value"], [1, "quiz-stat-card__label"], [1, "quiz-stat-card", "quiz-stat-card--reussi"], [1, "isax", "isax-tick-circle"], [1, "quiz-stat-card", "quiz-stat-card--echoue"], [1, "isax", "isax-close-circle"], [1, "quiz-stat-card", "quiz-stat-card--nouveau"], [1, "isax", "isax-clock"], [1, "quiz-filters", "mb-4"], [1, "quiz-filters__search"], [1, "isax", "isax-search-normal-1", "quiz-filters__search-icon"], ["type", "search", "placeholder", "Rechercher un quiz...", 1, "quiz-filters__search-input", 3, "ngModelChange", "ngModel"], [1, "quiz-filters__pills"], [1, "quiz-filters__pill", 3, "click"], [1, "quiz-filters__pill", "quiz-filters__pill--nouveau", 3, "click"], [1, "quiz-filters__pill", "quiz-filters__pill--reussi", 3, "click"], [1, "quiz-filters__pill", "quiz-filters__pill--echoue", 3, "click"], ["class", "quiz-grid", 4, "ngIf"], ["class", "quiz-empty", 4, "ngIf"], ["class", "row align-items-center mt-4", 4, "ngIf"], [1, "quiz-grid"], ["class", "quiz-card", 3, "quiz-card--bloque", 4, "ngFor", "ngForOf"], [1, "quiz-card"], [1, "quiz-card__header"], [1, "quiz-badge", 3, "ngClass"], ["class", "quiz-card__formation", 4, "ngIf"], [1, "quiz-card__body"], [1, "quiz-card__title"], ["class", "quiz-card__desc", 4, "ngIf"], [1, "quiz-card__infos"], [1, "quiz-info-chip"], [1, "isax", "isax-document-text", "me-1"], ["class", "quiz-info-chip", 4, "ngIf"], [1, "isax", "isax-medal-star", "me-1"], [1, "quiz-card__tentatives"], [1, "quiz-card__tentatives-label"], [1, "isax", "isax-repeat", "me-1"], [1, "quiz-card__pastilles"], ["class", "pastille", 3, "ngClass", "title", 4, "ngFor", "ngForOf"], ["class", "quiz-card__result", 4, "ngIf"], ["class", "quiz-card__bloque-msg", 4, "ngIf"], [1, "quiz-card__footer"], [1, "quiz-card__btn", 3, "click", "disabled"], [1, "isax", "me-1", 3, "ngClass"], [1, "quiz-card__formation"], [1, "isax", "isax-book-1", "me-1"], [1, "quiz-card__desc"], [1, "isax", "isax-clock", "me-1"], [1, "pastille", 3, "ngClass", "title"], [1, "quiz-card__result"], [1, "quiz-card__result-score"], [1, "quiz-card__result-label"], [1, "quiz-card__result-value"], [1, "quiz-card__result-bar"], [1, "quiz-card__result-fill"], [1, "quiz-card__bloque-msg"], [1, "isax", "isax-lock", "me-1"], [1, "quiz-empty"], [1, "isax", "isax-document-text", "quiz-empty__icon"], [1, "row", "align-items-center", "mt-4"], [1, "col-md-2"], [1, "pagination-text"], [1, "col-md-10"], [1, "pagination", "lms-page", "justify-content-center", "justify-content-md-end", "mt-2", "mt-md-0"], [1, "page-item", "prev"], [1, "page-link", 3, "click"], [1, "fas", "fa-angle-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"], [1, "page-item"]], template: function StudentQuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StudentQuizComponent_div_0_Template, 8, 0, "div", 0)(1, StudentQuizComponent_div_1_Template, 7, 1, "div", 1)(2, StudentQuizComponent_ng_container_2_Template, 53, 16, "ng-container", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, SlicePipe, DecimalPipe], styles: ["\n\n.qq-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes _ngcontent-%COMP%_qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.quiz-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  gap: 16px;\n}\n.quiz-loading__spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.quiz-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 14px;\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.quiz-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  gap: 12px;\n  color: #94a3b8;\n}\n.quiz-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #ef4444;\n}\n.quiz-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.quiz-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  background: #069b8f;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.quiz-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgb(4.4795031056, 115.7204968944, 106.7614906832);\n}\n.quiz-page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.quiz-page-header__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n}\n.quiz-page-header__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n  margin: 0;\n}\n.quiz-stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .quiz-stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .quiz-stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.quiz-stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.quiz-stat-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.quiz-stat-card__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.quiz-stat-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n  margin-top: 2px;\n}\n.quiz-stat-card--total[_ngcontent-%COMP%] {\n  border-top: 3px solid #069b8f;\n}\n.quiz-stat-card--total[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.quiz-stat-card--reussi[_ngcontent-%COMP%] {\n  border-top: 3px solid #10b981;\n}\n.quiz-stat-card--reussi[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #10b981;\n}\n.quiz-stat-card--echoue[_ngcontent-%COMP%] {\n  border-top: 3px solid #ef4444;\n}\n.quiz-stat-card--echoue[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.quiz-stat-card--nouveau[_ngcontent-%COMP%] {\n  border-top: 3px solid #f59e0b;\n}\n.quiz-stat-card--nouveau[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.quiz-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.quiz-filters__search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.quiz-filters__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 16px;\n}\n.quiz-filters__search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 12px 9px 38px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #1f2937;\n  background: white;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.quiz-filters__search-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n}\n.quiz-filters__pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.quiz-filters__pill[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  background: white;\n  font-size: 12px;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.quiz-filters__pill[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.quiz-filters__pill--active[_ngcontent-%COMP%], \n.quiz-filters__pill.quiz-filters__pill--active[_ngcontent-%COMP%] {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: white;\n}\n.quiz-filters__pill--reussi.quiz-filters__pill--active[_ngcontent-%COMP%] {\n  background: #10b981;\n  border-color: #10b981;\n}\n.quiz-filters__pill--echoue.quiz-filters__pill--active[_ngcontent-%COMP%] {\n  background: #ef4444;\n  border-color: #ef4444;\n}\n.quiz-filters__pill--nouveau.quiz-filters__pill--active[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  border-color: #f59e0b;\n}\n.quiz-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 1024px) {\n  .quiz-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .quiz-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.quiz-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow 0.2s, transform 0.2s;\n  overflow: hidden;\n}\n.quiz-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.quiz-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px 0;\n  gap: 8px;\n}\n.quiz-card__formation[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 140px;\n}\n.quiz-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 14px;\n}\n.quiz-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n  line-height: 1.4;\n}\n.quiz-card__desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #475569;\n  margin: 0 0 10px;\n  line-height: 1.5;\n}\n.quiz-card__infos[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n}\n.quiz-card__result[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.quiz-card__result-score[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.quiz-card__result-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #475569;\n}\n.quiz-card__result-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n}\n.quiz-card__result-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 4px;\n}\n.quiz-card__result-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.6s ease;\n}\n.quiz-card__result-tentatives[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n}\n.quiz-card__footer[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-top: 1px solid #f1f5f9;\n}\n.quiz-card__btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 16px;\n  background: #069b8f;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: background 0.2s;\n}\n.quiz-card__btn[_ngcontent-%COMP%]:hover {\n  background: rgb(4.4795031056, 115.7204968944, 106.7614906832);\n}\n.quiz-card__btn--reussi[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.quiz-card__btn--reussi[_ngcontent-%COMP%]:hover {\n  background: rgb(12.752238806, 147.447761194, 102.8149253731);\n}\n.quiz-card__btn--reprendre[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.quiz-card__btn--reprendre[_ngcontent-%COMP%]:hover {\n  background: rgb(206.7275590551, 133.0173228346, 8.4724409449);\n}\n.quiz-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.quiz-badge--nouveau[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: rgb(172.4330708661, 110.9507874016, 7.0669291339);\n}\n.quiz-badge--reussi[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: rgb(9.9104477612, 114.5895522388, 79.9029850746);\n}\n.quiz-badge--echoue[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: rgb(234.9802955665, 21.0197044335, 21.0197044335);\n}\n.quiz-info-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  color: #475569;\n  background: #f1f5f9;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.quiz-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  gap: 10px;\n  color: #94a3b8;\n}\n.quiz-empty__icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.quiz-empty[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.quiz-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n}\n.quiz-card__btn--bloque[_ngcontent-%COMP%] {\n  background: #e5e7eb !important;\n  color: #9ca3af !important;\n  border-color: #e5e7eb !important;\n  cursor: not-allowed !important;\n  pointer-events: none;\n  opacity: 0.7;\n}\n.quiz-card__btn--bloque[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af !important;\n}\n.quiz-card--bloque[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.quiz-card--bloque[_ngcontent-%COMP%]   .quiz-card__title[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n/*# sourceMappingURL=student-quiz.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentQuizComponent, [{
    type: Component,
    args: [{ selector: "app-student-quiz", standalone: true, imports: [CommonModule, RouterLink, FormsModule], template: `<!-- LOADING -->\r
\r
<div *ngIf="loading" class="qq-loading">\r
   <div class="qq-loading__ring">\r
    <div></div><div></div><div></div><div></div>\r
  </div>\r
   <p>Chargement de vos quiz...</p>\r
\r
  \r
</div>\r
\r
<!-- ERREUR -->\r
<div class="quiz-error" *ngIf="error && !loading">\r
  <i class="isax isax-warning-2"></i>\r
  <p>{{ error }}</p>\r
  <button (click)="loadQuizzes()"><i class="isax isax-refresh me-1"></i>R\xE9essayer</button>\r
</div>\r
\r
<ng-container *ngIf="!loading && !error">\r
\r
  <!-- HEADER -->\r
  <div class="quiz-page-header mb-4">\r
    <div>\r
      <h5 class="quiz-page-header__title">\r
        <i class="isax isax-document-text me-2" style="color:#069b8f"></i>Mes Quiz\r
      </h5>\r
      <p class="quiz-page-header__sub">Testez vos connaissances sur vos formations</p>\r
    </div>\r
  </div>\r
\r
  <!-- STATS RAPIDES -->\r
  <div class="quiz-stats-row mb-4">\r
    <div class="quiz-stat-card quiz-stat-card--total">\r
      <i class="isax isax-document-text"></i>\r
      <div>\r
        <div class="quiz-stat-card__value">{{ allQuizzes.length }}</div>\r
        <div class="quiz-stat-card__label">Total quiz</div>\r
      </div>\r
    </div>\r
    <div class="quiz-stat-card quiz-stat-card--reussi">\r
      <i class="isax isax-tick-circle"></i>\r
      <div>\r
        <div class="quiz-stat-card__value">{{ totalReussis }}</div>\r
        <div class="quiz-stat-card__label">R\xE9ussis</div>\r
      </div>\r
    </div>\r
    <div class="quiz-stat-card quiz-stat-card--echoue">\r
      <i class="isax isax-close-circle"></i>\r
      <div>\r
        <div class="quiz-stat-card__value">{{ totalEchoues }}</div>\r
        <div class="quiz-stat-card__label">\xC9chou\xE9s</div>\r
      </div>\r
    </div>\r
    <div class="quiz-stat-card quiz-stat-card--nouveau">\r
      <i class="isax isax-clock"></i>\r
      <div>\r
        <div class="quiz-stat-card__value">{{ totalEnAttente }}</div>\r
        <div class="quiz-stat-card__label">En attente</div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- FILTRES -->\r
  <div class="quiz-filters mb-4">\r
    <div class="quiz-filters__search">\r
      <i class="isax isax-search-normal-1 quiz-filters__search-icon"></i>\r
      <input type="search"\r
             class="quiz-filters__search-input"\r
             placeholder="Rechercher un quiz..."\r
             [(ngModel)]="searchTerm"\r
             (ngModelChange)="onSearchChange()">\r
    </div>\r
    <div class="quiz-filters__pills">\r
      <button class="quiz-filters__pill"\r
              [class.quiz-filters__pill--active]="selectedFiltre === 'tous'"\r
              (click)="setFiltre('tous')">Tous</button>\r
      <button class="quiz-filters__pill quiz-filters__pill--nouveau"\r
              [class.quiz-filters__pill--active]="selectedFiltre === 'non_tente'"\r
              (click)="setFiltre('non_tente')">En attente</button>\r
      <button class="quiz-filters__pill quiz-filters__pill--reussi"\r
              [class.quiz-filters__pill--active]="selectedFiltre === 'reussi'"\r
              (click)="setFiltre('reussi')">R\xE9ussis</button>\r
      <button class="quiz-filters__pill quiz-filters__pill--echoue"\r
              [class.quiz-filters__pill--active]="selectedFiltre === 'echoue'"\r
              (click)="setFiltre('echoue')">\xC9chou\xE9s</button>\r
    </div>\r
  </div>\r
\r
  <!-- GRILLE QUIZ -->\r
  <div class="quiz-grid" *ngIf="displayedQuizzes.length > 0">\r
    <div class="quiz-card" *ngFor="let quiz of displayedQuizzes"\r
         [class.quiz-card--bloque]="isBloquer(quiz)">\r
\r
      <!-- Badge statut -->\r
      <div class="quiz-card__header">\r
        <span class="quiz-badge" [ngClass]="getStatutClass(quiz)">\r
          {{ getStatutLabel(quiz) }}\r
        </span>\r
        <span class="quiz-card__formation" *ngIf="quiz.formation_titre">\r
          <i class="isax isax-book-1 me-1"></i>{{ quiz.formation_titre }}\r
        </span>\r
      </div>\r
\r
      <!-- Corps -->\r
      <div class="quiz-card__body">\r
        <h6 class="quiz-card__title">{{ quiz.titre }}</h6>\r
        <p class="quiz-card__desc" *ngIf="quiz.description">\r
          {{ quiz.description | slice:0:90 }}{{ quiz.description && quiz.description.length > 90 ? '\u2026' : '' }}\r
        </p>\r
\r
        <!-- Infos -->\r
        <div class="quiz-card__infos">\r
          <span class="quiz-info-chip">\r
            <i class="isax isax-document-text me-1"></i>\r
            {{ quiz.nombre_questions }} question{{ quiz.nombre_questions > 1 ? 's' : '' }}\r
          </span>\r
          <span class="quiz-info-chip" *ngIf="quiz.duree_minutes">\r
            <i class="isax isax-clock me-1"></i>\r
            {{ quiz.duree_minutes }} min\r
          </span>\r
          <span class="quiz-info-chip">\r
            <i class="isax isax-medal-star me-1"></i>\r
            Min {{ quiz.score_minimum }}%\r
          </span>\r
        </div>\r
\r
        <!-- \u2705 TENTATIVES : pastilles X/max_tentatives -->\r
        <div class="quiz-card__tentatives">\r
          <span class="quiz-card__tentatives-label">\r
            <i class="isax isax-repeat me-1"></i>\r
            Tentatives\r
            <strong>{{ getTentativesUtilisees(quiz) }} / {{ quiz.max_tentatives }}</strong>\r
          </span>\r
          <div class="quiz-card__pastilles">\r
            <span *ngFor="let i of getPastillesArray(quiz)"\r
                  class="pastille"\r
                  [ngClass]="getPastilleClass(quiz, i)"\r
                  [title]="i < getTentativesUtilisees(quiz) ? 'Tentative ' + (i + 1) : 'Non utilis\xE9e'">\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- R\xE9sultat pr\xE9c\xE9dent -->\r
        <div class="quiz-card__result" *ngIf="quiz.dernier_resultat">\r
          <div class="quiz-card__result-score">\r
            <span class="quiz-card__result-label">Dernier score</span>\r
            <span class="quiz-card__result-value"\r
                  [style.color]="getNoteColor(quiz.dernier_resultat.note)">\r
              {{ quiz.dernier_resultat.note | number:'1.0-0' }}%\r
            </span>\r
          </div>\r
          <div class="quiz-card__result-bar">\r
            <div class="quiz-card__result-fill"\r
                 [style.width.%]="quiz.dernier_resultat.note"\r
                 [style.background]="getNoteColor(quiz.dernier_resultat.note)">\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Message tentatives \xE9puis\xE9es -->\r
        <div class="quiz-card__bloque-msg" *ngIf="isBloquer(quiz)">\r
          <i class="isax isax-lock me-1"></i>\r
          Toutes les tentatives ont \xE9t\xE9 utilis\xE9es sans succ\xE8s.\r
        </div>\r
\r
      </div>\r
\r
      <!-- Footer -->\r
      <div class="quiz-card__footer">\r
        <button class="quiz-card__btn"\r
                [class.quiz-card__btn--reussi]="quiz.dernier_resultat?.est_reussi"\r
                [class.quiz-card__btn--reprendre]="quiz.dernier_resultat && !quiz.dernier_resultat.est_reussi && !isBloquer(quiz)"\r
                [class.quiz-card__btn--bloque]="isBloquer(quiz)"\r
                [disabled]="isBloquer(quiz)"\r
                (click)="commencerQuiz(quiz)">\r
          <i class="isax me-1" [ngClass]="getCTAIcon(quiz)"></i>\r
          {{ getCTALabel(quiz) }}\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- EMPTY -->\r
  <div class="quiz-empty" *ngIf="displayedQuizzes.length === 0">\r
    <i class="isax isax-document-text quiz-empty__icon"></i>\r
    <h6>Aucun quiz trouv\xE9</h6>\r
    <p *ngIf="selectedFiltre !== 'tous' || searchTerm">Essayez de modifier vos filtres.</p>\r
    <p *ngIf="selectedFiltre === 'tous' && !searchTerm">Aucun quiz disponible pour le moment.</p>\r
  </div>\r
\r
  <!-- PAGINATION -->\r
  <div class="row align-items-center mt-4" *ngIf="totalPages > 1">\r
    <div class="col-md-2">\r
      <p class="pagination-text">Page {{ currentPage }} / {{ totalPages }}</p>\r
    </div>\r
    <div class="col-md-10">\r
      <ul class="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">\r
        <li class="page-item prev" [class.disabled]="currentPage === 1">\r
          <a class="page-link" (click)="changePage(currentPage - 1)">\r
            <i class="fas fa-angle-left"></i>\r
          </a>\r
        </li>\r
        <li class="page-item"\r
            *ngFor="let p of pages"\r
            [class.active]="currentPage === p">\r
          <a class="page-link" (click)="changePage(p)">{{ p }}</a>\r
        </li>\r
        <li class="page-item next" [class.disabled]="currentPage === totalPages">\r
          <a class="page-link" (click)="changePage(currentPage + 1)">\r
            <i class="fas fa-angle-right"></i>\r
          </a>\r
        </li>\r
      </ul>\r
    </div>\r
  </div>\r
\r
</ng-container> `, styles: ["/* src/app/features/student/student-quiz/student-quiz.component.scss */\n.qq-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring div:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring div:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring div:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.quiz-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  gap: 16px;\n}\n.quiz-loading__spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.quiz-loading p {\n  color: #475569;\n  font-size: 14px;\n  margin: 0;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.quiz-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  gap: 12px;\n  color: #94a3b8;\n}\n.quiz-error i {\n  font-size: 36px;\n  color: #ef4444;\n}\n.quiz-error p {\n  font-size: 14px;\n  margin: 0;\n}\n.quiz-error button {\n  padding: 8px 20px;\n  background: #069b8f;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.quiz-error button:hover {\n  background: rgb(4.4795031056, 115.7204968944, 106.7614906832);\n}\n.quiz-page-header {\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.quiz-page-header__title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n}\n.quiz-page-header__sub {\n  font-size: 13px;\n  color: #475569;\n  margin: 0;\n}\n.quiz-stats-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .quiz-stats-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .quiz-stats-row {\n    grid-template-columns: 1fr;\n  }\n}\n.quiz-stat-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.quiz-stat-card i {\n  font-size: 22px;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.quiz-stat-card__value {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.quiz-stat-card__label {\n  font-size: 12px;\n  color: #475569;\n  margin-top: 2px;\n}\n.quiz-stat-card--total {\n  border-top: 3px solid #069b8f;\n}\n.quiz-stat-card--total i {\n  background: #e6f7f6;\n  color: #069b8f;\n}\n.quiz-stat-card--reussi {\n  border-top: 3px solid #10b981;\n}\n.quiz-stat-card--reussi i {\n  background: #d1fae5;\n  color: #10b981;\n}\n.quiz-stat-card--echoue {\n  border-top: 3px solid #ef4444;\n}\n.quiz-stat-card--echoue i {\n  background: #fee2e2;\n  color: #ef4444;\n}\n.quiz-stat-card--nouveau {\n  border-top: 3px solid #f59e0b;\n}\n.quiz-stat-card--nouveau i {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.quiz-filters {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.quiz-filters__search {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.quiz-filters__search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 16px;\n}\n.quiz-filters__search-input {\n  width: 100%;\n  padding: 9px 12px 9px 38px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #1f2937;\n  background: white;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.quiz-filters__search-input:focus {\n  border-color: #069b8f;\n}\n.quiz-filters__pills {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.quiz-filters__pill {\n  padding: 7px 14px;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  background: white;\n  font-size: 12px;\n  font-weight: 500;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.quiz-filters__pill:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.quiz-filters__pill--active,\n.quiz-filters__pill.quiz-filters__pill--active {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: white;\n}\n.quiz-filters__pill--reussi.quiz-filters__pill--active {\n  background: #10b981;\n  border-color: #10b981;\n}\n.quiz-filters__pill--echoue.quiz-filters__pill--active {\n  background: #ef4444;\n  border-color: #ef4444;\n}\n.quiz-filters__pill--nouveau.quiz-filters__pill--active {\n  background: #f59e0b;\n  border-color: #f59e0b;\n}\n.quiz-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 1024px) {\n  .quiz-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .quiz-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.quiz-card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow 0.2s, transform 0.2s;\n  overflow: hidden;\n}\n.quiz-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.quiz-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px 0;\n  gap: 8px;\n}\n.quiz-card__formation {\n  font-size: 11px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 140px;\n}\n.quiz-card__body {\n  flex: 1;\n  padding: 12px 14px;\n}\n.quiz-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n  line-height: 1.4;\n}\n.quiz-card__desc {\n  font-size: 12px;\n  color: #475569;\n  margin: 0 0 10px;\n  line-height: 1.5;\n}\n.quiz-card__infos {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n}\n.quiz-card__result {\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.quiz-card__result-score {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.quiz-card__result-label {\n  font-size: 11px;\n  color: #475569;\n}\n.quiz-card__result-value {\n  font-size: 18px;\n  font-weight: 800;\n}\n.quiz-card__result-bar {\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 4px;\n}\n.quiz-card__result-fill {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.6s ease;\n}\n.quiz-card__result-tentatives {\n  font-size: 11px;\n  color: #94a3b8;\n}\n.quiz-card__footer {\n  padding: 12px 14px;\n  border-top: 1px solid #f1f5f9;\n}\n.quiz-card__btn {\n  width: 100%;\n  padding: 9px 16px;\n  background: #069b8f;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: background 0.2s;\n}\n.quiz-card__btn:hover {\n  background: rgb(4.4795031056, 115.7204968944, 106.7614906832);\n}\n.quiz-card__btn--reussi {\n  background: #10b981;\n}\n.quiz-card__btn--reussi:hover {\n  background: rgb(12.752238806, 147.447761194, 102.8149253731);\n}\n.quiz-card__btn--reprendre {\n  background: #f59e0b;\n}\n.quiz-card__btn--reprendre:hover {\n  background: rgb(206.7275590551, 133.0173228346, 8.4724409449);\n}\n.quiz-badge {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.quiz-badge--nouveau {\n  background: #fef3c7;\n  color: rgb(172.4330708661, 110.9507874016, 7.0669291339);\n}\n.quiz-badge--reussi {\n  background: #d1fae5;\n  color: rgb(9.9104477612, 114.5895522388, 79.9029850746);\n}\n.quiz-badge--echoue {\n  background: #fee2e2;\n  color: rgb(234.9802955665, 21.0197044335, 21.0197044335);\n}\n.quiz-info-chip {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  color: #475569;\n  background: #f1f5f9;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.quiz-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  gap: 10px;\n  color: #94a3b8;\n}\n.quiz-empty__icon {\n  font-size: 48px;\n}\n.quiz-empty h6 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.quiz-empty p {\n  font-size: 13px;\n  margin: 0;\n}\n.quiz-card__btn--bloque {\n  background: #e5e7eb !important;\n  color: #9ca3af !important;\n  border-color: #e5e7eb !important;\n  cursor: not-allowed !important;\n  pointer-events: none;\n  opacity: 0.7;\n}\n.quiz-card__btn--bloque i {\n  color: #9ca3af !important;\n}\n.quiz-card--bloque {\n  opacity: 0.85;\n}\n.quiz-card--bloque .quiz-card__title {\n  color: #6b7280;\n}\n/*# sourceMappingURL=student-quiz.component.css.map */\n"] }]
  }], () => [{ type: FormationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentQuizComponent, { className: "StudentQuizComponent", filePath: "app/features/student/student-quiz/student-quiz.component.ts", lineNumber: 33 });
})();
export {
  StudentQuizComponent
};
//# sourceMappingURL=chunk-UBNWI4TG.js.map
