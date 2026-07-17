import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DemandeFormationResponse, ActionDemandeRequest } from '../../models/formation.models';
// import { Role, RoleResponse, AssignRoleRequest } from '../../models/role.models';
import { AuthService } from '../authentification/auth.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeFormationService {
  private apiUrl = environment.apiUrl;

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

  // ✅ Pour l'employé connecté → /mes-demandes-formation
  getMesDemandes(): Observable<DemandeFormationResponse> {
    return this.http.get<DemandeFormationResponse>(
      `${this.apiUrl}/mes-demandes-formation`,
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError.bind(this)));
  }

  // ✅ Pour RH/Admin → /demandes-formation (permission requise)
  getDemandesFormation(): Observable<DemandeFormationResponse> {
    return this.http.get<DemandeFormationResponse>(
      `${this.apiUrl }/demandes-formation`,
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError.bind(this)));
  }


  // Valider une demande (RH)
  validerDemande(id: number, data: ActionDemandeRequest = {}): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/demandes-formation/${id}/valider`, data,
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError.bind(this)));
  }

  // Refuser une demande (RH)
  refuserDemande(id: number, data: ActionDemandeRequest): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/demandes-formation/${id}/refuser`, data,
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError.bind(this)));
  }

  // Annuler une demande (Employé)
  annulerDemande(id: number, data: ActionDemandeRequest = {}): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/demandes-formation/${id}/annuler`, data,
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError.bind(this)));
  }

  // Créer une demande (Employé)
  creerDemande(payload: {
    type_demande?: string;
    formation_id?: number;
    catalogue_id?: number;
    parcours_id?: number;
    session_formation_id?: number;
    motif_demande: string;
    objectifs_personnels: string;
    priorite: string;
    date_souhaitee_debut?: string;
    commentaire_employe?: string;
  }): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/demandes-formation`, payload,
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError.bind(this)));
  }

  relancerDemande(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/demandes/${id}/relancer`, {});
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Erreur API Demandes Formation:', error);
    return throwError(() => error);
  }
}
