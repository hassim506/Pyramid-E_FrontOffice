import {
  UserService
} from "./chunk-SXUTTUO5.js";
import {
  SessionFormationService
} from "./chunk-A6MOU7CO.js";
import {
  FormationService
} from "./chunk-SRQJ2PQ4.js";
import "./chunk-FKX6UC3I.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
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
} from "./chunk-AK2M3J6O.js";
import {
  RouterLink
} from "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
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

// src/app/features/adminrh/adminrh-session/adminrh-session.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => ({ n: 1, l: "Infos & modalit\xE9" });
var _c2 = () => ({ n: 2, l: "Date & horaire" });
var _c3 = () => ({ n: 3, l: "Participants" });
var _c4 = (a0, a1, a2) => [a0, a1, a2];
var _c5 = () => ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];
var _c6 = () => ({ standalone: true });
function AdminrhSessionComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 32);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_29_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearMessages());
    });
    \u0275\u0275element(4, "i", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function AdminrhSessionComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 32);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_30_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearMessages());
    });
    \u0275\u0275element(4, "i", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function AdminrhSessionComponent_div_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 37);
  }
}
function AdminrhSessionComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, AdminrhSessionComponent_div_56_div_1_Template, 1, 0, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function AdminrhSessionComponent_div_57_tr_19_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_57_tr_19_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const s_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelSession(s_r5));
    });
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_57_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 43)(1, "td")(2, "div", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "div", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 46);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 47);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 48)(20, "div", 49);
    \u0275\u0275element(21, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 51);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "td")(25, "div", 44);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "div", 52)(29, "button", 53);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_57_tr_19_Template_button_click_29_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openView(s_r5));
    });
    \u0275\u0275element(30, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 55);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_57_tr_19_Template_button_click_31_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(s_r5));
    });
    \u0275\u0275element(32, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, AdminrhSessionComponent_div_57_tr_19_button_33_Template, 2, 0, "button", 57);
    \u0275\u0275elementStart(34, "button", 58);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_57_tr_19_Template_button_click_34_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteSession(s_r5));
    });
    \u0275\u0275element(35, "i", 59);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r5.titre || (s_r5.formation == null ? null : s_r5.formation.titre) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.code_session);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(s_r5.date_debut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.formatTime(s_r5.date_debut), " \u2013 ", ctx_r1.formatTime(s_r5.date_fin));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-t", s_r5.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 16, s_r5.type_display || s_r5.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-s", ctx_r1.statutKey(s_r5.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statutLabel(s_r5.statut));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", (s_r5.nombre_inscrits || 0) / s_r5.capacite_max * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", s_r5.nombre_inscrits || 0, "/", s_r5.capacite_max);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((s_r5.formateur == null ? null : s_r5.formateur.name) || (s_r5.formateur == null ? null : s_r5.formateur.prenom) + " " + (s_r5.formateur == null ? null : s_r5.formateur.nom) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", s_r5.statut === "annulee" || s_r5.statut === "terminee");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r5.statut === "planifiee");
  }
}
function AdminrhSessionComponent_div_57_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 61);
    \u0275\u0275element(2, "i", 22);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune session trouv\xE9e");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhSessionComponent_div_57_div_21_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_57_div_21_button_3_Template_button_click_0_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.currentPage = i_r9 + 1);
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
function AdminrhSessionComponent_div_57_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "button", 63);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_57_div_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.currentPage = ctx_r1.currentPage - 1);
    });
    \u0275\u0275element(2, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminrhSessionComponent_div_57_div_21_button_3_Template, 2, 3, "button", 65);
    \u0275\u0275elementStart(4, "button", 63);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_57_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.currentPage = ctx_r1.currentPage + 1);
    });
    \u0275\u0275element(5, "i", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pagesArray);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function AdminrhSessionComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "table", 39)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Modalit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Places");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, AdminrhSessionComponent_div_57_tr_19_Template, 36, 18, "tr", 40)(20, AdminrhSessionComponent_div_57_tr_20_Template, 5, 0, "tr", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, AdminrhSessionComponent_div_57_div_21_Template, 6, 3, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.pagedSessions)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.sessions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
function AdminrhSessionComponent_div_58_ng_container_13_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 90);
  }
}
function AdminrhSessionComponent_div_58_ng_container_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const st_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(st_r11.n);
  }
}
function AdminrhSessionComponent_div_58_ng_container_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 91);
  }
}
function AdminrhSessionComponent_div_58_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 85)(2, "div", 86);
    \u0275\u0275template(3, AdminrhSessionComponent_div_58_ng_container_13_i_3_Template, 1, 0, "i", 87)(4, AdminrhSessionComponent_div_58_ng_container_13_span_4_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminrhSessionComponent_div_58_ng_container_13_div_7_Template, 1, 0, "div", 89);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const st_r11 = ctx.$implicit;
    const last_r12 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("done", ctx_r1.wizardStep > st_r11.n)("active", ctx_r1.wizardStep === st_r11.n);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep > st_r11.n);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep <= st_r11.n);
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r1.wizardStep > st_r11.n)("active", ctx_r1.wizardStep === st_r11.n);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(st_r11.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r12);
  }
}
function AdminrhSessionComponent_div_58_ng_container_15_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r13 = ctx.$implicit;
    \u0275\u0275property("value", f_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r13.titre);
  }
}
function AdminrhSessionComponent_div_58_ng_container_15_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r14 = ctx.$implicit;
    \u0275\u0275property("value", f_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r14.prenom ? f_r14.prenom + " " + f_r14.nom : f_r14.name, " ");
  }
}
function AdminrhSessionComponent_div_58_ng_container_15_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_ng_container_15_div_30_Template_div_click_0_listener() {
      const m_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setMode(m_r16.key));
    });
    \u0275\u0275elementStart(1, "div", 108);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 110);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("on", ctx_r1.wizardType === m_r16.key);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", m_r16.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r16.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r16.sub);
  }
}
function AdminrhSessionComponent_div_58_ng_container_15_div_31_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_58_ng_container_15_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "label", 93);
    \u0275\u0275text(2, "Salle / Lieu ");
    \u0275\u0275template(3, AdminrhSessionComponent_div_58_ng_container_15_div_31_span_3_Template, 2, 0, "span", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 112)(5, "div", 113);
    \u0275\u0275element(6, "i", 114)(7, "input", 115);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.wizardType === "presentiel");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
  }
}
function AdminrhSessionComponent_div_58_ng_container_15_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "label", 93);
    \u0275\u0275text(2, "Lien de connexion ");
    \u0275\u0275elementStart(3, "span", 94);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 112)(6, "div", 113);
    \u0275\u0275element(7, "i", 116)(8, "input", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 113);
    \u0275\u0275element(10, "i", 118)(11, "input", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 105);
    \u0275\u0275text(13, "Le lien sera envoy\xE9 automatiquement aux participants inscrits");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
  }
}
function AdminrhSessionComponent_div_58_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 92)(2, "label", 93);
    \u0275\u0275text(3, "Formation associ\xE9e ");
    \u0275\u0275elementStart(4, "span", 94);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "select", 95)(7, "option", 6);
    \u0275\u0275text(8, "S\xE9lectionner une formation...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminrhSessionComponent_div_58_ng_container_15_option_9_Template, 2, 2, "option", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 97)(11, "div", 98)(12, "label", 93);
    \u0275\u0275text(13, "Formateur ");
    \u0275\u0275elementStart(14, "span", 94);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "select", 99)(17, "option", 6);
    \u0275\u0275text(18, "S\xE9lectionner...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AdminrhSessionComponent_div_58_ng_container_15_option_19_Template, 2, 2, "option", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 98)(21, "label", 93);
    \u0275\u0275text(22, "Capacit\xE9 maximale");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 92)(25, "label", 93);
    \u0275\u0275text(26, "Modalit\xE9 ");
    \u0275\u0275elementStart(27, "span", 94);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 101);
    \u0275\u0275template(30, AdminrhSessionComponent_div_58_ng_container_15_div_30_Template, 7, 7, "div", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, AdminrhSessionComponent_div_58_ng_container_15_div_31_Template, 8, 2, "div", 103)(32, AdminrhSessionComponent_div_58_ng_container_15_div_32_Template, 14, 2, "div", 103);
    \u0275\u0275elementStart(33, "div", 92)(34, "label", 93);
    \u0275\u0275text(35, "Titre personnalis\xE9 de la session");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 104);
    \u0275\u0275elementStart(37, "span", 105);
    \u0275\u0275text(38, "Laissez vide pour utiliser le titre de la formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275attribute("disabled", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.formations);
    \u0275\u0275advance(7);
    \u0275\u0275attribute("disabled", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.formateurs);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.modes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardType !== "distanciel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardType !== "presentiel");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
  }
}
function AdminrhSessionComponent_div_58_ng_container_16_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r18);
  }
}
function AdminrhSessionComponent_div_58_ng_container_16_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_ng_container_16_div_18_Template_div_click_0_listener() {
      const cell_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!cell_r20.empty && ctx_r1.selectDate(cell_r20.date));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("sw-cal__day--empty", cell_r20.empty)("sw-cal__day--past", !cell_r20.empty && ctx_r1.isPast(cell_r20.date))("sw-cal__day--today", ctx_r1.isToday(cell_r20.date))("sw-cal__day--sel", ctx_r1.isSelected(cell_r20.date))("sw-cal__day--has", ctx_r1.hasSession(cell_r20.date) && !ctx_r1.isSelected(cell_r20.date));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r20.empty ? "" : cell_r20.date.getDate(), " ");
  }
}
function AdminrhSessionComponent_div_58_ng_container_16_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98)(2, "label", 93);
    \u0275\u0275text(3, "Rappel avant la session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 136);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_div_58_ng_container_16_div_43_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.rappel, $event) || (ctx_r1.rappel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 137);
    \u0275\u0275text(6, "24h avant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 138);
    \u0275\u0275text(8, "48h avant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 139);
    \u0275\u0275text(10, "1 semaine avant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 140);
    \u0275\u0275text(12, "Aucun rappel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 98)(14, "label", 93);
    \u0275\u0275text(15, "R\xE9currence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 136);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_div_58_ng_container_16_div_43_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.recurrence, $event) || (ctx_r1.recurrence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 140);
    \u0275\u0275text(18, "Pas de r\xE9currence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 141);
    \u0275\u0275text(20, "Hebdomadaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 142);
    \u0275\u0275text(22, "Bi-mensuelle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 143);
    \u0275\u0275text(24, "Mensuelle");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rappel);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c6));
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.recurrence);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c6));
  }
}
function AdminrhSessionComponent_div_58_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 92)(2, "label", 93);
    \u0275\u0275text(3, "Choisir la date ");
    \u0275\u0275elementStart(4, "span", 94);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 120)(7, "div", 121)(8, "span", 122);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 123)(12, "button", 124);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_ng_container_16_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calPrev());
    });
    \u0275\u0275element(13, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 124);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_ng_container_16_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calNext());
    });
    \u0275\u0275element(15, "i", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 125);
    \u0275\u0275template(17, AdminrhSessionComponent_div_58_ng_container_16_div_17_Template, 2, 1, "div", 126)(18, AdminrhSessionComponent_div_58_ng_container_16_div_18_Template, 2, 11, "div", 127);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 97)(20, "div", 98)(21, "label", 93);
    \u0275\u0275text(22, "Heure de d\xE9but ");
    \u0275\u0275elementStart(23, "span", 94);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 128);
    \u0275\u0275element(26, "i", 25);
    \u0275\u0275elementStart(27, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_div_58_ng_container_16_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.heureDebut, $event) || (ctx_r1.heureDebut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 98)(29, "label", 93);
    \u0275\u0275text(30, "Heure de fin ");
    \u0275\u0275elementStart(31, "span", 94);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 128);
    \u0275\u0275element(34, "i", 25);
    \u0275\u0275elementStart(35, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_div_58_ng_container_16_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.heureFin, $event) || (ctx_r1.heureFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 130);
    \u0275\u0275element(37, "i", 131);
    \u0275\u0275text(38, " Dur\xE9e : ");
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 132);
    \u0275\u0275text(42, "Fuseau : UTC+0 (Dakar)");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, AdminrhSessionComponent_div_58_ng_container_16_div_43_Template, 25, 6, "div", 133);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, ctx_r1.calMonthLabel));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(13, _c5));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.calendarDays);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.heureDebut);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c6));
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.heureFin);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c6));
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.durationLabel);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.wizardMode !== "view");
  }
}
function AdminrhSessionComponent_div_58_ng_container_17_div_24_i_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 26);
  }
}
function AdminrhSessionComponent_div_58_ng_container_17_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_ng_container_17_div_24_Template_div_click_0_listener() {
      const u_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleParticipant(u_r24));
    });
    \u0275\u0275elementStart(1, "div", 165);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 166)(4, "div", 167);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 168);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 169);
    \u0275\u0275template(9, AdminrhSessionComponent_div_58_ng_container_17_div_24_i_9_Template, 1, 0, "i", 170);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r24 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("sel", ctx_r1.isParticipantSelected(u_r24));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userInitials(u_r24));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r24.name || u_r24.prenom + " " + u_r24.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r24.fonction || u_r24.email || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.isParticipantSelected(u_r24));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isParticipantSelected(u_r24));
  }
}
function AdminrhSessionComponent_div_58_ng_container_17_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 171);
    \u0275\u0275text(1, "Aucun employ\xE9 trouv\xE9");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_58_ng_container_17_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172);
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardError, " ");
  }
}
function AdminrhSessionComponent_div_58_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 97)(2, "div", 98)(3, "label", 93);
    \u0275\u0275text(4, "Capacit\xE9 maximale");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 98)(7, "label", 93);
    \u0275\u0275text(8, "Taux de remplissage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 144)(10, "div", 145);
    \u0275\u0275element(11, "div", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 105);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 147)(15, "div", 148)(16, "span", 149);
    \u0275\u0275text(17, "Employ\xE9s disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 150);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 151);
    \u0275\u0275element(21, "i", 152);
    \u0275\u0275elementStart(22, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_div_58_ng_container_17_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.participantsSearch, $event) || (ctx_r1.participantsSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 154);
    \u0275\u0275template(24, AdminrhSessionComponent_div_58_ng_container_17_div_24_Template, 10, 8, "div", 155)(25, AdminrhSessionComponent_div_58_ng_container_17_div_25_Template, 2, 0, "div", 156);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 157)(27, "div", 158);
    \u0275\u0275text(28, "R\xE9capitulatif de la session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 159)(30, "span", 160);
    \u0275\u0275text(31, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 161);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 159)(35, "span", 160);
    \u0275\u0275text(36, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 161);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 159)(40, "span", 160);
    \u0275\u0275text(41, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 161);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 159)(45, "span", 160);
    \u0275\u0275text(46, "Horaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 161);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 159)(50, "span", 160);
    \u0275\u0275text(51, "Modalit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 161)(53, "span", 162);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 159)(57, "span", 160);
    \u0275\u0275text(58, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 161);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(61, AdminrhSessionComponent_div_58_ng_container_17_div_61_Template, 3, 1, "div", 163);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("readonly", ctx_r1.wizardMode === "view" ? "" : null);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", ctx_r1.fillPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedParticipants.length, "/", ctx_r1.step1Form.value.capacite_max || 20, " places");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedParticipants.length, " s\xE9lectionn\xE9s");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.participantsSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(21, _c6));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredUsers.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.recapFormation);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.recapFormateur);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.recapDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.recapHoraire);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("data-t", ctx_r1.wizardType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 19, ctx_r1.wizardType));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedParticipants.length, " / ", ctx_r1.step1Form.value.capacite_max || 20, " places");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardError);
  }
}
function AdminrhSessionComponent_div_58_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 173);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardPrev());
    });
    \u0275\u0275text(1, "Retour");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_58_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 173);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275text(1, "Annuler");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_58_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 174);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardNext());
    });
    \u0275\u0275text(1, " Suivant ");
    \u0275\u0275element(2, "i", 66);
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_58_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 175);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardSubmit());
    });
    \u0275\u0275element(1, "i", 176);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.wizardSaving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardSaving ? "Enregistrement..." : ctx_r1.wizardMode === "create" ? "Planifier la session" : "Sauvegarder", " ");
  }
}
function AdminrhSessionComponent_div_58_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 174);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275text(1, "Fermer");
    \u0275\u0275elementEnd();
  }
}
function AdminrhSessionComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 70)(3, "div", 71);
    \u0275\u0275element(4, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 73)(6, "div", 74);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 75);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 76);
    \u0275\u0275listener("click", function AdminrhSessionComponent_div_58_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275element(11, "i", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 77);
    \u0275\u0275template(13, AdminrhSessionComponent_div_58_ng_container_13_Template, 8, 12, "ng-container", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 79);
    \u0275\u0275template(15, AdminrhSessionComponent_div_58_ng_container_15_Template, 39, 9, "ng-container", 41)(16, AdminrhSessionComponent_div_58_ng_container_16_Template, 44, 16, "ng-container", 41)(17, AdminrhSessionComponent_div_58_ng_container_17_Template, 62, 22, "ng-container", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 80)(19, "span", 81);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AdminrhSessionComponent_div_58_button_21_Template, 2, 0, "button", 82)(22, AdminrhSessionComponent_div_58_button_22_Template, 2, 0, "button", 82)(23, AdminrhSessionComponent_div_58_button_23_Template, 3, 0, "button", 83)(24, AdminrhSessionComponent_div_58_button_24_Template, 3, 2, "button", 84)(25, AdminrhSessionComponent_div_58_button_25_Template, 2, 0, "button", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardMode === "create" ? "Planifier une session" : ctx_r1.wizardMode === "edit" ? "Modifier la session" : "D\xE9tails de la session", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.wizardMode === "view" ? "Consultation uniquement" : "Configurez la session en 3 \xE9tapes");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction3(16, _c4, \u0275\u0275pureFunction0(13, _c1), \u0275\u0275pureFunction0(14, _c2), \u0275\u0275pureFunction0(15, _c3)));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.step1Form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\xC9tape ", ctx_r1.wizardStep, " sur 3");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep < 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 3 && ctx_r1.wizardMode !== "view");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 3 && ctx_r1.wizardMode === "view");
  }
}
var AdminrhSessionComponent = class _AdminrhSessionComponent {
  sessionService;
  formationService;
  userService;
  fb;
  // ── List state ────────────────────────────────
  allSessions = [];
  sessions = [];
  loading = false;
  error = "";
  successMessage = "";
  searchValue = "";
  filterStatut = "";
  filterType = "";
  // Pagination
  currentPage = 1;
  pageSize = 10;
  get totalPages() {
    return Math.ceil(this.sessions.length / this.pageSize);
  }
  get pagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }
  get pagedSessions() {
    const s = (this.currentPage - 1) * this.pageSize;
    return this.sessions.slice(s, s + this.pageSize);
  }
  // ── Wizard state ──────────────────────────────
  wizardOpen = false;
  wizardMode = "create";
  wizardStep = 1;
  wizardSaving = false;
  wizardError = "";
  wizardSelected = null;
  // Step 1 form
  step1Form;
  wizardType = "presentiel";
  // Step 2 calendar
  calYear = (/* @__PURE__ */ new Date()).getFullYear();
  calMonth = (/* @__PURE__ */ new Date()).getMonth();
  calSelectedDate = null;
  heureDebut = "09:00";
  heureFin = "12:00";
  rappel = "48h";
  recurrence = "none";
  // Step 3 participants
  participantsSearch = "";
  selectedParticipants = [];
  allUsers = [];
  // Data lists
  formations = [];
  formateurs = [];
  modes = [
    { key: "presentiel", label: "Pr\xE9sentiel", sub: "En salle, lieu physique \xE0 pr\xE9ciser", icon: "isax-building" },
    { key: "distanciel", label: "Distanciel", sub: "Visioconf\xE9rence, lien \xE0 partager", icon: "isax-video" },
    { key: "hybride", label: "Hybride", sub: "Mix pr\xE9sentiel + distanciel", icon: "isax-monitor" }
  ];
  constructor(sessionService, formationService, userService, fb) {
    this.sessionService = sessionService;
    this.formationService = formationService;
    this.userService = userService;
    this.fb = fb;
  }
  ngOnInit() {
    this.loadSessions();
    this.loadFormations();
    this.loadFormateurs();
    this.loadUsers();
    this.initStep1Form();
  }
  // ── Data loading ──────────────────────────────
  loadSessions() {
    this.loading = true;
    this.sessionService.getAllSessionsRH().subscribe({
      next: (res) => {
        this.allSessions = res.sessions || [];
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.error = "Erreur chargement sessions";
        this.loading = false;
      }
    });
  }
  loadFormations() {
    this.formationService.getFormationsrh().subscribe({
      next: (res) => {
        this.formations = res.formations || [];
      },
      error: () => {
      }
    });
  }
  loadFormateurs() {
    this.userService.getFormateurs().subscribe({
      next: (res) => {
        const raw = res.formateurs || res.data || (Array.isArray(res) ? res : []);
        this.formateurs = Array.isArray(raw) ? raw : [];
      },
      error: () => {
        this.userService.getMyUsers().subscribe({
          next: (res2) => {
            const all = res2.users || res2.data || (Array.isArray(res2) ? res2 : []);
            this.formateurs = (Array.isArray(all) ? all : []).filter((u) => u.role?.name?.toLowerCase() === "formateur" || u.role_id === 3 || u.fonction?.toLowerCase().includes("formateur"));
          },
          error: () => {
          }
        });
      }
    });
  }
  loadUsers() {
    this.userService.getMyUsers().subscribe({
      next: (res) => {
        const raw = res.users || res.data || res;
        this.allUsers = Array.isArray(raw) ? raw : [];
      },
      error: () => {
      }
    });
  }
  // ── Filters ───────────────────────────────────
  applyFilters() {
    let d = [...this.allSessions];
    if (this.searchValue.trim()) {
      const q = this.searchValue.toLowerCase();
      d = d.filter((s) => s.titre?.toLowerCase().includes(q) || s.code_session?.toLowerCase().includes(q) || s.formation?.titre?.toLowerCase().includes(q));
    }
    if (this.filterStatut)
      d = d.filter((s) => s.statut === this.filterStatut);
    if (this.filterType)
      d = d.filter((s) => s.type === this.filterType);
    this.sessions = d;
    this.currentPage = 1;
  }
  // ── Wizard open/close ─────────────────────────
  openCreate() {
    this.wizardMode = "create";
    this.wizardSelected = null;
    this.wizardStep = 1;
    this.wizardError = "";
    this.wizardType = "presentiel";
    this.calSelectedDate = null;
    this.heureDebut = "09:00";
    this.heureFin = "12:00";
    this.selectedParticipants = [];
    this.initStep1Form();
    this.wizardOpen = true;
  }
  openEdit(s) {
    this.wizardMode = "edit";
    this.wizardSelected = s;
    this.wizardStep = 1;
    this.wizardError = "";
    this.wizardType = s.type || "presentiel";
    this.calSelectedDate = new Date(s.date_debut);
    this.calYear = this.calSelectedDate.getFullYear();
    this.calMonth = this.calSelectedDate.getMonth();
    this.heureDebut = new Date(s.date_debut).toTimeString().slice(0, 5);
    this.heureFin = new Date(s.date_fin).toTimeString().slice(0, 5);
    this.selectedParticipants = [];
    this.initStep1Form(s);
    this.wizardOpen = true;
  }
  openView(s) {
    this.wizardMode = "view";
    this.wizardSelected = s;
    this.wizardStep = 1;
    this.wizardError = "";
    this.wizardType = s.type || "presentiel";
    this.calSelectedDate = new Date(s.date_debut);
    this.calYear = this.calSelectedDate.getFullYear();
    this.calMonth = this.calSelectedDate.getMonth();
    this.heureDebut = new Date(s.date_debut).toTimeString().slice(0, 5);
    this.heureFin = new Date(s.date_fin).toTimeString().slice(0, 5);
    this.initStep1Form(s);
    this.wizardOpen = true;
  }
  closeWizard() {
    this.wizardOpen = false;
  }
  // ── Step 1 form ───────────────────────────────
  initStep1Form(s) {
    this.step1Form = this.fb.group({
      formation_id: [s?.formation_id || "", [Validators.required]],
      formateur_id: [s?.formateur_id || "", [Validators.required]],
      lieu: [s?.lieu || "", []],
      lien: [s?.instructions_acces || "", []],
      code_acces: ["", []],
      titre: [s?.titre || "", []],
      capacite_max: [s?.capacite_max || 20, [Validators.required, Validators.min(1)]]
    });
  }
  setMode(m) {
    if (this.wizardMode === "view")
      return;
    this.wizardType = m;
  }
  // ── Step 2 calendar ───────────────────────────
  get calMonthLabel() {
    return new Date(this.calYear, this.calMonth, 1).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  }
  get calendarDays() {
    const firstDay = new Date(this.calYear, this.calMonth, 1);
    const lastDay = new Date(this.calYear, this.calMonth + 1, 0);
    const offset = (firstDay.getDay() + 6) % 7;
    const days = [];
    for (let i = 0; i < offset; i++) {
      days.push({ date: new Date(this.calYear, this.calMonth, -offset + i + 1), empty: true });
    }
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push({ date: new Date(this.calYear, this.calMonth, d), empty: false });
    }
    return days;
  }
  calPrev() {
    if (this.calMonth === 0) {
      this.calMonth = 11;
      this.calYear--;
    } else
      this.calMonth--;
  }
  calNext() {
    if (this.calMonth === 11) {
      this.calMonth = 0;
      this.calYear++;
    } else
      this.calMonth++;
  }
  selectDate(d) {
    if (this.wizardMode === "view")
      return;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (d < today)
      return;
    this.calSelectedDate = d;
  }
  isToday(d) {
    const t = /* @__PURE__ */ new Date();
    return d.getDate() === t.getDate() && d.getMonth() === t.getMonth() && d.getFullYear() === t.getFullYear();
  }
  isPast(d) {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  }
  isSelected(d) {
    if (!this.calSelectedDate)
      return false;
    return d.getDate() === this.calSelectedDate.getDate() && d.getMonth() === this.calSelectedDate.getMonth() && d.getFullYear() === this.calSelectedDate.getFullYear();
  }
  hasSession(d) {
    return this.allSessions.some((s) => {
      const sd = new Date(s.date_debut);
      return sd.getDate() === d.getDate() && sd.getMonth() === d.getMonth() && sd.getFullYear() === d.getFullYear();
    });
  }
  get durationLabel() {
    const [sh, sm] = this.heureDebut.split(":").map(Number);
    const [eh, em] = this.heureFin.split(":").map(Number);
    const mins = eh * 60 + em - (sh * 60 + sm);
    if (mins <= 0)
      return "\u2014";
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h + "h" + (m ? String(m).padStart(2, "0") : "00");
  }
  // ── Step 3 participants ───────────────────────
  get filteredUsers() {
    const q = this.participantsSearch.toLowerCase();
    return this.allUsers.filter((u) => !q || u.name?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q));
  }
  isParticipantSelected(u) {
    return this.selectedParticipants.some((p) => p.id === u.id);
  }
  toggleParticipant(u) {
    if (this.wizardMode === "view")
      return;
    const cap = this.step1Form.value.capacite_max || 20;
    const idx = this.selectedParticipants.findIndex((p) => p.id === u.id);
    if (idx > -1) {
      this.selectedParticipants.splice(idx, 1);
    } else if (this.selectedParticipants.length < cap) {
      this.selectedParticipants.push(u);
    }
  }
  get fillPercent() {
    const cap = this.step1Form.value.capacite_max || 20;
    return Math.round(this.selectedParticipants.length / cap * 100);
  }
  userInitials(u) {
    const n = (u.name || u.prenom + " " + u.nom || "?").trim();
    return n.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  }
  // ── Navigation ────────────────────────────────
  wizardNext() {
    if (this.wizardStep === 1) {
      if (this.step1Form.get("formation_id")?.invalid || this.step1Form.get("formateur_id")?.invalid) {
        this.step1Form.markAllAsTouched();
        return;
      }
    }
    if (this.wizardStep === 2 && !this.calSelectedDate) {
      this.wizardError = "Veuillez s\xE9lectionner une date.";
      return;
    }
    this.wizardError = "";
    this.wizardStep++;
  }
  wizardPrev() {
    this.wizardStep--;
    this.wizardError = "";
  }
  // ── Recap helpers ─────────────────────────────
  get recapFormation() {
    const f = this.formations.find((x) => x.id == this.step1Form.value.formation_id);
    return f?.titre || "\u2014";
  }
  get recapFormateur() {
    const f = this.formateurs.find((x) => x.id == this.step1Form.value.formateur_id);
    return f ? f.prenom ? f.prenom + " " + f.nom : f.name : "\u2014";
  }
  get recapDate() {
    if (!this.calSelectedDate)
      return "\u2014";
    return this.calSelectedDate.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  }
  get recapHoraire() {
    return `${this.heureDebut} \u2013 ${this.heureFin} (${this.durationLabel})`;
  }
  // ── Submit ────────────────────────────────────
  wizardSubmit() {
    if (this.wizardMode === "view") {
      this.closeWizard();
      return;
    }
    if (!this.calSelectedDate) {
      this.wizardError = "Date manquante.";
      return;
    }
    this.wizardSaving = true;
    this.wizardError = "";
    const fv = this.step1Form.value;
    const dateBase = new Date(this.calSelectedDate);
    const [sh, sm] = this.heureDebut.split(":").map(Number);
    const [eh, em] = this.heureFin.split(":").map(Number);
    const dateDebut = new Date(dateBase);
    dateDebut.setHours(sh, sm, 0, 0);
    const dateFin = new Date(dateBase);
    dateFin.setHours(eh, em, 0, 0);
    const payload = {
      formation_id: Number(fv.formation_id),
      formateur_id: Number(fv.formateur_id),
      type: this.wizardType,
      lieu: this.wizardType !== "distanciel" ? fv.lieu || "" : fv.lien || "",
      instructions_acces: fv.lien || "",
      date_debut: dateDebut.toISOString(),
      date_fin: dateFin.toISOString(),
      capacite_max: Number(fv.capacite_max),
      titre: fv.titre || "",
      statut: "planifiee"
    };
    const op = this.wizardMode === "edit" && this.wizardSelected ? this.sessionService.updateSessionRH(this.wizardSelected.id, payload) : this.sessionService.createSessionRH(payload);
    op.subscribe({
      next: () => {
        this.wizardSaving = false;
        this.successMessage = this.wizardMode === "edit" ? "Session modifi\xE9e avec succ\xE8s." : "Session planifi\xE9e avec succ\xE8s.";
        this.closeWizard();
        this.loadSessions();
      },
      error: (err) => {
        this.wizardSaving = false;
        this.wizardError = err.error?.message || "Erreur lors de l'enregistrement.";
      }
    });
  }
  // ── List actions ──────────────────────────────
  cancelSession(s) {
    if (!confirm("Annuler cette session ?"))
      return;
    this.sessionService.cancelSession(s.id, "").subscribe({
      next: () => {
        this.successMessage = "Session annul\xE9e.";
        this.loadSessions();
      },
      error: () => {
        this.error = "Erreur lors de l'annulation.";
      }
    });
  }
  deleteSession(s) {
    if (!confirm("Supprimer d\xE9finitivement cette session ?"))
      return;
    this.sessionService.deleteSessionRH(s.id).subscribe({
      next: () => {
        this.successMessage = "Session supprim\xE9e.";
        this.loadSessions();
      },
      error: () => {
        this.error = "Erreur lors de la suppression.";
      }
    });
  }
  // ── Utility ───────────────────────────────────
  formatDate(d) {
    return new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  formatTime(d) {
    return new Date(d).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  }
  statutKey(s) {
    const m = { planifiee: "plan", en_cours: "live", terminee: "done", annulee: "cancel" };
    return m[s] || "plan";
  }
  statutLabel(s) {
    const m = { planifiee: "Planifi\xE9e", en_cours: "En cours", terminee: "Termin\xE9e", annulee: "Annul\xE9e" };
    return m[s] || s;
  }
  countByStatut(statut) {
    return this.allSessions.filter((s) => s.statut === statut).length;
  }
  trackById(_i, s) {
    return s.id;
  }
  clearMessages() {
    this.error = "";
    this.successMessage = "";
  }
  static \u0275fac = function AdminrhSessionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhSessionComponent)(\u0275\u0275directiveInject(SessionFormationService), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhSessionComponent, selectors: [["app-adminrh-session"]], decls: 59, vars: 12, consts: [[1, "ss-shell"], [1, "ss-toolbar"], [1, "ss-search"], [1, "isax", "isax-search-normal-1", "ss-search__icon"], ["type", "search", "placeholder", "Rechercher une session...", 1, "ss-search__input", 3, "ngModelChange", "ngModel"], [1, "ss-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "planifiee"], ["value", "en_cours"], ["value", "terminee"], ["value", "annulee"], ["value", "presentiel"], ["value", "distanciel"], ["value", "hybride"], [1, "ss-spacer"], ["type", "button", 1, "ss-add-btn", 3, "click"], [1, "isax", "isax-add"], ["class", "ss-alert ss-alert--err", 4, "ngIf"], ["class", "ss-alert ss-alert--ok", 4, "ngIf"], [1, "ss-kpi-row"], [1, "ss-kpi"], [1, "ss-kpi__label"], [1, "isax", "isax-calendar-1"], [1, "ss-kpi__val"], [1, "isax", "isax-play-circle"], [1, "isax", "isax-clock"], [1, "isax", "isax-tick-circle"], ["class", "ss-skeletons", 4, "ngIf"], ["class", "ss-table-wrap", 4, "ngIf"], ["class", "sw-overlay", 3, "click", 4, "ngIf"], [1, "ss-alert", "ss-alert--err"], [1, "isax", "isax-warning-2"], ["type", "button", 1, "ss-alert__close", 3, "click"], [1, "isax", "isax-close-circle"], [1, "ss-alert", "ss-alert--ok"], [1, "ss-skeletons"], ["class", "ss-skeleton-row", 4, "ngFor", "ngForOf"], [1, "ss-skeleton-row"], [1, "ss-table-wrap"], [1, "ss-table"], ["class", "ss-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["class", "ss-pager", 4, "ngIf"], [1, "ss-row"], [1, "ss-row__name"], [1, "ss-row__sub"], [1, "ss-type"], [1, "ss-statut"], [1, "ss-places"], [1, "ss-places__bar"], [1, "ss-places__fill"], [1, "ss-places__txt"], [1, "ss-actions"], ["type", "button", "title", "Voir", 1, "ss-act", 3, "click"], [1, "isax", "isax-eye"], ["type", "button", "title", "Modifier", 1, "ss-act", 3, "click", "disabled"], [1, "isax", "isax-edit-2"], ["type", "button", "class", "ss-act ss-act--warn", "title", "Annuler", 3, "click", 4, "ngIf"], ["type", "button", "title", "Supprimer", 1, "ss-act", "ss-act--del", 3, "click"], [1, "isax", "isax-trash"], ["type", "button", "title", "Annuler", 1, "ss-act", "ss-act--warn", 3, "click"], ["colspan", "7", 1, "ss-empty"], [1, "ss-pager"], [1, "ss-pager__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["class", "ss-pager__btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], [1, "ss-pager__btn", 3, "click"], [1, "sw-overlay", 3, "click"], [1, "sw-modal", 3, "click"], [1, "sw-head"], [1, "sw-head__icon"], [1, "isax", "isax-calendar-add"], [1, "sw-head__text"], [1, "sw-head__title"], [1, "sw-head__sub"], ["type", "button", 1, "sw-close", 3, "click"], [1, "sw-stepper"], [4, "ngFor", "ngForOf"], [1, "sw-body", 3, "formGroup"], [1, "sw-foot"], [1, "sw-foot__info"], ["type", "button", "class", "sw-btn-ghost", 3, "click", 4, "ngIf"], ["type", "button", "class", "sw-btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "sw-btn-success", 3, "disabled", "click", 4, "ngIf"], [1, "sw-step"], [1, "sw-step__circle"], ["class", "isax isax-tick-circle", "style", "font-size:11px", 4, "ngIf"], [1, "sw-step__label"], ["class", "sw-step__line", 4, "ngIf"], [1, "isax", "isax-tick-circle", 2, "font-size", "11px"], [1, "sw-step__line"], [1, "sw-field", "sw-field--full"], [1, "sw-label"], [1, "sw-req"], ["formControlName", "formation_id", 1, "sw-input"], [3, "value", 4, "ngFor", "ngForOf"], [1, "sw-row"], [1, "sw-field"], ["formControlName", "formateur_id", 1, "sw-input"], ["type", "number", "formControlName", "capacite_max", "min", "1", 1, "sw-input"], [1, "sw-mode-grid"], ["class", "sw-mode-card", 3, "on", "click", 4, "ngFor", "ngForOf"], ["class", "sw-field sw-field--full", 4, "ngIf"], ["type", "text", "formControlName", "titre", "placeholder", "Ex. : Session avanc\xE9e \u2014 groupe TechNova Jan. 2025", 1, "sw-input"], [1, "sw-hint"], [3, "value"], [1, "sw-mode-card", 3, "click"], [1, "sw-mode-card__head"], [1, "sw-mode-card__title"], [1, "sw-mode-card__sub"], ["class", "sw-req", 4, "ngIf"], [1, "sw-location-block"], [1, "sw-lb-row"], [1, "isax", "isax-building"], ["type", "text", "formControlName", "lieu", "placeholder", "Ex. : Salle B2, Immeuble Peytavin, Dakar", 1, "sw-lb-input"], [1, "isax", "isax-link"], ["type", "text", "formControlName", "lien", "placeholder", "https://meet.google.com/xxx-yyyy-zzz", 1, "sw-lb-input"], [1, "isax", "isax-key"], ["type", "text", "formControlName", "code_acces", "placeholder", "Code d'acc\xE8s (optionnel)", 1, "sw-lb-input"], [1, "sw-cal"], [1, "sw-cal__head"], [1, "sw-cal__month"], [1, "sw-cal__nav"], ["type", "button", 1, "sw-cal__nav-btn", 3, "click"], [1, "sw-cal__grid"], ["class", "sw-cal__dow", 4, "ngFor", "ngForOf"], ["class", "sw-cal__day", 3, "sw-cal__day--empty", "sw-cal__day--past", "sw-cal__day--today", "sw-cal__day--sel", "sw-cal__day--has", "click", 4, "ngFor", "ngForOf"], [1, "sw-time-wrap"], ["type", "time", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "sw-duration-badge"], [1, "isax", "isax-timer"], [1, "sw-hint", 2, "margin-left", "8px"], ["class", "sw-row", 4, "ngIf"], [1, "sw-cal__dow"], [1, "sw-cal__day", 3, "click"], [1, "sw-input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "24h"], ["value", "48h"], ["value", "1w"], ["value", "none"], ["value", "weekly"], ["value", "biweekly"], ["value", "monthly"], [1, "sw-cap-vis"], [1, "sw-cap-bar"], [1, "sw-cap-fill"], [1, "sw-participants-block"], [1, "sw-pb-head"], [1, "sw-pb-title"], [1, "sw-pb-count"], [1, "sw-pb-search"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher un employ\xE9...", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "sw-pb-list"], ["class", "sw-pb-item", 3, "sel", "click", 4, "ngFor", "ngForOf"], ["class", "sw-pb-empty", 4, "ngIf"], [1, "sw-recap"], [1, "sw-recap__label"], [1, "sw-recap__row"], [1, "sw-rl"], [1, "sw-rv"], [1, "sw-rv-mode"], ["class", "sw-error", 4, "ngIf"], [1, "sw-pb-item", 3, "click"], [1, "sw-pb-av"], [1, "sw-pb-info"], [1, "sw-pb-name"], [1, "sw-pb-role"], [1, "sw-pb-chk"], ["class", "isax isax-tick-circle", 4, "ngIf"], [1, "sw-pb-empty"], [1, "sw-error"], ["type", "button", 1, "sw-btn-ghost", 3, "click"], ["type", "button", 1, "sw-btn-primary", 3, "click"], ["type", "button", 1, "sw-btn-success", 3, "click", "disabled"], [1, "isax", "isax-calendar-tick"]], template: function AdminrhSessionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchValue, $event) || (ctx.searchValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhSessionComponent_Template_input_ngModelChange_4_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_Template_select_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatut, $event) || (ctx.filterStatut = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhSessionComponent_Template_select_ngModelChange_5_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(6, "option", 6);
      \u0275\u0275text(7, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "option", 7);
      \u0275\u0275text(9, "Planifi\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "option", 8);
      \u0275\u0275text(11, "En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "option", 9);
      \u0275\u0275text(13, "Termin\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 10);
      \u0275\u0275text(15, "Annul\xE9e");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhSessionComponent_Template_select_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterType, $event) || (ctx.filterType = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhSessionComponent_Template_select_ngModelChange_16_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(17, "option", 6);
      \u0275\u0275text(18, "Tous les types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Pr\xE9sentiel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 12);
      \u0275\u0275text(22, "Distanciel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 13);
      \u0275\u0275text(24, "Hybride");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(25, "div", 14);
      \u0275\u0275elementStart(26, "button", 15);
      \u0275\u0275listener("click", function AdminrhSessionComponent_Template_button_click_26_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275text(28, " Planifier une session ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(29, AdminrhSessionComponent_div_29_Template, 5, 1, "div", 17)(30, AdminrhSessionComponent_div_30_Template, 5, 1, "div", 18);
      \u0275\u0275elementStart(31, "div", 19)(32, "div", 20)(33, "div", 21);
      \u0275\u0275element(34, "i", 22);
      \u0275\u0275text(35, " Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 23);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 20)(39, "div", 21);
      \u0275\u0275element(40, "i", 24);
      \u0275\u0275text(41, " En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 23);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 20)(45, "div", 21);
      \u0275\u0275element(46, "i", 25);
      \u0275\u0275text(47, " Planifi\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 23);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 20)(51, "div", 21);
      \u0275\u0275element(52, "i", 26);
      \u0275\u0275text(53, " Termin\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 23);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(56, AdminrhSessionComponent_div_56_Template, 2, 2, "div", 27)(57, AdminrhSessionComponent_div_57_Template, 22, 4, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, AdminrhSessionComponent_div_58_Template, 26, 20, "div", 29);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchValue);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatut);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterType);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.allSessions.length);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.countByStatut("en_cours"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.countByStatut("planifiee"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.countByStatut("terminee"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.wizardOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, TitleCasePipe], styles: ['\n\n.ss-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ss-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ss-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ss-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ss-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ss-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #BA7517;\n  background: #fff;\n}\n.ss-select[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  color: #4b5563;\n  outline: none;\n  cursor: pointer;\n}\n.ss-select[_ngcontent-%COMP%]:focus {\n  border-color: #BA7517;\n}\n.ss-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ss-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  font-size: 12px;\n  font-weight: 500;\n  background: #BA7517;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ss-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ss-add-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.ss-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  font-size: 12px;\n  border-left: 3px solid;\n  margin: 8px 14px 0;\n  border-radius: 8px;\n}\n.ss-alert__close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n}\n.ss-alert--err[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: #f87171;\n  color: #991b1b;\n}\n.ss-alert--ok[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #4ade80;\n  color: #166534;\n}\n.ss-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1px;\n  background: #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ss-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 12px 16px;\n}\n.ss-kpi__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ss-kpi__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ss-kpi__val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: #111827;\n  margin-top: 2px;\n}\n.ss-skeletons[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ss-skeleton-row[_ngcontent-%COMP%] {\n  height: 56px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.2s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n.ss-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.ss-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ss-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ss-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  text-align: left;\n  white-space: nowrap;\n}\n.ss-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  vertical-align: middle;\n}\n.ss-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid #f3f4f6;\n  transition: background 0.1s;\n}\n.ss-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.ss-row__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ss-row__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ss-type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.ss-type[data-t=presentiel][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ss-type[data-t=distanciel][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.ss-type[data-t=hybride][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #085041;\n}\n.ss-statut[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.ss-statut[data-s=plan][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ss-statut[data-s=live][_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n}\n.ss-statut[data-s=done][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ss-statut[data-s=cancel][_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.ss-places[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.ss-places__bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  border-radius: 5px;\n  background: #f3f4f6;\n  overflow: hidden;\n  min-width: 50px;\n}\n.ss-places__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  background: #BA7517;\n  transition: width 0.3s;\n}\n.ss-places__txt[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ss-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ss-act[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #4b5563;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ss-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ss-act[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.ss-act--warn[_ngcontent-%COMP%]:hover {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.ss-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.ss-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 16px;\n  color: #9ca3af;\n}\n.ss-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ss-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ss-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 14px;\n  border-top: 1px solid #e5e7eb;\n}\n.ss-pager__btn[_ngcontent-%COMP%] {\n  min-width: 28px;\n  height: 28px;\n  padding: 0 8px;\n  font-size: 12px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ss-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ss-pager__btn.active[_ngcontent-%COMP%] {\n  background: #BA7517;\n  border-color: #BA7517;\n  color: #fff;\n}\n.ss-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sw-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.sw-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.sw-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.sw-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #FAEEDA;\n  color: #BA7517;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sw-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sw-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.sw-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.sw-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.sw-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.sw-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.sw-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.sw-step__circle[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.sw-step__circle.active[_ngcontent-%COMP%] {\n  background: #BA7517;\n  color: #fff;\n  border-color: #BA7517;\n}\n.sw-step__circle.done[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.sw-step__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.sw-step__label.active[_ngcontent-%COMP%] {\n  color: #BA7517;\n}\n.sw-step__label.done[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.sw-step__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.sw-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.sw-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.sw-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sw-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.sw-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.sw-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.sw-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.sw-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.sw-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.sw-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.sw-input[_ngcontent-%COMP%]:focus {\n  border-color: #BA7517;\n  box-shadow: 0 0 0 2px #FAEEDA;\n}\n.sw-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.sw-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.sw-mode-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.sw-mode-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sw-mode-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-bottom: 4px;\n}\n.sw-mode-card__head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #9ca3af;\n}\n.sw-mode-card__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.sw-mode-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  line-height: 1.3;\n}\n.sw-mode-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n}\n.sw-mode-card.on[_ngcontent-%COMP%] {\n  border-color: #BA7517;\n  background: #FAEEDA;\n}\n.sw-mode-card.on[_ngcontent-%COMP%]   .sw-mode-card__head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #854F0B;\n}\n.sw-mode-card.on[_ngcontent-%COMP%]   .sw-mode-card__title[_ngcontent-%COMP%] {\n  color: #633806;\n}\n.sw-location-block[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.sw-lb-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.sw-lb-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sw-lb-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.sw-lb-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  font-family: inherit;\n}\n.sw-lb-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.sw-lb-input[readonly][_ngcontent-%COMP%] {\n  color: #4b5563;\n  cursor: default;\n}\n.sw-cal[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.sw-cal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 9px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n}\n.sw-cal__month[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  flex: 1;\n  text-transform: capitalize;\n}\n.sw-cal__nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.sw-cal__nav-btn[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  color: #4b5563;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.12s;\n}\n.sw-cal__nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.sw-cal__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  padding: 8px;\n  gap: 2px;\n}\n.sw-cal__dow[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: center;\n  padding: 4px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.sw-cal__day[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: center;\n  padding: 5px 2px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #4b5563;\n  transition: all 0.12s;\n  position: relative;\n}\n.sw-cal__day[_ngcontent-%COMP%]:hover:not(.sw-cal__day--empty):not(.sw-cal__day--past) {\n  background: #f3f4f6;\n}\n.sw-cal__day--empty[_ngcontent-%COMP%] {\n  visibility: hidden;\n  cursor: default;\n  pointer-events: none;\n}\n.sw-cal__day--past[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.sw-cal__day--today[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n.sw-cal__day--has[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #BA7517;\n  position: absolute;\n  bottom: 2px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.sw-cal__day--sel[_ngcontent-%COMP%] {\n  background: #BA7517;\n  color: #fff;\n  font-weight: 600;\n}\n.sw-time-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.sw-time-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: #BA7517;\n  box-shadow: 0 0 0 2px #FAEEDA;\n}\n.sw-time-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.sw-time-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  font-family: inherit;\n  width: 100%;\n}\n.sw-duration-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  background: #f9fafb;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #4b5563;\n  margin-bottom: 12px;\n}\n.sw-duration-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9ca3af;\n}\n.sw-duration-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.sw-cap-vis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding-top: 6px;\n}\n.sw-cap-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #f3f4f6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.sw-cap-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  background: #BA7517;\n  transition: width 0.3s;\n}\n.sw-participants-block[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.sw-pb-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n}\n.sw-pb-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n  flex: 1;\n}\n.sw-pb-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #633806;\n  background: #FAEEDA;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.sw-pb-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.sw-pb-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.sw-pb-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  outline: none;\n  color: #111827;\n  font-family: inherit;\n  flex: 1;\n}\n.sw-pb-list[_ngcontent-%COMP%] {\n  max-height: 160px;\n  overflow-y: auto;\n}\n.sw-pb-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.sw-pb-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.sw-pb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.sw-pb-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sw-pb-item[_ngcontent-%COMP%]:hover, \n.sw-pb-item.sel[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n}\n.sw-pb-av[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FAEEDA;\n  color: #633806;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.sw-pb-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sw-pb-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #111827;\n}\n.sw-pb-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.sw-pb-empty[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.sw-pb-chk[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  flex-shrink: 0;\n}\n.sw-pb-chk.on[_ngcontent-%COMP%] {\n  background: #BA7517;\n  border-color: #BA7517;\n  color: #fff;\n}\n.sw-recap[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-top: 4px;\n}\n.sw-recap__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.sw-recap__row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.sw-recap__row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sw-rl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.sw-rv[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.sw-rv-mode[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.sw-rv-mode[data-t=presentiel][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.sw-rv-mode[data-t=distanciel][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.sw-rv-mode[data-t=hybride][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #085041;\n}\n.sw-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.sw-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.sw-foot__info[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.sw-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.sw-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.sw-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #BA7517;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.sw-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sw-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.sw-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sw-btn-success[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.sw-btn-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sw-btn-success[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.sw-btn-success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ss-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sw-mode-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sw-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=adminrh-session.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhSessionComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-session", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink], template: `<div class="ss-shell">

  <!-- \u2500\u2500 TOOLBAR \u2500\u2500 -->
  <div class="ss-toolbar">
    <div class="ss-search">
      <i class="isax isax-search-normal-1 ss-search__icon"></i>
      <input type="search" class="ss-search__input" placeholder="Rechercher une session..."
             [(ngModel)]="searchValue" (ngModelChange)="applyFilters()">
    </div>
    <select class="ss-select" [(ngModel)]="filterStatut" (ngModelChange)="applyFilters()">
      <option value="">Tous les statuts</option>
      <option value="planifiee">Planifi\xE9e</option>
      <option value="en_cours">En cours</option>
      <option value="terminee">Termin\xE9e</option>
      <option value="annulee">Annul\xE9e</option>
    </select>
    <select class="ss-select" [(ngModel)]="filterType" (ngModelChange)="applyFilters()">
      <option value="">Tous les types</option>
      <option value="presentiel">Pr\xE9sentiel</option>
      <option value="distanciel">Distanciel</option>
      <option value="hybride">Hybride</option>
    </select>
    <div class="ss-spacer"></div>
    <button type="button" class="ss-add-btn" (click)="openCreate()">
      <i class="isax isax-add"></i> Planifier une session
    </button>
  </div>

  <!-- Alerts -->
  <div *ngIf="error" class="ss-alert ss-alert--err">
    <i class="isax isax-warning-2"></i> {{ error }}
    <button type="button" class="ss-alert__close" (click)="clearMessages()"><i class="isax isax-close-circle"></i></button>
  </div>
  <div *ngIf="successMessage" class="ss-alert ss-alert--ok">
    <i class="isax isax-tick-circle"></i> {{ successMessage }}
    <button type="button" class="ss-alert__close" (click)="clearMessages()"><i class="isax isax-close-circle"></i></button>
  </div>

  <!-- KPIs -->
  <div class="ss-kpi-row">
    <div class="ss-kpi">
      <div class="ss-kpi__label"><i class="isax isax-calendar-1"></i> Total</div>
      <div class="ss-kpi__val">{{ allSessions.length }}</div>
    </div>
    <div class="ss-kpi">
      <div class="ss-kpi__label"><i class="isax isax-play-circle"></i> En cours</div>
      <div class="ss-kpi__val">{{ countByStatut('en_cours') }}</div>
    </div>
    <div class="ss-kpi">
      <div class="ss-kpi__label"><i class="isax isax-clock"></i> Planifi\xE9es</div>
      <div class="ss-kpi__val">{{ countByStatut('planifiee') }}</div>
    </div>
    <div class="ss-kpi">
      <div class="ss-kpi__label"><i class="isax isax-tick-circle"></i> Termin\xE9es</div>
      <div class="ss-kpi__val">{{ countByStatut('terminee') }}</div>
    </div>
  </div>

  <!-- Skeleton -->
  <div *ngIf="loading" class="ss-skeletons">
    <div *ngFor="let i of [1,2,3,4]" class="ss-skeleton-row"></div>
  </div>

  <!-- Table -->
  <div *ngIf="!loading" class="ss-table-wrap">
    <table class="ss-table">
      <thead>
        <tr>
          <th>Session</th>
          <th>Date</th>
          <th>Modalit\xE9</th>
          <th>Statut</th>
          <th>Places</th>
          <th>Formateur</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let s of pagedSessions; trackBy: trackById" class="ss-row">
          <td>
            <div class="ss-row__name">{{ s.titre || s.formation?.titre || '\u2014' }}</div>
            <div class="ss-row__sub">{{ s.code_session }}</div>
          </td>
          <td>
            <div class="ss-row__name">{{ formatDate(s.date_debut) }}</div>
            <div class="ss-row__sub">{{ formatTime(s.date_debut) }} \u2013 {{ formatTime(s.date_fin) }}</div>
          </td>
          <td>
            <span class="ss-type" [attr.data-t]="s.type">
              {{ s.type_display || s.type | titlecase }}
            </span>
          </td>
          <td>
            <span class="ss-statut" [attr.data-s]="statutKey(s.statut)">{{ statutLabel(s.statut) }}</span>
          </td>
          <td>
            <div class="ss-places">
              <div class="ss-places__bar">
                <div class="ss-places__fill"
                     [style.width.%]="(s.nombre_inscrits || 0) / s.capacite_max * 100"></div>
              </div>
              <span class="ss-places__txt">{{ s.nombre_inscrits || 0 }}/{{ s.capacite_max }}</span>
            </div>
          </td>
          <td>
            <div class="ss-row__name">{{ s.formateur?.name || (s.formateur?.prenom + ' ' + s.formateur?.nom) || '\u2014' }}</div>
          </td>
          <td>
            <div class="ss-actions">
              <button type="button" class="ss-act" title="Voir" (click)="openView(s)">
                <i class="isax isax-eye"></i>
              </button>
              <button type="button" class="ss-act" title="Modifier" (click)="openEdit(s)"
                      [disabled]="s.statut === 'annulee' || s.statut === 'terminee'">
                <i class="isax isax-edit-2"></i>
              </button>
              <button type="button" class="ss-act ss-act--warn" title="Annuler"
                      *ngIf="s.statut === 'planifiee'" (click)="cancelSession(s)">
                <i class="isax isax-close-circle"></i>
              </button>
              <button type="button" class="ss-act ss-act--del" title="Supprimer" (click)="deleteSession(s)">
                <i class="isax isax-trash"></i>
              </button>
            </div>
          </td>
        </tr>
        <tr *ngIf="!sessions.length">
          <td colspan="7" class="ss-empty">
            <i class="isax isax-calendar-1"></i>
            <p>Aucune session trouv\xE9e</p>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="ss-pager" *ngIf="totalPages > 1">
      <button class="ss-pager__btn" [disabled]="currentPage === 1"
              (click)="currentPage = currentPage - 1">
        <i class="isax isax-arrow-left-2"></i>
      </button>
      <button *ngFor="let p of pagesArray; let i = index"
              class="ss-pager__btn" [class.active]="currentPage === i + 1"
              (click)="currentPage = i + 1">{{ i + 1 }}</button>
      <button class="ss-pager__btn" [disabled]="currentPage === totalPages"
              (click)="currentPage = currentPage + 1">
        <i class="isax isax-arrow-right-3"></i>
      </button>
    </div>
  </div>

</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     WIZARD MODAL \u2013 SESSION
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="sw-overlay" *ngIf="wizardOpen" (click)="closeWizard()">
  <div class="sw-modal" (click)="$event.stopPropagation()">

    <!-- Head -->
    <div class="sw-head">
      <div class="sw-head__icon"><i class="isax isax-calendar-add"></i></div>
      <div class="sw-head__text">
        <div class="sw-head__title">
          {{ wizardMode === 'create' ? 'Planifier une session' : wizardMode === 'edit' ? 'Modifier la session' : 'D\xE9tails de la session' }}
        </div>
        <div class="sw-head__sub">{{ wizardMode === 'view' ? 'Consultation uniquement' : 'Configurez la session en 3 \xE9tapes' }}</div>
      </div>
      <button type="button" class="sw-close" (click)="closeWizard()">
        <i class="isax isax-close-circle"></i>
      </button>
    </div>

    <!-- Stepper -->
    <div class="sw-stepper">
      <ng-container *ngFor="let st of [{n:1,l:'Infos & modalit\xE9'},{n:2,l:'Date & horaire'},{n:3,l:'Participants'}]; let last=last">
        <div class="sw-step">
          <div class="sw-step__circle"
               [class.done]="wizardStep > st.n"
               [class.active]="wizardStep === st.n">
            <i *ngIf="wizardStep > st.n" class="isax isax-tick-circle" style="font-size:11px"></i>
            <span *ngIf="wizardStep <= st.n">{{ st.n }}</span>
          </div>
          <span class="sw-step__label"
                [class.done]="wizardStep > st.n"
                [class.active]="wizardStep === st.n">{{ st.l }}</span>
        </div>
        <div *ngIf="!last" class="sw-step__line"></div>
      </ng-container>
    </div>

    <!-- Body -->
    <div class="sw-body" [formGroup]="step1Form">

      <!-- \u2500\u2500 \xC9TAPE 1 : Infos & modalit\xE9 \u2500\u2500 -->
      <ng-container *ngIf="wizardStep === 1">

        <!-- Formation -->
        <div class="sw-field sw-field--full">
          <label class="sw-label">Formation associ\xE9e <span class="sw-req">*</span></label>
          <select class="sw-input" formControlName="formation_id"
                  [attr.disabled]="wizardMode === 'view' ? '' : null">
            <option value="">S\xE9lectionner une formation...</option>
            <option *ngFor="let f of formations" [value]="f.id">{{ f.titre }}</option>
          </select>
        </div>

        <!-- Formateur + Lieu -->
        <div class="sw-row">
          <div class="sw-field">
            <label class="sw-label">Formateur <span class="sw-req">*</span></label>
            <select class="sw-input" formControlName="formateur_id"
                    [attr.disabled]="wizardMode === 'view' ? '' : null">
              <option value="">S\xE9lectionner...</option>
              <option *ngFor="let f of formateurs" [value]="f.id">
                {{ f.prenom ? (f.prenom + ' ' + f.nom) : f.name }}
              </option>
            </select>
          </div>
          <div class="sw-field">
            <label class="sw-label">Capacit\xE9 maximale</label>
            <input type="number" class="sw-input" formControlName="capacite_max" min="1"
                   [attr.readonly]="wizardMode === 'view' ? '' : null">
          </div>
        </div>

        <!-- Modalit\xE9 -->
        <div class="sw-field sw-field--full">
          <label class="sw-label">Modalit\xE9 <span class="sw-req">*</span></label>
          <div class="sw-mode-grid">
            <div *ngFor="let m of modes" class="sw-mode-card"
                 [class.on]="wizardType === m.key"
                 (click)="setMode(m.key)">
              <div class="sw-mode-card__head">
                <i class="isax {{ m.icon }}"></i>
                <span class="sw-mode-card__title">{{ m.label }}</span>
              </div>
              <div class="sw-mode-card__sub">{{ m.sub }}</div>
            </div>
          </div>
        </div>

        <!-- Lieu / Lien selon modalit\xE9 -->
        <div class="sw-field sw-field--full" *ngIf="wizardType !== 'distanciel'">
          <label class="sw-label">Salle / Lieu <span *ngIf="wizardType === 'presentiel'" class="sw-req">*</span></label>
          <div class="sw-location-block">
            <div class="sw-lb-row">
              <i class="isax isax-building"></i>
              <input class="sw-lb-input" type="text" formControlName="lieu"
                     placeholder="Ex. : Salle B2, Immeuble Peytavin, Dakar"
                     [attr.readonly]="wizardMode === 'view' ? '' : null">
            </div>
          </div>
        </div>

        <div class="sw-field sw-field--full" *ngIf="wizardType !== 'presentiel'">
          <label class="sw-label">Lien de connexion <span class="sw-req">*</span></label>
          <div class="sw-location-block">
            <div class="sw-lb-row">
              <i class="isax isax-link"></i>
              <input class="sw-lb-input" type="text" formControlName="lien"
                     placeholder="https://meet.google.com/xxx-yyyy-zzz"
                     [attr.readonly]="wizardMode === 'view' ? '' : null">
            </div>
            <div class="sw-lb-row">
              <i class="isax isax-key"></i>
              <input class="sw-lb-input" type="text" formControlName="code_acces"
                     placeholder="Code d'acc\xE8s (optionnel)"
                     [attr.readonly]="wizardMode === 'view' ? '' : null">
            </div>
          </div>
          <span class="sw-hint">Le lien sera envoy\xE9 automatiquement aux participants inscrits</span>
        </div>

        <!-- Titre personnalis\xE9 -->
        <div class="sw-field sw-field--full">
          <label class="sw-label">Titre personnalis\xE9 de la session</label>
          <input type="text" class="sw-input" formControlName="titre"
                 placeholder="Ex. : Session avanc\xE9e \u2014 groupe TechNova Jan. 2025"
                 [attr.readonly]="wizardMode === 'view' ? '' : null">
          <span class="sw-hint">Laissez vide pour utiliser le titre de la formation</span>
        </div>

      </ng-container>

      <!-- \u2500\u2500 \xC9TAPE 2 : Date & horaire \u2500\u2500 -->
      <ng-container *ngIf="wizardStep === 2">

        <!-- Mini-calendrier -->
        <div class="sw-field sw-field--full">
          <label class="sw-label">Choisir la date <span class="sw-req">*</span></label>
          <div class="sw-cal">
            <div class="sw-cal__head">
              <span class="sw-cal__month">{{ calMonthLabel | titlecase }}</span>
              <div class="sw-cal__nav">
                <button type="button" class="sw-cal__nav-btn" (click)="calPrev()">
                  <i class="isax isax-arrow-left-2"></i>
                </button>
                <button type="button" class="sw-cal__nav-btn" (click)="calNext()">
                  <i class="isax isax-arrow-right-3"></i>
                </button>
              </div>
            </div>
            <div class="sw-cal__grid">
              <div class="sw-cal__dow" *ngFor="let d of ['Lu','Ma','Me','Je','Ve','Sa','Di']">{{ d }}</div>
              <div *ngFor="let cell of calendarDays"
                   class="sw-cal__day"
                   [class.sw-cal__day--empty]="cell.empty"
                   [class.sw-cal__day--past]="!cell.empty && isPast(cell.date)"
                   [class.sw-cal__day--today]="isToday(cell.date)"
                   [class.sw-cal__day--sel]="isSelected(cell.date)"
                   [class.sw-cal__day--has]="hasSession(cell.date) && !isSelected(cell.date)"
                   (click)="!cell.empty && selectDate(cell.date)">
                {{ cell.empty ? '' : cell.date.getDate() }}
              </div>
            </div>
          </div>
        </div>

        <!-- Heures -->
        <div class="sw-row">
          <div class="sw-field">
            <label class="sw-label">Heure de d\xE9but <span class="sw-req">*</span></label>
            <div class="sw-time-wrap">
              <i class="isax isax-clock"></i>
              <input type="time" [(ngModel)]="heureDebut" [ngModelOptions]="{standalone:true}"
                     [attr.readonly]="wizardMode === 'view' ? '' : null">
            </div>
          </div>
          <div class="sw-field">
            <label class="sw-label">Heure de fin <span class="sw-req">*</span></label>
            <div class="sw-time-wrap">
              <i class="isax isax-clock"></i>
              <input type="time" [(ngModel)]="heureFin" [ngModelOptions]="{standalone:true}"
                     [attr.readonly]="wizardMode === 'view' ? '' : null">
            </div>
          </div>
        </div>

        <div class="sw-duration-badge">
          <i class="isax isax-timer"></i> Dur\xE9e : <strong>{{ durationLabel }}</strong>
          <span class="sw-hint" style="margin-left:8px">Fuseau : UTC+0 (Dakar)</span>
        </div>

        <!-- Rappel + R\xE9currence -->
        <div class="sw-row" *ngIf="wizardMode !== 'view'">
          <div class="sw-field">
            <label class="sw-label">Rappel avant la session</label>
            <select class="sw-input" [(ngModel)]="rappel" [ngModelOptions]="{standalone:true}">
              <option value="24h">24h avant</option>
              <option value="48h">48h avant</option>
              <option value="1w">1 semaine avant</option>
              <option value="none">Aucun rappel</option>
            </select>
          </div>
          <div class="sw-field">
            <label class="sw-label">R\xE9currence</label>
            <select class="sw-input" [(ngModel)]="recurrence" [ngModelOptions]="{standalone:true}">
              <option value="none">Pas de r\xE9currence</option>
              <option value="weekly">Hebdomadaire</option>
              <option value="biweekly">Bi-mensuelle</option>
              <option value="monthly">Mensuelle</option>
            </select>
          </div>
        </div>

      </ng-container>

      <!-- \u2500\u2500 \xC9TAPE 3 : Participants \u2500\u2500 -->
      <ng-container *ngIf="wizardStep === 3">

        <!-- Capacit\xE9 + barre -->
        <div class="sw-row">
          <div class="sw-field">
            <label class="sw-label">Capacit\xE9 maximale</label>
            <input type="number" class="sw-input" formControlName="capacite_max" min="1"
                   [attr.readonly]="wizardMode === 'view' ? '' : null">
          </div>
          <div class="sw-field">
            <label class="sw-label">Taux de remplissage</label>
            <div class="sw-cap-vis">
              <div class="sw-cap-bar">
                <div class="sw-cap-fill" [style.width.%]="fillPercent"></div>
              </div>
              <span class="sw-hint">{{ selectedParticipants.length }}/{{ step1Form.value.capacite_max || 20 }} places</span>
            </div>
          </div>
        </div>

        <!-- Liste participants -->
        <div class="sw-participants-block">
          <div class="sw-pb-head">
            <span class="sw-pb-title">Employ\xE9s disponibles</span>
            <span class="sw-pb-count">{{ selectedParticipants.length }} s\xE9lectionn\xE9s</span>
          </div>
          <div class="sw-pb-search">
            <i class="isax isax-search-normal-1"></i>
            <input type="search" placeholder="Rechercher un employ\xE9..."
                   [(ngModel)]="participantsSearch" [ngModelOptions]="{standalone:true}">
          </div>
          <div class="sw-pb-list">
            <div *ngFor="let u of filteredUsers" class="sw-pb-item"
                 [class.sel]="isParticipantSelected(u)"
                 (click)="toggleParticipant(u)">
              <div class="sw-pb-av">{{ userInitials(u) }}</div>
              <div class="sw-pb-info">
                <div class="sw-pb-name">{{ u.name || (u.prenom + ' ' + u.nom) }}</div>
                <div class="sw-pb-role">{{ u.fonction || u.email || '\u2014' }}</div>
              </div>
              <div class="sw-pb-chk" [class.on]="isParticipantSelected(u)">
                <i *ngIf="isParticipantSelected(u)" class="isax isax-tick-circle"></i>
              </div>
            </div>
            <div *ngIf="!filteredUsers.length" class="sw-pb-empty">Aucun employ\xE9 trouv\xE9</div>
          </div>
        </div>

        <!-- R\xE9capitulatif -->
        <div class="sw-recap">
          <div class="sw-recap__label">R\xE9capitulatif de la session</div>
          <div class="sw-recap__row"><span class="sw-rl">Formation</span><span class="sw-rv">{{ recapFormation }}</span></div>
          <div class="sw-recap__row"><span class="sw-rl">Formateur</span><span class="sw-rv">{{ recapFormateur }}</span></div>
          <div class="sw-recap__row"><span class="sw-rl">Date</span><span class="sw-rv">{{ recapDate }}</span></div>
          <div class="sw-recap__row"><span class="sw-rl">Horaire</span><span class="sw-rv">{{ recapHoraire }}</span></div>
          <div class="sw-recap__row">
            <span class="sw-rl">Modalit\xE9</span>
            <span class="sw-rv">
              <span class="sw-rv-mode" [attr.data-t]="wizardType">{{ wizardType | titlecase }}</span>
            </span>
          </div>
          <div class="sw-recap__row">
            <span class="sw-rl">Participants</span>
            <span class="sw-rv">{{ selectedParticipants.length }} / {{ step1Form.value.capacite_max || 20 }} places</span>
          </div>
        </div>

        <!-- Error -->
        <div *ngIf="wizardError" class="sw-error">
          <i class="isax isax-warning-2"></i> {{ wizardError }}
        </div>

      </ng-container>

    </div>

    <!-- Footer -->
    <div class="sw-foot">
      <span class="sw-foot__info">\xC9tape {{ wizardStep }} sur 3</span>
      <button type="button" class="sw-btn-ghost" *ngIf="wizardStep > 1" (click)="wizardPrev()">Retour</button>
      <button type="button" class="sw-btn-ghost" *ngIf="wizardStep === 1" (click)="closeWizard()">Annuler</button>
      <button type="button" class="sw-btn-primary" *ngIf="wizardStep < 3" (click)="wizardNext()">
        Suivant <i class="isax isax-arrow-right-3"></i>
      </button>
      <button type="button" *ngIf="wizardStep === 3 && wizardMode !== 'view'"
              class="sw-btn-success" [disabled]="wizardSaving" (click)="wizardSubmit()">
        <i class="isax isax-calendar-tick"></i>
        {{ wizardSaving ? 'Enregistrement...' : (wizardMode === 'create' ? 'Planifier la session' : 'Sauvegarder') }}
      </button>
      <button type="button" *ngIf="wizardStep === 3 && wizardMode === 'view'"
              class="sw-btn-primary" (click)="closeWizard()">Fermer</button>
    </div>

  </div>
</div>
`, styles: ['/* src/app/features/adminrh/adminrh-session/adminrh-session.component.scss */\n.ss-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ss-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ss-search {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ss-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ss-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ss-search__input:focus {\n  border-color: #BA7517;\n  background: #fff;\n}\n.ss-select {\n  padding: 5px 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  color: #4b5563;\n  outline: none;\n  cursor: pointer;\n}\n.ss-select:focus {\n  border-color: #BA7517;\n}\n.ss-spacer {\n  flex: 1;\n}\n.ss-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  font-size: 12px;\n  font-weight: 500;\n  background: #BA7517;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ss-add-btn i {\n  font-size: 14px;\n}\n.ss-add-btn:hover {\n  opacity: 0.9;\n}\n.ss-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  font-size: 12px;\n  border-left: 3px solid;\n  margin: 8px 14px 0;\n  border-radius: 8px;\n}\n.ss-alert__close {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n}\n.ss-alert--err {\n  background: #fef2f2;\n  border-color: #f87171;\n  color: #991b1b;\n}\n.ss-alert--ok {\n  background: #f0fdf4;\n  border-color: #4ade80;\n  color: #166534;\n}\n.ss-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1px;\n  background: #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ss-kpi {\n  background: #fff;\n  padding: 12px 16px;\n}\n.ss-kpi__label {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ss-kpi__label i {\n  font-size: 13px;\n}\n.ss-kpi__val {\n  font-size: 22px;\n  font-weight: 600;\n  color: #111827;\n  margin-top: 2px;\n}\n.ss-skeletons {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ss-skeleton-row {\n  height: 56px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 25%,\n      #e5e7eb 50%,\n      #f3f4f6 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.2s infinite;\n}\n@keyframes shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n.ss-table-wrap {\n  overflow-x: auto;\n}\n.ss-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ss-table thead tr {\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ss-table th {\n  padding: 9px 14px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  text-align: left;\n  white-space: nowrap;\n}\n.ss-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  vertical-align: middle;\n}\n.ss-table tbody tr {\n  border-bottom: 0.5px solid #f3f4f6;\n  transition: background 0.1s;\n}\n.ss-table tbody tr:hover {\n  background: #f9fafb;\n}\n.ss-row__name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ss-row__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ss-type {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.ss-type[data-t=presentiel] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ss-type[data-t=distanciel] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.ss-type[data-t=hybride] {\n  background: #E1F5EE;\n  color: #085041;\n}\n.ss-statut {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.ss-statut[data-s=plan] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ss-statut[data-s=live] {\n  background: #f0fdf4;\n  color: #166534;\n}\n.ss-statut[data-s=done] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ss-statut[data-s=cancel] {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.ss-places {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.ss-places__bar {\n  flex: 1;\n  height: 5px;\n  border-radius: 5px;\n  background: #f3f4f6;\n  overflow: hidden;\n  min-width: 50px;\n}\n.ss-places__fill {\n  height: 100%;\n  border-radius: 5px;\n  background: #BA7517;\n  transition: width 0.3s;\n}\n.ss-places__txt {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ss-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ss-act {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #4b5563;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ss-act:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ss-act:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.ss-act--warn:hover {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.ss-act--del:hover {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.ss-empty {\n  text-align: center;\n  padding: 40px 16px;\n  color: #9ca3af;\n}\n.ss-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ss-empty p {\n  font-size: 13px;\n}\n.ss-pager {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 14px;\n  border-top: 1px solid #e5e7eb;\n}\n.ss-pager__btn {\n  min-width: 28px;\n  height: 28px;\n  padding: 0 8px;\n  font-size: 12px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ss-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ss-pager__btn.active {\n  background: #BA7517;\n  border-color: #BA7517;\n  color: #fff;\n}\n.ss-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sw-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.sw-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.sw-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.sw-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #FAEEDA;\n  color: #BA7517;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sw-head__text {\n  flex: 1;\n}\n.sw-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.sw-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.sw-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.sw-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.sw-stepper {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.sw-step {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.sw-step__circle {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.sw-step__circle.active {\n  background: #BA7517;\n  color: #fff;\n  border-color: #BA7517;\n}\n.sw-step__circle.done {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.sw-step__label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.sw-step__label.active {\n  color: #BA7517;\n}\n.sw-step__label.done {\n  color: #3B6D11;\n}\n.sw-step__line {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.sw-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.sw-body::-webkit-scrollbar {\n  width: 4px;\n}\n.sw-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sw-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.sw-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.sw-field--full {\n  grid-column: 1/-1;\n}\n.sw-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.sw-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.sw-req {\n  color: #E24B4A;\n}\n.sw-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.sw-input:focus {\n  border-color: #BA7517;\n  box-shadow: 0 0 0 2px #FAEEDA;\n}\n.sw-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.sw-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.sw-mode-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.sw-mode-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sw-mode-card__head {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-bottom: 4px;\n}\n.sw-mode-card__head i {\n  font-size: 17px;\n  color: #9ca3af;\n}\n.sw-mode-card__title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.sw-mode-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  line-height: 1.3;\n}\n.sw-mode-card:hover {\n  border-color: #9ca3af;\n}\n.sw-mode-card.on {\n  border-color: #BA7517;\n  background: #FAEEDA;\n}\n.sw-mode-card.on .sw-mode-card__head i {\n  color: #854F0B;\n}\n.sw-mode-card.on .sw-mode-card__title {\n  color: #633806;\n}\n.sw-location-block {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.sw-lb-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.sw-lb-row:last-child {\n  border-bottom: none;\n}\n.sw-lb-row i {\n  font-size: 15px;\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.sw-lb-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  font-family: inherit;\n}\n.sw-lb-input::placeholder {\n  color: #9ca3af;\n}\n.sw-lb-input[readonly] {\n  color: #4b5563;\n  cursor: default;\n}\n.sw-cal {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.sw-cal__head {\n  display: flex;\n  align-items: center;\n  padding: 9px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n}\n.sw-cal__month {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  flex: 1;\n  text-transform: capitalize;\n}\n.sw-cal__nav {\n  display: flex;\n  gap: 4px;\n}\n.sw-cal__nav-btn {\n  width: 24px;\n  height: 24px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  color: #4b5563;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.12s;\n}\n.sw-cal__nav-btn:hover {\n  background: #f3f4f6;\n}\n.sw-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  padding: 8px;\n  gap: 2px;\n}\n.sw-cal__dow {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: center;\n  padding: 4px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.sw-cal__day {\n  font-size: 12px;\n  text-align: center;\n  padding: 5px 2px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #4b5563;\n  transition: all 0.12s;\n  position: relative;\n}\n.sw-cal__day:hover:not(.sw-cal__day--empty):not(.sw-cal__day--past) {\n  background: #f3f4f6;\n}\n.sw-cal__day--empty {\n  visibility: hidden;\n  cursor: default;\n  pointer-events: none;\n}\n.sw-cal__day--past {\n  color: #e5e7eb;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.sw-cal__day--today {\n  font-weight: 600;\n  color: #111827;\n}\n.sw-cal__day--has::after {\n  content: "";\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #BA7517;\n  position: absolute;\n  bottom: 2px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.sw-cal__day--sel {\n  background: #BA7517;\n  color: #fff;\n  font-weight: 600;\n}\n.sw-time-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.sw-time-wrap:focus-within {\n  border-color: #BA7517;\n  box-shadow: 0 0 0 2px #FAEEDA;\n}\n.sw-time-wrap i {\n  font-size: 15px;\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.sw-time-wrap input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  font-family: inherit;\n  width: 100%;\n}\n.sw-duration-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  background: #f9fafb;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #4b5563;\n  margin-bottom: 12px;\n}\n.sw-duration-badge i {\n  font-size: 14px;\n  color: #9ca3af;\n}\n.sw-duration-badge strong {\n  color: #111827;\n}\n.sw-cap-vis {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding-top: 6px;\n}\n.sw-cap-bar {\n  height: 6px;\n  background: #f3f4f6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.sw-cap-fill {\n  height: 100%;\n  border-radius: 6px;\n  background: #BA7517;\n  transition: width 0.3s;\n}\n.sw-participants-block {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.sw-pb-head {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n}\n.sw-pb-title {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n  flex: 1;\n}\n.sw-pb-count {\n  font-size: 12px;\n  font-weight: 500;\n  color: #633806;\n  background: #FAEEDA;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.sw-pb-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.sw-pb-search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.sw-pb-search input {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  outline: none;\n  color: #111827;\n  font-family: inherit;\n  flex: 1;\n}\n.sw-pb-list {\n  max-height: 160px;\n  overflow-y: auto;\n}\n.sw-pb-list::-webkit-scrollbar {\n  width: 3px;\n}\n.sw-pb-list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.sw-pb-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.sw-pb-item:last-child {\n  border-bottom: none;\n}\n.sw-pb-item:hover,\n.sw-pb-item.sel {\n  background: #FAEEDA;\n}\n.sw-pb-av {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #FAEEDA;\n  color: #633806;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.sw-pb-info {\n  flex: 1;\n}\n.sw-pb-name {\n  font-size: 12px;\n  color: #111827;\n}\n.sw-pb-role {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.sw-pb-empty {\n  padding: 14px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.sw-pb-chk {\n  width: 17px;\n  height: 17px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  flex-shrink: 0;\n}\n.sw-pb-chk.on {\n  background: #BA7517;\n  border-color: #BA7517;\n  color: #fff;\n}\n.sw-recap {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-top: 4px;\n}\n.sw-recap__label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.sw-recap__row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.sw-recap__row:last-child {\n  border-bottom: none;\n}\n.sw-rl {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.sw-rv {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.sw-rv-mode {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.sw-rv-mode[data-t=presentiel] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.sw-rv-mode[data-t=distanciel] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.sw-rv-mode[data-t=hybride] {\n  background: #E1F5EE;\n  color: #085041;\n}\n.sw-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.sw-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.sw-foot__info {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.sw-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.sw-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.sw-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #BA7517;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.sw-btn-primary i {\n  font-size: 13px;\n}\n.sw-btn-primary:hover {\n  opacity: 0.9;\n}\n.sw-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sw-btn-success {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.sw-btn-success i {\n  font-size: 13px;\n}\n.sw-btn-success:hover {\n  opacity: 0.9;\n}\n.sw-btn-success:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ss-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sw-mode-grid {\n    grid-template-columns: 1fr;\n  }\n  .sw-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=adminrh-session.component.css.map */\n'] }]
  }], () => [{ type: SessionFormationService }, { type: FormationService }, { type: UserService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhSessionComponent, { className: "AdminrhSessionComponent", filePath: "src/app/features/adminrh/adminrh-session/adminrh-session.component.ts", lineNumber: 16 });
})();
export {
  AdminrhSessionComponent
};
//# sourceMappingURL=chunk-CRPYJVD4.js.map
