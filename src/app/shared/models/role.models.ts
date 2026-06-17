import { Permission } from './permission.models';

export type RoleType = 'admin' | 'rh' | 'formateur' | 'employe';

export interface Role {
  id: number;
  name: string;
  guard_name: string;
  description?: string;
  type?: RoleType | null;
  role_level?: number | null;
  created_by_role_id?: number | null;
  entreprise_id?: number | null;
  is_system?: boolean;
  created_at?: string | Date;
  updated_at?: string | Date;
  permissions?: Permission[];
  permissions_count?: number;
  users_count?: number;
}

export interface RoleResponse {
  status: boolean;
  roles?: Role[];
  total?: number;
  message?: string;
}
export interface AssignRoleRequest {
  user_id: number;
  role_id: number;
}

export interface RoleWithPermissions extends Role {
  permissions: Permission[];
}