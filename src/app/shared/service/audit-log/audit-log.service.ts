import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface AuditLog {
  id: number;
  reference: string;
  user_id: number | null;
  acteur_nom: string | null;
  acteur_role: string | null;
  acteur_entreprise: string | null;
  type_action: string;
  libelle_action: string;
  entite_type: string | null;
  entite_id: number | null;
  entite_label: string | null;
  details: string | null;
  severite: 'info' | 'attention' | 'critique';
  statut: 'ok' | 'bloque' | 'en_cours';
  ip_address: string | null;
  localisation: string | null;
  user_agent: string | null;
  est_tor: boolean;
  methode_http: string | null;
  url: string | null;
  code_http: number | null;
  avant: Record<string, any> | null;
  apres: Record<string, any> | null;
  created_at: string;
}

export interface AuditLogFilters {
  search?: string;
  type_action?: string;
  severite?: string;
  statut?: string;
  acteur_role?: string;
  acteur_entreprise?: string;
  ip_address?: string;
  date_debut?: string;
  date_fin?: string;
  par_page?: number;
  page?: number;
}

export interface AuditKpi {
  logs_aujourdhui: number;
  tendance_pourcent: number;
  alertes_critiques: number;
  connexions_echouees: number;
  utilisateurs_actifs: number;
  suppressions_mois: number;
}

export interface AuditStats {
  kpi: AuditKpi;
  repartition: Record<string, number>;
  alertes_actives: AuditLog[];
}

@Injectable({ providedIn: 'root' })
export class AuditLogService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) headers = headers.set('Authorization', `Bearer ${token}`);
    return headers;
  }

  getLogs(filters: AuditLogFilters = {}): Observable<any> {
    let params = new HttpParams();
    if (filters.search)            params = params.set('search',            filters.search);
    if (filters.type_action)       params = params.set('type_action',       filters.type_action);
    if (filters.severite)          params = params.set('severite',          filters.severite);
    if (filters.statut)            params = params.set('statut',            filters.statut);
    if (filters.acteur_role)       params = params.set('acteur_role',       filters.acteur_role);
    if (filters.acteur_entreprise) params = params.set('acteur_entreprise', filters.acteur_entreprise);
    if (filters.ip_address)        params = params.set('ip_address',        filters.ip_address);
    if (filters.date_debut)        params = params.set('date_debut',        filters.date_debut);
    if (filters.date_fin)          params = params.set('date_fin',          filters.date_fin);
    if (filters.par_page)          params = params.set('par_page',          String(filters.par_page));
    if (filters.page)              params = params.set('page',              String(filters.page));

    return this.http.get<any>(`${this.apiUrl}/audit-logs`, {
      headers: this.getHeaders(),
      params
    });
  }

  getStatistiques(dateDebut?: string, dateFin?: string): Observable<any> {
    let params = new HttpParams();
    if (dateDebut) params = params.set('date_debut', dateDebut);
    if (dateFin)   params = params.set('date_fin',   dateFin);

    return this.http.get<any>(`${this.apiUrl}/audit-logs/statistiques`, {
      headers: this.getHeaders(),
      params
    });
  }

  getLogById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/audit-logs/${id}`, {
      headers: this.getHeaders()
    });
  }

  deleteLogs(ids: number[]): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/audit-logs/destroy`, {
      headers: this.getHeaders(),
      body: { ids }
    });
  }

  purgeAllLogs(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/audit-logs/purge-all`, {
      headers: this.getHeaders()
    });
  }

  getLaravelLog(params: { lines?: number; level?: string; search?: string } = {}): Observable<any> {
    let httpParams = new HttpParams();
    if (params.lines)  httpParams = httpParams.set('lines', String(params.lines));
    if (params.level)  httpParams = httpParams.set('level', params.level);
    if (params.search) httpParams = httpParams.set('search', params.search);

    return this.http.get<any>(`${this.apiUrl}/audit-logs/laravel-log`, {
      headers: this.getHeaders(),
      params: httpParams
    });
  }

  purgeLaravelLog(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/audit-logs/laravel-log`, {
      headers: this.getHeaders()
    });
  }

  exportCsv(filters: AuditLogFilters = {}): Observable<Blob> {
    let params = new HttpParams();
    if (filters.date_debut) params = params.set('date_debut', filters.date_debut);
    if (filters.date_fin)   params = params.set('date_fin',   filters.date_fin);
    if (filters.severite)   params = params.set('severite',   filters.severite);

    return this.http.get(`${this.apiUrl}/audit-logs/export-csv`, {
      headers: this.getHeaders(),
      params,
      responseType: 'blob'
    });
  }
}
