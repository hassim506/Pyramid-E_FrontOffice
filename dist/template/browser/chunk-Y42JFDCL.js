import {
  routes
} from "./chunk-37V3B3KY.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-UFFO2UKW.js";
import "./chunk-U7UKDAOZ.js";
import "./chunk-EGNJBGKD.js";
import "./chunk-I2HNPZHV.js";
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
} from "./chunk-BSBCM3BI.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/settings/settings.component.ts
var SettingsComponent = class _SettingsComponent {
  routes = routes;
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 29, vars: 8, consts: [[1, "mb-3"], [1, "settings-nav", "d-flex", "align-items-center", "flex-wrap", "border", "bg-light-900", "rounded"], ["routerLinkActive", "active", 3, "routerLink"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "ul", 1)(4, "li")(5, "a", 2);
      \u0275\u0275text(6, "Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "li")(8, "a", 2);
      \u0275\u0275text(9, "Security");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 2);
      \u0275\u0275text(12, "Plans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 2);
      \u0275\u0275text(15, "Social Profiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 2);
      \u0275\u0275text(18, "Linked Accounts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "a", 2);
      \u0275\u0275text(21, "Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 2);
      \u0275\u0275text(24, "Integrations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li")(26, "a", 2);
      \u0275\u0275text(27, "Withdraw");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(28, "router-outlet");
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorSettings);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorChangePassword);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorPlans);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorSocialProfiles);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorLinkedAccounts);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorSettingNotifications);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorIntegrations);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorSettingWithdraw);
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", imports: [RouterModule, RouterLinkActive], template: '<div class="mb-3">\r\n    <h5>Settings</h5>\r\n</div>				\r\n    <ul class="settings-nav d-flex align-items-center flex-wrap border bg-light-900 rounded">\r\n        <li><a [routerLink]="routes.instructorSettings" routerLinkActive="active">Profile</a></li>\r\n        <li><a [routerLink]="routes.instructorChangePassword" routerLinkActive="active">Security</a></li>\r\n        <li><a [routerLink]="routes.instructorPlans" routerLinkActive="active">Plans</a></li>\r\n        <li><a [routerLink]="routes.instructorSocialProfiles" routerLinkActive="active">Social Profiles</a></li>\r\n        <li><a [routerLink]="routes.instructorLinkedAccounts" routerLinkActive="active">Linked Accounts</a></li>\r\n        <li><a [routerLink]="routes.instructorSettingNotifications" routerLinkActive="active">Notifications</a></li>\r\n        <li><a [routerLink]="routes.instructorIntegrations" routerLinkActive="active">Integrations</a></li>\r\n        <li><a [routerLink]="routes.instructorSettingWithdraw" routerLinkActive="active">Withdraw</a></li>\r\n    </ul>\r\n\r\n<router-outlet></router-outlet> \r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "app/features/instructor/settings/settings.component.ts", lineNumber: 11 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-Y42JFDCL.js.map
