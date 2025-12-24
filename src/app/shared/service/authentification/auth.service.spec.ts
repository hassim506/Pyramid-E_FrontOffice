import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  user?: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    role: string;
  };
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private tokenKey = 'pyramide_token';
  private userKey = 'pyramide_user';
  
  // BehaviorSubject pour suivre l'état de connexion
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private currentUserSubject = new BehaviorSubject<any>(this.getStoredUser());
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login.php`, credentials)
      .pipe(
        tap(response => {
          if (response.success && response.token) {
            this.setToken(response.token);
            this.setUser(response.user);
            this.isAuthenticatedSubject.next(true);
            this.currentUserSubject.next(response.user);
          }
        })
      );
  }

  logout(): void {
    this.removeToken();
    this.removeUser();
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  register(data: any) {
  return this.http.post<any>(`${this.apiUrl}/users`, data);
}
  // Gestion du token
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  private hasToken(): boolean {
    return !!this.getToken();
  }

  // Gestion de l'utilisateur
  private setUser(user: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser(): any {
    return this.getStoredUser();
  }

  private getStoredUser(): any {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  private removeUser(): void {
    localStorage.removeItem(this.userKey);
  }

  // Vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return this.hasToken();
  }

  // Renouveler le token (optionnel)
  refreshToken(): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh.php`, {});
  }
}