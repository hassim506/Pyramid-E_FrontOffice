import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-46QRNFHM.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7XGB4BEQ.js";

// src/app/shared/service/role/role.service.ts
var RoleService = class _RoleService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getHeaders() {
    const token = localStorage.getItem("pyramide_token");
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    });
  }
  // Récupérer tous les rôles
  getAllRoles() {
    return this.http.get(`${this.apiUrl}/roles`, { headers: this.getHeaders() });
  }
  // Récupérer un rôle par ID avec ses permissions
  getRoleById(id) {
    return this.http.get(`${this.apiUrl}/roles/${id}`, { headers: this.getHeaders() });
  }
  // Créer un nouveau rôle
  createRole(role) {
    console.log("\u{1F4E4} Envoi cr\xE9ation r\xF4le:", role);
    return this.http.post(`${this.apiUrl}/roles`, role, { headers: this.getHeaders() });
  }
  // Mettre à jour un rôle
  updateRole(id, data) {
    return this.http.put(`${this.apiUrl}/roles/${id}`, data);
  }
  // Supprimer un rôle
  deleteRole(id) {
    return this.http.delete(`${this.apiUrl}/roles/${id}`, { headers: this.getHeaders() });
  }
  // Assigner un rôle à un utilisateur
  assignRoleToUser(assignData) {
    return this.http.post(`${this.apiUrl}/roles/assign-to-user`, assignData, { headers: this.getHeaders() });
  }
  static \u0275fac = function RoleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleService, factory: _RoleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RoleService
};
//# sourceMappingURL=chunk-ONLQCYPN.js.map
