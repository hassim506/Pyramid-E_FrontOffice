import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/user-details/user-details.component.ts
var UserDetailsComponent = class _UserDetailsComponent {
  static \u0275fac = function UserDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDetailsComponent, selectors: [["app-user-details"]], decls: 2, vars: 0, template: function UserDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "user-details works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-user-details", imports: [], template: "<p>user-details works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDetailsComponent, { className: "UserDetailsComponent", filePath: "app/features/superadmin/user-details/user-details.component.ts", lineNumber: 9 });
})();
export {
  UserDetailsComponent
};
//# sourceMappingURL=chunk-VHZIMQII.js.map
