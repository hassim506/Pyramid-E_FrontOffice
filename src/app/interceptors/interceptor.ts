// src/app/interceptors/interceptor.ts
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { RoleRedirectService } from '../shared/service/role/role-redirect.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const roleRedirectService = inject(RoleRedirectService);

  // Ajouter le token à toutes les requêtes
  const token = localStorage.getItem('pyramide_token');
  let authReq = req;

  if (token && !req.url.includes('/login') && !req.url.includes('/register')) {
    console.log('🔑 Adding token to request:', req.url);
    authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log('❌ HTTP Error:', error.status, error.url);
      
      if (error.status === 401) {
        console.log('🚫 Token expiré - Redirection en cours...');
        handleUnauthorized(roleRedirectService);
      }
      return throwError(() => error);
    })
  );
};

function handleUnauthorized(roleRedirectService: RoleRedirectService): void {
  const userData = localStorage.getItem('pyramide_user');
  
  if (userData) {
    try {
      const user = JSON.parse(userData);
      const roleId = user.role_id;
      
      console.log('🔄 Nettoyage session et redirection pour role:', roleId);
      
      // Nettoyer le localStorage
      localStorage.removeItem('pyramide_token');
      localStorage.removeItem('pyramide_user');
      
      // Rediriger selon le rôle
      roleRedirectService.redirectByRole(roleId);
    } catch (error) {
      console.error('Erreur lors du parsing des données utilisateur:', error);
      roleRedirectService.redirectByRole(0);
    }
  } else {
    roleRedirectService.redirectByRole(0);
  }
}