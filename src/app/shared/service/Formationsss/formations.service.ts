import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormationsApiResponse } from '../../models/formation.models';

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
  // 📝 DEMANDES FORMATION — LISTES FILTRÉES
  // ===============================

  getSessionsOuvertes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/listes/sessions`, { headers: this.getHeaders() });
  }
  
    getMesSessionsAcceptees(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sessions/acceptees`, { headers: this.getHeaders() });
  }
    getSessionDetail(sessionId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sessions/${sessionId}/detail`, { headers: this.getHeaders() });
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

  getFormationsDuParcoursParCategorie(parcoursId: number, categorieId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/listes/parcours/${parcoursId}/categories/${categorieId}/formations`, { headers: this.getHeaders() });
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

  /**
   * Liste des parcours assignés + progression calculée
   * GET /api/demandes-formation/parcours/assignes
   */
  getMesParcoursAssignes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/demandes-formation/parcours/assignes`, { headers: this.getHeaders() });
  }

  /**
   * Détail d'un parcours avec formations + progression individuelle
   * GET /api/parcours/{id}/detail
   */
  getParcoursDetail(parcoursId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/parcours/${parcoursId}/detail`, { headers: this.getHeaders() });
  }

  /**
   * Refresh progression rapide (appelé après retour de la lecture)
   * GET /api/parcours/{id}/progression
   */
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

  /**
   * Détail catalogue (header + formations)
   * GET /api/catalogues/{id}
   */
  getCatalogueDetail(catalogueId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/catalogues/${catalogueId}`, { headers: this.getHeaders() });
  }

  /**
   * Progression catalogue (formations + % par formation)
   * GET /api/catalogues/{id}/progression
   */
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
    return this.http.get(`${this.apiUrl}/mes-statistiques-dashboard`, { params: httpParams });
  }
}