import {
  AuthService
} from "./chunk-I3LFGWFR.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-EGNJBGKD.js";
import {
  Injectable,
  catchError,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BSBCM3BI.js";

// src/app/shared/service/demande/demande-formation.service.ts
var DemandeFormationService = class _DemandeFormationService {
  http;
  authService;
  apiUrl = environment.apiUrl;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getHeaders() {
    const token = this.authService.getToken();
    return new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
  }
  // ✅ Pour l'employé connecté → /mes-demandes-formation
  getMesDemandes() {
    return this.http.get(`${this.apiUrl}/mes-demandes-formation`, { headers: this.getHeaders() }).pipe(catchError(this.handleError.bind(this)));
  }
  // ✅ Pour RH/Admin → /demandes-formation (permission requise)
  getDemandesFormation() {
    return this.http.get(`${this.apiUrl}/demandes-formation`, { headers: this.getHeaders() }).pipe(catchError(this.handleError.bind(this)));
  }
  // Valider une demande (RH)
  validerDemande(id, data = {}) {
    return this.http.put(`${this.apiUrl}/demandes-formation/${id}/valider`, data, { headers: this.getHeaders() }).pipe(catchError(this.handleError.bind(this)));
  }
  // Refuser une demande (RH)
  refuserDemande(id, data) {
    return this.http.put(`${this.apiUrl}/demandes-formation/${id}/refuser`, data, { headers: this.getHeaders() }).pipe(catchError(this.handleError.bind(this)));
  }
  // Annuler une demande (Employé)
  annulerDemande(id, data = {}) {
    return this.http.put(`${this.apiUrl}/demandes-formation/${id}/annuler`, data, { headers: this.getHeaders() }).pipe(catchError(this.handleError.bind(this)));
  }
  // Créer une demande (Employé)
  creerDemande(payload) {
    return this.http.post(`${this.apiUrl}/demandes-formation`, payload, { headers: this.getHeaders() }).pipe(catchError(this.handleError.bind(this)));
  }
  relancerDemande(id) {
    return this.http.post(`${this.apiUrl}/demandes/${id}/relancer`, {});
  }
  handleError(error) {
    console.error("Erreur API Demandes Formation:", error);
    return throwError(() => error);
  }
  static \u0275fac = function DemandeFormationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DemandeFormationService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DemandeFormationService, factory: _DemandeFormationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemandeFormationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  DemandeFormationService
};
//# sourceMappingURL=chunk-5322JQ3N.js.map
