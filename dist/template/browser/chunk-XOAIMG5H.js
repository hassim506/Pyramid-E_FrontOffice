import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-46QRNFHM.js";
import {
  BehaviorSubject,
  Injectable,
  Observable,
  catchError,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7XGB4BEQ.js";

// src/app/shared/service/session/session-formation.service.ts
var SessionFormationService = class _SessionFormationService {
  http;
  apiUrl = `${environment.apiUrl}/sessions-formation`;
  apiUrlrh = `${environment.apiUrl}/adminrh/sessions`;
  sessionsSubject = new BehaviorSubject([]);
  sessions$ = this.sessionsSubject.asObservable();
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  constructor(http) {
    this.http = http;
  }
  /**
   * Récupérer toutes les sessions de formation
   */
  getAllSessionsRH(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(this.apiUrlrh, {
      headers: this.httpOptions.headers,
      params: httpParams
    }).pipe(tap((response) => {
      if (response.status && response.sessions) {
        this.sessionsSubject.next(response.sessions);
      }
    }), catchError(this.handleError("getAllSessions")));
  }
  getAllSessions(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(this.apiUrl, {
      headers: this.httpOptions.headers,
      params: httpParams
    }).pipe(tap((response) => {
      if (response.status && response.sessions) {
        this.sessionsSubject.next(response.sessions);
      }
    }), catchError(this.handleError("getAllSessions")));
  }
  /**
   * Récupérer une session par son ID
   */
  getSessionById(id) {
    return this.http.get(`${this.apiUrl}/${id}`, this.httpOptions).pipe(catchError(this.handleError("getSessionById")));
  }
  /**
   * Créer une nouvelle session de formation
   */
  createSession(sessionData) {
    return this.http.post(this.apiUrl, sessionData, this.httpOptions).pipe(tap((response) => {
      if (response.status)
        this.refreshSessions();
    }), catchError(this.handleError("createSession")));
  }
  createSessionRH(sessionData) {
    return this.http.post(this.apiUrl, sessionData, this.httpOptions);
  }
  /**
   * Mettre à jour une session existante
   */
  updateSession(id, sessionData) {
    return this.http.put(`${this.apiUrl}/${id}`, sessionData, this.httpOptions).pipe(tap((response) => {
      if (response.status)
        this.refreshSessions();
    }), catchError(this.handleError("updateSession")));
  }
  updateSessionRH(id, sessionData) {
    return this.http.put(`${this.apiUrl}/${id}`, sessionData, this.httpOptions);
  }
  /**
   * Supprimer une session
   */
  deleteSession(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions).pipe(tap(() => this.refreshSessions()), catchError(this.handleError("deleteSession")));
  }
  deleteSessionRH(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
  /**
   * Annuler une session
   */
  cancelSession(id, motif) {
    const data = { statut: "annulee", motif_annulation: motif };
    return this.updateSessionRH(id, data);
  }
  /**
   * Changer le statut d'une session
   */
  changeSessionStatus(id, statut) {
    const data = { statut };
    return this.updateSession(id, data);
  }
  /**
   * Ouvrir/fermer les inscriptions pour une session
   */
  toggleInscriptions(id, ouvert) {
    const data = { inscription_ouverte: ouvert };
    return this.updateSession(id, data);
  }
  /**
   * Récupérer les sessions d'une formation spécifique
   */
  getSessionsByFormation(formationId) {
    const params = { formation_id: formationId };
    return this.getAllSessions(params);
  }
  /**
   * Récupérer les sessions d'un formateur spécifique
   */
  getSessionsByFormateur(formateurId) {
    const params = { formateur_id: formateurId };
    return this.getAllSessions(params);
  }
  /**
   * Filtrer les sessions par statut
   */
  getSessionsByStatus(statut) {
    const params = { statut };
    return this.getAllSessions(params);
  }
  /**
   * Filtrer les sessions par type
   */
  getSessionsByType(type) {
    const params = { type };
    return this.getAllSessions(params);
  }
  /**
   * Récupérer les sessions à venir
   */
  getUpcomingSessions() {
    const params = { upcoming: true };
    return this.getAllSessions(params);
  }
  /**
   * Récupérer les sessions en cours
   */
  getCurrentSessions() {
    const params = { statut: "en_cours" };
    return this.getAllSessions(params);
  }
  /**
   * Récupérer les statistiques des sessions
   */
  getSessionsStats() {
    return this.http.get(`${this.apiUrl}/stats`, this.httpOptions).pipe(catchError(this.handleError("getSessionsStats")));
  }
  /**
   * Dupliquer une session
   */
  duplicateSession(id, newData) {
    return this.http.post(`${this.apiUrl}/${id}/duplicate`, newData, this.httpOptions).pipe(tap((response) => {
      if (response.status) {
        this.refreshSessions();
      }
    }), catchError(this.handleError("duplicateSession")));
  }
  /**
   * Exporter les sessions (PDF, Excel, etc.)
   */
  exportSessions(format = "excel", filters) {
    let params = new HttpParams().set("format", format);
    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key] !== null && filters[key] !== void 0 && filters[key] !== "") {
          params = params.set(key, filters[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/export`, {
      params,
      responseType: "blob"
    }).pipe(catchError(this.handleError("exportSessions")));
  }
  /**
   * Rafraîchir la liste des sessions
   */
  refreshSessions() {
    this.getAllSessions().subscribe();
  }
  /**
   * Nettoyer les données (pour les tests ou le reset)
   */
  clearCache() {
    this.sessionsSubject.next([]);
  }
  /**
   * Méthodes utilitaires
   */
  /**
   * Formatter les horaires pour l'affichage
   */
  formatHoraires(horaires) {
    if (!horaires || typeof horaires !== "object")
      return "";
    return Object.entries(horaires).map(([date, info]) => {
      const dateFormatted = new Date(date).toLocaleDateString("fr-FR");
      return `${dateFormatted}: ${info.debut} - ${info.fin}`;
    }).join("\n");
  }
  /**
   * Calculer la durée totale d'une session
   */
  calculateSessionDuration(dateDebut, dateFin) {
    const debut = new Date(dateDebut);
    const fin = new Date(dateFin);
    const diffMs = fin.getTime() - debut.getTime();
    return Math.ceil(diffMs / (1e3 * 60 * 60));
  }
  /**
   * Vérifier si une session peut être modifiée
   */
  canModifySession(session) {
    const now = /* @__PURE__ */ new Date();
    const dateDebut = new Date(session.date_debut);
    return session.statut === "planifiee" && dateDebut > now;
  }
  /**
   * Vérifier si on peut encore s'inscrire à une session
   */
  canRegisterToSession(session) {
    if (!session.inscription_ouverte)
      return false;
    if (session.nombre_places_restantes <= 0)
      return false;
    if (session.statut !== "planifiee")
      return false;
    const now = /* @__PURE__ */ new Date();
    const dateLimite = new Date(session.date_limite_inscription);
    return now <= dateLimite;
  }
  /**
   * Gestion globale des erreurs
   */
  getSessionParticipants(sessionId) {
    return this.http.get(`${environment.apiUrl}/sessions-formation/${sessionId}/participants`, this.httpOptions);
  }
  inscrireEmploye(sessionId, userId) {
    return this.http.post(`${environment.apiUrl}/sessions-formation/${sessionId}/inscrire`, { user_id: userId }, this.httpOptions);
  }
  handleError(operation = "operation", result) {
    return (error) => {
      console.error(`${operation} failed:`, error);
      return new Observable((observer) => {
        observer.next(result);
        observer.complete();
      });
    };
  }
  static \u0275fac = function SessionFormationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionFormationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionFormationService, factory: _SessionFormationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionFormationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SessionFormationService
};
//# sourceMappingURL=chunk-XOAIMG5H.js.map
