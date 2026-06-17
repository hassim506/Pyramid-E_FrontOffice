import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CatalogueService, Catalogue, CatalogueRequest, Formation, FormationCatalogueRequest } from '../../../shared/service/catalogue/catalogue.service';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { HasPermissionDirective } from '../../../directive/has-permission-directive.directive';

declare var bootstrap: any;

@Component({
  selector: 'app-adminrh-catalogue',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HasPermissionDirective],
  templateUrl: './adminrh-catalogue.component.html',
  styleUrls: ['./adminrh-catalogue.component.scss']
})
export class AdminrhCatalogueComponent implements OnInit {
  // État général
  loading = false;
  saving = false;
  error = '';
  success = '';

  // Données
  catalogues: Catalogue[] = [];
  selectedCatalogue: Catalogue | null = null;

  // Données formations
  formations: any[] = [];
  formationsDisponibles: any[] = [];
  loadingFormations = false;

  // Multi-select pool pour ajout de formations
  formationsPoolSearch = '';
  selectedFormationIds: Set<number> = new Set();

  // Formulaires
  catalogueForm: FormGroup;
  formationForm: FormGroup;
  editMode = false;

  // Filtres et recherche
  searchTerm = '';
  selectedType = '';
  selectedStatus = '';

  // Types et statuts pour les filtres
  types = [
    { value: 'technique', label: 'Technique' },
    { value: 'management', label: 'Management' },
    { value: 'soft_skills', label: 'Soft Skills' }
  ];

  constructor(
    private catalogueService: CatalogueService,
    private formationService: FormationService,
    private formBuilder: FormBuilder
  ) {
    // Formulaire catalogue
    this.catalogueForm = this.formBuilder.group({
      titre: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      short_description: ['', Validators.required],
      couleur: ['#3B82F6', Validators.required],
      icone: ['folder', Validators.required],
      ordre: [1, [Validators.required, Validators.min(1)]],
      type: ['technique', Validators.required],
      est_publie: [true],
      est_public: [true],
      inscription_requise: [false],
      // Métadonnées
      niveau: ['Débutant', Validators.required],
      prerequis: [''],
      duree_moyenne: [30, [Validators.required, Validators.min(1)]],
      certificat_disponible: [false]
    });

    // Formulaire pour ajouter une formation
    this.formationForm = this.formBuilder.group({
      formation_id: ['', Validators.required],
      ordre: [1, [Validators.required, Validators.min(1)]],
      est_featured: [false],
      est_obligatoire: [false],
      conditions_speciales: ['']
    });
  }

  ngOnInit(): void {
    this.loadCatalogues();
    this.loadFormations();
  }

  // ==================== CHARGEMENT DES DONNÉES ====================

  loadCatalogues(): void {
    this.loading = true;
    this.error = '';

    this.catalogueService.getCatalogues().subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status && response.catalogues) {
          this.catalogues = response.catalogues;
          console.log(`${this.catalogues.length} catalogues chargés`);
        } else {
          this.catalogues = [];
          this.error = 'Aucun catalogue trouvé.';
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Erreur chargement catalogues:', err);
        this.error = httpErrorMessage(err, 'Impossible de charger les catalogues.');
      }
    });
  }

  loadFormations(): void {
    this.loadingFormations = true;
    
    this.formationService.getFormationsrh().subscribe({
      next: (response) => {
        this.loadingFormations = false;
        if (response?.status) {
          // Adapter selon le format de réponse de votre API
          this.formations = response.formations || response.data || [];
          console.log(`${this.formations.length} formations chargées`);
        } else {
          this.formations = [];
        }
      },
      error: (err) => {
        this.loadingFormations = false;
        console.error('Erreur chargement formations:', err);
        this.formations = [];
      }
    });
  }

  // ==================== GESTION DU FORMULAIRE CATALOGUE ====================

  openCatalogueModal(): void {
    this.editMode = false;
    this.selectedCatalogue = null;
    this.resetCatalogueForm();
    const modal = new bootstrap.Modal(document.getElementById('catalogueModal'));
    modal.show();
  }

  editCatalogue(catalogue: Catalogue): void {
    this.editMode = true;
    this.selectedCatalogue = catalogue;
    
    this.catalogueForm.patchValue({
      titre: catalogue.titre,
      description: catalogue.description,
      short_description: catalogue.short_description,
      couleur: catalogue.couleur,
      icone: catalogue.icone,
      ordre: catalogue.ordre,
      type: catalogue.type,
      est_publie: catalogue.est_publie,
      est_public: catalogue.est_public,
      inscription_requise: catalogue.inscription_requise,
      niveau: catalogue.metadata.niveau,
      prerequis: catalogue.metadata.prerequis.join(', '),
      duree_moyenne: catalogue.metadata.duree_moyenne,
      certificat_disponible: catalogue.metadata.certificat_disponible
    });

    const modal = new bootstrap.Modal(document.getElementById('catalogueModal'));
    modal.show();
  }

  onSubmit(): void {
    if (this.catalogueForm.invalid) {
      this.markFormGroupTouched(this.catalogueForm);
      return;
    }

    this.saving = true;
    this.error = '';

    const formData = this.buildCatalogueData();

    const operation = this.editMode && this.selectedCatalogue
      ? this.catalogueService.updateCatalogue(this.selectedCatalogue.id, formData)
      : this.catalogueService.createCatalogue(formData);

    operation.subscribe({
      next: (response) => {
        this.saving = false;
        if (response.status) {
          this.success = this.editMode 
            ? 'Catalogue modifié avec succès!' 
            : 'Catalogue créé avec succès!';
          this.closeModal('catalogueModal');
          this.loadCatalogues();
          setTimeout(() => this.success = '', 5000);
        }
      },
      error: (err) => {
        this.saving = false;
        console.error('Erreur sauvegarde:', err);
        this.error = err.error?.message || 'Erreur lors de la sauvegarde.';
      }
    });
  }

  buildCatalogueData(): CatalogueRequest {
    const formValue = this.catalogueForm.value;
    
    return {
      titre: formValue.titre.trim(),
      description: formValue.description.trim(),
      short_description: formValue.short_description.trim(),
      couleur: formValue.couleur,
      icone: formValue.icone.trim(),
      ordre: parseInt(formValue.ordre),
      tags: [],
      metadata: {
        niveau: formValue.niveau,
        prerequis: formValue.prerequis ? 
          formValue.prerequis.split(',').map((p: string) => p.trim()).filter((p: string) => p) : [],
        duree_moyenne: parseInt(formValue.duree_moyenne),
        certificat_disponible: Boolean(formValue.certificat_disponible)
      },
      est_publie: Boolean(formValue.est_publie),
      est_public: Boolean(formValue.est_public),
      inscription_requise: Boolean(formValue.inscription_requise),
      type: formValue.type
    };
  }

  // ==================== GESTION DES FORMATIONS DANS LE CATALOGUE ====================

  openFormationModal(catalogue: Catalogue): void {
    this.selectedCatalogue = catalogue;
    this.selectedFormationIds = new Set();
    this.formationsPoolSearch = '';
    this.updateFormationsDisponibles();
    this.formationForm.reset({
      formation_id: '',
      ordre: this.getNextOrdre(catalogue),
      est_featured: false,
      est_obligatoire: false,
      conditions_speciales: ''
    });

    const modal = new bootstrap.Modal(document.getElementById('formationModal'));
    modal.show();
  }

  updateFormationsDisponibles(): void {
    if (!this.selectedCatalogue) return;
    
    const formationsDejaIncluses = this.selectedCatalogue.formations.map(f => f.id);
    this.formationsDisponibles = this.formations.filter(f => 
      !formationsDejaIncluses.includes(f.id) && f.est_publie !== false
    );
  }

  getNextOrdre(catalogue: Catalogue): number {
    if (catalogue.formations.length === 0) return 1;
    const maxOrdre = Math.max(...catalogue.formations.map(f => f.pivot?.ordre || 1));
    return maxOrdre + 1;
  }

  ajouterFormation(): void {
    if (this.formationForm.invalid || !this.selectedCatalogue) {
      this.markFormGroupTouched(this.formationForm);
      return;
    }

    this.saving = true;
    this.error = '';

    const formData: FormationCatalogueRequest = {
      formation_id: parseInt(this.formationForm.value.formation_id),
      ordre: parseInt(this.formationForm.value.ordre),
      est_featured: Boolean(this.formationForm.value.est_featured),
      est_obligatoire: Boolean(this.formationForm.value.est_obligatoire),
      conditions_speciales: this.formationForm.value.conditions_speciales?.trim() || undefined
    };

    this.catalogueService.ajouterFormation(this.selectedCatalogue.id, formData).subscribe({
      next: (response) => {
        this.saving = false;
        if (response.status) {
          this.success = 'Formation ajoutée au catalogue avec succès!';
          this.closeModal('formationModal');
          this.loadCatalogues();
          setTimeout(() => this.success = '', 5000);
        } else {
          this.error = response.message || 'Erreur lors de l\'ajout de la formation.';
        }
      },
      error: (err) => {
        this.saving = false;
        console.error('Erreur ajout formation:', err);
        this.error = err.error?.message || 'Erreur lors de l\'ajout de la formation.';
      }
    });
  }

  retirerFormation(catalogue: Catalogue, formation: Formation): void {
    if (!confirm(`Êtes-vous sûr de vouloir retirer "${formation.titre}" de ce catalogue ?`)) {
      return;
    }

    this.catalogueService.retirerFormation(catalogue.id, formation.id).subscribe({
      next: (response) => {
        if (response.status) {
          this.success = 'Formation retirée du catalogue avec succès!';
          this.loadCatalogues();
          setTimeout(() => this.success = '', 5000);
        } else {
          this.error = response.message || 'Erreur lors de la suppression de la formation.';
        }
      },
      error: (err) => {
        console.error('Erreur suppression formation:', err);
        this.error = err.error?.message || 'Erreur lors de la suppression de la formation.';
      }
    });
  }

  // ==================== ACTIONS CATALOGUE ====================

  viewCatalogue(catalogue: Catalogue): void {
    this.selectedCatalogue = catalogue;
    const modal = new bootstrap.Modal(document.getElementById('viewModal'));
    modal.show();
  }

  confirmDelete(catalogue: Catalogue): void {
    this.selectedCatalogue = catalogue;
    const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
    modal.show();
  }

  deleteCatalogue(): void {
    if (!this.selectedCatalogue) return;

    this.catalogueService.deleteCatalogue(this.selectedCatalogue.id).subscribe({
      next: (response) => {
        if (response.status) {
          this.success = 'Catalogue supprimé avec succès!';
          this.closeModal('deleteModal');
          this.loadCatalogues();
          setTimeout(() => this.success = '', 5000);
        }
      },
      error: (err) => {
        console.error('Erreur suppression:', err);
        this.error = 'Erreur lors de la suppression.';
      }
    });
  }

  archiveCatalogue(catalogue: Catalogue | null): void {
    if (!catalogue) return;
    if (!confirm(`Archiver le catalogue "${catalogue.titre}" ?`)) return;
    this.catalogueService.deleteCatalogue(catalogue.id).subscribe({
      next: () => { this.success = 'Catalogue archivé.'; this.loadCatalogues(); setTimeout(() => this.success = '', 4000); },
      error: () => { this.error = 'Erreur lors de l\'archivage.'; }
    });
  }

  // ==================== UTILITAIRES ====================

  resetCatalogueForm(): void {
    this.catalogueForm.reset({
      titre: '',
      description: '',
      short_description: '',
      couleur: '#3B82F6',
      icone: 'folder',
      ordre: 1,
      type: 'technique',
      est_publie: true,
      est_public: true,
      inscription_requise: false,
      niveau: 'Débutant',
      prerequis: '',
      duree_moyenne: 30,
      certificat_disponible: false
    });
  }

  markFormGroupTouched(form: FormGroup): void {
    Object.keys(form.controls).forEach(key => {
      form.get(key)?.markAsTouched();
    });
  }

  closeModal(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }

  // ==================== FILTRES ====================

  get filteredCatalogues(): Catalogue[] {
    return this.catalogues.filter(catalogue => {
      const matchesSearch = !this.searchTerm || 
        catalogue.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        catalogue.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesType = !this.selectedType || catalogue.type === this.selectedType;
      
      const matchesStatus = !this.selectedStatus || 
        (this.selectedStatus === 'active' && catalogue.est_publie) ||
        (this.selectedStatus === 'inactive' && !catalogue.est_publie);

      return matchesSearch && matchesType && matchesStatus;
    });
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedType = '';
    this.selectedStatus = '';
  }

  // ==================== HELPERS ====================

  getIconClass(iconeName: string): string {
    return `isax isax-${iconeName}`;
  }

  getTypeLabel(type: string): string {
    const typeObj = this.types.find(t => t.value === type);
    return typeObj ? typeObj.label : type;
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getTotalPrice(formations: Formation[]): number {
    return formations.reduce((total, formation) => {
      return total + parseFloat(formation.prix || '0');
    }, 0);
  }

  getAveragePrice(formations: Formation[]): number {
    if (formations.length === 0) return 0;
    return this.getTotalPrice(formations) / formations.length;
  }

  getFeaturedFormationsCount(formations: Formation[]): number {
    return formations.filter(f => f.pivot?.est_featured).length;
  }

  getFormationById(id: number): any {
    return this.formations.find(f => f.id === id);
  }

  getSelectedFormationInfo(): any {
    const formationId = this.formationForm.get('formation_id')?.value;
    if (!formationId) return null;
    return this.getFormationById(parseInt(formationId)) || null;
  }

  // Fonctions de tracking pour optimiser le rendu
  // ==================== MULTI-SELECT POOL ====================

  get filteredFormationsPool(): any[] {
    const term = this.formationsPoolSearch.toLowerCase();
    if (!this.selectedCatalogue) return [];
    const alreadyIn = new Set(this.selectedCatalogue.formations.map(f => f.id));
    const available = this.formations.filter(f => !alreadyIn.has(f.id) && f.est_publie !== false);
    return term
      ? available.filter(f => f.titre?.toLowerCase().includes(term) || f.categorie?.toLowerCase().includes(term))
      : available;
  }

  isFormationSelected(id: number): boolean {
    return this.selectedFormationIds.has(id);
  }

  toggleFormationInPool(id: number): void {
    if (this.selectedFormationIds.has(id)) {
      this.selectedFormationIds.delete(id);
    } else {
      this.selectedFormationIds.add(id);
    }
  }

  removeSelectedFormation(id: number): void {
    this.selectedFormationIds.delete(id);
  }

  get selectedFormationsInPool(): any[] {
    return this.formations.filter(f => this.selectedFormationIds.has(f.id));
  }

  get selectedFormationCount(): number {
    return this.selectedFormationIds.size;
  }

  ajouterFormationsMultiples(): void {
    if (!this.selectedCatalogue || this.selectedFormationIds.size === 0) return;
    this.saving = true;
    this.error = '';

    const ids = Array.from(this.selectedFormationIds);
    let completed = 0;

    ids.forEach((formationId, i) => {
      const formData = {
        formation_id: formationId,
        ordre: (this.selectedCatalogue!.formations.length + i + 1),
        est_featured: false,
        est_obligatoire: false,
      };
      this.catalogueService.ajouterFormation(this.selectedCatalogue!.id, formData as any).subscribe({
        next: () => {
          completed++;
          if (completed === ids.length) {
            this.saving = false;
            this.success = `${ids.length} formation(s) ajoutée(s) au catalogue avec succès!`;
            this.closeModal('formationModal');
            this.selectedFormationIds = new Set();
            this.formationsPoolSearch = '';
            this.loadCatalogues();
            setTimeout(() => this.success = '', 5000);
          }
        },
        error: (err) => {
          completed++;
          this.saving = false;
          this.error = err.error?.message || 'Erreur lors de l\'ajout.';
        }
      });
    });
  }

  trackByFormationId(_index: number, formation: Formation): number {
    return formation.id;
  }

  trackByCatalogueId(_index: number, catalogue: Catalogue): number {
    return catalogue.id;
  }

  getTotalFormationsCount(): number {
    return this.catalogues.reduce((sum, c) => sum + (c.nombre_formations || 0), 0);
  }

  getCertifiantCount(): number {
    return this.catalogues.filter(c => c.metadata?.certificat_disponible).length;
  }

  getPubliedCount(): number {
    return this.catalogues.filter(c => c.est_publie).length;
  }
}