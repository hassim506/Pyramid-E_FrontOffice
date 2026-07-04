import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormationsApiResponse } from '../../models/formation.models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormationsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('pyramid_token');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) headers = headers.set('Authorization', `Bearer ${token}`);
    return headers;
  }

  // ===============================
  // 📚 FORMATIONS
  // ===============================

  getAllFormations(): Observable<FormationsApiResponse> {
    return this.http.get<FormationsApiResponse>(`${this.apiUrl}/formations`, { headers: this.getHeaders() });
  }

  getFormationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/formations/${id}`, { headers: this.getHeaders() });
  }

  getFormationStructure(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/formations/${id}/structure`, { headers: this.getHeaders() });
  }

  // ===============================
  // 🎓 FORMATIONS EMPLOYÉ
  // ===============================

  getMesFormations(): Observable<FormationsApiResponse> {
    return this.http.get<FormationsApiResponse>(`${this.apiUrl}/mes-formations`, { headers: this.getHeaders() });
  }

  getMesFormationsByStatus(status: string): Observable<FormationsApiResponse> {
    return this.http.get<FormationsApiResponse>(`${this.apiUrl}/mes-formations?status=${status}`, { headers: this.getHeaders() });
  }

  getMyCertificates(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/mes-certificats`, { headers: this.getHeaders() });
  }

  viewCertificate(formationId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/formations/${formationId}/certificat`, { headers: this.getHeaders() });
  }

  downloadCertificate(formationId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/formations/${formationId}/certificat/download`, {
      headers: this.getHeaders(),
      responseType: 'blob'
    });
  }

  // ===============================
  // 📝 DEMANDES FORMATION — LISTES FILTRÉES
  // ===============================

  getSessionsOuvertes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/listes/sessions`, { headers: this.getHeaders() });
  }

  getMesSessionsAcceptees(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sessions/acceptees`, { headers: this.getHeaders() });
  }

  getSessionDetail(sessionId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sessions-formation/${sessionId}`, { headers: this.getHeaders() });
  }

  getCatalogues(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/listes/catalogues`, { headers: this.getHeaders() });
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/listes/categories-formation`, { headers: this.getHeaders() });
  }

  // ===============================
  // 🗺️ PARCOURS — FLUX 3 NIVEAUX (demandes)
  // ===============================

  getParcoursDisponibles(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/listes/parcours`, { headers: this.getHeaders() });
  }

  getParcoursDetails(parcoursId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/parcours/${parcoursId}/details`, { headers: this.getHeaders() });
  }

  getCategoriesDuParcours(parcoursId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/listes/parcours/${parcoursId}/categories`, { headers: this.getHeaders() });
  }

  getFormationsDuParcoursParCategorie(parcoursId: number, categorieId: number | null): Observable<any> {
    const url = categorieId != null
      ? `${this.apiUrl}/demandes-formation/listes/parcours/${parcoursId}/categories/${categorieId}/formations`
      : `${this.apiUrl}/demandes-formation/listes/parcours/${parcoursId}/formations`;
    return this.http.get<any>(url, { headers: this.getHeaders() });
  }

  getParcoursParCategorie(categorieId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/listes/parcours/${categorieId}`, { headers: this.getHeaders() });
  }

  getFormationsByCategorie(categorieId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/listes/formations/categories-formation/${categorieId}`, { headers: this.getHeaders() });
  }

  // ===============================
  // 🗺️ PARCOURS — EMPLOYÉ (assignés + progression)
  // ===============================

  getMesParcoursAssignes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/parcours/assignes`, { headers: this.getHeaders() });
  }

  getParcoursDetail(parcoursId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/parcours/${parcoursId}/detail`, { headers: this.getHeaders() });
  }

  getParcoursProgression(parcoursId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/parcours/${parcoursId}/progression`, { headers: this.getHeaders() });
  }

  // ===============================
  // 🏢 CATALOGUES EMPLOYÉ
  // ===============================

  getCataloguesEmploye(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employe/catalogues`, { headers: this.getHeaders() });
  }

  getMesCataloguesAssignes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/catalogues/assignes`, { headers: this.getHeaders() });
  }

  getCatalogueDetail(catalogueId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/catalogues/${catalogueId}`, { headers: this.getHeaders() });
  }

  getCatalogueProgression(catalogueId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/catalogues/${catalogueId}/progression`, { headers: this.getHeaders() });
  }

  // ===============================
  // 🔁 DEMANDES
  // ===============================

  relancerDemande(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/demandes/${id}/relancer`, {}, { headers: this.getHeaders() });
  }

  // ===============================
  // 📊 DASHBOARD EMPLOYÉ
  // ===============================

  getDashboardStats(params: { periode: string; annee: number; mois: number }): Observable<any> {
    const httpParams = new HttpParams()
      .set('periode', params.periode)
      .set('annee',   String(params.annee))
      .set('mois',    String(params.mois));
    return this.http.get(`${this.apiUrl}/mes-statistiques-dashboard`, { headers: this.getHeaders(), params: httpParams });
  }

  // ===============================
  // 🧠 QUIZ EMPLOYÉ
  // ===============================

  /**
   * Liste des quiz d'une formation
   * GET /api/quizzes/formation/{formationId}
   */
  getQuizzesParFormation(formationId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quizzes/formation/${formationId}`, { headers: this.getHeaders() });
  }

  /**
   * Tous les quiz disponibles
   * GET /api/quizzes
   */
  getTousLesQuizzes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quizzes`, { headers: this.getHeaders() });
  }

  /**
   * Détail d'un quiz avec ses questions et réponses
   * GET /api/quizzes/{id}
   */
  getQuizDetail(quizId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quizzes/${quizId}`, { headers: this.getHeaders() });
  }

  /**
   * Questions d'un quiz
   * GET /api/quizzes/{quizId}/questions
   */
  getQuestionsQuiz(quizId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quizzes/${quizId}/questions`, { headers: this.getHeaders() });
  }

  /**
   * Soumettre les réponses d'un quiz
   * POST /api/quizzes/{id}/submit
   */
  soumettreQuiz(quizId: number, answers: { question_id: number; reponse_id: number }[]): Observable<any> {
  return this.http.post<any>(
    `${this.apiUrl}/quizzes/${quizId}/submit`,
    { answers },
    { headers: this.getHeaders() }
  );
}

  /**
   * Résultats de mes quiz pour une formation
   * GET /api/quiz-results/formation/{formationId}
   */
  getMesResultatsQuizFormation(formationId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quiz-results/formation/${formationId}`, { headers: this.getHeaders() });
  }

  /**
   * Résultats d'un quiz spécifique
   * GET /api/quiz-results/quiz/{quizId}
   */
  getMesResultatsQuiz(quizId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quiz-results/quiz/${quizId}`, { headers: this.getHeaders() });
  }

  /**
   * Tous mes résultats de quiz
   * GET /api/quiz-results
   */
  getTousMesResultatsQuiz(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quiz-results`, { headers: this.getHeaders() });
  }

  // ===============================
// 📅 PLANNING EMPLOYÉ
// ===============================

getMonPlanning(annee: number, mois: number): Observable<any> {
  const params = new HttpParams()
    .set('annee', String(annee))
    .set('mois',  String(mois));
  return this.http.get<any>(`${this.apiUrl}/student/planning`, {
    headers: this.getHeaders(),
    params
  });
}

// ===============================
// 🎯 COMPÉTENCES EMPLOYÉ
// ===============================

//competences acquises
getMesCompetences(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/student/competences`, {
    headers: this.getHeaders()
  });
}

//Competences recommandées
getCompetencesRecommandees(): Observable<any> {
  return this.http.get(`${this.apiUrl}/student/competences/recommandees`);
}
}
