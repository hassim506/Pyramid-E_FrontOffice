import {
  routes
} from "./chunk-F53JZPBU.js";
import {
  RouterLink
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/error/error404/error404.component.ts
var Error404Component = class _Error404Component {
  routes = routes;
  static \u0275fac = function Error404Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Error404Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Error404Component, selectors: [["app-error404"]], decls: 23, vars: 2, consts: [[1, "error-page", "min-vh-100"], [1, "main-wrapper"], [1, "error-box"], ["src", "assets/img/error/img-01.svg", "alt", "img", 1, "img-fluid", "bg-01"], ["src", "assets/img/error/img-02.svg", "alt", "img", 1, "img-fluid", "bg-02"], ["src", "assets/img/error/img-03.svg", "alt", "img", 1, "img-fluid", "bg-03"], ["src", "assets/img/error/img-04.svg", "alt", "img", 1, "img-fluid", "bg-04"], ["src", "assets/img/error/img-05.svg", "alt", "img", 1, "img-fluid", "bg-05"], ["src", "assets/img/error/img-06.svg", "alt", "img", 1, "img-fluid", "bg-06"], [1, "error-logo"], [3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "error-box-img"], ["src", "assets/img/error/error-01.svg", "alt", "Img", 1, "img-fluid"], [1, "h2", "mb-3"], [1, "text-secondary", "ms-1"], [1, "h4", "font-weight-normal"], [1, "btn", "back-to-home-btn", 3, "routerLink"], [1, "isax", "isax-arrow-left-2", "me-1"]], template: function Error404Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3)(4, "img", 4)(5, "img", 5)(6, "img", 6)(7, "img", 7)(8, "img", 8);
      \u0275\u0275elementStart(9, "div", 9)(10, "a", 10);
      \u0275\u0275element(11, "img", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 12);
      \u0275\u0275element(13, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h3", 14);
      \u0275\u0275text(15, " Oh No! Error ");
      \u0275\u0275elementStart(16, "span", 15);
      \u0275\u0275text(17, "404");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "p", 16);
      \u0275\u0275text(19, " This page you requested counld not found. May the force be with you! ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 17);
      \u0275\u0275element(21, "i", 18);
      \u0275\u0275text(22, " Back to Home");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.home);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Error404Component, [{
    type: Component,
    args: [{ selector: "app-error404", imports: [CommonModule, RouterLink], template: '<div class="error-page min-vh-100">\r\n  <div class="main-wrapper">\r\n    <div class="error-box">\r\n      <img src="assets/img/error/img-01.svg" alt="img" class="img-fluid bg-01" />\r\n      <img src="assets/img/error/img-02.svg" alt="img" class="img-fluid bg-02" />\r\n      <img src="assets/img/error/img-03.svg" alt="img" class="img-fluid bg-03" />\r\n      <img src="assets/img/error/img-04.svg" alt="img" class="img-fluid bg-04" />\r\n      <img src="assets/img/error/img-05.svg" alt="img" class="img-fluid bg-05" />\r\n      <img src="assets/img/error/img-06.svg" alt="img" class="img-fluid bg-06" />\r\n      <div class="error-logo">\r\n        <a [routerLink]="routes.home">\r\n          <img src="assets/img/logo.svg" class="img-fluid" alt="Logo" />\r\n        </a>\r\n      </div>\r\n      <div class="error-box-img">\r\n        <img src="assets/img/error/error-01.svg" alt="Img" class="img-fluid" />\r\n      </div>\r\n      <h3 class="h2 mb-3">\r\n        Oh No! Error <span class="text-secondary ms-1">404</span>\r\n      </h3>\r\n      <p class="h4 font-weight-normal">\r\n        This page you requested counld not found. May the force be with you!\r\n      </p>\r\n      <a [routerLink]="routes.home" class="btn back-to-home-btn"\r\n        ><i class="isax isax-arrow-left-2 me-1"></i> Back to Home</a\r\n      >\r\n    </div>\r\n  </div>\r\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Error404Component, { className: "Error404Component", filePath: "app/error/error404/error404.component.ts", lineNumber: 12 });
})();
export {
  Error404Component
};
//# sourceMappingURL=chunk-KWV4UVY6.js.map
