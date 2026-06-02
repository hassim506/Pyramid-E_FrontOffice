import {
  AuthService
} from "./chunk-SNOA42FF.js";
import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-46QRNFHM.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7XGB4BEQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/shared/service/parcours/parcours.service.ts
var ParcoursService = class _ParcoursService {
  http;
  authService;
  apiUrl = `${environment.apiUrl}/parcours`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getHeaders() {
    const token = localStorage.getItem("access_token") || localStorage.getItem("pyramide_token");
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token ? `Bearer ${token}` : ""
    });
  }
  // Récupérer tous les parcours avec pagination
  getParcours(page = 1, limit = 15) {
    return this.http.get(`${this.apiUrl}?page=${page}&per_page=${limit}`, {
      headers: this.getHeaders()
    });
  }
  getRhParcours() {
    const entrepriseId = this.getCurrentUserEntrepriseId();
    return this.http.get(this.apiUrl, {
      headers: this.getHeaders()
    }).pipe(map((response) => {
      const all = response.parcours || [];
      const filtered = all.filter((p) => Number(p.entreprise_id) === Number(entrepriseId)).map((p) => __spreadProps(__spreadValues({}, p), { actif: Boolean(p.actif) }));
      return __spreadProps(__spreadValues({}, response), { parcours: filtered });
    }));
  }
  getCurrentUserEntrepriseId() {
    const user = this.authService.getUser();
    if (!user || !user.entreprise_id) {
      throw new Error("Utilisateur non connect\xE9 ou entreprise_id manquant");
    }
    return user.entreprise_id;
  }
  // Récupérer un parcours par ID
  getParcoursById(id) {
    return this.http.get(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }
  // Créer un nouveau parcours
  createParcours(parcoursData) {
    if (!parcoursData.entreprise_id) {
      parcoursData.entreprise_id = this.getCurrentUserEntrepriseId();
    }
    console.log("Donn\xE9es envoy\xE9es au backend avec entreprise_id:", parcoursData);
    return this.http.post(this.apiUrl, parcoursData, {
      headers: this.getHeaders()
    });
  }
  // Mettre à jour un parcours
  updateParcours(id, parcoursData) {
    return this.http.put(`${this.apiUrl}/${id}`, parcoursData, {
      headers: this.getHeaders()
    });
  }
  // Supprimer un parcours
  deleteParcours(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }
  // Inscrire un utilisateur à un parcours
  inscrireUtilisateur(parcoursId, inscriptionData) {
    return this.http.post(`${this.apiUrl}/${parcoursId}/inscrire`, inscriptionData, {
      headers: this.getHeaders()
    });
  }
  // Mettre à jour la progression d'un utilisateur
  updateProgression(parcoursId, userId, progressionData) {
    return this.http.put(`${this.apiUrl}/${parcoursId}/users/${userId}/progression`, progressionData, {
      headers: this.getHeaders()
    });
  }
  // Mettre à jour les formations d'un parcours
  updateFormations(parcoursId, formationsData) {
    return this.http.put(`${this.apiUrl}/${parcoursId}/formations`, formationsData, {
      headers: this.getHeaders()
    });
  }
  static \u0275fac = function ParcoursService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParcoursService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParcoursService, factory: _ParcoursService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParcoursService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  ParcoursService
};
//# sourceMappingURL=chunk-IZZTCVRO.js.map
