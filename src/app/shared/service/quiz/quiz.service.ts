import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

export interface Quiz {
  id: number;
  titre: string;
  description: string;
  formation_id: number;
  duree_minutes?: number; // Changer duree_limite en duree_minutes
  score_minimum?: number; // Changer note_minimale en score_minimum
  tentatives_max?: number;
  is_active: boolean; // Changer actif en is_active
  created_at: string;
  updated_at: string;
  questions?: Question[];
  // Ajouter les nouvelles propriétés de votre API
  section_id?: number;
  statistics?: {
    total_participants: number;
    note_moyenne: string;
    nb_reussis: number;
  };
  formation?: {
    id?: number;
    titre?: string;
    nom?: string;
    formateur_id?: number;
    formateur?: {
      id?: number;
      nom?: string;
      prenom?: string;
      name?: string;
      email?: string;
    };
    [key: string]: any;
  };
  section?: any;
}

export interface Question {
  id: number;
  quizzes_id: number; // Changer quiz_id en quizzes_id
  question_text: string; // Changer question en question_text
  type: 'multiple_choice' | 'true_false' | 'text';
  options?: string[];
  correct_answer?: string;
  points: number;
  ordre: number;
}

// Interface pour la réponse de l'API
export interface QuizApiResponse {
  user_role: number;
  user_id: number;
  quizzes: Quiz[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = `${environment.apiUrl}/quizzes`;

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token') || localStorage.getItem('access_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<QuizApiResponse>(this.apiUrl, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        console.log('Réponse API quiz:', response);
        // Extraire les quizzes de la réponse
        return response.quizzes || [];
      })
    );
  }

  getQuiz(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }

  getQuizzesByFormation(formationId: number): Observable<Quiz[]> {
    return this.http.get<QuizApiResponse>(`${this.apiUrl}/formation/${formationId}`, {
      headers: this.getHeaders()
    }).pipe(
      map(response => response.quizzes || [])
    );
  }

  createQuiz(quiz: Partial<Quiz>): Observable<Quiz> {
    return this.http.post<Quiz>(this.apiUrl, quiz, {
      headers: this.getHeaders()
    });
  }

  updateQuiz(id: number, quiz: Partial<Quiz>): Observable<Quiz> {
    return this.http.put<Quiz>(`${this.apiUrl}/${id}`, quiz, {
      headers: this.getHeaders()
    });
  }

  deleteQuiz(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }

  submitQuiz(id: number, answers: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/submit`, answers, {
      headers: this.getHeaders()
    });
  }
}
