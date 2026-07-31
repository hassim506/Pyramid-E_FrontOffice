import {
  DemandeFormationService
} from "./chunk-5322JQ3N.js";
import {
  UserService
} from "./chunk-BVKPWF4U.js";
import {
  ClientCompanyService
} from "./chunk-X44DCWVU.js";
import {
  CertificatService
} from "./chunk-7E3OQ4KN.js";
import "./chunk-5RVU2RVV.js";
import "./chunk-FQH4LUZ5.js";
import {
  TicketService
} from "./chunk-5F3JLCWO.js";
import {
  FormationService
} from "./chunk-QDYFEC2R.js";
import {
  RoleRedirectService
} from "./chunk-PO5O4LEF.js";
import {
  HasPermissionDirective
} from "./chunk-LPKZQSDR.js";
import "./chunk-MFYPUOQJ.js";
import {
  CommonService
} from "./chunk-3IL7EHHC.js";
import {
  AuthService
} from "./chunk-I3LFGWFR.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-37V3B3KY.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-UFFO2UKW.js";
import "./chunk-U7UKDAOZ.js";
import "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  DecimalPipe,
  NgIf
} from "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  catchError,
  forkJoin,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BSBCM3BI.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/common/superadmin-sidebar/superadmin-sidebar.component.ts
function SuperadminSidebarComponent_a_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3, "Entreprises");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.routes.superadminCompanyManagement);
  }
}
function SuperadminSidebarComponent_div_36_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 40);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2, " Tous les utilisateurs ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.superadminUserList);
  }
}
function SuperadminSidebarComponent_div_36_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 40);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2, " R\xF4les ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.superadminRole);
  }
}
function SuperadminSidebarComponent_div_36_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 40);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2, " Permissions ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.superadminPermission);
  }
}
function SuperadminSidebarComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, SuperadminSidebarComponent_div_36_a_1_Template, 3, 1, "a", 39)(2, SuperadminSidebarComponent_div_36_a_2_Template, 3, 1, "a", 39)(3, SuperadminSidebarComponent_div_36_a_3_Template, 3, 1, "a", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "lister utilisateurs");
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "lister roles");
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "lister permissions");
  }
}
function SuperadminSidebarComponent_a_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3, "Clients");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.routes.superadminClientList);
  }
}
var SuperadminSidebarComponent = class _SuperadminSidebarComponent {
  common;
  auth;
  roleRedirectService;
  routes = routes;
  base = "";
  page = "";
  last = "";
  currentUser;
  openGroups = {
    utilisateurs: true,
    pedagogie: false,
    finance: false
  };
  toggleGroup(key) {
    this.openGroups[key] = !this.openGroups[key];
  }
  getInitials() {
    const u = this.currentUser;
    if (!u)
      return "SA";
    const n = u.name || `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || u.email || "";
    return n.split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase() || "SA";
  }
  getDisplayName() {
    const u = this.currentUser;
    if (!u)
      return "Super Admin";
    return u.name || `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || u.email || "Super Admin";
  }
  getRoleLabel() {
    return this.currentUser?.role?.name || "Superadministrateur";
  }
  constructor(common, auth, roleRedirectService) {
    this.common = common;
    this.auth = auth;
    this.roleRedirectService = roleRedirectService;
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
    this.currentUser = this.auth.getUser();
  }
  logout() {
    const userData = localStorage.getItem("pyramide_user");
    let roleId = 0;
    if (userData) {
      try {
        roleId = JSON.parse(userData).role_id;
      } catch {
      }
    }
    localStorage.removeItem("pyramide_token");
    localStorage.removeItem("pyramide_user");
    this.roleRedirectService.redirectByRole(roleId);
  }
  static \u0275fac = function SuperadminSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminSidebarComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(RoleRedirectService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminSidebarComponent, selectors: [["app-superadmin-sidebar"]], decls: 113, vars: 24, consts: [[1, "sb-shell"], [1, "sb-logo"], [1, "sb-logo-mark"], [1, "sb-logo-text"], [1, "sb-logo-sub"], [1, "sb-user"], [1, "sb-av"], [1, "sb-uname"], [1, "sb-urole"], [1, "sb-scroll"], [1, "sb-section"], [1, "sb-section-label"], ["routerLinkActive", "active", 1, "sb-item", 3, "routerLink"], [1, "isax", "isax-grid-3"], [1, "sb-item-label"], [1, "sb-divider"], ["routerLinkActive", "active", "class", "sb-item", 3, "routerLink", 4, "appHasPermission"], [1, "sb-group"], [1, "sb-group-header", 3, "click"], [1, "isax", "isax-profile-2user", "icon"], [1, "isax", "isax-arrow-right-3", "arr"], ["class", "sb-sub", 4, "ngIf"], [1, "isax", "isax-book-1"], [1, "isax", "isax-clipboard-text"], [1, "isax", "isax-award"], [1, "isax", "isax-medal-star"], [1, "isax", "isax-note-21"], [1, "isax", "isax-calendar-1"], [1, "isax", "isax-routing-2"], [1, "isax", "isax-category"], [1, "isax", "isax-receipt-item"], [1, "isax", "isax-ticket"], [1, "sb-bottom"], ["routerLinkActive", "active", 1, "sb-bottom-item", 3, "routerLink"], [1, "isax", "isax-user-square"], [1, "sb-bottom-item", "logout", 3, "click"], [1, "isax", "isax-logout"], [1, "isax", "isax-building"], [1, "sb-sub"], ["routerLinkActive", "active", "class", "sb-sub-item", 3, "routerLink", 4, "appHasPermission"], ["routerLinkActive", "active", 1, "sb-sub-item", 3, "routerLink"], [1, "isax", "isax-people"], [1, "isax", "isax-shield-tick"], [1, "isax", "isax-lock"]], template: function SuperadminSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "L");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 3);
      \u0275\u0275text(6, "LMS Pro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275text(8, "Superadmin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div")(13, "div", 7);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11);
      \u0275\u0275text(20, "Vue d'ensemble");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 12);
      \u0275\u0275element(22, "i", 13);
      \u0275\u0275elementStart(23, "span", 14);
      \u0275\u0275text(24, "Tableau de bord");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(25, "div", 15);
      \u0275\u0275elementStart(26, "div", 10)(27, "div", 11);
      \u0275\u0275text(28, "Clients & acc\xE8s");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, SuperadminSidebarComponent_a_29_Template, 4, 1, "a", 16);
      \u0275\u0275elementStart(30, "div", 17)(31, "div", 18);
      \u0275\u0275listener("click", function SuperadminSidebarComponent_Template_div_click_31_listener() {
        return ctx.toggleGroup("utilisateurs");
      });
      \u0275\u0275element(32, "i", 19);
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34, "Utilisateurs & acc\xE8s");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, SuperadminSidebarComponent_div_36_Template, 4, 3, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, SuperadminSidebarComponent_a_37_Template, 4, 1, "a", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "div", 15);
      \u0275\u0275elementStart(39, "div", 10)(40, "div", 11);
      \u0275\u0275text(41, "P\xE9dagogie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 12);
      \u0275\u0275element(43, "i", 22);
      \u0275\u0275elementStart(44, "span", 14);
      \u0275\u0275text(45, "Formations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "a", 12);
      \u0275\u0275element(47, "i", 23);
      \u0275\u0275elementStart(48, "span", 14);
      \u0275\u0275text(49, "Assignments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "a", 12);
      \u0275\u0275element(51, "i", 24);
      \u0275\u0275elementStart(52, "span", 14);
      \u0275\u0275text(53, "Quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "a", 12);
      \u0275\u0275element(55, "i", 25);
      \u0275\u0275elementStart(56, "span", 14);
      \u0275\u0275text(57, "R\xE9sultats Quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "a", 12);
      \u0275\u0275element(59, "i", 26);
      \u0275\u0275elementStart(60, "span", 14);
      \u0275\u0275text(61, "Certificats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "a", 12);
      \u0275\u0275element(63, "i", 27);
      \u0275\u0275elementStart(64, "span", 14);
      \u0275\u0275text(65, "Sessions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "a", 12);
      \u0275\u0275element(67, "i", 28);
      \u0275\u0275elementStart(68, "span", 14);
      \u0275\u0275text(69, "Parcours");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "a", 12);
      \u0275\u0275element(71, "i", 29);
      \u0275\u0275elementStart(72, "span", 14);
      \u0275\u0275text(73, "Catalogues");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(74, "div", 15);
      \u0275\u0275elementStart(75, "div", 10)(76, "div", 11);
      \u0275\u0275text(77, "Rapport");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "a", 12);
      \u0275\u0275element(79, "i", 30);
      \u0275\u0275elementStart(80, "span", 14);
      \u0275\u0275text(81, "Rapports");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(82, "div", 15);
      \u0275\u0275elementStart(83, "div", 10)(84, "div", 11);
      \u0275\u0275text(85, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "a", 12);
      \u0275\u0275element(87, "i", 31);
      \u0275\u0275elementStart(88, "span", 14);
      \u0275\u0275text(89, "Tickets support");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(90, "div", 15);
      \u0275\u0275elementStart(91, "div", 10)(92, "div", 11);
      \u0275\u0275text(93, "Sondages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "a", 12);
      \u0275\u0275element(95, "i", 26);
      \u0275\u0275elementStart(96, "span", 14);
      \u0275\u0275text(97, "Sondages & enqu\xEAtes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(98, "div", 15);
      \u0275\u0275elementStart(99, "div", 10)(100, "div", 11);
      \u0275\u0275text(101, "S\xE9curit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "a", 12);
      \u0275\u0275element(103, "i", 23);
      \u0275\u0275elementStart(104, "span", 14);
      \u0275\u0275text(105, "Logs d'audit");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(106, "div", 32)(107, "a", 33);
      \u0275\u0275element(108, "i", 34);
      \u0275\u0275text(109, " Mon profil ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 35);
      \u0275\u0275listener("click", function SuperadminSidebarComponent_Template_div_click_110_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(111, "i", 36);
      \u0275\u0275text(112, " D\xE9connexion ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getDisplayName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getRoleLabel());
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.superadmin_dashboard);
      \u0275\u0275advance(8);
      \u0275\u0275property("appHasPermission", "lister entreprises");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("open", ctx.openGroups["utilisateurs"]);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.openGroups["utilisateurs"]);
      \u0275\u0275advance();
      \u0275\u0275property("appHasPermission", "lister clients");
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.superadminCourse);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.superadminAssignment);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.page === "superadmin-quiz" || ctx.page === "superadmin-quiz-questions");
      \u0275\u0275property("routerLink", ctx.routes.superadminQuiz);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.superadminQuizResult);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.superadminCertificate);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.superadminSession);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.superadminParcours);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.superadminCatalogue);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.superadminRapports);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.superadmin_tickets);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.superadminSondage);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.superadminAuditLogs);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.superadminProfile);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink, RouterLinkActive, HasPermissionDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell[_ngcontent-%COMP%] {\n  background: #0F172A;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 16px 14px;\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-logo-mark[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #1D9E75;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-logo-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-logo-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n  margin-top: 1px;\n}\n.sb-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px;\n  margin: 10px 10px 4px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  flex-shrink: 0;\n}\n.sb-av[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #534AB7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #CECBF6;\n  flex-shrink: 0;\n}\n.sb-uname[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-urole[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.sb-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 6px 0 10px;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 3px;\n}\n.sb-section[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.sb-section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 18px 4px;\n}\n.sb-divider[_ngcontent-%COMP%] {\n  height: 0.5px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 6px 14px;\n}\n.sb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 14px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-item.active[_ngcontent-%COMP%] {\n  background: #1D4ED8;\n  color: #fff;\n}\n.sb-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sb-item-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 500;\n}\n.sb-badge.notif[_ngcontent-%COMP%] {\n  background: #DC2626;\n  color: #fff;\n}\n.sb-group[_ngcontent-%COMP%] {\n  margin: 1px 8px;\n}\n.sb-group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 6px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  transition: color 0.12s;\n}\n.sb-group-header[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header.open[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-group-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-group-header[_ngcontent-%COMP%]   i.arr[_ngcontent-%COMP%] {\n  font-size: 12px;\n  transition: transform 0.15s;\n}\n.sb-group-header.open[_ngcontent-%COMP%]   i.arr[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.sb-sub[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 0.5px solid rgba(255, 255, 255, 0.1);\n  margin: 2px 0 4px 22px;\n}\n.sb-sub-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n}\n.sb-sub-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sb-sub-item[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sb-sub-item.active[_ngcontent-%COMP%] {\n  color: #93C5FD;\n}\n.sb-bottom[_ngcontent-%COMP%] {\n  padding: 10px 10px 14px;\n  border-top: 0.5px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-bottom-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sb-bottom-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.active[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%] {\n  color: rgba(220, 38, 38, 0.7);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.1);\n  color: #FCA5A5;\n}\n/*# sourceMappingURL=superadmin-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-sidebar", imports: [CommonModule, RouterLink, RouterLinkActive, HasPermissionDirective], template: `<div class="sb-shell">\r
\r
  <!-- \u2500\u2500 LOGO \u2500\u2500 -->\r
  <div class="sb-logo">\r
    <div class="sb-logo-mark">L</div>\r
    <div>\r
      <div class="sb-logo-text">LMS Pro</div>\r
      <div class="sb-logo-sub">Superadmin</div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 USER \u2500\u2500 -->\r
  <div class="sb-user">\r
    <div class="sb-av">{{ getInitials() }}</div>\r
    <div>\r
      <div class="sb-uname">{{ getDisplayName() }}</div>\r
      <div class="sb-urole">{{ getRoleLabel() }}</div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 NAV \u2500\u2500 -->\r
  <div class="sb-scroll">\r
\r
    <!-- VUE D'ENSEMBLE -->\r
    <div class="sb-section">\r
      <div class="sb-section-label">Vue d'ensemble</div>\r
      <a [routerLink]="routes.superadmin_dashboard" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-grid-3"></i><span class="sb-item-label">Tableau de bord</span>\r
      </a>\r
      <!-- <a [routerLink]="routes.superadminAnnouncements" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-volume-high"></i><span class="sb-item-label">Annonces</span>\r
      </a> -->\r
    </div>\r
\r
    <div class="sb-divider"></div>\r
\r
    <!-- CLIENTS & ACC\xC8S -->\r
    <div class="sb-section">\r
      <div class="sb-section-label">Clients & acc\xE8s</div>\r
\r
      <a *appHasPermission="'lister entreprises'"\r
         [routerLink]="routes.superadminCompanyManagement" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-building"></i><span class="sb-item-label">Entreprises</span>\r
      </a>\r
\r
      <!-- Utilisateurs & acc\xE8s group -->\r
      <div class="sb-group">\r
        <div class="sb-group-header" [class.open]="openGroups['utilisateurs']"\r
             (click)="toggleGroup('utilisateurs')">\r
          <i class="isax isax-profile-2user icon"></i>\r
          <span>Utilisateurs & acc\xE8s</span>\r
          <i class="isax isax-arrow-right-3 arr"></i>\r
        </div>\r
        <div class="sb-sub" *ngIf="openGroups['utilisateurs']">\r
          <a *appHasPermission="'lister utilisateurs'"\r
             [routerLink]="routes.superadminUserList" routerLinkActive="active" class="sb-sub-item">\r
            <i class="isax isax-people"></i> Tous les utilisateurs\r
          </a>\r
          <a *appHasPermission="'lister roles'"\r
             [routerLink]="routes.superadminRole" routerLinkActive="active" class="sb-sub-item">\r
            <i class="isax isax-shield-tick"></i> R\xF4les\r
          </a>\r
          <a *appHasPermission="'lister permissions'"\r
             [routerLink]="routes.superadminPermission" routerLinkActive="active" class="sb-sub-item">\r
            <i class="isax isax-lock"></i> Permissions\r
          </a>\r
        </div>\r
      </div>\r
\r
      <a *appHasPermission="'lister clients'"\r
         [routerLink]="routes.superadminClientList" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-people"></i><span class="sb-item-label">Clients</span>\r
      </a>\r
    </div>\r
\r
    <div class="sb-divider"></div>\r
\r
    <!-- P\xC9DAGOGIE -->\r
    <div class="sb-section">\r
      <div class="sb-section-label">P\xE9dagogie</div>\r
      <a [routerLink]="routes.superadminCourse" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-book-1"></i><span class="sb-item-label">Formations</span>\r
      </a>\r
      <a [routerLink]="routes.superadminAssignment" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-clipboard-text"></i><span class="sb-item-label">Assignments</span>\r
      </a>\r
      <a [routerLink]="routes.superadminQuiz" routerLinkActive="active" class="sb-item"\r
         [class.active]="page==='superadmin-quiz' || page==='superadmin-quiz-questions'">\r
        <i class="isax isax-award"></i><span class="sb-item-label">Quiz</span>\r
      </a>\r
      <a [routerLink]="routes.superadminQuizResult" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-medal-star"></i><span class="sb-item-label">R\xE9sultats Quiz</span>\r
      </a>\r
      <a [routerLink]="routes.superadminCertificate" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-note-21"></i><span class="sb-item-label">Certificats</span>\r
      </a>\r
      <a [routerLink]="routes.superadminSession" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-calendar-1"></i><span class="sb-item-label">Sessions</span>\r
      </a>\r
      <a [routerLink]="routes.superadminParcours" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-routing-2"></i><span class="sb-item-label">Parcours</span>\r
      </a>\r
      <a [routerLink]="routes.superadminCatalogue" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-category"></i><span class="sb-item-label">Catalogues</span>\r
      </a>\r
    </div>\r
\r
    <div class="sb-divider"></div>\r
\r
    <!-- FINANCE -->\r
    <div class="sb-section">\r
      <div class="sb-section-label">Rapport</div>\r
      <!-- <a [routerLink]="routes.superadminEarning" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-wallet-add"></i><span class="sb-item-label">Gains</span>\r
      </a> -->\r
      <!-- <a [routerLink]="routes.superadmin_payouts" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-coin-1"></i><span class="sb-item-label">Paiements</span>\r
      </a> -->\r
      <a [routerLink]="routes.superadminRapports" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-receipt-item"></i><span class="sb-item-label">Rapports</span>\r
      </a>\r
    </div>\r
\r
    <div class="sb-divider"></div>\r
\r
    <!-- SUPPORT -->\r
    <div class="sb-section">\r
      <div class="sb-section-label">Support</div>\r
      <!-- <a [routerLink]="routes.superadminMessage" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-messages-3"></i><span class="sb-item-label">Messages</span>\r
      </a> -->\r
      <a [routerLink]="routes.superadmin_tickets" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-ticket"></i><span class="sb-item-label">Tickets support</span>\r
      </a>\r
    </div>\r
\r
    <div class="sb-divider"></div>\r
\r
    <!-- SONDAGES -->\r
    <div class="sb-section">\r
      <div class="sb-section-label">Sondages</div>\r
      <a [routerLink]="routes.superadminSondage" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-note-21"></i><span class="sb-item-label">Sondages &amp; enqu\xEAtes</span>\r
      </a>\r
    </div>\r
\r
    <div class="sb-divider"></div>\r
\r
    <!-- S\xC9CURIT\xC9 -->\r
    <div class="sb-section">\r
      <div class="sb-section-label">S\xE9curit\xE9</div>\r
      <a [routerLink]="routes.superadminAuditLogs" routerLinkActive="active" class="sb-item">\r
        <i class="isax isax-clipboard-text"></i><span class="sb-item-label">Logs d'audit</span>\r
      </a>\r
    </div>\r
\r
  </div><!-- /sb-scroll -->\r
\r
  <!-- \u2500\u2500 BOTTOM \u2500\u2500 -->\r
  <div class="sb-bottom">\r
    <a [routerLink]="routes.superadminProfile" routerLinkActive="active" class="sb-bottom-item">\r
      <i class="isax isax-user-square"></i> Mon profil\r
    </a>\r
    <!-- <a [routerLink]="routes.superadminSettings" routerLinkActive="active" class="sb-bottom-item"\r
       [class.active]="last==='superadmin-settings' || last==='superadmin-change-password'">\r
      <i class="isax isax-setting-2"></i> Param\xE8tres\r
    </a> -->\r
    <div class="sb-bottom-item logout" (click)="logout()">\r
      <i class="isax isax-logout"></i> D\xE9connexion\r
    </div>\r
  </div>\r
\r
</div>\r
`, styles: ["/* src/app/features/superadmin/common/superadmin-sidebar/superadmin-sidebar.component.scss */\n:host {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell {\n  background: #0F172A;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 16px 14px;\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-logo-mark {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #1D9E75;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-logo-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-logo-sub {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n  margin-top: 1px;\n}\n.sb-user {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px;\n  margin: 10px 10px 4px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  flex-shrink: 0;\n}\n.sb-av {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #534AB7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #CECBF6;\n  flex-shrink: 0;\n}\n.sb-uname {\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-urole {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.sb-scroll {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 6px 0 10px;\n}\n.sb-scroll::-webkit-scrollbar {\n  width: 3px;\n}\n.sb-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sb-scroll::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 3px;\n}\n.sb-section {\n  margin-bottom: 4px;\n}\n.sb-section-label {\n  font-size: 10px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 18px 4px;\n}\n.sb-divider {\n  height: 0.5px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 6px 14px;\n}\n.sb-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 14px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item i {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-item:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-item.active {\n  background: #1D4ED8;\n  color: #fff;\n}\n.sb-item.active i {\n  color: #fff;\n}\n.sb-item-label {\n  flex: 1;\n}\n.sb-badge {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 500;\n}\n.sb-badge.notif {\n  background: #DC2626;\n  color: #fff;\n}\n.sb-group {\n  margin: 1px 8px;\n}\n.sb-group-header {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 6px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  transition: color 0.12s;\n}\n.sb-group-header:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header.open {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header i.icon {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-group-header span {\n  flex: 1;\n}\n.sb-group-header i.arr {\n  font-size: 12px;\n  transition: transform 0.15s;\n}\n.sb-group-header.open i.arr {\n  transform: rotate(90deg);\n}\n.sb-sub {\n  padding-left: 10px;\n  border-left: 0.5px solid rgba(255, 255, 255, 0.1);\n  margin: 2px 0 4px 22px;\n}\n.sb-sub-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n}\n.sb-sub-item i {\n  font-size: 14px;\n}\n.sb-sub-item:hover {\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sb-sub-item.active {\n  color: #93C5FD;\n}\n.sb-bottom {\n  padding: 10px 10px 14px;\n  border-top: 0.5px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-bottom-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item i {\n  font-size: 15px;\n}\n.sb-bottom-item:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.active {\n  color: rgba(255, 255, 255, 0.85);\n}\n.sb-bottom-item.logout {\n  color: rgba(220, 38, 38, 0.7);\n}\n.sb-bottom-item.logout:hover {\n  background: rgba(220, 38, 38, 0.1);\n  color: #FCA5A5;\n}\n/*# sourceMappingURL=superadmin-sidebar.component.css.map */\n"] }]
  }], () => [{ type: CommonService }, { type: AuthService }, { type: RoleRedirectService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminSidebarComponent, { className: "SuperadminSidebarComponent", filePath: "app/features/superadmin/common/superadmin-sidebar/superadmin-sidebar.component.ts", lineNumber: 16 });
})();

// src/app/features/superadmin/superadmin.component.ts
function SuperadminComponent_Conditional_0_Template(rf, ctx) {
}
function SuperadminComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "app-superadmin-sidebar", 41);
    \u0275\u0275elementStart(2, "div", 42);
    \u0275\u0275element(3, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var SuperadminComponent = class _SuperadminComponent {
  router;
  userService;
  formationService;
  clientCompanyService;
  ticketService;
  certificatService;
  demandeService;
  routes = routes;
  last = "";
  superAdminProfile = null;
  headerStats = {
    entreprises: 0,
    entreprisesGrowth: 0,
    utilisateurs: 0,
    utilisateursGrowth: 0,
    formations: 0,
    demandes: 0,
    certificats: 0,
    ticketsUrgents: 0,
    certificatsExpirant: 0,
    comptesEnAttente: 0
  };
  constructor(router, userService, formationService, clientCompanyService, ticketService, certificatService, demandeService) {
    this.router = router;
    this.userService = userService;
    this.formationService = formationService;
    this.clientCompanyService = clientCompanyService;
    this.ticketService = ticketService;
    this.certificatService = certificatService;
    this.demandeService = demandeService;
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
      formations: this.formationService.getFormations({ page: 1, limit: 1e3 }).pipe(catchError(() => of(null))),
      companies: this.clientCompanyService.getCompanies().pipe(catchError(() => of(null))),
      tickets: this.ticketService.getTickets({ statut: "ouvert", priorite: "urgent" }).pipe(catchError(() => of(null))),
      certificats: this.certificatService.getCertificats().pipe(catchError(() => of(null))),
      demandes: this.demandeService.getDemandesFormation().pipe(catchError(() => of(null)))
    }).subscribe((data) => {
      const users = this.extractArray(data.users, ["utilisateurs", "data", "users"]);
      const formations = this.extractArray(data.formations, ["formations", "data"]);
      const companies = this.extractArray(data.companies, ["entreprises", "data", "companies"]);
      const tickets = this.extractArray(data.tickets, ["tickets", "data"]);
      const certs = Array.isArray(data.certificats) ? data.certificats : [];
      const demandes = this.extractArray(data.demandes, ["demandes", "data"]);
      const now = /* @__PURE__ */ new Date();
      const in30 = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1e3);
      this.headerStats = {
        entreprises: companies.length,
        entreprisesGrowth: this.countThisMonth(companies),
        utilisateurs: users.length,
        utilisateursGrowth: this.countThisMonth(users),
        formations: formations.filter((f) => f.est_publie || f.statut === "publie").length || formations.length,
        demandes: demandes.filter((d) => d.statut === "en_attente" || d.statut === "pending").length,
        certificats: certs.length,
        ticketsUrgents: tickets.filter((t) => t.priorite === "urgent" && t.statut === "ouvert").length || tickets.length,
        certificatsExpirant: certs.filter((c) => {
          if (!c.date_expiration)
            return false;
          const exp = new Date(c.date_expiration);
          return exp >= now && exp <= in30;
        }).length,
        comptesEnAttente: users.filter((u) => u.statut === 0 || u.statut === "0").length
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
        const currentUser = JSON.parse(userDataString);
        if (!currentUser.role && currentUser.role_id === 1) {
          currentUser.role = "Super Admin";
        }
        this.superAdminProfile = currentUser;
      }
    } catch (error) {
      console.error("Erreur lors du chargement du profil:", error);
    }
  }
  getFullName() {
    if (!this.superAdminProfile)
      return "Utilisateur";
    return `${this.superAdminProfile.prenom} ${this.superAdminProfile.nom}`;
  }
  getRoleName(user) {
    if (!user.role) {
      return "Non d\xE9fini";
    }
    if (typeof user.role === "object" && user.role !== null && "name" in user.role) {
      return user.role.name;
    }
    if (typeof user.role === "string") {
      return user.role;
    }
    return "Non d\xE9fini";
  }
  getInitials() {
    if (!this.superAdminProfile)
      return "U";
    const firstNameInitial = this.superAdminProfile.prenom?.charAt(0) || "";
    const lastNameInitial = this.superAdminProfile.nom?.charAt(0) || "";
    return (firstNameInitial + lastNameInitial).toUpperCase();
  }
  getUserAvatar() {
    if (this.superAdminProfile && this.superAdminProfile.avatar) {
      return this.superAdminProfile.avatar;
    }
    return "assets/img/user/user-01.jpg";
  }
  static \u0275fac = function SuperadminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(ClientCompanyService), \u0275\u0275directiveInject(TicketService), \u0275\u0275directiveInject(CertificatService), \u0275\u0275directiveInject(DemandeFormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminComponent, selectors: [["app-superadmin"]], features: [\u0275\u0275ProvidersFeature([DecimalPipe])], decls: 99, vars: 29, consts: [[1, "content"], [1, "container"], [1, "sa-header"], [1, "sa-header-top-label"], [1, "sa-header-main"], [1, "sa-header-identity"], [1, "sa-av"], [1, "sa-id-info"], [1, "sa-name"], [1, "sa-role"], [1, "isax", "isax-refresh-circle"], [1, "sa-access-badge"], [1, "sa-header-actions"], ["title", "Ajouter une entreprise", 3, "routerLink"], [1, "isax", "isax-add-circle"], ["title", "Tableau de bord Super Admin", 3, "routerLink"], [1, "isax", "isax-chart-square"], [1, "sa-stats-row"], [1, "sa-stat"], [1, "sa-stat-val"], [1, "sa-stat-lbl"], [1, "sa-stat-sub", "text-success"], [1, "sa-stat-divider"], [1, "sa-stat-sub", "sa-cyan"], [1, "sa-stat-sub", "text-danger"], [1, "sa-alerts-row"], [1, "sa-alert", "sa-alert-danger"], [1, "isax", "isax-warning-2"], [1, "sa-alert", "sa-alert-warning"], [1, "isax", "isax-clock"], [1, "sa-alert", "sa-alert-info"], [1, "isax", "isax-people"], [1, "row"], [1, "footer"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [3, "routerLink"], [1, "col-lg-3"], [1, "col-lg-9"]], template: function SuperadminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SuperadminComponent_Conditional_0_Template, 0, 0);
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
      \u0275\u0275text(5, "SUPERADMIN \u2014 GOUVERNANCE GLOBALE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "h5", 8);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 9);
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275text(15, " Superadministrateur \xB7 Pyramid-e LMS ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 11);
      \u0275\u0275text(17, "Acc\xE8s total plateforme");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 12)(19, "a", 13);
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275text(21, "Ajouter entreprise ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 15);
      \u0275\u0275element(23, "i", 16);
      \u0275\u0275text(24, "Tableau de bord ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 17)(26, "div", 18)(27, "div", 19);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 20);
      \u0275\u0275text(31, "ENTREPRISES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 21);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(34, "div", 22);
      \u0275\u0275elementStart(35, "div", 18)(36, "div", 19);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 20);
      \u0275\u0275text(40, "UTILISATEURS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 21);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(43, "div", 22);
      \u0275\u0275elementStart(44, "div", 18)(45, "div", 19);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 20);
      \u0275\u0275text(49, "FORMATIONS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 23);
      \u0275\u0275text(51, "actives");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(52, "div", 22);
      \u0275\u0275elementStart(53, "div", 18)(54, "div", 19);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 20);
      \u0275\u0275text(58, "DEMANDES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 24);
      \u0275\u0275text(60, "en attente");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(61, "div", 22);
      \u0275\u0275elementStart(62, "div", 18)(63, "div", 19);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 20);
      \u0275\u0275text(67, "CERTIFICATS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 21);
      \u0275\u0275text(69, "d\xE9livr\xE9s");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 25)(71, "span", 26);
      \u0275\u0275element(72, "i", 27);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span", 28);
      \u0275\u0275element(75, "i", 29);
      \u0275\u0275text(76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span", 30);
      \u0275\u0275element(78, "i", 31);
      \u0275\u0275text(79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(80, SuperadminComponent_Conditional_80_Template, 4, 0, "div", 32);
      \u0275\u0275conditionalCreate(81, SuperadminComponent_Conditional_81_Template, 1, 0, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "footer", 33)(83, "div", 34)(84, "div", 1)(85, "div", 35)(86, "div", 36)(87, "div", 37)(88, "p", 38);
      \u0275\u0275text(89, "Copyright \xA9 2025 Pyramide. tout droits reserv\xE9s.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 36)(91, "div")(92, "ul", 39)(93, "li")(94, "a", 40);
      \u0275\u0275text(95, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "li")(97, "a", 40);
      \u0275\u0275text(98, "Politique de Confidentialit\xE9");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.last !== "view" ? 0 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getFullName());
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.superadminCompanyManagement);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.superadmin_dashboard);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 19, ctx.headerStats.entreprises));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("+", ctx.headerStats.entreprisesGrowth, " ce mois");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 21, ctx.headerStats.utilisateurs));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("+", ctx.headerStats.utilisateursGrowth);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 23, ctx.headerStats.formations));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 25, ctx.headerStats.demandes));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 27, ctx.headerStats.certificats));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.headerStats.ticketsUrgents, " tickets urgents ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.headerStats.certificatsExpirant, " certificats expirent <30j ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.headerStats.comptesEnAttente, " comptes en attente de validation ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.last !== "students-details" ? 80 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.last === "students-details" ? 81 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.page_term_condition);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_privacy_policy);
    }
  }, dependencies: [CommonModule, RouterOutlet, RouterModule, RouterLink, SuperadminSidebarComponent, DecimalPipe], styles: ["\n\n.sa-header[_ngcontent-%COMP%] {\n  background: #0f1b35;\n  border-radius: 14px;\n  padding: 18px 24px 16px;\n  margin-bottom: 24px;\n  color: #fff;\n}\n.sa-header-top-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  color: rgba(255, 255, 255, 0.45);\n  text-transform: uppercase;\n  margin-bottom: 14px;\n}\n.sa-header-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.sa-header-identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.sa-av[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #534AB7;\n  color: #CECBF6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.sa-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  margin: 0 0 3px;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 21px 0 !important;\n}\n.sa-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.55);\n  margin: 0 0 7px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.sa-role[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sa-access-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  padding: 3px 12px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.75);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.sa-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.sa-header-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.55);\n  text-decoration: none;\n  padding: 5px 0;\n  transition: color 0.15s;\n}\n.sa-header-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sa-header-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.sa-stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0;\n  padding: 16px 0 14px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 14px;\n}\n.sa-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 80px;\n  text-align: center;\n  padding: 0 12px;\n}\n.sa-stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.1);\n  flex-shrink: 0;\n}\n.sa-stat-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.1;\n}\n.sa-stat-lbl[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: rgba(255, 255, 255, 0.4);\n  text-transform: uppercase;\n  margin: 3px 0 2px;\n}\n.sa-stat-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n.sa-stat-sub.sa-cyan[_ngcontent-%COMP%] {\n  color: #22d3ee;\n}\n.sa-alerts-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.sa-alert[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 5px 14px;\n  border-radius: 20px;\n}\n.sa-alert[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sa-alert.sa-alert-danger[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.18);\n  color: #fca5a5;\n}\n.sa-alert.sa-alert-warning[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.15);\n  color: #fde68a;\n}\n.sa-alert.sa-alert-info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.15);\n  color: #93c5fd;\n}\n@media (max-width: 768px) {\n  .sa-stats-row[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .sa-stat[_ngcontent-%COMP%] {\n    min-width: 60px;\n    padding: 0 6px;\n  }\n  .sa-stat-val[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .sa-stat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=superadmin.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin", imports: [CommonModule, RouterOutlet, RouterModule, SuperadminSidebarComponent, HasPermissionDirective], providers: [DecimalPipe], template: `<!-- Breadcrumb -->\r
@if (last !== 'view') {\r
  <!-- <div class="breadcrumb-bar text-center">\r
    <div class="container">\r
      <div class="row">\r
        <div class="col-md-12 col-12">\r
          <div class="breadcrumb-list">\r
            <h2 class="breadcrumb-title">{{ last | titlecase }}</h2>\r
            <nav aria-label="breadcrumb" class="page-breadcrumb">\r
              <ol class="breadcrumb justify-content-center mb-0">\r
                <li class="breadcrumb-item"><a [routerLink]="routes.home">Home</a></li>\r
                <li class="breadcrumb-item active" aria-current="page">{{ last | titlecase }}</li>\r
              </ol>\r
            </nav>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div> -->\r
}\r
<!-- /Breadcrumb -->\r
<div class="content">\r
  <div class="container">\r
      <!-- Header Superadmin Gouvernance Globale -->\r
      <div class="sa-header">\r
        <div class="sa-header-top-label">SUPERADMIN \u2014 GOUVERNANCE GLOBALE</div>\r
\r
        <div class="sa-header-main">\r
          <div class="sa-header-identity">\r
            <div class="sa-av">{{ getInitials() }}</div>\r
            <div class="sa-id-info">\r
              <h5 class="sa-name">{{ getFullName() }}</h5>\r
              <p class="sa-role">\r
                <i class="isax isax-refresh-circle"></i>\r
                Superadministrateur \xB7 Pyramid-e LMS\r
              </p>\r
              <span class="sa-access-badge">Acc\xE8s total plateforme</span>\r
            </div>\r
          </div>\r
          <div class="sa-header-actions">\r
            <a [routerLink]="routes.superadminCompanyManagement" title="Ajouter une entreprise">\r
              <i class="isax isax-add-circle"></i>Ajouter entreprise\r
            </a>\r
            <a [routerLink]="routes.superadmin_dashboard" title="Tableau de bord Super Admin">\r
              <i class="isax isax-chart-square"></i>Tableau de bord\r
            </a>\r
          </div>\r
        </div>\r
\r
        <div class="sa-stats-row">\r
          <div class="sa-stat">\r
            <div class="sa-stat-val">{{ headerStats.entreprises | number }}</div>\r
            <div class="sa-stat-lbl">ENTREPRISES</div>\r
            <div class="sa-stat-sub text-success">+{{ headerStats.entreprisesGrowth }} ce mois</div>\r
          </div>\r
          <div class="sa-stat-divider"></div>\r
          <div class="sa-stat">\r
            <div class="sa-stat-val">{{ headerStats.utilisateurs | number }}</div>\r
            <div class="sa-stat-lbl">UTILISATEURS</div>\r
            <div class="sa-stat-sub text-success">+{{ headerStats.utilisateursGrowth }}</div>\r
          </div>\r
          <div class="sa-stat-divider"></div>\r
          <div class="sa-stat">\r
            <div class="sa-stat-val">{{ headerStats.formations | number }}</div>\r
            <div class="sa-stat-lbl">FORMATIONS</div>\r
            <div class="sa-stat-sub sa-cyan">actives</div>\r
          </div>\r
          <div class="sa-stat-divider"></div>\r
          <div class="sa-stat">\r
            <div class="sa-stat-val">{{ headerStats.demandes | number }}</div>\r
            <div class="sa-stat-lbl">DEMANDES</div>\r
            <div class="sa-stat-sub text-danger">en attente</div>\r
          </div>\r
          <div class="sa-stat-divider"></div>\r
          <div class="sa-stat">\r
            <div class="sa-stat-val">{{ headerStats.certificats | number }}</div>\r
            <div class="sa-stat-lbl">CERTIFICATS</div>\r
            <div class="sa-stat-sub text-success">d\xE9livr\xE9s</div>\r
          </div>\r
        </div>\r
\r
        <div class="sa-alerts-row">\r
          <span class="sa-alert sa-alert-danger">\r
            <i class="isax isax-warning-2"></i>{{ headerStats.ticketsUrgents }} tickets urgents\r
          </span>\r
          <span class="sa-alert sa-alert-warning">\r
            <i class="isax isax-clock"></i>{{ headerStats.certificatsExpirant }} certificats expirent &lt;30j\r
          </span>\r
          <span class="sa-alert sa-alert-info">\r
            <i class="isax isax-people"></i>{{ headerStats.comptesEnAttente }} comptes en attente de validation\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- Contenu selon la route -->\r
      @if(last !== 'students-details') {\r
        <div class="row">\r
            <!-- sidebar -->\r
            <app-superadmin-sidebar class="col-lg-3"></app-superadmin-sidebar>\r
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
  </div> -->\r
  <!-- <div class="footer-top">\r
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
                                      <p>PYRAMIDE-E&#64;pyramide-e.com</p>\r
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
                      <p class="text-white">Copyright &copy; 2025 Pyramide. tout droits reserv\xE9s.</p>\r
                  </div>\r
              </div>\r
              <div class="col-md-6">\r
                  <div>\r
                      <ul class="d-flex align-items-center justify-content-center justify-content-md-end footer-link">\r
                        <li><a [routerLink]="routes.page_term_condition">Terms & Conditions</a></li>\r
                        <li><a [routerLink]="routes.page_privacy_policy">Politique de Confidentialit\xE9</a></li>\r
                      </ul>\r
                  </div>\r
              </div>\r
          </div>\r
      </div>\r
  </div>\r
</footer>\r
<!-- /Footer -->\r
`, styles: ["/* src/app/features/superadmin/superadmin.component.scss */\n.sa-header {\n  background: #0f1b35;\n  border-radius: 14px;\n  padding: 18px 24px 16px;\n  margin-bottom: 24px;\n  color: #fff;\n}\n.sa-header-top-label {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  color: rgba(255, 255, 255, 0.45);\n  text-transform: uppercase;\n  margin-bottom: 14px;\n}\n.sa-header-main {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.sa-header-identity {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.sa-av {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #534AB7;\n  color: #CECBF6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.sa-name {\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  margin: 0 0 3px;\n}\n.content {\n  padding: 21px 0 !important;\n}\n.sa-role {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.55);\n  margin: 0 0 7px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.sa-role i {\n  font-size: 13px;\n}\n.sa-access-badge {\n  display: inline-block;\n  font-size: 11px;\n  padding: 3px 12px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.75);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.sa-header-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.sa-header-actions a {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.55);\n  text-decoration: none;\n  padding: 5px 0;\n  transition: color 0.15s;\n}\n.sa-header-actions a i {\n  font-size: 15px;\n}\n.sa-header-actions a:hover {\n  color: #fff;\n}\n.sa-stats-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0;\n  padding: 16px 0 14px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 14px;\n}\n.sa-stat {\n  flex: 1;\n  min-width: 80px;\n  text-align: center;\n  padding: 0 12px;\n}\n.sa-stat-divider {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.1);\n  flex-shrink: 0;\n}\n.sa-stat-val {\n  font-size: 22px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.1;\n}\n.sa-stat-lbl {\n  font-size: 9px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: rgba(255, 255, 255, 0.4);\n  text-transform: uppercase;\n  margin: 3px 0 2px;\n}\n.sa-stat-sub {\n  font-size: 11px;\n  font-weight: 500;\n}\n.sa-stat-sub.sa-cyan {\n  color: #22d3ee;\n}\n.sa-alerts-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.sa-alert {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 5px 14px;\n  border-radius: 20px;\n}\n.sa-alert i {\n  font-size: 13px;\n}\n.sa-alert.sa-alert-danger {\n  background: rgba(220, 38, 38, 0.18);\n  color: #fca5a5;\n}\n.sa-alert.sa-alert-warning {\n  background: rgba(234, 179, 8, 0.15);\n  color: #fde68a;\n}\n.sa-alert.sa-alert-info {\n  background: rgba(59, 130, 246, 0.15);\n  color: #93c5fd;\n}\n@media (max-width: 768px) {\n  .sa-stats-row {\n    gap: 8px;\n  }\n  .sa-stat {\n    min-width: 60px;\n    padding: 0 6px;\n  }\n  .sa-stat-val {\n    font-size: 18px;\n  }\n  .sa-stat-divider {\n    display: none;\n  }\n}\n/*# sourceMappingURL=superadmin.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: UserService }, { type: FormationService }, { type: ClientCompanyService }, { type: TicketService }, { type: CertificatService }, { type: DemandeFormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminComponent, { className: "SuperadminComponent", filePath: "app/features/superadmin/superadmin.component.ts", lineNumber: 24 });
})();
export {
  SuperadminComponent
};
//# sourceMappingURL=chunk-SO7VTD6G.js.map
