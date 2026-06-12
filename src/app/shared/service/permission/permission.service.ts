import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Permission, PermissionResponse } from '../../models/permission.models';
import { AuthService } from '../authentification/auth.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // Récupérer toutes les permissions
  getAllPermissions(): Observable<PermissionResponse> {
    return this.http.get<PermissionResponse>(
      `${this.apiUrl}/permissions`,
      { headers: this.getHeaders() }
    );
  }

  // Créer une nouvelle permission
  createPermission(permission: Partial<Permission>): Observable<PermissionResponse> {
    return this.http.post<PermissionResponse>(
      `${this.apiUrl}/permissions`,
      permission,
      { headers: this.getHeaders() }
    );
  }

  // Mettre à jour une permission
  updatePermission(id: number, permission: Partial<Permission>): Observable<PermissionResponse> {
    return this.http.put<PermissionResponse>(
      `${this.apiUrl}/permissions/${id}`,
      permission,
      { headers: this.getHeaders() }
    );
  }

  // Supprimer une permission
  deletePermission(id: number): Observable<PermissionResponse> {
    return this.http.delete<PermissionResponse>(
      `${this.apiUrl}/permissions/${id}`,
      { headers: this.getHeaders() }
    );
  }

   canListUsers(): boolean {
    return this.authService.hasPermission('lister utilisateurs');
  }

  canCreateUsers(): boolean {
    return this.authService.hasPermission('créer utilisateur');
  }

  canEditUsers(): boolean {
    return this.authService.hasPermission('modifier utilisateur');
  }

  canDeleteUsers(): boolean {
    return this.authService.hasPermission('supprimer utilisateur');
  }

  // Ajouter d'autres permissions selon vos besoins
  canManageRoles(): boolean {
    return this.authService.hasPermission('gérer rôles');
  }

  canViewReports(): boolean {
    return this.authService.hasPermission('voir rapports');
  }

  // Méthode générale pour vérifier une permission
  hasPermission(permission: string): boolean {
    return this.authService.hasPermission(permission);
  }

}