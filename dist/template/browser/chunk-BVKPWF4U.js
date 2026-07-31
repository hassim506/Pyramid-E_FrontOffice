import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-EGNJBGKD.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BSBCM3BI.js";

// src/app/shared/service/user/user.service.ts
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
  getUsers() {
    return this.http.get(`${this.baseUrl}/users`, { headers: this.getHeaders() });
  }
  getEmployesByEntreprise(entrepriseId) {
    return this.http.get(`${this.baseUrl}/entreprises/${entrepriseId}/employes`, { headers: this.getHeaders() });
  }
  getMyUsers() {
    return this.http.get(`${this.baseUrl}/mes-utilisateurs-rh`, { headers: this.getHeaders() });
  }
  getFormateurs() {
    return this.http.get(`${this.baseUrl}/adminrh/formateurs`, { headers: this.getHeaders() });
  }
  getMyUsersgroup() {
    return this.http.get(`${this.baseUrl}/mes-utilisateurs-rhg`, { headers: this.getHeaders() });
  }
  getUser(id) {
    return this.http.get(`${this.baseUrl}/users/${id}`, { headers: this.getHeaders() });
  }
  createUser(data) {
    return this.http.post(`${this.baseUrl}/users`, data, { headers: this.getHeaders() });
  }
  updateUser(id, data) {
    return this.http.put(`${this.baseUrl}/users/${id}`, data, { headers: this.getHeaders() });
  }
  deleteUser(id) {
    return this.http.delete(`${this.baseUrl}/users/${id}`, { headers: this.getHeaders() });
  }
  getRoles() {
    return this.http.get(`${this.baseUrl}/roles`, { headers: this.getHeaders() });
  }
  getEntreprises() {
    return this.http.get(`${this.baseUrl}/entreprises`, { headers: this.getHeaders() });
  }
  // Import d'utilisateurs via fichier Excel/CSV
  importUsers(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.baseUrl}/users/import`, formData, {
      headers: this.getHeadersForFileUpload()
    });
  }
  // Télécharger le template d'import
  downloadTemplate() {
    return this.http.get(`${this.baseUrl}/import-template/users`, {
      headers: this.getHeaders(),
      responseType: "blob"
    });
  }
  // Headers pour l'upload de fichier (sans Content-Type)
  getHeadersForFileUpload() {
    const token = localStorage.getItem("pyramide_token");
    return new HttpHeaders({
      "Authorization": `Bearer ${token}`
      // Pas de Content-Type pour FormData
    });
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
//# sourceMappingURL=chunk-BVKPWF4U.js.map
