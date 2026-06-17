import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ROLE_ROUTING,
  LAYOUT_ROUTE_PREFIXES,
  LayoutType,
  RoleRoutingConfig,
} from '../config/role-routing.config';
import { AuthService } from '../../shared/service/authentification/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleRedirectService {

  constructor(private router: Router, private authService: AuthService) {}

  // Résout la config pour un role_id donné.
  // Pour les rôles dynamiques créés par un AdminRH (non listés dans roleIds),
  // on se base sur le champ `type` retourné par le backend au login.
  resolveConfig(roleId: number, roleType?: string): RoleRoutingConfig | null {
    // 1. Correspondance directe par role_id
    const direct = ROLE_ROUTING.find(c => c.roleIds.includes(roleId));
    if (direct) return direct;

    // 2. Rôle dynamique : se baser sur le type fourni par le backend
    if (roleType) {
      const byType = ROLE_ROUTING.find(c => c.layout === this.typeToLayout(roleType));
      if (byType) return byType;
    }

    return null;
  }

  // Redirige après connexion
  redirectAfterLogin(roleId: number, roleType?: string): void {
    const config = this.resolveConfig(roleId, roleType);
    if (config) {
      this.router.navigate([config.defaultRoute]);
    } else {
      // Rôle inconnu → page générique
      this.router.navigate(['/index']);
    }
  }

  // Retourne le layout de l'utilisateur connecté
  getCurrentLayout(): LayoutType | null {
    const user = this.authService.getUser();
    if (!user) return null;
    const config = this.resolveConfig(user.role_id, user.role_type ?? user['role_type']);
    return config?.layout ?? null;
  }

  // Vérifie qu'une URL appartient au layout de l'utilisateur connecté
  canAccessUrl(url: string): boolean {
    const layout = this.getCurrentLayout();
    if (!layout) return false;
    // Superadmin accède à tout
    if (layout === 'superadmin') return true;
    const allowed = LAYOUT_ROUTE_PREFIXES[layout];
    return allowed.some(prefix => url.startsWith(prefix));
  }

  // Retourne la route par défaut de l'utilisateur connecté
  getDefaultRoute(): string {
    const user = this.authService.getUser();
    if (!user) return '/auth/login';
    const config = this.resolveConfig(user.role_id, user.role_type);
    return config?.defaultRoute ?? '/index';
  }

  private typeToLayout(type: string): LayoutType | null {
    const map: Record<string, LayoutType> = {
      rh:         'adminrh',
      formateur:  'formateur',
      employe:    'employe',
      admin:      'superadmin',
    };
    return map[type.toLowerCase()] ?? null;
  }
}
