import { Component, OnInit }                                          from '@angular/core';
import { CommonModule }                                               from '@angular/common';
import { RouterModule }                                               from '@angular/router';
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
  selector: 'app-students-parcours',
  templateUrl: './students-parcours.component.html',
  styleUrl: './students-parcours.component.scss',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, CustomPaginationComponent]
})
export class StudentsParcoursComponent implements OnInit {

  // ================================
  // LISTE DEMANDES (filtrée parcours)
  // ================================
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

  hoveredMotifId:  number | null = null;
  showRefusePerson = false;

  // ================================
  // TOAST
  // ================================
  toast: Toast = { type: 'success', message: '', visible: false };
  private toastTimer: any;

  // ================================
  // MODAL — PARCOURS UNIQUEMENT
  // ================================
  submitting            = false;
  private modalInstance: any;

  categories:          any[] = [];
  parcours:            any[] = [];
  selectedCategorieId: number | string = '';
  selectedParcoursIds: number[]        = [];
  loadingParcours      = false;

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
  // STATS
  // ================================
  get totalEnAttente(): number { return this.allDemandes.filter(d => d.statut === 'en_attente').length; }
  get totalValidees():  number { return this.allDemandes.filter(d => d.statut === 'validee').length;    }
  get totalRefusees():  number { return this.allDemandes.filter(d => d.statut === 'refusee').length;    }

  // ================================
  // CHARGEMENT — filtré sur 'parcours'
  // ================================
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
      image_affiche:      d.parcours?.image_couverture || 'assets/img/course/course-01.jpg',
    };
  }

  // ================================
  // FILTRES + PAGINATION
  // ================================
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

  searchData(value: string): void      { this.searchDataValue = value; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  filterByStatus(status: string): void { this.selectedStatus = status; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  resetFilters(): void                 { this.searchDataValue = ''; this.selectedStatus = ''; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  onPageChange(page: number): void     { this.currentPage = page; this.skip = (page - 1) * this.pageSize; this.getTableData(this.skip, this.pageSize); }

  // ================================
  // TOOLTIP
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
  // MODAL
  // ================================
  openRequestModal(): void {
    const el = document.getElementById('demandeParcoursModal');
    if (el) {
      this.modalInstance = new bootstrap.Modal(el, { backdrop: 'static', keyboard: false });
      this.modalInstance.show();
    }
  }

  closeModal(): void {
    this.modalInstance?.hide();
    this.resetModal();
  }

  private resetModal(): void {
    this.selectedCategorieId = '';
    this.selectedParcoursIds = [];
    this.parcours            = [];
    this.submitting          = false;
    this.form.reset({ priorite: 'normale' });
  }

  loadCategories(): void {
    this.formationsService.getCategories().subscribe({
      next: (res: any) => this.categories = res.categories ?? []
    });
  }

  onCategorieChange(): void {
    this.selectedParcoursIds = [];
    this.parcours            = [];
    if (!this.selectedCategorieId) return;
    this.loadParcours(+this.selectedCategorieId);
  }

  loadParcours(categorieId: number): void {
    this.loadingParcours = true;
    this.formationsService.getParcoursParCategorie(categorieId).subscribe({
      next: (res: any) => { this.parcours = res.parcours ?? []; this.loadingParcours = false; },
      error: () => { this.loadingParcours = false; }
    });
  }

  toggleParcours(id: number): void        { const i = this.selectedParcoursIds.indexOf(id); i === -1 ? this.selectedParcoursIds.push(id) : this.selectedParcoursIds.splice(i, 1); }
  isParcoursSelected(id: number): boolean { return this.selectedParcoursIds.includes(id); }

  // ================================
  // VALIDATION + SOUMISSION
  // ================================
  canSubmit(): boolean {
    return !!this.selectedCategorieId && this.selectedParcoursIds.length > 0 && this.form.valid;
  }

  submitRequest(): void {
    if (!this.canSubmit()) return;
    this.submitting = true;

    const fv   = this.form.value;
    const date = fv.date_souhaitee_debut
      ? new Date(fv.date_souhaitee_debut).toISOString().split('T')[0]
      : undefined;

    const base: any = {
      type_demande:         'parcours',
      motif_demande:        fv.motif_demande,
      objectifs_personnels: fv.objectifs_personnels,
      priorite:             fv.priorite,
      commentaire_employe:  fv.commentaire_employe,
    };
    if (date) base.date_souhaitee_debut = date;

    if (this.selectedParcoursIds.length === 1) {
      this.envoyerDemande({ ...base, parcours_id: this.selectedParcoursIds[0] });
    } else {
      this.envoyerDemandesMultiples(base);
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

  private envoyerDemandesMultiples(base: any): void {
    let completed = 0; let hasError = false;
    this.selectedParcoursIds.forEach(id => {
      this.demandeFormationService.creerDemande({ ...base, parcours_id: id }).subscribe({
        next: () => {
          completed++;
          if (completed === this.selectedParcoursIds.length && !hasError) {
            this.submitting = false;
            this.closeModal();
            setTimeout(() => {
              this.showToast('success', `✅ ${completed} demande(s) envoyée(s) avec succès !`);
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
}