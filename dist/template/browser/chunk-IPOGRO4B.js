import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  HttpClient
} from "./chunk-J5AS2QYG.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2JCHGHJA.js";

// src/app/shared/service/formation/formation.service.ts
var FormationService = class _FormationService {
  http;
  publishFormation(id) {
    return this.http.put(`${this.baseUrl}/formations/${id}/publish`, { est_publier: true }, {
      headers: this.getHeaders()
    });
  }
  unpublishFormation(id) {
    return this.http.put(`${this.baseUrl}/formations/${id}/unpublish`, { est_publier: false }, {
      headers: this.getHeaders()
    });
  }
  baseUrl = environment.apiUrl;
  handleError;
  constructor(http) {
    this.http = http;
  }
  getHeaders() {
    const token = localStorage.getItem("pyramide_token");
    return {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    };
  }
  // /adminrh/formations
  getFormationsrh() {
    return this.http.get(`${this.baseUrl}/formations`, {
      headers: this.getHeaders()
    });
  }
  getFormationsformateur() {
    return this.http.get(`${this.baseUrl}/formateur/formations`, {
      headers: this.getHeaders()
    });
  }
  getFormationFormateurById(id) {
    return this.http.get(`${this.baseUrl}/formateurs/${id}/formations`, {
      headers: this.getHeaders()
    });
  }
  getFormations(p0) {
    const params = {};
    if (p0.entreprise_id)
      params["entreprise_id"] = p0.entreprise_id;
    return this.http.get(`${this.baseUrl}/formations`, {
      headers: this.getHeaders(),
      params
    });
  }
  getFormationsByEntreprise(entrepriseId) {
    return this.http.get(`${this.baseUrl}/formations`, {
      headers: this.getHeaders(),
      params: { entreprise_id: entrepriseId }
    });
  }
  createFormation(formationData) {
    return this.http.post(`${this.baseUrl}/formations`, formationData, {
      headers: this.getHeaders()
    });
  }
  updateFormation(id, formationData) {
    return this.http.put(`${this.baseUrl}/formations/${id}`, formationData, {
      headers: this.getHeaders()
    });
  }
  deleteFormation(id) {
    return this.http.delete(`${this.baseUrl}/formations/${id}`, {
      headers: this.getHeaders()
    });
  }
  getCategories() {
    return this.http.get(`${this.baseUrl}/categories-formation`, {
      headers: this.getHeaders()
    });
  }
  getCatalogues() {
    return this.http.get(`${this.baseUrl}/catalogues`, {
      headers: this.getHeaders()
    });
  }
  getFormationById(id) {
    return this.http.get(`${this.baseUrl}/formations/${id}`);
  }
  enrollInFormation(formationId) {
    return this.http.post(`${this.baseUrl}/formations/${formationId}/enroll`, {});
  }
  addComment(commentData) {
    return this.http.post(`${this.baseUrl}/comments`, commentData);
  }
  static \u0275fac = function FormationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormationService, factory: _FormationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  FormationService
};
//# sourceMappingURL=chunk-IPOGRO4B.js.map
