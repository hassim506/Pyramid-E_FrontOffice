import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DemandeFormationResponse, ActionDemandeRequest } from '../../models/formation.models';
// import { Role, RoleResponse, AssignRoleRequest } from '../../models/role.models';

import { AuthService } from '../authentification/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DemandeFormationService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  // Lister les demandes de formation
  getDemandesFormation(): Observable<DemandeFormationResponse> {
    return this.http.get<DemandeFormationResponse>(`${this.apiUrl}/demandes-formation`, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // Valider une demande
  validerDemande(id: number, data: ActionDemandeRequest = {}): Observable<any> {
    return this.http.put(`${this.apiUrl}/demandes-formation/${id}/valider`, data, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // Refuser une demande
  refuserDemande(id: number, data: ActionDemandeRequest): Observable<any> {
    return this.http.put(`${this.apiUrl}/demandes-formation/${id}/refuser`, data, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // Annuler une demande
  annulerDemande(id: number, data: ActionDemandeRequest = {}): Observable<any> {
    return this.http.put(`${this.apiUrl}/demandes-formation/${id}/annuler`, data, {
      headers: this.getHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // Créer une demande de formation (Employé)
creerDemande(payload: {
  formation_id: number;
  motif_demande: string;
  objectifs_personnels: string;
  priorite: string;
  date_souhaitee_debut?: string;
  commentaire_employe?: string;
}): Observable<any> {
  return this.http.post(
    `${this.apiUrl}/demandes-formation`,
    payload,
    {
      headers: this.getHeaders()
    }
  ).pipe(
    catchError(this.handleError.bind(this))
  );
}

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Erreur API Demandes Formation:', error);
    return throwError(() => error);
  }
}