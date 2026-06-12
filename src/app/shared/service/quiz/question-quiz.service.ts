import { Injectable } from '@angular/core';

// import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


// @Injectable({
//   providedIn: 'root'
// })
// export class QuestionQuizService {
  
// }

export interface QuestionAnswer {
  id?: number;
  question_id?: number;
  reponse_text: string;
  is_correct: boolean;
  ordre: number;
  created_at?: string;
  updated_at?: string;
}

export interface Question {
  id?: number;
  quizzes_id: number;
  question_text: string;
  type: 'multiple_choice' | 'multiple_choice_multi' | 'true_false' | 'text';
  points: number;
  ordre: number;
  explication?: string;
  created_at?: string;
  updated_at?: string;
  reponses?: QuestionAnswer[];
}

export interface QuestionResponse {
  quiz: {
    id: number;
    titre: string;
    description: string;
  };
  questions: Question[];
}

export interface ReorderRequest {
  questions: { id: number; ordre: number }[];
}

@Injectable({
  providedIn: 'root'
})
export class QuestionQuizService {
  private baseUrl = `${environment.apiUrl}/quizzes`;

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token') || localStorage.getItem('access_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  getQuestions(quizId: number): Observable<QuestionResponse> {
    return this.http.get<QuestionResponse>(`${this.baseUrl}/${quizId}/questions`, {
      headers: this.getHeaders()
    });
  }

  getQuestion(quizId: number, questionId: number): Observable<Question> {
    return this.http.get<Question>(`${this.baseUrl}/${quizId}/questions/${questionId}`, {
      headers: this.getHeaders()
    });
  }

  createQuestion(quizId: number, question: Partial<Question>): Observable<Question> {
    return this.http.post<Question>(`${this.baseUrl}/${quizId}/questions`, question, {
      headers: this.getHeaders()
    });
  }

  updateQuestion(quizId: number, questionId: number, question: Partial<Question>): Observable<Question> {
    return this.http.put<Question>(`${this.baseUrl}/${quizId}/questions/${questionId}`, question, {
      headers: this.getHeaders()
    });
  }

  deleteQuestion(quizId: number, questionId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${quizId}/questions/${questionId}`, {
      headers: this.getHeaders()
    });
  }

  reorderQuestions(quizId: number, reorderData: ReorderRequest): Observable<any> {
    return this.http.put(`${this.baseUrl}/${quizId}/questions/reorder`, reorderData, {
      headers: this.getHeaders()
    });
  }
}