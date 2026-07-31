import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ZGFJXD53.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  NgForOf
} from "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  catchError,
  forkJoin,
  map,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BSBCM3BI.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-assignment/adminrh-assignment.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.message;
var _forTrack2 = ($index, $item) => $item.label;
function AdminrhAssignmentComponent_Conditional_66_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
  }
}
function AdminrhAssignmentComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, AdminrhAssignmentComponent_Conditional_66_div_1_Template, 1, 0, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function AdminrhAssignmentComponent_Conditional_67_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 35)(1, "td", 38)(2, "div", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "span", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 43)(10, "span", 44);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 45);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 46)(15, "div", 47)(16, "div", 48);
    \u0275\u0275element(17, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 49);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td", 50)(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 51)(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const emp_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(emp_r1.nom));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r1.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r1.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r1.formations_en_cours);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("en cours / ", emp_r1.formations_total, " total");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275interpolate1("emp-progress__fill emp-progress__fill--", ctx_r1.getProgressClass(emp_r1.progression_moyenne)));
    \u0275\u0275styleProp("width", emp_r1.progression_moyenne, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", emp_r1.progression_moyenne, "%");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("emp-score emp-score--", ctx_r1.getScoreClass(emp_r1.score_moyen)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", emp_r1.score_moyen > 0 ? emp_r1.score_moyen + " %" : "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("emp-statut emp-statut--", ctx_r1.getStatut(emp_r1)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatutLabel(emp_r1));
  }
}
function AdminrhAssignmentComponent_Conditional_67_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 52);
    \u0275\u0275element(2, "i", 9);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun employ\xE9 trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhAssignmentComponent_Conditional_67_Conditional_18_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminrhAssignmentComponent_Conditional_67_Conditional_18_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function AdminrhAssignmentComponent_Conditional_67_Conditional_18_For_7_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const n_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(n_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", n_r5 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r5);
  }
}
function AdminrhAssignmentComponent_Conditional_67_Conditional_18_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminrhAssignmentComponent_Conditional_67_Conditional_18_For_7_Conditional_0_Template, 2, 0, "span", 61)(1, AdminrhAssignmentComponent_Conditional_67_Conditional_18_For_7_Conditional_1_Template, 2, 3, "button", 62);
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    \u0275\u0275conditional(n_r5 === -1 ? 0 : 1);
  }
}
function AdminrhAssignmentComponent_Conditional_67_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54)(4, "button", 55);
    \u0275\u0275listener("click", function AdminrhAssignmentComponent_Conditional_67_Conditional_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275element(5, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, AdminrhAssignmentComponent_Conditional_67_Conditional_18_For_7_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "button", 55);
    \u0275\u0275listener("click", function AdminrhAssignmentComponent_Conditional_67_Conditional_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275element(9, "i", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 58)(11, "select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhAssignmentComponent_Conditional_67_Conditional_18_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhAssignmentComponent_Conditional_67_Conditional_18_Template_select_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.currentPage = 1);
    });
    \u0275\u0275elementStart(12, "option", 60);
    \u0275\u0275text(13, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 60);
    \u0275\u0275text(15, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 60);
    \u0275\u0275text(17, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 60);
    \u0275\u0275text(19, "50");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "par page");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", (ctx_r1.currentPage - 1) * ctx_r1.pageSize + 1, "\u2013", ctx_r1.currentPage * ctx_r1.pageSize > ctx_r1.filteredEmployees.length ? ctx_r1.filteredEmployees.length : ctx_r1.currentPage * ctx_r1.pageSize, " sur ", ctx_r1.filteredEmployees.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pageNumbers);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("value", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 25);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
  }
}
function AdminrhAssignmentComponent_Conditional_67_Conditional_19_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 69);
    \u0275\u0275element(4, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 71);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 72);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(f_r6.titre));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r6.titre);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", f_r6.taux, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r6.taux, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r6.inscrits, " inscrits");
  }
}
function AdminrhAssignmentComponent_Conditional_67_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 64)(2, "h6", 65);
    \u0275\u0275text(3, "Compl\xE9tion par formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 66);
    \u0275\u0275repeaterCreate(5, AdminrhAssignmentComponent_Conditional_67_Conditional_19_For_6_Template, 9, 7, "div", 67, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.topFormations);
  }
}
function AdminrhAssignmentComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "table", 34)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Score quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, AdminrhAssignmentComponent_Conditional_67_For_16_Template, 26, 19, "tr", 35, _forTrack0);
    \u0275\u0275conditionalCreate(17, AdminrhAssignmentComponent_Conditional_67_Conditional_17_Template, 5, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(18, AdminrhAssignmentComponent_Conditional_67_Conditional_18_Template, 22, 10, "div", 36);
    \u0275\u0275conditionalCreate(19, AdminrhAssignmentComponent_Conditional_67_Conditional_19_Template, 7, 0, "div", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.pagedEmployees);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.filteredEmployees.length ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filteredEmployees.length > ctx_r1.pageSize ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.topFormations.length ? 19 : -1);
  }
}
function AdminrhAssignmentComponent_Conditional_68_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1, "Aucune alerte active");
    \u0275\u0275elementEnd();
  }
}
function AdminrhAssignmentComponent_Conditional_68_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 81);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 82);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("alerte alerte--", a_r7.type));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", a_r7.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r7.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r7.count);
  }
}
function AdminrhAssignmentComponent_Conditional_68_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1, "Aucun certificat r\xE9cent");
    \u0275\u0275elementEnd();
  }
}
function AdminrhAssignmentComponent_Conditional_68_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 83);
    \u0275\u0275element(2, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 85)(4, "span", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 87);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((c_r8.user == null ? null : c_r8.user.name) || (c_r8.employe == null ? null : c_r8.employe.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((c_r8.formation == null ? null : c_r8.formation.titre) || c_r8.titre || "\u2014");
  }
}
function AdminrhAssignmentComponent_Conditional_68_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "span", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 89);
    \u0275\u0275element(4, "div", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 91);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", s_r9.pct, "%")("background", s_r9.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r9.pct, "%");
  }
}
function AdminrhAssignmentComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 30)(1, "div", 73)(2, "div", 74);
    \u0275\u0275element(3, "i", 75);
    \u0275\u0275elementStart(4, "h6");
    \u0275\u0275text(5, "Alertes & actions requises");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, AdminrhAssignmentComponent_Conditional_68_Conditional_6_Template, 2, 0, "p", 76);
    \u0275\u0275repeaterCreate(7, AdminrhAssignmentComponent_Conditional_68_For_8_Template, 6, 8, "div", 77, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 73)(10, "div", 74);
    \u0275\u0275element(11, "i", 16);
    \u0275\u0275elementStart(12, "h6");
    \u0275\u0275text(13, "Derniers certificats d\xE9livr\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, AdminrhAssignmentComponent_Conditional_68_Conditional_14_Template, 2, 0, "p", 76);
    \u0275\u0275repeaterCreate(15, AdminrhAssignmentComponent_Conditional_68_For_16_Template, 8, 2, "div", 78, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 73)(18, "div", 74);
    \u0275\u0275element(19, "i", 14);
    \u0275\u0275elementStart(20, "h6");
    \u0275\u0275text(21, "R\xE9partition des statuts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 79);
    \u0275\u0275repeaterCreate(23, AdminrhAssignmentComponent_Conditional_68_For_24_Template, 7, 6, "div", 80, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!ctx_r1.alertes.length ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.alertes);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx_r1.recentCerts.length ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.recentCerts);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.statutDistribution);
  }
}
var AdminrhAssignmentComponent = class _AdminrhAssignmentComponent {
  http;
  employees = [];
  formations = [];
  certificats = [];
  loading = true;
  _searchQuery = "";
  get searchQuery() {
    return this._searchQuery;
  }
  set searchQuery(v) {
    this._searchQuery = v;
    this.currentPage = 1;
  }
  _filterStatut = "tous";
  get filterStatut() {
    return this._filterStatut;
  }
  set filterStatut(v) {
    this._filterStatut = v;
    this.currentPage = 1;
  }
  // ── Pagination ───────────────────────────────────────────────────
  pageSize = 10;
  currentPage = 1;
  get totalPages() {
    return Math.max(1, Math.ceil(this.filteredEmployees.length / this.pageSize));
  }
  get pagedEmployees() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredEmployees.slice(start, start + this.pageSize);
  }
  get pageNumbers() {
    const total = this.totalPages;
    const cur = this.currentPage;
    const delta = 2;
    const range = [];
    for (let i = Math.max(1, cur - delta); i <= Math.min(total, cur + delta); i++)
      range.push(i);
    if (range[0] > 2)
      range.unshift(-1, 1);
    else if (range[0] === 2)
      range.unshift(1);
    if (range[range.length - 1] < total - 1)
      range.push(-1, total);
    else if (range[range.length - 1] === total - 1)
      range.push(total);
    return range;
  }
  goToPage(n) {
    if (n >= 1 && n <= this.totalPages)
      this.currentPage = n;
  }
  prevPage() {
    this.goToPage(this.currentPage - 1);
  }
  nextPage() {
    this.goToPage(this.currentPage + 1);
  }
  // ── KPIs ─────────────────────────────────────────────────────────
  get kpiActifs() {
    return this.employees.filter((e) => e.formations_en_cours > 0).length;
  }
  get kpiCompletionMoy() {
    if (!this.employees.length)
      return 0;
    const sum = this.employees.reduce((s, e) => s + e.progression_moyenne, 0);
    return Math.round(sum / this.employees.length);
  }
  get kpiCertifiesMois() {
    const now = /* @__PURE__ */ new Date();
    return this.certificats.filter((c) => {
      const d = new Date(c.created_at || c.date_delivrance || "");
      return !isNaN(d.getTime()) && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
  }
  get kpiDifficulte() {
    return this.employees.filter((e) => e.formations_en_cours > 0 && e.progression_moyenne < 30).length;
  }
  get kpiTotal() {
    return this.employees.length;
  }
  // ── Table filtrée ────────────────────────────────────────────────
  get filteredEmployees() {
    let list = this.employees;
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      list = list.filter((e) => e.nom.toLowerCase().includes(q) || e.email.toLowerCase().includes(q));
    }
    if (this.filterStatut !== "tous") {
      list = list.filter((e) => this.getStatut(e) === this.filterStatut);
    }
    return list;
  }
  // ── Statuts ──────────────────────────────────────────────────────
  getStatut(e) {
    if (e.formations_en_cours > 0 && e.progression_moyenne < 30)
      return "difficulte";
    if (e.formations_en_cours > 0)
      return "actif";
    if (e.formations_terminees > 0)
      return "certifie";
    return "inactif";
  }
  getStatutLabel(e) {
    return { difficulte: "En difficult\xE9", actif: "Actif", certifie: "Certifi\xE9", inactif: "Inactif" }[this.getStatut(e)] ?? "";
  }
  getProgressClass(p) {
    if (p >= 75)
      return "high";
    if (p >= 40)
      return "mid";
    return "low";
  }
  getScoreClass(s) {
    if (s >= 75)
      return "good";
    if (s >= 50)
      return "avg";
    return s > 0 ? "bad" : "none";
  }
  getInitials(nom) {
    return nom.split(" ").filter(Boolean).map((w) => w[0]).join("").substring(0, 2).toUpperCase() || "?";
  }
  // ── Sidebar alertes ──────────────────────────────────────────────
  get alertes() {
    const alerts = [];
    const inactifs = this.employees.filter((e) => e.formations_total > 0 && e.formations_en_cours === 0 && e.formations_terminees === 0).length;
    const difficulte = this.employees.filter((e) => e.formations_en_cours > 0 && e.progression_moyenne < 30).length;
    const faibleScore = this.employees.filter((e) => e.score_moyen > 0 && e.score_moyen < 50).length;
    if (inactifs)
      alerts.push({ type: "warning", icon: "isax-clock", message: "Apprenants inactifs", count: inactifs });
    if (difficulte)
      alerts.push({ type: "danger", icon: "isax-danger", message: "Progression < 30 %", count: difficulte });
    if (faibleScore)
      alerts.push({ type: "info", icon: "isax-chart-fail", message: "Score quiz < 50 %", count: faibleScore });
    return alerts;
  }
  // ── Sidebar répartition ──────────────────────────────────────────
  get statutDistribution() {
    const t = this.employees.length || 1;
    const counts = { actif: 0, certifie: 0, difficulte: 0, inactif: 0 };
    this.employees.forEach((e) => counts[this.getStatut(e)]++);
    return [
      { label: "Actifs", count: counts["actif"], pct: Math.round(counts["actif"] / t * 100), color: "#0F6E56" },
      { label: "Certifi\xE9s", count: counts["certifie"], pct: Math.round(counts["certifie"] / t * 100), color: "#3B82F6" },
      { label: "En difficult\xE9", count: counts["difficulte"], pct: Math.round(counts["difficulte"] / t * 100), color: "#EF4444" },
      { label: "Inactifs", count: counts["inactif"], pct: Math.round(counts["inactif"] / t * 100), color: "#94A3B8" }
    ];
  }
  // ── Recent certs (sidebar) ───────────────────────────────────────
  get recentCerts() {
    return this.certificats.slice(0, 5);
  }
  // ── Formation completion chart ───────────────────────────────────
  get topFormations() {
    return this.formations.slice(0, 8);
  }
  constructor(http) {
    this.http = http;
  }
  get headers() {
    const token = localStorage.getItem("pyramide_token");
    return new HttpHeaders({ "Authorization": `Bearer ${token}`, "Content-Type": "application/json" });
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.loading = true;
    forkJoin({
      users: this.http.get(`${environment.apiUrl}/mes-utilisateurs-rh`, { headers: this.headers }).pipe(catchError(() => of({ users: [] }))),
      formations: this.http.get(`${environment.apiUrl}/adminrh/formations`, { headers: this.headers }).pipe(catchError(() => of({ formations: [] }))),
      certificats: this.http.get(`${environment.apiUrl}/certificats`, { headers: this.headers }).pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ users, formations, certificats }) => {
        const userList = users.users || users.data || (Array.isArray(users) ? users : []);
        const formList = formations.formations || formations.data || (Array.isArray(formations) ? formations : []);
        const certList = Array.isArray(certificats) ? certificats : certificats.certificats || certificats.data || [];
        this.certificats = certList;
        this.formations = formList.map((f) => ({
          id: f.id,
          titre: f.titre || f.title || "\u2014",
          inscrits: f.nombre_inscrits || f.inscrits || 0,
          termines: f.nombre_termines || 0,
          taux: f.taux_completion ?? (f.nombre_inscrits ? Math.round((f.nombre_termines || 0) / f.nombre_inscrits * 100) : 0)
        }));
        if (!userList.length) {
          this.loading = false;
          return;
        }
        const calls = userList.map((u) => this.http.get(`${environment.apiUrl}/employes/${u.id}/formations`, { headers: this.headers }).pipe(map((res) => ({
          id: u.id,
          nom: u.name || `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || u.email,
          email: u.email,
          formations_total: res.statistiques?.formations_total ?? 0,
          formations_en_cours: res.statistiques?.formations_en_cours ?? 0,
          formations_terminees: res.statistiques?.formations_terminees ?? 0,
          progression_moyenne: Math.round(res.statistiques?.progression_moyenne ?? 0),
          score_moyen: Math.round(res.statistiques?.score_moyen ?? 0)
        })), catchError(() => of({
          id: u.id,
          nom: u.name || `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || u.email,
          email: u.email,
          formations_total: 0,
          formations_en_cours: 0,
          formations_terminees: 0,
          progression_moyenne: 0,
          score_moyen: 0
        }))));
        forkJoin(calls).subscribe({
          next: (emps) => {
            this.employees = emps;
            this.currentPage = 1;
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          }
        });
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function AdminrhAssignmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhAssignmentComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhAssignmentComponent, selectors: [["app-adminrh-assignment"]], decls: 69, vars: 19, consts: [[1, "pg-header"], [1, "pg-header__left"], [1, "pg-header__title"], [1, "pg-header__sub"], ["type", "button", "title", "Actualiser", 1, "pg-header__refresh", 3, "click"], [1, "isax", "isax-refresh-2"], [1, "kpi-row"], [1, "kpi-card"], [1, "kpi-card__icon", "kpi-card__icon--green"], [1, "isax", "isax-people"], [1, "kpi-card__body"], [1, "kpi-card__value"], [1, "kpi-card__label"], [1, "kpi-card__icon", "kpi-card__icon--blue"], [1, "isax", "isax-chart-2"], [1, "kpi-card__icon", "kpi-card__icon--gold"], [1, "isax", "isax-medal"], [1, "kpi-card__icon", "kpi-card__icon--red"], [1, "isax", "isax-danger"], [1, "kpi-card__icon", "kpi-card__icon--purple"], [1, "isax", "isax-profile-2user"], [1, "pg-layout"], [1, "pg-layout__main"], [1, "pg-toolbar"], [1, "pg-toolbar__search"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Rechercher un employ\xE9\u2026", 3, "ngModelChange", "ngModel"], [1, "pg-toolbar__filters"], ["type", "button", 1, "pg-filter-btn", 3, "click"], [1, "pg-loading"], [1, "pg-sidebar"], ["class", "pg-skeleton", 4, "ngFor", "ngForOf"], [1, "pg-skeleton"], [1, "emp-table-wrap"], [1, "emp-table"], [1, "emp-row"], [1, "pg-pagination"], [1, "chart-card"], [1, "emp-row__name-cell"], [1, "emp-av"], [1, "emp-info"], [1, "emp-info__name"], [1, "emp-info__email"], [1, "emp-row__count-cell"], [1, "emp-count"], [1, "emp-count__label"], [1, "emp-row__progress-cell"], [1, "emp-progress"], [1, "emp-progress__bar"], [1, "emp-progress__pct"], [1, "emp-row__score-cell"], [1, "emp-row__statut-cell"], ["colspan", "5", 1, "emp-table__empty"], [1, "pg-pagination__info"], [1, "pg-pagination__controls"], ["type", "button", 1, "pg-pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], [1, "isax", "isax-arrow-right-3"], [1, "pg-pagination__size"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "pg-pg-ellipsis"], ["type", "button", 1, "pg-pg-btn", 3, "active"], ["type", "button", 1, "pg-pg-btn", 3, "click"], [1, "chart-card__head"], [1, "chart-card__title"], [1, "chart-bars"], [1, "chart-row"], [1, "chart-row__label", 3, "title"], [1, "chart-row__track"], [1, "chart-row__fill"], [1, "chart-row__pct"], [1, "chart-row__count"], [1, "sidebar-card"], [1, "sidebar-card__head"], [1, "isax", "isax-notification-bing"], [1, "sidebar-card__empty"], [3, "class"], [1, "cert-item"], [1, "distrib"], [1, "distrib__row"], [1, "alerte__msg"], [1, "alerte__count"], [1, "cert-item__av"], [1, "isax", "isax-award"], [1, "cert-item__body"], [1, "cert-item__nom"], [1, "cert-item__formation"], [1, "distrib__label"], [1, "distrib__track"], [1, "distrib__fill"], [1, "distrib__pct"]], template: function AdminrhAssignmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
      \u0275\u0275text(3, "Progression des employ\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Suivi individuel de la formation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function AdminrhAssignmentComponent_Template_button_click_6_listener() {
        return ctx.loadData();
      });
      \u0275\u0275element(7, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
      \u0275\u0275element(11, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10)(13, "span", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 12);
      \u0275\u0275text(16, "Apprenants actifs");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 7)(18, "div", 13);
      \u0275\u0275element(19, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 10)(21, "span", 11);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 12);
      \u0275\u0275text(24, "Compl\xE9tion moyenne");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 7)(26, "div", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 10)(29, "span", 11);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 12);
      \u0275\u0275text(32, "Certifi\xE9s ce mois");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 7)(34, "div", 17);
      \u0275\u0275element(35, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 10)(37, "span", 11);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 12);
      \u0275\u0275text(40, "En difficult\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 7)(42, "div", 19);
      \u0275\u0275element(43, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 10)(45, "span", 11);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 12);
      \u0275\u0275text(48, "Total employ\xE9s");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "div", 21)(50, "div", 22)(51, "div", 23)(52, "div", 24);
      \u0275\u0275element(53, "i", 25);
      \u0275\u0275elementStart(54, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhAssignmentComponent_Template_input_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 27)(56, "button", 28);
      \u0275\u0275listener("click", function AdminrhAssignmentComponent_Template_button_click_56_listener() {
        return ctx.filterStatut = "tous";
      });
      \u0275\u0275text(57, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 28);
      \u0275\u0275listener("click", function AdminrhAssignmentComponent_Template_button_click_58_listener() {
        return ctx.filterStatut = "actif";
      });
      \u0275\u0275text(59, "Actifs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 28);
      \u0275\u0275listener("click", function AdminrhAssignmentComponent_Template_button_click_60_listener() {
        return ctx.filterStatut = "certifie";
      });
      \u0275\u0275text(61, "Certifi\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 28);
      \u0275\u0275listener("click", function AdminrhAssignmentComponent_Template_button_click_62_listener() {
        return ctx.filterStatut = "difficulte";
      });
      \u0275\u0275text(63, "En difficult\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 28);
      \u0275\u0275listener("click", function AdminrhAssignmentComponent_Template_button_click_64_listener() {
        return ctx.filterStatut = "inactif";
      });
      \u0275\u0275text(65, "Inactifs");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(66, AdminrhAssignmentComponent_Conditional_66_Template, 2, 2, "div", 29);
      \u0275\u0275conditionalCreate(67, AdminrhAssignmentComponent_Conditional_67_Template, 20, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(68, AdminrhAssignmentComponent_Conditional_68_Template, 25, 2, "aside", 30);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.loading ? "\u2026" : ctx.kpiActifs);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.loading ? "\u2026" : ctx.kpiCompletionMoy + " %");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.loading ? "\u2026" : ctx.kpiCertifiesMois);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.loading ? "\u2026" : ctx.kpiDifficulte);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.loading ? "\u2026" : ctx.kpiTotal);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filterStatut === "tous");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filterStatut === "actif");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filterStatut === "certifie");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filterStatut === "difficulte");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filterStatut === "inactif");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 66 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading ? 67 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading ? 68 : -1);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.pg-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.pg-header__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0;\n}\n.pg-header__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n  margin: 2px 0 0;\n}\n.pg-header__left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pg-header__refresh[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #FFFFFF;\n  color: #64748B;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  transition: all 0.15s;\n}\n.pg-header__refresh[_ngcontent-%COMP%]:hover {\n  background: #E6F4F0;\n  color: #0F6E56;\n  border-color: #0F6E56;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1200px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__icon--green[_ngcontent-%COMP%] {\n  background: #E6F4F0;\n  color: #0F6E56;\n}\n.kpi-card__icon--blue[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #3B82F6;\n}\n.kpi-card__icon--gold[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: #F59E0B;\n}\n.kpi-card__icon--red[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #EF4444;\n}\n.kpi-card__icon--purple[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n  color: #8B5CF6;\n}\n.kpi-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1E293B;\n  line-height: 1.1;\n}\n.kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  margin-top: 2px;\n}\n.pg-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  align-items: start;\n}\n@media (max-width: 1100px) {\n  .pg-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pg-layout__main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.pg-toolbar[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.pg-toolbar__search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 6px 12px;\n  color: #64748B;\n  font-size: 14px;\n}\n.pg-toolbar__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pg-toolbar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 13px;\n  color: #1E293B;\n}\n.pg-toolbar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #64748B;\n}\n.pg-toolbar__filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.pg-filter-btn[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  border: 1px solid #E2E8F0;\n  border-radius: 20px;\n  background: #F8FAFC;\n  color: #64748B;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pg-filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: #0F6E56;\n  color: #0F6E56;\n}\n.pg-filter-btn.active[_ngcontent-%COMP%] {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.pg-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.pg-skeleton[_ngcontent-%COMP%] {\n  height: 52px;\n  border-radius: 8px;\n  background: #f0f0f0;\n  position: relative;\n  overflow: hidden;\n}\n.pg-skeleton[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.6) 50%,\n      transparent 100%);\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n.emp-table-wrap[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.emp-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.emp-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #F8FAFC;\n}\n.emp-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748B;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1px solid #E2E8F0;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.emp-table__empty[_ngcontent-%COMP%] {\n  padding: 48px;\n  text-align: center;\n  color: #64748B;\n  font-size: 14px;\n}\n.emp-table__empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 32px;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.emp-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #E2E8F0;\n  transition: background 0.1s;\n}\n.emp-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.emp-row[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n}\n.emp-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  vertical-align: middle;\n  font-size: 13px;\n}\n.emp-row__name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 180px;\n}\n.emp-row__count-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  white-space: nowrap;\n}\n.emp-row__progress-cell[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.emp-av[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #E6F4F0;\n  color: #0F6E56;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.emp-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.emp-info__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1E293B;\n  font-size: 13px;\n}\n.emp-info__email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n}\n.emp-count[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: #1E293B;\n}\n.emp-count__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n}\n.emp-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.emp-progress__bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 7px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.emp-progress__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.emp-progress__fill--high[_ngcontent-%COMP%] {\n  background: #0F6E56;\n}\n.emp-progress__fill--mid[_ngcontent-%COMP%] {\n  background: #F59E0B;\n}\n.emp-progress__fill--low[_ngcontent-%COMP%] {\n  background: #EF4444;\n}\n.emp-progress__pct[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1E293B;\n  white-space: nowrap;\n  width: 36px;\n  text-align: right;\n}\n.emp-score[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.emp-score--good[_ngcontent-%COMP%] {\n  background: #E6F4F0;\n  color: #0F6E56;\n}\n.emp-score--avg[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n}\n.emp-score--bad[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #EF4444;\n}\n.emp-score--none[_ngcontent-%COMP%] {\n  background: #F8FAFC;\n  color: #64748B;\n}\n.emp-statut[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.emp-statut--actif[_ngcontent-%COMP%] {\n  background: #E6F4F0;\n  color: #0F6E56;\n}\n.emp-statut--certifie[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #3B82F6;\n}\n.emp-statut--difficulte[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #EF4444;\n}\n.emp-statut--inactif[_ngcontent-%COMP%] {\n  background: #F8FAFC;\n  color: #64748B;\n  border: 1px solid #E2E8F0;\n}\n.pg-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 12px 16px;\n  border-top: 1px solid #E2E8F0;\n  background: #F8FAFC;\n  border-radius: 0 0 12px 12px;\n}\n.pg-pagination__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n}\n.pg-pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pg-pagination__size[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #64748B;\n}\n.pg-pagination__size[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  padding: 3px 6px;\n  font-size: 12px;\n  background: #FFFFFF;\n  color: #1E293B;\n  cursor: pointer;\n  outline: none;\n}\n.pg-pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 6px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #FFFFFF;\n  color: #64748B;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.pg-pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #0F6E56;\n  color: #0F6E56;\n  background: #E6F4F0;\n}\n.pg-pg-btn.active[_ngcontent-%COMP%] {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n  font-weight: 700;\n}\n.pg-pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pg-pg-ellipsis[_ngcontent-%COMP%] {\n  width: 32px;\n  text-align: center;\n  font-size: 13px;\n  color: #64748B;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.chart-card__head[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.chart-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0;\n}\n.chart-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.chart-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 180px 1fr 42px 80px;\n  align-items: center;\n  gap: 10px;\n}\n.chart-row__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1E293B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chart-row__track[_ngcontent-%COMP%] {\n  height: 9px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.chart-row__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #0F6E56;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.chart-row__pct[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1E293B;\n  text-align: right;\n}\n.chart-row__count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  text-align: right;\n}\n.pg-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.sidebar-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.sidebar-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.sidebar-card__head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #0F6E56;\n}\n.sidebar-card__head[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0;\n}\n.sidebar-card__empty[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  text-align: center;\n  padding: 8px 0;\n}\n.alerte[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  margin-bottom: 6px;\n  font-size: 12px;\n}\n.alerte[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.alerte__msg[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.alerte__count[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 13px;\n  min-width: 24px;\n  text-align: center;\n}\n.alerte--warning[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n}\n.alerte--danger[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #EF4444;\n}\n.alerte--info[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #3B82F6;\n}\n.cert-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 0;\n  border-bottom: 1px solid #E2E8F0;\n}\n.cert-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cert-item__av[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #FFFBEB;\n  color: #F59E0B;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.cert-item__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  overflow: hidden;\n}\n.cert-item__nom[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1E293B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cert-item__formation[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.distrib[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.distrib__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.distrib__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1E293B;\n  width: 90px;\n  flex-shrink: 0;\n}\n.distrib__track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.distrib__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.distrib__pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748B;\n  width: 32px;\n  text-align: right;\n}\n/*# sourceMappingURL=adminrh-assignment.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhAssignmentComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-assignment", imports: [CommonModule, FormsModule], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     PAGE PROGRESSION EMPLOY\xC9S\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
\r
<div class="pg-header">\r
  <div class="pg-header__left">\r
    <h5 class="pg-header__title">Progression des employ\xE9s</h5>\r
    <p class="pg-header__sub">Suivi individuel de la formation</p>\r
  </div>\r
  <button type="button" class="pg-header__refresh" (click)="loadData()" title="Actualiser">\r
    <i class="isax isax-refresh-2"></i>\r
  </button>\r
</div>\r
\r
<!-- \u2500\u2500 KPI row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="kpi-row">\r
  <div class="kpi-card">\r
    <div class="kpi-card__icon kpi-card__icon--green"><i class="isax isax-people"></i></div>\r
    <div class="kpi-card__body">\r
      <span class="kpi-card__value">{{ loading ? '\u2026' : kpiActifs }}</span>\r
      <span class="kpi-card__label">Apprenants actifs</span>\r
    </div>\r
  </div>\r
  <div class="kpi-card">\r
    <div class="kpi-card__icon kpi-card__icon--blue"><i class="isax isax-chart-2"></i></div>\r
    <div class="kpi-card__body">\r
      <span class="kpi-card__value">{{ loading ? '\u2026' : kpiCompletionMoy + ' %' }}</span>\r
      <span class="kpi-card__label">Compl\xE9tion moyenne</span>\r
    </div>\r
  </div>\r
  <div class="kpi-card">\r
    <div class="kpi-card__icon kpi-card__icon--gold"><i class="isax isax-medal"></i></div>\r
    <div class="kpi-card__body">\r
      <span class="kpi-card__value">{{ loading ? '\u2026' : kpiCertifiesMois }}</span>\r
      <span class="kpi-card__label">Certifi\xE9s ce mois</span>\r
    </div>\r
  </div>\r
  <div class="kpi-card">\r
    <div class="kpi-card__icon kpi-card__icon--red"><i class="isax isax-danger"></i></div>\r
    <div class="kpi-card__body">\r
      <span class="kpi-card__value">{{ loading ? '\u2026' : kpiDifficulte }}</span>\r
      <span class="kpi-card__label">En difficult\xE9</span>\r
    </div>\r
  </div>\r
  <div class="kpi-card">\r
    <div class="kpi-card__icon kpi-card__icon--purple"><i class="isax isax-profile-2user"></i></div>\r
    <div class="kpi-card__body">\r
      <span class="kpi-card__value">{{ loading ? '\u2026' : kpiTotal }}</span>\r
      <span class="kpi-card__label">Total employ\xE9s</span>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2500\u2500 Main layout \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="pg-layout">\r
\r
  <!-- LEFT: Table + Chart \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="pg-layout__main">\r
\r
    <!-- Filters -->\r
    <div class="pg-toolbar">\r
      <div class="pg-toolbar__search">\r
        <i class="isax isax-search-normal-1"></i>\r
        <input type="text" placeholder="Rechercher un employ\xE9\u2026" [(ngModel)]="searchQuery">\r
      </div>\r
      <div class="pg-toolbar__filters">\r
        <button type="button" class="pg-filter-btn" [class.active]="filterStatut==='tous'"       (click)="filterStatut='tous'">Tous</button>\r
        <button type="button" class="pg-filter-btn" [class.active]="filterStatut==='actif'"      (click)="filterStatut='actif'">Actifs</button>\r
        <button type="button" class="pg-filter-btn" [class.active]="filterStatut==='certifie'"   (click)="filterStatut='certifie'">Certifi\xE9s</button>\r
        <button type="button" class="pg-filter-btn" [class.active]="filterStatut==='difficulte'" (click)="filterStatut='difficulte'">En difficult\xE9</button>\r
        <button type="button" class="pg-filter-btn" [class.active]="filterStatut==='inactif'"    (click)="filterStatut='inactif'">Inactifs</button>\r
      </div>\r
    </div>\r
\r
    <!-- Loading skeleton -->\r
    @if (loading) {\r
      <div class="pg-loading">\r
        <div class="pg-skeleton" *ngFor="let x of [1,2,3,4,5]"></div>\r
      </div>\r
    }\r
\r
    <!-- Employee Table -->\r
    @if (!loading) {\r
      <div class="emp-table-wrap">\r
        <table class="emp-table">\r
          <thead>\r
            <tr>\r
              <th>Employ\xE9</th>\r
              <th>Formations</th>\r
              <th>Progression</th>\r
              <th>Score quiz</th>\r
              <th>Statut</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (emp of pagedEmployees; track emp.id) {\r
              <tr class="emp-row">\r
                <td class="emp-row__name-cell">\r
                  <div class="emp-av">{{ getInitials(emp.nom) }}</div>\r
                  <div class="emp-info">\r
                    <span class="emp-info__name">{{ emp.nom }}</span>\r
                    <span class="emp-info__email">{{ emp.email }}</span>\r
                  </div>\r
                </td>\r
                <td class="emp-row__count-cell">\r
                  <span class="emp-count">{{ emp.formations_en_cours }}</span>\r
                  <span class="emp-count__label">en cours / {{ emp.formations_total }} total</span>\r
                </td>\r
                <td class="emp-row__progress-cell">\r
                  <div class="emp-progress">\r
                    <div class="emp-progress__bar">\r
                      <div class="emp-progress__fill emp-progress__fill--{{ getProgressClass(emp.progression_moyenne) }}"\r
                           [style.width.%]="emp.progression_moyenne"></div>\r
                    </div>\r
                    <span class="emp-progress__pct">{{ emp.progression_moyenne }}%</span>\r
                  </div>\r
                </td>\r
                <td class="emp-row__score-cell">\r
                  <span class="emp-score emp-score--{{ getScoreClass(emp.score_moyen) }}">\r
                    {{ emp.score_moyen > 0 ? (emp.score_moyen + ' %') : '\u2014' }}\r
                  </span>\r
                </td>\r
                <td class="emp-row__statut-cell">\r
                  <span class="emp-statut emp-statut--{{ getStatut(emp) }}">{{ getStatutLabel(emp) }}</span>\r
                </td>\r
              </tr>\r
            }\r
            @if (!filteredEmployees.length) {\r
              <tr>\r
                <td colspan="5" class="emp-table__empty">\r
                  <i class="isax isax-people"></i>\r
                  <span>Aucun employ\xE9 trouv\xE9</span>\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Pagination -->\r
      @if (filteredEmployees.length > pageSize) {\r
        <div class="pg-pagination">\r
          <span class="pg-pagination__info">\r
            {{ (currentPage - 1) * pageSize + 1 }}\u2013{{ currentPage * pageSize > filteredEmployees.length ? filteredEmployees.length : currentPage * pageSize }} sur {{ filteredEmployees.length }}\r
          </span>\r
          <div class="pg-pagination__controls">\r
            <button type="button" class="pg-pg-btn" (click)="prevPage()" [disabled]="currentPage === 1">\r
              <i class="isax isax-arrow-left-2"></i>\r
            </button>\r
            @for (n of pageNumbers; track n) {\r
              @if (n === -1) {\r
                <span class="pg-pg-ellipsis">\u2026</span>\r
              } @else {\r
                <button type="button" class="pg-pg-btn" [class.active]="n === currentPage" (click)="goToPage(n)">{{ n }}</button>\r
              }\r
            }\r
            <button type="button" class="pg-pg-btn" (click)="nextPage()" [disabled]="currentPage === totalPages">\r
              <i class="isax isax-arrow-right-3"></i>\r
            </button>\r
          </div>\r
          <div class="pg-pagination__size">\r
            <select [(ngModel)]="pageSize" (ngModelChange)="currentPage=1">\r
              <option [value]="5">5</option>\r
              <option [value]="10">10</option>\r
              <option [value]="25">25</option>\r
              <option [value]="50">50</option>\r
            </select>\r
            <span>par page</span>\r
          </div>\r
        </div>\r
      }\r
\r
      <!-- Formation completion chart -->\r
      @if (topFormations.length) {\r
        <div class="chart-card">\r
          <div class="chart-card__head">\r
            <h6 class="chart-card__title">Compl\xE9tion par formation</h6>\r
          </div>\r
          <div class="chart-bars">\r
            @for (f of topFormations; track f.id) {\r
              <div class="chart-row">\r
                <span class="chart-row__label" title="{{ f.titre }}">{{ f.titre }}</span>\r
                <div class="chart-row__track">\r
                  <div class="chart-row__fill" [style.width.%]="f.taux"></div>\r
                </div>\r
                <span class="chart-row__pct">{{ f.taux }}%</span>\r
                <span class="chart-row__count">{{ f.inscrits }} inscrits</span>\r
              </div>\r
            }\r
          </div>\r
        </div>\r
      }\r
    }\r
  </div>\r
\r
  <!-- RIGHT: Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  @if (!loading) {\r
    <aside class="pg-sidebar">\r
\r
      <!-- Alertes & actions -->\r
      <div class="sidebar-card">\r
        <div class="sidebar-card__head">\r
          <i class="isax isax-notification-bing"></i>\r
          <h6>Alertes & actions requises</h6>\r
        </div>\r
        @if (!alertes.length) {\r
          <p class="sidebar-card__empty">Aucune alerte active</p>\r
        }\r
        @for (a of alertes; track a.message) {\r
          <div class="alerte alerte--{{ a.type }}">\r
            <i class="isax {{ a.icon }}"></i>\r
            <span class="alerte__msg">{{ a.message }}</span>\r
            <span class="alerte__count">{{ a.count }}</span>\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- Derniers certificats -->\r
      <div class="sidebar-card">\r
        <div class="sidebar-card__head">\r
          <i class="isax isax-medal"></i>\r
          <h6>Derniers certificats d\xE9livr\xE9s</h6>\r
        </div>\r
        @if (!recentCerts.length) {\r
          <p class="sidebar-card__empty">Aucun certificat r\xE9cent</p>\r
        }\r
        @for (c of recentCerts; track c.id) {\r
          <div class="cert-item">\r
            <div class="cert-item__av">\r
              <i class="isax isax-award"></i>\r
            </div>\r
            <div class="cert-item__body">\r
              <span class="cert-item__nom">{{ c.user?.name || c.employe?.name || '\u2014' }}</span>\r
              <span class="cert-item__formation">{{ c.formation?.titre || c.titre || '\u2014' }}</span>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- R\xE9partition des statuts -->\r
      <div class="sidebar-card">\r
        <div class="sidebar-card__head">\r
          <i class="isax isax-chart-2"></i>\r
          <h6>R\xE9partition des statuts</h6>\r
        </div>\r
        <div class="distrib">\r
          @for (s of statutDistribution; track s.label) {\r
            <div class="distrib__row">\r
              <span class="distrib__label">{{ s.label }}</span>\r
              <div class="distrib__track">\r
                <div class="distrib__fill" [style.width.%]="s.pct" [style.background]="s.color"></div>\r
              </div>\r
              <span class="distrib__pct">{{ s.pct }}%</span>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
\r
    </aside>\r
  }\r
</div>\r
`, styles: ['/* src/app/features/adminrh/adminrh-assignment/adminrh-assignment.component.scss */\n.pg-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.pg-header__title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0;\n}\n.pg-header__sub {\n  font-size: 13px;\n  color: #64748B;\n  margin: 2px 0 0;\n}\n.pg-header__left {\n  display: flex;\n  flex-direction: column;\n}\n.pg-header__refresh {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #FFFFFF;\n  color: #64748B;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  transition: all 0.15s;\n}\n.pg-header__refresh:hover {\n  background: #E6F4F0;\n  color: #0F6E56;\n  border-color: #0F6E56;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1200px) {\n  .kpi-row {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.kpi-card {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.kpi-card__icon--green {\n  background: #E6F4F0;\n  color: #0F6E56;\n}\n.kpi-card__icon--blue {\n  background: #EFF6FF;\n  color: #3B82F6;\n}\n.kpi-card__icon--gold {\n  background: #FFFBEB;\n  color: #F59E0B;\n}\n.kpi-card__icon--red {\n  background: #FEF2F2;\n  color: #EF4444;\n}\n.kpi-card__icon--purple {\n  background: #F5F3FF;\n  color: #8B5CF6;\n}\n.kpi-card__body {\n  display: flex;\n  flex-direction: column;\n}\n.kpi-card__value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1E293B;\n  line-height: 1.1;\n}\n.kpi-card__label {\n  font-size: 12px;\n  color: #64748B;\n  margin-top: 2px;\n}\n.pg-layout {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 20px;\n  align-items: start;\n}\n@media (max-width: 1100px) {\n  .pg-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.pg-layout__main {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.pg-toolbar {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.pg-toolbar__search {\n  flex: 1;\n  min-width: 200px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 6px 12px;\n  color: #64748B;\n  font-size: 14px;\n}\n.pg-toolbar__search i {\n  font-size: 16px;\n}\n.pg-toolbar__search input {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 13px;\n  color: #1E293B;\n}\n.pg-toolbar__search input::placeholder {\n  color: #64748B;\n}\n.pg-toolbar__filters {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.pg-filter-btn {\n  padding: 5px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  border: 1px solid #E2E8F0;\n  border-radius: 20px;\n  background: #F8FAFC;\n  color: #64748B;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pg-filter-btn:hover {\n  border-color: #0F6E56;\n  color: #0F6E56;\n}\n.pg-filter-btn.active {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.pg-loading {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.pg-skeleton {\n  height: 52px;\n  border-radius: 8px;\n  background: #f0f0f0;\n  position: relative;\n  overflow: hidden;\n}\n.pg-skeleton::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.6) 50%,\n      transparent 100%);\n  animation: shimmer 1.4s infinite;\n}\n@keyframes shimmer {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n.emp-table-wrap {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.emp-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.emp-table thead tr {\n  background: #F8FAFC;\n}\n.emp-table thead tr th {\n  padding: 11px 16px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748B;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1px solid #E2E8F0;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.emp-table__empty {\n  padding: 48px;\n  text-align: center;\n  color: #64748B;\n  font-size: 14px;\n}\n.emp-table__empty i {\n  display: block;\n  font-size: 32px;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.emp-row {\n  border-bottom: 1px solid #E2E8F0;\n  transition: background 0.1s;\n}\n.emp-row:last-child {\n  border-bottom: none;\n}\n.emp-row:hover {\n  background: #F8FAFC;\n}\n.emp-row td {\n  padding: 13px 16px;\n  vertical-align: middle;\n  font-size: 13px;\n}\n.emp-row__name-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 180px;\n}\n.emp-row__count-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  white-space: nowrap;\n}\n.emp-row__progress-cell {\n  min-width: 180px;\n}\n.emp-av {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #E6F4F0;\n  color: #0F6E56;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.emp-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.emp-info__name {\n  font-weight: 600;\n  color: #1E293B;\n  font-size: 13px;\n}\n.emp-info__email {\n  font-size: 11px;\n  color: #64748B;\n}\n.emp-count {\n  font-weight: 700;\n  font-size: 14px;\n  color: #1E293B;\n}\n.emp-count__label {\n  font-size: 11px;\n  color: #64748B;\n}\n.emp-progress {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.emp-progress__bar {\n  flex: 1;\n  height: 7px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.emp-progress__fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.emp-progress__fill--high {\n  background: #0F6E56;\n}\n.emp-progress__fill--mid {\n  background: #F59E0B;\n}\n.emp-progress__fill--low {\n  background: #EF4444;\n}\n.emp-progress__pct {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1E293B;\n  white-space: nowrap;\n  width: 36px;\n  text-align: right;\n}\n.emp-score {\n  display: inline-block;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.emp-score--good {\n  background: #E6F4F0;\n  color: #0F6E56;\n}\n.emp-score--avg {\n  background: #FFFBEB;\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n}\n.emp-score--bad {\n  background: #FEF2F2;\n  color: #EF4444;\n}\n.emp-score--none {\n  background: #F8FAFC;\n  color: #64748B;\n}\n.emp-statut {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.emp-statut--actif {\n  background: #E6F4F0;\n  color: #0F6E56;\n}\n.emp-statut--certifie {\n  background: #EFF6FF;\n  color: #3B82F6;\n}\n.emp-statut--difficulte {\n  background: #FEF2F2;\n  color: #EF4444;\n}\n.emp-statut--inactif {\n  background: #F8FAFC;\n  color: #64748B;\n  border: 1px solid #E2E8F0;\n}\n.pg-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 12px 16px;\n  border-top: 1px solid #E2E8F0;\n  background: #F8FAFC;\n  border-radius: 0 0 12px 12px;\n}\n.pg-pagination__info {\n  font-size: 12px;\n  color: #64748B;\n}\n.pg-pagination__controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pg-pagination__size {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #64748B;\n}\n.pg-pagination__size select {\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  padding: 3px 6px;\n  font-size: 12px;\n  background: #FFFFFF;\n  color: #1E293B;\n  cursor: pointer;\n  outline: none;\n}\n.pg-pg-btn {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 6px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #FFFFFF;\n  color: #64748B;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.pg-pg-btn:hover:not(:disabled) {\n  border-color: #0F6E56;\n  color: #0F6E56;\n  background: #E6F4F0;\n}\n.pg-pg-btn.active {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n  font-weight: 700;\n}\n.pg-pg-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pg-pg-ellipsis {\n  width: 32px;\n  text-align: center;\n  font-size: 13px;\n  color: #64748B;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.chart-card {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.chart-card__head {\n  margin-bottom: 16px;\n}\n.chart-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0;\n}\n.chart-bars {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.chart-row {\n  display: grid;\n  grid-template-columns: 180px 1fr 42px 80px;\n  align-items: center;\n  gap: 10px;\n}\n.chart-row__label {\n  font-size: 12px;\n  color: #1E293B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chart-row__track {\n  height: 9px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.chart-row__fill {\n  height: 100%;\n  background: #0F6E56;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.chart-row__pct {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1E293B;\n  text-align: right;\n}\n.chart-row__count {\n  font-size: 11px;\n  color: #64748B;\n  text-align: right;\n}\n.pg-sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.sidebar-card {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.sidebar-card__head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.sidebar-card__head i {\n  font-size: 16px;\n  color: #0F6E56;\n}\n.sidebar-card__head h6 {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0;\n}\n.sidebar-card__empty {\n  font-size: 12px;\n  color: #64748B;\n  text-align: center;\n  padding: 8px 0;\n}\n.alerte {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  margin-bottom: 6px;\n  font-size: 12px;\n}\n.alerte i {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.alerte__msg {\n  flex: 1;\n}\n.alerte__count {\n  font-weight: 700;\n  font-size: 13px;\n  min-width: 24px;\n  text-align: center;\n}\n.alerte--warning {\n  background: #FFFBEB;\n  color: rgb(196.9291338583, 126.7125984252, 8.0708661417);\n}\n.alerte--danger {\n  background: #FEF2F2;\n  color: #EF4444;\n}\n.alerte--info {\n  background: #EFF6FF;\n  color: #3B82F6;\n}\n.cert-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 0;\n  border-bottom: 1px solid #E2E8F0;\n}\n.cert-item:last-child {\n  border-bottom: none;\n}\n.cert-item__av {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #FFFBEB;\n  color: #F59E0B;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.cert-item__body {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  overflow: hidden;\n}\n.cert-item__nom {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1E293B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cert-item__formation {\n  font-size: 11px;\n  color: #64748B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.distrib {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.distrib__row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.distrib__label {\n  font-size: 12px;\n  color: #1E293B;\n  width: 90px;\n  flex-shrink: 0;\n}\n.distrib__track {\n  flex: 1;\n  height: 8px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.distrib__fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.distrib__pct {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748B;\n  width: 32px;\n  text-align: right;\n}\n/*# sourceMappingURL=adminrh-assignment.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhAssignmentComponent, { className: "AdminrhAssignmentComponent", filePath: "app/features/adminrh/adminrh-assignment/adminrh-assignment.component.ts", lineNumber: 34 });
})();
export {
  AdminrhAssignmentComponent
};
//# sourceMappingURL=chunk-M5AGCVAY.js.map
