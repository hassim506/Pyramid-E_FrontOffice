import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { UserService } from '../../../shared/service/user/user.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { HasPermissionDirective } from '../../../directive/has-permission-directive.directive';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-instructor-course',
  templateUrl: './instructor-course.component.html',
  styleUrls: ['./instructor-course.component.scss'],
  imports: [CommonModule, FormsModule, RouterLink, HasPermissionDirective]
})
export class InstructorCourseComponent implements OnInit {
  public routes = routes;

  public loading = false;
  public error = '';

  public allFormations: any[] = [];
  public tableData: any[] = [];
  public totalData = 0;

  public currentPage = 1;
  public pageSize = 15;

  public searchDataValue = '';
  public statusFilter = 'all';

  public selectedFormation: any = null;

  private _filtered: any[] = [];

  // ── Modal participants ────────────────────────────────────────
  participantsModalOpen = false;
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
    private formationService: FormationService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.loading = true;
    this.error = '';

    this.formationService.getFormationsformateur().subscribe({
      next: (response) => {
        this.allFormations = response.formations || [];
        this.loading = false;
        this.applyFilters();
      },
      error: () => {
        this.error = 'Erreur lors du chargement des formations';
        this.loading = false;
      }
    });
  }

  applyFilters(): void {
    let filtered = [...this.allFormations];

    if (this.searchDataValue.trim()) {
      const q = this.searchDataValue.toLowerCase();
      filtered = filtered.filter(f => f.titre?.toLowerCase().includes(q));
    }

    if (this.statusFilter !== 'all') {
      filtered = filtered.filter(f => {
        const published = f.est_publie === true || f.est_publie === 1;
        if (this.statusFilter === 'active')  return published;
        if (this.statusFilter === 'draft')   return !published;
        if (this.statusFilter === 'pending') return f.statut === 'pending' || f.statut === 'en_attente';
        return true;
      });
    }

    this.totalData = filtered.length;
    this.currentPage = 1;
    this._filtered = filtered;
    this.tableData = filtered.slice(0, this.pageSize);
  }

  searchData(value: string): void {
    this.searchDataValue = value;
    this.applyFilters();
  }

  filterByStatus(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    this.tableData = this._filtered.slice(start, start + this.pageSize);
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const totalPages = Math.ceil(this.totalData / this.pageSize);
    const start = Math.max(1, this.currentPage - 2);
    const end   = Math.min(totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }

  // ── KPI ──────────────────────────────────────
  getActiveFormationsCount(): number {
    return this.allFormations.filter(f => f.est_publie === true || f.est_publie === 1).length;
  }

  getPendingFormationsCount(): number {
    return this.allFormations.filter(f => f.statut === 'pending' || f.statut === 'en_attente').length;
  }

  getDraftFormationsCount(): number {
    return this.allFormations.filter(f => !f.est_publie || f.est_publie === 0).length;
  }

  getTotalParticipants(): number {
    return this.allFormations.reduce((sum, f) => sum + (f.nb_participants || 0), 0);
  }

  // ── Publish toggle ────────────────────────────
  togglePublishStatus(formation: any): void {
    this.selectedFormation = formation;
    const modal = new bootstrap.Modal(document.getElementById('publish_modal')!);
    modal.show();
  }

  confirmTogglePublish(): void {
    if (!this.selectedFormation) return;

    const isPublished = this.selectedFormation.est_publie === true || this.selectedFormation.est_publie === 1;
    const action = isPublished
      ? this.formationService.unpublishFormation(this.selectedFormation.id)
      : this.formationService.publishFormation(this.selectedFormation.id);

    action.subscribe({
      next: () => {
        this.selectedFormation.est_publie = !isPublished;
        this.selectedFormation = null;
      },
      error: () => { this.selectedFormation = null; }
    });
  }

  // ── Archive ───────────────────────────────────
  archiveFormation(formation: any): void {
    if (!confirm(`Archiver la formation "${formation.titre}" ?`)) return;
    this.formationService.deleteFormation(formation.id).subscribe({
      next: () => this.loadFormations()
    });
  }

  // ── Helpers ───────────────────────────────────
  isFormationGratuite(f: any): boolean { return !f.prix || f.prix === 0; }

  formatPrix(prix: number): string {
    return !prix || prix === 0 ? 'Gratuit' : `${Math.round(prix)} XOF`;
  }

  getFormationImage(f: any): string {
    return this.formationService.getImageUrl(
      f.image_couverture || f.image_url || f.image || f.photo
    );
  }

  getStatusText(f: any): string {
    return (f.est_publie === true || f.est_publie === 1) ? 'Publié' : 'Brouillon';
  }

  getStatusClass(f: any): string {
    return (f.est_publie === true || f.est_publie === 1) ? 'bg-success' : 'bg-secondary';
  }

  trackByFormation(_: number, f: any): number { return f.id || _; }

  // ── PARTICIPANTS ──────────────────────────────────────────────
  openParticipants(f: any): void {
    this.selectedFormation = f;
    this.participants = [];
    this.availableUsers = [];
    this.availableUsersFiltered = [];
    this.participantsSearch = '';
    this.usersSearch = '';
    this.inscriptionSuccess = '';
    this.inscriptionError = '';
    this.participantsModalOpen = true;
    this.loadParticipants(f.id);
  }

  closeParticipants(): void {
    this.participantsModalOpen = false;
    this.selectedFormation = null;
  }

  private loadParticipants(formationId: number): void {
    this.participantsLoading = true;
    this.formationService.getParticipantsFormation(formationId).subscribe({
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
    if (!this.selectedFormation || this.inscriptionPending) return;
    this.inscriptionPending = true;
    this.inscriptionSuccess = '';
    this.inscriptionError = '';

    this.formationService.inscriptionDirecte({
      formation_id: this.selectedFormation.id,
      user_id: user.id
    }).subscribe({
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
    if (!this.selectedFormation || this.inscriptionPending) return;
    this.inscriptionPending = true;
    this.inscriptionSuccess = '';
    this.inscriptionError = '';

    this.formationService.desinscriptionDirecte({
      formation_id: this.selectedFormation.id,
      user_id: user.id
    }).subscribe({
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

  trackByUserId(_i: number, u: any): number { return u.id; }
}
