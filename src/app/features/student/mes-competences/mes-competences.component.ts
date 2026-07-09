import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormationService } from '../../../shared/service/formation/formation.service';

export interface FormationAcquise {
  formation_id: number;
  formation_titre: string;
  date_fin?: string | null;
}

export interface StatsAcquises {
  total_acquises: number;
  formations_terminees: number;
}

export interface CompetenceAcquiseView {
  nom: string;
  formations: FormationAcquise[];
}

export interface CompetencesAcquisesData {
  stats: StatsAcquises;
  competences_acquises: CompetenceAcquiseView[];
}

type ViewMode = 'grid' | 'list';

@Component({
  selector: 'app-mes-competences',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mes-competences.component.html',
  styleUrl: './mes-competences.component.scss',
})
export class MesCompetencesComponent implements OnInit {
  loading = true;
  error = '';
  data: CompetencesAcquisesData | null = null;

  recherche = '';
  viewMode: ViewMode = 'grid';
  currentPage = 1;
  pageSize = 4;

  readonly gridPageSize = 4;
  readonly listPageSize = 5;

  constructor(
    private formationsService: FormationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCompetences();
  }

  loadCompetences(): void {
    this.loading = true;
    this.error = '';

    this.formationsService.getCompetencesAcquises().subscribe({
      next: (res: any) => {
        this.data = {
          stats: res?.stats ?? { total_acquises: 0, formations_terminees: 0 },
          competences_acquises: res?.competences_acquises ?? [],
        };

        this.currentPage = 1;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur compétences acquises:', err);
        this.error = 'Impossible de charger vos compétences acquises.';
        this.loading = false;
      },
    });
  }

  get stats(): StatsAcquises {
    return this.data?.stats ?? {
      total_acquises: 0,
      formations_terminees: 0,
    };
  }

  get competencesAcquises(): CompetenceAcquiseView[] {
    return this.data?.competences_acquises ?? [];
  }

  get competencesFiltrees(): CompetenceAcquiseView[] {
    const q = this.recherche.trim().toLowerCase();
    if (!q) return this.competencesAcquises;

    return this.competencesAcquises.filter(competence =>
      competence.nom.toLowerCase().includes(q) ||
      competence.formations.some(formation =>
        formation.formation_titre.toLowerCase().includes(q)
      )
    );
  }

  get hasCompetences(): boolean {
    return this.competencesFiltrees.length > 0;
  }

  get totalFormations(): number {
    const ids = new Set<number>();

    this.competencesAcquises.forEach(competence => {
      competence.formations.forEach(formation => ids.add(formation.formation_id));
    });

    return ids.size;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.competencesFiltrees.length / this.pageSize));
  }

  get competencesPage(): CompetenceAcquiseView[] {
    const safePage = Math.min(this.currentPage, this.totalPages);
    const start = (safePage - 1) * this.pageSize;

    return this.competencesFiltrees.slice(start, start + this.pageSize);
  }

  get displayedCount(): number {
    return this.competencesPage.length;
  }

  setViewMode(mode: ViewMode): void {
    this.viewMode = mode;
    this.pageSize = mode === 'grid' ? this.gridPageSize : this.listPageSize;
    this.currentPage = 1;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onRecherche(event: Event): void {
    this.recherche = (event.target as HTMLInputElement).value;
    this.currentPage = 1;
  }

  allerVersFormation(id: number): void {
    this.router.navigate(['/courses/course-details-2', id]);
  }

  formatDateFr(date: string | null | undefined): string {
    if (!date) return '';

    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date(date));
  }

  trackByCompetence(_: number, item: CompetenceAcquiseView): string {
    return item.nom;
  }

  trackByFormation(_: number, item: FormationAcquise): number {
    return item.formation_id;
  }
}