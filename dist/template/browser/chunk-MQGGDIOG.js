import {
  CatalogueService
} from "./chunk-XZBJPFDI.js";
import {
  ParcoursService
} from "./chunk-DFE3I7YI.js";
import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  UserService
} from "./chunk-3PJKQEYW.js";
import {
  SessionFormationService
} from "./chunk-RK3Q2J3M.js";
import {
  MatSortModule
} from "./chunk-VL5HRZ2I.js";
import {
  CustomPaginationComponent
} from "./chunk-QBIBOWET.js";
import "./chunk-M25A5D3F.js";
import {
  FormationService
} from "./chunk-MHGWTEI2.js";
import "./chunk-4TVHDBGR.js";
import "./chunk-MQ5W77M6.js";
import {
  HasPermissionDirective
} from "./chunk-VS3ZYZPZ.js";
import "./chunk-HPF6XDYM.js";
import "./chunk-GD4TWLVQ.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-OVFIVR43.js";
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
} from "./chunk-IKOSZIEY.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  SlicePipe,
  TitleCasePipe
} from "./chunk-5DIP3EXV.js";
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
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-course/adminrh-course.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [1, 2, 3, 4, 5];
var _c2 = () => [1, 2, 3, 4, 5, 6];
var _c3 = () => [1, 2, 3];
var _c4 = (a0) => [a0];
var _c5 = () => ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
var _c6 = () => ({ n: 1, l: "Informations" });
var _c7 = () => ({ n: 2, l: "Formations" });
var _c8 = () => ({ n: 3, l: "Param\xE8tres" });
var _c9 = () => ({ n: 4, l: "R\xE9capitulatif" });
var _c10 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function AdminrhCourseComponent_ng_container_14_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 37);
    \u0275\u0275element(2, "i", 38);
    \u0275\u0275text(3, " Nouvelle formation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorCourseAdd);
  }
}
function AdminrhCourseComponent_ng_container_14_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function AdminrhCourseComponent_ng_container_14_div_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 43);
  }
}
function AdminrhCourseComponent_ng_container_14_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_14_div_48_div_1_Template, 1, 0, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function AdminrhCourseComponent_ng_container_14_table_49_tr_16_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 63);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_table_49_tr_16_ng_container_37_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const f_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openParticipants(f_r4));
    });
    \u0275\u0275element(2, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhCourseComponent_ng_container_14_table_49_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 46)(3, "a", 47);
    \u0275\u0275element(4, "img", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "a", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 50)(9, "span");
    \u0275\u0275element(10, "i", 51);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275element(13, "i", 52);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td")(16, "span", 53);
    \u0275\u0275element(17, "i", 23);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "span", 53);
    \u0275\u0275element(24, "i", 21);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "span", 54);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "div", 55)(31, "a", 56);
    \u0275\u0275element(32, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 58);
    \u0275\u0275element(34, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 60);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_table_49_tr_16_Template_button_click_35_listener() {
      const f_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePublishStatus(f_r4));
    });
    \u0275\u0275element(36, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, AdminrhCourseComponent_ng_container_14_table_49_tr_16_ng_container_37_Template, 3, 0, "ng-container", 32);
    \u0275\u0275elementStart(38, "button", 61);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_table_49_tr_16_Template_button_click_38_listener() {
      const f_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.archiveFormation(f_r4));
    });
    \u0275\u0275element(39, "i", 62);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.routes.courseDetails + "/" + f_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDefaultImage(f_r4), \u0275\u0275sanitizeUrl)("alt", f_r4.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.routes.courseDetails + "/" + f_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", f_r4.nombre_modules || 0, " modules");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r4.niveau || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", f_r4.nb_participants || 0, "/", f_r4.nb_max_participants || "\u221E");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.isFormationGratuite(f_r4) ? "ac-badge ac-badge--free" : "ac-badge ac-badge--paid");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrix(f_r4.prix), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDuree(f_r4));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", ctx_r1.getStatusKey(f_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusText(f_r4));
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.routes.courseDetails + "/" + f_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "/courses/instructor-course-edit/" + f_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ac-act--warn", f_r4.est_publie)("ac-act--ok", !f_r4.est_publie);
    \u0275\u0275property("title", f_r4.est_publie ? "D\xE9publier" : "Publier");
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + (f_r4.est_publie ? "isax-eye-slash" : "isax-send-2"));
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "assigner formations");
  }
}
function AdminrhCourseComponent_ng_container_14_table_49_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 64);
    \u0275\u0275element(2, "i", 65);
    \u0275\u0275text(3, " Aucune formation trouv\xE9e ");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_ng_container_14_table_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 44)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Apprenants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Co\xFBt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, AdminrhCourseComponent_ng_container_14_table_49_tr_16_Template, 40, 25, "tr", 45)(17, AdminrhCourseComponent_ng_container_14_table_49_tr_17_Template, 4, 0, "tr", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.tableData)("ngForTrackBy", ctx_r1.trackByFormation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tableData.length);
  }
}
function AdminrhCourseComponent_ng_container_14_div_50_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_div_50_button_6_Template_button_click_0_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(i_r8 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.currentPage === i_r8 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r8 + 1);
  }
}
function AdminrhCourseComponent_ng_container_14_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "span", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68)(4, "button", 69);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_div_50_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminrhCourseComponent_ng_container_14_div_50_button_6_Template, 2, 3, "button", 71);
    \u0275\u0275elementStart(7, "button", 69);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_14_div_50_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 72);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r1.skip + 1, "\u2013", ctx_r1.skip + ctx_r1.tableData.length, " sur ", ctx_r1.totalData);
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
    \u0275\u0275elementStart(1, "div", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275element(4, "i", 18);
    \u0275\u0275text(5, " Publi\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20);
    \u0275\u0275text(9, "en ligne");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 16)(11, "div", 17);
    \u0275\u0275element(12, "i", 21);
    \u0275\u0275text(13, " En attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 19);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 20);
    \u0275\u0275text(17, "\xE0 valider");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 16)(19, "div", 17);
    \u0275\u0275element(20, "i", 22);
    \u0275\u0275text(21, " Brouillons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 19);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20);
    \u0275\u0275text(25, "non publi\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 16)(27, "div", 17);
    \u0275\u0275element(28, "i", 23);
    \u0275\u0275text(29, " Apprenants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 19);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20);
    \u0275\u0275text(33, "inscrits total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 24)(35, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_ng_container_14_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchDataValue, $event) || (ctx_r1.searchDataValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCourseComponent_ng_container_14_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchData($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 26);
    \u0275\u0275listener("change", function AdminrhCourseComponent_ng_container_14_Template_select_change_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus($event.target.value));
    });
    \u0275\u0275elementStart(37, "option", 27);
    \u0275\u0275text(38, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 28);
    \u0275\u0275text(40, "Publi\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 29);
    \u0275\u0275text(42, "En attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 30);
    \u0275\u0275text(44, "Brouillons");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "div", 31);
    \u0275\u0275template(46, AdminrhCourseComponent_ng_container_14_ng_container_46_Template, 4, 1, "ng-container", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, AdminrhCourseComponent_ng_container_14_div_47_Template, 3, 1, "div", 33)(48, AdminrhCourseComponent_ng_container_14_div_48_Template, 2, 2, "div", 34)(49, AdminrhCourseComponent_ng_container_14_table_49_Template, 18, 3, "table", 35)(50, AdminrhCourseComponent_ng_container_14_div_50_Template, 9, 6, "div", 36);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.getActiveFormationsCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getPendingFormationsCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getDraftFormationsCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getTotalParticipants());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchDataValue);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance(11);
    \u0275\u0275property("appHasPermission", "creer formations");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.totalData > ctx_r1.pageSize);
  }
}
function AdminrhCourseComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.publishTarget = null);
    });
    \u0275\u0275elementStart(1, "div", 75);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 76);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 77)(9, "button", 78);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.publishTarget = null);
    });
    \u0275\u0275text(10, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 79);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_15_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmTogglePublish());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ac-confirm-icon--warn", ctx_r1.publishTarget == null ? null : ctx_r1.publishTarget.est_publie)("ac-confirm-icon--ok", !(ctx_r1.publishTarget == null ? null : ctx_r1.publishTarget.est_publie));
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + ((ctx_r1.publishTarget == null ? null : ctx_r1.publishTarget.est_publie) ? "isax-eye-slash" : "isax-send-2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r1.publishTarget == null ? null : ctx_r1.publishTarget.est_publie) ? "D\xE9publier" : "Publier", " la formation");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.publishTarget == null ? null : ctx_r1.publishTarget.est_publie) ? "Cette formation ne sera plus visible par les apprenants." : "Cette formation sera visible par tous les apprenants.");
    \u0275\u0275advance(4);
    \u0275\u0275classMap((ctx_r1.publishTarget == null ? null : ctx_r1.publishTarget.est_publie) ? "ac-btn-warn" : "ac-btn-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.publishTarget == null ? null : ctx_r1.publishTarget.est_publie) ? "D\xE9publier" : "Publier", " ");
  }
}
function AdminrhCourseComponent_ng_container_16_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 85);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_16_ng_container_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openWizardCreate());
    });
    \u0275\u0275element(2, "i", 38);
    \u0275\u0275text(3, " Nouveau parcours ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhCourseComponent_ng_container_16_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 87);
  }
}
function AdminrhCourseComponent_ng_container_16_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_16_div_46_div_1_Template, 1, 0, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c2));
  }
}
function AdminrhCourseComponent_ng_container_16_div_47_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 103);
  }
  if (rf & 2) {
    const p_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r13.image_url, \u0275\u0275sanitizeUrl)("alt", p_r13.nom);
  }
}
function AdminrhCourseComponent_ng_container_16_div_47_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function AdminrhCourseComponent_ng_container_16_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92);
    \u0275\u0275template(2, AdminrhCourseComponent_ng_container_16_div_47_div_1_img_2_Template, 1, 2, "img", 93)(3, AdminrhCourseComponent_ng_container_16_div_47_div_1_i_3_Template, 1, 0, "i", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 95)(5, "div", 96);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 97);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 98)(10, "span");
    \u0275\u0275element(11, "i", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275element(14, "i", 6);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275element(17, "i", 23);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 99)(20, "span", 54);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 100)(23, "button", 101);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_16_div_47_div_1_Template_button_click_23_listener() {
      const p_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openWizardView(p_r13));
    });
    \u0275\u0275element(24, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 102);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_16_div_47_div_1_Template_button_click_25_listener() {
      const p_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openWizardEdit(p_r13));
    });
    \u0275\u0275element(26, "i", 59);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-th", p_r13.actif ? "blue" : "amber");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r13.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r13.image_url);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-cat", p_r13.actif ? "tech" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getNiveauLabel(p_r13.niveau));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13.nom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", p_r13.duree_estimee, "h");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (p_r13.formations == null ? null : p_r13.formations.length) || 0, " formations");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (p_r13.users == null ? null : p_r13.users.length) || 0, " inscrits");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", p_r13.actif ? "pub" : "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r13.actif ? "Actif" : "Inactif");
  }
}
function AdminrhCourseComponent_ng_container_16_div_47_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun parcours trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_ng_container_16_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_16_div_47_div_1_Template, 27, 11, "div", 89)(2, AdminrhCourseComponent_ng_container_16_div_47_div_2_Template, 4, 0, "div", 90);
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
function AdminrhCourseComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 80);
    \u0275\u0275element(3, "i", 81);
    \u0275\u0275elementStart(4, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_ng_container_16_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.parcoursSearch, $event) || (ctx_r1.parcoursSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCourseComponent_ng_container_16_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyParcoursFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 83);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.parcoursStatut = "";
      return \u0275\u0275resetView(ctx_r1.applyParcoursFilters());
    });
    \u0275\u0275text(6, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 83);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.parcoursStatut = "actif";
      return \u0275\u0275resetView(ctx_r1.applyParcoursFilters());
    });
    \u0275\u0275text(8, "Actifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 83);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_16_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.parcoursStatut = "archive";
      return \u0275\u0275resetView(ctx_r1.applyParcoursFilters());
    });
    \u0275\u0275text(10, "Archiv\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 31);
    \u0275\u0275template(12, AdminrhCourseComponent_ng_container_16_ng_container_12_Template, 4, 0, "ng-container", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15)(14, "div", 16)(15, "div", 17);
    \u0275\u0275element(16, "i", 7);
    \u0275\u0275text(17, " Total parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 19);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 20);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 16)(23, "div", 17);
    \u0275\u0275element(24, "i", 18);
    \u0275\u0275text(25, " Actifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 19);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20);
    \u0275\u0275text(29, "en cours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 16)(31, "div", 17);
    \u0275\u0275element(32, "i", 6);
    \u0275\u0275text(33, " R\xE9sultats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 19);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 20);
    \u0275\u0275text(37, "filtr\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 16)(39, "div", 17);
    \u0275\u0275element(40, "i", 23);
    \u0275\u0275text(41, " Inactifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 19);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 20);
    \u0275\u0275text(45, "non actifs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(46, AdminrhCourseComponent_ng_container_16_div_46_Template, 2, 2, "div", 34)(47, AdminrhCourseComponent_ng_container_16_div_47_Template, 3, 2, "div", 84);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.parcoursSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275advance();
    \u0275\u0275classProp("ac-chip--on", ctx_r1.parcoursStatut === "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.parcoursStatut === "actif");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.parcoursStatut === "archive");
    \u0275\u0275advance(3);
    \u0275\u0275property("appHasPermission", "creer parcours");
    \u0275\u0275advance(7);
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
function AdminrhCourseComponent_ng_container_17_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 85);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_ng_container_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCatWizardCreate());
    });
    \u0275\u0275element(2, "i", 38);
    \u0275\u0275text(3, " Nouveau catalogue ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function AdminrhCourseComponent_ng_container_17_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_button_12_Template_button_click_0_listener() {
      const t_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.catalogueType = t_r17;
      return \u0275\u0275resetView(ctx_r1.applyCatalogueFilters());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ac-chip--on", ctx_r1.catalogueType === t_r17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r17);
  }
}
function AdminrhCourseComponent_ng_container_17_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 87);
  }
}
function AdminrhCourseComponent_ng_container_17_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_17_div_30_div_1_Template, 1, 0, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c3));
  }
}
function AdminrhCourseComponent_ng_container_17_div_31_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r19.duree_totale, "h");
  }
}
function AdminrhCourseComponent_ng_container_17_div_31_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 110);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r19.metadata.niveau);
  }
}
function AdminrhCourseComponent_ng_container_17_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 95)(4, "div", 96);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 98)(9, "span");
    \u0275\u0275element(10, "i", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminrhCourseComponent_ng_container_17_div_31_div_1_span_12_Template, 3, 1, "span", 10)(13, AdminrhCourseComponent_ng_container_17_div_31_div_1_span_13_Template, 3, 1, "span", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 99)(15, "span", 54);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 100)(18, "button", 101);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_div_31_div_1_Template_button_click_18_listener() {
      const c_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCatWizardView(c_r19));
    });
    \u0275\u0275element(19, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 102);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_div_31_div_1_Template_button_click_20_listener() {
      const c_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCatWizardEdit(c_r19));
    });
    \u0275\u0275element(21, "i", 59);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-th", ctx_r1.getCatalogueThumb(c_r19));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-cat", "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r19.type || "G\xE9n\xE9ral");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r19.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", c_r19.nombre_formations || (c_r19.formations == null ? null : c_r19.formations.length) || 0, " formations");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r19.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r19.metadata == null ? null : c_r19.metadata.niveau);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", c_r19.est_publie ? "pub" : "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r19.est_publie ? "Publi\xE9" : "Brouillon", " ");
  }
}
function AdminrhCourseComponent_ng_container_17_div_31_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun catalogue trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_ng_container_17_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_17_div_31_div_1_Template, 22, 9, "div", 89)(2, AdminrhCourseComponent_ng_container_17_div_31_div_2_Template, 4, 0, "div", 90);
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
function AdminrhCourseComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 80);
    \u0275\u0275element(3, "i", 81);
    \u0275\u0275elementStart(4, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_ng_container_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.catalogueSearch, $event) || (ctx_r1.catalogueSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCourseComponent_ng_container_17_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyCatalogueFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "div", 31);
    \u0275\u0275elementStart(6, "button", 106);
    \u0275\u0275element(7, "i", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminrhCourseComponent_ng_container_17_ng_container_8_Template, 4, 0, "ng-container", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 108)(10, "button", 83);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_17_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.catalogueType = "";
      return \u0275\u0275resetView(ctx_r1.applyCatalogueFilters());
    });
    \u0275\u0275text(11, "Tout");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminrhCourseComponent_ng_container_17_button_12_Template, 2, 3, "button", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15)(14, "div", 16)(15, "div", 17);
    \u0275\u0275element(16, "i", 8);
    \u0275\u0275text(17, " Total catalogues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 19);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 20);
    \u0275\u0275text(21, "catalogues");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 16)(23, "div", 17);
    \u0275\u0275element(24, "i", 6);
    \u0275\u0275text(25, " R\xE9sultats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 19);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20);
    \u0275\u0275text(29, "filtr\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, AdminrhCourseComponent_ng_container_17_div_30_Template, 2, 2, "div", 34)(31, AdminrhCourseComponent_ng_container_17_div_31_Template, 3, 2, "div", 84);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.catalogueSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("appHasPermission", "creer catalogues");
    \u0275\u0275advance(2);
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
function AdminrhCourseComponent_ng_container_18_div_58_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 87);
  }
}
function AdminrhCourseComponent_ng_container_18_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, AdminrhCourseComponent_ng_container_18_div_58_div_1_Template, 1, 0, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c3));
  }
}
function AdminrhCourseComponent_ng_container_18_ng_container_59_div_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r21.formateur.name);
  }
}
function AdminrhCourseComponent_ng_container_18_ng_container_59_div_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 131);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r21.lieu);
  }
}
function AdminrhCourseComponent_ng_container_18_ng_container_59_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "div", 121)(2, "span", 122);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 123);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 124)(7, "div", 125);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 126)(10, "span");
    \u0275\u0275element(11, "i", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminrhCourseComponent_ng_container_18_ng_container_59_div_2_span_13_Template, 3, 1, "span", 10)(14, AdminrhCourseComponent_ng_container_18_ng_container_59_div_2_span_14_Template, 3, 1, "span", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 127)(16, "span", 54);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 128);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "a", 129);
    \u0275\u0275text(21, " Inscrire ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getSessionDay(s_r21.date_debut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getSessionMonth(s_r21.date_debut));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r21.titre || (s_r21.formation == null ? null : s_r21.formation.titre) || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatSessionDate(s_r21.date_debut));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r21.formateur == null ? null : s_r21.formateur.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r21.lieu);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", s_r21.type === "distanciel" ? "pending" : s_r21.type === "hybride" ? "plan" : "pub");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r21.type_display || s_r21.type || "Pr\xE9sentiel", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", s_r21.nombre_inscrits ?? 0, "/", s_r21.capacite_max ?? "?", " places ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c4, ctx_r1.routes.adminrhSession));
  }
}
function AdminrhCourseComponent_ng_container_18_ng_container_59_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275element(1, "i", 133);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune session trouv\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_ng_container_18_ng_container_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 117);
    \u0275\u0275template(2, AdminrhCourseComponent_ng_container_18_ng_container_59_div_2_Template, 22, 13, "div", 118)(3, AdminrhCourseComponent_ng_container_18_ng_container_59_div_3_Template, 4, 0, "div", 119);
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
function AdminrhCourseComponent_ng_container_18_ng_container_60_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r23 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r23);
  }
}
function AdminrhCourseComponent_ng_container_18_ng_container_60_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r24 = ctx.$implicit;
    \u0275\u0275classProp("ac-cal__event--dist", s_r24.type === "distanciel")("ac-cal__event--hybr", s_r24.type === "hybride");
    \u0275\u0275property("title", s_r24.titre || (s_r24.formation == null ? null : s_r24.formation.titre) || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 6, s_r24.titre || (s_r24.formation == null ? null : s_r24.formation.titre) || "\u2014", 0, 20), " ");
  }
}
function AdminrhCourseComponent_ng_container_18_ng_container_60_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142)(1, "span", 143);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 144);
    \u0275\u0275template(4, AdminrhCourseComponent_ng_container_18_ng_container_60_div_12_div_4_Template, 3, 10, "div", 145);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cell_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ac-cal__cell--other", !ctx_r1.isCurrentMonth(cell_r25.date))("ac-cal__cell--today", ctx_r1.isToday(cell_r25.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cell_r25.date.getDate());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", cell_r25.sessions);
  }
}
function AdminrhCourseComponent_ng_container_18_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 134)(2, "div", 135)(3, "button", 136);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_18_ng_container_60_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calendarPrevMonth());
    });
    \u0275\u0275element(4, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 137);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 136);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_18_ng_container_60_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calendarNextMonth());
    });
    \u0275\u0275element(9, "i", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 138);
    \u0275\u0275template(11, AdminrhCourseComponent_ng_container_18_ng_container_60_div_11_Template, 2, 1, "div", 139)(12, AdminrhCourseComponent_ng_container_18_ng_container_60_div_12_Template, 5, 6, "div", 140);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, ctx_r1.calendarMonthLabel));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(5, _c5));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getCalendarDays());
  }
}
function AdminrhCourseComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 80);
    \u0275\u0275element(3, "i", 81);
    \u0275\u0275elementStart(4, "input", 111);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_ng_container_18_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sessionsSearch, $event) || (ctx_r1.sessionsSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCourseComponent_ng_container_18_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applySessionsFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 112)(6, "button", 113);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sessionsView = "list");
    });
    \u0275\u0275element(7, "i", 114);
    \u0275\u0275text(8, " Liste ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 113);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_18_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sessionsView = "calendar");
    });
    \u0275\u0275element(10, "i", 9);
    \u0275\u0275text(11, " Calendrier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 31);
    \u0275\u0275elementStart(13, "a", 37);
    \u0275\u0275element(14, "i", 38);
    \u0275\u0275text(15, " Planifier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 108)(17, "button", 83);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_18_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.sessionsType = "";
      return \u0275\u0275resetView(ctx_r1.applySessionsFilters());
    });
    \u0275\u0275text(18, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 83);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_18_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.sessionsType = "presentiel";
      return \u0275\u0275resetView(ctx_r1.applySessionsFilters());
    });
    \u0275\u0275text(20, "Pr\xE9sentiel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 83);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_18_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.sessionsType = "distanciel";
      return \u0275\u0275resetView(ctx_r1.applySessionsFilters());
    });
    \u0275\u0275text(22, "Distanciel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 83);
    \u0275\u0275listener("click", function AdminrhCourseComponent_ng_container_18_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.sessionsType = "hybride";
      return \u0275\u0275resetView(ctx_r1.applySessionsFilters());
    });
    \u0275\u0275text(24, "Hybride");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17);
    \u0275\u0275element(28, "i", 9);
    \u0275\u0275text(29, " Total sessions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 19);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 16)(35, "div", 17);
    \u0275\u0275element(36, "i", 115);
    \u0275\u0275text(37, " En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 19);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 20);
    \u0275\u0275text(41, "actives");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 16)(43, "div", 17);
    \u0275\u0275element(44, "i", 18);
    \u0275\u0275text(45, " Termin\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 19);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 20);
    \u0275\u0275text(49, "compl\xE8tes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 16)(51, "div", 17);
    \u0275\u0275element(52, "i", 116);
    \u0275\u0275text(53, " Distanciel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 19);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 20);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(58, AdminrhCourseComponent_ng_container_18_div_58_Template, 2, 2, "div", 34)(59, AdminrhCourseComponent_ng_container_18_ng_container_59_Template, 4, 2, "ng-container", 10)(60, AdminrhCourseComponent_ng_container_18_ng_container_60_Template, 13, 6, "ng-container", 10);
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
function AdminrhCourseComponent_div_19_ng_container_13_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 169);
  }
}
function AdminrhCourseComponent_div_19_ng_container_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r27.n);
  }
}
function AdminrhCourseComponent_div_19_ng_container_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 170);
  }
}
function AdminrhCourseComponent_div_19_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 164)(2, "div", 165);
    \u0275\u0275template(3, AdminrhCourseComponent_div_19_ng_container_13_i_3_Template, 1, 0, "i", 166)(4, AdminrhCourseComponent_div_19_ng_container_13_span_4_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 167);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminrhCourseComponent_div_19_ng_container_13_div_7_Template, 1, 0, "div", 168);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r27 = ctx.$implicit;
    const last_r28 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("done", ctx_r1.wizardStep > s_r27.n)("active", ctx_r1.wizardStep === s_r27.n);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep > s_r27.n);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep <= s_r27.n);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.wizardStep === s_r27.n)("done", ctx_r1.wizardStep > s_r27.n);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r27.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r28);
  }
}
function AdminrhCourseComponent_div_19_ng_container_15_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_ng_container_15_div_29_Template_div_click_0_listener() {
      const d_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.wizardMode !== "view" && (ctx_r1.wizardDomain = d_r30.key));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r30 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.wizardDomain === d_r30.key);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", d_r30.icon));
    \u0275\u0275styleProp("color", d_r30.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r30.label);
  }
}
function AdminrhCourseComponent_div_19_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 171)(2, "label", 172);
    \u0275\u0275text(3, "Titre du parcours ");
    \u0275\u0275elementStart(4, "span", 173);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 175)(8, "div", 176)(9, "label", 172);
    \u0275\u0275text(10, "Dur\xE9e estim\xE9e (jours) ");
    \u0275\u0275elementStart(11, "span", 173);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 176)(15, "label", 172);
    \u0275\u0275text(16, "Prix (XOF)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 171)(19, "label", 172);
    \u0275\u0275text(20, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "textarea", 179);
    \u0275\u0275elementStart(22, "span", 180);
    \u0275\u0275text(23, "Visible par les apprenants inscrits");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "label", 181);
    \u0275\u0275text(25, "Domaine ");
    \u0275\u0275elementStart(26, "span", 173);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 182);
    \u0275\u0275template(29, AdminrhCourseComponent_div_19_ng_container_15_div_29_Template, 4, 8, "div", 183);
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
function AdminrhCourseComponent_div_19_ng_container_16_ng_container_4_span_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 199);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_ng_container_16_ng_container_4_span_1_i_2_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const f_r33 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.wizardRemoveFormation(f_r33));
    });
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_ng_container_16_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 197);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AdminrhCourseComponent_div_19_ng_container_16_ng_container_4_span_1_i_2_Template, 1, 0, "i", 198);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r33 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r33.titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardMode !== "view");
  }
}
function AdminrhCourseComponent_div_19_ng_container_16_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhCourseComponent_div_19_ng_container_16_ng_container_4_span_1_Template, 3, 2, "span", 196);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.wizardSelectedFormations);
  }
}
function AdminrhCourseComponent_div_19_ng_container_16_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 200);
    \u0275\u0275text(1, "Aucune formation ajout\xE9e \u2014 s\xE9lectionnez ci-dessous");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_ng_container_16_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_ng_container_16_div_15_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
}
function AdminrhCourseComponent_div_19_ng_container_16_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_ng_container_16_div_15_Template_div_click_0_listener() {
      const f_r35 = \u0275\u0275restoreView(_r34).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.wizardToggleFormation(f_r35));
    });
    \u0275\u0275elementStart(1, "div", 203);
    \u0275\u0275template(2, AdminrhCourseComponent_div_19_ng_container_16_div_15_i_2_Template, 1, 0, "i", 204);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 205);
    \u0275\u0275element(4, "i", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 206)(6, "div", 207);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 208);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 209);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r35 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("checked", ctx_r1.isWizardFormationSelected(f_r35));
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.isWizardFormationSelected(f_r35));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isWizardFormationSelected(f_r35));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-th", ctx_r1.wizardGetFormationThumb(f_r35));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(f_r35.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", f_r35.duree_totale ? f_r35.duree_totale + "h" : "", " ", (f_r35.categorie == null ? null : f_r35.categorie.nom) ? "\xB7 " + (f_r35.categorie == null ? null : f_r35.categorie.nom) : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((f_r35.categorie == null ? null : f_r35.categorie.nom) || "\u2014");
  }
}
function AdminrhCourseComponent_div_19_ng_container_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201);
    \u0275\u0275text(1, " Aucune formation trouv\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 185);
    \u0275\u0275text(2, "Formations s\xE9lectionn\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 186);
    \u0275\u0275template(4, AdminrhCourseComponent_div_19_ng_container_16_ng_container_4_Template, 2, 1, "ng-container", 187)(5, AdminrhCourseComponent_div_19_ng_container_16_ng_template_5_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 185);
    \u0275\u0275text(8, "Catalogue disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 188)(10, "div", 189);
    \u0275\u0275element(11, "i", 190);
    \u0275\u0275elementStart(12, "input", 191);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_div_19_ng_container_16_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.wizardPoolSearch, $event) || (ctx_r1.wizardPoolSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 192);
    \u0275\u0275template(14, AdminrhCourseComponent_div_19_ng_container_16_div_14_Template, 2, 0, "div", 193)(15, AdminrhCourseComponent_div_19_ng_container_16_div_15_Template, 12, 10, "div", 194)(16, AdminrhCourseComponent_div_19_ng_container_16_div_16_Template, 2, 0, "div", 193);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 195);
    \u0275\u0275text(18, "L'ordre des formations d\xE9finit la s\xE9quence du parcours.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noSel_r36 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.wizardSelectedFormations.length)("ngIfElse", noSel_r36);
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
function AdminrhCourseComponent_div_19_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 210)(2, "div", 176)(3, "label", 172);
    \u0275\u0275text(4, "Score minimum requis (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 211);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 176)(7, "label", 172);
    \u0275\u0275text(8, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 212)(10, "option", 213);
    \u0275\u0275text(11, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 213);
    \u0275\u0275text(13, "Inactif");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "label", 214);
    \u0275\u0275text(15, "Options du parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 215)(17, "div", 216)(18, "div", 217)(19, "div", 218);
    \u0275\u0275text(20, "Certificat \xE0 l'issue du parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 219);
    \u0275\u0275text(22, "G\xE9n\xE8re automatiquement un certificat PDF pour les apprenants ayant r\xE9ussi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 220);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_ng_container_17_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardMode !== "view" && ctx_r1.wizardForm.patchValue({ certificat: !ctx_r1.wizardForm.value.certificat }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 216)(25, "div", 217)(26, "div", 218);
    \u0275\u0275text(27, "Progression s\xE9quentielle obligatoire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 219);
    \u0275\u0275text(29, "L'apprenant doit terminer chaque formation avant de passer \xE0 la suivante");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 220);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_ng_container_17_Template_div_click_30_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardMode !== "view" && ctx_r1.wizardForm.patchValue({ sequentielle: !ctx_r1.wizardForm.value.sequentielle }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 216)(32, "div", 217)(33, "div", 218);
    \u0275\u0275text(34, "Notifications de progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 219);
    \u0275\u0275text(36, "Envoie des rappels aux apprenants inactifs depuis plus de 7 jours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 220);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_ng_container_17_Template_div_click_37_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardMode !== "view" && ctx_r1.wizardForm.patchValue({ notifications: !ctx_r1.wizardForm.value.notifications }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 216)(39, "div", 217)(40, "div", 218);
    \u0275\u0275text(41, "Demande de validation RH requise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 219);
    \u0275\u0275text(43, "L'Admin RH doit approuver chaque inscription avant acc\xE8s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 220);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_ng_container_17_Template_div_click_44_listener() {
      \u0275\u0275restoreView(_r37);
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
function AdminrhCourseComponent_div_19_ng_container_18_div_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 233);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r38 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r38.titre);
  }
}
function AdminrhCourseComponent_div_19_ng_container_18_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 231);
    \u0275\u0275template(1, AdminrhCourseComponent_div_19_ng_container_18_div_36_span_1_Template, 2, 1, "span", 232);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.wizardSelectedFormations);
  }
}
function AdminrhCourseComponent_div_19_ng_container_18_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 233);
    \u0275\u0275text(1, "Aucune s\xE9lectionn\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_ng_container_18_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 234);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardError, " ");
  }
}
function AdminrhCourseComponent_div_19_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 221);
    \u0275\u0275element(2, "i", 222);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 223)(6, "div", 224);
    \u0275\u0275text(7, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 225)(9, "span", 226);
    \u0275\u0275text(10, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 227);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 225)(14, "span", 226);
    \u0275\u0275text(15, "Domaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 227);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 225)(19, "span", 226);
    \u0275\u0275text(20, "Dur\xE9e estim\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 227);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 225)(24, "span", 226);
    \u0275\u0275text(25, "Prix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 227);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 225)(29, "span", 226);
    \u0275\u0275text(30, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 227);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 223)(34, "div", 224);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminrhCourseComponent_div_19_ng_container_18_div_36_Template, 2, 1, "div", 228)(37, AdminrhCourseComponent_div_19_ng_container_18_ng_template_37_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 229)(40, "div", 224);
    \u0275\u0275text(41, "Param\xE8tres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 225)(43, "span", 226);
    \u0275\u0275text(44, "Certificat final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 227);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 225)(48, "span", 226);
    \u0275\u0275text(49, "Progression s\xE9quentielle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 227);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 225)(53, "span", 226);
    \u0275\u0275text(54, "Validation RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 227);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 225)(58, "span", 226);
    \u0275\u0275text(59, "Score minimum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 227);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(62, AdminrhCourseComponent_div_19_ng_container_18_div_62_Template, 3, 1, "div", 230);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noFormations_r39 = \u0275\u0275reference(38);
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
    \u0275\u0275property("ngIf", ctx_r1.wizardSelectedFormations.length)("ngIfElse", noFormations_r39);
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
function AdminrhCourseComponent_div_19_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 235);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardPrev());
    });
    \u0275\u0275text(1, "Retour");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 235);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275text(1, "Annuler");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 236);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardNext());
    });
    \u0275\u0275text(1, " Suivant ");
    \u0275\u0275element(2, "i", 72);
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 237);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardSubmit());
    });
    \u0275\u0275element(1, "i", 18);
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
function AdminrhCourseComponent_div_19_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 236);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275text(1, "Fermer");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275elementStart(1, "div", 148);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 149)(3, "div", 150);
    \u0275\u0275element(4, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 151)(6, "div", 152);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 153);
    \u0275\u0275text(9, "Configurez le parcours en 4 \xE9tapes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 154);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_19_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275element(11, "i", 155);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 156);
    \u0275\u0275template(13, AdminrhCourseComponent_div_19_ng_container_13_Template, 8, 12, "ng-container", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 158);
    \u0275\u0275template(15, AdminrhCourseComponent_div_19_ng_container_15_Template, 30, 5, "ng-container", 10)(16, AdminrhCourseComponent_div_19_ng_container_16_Template, 19, 8, "ng-container", 10)(17, AdminrhCourseComponent_div_19_ng_container_17_Template, 45, 12, "ng-container", 10)(18, AdminrhCourseComponent_div_19_ng_container_18_Template, 63, 20, "ng-container", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 159)(20, "span", 160);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, AdminrhCourseComponent_div_19_button_22_Template, 2, 0, "button", 161)(23, AdminrhCourseComponent_div_19_button_23_Template, 2, 0, "button", 161)(24, AdminrhCourseComponent_div_19_button_24_Template, 3, 0, "button", 162)(25, AdminrhCourseComponent_div_19_button_25_Template, 3, 2, "button", 163)(26, AdminrhCourseComponent_div_19_button_26_Template, 2, 0, "button", 162);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.wizardForm);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardMode === "create" ? "Nouveau parcours de formation" : ctx_r1.wizardMode === "edit" ? "Modifier le parcours" : "D\xE9tails du parcours", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction4(17, _c10, \u0275\u0275pureFunction0(13, _c6), \u0275\u0275pureFunction0(14, _c7), \u0275\u0275pureFunction0(15, _c8), \u0275\u0275pureFunction0(16, _c9)));
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
function AdminrhCourseComponent_div_20_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 282);
    \u0275\u0275element(1, "i", 283);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Glissez une image de couverture ici");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 284);
    \u0275\u0275text(5, "PNG, JPG jusqu'\xE0 2 Mo \u2014 recommand\xE9 1200 \xD7 400 px");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_div_20_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 285);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_div_47_Template_div_click_0_listener() {
      const d_r47 = \u0275\u0275restoreView(_r46).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.catWizardToggleDomain(d_r47.key));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r47 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.catWizardDomains.includes(d_r47.key));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", d_r47.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r47.label);
  }
}
function AdminrhCourseComponent_div_20_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 286);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_div_51_Template_div_click_0_listener() {
      const lv_r49 = \u0275\u0275restoreView(_r48).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.catWizardMode !== "view" && (ctx_r1.catWizardLevel = lv_r49.key));
    });
    \u0275\u0275elementStart(1, "div", 287);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 288);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lv_r49 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.catWizardLevel === lv_r49.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lv_r49.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lv_r49.sub);
  }
}
function AdminrhCourseComponent_div_20_span_56_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 199);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_span_56_i_2_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r50);
      const tag_r51 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.catWizardRemoveTag(tag_r51));
    });
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_20_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 289);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AdminrhCourseComponent_div_20_span_56_i_2_Template, 1, 0, "i", 198);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r51 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r51, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.catWizardMode !== "view");
  }
}
function AdminrhCourseComponent_div_20_input_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 290);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_div_20_input_57_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r52);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.catWizardTagInput, $event) || (ctx_r1.catWizardTagInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function AdminrhCourseComponent_div_20_input_57_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r52);
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
function AdminrhCourseComponent_div_20_ng_container_63_span_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 199);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_ng_container_63_span_1_i_2_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r53);
      const f_r54 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.catWizardRemoveFormation(f_r54));
    });
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_20_ng_container_63_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 289);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AdminrhCourseComponent_div_20_ng_container_63_span_1_i_2_Template, 1, 0, "i", 198);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r54 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r54.titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.catWizardMode !== "view");
  }
}
function AdminrhCourseComponent_div_20_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhCourseComponent_div_20_ng_container_63_span_1_Template, 3, 2, "span", 267);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.catWizardSelectedFormations);
  }
}
function AdminrhCourseComponent_div_20_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 291);
    \u0275\u0275text(1, "Aucune formation s\xE9lectionn\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_20_div_66_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 297);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_20_div_66_div_6_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
}
function AdminrhCourseComponent_div_20_div_66_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 298);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_div_66_div_6_Template_div_click_0_listener() {
      const f_r57 = \u0275\u0275restoreView(_r56).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.catWizardToggleFormation(f_r57));
    });
    \u0275\u0275elementStart(1, "div", 299);
    \u0275\u0275template(2, AdminrhCourseComponent_div_20_div_66_div_6_i_2_Template, 1, 0, "i", 204);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 300)(4, "div", 301);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 302);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r57 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("checked", ctx_r1.isCatFormationSelected(f_r57));
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.isCatFormationSelected(f_r57));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCatFormationSelected(f_r57));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r57.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", f_r57.duree_totale ? f_r57.duree_totale + "h" : "", " ", (f_r57.categorie == null ? null : f_r57.categorie.nom) ? "\xB7 " + (f_r57.categorie == null ? null : f_r57.categorie.nom) : "", " ");
  }
}
function AdminrhCourseComponent_div_20_div_66_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 297);
    \u0275\u0275text(1, " Aucune formation trouv\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_20_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 292)(1, "div", 293);
    \u0275\u0275element(2, "i", 190);
    \u0275\u0275elementStart(3, "input", 191);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_div_20_div_66_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r55);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.catWizardPoolSearch, $event) || (ctx_r1.catWizardPoolSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 294);
    \u0275\u0275template(5, AdminrhCourseComponent_div_20_div_66_div_5_Template, 2, 0, "div", 295)(6, AdminrhCourseComponent_div_20_div_66_div_6_Template, 8, 8, "div", 296)(7, AdminrhCourseComponent_div_20_div_66_div_7_Template, 2, 0, "div", 295);
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
function AdminrhCourseComponent_div_20_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 303);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.catWizardError, " ");
  }
}
function AdminrhCourseComponent_div_20_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 304);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_ng_container_87_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.catWizardSubmit(true));
    });
    \u0275\u0275element(2, "i", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 305);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_ng_container_87_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.catWizardSubmit(false));
    });
    \u0275\u0275element(5, "i", 306);
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
function AdminrhCourseComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 238);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCatWizard());
    });
    \u0275\u0275elementStart(1, "div", 239);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r45);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 240)(3, "div", 241);
    \u0275\u0275element(4, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 242)(6, "div", 243);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 244);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 245);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCatWizard());
    });
    \u0275\u0275element(11, "i", 155);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 246);
    \u0275\u0275template(13, AdminrhCourseComponent_div_20_div_13_Template, 6, 0, "div", 247);
    \u0275\u0275elementStart(14, "div", 248)(15, "label", 249);
    \u0275\u0275text(16, "Titre du catalogue ");
    \u0275\u0275elementStart(17, "span", 250);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "input", 251);
    \u0275\u0275elementStart(20, "span", 252);
    \u0275\u0275text(21, "Ce titre sera visible par les apprenants");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 248)(23, "label", 249);
    \u0275\u0275text(24, "Description courte ");
    \u0275\u0275elementStart(25, "span", 250);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "input", 253);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 248)(29, "label", 249);
    \u0275\u0275text(30, "Description compl\xE8te");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "textarea", 254);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 255)(33, "div", 248)(34, "label", 249);
    \u0275\u0275text(35, "Dur\xE9e totale (h)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 256);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 248)(38, "label", 249);
    \u0275\u0275text(39, "Certifiante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 257)(41, "div", 258);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_Template_div_click_41_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.catWizardMode !== "view" && ctx_r1.catWizardForm.patchValue({ est_certifiante: !ctx_r1.catWizardForm.value.est_certifiante }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 259);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 260);
    \u0275\u0275text(45, "Domaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 261);
    \u0275\u0275template(47, AdminrhCourseComponent_div_20_div_47_Template, 4, 6, "div", 262);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 260);
    \u0275\u0275text(49, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 263);
    \u0275\u0275template(51, AdminrhCourseComponent_div_20_div_51_Template, 5, 4, "div", 264);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 265)(53, "label", 249);
    \u0275\u0275text(54, "Mots-cl\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 266);
    \u0275\u0275template(56, AdminrhCourseComponent_div_20_span_56_Template, 3, 2, "span", 267)(57, AdminrhCourseComponent_div_20_input_57_Template, 1, 3, "input", 268);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 252);
    \u0275\u0275text(59, "Appuyez sur Entr\xE9e pour ajouter un mot-cl\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 260);
    \u0275\u0275text(61, "Formations incluses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 269);
    \u0275\u0275template(63, AdminrhCourseComponent_div_20_ng_container_63_Template, 2, 1, "ng-container", 187)(64, AdminrhCourseComponent_div_20_ng_template_64_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, AdminrhCourseComponent_div_20_div_66_Template, 8, 6, "div", 270);
    \u0275\u0275elementStart(67, "div", 271);
    \u0275\u0275text(68, "Visibilit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 272)(70, "div", 273);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_Template_div_click_70_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.catWizardMode !== "view" && (ctx_r1.catWizardVisibility = "entreprise"));
    });
    \u0275\u0275element(71, "i", 274);
    \u0275\u0275elementStart(72, "div", 275);
    \u0275\u0275text(73, "Mon entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 276);
    \u0275\u0275text(75, "Accessible uniquement aux collaborateurs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 273);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_Template_div_click_76_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.catWizardMode !== "view" && (ctx_r1.catWizardVisibility = "public"));
    });
    \u0275\u0275element(77, "i", 277);
    \u0275\u0275elementStart(78, "div", 275);
    \u0275\u0275text(79, "Public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 276);
    \u0275\u0275text(81, "Visible par tous les apprenants");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(82, AdminrhCourseComponent_div_20_div_82_Template, 3, 1, "div", 278);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 279)(84, "button", 280);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_20_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCatWizard());
    });
    \u0275\u0275text(85);
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "div", 281);
    \u0275\u0275template(87, AdminrhCourseComponent_div_20_ng_container_87_Template, 7, 4, "ng-container", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const catNoSel_r59 = \u0275\u0275reference(65);
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
    \u0275\u0275property("ngIf", ctx_r1.catWizardSelectedFormations.length)("ngIfElse", catNoSel_r59);
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
function AdminrhCourseComponent_div_21_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 331);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.inscriptionSuccess, " ");
  }
}
function AdminrhCourseComponent_div_21_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 332);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.inscriptionError, " ");
  }
}
function AdminrhCourseComponent_div_21_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 333);
    \u0275\u0275element(1, "span", 334);
    \u0275\u0275text(2, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_21_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 335);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun participant");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_div_21_div_25_div_1_ng_container_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 346);
  }
}
function AdminrhCourseComponent_div_21_div_25_div_1_ng_container_8_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 347);
  }
}
function AdminrhCourseComponent_div_21_div_25_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 343);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_21_div_25_div_1_ng_container_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r61);
      const p_r62 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.desinscrireUser(p_r62));
    });
    \u0275\u0275template(2, AdminrhCourseComponent_div_21_div_25_div_1_ng_container_8_span_2_Template, 1, 0, "span", 344)(3, AdminrhCourseComponent_div_21_div_25_div_1_ng_container_8_i_3_Template, 1, 0, "i", 345);
    \u0275\u0275text(4, " Retirer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.inscriptionPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inscriptionPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.inscriptionPending);
  }
}
function AdminrhCourseComponent_div_21_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 338)(1, "div", 339);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 340)(4, "div", 341);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 342);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminrhCourseComponent_div_21_div_25_div_1_ng_container_8_Template, 5, 3, "ng-container", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r62 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((p_r62.prenom || p_r62.nom || p_r62.name || p_r62.email || "?").charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r62.prenom && p_r62.nom ? p_r62.prenom + " " + p_r62.nom : p_r62.name || p_r62.nom || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r62.email);
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "desassigner formations");
  }
}
function AdminrhCourseComponent_div_21_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 336);
    \u0275\u0275template(1, AdminrhCourseComponent_div_21_div_25_div_1_Template, 9, 4, "div", 337);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.participantsFiltered)("ngForTrackBy", ctx_r1.trackByUserId);
  }
}
function AdminrhCourseComponent_div_21_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 333);
    \u0275\u0275element(1, "span", 334);
    \u0275\u0275text(2, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCourseComponent_div_21_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 335);
    \u0275\u0275element(1, "i", 327);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Tous les employ\xE9s sont d\xE9j\xE0 inscrits");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCourseComponent_div_21_div_37_div_1_ng_container_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 346);
  }
}
function AdminrhCourseComponent_div_21_div_37_div_1_ng_container_8_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 327);
  }
}
function AdminrhCourseComponent_div_21_div_37_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 349);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_21_div_37_div_1_ng_container_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r63);
      const u_r64 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.inscrireUser(u_r64));
    });
    \u0275\u0275template(2, AdminrhCourseComponent_div_21_div_37_div_1_ng_container_8_span_2_Template, 1, 0, "span", 344)(3, AdminrhCourseComponent_div_21_div_37_div_1_ng_container_8_i_3_Template, 1, 0, "i", 350);
    \u0275\u0275text(4, " Inscrire ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.inscriptionPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inscriptionPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.inscriptionPending);
  }
}
function AdminrhCourseComponent_div_21_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 338)(1, "div", 348);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 340)(4, "div", 341);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 342);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminrhCourseComponent_div_21_div_37_div_1_ng_container_8_Template, 5, 3, "ng-container", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r64 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((u_r64.prenom || u_r64.nom || u_r64.name || u_r64.email || "?").charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r64.prenom && u_r64.nom ? u_r64.prenom + " " + u_r64.nom : u_r64.name || u_r64.nom || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r64.email);
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "assigner formations");
  }
}
function AdminrhCourseComponent_div_21_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 336);
    \u0275\u0275template(1, AdminrhCourseComponent_div_21_div_37_div_1_Template, 9, 4, "div", 337);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.availableUsersFiltered)("ngForTrackBy", ctx_r1.trackByUserId);
  }
}
function AdminrhCourseComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 307);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeParticipants());
    });
    \u0275\u0275elementStart(1, "div", 308);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_21_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r60);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 309)(3, "div", 310);
    \u0275\u0275element(4, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 311)(6, "div", 312);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 313);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 314);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_21_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeParticipants());
    });
    \u0275\u0275element(11, "i", 155);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AdminrhCourseComponent_div_21_div_12_Template, 3, 1, "div", 315)(13, AdminrhCourseComponent_div_21_div_13_Template, 3, 1, "div", 316);
    \u0275\u0275elementStart(14, "div", 317)(15, "div", 318)(16, "div", 319)(17, "span", 320);
    \u0275\u0275element(18, "i", 18);
    \u0275\u0275text(19, " Inscrits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 321);
    \u0275\u0275element(21, "i", 190);
    \u0275\u0275elementStart(22, "input", 322);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_div_21_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.participantsSearch, $event) || (ctx_r1.participantsSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, AdminrhCourseComponent_div_21_div_23_Template, 3, 0, "div", 323)(24, AdminrhCourseComponent_div_21_div_24_Template, 4, 0, "div", 324)(25, AdminrhCourseComponent_div_21_div_25_Template, 2, 2, "div", 325);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "div", 326);
    \u0275\u0275elementStart(27, "div", 318)(28, "div", 319)(29, "span", 320);
    \u0275\u0275element(30, "i", 327);
    \u0275\u0275text(31, " Inscrire un employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 321);
    \u0275\u0275element(33, "i", 190);
    \u0275\u0275elementStart(34, "input", 322);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCourseComponent_div_21_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.usersSearch, $event) || (ctx_r1.usersSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCourseComponent_div_21_Template_input_ngModelChange_34_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyUsersFilter());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, AdminrhCourseComponent_div_21_div_35_Template, 3, 0, "div", 323)(36, AdminrhCourseComponent_div_21_div_36_Template, 4, 0, "div", 324)(37, AdminrhCourseComponent_div_21_div_37_Template, 2, 2, "div", 325);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 328)(39, "span", 329);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 330);
    \u0275\u0275listener("click", function AdminrhCourseComponent_div_21_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeParticipants());
    });
    \u0275\u0275text(42, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedFormation == null ? null : ctx_r1.selectedFormation.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.participants.length, " participant(s) inscrit(s)");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.inscriptionSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inscriptionError);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.participantsSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.participantsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.participantsLoading && !ctx_r1.participantsFiltered.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.participantsLoading && ctx_r1.participantsFiltered.length);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.usersSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(17, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.usersLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.usersLoading && !ctx_r1.availableUsersFiltered.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.usersLoading && ctx_r1.availableUsersFiltered.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.participants.length, " inscrit(s) \xB7 ", ctx_r1.availableUsers.length, " disponible(s)");
  }
}
var AdminrhCourseComponent = class _AdminrhCourseComponent {
  formationService;
  parcoursService;
  sessionService;
  catalogueService;
  fb;
  userService;
  routes = routes;
  allFormations = [];
  formations = [];
  tableData = [];
  searchDataValue = "";
  selectedStatus = "";
  loading = false;
  error = "";
  currentPage = 1;
  publishTarget = null;
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
  // ── Modal participants ────────────────────────────────────────
  participantsModalOpen = false;
  selectedFormation = null;
  participants = [];
  participantsLoading = false;
  participantsSearch = "";
  availableUsers = [];
  availableUsersFiltered = [];
  usersSearch = "";
  usersLoading = false;
  inscriptionPending = false;
  inscriptionSuccess = "";
  inscriptionError = "";
  constructor(formationService, parcoursService, sessionService, catalogueService, fb, userService) {
    this.formationService = formationService;
    this.parcoursService = parcoursService;
    this.sessionService = sessionService;
    this.catalogueService = catalogueService;
    this.fb = fb;
    this.userService = userService;
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
          this.tableData = [...this.allFormations];
          this.totalData = this.formations.length;
          this.calculateStats();
          this.calculateTotalPages(this.totalData, this.pageSize);
          this.getTableData(0, this.pageSize);
        } else {
          this.error = "Aucune formation trouv\xE9e";
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur chargement formations:", error);
        this.error = httpErrorMessage(error, "Impossible de charger les formations.");
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
    this.tableData = [];
    let filteredData = [...this.allFormations];
    if (this.selectedStatus && this.selectedStatus !== "all") {
      switch (this.selectedStatus.toLowerCase()) {
        case "published":
          filteredData = filteredData.filter((f) => f.est_publie);
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
      filteredData = filteredData.filter((f) => f.titre?.toLowerCase().includes(search) || f.description?.toLowerCase().includes(search) || f.formateur_nom?.toLowerCase().includes(search) || f.categorie?.nom?.toLowerCase().includes(search));
    }
    this.totalData = filteredData.length;
    this.calculateTotalPages(this.totalData, this.pageSize);
    const start = skip;
    const end = Math.min(skip + limit, this.totalData);
    for (let i = start; i < end; i++) {
      this.serialNumberArray.push(i + 1);
    }
    this.formations = filteredData.slice(start, end);
    this.tableData = this.formations;
  }
  getActiveFormationsCount() {
    return this.allFormations.filter((f) => f.est_publie).length;
  }
  getPendingFormationsCount() {
    return this.allFormations.filter((f) => !f.est_publie && !f.inscription_ouverte).length;
  }
  getDraftFormationsCount() {
    return this.allFormations.filter((f) => !f.est_publie).length;
  }
  getTotalParticipants() {
    return this.allFormations.reduce((sum, f) => sum + (f.nb_participants || 0), 0);
  }
  togglePublishStatus(f) {
    this.publishTarget = f;
  }
  confirmTogglePublish() {
    if (!this.publishTarget)
      return;
    const target = this.publishTarget;
    const isPublished = !!target.est_publie;
    const op = isPublished ? this.formationService.unpublishFormation(target.id) : this.formationService.publishFormation(target.id);
    op.subscribe({
      next: () => {
        target.est_publie = !isPublished;
        this.calculateStats();
        this.publishTarget = null;
      },
      error: () => {
        this.publishTarget = null;
      }
    });
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
  // ── PARTICIPANTS ──────────────────────────────────────────────
  openParticipants(f) {
    this.selectedFormation = f;
    this.participants = [];
    this.availableUsers = [];
    this.availableUsersFiltered = [];
    this.participantsSearch = "";
    this.usersSearch = "";
    this.inscriptionSuccess = "";
    this.inscriptionError = "";
    this.participantsModalOpen = true;
    this.loadParticipants(f.id);
  }
  closeParticipants() {
    this.participantsModalOpen = false;
    this.selectedFormation = null;
  }
  loadParticipants(formationId) {
    this.participantsLoading = true;
    this.formationService.getParticipantsFormation(formationId).subscribe({
      next: (res) => {
        this.participants = res.participants || [];
        this.participantsLoading = false;
        this.loadAvailableUsers();
      },
      error: () => {
        this.participantsLoading = false;
      }
    });
  }
  loadAvailableUsers() {
    this.usersLoading = true;
    this.userService.getMyUsers().subscribe({
      next: (res) => {
        const enrolled = new Set(this.participants.map((p) => p.id));
        const all = res.users || res.data || [];
        this.availableUsers = all.filter((u) => !enrolled.has(u.id));
        this.applyUsersFilter();
        this.usersLoading = false;
      },
      error: () => {
        this.usersLoading = false;
      }
    });
  }
  applyUsersFilter() {
    const q = this.usersSearch.toLowerCase();
    this.availableUsersFiltered = this.availableUsers.filter((u) => !q || u.name?.toLowerCase().includes(q) || u.nom?.toLowerCase().includes(q) || u.prenom?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q));
  }
  get participantsFiltered() {
    const q = this.participantsSearch.toLowerCase();
    return this.participants.filter((p) => !q || p.name?.toLowerCase().includes(q) || p.nom?.toLowerCase().includes(q) || p.prenom?.toLowerCase().includes(q) || p.email?.toLowerCase().includes(q));
  }
  inscrireUser(user) {
    if (!this.selectedFormation || this.inscriptionPending)
      return;
    this.inscriptionPending = true;
    this.inscriptionSuccess = "";
    this.inscriptionError = "";
    this.formationService.inscriptionDirecte({
      formation_id: this.selectedFormation.id,
      user_id: user.id
    }).subscribe({
      next: () => {
        this.inscriptionPending = false;
        const displayName = user.prenom && user.nom ? `${user.prenom} ${user.nom}` : user.name || user.email;
        this.inscriptionSuccess = `${displayName} a \xE9t\xE9 inscrit(e) avec succ\xE8s.`;
        this.participants.push(user);
        this.availableUsers = this.availableUsers.filter((u) => u.id !== user.id);
        this.applyUsersFilter();
      },
      error: (err) => {
        this.inscriptionPending = false;
        this.inscriptionError = err?.error?.message || "Erreur lors de l'inscription.";
      }
    });
  }
  desinscrireUser(user) {
    if (!this.selectedFormation || this.inscriptionPending)
      return;
    this.inscriptionPending = true;
    this.inscriptionSuccess = "";
    this.inscriptionError = "";
    this.formationService.desinscriptionDirecte({
      formation_id: this.selectedFormation.id,
      user_id: user.id
    }).subscribe({
      next: () => {
        this.inscriptionPending = false;
        const displayName = user.prenom && user.nom ? `${user.prenom} ${user.nom}` : user.name || user.email;
        this.inscriptionSuccess = `${displayName} a \xE9t\xE9 d\xE9sinscrit(e).`;
        this.participants = this.participants.filter((p) => p.id !== user.id);
        this.availableUsers.push(user);
        this.applyUsersFilter();
      },
      error: (err) => {
        this.inscriptionPending = false;
        this.inscriptionError = err?.error?.message || "Erreur lors de la d\xE9sinscription.";
      }
    });
  }
  trackByUserId(_i, u) {
    return u.id;
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
    return new (__ngFactoryType__ || _AdminrhCourseComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(ParcoursService), \u0275\u0275directiveInject(SessionFormationService), \u0275\u0275directiveInject(CatalogueService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhCourseComponent, selectors: [["app-adminrh-course"]], decls: 22, vars: 16, consts: [["noSel", ""], ["noFormations", ""], ["catNoSel", ""], [1, "ac-shell"], [1, "ac-topbar"], ["type", "button", 1, "ac-tab", 3, "click"], [1, "isax", "isax-book-1"], [1, "isax", "isax-route-square"], [1, "isax", "isax-category"], [1, "isax", "isax-calendar-1"], [4, "ngIf"], ["class", "ac-overlay", 3, "click", 4, "ngIf"], ["class", "wz-overlay", 3, "click", 4, "ngIf"], ["class", "cw-overlay", 3, "click", 4, "ngIf"], ["class", "pm-overlay", 3, "click", 4, "ngIf"], [1, "ac-kpi-row"], [1, "ac-kpi"], [1, "ac-kpi__label"], [1, "isax", "isax-tick-circle"], [1, "ac-kpi__val"], [1, "ac-kpi__delta", "neutral"], [1, "isax", "isax-clock"], [1, "isax", "isax-document"], [1, "isax", "isax-people"], [1, "ac-toolbar"], ["type", "search", "placeholder", "Rechercher une formation\u2026", 1, "ac-search__input", 2, "flex", "1", "max-width", "280px", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ac-select", 3, "change"], ["value", "all"], ["value", "published"], ["value", "pending"], ["value", "draft"], [1, "ac-spacer"], [4, "appHasPermission"], ["class", "ac-alert", 4, "ngIf"], ["class", "ac-skeletons", 4, "ngIf"], ["class", "ac-table", 4, "ngIf"], ["class", "ac-pager", 4, "ngIf"], [1, "ac-add-btn", 3, "routerLink"], [1, "isax", "isax-add"], [1, "ac-alert"], [1, "isax", "isax-warning-2"], [1, "ac-skeletons"], ["class", "ac-skeleton-row", 4, "ngFor", "ngForOf"], [1, "ac-skeleton-row"], [1, "ac-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ac-table-cell"], ["target", "_blank", 1, "ac-course-img", 3, "href"], ["onerror", "this.src='assets/img/course/course-01.jpg'", 3, "src", "alt"], ["target", "_blank", 1, "ac-course-title", 3, "href"], [1, "ac-table-sub"], [1, "isax", "isax-video-circle"], [1, "isax", "isax-flag"], [1, "ac-pill"], [1, "ac-status"], [1, "ac-actions"], ["target", "_blank", "title", "Voir", 1, "ac-act", 3, "href"], [1, "isax", "isax-eye"], ["target", "_blank", "title", "Modifier", 1, "ac-act", 3, "href"], [1, "isax", "isax-edit-2"], ["type", "button", 1, "ac-act", 3, "click", "title"], ["type", "button", "title", "Archiver", 1, "ac-act", "ac-act--arch", 3, "click"], [1, "isax", "isax-archive"], ["type", "button", "title", "Participants", 1, "ac-act", "ac-act--people", 3, "click"], ["colspan", "6", 1, "ac-empty"], [1, "isax", "isax-book-1", 2, "font-size", "2rem", "display", "block", "margin-bottom", "8px"], [1, "ac-pager"], [1, "ac-pager__info"], [1, "ac-pager__btns"], ["type", "button", 1, "ac-pager__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "ac-pager__btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], ["type", "button", 1, "ac-pager__btn", 3, "click"], [1, "ac-overlay", 3, "click"], [1, "ac-confirm-modal", 3, "click"], [1, "ac-confirm-icon"], [1, "ac-confirm-btns"], ["type", "button", 1, "ac-btn-ghost", 3, "click"], ["type", "button", 3, "click"], [1, "ac-search"], [1, "isax", "isax-search-normal-1", "ac-search__icon"], ["type", "search", "placeholder", "Rechercher un parcours...", 1, "ac-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "button", 1, "ac-chip", 3, "click"], ["class", "ac-card-grid", 4, "ngIf"], ["type", "button", 1, "ac-add-btn", 3, "click"], ["class", "ac-skeleton-card", 4, "ngFor", "ngForOf"], [1, "ac-skeleton-card"], [1, "ac-card-grid"], ["class", "ac-fcard", 4, "ngFor", "ngForOf"], ["class", "ac-empty ac-empty--span", 4, "ngIf"], [1, "ac-fcard"], [1, "ac-fcard__thumb"], ["class", "ac-fcard__img", 3, "src", "alt", 4, "ngIf"], ["class", "isax isax-route-square", 4, "ngIf"], [1, "ac-fcard__body"], [1, "ac-fcard__cat"], [1, "ac-fcard__title"], [1, "ac-fcard__meta"], [1, "ac-fcard__footer"], [1, "ac-fcard__actions", 2, "margin-left", "auto"], ["type", "button", "title", "Voir", 1, "ac-act", 3, "click"], ["type", "button", "title", "Modifier", 1, "ac-act", 3, "click"], [1, "ac-fcard__img", 3, "src", "alt"], [1, "ac-empty", "ac-empty--span"], ["type", "search", "placeholder", "Rechercher dans le catalogue...", 1, "ac-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "button", "title", "Trier", 1, "ac-view-btn"], [1, "isax", "isax-sort"], [1, "ac-toolbar", "ac-toolbar--chips"], ["type", "button", "class", "ac-chip", 3, "ac-chip--on", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-award"], ["type", "search", "placeholder", "Rechercher une session...", 1, "ac-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ac-view-group"], ["type", "button", 1, "ac-view-toggle", 3, "click"], [1, "isax", "isax-row-vertical"], [1, "isax", "isax-play-circle"], [1, "isax", "isax-monitor"], [1, "ac-sessions-list"], ["class", "ac-session-row", 4, "ngFor", "ngForOf"], ["class", "ac-empty", "style", "padding:32px 14px; text-align:center", 4, "ngIf"], [1, "ac-session-row"], [1, "ac-session-date"], [1, "ac-session-date__day"], [1, "ac-session-date__month"], [1, "ac-session-info"], [1, "ac-session-title"], [1, "ac-session-meta"], [1, "ac-session-badges"], [1, "ac-session-places"], [1, "ac-add-btn", 2, "font-size", "11px", "padding", "5px 10px", 3, "routerLink"], [1, "isax", "isax-user"], [1, "isax", "isax-building"], [1, "ac-empty", 2, "padding", "32px 14px", "text-align", "center"], [1, "isax", "isax-calendar-1", 2, "font-size", "2rem", "display", "block", "margin-bottom", "8px"], [1, "ac-cal"], [1, "ac-cal__nav"], ["type", "button", 1, "ac-cal__nav-btn", 3, "click"], [1, "ac-cal__nav-label"], [1, "ac-cal__grid"], ["class", "ac-cal__head", 4, "ngFor", "ngForOf"], ["class", "ac-cal__cell", 3, "ac-cal__cell--other", "ac-cal__cell--today", 4, "ngFor", "ngForOf"], [1, "ac-cal__head"], [1, "ac-cal__cell"], [1, "ac-cal__day"], [1, "ac-cal__events"], ["class", "ac-cal__event", 3, "ac-cal__event--dist", "ac-cal__event--hybr", "title", 4, "ngFor", "ngForOf"], [1, "ac-cal__event", 3, "title"], [1, "wz-overlay", 3, "click"], [1, "wz-modal", 3, "click", "formGroup"], [1, "wz-head"], [1, "wz-head__icon"], [1, "wz-head__text"], [1, "wz-head__title"], [1, "wz-head__sub"], ["type", "button", 1, "wz-close", 3, "click"], [1, "isax", "isax-close-circle"], [1, "wz-stepper"], [4, "ngFor", "ngForOf"], [1, "wz-body"], [1, "wz-foot"], [1, "wz-foot__info"], ["type", "button", "class", "wz-btn-ghost", 3, "click", 4, "ngIf"], ["type", "button", "class", "wz-btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "wz-btn-success", 3, "disabled", "click", 4, "ngIf"], [1, "wz-step"], [1, "wz-step__circle"], ["class", "isax isax-tick-circle", "style", "font-size:11px", 4, "ngIf"], [1, "wz-step__label"], ["class", "wz-step__line", 4, "ngIf"], [1, "isax", "isax-tick-circle", 2, "font-size", "11px"], [1, "wz-step__line"], [1, "wz-field", "wz-field--full"], [1, "wz-label"], [1, "wz-req"], ["type", "text", "formControlName", "nom", "placeholder", "Ex. : Parcours Manager confirm\xE9", 1, "wz-input"], [1, "wz-row"], [1, "wz-field"], ["type", "number", "formControlName", "duree_estimee", "placeholder", "Ex. : 30", "min", "1", 1, "wz-input"], ["type", "number", "formControlName", "prix", "placeholder", "0", "min", "0", 1, "wz-input"], ["formControlName", "description", "placeholder", "D\xE9crivez l'objectif p\xE9dagogique de ce parcours...", 1, "wz-input", "wz-textarea"], [1, "wz-hint"], [1, "wz-label", 2, "margin-bottom", "8px"], [1, "wz-domain-grid"], ["class", "wz-domain-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "wz-domain-card", 3, "click"], [1, "wz-label", 2, "margin-bottom", "6px"], [1, "wz-strip"], [4, "ngIf", "ngIfElse"], [1, "wz-pool"], [1, "wz-pool__search"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher une formation...", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "wz-pool__list"], ["class", "wz-pool__empty", 4, "ngIf"], ["class", "wz-pool__item", 3, "checked", "click", 4, "ngFor", "ngForOf"], [1, "wz-hint", 2, "margin-top", "6px"], ["class", "wz-chip", 4, "ngFor", "ngForOf"], [1, "wz-chip"], ["class", "isax isax-close-circle", 3, "click", 4, "ngIf"], [1, "isax", "isax-close-circle", 3, "click"], [1, "wz-strip__hint"], [1, "wz-pool__empty"], [1, "wz-pool__item", 3, "click"], [1, "wz-pool__check"], ["class", "isax isax-tick-circle", 4, "ngIf"], [1, "wz-pool__thumb"], [1, "wz-pool__info"], [1, "wz-pool__name"], [1, "wz-pool__meta"], [1, "wz-pool__tag"], [1, "wz-row", 2, "margin-bottom", "14px"], ["type", "number", "formControlName", "score_min", "placeholder", "70", "min", "0", "max", "100", 1, "wz-input"], ["formControlName", "actif", 1, "wz-input"], [3, "ngValue"], [1, "wz-label", 2, "margin-bottom", "10px"], [1, "wz-toggles"], [1, "wz-toggle-row"], [1, "wz-toggle-info"], [1, "wz-toggle-title"], [1, "wz-toggle-sub"], [1, "wz-toggle", 3, "click"], [1, "wz-info-banner"], [1, "isax", "isax-info-circle"], [1, "wz-recap-card"], [1, "wz-recap-title"], [1, "wz-recap-row"], [1, "wz-rl"], [1, "wz-rv"], ["class", "wz-recap-chips", 4, "ngIf", "ngIfElse"], [1, "wz-recap-card", 2, "margin-bottom", "0"], ["class", "wz-error", 4, "ngIf"], [1, "wz-recap-chips"], ["class", "wz-rc", 4, "ngFor", "ngForOf"], [1, "wz-rc"], [1, "wz-error"], ["type", "button", 1, "wz-btn-ghost", 3, "click"], ["type", "button", 1, "wz-btn-primary", 3, "click"], ["type", "button", 1, "wz-btn-success", 3, "click", "disabled"], [1, "cw-overlay", 3, "click"], [1, "cw-modal", 3, "click", "formGroup"], [1, "cw-head"], [1, "cw-head__icon"], [1, "cw-head__text"], [1, "cw-head__title"], [1, "cw-head__sub"], ["type", "button", 1, "cw-close", 3, "click"], [1, "cw-body"], ["class", "cw-upload-zone", 4, "ngIf"], [1, "cw-field"], [1, "cw-label"], [1, "cw-req"], ["type", "text", "formControlName", "titre", "placeholder", "Ex. : Catalogue Management 2025", 1, "cw-input"], [1, "cw-hint"], ["type", "text", "formControlName", "short_description", "placeholder", "Une phrase r\xE9sumant ce catalogue...", 1, "cw-input"], ["formControlName", "description", "placeholder", "D\xE9crivez le contenu, les objectifs p\xE9dagogiques...", 1, "cw-input", "cw-textarea"], [1, "cw-row"], ["type", "number", "formControlName", "duree_totale", "placeholder", "Ex. : 12", "min", "0", 1, "cw-input"], [1, "cw-toggle-inline"], [1, "cw-toggle", 3, "click"], [1, "cw-toggle-label"], [1, "cw-section-label"], [1, "cw-domain-grid"], ["class", "cw-domain-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "cw-level-row"], ["class", "cw-level-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "cw-field", 2, "margin-top", "12px"], [1, "cw-tags-box"], ["class", "cw-tag", 4, "ngFor", "ngForOf"], ["type", "text", "class", "cw-tag-input", "placeholder", "Ajouter un mot-cl\xE9...", 3, "ngModel", "ngModelOptions", "ngModelChange", "keydown", 4, "ngIf"], [1, "cw-strip"], ["class", "cw-pool", 4, "ngIf"], [1, "cw-section-label", 2, "margin-top", "12px"], [1, "cw-vis-row"], [1, "cw-vis-card", 3, "click"], [1, "isax", "isax-buildings-2"], [1, "cw-vis-card__label"], [1, "cw-vis-card__sub"], [1, "isax", "isax-global"], ["class", "cw-error", 4, "ngIf"], [1, "cw-foot"], ["type", "button", 1, "cw-btn-ghost", 3, "click"], [2, "flex", "1"], [1, "cw-upload-zone"], [1, "isax", "isax-gallery-add"], [1, "cw-upload-zone__hint"], [1, "cw-domain-card", 3, "click"], [1, "cw-level-card", 3, "click"], [1, "cw-level-card__label"], [1, "cw-level-card__sub"], [1, "cw-tag"], ["type", "text", "placeholder", "Ajouter un mot-cl\xE9...", 1, "cw-tag-input", 3, "ngModelChange", "keydown", "ngModel", "ngModelOptions"], [1, "cw-strip-hint"], [1, "cw-pool"], [1, "cw-pool__search"], [1, "cw-pool__list"], ["class", "cw-pool__empty", 4, "ngIf"], ["class", "cw-pool__item", 3, "checked", "click", 4, "ngFor", "ngForOf"], [1, "cw-pool__empty"], [1, "cw-pool__item", 3, "click"], [1, "cw-pool__check"], [1, "cw-pool__info"], [1, "cw-pool__name"], [1, "cw-pool__meta"], [1, "cw-error"], ["type", "button", 1, "cw-btn-draft", 3, "click", "disabled"], ["type", "button", 1, "cw-btn-primary", 3, "click", "disabled"], [1, "isax", "isax-send-2"], [1, "pm-overlay", 3, "click"], [1, "pm-modal", 3, "click"], [1, "pm-head"], [1, "pm-head__icon"], [1, "pm-head__text"], [1, "pm-head__title"], [1, "pm-head__sub"], ["type", "button", 1, "pm-close", 3, "click"], ["class", "pm-alert pm-alert--ok", 4, "ngIf"], ["class", "pm-alert pm-alert--err", 4, "ngIf"], [1, "pm-body"], [1, "pm-col"], [1, "pm-col__header"], [1, "pm-col__title"], [1, "pm-search"], ["type", "search", "placeholder", "Rechercher...", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "pm-loading", 4, "ngIf"], ["class", "pm-empty", 4, "ngIf"], ["class", "pm-list", 4, "ngIf"], [1, "pm-divider"], [1, "isax", "isax-user-add"], [1, "pm-foot"], [1, "pm-foot__info"], ["type", "button", 1, "pm-close-btn", 3, "click"], [1, "pm-alert", "pm-alert--ok"], [1, "pm-alert", "pm-alert--err"], [1, "pm-loading"], [1, "pm-spin"], [1, "pm-empty"], [1, "pm-list"], ["class", "pm-user-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "pm-user-row"], [1, "pm-user-av"], [1, "pm-user-info"], [1, "pm-user-name"], [1, "pm-user-email"], ["type", "button", 1, "pm-unenroll-btn", 3, "click", "disabled"], ["class", "pm-spin pm-spin--sm", 4, "ngIf"], ["class", "isax isax-user-remove", 4, "ngIf"], [1, "pm-spin", "pm-spin--sm"], [1, "isax", "isax-user-remove"], [1, "pm-user-av", "pm-user-av--blue"], ["type", "button", 1, "pm-enroll-btn", 3, "click", "disabled"], ["class", "isax isax-user-add", 4, "ngIf"]], template: function AdminrhCourseComponent_Template(rf, ctx) {
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
      \u0275\u0275template(14, AdminrhCourseComponent_ng_container_14_Template, 51, 12, "ng-container", 10)(15, AdminrhCourseComponent_div_15_Template, 13, 11, "div", 11)(16, AdminrhCourseComponent_ng_container_16_Template, 48, 17, "ng-container", 10)(17, AdminrhCourseComponent_ng_container_17_Template, 32, 11, "ng-container", 10)(18, AdminrhCourseComponent_ng_container_18_Template, 61, 25, "ng-container", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, AdminrhCourseComponent_div_19_Template, 27, 22, "div", 12)(20, AdminrhCourseComponent_div_20_Template, 88, 25, "div", 13)(21, AdminrhCourseComponent_div_21_Template, 43, 18, "div", 14);
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
      \u0275\u0275property("ngIf", ctx.publishTarget);
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
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.participantsModalOpen);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    RouterModule,
    RouterLink,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MinValidator,
    MaxValidator,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatSortModule,
    HasPermissionDirective,
    SlicePipe,
    TitleCasePipe
  ], styles: ['\n\n.ac-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ac-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ac-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ac-tab.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ac-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #111827;\n}\n.ac-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ac-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ac-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ac-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.ac-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.ac-chip[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ac-chip--on[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  border-color: #85B7EB;\n  color: #0C447C;\n}\n.ac-spacer[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.ac-view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-btn.active[_ngcontent-%COMP%], \n.ac-view-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ac-add-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ac-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ac-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ac-kpi__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.ac-kpi__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-kpi__val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n  color: #111827;\n}\n.ac-kpi__delta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 2px;\n}\n.ac-kpi__delta.up[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.ac-kpi__delta.down[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.ac-kpi__delta.neutral[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ac-skeletons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n}\n.ac-skeleton-card[_ngcontent-%COMP%] {\n  height: 220px;\n  border-radius: 12px;\n  background: #f3f4f6;\n  animation: _ngcontent-%COMP%_ac-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ac-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-alert[_ngcontent-%COMP%] {\n  margin: 12px 14px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n  background: #f9fafb;\n}\n.ac-fcard[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.15s;\n}\n.ac-fcard[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-fcard__thumb[_ngcontent-%COMP%] {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  position: relative;\n  overflow: hidden;\n}\n.ac-fcard__thumb[data-th=blue][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ac-fcard__thumb[data-th=teal][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ac-fcard__thumb[data-th=purple][_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ac-fcard__thumb[data-th=amber][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ac-fcard__thumb[data-th=coral][_ngcontent-%COMP%] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.ac-fcard__thumb[data-th=green][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ac-fcard__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-fcard__body[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  flex: 1;\n}\n.ac-fcard__cat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.ac-fcard__cat[data-cat=tech][_ngcontent-%COMP%] {\n  color: #0C447C;\n}\n.ac-fcard__cat[data-cat=rh][_ngcontent-%COMP%] {\n  color: #085041;\n}\n.ac-fcard__cat[data-cat=mgmt][_ngcontent-%COMP%] {\n  color: #534AB7;\n}\n.ac-fcard__cat[data-cat=fin][_ngcontent-%COMP%] {\n  color: #633806;\n}\n.ac-fcard__cat[data-cat=default][_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.ac-fcard__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n.ac-fcard__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ac-fcard__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-fcard__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ac-fcard__footer[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-fcard__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n}\n.ac-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ac-status[data-s=pub][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=draft][_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=pending][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-status[data-s=plan][_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #3730A3;\n}\n.ac-status[data-s=live][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=done][_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=cancel][_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #991B1B;\n}\n.ac-prog[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 6px;\n}\n.ac-prog__bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ac-prog__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background: #185FA5;\n}\n.ac-prog__txt[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: right;\n  margin-top: 2px;\n}\n.ac-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.ac-act[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-act--del[_ngcontent-%COMP%] {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ac-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.ac-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ac-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ac-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ac-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ac-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ac-table-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-table-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ac-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 14px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ac-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ac-empty--span[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.ac-empty-tab[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 14px;\n  gap: 12px;\n  color: #9ca3af;\n}\n.ac-empty-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.ac-empty-tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ac-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ac-pager__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-pager__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ac-pager__btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ac-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ac-pager__btn.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ac-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ac-toolbar--chips[_ngcontent-%COMP%] {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-top: none;\n  background: #fff;\n  gap: 6px;\n}\n.ac-view-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ac-view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ac-view-toggle.active[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #111827;\n  font-weight: 500;\n}\n.ac-view-toggle[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f9fafb;\n}\n.ac-sessions-list[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ac-session-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: border-color 0.15s;\n}\n.ac-session-row[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-session-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 40px;\n}\n.ac-session-date__day[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.ac-session-date__month[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ac-session-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ac-session-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ac-session-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 3px;\n  flex-wrap: wrap;\n}\n.ac-session-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-session-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ac-session-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ac-session-places[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ac-cal[_ngcontent-%COMP%] {\n  padding: 12px 14px 14px;\n  background: #f9fafb;\n}\n.ac-cal__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.ac-cal__nav-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ac-cal__nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-cal__nav-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ac-cal__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.ac-cal__head[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 0 6px;\n}\n.ac-cal__cell[_ngcontent-%COMP%] {\n  min-height: 80px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 5px 5px 4px;\n  overflow: hidden;\n  transition: border-color 0.12s;\n}\n.ac-cal__cell[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-cal__cell--other[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ac-cal__cell--other[_ngcontent-%COMP%]   .ac-cal__day[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ac-cal__cell--today[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n}\n.ac-cal__cell--today[_ngcontent-%COMP%]   .ac-cal__day[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n}\n.ac-cal__day[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 4px;\n  display: block;\n}\n.ac-cal__events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ac-cal__event[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #0C447C;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ac-cal__event--dist[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-cal__event--hybr[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.wz-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.wz-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.wz-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.wz-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.wz-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.wz-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.wz-step__circle[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.wz-step__circle.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.wz-step__circle.done[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.wz-step__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.wz-step__label.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n}\n.wz-step__label.done[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.wz-step__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.wz-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.wz-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.wz-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.wz-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.wz-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.wz-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.wz-input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  box-shadow: 0 0 0 2px #E6F1FB;\n}\n.wz-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.wz-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n.wz-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-domain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.wz-domain-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.wz-domain-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.wz-domain-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-domain-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.wz-domain-card.selected[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.wz-domain-card.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0C447C;\n}\n.wz-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.wz-strip__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.wz-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  border: 0.5px solid #85B7EB;\n  font-size: 12px;\n  color: #0C447C;\n}\n.wz-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  color: #378ADD;\n}\n.wz-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0C447C;\n}\n.wz-pool[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.wz-pool__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-pool__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.wz-pool__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.wz-pool__list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.wz-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.wz-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.wz-pool__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.wz-pool__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-pool__item[_ngcontent-%COMP%]:hover, \n.wz-pool__item.checked[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.wz-pool__check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.wz-pool__check.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.wz-pool__thumb[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-pool__thumb[data-th=blue][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.wz-pool__thumb[data-th=teal][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.wz-pool__thumb[data-th=purple][_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-pool__thumb[data-th=amber][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.wz-pool__thumb[data-th=coral][_ngcontent-%COMP%] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.wz-pool__thumb[data-th=green][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.wz-pool__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.wz-pool__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wz-pool__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-pool__tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #4b5563;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.wz-pool__empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.wz-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #f3f4f6;\n}\n.wz-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-toggle-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.wz-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.wz-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.wz-toggle.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n}\n.wz-toggle.on[_ngcontent-%COMP%]::after {\n  left: 19px;\n}\n.wz-info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  border: 0.5px solid #85B7EB;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #0C447C;\n  line-height: 1.5;\n}\n.wz-info-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-recap-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.wz-recap-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-rl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-recap-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.wz-rc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.wz-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.wz-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.wz-foot__info[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.wz-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.wz-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #185FA5;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.wz-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.wz-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wz-btn-success[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.wz-btn-success[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.wz-btn-success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.cw-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 600px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.cw-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.cw-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cw-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.cw-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.cw-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.cw-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.cw-upload-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 1.5px dashed #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cw-upload-zone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #9ca3af;\n}\n.cw-upload-zone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.cw-upload-zone__hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n}\n.cw-upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: #79C9AB;\n  background: #E1F5EE;\n}\n.cw-upload-zone[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.cw-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cw-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.cw-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.cw-input[_ngcontent-%COMP%]:focus {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.cw-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n.cw-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-toggle-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n}\n.cw-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.cw-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.cw-toggle.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n}\n.cw-toggle.on[_ngcontent-%COMP%]::after {\n  left: 19px;\n}\n.cw-toggle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4b5563;\n}\n.cw-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.cw-domain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-domain-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.cw-domain-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #9ca3af;\n}\n.cw-domain-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-domain-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-level-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-level-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cw-level-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-level-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.cw-level-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-level-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-level-card.selected[_ngcontent-%COMP%]   .cw-level-card__label[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-level-card.selected[_ngcontent-%COMP%]   .cw-level-card__sub[_ngcontent-%COMP%] {\n  color: rgb(148.5, 219.5, 194.65);\n}\n.cw-tags-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 8px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.cw-tags-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  background: #E1F5EE;\n  border: 0.5px solid #79C9AB;\n  font-size: 12px;\n  color: #0F6E56;\n}\n.cw-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  color: #79C9AB;\n}\n.cw-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0F6E56;\n}\n.cw-tag-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #111827;\n  background: transparent;\n  flex: 1;\n  min-width: 100px;\n  font-family: inherit;\n}\n.cw-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 8px;\n}\n.cw-strip-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.cw-pool[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.cw-pool__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.cw-pool__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.cw-pool__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.cw-pool__list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.cw-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.cw-pool__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cw-pool__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cw-pool__item[_ngcontent-%COMP%]:hover, \n.cw-pool__item.checked[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n}\n.cw-pool__check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.cw-pool__check.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.cw-pool__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cw-pool__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-pool__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-pool__empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.cw-vis-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cw-vis-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cw-vis-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.cw-vis-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-vis-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-vis-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%]   .cw-vis-card__label[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cw-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.cw-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.cw-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.cw-btn-draft[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.cw-btn-draft[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-btn-draft[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.cw-btn-draft[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #0F6E56;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.cw-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ac-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-skeletons[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ac-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ac-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.ac-act--arch[_ngcontent-%COMP%] {\n  color: #BA7517;\n}\n.ac-act--arch[_ngcontent-%COMP%]:hover {\n  border-color: #BA7517;\n  color: #BA7517;\n  background: #FAEEDA;\n}\n.ac-act--people[_ngcontent-%COMP%] {\n  color: #185FA5;\n}\n.ac-act--people[_ngcontent-%COMP%]:hover {\n  border-color: #93C5FD;\n  color: #185FA5;\n  background: #DBEAFE;\n}\n.ac-act--warn[_ngcontent-%COMP%] {\n  color: #B45309;\n  border-color: #FCD34D;\n}\n.ac-act--warn[_ngcontent-%COMP%]:hover {\n  background: #FFFBEB;\n}\n.ac-act--ok[_ngcontent-%COMP%] {\n  color: #166534;\n  border-color: #86EFAC;\n}\n.ac-act--ok[_ngcontent-%COMP%]:hover {\n  background: #F0FDF4;\n}\n.ac-select[_ngcontent-%COMP%] {\n  height: 32px;\n  padding: 0 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n}\n.ac-table-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ac-course-img[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 32px;\n  border-radius: 6px;\n  overflow: hidden;\n  display: block;\n  background: #f3f4f6;\n}\n.ac-course-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-course-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  text-decoration: none;\n}\n.ac-course-title[_ngcontent-%COMP%]:hover {\n  color: #185FA5;\n  text-decoration: underline;\n}\n.ac-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  border-radius: 20px;\n  padding: 2px 8px;\n}\n.ac-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  border-radius: 4px;\n  padding: 2px 7px;\n}\n.ac-badge--free[_ngcontent-%COMP%] {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-badge--paid[_ngcontent-%COMP%] {\n  color: #185FA5;\n  font-weight: 600;\n}\n.ac-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ac-confirm-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 28px 32px;\n  max-width: 380px;\n  width: 90%;\n  text-align: center;\n}\n.ac-confirm-modal[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 12px 0 6px;\n}\n.ac-confirm-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  margin-bottom: 20px;\n}\n.ac-confirm-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.ac-confirm-icon--warn[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #B45309;\n}\n.ac-confirm-icon--ok[_ngcontent-%COMP%] {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-confirm-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.ac-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  background: #f3f4f6;\n  font-size: 13px;\n  cursor: pointer;\n}\n.ac-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.ac-btn-warn[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #F59E0B;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-warn[_ngcontent-%COMP%]:hover {\n  background: #D97706;\n}\n.ac-btn-ok[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #10B981;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-ok[_ngcontent-%COMP%]:hover {\n  background: #059669;\n}\n.ac-skeleton-row[_ngcontent-%COMP%] {\n  height: 48px;\n  background: #f3f4f6;\n  border-radius: 8px;\n  margin: 6px 14px;\n  animation: _ngcontent-%COMP%_ac-pulse 1.2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ac-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.pm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n  padding: 16px;\n}\n.pm-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 820px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n.pm-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.pm-head__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #DBEAFE;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.pm-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pm-head__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-head__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.pm-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.pm-close[_ngcontent-%COMP%]:hover {\n  color: #111827;\n}\n.pm-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 20px;\n  font-size: 13px;\n}\n.pm-alert--ok[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #166534;\n  border-bottom: 1px solid #4ADE80;\n}\n.pm-alert--err[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #991B1B;\n  border-bottom: 1px solid #F87171;\n}\n.pm-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .pm-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.pm-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: #e5e7eb;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .pm-divider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n  }\n}\n.pm-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.pm-col__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  flex-wrap: wrap;\n}\n.pm-col__title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.pm-col__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.pm-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 120px;\n  max-width: 180px;\n}\n.pm-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 13px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.pm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px 5px 26px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #f9fafb;\n  outline: none;\n}\n.pm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.pm-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  flex: 1;\n  padding: 6px 0;\n}\n.pm-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 28px 16px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n.pm-spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #e5e7eb;\n  border-top-color: #185FA5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pm-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.pm-spin--sm[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n}\n@keyframes _ngcontent-%COMP%_pm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pm-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #9ca3af;\n}\n.pm-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.pm-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n}\n.pm-user-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 16px;\n  transition: background 0.1s;\n}\n.pm-user-row[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.pm-user-av[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.pm-user-av--blue[_ngcontent-%COMP%] {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.pm-user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pm-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-user-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.pm-badge--ok[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #166534;\n}\n.pm-enroll-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-enroll-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pm-enroll-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #DCFCE7;\n  color: #166534;\n  border-color: #86EFAC;\n}\n.pm-enroll-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  background: #FFF5F5;\n  color: #991B1B;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #FEE2E2;\n  color: #7F1D1D;\n  border-color: #FCA5A5;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.pm-foot__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.pm-close-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  height: 30px;\n  padding: 0 14px;\n  font-size: 13px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.pm-close-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n/*# sourceMappingURL=adminrh-course.component.css.map */'] });
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
      CustomPaginationComponent,
      HasPermissionDirective
    ], template: `<div class="ac-shell">\r
\r
  <!-- \u2500\u2500 TABS \u2500\u2500 -->\r
  <div class="ac-topbar">\r
    <button type="button" class="ac-tab" [class.active]="activeTab === 'formations'" (click)="setTab('formations')">\r
      <i class="isax isax-book-1"></i> Formations\r
    </button>\r
    <button type="button" class="ac-tab" [class.active]="activeTab === 'parcours'" (click)="setTab('parcours')">\r
      <i class="isax isax-route-square"></i> Parcours\r
    </button>\r
    <button type="button" class="ac-tab" [class.active]="activeTab === 'catalogue'" (click)="setTab('catalogue')">\r
      <i class="isax isax-category"></i> Catalogue\r
    </button>\r
    <button type="button" class="ac-tab" [class.active]="activeTab === 'sessions'" (click)="setTab('sessions')">\r
      <i class="isax isax-calendar-1"></i> Sessions\r
    </button>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       TAB 1 : FORMATIONS\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="activeTab === 'formations'">\r
\r
    <!-- KPI row -->\r
    <div class="ac-kpi-row">\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-tick-circle"></i> Publi\xE9es</div>\r
        <div class="ac-kpi__val">{{ getActiveFormationsCount() }}</div>\r
        <div class="ac-kpi__delta neutral">en ligne</div>\r
      </div>\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-clock"></i> En attente</div>\r
        <div class="ac-kpi__val">{{ getPendingFormationsCount() }}</div>\r
        <div class="ac-kpi__delta neutral">\xE0 valider</div>\r
      </div>\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-document"></i> Brouillons</div>\r
        <div class="ac-kpi__val">{{ getDraftFormationsCount() }}</div>\r
        <div class="ac-kpi__delta neutral">non publi\xE9es</div>\r
      </div>\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-people"></i> Apprenants</div>\r
        <div class="ac-kpi__val">{{ getTotalParticipants() }}</div>\r
        <div class="ac-kpi__delta neutral">inscrits total</div>\r
      </div>\r
    </div>\r
\r
    <!-- Toolbar -->\r
    <div class="ac-toolbar">\r
      <input type="search" class="ac-search__input" placeholder="Rechercher une formation\u2026"\r
             style="flex:1; max-width:280px"\r
             [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone:true}"\r
             (ngModelChange)="searchData($event)">\r
      <select class="ac-select" (change)="filterByStatus($any($event.target).value)">\r
        <option value="all">Tous les statuts</option>\r
        <option value="published">Publi\xE9es</option>\r
        <option value="pending">En attente</option>\r
        <option value="draft">Brouillons</option>\r
      </select>\r
      <div class="ac-spacer"></div>\r
      <ng-container *appHasPermission="'creer formations'">\r
        <a [routerLink]="routes.instructorCourseAdd" class="ac-add-btn">\r
          <i class="isax isax-add"></i> Nouvelle formation\r
        </a>\r
      </ng-container>\r
    </div>\r
\r
    <!-- Error -->\r
    <div *ngIf="error && !loading" class="ac-alert">\r
      <i class="isax isax-warning-2"></i> {{ error }}\r
    </div>\r
\r
    <!-- Skeleton -->\r
    <div *ngIf="loading" class="ac-skeletons">\r
      <div *ngFor="let i of [1,2,3,4,5]" class="ac-skeleton-row"></div>\r
    </div>\r
\r
    <!-- Table -->\r
    <table *ngIf="!loading" class="ac-table">\r
      <thead>\r
        <tr>\r
          <th>Formation</th>\r
          <th>Apprenants</th>\r
          <th>Co\xFBt</th>\r
          <th>Dur\xE9e</th>\r
          <th>Statut</th>\r
          <th>Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let f of tableData; trackBy: trackByFormation">\r
          <td>\r
            <div class="ac-table-cell">\r
              <a [href]="routes.courseDetails + '/' + f.id" target="_blank" class="ac-course-img">\r
                <img [src]="getDefaultImage(f)" [alt]="f.titre" onerror="this.src='assets/img/course/course-01.jpg'">\r
              </a>\r
              <div>\r
                <a [href]="routes.courseDetails + '/' + f.id" target="_blank" class="ac-course-title">{{ f.titre }}</a>\r
                <div class="ac-table-sub">\r
                  <span><i class="isax isax-video-circle"></i> {{ f.nombre_modules || 0 }} modules</span>\r
                  <span><i class="isax isax-flag"></i> {{ f.niveau || 'N/A' }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </td>\r
          <td>\r
            <span class="ac-pill"><i class="isax isax-people"></i> {{ $any(f).nb_participants || 0 }}/{{ f.nb_max_participants || '\u221E' }}</span>\r
          </td>\r
          <td>\r
            <span [class]="isFormationGratuite(f) ? 'ac-badge ac-badge--free' : 'ac-badge ac-badge--paid'">\r
              {{ formatPrix(f.prix) }}\r
            </span>\r
          </td>\r
          <td>\r
            <span class="ac-pill"><i class="isax isax-clock"></i> {{ getDuree(f) }}</span>\r
          </td>\r
          <td>\r
            <span class="ac-status" [attr.data-s]="getStatusKey(f)">{{ getStatusText(f) }}</span>\r
          </td>\r
          <td>\r
            <div class="ac-actions">\r
              <a [href]="routes.courseDetails + '/' + f.id" target="_blank" class="ac-act" title="Voir">\r
                <i class="isax isax-eye"></i>\r
              </a>\r
              <a [href]="'/courses/instructor-course-edit/' + f.id" target="_blank" class="ac-act" title="Modifier">\r
                <i class="isax isax-edit-2"></i>\r
              </a>\r
              <button type="button" class="ac-act"\r
                      [class.ac-act--warn]="f.est_publie" [class.ac-act--ok]="!f.est_publie"\r
                      [title]="f.est_publie ? 'D\xE9publier' : 'Publier'"\r
                      (click)="togglePublishStatus(f)">\r
                <i [class]="'isax ' + (f.est_publie ? 'isax-eye-slash' : 'isax-send-2')"></i>\r
              </button>\r
              <ng-container *appHasPermission="'assigner formations'">\r
                <button type="button" class="ac-act ac-act--people" title="Participants" (click)="openParticipants(f)">\r
                  <i class="isax isax-people"></i>\r
                </button>\r
              </ng-container>\r
              <button type="button" class="ac-act ac-act--arch" title="Archiver" (click)="archiveFormation(f)">\r
                <i class="isax isax-archive"></i>\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
        <tr *ngIf="!tableData.length">\r
          <td colspan="6" class="ac-empty">\r
            <i class="isax isax-book-1" style="font-size:2rem;display:block;margin-bottom:8px"></i>\r
            Aucune formation trouv\xE9e\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
\r
    <!-- Pagination -->\r
    <div class="ac-pager" *ngIf="!loading && totalData > pageSize">\r
      <span class="ac-pager__info">{{ skip + 1 }}\u2013{{ skip + tableData.length }} sur {{ totalData }}</span>\r
      <div class="ac-pager__btns">\r
        <button type="button" class="ac-pager__btn" [disabled]="currentPage === 1"\r
                (click)="onPageChange(currentPage - 1)">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
        <button type="button" *ngFor="let p of pageNumberArray; let i = index"\r
                class="ac-pager__btn" [class.active]="currentPage === i + 1"\r
                (click)="onPageChange(i + 1)">{{ i + 1 }}</button>\r
        <button type="button" class="ac-pager__btn"\r
                [disabled]="currentPage === pageNumberArray.length"\r
                (click)="onPageChange(currentPage + 1)">\r
          <i class="isax isax-arrow-right-3"></i>\r
        </button>\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
\r
  <!-- Modal confirmation publier/d\xE9publier -->\r
  <div class="ac-overlay" *ngIf="publishTarget" (click)="publishTarget = null">\r
    <div class="ac-confirm-modal" (click)="$event.stopPropagation()">\r
      <div class="ac-confirm-icon" [class.ac-confirm-icon--warn]="publishTarget?.est_publie"\r
           [class.ac-confirm-icon--ok]="!publishTarget?.est_publie">\r
        <i [class]="'isax ' + (publishTarget?.est_publie ? 'isax-eye-slash' : 'isax-send-2')"></i>\r
      </div>\r
      <h4>{{ publishTarget?.est_publie ? 'D\xE9publier' : 'Publier' }} la formation</h4>\r
      <p>{{ publishTarget?.est_publie\r
            ? 'Cette formation ne sera plus visible par les apprenants.'\r
            : 'Cette formation sera visible par tous les apprenants.' }}</p>\r
      <div class="ac-confirm-btns">\r
        <button type="button" class="ac-btn-ghost" (click)="publishTarget = null">Annuler</button>\r
        <button type="button"\r
                [class]="publishTarget?.est_publie ? 'ac-btn-warn' : 'ac-btn-ok'"\r
                (click)="confirmTogglePublish()">\r
          {{ publishTarget?.est_publie ? 'D\xE9publier' : 'Publier' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       TAB 2 : PARCOURS\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="activeTab === 'parcours'">\r
\r
    <!-- Toolbar -->\r
    <div class="ac-toolbar">\r
      <div class="ac-search">\r
        <i class="isax isax-search-normal-1 ac-search__icon"></i>\r
        <input type="search" class="ac-search__input" placeholder="Rechercher un parcours..."\r
               [(ngModel)]="parcoursSearch" [ngModelOptions]="{standalone:true}"\r
               (ngModelChange)="applyParcoursFilters()">\r
      </div>\r
      <button type="button" class="ac-chip" [class.ac-chip--on]="parcoursStatut === ''"\r
              (click)="parcoursStatut=''; applyParcoursFilters()">Tous</button>\r
      <button type="button" class="ac-chip" [class.ac-chip--on]="parcoursStatut === 'actif'"\r
              (click)="parcoursStatut='actif'; applyParcoursFilters()">Actifs</button>\r
      <button type="button" class="ac-chip" [class.ac-chip--on]="parcoursStatut === 'archive'"\r
              (click)="parcoursStatut='archive'; applyParcoursFilters()">Archiv\xE9s</button>\r
      <div class="ac-spacer"></div>\r
      <ng-container *appHasPermission="'creer parcours'">\r
        <button type="button" class="ac-add-btn" (click)="openWizardCreate()">\r
          <i class="isax isax-add"></i> Nouveau parcours\r
        </button>\r
      </ng-container>\r
    </div>\r
\r
    <!-- KPI row -->\r
    <div class="ac-kpi-row">\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-route-square"></i> Total parcours</div>\r
        <div class="ac-kpi__val">{{ parcours.length }}</div>\r
        <div class="ac-kpi__delta neutral">{{ getParcoursActifs() }} actifs</div>\r
      </div>\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-tick-circle"></i> Actifs</div>\r
        <div class="ac-kpi__val">{{ getParcoursActifs() }}</div>\r
        <div class="ac-kpi__delta neutral">en cours</div>\r
      </div>\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-book-1"></i> R\xE9sultats</div>\r
        <div class="ac-kpi__val">{{ parcoursFiltered.length }}</div>\r
        <div class="ac-kpi__delta neutral">filtr\xE9s</div>\r
      </div>\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-people"></i> Inactifs</div>\r
        <div class="ac-kpi__val">{{ parcours.length - getParcoursActifs() }}</div>\r
        <div class="ac-kpi__delta neutral">non actifs</div>\r
      </div>\r
    </div>\r
\r
    <!-- Skeleton -->\r
    <div *ngIf="parcoursLoading" class="ac-skeletons">\r
      <div *ngFor="let i of [1,2,3,4,5,6]" class="ac-skeleton-card"></div>\r
    </div>\r
\r
    <!-- Card grid -->\r
    <div *ngIf="!parcoursLoading" class="ac-card-grid">\r
      <div *ngFor="let p of parcoursFiltered" class="ac-fcard">\r
        <div class="ac-fcard__thumb" [attr.data-th]="p.actif ? 'blue' : 'amber'">\r
          <img *ngIf="p.image_url" [src]="p.image_url" [alt]="p.nom" class="ac-fcard__img">\r
          <i *ngIf="!p.image_url" class="isax isax-route-square"></i>\r
        </div>\r
        <div class="ac-fcard__body">\r
          <div class="ac-fcard__cat" [attr.data-cat]="p.actif ? 'tech' : 'default'">{{ getNiveauLabel(p.niveau) }}</div>\r
          <div class="ac-fcard__title">{{ p.nom }}</div>\r
          <div class="ac-fcard__meta">\r
            <span><i class="isax isax-clock"></i> {{ p.duree_estimee }}h</span>\r
            <span><i class="isax isax-book-1"></i> {{ p.formations?.length || 0 }} formations</span>\r
            <span><i class="isax isax-people"></i> {{ p.users?.length || 0 }} inscrits</span>\r
          </div>\r
        </div>\r
        <div class="ac-fcard__footer">\r
          <span class="ac-status" [attr.data-s]="p.actif ? 'pub' : 'draft'">{{ p.actif ? 'Actif' : 'Inactif' }}</span>\r
          <div class="ac-fcard__actions" style="margin-left:auto">\r
            <button type="button" class="ac-act" title="Voir" (click)="openWizardView(p)">\r
              <i class="isax isax-eye"></i>\r
            </button>\r
            <button type="button" class="ac-act" title="Modifier" (click)="openWizardEdit(p)">\r
              <i class="isax isax-edit-2"></i>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="!parcoursFiltered.length && !parcoursLoading" class="ac-empty ac-empty--span">\r
        <i class="isax isax-route-square"></i>\r
        <p>Aucun parcours trouv\xE9</p>\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       TAB 3 : CATALOGUE\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="activeTab === 'catalogue'">\r
\r
    <!-- Toolbar row 1 : search + trier + add -->\r
    <div class="ac-toolbar">\r
      <div class="ac-search">\r
        <i class="isax isax-search-normal-1 ac-search__icon"></i>\r
        <input type="search" class="ac-search__input" placeholder="Rechercher dans le catalogue..."\r
               [(ngModel)]="catalogueSearch" [ngModelOptions]="{standalone:true}"\r
               (ngModelChange)="applyCatalogueFilters()">\r
      </div>\r
      <div class="ac-spacer"></div>\r
      <button type="button" class="ac-view-btn" title="Trier">\r
        <i class="isax isax-sort"></i>\r
      </button>\r
      <ng-container *appHasPermission="'creer catalogues'">\r
        <button type="button" class="ac-add-btn" (click)="openCatWizardCreate()">\r
          <i class="isax isax-add"></i> Nouveau catalogue\r
        </button>\r
      </ng-container>\r
    </div>\r
    <!-- Toolbar row 2 : type chips -->\r
    <div class="ac-toolbar ac-toolbar--chips">\r
      <button type="button" class="ac-chip" [class.ac-chip--on]="catalogueType === ''"\r
              (click)="catalogueType=''; applyCatalogueFilters()">Tout</button>\r
      <button type="button" class="ac-chip" *ngFor="let t of catalogueTypes"\r
              [class.ac-chip--on]="catalogueType === t"\r
              (click)="catalogueType=t; applyCatalogueFilters()">{{ t }}</button>\r
    </div>\r
\r
    <!-- KPI row -->\r
    <div class="ac-kpi-row">\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-category"></i> Total catalogues</div>\r
        <div class="ac-kpi__val">{{ catalogues.length }}</div>\r
        <div class="ac-kpi__delta neutral">catalogues</div>\r
      </div>\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-book-1"></i> R\xE9sultats</div>\r
        <div class="ac-kpi__val">{{ cataloguesFiltered.length }}</div>\r
        <div class="ac-kpi__delta neutral">filtr\xE9s</div>\r
      </div>\r
    </div>\r
\r
    <!-- Skeleton -->\r
    <div *ngIf="catalogueLoading" class="ac-skeletons">\r
      <div *ngFor="let i of [1,2,3]" class="ac-skeleton-card"></div>\r
    </div>\r
\r
    <!-- Card grid -->\r
    <div *ngIf="!catalogueLoading" class="ac-card-grid">\r
      <div *ngFor="let c of cataloguesFiltered" class="ac-fcard">\r
        <div class="ac-fcard__thumb" [attr.data-th]="getCatalogueThumb(c)">\r
          <i class="isax isax-category"></i>\r
        </div>\r
        <div class="ac-fcard__body">\r
          <div class="ac-fcard__cat" [attr.data-cat]="'default'">{{ c.type || 'G\xE9n\xE9ral' }}</div>\r
          <div class="ac-fcard__title">{{ c.titre }}</div>\r
          <div class="ac-fcard__meta">\r
            <span><i class="isax isax-book-1"></i> {{ c.nombre_formations || c.formations?.length || 0 }} formations</span>\r
            <span *ngIf="c.duree_totale"><i class="isax isax-clock"></i> {{ c.duree_totale }}h</span>\r
            <span *ngIf="c.metadata?.niveau"><i class="isax isax-award"></i> {{ c.metadata.niveau }}</span>\r
          </div>\r
        </div>\r
        <div class="ac-fcard__footer">\r
          <span class="ac-status" [attr.data-s]="c.est_publie ? 'pub' : 'draft'">\r
            {{ c.est_publie ? 'Publi\xE9' : 'Brouillon' }}\r
          </span>\r
          <div class="ac-fcard__actions" style="margin-left:auto">\r
            <button type="button" class="ac-act" title="Voir" (click)="openCatWizardView(c)">\r
              <i class="isax isax-eye"></i>\r
            </button>\r
            <button type="button" class="ac-act" title="Modifier" (click)="openCatWizardEdit(c)">\r
              <i class="isax isax-edit-2"></i>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="!cataloguesFiltered.length && !catalogueLoading" class="ac-empty ac-empty--span">\r
        <i class="isax isax-category"></i>\r
        <p>Aucun catalogue trouv\xE9</p>\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       TAB 4 : SESSIONS\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="activeTab === 'sessions'">\r
\r
    <!-- Toolbar -->\r
    <div class="ac-toolbar">\r
      <div class="ac-search">\r
        <i class="isax isax-search-normal-1 ac-search__icon"></i>\r
        <input type="search" class="ac-search__input" placeholder="Rechercher une session..."\r
               [(ngModel)]="sessionsSearch" [ngModelOptions]="{standalone:true}"\r
               (ngModelChange)="applySessionsFilters()">\r
      </div>\r
      <!-- Vue toggle Liste / Calendrier -->\r
      <div class="ac-view-group">\r
        <button type="button" class="ac-view-toggle" [class.active]="sessionsView === 'list'"\r
                (click)="sessionsView='list'">\r
          <i class="isax isax-row-vertical"></i> Liste\r
        </button>\r
        <button type="button" class="ac-view-toggle" [class.active]="sessionsView === 'calendar'"\r
                (click)="sessionsView='calendar'">\r
          <i class="isax isax-calendar-1"></i> Calendrier\r
        </button>\r
      </div>\r
      <div class="ac-spacer"></div>\r
      <a [routerLink]="routes.adminrhSession" class="ac-add-btn">\r
        <i class="isax isax-add"></i> Planifier\r
      </a>\r
    </div>\r
\r
    <!-- Chips de modalit\xE9 -->\r
    <div class="ac-toolbar ac-toolbar--chips">\r
      <button type="button" class="ac-chip" [class.ac-chip--on]="sessionsType === ''"\r
              (click)="sessionsType=''; applySessionsFilters()">Tous</button>\r
      <button type="button" class="ac-chip" [class.ac-chip--on]="sessionsType === 'presentiel'"\r
              (click)="sessionsType='presentiel'; applySessionsFilters()">Pr\xE9sentiel</button>\r
      <button type="button" class="ac-chip" [class.ac-chip--on]="sessionsType === 'distanciel'"\r
              (click)="sessionsType='distanciel'; applySessionsFilters()">Distanciel</button>\r
      <button type="button" class="ac-chip" [class.ac-chip--on]="sessionsType === 'hybride'"\r
              (click)="sessionsType='hybride'; applySessionsFilters()">Hybride</button>\r
    </div>\r
\r
    <!-- KPI row -->\r
    <div class="ac-kpi-row">\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-calendar-1"></i> Total sessions</div>\r
        <div class="ac-kpi__val">{{ sessions.length }}</div>\r
        <div class="ac-kpi__delta neutral">{{ sessionsFiltered.length }} filtr\xE9s</div>\r
      </div>\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-play-circle"></i> En cours</div>\r
        <div class="ac-kpi__val">{{ getSessionsCount('en_cours') }}</div>\r
        <div class="ac-kpi__delta neutral">actives</div>\r
      </div>\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-tick-circle"></i> Termin\xE9es</div>\r
        <div class="ac-kpi__val">{{ getSessionsCount('terminee') }}</div>\r
        <div class="ac-kpi__delta neutral">compl\xE8tes</div>\r
      </div>\r
      <div class="ac-kpi">\r
        <div class="ac-kpi__label"><i class="isax isax-monitor"></i> Distanciel</div>\r
        <div class="ac-kpi__val">{{ getSessionsByType('distanciel') }}</div>\r
        <div class="ac-kpi__delta neutral">/ {{ getSessionsByType('presentiel') }} pr\xE9sentiel</div>\r
      </div>\r
    </div>\r
\r
    <!-- Skeleton -->\r
    <div *ngIf="sessionsLoading" class="ac-skeletons">\r
      <div *ngFor="let i of [1,2,3]" class="ac-skeleton-card"></div>\r
    </div>\r
\r
    <!-- \u2500\u2500\u2500 VUE LISTE \u2500\u2500\u2500 -->\r
    <ng-container *ngIf="!sessionsLoading && sessionsView === 'list'">\r
      <div class="ac-sessions-list">\r
        <div *ngFor="let s of sessionsFiltered" class="ac-session-row">\r
          <div class="ac-session-date">\r
            <span class="ac-session-date__day">{{ getSessionDay(s.date_debut) }}</span>\r
            <span class="ac-session-date__month">{{ getSessionMonth(s.date_debut) }}</span>\r
          </div>\r
          <div class="ac-session-info">\r
            <div class="ac-session-title">{{ s.titre || s.formation?.titre || '\u2014' }}</div>\r
            <div class="ac-session-meta">\r
              <span><i class="isax isax-clock"></i> {{ formatSessionDate(s.date_debut) }}</span>\r
              <span *ngIf="s.formateur?.name"><i class="isax isax-user"></i> {{ s.formateur.name }}</span>\r
              <span *ngIf="s.lieu"><i class="isax isax-building"></i> {{ s.lieu }}</span>\r
            </div>\r
          </div>\r
          <div class="ac-session-badges">\r
            <span class="ac-status" [attr.data-s]="s.type === 'distanciel' ? 'pending' : s.type === 'hybride' ? 'plan' : 'pub'">\r
              {{ s.type_display || s.type || 'Pr\xE9sentiel' }}\r
            </span>\r
            <span class="ac-session-places">\r
              {{ s.nombre_inscrits ?? 0 }}/{{ s.capacite_max ?? '?' }} places\r
            </span>\r
          </div>\r
          <a [routerLink]="[routes.adminrhSession]" class="ac-add-btn" style="font-size:11px; padding:5px 10px">\r
            Inscrire\r
          </a>\r
        </div>\r
        <div *ngIf="!sessionsFiltered.length" class="ac-empty" style="padding:32px 14px; text-align:center">\r
          <i class="isax isax-calendar-1" style="font-size:2rem; display:block; margin-bottom:8px"></i>\r
          <p>Aucune session trouv\xE9e</p>\r
        </div>\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2500\u2500\u2500 VUE CALENDRIER \u2500\u2500\u2500 -->\r
    <ng-container *ngIf="!sessionsLoading && sessionsView === 'calendar'">\r
      <div class="ac-cal">\r
        <!-- Nav mois -->\r
        <div class="ac-cal__nav">\r
          <button type="button" class="ac-cal__nav-btn" (click)="calendarPrevMonth()">\r
            <i class="isax isax-arrow-left-2"></i>\r
          </button>\r
          <span class="ac-cal__nav-label">{{ calendarMonthLabel | titlecase }}</span>\r
          <button type="button" class="ac-cal__nav-btn" (click)="calendarNextMonth()">\r
            <i class="isax isax-arrow-right-3"></i>\r
          </button>\r
        </div>\r
        <!-- En-t\xEAtes jours -->\r
        <div class="ac-cal__grid">\r
          <div class="ac-cal__head" *ngFor="let d of ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim']">{{ d }}</div>\r
          <!-- Cellules -->\r
          <div *ngFor="let cell of getCalendarDays()"\r
               class="ac-cal__cell"\r
               [class.ac-cal__cell--other]="!isCurrentMonth(cell.date)"\r
               [class.ac-cal__cell--today]="isToday(cell.date)">\r
            <span class="ac-cal__day">{{ cell.date.getDate() }}</span>\r
            <div class="ac-cal__events">\r
              <div *ngFor="let s of cell.sessions" class="ac-cal__event"\r
                   [class.ac-cal__event--dist]="s.type === 'distanciel'"\r
                   [class.ac-cal__event--hybr]="s.type === 'hybride'"\r
                   [title]="s.titre || s.formation?.titre || ''">\r
                {{ s.titre || s.formation?.titre || '\u2014' | slice:0:20 }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </ng-container>\r
\r
  </ng-container>\r
\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     WIZARD MODAL \u2013 PARCOURS\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="wz-overlay" *ngIf="wizardOpen" (click)="closeWizard()">\r
  <div class="wz-modal" (click)="$event.stopPropagation()" [formGroup]="wizardForm">\r
\r
    <!-- Head -->\r
    <div class="wz-head">\r
      <div class="wz-head__icon"><i class="isax isax-route-square"></i></div>\r
      <div class="wz-head__text">\r
        <div class="wz-head__title">\r
          {{ wizardMode === 'create' ? 'Nouveau parcours de formation' : wizardMode === 'edit' ? 'Modifier le parcours' : 'D\xE9tails du parcours' }}\r
        </div>\r
        <div class="wz-head__sub">Configurez le parcours en 4 \xE9tapes</div>\r
      </div>\r
      <button type="button" class="wz-close" (click)="closeWizard()">\r
        <i class="isax isax-close-circle"></i>\r
      </button>\r
    </div>\r
\r
    <!-- Stepper -->\r
    <div class="wz-stepper">\r
      <ng-container *ngFor="let s of [{n:1,l:'Informations'},{n:2,l:'Formations'},{n:3,l:'Param\xE8tres'},{n:4,l:'R\xE9capitulatif'}]; let last=last">\r
        <div class="wz-step">\r
          <div class="wz-step__circle"\r
               [class.done]="wizardStep > s.n"\r
               [class.active]="wizardStep === s.n">\r
            <i *ngIf="wizardStep > s.n" class="isax isax-tick-circle" style="font-size:11px"></i>\r
            <span *ngIf="wizardStep <= s.n">{{ s.n }}</span>\r
          </div>\r
          <span class="wz-step__label"\r
                [class.active]="wizardStep === s.n"\r
                [class.done]="wizardStep > s.n">{{ s.l }}</span>\r
        </div>\r
        <div *ngIf="!last" class="wz-step__line"></div>\r
      </ng-container>\r
    </div>\r
\r
    <!-- Body -->\r
    <div class="wz-body">\r
\r
      <!-- \u2500\u2500 \xC9TAPE 1 : Informations \u2500\u2500 -->\r
      <ng-container *ngIf="wizardStep === 1">\r
        <div class="wz-field wz-field--full">\r
          <label class="wz-label">Titre du parcours <span class="wz-req">*</span></label>\r
          <input type="text" class="wz-input" formControlName="nom"\r
                 placeholder="Ex. : Parcours Manager confirm\xE9"\r
                 [attr.readonly]="wizardMode === 'view' ? '' : null">\r
        </div>\r
        <div class="wz-row">\r
          <div class="wz-field">\r
            <label class="wz-label">Dur\xE9e estim\xE9e (jours) <span class="wz-req">*</span></label>\r
            <input type="number" class="wz-input" formControlName="duree_estimee"\r
                   placeholder="Ex. : 30" min="1"\r
                   [attr.readonly]="wizardMode === 'view' ? '' : null">\r
          </div>\r
          <div class="wz-field">\r
            <label class="wz-label">Prix (XOF)</label>\r
            <input type="number" class="wz-input" formControlName="prix"\r
                   placeholder="0" min="0"\r
                   [attr.readonly]="wizardMode === 'view' ? '' : null">\r
          </div>\r
        </div>\r
        <div class="wz-field wz-field--full">\r
          <label class="wz-label">Description</label>\r
          <textarea class="wz-input wz-textarea" formControlName="description"\r
                    placeholder="D\xE9crivez l'objectif p\xE9dagogique de ce parcours..."\r
                    [attr.readonly]="wizardMode === 'view' ? '' : null"></textarea>\r
          <span class="wz-hint">Visible par les apprenants inscrits</span>\r
        </div>\r
        <label class="wz-label" style="margin-bottom:8px">Domaine <span class="wz-req">*</span></label>\r
        <div class="wz-domain-grid">\r
          <div *ngFor="let d of domains" class="wz-domain-card"\r
               [class.selected]="wizardDomain === d.key"\r
               (click)="wizardMode !== 'view' && (wizardDomain = d.key)">\r
            <i class="isax {{ d.icon }}" [style.color]="d.color"></i>\r
            <span>{{ d.label }}</span>\r
          </div>\r
        </div>\r
      </ng-container>\r
\r
      <!-- \u2500\u2500 \xC9TAPE 2 : Formations \u2500\u2500 -->\r
      <ng-container *ngIf="wizardStep === 2">\r
        <label class="wz-label" style="margin-bottom:6px">Formations s\xE9lectionn\xE9es</label>\r
        <div class="wz-strip">\r
          <ng-container *ngIf="wizardSelectedFormations.length; else noSel">\r
            <span *ngFor="let f of wizardSelectedFormations" class="wz-chip">\r
              {{ f.titre }}\r
              <i *ngIf="wizardMode !== 'view'" class="isax isax-close-circle"\r
                 (click)="wizardRemoveFormation(f)"></i>\r
            </span>\r
          </ng-container>\r
          <ng-template #noSel>\r
            <span class="wz-strip__hint">Aucune formation ajout\xE9e \u2014 s\xE9lectionnez ci-dessous</span>\r
          </ng-template>\r
        </div>\r
\r
        <label class="wz-label" style="margin-bottom:6px">Catalogue disponible</label>\r
        <div class="wz-pool">\r
          <div class="wz-pool__search">\r
            <i class="isax isax-search-normal-1"></i>\r
            <input type="search" placeholder="Rechercher une formation..."\r
                   [(ngModel)]="wizardPoolSearch" [ngModelOptions]="{standalone:true}">\r
          </div>\r
          <div class="wz-pool__list">\r
            <div *ngIf="wizardLoadingFormations" class="wz-pool__empty">Chargement...</div>\r
            <div *ngFor="let f of wizardPoolFiltered" class="wz-pool__item"\r
                 (click)="wizardToggleFormation(f)"\r
                 [class.checked]="isWizardFormationSelected(f)">\r
              <div class="wz-pool__check" [class.on]="isWizardFormationSelected(f)">\r
                <i *ngIf="isWizardFormationSelected(f)" class="isax isax-tick-circle"></i>\r
              </div>\r
              <div class="wz-pool__thumb" [attr.data-th]="wizardGetFormationThumb(f)">\r
                <i class="isax isax-book-1"></i>\r
              </div>\r
              <div class="wz-pool__info">\r
                <div class="wz-pool__name">{{ f.titre }}</div>\r
                <div class="wz-pool__meta">\r
                  {{ f.duree_totale ? (f.duree_totale + 'h') : '' }}\r
                  {{ f.categorie?.nom ? '\xB7 ' + f.categorie?.nom : '' }}\r
                </div>\r
              </div>\r
              <span class="wz-pool__tag">{{ f.categorie?.nom || '\u2014' }}</span>\r
            </div>\r
            <div *ngIf="!wizardLoadingFormations && !wizardPoolFiltered.length" class="wz-pool__empty">\r
              Aucune formation trouv\xE9e\r
            </div>\r
          </div>\r
        </div>\r
        <p class="wz-hint" style="margin-top:6px">L'ordre des formations d\xE9finit la s\xE9quence du parcours.</p>\r
      </ng-container>\r
\r
      <!-- \u2500\u2500 \xC9TAPE 3 : Param\xE8tres \u2500\u2500 -->\r
      <ng-container *ngIf="wizardStep === 3">\r
        <div class="wz-row" style="margin-bottom:14px">\r
          <div class="wz-field">\r
            <label class="wz-label">Score minimum requis (%)</label>\r
            <input type="number" class="wz-input" formControlName="score_min"\r
                   placeholder="70" min="0" max="100"\r
                   [attr.readonly]="wizardMode === 'view' ? '' : null">\r
          </div>\r
          <div class="wz-field">\r
            <label class="wz-label">Statut</label>\r
            <select class="wz-input" formControlName="actif"\r
                    [attr.disabled]="wizardMode === 'view' ? '' : null">\r
              <option [ngValue]="true">Actif</option>\r
              <option [ngValue]="false">Inactif</option>\r
            </select>\r
          </div>\r
        </div>\r
        <label class="wz-label" style="margin-bottom:10px">Options du parcours</label>\r
        <div class="wz-toggles">\r
          <div class="wz-toggle-row">\r
            <div class="wz-toggle-info">\r
              <div class="wz-toggle-title">Certificat \xE0 l'issue du parcours</div>\r
              <div class="wz-toggle-sub">G\xE9n\xE8re automatiquement un certificat PDF pour les apprenants ayant r\xE9ussi</div>\r
            </div>\r
            <div class="wz-toggle" [class.on]="wizardForm.value.certificat"\r
                 (click)="wizardMode !== 'view' && wizardForm.patchValue({certificat: !wizardForm.value.certificat})"></div>\r
          </div>\r
          <div class="wz-toggle-row">\r
            <div class="wz-toggle-info">\r
              <div class="wz-toggle-title">Progression s\xE9quentielle obligatoire</div>\r
              <div class="wz-toggle-sub">L'apprenant doit terminer chaque formation avant de passer \xE0 la suivante</div>\r
            </div>\r
            <div class="wz-toggle" [class.on]="wizardForm.value.sequentielle"\r
                 (click)="wizardMode !== 'view' && wizardForm.patchValue({sequentielle: !wizardForm.value.sequentielle})"></div>\r
          </div>\r
          <div class="wz-toggle-row">\r
            <div class="wz-toggle-info">\r
              <div class="wz-toggle-title">Notifications de progression</div>\r
              <div class="wz-toggle-sub">Envoie des rappels aux apprenants inactifs depuis plus de 7 jours</div>\r
            </div>\r
            <div class="wz-toggle" [class.on]="wizardForm.value.notifications"\r
                 (click)="wizardMode !== 'view' && wizardForm.patchValue({notifications: !wizardForm.value.notifications})"></div>\r
          </div>\r
          <div class="wz-toggle-row">\r
            <div class="wz-toggle-info">\r
              <div class="wz-toggle-title">Demande de validation RH requise</div>\r
              <div class="wz-toggle-sub">L'Admin RH doit approuver chaque inscription avant acc\xE8s</div>\r
            </div>\r
            <div class="wz-toggle" [class.on]="wizardForm.value.validation_rh"\r
                 (click)="wizardMode !== 'view' && wizardForm.patchValue({validation_rh: !wizardForm.value.validation_rh})"></div>\r
          </div>\r
        </div>\r
      </ng-container>\r
\r
      <!-- \u2500\u2500 \xC9TAPE 4 : R\xE9capitulatif \u2500\u2500 -->\r
      <ng-container *ngIf="wizardStep === 4">\r
        <div class="wz-info-banner">\r
          <i class="isax isax-info-circle"></i>\r
          <span>V\xE9rifiez les informations avant de {{ wizardMode === 'create' ? 'cr\xE9er' : 'sauvegarder' }} le parcours.</span>\r
        </div>\r
        <div class="wz-recap-card">\r
          <div class="wz-recap-title">Informations g\xE9n\xE9rales</div>\r
          <div class="wz-recap-row"><span class="wz-rl">Titre</span><span class="wz-rv">{{ wizardForm.value.nom || '\u2014' }}</span></div>\r
          <div class="wz-recap-row"><span class="wz-rl">Domaine</span><span class="wz-rv">{{ wizardDomain || '\u2014' }}</span></div>\r
          <div class="wz-recap-row"><span class="wz-rl">Dur\xE9e estim\xE9e</span><span class="wz-rv">{{ wizardForm.value.duree_estimee }} jours</span></div>\r
          <div class="wz-recap-row"><span class="wz-rl">Prix</span><span class="wz-rv">{{ wizardForm.value.prix || '0' }} XOF</span></div>\r
          <div class="wz-recap-row"><span class="wz-rl">Statut</span><span class="wz-rv">{{ wizardForm.value.actif ? 'Actif' : 'Inactif' }}</span></div>\r
        </div>\r
        <div class="wz-recap-card">\r
          <div class="wz-recap-title">Formations incluses ({{ wizardSelectedFormations.length }})</div>\r
          <div class="wz-recap-chips" *ngIf="wizardSelectedFormations.length; else noFormations">\r
            <span *ngFor="let f of wizardSelectedFormations" class="wz-rc">{{ f.titre }}</span>\r
          </div>\r
          <ng-template #noFormations><span class="wz-rc">Aucune s\xE9lectionn\xE9e</span></ng-template>\r
        </div>\r
        <div class="wz-recap-card" style="margin-bottom:0">\r
          <div class="wz-recap-title">Param\xE8tres</div>\r
          <div class="wz-recap-row"><span class="wz-rl">Certificat final</span>\r
            <span class="wz-rv" [style.color]="wizardForm.value.certificat ? '#3B6D11' : '#A32D2D'">\r
              {{ wizardForm.value.certificat ? 'Activ\xE9' : 'D\xE9sactiv\xE9' }}</span></div>\r
          <div class="wz-recap-row"><span class="wz-rl">Progression s\xE9quentielle</span>\r
            <span class="wz-rv" [style.color]="wizardForm.value.sequentielle ? '#3B6D11' : '#A32D2D'">\r
              {{ wizardForm.value.sequentielle ? 'Obligatoire' : 'Libre' }}</span></div>\r
          <div class="wz-recap-row"><span class="wz-rl">Validation RH</span>\r
            <span class="wz-rv" [style.color]="wizardForm.value.validation_rh ? '#3B6D11' : '#A32D2D'">\r
              {{ wizardForm.value.validation_rh ? 'Requise' : 'Non requise' }}</span></div>\r
          <div class="wz-recap-row"><span class="wz-rl">Score minimum</span><span class="wz-rv">{{ wizardForm.value.score_min }}%</span></div>\r
        </div>\r
        <div *ngIf="wizardError" class="wz-error">\r
          <i class="isax isax-warning-2"></i> {{ wizardError }}\r
        </div>\r
      </ng-container>\r
\r
    </div>\r
\r
    <!-- Footer -->\r
    <div class="wz-foot">\r
      <span class="wz-foot__info">\xC9tape {{ wizardStep }} sur 4</span>\r
      <button type="button" class="wz-btn-ghost" *ngIf="wizardStep > 1" (click)="wizardPrev()">Retour</button>\r
      <button type="button" class="wz-btn-ghost" *ngIf="wizardStep === 1" (click)="closeWizard()">Annuler</button>\r
      <button type="button" class="wz-btn-primary" *ngIf="wizardStep < 4" (click)="wizardNext()">\r
        Suivant <i class="isax isax-arrow-right-3"></i>\r
      </button>\r
      <button type="button" *ngIf="wizardStep === 4 && wizardMode !== 'view'"\r
              class="wz-btn-success" [disabled]="wizardSaving" (click)="wizardSubmit()">\r
        <i class="isax isax-tick-circle"></i>\r
        {{ wizardSaving ? 'Enregistrement...' : (wizardMode === 'create' ? 'Cr\xE9er le parcours' : 'Sauvegarder') }}\r
      </button>\r
      <button type="button" *ngIf="wizardStep === 4 && wizardMode === 'view'"\r
              class="wz-btn-primary" (click)="closeWizard()">Fermer</button>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     WIZARD MODAL \u2013 CATALOGUE\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="cw-overlay" *ngIf="catWizardOpen" (click)="closeCatWizard()">\r
  <div class="cw-modal" (click)="$event.stopPropagation()" [formGroup]="catWizardForm">\r
\r
    <!-- Head -->\r
    <div class="cw-head">\r
      <div class="cw-head__icon"><i class="isax isax-category"></i></div>\r
      <div class="cw-head__text">\r
        <div class="cw-head__title">\r
          {{ catWizardMode === 'create' ? 'Nouveau catalogue' : catWizardMode === 'edit' ? 'Modifier le catalogue' : 'D\xE9tails du catalogue' }}\r
        </div>\r
        <div class="cw-head__sub">{{ catWizardMode === 'view' ? 'Consultation uniquement' : 'Renseignez les informations du catalogue' }}</div>\r
      </div>\r
      <button type="button" class="cw-close" (click)="closeCatWizard()">\r
        <i class="isax isax-close-circle"></i>\r
      </button>\r
    </div>\r
\r
    <!-- Body -->\r
    <div class="cw-body">\r
\r
      <!-- Image upload zone -->\r
      <div class="cw-upload-zone" *ngIf="catWizardMode !== 'view'">\r
        <i class="isax isax-gallery-add"></i>\r
        <span>Glissez une image de couverture ici</span>\r
        <span class="cw-upload-zone__hint">PNG, JPG jusqu'\xE0 2 Mo \u2014 recommand\xE9 1200 \xD7 400 px</span>\r
      </div>\r
\r
      <!-- Titre -->\r
      <div class="cw-field">\r
        <label class="cw-label">Titre du catalogue <span class="cw-req">*</span></label>\r
        <input type="text" class="cw-input" formControlName="titre"\r
               placeholder="Ex. : Catalogue Management 2025"\r
               [attr.readonly]="catWizardMode === 'view' ? '' : null">\r
        <span class="cw-hint">Ce titre sera visible par les apprenants</span>\r
      </div>\r
\r
      <!-- Short description -->\r
      <div class="cw-field">\r
        <label class="cw-label">Description courte <span class="cw-req">*</span></label>\r
        <input type="text" class="cw-input" formControlName="short_description"\r
               placeholder="Une phrase r\xE9sumant ce catalogue..."\r
               [attr.readonly]="catWizardMode === 'view' ? '' : null">\r
      </div>\r
\r
      <!-- Description longue -->\r
      <div class="cw-field">\r
        <label class="cw-label">Description compl\xE8te</label>\r
        <textarea class="cw-input cw-textarea" formControlName="description"\r
                  placeholder="D\xE9crivez le contenu, les objectifs p\xE9dagogiques..."\r
                  [attr.readonly]="catWizardMode === 'view' ? '' : null"></textarea>\r
      </div>\r
\r
      <!-- Formateur + Dur\xE9e -->\r
      <div class="cw-row">\r
        <div class="cw-field">\r
          <label class="cw-label">Dur\xE9e totale (h)</label>\r
          <input type="number" class="cw-input" formControlName="duree_totale"\r
                 placeholder="Ex. : 12" min="0"\r
                 [attr.readonly]="catWizardMode === 'view' ? '' : null">\r
        </div>\r
        <div class="cw-field">\r
          <label class="cw-label">Certifiante</label>\r
          <div class="cw-toggle-inline">\r
            <div class="cw-toggle" [class.on]="catWizardForm.value.est_certifiante"\r
                 (click)="catWizardMode !== 'view' && catWizardForm.patchValue({est_certifiante: !catWizardForm.value.est_certifiante})">\r
            </div>\r
            <span class="cw-toggle-label">{{ catWizardForm.value.est_certifiante ? 'Oui' : 'Non' }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Domaines -->\r
      <div class="cw-section-label">Domaine</div>\r
      <div class="cw-domain-grid">\r
        <div *ngFor="let d of catDomains" class="cw-domain-card"\r
             [class.selected]="catWizardDomains.includes(d.key)"\r
             (click)="catWizardToggleDomain(d.key)">\r
          <i class="isax {{ d.icon }}"></i>\r
          <span>{{ d.label }}</span>\r
        </div>\r
      </div>\r
\r
      <!-- Niveau -->\r
      <div class="cw-section-label">Niveau</div>\r
      <div class="cw-level-row">\r
        <div *ngFor="let lv of catLevels" class="cw-level-card"\r
             [class.selected]="catWizardLevel === lv.key"\r
             (click)="catWizardMode !== 'view' && (catWizardLevel = lv.key)">\r
          <div class="cw-level-card__label">{{ lv.label }}</div>\r
          <div class="cw-level-card__sub">{{ lv.sub }}</div>\r
        </div>\r
      </div>\r
\r
      <!-- Mots-cl\xE9s / Tags -->\r
      <div class="cw-field" style="margin-top:12px">\r
        <label class="cw-label">Mots-cl\xE9s</label>\r
        <div class="cw-tags-box">\r
          <span *ngFor="let tag of catWizardTags" class="cw-tag">\r
            {{ tag }}\r
            <i *ngIf="catWizardMode !== 'view'" class="isax isax-close-circle"\r
               (click)="catWizardRemoveTag(tag)"></i>\r
          </span>\r
          <input *ngIf="catWizardMode !== 'view'"\r
                 type="text" class="cw-tag-input" placeholder="Ajouter un mot-cl\xE9..."\r
                 [(ngModel)]="catWizardTagInput" [ngModelOptions]="{standalone:true}"\r
                 (keydown)="catWizardAddTag($event)">\r
        </div>\r
        <span class="cw-hint">Appuyez sur Entr\xE9e pour ajouter un mot-cl\xE9</span>\r
      </div>\r
\r
      <!-- Formations incluses -->\r
      <div class="cw-section-label">Formations incluses</div>\r
\r
      <!-- S\xE9lection courante -->\r
      <div class="cw-strip">\r
        <ng-container *ngIf="catWizardSelectedFormations.length; else catNoSel">\r
          <span *ngFor="let f of catWizardSelectedFormations" class="cw-tag">\r
            {{ f.titre }}\r
            <i *ngIf="catWizardMode !== 'view'" class="isax isax-close-circle"\r
               (click)="catWizardRemoveFormation(f)"></i>\r
          </span>\r
        </ng-container>\r
        <ng-template #catNoSel>\r
          <span class="cw-strip-hint">Aucune formation s\xE9lectionn\xE9e</span>\r
        </ng-template>\r
      </div>\r
\r
      <!-- Pool de s\xE9lection -->\r
      <div class="cw-pool" *ngIf="catWizardMode !== 'view'">\r
        <div class="cw-pool__search">\r
          <i class="isax isax-search-normal-1"></i>\r
          <input type="search" placeholder="Rechercher une formation..."\r
                 [(ngModel)]="catWizardPoolSearch" [ngModelOptions]="{standalone:true}">\r
        </div>\r
        <div class="cw-pool__list">\r
          <div *ngIf="wizardLoadingFormations" class="cw-pool__empty">Chargement...</div>\r
          <div *ngFor="let f of catWizardPoolFiltered" class="cw-pool__item"\r
               [class.checked]="isCatFormationSelected(f)"\r
               (click)="catWizardToggleFormation(f)">\r
            <div class="cw-pool__check" [class.on]="isCatFormationSelected(f)">\r
              <i *ngIf="isCatFormationSelected(f)" class="isax isax-tick-circle"></i>\r
            </div>\r
            <div class="cw-pool__info">\r
              <div class="cw-pool__name">{{ f.titre }}</div>\r
              <div class="cw-pool__meta">\r
                {{ f.duree_totale ? (f.duree_totale + 'h') : '' }}\r
                {{ f.categorie?.nom ? '\xB7 ' + f.categorie?.nom : '' }}\r
              </div>\r
            </div>\r
          </div>\r
          <div *ngIf="!wizardLoadingFormations && !catWizardPoolFiltered.length" class="cw-pool__empty">\r
            Aucune formation trouv\xE9e\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Visibilit\xE9 -->\r
      <div class="cw-section-label" style="margin-top:12px">Visibilit\xE9</div>\r
      <div class="cw-vis-row">\r
        <div class="cw-vis-card" [class.selected]="catWizardVisibility === 'entreprise'"\r
             (click)="catWizardMode !== 'view' && (catWizardVisibility = 'entreprise')">\r
          <i class="isax isax-buildings-2"></i>\r
          <div class="cw-vis-card__label">Mon entreprise</div>\r
          <div class="cw-vis-card__sub">Accessible uniquement aux collaborateurs</div>\r
        </div>\r
        <div class="cw-vis-card" [class.selected]="catWizardVisibility === 'public'"\r
             (click)="catWizardMode !== 'view' && (catWizardVisibility = 'public')">\r
          <i class="isax isax-global"></i>\r
          <div class="cw-vis-card__label">Public</div>\r
          <div class="cw-vis-card__sub">Visible par tous les apprenants</div>\r
        </div>\r
      </div>\r
\r
      <!-- Error -->\r
      <div *ngIf="catWizardError" class="cw-error">\r
        <i class="isax isax-warning-2"></i> {{ catWizardError }}\r
      </div>\r
\r
    </div>\r
\r
    <!-- Footer -->\r
    <div class="cw-foot">\r
      <button type="button" class="cw-btn-ghost" (click)="closeCatWizard()">\r
        {{ catWizardMode === 'view' ? 'Fermer' : 'Annuler' }}\r
      </button>\r
      <div style="flex:1"></div>\r
      <ng-container *ngIf="catWizardMode !== 'view'">\r
        <button type="button" class="cw-btn-draft"\r
                [disabled]="catWizardSaving || catWizardForm.invalid"\r
                (click)="catWizardSubmit(true)">\r
          <i class="isax isax-document"></i>\r
          {{ catWizardSaving ? 'Enregistrement...' : 'Enregistrer en brouillon' }}\r
        </button>\r
        <button type="button" class="cw-btn-primary"\r
                [disabled]="catWizardSaving || catWizardForm.invalid"\r
                (click)="catWizardSubmit(false)">\r
          <i class="isax isax-send-2"></i>\r
          {{ catWizardSaving ? 'Publication...' : 'Publier' }}\r
        </button>\r
      </ng-container>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     MODAL PARTICIPANTS\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="pm-overlay" *ngIf="participantsModalOpen" (click)="closeParticipants()">\r
  <div class="pm-modal" (click)="$event.stopPropagation()">\r
\r
    <!-- Head -->\r
    <div class="pm-head">\r
      <div class="pm-head__icon"><i class="isax isax-people"></i></div>\r
      <div class="pm-head__text">\r
        <div class="pm-head__title">{{ selectedFormation?.titre }}</div>\r
        <div class="pm-head__sub">{{ participants.length }} participant(s) inscrit(s)</div>\r
      </div>\r
      <button type="button" class="pm-close" (click)="closeParticipants()">\r
        <i class="isax isax-close-circle"></i>\r
      </button>\r
    </div>\r
\r
    <!-- Alerts -->\r
    <div *ngIf="inscriptionSuccess" class="pm-alert pm-alert--ok">\r
      <i class="isax isax-tick-circle"></i> {{ inscriptionSuccess }}\r
    </div>\r
    <div *ngIf="inscriptionError" class="pm-alert pm-alert--err">\r
      <i class="isax isax-warning-2"></i> {{ inscriptionError }}\r
    </div>\r
\r
    <div class="pm-body">\r
\r
      <!-- Colonne gauche : inscrits -->\r
      <div class="pm-col">\r
        <div class="pm-col__header">\r
          <span class="pm-col__title"><i class="isax isax-tick-circle"></i> Inscrits</span>\r
          <div class="pm-search">\r
            <i class="isax isax-search-normal-1"></i>\r
            <input type="search" placeholder="Rechercher..."\r
                   [(ngModel)]="participantsSearch" [ngModelOptions]="{standalone:true}">\r
          </div>\r
        </div>\r
\r
        <div *ngIf="participantsLoading" class="pm-loading">\r
          <span class="pm-spin"></span> Chargement...\r
        </div>\r
\r
        <div *ngIf="!participantsLoading && !participantsFiltered.length" class="pm-empty">\r
          <i class="isax isax-people"></i>\r
          <p>Aucun participant</p>\r
        </div>\r
\r
        <div class="pm-list" *ngIf="!participantsLoading && participantsFiltered.length">\r
          <div *ngFor="let p of participantsFiltered; trackBy: trackByUserId" class="pm-user-row">\r
            <div class="pm-user-av">{{ ((p.prenom || p.nom || p.name || p.email || '?').charAt(0)).toUpperCase() }}</div>\r
            <div class="pm-user-info">\r
              <div class="pm-user-name">{{ (p.prenom && p.nom) ? (p.prenom + ' ' + p.nom) : (p.name || p.nom || '\u2014') }}</div>\r
              <div class="pm-user-email">{{ p.email }}</div>\r
            </div>\r
            <ng-container *appHasPermission="'desassigner formations'">\r
              <button type="button" class="pm-unenroll-btn"\r
                      [disabled]="inscriptionPending" (click)="desinscrireUser(p)">\r
                <span *ngIf="inscriptionPending" class="pm-spin pm-spin--sm"></span>\r
                <i *ngIf="!inscriptionPending" class="isax isax-user-remove"></i>\r
                Retirer\r
              </button>\r
            </ng-container>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="pm-divider"></div>\r
\r
      <!-- Colonne droite : \xE0 inscrire -->\r
      <div class="pm-col">\r
        <div class="pm-col__header">\r
          <span class="pm-col__title"><i class="isax isax-user-add"></i> Inscrire un employ\xE9</span>\r
          <div class="pm-search">\r
            <i class="isax isax-search-normal-1"></i>\r
            <input type="search" placeholder="Rechercher..."\r
                   [(ngModel)]="usersSearch" [ngModelOptions]="{standalone:true}"\r
                   (ngModelChange)="applyUsersFilter()">\r
          </div>\r
        </div>\r
\r
        <div *ngIf="usersLoading" class="pm-loading">\r
          <span class="pm-spin"></span> Chargement...\r
        </div>\r
\r
        <div *ngIf="!usersLoading && !availableUsersFiltered.length" class="pm-empty">\r
          <i class="isax isax-user-add"></i>\r
          <p>Tous les employ\xE9s sont d\xE9j\xE0 inscrits</p>\r
        </div>\r
\r
        <div class="pm-list" *ngIf="!usersLoading && availableUsersFiltered.length">\r
          <div *ngFor="let u of availableUsersFiltered; trackBy: trackByUserId" class="pm-user-row">\r
            <div class="pm-user-av pm-user-av--blue">{{ ((u.prenom || u.nom || u.name || u.email || '?').charAt(0)).toUpperCase() }}</div>\r
            <div class="pm-user-info">\r
              <div class="pm-user-name">{{ (u.prenom && u.nom) ? (u.prenom + ' ' + u.nom) : (u.name || u.nom || '\u2014') }}</div>\r
              <div class="pm-user-email">{{ u.email }}</div>\r
            </div>\r
            <ng-container *appHasPermission="'assigner formations'">\r
              <button type="button" class="pm-enroll-btn"\r
                      [disabled]="inscriptionPending" (click)="inscrireUser(u)">\r
                <span *ngIf="inscriptionPending" class="pm-spin pm-spin--sm"></span>\r
                <i *ngIf="!inscriptionPending" class="isax isax-user-add"></i>\r
                Inscrire\r
              </button>\r
            </ng-container>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Footer -->\r
    <div class="pm-foot">\r
      <span class="pm-foot__info">{{ participants.length }} inscrit(s) \xB7 {{ availableUsers.length }} disponible(s)</span>\r
      <button type="button" class="pm-close-btn" (click)="closeParticipants()">Fermer</button>\r
    </div>\r
\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/adminrh/adminrh-course/adminrh-course.component.scss */\n.ac-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ac-topbar {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-tab {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ac-tab i {\n  font-size: 15px;\n}\n.ac-tab.active {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ac-tab:hover:not(.active) {\n  color: #111827;\n}\n.ac-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-search {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ac-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ac-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ac-search__input:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.ac-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.ac-chip:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ac-chip--on {\n  background: #E6F1FB;\n  border-color: #85B7EB;\n  color: #0C447C;\n}\n.ac-spacer {\n  margin-left: auto;\n}\n.ac-view-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-btn.active,\n.ac-view-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ac-add-btn:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ac-add-btn i {\n  font-size: 13px;\n}\n.ac-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ac-kpi {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ac-kpi__label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.ac-kpi__label i {\n  font-size: 13px;\n}\n.ac-kpi__val {\n  font-size: 22px;\n  font-weight: 500;\n  color: #111827;\n}\n.ac-kpi__delta {\n  font-size: 11px;\n  margin-top: 2px;\n}\n.ac-kpi__delta.up {\n  color: #3B6D11;\n}\n.ac-kpi__delta.down {\n  color: #A32D2D;\n}\n.ac-kpi__delta.neutral {\n  color: #9ca3af;\n}\n.ac-skeletons {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n}\n.ac-skeleton-card {\n  height: 220px;\n  border-radius: 12px;\n  background: #f3f4f6;\n  animation: ac-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes ac-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-alert {\n  margin: 12px 14px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n  background: #f9fafb;\n}\n.ac-fcard {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.15s;\n}\n.ac-fcard:hover {\n  border-color: #aec6e4;\n}\n.ac-fcard__thumb {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  position: relative;\n  overflow: hidden;\n}\n.ac-fcard__thumb[data-th=blue] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ac-fcard__thumb[data-th=teal] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ac-fcard__thumb[data-th=purple] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ac-fcard__thumb[data-th=amber] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ac-fcard__thumb[data-th=coral] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.ac-fcard__thumb[data-th=green] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ac-fcard__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-fcard__body {\n  padding: 10px 12px;\n  flex: 1;\n}\n.ac-fcard__cat {\n  font-size: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.ac-fcard__cat[data-cat=tech] {\n  color: #0C447C;\n}\n.ac-fcard__cat[data-cat=rh] {\n  color: #085041;\n}\n.ac-fcard__cat[data-cat=mgmt] {\n  color: #534AB7;\n}\n.ac-fcard__cat[data-cat=fin] {\n  color: #633806;\n}\n.ac-fcard__cat[data-cat=default] {\n  color: #4b5563;\n}\n.ac-fcard__title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n.ac-fcard__meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ac-fcard__meta span {\n  font-size: 11px;\n  color: #4b5563;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-fcard__meta span i {\n  font-size: 12px;\n}\n.ac-fcard__footer {\n  padding: 8px 12px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-fcard__actions {\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n}\n.ac-status {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ac-status[data-s=pub] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=draft] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=pending] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-status[data-s=plan] {\n  background: #EEF2FF;\n  color: #3730A3;\n}\n.ac-status[data-s=live] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=done] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=cancel] {\n  background: #FEF2F2;\n  color: #991B1B;\n}\n.ac-prog {\n  flex: 1;\n  margin: 0 6px;\n}\n.ac-prog__bar {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ac-prog__fill {\n  height: 100%;\n  border-radius: 4px;\n  background: #185FA5;\n}\n.ac-prog__txt {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: right;\n  margin-top: 2px;\n}\n.ac-actions {\n  display: flex;\n  gap: 5px;\n}\n.ac-act {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-act:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-act--del {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ac-act--del:hover {\n  background: #fef2f2;\n}\n.ac-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ac-table th {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ac-table td {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ac-table tr:last-child td {\n  border-bottom: none;\n}\n.ac-table tr:hover td {\n  background: #f9fafb;\n}\n.ac-table-name {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-table-sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ac-empty {\n  text-align: center;\n  padding: 40px 14px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ac-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ac-empty--span {\n  grid-column: 1/-1;\n}\n.ac-empty-tab {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 14px;\n  gap: 12px;\n  color: #9ca3af;\n}\n.ac-empty-tab i {\n  font-size: 2.5rem;\n}\n.ac-empty-tab p {\n  font-size: 14px;\n}\n.ac-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ac-pager__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-pager__btns {\n  display: flex;\n  gap: 4px;\n}\n.ac-pager__btn {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ac-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ac-pager__btn.active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ac-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ac-toolbar--chips {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-top: none;\n  background: #fff;\n  gap: 6px;\n}\n.ac-view-group {\n  display: inline-flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ac-view-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-toggle i {\n  font-size: 14px;\n}\n.ac-view-toggle.active {\n  background: #f3f4f6;\n  color: #111827;\n  font-weight: 500;\n}\n.ac-view-toggle:hover:not(.active) {\n  background: #f9fafb;\n}\n.ac-sessions-list {\n  padding: 10px 14px;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ac-session-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: border-color 0.15s;\n}\n.ac-session-row:hover {\n  border-color: #aec6e4;\n}\n.ac-session-date {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 40px;\n}\n.ac-session-date__day {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.ac-session-date__month {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ac-session-info {\n  flex: 1;\n  min-width: 0;\n}\n.ac-session-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ac-session-meta {\n  display: flex;\n  gap: 10px;\n  margin-top: 3px;\n  flex-wrap: wrap;\n}\n.ac-session-meta span {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-session-meta span i {\n  font-size: 12px;\n}\n.ac-session-badges {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ac-session-places {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ac-cal {\n  padding: 12px 14px 14px;\n  background: #f9fafb;\n}\n.ac-cal__nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.ac-cal__nav-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ac-cal__nav-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-cal__nav-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ac-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.ac-cal__head {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 0 6px;\n}\n.ac-cal__cell {\n  min-height: 80px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 5px 5px 4px;\n  overflow: hidden;\n  transition: border-color 0.12s;\n}\n.ac-cal__cell:hover {\n  border-color: #aec6e4;\n}\n.ac-cal__cell--other {\n  background: #f9fafb;\n}\n.ac-cal__cell--other .ac-cal__day {\n  color: #9ca3af;\n}\n.ac-cal__cell--today {\n  border-color: #185FA5;\n}\n.ac-cal__cell--today .ac-cal__day {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n}\n.ac-cal__day {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 4px;\n  display: block;\n}\n.ac-cal__events {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ac-cal__event {\n  font-size: 10px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #0C447C;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ac-cal__event--dist {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-cal__event--hybr {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.wz-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.wz-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-head__text {\n  flex: 1;\n}\n.wz-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.wz-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.wz-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.wz-stepper {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-step {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.wz-step__circle {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.wz-step__circle.active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.wz-step__circle.done {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.wz-step__label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.wz-step__label.active {\n  color: #185FA5;\n}\n.wz-step__label.done {\n  color: #3B6D11;\n}\n.wz-step__line {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.wz-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.wz-body::-webkit-scrollbar {\n  width: 4px;\n}\n.wz-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wz-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.wz-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.wz-field--full {\n  grid-column: 1/-1;\n}\n.wz-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.wz-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-req {\n  color: #E24B4A;\n}\n.wz-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.wz-input:focus {\n  border-color: #185FA5;\n  box-shadow: 0 0 0 2px #E6F1FB;\n}\n.wz-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.wz-textarea {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n.wz-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-domain-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.wz-domain-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.wz-domain-card i {\n  font-size: 20px;\n}\n.wz-domain-card span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-domain-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.wz-domain-card.selected {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.wz-domain-card.selected span {\n  color: #0C447C;\n}\n.wz-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.wz-strip__hint {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.wz-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  border: 0.5px solid #85B7EB;\n  font-size: 12px;\n  color: #0C447C;\n}\n.wz-chip i {\n  font-size: 11px;\n  cursor: pointer;\n  color: #378ADD;\n}\n.wz-chip i:hover {\n  color: #0C447C;\n}\n.wz-pool {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.wz-pool__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-pool__search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.wz-pool__search input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.wz-pool__list {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.wz-pool__list::-webkit-scrollbar {\n  width: 3px;\n}\n.wz-pool__list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.wz-pool__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.wz-pool__item:last-child {\n  border-bottom: none;\n}\n.wz-pool__item:hover,\n.wz-pool__item.checked {\n  background: #f9fafb;\n}\n.wz-pool__check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.wz-pool__check.on {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.wz-pool__thumb {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-pool__thumb[data-th=blue] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.wz-pool__thumb[data-th=teal] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.wz-pool__thumb[data-th=purple] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-pool__thumb[data-th=amber] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.wz-pool__thumb[data-th=coral] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.wz-pool__thumb[data-th=green] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.wz-pool__info {\n  flex: 1;\n  min-width: 0;\n}\n.wz-pool__name {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wz-pool__meta {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-pool__tag {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #4b5563;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.wz-pool__empty {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.wz-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #f3f4f6;\n}\n.wz-toggle-row:last-child {\n  border-bottom: none;\n}\n.wz-toggle-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-toggle-sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.wz-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.wz-toggle::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.wz-toggle.on {\n  background: #185FA5;\n}\n.wz-toggle.on::after {\n  left: 19px;\n}\n.wz-info-banner {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  border: 0.5px solid #85B7EB;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #0C447C;\n  line-height: 1.5;\n}\n.wz-info-banner i {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-recap-card {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.wz-recap-title {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row:last-child {\n  border-bottom: none;\n}\n.wz-rl {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-recap-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.wz-rc {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.wz-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.wz-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.wz-foot__info {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.wz-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.wz-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #185FA5;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-primary i {\n  font-size: 13px;\n}\n.wz-btn-primary:hover {\n  opacity: 0.9;\n}\n.wz-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wz-btn-success {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-success i {\n  font-size: 13px;\n}\n.wz-btn-success:hover {\n  opacity: 0.9;\n}\n.wz-btn-success:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.cw-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 600px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.cw-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.cw-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-head__text {\n  flex: 1;\n}\n.cw-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.cw-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.cw-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.cw-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cw-body::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cw-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.cw-upload-zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 1.5px dashed #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cw-upload-zone i {\n  font-size: 28px;\n  color: #9ca3af;\n}\n.cw-upload-zone span {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.cw-upload-zone__hint {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n}\n.cw-upload-zone:hover {\n  border-color: #79C9AB;\n  background: #E1F5EE;\n}\n.cw-upload-zone:hover i {\n  color: #0F6E56;\n}\n.cw-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.cw-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cw-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-req {\n  color: #E24B4A;\n}\n.cw-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.cw-input:focus {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.cw-textarea {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n.cw-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-toggle-inline {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n}\n.cw-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.cw-toggle::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.cw-toggle.on {\n  background: #0F6E56;\n}\n.cw-toggle.on::after {\n  left: 19px;\n}\n.cw-toggle-label {\n  font-size: 12px;\n  color: #4b5563;\n}\n.cw-section-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.cw-domain-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-domain-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.cw-domain-card i {\n  font-size: 20px;\n  color: #9ca3af;\n}\n.cw-domain-card span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-domain-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-domain-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-domain-card.selected i {\n  color: #0F6E56;\n}\n.cw-domain-card.selected span {\n  color: #0F6E56;\n}\n.cw-level-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-level-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cw-level-card__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-level-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.cw-level-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-level-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-level-card.selected .cw-level-card__label {\n  color: #0F6E56;\n}\n.cw-level-card.selected .cw-level-card__sub {\n  color: rgb(148.5, 219.5, 194.65);\n}\n.cw-tags-box {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 8px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.cw-tags-box:focus-within {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  background: #E1F5EE;\n  border: 0.5px solid #79C9AB;\n  font-size: 12px;\n  color: #0F6E56;\n}\n.cw-tag i {\n  font-size: 11px;\n  cursor: pointer;\n  color: #79C9AB;\n}\n.cw-tag i:hover {\n  color: #0F6E56;\n}\n.cw-tag-input {\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #111827;\n  background: transparent;\n  flex: 1;\n  min-width: 100px;\n  font-family: inherit;\n}\n.cw-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 8px;\n}\n.cw-strip-hint {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.cw-pool {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.cw-pool__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.cw-pool__search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.cw-pool__search input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.cw-pool__list {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.cw-pool__list::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-pool__list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.cw-pool__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cw-pool__item:last-child {\n  border-bottom: none;\n}\n.cw-pool__item:hover,\n.cw-pool__item.checked {\n  background: #E1F5EE;\n}\n.cw-pool__check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.cw-pool__check.on {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.cw-pool__info {\n  flex: 1;\n  min-width: 0;\n}\n.cw-pool__name {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-pool__meta {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-pool__empty {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.cw-vis-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cw-vis-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cw-vis-card i {\n  font-size: 20px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.cw-vis-card__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-vis-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-vis-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-vis-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-vis-card.selected i {\n  color: #0F6E56;\n}\n.cw-vis-card.selected .cw-vis-card__label {\n  color: #0F6E56;\n}\n.cw-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cw-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.cw-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.cw-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.cw-btn-draft {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.cw-btn-draft i {\n  font-size: 13px;\n}\n.cw-btn-draft:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.cw-btn-draft:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #0F6E56;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-primary i {\n  font-size: 13px;\n}\n.cw-btn-primary:hover {\n  opacity: 0.9;\n}\n.cw-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ac-card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-skeletons {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ac-card-grid {\n    grid-template-columns: 1fr;\n  }\n  .ac-kpi-row {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.ac-act--arch {\n  color: #BA7517;\n}\n.ac-act--arch:hover {\n  border-color: #BA7517;\n  color: #BA7517;\n  background: #FAEEDA;\n}\n.ac-act--people {\n  color: #185FA5;\n}\n.ac-act--people:hover {\n  border-color: #93C5FD;\n  color: #185FA5;\n  background: #DBEAFE;\n}\n.ac-act--warn {\n  color: #B45309;\n  border-color: #FCD34D;\n}\n.ac-act--warn:hover {\n  background: #FFFBEB;\n}\n.ac-act--ok {\n  color: #166534;\n  border-color: #86EFAC;\n}\n.ac-act--ok:hover {\n  background: #F0FDF4;\n}\n.ac-select {\n  height: 32px;\n  padding: 0 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n}\n.ac-table-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ac-course-img {\n  flex-shrink: 0;\n  width: 44px;\n  height: 32px;\n  border-radius: 6px;\n  overflow: hidden;\n  display: block;\n  background: #f3f4f6;\n}\n.ac-course-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-course-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  text-decoration: none;\n}\n.ac-course-title:hover {\n  color: #185FA5;\n  text-decoration: underline;\n}\n.ac-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  border-radius: 20px;\n  padding: 2px 8px;\n}\n.ac-badge {\n  font-size: 11px;\n  font-weight: 500;\n  border-radius: 4px;\n  padding: 2px 7px;\n}\n.ac-badge--free {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-badge--paid {\n  color: #185FA5;\n  font-weight: 600;\n}\n.ac-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ac-confirm-modal {\n  background: #fff;\n  border-radius: 12px;\n  padding: 28px 32px;\n  max-width: 380px;\n  width: 90%;\n  text-align: center;\n}\n.ac-confirm-modal h4 {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 12px 0 6px;\n}\n.ac-confirm-modal p {\n  font-size: 13px;\n  color: #4b5563;\n  margin-bottom: 20px;\n}\n.ac-confirm-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.ac-confirm-icon--warn {\n  background: #FEF3C7;\n  color: #B45309;\n}\n.ac-confirm-icon--ok {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-confirm-btns {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.ac-btn-ghost {\n  padding: 7px 18px;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  background: #f3f4f6;\n  font-size: 13px;\n  cursor: pointer;\n}\n.ac-btn-ghost:hover {\n  background: #e5e7eb;\n}\n.ac-btn-warn {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #F59E0B;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-warn:hover {\n  background: #D97706;\n}\n.ac-btn-ok {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #10B981;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-ok:hover {\n  background: #059669;\n}\n.ac-skeleton-row {\n  height: 48px;\n  background: #f3f4f6;\n  border-radius: 8px;\n  margin: 6px 14px;\n  animation: ac-pulse 1.2s ease-in-out infinite;\n}\n@keyframes ac-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.pm-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n  padding: 16px;\n}\n.pm-modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 820px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n.pm-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.pm-head__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #DBEAFE;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.pm-head__text {\n  flex: 1;\n  min-width: 0;\n}\n.pm-head__title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-head__sub {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.pm-close {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.pm-close:hover {\n  color: #111827;\n}\n.pm-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 20px;\n  font-size: 13px;\n}\n.pm-alert--ok {\n  background: #F0FDF4;\n  color: #166534;\n  border-bottom: 1px solid #4ADE80;\n}\n.pm-alert--err {\n  background: #FEF2F2;\n  color: #991B1B;\n  border-bottom: 1px solid #F87171;\n}\n.pm-body {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .pm-body {\n    flex-direction: column;\n  }\n}\n.pm-divider {\n  width: 1px;\n  background: #e5e7eb;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .pm-divider {\n    width: 100%;\n    height: 1px;\n  }\n}\n.pm-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.pm-col__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  flex-wrap: wrap;\n}\n.pm-col__title {\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.pm-col__title i {\n  font-size: 14px;\n}\n.pm-search {\n  position: relative;\n  flex: 1;\n  min-width: 120px;\n  max-width: 180px;\n}\n.pm-search i {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 13px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.pm-search input {\n  width: 100%;\n  padding: 5px 8px 5px 26px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #f9fafb;\n  outline: none;\n}\n.pm-search input:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.pm-list {\n  overflow-y: auto;\n  flex: 1;\n  padding: 6px 0;\n}\n.pm-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 28px 16px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n.pm-spin {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #e5e7eb;\n  border-top-color: #185FA5;\n  border-radius: 50%;\n  animation: pm-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.pm-spin--sm {\n  width: 11px;\n  height: 11px;\n}\n@keyframes pm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pm-empty {\n  text-align: center;\n  padding: 32px 16px;\n  color: #9ca3af;\n}\n.pm-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.pm-empty p {\n  font-size: 13px;\n  margin: 0;\n}\n.pm-user-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 16px;\n  transition: background 0.1s;\n}\n.pm-user-row:hover {\n  background: #f9fafb;\n}\n.pm-user-av {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.pm-user-av--blue {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.pm-user-info {\n  flex: 1;\n  min-width: 0;\n}\n.pm-user-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-user-email {\n  font-size: 11px;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-badge {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.pm-badge--ok {\n  background: #DCFCE7;\n  color: #166534;\n}\n.pm-enroll-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-enroll-btn i {\n  font-size: 13px;\n}\n.pm-enroll-btn:not(:disabled):hover {\n  background: #DCFCE7;\n  color: #166534;\n  border-color: #86EFAC;\n}\n.pm-enroll-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-unenroll-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  background: #FFF5F5;\n  color: #991B1B;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-unenroll-btn i {\n  font-size: 13px;\n}\n.pm-unenroll-btn:not(:disabled):hover {\n  background: #FEE2E2;\n  color: #7F1D1D;\n  border-color: #FCA5A5;\n}\n.pm-unenroll-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.pm-foot__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.pm-close-btn {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  height: 30px;\n  padding: 0 14px;\n  font-size: 13px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.pm-close-btn:hover {\n  background: #f3f4f6;\n}\n/*# sourceMappingURL=adminrh-course.component.css.map */\n'] }]
  }], () => [{ type: FormationService }, { type: ParcoursService }, { type: SessionFormationService }, { type: CatalogueService }, { type: FormBuilder }, { type: UserService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhCourseComponent, { className: "AdminrhCourseComponent", filePath: "app/features/adminrh/adminrh-course/adminrh-course.component.ts", lineNumber: 34 });
})();
export {
  AdminrhCourseComponent
};
//# sourceMappingURL=chunk-MQGGDIOG.js.map
