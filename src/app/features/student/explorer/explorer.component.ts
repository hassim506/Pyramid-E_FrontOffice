import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { CategorieService } from '../../../shared/service/categorie/categorie-service.service';
import { DemandeFormationService } from '../../../shared/service/demande/demande-formation.service';

declare var bootstrap: any;

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
  peut_demander?: boolean;
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
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
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

  // Filtres disponibles
  niveaux = [
    { value: 'débutant', label: 'Débutant' },
    { value: 'intermédiaire', label: 'Intermédiaire' },
    { value: 'avancé', label: 'Avancé' },
    { value: 'expert', label: 'Expert' }
  ];

  // Modal demande
  demandeForm!: FormGroup;
  formationSelectionnee: Formation | null = null;
  catalogueSelectionne: Catalogue | null = null;
  parcoursSelectionne: Parcours | null = null;
  typeDemandeActuelle: 'formation' | 'catalogue' | 'parcours' = 'formation';
  submitting = false;
  demandeModal: any;

  // Données filtrées
  get filteredFormations(): Formation[] {
    return this.applyFilters(this.formations);
  }

  // Getter pour l'élément actuellement sélectionné dans le modal
  get elementSelectionne(): any {
    if (this.typeDemandeActuelle === 'formation') return this.formationSelectionnee;
    if (this.typeDemandeActuelle === 'catalogue') return this.catalogueSelectionne;
    if (this.typeDemandeActuelle === 'parcours') return this.parcoursSelectionne;
    return null;
  }

  get titreModal(): string {
    if (this.typeDemandeActuelle === 'formation') return 'Demander une formation';
    if (this.typeDemandeActuelle === 'catalogue') return 'Demander un catalogue';
    if (this.typeDemandeActuelle === 'parcours') return 'Demander un parcours';
    return 'Faire une demande';
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
    private demandeService: DemandeFormationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.demandeForm = this.formBuilder.group({
      motif_demande: ['', Validators.required],
      objectifs_personnels: ['', Validators.required],
      priorite: ['normale', Validators.required],
      date_souhaitee_debut: [''],
      commentaire_employe: ['']
    });
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadData();

    // Vérifier si on doit ouvrir le modal automatiquement
    this.route.queryParams.subscribe(params => {
      if (params['formationId']) {
        const formationId = +params['formationId'];
        // Attendre que les formations soient chargées
        setTimeout(() => {
          this.demanderFormation(formationId);
          // Nettoyer le queryParam de l'URL
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {},
            queryParamsHandling: 'merge'
          });
        }, 1000);
      }
    });
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
    console.log('🔍 Explorer - Chargement formations pour utilisateur:', {
      entreprise_id: user?.entreprise_id,
      user_id: user?.id
    });

    // Utiliser le nouvel endpoint qui gère peut_demander et est_inscrit
    this.formationService.getFormationsForEmploye().subscribe({
      next: (response: any) => {
        console.log('📦 Explorer - Réponse API formations:', response);
        const rawFormations = response.formations || response.data || [];

        // Normaliser les données
        this.formations = rawFormations.map((f: any) => ({
          ...f,
          peut_demander: f.peut_demander !== false,
          est_inscrit: f.est_inscrit || false
        }));

        console.log(`✅ Explorer - ${this.formations.length} formations chargées`);
        this.loading = false;
      },
      error: (err) => {
        console.error('❌ Explorer - Erreur chargement formations:', err);

        // Fallback: si l'endpoint ne marche pas, utiliser l'ancien
        console.log('⚠️ Fallback vers getFormationsByEntreprise');
        const entrepriseId = user?.entreprise_id;

        if (!entrepriseId) {
          this.error = 'Impossible de charger les formations';
          this.loading = false;
          return;
        }

        this.formationService.getFormationsByEntreprise(entrepriseId).subscribe({
          next: (response: any) => {
            this.formations = response.formations || response.data || [];
            // Sans peut_demander, tous les boutons seront affichés (comportement par défaut)
            console.log(`✅ Explorer - ${this.formations.length} formations chargées (fallback)`);
            this.loading = false;
          },
          error: () => {
            this.error = 'Impossible de charger les formations';
            this.loading = false;
          }
        });
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
  }

  onSearchChange(): void {
    // Méthode appelée lors du changement de recherche (pas besoin de recharger)
  }

  onFilterChange(): void {
    // Méthode appelée lors du changement de filtre (pas besoin de recharger)
  }

  demanderFormation(formationId: number): void {
    // Trouver la formation
    this.formationSelectionnee = this.formations.find(f => f.id === formationId) || null;
    this.catalogueSelectionne = null;
    this.parcoursSelectionne = null;
    this.typeDemandeActuelle = 'formation';

    if (!this.formationSelectionnee) return;

    // Réinitialiser le formulaire
    this.demandeForm.reset({
      motif_demande: '',
      objectifs_personnels: '',
      priorite: 'normale',
      date_souhaitee_debut: '',
      commentaire_employe: ''
    });

    // Ouvrir le modal
    this.demandeModal = new bootstrap.Modal(document.getElementById('demandeFormationModal'));
    this.demandeModal.show();
  }

  soumettreDemandeFormation(): void {
    if (this.demandeForm.invalid) {
      Object.keys(this.demandeForm.controls).forEach(key => {
        this.demandeForm.get(key)?.markAsTouched();
      });
      return;
    }

    // Vérifier qu'on a bien un élément sélectionné
    if (!this.formationSelectionnee && !this.catalogueSelectionne && !this.parcoursSelectionne) {
      return;
    }

    this.submitting = true;

    // Construire le payload selon le type
    let payload: any = {
      type_demande: this.typeDemandeActuelle,
      ...this.demandeForm.value
    };

    if (this.typeDemandeActuelle === 'formation' && this.formationSelectionnee) {
      payload.formation_id = this.formationSelectionnee.id;
    } else if (this.typeDemandeActuelle === 'catalogue' && this.catalogueSelectionne) {
      payload.catalogue_id = this.catalogueSelectionne.id;
    } else if (this.typeDemandeActuelle === 'parcours' && this.parcoursSelectionne) {
      payload.parcours_id = this.parcoursSelectionne.id;
    }

    this.demandeService.creerDemande(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.demandeModal.hide();

        const type = this.typeDemandeActuelle === 'formation' ? 'formation'
                   : this.typeDemandeActuelle === 'catalogue' ? 'catalogue'
                   : 'parcours';
        alert(`Demande de ${type} envoyée avec succès !`);

        // Recharger les données pour mettre à jour le statut peut_demander
        this.loadData();
      },
      error: (err) => {
        this.submitting = false;
        console.error('Erreur création demande:', err);
        alert('Erreur lors de la création de la demande. Veuillez réessayer.');
      }
    });
  }

  fermerModalDemande(): void {
    if (this.demandeModal) {
      this.demandeModal.hide();
    }
  }

  demanderCatalogue(catalogueId: number): void {
    // Trouver le catalogue
    this.catalogueSelectionne = this.catalogues.find(c => c.id === catalogueId) || null;
    this.formationSelectionnee = null;
    this.parcoursSelectionne = null;
    this.typeDemandeActuelle = 'catalogue';

    if (!this.catalogueSelectionne) return;

    // Réinitialiser le formulaire
    this.demandeForm.reset({
      motif_demande: '',
      objectifs_personnels: '',
      priorite: 'normale',
      date_souhaitee_debut: '',
      commentaire_employe: ''
    });

    // Ouvrir le modal
    this.demandeModal = new bootstrap.Modal(document.getElementById('demandeFormationModal'));
    this.demandeModal.show();
  }

  demanderParcours(parcoursId: number): void {
    // Trouver le parcours
    this.parcoursSelectionne = this.parcours.find(p => p.id === parcoursId) || null;
    this.formationSelectionnee = null;
    this.catalogueSelectionne = null;
    this.typeDemandeActuelle = 'parcours';

    if (!this.parcoursSelectionne) return;

    // Réinitialiser le formulaire
    this.demandeForm.reset({
      motif_demande: '',
      objectifs_personnels: '',
      priorite: 'normale',
      date_souhaitee_debut: '',
      commentaire_employe: ''
    });

    // Ouvrir le modal
    this.demandeModal = new bootstrap.Modal(document.getElementById('demandeFormationModal'));
    this.demandeModal.show();
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
