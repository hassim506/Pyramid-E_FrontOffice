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
    const defaultRoute = redirectService.getDefaultRoute();
    // Évite la boucle infinie si getDefaultRoute() renvoie la même URL bloquée
    if (defaultRoute && defaultRoute !== state.url) {
      router.navigate([defaultRoute]);
    } else {
      router.navigate(['/auth/login']);
    }
    return false;
  }

  return true;
};
