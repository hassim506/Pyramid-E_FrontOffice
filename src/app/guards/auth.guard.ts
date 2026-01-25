// src/app/shared/guards/auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // DEBUG COMPLET
  console.log('=== AUTH GUARD DEBUG COMPLET ===');
  
  const token = localStorage.getItem('pyramide_token');
  const userData = localStorage.getItem('pyramide_user');
  
  console.log('1. Token exists:', !!token);
  console.log('2. Token value:', token);
  console.log('3. User data exists:', !!userData);
  console.log('4. User data:', userData);
  console.log('5. Current route:', state.url);
  console.log('6. Route params:', route.params);
  
  if (token && userData) {
    try {
      const user = JSON.parse(userData);
      console.log('7. Parsed user:', user);
      console.log('8. User role_id:', user.role_id);
      console.log('9. User role_id type:', typeof user.role_id);
      
      // Vérifier si l'utilisateur a accès à la section adminrh
      if (state.url.startsWith('/adminrh')) {
        const allowedRoles = [4, 5, 9, 14];
        console.log('10. Allowed roles:', allowedRoles);
        console.log('11. Role check result:', allowedRoles.includes(user.role_id));
        
        if (!allowedRoles.includes(user.role_id)) {
          console.log('❌ ACCÈS REFUSÉ - Rôle non autorisé');
          router.navigate(['/auth/login']);
          return false;
        }
      }
      
      console.log('✅ ACCÈS AUTORISÉ');
      console.log('================================');
      return true;
      
    } catch (error) {
      console.error('❌ ERREUR parsing user data:', error);
      router.navigate(['/auth/login']);
      return false;
    }
  } else {
    console.log('❌ ACCÈS REFUSÉ - Pas de token ou user data');
    console.log('================================');
    router.navigate(['/auth/login']);
    return false;
  }
};