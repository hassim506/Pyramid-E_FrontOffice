import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../service/authentification/auth.service';
import { map } from 'rxjs/operators';


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
  created_at: string;
  updated_at: string;
  pivot?: {
    parcours_id: number;
    formation_id: number;
    ordre: number;
    obligatoire: boolean;
    created_at: string;
    updated_at: string;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
  pivot?: {
    parcours_id: number;
    user_id: number;
    progression: number;
    date_inscription: string;
    date_completion?: string;
    statut: string;
  };
}

export interface Parcours {
  id: number;
  nom: string;
  description: string;
  niveau: string;
  duree_estimee: number;
  prix: string;
  actif: boolean;
  objectifs: string[];
  prerequis: string[];
  image_url?: string;
  status: string;
  entreprise_id: number;
  created_at: string;
  updated_at: string;
  formations: Formation[];
  users: User[];
}

export interface ParcoursRequest {
  nom: string;
  description?: string;
  niveau?: string;
  duree_estimee?: number;
  prix?: string;
  actif: boolean;
  objectifs?: string[];
  prerequis?: string[];
  image_url?: string;
  entreprise_id: number;
  statut: boolean;
  formation_ids?: number[];
}

export interface ParcoursResponse {
  status: boolean;
  parcours: Parcours[];
  message?: string;
}

export interface ParcoursSimpleResponse {
  status?: boolean;
  message?: string;
  data?: Parcours;
  parcours?: Parcours;
}

export interface InscriptionRequest {
  user_id: number;
}

export interface ProgressionRequest {
  progression: number;
}

export interface FormationsUpdateRequest {
  formations: {
    id: number;
    ordre: number;
    obligatoire: boolean;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  private apiUrl = `${environment.apiUrl}/parcours`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token') || localStorage.getItem('pyramide_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  // Récupérer tous les parcours avec pagination
  getParcours(page: number = 1, limit: number = 15): Observable<ParcoursResponse> {
    return this.http.get<ParcoursResponse>(`${this.apiUrl}?page=${page}&per_page=${limit}`, {
      headers: this.getHeaders()
    });
  }

getRhParcours(): Observable<ParcoursResponse> {
  const entrepriseId = this.getCurrentUserEntrepriseId();

  return this.http.get<ParcoursResponse>(this.apiUrl, {
    headers: this.getHeaders()
  }).pipe(
    map(response => {
      const all = response.parcours || [];
      // Comparaison loose (== au lieu de ===) : PHP peut retourner entreprise_id en string
      // On normalise aussi actif en booléen (PHP retourne 0/1)
      const filtered = all
        .filter((p: Parcours) => Number(p.entreprise_id) === Number(entrepriseId))
        .map((p: Parcours) => ({ ...p, actif: Boolean(p.actif) }));
      return { ...response, parcours: filtered };
    })
  );
}

public getCurrentUserEntrepriseId(): number {
  const user = this.authService.getUser();
  if (!user || !user.entreprise_id) {
    throw new Error('Utilisateur non connecté ou entreprise_id manquant');
  }
  return user.entreprise_id;
}
  // Récupérer un parcours par ID
  getParcoursById(id: number): Observable<ParcoursSimpleResponse> {
    return this.http.get<ParcoursSimpleResponse>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }

  // Créer un nouveau parcours
createParcours(parcoursData: ParcoursRequest): Observable<ParcoursSimpleResponse> {
  // S'assurer que l'entreprise_id est présent
  if (!parcoursData.entreprise_id) {
    parcoursData.entreprise_id = this.getCurrentUserEntrepriseId();
  }
  
  console.log('Données envoyées au backend avec entreprise_id:', parcoursData);
  
  return this.http.post<ParcoursSimpleResponse>(this.apiUrl, parcoursData, {
    headers: this.getHeaders()
  });
}
  // Mettre à jour un parcours
  updateParcours(id: number, parcoursData: ParcoursRequest): Observable<ParcoursSimpleResponse> {
    return this.http.put<ParcoursSimpleResponse>(`${this.apiUrl}/${id}`, parcoursData, {
      headers: this.getHeaders()
    });
  }

  // Supprimer un parcours
  deleteParcours(id: number): Observable<ParcoursSimpleResponse> {
    return this.http.delete<ParcoursSimpleResponse>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }

  // Inscrire un utilisateur à un parcours
  inscrireUtilisateur(parcoursId: number, inscriptionData: InscriptionRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${parcoursId}/inscrire`, inscriptionData, {
      headers: this.getHeaders()
    });
  }

  // Mettre à jour la progression d'un utilisateur
  updateProgression(parcoursId: number, userId: number, progressionData: ProgressionRequest): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${parcoursId}/users/${userId}/progression`, progressionData, {
      headers: this.getHeaders()
    });
  }

  // Mettre à jour les formations d'un parcours
  updateFormations(parcoursId: number, formationsData: FormationsUpdateRequest): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${parcoursId}/formations`, formationsData, {
      headers: this.getHeaders()
    });
  }

  getParticipantsParcours(parcoursId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${parcoursId}/participants`, {
      headers: this.getHeaders()
    });
  }

  desinscrireUtilisateur(parcoursId: number, userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${parcoursId}/desinscrire/${userId}`, {
      headers: this.getHeaders()
    });
  }
}