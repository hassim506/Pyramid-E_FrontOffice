import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PermissionService } from '../shared/service/permission/permission.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  constructor(
    private permissionService: PermissionService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredPermission = route.data['permission'] as string;
    
    if (!requiredPermission) {
      return true;
    }

    if (this.permissionService.hasPermission(requiredPermission)) {
      return true;
    }

    // Rediriger vers une page d'erreur ou dashboard si pas de permission
    this.router.navigate(['/unauthorized']);
    return false;
  }
}