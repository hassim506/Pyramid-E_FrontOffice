export type LayoutType = 'superadmin' | 'adminrh' | 'formateur' | 'employe';

export interface RoleRoutingConfig {
  roleIds: number[];
  defaultRoute: string;
  layout: LayoutType;
}

export const ROLE_ROUTING: RoleRoutingConfig[] = [
  {
    roleIds: [1],
    defaultRoute: '/superadmin/superadmin-user-list',
    layout: 'superadmin',
  },
  {
    // Admin RH, Responsable RH, Admin Holding, Manager, + tout rôle créé par RH (type='rh')
    roleIds: [4, 5, 9, 14],
    defaultRoute: '/adminrh/adminrh-user-list',
    layout: 'adminrh',
  },
  {
    // Formateur, Consultant, Gestionnaire de compte
    roleIds: [3, 6, 10, 13],
    defaultRoute: '/instructor/instructor-course-grid',
    layout: 'formateur',
  },
  {
    roleIds: [2],
    defaultRoute: '/student/student-dashboard',
    layout: 'employe',
  },
];

// Layouts autorisés par préfixe de route
// Tous les profils non-employé peuvent accéder à /student (mode apprenant) et /courses
export const LAYOUT_ROUTE_PREFIXES: Record<LayoutType, string[]> = {
  superadmin: ['/superadmin', '/student', '/instructor', '/courses'],
  adminrh:    ['/adminrh',    '/student', '/instructor', '/courses'],
  formateur:  ['/instructor', '/student',               '/courses'],
  employe:    ['/student',                              '/courses'],
};
