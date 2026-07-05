import { Component, OnInit }        from '@angular/core';
import { CommonModule }             from '@angular/common';
import { Router, RouterModule }     from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeFormationService }   from '../../../shared/service/demande/demande-formation.service';
import { FormationsService }         from '../../../shared/service/Formationsss/formations.service';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';

declare var bootstrap: any;

interface Toast {
  type: 'success' | 'error' | 'warning';
  message: string;
  visible: boolean;
}

@Component({
  standalone: true,
  selector: 'app-student-demande',
    templateUrl: './student-demande.component.html',
  styleUrl: './student-demande.component.scss',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, CustomPaginationComponent]
})
export class StudentDemandeComponent implements OnInit {

  // ── VUE ─────────────────────────────────────────
  viewMode: 'table' | 'grid' = 'table';

  // ── LISTE DEMANDES ───────────────────────────────
  loading      = true;
  allDemandes: any[] = [];
  demandes:    any[] = [];

  searchDataValue = '';
  selectedStatus  = '';

  totalData   = 0;
  pageSize    = 10;
  currentPage = 1;
  skip        = 0;
  limit       = 10;

  hoveredMotifId:   number | null = null;
  showRefusePerson  = false;

  // ── TOAST ────────────────────────────────────────
  toast: Toast = { type: 'success', message: '', visible: false };
  private toastTimer: any;

  // ── MODAL DÉTAIL DEMANDE ─────────────────────────
  demandeSelectionnee:      any   = null;
  private detailDemandeModal: any;

  // ── MODAL NOUVELLE DEMANDE ───────────────────────
  submitting            = false;
  private modalInstance: any;

  categories:          any[]           = [];
  formations:          any[]           = [];
  selectedCategorieId: number | string = '';
  selectedFormationIds: number[]       = [];
  loadingFormations    = false;

  form!: FormGroup;

  constructor(
    private demandeFormationService: DemandeFormationService,
    private formationsService:       FormationsService,
    private fb:                      FormBuilder,
    private router:                  Router
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

  // ── TOGGLE VUE ───────────────────────────────────
  setView(mode: 'table' | 'grid'): void { this.viewMode = mode; }

  // ── STATS ────────────────────────────────────────
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
          .filter((d: any) => d.type_demande === 'formation')
          .map((d: any) => this.normaliserDemande(d));
        this.totalData = this.allDemandes.length;
        this.getTableData(this.skip, this.limit);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private normaliserDemande(d: any): any {
    const fallback = 'assets/img/course/course-01.jpg';
    return {
      ...d,
      titre_affiche:      d.formation?.titre         ?? `Formation #${d.formation_id}`,
      sous_titre_affiche: d.formation?.formateur_nom ?? d.formation?.categorie?.nom ?? '',
      image_affiche:      d.formation?.image_couverture || fallback,
      formation: d.formation ? {
        ...d.formation,
        niveau:       d.formation.niveau       ?? '—',
        duree_totale: d.formation.duree_totale ?? null,
      } : null,
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
        d.sous_titre_affiche?.toLowerCase().includes(s) ||
        d.formation?.titre?.toLowerCase().includes(s)
      );
    }
    this.totalData = filtered.length;
    this.demandes  = filtered.slice(skip, skip + limit);
  }

  searchData(value: string): void      { this.searchDataValue = value;  this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  filterByStatus(status: string): void { this.selectedStatus  = status; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  resetFilters(): void                 { this.searchDataValue = ''; this.selectedStatus = ''; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  onPageChange(page: number): void     { this.currentPage = page; this.skip = (page - 1) * this.pageSize; this.getTableData(this.skip, this.pageSize); }

  // ── TOOLTIP MOTIF ────────────────────────────────
  showMotif(id: number): void         { this.hoveredMotifId = id; }
  hideMotif(): void                   { this.hoveredMotifId = null; }
  isMotifVisible(id: number): boolean { return this.hoveredMotifId === id; }
  toggleShowRefusePerson(): void      { this.showRefusePerson = !this.showRefusePerson; }

  // ── ACTIONS ──────────────────────────────────────
  annulerDemande(id: number, event?: Event): void {
    event?.stopPropagation();
    if (!confirm('Confirmer l\'annulation de cette demande ?')) return;
    this.demandeFormationService.annulerDemande(id).subscribe({
      next: () => {
        this.fermerDetailDemande();
        this.loadDemandes();
      }
    });
  }

  relancerDemande(id: number, event?: Event): void {
    event?.stopPropagation();
    this.demandeFormationService.relancerDemande(id).subscribe({
      next: () => {
        this.fermerDetailDemande();
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

  // ── CHARGEMENT DÉTAIL FORMATION ──────────────────
  loadingFormationDetail = false;

  // ════════════════════════════════════════════════
  // MODAL DÉTAIL DEMANDE
  // ════════════════════════════════════════════════
  ouvrirDetailDemande(demande: any, event: Event): void {
    const target = event.target as HTMLElement;
    if (target.closest('.sc-btn-annuler, .sc-btn-relancer, .sc-motif-wrapper')) return;

    this.demandeSelectionnee = { ...demande };
    this.openModules.clear();

    const el = document.getElementById('demandeDetailModal');
    if (el) {
      this.detailDemandeModal = new bootstrap.Modal(el, { backdrop: true, keyboard: true });
      this.detailDemandeModal.show();
    }

    const formationId = demande.formation_id ?? demande.formation?.id;
    if (formationId) {
      this.loadingFormationDetail = true;
      this.formationsService.getFormationById(formationId).subscribe({
        next: (res: any) => {
          const full = res?.data ?? res?.formation ?? res;
          this.demandeSelectionnee = {
            ...this.demandeSelectionnee,
            formation: {
              ...this.demandeSelectionnee.formation,
              ...full,
            }
          };
          this.loadingFormationDetail = false;
        },
        error: () => { this.loadingFormationDetail = false; }
      });
    }
  }

  fermerDetailDemande(): void {
    this.detailDemandeModal?.hide();
    this.demandeSelectionnee = null;
    this.openModules.clear();
  }

  // ════════════════════════════════════════════════
  // MODAL NOUVELLE DEMANDE
  // ════════════════════════════════════════════════
  openRequestModal(): void {
    this.resetModal();
    const el = document.getElementById('demandeFormationModal');
    if (el) {
      this.modalInstance = new bootstrap.Modal(el, { backdrop: 'static', keyboard: false });
      this.modalInstance.show();
    }
  }

  closeModal(): void { this.modalInstance?.hide(); this.resetModal(); }

  private resetModal(): void {
    this.selectedCategorieId  = '';
    this.selectedFormationIds = [];
    this.formations           = [];
    this.submitting           = false;
    this.form.reset({ priorite: 'normale' });
  }

  loadCategories(): void {
    this.formationsService.getCategories().subscribe({
      next: (res: any) => this.categories = res.categories ?? []
    });
  }

  onCategorieChange(): void {
    this.selectedFormationIds = [];
    this.formations           = [];
    if (!this.selectedCategorieId) return;
    this.loadFormations(+this.selectedCategorieId);
  }

  loadFormations(categorieId: number): void {
    this.loadingFormations = true;
    this.formationsService.getFormationsByCategorie(categorieId).subscribe({
      next:  (res: any) => { this.formations = res.formations ?? []; this.loadingFormations = false; },
      error: ()         => { this.loadingFormations = false; }
    });
  }

  toggleFormation(id: number): void        { const i = this.selectedFormationIds.indexOf(id); i === -1 ? this.selectedFormationIds.push(id) : this.selectedFormationIds.splice(i, 1); }
  isFormationSelected(id: number): boolean { return this.selectedFormationIds.includes(id); }

  canSubmit(): boolean { return !!this.selectedCategorieId && this.form.valid; }

  submitRequest(): void {
    if (!this.canSubmit()) return;
    this.submitting = true;

    const fv   = this.form.value;
    const date = fv.date_souhaitee_debut
      ? new Date(fv.date_souhaitee_debut).toISOString().split('T')[0]
      : undefined;

    const base: any = {
      type_demande:         'formation',
      motif_demande:        fv.motif_demande,
      objectifs_personnels: fv.objectifs_personnels,
      priorite:             fv.priorite,
      commentaire_employe:  fv.commentaire_employe,
    };
    if (date) base.date_souhaitee_debut = date;

    if (this.selectedFormationIds.length === 0) {
      this.envoyerDemande(base);
    } else if (this.selectedFormationIds.length === 1) {
      this.envoyerDemande({ ...base, formation_id: this.selectedFormationIds[0] });
    } else {
      this.envoyerDemandesMultiples(base);
    }
  }

  private envoyerDemande(payload: any): void {
    this.demandeFormationService.creerDemande(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.closeModal();
        setTimeout(() => { this.showToast('success', '✅ Votre demande a été envoyée avec succès !'); this.loadDemandes(); }, 300);
      },
      error: (err) => this.handleError(err)
    });
  }

  private envoyerDemandesMultiples(base: any): void {
    let completed = 0; let hasError = false;
    this.selectedFormationIds.forEach(id => {
      this.demandeFormationService.creerDemande({ ...base, formation_id: id }).subscribe({
        next: () => {
          completed++;
          if (completed === this.selectedFormationIds.length && !hasError) {
            this.submitting = false;
            this.closeModal();
            setTimeout(() => { this.showToast('success', `✅ ${completed} demande(s) envoyée(s) avec succès !`); this.loadDemandes(); }, 300);
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

  // ── NAVIGATION — commencer formation ────────────
  commencerFormation(demande: any, event?: Event): void {
    event?.stopPropagation();
    const formationId = demande.formation_id ?? demande.formation?.id;
    if (formationId) {
      this.fermerDetailDemande();
      const url = this.router.serializeUrl(
        this.router.createUrlTree(['/courses/course-watch', formationId], {
          queryParams: { fromPage: 'demandes' }
        })
      );
      window.open(url, '_blank');
    }
  }

  // ── ACCORDÉON MODULES ────────────────────────────
  openModules = new Set<string>();

  toggleModule(demandeId: number, moduleIndex: number): void {
    const key = `${demandeId}_${moduleIndex}`;
    this.openModules.has(key) ? this.openModules.delete(key) : this.openModules.add(key);
  }

  isModuleOpen(demandeId: number, moduleIndex: number): boolean {
    return this.openModules.has(`${demandeId}_${moduleIndex}`);
  }

  // ── HELPERS CSS ──────────────────────────────────
  getTotalSections(modules: any[]): number {
    return modules?.reduce((acc, m) => acc + (m.sections?.length ?? 0), 0) ?? 0;
  }

  getPrioriteClass(priorite: string): string {
    return ({ urgente: 'priorite-urgente', haute: 'priorite-haute', normale: 'priorite-normale', basse: 'priorite-basse' } as any)[priorite] ?? 'priorite-normale';
  }

  getStatutClass(statut: string): string {
    return ({ en_attente: 'statut-attente', validee: 'statut-validee', refusee: 'statut-refusee', annulee: 'statut-annulee' } as any)[statut] ?? '';
  }
}
