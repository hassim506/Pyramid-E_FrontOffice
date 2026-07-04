import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface QuestionSondage {
  id?: number;
  sondage_id?: number;
  question: string;
  description?: string;
  aide?: string;
  placeholder?: string;
  type: 'text' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'echelle' | 'notation' | 'date' | 'email' | 'numero' | 'fichier' | 'matrice' | 'classement';
  options?: string[];
  est_obligatoire?: boolean;
  valeur_min?: number;
  valeur_max?: number;
  min_caracteres?: number;
  max_caracteres?: number;
  section?: string;
  ordre?: number;
}

export interface Sondage {
  id: number;
  titre: string;
  description?: string;
  introduction?: string;
  message_fin?: string;
  formation_id?: number | null;
  formation_ids?: number[];
  formations?: { id: number; titre: string }[];
  parametres?: { cible_entreprise_ids?: number[]; [key: string]: any } | null;
  module_id?: number | null;
  section_module_id?: number | null;
  entreprise_id?: number | null;
  est_template?: boolean;
  created_by?: any;
  type: 'satisfaction' | 'evaluation' | 'feedback' | 'quiz' | 'enquete';
  declenchement?: 'manuel' | 'a_chaud' | 'a_froid';
  delai_jours?: number | null;
  est_anonyme: boolean;
  est_obligatoire: boolean;
  est_actif: boolean;
  autorise_retour: boolean;
  afficher_progres: boolean;
  date_debut?: string | null;
  date_fin?: string | null;
  duree_estimee?: number;
  nombre_tentatives_max?: number;
  ordre?: number;
  nombre_questions: number;
  nombre_reponses: number;
  questions?: QuestionSondage[];
  formation?: { id: number; titre: string };
  created_at?: string;
  updated_at?: string;
}

export interface SondageFilters {
  search?: string;
  type?: string;
  declenchement?: string;
  formation_id?: number;
  est_actif?: boolean;
  entreprise_id?: number | string;
  per_page?: number;
  page?: number;
}

@Injectable({ providedIn: 'root' })
export class SondageService {
  private readonly api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private headers(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getSondages(filters: SondageFilters = {}): Observable<any> {
    let params = new HttpParams();
    Object.entries(filters).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') params = params.set(k, String(v));
    });
    return this.http.get(`${this.api}/sondages`, { headers: this.headers(), params });
  }

  getSondage(id: number): Observable<any> {
    return this.http.get(`${this.api}/sondages/${id}`, { headers: this.headers() });
  }

  createSondage(data: Partial<Sondage> & { questions?: Partial<QuestionSondage>[] }): Observable<any> {
    return this.http.post(`${this.api}/sondages`, data, { headers: this.headers() });
  }

  updateSondage(id: number, data: Partial<Sondage>): Observable<any> {
    return this.http.put(`${this.api}/sondages/${id}`, data, { headers: this.headers() });
  }

  deleteSondage(id: number): Observable<any> {
    return this.http.delete(`${this.api}/sondages/${id}`, { headers: this.headers() });
  }

  publishSondage(id: number): Observable<any> {
    return this.http.put(`${this.api}/sondages/${id}/publish`, {}, { headers: this.headers() });
  }

  archiveSondage(id: number): Observable<any> {
    return this.http.put(`${this.api}/sondages/${id}/archive`, {}, { headers: this.headers() });
  }

  addQuestion(sondageId: number, data: Partial<QuestionSondage>): Observable<any> {
    return this.http.post(`${this.api}/sondages/${sondageId}/questions`, data, { headers: this.headers() });
  }

  updateQuestion(sondageId: number, questionId: number, data: Partial<QuestionSondage>): Observable<any> {
    return this.http.put(`${this.api}/sondages/${sondageId}/questions/${questionId}`, data, { headers: this.headers() });
  }

  deleteQuestion(sondageId: number, questionId: number): Observable<any> {
    return this.http.delete(`${this.api}/sondages/${sondageId}/questions/${questionId}`, { headers: this.headers() });
  }

  getStatistiques(id: number): Observable<any> {
    return this.http.get(`${this.api}/sondages/${id}/statistiques`, { headers: this.headers() });
  }

  respondSondage(sondageId: number, reponses: { question_id: number; reponse?: string; reponse_multiple?: string[]; reponse_numerique?: number }[]): Observable<any> {
    return this.http.post(`${this.api}/sondages/${sondageId}/repondre`, { reponses }, { headers: this.headers() });
  }

  getMesSondages(): Observable<any> {
    return this.http.get(`${this.api}/mes-sondages`, { headers: this.headers() });
  }

  getMesSondagesRecus(): Observable<any> {
    return this.http.get(`${this.api}/mes-sondages-recus`, { headers: this.headers() });
  }

  getResultats(id: number): Observable<any> {
    return this.http.get(`${this.api}/sondages/${id}/resultats`, { headers: this.headers() });
  }

  envoyerSondage(id: number, userIds?: number[], entrepriseIds?: number[]): Observable<any> {
    const body: any = { user_ids: userIds ?? [] };
    if (entrepriseIds && entrepriseIds.length > 0) body.entreprise_ids = entrepriseIds;
    return this.http.post(`${this.api}/sondages/${id}/envoyer`, body, { headers: this.headers() });
  }

  // ── Public (pas de Bearer token) ─────────────────────────────────────────
  getSondagePublic(token: string): Observable<any> {
    return this.http.get(`${this.api}/sondage/${token}`);
  }

  soumettreReponsePublique(token: string, reponses: Record<string, any>): Observable<any> {
    return this.http.post(`${this.api}/sondage/${token}`, { reponses });
  }

  getExportUrl(id: number): string {
    const token = localStorage.getItem('pyramide_token');
    return `${this.api}/sondages/${id}/export?token=${token}`;
  }

  getTypeLabel(type: string): string {
    const map: Record<string, string> = {
      satisfaction: 'Satisfaction',
      evaluation: 'Évaluation',
      feedback: 'Feedback',
      quiz: 'Quiz',
      enquete: 'Enquête',
    };
    return map[type] ?? type;
  }

  getTypeColor(type: string): string {
    const map: Record<string, string> = {
      satisfaction: '#059669',
      evaluation: '#1D6EBF',
      feedback: '#7B5EA7',
      quiz: '#D97706',
      enquete: '#C0392B',
    };
    return map[type] ?? '#6C757D';
  }
}
