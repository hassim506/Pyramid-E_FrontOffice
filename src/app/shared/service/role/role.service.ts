import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Role, RoleResponse, AssignRoleRequest } from '../../models/role.models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // Récupérer tous les rôles
  getAllRoles(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/roles`,
      { headers: this.getHeaders() }
    );
  }

  // Récupérer un rôle par ID avec ses permissions
  getRoleById(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/roles/${id}`,
      { headers: this.getHeaders() }
    );
  }

  // Créer un nouveau rôle
  createRole(role: Partial<Role>): Observable<any> {
    console.log('📤 Envoi création rôle:', role);
    return this.http.post<any>(
      `${this.apiUrl}/roles`,
      role,
      { headers: this.getHeaders() }
    );
  }

  // Mettre à jour un rôle
updateRole(id: number, data: any) {
  return this.http.put(`${this.apiUrl}/roles/${id}`, data);
}
  // Supprimer un rôle
  deleteRole(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/roles/${id}`,
      { headers: this.getHeaders() }
    );
  }

  // Assigner un rôle à un utilisateur
  assignRoleToUser(assignData: AssignRoleRequest): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/roles/assign-to-user`,
      assignData,
      { headers: this.getHeaders() }
    );
  }
}