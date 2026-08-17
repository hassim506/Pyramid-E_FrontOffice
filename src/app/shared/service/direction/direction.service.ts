import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Direction {
  id: number;
  entreprise_id: number;
  parent_id: number | null;
  nom: string;
  type: 'direction' | 'sous_direction' | 'departement';
  description: string | null;
  code: string | null;
  responsable_id: number | null;
  est_active: boolean;
  parent?: Direction;
  enfants?: Direction[];
  responsable?: { id: number; nom: string; prenom: string; email: string };
  employes?: any[];
  employes_count?: number;
  created_at?: string;
  updated_at?: string;
}

export interface DirectionCreateRequest {
  nom: string;
  type: 'direction' | 'sous_direction' | 'departement';
  parent_id?: number | null;
  description?: string;
  code?: string;
  responsable_id?: number | null;
}

@Injectable({ providedIn: 'root' })
export class DirectionService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('pyramide_token');
    return { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
  }

  private getEntrepriseId(): number {
    const user = JSON.parse(localStorage.getItem('pyramide_user') || '{}');
    return user.entreprise_id;
  }

  getAll(params?: { type?: string; parent_id?: number; racines_only?: boolean; search?: string }): Observable<any> {
    const entrepriseId = this.getEntrepriseId();
    let url = `${this.baseUrl}/entreprises/${entrepriseId}/directions`;
    const queryParts: string[] = [];
    if (params?.type) queryParts.push(`type=${params.type}`);
    if (params?.parent_id) queryParts.push(`parent_id=${params.parent_id}`);
    if (params?.racines_only) queryParts.push(`racines_only=1`);
    if (params?.search) queryParts.push(`search=${encodeURIComponent(params.search)}`);
    if (queryParts.length) url += '?' + queryParts.join('&');
    return this.http.get<any>(url, { headers: this.getHeaders() });
  }

  getArborescence(): Observable<any> {
    const entrepriseId = this.getEntrepriseId();
    return this.http.get<any>(`${this.baseUrl}/entreprises/${entrepriseId}/directions/arborescence`, { headers: this.getHeaders() });
  }

  getById(id: number): Observable<any> {
    const entrepriseId = this.getEntrepriseId();
    return this.http.get<any>(`${this.baseUrl}/entreprises/${entrepriseId}/directions/${id}`, { headers: this.getHeaders() });
  }

  create(data: DirectionCreateRequest): Observable<any> {
    const entrepriseId = this.getEntrepriseId();
    return this.http.post<any>(`${this.baseUrl}/entreprises/${entrepriseId}/directions`, data, { headers: this.getHeaders() });
  }

  update(id: number, data: Partial<DirectionCreateRequest & { est_active: boolean }>): Observable<any> {
    const entrepriseId = this.getEntrepriseId();
    return this.http.put<any>(`${this.baseUrl}/entreprises/${entrepriseId}/directions/${id}`, data, { headers: this.getHeaders() });
  }

  delete(id: number): Observable<any> {
    const entrepriseId = this.getEntrepriseId();
    return this.http.delete<any>(`${this.baseUrl}/entreprises/${entrepriseId}/directions/${id}`, { headers: this.getHeaders() });
  }

  affecterEmployes(directionId: number, userIds: number[]): Observable<any> {
    const entrepriseId = this.getEntrepriseId();
    return this.http.post<any>(`${this.baseUrl}/entreprises/${entrepriseId}/directions/${directionId}/affecter`, { user_ids: userIds }, { headers: this.getHeaders() });
  }

  retirerEmployes(directionId: number, userIds: number[]): Observable<any> {
    const entrepriseId = this.getEntrepriseId();
    return this.http.post<any>(`${this.baseUrl}/entreprises/${entrepriseId}/directions/${directionId}/retirer`, { user_ids: userIds }, { headers: this.getHeaders() });
  }
}
