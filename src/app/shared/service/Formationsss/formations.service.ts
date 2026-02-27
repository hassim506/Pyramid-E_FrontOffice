// src/app/shared/service/Formationsss/formations.service.ts

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FormationsApiResponse,
} from '../../models/Formations.models';

@Injectable({
  providedIn: 'root',
})
export class FormationsService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

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

  /** 🔹 Toutes les formations */
  getAllFormations(): Observable<FormationsApiResponse> {
    return this.http.get<FormationsApiResponse>(
      `${this.apiUrl}/formations`,
      { headers: this.getHeaders() }
    );
  }

  /** 🔹 Détails formation */
  getFormationById(id: number): Observable<FormationsApiResponse> {
    return this.http.get<FormationsApiResponse>(
      `${this.apiUrl}/formations/${id}`,
      { headers: this.getHeaders() }
    );
  }

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

  /** 🔥 Nombre de certificats utilisateur */
  getMyCertificates(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/mes-certificats`,
      { headers: this.getHeaders() }
    );
  }

    //Visualiser le certificat
  viewCertificate(formationId: number): Observable<any> {
  return this.http.get<any>(
    `${this.apiUrl}/formations/${formationId}/certificat`,
    { headers: this.getHeaders() }
  );
}


// Télécharger le certificat
downloadCertificate(formationId: number): Observable<Blob> {
  return this.http.get(
    `${this.apiUrl}/formations/${formationId}/certificat/download`,
    {
      headers: this.getHeaders(),
      responseType: 'blob'
    }
  );
}

  /** Structure complète formation (modules + Sections) */
  getFormationStructure(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/formations/${id}/structure`,
      { headers: this.getHeaders() }
    );
  }
  getSessionsOuvertes(): Observable<any> {
  return this.http.get<any>(
    `${this.apiUrl}/sessions-formation/ouvertes`,
    { headers: this.getHeaders() }
  );
}

getCatalogues(): Observable<any> {
  return this.http.get<any>(
    `${this.apiUrl}/catalogues`,
    { headers: this.getHeaders() }
  );
}

getCategories(): Observable<any> {
  return this.http.get<any>(
    `${this.apiUrl}/categories-formation`,
    { headers: this.getHeaders() }
  );
}

getFormationsByCategorie(categorieId: number): Observable<any> {
  return this.http.get<any>(
    `${this.apiUrl}/formations?categorie_id=${categorieId}`,
    { headers: this.getHeaders() }
  );
}

//
getParcoursParCategorie(categorieId: number): Observable<any> {
  return this.http.get<any>(
    `${this.apiUrl}/parcours/par-categorie/${categorieId}`,
    { headers: this.getHeaders() }
  );
}
}
