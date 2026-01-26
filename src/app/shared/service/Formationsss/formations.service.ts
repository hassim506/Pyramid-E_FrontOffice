import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormationApiResponse } from '../../models/Formations.models';

@Injectable({
  providedIn: 'root',
})
export class FormationsService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('pyramid_token');

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // ✅ Récupérer toutes les formations
  getAllFormations(): Observable<FormationApiResponse> {
    return this.http.get<FormationApiResponse>(
      `${this.apiUrl}/formations`,
      { headers: this.getHeaders() }
    );
  }

  // ✅ Envoyer une demande d'inscription
  requestFormation(formationId: number, payload: any): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/formations/${formationId}/request`,
      payload,
      { headers: this.getHeaders() }
    );
  }

  // ✅ Récupérer les détails d'une formation par ID
  getFormationById(formationId: number): Observable<FormationApiResponse> {
    return this.http.get<FormationApiResponse>(
      `${this.apiUrl}/formations/${formationId}`,
      { headers: this.getHeaders() }
    );
  }
}
