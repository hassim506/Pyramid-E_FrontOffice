// src/app/shared/service/formation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FormationService {
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
  handleError: any;

  constructor(private http: HttpClient) {}

  private getHeaders(): any {
    const token = localStorage.getItem('pyramide_token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  }

  // /adminrh/formations — filtered by the RH's entreprise
  getFormationsrh(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/formations`, {
      headers: this.getHeaders()
    });
  }
   getFormationsformateur(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/formateur/formations`, { 
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
    return this.http.get<any>(`${this.baseUrl}/catalogues`, { 
      headers: this.getHeaders() 
    });
  }

  getFormationById(id: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/formations/${id}`);
}

enrollInFormation(formationId: string): Observable<any> {
  return this.http.post(`${this.baseUrl}/formations/${formationId}/enroll`, {});
}


addComment(commentData: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/comments`, commentData);
}

// creer une demande de formation employe





}