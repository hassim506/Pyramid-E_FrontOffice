export interface Client {
  id: number;
  nom: string;
  type: 'entreprise' | 'groupe' | 'particulier';
  ninea: string;
  adresse: string;
  telephone: string;
  pays?: string;
  email: string;
  contact_principal: string;
  secteur_activite: string;
  taille: string;
  statut: 'actif' | 'inactif' | 'suspendu';
  date_contrat: string | Date;
  date_fin_contrat: string | Date;
  created_at?: string | Date;
  updated_at?: string | Date;
  // Relations
  entreprises?: Company[];
  entreprises_count?: number;
}

export interface Company {
  id: number;
  nom: string;
  adresse: string;
  telephone: string;
  email: string;
  ninea: string;
  pays?: string;
  secteur_activite: string;
  taille_effectif: number;
  statut: 'active' | 'inactive' | 'suspendue';
  client_id: number;
  created_at?: string | Date;
  updated_at?: string | Date;
  // Relations
  client?: Client;
  // Stats (chargées séparément depuis /api/entreprises/{id})
  formations_count?: number;
  formations_actives_count?: number;
  employes_count?: number;        // employés rôle=2 inscrits sur la plateforme
  employes_actifs_count?: number; // employés rôle=2 avec statut=1 (actifs)
  total_users_count?: number;     // tous utilisateurs inscrits (toutes rôles)
  utilisateurs_actifs_count?: number; // tous utilisateurs actifs (statut=1)
  taux_completion?: number;
  certificats_count?: number;
  users?: any[];
  formations?: any[];
}

// Interface pour les réponses API Laravel
export interface ClientApiResponse {
  clients: never[];
  data: Client[];
  total?: number;
  per_page?: number;
  current_page?: number;
  last_page?: number;
  from?: number;
  to?: number;
}

export interface CompanyApiResponse {
  entreprises: never[];
  data: Company[];
  total?: number;
  per_page?: number;
  current_page?: number;
  last_page?: number;
  from?: number;
  to?: number;
}

// Interface pour les réponses API
export interface ClientApiResponse {
  success: boolean;
  data: Client[];
  totalData: number;
  message?: string;
}

export interface CompanyApiResponse {
  success: boolean;
  data: Company[];
  totalData: number;
  message?: string;
}

// Interface pour les filtres de recherche
export interface ClientFilters {
  search?: string;
  type?: string;
  statut?: string;
  secteur_activite?: string;
}

export interface CompanyFilters {
  search?: string;
  client_id?: number;
  statut?: string;
  secteur_activite?: string;
  taille_effectif_min?: number;
  taille_effectif_max?: number;
}

// Enums pour les types
export enum ClientType {
  ENTREPRISE = 'entreprise',
  GROUPE = 'groupe',
  PARTICULIER = 'particulier'
}

export enum StatutClient {
  ACTIF = 'actif',
  INACTIF = 'inactif',
  SUSPENDU = 'suspendu'
}

export enum StatutCompany {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDUE = 'suspendue'
}

// Interface pour la création/mise à jour
export interface CreateClientRequest {
  nom: string;
  type: ClientType;
  ninea: string;
  adresse: string;
  telephone: string;
  email: string;
  contact_principal: string;
  secteur_activite: string;
  taille: string;
  date_contrat: Date;
  date_fin_contrat: Date;
}

export interface CreateCompanyRequest {
  nom: string;
  ninea: string;
  adresse: string;
  telephone: string;
  email: string;
  secteur_activite: string;
  taille_effectif: number;
  client_id: number;
}

export interface UpdateClientRequest extends Partial<CreateClientRequest> {
  id: number;
}

export interface UpdateCompanyRequest extends Partial<CreateCompanyRequest> {
  id: number;
}