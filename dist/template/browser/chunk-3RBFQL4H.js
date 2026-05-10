import {
  DemandeFormationService
} from "./chunk-6NF63Z7G.js";
import {
  CustomPaginationComponent
} from "./chunk-2EUN5DIU.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-LWTJDC5B.js";
import {
  PaginationService
} from "./chunk-JN46OEVN.js";
import {
  MatTableDataSource
} from "./chunk-USSDRVXR.js";
import "./chunk-4UI2RZNC.js";
import "./chunk-H6U5ZWSD.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-GUU2EPD7.js";
import "./chunk-TXJEXWQM.js";
import {
  AuthService
} from "./chunk-FLPD3SNY.js";
import "./chunk-FKX6UC3I.js";
import {
  routes
} from "./chunk-ZAFZNJD2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-YMJPU2MG.js";
import {
  Router,
  RouterLink
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-demande-session/adminrh-demande-session.component.ts
var _c0 = () => ({ standalone: true });
function AdminrhDemandeSessionComponent_div_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 35);
    \u0275\u0275text(4, "Refus\xE9es");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.demandesRefusees);
  }
}
function AdminrhDemandeSessionComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 35);
    \u0275\u0275text(5, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "div", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 35);
    \u0275\u0275text(10, "En attente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 33)(12, "div", 37);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "small", 35);
    \u0275\u0275text(15, "Valid\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, AdminrhDemandeSessionComponent_div_8_div_16_Template, 5, 1, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.totalDemandes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.demandesEnAttente);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.demandesValidees);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.demandesRefusees > 0);
  }
}
function AdminrhDemandeSessionComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function AdminrhDemandeSessionComponent_div_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearMessages());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.successMessage, " ");
  }
}
function AdminrhDemandeSessionComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function AdminrhDemandeSessionComponent_div_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearMessages());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.error, " ");
  }
}
function AdminrhDemandeSessionComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filter_r4 = ctx.$implicit;
    \u0275\u0275property("value", filter_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", filter_r4.label, " (", filter_r4.count, ") ");
  }
}
function AdminrhDemandeSessionComponent_small_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.tableData.length, " r\xE9sultat(s)");
  }
}
function AdminrhDemandeSessionComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 33)(2, "div", 47)(3, "span", 48);
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 49);
    \u0275\u0275text(6, "Chargement des demandes...");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhDemandeSessionComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 12);
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementStart(3, "h5", 52);
    \u0275\u0275text(4, "Aucune demande de session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 53);
    \u0275\u0275text(6, "Aucune demande de session n'a \xE9t\xE9 soumise pour le moment.");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_small_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2192 ", ctx_r0.formatDate(demande_r6.session_formation.date_fin));
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 35);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AdminrhDemandeSessionComponent_div_42_tr_52_small_8_span_2_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(demande_r6.session_formation.date_debut), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r6.session_formation.date_fin);
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "small", 35);
    \u0275\u0275element(2, "i", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const demande_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", demande_r6.session_formation == null ? null : demande_r6.session_formation.lieu, " ");
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "small", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const demande_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Valid\xE9 le ", ctx_r0.formatDate(demande_r6.date_validation));
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "small", 105);
    \u0275\u0275text(2, "RH:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 106);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const demande_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("title", demande_r6.commentaire_rh);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", demande_r6.commentaire_rh, " ");
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_button_46_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 110);
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_button_46_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 111);
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275listener("click", function AdminrhDemandeSessionComponent_div_42_tr_52_button_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const demande_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.validerDemande(demande_r6));
    });
    \u0275\u0275template(1, AdminrhDemandeSessionComponent_div_42_tr_52_button_46_span_1_Template, 1, 0, "span", 108)(2, AdminrhDemandeSessionComponent_div_42_tr_52_button_46_i_2_Template, 1, 0, "i", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r0.canValidate(demande_r6) || ctx_r0.validatingIds.has(demande_r6.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.validatingIds.has(demande_r6.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.validatingIds.has(demande_r6.id));
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_button_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 110);
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_button_47_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 114);
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function AdminrhDemandeSessionComponent_div_42_tr_52_button_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const demande_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.refuserDemande(demande_r6));
    });
    \u0275\u0275template(1, AdminrhDemandeSessionComponent_div_42_tr_52_button_47_span_1_Template, 1, 0, "span", 108)(2, AdminrhDemandeSessionComponent_div_42_tr_52_button_47_i_2_Template, 1, 0, "i", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r0.canRefuse(demande_r6) || ctx_r0.refusingIds.has(demande_r6.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.refusingIds.has(demande_r6.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.refusingIds.has(demande_r6.id));
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_button_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 115);
    \u0275\u0275listener("click", function AdminrhDemandeSessionComponent_div_42_tr_52_button_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const demande_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.annulerDemande(demande_r6));
    });
    \u0275\u0275element(1, "i", 114);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r0.canCancel(demande_r6));
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 83)(1, "td")(2, "div", 84)(3, "div", 85);
    \u0275\u0275element(4, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 87);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminrhDemandeSessionComponent_div_42_tr_52_small_8_Template, 3, 2, "small", 28)(9, AdminrhDemandeSessionComponent_div_42_tr_52_div_9_Template, 4, 1, "div", 88);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 89)(12, "div", 90)(13, "span", 91);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "div", 92);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "small", 35);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 93)(21, "small", 35);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "td")(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "div", 89);
    \u0275\u0275element(28, "i", 94);
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "td")(32, "div", 89);
    \u0275\u0275element(33, "i", 95);
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "td")(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, AdminrhDemandeSessionComponent_div_42_tr_52_div_39_Template, 3, 1, "div", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td")(41, "div", 96);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, AdminrhDemandeSessionComponent_div_42_tr_52_div_43_Template, 5, 2, "div", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td", 97)(45, "div", 98);
    \u0275\u0275template(46, AdminrhDemandeSessionComponent_div_42_tr_52_button_46_Template, 3, 3, "button", 99)(47, AdminrhDemandeSessionComponent_div_42_tr_52_button_47_Template, 3, 3, "button", 100)(48, AdminrhDemandeSessionComponent_div_42_tr_52_button_48_Template, 2, 1, "button", 101);
    \u0275\u0275elementStart(49, "button", 102);
    \u0275\u0275element(50, "i", 103);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const demande_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (demande_r6.session_formation == null ? null : demande_r6.session_formation.titre) || "Session #" + demande_r6.session_formation_id, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r6.session_formation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r6.session_formation == null ? null : demande_r6.session_formation.lieu);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", (demande_r6.employe == null ? null : demande_r6.employe.prenom == null ? null : demande_r6.employe.prenom.charAt(0)) || "", "", (demande_r6.employe == null ? null : demande_r6.employe.nom == null ? null : demande_r6.employe.nom.charAt(0)) || "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((demande_r6.employe == null ? null : demande_r6.employe.name) || "Employ\xE9 inconnu");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((demande_r6.employe == null ? null : demande_r6.employe.email) || "Email non renseign\xE9");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((demande_r6.employe == null ? null : demande_r6.employe.fonction) || "Fonction non d\xE9finie");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getPrioriteClass(demande_r6.priorite ?? void 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(demande_r6.priorite_display);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(demande_r6.created_at));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(demande_r6.date_souhaitee_debut ?? void 0));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatutClass(demande_r6.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(demande_r6.statut_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r6.date_validation);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", demande_r6.motif_demande);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", demande_r6.motif_demande || "Aucun motif", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r6.commentaire_rh);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.canValidate(demande_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canRefuse(demande_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canCancel(demande_r6));
  }
}
function AdminrhDemandeSessionComponent_div_42_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 116)(2, "div", 35);
    \u0275\u0275element(3, "i", 117);
    \u0275\u0275elementStart(4, "h6", 91);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 118);
    \u0275\u0275text(7, "Essayez avec d'autres termes de recherche.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 119);
    \u0275\u0275listener("click", function AdminrhDemandeSessionComponent_div_42_tr_53_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.searchDataValue = "";
      return \u0275\u0275resetView(ctx_r0.searchData(""));
    });
    \u0275\u0275element(9, "i", 120);
    \u0275\u0275text(10, "Effacer la recherche ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1('Aucun r\xE9sultat pour "', ctx_r0.searchDataValue, '"');
  }
}
function AdminrhDemandeSessionComponent_div_42_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275element(1, "app-custom-pagination");
    \u0275\u0275elementEnd();
  }
}
function AdminrhDemandeSessionComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "div", 56)(3, "h6", 57);
    \u0275\u0275element(4, "i", 58);
    \u0275\u0275text(5, "Demandes de Session ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "span", 59);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 60)(10, "button", 61);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 62)(13, "li")(14, "a", 63);
    \u0275\u0275listener("click", function AdminrhDemandeSessionComponent_div_42_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePageSize(5));
    });
    \u0275\u0275text(15, "5 par page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li")(17, "a", 63);
    \u0275\u0275listener("click", function AdminrhDemandeSessionComponent_div_42_Template_a_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePageSize(10));
    });
    \u0275\u0275text(18, "10 par page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li")(20, "a", 63);
    \u0275\u0275listener("click", function AdminrhDemandeSessionComponent_div_42_Template_a_click_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePageSize(25));
    });
    \u0275\u0275text(21, "25 par page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li")(23, "a", 63);
    \u0275\u0275listener("click", function AdminrhDemandeSessionComponent_div_42_Template_a_click_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePageSize(50));
    });
    \u0275\u0275text(24, "50 par page");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(25, "div", 64)(26, "table", 65);
    \u0275\u0275listener("matSortChange", function AdminrhDemandeSessionComponent_div_42_Template_table_matSortChange_26_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sortData($event));
    });
    \u0275\u0275elementStart(27, "thead", 66)(28, "tr")(29, "th", 67);
    \u0275\u0275element(30, "i", 68);
    \u0275\u0275text(31, "Session ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 69);
    \u0275\u0275element(33, "i", 70);
    \u0275\u0275text(34, "Employ\xE9 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 71);
    \u0275\u0275element(36, "i", 72);
    \u0275\u0275text(37, "Priorit\xE9 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 73);
    \u0275\u0275element(39, "i", 68);
    \u0275\u0275text(40, "Date demande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 74);
    \u0275\u0275element(42, "i", 75);
    \u0275\u0275text(43, "Date souhait\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 76);
    \u0275\u0275element(45, "i", 77);
    \u0275\u0275text(46, "Statut ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 78);
    \u0275\u0275text(48, "Motif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th", 79);
    \u0275\u0275text(50, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "tbody");
    \u0275\u0275template(52, AdminrhDemandeSessionComponent_div_42_tr_52_Template, 51, 23, "tr", 80)(53, AdminrhDemandeSessionComponent_div_42_tr_53_Template, 11, 1, "tr", 81);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(54, AdminrhDemandeSessionComponent_div_42_div_54_Template, 2, 0, "div", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.tableData.length, " affich\xE9e(s)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.pageSize, " par page");
    \u0275\u0275advance(41);
    \u0275\u0275property("ngForOf", ctx_r0.tableData)("ngForTrackBy", ctx_r0.trackByDemandeId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tableData.length === 0 && ctx_r0.searchDataValue && !ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasData);
  }
}
var AdminrhDemandeSessionComponent = class _AdminrhDemandeSessionComponent {
  router;
  pagination;
  demandeFormationService;
  authService;
  routes = routes;
  // Variables de pagination
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  allSessionDemandes = [];
  currentPage = 1;
  skip = 0;
  limit = this.pageSize;
  serialNumberArray = [];
  totalData = 0;
  pageSelection = [];
  dataSource;
  searchDataValue = "";
  // Variables de gestion d'état
  loading = false;
  error = "";
  successMessage = "";
  // Filtres
  selectedStatutFilter = "tous";
  selectedPrioriteFilter = "tous";
  // Données utilisateur connecté
  currentUser;
  // Statistiques
  stats = {};
  // Filtres de statut
  statutFilters = [
    { value: "tous", label: "Tous les statuts", count: 0, color: "secondary" },
    { value: "en_attente", label: "En attente", count: 0, color: "warning" },
    { value: "validee", label: "Valid\xE9es", count: 0, color: "success" },
    { value: "refusee", label: "Refus\xE9es", count: 0, color: "danger" },
    { value: "annulee", label: "Annul\xE9es", count: 0, color: "secondary" }
  ];
  // Actions en cours
  validatingIds = /* @__PURE__ */ new Set();
  refusingIds = /* @__PURE__ */ new Set();
  constructor(router, pagination, demandeFormationService, authService) {
    this.router = router;
    this.pagination = pagination;
    this.demandeFormationService = demandeFormationService;
    this.authService = authService;
    this.pagination.tablePageSize.subscribe((res) => {
      if (this.router.url === "/adminrh/adminrh-demande" || this.router.url.includes("adminrh-demande")) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
  ngOnInit() {
    this.initializeUser();
    this.loadDemandes();
  }
  // === INITIALISATION ===
  initializeUser() {
    this.currentUser = this.authService.getUser();
    if (!this.currentUser) {
      this.error = "Utilisateur non connect\xE9. Veuillez vous reconnecter.";
      console.error("\u274C Aucun utilisateur connect\xE9");
      return;
    }
    console.log("\u{1F464} Utilisateur connect\xE9:", this.currentUser);
  }
  loadDemandes() {
    if (!this.currentUser) {
      this.error = "Utilisateur non connect\xE9.";
      return;
    }
    this.loading = true;
    this.error = "";
    this.successMessage = "";
    console.log("\u{1F504} Chargement des demandes de session...");
    this.demandeFormationService.getDemandesFormation().subscribe({
      next: (response) => {
        console.log("\u{1F4E6} R\xE9ponse API demandes session:", response);
        try {
          const sessionDemandes = (response.demandes || []).filter((d) => d.type_demande === "session");
          this.stats = {
            total: sessionDemandes.length,
            en_attente: sessionDemandes.filter((d) => d.statut === "en_attente").length,
            validees: sessionDemandes.filter((d) => d.statut === "validee").length,
            refusees: sessionDemandes.filter((d) => d.statut === "refusee").length,
            annulees: sessionDemandes.filter((d) => d.statut === "annulee").length
          };
          this.updateStatutFilters();
          if (sessionDemandes.length === 0) {
            this.allSessionDemandes = [];
            this.actualData = [];
            this.totalData = 0;
            this.getTableData({ skip: 0, limit: this.pageSize });
            this.loading = false;
            this.error = "Aucune demande de session trouv\xE9e.";
            return;
          }
          this.allSessionDemandes = sessionDemandes;
          this.applyFilters();
          this.loading = false;
          console.log("\u2705 Demandes de session charg\xE9es:", this.allSessionDemandes.length);
        } catch (err) {
          console.error("\u274C Erreur lors du traitement des donn\xE9es:", err);
          this.handleLoadError(new Error("Erreur lors du traitement des donn\xE9es"));
        }
      },
      error: (error) => {
        console.error("\u274C Erreur lors du chargement des demandes:", error);
        this.handleLoadError(error);
      }
    });
  }
  updateStatutFilters() {
    const statsMap = {
      "tous": "total",
      "en_attente": "en_attente",
      "validee": "validees",
      "refusee": "refusees",
      "annulee": "annulees"
    };
    this.statutFilters.forEach((filter) => {
      filter.count = this.stats[statsMap[filter.value] ?? filter.value] || 0;
    });
  }
  handleLoadError(error) {
    this.error = this.getErrorMessage(error);
    this.loading = false;
    this.actualData = [];
    this.getTableData({ skip: 0, limit: this.pageSize });
  }
  getTableData(pageOption) {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.actualData.forEach((demande, index) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        this.tableData.push(demande);
        this.tableDataCopy.push(demande);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.dataSource = new MatTableDataSource(this.actualData);
    this.pagination.calculatePageSize.next({
      totalData: this.totalData,
      pageSize: this.pageSize,
      tableData: this.tableData,
      tableDataCopy: this.tableDataCopy,
      serialNumberArray: this.serialNumberArray
    });
    console.log("\u{1F4CA} Donn\xE9es du tableau mises \xE0 jour:", {
      totalData: this.totalData,
      tableData: this.tableData.length,
      pageSize: this.pageSize
    });
  }
  // === MÉTHODES DE FILTRAGE ===
  applyFilters() {
    let filteredData = [...this.allSessionDemandes];
    if (this.selectedStatutFilter !== "tous") {
      filteredData = filteredData.filter((demande) => demande.statut === this.selectedStatutFilter);
    }
    if (this.selectedPrioriteFilter !== "tous") {
      filteredData = filteredData.filter((demande) => demande.priorite === this.selectedPrioriteFilter);
    }
    if (this.searchDataValue.trim()) {
      const searchValue = this.searchDataValue.toLowerCase().trim();
      filteredData = filteredData.filter((demande) => this.matchesSearch(demande, searchValue));
    }
    this.actualData = filteredData;
    this.totalData = this.actualData.length;
    this.getTableData({ skip: 0, limit: this.pageSize });
  }
  onStatutFilterChange(statut) {
    this.selectedStatutFilter = statut;
    this.applyFilters();
  }
  onPrioriteFilterChange(priorite) {
    this.selectedPrioriteFilter = priorite;
    this.applyFilters();
  }
  // === MÉTHODES DE RECHERCHE ET TRI ===
  searchData(value) {
    this.searchDataValue = value;
    this.applyFilters();
    console.log(`\u{1F50D} Recherche "${value}": ${this.actualData.length} r\xE9sultats`);
  }
  matchesSearch(demande, searchValue) {
    const normalizeString = (str) => {
      return String(str || "").toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };
    const fields = [
      demande.session_formation?.titre,
      demande.employe?.name,
      demande.employe?.email,
      demande.motif_demande,
      demande.objectifs_personnels,
      demande.statut_display,
      demande.priorite_display
    ];
    const normalizedSearch = normalizeString(searchValue);
    return fields.some((field) => normalizeString(field).includes(normalizedSearch));
  }
  sortData(sort) {
    const data = [...this.tableData];
    if (!sort.active || sort.direction === "") {
      this.tableData = data;
      return;
    }
    this.tableData = data.sort((a, b) => {
      const result = this.compareValues(a, b, sort.active);
      return sort.direction === "asc" ? result : -result;
    });
  }
  compareValues(a, b, sortField) {
    let aValue = "";
    let bValue = "";
    switch (sortField) {
      case "session":
        aValue = a.session_formation?.titre || "";
        bValue = b.session_formation?.titre || "";
        break;
      case "employe":
        aValue = a.employe?.name || "";
        bValue = b.employe?.name || "";
        break;
      case "statut":
        aValue = a.statut_display || "";
        bValue = b.statut_display || "";
        break;
      case "priorite":
        aValue = a.priorite_display || "";
        bValue = b.priorite_display || "";
        break;
      case "created_at":
        aValue = new Date(a.created_at || 0).getTime();
        bValue = new Date(b.created_at || 0).getTime();
        break;
      case "date_souhaitee_debut":
        aValue = new Date(a.date_souhaitee_debut || 0).getTime();
        bValue = new Date(b.date_souhaitee_debut || 0).getTime();
        break;
      default:
        aValue = String(a[sortField] || "");
        bValue = String(b[sortField] || "");
    }
    if (typeof aValue === "number" && typeof bValue === "number") {
      return aValue - bValue;
    }
    return String(aValue).localeCompare(String(bValue));
  }
  // === MÉTHODES D'ACTIONS ===
  refreshData() {
    console.log("\u{1F504} Actualisation des donn\xE9es...");
    this.searchDataValue = "";
    this.selectedStatutFilter = "tous";
    this.selectedPrioriteFilter = "tous";
    this.clearMessages();
    this.loadDemandes();
  }
  // Valider une demande
  validerDemande(demande, commentaire = "") {
    if (this.validatingIds.has(demande.id))
      return;
    const confirmMessage = `\xCAtes-vous s\xFBr de vouloir valider la demande de session "${demande.session_formation?.titre}" pour ${demande.employe?.name} ?`;
    if (confirm(confirmMessage)) {
      this.validatingIds.add(demande.id);
      this.clearMessages();
      const data = commentaire ? { commentaire_rh: commentaire } : {};
      this.demandeFormationService.validerDemande(demande.id, data).subscribe({
        next: () => {
          this.successMessage = `Demande de session valid\xE9e avec succ\xE8s.`;
          this.validatingIds.delete(demande.id);
          this.refreshData();
        },
        error: (error) => {
          console.error("\u274C Erreur lors de la validation:", error);
          this.error = "Erreur lors de la validation de la demande.";
          this.validatingIds.delete(demande.id);
        }
      });
    }
  }
  refuserDemande(demande) {
    if (this.refusingIds.has(demande.id))
      return;
    const motif = prompt(`Pourquoi refusez-vous la demande de session "${demande.session_formation?.titre}" pour ${demande.employe?.name} ?

Veuillez saisir un motif :`);
    if (motif === null)
      return;
    if (!motif.trim()) {
      this.error = "Un motif de refus est obligatoire.";
      return;
    }
    this.refusingIds.add(demande.id);
    this.clearMessages();
    this.demandeFormationService.refuserDemande(demande.id, { commentaire_rh: motif }).subscribe({
      next: () => {
        this.successMessage = `Demande de session refus\xE9e.`;
        this.refusingIds.delete(demande.id);
        this.refreshData();
      },
      error: (error) => {
        console.error("\u274C Erreur lors du refus:", error);
        this.error = "Erreur lors du refus de la demande.";
        this.refusingIds.delete(demande.id);
      }
    });
  }
  annulerDemande(demande) {
    const confirmMessage = `\xCAtes-vous s\xFBr de vouloir annuler la demande de session "${demande.session_formation?.titre}" pour ${demande.employe?.name} ?`;
    if (confirm(confirmMessage)) {
      this.clearMessages();
      this.demandeFormationService.annulerDemande(demande.id).subscribe({
        next: () => {
          this.successMessage = `Demande de session annul\xE9e.`;
          this.refreshData();
        },
        error: (error) => {
          console.error("\u274C Erreur lors de l'annulation:", error);
          this.error = "Erreur lors de l'annulation de la demande.";
        }
      });
    }
  }
  clearMessages() {
    this.error = "";
    this.successMessage = "";
  }
  // === MÉTHODES UTILITAIRES ===
  getStatutClass(statut) {
    const statutMap = {
      "en_attente": "badge bg-warning",
      "validee": "badge bg-success",
      "refusee": "badge bg-danger",
      "annulee": "badge bg-secondary"
    };
    return statutMap[statut] || "badge bg-secondary";
  }
  // ============================================================
  // REMPLACE ces 3 méthodes dans adminrh-demande.component.ts
  // ============================================================
  // ✅ Corrigé : priorite peut être undefined
  getPrioriteClass(priorite) {
    const prioriteMap = {
      "basse": "badge bg-light text-dark",
      "normale": "badge bg-info",
      "haute": "badge bg-warning",
      "urgente": "badge bg-danger"
    };
    return prioriteMap[priorite ?? ""] || "badge bg-secondary";
  }
  // ✅ Corrigé : date peut être string | null | undefined
  formatDate(date) {
    if (!date)
      return "Non sp\xE9cifi\xE9";
    try {
      return new Date(date).toLocaleDateString("fr-FR");
    } catch {
      return "Date invalide";
    }
  }
  // ✅ Corrigé : date peut être string | null | undefined
  formatDateTime(date) {
    if (!date)
      return "Non sp\xE9cifi\xE9";
    try {
      return new Date(date).toLocaleString("fr-FR");
    } catch {
      return "Date invalide";
    }
  }
  canValidate(demande) {
    return demande.statut === "en_attente" && !this.validatingIds.has(demande.id);
  }
  canRefuse(demande) {
    return demande.statut === "en_attente" && !this.refusingIds.has(demande.id);
  }
  canCancel(demande) {
    return ["en_attente", "validee"].includes(demande.statut);
  }
  trackByDemandeId(index, demande) {
    return demande.id;
  }
  changePageSize(pageSize) {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pageSize = pageSize;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
  }
  getErrorMessage(error) {
    const errorMap = {
      403: "Vous n'avez pas les droits pour acc\xE9der aux demandes de formation.",
      401: "Session expir\xE9e. Veuillez vous reconnecter.",
      500: "Erreur serveur. Veuillez r\xE9essayer plus tard.",
      404: "Aucune demande trouv\xE9e."
    };
    if (error?.status && errorMap[error.status]) {
      return errorMap[error.status];
    }
    if (!navigator.onLine) {
      return "Pas de connexion internet.";
    }
    return "Erreur lors du chargement des donn\xE9es.";
  }
  // === GETTERS POUR LES STATISTIQUES ===
  get totalDemandes() {
    return this.stats.total || 0;
  }
  get demandesEnAttente() {
    return this.stats.en_attente || 0;
  }
  get demandesValidees() {
    return this.stats.validees || 0;
  }
  get demandesRefusees() {
    return this.stats.refusees || 0;
  }
  get hasData() {
    return this.actualData.length > 0;
  }
  get showEmptyState() {
    return !this.loading && !this.hasData && !this.error;
  }
  static \u0275fac = function AdminrhDemandeSessionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhDemandeSessionComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(DemandeFormationService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhDemandeSessionComponent, selectors: [["app-adminrh-demande-session"]], decls: 43, vars: 19, consts: [[1, "page-content"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-1"], [1, "text-muted", "mb-0"], [1, "d-flex", "align-items-center", "gap-2"], ["class", "d-flex align-items-center gap-3 me-3", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "isax", "isax-refresh"], [1, "ms-1", "d-none", "d-sm-inline"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "g-3"], [1, "col-lg-4"], [1, "input-group"], [1, "input-group-text"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher session, employ\xE9...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], [1, "col-lg-3"], [1, "form-select", 3, "ngModelChange", "ngModel", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "tous"], ["value", "basse"], ["value", "normale"], ["value", "haute"], ["value", "urgente"], [1, "col-lg-2", "text-end"], ["class", "text-muted", 4, "ngIf"], ["class", "d-flex justify-content-center p-5", 4, "ngIf"], ["class", "card text-center py-5", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-3", "me-3"], [1, "text-center"], [1, "fw-bold", "text-primary", "fs-5"], [1, "text-muted"], [1, "fw-bold", "text-warning", "fs-5"], [1, "fw-bold", "text-success", "fs-5"], ["class", "text-center", 4, "ngIf"], [1, "fw-bold", "text-danger", "fs-5"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "isax", "isax-tick-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-warning-2", "me-2"], [3, "value"], [1, "d-flex", "justify-content-center", "p-5"], ["role", "status", 1, "spinner-border", "text-primary", "mb-3", 2, "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [1, "text-muted", "fs-6"], [1, "card", "text-center", "py-5"], [1, "isax", "isax-document", "display-1", "text-muted", "mb-4", "d-block"], [1, "fw-bold", "mb-3"], [1, "text-muted", "mb-4"], [1, "card"], [1, "card-header", "bg-white", "border-bottom"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "fw-bold"], [1, "isax", "isax-document", "me-2", "text-primary"], [1, "badge", "bg-light", "text-dark"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-outline-secondary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-hover", "mb-0", 3, "matSortChange"], [1, "table-light"], ["mat-sort-header", "session", 1, "fw-semibold"], [1, "isax", "isax-calendar", "me-1"], ["mat-sort-header", "employe", 1, "fw-semibold"], [1, "isax", "isax-profile-2user", "me-1"], ["mat-sort-header", "priorite", 1, "fw-semibold"], [1, "isax", "isax-flag", "me-1"], ["mat-sort-header", "created_at", 1, "fw-semibold"], ["mat-sort-header", "date_souhaitee_debut", 1, "fw-semibold"], [1, "isax", "isax-clock", "me-1"], ["mat-sort-header", "statut", 1, "fw-semibold"], [1, "isax", "isax-status", "me-1"], [1, "fw-semibold"], [1, "text-end", "fw-semibold"], ["class", "align-middle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["class", "card-footer bg-white border-top", 4, "ngIf"], [1, "align-middle"], [1, "d-flex", "align-items-start"], [1, "avatar", "avatar-md", "bg-primary", "text-white", "rounded", "me-3", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-calendar-1"], [1, "fw-semibold", "text-dark", "mb-1"], ["class", "mt-1", 4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-md", "bg-info", "text-white", "rounded", "me-3", "d-flex", "align-items-center", "justify-content-center"], [1, "fw-bold"], [1, "fw-medium", "text-dark"], [1, "mt-1"], [1, "isax", "isax-calendar", "text-muted", "me-2"], [1, "isax", "isax-clock", "text-muted", "me-2"], [1, "text-truncate", 2, "max-width", "200px", 3, "title"], [1, "text-end"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["class", "btn btn-outline-success", "title", "Valider la demande", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-outline-danger", "title", "Refuser la demande", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-outline-warning", "title", "Annuler la demande", 3, "disabled", "click", 4, "ngIf"], ["title", "Voir les d\xE9tails", 1, "btn", "btn-outline-info"], [1, "isax", "isax-eye"], [1, "isax", "isax-location", "me-1"], [1, "text-muted", "fw-medium"], [1, "text-muted", "d-block", "text-truncate", 2, "max-width", "200px", 3, "title"], ["title", "Valider la demande", 1, "btn", "btn-outline-success", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "isax isax-tick-circle", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "isax", "isax-tick-circle"], ["title", "Refuser la demande", 1, "btn", "btn-outline-danger", 3, "click", "disabled"], ["class", "isax isax-close-circle", 4, "ngIf"], [1, "isax", "isax-close-circle"], ["title", "Annuler la demande", 1, "btn", "btn-outline-warning", 3, "click", "disabled"], ["colspan", "8", 1, "text-center", "py-5"], [1, "isax", "isax-search-normal-1", "display-6", "mb-3", "d-block", "opacity-50"], [1, "mb-0", "small"], [1, "btn", "btn-sm", "btn-outline-primary", "mt-2", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [1, "card-footer", "bg-white", "border-top"]], template: function AdminrhDemandeSessionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h4", 2);
      \u0275\u0275text(4, "Gestion des Demandes de Session");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Validez ou refusez les demandes de session de vos employ\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275template(8, AdminrhDemandeSessionComponent_div_8_Template, 17, 4, "div", 5);
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function AdminrhDemandeSessionComponent_Template_button_click_9_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12, "Actualiser");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(13, AdminrhDemandeSessionComponent_div_13_Template, 4, 1, "div", 9)(14, AdminrhDemandeSessionComponent_div_14_Template, 4, 1, "div", 10);
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "span", 16);
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhDemandeSessionComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhDemandeSessionComponent_Template_input_ngModelChange_22_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 19)(24, "select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhDemandeSessionComponent_Template_select_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatutFilter, $event) || (ctx.selectedStatutFilter = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhDemandeSessionComponent_Template_select_ngModelChange_24_listener($event) {
        return ctx.onStatutFilterChange($event);
      });
      \u0275\u0275template(25, AdminrhDemandeSessionComponent_option_25_Template, 2, 3, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 19)(27, "select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhDemandeSessionComponent_Template_select_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedPrioriteFilter, $event) || (ctx.selectedPrioriteFilter = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhDemandeSessionComponent_Template_select_ngModelChange_27_listener($event) {
        return ctx.onPrioriteFilterChange($event);
      });
      \u0275\u0275elementStart(28, "option", 22);
      \u0275\u0275text(29, "Toutes les priorit\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 23);
      \u0275\u0275text(31, "Basse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 24);
      \u0275\u0275text(33, "Normale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 25);
      \u0275\u0275text(35, "Haute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "option", 26);
      \u0275\u0275text(37, "Urgente");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 27);
      \u0275\u0275template(39, AdminrhDemandeSessionComponent_small_39_Template, 2, 1, "small", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(40, AdminrhDemandeSessionComponent_div_40_Template, 7, 0, "div", 29)(41, AdminrhDemandeSessionComponent_div_41_Template, 7, 0, "div", 30)(42, AdminrhDemandeSessionComponent_div_42_Template, 55, 6, "div", 31);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.hasData);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275classProp("fa-spin", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(18, _c0))("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatutFilter);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.statutFilters);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedPrioriteFilter);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.hasData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEmptyState);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasData && !ctx.loading);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, CommonModule, NgForOf, NgIf, MatSortModule, MatSort, MatSortHeader, CustomPaginationComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhDemandeSessionComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-demande-session", standalone: true, imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent], template: `<div class="page-content">\r
  <div class="page-title d-flex align-items-center justify-content-between mb-4">\r
    <div>\r
      <h4 class="fw-bold mb-1">Gestion des Demandes de Session</h4>\r
      <p class="text-muted mb-0">Validez ou refusez les demandes de session de vos employ\xE9s</p>\r
    </div>\r
    <div class="d-flex align-items-center gap-2">\r
      <div class="d-flex align-items-center gap-3 me-3" *ngIf="hasData">\r
        <div class="text-center">\r
          <div class="fw-bold text-primary fs-5">{{ totalDemandes }}</div>\r
          <small class="text-muted">Total</small>\r
        </div>\r
        <div class="text-center">\r
          <div class="fw-bold text-warning fs-5">{{ demandesEnAttente }}</div>\r
          <small class="text-muted">En attente</small>\r
        </div>\r
        <div class="text-center">\r
          <div class="fw-bold text-success fs-5">{{ demandesValidees }}</div>\r
          <small class="text-muted">Valid\xE9es</small>\r
        </div>\r
        <div class="text-center" *ngIf="demandesRefusees > 0">\r
          <div class="fw-bold text-danger fs-5">{{ demandesRefusees }}</div>\r
          <small class="text-muted">Refus\xE9es</small>\r
        </div>\r
      </div>\r
      <button class="btn btn-outline-primary" (click)="refreshData()" [disabled]="loading">\r
        <i class="isax isax-refresh" [class.fa-spin]="loading"></i>\r
        <span class="ms-1 d-none d-sm-inline">Actualiser</span>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="alert alert-success alert-dismissible fade show" *ngIf="successMessage" role="alert">\r
    <i class="isax isax-tick-circle me-2"></i>{{ successMessage }}\r
    <button type="button" class="btn-close" (click)="clearMessages()"></button>\r
  </div>\r
  <div class="alert alert-danger alert-dismissible fade show" *ngIf="error" role="alert">\r
    <i class="isax isax-warning-2 me-2"></i>{{ error }}\r
    <button type="button" class="btn-close" (click)="clearMessages()"></button>\r
  </div>\r
\r
  <!-- Filtres -->\r
  <div class="card mb-4">\r
    <div class="card-body">\r
      <div class="row g-3">\r
        <div class="col-lg-4">\r
          <div class="input-group">\r
            <span class="input-group-text"><i class="isax isax-search-normal-1"></i></span>\r
            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search"\r
                   (ngModelChange)="searchData(searchDataValue)" class="form-control"\r
                   placeholder="Rechercher session, employ\xE9..." [disabled]="loading">\r
          </div>\r
        </div>\r
        <div class="col-lg-3">\r
          <select class="form-select" [(ngModel)]="selectedStatutFilter"\r
                  (ngModelChange)="onStatutFilterChange($event)" [disabled]="loading">\r
            <option *ngFor="let filter of statutFilters" [value]="filter.value">\r
              {{ filter.label }} ({{ filter.count }})\r
            </option>\r
          </select>\r
        </div>\r
        <div class="col-lg-3">\r
          <select class="form-select" [(ngModel)]="selectedPrioriteFilter"\r
                  (ngModelChange)="onPrioriteFilterChange($event)" [disabled]="loading">\r
            <option value="tous">Toutes les priorit\xE9s</option>\r
            <option value="basse">Basse</option>\r
            <option value="normale">Normale</option>\r
            <option value="haute">Haute</option>\r
            <option value="urgente">Urgente</option>\r
          </select>\r
        </div>\r
        <div class="col-lg-2 text-end">\r
          <small class="text-muted" *ngIf="hasData">{{ tableData.length }} r\xE9sultat(s)</small>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Chargement -->\r
  <div class="d-flex justify-content-center p-5" *ngIf="loading">\r
    <div class="text-center">\r
      <div class="spinner-border text-primary mb-3" role="status" style="width: 3rem; height: 3rem;">\r
        <span class="visually-hidden">Chargement...</span>\r
      </div>\r
      <p class="text-muted fs-6">Chargement des demandes...</p>\r
    </div>\r
  </div>\r
\r
  <!-- \xC9tat vide -->\r
  <div class="card text-center py-5" *ngIf="showEmptyState">\r
    <div class="card-body">\r
      <i class="isax isax-document display-1 text-muted mb-4 d-block"></i>\r
      <h5 class="fw-bold mb-3">Aucune demande de session</h5>\r
      <p class="text-muted mb-4">Aucune demande de session n'a \xE9t\xE9 soumise pour le moment.</p>\r
    </div>\r
  </div>\r
\r
  <!-- Tableau -->\r
  <div class="card" *ngIf="hasData && !loading">\r
    <div class="card-header bg-white border-bottom">\r
      <div class="d-flex align-items-center justify-content-between">\r
        <h6 class="mb-0 fw-bold">\r
          <i class="isax isax-document me-2 text-primary"></i>Demandes de Session\r
        </h6>\r
        <div class="d-flex align-items-center gap-2">\r
          <span class="badge bg-light text-dark">{{ tableData.length }} affich\xE9e(s)</span>\r
          <div class="dropdown">\r
            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button"\r
                    data-bs-toggle="dropdown">{{ pageSize }} par page</button>\r
            <ul class="dropdown-menu">\r
              <li><a class="dropdown-item" href="javascript:void(0)" (click)="changePageSize(5)">5 par page</a></li>\r
              <li><a class="dropdown-item" href="javascript:void(0)" (click)="changePageSize(10)">10 par page</a></li>\r
              <li><a class="dropdown-item" href="javascript:void(0)" (click)="changePageSize(25)">25 par page</a></li>\r
              <li><a class="dropdown-item" href="javascript:void(0)" (click)="changePageSize(50)">50 par page</a></li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="table-responsive">\r
      <table matSort (matSortChange)="sortData($event)" class="table table-hover mb-0">\r
        <thead class="table-light">\r
        <tr>\r
          <th mat-sort-header="session" class="fw-semibold">\r
            <i class="isax isax-calendar me-1"></i>Session\r
          </th>\r
          <th mat-sort-header="employe" class="fw-semibold">\r
            <i class="isax isax-profile-2user me-1"></i>Employ\xE9\r
          </th>\r
          <th mat-sort-header="priorite" class="fw-semibold">\r
            <i class="isax isax-flag me-1"></i>Priorit\xE9\r
          </th>\r
          <th mat-sort-header="created_at" class="fw-semibold">\r
            <i class="isax isax-calendar me-1"></i>Date demande\r
          </th>\r
          <th mat-sort-header="date_souhaitee_debut" class="fw-semibold">\r
            <i class="isax isax-clock me-1"></i>Date souhait\xE9e\r
          </th>\r
          <th mat-sort-header="statut" class="fw-semibold">\r
            <i class="isax isax-status me-1"></i>Statut\r
          </th>\r
          <th class="fw-semibold">Motif</th>\r
          <th class="text-end fw-semibold">Actions</th>\r
        </tr>\r
        </thead>\r
        <tbody>\r
        <tr *ngFor="let demande of tableData; trackBy: trackByDemandeId" class="align-middle">\r
\r
          <!-- Session -->\r
          <td>\r
            <div class="d-flex align-items-start">\r
              <div class="avatar avatar-md bg-primary text-white rounded me-3 d-flex align-items-center justify-content-center">\r
                <i class="isax isax-calendar-1"></i>\r
              </div>\r
              <div>\r
                <div class="fw-semibold text-dark mb-1">\r
                  {{ demande.session_formation?.titre || ('Session #' + demande.session_formation_id) }}\r
                </div>\r
                <small class="text-muted" *ngIf="demande.session_formation">\r
                  {{ formatDate(demande.session_formation.date_debut) }}\r
                  <span *ngIf="demande.session_formation.date_fin"> \u2192 {{ formatDate(demande.session_formation.date_fin) }}</span>\r
                </small>\r
                <div class="mt-1" *ngIf="demande.session_formation?.lieu">\r
                  <small class="text-muted">\r
                    <i class="isax isax-location me-1"></i>{{ demande.session_formation?.lieu }}\r
                  </small>\r
                </div>\r
              </div>\r
            </div>\r
          </td>\r
\r
          <!-- Employ\xE9 -->\r
          <td>\r
            <div class="d-flex align-items-center">\r
              <div class="avatar avatar-md bg-info text-white rounded me-3 d-flex align-items-center justify-content-center">\r
                <span class="fw-bold">{{ demande.employe?.prenom?.charAt(0) || '' }}{{ demande.employe?.nom?.charAt(0) || '' }}</span>\r
              </div>\r
              <div>\r
                <div class="fw-medium text-dark">{{ demande.employe?.name || 'Employ\xE9 inconnu' }}</div>\r
                <small class="text-muted">{{ demande.employe?.email || 'Email non renseign\xE9' }}</small>\r
                <div class="mt-1">\r
                  <small class="text-muted">{{ demande.employe?.fonction || 'Fonction non d\xE9finie' }}</small>\r
                </div>\r
              </div>\r
            </div>\r
          </td>\r
\r
          <!-- Priorit\xE9 -->\r
          <td>\r
            <span [class]="getPrioriteClass(demande.priorite ?? undefined)">{{ demande.priorite_display }}</span>\r
          </td>\r
\r
          <!-- Date demande -->\r
          <td>\r
            <div class="d-flex align-items-center">\r
              <i class="isax isax-calendar text-muted me-2"></i>\r
              <span>{{ formatDate(demande.created_at) }}</span>\r
            </div>\r
          </td>\r
\r
          <!-- Date souhait\xE9e -->\r
          <td>\r
            <div class="d-flex align-items-center">\r
              <i class="isax isax-clock text-muted me-2"></i>\r
              <span>{{ formatDate(demande.date_souhaitee_debut ?? undefined) }}</span>\r
            </div>\r
          </td>\r
\r
          <!-- Statut -->\r
          <td>\r
            <span [class]="getStatutClass(demande.statut)">{{ demande.statut_display }}</span>\r
            <div *ngIf="demande.date_validation" class="mt-1">\r
              <small class="text-muted">Valid\xE9 le {{ formatDate(demande.date_validation) }}</small>\r
            </div>\r
          </td>\r
\r
          <!-- Motif -->\r
          <td>\r
            <div class="text-truncate" style="max-width: 200px;" [title]="demande.motif_demande">\r
              {{ demande.motif_demande || 'Aucun motif' }}\r
            </div>\r
            <div *ngIf="demande.commentaire_rh" class="mt-1">\r
              <small class="text-muted fw-medium">RH:</small>\r
              <small class="text-muted d-block text-truncate" style="max-width: 200px;" [title]="demande.commentaire_rh">\r
                {{ demande.commentaire_rh }}\r
              </small>\r
            </div>\r
          </td>\r
\r
          <!-- Actions -->\r
          <td class="text-end">\r
            <div class="btn-group btn-group-sm" role="group">\r
              <button class="btn btn-outline-success" (click)="validerDemande(demande)"\r
                      [disabled]="!canValidate(demande) || validatingIds.has(demande.id)"\r
                      *ngIf="canValidate(demande)" title="Valider la demande">\r
                <span *ngIf="validatingIds.has(demande.id)" class="spinner-border spinner-border-sm me-1"></span>\r
                <i class="isax isax-tick-circle" *ngIf="!validatingIds.has(demande.id)"></i>\r
              </button>\r
              <button class="btn btn-outline-danger" (click)="refuserDemande(demande)"\r
                      [disabled]="!canRefuse(demande) || refusingIds.has(demande.id)"\r
                      *ngIf="canRefuse(demande)" title="Refuser la demande">\r
                <span *ngIf="refusingIds.has(demande.id)" class="spinner-border spinner-border-sm me-1"></span>\r
                <i class="isax isax-close-circle" *ngIf="!refusingIds.has(demande.id)"></i>\r
              </button>\r
              <button class="btn btn-outline-warning" (click)="annulerDemande(demande)"\r
                      [disabled]="!canCancel(demande)" *ngIf="canCancel(demande)" title="Annuler la demande">\r
                <i class="isax isax-close-circle"></i>\r
              </button>\r
              <button class="btn btn-outline-info" title="Voir les d\xE9tails">\r
                <i class="isax isax-eye"></i>\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
\r
        <tr *ngIf="tableData.length === 0 && searchDataValue && !loading">\r
          <td colspan="8" class="text-center py-5">\r
            <div class="text-muted">\r
              <i class="isax isax-search-normal-1 display-6 mb-3 d-block opacity-50"></i>\r
              <h6 class="fw-bold">Aucun r\xE9sultat pour "{{ searchDataValue }}"</h6>\r
              <p class="mb-0 small">Essayez avec d'autres termes de recherche.</p>\r
              <button class="btn btn-sm btn-outline-primary mt-2" (click)="searchDataValue = ''; searchData('')">\r
                <i class="isax isax-refresh me-1"></i>Effacer la recherche\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="card-footer bg-white border-top" *ngIf="hasData">\r
      <app-custom-pagination></app-custom-pagination>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: Router }, { type: PaginationService }, { type: DemandeFormationService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhDemandeSessionComponent, { className: "AdminrhDemandeSessionComponent", filePath: "src/app/features/adminrh/adminrh-demande-session/adminrh-demande-session.component.ts", lineNumber: 29 });
})();
export {
  AdminrhDemandeSessionComponent
};
//# sourceMappingURL=chunk-3RBFQL4H.js.map
