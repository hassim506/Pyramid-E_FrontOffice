import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RoleRedirectService } from '../core/services/role-redirect.service';
import { AuthService } from '../shared/service/authentification/auth.service';

export const layoutGuard: CanActivateFn = (_route, state) => {
  const authService    = inject(AuthService);
  const redirectService = inject(RoleRedirectService);
  const router          = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['/auth/login']);
    return false;
  }

  if (!redirectService.canAccessUrl(state.url)) {
    // Redirige vers le dashboard du bon layout au lieu de /auth/login
    router.navigate([redirectService.getDefaultRoute()]);
    return false;
  }

  return true;
};
