import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient,
  HttpParams
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
  // private apiUrl = 'http://localhost:8000/api';
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
  // ===============================
  // 📚 FORMATIONS
  // ===============================
  getAllFormations() {
    return this.http.get(`${this.baseUrl}/formations`, { headers: this.getHeaders() });
  }
  // getFormationById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/formations/${id}`, { headers: this.getHeaders() });
  // }
  getFormationStructure(id) {
    return this.http.get(`${this.baseUrl}/formations/${id}/structure`, { headers: this.getHeaders() });
  }
  // ===============================
  // 🎓 FORMATIONS EMPLOYÉ
  // ===============================
  getMesFormations() {
    return this.http.get(`${this.baseUrl}/mes-formations`, { headers: this.getHeaders() });
  }
  getMesFormationsByStatus(status) {
    return this.http.get(`${this.baseUrl}/mes-formations?status=${status}`, { headers: this.getHeaders() });
  }
  getMyCertificates() {
    return this.http.get(`${this.baseUrl}/mes-certificats`, { headers: this.getHeaders() });
  }
  viewCertificate(formationId) {
    return this.http.get(`${this.baseUrl}/formations/${formationId}/certificat`, { headers: this.getHeaders() });
  }
  downloadCertificate(formationId) {
    return this.http.get(`${this.baseUrl}/formations/${formationId}/certificat/download`, {
      headers: this.getHeaders(),
      responseType: "blob"
    });
  }
  // ===============================
  // 📝 DEMANDES FORMATION — LISTES FILTRÉES
  // ===============================
  getSessionsOuvertes() {
    return this.http.get(`${this.baseUrl}/demandes-formation/listes/sessions`, { headers: this.getHeaders() });
  }
  getMesSessionsAcceptees() {
    return this.http.get(`${this.baseUrl}/sessions/acceptees`, { headers: this.getHeaders() });
  }
  getSessionDetail(sessionId) {
    return this.http.get(`${this.baseUrl}/sessions-formation/${sessionId}`, { headers: this.getHeaders() });
  }
  getCataloguesForEmploye() {
    return this.http.get(`${this.baseUrl}/demandes-formation/listes/catalogues`, { headers: this.getHeaders() });
  }
  getCategoriesForEmploye() {
    return this.http.get(`${this.baseUrl}/demandes-formation/listes/categories-formation`, { headers: this.getHeaders() });
  }
  // ===============================
  // 🗺️ PARCOURS — FLUX 3 NIVEAUX (demandes)
  // ===============================
  getParcoursDisponibles() {
    return this.http.get(`${this.baseUrl}/demandes-formation/listes/parcours`, { headers: this.getHeaders() });
  }
  getParcoursDetails(parcoursId) {
    return this.http.get(`${this.baseUrl}/parcours/${parcoursId}/details`, { headers: this.getHeaders() });
  }
  getCategoriesDuParcours(parcoursId) {
    return this.http.get(`${this.baseUrl}/demandes-formation/listes/parcours/${parcoursId}/categories`, { headers: this.getHeaders() });
  }
  getFormationsDuParcoursParCategorie(parcoursId, categorieId) {
    return this.http.get(`${this.baseUrl}/demandes-formation/listes/parcours/${parcoursId}/categories/${categorieId}/formations`, { headers: this.getHeaders() });
  }
  getParcoursParCategorie(categorieId) {
    return this.http.get(`${this.baseUrl}/demandes-formation/listes/parcours/${categorieId}`, { headers: this.getHeaders() });
  }
  getFormationsByCategorie(categorieId) {
    return this.http.get(`${this.baseUrl}/demandes-formation/listes/formations/categories-formation/${categorieId}`, { headers: this.getHeaders() });
  }
  // ===============================
  // 🗺️ PARCOURS — EMPLOYÉ (assignés + progression)
  // ===============================
  getMesParcoursAssignes() {
    return this.http.get(`${this.baseUrl}/demandes-formation/parcours/assignes`, { headers: this.getHeaders() });
  }
  getParcoursDetail(parcoursId) {
    return this.http.get(`${this.baseUrl}/parcours/${parcoursId}/detail`, { headers: this.getHeaders() });
  }
  getParcoursProgression(parcoursId) {
    return this.http.get(`${this.baseUrl}/parcours/${parcoursId}/progression`, { headers: this.getHeaders() });
  }
  // ===============================
  // 🏢 CATALOGUES EMPLOYÉ
  // ===============================
  getCataloguesEmploye() {
    return this.http.get(`${this.baseUrl}/employe/catalogues`, { headers: this.getHeaders() });
  }
  getMesCataloguesAssignes() {
    return this.http.get(`${this.baseUrl}/catalogues/assignes`, { headers: this.getHeaders() });
  }
  getCatalogueDetail(catalogueId) {
    return this.http.get(`${this.baseUrl}/catalogues/${catalogueId}`, { headers: this.getHeaders() });
  }
  getCatalogueProgression(catalogueId) {
    return this.http.get(`${this.baseUrl}/catalogues/${catalogueId}/progression`, { headers: this.getHeaders() });
  }
  // ===============================
  // 🔁 DEMANDES
  // ===============================
  relancerDemande(id) {
    return this.http.post(`${this.baseUrl}/demandes/${id}/relancer`, {}, { headers: this.getHeaders() });
  }
  // ===============================
  // 📊 DASHBOARD EMPLOYÉ
  // ===============================
  getDashboardStats(params) {
    const httpParams = new HttpParams().set("periode", params.periode).set("annee", String(params.annee)).set("mois", String(params.mois));
    return this.http.get(`${this.baseUrl}/mes-statistiques-dashboard`, { params: httpParams });
  }
  // ===============================
  // 🧠 QUIZ EMPLOYÉ
  // ===============================
  /**
   * Liste des quiz d'une formation
   * GET /api/quizzes/formation/{formationId}
   */
  getQuizzesParFormation(formationId) {
    return this.http.get(`${this.baseUrl}/quizzes/formation/${formationId}`, { headers: this.getHeaders() });
  }
  /**
   * Tous les quiz disponibles
   * GET /api/quizzes
   */
  getTousLesQuizzes() {
    return this.http.get(`${this.baseUrl}/quizzes`, { headers: this.getHeaders() });
  }
  /**
   * Détail d'un quiz avec ses questions et réponses
   * GET /api/quizzes/{id}
   */
  getQuizDetail(quizId) {
    return this.http.get(`${this.baseUrl}/quizzes/${quizId}`, { headers: this.getHeaders() });
  }
  /**
   * Questions d'un quiz
   * GET /api/quizzes/{quizId}/questions
   */
  getQuestionsQuiz(quizId) {
    return this.http.get(`${this.baseUrl}/quizzes/${quizId}/questions`, { headers: this.getHeaders() });
  }
  /**
   * Soumettre les réponses d'un quiz
   * POST /api/quizzes/{id}/submit
   */
  soumettreQuiz(quizId, answers) {
    return this.http.post(`${this.baseUrl}/quizzes/${quizId}/submit`, { answers }, { headers: this.getHeaders() });
  }
  /**
   * Résultats de mes quiz pour une formation
   * GET /api/quiz-results/formation/{formationId}
   */
  getMesResultatsQuizFormation(formationId) {
    return this.http.get(`${this.baseUrl}/quiz-results/formation/${formationId}`, { headers: this.getHeaders() });
  }
  /**
   * Résultats d'un quiz spécifique
   * GET /api/quiz-results/quiz/{quizId}
   */
  getMesResultatsQuiz(quizId) {
    return this.http.get(`${this.baseUrl}/quiz-results/quiz/${quizId}`, { headers: this.getHeaders() });
  }
  /**
   * Tous mes résultats de quiz
   * GET /api/quiz-results
   */
  getTousMesResultatsQuiz() {
    return this.http.get(`${this.baseUrl}/quiz-results`, { headers: this.getHeaders() });
  }
  // ===============================
  // 📅 PLANNING EMPLOYÉ
  // ===============================
  getMonPlanning(annee, mois) {
    const params = new HttpParams().set("annee", String(annee)).set("mois", String(mois));
    return this.http.get(`${this.baseUrl}/student/planning`, {
      headers: this.getHeaders(),
      params
    });
  }
  // ===============================
  // 🎯 COMPÉTENCES EMPLOYÉ
  // ===============================
  //competences acquises
  getMesCompetences() {
    return this.http.get(`${this.baseUrl}/student/competences`, {
      headers: this.getHeaders()
    });
  }
  //Competences recommandées
  getCompetencesRecommandees() {
    return this.http.get(`${this.baseUrl}/student/competences/recommandees`);
  }
  //Ecart de ccompetences 
  getEcartCompetences() {
    return this.http.get(`${this.baseUrl}/student/competences/ecart`);
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
//# sourceMappingURL=chunk-335YI34S.js.map
