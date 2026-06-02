import {
  routes
} from "./chunk-TYVQP4CB.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import "./chunk-MNWNTO2T.js";
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

// src/app/features/adminrh/settings/settings.component.ts
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
      \u0275\u0275property("routerLink", ctx.routes.adminrhSettings);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.adminrhChangePassword);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.adminrhPlans);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.adminrhSocialProfiles);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.adminrhLinkedAccounts);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.adminrhSettingNotifications);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.adminrhIntegrations);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.adminrhSettingWithdraw);
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", imports: [RouterModule, RouterLinkActive], template: '<div class="mb-3">\n    <h5>Settings</h5>\n</div>				\n    <ul class="settings-nav d-flex align-items-center flex-wrap border bg-light-900 rounded">\n        <li><a [routerLink]="routes.adminrhSettings" routerLinkActive="active">Profile</a></li>\n        <li><a [routerLink]="routes.adminrhChangePassword" routerLinkActive="active">Security</a></li>\n        <li><a [routerLink]="routes.adminrhPlans" routerLinkActive="active">Plans</a></li>\n        <li><a [routerLink]="routes.adminrhSocialProfiles" routerLinkActive="active">Social Profiles</a></li>\n        <li><a [routerLink]="routes.adminrhLinkedAccounts" routerLinkActive="active">Linked Accounts</a></li>\n        <li><a [routerLink]="routes.adminrhSettingNotifications" routerLinkActive="active">Notifications</a></li>\n        <li><a [routerLink]="routes.adminrhIntegrations" routerLinkActive="active">Integrations</a></li>\n        <li><a [routerLink]="routes.adminrhSettingWithdraw" routerLinkActive="active">Withdraw</a></li>\n    </ul>\n\n<router-outlet></router-outlet> \n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/adminrh/settings/settings.component.ts", lineNumber: 11 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-AIYQYCBT.js.map
