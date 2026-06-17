export type LayoutType = 'superadmin' | 'adminrh' | 'formateur' | 'employe';

export interface RoleRoutingConfig {
  roleIds: number[];
  defaultRoute: string;
  layout: LayoutType;
}

export const ROLE_ROUTING: RoleRoutingConfig[] = [
  {
    roleIds: [1],
    defaultRoute: '/superadmin/superadmin-dashboard',
    layout: 'superadmin',
  },
  {
    // Admin RH, Responsable RH, Admin Holding, Manager, + tout rôle créé par RH (type='rh')
    roleIds: [4, 5, 9, 14],
    defaultRoute: '/adminrh/adminrh-dashboard',
    layout: 'adminrh',
  },
  {
    // Formateur, Consultant, Gestionnaire de compte
    roleIds: [3, 6, 10, 13],
    defaultRoute: '/instructor/instructor-dashboard',
    layout: 'formateur',
  },
  {
    roleIds: [2],
    defaultRoute: '/student/student-dashboard',
    layout: 'employe',
  },
];

// Layouts autorisés par préfixe de route
// adminrh inclut /student et /instructor pour les modes apprenant et formateur sans re-login
export const LAYOUT_ROUTE_PREFIXES: Record<LayoutType, string[]> = {
  superadmin: ['/superadmin'],
  adminrh:    ['/adminrh', '/student', '/instructor'],
  formateur:  ['/instructor'],
  employe:    ['/student'],
};
