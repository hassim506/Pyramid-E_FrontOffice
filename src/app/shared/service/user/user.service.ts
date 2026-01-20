import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}
private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
  
  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

  getMyUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/mes-utilisateurs-rh`);
  }

  getMyUsersgroup(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/mes-utilisateurs-rhg`);
  }
  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users`, data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/users/${id}`, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users/${id}`);
  }
  
getRoles(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/roles`, { headers: this.getHeaders() });
}

  

}