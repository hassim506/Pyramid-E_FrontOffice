import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-46QRNFHM.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7XGB4BEQ.js";

// src/app/shared/service/authentification/user.service.ts
var UserService = class _UserService {
  http;
  baseUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getHeaders() {
    const token = localStorage.getItem("pyramide_token");
    return new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
  }
  // Pagination côté serveur pour gérer des millions d'utilisateurs
  getUsers(page = 1, perPage = 50, search) {
    let params = new HttpParams().set("page", page.toString()).set("per_page", perPage.toString());
    if (search && search.trim()) {
      params = params.set("search", search.trim());
    }
    return this.http.get(`${this.baseUrl}/users`, {
      headers: this.getHeaders(),
      params
    });
  }
  getUser(id) {
    return this.http.get(`${this.baseUrl}/users/${id}`, { headers: this.getHeaders() });
  }
  createUser(data) {
    return this.http.post(`${this.baseUrl}/users`, data, { headers: this.getHeaders() });
  }
  // CORRECTION ICI : utiliser /users/{id} au lieu de /user/{id}
  updateUser(id, data) {
    console.log(`Appel PUT vers: ${this.baseUrl}/users/${id}`);
    return this.http.put(`${this.baseUrl}/users/${id}`, data, { headers: this.getHeaders() });
  }
  getUsersByCompany(companyId) {
    return this.http.get(`${this.baseUrl}/users?entreprise_id=${companyId}`, {
      headers: this.getHeaders()
    });
  }
  // Méthode alternative pour récupérer seulement le nombre
  getEmployeeCount(companyId) {
    return this.http.get(`${this.baseUrl}/users/count?entreprise_id=${companyId}`, {
      headers: this.getHeaders()
    });
  }
  deleteUser(id) {
    return this.http.delete(`${this.baseUrl}/users/${id}`, { headers: this.getHeaders() });
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  UserService
};
//# sourceMappingURL=chunk-OE6AEQ26.js.map
