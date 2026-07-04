import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-TLD64Y2W.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTSSTHJF.js";

// src/app/shared/service/catalogue/catalogue.service.ts
var CatalogueService = class _CatalogueService {
  http;
  apiUrl = `${environment.apiUrl}/catalogues`;
  constructor(http) {
    this.http = http;
  }
  getHeaders() {
    const token = localStorage.getItem("access_token");
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token ? `Bearer ${token}` : ""
    });
  }
  // Récupérer tous les catalogues
  getCatalogues() {
    return this.http.get(this.apiUrl, {
      headers: this.getHeaders()
    });
  }
  // Récupérer un catalogue par ID
  getCatalogue(id) {
    return this.http.get(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }
  // Créer un nouveau catalogue
  createCatalogue(catalogueData) {
    return this.http.post(this.apiUrl, catalogueData, {
      headers: this.getHeaders()
    });
  }
  // Mettre à jour un catalogue
  updateCatalogue(id, catalogueData) {
    return this.http.put(`${this.apiUrl}/${id}`, catalogueData, {
      headers: this.getHeaders()
    });
  }
  // Supprimer un catalogue
  deleteCatalogue(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }
  ajouterFormation(catalogueId, formationData) {
    return this.http.post(`${this.apiUrl}/${catalogueId}/formations`, formationData, { headers: this.getHeaders() });
  }
  // Retirer une formation d'un catalogue
  retirerFormation(catalogueId, formationId) {
    return this.http.delete(`${this.apiUrl}/${catalogueId}/formations/${formationId}`, { headers: this.getHeaders() });
  }
  static \u0275fac = function CatalogueService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogueService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CatalogueService, factory: _CatalogueService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CatalogueService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CatalogueService
};
//# sourceMappingURL=chunk-XZBJPFDI.js.map
