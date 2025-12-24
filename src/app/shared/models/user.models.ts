
export interface User {
  id: number;
  nom: string;
  name :string;
  prenom: string;
  numero?: string;
  fonction: string;
  email: string;
  telephone?: string;
  role: string;
  role_id: number;
  statut: number;
  client_id?: number;
  entreprise_id?: number;
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