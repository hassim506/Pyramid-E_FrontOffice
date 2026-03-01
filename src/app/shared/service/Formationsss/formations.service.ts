import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormationsApiResponse } from '../../models/Formations.models';

@Injectable({
  providedIn: 'root',
})
export class FormationsService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  // ===============================
  // 🔐 HEADERS AUTH
  // ===============================
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('pyramid_token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  // ===============================
  // 📚 FORMATIONS
  // ===============================

  /** 🔹 Toutes les formations */
  getAllFormations(): Observable<FormationsApiResponse> {
    return this.http.get<FormationsApiResponse>(
      `${this.apiUrl}/formations`,
      { headers: this.getHeaders() }
    );
  }

  /** 🔹 Détails formation */
  getFormationById(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/formations/${id}`,
      { headers: this.getHeaders() }
    );
  }

  /** 🔹 Structure complète formation */
  getFormationStructure(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/formations/${id}/structure`,
      { headers: this.getHeaders() }
    );
  }

  // ===============================
  // 🎓 FORMATIONS EMPLOYÉ
  // ===============================

  /** 🔥 Formations suivies par l’employé */
  getMesFormations(): Observable<FormationsApiResponse> {
    return this.http.get<FormationsApiResponse>(
      `${this.apiUrl}/mes-formations`,
      { headers: this.getHeaders() }
    );
  }

  /** 🔥 Formations par statut */
  getMesFormationsByStatus(status: string): Observable<FormationsApiResponse> {
    return this.http.get<FormationsApiResponse>(
      `${this.apiUrl}/mes-formations?status=${status}`,
      { headers: this.getHeaders() }
    );
  }

  /** 🔥 Nombre de certificats */
  getMyCertificates(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/mes-certificats`,
      { headers: this.getHeaders() }
    );
  }

  /** 🔥 Visualiser certificat */
  viewCertificate(formationId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/formations/${formationId}/certificat`,
      { headers: this.getHeaders() }
    );
  }

  /** 🔥 Télécharger certificat */
  downloadCertificate(formationId: number): Observable<Blob> {
    return this.http.get(
      `${this.apiUrl}/formations/${formationId}/certificat/download`,
      {
        headers: this.getHeaders(),
        responseType: 'blob'
      }
    );
  }

  // ===============================
  // 📝 DEMANDES FORMATION - LISTES FILTRÉES
  // ===============================

  /** 🔹 Sessions ouvertes */
  getSessionsOuvertes(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/demandes-formation/listes/sessions`,
      { headers: this.getHeaders() }
    );
  }

  /** 🔹 Catalogues */
  getCatalogues(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/demandes-formation/listes/catalogues`,
      { headers: this.getHeaders() }
    );
  }

  /** 🔹 Catégories */
  getCategories(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/demandes-formation/listes/categories-formation`,
      { headers: this.getHeaders() }
    );
  }

  /** 🔹 Parcours par catégorie */
  getParcoursParCategorie(categorieId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/demandes-formation/listes/parcours/${categorieId}`,
      { headers: this.getHeaders() }
    );
  }

  /** 🔹 Formations par catégorie */
  getFormationsByCategorie(categorieId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/demandes-formation/listes/formations/categories-formation/${categorieId}`,
      { headers: this.getHeaders() }
    );
  }

  // ===============================
  // 🏢 CATALOGUES EMPLOYÉ
  // ===============================

  /** 🔹 Catalogues filtrés par entreprise */
  getCataloguesEmploye(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/employe/catalogues`,
      { headers: this.getHeaders() }
    );
  }

  /** 🔹 Détail catalogue */
  getCatalogueDetail(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/employe/catalogues/${id}`,
      { headers: this.getHeaders() }
    );
  }

  // ===============================
  // 🔁 DEMANDES
  // ===============================

  /** 🔹 Relancer une demande */
  relancerDemande(id: number): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/demandes/${id}/relancer`,
      {},
      { headers: this.getHeaders() }
    );
  }
}