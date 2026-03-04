import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertifierService {
  private readonly apiUrl = 'https://api.certifier.io/v1';
  private readonly accessToken = 'cfp_o3eyPlaQVpOvL6Y63W2EqBnDXWsQ2No0g7x6'; //  token

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`,
      'Certifier-Version': '2022-10-26',
      'Content-Type': 'application/json'
    });
  }

  // Récupérer tous les credentials
  getCredentials(): Observable<any> {
    return this.http.get(`${this.apiUrl}/credentials`, {
      headers: this.getHeaders()
    });
  }

  // Créer un nouveau credential
  createCredential(credentialData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/credentials`, credentialData, {
      headers: this.getHeaders()
    });
  }

  // Récupérer un credential spécifique
  getCredential(credentialId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/credentials/${credentialId}`, {
      headers: this.getHeaders()
    });
  }

  // Mettre à jour un credential
  updateCredential(credentialId: string, credentialData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/credentials/${credentialId}`, credentialData, {
      headers: this.getHeaders()
    });
  }

  // Supprimer un credential
  deleteCredential(credentialId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/credentials/${credentialId}`, {
      headers: this.getHeaders()
    });
  }
}