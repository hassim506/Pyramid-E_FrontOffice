import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);

  const token    = localStorage.getItem('pyramide_token');
  const userData = localStorage.getItem('pyramide_user');

  if (token && userData) {
    try {
      JSON.parse(userData); // valide le JSON
      return true;
    } catch {
      router.navigate(['/auth/login']);
      return false;
    }
  }

  router.navigate(['/auth/login']);
  return false;
};