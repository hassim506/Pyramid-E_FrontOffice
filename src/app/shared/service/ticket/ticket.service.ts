import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface TicketMessage {
  id: number;
  ticket_id: number;
  user_id: number;
  contenu: string;
  type: string;
  est_interne: boolean;
  pieces_jointes: any[];
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  auteur: { id: number; name: string; email: string };
}

export interface Ticket {
  id: number;
  reference: string;
  user_id: number;
  assigned_to: number | null;
  entreprise_id: number;
  sujet: string;
  description: string;
  categorie: string;
  priorite: string;
  statut: string;
  type: string;
  canal: string;
  date_echeance: string | null;
  date_premiere_reponse: string | null;
  date_resolution: string | null;
  date_fermeture: string | null;
  date_derniere_activite: string | null;
  sla_heures: number;
  sla_respecte: boolean | null;
  sla_echeance: string | null;
  nombre_reponses: number;
  temps_resolution_minutes: number | null;
  satisfaction_score: number | null;
  satisfaction_commentaire: string | null;
  est_escalade: boolean;
  date_escalade: string | null;
  raison_escalade: string | null;
  escalade_par: number | null;
  version_application: string | null;
  navigateur: string | null;
  systeme_exploitation: string | null;
  ip_client: string | null;
  tags: string[];
  metadonnees: Record<string, any>;
  note_interne: string | null;
  est_public: boolean;
  est_archive: boolean;
  entite_liee_type: string | null;
  entite_liee_id: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  createur: { id: number; name: string; email: string } | null;
  agent_assigne: { id: number; name: string; email: string } | null;
  entreprise: { id: number; nom: string } | null;
  messages: TicketMessage[];
  pieces_jointes: any[];
  historiques: any[];
}

@Injectable({ providedIn: 'root' })
export class TicketService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    // ✅ Clé cohérente avec l'intercepteur
    const token = localStorage.getItem('pyramide_token');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) headers = headers.set('Authorization', `Bearer ${token}`);
    return headers;
  }

  getTickets(params?: {
    statut?: string;
    priorite?: string;
    categorie?: string;
    search?: string;
    entreprise_id?: number;
    user_id?: number;
    page?: number;
    par_page?: number;
  }): Observable<any> {
    let httpParams = new HttpParams();
    if (params?.statut)        httpParams = httpParams.set('statut',        params.statut);
    if (params?.priorite)      httpParams = httpParams.set('priorite',      params.priorite);
    if (params?.categorie)     httpParams = httpParams.set('categorie',     params.categorie);
    if (params?.search)        httpParams = httpParams.set('search',        params.search);
    if (params?.entreprise_id) httpParams = httpParams.set('entreprise_id', String(params.entreprise_id));
    if (params?.user_id)       httpParams = httpParams.set('user_id',       String(params.user_id));
    if (params?.page)          httpParams = httpParams.set('page',          String(params.page));
    if (params?.par_page)      httpParams = httpParams.set('par_page',      String(params.par_page));
    return this.http.get<any>(`${this.apiUrl}/tickets`, { headers: this.getHeaders(), params: httpParams });
  }
  getStatistiques(params?: { entreprise_id?: number }): Observable<any> {
    let httpParams = new HttpParams();
    if (params?.entreprise_id) httpParams = httpParams.set('entreprise_id', String(params.entreprise_id));
    return this.http.get<any>(`${this.apiUrl}/tickets/statistiques`, { headers: this.getHeaders(), params: httpParams });
  }

  getStatistiquesRh(params?: { entreprise_id?: number }): Observable<any> {
    let httpParams = new HttpParams();
    if (params?.entreprise_id) httpParams = httpParams.set('entreprise_id', String(params.entreprise_id));
    return this.http.get<any>(`${this.apiUrl}/tickets/statistiques`, { headers: this.getHeaders(), params: httpParams });
  }

  getTicketById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tickets/${id}`, { headers: this.getHeaders() });
  }

  createTicket(data: Partial<Ticket>): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tickets`, data, { headers: this.getHeaders() });
  }

  updateTicket(id: number, data: Partial<Ticket>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/tickets/${id}`, data, { headers: this.getHeaders() });
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/tickets/${id}`, { headers: this.getHeaders() });
  }

  ajouterMessage(id: number, data: { contenu: string; est_interne?: boolean }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tickets/${id}/messages`, data, { headers: this.getHeaders() });
  }

  assigner(id: number, data: { agent_id: number }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tickets/${id}/assigner`, data, { headers: this.getHeaders() });
  }

  escalader(id: number, data: { raison: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tickets/${id}/escalader`, data, { headers: this.getHeaders() });
  }

  noterSatisfaction(id: number, data: { score: number; commentaire?: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tickets/${id}/satisfaction`, data, { headers: this.getHeaders() });
  }
}
