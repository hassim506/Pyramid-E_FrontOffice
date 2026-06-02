import {
  FormationsService
} from "./chunk-MDRJR4EN.js";
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
var StudentSidebarComponent = class _StudentSidebarComponent {
  common;
  routes = routes;
  isCollapsed = false;
  constructor(common) {
    this.common = common;
  }
  static \u0275fac = function StudentSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentSidebarComponent)(\u0275\u0275directiveInject(CommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentSidebarComponent, selectors: [["app-student-sidebar"]], decls: 122, vars: 19, consts: [[1, "settings-sidebar"], [1, "sidebar-toggle", 3, "click"], [1, "isax", 3, "ngClass"], [1, "main-menu"], [1, "menu-item"], ["routerLinkActive", "active", 3, "routerLink"], [1, "isax", "isax-grid-35"], [1, "menu-item", "has-submenu"], [1, "isax", "isax-play-circle"], [1, "submenu-arrow", "isax", "isax-arrow-right-3"], [1, "submenu"], [1, "isax", "isax-send-2"], [1, "isax", "isax-note-21"], [1, "isax", "isax-clipboard-text"], [1, "isax", "isax-calendar-1"], [1, "isax", "isax-chart"], [1, "isax", "isax-medal"], [1, "isax", "isax-ticket"], [3, "routerLink"], [1, "isax", "isax-logout"]], template: function StudentSidebarComponent_Template(rf, ctx) {
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
      \u0275\u0275text(63, "Mes Sondages");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "li", 4)(65, "a", 5);
      \u0275\u0275element(66, "i", 14);
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "Mon planning");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "li", 7)(70, "a");
      \u0275\u0275element(71, "i", 15);
      \u0275\u0275elementStart(72, "span");
      \u0275\u0275text(73, "Mes comp\xE9tences");
      \u0275\u0275elementEnd();
      \u0275\u0275element(74, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "ul", 10)(76, "li")(77, "a", 5);
      \u0275\u0275text(78, "Comp\xE9tences acquises");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "li")(80, "a", 5);
      \u0275\u0275text(81, "Comp\xE9tences recommand\xE9es");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(82, "li", 7)(83, "a");
      \u0275\u0275element(84, "i", 16);
      \u0275\u0275elementStart(85, "span");
      \u0275\u0275text(86, "Mes palmar\xE8s");
      \u0275\u0275elementEnd();
      \u0275\u0275element(87, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "ul", 10)(89, "li")(90, "a", 5);
      \u0275\u0275text(91, "Mes certificats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "li")(93, "a");
      \u0275\u0275text(94, "Mes habilitations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "li")(96, "a");
      \u0275\u0275text(97, "Gamification / Mes badges");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(98, "li", 7)(99, "a");
      \u0275\u0275element(100, "i", 17);
      \u0275\u0275elementStart(101, "span");
      \u0275\u0275text(102, "Centre d'aide");
      \u0275\u0275elementEnd();
      \u0275\u0275element(103, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "ul", 10)(105, "li")(106, "a");
      \u0275\u0275text(107, "Guide d'utilisation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "li")(109, "a");
      \u0275\u0275text(110, "Tutoriels vid\xE9o");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "li")(112, "a");
      \u0275\u0275text(113, "Soumettre un ticket");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "li")(115, "a");
      \u0275\u0275text(116, "Annonces et mises \xE0 jour");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(117, "li", 4)(118, "a", 18);
      \u0275\u0275element(119, "i", 19);
      \u0275\u0275elementStart(120, "span");
      \u0275\u0275text(121, "D\xE9connexion");
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
      \u0275\u0275property("routerLink", ctx.routes.studentDemande);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.student_DemandeSession);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.student_DemandeParcours);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.student_DemandeCatalogue);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.students_quiz);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentMesSondages);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.student_Planning);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.student_MesCompetences);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.student_CompetencesRecommandees);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.studentCertificat);
      \u0275\u0275advance(28);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterLink, RouterLinkActive], styles: ['@charset "UTF-8";\n\n\n\n.settings-sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 100vh;\n  background: #ffffff;\n  border-right: 1px solid #e5e7eb;\n  padding: 1.5rem 1rem;\n  position: relative;\n  overflow: visible;\n  transition: width 0.3s ease;\n}\n.sidebar-toggle[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 1.25rem;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: #64748b;\n}\n.main-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.submenu-item[_ngcontent-%COMP%], \n.menu-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0.4rem;\n}\n.submenu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.9rem;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #1e293b;\n  text-decoration: none;\n  transition: all 0.25s ease;\n}\n.submenu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child, \n.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  font-size: 1rem;\n  color: #64748b;\n}\n.submenu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, \n.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #eea51c;\n}\n.submenu-item[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%], \n.menu-item[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #11a9b7,\n      #0e8f9b);\n  color: #fff;\n}\n.submenu-item[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.menu-item[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.active.submenu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n.active.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #11a9b7,\n      #0e8f9b);\n  color: #fff;\n}\n.active.submenu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.active.menu-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.submenu-arrow[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.6;\n  margin-left: auto;\n}\n.has-submenu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  min-width: 220px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 0.5rem 0;\n  list-style: none;\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(10px);\n  transition: all 0.25s ease;\n  z-index: 999;\n}\n.has-submenu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 0.6rem 1rem;\n  font-size: 0.85rem;\n  color: #334155;\n  text-decoration: none;\n  transition: 0.2s ease;\n}\n.has-submenu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #eea51c;\n}\n.has-submenu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #11a9b7;\n  font-weight: 700;\n}\n.has-submenu[_ngcontent-%COMP%]:hover    > .submenu[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.settings-sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.settings-sidebar.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.settings-sidebar.collapsed[_ngcontent-%COMP%]   .submenu-arrow[_ngcontent-%COMP%] {\n  display: none;\n}\n.logout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.logout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n/*# sourceMappingURL=student-sidebar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-student-sidebar", imports: [CommonModule, RouterModule], template: `<div class="settings-sidebar" [class.collapsed]="isCollapsed">

  <!-- Toggle Collapse -->
  <div class="sidebar-toggle" (click)="isCollapsed = !isCollapsed">
    <i class="isax" [ngClass]="isCollapsed ? 'isax-arrow-right-2' : 'isax-arrow-left-2'"></i>
  </div>

  <ul class="main-menu">

    <!-- ================= TABLEAU DE BORD ================= -->
    <li class="menu-item">
      <a [routerLink]="routes.students_Dashboard" routerLinkActive="active">
        <i class="isax isax-grid-35"></i>
        <span>Tableau de bord</span>
      </a>
    </li>

    <!-- ================= MES FORMATIONS ================= -->
    <li class="menu-item has-submenu">
      <a>
        <i class="isax isax-play-circle"></i>
        <span>Mes formations</span>
        <i class="submenu-arrow isax isax-arrow-right-3"></i>
      </a>
      <ul class="submenu">
        <li><a [routerLink]="routes.studentMyCourses" routerLinkActive="active">Formations</a></li>
        <li><a [routerLink]="routes.student_CataloguesAssignes" routerLinkActive="active">Catalogues</a></li>
        <li><a [routerLink]="routes.student_ParcoursAssignes" routerLinkActive="active">Parcours</a></li>
        <li><a [routerLink]="routes.student_SessionsAcceptees" routerLinkActive="active">Sessions</a></li>
        <li><a>Feedback formateur</a></li>
      </ul>
    </li>

    <!-- ================= MES DEMANDES ================= -->
    <li class="menu-item has-submenu">
      <a>
        <i class="isax isax-send-2"></i>
        <span>Mes demandes</span>
        <i class="submenu-arrow isax isax-arrow-right-3"></i>
      </a>
      <ul class="submenu">
        <li><a [routerLink]="routes.studentDemande" routerLinkActive="active"><span>Formations</span></a></li>
        <li><a [routerLink]="routes.student_DemandeSession" routerLinkActive="active"><span>Sessions</span></a></li>
        <li><a [routerLink]="routes.student_DemandeParcours" routerLinkActive="active"><span>Parcours</span></a></li>
        <li><a [routerLink]="routes.student_DemandeCatalogue" routerLinkActive="active"><span>Catalogues</span></a></li>
      </ul>
    </li>

    <!-- ================= MES QUIZ ================= -->
    <li class="menu-item">
      <a [routerLink]="routes.students_quiz" routerLinkActive="active">
        <i class="isax isax-note-21"></i>
        <span>Mes Quiz</span>
      </a>
    </li>

    <!-- ================= MES SONDAGES ================= -->
    <li class="menu-item">
      <a [routerLink]="routes.studentMesSondages" routerLinkActive="active">
        <i class="isax isax-clipboard-text"></i>
        <span>Mes Sondages</span>
      </a>
    </li>

    <!-- ================= MON PLANNING ================= -->
    <li class="menu-item">
      <a [routerLink]="routes.student_Planning" routerLinkActive="active">
        <i class="isax isax-calendar-1"></i>
        <span>Mon planning</span>
      </a>
    </li>

    <!-- ================= MES COMP\xC9TENCES ================= -->
    <li class="menu-item has-submenu">
      <a>
        <i class="isax isax-chart"></i>
        <span>Mes comp\xE9tences</span>
        <i class="submenu-arrow isax isax-arrow-right-3"></i>
      </a>
      <ul class="submenu">
        <li><a [routerLink]="routes.student_MesCompetences" routerLinkActive="active">Comp\xE9tences acquises</a></li>
        <li><a [routerLink]="routes.student_CompetencesRecommandees" routerLinkActive="active">Comp\xE9tences recommand\xE9es</a></li>
      </ul>
    </li>

    <!-- ================= MES PALMAR\xC8S ================= -->
    <li class="menu-item has-submenu">
      <a>
        <i class="isax isax-medal"></i>
        <span>Mes palmar\xE8s</span>
        <i class="submenu-arrow isax isax-arrow-right-3"></i>
      </a>
      <ul class="submenu">
        <li><a [routerLink]="routes.studentCertificat" routerLinkActive="active">Mes certificats</a></li>
        <li><a>Mes habilitations</a></li>
        <li><a>Gamification / Mes badges</a></li>
      </ul>
    </li>

    <!-- ================= CENTRE D'AIDE ================= -->
    <li class="menu-item has-submenu">
      <a>
        <i class="isax isax-ticket"></i>
        <span>Centre d'aide</span>
        <i class="submenu-arrow isax isax-arrow-right-3"></i>
      </a>
      <ul class="submenu">
        <li><a>Guide d'utilisation</a></li>
        <li><a>Tutoriels vid\xE9o</a></li>
        <li><a>Soumettre un ticket</a></li>
        <li><a>Annonces et mises \xE0 jour</a></li>
      </ul>
    </li>

    <!-- ================= D\xC9CONNEXION ================= -->
    <li class="menu-item">
      <a [routerLink]="routes.login">
        <i class="isax isax-logout"></i>
        <span>D\xE9connexion</span>
      </a>
    </li>

  </ul>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/student/common/student-sidebar/student-sidebar.component.scss */\n.settings-sidebar {\n  width: 280px;\n  height: 100vh;\n  background: #ffffff;\n  border-right: 1px solid #e5e7eb;\n  padding: 1.5rem 1rem;\n  position: relative;\n  overflow: visible;\n  transition: width 0.3s ease;\n}\n.sidebar-toggle {\n  text-align: right;\n  margin-bottom: 1.25rem;\n  cursor: pointer;\n  font-size: 1.2rem;\n  color: #64748b;\n}\n.main-menu {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.submenu-item,\n.menu-item {\n  position: relative;\n  margin-bottom: 0.4rem;\n}\n.submenu-item > a,\n.menu-item > a {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.9rem;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #1e293b;\n  text-decoration: none;\n  transition: all 0.25s ease;\n}\n.submenu-item > a i:first-child,\n.menu-item > a i:first-child {\n  font-size: 1rem;\n  color: #64748b;\n}\n.submenu-item > a:hover,\n.menu-item > a:hover {\n  background: #f3f4f6;\n  color: #eea51c;\n}\n.submenu-item > a.active,\n.menu-item > a.active {\n  background:\n    linear-gradient(\n      90deg,\n      #11a9b7,\n      #0e8f9b);\n  color: #fff;\n}\n.submenu-item > a.active i,\n.menu-item > a.active i {\n  color: #fff;\n}\n.active.submenu-item > a,\n.active.menu-item > a {\n  background:\n    linear-gradient(\n      90deg,\n      #11a9b7,\n      #0e8f9b);\n  color: #fff;\n}\n.active.submenu-item > a i,\n.active.menu-item > a i {\n  color: #fff;\n}\n.submenu-arrow {\n  font-size: 0.8rem;\n  opacity: 0.6;\n  margin-left: auto;\n}\n.has-submenu .submenu {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  min-width: 220px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 0.5rem 0;\n  list-style: none;\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(10px);\n  transition: all 0.25s ease;\n  z-index: 999;\n}\n.has-submenu .submenu li a {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 0.6rem 1rem;\n  font-size: 0.85rem;\n  color: #334155;\n  text-decoration: none;\n  transition: 0.2s ease;\n}\n.has-submenu .submenu li a:hover {\n  background: #f8fafc;\n  color: #eea51c;\n}\n.has-submenu .submenu li a.active {\n  color: #11a9b7;\n  font-weight: 700;\n}\n.has-submenu:hover > .submenu {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.settings-sidebar.collapsed {\n  width: 80px;\n}\n.settings-sidebar.collapsed span,\n.settings-sidebar.collapsed .submenu-arrow {\n  display: none;\n}\n.logout a {\n  color: #ef4444;\n}\n.logout a:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n/*# sourceMappingURL=student-sidebar.component.css.map */\n'] }]
  }], () => [{ type: CommonService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentSidebarComponent, { className: "StudentSidebarComponent", filePath: "src/app/features/student/common/student-sidebar/student-sidebar.component.ts", lineNumber: 13 });
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
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementStart(2, "a", 69);
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
    \u0275\u0275elementStart(0, "div", 76)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 78);
    \u0275\u0275element(4, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 80);
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
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "span", 72);
    \u0275\u0275text(3, "MES FORMATIONS EN COURS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 74);
    \u0275\u0275template(7, StudentComponent_div_31_div_7_Template, 7, 8, "div", 75);
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
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "i", 82);
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
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "i", 84);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentComponent, selectors: [["app-student"]], decls: 146, vars: 25, consts: [[1, "content"], [1, "container"], [1, "emp-header"], [1, "emp-top-label"], [1, "emp-card"], ["aria-hidden", "true", 1, "emp-card-deco"], [1, "emp-identity"], [1, "emp-av"], [1, "emp-id-info"], [1, "emp-name"], [1, "emp-role-line"], [4, "ngIf"], ["class", "emp-company", 4, "ngIf"], [1, "emp-greeting"], [1, "emp-greeting-count"], [1, "emp-actions"], [1, "emp-btn", "emp-btn-outline", 3, "routerLink"], [1, "isax", "isax-search-normal-1"], [1, "emp-btn", "emp-btn-primary", 3, "routerLink"], [1, "isax", "isax-add"], ["class", "emp-formations-row", 4, "ngIf"], [1, "emp-badges-row"], [1, "emp-badge", "emp-badge--cert"], [1, "isax", "isax-medal"], ["class", "emp-badge emp-badge--warn", 4, "ngIf"], ["class", "emp-badge emp-badge--session", 4, "ngIf"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.png", "alt", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", "title", "App Store", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", "App Store"], ["href", "javascript:void(0);", "title", "Google Play"], ["src", "assets/img/icon/googleplay.svg", "alt", "Google Play"], [1, "col-lg-8"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], ["href", "javascript:void(0);"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Entrer votre Adresse Mail", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [1, "emp-company"], [1, "isax", "isax-building-3"], [1, "emp-company-link", 3, "routerLink"], [1, "emp-formations-row"], [1, "emp-formations-header"], [1, "emp-formations-title"], [1, "emp-completion"], [1, "emp-formations-list"], ["class", "emp-formation-item", 4, "ngFor", "ngForOf"], [1, "emp-formation-item"], [1, "emp-formation-name"], [1, "emp-formation-bar"], [1, "emp-formation-bar__fill"], [1, "emp-formation-pct"], [1, "emp-badge", "emp-badge--warn"], [1, "isax", "isax-clock"], [1, "emp-badge", "emp-badge--session"], [1, "isax", "isax-calendar-1"]], template: function StudentComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(45, "footer", 29)(46, "div", 30);
      \u0275\u0275element(47, "img", 31)(48, "img", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 33)(50, "div", 1)(51, "div", 34)(52, "div", 35)(53, "div", 36)(54, "div", 37);
      \u0275\u0275element(55, "img", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p");
      \u0275\u0275text(57, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 39)(59, "a", 40);
      \u0275\u0275element(60, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "a", 42);
      \u0275\u0275element(62, "img", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "div", 44)(64, "div", 34)(65, "div", 27)(66, "div", 45)(67, "h5", 46);
      \u0275\u0275text(68, "Espace Formateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "ul")(70, "li")(71, "a", 47);
      \u0275\u0275text(72, "Mentorat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "li")(74, "a", 47);
      \u0275\u0275text(75, "Connexion");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "li")(77, "a", 47);
      \u0275\u0275text(78, "Inscription");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "li")(80, "a", 47);
      \u0275\u0275text(81, "Booking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "li")(83, "a", 47);
      \u0275\u0275text(84, "Tableau de Bord Employ\xE9");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(85, "div", 27)(86, "div", 45)(87, "h5", 46);
      \u0275\u0275text(88, "Espace Employ\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "ul")(90, "li")(91, "a", 48);
      \u0275\u0275text(92, "Appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "li")(94, "a", 47);
      \u0275\u0275text(95, "Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "li")(97, "a", 47);
      \u0275\u0275text(98, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "li")(100, "a", 47);
      \u0275\u0275text(101, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "li")(103, "a", 47);
      \u0275\u0275text(104, "Tableau de Bord Formateur");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(105, "div", 49)(106, "div", 50)(107, "h5", 46);
      \u0275\u0275text(108, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 51)(110, "form", 52);
      \u0275\u0275element(111, "input", 53);
      \u0275\u0275elementStart(112, "button", 54);
      \u0275\u0275element(113, "i", 55);
      \u0275\u0275text(114, "S'abonner ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "div", 56)(116, "div", 57);
      \u0275\u0275element(117, "img", 58);
      \u0275\u0275elementStart(118, "p");
      \u0275\u0275text(119, "3556 Beech Street, San Francisco,");
      \u0275\u0275element(120, "br");
      \u0275\u0275text(121, "California, CA 94108");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 57);
      \u0275\u0275element(123, "img", 59);
      \u0275\u0275elementStart(124, "p");
      \u0275\u0275text(125, "dreamslms@pyramid.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "div", 57);
      \u0275\u0275element(127, "img", 60);
      \u0275\u0275elementStart(128, "p");
      \u0275\u0275text(129, "+19 123-456-7890");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(130, "div", 61)(131, "div", 1)(132, "div", 62)(133, "div", 63)(134, "div", 64)(135, "p", 65);
      \u0275\u0275text(136, "Copyright \xA9 2025 DreamsLMS. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 63)(138, "div")(139, "ul", 66)(140, "li")(141, "a", 47);
      \u0275\u0275text(142, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "li")(144, "a", 47);
      \u0275\u0275text(145, "Privacy Policy");
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
      \u0275\u0275advance(31);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterOutlet, RouterModule, RouterLink, StudentSidebarComponent], styles: ["/* src/app/features/student/student.component.scss */\napp-student .content {\n  padding: 1.5rem 0 !important;\n}\n.emp-header {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 20px 24px 0;\n  margin-bottom: 24px;\n  overflow: hidden;\n  position: relative;\n}\n.emp-header .emp-top-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #6b7280;\n  text-transform: uppercase;\n  margin-bottom: 14px;\n}\n.emp-header .emp-card {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 18px;\n  position: relative;\n}\n.emp-header .emp-card-deco {\n  position: absolute;\n  top: -20px;\n  right: -20px;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(6, 155, 143, 0.08) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.emp-header .emp-identity {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.emp-header .emp-av {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      #047a6f);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  flex-shrink: 0;\n  letter-spacing: 0.5px;\n}\n.emp-header .emp-id-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.emp-header .emp-name {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.emp-header .emp-role-line {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.emp-header .emp-company {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.emp-header .emp-company i {\n  font-size: 13px;\n  color: #069b8f;\n}\n.emp-header .emp-company-link {\n  color: #069b8f !important;\n  font-weight: 600;\n  text-decoration: none !important;\n}\n.emp-header .emp-company-link:hover {\n  text-decoration: underline !important;\n}\n.emp-header .emp-greeting {\n  font-size: 13px;\n  color: #374151;\n  font-weight: 500;\n  margin: 4px 0 0;\n}\n.emp-header .emp-greeting strong {\n  color: #1a1a2e;\n}\n.emp-header .emp-greeting-count {\n  color: #069b8f;\n  font-weight: 600;\n}\n.emp-header .emp-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.emp-header a.emp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 9px 20px;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: all 0.15s;\n  cursor: pointer;\n  line-height: 1.4;\n  border: 1px solid;\n}\n.emp-header a.emp-btn i {\n  font-size: 15px;\n}\n.emp-header a.emp-btn.emp-btn-outline {\n  background-color: transparent;\n  color: #1a1a2e;\n  border-color: #d1d5db;\n}\n.emp-header a.emp-btn.emp-btn-outline:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background-color: transparent;\n}\n.emp-header a.emp-btn.emp-btn-primary {\n  background-color: #069b8f;\n  color: #ffffff;\n  border-color: #069b8f;\n}\n.emp-header a.emp-btn.emp-btn-primary:hover {\n  background-color: #047a6f;\n  border-color: #047a6f;\n  color: #ffffff;\n}\n.emp-header .emp-formations-row {\n  border-top: 1px solid #e5e7eb;\n  padding: 14px 0 16px;\n}\n.emp-header .emp-formations-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.emp-header .emp-formations-title {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: #6b7280;\n  text-transform: uppercase;\n}\n.emp-header .emp-completion {\n  font-size: 12px;\n  font-weight: 600;\n  color: #D4AF37;\n}\n.emp-header .emp-formations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.emp-header .emp-formation-item {\n  display: grid;\n  grid-template-columns: 1fr 160px 44px;\n  align-items: center;\n  gap: 12px;\n}\n.emp-header .emp-formation-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.emp-header .emp-formation-bar {\n  height: 6px;\n  border-radius: 99px;\n  background: #e5e7eb;\n  overflow: hidden;\n}\n.emp-header .emp-formation-bar__fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.emp-header .emp-formation-bar__fill.bar--green {\n  background: #069b8f;\n}\n.emp-header .emp-formation-bar__fill.bar--orange {\n  background: #D4AF37;\n}\n.emp-header .emp-formation-bar__fill.bar--gray {\n  background: #94a3b8;\n}\n.emp-header .emp-formation-pct {\n  font-size: 12px;\n  font-weight: 700;\n  text-align: right;\n}\n.emp-header .emp-formation-pct.pct--bar--green {\n  color: #069b8f;\n}\n.emp-header .emp-formation-pct.pct--bar--orange {\n  color: #D4AF37;\n}\n.emp-header .emp-formation-pct.pct--bar--gray {\n  color: #94a3b8;\n}\n.emp-header .emp-badges-row {\n  border-top: 1px solid #e5e7eb;\n  padding: 12px 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.emp-header .emp-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid transparent;\n}\n.emp-header .emp-badge i {\n  font-size: 14px;\n}\n.emp-header .emp-badge strong {\n  font-weight: 700;\n}\n.emp-header .emp-badge.emp-badge--cert {\n  background: #e6f7f5;\n  border-color: #b2e8e3;\n  color: #047a6f;\n}\n.emp-header .emp-badge.emp-badge--cert i {\n  color: #069b8f;\n}\n.emp-header .emp-badge.emp-badge--warn {\n  background: #fdf8e7;\n  border-color: #f0d98e;\n  color: #9a7c10;\n}\n.emp-header .emp-badge.emp-badge--warn i {\n  color: #D4AF37;\n}\n.emp-header .emp-badge.emp-badge--session {\n  background: #e6f7f5;\n  border-color: #b2e8e3;\n  color: #047a6f;\n  margin-left: auto;\n}\n.emp-header .emp-badge.emp-badge--session i {\n  color: #069b8f;\n}\n@media (max-width: 768px) {\n  .emp-header .emp-formation-item {\n    grid-template-columns: 1fr 80px 36px;\n  }\n  .emp-header .emp-card {\n    flex-direction: column;\n  }\n  .emp-header .emp-actions {\n    width: 100%;\n  }\n  .emp-header .emp-badge--session {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=student.component.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentComponent, [{
    type: Component,
    args: [{ selector: "app-student", encapsulation: ViewEncapsulation.None, imports: [CommonModule, RouterOutlet, RouterModule, StudentSidebarComponent], template: `<div class="content">
  <div class="container">

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         BANDE EN-T\xCATE EMPLOY\xC9
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="emp-header">

      <!-- Label section -->
      <div class="emp-top-label">EMPLOY\xC9 \u2014 ESPACE APPRENANT</div>

      <!-- Carte identit\xE9 + boutons -->
      <div class="emp-card">

        <!-- D\xE9coration fond -->
        <div class="emp-card-deco" aria-hidden="true"></div>

        <!-- Gauche : avatar + infos + greeting -->
        <div class="emp-identity">
          <div class="emp-av">{{ userInitials }}</div>
          <div class="emp-id-info">
            <h5 class="emp-name">{{ userName }}</h5>
            <p class="emp-role-line">
              {{ userRole }}<span *ngIf="userFonction"> \xB7 {{ userFonction }}</span>
            </p>
            <p class="emp-company" *ngIf="userEntreprise">
              <i class="isax isax-building-3"></i>
              <a [routerLink]="routes.studentProfile" class="emp-company-link">{{ userEntreprise }}</a>
            </p>
            <p class="emp-greeting">
              Bon retour, <strong>{{ prenom }}</strong> \u{1F44B}
              <span class="emp-greeting-count">\u2014 {{ formationsEnCours.length }} formation{{ formationsEnCours.length !== 1 ? 's' : '' }} en cours</span>
            </p>
          </div>
        </div>

        <!-- Droite : boutons -->
        <div class="emp-actions">
          <a [routerLink]="routes.studentMyCourses" class="emp-btn emp-btn-outline">
            <i class="isax isax-search-normal-1"></i>Explorer
          </a>
          <a [routerLink]="routes.studentDemande" class="emp-btn emp-btn-primary">
            <i class="isax isax-add"></i>Demander une formation
          </a>
        </div>
      </div>

      <!-- Formations en cours -->
      <div class="emp-formations-row" *ngIf="formationsEnCours.length > 0">
        <div class="emp-formations-header">
          <span class="emp-formations-title">MES FORMATIONS EN COURS</span>
          <span class="emp-completion">{{ completionGlobale }}% de compl\xE9tion globale</span>
        </div>
        <div class="emp-formations-list">
          <div class="emp-formation-item" *ngFor="let f of formationsEnCours">
            <span class="emp-formation-name">{{ f.titre }}</span>
            <div class="emp-formation-bar">
              <div class="emp-formation-bar__fill"
                   [class]="getProgressionClass(f.progression)"
                   [style.width.%]="f.progression"></div>
            </div>
            <span class="emp-formation-pct" [class]="'pct--' + getProgressionClass(f.progression)">{{ f.progression }}%</span>
          </div>
        </div>
      </div>

      <!-- Badges bottom -->
      <div class="emp-badges-row">
        <div class="emp-badge emp-badge--cert">
          <i class="isax isax-medal"></i>
          <span>Certificats obtenus</span>
          <strong>{{ nbCertificats }}</strong>
        </div>
        <div class="emp-badge emp-badge--warn" *ngIf="nbExpireBientot > 0">
          <i class="isax isax-clock"></i>
          <span>Expire bient\xF4t</span>
          <strong>{{ nbExpireBientot }}</strong>
        </div>
        <div class="emp-badge emp-badge--session" *ngIf="prochainSession">
          <i class="isax isax-calendar-1"></i>
          <span>Prochaine session \xB7 {{ prochainSession }}</span>
        </div>
      </div>

    </div>
    <!-- /emp-header -->

    <!-- Layout sidebar + contenu -->
    <div class="row">
      <app-student-sidebar class="col-lg-3"></app-student-sidebar>
      <div class="col-lg-9">
        <router-outlet></router-outlet>
      </div>
    </div>

  </div>
</div>

<!-- Footer -->
<footer class="footer">
  <div class="footer-bg">
    <img src="assets/img/bg/footer-bg-01.png" class="footer-bg-1" alt="">
    <img src="assets/img/bg/footer-bg-02.png" class="footer-bg-2" alt="">
  </div>
  <div class="footer-top">
    <div class="container">
      <div class="row row-gap-4">
        <div class="col-lg-4">
          <div class="footer-about">
            <div class="footer-logo">
              <img src="assets/img/logo.png" alt="">
            </div>
            <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>
            <div class="d-flex align-items-center">
              <a href="javascript:void(0);" class="me-2" title="App Store"><img src="assets/img/icon/appstore.svg" alt="App Store"></a>
              <a href="javascript:void(0);" title="Google Play"><img src="assets/img/icon/googleplay.svg" alt="Google Play"></a>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row row-gap-4">
            <div class="col-lg-3">
              <div class="footer-widget footer-menu">
                <h5 class="footer-title">Espace Formateur</h5>
                <ul>
                  <li><a [routerLink]="routes.courseGrid">Mentorat</a></li>
                  <li><a [routerLink]="routes.login">Connexion</a></li>
                  <li><a [routerLink]="routes.register">Inscription</a></li>
                  <li><a [routerLink]="routes.courseList">Booking</a></li>
                  <li><a [routerLink]="routes.students_Dashboard">Tableau de Bord Employ\xE9</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="footer-widget footer-menu">
                <h5 class="footer-title">Espace Employ\xE9</h5>
                <ul>
                  <li><a href="javascript:void(0);">Appointments</a></li>
                  <li><a [routerLink]="routes.instructorMessage">Chat</a></li>
                  <li><a [routerLink]="routes.login">Login</a></li>
                  <li><a [routerLink]="routes.register">Register</a></li>
                  <li><a [routerLink]="routes.instructor_dashboard">Tableau de Bord Formateur</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="footer-widget footer-contact">
                <h5 class="footer-title">Newsletter</h5>
                <div class="subscribe-input">
                  <form action="javascript:void(0);">
                    <input type="email" class="form-control" placeholder="Entrer votre Adresse Mail">
                    <button type="submit" class="btn btn-primary btn-sm inline-flex align-items-center">
                      <i class="isax isax-send-2 me-1"></i>S'abonner
                    </button>
                  </form>
                </div>
                <div class="footer-contact-info">
                  <div class="footer-address d-flex align-items-center">
                    <img src="assets/img/icon/icon-20.svg" alt="Img" class="img-fluid me-2">
                    <p>3556 Beech Street, San Francisco,<br>California, CA 94108</p>
                  </div>
                  <div class="footer-address d-flex align-items-center">
                    <img src="assets/img/icon/icon-19.svg" alt="Img" class="img-fluid me-2">
                    <p>dreamslms&#64;pyramid.com</p>
                  </div>
                  <div class="footer-address d-flex align-items-center">
                    <img src="assets/img/icon/icon-21.svg" alt="Img" class="img-fluid me-2">
                    <p>+19 123-456-7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="row row-gap-2">
        <div class="col-md-6">
          <div class="text-center text-md-start">
            <p class="text-white">Copyright &copy; 2025 DreamsLMS. All rights reserved.</p>
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <ul class="d-flex align-items-center justify-content-center justify-content-md-end footer-link">
              <li><a [routerLink]="routes.page_term_condition">Terms & Conditions</a></li>
              <li><a [routerLink]="routes.page_privacy_policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
<!-- /Footer -->
`, styles: ["/* src/app/features/student/student.component.scss */\napp-student .content {\n  padding: 1.5rem 0 !important;\n}\n.emp-header {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 20px 24px 0;\n  margin-bottom: 24px;\n  overflow: hidden;\n  position: relative;\n}\n.emp-header .emp-top-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #6b7280;\n  text-transform: uppercase;\n  margin-bottom: 14px;\n}\n.emp-header .emp-card {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 18px;\n  position: relative;\n}\n.emp-header .emp-card-deco {\n  position: absolute;\n  top: -20px;\n  right: -20px;\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(6, 155, 143, 0.08) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.emp-header .emp-identity {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.emp-header .emp-av {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      #047a6f);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  flex-shrink: 0;\n  letter-spacing: 0.5px;\n}\n.emp-header .emp-id-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.emp-header .emp-name {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n}\n.emp-header .emp-role-line {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n}\n.emp-header .emp-company {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.emp-header .emp-company i {\n  font-size: 13px;\n  color: #069b8f;\n}\n.emp-header .emp-company-link {\n  color: #069b8f !important;\n  font-weight: 600;\n  text-decoration: none !important;\n}\n.emp-header .emp-company-link:hover {\n  text-decoration: underline !important;\n}\n.emp-header .emp-greeting {\n  font-size: 13px;\n  color: #374151;\n  font-weight: 500;\n  margin: 4px 0 0;\n}\n.emp-header .emp-greeting strong {\n  color: #1a1a2e;\n}\n.emp-header .emp-greeting-count {\n  color: #069b8f;\n  font-weight: 600;\n}\n.emp-header .emp-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.emp-header a.emp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 9px 20px;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: all 0.15s;\n  cursor: pointer;\n  line-height: 1.4;\n  border: 1px solid;\n}\n.emp-header a.emp-btn i {\n  font-size: 15px;\n}\n.emp-header a.emp-btn.emp-btn-outline {\n  background-color: transparent;\n  color: #1a1a2e;\n  border-color: #d1d5db;\n}\n.emp-header a.emp-btn.emp-btn-outline:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background-color: transparent;\n}\n.emp-header a.emp-btn.emp-btn-primary {\n  background-color: #069b8f;\n  color: #ffffff;\n  border-color: #069b8f;\n}\n.emp-header a.emp-btn.emp-btn-primary:hover {\n  background-color: #047a6f;\n  border-color: #047a6f;\n  color: #ffffff;\n}\n.emp-header .emp-formations-row {\n  border-top: 1px solid #e5e7eb;\n  padding: 14px 0 16px;\n}\n.emp-header .emp-formations-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.emp-header .emp-formations-title {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: #6b7280;\n  text-transform: uppercase;\n}\n.emp-header .emp-completion {\n  font-size: 12px;\n  font-weight: 600;\n  color: #D4AF37;\n}\n.emp-header .emp-formations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.emp-header .emp-formation-item {\n  display: grid;\n  grid-template-columns: 1fr 160px 44px;\n  align-items: center;\n  gap: 12px;\n}\n.emp-header .emp-formation-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.emp-header .emp-formation-bar {\n  height: 6px;\n  border-radius: 99px;\n  background: #e5e7eb;\n  overflow: hidden;\n}\n.emp-header .emp-formation-bar__fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.emp-header .emp-formation-bar__fill.bar--green {\n  background: #069b8f;\n}\n.emp-header .emp-formation-bar__fill.bar--orange {\n  background: #D4AF37;\n}\n.emp-header .emp-formation-bar__fill.bar--gray {\n  background: #94a3b8;\n}\n.emp-header .emp-formation-pct {\n  font-size: 12px;\n  font-weight: 700;\n  text-align: right;\n}\n.emp-header .emp-formation-pct.pct--bar--green {\n  color: #069b8f;\n}\n.emp-header .emp-formation-pct.pct--bar--orange {\n  color: #D4AF37;\n}\n.emp-header .emp-formation-pct.pct--bar--gray {\n  color: #94a3b8;\n}\n.emp-header .emp-badges-row {\n  border-top: 1px solid #e5e7eb;\n  padding: 12px 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.emp-header .emp-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid transparent;\n}\n.emp-header .emp-badge i {\n  font-size: 14px;\n}\n.emp-header .emp-badge strong {\n  font-weight: 700;\n}\n.emp-header .emp-badge.emp-badge--cert {\n  background: #e6f7f5;\n  border-color: #b2e8e3;\n  color: #047a6f;\n}\n.emp-header .emp-badge.emp-badge--cert i {\n  color: #069b8f;\n}\n.emp-header .emp-badge.emp-badge--warn {\n  background: #fdf8e7;\n  border-color: #f0d98e;\n  color: #9a7c10;\n}\n.emp-header .emp-badge.emp-badge--warn i {\n  color: #D4AF37;\n}\n.emp-header .emp-badge.emp-badge--session {\n  background: #e6f7f5;\n  border-color: #b2e8e3;\n  color: #047a6f;\n  margin-left: auto;\n}\n.emp-header .emp-badge.emp-badge--session i {\n  color: #069b8f;\n}\n@media (max-width: 768px) {\n  .emp-header .emp-formation-item {\n    grid-template-columns: 1fr 80px 36px;\n  }\n  .emp-header .emp-card {\n    flex-direction: column;\n  }\n  .emp-header .emp-actions {\n    width: 100%;\n  }\n  .emp-header .emp-badge--session {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=student.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: AuthService }, { type: FormationsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentComponent, { className: "StudentComponent", filePath: "src/app/features/student/student.component.ts", lineNumber: 25 });
})();
export {
  StudentComponent
};
//# sourceMappingURL=chunk-GV524JO2.js.map
