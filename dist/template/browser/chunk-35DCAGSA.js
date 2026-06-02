import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-46QRNFHM.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7XGB4BEQ.js";

// src/app/shared/service/categorie/categorie-service.service.ts
var CategorieService = class _CategorieService {
  http;
  apiUrl = `${environment.apiUrl}/categories-formation`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Récupérer toutes les catégories avec filtres optionnels
   */
  getCategories(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== void 0 && value !== null) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get(this.apiUrl, { params: httpParams });
  }
  /**
   * Récupérer l'arbre hiérarchique des catégories
   */
  getArbreCategories() {
    return this.http.get(`${this.apiUrl}/arbre`);
  }
  /**
   * Récupérer les statistiques des catégories
   */
  getStatistiques() {
    return this.http.get(`${this.apiUrl}/statistiques`);
  }
  /**
   * Récupérer une catégorie par son ID
   */
  getCategorie(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  /**
   * Créer une nouvelle catégorie
   */
  createCategorie(categorie) {
    return this.http.post(this.apiUrl, categorie);
  }
  /**
   * Mettre à jour une catégorie existante
   */
  updateCategorie(id, categorie) {
    return this.http.put(`${this.apiUrl}/${id}`, categorie);
  }
  /**
   * Récupérer uniquement les catégories parentes (niveau 0)
   */
  getCategoriesParentes() {
    return this.getCategories({ parent_id: 0 });
  }
  /**
   * Récupérer les sous-catégories d'une catégorie parente
   */
  getSousCategories(parentId) {
    return this.getCategories({ parent_id: parentId });
  }
  /**
   * Récupérer uniquement les catégories actives
   */
  getCategoriesActives() {
    return this.getCategories({ est_active: true });
  }
  /**
   * Récupérer uniquement les catégories visibles
   */
  getCategoriesVisibles() {
    return this.getCategories({ est_visible: true });
  }
  /**
   * Rechercher des catégories par nom
   */
  searchCategories(searchTerm) {
    return this.getCategories({ search: searchTerm });
  }
  /**
   * Récupérer les catégories qui ont des formations associées
   */
  getCategoriesAvecFormations() {
    return this.getCategories({ avec_formations: true });
  }
  static \u0275fac = function CategorieService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategorieService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategorieService, factory: _CategorieService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategorieService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CategorieService
};
//# sourceMappingURL=chunk-35DCAGSA.js.map
