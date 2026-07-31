import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormArray } from '@angular/forms';
import { ParcoursService, Parcours, ParcoursRequest, Formation } from '../../../shared/service/parcours/parcours.service';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { UserService } from '../../../shared/service/user/user.service';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';
import { HasPermissionDirective } from '../../../directive/has-permission-directive.directive';

declare var bootstrap: any;

@Component({
  selector: 'app-adminrh-parcours',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HasPermissionDirective],
  templateUrl: './adminrh-parcours.component.html',
  styleUrls: ['./adminrh-parcours.component.scss']
})
export class AdminrhParcoursComponent implements OnInit {
  // État général
  loading = false;
  saving = false;
  error = '';
  success = '';

  // Données
  parcours: Parcours[] = [];
  selectedParcours: Parcours | null = null;
  formations: any[] = [];
  loadingFormations = false;

  // Multi-select formations pour le modal création/édition
  formationsSearchTerm = '';
  selectedFormationIds: Set<number> = new Set();

  // Pagination
  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  itemsPerPage = 15;

  // Formulaires
  parcoursForm: FormGroup;
  editMode = false;

  // Filtres et recherche
  searchTerm = '';
  selectedNiveau = '';
  selectedStatut = '';

  // Niveaux disponibles
  niveaux = [
    { value: 'debutant', label: 'Débutant' },
    { value: 'intermediaire', label: 'Intermédiaire' },
    { value: 'avance', label: 'Avancé' },
    { value: 'expert', label: 'Expert' }
  ];

  // ── Modal participants ─────────────────────────────────────────
  participantsModalOpen = false;
  selectedParcoursForParticipants: Parcours | null = null;
  participants: any[] = [];
  participantsLoading = false;
  participantsSearch = '';
  availableUsers: any[] = [];
  availableUsersFiltered: any[] = [];
  usersSearch = '';
  usersLoading = false;
  inscriptionPending = false;
  inscriptionSuccess = '';
  inscriptionError = '';

  constructor(
    private parcoursService: ParcoursService,
    private formationService: FormationService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.parcoursForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      niveau: ['debutant'],
      duree_estimee: [0],
      prix: ['0'],
      actif: [true],
      image_url: [''],
      objectifs: this.formBuilder.array([this.createObjectifControl()]),
      prerequis: this.formBuilder.array([this.createPrerequisControl()])
    });
  }
  Math = Math;
  ngOnInit(): void {
    this.loadParcours();
    this.loadFormations();
  }

  // ==================== FORM ARRAYS ====================

  createObjectifControl(): FormGroup {
    return this.formBuilder.group({
      value: ['']
    });
  }

  createPrerequisControl(): FormGroup {
    return this.formBuilder.group({
      value: ['']
    });
  }

  get objectifs(): FormArray {
    return this.parcoursForm.get('objectifs') as FormArray;
  }

  get prerequis(): FormArray {
    return this.parcoursForm.get('prerequis') as FormArray;
  }

  // Ajout de getters pour les lengths
  get objectifsLength(): number {
    return this.objectifs.length;
  }

  get prerequisLength(): number {
    return this.prerequis.length;
  }

  addObjectif(): void {
    this.objectifs.push(this.createObjectifControl());
  }

  removeObjectif(index: number): void {
    if (this.objectifs.length > 1) {
      this.objectifs.removeAt(index);
    }
  }

  addPrerequis(): void {
    this.prerequis.push(this.createPrerequisControl());
  }

  removePrerequis(index: number): void {
    if (this.prerequis.length > 1) {
      this.prerequis.removeAt(index);
    }
  }

  // ==================== CHARGEMENT DES DONNÉES ====================

  loadParcours(): void {
    this.loading = true;
    this.error = '';

    this.parcoursService.getRhParcours().subscribe({
      next: (response) => {
        this.loading = false;
        this.parcours = response.parcours || [];
        this.totalItems = this.parcours.length;
        this.totalPages = 1;
        console.log(`${this.parcours.length} parcours chargés`);
      },
      error: (err) => {
        this.loading = false;
        console.error('Erreur chargement parcours:', err);
        this.error = httpErrorMessage(err, 'Impossible de charger les parcours.');
        this.parcours = [];
      }
    });
  }

  loadFormations(): void {
    this.loadingFormations = true;
    
    this.formationService.getFormationsrh().subscribe({
      next: (response) => {
        this.loadingFormations = false;
        if (response?.status) {
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

  // ==================== GESTION DU FORMULAIRE ====================

  openParcoursModal(): void {
    this.editMode = false;
    this.selectedParcours = null;
    this.selectedFormationIds = new Set();
    this.formationsSearchTerm = '';
    this.resetForm();
    const modal = new bootstrap.Modal(document.getElementById('parcoursModal'));
    modal.show();
  }

  editParcours(parcours: Parcours): void {
    this.editMode = true;
    this.selectedParcours = parcours;
    this.selectedFormationIds = new Set(parcours.formations.map(f => f.id));
    this.formationsSearchTerm = '';
    
    // Réinitialiser les FormArrays
    this.clearFormArray(this.objectifs);
    this.clearFormArray(this.prerequis);
    
    // Remplir les objectifs
    parcours.objectifs.forEach(objectif => {
      this.objectifs.push(this.formBuilder.group({
        value: [objectif]
      }));
    });

    // Remplir les prérequis
    parcours.prerequis.forEach(prerequis => {
      this.prerequis.push(this.formBuilder.group({
        value: [prerequis]
      }));
    });
    
    // Remplir les autres champs
    this.parcoursForm.patchValue({
      nom: parcours.nom,
      description: parcours.description,
      niveau: parcours.niveau,
      duree_estimee: parcours.duree_estimee,
      prix: parcours.prix,
      actif: parcours.actif,
      image_url: parcours.image_url || ''
    });

    const modal = new bootstrap.Modal(document.getElementById('parcoursModal'));
    modal.show();
  }
onSubmit(): void {
  if (this.parcoursForm.invalid) {
    this.markFormGroupTouched();
    return;
  }

  // Empêcher les soumissions multiples
  if (this.saving) return;

  this.saving = true;
  this.error = '';

  const formData = this.buildParcoursData();
  
  // Debug: voir les données envoyées
  console.log('Données envoyées:', formData);

  const operation = this.editMode && this.selectedParcours
    ? this.parcoursService.updateParcours(this.selectedParcours.id, formData)
    : this.parcoursService.createParcours(formData);

  operation.subscribe({
    next: (response) => {
      this.saving = false; // Important: remettre à false
      if (response.status !== false) {
        this.success = this.editMode 
          ? 'Parcours modifié avec succès!' 
          : 'Parcours créé avec succès!';
        this.closeModal('parcoursModal');
        this.loadParcours();
        setTimeout(() => this.success = '', 5000);
      } else {
        this.error = response.message || 'Erreur lors de la sauvegarde.';
      }
    },
    error: (err) => {
      this.saving = false; // Important: débloquer le popup
      console.error('Erreur complète:', err);
      console.error('Détails validation:', err.error);
      console.error('Données envoyées:', formData);
      
      // Affichage des erreurs de validation spécifiques
      if (err.error && err.error.errors) {
        const validationErrors = err.error.errors;
        console.error('Erreurs de validation:', validationErrors);
        
        // Construire un message d'erreur lisible
        const errorMessages = Object.entries(validationErrors)
          .map(([field, messages]: [string, any]) => `${field}: ${Array.isArray(messages) ? messages.join(', ') : messages}`)
          .join('\n');
        
        this.error = `Erreurs de validation:\n${errorMessages}`;
      } else {
        this.error = err.error?.message || 'Erreur lors de la sauvegarde.';
      }
    }
  });
}
buildParcoursData(): ParcoursRequest {
  const formValue = this.parcoursForm.value;
  const entrepriseId = this.parcoursService.getCurrentUserEntrepriseId();
  console.log('Entreprise ID utilisé pour création:', entrepriseId);

  const duree = parseInt(formValue.duree_estimee) || 0;
  const description = formValue.description?.trim() || '';

  return {
    nom: formValue.nom.trim(),
    description: description || undefined,
    niveau: formValue.niveau || 'debutant',
    duree_estimee: duree > 0 ? duree : undefined,
    prix: parseFloat(formValue.prix) > 0 ? parseFloat(formValue.prix).toFixed(2) : undefined,
    actif: Boolean(formValue.actif),
    objectifs: formValue.objectifs.map((obj: any) => obj.value?.trim()).filter((v: string) => v),
    prerequis: formValue.prerequis.map((pre: any) => pre.value?.trim()).filter((v: string) => v),
    statut: Boolean(formValue.actif),
    entreprise_id: entrepriseId,
    image_url: formValue.image_url?.trim() || undefined,
    formation_ids: Array.from(this.selectedFormationIds),
  };
}
  // ==================== ACTIONS ====================

  viewParcours(parcours: Parcours): void {
    this.selectedParcours = parcours;
    const modal = new bootstrap.Modal(document.getElementById('viewModal'));
    modal.show();
  }

  confirmDelete(parcours: Parcours): void {
    this.selectedParcours = parcours;
    const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
    modal.show();
  }

  deleteParcours(): void {
    if (!this.selectedParcours) return;

    this.parcoursService.deleteParcours(this.selectedParcours.id).subscribe({
      next: (response) => {
        if (response.status !== false) {
          this.success = 'Parcours supprimé avec succès!';
          this.closeModal('deleteModal');
          this.loadParcours();
          setTimeout(() => this.success = '', 5000);
        } else {
          this.error = response.message || 'Erreur lors de la suppression.';
        }
      },
      error: (err) => {
        console.error('Erreur suppression:', err);
        this.error = err.error?.message || 'Erreur lors de la suppression.';
      }
    });
  }

  archiveParcours(parcours: Parcours | null): void {
    if (!parcours) return;
    if (!confirm(`Archiver le parcours "${parcours.nom}" ?`)) return;
    this.parcoursService.deleteParcours(parcours.id).subscribe({
      next: () => { this.success = 'Parcours archivé.'; this.loadParcours(); setTimeout(() => this.success = '', 4000); },
      error: (err) => { this.error = err.error?.message || 'Erreur lors de l\'archivage.'; }
    });
  }

  // ==================== PAGINATION ====================

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.loadParcours();
    }
  }

  get pages(): number[] {
    const pages = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, this.currentPage + 2);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  getParcoursActifs(): number {
    return this.parcours.filter(p => p.actif).length;
  }

  getParcoursInactifs(): number {
    return this.parcours.filter(p => !p.actif).length;
  }

  // Méthode pour calculer l'affichage de pagination
  getPaginationStart(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  getPaginationEnd(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
  // ==================== UTILITAIRES ====================

  resetForm(): void {
    this.clearFormArray(this.objectifs);
    this.clearFormArray(this.prerequis);
    
    this.objectifs.push(this.createObjectifControl());
    this.prerequis.push(this.createPrerequisControl());
    
    this.parcoursForm.reset({
      nom: '',
      description: '',
      niveau: 'debutant',
      duree_estimee: 0,
      prix: '0',
      actif: true,
      image_url: ''
    });
  }

  clearFormArray(formArray: FormArray): void {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }

  markFormGroupTouched(): void {
    Object.keys(this.parcoursForm.controls).forEach(key => {
      const control = this.parcoursForm.get(key);
      control?.markAsTouched();
      
      if (control instanceof FormArray) {
        control.controls.forEach(innerControl => {
          Object.keys((innerControl as FormGroup).controls).forEach(innerKey => {
            (innerControl as FormGroup).get(innerKey)?.markAsTouched();
          });
        });
      }
    });
  }

  // ==================== MULTI-SELECT FORMATIONS ====================

  get filteredFormationsPool(): any[] {
    const term = this.formationsSearchTerm.toLowerCase();
    return term
      ? this.formations.filter(f => f.titre?.toLowerCase().includes(term) || f.categorie?.nom?.toLowerCase().includes(term))
      : this.formations;
  }

  isFormationSelected(id: number): boolean {
    return this.selectedFormationIds.has(id);
  }

  toggleFormation(id: number): void {
    if (this.selectedFormationIds.has(id)) {
      this.selectedFormationIds.delete(id);
    } else {
      this.selectedFormationIds.add(id);
    }
  }

  removeSelectedFormation(id: number): void {
    this.selectedFormationIds.delete(id);
  }

  get selectedFormations(): any[] {
    return this.formations.filter(f => this.selectedFormationIds.has(f.id));
  }

  get selectedFormationCount(): number {
    return this.selectedFormationIds.size;
  }

  closeModal(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }

  // ==================== FILTRES ====================

  get filteredParcours(): Parcours[] {
    return this.parcours.filter(parcours => {
      const matchesSearch = !this.searchTerm || 
        parcours.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        parcours.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesNiveau = !this.selectedNiveau || parcours.niveau === this.selectedNiveau;
      
      const matchesStatut = !this.selectedStatut || 
        (this.selectedStatut === 'actif' && parcours.actif) ||
        (this.selectedStatut === 'inactif' && !parcours.actif);

      return matchesSearch && matchesNiveau && matchesStatut;
    });
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedNiveau = '';
    this.selectedStatut = '';
  }

  // ==================== HELPERS ====================

  getNiveauLabel(niveau: string): string {
    const niveauObj = this.niveaux.find(n => n.value === niveau);
    return niveauObj ? niveauObj.label : niveau;
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

  getTotalDuration(formations: Formation[]): number {
    return formations.reduce((total, formation) => total + formation.duree_totale, 0);
  }

  getTotalPrice(formations: Formation[]): number {
    return formations.reduce((total, formation) => total + parseFloat(formation.prix || '0'), 0);
  }

  getFormationsObligatoires(formations: Formation[]): Formation[] {
    return formations.filter(f => f.pivot?.obligatoire);
  }

  // Fonctions de tracking pour optimiser le rendu
  trackByParcoursId(_index: number, parcours: Parcours): number {
    return parcours.id;
  }

  trackByFormationId(_index: number, formation: Formation): number {
    return formation.id;
  }

  trackByUserId(_i: number, u: any): number { return u.id; }

  // ==================== PARTICIPANTS MODAL ====================

  openParticipants(p: Parcours): void {
    this.selectedParcoursForParticipants = p;
    this.participants = [];
    this.availableUsers = [];
    this.availableUsersFiltered = [];
    this.participantsSearch = '';
    this.usersSearch = '';
    this.inscriptionSuccess = '';
    this.inscriptionError = '';
    this.participantsModalOpen = true;
    this.loadParticipants(p.id);
  }

  closeParticipants(): void {
    this.participantsModalOpen = false;
    this.selectedParcoursForParticipants = null;
  }

  private loadParticipants(parcoursId: number): void {
    this.participantsLoading = true;
    this.parcoursService.getParticipantsParcours(parcoursId).subscribe({
      next: (res: any) => {
        this.participants = res.participants || [];
        this.participantsLoading = false;
        this.loadAvailableUsers();
      },
      error: () => { this.participantsLoading = false; }
    });
  }

  private loadAvailableUsers(): void {
    this.usersLoading = true;
    this.userService.getMyUsers().subscribe({
      next: (res: any) => {
        const enrolled = new Set(this.participants.map((p: any) => p.id));
        const all: any[] = res.users || res.data || [];
        this.availableUsers = all.filter((u: any) => !enrolled.has(u.id));
        this.applyUsersFilter();
        this.usersLoading = false;
      },
      error: () => { this.usersLoading = false; }
    });
  }

  applyUsersFilter(): void {
    const q = this.usersSearch.toLowerCase();
    this.availableUsersFiltered = this.availableUsers.filter((u: any) =>
      !q || u.name?.toLowerCase().includes(q) || u.nom?.toLowerCase().includes(q)
        || u.prenom?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q)
    );
  }

  get participantsFiltered(): any[] {
    const q = this.participantsSearch.toLowerCase();
    return this.participants.filter((p: any) =>
      !q || p.name?.toLowerCase().includes(q) || p.nom?.toLowerCase().includes(q)
        || p.prenom?.toLowerCase().includes(q) || p.email?.toLowerCase().includes(q)
    );
  }

  inscrireUser(user: any): void {
    if (!this.selectedParcoursForParticipants || this.inscriptionPending) return;
    this.inscriptionPending = true;
    this.inscriptionSuccess = '';
    this.inscriptionError = '';

    this.parcoursService.inscrireUtilisateur(this.selectedParcoursForParticipants.id, { user_id: user.id }).subscribe({
      next: () => {
        this.inscriptionPending = false;
        const displayName = (user.prenom && user.nom) ? `${user.prenom} ${user.nom}` : (user.name || user.email);
        this.inscriptionSuccess = `${displayName} a été inscrit(e) avec succès.`;
        this.participants.push(user);
        this.availableUsers = this.availableUsers.filter((u: any) => u.id !== user.id);
        this.applyUsersFilter();
      },
      error: (err: any) => {
        this.inscriptionPending = false;
        this.inscriptionError = err?.error?.message || 'Erreur lors de l\'inscription.';
      }
    });
  }

  desinscrireUser(user: any): void {
    if (!this.selectedParcoursForParticipants || this.inscriptionPending) return;
    this.inscriptionPending = true;
    this.inscriptionSuccess = '';
    this.inscriptionError = '';

    this.parcoursService.desinscrireUtilisateur(this.selectedParcoursForParticipants.id, user.id).subscribe({
      next: () => {
        this.inscriptionPending = false;
        const displayName = (user.prenom && user.nom) ? `${user.prenom} ${user.nom}` : (user.name || user.email);
        this.inscriptionSuccess = `${displayName} a été désinscrit(e).`;
        this.participants = this.participants.filter((p: any) => p.id !== user.id);
        this.availableUsers.push(user);
        this.applyUsersFilter();
      },
      error: (err: any) => {
        this.inscriptionPending = false;
        this.inscriptionError = err?.error?.message || 'Erreur lors de la désinscription.';
      }
    });
  }
}