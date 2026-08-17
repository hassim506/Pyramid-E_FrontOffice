import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
  
  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`, { headers: this.getHeaders() });
  }

  getEmployesByEntreprise(entrepriseId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/entreprises/${entrepriseId}/employes`, { headers: this.getHeaders() });
  }

  getMyUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/mes-utilisateurs-rh`, { headers: this.getHeaders() });
  }

  getFormateurs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/formateurs`, { headers: this.getHeaders() });
  }

  getMyUsersgroup(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/mes-utilisateurs-rhg`, { headers: this.getHeaders() });
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`, { headers: this.getHeaders() });
  }

  createUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users`, data, { headers: this.getHeaders() });
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/users/${id}`, data, { headers: this.getHeaders() });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users/${id}`, { headers: this.getHeaders() });
  }
  
  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/roles`, { headers: this.getHeaders() });
  }

  getEntreprises(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/entreprises`, { headers: this.getHeaders() });
  }


  // Import d'utilisateurs via fichier Excel/CSV
  importUsers(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.http.post<any>(`${this.baseUrl}/users/import`, formData, { 
      headers: this.getHeadersForFileUpload() 
    });
  }
  
  // Télécharger le template d'import
  downloadTemplate(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/import-template/users`, {
      headers: this.getHeaders(),
      responseType: 'blob'
    });
  }
  
  // Envoyer une invitation (activation) à un utilisateur
  sendInvitation(userId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/${userId}/send-invitation`, {}, { headers: this.getHeaders() });
  }

  // Activer manuellement un utilisateur
  activateManual(userId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/${userId}/activate-manual`, {}, { headers: this.getHeaders() });
  }

  // Envoyer des invitations en masse (par direction, rôle, ou sélection manuelle)
  sendMassInvitation(params: { direction_id?: number | null; role_id?: number | null; user_ids?: number[] }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/mass-invitation`, params, { headers: this.getHeaders() });
  }

  // Headers pour l'upload de fichier (sans Content-Type)
  private getHeadersForFileUpload(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
      // Pas de Content-Type pour FormData
    });
  }
}