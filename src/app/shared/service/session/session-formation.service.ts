// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SessionFormationService {
  
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

export interface SessionFormation {
  id: number;
  titre: string;
  code_session: string;
  formation_id: number;
  formateur_id: number;
  description: string;
  date_debut: string;
  date_fin: string;
  horaires: any;
  timezone: string;
  type: 'presentiel' | 'distanciel' | 'hybride';
  lieu: string;
  instructions_acces: string;
  capacite_max: number;
  capacite_min: number;
  inscription_ouverte: boolean;
  date_limite_inscription: string;
  statut: 'planifiee' | 'en_cours' | 'terminee' | 'annulee';
  motif_annulation?: string;
  evaluation_requise: boolean;
  certificat_delivre: boolean;
  documents_requis?: string[];
  materiel_requis?: string[];
  cout_par_participant: string;
  cout_total_session: string;
  budget_alloue: string;
  metadata?: any;
  notes_organisateur?: string;
  organisateur_id: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formation?: any;
  formateur?: any;
  organisateur?: any;
  nombre_inscrits: number;
  nombre_places_restantes: number;
  type_display: string;
  statut_display: string;
  duree_en_heures: number;
  peut_etre_inscrit: boolean;
}

export interface SessionFormationResponse {
  status: boolean;
  sessions: SessionFormation[];
  message?: string;
}

export interface SingleSessionResponse {
  status: boolean;
  session: SessionFormation;
  message?: string;
  statut?: 'planifiee' | 'en_cours' | 'terminee' | 'annulee';
  motif_annulation?: string;
}

export interface CreateSessionRequest {
  titre: string;
  formation_id: number;
  formateur_id: number;
  description?: string;
  date_debut: string;
  date_fin: string;
  horaires?: any;
  timezone?: string;
  type: 'presentiel' | 'distanciel' | 'hybride';
  lieu: string;
  instructions_acces?: string;
  capacite_max: number;
  capacite_min?: number;
  inscription_ouverte?: boolean;
  date_limite_inscription?: string;
  evaluation_requise?: boolean;
  certificat_delivre?: boolean;
  documents_requis?: string[];
  materiel_requis?: string[];
  cout_par_participant?: string;
  budget_alloue?: string;
  notes_organisateur?: string;
  statut?: 'planifiee' | 'en_cours' | 'terminee' | 'annulee';
  motif_annulation?: string;
  participant_ids?: number[];
}
@Injectable({
  providedIn: 'root'
})
export class SessionFormationService {
  private apiUrl = `${environment.apiUrl}/sessions-formation`;
  private apiUrlrh = `${environment.apiUrl}/adminrh/sessions`;

  private sessionsSubject = new BehaviorSubject<SessionFormation[]>([]);
  public sessions$ = this.sessionsSubject.asObservable();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  /**
   * Récupérer toutes les sessions de formation
   */
  getAllSessionsRH(params?: any): Observable<SessionFormationResponse> {
    let httpParams = new HttpParams();
    
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }

    return this.http.get<SessionFormationResponse>(this.apiUrlrh, {
      headers: this.httpOptions.headers,
      params: httpParams
    }).pipe(
      tap(response => {
        if (response?.status && response.sessions) {
          this.sessionsSubject.next(response.sessions);
        }
      }),
      catchError((error) => {
        console.error('getAllSessionsRH failed:', error);
        return of({ status: false, sessions: [] } as SessionFormationResponse);
      })
    );
  }

  getAllSessions(params?: any): Observable<SessionFormationResponse> {
    let httpParams = new HttpParams();
    
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }

    return this.http.get<SessionFormationResponse>(this.apiUrl, { 
      headers: this.httpOptions.headers,
      params: httpParams 
    }).pipe(
      tap(response => {
        if (response.status && response.sessions) {
          this.sessionsSubject.next(response.sessions);
        }
      }),
      catchError(this.handleError<SessionFormationResponse>('getAllSessions'))
    );
  }

  /**
   * Récupérer une session par son ID
   */
  getSessionById(id: number): Observable<SingleSessionResponse> {
    return this.http.get<SingleSessionResponse>(`${this.apiUrl}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<SingleSessionResponse>('getSessionById'))
      );
  }

  /**
   * Créer une nouvelle session de formation
   */
  createSession(sessionData: CreateSessionRequest): Observable<SingleSessionResponse> {
    return this.http.post<SingleSessionResponse>(this.apiUrl, sessionData, this.httpOptions)
      .pipe(
        tap(response => { if (response.status) this.refreshSessions(); }),
        catchError(this.handleError<SingleSessionResponse>('createSession'))
      );
  }

  createSessionRH(sessionData: CreateSessionRequest): Observable<SingleSessionResponse> {
    return this.http.post<SingleSessionResponse>(this.apiUrl, sessionData, this.httpOptions);
  }

  /**
   * Mettre à jour une session existante
   */
  updateSession(id: number, sessionData: Partial<CreateSessionRequest>): Observable<SingleSessionResponse> {
    return this.http.put<SingleSessionResponse>(`${this.apiUrl}/${id}`, sessionData, this.httpOptions)
      .pipe(
        tap(response => { if (response.status) this.refreshSessions(); }),
        catchError(this.handleError<SingleSessionResponse>('updateSession'))
      );
  }

  updateSessionRH(id: number, sessionData: Partial<CreateSessionRequest>): Observable<SingleSessionResponse> {
    return this.http.put<SingleSessionResponse>(`${this.apiUrl}/${id}`, sessionData, this.httpOptions);
  }

  /**
   * Supprimer une session
   */
  deleteSession(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions)
      .pipe(
        tap(() => this.refreshSessions()),
        catchError(this.handleError<any>('deleteSession'))
      );
  }

  deleteSessionRH(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  /**
   * Annuler une session
   */
cancelSession(id: number, motif: string): Observable<SingleSessionResponse> {
  const data: Partial<CreateSessionRequest> = { statut: 'annulee', motif_annulation: motif };
  return this.updateSessionRH(id, data);
}
  /**
   * Changer le statut d'une session
   */
changeSessionStatus(
  id: number,
  statut: 'planifiee' | 'en_cours' | 'terminee' | 'annulee'
): Observable<SingleSessionResponse> {
  const data: Partial<CreateSessionRequest> = { statut };
  return this.updateSession(id, data);
}
  /**
   * Ouvrir/fermer les inscriptions pour une session
   */
  toggleInscriptions(id: number, ouvert: boolean): Observable<SingleSessionResponse> {
    const data = { inscription_ouverte: ouvert };
    return this.updateSession(id, data);
  }

  /**
   * Récupérer les sessions d'une formation spécifique
   */
  getSessionsByFormation(formationId: number): Observable<SessionFormationResponse> {
    const params = { formation_id: formationId };
    return this.getAllSessions(params);
  }

  /**
   * Récupérer les sessions d'un formateur spécifique
   */
  getSessionsByFormateur(formateurId: number): Observable<SessionFormationResponse> {
    const params = { formateur_id: formateurId };
    return this.getAllSessions(params);
  }

  /**
   * Filtrer les sessions par statut
   */
  getSessionsByStatus(statut: string): Observable<SessionFormationResponse> {
    const params = { statut };
    return this.getAllSessions(params);
  }

  /**
   * Filtrer les sessions par type
   */
  getSessionsByType(type: string): Observable<SessionFormationResponse> {
    const params = { type };
    return this.getAllSessions(params);
  }

  /**
   * Récupérer les sessions à venir
   */
  getUpcomingSessions(): Observable<SessionFormationResponse> {
    const params = { upcoming: true };
    return this.getAllSessions(params);
  }

  /**
   * Récupérer les sessions en cours
   */
  getCurrentSessions(): Observable<SessionFormationResponse> {
    const params = { statut: 'en_cours' };
    return this.getAllSessions(params);
  }

  /**
   * Récupérer les statistiques des sessions
   */
  getSessionsStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats`, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('getSessionsStats'))
      );
  }

  /**
   * Dupliquer une session
   */
  duplicateSession(id: number, newData: Partial<CreateSessionRequest>): Observable<SingleSessionResponse> {
    return this.http.post<SingleSessionResponse>(`${this.apiUrl}/${id}/duplicate`, newData, this.httpOptions)
      .pipe(
        tap(response => {
          if (response.status) {
            this.refreshSessions();
          }
        }),
        catchError(this.handleError<SingleSessionResponse>('duplicateSession'))
      );
  }

  /**
   * Exporter les sessions (PDF, Excel, etc.)
   */
  exportSessions(format: 'pdf' | 'excel' = 'excel', filters?: any): Observable<Blob> {
    let params = new HttpParams().set('format', format);
    
    if (filters) {
      Object.keys(filters).forEach(key => {
        if (filters[key] !== null && filters[key] !== undefined && filters[key] !== '') {
          params = params.set(key, filters[key].toString());
        }
      });
    }

    return this.http.get(`${this.apiUrl}/export`, {
      params,
      responseType: 'blob'
    }).pipe(
      catchError(this.handleError<Blob>('exportSessions'))
    );
  }

  /**
   * Rafraîchir la liste des sessions
   */
  private refreshSessions(): void {
    this.getAllSessions().subscribe();
  }

  /**
   * Nettoyer les données (pour les tests ou le reset)
   */
  clearCache(): void {
    this.sessionsSubject.next([]);
  }

  /**
   * Méthodes utilitaires
   */
  
  /**
   * Formatter les horaires pour l'affichage
   */
  formatHoraires(horaires: any): string {
    if (!horaires || typeof horaires !== 'object') return '';
    
    return Object.entries(horaires).map(([date, info]: [string, any]) => {
      const dateFormatted = new Date(date).toLocaleDateString('fr-FR');
      return `${dateFormatted}: ${info.debut} - ${info.fin}`;
    }).join('\n');
  }

  /**
   * Calculer la durée totale d'une session
   */
  calculateSessionDuration(dateDebut: string, dateFin: string): number {
    const debut = new Date(dateDebut);
    const fin = new Date(dateFin);
    const diffMs = fin.getTime() - debut.getTime();
    return Math.ceil(diffMs / (1000 * 60 * 60)); // Retour en heures
  }

  /**
   * Vérifier si une session peut être modifiée
   */
  canModifySession(session: SessionFormation): boolean {
    const now = new Date();
    const dateDebut = new Date(session.date_debut);
    return session.statut === 'planifiee' && dateDebut > now;
  }

  /**
   * Vérifier si on peut encore s'inscrire à une session
   */
  canRegisterToSession(session: SessionFormation): boolean {
    if (!session.inscription_ouverte) return false;
    if (session.nombre_places_restantes <= 0) return false;
    if (session.statut !== 'planifiee') return false;
    
    const now = new Date();
    const dateLimite = new Date(session.date_limite_inscription);
    return now <= dateLimite;
  }

  /**
   * Gestion globale des erreurs
   */
  getSessionParticipants(sessionId: number): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/sessions-formation/${sessionId}/participants`,
      this.httpOptions
    );
  }

  inscrireEmploye(sessionId: number, userId: number): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/sessions-formation/${sessionId}/inscrire`,
      { user_id: userId },
      this.httpOptions
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      
      // Log vers un service de logging si nécessaire
      // this.logService.error(`SessionFormationService: ${operation} failed`, error);
      
      // Retourner un résultat vide pour que l'application continue de fonctionner
      return new Observable<T>(observer => {
        observer.next(result as T);
        observer.complete();
      });
    };
  }
}