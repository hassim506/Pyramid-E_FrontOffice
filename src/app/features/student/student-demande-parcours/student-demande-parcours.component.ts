import { Component, OnInit }        from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeFormationService }  from '../../../shared/service/demande/demande-formation.service';
import { FormationService }         from '../../../shared/service/formation/formation.service';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { environment }              from '../../../../environments/environment';

declare var bootstrap: any;

interface Toast {
  type: 'success' | 'error' | 'warning';
  message: string;
  visible: boolean;
}

@Component({
  standalone: true,
  selector: 'app-student-demande-parcours',
  templateUrl: './student-demande-parcours.component.html',
  styleUrl: './student-demande-parcours.component.scss',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, CustomPaginationComponent]
})
export class StudentDemandeParcoursComponent implements OnInit {

  // ── VUE ─────────────────────────────────────────
  viewMode: 'table' | 'grid' = 'table';

  // ── LISTE DEMANDES ───────────────────────────────
  loading          = true;
  allDemandes:     any[] = [];
  demandes:        any[] = [];
  searchDataValue  = '';
  selectedStatus   = '';
  totalData        = 0;
  pageSize         = 10;
  currentPage      = 1;
  skip             = 0;
  limit            = 10;
  hoveredMotifId:  number | null = null;
  showRefusePerson = false;

  // ── TOAST ────────────────────────────────────────
  toast: Toast = { type: 'success', message: '', visible: false };
  private toastTimer: any;

  // ── MODAL DÉTAIL DEMANDE ─────────────────────────
  demandeSelectionnee:    any = null;
  private detailDemandeModal: any;

  // ── DÉTAIL — FORMATIONS DU PARCOURS ─────────────
  formationsDetail:       any[] = [];
  loadingFormationsDetail = false;

  // ── ACCORDÉON FORMATIONS (modal détail) ──────────
  openFormations = new Set<string>();

  // ── MODAL NOUVELLE DEMANDE ───────────────────────
  submitting            = false;
  private modalInstance: any;
  showFormations        = false;

  parcours:         any[] = [];
  loadingParcours   = false;
  selectedParcours: any   = null;

  categories:        any[] = [];
  loadingCategories  = false;
  selectedCategorie: any   = null;

  formations:       any[] = [];
  loadingFormations = false;

  form!: FormGroup;

  constructor(
    private demandeFormationService: DemandeFormationService,
    private formationsService:       FormationService,
    private fb:                      FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadDemandes();
    this.form = this.fb.group({
      motif_demande:        ['', Validators.required],
      objectifs_personnels: [''],
      priorite:             ['normale'],
      date_souhaitee_debut: [null],
      commentaire_employe:  ['']
    });
  }

  // ── TOGGLE VUE ───────────────────────────────────
  setView(mode: 'table' | 'grid'): void { this.viewMode = mode; }

  // ── KPI GETTERS ──────────────────────────────────
  get totalDemandes():  number { return this.allDemandes.length; }
  get totalEnAttente(): number { return this.allDemandes.filter(d => d.statut === 'en_attente').length; }
  get totalValidees():  number { return this.allDemandes.filter(d => d.statut === 'validee').length; }
  get totalRefusees():  number { return this.allDemandes.filter(d => d.statut === 'refusee').length; }
  get totalAnnulees():  number { return this.allDemandes.filter(d => d.statut === 'annulee').length; }

  // ── CHARGEMENT DEMANDES ──────────────────────────
  loadDemandes(): void {
    this.loading = true;
    this.demandeFormationService.getMesDemandes().subscribe({
      next: (res: any) => {
        const raw = res.demandes ?? res;
        this.allDemandes = raw
          .filter((d: any) => d.type_demande === 'parcours')
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
      titre_affiche:      d.parcours?.titre       ?? `Parcours #${d.parcours_id}`,
      sous_titre_affiche: d.parcours?.description ?? '',
      image_affiche:      d.parcours?.image_couverture
        ? (d.parcours.image_couverture.startsWith('http')
            ? d.parcours.image_couverture
            : `${environment.apiUrl.replace('/api', '')}/storage/${d.parcours.image_couverture}`)
        : 'assets/img/course/course-01.jpg',
    };
  }

  // ── FILTRES + PAGINATION ─────────────────────────
  getTableData(skip: number, limit: number): void {
    let filtered = [...this.allDemandes];
    if (this.selectedStatus)  filtered = filtered.filter(d => d.statut === this.selectedStatus);
    if (this.searchDataValue) {
      const s = this.searchDataValue.toLowerCase();
      filtered = filtered.filter(d =>
        d.titre_affiche?.toLowerCase().includes(s) ||
        d.sous_titre_affiche?.toLowerCase().includes(s)
      );
    }
    this.totalData = filtered.length;
    this.demandes  = filtered.slice(skip, skip + limit);
  }

  searchData(v: string): void      { this.searchDataValue = v; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  filterByStatus(s: string): void  { this.selectedStatus  = s; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  resetFilters(): void             { this.searchDataValue = ''; this.selectedStatus = ''; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  onPageChange(page: number): void { this.currentPage = page; this.skip = (page - 1) * this.pageSize; this.getTableData(this.skip, this.pageSize); }

  // ── TOOLTIP MOTIF ────────────────────────────────
  showMotif(id: number): void         { this.hoveredMotifId = id; }
  hideMotif(): void                   { this.hoveredMotifId = null; }
  isMotifVisible(id: number): boolean { return this.hoveredMotifId === id; }

  // ── ACTIONS ──────────────────────────────────────
  annulerDemande(id: number, event?: Event): void {
    event?.stopPropagation();
    if (!confirm("Confirmer l'annulation de cette demande ?")) return;
    this.demandeFormationService.annulerDemande(id).subscribe({
      next: () => {
        this.fermerDetailDemande();
        this.showToast('success', '✅ Demande annulée avec succès.');
        this.loadDemandes();
      },
      error: () => this.showToast('error', '❌ Impossible d\'annuler cette demande.')
    });
  }

  relancerDemande(id: number, event?: Event): void {
    event?.stopPropagation();
    this.demandeFormationService.relancerDemande(id).subscribe({
      next: () => {
        this.fermerDetailDemande();
        this.showToast('success', '✅ Demande relancée avec succès.');
        this.loadDemandes();
      },
      error: () => this.showToast('error', '❌ Impossible de relancer cette demande.')
    });
  }

  // ── TOAST ────────────────────────────────────────
  showToast(type: 'success' | 'error' | 'warning', message: string): void {
    clearTimeout(this.toastTimer);
    this.toast = { type, message, visible: true };
    this.toastTimer = setTimeout(() => this.toast.visible = false, 4000);
  }
  closeToast(): void { this.toast.visible = false; clearTimeout(this.toastTimer); }

  // ════════════════════════════════════════════════
  // MODAL DÉTAIL DEMANDE
  // ════════════════════════════════════════════════
  ouvrirDetailDemande(demande: any, event?: Event): void {
    const target = event?.target as HTMLElement;
    if (target?.closest('.sc-btn-annuler, .sc-btn-relancer, .sc-motif-wrapper')) return;

    this.demandeSelectionnee     = { ...demande };
    this.formationsDetail        = [];
    this.loadingFormationsDetail = false;
    this.openFormations.clear();

    const el = document.getElementById('demandeDetailModal');
    if (el) {
      this.detailDemandeModal = new bootstrap.Modal(el, { backdrop: true, keyboard: true });
      this.detailDemandeModal.show();
    }

    const parcoursId  = demande.parcours_id ?? demande.parcours?.id;
    const categorieId = demande.parcours?.categorie_id;
    if (parcoursId && categorieId) {
      this.loadingFormationsDetail = true;
      this.formationsService.getFormationsDuParcoursParCategorie(parcoursId, categorieId).subscribe({
        next: (res: any) => {
          this.formationsDetail        = res.formations ?? [];
          this.loadingFormationsDetail = false;
        },
        error: () => { this.loadingFormationsDetail = false; }
      });
    }
  }

  fermerDetailDemande(): void {
    this.detailDemandeModal?.hide();
    this.demandeSelectionnee     = null;
    this.formationsDetail        = [];
    this.loadingFormationsDetail = false;
    this.openFormations.clear();
  }

  // ── ACCORDÉON FORMATIONS MODAL ───────────────────
  toggleFormation(demandeId: number, index: number): void {
    const key = `${demandeId}_${index}`;
    this.openFormations.has(key) ? this.openFormations.delete(key) : this.openFormations.add(key);
  }

  isFormationOpen(demandeId: number, index: number): boolean {
    return this.openFormations.has(`${demandeId}_${index}`);
  }

  // ════════════════════════════════════════════════
  // MODAL NOUVELLE DEMANDE
  // ════════════════════════════════════════════════
  openRequestModal(): void {
    this.resetModal();
    this.loadParcoursDisponibles();
    const el = document.getElementById('demandeParcoursModal');
    if (el) {
      this.modalInstance = new bootstrap.Modal(el, { backdrop: 'static', keyboard: false });
      this.modalInstance.show();
    }
  }

  closeModal(): void { this.modalInstance?.hide(); this.resetModal(); }

  private resetModal(): void {
    this.parcours          = [];
    this.categories        = [];
    this.formations        = [];
    this.selectedParcours  = null;
    this.selectedCategorie = null;
    this.showFormations    = false;
    this.submitting        = false;
    this.form.reset({ priorite: 'normale' });
  }

  loadParcoursDisponibles(): void {
    this.loadingParcours = true;
    this.formationsService.getParcoursDisponibles().subscribe({
      next: (res: any) => {
        this.parcours        = res.parcours ?? [];
        this.loadingParcours = false;
        if (!res.status && res.message) this.showToast('warning', '⚠️ ' + res.message);
      },
      error: () => {
        this.loadingParcours = false;
        this.showToast('error', '❌ Erreur lors du chargement des parcours.');
      }
    });
  }

  // ─────────────────────────────────────────────────
  // CORRECTION PRINCIPALE
  // La catégorie est déjà présente dans l'objet parcours
  // retourné par getParcoursDisponibles (categorie_id + categorie).
  // On reconstruit l'objet catégorie localement, sans appel API,
  // ce qui supprime le point de rupture identifié (404 silencieux
  // sur getCategoriesDuParcours quand entreprise_id ne correspond pas).
  // ─────────────────────────────────────────────────
  selectParcours(parcours: any): void {
    console.log('Parcours sélectionné :', parcours);
    this.selectedParcours  = parcours;
    this.selectedCategorie = null;
    this.formations        = [];
    this.showFormations    = false;

    if (parcours.categorie_id) {
      const categorieLocale = {
        id:     parcours.categorie_id,
        nom:    parcours.categorie ?? 'Catégorie',
        couleur: '#7c3aed',
        icone:  'isax-category',
      };
      this.categories = [categorieLocale];
      this.selectCategorie(categorieLocale);
    } else {
      this.categories = [];
      // Pas de catégorie — sentinelle pour passer directement à l'étape 3
      this.selectedCategorie = { id: null, nom: null };
      this.loadFormationsDuParcours(parcours.id, null);
    }
  }

  // loadCategoriesDuParcours() supprimée :
  // cette méthode faisait un appel réseau superflu pour récupérer
  // une information déjà disponible dans l'objet parcours.
  // Elle est remplacée par la logique locale dans selectParcours().

  selectCategorie(categorie: any): void {
    this.selectedCategorie = categorie;
    this.formations        = [];
    this.showFormations    = false;
    this.loadFormationsDuParcours(this.selectedParcours.id, categorie.id);
  }

  loadFormationsDuParcours(parcoursId: number, categorieId: number | null): void {
    this.loadingFormations = true;
    this.formationsService.getFormationsDuParcoursParCategorie(parcoursId, categorieId).subscribe({
      next: (res: any) => {
        this.formations        = res.formations ?? [];
        this.loadingFormations = false;
      },
      error: () => {
        this.loadingFormations = false;
        this.showToast('error', '❌ Erreur lors du chargement des formations.');
      }
    });
  }

  retourParcours(): void {
    this.selectedParcours  = null;
    this.selectedCategorie = null;
    this.categories        = [];
    this.formations        = [];
    this.showFormations    = false;
  }

  retourCategories(): void {
    this.selectedCategorie = null;
    this.formations        = [];
    this.showFormations    = false;
    // Si le parcours n'avait pas de catégorie, on remonte au choix de parcours
    if (!this.categories.length) {
      this.selectedParcours = null;
    }
  }

  canSubmit(): boolean {
    return !!this.selectedParcours && !!this.selectedCategorie && this.form.valid;
  }

  submitRequest(): void {
    if (!this.canSubmit()) return;
    this.submitting = true;

    const fv   = this.form.value;
    const date = fv.date_souhaitee_debut
      ? new Date(fv.date_souhaitee_debut).toISOString().split('T')[0]
      : undefined;

    const payload: any = {
      type_demande:         'parcours',
      parcours_id:          this.selectedParcours.id,
      motif_demande:        fv.motif_demande,
      objectifs_personnels: fv.objectifs_personnels,
      priorite:             fv.priorite,
      commentaire_employe:  fv.commentaire_employe,
    };
    if (date) payload.date_souhaitee_debut = date;

    this.demandeFormationService.creerDemande(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.closeModal();
        setTimeout(() => {
          this.showToast('success', '✅ Votre demande de parcours a été envoyée avec succès !');
          this.loadDemandes();
        }, 300);
      },
      error: (err: any) => this.handleError(err)
    });
  }

  private handleError(err: any): void {
    this.submitting = false;
    if (err.status === 409)      this.showToast('warning', '⚠️ Vous avez déjà une demande en cours pour ce parcours.');
    else if (err.status === 422) this.showToast('error', '❌ Veuillez vérifier les champs obligatoires.');
    else                         this.showToast('error', '❌ Une erreur est survenue. Veuillez réessayer.');
  }

  // ── HELPERS CSS ──────────────────────────────────
  getPrioriteClass(p: string): string {
    return ({ urgente: 'priorite-urgente', haute: 'priorite-haute', normale: 'priorite-normale', basse: 'priorite-basse' } as any)[p] ?? 'priorite-normale';
  }
  getStatutClass(s: string): string {
    return ({ en_attente: 'statut-attente', validee: 'statut-validee', refusee: 'statut-refusee', annulee: 'statut-annulee' } as any)[s] ?? '';
  }

  getImageUrl(path: string | null | undefined): string {
    return this.formationsService.getImageUrl(path);
  }
}