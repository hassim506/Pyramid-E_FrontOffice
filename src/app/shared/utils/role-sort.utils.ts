const ROLE_ORDER: string[] = [
  'Super Admin',
  'Superadmin Holding',
  'Super Admin Holding',
  'Super Admin RH Holding',
  'Administrateur RH Holding',
  'Admin RH Holding',
  'Admin RH',
  'Administrateur RH',
  'Admin IT',
  'Administrateur IT',
  'Responsable RH Groupe',
  'Responsable RH',
  'Gestionnaire de Contenu',
  'Gestionnaire de Compte Client',
  'Administrateur Entreprise',
  'Admin RH Entreprise',
  'Manager',
  'Formateur',
  'Consultant',
  'Employé',
  'Employe',
];

export function sortRoles<T extends { name: string; role_level?: number }>(roles: T[]): T[] {
  return [...roles].sort((a, b) => {
    const ia = ROLE_ORDER.indexOf(a.name);
    const ib = ROLE_ORDER.indexOf(b.name);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    const la = a.role_level ?? 99;
    const lb = b.role_level ?? 99;
    if (la !== lb) return la - lb;
    return a.name.localeCompare(b.name, 'fr');
  });
}

export function sortRoleNames(names: string[]): string[] {
  return [...names].sort((a, b) => {
    const ia = ROLE_ORDER.indexOf(a);
    const ib = ROLE_ORDER.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return a.localeCompare(b, 'fr');
  });
}
