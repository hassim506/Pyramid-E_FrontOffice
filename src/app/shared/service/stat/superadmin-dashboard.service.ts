import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface SuperAdminStats {
  // Utilisateurs actifs
  mau: number;
  wau: number;
  taux_activation: number;
  taux_engagement: number;
  croissance_inscriptions: number;
  croissance_mensuelle: { mois: string; total: number }[];

  // Formations
  total_formations_publiees: number;
  pct_actifs_vs_obsoletes: number;
  taux_completion_global: number;
  total_heures_consommees: number;
  score_satisfaction: number | null;
  taux_mise_a_jour_contenu: number;

  // Support
  tickets_ouverts: number;
  tickets_resolus: number;
  delai_moyen_resolution_h: number | null;
  sla_respecte_pct: number | null;

  // Conformité
  pct_conformite_formations_obligatoires: number;
  nb_ecarts_conformite: number;

  // Plateforme
  uptime_pct: number;
  avg_load_time_ms: number | null;
  error_rate_pct: number;
  security_incidents: number;
}

@Injectable({ providedIn: 'root' })
export class SuperAdminDashboardService {
  private readonly base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private headers(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' });
  }

  getStats(): Observable<{ status: boolean; data: SuperAdminStats }> {
    return this.http.get<{ status: boolean; data: SuperAdminStats }>(
      `${this.base}/superadmin/dashboard/stats`,
      { headers: this.headers() }
    );
  }
}
