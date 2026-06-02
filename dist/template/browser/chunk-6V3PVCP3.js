import {
  AdminHeaderComponent,
  HeaderComponent,
  SidebarService
} from "./chunk-QEG2MLQ7.js";
import {
  CommonService
} from "./chunk-NVY3W4TG.js";
import "./chunk-SNOA42FF.js";
import "./chunk-FKX6UC3I.js";
import "./chunk-WI4QPEBR.js";
import {
  SlickCarouselModule
} from "./chunk-BLAN2R2X.js";
import "./chunk-TYVQP4CB.js";
import {
  FormsModule
} from "./chunk-45DOGZAU.js";
import {
  NavigationStart,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgClass
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  HostListener,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵresolveWindow
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/features.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "home-3": a0, "home-4": a1, "home-five": a2, "index-six": a3 });
var FeaturesComponent = class _FeaturesComponent {
  Router;
  sidebar;
  common;
  sidebarService;
  showMiniSidebar = false;
  base = "";
  page = "";
  last = "";
  isuserHeader;
  themeMode = "";
  darkTheme = false;
  isAdminHeader;
  showDark = false;
  mainFooter;
  routeStatus;
  routeStatusSub;
  renderer;
  showBackToTop = false;
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 200;
  }
  // Scroll to the top of the page
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  constructor(Router2, sidebar, common, sidebarService) {
    this.Router = Router2;
    this.sidebar = sidebar;
    this.common = common;
    this.sidebarService = sidebarService;
    this.common.base.subscribe((res) => {
      this.base = res;
      this.scrollToTop();
    });
    this.common.page.subscribe((res) => {
      this.page = res;
      this.scrollToTop();
    });
    this.common.last.subscribe((res) => {
      this.last = res;
    });
    this.Router.events.subscribe((data) => {
      if (data instanceof NavigationStart) {
        this.setRouting(data);
      }
    });
    this.setRouting(this.Router);
    this.common.isAdminHeader.subscribe((res) => {
      this.isAdminHeader = res;
    });
    this.common.isuserHeader.subscribe((res) => {
      this.isuserHeader = res;
    });
    this.common.mainFooter.subscribe((res) => {
      this.mainFooter = res;
    });
    this.sidebar.toogleSidebar.subscribe((res) => {
      if (res == "true") {
        this.showMiniSidebar = true;
      } else {
        this.showMiniSidebar = false;
      }
    });
  }
  setRouting(data) {
    this.routeStatus = data.url.split("/")[1];
    this.routeStatusSub = data.url.split("/")[2];
    this.common.base.next(data.url.split("/")[1]);
    this.common.page.next(data.url.split("/")[2]);
    this.common.last.next(data.url.split("/")[3]);
    if (this.routeStatus == "index" || this.routeStatus == "index-two" || this.routeStatus == "index-three" || this.routeStatus == "index-four" || this.routeStatus == "index-five" || this.routeStatus == "index-six") {
      this.common.isuserHeader.next(true);
      this.common.isAdminHeader.next(false);
      this.common.mainFooter.next(false);
    } else {
      this.common.mainFooter.next(true);
    }
    if (this.routeStatus == "adminrh" || this.routeStatus == "student") {
      this.common.isuserHeader.next(false);
      this.common.isAdminHeader.next(true);
    } else {
      this.common.isuserHeader.next(true);
      this.common.isAdminHeader.next(false);
    }
  }
  ngOnDestroy() {
    this.sidebarService.changeThemeColor("light-mode");
  }
  static \u0275fac = function FeaturesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturesComponent, selectors: [["app-features"]], hostBindings: function FeaturesComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function FeaturesComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 4, vars: 6, consts: [[1, "main-wrapper", 3, "ngClass"], [1, "page-content"]], template: function FeaturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-admin-header");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(1, _c0, ctx.base === "index-three", ctx.base === "index-four", ctx.base === "index-five", ctx.base === "index-six"));
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterOutlet, AdminHeaderComponent, SlickCarouselModule, FormsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesComponent, [{
    type: Component,
    args: [{ selector: "app-features", imports: [CommonModule, RouterModule, HeaderComponent, AdminHeaderComponent, SlickCarouselModule, FormsModule], template: `<!-- Main Wrapper -->
<div
  class="main-wrapper"
  [ngClass]="{
     'home-3':base==='index-three','home-4':base==='index-four' ,'home-five':base==='index-five','index-six':base==='index-six'
  }">

    <!-- @if (isuserHeader) {
      <app-header></app-header>
    }

    @if (isAdminHeader) { -->
      <app-admin-header></app-admin-header>
    <!-- } -->
    <div class="page-content">
      <router-outlet></router-outlet>
    </div>


</div>
` }]
  }], () => [{ type: Router }, { type: SidebarService }, { type: CommonService }, { type: SidebarService }], { onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturesComponent, { className: "FeaturesComponent", filePath: "src/app/features/features.component.ts", lineNumber: 18 });
})();
export {
  FeaturesComponent
};
//# sourceMappingURL=chunk-6V3PVCP3.js.map
