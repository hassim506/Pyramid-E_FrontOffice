import {
  DemandeFormationService
} from "./chunk-WKEF73QK.js";
import {
  UserService
} from "./chunk-OGJSU6V5.js";
import {
  CertificatService
} from "./chunk-7KDALVVQ.js";
import "./chunk-5RVU2RVV.js";
import "./chunk-FQH4LUZ5.js";
import {
  SessionFormationService
} from "./chunk-XOAIMG5H.js";
import {
  TicketService
} from "./chunk-MLHMPH6Z.js";
import {
  CommonService
} from "./chunk-NVY3W4TG.js";
import {
  AuthService
} from "./chunk-SNOA42FF.js";
import "./chunk-FKX6UC3I.js";
import {
  routes
} from "./chunk-TYVQP4CB.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-45DOGZAU.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  DecimalPipe,
  NgIf,
  TitleCasePipe
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  catchError,
  forkJoin,
  interval,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/common/adminrh-sidebar/adminrh-sidebar.component.ts
function AdminrhSidebarComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4, "EN ATTENTE");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.demandesEnAttenteCount);
  }
}
function AdminrhSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4, "EN ATTENTE");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhSidebarComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.employes);
  }
}
function AdminrhSidebarComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.demandesEnAttenteCount);
  }
}
function AdminrhSidebarComponent_div_63_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.demandesEnAttenteCount);
  }
}
function AdminrhSidebarComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "a", 64)(2, "span", 65);
    \u0275\u0275text(3, "Formations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminrhSidebarComponent_div_63_span_4_Template, 2, 1, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 64)(6, "span", 65);
    \u0275\u0275text(7, "Parcours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 64)(9, "span", 65);
    \u0275\u0275text(10, "Catalogue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.AdminrhDemande);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.demandesEnAttenteCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.AdminrhDemandeParcours);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.AdminrhDemandeCatalogue);
  }
}
function AdminrhSidebarComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "a", 64)(2, "span", 65);
    \u0275\u0275text(3, "Formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "a", 64)(5, "span", 65);
    \u0275\u0275text(6, "Catalogue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 64)(8, "span", 65);
    \u0275\u0275text(9, "Parcours");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhCourse);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhCatalogue);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhParcours);
  }
}
function AdminrhSidebarComponent_span_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.sessionsAVenirCount, " \xE0 venir");
  }
}
function AdminrhSidebarComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "a", 64)(2, "span", 65);
    \u0275\u0275text(3, "Tous les quiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "a", 64)(5, "span", 65);
    \u0275\u0275text(6, "R\xE9sultats & scores");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhQuiz);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhQuizResult);
  }
}
function AdminrhSidebarComponent_span_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.certificatsCount);
  }
}
function AdminrhSidebarComponent_span_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.ticketsCount);
  }
}
function AdminrhSidebarComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71);
    \u0275\u0275element(2, "i", 72);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73);
    \u0275\u0275text(5, "En attente depuis plus de 48h");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 74);
    \u0275\u0275text(7, "Traiter maintenant \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.demandesEnAttenteCount, " demandes non trait\xE9es ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.AdminrhDemande);
  }
}
var AdminrhSidebarComponent = class _AdminrhSidebarComponent {
  common;
  authService;
  demandeService;
  sessionService;
  userService;
  certificatService;
  ticketService;
  router;
  refreshSub;
  routes = routes;
  base = "";
  page = "";
  last = "";
  currentUser;
  demandesEnAttenteCount = 0;
  sessionsAVenirCount = 0;
  certificatsCount = 0;
  messagesCount = 0;
  ticketsCount = 0;
  employes = 0;
  tauxCompletion = 73;
  quotaUsed = 18;
  quotaTotal = 25;
  get quotaPercent() {
    return Math.round(this.quotaUsed / this.quotaTotal * 100);
  }
  openGroups = {
    demandes: false,
    formation: false,
    quiz: false
  };
  toggleGroup(key) {
    this.openGroups[key] = !this.openGroups[key];
  }
  isHoldingAdmin() {
    return this.currentUser?.role_id === 5 || this.currentUser?.role === "Superadmin RH Holding";
  }
  getInitials() {
    const u = this.currentUser;
    if (!u)
      return "RH";
    const n = u.name || `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || u.email || "";
    return n.split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase() || "RH";
  }
  getDisplayName() {
    const u = this.currentUser;
    if (!u)
      return "Admin RH";
    return u.name || `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || u.email || "Admin RH";
  }
  getRoleLabel() {
    const u = this.currentUser;
    return u?.role?.name || (u?.role_id === 5 ? "RH Groupe" : "Administratrice RH");
  }
  getEntrepriseName() {
    const u = this.currentUser;
    return u?.entreprise?.nom || u?.entreprise_nom || "Entreprise";
  }
  constructor(common, authService, demandeService, sessionService, userService, certificatService, ticketService, router) {
    this.common = common;
    this.authService = authService;
    this.demandeService = demandeService;
    this.sessionService = sessionService;
    this.userService = userService;
    this.certificatService = certificatService;
    this.ticketService = ticketService;
    this.router = router;
    this.common.base.subscribe((base) => {
      this.base = base;
    });
    this.common.page.subscribe((page) => {
      this.page = page;
    });
    this.common.last.subscribe((last) => {
      this.last = last;
    });
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.loadBadgeCounts();
    if (this.router.url.includes("demande")) {
      this.openGroups["demandes"] = true;
    }
    if (this.router.url.includes("quiz")) {
      this.openGroups["quiz"] = true;
    }
    if (this.router.url.includes("adminrh-course") || this.router.url.includes("adminrh-catalogue") || this.router.url.includes("adminrh-parcours")) {
      this.openGroups["formation"] = true;
    }
    this.refreshSub = interval(6e4).subscribe(() => this.loadSessionsBadge());
  }
  ngOnDestroy() {
    this.refreshSub?.unsubscribe();
  }
  loadSessionsBadge() {
    this.sessionService.getAllSessionsRH().subscribe({
      next: (res) => {
        const now = /* @__PURE__ */ new Date();
        this.sessionsAVenirCount = (res.sessions || []).filter((s) => s.statut === "planifiee" && s.date_debut != null && new Date(s.date_debut) >= now).length;
      },
      error: () => {
      }
    });
  }
  loadBadgeCounts() {
    this.demandeService.getDemandesFormation().subscribe({
      next: (res) => {
        this.demandesEnAttenteCount = (res.demandes || []).filter((d) => d.statut === "en_attente").length;
      },
      error: () => {
      }
    });
    this.loadSessionsBadge();
    this.userService.getMyUsers().subscribe({
      next: (res) => {
        this.employes = res?.total ?? res?.users?.length ?? 0;
      },
      error: () => {
      }
    });
    this.certificatService.getCertificats().subscribe({
      next: (res) => {
        const arr = res?.certificats || res?.data || (Array.isArray(res) ? res : []);
        this.certificatsCount = arr.length;
      },
      error: () => {
      }
    });
    this.ticketService.getTickets().subscribe({
      next: (res) => {
        const arr = res?.tickets || res?.data || (Array.isArray(res) ? res : []);
        this.ticketsCount = arr.filter((t) => t.statut === "ouvert").length;
      },
      error: () => {
      }
    });
  }
  static \u0275fac = function AdminrhSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhSidebarComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DemandeFormationService), \u0275\u0275directiveInject(SessionFormationService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(CertificatService), \u0275\u0275directiveInject(TicketService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhSidebarComponent, selectors: [["app-adminrh-sidebar"]], decls: 145, vars: 41, consts: [[1, "sb-shell"], [1, "sb-logo"], [1, "sb-logo-mark"], [1, "sb-logo-text"], [1, "sb-logo-badge"], [1, "sb-profile"], [1, "sb-av"], [1, "sb-profile-info"], [1, "sb-pname"], [1, "sb-prole"], [1, "sb-pcompany"], [1, "isax", "isax-buildings-2"], [1, "sb-ministats"], [1, "sb-ministat"], [1, "sb-ministat-val"], [1, "sb-ministat-lbl"], [1, "sb-ministat-div"], ["class", "sb-ministat sb-ministat--warn", 4, "ngIf"], ["class", "sb-ministat", 4, "ngIf"], [1, "sb-scroll"], [1, "sb-section"], [1, "sb-section-label"], ["routerLinkActive", "active", 1, "sb-item", 3, "routerLink"], [1, "isax", "isax-grid-3"], [1, "sb-item-label"], [1, "isax", "isax-chart-square"], [1, "sb-divider"], [1, "isax", "isax-people"], ["class", "sb-badge", 4, "ngIf"], [1, "sb-group"], [1, "sb-group-header", 3, "click"], [1, "isax", "isax-document-text", "icon"], ["class", "sb-badge sb-badge--red", 4, "ngIf"], [1, "isax", "isax-arrow-right-3", "arr"], ["class", "sb-sub", 4, "ngIf"], [1, "isax", "isax-book-1", "icon"], [1, "isax", "isax-calendar-1"], ["class", "sb-badge sb-badge--amber", 4, "ngIf"], [1, "isax", "isax-chart-2"], [1, "isax", "isax-award", "icon"], [1, "isax", "isax-note-21"], ["class", "sb-badge sb-badge--teal", 4, "ngIf"], [1, "isax", "isax-receipt-item"], [1, "isax", "isax-ticket"], ["class", "sb-widget-alert", 4, "ngIf"], [1, "sb-widget-quota"], [1, "sb-quota-header"], [1, "sb-quota-lbl"], [1, "sb-quota-val"], [1, "sb-quota-bar"], [1, "sb-quota-fill"], [1, "sb-quota-sub"], [1, "sb-bottom"], ["routerLinkActive", "active", 1, "sb-bottom-item", "sb-item", 3, "routerLink"], [1, "isax", "isax-setting-2"], [1, "isax", "isax-award"], ["routerLinkActive", "active", 1, "sb-bottom-item", 3, "routerLink"], [1, "isax", "isax-user-square"], [1, "sb-bottom-item", "logout", 3, "routerLink"], [1, "isax", "isax-logout"], [1, "sb-ministat", "sb-ministat--warn"], [1, "sb-badge"], [1, "sb-badge", "sb-badge--red"], [1, "sb-sub"], ["routerLinkActive", "active", 1, "sb-sub-item", 3, "routerLink"], [1, "sb-sub-label"], ["class", "sb-badge sb-badge--red sb-badge--sm", 4, "ngIf"], [1, "sb-badge", "sb-badge--red", "sb-badge--sm"], [1, "sb-badge", "sb-badge--amber"], [1, "sb-badge", "sb-badge--teal"], [1, "sb-widget-alert"], [1, "sb-widget-alert-title"], [1, "isax", "isax-warning-2"], [1, "sb-widget-alert-sub"], [1, "sb-widget-alert-link", 3, "routerLink"]], template: function AdminrhSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "P");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 3);
      \u0275\u0275text(6, "Pyramide LMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8, "Espace Admin RH");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "div", 8);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10);
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "div", 14);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15);
      \u0275\u0275text(25, "EMPLOY\xC9S");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "div", 16);
      \u0275\u0275elementStart(27, "div", 13)(28, "div", 14);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 15);
      \u0275\u0275text(31, "COMPL\xC9TION");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(32, "div", 16);
      \u0275\u0275template(33, AdminrhSidebarComponent_div_33_Template, 5, 1, "div", 17)(34, AdminrhSidebarComponent_div_34_Template, 5, 0, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 19)(36, "div", 20)(37, "div", 21);
      \u0275\u0275text(38, "Vue d'ensemble");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 22);
      \u0275\u0275element(40, "i", 23);
      \u0275\u0275elementStart(41, "span", 24);
      \u0275\u0275text(42, "Tableau de bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "a", 22);
      \u0275\u0275element(44, "i", 25);
      \u0275\u0275elementStart(45, "span", 24);
      \u0275\u0275text(46, "Statistiques RH");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(47, "div", 26);
      \u0275\u0275elementStart(48, "div", 20)(49, "div", 21);
      \u0275\u0275text(50, "Mon entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 22);
      \u0275\u0275element(52, "i", 27);
      \u0275\u0275elementStart(53, "span", 24);
      \u0275\u0275text(54, "Employ\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, AdminrhSidebarComponent_span_55_Template, 2, 1, "span", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 29)(57, "div", 30);
      \u0275\u0275listener("click", function AdminrhSidebarComponent_Template_div_click_57_listener() {
        return ctx.toggleGroup("demandes");
      });
      \u0275\u0275element(58, "i", 31);
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "Demandes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(61, AdminrhSidebarComponent_span_61_Template, 2, 1, "span", 32);
      \u0275\u0275element(62, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275template(63, AdminrhSidebarComponent_div_63_Template, 11, 4, "div", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(64, "div", 26);
      \u0275\u0275elementStart(65, "div", 20)(66, "div", 21);
      \u0275\u0275text(67, "Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 29)(69, "div", 30);
      \u0275\u0275listener("click", function AdminrhSidebarComponent_Template_div_click_69_listener() {
        return ctx.toggleGroup("formation");
      });
      \u0275\u0275element(70, "i", 35);
      \u0275\u0275elementStart(71, "span");
      \u0275\u0275text(72, "Formations");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275template(74, AdminrhSidebarComponent_div_74_Template, 10, 3, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "a", 22);
      \u0275\u0275element(76, "i", 36);
      \u0275\u0275elementStart(77, "span", 24);
      \u0275\u0275text(78, "Sessions");
      \u0275\u0275elementEnd();
      \u0275\u0275template(79, AdminrhSidebarComponent_span_79_Template, 2, 1, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(80, "div", 26);
      \u0275\u0275elementStart(81, "div", 20)(82, "div", 21);
      \u0275\u0275text(83, "Suivi & Performance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "a", 22);
      \u0275\u0275element(85, "i", 38);
      \u0275\u0275elementStart(86, "span", 24);
      \u0275\u0275text(87, "Progression employ\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 29)(89, "div", 30);
      \u0275\u0275listener("click", function AdminrhSidebarComponent_Template_div_click_89_listener() {
        return ctx.toggleGroup("quiz");
      });
      \u0275\u0275element(90, "i", 39);
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275text(92, "Quiz & \xE9valuations");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275template(94, AdminrhSidebarComponent_div_94_Template, 7, 2, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "a", 22);
      \u0275\u0275element(96, "i", 40);
      \u0275\u0275elementStart(97, "span", 24);
      \u0275\u0275text(98, "Certificats");
      \u0275\u0275elementEnd();
      \u0275\u0275template(99, AdminrhSidebarComponent_span_99_Template, 2, 1, "span", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "a", 22);
      \u0275\u0275element(101, "i", 42);
      \u0275\u0275elementStart(102, "span", 24);
      \u0275\u0275text(103, "Rapports");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(104, "div", 26);
      \u0275\u0275elementStart(105, "div", 20)(106, "div", 21);
      \u0275\u0275text(107, "Sondages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "a", 22);
      \u0275\u0275element(109, "i", 40);
      \u0275\u0275elementStart(110, "span", 24);
      \u0275\u0275text(111, "Sondages & enqu\xEAtes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(112, "div", 26);
      \u0275\u0275elementStart(113, "div", 20)(114, "div", 21);
      \u0275\u0275text(115, "Communication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "a", 22);
      \u0275\u0275element(117, "i", 43);
      \u0275\u0275elementStart(118, "span", 24);
      \u0275\u0275text(119, "Tickets support");
      \u0275\u0275elementEnd();
      \u0275\u0275template(120, AdminrhSidebarComponent_span_120_Template, 2, 1, "span", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(121, AdminrhSidebarComponent_div_121_Template, 8, 2, "div", 44);
      \u0275\u0275elementStart(122, "div", 45)(123, "div", 46)(124, "span", 47);
      \u0275\u0275text(125, "QUOTA FORMATIONS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "span", 48);
      \u0275\u0275text(127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 49);
      \u0275\u0275element(129, "div", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 51);
      \u0275\u0275text(131);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "div", 52)(133, "a", 53);
      \u0275\u0275element(134, "i", 54);
      \u0275\u0275text(135, " Param\xE8tres entreprise ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "a", 53);
      \u0275\u0275element(137, "i", 55);
      \u0275\u0275text(138, " Personnalisation certificat ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "a", 56);
      \u0275\u0275element(140, "i", 57);
      \u0275\u0275text(141, " Mon profil ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "a", 58);
      \u0275\u0275element(143, "i", 59);
      \u0275\u0275text(144, " D\xE9connexion ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getDisplayName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getRoleLabel());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.getEntrepriseName(), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.employes);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.tauxCompletion, "%");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.demandesEnAttenteCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.demandesEnAttenteCount === 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.adminrh_dashboard);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.adminrhAnnouncements);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.adminrhUserList);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.employes > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("open", ctx.openGroups["demandes"]);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.demandesEnAttenteCount > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.openGroups["demandes"]);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("open", ctx.openGroups["formation"]);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.openGroups["formation"]);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.adminrhSession);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.sessionsAVenirCount > 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.adminrhAssignment);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("open", ctx.openGroups["quiz"]);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.openGroups["quiz"]);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.adminrhCertificate);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.certificatsCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.adminrhStatements);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.adminrhSondage);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.adminrh_tickets);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.ticketsCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.demandesEnAttenteCount > 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.quotaUsed, "/", ctx.quotaTotal);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.quotaPercent, "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.quotaTotal - ctx.quotaUsed, " formations disponibles sur votre plan");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.adminrhCompanyManagement);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.adminrhCertificateModele);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.adminrhProfile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell[_ngcontent-%COMP%] {\n  background: #0A1F18;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 16px 13px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-logo-mark[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background: #0F6E56;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-logo-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n}\n.sb-logo-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  padding: 1px 8px;\n  border-radius: 20px;\n  background: rgba(15, 110, 86, 0.25);\n  color: #6ee7b7;\n  border: 1px solid rgba(110, 231, 183, 0.2);\n  margin-top: 2px;\n}\n.sb-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 14px 14px 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-av[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #0F6E56;\n  border: 2px solid rgba(110, 231, 183, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sb-pname[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sb-prole[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.35);\n  margin: 1px 0 3px;\n}\n.sb-pcompany[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.35);\n}\n.sb-pcompany[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6ee7b7;\n}\n.sb-ministats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-ministat[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.sb-ministat--warn[_ngcontent-%COMP%]   .sb-ministat-val[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.sb-ministat--warn[_ngcontent-%COMP%]   .sb-ministat-lbl[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.sb-ministat-val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n}\n.sb-ministat-lbl[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.35);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-top: 3px;\n}\n.sb-ministat-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 30px;\n  background: rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n  margin: 0 4px;\n}\n.sb-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 6px 0 10px;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 3px;\n}\n.sb-section[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.sb-section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.35);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 16px 4px;\n}\n.sb-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 4px 12px;\n}\n.sb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 12px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n  color: rgba(255, 255, 255, 0.35);\n}\n.sb-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.92);\n}\n.sb-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #6ee7b7;\n}\n.sb-item.active[_ngcontent-%COMP%] {\n  background: #0F6E56;\n  color: #fff;\n  font-weight: 500;\n}\n.sb-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6ee7b7;\n}\n.sb-item-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 500;\n  flex: none;\n  line-height: 1.4;\n  white-space: nowrap;\n}\n.sb-badge--red[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n}\n.sb-badge--amber[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.sb-badge--teal[_ngcontent-%COMP%] {\n  background: #0F6E56;\n  color: #fff;\n}\n.sb-badge--sm[_ngcontent-%COMP%] {\n  font-size: 9px;\n  padding: 1px 6px;\n}\n.sb-group[_ngcontent-%COMP%] {\n  margin: 1px 8px;\n}\n.sb-group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 4px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 13px;\n  transition: color 0.12s;\n}\n.sb-group-header[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.92);\n}\n.sb-group-header.open[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.92);\n}\n.sb-group-header[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n  color: rgba(255, 255, 255, 0.35);\n}\n.sb-group-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.sb-badge) {\n  flex: 1;\n}\n.sb-group-header[_ngcontent-%COMP%]   i.arr[_ngcontent-%COMP%] {\n  font-size: 12px;\n  transition: transform 0.15s;\n}\n.sb-group-header.open[_ngcontent-%COMP%]   i.arr[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.sb-sub[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  margin: 2px 0 4px 22px;\n}\n.sb-sub-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n}\n.sb-sub-item[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.92);\n  background: rgba(255, 255, 255, 0.06);\n}\n.sb-sub-item.active[_ngcontent-%COMP%] {\n  color: #6ee7b7;\n}\n.sb-sub-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-widget-alert[_ngcontent-%COMP%] {\n  margin: 4px 10px 0;\n  background: rgba(220, 38, 38, 0.15);\n  border: 1px solid rgba(220, 38, 38, 0.3);\n  border-radius: 8px;\n  padding: 12px 12px 10px;\n  flex-shrink: 0;\n}\n.sb-widget-alert-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fca5a5;\n}\n.sb-widget-alert-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sb-widget-alert-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(252, 165, 165, 0.65);\n  margin: 3px 0 7px 20px;\n}\n.sb-widget-alert-link[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #fca5a5;\n  text-decoration: underline;\n  margin-left: 20px;\n}\n.sb-widget-alert-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.sb-widget-quota[_ngcontent-%COMP%] {\n  margin: 8px 10px;\n  flex-shrink: 0;\n}\n.sb-quota-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.sb-quota-lbl[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.35);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\n.sb-quota-val[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.65);\n}\n.sb-quota-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 5px;\n}\n.sb-quota-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #0F6E56;\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.sb-quota-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.35);\n}\n.sb-bottom[_ngcontent-%COMP%] {\n  padding: 8px 10px 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-bottom-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.45);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sb-bottom-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.92);\n}\n.sb-bottom-item.active[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.92);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%] {\n  color: rgba(220, 38, 38, 0.65);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.1);\n  color: #fca5a5;\n}\n/*# sourceMappingURL=adminrh-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-sidebar", imports: [CommonModule, RouterLink, RouterLinkActive], template: `<div class="sb-shell">

  <!-- \u2500\u2500 LOGO \u2500\u2500 -->
  <div class="sb-logo">
    <div class="sb-logo-mark">P</div>
    <div>
      <div class="sb-logo-text">Pyramide LMS</div>
      <span class="sb-logo-badge">Espace Admin RH</span>
    </div>
  </div>

  <!-- \u2500\u2500 PROFIL \u2500\u2500 -->
  <div class="sb-profile">
    <div class="sb-av">{{ getInitials() }}</div>
    <div class="sb-profile-info">
      <div class="sb-pname">{{ getDisplayName() }}</div>
      <div class="sb-prole">{{ getRoleLabel() }}</div>
      <div class="sb-pcompany">
        <i class="isax isax-buildings-2"></i>{{ getEntrepriseName() }}
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 MINI-STATS \u2500\u2500 -->
  <div class="sb-ministats">
    <div class="sb-ministat">
      <div class="sb-ministat-val">{{ employes }}</div>
      <div class="sb-ministat-lbl">EMPLOY\xC9S</div>
    </div>
    <div class="sb-ministat-div"></div>
    <div class="sb-ministat">
      <div class="sb-ministat-val">{{ tauxCompletion }}%</div>
      <div class="sb-ministat-lbl">COMPL\xC9TION</div>
    </div>
    <div class="sb-ministat-div"></div>
    <div class="sb-ministat sb-ministat--warn" *ngIf="demandesEnAttenteCount > 0">
      <div class="sb-ministat-val">{{ demandesEnAttenteCount }}</div>
      <div class="sb-ministat-lbl">EN ATTENTE</div>
    </div>
    <div class="sb-ministat" *ngIf="demandesEnAttenteCount === 0">
      <div class="sb-ministat-val">0</div>
      <div class="sb-ministat-lbl">EN ATTENTE</div>
    </div>
  </div>

  <!-- \u2500\u2500 NAV \u2500\u2500 -->
  <div class="sb-scroll">

    <!-- VUE D'ENSEMBLE -->
    <div class="sb-section">
      <div class="sb-section-label">Vue d'ensemble</div>
      <a [routerLink]="routes.adminrh_dashboard" routerLinkActive="active" class="sb-item">
        <i class="isax isax-grid-3"></i>
        <span class="sb-item-label">Tableau de bord</span>
      </a>
      <a [routerLink]="routes.adminrhAnnouncements" routerLinkActive="active" class="sb-item">
        <i class="isax isax-chart-square"></i>
        <span class="sb-item-label">Statistiques RH</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <!-- MON ENTREPRISE -->
    <div class="sb-section">
      <div class="sb-section-label">Mon entreprise</div>

      <a [routerLink]="routes.adminrhUserList" routerLinkActive="active" class="sb-item">
        <i class="isax isax-people"></i>
        <span class="sb-item-label">Employ\xE9s</span>
        <span *ngIf="employes > 0" class="sb-badge">{{ employes }}</span>
      </a>

      <!-- Demandes avec sous-items -->
      <div class="sb-group">
        <div class="sb-group-header" [class.open]="openGroups['demandes']"
             (click)="toggleGroup('demandes')">
          <i class="isax isax-document-text icon"></i>
          <span>Demandes</span>
          <span *ngIf="demandesEnAttenteCount > 0" class="sb-badge sb-badge--red">{{ demandesEnAttenteCount }}</span>
          <i class="isax isax-arrow-right-3 arr"></i>
        </div>
        <div class="sb-sub" *ngIf="openGroups['demandes']">
          <a [routerLink]="routes.AdminrhDemande" routerLinkActive="active" class="sb-sub-item">
            <span class="sb-sub-label">Formations</span>
            <span *ngIf="demandesEnAttenteCount > 0" class="sb-badge sb-badge--red sb-badge--sm">{{ demandesEnAttenteCount }}</span>
          </a>
          <a [routerLink]="routes.AdminrhDemandeParcours" routerLinkActive="active" class="sb-sub-item">
            <span class="sb-sub-label">Parcours</span>
          </a>
          <a [routerLink]="routes.AdminrhDemandeCatalogue" routerLinkActive="active" class="sb-sub-item">
            <span class="sb-sub-label">Catalogue</span>
          </a>
        </div>
      </div>
    </div>

    <div class="sb-divider"></div>

    <!-- FORMATION -->
    <div class="sb-section">
      <div class="sb-section-label">Formation</div>

      <!-- Formations groupe pliant -->
      <div class="sb-group">
        <div class="sb-group-header" [class.open]="openGroups['formation']"
             (click)="toggleGroup('formation')">
          <i class="isax isax-book-1 icon"></i>
          <span>Formations</span>
          <i class="isax isax-arrow-right-3 arr"></i>
        </div>
        <div class="sb-sub" *ngIf="openGroups['formation']">
          <a [routerLink]="routes.adminrhCourse" routerLinkActive="active" class="sb-sub-item">
            <span class="sb-sub-label">Formations</span>
          </a>
          <a [routerLink]="routes.adminrhCatalogue" routerLinkActive="active" class="sb-sub-item">
            <span class="sb-sub-label">Catalogue</span>
          </a>
          <a [routerLink]="routes.adminrhParcours" routerLinkActive="active" class="sb-sub-item">
            <span class="sb-sub-label">Parcours</span>
          </a>
        </div>
      </div>

      <a [routerLink]="routes.adminrhSession" routerLinkActive="active" class="sb-item">
        <i class="isax isax-calendar-1"></i>
        <span class="sb-item-label">Sessions</span>
        <span *ngIf="sessionsAVenirCount > 0" class="sb-badge sb-badge--amber">{{ sessionsAVenirCount }} \xE0 venir</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <!-- SUIVI & PERFORMANCE -->
    <div class="sb-section">
      <div class="sb-section-label">Suivi & Performance</div>

      <a [routerLink]="routes.adminrhAssignment" routerLinkActive="active" class="sb-item">
        <i class="isax isax-chart-2"></i>
        <span class="sb-item-label">Progression employ\xE9s</span>
      </a>

      <!-- Quiz groupe pliant -->
      <div class="sb-group">
        <div class="sb-group-header" [class.open]="openGroups['quiz']"
             (click)="toggleGroup('quiz')">
          <i class="isax isax-award icon"></i>
          <span>Quiz &amp; \xE9valuations</span>
          <i class="isax isax-arrow-right-3 arr"></i>
        </div>
        <div class="sb-sub" *ngIf="openGroups['quiz']">
          <a [routerLink]="routes.adminrhQuiz" routerLinkActive="active" class="sb-sub-item">
            <span class="sb-sub-label">Tous les quiz</span>
          </a>
          <a [routerLink]="routes.adminrhQuizResult" routerLinkActive="active" class="sb-sub-item">
            <span class="sb-sub-label">R\xE9sultats &amp; scores</span>
          </a>
        </div>
      </div>

      <a [routerLink]="routes.adminrhCertificate" routerLinkActive="active" class="sb-item">
        <i class="isax isax-note-21"></i>
        <span class="sb-item-label">Certificats</span>
        <span *ngIf="certificatsCount > 0" class="sb-badge sb-badge--teal">{{ certificatsCount }}</span>
      </a>

      <a [routerLink]="routes.adminrhStatements" routerLinkActive="active" class="sb-item">
        <i class="isax isax-receipt-item"></i>
        <span class="sb-item-label">Rapports</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <!-- SONDAGES -->
    <div class="sb-section">
      <div class="sb-section-label">Sondages</div>
      <a [routerLink]="routes.adminrhSondage" routerLinkActive="active" class="sb-item">
        <i class="isax isax-note-21"></i>
        <span class="sb-item-label">Sondages &amp; enqu\xEAtes</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <!-- COMMUNICATION -->
    <div class="sb-section">
      <div class="sb-section-label">Communication</div>

      <!-- <a [routerLink]="routes.adminrhMessage" routerLinkActive="active" class="sb-item">
        <i class="isax isax-messages-3"></i>
        <span class="sb-item-label">Messages</span>
        <span *ngIf="messagesCount > 0" class="sb-badge sb-badge--red">{{ messagesCount }}</span>
      </a> -->

      <a [routerLink]="routes.adminrh_tickets" routerLinkActive="active" class="sb-item">
        <i class="isax isax-ticket"></i>
        <span class="sb-item-label">Tickets support</span>
        <span *ngIf="ticketsCount > 0" class="sb-badge">{{ ticketsCount }}</span>
      </a>

      <!-- <a [routerLink]="routes.adminrhAnnouncements" routerLinkActive="active" class="sb-item">
        <i class="isax isax-volume-high"></i>
        <span class="sb-item-label">Annonces</span>
      </a> -->
    </div>

  </div><!-- /sb-scroll -->

  <!-- \u2500\u2500 WIDGET ALERTE DEMANDES \u2500\u2500 -->
  <div class="sb-widget-alert" *ngIf="demandesEnAttenteCount > 0">
    <div class="sb-widget-alert-title">
      <i class="isax isax-warning-2"></i>
      {{ demandesEnAttenteCount }} demandes non trait\xE9es
    </div>
    <div class="sb-widget-alert-sub">En attente depuis plus de 48h</div>
    <a [routerLink]="routes.AdminrhDemande" class="sb-widget-alert-link">Traiter maintenant \u2192</a>
  </div>

  <!-- \u2500\u2500 WIDGET QUOTA \u2500\u2500 -->
  <div class="sb-widget-quota">
    <div class="sb-quota-header">
      <span class="sb-quota-lbl">QUOTA FORMATIONS</span>
      <span class="sb-quota-val">{{ quotaUsed }}/{{ quotaTotal }}</span>
    </div>
    <div class="sb-quota-bar">
      <div class="sb-quota-fill" [style.width.%]="quotaPercent"></div>
    </div>
    <div class="sb-quota-sub">{{ quotaTotal - quotaUsed }} formations disponibles sur votre plan</div>
  </div>

  <!-- \u2500\u2500 BOTTOM \u2500\u2500 -->
  <div class="sb-bottom">
    <a [routerLink]="routes.adminrhCompanyManagement" routerLinkActive="active" class="sb-bottom-item sb-item" >
      <i class="isax isax-setting-2"></i> Param\xE8tres entreprise
    </a>
    <a [routerLink]="routes.adminrhCertificateModele" routerLinkActive="active" class="sb-bottom-item sb-item">
      <i class="isax isax-award"></i> Personnalisation certificat
    </a>
    <a [routerLink]="routes.adminrhProfile" routerLinkActive="active" class="sb-bottom-item">
      <i class="isax isax-user-square"></i> Mon profil
    </a>
    <a [routerLink]="routes.login" class="sb-bottom-item logout">
      <i class="isax isax-logout"></i> D\xE9connexion
    </a>
  </div>

</div>
`, styles: ["/* src/app/features/adminrh/common/adminrh-sidebar/adminrh-sidebar.component.scss */\n:host {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell {\n  background: #0A1F18;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 16px 13px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-logo-mark {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background: #0F6E56;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-logo-text {\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n}\n.sb-logo-badge {\n  display: inline-block;\n  font-size: 10px;\n  padding: 1px 8px;\n  border-radius: 20px;\n  background: rgba(15, 110, 86, 0.25);\n  color: #6ee7b7;\n  border: 1px solid rgba(110, 231, 183, 0.2);\n  margin-top: 2px;\n}\n.sb-profile {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 14px 14px 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-av {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #0F6E56;\n  border: 2px solid rgba(110, 231, 183, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-profile-info {\n  flex: 1;\n  min-width: 0;\n}\n.sb-pname {\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sb-prole {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.35);\n  margin: 1px 0 3px;\n}\n.sb-pcompany {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.35);\n}\n.sb-pcompany i {\n  font-size: 12px;\n  color: #6ee7b7;\n}\n.sb-ministats {\n  display: flex;\n  align-items: center;\n  padding: 12px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-ministat {\n  flex: 1;\n  text-align: center;\n}\n.sb-ministat--warn .sb-ministat-val {\n  color: #f59e0b;\n}\n.sb-ministat--warn .sb-ministat-lbl {\n  color: #f59e0b;\n}\n.sb-ministat-val {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n}\n.sb-ministat-lbl {\n  font-size: 9px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.35);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-top: 3px;\n}\n.sb-ministat-div {\n  width: 1px;\n  height: 30px;\n  background: rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n  margin: 0 4px;\n}\n.sb-scroll {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 6px 0 10px;\n}\n.sb-scroll::-webkit-scrollbar {\n  width: 3px;\n}\n.sb-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sb-scroll::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 3px;\n}\n.sb-section {\n  margin-bottom: 4px;\n}\n.sb-section-label {\n  font-size: 10px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.35);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 16px 4px;\n}\n.sb-divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 4px 12px;\n}\n.sb-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 12px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item i {\n  font-size: 16px;\n  flex-shrink: 0;\n  color: rgba(255, 255, 255, 0.35);\n}\n.sb-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.92);\n}\n.sb-item:hover i {\n  color: #6ee7b7;\n}\n.sb-item.active {\n  background: #0F6E56;\n  color: #fff;\n  font-weight: 500;\n}\n.sb-item.active i {\n  color: #6ee7b7;\n}\n.sb-item-label {\n  flex: 1;\n}\n.sb-badge {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.75);\n  font-weight: 500;\n  flex: none;\n  line-height: 1.4;\n  white-space: nowrap;\n}\n.sb-badge--red {\n  background: #dc2626;\n  color: #fff;\n}\n.sb-badge--amber {\n  background: #d97706;\n  color: #fff;\n}\n.sb-badge--teal {\n  background: #0F6E56;\n  color: #fff;\n}\n.sb-badge--sm {\n  font-size: 9px;\n  padding: 1px 6px;\n}\n.sb-group {\n  margin: 1px 8px;\n}\n.sb-group-header {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 4px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 13px;\n  transition: color 0.12s;\n}\n.sb-group-header:hover {\n  color: rgba(255, 255, 255, 0.92);\n}\n.sb-group-header.open {\n  color: rgba(255, 255, 255, 0.92);\n}\n.sb-group-header i.icon {\n  font-size: 16px;\n  flex-shrink: 0;\n  color: rgba(255, 255, 255, 0.35);\n}\n.sb-group-header span:not(.sb-badge) {\n  flex: 1;\n}\n.sb-group-header i.arr {\n  font-size: 12px;\n  transition: transform 0.15s;\n}\n.sb-group-header.open i.arr {\n  transform: rotate(90deg);\n}\n.sb-sub {\n  padding-left: 10px;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n  margin: 2px 0 4px 22px;\n}\n.sb-sub-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n}\n.sb-sub-item:hover {\n  color: rgba(255, 255, 255, 0.92);\n  background: rgba(255, 255, 255, 0.06);\n}\n.sb-sub-item.active {\n  color: #6ee7b7;\n}\n.sb-sub-label {\n  flex: 1;\n}\n.sb-widget-alert {\n  margin: 4px 10px 0;\n  background: rgba(220, 38, 38, 0.15);\n  border: 1px solid rgba(220, 38, 38, 0.3);\n  border-radius: 8px;\n  padding: 12px 12px 10px;\n  flex-shrink: 0;\n}\n.sb-widget-alert-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fca5a5;\n}\n.sb-widget-alert-title i {\n  font-size: 14px;\n}\n.sb-widget-alert-sub {\n  font-size: 11px;\n  color: rgba(252, 165, 165, 0.65);\n  margin: 3px 0 7px 20px;\n}\n.sb-widget-alert-link {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #fca5a5;\n  text-decoration: underline;\n  margin-left: 20px;\n}\n.sb-widget-alert-link:hover {\n  color: #fff;\n}\n.sb-widget-quota {\n  margin: 8px 10px;\n  flex-shrink: 0;\n}\n.sb-quota-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.sb-quota-lbl {\n  font-size: 9px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.35);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\n.sb-quota-val {\n  font-size: 10px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.65);\n}\n.sb-quota-bar {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 5px;\n}\n.sb-quota-fill {\n  height: 100%;\n  background: #0F6E56;\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.sb-quota-sub {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.35);\n}\n.sb-bottom {\n  padding: 8px 10px 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-bottom-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.45);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item i {\n  font-size: 15px;\n}\n.sb-bottom-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.92);\n}\n.sb-bottom-item.active {\n  color: rgba(255, 255, 255, 0.92);\n}\n.sb-bottom-item.logout {\n  color: rgba(220, 38, 38, 0.65);\n}\n.sb-bottom-item.logout:hover {\n  background: rgba(220, 38, 38, 0.1);\n  color: #fca5a5;\n}\n/*# sourceMappingURL=adminrh-sidebar.component.css.map */\n"] }]
  }], () => [{ type: CommonService }, { type: AuthService }, { type: DemandeFormationService }, { type: SessionFormationService }, { type: UserService }, { type: CertificatService }, { type: TicketService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhSidebarComponent, { className: "AdminrhSidebarComponent", filePath: "src/app/features/adminrh/common/adminrh-sidebar/adminrh-sidebar.component.ts", lineNumber: 20 });
})();

// src/app/features/adminrh/adminrh.component.ts
function AdminrhComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 39)(2, "div", 40)(3, "nav", 41)(4, "ol", 42)(5, "li", 43)(6, "a", 38);
    \u0275\u0275text(7, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li", 44);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.home2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 2, ctx_r0.last));
  }
}
function AdminrhComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 47);
    \u0275\u0275text(6, "Voir les demandes \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.headerStats.demandesEnAttente, " demandes de formation en attente depuis plus de 48h \u2014 action requise");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.AdminrhDemande);
  }
}
function AdminrhComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "app-adminrh-sidebar", 48);
    \u0275\u0275elementStart(2, "div", 49);
    \u0275\u0275element(3, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var AdminrhComponent = class _AdminrhComponent {
  router;
  authService;
  demandeService;
  sessionService;
  userService;
  routes = routes;
  last = "";
  superAdminProfile = null;
  headerStats = {
    employes: 0,
    employesGrowth: 0,
    tauxCompletion: 0,
    tauxVariation: 4,
    sessionsAVenir: 0,
    demandesEnAttente: 0
  };
  constructor(router, authService, demandeService, sessionService, userService) {
    this.router = router;
    this.authService = authService;
    this.demandeService = demandeService;
    this.sessionService = sessionService;
    this.userService = userService;
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.last = data.url.split("/")[data.url.split("/").length - 1];
      }
    });
  }
  ngOnInit() {
    this.loadSuperAdminProfile();
    this.loadHeaderStats();
  }
  loadHeaderStats() {
    forkJoin({
      users: this.userService.getUsers().pipe(catchError(() => of(null))),
      demandes: this.demandeService.getDemandesFormation().pipe(catchError(() => of(null))),
      sessions: this.sessionService.getAllSessionsRH().pipe(catchError(() => of(null)))
    }).subscribe((data) => {
      const users = this.extractArray(data.users, ["utilisateurs", "data", "users"]);
      const demandes = this.extractArray(data.demandes, ["demandes", "data"]);
      const sessions = this.extractArray(data.sessions, ["sessions", "data"]);
      const now = /* @__PURE__ */ new Date();
      now.setHours(0, 0, 0, 0);
      this.headerStats = {
        employes: users.length,
        employesGrowth: this.countThisMonth(users),
        tauxCompletion: 73,
        tauxVariation: 4,
        sessionsAVenir: sessions.filter((s) => s.date_debut && new Date(s.date_debut) > now).length,
        demandesEnAttente: demandes.filter((d) => d.statut === "en_attente").length
      };
    });
  }
  extractArray(response, keys) {
    if (Array.isArray(response))
      return response;
    for (const key of keys) {
      if (response?.[key] && Array.isArray(response[key]))
        return response[key];
    }
    return [];
  }
  countThisMonth(items) {
    const now = /* @__PURE__ */ new Date();
    return items.filter((item) => {
      const d = new Date(item.created_at || item.dateCreation || "");
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
  }
  loadSuperAdminProfile() {
    try {
      const userDataString = localStorage.getItem("pyramide_user");
      if (userDataString) {
        this.superAdminProfile = JSON.parse(userDataString);
      }
    } catch (error) {
      console.error("Erreur lors du chargement du profil:", error);
    }
  }
  getFullName() {
    if (!this.superAdminProfile)
      return "Utilisateur";
    return `${this.superAdminProfile.prenom ?? ""} ${this.superAdminProfile.nom ?? ""}`.trim();
  }
  getInitials() {
    if (!this.superAdminProfile)
      return "RH";
    const p = this.superAdminProfile.prenom?.charAt(0) || "";
    const n = this.superAdminProfile.nom?.charAt(0) || "";
    return (p + n).toUpperCase() || "RH";
  }
  getEntrepriseName() {
    const u = this.superAdminProfile;
    return u?.entreprise?.nom || u?.entreprise_nom || "Entreprise";
  }
  getRoleLabel() {
    const u = this.superAdminProfile;
    if (!u)
      return "Administrateur RH";
    if (typeof u.role === "object" && u.role?.name)
      return u.role.name;
    if (u.role_id === 5)
      return "RH Groupe";
    return "Administrateur RH";
  }
  static \u0275fac = function AdminrhComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DemandeFormationService), \u0275\u0275directiveInject(SessionFormationService), \u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhComponent, selectors: [["app-adminrh"]], features: [\u0275\u0275ProvidersFeature([DecimalPipe])], decls: 82, vars: 28, consts: [[1, "breadcrumb-bar", "text-center"], [1, "content"], [1, "container"], [1, "arh-header"], [1, "arh-header-top-label"], [1, "arh-header-card"], [1, "arh-identity"], [1, "arh-av"], [1, "arh-id-info"], [1, "arh-name"], [1, "arh-company"], [1, "isax", "isax-building-3"], [1, "arh-role-badge"], [1, "arh-actions"], ["title", "Rapport RH", 1, "arh-btn", "arh-btn-outline", 3, "routerLink"], [1, "isax", "isax-document-text"], ["title", "Inscrire un employ\xE9", 1, "arh-btn", "arh-btn-primary", 3, "routerLink"], [1, "isax", "isax-add"], [1, "arh-stats-row"], [1, "arh-stat"], [1, "arh-stat-val"], [1, "arh-stat-lbl"], [1, "isax", "isax-people"], [1, "arh-stat-sub"], [1, "isax", "isax-chart-2"], [1, "arh-stat-sub", "arh-sub-down"], [1, "isax", "isax-arrow-down-2"], [1, "isax", "isax-calendar-1"], [1, "isax", "isax-clock"], ["class", "arh-alert-row", 4, "ngIf"], [1, "row"], [1, "footer"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [3, "routerLink"], [1, "col-md-12", "col-12"], [1, "breadcrumb-list"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb", "justify-content-center", "mb-0"], [1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "arh-alert-row"], [1, "arh-alert"], [1, "arh-alert-link", 3, "routerLink"], [1, "col-lg-3"], [1, "col-lg-9"]], template: function AdminrhComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AdminrhComponent_Conditional_0_Template, 11, 4, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "ADMIN RH \u2014 GESTION DE SON ENTREPRISE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "h5", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 10);
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 13)(19, "a", 14);
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275text(21, "Rapport RH ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 16);
      \u0275\u0275element(23, "i", 17);
      \u0275\u0275text(24, "Inscrire un employ\xE9 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 18)(26, "div", 19)(27, "div", 20);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 21);
      \u0275\u0275element(31, "i", 22);
      \u0275\u0275text(32, "Employ\xE9s ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 23);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 19)(36, "div", 20);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 21);
      \u0275\u0275element(39, "i", 24);
      \u0275\u0275text(40, "Taux compl\xE9tion ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 25);
      \u0275\u0275element(42, "i", 26);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 19)(45, "div", 20);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 21);
      \u0275\u0275element(49, "i", 27);
      \u0275\u0275text(50, "Sessions \xE0 venir ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 23);
      \u0275\u0275text(52, "ce mois");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 19)(54, "div", 20);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 21);
      \u0275\u0275element(58, "i", 28);
      \u0275\u0275text(59, "Demandes en attente ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 23);
      \u0275\u0275text(61, " \xC0 traiter ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(62, AdminrhComponent_div_62_Template, 7, 2, "div", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(63, AdminrhComponent_Conditional_63_Template, 4, 0, "div", 30);
      \u0275\u0275conditionalCreate(64, AdminrhComponent_Conditional_64_Template, 1, 0, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "footer", 31)(66, "div", 32)(67, "div", 2)(68, "div", 33)(69, "div", 34)(70, "div", 35)(71, "p", 36);
      \u0275\u0275text(72, "Copyright \xA9 2025 DreamsLMS. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 34)(74, "div")(75, "ul", 37)(76, "li")(77, "a", 38);
      \u0275\u0275text(78, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "li")(80, "a", 38);
      \u0275\u0275text(81, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.last !== "view" ? 0 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getFullName());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.getEntrepriseName(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getRoleLabel());
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.adminrhRapport);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.adminrhUserList);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 22, ctx.headerStats.employes));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("+", ctx.headerStats.employesGrowth, " ce mois");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.headerStats.tauxCompletion, "%");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.headerStats.tauxVariation, "% ce mois ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 24, ctx.headerStats.sessionsAVenir));
      \u0275\u0275advance(7);
      \u0275\u0275classProp("arh-stat--warn", ctx.headerStats.demandesEnAttente > 0);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 26, ctx.headerStats.demandesEnAttente));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("arh-sub-warn", ctx.headerStats.demandesEnAttente > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.headerStats.demandesEnAttente > 0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.last !== "students-details" ? 63 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.last === "students-details" ? 64 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.page_term_condition);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_privacy_policy);
    }
  }, dependencies: [CommonModule, NgIf, RouterOutlet, RouterModule, RouterLink, ReactiveFormsModule, FormsModule, AdminrhSidebarComponent, DecimalPipe, TitleCasePipe], styles: ["\n\n.content[_ngcontent-%COMP%] {\n  padding: 21px 0 !important;\n}\n.arh-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e5e7eb;\n  padding: 20px 24px 0;\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.arh-header-top-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #6b7280;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\n.arh-header-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.arh-identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.arh-av[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #e8f5ee;\n  color: #1a7a4a;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid #2da05e;\n  flex-shrink: 0;\n}\n.arh-name[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 3px;\n}\n.arh-company[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0 0 6px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.arh-company[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2da05e;\n}\n.arh-role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  padding: 2px 12px;\n  border-radius: 20px;\n  background: #e8f5ee;\n  color: #1a7a4a;\n  border: 1px solid rgb(203.5636363636, 232.6363636364, 216.9818181818);\n  font-weight: 500;\n}\n.arh-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.arh-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 8px 18px;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: all 0.15s;\n}\n.arh-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.arh-btn.arh-btn-outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1a1a2e;\n  border: 1px solid #d1d5db;\n}\n.arh-btn.arh-btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #2da05e;\n  color: #1a7a4a;\n}\n.arh-btn.arh-btn-primary[_ngcontent-%COMP%] {\n  background: #1a7a4a;\n  color: #fff;\n  border: 1px solid #1a7a4a;\n}\n.arh-btn.arh-btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(20.6243243243, 96.7756756757, 58.7);\n}\n.arh-stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  padding: 16px 0 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.arh-stat[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  padding: 14px 16px;\n  border-top: 3px solid transparent;\n  transition: box-shadow 0.15s;\n}\n.arh-stat[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.arh-stat--warn[_ngcontent-%COMP%] {\n  background: #fff8ee;\n  border-color: #f5c77e;\n  border-top-color: #f59e0b;\n}\n.arh-stat-val[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.1;\n}\n.arh-stat-lbl[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #6b7280;\n  margin: 5px 0 4px;\n}\n.arh-stat-lbl[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.arh-stat-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #16a34a;\n}\n.arh-stat-sub.arh-sub-down[_ngcontent-%COMP%] {\n  color: #dc2626;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.arh-stat-sub.arh-sub-down[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.arh-stat-sub.arh-sub-warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.arh-alert-row[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n  padding: 12px 0;\n}\n.arh-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n  color: #b45309;\n  background: #fff8ee;\n  border: 1px solid #f5c77e;\n  border-radius: 8px;\n  padding: 10px 16px;\n}\n.arh-alert[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.arh-alert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.arh-alert-link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a2e;\n  text-decoration: none;\n  white-space: nowrap;\n  padding: 5px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: #fff;\n  font-size: 12px;\n  transition: border-color 0.15s;\n}\n.arh-alert-link[_ngcontent-%COMP%]:hover {\n  border-color: #2da05e;\n  color: #1a7a4a;\n}\n@media (max-width: 768px) {\n  .arh-stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .arh-stat-val[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .arh-stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n  }\n}\n/*# sourceMappingURL=adminrh.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh", imports: [CommonModule, RouterOutlet, RouterModule, ReactiveFormsModule, FormsModule, AdminrhSidebarComponent], providers: [DecimalPipe], template: `<!-- Breadcrumb -->\r
@if (last !== 'view') {\r
  <div class="breadcrumb-bar text-center">\r
    <!-- <div class="container"> -->\r
      <!-- <div class="row"> -->\r
        <div class="col-md-12 col-12">\r
          <div class="breadcrumb-list">\r
            <!-- <h2 class="breadcrumb-title">{{ last | titlecase }} e</h2> -->\r
            <nav aria-label="breadcrumb" class="page-breadcrumb">\r
              <ol class="breadcrumb justify-content-center mb-0">\r
                <li class="breadcrumb-item"><a [routerLink]="routes.home2">Home</a></li>\r
                <li class="breadcrumb-item active" aria-current="page">{{ last | titlecase }}</li>\r
              </ol>\r
            </nav>\r
          </div>\r
        </div>\r
      <!-- </div> -->\r
    <!-- </div> -->\r
  </div>\r
}\r
<!-- /Breadcrumb -->\r
\r
<div class="content">\r
  <div class="container">\r
      <!-- Header Admin RH -->\r
      <div class="arh-header">\r
        <div class="arh-header-top-label">ADMIN RH \u2014 GESTION DE SON ENTREPRISE</div>\r
\r
        <div class="arh-header-card">\r
          <!-- Identit\xE9 -->\r
          <div class="arh-identity">\r
            <div class="arh-av">{{ getInitials() }}</div>\r
            <div class="arh-id-info">\r
              <h5 class="arh-name">{{ getFullName() }}</h5>\r
              <p class="arh-company">\r
                <i class="isax isax-building-3"></i>{{ getEntrepriseName() }}\r
              </p>\r
              <span class="arh-role-badge">{{ getRoleLabel() }}</span>\r
            </div>\r
          </div>\r
          <!-- Actions -->\r
          <div class="arh-actions">\r
            <a [routerLink]="routes.adminrhRapport" class="arh-btn arh-btn-outline" title="Rapport RH">\r
              <i class="isax isax-document-text"></i>Rapport RH\r
            </a>\r
            <a [routerLink]="routes.adminrhUserList" class="arh-btn arh-btn-primary" title="Inscrire un employ\xE9">\r
              <i class="isax isax-add"></i>Inscrire un employ\xE9\r
            </a>\r
          </div>\r
        </div>\r
\r
        <!-- Stats -->\r
        <div class="arh-stats-row">\r
          <div class="arh-stat">\r
            <div class="arh-stat-val">{{ headerStats.employes | number }}</div>\r
            <div class="arh-stat-lbl">\r
              <i class="isax isax-people"></i>Employ\xE9s\r
            </div>\r
            <div class="arh-stat-sub">+{{ headerStats.employesGrowth }} ce mois</div>\r
          </div>\r
          <div class="arh-stat">\r
            <div class="arh-stat-val">{{ headerStats.tauxCompletion }}%</div>\r
            <div class="arh-stat-lbl">\r
              <i class="isax isax-chart-2"></i>Taux compl\xE9tion\r
            </div>\r
            <div class="arh-stat-sub arh-sub-down">\r
              <i class="isax isax-arrow-down-2"></i>{{ headerStats.tauxVariation }}% ce mois\r
            </div>\r
          </div>\r
          <div class="arh-stat">\r
            <div class="arh-stat-val">{{ headerStats.sessionsAVenir | number }}</div>\r
            <div class="arh-stat-lbl">\r
              <i class="isax isax-calendar-1"></i>Sessions \xE0 venir\r
            </div>\r
            <div class="arh-stat-sub">ce mois</div>\r
          </div>\r
          <div class="arh-stat" [class.arh-stat--warn]="headerStats.demandesEnAttente > 0">\r
            <div class="arh-stat-val">{{ headerStats.demandesEnAttente | number }}</div>\r
            <div class="arh-stat-lbl">\r
              <i class="isax isax-clock"></i>Demandes en attente\r
            </div>\r
            <div class="arh-stat-sub" [class.arh-sub-warn]="headerStats.demandesEnAttente > 0">\r
              \xC0 traiter\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Alerte si demandes en attente -->\r
        <div class="arh-alert-row" *ngIf="headerStats.demandesEnAttente > 0">\r
          <div class="arh-alert">\r
            <i class="isax isax-clock"></i>\r
            <span>{{ headerStats.demandesEnAttente }} demandes de formation en attente depuis plus de 48h \u2014 action requise</span>\r
            <a [routerLink]="routes.AdminrhDemande" class="arh-alert-link">Voir les demandes \u2192</a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Contenu selon la route -->\r
      @if(last !== 'students-details') {\r
        <div class="row">\r
            <!-- sidebar -->\r
            <app-adminrh-sidebar class="col-lg-3"></app-adminrh-sidebar>\r
            <!-- /Sidebar -->\r
\r
            <!-- Instructor Dashboard -->\r
            <div class="col-lg-9">\r
              <router-outlet></router-outlet>\r
            </div>\r
            <!-- Instructor Dashboard -->\r
        </div>\r
      }\r
\r
      @if(last === 'students-details') {\r
        <router-outlet></router-outlet>\r
      }\r
  </div>\r
</div>\r
\r
<!-- Footer -->\r
<footer class="footer">\r
  <!-- <div class="footer-bg">\r
      <img src="assets/img/bg/footer-bg-01.png" class="footer-bg-1" alt="">\r
      <img src="assets/img/bg/footer-bg-02.png" class="footer-bg-2" alt="">\r
  </div>\r
  <div class="footer-top">\r
      <div class="container">\r
          <div class="row row-gap-4">\r
              <div class="col-lg-4">\r
                  <div class="footer-about">\r
                      <div class="footer-logo">\r
                          <img src="assets/img/logo.svg" alt="">\r
                      </div>\r
                      <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>\r
                      <div class="d-flex align-items-center">\r
                          <a href="javascript:void(0);" class="me-2"><img src="assets/img/icon/appstore.svg" alt=""></a>\r
                          <a href="javascript:void(0);"><img src="assets/img/icon/googleplay.svg" alt=""></a>\r
                      </div>\r
                  </div>\r
              </div>\r
              <div class="col-lg-8">\r
                  <div class="row row-gap-4">\r
                      <div class="col-lg-3">\r
                          <div class="footer-widget footer-menu">\r
                              <h5 class="footer-title">For Instructor</h5>\r
                              <ul>\r
                                <li><a [routerLink]="routes.courseGrid">Search Mentors</a></li>\r
                                <li><a [routerLink]="routes.login">Login</a></li>\r
                                <li><a [routerLink]="routes.register">Register</a></li>\r
                                <li><a [routerLink]="routes.courseList">Booking</a></li>\r
                                <li><a [routerLink]="routes.students_Dashboard">Students Dashboard</a></li>\r
                            </ul>\r
                          </div>\r
                      </div>\r
                      <div class="col-lg-3">\r
                          <div class="footer-widget footer-menu">\r
                              <h5 class="footer-title">For Student</h5>\r
                              <ul>\r
                                <li><a href="javascript:void(0);">Appointments</a></li>\r
                                <li><a [routerLink]="routes.instructorMessage">Chat</a></li>\r
                                <li><a [routerLink]="routes.login">Login</a></li>\r
                                <li><a [routerLink]="routes.register">Register</a></li>\r
                                <li><a [routerLink]="routes.instructor_dashboard">Instructor Dashboard</a></li>\r
                            </ul>\r
                          </div>\r
                      </div>\r
                      <div class="col-lg-6">\r
                          <div class="footer-widget footer-contact">\r
                              <h5 class="footer-title">Newsletter</h5>\r
                              <div class="subscribe-input">\r
                                  <form action="javascript:void(0);">\r
                                      <input type="email" class="form-control" placeholder="Enter your Email Address">\r
                                      <button type="submit" class="btn btn-primary btn-sm inline-flex align-items-center"><i class="isax isax-send-2 me-1"></i>Subscribe</button>\r
                                  </form>\r
                              </div>\r
                              <div class="footer-contact-info">\r
                                  <div class="footer-address d-flex align-items-center">\r
                                      <img src="assets/img/icon/icon-20.svg" alt="Img" class="img-fluid me-2">\r
                                      <p> 3556  Beech Street, San Francisco,<br> California, CA 94108 </p>\r
                                  </div>\r
                                  <div class="footer-address d-flex align-items-center">\r
                                      <img src="assets/img/icon/icon-19.svg" alt="Img" class="img-fluid me-2">\r
                                      <p>dreamslms&#64;example.com</p>\r
                                  </div>\r
                                  <div class="footer-address d-flex align-items-center">\r
                                      <img src="assets/img/icon/icon-21.svg" alt="Img" class="img-fluid me-2">\r
                                      <p>+19 123-456-7890</p>\r
                                  </div>\r
                              </div>\r
                          </div>\r
                      </div>\r
                  </div>\r
              </div>\r
          </div>\r
      </div>\r
  </div> -->\r
  <div class="footer-bottom">\r
      <div class="container">\r
          <div class="row row-gap-2">\r
              <div class="col-md-6">\r
                  <div class="text-center text-md-start">\r
                      <p class="text-white">Copyright &copy; 2025 DreamsLMS. All rights reserved.</p>\r
                  </div>\r
              </div>\r
              <div class="col-md-6">\r
                  <div>\r
                      <ul class="d-flex align-items-center justify-content-center justify-content-md-end footer-link">\r
                        <li><a [routerLink]="routes.page_term_condition">Terms & Conditions</a></li>\r
                        <li><a [routerLink]="routes.page_privacy_policy">Privacy Policy</a></li>\r
                      </ul>\r
                  </div>\r
              </div>\r
          </div>\r
      </div>\r
  </div>\r
</footer>\r
<!-- /Footer -->\r
`, styles: ["/* src/app/features/adminrh/adminrh.component.scss */\n.content {\n  padding: 21px 0 !important;\n}\n.arh-header {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e5e7eb;\n  padding: 20px 24px 0;\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.arh-header-top-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #6b7280;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\n.arh-header-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.arh-identity {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.arh-av {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #e8f5ee;\n  color: #1a7a4a;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid #2da05e;\n  flex-shrink: 0;\n}\n.arh-name {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 3px;\n}\n.arh-company {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0 0 6px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.arh-company i {\n  font-size: 13px;\n  color: #2da05e;\n}\n.arh-role-badge {\n  display: inline-block;\n  font-size: 11px;\n  padding: 2px 12px;\n  border-radius: 20px;\n  background: #e8f5ee;\n  color: #1a7a4a;\n  border: 1px solid rgb(203.5636363636, 232.6363636364, 216.9818181818);\n  font-weight: 500;\n}\n.arh-actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.arh-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 8px 18px;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: all 0.15s;\n}\n.arh-btn i {\n  font-size: 15px;\n}\n.arh-btn.arh-btn-outline {\n  background: #fff;\n  color: #1a1a2e;\n  border: 1px solid #d1d5db;\n}\n.arh-btn.arh-btn-outline:hover {\n  border-color: #2da05e;\n  color: #1a7a4a;\n}\n.arh-btn.arh-btn-primary {\n  background: #1a7a4a;\n  color: #fff;\n  border: 1px solid #1a7a4a;\n}\n.arh-btn.arh-btn-primary:hover {\n  background: rgb(20.6243243243, 96.7756756757, 58.7);\n}\n.arh-stats-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  padding: 16px 0 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.arh-stat {\n  background: #f8fafc;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  padding: 14px 16px;\n  border-top: 3px solid transparent;\n  transition: box-shadow 0.15s;\n}\n.arh-stat:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.arh-stat--warn {\n  background: #fff8ee;\n  border-color: #f5c77e;\n  border-top-color: #f59e0b;\n}\n.arh-stat-val {\n  font-size: 26px;\n  font-weight: 700;\n  color: #1a1a2e;\n  line-height: 1.1;\n}\n.arh-stat-lbl {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #6b7280;\n  margin: 5px 0 4px;\n}\n.arh-stat-lbl i {\n  font-size: 13px;\n}\n.arh-stat-sub {\n  font-size: 11px;\n  font-weight: 500;\n  color: #16a34a;\n}\n.arh-stat-sub.arh-sub-down {\n  color: #dc2626;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.arh-stat-sub.arh-sub-down i {\n  font-size: 11px;\n}\n.arh-stat-sub.arh-sub-warn {\n  color: #b45309;\n}\n.arh-alert-row {\n  border-top: 1px solid #f0f0f0;\n  padding: 12px 0;\n}\n.arh-alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n  color: #b45309;\n  background: #fff8ee;\n  border: 1px solid #f5c77e;\n  border-radius: 8px;\n  padding: 10px 16px;\n}\n.arh-alert i {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.arh-alert span {\n  flex: 1;\n}\n.arh-alert-link {\n  font-weight: 600;\n  color: #1a1a2e;\n  text-decoration: none;\n  white-space: nowrap;\n  padding: 5px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: #fff;\n  font-size: 12px;\n  transition: border-color 0.15s;\n}\n.arh-alert-link:hover {\n  border-color: #2da05e;\n  color: #1a7a4a;\n}\n@media (max-width: 768px) {\n  .arh-stats-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .arh-stat-val {\n    font-size: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .arh-stats-row {\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n  }\n}\n/*# sourceMappingURL=adminrh.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: AuthService }, { type: DemandeFormationService }, { type: SessionFormationService }, { type: UserService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhComponent, { className: "AdminrhComponent", filePath: "src/app/features/adminrh/adminrh.component.ts", lineNumber: 22 });
})();
export {
  AdminrhComponent
};
//# sourceMappingURL=chunk-Q2JSVEUA.js.map
