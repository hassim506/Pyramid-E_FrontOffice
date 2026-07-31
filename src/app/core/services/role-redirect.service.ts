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
  resolveConfig(roleId: number, roleType?: string, roleNames?: string[]): RoleRoutingConfig | null {
    // 1. Correspondance directe par role_id
    const numericRoleId = Number(roleId);
    const direct = ROLE_ROUTING.find(c => c.roleIds.includes(numericRoleId));
    if (direct) return direct;

    // 2. Rôle dynamique : se baser sur le type fourni par le backend
    if (roleType) {
      const layout = this.typeToLayout(roleType);
      if (layout) {
        const byType = ROLE_ROUTING.find(c => c.layout === layout);
        if (byType) return byType;
      }
    }

    // 3. Fallback via noms de rôles Spatie stockés au login
    if (roleNames?.length) {
      for (const name of roleNames) {
        const layout = this.roleNameToLayout(name);
        if (layout) {
          const byName = ROLE_ROUTING.find(c => c.layout === layout);
          if (byName) return byName;
        }
      }
    }

    return null;
  }

  // Redirige après connexion
  redirectAfterLogin(roleId: number, roleType?: string, roleNames?: string[]): void {
    const user = this.authService.getUser();
    const names = roleNames ?? user?.roles ?? [];
    const config = this.resolveConfig(roleId, roleType, names);
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
    const config = this.resolveConfig(
      user.role_id,
      user.role_type ?? user['role_type'],
      user.roles ?? []
    );
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
    const config = this.resolveConfig(user.role_id, user.role_type, user.roles ?? []);
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

  private roleNameToLayout(roleName: string): LayoutType | null {
    const lower = roleName.toLowerCase();
    if (lower.includes('formateur') || lower.includes('consultant') || lower.includes('gestionnaire de contenu')) {
      return 'formateur';
    }
    if (lower.includes('rh') || lower.includes('responsable') || lower.includes('manager')) {
      return 'adminrh';
    }
    if (lower.includes('super admin') || lower.includes('superadmin') || lower.includes('admin')) {
      return 'superadmin';
    }
    if (lower.includes('employ') || lower.includes('étudiant') || lower.includes('student')) {
      return 'employe';
    }
    return null;
  }
}
