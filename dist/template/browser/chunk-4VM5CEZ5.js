import {
  routes
} from "./chunk-YJLHMFCU.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule
} from "./chunk-MNWNTO2T.js";
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
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/settings/settings.component.ts
var SettingsComponent = class _SettingsComponent {
  routes = routes;
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 23, vars: 6, consts: [[1, "mb-3"], [1, "settings-nav", "d-flex", "align-items-center", "flex-wrap", "border", "bg-light-900", "rounded"], ["routerLinkActive", "active", 3, "routerLink"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "ul", 1)(4, "li")(5, "a", 2);
      \u0275\u0275text(6, "Edit Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "li")(8, "a", 2);
      \u0275\u0275text(9, "Security");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 2);
      \u0275\u0275text(12, "Social Profiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 2);
      \u0275\u0275text(15, "Linked Accounts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 2);
      \u0275\u0275text(18, "Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "a", 2);
      \u0275\u0275text(21, "Billing Address");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(22, "router-outlet");
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentSettings);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentChangePassword);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.students_social_profile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentLinkedAccount);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentNotification);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentBillingAddress);
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", imports: [CommonModule, RouterModule, RouterLinkActive], template: '\r\n<div class="mb-3">\r\n    <h5>Settings</h5>\r\n</div>				\r\n    <ul class="settings-nav d-flex align-items-center flex-wrap border bg-light-900 rounded">\r\n        <li><a [routerLink]="routes.studentSettings" routerLinkActive="active">Edit Profile</a></li>\r\n        <li><a [routerLink]="routes.studentChangePassword" routerLinkActive="active">Security</a></li>\r\n        <li><a [routerLink]="routes.students_social_profile" routerLinkActive="active">Social Profiles</a></li>\r\n        <li><a [routerLink]="routes.studentLinkedAccount" routerLinkActive="active">Linked Accounts</a></li>\r\n        <li><a [routerLink]="routes.studentNotification" routerLinkActive="active">Notifications</a></li>\r\n        <li><a [routerLink]="routes.studentBillingAddress" routerLinkActive="active">Billing Address</a></li>\r\n    </ul>\r\n<router-outlet></router-outlet>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "app/features/student/settings/settings.component.ts", lineNumber: 12 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-4VM5CEZ5.js.map
