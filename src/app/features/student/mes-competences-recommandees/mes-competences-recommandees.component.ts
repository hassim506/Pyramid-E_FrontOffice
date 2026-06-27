import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { environment } from '../../../../environments/environment';
import { DomaineDB } from '../mes-competences/mes-competences.component';

interface FormationRecommandee {
  formation_id: number;
  formation_titre: string;
  image: string | null;
  duree: string | null;
  competences: string[];
  nb_competences: number;
  domaine: DomaineDB | null;
}

interface CompetenceRecommandeeView {
  nom: string;
  formations: FormationRecommandee[];
}

type SortOption = 'competences' | 'duree';
type ViewMode = 'grid' | 'list';

@Component({
  selector: 'app-mes-competences-recommandees',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mes-competences-recommandees.component.html',
  styleUrl: './mes-competences-recommandees.component.scss',
})
export class MesCompetencesRecommandeesComponent implements OnInit {
  loading = true;
  error = '';
  total = 0;
  formations: FormationRecommandee[] = [];

  recherche = '';
  tri: SortOption = 'competences';

  viewMode: ViewMode = 'grid';
  currentPage = 1;
  pageSize = 4;

  readonly gridPageSize = 4;
  readonly listPageSize = 5;

  private readonly imageBase = environment.apiUrl.replace(/\/api$/, '') + '/storage/';

  constructor(
    private formationsService: FormationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = '';

    this.formationsService.getCompetencesRecommandees().subscribe({
      next: (res: any) => {
        this.formations = res.formations ?? [];
        this.total = res.total ?? 0;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger les compétences recommandées.';
        this.loading = false;
      },
    });
  }

  get competencesRecommandees(): CompetenceRecommandeeView[] {
    const q = this.recherche.trim().toLowerCase();
    const map = new Map<string, Map<number, FormationRecommandee>>();

    this.formations.forEach(formation => {
      formation.competences.forEach(competence => {
        const match =
          !q ||
          competence.toLowerCase().includes(q) ||
          formation.formation_titre.toLowerCase().includes(q);

        if (!match) return;

        if (!map.has(competence)) {
          map.set(competence, new Map<number, FormationRecommandee>());
        }

        map.get(competence)!.set(formation.formation_id, formation);
      });
    });

    const list = Array.from(map.entries()).map(([nom, formations]) => ({
      nom,
      formations: Array.from(formations.values()),
    }));

    if (this.tri === 'competences') {
      return list.sort((a, b) => b.formations.length - a.formations.length || a.nom.localeCompare(b.nom));
    }

    return list.sort((a, b) => this.maxDuree(b.formations) - this.maxDuree(a.formations) || a.nom.localeCompare(b.nom));
  }

  get hasCompetences(): boolean {
    return this.competencesRecommandees.length > 0;
  }

  get totalCompetences(): number {
    const all = new Set<string>();
    this.formations.forEach(f => f.competences.forEach(c => all.add(c)));
    return all.size;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.competencesRecommandees.length / this.pageSize));
  }

  get competencesPage(): CompetenceRecommandeeView[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.competencesRecommandees.slice(start, start + this.pageSize);
  }

  get displayedCount(): number {
    return this.competencesPage.length;
  }

  setViewMode(mode: ViewMode): void {
    this.viewMode = mode;
    this.pageSize = mode === 'grid' ? this.gridPageSize : this.listPageSize;
    this.currentPage = 1;
  }

  setTri(t: SortOption): void {
    this.tri = t;
    this.currentPage = 1;
  }

  onRecherche(event: Event): void {
    this.recherche = (event.target as HTMLInputElement).value;
    this.currentPage = 1;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  allerVersFormation(id: number): void {
    this.router.navigate(['/courses/course-details-2', id]);
  }

  getImage(image: string | null): string | null {
    if (!image) return null;
    if (image.startsWith('http')) return image;
    return this.imageBase + image;
  }

  formatDuree(duree: string | null): string {
    if (!duree) return '';
    const n = parseFloat(duree);
    if (isNaN(n)) return duree;
    return n < 1 ? `${Math.round(n * 60)} min` : `${n}h`;
  }

  private maxDuree(formations: FormationRecommandee[]): number {
    return Math.max(...formations.map(f => parseFloat(f.duree ?? '0') || 0), 0);
  }

  trackByCompetence(_: number, item: CompetenceRecommandeeView): string {
    return item.nom;
  }

  trackByFormation(_: number, item: FormationRecommandee): number {
    return item.formation_id;
  }
}