import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  // Pagination côté serveur pour gérer des millions d'utilisateurs
  getUsers(page: number = 1, perPage: number = 50, search?: string): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    if (search && search.trim()) {
      params = params.set('search', search.trim());
    }
    
    return this.http.get<any>(`${this.baseUrl}/users`, { 
      headers: this.getHeaders(),
      params: params
    });
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`, { headers: this.getHeaders() });
  }

  createUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users`, data, { headers: this.getHeaders() });
  }

  // CORRECTION ICI : utiliser /users/{id} au lieu de /user/{id}
  updateUser(id: number, data: any): Observable<any> {
    console.log(`Appel PUT vers: ${this.baseUrl}/users/${id}`); // Debug
    return this.http.put<any>(`${this.baseUrl}/users/${id}`, data, { headers: this.getHeaders() });
  }
getUsersByCompany(companyId: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/users?entreprise_id=${companyId}`, {
    headers: this.getHeaders()
  });
}


// Méthode alternative pour récupérer seulement le nombre
getEmployeeCount(companyId: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/users/count?entreprise_id=${companyId}`, {
    headers: this.getHeaders()
  });
}

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users/${id}`, { headers: this.getHeaders() });
  }
}

