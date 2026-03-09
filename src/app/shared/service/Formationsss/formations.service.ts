import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormationsApiResponse } from '../../models/Formations.models';

@Injectable({
  providedIn: 'root',
})
export class FormationsService {

  private apiUrl = 'http://localhost:8000/api';

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
  // 📝 DEMANDES FORMATION - LISTES FILTRÉES
  // ===============================

  getSessionsOuvertes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/listes/sessions`, { headers: this.getHeaders() });
  }

  getCatalogues(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/listes/catalogues`, { headers: this.getHeaders() });
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/listes/categories-formation`, { headers: this.getHeaders() });
  }

  // ===============================
  // 🗺️ PARCOURS — FLUX 3 NIVEAUX
  // ===============================

  /**
   * Étape 1 — Parcours filtrés par domaine + entreprise
   * GET /demandes-formation/listes/parcours
   */
  getParcoursDisponibles(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/demandes-formation/listes/parcours`,
      { headers: this.getHeaders() }
    );
  }

  /**
   * Détail complet d'un parcours (modal détail)
   * GET /parcours/{id}/details
   */
  getParcoursDetails(parcoursId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/parcours/${parcoursId}/details`,
      { headers: this.getHeaders() }
    );
  }

  /**
   * Étape 2 — Catégorie du parcours (via categorie_id direct)
   * GET /demandes-formation/listes/parcours/{parcoursId}/categories
   */
  getCategoriesDuParcours(parcoursId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/demandes-formation/listes/parcours/${parcoursId}/categories`,
      { headers: this.getHeaders() }
    );
  }

  /**
   * Étape 3 — Formations de la catégorie dans le parcours
   * GET /demandes-formation/listes/parcours/{parcoursId}/categories/{categorieId}/formations
   */
  getFormationsDuParcoursParCategorie(parcoursId: number, categorieId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/demandes-formation/listes/parcours/${parcoursId}/categories/${categorieId}/formations`,
      { headers: this.getHeaders() }
    );
  }

  /** Gardé pour usage optionnel ailleurs */
  getParcoursParCategorie(categorieId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/demandes-formation/listes/parcours/${categorieId}`,
      { headers: this.getHeaders() }
    );
  }

  getFormationsByCategorie(categorieId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/demandes-formation/listes/formations/categories-formation/${categorieId}`,
      { headers: this.getHeaders() }
    );
  }

  getMesParcoursAssignes(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/demandes-formation/parcours/assignes`, { headers: this.getHeaders() });
}

  // ===============================
  // 🏢 CATALOGUES EMPLOYÉ
  // ===============================

  getCataloguesEmploye(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employe/catalogues`, { headers: this.getHeaders() });
  }

  getCatalogueDetail(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employe/catalogues/${id}`, { headers: this.getHeaders() });
  }
  
  getMesCataloguesAssignes(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/catalogues/assignes`, { headers: this.getHeaders() });
}
  // ===============================
  // 🔁 DEMANDES
  // ===============================

  relancerDemande(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/demandes/${id}/relancer`, {}, { headers: this.getHeaders() });
  }
  /**
 * Récupère les statistiques complètes pour le dashboard employé.
 * Endpoint : GET /api/mes-statistiques-dashboard
 *
 * @param params { periode: 'mois'|'annee', annee: number, mois: number }
 */
getDashboardStats(params: { periode: string; annee: number; mois: number }): Observable<any> {
  const httpParams = new HttpParams()
    .set('periode', params.periode)
    .set('annee',   String(params.annee))
    .set('mois',    String(params.mois));

  return this.http.get(`${this.apiUrl}/mes-statistiques-dashboard`, { params: httpParams });
}
}