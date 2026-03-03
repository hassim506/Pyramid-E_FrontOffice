import { Component, OnInit }        from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';
import { Router }                   from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeFormationService }  from '../../../shared/service/demande/demande-formation.service';
import { FormationsService }        from '../../../shared/service/Formationsss/formations.service';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';

declare var bootstrap: any;

interface Toast {
  type: 'success' | 'error' | 'warning';
  message: string;
  visible: boolean;
}

@Component({
  standalone: true,
  selector: 'app-students-catalogue',
  templateUrl: './students-catalogue.component.html',
  styleUrl: './students-catalogue.component.scss',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, CustomPaginationComponent]
})
export class StudentsCatalogueComponent implements OnInit {

  // ── VUE ─────────────────────────────────────────
  viewMode: 'table' | 'grid' = 'table';

  // ── LISTE DEMANDES ───────────────────────────────
  loading         = true;
  allDemandes:    any[] = [];
  demandes:       any[] = [];
  searchDataValue = '';
  selectedStatus  = '';
  totalData       = 0;
  pageSize        = 10;
  currentPage     = 1;
  skip            = 0;
  limit           = 10;
  hoveredMotifId: number | null = null;

  // ── TOAST ────────────────────────────────────────
  toast: Toast = { type: 'success', message: '', visible: false };
  private toastTimer: any;

  // ── MODAL DÉTAIL DEMANDE ─────────────────────────
  demandeSelectionnee:  any = null;
  catalogueDetail:      any = null;
  formationsCatalogue:  any[] = [];
  loadingFormations     = false;
  private detailDemandeModal: any;

  // ── MODAL NOUVELLE DEMANDE ───────────────────────
  submitting           = false;
  private modalInstance: any;
  catalogues:          any[]         = [];
  loadingCatalogues    = false;
  selectedCatalogueId: number | null = null;
  selectedCatalogue:   any           = null;
  form!: FormGroup;

  constructor(
    private demandeFormationService: DemandeFormationService,
    private formationsService:       FormationsService,
    private fb:                      FormBuilder,
    private router:                  Router
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

  // ── STATS ────────────────────────────────────────
  get totalEnAttente(): number { return this.allDemandes.filter(d => d.statut === 'en_attente').length; }
  get totalValidees():  number { return this.allDemandes.filter(d => d.statut === 'validee').length;    }
  get totalRefusees():  number { return this.allDemandes.filter(d => d.statut === 'refusee').length;    }

  // ── CHARGEMENT DEMANDES ──────────────────────────
  loadDemandes(): void {
    this.loading = true;
    this.demandeFormationService.getMesDemandes().subscribe({
      next: (res: any) => {
        const raw = res.demandes ?? res;
        this.allDemandes = raw
          .filter((d: any) => d.type_demande === 'catalogue')
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
      titre_affiche:      d.catalogue?.titre       ?? `Catalogue #${d.catalogue_id}`,
      sous_titre_affiche: d.catalogue?.description ?? '',
      image_affiche:      d.catalogue?.image_couverture || 'assets/img/course/course-01.jpg',
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
  filterByStatus(s: string): void  { this.selectedStatus = s; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  resetFilters(): void             { this.searchDataValue = ''; this.selectedStatus = ''; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  onPageChange(page: number): void { this.currentPage = page; this.skip = (page - 1) * this.pageSize; this.getTableData(this.skip, this.pageSize); }

  // ── TOOLTIP ──────────────────────────────────────
  showMotif(id: number): void         { this.hoveredMotifId = id; }
  hideMotif(): void                   { this.hoveredMotifId = null; }
  isMotifVisible(id: number): boolean { return this.hoveredMotifId === id; }

  // ── ACTIONS TABLE ────────────────────────────────
  annulerDemande(id: number, event: Event): void {
    event.stopPropagation();
    if (!confirm("Confirmer l'annulation de cette demande ?")) return;
    this.demandeFormationService.annulerDemande(id).subscribe({ next: () => this.loadDemandes() });
  }

  relancerDemande(id: number, event: Event): void {
    event.stopPropagation();
    this.demandeFormationService.relancerDemande(id).subscribe({
      next: () => this.loadDemandes(),
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
  ouvrirDetailDemande(demande: any): void {
    this.demandeSelectionnee = demande;
    this.catalogueDetail     = null;
    this.formationsCatalogue = [];

    if (demande.catalogue_id) {
      this.loadingFormations = true;
      this.formationsService.getCatalogueDetail(demande.catalogue_id).subscribe({
        next: (res: any) => {
          this.catalogueDetail     = res.catalogue ?? res;
          this.formationsCatalogue = res.formations ?? [];
          this.loadingFormations   = false;
        },
        error: () => { this.loadingFormations = false; }
      });
    }

    const el = document.getElementById('catalogueDemandeDetailModal');
    if (el) {
      this.detailDemandeModal = new bootstrap.Modal(el, { backdrop: true, keyboard: true });
      this.detailDemandeModal.show();
    }
  }

  fermerDetailDemande(): void {
    this.detailDemandeModal?.hide();
    this.demandeSelectionnee  = null;
    this.catalogueDetail      = null;
    this.formationsCatalogue  = [];
  }

  voirFormation(formation: any): void {
    this.detailDemandeModal?.hide();
    this.router.navigate(['/courses/course-details-2', formation.id], {
      state: {
        fromCatalogue:  true,
        catalogueId:    this.demandeSelectionnee?.catalogue_id,
        catalogueTitre: this.demandeSelectionnee?.titre_affiche,
      }
    });
  }

  // ════════════════════════════════════════════════
  // MODAL NOUVELLE DEMANDE
  // ════════════════════════════════════════════════
  openRequestModal(): void {
    this.resetModal();
    this.loadCatalogues();
    const el = document.getElementById('demandeCatalogueModal');
    if (el) {
      this.modalInstance = new bootstrap.Modal(el, { backdrop: 'static', keyboard: false });
      this.modalInstance.show();
    }
  }

  closeModal(): void { this.modalInstance?.hide(); this.resetModal(); }

  private resetModal(): void {
    this.catalogues          = [];
    this.selectedCatalogueId = null;
    this.selectedCatalogue   = null;
    this.submitting          = false;
    this.form.reset({ priorite: 'normale' });
  }

  loadCatalogues(): void {
    this.loadingCatalogues = true;
    this.formationsService.getCatalogues().subscribe({
      next: (res: any) => {
        this.catalogues        = res.catalogues ?? [];
        this.loadingCatalogues = false;
      },
      error: () => {
        this.loadingCatalogues = false;
        this.showToast('error', '❌ Erreur lors du chargement des catalogues.');
      }
    });
  }

  selectCatalogue(catalogue: any): void {
    this.selectedCatalogueId = catalogue.id;
    this.selectedCatalogue   = catalogue;
  }

  canSubmit(): boolean { return !!this.selectedCatalogueId && this.form.valid; }

  submitRequest(): void {
    if (!this.canSubmit()) return;
    this.submitting = true;

    const fv   = this.form.value;
    const date = fv.date_souhaitee_debut
      ? new Date(fv.date_souhaitee_debut).toISOString().split('T')[0]
      : undefined;

    const payload: any = {
      type_demande:         'catalogue',
      catalogue_id:         this.selectedCatalogueId,
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
          this.showToast('success', '✅ Votre demande de catalogue a été envoyée avec succès !');
          this.loadDemandes();
        }, 300);
      },
      error: (err) => this.handleError(err)
    });
  }

  private handleError(err: any): void {
    this.submitting = false;
    if (err.status === 409)      this.showToast('warning', '⚠️ Vous avez déjà une demande en cours pour ce catalogue.');
    else if (err.status === 422) this.showToast('error', '❌ Veuillez vérifier les champs obligatoires.');
    else                         this.showToast('error', '❌ Une erreur est survenue. Veuillez réessayer.');
  }

  getPrioriteClass(p: string): string {
    return ({ urgente: 'priorite-urgente', haute: 'priorite-haute', normale: 'priorite-normale', basse: 'priorite-basse' } as any)[p] ?? 'priorite-normale';
  }
  getStatutClass(s: string): string {
    return ({ en_attente: 'statut-attente', validee: 'statut-validee', refusee: 'statut-refusee', annulee: 'statut-annulee' } as any)[s] ?? '';
  }
}