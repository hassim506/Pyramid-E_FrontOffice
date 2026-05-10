import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-J5AS2QYG.js";
import {
  Injectable,
  catchError,
  forkJoin,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-2JCHGHJA.js";

// src/app/shared/service/stat/adminrh-stat.service.ts
var AdminRHStatsService = class _AdminRHStatsService {
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
  /**
   * Récupérer le nombre d'utilisateurs
   */
  getUtilisateursCount() {
    return this.http.get(`${this.baseUrl}/mes-utilisateurs-rh`, {
      headers: this.getHeaders()
    }).pipe(map((response) => {
      console.log("Response utilisateurs:", response);
      if (response?.utilisateurs && Array.isArray(response.utilisateurs)) {
        return response.utilisateurs.length;
      }
      if (response?.data && Array.isArray(response.data)) {
        return response.data.length;
      }
      if (Array.isArray(response)) {
        return response.length;
      }
      if (response?.total || response?.count) {
        return response.total || response.count;
      }
      return 0;
    }), catchError((error) => {
      console.error("Erreur utilisateurs:", error);
      return of(0);
    }));
  }
  /**
   * Récupérer le nombre de formations
   */
  getFormationsCount() {
    return this.http.get(`${this.baseUrl}/adminrh/formations`, {
      headers: this.getHeaders()
    }).pipe(map((response) => {
      console.log("Response formations:", response);
      if (response?.formations && Array.isArray(response.formations)) {
        return response.formations.length;
      }
      if (response?.data && Array.isArray(response.data)) {
        return response.data.length;
      }
      if (Array.isArray(response)) {
        return response.length;
      }
      if (response?.total || response?.count) {
        return response.total || response.count;
      }
      return 0;
    }), catchError((error) => {
      console.error("Erreur formations:", error);
      return of(0);
    }));
  }
  /**
   * Récupérer le nombre de formateurs
   */
  getFormateursCount() {
    return this.http.get(`${this.baseUrl}/adminrh/formateurs`, {
      headers: this.getHeaders()
    }).pipe(map((response) => {
      console.log("Response formateurs:", response);
      if (response?.formateurs && Array.isArray(response.formateurs)) {
        return response.formateurs.length;
      }
      if (response?.data && Array.isArray(response.data)) {
        return response.data.length;
      }
      if (Array.isArray(response)) {
        return response.length;
      }
      if (response?.total || response?.count) {
        return response.total || response.count;
      }
      return 0;
    }), catchError((error) => {
      console.error("Erreur formateurs:", error);
      return of(0);
    }));
  }
  /**
   * Récupérer le nombre de demandes de formation
   */
  getDemandesFormationCount() {
    return this.http.get(`${this.baseUrl}/demandes-formation`, {
      headers: this.getHeaders()
    }).pipe(map((response) => {
      console.log("Response demandes:", response);
      if (response?.demandes && Array.isArray(response.demandes)) {
        return response.demandes.length;
      }
      if (response?.data && Array.isArray(response.data)) {
        return response.data.length;
      }
      if (Array.isArray(response)) {
        return response.length;
      }
      if (response?.total || response?.count) {
        return response.total || response.count;
      }
      return 0;
    }), catchError((error) => {
      console.error("Erreur demandes formation:", error);
      return of(0);
    }));
  }
  /**
   * Récupérer le nombre de sessions de formation
   */
  getSessionsFormationCount() {
    return this.http.get(`${this.baseUrl}/adminrh/sessions`, {
      headers: this.getHeaders()
    }).pipe(map((response) => {
      console.log("Response sessions:", response);
      if (response?.sessions && Array.isArray(response.sessions)) {
        return response.sessions.length;
      }
      if (response?.data && Array.isArray(response.data)) {
        return response.data.length;
      }
      if (Array.isArray(response)) {
        return response.length;
      }
      if (response?.total || response?.count) {
        return response.total || response.count;
      }
      return 0;
    }), catchError((error) => {
      console.error("Erreur sessions:", error);
      return of(0);
    }));
  }
  /**
   * Combiner toutes les statistiques
   */
  getAllStats() {
    return forkJoin({
      totalUtilisateurs: this.getUtilisateursCount(),
      totalFormations: this.getFormationsCount(),
      totalFormateurs: this.getFormateursCount(),
      totalDemandesFormation: this.getDemandesFormationCount(),
      totalSessionsFormation: this.getSessionsFormationCount()
    });
  }
  /**
   * Récupérer les formations par année (pour le graphique)
   */
  getFormationsParAnnee() {
    return this.http.get(`${this.baseUrl}/adminrh/formations-par-annee`, {
      headers: this.getHeaders()
    }).pipe(map((response) => {
      console.log("Response formations par ann\xE9e:", response);
      if (response?.data) {
        return response.data;
      }
      if (Array.isArray(response)) {
        return response;
      }
      return [];
    }), catchError((error) => {
      console.error("Erreur formations par ann\xE9e:", error);
      return of([]);
    }));
  }
  /**
   * Récupérer les formations par période
   */
  getFormationsParPeriode(startDate, endDate) {
    const params = {
      start_date: startDate.toISOString().split("T")[0],
      end_date: endDate.toISOString().split("T")[0]
    };
    return this.http.get(`${this.baseUrl}/adminrh/formations-par-periode`, {
      headers: this.getHeaders(),
      params
    }).pipe(map((response) => {
      if (response?.data) {
        return response.data;
      }
      return Array.isArray(response) ? response : [];
    }), catchError(() => of([])));
  }
  /**
   * Récupérer les formations récentes
   */
  getFormationsRecentes(limit = 5) {
    return this.http.get(`${this.baseUrl}/adminrh/formations-recentes`, {
      headers: this.getHeaders(),
      params: { limit: limit.toString() }
    }).pipe(map((response) => {
      console.log("Response formations r\xE9centes:", response);
      let formations = [];
      if (response?.formations && Array.isArray(response.formations)) {
        formations = response.formations;
      } else if (response?.data && Array.isArray(response.data)) {
        formations = response.data;
      } else if (Array.isArray(response)) {
        formations = response;
      }
      return formations.map((f) => ({
        id: f.id,
        titre: f.titre || f.title,
        image: f.image_couverture || f.image || f.thumbnail || "assets/img/instructor/instructor-table-01.jpg",
        inscrits: f.inscrits || f.nombre_inscrits || 0,
        statut: f.est_publie ? "publie" : "brouillon"
      }));
    }), catchError((error) => {
      console.error("Erreur formations r\xE9centes:", error);
      return of([]);
    }));
  }
  static \u0275fac = function AdminRHStatsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminRHStatsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminRHStatsService, factory: _AdminRHStatsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminRHStatsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AdminRHStatsService
};
//# sourceMappingURL=chunk-KX6RJFTG.js.map
