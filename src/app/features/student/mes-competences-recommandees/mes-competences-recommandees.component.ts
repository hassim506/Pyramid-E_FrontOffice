import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

// ── Interfaces ────────────────────────────────────────────────────────────────
export interface DomaineDB {
  id:      number;
  nom:     string;
  slug:    string;
  couleur: string | null;
  icone:   string | null;
}

interface FormationRecommandee {
  formation_id:    number;
  formation_titre: string;
  image:           string | null;
  duree:           string | null;
  competences:     string[];
  nb_competences:  number;
  domaine:         DomaineDB | null;   // ← enrichi côté backend (patch PHP)
}

export interface DomaineGroupReco {
  domaine:     DomaineDB;
  formations:  FormationRecommandee[];
  competences: string[];              // compétences uniques du groupe
}

type SortOption = 'competences' | 'duree';

const FALLBACK_COLORS = [
  '#4f46e5','#059669','#db2777','#ea580c',
  '#0284c7','#0d9488','#64748b','#7c3aed',
];

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

  private readonly imageBase = 'http://localhost:8000/storage/';

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

  // ── Formations filtrées + triées ──────────────────────────────────────────
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

  // ── Groupement par domaine (même logique que les acquises) ────────────────
  get groupesFinaux(): DomaineGroupReco[] {
    const map = new Map<number | 'autres', DomaineGroupReco>();

    for (const f of this.formationsFiltrees) {
      const key = f.domaine?.id ?? 'autres';

      if (!map.has(key)) {
        const domaine: DomaineDB = f.domaine ?? {
          id: 0, nom: 'Autres compétences',
          slug: 'autres', couleur: '#64748b', icone: 'isax-category',
        };
        map.set(key, { domaine, formations: [], competences: [] });
      }

      const grp = map.get(key)!;
      grp.formations.push(f);

      // Dédoublonnage des compétences dans le groupe
      const existing = new Set(grp.competences);
      f.competences.forEach(c => { if (!existing.has(c)) grp.competences.push(c); });
    }

    // Tri des groupes : par nombre de compétences décroissant
    return Array.from(map.values())
      .sort((a, b) => b.competences.length - a.competences.length);
  }

  get hasGroupes(): boolean { return this.groupesFinaux.length > 0; }

  get totalCompetences(): number {
    const all = new Set<string>();
    this.formations.forEach(f => f.competences.forEach(c => all.add(c)));
    return all.size;
  }

  // ── Helpers domaine ───────────────────────────────────────────────────────
  getDomaineColor(domaine: DomaineDB, index = 0): string {
    return domaine.couleur ?? FALLBACK_COLORS[index % FALLBACK_COLORS.length];
  }

  getDomaineColorLight(domaine: DomaineDB, index = 0): string {
    return this.getDomaineColor(domaine, index) + '18';
  }

  getDomaineIcon(domaine: DomaineDB): string {
    return domaine.icone ?? 'isax-category';
  }

  // ── Helpers existants (inchangés) ─────────────────────────────────────────
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

  setTri(t: SortOption): void { this.tri = t; }

  onRecherche(event: Event): void {
    this.recherche = (event.target as HTMLInputElement).value;
  }

  trackByDomaine(_: number, g: DomaineGroupReco): number { return g.domaine.id; }
}