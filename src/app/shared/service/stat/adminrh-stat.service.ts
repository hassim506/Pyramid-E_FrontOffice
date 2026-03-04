import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

export interface AdminRHStats {
  totalUtilisateurs: number;
  totalFormations: number;
  totalFormateurs: number;
  totalDemandesFormation: number;
  totalSessionsFormation: number;
}

export interface FormationRecente {
  id: number;
  titre: string;
  image: string;
  inscrits: number;
  statut: string;
}

export interface FormationsParMois {
  mois: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class AdminRHStatsService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  /**
   * Récupérer le nombre d'utilisateurs
   */
  getUtilisateursCount(): Observable<number> {
    return this.http.get<any>(`${this.baseUrl}/mes-utilisateurs-rh`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        console.log('Response utilisateurs:', response);
        
        // Gérer différents formats de réponse
        if (response?.utilisateurs && Array.isArray(response.utilisateurs)) {
          return response.utilisateurs.length;
        }
        if (response?.data && Array.isArray(response.data)) {
          return response.data.length;
        }
        if (Array.isArray(response)) {
          return response.length;
        }
        
        // Si c'est un objet avec un compteur
        if (response?.total || response?.count) {
          return response.total || response.count;
        }
        
        return 0;
      }),
      catchError((error) => {
        console.error('Erreur utilisateurs:', error);
        return of(0);
      })
    );
  }

  /**
   * Récupérer le nombre de formations
   */
  getFormationsCount(): Observable<number> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/formations`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        console.log('Response formations:', response);
        
        // Format spécifique observé dans votre réponse
        if (response?.formations && Array.isArray(response.formations)) {
          return response.formations.length;
        }
        if (response?.data && Array.isArray(response.data)) {
          return response.data.length;
        }
        if (Array.isArray(response)) {
          return response.length;
        }
        
        // Total depuis l'API
        if (response?.total || response?.count) {
          return response.total || response.count;
        }
        
        return 0;
      }),
      catchError((error) => {
        console.error('Erreur formations:', error);
        return of(0);
      })
    );
  }

  /**
   * Récupérer le nombre de formateurs
   */
  getFormateursCount(): Observable<number> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/formateurs`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        console.log('Response formateurs:', response);
        
        if (response?.formateurs && Array.isArray(response.formateurs)) {
          return response.formateurs.length;
        }
        if (response?.data && Array.isArray(response.data)) {
          return response.data.length;
        }
        if (Array.isArray(response)) {
          return response.length;
        }
        
        if (response?.total || response?.count) {
          return response.total || response.count;
        }
        
        return 0;
      }),
      catchError((error) => {
        console.error('Erreur formateurs:', error);
        return of(0);
      })
    );
  }

  /**
   * Récupérer le nombre de demandes de formation
   */
  getDemandesFormationCount(): Observable<number> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        console.log('Response demandes:', response);
        
        if (response?.demandes && Array.isArray(response.demandes)) {
          return response.demandes.length;
        }
        if (response?.data && Array.isArray(response.data)) {
          return response.data.length;
        }
        if (Array.isArray(response)) {
          return response.length;
        }
        
        if (response?.total || response?.count) {
          return response.total || response.count;
        }
        
        return 0;
      }),
      catchError((error) => {
        console.error('Erreur demandes formation:', error);
        return of(0);
      })
    );
  }

  /**
   * Récupérer le nombre de sessions de formation
   */
  getSessionsFormationCount(): Observable<number> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/sessions`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        console.log('Response sessions:', response);
        
        if (response?.sessions && Array.isArray(response.sessions)) {
          return response.sessions.length;
        }
        if (response?.data && Array.isArray(response.data)) {
          return response.data.length;
        }
        if (Array.isArray(response)) {
          return response.length;
        }
        
        if (response?.total || response?.count) {
          return response.total || response.count;
        }
        
        return 0;
      }),
      catchError((error) => {
        console.error('Erreur sessions:', error);
        return of(0);
      })
    );
  }

  /**
   * Combiner toutes les statistiques
   */
  getAllStats(): Observable<AdminRHStats> {
    return forkJoin({
      totalUtilisateurs: this.getUtilisateursCount(),
      totalFormations: this.getFormationsCount(),
      totalFormateurs: this.getFormateursCount(),
      totalDemandesFormation: this.getDemandesFormationCount(),
      totalSessionsFormation: this.getSessionsFormationCount()
    });
  }

  /**
   * Récupérer les formations par année (pour le graphique)
   */
  getFormationsParAnnee(): Observable<FormationsParMois[]> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/formations-par-annee`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        console.log('Response formations par année:', response);
        
        if (response?.data) {
          return response.data;
        }
        if (Array.isArray(response)) {
          return response;
        }
        
        return [];
      }),
      catchError((error) => {
        console.error('Erreur formations par année:', error);
        return of([]);
      })
    );
  }

  /**
   * Récupérer les formations par période
   */
  getFormationsParPeriode(startDate: Date, endDate: Date): Observable<FormationsParMois[]> {
    const params = {
      start_date: startDate.toISOString().split('T')[0],
      end_date: endDate.toISOString().split('T')[0]
    };
    return this.http.get<any>(`${this.baseUrl}/adminrh/formations-par-periode`, {
      headers: this.getHeaders(),
      params
    }).pipe(
      map(response => {
        if (response?.data) {
          return response.data;
        }
        return Array.isArray(response) ? response : [];
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Récupérer les formations récentes
   */
  getFormationsRecentes(limit: number = 5): Observable<FormationRecente[]> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/formations-recentes`, {
      headers: this.getHeaders(),
      params: { limit: limit.toString() }
    }).pipe(
      map(response => {
        console.log('Response formations récentes:', response);
        
        let formations = [];
        
        if (response?.formations && Array.isArray(response.formations)) {
          formations = response.formations;
        } else if (response?.data && Array.isArray(response.data)) {
          formations = response.data;
        } else if (Array.isArray(response)) {
          formations = response;
        }
        
        return formations.map((f: any) => ({
          id: f.id,
          titre: f.titre || f.title,
          image: f.image_couverture || f.image || f.thumbnail || 'assets/img/instructor/instructor-table-01.jpg',
          inscrits: f.inscrits || f.nombre_inscrits || 0,
          statut: f.est_publie ? 'publie' : 'brouillon'
        }));
      }),
      catchError((error) => {
        console.error('Erreur formations récentes:', error);
        return of([]);
      })
    );
  }
}