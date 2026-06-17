import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

export interface LoginRequest {
  email: string;
  password: string;
}

// export interface LoginResponse {
//   success: boolean;
//   token?: string;
//   user?: {
//     id: number;
//     email: string;
//     first_name: string;
//     last_name: string;
//     role: string;
//   };
//   message?: string;
// }
export interface LoginResponse {
  success?: boolean;
  status?: boolean;
  message?: string;
  access_token?: string;
  token?: string;
  token_type?: string;
  permissions?: string[];
  roles?: string[];
  role_type?: string | null;
  user?: {
    id: number;
    email: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    prenom?: string;
    nom?: string;
    role?: string;
    role_id?: number;
    fonction?: string;
    avatar?: string;
    created_at?: string;
    updated_at?: string;
     permissions?: string[];
     roles?: string[];
    [key: string]: any;
  };
}
export interface RegisterRequest {
  prenom: string;
  nom: string;
  email: string;
  numero: string;
  fonction: string;
  role_id: number;
  entreprise_id: number;
  password: string;
  password_confirmation: string;
  created_by?: number;
  statut: number;
}

export interface RegisterResponse {
  success?: boolean;
  status?: boolean;
  message?: string;
  user?: {
    id: number;
    email: string;
    prenom: string;
    nom: string;
    role_id: number;
    [key: string]: any;
  };
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/login`;
  private tokenKey = 'pyramide_token';
  private userKey = 'pyramide_user';

  readonly permissions$ = new BehaviorSubject<string[]>(this.getUserPermissions());

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    console.log('API Login URL:', this.apiUrl);
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, credentials)
      .pipe(
        tap(response => {
          console.log('Login response complète:', response);

          const isSuccess = response?.success || response?.status;
          const token = response?.access_token || response?.token;

          if (isSuccess && token) {
            this.setToken(token);
            const userWithPermissions = {
              ...response?.user,
              permissions: response?.permissions || response?.user?.permissions || [],
              roles:       response?.roles       || response?.user?.roles       || [],
              role_type:   response?.role_type ?? response?.user?.['role_type'] ?? null,
            };
            this.setUser(userWithPermissions);
          }
        }),
        catchError(error => {
          console.error('Login error details:', error);
          return this.handleError(error);
        })
      );
  }
  activateAccount(token: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/auth/activate`, { token })
      .pipe(
        tap(response => {
          const accessToken = response?.access_token || response?.token;
          if (accessToken) {
            this.setToken(accessToken);
            const userWithPermissions = {
              ...response?.user,
              permissions: response?.permissions || response?.user?.permissions || [],
              roles: response?.roles || response?.user?.roles || [],
            };
            this.setUser(userWithPermissions);
          }
        }),
        catchError(error => this.handleError(error))
      );
  }

  sendPasswordResetLink(email: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/forgot-password`, { email })
      .pipe(catchError(error => this.handleError(error)));
  }

  resetPassword(token: string, email: string, password: string, passwordConfirmation: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/reset-password`, {
      token,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }).pipe(catchError(error => this.handleError(error)));
  }

  sendMagicLink(email: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/magic-link`, { email })
      .pipe(catchError(error => this.handleError(error)));
  }

  verifyMagicLink(token: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/auth/magic-link/verify`, { token })
      .pipe(
        tap(response => {
          const accessToken = response?.access_token || response?.token;
          if (accessToken) {
            this.setToken(accessToken);
            this.setUser(response?.user);
          }
        }),
        catchError(error => this.handleError(error))
      );
  }

register(data: any): Observable<any> {
  // Ajouter created_by automatiquement
  const user = this.getUser();
  const payload = {
    ...data,
    created_by: user?.id || 1 // ID de l'utilisateur connecté
  };

  console.log('Payload envoyé:', payload);
  return this.http.post<any>(`${environment.apiUrl}/users`, payload)
    .pipe(
      tap(response => {
        console.log('Register response:', response);
      }),
      catchError(error => {
        console.error('Register error:', error);
        return this.handleError(error);
      })
    );
}
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setUser(user: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.permissions$.next(this.getUserPermissions());
  }

  getUser(): any {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

   isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    // Vérifier si le token n'est pas expiré (optionnel)
    try {
      const tokenData = JSON.parse(atob(token.split('.')[1])); // Décoder le JWT
      const currentTime = Math.floor(Date.now() / 1000);
      return tokenData.exp > currentTime;
    } catch (error) {
      return false;
    }
  }
  
  getUserPermissions(): string[] {
  const user = this.getUser();
  // Si permissions est un tableau d'objets, on mappe sur le champ 'name'
  if (Array.isArray(user?.permissions) && user.permissions.length > 0 && typeof user.permissions[0] === 'object') {
    return user.permissions.map((p: any) => p.name);
  }
  // Sinon, on retourne tel quel (tableau de string)
  return user?.permissions || [];
}
  //  getUserPermissions(): string[] {
  //   const user = this.getUser();
  //   return user?.permissions || [];
  // }

  // Méthode pour vérifier si l'utilisateur a une permission spécifique
  hasPermission(permission: string): boolean {
    const permissions = this.getUserPermissions();
    return permissions.includes(permission);
  }

  refreshMe(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/auth/me`).pipe(
      tap(response => {
        if (response?.status) {
          const current = this.getUser() || {};
          const updated = {
            ...current,
            ...response.user,
            permissions: response.permissions || [],
            roles:       response.roles       || [],
            role_type:   response.role_type   ?? current['role_type'] ?? null,
          };
          this.setUser(updated);
        }
      }),
      catchError(() => throwError(() => null))
    );
  }

  // Méthode pour vérifier si l'utilisateur a au moins une des permissions
  hasAnyPermission(permissions: string[]): boolean {
    const userPermissions = this.getUserPermissions();
    return permissions.some(permission => userPermissions.includes(permission));
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur est survenue';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur: ${error.error.message}`;
    } else {
      errorMessage = error.error?.message || error.message || 'Erreur de connexion au serveur';
    }

    console.error('Error details:', errorMessage, error);
    return throwError(() => ({
      message: errorMessage,
      error: error
    }));
  }
}
