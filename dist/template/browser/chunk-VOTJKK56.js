import {
  CommonService
} from "./chunk-UYSR4AJV.js";
import {
  AuthService
} from "./chunk-FLPD3SNY.js";
import "./chunk-FKX6UC3I.js";
import {
  routes
} from "./chunk-ZAFZNJD2.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-YMJPU2MG.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule,
  NgIf,
  TitleCasePipe
} from "./chunk-GWJREDC5.js";
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
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/common/adminrh-sidebar/adminrh-sidebar.component.ts
function AdminrhSidebarComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "a", 38);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275text(3, " Formations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 38);
    \u0275\u0275element(5, "i", 40);
    \u0275\u0275text(6, " Catalogues ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 38);
    \u0275\u0275element(8, "i", 41);
    \u0275\u0275text(9, " Parcours ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 38);
    \u0275\u0275element(11, "i", 42);
    \u0275\u0275text(12, " Sessions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 38);
    \u0275\u0275element(14, "i", 43);
    \u0275\u0275text(15, " Cat\xE9gories ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhCourse);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhCatalogue);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhParcours);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhSession);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhCategorie);
  }
}
function AdminrhSidebarComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "a", 38);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275text(3, " Formations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 38);
    \u0275\u0275element(5, "i", 42);
    \u0275\u0275text(6, " Sessions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 38);
    \u0275\u0275element(8, "i", 41);
    \u0275\u0275text(9, " Parcours ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 38);
    \u0275\u0275element(11, "i", 40);
    \u0275\u0275text(12, " Catalogues ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.AdminrhDemande);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.AdminrhDemandeSession);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.AdminrhDemandeParcours);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.AdminrhDemandeCatalogue);
  }
}
function AdminrhSidebarComponent_div_73_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, " Utilisateurs du groupe ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhUserGroupList);
  }
}
function AdminrhSidebarComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "a", 38);
    \u0275\u0275element(2, "i", 45);
    \u0275\u0275text(3, " Tous les utilisateurs ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminrhSidebarComponent_div_73_a_4_Template, 3, 1, "a", 46);
    \u0275\u0275elementStart(5, "a", 38);
    \u0275\u0275element(6, "i", 47);
    \u0275\u0275text(7, " R\xF4les ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 38);
    \u0275\u0275element(9, "i", 48);
    \u0275\u0275text(10, " Permissions ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhUserList);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isHoldingAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhRole);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrhPermission);
  }
}
var AdminrhSidebarComponent = class _AdminrhSidebarComponent {
  common;
  authService;
  routes = routes;
  base = "";
  page = "";
  last = "";
  currentUser;
  openGroups = {
    formations: false,
    demandes: false,
    utilisateurs: true
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
    return u?.role?.name || (u?.role_id === 5 ? "RH Groupe" : "Admin RH");
  }
  constructor(common, authService) {
    this.common = common;
    this.authService = authService;
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
  }
  static \u0275fac = function AdminrhSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhSidebarComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhSidebarComponent, selectors: [["app-adminrh-sidebar"]], decls: 104, vars: 24, consts: [[1, "sb-shell"], [1, "sb-logo"], [1, "sb-logo-mark"], [1, "sb-logo-text"], [1, "sb-logo-sub"], [1, "sb-user"], [1, "sb-av"], [1, "sb-uname"], [1, "sb-urole"], [1, "sb-scroll"], [1, "sb-section"], [1, "sb-section-label"], ["routerLinkActive", "active", 1, "sb-item", 3, "routerLink"], [1, "isax", "isax-grid-3"], [1, "sb-item-label"], [1, "isax", "isax-volume-high"], [1, "sb-divider"], [1, "sb-group"], [1, "sb-group-header", 3, "click"], [1, "isax", "isax-play-circle", "icon"], [1, "isax", "isax-arrow-right-3", "arr"], ["class", "sb-sub", 4, "ngIf"], [1, "isax", "isax-document-text", "icon"], [1, "isax", "isax-clipboard-text"], [1, "isax", "isax-award"], [1, "isax", "isax-medal-star"], [1, "isax", "isax-note-21"], [1, "isax", "isax-profile-2user", "icon"], [1, "isax", "isax-building"], [1, "isax", "isax-receipt-item"], [1, "isax", "isax-ticket"], [1, "sb-bottom"], ["routerLinkActive", "active", 1, "sb-bottom-item", 3, "routerLink"], [1, "isax", "isax-user-square"], [1, "isax", "isax-setting-2"], [1, "sb-bottom-item", "logout", 3, "routerLink"], [1, "isax", "isax-logout"], [1, "sb-sub"], ["routerLinkActive", "active", 1, "sb-sub-item", 3, "routerLink"], [1, "isax", "isax-book-1"], [1, "isax", "isax-category"], [1, "isax", "isax-route-square"], [1, "isax", "isax-calendar-1"], [1, "isax", "isax-tag"], [1, "isax", "isax-document-text"], [1, "isax", "isax-people"], ["routerLinkActive", "active", "class", "sb-sub-item", 3, "routerLink", 4, "ngIf"], [1, "isax", "isax-shield-tick"], [1, "isax", "isax-lock"], [1, "isax", "isax-profile-2user"]], template: function AdminrhSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "L");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 3);
      \u0275\u0275text(6, "LMS Pro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275text(8, "Admin RH");
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
      \u0275\u0275text(32, "P\xE9dagogie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 17)(34, "div", 18);
      \u0275\u0275listener("click", function AdminrhSidebarComponent_Template_div_click_34_listener() {
        return ctx.toggleGroup("formations");
      });
      \u0275\u0275element(35, "i", 19);
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275text(37, "Nos formations");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(39, AdminrhSidebarComponent_div_39_Template, 16, 5, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 17)(41, "div", 18);
      \u0275\u0275listener("click", function AdminrhSidebarComponent_Template_div_click_41_listener() {
        return ctx.toggleGroup("demandes");
      });
      \u0275\u0275element(42, "i", 22);
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44, "Nos demandes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, AdminrhSidebarComponent_div_46_Template, 13, 4, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "a", 12);
      \u0275\u0275element(48, "i", 23);
      \u0275\u0275elementStart(49, "span", 14);
      \u0275\u0275text(50, "Assignments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "a", 12);
      \u0275\u0275element(52, "i", 24);
      \u0275\u0275elementStart(53, "span", 14);
      \u0275\u0275text(54, "Quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "a", 12);
      \u0275\u0275element(56, "i", 25);
      \u0275\u0275elementStart(57, "span", 14);
      \u0275\u0275text(58, "R\xE9sultats Quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "a", 12);
      \u0275\u0275element(60, "i", 26);
      \u0275\u0275elementStart(61, "span", 14);
      \u0275\u0275text(62, "Certificats");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(63, "div", 16);
      \u0275\u0275elementStart(64, "div", 10)(65, "div", 11);
      \u0275\u0275text(66, "Utilisateurs & acc\xE8s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 17)(68, "div", 18);
      \u0275\u0275listener("click", function AdminrhSidebarComponent_Template_div_click_68_listener() {
        return ctx.toggleGroup("utilisateurs");
      });
      \u0275\u0275element(69, "i", 27);
      \u0275\u0275elementStart(70, "span");
      \u0275\u0275text(71, "Gestion utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(73, AdminrhSidebarComponent_div_73_Template, 11, 4, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "a", 12);
      \u0275\u0275element(75, "i", 28);
      \u0275\u0275elementStart(76, "span", 14);
      \u0275\u0275text(77, "Entreprises");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(78, "div", 16);
      \u0275\u0275elementStart(79, "div", 10)(80, "div", 11);
      \u0275\u0275text(81, "Finance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "a", 12);
      \u0275\u0275element(83, "i", 29);
      \u0275\u0275elementStart(84, "span", 14);
      \u0275\u0275text(85, "D\xE9clarations");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(86, "div", 16);
      \u0275\u0275elementStart(87, "div", 10)(88, "div", 11);
      \u0275\u0275text(89, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "a", 12);
      \u0275\u0275element(91, "i", 30);
      \u0275\u0275elementStart(92, "span", 14);
      \u0275\u0275text(93, "Tickets support");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(94, "div", 31)(95, "a", 32);
      \u0275\u0275element(96, "i", 33);
      \u0275\u0275text(97, " Mon profil ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "a", 32);
      \u0275\u0275element(99, "i", 34);
      \u0275\u0275text(100, " Param\xE8tres ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "a", 35);
      \u0275\u0275element(102, "i", 36);
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
      \u0275\u0275property("routerLink", ctx.routes.adminrh_dashboard);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.adminrhAnnouncements);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("open", ctx.openGroups["formations"]);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.openGroups["formations"]);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("open", ctx.openGroups["demandes"]);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.openGroups["demandes"]);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.adminrhAssignment);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.adminrhQuiz);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.adminrhQuizResult);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.adminrhCertificate);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("open", ctx.openGroups["utilisateurs"]);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.openGroups["utilisateurs"]);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.adminrhCompanyManagement);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.adminrhStatements);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.adminrh_tickets);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.adminrhProfile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.adminrhSettings);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell[_ngcontent-%COMP%] {\n  background: #0F172A;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 16px 14px;\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-logo-mark[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #1D9E75;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-logo-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-logo-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n  margin-top: 1px;\n}\n.sb-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px;\n  margin: 10px 10px 4px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  flex-shrink: 0;\n}\n.sb-av[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #534AB7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #CECBF6;\n  flex-shrink: 0;\n}\n.sb-uname[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-urole[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.sb-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 6px 0 10px;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sb-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 3px;\n}\n.sb-section[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.sb-section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 18px 4px;\n}\n.sb-divider[_ngcontent-%COMP%] {\n  height: 0.5px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 6px 14px;\n}\n.sb-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 14px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-item.active[_ngcontent-%COMP%] {\n  background: #1D4ED8;\n  color: #fff;\n}\n.sb-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sb-item-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 500;\n}\n.sb-badge.notif[_ngcontent-%COMP%] {\n  background: #DC2626;\n  color: #fff;\n}\n.sb-group[_ngcontent-%COMP%] {\n  margin: 1px 8px;\n}\n.sb-group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 6px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  transition: color 0.12s;\n}\n.sb-group-header[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header.open[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-group-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sb-group-header[_ngcontent-%COMP%]   i.arr[_ngcontent-%COMP%] {\n  font-size: 12px;\n  transition: transform 0.15s;\n}\n.sb-group-header.open[_ngcontent-%COMP%]   i.arr[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.sb-sub[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 0.5px solid rgba(255, 255, 255, 0.1);\n  margin: 2px 0 4px 22px;\n}\n.sb-sub-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n}\n.sb-sub-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sb-sub-item[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sb-sub-item.active[_ngcontent-%COMP%] {\n  color: #93C5FD;\n}\n.sb-bottom[_ngcontent-%COMP%] {\n  padding: 10px 10px 14px;\n  border-top: 0.5px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-bottom-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sb-bottom-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.active[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%] {\n  color: rgba(220, 38, 38, 0.7);\n}\n.sb-bottom-item.logout[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.1);\n  color: #FCA5A5;\n}\n/*# sourceMappingURL=adminrh-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-sidebar", imports: [CommonModule, RouterLink, RouterLinkActive], template: `<div class="sb-shell">

  <!-- \u2500\u2500 LOGO \u2500\u2500 -->
  <div class="sb-logo">
    <div class="sb-logo-mark">L</div>
    <div>
      <div class="sb-logo-text">LMS Pro</div>
      <div class="sb-logo-sub">Admin RH</div>
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
      <a [routerLink]="routes.adminrh_dashboard" routerLinkActive="active" class="sb-item">
        <i class="isax isax-grid-3"></i><span class="sb-item-label">Tableau de bord</span>
      </a>
      <a [routerLink]="routes.adminrhAnnouncements" routerLinkActive="active" class="sb-item">
        <i class="isax isax-volume-high"></i><span class="sb-item-label">Annonces</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <!-- P\xC9DAGOGIE -->
    <div class="sb-section">
      <div class="sb-section-label">P\xE9dagogie</div>

      <!-- Nos formations -->
      <div class="sb-group">
        <div class="sb-group-header" [class.open]="openGroups['formations']"
             (click)="toggleGroup('formations')">
          <i class="isax isax-play-circle icon"></i>
          <span>Nos formations</span>
          <i class="isax isax-arrow-right-3 arr"></i>
        </div>
        <div class="sb-sub" *ngIf="openGroups['formations']">
          <a [routerLink]="routes.adminrhCourse"    routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-book-1"></i> Formations
          </a>
          <a [routerLink]="routes.adminrhCatalogue" routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-category"></i> Catalogues
          </a>
          <a [routerLink]="routes.adminrhParcours"  routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-route-square"></i> Parcours
          </a>
          <a [routerLink]="routes.adminrhSession"   routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-calendar-1"></i> Sessions
          </a>
          <a [routerLink]="routes.adminrhCategorie" routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-tag"></i> Cat\xE9gories
          </a>
        </div>
      </div>

      <!-- Nos demandes -->
      <div class="sb-group">
        <div class="sb-group-header" [class.open]="openGroups['demandes']"
             (click)="toggleGroup('demandes')">
          <i class="isax isax-document-text icon"></i>
          <span>Nos demandes</span>
          <i class="isax isax-arrow-right-3 arr"></i>
        </div>
        <div class="sb-sub" *ngIf="openGroups['demandes']">
          <a [routerLink]="routes.AdminrhDemande"         routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-document-text"></i> Formations
          </a>
          <a [routerLink]="routes.AdminrhDemandeSession"  routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-calendar-1"></i> Sessions
          </a>
          <a [routerLink]="routes.AdminrhDemandeParcours" routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-route-square"></i> Parcours
          </a>
          <a [routerLink]="routes.AdminrhDemandeCatalogue" routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-category"></i> Catalogues
          </a>
        </div>
      </div>

      <a [routerLink]="routes.adminrhAssignment" routerLinkActive="active" class="sb-item">
        <i class="isax isax-clipboard-text"></i><span class="sb-item-label">Assignments</span>
      </a>
      <a [routerLink]="routes.adminrhQuiz" routerLinkActive="active" class="sb-item">
        <i class="isax isax-award"></i><span class="sb-item-label">Quiz</span>
      </a>
      <a [routerLink]="routes.adminrhQuizResult" routerLinkActive="active" class="sb-item">
        <i class="isax isax-medal-star"></i><span class="sb-item-label">R\xE9sultats Quiz</span>
      </a>
      <a [routerLink]="routes.adminrhCertificate" routerLinkActive="active" class="sb-item">
        <i class="isax isax-note-21"></i><span class="sb-item-label">Certificats</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <!-- UTILISATEURS & ACC\xC8S -->
    <div class="sb-section">
      <div class="sb-section-label">Utilisateurs & acc\xE8s</div>

      <div class="sb-group">
        <div class="sb-group-header" [class.open]="openGroups['utilisateurs']"
             (click)="toggleGroup('utilisateurs')">
          <i class="isax isax-profile-2user icon"></i>
          <span>Gestion utilisateurs</span>
          <i class="isax isax-arrow-right-3 arr"></i>
        </div>
        <div class="sb-sub" *ngIf="openGroups['utilisateurs']">
          <a [routerLink]="routes.adminrhUserList" routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-people"></i> Tous les utilisateurs
          </a>
          <a *ngIf="isHoldingAdmin()"
             [routerLink]="routes.adminrhUserGroupList" routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-profile-2user"></i> Utilisateurs du groupe
          </a>
          <a [routerLink]="routes.adminrhRole" routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-shield-tick"></i> R\xF4les
          </a>
          <a [routerLink]="routes.adminrhPermission" routerLinkActive="active" class="sb-sub-item">
            <i class="isax isax-lock"></i> Permissions
          </a>
        </div>
      </div>

      <a [routerLink]="routes.adminrhCompanyManagement" routerLinkActive="active" class="sb-item">
        <i class="isax isax-building"></i><span class="sb-item-label">Entreprises</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <!-- FINANCE -->
    <div class="sb-section">
      <div class="sb-section-label">Finance</div>
      <a [routerLink]="routes.adminrhStatements" routerLinkActive="active" class="sb-item">
        <i class="isax isax-receipt-item"></i><span class="sb-item-label">D\xE9clarations</span>
      </a>
    </div>

    <div class="sb-divider"></div>

    <!-- SUPPORT -->
    <div class="sb-section">
      <div class="sb-section-label">Support</div>
      <a [routerLink]="routes.adminrh_tickets" routerLinkActive="active" class="sb-item">
        <i class="isax isax-ticket"></i><span class="sb-item-label">Tickets support</span>
      </a>
    </div>

  </div><!-- /sb-scroll -->

  <!-- \u2500\u2500 BOTTOM \u2500\u2500 -->
  <div class="sb-bottom">
    <a [routerLink]="routes.adminrhProfile" routerLinkActive="active" class="sb-bottom-item">
      <i class="isax isax-user-square"></i> Mon profil
    </a>
    <a [routerLink]="routes.adminrhSettings" routerLinkActive="active" class="sb-bottom-item">
      <i class="isax isax-setting-2"></i> Param\xE8tres
    </a>
    <a [routerLink]="routes.login" class="sb-bottom-item logout">
      <i class="isax isax-logout"></i> D\xE9connexion
    </a>
  </div>

</div>
`, styles: ["/* src/app/features/adminrh/common/adminrh-sidebar/adminrh-sidebar.component.scss */\n:host {\n  display: block;\n  padding: 0 !important;\n}\n.sb-shell {\n  background: #0F172A;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.sb-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 16px 14px;\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-logo-mark {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #1D9E75;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sb-logo-text {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-logo-sub {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n  margin-top: 1px;\n}\n.sb-user {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px;\n  margin: 10px 10px 4px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  flex-shrink: 0;\n}\n.sb-av {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #534AB7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #CECBF6;\n  flex-shrink: 0;\n}\n.sb-uname {\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n}\n.sb-urole {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.sb-scroll {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 6px 0 10px;\n}\n.sb-scroll::-webkit-scrollbar {\n  width: 3px;\n}\n.sb-scroll::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sb-scroll::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 3px;\n}\n.sb-section {\n  margin-bottom: 4px;\n}\n.sb-section-label {\n  font-size: 10px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  padding: 10px 18px 4px;\n}\n.sb-divider {\n  height: 0.5px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 6px 14px;\n}\n.sb-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 14px;\n  margin: 1px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-item i {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-item:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-item.active {\n  background: #1D4ED8;\n  color: #fff;\n}\n.sb-item.active i {\n  color: #fff;\n}\n.sb-item-label {\n  flex: 1;\n}\n.sb-badge {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 500;\n}\n.sb-badge.notif {\n  background: #DC2626;\n  color: #fff;\n}\n.sb-group {\n  margin: 1px 8px;\n}\n.sb-group-header {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 6px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  transition: color 0.12s;\n}\n.sb-group-header:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header.open {\n  color: rgba(255, 255, 255, 0.9);\n}\n.sb-group-header i.icon {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.sb-group-header span {\n  flex: 1;\n}\n.sb-group-header i.arr {\n  font-size: 12px;\n  transition: transform 0.15s;\n}\n.sb-group-header.open i.arr {\n  transform: rotate(90deg);\n}\n.sb-sub {\n  padding-left: 10px;\n  border-left: 0.5px solid rgba(255, 255, 255, 0.1);\n  margin: 2px 0 4px 22px;\n}\n.sb-sub-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.1s, color 0.1s;\n}\n.sb-sub-item i {\n  font-size: 14px;\n}\n.sb-sub-item:hover {\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.05);\n}\n.sb-sub-item.active {\n  color: #93C5FD;\n}\n.sb-bottom {\n  padding: 10px 10px 14px;\n  border-top: 0.5px solid rgba(255, 255, 255, 0.08);\n  flex-shrink: 0;\n}\n.sb-bottom-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.sb-bottom-item i {\n  font-size: 15px;\n}\n.sb-bottom-item:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.8);\n}\n.sb-bottom-item.active {\n  color: rgba(255, 255, 255, 0.85);\n}\n.sb-bottom-item.logout {\n  color: rgba(220, 38, 38, 0.7);\n}\n.sb-bottom-item.logout:hover {\n  background: rgba(220, 38, 38, 0.1);\n  color: #FCA5A5;\n}\n/*# sourceMappingURL=adminrh-sidebar.component.css.map */\n"] }]
  }], () => [{ type: CommonService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhSidebarComponent, { className: "AdminrhSidebarComponent", filePath: "src/app/features/adminrh/common/adminrh-sidebar/adminrh-sidebar.component.ts", lineNumber: 14 });
})();

// src/app/features/adminrh/adminrh.component.ts
function AdminrhComponent_Conditional_0_Template(rf, ctx) {
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
    \u0275\u0275property("routerLink", ctx_r0.routes.home2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 5, ctx_r0.last));
  }
}
function AdminrhComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "app-adminrh-sidebar", 34);
    \u0275\u0275elementStart(2, "div", 62);
    \u0275\u0275element(3, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var AdminrhComponent = class _AdminrhComponent {
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
  static \u0275fac = function AdminrhComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhComponent, selectors: [["app-adminrh"]], decls: 127, vars: 19, consts: [[1, "breadcrumb-bar", "text-center"], [1, "content"], [1, "container"], [1, "adminrh-profile"], [1, "adminrh-profile-bg"], [1, "row", "align-items-center", "row-gap-3", "adminrh-profile"], [1, "col-md-6"], [1, "d-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "avatar-xxl", "avatar-rounded", "me-3", "border", "border-white", "border-3", "position-relative"], [1, "avatar-placeholder"], [1, "verify-tick"], [1, "isax", "isax-verify5"], [1, "mb-1", "text-white", "d-inline-flex", "align-items-center"], [1, "link-light", "fs-16", "ms-2", 3, "routerLink"], [1, "isax", "isax-edit-2"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3", "justify-content-md-end"], [1, "btn", "btn-white", "rounded-pill", 3, "routerLink"], [1, "btn", "btn-secondary", "rounded-pill", 3, "routerLink"], [1, "row"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.svg", "alt", ""], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-8"], [1, "col-lg-3"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Enter your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [1, "col-md-12", "col-12"], [1, "breadcrumb-list"], [1, "breadcrumb-title"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb", "justify-content-center", "mb-0"], [1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-lg-9"]], template: function AdminrhComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AdminrhComponent_Conditional_0_Template, 16, 7, "div", 0);
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
      \u0275\u0275text(23, "Tableau de bords RH");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(24, AdminrhComponent_Conditional_24_Template, 4, 0, "div", 18);
      \u0275\u0275conditionalCreate(25, AdminrhComponent_Conditional_25_Template, 1, 0, "router-outlet");
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
      \u0275\u0275text(117, "Copyright \xA9 2025 DreamsLMS. All rights reserved.");
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
      \u0275\u0275property("routerLink", ctx.routes.adminrhProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.adminrhCompanyAdd);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.adminrh_dashboard);
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
  }, dependencies: [CommonModule, RouterOutlet, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormsModule, NgForm, AdminrhSidebarComponent, TitleCasePipe], styles: ["\n\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #D4AF37;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.adminrh-profile[_ngcontent-%COMP%] {\n  background: #ffeccf !important;\n  border-radius: 16px;\n  padding: 5px 10px;\n  margin-bottom: 24px;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border: 2px solid white;\n}\n.adminrh-profile[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #000000 !important;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n.adminrh-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: rgba(0, 0, 0, 0.7) !important;\n  font-weight: 400;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .verify-tick[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: #D4AF37;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid white;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .verify-tick[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 10px;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%] {\n  background: #ffeccf;\n  color: #333333;\n  border: 1px solid #b87d23;\n  font-weight: 500;\n  font-size: 0.875rem;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #000000;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #b87d23;\n  color: white;\n  border: 1px solid #b87d23;\n  font-weight: 500;\n  font-size: 0.875rem;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #ffeccf;\n  border-color: #b87d23;\n  color: #000000;\n}\n@media (max-width: 768px) {\n  .adminrh-profile[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    border-radius: 12px;\n  }\n  .adminrh-profile[_ngcontent-%COMP%]   .avatar-xxl[_ngcontent-%COMP%] {\n    width: 60px !important;\n    height: 60px !important;\n  }\n  .adminrh-profile[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .adminrh-profile[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .adminrh-profile[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%], \n   .adminrh-profile[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 576px) {\n  .adminrh-profile[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n  }\n  .adminrh-profile[_ngcontent-%COMP%]   .d-flex.align-items-center.flex-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .adminrh-profile[_ngcontent-%COMP%]   .d-flex.align-items-center.flex-wrap[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%], \n   .adminrh-profile[_ngcontent-%COMP%]   .d-flex.align-items-center.flex-wrap[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=adminrh.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh", imports: [CommonModule, RouterOutlet, RouterModule, ReactiveFormsModule, FormsModule, AdminrhSidebarComponent], template: `<!-- Breadcrumb -->\r
@if (last !== 'view') {\r
  <div class="breadcrumb-bar text-center">\r
    <div class="container">\r
      <div class="row">\r
        <div class="col-md-12 col-12">\r
          <div class="breadcrumb-list">\r
            <h2 class="breadcrumb-title">{{ last | titlecase }}</h2>\r
            <nav aria-label="breadcrumb" class="page-breadcrumb">\r
              <ol class="breadcrumb justify-content-center mb-0">\r
                <li class="breadcrumb-item"><a [routerLink]="routes.home2">Home</a></li>\r
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
\r
<div class="content">\r
  <div class="container">\r
      <!-- Banni\xE8re profil super admin - Toujours visible -->\r
      <div class="adminrh-profile">\r
          <div class="adminrh-profile-bg">\r
              <!-- <img src="assets/img/bg/card-bg-01.png" class="adminrh-profile-bg-1" alt=""> -->\r
          </div>\r
          <div class="row align-items-center row-gap-3 adminrh-profile">\r
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
                            <a [routerLink]="routes.adminrhProfile" class="link-light fs-16 ms-2">\r
                              <i class="isax isax-edit-2"></i>\r
                            </a>\r
                          </h5>\r
                          <!-- <p class="text-light">{{ getRoleName() }}</p> -->\r
                      </div>\r
                  </div>\r
              </div>\r
              <div class="col-md-6">\r
                  <div class="d-flex align-items-center flex-wrap gap-3 justify-content-md-end">\r
                      <a [routerLink]="routes.adminrhCompanyAdd" class="btn btn-white rounded-pill">Ajouter Entreprise  </a>\r
                      <a [routerLink]="routes.adminrh_dashboard" class="btn btn-secondary rounded-pill">Tableau de bords RH</a>\r
                  </div>\r
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
<!-- /Footer -->`, styles: ["/* src/app/features/adminrh/adminrh.component.scss */\n.avatar-placeholder {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #D4AF37;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.adminrh-profile {\n  background: #ffeccf !important;\n  border-radius: 16px;\n  padding: 5px 10px;\n  margin-bottom: 24px;\n}\n.adminrh-profile .avatar {\n  border: 2px solid white;\n}\n.adminrh-profile h5 {\n  color: #000000 !important;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n.adminrh-profile p {\n  margin-bottom: 0;\n  color: rgba(0, 0, 0, 0.7) !important;\n  font-weight: 400;\n}\n.adminrh-profile .verify-tick {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: #D4AF37;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid white;\n}\n.adminrh-profile .verify-tick i {\n  color: white;\n  font-size: 10px;\n}\n.adminrh-profile .btn-white {\n  background: #ffeccf;\n  color: #333333;\n  border: 1px solid #b87d23;\n  font-weight: 500;\n  font-size: 0.875rem;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.adminrh-profile .btn-white:hover {\n  background: #f8f9fa;\n  color: #000000;\n}\n.adminrh-profile .btn-secondary {\n  background: #b87d23;\n  color: white;\n  border: 1px solid #b87d23;\n  font-weight: 500;\n  font-size: 0.875rem;\n  padding: 10px 20px;\n  border-radius: 20px;\n}\n.adminrh-profile .btn-secondary:hover {\n  background: #ffeccf;\n  border-color: #b87d23;\n  color: #000000;\n}\n@media (max-width: 768px) {\n  .adminrh-profile {\n    padding: 5px 10px;\n    border-radius: 12px;\n  }\n  .adminrh-profile .avatar-xxl {\n    width: 60px !important;\n    height: 60px !important;\n  }\n  .adminrh-profile .avatar-placeholder {\n    font-size: 20px;\n  }\n  .adminrh-profile h5 {\n    font-size: 1rem;\n  }\n  .adminrh-profile .btn-white,\n  .adminrh-profile .btn-secondary {\n    padding: 8px 16px;\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 576px) {\n  .adminrh-profile {\n    padding: 16px 20px;\n  }\n  .adminrh-profile .d-flex.align-items-center.flex-wrap {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .adminrh-profile .d-flex.align-items-center.flex-wrap .btn-white,\n  .adminrh-profile .d-flex.align-items-center.flex-wrap .btn-secondary {\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=adminrh.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhComponent, { className: "AdminrhComponent", filePath: "src/app/features/adminrh/adminrh.component.ts", lineNumber: 16 });
})();
export {
  AdminrhComponent
};
//# sourceMappingURL=chunk-VOTJKK56.js.map
