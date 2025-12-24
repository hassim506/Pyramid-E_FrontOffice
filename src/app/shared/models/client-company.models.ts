export interface Client {
  id: number;
  nom: string;
  type: 'entreprise' | 'groupe' | 'particulier';
  siret: string;
  adresse: string;
  telephone: string;
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
  siret: string;
  adresse: string;
  telephone: string;
  email: string;
  secteur_activite: string;
  taille_effectif: number;
  statut: 'active' | 'inactive' | 'suspendue';
  client_id: number;
  created_at?: string | Date;
  updated_at?: string | Date;
  // Relations
  client?: Client;
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
  siret: string;
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
  siret: string;
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