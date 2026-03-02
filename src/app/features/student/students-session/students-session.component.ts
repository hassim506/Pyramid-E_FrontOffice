import { Component, OnInit }                                          from '@angular/core';
import { CommonModule }                                               from '@angular/common';
import { RouterModule }                                               from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeFormationService }   from '../../../shared/service/demande/demande-formation.service';
import { FormationsService }         from '../../../shared/service/Formationsss/formations.service';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';

declare var bootstrap: any;

type TypeDemande = 'session' | 'catalogue' | 'parcours' | 'formation';

interface Toast {
  type: 'success' | 'error' | 'warning';
  message: string;
  visible: boolean;
}

@Component({
  standalone: true,
  selector: 'app-students-sessions',
  templateUrl: './students-session.component.html',
  styleUrl: './students-session.component.scss',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, CustomPaginationComponent]
})
export class StudentsSessionsComponent implements OnInit {

  // ================================
  // LISTE DEMANDES (filtrée sessions)
  // ================================
  loading      = true;
  allDemandes: any[] = [];
  demandes:    any[] = [];

  // ================================
  // FILTRES
  // ================================
  searchDataValue = '';
  selectedStatus  = '';

  // ================================
  // PAGINATION
  // ================================
  totalData   = 0;
  pageSize    = 10;
  currentPage = 1;
  skip        = 0;
  limit       = 10;

  // ================================
  // UI STATE
  // ================================
  hoveredMotifId:  number | null = null;
  showRefusePerson = false;

  // ================================
  // TOAST
  // ================================
  toast: Toast = { type: 'success', message: '', visible: false };
  private toastTimer: any;

  // ================================
  // MODAL DEMANDE
  // ================================
  submitting           = false;
  private modalInstance: any;

  // Type de demande (modal complet avec les 4 types)
  typeDemande: TypeDemande | null = null;

  typesDemande: { value: TypeDemande; label: string; icon: string; description: string }[] = [
    { value: 'session',   label: 'Session',   icon: 'isax isax-calendar-1', description: 'Formation planifiée à une date précise' }
   /* { value: 'catalogue', label: 'Catalogue', icon: 'isax isax-book-1',     description: 'Ensemble de formations groupées'         },
    { value: 'parcours',  label: 'Parcours',  icon: 'isax isax-routing',    description: 'Parcours structuré par domaine métier'   },
    { value: 'formation', label: 'Formation', icon: 'isax isax-teacher',    description: 'Demande d\'une formation spécifique'      },
  */];

  // Données dynamiques modal
  sessions:   any[] = [];
  catalogues: any[] = [];
  categories: any[] = [];
  parcours:   any[] = [];
  formations: any[] = [];

  // Sélections modal
  selectedSessionId:    number | null   = null;
  selectedCatalogueIds: number[]        = [];
  selectedParcoursIds:  number[]        = [];
  selectedFormationIds: number[]        = [];
  selectedCategorieId:  number | string = '';

  // Loading states modal
  loadingSessions   = false;
  loadingCatalogues = false;
  loadingParcours   = false;
  loadingFormations = false;

  // Formulaire complémentaire
  form!: FormGroup;

  constructor(
    private demandeFormationService: DemandeFormationService,
    private formationsService: FormationsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadDemandes();
    this.loadCategories();

    this.form = this.fb.group({
      motif_demande:        ['', Validators.required],
      objectifs_personnels: [''],
      priorite:             ['normale'],
      date_souhaitee_debut: [null],
      commentaire_employe:  ['']
    });
  }

  // ================================
  // STATS GETTERS
  // ================================
  get totalEnAttente(): number { return this.allDemandes.filter(d => d.statut === 'en_attente').length; }
  get totalValidees():  number { return this.allDemandes.filter(d => d.statut === 'validee').length;    }
  get totalRefusees():  number { return this.allDemandes.filter(d => d.statut === 'refusee').length;    }

  // ================================
  // CHARGEMENT LISTE — filtré sur 'session'
  // ================================
  loadDemandes(): void {
    this.loading = true;
    this.demandeFormationService.getMesDemandes().subscribe({
      next: (res: any) => {
        const raw = res.demandes ?? res;
        // ⚡ Filtre : uniquement les demandes de type 'session'
        this.allDemandes = raw
          .filter((d: any) => d.type_demande === 'session')
          .map((d: any) => this.normaliserDemande(d));
        this.totalData = this.allDemandes.length;
        this.getTableData(this.skip, this.limit);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private normaliserDemande(d: any): any {
    return {
      ...d,
      titre_affiche:      this.getTitreAffiche(d),
      sous_titre_affiche: this.getSousTitreAffiche(d),
      image_affiche:      this.getImageAffiche(d),
      icone_type:         this.getIconeType(d.type_demande),
      label_type:         this.getLabelType(d.type_demande),
      formation: d.formation ? {
        ...d.formation,
        categorie:  d.formation.categorie  ?? null,
        niveau:     d.formation.niveau     ?? '—',
        langue:     d.formation.langue     ?? 'FR',
        difficulte: d.formation.difficulte ?? '—',
      } : null,
    };
  }

  private getTitreAffiche(d: any): string {
    switch (d.type_demande) {
      case 'catalogue': return d.catalogue?.titre         ?? `Catalogue #${d.catalogue_id}`;
      case 'parcours':  return d.parcours?.titre          ?? `Parcours #${d.parcours_id}`;
      case 'session':   return d.session_formation?.titre ?? `Session #${d.session_formation_id}`;
      default:          return d.formation?.titre         ?? `Formation #${d.formation_id}`;
    }
  }

  private getSousTitreAffiche(d: any): string {
    switch (d.type_demande) {
      case 'catalogue': {
        const nb = d.catalogue?.nombre_formations ?? '?';
        return `${nb} formation(s)${d.catalogue?.type_display ? ' · ' + d.catalogue.type_display : ''}`;
      }
      case 'parcours':  return d.parcours?.description ?? '';
      case 'session': {
        const date = d.session_formation?.date_debut;
        return date ? `Début : ${new Date(date).toLocaleDateString('fr-FR')}` : '';
      }
      default: return d.formation?.formateur_nom ?? d.formation?.categorie?.nom ?? '';
    }
  }

  private getImageAffiche(d: any): string {
    const fallback = 'assets/img/course/course-01.jpg';
    switch (d.type_demande) {
      case 'catalogue': return d.catalogue?.image_couverture         || fallback;
      case 'parcours':  return d.parcours?.image_couverture          || fallback;
      case 'session':   return d.session_formation?.image_couverture || fallback;
      default:          return d.formation?.image_couverture         || fallback;
    }
  }

  private getIconeType(type: string): string {
    return ({ catalogue: 'isax isax-book-1', parcours: 'isax isax-routing', session: 'isax isax-calendar-1', formation: 'isax isax-teacher' } as any)[type] ?? 'isax isax-book';
  }

  private getLabelType(type: string): string {
    return ({ catalogue: 'Catalogue', parcours: 'Parcours', session: 'Session', formation: 'Formation' } as any)[type] ?? 'Formation';
  }

  // ================================
  // FILTRES + PAGINATION
  // ================================
  getTableData(skip: number, limit: number): void {
    let filtered = [...this.allDemandes];
    if (this.selectedStatus) filtered = filtered.filter(d => d.statut === this.selectedStatus);
    if (this.searchDataValue) {
      const s = this.searchDataValue.toLowerCase();
      filtered = filtered.filter(d =>
        d.titre_affiche?.toLowerCase().includes(s) ||
        d.sous_titre_affiche?.toLowerCase().includes(s) ||
        d.session_formation?.titre?.toLowerCase().includes(s)
      );
    }
    this.totalData = filtered.length;
    this.demandes  = filtered.slice(skip, skip + limit);
  }

  searchData(value: string): void      { this.searchDataValue = value; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  filterByStatus(status: string): void { this.selectedStatus = status; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  resetFilters(): void                 { this.searchDataValue = ''; this.selectedStatus = ''; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  onPageChange(page: number): void     { this.currentPage = page; this.skip = (page - 1) * this.pageSize; this.getTableData(this.skip, this.pageSize); }

  // ================================
  // TOOLTIP MOTIF REFUS
  // ================================
  showMotif(id: number): void         { this.hoveredMotifId = id; }
  hideMotif(): void                   { this.hoveredMotifId = null; }
  isMotifVisible(id: number): boolean { return this.hoveredMotifId === id; }
  toggleShowRefusePerson(): void      { this.showRefusePerson = !this.showRefusePerson; }

  // ================================
  // ACTIONS TABLEAU
  // ================================
  annulerDemande(id: number): void {
    if (!confirm('Confirmer l\'annulation de cette demande ?')) return;
    this.demandeFormationService.annulerDemande(id).subscribe({ next: () => this.loadDemandes() });
  }

  relancerDemande(id: number): void {
    this.demandeFormationService.relancerDemande(id).subscribe({
      next: () => this.loadDemandes(),
      error: () => this.showToast('error', '❌ Impossible de relancer cette demande.')
    });
  }

  // ================================
  // TOAST
  // ================================
  showToast(type: 'success' | 'error' | 'warning', message: string): void {
    clearTimeout(this.toastTimer);
    this.toast = { type, message, visible: true };
    this.toastTimer = setTimeout(() => this.toast.visible = false, 4000);
  }

  closeToast(): void { this.toast.visible = false; clearTimeout(this.toastTimer); }

  // ================================
  // MODAL — OUVERTURE / FERMETURE
  // ================================
  openRequestModal(): void {
    const el = document.getElementById('demandeSessionModal');
    if (el) {
      this.modalInstance = new bootstrap.Modal(el, { backdrop: 'static', keyboard: false });
      this.modalInstance.show();
    }
  }

  closeModal(): void {
    this.modalInstance?.hide();
    this.resetModal();
  }

  resetType(): void {
    this.typeDemande          = null;
    this.selectedSessionId    = null;
    this.selectedCatalogueIds = [];
    this.selectedParcoursIds  = [];
    this.selectedFormationIds = [];
    this.selectedCategorieId  = '';
    this.parcours             = [];
    this.formations           = [];
  }

  getTypeIcon(type: TypeDemande): string  { return this.typesDemande.find(t => t.value === type)?.icon  ?? 'isax isax-book'; }
  getTypeLabel(type: TypeDemande): string { return this.typesDemande.find(t => t.value === type)?.label ?? type; }

  private resetModal(): void {
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

  // ================================
  // MODAL — TYPE CHANGE
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
  // MODAL — CHARGEMENT DONNÉES
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
    if (this.typeDemande === 'parcours')  this.loadParcours(+this.selectedCategorieId);
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
  // MODAL — TOGGLES SÉLECTION
  // ================================
  toggleCatalogue(id: number): void        { const i = this.selectedCatalogueIds.indexOf(id); i === -1 ? this.selectedCatalogueIds.push(id) : this.selectedCatalogueIds.splice(i, 1); }
  isCatalogueSelected(id: number): boolean { return this.selectedCatalogueIds.includes(id); }

  toggleParcours(id: number): void         { const i = this.selectedParcoursIds.indexOf(id);  i === -1 ? this.selectedParcoursIds.push(id)  : this.selectedParcoursIds.splice(i, 1);  }
  isParcoursSelected(id: number): boolean  { return this.selectedParcoursIds.includes(id);  }

  toggleFormation(id: number): void        { const i = this.selectedFormationIds.indexOf(id); i === -1 ? this.selectedFormationIds.push(id) : this.selectedFormationIds.splice(i, 1); }
  isFormationSelected(id: number): boolean { return this.selectedFormationIds.includes(id); }

  // ================================
  // MODAL — VALIDATION + SOUMISSION
  // ================================
  canSubmit(): boolean {
    if (!this.typeDemande || this.form.invalid) return false;
    switch (this.typeDemande) {
      case 'session':   return !!this.selectedSessionId;
      case 'catalogue': return this.selectedCatalogueIds.length > 0;
      case 'parcours':  return !!this.selectedCategorieId && this.selectedParcoursIds.length > 0;
      case 'formation': return !!this.selectedCategorieId;
      default:          return false;
    }
  }

  submitRequest(): void {
    if (!this.canSubmit()) return;
    this.submitting = true;

    const fv   = this.form.value;
    const date = fv.date_souhaitee_debut
      ? new Date(fv.date_souhaitee_debut).toISOString().split('T')[0]
      : undefined;

    const base: any = {
      type_demande:         this.typeDemande,
      motif_demande:        fv.motif_demande,
      objectifs_personnels: fv.objectifs_personnels,
      priorite:             fv.priorite,
      commentaire_employe:  fv.commentaire_employe,
    };
    if (date) base.date_souhaitee_debut = date;

    switch (this.typeDemande) {
      case 'session':   base.session_formation_id = this.selectedSessionId; break;
      case 'catalogue': base.catalogue_id         = this.selectedCatalogueIds[0]; break;
      case 'parcours':  base.parcours_id          = this.selectedParcoursIds[0]; break;
      case 'formation':
        if (this.selectedFormationIds.length > 0) base.formation_id = this.selectedFormationIds[0];
        break;
    }

    const ids = this.getSelectedIds();
    ids.length <= 1 ? this.envoyerDemande(base) : this.envoyerDemandesMultiples(base, ids);
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
        this.closeModal();
        setTimeout(() => {
          this.showToast('success', '✅ Votre demande a été envoyée avec succès !');
          this.loadDemandes();
        }, 300);
      },
      error: (err) => this.handleError(err)
    });
  }

  private envoyerDemandesMultiples(base: any, ids: number[]): void {
    const key = this.getIdKey();
    let completed = 0;
    let hasError  = false;

    ids.forEach(id => {
      const payload = id !== 0 ? { ...base, [key]: id } : { ...base };
      this.demandeFormationService.creerDemande(payload).subscribe({
        next: () => {
          completed++;
          if (completed === ids.length && !hasError) {
            this.submitting = false;
            this.closeModal();
            setTimeout(() => {
              this.showToast('success', `✅ ${ids.length} demande(s) envoyée(s) avec succès !`);
              this.loadDemandes();
            }, 300);
          }
        },
        error: (err) => { if (!hasError) { hasError = true; this.handleError(err); } }
      });
    });
  }

  private handleError(err: any): void {
    this.submitting = false;
    if (err.status === 409)      this.showToast('warning', '⚠️ Vous avez déjà une demande en cours pour cet élément.');
    else if (err.status === 422) this.showToast('error', '❌ Veuillez vérifier les champs obligatoires.');
    else                         this.showToast('error', '❌ Une erreur est survenue. Veuillez réessayer.');
  }

  // ================================
  // HELPERS CSS
  // ================================
  getPrioriteClass(priorite: string): string {
    return ({ urgente: 'priorite-urgente', haute: 'priorite-haute', normale: 'priorite-normale', basse: 'priorite-basse' } as any)[priorite] ?? 'priorite-normale';
  }

  getStatutClass(statut: string): string {
    return ({ en_attente: 'statut-attente', validee: 'statut-validee', refusee: 'statut-refusee', annulee: 'statut-annulee' } as any)[statut] ?? '';
  }

  getTypeBadgeClass(type: string): string {
    return ({ catalogue: 'type-catalogue', parcours: 'type-parcours', session: 'type-session', formation: 'type-formation' } as any)[type] ?? 'type-formation';
  }
}