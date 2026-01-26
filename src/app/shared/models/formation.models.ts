// src/app/shared/models/formation.models.ts
export interface Formation {
  id: number;
  titre: string;
  description: string;
  short_description: string;
  duree_totale: number;
  prix: string;
  niveau: 'debutant' | 'intermediaire' | 'avance';
  type: 'en_ligne' | 'presentiel' | 'hybride';
  difficulte: 'facile' | 'moyen' | 'difficile';
  langue: string;
  tags: string;
  est_certifiante: boolean;
  est_publie: boolean;
  inscription_ouverte: boolean;
  nb_max_participants: number;
  categorie: CategorieFormation;
  formateur: Formateur;
  modules: Module[];
  nombre_modules: number;
  niveau_display: string;
  type_display: string;
  formateur_nom: string;
  formateur_email: string;
  image_couverture?: string;
  created_at: string;
  updated_at: string;
}

export interface CategorieFormation {
  id: number;
  nom: string;
  couleur: string;
  icone: string;
}

export interface Formateur {
  id: number;
  name: string;
  prenom: string;
  nom: string;
  email: string;
  fonction: string;
}

export interface Module {
  id: number;
  titre: string;
  description: string;
  duree_estimee: string;
  type: string;
  sections: Section[];
}

export interface Section {
  id: number;
  titre: string;
  duree_estimee: string;
  type: string;
}


export interface Employe {
  id: number;
  name: string;
  prenom: string;
  nom: string;
  numero: string;
  statut: number;
  role_id: number;
  email: string;
  fonction: string;
  email_verified_at: string | null;
  avatar: string | null;
  entreprise_id: number;
  created_by: number;
  created_at: string;
  updated_at: string;
}

export interface DemandeFormation {
  id: number;
  formation_id: number;
  user_id: number;
  statut: 'en_attente' | 'validee' | 'refusee' | 'annulee';
  priorite: 'basse' | 'normale' | 'haute' | 'urgente';
  motif_demande: string;
  objectifs_personnels: string;
  date_souhaitee_debut: string;
  commentaire_employe: string | null;
  commentaire_rh: string | null;
  date_validation: string | null;
  created_at: string;
  updated_at: string;
  formation: Formation;
  employe: Employe;
  validee_par: Employe | null;
  statut_display: string;
  priorite_display: string;
}

export interface DemandeFormationResponse {
  status: boolean;
  debug: {
    user_id: number;
    role_id: number;
    entreprise_id: number | null;
    total_en_base: number;
    avec_filtres_role: number;
    stats_par_statut: {
      total: number;
      en_attente: number;
      validee: number;
      refusee: number;
      annulee: number;
    };
  };
  demandes: DemandeFormation[];
}

export interface ActionDemandeRequest {
  commentaire_rh?: string;
}