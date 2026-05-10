import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SessionFormationService, SessionFormation } from '../../../shared/service/session/session-formation.service';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { UserService } from '../../../shared/service/user/user.service';

@Component({
  selector: 'app-adminrh-session',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './adminrh-session.component.html',
  styleUrls: ['./adminrh-session.component.scss']
})
export class AdminrhSessionComponent implements OnInit {

  // ── List state ────────────────────────────────
  allSessions: SessionFormation[] = [];
  sessions: SessionFormation[] = [];
  loading = false;
  error = '';
  successMessage = '';
  searchValue = '';
  filterStatut = '';
  filterType = '';

  // Pagination
  currentPage = 1;
  pageSize = 10;
  get totalPages(): number { return Math.ceil(this.sessions.length / this.pageSize); }
  get pagesArray(): number[] { return Array.from({ length: this.totalPages }, (_, i) => i); }
  get pagedSessions(): SessionFormation[] {
    const s = (this.currentPage - 1) * this.pageSize;
    return this.sessions.slice(s, s + this.pageSize);
  }

  // ── Wizard state ──────────────────────────────
  wizardOpen = false;
  wizardMode: 'create' | 'edit' | 'view' = 'create';
  wizardStep = 1;
  wizardSaving = false;
  wizardError = '';
  wizardSelected: SessionFormation | null = null;

  // Step 1 form
  step1Form!: FormGroup;
  wizardType: 'presentiel' | 'distanciel' | 'hybride' = 'presentiel';

  // Step 2 calendar
  calYear = new Date().getFullYear();
  calMonth = new Date().getMonth();
  calSelectedDate: Date | null = null;
  heureDebut = '09:00';
  heureFin = '12:00';
  rappel = '48h';
  recurrence = 'none';

  // Step 3 participants
  participantsSearch = '';
  selectedParticipants: any[] = [];
  allUsers: any[] = [];

  // Data lists
  formations: any[] = [];
  formateurs: any[] = [];

  readonly modes = [
    { key: 'presentiel',  label: 'Présentiel',  sub: 'En salle, lieu physique à préciser',   icon: 'isax-building' },
    { key: 'distanciel',  label: 'Distanciel',  sub: 'Visioconférence, lien à partager',      icon: 'isax-video' },
    { key: 'hybride',     label: 'Hybride',     sub: 'Mix présentiel + distanciel',           icon: 'isax-monitor' },
  ];

  constructor(
    private sessionService: SessionFormationService,
    private formationService: FormationService,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadSessions();
    this.loadFormations();
    this.loadFormateurs();
    this.loadUsers();
    this.initStep1Form();
  }

  // ── Data loading ──────────────────────────────
  loadSessions(): void {
    this.loading = true;
    this.sessionService.getAllSessionsRH().subscribe({
      next: (res) => {
        this.allSessions = res.sessions || [];
        this.applyFilters();
        this.loading = false;
      },
      error: () => { this.error = 'Erreur chargement sessions'; this.loading = false; }
    });
  }

  loadFormations(): void {
    this.formationService.getFormationsrh().subscribe({
      next: (res) => { this.formations = res.formations || []; },
      error: () => {}
    });
  }

  loadFormateurs(): void {
    this.userService.getFormateurs().subscribe({
      next: (res) => {
        const raw = res.formateurs || res.data || (Array.isArray(res) ? res : []);
        this.formateurs = Array.isArray(raw) ? raw : [];
      },
      error: () => {
        this.userService.getMyUsers().subscribe({
          next: (res2) => {
            const all = res2.users || res2.data || (Array.isArray(res2) ? res2 : []);
            this.formateurs = (Array.isArray(all) ? all : []).filter((u: any) =>
              u.role?.name?.toLowerCase() === 'formateur' ||
              u.role_id === 3 ||
              u.fonction?.toLowerCase().includes('formateur')
            );
          },
          error: () => {}
        });
      }
    });
  }

  loadUsers(): void {
    this.userService.getMyUsers().subscribe({
      next: (res) => {
        const raw = res.users || res.data || res;
        this.allUsers = Array.isArray(raw) ? raw : [];
      },
      error: () => {}
    });
  }

  // ── Filters ───────────────────────────────────
  applyFilters(): void {
    let d = [...this.allSessions];
    if (this.searchValue.trim()) {
      const q = this.searchValue.toLowerCase();
      d = d.filter(s =>
        s.titre?.toLowerCase().includes(q) ||
        s.code_session?.toLowerCase().includes(q) ||
        s.formation?.titre?.toLowerCase().includes(q)
      );
    }
    if (this.filterStatut) d = d.filter(s => s.statut === this.filterStatut);
    if (this.filterType)   d = d.filter(s => s.type === this.filterType);
    this.sessions = d;
    this.currentPage = 1;
  }

  // ── Wizard open/close ─────────────────────────
  openCreate(): void {
    this.wizardMode = 'create';
    this.wizardSelected = null;
    this.wizardStep = 1;
    this.wizardError = '';
    this.wizardType = 'presentiel';
    this.calSelectedDate = null;
    this.heureDebut = '09:00';
    this.heureFin = '12:00';
    this.selectedParticipants = [];
    this.initStep1Form();
    this.wizardOpen = true;
  }

  openEdit(s: SessionFormation): void {
    this.wizardMode = 'edit';
    this.wizardSelected = s;
    this.wizardStep = 1;
    this.wizardError = '';
    this.wizardType = s.type || 'presentiel';
    this.calSelectedDate = new Date(s.date_debut);
    this.calYear = this.calSelectedDate.getFullYear();
    this.calMonth = this.calSelectedDate.getMonth();
    this.heureDebut = new Date(s.date_debut).toTimeString().slice(0, 5);
    this.heureFin   = new Date(s.date_fin).toTimeString().slice(0, 5);
    this.selectedParticipants = [];
    this.initStep1Form(s);
    this.wizardOpen = true;
  }

  openView(s: SessionFormation): void {
    this.wizardMode = 'view';
    this.wizardSelected = s;
    this.wizardStep = 1;
    this.wizardError = '';
    this.wizardType = s.type || 'presentiel';
    this.calSelectedDate = new Date(s.date_debut);
    this.calYear = this.calSelectedDate.getFullYear();
    this.calMonth = this.calSelectedDate.getMonth();
    this.heureDebut = new Date(s.date_debut).toTimeString().slice(0, 5);
    this.heureFin   = new Date(s.date_fin).toTimeString().slice(0, 5);
    this.initStep1Form(s);
    this.wizardOpen = true;
  }

  closeWizard(): void { this.wizardOpen = false; }

  // ── Step 1 form ───────────────────────────────
  private initStep1Form(s?: SessionFormation): void {
    this.step1Form = this.fb.group({
      formation_id:  [s?.formation_id  || '', [Validators.required]],
      formateur_id:  [s?.formateur_id  || '', [Validators.required]],
      lieu:          [s?.lieu          || '', []],
      lien:          [s?.instructions_acces || '', []],
      code_acces:    ['', []],
      titre:         [s?.titre         || '', []],
      capacite_max:  [s?.capacite_max  || 20,  [Validators.required, Validators.min(1)]],
    });
  }

  setMode(m: string): void {
    if (this.wizardMode === 'view') return;
    this.wizardType = m as any;
  }

  // ── Step 2 calendar ───────────────────────────
  get calMonthLabel(): string {
    return new Date(this.calYear, this.calMonth, 1)
      .toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  }

  get calendarDays(): { date: Date; empty: boolean }[] {
    const firstDay = new Date(this.calYear, this.calMonth, 1);
    const lastDay  = new Date(this.calYear, this.calMonth + 1, 0);
    const offset = (firstDay.getDay() + 6) % 7; // Monday-start
    const days: { date: Date; empty: boolean }[] = [];
    for (let i = 0; i < offset; i++) {
      days.push({ date: new Date(this.calYear, this.calMonth, -offset + i + 1), empty: true });
    }
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push({ date: new Date(this.calYear, this.calMonth, d), empty: false });
    }
    return days;
  }

  calPrev(): void {
    if (this.calMonth === 0) { this.calMonth = 11; this.calYear--; }
    else this.calMonth--;
  }
  calNext(): void {
    if (this.calMonth === 11) { this.calMonth = 0; this.calYear++; }
    else this.calMonth++;
  }

  selectDate(d: Date): void {
    if (this.wizardMode === 'view') return;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    if (d < today) return;
    this.calSelectedDate = d;
  }

  isToday(d: Date): boolean {
    const t = new Date();
    return d.getDate() === t.getDate() && d.getMonth() === t.getMonth() && d.getFullYear() === t.getFullYear();
  }

  isPast(d: Date): boolean {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return d < today;
  }

  isSelected(d: Date): boolean {
    if (!this.calSelectedDate) return false;
    return d.getDate() === this.calSelectedDate.getDate() &&
           d.getMonth() === this.calSelectedDate.getMonth() &&
           d.getFullYear() === this.calSelectedDate.getFullYear();
  }

  hasSession(d: Date): boolean {
    return this.allSessions.some(s => {
      const sd = new Date(s.date_debut);
      return sd.getDate() === d.getDate() && sd.getMonth() === d.getMonth() && sd.getFullYear() === d.getFullYear();
    });
  }

  get durationLabel(): string {
    const [sh, sm] = this.heureDebut.split(':').map(Number);
    const [eh, em] = this.heureFin.split(':').map(Number);
    const mins = (eh * 60 + em) - (sh * 60 + sm);
    if (mins <= 0) return '—';
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h + 'h' + (m ? String(m).padStart(2, '0') : '00');
  }

  // ── Step 3 participants ───────────────────────
  get filteredUsers(): any[] {
    const q = this.participantsSearch.toLowerCase();
    return this.allUsers.filter(u =>
      !q || u.name?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q)
    );
  }

  isParticipantSelected(u: any): boolean {
    return this.selectedParticipants.some(p => p.id === u.id);
  }

  toggleParticipant(u: any): void {
    if (this.wizardMode === 'view') return;
    const cap = this.step1Form.value.capacite_max || 20;
    const idx = this.selectedParticipants.findIndex(p => p.id === u.id);
    if (idx > -1) { this.selectedParticipants.splice(idx, 1); }
    else if (this.selectedParticipants.length < cap) { this.selectedParticipants.push(u); }
  }

  get fillPercent(): number {
    const cap = this.step1Form.value.capacite_max || 20;
    return Math.round((this.selectedParticipants.length / cap) * 100);
  }

  userInitials(u: any): string {
    const n = (u.name || u.prenom + ' ' + u.nom || '?').trim();
    return n.split(' ').map((w: string) => w[0]).slice(0, 2).join('').toUpperCase();
  }

  // ── Navigation ────────────────────────────────
  wizardNext(): void {
    if (this.wizardStep === 1) {
      if (this.step1Form.get('formation_id')?.invalid || this.step1Form.get('formateur_id')?.invalid) {
        this.step1Form.markAllAsTouched(); return;
      }
    }
    if (this.wizardStep === 2 && !this.calSelectedDate) {
      this.wizardError = 'Veuillez sélectionner une date.'; return;
    }
    this.wizardError = '';
    this.wizardStep++;
  }

  wizardPrev(): void { this.wizardStep--; this.wizardError = ''; }

  // ── Recap helpers ─────────────────────────────
  get recapFormation(): string {
    const f = this.formations.find(x => x.id == this.step1Form.value.formation_id);
    return f?.titre || '—';
  }

  get recapFormateur(): string {
    const f = this.formateurs.find(x => x.id == this.step1Form.value.formateur_id);
    return f ? (f.prenom ? f.prenom + ' ' + f.nom : f.name) : '—';
  }

  get recapDate(): string {
    if (!this.calSelectedDate) return '—';
    return this.calSelectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  get recapHoraire(): string {
    return `${this.heureDebut} – ${this.heureFin} (${this.durationLabel})`;
  }

  // ── Submit ────────────────────────────────────
  wizardSubmit(): void {
    if (this.wizardMode === 'view') { this.closeWizard(); return; }
    if (!this.calSelectedDate) { this.wizardError = 'Date manquante.'; return; }

    this.wizardSaving = true;
    this.wizardError = '';

    const fv = this.step1Form.value;
    const dateBase = new Date(this.calSelectedDate);
    const [sh, sm] = this.heureDebut.split(':').map(Number);
    const [eh, em] = this.heureFin.split(':').map(Number);
    const dateDebut = new Date(dateBase); dateDebut.setHours(sh, sm, 0, 0);
    const dateFin   = new Date(dateBase); dateFin.setHours(eh, em, 0, 0);

    const payload: any = {
      formation_id:  Number(fv.formation_id),
      formateur_id:  Number(fv.formateur_id),
      type:          this.wizardType,
      lieu:          this.wizardType !== 'distanciel' ? (fv.lieu || '') : (fv.lien || ''),
      instructions_acces: fv.lien || '',
      date_debut:    dateDebut.toISOString(),
      date_fin:      dateFin.toISOString(),
      capacite_max:  Number(fv.capacite_max),
      titre:         fv.titre || '',
      statut:        'planifiee',
    };

    const op = this.wizardMode === 'edit' && this.wizardSelected
      ? this.sessionService.updateSessionRH(this.wizardSelected.id, payload)
      : this.sessionService.createSessionRH(payload);

    op.subscribe({
      next: () => {
        this.wizardSaving = false;
        this.successMessage = this.wizardMode === 'edit' ? 'Session modifiée avec succès.' : 'Session planifiée avec succès.';
        this.closeWizard();
        this.loadSessions();
      },
      error: (err) => {
        this.wizardSaving = false;
        this.wizardError = err.error?.message || 'Erreur lors de l\'enregistrement.';
      }
    });
  }

  // ── List actions ──────────────────────────────
  cancelSession(s: SessionFormation): void {
    if (!confirm('Annuler cette session ?')) return;
    this.sessionService.cancelSession(s.id, '').subscribe({
      next: () => { this.successMessage = 'Session annulée.'; this.loadSessions(); },
      error: () => { this.error = 'Erreur lors de l\'annulation.'; }
    });
  }

  deleteSession(s: SessionFormation): void {
    if (!confirm('Supprimer définitivement cette session ?')) return;
    this.sessionService.deleteSessionRH(s.id).subscribe({
      next: () => { this.successMessage = 'Session supprimée.'; this.loadSessions(); },
      error: () => { this.error = 'Erreur lors de la suppression.'; }
    });
  }

  // ── Utility ───────────────────────────────────
  formatDate(d: string): string {
    return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  formatTime(d: string): string {
    return new Date(d).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  statutKey(s: string): string {
    const m: Record<string, string> = { planifiee: 'plan', en_cours: 'live', terminee: 'done', annulee: 'cancel' };
    return m[s] || 'plan';
  }

  statutLabel(s: string): string {
    const m: Record<string, string> = { planifiee: 'Planifiée', en_cours: 'En cours', terminee: 'Terminée', annulee: 'Annulée' };
    return m[s] || s;
  }

  countByStatut(statut: string): number {
    return this.allSessions.filter(s => s.statut === statut).length;
  }

  trackById(_i: number, s: SessionFormation): number { return s.id; }

  clearMessages(): void { this.error = ''; this.successMessage = ''; }
}
