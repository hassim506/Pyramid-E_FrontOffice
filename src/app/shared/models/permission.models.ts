export interface Permission {
  id: number;
  name: string;
  guard_name: string;
  created_at?: string | Date;
  updated_at?: string | Date;
}

export interface PermissionResponse {
  status: boolean;
  permissions: boolean;
  success: boolean;
  message: string;
  data?: Permission | Permission[];
}