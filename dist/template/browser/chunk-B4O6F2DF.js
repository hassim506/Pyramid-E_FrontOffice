import {
  AuthService
} from "./chunk-REZZRIDN.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-GSAJL664.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UPBSS6WA.js";

// src/app/shared/service/permission/permission.service.ts
var PermissionService = class _PermissionService {
  http;
  authService;
  apiUrl = "http://localhost:8000/api";
  // À adapter selon la configuration
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getHeaders() {
    const token = localStorage.getItem("pyramide_token");
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    });
  }
  // Récupérer toutes les permissions
  getAllPermissions() {
    return this.http.get(`${this.apiUrl}/permissions`, { headers: this.getHeaders() });
  }
  // Créer une nouvelle permission
  createPermission(permission) {
    return this.http.post(`${this.apiUrl}/permissions`, permission, { headers: this.getHeaders() });
  }
  // Mettre à jour une permission
  updatePermission(id, permission) {
    return this.http.put(`${this.apiUrl}/permissions/${id}`, permission, { headers: this.getHeaders() });
  }
  // Supprimer une permission
  deletePermission(id) {
    return this.http.delete(`${this.apiUrl}/permissions/${id}`, { headers: this.getHeaders() });
  }
  canListUsers() {
    return this.authService.hasPermission("lister utilisateurs");
  }
  canCreateUsers() {
    return this.authService.hasPermission("cr\xE9er utilisateur");
  }
  canEditUsers() {
    return this.authService.hasPermission("modifier utilisateur");
  }
  canDeleteUsers() {
    return this.authService.hasPermission("supprimer utilisateur");
  }
  // Ajouter d'autres permissions selon vos besoins
  canManageRoles() {
    return this.authService.hasPermission("g\xE9rer r\xF4les");
  }
  canViewReports() {
    return this.authService.hasPermission("voir rapports");
  }
  // Méthode générale pour vérifier une permission
  hasPermission(permission) {
    return this.authService.hasPermission(permission);
  }
  static \u0275fac = function PermissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionService, factory: _PermissionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  PermissionService
};
//# sourceMappingURL=chunk-B4O6F2DF.js.map
