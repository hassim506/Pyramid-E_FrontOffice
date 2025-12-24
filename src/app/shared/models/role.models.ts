import { Permission } from './permission.models';

export interface Role {
  id: number;
  name: string;
  guard_name: string;
  description?: string;
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