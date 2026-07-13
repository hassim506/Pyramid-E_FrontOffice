import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { CategorieService } from '../../../shared/service/categorie/categorie-service.service';

interface Formation {
  id: number;
  titre: string;
  description: string;
  image_couverture: string;
  niveau: string;
  duree_totale: number;
  categorie_formation?: any;
  formateur?: any;
  est_gratuite: boolean;
  prix?: number;
  note_moyenne?: number;
  nombre_etudiants?: number;
  est_inscrit?: boolean;
}

interface Catalogue {
  id: number;
  nom?: string;
  titre?: string; // Backend peut utiliser 'titre' au lieu de 'nom'
  description: string;
  image_couverture: string;
  formations_count: number;
  nombre_formations?: number; // Backend peut utiliser 'nombre_formations'
  est_assigne?: boolean;
  peut_demander?: boolean; // Indique si l'utilisateur peut faire une demande
}

interface Parcours {
  id: number;
  nom: string;
  description: string;
  image_couverture: string;
  duree_totale: number;
  formations_count: number;
  categorie?: any;
  est_assigne?: boolean;
  peut_demander?: boolean; // Indique si l'utilisateur peut faire une demande
}

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent implements OnInit {
  // États
  loading = false;
  error = '';
  activeTab: 'formations' | 'catalogues' | 'parcours' = 'formations';

  // Données
  formations: Formation[] = [];
  catalogues: Catalogue[] = [];
  parcours: Parcours[] = [];
  categories: any[] = [];

  // Filtres
  searchTerm = '';
  selectedCategory: number | null = null;
  selectedNiveau: string | null = null;
  selectedPrix: string | null = null;

  // Filtres disponibles
  niveaux = [
    { value: 'débutant', label: 'Débutant' },
    { value: 'intermédiaire', label: 'Intermédiaire' },
    { value: 'avancé', label: 'Avancé' },
    { value: 'expert', label: 'Expert' }
  ];

  prixOptions = [
    { value: 'gratuit', label: 'Gratuit' },
    { value: 'payant', label: 'Payant' },
    { value: 'tous', label: 'Tous' }
  ];

  // Données filtrées
  get filteredFormations(): Formation[] {
    return this.applyFilters(this.formations);
  }

  get filteredCatalogues(): Catalogue[] {
    let result = this.catalogues;

    // Filtre recherche
    if (this.searchTerm) {
      const search = this.searchTerm.toLowerCase();
      result = result.filter(item =>
        item.nom?.toLowerCase().includes(search) ||
        item.description?.toLowerCase().includes(search)
      );
    }

    // Filtre catégorie (si les catalogues ont une propriété categorie)
    // Note: si les catalogues n'ont pas de catégorie, supprimer ce bloc
    // if (this.selectedCategory) {
    //   result = result.filter(item => item.categorie?.id === this.selectedCategory);
    // }

    return result;
  }

  get filteredParcours(): Parcours[] {
    let result = this.parcours;

    // Filtre recherche
    if (this.searchTerm) {
      const search = this.searchTerm.toLowerCase();
      result = result.filter(item =>
        item.nom?.toLowerCase().includes(search) ||
        item.description?.toLowerCase().includes(search)
      );
    }

    // Filtre catégorie
    if (this.selectedCategory) {
      result = result.filter(item => item.categorie?.id === this.selectedCategory);
    }

    return result;
  }

  constructor(
    private formationService: FormationService,
    private categorieService: CategorieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadData();
  }

  loadCategories(): void {
    this.categorieService.getCategories({ est_active: true, est_visible: true }).subscribe({
      next: (response: any) => {
        this.categories = response.data?.categories || response.categories || [];
      },
      error: (err) => console.error('Erreur chargement catégories:', err)
    });
  }

  loadData(): void {
    this.loading = true;
    this.error = '';

    switch (this.activeTab) {
      case 'formations':
        this.loadFormations();
        break;
      case 'catalogues':
        this.loadCatalogues();
        break;
      case 'parcours':
        this.loadParcours();
        break;
    }
  }

  loadFormations(): void {
    const user = this.getCurrentUser();
    const entrepriseId = user?.entreprise_id;

    console.log('🔍 Explorer - Chargement formations pour entreprise:', entrepriseId);

    if (!entrepriseId) {
      console.error('❌ Explorer - Utilisateur sans entreprise_id');
      this.error = 'Votre profil n\'est pas associé à une entreprise';
      this.loading = false;
      return;
    }

    this.formationService.getFormationsByEntreprise(entrepriseId).subscribe({
      next: (response: any) => {
        console.log('📦 Explorer - Réponse API formations:', response);
        this.formations = response.formations || response.data || [];
        console.log(`✅ Explorer - ${this.formations.length} formations chargées`);
        this.loading = false;
      },
      error: (err) => {
        console.error('❌ Explorer - Erreur chargement formations:', err);
        this.error = 'Impossible de charger les formations';
        this.loading = false;
      }
    });
  }

  private getCurrentUser(): any {
    try {
      return JSON.parse(localStorage.getItem('pyramide_user') || 'null');
    } catch {
      return null;
    }
  }

  loadCatalogues(): void {
    const user = this.getCurrentUser();
    console.log('🔍 Explorer - Chargement catalogues pour utilisateur:', {
      entreprise_id: user?.entreprise_id,
      user_id: user?.id,
      role: user?.role
    });

    this.formationService.getCataloguesForEmploye().subscribe({
      next: (response: any) => {
        console.log('📦 Explorer - Réponse API catalogues:', response);

        // Le backend renvoie {status: true, catalogues: [...]}
        const rawCatalogues = response.catalogues || response.data || [];
        console.log(`✅ Explorer - ${rawCatalogues.length} catalogues bruts reçus`);

        // Normaliser les données (titre→nom, nombre_formations→formations_count)
        this.catalogues = rawCatalogues.map((c: any) => ({
          id: c.id,
          nom: c.nom || c.titre,
          titre: c.titre || c.nom,
          description: c.description,
          image_couverture: c.image_couverture,
          formations_count: c.formations_count || c.nombre_formations || 0,
          nombre_formations: c.nombre_formations || c.formations_count || 0,
          est_assigne: c.est_assigne || false,
          peut_demander: c.peut_demander !== false // Par défaut true si non défini
        }));

        console.log(`✅ Explorer - ${this.catalogues.length} catalogues après normalisation`);
        this.loading = false;
      },
      error: (err) => {
        console.error('❌ Explorer - Erreur chargement catalogues:', err);
        this.error = 'Impossible de charger les catalogues';
        this.loading = false;
      }
    });
  }

  loadParcours(): void {
    const user = this.getCurrentUser();
    console.log('🔍 Explorer - Chargement parcours pour utilisateur:', {
      entreprise_id: user?.entreprise_id,
      domaine_id: user?.domaine_id,
      user_id: user?.id
    });

    this.formationService.getParcoursDisponibles().subscribe({
      next: (response: any) => {
        console.log('📦 Explorer - Réponse API parcours:', response);

        // Le backend renvoie {status: true, parcours: [...]}
        const rawParcours = response.parcours || response.data || [];
        console.log(`✅ Explorer - ${rawParcours.length} parcours bruts reçus`);

        // Normaliser les données
        this.parcours = rawParcours.map((p: any) => ({
          id: p.id,
          nom: p.nom,
          description: p.description,
          image_couverture: p.image_couverture,
          duree_totale: p.duree_totale || 0,
          formations_count: p.formations_count || p.nombre_formations || 0,
          categorie: p.categorie || null,
          est_assigne: p.est_assigne || false,
          peut_demander: p.peut_demander !== false // Par défaut true si non défini
        }));

        console.log(`✅ Explorer - ${this.parcours.length} parcours après normalisation`);
        this.loading = false;
      },
      error: (err) => {
        console.error('❌ Explorer - Erreur chargement parcours:', err);
        this.error = 'Impossible de charger les parcours';
        this.loading = false;
      }
    });
  }

  applyFilters(items: Formation[]): Formation[] {
    let result = items;

    // Filtre recherche
    if (this.searchTerm) {
      const search = this.searchTerm.toLowerCase();
      result = result.filter(item =>
        item.titre.toLowerCase().includes(search) ||
        item.description?.toLowerCase().includes(search)
      );
    }

    // Filtre catégorie
    if (this.selectedCategory) {
      result = result.filter(item => item.categorie_formation?.id === this.selectedCategory);
    }

    // Filtre niveau
    if (this.selectedNiveau) {
      result = result.filter(item => item.niveau?.toLowerCase() === this.selectedNiveau?.toLowerCase());
    }

    // Filtre prix
    if (this.selectedPrix) {
      if (this.selectedPrix === 'gratuit') {
        result = result.filter(item => item.est_gratuite || !item.prix || item.prix === 0);
      } else if (this.selectedPrix === 'payant') {
        result = result.filter(item => !item.est_gratuite && item.prix && item.prix > 0);
      }
    }

    return result;
  }

  changeTab(tab: 'formations' | 'catalogues' | 'parcours'): void {
    if (this.activeTab === tab) return; // Ne rien faire si déjà sur cet onglet
    this.activeTab = tab;
    this.resetFilters();
    this.loadData();
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = null;
    this.selectedNiveau = null;
    this.selectedPrix = null;
  }

  onSearchChange(): void {
    // Méthode appelée lors du changement de recherche (pas besoin de recharger)
  }

  onFilterChange(): void {
    // Méthode appelée lors du changement de filtre (pas besoin de recharger)
  }

  demanderFormation(formationId: number): void {
    // Rediriger vers la page de demande de formation
    this.router.navigate(['/student/student-demande'], {
      queryParams: { formationId: formationId }
    });
  }

  demanderCatalogue(catalogueId: number): void {
    // Rediriger vers la page de demande de catalogue
    this.router.navigate(['/student/students-catalogue'], {
      queryParams: { catalogueId: catalogueId }
    });
  }

  demanderParcours(parcoursId: number): void {
    // Rediriger vers la page de demande de parcours
    this.router.navigate(['/student/mes-parcours'], {
      queryParams: { parcoursId: parcoursId }
    });
  }

  getImageUrl(path: string | null | undefined): string {
    // Utiliser la méthode du service qui gère correctement les URLs
    return this.formationService.getImageUrl(path);
  }

  getNiveauClass(niveau: string): string {
    const n = niveau?.toLowerCase();
    if (n === 'débutant') return 'badge-success';
    if (n === 'intermédiaire') return 'badge-info';
    if (n === 'avancé') return 'badge-warning';
    if (n === 'expert') return 'badge-danger';
    return 'badge-secondary';
  }
}
