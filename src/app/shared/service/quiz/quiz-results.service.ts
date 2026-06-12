import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface QuizResultQuiz {
  id: number;
  titre: string;
  formation_id: number | null;
  score_minimum: number;
}

export interface QuizResultUser {
  id: number;
  name: string;
  prenom: string;
  nom: string;
  matricule: string;
  fonction: string;
}

export interface QuizResult {
  id: number;
  quiz_id: number;
  user_id: number;
  note: string;
  points_obtenus: number;
  points_total: number;
  nombre_tentatives: number;
  est_reussi: boolean;
  created_at: string;
  updated_at: string;
  quiz?: QuizResultQuiz;
  user?: QuizResultUser;
}

export interface QuizResultsResponse {
  total_in_db: number;
  user_id: number;
  is_authenticated: boolean;
  results: QuizResult[];
}

@Injectable({ providedIn: 'root' })
export class QuizResultsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllResults(): Observable<QuizResultsResponse> {
    return this.http.get<QuizResultsResponse>(`${this.apiUrl}/quiz-results`);
  }

  getResultsByQuiz(quizId: number): Observable<QuizResultsResponse> {
    return this.http.get<QuizResultsResponse>(`${this.apiUrl}/quiz-results/quiz/${quizId}`);
  }

  getResultsByFormation(formationId: number): Observable<QuizResultsResponse> {
    return this.http.get<QuizResultsResponse>(`${this.apiUrl}/quiz-results/formation/${formationId}`);
  }

  getQuizStatistics(quizId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/quiz-results/quiz/${quizId}/statistics`);
  }
}
