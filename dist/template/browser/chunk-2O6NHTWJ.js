import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  HttpClient
} from "./chunk-46QRNFHM.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7XGB4BEQ.js";

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
  storageBase = environment.apiUrl.replace("/api", "");
  handleError;
  getImageUrl(imageCouverture) {
    if (!imageCouverture)
      return "assets/img/course/course-01.jpg";
    if (imageCouverture.startsWith("http"))
      return imageCouverture;
    return `${this.storageBase}/storage/${imageCouverture}`;
  }
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
  getAuthHeader() {
    const token = localStorage.getItem("pyramide_token");
    return { "Authorization": `Bearer ${token}` };
  }
  uploadImageCouverture(file) {
    const fd = new FormData();
    fd.append("image", file);
    return this.http.post(`${this.baseUrl}/upload/image`, fd, {
      headers: this.getAuthHeader()
    });
  }
  // /adminrh/formations — filtered by the RH's entreprise
  getFormationsrh() {
    return this.http.get(`${this.baseUrl}/adminrh/formations`, {
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
//# sourceMappingURL=chunk-2O6NHTWJ.js.map
