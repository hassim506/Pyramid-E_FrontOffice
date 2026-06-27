// src/app/shared/models/formation.models.ts
// ✅ Fusion de Formations.models.ts + formation.models.ts

// =============================================
// SOUS-INTERFACES
// =============================================

export interface CategorieFormation {
  id: number;
  nom: string;
  couleur?: string;
  icone?: string;
  description?: string;
}

export interface Formateur {
  id: number;
  name?: string;
  prenom?: string;
  nom?: string;
  nom_complet?: string;
  email: string;
  fonction?: string;
  entreprise_id?: number;
  entreprise?: { id: number; nom: string };
}

// Alias pour compatibilité
export type FormateurLite = Formateur;

export interface Section {
  id: number;
  titre: string;
  duree_estimee?: string | number;
  type?: string;
  ordre?: number;
}

export interface Module {
  id: number;
  titre: string;
  description?: string;
  duree_estimee?: string | number;
  type?: string;
  ordre?: number;
  sections?: Section[];
}

export interface Employe {
  id: number;
  name: string;
  prenom?: string;
  nom?: string;
  numero?: string;
  statut?: number;
  role_id?: number;
  email: string;
  fonction?: string;
  email_verified_at?: string | null;
  avatar?: string | null;
  entreprise_id?: number;
  created_by?: number;
  created_at?: string;
  updated_at?: string;
}

// =============================================
// INTERFACE PRINCIPALE : Formation
// =============================================

export interface Formation {
  id: number;
  titre: string;
  description?: string | null;
  short_description?: string | null;
  objectifs_pedagogiques?: string | null;
  public_cible?: string | null;
  prerequis?: string | null;
  plan_de_formation?: string | null;

  media_url?: string | null;
  image_couverture?: string | null;
  image?: any;

  duree_totale?: number;
  niveau?: 'debutant' | 'intermediaire' | 'avance' | string;
  type?: 'en_ligne' | 'presentiel' | 'hybride' | string;
  difficulte?: 'facile' | 'moyen' | 'difficile' | string;
  prix?: number | string;
  langue?: string;
  tags?: string[] | string;
  competences_acquises?: string[];
  outils_requis?: string[];

  est_certifiante?: boolean;
  est_publie?: boolean;
  inscription_ouverte?: boolean;
  nb_max_participants?: number;

  date_debut?: string | Date | null;
  date_fin?: string | Date | null;

  // Relations
  entreprise_id?: number;
  entreprise?: { id: number; nom: string };
  categorie_formation_id?: number;
  categorie_id?: number;
  categorie?: CategorieFormation;
  formateur_id?: number;
  formateur?: Formateur;
  modules?: Module[];

  // Champs calculés retournés par l'API
  nombre_modules?: number;
  nombre_sections?: number;
  duree_estimee?: string | number;
  niveau_display?: string;
  type_display?: string;
  formateur_nom?: string;
  formateur_email?: string;

  // Données pivot employé (mes-formations)
  statut?: string;
  status?: 'active' | 'pending' | 'completed';
  statut_formation?: 'en_cours' | 'termine' | 'abandonne' | null;
  statut_inscription?: string;
  progression?: number;
  certificat_obtenu?: boolean;
  date_inscription?: string;

  created_at?: string | Date;
  updated_at?: string | Date;
}

// Alias pour compatibilité avec l'ancien code
export type Formations = Formation;

// =============================================
// RÉPONSES API
// =============================================

export interface FormationsApiResponse {
  status: boolean;
  formations?: Formation[];
  formation?: Formation;
  data?: Formation;
  total?: number;
  statistiques?: any;
  message?: string;
}

// =============================================
// DEMANDES DE FORMATION
// =============================================

export interface DemandeFormation {
  id: number;
  formation_id: number;
  user_id: number;
  session_formation_id?: number | null;
  statut: 'en_attente' | 'validee' | 'refusee' | 'annulee';
  priorite?: 'basse' | 'normale' | 'haute' | 'urgente';
  motif_demande?: string;
  objectifs_personnels?: string;
  date_souhaitee_debut?: string | null;
  commentaire_employe?: string | null;
  commentaire_rh?: string | null;
  motif_refus?: string | null;
  date_validation?: string | null;
  validee_par?: Employe | number | null;
  statut_display?: string;
  priorite_display?: string;
  formation?: Formation;
  employe?: Employe;
  catalogue_id?: number | null;
  catalogue?: {
    id: number;
    titre: string;
    description: string;
    short_description: string;
    slug: string;
    image_couverture?: string;
    couleur: string;
    icone: string;
    ordre: number;
    tags: string[];
    metadata: {
      niveau: string;
      prerequis: string[];
      duree_moyenne: number;
      certificat_disponible: boolean;
    };
    est_publie: boolean;
    est_public: boolean;
    inscription_requise: boolean;
    type: string;
    conditions_acces?: string;
    date_debut?: string;
    date_fin?: string;
    entreprise_id?: number;
    created_by?: number;
    updated_by?: number;
    created_at: string;
    updated_at: string;
    formations: Formation[];
    entreprise?: any;
    nombre_formations: number;
    duree_totale: string;
    prix_moyen?: number;
    type_display: string;
    statut: string;
    est_actif: boolean;
  } | null;
  session_formation?: {
  id: number;
  titre: string;
  code_session: string;
  formation_id: number;
  formateur_id: number;
  description: string;
  date_debut: string;
  date_fin: string;
  horaires: any;
  timezone: string;
  type: 'presentiel' | 'distanciel' | 'hybride';
  lieu: string;
  instructions_acces: string;
  capacite_max: number;
  capacite_min: number;
  inscription_ouverte: boolean;
  date_limite_inscription: string;
  statut: 'planifiee' | 'en_cours' | 'terminee' | 'annulee';
  motif_annulation?: string;
  evaluation_requise: boolean;
  certificat_delivre: boolean;
  documents_requis?: string[];
  materiel_requis?: string[];
  cout_par_participant: string;
  cout_total_session: string;
  budget_alloue: string;
  metadata?: any;
  notes_organisateur?: string;
  organisateur_id: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formation?: any;
  formateur?: any;
  organisateur?: any;
  nombre_inscrits: number;
  nombre_places_restantes: number;
  type_display: string;
  statut_display: string;
  duree_en_heures: number;
  peut_etre_inscrit: boolean;
}

  parcours?: {
    id: number;
    titre: string;
    nom?: string;
    description?: string;
  } | null;

  type_demande?: string;
  created_at?: string;
  updated_at?: string;
}

export interface DemandeFormationResponse {
  status: boolean;
  demandes?: DemandeFormation[];
  demande?: DemandeFormation;
  statistiques?: {
    total: number;
    en_attente: number;
    validees: number;
    refusees: number;
    annulees: number;
  };
  debug?: {
    user_id: number;
    role_id: number;
    entreprise_id: number | null;
    total_en_base: number;
    avec_filtres_role: number;
    stats_par_statut: any;
  };
  message?: string;
}

export interface ActionDemandeRequest {
  commentaire_rh?: string;
  motif_refus?: string;
  date_debut_accordee?: string;
  conditions_validation?: any[];
}

