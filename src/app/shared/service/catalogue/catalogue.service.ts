import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Formation {
  id: number;
  titre: string;
  description: string;
  short_description: string;
  prix: string;
  duree_totale: number;
  niveau: string;
  type: string;
  difficulte: string;
  langue: string;
  est_certifiante: boolean;
  est_publie: boolean;
  inscription_ouverte: boolean;
  nb_max_participants: number;
  image_couverture?: string;
  formateur_id: number;
  categorie_formation_id: number;
  tags: string;
  competences_acquises: string;
  outils_requis: string;
  objectifs_pedagogiques: string;
  public_cible: string;
  prerequis: string;
  media_url?: string;
  created_at: string;
  updated_at: string;
  pivot?: {
    catalogue_id: number;
    formation_id: number;
    ordre: number;
    est_featured: boolean;
    est_obligatoire: boolean;
    date_ajout: string;
    conditions_speciales?: string;
  };
}

export interface Catalogue {
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
}

export interface CatalogueRequest {
  titre: string;
  description: string;
  short_description: string;
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
}

export interface CatalogueResponse {
  status: boolean;
  message?: string;
  catalogues?: Catalogue[];
  data?: Catalogue;
}


export interface FormationCatalogueRequest {
  formation_id: number;
  ordre?: number;
  est_featured?: boolean;
  est_obligatoire?: boolean;
  conditions_speciales?: string;
}

export interface FormationCatalogueResponse {
  status: boolean;
  message?: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private apiUrl = `${environment.apiUrl}/catalogues`;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  // Récupérer tous les catalogues
  getCatalogues(): Observable<CatalogueResponse> {
    return this.http.get<CatalogueResponse>(this.apiUrl, {
      headers: this.getHeaders()
    });
  }

  // Récupérer un catalogue par ID
  getCatalogue(id: number): Observable<CatalogueResponse> {
    return this.http.get<CatalogueResponse>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }

  // Créer un nouveau catalogue
  createCatalogue(catalogueData: CatalogueRequest): Observable<CatalogueResponse> {
    return this.http.post<CatalogueResponse>(this.apiUrl, catalogueData, {
      headers: this.getHeaders()
    });
  }

  // Mettre à jour un catalogue
  updateCatalogue(id: number, catalogueData: CatalogueRequest): Observable<CatalogueResponse> {
    return this.http.put<CatalogueResponse>(`${this.apiUrl}/${id}`, catalogueData, {
      headers: this.getHeaders()
    });
  }

  // Supprimer un catalogue
  deleteCatalogue(id: number): Observable<CatalogueResponse> {
    return this.http.delete<CatalogueResponse>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }
   ajouterFormation(catalogueId: number, formationData: FormationCatalogueRequest): Observable<FormationCatalogueResponse> {
    return this.http.post<FormationCatalogueResponse>(
      `${this.apiUrl}/${catalogueId}/formations`, 
      formationData,
      { headers: this.getHeaders() }
    );
  }

  // Retirer une formation d'un catalogue
  retirerFormation(catalogueId: number, formationId: number): Observable<FormationCatalogueResponse> {
    return this.http.delete<FormationCatalogueResponse>(
      `${this.apiUrl}/${catalogueId}/formations/${formationId}`,
      { headers: this.getHeaders() }
    );
  }

  getParticipantsCatalogue(catalogueId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${catalogueId}/participants`, {
      headers: this.getHeaders()
    });
  }

  inscrireUtilisateur(catalogueId: number, userId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${catalogueId}/inscrire`, { user_id: userId }, {
      headers: this.getHeaders()
    });
  }

  desinscrireUtilisateur(catalogueId: number, userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${catalogueId}/desinscrire/${userId}`, {
      headers: this.getHeaders()
    });
  }
}