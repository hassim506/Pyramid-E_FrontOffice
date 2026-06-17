import {
  CommonService
} from "./chunk-34ZCH5GK.js";
import {
  AuthService
} from "./chunk-IEFOQSOV.js";
import {
  DataService
} from "./chunk-L2JYRU5M.js";
import {
  routes
} from "./chunk-YJLHMFCU.js";
import {
  Router,
  RouterLink
} from "./chunk-I4S43CN7.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle
} from "./chunk-MNWNTO2T.js";
import {
  BehaviorSubject,
  Component,
  ElementRef,
  HostListener,
  Injectable,
  Input,
  Renderer2,
  RendererFactory2,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction7,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-7XGB4BEQ.js";

// src/app/shared/service/sidebar/sidebar.service.ts
var SidebarService = class _SidebarService {
  common;
  renderer;
  base = "";
  page = "";
  last = "";
  toogleSidebar = new BehaviorSubject(localStorage.getItem("sidebarPosition") === "true" ? "true" : "false");
  themeColors = new BehaviorSubject(localStorage.getItem("themeColor") || "light-mode");
  constructor(rendererFactory, common) {
    this.common = common;
    this.renderer = rendererFactory.createRenderer(null, null);
    this.common.base.subscribe((res) => {
      this.base = res;
    });
    this.common.page.subscribe((res) => {
      this.page = res;
    });
    this.common.last.subscribe((res) => {
      this.last = res;
    });
  }
  openSidebar() {
    if (localStorage.getItem("sidebarPosition")) {
      localStorage.removeItem("sidebarPosition");
      this.toogleSidebar.next("false");
    } else {
      localStorage.setItem("sidebarPosition", "true");
      this.toogleSidebar.next("true");
    }
  }
  closeSidebar() {
    this.toogleSidebar.next("false");
    localStorage.removeItem("sidebarPosition");
  }
  changeThemeColor(themeColors) {
    this.themeColors.next(themeColors);
    localStorage.setItem("themeColor", themeColors);
    this.renderer.setAttribute(document.documentElement, "class", themeColors === "light-mode" ? "light-mode" : "dark-mode");
  }
  static \u0275fac = function SidebarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarService)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(CommonService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SidebarService, factory: _SidebarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: RendererFactory2 }, { type: CommonService }], null);
})();

// src/app/features/layouts/header/header.component.ts
var _c0 = ["stickyMenu"];
var _c1 = (a0) => ({ "home-six": a0 });
var _c2 = (a0, a1, a2, a3, a4, a5, a6) => ({ "header-one": a0, "header-two": a1, "header-three": a2, "position-fixed": a3, "header-four": a4, "header-two header-five position-fixed": a5, "fixed": a6 });
var _c3 = (a0) => ({ "active": a0 });
var _c4 = (a0) => ({ "activate": a0 });
var _c5 = (a0) => ({ "custom-last": a0 });
var _c6 = (a0) => ({ "opened": a0 });
var _c7 = (a0) => ({ "submenu": a0 });
var _c8 = (a0) => ({ display: a0 });
function HeaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 3)(2, "div", 52)(3, "div", 53)(4, "div", 54)(5, "p", 55);
    \u0275\u0275element(6, "i", 56);
    \u0275\u0275text(7, "1442 Crosswind Drive Madisonville");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 57);
    \u0275\u0275element(9, "i", 58);
    \u0275\u0275text(10, "+1 45887 77874");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 53)(12, "div", 59)(13, "div", 60)(14, "a", 61);
    \u0275\u0275element(15, "img", 28);
    \u0275\u0275text(16, "ENG ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ul", 29)(18, "li")(19, "a", 30);
    \u0275\u0275element(20, "img", 28);
    \u0275\u0275text(21, "ENG ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li")(23, "a", 30);
    \u0275\u0275element(24, "img", 31);
    \u0275\u0275text(25, "ARA ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li")(27, "a", 30);
    \u0275\u0275element(28, "img", 32);
    \u0275\u0275text(29, "FRE ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 62)(31, "a", 34);
    \u0275\u0275text(32, " USD ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ul", 29)(34, "li")(35, "a", 35);
    \u0275\u0275text(36, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "li")(38, "a", 35);
    \u0275\u0275text(39, "YEN");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "li")(41, "a", 35);
    \u0275\u0275text(42, "EURO");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "ul", 63)(44, "li", 64)(45, "a", 65);
    \u0275\u0275element(46, "i", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "li", 64)(48, "a", 65);
    \u0275\u0275element(49, "i", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "li", 64)(51, "a", 65);
    \u0275\u0275element(52, "i", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "li", 64)(54, "a", 65);
    \u0275\u0275element(55, "i", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "li")(57, "a", 65);
    \u0275\u0275element(58, "i", 70);
    \u0275\u0275elementEnd()()()()()()()();
  }
}
function HeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "span");
    \u0275\u0275text(2, "hjklm");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span")(4, "span");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 72);
    \u0275\u0275element(1, "img", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.routes.home);
  }
}
function HeaderComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 72);
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.routes.home);
  }
}
function HeaderComponent_ng_container_21_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "div", 83)(3, "a", 84);
    \u0275\u0275element(4, "img", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 86)(6, "a", 84);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const menu_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.base === menu_r3.base);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", menu_r3.route);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/home/", menu_r3.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", menu_r3.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menu_r3.menuValue);
  }
}
function HeaderComponent_ng_container_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 76);
    \u0275\u0275listener("mouseenter", function HeaderComponent_ng_container_21_Conditional_1_Template_li_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isHovered = true);
    })("mouseleave", function HeaderComponent_ng_container_21_Conditional_1_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isHovered = false);
    });
    \u0275\u0275elementStart(1, "a", 77);
    \u0275\u0275listener("click", function HeaderComponent_ng_container_21_Conditional_1_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSubMenu());
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 79)(5, "li")(6, "div", 80)(7, "div", 52);
    \u0275\u0275repeaterCreate(8, HeaderComponent_ng_container_21_Conditional_1_For_9_Template, 8, 7, "div", 81, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const mainMenus_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.base === mainMenus_r4.base || ctx_r0.base === mainMenus_r4.base2 || ctx_r0.base === mainMenus_r4.base3 || ctx_r0.base === mainMenus_r4.base4 || ctx_r0.base === mainMenus_r4.base5 || ctx_r0.base === mainMenus_r4.base6);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c7, ctx_r0.isDropdownOpen));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", mainMenus_r4.tittle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c8, ctx_r0.isDropdownOpen ? "block" : ""));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(mainMenus_r4.menu);
  }
}
function HeaderComponent_ng_container_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 87)(1, "a", 88);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 78);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mainMenus_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.base === mainMenus_r4.base);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", mainMenus_r4.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", mainMenus_r4.tittle, " ");
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.page === menu_r7.page);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", menu_r7.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menu_r7.menuValue);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("active", ctx_r0.page === subMenu_r9.page);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", subMenu_r9.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu_r9.menuValue);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu2_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(7);
    \u0275\u0275classProp("active", ctx_r0.page === subMenu2_r10.page);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", subMenu2_r10.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu2_r10.menuValue);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 87)(1, "a", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 91);
    \u0275\u0275repeaterCreate(4, HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_For_5_Template, 3, 4, "li", 90, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("active", ctx_r0.page === subMenu_r9.page || ctx_r0.page === subMenu_r9.page1 || ctx_r0.page === subMenu_r9.page2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subMenu_r9.menuValue);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(subMenu_r9.subMenus);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Conditional_0_Template, 3, 4, "li", 90);
    \u0275\u0275conditionalCreate(1, HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_Template, 6, 3, "li", 75);
  }
  if (rf & 2) {
    const subMenu_r9 = ctx.$implicit;
    \u0275\u0275conditional(subMenu_r9.hasSubRoute === false ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(subMenu_r9.hasSubRoute === true ? 1 : -1);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 87)(1, "a", 77);
    \u0275\u0275listener("click", function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const i_r6 = \u0275\u0275nextContext(3).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openSubMenu1(i_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 89);
    \u0275\u0275repeaterCreate(4, HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r7 = \u0275\u0275nextContext().$implicit;
    const i_r6 = \u0275\u0275nextContext(2).index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.page === menu_r7.base || ctx_r0.page === menu_r7.base1 || ctx_r0.page === menu_r7.base2 || ctx_r0.page === menu_r7.base3 || ctx_r0.page === menu_r7.base4 || ctx_r0.page === menu_r7.base5 || ctx_r0.page === menu_r7.base6 || ctx_r0.page === menu_r7.base7);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c7, ctx_r0.isDropdownOpen1 === i_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menu_r7.menuValue);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c8, ctx_r0.isDropdownOpen1 === i_r6 ? "block" : ""));
    \u0275\u0275advance();
    \u0275\u0275repeater(menu_r7.subMenus);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_0_Template, 3, 4, "li", 90);
    \u0275\u0275conditionalCreate(1, HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_Template, 6, 9, "li", 75);
  }
  if (rf & 2) {
    const menu_r7 = ctx.$implicit;
    \u0275\u0275conditional(menu_r7.hasSubRoute === false ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menu_r7.hasSubRoute === true ? 1 : -1);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 87)(1, "a", 77);
    \u0275\u0275listener("click", function HeaderComponent_ng_container_21_Conditional_3_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const i_r6 = \u0275\u0275nextContext().index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleSubMenu(i_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 89);
    \u0275\u0275repeaterCreate(5, HeaderComponent_ng_container_21_Conditional_3_For_6_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    const mainMenus_r4 = ctx_r10.$implicit;
    const i_r6 = ctx_r10.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.base === mainMenus_r4.base || ctx_r0.base === mainMenus_r4.base2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c7, ctx_r0.openDropdownIndex === i_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", mainMenus_r4.tittle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c8, ctx_r0.openDropdownIndex === i_r6 ? "block" : ""));
    \u0275\u0275advance();
    \u0275\u0275repeater(mainMenus_r4.menu);
  }
}
function HeaderComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, HeaderComponent_ng_container_21_Conditional_1_Template, 10, 9, "li", 74);
    \u0275\u0275conditionalCreate(2, HeaderComponent_ng_container_21_Conditional_2_Template, 4, 4, "li", 75);
    \u0275\u0275conditionalCreate(3, HeaderComponent_ng_container_21_Conditional_3_Template, 7, 9, "li", 75);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const mainMenus_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(mainMenus_r4.separateRoute === false && mainMenus_r4.tittle === "Home" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(mainMenus_r4.separateRoute === true ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(mainMenus_r4.separateRoute === false && mainMenus_r4.tittle !== "Home" ? 3 : -1);
  }
}
function HeaderComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "a", 93);
    \u0275\u0275element(2, "img", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 29)(4, "li")(5, "a", 30);
    \u0275\u0275element(6, "img", 28);
    \u0275\u0275text(7, "ENG ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li")(9, "a", 30);
    \u0275\u0275element(10, "img", 31);
    \u0275\u0275text(11, "ARA ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li")(13, "a", 30);
    \u0275\u0275element(14, "img", 32);
    \u0275\u0275text(15, "FRE ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 95)(17, "a", 96);
    \u0275\u0275element(18, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul", 29)(20, "li")(21, "a", 35);
    \u0275\u0275text(22, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li")(24, "a", 35);
    \u0275\u0275text(25, "YEN");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li")(27, "a", 35);
    \u0275\u0275text(28, "EURO");
    \u0275\u0275elementEnd()()()();
  }
}
function HeaderComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 98);
    \u0275\u0275text(1, " Se Connecter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 99);
    \u0275\u0275text(3, " Ajouter Employ\xE9 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.register);
  }
}
function HeaderComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 100);
    \u0275\u0275element(1, "i", 101);
    \u0275\u0275text(2, "Se Connecter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 99);
    \u0275\u0275element(4, "i", 40);
    \u0275\u0275text(5, "Ajouter Employ\xE9 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.register);
  }
}
function HeaderComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "a", 44);
    \u0275\u0275listener("click", function HeaderComponent_div_93_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sidebarService.changeThemeColor("dark-mode"));
    });
    \u0275\u0275element(3, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 46);
    \u0275\u0275listener("click", function HeaderComponent_div_93_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sidebarService.changeThemeColor("light-mode"));
    });
    \u0275\u0275element(5, "i", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 102)(7, "a", 61);
    \u0275\u0275element(8, "img", 28);
    \u0275\u0275text(9, "ENG ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul", 29)(11, "li")(12, "a", 30);
    \u0275\u0275element(13, "img", 28);
    \u0275\u0275text(14, "ENG ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li")(16, "a", 30);
    \u0275\u0275element(17, "img", 31);
    \u0275\u0275text(18, "ARA ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li")(20, "a", 30);
    \u0275\u0275element(21, "img", 32);
    \u0275\u0275text(22, "FRE ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 103)(24, "a", 34);
    \u0275\u0275text(25, " USD ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul", 29)(27, "li")(28, "a", 35);
    \u0275\u0275text(29, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "li")(31, "a", 35);
    \u0275\u0275text(32, "YEN");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "a", 35);
    \u0275\u0275text(35, "EURO");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "a", 98);
    \u0275\u0275text(37, " Se Connecter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "a", 99);
    \u0275\u0275text(39, " Ajouter Employ\xE9 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c4, ctx_r0.themeColor === "light-mode"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c4, ctx_r0.themeColor === "dark-mode"));
    \u0275\u0275advance(32);
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.register);
  }
}
var HeaderComponent = class _HeaderComponent {
  common;
  data;
  sidebarService;
  renderer;
  el;
  routes = routes;
  menuElement;
  headerpage = false;
  sticky = false;
  elementPosition;
  headerClass = true;
  isHovered = false;
  isFixed = false;
  isOpened = false;
  isDropdownOpen = false;
  isDropdownOpen1 = null;
  base = "";
  page = "";
  last = "";
  headerMenuactive = "";
  openDropdownIndex = null;
  themeColor = "light-mode";
  islight = true;
  isdark = false;
  showDark = false;
  white_bg = false;
  sidebar;
  constructor(common, data, sidebarService, renderer, el) {
    this.common = common;
    this.data = data;
    this.sidebarService = sidebarService;
    this.renderer = renderer;
    this.el = el;
    this.common.base.subscribe((res) => {
      this.base = res;
      this.renderer.removeClass(document.documentElement, "menu-opened");
      this.isOpened = false;
    });
    this.common.page.subscribe((res) => {
      this.page = res;
      this.renderer.removeClass(document.documentElement, "menu-opened");
      this.isOpened = false;
    });
    this.common.last.subscribe((res) => {
      this.last = res;
    });
    this.sidebar = this.data.sideBar;
    this.sidebarService.themeColors.subscribe((res) => {
      this.themeColor = res;
    });
  }
  onWindowScroll() {
    this.isFixed = window.pageYOffset > 40;
  }
  toggleSidebar() {
    this.sidebarService.openSidebar();
    this.isOpened = !this.isOpened;
    if (this.isOpened === true) {
      this.renderer.addClass(document.documentElement, "menu-opened");
    } else {
      this.renderer.removeClass(document.documentElement, "menu-opened");
    }
  }
  hideSidebar() {
    this.sidebarService.closeSidebar();
    this.isOpened = false;
    this.renderer.removeClass(document.documentElement, "menu-opened");
  }
  themeMode = "light_mode";
  isDarkMode = false;
  // toggleMode(isDark: boolean) {
  //   this.isDarkMode = isDark;
  //   this.applyTheme();
  // }
  openSubMenu() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.openDropdownIndex = null;
  }
  openSubMenu1(index) {
    this.isDropdownOpen1 = this.isDropdownOpen1 === index ? null : index;
  }
  toggleSubMenu(index) {
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
    this.isDropdownOpen = false;
  }
  switchTheme() {
    this.isdark = !this.isdark;
    this.islight = !this.islight;
  }
  ngOnInit() {
    const themeColor = localStorage.getItem("themeColor") || "light-mode";
    this.sidebarService.changeThemeColor(themeColor);
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuElement = _t.first);
    }
  }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function HeaderComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 95, vars: 46, consts: [["class", "header-topbar text-center", 4, "ngIf"], [3, "ngClass"], [1, "", 3, "ngClass"], [1, "container"], [1, "header-nav"], [1, "navbar-header"], ["id", "mobile_btn", "href", "javascript:void(0);", 3, "click"], [1, "bar-icon"], [1, "navbar-logo"], ["class", "logo-white header-logo", 3, "routerLink", 4, "ngIf"], [1, "logo-dark", "header-logo", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", "Logo", 1, "logo", 2, "max-height", "106px"], [1, "main-menu-wrapper", 3, "ngClass"], [1, "menu-header"], [1, "menu-logo", 3, "routerLink"], ["src", "assets/img/logo.png", "alt", "Logo", 1, "img-fluid", 2, "max-height", "106px"], ["id", "menu_close", "href", "javascript:void(0);", 1, "menu-close", 3, "click"], [1, "fas", "fa-times"], [1, "main-nav", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "menu-dropdown"], [1, "cart-item"], [1, "icon-btn"], [1, "position-relative", 3, "routerLink"], [1, "isax", "isax-shopping-cart5"], [1, "count-icon", "bg-success", "p-1", "rounded-pill", "text-white", "fs-10", "fw-bold"], [1, "dropdown", "flag-dropdown", "mb-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "d-flex", "align-items-center"], ["src", "assets/img/flags/us-flag.svg", "alt", "flag", 1, "me-2"], [1, "dropdown-menu", "p-2", "mt-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded", "d-flex", "align-items-center"], ["src", "assets/img/flags/arab-flag.svg", "alt", "flag", 1, "me-2"], ["src", "assets/img/flags/france-flag.svg", "alt", "flag", 1, "me-2"], [1, "dropdown", "mb-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded"], [1, "menu-login"], [1, "btn", "btn-primary", "w-100", "mb-2", 3, "routerLink"], [1, "isax", "isax-user", "me-2"], [1, "btn", "btn-secondary", "w-100", 3, "routerLink"], [1, "isax", "isax-user-edit", "me-2"], [3, "hidden"], [1, "header-btn", "d-flex", "align-items-center"], [1, "icon-btn", "me-2"], ["href", "javascript:void(0);", "id", "dark-mode-toggle", 1, "theme-toggle", 3, "click", "ngClass"], [1, "isax", "isax-sun-15"], ["href", "javascript:void(0);", "id", "light-mode-toggle", 1, "theme-toggle", 3, "click", "ngClass"], [1, "isax", "isax-moon"], [1, "icon-btn", "me-3", 3, "ngClass"], ["class", "header-btn d-flex align-items-center", 4, "ngIf"], [1, "sidebar-overlay", 3, "click", "ngClass"], [1, "header-topbar", "text-center"], [1, "row"], [1, "col-lg-6"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start"], [1, "d-flex", "align-items-center", "fw-medium", "fs-14", "mb-2", "me-3"], [1, "isax", "isax-location5", "me-2"], [1, "d-flex", "align-items-center", "fw-medium", "fs-14", "mb-2"], [1, "isax", "isax-call-calling5", "me-2"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-end"], [1, "dropdown", "flag-dropdown", "mb-2", "me-3"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "d-inline-flex", "align-items-center"], [1, "dropdown", "mb-2", "me-3"], [1, "social-icon", "d-flex", "align-items-center", "mb-2"], [1, "me-2"], ["href", "javascript:void(0);"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-youtube"], [1, "fa-brands", "fa-linkedin"], [1, "isax", "isax-menu"], [1, "logo-white", "header-logo", 3, "routerLink"], ["src", "assets/img/logo.png", "alt", "Logo", 1, "logo", 2, "max-height", "56px"], [1, "has-submenu", "megamenu", 3, "active"], [1, "has-submenu", 3, "active"], [1, "has-submenu", "megamenu", 3, "mouseenter", "mouseleave"], ["href", "javascript:void(0);", 3, "click", "ngClass"], [1, "fas", "fa-chevron-down"], [1, "submenu", "mega-submenu", 3, "ngStyle"], [1, "megamenu-wrapper"], [1, "col-lg-2"], [1, "single-demo"], [1, "demo-img"], [1, "inner-demo-img", 3, "routerLink"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "demo-info"], [1, "has-submenu"], [3, "routerLink"], [1, "submenu", 3, "ngStyle"], [3, "active"], [1, "submenu"], [1, "dropdown", "flag-dropdown", "icon-btn", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "d-inline-flex", "align-items-center"], ["src", "assets/img/flags/us-flag.svg", "alt", "flag"], [1, "dropdown", "icon-btn", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false"], [1, "isax", "isax-dollar-circle4"], [1, "btn", "btn-primary", "d-inline-flex", "align-items-center", "me-2", 3, "routerLink"], [1, "btn", "btn-secondary", "me-0", 3, "routerLink"], [1, "btn", "btn-light", "d-inline-flex", "align-items-center", "me-2", 3, "routerLink"], [1, "isax", "isax-lock-circle", "me-2"], [1, "dropdown", "flag-dropdown", "me-3"], [1, "dropdown", "me-3"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, HeaderComponent_div_0_Template, 59, 0, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_6_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275conditionalCreate(7, HeaderComponent_Conditional_7_Template, 2, 0, "span", 7)(8, HeaderComponent_Conditional_8_Template, 5, 0, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275template(10, HeaderComponent_a_10_Template, 2, 1, "a", 9)(11, HeaderComponent_a_11_Template, 2, 1, "a", 9);
      \u0275\u0275elementStart(12, "a", 10);
      \u0275\u0275element(13, "img", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "a", 14);
      \u0275\u0275element(17, "img", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 16);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_18_listener() {
        return ctx.hideSidebar();
      });
      \u0275\u0275element(19, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "ul", 18);
      \u0275\u0275template(21, HeaderComponent_ng_container_21_Template, 4, 3, "ng-container", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 20)(23, "div", 21)(24, "h6");
      \u0275\u0275text(25, "Cart & Wishlist");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 22)(27, "a", 23);
      \u0275\u0275element(28, "i", 24);
      \u0275\u0275elementStart(29, "span", 25);
      \u0275\u0275text(30, "1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 26)(32, "a", 27);
      \u0275\u0275element(33, "img", 28);
      \u0275\u0275text(34, "ENG ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "ul", 29)(36, "li")(37, "a", 30);
      \u0275\u0275element(38, "img", 28);
      \u0275\u0275text(39, "ENG ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "li")(41, "a", 30);
      \u0275\u0275element(42, "img", 31);
      \u0275\u0275text(43, "ARA ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 30);
      \u0275\u0275element(46, "img", 32);
      \u0275\u0275text(47, "FRE ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 33)(49, "a", 34);
      \u0275\u0275text(50, " USD ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "ul", 29)(52, "li")(53, "a", 35);
      \u0275\u0275text(54, "USD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 35);
      \u0275\u0275text(57, "YEN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 35);
      \u0275\u0275text(60, "EURO");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 33)(62, "a", 34);
      \u0275\u0275text(63, " Light ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "ul", 29)(65, "li")(66, "a", 35);
      \u0275\u0275text(67, "Light");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 35);
      \u0275\u0275text(70, "Dark");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(71, "div", 36)(72, "a", 37);
      \u0275\u0275element(73, "i", 38);
      \u0275\u0275text(74, "Se Connecter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "a", 39);
      \u0275\u0275element(76, "i", 40);
      \u0275\u0275text(77, "Ajouter Employ\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 41)(79, "div", 42);
      \u0275\u0275conditionalCreate(80, HeaderComponent_Conditional_80_Template, 29, 0);
      \u0275\u0275elementStart(81, "div", 43)(82, "a", 44);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_82_listener() {
        return ctx.sidebarService.changeThemeColor("dark-mode");
      });
      \u0275\u0275element(83, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "a", 46);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_84_listener() {
        return ctx.sidebarService.changeThemeColor("light-mode");
      });
      \u0275\u0275element(85, "i", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 48)(87, "a", 23);
      \u0275\u0275element(88, "i", 24);
      \u0275\u0275elementStart(89, "span", 25);
      \u0275\u0275text(90, "1");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(91, HeaderComponent_Conditional_91_Template, 4, 2);
      \u0275\u0275conditionalCreate(92, HeaderComponent_Conditional_92_Template, 6, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(93, HeaderComponent_div_93_Template, 40, 8, "div", 49);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(94, "div", 50);
      \u0275\u0275listener("click", function HeaderComponent_Template_div_click_94_listener() {
        return ctx.hideSidebar();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.base === "index-two" || ctx.base === "courses" || ctx.base === "pages");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c1, ctx.base === "index-six"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction7(26, _c2, ctx.base === "index", ctx.base === "index-two" || ctx.base === "courses", ctx.base === "index-three" || ctx.base === "index-six", ctx.base === "index-three", ctx.base === "index-four", ctx.base === "index-five", ctx.isFixed));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.base.includes("index") ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.base === "index-two" || ctx.base === "index-three" || ctx.base === "index-four" || ctx.base === "index-five" || ctx.base === "index-six" || ctx.base === "courses" || ctx.base === "pages" || ctx.base === "blog");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.base === "index");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(34, _c3, ctx.isHovered));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(36, _c3, ctx.isHovered));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.sidebar);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.cart);
      \u0275\u0275advance(45);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(3);
      \u0275\u0275property("hidden", ctx.base === "index-three" || ctx.base === "index-four");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.base === "index" || ctx.base === "index-two" || ctx.base === "index-three" || ctx.base === "index-four" || ctx.base === "index-five" || ctx.base === "index-six" ? 80 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(38, _c4, ctx.themeColor === "light-mode"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(40, _c4, ctx.themeColor === "dark-mode"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(42, _c5, ctx.base === "index-six"));
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.cart);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.base === "index" || ctx.base === "index-six" ? 91 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.base === "index-two" || ctx.base === "courses" || ctx.base === "pages" || ctx.base === "blog" ? 92 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.base === "index-three" || ctx.base === "index-four");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(44, _c6, ctx.isOpened));
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [CommonModule, RouterLink], template: `<!-- Header Topbar-->\r
<div *ngIf="base==='index-two' || base==='courses' || base==='pages'" class="header-topbar text-center">\r
<div class="container">\r
    <div class="row">\r
        <div class="col-lg-6">\r
            <div class="d-flex align-items-center justify-content-center justify-content-lg-start">\r
                <p class="d-flex align-items-center fw-medium fs-14 mb-2 me-3"><i class="isax isax-location5 me-2"></i>1442 Crosswind Drive Madisonville</p>\r
                <p class="d-flex align-items-center fw-medium fs-14 mb-2"><i class="isax isax-call-calling5 me-2"></i>+1 45887 77874</p>\r
            </div>\r
        </div>\r
        <div class="col-lg-6">\r
            <div class="d-flex align-items-center justify-content-center justify-content-lg-end">\r
                <div class="dropdown flag-dropdown mb-2 me-3">\r
                    <a href="javascript:void(0);" class="dropdown-toggle d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">\r
                        <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG\r
                    </a>\r
                    <ul class="dropdown-menu p-2 mt-2">\r
                        <li>\r
                            <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">\r
                                <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG\r
                            </a>\r
                        </li>\r
                        <li>\r
                            <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">\r
                                <img src="assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA\r
                            </a>\r
                        </li>\r
                        <li>\r
                            <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">\r
                                <img src="assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE\r
                            </a>\r
                        </li>\r
                    </ul>\r
                </div>\r
                <div class="dropdown mb-2 me-3">\r
                    <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">\r
                        USD\r
                    </a>\r
                    <ul class="dropdown-menu p-2 mt-2">\r
                        <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>\r
                        <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>\r
                        <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>\r
                    </ul>\r
                </div>\r
                <ul class="social-icon d-flex align-items-center mb-2">\r
                    <li class="me-2">\r
                        <a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>\r
                    </li>\r
                    <li class="me-2">\r
                        <a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>\r
                    </li>\r
                    <li class="me-2">\r
                        <a href="javascript:void(0);"><i class="fa-brands fa-x-twitter"></i></a>\r
                    </li>\r
                    <li class="me-2">\r
                        <a href="javascript:void(0);"><i class="fa-brands fa-youtube"></i></a>\r
                    </li>\r
                    <li>\r
                        <a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>\r
                    </li>\r
                </ul>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
</div>\r
<!-- /Header Topbar-->\r
\r
<!-- Header -->\r
 <div [ngClass]="{'home-six':base==='index-six'}">\r
\r
   <header\r
     class=""\r
     [ngClass]="{\r
         'header-one':base==='index',\r
         'header-two':base==='index-two'|| base==='courses',\r
         'header-three':base==='index-three' || base==='index-six',\r
         'position-fixed':base==='index-three',\r
         'header-four':base==='index-four',\r
         'header-two header-five position-fixed':base==='index-five',\r
         'fixed': isFixed,\r
     }"\r
     > \r
     <div class="container">\r
       <div class="header-nav">\r
         <div class="navbar-header">\r
           <a id="mobile_btn" href="javascript:void(0);"  (click)="toggleSidebar()">\r
            @if(base.includes('index')){\r
             <span class="bar-icon">\r
               <i class="isax isax-menu"></i>\r
             </span>\r
            }\r
            @else{\r
              <span class="bar-icon">\r
									<span>hjklm</span>\r
									<span></span>\r
									<span></span>\r
								</span>\r
            }\r
           </a>\r
           <div class="navbar-logo">\r
             <a *ngIf="base==='index-two' || base==='index-three' || base==='index-four' || base==='index-five' || base==='index-six' || base==='courses' || base==='pages' || base==='blog'" class="logo-white header-logo" [routerLink]="routes.home">\r
               <img src="assets/img/logo.png" class="logo" alt="Logo" style="max-height:56px">\r
             </a>\r
             <a *ngIf="base==='index'" class="logo-white header-logo" [routerLink]="routes.home">\r
               <img src="assets/img/logo-white.png" class="logo" alt="Logo" style="max-height:106px">\r
             </a>\r
             <a  class="logo-dark header-logo" [routerLink]="routes.home">\r
               <img src="assets/img/logo-white.png" class="logo" alt="Logo" style="max-height:106px">\r
             </a>\r
           </div>\r
         </div>\r
         <div class="main-menu-wrapper" [ngClass]="{ 'active': isHovered }">								\r
           <div class="menu-header">\r
             <a [routerLink]="routes.home" class="menu-logo">\r
               <img src="assets/img/logo.png" class="img-fluid" alt="Logo" style="max-height:106px">\r
             </a>\r
             <a id="menu_close" class="menu-close" href="javascript:void(0);" (click)="hideSidebar()">\r
               <i class="fas fa-times"></i>\r
             </a>\r
           </div>\r
           <ul class="main-nav" [ngClass]="{ 'active': isHovered }">\r
             <ng-container *ngFor="let mainMenus of sidebar, let i = index">\r
               @if(mainMenus.separateRoute === false && mainMenus.tittle === 'Home'){\r
               <li class="has-submenu megamenu"  [class.active]="base===mainMenus.base || base===mainMenus.base2 || base===mainMenus.base3 || base===mainMenus.base4 || base===mainMenus.base5 || base===mainMenus.base6" (mouseenter)="isHovered = true"  (mouseleave)="isHovered = false">\r
                 <a href="javascript:void(0);" [ngClass]="{'submenu':isDropdownOpen}" (click)="openSubMenu()">{{mainMenus.tittle}} <i class="fas fa-chevron-down"></i></a>\r
                 <ul class="submenu mega-submenu" [ngStyle]="{ display: isDropdownOpen ? 'block' : '' }">\r
                   <li>\r
                     <div class="megamenu-wrapper">\r
                       <div class="row">\r
                         @for (menu of mainMenus.menu;track menu){\r
                           <div class="col-lg-2">\r
                             <div class="single-demo" [class.active]="base===menu.base">\r
                               <div class="demo-img">\r
                                 <a [routerLink]="menu.route" class="inner-demo-img"><img src="assets/img/home/{{menu.img}}" class="img-fluid " alt="img"></a>\r
                               </div>\r
                               <div class="demo-info">\r
                                 <a [routerLink]="menu.route" class="inner-demo-img">{{menu.menuValue}}</a>\r
                               </div>\r
                             </div>\r
                           </div>\r
                         }\r
                         \r
                       </div>\r
                     </div>\r
                   </li>\r
                 </ul>\r
               </li>\r
               }\r
             @if (mainMenus.separateRoute === true) {\r
             <li class="has-submenu" [class.active]="base ===mainMenus.base">\r
               <a [routerLink]="mainMenus.route">{{ mainMenus.tittle }} <i class="fas fa-chevron-down"></i></a>\r
             </li>\r
               }\r
               @if (mainMenus.separateRoute === false && mainMenus.tittle!=='Home') {\r
                 <li class="has-submenu" [class.active]="base === mainMenus.base || base=== mainMenus.base2">\r
                   <a href="javascript:void(0);" [ngClass]="{'submenu':openDropdownIndex === i}" (click)="toggleSubMenu(i)">{{ mainMenus.tittle }} <i class="fas fa-chevron-down"></i></a>\r
                   <ul class="submenu" [ngStyle]="{ display: openDropdownIndex === i ? 'block' : '' }">\r
                     @for (menu of mainMenus.menu; track menu) {\r
                         @if (menu.hasSubRoute === false) {\r
                         <li [class.active]="page===menu.page">\r
                           <a [routerLink]="menu.route">{{ menu.menuValue }}</a>\r
                         </li>\r
                         }\r
                         @if (menu.hasSubRoute === true) {\r
                           <li class="has-submenu" [class.active]="page===menu.base || page===menu.base1 || page===menu.base2 || page===menu.base3 || page===menu.base4\r
                           || page===menu.base5 || page===menu.base6 || page===menu.base7">\r
                             <a href="javascript:void(0);" [ngClass]="{'submenu':isDropdownOpen1 === i}" (click)="openSubMenu1(i)">{{ menu.menuValue }}</a>\r
                             <ul class="submenu" [ngStyle]="{ display: isDropdownOpen1 === i ? 'block' : '' }">\r
                               @for (subMenu of menu.subMenus; track subMenu) {\r
                                 @if(subMenu.hasSubRoute===false){\r
                                   <li [class.active]="page===subMenu.page"><a [routerLink]="subMenu.route">{{ subMenu.menuValue }}</a></li>\r
                                 }\r
                                 @if(subMenu.hasSubRoute===true){\r
                                   <li class="has-submenu" [class.active]="page===subMenu.page || page===subMenu.page1 || page===subMenu.page2">\r
                                     <a href="javascript:void(0);">{{ subMenu.menuValue }}</a>\r
                                     <ul class="submenu">\r
                                       @for (subMenu2 of subMenu.subMenus; track subMenu2){\r
                                       <li [class.active]="page===subMenu2.page"><a [routerLink]="subMenu2.route" >{{subMenu2.menuValue}}</a></li>\r
                                       }\r
                                     </ul>\r
                                   </li>\r
                                 }\r
                               }\r
                             </ul>\r
                           </li>\r
                         }\r
                         }\r
                   </ul>\r
                   </li>\r
                 }\r
               </ng-container>\r
           </ul>\r
           <div class="menu-dropdown">\r
             <div class="cart-item">\r
               <h6>Cart & Wishlist</h6>                                \r
               <div class="icon-btn">\r
                 <a [routerLink]="routes.cart" class="position-relative">\r
                   <i class="isax isax-shopping-cart5"></i>\r
                   <span class="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>\r
                 </a>\r
               </div>\r
             </div>\r
             <div class="dropdown flag-dropdown mb-2">\r
               <a href="javascript:void(0);" class="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">\r
                 <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG\r
               </a>\r
               <ul class="dropdown-menu p-2 mt-2">\r
                 <li>\r
                   <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">\r
                     <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG\r
                   </a>\r
                 </li>\r
                 <li>\r
                   <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">\r
                     <img src="assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA\r
                   </a>\r
                 </li>\r
                 <li>\r
                   <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">\r
                     <img src="assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE\r
                   </a>\r
                 </li>\r
               </ul>\r
             </div>\r
             <div class="dropdown mb-2">\r
               <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">\r
                 USD\r
               </a>\r
               <ul class="dropdown-menu p-2 mt-2">\r
                 <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>\r
                 <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>\r
                 <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>\r
               </ul>\r
             </div>\r
             <div class="dropdown mb-2">\r
               <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">\r
                 Light\r
               </a>\r
               <ul class="dropdown-menu p-2 mt-2">\r
                 <li><a class="dropdown-item rounded" href="javascript:void(0);">Light</a></li>\r
                 <li><a class="dropdown-item rounded" href="javascript:void(0);">Dark</a></li>\r
               </ul>\r
             </div>\r
           </div>\r
           <div class="menu-login">\r
             <a [routerLink]="routes.login" class="btn btn-primary w-100 mb-2"><i class="isax isax-user me-2"></i>Se Connecter</a>\r
             <a [routerLink]="routes.register" class="btn btn-secondary w-100"><i class="isax isax-user-edit me-2"></i>Ajouter Employ\xE9</a>\r
           </div>\r
         </div>\r
         <div [hidden]="base ==='index-three'|| base==='index-four'">\r
           <div class="header-btn d-flex align-items-center">			\r
         @if(base==='index' || base==='index-two' || base==='index-three' || base==='index-four' || base==='index-five' || base==='index-six'){\r
               <div class="dropdown flag-dropdown icon-btn me-2">\r
                 <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">\r
                   <img src="assets/img/flags/us-flag.svg" alt="flag">\r
                 </a>\r
                 <ul class="dropdown-menu p-2 mt-2">\r
                   <li>\r
                     <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">\r
                       <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG\r
                     </a>\r
                   </li>\r
                   <li>\r
                     <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">\r
                       <img src="assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA\r
                     </a>\r
                   </li>\r
                   <li>\r
                     <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">\r
                       <img src="assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE\r
                     </a>\r
                   </li>\r
                 </ul>\r
               </div>\r
               <div class="dropdown icon-btn me-2">\r
                 <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">\r
                   <i class="isax isax-dollar-circle4"></i>\r
                 </a>\r
                 <ul class="dropdown-menu p-2 mt-2">\r
                   <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>\r
                   <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>\r
                   <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>\r
                 </ul>\r
               </div>\r
             }				\r
             <div class="icon-btn me-2">\r
               <a href="javascript:void(0);" id="dark-mode-toggle" class="theme-toggle" [ngClass]="{'activate' : themeColor==='light-mode'}" (click)="sidebarService.changeThemeColor('dark-mode')" >\r
                 <i class="isax isax-sun-15"></i>\r
               </a>\r
               <a href="javascript:void(0);" id="light-mode-toggle" class="theme-toggle" [ngClass]="{'activate' : themeColor==='dark-mode'}" (click)="sidebarService.changeThemeColor('light-mode')" >\r
                 <i class="isax isax-moon"></i>\r
               </a>\r
             </div>\r
             <div class="icon-btn me-3" [ngClass]="{'custom-last':base==='index-six'}">\r
               <a [routerLink]="routes.cart" class="position-relative">\r
                 <i class="isax isax-shopping-cart5"></i>\r
                 <span class="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>\r
               </a>\r
             </div>\r
               @if (base==='index'||base==='index-six'){\r
   \r
                 <a [routerLink]="routes.login" class="btn btn-primary d-inline-flex align-items-center me-2">\r
                   Se Connecter\r
                 </a>\r
                 <a [routerLink]="routes.register" class="btn btn-secondary me-0">\r
                   Ajouter Employ\xE9\r
                 </a>\r
               }\r
           @if(base === 'index-two' || base==='courses' || base==='pages'|| base==='blog'){\r
             <a [routerLink]="routes.login" class="btn btn-light d-inline-flex align-items-center me-2">\r
               <i class="isax isax-lock-circle me-2"></i>Se Connecter\r
           </a>\r
           <a [routerLink]="routes.register" class="btn btn-secondary me-0">\r
               <i class="isax isax-user-edit me-2"></i>Ajouter Employ\xE9\r
           </a>\r
           }\r
           </div>\r
         </div>\r
       \r
         <div *ngIf="base==='index-three' || base==='index-four'" class="header-btn d-flex align-items-center">\r
           <div class="icon-btn me-2">\r
             <a href="javascript:void(0);" id="dark-mode-toggle" class="theme-toggle" [ngClass]="{'activate' : themeColor==='light-mode'}" (click)="sidebarService.changeThemeColor('dark-mode')" >\r
               <i class="isax isax-sun-15"></i>\r
             </a>\r
             <a href="javascript:void(0);" id="light-mode-toggle" class="theme-toggle" [ngClass]="{'activate' : themeColor==='dark-mode'}" (click)="sidebarService.changeThemeColor('light-mode')" >\r
               <i class="isax isax-moon"></i>\r
             </a>\r
           </div>\r
           \r
           <div class="dropdown flag-dropdown me-3">\r
             <a href="javascript:void(0);" class="dropdown-toggle d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">\r
               <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG\r
             </a>\r
             <ul class="dropdown-menu p-2 mt-2">\r
               <li>\r
                 <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">\r
                   <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG\r
                 </a>\r
               </li>\r
               <li>\r
                 <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">\r
                   <img src="assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA\r
                 </a>\r
               </li>\r
               <li>\r
                 <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">\r
                   <img src="assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE\r
                 </a>\r
               </li>\r
             </ul>\r
           </div>\r
           <div class="dropdown me-3">\r
             <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">\r
               USD\r
             </a>\r
             <ul class="dropdown-menu p-2 mt-2" style="">\r
               <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>\r
               <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>\r
               <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>\r
             </ul>\r
           </div>\r
           <a [routerLink]="routes.login" class="btn btn-primary d-inline-flex align-items-center me-2">\r
             Se Connecter\r
           </a>\r
           <a [routerLink]="routes.register" class="btn btn-secondary me-0">\r
             Ajouter Employ\xE9\r
           </a>\r
         </div>\r
       </div>\r
     </div>\r
   \r
       </header>\r
 </div>\r
    <!-- /Header -->\r
    <div class="sidebar-overlay" [ngClass]="{'opened':isOpened}" (click)="hideSidebar()"></div>` }]
  }], () => [{ type: CommonService }, { type: DataService }, { type: SidebarService }, { type: Renderer2 }, { type: ElementRef }], { menuElement: [{
    type: ViewChild,
    args: ["stickyMenu"]
  }], onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "app/features/layouts/header/header.component.ts", lineNumber: 16 });
})();

// src/app/features/layouts/admin-header/admin-header.component.ts
var _c02 = ["stickyMenu"];
function AdminHeaderComponent_div_27_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 42);
    \u0275\u0275element(2, "i", 50);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Gestion utilisateurs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 42);
    \u0275\u0275element(6, "i", 51);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Gestion des Clients");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 42);
    \u0275\u0275element(10, "i", 52);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 42);
    \u0275\u0275element(14, "i", 53);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Tableau de bords Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a", 42);
    \u0275\u0275element(18, "i", 54);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Parametres");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.routes.superadminUserList);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.superadminClientList);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.superadminCourse);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.superadmin_dashboard);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.superadminSettings);
  }
}
function AdminHeaderComponent_div_27_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 42);
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Mes Formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 42);
    \u0275\u0275element(6, "i", 56);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Mon Profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 42);
    \u0275\u0275element(10, "i", 54);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Parametres");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorCourse);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorProfile);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorSettings);
  }
}
function AdminHeaderComponent_div_27_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 42);
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Mon Profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 42);
    \u0275\u0275element(6, "i", 54);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Centre d'aide");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.routes.students_profile);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorCourse);
  }
}
function AdminHeaderComponent_div_27_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 42);
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Tableau de bord RH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 42);
    \u0275\u0275element(6, "i", 50);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Gestion utilisateurs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 42);
    \u0275\u0275element(10, "i", 52);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 42);
    \u0275\u0275element(14, "i", 54);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Param\xE8tres");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.routes.adminrh_dashboard);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.adminrhUserList);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.adminrhCourse);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.adminrhSettings);
  }
}
function AdminHeaderComponent_div_27_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function AdminHeaderComponent_div_27_a_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 59)(1, "span", 60);
    \u0275\u0275element(2, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62)(4, "span", 63);
    \u0275\u0275text(5, "Mode apprenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 64);
    \u0275\u0275text(7, "Acc\xE9der \xE0 votre espace employ\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.students_Dashboard);
  }
}
function AdminHeaderComponent_div_27_a_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 66)(1, "span", 67);
    \u0275\u0275element(2, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 69)(4, "span", 70);
    \u0275\u0275text(5, "Mode formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 71);
    \u0275\u0275text(7, "Cr\xE9er et g\xE9rer des formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructor_dashboard);
  }
}
function AdminHeaderComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "button", 25)(3, "div", 26);
    \u0275\u0275element(4, "img", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28)(6, "span", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 32)(12, "div", 33)(13, "div", 34)(14, "div", 35);
    \u0275\u0275element(15, "img", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 36)(17, "h6", 37);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 38);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 21);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(23, "div", 39);
    \u0275\u0275elementStart(24, "div", 40);
    \u0275\u0275template(25, AdminHeaderComponent_div_27_ng_container_25_Template, 21, 5, "ng-container", 41)(26, AdminHeaderComponent_div_27_ng_container_26_Template, 13, 3, "ng-container", 41)(27, AdminHeaderComponent_div_27_ng_container_27_Template, 9, 2, "ng-container", 41)(28, AdminHeaderComponent_div_27_ng_container_28_Template, 17, 4, "ng-container", 41);
    \u0275\u0275elementStart(29, "a", 42);
    \u0275\u0275element(30, "i", 43);
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, AdminHeaderComponent_div_27_span_33_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "div", 39);
    \u0275\u0275elementStart(35, "div", 45);
    \u0275\u0275template(36, AdminHeaderComponent_div_27_a_36_Template, 9, 1, "a", 46)(37, AdminHeaderComponent_div_27_a_37_Template, 9, 1, "a", 47);
    \u0275\u0275elementStart(38, "button", 48);
    \u0275\u0275listener("click", function AdminHeaderComponent_div_27_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275element(39, "i", 49);
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "D\xE9connexion");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.avatar) || ctx_r1.getDefaultAvatar(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.prenom) || "User", " ", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.nom) || "Name");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRoleLabel());
    \u0275\u0275advance(6);
    \u0275\u0275property("src", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.avatar) || ctx_r1.getDefaultAvatar(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.prenom) || "User", " ", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.nom) || "Name");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.currentUser == null ? null : ctx_r1.currentUser.email) || "user@example.com");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRoleLabel());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.role_id) === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.role_id) === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.role_id) === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isRhUser());
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorCourse);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.role_id) === 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isRhUser());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isRhUser());
  }
}
function AdminHeaderComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 73)(2, "a", 74);
    \u0275\u0275element(3, "i", 75);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Se connecter");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.login);
  }
}
var AdminHeaderComponent = class _AdminHeaderComponent {
  common;
  data;
  sidebarService;
  renderer;
  authService;
  router;
  // @Input() base: string = ''; // Définir le type
  routes = routes;
  menuElement;
  headerpage = false;
  sticky = false;
  elementPosition;
  headerClass = true;
  isHovered = false;
  isFixed = false;
  isOpened = false;
  isDropdownOpen = false;
  isDropdownOpen1 = null;
  base = "";
  page = "";
  last = "";
  headerMenuactive = "";
  openDropdownIndex = null;
  themeColor = "light-mode";
  islight = true;
  isdark = false;
  sidebar;
  isLoggedIn = false;
  currentUser = null;
  constructor(common, data, sidebarService, renderer, authService, router) {
    this.common = common;
    this.data = data;
    this.sidebarService = sidebarService;
    this.renderer = renderer;
    this.authService = authService;
    this.router = router;
    this.common.base.subscribe((res) => {
      this.base = res;
    });
    this.common.page.subscribe((res) => {
      this.page = res;
    });
    this.common.last.subscribe((res) => {
      this.last = res;
    });
    this.sidebar = this.data.sideBar;
    this.sidebarService.themeColors.subscribe((res) => {
      this.themeColor = res;
    });
  }
  onWindowScroll() {
    this.isFixed = window.pageYOffset > 40;
  }
  toggleSidebar() {
    this.sidebarService.openSidebar();
    this.isOpened = !this.isOpened;
    if (this.isOpened === true) {
      this.renderer.addClass(document.documentElement, "menu-opened");
    } else {
      this.renderer.removeClass(document.documentElement, "menu-opened");
    }
  }
  hideSidebar() {
    this.sidebarService.closeSidebar();
    this.isOpened = false;
    this.renderer.removeClass(document.documentElement, "menu-opened");
  }
  openSubMenu() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.openDropdownIndex = null;
  }
  openSubMenu1(index) {
    this.isDropdownOpen1 = this.isDropdownOpen1 === index ? null : index;
  }
  toggleSubMenu(index) {
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
    this.isDropdownOpen = false;
  }
  switchTheme() {
    this.isdark = !this.isdark;
    this.islight = !this.islight;
  }
  ngOnInit() {
    const themeColor = localStorage.getItem("themeColor") || "light-mode";
    this.sidebarService.changeThemeColor(themeColor);
    this.checkLoginStatus();
  }
  checkLoginStatus() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.currentUser = this.authService.getUser();
      console.log("currentUser complet:", JSON.stringify(this.currentUser));
      console.log("role_id:", this.currentUser?.role_id);
      if (this.currentUser?.role_id === 1) {
        this.base = "admin";
      } else if (this.currentUser?.role_id === 2) {
        this.base = "student";
      } else if (this.currentUser?.role_id === 3) {
        this.base = "formateur";
      }
    }
  }
  getDefaultAvatar() {
    if (!this.currentUser?.role_id)
      return "assets/img/avatar/avatar.png";
    switch (this.currentUser.role_id) {
      case 1:
        return "assets/img/avatar/avatar.png";
      // Admin
      case 2:
        return "assets/img/avatar/avatar.png";
      // Student
      case 3:
        return "assets/img/avatar/avatar.png";
      //  Instructor
      default:
        return "assets/img/avatar/avatar.png";
    }
  }
  isRhUser() {
    if (!this.currentUser)
      return false;
    const staticRhIds = [4, 5, 9, 14];
    if (staticRhIds.includes(this.currentUser.role_id))
      return true;
    const roleType = this.currentUser.role_type ?? this.currentUser["role_type"] ?? "";
    return roleType === "rh";
  }
  getRoleLabel() {
    if (!this.currentUser?.role_id)
      return "User";
    switch (this.currentUser.role_id) {
      case 1:
        return "Super Admin";
      case 2:
        return "Employe";
      case 3:
        return "Formateur";
      case 4:
        return "Responsable RH";
      case 5:
        return "Administrateur RH Holding";
      case 6:
        return "Gestionnaire de Contenu";
      case 7:
        return "Support Technique";
      case 8:
        return "Auditeur";
      case 9:
        return "Administrateur RH";
      case 10:
        return "Manageur";
      case 11:
        return "Administrateur";
      case 13:
        return "Consultant";
      case 14:
        return "Super Admin RH Holding Groupe";
      default:
        return "User";
    }
  }
  getProfileRoute() {
    if (!this.currentUser?.role_id)
      return this.routes.login;
    switch (this.currentUser.role_id) {
      case 1:
        return this.routes.superadminProfile;
      case 2:
        return this.routes.studentProfile;
      case 3:
        return this.routes.instructorProfile;
      default:
        return this.routes.login;
    }
  }
  getSettingsRoute() {
    if (!this.currentUser?.role_id)
      return this.routes.login;
    switch (this.currentUser.role_id) {
      case 1:
        return this.routes.instructorSettings;
      case 2:
        return this.routes.instructorSettings;
      case 3:
        return this.routes.studentSettings;
      default:
        return this.routes.login;
    }
  }
  logout() {
    if (confirm("\xCAtes-vous s\xFBr de vouloir vous d\xE9connecter ?")) {
      this.authService.logout();
      this.isLoggedIn = false;
      this.currentUser = null;
    }
  }
  static \u0275fac = function AdminHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminHeaderComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminHeaderComponent, selectors: [["app-admin-header"]], viewQuery: function AdminHeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuElement = _t.first);
    }
  }, hostBindings: function AdminHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function AdminHeaderComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, inputs: { base: "base" }, decls: 29, vars: 7, consts: [[1, "header-wrapper"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col"], [1, "header-content", "d-flex", "align-items-center", "justify-content-between"], [1, "header-brand"], [1, "brand-logo", "d-flex", "align-items-center", 3, "routerLink"], ["src", "assets/img/logo.png", "alt", "Logo", 1, "logo-img", "me-2"], [1, "header-actions", "d-flex", "align-items-center"], [1, "header-item", "me-3"], [1, "theme-switcher", "d-flex"], ["type", "button", "title", "Light Mode", 1, "theme-toggle-btn", 3, "click"], [1, "isax", "isax-sun-15"], ["type", "button", "title", "Dark Mode", 1, "theme-toggle-btn", 3, "click"], [1, "isax", "isax-moon"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "header-icon-btn"], [1, "isax", "isax-notification"], [1, "notification-badge"], [1, "dropdown-menu", "dropdown-menu-end", "notification-dropdown"], [1, "dropdown-header"], [1, "badge", "bg-primary"], ["class", "header-item", 4, "ngIf"], [1, "header-item"], [1, "dropdown", "profile-dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "profile-btn", "d-flex", "align-items-center"], [1, "profile-avatar", "me-2"], ["alt", "Profile", 1, "avatar-img", 3, "src"], [1, "profile-info", "d-none", "d-md-block"], [1, "profile-name"], [1, "profile-role"], [1, "isax", "isax-arrow-down-1", "ms-2"], [1, "dropdown-menu", "dropdown-menu-end", "profile-menu"], [1, "profile-menu-header"], [1, "d-flex", "align-items-center"], [1, "profile-avatar", "me-3"], [1, "profile-details"], [1, "profile-name", "mb-0"], [1, "profile-email", "mb-1"], [1, "dropdown-divider"], [1, "profile-menu-body", 2, "margin-left", "0"], [4, "ngIf"], [1, "dropdown-item", 3, "routerLink"], [1, "isax", "isax-messages-3", "me-2"], ["class", "badge bg-danger ms-auto", 4, "ngIf"], [1, "profile-menu-footer"], ["class", "learner-mode-btn", 3, "routerLink", 4, "ngIf"], ["class", "trainer-mode-btn", 3, "routerLink", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-danger", "w-100", "d-flex", "align-items-center", "justify-content-center", "mt-2", 3, "click"], [1, "isax", "isax-logout", "me-2"], [1, "isax", "isax-user-add", "me-2"], [1, "isax", "isax-people5", "me-2"], [1, "isax", "isax-teacher5", "me-2"], [1, "isax", "isax-element-4", "me-2"], [1, "isax", "isax-setting-2", "me-2"], [1, "isax", "isax-book-1", "me-2"], [1, "isax", "isax-security-user", "me-2"], [1, "isax", "isax-security-user"], [1, "badge", "bg-danger", "ms-auto"], [1, "learner-mode-btn", 3, "routerLink"], [1, "learner-mode-btn__icon"], [1, "isax", "isax-user-octagon"], [1, "learner-mode-btn__text"], [1, "learner-mode-btn__label"], [1, "learner-mode-btn__sub"], [1, "isax", "isax-arrow-right-3", "learner-mode-btn__arrow"], [1, "trainer-mode-btn", 3, "routerLink"], [1, "trainer-mode-btn__icon"], [1, "isax", "isax-teacher"], [1, "trainer-mode-btn__text"], [1, "trainer-mode-btn__label"], [1, "trainer-mode-btn__sub"], [1, "isax", "isax-arrow-right-3", "trainer-mode-btn__arrow"], [1, "auth-buttons", "d-flex", "align-items-center"], [1, "btn", "btn-outline-primary", "btn-sm", "me-2", 3, "routerLink"], [1, "isax", "isax-login", "me-1"]], template: function AdminHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
      \u0275\u0275element(7, "img", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "button", 11);
      \u0275\u0275listener("click", function AdminHeaderComponent_Template_button_click_11_listener() {
        return ctx.sidebarService.changeThemeColor("dark-mode");
      });
      \u0275\u0275element(12, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 13);
      \u0275\u0275listener("click", function AdminHeaderComponent_Template_button_click_13_listener() {
        return ctx.sidebarService.changeThemeColor("light-mode");
      });
      \u0275\u0275element(14, "i", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 15)(17, "button", 16);
      \u0275\u0275element(18, "i", 17);
      \u0275\u0275elementStart(19, "span", 18);
      \u0275\u0275text(20, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 19)(22, "div", 20)(23, "h6");
      \u0275\u0275text(24, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 21);
      \u0275\u0275text(26, "3 New");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(27, AdminHeaderComponent_div_27_Template, 42, 17, "div", 22)(28, AdminHeaderComponent_div_28_Template, 6, 1, "div", 22);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.themeColor === "light-mode");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.themeColor === "dark-mode");
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --primary-color: #006F78;\n  --secondary-color: #D4AF37;\n  --primary-light: rgba(0, 111, 120, 0.1);\n  --secondary-light: rgba(212, 175, 55, 0.1);\n}\n.header-wrapper[_ngcontent-%COMP%] {\n  background: var(--bs-white);\n  border-bottom: 1px solid var(--bs-border-color);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n  position: sticky;\n  top: 0;\n  z-index: 1020;\n  transition: all 0.3s ease;\n}\n.header-wrapper[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  min-height: 70px;\n}\n.header-brand[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--bs-dark);\n  transition: opacity 0.3s ease;\n}\n.header-brand[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.header-brand[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n}\n.header-brand[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #006F78;\n}\n.header-actions[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n.header-actions[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.theme-switcher[_ngcontent-%COMP%] {\n  background: var(--bs-light);\n  border-radius: 25px;\n  padding: 3px;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-toggle-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  color: var(--bs-secondary);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bs-white);\n  color: #006F78;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-toggle-btn.active[_ngcontent-%COMP%] {\n  background: #006F78;\n  color: var(--bs-white);\n  box-shadow: 0 2px 4px rgba(0, 111, 120, 0.3);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-toggle-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.header-icon-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.3s ease;\n  color: var(--bs-dark);\n  text-decoration: none;\n}\n.header-icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: #006F78;\n  transform: translateY(-1px);\n}\n.header-icon-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.header-icon-btn[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%], \n.header-icon-btn[_ngcontent-%COMP%]   .cart-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  background: #D4AF37;\n  color: var(--bs-white);\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 600;\n  border: 2px solid var(--bs-white);\n}\n.profile-dropdown[_ngcontent-%COMP%]   .profile-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--bs-border-color);\n  border-radius: 50px;\n  padding: 0.4rem 0.8rem;\n  display: flex;\n  align-items: center;\n  transition: all 0.3s ease;\n  color: var(--bs-dark);\n  min-width: 120px;\n}\n.profile-dropdown[_ngcontent-%COMP%]   .profile-btn[_ngcontent-%COMP%]:hover {\n  border-color: #006F78;\n  background: var(--primary-light);\n}\n.profile-dropdown[_ngcontent-%COMP%]   .profile-btn[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 111, 120, 0.25);\n}\n.profile-dropdown[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #D4AF37;\n}\n.profile-dropdown[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.profile-dropdown[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--bs-dark);\n  margin-bottom: 0;\n}\n.profile-dropdown[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .profile-role[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #D4AF37;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n.profile-menu[_ngcontent-%COMP%] {\n  min-width: 280px;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  border-radius: 12px;\n  padding: 0;\n  margin-top: 0.5rem;\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.5rem 1rem;\n  background: linear-gradient(135deg, #006F78);\n  border-radius: 12px 12px 0 0;\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-header[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-header[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\n  color: var(--bs-white);\n  font-weight: 600;\n  font-size: 1rem;\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-header[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .profile-email[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.8rem;\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-header[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  color: var(--bs-white);\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-body[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-body[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  display: flex;\n  align-items: center;\n  color: var(--bs-dark);\n  transition: all 0.3s ease;\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-body[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: #006F78;\n  transform: translateX(5px);\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-body[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  font-size: 1.1rem;\n  color: var(--bs-secondary);\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-body[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #006F78;\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-body[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  background: #D4AF37 !important;\n  color: var(--bs-white);\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: var(--bs-light);\n  border-radius: 0 0 12px 12px;\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding: 0.6rem 1rem;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  border-color: #006F78;\n}\n.profile-menu[_ngcontent-%COMP%]   .profile-menu-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 111, 120, 0.2);\n  background: #006F78;\n  border-color: #006F78;\n}\n.learner-mode-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  margin-bottom: 6px;\n  border-radius: 10px;\n  text-decoration: none;\n  transition: all 0.18s ease;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      #ecfdf5,\n      #d1fae5);\n  border: 1px solid #6ee7b7;\n}\n.learner-mode-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.learner-mode-btn__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 16px;\n}\n.learner-mode-btn__text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.learner-mode-btn__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.learner-mode-btn__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.2;\n}\n.learner-mode-btn__arrow[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.learner-mode-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5,\n      #a7f3d0);\n  border-color: #34d399;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);\n}\n.learner-mode-btn__icon[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.learner-mode-btn__label[_ngcontent-%COMP%] {\n  color: #065f46;\n}\n.learner-mode-btn__sub[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.learner-mode-btn__arrow[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.trainer-mode-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  margin-bottom: 6px;\n  border-radius: 10px;\n  text-decoration: none;\n  transition: all 0.18s ease;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f3ff,\n      #ede9fe);\n  border: 1px solid #c4b5fd;\n}\n.trainer-mode-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.trainer-mode-btn__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 16px;\n}\n.trainer-mode-btn__text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.trainer-mode-btn__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.trainer-mode-btn__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.2;\n}\n.trainer-mode-btn__arrow[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.trainer-mode-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe,\n      #ddd6fe);\n  border-color: #a78bfa;\n  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);\n}\n.trainer-mode-btn__icon[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.trainer-mode-btn__label[_ngcontent-%COMP%] {\n  color: #3b0764;\n}\n.trainer-mode-btn__sub[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.trainer-mode-btn__arrow[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.auth-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  padding: 0.5rem 1.2rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.auth-buttons[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #006F78;\n  color: #006F78;\n}\n.auth-buttons[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #006F78;\n  border-color: #006F78;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 111, 120, 0.2);\n}\n.auth-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  border-color: #D4AF37;\n}\n.auth-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #c19b2f;\n  border-color: #c19b2f;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(212, 175, 55, 0.3);\n}\n.auth-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.notification-dropdown[_ngcontent-%COMP%] {\n  min-width: 320px;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  border-radius: 12px;\n  margin-top: 0.5rem;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-light),\n      var(--secondary-light));\n  border-radius: 12px 12px 0 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: #006F78;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #D4AF37 !important;\n  color: var(--bs-white);\n}\n.dark-mode[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%] {\n  background: #1a1a1a;\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.dark-mode[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  color: #D4AF37;\n}\n.dark-mode[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .header-icon-btn[_ngcontent-%COMP%], \n.dark-mode[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%], \n.dark-mode[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .profile-btn[_ngcontent-%COMP%] {\n  color: var(--bs-white);\n}\n.dark-mode[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .profile-role[_ngcontent-%COMP%] {\n  color: #D4AF37;\n}\n.dark-mode[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .header-icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 111, 120, 0.2);\n  color: #D4AF37;\n}\n.dark-mode[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .profile-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 111, 120, 0.1);\n  border-color: #D4AF37;\n}\n.dark-mode[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .theme-switcher[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .theme-switcher[_ngcontent-%COMP%]   .theme-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #D4AF37;\n}\n.dark-mode[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .theme-switcher[_ngcontent-%COMP%]   .theme-toggle-btn.active[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #1a1a1a;\n}\n@media (max-width: 768px) {\n  .header-wrapper[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    padding: 0.75rem 0;\n  }\n  .header-wrapper[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-wrapper[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    gap: 0.25rem;\n  }\n  .header-wrapper[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n    margin-right: 0.5rem !important;\n  }\n  .header-wrapper[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .auth-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .profile-menu[_ngcontent-%COMP%] {\n    min-width: 260px;\n    margin-right: 1rem;\n  }\n  .notification-dropdown[_ngcontent-%COMP%] {\n    min-width: 280px;\n    margin-right: 1rem;\n  }\n}\n/*# sourceMappingURL=admin-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-admin-header", imports: [CommonModule, RouterLink], standalone: true, template: `<header class="header-wrapper">\r
  <div class="container-fluid">\r
    <div class="row align-items-center">\r
      <div class="col">\r
        <div class="header-content d-flex align-items-center justify-content-between">\r
          \r
          <!-- Logo/Brand Section -->\r
          <div class="header-brand">\r
            <a [routerLink]="routes.home" class="brand-logo d-flex align-items-center">\r
              <img src="assets/img/logo.png" alt="Logo" class="logo-img me-2">\r
              <!-- <span class="brand-text">Pyramide Admin</span> -->\r
            </a>\r
          </div>\r
\r
          <!-- Header Actions -->\r
          <div class="header-actions d-flex align-items-center">\r
            \r
            <!-- Theme Toggle -->\r
            <div class="header-item me-3">\r
              <div class="theme-switcher d-flex">\r
                <button \r
                  type="button" \r
                  class="theme-toggle-btn" \r
                  [class.active]="themeColor === 'light-mode'"\r
                  (click)="sidebarService.changeThemeColor('dark-mode')"\r
                  title="Light Mode">\r
                  <i class="isax isax-sun-15"></i>\r
                </button>\r
                <button \r
                  type="button" \r
                  class="theme-toggle-btn" \r
                  [class.active]="themeColor === 'dark-mode'"\r
                  (click)="sidebarService.changeThemeColor('light-mode')"\r
                  title="Dark Mode">\r
                  <i class="isax isax-moon"></i>\r
                </button>\r
              </div>\r
            </div>\r
\r
            <!-- Notifications -->\r
            <div class="header-item me-3">\r
              <div class="dropdown">\r
                <button class="header-icon-btn" type="button" data-bs-toggle="dropdown">\r
                  <i class="isax isax-notification"></i>\r
                  <span class="notification-badge">3</span>\r
                </button>\r
                <div class="dropdown-menu dropdown-menu-end notification-dropdown">\r
                  <div class="dropdown-header">\r
                    <h6>Notifications</h6>\r
                    <span class="badge bg-primary">3 New</span>\r
                  </div>\r
                  <!-- Notification items would go here -->\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Shopping Cart -->\r
            <!-- <div class="header-item me-3">\r
              <a [routerLink]="routes.cart" class="header-icon-btn position-relative">\r
                <i class="isax isax-shopping-cart5"></i>\r
                <span class="cart-badge">1</span>\r
              </a>\r
            </div> -->\r
\r
            <!-- Profile Section -->\r
            <div *ngIf="isLoggedIn" class="header-item">\r
              <div class="dropdown profile-dropdown">\r
                <button class="profile-btn d-flex align-items-center" type="button" data-bs-toggle="dropdown">\r
                  <div class="profile-avatar me-2">\r
                    <img [src]="currentUser?.avatar || getDefaultAvatar()" alt="Profile" class="avatar-img">\r
                  </div>\r
                  <div class="profile-info d-none d-md-block">\r
                    <span class="profile-name">{{ currentUser?.prenom || 'User' }} {{ currentUser?.nom || 'Name' }}</span>\r
                    <small class="profile-role">{{ getRoleLabel() }}</small>\r
                  </div>\r
                  <i class="isax isax-arrow-down-1 ms-2"></i>\r
                </button>\r
\r
                <div class="dropdown-menu dropdown-menu-end profile-menu">\r
                  <!-- Profile Header -->\r
                  <div class="profile-menu-header">\r
                    <div class="d-flex align-items-center">\r
                      <div class="profile-avatar me-3">\r
                        <img [src]="currentUser?.avatar || getDefaultAvatar()" alt="Profile" class="avatar-img">\r
                      </div>\r
                      <div class="profile-details">\r
                        <h6 class="profile-name mb-0">{{ currentUser?.prenom || 'User' }} {{ currentUser?.nom || 'Name' }}</h6>\r
                        <p class="profile-email mb-1">{{ currentUser?.email || 'user@example.com' }}</p>\r
                        <span class="badge bg-primary">{{ getRoleLabel() }}</span>\r
                      </div>\r
                    </div>\r
                  </div>\r
\r
                  <div class="dropdown-divider"></div>\r
\r
                  <!-- Profile Menu Items -->\r
                  <div class="profile-menu-body" style="margin-left: 0;">\r
                    <!-- <a class="dropdown-item" [routerLink]="getProfileRoute()">\r
                      <i class="isax isax-security-user me-2"></i>\r
                      <span>Mon Profil</span>\r
                    </a> -->\r
\r
                    <!-- Admin Menu -->\r
                    <ng-container *ngIf="currentUser?.role_id === 1">\r
                      <a class="dropdown-item" [routerLink]="routes.superadminUserList">\r
                        <i class="isax isax-user-add me-2"></i>\r
                        <span>Gestion utilisateurs</span>\r
                      </a>\r
                      <a class="dropdown-item" [routerLink]="routes.superadminClientList">\r
                        <i class="isax isax-people5 me-2"></i>\r
                        <span>Gestion des Clients</span>\r
                      </a>\r
                        <a class="dropdown-item" [routerLink]="routes.superadminCourse">\r
                      <i class="isax isax-teacher5 me-2"></i>                   \r
                        <span>Formations</span>\r
                      </a>\r
                      <a class="dropdown-item" [routerLink]="routes.superadmin_dashboard">\r
                        <i class="isax isax-element-4 me-2"></i>\r
                        <span>Tableau de bords Admin</span>\r
                      </a>\r
                      <a class="dropdown-item" [routerLink]="routes.superadminSettings">\r
                      <i class="isax isax-setting-2 me-2"></i>\r
                      <span>Parametres</span>\r
                    </a>\r
                    </ng-container>\r
\r
                    <!-- Instructor Menu -->\r
                    <ng-container *ngIf="currentUser?.role_id === 3">\r
                      <a class="dropdown-item" [routerLink]="routes.instructorCourse">\r
                        <i class="isax isax-book-1 me-2"></i>\r
                        <span>Mes Formations</span>\r
                      </a>\r
                         <a class="dropdown-item" [routerLink]="routes.instructorProfile">\r
                      <i class="isax isax-security-user me-2"></i>\r
                      <span>Mon Profil</span>\r
                    </a>\r
\r
                      <a class="dropdown-item" [routerLink]="routes.instructorSettings">\r
                      <i class="isax isax-setting-2 me-2"></i>\r
                      <span>Parametres</span>\r
                    </a>\r
                    </ng-container>\r
\r
                    <!-- Student Menu -->\r
                    <ng-container *ngIf="currentUser?.role_id === 2">\r
                       <!--<a class="dropdown-item" [routerLink]="routes.instructorCourse">\r
                        <i class="isax isax-element-4 me-2"></i>\r
                        <span>Tableau de Bord</span>\r
                      </a> \r
                      -->\r
                      <a class="dropdown-item" [routerLink]="routes.students_profile">\r
                        <i class="isax isax-security-user"></i>\r
                        <span>Mon Profile</span>\r
                      </a>\r
                      <!--<a class="dropdown-item" [routerLink]="routes.instructorCourse">\r
                         <i class="isax isax-book-1 me-2"></i>\r
                        <span>Mes Formations</span>\r
                      </a>\r
                      -->\r
                       <a class="dropdown-item" [routerLink]="routes.instructorCourse">\r
                        <i class="isax isax-setting-2 me-2"></i>\r
                        <span>Centre d'aide</span>\r
                      </a>\r
                    </ng-container>\r
\r
                          <!-- Rh Menu -->\r
                  <ng-container *ngIf="isRhUser()">\r
                      <a class="dropdown-item" [routerLink]="routes.adminrh_dashboard">\r
                        <i class="isax isax-element-4 me-2"></i>\r
                        <span>Tableau de bord RH</span>\r
                      </a>\r
                      <a class="dropdown-item" [routerLink]="routes.adminrhUserList">\r
                        <i class="isax isax-user-add me-2"></i>\r
                        <span>Gestion utilisateurs</span>\r
                      </a>\r
                      <a class="dropdown-item" [routerLink]="routes.adminrhCourse">\r
                        <i class="isax isax-teacher5 me-2"></i>\r
                        <span>Formations</span>\r
                      </a>\r
                      <a class="dropdown-item" [routerLink]="routes.adminrhSettings">\r
                        <i class="isax isax-setting-2 me-2"></i>\r
                        <span>Param\xE8tres</span>\r
                      </a>\r
                    </ng-container>\r
\r
                    <!-- Common Menu Items -->\r
                    <a class="dropdown-item" [routerLink]="routes.instructorCourse">\r
                      <i class="isax isax-messages-3 me-2"></i>\r
                      <span>Messages</span>\r
                      <span *ngIf="currentUser?.role_id === 3" class="badge bg-danger ms-auto">2</span>\r
                    </a>\r
                    <!-- <a class="dropdown-item" [routerLink]="getSettingsRoute()">\r
                      <i class="isax isax-setting-2 me-2"></i>\r
                      <span>Parametres</span>\r
                    </a> -->\r
                  </div>\r
\r
                  <div class="dropdown-divider"></div>\r
\r
                  <!-- Profile Footer -->\r
                  <div class="profile-menu-footer">\r
                    <!-- Mode apprenant (RH uniquement) -->\r
                    <a *ngIf="isRhUser()" class="learner-mode-btn" [routerLink]="routes.students_Dashboard">\r
                      <span class="learner-mode-btn__icon"><i class="isax isax-user-octagon"></i></span>\r
                      <span class="learner-mode-btn__text">\r
                        <span class="learner-mode-btn__label">Mode apprenant</span>\r
                        <span class="learner-mode-btn__sub">Acc\xE9der \xE0 votre espace employ\xE9</span>\r
                      </span>\r
                      <i class="isax isax-arrow-right-3 learner-mode-btn__arrow"></i>\r
                    </a>\r
\r
                    <!-- Mode formateur (RH uniquement) -->\r
                    <a *ngIf="isRhUser()" class="trainer-mode-btn" [routerLink]="routes.instructor_dashboard">\r
                      <span class="trainer-mode-btn__icon"><i class="isax isax-teacher"></i></span>\r
                      <span class="trainer-mode-btn__text">\r
                        <span class="trainer-mode-btn__label">Mode formateur</span>\r
                        <span class="trainer-mode-btn__sub">Cr\xE9er et g\xE9rer des formations</span>\r
                      </span>\r
                      <i class="isax isax-arrow-right-3 trainer-mode-btn__arrow"></i>\r
                    </a>\r
\r
                    <!-- Logout Button -->\r
                    <button type="button" class="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center mt-2" (click)="logout()">\r
                      <i class="isax isax-logout me-2"></i>\r
                      <span>D\xE9connexion</span>\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Login Buttons -->\r
            <div *ngIf="!isLoggedIn" class="header-item">\r
              <div class="auth-buttons d-flex align-items-center">\r
                <a [routerLink]="routes.login" class="btn btn-outline-primary btn-sm me-2">\r
                  <i class="isax isax-login me-1"></i>\r
                  <span>Se connecter</span>\r
                </a>\r
                <!-- <a [routerLink]="routes.register" class="btn btn-primary btn-sm">\r
                  <i class="isax isax-user-add me-1"></i>\r
                  <span>Register</span>\r
                </a> -->\r
              </div>\r
            </div>\r
\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</header>`, styles: ["/* src/app/features/layouts/admin-header/admin-header.component.scss */\n:root {\n  --primary-color: #006F78;\n  --secondary-color: #D4AF37;\n  --primary-light: rgba(0, 111, 120, 0.1);\n  --secondary-light: rgba(212, 175, 55, 0.1);\n}\n.header-wrapper {\n  background: var(--bs-white);\n  border-bottom: 1px solid var(--bs-border-color);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n  position: sticky;\n  top: 0;\n  z-index: 1020;\n  transition: all 0.3s ease;\n}\n.header-wrapper .header-content {\n  padding: 1rem 0;\n  min-height: 70px;\n}\n.header-brand .brand-logo {\n  text-decoration: none;\n  color: var(--bs-dark);\n  transition: opacity 0.3s ease;\n}\n.header-brand .brand-logo:hover {\n  opacity: 0.8;\n}\n.header-brand .brand-logo .logo-img {\n  height: 40px;\n  width: auto;\n}\n.header-brand .brand-logo .brand-text {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #006F78;\n}\n.header-actions {\n  gap: 0.5rem;\n}\n.header-actions .header-item {\n  display: flex;\n  align-items: center;\n}\n.theme-switcher {\n  background: var(--bs-light);\n  border-radius: 25px;\n  padding: 3px;\n}\n.theme-switcher .theme-toggle-btn {\n  background: transparent;\n  border: none;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  color: var(--bs-secondary);\n}\n.theme-switcher .theme-toggle-btn:hover {\n  background: var(--bs-white);\n  color: #006F78;\n}\n.theme-switcher .theme-toggle-btn.active {\n  background: #006F78;\n  color: var(--bs-white);\n  box-shadow: 0 2px 4px rgba(0, 111, 120, 0.3);\n}\n.theme-switcher .theme-toggle-btn i {\n  font-size: 1.2rem;\n}\n.header-icon-btn {\n  background: transparent;\n  border: none;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.3s ease;\n  color: var(--bs-dark);\n  text-decoration: none;\n}\n.header-icon-btn:hover {\n  background: var(--primary-light);\n  color: #006F78;\n  transform: translateY(-1px);\n}\n.header-icon-btn i {\n  font-size: 1.4rem;\n}\n.header-icon-btn .notification-badge,\n.header-icon-btn .cart-badge {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  background: #D4AF37;\n  color: var(--bs-white);\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 600;\n  border: 2px solid var(--bs-white);\n}\n.profile-dropdown .profile-btn {\n  background: transparent;\n  border: 1px solid var(--bs-border-color);\n  border-radius: 50px;\n  padding: 0.4rem 0.8rem;\n  display: flex;\n  align-items: center;\n  transition: all 0.3s ease;\n  color: var(--bs-dark);\n  min-width: 120px;\n}\n.profile-dropdown .profile-btn:hover {\n  border-color: #006F78;\n  background: var(--primary-light);\n}\n.profile-dropdown .profile-btn:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 111, 120, 0.25);\n}\n.profile-dropdown .profile-avatar .avatar-img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #D4AF37;\n}\n.profile-dropdown .profile-info {\n  text-align: left;\n}\n.profile-dropdown .profile-info .profile-name {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--bs-dark);\n  margin-bottom: 0;\n}\n.profile-dropdown .profile-info .profile-role {\n  display: block;\n  font-size: 0.75rem;\n  color: #D4AF37;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n.profile-menu {\n  min-width: 280px;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  border-radius: 12px;\n  padding: 0;\n  margin-top: 0.5rem;\n}\n.profile-menu .profile-menu-header {\n  padding: 1.5rem 1.5rem 1rem;\n  background: linear-gradient(135deg, #006F78);\n  border-radius: 12px 12px 0 0;\n}\n.profile-menu .profile-menu-header .profile-avatar .avatar-img {\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n}\n.profile-menu .profile-menu-header .profile-details .profile-name {\n  color: var(--bs-white);\n  font-weight: 600;\n  font-size: 1rem;\n}\n.profile-menu .profile-menu-header .profile-details .profile-email {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.8rem;\n}\n.profile-menu .profile-menu-header .profile-details .badge {\n  color: var(--bs-white);\n}\n.profile-menu .profile-menu-body {\n  padding: 0.5rem 0;\n}\n.profile-menu .profile-menu-body .dropdown-item {\n  padding: 0.75rem 1.5rem;\n  display: flex;\n  align-items: center;\n  color: var(--bs-dark);\n  transition: all 0.3s ease;\n}\n.profile-menu .profile-menu-body .dropdown-item:hover {\n  background: var(--primary-light);\n  color: #006F78;\n  transform: translateX(5px);\n}\n.profile-menu .profile-menu-body .dropdown-item i {\n  width: 20px;\n  font-size: 1.1rem;\n  color: var(--bs-secondary);\n}\n.profile-menu .profile-menu-body .dropdown-item:hover i {\n  color: #006F78;\n}\n.profile-menu .profile-menu-body .dropdown-item .badge {\n  font-size: 0.7rem;\n  background: #D4AF37 !important;\n  color: var(--bs-white);\n}\n.profile-menu .profile-menu-footer {\n  padding: 1rem 1.5rem;\n  background: var(--bs-light);\n  border-radius: 0 0 12px 12px;\n}\n.profile-menu .profile-menu-footer .btn {\n  font-size: 0.9rem;\n  padding: 0.6rem 1rem;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  border-color: #006F78;\n}\n.profile-menu .profile-menu-footer .btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 111, 120, 0.2);\n  background: #006F78;\n  border-color: #006F78;\n}\n.learner-mode-btn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  margin-bottom: 6px;\n  border-radius: 10px;\n  text-decoration: none;\n  transition: all 0.18s ease;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      #ecfdf5,\n      #d1fae5);\n  border: 1px solid #6ee7b7;\n}\n.learner-mode-btn:hover {\n  transform: translateY(-1px);\n}\n.learner-mode-btn__icon {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 16px;\n}\n.learner-mode-btn__text {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.learner-mode-btn__label {\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.learner-mode-btn__sub {\n  font-size: 11px;\n  line-height: 1.2;\n}\n.learner-mode-btn__arrow {\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.learner-mode-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5,\n      #a7f3d0);\n  border-color: #34d399;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);\n}\n.learner-mode-btn__icon {\n  background: #10b981;\n}\n.learner-mode-btn__label {\n  color: #065f46;\n}\n.learner-mode-btn__sub {\n  color: #059669;\n}\n.learner-mode-btn__arrow {\n  color: #10b981;\n}\n.trainer-mode-btn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  margin-bottom: 6px;\n  border-radius: 10px;\n  text-decoration: none;\n  transition: all 0.18s ease;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f3ff,\n      #ede9fe);\n  border: 1px solid #c4b5fd;\n}\n.trainer-mode-btn:hover {\n  transform: translateY(-1px);\n}\n.trainer-mode-btn__icon {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 16px;\n}\n.trainer-mode-btn__text {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.trainer-mode-btn__label {\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.trainer-mode-btn__sub {\n  font-size: 11px;\n  line-height: 1.2;\n}\n.trainer-mode-btn__arrow {\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.trainer-mode-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe,\n      #ddd6fe);\n  border-color: #a78bfa;\n  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);\n}\n.trainer-mode-btn__icon {\n  background: #8b5cf6;\n}\n.trainer-mode-btn__label {\n  color: #3b0764;\n}\n.trainer-mode-btn__sub {\n  color: #7c3aed;\n}\n.trainer-mode-btn__arrow {\n  color: #8b5cf6;\n}\n.auth-buttons .btn {\n  border-radius: 25px;\n  padding: 0.5rem 1.2rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.auth-buttons .btn.btn-outline-primary {\n  border-color: #006F78;\n  color: #006F78;\n}\n.auth-buttons .btn.btn-outline-primary:hover {\n  background: #006F78;\n  border-color: #006F78;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 111, 120, 0.2);\n}\n.auth-buttons .btn.btn-primary {\n  background: #D4AF37;\n  border-color: #D4AF37;\n}\n.auth-buttons .btn.btn-primary:hover {\n  background: #c19b2f;\n  border-color: #c19b2f;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(212, 175, 55, 0.3);\n}\n.auth-buttons .btn i {\n  font-size: 0.9rem;\n}\n.notification-dropdown {\n  min-width: 320px;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  border-radius: 12px;\n  margin-top: 0.5rem;\n}\n.notification-dropdown .dropdown-header {\n  padding: 1rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-light),\n      var(--secondary-light));\n  border-radius: 12px 12px 0 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.notification-dropdown .dropdown-header h6 {\n  margin: 0;\n  font-weight: 600;\n  color: #006F78;\n}\n.notification-dropdown .dropdown-header .badge {\n  background: #D4AF37 !important;\n  color: var(--bs-white);\n}\n.dark-mode .header-wrapper {\n  background: #1a1a1a;\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.dark-mode .header-wrapper .brand-text {\n  color: #D4AF37;\n}\n.dark-mode .header-wrapper .header-icon-btn,\n.dark-mode .header-wrapper .profile-name,\n.dark-mode .header-wrapper .profile-btn {\n  color: var(--bs-white);\n}\n.dark-mode .header-wrapper .profile-role {\n  color: #D4AF37;\n}\n.dark-mode .header-wrapper .header-icon-btn:hover {\n  background: rgba(0, 111, 120, 0.2);\n  color: #D4AF37;\n}\n.dark-mode .header-wrapper .profile-btn:hover {\n  background: rgba(0, 111, 120, 0.1);\n  border-color: #D4AF37;\n}\n.dark-mode .header-wrapper .theme-switcher {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode .header-wrapper .theme-switcher .theme-toggle-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #D4AF37;\n}\n.dark-mode .header-wrapper .theme-switcher .theme-toggle-btn.active {\n  background: #D4AF37;\n  color: #1a1a1a;\n}\n@media (max-width: 768px) {\n  .header-wrapper .header-content {\n    padding: 0.75rem 0;\n  }\n  .header-wrapper .header-content .brand-text {\n    display: none;\n  }\n  .header-wrapper .header-content .header-actions {\n    gap: 0.25rem;\n  }\n  .header-wrapper .header-content .header-actions .header-item {\n    margin-right: 0.5rem !important;\n  }\n  .header-wrapper .header-content .auth-buttons .btn span {\n    display: none;\n  }\n  .profile-menu {\n    min-width: 260px;\n    margin-right: 1rem;\n  }\n  .notification-dropdown {\n    min-width: 280px;\n    margin-right: 1rem;\n  }\n}\n/*# sourceMappingURL=admin-header.component.css.map */\n"] }]
  }], () => [{ type: CommonService }, { type: DataService }, { type: SidebarService }, { type: Renderer2 }, { type: AuthService }, { type: Router }], { menuElement: [{
    type: ViewChild,
    args: ["stickyMenu"]
  }], base: [{
    type: Input
  }], onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminHeaderComponent, { className: "AdminHeaderComponent", filePath: "app/features/layouts/admin-header/admin-header.component.ts", lineNumber: 18 });
})();

export {
  SidebarService,
  HeaderComponent,
  AdminHeaderComponent
};
//# sourceMappingURL=chunk-B5YUSY7B.js.map
