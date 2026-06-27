import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormationService } from '../../../shared/service/formation/formation.service';

export interface DomaineDB {
  id: number;
  nom: string;
  slug?: string;
  couleur: string | null;
  icone: string | null;
}

export interface FormationEcart {
  formation_id: number;
  formation_titre: string;
  competences: string[];
}

export interface DomaineGroupEcart {
  domaine: DomaineDB | null;
  competences: string[];
  formations: FormationEcart[];
}

export interface EcartData {
  total_acquises: number;
  total_visees: number;
  total_ecart: number;
  competences_acquises: string[];
  par_domaine: DomaineGroupEcart[];
  domaine_user: DomaineDB | null;
}

export interface CompetenceEcartView {
  nom: string;
  formations: FormationEcart[];
}

type ViewMode = 'grid' | 'list';

@Component({
  selector: 'app-ecart-competences',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ecart-competences.component.html',
  styleUrl: './ecart-competences.component.scss',
})
export class EcartCompetencesComponent implements OnInit {
  loading = true;
  error = '';
  data: EcartData | null = null;

  recherche = '';
  viewMode: ViewMode = 'grid';
  currentPage = 1;
  pageSize = 4;

  readonly gridPageSize = 4;
  readonly listPageSize = 5;

  constructor(private formationsService: FormationService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = '';

    this.formationsService.getEcartCompetences().subscribe({
      next: (res: EcartData) => {
        this.data = res;
        this.loading = false;
        this.currentPage = 1;
      },
      error: () => {
        this.error = 'Impossible de charger l’écart de compétences.';
        this.loading = false;
      },
    });
  }

  get tauxProgression(): number {
    if (!this.data) return 0;

    const total = this.data.total_acquises + this.data.total_ecart;
    if (total === 0) return 100;

    return Math.round((this.data.total_acquises / total) * 100);
  }

  get competencesEcart(): CompetenceEcartView[] {
    const groupes = this.data?.par_domaine ?? [];
    const map = new Map<string, Map<number, FormationEcart>>();

    groupes.forEach(groupe => {
      groupe.competences.forEach(competence => {
        if (!map.has(competence)) {
          map.set(competence, new Map<number, FormationEcart>());
        }

        const formationsMap = map.get(competence)!;

        groupe.formations
          .filter(formation => formation.competences.includes(competence))
          .forEach(formation => {
            formationsMap.set(formation.formation_id, {
              ...formation,
              competences: [competence],
            });
          });
      });
    });

    return Array.from(map.entries())
      .map(([nom, formations]) => ({
        nom,
        formations: Array.from(formations.values()),
      }))
      .sort((a, b) => a.nom.localeCompare(b.nom));
  }

  get competencesFiltrees(): CompetenceEcartView[] {
    const q = this.recherche.trim().toLowerCase();
    if (!q) return this.competencesEcart;

    return this.competencesEcart.filter(competence =>
      competence.nom.toLowerCase().includes(q) ||
      competence.formations.some(formation =>
        formation.formation_titre.toLowerCase().includes(q)
      )
    );
  }

  get hasCompetences(): boolean {
    return this.competencesFiltrees.length > 0;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.competencesFiltrees.length / this.pageSize));
  }

  get competencesPage(): CompetenceEcartView[] {
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

  trackByCompetence(_: number, item: CompetenceEcartView): string {
    return item.nom;
  }

  trackByFormation(_: number, item: FormationEcart): number {
    return item.formation_id;
  }
}