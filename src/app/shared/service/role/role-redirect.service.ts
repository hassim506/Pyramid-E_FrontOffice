import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleRedirectService {

  constructor(private router: Router) {}

  redirectByRole(roleId: number): void {
    switch (roleId) {
      case 1: // Super Admin
        this.router.navigate(['/superadmin/superadmin-dashboard']);
        break;
      case 2: // Employé
        this.router.navigate(['/index']);
        break;
      case 3: // Formateur
        this.router.navigate(['/index-three']);
        break;
      case 4: // Responsable RH
        this.router.navigate(['/index-two']);
        break;
      case 5: // Administrateur RH Holding
        this.router.navigate(['/adminrh/adminrh-dashboard']);
        break;
      case 14: // Super Admin RH Holding
        this.router.navigate(['/superadmin/superadmin-dashboard']);
        break;
      default:
        // Rôle par défaut (ou non défini)
        this.router.navigate(['/auth/login']);
        break;
    }
  }

  // Méthode pour rediriger vers le dashboard approprié (après connexion réussie)
  redirectToDashboard(roleId: number): void {
    switch (roleId) {
      case 1: // Super Admin
        this.router.navigate(['/superadmin/superadmin-dashboard']);
        break;
      case 2: // Employé
        this.router.navigate(['/student/student-dashboard']);
        break;
      case 3: // Formateur
        this.router.navigate(['/instructor/instructor-dashboard']);
        break;
      case 4: // Responsable RH
        this.router.navigate(['/adminrh/adminrh-dashboard']);
        break;
      case 5: // Administrateur RH Holding
        this.router.navigate(['/adminrh/adminrh-dashboard']);
        break;
      case 14: // Super Admin RH Holding
        this.router.navigate(['/superadmin/superadmin-dashboard']);
        break;
      default:
        this.router.navigate(['/auth/login']);
        break;
    }
  }

  // Méthode pour obtenir la route par défaut selon le rôle
  getDefaultRouteByRole(roleId: number): string {
    switch (roleId) {
      case 1: // Super Admin
        return '/superadmin/superadmin-dashboard';
      case 2: // Employé
        return '/student/student-dashboard';
      case 3: // Formateur
        return '/instructor/instructor-dashboard';
      case 4: // Responsable RH
        return '/adminrh/adminrh-dashboard';
      case 5: // Administrateur RH Holding
        return '/adminrh/adminrh-dashboard';
      case 14: // Super Admin RH Holding
        return '/superadmin/superadmin-dashboard';
      default:
        return '/auth/login';
    }
  }

  // Méthode alternative avec nom de rôle
  redirectByRoleName(roleName: string): void {
    const lowerRole = roleName.toLowerCase();
    
    switch (lowerRole) {
      case 'super admin':
        this.router.navigate(['/superadmin/superadmin-dashboard']);
        break;
      case 'employé':
      case 'employee':
        this.router.navigate(['/index']);
        break;
      case 'formateur':
      case 'trainer':
        this.router.navigate(['/index-three']);
        break;
      case 'responsable rh':
      case 'responsable_rh':
        this.router.navigate(['/index-two']);
        break;
      case 'administrateur rh holding':
        this.router.navigate(['/adminrh/adminrh-dashboard']);
        break;
      case 'super admin rh holding':
        this.router.navigate(['/superadmin/superadmin-dashboard']);
        break;
      default:
        this.router.navigate(['/auth/login']);
        break;
    }
  }

  // Méthode pour vérifier si un utilisateur a les permissions d'accès
  canAccessRoute(roleId: number, targetRoute: string): boolean {
    const allowedRoutes = this.getAllowedRoutesByRole(roleId);
    return allowedRoutes.some(route => targetRoute.startsWith(route));
  }

  // Méthode privée pour obtenir les routes autorisées par rôle
  private getAllowedRoutesByRole(roleId: number): string[] {
    switch (roleId) {
      case 1: // Super Admin
        return ['/superadmin', '/adminrh', '/instructor', '/student'];
      case 2: // Employé
        return ['/student', '/index'];
      case 3: // Formateur
        return ['/instructor', '/index-three'];
      case 4: // Responsable RH
        return ['/adminrh', '/index-two'];
      case 5: // Administrateur RH Holding
        return ['/adminrh', '/superadmin'];
      case 14: // Super Admin RH Holding
        return ['/superadmin', '/adminrh'];
      default:
        return ['/auth'];
    }
  }
}