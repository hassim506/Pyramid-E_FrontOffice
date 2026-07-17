// src/app/shared/service/formation.service.ts
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { FormationsApiResponse } from '../../models/formation.models';

@Injectable({
  providedIn: 'root'
})

export class FormationService {
  // /adminrh/formations — filtered by the RH's entreprise
  //getCompetencesAcquises() {
   // throw new //Error('Method not implemented.');
  //}
  getCompetencesAcquises(): Observable<any> {
    const user = this.getCurrentUser();
    const userId = user?.id ?? user?.user_id;

    const url = userId
      ? `${this.baseUrl}/student/competences/${userId}/formations`
      : `${this.baseUrl}/student/competences`;

    return this.http.get<any>(url, {
      headers: this.getHeaders()
    });
  }

  private getCurrentUser(): any {
    try {
      return JSON.parse(localStorage.getItem('pyramide_user') || 'null');
    } catch {
      return null;
    }
  }
  // private apiUrl = 'http://localhost:8000/api';


  publishFormation(id: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/formations/${id}/publish`, { est_publier: true }, {
      headers: this.getHeaders()
    });
  }

unpublishFormation(id: number): Observable<any> {
  return this.http.put<any>(`${this.baseUrl}/formations/${id}/unpublish`, { est_publier: false }, {
    headers: this.getHeaders()
  });
}

  private baseUrl = environment.apiUrl;
  private storageBase = environment.apiUrl.replace('/api', '');
  handleError: any;

  getImageUrl(imageCouverture: string | null | undefined): string {
    if (!imageCouverture) return 'assets/img/course/course-01.jpg';
    if (imageCouverture.startsWith('http')) return imageCouverture;
    return `${this.storageBase}/storage/${imageCouverture}`;
  }

  constructor(private http: HttpClient) {}

  private getHeaders(): any {
    const token = localStorage.getItem('pyramide_token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

  }

  private getAuthHeader(): any {
    const token = localStorage.getItem('pyramide_token');
    return { 'Authorization': `Bearer ${token}` };
  }

  uploadImageCouverture(file: File): Observable<any> {
    const fd = new FormData();
    fd.append('image', file);
    return this.http.post<any>(`${this.baseUrl}/upload/image`, fd, {
      headers: this.getAuthHeader()
    });
  }

  uploadFile(file: File): Observable<any> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/upload/file`, fd, {
      headers: this.getAuthHeader()
    });
  }

  // /adminrh/formations — filtered by the RH's entreprise
  getFormationsrh(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/formations`, {
      headers: this.getHeaders()
    });
  }

  getParticipantsFormation(formationId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/formations/${formationId}/participants`, {
      headers: this.getHeaders()
    });
  }

  inscriptionDirecte(payload: { formation_id: number; user_id: number }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/formations/inscription-directe`, payload, {
      headers: this.getHeaders()
    });
  }

  desinscriptionDirecte(payload: { formation_id: number; user_id: number }): Observable<any> {
    return this.http.delete<any>(
      `${this.baseUrl}/formations/${payload.formation_id}/employes/${payload.user_id}`,
      { headers: this.getHeaders() }
    );
  }
   getFormationsformateur(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/formateur/formations`, {
      headers: this.getHeaders()
    });
  }

  getApprenantsUniques(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/formateur/apprenants-uniques`, {
      headers: this.getHeaders()
    });
  }
  getFormationFormateurById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/formateurs/${id}/formations`, {
      headers: this.getHeaders()
    });
  }
  getFormations(p0: { page: number; limit: number; entreprise_id?: number }): Observable<any> {
    const params: any = {};
    if (p0.entreprise_id) params['entreprise_id'] = p0.entreprise_id;
    return this.http.get<any>(`${this.baseUrl}/formations`, {
      headers: this.getHeaders(),
      params,
    });
  }

  getFormationsByEntreprise(entrepriseId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/formations`, {
      headers: this.getHeaders(),
      params: { entreprise_id: entrepriseId },
    });
  }

  createFormation(formationData: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/formations`, formationData, {
    headers: this.getHeaders()
  });
}

updateFormation(id: number, formationData: any): Observable<any> {
  return this.http.put<any>(`${this.baseUrl}/formations/${id}`, formationData, {
    headers: this.getHeaders()
  });
}

  deleteFormation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/formations/${id}`, {
      headers: this.getHeaders()
    });
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/categories-formation`, {
      headers: this.getHeaders()
    });
  }
  getCatalogues(): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/demandes-formation/listes/catalogues`, {
    headers: this.getHeaders()
  });
}

  getFormationById(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/formations/${id}`);
}

enrollInFormation(formationId: string): Observable<any> {
  return this.http.post(`${this.baseUrl}/formations/${formationId}/enroll`, {});
}


addComment(commentData: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/comments`, commentData);
}

 // ===============================
  // 📚 FORMATIONS
  // ===============================

  getAllFormations(): Observable<FormationsApiResponse> {
    return this.http.get<FormationsApiResponse>(`${this.baseUrl}/formations`, { headers: this.getHeaders() });
  }

  // getFormationById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/formations/${id}`, { headers: this.getHeaders() });
  // }

  getFormationStructure(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl }/formations/${id}/structure`, { headers: this.getHeaders() });
  }

  // ===============================
  // 🎓 FORMATIONS EMPLOYÉ
  // ===============================

  getMesFormations(): Observable<FormationsApiResponse> {
    return this.http.get<FormationsApiResponse>(`${this.baseUrl}/mes-formations`, { headers: this.getHeaders() });
  }

  getMesFormationsByStatus(status: string): Observable<FormationsApiResponse> {
    return this.http.get<FormationsApiResponse>(`${this.baseUrl }/mes-formations?status=${status}`, { headers: this.getHeaders() });
  }

  getMyCertificates(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/mes-certificats`, { headers: this.getHeaders() });
  }

  viewCertificate(formationId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl }/formations/${formationId}/certificat`, { headers: this.getHeaders() });
  }

  downloadCertificate(formationId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl  }/formations/${formationId}/certificat/download`, {
      headers: this.getHeaders(),
      responseType: 'blob'
    });
  }

  // ===============================
  // 📝 DEMANDES FORMATION — LISTES FILTRÉES
  // ===============================

  getSessionsOuvertes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation/listes/sessions`, { headers: this.getHeaders() });
  }

  getMesSessionsAcceptees(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl }/sessions/acceptees`, { headers: this.getHeaders() });
  }

  getSessionDetail(sessionId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/sessions-formation/${sessionId}`, { headers: this.getHeaders() });
  }

  getCataloguesForEmploye(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl   }/demandes-formation/listes/catalogues`, { headers: this.getHeaders() });
  }

  getFormationsForEmploye(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation/listes/formations`, { headers: this.getHeaders() });
  }

  getCategoriesForEmploye(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation/listes/categories-formation`, { headers: this.getHeaders() });
  }

  // ===============================
  // 🗺️ PARCOURS — FLUX 3 NIVEAUX (demandes)
  // ===============================

  getParcoursDisponibles(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation/listes/parcours`, { headers: this.getHeaders() });
  }

  getParcoursDetails(parcoursId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/parcours/${parcoursId}/details`, { headers: this.getHeaders() });
  }

  getCategoriesDuParcours(parcoursId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation/listes/parcours/${parcoursId}/categories`, { headers: this.getHeaders() });
  }

  getFormationsDuParcoursParCategorie(parcoursId: number, categorieId: number | null): Observable<any> {
    const url = categorieId != null
      ? `${this.baseUrl}/demandes-formation/listes/parcours/${parcoursId}/categories/${categorieId}/formations`
      : `${this.baseUrl}/demandes-formation/listes/parcours/${parcoursId}/formations`;
    return this.http.get<any>(url, { headers: this.getHeaders() });
  }

  getParcoursParCategorie(categorieId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation/listes/parcours/${categorieId}`, { headers: this.getHeaders() });
  }

  getFormationsByCategorie(categorieId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation/listes/formations/categories-formation/${categorieId}`, { headers: this.getHeaders() });
  }

  // ===============================
  // 🗺️ PARCOURS — EMPLOYÉ (assignés + progression)
  // ===============================

  getMesParcoursAssignes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation/parcours/assignes`, { headers: this.getHeaders() });
  }

  getParcoursDetail(parcoursId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/parcours/${parcoursId}/detail`, { headers: this.getHeaders() });
  }

  getParcoursProgression(parcoursId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/parcours/${parcoursId}/progression`, { headers: this.getHeaders() });
  }

  // ===============================
  // 🏢 CATALOGUES EMPLOYÉ
  // ===============================

  getCataloguesEmploye(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/employe/catalogues`, { headers: this.getHeaders() });
  }

  getMesCataloguesAssignes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/catalogues/assignes`, { headers: this.getHeaders() });
  }

  getCatalogueDetail(catalogueId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/catalogues/${catalogueId}`, { headers: this.getHeaders() });
  }

  getCatalogueProgression(catalogueId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/catalogues/${catalogueId}/progression`, { headers: this.getHeaders() });
  }

  getCatalogueFormationsWithStatus(catalogueId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation/listes/catalogues/${catalogueId}/formations`, { headers: this.getHeaders() });
  }

  getParcoursFormationsWithStatus(parcoursId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation/listes/parcours/${parcoursId}/formations`, { headers: this.getHeaders() });
  }

  // ===============================
  // 🔒 VÉRIFICATION ACCÈS
  // ===============================

  verifierAccesFormation(formationId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation/verifier-acces/${formationId}`, { headers: this.getHeaders() });
  }

  // ===============================
  // 🔁 DEMANDES
  // ===============================

  relancerDemande(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/demandes/${id}/relancer`, {}, { headers: this.getHeaders() });
  }

  // ===============================
  // 📊 DASHBOARD EMPLOYÉ
  // ===============================

  getDashboardStats(params: { periode: string; annee: number; mois: number }): Observable<any> {
    const httpParams = new HttpParams()
      .set('periode', params.periode)
      .set('annee',   String(params.annee))
      .set('mois',    String(params.mois));
    return this.http.get(`${this.baseUrl}/mes-statistiques-dashboard`, { params: httpParams });
  }

  // ===============================
  // 🧠 QUIZ EMPLOYÉ
  // ===============================

  /**
   * Liste des quiz d'une formation
   * GET /api/quizzes/formation/{formationId}
   */
  getQuizzesParFormation(formationId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/quizzes/formation/${formationId}`, { headers: this.getHeaders() });
  }

  /**
   * Tous les quiz disponibles
   * GET /api/quizzes
   */
  getTousLesQuizzes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/quizzes`, { headers: this.getHeaders() });
  }

  /**
   * Détail d'un quiz avec ses questions et réponses
   * GET /api/quizzes/{id}
   */
  getQuizDetail(quizId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/quizzes/${quizId}`, { headers: this.getHeaders() });
  }

  /**
   * Questions d'un quiz
   * GET /api/quizzes/{quizId}/questions
   */
  getQuestionsQuiz(quizId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/quizzes/${quizId}/questions`, { headers: this.getHeaders() });
  }

  /**
   * Soumettre les réponses d'un quiz
   * POST /api/quizzes/{id}/submit
   */
  soumettreQuiz(quizId: number, answers: { question_id: number; reponse_id: number }[]): Observable<any> {
  return this.http.post<any>(
    `${this.baseUrl}/quizzes/${quizId}/submit`,
    { answers },
    { headers: this.getHeaders() }
  );
}

  /**
   * Résultats de mes quiz pour une formation
   * GET /api/quiz-results/formation/{formationId}
   */
  getMesResultatsQuizFormation(formationId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/quiz-results/formation/${formationId}`, { headers: this.getHeaders() });
  }

  /**
   * Résultats d'un quiz spécifique
   * GET /api/quiz-results/quiz/{quizId}
   */
  getMesResultatsQuiz(quizId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/quiz-results/quiz/${quizId}`, { headers: this.getHeaders() });
  }

  /**
   * Tous mes résultats de quiz
   * GET /api/quiz-results
   */
  getTousMesResultatsQuiz(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/quiz-results`, { headers: this.getHeaders() });
  }

  // ===============================
// 📅 PLANNING EMPLOYÉ
// ===============================

getMonPlanning(annee: number, mois: number): Observable<any> {
  const params = new HttpParams()
    .set('annee', String(annee))
    .set('mois',  String(mois));
  return this.http.get<any>(`${this.baseUrl}/student/planning`, {
    headers: this.getHeaders(),
    params
  });
}

// ===============================
// 🎯 COMPÉTENCES EMPLOYÉ
// ===============================

//competences acquises
getMesCompetences(): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/student/competences`, {
    headers: this.getHeaders()
  });
}

//Competences recommandées
getCompetencesRecommandees(): Observable<any> {
  return this.http.get(`${this.baseUrl}/student/competences/recommandees`, {
    headers: this.getHeaders()
  });
}

getEcartCompetences(): Observable<any> {
  return this.http.get(`${this.baseUrl}/student/competences/ecart`, {
    headers: this.getHeaders()
  });
}






}
