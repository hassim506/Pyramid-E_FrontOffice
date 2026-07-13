// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CategorieService {
  
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface CategorieFormation {
  id: number;
  nom: string;
  slug: string;
  description: string;
  short_description?: string;
  parent_id?: number;
  entreprise_id?: number;
  couleur: string;
  icone: string;
  image_couverture?: string;
  ordre: number;
  est_active: boolean;
  est_visible: boolean;
  created_at: string;
  updated_at: string;
  parent?: CategorieFormation;
  enfants: CategorieFormation[];
  entreprise?: { id: number; nom: string };
  created_by?: any;
  a_des_enfants: boolean;
  nombre_formations: number;
  niveau: number;
}

export interface CategorieFormationResponse {
  status: boolean;
  message: string;
  data: {
    categories: CategorieFormation[];
    total: number;
    filtres_appliques: {
      parent_id?: number;
      est_active?: boolean;
      est_visible?: boolean;
      avec_formations?: boolean;
      search?: string;
    };
  };
}

export interface CategorieFormationRequest {
  nom: string;
  description: string;
  short_description?: string;
  parent_id?: number;
  entreprise_id?: number;
  couleur: string;
  icone: string;
  image_couverture?: string;
  ordre?: number;
  est_active?: boolean;
  est_visible?: boolean;
}

export interface CategorieStatistiques {
  total_categories: number;
  categories_actives: number;
  categories_avec_formations: number;
  total_formations: number;
}

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl = `${environment.apiUrl}/categories-formation`;

  constructor(private http: HttpClient) { }

  /**
   * Récupérer toutes les catégories avec filtres optionnels
   */
  getCategories(params?: {
    parent_id?: number;
    est_active?: boolean;
    est_visible?: boolean;
    avec_formations?: boolean;
    search?: string;
  }): Observable<CategorieFormationResponse> {
    let httpParams = new HttpParams();
    
    if (params) {
      Object.keys(params).forEach(key => {
        const value = params[key as keyof typeof params];
        if (value !== undefined && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }

    return this.http.get<CategorieFormationResponse>(this.apiUrl, { params: httpParams });
  }

  /**
   * Récupérer l'arbre hiérarchique des catégories
   */
  getArbreCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/arbre`);
  }

  /**
   * Récupérer les statistiques des catégories
   */
  getStatistiques(): Observable<{ status: boolean; message: string; data: CategorieStatistiques }> {
    return this.http.get<{ status: boolean; message: string; data: CategorieStatistiques }>(`${this.apiUrl}/statistiques`);
  }

  /**
   * Récupérer une catégorie par son ID
   */
  getCategorie(id: number): Observable<{ status: boolean; message: string; data: CategorieFormation }> {
    return this.http.get<{ status: boolean; message: string; data: CategorieFormation }>(`${this.apiUrl}/${id}`);
  }

  /**
   * Créer une nouvelle catégorie
   */
  createCategorie(categorie: CategorieFormationRequest): Observable<{ status: boolean; message: string; data: CategorieFormation }> {
    return this.http.post<{ status: boolean; message: string; data: CategorieFormation }>(this.apiUrl, categorie);
  }

  /**
   * Mettre à jour une catégorie existante
   */
  updateCategorie(id: number, categorie: Partial<CategorieFormationRequest>): Observable<{ status: boolean; message: string; data: CategorieFormation }> {
    return this.http.put<{ status: boolean; message: string; data: CategorieFormation }>(`${this.apiUrl}/${id}`, categorie);
  }

  /**
   * Récupérer uniquement les catégories parentes (niveau 0)
   */
  getCategoriesParentes(): Observable<CategorieFormationResponse> {
    return this.getCategories({ parent_id: 0 });
  }

  /**
   * Récupérer les sous-catégories d'une catégorie parente
   */
  getSousCategories(parentId: number): Observable<CategorieFormationResponse> {
    return this.getCategories({ parent_id: parentId });
  }

  /**
   * Récupérer uniquement les catégories actives
   */
  getCategoriesActives(): Observable<CategorieFormationResponse> {
    return this.getCategories({ est_active: true });
  }

  /**
   * Récupérer uniquement les catégories visibles
   */
  getCategoriesVisibles(): Observable<CategorieFormationResponse> {
    return this.getCategories({ est_visible: true });
  }

  /**
   * Rechercher des catégories par nom
   */
  searchCategories(searchTerm: string): Observable<CategorieFormationResponse> {
    return this.getCategories({ search: searchTerm });
  }

  /**
   * Récupérer les catégories qui ont des formations associées
   */
  getCategoriesAvecFormations(): Observable<CategorieFormationResponse> {
    return this.getCategories({ avec_formations: true });
  }
}