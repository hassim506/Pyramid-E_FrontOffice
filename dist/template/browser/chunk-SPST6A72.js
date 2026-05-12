import {
  PermissionService
} from "./chunk-B4O6F2DF.js";
import {
  Router
} from "./chunk-AJNKO2CX.js";
import {
  Directive,
  Injectable,
  Input,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-UPBSS6WA.js";

// src/app/directive/has-permission-directive.directive.ts
var HasPermissionDirective = class _HasPermissionDirective {
  templateRef;
  viewContainer;
  permissionService;
  constructor(templateRef, viewContainer, permissionService) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.permissionService = permissionService;
  }
  set appHasPermission(permission) {
    if (this.permissionService.hasPermission(permission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  static \u0275fac = function HasPermissionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HasPermissionDirective)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(PermissionService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HasPermissionDirective, selectors: [["", "appHasPermission", ""]], inputs: { appHasPermission: "appHasPermission" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HasPermissionDirective, [{
    type: Directive,
    args: [{
      selector: "[appHasPermission]"
    }]
  }], () => [{ type: TemplateRef }, { type: ViewContainerRef }, { type: PermissionService }], { appHasPermission: [{
    type: Input
  }] });
})();

// src/app/shared/service/role/role-redirect.service.ts
var RoleRedirectService = class _RoleRedirectService {
  router;
  constructor(router) {
    this.router = router;
  }
  redirectByRole(roleId) {
    switch (roleId) {
      case 1:
        this.router.navigate(["/superadmin/superadmin-dashboard"]);
        break;
      case 2:
        this.router.navigate(["/index"]);
        break;
      case 3:
        this.router.navigate(["/index-three"]);
        break;
      case 4:
        this.router.navigate(["/index-two"]);
        break;
      case 5:
        this.router.navigate(["/adminrh/adminrh-dashboard"]);
        break;
      case 14:
        this.router.navigate(["/superadmin/superadmin-dashboard"]);
        break;
      default:
        this.router.navigate(["/auth/login"]);
        break;
    }
  }
  // Méthode pour rediriger vers le dashboard approprié (après connexion réussie)
  redirectToDashboard(roleId) {
    switch (roleId) {
      case 1:
        this.router.navigate(["/superadmin/superadmin-dashboard"]);
        break;
      case 2:
        this.router.navigate(["/student/student-dashboard"]);
        break;
      case 3:
        this.router.navigate(["/instructor/instructor-dashboard"]);
        break;
      case 4:
        this.router.navigate(["/adminrh/adminrh-dashboard"]);
        break;
      case 5:
        this.router.navigate(["/adminrh/adminrh-dashboard"]);
        break;
      case 14:
        this.router.navigate(["/superadmin/superadmin-dashboard"]);
        break;
      default:
        this.router.navigate(["/auth/login"]);
        break;
    }
  }
  // Méthode pour obtenir la route par défaut selon le rôle
  getDefaultRouteByRole(roleId) {
    switch (roleId) {
      case 1:
        return "/superadmin/superadmin-dashboard";
      case 2:
        return "/student/student-dashboard";
      case 3:
        return "/instructor/instructor-dashboard";
      case 4:
        return "/adminrh/adminrh-dashboard";
      case 5:
        return "/adminrh/adminrh-dashboard";
      case 14:
        return "/superadmin/superadmin-dashboard";
      default:
        return "/auth/login";
    }
  }
  // Méthode alternative avec nom de rôle
  redirectByRoleName(roleName) {
    const lowerRole = roleName.toLowerCase();
    switch (lowerRole) {
      case "super admin":
        this.router.navigate(["/superadmin/superadmin-dashboard"]);
        break;
      case "employ\xE9":
      case "employee":
        this.router.navigate(["/index"]);
        break;
      case "formateur":
      case "trainer":
        this.router.navigate(["/index-three"]);
        break;
      case "responsable rh":
      case "responsable_rh":
        this.router.navigate(["/index-two"]);
        break;
      case "administrateur rh holding":
        this.router.navigate(["/adminrh/adminrh-dashboard"]);
        break;
      case "super admin rh holding":
        this.router.navigate(["/superadmin/superadmin-dashboard"]);
        break;
      default:
        this.router.navigate(["/auth/login"]);
        break;
    }
  }
  // Méthode pour vérifier si un utilisateur a les permissions d'accès
  canAccessRoute(roleId, targetRoute) {
    const allowedRoutes = this.getAllowedRoutesByRole(roleId);
    return allowedRoutes.some((route) => targetRoute.startsWith(route));
  }
  // Méthode privée pour obtenir les routes autorisées par rôle
  getAllowedRoutesByRole(roleId) {
    switch (roleId) {
      case 1:
        return ["/superadmin", "/adminrh", "/instructor", "/student"];
      case 2:
        return ["/student", "/index"];
      case 3:
        return ["/instructor", "/index-three"];
      case 4:
        return ["/adminrh", "/index-two"];
      case 5:
        return ["/adminrh", "/superadmin"];
      case 14:
        return ["/superadmin", "/adminrh"];
      default:
        return ["/auth"];
    }
  }
  static \u0275fac = function RoleRedirectService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleRedirectService)(\u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleRedirectService, factory: _RoleRedirectService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleRedirectService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }], null);
})();

export {
  HasPermissionDirective,
  RoleRedirectService
};
//# sourceMappingURL=chunk-SPST6A72.js.map
