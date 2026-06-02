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

export interface AdminRHDashboardStats {
  // Effectifs
  nb_employes: number;
  nb_inscrits_formation: number;

  // Digitalisation
  taux_digitalisation_parcours: number;
  nb_formations_digitales: number;

  // Participation & Complétion
  taux_participation: number;
  taux_completion_global: number;
  taux_completion_obligatoires: number;
  taux_abandon: number;
  progression_moyenne: number;

  // Volume
  total_heures_consommees: number;
  heures_par_collaborateur: number;

  // Certifications
  total_certifications: number;
  taux_obtention_certifications: number;

  // Coûts
  cout_moyen_heure: number | null;
  cout_moyen_certification: number | null;
  cout_moyen_par_employe: number | null;

  // Satisfaction
  score_satisfaction: number | null;

  // Compétences
  taux_couverture_competences: number;

  // Historique
  croissance_mensuelle: { mois: string; total: number }[];
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

  getDashboardStats(): Observable<AdminRHDashboardStats | null> {
    return this.http.get<{ status: boolean; data: AdminRHDashboardStats }>(
      `${this.baseUrl}/adminrh/dashboard/stats`,
      { headers: this.getHeaders() }
    ).pipe(
      map(r => r.data),
      catchError(() => of(null))
    );
  }

  getUtilisateursCount(): Observable<number> {
    return this.http.get<any>(`${this.baseUrl}/mes-utilisateurs-rh`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        if (response?.utilisateurs && Array.isArray(response.utilisateurs)) return response.utilisateurs.length;
        if (response?.data && Array.isArray(response.data)) return response.data.length;
        if (Array.isArray(response)) return response.length;
        if (response?.total || response?.count) return response.total || response.count;
        return 0;
      }),
      catchError(() => of(0))
    );
  }

  getFormationsCount(): Observable<number> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/formations`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        if (response?.formations && Array.isArray(response.formations)) return response.formations.length;
        if (response?.data && Array.isArray(response.data)) return response.data.length;
        if (Array.isArray(response)) return response.length;
        if (response?.total || response?.count) return response.total || response.count;
        return 0;
      }),
      catchError(() => of(0))
    );
  }

  getFormateursCount(): Observable<number> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/formateurs`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        if (response?.formateurs && Array.isArray(response.formateurs)) return response.formateurs.length;
        if (response?.data && Array.isArray(response.data)) return response.data.length;
        if (Array.isArray(response)) return response.length;
        if (response?.total || response?.count) return response.total || response.count;
        return 0;
      }),
      catchError(() => of(0))
    );
  }

  getDemandesFormationCount(): Observable<number> {
    return this.http.get<any>(`${this.baseUrl}/demandes-formation`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        if (response?.demandes && Array.isArray(response.demandes)) return response.demandes.length;
        if (response?.data && Array.isArray(response.data)) return response.data.length;
        if (Array.isArray(response)) return response.length;
        if (response?.total || response?.count) return response.total || response.count;
        return 0;
      }),
      catchError(() => of(0))
    );
  }

  getSessionsFormationCount(): Observable<number> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/sessions`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        if (response?.sessions && Array.isArray(response.sessions)) return response.sessions.length;
        if (response?.data && Array.isArray(response.data)) return response.data.length;
        if (Array.isArray(response)) return response.length;
        if (response?.total || response?.count) return response.total || response.count;
        return 0;
      }),
      catchError(() => of(0))
    );
  }

  getAllStats(): Observable<AdminRHStats> {
    return forkJoin({
      totalUtilisateurs: this.getUtilisateursCount(),
      totalFormations: this.getFormationsCount(),
      totalFormateurs: this.getFormateursCount(),
      totalDemandesFormation: this.getDemandesFormationCount(),
      totalSessionsFormation: this.getSessionsFormationCount()
    });
  }

  getFormationsParAnnee(): Observable<FormationsParMois[]> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/formations-par-annee`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        if (response?.data) return response.data;
        if (Array.isArray(response)) return response;
        return [];
      }),
      catchError(() => of([]))
    );
  }

  getFormationsRecentes(limit: number = 5): Observable<FormationRecente[]> {
    return this.http.get<any>(`${this.baseUrl}/adminrh/formations-recentes`, {
      headers: this.getHeaders(),
      params: { limit: limit.toString() }
    }).pipe(
      map(response => {
        let formations: any[] = [];
        if (response?.formations && Array.isArray(response.formations)) formations = response.formations;
        else if (response?.data && Array.isArray(response.data)) formations = response.data;
        else if (Array.isArray(response)) formations = response;

        return formations.map((f: any) => ({
          id: f.id,
          titre: f.titre || f.title,
          image: f.image_couverture || f.image || f.thumbnail || 'assets/img/instructor/instructor-table-01.jpg',
          inscrits: f.inscrits || f.nombre_inscrits || 0,
          statut: f.est_publie ? 'publie' : 'brouillon'
        }));
      }),
      catchError(() => of([]))
    );
  }
}
