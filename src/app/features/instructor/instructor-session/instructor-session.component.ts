import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSortModule, Sort } from '@angular/material/sort';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { SessionFormationService, SessionFormation } from '../../../shared/service/session/session-formation.service';
import { ZoomMeetingService, ZoomMeeting } from '../../../shared/zoom/zoom-meeting.service';

@Component({
  selector: 'app-instructor-session',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSortModule, CustomPaginationComponent],
  templateUrl: './instructor-session.component.html',
  styleUrl: './instructor-session.component.scss'
})
export class InstructorSessionComponent implements OnInit {
  // Pagination
  public pageSize = 10;
  public tableData: SessionFormation[] = [];
  public tableDataCopy: SessionFormation[] = [];
  public actualData: SessionFormation[] = [];
  public currentPage = 1;
  public skip = 0;
  public totalData = 0;

  // Filtres
  public searchDataValue = '';
  public selectedStatut = '';
  public selectedType = '';

  // État
  loading = false;
  error = '';
  selectedSession: SessionFormation | null = null;

  private formateurId: number | null = null;

  // ── Zoom ──────────────────────────────────────
  zoomMeetings: Record<number, ZoomMeeting | null> = {};
  zoomLoading: Record<number, boolean> = {};
  zoomError = '';
  zoomSuccess = '';

  constructor(
    private sessionService: SessionFormationService,
    private zoomService: ZoomMeetingService
  ) {}

  ngOnInit(): void {
    try {
      const userDataString = localStorage.getItem('pyramide_user');
      if (userDataString) {
        const currentUser = JSON.parse(userDataString);
        this.formateurId = currentUser.id;
      }
    } catch (e) {
      console.error('Erreur lecture utilisateur:', e);
    }
    this.loadSessions();
  }

  loadSessions(): void {
    if (!this.formateurId) {
      this.error = 'Impossible d\'identifier le formateur connecté.';
      return;
    }
    this.loading = true;
    this.error = '';

    this.sessionService.getSessionsByFormateur(this.formateurId).subscribe({
      next: (response) => {
        this.tableDataCopy = response.sessions || [];
        this.actualData = [...this.tableDataCopy];
        this.totalData = this.actualData.length;
        this.currentPage = 1;
        this.skip = 0;
        this.getTableData();
        this.loading = false;

        // Réinitialiser le cache et charger le Zoom pour les sessions visibles
        this.zoomMeetings = {};
        this.loadZoomForVisible();
      },
      error: (err) => {
        console.error('Erreur sessions:', err);
        this.error = 'Erreur lors du chargement des sessions.';
        this.loading = false;
      }
    });
  }

  private loadZoomForVisible(): void {
    this.tableData
      .filter(s => s.type !== 'presentiel')
      .forEach(s => {
        this.zoomLoading[s.id] = true;
        this.zoomService.getMeetingBySession(s.id).subscribe({
          next: (res) => { this.zoomMeetings[s.id] = res.meeting ?? null; this.zoomLoading[s.id] = false; },
          error: ()    => { this.zoomMeetings[s.id] = null;               this.zoomLoading[s.id] = false; }
        });
      });
  }

  searchData(value: string): void {
    this.searchDataValue = value;
    this.applyFilters();
  }

  filterByStatut(): void { this.applyFilters(); }
  filterByType(): void { this.applyFilters(); }

  private applyFilters(): void {
    let filtered = [...this.tableDataCopy];

    if (this.searchDataValue.trim()) {
      const q = this.searchDataValue.toLowerCase();
      filtered = filtered.filter(s =>
        s.titre?.toLowerCase().includes(q) ||
        s.code_session?.toLowerCase().includes(q) ||
        s.formation?.titre?.toLowerCase().includes(q)
      );
    }
    if (this.selectedStatut) {
      filtered = filtered.filter(s => s.statut === this.selectedStatut);
    }
    if (this.selectedType) {
      filtered = filtered.filter(s => s.type === this.selectedType);
    }

    this.actualData = filtered;
    this.totalData = filtered.length;
    this.currentPage = 1;
    this.skip = 0;
    this.getTableData();
  }

  viewDetails(session: SessionFormation): void {
    this.selectedSession = session;
    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('sessionDetailsModal')
    );
    modal.show();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.getTableData();
    this.loadZoomForVisible();
  }

  private getTableData(): void {
    this.tableData = this.actualData.slice(this.skip, this.skip + this.pageSize);
  }

  sortData(sort: Sort): void {
    const data = this.actualData.slice();
    if (!sort.active || sort.direction === '') {
      this.actualData = data;
      this.getTableData();
      return;
    }
    this.actualData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'titre': return this.compare(a.titre, b.titre, isAsc);
        case 'date_debut': return this.compare(new Date(a.date_debut), new Date(b.date_debut), isAsc);
        case 'statut': return this.compare(a.statut, b.statut, isAsc);
        default: return 0;
      }
    });
    this.getTableData();
  }

  compare(a: string | number | Date, b: string | number | Date, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  }

  getStatutDisplay(statut: string): string {
    const map: Record<string, string> = {
      planifiee: 'Planifiée', en_cours: 'En cours',
      terminee: 'Terminée', annulee: 'Annulée'
    };
    return map[statut] || statut;
  }

  getStatutClass(statut: string): string {
    switch (statut) {
      case 'planifiee': return 'badge bg-info';
      case 'en_cours': return 'badge bg-success';
      case 'terminee': return 'badge bg-secondary';
      case 'annulee': return 'badge bg-danger';
      default: return 'badge bg-light';
    }
  }

  getTypeClass(type: string): string {
    switch (type) {
      case 'presentiel': return 'badge bg-primary';
      case 'distanciel': return 'badge bg-warning';
      case 'hybride': return 'badge bg-success';
      default: return 'badge bg-light';
    }
  }

  trackBySessionId(_index: number, session: SessionFormation): number {
    return session.id;
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const totalPages = Math.ceil(this.totalData / this.pageSize);
    const start = Math.max(1, this.currentPage - 2);
    const end   = Math.min(totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }

  clearError(): void { this.error = ''; }

  // ── Zoom methods ──────────────────────────────
  loadZoomMeeting(s: SessionFormation): void {
    // Skip presentiel, already loaded non-null, or currently loading
    if (s.type === 'presentiel' || this.zoomMeetings[s.id] || this.zoomLoading[s.id]) return;
    this.zoomLoading[s.id] = true;
    this.zoomService.getMeetingBySession(s.id).subscribe({
      next: (res) => { this.zoomMeetings[s.id] = res.meeting ?? null; this.zoomLoading[s.id] = false; },
      error: ()    => { this.zoomMeetings[s.id] = null;               this.zoomLoading[s.id] = false; }
    });
  }

  createZoomMeeting(s: SessionFormation): void {
    this.zoomLoading[s.id] = true;
    this.zoomError = '';
    this.zoomService.createMeeting(s.id).subscribe({
      next: (res) => {
        this.zoomMeetings[s.id] = res.meeting;
        this.zoomLoading[s.id] = false;
        this.zoomSuccess = 'Meeting Zoom créé. Le lien a été envoyé aux participants.';
        setTimeout(() => this.zoomSuccess = '', 5000);
      },
      error: (err) => {
        this.zoomLoading[s.id] = false;
        this.zoomError = err.error?.message || 'Erreur lors de la création du meeting Zoom.';
      }
    });
  }

  startMeeting(s: SessionFormation): void {
    const m = this.zoomMeetings[s.id];
    if (!m) return;
    window.open(m.start_url, '_blank');
  }

  deleteZoomMeeting(s: SessionFormation): void {
    const m = this.zoomMeetings[s.id];
    if (!m || !confirm('Supprimer le meeting Zoom de cette session ?')) return;
    this.zoomLoading[s.id] = true;
    this.zoomService.deleteMeeting(m.id).subscribe({
      next: () => {
        this.zoomMeetings[s.id] = null;
        this.zoomLoading[s.id] = false;
        this.zoomSuccess = 'Meeting Zoom supprimé.';
        setTimeout(() => this.zoomSuccess = '', 4000);
      },
      error: () => { this.zoomLoading[s.id] = false; this.zoomError = 'Erreur lors de la suppression.'; }
    });
  }

  isZoomAccessible(s: SessionFormation): boolean {
    const m = this.zoomMeetings[s.id];
    return m ? this.zoomService.isAccessible(m) : false;
  }

  isZoomExpired(s: SessionFormation): boolean {
    const m = this.zoomMeetings[s.id];
    return m ? this.zoomService.isExpired(m) : false;
  }

  getZoomDelai(s: SessionFormation): string {
    const m = this.zoomMeetings[s.id];
    return m ? this.zoomService.getDelai(m) : '';
  }
}