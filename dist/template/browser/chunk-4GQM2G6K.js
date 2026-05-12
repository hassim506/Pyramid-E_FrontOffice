import {
  TicketService
} from "./chunk-BNBKM6MH.js";
import {
  AuthService
} from "./chunk-REZZRIDN.js";
import "./chunk-FKX6UC3I.js";
import {
  routes
} from "./chunk-W6FAPSPW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-AK2M3J6O.js";
import "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-3IMMP55I.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
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
} from "./chunk-UPBSS6WA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-tickets/instructor-tickets.component.ts
var _c0 = () => [];
function InstructorTicketsComponent_div_35_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.submitError);
  }
}
function InstructorTicketsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275text(2, "Signaler un probl\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InstructorTicketsComponent_div_35_div_3_Template, 2, 1, "div", 36);
    \u0275\u0275elementStart(4, "div", 37)(5, "div", 38)(6, "label", 39);
    \u0275\u0275text(7, "Sujet ");
    \u0275\u0275elementStart(8, "span", 40);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorTicketsComponent_div_35_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newTicket.sujet, $event) || (ctx_r1.newTicket.sujet = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 37)(12, "div", 42)(13, "label", 39);
    \u0275\u0275text(14, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 43);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorTicketsComponent_div_35_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newTicket.categorie, $event) || (ctx_r1.newTicket.categorie = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 44);
    \u0275\u0275text(17, "Technique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 45);
    \u0275\u0275text(19, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 46);
    \u0275\u0275text(21, "Compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 47);
    \u0275\u0275text(23, "Acc\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 48);
    \u0275\u0275text(25, "Bug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 49);
    \u0275\u0275text(27, "Autre");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 42)(29, "label", 39);
    \u0275\u0275text(30, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 43);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorTicketsComponent_div_35_Template_select_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newTicket.priorite, $event) || (ctx_r1.newTicket.priorite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(32, "option", 50);
    \u0275\u0275text(33, "Basse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 51);
    \u0275\u0275text(35, "Moyenne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 52);
    \u0275\u0275text(37, "Haute");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 53);
    \u0275\u0275text(39, "Critique");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 37)(41, "div", 38)(42, "label", 39);
    \u0275\u0275text(43, "Description ");
    \u0275\u0275elementStart(44, "span", 40);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "textarea", 54);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorTicketsComponent_div_35_Template_textarea_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newTicket.description, $event) || (ctx_r1.newTicket.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 55)(48, "button", 56);
    \u0275\u0275listener("click", function InstructorTicketsComponent_div_35_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateForm());
    });
    \u0275\u0275text(49, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 57);
    \u0275\u0275listener("click", function InstructorTicketsComponent_div_35_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.soumettre());
    });
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.submitError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTicket.sujet);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTicket.categorie);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTicket.priorite);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTicket.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting ? "Envoi\u2026" : "Envoyer le signalement", " ");
  }
}
function InstructorTicketsComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function InstructorTicketsComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucun ticket trouv\xE9.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorTicketsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function InstructorTicketsComponent_div_56_Template_div_click_0_listener() {
      const t_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectTicket(t_r4));
    });
    \u0275\u0275elementStart(1, "div", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63)(4, "div", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 65);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 66)(9, "span", 67);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 67);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 68)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", (ctx_r1.selectedTicket == null ? null : ctx_r1.selectedTicket.id) === t_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(t_r4.createur == null ? null : t_r4.createur.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.sujet);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getSClass(t_r4.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getSLabel(t_r4.statut));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getPClass(t_r4.priorite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getPLabel(t_r4.priorite));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4.categorie);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", t_r4.nombre_reponses, " r\xE9p.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", \u0275\u0275pipeBind2(20, 12, t_r4.created_at, "dd/MM/yyyy"));
  }
}
function InstructorTicketsComponent_div_57_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function InstructorTicketsComponent_div_57_button_6_Template_button_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r7 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7);
  }
}
function InstructorTicketsComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71)(4, "button", 72);
    \u0275\u0275listener("click", function InstructorTicketsComponent_div_57_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InstructorTicketsComponent_div_57_button_6_Template, 2, 3, "button", 74);
    \u0275\u0275elementStart(7, "button", 72);
    \u0275\u0275listener("click", function InstructorTicketsComponent_div_57_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 75);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.totalItems, " ticket", ctx_r1.totalItems > 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function InstructorTicketsComponent_div_58_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 98)(4, "div", 99);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 100);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 101);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(m_r9.auteur == null ? null : m_r9.auteur.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r9.auteur == null ? null : m_r9.auteur.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r9.contenu);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 4, m_r9.created_at, "dd/MM/yyyy HH:mm"));
  }
}
function InstructorTicketsComponent_div_58_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275text(1, "Aucun message pour l'instant.");
    \u0275\u0275elementEnd();
  }
}
function InstructorTicketsComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "div", 79)(3, "div", 80)(4, "div", 81);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 82);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 83)(9, "span", 67);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 67);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 56);
    \u0275\u0275listener("click", function InstructorTicketsComponent_div_58_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275element(14, "i", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 85)(16, "div", 86)(17, "span")(18, "b");
    \u0275\u0275text(19, "Agent:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span")(22, "b");
    \u0275\u0275text(23, "Cat\xE9gorie:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span")(26, "b");
    \u0275\u0275text(27, "Cr\xE9\xE9 le:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 87);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 88);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 89);
    \u0275\u0275template(35, InstructorTicketsComponent_div_58_div_35_Template, 11, 7, "div", 90)(36, InstructorTicketsComponent_div_58_div_36_Template, 2, 0, "div", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 92)(38, "textarea", 93);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorTicketsComponent_div_58_Template_textarea_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newMessage, $event) || (ctx_r1.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 94);
    \u0275\u0275listener("click", function InstructorTicketsComponent_div_58_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.envoyerMessage());
    });
    \u0275\u0275element(40, "i", 95);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedTicket.sujet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedTicket.reference);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getSClass(ctx_r1.selectedTicket.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getSLabel(ctx_r1.selectedTicket.statut));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getPClass(ctx_r1.selectedTicket.priorite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getPLabel(ctx_r1.selectedTicket.priorite));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedTicket.agent_assigne == null ? null : ctx_r1.selectedTicket.agent_assigne.name) || "Non assign\xE9");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedTicket.categorie);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 15, ctx_r1.selectedTicket.created_at, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedTicket.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Conversation (", ctx_r1.selectedTicket.nombre_reponses || 0, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedTicket.messages || \u0275\u0275pureFunction0(18, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.selectedTicket.messages == null ? null : ctx_r1.selectedTicket.messages.length));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.sendingMessage || !ctx_r1.newMessage.trim());
  }
}
var InstructorTicketsComponent = class _InstructorTicketsComponent {
  ticketService;
  authService;
  routes = routes;
  tickets = [];
  selectedTicket = null;
  loading = false;
  showCreateForm = false;
  stats = { total: 0, enCours: 0, resolu: 0 };
  searchQuery = "";
  filterStatut = "";
  // Pagination
  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  pageSize = 15;
  newTicket = { sujet: "", description: "", categorie: "technique", priorite: "moyenne", type: "incident" };
  submitting = false;
  submitError = "";
  newMessage = "";
  sendingMessage = false;
  searchTimeout;
  currentUser;
  constructor(ticketService, authService) {
    this.ticketService = ticketService;
    this.authService = authService;
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.loadTickets();
  }
  loadTickets() {
    this.loading = true;
    const p = { page: this.currentPage, par_page: this.pageSize };
    if (this.currentUser?.id)
      p["user_id"] = this.currentUser.id;
    if (this.filterStatut)
      p["statut"] = this.filterStatut;
    if (this.searchQuery)
      p["search"] = this.searchQuery;
    this.ticketService.getTickets(p).subscribe({
      next: (res) => {
        const paginated = res.data;
        this.tickets = paginated.data || [];
        this.totalItems = paginated.total || 0;
        this.totalPages = paginated.last_page || 1;
        this.currentPage = paginated.current_page || 1;
        this.stats.total = this.totalItems;
        this.stats.enCours = this.tickets.filter((t) => ["ouvert", "en_cours", "en_attente"].includes(t.statut)).length;
        this.stats.resolu = this.tickets.filter((t) => t.statut === "resolu").length;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.loadTickets();
  }
  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.currentPage = 1;
      this.loadTickets();
    }, 400);
  }
  applyFilter() {
    this.currentPage = 1;
    this.loadTickets();
  }
  get pageNumbers() {
    const pages = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++)
      pages.push(i);
    return pages;
  }
  selectTicket(ticket) {
    if (this.selectedTicket?.id === ticket.id) {
      this.selectedTicket = null;
      return;
    }
    this.showCreateForm = false;
    this.ticketService.getTicketById(ticket.id).subscribe({
      next: (res) => {
        this.selectedTicket = res.data || res;
      },
      error: () => {
      }
    });
  }
  closeDetail() {
    this.selectedTicket = null;
  }
  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
    if (this.showCreateForm) {
      this.selectedTicket = null;
      this.submitError = "";
    }
  }
  soumettre() {
    if (!this.newTicket.sujet.trim()) {
      this.submitError = "Le sujet est obligatoire.";
      return;
    }
    if (this.newTicket.description.trim().length < 10) {
      this.submitError = "La description doit contenir au moins 10 caract\xE8res.";
      return;
    }
    this.submitting = true;
    this.submitError = "";
    this.ticketService.createTicket(this.newTicket).subscribe({
      next: () => {
        this.submitting = false;
        this.showCreateForm = false;
        this.newTicket = { sujet: "", description: "", categorie: "technique", priorite: "moyenne", type: "incident" };
        this.currentPage = 1;
        this.loadTickets();
      },
      error: (err) => {
        this.submitting = false;
        const errors = err?.error?.errors;
        if (errors) {
          this.submitError = Object.values(errors).flat().join(" ");
        } else {
          this.submitError = err?.error?.message || "Une erreur est survenue.";
        }
      }
    });
  }
  envoyerMessage() {
    if (!this.newMessage.trim() || !this.selectedTicket)
      return;
    this.sendingMessage = true;
    const texte = this.newMessage;
    this.ticketService.ajouterMessage(this.selectedTicket.id, { contenu: texte }).subscribe({
      next: (res) => {
        const msg = res.data || { id: Date.now(), contenu: texte, created_at: (/* @__PURE__ */ new Date()).toISOString(), auteur: { name: "Moi", id: 0, email: "" } };
        if (this.selectedTicket) {
          this.selectedTicket = __spreadProps(__spreadValues({}, this.selectedTicket), { messages: [...this.selectedTicket.messages || [], msg] });
        }
        this.newMessage = "";
        this.sendingMessage = false;
      },
      error: () => {
        this.sendingMessage = false;
      }
    });
  }
  getInitials(name) {
    if (!name)
      return "??";
    return name.split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase();
  }
  getPClass(p) {
    const m = { basse: "p-basse", moyenne: "p-moyenne", haute: "p-haute", critique: "p-critique" };
    return m[p] || "p-basse";
  }
  getSClass(s) {
    const m = { ouvert: "s-ouvert", en_cours: "s-encours", en_attente: "s-attente", resolu: "s-resolu", ferme: "s-ferme", annule: "s-annule" };
    return m[s] || "s-ouvert";
  }
  getSLabel(s) {
    const m = { ouvert: "Ouvert", en_cours: "En cours", en_attente: "En attente", resolu: "R\xE9solu", ferme: "Ferm\xE9", annule: "Annul\xE9" };
    return m[s] || s;
  }
  getPLabel(p) {
    const m = { basse: "Basse", moyenne: "Moyenne", haute: "Haute", critique: "Critique" };
    return m[p] || p;
  }
  static \u0275fac = function InstructorTicketsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorTicketsComponent)(\u0275\u0275directiveInject(TicketService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorTicketsComponent, selectors: [["app-instructor-tickets"]], decls: 59, vars: 14, consts: [[1, "tk-page"], [1, "tk-header"], [1, "tk-header__title"], [1, "tk-header__sub"], ["type", "button", 1, "tk-new-btn", 3, "click"], [1, "isax", "isax-add-circle"], [1, "kpi-row"], [1, "kpi"], [1, "kpi__icon", "ki-total"], [1, "isax", "isax-ticket"], [1, "kpi__val"], [1, "kpi__lbl"], [1, "kpi__icon", "ki-open"], [1, "isax", "isax-record-circle"], [1, "kpi__icon", "ki-done"], [1, "isax", "isax-tick-circle"], ["class", "tk-form-card", 4, "ngIf"], [1, "tk-content"], [1, "tk-list-wrap"], [1, "tk-toolbar"], ["type", "text", "placeholder", "Rechercher\u2026", 1, "tk-search", 3, "ngModelChange", "ngModel"], [1, "tk-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "ouvert"], ["value", "en_cours"], ["value", "en_attente"], ["value", "resolu"], ["value", "ferme"], [1, "tk-list"], ["class", "tk-loader", 4, "ngIf"], ["class", "tk-empty", 4, "ngIf"], ["class", "tk-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "tk-pagination", 4, "ngIf"], ["class", "tk-detail-wrap", 4, "ngIf"], [1, "tk-form-card"], [1, "tk-form-card__title"], ["class", "tk-form-err", 4, "ngIf"], [1, "form-row"], [1, "form-group", "full"], [1, "form-label"], [1, "req"], ["type", "text", "placeholder", "D\xE9crivez bri\xE8vement le probl\xE8me\u2026", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-group"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "technique"], ["value", "formation"], ["value", "compte"], ["value", "acces"], ["value", "bug"], ["value", "autre"], ["value", "basse"], ["value", "moyenne"], ["value", "haute"], ["value", "critique"], ["rows", "4", "placeholder", "Expliquez le probl\xE8me en d\xE9tail, \xE9tapes pour reproduire\u2026", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "act-btn", 3, "click"], ["type", "button", 1, "act-btn", "primary", 3, "click", "disabled"], [1, "tk-form-err"], [1, "tk-loader"], [1, "tk-empty"], [1, "tk-item", 3, "click"], [1, "tk-av"], [1, "tk-info"], [1, "tk-ref"], [1, "tk-subj"], [1, "tk-badges"], [1, "badge", 3, "ngClass"], [1, "tk-meta"], [1, "tk-pagination"], [1, "pg-info"], [1, "pg-controls"], ["type", "button", 1, "pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "pg-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-2"], ["type", "button", 1, "pg-btn", 3, "click"], [1, "tk-detail-wrap"], [1, "tk-detail"], [1, "tk-detail__head"], [1, "detail-info"], [1, "detail-title"], [1, "detail-ref"], [1, "detail-badges"], [1, "isax", "isax-close-circle"], [1, "tk-detail__body"], [1, "detail-meta"], [1, "tk-detail__desc"], [1, "tk-detail__thread-title"], [1, "tk-detail__thread"], ["class", "msg", 4, "ngFor", "ngForOf"], ["class", "msg-empty", 4, "ngIf"], [1, "tk-detail__reply"], ["rows", "2", "placeholder", "Ajouter un message\u2026", 1, "tk-detail__reply-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "send-btn", 3, "click", "disabled"], [1, "isax", "isax-send-2"], [1, "msg"], [1, "msg__av"], [1, "msg__bubble"], [1, "msg__author"], [1, "msg__text"], [1, "msg__time"], [1, "msg-empty"]], template: function InstructorTicketsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
      \u0275\u0275text(4, "Mes tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275text(6, "Signalez un probl\xE8me ou suivez vos demandes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function InstructorTicketsComponent_Template_button_click_7_listener() {
        return ctx.toggleCreateForm();
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8);
      \u0275\u0275element(13, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div")(15, "div", 10);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275text(18, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 7)(20, "div", 12);
      \u0275\u0275element(21, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div")(23, "div", 10);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 11);
      \u0275\u0275text(26, "En cours");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 7)(28, "div", 14);
      \u0275\u0275element(29, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div")(31, "div", 10);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 11);
      \u0275\u0275text(34, "R\xE9solus");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(35, InstructorTicketsComponent_div_35_Template, 52, 7, "div", 16);
      \u0275\u0275elementStart(36, "div", 17)(37, "div", 18)(38, "div", 19)(39, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorTicketsComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InstructorTicketsComponent_Template_input_ngModelChange_39_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorTicketsComponent_Template_select_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatut, $event) || (ctx.filterStatut = $event);
        return $event;
      });
      \u0275\u0275listener("change", function InstructorTicketsComponent_Template_select_change_40_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(41, "option", 22);
      \u0275\u0275text(42, "Tous statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 23);
      \u0275\u0275text(44, "Ouvert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 24);
      \u0275\u0275text(46, "En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option", 25);
      \u0275\u0275text(48, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "option", 26);
      \u0275\u0275text(50, "R\xE9solu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 27);
      \u0275\u0275text(52, "Ferm\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 28);
      \u0275\u0275template(54, InstructorTicketsComponent_div_54_Template, 2, 0, "div", 29)(55, InstructorTicketsComponent_div_55_Template, 4, 0, "div", 30)(56, InstructorTicketsComponent_div_56_Template, 21, 15, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, InstructorTicketsComponent_div_57_Template, 9, 5, "div", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, InstructorTicketsComponent_div_58_Template, 41, 19, "div", 33);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.showCreateForm ? "Annuler" : "Signaler un probl\xE8me", " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.stats.total);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.enCours);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.resolu);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showCreateForm);
      \u0275\u0275advance();
      \u0275\u0275classProp("with-detail", ctx.selectedTicket);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatut);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.tickets.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.tickets);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedTicket);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: [`

.tk-page[_ngcontent-%COMP%] {
  background: #F8FAFC;
  min-height: 100vh;
  padding: 24px;
}
.tk-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.tk-header__title[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 600;
  color: #1E293B;
}
.tk-header__sub[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #64748B;
  margin-top: 2px;
}
.tk-new-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  background: #0F766E;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.1s;
}
.tk-new-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 16px;
}
.tk-new-btn[_ngcontent-%COMP%]:hover {
  background: rgb(10.3984962406, 81.8015037594, 76.2556390977);
}
.kpi-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 20px;
}
.kpi[_ngcontent-%COMP%] {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.kpi__icon[_ngcontent-%COMP%] {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.kpi__icon.ki-total[_ngcontent-%COMP%] {
  background: #F0FDFA;
  color: #0F766E;
}
.kpi__icon.ki-open[_ngcontent-%COMP%] {
  background: #FEF3C7;
  color: #B45309;
}
.kpi__icon.ki-done[_ngcontent-%COMP%] {
  background: #D1FAE5;
  color: #065F46;
}
.kpi__val[_ngcontent-%COMP%] {
  font-size: 22px;
  font-weight: 700;
  color: #1E293B;
  line-height: 1;
}
.kpi__lbl[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #64748B;
  margin-top: 2px;
}
.tk-form-card[_ngcontent-%COMP%] {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}
.tk-form-card__title[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 16px;
}
.tk-form-err[_ngcontent-%COMP%] {
  background: #FEE2E2;
  color: #991B1B;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 13px;
  margin-bottom: 12px;
}
.form-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}
.form-group[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.form-group.full[_ngcontent-%COMP%] {
  flex: 0 0 100%;
}
.form-label[_ngcontent-%COMP%] {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #1E293B;
  margin-bottom: 5px;
}
.req[_ngcontent-%COMP%] {
  color: #DC2626;
}
.form-input[_ngcontent-%COMP%], 
.form-select[_ngcontent-%COMP%], 
.form-textarea[_ngcontent-%COMP%] {
  width: 100%;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 13px;
  color: #1E293B;
  background: #fff;
  outline: none;
  font-family: inherit;
}
.form-input[_ngcontent-%COMP%]:focus, 
.form-select[_ngcontent-%COMP%]:focus, 
.form-textarea[_ngcontent-%COMP%]:focus {
  border-color: #0F766E;
}
.form-textarea[_ngcontent-%COMP%] {
  resize: vertical;
}
.form-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 4px;
}
.tk-content[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
}
.tk-content.with-detail[_ngcontent-%COMP%]   .tk-list-wrap[_ngcontent-%COMP%] {
  flex: 0 0 380px;
}
.tk-list-wrap[_ngcontent-%COMP%] {
  flex: 1;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 300px);
}
.tk-detail-wrap[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 300px);
}
.tk-toolbar[_ngcontent-%COMP%] {
  padding: 12px 14px;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.tk-search[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 100px;
  height: 34px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 0 10px 0 32px;
  font-size: 13px;
  color: #1E293B;
  background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E") no-repeat 10px center;
  outline: none;
}
.tk-search[_ngcontent-%COMP%]:focus {
  border-color: #0F766E;
}
.tk-select[_ngcontent-%COMP%] {
  height: 34px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 0 8px;
  font-size: 12px;
  color: #1E293B;
  background: #fff;
  outline: none;
  cursor: pointer;
}
.tk-list[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
}
.tk-list[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 4px;
}
.tk-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.tk-item[_ngcontent-%COMP%] {
  padding: 12px 14px;
  border-bottom: 1px solid #E2E8F0;
  cursor: pointer;
  transition: background 0.1s;
  display: flex;
  gap: 10px;
  align-items: flex-start;
}
.tk-item[_ngcontent-%COMP%]:hover {
  background: #F8FAFC;
}
.tk-item.selected[_ngcontent-%COMP%] {
  background: #F0FDFA;
  border-left: 3px solid #0F766E;
}
.tk-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.tk-av[_ngcontent-%COMP%] {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #0F766E;
  color: #CCFBF1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  flex-shrink: 0;
}
.tk-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.tk-ref[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #64748B;
  margin-bottom: 2px;
}
.tk-subj[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 500;
  color: #1E293B;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tk-meta[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #64748B;
  margin-top: 3px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.tk-badges[_ngcontent-%COMP%] {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 5px;
}
.tk-loader[_ngcontent-%COMP%] {
  padding: 40px;
  text-align: center;
  color: #64748B;
  font-size: 13px;
}
.tk-empty[_ngcontent-%COMP%] {
  padding: 40px;
  text-align: center;
  color: #64748B;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.tk-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 32px;
  opacity: 0.3;
}
.tk-detail[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.tk-detail__head[_ngcontent-%COMP%] {
  padding: 14px 16px;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.tk-detail__body[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}
.tk-detail__body[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 4px;
}
.tk-detail__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.tk-detail__desc[_ngcontent-%COMP%] {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 13px;
  color: #1E293B;
  line-height: 1.6;
  margin-bottom: 16px;
}
.tk-detail__thread-title[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}
.tk-detail__thread[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.tk-detail__reply[_ngcontent-%COMP%] {
  padding: 12px 16px;
  border-top: 1px solid #E2E8F0;
  display: flex;
  gap: 8px;
}
.tk-detail__reply-input[_ngcontent-%COMP%] {
  flex: 1;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  resize: none;
  outline: none;
  font-family: inherit;
}
.tk-detail__reply-input[_ngcontent-%COMP%]:focus {
  border-color: #0F766E;
}
.detail-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.detail-title[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 600;
  color: #1E293B;
}
.detail-ref[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #64748B;
  margin-top: 2px;
}
.detail-badges[_ngcontent-%COMP%] {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 6px;
}
.detail-meta[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 12px;
  font-size: 12px;
  color: #64748B;
}
.msg[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
}
.msg__av[_ngcontent-%COMP%] {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #0F766E;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
  flex-shrink: 0;
}
.msg__bubble[_ngcontent-%COMP%] {
  background: #F0FDFA;
  border-radius: 0 8px 8px 8px;
  padding: 8px 12px;
  max-width: 90%;
}
.msg__author[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  color: #1E293B;
}
.msg__text[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #1E293B;
  margin-top: 2px;
  line-height: 1.5;
}
.msg__time[_ngcontent-%COMP%] {
  font-size: 10px;
  color: #64748B;
  margin-top: 4px;
}
.msg-empty[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #94A3B8;
}
.act-btn[_ngcontent-%COMP%] {
  height: 30px;
  padding: 0 12px;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  background: #fff;
  color: #1E293B;
  transition: background 0.1s;
}
.act-btn[_ngcontent-%COMP%]:hover {
  background: #F1F5F9;
}
.act-btn.primary[_ngcontent-%COMP%] {
  background: #0F766E;
  color: #fff;
  border-color: #0F766E;
}
.act-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.send-btn[_ngcontent-%COMP%] {
  height: 36px;
  width: 36px;
  border: none;
  border-radius: 8px;
  background: #0F766E;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.send-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.s-ouvert[_ngcontent-%COMP%] {
  background: #FEF3C7;
  color: #92400E;
}
.s-encours[_ngcontent-%COMP%] {
  background: #DBEAFE;
  color: #1E40AF;
}
.s-attente[_ngcontent-%COMP%] {
  background: #F3F4F6;
  color: #374151;
}
.s-resolu[_ngcontent-%COMP%] {
  background: #D1FAE5;
  color: #065F46;
}
.s-ferme[_ngcontent-%COMP%] {
  background: #F1F5F9;
  color: #475569;
}
.s-annule[_ngcontent-%COMP%] {
  background: #FEE2E2;
  color: #991B1B;
}
.p-basse[_ngcontent-%COMP%] {
  background: #F0FDF4;
  color: #166534;
}
.p-moyenne[_ngcontent-%COMP%] {
  background: #FEF9C3;
  color: #854D0E;
}
.p-haute[_ngcontent-%COMP%] {
  background: #FFF7ED;
  color: #9A3412;
}
.p-critique[_ngcontent-%COMP%] {
  background: #FEE2E2;
  color: #991B1B;
}
.badge[_ngcontent-%COMP%] {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 20px;
}
.tk-pagination[_ngcontent-%COMP%] {
  padding: 10px 14px;
  border-top: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.pg-info[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #64748B;
}
.pg-controls[_ngcontent-%COMP%] {
  display: flex;
  gap: 4px;
}
.pg-btn[_ngcontent-%COMP%] {
  min-width: 30px;
  height: 30px;
  padding: 0 6px;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  background: #fff;
  color: #1E293B;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.1s;
}
.pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #F0FDFA;
}
.pg-btn.active[_ngcontent-%COMP%] {
  background: #0F766E;
  color: #fff;
  border-color: #0F766E;
}
.pg-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
/*# sourceMappingURL=instructor-tickets.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorTicketsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-tickets", imports: [CommonModule, FormsModule], template: `<div class="tk-page">

  <!-- HEADER -->
  <div class="tk-header">
    <div>
      <div class="tk-header__title">Mes tickets</div>
      <div class="tk-header__sub">Signalez un probl\xE8me ou suivez vos demandes</div>
    </div>
    <button type="button" class="tk-new-btn" (click)="toggleCreateForm()">
      <i class="isax isax-add-circle"></i>
      {{ showCreateForm ? 'Annuler' : 'Signaler un probl\xE8me' }}
    </button>
  </div>

  <!-- KPI -->
  <div class="kpi-row">
    <div class="kpi">
      <div class="kpi__icon ki-total"><i class="isax isax-ticket"></i></div>
      <div><div class="kpi__val">{{ stats.total }}</div><div class="kpi__lbl">Total</div></div>
    </div>
    <div class="kpi">
      <div class="kpi__icon ki-open"><i class="isax isax-record-circle"></i></div>
      <div><div class="kpi__val">{{ stats.enCours }}</div><div class="kpi__lbl">En cours</div></div>
    </div>
    <div class="kpi">
      <div class="kpi__icon ki-done"><i class="isax isax-tick-circle"></i></div>
      <div><div class="kpi__val">{{ stats.resolu }}</div><div class="kpi__lbl">R\xE9solus</div></div>
    </div>
  </div>

  <!-- CREATE FORM -->
  <div class="tk-form-card" *ngIf="showCreateForm">
    <div class="tk-form-card__title">Signaler un probl\xE8me</div>
    <div class="tk-form-err" *ngIf="submitError">{{ submitError }}</div>

    <div class="form-row">
      <div class="form-group full">
        <label class="form-label">Sujet <span class="req">*</span></label>
        <input type="text" class="form-input" placeholder="D\xE9crivez bri\xE8vement le probl\xE8me\u2026"
               [(ngModel)]="newTicket.sujet">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Cat\xE9gorie</label>
        <select class="form-select" [(ngModel)]="newTicket.categorie">
          <option value="technique">Technique</option>
          <option value="formation">Formation</option>
          <option value="compte">Compte</option>
          <option value="acces">Acc\xE8s</option>
          <option value="bug">Bug</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Priorit\xE9</label>
        <select class="form-select" [(ngModel)]="newTicket.priorite">
          <option value="basse">Basse</option>
          <option value="moyenne">Moyenne</option>
          <option value="haute">Haute</option>
          <option value="critique">Critique</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group full">
        <label class="form-label">Description <span class="req">*</span></label>
        <textarea class="form-textarea" rows="4"
                  placeholder="Expliquez le probl\xE8me en d\xE9tail, \xE9tapes pour reproduire\u2026"
                  [(ngModel)]="newTicket.description"></textarea>
      </div>
    </div>
    <div class="form-actions">
      <button type="button" class="act-btn" (click)="toggleCreateForm()">Annuler</button>
      <button type="button" class="act-btn primary" [disabled]="submitting"
              (click)="soumettre()">
        {{ submitting ? 'Envoi\u2026' : 'Envoyer le signalement' }}
      </button>
    </div>
  </div>

  <!-- CONTENT -->
  <div class="tk-content" [class.with-detail]="selectedTicket">

    <!-- LIST -->
    <div class="tk-list-wrap">
      <div class="tk-toolbar">
        <input type="text" class="tk-search" placeholder="Rechercher\u2026"
               [(ngModel)]="searchQuery" (ngModelChange)="onSearch()">
        <select class="tk-select" [(ngModel)]="filterStatut" (change)="applyFilter()">
          <option value="">Tous statuts</option>
          <option value="ouvert">Ouvert</option>
          <option value="en_cours">En cours</option>
          <option value="en_attente">En attente</option>
          <option value="resolu">R\xE9solu</option>
          <option value="ferme">Ferm\xE9</option>
        </select>
      </div>

      <div class="tk-list">
        <div *ngIf="loading" class="tk-loader">Chargement\u2026</div>
        <div *ngIf="!loading && tickets.length === 0" class="tk-empty">
          <i class="isax isax-ticket"></i>
          <span>Aucun ticket trouv\xE9.</span>
        </div>
        <div *ngFor="let t of tickets"
             class="tk-item"
             [class.selected]="selectedTicket?.id === t.id"
             (click)="selectTicket(t)">
          <div class="tk-av">{{ getInitials(t.createur?.name) }}</div>
          <div class="tk-info">
            <div class="tk-ref">{{ t.reference }}</div>
            <div class="tk-subj">{{ t.sujet }}</div>
            <div class="tk-badges">
              <span class="badge" [ngClass]="getSClass(t.statut)">{{ getSLabel(t.statut) }}</span>
              <span class="badge" [ngClass]="getPClass(t.priorite)">{{ getPLabel(t.priorite) }}</span>
            </div>
            <div class="tk-meta">
              <span>{{ t.categorie }}</span>
              <span>\xB7 {{ t.nombre_reponses }} r\xE9p.</span>
              <span>\xB7 {{ t.created_at | date:'dd/MM/yyyy' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="tk-pagination" *ngIf="totalPages > 1">
        <span class="pg-info">{{ totalItems }} ticket{{ totalItems > 1 ? 's' : '' }}</span>
        <div class="pg-controls">
          <button type="button" class="pg-btn" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)">
            <i class="isax isax-arrow-left-2"></i>
          </button>
          <button type="button" class="pg-btn" *ngFor="let p of pageNumbers"
                  [class.active]="p === currentPage" (click)="goToPage(p)">{{ p }}</button>
          <button type="button" class="pg-btn" [disabled]="currentPage === totalPages" (click)="goToPage(currentPage + 1)">
            <i class="isax isax-arrow-right-2"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- DETAIL -->
    <div class="tk-detail-wrap" *ngIf="selectedTicket">
      <div class="tk-detail">
        <div class="tk-detail__head">
          <div class="detail-info">
            <div class="detail-title">{{ selectedTicket.sujet }}</div>
            <div class="detail-ref">{{ selectedTicket.reference }}</div>
            <div class="detail-badges">
              <span class="badge" [ngClass]="getSClass(selectedTicket.statut)">{{ getSLabel(selectedTicket.statut) }}</span>
              <span class="badge" [ngClass]="getPClass(selectedTicket.priorite)">{{ getPLabel(selectedTicket.priorite) }}</span>
            </div>
          </div>
          <button type="button" class="act-btn" (click)="closeDetail()">
            <i class="isax isax-close-circle"></i>
          </button>
        </div>

        <div class="tk-detail__body">
          <div class="detail-meta">
            <span><b>Agent:</b> {{ selectedTicket.agent_assigne?.name || 'Non assign\xE9' }}</span>
            <span><b>Cat\xE9gorie:</b> {{ selectedTicket.categorie }}</span>
            <span><b>Cr\xE9\xE9 le:</b> {{ selectedTicket.created_at | date:'dd/MM/yyyy HH:mm' }}</span>
          </div>
          <div class="tk-detail__desc">{{ selectedTicket.description }}</div>

          <div class="tk-detail__thread-title">Conversation ({{ selectedTicket.nombre_reponses || 0 }})</div>
          <div class="tk-detail__thread">
            <div *ngFor="let m of (selectedTicket.messages || [])" class="msg">
              <div class="msg__av">{{ getInitials(m.auteur?.name) }}</div>
              <div class="msg__bubble">
                <div class="msg__author">{{ m.auteur?.name }}</div>
                <div class="msg__text">{{ m.contenu }}</div>
                <div class="msg__time">{{ m.created_at | date:'dd/MM/yyyy HH:mm' }}</div>
              </div>
            </div>
            <div *ngIf="!(selectedTicket.messages?.length)" class="msg-empty">Aucun message pour l'instant.</div>
          </div>
        </div>

        <div class="tk-detail__reply">
          <textarea class="tk-detail__reply-input" rows="2"
                    placeholder="Ajouter un message\u2026"
                    [(ngModel)]="newMessage"></textarea>
          <button type="button" class="send-btn"
                  [disabled]="sendingMessage || !newMessage.trim()"
                  (click)="envoyerMessage()">
            <i class="isax isax-send-2"></i>
          </button>
        </div>
      </div>
    </div>

  </div>
</div>
`, styles: [`/* src/app/features/instructor/instructor-tickets/instructor-tickets.component.scss */
.tk-page {
  background: #F8FAFC;
  min-height: 100vh;
  padding: 24px;
}
.tk-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.tk-header__title {
  font-size: 20px;
  font-weight: 600;
  color: #1E293B;
}
.tk-header__sub {
  font-size: 13px;
  color: #64748B;
  margin-top: 2px;
}
.tk-new-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  background: #0F766E;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.1s;
}
.tk-new-btn i {
  font-size: 16px;
}
.tk-new-btn:hover {
  background: rgb(10.3984962406, 81.8015037594, 76.2556390977);
}
.kpi-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 20px;
}
.kpi {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.kpi__icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.kpi__icon.ki-total {
  background: #F0FDFA;
  color: #0F766E;
}
.kpi__icon.ki-open {
  background: #FEF3C7;
  color: #B45309;
}
.kpi__icon.ki-done {
  background: #D1FAE5;
  color: #065F46;
}
.kpi__val {
  font-size: 22px;
  font-weight: 700;
  color: #1E293B;
  line-height: 1;
}
.kpi__lbl {
  font-size: 12px;
  color: #64748B;
  margin-top: 2px;
}
.tk-form-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}
.tk-form-card__title {
  font-size: 15px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 16px;
}
.tk-form-err {
  background: #FEE2E2;
  color: #991B1B;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 13px;
  margin-bottom: 12px;
}
.form-row {
  display: flex;
  gap: 12px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}
.form-group {
  flex: 1;
  min-width: 0;
}
.form-group.full {
  flex: 0 0 100%;
}
.form-label {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #1E293B;
  margin-bottom: 5px;
}
.req {
  color: #DC2626;
}
.form-input,
.form-select,
.form-textarea {
  width: 100%;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 13px;
  color: #1E293B;
  background: #fff;
  outline: none;
  font-family: inherit;
}
.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: #0F766E;
}
.form-textarea {
  resize: vertical;
}
.form-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 4px;
}
.tk-content {
  display: flex;
  gap: 16px;
}
.tk-content.with-detail .tk-list-wrap {
  flex: 0 0 380px;
}
.tk-list-wrap {
  flex: 1;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 300px);
}
.tk-detail-wrap {
  flex: 1;
  min-width: 0;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 300px);
}
.tk-toolbar {
  padding: 12px 14px;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.tk-search {
  flex: 1;
  min-width: 100px;
  height: 34px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 0 10px 0 32px;
  font-size: 13px;
  color: #1E293B;
  background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E") no-repeat 10px center;
  outline: none;
}
.tk-search:focus {
  border-color: #0F766E;
}
.tk-select {
  height: 34px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 0 8px;
  font-size: 12px;
  color: #1E293B;
  background: #fff;
  outline: none;
  cursor: pointer;
}
.tk-list {
  flex: 1;
  overflow-y: auto;
}
.tk-list::-webkit-scrollbar {
  width: 4px;
}
.tk-list::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.tk-item {
  padding: 12px 14px;
  border-bottom: 1px solid #E2E8F0;
  cursor: pointer;
  transition: background 0.1s;
  display: flex;
  gap: 10px;
  align-items: flex-start;
}
.tk-item:hover {
  background: #F8FAFC;
}
.tk-item.selected {
  background: #F0FDFA;
  border-left: 3px solid #0F766E;
}
.tk-item:last-child {
  border-bottom: none;
}
.tk-av {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #0F766E;
  color: #CCFBF1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  flex-shrink: 0;
}
.tk-info {
  flex: 1;
  min-width: 0;
}
.tk-ref {
  font-size: 11px;
  color: #64748B;
  margin-bottom: 2px;
}
.tk-subj {
  font-size: 13px;
  font-weight: 500;
  color: #1E293B;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tk-meta {
  font-size: 11px;
  color: #64748B;
  margin-top: 3px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.tk-badges {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 5px;
}
.tk-loader {
  padding: 40px;
  text-align: center;
  color: #64748B;
  font-size: 13px;
}
.tk-empty {
  padding: 40px;
  text-align: center;
  color: #64748B;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.tk-empty i {
  font-size: 32px;
  opacity: 0.3;
}
.tk-detail {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.tk-detail__head {
  padding: 14px 16px;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.tk-detail__body {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}
.tk-detail__body::-webkit-scrollbar {
  width: 4px;
}
.tk-detail__body::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
.tk-detail__desc {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 13px;
  color: #1E293B;
  line-height: 1.6;
  margin-bottom: 16px;
}
.tk-detail__thread-title {
  font-size: 12px;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}
.tk-detail__thread {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.tk-detail__reply {
  padding: 12px 16px;
  border-top: 1px solid #E2E8F0;
  display: flex;
  gap: 8px;
}
.tk-detail__reply-input {
  flex: 1;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  resize: none;
  outline: none;
  font-family: inherit;
}
.tk-detail__reply-input:focus {
  border-color: #0F766E;
}
.detail-info {
  flex: 1;
  min-width: 0;
}
.detail-title {
  font-size: 15px;
  font-weight: 600;
  color: #1E293B;
}
.detail-ref {
  font-size: 11px;
  color: #64748B;
  margin-top: 2px;
}
.detail-badges {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 6px;
}
.detail-meta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 12px;
  font-size: 12px;
  color: #64748B;
}
.msg {
  display: flex;
  gap: 8px;
}
.msg__av {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #0F766E;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
  flex-shrink: 0;
}
.msg__bubble {
  background: #F0FDFA;
  border-radius: 0 8px 8px 8px;
  padding: 8px 12px;
  max-width: 90%;
}
.msg__author {
  font-size: 11px;
  font-weight: 600;
  color: #1E293B;
}
.msg__text {
  font-size: 13px;
  color: #1E293B;
  margin-top: 2px;
  line-height: 1.5;
}
.msg__time {
  font-size: 10px;
  color: #64748B;
  margin-top: 4px;
}
.msg-empty {
  font-size: 12px;
  color: #94A3B8;
}
.act-btn {
  height: 30px;
  padding: 0 12px;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  background: #fff;
  color: #1E293B;
  transition: background 0.1s;
}
.act-btn:hover {
  background: #F1F5F9;
}
.act-btn.primary {
  background: #0F766E;
  color: #fff;
  border-color: #0F766E;
}
.act-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.send-btn {
  height: 36px;
  width: 36px;
  border: none;
  border-radius: 8px;
  background: #0F766E;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.s-ouvert {
  background: #FEF3C7;
  color: #92400E;
}
.s-encours {
  background: #DBEAFE;
  color: #1E40AF;
}
.s-attente {
  background: #F3F4F6;
  color: #374151;
}
.s-resolu {
  background: #D1FAE5;
  color: #065F46;
}
.s-ferme {
  background: #F1F5F9;
  color: #475569;
}
.s-annule {
  background: #FEE2E2;
  color: #991B1B;
}
.p-basse {
  background: #F0FDF4;
  color: #166534;
}
.p-moyenne {
  background: #FEF9C3;
  color: #854D0E;
}
.p-haute {
  background: #FFF7ED;
  color: #9A3412;
}
.p-critique {
  background: #FEE2E2;
  color: #991B1B;
}
.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 20px;
}
.tk-pagination {
  padding: 10px 14px;
  border-top: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.pg-info {
  font-size: 12px;
  color: #64748B;
}
.pg-controls {
  display: flex;
  gap: 4px;
}
.pg-btn {
  min-width: 30px;
  height: 30px;
  padding: 0 6px;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  background: #fff;
  color: #1E293B;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.1s;
}
.pg-btn:hover:not(:disabled) {
  background: #F0FDFA;
}
.pg-btn.active {
  background: #0F766E;
  color: #fff;
  border-color: #0F766E;
}
.pg-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
/*# sourceMappingURL=instructor-tickets.component.css.map */
`] }]
  }], () => [{ type: TicketService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorTicketsComponent, { className: "InstructorTicketsComponent", filePath: "src/app/features/instructor/instructor-tickets/instructor-tickets.component.ts", lineNumber: 14 });
})();
export {
  InstructorTicketsComponent
};
//# sourceMappingURL=chunk-4GQM2G6K.js.map
