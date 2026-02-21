// src/app/shared/models/Formations.models.ts

export interface FormateurLite {
  id: number;
  nom_complet: string;
  email: string;
  entreprise_id?: number;
}

export interface Formations {
  statut: string;
  id: number;
  titre: string;
  description: string;
  short_description: string;
   status: 'active' | 'pending' | 'completed';
  categorie_id: number;

  media_url?: string | null;
  image_couverture?: string | null;
  objectifs_pedagogiques?: string | null;
  prerequis?: string | null;
  plan_de_formation?: string | null;
  public_cible?: string | null;

  date_debut?: string | Date | null;
  date_fin?: string | Date | null;

  duree_totale: number;
  difficulte: string;
  langue: string;
  prix: number;
  niveau: string;

  est_certifiante: boolean;
  est_publie: boolean;
  inscription_ouverte: boolean;

  formateur_id: number;
  formateur?: FormateurLite;

  /** 🔥 Infos employé (pivot) */
  statut_formation?: 'en_cours' | 'termine' | 'abandonne';
  statut_inscription?: string;
  progression?: number;

  created_at?: string | Date;
  updated_at?: string | Date;
}

/** 🔥 Réponse API normalisée */
export interface FormationsApiResponse {
  status: boolean;
  formations: Formations[];
}
