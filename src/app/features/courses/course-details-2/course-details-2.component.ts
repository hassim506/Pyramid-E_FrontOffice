import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Formation } from '../../../shared/models/formation.models';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';
import { DemandeFormationService } from '../../../shared/service/demande/demande-formation.service';

declare var bootstrap: any;

type TypeDemande = 'session' | 'catalogue' | 'parcours' | 'formation';

interface Toast {
  type: 'success' | 'error' | 'warning';
  message: string;
  visible: boolean;
}

@Component({
  standalone: true,
  selector: 'app-course-details-2',
  imports: [CommonModule, NgIf, NgFor, ReactiveFormsModule, FormsModule],
  templateUrl: './course-details-2.component.html',
  styleUrls: ['./course-details-2.component.scss']
})
export class CourseDetails2Component implements OnInit {

  formation: Formation | null = null;
  loading = true;
  error   = '';

  // ================================
  // TOAST NOTIFICATION
  // ================================
  toast: Toast = { type: 'success', message: '', visible: false };
  private toastTimer: any;

  // ================================
  // MODAL ÉTAT
  // ================================
  submitting = false;
  private modalInstance: any;

  // ================================
  // TYPE DE DEMANDE — 4 options
  // ================================
  typeDemande: TypeDemande | null = null;

  typesDemande: { value: TypeDemande; label: string; icon: string; description: string }[] = [
    { value: 'session',   label: 'Session',   icon: 'ti ti-calendar-event', description: 'Formation planifiée à une date précise' },
    { value: 'catalogue', label: 'Catalogue', icon: 'ti ti-books',           description: 'Ensemble de formations groupées' },
    { value: 'parcours',  label: 'Parcours',  icon: 'ti ti-route',           description: 'Parcours structuré par domaine métier' },
    { value: 'formation', label: 'Formation', icon: 'ti ti-school',          description: 'Demande d\'une formation spécifique' },
  ];

  // ================================
  // DONNÉES DYNAMIQUES
  // ================================
  sessions:   any[] = [];
  catalogues: any[] = [];
  categories: any[] = [];
  parcours:   any[] = [];
  formations: any[] = [];

  // ================================
  // SÉLECTIONS
  // ================================
  selectedSessionId:    number | null   = null;
  selectedCatalogueIds: number[]        = [];
  selectedParcoursIds:  number[]        = [];
  selectedFormationIds: number[]        = [];
  selectedCategorieId:  number | string = '';

  // ================================
  // LOADING STATES
  // ================================
  loadingSessions   = false;
  loadingCatalogues = false;
  loadingParcours   = false;
  loadingFormations = false;

  // ================================
  // FORMULAIRE COMMUN
  // ================================
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formationsService: FormationsService,
    private fb: FormBuilder,
    private demandeFormationService: DemandeFormationService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.loadFormationDetails(id);

    this.form = this.fb.group({
      motif_demande:        ['', Validators.required],
      objectifs_personnels: [''],
      priorite:             ['normale'],
      date_souhaitee_debut: [null],
      commentaire_employe:  ['']
    });

    this.loadCategories();
  }

  // ================================
  // TOAST
  // ================================
  showToast(type: 'success' | 'error' | 'warning', message: string): void {
    clearTimeout(this.toastTimer);
    this.toast = { type, message, visible: true };
    this.toastTimer = setTimeout(() => {
      this.toast.visible = false;
    }, 4000);
  }

  closeToast(): void {
    this.toast.visible = false;
    clearTimeout(this.toastTimer);
  }

  // ================================
  // CHARGEMENT FORMATION
  // ================================
  loadFormationDetails(id: number): void {
    this.loading = true;
    this.formationsService.getFormationById(id).subscribe({
      next: (res: any) => {
        this.formation = res?.data || res?.formation || res;
        this.loading   = false;
      },
      error: () => {
        this.error   = 'Formation introuvable';
        this.loading = false;
      }
    });
  }

  // ================================
  // CHANGEMENT TYPE
  // ================================
  onTypeChange(type: TypeDemande): void {
    this.typeDemande          = type;
    this.selectedSessionId    = null;
    this.selectedCatalogueIds = [];
    this.selectedParcoursIds  = [];
    this.selectedFormationIds = [];
    this.selectedCategorieId  = '';
    this.parcours             = [];
    this.formations           = [];

    if (type === 'session')   this.loadSessions();
    if (type === 'catalogue') this.loadCatalogues();
  }

  // ================================
  // CHARGEMENT DONNÉES
  // ================================
  loadSessions(): void {
    this.loadingSessions = true;
    this.formationsService.getSessionsOuvertes().subscribe({
      next: (res: any) => { this.sessions = res.sessions ?? []; this.loadingSessions = false; },
      error: () => this.loadingSessions = false
    });
  }

  loadCatalogues(): void {
    this.loadingCatalogues = true;
    this.formationsService.getCatalogues().subscribe({
      next: (res: any) => { this.catalogues = res.catalogues ?? []; this.loadingCatalogues = false; },
      error: () => this.loadingCatalogues = false
    });
  }

  loadCategories(): void {
    this.formationsService.getCategories().subscribe({
      next: (res: any) => this.categories = res.categories ?? []
    });
  }

  onCategorieChange(): void {
    this.selectedParcoursIds  = [];
    this.selectedFormationIds = [];
    this.parcours             = [];
    this.formations           = [];
    if (!this.selectedCategorieId) return;

    if (this.typeDemande === 'parcours') this.loadParcours(+this.selectedCategorieId);
    if (this.typeDemande === 'formation') this.loadFormations(+this.selectedCategorieId);
  }

  loadParcours(categorieId: number): void {
    this.loadingParcours = true;
    this.formationsService.getParcoursParCategorie(categorieId).subscribe({
      next: (res: any) => { this.parcours = res.parcours ?? []; this.loadingParcours = false; },
      error: () => this.loadingParcours = false
    });
  }

  loadFormations(categorieId: number): void {
    this.loadingFormations = true;
    this.formationsService.getFormationsByCategorie(categorieId).subscribe({
      next: (res: any) => { this.formations = res.formations ?? []; this.loadingFormations = false; },
      error: () => this.loadingFormations = false
    });
  }

  // ================================
  // TOGGLE SÉLECTIONS MULTIPLES
  // ================================
  toggleCatalogue(id: number): void {
    const idx = this.selectedCatalogueIds.indexOf(id);
    idx === -1 ? this.selectedCatalogueIds.push(id) : this.selectedCatalogueIds.splice(idx, 1);
  }

  isCatalogueSelected(id: number): boolean { return this.selectedCatalogueIds.includes(id); }

  toggleParcours(id: number): void {
    const idx = this.selectedParcoursIds.indexOf(id);
    idx === -1 ? this.selectedParcoursIds.push(id) : this.selectedParcoursIds.splice(idx, 1);
  }

  isParcoursSelected(id: number): boolean { return this.selectedParcoursIds.includes(id); }

  toggleFormation(id: number): void {
    const idx = this.selectedFormationIds.indexOf(id);
    idx === -1 ? this.selectedFormationIds.push(id) : this.selectedFormationIds.splice(idx, 1);
  }

  isFormationSelected(id: number): boolean { return this.selectedFormationIds.includes(id); }

  // ================================
  // VALIDATION BOUTON
  // ================================
  canSubmit(): boolean {
    if (!this.typeDemande || this.form.invalid) return false;

    switch (this.typeDemande) {
      case 'session':   return !!this.selectedSessionId;
      case 'catalogue': return this.selectedCatalogueIds.length > 0;
      case 'parcours':  return !!this.selectedCategorieId && this.selectedParcoursIds.length > 0;
      case 'formation': return !!this.selectedCategorieId; // ✅ catégorie suffit
      default:          return false;
    }
  }

  // ================================
  // SOUMISSION
  // ================================
  submitRequest(): void {
    if (!this.canSubmit()) return;

    this.submitting = true;

    const formValue = this.form.value;
    const date = formValue.date_souhaitee_debut
      ? new Date(formValue.date_souhaitee_debut).toISOString().split('T')[0]
      : undefined;

    const basePayload: any = {
      type_demande:         this.typeDemande,
      motif_demande:        formValue.motif_demande,
      objectifs_personnels: formValue.objectifs_personnels,
      priorite:             formValue.priorite,
      commentaire_employe:  formValue.commentaire_employe,
    };

    if (date) basePayload.date_souhaitee_debut = date;

    // Construction du payload selon le type
    switch (this.typeDemande) {
      case 'session':
        basePayload.session_formation_id = this.selectedSessionId;
        break;
      case 'catalogue':
        basePayload.catalogue_id = this.selectedCatalogueIds[0];
        break;
      case 'parcours':
        basePayload.parcours_id = this.selectedParcoursIds[0];
        break;
      case 'formation':
        if (this.selectedFormationIds.length > 0) {
          basePayload.formation_id = this.selectedFormationIds[0];
        }
        break;
    }

    // Sélections multiples → plusieurs demandes
    const ids = this.getSelectedIds();

    if (ids.length <= 1) {
      this.envoyerDemande(basePayload);
    } else {
      this.envoyerDemandesMultiples(basePayload, ids);
    }
  }

  private getSelectedIds(): number[] {
    switch (this.typeDemande) {
      case 'catalogue': return this.selectedCatalogueIds;
      case 'parcours':  return this.selectedParcoursIds;
      case 'formation': return this.selectedFormationIds.length > 0 ? this.selectedFormationIds : [0];
      default:          return this.selectedSessionId ? [this.selectedSessionId] : [];
    }
  }

  private getIdKey(): string {
    switch (this.typeDemande) {
      case 'catalogue': return 'catalogue_id';
      case 'parcours':  return 'parcours_id';
      case 'formation': return 'formation_id';
      default:          return 'session_formation_id';
    }
  }

  private envoyerDemande(payload: any): void {
    this.demandeFormationService.creerDemande(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.fermerModalEtNotifier('success', '✅ Votre demande a été envoyée avec succès !');
      },
      error: (err) => this.handleError(err)
    });
  }

  private envoyerDemandesMultiples(basePayload: any, ids: number[]): void {
    const key = this.getIdKey();
    let completed = 0;
    let hasError  = false;

    ids.forEach(id => {
      const payload = id !== 0 ? { ...basePayload, [key]: id } : { ...basePayload };
      this.demandeFormationService.creerDemande(payload).subscribe({
        next: () => {
          completed++;
          if (completed === ids.length && !hasError) {
            this.submitting = false;
            this.fermerModalEtNotifier(
              'success',
              `✅ ${ids.length} demande(s) envoyée(s) avec succès !`
            );
          }
        },
        error: (err) => {
          if (!hasError) {
            hasError = true;
            this.handleError(err);
          }
        }
      });
    });
  }

  // ================================
  // FERMER MODAL + TOAST SUCCÈS
  // ================================
  private fermerModalEtNotifier(type: 'success' | 'error' | 'warning', message: string): void {
    // 1. Fermer le modal
    this.modalInstance?.hide();
    this.reset();

    // 2. Afficher le toast APRÈS fermeture
    setTimeout(() => this.showToast(type, message), 300);
  }

  // ================================
  // GESTION ERREURS (modal reste ouvert)
  // ================================
  private handleError(err: any): void {
    this.submitting = false;

    if (err.status === 409) {
      // ⚠️ Modal reste ouvert, toast d'avertissement
      this.showToast('warning', '⚠️ Vous avez déjà une demande en cours pour cet élément.');
    } else if (err.status === 422) {
      this.showToast('error', '❌ Veuillez vérifier les champs obligatoires.');
    } else {
      this.showToast('error', '❌ Une erreur est survenue. Veuillez réessayer.');
    }
  }

  // ================================
  // MODAL
  // ================================
  openRequestModal(): void {
    const el = document.getElementById('demandeFormationModal');
    if (el) {
      this.modalInstance = new bootstrap.Modal(el, { backdrop: 'static', keyboard: false });
      this.modalInstance.show();
    }
  }

  closeModal(): void {
    this.modalInstance?.hide();
    this.reset();
  }

  private reset(): void {
    this.typeDemande          = null;
    this.selectedSessionId    = null;
    this.selectedCatalogueIds = [];
    this.selectedParcoursIds  = [];
    this.selectedFormationIds = [];
    this.selectedCategorieId  = '';
    this.parcours             = [];
    this.formations           = [];
    this.submitting           = false;
    this.form.reset({ priorite: 'normale' });
  }

  canSubscribe(): boolean {
    return !!this.formation?.inscription_ouverte;
  }
}