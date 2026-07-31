import {
  AuthService
} from "./chunk-I3LFGWFR.js";
import {
  Router
} from "./chunk-UFFO2UKW.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BSBCM3BI.js";

// src/app/core/config/role-routing.config.ts
var ROLE_ROUTING = [
  {
    roleIds: [1],
    defaultRoute: "/superadmin/superadmin-user-list",
    layout: "superadmin"
  },
  {
    // Admin RH, Responsable RH, Admin Holding, Manager, + tout rôle créé par RH (type='rh')
    roleIds: [4, 5, 9, 14],
    defaultRoute: "/adminrh/adminrh-user-list",
    layout: "adminrh"
  },
  {
    // Formateur, Consultant, Gestionnaire de compte
    roleIds: [3, 6, 10, 13],
    defaultRoute: "/instructor/instructor-course-grid",
    layout: "formateur"
  },
  {
    roleIds: [2],
    defaultRoute: "/student/student-dashboard",
    layout: "employe"
  }
];
var LAYOUT_ROUTE_PREFIXES = {
  superadmin: ["/superadmin", "/student", "/instructor", "/courses"],
  adminrh: ["/adminrh", "/student", "/instructor", "/courses"],
  formateur: ["/instructor", "/student", "/courses"],
  employe: ["/student", "/courses"]
};

// src/app/core/services/role-redirect.service.ts
var RoleRedirectService = class _RoleRedirectService {
  router;
  authService;
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  // Résout la config pour un role_id donné.
  // Pour les rôles dynamiques créés par un AdminRH (non listés dans roleIds),
  // on se base sur le champ `type` retourné par le backend au login.
  resolveConfig(roleId, roleType, roleNames) {
    const numericRoleId = Number(roleId);
    const direct = ROLE_ROUTING.find((c) => c.roleIds.includes(numericRoleId));
    if (direct)
      return direct;
    if (roleType) {
      const layout = this.typeToLayout(roleType);
      if (layout) {
        const byType = ROLE_ROUTING.find((c) => c.layout === layout);
        if (byType)
          return byType;
      }
    }
    if (roleNames?.length) {
      for (const name of roleNames) {
        const layout = this.roleNameToLayout(name);
        if (layout) {
          const byName = ROLE_ROUTING.find((c) => c.layout === layout);
          if (byName)
            return byName;
        }
      }
    }
    return null;
  }
  // Redirige après connexion
  redirectAfterLogin(roleId, roleType, roleNames) {
    const user = this.authService.getUser();
    const names = roleNames ?? user?.roles ?? [];
    const config = this.resolveConfig(roleId, roleType, names);
    if (config) {
      this.router.navigate([config.defaultRoute]);
    } else {
      this.router.navigate(["/index"]);
    }
  }
  // Retourne le layout de l'utilisateur connecté
  getCurrentLayout() {
    const user = this.authService.getUser();
    if (!user)
      return null;
    const config = this.resolveConfig(user.role_id, user.role_type ?? user["role_type"], user.roles ?? []);
    return config?.layout ?? null;
  }
  // Vérifie qu'une URL appartient au layout de l'utilisateur connecté
  canAccessUrl(url) {
    const layout = this.getCurrentLayout();
    if (!layout)
      return false;
    if (layout === "superadmin")
      return true;
    const allowed = LAYOUT_ROUTE_PREFIXES[layout];
    return allowed.some((prefix) => url.startsWith(prefix));
  }
  // Retourne la route par défaut de l'utilisateur connecté
  getDefaultRoute() {
    const user = this.authService.getUser();
    if (!user)
      return "/auth/login";
    const config = this.resolveConfig(user.role_id, user.role_type, user.roles ?? []);
    return config?.defaultRoute ?? "/index";
  }
  typeToLayout(type) {
    const map = {
      rh: "adminrh",
      formateur: "formateur",
      employe: "employe",
      admin: "superadmin"
    };
    return map[type.toLowerCase()] ?? null;
  }
  roleNameToLayout(roleName) {
    const lower = roleName.toLowerCase();
    if (lower.includes("formateur") || lower.includes("consultant") || lower.includes("gestionnaire de contenu")) {
      return "formateur";
    }
    if (lower.includes("rh") || lower.includes("responsable") || lower.includes("manager")) {
      return "adminrh";
    }
    if (lower.includes("super admin") || lower.includes("superadmin") || lower.includes("admin")) {
      return "superadmin";
    }
    if (lower.includes("employ") || lower.includes("\xE9tudiant") || lower.includes("student")) {
      return "employe";
    }
    return null;
  }
  static \u0275fac = function RoleRedirectService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleRedirectService)(\u0275\u0275inject(Router), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleRedirectService, factory: _RoleRedirectService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleRedirectService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Router }, { type: AuthService }], null);
})();

export {
  RoleRedirectService
};
//# sourceMappingURL=chunk-3RV5TLTL.js.map
