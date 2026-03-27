import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}

export interface QuizResultsResponse {
  total_in_db: number;
  user_id: number;
  is_authenticated: boolean;
  results: QuizResult[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizResultsService {
  private apiUrl = 'http://127.0.0.1:8000/api';

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