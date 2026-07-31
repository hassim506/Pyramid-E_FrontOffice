import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-EGNJBGKD.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BSBCM3BI.js";

// src/app/shared/service/Formationsss/formations.service.ts
var FormationsService = class _FormationsService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getHeaders() {
    const token = localStorage.getItem("pyramid_token");
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    if (token)
      headers = headers.set("Authorization", `Bearer ${token}`);
    return headers;
  }
  // ===============================
  // 📚 FORMATIONS
  // ===============================
  getAllFormations() {
    return this.http.get(`${this.apiUrl}/formations`, { headers: this.getHeaders() });
  }
  getFormationById(id) {
    return this.http.get(`${this.apiUrl}/formations/${id}`, { headers: this.getHeaders() });
  }
  getFormationStructure(id) {
    return this.http.get(`${this.apiUrl}/formations/${id}/structure`, { headers: this.getHeaders() });
  }
  // ===============================
  // 🎓 FORMATIONS EMPLOYÉ
  // ===============================
  getMesFormations() {
    return this.http.get(`${this.apiUrl}/mes-formations`, { headers: this.getHeaders() });
  }
  getMesFormationsByStatus(status) {
    return this.http.get(`${this.apiUrl}/mes-formations?status=${status}`, { headers: this.getHeaders() });
  }
  getMyCertificates() {
    return this.http.get(`${this.apiUrl}/mes-certificats`, { headers: this.getHeaders() });
  }
  viewCertificate(formationId) {
    return this.http.get(`${this.apiUrl}/formations/${formationId}/certificat`, { headers: this.getHeaders() });
  }
  downloadCertificate(formationId) {
    return this.http.get(`${this.apiUrl}/formations/${formationId}/certificat/download`, {
      headers: this.getHeaders(),
      responseType: "blob"
    });
  }
  // ===============================
  // 📝 DEMANDES FORMATION — LISTES FILTRÉES
  // ===============================
  getSessionsOuvertes() {
    return this.http.get(`${this.apiUrl}/demandes-formation/listes/sessions`, { headers: this.getHeaders() });
  }
  getMesSessionsAcceptees() {
    return this.http.get(`${this.apiUrl}/sessions/acceptees`, { headers: this.getHeaders() });
  }
  getSessionDetail(sessionId) {
    return this.http.get(`${this.apiUrl}/sessions-formation/${sessionId}`, { headers: this.getHeaders() });
  }
  getCatalogues() {
    return this.http.get(`${this.apiUrl}/demandes-formation/listes/catalogues`, { headers: this.getHeaders() });
  }
  getCategories() {
    return this.http.get(`${this.apiUrl}/demandes-formation/listes/categories-formation`, { headers: this.getHeaders() });
  }
  // ===============================
  // 🗺️ PARCOURS — FLUX 3 NIVEAUX (demandes)
  // ===============================
  getParcoursDisponibles() {
    return this.http.get(`${this.apiUrl}/demandes-formation/listes/parcours`, { headers: this.getHeaders() });
  }
  getParcoursDetails(parcoursId) {
    return this.http.get(`${this.apiUrl}/parcours/${parcoursId}/details`, { headers: this.getHeaders() });
  }
  getCategoriesDuParcours(parcoursId) {
    return this.http.get(`${this.apiUrl}/demandes-formation/listes/parcours/${parcoursId}/categories`, { headers: this.getHeaders() });
  }
  getFormationsDuParcoursParCategorie(parcoursId, categorieId) {
    const url = categorieId != null ? `${this.apiUrl}/demandes-formation/listes/parcours/${parcoursId}/categories/${categorieId}/formations` : `${this.apiUrl}/demandes-formation/listes/parcours/${parcoursId}/formations`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
  getParcoursParCategorie(categorieId) {
    return this.http.get(`${this.apiUrl}/demandes-formation/listes/parcours/${categorieId}`, { headers: this.getHeaders() });
  }
  getFormationsByCategorie(categorieId) {
    return this.http.get(`${this.apiUrl}/demandes-formation/listes/formations/categories-formation/${categorieId}`, { headers: this.getHeaders() });
  }
  // ===============================
  // 🗺️ PARCOURS — EMPLOYÉ (assignés + progression)
  // ===============================
  getMesParcoursAssignes() {
    return this.http.get(`${this.apiUrl}/demandes-formation/parcours/assignes`, { headers: this.getHeaders() });
  }
  getParcoursDetail(parcoursId) {
    return this.http.get(`${this.apiUrl}/parcours/${parcoursId}/detail`, { headers: this.getHeaders() });
  }
  getParcoursProgression(parcoursId) {
    return this.http.get(`${this.apiUrl}/parcours/${parcoursId}/progression`, { headers: this.getHeaders() });
  }
  // ===============================
  // 🏢 CATALOGUES EMPLOYÉ
  // ===============================
  getCataloguesEmploye() {
    return this.http.get(`${this.apiUrl}/employe/catalogues`, { headers: this.getHeaders() });
  }
  getMesCataloguesAssignes() {
    return this.http.get(`${this.apiUrl}/catalogues/assignes`, { headers: this.getHeaders() });
  }
  getCatalogueDetail(catalogueId) {
    return this.http.get(`${this.apiUrl}/catalogues/${catalogueId}`, { headers: this.getHeaders() });
  }
  getCatalogueProgression(catalogueId) {
    return this.http.get(`${this.apiUrl}/catalogues/${catalogueId}/progression`, { headers: this.getHeaders() });
  }
  // ===============================
  // 🔁 DEMANDES
  // ===============================
  relancerDemande(id) {
    return this.http.post(`${this.apiUrl}/demandes/${id}/relancer`, {}, { headers: this.getHeaders() });
  }
  // ===============================
  // 📊 DASHBOARD EMPLOYÉ
  // ===============================
  getDashboardStats(params) {
    const httpParams = new HttpParams().set("periode", params.periode).set("annee", String(params.annee)).set("mois", String(params.mois));
    return this.http.get(`${this.apiUrl}/mes-statistiques-dashboard`, { headers: this.getHeaders(), params: httpParams });
  }
  // ===============================
  // 🧠 QUIZ EMPLOYÉ
  // ===============================
  /**
   * Liste des quiz d'une formation
   * GET /api/quizzes/formation/{formationId}
   */
  getQuizzesParFormation(formationId) {
    return this.http.get(`${this.apiUrl}/quizzes/formation/${formationId}`, { headers: this.getHeaders() });
  }
  /**
   * Tous les quiz disponibles
   * GET /api/quizzes
   */
  getTousLesQuizzes() {
    return this.http.get(`${this.apiUrl}/quizzes`, { headers: this.getHeaders() });
  }
  /**
   * Détail d'un quiz avec ses questions et réponses
   * GET /api/quizzes/{id}
   */
  getQuizDetail(quizId) {
    return this.http.get(`${this.apiUrl}/quizzes/${quizId}`, { headers: this.getHeaders() });
  }
  /**
   * Questions d'un quiz
   * GET /api/quizzes/{quizId}/questions
   */
  getQuestionsQuiz(quizId) {
    return this.http.get(`${this.apiUrl}/quizzes/${quizId}/questions`, { headers: this.getHeaders() });
  }
  /**
   * Soumettre les réponses d'un quiz
   * POST /api/quizzes/{id}/submit
   */
  soumettreQuiz(quizId, answers) {
    return this.http.post(`${this.apiUrl}/quizzes/${quizId}/submit`, { answers }, { headers: this.getHeaders() });
  }
  /**
   * Résultats de mes quiz pour une formation
   * GET /api/quiz-results/formation/{formationId}
   */
  getMesResultatsQuizFormation(formationId) {
    return this.http.get(`${this.apiUrl}/quiz-results/formation/${formationId}`, { headers: this.getHeaders() });
  }
  /**
   * Résultats d'un quiz spécifique
   * GET /api/quiz-results/quiz/{quizId}
   */
  getMesResultatsQuiz(quizId) {
    return this.http.get(`${this.apiUrl}/quiz-results/quiz/${quizId}`, { headers: this.getHeaders() });
  }
  /**
   * Tous mes résultats de quiz
   * GET /api/quiz-results
   */
  getTousMesResultatsQuiz() {
    return this.http.get(`${this.apiUrl}/quiz-results`, { headers: this.getHeaders() });
  }
  // ===============================
  // 📅 PLANNING EMPLOYÉ
  // ===============================
  getMonPlanning(annee, mois) {
    const params = new HttpParams().set("annee", String(annee)).set("mois", String(mois));
    return this.http.get(`${this.apiUrl}/student/planning`, {
      headers: this.getHeaders(),
      params
    });
  }
  // ===============================
  // 🎯 COMPÉTENCES EMPLOYÉ
  // ===============================
  //competences acquises
  getMesCompetences() {
    return this.http.get(`${this.apiUrl}/student/competences`, {
      headers: this.getHeaders()
    });
  }
  //Competences recommandées
  getCompetencesRecommandees() {
    return this.http.get(`${this.apiUrl}/student/competences/recommandees`);
  }
  static \u0275fac = function FormationsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormationsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormationsService, factory: _FormationsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormationsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  FormationsService
};
//# sourceMappingURL=chunk-27OTGTUE.js.map
