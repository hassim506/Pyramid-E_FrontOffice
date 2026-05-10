import {
  CommonService
} from "./chunk-UYSR4AJV.js";
import {
  routes
} from "./chunk-ZAFZNJD2.js";
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
  NgClass,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/common/student-sidebar/student-sidebar.component.ts
var StudentSidebarComponent = class _StudentSidebarComponent {
  common;
  routes = routes;
  base = "";
  page = "";
  last = "";
  isCollapsed = false;
  constructor(common) {
    this.common = common;
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
  static \u0275fac = function StudentSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentSidebarComponent)(\u0275\u0275directiveInject(CommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentSidebarComponent, selectors: [["app-student-sidebar"]], decls: 117, vars: 17, consts: [[1, "settings-sidebar"], [1, "sidebar-toggle", 3, "click"], [1, "isax", 3, "ngClass"], [1, "main-menu"], [1, "menu-item"], ["routerLinkActive", "active", 3, "routerLink"], [1, "isax", "isax-grid-35"], [1, "menu-item", "has-submenu"], [1, "isax", "isax-play-circle"], [1, "submenu-arrow", "isax", "isax-arrow-right-3"], [1, "submenu"], [1, "isax", "isax-send-2"], [1, "isax", "isax-note-21"], [1, "isax", "isax-calendar-1"], [1, "isax", "isax-chart"], [1, "isax", "isax-medal"], [1, "isax", "isax-ticket"], [3, "routerLink"], [1, "isax", "isax-logout"]], template: function StudentSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function StudentSidebarComponent_Template_div_click_1_listener() {
        return ctx.isCollapsed = !ctx.isCollapsed;
      });
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "ul", 3)(4, "li", 4)(5, "a", 5);
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "Tableau de bord");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "li", 7)(10, "a");
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Mes formations");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "ul", 10)(16, "li")(17, "a", 5);
      \u0275\u0275text(18, "Formations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "a", 5);
      \u0275\u0275text(21, "Catalogues");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 5);
      \u0275\u0275text(24, "Parcours");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li")(26, "a", 5);
      \u0275\u0275text(27, "Sessions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li")(29, "a");
      \u0275\u0275text(30, "Feedback formateur");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "li", 7)(32, "a");
      \u0275\u0275element(33, "i", 11);
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "Mes demandes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "ul", 10)(38, "li")(39, "a", 5)(40, "span");
      \u0275\u0275text(41, "Formations");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "li")(43, "a", 5)(44, "span");
      \u0275\u0275text(45, "Sessions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "li")(47, "a", 5)(48, "span");
      \u0275\u0275text(49, "Parcours");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "li")(51, "a", 5)(52, "span");
      \u0275\u0275text(53, "Catalogues");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(54, "li", 4)(55, "a", 5);
      \u0275\u0275element(56, "i", 12);
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Mes Quiz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li", 4)(60, "a", 5);
      \u0275\u0275element(61, "i", 13);
      \u0275\u0275elementStart(62, "span");
      \u0275\u0275text(63, "Mon planning");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "li", 7)(65, "a");
      \u0275\u0275element(66, "i", 14);
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "Mes comp\xE9tences");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "ul", 10)(71, "li")(72, "a", 5);
      \u0275\u0275text(73, "Comp\xE9tences acquises");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 5);
      \u0275\u0275text(76, " Comp\xE9tences recommand\xE9es ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(77, "li", 7)(78, "a");
      \u0275\u0275element(79, "i", 15);
      \u0275\u0275elementStart(80, "span");
      \u0275\u0275text(81, "Mes palmar\xE8s");
      \u0275\u0275elementEnd();
      \u0275\u0275element(82, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "ul", 10)(84, "li")(85, "a");
      \u0275\u0275text(86, "Mes certificats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "li")(88, "a");
      \u0275\u0275text(89, "Mes habilitations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "li")(91, "a");
      \u0275\u0275text(92, "Gamification / Mes badges");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(93, "li", 7)(94, "a");
      \u0275\u0275element(95, "i", 16);
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275text(97, "Centre d'aide");
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "ul", 10)(100, "li")(101, "a");
      \u0275\u0275text(102, "Guide d'utilisation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "li")(104, "a");
      \u0275\u0275text(105, "Tutoriels vid\xE9o");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "li")(107, "a");
      \u0275\u0275text(108, "Soumettre un ticket");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "li")(110, "a");
      \u0275\u0275text(111, "Annonces et mises \xE0 jour");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(112, "li", 4)(113, "a", 17);
      \u0275\u0275element(114, "i", 18);
      \u0275\u0275elementStart(115, "span");
      \u0275\u0275text(116, "D\xE9connexion");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("collapsed", ctx.isCollapsed);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.isCollapsed ? "isax-arrow-right-2" : "isax-arrow-left-2");
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.students_Dashboard);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.studentMyCourses);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.student_CataloguesAssignes);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.student_ParcoursAssignes);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.student_SessionsAcceptees);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.student_DemandeFormation);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.student_DemandeSession);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.student_DemandeParcours);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.student_DemandeCatalogue);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.students_quiz);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.student_Planning);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.student_MesCompetences);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.student_CompetencesRecommandees);
      \u0275\u0275advance(38);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterLink, RouterLinkActive], styles: ['@charset "UTF-8";\n\n\n\n.settings-sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 100vh;\n  background: #ffffff;\n  border-right: 1px solid #e5e7eb;\n  padding: 1.5rem 1rem;\n  position: relative;\n  overflow: visible;\n  transition: width 0.3s ease;\n}\n.sidebar-toggle[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 1.5rem;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: #64748b;\n}\n.main-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.submenu-item[_ngcontent-%COMP%], \n.menu-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0.4rem;\n}\n.submenu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.9rem;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #1e293b;\n  text-decoration: none;\n  transition: all 0.25s ease;\n}\n.submenu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child, \n.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  font-size: 1rem;\n  color: #64748b;\n}\n.submenu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, \n.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #eea51c;\n}\n.submenu-item[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%], \n.menu-item[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #11a9b7,\n      #0e8f9b);\n  color: #fff;\n}\n.submenu-item[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.menu-item[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.active.submenu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n.active.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #11a9b7,\n      #0e8f9b);\n  color: #fff;\n}\n.active.submenu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.active.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.submenu-arrow[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.6;\n  margin-left: auto;\n}\n.has-Submenu[_ngcontent-%COMP%]   .Submenu[_ngcontent-%COMP%], \n.has-submenu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  min-width: 220px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 0.5rem 0;\n  list-style: none;\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(10px);\n  transition: all 0.25s ease;\n  z-index: 999;\n}\n.has-Submenu[_ngcontent-%COMP%]   .Submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.has-submenu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 0.6rem 1rem;\n  font-size: 0.85rem;\n  color: #334155;\n  text-decoration: none;\n  transition: 0.2s ease;\n}\n.has-Submenu[_ngcontent-%COMP%]   .Submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.has-submenu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #eea51c;\n}\n.has-Submenu[_ngcontent-%COMP%]   .Submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .demande-label[_ngcontent-%COMP%], \n.has-submenu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .demande-label[_ngcontent-%COMP%] {\n  color: #eea51c;\n}\n.has-Submenu[_ngcontent-%COMP%]   .Submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   .demande-label[_ngcontent-%COMP%], \n.has-submenu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   .demande-label[_ngcontent-%COMP%] {\n  color: #11a9b7;\n  font-weight: 700;\n}\n.has-submenu[_ngcontent-%COMP%]:hover    > .submenu[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.has-Submenu[_ngcontent-%COMP%]:hover    > .Submenu[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.demande-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.demande-dot--blue[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);\n}\n.demande-dot--purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.demande-dot--green[_ngcontent-%COMP%] {\n  background: #16a34a;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.15);\n}\n.demande-dot--orange[_ngcontent-%COMP%] {\n  background: #ea580c;\n  box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.15);\n}\n.demande-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.demande-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1.3;\n  transition: color 0.15s ease;\n}\n.demande-desc[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: #9ca3af;\n  line-height: 1.3;\n}\n.settings-sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.settings-sidebar.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.settings-sidebar.collapsed[_ngcontent-%COMP%]   .submenu-arrow[_ngcontent-%COMP%], \n.settings-sidebar.collapsed[_ngcontent-%COMP%]   .demande-desc[_ngcontent-%COMP%] {\n  display: none;\n}\n.logout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.logout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n/*# sourceMappingURL=student-sidebar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-student-sidebar", imports: [CommonModule, RouterModule], template: `<div class="settings-sidebar" [class.collapsed]="isCollapsed">\r
\r
  <!-- Toggle Collapse -->\r
  <div class="sidebar-toggle" (click)="isCollapsed = !isCollapsed">\r
    <i class="isax" [ngClass]="isCollapsed ? 'isax-arrow-right-2' : 'isax-arrow-left-2'"></i>\r
  </div>\r
\r
  <ul class="main-menu">\r
\r
    <!-- ================= TABLEAU DE BORD ================= -->\r
    <li class="menu-item">\r
      <a [routerLink]="routes.students_Dashboard" routerLinkActive="active">\r
        <i class="isax isax-grid-35"></i>\r
        <span>Tableau de bord</span>\r
      </a>\r
    </li>\r
\r
    <!-- ================= MES FORMATIONS ================= -->\r
    <li class="menu-item has-submenu">\r
      <a>\r
        <i class="isax isax-play-circle"></i>\r
        <span>Mes formations</span>\r
        <i class="submenu-arrow isax isax-arrow-right-3"></i>\r
      </a>\r
        <ul class="submenu">\r
          <li><a [routerLink]="routes.studentMyCourses" routerLinkActive="active">Formations</a></li>\r
          <li><a [routerLink]="routes.student_CataloguesAssignes" routerLinkActive="active">Catalogues</a></li>\r
          <li><a [routerLink]="routes.student_ParcoursAssignes" routerLinkActive="active">Parcours</a></li>\r
          <li><a [routerLink]="routes.student_SessionsAcceptees" routerLinkActive="active">Sessions</a></li>\r
          <li><a>Feedback formateur</a></li>\r
        </ul>\r
    </li>\r
\r
    <!-- ================= MES DEMANDES ================= -->\r
    <li class="menu-item has-submenu">\r
      <a>\r
        <i class="isax isax-send-2"></i>\r
        <span>Mes demandes</span>\r
        <i class="submenu-arrow isax isax-arrow-right-3"></i>\r
      </a>\r
      <ul class="submenu">\r
        <li>\r
          <a [routerLink]="routes.student_DemandeFormation" routerLinkActive="active">\r
            <span>Formations</span>\r
          </a>\r
        </li>\r
        <li>\r
          <a [routerLink]="routes.student_DemandeSession" routerLinkActive="active">\r
            <span>Sessions</span>\r
          </a>\r
        </li>\r
        <li>\r
          <a [routerLink]="routes.student_DemandeParcours" routerLinkActive="active">\r
            <span>Parcours</span>\r
          </a>\r
        </li>\r
        <li>\r
          <a [routerLink]="routes.student_DemandeCatalogue" routerLinkActive="active">\r
            <span>Catalogues</span>\r
          </a>\r
        </li>\r
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
    <!-- ================= MON PLANNING ================= -->\r
    <li class="menu-item">\r
      <a [routerLink]="routes.student_Planning" routerLinkActive="active">\r
        <i class="isax isax-calendar-1"></i>\r
        <span>Mon planning</span>\r
      </a>\r
    </li>\r
\r
    <!-- ================= MES COMP\xC9TENCES ================= -->\r
    <li class="menu-item has-submenu">\r
      <a>\r
        <i class="isax isax-chart"></i>\r
        <span>Mes comp\xE9tences</span>\r
        <i class="submenu-arrow isax isax-arrow-right-3"></i>\r
      </a>\r
      <ul class="submenu">\r
       <li><a [routerLink]="routes.student_MesCompetences" routerLinkActive="active">Comp\xE9tences acquises</a></li>\r
       <li><a [routerLink]="routes.student_CompetencesRecommandees" routerLinkActive="active">\r
          Comp\xE9tences recommand\xE9es\r
        </a></li>\r
      </ul>\r
    </li>\r
\r
    <!-- ================= MES PALMAR\xC8S ================= -->\r
    <li class="menu-item has-submenu">\r
      <a>\r
        <i class="isax isax-medal"></i>\r
        <span>Mes palmar\xE8s</span>\r
        <i class="submenu-arrow isax isax-arrow-right-3"></i>\r
      </a>\r
      <ul class="submenu">\r
        <li><a>Mes certificats</a></li>\r
        <li><a>Mes habilitations</a></li>\r
        <li><a>Gamification / Mes badges</a></li>\r
      </ul>\r
    </li>\r
\r
    <!-- ================= CENTRE D'AIDE ================= -->\r
    <li class="menu-item has-submenu">\r
      <a>\r
        <i class="isax isax-ticket"></i>\r
        <span>Centre d'aide</span>\r
        <i class="submenu-arrow isax isax-arrow-right-3"></i>\r
      </a>\r
      <ul class="submenu">\r
        <li><a>Guide d'utilisation</a></li>\r
        <li><a>Tutoriels vid\xE9o</a></li>\r
        <li><a>Soumettre un ticket</a></li>\r
        <li><a>Annonces et mises \xE0 jour</a></li>\r
      </ul>\r
    </li>\r
\r
    <!-- ================= D\xC9CONNEXION ================= -->\r
    <li class="menu-item">\r
      <a [routerLink]="routes.login">\r
        <i class="isax isax-logout"></i>\r
        <span>D\xE9connexion</span>\r
      </a>\r
    </li>\r
\r
  </ul>\r
\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/features/student/common/student-sidebar/student-sidebar.component.scss */\n.settings-sidebar {\n  width: 280px;\n  height: 100vh;\n  background: #ffffff;\n  border-right: 1px solid #e5e7eb;\n  padding: 1.5rem 1rem;\n  position: relative;\n  overflow: visible;\n  transition: width 0.3s ease;\n}\n.sidebar-toggle {\n  text-align: right;\n  margin-bottom: 1.5rem;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: #64748b;\n}\n.main-menu {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.submenu-item,\n.menu-item {\n  position: relative;\n  margin-bottom: 0.4rem;\n}\n.submenu-item > a,\n.menu-item > a {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.9rem;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #1e293b;\n  text-decoration: none;\n  transition: all 0.25s ease;\n}\n.submenu-item > a i:first-child,\n.menu-item > a i:first-child {\n  font-size: 1rem;\n  color: #64748b;\n}\n.submenu-item > a:hover,\n.menu-item > a:hover {\n  background: #f3f4f6;\n  color: #eea51c;\n}\n.submenu-item > a.active,\n.menu-item > a.active {\n  background:\n    linear-gradient(\n      90deg,\n      #11a9b7,\n      #0e8f9b);\n  color: #fff;\n}\n.submenu-item > a.active i,\n.menu-item > a.active i {\n  color: #fff;\n}\n.active.submenu-item > a,\n.active.menu-item > a {\n  background:\n    linear-gradient(\n      90deg,\n      #11a9b7,\n      #0e8f9b);\n  color: #fff;\n}\n.active.submenu-item > a i,\n.active.menu-item > a i {\n  color: #fff;\n}\n.submenu-arrow {\n  font-size: 0.8rem;\n  opacity: 0.6;\n  margin-left: auto;\n}\n.has-Submenu .Submenu,\n.has-submenu .submenu {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  min-width: 220px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 0.5rem 0;\n  list-style: none;\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(10px);\n  transition: all 0.25s ease;\n  z-index: 999;\n}\n.has-Submenu .Submenu li a,\n.has-submenu .submenu li a {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 0.6rem 1rem;\n  font-size: 0.85rem;\n  color: #334155;\n  text-decoration: none;\n  transition: 0.2s ease;\n}\n.has-Submenu .Submenu li a:hover,\n.has-submenu .submenu li a:hover {\n  background: #f8fafc;\n  color: #eea51c;\n}\n.has-Submenu .Submenu li a:hover .demande-label,\n.has-submenu .submenu li a:hover .demande-label {\n  color: #eea51c;\n}\n.has-Submenu .Submenu li a.active .demande-label,\n.has-submenu .submenu li a.active .demande-label {\n  color: #11a9b7;\n  font-weight: 700;\n}\n.has-submenu:hover > .submenu {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.has-Submenu:hover > .Submenu {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.demande-dot {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.demande-dot--blue {\n  background: #4f46e5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);\n}\n.demande-dot--purple {\n  background: #7c3aed;\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.demande-dot--green {\n  background: #16a34a;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.15);\n}\n.demande-dot--orange {\n  background: #ea580c;\n  box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.15);\n}\n.demande-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.demande-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1.3;\n  transition: color 0.15s ease;\n}\n.demande-desc {\n  font-size: 10.5px;\n  color: #9ca3af;\n  line-height: 1.3;\n}\n.settings-sidebar.collapsed {\n  width: 80px;\n}\n.settings-sidebar.collapsed span,\n.settings-sidebar.collapsed .submenu-arrow,\n.settings-sidebar.collapsed .demande-desc {\n  display: none;\n}\n.logout a {\n  color: #ef4444;\n}\n.logout a:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n/*# sourceMappingURL=student-sidebar.component.css.map */\n'] }]
  }], () => [{ type: CommonService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentSidebarComponent, { className: "StudentSidebarComponent", filePath: "src/app/features/student/common/student-sidebar/student-sidebar.component.ts", lineNumber: 14 });
})();

// src/app/features/student/student.component.ts
function StudentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 16)(3, "div", 54)(4, "div", 55)(5, "h2", 56);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "nav", 57)(9, "ol", 58)(10, "li", 59)(11, "a", 36);
    \u0275\u0275text(12, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li", 60);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "titlecase");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, ctx_r0.last));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r0.routes.home3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 5, ctx_r0.last));
  }
}
var StudentComponent = class _StudentComponent {
  router;
  routes = routes;
  last = "";
  // ── Map segment URL → label breadcrumb ──────────────────
  breadcrumbLabels = {
    // Dashboard & profil
    "student-dashboard": "Tableau de bord",
    "student-profile": "Mon profil",
    // Formations
    "mes-formations": "Mes formations",
    "mes-cours": "Mes formations",
    "student-courses": "Mes formations",
    // Catalogues
    "mes-catalogues": "Catalogues",
    "catalogue-detail": "D\xE9tail catalogue",
    // Parcours
    "mes-parcours": "Mes parcours",
    "mes-parcours-assignes": "Mes parcours",
    "parcours-assignes": "Mes parcours",
    "students-parcours": "Mes parcours",
    // Sessions
    "students-session": "Mes sessions",
    "sessions-acceptees": "Mes sessions",
    // Demandes
    "students-catalogue": "Demandes catalogues",
    // Certificats & quiz
    "student-certificate": "Mes certifications",
    "student-quiz": "Mes quiz",
    "student-quiz-questions": "Questions quiz",
    // Paramètres
    "student-settings": "Param\xE8tres",
    "student-change-password": "Mot de passe",
    "student-notifications": "Notifications",
    "student-billing-address": "Facturation",
    "student-social-profile": "Profil social",
    "student-linked-accounts": "Comptes li\xE9s",
    // Autres
    "student-message": "Messages",
    "student-tickets": "Tickets",
    "student-reviews": "Avis",
    "student-wishlist": "Favoris",
    "student-referral": "Parrainage",
    "student-order-history": "Historique"
  };
  studentProfile = null;
  constructor(router) {
    this.router = router;
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
          const fallback = nonNumeric[nonNumeric.length - 1] ?? "";
          label = fallback.replace(/-/g, " ");
        }
        this.last = label;
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
        if (!currentUser.role && currentUser.role_id === 2) {
          currentUser.role = "Student";
        }
        this.studentProfile = currentUser;
      }
    } catch (error) {
      console.error("Erreur lors du chargement du profil:", error);
    }
  }
  getFullName() {
    if (!this.studentProfile)
      return "Utilisateur";
    return `${this.studentProfile.prenom} ${this.studentProfile.nom}`;
  }
  getRoleName(user) {
    if (!user.role)
      return "Non d\xE9fini";
    if (typeof user.role === "object" && user.role !== null && "name" in user.role) {
      return user.role.name;
    }
    if (typeof user.role === "string")
      return user.role;
    return "Non d\xE9fini";
  }
  getInitials() {
    if (!this.studentProfile)
      return "U";
    const firstNameInitial = this.studentProfile.prenom?.charAt(0) || "";
    const lastNameInitial = this.studentProfile.nom?.charAt(0) || "";
    return (firstNameInitial + lastNameInitial).toUpperCase();
  }
  getUserAvatar() {
    if (this.studentProfile && this.studentProfile.avatar) {
      return this.studentProfile.avatar;
    }
    return "assets/img/user/user-01.jpg";
  }
  static \u0275fac = function StudentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentComponent, selectors: [["app-student"]], decls: 126, vars: 15, consts: [[1, "breadcrumb-bar", "text-center"], [1, "content"], [1, "container"], [1, "profile-card", "overflow-hidden", "bg-blue-gradient2", "mb-5", "p-5"], [1, "profile-card-bg"], ["src", "assets/img/bg/card-bg-01.png", "alt", "", 1, "profile-card-bg-1"], [1, "row", "align-items-center", "row-gap-3", "adminrh-profile"], [1, "col-md-6"], [1, "d-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "avatar-xxl", "avatar-rounded", "me-3", "border", "border-white", "border-3", "position-relative"], [1, "avatar-placeholder"], [1, "verify-tick"], [1, "isax", "isax-verify5"], [1, "mb-1", "text-white", "d-inline-flex", "align-items-center"], [1, "link-light", "fs-16", "ms-2", 3, "routerLink"], [1, "isax", "isax-edit-2"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.png", "alt", ""], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-8"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Entrer votre Adresse Mail", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [1, "col-md-12", "col-12"], [1, "breadcrumb-list"], [1, "breadcrumb-title"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb", "justify-content-center", "mb-0"], [1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"]], template: function StudentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, StudentComponent_Conditional_0_Template, 16, 7, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "span", 9)(10, "div", 10);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 11);
      \u0275\u0275element(13, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div")(15, "h5", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementStart(17, "a", 14);
      \u0275\u0275element(18, "i", 15);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(19, "div", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 16)(21, "div", 17);
      \u0275\u0275element(22, "app-student-sidebar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 18);
      \u0275\u0275element(24, "router-outlet");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "footer", 19)(26, "div", 20);
      \u0275\u0275element(27, "img", 21)(28, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 23)(30, "div", 2)(31, "div", 24)(32, "div", 25)(33, "div", 26)(34, "div", 27);
      \u0275\u0275element(35, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p");
      \u0275\u0275text(37, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 8)(39, "a", 29);
      \u0275\u0275element(40, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 31);
      \u0275\u0275element(42, "img", 32);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 33)(44, "div", 24)(45, "div", 17)(46, "div", 34)(47, "h5", 35);
      \u0275\u0275text(48, "Espace Formateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "ul")(50, "li")(51, "a", 36);
      \u0275\u0275text(52, "Mentorat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 36);
      \u0275\u0275text(55, "Connexion");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "a", 36);
      \u0275\u0275text(58, "Inscription");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 36);
      \u0275\u0275text(61, "Booking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 36);
      \u0275\u0275text(64, "Tableau de Bord Employ\xE9");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "div", 17)(66, "div", 34)(67, "h5", 35);
      \u0275\u0275text(68, "Espace Employ\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "ul")(70, "li")(71, "a", 31);
      \u0275\u0275text(72, "Appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "li")(74, "a", 36);
      \u0275\u0275text(75, "Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "li")(77, "a", 36);
      \u0275\u0275text(78, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "li")(80, "a", 36);
      \u0275\u0275text(81, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "li")(83, "a", 36);
      \u0275\u0275text(84, "Tableau de Bord Formateur");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(85, "div", 37)(86, "div", 38)(87, "h5", 35);
      \u0275\u0275text(88, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 39)(90, "form", 40);
      \u0275\u0275element(91, "input", 41);
      \u0275\u0275elementStart(92, "button", 42);
      \u0275\u0275element(93, "i", 43);
      \u0275\u0275text(94, "S'abonner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "div", 44)(96, "div", 45);
      \u0275\u0275element(97, "img", 46);
      \u0275\u0275elementStart(98, "p");
      \u0275\u0275text(99, " 3556 Beech Street, San Francisco,");
      \u0275\u0275element(100, "br");
      \u0275\u0275text(101, " California, CA 94108 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 45);
      \u0275\u0275element(103, "img", 47);
      \u0275\u0275elementStart(104, "p");
      \u0275\u0275text(105, "dreamslms@pyramid.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 45);
      \u0275\u0275element(107, "img", 48);
      \u0275\u0275elementStart(108, "p");
      \u0275\u0275text(109, "+19 123-456-7890");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(110, "div", 49)(111, "div", 2)(112, "div", 50)(113, "div", 7)(114, "div", 51)(115, "p", 52);
      \u0275\u0275text(116, "Copyright \xA9 2025 DreamsLMS. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "div", 7)(118, "div")(119, "ul", 53)(120, "li")(121, "a", 36);
      \u0275\u0275text(122, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "li")(124, "a", 36);
      \u0275\u0275text(125, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.last !== "view" ? 0 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", ctx.getInitials(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.getFullName(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.adminrhProfile);
      \u0275\u0275advance(34);
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
  }, dependencies: [CommonModule, RouterOutlet, RouterModule, RouterLink, StudentSidebarComponent, TitleCasePipe], styles: ['\n\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  font-weight: bold;\n}\n.adminrh-profile[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .adminrh-profile-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0.1;\n  pointer-events: none;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .adminrh-profile-bg[_ngcontent-%COMP%]   .adminrh-profile-bg-1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.adminrh-profile[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \n.adminrh-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .verify-tick[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.adminrh-profile[_ngcontent-%COMP%]   .verify-tick[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #006f78;\n  font-size: 14px;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #006f78;\n  border: none;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.adminrh-profile[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #ffffff;\n  border: 2px solid #ffffff;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.adminrh-profile[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  color: #006f78;\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #ffffff;\n  border: 2px solid #ffffff;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  color: #006f78;\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 768px) {\n  .adminrh-profile[_ngcontent-%COMP%] {\n    border-radius: 15px;\n    padding: 20px;\n  }\n  .adminrh-profile[_ngcontent-%COMP%]   .avatar-xxl[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n}\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #e07b5f;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(224, 123, 95, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.avatar-placeholder[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  animation: _ngcontent-%COMP%_pattern-drift 20s linear infinite;\n  pointer-events: none;\n}\n.avatar-placeholder[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -100%;\n  width: 60%;\n  height: 200%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(224, 123, 95, 0.4),\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transform: skewX(-20deg);\n  animation: _ngcontent-%COMP%_shimmer-gold 4s ease-in-out infinite;\n}\n.avatar-placeholder[_ngcontent-%COMP%]   .inner-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 4px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-top-color: rgba(224, 123, 95, 0.5);\n  border-right-color: rgba(196, 92, 62, 0.4);\n  animation: _ngcontent-%COMP%_rotate-ring 8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer-gold {\n  0%, 100% {\n    left: -100%;\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    left: 150%;\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_pattern-drift {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 40px 40px;\n  }\n}\n@keyframes _ngcontent-%COMP%_rotate-ring {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=student.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentComponent, [{
    type: Component,
    args: [{ selector: "app-student", imports: [CommonModule, RouterOutlet, RouterModule, StudentSidebarComponent], template: `<!-- Breadcrumb -->\r
@if (last !== 'view') {\r
  <div class="breadcrumb-bar text-center">\r
    <div class="container">\r
      <div class="row">\r
        <div class="col-md-12 col-12">\r
          <div class="breadcrumb-list">\r
            <h2 class="breadcrumb-title">{{ last | titlecase }}</h2>\r
            <nav aria-label="breadcrumb" class="page-breadcrumb">\r
              <ol class="breadcrumb justify-content-center mb-0">\r
                <li class="breadcrumb-item"><a [routerLink] = "routes.home3">Home</a></li>\r
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
  <!-- profile box -->\r
  <div class="profile-card overflow-hidden bg-blue-gradient2 mb-5 p-5">\r
      <div class="profile-card-bg">\r
          <img src="assets/img/bg/card-bg-01.png" class="profile-card-bg-1" alt="">\r
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
                 \r
              </div>\r
          </div>\r
          \r
  </div>\r
  <!-- profile box -->\r
      <div class="row">\r
          <!-- sidebar -->\r
          <div class="col-lg-3 ">\r
              <app-student-sidebar/>\r
          </div>\r
          <!-- sidebar -->\r
          <div class="col-lg-9">\r
              <router-outlet></router-outlet>\r
          </div>\r
      </div>\r
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
									<img src="assets/img/logo.png" alt="">\r
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
												<button type="submit" class="btn btn-primary btn-sm inline-flex align-items-center"><i class="isax isax-send-2 me-1"></i>S'abonner</button>\r
											</form>\r
										</div>\r
										<div class="footer-contact-info">\r
											<div class="footer-address d-flex align-items-center">\r
												<img src="assets/img/icon/icon-20.svg" alt="Img" class="img-fluid me-2">\r
												<p> 3556  Beech Street, San Francisco,<br> California, CA 94108 </p>\r
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
		<!-- /Footer -->`, styles: ['/* src/app/features/student/student.component.scss */\n.avatar-placeholder {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  font-weight: bold;\n}\n.adminrh-profile::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.adminrh-profile .adminrh-profile-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0.1;\n  pointer-events: none;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.adminrh-profile .adminrh-profile-bg .adminrh-profile-bg-1 {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.adminrh-profile .row {\n  position: relative;\n  z-index: 1;\n}\n.adminrh-profile h5,\n.adminrh-profile p {\n  margin-bottom: 0;\n}\n.adminrh-profile .verify-tick {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.adminrh-profile .verify-tick i {\n  color: #006f78;\n  font-size: 14px;\n}\n.adminrh-profile .btn-white {\n  background: #ffffff;\n  color: #006f78;\n  border: none;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.adminrh-profile .btn-white:hover {\n  background: #f0f0f0;\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.adminrh-profile .btn-secondary {\n  background: #D4AF37;\n  color: #ffffff;\n  border: 2px solid #ffffff;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.adminrh-profile .btn-secondary:hover {\n  background: #ffffff;\n  color: #006f78;\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n.btn-secondary {\n  background: #D4AF37;\n  color: #ffffff;\n  border: 2px solid #ffffff;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-secondary:hover {\n  background: #ffffff;\n  color: #006f78;\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 768px) {\n  .adminrh-profile {\n    border-radius: 15px;\n    padding: 20px;\n  }\n  .adminrh-profile .avatar-xxl {\n    width: 80px;\n    height: 80px;\n  }\n}\n.avatar-placeholder {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #e07b5f;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(224, 123, 95, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.avatar-placeholder::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  animation: pattern-drift 20s linear infinite;\n  pointer-events: none;\n}\n.avatar-placeholder::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -100%;\n  width: 60%;\n  height: 200%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(224, 123, 95, 0.4),\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transform: skewX(-20deg);\n  animation: shimmer-gold 4s ease-in-out infinite;\n}\n.avatar-placeholder .inner-ring {\n  position: absolute;\n  inset: 4px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-top-color: rgba(224, 123, 95, 0.5);\n  border-right-color: rgba(196, 92, 62, 0.4);\n  animation: rotate-ring 8s linear infinite;\n}\n@keyframes shimmer-gold {\n  0%, 100% {\n    left: -100%;\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    left: 150%;\n    opacity: 0;\n  }\n}\n@keyframes pattern-drift {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 40px 40px;\n  }\n}\n@keyframes rotate-ring {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=student.component.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentComponent, { className: "StudentComponent", filePath: "src/app/features/student/student.component.ts", lineNumber: 14 });
})();
export {
  StudentComponent
};
//# sourceMappingURL=chunk-LOE4CP2Y.js.map
