import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Formations } from '../../../shared/models/Formations.models';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { LectureFormationComponent } from '../lecture-formation/lecture-formation.component';

@Component({
  standalone: true,
  selector: 'app-mes-cours',
  imports: [CommonModule, FormsModule, CustomPaginationComponent, LectureFormationComponent],
  templateUrl: './mes-cours.component.html',
  styleUrls: ['./mes-cours.component.scss'],
})
export class MesCoursComponent implements OnInit {

  // ── Player ───────────────────────────────────────────────
  viewMode: 'list' | 'player' = 'list';
  activeFormationId: number | null = null;
  activeItemTitle = '';

  // ── Données formations ───────────────────────────────────
  allFormations: Formations[] = [];
  formations:    Formations[] = [];

  loading = false;
  error   = '';

  // ── Pagination ───────────────────────────────────────────
  currentPage = 1;
  pageSize    = 6;
  totalData   = 0;
  skip        = 0;
  limit       = 6;

  // ── Filtres ──────────────────────────────────────────────
  selectedStatus  = '';
  searchDataValue = '';

  // ── Stats ────────────────────────────────────────────────
  get totalCompleted():  number { return this.allFormations.filter(f => Number(f.progression ?? 0) === 100).length; }
  get totalInProgress(): number { return this.allFormations.filter(f => { const p = Number(f.progression ?? 0); return p > 0 && p < 100; }).length; }
  get globalProgress():  number {
    if (!this.allFormations.length) return 0;
    return Math.round(this.allFormations.reduce((a, f) => a + Number(f.progression ?? 0), 0) / this.allFormations.length);
  }

  constructor(
    private formationsService: FormationsService,
    private router: Router
  ) {}

  ngOnInit(): void { this.loadFormations(); }

  // ════════════════════════════════════════════
  // CHARGEMENT
  // ════════════════════════════════════════════
  loadFormations(): void {
    this.loading = true;
    this.error   = '';
    this.formationsService.getMesFormations().subscribe({
      next: (res) => {
        this.allFormations = res.formations ?? [];
        this.totalData     = this.allFormations.length;
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.error   = 'Erreur lors du chargement de vos formations.';
        this.loading = false;
      }
    });
  }

  // ════════════════════════════════════════════
  // FILTRES
  // ════════════════════════════════════════════
  get filteredFormations(): Formations[] {
    return this.allFormations.filter(f => {
      const p  = Number(f.progression ?? 0);
      const ms = !this.searchDataValue ||
        f.titre.toLowerCase().includes(this.searchDataValue.toLowerCase()) ||
        (f.description ?? '').toLowerCase().includes(this.searchDataValue.toLowerCase());
      const mf = !this.selectedStatus ||
        (this.selectedStatus === 'completed' && p === 100) ||
        (this.selectedStatus === 'active'    && p > 0 && p < 100) ||
        (this.selectedStatus === 'pending'   && p === 0);
      return ms && mf;
    });
  }

  applyFilters(): void {
    const filtered   = this.filteredFormations;
    this.totalData   = filtered.length;
    this.currentPage = 1;
    this.skip        = 0;
    this.formations  = filtered.slice(0, this.limit);
  }

  filterByStatus(s: string): void { this.selectedStatus  = s; this.applyFilters(); }
  searchData(v: string):     void { this.searchDataValue = v; this.applyFilters(); }
  resetFilters():            void { this.searchDataValue = ''; this.selectedStatus = ''; this.applyFilters(); }

  // ════════════════════════════════════════════
  // PAGINATION
  // ════════════════════════════════════════════
  getTableData(skip: number, limit: number): void {
    this.formations = this.filteredFormations.slice(skip, skip + limit);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.skip        = (page - 1) * this.pageSize;
    this.getTableData(this.skip, this.pageSize);
  }

  // ════════════════════════════════════════════
  // PLAYER
  // ════════════════════════════════════════════
  openPlayer(f: Formations): void {
    this.activeFormationId = f.id ?? null;
    this.activeItemTitle   = f.titre;
    this.viewMode          = 'player';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closePlayerView(): void {
    this.viewMode          = 'list';
    this.activeFormationId = null;
    this.activeItemTitle   = '';
  }

  startCourses(id?: number): void {
    if (!id) return;
    const found = this.allFormations.find(f => f.id === id);
    if (found) { this.openPlayer(found); return; }
    this.activeFormationId = id;
    this.activeItemTitle   = '';
    this.viewMode          = 'player';
  }

  goToDetails(id?: number): void {
    if (id) this.router.navigate(['/courses/course-details-2', id]);
  }

  // ════════════════════════════════════════════
  // HELPERS
  // ════════════════════════════════════════════
  getCourseActionLabel(f: Formations): string {
    const p = Number(f.progression ?? 0);
    if (p === 100) return 'Revoir';
    if (p > 0)     return 'Continuer';
    return 'Commencer';
  }

  getCourseActionIcon(f: Formations): string {
    const p = Number(f.progression ?? 0);
    if (p === 100) return 'isax-refresh-2';
    if (p > 0)     return 'isax-play-circle';
    return 'isax-play';
  }

  getProgressClass(pct: number): string {
    if (pct === 100) return 'bg-success';
    if (pct > 0)     return 'bg-primary';
    return 'bg-secondary';
  }

  isCourseFinished(f: Formations): boolean { return Number(f.progression ?? 0) === 100; }
}