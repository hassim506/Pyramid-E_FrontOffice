import {
  FormationsService
} from "./chunk-UUU3Z4VF.js";
import {
  CommonService
} from "./chunk-34ZCH5GK.js";
import {
  AuthService
} from "./chunk-IEFOQSOV.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-YJLHMFCU.js";
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
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  ViewEncapsulation,
  catchError,
  filter,
  forkJoin,
  of,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/common/student-sidebar/student-sidebar.component.ts
function StudentSidebarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Mode apprenant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 25);
    \u0275\u0275element(6, "i", 26);
    \u0275\u0275text(7, " Espace AdminRH ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r0.routes.adminrh_dashboard);
  }
}
var StudentSidebarComponent = class _StudentSidebarComponent {
  common;
  router;
  authService;
  routes = routes;
  currentUrl = "";
  base;
  page;
  last;
  isCollapsed = false;
  openGroups = {
    formations: false,
    demandes: false,
    competences: false,
    palmares: false,
    aide: false
  };
  toggleGroup(key) {
    this.openGroups[key] = !this.openGroups[key];
  }
  navSub;
  constructor(common, router, authService) {
    this.common = common;
    this.router = router;
    this.authService = authService;
    this.common.base.subscribe((b) => this.base = b);
    this.common.page.subscribe((p) => this.page = p);
    this.common.last.subscribe((l) => this.last = l);
    this.navSub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      this.currentUrl = e.urlAfterRedirects || e.url;
      this.autoOpenGroups();
    });
  }
  ngOnInit() {
    this.currentUrl = this.router.url;
    this.autoOpenGroups();
  }
  ngOnDestroy() {
    this.navSub?.unsubscribe();
  }
  autoOpenGroups() {
    if (this.isFormationsActive())
      this.openGroups["formations"] = true;
    if (this.isDemandesActive())
      this.openGroups["demandes"] = true;
    if (this.isCompetencesActive())
      this.openGroups["competences"] = true;
    if (this.isPalmaresActive())
      this.openGroups["palmares"] = true;
  }
  isDashboardActive() {
    return this.currentUrl === "/student/student-dashboard";
  }
  isFormationsActive() {
    return [
      routes.studentMyCourses,
      routes.student_CataloguesAssignes,
      routes.student_ParcoursAssignes,
      routes.student_SessionsAcceptees
    ].some((r) => r && this.currentUrl.startsWith(r));
  }
  isDemandesActive() {
    return [
      routes.studentDemande,
      routes.student_DemandeSession,
      routes.student_DemandeParcours,
      routes.student_DemandeCatalogue
    ].some((r) => r && this.currentUrl.startsWith(r));
  }
  isCompetencesActive() {
    return [
      routes.student_MesCompetences,
      routes.student_CompetencesRecommandees,
      routes.student_EcartCompetences
    ].some((r) => r && this.currentUrl.startsWith(r));
  }
  isPalmaresActive() {
    return [routes.studentCertificat].some((r) => r && this.currentUrl.startsWith(r));
  }
  isExactActive(path) {
    return !!path && this.currentUrl.startsWith(path);
  }
  isRhInLearnerMode() {
    const user = this.authService.getUser();
    if (!user)
      return false;
    const roleType = user.role_type ?? user["role_type"] ?? "";
    const roleId = user.role_id ?? 0;
    return [4, 5, 9, 14].includes(roleId) || roleType === "rh";
  }
  static \u0275fac = function StudentSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentSidebarComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentSidebarComponent, selectors: [["app-student-sidebar"]], decls: 119, vars: 75, consts: [[1, "settings-sidebar"], ["class", "rh-switch-banner", 4, "ngIf"], [1, "sidebar-toggle", 3, "click"], [1, "isax", 3, "ngClass"], [1, "main-menu"], [1, "menu-item"], [3, "routerLink"], [1, "isax", "isax-grid-35"], [3, "click"], [1, "isax", "isax-play-circle"], [1, "submenu-arrow", "isax", "isax-arrow-right-3"], [1, "submenu"], [1, "isax", "isax-send-2"], [1, "isax", "isax-chart"], ["routerLinkActive", "active", 3, "routerLink"], [1, "isax", "isax-note-21"], [1, "isax", "isax-clipboard-text"], [1, "isax", "isax-calendar-1"], [1, "isax", "isax-medal"], [1, "isax", "isax-ticket"], [1, "menu-item", "logout"], [1, "isax", "isax-logout"], [1, "rh-switch-banner"], [1, "rh-switch-banner__label"], [1, "isax", "isax-shield-tick"], [1, "rh-switch-banner__btn", 3, "routerLink"], [1, "isax", "isax-arrow-left-2"]], template: function StudentSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, StudentSidebarComponent_div_1_Template, 8, 1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275listener("click", function StudentSidebarComponent_Template_div_click_2_listener() {
        return ctx.isCollapsed = !ctx.isCollapsed;
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ul", 4)(5, "li", 5)(6, "a", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Tableau de bord");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "li", 5)(11, "a", 8);
      \u0275\u0275listener("click", function StudentSidebarComponent_Template_a_click_11_listener() {
        return ctx.toggleGroup("formations");
      });
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "Mes formations");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ul", 11)(17, "li")(18, "a", 6);
      \u0275\u0275text(19, "Formations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 6);
      \u0275\u0275text(22, "Catalogues");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 6);
      \u0275\u0275text(25, "Parcours");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 6);
      \u0275\u0275text(28, "Sessions");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "li", 5)(30, "a", 8);
      \u0275\u0275listener("click", function StudentSidebarComponent_Template_a_click_30_listener() {
        return ctx.toggleGroup("demandes");
      });
      \u0275\u0275element(31, "i", 12);
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33, "Mes demandes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "ul", 11)(36, "li")(37, "a", 6);
      \u0275\u0275text(38, " Formations ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "li")(40, "a", 6);
      \u0275\u0275text(41, " Sessions ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 6);
      \u0275\u0275text(44, " Parcours ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 6);
      \u0275\u0275text(47, " Catalogues ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "li", 5)(49, "a", 8);
      \u0275\u0275listener("click", function StudentSidebarComponent_Template_a_click_49_listener() {
        return ctx.toggleGroup("competences");
      });
      \u0275\u0275element(50, "i", 13);
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "Mes comp\xE9tences");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 11)(55, "li")(56, "a", 6);
      \u0275\u0275text(57, "Comp\xE9tences acquises");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 6);
      \u0275\u0275text(60, "Recommand\xE9es");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li")(62, "a", 6);
      \u0275\u0275text(63, "\xC9cart de comp\xE9tences");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "li", 5)(65, "a", 14);
      \u0275\u0275element(66, "i", 15);
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "Mes Quiz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "li", 5)(70, "a", 14);
      \u0275\u0275element(71, "i", 16);
      \u0275\u0275elementStart(72, "span");
      \u0275\u0275text(73, "Mes Sondages");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "li", 5)(75, "a", 14);
      \u0275\u0275element(76, "i", 17);
      \u0275\u0275elementStart(77, "span");
      \u0275\u0275text(78, "Mon planning");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "li", 5)(80, "a", 8);
      \u0275\u0275listener("click", function StudentSidebarComponent_Template_a_click_80_listener() {
        return ctx.toggleGroup("palmares");
      });
      \u0275\u0275element(81, "i", 18);
      \u0275\u0275elementStart(82, "span");
      \u0275\u0275text(83, "Mes palmar\xE8s");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "ul", 11)(86, "li")(87, "a", 6);
      \u0275\u0275text(88, "Mes certificats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li")(90, "a");
      \u0275\u0275text(91, "Mes habilitations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "li")(93, "a");
      \u0275\u0275text(94, "Gamification / Mes badges");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(95, "li", 5)(96, "a", 8);
      \u0275\u0275listener("click", function StudentSidebarComponent_Template_a_click_96_listener() {
        return ctx.toggleGroup("aide");
      });
      \u0275\u0275element(97, "i", 19);
      \u0275\u0275elementStart(98, "span");
      \u0275\u0275text(99, "Centre d'aide");
      \u0275\u0275elementEnd();
      \u0275\u0275element(100, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "ul", 11)(102, "li")(103, "a");
      \u0275\u0275text(104, "Guide d'utilisation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "li")(106, "a");
      \u0275\u0275text(107, "Tutoriels vid\xE9o");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "li")(109, "a");
      \u0275\u0275text(110, "Soumettre un ticket");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "li")(112, "a");
      \u0275\u0275text(113, "Annonces et mises \xE0 jour");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(114, "li", 20)(115, "a", 6);
      \u0275\u0275element(116, "i", 21);
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, "D\xE9connexion");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("collapsed", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isRhInLearnerMode());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.isCollapsed ? "isax-arrow-right-2" : "isax-arrow-left-2");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.isDashboardActive());
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.students_Dashboard);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.isFormationsActive());
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("transform", ctx.openGroups["formations"] ? "rotate(90deg)" : "none");
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.openGroups["formations"]);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.isExactActive(ctx.routes.studentMyCourses));
      \u0275\u0275property("routerLink", ctx.routes.studentMyCourses);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.isExactActive(ctx.routes.student_CataloguesAssignes));
      \u0275\u0275property("routerLink", ctx.routes.student_CataloguesAssignes);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.isExactActive(ctx.routes.student_ParcoursAssignes));
      \u0275\u0275property("routerLink", ctx.routes.student_ParcoursAssignes);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.isExactActive(ctx.routes.student_SessionsAcceptees));
      \u0275\u0275property("routerLink", ctx.routes.student_SessionsAcceptees);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.isDemandesActive());
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("transform", ctx.openGroups["demandes"] ? "rotate(90deg)" : "none");
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.openGroups["demandes"]);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.isExactActive(ctx.routes.studentDemande));
      \u0275\u0275property("routerLink", ctx.routes.studentDemande);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.isExactActive(ctx.routes.student_DemandeSession));
      \u0275\u0275property("routerLink", ctx.routes.student_DemandeSession);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.isExactActive(ctx.routes.student_DemandeParcours));
      \u0275\u0275property("routerLink", ctx.routes.student_DemandeParcours);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.isExactActive(ctx.routes.student_DemandeCatalogue));
      \u0275\u0275property("routerLink", ctx.routes.student_DemandeCatalogue);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.isCompetencesActive());
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("transform", ctx.openGroups["competences"] ? "rotate(90deg)" : "none");
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.openGroups["competences"]);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.isExactActive(ctx.routes.student_MesCompetences));
      \u0275\u0275property("routerLink", ctx.routes.student_MesCompetences);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.isExactActive(ctx.routes.student_CompetencesRecommandees));
      \u0275\u0275property("routerLink", ctx.routes.student_CompetencesRecommandees);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.isExactActive(ctx.routes.student_EcartCompetences));
      \u0275\u0275property("routerLink", ctx.routes.student_EcartCompetences);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.students_quiz);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentMesSondages);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.student_Planning);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.isPalmaresActive());
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("transform", ctx.openGroups["palmares"] ? "rotate(90deg)" : "none");
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.openGroups["palmares"]);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.isExactActive(ctx.routes.studentCertificat));
      \u0275\u0275property("routerLink", ctx.routes.studentCertificat);
      \u0275\u0275advance(13);
      \u0275\u0275styleProp("transform", ctx.openGroups["aide"] ? "rotate(90deg)" : "none");
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.openGroups["aide"]);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterModule, RouterLink, RouterLinkActive], styles: ['@charset "UTF-8";\n\n\n\n.settings-sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  min-width: 280px;\n  height: 100vh;\n  background: #0d9488;\n  border-right: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 1.5rem 1rem;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n  transition: width 0.3s ease, min-width 0.3s ease;\n}\n.settings-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.settings-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.settings-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 4px;\n}\n.rh-switch-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin: 10px 10px 4px;\n  padding: 8px 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #ecfdf5,\n      #d1fae5);\n  border: 1px solid #6ee7b7;\n  border-radius: 10px;\n}\n.rh-switch-banner__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #065f46;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.rh-switch-banner__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #10b981;\n}\n.rh-switch-banner__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: #10b981;\n  color: #fff;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.rh-switch-banner__btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.rh-switch-banner__btn[_ngcontent-%COMP%]:hover {\n  background: #059669;\n  color: #fff;\n}\n.sidebar-toggle[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 1.25rem;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: rgba(255, 255, 255, 0.5);\n}\n.sidebar-toggle[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.main-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.menu-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0.2rem;\n}\n.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.9rem;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.5);\n}\n.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n}\n.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #2dd4bf;\n}\n.submenu-arrow[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.5;\n  margin-left: auto;\n  transition: transform 0.2s ease;\n  color: rgba(255, 255, 255, 0.5);\n}\n.submenu[_ngcontent-%COMP%] {\n  position: static;\n  list-style: none;\n  padding: 4px 0 4px 14px;\n  margin: 2px 0 4px 28px;\n  border-left: 2px solid rgba(20, 184, 166, 0.3);\n  display: none;\n}\n.submenu.open[_ngcontent-%COMP%] {\n  display: block;\n}\n.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: 0.15s ease;\n}\n.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n}\n.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #2dd4bf;\n  font-weight: 700;\n  background: rgba(20, 184, 166, 0.18);\n}\n.demande-dot[_ngcontent-%COMP%] {\n  display: none;\n}\n.demande-info[_ngcontent-%COMP%] {\n  display: contents;\n}\n.demande-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.3;\n}\n.demande-desc[_ngcontent-%COMP%] {\n  display: none;\n}\n.settings-sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 72px;\n  min-width: 72px;\n}\n.settings-sidebar.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.settings-sidebar.collapsed[_ngcontent-%COMP%]   .submenu-arrow[_ngcontent-%COMP%] {\n  display: none;\n}\n.settings-sidebar.collapsed[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.logout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fca5a5 !important;\n}\n.logout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fca5a5 !important;\n}\n.logout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15) !important;\n}\n.menu-item[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.18) !important;\n  color: #ffffff !important;\n  font-weight: 700;\n}\n.menu-item[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #2dd4bf !important;\n  opacity: 1 !important;\n}\n.menu-item[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 4px;\n  height: 100%;\n  background: #2dd4bf;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 4px;\n}\n.menu-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.18) !important;\n  color: #ffffff !important;\n  font-weight: 700;\n}\n.menu-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  color: #2dd4bf !important;\n  opacity: 1 !important;\n}\n.menu-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .submenu-arrow[_ngcontent-%COMP%] {\n  color: #2dd4bf !important;\n  opacity: 0.9 !important;\n}\n.menu-item.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 4px;\n  height: 100%;\n  background: #2dd4bf;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=student-sidebar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-student-sidebar", imports: [CommonModule, RouterModule], template: `<div class="settings-sidebar" [class.collapsed]="isCollapsed">\r
\r
  <!-- Banni\xE8re retour AdminRH (visible uniquement si l'utilisateur est un RH en mode apprenant) -->\r
  <div *ngIf="isRhInLearnerMode()" class="rh-switch-banner">\r
    <div class="rh-switch-banner__label">\r
      <i class="isax isax-shield-tick"></i>\r
      <span>Mode apprenant</span>\r
    </div>\r
    <a [routerLink]="routes.adminrh_dashboard" class="rh-switch-banner__btn">\r
      <i class="isax isax-arrow-left-2"></i> Espace AdminRH\r
    </a>\r
  </div>\r
\r
  <!-- Toggle Collapse -->\r
  <div class="sidebar-toggle" (click)="isCollapsed = !isCollapsed">\r
    <i class="isax" [ngClass]="isCollapsed ? 'isax-arrow-right-2' : 'isax-arrow-left-2'"></i>\r
  </div>\r
\r
  <ul class="main-menu">\r
\r
    <!-- ================= TABLEAU DE BORD ================= -->\r
    <li class="menu-item" [class.active]="isDashboardActive()">\r
      <a [routerLink]="routes.students_Dashboard">\r
        <i class="isax isax-grid-35"></i>\r
        <span>Tableau de bord</span>\r
      </a>\r
    </li>\r
\r
    <!-- ================= MES FORMATIONS ================= -->\r
    <li class="menu-item" [class.active]="isFormationsActive()">\r
      <a (click)="toggleGroup('formations')">\r
        <i class="isax isax-play-circle"></i>\r
        <span>Mes formations</span>\r
        <i class="submenu-arrow isax isax-arrow-right-3"\r
           [style.transform]="openGroups['formations'] ? 'rotate(90deg)' : 'none'"></i>\r
      </a>\r
      <ul class="submenu" [class.open]="openGroups['formations']">\r
        <li><a [routerLink]="routes.studentMyCourses"\r
               [class.active]="isExactActive(routes.studentMyCourses)">Formations</a></li>\r
        <li><a [routerLink]="routes.student_CataloguesAssignes"\r
               [class.active]="isExactActive(routes.student_CataloguesAssignes)">Catalogues</a></li>\r
        <li><a [routerLink]="routes.student_ParcoursAssignes"\r
               [class.active]="isExactActive(routes.student_ParcoursAssignes)">Parcours</a></li>\r
        <li><a [routerLink]="routes.student_SessionsAcceptees"\r
               [class.active]="isExactActive(routes.student_SessionsAcceptees)">Sessions</a></li>\r
      </ul>\r
    </li>\r
\r
    <!-- ================= MES DEMANDES ================= -->\r
    <li class="menu-item" [class.active]="isDemandesActive()">\r
      <a (click)="toggleGroup('demandes')">\r
        <i class="isax isax-send-2"></i>\r
        <span>Mes demandes</span>\r
        <i class="submenu-arrow isax isax-arrow-right-3"\r
           [style.transform]="openGroups['demandes'] ? 'rotate(90deg)' : 'none'"></i>\r
      </a>\r
      <!-- Style identique \xE0 Mes formations : texte simple, gras, sans pastilles -->\r
      <ul class="submenu" [class.open]="openGroups['demandes']">\r
        <li>\r
          <a [routerLink]="routes.studentDemande"\r
             [class.active]="isExactActive(routes.studentDemande)">\r
            Formations\r
          </a>\r
        </li>\r
        <li>\r
          <a [routerLink]="routes.student_DemandeSession"\r
             [class.active]="isExactActive(routes.student_DemandeSession)">\r
            Sessions\r
          </a>\r
        </li>\r
        <li>\r
          <a [routerLink]="routes.student_DemandeParcours"\r
             [class.active]="isExactActive(routes.student_DemandeParcours)">\r
            Parcours\r
          </a>\r
        </li>\r
        <li>\r
          <a [routerLink]="routes.student_DemandeCatalogue"\r
             [class.active]="isExactActive(routes.student_DemandeCatalogue)">\r
            Catalogues\r
          </a>\r
        </li>\r
      </ul>\r
    </li>\r
\r
    <!-- ================= MES COMP\xC9TENCES ================= -->\r
    <li class="menu-item" [class.active]="isCompetencesActive()">\r
      <a (click)="toggleGroup('competences')">\r
        <i class="isax isax-chart"></i>\r
        <span>Mes comp\xE9tences</span>\r
        <i class="submenu-arrow isax isax-arrow-right-3"\r
           [style.transform]="openGroups['competences'] ? 'rotate(90deg)' : 'none'"></i>\r
      </a>\r
      <ul class="submenu" [class.open]="openGroups['competences']">\r
        <li><a [routerLink]="routes.student_MesCompetences"\r
               [class.active]="isExactActive(routes.student_MesCompetences)">Comp\xE9tences acquises</a></li>\r
        <li><a [routerLink]="routes.student_CompetencesRecommandees"\r
               [class.active]="isExactActive(routes.student_CompetencesRecommandees)">Recommand\xE9es</a></li>\r
        <li><a [routerLink]="routes.student_EcartCompetences"\r
               [class.active]="isExactActive(routes.student_EcartCompetences)">\xC9cart de comp\xE9tences</a></li>\r
      </ul>\r
    </li>\r
\r
    <!-- ================= MES QUIZ ================= -->\r
    <li class="menu-item">\r
      <a [routerLink]="routes.students_quiz" routerLinkActive="active">\r
        <i class="isax isax-note-21"></i>\r
        <span>Mes Quiz</span>\r
      </a>\r
    </li>\r
\r
    <!-- ================= MES SONDAGES ================= -->\r
    <li class="menu-item">\r
      <a [routerLink]="routes.studentMesSondages" routerLinkActive="active">\r
        <i class="isax isax-clipboard-text"></i>\r
        <span>Mes Sondages</span>\r
      </a>\r
    </li>\r
\r
    <!-- ================= MON PLANNING ================= -->\r
    <li class="menu-item">\r
      <a [routerLink]="routes.student_Planning" routerLinkActive="active">\r
        <i class="isax isax-calendar-1"></i>\r
        <span>Mon planning</span>\r
      </a>\r
    </li>\r
\r
    <!-- ================= MES PALMAR\xC8S ================= -->\r
    <li class="menu-item" [class.active]="isPalmaresActive()">\r
      <a (click)="toggleGroup('palmares')">\r
        <i class="isax isax-medal"></i>\r
        <span>Mes palmar\xE8s</span>\r
        <i class="submenu-arrow isax isax-arrow-right-3"\r
           [style.transform]="openGroups['palmares'] ? 'rotate(90deg)' : 'none'"></i>\r
      </a>\r
      <ul class="submenu" [class.open]="openGroups['palmares']">\r
        <li><a [routerLink]="routes.studentCertificat"\r
               [class.active]="isExactActive(routes.studentCertificat)">Mes certificats</a></li>\r
        <li><a>Mes habilitations</a></li>\r
        <li><a>Gamification / Mes badges</a></li>\r
      </ul>\r
    </li>\r
\r
    <!-- ================= CENTRE D'AIDE ================= -->\r
    <li class="menu-item">\r
      <a (click)="toggleGroup('aide')">\r
        <i class="isax isax-ticket"></i>\r
        <span>Centre d'aide</span>\r
        <i class="submenu-arrow isax isax-arrow-right-3"\r
           [style.transform]="openGroups['aide'] ? 'rotate(90deg)' : 'none'"></i>\r
      </a>\r
      <ul class="submenu" [class.open]="openGroups['aide']">\r
        <li><a>Guide d'utilisation</a></li>\r
        <li><a>Tutoriels vid\xE9o</a></li>\r
        <li><a>Soumettre un ticket</a></li>\r
        <li><a>Annonces et mises \xE0 jour</a></li>\r
      </ul>\r
    </li>\r
\r
    <!-- ================= D\xC9CONNEXION ================= -->\r
    <li class="menu-item logout">\r
      <a [routerLink]="routes.login">\r
        <i class="isax isax-logout"></i>\r
        <span>D\xE9connexion</span>\r
      </a>\r
    </li>\r
\r
  </ul>\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/features/student/common/student-sidebar/student-sidebar.component.scss */\n.settings-sidebar {\n  width: 280px;\n  min-width: 280px;\n  height: 100vh;\n  background: #0d9488;\n  border-right: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 1.5rem 1rem;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n  transition: width 0.3s ease, min-width 0.3s ease;\n}\n.settings-sidebar::-webkit-scrollbar {\n  width: 4px;\n}\n.settings-sidebar::-webkit-scrollbar-track {\n  background: transparent;\n}\n.settings-sidebar::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 4px;\n}\n.rh-switch-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin: 10px 10px 4px;\n  padding: 8px 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #ecfdf5,\n      #d1fae5);\n  border: 1px solid #6ee7b7;\n  border-radius: 10px;\n}\n.rh-switch-banner__label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #065f46;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.rh-switch-banner__label i {\n  font-size: 14px;\n  color: #10b981;\n}\n.rh-switch-banner__btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: #10b981;\n  color: #fff;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.rh-switch-banner__btn i {\n  font-size: 11px;\n}\n.rh-switch-banner__btn:hover {\n  background: #059669;\n  color: #fff;\n}\n.sidebar-toggle {\n  text-align: right;\n  margin-bottom: 1.25rem;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: rgba(255, 255, 255, 0.5);\n}\n.sidebar-toggle:hover {\n  color: #ffffff;\n}\n.main-menu {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.menu-item {\n  position: relative;\n  margin-bottom: 0.2rem;\n}\n.menu-item > a {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.9rem;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.menu-item > a i:first-child {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.5);\n}\n.menu-item > a:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n}\n.menu-item > a:hover i {\n  color: #2dd4bf;\n}\n.submenu-arrow {\n  font-size: 0.8rem;\n  opacity: 0.5;\n  margin-left: auto;\n  transition: transform 0.2s ease;\n  color: rgba(255, 255, 255, 0.5);\n}\n.submenu {\n  position: static;\n  list-style: none;\n  padding: 4px 0 4px 14px;\n  margin: 2px 0 4px 28px;\n  border-left: 2px solid rgba(20, 184, 166, 0.3);\n  display: none;\n}\n.submenu.open {\n  display: block;\n}\n.submenu li {\n  margin-bottom: 2px;\n}\n.submenu li a {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  transition: 0.15s ease;\n}\n.submenu li a:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n}\n.submenu li a.active {\n  color: #2dd4bf;\n  font-weight: 700;\n  background: rgba(20, 184, 166, 0.18);\n}\n.demande-dot {\n  display: none;\n}\n.demande-info {\n  display: contents;\n}\n.demande-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.3;\n}\n.demande-desc {\n  display: none;\n}\n.settings-sidebar.collapsed {\n  width: 72px;\n  min-width: 72px;\n}\n.settings-sidebar.collapsed span,\n.settings-sidebar.collapsed .submenu-arrow {\n  display: none;\n}\n.settings-sidebar.collapsed .submenu {\n  display: none !important;\n}\n.logout a {\n  color: #fca5a5 !important;\n}\n.logout a i {\n  color: #fca5a5 !important;\n}\n.logout a:hover {\n  background: rgba(239, 68, 68, 0.15) !important;\n}\n.menu-item > a.active {\n  background: rgba(20, 184, 166, 0.18) !important;\n  color: #ffffff !important;\n  font-weight: 700;\n}\n.menu-item > a.active i {\n  color: #2dd4bf !important;\n  opacity: 1 !important;\n}\n.menu-item > a.active::before {\n  content: "";\n  width: 4px;\n  height: 100%;\n  background: #2dd4bf;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 4px;\n}\n.menu-item.active > a {\n  background: rgba(20, 184, 166, 0.18) !important;\n  color: #ffffff !important;\n  font-weight: 700;\n}\n.menu-item.active > a i:first-child {\n  color: #2dd4bf !important;\n  opacity: 1 !important;\n}\n.menu-item.active > a .submenu-arrow {\n  color: #2dd4bf !important;\n  opacity: 0.9 !important;\n}\n.menu-item.active > a::before {\n  content: "";\n  width: 4px;\n  height: 100%;\n  background: #2dd4bf;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=student-sidebar.component.css.map */\n'] }]
  }], () => [{ type: CommonService }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentSidebarComponent, { className: "StudentSidebarComponent", filePath: "app/features/student/common/student-sidebar/student-sidebar.component.ts", lineNumber: 16 });
})();

// src/app/features/student/student.component.ts
function StudentComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.userFonction);
  }
}
function StudentComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275elementStart(2, "a", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.studentProfile);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.userEntreprise);
  }
}
function StudentComponent_div_31_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275element(4, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.titre);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getProgressionClass(f_r2.progression));
    \u0275\u0275styleProp("width", f_r2.progression, "%");
    \u0275\u0275advance();
    \u0275\u0275classMap("pct--" + ctx_r0.getProgressionClass(f_r2.progression));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", f_r2.progression, "%");
  }
}
function StudentComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "span", 42);
    \u0275\u0275text(3, "MES FORMATIONS EN COURS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 44);
    \u0275\u0275template(7, StudentComponent_div_31_div_7_Template, 7, 8, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.completionGlobale, "% de compl\xE9tion globale");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.formationsEnCours);
  }
}
function StudentComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Expire bient\xF4t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.nbExpireBientot);
  }
}
function StudentComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Prochaine session \xB7 ", ctx_r0.prochainSession);
  }
}
var StudentComponent = class _StudentComponent {
  router;
  auth;
  formationsService;
  routes = routes;
  last = "";
  // ── Profil ────────────────────────────────────────
  userName = "";
  userInitials = "";
  userRole = "Employ\xE9";
  userFonction = "";
  userEntreprise = "";
  // ── Formations en cours ───────────────────────────
  formationsEnCours = [];
  completionGlobale = 0;
  // ── Badges ────────────────────────────────────────
  nbCertificats = 0;
  nbExpireBientot = 0;
  prochainSession = null;
  breadcrumbLabels = {
    "student-dashboard": "Tableau de bord",
    "student-profile": "Mon profil",
    "mes-formations": "Mes formations",
    "mes-cours": "Mes formations",
    "student-courses": "Mes formations",
    "mes-catalogues": "Catalogues",
    "catalogue-detail": "D\xE9tail catalogue",
    "mes-parcours": "Mes parcours",
    "mes-parcours-assignes": "Mes parcours",
    "parcours-assignes": "Mes parcours",
    "students-parcours": "Mes parcours",
    "students-session": "Mes sessions",
    "sessions-acceptees": "Mes sessions",
    "students-catalogue": "Demandes catalogues",
    "student-certificate": "Mes certifications",
    "student-quiz": "Mes quiz",
    "student-quiz-questions": "Questions quiz",
    "student-settings": "Param\xE8tres",
    "student-change-password": "Mot de passe",
    "student-notifications": "Notifications",
    "student-billing-address": "Facturation",
    "student-social-profile": "Profil social",
    "student-linked-accounts": "Comptes li\xE9s",
    "student-message": "Messages",
    "student-tickets": "Tickets",
    "student-reviews": "Avis",
    "student-wishlist": "Favoris",
    "student-referral": "Parrainage",
    "student-order-history": "Historique"
  };
  constructor(router, auth, formationsService) {
    this.router = router;
    this.auth = auth;
    this.formationsService = formationsService;
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        const segments = data.url.split("/").filter((s) => s.length > 0);
        let label = "";
        for (let i = segments.length - 1; i >= 0; i--) {
          const seg = segments[i];
          if (/^\d+$/.test(seg) || seg.includes("?"))
            continue;
          if (this.breadcrumbLabels[seg]) {
            label = this.breadcrumbLabels[seg];
            break;
          }
        }
        if (!label) {
          const nonNumeric = segments.filter((s) => !/^\d+$/.test(s));
          label = (nonNumeric[nonNumeric.length - 1] ?? "").replace(/-/g, " ");
        }
        this.last = label;
      }
    });
  }
  ngOnInit() {
    this.loadProfile();
    this.loadData();
  }
  loadProfile() {
    const user = this.auth.getUser();
    if (!user)
      return;
    const prenom = user.prenom || user.first_name || "";
    const nom = user.nom || user.last_name || "";
    this.userName = [prenom, nom].filter(Boolean).join(" ") || user.name || user.email || "";
    this.userInitials = ([prenom[0], nom[0]].filter(Boolean).join("") || this.userName.slice(0, 2)).toUpperCase();
    this.userFonction = user.fonction || "";
    this.userEntreprise = user.entreprise?.nom || user.company || "";
    const roleMap = { 1: "Super Admin", 2: "Admin RH", 3: "Formateur", 4: "Employ\xE9" };
    this.userRole = roleMap[user.role_id] || user.role || "Employ\xE9";
  }
  loadData() {
    forkJoin({
      formations: this.formationsService.getMesFormations().pipe(catchError(() => of({ formations: [] }))),
      certificats: this.formationsService.getMyCertificates().pipe(catchError(() => of({ certificats: [] }))),
      sessions: this.formationsService.getMesSessionsAcceptees().pipe(catchError(() => of({ sessions: [] })))
    }).subscribe(({ formations, certificats, sessions }) => {
      const raw = formations?.formations ?? formations ?? [];
      const enCours = raw.filter((f) => {
        const p = f.progression ?? 0;
        return p > 0 && p < 100;
      });
      this.formationsEnCours = enCours.slice(0, 4).map((f) => ({
        id: f.id,
        titre: f.titre,
        progression: f.progression ?? 0
      }));
      if (this.formationsEnCours.length > 0) {
        this.completionGlobale = Math.round(this.formationsEnCours.reduce((s, f) => s + f.progression, 0) / this.formationsEnCours.length);
      }
      const certs = certificats?.data ?? certificats?.certificats ?? certificats ?? [];
      this.nbCertificats = Array.isArray(certs) ? certs.length : 0;
      const now = /* @__PURE__ */ new Date();
      const in30 = new Date(now.getTime() + 30 * 24 * 3600 * 1e3);
      this.nbExpireBientot = certs.filter((c) => {
        if (!c.date_expiration)
          return false;
        const exp = new Date(c.date_expiration);
        return exp > now && exp <= in30;
      }).length;
      const sess = sessions?.sessions ?? sessions ?? [];
      const now2 = /* @__PURE__ */ new Date();
      const futures = sess.filter((s) => {
        if (typeof s.est_a_venir !== "undefined")
          return !!s.est_a_venir;
        const d = s.date_debut ?? s.date_session;
        return d && new Date(d) > now2;
      }).sort((a, b) => new Date(a.date_debut ?? a.date_session ?? 0).getTime() - new Date(b.date_debut ?? b.date_session ?? 0).getTime());
      if (futures.length > 0) {
        const dateStr = futures[0].date_debut ?? futures[0].date_session;
        this.prochainSession = dateStr ? new Date(dateStr).toLocaleDateString("fr-FR", { weekday: "short", day: "2-digit", month: "short" }) : "\xC0 venir";
      } else {
        this.prochainSession = null;
      }
    });
  }
  get prenom() {
    return this.userName.split(" ")[0] || this.userName;
  }
  getProgressionClass(p) {
    if (p >= 80)
      return "bar--green";
    if (p >= 40)
      return "bar--orange";
    return "bar--gray";
  }
  static \u0275fac = function StudentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormationsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentComponent, selectors: [["app-student"]], decls: 62, vars: 16, consts: [[1, "content"], [1, "container"], [1, "emp-header"], [1, "emp-top-label"], [1, "emp-card"], ["aria-hidden", "true", 1, "emp-card-deco"], [1, "emp-identity"], [1, "emp-av"], [1, "emp-id-info"], [1, "emp-name"], [1, "emp-role-line"], [4, "ngIf"], ["class", "emp-company", 4, "ngIf"], [1, "emp-greeting"], [1, "emp-greeting-count"], [1, "emp-actions"], [1, "emp-btn", "emp-btn-outline", 3, "routerLink"], [1, "isax", "isax-search-normal-1"], [1, "emp-btn", "emp-btn-primary", 3, "routerLink"], [1, "isax", "isax-add"], ["class", "emp-formations-row", 4, "ngIf"], [1, "emp-badges-row"], [1, "emp-badge", "emp-badge--cert"], [1, "isax", "isax-medal"], ["class", "emp-badge emp-badge--warn", 4, "ngIf"], ["class", "emp-badge emp-badge--session", 4, "ngIf"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9"], [1, "footer"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [3, "routerLink"], [1, "emp-company"], [1, "isax", "isax-building-3"], [1, "emp-company-link", 3, "routerLink"], [1, "emp-formations-row"], [1, "emp-formations-header"], [1, "emp-formations-title"], [1, "emp-completion"], [1, "emp-formations-list"], ["class", "emp-formation-item", 4, "ngFor", "ngForOf"], [1, "emp-formation-item"], [1, "emp-formation-name"], [1, "emp-formation-bar"], [1, "emp-formation-bar__fill"], [1, "emp-formation-pct"], [1, "emp-badge", "emp-badge--warn"], [1, "isax", "isax-clock"], [1, "emp-badge", "emp-badge--session"], [1, "isax", "isax-calendar-1"]], template: function StudentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "EMPLOY\xC9 \u2014 ESPACE APPRENANT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275element(6, "div", 5);
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "h5", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 10);
      \u0275\u0275text(14);
      \u0275\u0275template(15, StudentComponent_span_15_Template, 2, 1, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, StudentComponent_p_16_Template, 4, 2, "p", 12);
      \u0275\u0275elementStart(17, "p", 13);
      \u0275\u0275text(18, " Bon retour, ");
      \u0275\u0275elementStart(19, "strong");
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " \u{1F44B} ");
      \u0275\u0275elementStart(22, "span", 14);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 15)(25, "a", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275text(27, "Explorer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 18);
      \u0275\u0275element(29, "i", 19);
      \u0275\u0275text(30, "Demander une formation ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(31, StudentComponent_div_31_Template, 8, 2, "div", 20);
      \u0275\u0275elementStart(32, "div", 21)(33, "div", 22);
      \u0275\u0275element(34, "i", 23);
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "Certificats obtenus");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "strong");
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(39, StudentComponent_div_39_Template, 6, 1, "div", 24)(40, StudentComponent_div_40_Template, 4, 1, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 26);
      \u0275\u0275element(42, "app-student-sidebar", 27);
      \u0275\u0275elementStart(43, "div", 28);
      \u0275\u0275element(44, "router-outlet");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "footer", 29)(46, "div", 30)(47, "div", 1)(48, "div", 31)(49, "div", 32)(50, "div", 33)(51, "p", 34);
      \u0275\u0275text(52, "Copyright \xA9 2026 Pyramide. tout droits reserv\xE9s.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 32)(54, "div")(55, "ul", 35)(56, "li")(57, "a", 36);
      \u0275\u0275text(58, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 36);
      \u0275\u0275text(61, "Politique de Confidentialit\xE9");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.userInitials);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.userName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.userRole);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userFonction);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userEntreprise);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.prenom);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("\u2014 ", ctx.formationsEnCours.length, " formation", ctx.formationsEnCours.length !== 1 ? "s" : "", " en cours");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.studentMyCourses);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentDemande);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.formationsEnCours.length > 0);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.nbCertificats);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.nbExpireBientot > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.prochainSession);
      \u0275\u0275advance(17);
      \u0275\u0275property("routerLink", ctx.routes.page_term_condition);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_privacy_policy);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterOutlet, RouterModule, RouterLink, StudentSidebarComponent], styles: ["/* src/app/features/student/student.component.scss */\napp-student .content {\n  padding: 1.5rem 0 !important;\n}\n.emp-header {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 20px 24px 0;\n  margin-bottom: 24px;\n  overflow: hidden;\n  position: relative;\n}\n.emp-header .emp-top-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #6b7280;\n  text-transform: uppercase;\n  margin-bottom: 14px;\n}\n.emp-header .emp-card {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 18px;\n  position: relative;\n}\n.emp-header .emp-card-deco {\n  position: absolute;\n  top: -20px;\n  right: -20px;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(6, 155, 143, 0.08) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.emp-header .emp-identity {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.emp-header .emp-av {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      #047a6f);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  flex-shrink: 0;\n  letter-spacing: 0.5px;\n}\n.emp-header .emp-id-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.emp-header .emp-name {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.emp-header .emp-role-line {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.emp-header .emp-company {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.emp-header .emp-company i {\n  font-size: 13px;\n  color: #069b8f;\n}\n.emp-header .emp-company-link {\n  color: #069b8f !important;\n  font-weight: 600;\n  text-decoration: none !important;\n}\n.emp-header .emp-company-link:hover {\n  text-decoration: underline !important;\n}\n.emp-header .emp-greeting {\n  font-size: 13px;\n  color: #374151;\n  font-weight: 500;\n  margin: 4px 0 0;\n}\n.emp-header .emp-greeting strong {\n  color: #1a1a2e;\n}\n.emp-header .emp-greeting-count {\n  color: #069b8f;\n  font-weight: 600;\n}\n.emp-header .emp-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.emp-header a.emp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 9px 20px;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: all 0.15s;\n  cursor: pointer;\n  line-height: 1.4;\n  border: 1px solid;\n}\n.emp-header a.emp-btn i {\n  font-size: 15px;\n}\n.emp-header a.emp-btn.emp-btn-outline {\n  background-color: transparent;\n  color: #1a1a2e;\n  border-color: #d1d5db;\n}\n.emp-header a.emp-btn.emp-btn-outline:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background-color: transparent;\n}\n.emp-header a.emp-btn.emp-btn-primary {\n  background-color: #069b8f;\n  color: #ffffff;\n  border-color: #069b8f;\n}\n.emp-header a.emp-btn.emp-btn-primary:hover {\n  background-color: #047a6f;\n  border-color: #047a6f;\n  color: #ffffff;\n}\n.emp-header .emp-formations-row {\n  border-top: 1px solid #e5e7eb;\n  padding: 14px 0 16px;\n}\n.emp-header .emp-formations-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.emp-header .emp-formations-title {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: #6b7280;\n  text-transform: uppercase;\n}\n.emp-header .emp-completion {\n  font-size: 12px;\n  font-weight: 600;\n  color: #D4AF37;\n}\n.emp-header .emp-formations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.emp-header .emp-formation-item {\n  display: grid;\n  grid-template-columns: 1fr 160px 44px;\n  align-items: center;\n  gap: 12px;\n}\n.emp-header .emp-formation-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.emp-header .emp-formation-bar {\n  height: 6px;\n  border-radius: 99px;\n  background: #e5e7eb;\n  overflow: hidden;\n}\n.emp-header .emp-formation-bar__fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.emp-header .emp-formation-bar__fill.bar--green {\n  background: #069b8f;\n}\n.emp-header .emp-formation-bar__fill.bar--orange {\n  background: #D4AF37;\n}\n.emp-header .emp-formation-bar__fill.bar--gray {\n  background: #94a3b8;\n}\n.emp-header .emp-formation-pct {\n  font-size: 12px;\n  font-weight: 700;\n  text-align: right;\n}\n.emp-header .emp-formation-pct.pct--bar--green {\n  color: #069b8f;\n}\n.emp-header .emp-formation-pct.pct--bar--orange {\n  color: #D4AF37;\n}\n.emp-header .emp-formation-pct.pct--bar--gray {\n  color: #94a3b8;\n}\n.emp-header .emp-badges-row {\n  border-top: 1px solid #e5e7eb;\n  padding: 12px 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.emp-header .emp-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid transparent;\n}\n.emp-header .emp-badge i {\n  font-size: 14px;\n}\n.emp-header .emp-badge strong {\n  font-weight: 700;\n}\n.emp-header .emp-badge.emp-badge--cert {\n  background: #e6f7f5;\n  border-color: #b2e8e3;\n  color: #047a6f;\n}\n.emp-header .emp-badge.emp-badge--cert i {\n  color: #069b8f;\n}\n.emp-header .emp-badge.emp-badge--warn {\n  background: #fdf8e7;\n  border-color: #f0d98e;\n  color: #9a7c10;\n}\n.emp-header .emp-badge.emp-badge--warn i {\n  color: #D4AF37;\n}\n.emp-header .emp-badge.emp-badge--session {\n  background: #e6f7f5;\n  border-color: #b2e8e3;\n  color: #047a6f;\n  margin-left: auto;\n}\n.emp-header .emp-badge.emp-badge--session i {\n  color: #069b8f;\n}\n@media (max-width: 768px) {\n  .emp-header .emp-formation-item {\n    grid-template-columns: 1fr 80px 36px;\n  }\n  .emp-header .emp-card {\n    flex-direction: column;\n  }\n  .emp-header .emp-actions {\n    width: 100%;\n  }\n  .emp-header .emp-badge--session {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=student.component.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentComponent, [{
    type: Component,
    args: [{ selector: "app-student", encapsulation: ViewEncapsulation.None, imports: [CommonModule, RouterOutlet, RouterModule, StudentSidebarComponent], template: `<div class="content">\r
  <div class="container">\r
\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
         BANDE EN-T\xCATE EMPLOY\xC9\r
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <div class="emp-header">\r
\r
      <!-- Label section -->\r
      <div class="emp-top-label">EMPLOY\xC9 \u2014 ESPACE APPRENANT</div>\r
\r
      <!-- Carte identit\xE9 + boutons -->\r
      <div class="emp-card">\r
\r
        <!-- D\xE9coration fond -->\r
        <div class="emp-card-deco" aria-hidden="true"></div>\r
\r
        <!-- Gauche : avatar + infos + greeting -->\r
        <div class="emp-identity">\r
          <div class="emp-av">{{ userInitials }}</div>\r
          <div class="emp-id-info">\r
            <h5 class="emp-name">{{ userName }}</h5>\r
            <p class="emp-role-line">\r
              {{ userRole }}<span *ngIf="userFonction"> \xB7 {{ userFonction }}</span>\r
            </p>\r
            <p class="emp-company" *ngIf="userEntreprise">\r
              <i class="isax isax-building-3"></i>\r
              <a [routerLink]="routes.studentProfile" class="emp-company-link">{{ userEntreprise }}</a>\r
            </p>\r
            <p class="emp-greeting">\r
              Bon retour, <strong>{{ prenom }}</strong> \u{1F44B}\r
              <span class="emp-greeting-count">\u2014 {{ formationsEnCours.length }} formation{{ formationsEnCours.length !== 1 ? 's' : '' }} en cours</span>\r
            </p>\r
          </div>\r
        </div>\r
\r
        <!-- Droite : boutons -->\r
        <div class="emp-actions">\r
          <a [routerLink]="routes.studentMyCourses" class="emp-btn emp-btn-outline">\r
            <i class="isax isax-search-normal-1"></i>Explorer\r
          </a>\r
          <a [routerLink]="routes.studentDemande" class="emp-btn emp-btn-primary">\r
            <i class="isax isax-add"></i>Demander une formation\r
          </a>\r
        </div>\r
      </div>\r
\r
      <!-- Formations en cours -->\r
      <div class="emp-formations-row" *ngIf="formationsEnCours.length > 0">\r
        <div class="emp-formations-header">\r
          <span class="emp-formations-title">MES FORMATIONS EN COURS</span>\r
          <span class="emp-completion">{{ completionGlobale }}% de compl\xE9tion globale</span>\r
        </div>\r
        <div class="emp-formations-list">\r
          <div class="emp-formation-item" *ngFor="let f of formationsEnCours">\r
            <span class="emp-formation-name">{{ f.titre }}</span>\r
            <div class="emp-formation-bar">\r
              <div class="emp-formation-bar__fill"\r
                   [class]="getProgressionClass(f.progression)"\r
                   [style.width.%]="f.progression"></div>\r
            </div>\r
            <span class="emp-formation-pct" [class]="'pct--' + getProgressionClass(f.progression)">{{ f.progression }}%</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Badges bottom -->\r
      <div class="emp-badges-row">\r
        <div class="emp-badge emp-badge--cert">\r
          <i class="isax isax-medal"></i>\r
          <span>Certificats obtenus</span>\r
          <strong>{{ nbCertificats }}</strong>\r
        </div>\r
        <div class="emp-badge emp-badge--warn" *ngIf="nbExpireBientot > 0">\r
          <i class="isax isax-clock"></i>\r
          <span>Expire bient\xF4t</span>\r
          <strong>{{ nbExpireBientot }}</strong>\r
        </div>\r
        <div class="emp-badge emp-badge--session" *ngIf="prochainSession">\r
          <i class="isax isax-calendar-1"></i>\r
          <span>Prochaine session \xB7 {{ prochainSession }}</span>\r
        </div>\r
      </div>\r
\r
    </div>\r
    <!-- /emp-header -->\r
\r
    <!-- Layout sidebar + contenu -->\r
    <div class="row">\r
      <app-student-sidebar class="col-lg-3"></app-student-sidebar>\r
      <div class="col-lg-9">\r
        <router-outlet></router-outlet>\r
      </div>\r
    </div>\r
\r
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
              <img src="assets/img/logo.png" alt="">\r
            </div>\r
            <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>\r
            <div class="d-flex align-items-center">\r
              <a href="javascript:void(0);" class="me-2" title="App Store"><img src="assets/img/icon/appstore.svg" alt="App Store"></a>\r
              <a href="javascript:void(0);" title="Google Play"><img src="assets/img/icon/googleplay.svg" alt="Google Play"></a>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-lg-8">\r
          <div class="row row-gap-4">\r
            <div class="col-lg-3">\r
              <div class="footer-widget footer-menu">\r
                <h5 class="footer-title">Espace Formateur</h5>\r
                <ul>\r
                  <li><a [routerLink]="routes.courseGrid">Mentorat</a></li>\r
                  <li><a [routerLink]="routes.login">Connexion</a></li>\r
                  <li><a [routerLink]="routes.register">Inscription</a></li>\r
                  <li><a [routerLink]="routes.courseList">Booking</a></li>\r
                  <li><a [routerLink]="routes.students_Dashboard">Tableau de Bord Employ\xE9</a></li>\r
                </ul>\r
              </div>\r
            </div>\r
            <div class="col-lg-3">\r
              <div class="footer-widget footer-menu">\r
                <h5 class="footer-title">Espace Employ\xE9</h5>\r
                <ul>\r
                  <li><a href="javascript:void(0);">Appointments</a></li>\r
                  <li><a [routerLink]="routes.instructorMessage">Chat</a></li>\r
                  <li><a [routerLink]="routes.login">Login</a></li>\r
                  <li><a [routerLink]="routes.register">Register</a></li>\r
                  <li><a [routerLink]="routes.instructor_dashboard">Tableau de Bord Formateur</a></li>\r
                </ul>\r
              </div>\r
            </div>\r
            <div class="col-lg-6">\r
              <div class="footer-widget footer-contact">\r
                <h5 class="footer-title">Newsletter</h5>\r
                <div class="subscribe-input">\r
                  <form action="javascript:void(0);">\r
                    <input type="email" class="form-control" placeholder="Entrer votre Adresse Mail">\r
                    <button type="submit" class="btn btn-primary btn-sm inline-flex align-items-center">\r
                      <i class="isax isax-send-2 me-1"></i>S'abonner\r
                    </button>\r
                  </form>\r
                </div>\r
                <div class="footer-contact-info">\r
                  <div class="footer-address d-flex align-items-center">\r
                    <img src="assets/img/icon/icon-20.svg" alt="Img" class="img-fluid me-2">\r
                    <p>3556 Beech Street, San Francisco,<br>California, CA 94108</p>\r
                  </div>\r
                  <div class="footer-address d-flex align-items-center">\r
                    <img src="assets/img/icon/icon-19.svg" alt="Img" class="img-fluid me-2">\r
                    <p>dreamslms&#64;pyramid.com</p>\r
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
                      <p class="text-white">Copyright &copy; 2026 Pyramide. tout droits reserv\xE9s.</p>\r
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
`, styles: ["/* src/app/features/student/student.component.scss */\napp-student .content {\n  padding: 1.5rem 0 !important;\n}\n.emp-header {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 20px 24px 0;\n  margin-bottom: 24px;\n  overflow: hidden;\n  position: relative;\n}\n.emp-header .emp-top-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #6b7280;\n  text-transform: uppercase;\n  margin-bottom: 14px;\n}\n.emp-header .emp-card {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 18px;\n  position: relative;\n}\n.emp-header .emp-card-deco {\n  position: absolute;\n  top: -20px;\n  right: -20px;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(6, 155, 143, 0.08) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.emp-header .emp-identity {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.emp-header .emp-av {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      #047a6f);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  flex-shrink: 0;\n  letter-spacing: 0.5px;\n}\n.emp-header .emp-id-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.emp-header .emp-name {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.emp-header .emp-role-line {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.emp-header .emp-company {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.emp-header .emp-company i {\n  font-size: 13px;\n  color: #069b8f;\n}\n.emp-header .emp-company-link {\n  color: #069b8f !important;\n  font-weight: 600;\n  text-decoration: none !important;\n}\n.emp-header .emp-company-link:hover {\n  text-decoration: underline !important;\n}\n.emp-header .emp-greeting {\n  font-size: 13px;\n  color: #374151;\n  font-weight: 500;\n  margin: 4px 0 0;\n}\n.emp-header .emp-greeting strong {\n  color: #1a1a2e;\n}\n.emp-header .emp-greeting-count {\n  color: #069b8f;\n  font-weight: 600;\n}\n.emp-header .emp-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.emp-header a.emp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 9px 20px;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: all 0.15s;\n  cursor: pointer;\n  line-height: 1.4;\n  border: 1px solid;\n}\n.emp-header a.emp-btn i {\n  font-size: 15px;\n}\n.emp-header a.emp-btn.emp-btn-outline {\n  background-color: transparent;\n  color: #1a1a2e;\n  border-color: #d1d5db;\n}\n.emp-header a.emp-btn.emp-btn-outline:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background-color: transparent;\n}\n.emp-header a.emp-btn.emp-btn-primary {\n  background-color: #069b8f;\n  color: #ffffff;\n  border-color: #069b8f;\n}\n.emp-header a.emp-btn.emp-btn-primary:hover {\n  background-color: #047a6f;\n  border-color: #047a6f;\n  color: #ffffff;\n}\n.emp-header .emp-formations-row {\n  border-top: 1px solid #e5e7eb;\n  padding: 14px 0 16px;\n}\n.emp-header .emp-formations-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.emp-header .emp-formations-title {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: #6b7280;\n  text-transform: uppercase;\n}\n.emp-header .emp-completion {\n  font-size: 12px;\n  font-weight: 600;\n  color: #D4AF37;\n}\n.emp-header .emp-formations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.emp-header .emp-formation-item {\n  display: grid;\n  grid-template-columns: 1fr 160px 44px;\n  align-items: center;\n  gap: 12px;\n}\n.emp-header .emp-formation-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.emp-header .emp-formation-bar {\n  height: 6px;\n  border-radius: 99px;\n  background: #e5e7eb;\n  overflow: hidden;\n}\n.emp-header .emp-formation-bar__fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.emp-header .emp-formation-bar__fill.bar--green {\n  background: #069b8f;\n}\n.emp-header .emp-formation-bar__fill.bar--orange {\n  background: #D4AF37;\n}\n.emp-header .emp-formation-bar__fill.bar--gray {\n  background: #94a3b8;\n}\n.emp-header .emp-formation-pct {\n  font-size: 12px;\n  font-weight: 700;\n  text-align: right;\n}\n.emp-header .emp-formation-pct.pct--bar--green {\n  color: #069b8f;\n}\n.emp-header .emp-formation-pct.pct--bar--orange {\n  color: #D4AF37;\n}\n.emp-header .emp-formation-pct.pct--bar--gray {\n  color: #94a3b8;\n}\n.emp-header .emp-badges-row {\n  border-top: 1px solid #e5e7eb;\n  padding: 12px 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.emp-header .emp-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid transparent;\n}\n.emp-header .emp-badge i {\n  font-size: 14px;\n}\n.emp-header .emp-badge strong {\n  font-weight: 700;\n}\n.emp-header .emp-badge.emp-badge--cert {\n  background: #e6f7f5;\n  border-color: #b2e8e3;\n  color: #047a6f;\n}\n.emp-header .emp-badge.emp-badge--cert i {\n  color: #069b8f;\n}\n.emp-header .emp-badge.emp-badge--warn {\n  background: #fdf8e7;\n  border-color: #f0d98e;\n  color: #9a7c10;\n}\n.emp-header .emp-badge.emp-badge--warn i {\n  color: #D4AF37;\n}\n.emp-header .emp-badge.emp-badge--session {\n  background: #e6f7f5;\n  border-color: #b2e8e3;\n  color: #047a6f;\n  margin-left: auto;\n}\n.emp-header .emp-badge.emp-badge--session i {\n  color: #069b8f;\n}\n@media (max-width: 768px) {\n  .emp-header .emp-formation-item {\n    grid-template-columns: 1fr 80px 36px;\n  }\n  .emp-header .emp-card {\n    flex-direction: column;\n  }\n  .emp-header .emp-actions {\n    width: 100%;\n  }\n  .emp-header .emp-badge--session {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=student.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: AuthService }, { type: FormationsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentComponent, { className: "StudentComponent", filePath: "app/features/student/student.component.ts", lineNumber: 25 });
})();
export {
  StudentComponent
};
//# sourceMappingURL=chunk-QWSPHIQQ.js.map
