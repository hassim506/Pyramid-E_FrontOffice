import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (_route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('pyramide_token');
  const userData = localStorage.getItem('pyramide_user');

  if (token && userData) {
    try {
      const user = JSON.parse(userData);

      if (state.url.startsWith('/adminrh')) {
        const allowedRoles = [4, 5, 9, 14];
        if (!allowedRoles.includes(user.role_id)) {
          router.navigate(['/auth/login']);
          return false;
        }
      }

      return true;

    } catch {
      router.navigate(['/auth/login']);
      return false;
    }
  }

  router.navigate(['/auth/login']);
  return false;
};