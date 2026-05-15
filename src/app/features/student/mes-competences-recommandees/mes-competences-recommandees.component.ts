import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';
import { environment } from '../../../../environments/environment';

interface FormationRecommandee {
  formation_id:    number;
  formation_titre: string;
  image:           string | null;
  duree:           string | null;
  competences:     string[];
  nb_competences:  number;
}

type SortOption = 'competences' | 'duree';

@Component({
  selector:    'app-mes-competences-recommandees',
  standalone:  true,
  imports:     [CommonModule, RouterModule],
  templateUrl: './mes-competences-recommandees.component.html',
  styleUrl:    './mes-competences-recommandees.component.scss',
})
export class MesCompetencesRecommandeesComponent implements OnInit {

  loading    = true;
  error      = '';
  total      = 0;
  formations: FormationRecommandee[] = [];
  recherche  = '';
  tri: SortOption = 'competences';

  private readonly imageBase = environment.apiUrl.replace(/\/api$/, '') + '/storage/';

  constructor(
    private formationsService: FormationsService,
    private router: Router
  ) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.error   = '';
    this.formationsService.getCompetencesRecommandees().subscribe({
      next: (res: any) => {
        this.formations = res.formations ?? [];
        this.total      = res.total ?? 0;
        this.loading    = false;
      },
      error: () => {
        this.error   = 'Impossible de charger les compétences recommandées.';
        this.loading = false;
      }
    });
  }

  get formationsFiltrees(): FormationRecommandee[] {
    let list = [...this.formations];

    if (this.recherche.trim()) {
      const q = this.recherche.toLowerCase();
      list = list.filter(f =>
        f.formation_titre.toLowerCase().includes(q) ||
        f.competences.some(c => c.toLowerCase().includes(q))
      );
    }

    if (this.tri === 'competences') {
      list.sort((a, b) => b.nb_competences - a.nb_competences);
    } else if (this.tri === 'duree') {
      list.sort((a, b) => {
        const da = parseFloat(a.duree ?? '0') || 0;
        const db = parseFloat(b.duree ?? '0') || 0;
        return db - da;
      });
    }

    return list;
  }

  get totalCompetences(): number {
    return this.formations.reduce((acc, f) => acc + f.nb_competences, 0);
  }

  // ✅ Fiche détail formation
  allerVersFormation(id: number): void {
    this.router.navigate(['/courses/course-details-2', id]);
  }

  // ✅ Image avec fallback
  getImage(image: string | null): string | null {
    if (!image) return null;
    if (image.startsWith('http')) return image;
    return this.imageBase + image;
  }

  // ✅ Durée avec unité
  formatDuree(duree: string | null): string {
    if (!duree) return '';
    const n = parseFloat(duree);
    if (isNaN(n)) return duree;
    return n < 1 ? `${Math.round(n * 60)} min` : `${n}h`;
  }

  setTri(t: SortOption): void { this.tri = t; }

  onRecherche(event: Event): void {
    this.recherche = (event.target as HTMLInputElement).value;
  }
}