
export interface User {
  id: number;
  nom: string;
  name :string;
  prenom: string;
  numero?: string;
  fonction: string;
  email: string;
  telephone?: string;
  role_id: number;
  statut: number;
  client_id?: number;
  entreprise_id?: number;
  role?: {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
  };
  matricule?: string;
  direction?: string;
  direction_id?: number;
  direction_obj?: {
    id: number;
    nom: string;
    type: string;
    parent?: {
      id: number;
      nom: string;
      type: string;
      parent?: {
        id: number;
        nom: string;
        type: string;
      };
    };
  };
  created_at?: string | Date;
  updated_at?: string | Date;
  client?: {
    id: number;
    nom: string;
  };
  entreprise?: {
    id: number;
    nom: string;
  };
}