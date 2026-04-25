import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DashboardsService {
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
    return this.http.get<any>(`${this.baseUrl}/users`);
  }
  
}
