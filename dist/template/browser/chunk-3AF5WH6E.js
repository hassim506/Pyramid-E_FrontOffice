import {
  SessionFormationService
} from "./chunk-A6MOU7CO.js";
import {
  CustomPaginationComponent
} from "./chunk-Z2HA3X3F.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-62IXQG2C.js";
import "./chunk-YIMRJUCQ.js";
import "./chunk-D4V2IZRR.js";
import "./chunk-AHGPUK2P.js";
import "./chunk-FKX6UC3I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-AK2M3J6O.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-3IMMP55I.js";
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
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
} from "./chunk-UPBSS6WA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-session/instructor-session.component.ts
function InstructorSessionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "span", 14);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorSessionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 16);
    \u0275\u0275listener("click", function InstructorSessionComponent_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearError());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function InstructorSessionComponent_ng_container_2_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 42)(3, "div", 43);
    \u0275\u0275element(4, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 47);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td")(13, "div", 48)(14, "span", 49);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 50);
    \u0275\u0275text(17, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 51);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td")(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "div", 52)(29, "span", 53);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 54);
    \u0275\u0275element(32, "div", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "td")(34, "span", 56);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "td")(37, "button", 57);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_2_tr_54_Template_button_click_37_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetails(s_r5));
    });
    \u0275\u0275element(38, "i", 58);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(s_r5.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.code_session);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.formation == null ? null : s_r5.formation.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(s_r5.date_debut));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(s_r5.date_fin));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("ip-type-badge ip-type-", s_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 18, s_r5.type));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("ip-statut-badge ip-statut-", s_r5.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatutDisplay(s_r5.statut));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", s_r5.nombre_inscrits || 0, "/", s_r5.capacite_max);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", (s_r5.nombre_inscrits || 0) / s_r5.capacite_max * 100, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r5.lieu || "\u2014");
  }
}
function InstructorSessionComponent_ng_container_2_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 59);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucune session trouv\xE9e");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorSessionComponent_ng_container_2_div_56_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_2_div_56_button_6_Template_button_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r8 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r8);
  }
}
function InstructorSessionComponent_ng_container_2_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62)(4, "button", 63);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_2_div_56_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InstructorSessionComponent_ng_container_2_div_56_button_6_Template, 2, 3, "button", 65);
    \u0275\u0275elementStart(7, "button", 63);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_2_div_56_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.totalData, " session", ctx_r1.totalData > 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage * ctx_r1.pageSize >= ctx_r1.totalData);
  }
}
function InstructorSessionComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 17)(2, "div")(3, "h5", 18);
    \u0275\u0275text(4, "Mes sessions ");
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 20);
    \u0275\u0275text(8, "Vos sessions de formation assign\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 21);
    \u0275\u0275listener("click", function InstructorSessionComponent_ng_container_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadSessions());
    });
    \u0275\u0275element(10, "i", 22);
    \u0275\u0275text(11, " Actualiser ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 23)(13, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorSessionComponent_ng_container_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchDataValue, $event) || (ctx_r1.searchDataValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function InstructorSessionComponent_ng_container_2_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchData($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorSessionComponent_ng_container_2_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedStatut, $event) || (ctx_r1.selectedStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function InstructorSessionComponent_ng_container_2_Template_select_change_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatut());
    });
    \u0275\u0275elementStart(15, "option", 26);
    \u0275\u0275text(16, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 27);
    \u0275\u0275text(18, "Planifi\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 28);
    \u0275\u0275text(20, "En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 29);
    \u0275\u0275text(22, "Termin\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 30);
    \u0275\u0275text(24, "Annul\xE9e");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorSessionComponent_ng_container_2_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedType, $event) || (ctx_r1.selectedType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function InstructorSessionComponent_ng_container_2_Template_select_change_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByType());
    });
    \u0275\u0275elementStart(26, "option", 26);
    \u0275\u0275text(27, "Tous les types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 31);
    \u0275\u0275text(29, "Pr\xE9sentiel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 32);
    \u0275\u0275text(31, "Distanciel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 33);
    \u0275\u0275text(33, "Hybride");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 34)(35, "div", 35)(36, "table", 36);
    \u0275\u0275listener("matSortChange", function InstructorSessionComponent_ng_container_2_Template_table_matSortChange_36_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortData($event));
    });
    \u0275\u0275elementStart(37, "thead")(38, "tr")(39, "th", 37);
    \u0275\u0275text(40, "Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 38);
    \u0275\u0275text(42, "Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 39);
    \u0275\u0275text(46, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th");
    \u0275\u0275text(50, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "tbody");
    \u0275\u0275template(54, InstructorSessionComponent_ng_container_2_tr_54_Template, 39, 20, "tr", 40)(55, InstructorSessionComponent_ng_container_2_tr_55_Template, 5, 0, "tr", 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(56, InstructorSessionComponent_ng_container_2_div_56_Template, 9, 5, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.totalData);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchDataValue);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedStatut);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedType);
    \u0275\u0275advance(29);
    \u0275\u0275property("ngForOf", ctx_r1.tableData)("ngForTrackBy", ctx_r1.trackBySessionId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tableData.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalData > ctx_r1.pageSize);
  }
}
function InstructorSessionComponent_div_10_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "h6", 76);
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.description);
  }
}
function InstructorSessionComponent_div_10_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "h6", 76);
    \u0275\u0275text(2, "Instructions d'acc\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.instructions_acces);
  }
}
function InstructorSessionComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "div", 70)(3, "h6", 71);
    \u0275\u0275text(4, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "table", 72)(6, "tr")(7, "td", 56);
    \u0275\u0275text(8, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 73);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tr")(12, "td", 56);
    \u0275\u0275text(13, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "tr")(17, "td", 56);
    \u0275\u0275text(18, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tr")(22, "td", 56);
    \u0275\u0275text(23, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 70)(28, "h6", 71);
    \u0275\u0275text(29, "Planning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "table", 72)(31, "tr")(32, "td", 56);
    \u0275\u0275text(33, "D\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "tr")(37, "td", 56);
    \u0275\u0275text(38, "Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "tr")(42, "td", 56);
    \u0275\u0275text(43, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "tr")(48, "td", 56);
    \u0275\u0275text(49, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "td");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "tr")(53, "td", 56);
    \u0275\u0275text(54, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(57, InstructorSessionComponent_div_10_div_57_Template, 5, 1, "div", 74)(58, InstructorSessionComponent_div_10_div_58_Template, 5, 1, "div", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.titre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.code_session);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.formation == null ? null : ctx_r1.selectedSession.formation.titre);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(\u0275\u0275interpolate1("ip-statut-badge ip-statut-", ctx_r1.selectedSession.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatutDisplay(ctx_r1.selectedSession.statut));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedSession.date_debut));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedSession.date_fin));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 15, ctx_r1.selectedSession.type));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.lieu || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedSession.nombre_inscrits || 0, "/", ctx_r1.selectedSession.capacite_max);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.instructions_acces);
  }
}
var InstructorSessionComponent = class _InstructorSessionComponent {
  sessionService;
  // Pagination
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  totalData = 0;
  // Filtres
  searchDataValue = "";
  selectedStatut = "";
  selectedType = "";
  // État
  loading = false;
  error = "";
  selectedSession = null;
  formateurId = null;
  constructor(sessionService) {
    this.sessionService = sessionService;
  }
  ngOnInit() {
    try {
      const userDataString = localStorage.getItem("pyramide_user");
      if (userDataString) {
        const currentUser = JSON.parse(userDataString);
        this.formateurId = currentUser.id;
      }
    } catch (e) {
      console.error("Erreur lecture utilisateur:", e);
    }
    this.loadSessions();
  }
  loadSessions() {
    if (!this.formateurId) {
      this.error = "Impossible d'identifier le formateur connect\xE9.";
      return;
    }
    this.loading = true;
    this.error = "";
    this.sessionService.getSessionsByFormateur(this.formateurId).subscribe({
      next: (response) => {
        this.tableDataCopy = response.sessions || [];
        this.actualData = [...this.tableDataCopy];
        this.totalData = this.actualData.length;
        this.currentPage = 1;
        this.skip = 0;
        this.getTableData();
        this.loading = false;
      },
      error: (err) => {
        console.error("Erreur sessions:", err);
        this.error = "Erreur lors du chargement des sessions.";
        this.loading = false;
      }
    });
  }
  searchData(value) {
    this.searchDataValue = value;
    this.applyFilters();
  }
  filterByStatut() {
    this.applyFilters();
  }
  filterByType() {
    this.applyFilters();
  }
  applyFilters() {
    let filtered = [...this.tableDataCopy];
    if (this.searchDataValue.trim()) {
      const q = this.searchDataValue.toLowerCase();
      filtered = filtered.filter((s) => s.titre?.toLowerCase().includes(q) || s.code_session?.toLowerCase().includes(q) || s.formation?.titre?.toLowerCase().includes(q));
    }
    if (this.selectedStatut) {
      filtered = filtered.filter((s) => s.statut === this.selectedStatut);
    }
    if (this.selectedType) {
      filtered = filtered.filter((s) => s.type === this.selectedType);
    }
    this.actualData = filtered;
    this.totalData = filtered.length;
    this.currentPage = 1;
    this.skip = 0;
    this.getTableData();
  }
  viewDetails(session) {
    this.selectedSession = session;
    const modal = new window.bootstrap.Modal(document.getElementById("sessionDetailsModal"));
    modal.show();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.getTableData();
  }
  getTableData() {
    this.tableData = this.actualData.slice(this.skip, this.skip + this.pageSize);
  }
  sortData(sort) {
    const data = this.actualData.slice();
    if (!sort.active || sort.direction === "") {
      this.actualData = data;
      this.getTableData();
      return;
    }
    this.actualData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "titre":
          return this.compare(a.titre, b.titre, isAsc);
        case "date_debut":
          return this.compare(new Date(a.date_debut), new Date(b.date_debut), isAsc);
        case "statut":
          return this.compare(a.statut, b.statut, isAsc);
        default:
          return 0;
      }
    });
    this.getTableData();
  }
  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getStatutDisplay(statut) {
    const map = {
      planifiee: "Planifi\xE9e",
      en_cours: "En cours",
      terminee: "Termin\xE9e",
      annulee: "Annul\xE9e"
    };
    return map[statut] || statut;
  }
  getStatutClass(statut) {
    switch (statut) {
      case "planifiee":
        return "badge bg-info";
      case "en_cours":
        return "badge bg-success";
      case "terminee":
        return "badge bg-secondary";
      case "annulee":
        return "badge bg-danger";
      default:
        return "badge bg-light";
    }
  }
  getTypeClass(type) {
    switch (type) {
      case "presentiel":
        return "badge bg-primary";
      case "distanciel":
        return "badge bg-warning";
      case "hybride":
        return "badge bg-success";
      default:
        return "badge bg-light";
    }
  }
  trackBySessionId(index, session) {
    return session.id;
  }
  getPageNumbers() {
    const pages = [];
    const totalPages = Math.ceil(this.totalData / this.pageSize);
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++)
      pages.push(i);
    return pages;
  }
  clearError() {
    this.error = "";
  }
  static \u0275fac = function InstructorSessionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorSessionComponent)(\u0275\u0275directiveInject(SessionFormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorSessionComponent, selectors: [["app-instructor-session"]], decls: 14, vars: 4, consts: [["class", "ip-loader", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [4, "ngIf"], ["id", "sessionDetailsModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "ip-loader"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-count"], [1, "ip-page-head__sub"], ["type", "button", 1, "ip-btn", "ip-btn--outline", 3, "click"], [1, "isax", "isax-refresh-2"], [1, "ip-toolbar"], ["type", "text", "placeholder", "Rechercher session, code, formation\u2026", 1, "ip-search", 3, "ngModelChange", "input", "ngModel"], [1, "ip-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "planifiee"], ["value", "en_cours"], ["value", "terminee"], ["value", "annulee"], ["value", "presentiel"], ["value", "distanciel"], ["value", "hybride"], [1, "ip-card"], [1, "table-responsive"], ["matSort", "", 1, "table", "ip-table", 3, "matSortChange"], ["mat-sort-header", "titre"], ["mat-sort-header", "date_debut"], ["mat-sort-header", "statut"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ip-pagination", 4, "ngIf"], [1, "ip-session-cell"], [1, "ip-session-icon"], [1, "isax", "isax-calendar-1"], [1, "ip-session-title"], [1, "ip-session-sub"], [1, "ip-session-formation"], [1, "ip-date-cell"], [1, "ip-date-start"], [1, "ip-date-arrow"], [1, "ip-date-end"], [1, "ip-participants"], [1, "ip-pill"], [1, "ip-mini-bar"], [1, "ip-mini-fill"], [1, "text-muted"], ["type", "button", "title", "D\xE9tails", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-eye"], ["colspan", "7", 1, "ip-empty"], [1, "ip-pagination"], [1, "pg-info"], [1, "pg-controls"], ["type", "button", 1, "pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "pg-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-2"], ["type", "button", 1, "pg-btn", 3, "click"], [1, "modal-body"], [1, "row", "g-3"], [1, "col-md-6"], [1, "fw-semibold", "mb-3"], [1, "table", "table-sm", "table-borderless"], [1, "fw-medium"], ["class", "col-12", 4, "ngIf"], [1, "col-12"], [1, "fw-semibold", "mb-2"]], template: function InstructorSessionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorSessionComponent_div_0_Template, 4, 0, "div", 0)(1, InstructorSessionComponent_div_1_Template, 3, 1, "div", 1)(2, InstructorSessionComponent_ng_container_2_Template, 57, 8, "ng-container", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5", 7);
      \u0275\u0275text(8, "D\xE9tails de la session");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, InstructorSessionComponent_div_10_Template, 59, 17, "div", 9);
      \u0275\u0275elementStart(11, "div", 10)(12, "button", 11);
      \u0275\u0275text(13, "Fermer");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.selectedSession);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatSortModule, MatSort, MatSortHeader, TitleCasePipe], styles: ["\n\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #EEF2FF;\n  color: #534AB7;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ip-btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #534AB7;\n  border: 1px solid #534AB7;\n}\n.ip-btn--outline[_ngcontent-%COMP%]:hover {\n  background: #EEF2FF;\n}\n.ip-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.ip-search[_ngcontent-%COMP%] {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 12px;\n  font-size: 13px;\n  outline: none;\n  min-width: 240px;\n  transition: border-color 0.15s;\n}\n.ip-search[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.ip-select[_ngcontent-%COMP%] {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 10px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  cursor: pointer;\n}\n.ip-select[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-session-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.ip-session-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #EEF2FF;\n  color: #534AB7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.ip-session-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-session-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-family: monospace;\n  margin-top: 1px;\n}\n.ip-session-formation[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #534AB7;\n  margin-top: 2px;\n}\n.ip-date-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 12px;\n}\n.ip-date-start[_ngcontent-%COMP%] {\n  color: #1A1A2E;\n  font-weight: 500;\n}\n.ip-date-arrow[_ngcontent-%COMP%] {\n  color: #6C757D;\n  font-size: 11px;\n}\n.ip-date-end[_ngcontent-%COMP%] {\n  color: #6C757D;\n}\n.ip-type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ip-type-badge.ip-type-presentiel[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ip-type-badge.ip-type-distanciel[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: #D97706;\n}\n.ip-type-badge.ip-type-hybride[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n.ip-statut-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ip-statut-badge.ip-statut-planifiee[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ip-statut-badge.ip-statut-en_cours[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-statut-badge.ip-statut-terminee[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-statut-badge.ip-statut-annulee[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-participants[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ip-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-mini-bar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 4px;\n  background: #E9ECEF;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ip-mini-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #534AB7;\n  border-radius: 4px;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-top: 1px solid #E9ECEF;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pg-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.pg-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.12s;\n  padding: 0 8px;\n}\n.pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.pg-btn.active[_ngcontent-%COMP%] {\n  background: #534AB7;\n  border-color: #534AB7;\n  color: #fff;\n}\n.pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=instructor-session.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorSessionComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-session", standalone: true, imports: [CommonModule, FormsModule, MatSortModule, CustomPaginationComponent], template: `<!-- Loading -->
<div *ngIf="loading" class="ip-loader">
  <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Chargement...</span></div>
</div>

<!-- Error -->
<div *ngIf="error" class="alert alert-danger alert-dismissible">
  {{ error }}
  <button type="button" class="btn-close" (click)="clearError()"></button>
</div>

<ng-container *ngIf="!loading">

  <!-- Page header -->
  <div class="ip-page-head">
    <div>
      <h5 class="ip-page-head__title">Mes sessions <span class="ip-count">{{ totalData }}</span></h5>
      <p class="ip-page-head__sub">Vos sessions de formation assign\xE9es</p>
    </div>
    <button type="button" class="ip-btn ip-btn--outline" (click)="loadSessions()">
      <i class="isax isax-refresh-2"></i> Actualiser
    </button>
  </div>

  <!-- Toolbar -->
  <div class="ip-toolbar">
    <input type="text" class="ip-search" placeholder="Rechercher session, code, formation\u2026"
           [(ngModel)]="searchDataValue" (input)="searchData($any($event.target).value)">
    <select class="ip-select" [(ngModel)]="selectedStatut" (change)="filterByStatut()">
      <option value="">Tous les statuts</option>
      <option value="planifiee">Planifi\xE9e</option>
      <option value="en_cours">En cours</option>
      <option value="terminee">Termin\xE9e</option>
      <option value="annulee">Annul\xE9e</option>
    </select>
    <select class="ip-select" [(ngModel)]="selectedType" (change)="filterByType()">
      <option value="">Tous les types</option>
      <option value="presentiel">Pr\xE9sentiel</option>
      <option value="distanciel">Distanciel</option>
      <option value="hybride">Hybride</option>
    </select>
  </div>

  <!-- Table -->
  <div class="ip-card">
    <div class="table-responsive">
      <table class="table ip-table" matSort (matSortChange)="sortData($event)">
        <thead>
          <tr>
            <th mat-sort-header="titre">Session</th>
            <th mat-sort-header="date_debut">Dates</th>
            <th>Type</th>
            <th mat-sort-header="statut">Statut</th>
            <th>Participants</th>
            <th>Lieu</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let s of tableData; trackBy: trackBySessionId">
            <td>
              <div class="ip-session-cell">
                <div class="ip-session-icon"><i class="isax isax-calendar-1"></i></div>
                <div>
                  <div class="ip-session-title">{{ s.titre }}</div>
                  <div class="ip-session-sub">{{ s.code_session }}</div>
                  <div class="ip-session-formation">{{ s.formation?.titre }}</div>
                </div>
              </div>
            </td>
            <td>
              <div class="ip-date-cell">
                <span class="ip-date-start">{{ formatDate(s.date_debut) }}</span>
                <span class="ip-date-arrow">\u2192</span>
                <span class="ip-date-end">{{ formatDate(s.date_fin) }}</span>
              </div>
            </td>
            <td>
              <span class="ip-type-badge ip-type-{{ s.type }}">{{ s.type | titlecase }}</span>
            </td>
            <td>
              <span class="ip-statut-badge ip-statut-{{ s.statut }}">{{ getStatutDisplay(s.statut) }}</span>
            </td>
            <td>
              <div class="ip-participants">
                <span class="ip-pill">{{ s.nombre_inscrits || 0 }}/{{ s.capacite_max }}</span>
                <div class="ip-mini-bar">
                  <div class="ip-mini-fill" [style.width.%]="(s.nombre_inscrits || 0) / s.capacite_max * 100"></div>
                </div>
              </div>
            </td>
            <td><span class="text-muted">{{ s.lieu || '\u2014' }}</span></td>
            <td>
              <button type="button" class="ip-action-btn" title="D\xE9tails" (click)="viewDetails(s)">
                <i class="isax isax-eye"></i>
              </button>
            </td>
          </tr>
          <tr *ngIf="tableData.length === 0">
            <td colspan="7" class="ip-empty">
              <i class="isax isax-calendar-1"></i>
              <span>Aucune session trouv\xE9e</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="ip-pagination" *ngIf="totalData > pageSize">
      <span class="pg-info">{{ totalData }} session{{ totalData > 1 ? 's' : '' }}</span>
      <div class="pg-controls">
        <button type="button" class="pg-btn" [disabled]="currentPage === 1" (click)="onPageChange(currentPage - 1)">
          <i class="isax isax-arrow-left-2"></i>
        </button>
        <button type="button" class="pg-btn"
                *ngFor="let p of getPageNumbers()"
                [class.active]="p === currentPage"
                (click)="onPageChange(p)">{{ p }}</button>
        <button type="button" class="pg-btn"
                [disabled]="currentPage * pageSize >= totalData"
                (click)="onPageChange(currentPage + 1)">
          <i class="isax isax-arrow-right-2"></i>
        </button>
      </div>
    </div>
  </div>

</ng-container>

<!-- Modal d\xE9tails -->
<div class="modal fade" id="sessionDetailsModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">D\xE9tails de la session</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body" *ngIf="selectedSession">
        <div class="row g-3">
          <div class="col-md-6">
            <h6 class="fw-semibold mb-3">Informations g\xE9n\xE9rales</h6>
            <table class="table table-sm table-borderless">
              <tr><td class="text-muted">Titre</td><td class="fw-medium">{{ selectedSession.titre }}</td></tr>
              <tr><td class="text-muted">Code</td><td>{{ selectedSession.code_session }}</td></tr>
              <tr><td class="text-muted">Formation</td><td>{{ selectedSession.formation?.titre }}</td></tr>
              <tr><td class="text-muted">Statut</td>
                <td><span class="ip-statut-badge ip-statut-{{ selectedSession.statut }}">{{ getStatutDisplay(selectedSession.statut) }}</span></td>
              </tr>
            </table>
          </div>
          <div class="col-md-6">
            <h6 class="fw-semibold mb-3">Planning</h6>
            <table class="table table-sm table-borderless">
              <tr><td class="text-muted">D\xE9but</td><td>{{ formatDate(selectedSession.date_debut) }}</td></tr>
              <tr><td class="text-muted">Fin</td><td>{{ formatDate(selectedSession.date_fin) }}</td></tr>
              <tr><td class="text-muted">Type</td><td>{{ selectedSession.type | titlecase }}</td></tr>
              <tr><td class="text-muted">Lieu</td><td>{{ selectedSession.lieu || '\u2014' }}</td></tr>
              <tr><td class="text-muted">Participants</td><td>{{ selectedSession.nombre_inscrits || 0 }}/{{ selectedSession.capacite_max }}</td></tr>
            </table>
          </div>
          <div class="col-12" *ngIf="selectedSession.description">
            <h6 class="fw-semibold mb-2">Description</h6>
            <p class="text-muted">{{ selectedSession.description }}</p>
          </div>
          <div class="col-12" *ngIf="selectedSession.instructions_acces">
            <h6 class="fw-semibold mb-2">Instructions d'acc\xE8s</h6>
            <p class="text-muted">{{ selectedSession.instructions_acces }}</p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/instructor/instructor-session/instructor-session.component.scss */\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #EEF2FF;\n  color: #534AB7;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n}\n.ip-btn i {\n  font-size: 16px;\n}\n.ip-btn--outline {\n  background: #fff;\n  color: #534AB7;\n  border: 1px solid #534AB7;\n}\n.ip-btn--outline:hover {\n  background: #EEF2FF;\n}\n.ip-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.ip-search {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 12px;\n  font-size: 13px;\n  outline: none;\n  min-width: 240px;\n  transition: border-color 0.15s;\n}\n.ip-search:focus {\n  border-color: #534AB7;\n}\n.ip-select {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 10px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  cursor: pointer;\n}\n.ip-select:focus {\n  border-color: #534AB7;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-session-cell {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.ip-session-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #EEF2FF;\n  color: #534AB7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n.ip-session-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-session-sub {\n  font-size: 11px;\n  color: #6C757D;\n  font-family: monospace;\n  margin-top: 1px;\n}\n.ip-session-formation {\n  font-size: 11px;\n  color: #534AB7;\n  margin-top: 2px;\n}\n.ip-date-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 12px;\n}\n.ip-date-start {\n  color: #1A1A2E;\n  font-weight: 500;\n}\n.ip-date-arrow {\n  color: #6C757D;\n  font-size: 11px;\n}\n.ip-date-end {\n  color: #6C757D;\n}\n.ip-type-badge {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ip-type-badge.ip-type-presentiel {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ip-type-badge.ip-type-distanciel {\n  background: #FFFBEB;\n  color: #D97706;\n}\n.ip-type-badge.ip-type-hybride {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n.ip-statut-badge {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ip-statut-badge.ip-statut-planifiee {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ip-statut-badge.ip-statut-en_cours {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-statut-badge.ip-statut-terminee {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-statut-badge.ip-statut-annulee {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-participants {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ip-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-mini-bar {\n  width: 80px;\n  height: 4px;\n  background: #E9ECEF;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ip-mini-fill {\n  height: 100%;\n  background: #534AB7;\n  border-radius: 4px;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn:hover {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.ip-empty {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-top: 1px solid #E9ECEF;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pg-info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.pg-controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pg-btn {\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.12s;\n  padding: 0 8px;\n}\n.pg-btn:hover:not(:disabled) {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.pg-btn.active {\n  background: #534AB7;\n  border-color: #534AB7;\n  color: #fff;\n}\n.pg-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=instructor-session.component.css.map */\n"] }]
  }], () => [{ type: SessionFormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorSessionComponent, { className: "InstructorSessionComponent", filePath: "src/app/features/instructor/instructor-session/instructor-session.component.ts", lineNumber: 15 });
})();
export {
  InstructorSessionComponent
};
//# sourceMappingURL=chunk-3AF5WH6E.js.map
