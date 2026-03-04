import { Component, OnInit }        from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';
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
  selector: 'app-students-sessions',
  templateUrl: './students-session.component.html',
  styleUrl: './students-session.component.scss',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, CustomPaginationComponent]
})
export class StudentsSessionsComponent implements OnInit {

  // ── VUE ─────────────────────────────────────────
  viewMode: 'table' | 'grid' = 'table';

  // ── DONNÉES ─────────────────────────────────────
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

  // ── TOAST ────────────────────────────────────────
  toast: Toast = { type: 'success', message: '', visible: false };
  private toastTimer: any;

  // ── MODAL DÉTAIL DEMANDE ─────────────────────────
  demandeSelectionnee: any = null;
  private detailModal: any;

  // ── MODAL NOUVELLE DEMANDE ───────────────────────
  submitting             = false;
  private modalInstance: any;
  sessions:         any[]         = [];
  selectedSessionId: number | null = null;
  loadingSessions   = false;
  form!: FormGroup;

  constructor(
    private demandeFormationService: DemandeFormationService,
    private formationsService: FormationsService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.loadDemandes();
    this.form = this.fb.group({
      motif_demande:        ['', Validators.required],
      objectifs_personnels: [''],
      priorite:             ['normale'],
      commentaire_employe:  ['']
    });
  }

  // ── TOGGLE VUE ───────────────────────────────────
  setView(mode: 'table' | 'grid'): void { this.viewMode = mode; }

  // ── STATS ────────────────────────────────────────
  get totalEnAttente(): number { return this.allDemandes.filter(d => d.statut === 'en_attente').length; }
  get totalValidees():  number { return this.allDemandes.filter(d => d.statut === 'validee').length;    }
  get totalRefusees():  number { return this.allDemandes.filter(d => d.statut === 'refusee').length;    }

  // ── CHARGEMENT ───────────────────────────────────
  loadDemandes(): void {
    this.loading = true;
    this.demandeFormationService.getMesDemandes().subscribe({
      next: (res: any) => {
        const raw = res.demandes ?? res;
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
    const fallback = 'assets/img/course/course-01.jpg';
    const date     = d.session_formation?.date_debut;
    const cap      = d.session_formation?.capacite_max ?? 0;
  const inscrits = d.session_formation?.nombre_inscrits ?? 0;
    return {
      ...d,
      titre_affiche:      d.session_formation?.titre ?? `Session #${d.session_formation_id}`,
      sous_titre_affiche: date ? `Début : ${new Date(date).toLocaleDateString('fr-FR')}` : '',
      image_affiche:      d.session_formation?.image_couverture || fallback,
       places_restantes:   Math.max(0, cap - inscrits),
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
        d.session_formation?.titre?.toLowerCase().includes(s) ||
        d.session_formation?.lieu?.toLowerCase().includes(s)
      );
    }
    this.totalData = filtered.length;
    this.demandes  = filtered.slice(skip, skip + limit);
  }

  searchData(value: string): void      { this.searchDataValue = value; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  filterByStatus(status: string): void { this.selectedStatus = status; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  resetFilters(): void                 { this.searchDataValue = ''; this.selectedStatus = ''; this.currentPage = 1; this.skip = 0; this.getTableData(0, this.limit); }
  onPageChange(page: number): void     { this.currentPage = page; this.skip = (page - 1) * this.pageSize; this.getTableData(this.skip, this.pageSize); }

  // ── TOOLTIP ──────────────────────────────────────
  showMotif(id: number): void         { this.hoveredMotifId = id; }
  hideMotif(): void                   { this.hoveredMotifId = null; }
  isMotifVisible(id: number): boolean { return this.hoveredMotifId === id; }
  toggleShowRefusePerson(): void      { this.showRefusePerson = !this.showRefusePerson; }

  // ════════════════════════════════════════════════
  // MODAL DÉTAIL DEMANDE
  // ════════════════════════════════════════════════
  ouvrirDetail(demande: any): void {
    this.demandeSelectionnee = demande;
    const el = document.getElementById('sessionDemandeDetailModal');
    if (el) {
      this.detailModal = new bootstrap.Modal(el, { backdrop: true, keyboard: true });
      this.detailModal.show();
    }
  }

  fermerDetail(): void {
    this.detailModal?.hide();
    this.demandeSelectionnee = null;
  }

  // ── ACTIONS ──────────────────────────────────────
  annulerDemande(id: number, event?: Event): void {
    event?.stopPropagation();
    if (!confirm("Confirmer l'annulation de cette demande ?")) return;
    this.demandeFormationService.annulerDemande(id).subscribe({
      next: () => {
        this.fermerDetail();
        this.loadDemandes();
      }
    });
  }

  relancerDemande(id: number, event?: Event): void {
    event?.stopPropagation();
    this.demandeFormationService.relancerDemande(id).subscribe({
      next: () => {
        this.fermerDetail();
        this.loadDemandes();
      },
      error: () => this.showToast('error', '❌ Impossible de relancer cette demande.')
    });
  }

  // ── HELPERS SESSION ───────────────────────────────
  getTypeLabel(type: string): string {
    return ({ presentiel: 'Présentiel', distanciel: 'Distanciel', hybride: 'Hybride' } as any)[type] ?? type;
  }

  getDureeJours(session: any): number {
    if (!session?.date_debut || !session?.date_fin) return 0;
    const ms = new Date(session.date_fin).getTime() - new Date(session.date_debut).getTime();
    return Math.ceil(ms / (1000 * 60 * 60 * 24));
  }

  // ── TOAST ────────────────────────────────────────
  showToast(type: 'success' | 'error' | 'warning', message: string): void {
    clearTimeout(this.toastTimer);
    this.toast = { type, message, visible: true };
    this.toastTimer = setTimeout(() => this.toast.visible = false, 4000);
  }
  closeToast(): void { this.toast.visible = false; clearTimeout(this.toastTimer); }

  // ════════════════════════════════════════════════
  // MODAL NOUVELLE DEMANDE
  // ════════════════════════════════════════════════
  openRequestModal(): void {
    this.loadSessions();
    const el = document.getElementById('demandeSessionModal');
    if (el) {
      this.modalInstance = new bootstrap.Modal(el, { backdrop: 'static', keyboard: false });
      this.modalInstance.show();
    }
  }

  closeModal(): void { this.modalInstance?.hide(); this.resetModal(); }

  private resetModal(): void {
    this.selectedSessionId = null;
    this.sessions          = [];
    this.submitting        = false;
    this.form.reset({ priorite: 'normale' });
  }

  loadSessions(): void {
    this.loadingSessions = true;
    this.formationsService.getSessionsOuvertes().subscribe({
      next: (res: any) => { this.sessions = res.sessions ?? []; this.loadingSessions = false; },
      error: () => { this.loadingSessions = false; }
    });
  }

  // ── SOUMISSION ───────────────────────────────────
  canSubmit(): boolean { return !!this.selectedSessionId && this.form.valid; }

  submitRequest(): void {
    if (!this.canSubmit()) return;
    this.submitting = true;
    const fv = this.form.value;
    const payload: any = {
      type_demande:         'session',
      session_formation_id: this.selectedSessionId,
      motif_demande:        fv.motif_demande,
      objectifs_personnels: fv.objectifs_personnels,
      priorite:             fv.priorite,
      commentaire_employe:  fv.commentaire_employe,
    };
    this.demandeFormationService.creerDemande(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.closeModal();
        setTimeout(() => { this.showToast('success', '✅ Votre demande a été envoyée avec succès !'); this.loadDemandes(); }, 300);
      },
      error: (err) => this.handleError(err)
    });
  }

  private handleError(err: any): void {
    this.submitting = false;
    if (err.status === 409)      this.showToast('warning', '⚠️ Vous avez déjà une demande en cours pour cette session.');
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
}