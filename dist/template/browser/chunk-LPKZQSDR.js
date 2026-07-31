import {
  PermissionService
} from "./chunk-MFYPUOQJ.js";
import {
  AuthService
} from "./chunk-I3LFGWFR.js";
import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdirectiveInject
} from "./chunk-BSBCM3BI.js";

// src/app/directive/has-permission-directive.directive.ts
var HasPermissionDirective = class _HasPermissionDirective {
  templateRef;
  viewContainer;
  permissionService;
  authService;
  permission = "";
  sub;
  constructor(templateRef, viewContainer, permissionService, authService) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.permissionService = permissionService;
    this.authService = authService;
  }
  set appHasPermission(permission) {
    this.permission = permission;
    this.updateView();
  }
  ngOnInit() {
    this.sub = this.authService.permissions$.subscribe(() => this.updateView());
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  updateView() {
    if (this.permissionService.hasPermission(this.permission)) {
      if (!this.viewContainer.length) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    } else {
      this.viewContainer.clear();
    }
  }
  static \u0275fac = function HasPermissionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HasPermissionDirective)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(PermissionService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HasPermissionDirective, selectors: [["", "appHasPermission", ""]], inputs: { appHasPermission: "appHasPermission" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HasPermissionDirective, [{
    type: Directive,
    args: [{
      selector: "[appHasPermission]",
      standalone: true
    }]
  }], () => [{ type: TemplateRef }, { type: ViewContainerRef }, { type: PermissionService }, { type: AuthService }], { appHasPermission: [{
    type: Input
  }] });
})();

export {
  HasPermissionDirective
};
//# sourceMappingURL=chunk-LPKZQSDR.js.map
