import {
  CatalogueService
} from "./chunk-RF7YQBC5.js";
import {
  ParcoursService
} from "./chunk-IZZTCVRO.js";
import {
  SessionFormationService
} from "./chunk-XOAIMG5H.js";
import {
  MatSortModule
} from "./chunk-OA5BMQAL.js";
import {
  CustomPaginationComponent
} from "./chunk-3XTSKOGE.js";
import "./chunk-EDMPVZTI.js";
import {
  FormationService
} from "./chunk-2O6NHTWJ.js";
import "./chunk-5I6ORW2F.js";
import "./chunk-CBU3D44N.js";
import "./chunk-SNOA42FF.js";
import "./chunk-FKX6UC3I.js";
import {
  routes
} from "./chunk-TYVQP4CB.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgSelectMultipleOption
} from "./chunk-45DOGZAU.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  SlicePipe,
  TitleCasePipe
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  of,
  setClassMetadata,
  switchMap,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-course/adminrh-course.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [1, 2, 3, 4, 5, 6];
var _c2 = () => [1, 2, 3];
var _c3 = (a0) => [a0];
var _c4 = () => ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
var _c5 = () => ({ n: 1, l: "Informations" });
var _c6 = () => ({ n: 2, l: "Formations" });
var _c7 = () => ({ n: 3, l: "Param\xE8tres" });
var _c8 = () => ({ n: 4, l: "R\xE9capitulatif" });
var _c9 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function AdminrhCourseComponent_ng_container_14_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 39);
  }
}
function AdminrhCourseComponent_ng_container_14_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_14_div_52_div_1_Template, 1, 0, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function AdminrhCourseComponent_ng_container_14_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function AdminrhCourseComponent_ng_container_14_div_54_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 65);
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.getDefaultImage(f_r4), \u0275\u0275sanitizeUrl)("alt", f_r4.titre);
  }
}
function AdminrhCourseComponent_ng_container_14_div_54_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 6);
  }
}
function AdminrhCourseComponent_ng_container_14_div_54_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r4.nb_max_participants);
  }
}
function AdminrhCourseComponent_ng_container_14_div_54_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275template(2, AdminrhCourseComponent_ng_container_14_div_54_div_1_img_2_Template, 1, 2, "img", 47)(3, AdminrhCourseComponent_ng_container_14_div_54_div_1_i_3_Template, 1, 0, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49)(5, "div", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 52)(10, "span");
    \u0275\u0275element(11, "i", 53);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminrhCourseComponent_ng_container_14_div_54_div_1_span_13_Template, 3, 1, "span", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 54)(15, "span", 55);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 56)(18, "div", 57);
    \u0275\u0275element(19, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 59);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 60)(23, "a", 61);
    \u0275\u0275element(24, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 63);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_div_54_div_1_Template_button_click_25_listener() {
      const f_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.archiveFormation(f_r4));
    });
    \u0275\u0275element(26, "i", 64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-th", ctx_r1.getThumbKey(f_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r4.image_couverture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !f_r4.image_couverture);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-cat", ctx_r1.getCatKey(f_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((f_r4.categorie == null ? null : f_r4.categorie.nom) || "Autre");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDuree(f_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r4.nb_max_participants);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", ctx_r1.getStatusKey(f_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusText(f_r4));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.getCompletion(f_r4), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCompletion(f_r4) > 0 ? ctx_r1.getCompletion(f_r4) + "%" : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.routes.courseDetails + "/" + f_r4.id, \u0275\u0275sanitizeUrl);
  }
}
function AdminrhCourseComponent_ng_container_14_div_54_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune formation trouv\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_ng_container_14_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_14_div_54_div_1_Template, 27, 14, "div", 43)(2, AdminrhCourseComponent_ng_container_14_div_54_div_2_Template, 4, 0, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formations)("ngForTrackBy", ctx_r1.trackByFormation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.formations.length && !ctx_r1.loading);
  }
}
function AdminrhCourseComponent_ng_container_14_table_55_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 70);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 71);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 55);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 72)(15, "a", 61);
    \u0275\u0275element(16, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 63);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_table_55_tr_14_Template_button_click_17_listener() {
      const f_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.archiveFormation(f_r6));
    });
    \u0275\u0275element(18, "i", 64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r6.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r6.formateur_nom || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((f_r6.categorie == null ? null : f_r6.categorie.nom) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getDuree(f_r6));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", ctx_r1.getStatusKey(f_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusText(f_r6));
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.routes.courseDetails + "/" + f_r6.id, \u0275\u0275sanitizeUrl);
  }
}
function AdminrhCourseComponent_ng_container_14_table_55_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 73);
    \u0275\u0275text(2, "Aucune formation trouv\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_ng_container_14_table_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 68)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, AdminrhCourseComponent_ng_container_14_table_55_tr_14_Template, 19, 7, "tr", 69)(15, AdminrhCourseComponent_ng_container_14_table_55_tr_15_Template, 3, 0, "tr", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.formations)("ngForTrackBy", ctx_r1.trackByFormation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.formations.length);
  }
}
function AdminrhCourseComponent_ng_container_14_div_56_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_div_56_button_6_Template_button_click_0_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(i_r9 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.currentPage === i_r9 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r9 + 1);
  }
}
function AdminrhCourseComponent_ng_container_14_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 76)(4, "button", 77);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_div_56_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminrhCourseComponent_ng_container_14_div_56_button_6_Template, 2, 3, "button", 79);
    \u0275\u0275elementStart(7, "button", 77);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_div_56_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r1.skip + 1, "\u2013", ctx_r1.skip + ctx_r1.formations.length, " sur ", ctx_r1.totalData);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumberArray);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.pageNumberArray.length);
  }
}
function AdminrhCourseComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14);
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275elementStart(4, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_ng_container_14_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchDataValue, $event) || (ctx_r1.searchDataValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCourseComponent_ng_container_14_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchData($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus(""));
    });
    \u0275\u0275text(6, "Toutes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus("published"));
    });
    \u0275\u0275text(8, "Publi\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 17);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus("draft"));
    });
    \u0275\u0275text(10, "Brouillons");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 18);
    \u0275\u0275elementStart(12, "button", 19);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMode = "list");
    });
    \u0275\u0275element(13, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 19);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMode = "grid");
    });
    \u0275\u0275element(15, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 22);
    \u0275\u0275element(17, "i", 23);
    \u0275\u0275text(18, " Nouvelle formation ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 24)(20, "div", 25)(21, "div", 26);
    \u0275\u0275element(22, "i", 6);
    \u0275\u0275text(23, " Total formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 27);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 28);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 25)(29, "div", 26);
    \u0275\u0275element(30, "i", 29);
    \u0275\u0275text(31, " En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 27);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 28);
    \u0275\u0275text(35, "inscription ouverte");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 25)(37, "div", 26);
    \u0275\u0275element(38, "i", 30);
    \u0275\u0275text(39, " Brouillons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 27);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 28);
    \u0275\u0275text(43, "non publi\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 25)(45, "div", 26);
    \u0275\u0275element(46, "i", 31);
    \u0275\u0275text(47, " Gratuites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 27);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 28);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(52, AdminrhCourseComponent_ng_container_14_div_52_Template, 2, 2, "div", 32)(53, AdminrhCourseComponent_ng_container_14_div_53_Template, 3, 1, "div", 33)(54, AdminrhCourseComponent_ng_container_14_div_54_Template, 3, 3, "div", 34)(55, AdminrhCourseComponent_ng_container_14_table_55_Template, 16, 3, "table", 35)(56, AdminrhCourseComponent_ng_container_14_div_56_Template, 9, 6, "div", 36);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchDataValue);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(24, _c0));
    \u0275\u0275advance();
    \u0275\u0275classProp("ac-chip--on", ctx_r1.selectedStatus === "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.selectedStatus === "published");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.selectedStatus === "draft");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "list");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "grid");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.adminrhCourseGrid);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.allFormations.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.active, " publi\xE9es");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.stats.active);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.draft);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.free);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.stats.paid, " payantes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.viewMode === "grid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.viewMode === "list");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.totalData > ctx_r1.pageSize);
  }
}
function AdminrhCourseComponent_ng_container_15_div_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 39);
  }
}
function AdminrhCourseComponent_ng_container_15_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_15_div_48_div_1_Template, 1, 0, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function AdminrhCourseComponent_ng_container_15_div_49_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 65);
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r12.image_url, \u0275\u0275sanitizeUrl)("alt", p_r12.nom);
  }
}
function AdminrhCourseComponent_ng_container_15_div_49_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function AdminrhCourseComponent_ng_container_15_div_49_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275template(2, AdminrhCourseComponent_ng_container_15_div_49_div_1_img_2_Template, 1, 2, "img", 47)(3, AdminrhCourseComponent_ng_container_15_div_49_div_1_i_3_Template, 1, 0, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49)(5, "div", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 52)(10, "span");
    \u0275\u0275element(11, "i", 53);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275element(14, "i", 6);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275element(17, "i", 66);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 54)(20, "span", 55);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 87)(23, "button", 88);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_15_div_49_div_1_Template_button_click_23_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openWizardView(p_r12));
    });
    \u0275\u0275element(24, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 89);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_15_div_49_div_1_Template_button_click_25_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openWizardEdit(p_r12));
    });
    \u0275\u0275element(26, "i", 90);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-th", p_r12.actif ? "blue" : "amber");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r12.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r12.image_url);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-cat", p_r12.actif ? "tech" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getNiveauLabel(p_r12.niveau));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.nom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", p_r12.duree_estimee, "h");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (p_r12.formations == null ? null : p_r12.formations.length) || 0, " formations");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (p_r12.users == null ? null : p_r12.users.length) || 0, " inscrits");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", p_r12.actif ? "pub" : "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r12.actif ? "Actif" : "Inactif");
  }
}
function AdminrhCourseComponent_ng_container_15_div_49_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun parcours trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_ng_container_15_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_15_div_49_div_1_Template, 27, 11, "div", 85)(2, AdminrhCourseComponent_ng_container_15_div_49_div_2_Template, 4, 0, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.parcoursFiltered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.parcoursFiltered.length && !ctx_r1.parcoursLoading);
  }
}
function AdminrhCourseComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14);
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275elementStart(4, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_ng_container_15_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.parcoursSearch, $event) || (ctx_r1.parcoursSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCourseComponent_ng_container_15_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyParcoursFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.parcoursStatut = "";
      return \u0275\u0275resetView(ctx_r1.applyParcoursFilters());
    });
    \u0275\u0275text(6, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.parcoursStatut = "actif";
      return \u0275\u0275resetView(ctx_r1.applyParcoursFilters());
    });
    \u0275\u0275text(8, "Actifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 17);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.parcoursStatut = "archive";
      return \u0275\u0275resetView(ctx_r1.applyParcoursFilters());
    });
    \u0275\u0275text(10, "Archiv\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 18);
    \u0275\u0275elementStart(12, "button", 83);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_15_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openWizardCreate());
    });
    \u0275\u0275element(13, "i", 23);
    \u0275\u0275text(14, " Nouveau parcours ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 24)(16, "div", 25)(17, "div", 26);
    \u0275\u0275element(18, "i", 7);
    \u0275\u0275text(19, " Total parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 27);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 28);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 25)(25, "div", 26);
    \u0275\u0275element(26, "i", 84);
    \u0275\u0275text(27, " Actifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 27);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 28);
    \u0275\u0275text(31, "en cours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 25)(33, "div", 26);
    \u0275\u0275element(34, "i", 6);
    \u0275\u0275text(35, " R\xE9sultats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 27);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 28);
    \u0275\u0275text(39, "filtr\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 25)(41, "div", 26);
    \u0275\u0275element(42, "i", 66);
    \u0275\u0275text(43, " Inactifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 27);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 28);
    \u0275\u0275text(47, "non actifs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(48, AdminrhCourseComponent_ng_container_15_div_48_Template, 2, 2, "div", 32)(49, AdminrhCourseComponent_ng_container_15_div_49_Template, 3, 2, "div", 34);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.parcoursSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c0));
    \u0275\u0275advance();
    \u0275\u0275classProp("ac-chip--on", ctx_r1.parcoursStatut === "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.parcoursStatut === "actif");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.parcoursStatut === "archive");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.parcours.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getParcoursActifs(), " actifs");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getParcoursActifs());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.parcoursFiltered.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.parcours.length - ctx_r1.getParcoursActifs());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.parcoursLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.parcoursLoading);
  }
}
function AdminrhCourseComponent_ng_container_16_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_16_button_14_Template_button_click_0_listener() {
      const t_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.catalogueType = t_r15;
      return \u0275\u0275resetView(ctx_r1.applyCatalogueFilters());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.catalogueType === t_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r15);
  }
}
function AdminrhCourseComponent_ng_container_16_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 39);
  }
}
function AdminrhCourseComponent_ng_container_16_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_16_div_32_div_1_Template, 1, 0, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c2));
  }
}
function AdminrhCourseComponent_ng_container_16_div_33_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r17.duree_totale, "h");
  }
}
function AdminrhCourseComponent_ng_container_16_div_33_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r17.metadata.niveau);
  }
}
function AdminrhCourseComponent_ng_container_16_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "div", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 52)(9, "span");
    \u0275\u0275element(10, "i", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminrhCourseComponent_ng_container_16_div_33_div_1_span_12_Template, 3, 1, "span", 10)(13, AdminrhCourseComponent_ng_container_16_div_33_div_1_span_13_Template, 3, 1, "span", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 54)(15, "span", 55);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 87)(18, "button", 88);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_16_div_33_div_1_Template_button_click_18_listener() {
      const c_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCatWizardView(c_r17));
    });
    \u0275\u0275element(19, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 89);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_16_div_33_div_1_Template_button_click_20_listener() {
      const c_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCatWizardEdit(c_r17));
    });
    \u0275\u0275element(21, "i", 90);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-th", ctx_r1.getCatalogueThumb(c_r17));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-cat", "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r17.type || "G\xE9n\xE9ral");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r17.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", c_r17.nombre_formations || (c_r17.formations == null ? null : c_r17.formations.length) || 0, " formations");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r17.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r17.metadata == null ? null : c_r17.metadata.niveau);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", c_r17.est_publie ? "pub" : "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r17.est_publie ? "Publi\xE9" : "Brouillon", " ");
  }
}
function AdminrhCourseComponent_ng_container_16_div_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun catalogue trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_ng_container_16_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_16_div_33_div_1_Template, 22, 9, "div", 85)(2, AdminrhCourseComponent_ng_container_16_div_33_div_2_Template, 4, 0, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cataloguesFiltered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cataloguesFiltered.length && !ctx_r1.catalogueLoading);
  }
}
function AdminrhCourseComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14);
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275elementStart(4, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_ng_container_16_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.catalogueSearch, $event) || (ctx_r1.catalogueSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCourseComponent_ng_container_16_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyCatalogueFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "div", 18);
    \u0275\u0275elementStart(6, "button", 92);
    \u0275\u0275element(7, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 83);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_16_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCatWizardCreate());
    });
    \u0275\u0275element(9, "i", 23);
    \u0275\u0275text(10, " Nouveau catalogue ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 94)(12, "button", 17);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_16_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.catalogueType = "";
      return \u0275\u0275resetView(ctx_r1.applyCatalogueFilters());
    });
    \u0275\u0275text(13, "Tout");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AdminrhCourseComponent_ng_container_16_button_14_Template, 2, 3, "button", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 24)(16, "div", 25)(17, "div", 26);
    \u0275\u0275element(18, "i", 8);
    \u0275\u0275text(19, " Total catalogues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 27);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 28);
    \u0275\u0275text(23, "catalogues");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 25)(25, "div", 26);
    \u0275\u0275element(26, "i", 6);
    \u0275\u0275text(27, " R\xE9sultats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 27);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 28);
    \u0275\u0275text(31, "filtr\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, AdminrhCourseComponent_ng_container_16_div_32_Template, 2, 2, "div", 32)(33, AdminrhCourseComponent_ng_container_16_div_33_Template, 3, 2, "div", 34);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.catalogueSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.catalogueType === "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.catalogueTypes);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.catalogues.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.cataloguesFiltered.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.catalogueLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.catalogueLoading);
  }
}
function AdminrhCourseComponent_ng_container_17_div_58_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 39);
  }
}
function AdminrhCourseComponent_ng_container_17_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_17_div_58_div_1_Template, 1, 0, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c2));
  }
}
function AdminrhCourseComponent_ng_container_17_ng_container_59_div_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 114);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r19.formateur.name);
  }
}
function AdminrhCourseComponent_ng_container_17_ng_container_59_div_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r19.lieu);
  }
}
function AdminrhCourseComponent_ng_container_17_ng_container_59_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "span", 106);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 107);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 108)(7, "div", 109);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 110)(10, "span");
    \u0275\u0275element(11, "i", 53);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminrhCourseComponent_ng_container_17_ng_container_59_div_2_span_13_Template, 3, 1, "span", 10)(14, AdminrhCourseComponent_ng_container_17_ng_container_59_div_2_span_14_Template, 3, 1, "span", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 111)(16, "span", 55);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 112);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "a", 113);
    \u0275\u0275text(21, " Inscrire ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getSessionDay(s_r19.date_debut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getSessionMonth(s_r19.date_debut));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r19.titre || (s_r19.formation == null ? null : s_r19.formation.titre) || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatSessionDate(s_r19.date_debut));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r19.formateur == null ? null : s_r19.formateur.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r19.lieu);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", s_r19.type === "distanciel" ? "pending" : s_r19.type === "hybride" ? "plan" : "pub");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r19.type_display || s_r19.type || "Pr\xE9sentiel", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", s_r19.nombre_inscrits ?? 0, "/", s_r19.capacite_max ?? "?", " places ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c3, ctx_r1.routes.adminrhSession));
  }
}
function AdminrhCourseComponent_ng_container_17_ng_container_59_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275element(1, "i", 117);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune session trouv\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_ng_container_17_ng_container_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 101);
    \u0275\u0275template(2, AdminrhCourseComponent_ng_container_17_ng_container_59_div_2_Template, 22, 13, "div", 102)(3, AdminrhCourseComponent_ng_container_17_ng_container_59_div_3_Template, 4, 0, "div", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.sessionsFiltered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.sessionsFiltered.length);
  }
}
function AdminrhCourseComponent_ng_container_17_ng_container_60_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r21);
  }
}
function AdminrhCourseComponent_ng_container_17_ng_container_60_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r22 = ctx.$implicit;
    \u0275\u0275classProp("ac-cal__event--dist", s_r22.type === "distanciel")("ac-cal__event--hybr", s_r22.type === "hybride");
    \u0275\u0275property("title", s_r22.titre || (s_r22.formation == null ? null : s_r22.formation.titre) || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 6, s_r22.titre || (s_r22.formation == null ? null : s_r22.formation.titre) || "\u2014", 0, 20), " ");
  }
}
function AdminrhCourseComponent_ng_container_17_ng_container_60_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "span", 127);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 128);
    \u0275\u0275template(4, AdminrhCourseComponent_ng_container_17_ng_container_60_div_12_div_4_Template, 3, 10, "div", 129);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cell_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ac-cal__cell--other", !ctx_r1.isCurrentMonth(cell_r23.date))("ac-cal__cell--today", ctx_r1.isToday(cell_r23.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cell_r23.date.getDate());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", cell_r23.sessions);
  }
}
function AdminrhCourseComponent_ng_container_17_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 118)(2, "div", 119)(3, "button", 120);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_ng_container_60_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calendarPrevMonth());
    });
    \u0275\u0275element(4, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 121);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 120);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_ng_container_60_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calendarNextMonth());
    });
    \u0275\u0275element(9, "i", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 122);
    \u0275\u0275template(11, AdminrhCourseComponent_ng_container_17_ng_container_60_div_11_Template, 2, 1, "div", 123)(12, AdminrhCourseComponent_ng_container_17_ng_container_60_div_12_Template, 5, 6, "div", 124);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, ctx_r1.calendarMonthLabel));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(5, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getCalendarDays());
  }
}
function AdminrhCourseComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14);
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275elementStart(4, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_ng_container_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sessionsSearch, $event) || (ctx_r1.sessionsSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCourseComponent_ng_container_17_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applySessionsFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 98)(6, "button", 99);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sessionsView = "list");
    });
    \u0275\u0275element(7, "i", 20);
    \u0275\u0275text(8, " Liste ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 99);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sessionsView = "calendar");
    });
    \u0275\u0275element(10, "i", 9);
    \u0275\u0275text(11, " Calendrier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 18);
    \u0275\u0275elementStart(13, "a", 22);
    \u0275\u0275element(14, "i", 23);
    \u0275\u0275text(15, " Planifier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 94)(17, "button", 17);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.sessionsType = "";
      return \u0275\u0275resetView(ctx_r1.applySessionsFilters());
    });
    \u0275\u0275text(18, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 17);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.sessionsType = "presentiel";
      return \u0275\u0275resetView(ctx_r1.applySessionsFilters());
    });
    \u0275\u0275text(20, "Pr\xE9sentiel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 17);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.sessionsType = "distanciel";
      return \u0275\u0275resetView(ctx_r1.applySessionsFilters());
    });
    \u0275\u0275text(22, "Distanciel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 17);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.sessionsType = "hybride";
      return \u0275\u0275resetView(ctx_r1.applySessionsFilters());
    });
    \u0275\u0275text(24, "Hybride");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 24)(26, "div", 25)(27, "div", 26);
    \u0275\u0275element(28, "i", 9);
    \u0275\u0275text(29, " Total sessions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 27);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 28);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 25)(35, "div", 26);
    \u0275\u0275element(36, "i", 29);
    \u0275\u0275text(37, " En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 27);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 28);
    \u0275\u0275text(41, "actives");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 25)(43, "div", 26);
    \u0275\u0275element(44, "i", 84);
    \u0275\u0275text(45, " Termin\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 27);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 28);
    \u0275\u0275text(49, "compl\xE8tes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 25)(51, "div", 26);
    \u0275\u0275element(52, "i", 100);
    \u0275\u0275text(53, " Distanciel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 27);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 28);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(58, AdminrhCourseComponent_ng_container_17_div_58_Template, 2, 2, "div", 32)(59, AdminrhCourseComponent_ng_container_17_ng_container_59_Template, 4, 2, "ng-container", 10)(60, AdminrhCourseComponent_ng_container_17_ng_container_60_Template, 13, 6, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sessionsSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(24, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.sessionsView === "list");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.sessionsView === "calendar");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.adminrhSession);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.sessionsType === "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.sessionsType === "presentiel");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.sessionsType === "distanciel");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.sessionsType === "hybride");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.sessions.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.sessionsFiltered.length, " filtr\xE9s");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getSessionsCount("en_cours"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getSessionsCount("terminee"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getSessionsByType("distanciel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.getSessionsByType("presentiel"), " pr\xE9sentiel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sessionsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.sessionsLoading && ctx_r1.sessionsView === "list");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.sessionsLoading && ctx_r1.sessionsView === "calendar");
  }
}
function AdminrhCourseComponent_div_18_ng_container_13_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 153);
  }
}
function AdminrhCourseComponent_div_18_ng_container_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r25.n);
  }
}
function AdminrhCourseComponent_div_18_ng_container_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 154);
  }
}
function AdminrhCourseComponent_div_18_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 148)(2, "div", 149);
    \u0275\u0275template(3, AdminrhCourseComponent_div_18_ng_container_13_i_3_Template, 1, 0, "i", 150)(4, AdminrhCourseComponent_div_18_ng_container_13_span_4_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 151);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminrhCourseComponent_div_18_ng_container_13_div_7_Template, 1, 0, "div", 152);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r25 = ctx.$implicit;
    const last_r26 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("done", ctx_r1.wizardStep > s_r25.n)("active", ctx_r1.wizardStep === s_r25.n);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep > s_r25.n);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep <= s_r25.n);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.wizardStep === s_r25.n)("done", ctx_r1.wizardStep > s_r25.n);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r25.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r26);
  }
}
function AdminrhCourseComponent_div_18_ng_container_15_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_ng_container_15_div_29_Template_div_click_0_listener() {
      const d_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.wizardMode !== "view" && (ctx_r1.wizardDomain = d_r28.key));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.wizardDomain === d_r28.key);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", d_r28.icon));
    \u0275\u0275styleProp("color", d_r28.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r28.label);
  }
}
function AdminrhCourseComponent_div_18_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 155)(2, "label", 156);
    \u0275\u0275text(3, "Titre du parcours ");
    \u0275\u0275elementStart(4, "span", 157);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 159)(8, "div", 160)(9, "label", 156);
    \u0275\u0275text(10, "Dur\xE9e estim\xE9e (jours) ");
    \u0275\u0275elementStart(11, "span", 157);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 160)(15, "label", 156);
    \u0275\u0275text(16, "Prix (XOF)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 162);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 155)(19, "label", 156);
    \u0275\u0275text(20, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 163);
    \u0275\u0275elementStart(22, "span", 164);
    \u0275\u0275text(23, "Visible par les apprenants inscrits");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "label", 165);
    \u0275\u0275text(25, "Domaine ");
    \u0275\u0275elementStart(26, "span", 157);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 166);
    \u0275\u0275template(29, AdminrhCourseComponent_div_18_ng_container_15_div_29_Template, 4, 8, "div", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(7);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.domains);
  }
}
function AdminrhCourseComponent_div_18_ng_container_16_ng_container_4_span_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 183);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_ng_container_16_ng_container_4_span_1_i_2_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const f_r31 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.wizardRemoveFormation(f_r31));
    });
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_18_ng_container_16_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 181);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AdminrhCourseComponent_div_18_ng_container_16_ng_container_4_span_1_i_2_Template, 1, 0, "i", 182);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r31 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r31.titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardMode !== "view");
  }
}
function AdminrhCourseComponent_div_18_ng_container_16_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhCourseComponent_div_18_ng_container_16_ng_container_4_span_1_Template, 3, 2, "span", 180);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.wizardSelectedFormations);
  }
}
function AdminrhCourseComponent_div_18_ng_container_16_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 184);
    \u0275\u0275text(1, "Aucune formation ajout\xE9e \u2014 s\xE9lectionnez ci-dessous");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_18_ng_container_16_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 185);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_18_ng_container_16_div_15_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 84);
  }
}
function AdminrhCourseComponent_div_18_ng_container_16_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 186);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_ng_container_16_div_15_Template_div_click_0_listener() {
      const f_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.wizardToggleFormation(f_r33));
    });
    \u0275\u0275elementStart(1, "div", 187);
    \u0275\u0275template(2, AdminrhCourseComponent_div_18_ng_container_16_div_15_i_2_Template, 1, 0, "i", 188);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 189);
    \u0275\u0275element(4, "i", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 190)(6, "div", 191);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 192);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 193);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r33 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("checked", ctx_r1.isWizardFormationSelected(f_r33));
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.isWizardFormationSelected(f_r33));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isWizardFormationSelected(f_r33));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-th", ctx_r1.wizardGetFormationThumb(f_r33));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(f_r33.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", f_r33.duree_totale ? f_r33.duree_totale + "h" : "", " ", (f_r33.categorie == null ? null : f_r33.categorie.nom) ? "\xB7 " + (f_r33.categorie == null ? null : f_r33.categorie.nom) : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((f_r33.categorie == null ? null : f_r33.categorie.nom) || "\u2014");
  }
}
function AdminrhCourseComponent_div_18_ng_container_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 185);
    \u0275\u0275text(1, " Aucune formation trouv\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_18_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 169);
    \u0275\u0275text(2, "Formations s\xE9lectionn\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 170);
    \u0275\u0275template(4, AdminrhCourseComponent_div_18_ng_container_16_ng_container_4_Template, 2, 1, "ng-container", 171)(5, AdminrhCourseComponent_div_18_ng_container_16_ng_template_5_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 169);
    \u0275\u0275text(8, "Catalogue disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 172)(10, "div", 173);
    \u0275\u0275element(11, "i", 174);
    \u0275\u0275elementStart(12, "input", 175);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_div_18_ng_container_16_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.wizardPoolSearch, $event) || (ctx_r1.wizardPoolSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 176);
    \u0275\u0275template(14, AdminrhCourseComponent_div_18_ng_container_16_div_14_Template, 2, 0, "div", 177)(15, AdminrhCourseComponent_div_18_ng_container_16_div_15_Template, 12, 10, "div", 178)(16, AdminrhCourseComponent_div_18_ng_container_16_div_16_Template, 2, 0, "div", 177);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 179);
    \u0275\u0275text(18, "L'ordre des formations d\xE9finit la s\xE9quence du parcours.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noSel_r34 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.wizardSelectedFormations.length)("ngIfElse", noSel_r34);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.wizardPoolSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.wizardLoadingFormations);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.wizardPoolFiltered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.wizardLoadingFormations && !ctx_r1.wizardPoolFiltered.length);
  }
}
function AdminrhCourseComponent_div_18_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 194)(2, "div", 160)(3, "label", 156);
    \u0275\u0275text(4, "Score minimum requis (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 195);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 160)(7, "label", 156);
    \u0275\u0275text(8, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 196)(10, "option", 197);
    \u0275\u0275text(11, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 197);
    \u0275\u0275text(13, "Inactif");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "label", 198);
    \u0275\u0275text(15, "Options du parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 199)(17, "div", 200)(18, "div", 201)(19, "div", 202);
    \u0275\u0275text(20, "Certificat \xE0 l'issue du parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 203);
    \u0275\u0275text(22, "G\xE9n\xE8re automatiquement un certificat PDF pour les apprenants ayant r\xE9ussi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 204);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_ng_container_17_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardMode !== "view" && ctx_r1.wizardForm.patchValue({ certificat: !ctx_r1.wizardForm.value.certificat }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 200)(25, "div", 201)(26, "div", 202);
    \u0275\u0275text(27, "Progression s\xE9quentielle obligatoire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 203);
    \u0275\u0275text(29, "L'apprenant doit terminer chaque formation avant de passer \xE0 la suivante");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 204);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_ng_container_17_Template_div_click_30_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardMode !== "view" && ctx_r1.wizardForm.patchValue({ sequentielle: !ctx_r1.wizardForm.value.sequentielle }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 200)(32, "div", 201)(33, "div", 202);
    \u0275\u0275text(34, "Notifications de progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 203);
    \u0275\u0275text(36, "Envoie des rappels aux apprenants inactifs depuis plus de 7 jours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 204);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_ng_container_17_Template_div_click_37_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardMode !== "view" && ctx_r1.wizardForm.patchValue({ notifications: !ctx_r1.wizardForm.value.notifications }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 200)(39, "div", 201)(40, "div", 202);
    \u0275\u0275text(41, "Demande de validation RH requise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 203);
    \u0275\u0275text(43, "L'Admin RH doit approuver chaque inscription avant acc\xE8s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 204);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_ng_container_17_Template_div_click_44_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardMode !== "view" && ctx_r1.wizardForm.patchValue({ validation_rh: !ctx_r1.wizardForm.value.validation_rh }));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("disabled", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("on", ctx_r1.wizardForm.value.certificat);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("on", ctx_r1.wizardForm.value.sequentielle);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("on", ctx_r1.wizardForm.value.notifications);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("on", ctx_r1.wizardForm.value.validation_rh);
  }
}
function AdminrhCourseComponent_div_18_ng_container_18_div_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 217);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r36 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r36.titre);
  }
}
function AdminrhCourseComponent_div_18_ng_container_18_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 215);
    \u0275\u0275template(1, AdminrhCourseComponent_div_18_ng_container_18_div_36_span_1_Template, 2, 1, "span", 216);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.wizardSelectedFormations);
  }
}
function AdminrhCourseComponent_div_18_ng_container_18_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 217);
    \u0275\u0275text(1, "Aucune s\xE9lectionn\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_18_ng_container_18_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 218);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardError, " ");
  }
}
function AdminrhCourseComponent_div_18_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 205);
    \u0275\u0275element(2, "i", 206);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 207)(6, "div", 208);
    \u0275\u0275text(7, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 209)(9, "span", 210);
    \u0275\u0275text(10, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 211);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 209)(14, "span", 210);
    \u0275\u0275text(15, "Domaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 211);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 209)(19, "span", 210);
    \u0275\u0275text(20, "Dur\xE9e estim\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 211);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 209)(24, "span", 210);
    \u0275\u0275text(25, "Prix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 211);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 209)(29, "span", 210);
    \u0275\u0275text(30, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 211);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 207)(34, "div", 208);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminrhCourseComponent_div_18_ng_container_18_div_36_Template, 2, 1, "div", 212)(37, AdminrhCourseComponent_div_18_ng_container_18_ng_template_37_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 213)(40, "div", 208);
    \u0275\u0275text(41, "Param\xE8tres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 209)(43, "span", 210);
    \u0275\u0275text(44, "Certificat final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 211);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 209)(48, "span", 210);
    \u0275\u0275text(49, "Progression s\xE9quentielle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 211);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 209)(53, "span", 210);
    \u0275\u0275text(54, "Validation RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 211);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 209)(58, "span", 210);
    \u0275\u0275text(59, "Score minimum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 211);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(62, AdminrhCourseComponent_div_18_ng_container_18_div_62_Template, 3, 1, "div", 214);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noFormations_r37 = \u0275\u0275reference(38);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("V\xE9rifiez les informations avant de ", ctx_r1.wizardMode === "create" ? "cr\xE9er" : "sauvegarder", " le parcours.");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.wizardForm.value.nom || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.wizardDomain || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.wizardForm.value.duree_estimee, " jours");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.wizardForm.value.prix || "0", " XOF");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.wizardForm.value.actif ? "Actif" : "Inactif");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Formations incluses (", ctx_r1.wizardSelectedFormations.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardSelectedFormations.length)("ngIfElse", noFormations_r37);
    \u0275\u0275advance(9);
    \u0275\u0275styleProp("color", ctx_r1.wizardForm.value.certificat ? "#3B6D11" : "#A32D2D");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardForm.value.certificat ? "Activ\xE9" : "D\xE9sactiv\xE9");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.wizardForm.value.sequentielle ? "#3B6D11" : "#A32D2D");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardForm.value.sequentielle ? "Obligatoire" : "Libre");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.wizardForm.value.validation_rh ? "#3B6D11" : "#A32D2D");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardForm.value.validation_rh ? "Requise" : "Non requise");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.wizardForm.value.score_min, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardError);
  }
}
function AdminrhCourseComponent_div_18_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 219);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardPrev());
    });
    \u0275\u0275text(1, "Retour");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_18_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 219);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275text(1, "Annuler");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_18_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 220);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardNext());
    });
    \u0275\u0275text(1, " Suivant ");
    \u0275\u0275element(2, "i", 80);
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_18_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 221);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardSubmit());
    });
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.wizardSaving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardSaving ? "Enregistrement..." : ctx_r1.wizardMode === "create" ? "Cr\xE9er le parcours" : "Sauvegarder", " ");
  }
}
function AdminrhCourseComponent_div_18_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 220);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275text(1, "Fermer");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275elementStart(1, "div", 132);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 133)(3, "div", 134);
    \u0275\u0275element(4, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 135)(6, "div", 136);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 137);
    \u0275\u0275text(9, "Configurez le parcours en 4 \xE9tapes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 138);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_18_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275element(11, "i", 139);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 140);
    \u0275\u0275template(13, AdminrhCourseComponent_div_18_ng_container_13_Template, 8, 12, "ng-container", 141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 142);
    \u0275\u0275template(15, AdminrhCourseComponent_div_18_ng_container_15_Template, 30, 5, "ng-container", 10)(16, AdminrhCourseComponent_div_18_ng_container_16_Template, 19, 8, "ng-container", 10)(17, AdminrhCourseComponent_div_18_ng_container_17_Template, 45, 12, "ng-container", 10)(18, AdminrhCourseComponent_div_18_ng_container_18_Template, 63, 20, "ng-container", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 143)(20, "span", 144);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, AdminrhCourseComponent_div_18_button_22_Template, 2, 0, "button", 145)(23, AdminrhCourseComponent_div_18_button_23_Template, 2, 0, "button", 145)(24, AdminrhCourseComponent_div_18_button_24_Template, 3, 0, "button", 146)(25, AdminrhCourseComponent_div_18_button_25_Template, 3, 2, "button", 147)(26, AdminrhCourseComponent_div_18_button_26_Template, 2, 0, "button", 146);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.wizardForm);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardMode === "create" ? "Nouveau parcours de formation" : ctx_r1.wizardMode === "edit" ? "Modifier le parcours" : "D\xE9tails du parcours", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction4(17, _c9, \u0275\u0275pureFunction0(13, _c5), \u0275\u0275pureFunction0(14, _c6), \u0275\u0275pureFunction0(15, _c7), \u0275\u0275pureFunction0(16, _c8)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\xC9tape ", ctx_r1.wizardStep, " sur 4");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep < 4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 4 && ctx_r1.wizardMode !== "view");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 4 && ctx_r1.wizardMode === "view");
  }
}
function AdminrhCourseComponent_div_19_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 266);
    \u0275\u0275element(1, "i", 267);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Glissez une image de couverture ici");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 268);
    \u0275\u0275text(5, "PNG, JPG jusqu'\xE0 2 Mo \u2014 recommand\xE9 1200 \xD7 400 px");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_div_19_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 269);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_div_47_Template_div_click_0_listener() {
      const d_r45 = \u0275\u0275restoreView(_r44).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.catWizardToggleDomain(d_r45.key));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r45 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.catWizardDomains.includes(d_r45.key));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", d_r45.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r45.label);
  }
}
function AdminrhCourseComponent_div_19_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 270);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_div_51_Template_div_click_0_listener() {
      const lv_r47 = \u0275\u0275restoreView(_r46).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.catWizardMode !== "view" && (ctx_r1.catWizardLevel = lv_r47.key));
    });
    \u0275\u0275elementStart(1, "div", 271);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 272);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lv_r47 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.catWizardLevel === lv_r47.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lv_r47.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lv_r47.sub);
  }
}
function AdminrhCourseComponent_div_19_span_56_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 183);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_span_56_i_2_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r48);
      const tag_r49 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.catWizardRemoveTag(tag_r49));
    });
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 273);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AdminrhCourseComponent_div_19_span_56_i_2_Template, 1, 0, "i", 182);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r49 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r49, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.catWizardMode !== "view");
  }
}
function AdminrhCourseComponent_div_19_input_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 274);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_div_19_input_57_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.catWizardTagInput, $event) || (ctx_r1.catWizardTagInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function AdminrhCourseComponent_div_19_input_57_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.catWizardAddTag($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.catWizardTagInput);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c0));
  }
}
function AdminrhCourseComponent_div_19_ng_container_63_span_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 183);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_ng_container_63_span_1_i_2_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r51);
      const f_r52 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.catWizardRemoveFormation(f_r52));
    });
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_ng_container_63_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 273);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AdminrhCourseComponent_div_19_ng_container_63_span_1_i_2_Template, 1, 0, "i", 182);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r52 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r52.titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.catWizardMode !== "view");
  }
}
function AdminrhCourseComponent_div_19_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhCourseComponent_div_19_ng_container_63_span_1_Template, 3, 2, "span", 251);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.catWizardSelectedFormations);
  }
}
function AdminrhCourseComponent_div_19_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 275);
    \u0275\u0275text(1, "Aucune formation s\xE9lectionn\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_div_66_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 281);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_div_66_div_6_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 84);
  }
}
function AdminrhCourseComponent_div_19_div_66_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 282);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_div_66_div_6_Template_div_click_0_listener() {
      const f_r55 = \u0275\u0275restoreView(_r54).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.catWizardToggleFormation(f_r55));
    });
    \u0275\u0275elementStart(1, "div", 283);
    \u0275\u0275template(2, AdminrhCourseComponent_div_19_div_66_div_6_i_2_Template, 1, 0, "i", 188);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 284)(4, "div", 285);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 286);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r55 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("checked", ctx_r1.isCatFormationSelected(f_r55));
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.isCatFormationSelected(f_r55));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCatFormationSelected(f_r55));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r55.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", f_r55.duree_totale ? f_r55.duree_totale + "h" : "", " ", (f_r55.categorie == null ? null : f_r55.categorie.nom) ? "\xB7 " + (f_r55.categorie == null ? null : f_r55.categorie.nom) : "", " ");
  }
}
function AdminrhCourseComponent_div_19_div_66_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 281);
    \u0275\u0275text(1, " Aucune formation trouv\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 276)(1, "div", 277);
    \u0275\u0275element(2, "i", 174);
    \u0275\u0275elementStart(3, "input", 175);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_div_19_div_66_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r53);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.catWizardPoolSearch, $event) || (ctx_r1.catWizardPoolSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 278);
    \u0275\u0275template(5, AdminrhCourseComponent_div_19_div_66_div_5_Template, 2, 0, "div", 279)(6, AdminrhCourseComponent_div_19_div_66_div_6_Template, 8, 8, "div", 280)(7, AdminrhCourseComponent_div_19_div_66_div_7_Template, 2, 0, "div", 279);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.catWizardPoolSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.wizardLoadingFormations);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.catWizardPoolFiltered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.wizardLoadingFormations && !ctx_r1.catWizardPoolFiltered.length);
  }
}
function AdminrhCourseComponent_div_19_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 287);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.catWizardError, " ");
  }
}
function AdminrhCourseComponent_div_19_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 288);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_ng_container_87_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.catWizardSubmit(true));
    });
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 289);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_ng_container_87_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.catWizardSubmit(false));
    });
    \u0275\u0275element(5, "i", 290);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.catWizardSaving || ctx_r1.catWizardForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.catWizardSaving ? "Enregistrement..." : "Enregistrer en brouillon", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.catWizardSaving || ctx_r1.catWizardForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.catWizardSaving ? "Publication..." : "Publier", " ");
  }
}
function AdminrhCourseComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 222);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCatWizard());
    });
    \u0275\u0275elementStart(1, "div", 223);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r43);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 224)(3, "div", 225);
    \u0275\u0275element(4, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 226)(6, "div", 227);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 228);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 229);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCatWizard());
    });
    \u0275\u0275element(11, "i", 139);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 230);
    \u0275\u0275template(13, AdminrhCourseComponent_div_19_div_13_Template, 6, 0, "div", 231);
    \u0275\u0275elementStart(14, "div", 232)(15, "label", 233);
    \u0275\u0275text(16, "Titre du catalogue ");
    \u0275\u0275elementStart(17, "span", 234);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "input", 235);
    \u0275\u0275elementStart(20, "span", 236);
    \u0275\u0275text(21, "Ce titre sera visible par les apprenants");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 232)(23, "label", 233);
    \u0275\u0275text(24, "Description courte ");
    \u0275\u0275elementStart(25, "span", 234);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "input", 237);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 232)(29, "label", 233);
    \u0275\u0275text(30, "Description compl\xE8te");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "textarea", 238);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 239)(33, "div", 232)(34, "label", 233);
    \u0275\u0275text(35, "Dur\xE9e totale (h)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 240);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 232)(38, "label", 233);
    \u0275\u0275text(39, "Certifiante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 241)(41, "div", 242);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_Template_div_click_41_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.catWizardMode !== "view" && ctx_r1.catWizardForm.patchValue({ est_certifiante: !ctx_r1.catWizardForm.value.est_certifiante }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 243);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 244);
    \u0275\u0275text(45, "Domaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 245);
    \u0275\u0275template(47, AdminrhCourseComponent_div_19_div_47_Template, 4, 6, "div", 246);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 244);
    \u0275\u0275text(49, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 247);
    \u0275\u0275template(51, AdminrhCourseComponent_div_19_div_51_Template, 5, 4, "div", 248);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 249)(53, "label", 233);
    \u0275\u0275text(54, "Mots-cl\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 250);
    \u0275\u0275template(56, AdminrhCourseComponent_div_19_span_56_Template, 3, 2, "span", 251)(57, AdminrhCourseComponent_div_19_input_57_Template, 1, 3, "input", 252);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 236);
    \u0275\u0275text(59, "Appuyez sur Entr\xE9e pour ajouter un mot-cl\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 244);
    \u0275\u0275text(61, "Formations incluses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 253);
    \u0275\u0275template(63, AdminrhCourseComponent_div_19_ng_container_63_Template, 2, 1, "ng-container", 171)(64, AdminrhCourseComponent_div_19_ng_template_64_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, AdminrhCourseComponent_div_19_div_66_Template, 8, 6, "div", 254);
    \u0275\u0275elementStart(67, "div", 255);
    \u0275\u0275text(68, "Visibilit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 256)(70, "div", 257);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_Template_div_click_70_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.catWizardMode !== "view" && (ctx_r1.catWizardVisibility = "entreprise"));
    });
    \u0275\u0275element(71, "i", 258);
    \u0275\u0275elementStart(72, "div", 259);
    \u0275\u0275text(73, "Mon entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 260);
    \u0275\u0275text(75, "Accessible uniquement aux collaborateurs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 257);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_Template_div_click_76_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.catWizardMode !== "view" && (ctx_r1.catWizardVisibility = "public"));
    });
    \u0275\u0275element(77, "i", 261);
    \u0275\u0275elementStart(78, "div", 259);
    \u0275\u0275text(79, "Public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 260);
    \u0275\u0275text(81, "Visible par tous les apprenants");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(82, AdminrhCourseComponent_div_19_div_82_Template, 3, 1, "div", 262);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 263)(84, "button", 264);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCatWizard());
    });
    \u0275\u0275text(85);
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "div", 265);
    \u0275\u0275template(87, AdminrhCourseComponent_div_19_ng_container_87_Template, 7, 4, "ng-container", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const catNoSel_r57 = \u0275\u0275reference(65);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.catWizardForm);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.catWizardMode === "create" ? "Nouveau catalogue" : ctx_r1.catWizardMode === "edit" ? "Modifier le catalogue" : "D\xE9tails du catalogue", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.catWizardMode === "view" ? "Consultation uniquement" : "Renseignez les informations du catalogue");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.catWizardMode !== "view");
    \u0275\u0275advance(6);
    \u0275\u0275attribute("readonly", ctx_r1.catWizardMode === "view" ? "" : null);
    \u0275\u0275advance(8);
    \u0275\u0275attribute("readonly", ctx_r1.catWizardMode === "view" ? "" : null);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("readonly", ctx_r1.catWizardMode === "view" ? "" : null);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("readonly", ctx_r1.catWizardMode === "view" ? "" : null);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("on", ctx_r1.catWizardForm.value.est_certifiante);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.catWizardForm.value.est_certifiante ? "Oui" : "Non");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.catDomains);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.catLevels);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.catWizardTags);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.catWizardMode !== "view");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.catWizardSelectedFormations.length)("ngIfElse", catNoSel_r57);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.catWizardMode !== "view");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("selected", ctx_r1.catWizardVisibility === "entreprise");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("selected", ctx_r1.catWizardVisibility === "public");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.catWizardError);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.catWizardMode === "view" ? "Fermer" : "Annuler", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.catWizardMode !== "view");
  }
}
var AdminrhCourseComponent = class _AdminrhCourseComponent {
  formationService;
  parcoursService;
  sessionService;
  catalogueService;
  fb;
  routes = routes;
  allFormations = [];
  formations = [];
  searchDataValue = "";
  selectedStatus = "";
  loading = false;
  error = "";
  currentPage = 1;
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  // ── Tabs ──────────────────────────────────────
  activeTab = "formations";
  setTab(t) {
    this.activeTab = t;
    if (t === "parcours" && !this.parcoursLoaded)
      this.loadParcours();
    if (t === "catalogue" && !this.catalogueLoaded)
      this.loadCatalogues();
    if (t === "sessions" && !this.sessionsLoaded)
      this.loadSessions();
  }
  // ── Vue grille/liste ──────────────────────────
  viewMode = "grid";
  // ── Parcours ──────────────────────────────────
  parcours = [];
  parcoursFiltered = [];
  parcoursLoading = false;
  parcoursLoaded = false;
  parcoursSearch = "";
  parcoursStatut = "";
  // ── Sessions ──────────────────────────────────
  sessions = [];
  sessionsFiltered = [];
  sessionsLoading = false;
  sessionsLoaded = false;
  sessionsSearch = "";
  sessionsType = "";
  sessionsView = "list";
  calendarYear = (/* @__PURE__ */ new Date()).getFullYear();
  calendarMonth = (/* @__PURE__ */ new Date()).getMonth();
  // ── Catalogue ─────────────────────────────────
  catalogues = [];
  cataloguesFiltered = [];
  catalogueLoading = false;
  catalogueLoaded = false;
  catalogueSearch = "";
  catalogueType = "";
  catalogueTypes = [];
  // ── Wizard Catalogue ──────────────────────────
  catWizardOpen = false;
  catWizardMode = "create";
  catWizardSaving = false;
  catWizardError = "";
  catWizardSelected = null;
  catWizardForm;
  catWizardTags = [];
  catWizardTagInput = "";
  catWizardDomains = [];
  catWizardLevel = "intermediaire";
  catWizardVisibility = "entreprise";
  catWizardSelectedFormations = [];
  catWizardPoolSearch = "";
  catDomains = [
    { key: "technologie", label: "Technologie", icon: "isax-cpu", cls: "tech" },
    { key: "management", label: "Management", icon: "isax-briefcase", cls: "mgmt" },
    { key: "rh", label: "Ressources humaines", icon: "isax-people", cls: "rh" },
    { key: "finance", label: "Finance", icon: "isax-chart-2", cls: "fin" },
    { key: "conformite", label: "Conformit\xE9", icon: "isax-shield-tick", cls: "conf" },
    { key: "commercial", label: "Commercial", icon: "isax-trend-up", cls: "com" }
  ];
  catLevels = [
    { key: "debutant", label: "D\xE9butant", sub: "Aucun pr\xE9requis" },
    { key: "intermediaire", label: "Interm\xE9diaire", sub: "Bases requises" },
    { key: "avance", label: "Avanc\xE9", sub: "Exp\xE9rience n\xE9cessaire" }
  ];
  get catWizardPoolFiltered() {
    const q = this.catWizardPoolSearch.toLowerCase();
    return this.wizardAllFormations.filter((f) => !q || f.titre?.toLowerCase().includes(q) || f.categorie?.nom?.toLowerCase().includes(q));
  }
  isCatFormationSelected(f) {
    return this.catWizardSelectedFormations.some((s) => s.id === f.id);
  }
  catWizardToggleFormation(f) {
    if (this.catWizardMode === "view")
      return;
    const idx = this.catWizardSelectedFormations.findIndex((s) => s.id === f.id);
    if (idx > -1)
      this.catWizardSelectedFormations.splice(idx, 1);
    else
      this.catWizardSelectedFormations.push(f);
  }
  catWizardRemoveFormation(f) {
    this.catWizardSelectedFormations = this.catWizardSelectedFormations.filter((s) => s.id !== f.id);
  }
  openCatWizardCreate() {
    this.catWizardMode = "create";
    this.catWizardSelected = null;
    this.catWizardError = "";
    this.catWizardTags = [];
    this.catWizardDomains = [];
    this.catWizardLevel = "intermediaire";
    this.catWizardVisibility = "entreprise";
    this.catWizardSelectedFormations = [];
    this.catWizardPoolSearch = "";
    this.initCatWizardForm();
    this.loadWizardFormations();
    this.catWizardOpen = true;
  }
  openCatWizardEdit(c) {
    this.catWizardMode = "edit";
    this.catWizardSelected = c;
    this.catWizardError = "";
    this.catWizardTags = [...c.tags || []];
    this.catWizardDomains = c.type ? [c.type] : [];
    this.catWizardLevel = c.metadata?.niveau || "intermediaire";
    this.catWizardVisibility = c.est_public ? "public" : "entreprise";
    this.catWizardSelectedFormations = [...c.formations || []];
    this.catWizardPoolSearch = "";
    this.initCatWizardForm(c);
    this.loadWizardFormations();
    this.catWizardOpen = true;
  }
  openCatWizardView(c) {
    this.catWizardMode = "view";
    this.catWizardSelected = c;
    this.catWizardError = "";
    this.catWizardTags = [...c.tags || []];
    this.catWizardDomains = c.type ? [c.type] : [];
    this.catWizardLevel = c.metadata?.niveau || "intermediaire";
    this.catWizardVisibility = c.est_public ? "public" : "entreprise";
    this.catWizardSelectedFormations = [...c.formations || []];
    this.catWizardPoolSearch = "";
    this.initCatWizardForm(c);
    this.loadWizardFormations();
    this.catWizardOpen = true;
  }
  closeCatWizard() {
    this.catWizardOpen = false;
  }
  initCatWizardForm(c) {
    this.catWizardForm = this.fb.group({
      titre: [c?.titre || "", [Validators.required, Validators.minLength(3)]],
      short_description: [c?.short_description || "", [Validators.required]],
      description: [c?.description || "", []],
      duree_totale: [c?.duree_totale || "", []],
      est_certifiante: [c?.metadata?.certificat_disponible ?? false, []]
    });
  }
  catWizardToggleDomain(key) {
    if (this.catWizardMode === "view")
      return;
    const i = this.catWizardDomains.indexOf(key);
    if (i > -1)
      this.catWizardDomains.splice(i, 1);
    else
      this.catWizardDomains.push(key);
  }
  catWizardAddTag(event) {
    if (event.key !== "Enter")
      return;
    event.preventDefault();
    const val = this.catWizardTagInput.trim();
    if (val && !this.catWizardTags.includes(val))
      this.catWizardTags.push(val);
    this.catWizardTagInput = "";
  }
  catWizardRemoveTag(tag) {
    this.catWizardTags = this.catWizardTags.filter((t) => t !== tag);
  }
  catWizardSubmit(draft = false) {
    if (this.catWizardMode === "view") {
      this.closeCatWizard();
      return;
    }
    if (this.catWizardForm.invalid)
      return;
    this.catWizardSaving = true;
    this.catWizardError = "";
    const fv = this.catWizardForm.value;
    const payload = {
      titre: fv.titre.trim(),
      description: fv.description?.trim() || fv.short_description.trim(),
      short_description: fv.short_description.trim(),
      couleur: "#1D9E75",
      icone: "category",
      ordre: 1,
      tags: this.catWizardTags,
      metadata: {
        niveau: this.catWizardLevel,
        prerequis: [],
        duree_moyenne: parseFloat(String(fv.duree_totale)) || 0,
        certificat_disponible: Boolean(fv.est_certifiante)
      },
      est_publie: !draft,
      est_public: this.catWizardVisibility === "public",
      inscription_requise: false,
      type: this.catWizardDomains[0] || "general"
    };
    const isEdit = this.catWizardMode === "edit" && this.catWizardSelected;
    const op = isEdit ? this.catalogueService.updateCatalogue(this.catWizardSelected.id, payload) : this.catalogueService.createCatalogue(payload);
    op.pipe(switchMap((res) => {
      const catId = res.data?.id ?? res.catalogue?.id ?? (isEdit ? this.catWizardSelected.id : null);
      if (!catId || !this.catWizardSelectedFormations.length)
        return of(null);
      const existingIds = new Set((this.catWizardSelected?.formations || []).map((f) => f.id));
      const toAdd = this.catWizardSelectedFormations.filter((f) => !existingIds.has(f.id));
      if (!toAdd.length)
        return of(null);
      const calls = toAdd.map((f, i) => this.catalogueService.ajouterFormation(catId, { formation_id: f.id, ordre: i + 1 }));
      return calls.reduce((acc$, call$) => acc$.pipe(switchMap(() => call$)), of(null));
    })).subscribe({
      next: () => {
        this.catWizardSaving = false;
        this.closeCatWizard();
        this.catalogueLoaded = false;
        this.loadCatalogues();
      },
      error: (err) => {
        this.catWizardSaving = false;
        this.catWizardError = err.error?.message || "Erreur lors de la sauvegarde.";
      }
    });
  }
  // ── Wizard Parcours ───────────────────────────
  wizardOpen = false;
  wizardMode = "create";
  wizardStep = 1;
  wizardSaving = false;
  wizardError = "";
  wizardSelectedParcours = null;
  wizardPoolSearch = "";
  wizardSelectedFormations = [];
  wizardAllFormations = [];
  wizardLoadingFormations = false;
  wizardDomain = "";
  wizardForm;
  domains = [
    { key: "management", label: "Management", icon: "isax-briefcase", color: "#534AB7" },
    { key: "technologie", label: "Technologie", icon: "isax-cpu", color: "#185FA5" },
    { key: "rh", label: "Ressources humaines", icon: "isax-people", color: "#0F6E56" },
    { key: "finance", label: "Finance", icon: "isax-chart-2", color: "#854F0B" },
    { key: "conformite", label: "Conformit\xE9", icon: "isax-shield-tick", color: "#3B6D11" },
    { key: "commercial", label: "Commercial", icon: "isax-trend-up", color: "#993C1D" }
  ];
  get wizardPoolFiltered() {
    const q = this.wizardPoolSearch.toLowerCase();
    return this.wizardAllFormations.filter((f) => !q || f.titre?.toLowerCase().includes(q) || f.categorie?.nom?.toLowerCase().includes(q));
  }
  isWizardFormationSelected(f) {
    return this.wizardSelectedFormations.some((s) => s.id === f.id);
  }
  wizardToggleFormation(f) {
    if (this.wizardMode === "view")
      return;
    const idx = this.wizardSelectedFormations.findIndex((s) => s.id === f.id);
    if (idx > -1)
      this.wizardSelectedFormations.splice(idx, 1);
    else
      this.wizardSelectedFormations.push(f);
  }
  wizardRemoveFormation(f) {
    this.wizardSelectedFormations = this.wizardSelectedFormations.filter((s) => s.id !== f.id);
  }
  wizardGetFormationThumb(f) {
    return this.getThumbKey(f);
  }
  openWizardCreate() {
    this.wizardMode = "create";
    this.wizardStep = 1;
    this.wizardError = "";
    this.wizardSelectedParcours = null;
    this.wizardSelectedFormations = [];
    this.wizardDomain = "";
    this.initWizardForm();
    this.loadWizardFormations();
    this.wizardOpen = true;
  }
  openWizardEdit(p) {
    this.wizardMode = "edit";
    this.wizardStep = 1;
    this.wizardError = "";
    this.wizardSelectedParcours = p;
    this.wizardSelectedFormations = [...p.formations || []];
    this.wizardDomain = "";
    this.initWizardForm(p);
    this.loadWizardFormations();
    this.wizardOpen = true;
  }
  openWizardView(p) {
    this.wizardMode = "view";
    this.wizardStep = 1;
    this.wizardError = "";
    this.wizardSelectedParcours = p;
    this.wizardSelectedFormations = [...p.formations || []];
    this.wizardDomain = "";
    this.initWizardForm(p);
    this.loadWizardFormations();
    this.wizardOpen = true;
  }
  closeWizard() {
    this.wizardOpen = false;
  }
  wizardNext() {
    if (this.wizardStep < 4)
      this.wizardStep++;
  }
  wizardPrev() {
    if (this.wizardStep > 1)
      this.wizardStep--;
  }
  initWizardForm(p) {
    this.wizardForm = this.fb.group({
      nom: [p?.nom || "", [Validators.required, Validators.minLength(3)]],
      description: [p?.description || "", []],
      duree_estimee: [p?.duree_estimee || 1, [Validators.required, Validators.min(1)]],
      prix: [p?.prix || "0", []],
      actif: [p?.actif ?? true, []],
      image_url: [p?.image_url || "", []],
      // settings (step 3)
      certificat: [true],
      sequentielle: [true],
      notifications: [false],
      validation_rh: [true],
      score_min: [70]
    });
    if (p) {
      const niv = p.niveau || "";
      const domainMap = {
        debutant: "technologie",
        intermediaire: "technologie",
        avance: "technologie",
        expert: "technologie"
      };
      this.wizardDomain = domainMap[niv] || "";
    }
  }
  loadWizardFormations() {
    if (this.wizardAllFormations.length)
      return;
    this.wizardLoadingFormations = true;
    this.formationService.getFormationsrh().subscribe({
      next: (res) => {
        this.wizardAllFormations = res.formations || [];
        this.wizardLoadingFormations = false;
      },
      error: () => {
        this.wizardLoadingFormations = false;
      }
    });
  }
  wizardSubmit() {
    if (this.wizardMode === "view") {
      this.closeWizard();
      return;
    }
    if (this.wizardForm.invalid)
      return;
    this.wizardSaving = true;
    this.wizardError = "";
    const fv = this.wizardForm.value;
    const entrepriseId = this.parcoursService.getCurrentUserEntrepriseId();
    const data = {
      nom: fv.nom.trim(),
      description: fv.description?.trim() || "",
      niveau: "intermediaire",
      duree_estimee: parseInt(fv.duree_estimee),
      prix: parseFloat(fv.prix || "0").toFixed(2),
      actif: fv.actif,
      objectifs: [],
      prerequis: [],
      statut: fv.actif,
      entreprise_id: entrepriseId,
      image_url: fv.image_url?.trim() || void 0
    };
    const isEdit = this.wizardMode === "edit" && this.wizardSelectedParcours;
    const op = isEdit ? this.parcoursService.updateParcours(this.wizardSelectedParcours.id, data) : this.parcoursService.createParcours(data);
    op.pipe(switchMap((res) => {
      const parcoursId = res.parcours?.id ?? res.data?.id ?? (isEdit ? this.wizardSelectedParcours.id : null);
      if (!parcoursId || !this.wizardSelectedFormations.length) {
        return of(null);
      }
      const formationsPayload = {
        formations: this.wizardSelectedFormations.map((f, i) => ({
          id: f.id,
          ordre: i + 1,
          obligatoire: false
        }))
      };
      return this.parcoursService.updateFormations(parcoursId, formationsPayload);
    })).subscribe({
      next: () => {
        this.wizardSaving = false;
        this.closeWizard();
        this.parcoursLoaded = false;
        this.loadParcours();
      },
      error: (err) => {
        this.wizardSaving = false;
        this.wizardError = err.error?.message || "Erreur lors de la sauvegarde.";
      }
    });
  }
  stats = {
    active: 0,
    pending: 0,
    draft: 0,
    free: 0,
    paid: 0
  };
  pageNumberArray = [];
  totalPages = 0;
  skip = 0;
  limit = 10;
  constructor(formationService, parcoursService, sessionService, catalogueService, fb) {
    this.formationService = formationService;
    this.parcoursService = parcoursService;
    this.sessionService = sessionService;
    this.catalogueService = catalogueService;
    this.fb = fb;
  }
  ngOnInit() {
    this.getFormationsList();
  }
  // ✅ Corrigé : prix peut être undefined ou string ou number
  isFormationGratuite(formation) {
    return parseFloat(String(formation.prix ?? 0)) === 0;
  }
  formatPrix(prix) {
    const montant = parseFloat(String(prix ?? 0));
    return montant === 0 ? "Gratuit" : `${montant.toFixed(2)} FCFA`;
  }
  trackByFormation(_index, formation) {
    return formation.id;
  }
  onPageChange(page) {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.getTableData(this.skip, this.pageSize);
  }
  getFormationsList() {
    this.loading = true;
    this.error = "";
    this.formations = [];
    this.formationService.getFormationsrh().subscribe({
      next: (response) => {
        if (response.status && response.formations) {
          this.allFormations = response.formations;
          this.formations = [...this.allFormations];
          this.totalData = this.formations.length;
          this.calculateStats();
          this.calculateTotalPages(this.totalData, this.pageSize);
        } else {
          this.error = "Aucune formation trouv\xE9e";
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur chargement formations:", error);
        this.error = "Erreur lors du chargement des formations";
        this.loading = false;
      }
    });
  }
  // ════════════════════════════════════════════
  // PARCOURS
  // ════════════════════════════════════════════
  loadParcours() {
    this.parcoursLoading = true;
    this.parcoursService.getRhParcours().subscribe({
      next: (res) => {
        this.parcours = res.parcours || [];
        this.parcoursLoaded = true;
        this.parcoursLoading = false;
        this.applyParcoursFilters();
      },
      error: () => {
        this.parcoursLoading = false;
      }
    });
  }
  applyParcoursFilters() {
    const q = this.parcoursSearch.toLowerCase();
    this.parcoursFiltered = this.parcours.filter((p) => {
      const actif = Boolean(p.actif);
      const matchSearch = !q || p.nom.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      const matchStatut = !this.parcoursStatut || this.parcoursStatut === "actif" && actif || this.parcoursStatut === "archive" && !actif;
      return matchSearch && matchStatut;
    });
  }
  getParcoursActifs() {
    return this.parcours.filter((p) => p.actif).length;
  }
  getNiveauKey(niveau) {
    const map = { debutant: "deb", intermediaire: "int", avance: "adv", expert: "exp" };
    return map[niveau] ?? "deb";
  }
  getNiveauLabel(niveau) {
    const map = { debutant: "D\xE9butant", intermediaire: "Interm\xE9diaire", avance: "Avanc\xE9", expert: "Expert" };
    return map[niveau] ?? niveau;
  }
  getTotalDuration(formations) {
    return formations?.reduce((t, f) => t + (f.duree_totale || 0), 0) ?? 0;
  }
  // ════════════════════════════════════════════
  // SESSIONS
  // ════════════════════════════════════════════
  loadSessions() {
    this.sessionsLoading = true;
    this.sessionService.getAllSessionsRH().subscribe({
      next: (res) => {
        this.sessions = res.sessions || [];
        this.sessionsLoaded = true;
        this.sessionsLoading = false;
        this.applySessionsFilters();
      },
      error: () => {
        this.sessionsLoading = false;
      }
    });
  }
  applySessionsFilters() {
    const q = this.sessionsSearch.toLowerCase();
    this.sessionsFiltered = this.sessions.filter((s) => {
      const matchSearch = !q || s.titre?.toLowerCase().includes(q) || s.formation?.titre?.toLowerCase().includes(q);
      const matchType = !this.sessionsType || s.type === this.sessionsType;
      return matchSearch && matchType;
    });
  }
  getSessionsCount(statut) {
    return this.sessions.filter((s) => s.statut === statut).length;
  }
  getSessionsByType(type) {
    return this.sessions.filter((s) => s.type === type).length;
  }
  getSessionStatutKey(statut) {
    const map = { planifiee: "plan", en_cours: "live", terminee: "done", annulee: "cancel" };
    return map[statut] ?? "plan";
  }
  getTypeKey(type) {
    return type || "presentiel";
  }
  formatSessionDate(d) {
    if (!d)
      return "\u2014";
    const dt = new Date(d);
    return dt.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" }) + " " + dt.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  }
  getSessionDay(d) {
    return d ? new Date(d).getDate().toString().padStart(2, "0") : "\u2014";
  }
  getSessionMonth(d) {
    return d ? new Date(d).toLocaleDateString("fr-FR", { month: "short" }).toUpperCase() : "";
  }
  // ════════════════════════════════════════════
  // CATALOGUE
  // ════════════════════════════════════════════
  loadCatalogues() {
    this.catalogueLoading = true;
    this.catalogueService.getCatalogues().subscribe({
      next: (res) => {
        this.catalogues = res.catalogues || [];
        this.catalogueLoaded = true;
        this.catalogueLoading = false;
        const types = /* @__PURE__ */ new Set();
        this.catalogues.forEach((c) => {
          if (c.type)
            types.add(c.type);
        });
        this.catalogueTypes = Array.from(types);
        this.applyCatalogueFilters();
      },
      error: () => {
        this.catalogueLoading = false;
      }
    });
  }
  applyCatalogueFilters() {
    const q = this.catalogueSearch.toLowerCase();
    this.cataloguesFiltered = this.catalogues.filter((c) => {
      const matchSearch = !q || c.titre.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
      const matchType = !this.catalogueType || c.type === this.catalogueType;
      return matchSearch && matchType;
    });
  }
  getCatalogueThumb(c) {
    const t = c.type?.toLowerCase() || "";
    if (t.includes("tech"))
      return "blue";
    if (t.includes("manage"))
      return "purple";
    if (t.includes("soft"))
      return "teal";
    return "amber";
  }
  formatDureeMoy(minutes) {
    if (!minutes)
      return "\u2014";
    return minutes >= 60 ? `${Math.round(minutes / 60)}h` : `${minutes}min`;
  }
  // ════════════════════════════════════════════
  // EXISTING STATS
  // ════════════════════════════════════════════
  calculateStats() {
    this.stats = {
      active: this.allFormations.filter((f) => f.est_publie && f.inscription_ouverte).length,
      pending: this.allFormations.filter((f) => !f.est_publie && !f.inscription_ouverte).length,
      draft: this.allFormations.filter((f) => !f.est_publie).length,
      free: this.allFormations.filter((f) => this.isFormationGratuite(f)).length,
      paid: this.allFormations.filter((f) => !this.isFormationGratuite(f)).length
    };
  }
  calculateTotalPages(totalData, pageSize) {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 !== 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push({ skip, limit });
    }
  }
  getTableData(skip, limit) {
    this.serialNumberArray = [];
    this.formations = [];
    let filteredData = [...this.allFormations];
    if (this.selectedStatus) {
      switch (this.selectedStatus.toLowerCase()) {
        case "published":
          filteredData = filteredData.filter((f) => f.est_publie && f.inscription_ouverte);
          break;
        case "pending":
          filteredData = filteredData.filter((f) => !f.est_publie && !f.inscription_ouverte);
          break;
        case "draft":
          filteredData = filteredData.filter((f) => !f.est_publie);
          break;
      }
    }
    if (this.searchDataValue) {
      const search = this.searchDataValue.toLowerCase();
      filteredData = filteredData.filter((f) => f.titre?.toLowerCase().includes(search) || f.description?.toLowerCase().includes(search) || // ✅ Corrigé : formateur_nom et categorie sont optionnels
      f.formateur_nom?.toLowerCase().includes(search) || f.categorie?.nom?.toLowerCase().includes(search));
    }
    this.totalData = filteredData.length;
    this.calculateTotalPages(this.totalData, this.pageSize);
    const start = skip;
    const end = Math.min(skip + limit, this.totalData);
    for (let i = start; i < end; i++) {
      this.serialNumberArray.push(i + 1);
    }
    this.formations = filteredData.slice(start, end);
  }
  searchData(searchValue) {
    this.searchDataValue = searchValue;
    this.skip = 0;
    this.getTableData(this.skip, this.limit);
  }
  filterByStatus(status) {
    this.selectedStatus = status;
    this.skip = 0;
    this.getTableData(this.skip, this.limit);
  }
  sortData(sort) {
    if (!sort.active || sort.direction === "")
      return;
    this.allFormations.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "titre":
          return this.compare(a.titre ?? "", b.titre ?? "", isAsc);
        case "formateur":
          return this.compare(a.formateur_nom ?? "", b.formateur_nom ?? "", isAsc);
        case "prix":
          return this.compare(parseFloat(String(a.prix ?? 0)), parseFloat(String(b.prix ?? 0)), isAsc);
        case "duree":
          return this.compare(a.duree_totale ?? 0, b.duree_totale ?? 0, isAsc);
        case "participants":
          return this.compare(a.nb_max_participants ?? 0, b.nb_max_participants ?? 0, isAsc);
        default:
          return 0;
      }
    });
    this.getTableData(this.skip, this.limit);
  }
  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  getMoreData(event) {
    if (event === "next") {
      this.skip += this.limit;
      this.getTableData(this.skip, this.limit);
    } else if (event === "previous") {
      this.skip -= this.limit;
      this.getTableData(this.skip, this.limit);
    }
  }
  moveToPage(pageNumber) {
    this.skip = this.pageNumberArray[pageNumber - 1].skip;
    this.limit = this.pageNumberArray[pageNumber - 1].limit - this.skip;
    this.getTableData(this.skip, this.limit);
  }
  PageSize() {
    this.skip = 0;
    this.getTableData(this.skip, this.pageSize);
  }
  getStatusClass(formation) {
    if (formation.est_publie && formation.inscription_ouverte)
      return "bg-success";
    if (!formation.est_publie)
      return "bg-info";
    return "bg-secondary";
  }
  getStatusText(formation) {
    if (formation.est_publie && formation.inscription_ouverte)
      return "Publi\xE9e";
    if (!formation.est_publie)
      return "Brouillon";
    return "En attente";
  }
  getStatusKey(formation) {
    if (formation.est_publie && formation.inscription_ouverte)
      return "pub";
    if (!formation.est_publie)
      return "draft";
    return "pending";
  }
  getCatKey(f) {
    const n = (f.categorie?.nom || "").toLowerCase();
    if (n.includes("tech") || n.includes("info") || n.includes("num"))
      return "tech";
    if (n.includes("rh") || n.includes("human") || n.includes("conform") || n.includes("recruit"))
      return "rh";
    if (n.includes("manage") || n.includes("leader"))
      return "mgmt";
    if (n.includes("finan") || n.includes("compt"))
      return "fin";
    return "default";
  }
  getThumbKey(f) {
    const key = this.getCatKey(f);
    const map = { tech: "blue", rh: "amber", mgmt: "purple", fin: "teal", default: "green" };
    return map[key] ?? "blue";
  }
  getDuree(f) {
    const d = f.duree_totale ?? f.duree_estimee;
    if (!d)
      return "\u2014";
    const n = parseFloat(String(d));
    if (isNaN(n))
      return String(d);
    return n >= 60 ? `${Math.round(n / 60)}h` : `${n}min`;
  }
  getCompletion(f) {
    return f.taux_completion ?? 0;
  }
  getDefaultImage(formation) {
    return this.formationService.getImageUrl(formation.image_couverture);
  }
  // ════════════════════════════════════════════
  // CALENDAR HELPERS
  // ════════════════════════════════════════════
  get calendarMonthLabel() {
    return new Date(this.calendarYear, this.calendarMonth).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  }
  calendarPrevMonth() {
    if (this.calendarMonth === 0) {
      this.calendarMonth = 11;
      this.calendarYear--;
    } else {
      this.calendarMonth--;
    }
  }
  calendarNextMonth() {
    if (this.calendarMonth === 11) {
      this.calendarMonth = 0;
      this.calendarYear++;
    } else {
      this.calendarMonth++;
    }
  }
  getCalendarDays() {
    const year = this.calendarYear;
    const month = this.calendarMonth;
    const firstDay = new Date(year, month, 1).getDay();
    const offset = firstDay === 0 ? 6 : firstDay - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const grid = [];
    for (let i = 0; i < offset; i++) {
      grid.push({ date: new Date(year, month, -(offset - i - 1)), sessions: [] });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const sessions = this.sessionsFiltered.filter((s) => {
        if (!s.date_debut)
          return false;
        const sd = new Date(s.date_debut);
        return sd.getFullYear() === year && sd.getMonth() === month && sd.getDate() === d;
      });
      grid.push({ date, sessions });
    }
    return grid;
  }
  isToday(date) {
    const t = /* @__PURE__ */ new Date();
    return date.getFullYear() === t.getFullYear() && date.getMonth() === t.getMonth() && date.getDate() === t.getDate();
  }
  isCurrentMonth(date) {
    return date.getMonth() === this.calendarMonth;
  }
  deleteFormation(formation) {
    if (confirm(`\xCAtes-vous s\xFBr de vouloir supprimer la formation "${formation.titre}" ?`)) {
      this.loading = true;
      this.formationService.deleteFormation(formation.id).subscribe({
        next: () => this.getFormationsList(),
        error: (error) => {
          console.error("Erreur suppression:", error);
          this.error = "Erreur lors de la suppression de la formation";
          this.loading = false;
        }
      });
    }
  }
  archiveFormation(formation) {
    if (!confirm(`Archiver la formation "${formation.titre}" ?`))
      return;
    this.loading = true;
    this.formationService.deleteFormation(formation.id).subscribe({
      next: () => this.getFormationsList(),
      error: () => {
        this.error = "Erreur lors de l'archivage";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function AdminrhCourseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhCourseComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(ParcoursService), \u0275\u0275directiveInject(SessionFormationService), \u0275\u0275directiveInject(CatalogueService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhCourseComponent, selectors: [["app-adminrh-course"]], decls: 20, vars: 14, consts: [["noSel", ""], ["noFormations", ""], ["catNoSel", ""], [1, "ac-shell"], [1, "ac-topbar"], ["type", "button", 1, "ac-tab", 3, "click"], [1, "isax", "isax-book-1"], [1, "isax", "isax-route-square"], [1, "isax", "isax-category"], [1, "isax", "isax-calendar-1"], [4, "ngIf"], ["class", "wz-overlay", 3, "click", 4, "ngIf"], ["class", "cw-overlay", 3, "click", 4, "ngIf"], [1, "ac-toolbar"], [1, "ac-search"], [1, "isax", "isax-search-normal-1", "ac-search__icon"], ["type", "search", "placeholder", "Rechercher...", 1, "ac-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "button", 1, "ac-chip", 3, "click"], [1, "ac-spacer"], ["type", "button", 1, "ac-view-btn", 3, "click"], [1, "isax", "isax-row-vertical"], [1, "isax", "isax-grid-2"], [1, "ac-add-btn", 3, "routerLink"], [1, "isax", "isax-add"], [1, "ac-kpi-row"], [1, "ac-kpi"], [1, "ac-kpi__label"], [1, "ac-kpi__val"], [1, "ac-kpi__delta", "neutral"], [1, "isax", "isax-play-circle"], [1, "isax", "isax-document"], [1, "isax", "isax-gift"], ["class", "ac-skeletons", 4, "ngIf"], ["class", "ac-alert", 4, "ngIf"], ["class", "ac-card-grid", 4, "ngIf"], ["class", "ac-table", 4, "ngIf"], ["class", "ac-pager", 4, "ngIf"], [1, "ac-skeletons"], ["class", "ac-skeleton-card", 4, "ngFor", "ngForOf"], [1, "ac-skeleton-card"], [1, "ac-alert"], [1, "isax", "isax-warning-2"], [1, "ac-card-grid"], ["class", "ac-fcard", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ac-empty ac-empty--span", 4, "ngIf"], [1, "ac-fcard"], [1, "ac-fcard__thumb"], ["class", "ac-fcard__img", 3, "src", "alt", 4, "ngIf"], ["class", "isax isax-book-1", 4, "ngIf"], [1, "ac-fcard__body"], [1, "ac-fcard__cat"], [1, "ac-fcard__title"], [1, "ac-fcard__meta"], [1, "isax", "isax-clock"], [1, "ac-fcard__footer"], [1, "ac-status"], [1, "ac-prog"], [1, "ac-prog__bar"], [1, "ac-prog__fill"], [1, "ac-prog__txt"], [1, "ac-fcard__actions"], ["target", "_blank", "title", "Voir", 1, "ac-act", 3, "href"], [1, "isax", "isax-eye"], ["type", "button", "title", "Archiver", 1, "ac-act", "ac-act--arch", 3, "click"], [1, "isax", "isax-archive"], [1, "ac-fcard__img", 3, "src", "alt"], [1, "isax", "isax-people"], [1, "ac-empty", "ac-empty--span"], [1, "ac-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ac-table-name"], [1, "ac-table-sub"], [1, "ac-actions"], ["colspan", "5", 1, "ac-empty"], [1, "ac-pager"], [1, "ac-pager__info"], [1, "ac-pager__btns"], ["type", "button", 1, "ac-pager__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "ac-pager__btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], ["type", "button", 1, "ac-pager__btn", 3, "click"], ["type", "search", "placeholder", "Rechercher un parcours...", 1, "ac-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "button", 1, "ac-add-btn", 3, "click"], [1, "isax", "isax-tick-circle"], ["class", "ac-fcard", 4, "ngFor", "ngForOf"], ["class", "isax isax-route-square", 4, "ngIf"], [1, "ac-fcard__actions", 2, "margin-left", "auto"], ["type", "button", "title", "Voir", 1, "ac-act", 3, "click"], ["type", "button", "title", "Modifier", 1, "ac-act", 3, "click"], [1, "isax", "isax-edit-2"], ["type", "search", "placeholder", "Rechercher dans le catalogue...", 1, "ac-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "button", "title", "Trier", 1, "ac-view-btn"], [1, "isax", "isax-sort"], [1, "ac-toolbar", "ac-toolbar--chips"], ["type", "button", "class", "ac-chip", 3, "ac-chip--on", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-award"], ["type", "search", "placeholder", "Rechercher une session...", 1, "ac-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ac-view-group"], ["type", "button", 1, "ac-view-toggle", 3, "click"], [1, "isax", "isax-monitor"], [1, "ac-sessions-list"], ["class", "ac-session-row", 4, "ngFor", "ngForOf"], ["class", "ac-empty", "style", "padding:32px 14px; text-align:center", 4, "ngIf"], [1, "ac-session-row"], [1, "ac-session-date"], [1, "ac-session-date__day"], [1, "ac-session-date__month"], [1, "ac-session-info"], [1, "ac-session-title"], [1, "ac-session-meta"], [1, "ac-session-badges"], [1, "ac-session-places"], [1, "ac-add-btn", 2, "font-size", "11px", "padding", "5px 10px", 3, "routerLink"], [1, "isax", "isax-user"], [1, "isax", "isax-building"], [1, "ac-empty", 2, "padding", "32px 14px", "text-align", "center"], [1, "isax", "isax-calendar-1", 2, "font-size", "2rem", "display", "block", "margin-bottom", "8px"], [1, "ac-cal"], [1, "ac-cal__nav"], ["type", "button", 1, "ac-cal__nav-btn", 3, "click"], [1, "ac-cal__nav-label"], [1, "ac-cal__grid"], ["class", "ac-cal__head", 4, "ngFor", "ngForOf"], ["class", "ac-cal__cell", 3, "ac-cal__cell--other", "ac-cal__cell--today", 4, "ngFor", "ngForOf"], [1, "ac-cal__head"], [1, "ac-cal__cell"], [1, "ac-cal__day"], [1, "ac-cal__events"], ["class", "ac-cal__event", 3, "ac-cal__event--dist", "ac-cal__event--hybr", "title", 4, "ngFor", "ngForOf"], [1, "ac-cal__event", 3, "title"], [1, "wz-overlay", 3, "click"], [1, "wz-modal", 3, "click", "formGroup"], [1, "wz-head"], [1, "wz-head__icon"], [1, "wz-head__text"], [1, "wz-head__title"], [1, "wz-head__sub"], ["type", "button", 1, "wz-close", 3, "click"], [1, "isax", "isax-close-circle"], [1, "wz-stepper"], [4, "ngFor", "ngForOf"], [1, "wz-body"], [1, "wz-foot"], [1, "wz-foot__info"], ["type", "button", "class", "wz-btn-ghost", 3, "click", 4, "ngIf"], ["type", "button", "class", "wz-btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "wz-btn-success", 3, "disabled", "click", 4, "ngIf"], [1, "wz-step"], [1, "wz-step__circle"], ["class", "isax isax-tick-circle", "style", "font-size:11px", 4, "ngIf"], [1, "wz-step__label"], ["class", "wz-step__line", 4, "ngIf"], [1, "isax", "isax-tick-circle", 2, "font-size", "11px"], [1, "wz-step__line"], [1, "wz-field", "wz-field--full"], [1, "wz-label"], [1, "wz-req"], ["type", "text", "formControlName", "nom", "placeholder", "Ex. : Parcours Manager confirm\xE9", 1, "wz-input"], [1, "wz-row"], [1, "wz-field"], ["type", "number", "formControlName", "duree_estimee", "placeholder", "Ex. : 30", "min", "1", 1, "wz-input"], ["type", "number", "formControlName", "prix", "placeholder", "0", "min", "0", 1, "wz-input"], ["formControlName", "description", "placeholder", "D\xE9crivez l'objectif p\xE9dagogique de ce parcours...", 1, "wz-input", "wz-textarea"], [1, "wz-hint"], [1, "wz-label", 2, "margin-bottom", "8px"], [1, "wz-domain-grid"], ["class", "wz-domain-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "wz-domain-card", 3, "click"], [1, "wz-label", 2, "margin-bottom", "6px"], [1, "wz-strip"], [4, "ngIf", "ngIfElse"], [1, "wz-pool"], [1, "wz-pool__search"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher une formation...", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "wz-pool__list"], ["class", "wz-pool__empty", 4, "ngIf"], ["class", "wz-pool__item", 3, "checked", "click", 4, "ngFor", "ngForOf"], [1, "wz-hint", 2, "margin-top", "6px"], ["class", "wz-chip", 4, "ngFor", "ngForOf"], [1, "wz-chip"], ["class", "isax isax-close-circle", 3, "click", 4, "ngIf"], [1, "isax", "isax-close-circle", 3, "click"], [1, "wz-strip__hint"], [1, "wz-pool__empty"], [1, "wz-pool__item", 3, "click"], [1, "wz-pool__check"], ["class", "isax isax-tick-circle", 4, "ngIf"], [1, "wz-pool__thumb"], [1, "wz-pool__info"], [1, "wz-pool__name"], [1, "wz-pool__meta"], [1, "wz-pool__tag"], [1, "wz-row", 2, "margin-bottom", "14px"], ["type", "number", "formControlName", "score_min", "placeholder", "70", "min", "0", "max", "100", 1, "wz-input"], ["formControlName", "actif", 1, "wz-input"], [3, "ngValue"], [1, "wz-label", 2, "margin-bottom", "10px"], [1, "wz-toggles"], [1, "wz-toggle-row"], [1, "wz-toggle-info"], [1, "wz-toggle-title"], [1, "wz-toggle-sub"], [1, "wz-toggle", 3, "click"], [1, "wz-info-banner"], [1, "isax", "isax-info-circle"], [1, "wz-recap-card"], [1, "wz-recap-title"], [1, "wz-recap-row"], [1, "wz-rl"], [1, "wz-rv"], ["class", "wz-recap-chips", 4, "ngIf", "ngIfElse"], [1, "wz-recap-card", 2, "margin-bottom", "0"], ["class", "wz-error", 4, "ngIf"], [1, "wz-recap-chips"], ["class", "wz-rc", 4, "ngFor", "ngForOf"], [1, "wz-rc"], [1, "wz-error"], ["type", "button", 1, "wz-btn-ghost", 3, "click"], ["type", "button", 1, "wz-btn-primary", 3, "click"], ["type", "button", 1, "wz-btn-success", 3, "click", "disabled"], [1, "cw-overlay", 3, "click"], [1, "cw-modal", 3, "click", "formGroup"], [1, "cw-head"], [1, "cw-head__icon"], [1, "cw-head__text"], [1, "cw-head__title"], [1, "cw-head__sub"], ["type", "button", 1, "cw-close", 3, "click"], [1, "cw-body"], ["class", "cw-upload-zone", 4, "ngIf"], [1, "cw-field"], [1, "cw-label"], [1, "cw-req"], ["type", "text", "formControlName", "titre", "placeholder", "Ex. : Catalogue Management 2025", 1, "cw-input"], [1, "cw-hint"], ["type", "text", "formControlName", "short_description", "placeholder", "Une phrase r\xE9sumant ce catalogue...", 1, "cw-input"], ["formControlName", "description", "placeholder", "D\xE9crivez le contenu, les objectifs p\xE9dagogiques...", 1, "cw-input", "cw-textarea"], [1, "cw-row"], ["type", "number", "formControlName", "duree_totale", "placeholder", "Ex. : 12", "min", "0", 1, "cw-input"], [1, "cw-toggle-inline"], [1, "cw-toggle", 3, "click"], [1, "cw-toggle-label"], [1, "cw-section-label"], [1, "cw-domain-grid"], ["class", "cw-domain-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "cw-level-row"], ["class", "cw-level-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "cw-field", 2, "margin-top", "12px"], [1, "cw-tags-box"], ["class", "cw-tag", 4, "ngFor", "ngForOf"], ["type", "text", "class", "cw-tag-input", "placeholder", "Ajouter un mot-cl\xE9...", 3, "ngModel", "ngModelOptions", "ngModelChange", "keydown", 4, "ngIf"], [1, "cw-strip"], ["class", "cw-pool", 4, "ngIf"], [1, "cw-section-label", 2, "margin-top", "12px"], [1, "cw-vis-row"], [1, "cw-vis-card", 3, "click"], [1, "isax", "isax-buildings-2"], [1, "cw-vis-card__label"], [1, "cw-vis-card__sub"], [1, "isax", "isax-global"], ["class", "cw-error", 4, "ngIf"], [1, "cw-foot"], ["type", "button", 1, "cw-btn-ghost", 3, "click"], [2, "flex", "1"], [1, "cw-upload-zone"], [1, "isax", "isax-gallery-add"], [1, "cw-upload-zone__hint"], [1, "cw-domain-card", 3, "click"], [1, "cw-level-card", 3, "click"], [1, "cw-level-card__label"], [1, "cw-level-card__sub"], [1, "cw-tag"], ["type", "text", "placeholder", "Ajouter un mot-cl\xE9...", 1, "cw-tag-input", 3, "ngModelChange", "keydown", "ngModel", "ngModelOptions"], [1, "cw-strip-hint"], [1, "cw-pool"], [1, "cw-pool__search"], [1, "cw-pool__list"], ["class", "cw-pool__empty", 4, "ngIf"], ["class", "cw-pool__item", 3, "checked", "click", 4, "ngFor", "ngForOf"], [1, "cw-pool__empty"], [1, "cw-pool__item", 3, "click"], [1, "cw-pool__check"], [1, "cw-pool__info"], [1, "cw-pool__name"], [1, "cw-pool__meta"], [1, "cw-error"], ["type", "button", 1, "cw-btn-draft", 3, "click", "disabled"], ["type", "button", 1, "cw-btn-primary", 3, "click", "disabled"], [1, "isax", "isax-send-2"]], template: function AdminrhCourseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
      \u0275\u0275listener("click", function AdminrhCourseComponent_Template_button_click_2_listener() {
        return ctx.setTab("formations");
      });
      \u0275\u0275element(3, "i", 6);
      \u0275\u0275text(4, " Formations ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 5);
      \u0275\u0275listener("click", function AdminrhCourseComponent_Template_button_click_5_listener() {
        return ctx.setTab("parcours");
      });
      \u0275\u0275element(6, "i", 7);
      \u0275\u0275text(7, " Parcours ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function AdminrhCourseComponent_Template_button_click_8_listener() {
        return ctx.setTab("catalogue");
      });
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275text(10, " Catalogue ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function AdminrhCourseComponent_Template_button_click_11_listener() {
        return ctx.setTab("sessions");
      });
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275text(13, " Sessions ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, AdminrhCourseComponent_ng_container_14_Template, 57, 25, "ng-container", 10)(15, AdminrhCourseComponent_ng_container_15_Template, 50, 16, "ng-container", 10)(16, AdminrhCourseComponent_ng_container_16_Template, 34, 10, "ng-container", 10)(17, AdminrhCourseComponent_ng_container_17_Template, 61, 25, "ng-container", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, AdminrhCourseComponent_div_18_Template, 27, 22, "div", 11)(19, AdminrhCourseComponent_div_19_Template, 88, 25, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "formations");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "parcours");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "catalogue");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "sessions");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.activeTab === "formations");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "parcours");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "catalogue");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "sessions");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.wizardOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.catWizardOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, MatSortModule, SlicePipe, TitleCasePipe], styles: ['\n\n.ac-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ac-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ac-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ac-tab.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ac-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #111827;\n}\n.ac-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ac-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ac-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ac-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.ac-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.ac-chip[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ac-chip--on[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  border-color: #85B7EB;\n  color: #0C447C;\n}\n.ac-spacer[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.ac-view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-btn.active[_ngcontent-%COMP%], \n.ac-view-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ac-add-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ac-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ac-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ac-kpi__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.ac-kpi__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-kpi__val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n  color: #111827;\n}\n.ac-kpi__delta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 2px;\n}\n.ac-kpi__delta.up[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.ac-kpi__delta.down[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.ac-kpi__delta.neutral[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ac-skeletons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n}\n.ac-skeleton-card[_ngcontent-%COMP%] {\n  height: 220px;\n  border-radius: 12px;\n  background: #f3f4f6;\n  animation: _ngcontent-%COMP%_ac-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ac-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-alert[_ngcontent-%COMP%] {\n  margin: 12px 14px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n  background: #f9fafb;\n}\n.ac-fcard[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.15s;\n}\n.ac-fcard[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-fcard__thumb[_ngcontent-%COMP%] {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  position: relative;\n  overflow: hidden;\n}\n.ac-fcard__thumb[data-th=blue][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ac-fcard__thumb[data-th=teal][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ac-fcard__thumb[data-th=purple][_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ac-fcard__thumb[data-th=amber][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ac-fcard__thumb[data-th=coral][_ngcontent-%COMP%] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.ac-fcard__thumb[data-th=green][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ac-fcard__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-fcard__body[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  flex: 1;\n}\n.ac-fcard__cat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.ac-fcard__cat[data-cat=tech][_ngcontent-%COMP%] {\n  color: #0C447C;\n}\n.ac-fcard__cat[data-cat=rh][_ngcontent-%COMP%] {\n  color: #085041;\n}\n.ac-fcard__cat[data-cat=mgmt][_ngcontent-%COMP%] {\n  color: #534AB7;\n}\n.ac-fcard__cat[data-cat=fin][_ngcontent-%COMP%] {\n  color: #633806;\n}\n.ac-fcard__cat[data-cat=default][_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.ac-fcard__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n.ac-fcard__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ac-fcard__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-fcard__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ac-fcard__footer[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-fcard__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n}\n.ac-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ac-status[data-s=pub][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=draft][_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=pending][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-status[data-s=plan][_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #3730A3;\n}\n.ac-status[data-s=live][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=done][_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=cancel][_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #991B1B;\n}\n.ac-prog[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 6px;\n}\n.ac-prog__bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ac-prog__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background: #185FA5;\n}\n.ac-prog__txt[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: right;\n  margin-top: 2px;\n}\n.ac-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.ac-act[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-act--del[_ngcontent-%COMP%] {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ac-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.ac-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ac-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ac-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ac-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ac-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ac-table-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-table-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ac-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 14px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ac-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ac-empty--span[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.ac-empty-tab[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 14px;\n  gap: 12px;\n  color: #9ca3af;\n}\n.ac-empty-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.ac-empty-tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ac-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ac-pager__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-pager__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ac-pager__btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ac-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ac-pager__btn.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ac-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ac-toolbar--chips[_ngcontent-%COMP%] {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-top: none;\n  background: #fff;\n  gap: 6px;\n}\n.ac-view-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ac-view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ac-view-toggle.active[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #111827;\n  font-weight: 500;\n}\n.ac-view-toggle[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f9fafb;\n}\n.ac-sessions-list[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ac-session-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: border-color 0.15s;\n}\n.ac-session-row[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-session-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 40px;\n}\n.ac-session-date__day[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.ac-session-date__month[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ac-session-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ac-session-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ac-session-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 3px;\n  flex-wrap: wrap;\n}\n.ac-session-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-session-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ac-session-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ac-session-places[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ac-cal[_ngcontent-%COMP%] {\n  padding: 12px 14px 14px;\n  background: #f9fafb;\n}\n.ac-cal__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.ac-cal__nav-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ac-cal__nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-cal__nav-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ac-cal__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.ac-cal__head[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 0 6px;\n}\n.ac-cal__cell[_ngcontent-%COMP%] {\n  min-height: 80px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 5px 5px 4px;\n  overflow: hidden;\n  transition: border-color 0.12s;\n}\n.ac-cal__cell[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-cal__cell--other[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ac-cal__cell--other[_ngcontent-%COMP%]   .ac-cal__day[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ac-cal__cell--today[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n}\n.ac-cal__cell--today[_ngcontent-%COMP%]   .ac-cal__day[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n}\n.ac-cal__day[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 4px;\n  display: block;\n}\n.ac-cal__events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ac-cal__event[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #0C447C;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ac-cal__event--dist[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-cal__event--hybr[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.wz-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.wz-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.wz-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.wz-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.wz-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.wz-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.wz-step__circle[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.wz-step__circle.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.wz-step__circle.done[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.wz-step__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.wz-step__label.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n}\n.wz-step__label.done[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.wz-step__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.wz-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.wz-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.wz-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.wz-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.wz-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.wz-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.wz-input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  box-shadow: 0 0 0 2px #E6F1FB;\n}\n.wz-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.wz-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n.wz-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-domain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.wz-domain-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.wz-domain-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.wz-domain-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-domain-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.wz-domain-card.selected[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.wz-domain-card.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0C447C;\n}\n.wz-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.wz-strip__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.wz-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  border: 0.5px solid #85B7EB;\n  font-size: 12px;\n  color: #0C447C;\n}\n.wz-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  color: #378ADD;\n}\n.wz-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0C447C;\n}\n.wz-pool[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.wz-pool__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-pool__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.wz-pool__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.wz-pool__list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.wz-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.wz-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.wz-pool__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.wz-pool__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-pool__item[_ngcontent-%COMP%]:hover, \n.wz-pool__item.checked[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.wz-pool__check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.wz-pool__check.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.wz-pool__thumb[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-pool__thumb[data-th=blue][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.wz-pool__thumb[data-th=teal][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.wz-pool__thumb[data-th=purple][_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-pool__thumb[data-th=amber][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.wz-pool__thumb[data-th=coral][_ngcontent-%COMP%] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.wz-pool__thumb[data-th=green][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.wz-pool__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.wz-pool__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wz-pool__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-pool__tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #4b5563;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.wz-pool__empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.wz-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #f3f4f6;\n}\n.wz-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-toggle-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.wz-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.wz-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.wz-toggle.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n}\n.wz-toggle.on[_ngcontent-%COMP%]::after {\n  left: 19px;\n}\n.wz-info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  border: 0.5px solid #85B7EB;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #0C447C;\n  line-height: 1.5;\n}\n.wz-info-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-recap-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.wz-recap-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-rl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-recap-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.wz-rc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.wz-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.wz-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.wz-foot__info[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.wz-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.wz-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #185FA5;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.wz-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.wz-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wz-btn-success[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.wz-btn-success[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.wz-btn-success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.cw-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 600px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.cw-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.cw-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cw-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.cw-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.cw-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.cw-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.cw-upload-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 1.5px dashed #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cw-upload-zone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #9ca3af;\n}\n.cw-upload-zone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.cw-upload-zone__hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n}\n.cw-upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: #79C9AB;\n  background: #E1F5EE;\n}\n.cw-upload-zone[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.cw-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cw-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.cw-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.cw-input[_ngcontent-%COMP%]:focus {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.cw-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n.cw-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-toggle-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n}\n.cw-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.cw-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.cw-toggle.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n}\n.cw-toggle.on[_ngcontent-%COMP%]::after {\n  left: 19px;\n}\n.cw-toggle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4b5563;\n}\n.cw-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.cw-domain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-domain-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.cw-domain-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #9ca3af;\n}\n.cw-domain-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-domain-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-level-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-level-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cw-level-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-level-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.cw-level-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-level-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-level-card.selected[_ngcontent-%COMP%]   .cw-level-card__label[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-level-card.selected[_ngcontent-%COMP%]   .cw-level-card__sub[_ngcontent-%COMP%] {\n  color: rgb(148.5, 219.5, 194.65);\n}\n.cw-tags-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 8px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.cw-tags-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  background: #E1F5EE;\n  border: 0.5px solid #79C9AB;\n  font-size: 12px;\n  color: #0F6E56;\n}\n.cw-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  color: #79C9AB;\n}\n.cw-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0F6E56;\n}\n.cw-tag-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #111827;\n  background: transparent;\n  flex: 1;\n  min-width: 100px;\n  font-family: inherit;\n}\n.cw-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 8px;\n}\n.cw-strip-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.cw-pool[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.cw-pool__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.cw-pool__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.cw-pool__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.cw-pool__list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.cw-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.cw-pool__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cw-pool__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cw-pool__item[_ngcontent-%COMP%]:hover, \n.cw-pool__item.checked[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n}\n.cw-pool__check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.cw-pool__check.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.cw-pool__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cw-pool__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-pool__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-pool__empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.cw-vis-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cw-vis-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cw-vis-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.cw-vis-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-vis-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-vis-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%]   .cw-vis-card__label[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cw-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.cw-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.cw-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.cw-btn-draft[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.cw-btn-draft[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-btn-draft[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.cw-btn-draft[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #0F6E56;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.cw-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ac-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-skeletons[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ac-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ac-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.ac-act--arch[_ngcontent-%COMP%] {\n  color: #BA7517;\n}\n.ac-act--arch[_ngcontent-%COMP%]:hover {\n  border-color: #BA7517;\n  color: #BA7517;\n  background: #FAEEDA;\n}\n/*# sourceMappingURL=adminrh-course.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhCourseComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-course", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      MatSortModule,
      CustomPaginationComponent
    ], template: `<div class="ac-shell">

  <!-- \u2500\u2500 TABS \u2500\u2500 -->
  <div class="ac-topbar">
    <button type="button" class="ac-tab" [class.active]="activeTab === 'formations'" (click)="setTab('formations')">
      <i class="isax isax-book-1"></i> Formations
    </button>
    <button type="button" class="ac-tab" [class.active]="activeTab === 'parcours'" (click)="setTab('parcours')">
      <i class="isax isax-route-square"></i> Parcours
    </button>
    <button type="button" class="ac-tab" [class.active]="activeTab === 'catalogue'" (click)="setTab('catalogue')">
      <i class="isax isax-category"></i> Catalogue
    </button>
    <button type="button" class="ac-tab" [class.active]="activeTab === 'sessions'" (click)="setTab('sessions')">
      <i class="isax isax-calendar-1"></i> Sessions
    </button>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       TAB 1 : FORMATIONS
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <ng-container *ngIf="activeTab === 'formations'">

    <!-- Toolbar -->
    <div class="ac-toolbar">
      <div class="ac-search">
        <i class="isax isax-search-normal-1 ac-search__icon"></i>
        <input type="search" class="ac-search__input" placeholder="Rechercher..."
               [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone:true}"
               (ngModelChange)="searchData($event)">
      </div>
      <button type="button" class="ac-chip" [class.ac-chip--on]="selectedStatus === ''"
              (click)="filterByStatus('')">Toutes</button>
      <button type="button" class="ac-chip" [class.ac-chip--on]="selectedStatus === 'published'"
              (click)="filterByStatus('published')">Publi\xE9es</button>
      <button type="button" class="ac-chip" [class.ac-chip--on]="selectedStatus === 'draft'"
              (click)="filterByStatus('draft')">Brouillons</button>
      <div class="ac-spacer"></div>
      <button type="button" class="ac-view-btn" [class.active]="viewMode === 'list'" (click)="viewMode = 'list'">
        <i class="isax isax-row-vertical"></i>
      </button>
      <button type="button" class="ac-view-btn" [class.active]="viewMode === 'grid'" (click)="viewMode = 'grid'">
        <i class="isax isax-grid-2"></i>
      </button>
      <a [routerLink]="routes.adminrhCourseGrid" class="ac-add-btn">
        <i class="isax isax-add"></i> Nouvelle formation
      </a>
    </div>

    <!-- KPI row -->
    <div class="ac-kpi-row">
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-book-1"></i> Total formations</div>
        <div class="ac-kpi__val">{{ allFormations.length }}</div>
        <div class="ac-kpi__delta neutral">{{ stats.active }} publi\xE9es</div>
      </div>
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-play-circle"></i> En cours</div>
        <div class="ac-kpi__val">{{ stats.active }}</div>
        <div class="ac-kpi__delta neutral">inscription ouverte</div>
      </div>
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-document"></i> Brouillons</div>
        <div class="ac-kpi__val">{{ stats.draft }}</div>
        <div class="ac-kpi__delta neutral">non publi\xE9es</div>
      </div>
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-gift"></i> Gratuites</div>
        <div class="ac-kpi__val">{{ stats.free }}</div>
        <div class="ac-kpi__delta neutral">/ {{ stats.paid }} payantes</div>
      </div>
    </div>

    <!-- Skeleton -->
    <div *ngIf="loading" class="ac-skeletons">
      <div *ngFor="let i of [1,2,3,4,5,6]" class="ac-skeleton-card"></div>
    </div>

    <!-- Error -->
    <div *ngIf="error && !loading" class="ac-alert">
      <i class="isax isax-warning-2"></i> {{ error }}
    </div>

    <!-- Grid view -->
    <div *ngIf="!loading && viewMode === 'grid'" class="ac-card-grid">
      <div *ngFor="let f of formations; trackBy: trackByFormation" class="ac-fcard">
        <div class="ac-fcard__thumb" [attr.data-th]="getThumbKey(f)">
          <img *ngIf="f.image_couverture" [src]="getDefaultImage(f)" [alt]="f.titre" class="ac-fcard__img">
          <i *ngIf="!f.image_couverture" class="isax isax-book-1"></i>
        </div>
        <div class="ac-fcard__body">
          <div class="ac-fcard__cat" [attr.data-cat]="getCatKey(f)">{{ f.categorie?.nom || 'Autre' }}</div>
          <div class="ac-fcard__title">{{ f.titre }}</div>
          <div class="ac-fcard__meta">
            <span><i class="isax isax-clock"></i> {{ getDuree(f) }}</span>
            <span *ngIf="f.nb_max_participants"><i class="isax isax-people"></i> {{ f.nb_max_participants }}</span>
          </div>
        </div>
        <div class="ac-fcard__footer">
          <span class="ac-status" [attr.data-s]="getStatusKey(f)">{{ getStatusText(f) }}</span>
          <div class="ac-prog">
            <div class="ac-prog__bar">
              <div class="ac-prog__fill" [style.width.%]="getCompletion(f)"></div>
            </div>
            <span class="ac-prog__txt">{{ getCompletion(f) > 0 ? getCompletion(f) + '%' : '\u2014' }}</span>
          </div>
          <div class="ac-fcard__actions">
            <a [href]="routes.courseDetails + '/' + f.id" target="_blank" class="ac-act" title="Voir">
              <i class="isax isax-eye"></i>
            </a>
            <button type="button" class="ac-act ac-act--arch" title="Archiver" (click)="archiveFormation(f)">
              <i class="isax isax-archive"></i>
            </button>
          </div>
        </div>
      </div>

      <div *ngIf="!formations.length && !loading" class="ac-empty ac-empty--span">
        <i class="isax isax-book-1"></i>
        <p>Aucune formation trouv\xE9e</p>
      </div>
    </div>

    <!-- List view -->
    <table *ngIf="!loading && viewMode === 'list'" class="ac-table">
      <thead>
        <tr>
          <th>Formation</th>
          <th>Cat\xE9gorie</th>
          <th>Dur\xE9e</th>
          <th>Statut</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let f of formations; trackBy: trackByFormation">
          <td>
            <div class="ac-table-name">{{ f.titre }}</div>
            <div class="ac-table-sub">{{ f.formateur_nom || '\u2014' }}</div>
          </td>
          <td>{{ f.categorie?.nom || '\u2014' }}</td>
          <td>{{ getDuree(f) }}</td>
          <td><span class="ac-status" [attr.data-s]="getStatusKey(f)">{{ getStatusText(f) }}</span></td>
          <td>
            <div class="ac-actions">
              <a [href]="routes.courseDetails + '/' + f.id" target="_blank" class="ac-act" title="Voir">
                <i class="isax isax-eye"></i>
              </a>
              <button type="button" class="ac-act ac-act--arch" title="Archiver" (click)="archiveFormation(f)">
                <i class="isax isax-archive"></i>
              </button>
            </div>
          </td>
        </tr>
        <tr *ngIf="!formations.length">
          <td colspan="5" class="ac-empty">Aucune formation trouv\xE9e</td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="ac-pager" *ngIf="!loading && totalData > pageSize">
      <span class="ac-pager__info">{{ skip + 1 }}\u2013{{ skip + formations.length }} sur {{ totalData }}</span>
      <div class="ac-pager__btns">
        <button type="button" class="ac-pager__btn" [disabled]="currentPage === 1"
                (click)="onPageChange(currentPage - 1)">
          <i class="isax isax-arrow-left-2"></i>
        </button>
        <button type="button" *ngFor="let p of pageNumberArray; let i = index"
                class="ac-pager__btn" [class.active]="currentPage === i + 1"
                (click)="onPageChange(i + 1)">{{ i + 1 }}</button>
        <button type="button" class="ac-pager__btn"
                [disabled]="currentPage === pageNumberArray.length"
                (click)="onPageChange(currentPage + 1)">
          <i class="isax isax-arrow-right-3"></i>
        </button>
      </div>
    </div>

  </ng-container>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       TAB 2 : PARCOURS
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <ng-container *ngIf="activeTab === 'parcours'">

    <!-- Toolbar -->
    <div class="ac-toolbar">
      <div class="ac-search">
        <i class="isax isax-search-normal-1 ac-search__icon"></i>
        <input type="search" class="ac-search__input" placeholder="Rechercher un parcours..."
               [(ngModel)]="parcoursSearch" [ngModelOptions]="{standalone:true}"
               (ngModelChange)="applyParcoursFilters()">
      </div>
      <button type="button" class="ac-chip" [class.ac-chip--on]="parcoursStatut === ''"
              (click)="parcoursStatut=''; applyParcoursFilters()">Tous</button>
      <button type="button" class="ac-chip" [class.ac-chip--on]="parcoursStatut === 'actif'"
              (click)="parcoursStatut='actif'; applyParcoursFilters()">Actifs</button>
      <button type="button" class="ac-chip" [class.ac-chip--on]="parcoursStatut === 'archive'"
              (click)="parcoursStatut='archive'; applyParcoursFilters()">Archiv\xE9s</button>
      <div class="ac-spacer"></div>
      <button type="button" class="ac-add-btn" (click)="openWizardCreate()">
        <i class="isax isax-add"></i> Nouveau parcours
      </button>
    </div>

    <!-- KPI row -->
    <div class="ac-kpi-row">
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-route-square"></i> Total parcours</div>
        <div class="ac-kpi__val">{{ parcours.length }}</div>
        <div class="ac-kpi__delta neutral">{{ getParcoursActifs() }} actifs</div>
      </div>
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-tick-circle"></i> Actifs</div>
        <div class="ac-kpi__val">{{ getParcoursActifs() }}</div>
        <div class="ac-kpi__delta neutral">en cours</div>
      </div>
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-book-1"></i> R\xE9sultats</div>
        <div class="ac-kpi__val">{{ parcoursFiltered.length }}</div>
        <div class="ac-kpi__delta neutral">filtr\xE9s</div>
      </div>
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-people"></i> Inactifs</div>
        <div class="ac-kpi__val">{{ parcours.length - getParcoursActifs() }}</div>
        <div class="ac-kpi__delta neutral">non actifs</div>
      </div>
    </div>

    <!-- Skeleton -->
    <div *ngIf="parcoursLoading" class="ac-skeletons">
      <div *ngFor="let i of [1,2,3,4,5,6]" class="ac-skeleton-card"></div>
    </div>

    <!-- Card grid -->
    <div *ngIf="!parcoursLoading" class="ac-card-grid">
      <div *ngFor="let p of parcoursFiltered" class="ac-fcard">
        <div class="ac-fcard__thumb" [attr.data-th]="p.actif ? 'blue' : 'amber'">
          <img *ngIf="p.image_url" [src]="p.image_url" [alt]="p.nom" class="ac-fcard__img">
          <i *ngIf="!p.image_url" class="isax isax-route-square"></i>
        </div>
        <div class="ac-fcard__body">
          <div class="ac-fcard__cat" [attr.data-cat]="p.actif ? 'tech' : 'default'">{{ getNiveauLabel(p.niveau) }}</div>
          <div class="ac-fcard__title">{{ p.nom }}</div>
          <div class="ac-fcard__meta">
            <span><i class="isax isax-clock"></i> {{ p.duree_estimee }}h</span>
            <span><i class="isax isax-book-1"></i> {{ p.formations?.length || 0 }} formations</span>
            <span><i class="isax isax-people"></i> {{ p.users?.length || 0 }} inscrits</span>
          </div>
        </div>
        <div class="ac-fcard__footer">
          <span class="ac-status" [attr.data-s]="p.actif ? 'pub' : 'draft'">{{ p.actif ? 'Actif' : 'Inactif' }}</span>
          <div class="ac-fcard__actions" style="margin-left:auto">
            <button type="button" class="ac-act" title="Voir" (click)="openWizardView(p)">
              <i class="isax isax-eye"></i>
            </button>
            <button type="button" class="ac-act" title="Modifier" (click)="openWizardEdit(p)">
              <i class="isax isax-edit-2"></i>
            </button>
          </div>
        </div>
      </div>

      <div *ngIf="!parcoursFiltered.length && !parcoursLoading" class="ac-empty ac-empty--span">
        <i class="isax isax-route-square"></i>
        <p>Aucun parcours trouv\xE9</p>
      </div>
    </div>

  </ng-container>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       TAB 3 : CATALOGUE
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <ng-container *ngIf="activeTab === 'catalogue'">

    <!-- Toolbar row 1 : search + trier + add -->
    <div class="ac-toolbar">
      <div class="ac-search">
        <i class="isax isax-search-normal-1 ac-search__icon"></i>
        <input type="search" class="ac-search__input" placeholder="Rechercher dans le catalogue..."
               [(ngModel)]="catalogueSearch" [ngModelOptions]="{standalone:true}"
               (ngModelChange)="applyCatalogueFilters()">
      </div>
      <div class="ac-spacer"></div>
      <button type="button" class="ac-view-btn" title="Trier">
        <i class="isax isax-sort"></i>
      </button>
      <button type="button" class="ac-add-btn" (click)="openCatWizardCreate()">
        <i class="isax isax-add"></i> Nouveau catalogue
      </button>
    </div>
    <!-- Toolbar row 2 : type chips -->
    <div class="ac-toolbar ac-toolbar--chips">
      <button type="button" class="ac-chip" [class.ac-chip--on]="catalogueType === ''"
              (click)="catalogueType=''; applyCatalogueFilters()">Tout</button>
      <button type="button" class="ac-chip" *ngFor="let t of catalogueTypes"
              [class.ac-chip--on]="catalogueType === t"
              (click)="catalogueType=t; applyCatalogueFilters()">{{ t }}</button>
    </div>

    <!-- KPI row -->
    <div class="ac-kpi-row">
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-category"></i> Total catalogues</div>
        <div class="ac-kpi__val">{{ catalogues.length }}</div>
        <div class="ac-kpi__delta neutral">catalogues</div>
      </div>
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-book-1"></i> R\xE9sultats</div>
        <div class="ac-kpi__val">{{ cataloguesFiltered.length }}</div>
        <div class="ac-kpi__delta neutral">filtr\xE9s</div>
      </div>
    </div>

    <!-- Skeleton -->
    <div *ngIf="catalogueLoading" class="ac-skeletons">
      <div *ngFor="let i of [1,2,3]" class="ac-skeleton-card"></div>
    </div>

    <!-- Card grid -->
    <div *ngIf="!catalogueLoading" class="ac-card-grid">
      <div *ngFor="let c of cataloguesFiltered" class="ac-fcard">
        <div class="ac-fcard__thumb" [attr.data-th]="getCatalogueThumb(c)">
          <i class="isax isax-category"></i>
        </div>
        <div class="ac-fcard__body">
          <div class="ac-fcard__cat" [attr.data-cat]="'default'">{{ c.type || 'G\xE9n\xE9ral' }}</div>
          <div class="ac-fcard__title">{{ c.titre }}</div>
          <div class="ac-fcard__meta">
            <span><i class="isax isax-book-1"></i> {{ c.nombre_formations || c.formations?.length || 0 }} formations</span>
            <span *ngIf="c.duree_totale"><i class="isax isax-clock"></i> {{ c.duree_totale }}h</span>
            <span *ngIf="c.metadata?.niveau"><i class="isax isax-award"></i> {{ c.metadata.niveau }}</span>
          </div>
        </div>
        <div class="ac-fcard__footer">
          <span class="ac-status" [attr.data-s]="c.est_publie ? 'pub' : 'draft'">
            {{ c.est_publie ? 'Publi\xE9' : 'Brouillon' }}
          </span>
          <div class="ac-fcard__actions" style="margin-left:auto">
            <button type="button" class="ac-act" title="Voir" (click)="openCatWizardView(c)">
              <i class="isax isax-eye"></i>
            </button>
            <button type="button" class="ac-act" title="Modifier" (click)="openCatWizardEdit(c)">
              <i class="isax isax-edit-2"></i>
            </button>
          </div>
        </div>
      </div>

      <div *ngIf="!cataloguesFiltered.length && !catalogueLoading" class="ac-empty ac-empty--span">
        <i class="isax isax-category"></i>
        <p>Aucun catalogue trouv\xE9</p>
      </div>
    </div>

  </ng-container>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       TAB 4 : SESSIONS
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <ng-container *ngIf="activeTab === 'sessions'">

    <!-- Toolbar -->
    <div class="ac-toolbar">
      <div class="ac-search">
        <i class="isax isax-search-normal-1 ac-search__icon"></i>
        <input type="search" class="ac-search__input" placeholder="Rechercher une session..."
               [(ngModel)]="sessionsSearch" [ngModelOptions]="{standalone:true}"
               (ngModelChange)="applySessionsFilters()">
      </div>
      <!-- Vue toggle Liste / Calendrier -->
      <div class="ac-view-group">
        <button type="button" class="ac-view-toggle" [class.active]="sessionsView === 'list'"
                (click)="sessionsView='list'">
          <i class="isax isax-row-vertical"></i> Liste
        </button>
        <button type="button" class="ac-view-toggle" [class.active]="sessionsView === 'calendar'"
                (click)="sessionsView='calendar'">
          <i class="isax isax-calendar-1"></i> Calendrier
        </button>
      </div>
      <div class="ac-spacer"></div>
      <a [routerLink]="routes.adminrhSession" class="ac-add-btn">
        <i class="isax isax-add"></i> Planifier
      </a>
    </div>

    <!-- Chips de modalit\xE9 -->
    <div class="ac-toolbar ac-toolbar--chips">
      <button type="button" class="ac-chip" [class.ac-chip--on]="sessionsType === ''"
              (click)="sessionsType=''; applySessionsFilters()">Tous</button>
      <button type="button" class="ac-chip" [class.ac-chip--on]="sessionsType === 'presentiel'"
              (click)="sessionsType='presentiel'; applySessionsFilters()">Pr\xE9sentiel</button>
      <button type="button" class="ac-chip" [class.ac-chip--on]="sessionsType === 'distanciel'"
              (click)="sessionsType='distanciel'; applySessionsFilters()">Distanciel</button>
      <button type="button" class="ac-chip" [class.ac-chip--on]="sessionsType === 'hybride'"
              (click)="sessionsType='hybride'; applySessionsFilters()">Hybride</button>
    </div>

    <!-- KPI row -->
    <div class="ac-kpi-row">
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-calendar-1"></i> Total sessions</div>
        <div class="ac-kpi__val">{{ sessions.length }}</div>
        <div class="ac-kpi__delta neutral">{{ sessionsFiltered.length }} filtr\xE9s</div>
      </div>
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-play-circle"></i> En cours</div>
        <div class="ac-kpi__val">{{ getSessionsCount('en_cours') }}</div>
        <div class="ac-kpi__delta neutral">actives</div>
      </div>
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-tick-circle"></i> Termin\xE9es</div>
        <div class="ac-kpi__val">{{ getSessionsCount('terminee') }}</div>
        <div class="ac-kpi__delta neutral">compl\xE8tes</div>
      </div>
      <div class="ac-kpi">
        <div class="ac-kpi__label"><i class="isax isax-monitor"></i> Distanciel</div>
        <div class="ac-kpi__val">{{ getSessionsByType('distanciel') }}</div>
        <div class="ac-kpi__delta neutral">/ {{ getSessionsByType('presentiel') }} pr\xE9sentiel</div>
      </div>
    </div>

    <!-- Skeleton -->
    <div *ngIf="sessionsLoading" class="ac-skeletons">
      <div *ngFor="let i of [1,2,3]" class="ac-skeleton-card"></div>
    </div>

    <!-- \u2500\u2500\u2500 VUE LISTE \u2500\u2500\u2500 -->
    <ng-container *ngIf="!sessionsLoading && sessionsView === 'list'">
      <div class="ac-sessions-list">
        <div *ngFor="let s of sessionsFiltered" class="ac-session-row">
          <div class="ac-session-date">
            <span class="ac-session-date__day">{{ getSessionDay(s.date_debut) }}</span>
            <span class="ac-session-date__month">{{ getSessionMonth(s.date_debut) }}</span>
          </div>
          <div class="ac-session-info">
            <div class="ac-session-title">{{ s.titre || s.formation?.titre || '\u2014' }}</div>
            <div class="ac-session-meta">
              <span><i class="isax isax-clock"></i> {{ formatSessionDate(s.date_debut) }}</span>
              <span *ngIf="s.formateur?.name"><i class="isax isax-user"></i> {{ s.formateur.name }}</span>
              <span *ngIf="s.lieu"><i class="isax isax-building"></i> {{ s.lieu }}</span>
            </div>
          </div>
          <div class="ac-session-badges">
            <span class="ac-status" [attr.data-s]="s.type === 'distanciel' ? 'pending' : s.type === 'hybride' ? 'plan' : 'pub'">
              {{ s.type_display || s.type || 'Pr\xE9sentiel' }}
            </span>
            <span class="ac-session-places">
              {{ s.nombre_inscrits ?? 0 }}/{{ s.capacite_max ?? '?' }} places
            </span>
          </div>
          <a [routerLink]="[routes.adminrhSession]" class="ac-add-btn" style="font-size:11px; padding:5px 10px">
            Inscrire
          </a>
        </div>
        <div *ngIf="!sessionsFiltered.length" class="ac-empty" style="padding:32px 14px; text-align:center">
          <i class="isax isax-calendar-1" style="font-size:2rem; display:block; margin-bottom:8px"></i>
          <p>Aucune session trouv\xE9e</p>
        </div>
      </div>
    </ng-container>

    <!-- \u2500\u2500\u2500 VUE CALENDRIER \u2500\u2500\u2500 -->
    <ng-container *ngIf="!sessionsLoading && sessionsView === 'calendar'">
      <div class="ac-cal">
        <!-- Nav mois -->
        <div class="ac-cal__nav">
          <button type="button" class="ac-cal__nav-btn" (click)="calendarPrevMonth()">
            <i class="isax isax-arrow-left-2"></i>
          </button>
          <span class="ac-cal__nav-label">{{ calendarMonthLabel | titlecase }}</span>
          <button type="button" class="ac-cal__nav-btn" (click)="calendarNextMonth()">
            <i class="isax isax-arrow-right-3"></i>
          </button>
        </div>
        <!-- En-t\xEAtes jours -->
        <div class="ac-cal__grid">
          <div class="ac-cal__head" *ngFor="let d of ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim']">{{ d }}</div>
          <!-- Cellules -->
          <div *ngFor="let cell of getCalendarDays()"
               class="ac-cal__cell"
               [class.ac-cal__cell--other]="!isCurrentMonth(cell.date)"
               [class.ac-cal__cell--today]="isToday(cell.date)">
            <span class="ac-cal__day">{{ cell.date.getDate() }}</span>
            <div class="ac-cal__events">
              <div *ngFor="let s of cell.sessions" class="ac-cal__event"
                   [class.ac-cal__event--dist]="s.type === 'distanciel'"
                   [class.ac-cal__event--hybr]="s.type === 'hybride'"
                   [title]="s.titre || s.formation?.titre || ''">
                {{ s.titre || s.formation?.titre || '\u2014' | slice:0:20 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-container>

  </ng-container>

</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     WIZARD MODAL \u2013 PARCOURS
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="wz-overlay" *ngIf="wizardOpen" (click)="closeWizard()">
  <div class="wz-modal" (click)="$event.stopPropagation()" [formGroup]="wizardForm">

    <!-- Head -->
    <div class="wz-head">
      <div class="wz-head__icon"><i class="isax isax-route-square"></i></div>
      <div class="wz-head__text">
        <div class="wz-head__title">
          {{ wizardMode === 'create' ? 'Nouveau parcours de formation' : wizardMode === 'edit' ? 'Modifier le parcours' : 'D\xE9tails du parcours' }}
        </div>
        <div class="wz-head__sub">Configurez le parcours en 4 \xE9tapes</div>
      </div>
      <button type="button" class="wz-close" (click)="closeWizard()">
        <i class="isax isax-close-circle"></i>
      </button>
    </div>

    <!-- Stepper -->
    <div class="wz-stepper">
      <ng-container *ngFor="let s of [{n:1,l:'Informations'},{n:2,l:'Formations'},{n:3,l:'Param\xE8tres'},{n:4,l:'R\xE9capitulatif'}]; let last=last">
        <div class="wz-step">
          <div class="wz-step__circle"
               [class.done]="wizardStep > s.n"
               [class.active]="wizardStep === s.n">
            <i *ngIf="wizardStep > s.n" class="isax isax-tick-circle" style="font-size:11px"></i>
            <span *ngIf="wizardStep <= s.n">{{ s.n }}</span>
          </div>
          <span class="wz-step__label"
                [class.active]="wizardStep === s.n"
                [class.done]="wizardStep > s.n">{{ s.l }}</span>
        </div>
        <div *ngIf="!last" class="wz-step__line"></div>
      </ng-container>
    </div>

    <!-- Body -->
    <div class="wz-body">

      <!-- \u2500\u2500 \xC9TAPE 1 : Informations \u2500\u2500 -->
      <ng-container *ngIf="wizardStep === 1">
        <div class="wz-field wz-field--full">
          <label class="wz-label">Titre du parcours <span class="wz-req">*</span></label>
          <input type="text" class="wz-input" formControlName="nom"
                 placeholder="Ex. : Parcours Manager confirm\xE9"
                 [attr.readonly]="wizardMode === 'view' ? '' : null">
        </div>
        <div class="wz-row">
          <div class="wz-field">
            <label class="wz-label">Dur\xE9e estim\xE9e (jours) <span class="wz-req">*</span></label>
            <input type="number" class="wz-input" formControlName="duree_estimee"
                   placeholder="Ex. : 30" min="1"
                   [attr.readonly]="wizardMode === 'view' ? '' : null">
          </div>
          <div class="wz-field">
            <label class="wz-label">Prix (XOF)</label>
            <input type="number" class="wz-input" formControlName="prix"
                   placeholder="0" min="0"
                   [attr.readonly]="wizardMode === 'view' ? '' : null">
          </div>
        </div>
        <div class="wz-field wz-field--full">
          <label class="wz-label">Description</label>
          <textarea class="wz-input wz-textarea" formControlName="description"
                    placeholder="D\xE9crivez l'objectif p\xE9dagogique de ce parcours..."
                    [attr.readonly]="wizardMode === 'view' ? '' : null"></textarea>
          <span class="wz-hint">Visible par les apprenants inscrits</span>
        </div>
        <label class="wz-label" style="margin-bottom:8px">Domaine <span class="wz-req">*</span></label>
        <div class="wz-domain-grid">
          <div *ngFor="let d of domains" class="wz-domain-card"
               [class.selected]="wizardDomain === d.key"
               (click)="wizardMode !== 'view' && (wizardDomain = d.key)">
            <i class="isax {{ d.icon }}" [style.color]="d.color"></i>
            <span>{{ d.label }}</span>
          </div>
        </div>
      </ng-container>

      <!-- \u2500\u2500 \xC9TAPE 2 : Formations \u2500\u2500 -->
      <ng-container *ngIf="wizardStep === 2">
        <label class="wz-label" style="margin-bottom:6px">Formations s\xE9lectionn\xE9es</label>
        <div class="wz-strip">
          <ng-container *ngIf="wizardSelectedFormations.length; else noSel">
            <span *ngFor="let f of wizardSelectedFormations" class="wz-chip">
              {{ f.titre }}
              <i *ngIf="wizardMode !== 'view'" class="isax isax-close-circle"
                 (click)="wizardRemoveFormation(f)"></i>
            </span>
          </ng-container>
          <ng-template #noSel>
            <span class="wz-strip__hint">Aucune formation ajout\xE9e \u2014 s\xE9lectionnez ci-dessous</span>
          </ng-template>
        </div>

        <label class="wz-label" style="margin-bottom:6px">Catalogue disponible</label>
        <div class="wz-pool">
          <div class="wz-pool__search">
            <i class="isax isax-search-normal-1"></i>
            <input type="search" placeholder="Rechercher une formation..."
                   [(ngModel)]="wizardPoolSearch" [ngModelOptions]="{standalone:true}">
          </div>
          <div class="wz-pool__list">
            <div *ngIf="wizardLoadingFormations" class="wz-pool__empty">Chargement...</div>
            <div *ngFor="let f of wizardPoolFiltered" class="wz-pool__item"
                 (click)="wizardToggleFormation(f)"
                 [class.checked]="isWizardFormationSelected(f)">
              <div class="wz-pool__check" [class.on]="isWizardFormationSelected(f)">
                <i *ngIf="isWizardFormationSelected(f)" class="isax isax-tick-circle"></i>
              </div>
              <div class="wz-pool__thumb" [attr.data-th]="wizardGetFormationThumb(f)">
                <i class="isax isax-book-1"></i>
              </div>
              <div class="wz-pool__info">
                <div class="wz-pool__name">{{ f.titre }}</div>
                <div class="wz-pool__meta">
                  {{ f.duree_totale ? (f.duree_totale + 'h') : '' }}
                  {{ f.categorie?.nom ? '\xB7 ' + f.categorie?.nom : '' }}
                </div>
              </div>
              <span class="wz-pool__tag">{{ f.categorie?.nom || '\u2014' }}</span>
            </div>
            <div *ngIf="!wizardLoadingFormations && !wizardPoolFiltered.length" class="wz-pool__empty">
              Aucune formation trouv\xE9e
            </div>
          </div>
        </div>
        <p class="wz-hint" style="margin-top:6px">L'ordre des formations d\xE9finit la s\xE9quence du parcours.</p>
      </ng-container>

      <!-- \u2500\u2500 \xC9TAPE 3 : Param\xE8tres \u2500\u2500 -->
      <ng-container *ngIf="wizardStep === 3">
        <div class="wz-row" style="margin-bottom:14px">
          <div class="wz-field">
            <label class="wz-label">Score minimum requis (%)</label>
            <input type="number" class="wz-input" formControlName="score_min"
                   placeholder="70" min="0" max="100"
                   [attr.readonly]="wizardMode === 'view' ? '' : null">
          </div>
          <div class="wz-field">
            <label class="wz-label">Statut</label>
            <select class="wz-input" formControlName="actif"
                    [attr.disabled]="wizardMode === 'view' ? '' : null">
              <option [ngValue]="true">Actif</option>
              <option [ngValue]="false">Inactif</option>
            </select>
          </div>
        </div>
        <label class="wz-label" style="margin-bottom:10px">Options du parcours</label>
        <div class="wz-toggles">
          <div class="wz-toggle-row">
            <div class="wz-toggle-info">
              <div class="wz-toggle-title">Certificat \xE0 l'issue du parcours</div>
              <div class="wz-toggle-sub">G\xE9n\xE8re automatiquement un certificat PDF pour les apprenants ayant r\xE9ussi</div>
            </div>
            <div class="wz-toggle" [class.on]="wizardForm.value.certificat"
                 (click)="wizardMode !== 'view' && wizardForm.patchValue({certificat: !wizardForm.value.certificat})"></div>
          </div>
          <div class="wz-toggle-row">
            <div class="wz-toggle-info">
              <div class="wz-toggle-title">Progression s\xE9quentielle obligatoire</div>
              <div class="wz-toggle-sub">L'apprenant doit terminer chaque formation avant de passer \xE0 la suivante</div>
            </div>
            <div class="wz-toggle" [class.on]="wizardForm.value.sequentielle"
                 (click)="wizardMode !== 'view' && wizardForm.patchValue({sequentielle: !wizardForm.value.sequentielle})"></div>
          </div>
          <div class="wz-toggle-row">
            <div class="wz-toggle-info">
              <div class="wz-toggle-title">Notifications de progression</div>
              <div class="wz-toggle-sub">Envoie des rappels aux apprenants inactifs depuis plus de 7 jours</div>
            </div>
            <div class="wz-toggle" [class.on]="wizardForm.value.notifications"
                 (click)="wizardMode !== 'view' && wizardForm.patchValue({notifications: !wizardForm.value.notifications})"></div>
          </div>
          <div class="wz-toggle-row">
            <div class="wz-toggle-info">
              <div class="wz-toggle-title">Demande de validation RH requise</div>
              <div class="wz-toggle-sub">L'Admin RH doit approuver chaque inscription avant acc\xE8s</div>
            </div>
            <div class="wz-toggle" [class.on]="wizardForm.value.validation_rh"
                 (click)="wizardMode !== 'view' && wizardForm.patchValue({validation_rh: !wizardForm.value.validation_rh})"></div>
          </div>
        </div>
      </ng-container>

      <!-- \u2500\u2500 \xC9TAPE 4 : R\xE9capitulatif \u2500\u2500 -->
      <ng-container *ngIf="wizardStep === 4">
        <div class="wz-info-banner">
          <i class="isax isax-info-circle"></i>
          <span>V\xE9rifiez les informations avant de {{ wizardMode === 'create' ? 'cr\xE9er' : 'sauvegarder' }} le parcours.</span>
        </div>
        <div class="wz-recap-card">
          <div class="wz-recap-title">Informations g\xE9n\xE9rales</div>
          <div class="wz-recap-row"><span class="wz-rl">Titre</span><span class="wz-rv">{{ wizardForm.value.nom || '\u2014' }}</span></div>
          <div class="wz-recap-row"><span class="wz-rl">Domaine</span><span class="wz-rv">{{ wizardDomain || '\u2014' }}</span></div>
          <div class="wz-recap-row"><span class="wz-rl">Dur\xE9e estim\xE9e</span><span class="wz-rv">{{ wizardForm.value.duree_estimee }} jours</span></div>
          <div class="wz-recap-row"><span class="wz-rl">Prix</span><span class="wz-rv">{{ wizardForm.value.prix || '0' }} XOF</span></div>
          <div class="wz-recap-row"><span class="wz-rl">Statut</span><span class="wz-rv">{{ wizardForm.value.actif ? 'Actif' : 'Inactif' }}</span></div>
        </div>
        <div class="wz-recap-card">
          <div class="wz-recap-title">Formations incluses ({{ wizardSelectedFormations.length }})</div>
          <div class="wz-recap-chips" *ngIf="wizardSelectedFormations.length; else noFormations">
            <span *ngFor="let f of wizardSelectedFormations" class="wz-rc">{{ f.titre }}</span>
          </div>
          <ng-template #noFormations><span class="wz-rc">Aucune s\xE9lectionn\xE9e</span></ng-template>
        </div>
        <div class="wz-recap-card" style="margin-bottom:0">
          <div class="wz-recap-title">Param\xE8tres</div>
          <div class="wz-recap-row"><span class="wz-rl">Certificat final</span>
            <span class="wz-rv" [style.color]="wizardForm.value.certificat ? '#3B6D11' : '#A32D2D'">
              {{ wizardForm.value.certificat ? 'Activ\xE9' : 'D\xE9sactiv\xE9' }}</span></div>
          <div class="wz-recap-row"><span class="wz-rl">Progression s\xE9quentielle</span>
            <span class="wz-rv" [style.color]="wizardForm.value.sequentielle ? '#3B6D11' : '#A32D2D'">
              {{ wizardForm.value.sequentielle ? 'Obligatoire' : 'Libre' }}</span></div>
          <div class="wz-recap-row"><span class="wz-rl">Validation RH</span>
            <span class="wz-rv" [style.color]="wizardForm.value.validation_rh ? '#3B6D11' : '#A32D2D'">
              {{ wizardForm.value.validation_rh ? 'Requise' : 'Non requise' }}</span></div>
          <div class="wz-recap-row"><span class="wz-rl">Score minimum</span><span class="wz-rv">{{ wizardForm.value.score_min }}%</span></div>
        </div>
        <div *ngIf="wizardError" class="wz-error">
          <i class="isax isax-warning-2"></i> {{ wizardError }}
        </div>
      </ng-container>

    </div>

    <!-- Footer -->
    <div class="wz-foot">
      <span class="wz-foot__info">\xC9tape {{ wizardStep }} sur 4</span>
      <button type="button" class="wz-btn-ghost" *ngIf="wizardStep > 1" (click)="wizardPrev()">Retour</button>
      <button type="button" class="wz-btn-ghost" *ngIf="wizardStep === 1" (click)="closeWizard()">Annuler</button>
      <button type="button" class="wz-btn-primary" *ngIf="wizardStep < 4" (click)="wizardNext()">
        Suivant <i class="isax isax-arrow-right-3"></i>
      </button>
      <button type="button" *ngIf="wizardStep === 4 && wizardMode !== 'view'"
              class="wz-btn-success" [disabled]="wizardSaving" (click)="wizardSubmit()">
        <i class="isax isax-tick-circle"></i>
        {{ wizardSaving ? 'Enregistrement...' : (wizardMode === 'create' ? 'Cr\xE9er le parcours' : 'Sauvegarder') }}
      </button>
      <button type="button" *ngIf="wizardStep === 4 && wizardMode === 'view'"
              class="wz-btn-primary" (click)="closeWizard()">Fermer</button>
    </div>

  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     WIZARD MODAL \u2013 CATALOGUE
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="cw-overlay" *ngIf="catWizardOpen" (click)="closeCatWizard()">
  <div class="cw-modal" (click)="$event.stopPropagation()" [formGroup]="catWizardForm">

    <!-- Head -->
    <div class="cw-head">
      <div class="cw-head__icon"><i class="isax isax-category"></i></div>
      <div class="cw-head__text">
        <div class="cw-head__title">
          {{ catWizardMode === 'create' ? 'Nouveau catalogue' : catWizardMode === 'edit' ? 'Modifier le catalogue' : 'D\xE9tails du catalogue' }}
        </div>
        <div class="cw-head__sub">{{ catWizardMode === 'view' ? 'Consultation uniquement' : 'Renseignez les informations du catalogue' }}</div>
      </div>
      <button type="button" class="cw-close" (click)="closeCatWizard()">
        <i class="isax isax-close-circle"></i>
      </button>
    </div>

    <!-- Body -->
    <div class="cw-body">

      <!-- Image upload zone -->
      <div class="cw-upload-zone" *ngIf="catWizardMode !== 'view'">
        <i class="isax isax-gallery-add"></i>
        <span>Glissez une image de couverture ici</span>
        <span class="cw-upload-zone__hint">PNG, JPG jusqu'\xE0 2 Mo \u2014 recommand\xE9 1200 \xD7 400 px</span>
      </div>

      <!-- Titre -->
      <div class="cw-field">
        <label class="cw-label">Titre du catalogue <span class="cw-req">*</span></label>
        <input type="text" class="cw-input" formControlName="titre"
               placeholder="Ex. : Catalogue Management 2025"
               [attr.readonly]="catWizardMode === 'view' ? '' : null">
        <span class="cw-hint">Ce titre sera visible par les apprenants</span>
      </div>

      <!-- Short description -->
      <div class="cw-field">
        <label class="cw-label">Description courte <span class="cw-req">*</span></label>
        <input type="text" class="cw-input" formControlName="short_description"
               placeholder="Une phrase r\xE9sumant ce catalogue..."
               [attr.readonly]="catWizardMode === 'view' ? '' : null">
      </div>

      <!-- Description longue -->
      <div class="cw-field">
        <label class="cw-label">Description compl\xE8te</label>
        <textarea class="cw-input cw-textarea" formControlName="description"
                  placeholder="D\xE9crivez le contenu, les objectifs p\xE9dagogiques..."
                  [attr.readonly]="catWizardMode === 'view' ? '' : null"></textarea>
      </div>

      <!-- Formateur + Dur\xE9e -->
      <div class="cw-row">
        <div class="cw-field">
          <label class="cw-label">Dur\xE9e totale (h)</label>
          <input type="number" class="cw-input" formControlName="duree_totale"
                 placeholder="Ex. : 12" min="0"
                 [attr.readonly]="catWizardMode === 'view' ? '' : null">
        </div>
        <div class="cw-field">
          <label class="cw-label">Certifiante</label>
          <div class="cw-toggle-inline">
            <div class="cw-toggle" [class.on]="catWizardForm.value.est_certifiante"
                 (click)="catWizardMode !== 'view' && catWizardForm.patchValue({est_certifiante: !catWizardForm.value.est_certifiante})">
            </div>
            <span class="cw-toggle-label">{{ catWizardForm.value.est_certifiante ? 'Oui' : 'Non' }}</span>
          </div>
        </div>
      </div>

      <!-- Domaines -->
      <div class="cw-section-label">Domaine</div>
      <div class="cw-domain-grid">
        <div *ngFor="let d of catDomains" class="cw-domain-card"
             [class.selected]="catWizardDomains.includes(d.key)"
             (click)="catWizardToggleDomain(d.key)">
          <i class="isax {{ d.icon }}"></i>
          <span>{{ d.label }}</span>
        </div>
      </div>

      <!-- Niveau -->
      <div class="cw-section-label">Niveau</div>
      <div class="cw-level-row">
        <div *ngFor="let lv of catLevels" class="cw-level-card"
             [class.selected]="catWizardLevel === lv.key"
             (click)="catWizardMode !== 'view' && (catWizardLevel = lv.key)">
          <div class="cw-level-card__label">{{ lv.label }}</div>
          <div class="cw-level-card__sub">{{ lv.sub }}</div>
        </div>
      </div>

      <!-- Mots-cl\xE9s / Tags -->
      <div class="cw-field" style="margin-top:12px">
        <label class="cw-label">Mots-cl\xE9s</label>
        <div class="cw-tags-box">
          <span *ngFor="let tag of catWizardTags" class="cw-tag">
            {{ tag }}
            <i *ngIf="catWizardMode !== 'view'" class="isax isax-close-circle"
               (click)="catWizardRemoveTag(tag)"></i>
          </span>
          <input *ngIf="catWizardMode !== 'view'"
                 type="text" class="cw-tag-input" placeholder="Ajouter un mot-cl\xE9..."
                 [(ngModel)]="catWizardTagInput" [ngModelOptions]="{standalone:true}"
                 (keydown)="catWizardAddTag($event)">
        </div>
        <span class="cw-hint">Appuyez sur Entr\xE9e pour ajouter un mot-cl\xE9</span>
      </div>

      <!-- Formations incluses -->
      <div class="cw-section-label">Formations incluses</div>

      <!-- S\xE9lection courante -->
      <div class="cw-strip">
        <ng-container *ngIf="catWizardSelectedFormations.length; else catNoSel">
          <span *ngFor="let f of catWizardSelectedFormations" class="cw-tag">
            {{ f.titre }}
            <i *ngIf="catWizardMode !== 'view'" class="isax isax-close-circle"
               (click)="catWizardRemoveFormation(f)"></i>
          </span>
        </ng-container>
        <ng-template #catNoSel>
          <span class="cw-strip-hint">Aucune formation s\xE9lectionn\xE9e</span>
        </ng-template>
      </div>

      <!-- Pool de s\xE9lection -->
      <div class="cw-pool" *ngIf="catWizardMode !== 'view'">
        <div class="cw-pool__search">
          <i class="isax isax-search-normal-1"></i>
          <input type="search" placeholder="Rechercher une formation..."
                 [(ngModel)]="catWizardPoolSearch" [ngModelOptions]="{standalone:true}">
        </div>
        <div class="cw-pool__list">
          <div *ngIf="wizardLoadingFormations" class="cw-pool__empty">Chargement...</div>
          <div *ngFor="let f of catWizardPoolFiltered" class="cw-pool__item"
               [class.checked]="isCatFormationSelected(f)"
               (click)="catWizardToggleFormation(f)">
            <div class="cw-pool__check" [class.on]="isCatFormationSelected(f)">
              <i *ngIf="isCatFormationSelected(f)" class="isax isax-tick-circle"></i>
            </div>
            <div class="cw-pool__info">
              <div class="cw-pool__name">{{ f.titre }}</div>
              <div class="cw-pool__meta">
                {{ f.duree_totale ? (f.duree_totale + 'h') : '' }}
                {{ f.categorie?.nom ? '\xB7 ' + f.categorie?.nom : '' }}
              </div>
            </div>
          </div>
          <div *ngIf="!wizardLoadingFormations && !catWizardPoolFiltered.length" class="cw-pool__empty">
            Aucune formation trouv\xE9e
          </div>
        </div>
      </div>

      <!-- Visibilit\xE9 -->
      <div class="cw-section-label" style="margin-top:12px">Visibilit\xE9</div>
      <div class="cw-vis-row">
        <div class="cw-vis-card" [class.selected]="catWizardVisibility === 'entreprise'"
             (click)="catWizardMode !== 'view' && (catWizardVisibility = 'entreprise')">
          <i class="isax isax-buildings-2"></i>
          <div class="cw-vis-card__label">Mon entreprise</div>
          <div class="cw-vis-card__sub">Accessible uniquement aux collaborateurs</div>
        </div>
        <div class="cw-vis-card" [class.selected]="catWizardVisibility === 'public'"
             (click)="catWizardMode !== 'view' && (catWizardVisibility = 'public')">
          <i class="isax isax-global"></i>
          <div class="cw-vis-card__label">Public</div>
          <div class="cw-vis-card__sub">Visible par tous les apprenants</div>
        </div>
      </div>

      <!-- Error -->
      <div *ngIf="catWizardError" class="cw-error">
        <i class="isax isax-warning-2"></i> {{ catWizardError }}
      </div>

    </div>

    <!-- Footer -->
    <div class="cw-foot">
      <button type="button" class="cw-btn-ghost" (click)="closeCatWizard()">
        {{ catWizardMode === 'view' ? 'Fermer' : 'Annuler' }}
      </button>
      <div style="flex:1"></div>
      <ng-container *ngIf="catWizardMode !== 'view'">
        <button type="button" class="cw-btn-draft"
                [disabled]="catWizardSaving || catWizardForm.invalid"
                (click)="catWizardSubmit(true)">
          <i class="isax isax-document"></i>
          {{ catWizardSaving ? 'Enregistrement...' : 'Enregistrer en brouillon' }}
        </button>
        <button type="button" class="cw-btn-primary"
                [disabled]="catWizardSaving || catWizardForm.invalid"
                (click)="catWizardSubmit(false)">
          <i class="isax isax-send-2"></i>
          {{ catWizardSaving ? 'Publication...' : 'Publier' }}
        </button>
      </ng-container>
    </div>

  </div>
</div>
`, styles: ['/* src/app/features/adminrh/adminrh-course/adminrh-course.component.scss */\n.ac-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ac-topbar {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-tab {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ac-tab i {\n  font-size: 15px;\n}\n.ac-tab.active {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ac-tab:hover:not(.active) {\n  color: #111827;\n}\n.ac-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-search {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ac-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ac-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ac-search__input:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.ac-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.ac-chip:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ac-chip--on {\n  background: #E6F1FB;\n  border-color: #85B7EB;\n  color: #0C447C;\n}\n.ac-spacer {\n  margin-left: auto;\n}\n.ac-view-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-btn.active,\n.ac-view-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ac-add-btn:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ac-add-btn i {\n  font-size: 13px;\n}\n.ac-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ac-kpi {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ac-kpi__label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.ac-kpi__label i {\n  font-size: 13px;\n}\n.ac-kpi__val {\n  font-size: 22px;\n  font-weight: 500;\n  color: #111827;\n}\n.ac-kpi__delta {\n  font-size: 11px;\n  margin-top: 2px;\n}\n.ac-kpi__delta.up {\n  color: #3B6D11;\n}\n.ac-kpi__delta.down {\n  color: #A32D2D;\n}\n.ac-kpi__delta.neutral {\n  color: #9ca3af;\n}\n.ac-skeletons {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n}\n.ac-skeleton-card {\n  height: 220px;\n  border-radius: 12px;\n  background: #f3f4f6;\n  animation: ac-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes ac-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-alert {\n  margin: 12px 14px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n  background: #f9fafb;\n}\n.ac-fcard {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.15s;\n}\n.ac-fcard:hover {\n  border-color: #aec6e4;\n}\n.ac-fcard__thumb {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  position: relative;\n  overflow: hidden;\n}\n.ac-fcard__thumb[data-th=blue] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ac-fcard__thumb[data-th=teal] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ac-fcard__thumb[data-th=purple] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ac-fcard__thumb[data-th=amber] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ac-fcard__thumb[data-th=coral] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.ac-fcard__thumb[data-th=green] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ac-fcard__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-fcard__body {\n  padding: 10px 12px;\n  flex: 1;\n}\n.ac-fcard__cat {\n  font-size: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.ac-fcard__cat[data-cat=tech] {\n  color: #0C447C;\n}\n.ac-fcard__cat[data-cat=rh] {\n  color: #085041;\n}\n.ac-fcard__cat[data-cat=mgmt] {\n  color: #534AB7;\n}\n.ac-fcard__cat[data-cat=fin] {\n  color: #633806;\n}\n.ac-fcard__cat[data-cat=default] {\n  color: #4b5563;\n}\n.ac-fcard__title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n.ac-fcard__meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ac-fcard__meta span {\n  font-size: 11px;\n  color: #4b5563;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-fcard__meta span i {\n  font-size: 12px;\n}\n.ac-fcard__footer {\n  padding: 8px 12px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-fcard__actions {\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n}\n.ac-status {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ac-status[data-s=pub] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=draft] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=pending] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-status[data-s=plan] {\n  background: #EEF2FF;\n  color: #3730A3;\n}\n.ac-status[data-s=live] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=done] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=cancel] {\n  background: #FEF2F2;\n  color: #991B1B;\n}\n.ac-prog {\n  flex: 1;\n  margin: 0 6px;\n}\n.ac-prog__bar {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ac-prog__fill {\n  height: 100%;\n  border-radius: 4px;\n  background: #185FA5;\n}\n.ac-prog__txt {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: right;\n  margin-top: 2px;\n}\n.ac-actions {\n  display: flex;\n  gap: 5px;\n}\n.ac-act {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-act:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-act--del {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ac-act--del:hover {\n  background: #fef2f2;\n}\n.ac-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ac-table th {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ac-table td {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ac-table tr:last-child td {\n  border-bottom: none;\n}\n.ac-table tr:hover td {\n  background: #f9fafb;\n}\n.ac-table-name {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-table-sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ac-empty {\n  text-align: center;\n  padding: 40px 14px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ac-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ac-empty--span {\n  grid-column: 1/-1;\n}\n.ac-empty-tab {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 14px;\n  gap: 12px;\n  color: #9ca3af;\n}\n.ac-empty-tab i {\n  font-size: 2.5rem;\n}\n.ac-empty-tab p {\n  font-size: 14px;\n}\n.ac-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ac-pager__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-pager__btns {\n  display: flex;\n  gap: 4px;\n}\n.ac-pager__btn {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ac-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ac-pager__btn.active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ac-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ac-toolbar--chips {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-top: none;\n  background: #fff;\n  gap: 6px;\n}\n.ac-view-group {\n  display: inline-flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ac-view-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-toggle i {\n  font-size: 14px;\n}\n.ac-view-toggle.active {\n  background: #f3f4f6;\n  color: #111827;\n  font-weight: 500;\n}\n.ac-view-toggle:hover:not(.active) {\n  background: #f9fafb;\n}\n.ac-sessions-list {\n  padding: 10px 14px;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ac-session-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: border-color 0.15s;\n}\n.ac-session-row:hover {\n  border-color: #aec6e4;\n}\n.ac-session-date {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 40px;\n}\n.ac-session-date__day {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.ac-session-date__month {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ac-session-info {\n  flex: 1;\n  min-width: 0;\n}\n.ac-session-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ac-session-meta {\n  display: flex;\n  gap: 10px;\n  margin-top: 3px;\n  flex-wrap: wrap;\n}\n.ac-session-meta span {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-session-meta span i {\n  font-size: 12px;\n}\n.ac-session-badges {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ac-session-places {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ac-cal {\n  padding: 12px 14px 14px;\n  background: #f9fafb;\n}\n.ac-cal__nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.ac-cal__nav-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ac-cal__nav-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-cal__nav-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ac-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.ac-cal__head {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 0 6px;\n}\n.ac-cal__cell {\n  min-height: 80px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 5px 5px 4px;\n  overflow: hidden;\n  transition: border-color 0.12s;\n}\n.ac-cal__cell:hover {\n  border-color: #aec6e4;\n}\n.ac-cal__cell--other {\n  background: #f9fafb;\n}\n.ac-cal__cell--other .ac-cal__day {\n  color: #9ca3af;\n}\n.ac-cal__cell--today {\n  border-color: #185FA5;\n}\n.ac-cal__cell--today .ac-cal__day {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n}\n.ac-cal__day {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 4px;\n  display: block;\n}\n.ac-cal__events {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ac-cal__event {\n  font-size: 10px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #0C447C;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ac-cal__event--dist {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-cal__event--hybr {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.wz-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.wz-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-head__text {\n  flex: 1;\n}\n.wz-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.wz-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.wz-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.wz-stepper {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-step {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.wz-step__circle {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.wz-step__circle.active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.wz-step__circle.done {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.wz-step__label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.wz-step__label.active {\n  color: #185FA5;\n}\n.wz-step__label.done {\n  color: #3B6D11;\n}\n.wz-step__line {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.wz-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.wz-body::-webkit-scrollbar {\n  width: 4px;\n}\n.wz-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wz-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.wz-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.wz-field--full {\n  grid-column: 1/-1;\n}\n.wz-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.wz-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-req {\n  color: #E24B4A;\n}\n.wz-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.wz-input:focus {\n  border-color: #185FA5;\n  box-shadow: 0 0 0 2px #E6F1FB;\n}\n.wz-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.wz-textarea {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n.wz-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-domain-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.wz-domain-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.wz-domain-card i {\n  font-size: 20px;\n}\n.wz-domain-card span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-domain-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.wz-domain-card.selected {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.wz-domain-card.selected span {\n  color: #0C447C;\n}\n.wz-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.wz-strip__hint {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.wz-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  border: 0.5px solid #85B7EB;\n  font-size: 12px;\n  color: #0C447C;\n}\n.wz-chip i {\n  font-size: 11px;\n  cursor: pointer;\n  color: #378ADD;\n}\n.wz-chip i:hover {\n  color: #0C447C;\n}\n.wz-pool {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.wz-pool__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-pool__search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.wz-pool__search input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.wz-pool__list {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.wz-pool__list::-webkit-scrollbar {\n  width: 3px;\n}\n.wz-pool__list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.wz-pool__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.wz-pool__item:last-child {\n  border-bottom: none;\n}\n.wz-pool__item:hover,\n.wz-pool__item.checked {\n  background: #f9fafb;\n}\n.wz-pool__check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.wz-pool__check.on {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.wz-pool__thumb {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-pool__thumb[data-th=blue] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.wz-pool__thumb[data-th=teal] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.wz-pool__thumb[data-th=purple] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-pool__thumb[data-th=amber] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.wz-pool__thumb[data-th=coral] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.wz-pool__thumb[data-th=green] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.wz-pool__info {\n  flex: 1;\n  min-width: 0;\n}\n.wz-pool__name {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wz-pool__meta {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-pool__tag {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #4b5563;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.wz-pool__empty {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.wz-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #f3f4f6;\n}\n.wz-toggle-row:last-child {\n  border-bottom: none;\n}\n.wz-toggle-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-toggle-sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.wz-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.wz-toggle::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.wz-toggle.on {\n  background: #185FA5;\n}\n.wz-toggle.on::after {\n  left: 19px;\n}\n.wz-info-banner {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  border: 0.5px solid #85B7EB;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #0C447C;\n  line-height: 1.5;\n}\n.wz-info-banner i {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-recap-card {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.wz-recap-title {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row:last-child {\n  border-bottom: none;\n}\n.wz-rl {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-recap-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.wz-rc {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.wz-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.wz-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.wz-foot__info {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.wz-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.wz-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #185FA5;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-primary i {\n  font-size: 13px;\n}\n.wz-btn-primary:hover {\n  opacity: 0.9;\n}\n.wz-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wz-btn-success {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-success i {\n  font-size: 13px;\n}\n.wz-btn-success:hover {\n  opacity: 0.9;\n}\n.wz-btn-success:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.cw-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 600px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.cw-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.cw-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-head__text {\n  flex: 1;\n}\n.cw-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.cw-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.cw-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.cw-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cw-body::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cw-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.cw-upload-zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 1.5px dashed #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cw-upload-zone i {\n  font-size: 28px;\n  color: #9ca3af;\n}\n.cw-upload-zone span {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.cw-upload-zone__hint {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n}\n.cw-upload-zone:hover {\n  border-color: #79C9AB;\n  background: #E1F5EE;\n}\n.cw-upload-zone:hover i {\n  color: #0F6E56;\n}\n.cw-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.cw-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cw-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-req {\n  color: #E24B4A;\n}\n.cw-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.cw-input:focus {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.cw-textarea {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n.cw-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-toggle-inline {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n}\n.cw-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.cw-toggle::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.cw-toggle.on {\n  background: #0F6E56;\n}\n.cw-toggle.on::after {\n  left: 19px;\n}\n.cw-toggle-label {\n  font-size: 12px;\n  color: #4b5563;\n}\n.cw-section-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.cw-domain-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-domain-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.cw-domain-card i {\n  font-size: 20px;\n  color: #9ca3af;\n}\n.cw-domain-card span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-domain-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-domain-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-domain-card.selected i {\n  color: #0F6E56;\n}\n.cw-domain-card.selected span {\n  color: #0F6E56;\n}\n.cw-level-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-level-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cw-level-card__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-level-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.cw-level-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-level-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-level-card.selected .cw-level-card__label {\n  color: #0F6E56;\n}\n.cw-level-card.selected .cw-level-card__sub {\n  color: rgb(148.5, 219.5, 194.65);\n}\n.cw-tags-box {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 8px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.cw-tags-box:focus-within {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  background: #E1F5EE;\n  border: 0.5px solid #79C9AB;\n  font-size: 12px;\n  color: #0F6E56;\n}\n.cw-tag i {\n  font-size: 11px;\n  cursor: pointer;\n  color: #79C9AB;\n}\n.cw-tag i:hover {\n  color: #0F6E56;\n}\n.cw-tag-input {\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #111827;\n  background: transparent;\n  flex: 1;\n  min-width: 100px;\n  font-family: inherit;\n}\n.cw-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 8px;\n}\n.cw-strip-hint {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.cw-pool {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.cw-pool__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.cw-pool__search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.cw-pool__search input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.cw-pool__list {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.cw-pool__list::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-pool__list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.cw-pool__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cw-pool__item:last-child {\n  border-bottom: none;\n}\n.cw-pool__item:hover,\n.cw-pool__item.checked {\n  background: #E1F5EE;\n}\n.cw-pool__check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.cw-pool__check.on {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.cw-pool__info {\n  flex: 1;\n  min-width: 0;\n}\n.cw-pool__name {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-pool__meta {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-pool__empty {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.cw-vis-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cw-vis-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cw-vis-card i {\n  font-size: 20px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.cw-vis-card__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-vis-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-vis-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-vis-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-vis-card.selected i {\n  color: #0F6E56;\n}\n.cw-vis-card.selected .cw-vis-card__label {\n  color: #0F6E56;\n}\n.cw-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cw-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.cw-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.cw-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.cw-btn-draft {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.cw-btn-draft i {\n  font-size: 13px;\n}\n.cw-btn-draft:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.cw-btn-draft:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #0F6E56;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-primary i {\n  font-size: 13px;\n}\n.cw-btn-primary:hover {\n  opacity: 0.9;\n}\n.cw-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ac-card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-skeletons {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ac-card-grid {\n    grid-template-columns: 1fr;\n  }\n  .ac-kpi-row {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.ac-act--arch {\n  color: #BA7517;\n}\n.ac-act--arch:hover {\n  border-color: #BA7517;\n  color: #BA7517;\n  background: #FAEEDA;\n}\n/*# sourceMappingURL=adminrh-course.component.css.map */\n'] }]
  }], () => [{ type: FormationService }, { type: ParcoursService }, { type: SessionFormationService }, { type: CatalogueService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhCourseComponent, { className: "AdminrhCourseComponent", filePath: "src/app/features/adminrh/adminrh-course/adminrh-course.component.ts", lineNumber: 30 });
})();
export {
  AdminrhCourseComponent
};
//# sourceMappingURL=chunk-YMYSVBDA.js.map
