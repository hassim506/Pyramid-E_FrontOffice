// src/app/shared/models/Formations.models.ts

export interface FormateurLite {
  id: number;
  nom_complet: string;
  email: string;
  entreprise_id?: number;
}

export interface Formations {
  id: number;
  titre: string;
  description: string;
  short_description: string;

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

  est_certifiante: boolean;
  est_publie: boolean;
  inscription_ouverte: boolean;

  formateur_id: number;

  // 🔑 utilisé pour le filtrage entreprise
  formateur?: FormateurLite;

  created_at?: string | Date;
  updated_at?: string | Date;
}

export interface FormationApiResponse {
  data: Formations[];
  status: boolean;
  formations: Formations[];
}
