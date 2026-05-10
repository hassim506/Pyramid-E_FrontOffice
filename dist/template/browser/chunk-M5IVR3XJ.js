import {
  CustomPaginationComponent
} from "./chunk-2EUN5DIU.js";
import "./chunk-JN46OEVN.js";
import {
  ProgressionService
} from "./chunk-AUCVL37F.js";
import {
  FormationsService
} from "./chunk-BNTQZQX6.js";
import "./chunk-FKX6UC3I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-YMJPU2MG.js";
import {
  Router
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-GWJREDC5.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/mes-cours/mes-cours.component.ts
function MesCoursComponent_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 38);
  }
}
function MesCoursComponent_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 39);
  }
}
function MesCoursComponent_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 40);
  }
}
function MesCoursComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275listener("click", function MesCoursComponent_div_24_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectTab(""));
    });
    \u0275\u0275elementStart(2, "div", 43);
    \u0275\u0275element(3, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45)(5, "div", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 47);
    \u0275\u0275text(8, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 48);
    \u0275\u0275listener("click", function MesCoursComponent_div_24_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectTab("en_cours"));
    });
    \u0275\u0275elementStart(10, "div", 43);
    \u0275\u0275element(11, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 45)(13, "div", 46);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 47);
    \u0275\u0275text(16, "En cours");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 50);
    \u0275\u0275listener("click", function MesCoursComponent_div_24_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectTab("a_commencer"));
    });
    \u0275\u0275elementStart(18, "div", 43);
    \u0275\u0275element(19, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 45)(21, "div", 46);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 47);
    \u0275\u0275text(24, "\xC0 commencer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 52);
    \u0275\u0275listener("click", function MesCoursComponent_div_24_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectTab("termines"));
    });
    \u0275\u0275elementStart(26, "div", 43);
    \u0275\u0275element(27, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 45)(29, "div", 46);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 47);
    \u0275\u0275text(32, "Termin\xE9es");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r1.selectedTab === "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalFormations);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r1.selectedTab === "en_cours");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalEnCours);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r1.selectedTab === "a_commencer");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalACommencer);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r1.selectedTab === "termines");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalTerminees);
  }
}
function MesCoursComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function MesCoursComponent_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchData(""));
    });
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementEnd();
  }
}
function MesCoursComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.totalEnCours, ")");
  }
}
function MesCoursComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.totalACommencer, ")");
  }
}
function MesCoursComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.totalTerminees, ")");
  }
}
function MesCoursComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "div", 58);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de vos formations...");
    \u0275\u0275elementEnd()();
  }
}
function MesCoursComponent_ng_container_46_div_1_tr_25_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 89);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r5.formateur_nom || (f_r5.formateur == null ? null : f_r5.formateur.nom_complet) || (f_r5.categorie == null ? null : f_r5.categorie.nom), " ");
  }
}
function MesCoursComponent_ng_container_46_div_1_tr_25_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r5.langue, " ");
  }
}
function MesCoursComponent_ng_container_46_div_1_tr_25_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275text(2, "Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function MesCoursComponent_ng_container_46_div_1_tr_25_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r5.duree_totale, "h ");
  }
}
function MesCoursComponent_ng_container_46_div_1_tr_25_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function MesCoursComponent_ng_container_46_div_1_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 73);
    \u0275\u0275listener("click", function MesCoursComponent_ng_container_46_div_1_tr_25_Template_tr_click_0_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPlayer(f_r5));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 74);
    \u0275\u0275element(3, "img", 75);
    \u0275\u0275elementStart(4, "div", 76)(5, "div", 77);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MesCoursComponent_ng_container_46_div_1_tr_25_small_7_Template, 3, 1, "small", 78);
    \u0275\u0275elementStart(8, "div", 79);
    \u0275\u0275template(9, MesCoursComponent_ng_container_46_div_1_tr_25_span_9_Template, 3, 1, "span", 80)(10, MesCoursComponent_ng_container_46_div_1_tr_25_span_10_Template, 3, 0, "span", 81);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275template(12, MesCoursComponent_ng_container_46_div_1_tr_25_span_12_Template, 3, 1, "span", 82)(13, MesCoursComponent_ng_container_46_div_1_tr_25_span_13_Template, 2, 0, "span", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 70)(15, "span", 84);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 70)(18, "span", 85);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 86);
    \u0275\u0275listener("click", function MesCoursComponent_ng_container_46_div_1_tr_25_Template_td_click_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(21, "button", 87);
    \u0275\u0275listener("click", function MesCoursComponent_ng_container_46_div_1_tr_25_Template_button_click_21_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPlayer(f_r5));
    });
    \u0275\u0275element(22, "i", 88);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("mc-row--done", ctx_r1.isCourseFinished(f_r5));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", f_r5.image_couverture || "assets/img/course/course-01.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r5.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r5.formateur_nom || (f_r5.formateur == null ? null : f_r5.formateur.nom_complet) || (f_r5.categorie == null ? null : f_r5.categorie.nom));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r5.langue);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r5.est_certifiante);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r5.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !f_r5.duree_totale);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getNiveauClass(f_r5.niveau));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r5.niveau_display || f_r5.niveau || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(f_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(f_r5));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("mc-action-btn--done", ctx_r1.isCourseFinished(f_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getCourseActionIcon(f_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCourseActionLabel(f_r5), " ");
  }
}
function MesCoursComponent_ng_container_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62);
    \u0275\u0275element(3, "i", 63);
    \u0275\u0275text(4, " Mes formations ");
    \u0275\u0275elementStart(5, "span", 64);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "small", 65);
    \u0275\u0275element(8, "i", 66);
    \u0275\u0275text(9, "Cliquez sur une ligne pour d\xE9marrer ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 67)(11, "table", 68)(12, "thead")(13, "tr")(14, "th", 69);
    \u0275\u0275text(15, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 70);
    \u0275\u0275text(19, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 71);
    \u0275\u0275text(21, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 70);
    \u0275\u0275text(23, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, MesCoursComponent_ng_container_46_div_1_tr_25_Template, 24, 17, "tr", 72);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.totalData);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.formations);
  }
}
function MesCoursComponent_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MesCoursComponent_ng_container_46_div_1_Template, 26, 2, "div", 59);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formations.length > 0);
  }
}
function MesCoursComponent_ng_container_47_div_1_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.getNiveauClass(f_r7.niveau));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r7.niveau_display || f_r7.niveau, " ");
  }
}
function MesCoursComponent_ng_container_47_div_1_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275element(1, "i", 122);
    \u0275\u0275elementEnd();
  }
}
function MesCoursComponent_ng_container_47_div_1_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 123);
    \u0275\u0275element(1, "i", 124);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r7.formateur_nom || (f_r7.formateur == null ? null : f_r7.formateur.nom_complet) || (f_r7.categorie == null ? null : f_r7.categorie.nom), " ");
  }
}
function MesCoursComponent_ng_container_47_div_1_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r7.duree_totale, "h ");
  }
}
function MesCoursComponent_ng_container_47_div_1_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r7.langue, " ");
  }
}
function MesCoursComponent_ng_container_47_div_1_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275text(2, "Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function MesCoursComponent_ng_container_47_div_1_div_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275element(1, "i", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, f_r7.date_inscription, "dd/MM/yyyy"), " ");
  }
}
function MesCoursComponent_ng_container_47_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275listener("click", function MesCoursComponent_ng_container_47_div_1_div_1_Template_div_click_0_listener() {
      const f_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPlayer(f_r7));
    });
    \u0275\u0275elementStart(1, "div", 102);
    \u0275\u0275element(2, "img", 103);
    \u0275\u0275elementStart(3, "div", 104)(4, "span", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, MesCoursComponent_ng_container_47_div_1_div_1_span_6_Template, 2, 2, "span", 105)(7, MesCoursComponent_ng_container_47_div_1_div_1_div_7_Template, 2, 0, "div", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 107)(9, "h6", 108);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MesCoursComponent_ng_container_47_div_1_div_1_p_11_Template, 3, 1, "p", 109);
    \u0275\u0275elementStart(12, "div", 110);
    \u0275\u0275template(13, MesCoursComponent_ng_container_47_div_1_div_1_span_13_Template, 3, 1, "span", 80)(14, MesCoursComponent_ng_container_47_div_1_div_1_span_14_Template, 3, 1, "span", 80)(15, MesCoursComponent_ng_container_47_div_1_div_1_span_15_Template, 3, 0, "span", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 111)(17, "div", 112)(18, "span", 113);
    \u0275\u0275text(19, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 114);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 115);
    \u0275\u0275element(23, "div", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 117);
    \u0275\u0275listener("click", function MesCoursComponent_ng_container_47_div_1_div_1_Template_div_click_24_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(25, MesCoursComponent_ng_container_47_div_1_div_1_span_25_Template, 4, 4, "span", 118);
    \u0275\u0275elementStart(26, "button", 119);
    \u0275\u0275listener("click", function MesCoursComponent_ng_container_47_div_1_div_1_Template_button_click_26_listener() {
      const f_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPlayer(f_r7));
    });
    \u0275\u0275element(27, "i", 88);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("mc-grid-card--done", ctx_r1.isCourseFinished(f_r7))("mc-grid-card--progress", ctx_r1.isInProgress(f_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("alt", \u0275\u0275interpolate(f_r7.titre))("src", f_r7.image_couverture || "assets/img/course/course-01.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(f_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(f_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r7.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCourseFinished(f_r7));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r7.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r7.formateur_nom || (f_r7.formateur == null ? null : f_r7.formateur.nom_complet) || (f_r7.categorie == null ? null : f_r7.categorie.nom));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r7.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r7.langue);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r7.est_certifiante);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("mc-progress-pct--done", ctx_r1.isCourseFinished(f_r7))("mc-progress-pct--active", ctx_r1.isInProgress(f_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getProgression(f_r7), "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.getProgression(f_r7), "%");
    \u0275\u0275classProp("mc-progress-fill--done", ctx_r1.isCourseFinished(f_r7))("mc-progress-fill--active", ctx_r1.isInProgress(f_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r7.date_inscription);
    \u0275\u0275advance();
    \u0275\u0275classProp("mc-btn-action--done", ctx_r1.isCourseFinished(f_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getCourseActionIcon(f_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCourseActionLabel(f_r7), " ");
  }
}
function MesCoursComponent_ng_container_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275template(1, MesCoursComponent_ng_container_47_div_1_div_1_Template, 29, 32, "div", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formations);
  }
}
function MesCoursComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MesCoursComponent_ng_container_47_div_1_Template, 2, 1, "div", 98);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formations.length > 0);
  }
}
function MesCoursComponent_div_48_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " Aucun r\xE9sultat pour vos filtres actuels. ");
    \u0275\u0275elementContainerEnd();
  }
}
function MesCoursComponent_div_48_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " Vos formations appara\xEEtront ici d\xE8s qu'elles vous seront assign\xE9es. ");
    \u0275\u0275elementContainerEnd();
  }
}
function MesCoursComponent_div_48_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 131);
    \u0275\u0275listener("click", function MesCoursComponent_div_48_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275element(1, "i", 132);
    \u0275\u0275text(2, "R\xE9initialiser les filtres ");
    \u0275\u0275elementEnd();
  }
}
function MesCoursComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 128);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 129);
    \u0275\u0275text(4, "Aucune formation trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275template(6, MesCoursComponent_div_48_ng_container_6_Template, 2, 0, "ng-container", 35)(7, MesCoursComponent_div_48_ng_container_7_Template, 2, 0, "ng-container", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MesCoursComponent_div_48_button_8_Template, 3, 0, "button", 130);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.searchDataValue || ctx_r1.selectedTab !== "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchDataValue && ctx_r1.selectedTab === "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchDataValue || ctx_r1.selectedTab !== "");
  }
}
function MesCoursComponent_app_custom_pagination_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-custom-pagination", 133);
    \u0275\u0275listener("pageChange", function MesCoursComponent_app_custom_pagination_49_Template_app_custom_pagination_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("totalItems", ctx_r1.totalData)("pageSize", ctx_r1.pageSize)("currentPage", ctx_r1.currentPage);
  }
}
var MesCoursComponent = class _MesCoursComponent {
  formationsService;
  progressionService;
  router;
  // ── Vue ─────────────────────────────────────────
  viewMode = "grid";
  // ── Données ──────────────────────────────────────
  allFormations = [];
  formations = [];
  loading = false;
  error = "";
  // ── Pagination ───────────────────────────────────
  currentPage = 1;
  pageSize = 10;
  totalData = 0;
  skip = 0;
  limit = 10;
  // ── Filtres ──────────────────────────────────────
  selectedTab = "";
  searchDataValue = "";
  // ── Toast ────────────────────────────────────────
  toast = { type: "success", message: "", visible: false };
  toastTimer;
  // ── Abonnement progression ───────────────────────
  progressionSub;
  constructor(formationsService, progressionService, router) {
    this.formationsService = formationsService;
    this.progressionService = progressionService;
    this.router = router;
  }
  ngOnInit() {
    this.loadFormations();
    this.progressionSub = this.progressionService.change$.subscribe(() => {
      this.formations = [...this.formations];
    });
  }
  ngOnDestroy() {
    this.progressionSub?.unsubscribe();
    clearTimeout(this.toastTimer);
  }
  // ════════════════════════════════════════════
  // CHARGEMENT
  // ════════════════════════════════════════════
  loadFormations() {
    this.loading = true;
    this.error = "";
    this.formationsService.getMesFormations().subscribe({
      next: (res) => {
        this.allFormations = res.formations ?? [];
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.error = "Erreur lors du chargement de vos formations.";
        this.loading = false;
      }
    });
  }
  // ════════════════════════════════════════════
  // PROGRESSION
  // ════════════════════════════════════════════
  getProgression(f) {
    const fromService = this.progressionService.getPercent(f.id);
    return fromService > 0 ? fromService : Number(f.progression ?? 0);
  }
  // ════════════════════════════════════════════
  // KPI GETTERS
  // ════════════════════════════════════════════
  get totalFormations() {
    return this.allFormations.length;
  }
  get totalEnCours() {
    return this.allFormations.filter((f) => {
      const p = this.getProgression(f);
      return p > 0 && p < 100;
    }).length;
  }
  get totalACommencer() {
    return this.allFormations.filter((f) => this.getProgression(f) === 0).length;
  }
  get totalTerminees() {
    return this.allFormations.filter((f) => this.getProgression(f) === 100).length;
  }
  get totalCertifiantes() {
    return this.allFormations.filter((f) => f.est_certifiante).length;
  }
  // ════════════════════════════════════════════
  // FILTRES
  // ════════════════════════════════════════════
  get filteredFormations() {
    return this.allFormations.filter((f) => {
      const p = this.getProgression(f);
      const matchSearch = !this.searchDataValue || f.titre.toLowerCase().includes(this.searchDataValue.toLowerCase()) || (f.description ?? "").toLowerCase().includes(this.searchDataValue.toLowerCase());
      const matchTab = this.selectedTab === "" ? true : this.selectedTab === "en_cours" ? p > 0 && p < 100 : this.selectedTab === "a_commencer" ? p === 0 : this.selectedTab === "termines" ? p === 100 : true;
      return matchSearch && matchTab;
    });
  }
  applyFilters() {
    const filtered = this.filteredFormations;
    this.totalData = filtered.length;
    this.currentPage = 1;
    this.skip = 0;
    this.formations = filtered.slice(0, this.limit);
  }
  selectTab(tab) {
    this.selectedTab = tab;
    this.applyFilters();
  }
  searchData(v) {
    this.searchDataValue = v;
    this.applyFilters();
  }
  resetFilters() {
    this.searchDataValue = "";
    this.selectedTab = "";
    this.applyFilters();
  }
  setView(mode) {
    this.viewMode = mode;
  }
  // ════════════════════════════════════════════
  // PAGINATION
  // ════════════════════════════════════════════
  onPageChange(page) {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.formations = this.filteredFormations.slice(this.skip, this.skip + this.pageSize);
  }
  // ════════════════════════════════════════════
  // NAVIGATION
  // ════════════════════════════════════════════
  openPlayer(f) {
    this.router.navigate(["/courses/course-watch", f.id]);
  }
  // ════════════════════════════════════════════
  // TOAST
  // ════════════════════════════════════════════
  showToast(type, message) {
    clearTimeout(this.toastTimer);
    this.toast = { type, message, visible: true };
    this.toastTimer = setTimeout(() => this.toast.visible = false, 4e3);
  }
  closeToast() {
    this.toast.visible = false;
    clearTimeout(this.toastTimer);
  }
  // ════════════════════════════════════════════
  // HELPERS
  // ════════════════════════════════════════════
  isCourseFinished(f) {
    return this.getProgression(f) === 100;
  }
  isInProgress(f) {
    const p = this.getProgression(f);
    return p > 0 && p < 100;
  }
  getCourseActionLabel(f) {
    const p = this.getProgression(f);
    if (p === 100)
      return "Revoir";
    if (p > 0)
      return "Continuer";
    return "Commencer";
  }
  getCourseActionIcon(f) {
    const p = this.getProgression(f);
    if (p === 100)
      return "isax-refresh-2";
    if (p > 0)
      return "isax-play-circle";
    return "isax-play";
  }
  getStatusLabel(f) {
    const p = this.getProgression(f);
    if (p === 100)
      return "Termin\xE9";
    if (p > 0)
      return "En cours";
    return "\xC0 commencer";
  }
  getStatusClass(f) {
    const p = this.getProgression(f);
    if (p === 100)
      return "statut-validee";
    if (p > 0)
      return "statut-progress";
    return "statut-attente";
  }
  getNiveauClass(niveau) {
    const map = {
      debutant: "niveau-debutant",
      intermediaire: "niveau-inter",
      avance: "niveau-avance",
      expert: "niveau-expert"
    };
    return map[niveau?.toLowerCase() ?? ""] ?? "niveau-default";
  }
  static \u0275fac = function MesCoursComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MesCoursComponent)(\u0275\u0275directiveInject(FormationsService), \u0275\u0275directiveInject(ProgressionService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MesCoursComponent, selectors: [["app-mes-cours"]], decls: 50, vars: 32, consts: [[1, "mc-toast-container"], [1, "mc-toast"], [1, "mc-toast__icon"], ["class", "isax isax-tick-circle-filled", 4, "ngIf"], ["class", "isax isax-close-circle-filled", 4, "ngIf"], ["class", "isax isax-warning-2-filled", 4, "ngIf"], [1, "mc-toast__body"], [1, "mc-toast__label"], [1, "mc-toast__message"], [1, "mc-toast__close", 3, "click"], [1, "isax", "isax-close-square"], [1, "mc-header", "mb-4"], [1, "mc-header__left"], [1, "mc-header__title"], [1, "mc-header__subtitle"], [1, "mc-header__actions"], ["title", "Vue tableau", 1, "mc-header__toggle-btn", 3, "click"], [1, "isax", "isax-row-vertical"], ["title", "Vue grille", 1, "mc-header__toggle-btn", 3, "click"], [1, "isax", "isax-element-3"], ["class", "pq-kpi-grid mb-4", 4, "ngIf"], [1, "mc-filters", "mb-4"], [1, "mc-filters__search"], [1, "isax", "isax-search-normal-1", "mc-filters__search-icon"], ["type", "search", "placeholder", "Rechercher une formation...", 1, "mc-filters__search-input", 3, "ngModelChange", "ngModel"], ["class", "mc-filters__search-clear", 3, "click", 4, "ngIf"], [1, "mc-filters__pills"], [1, "mc-filters__pill", 3, "click"], [1, "mc-filters__pill", "mc-filters__pill--progress", 3, "click"], ["class", "mc-filters__pill-count", 4, "ngIf"], [1, "mc-filters__pill", "mc-filters__pill--pending", 3, "click"], [1, "mc-filters__pill", "mc-filters__pill--done", 3, "click"], [1, "mc-filters__reset", 3, "click"], [1, "isax", "isax-refresh"], ["class", "mc-loading", 4, "ngIf"], [4, "ngIf"], ["class", "mc-empty", 4, "ngIf"], [3, "totalItems", "pageSize", "currentPage", "pageChange", 4, "ngIf"], [1, "isax", "isax-tick-circle-filled"], [1, "isax", "isax-close-circle-filled"], [1, "isax", "isax-warning-2-filled"], [1, "pq-kpi-grid", "mb-4"], [1, "pq-kpi-card", "pq-kpi-card--teal", 3, "click"], [1, "pq-kpi-card__icon"], [1, "isax", "isax-book-1"], [1, "pq-kpi-card__body"], [1, "pq-kpi-card__value"], [1, "pq-kpi-card__label"], [1, "pq-kpi-card", "pq-kpi-card--blue", 3, "click"], [1, "isax", "isax-play-circle"], [1, "pq-kpi-card", "pq-kpi-card--orange", 3, "click"], [1, "isax", "isax-flash-circle"], [1, "pq-kpi-card", "pq-kpi-card--green", 3, "click"], [1, "isax", "isax-medal-star"], [1, "mc-filters__search-clear", 3, "click"], [1, "isax", "isax-close-circle"], [1, "mc-filters__pill-count"], [1, "mc-loading"], [1, "mc-loading__spinner"], ["class", "card mc-table-card", 4, "ngIf"], [1, "card", "mc-table-card"], [1, "card-header", "mc-table-card__header"], [1, "mc-table-card__title"], [1, "isax", "isax-book", "text-primary", "me-2"], [1, "mc-table-card__count"], [1, "text-muted", 2, "font-size", "11px"], [1, "isax", "isax-mouse-circle", "me-1"], [1, "table-responsive"], [1, "table", "mc-table", "align-middle", "mb-0"], [2, "min-width", "300px"], [1, "text-center"], [1, "text-center", 2, "min-width", "140px"], ["class", "mc-table-row", 3, "mc-row--done", "click", 4, "ngFor", "ngForOf"], [1, "mc-table-row", 3, "click"], [1, "mc-formation"], ["alt", "", 1, "mc-formation__thumb", 3, "src"], [1, "mc-formation__info"], [1, "mc-formation__title"], ["class", "mc-formation__sub", 4, "ngIf"], [1, "mc-formation__chips"], ["class", "mc-chip", 4, "ngIf"], ["class", "mc-chip mc-chip--award", 4, "ngIf"], ["class", "mc-meta", 4, "ngIf"], ["class", "mc-meta mc-meta--muted", 4, "ngIf"], [1, "mc-niveau", 3, "ngClass"], [1, "mc-statut", 3, "ngClass"], [1, "text-center", 3, "click"], [1, "mc-action-btn", 3, "click"], [1, "isax", "me-1", 3, "ngClass"], [1, "mc-formation__sub"], [1, "isax", "isax-teacher", "me-1"], [1, "mc-chip"], [1, "isax", "isax-language-square", "me-1"], [1, "mc-chip", "mc-chip--award"], [1, "isax", "isax-award", "me-1"], [1, "mc-meta"], [1, "isax", "isax-clock", "me-1"], [1, "mc-meta", "mc-meta--muted"], ["class", "mc-grid", 4, "ngIf"], [1, "mc-grid"], ["class", "mc-grid-card", 3, "mc-grid-card--done", "mc-grid-card--progress", "click", 4, "ngFor", "ngForOf"], [1, "mc-grid-card", 3, "click"], [1, "mc-grid-card__cover"], [1, "mc-grid-card__img", 3, "src", "alt"], [1, "mc-grid-card__cover-overlay"], ["class", "mc-niveau mc-grid-card__niveau", 3, "ngClass", 4, "ngIf"], ["class", "mc-grid-card__seal", 4, "ngIf"], [1, "mc-grid-card__body"], [1, "mc-grid-card__title"], ["class", "mc-grid-card__sub", 4, "ngIf"], [1, "mc-grid-card__chips"], [1, "mc-grid-card__progress"], [1, "mc-progress-header"], [1, "mc-progress-label"], [1, "mc-progress-pct"], [1, "mc-progress-track"], [1, "mc-progress-fill"], [1, "mc-grid-card__footer", 3, "click"], ["class", "mc-grid-card__date", 4, "ngIf"], [1, "mc-btn-action", 3, "click"], [1, "mc-niveau", "mc-grid-card__niveau", 3, "ngClass"], [1, "mc-grid-card__seal"], [1, "isax", "isax-tick-circle"], [1, "mc-grid-card__sub"], [1, "isax", "isax-teacher"], [1, "mc-grid-card__date"], [1, "isax", "isax-calendar-1"], [1, "mc-empty"], [1, "mc-empty__icon"], [1, "mc-empty__title"], ["class", "mc-btn-retry", 3, "click", 4, "ngIf"], [1, "mc-btn-retry", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [3, "pageChange", "totalItems", "pageSize", "currentPage"]], template: function MesCoursComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275template(3, MesCoursComponent_i_3_Template, 1, 0, "i", 3)(4, MesCoursComponent_i_4_Template, 1, 0, "i", 4)(5, MesCoursComponent_i_5_Template, 1, 0, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function MesCoursComponent_Template_button_click_11_listener() {
        return ctx.closeToast();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "h3", 13);
      \u0275\u0275text(16, "Mes Formations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 14);
      \u0275\u0275text(18, "Acc\xE9dez \xE0 l'ensemble de vos demandes de formations valid\xE9es");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 15)(20, "button", 16);
      \u0275\u0275listener("click", function MesCoursComponent_Template_button_click_20_listener() {
        return ctx.setView("table");
      });
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 18);
      \u0275\u0275listener("click", function MesCoursComponent_Template_button_click_22_listener() {
        return ctx.setView("grid");
      });
      \u0275\u0275element(23, "i", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(24, MesCoursComponent_div_24_Template, 33, 12, "div", 20);
      \u0275\u0275elementStart(25, "div", 21)(26, "div", 22);
      \u0275\u0275element(27, "i", 23);
      \u0275\u0275elementStart(28, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function MesCoursComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function MesCoursComponent_Template_input_ngModelChange_28_listener($event) {
        return ctx.searchData($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, MesCoursComponent_button_29_Template, 2, 0, "button", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 26)(31, "button", 27);
      \u0275\u0275listener("click", function MesCoursComponent_Template_button_click_31_listener() {
        return ctx.selectTab("");
      });
      \u0275\u0275text(32, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 28);
      \u0275\u0275listener("click", function MesCoursComponent_Template_button_click_33_listener() {
        return ctx.selectTab("en_cours");
      });
      \u0275\u0275text(34, " En cours ");
      \u0275\u0275template(35, MesCoursComponent_span_35_Template, 2, 1, "span", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 30);
      \u0275\u0275listener("click", function MesCoursComponent_Template_button_click_36_listener() {
        return ctx.selectTab("a_commencer");
      });
      \u0275\u0275text(37, " \xC0 commencer ");
      \u0275\u0275template(38, MesCoursComponent_span_38_Template, 2, 1, "span", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 31);
      \u0275\u0275listener("click", function MesCoursComponent_Template_button_click_39_listener() {
        return ctx.selectTab("termines");
      });
      \u0275\u0275text(40, " Termin\xE9es ");
      \u0275\u0275template(41, MesCoursComponent_span_41_Template, 2, 1, "span", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "button", 32);
      \u0275\u0275listener("click", function MesCoursComponent_Template_button_click_42_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275element(43, "i", 33);
      \u0275\u0275text(44, " R\xE9initialiser ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(45, MesCoursComponent_div_45_Template, 4, 0, "div", 34)(46, MesCoursComponent_ng_container_46_Template, 2, 1, "ng-container", 35)(47, MesCoursComponent_ng_container_47_Template, 2, 1, "ng-container", 35)(48, MesCoursComponent_div_48_Template, 9, 3, "div", 36)(49, MesCoursComponent_app_custom_pagination_49_Template, 1, 3, "app-custom-pagination", 37);
    }
    if (rf & 2) {
      \u0275\u0275classProp("visible", ctx.toast.visible);
      \u0275\u0275advance();
      \u0275\u0275classMap("mc-toast--" + ctx.toast.type);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.toast.type === "success");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toast.type === "error");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toast.type === "warning");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.toast.type === "success" ? "Succ\xE8s" : ctx.toast.type === "warning" ? "Attention" : "Erreur", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.toast.message);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("mc-header__toggle-btn--active", ctx.viewMode === "table");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("mc-header__toggle-btn--active", ctx.viewMode === "grid");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.allFormations.length > 0);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchDataValue);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("mc-filters__pill--active", ctx.selectedTab === "");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("mc-filters__pill--active", ctx.selectedTab === "en_cours");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.totalEnCours > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("mc-filters__pill--active", ctx.selectedTab === "a_commencer");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.totalACommencer > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("mc-filters__pill--active", ctx.selectedTab === "termines");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.totalTerminees > 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.viewMode === "table");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.viewMode === "grid");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.formations.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.totalData > ctx.pageSize);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CustomPaginationComponent, DatePipe], styles: ["\n\n.pq-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  transition: all 0.22s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: currentColor;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.pq-kpi-card__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.pq-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1;\n}\n.pq-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%] {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%] {\n  border-top-color: #16a34a;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.pq-kpi-card--green.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n}\n.pq-kpi-card--blue[_ngcontent-%COMP%] {\n  border-top-color: #3b82f6;\n}\n.pq-kpi-card--blue[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.pq-kpi-card--blue.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%] {\n  border-top-color: #f59e0b;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.pq-kpi-card--orange.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n}\n.pq-kpi-card--purple[_ngcontent-%COMP%] {\n  border-top-color: #7c3aed;\n}\n.pq-kpi-card--purple[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.pq-kpi-card--purple.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #7c3aed;\n}\n.mc-toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  opacity: 0;\n  transform: translateY(-12px);\n  pointer-events: none;\n  transition: opacity 0.25s, transform 0.25s;\n}\n.mc-toast-container.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n}\n.mc-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 300px;\n  max-width: 420px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  border-left: 4px solid #069b8f;\n}\n.mc-toast--success[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n}\n.mc-toast--success[_ngcontent-%COMP%]   .mc-toast__icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.mc-toast--error[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.mc-toast--error[_ngcontent-%COMP%]   .mc-toast__icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.mc-toast--warning[_ngcontent-%COMP%] {\n  border-color: #d97706;\n}\n.mc-toast--warning[_ngcontent-%COMP%]   .mc-toast__icon[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.mc-toast__icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.mc-toast__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.mc-toast__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #4b5563;\n  display: block;\n  margin-bottom: 2px;\n}\n.mc-toast__message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #111827;\n  margin: 0;\n}\n.mc-toast__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9ca3af;\n  padding: 0;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.mc-toast__close[_ngcontent-%COMP%]:hover {\n  color: #4b5563;\n}\n.mc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n.mc-header__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.mc-header__subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #4b5563;\n  margin: 0;\n}\n.mc-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mc-header__toggle-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 1.1rem;\n  transition: all 0.15s;\n}\n.mc-header__toggle-btn[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.mc-header__toggle-btn--active[_ngcontent-%COMP%] {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n}\n.mc-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.mc-filters__search[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 220px;\n  max-width: 320px;\n  flex: 1;\n}\n.mc-filters__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.mc-filters__search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 34px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  outline: none;\n  background: #fff;\n  color: #111827;\n}\n.mc-filters__search-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.mc-filters__search-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9ca3af;\n}\n.mc-filters__search-clear[_ngcontent-%COMP%]:hover {\n  color: #4b5563;\n}\n.mc-filters__pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.mc-filters__pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #4b5563;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.mc-filters__pill[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.mc-filters__pill--active[_ngcontent-%COMP%] {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n}\n.mc-filters__pill--progress.mc-filters__pill--active[_ngcontent-%COMP%] {\n  background: #0369a1;\n  border-color: #0369a1;\n}\n.mc-filters__pill--pending.mc-filters__pill--active[_ngcontent-%COMP%] {\n  background: #d97706;\n  border-color: #d97706;\n}\n.mc-filters__pill--done.mc-filters__pill--active[_ngcontent-%COMP%] {\n  background: #16a34a;\n  border-color: #16a34a;\n}\n.mc-filters__pill-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0.8;\n}\n.mc-filters__reset[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  background: #f9fafb;\n  font-size: 0.8125rem;\n  color: #4b5563;\n  cursor: pointer;\n}\n.mc-filters__reset[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.mc-loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #4b5563;\n}\n.mc-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 0.875rem;\n}\n.mc-loading__spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto;\n}\n.mc-statut[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.mc-statut.statut-validee[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.mc-statut.statut-progress[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.mc-statut.statut-attente[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.mc-niveau[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.mc-niveau.niveau-debutant[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.mc-niveau.niveau-inter[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.mc-niveau.niveau-avance[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.mc-niveau.niveau-expert[_ngcontent-%COMP%] {\n  background: #fce7f3;\n  color: #be185d;\n}\n.mc-niveau.niveau-default[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.mc-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 500;\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.mc-chip--award[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.mc-table-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.mc-table-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 14px 20px;\n}\n.mc-table-card__title[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #111827;\n  display: flex;\n  align-items: center;\n}\n.mc-table-card__count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 22px;\n  background: #069b8f;\n  color: #fff;\n  border-radius: 11px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 0 6px;\n  margin-left: 8px;\n}\n.mc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #4b5563;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 10px 16px;\n  white-space: nowrap;\n}\n.mc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: middle;\n}\n.mc-table-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.mc-table-row[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.mc-table-row.mc-row--done[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.mc-table-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.mc-formation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.mc-formation__thumb[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 42px;\n  object-fit: cover;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #e5e7eb;\n}\n.mc-formation__title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #111827;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 2px;\n}\n.mc-formation__sub[_ngcontent-%COMP%] {\n  font-size: 0.775rem;\n  color: #4b5563;\n  display: block;\n  margin-bottom: 4px;\n}\n.mc-formation__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.mc-meta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.8125rem;\n  color: #4b5563;\n}\n.mc-meta--muted[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.mc-action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 14px;\n  border-radius: 8px;\n  background: #e6f7f5;\n  color: #069b8f;\n  border: none;\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition: background 0.15s;\n}\n.mc-action-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(210.6818181818, 240.8181818182, 237.2727272727);\n}\n.mc-action-btn--done[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.mc-action-btn--done[_ngcontent-%COMP%]:hover {\n  background: rgb(196.5131578947, 249.9868421053, 214.8947368421);\n}\n.mc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media (max-width: 1199px) {\n  .mc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .mc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.mc-grid-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.mc-grid-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.mc-grid-card--done[_ngcontent-%COMP%] {\n  border-color: #bbf7d0;\n  background: #f0fdf4;\n}\n.mc-grid-card--progress[_ngcontent-%COMP%] {\n  border-color: #bfdbfe;\n}\n.mc-grid-card__cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 140px;\n  overflow: hidden;\n}\n.mc-grid-card__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.mc-grid-card[_ngcontent-%COMP%]:hover   .mc-grid-card__img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.mc-grid-card__cover-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.5) 0%,\n      transparent 60%);\n  display: flex;\n  align-items: flex-end;\n  padding: 10px 12px;\n}\n.mc-grid-card__niveau[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 0.7rem;\n}\n.mc-grid-card__seal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 30px;\n  height: 30px;\n  background: #16a34a;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1rem;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.4);\n}\n.mc-grid-card__body[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  flex: 1;\n}\n.mc-grid-card__title[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.mc-grid-card__sub[_ngcontent-%COMP%] {\n  font-size: 0.775rem;\n  color: #4b5563;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.mc-grid-card__sub[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.mc-grid-card__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.mc-grid-card__progress[_ngcontent-%COMP%] {\n  padding: 0 16px 12px;\n}\n.mc-grid-card__footer[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.mc-grid-card__date[_ngcontent-%COMP%] {\n  font-size: 0.775rem;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.mc-grid-card__date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.mc-progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.mc-progress-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.mc-progress-pct[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #4b5563;\n}\n.mc-progress-pct--active[_ngcontent-%COMP%] {\n  color: #0369a1;\n}\n.mc-progress-pct--done[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.mc-progress-track[_ngcontent-%COMP%] {\n  height: 5px;\n  background: #f3f4f6;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.mc-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  background: #d1d5db;\n  transition: width 0.4s ease;\n}\n.mc-progress-fill--active[_ngcontent-%COMP%] {\n  background: #0369a1;\n}\n.mc-progress-fill--done[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.mc-btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 14px;\n  border-radius: 8px;\n  background: #e6f7f5;\n  color: #069b8f;\n  border: none;\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition: background 0.15s;\n  white-space: nowrap;\n}\n.mc-btn-action[_ngcontent-%COMP%]:hover {\n  background: rgb(210.6818181818, 240.8181818182, 237.2727272727);\n}\n.mc-btn-action--done[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.mc-btn-action--done[_ngcontent-%COMP%]:hover {\n  background: rgb(196.5131578947, 249.9868421053, 214.8947368421);\n}\n.mc-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.mc-empty__icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: #f3f4f6;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.mc-empty__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #9ca3af;\n}\n.mc-empty__title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.mc-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #4b5563;\n}\n.mc-btn-retry[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 8px 20px;\n  background: #069b8f;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n@media (max-width: 767px) {\n  .mc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .mc-header__title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .mc-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .mc-filters__search[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .pq-kpi-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=mes-cours.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MesCoursComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-mes-cours", imports: [CommonModule, FormsModule, CustomPaginationComponent], template: `<!-- TOAST -->\r
<div class="mc-toast-container" [class.visible]="toast.visible">\r
  <div class="mc-toast" [class]="'mc-toast--' + toast.type">\r
    <div class="mc-toast__icon">\r
      <i *ngIf="toast.type === 'success'" class="isax isax-tick-circle-filled"></i>\r
      <i *ngIf="toast.type === 'error'"   class="isax isax-close-circle-filled"></i>\r
      <i *ngIf="toast.type === 'warning'" class="isax isax-warning-2-filled"></i>\r
    </div>\r
    <div class="mc-toast__body">\r
      <span class="mc-toast__label">\r
        {{ toast.type === 'success' ? 'Succ\xE8s' : toast.type === 'warning' ? 'Attention' : 'Erreur' }}\r
      </span>\r
      <p class="mc-toast__message">{{ toast.message }}</p>\r
    </div>\r
    <button class="mc-toast__close" (click)="closeToast()">\r
      <i class="isax isax-close-square"></i>\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- PAGE HEADER -->\r
<div class="mc-header mb-4">\r
  <div class="mc-header__left">\r
    <h3 class="mc-header__title">Mes Formations</h3>\r
    <p class="mc-header__subtitle">Acc\xE9dez \xE0 l'ensemble de vos demandes de formations valid\xE9es</p>\r
  </div>\r
  <div class="mc-header__actions">\r
    <button class="mc-header__toggle-btn"\r
            [class.mc-header__toggle-btn--active]="viewMode === 'table'"\r
            (click)="setView('table')" title="Vue tableau">\r
      <i class="isax isax-row-vertical"></i>\r
    </button>\r
    <button class="mc-header__toggle-btn"\r
            [class.mc-header__toggle-btn--active]="viewMode === 'grid'"\r
            (click)="setView('grid')" title="Vue grille">\r
      <i class="isax isax-element-3"></i>\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- KPI INDICATORS \u2014 m\xEAme style que parcours/catalogues -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="pq-kpi-grid mb-4" *ngIf="!loading && allFormations.length > 0">\r
\r
  <!-- Total -->\r
  <div class="pq-kpi-card pq-kpi-card--teal" (click)="selectTab('')"\r
       [class.pq-kpi-card--active]="selectedTab === ''">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-book-1"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalFormations }}</div>\r
      <div class="pq-kpi-card__label">Total</div>\r
    </div>\r
  </div>\r
\r
  <!-- En cours -->\r
  <div class="pq-kpi-card pq-kpi-card--blue" (click)="selectTab('en_cours')"\r
       [class.pq-kpi-card--active]="selectedTab === 'en_cours'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-play-circle"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalEnCours }}</div>\r
      <div class="pq-kpi-card__label">En cours</div>\r
    </div>\r
  </div>\r
\r
  <!-- \xC0 commencer -->\r
  <div class="pq-kpi-card pq-kpi-card--orange" (click)="selectTab('a_commencer')"\r
       [class.pq-kpi-card--active]="selectedTab === 'a_commencer'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-flash-circle"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalACommencer }}</div>\r
      <div class="pq-kpi-card__label">\xC0 commencer</div>\r
    </div>\r
  </div>\r
\r
  <!-- Termin\xE9es -->\r
  <div class="pq-kpi-card pq-kpi-card--green" (click)="selectTab('termines')"\r
       [class.pq-kpi-card--active]="selectedTab === 'termines'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-medal-star"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalTerminees }}</div>\r
      <div class="pq-kpi-card__label">Termin\xE9es</div>\r
    </div>\r
  </div>\r
\r
  <!-- Certifiantes \r
  <div class="pq-kpi-card pq-kpi-card--purple" (click)="selectTab('')"\r
       [class.pq-kpi-card--active]="false">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-award"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalCertifiantes }}</div>\r
      <div class="pq-kpi-card__label">Certifiantes</div>\r
    </div>\r
  </div>\r
  -->\r
\r
</div>\r
\r
<!-- FILTRES -->\r
<div class="mc-filters mb-4">\r
  <div class="mc-filters__search">\r
    <i class="isax isax-search-normal-1 mc-filters__search-icon"></i>\r
    <input type="search" class="mc-filters__search-input"\r
           placeholder="Rechercher une formation..."\r
           [(ngModel)]="searchDataValue"\r
           (ngModelChange)="searchData($event)">\r
    <button *ngIf="searchDataValue" class="mc-filters__search-clear"\r
            (click)="searchData('')">\r
      <i class="isax isax-close-circle"></i>\r
    </button>\r
  </div>\r
  <div class="mc-filters__pills">\r
    <button class="mc-filters__pill"\r
            [class.mc-filters__pill--active]="selectedTab === ''"\r
            (click)="selectTab('')">Tous</button>\r
    <button class="mc-filters__pill mc-filters__pill--progress"\r
            [class.mc-filters__pill--active]="selectedTab === 'en_cours'"\r
            (click)="selectTab('en_cours')">\r
      En cours\r
      <span class="mc-filters__pill-count" *ngIf="totalEnCours > 0">({{ totalEnCours }})</span>\r
    </button>\r
    <button class="mc-filters__pill mc-filters__pill--pending"\r
            [class.mc-filters__pill--active]="selectedTab === 'a_commencer'"\r
            (click)="selectTab('a_commencer')">\r
      \xC0 commencer\r
      <span class="mc-filters__pill-count" *ngIf="totalACommencer > 0">({{ totalACommencer }})</span>\r
    </button>\r
    <button class="mc-filters__pill mc-filters__pill--done"\r
            [class.mc-filters__pill--active]="selectedTab === 'termines'"\r
            (click)="selectTab('termines')">\r
      Termin\xE9es\r
      <span class="mc-filters__pill-count" *ngIf="totalTerminees > 0">({{ totalTerminees }})</span>\r
    </button>\r
  </div>\r
  <button class="mc-filters__reset" (click)="resetFilters()">\r
    <i class="isax isax-refresh"></i> R\xE9initialiser\r
  </button>\r
</div>\r
\r
<!-- LOADING -->\r
<div *ngIf="loading" class="mc-loading">\r
  <div class="mc-loading__spinner"></div>\r
  <p>Chargement de vos formations...</p>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE TABLEAU                                -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="!loading && viewMode === 'table'">\r
  <div class="card mc-table-card" *ngIf="formations.length > 0">\r
    <div class="card-header mc-table-card__header">\r
      <div class="mc-table-card__title">\r
        <i class="isax isax-book text-primary me-2"></i>\r
        Mes formations\r
        <span class="mc-table-card__count">{{ totalData }}</span>\r
      </div>\r
      <small class="text-muted" style="font-size:11px">\r
        <i class="isax isax-mouse-circle me-1"></i>Cliquez sur une ligne pour d\xE9marrer\r
      </small>\r
    </div>\r
    <div class="table-responsive">\r
      <table class="table mc-table align-middle mb-0">\r
        <thead>\r
          <tr>\r
            <th style="min-width:300px;">Formation</th>\r
            <th>Dur\xE9e</th>\r
            <th class="text-center">Niveau</th>\r
            <th class="text-center" style="min-width:140px;">Statut</th>\r
            <th class="text-center">Action</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let f of formations"\r
              class="mc-table-row"\r
              [class.mc-row--done]="isCourseFinished(f)"\r
              (click)="openPlayer(f)">\r
\r
            <!-- FORMATION -->\r
            <td>\r
              <div class="mc-formation">\r
                <img [src]="f.image_couverture || 'assets/img/course/course-01.jpg'"\r
                     class="mc-formation__thumb" alt="">\r
                <div class="mc-formation__info">\r
                  <div class="mc-formation__title">{{ f.titre }}</div>\r
                  <small class="mc-formation__sub"\r
                         *ngIf="f.formateur_nom || f.formateur?.nom_complet || f.categorie?.nom">\r
                    <i class="isax isax-teacher me-1"></i>\r
                    {{ f.formateur_nom || f.formateur?.nom_complet || f.categorie?.nom }}\r
                  </small>\r
                  <div class="mc-formation__chips">\r
                    <span class="mc-chip" *ngIf="f.langue">\r
                      <i class="isax isax-language-square me-1"></i>{{ f.langue }}\r
                    </span>\r
                    <span class="mc-chip mc-chip--award" *ngIf="f.est_certifiante">\r
                      <i class="isax isax-award me-1"></i>Certifiante\r
                    </span>\r
                  </div>\r
                </div>\r
              </div>\r
            </td>\r
\r
            <!-- DUR\xC9E -->\r
            <td>\r
              <span class="mc-meta" *ngIf="f.duree_totale">\r
                <i class="isax isax-clock me-1"></i>{{ f.duree_totale }}h\r
              </span>\r
              <span class="mc-meta mc-meta--muted" *ngIf="!f.duree_totale">\u2014</span>\r
            </td>\r
\r
            <!-- NIVEAU -->\r
            <td class="text-center">\r
              <span class="mc-niveau" [ngClass]="getNiveauClass(f.niveau)">\r
                {{ f.niveau_display || f.niveau || '\u2014' }}\r
              </span>\r
            </td>\r
\r
            <!-- STATUT -->\r
            <td class="text-center">\r
              <span class="mc-statut" [ngClass]="getStatusClass(f)">{{ getStatusLabel(f) }}</span>\r
            </td>\r
\r
            <!-- ACTION -->\r
            <td class="text-center" (click)="$event.stopPropagation()">\r
              <button class="mc-action-btn"\r
                      [class.mc-action-btn--done]="isCourseFinished(f)"\r
                      (click)="openPlayer(f)">\r
                <i class="isax me-1" [ngClass]="getCourseActionIcon(f)"></i>\r
                {{ getCourseActionLabel(f) }}\r
              </button>\r
            </td>\r
\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</ng-container>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE GRILLE                                 -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="!loading && viewMode === 'grid'">\r
  <div class="mc-grid" *ngIf="formations.length > 0">\r
    <div class="mc-grid-card"\r
         *ngFor="let f of formations"\r
         [class.mc-grid-card--done]="isCourseFinished(f)"\r
         [class.mc-grid-card--progress]="isInProgress(f)"\r
         (click)="openPlayer(f)">\r
\r
      <!-- Cover -->\r
      <div class="mc-grid-card__cover">\r
        <img [src]="f.image_couverture || 'assets/img/course/course-01.jpg'"\r
             alt="{{ f.titre }}" class="mc-grid-card__img">\r
        <div class="mc-grid-card__cover-overlay">\r
          <span class="mc-statut" [ngClass]="getStatusClass(f)">{{ getStatusLabel(f) }}</span>\r
        </div>\r
        <span class="mc-niveau mc-grid-card__niveau"\r
              [ngClass]="getNiveauClass(f.niveau)"\r
              *ngIf="f.niveau">\r
          {{ f.niveau_display || f.niveau }}\r
        </span>\r
        <!-- Sceau termin\xE9 -->\r
        <div class="mc-grid-card__seal" *ngIf="isCourseFinished(f)">\r
          <i class="isax isax-tick-circle"></i>\r
        </div>\r
      </div>\r
\r
      <!-- Corps -->\r
      <div class="mc-grid-card__body">\r
        <h6 class="mc-grid-card__title">{{ f.titre }}</h6>\r
        <p class="mc-grid-card__sub"\r
           *ngIf="f.formateur_nom || f.formateur?.nom_complet || f.categorie?.nom">\r
          <i class="isax isax-teacher"></i>\r
          {{ f.formateur_nom || f.formateur?.nom_complet || f.categorie?.nom }}\r
        </p>\r
        <div class="mc-grid-card__chips">\r
          <span class="mc-chip" *ngIf="f.duree_totale">\r
            <i class="isax isax-clock me-1"></i>{{ f.duree_totale }}h\r
          </span>\r
          <span class="mc-chip" *ngIf="f.langue">\r
            <i class="isax isax-language-square me-1"></i>{{ f.langue }}\r
          </span>\r
          <span class="mc-chip mc-chip--award" *ngIf="f.est_certifiante">\r
            <i class="isax isax-award me-1"></i>Certifiante\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- Progression -->\r
      <div class="mc-grid-card__progress">\r
        <div class="mc-progress-header">\r
          <span class="mc-progress-label">Progression</span>\r
          <span class="mc-progress-pct"\r
                [class.mc-progress-pct--done]="isCourseFinished(f)"\r
                [class.mc-progress-pct--active]="isInProgress(f)">\r
            {{ getProgression(f) }}%\r
          </span>\r
        </div>\r
        <div class="mc-progress-track">\r
          <div class="mc-progress-fill"\r
               [style.width.%]="getProgression(f)"\r
               [class.mc-progress-fill--done]="isCourseFinished(f)"\r
               [class.mc-progress-fill--active]="isInProgress(f)">\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Footer -->\r
      <div class="mc-grid-card__footer" (click)="$event.stopPropagation()">\r
        <span class="mc-grid-card__date" *ngIf="f.date_inscription">\r
          <i class="isax isax-calendar-1"></i>\r
          {{ f.date_inscription | date:'dd/MM/yyyy' }}\r
        </span>\r
        <button class="mc-btn-action"\r
                [class.mc-btn-action--done]="isCourseFinished(f)"\r
                (click)="openPlayer(f)">\r
          <i class="isax me-1" [ngClass]="getCourseActionIcon(f)"></i>\r
          {{ getCourseActionLabel(f) }}\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</ng-container>\r
\r
<!-- EMPTY -->\r
<div *ngIf="!loading && formations.length === 0" class="mc-empty">\r
  <div class="mc-empty__icon"><i class="isax isax-book-1"></i></div>\r
  <h5 class="mc-empty__title">Aucune formation trouv\xE9e</h5>\r
  <p>\r
    <ng-container *ngIf="searchDataValue || selectedTab !== ''">\r
      Aucun r\xE9sultat pour vos filtres actuels.\r
    </ng-container>\r
    <ng-container *ngIf="!searchDataValue && selectedTab === ''">\r
      Vos formations appara\xEEtront ici d\xE8s qu'elles vous seront assign\xE9es.\r
    </ng-container>\r
  </p>\r
  <button *ngIf="searchDataValue || selectedTab !== ''"\r
          class="mc-btn-retry" (click)="resetFilters()">\r
    <i class="isax isax-refresh me-1"></i>R\xE9initialiser les filtres\r
  </button>\r
</div>\r
\r
<!-- PAGINATION -->\r
<app-custom-pagination\r
  *ngIf="!loading && totalData > pageSize"\r
  [totalItems]="totalData"\r
  [pageSize]="pageSize"\r
  [currentPage]="currentPage"\r
  (pageChange)="onPageChange($event)">\r
</app-custom-pagination>`, styles: ["/* src/app/features/student/mes-cours/mes-cours.component.scss */\n.pq-kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  transition: all 0.22s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.pq-kpi-card--active {\n  border-color: currentColor;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.pq-kpi-card__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body {\n  min-width: 0;\n}\n.pq-kpi-card__value {\n  font-size: 22px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1;\n}\n.pq-kpi-card__label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal .pq-kpi-card__icon {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green {\n  border-top-color: #16a34a;\n}\n.pq-kpi-card--green .pq-kpi-card__icon {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.pq-kpi-card--green.pq-kpi-card--active {\n  border-color: #16a34a;\n}\n.pq-kpi-card--blue {\n  border-top-color: #3b82f6;\n}\n.pq-kpi-card--blue .pq-kpi-card__icon {\n  background: #dbeafe;\n  color: #3b82f6;\n}\n.pq-kpi-card--blue.pq-kpi-card--active {\n  border-color: #3b82f6;\n}\n.pq-kpi-card--orange {\n  border-top-color: #f59e0b;\n}\n.pq-kpi-card--orange .pq-kpi-card__icon {\n  background: #fef3c7;\n  color: #f59e0b;\n}\n.pq-kpi-card--orange.pq-kpi-card--active {\n  border-color: #f59e0b;\n}\n.pq-kpi-card--purple {\n  border-top-color: #7c3aed;\n}\n.pq-kpi-card--purple .pq-kpi-card__icon {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.pq-kpi-card--purple.pq-kpi-card--active {\n  border-color: #7c3aed;\n}\n.mc-toast-container {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  opacity: 0;\n  transform: translateY(-12px);\n  pointer-events: none;\n  transition: opacity 0.25s, transform 0.25s;\n}\n.mc-toast-container.visible {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n}\n.mc-toast {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 300px;\n  max-width: 420px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  border-left: 4px solid #069b8f;\n}\n.mc-toast--success {\n  border-color: #16a34a;\n}\n.mc-toast--success .mc-toast__icon {\n  color: #16a34a;\n}\n.mc-toast--error {\n  border-color: #dc2626;\n}\n.mc-toast--error .mc-toast__icon {\n  color: #dc2626;\n}\n.mc-toast--warning {\n  border-color: #d97706;\n}\n.mc-toast--warning .mc-toast__icon {\n  color: #d97706;\n}\n.mc-toast__icon {\n  font-size: 1.25rem;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.mc-toast__body {\n  flex: 1;\n}\n.mc-toast__label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #4b5563;\n  display: block;\n  margin-bottom: 2px;\n}\n.mc-toast__message {\n  font-size: 0.875rem;\n  color: #111827;\n  margin: 0;\n}\n.mc-toast__close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9ca3af;\n  padding: 0;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.mc-toast__close:hover {\n  color: #4b5563;\n}\n.mc-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n.mc-header__title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.mc-header__subtitle {\n  font-size: 0.875rem;\n  color: #4b5563;\n  margin: 0;\n}\n.mc-header__actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mc-header__toggle-btn {\n  width: 38px;\n  height: 38px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 1.1rem;\n  transition: all 0.15s;\n}\n.mc-header__toggle-btn:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.mc-header__toggle-btn--active {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n}\n.mc-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.mc-filters__search {\n  position: relative;\n  min-width: 220px;\n  max-width: 320px;\n  flex: 1;\n}\n.mc-filters__search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.mc-filters__search-input {\n  width: 100%;\n  padding: 8px 34px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  outline: none;\n  background: #fff;\n  color: #111827;\n}\n.mc-filters__search-input:focus {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.mc-filters__search-clear {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9ca3af;\n}\n.mc-filters__search-clear:hover {\n  color: #4b5563;\n}\n.mc-filters__pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.mc-filters__pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #4b5563;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.mc-filters__pill:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.mc-filters__pill--active {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n}\n.mc-filters__pill--progress.mc-filters__pill--active {\n  background: #0369a1;\n  border-color: #0369a1;\n}\n.mc-filters__pill--pending.mc-filters__pill--active {\n  background: #d97706;\n  border-color: #d97706;\n}\n.mc-filters__pill--done.mc-filters__pill--active {\n  background: #16a34a;\n  border-color: #16a34a;\n}\n.mc-filters__pill-count {\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0.8;\n}\n.mc-filters__reset {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  background: #f9fafb;\n  font-size: 0.8125rem;\n  color: #4b5563;\n  cursor: pointer;\n}\n.mc-filters__reset:hover {\n  background: #f3f4f6;\n}\n.mc-loading {\n  text-align: center;\n  padding: 60px 20px;\n  color: #4b5563;\n}\n.mc-loading p {\n  margin-top: 12px;\n  font-size: 0.875rem;\n}\n.mc-loading__spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin: 0 auto;\n}\n.mc-statut {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.mc-statut.statut-validee {\n  background: #dcfce7;\n  color: #15803d;\n}\n.mc-statut.statut-progress {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.mc-statut.statut-attente {\n  background: #fef9c3;\n  color: #a16207;\n}\n.mc-niveau {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.mc-niveau.niveau-debutant {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.mc-niveau.niveau-inter {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.mc-niveau.niveau-avance {\n  background: #fef3c7;\n  color: #b45309;\n}\n.mc-niveau.niveau-expert {\n  background: #fce7f3;\n  color: #be185d;\n}\n.mc-niveau.niveau-default {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.mc-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 500;\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.mc-chip--award {\n  background: #fef3c7;\n  color: #b45309;\n}\n.mc-table-card {\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.mc-table-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 14px 20px;\n}\n.mc-table-card__title {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #111827;\n  display: flex;\n  align-items: center;\n}\n.mc-table-card__count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 22px;\n  background: #069b8f;\n  color: #fff;\n  border-radius: 11px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 0 6px;\n  margin-left: 8px;\n}\n.mc-table thead tr th {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #4b5563;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 10px 16px;\n  white-space: nowrap;\n}\n.mc-table tbody tr td {\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: middle;\n}\n.mc-table-row {\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.mc-table-row:hover {\n  background: #f9fafb;\n}\n.mc-table-row.mc-row--done {\n  background: #f0fdf4;\n}\n.mc-table-row:last-child td {\n  border-bottom: none;\n}\n.mc-formation {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.mc-formation__thumb {\n  width: 56px;\n  height: 42px;\n  object-fit: cover;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #e5e7eb;\n}\n.mc-formation__title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #111827;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 2px;\n}\n.mc-formation__sub {\n  font-size: 0.775rem;\n  color: #4b5563;\n  display: block;\n  margin-bottom: 4px;\n}\n.mc-formation__chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.mc-meta {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.8125rem;\n  color: #4b5563;\n}\n.mc-meta--muted {\n  color: #9ca3af;\n}\n.mc-action-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 14px;\n  border-radius: 8px;\n  background: #e6f7f5;\n  color: #069b8f;\n  border: none;\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition: background 0.15s;\n}\n.mc-action-btn:hover {\n  background: rgb(210.6818181818, 240.8181818182, 237.2727272727);\n}\n.mc-action-btn--done {\n  background: #dcfce7;\n  color: #15803d;\n}\n.mc-action-btn--done:hover {\n  background: rgb(196.5131578947, 249.9868421053, 214.8947368421);\n}\n.mc-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media (max-width: 1199px) {\n  .mc-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .mc-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.mc-grid-card {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.mc-grid-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.mc-grid-card--done {\n  border-color: #bbf7d0;\n  background: #f0fdf4;\n}\n.mc-grid-card--progress {\n  border-color: #bfdbfe;\n}\n.mc-grid-card__cover {\n  position: relative;\n  height: 140px;\n  overflow: hidden;\n}\n.mc-grid-card__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.mc-grid-card:hover .mc-grid-card__img {\n  transform: scale(1.04);\n}\n.mc-grid-card__cover-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.5) 0%,\n      transparent 60%);\n  display: flex;\n  align-items: flex-end;\n  padding: 10px 12px;\n}\n.mc-grid-card__niveau {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 0.7rem;\n}\n.mc-grid-card__seal {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 30px;\n  height: 30px;\n  background: #16a34a;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1rem;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.4);\n}\n.mc-grid-card__body {\n  padding: 14px 16px;\n  flex: 1;\n}\n.mc-grid-card__title {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.mc-grid-card__sub {\n  font-size: 0.775rem;\n  color: #4b5563;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.mc-grid-card__sub i {\n  font-size: 0.8rem;\n}\n.mc-grid-card__chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.mc-grid-card__progress {\n  padding: 0 16px 12px;\n}\n.mc-grid-card__footer {\n  padding: 10px 16px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.mc-grid-card__date {\n  font-size: 0.775rem;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.mc-grid-card__date i {\n  font-size: 0.8rem;\n}\n.mc-progress-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.mc-progress-label {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.mc-progress-pct {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #4b5563;\n}\n.mc-progress-pct--active {\n  color: #0369a1;\n}\n.mc-progress-pct--done {\n  color: #16a34a;\n}\n.mc-progress-track {\n  height: 5px;\n  background: #f3f4f6;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.mc-progress-fill {\n  height: 100%;\n  border-radius: 99px;\n  background: #d1d5db;\n  transition: width 0.4s ease;\n}\n.mc-progress-fill--active {\n  background: #0369a1;\n}\n.mc-progress-fill--done {\n  background: #16a34a;\n}\n.mc-btn-action {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 14px;\n  border-radius: 8px;\n  background: #e6f7f5;\n  color: #069b8f;\n  border: none;\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition: background 0.15s;\n  white-space: nowrap;\n}\n.mc-btn-action:hover {\n  background: rgb(210.6818181818, 240.8181818182, 237.2727272727);\n}\n.mc-btn-action--done {\n  background: #dcfce7;\n  color: #15803d;\n}\n.mc-btn-action--done:hover {\n  background: rgb(196.5131578947, 249.9868421053, 214.8947368421);\n}\n.mc-empty {\n  text-align: center;\n  padding: 60px 20px;\n}\n.mc-empty__icon {\n  width: 72px;\n  height: 72px;\n  background: #f3f4f6;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.mc-empty__icon i {\n  font-size: 2rem;\n  color: #9ca3af;\n}\n.mc-empty__title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 8px;\n}\n.mc-empty p {\n  font-size: 0.875rem;\n  color: #4b5563;\n}\n.mc-btn-retry {\n  margin-top: 16px;\n  padding: 8px 20px;\n  background: #069b8f;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n@media (max-width: 767px) {\n  .mc-header {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .mc-header__title {\n    font-size: 1.25rem;\n  }\n  .mc-filters {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .mc-filters__search {\n    max-width: 100%;\n  }\n  .pq-kpi-card {\n    padding: 12px;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=mes-cours.component.css.map */\n"] }]
  }], () => [{ type: FormationsService }, { type: ProgressionService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MesCoursComponent, { className: "MesCoursComponent", filePath: "src/app/features/student/mes-cours/mes-cours.component.ts", lineNumber: 25 });
})();
export {
  MesCoursComponent
};
//# sourceMappingURL=chunk-M5IVR3XJ.js.map
