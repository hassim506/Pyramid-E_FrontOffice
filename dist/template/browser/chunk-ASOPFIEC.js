import {
  HasPermissionDirective,
  RoleRedirectService
} from "./chunk-SPST6A72.js";
import "./chunk-B4O6F2DF.js";
import {
  CommonService
} from "./chunk-SMSMPMAO.js";
import {
  AuthService
} from "./chunk-REZZRIDN.js";
import "./chunk-FKX6UC3I.js";
import {
  routes
} from "./chunk-W6FAPSPW.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  NgIf,
  TitleCasePipe
} from "./chunk-3IMMP55I.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
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
} from "./chunk-UPBSS6WA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/common/superadmin-sidebar/superadmin-sidebar.component.ts
function SuperadminSidebarComponent_a_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3, "Entreprises");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.routes.superadminCompanyManagement);
  }
}
function SuperadminSidebarComponent_div_40_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2, " Tous les utilisateurs ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.superadminUserList);
  }
}
function SuperadminSidebarComponent_div_40_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 42);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2, " R\xF4les ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.superadminRole);
  }
}
function SuperadminSidebarComponent_div_40_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 42);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2, " Permissions ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.superadminPermission);
  }
}
function SuperadminSidebarComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, SuperadminSidebarComponent_div_40_a_1_Template, 3, 1, "a", 41)(2, SuperadminSidebarComponent_div_40_a_2_Template, 3, 1, "a", 41)(3, SuperadminSidebarComponent_div_40_a_3_Template, 3, 1, "a", 41);
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
function SuperadminSidebarComponent_a_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275element(1, "i", 43);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminSidebarComponent, selectors: [["app-superadmin-sidebar"]], decls: 104, vars: 26, consts: [[1, "sb-shell"], [1, "sb-logo"], [1, "sb-logo-mark"], [1, "sb-logo-text"], [1, "sb-logo-sub"], [1, "sb-user"], [1, "sb-av"], [1, "sb-uname"], [1, "sb-urole"], [1, "sb-scroll"], [1, "sb-section"], [1, "sb-section-label"], ["routerLinkActive", "active", 1, "sb-item", 3, "routerLink"], [1, "isax", "isax-grid-3"], [1, "sb-item-label"], [1, "isax", "isax-volume-high"], [1, "sb-divider"], ["routerLinkActive", "active", "class", "sb-item", 3, "routerLink", 4, "appHasPermission"], [1, "sb-group"], [1, "sb-group-header", 3, "click"], [1, "isax", "isax-profile-2user", "icon"], [1, "isax", "isax-arrow-right-3", "arr"], ["class", "sb-sub", 4, "ngIf"], [1, "isax", "isax-book-1"], [1, "isax", "isax-clipboard-text"], [1, "isax", "isax-award"], [1, "isax", "isax-medal-star"], [1, "isax", "isax-note-21"], [1, "isax", "isax-wallet-add"], [1, "isax", "isax-coin-1"], [1, "isax", "isax-receipt-item"], [1, "isax", "isax-messages-3"], [1, "isax", "isax-ticket"], [1, "sb-bottom"], ["routerLinkActive", "active", 1, "sb-bottom-item", 3, "routerLink"], [1, "isax", "isax-user-square"], [1, "isax", "isax-setting-2"], [1, "sb-bottom-item", "logout", 3, "click"], [1, "isax", "isax-logout"], [1, "isax", "isax-building"], [1, "sb-sub"], ["routerLinkActive", "active", "class", "sb-sub-item", 3, "routerLink", 4, "appHasPermission"], ["routerLinkActive", "active", 1, "sb-sub-item", 3, "routerLink"], [1, "isax", "isax-people"], [1, "isax", "isax-shield-tick"], [1, "isax", "isax-lock"]], template: function SuperadminSidebarComponent_Template(rf, ctx) {
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
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "a", 12);
      \u0275\u0275element(26, "i", 15);
      \u0275\u0275elementStart(27, "span", 14);
      \u0275\u0275text(28, "Annonces");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(29, "div", 16);
      \u0275\u0275elementStart(30, "div", 10)(31, "div", 11);
      \u0275\u0275text(32, "Clients & acc\xE8s");
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, SuperadminSidebarComponent_a_33_Template, 4, 1, "a", 17);
      \u0275\u0275elementStart(34, "div", 18)(35, "div", 19);
      \u0275\u0275listener("click", function SuperadminSidebarComponent_Template_div_click_35_listener() {
        return ctx.toggleGroup("utilisateurs");
      });
      \u0275\u0275element(36, "i", 20);
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38, "Utilisateurs & acc\xE8s");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(40, SuperadminSidebarComponent_div_40_Template, 4, 3, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, SuperadminSidebarComponent_a_41_Template, 4, 1, "a", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "div", 16);
      \u0275\u0275elementStart(43, "div", 10)(44, "div", 11);
      \u0275\u0275text(45, "P\xE9dagogie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 12);
      \u0275\u0275element(47, "i", 23);
      \u0275\u0275elementStart(48, "span", 14);
      \u0275\u0275text(49, "Formations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "a", 12);
      \u0275\u0275element(51, "i", 24);
      \u0275\u0275elementStart(52, "span", 14);
      \u0275\u0275text(53, "Assignments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "a", 12);
      \u0275\u0275element(55, "i", 25);
      \u0275\u0275elementStart(56, "span", 14);
      \u0275\u0275text(57, "Quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "a", 12);
      \u0275\u0275element(59, "i", 26);
      \u0275\u0275elementStart(60, "span", 14);
      \u0275\u0275text(61, "R\xE9sultats Quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "a", 12);
      \u0275\u0275element(63, "i", 27);
      \u0275\u0275elementStart(64, "span", 14);
      \u0275\u0275text(65, "Certificats");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(66, "div", 16);
      \u0275\u0275elementStart(67, "div", 10)(68, "div", 11);
      \u0275\u0275text(69, "Finance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "a", 12);
      \u0275\u0275element(71, "i", 28);
      \u0275\u0275elementStart(72, "span", 14);
      \u0275\u0275text(73, "Gains");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "a", 12);
      \u0275\u0275element(75, "i", 29);
      \u0275\u0275elementStart(76, "span", 14);
      \u0275\u0275text(77, "Paiements");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "a", 12);
      \u0275\u0275element(79, "i", 30);
      \u0275\u0275elementStart(80, "span", 14);
      \u0275\u0275text(81, "D\xE9clarations");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(82, "div", 16);
      \u0275\u0275elementStart(83, "div", 10)(84, "div", 11);
      \u0275\u0275text(85, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "a", 12);
      \u0275\u0275element(87, "i", 31);
      \u0275\u0275elementStart(88, "span", 14);
      \u0275\u0275text(89, "Messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "a", 12);
      \u0275\u0275element(91, "i", 32);
      \u0275\u0275elementStart(92, "span", 14);
      \u0275\u0275text(93, "Tickets support");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(94, "div", 33)(95, "a", 34);
      \u0275\u0275element(96, "i", 35);
      \u0275\u0275text(97, " Mon profil ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "a", 34);
      \u0275\u0275element(99, "i", 36);
      \u0275\u0275text(100, " Param\xE8tres ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 37);
      \u0275\u0275listener("click", function SuperadminSidebarComponent_Template_div_click_101_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(102, "i", 38);
      \u0275\u0275text(103, " D\xE9connexion ");
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
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.superadminAnnouncements);
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
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.superadminEarning);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.superadmin_payouts);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.superadminStatements);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.superadminMessage);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.superadmin_tickets);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.superadminProfile);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.last === "superadmin-settings" || ctx.last === "superadmin-change-password");
      \u0275\u0275property("routerLink", ctx.routes.superadminSettings);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink, RouterLinkActive, HasPermissionDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell[_ngcontent-%COMP%] {\n  background: #0F172A;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 16px 14px;\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-logo-mark[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #1D9E75;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-logo-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-logo-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n  margin-top: 1px;\n}\n.sb-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px;\n  margin: 10px 10px 4px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  flex-shrink: 0;\n}\n.sb-av[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #534AB7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #CECBF6;\n  flex-shrink: 0;\n}\n.sb-uname[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-urole[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.sb-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 6px 0 10px;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 3px;\n}\n.sb-section[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.sb-section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 18px 4px;\n}\n.sb-divider[_ngcontent-%COMP%] {\n  height: 0.5px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 6px 14px;\n}\n.sb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 14px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-item.active[_ngcontent-%COMP%] {\n  background: #1D4ED8;\n  color: #fff;\n}\n.sb-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sb-item-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 500;\n}\n.sb-badge.notif[_ngcontent-%COMP%] {\n  background: #DC2626;\n  color: #fff;\n}\n.sb-group[_ngcontent-%COMP%] {\n  margin: 1px 8px;\n}\n.sb-group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 6px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  transition: color 0.12s;\n}\n.sb-group-header[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header.open[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-group-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-group-header[_ngcontent-%COMP%]   i.arr[_ngcontent-%COMP%] {\n  font-size: 12px;\n  transition: transform 0.15s;\n}\n.sb-group-header.open[_ngcontent-%COMP%]   i.arr[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.sb-sub[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 0.5px solid rgba(255, 255, 255, 0.1);\n  margin: 2px 0 4px 22px;\n}\n.sb-sub-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n}\n.sb-sub-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sb-sub-item[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sb-sub-item.active[_ngcontent-%COMP%] {\n  color: #93C5FD;\n}\n.sb-bottom[_ngcontent-%COMP%] {\n  padding: 10px 10px 14px;\n  border-top: 0.5px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-bottom-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sb-bottom-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.active[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%] {\n  color: rgba(220, 38, 38, 0.7);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.1);\n  color: #FCA5A5;\n}\n/*# sourceMappingURL=superadmin-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-sidebar", imports: [CommonModule, RouterLink, RouterLinkActive, HasPermissionDirective], template: `<div class="sb-shell">

  <!-- \u2500\u2500 LOGO \u2500\u2500 -->
  <div class="sb-logo">
    <div class="sb-logo-mark">L</div>
    <div>
      <div class="sb-logo-text">LMS Pro</div>
      <div class="sb-logo-sub">Superadmin</div>
    </div>
  </div>

  <!-- \u2500\u2500 USER \u2500\u2500 -->
  <div class="sb-user">
    <div class="sb-av">{{ getInitials() }}</div>
    <div>
      <div class="sb-uname">{{ getDisplayName() }}</div>
      <div class="sb-urole">{{ getRoleLabel() }}</div>
    </div>
  </div>

  <!-- \u2500\u2500 NAV \u2500\u2500 -->
  <div class="sb-scroll">

    <!-- VUE D'ENSEMBLE -->
    <div class="sb-section">
      <div class="sb-section-label">Vue d'ensemble</div>
      <a [routerLink]="routes.superadmin_dashboard" routerLinkActive="active" class="sb-item">
        <i class="isax isax-grid-3"></i><span class="sb-item-label">Tableau de bord</span>
      </a>
      <a [routerLink]="routes.superadminAnnouncements" routerLinkActive="active" class="sb-item">
        <i class="isax isax-volume-high"></i><span class="sb-item-label">Annonces</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <!-- CLIENTS & ACC\xC8S -->
    <div class="sb-section">
      <div class="sb-section-label">Clients & acc\xE8s</div>

      <a *appHasPermission="'lister entreprises'"
         [routerLink]="routes.superadminCompanyManagement" routerLinkActive="active" class="sb-item">
        <i class="isax isax-building"></i><span class="sb-item-label">Entreprises</span>
      </a>

      <!-- Utilisateurs & acc\xE8s group -->
      <div class="sb-group">
        <div class="sb-group-header" [class.open]="openGroups['utilisateurs']"
             (click)="toggleGroup('utilisateurs')">
          <i class="isax isax-profile-2user icon"></i>
          <span>Utilisateurs & acc\xE8s</span>
          <i class="isax isax-arrow-right-3 arr"></i>
        </div>
        <div class="sb-sub" *ngIf="openGroups['utilisateurs']">
          <a *appHasPermission="'lister utilisateurs'"
             [routerLink]="routes.superadminUserList" routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-people"></i> Tous les utilisateurs
          </a>
          <a *appHasPermission="'lister roles'"
             [routerLink]="routes.superadminRole" routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-shield-tick"></i> R\xF4les
          </a>
          <a *appHasPermission="'lister permissions'"
             [routerLink]="routes.superadminPermission" routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-lock"></i> Permissions
          </a>
        </div>
      </div>

      <a *appHasPermission="'lister clients'"
         [routerLink]="routes.superadminClientList" routerLinkActive="active" class="sb-item">
        <i class="isax isax-people"></i><span class="sb-item-label">Clients</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <!-- P\xC9DAGOGIE -->
    <div class="sb-section">
      <div class="sb-section-label">P\xE9dagogie</div>
      <a [routerLink]="routes.superadminCourse" routerLinkActive="active" class="sb-item">
        <i class="isax isax-book-1"></i><span class="sb-item-label">Formations</span>
      </a>
      <a [routerLink]="routes.superadminAssignment" routerLinkActive="active" class="sb-item">
        <i class="isax isax-clipboard-text"></i><span class="sb-item-label">Assignments</span>
      </a>
      <a [routerLink]="routes.superadminQuiz" routerLinkActive="active" class="sb-item"
         [class.active]="page==='superadmin-quiz' || page==='superadmin-quiz-questions'">
        <i class="isax isax-award"></i><span class="sb-item-label">Quiz</span>
      </a>
      <a [routerLink]="routes.superadminQuizResult" routerLinkActive="active" class="sb-item">
        <i class="isax isax-medal-star"></i><span class="sb-item-label">R\xE9sultats Quiz</span>
      </a>
      <a [routerLink]="routes.superadminCertificate" routerLinkActive="active" class="sb-item">
        <i class="isax isax-note-21"></i><span class="sb-item-label">Certificats</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <!-- FINANCE -->
    <div class="sb-section">
      <div class="sb-section-label">Finance</div>
      <a [routerLink]="routes.superadminEarning" routerLinkActive="active" class="sb-item">
        <i class="isax isax-wallet-add"></i><span class="sb-item-label">Gains</span>
      </a>
      <a [routerLink]="routes.superadmin_payouts" routerLinkActive="active" class="sb-item">
        <i class="isax isax-coin-1"></i><span class="sb-item-label">Paiements</span>
      </a>
      <a [routerLink]="routes.superadminStatements" routerLinkActive="active" class="sb-item">
        <i class="isax isax-receipt-item"></i><span class="sb-item-label">D\xE9clarations</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <!-- SUPPORT -->
    <div class="sb-section">
      <div class="sb-section-label">Support</div>
      <a [routerLink]="routes.superadminMessage" routerLinkActive="active" class="sb-item">
        <i class="isax isax-messages-3"></i><span class="sb-item-label">Messages</span>
      </a>
      <a [routerLink]="routes.superadmin_tickets" routerLinkActive="active" class="sb-item">
        <i class="isax isax-ticket"></i><span class="sb-item-label">Tickets support</span>
      </a>
    </div>

  </div><!-- /sb-scroll -->

  <!-- \u2500\u2500 BOTTOM \u2500\u2500 -->
  <div class="sb-bottom">
    <a [routerLink]="routes.superadminProfile" routerLinkActive="active" class="sb-bottom-item">
      <i class="isax isax-user-square"></i> Mon profil
    </a>
    <a [routerLink]="routes.superadminSettings" routerLinkActive="active" class="sb-bottom-item"
       [class.active]="last==='superadmin-settings' || last==='superadmin-change-password'">
      <i class="isax isax-setting-2"></i> Param\xE8tres
    </a>
    <div class="sb-bottom-item logout" (click)="logout()">
      <i class="isax isax-logout"></i> D\xE9connexion
    </div>
  </div>

</div>
`, styles: ["/* src/app/features/superadmin/common/superadmin-sidebar/superadmin-sidebar.component.scss */\n:host {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell {\n  background: #0F172A;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 16px 14px;\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-logo-mark {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #1D9E75;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-logo-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-logo-sub {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n  margin-top: 1px;\n}\n.sb-user {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px;\n  margin: 10px 10px 4px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  flex-shrink: 0;\n}\n.sb-av {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #534AB7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #CECBF6;\n  flex-shrink: 0;\n}\n.sb-uname {\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-urole {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.sb-scroll {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 6px 0 10px;\n}\n.sb-scroll::-webkit-scrollbar {\n  width: 3px;\n}\n.sb-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sb-scroll::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 3px;\n}\n.sb-section {\n  margin-bottom: 4px;\n}\n.sb-section-label {\n  font-size: 10px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 18px 4px;\n}\n.sb-divider {\n  height: 0.5px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 6px 14px;\n}\n.sb-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 14px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item i {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-item:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-item.active {\n  background: #1D4ED8;\n  color: #fff;\n}\n.sb-item.active i {\n  color: #fff;\n}\n.sb-item-label {\n  flex: 1;\n}\n.sb-badge {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 500;\n}\n.sb-badge.notif {\n  background: #DC2626;\n  color: #fff;\n}\n.sb-group {\n  margin: 1px 8px;\n}\n.sb-group-header {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 6px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  transition: color 0.12s;\n}\n.sb-group-header:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header.open {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header i.icon {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-group-header span {\n  flex: 1;\n}\n.sb-group-header i.arr {\n  font-size: 12px;\n  transition: transform 0.15s;\n}\n.sb-group-header.open i.arr {\n  transform: rotate(90deg);\n}\n.sb-sub {\n  padding-left: 10px;\n  border-left: 0.5px solid rgba(255, 255, 255, 0.1);\n  margin: 2px 0 4px 22px;\n}\n.sb-sub-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n}\n.sb-sub-item i {\n  font-size: 14px;\n}\n.sb-sub-item:hover {\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sb-sub-item.active {\n  color: #93C5FD;\n}\n.sb-bottom {\n  padding: 10px 10px 14px;\n  border-top: 0.5px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-bottom-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item i {\n  font-size: 15px;\n}\n.sb-bottom-item:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.active {\n  color: rgba(255, 255, 255, 0.85);\n}\n.sb-bottom-item.logout {\n  color: rgba(220, 38, 38, 0.7);\n}\n.sb-bottom-item.logout:hover {\n  background: rgba(220, 38, 38, 0.1);\n  color: #FCA5A5;\n}\n/*# sourceMappingURL=superadmin-sidebar.component.css.map */\n"] }]
  }], () => [{ type: CommonService }, { type: AuthService }, { type: RoleRedirectService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminSidebarComponent, { className: "SuperadminSidebarComponent", filePath: "src/app/features/superadmin/common/superadmin-sidebar/superadmin-sidebar.component.ts", lineNumber: 16 });
})();

// src/app/features/superadmin/superadmin.component.ts
function SuperadminComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 18)(3, "div", 55)(4, "div", 56)(5, "h2", 57);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "nav", 58)(9, "ol", 59)(10, "li", 60)(11, "a", 37);
    \u0275\u0275text(12, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li", 61);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "titlecase");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, ctx_r0.last));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r0.routes.home);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 5, ctx_r0.last));
  }
}
function SuperadminComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "app-superadmin-sidebar", 34);
    \u0275\u0275elementStart(2, "div", 62);
    \u0275\u0275element(3, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var SuperadminComponent = class _SuperadminComponent {
  router;
  routes = routes;
  last = "";
  superAdminProfile = null;
  constructor(router) {
    this.router = router;
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.last = data.url.split("/")[data.url.split("/").length - 1];
      }
    });
  }
  ngOnInit() {
    this.loadSuperAdminProfile();
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
    return new (__ngFactoryType__ || _SuperadminComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminComponent, selectors: [["app-superadmin"]], decls: 127, vars: 19, consts: [[1, "breadcrumb-bar", "text-center"], [1, "content"], [1, "container"], [1, "superadmin-profile"], [1, "superadmin-profile-bg"], [1, "row", "align-items-center", "row-gap-3", "superadmin-profile"], [1, "col-md-6"], [1, "d-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "avatar-xxl", "avatar-rounded", "me-3", "border", "border-white", "border-3", "position-relative"], [1, "avatar-placeholder"], [1, "verify-tick"], [1, "isax", "isax-verify5"], [1, "mb-1", "text-white", "d-inline-flex", "align-items-center"], [1, "link-light", "fs-16", "ms-2", 3, "routerLink"], [1, "isax", "isax-edit-2"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3", "justify-content-md-end"], [1, "btn", "btn-white", "rounded-pill", 3, "routerLink"], [1, "btn", "btn-secondary", "rounded-pill", 3, "routerLink"], [1, "row"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.svg", "alt", ""], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-8"], [1, "col-lg-3"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Enter your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [1, "col-md-12", "col-12"], [1, "breadcrumb-list"], [1, "breadcrumb-title"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb", "justify-content-center", "mb-0"], [1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-lg-9"]], template: function SuperadminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SuperadminComponent_Conditional_0_Template, 16, 7, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "div", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "span", 8)(9, "div", 9);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div")(14, "h5", 12);
      \u0275\u0275text(15);
      \u0275\u0275elementStart(16, "a", 13);
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(18, "div", 6)(19, "div", 15)(20, "a", 16);
      \u0275\u0275text(21, "Ajouter Entreprise ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 17);
      \u0275\u0275text(23, "Tableau de bords Super Admin");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(24, SuperadminComponent_Conditional_24_Template, 4, 0, "div", 18);
      \u0275\u0275conditionalCreate(25, SuperadminComponent_Conditional_25_Template, 1, 0, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "footer", 19)(27, "div", 20);
      \u0275\u0275element(28, "img", 21)(29, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 23)(31, "div", 2)(32, "div", 24)(33, "div", 25)(34, "div", 26)(35, "div", 27);
      \u0275\u0275element(36, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 7)(40, "a", 29);
      \u0275\u0275element(41, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 31);
      \u0275\u0275element(43, "img", 32);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 33)(45, "div", 24)(46, "div", 34)(47, "div", 35)(48, "h5", 36);
      \u0275\u0275text(49, "For Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "ul")(51, "li")(52, "a", 37);
      \u0275\u0275text(53, "Search Mentors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 37);
      \u0275\u0275text(56, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 37);
      \u0275\u0275text(59, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 37);
      \u0275\u0275text(62, "Booking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 37);
      \u0275\u0275text(65, "Students Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(66, "div", 34)(67, "div", 35)(68, "h5", 36);
      \u0275\u0275text(69, "For Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "ul")(71, "li")(72, "a", 31);
      \u0275\u0275text(73, "Appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 37);
      \u0275\u0275text(76, "Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 37);
      \u0275\u0275text(79, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 37);
      \u0275\u0275text(82, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "li")(84, "a", 37);
      \u0275\u0275text(85, "Instructor Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(86, "div", 38)(87, "div", 39)(88, "h5", 36);
      \u0275\u0275text(89, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 40)(91, "form", 41);
      \u0275\u0275element(92, "input", 42);
      \u0275\u0275elementStart(93, "button", 43);
      \u0275\u0275element(94, "i", 44);
      \u0275\u0275text(95, "Subscribe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 45)(97, "div", 46);
      \u0275\u0275element(98, "img", 47);
      \u0275\u0275elementStart(99, "p");
      \u0275\u0275text(100, " 3556 Beech Street, San Francisco,");
      \u0275\u0275element(101, "br");
      \u0275\u0275text(102, " California, CA 94108 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 46);
      \u0275\u0275element(104, "img", 48);
      \u0275\u0275elementStart(105, "p");
      \u0275\u0275text(106, "dreamslms@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 46);
      \u0275\u0275element(108, "img", 49);
      \u0275\u0275elementStart(109, "p");
      \u0275\u0275text(110, "+19 123-456-7890");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(111, "div", 50)(112, "div", 2)(113, "div", 51)(114, "div", 6)(115, "div", 52)(116, "p", 53);
      \u0275\u0275text(117, "Copyright \xA9 2025 Pyramide. tout droits reserv\xE9s.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "div", 6)(119, "div")(120, "ul", 54)(121, "li")(122, "a", 37);
      \u0275\u0275text(123, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "li")(125, "a", 37);
      \u0275\u0275text(126, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.last !== "view" ? 0 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.getInitials(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.getFullName(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.superadminProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.superadminCompanyAdd);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.superadmin_dashboard);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.last !== "students-details" ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.last === "students-details" ? 25 : -1);
      \u0275\u0275advance(27);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.students_Dashboard);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.instructorMessage);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructor_dashboard);
      \u0275\u0275advance(38);
      \u0275\u0275property("routerLink", ctx.routes.page_term_condition);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_privacy_policy);
    }
  }, dependencies: [CommonModule, RouterOutlet, RouterModule, RouterLink, SuperadminSidebarComponent, TitleCasePipe], styles: ["\n\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #D4AF37;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.superadmin-profile[_ngcontent-%COMP%] {\n  background: #b8e8b5 !important;\n  border-radius: 16px;\n  padding: 5px 10px;\n  margin-bottom: 24px;\n}\n.superadmin-profile[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border: 2px solid white;\n}\n.superadmin-profile[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #000000 !important;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n.superadmin-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: rgba(0, 0, 0, 0.7) !important;\n  font-weight: 400;\n}\n.superadmin-profile[_ngcontent-%COMP%]   .verify-tick[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: #D4AF37;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid white;\n}\n.superadmin-profile[_ngcontent-%COMP%]   .verify-tick[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 10px;\n}\n.superadmin-profile[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%] {\n  background: #b8e8b5;\n  color: #333333;\n  border: 1px solid #2db821;\n  font-weight: 500;\n  font-size: 0.875rem;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.superadmin-profile[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #000000;\n}\n.superadmin-profile[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #2db821;\n  color: white;\n  border: 1px solid #2db821;\n  font-weight: 500;\n  font-size: 0.875rem;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.superadmin-profile[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #b8e8b5;\n  border-color: #5a6268;\n  color: #000000;\n}\n@media (max-width: 768px) {\n  .superadmin-profile[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    border-radius: 12px;\n  }\n  .superadmin-profile[_ngcontent-%COMP%]   .avatar-xxl[_ngcontent-%COMP%] {\n    width: 60px !important;\n    height: 60px !important;\n  }\n  .superadmin-profile[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .superadmin-profile[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .superadmin-profile[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%], \n   .superadmin-profile[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 576px) {\n  .superadmin-profile[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n  }\n  .superadmin-profile[_ngcontent-%COMP%]   .d-flex.align-items-center.flex-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .superadmin-profile[_ngcontent-%COMP%]   .d-flex.align-items-center.flex-wrap[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%], \n   .superadmin-profile[_ngcontent-%COMP%]   .d-flex.align-items-center.flex-wrap[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=superadmin.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin", imports: [CommonModule, RouterOutlet, RouterModule, SuperadminSidebarComponent, HasPermissionDirective], template: `<!-- Breadcrumb -->\r
@if (last !== 'view') {\r
  <div class="breadcrumb-bar text-center">\r
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
  </div>\r
}\r
<!-- /Breadcrumb -->\r
<div class="content">\r
  <div class="container">\r
      <!-- Banni\xE8re profil super admin - Toujours visible -->\r
      <div class="superadmin-profile">\r
          <div class="superadmin-profile-bg">\r
              <!-- <img src="assets/img/bg/card-bg-01.png" class="superadmin-profile-bg-1" alt=""> -->\r
          </div>\r
          <div class="row align-items-center row-gap-3 superadmin-profile">\r
              <div class="col-md-6">\r
                  <div class="d-flex align-items-center">\r
                      <span class="avatar flex-shrink-0 avatar-xxl avatar-rounded me-3 border border-white border-3 position-relative">\r
                          <div class="avatar-placeholder">\r
                            {{ getInitials() }}\r
                          </div>\r
                          <span class="verify-tick"><i class="isax isax-verify5"></i></span>\r
                      </span>\r
                      <div>\r
                          <h5 class="mb-1 text-white d-inline-flex align-items-center">\r
                            {{ getFullName() }}\r
                            <a [routerLink]="routes.superadminProfile" class="link-light fs-16 ms-2">\r
                              <i class="isax isax-edit-2"></i>\r
                            </a>\r
                          </h5>\r
                          <!-- <p class="text-light">{{ getRoleName() }}</p> -->\r
                      </div>\r
                  </div>\r
              </div>\r
              <div class="col-md-6">\r
                  <div class="d-flex align-items-center flex-wrap gap-3 justify-content-md-end">\r
                      <a [routerLink]="routes.superadminCompanyAdd" class="btn btn-white rounded-pill">Ajouter Entreprise  </a>\r
                      <a [routerLink]="routes.superadmin_dashboard" class="btn btn-secondary rounded-pill">Tableau de bords Super Admin</a>\r
                  </div>\r
              </div>\r
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
  <div class="footer-bg">\r
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
  </div>\r
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
                        <li><a [routerLink]="routes.page_privacy_policy">Privacy Policy</a></li>\r
                      </ul>\r
                  </div>\r
              </div>\r
          </div>\r
      </div>\r
  </div>\r
</footer>\r
<!-- /Footer -->`, styles: ["/* src/app/features/superadmin/superadmin.component.scss */\n.avatar-placeholder {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #D4AF37;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.superadmin-profile {\n  background: #b8e8b5 !important;\n  border-radius: 16px;\n  padding: 5px 10px;\n  margin-bottom: 24px;\n}\n.superadmin-profile .avatar {\n  border: 2px solid white;\n}\n.superadmin-profile h5 {\n  color: #000000 !important;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n.superadmin-profile p {\n  margin-bottom: 0;\n  color: rgba(0, 0, 0, 0.7) !important;\n  font-weight: 400;\n}\n.superadmin-profile .verify-tick {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: #D4AF37;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid white;\n}\n.superadmin-profile .verify-tick i {\n  color: white;\n  font-size: 10px;\n}\n.superadmin-profile .btn-white {\n  background: #b8e8b5;\n  color: #333333;\n  border: 1px solid #2db821;\n  font-weight: 500;\n  font-size: 0.875rem;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.superadmin-profile .btn-white:hover {\n  background: #f8f9fa;\n  color: #000000;\n}\n.superadmin-profile .btn-secondary {\n  background: #2db821;\n  color: white;\n  border: 1px solid #2db821;\n  font-weight: 500;\n  font-size: 0.875rem;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.superadmin-profile .btn-secondary:hover {\n  background: #b8e8b5;\n  border-color: #5a6268;\n  color: #000000;\n}\n@media (max-width: 768px) {\n  .superadmin-profile {\n    padding: 5px 10px;\n    border-radius: 12px;\n  }\n  .superadmin-profile .avatar-xxl {\n    width: 60px !important;\n    height: 60px !important;\n  }\n  .superadmin-profile .avatar-placeholder {\n    font-size: 20px;\n  }\n  .superadmin-profile h5 {\n    font-size: 1rem;\n  }\n  .superadmin-profile .btn-white,\n  .superadmin-profile .btn-secondary {\n    padding: 8px 16px;\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 576px) {\n  .superadmin-profile {\n    padding: 16px 20px;\n  }\n  .superadmin-profile .d-flex.align-items-center.flex-wrap {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .superadmin-profile .d-flex.align-items-center.flex-wrap .btn-white,\n  .superadmin-profile .d-flex.align-items-center.flex-wrap .btn-secondary {\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=superadmin.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminComponent, { className: "SuperadminComponent", filePath: "src/app/features/superadmin/superadmin.component.ts", lineNumber: 15 });
})();
export {
  SuperadminComponent
};
//# sourceMappingURL=chunk-ASOPFIEC.js.map
