import { Component, OnInit } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormationService } from '../../../shared/service/formation/formation.service';

// ── Interfaces ───────────────────────────────────────────────────────────────
export interface DomaineDB {
  id:      number;
  nom:     string;
  slug:    string;
  couleur: string | null;
  icone:   string | null;
}

export interface CompetenceFormation {
  formation_id:    number;
  formation_titre: string;
  image:           string | null;
  progression:     number;
  competences:     string[];
  nb_competences:  number;
  date_fin:        string | null;
  domaine:         DomaineDB | null;
}

export interface CompetencesStats {
  total_acquises:       number;
  formations_terminees: number;
}

export interface CompetencesData {
  stats:              CompetencesStats;
  competences_a_plat: string[];
  domaine_user:       DomaineDB | null;
  par_formation: {
    acquises: CompetenceFormation[];
  };
}

export interface DomaineGroup {
  domaine:     DomaineDB;
  competences: string[];
  formations:  CompetenceFormation[];
  isPrimary:   boolean;
}

const FALLBACK_COLORS = [
  '#4f46e5','#059669','#db2777','#ea580c',
  '#0284c7','#0d9488','#64748b','#7c3aed',
];

// ── Composant ────────────────────────────────────────────────────────────────
@Component({
  selector:    'app-mes-competences',
  standalone:  true,
  imports:     [CommonModule, RouterModule],
  templateUrl: './mes-competences.component.html',
  styleUrl:    './mes-competences.component.scss',
})
export class MesCompetencesComponent implements OnInit {

  loading   = true;
  error     = '';
  data:     CompetencesData | null = null;
  recherche = '';

  /** Chip domaine actif — null = tous les domaines */
  domaineFiltre: number | null = null;

  private moisFr = ['janvier','février','mars','avril','mai','juin',
                    'juillet','août','septembre','octobre','novembre','décembre'];

  constructor(
    private formationsService: FormationService,
    private router: Router,
  ) {}

  ngOnInit(): void { this.loadCompetences(); }

  loadCompetences(): void {
    this.loading = true;
    this.error   = '';
    this.formationsService.getMesCompetences().subscribe({
      next:  (res: any) => { this.data = res; this.loading = false; },
      error: ()         => { this.error = 'Impossible de charger les compétences.'; this.loading = false; },
    });
  }

  get stats(): CompetencesStats | null { return this.data?.stats ?? null; }

  get competencesAcquises(): string[] {
    const all = this.data?.competences_a_plat ?? [];
    if (!this.recherche.trim()) return all;
    return all.filter(c => c.toLowerCase().includes(this.recherche.toLowerCase()));
  }

  // ── Chips ─────────────────────────────────────────────────────────────────

  /** Tous les groupes bruts (sans filtre chip ni recherche), pour alimenter les chips. */
  private get tousGroupes(): DomaineGroup[] {
    return this.buildGroupes(
      this.data?.par_formation.acquises ?? [],
      this.data?.domaine_user ?? null,
      '',       // pas de filtre recherche pour les chips
      null,     // pas de filtre domaine
    );
  }

  /** Domaines disponibles pour les chips (hors domaine principal),
   *  triés par nombre de compétences décroissant. */
  get domainesDisponibles(): DomaineDB[] {
    const domaineUserId = this.data?.domaine_user?.id;
    return this.tousGroupes
      .filter(g => !g.isPrimary)
      .sort((a, b) => b.competences.length - a.competences.length)
      .map(g => g.domaine);
  }

  /** Groupe brut du domaine principal (pour le chip avec son count). */
  get groupePrincipalBrut(): DomaineGroup | null {
    return this.tousGroupes.find(g => g.isPrimary) ?? null;
  }

  /** Nb compétences pour un domaine donné (affiché dans le badge chip). */
  getNbCompetencesDomaine(domaineId: number): number {
    return this.tousGroupes.find(g => g.domaine.id === domaineId)
      ?.competences.length ?? 0;
  }

  setDomaineFiltre(id: number | null): void {
    this.domaineFiltre = id;
  }

  // ── Groupes finaux (avec filtre chip + recherche) ─────────────────────────

  get groupesFinaux(): DomaineGroup[] {
    return this.buildGroupes(
      this.data?.par_formation.acquises ?? [],
      this.data?.domaine_user ?? null,
      this.recherche,
      this.domaineFiltre,
    );
  }

  get hasGroupes(): boolean { return this.groupesFinaux.length > 0; }

  get totalDomainesBrut(): number { return this.tousGroupes.length; }

  // ── Builder central ───────────────────────────────────────────────────────
  // Toute la logique de regroupement est ici pour éviter la duplication.

  private buildGroupes(
    formations: CompetenceFormation[],
    domaineUser: DomaineDB | null,
    recherche: string,
    domaineFiltre: number | null,
  ): DomaineGroup[] {
    const q = recherche.toLowerCase().trim();

    // 1. Filtrage par recherche texte
    const formationsFiltrees = formations
      .map(f => ({
        ...f,
        competences: q
          ? f.competences.filter(c => c.toLowerCase().includes(q))
          : f.competences,
      }))
      .filter(f => f.competences.length > 0);

    // 2. Regroupement par domaine
    const map = new Map<number | 'autres', DomaineGroup>();

    for (const f of formationsFiltrees) {
      const key = f.domaine?.id ?? 'autres';

      if (!map.has(key)) {
        const domaine: DomaineDB = f.domaine ?? {
          id: 0, nom: 'Autres compétences',
          slug: 'autres', couleur: '#94a3b8', icone: 'isax-category',
        };
        map.set(key, {
          domaine,
          competences: [],
          formations:  [],
          isPrimary:   domaineUser ? domaine.id === domaineUser.id : false,
        });
      }

      const grp = map.get(key)!;
      grp.formations.push(f);
      const existing = new Set(grp.competences);
      f.competences.forEach(c => { if (!existing.has(c)) grp.competences.push(c); });
    }

    let groups = Array.from(map.values());

    // 3. Forcer isPrimary si non détecté
    if (domaineUser && !groups.some(g => g.isPrimary)) {
      const idx = groups.findIndex(g => g.domaine.id === domaineUser.id);
      if (idx >= 0) groups[idx].isPrimary = true;
    }

    // 4. Filtre chip domaine
    if (domaineFiltre !== null) {
      groups = groups.filter(g => g.domaine.id === domaineFiltre);
    }

    // 5. Tri : domaine principal en premier, puis pertinence (nb compétences desc)
    groups.sort((a, b) => {
      if (a.isPrimary && !b.isPrimary) return -1;
      if (!a.isPrimary && b.isPrimary) return  1;
      return b.competences.length - a.competences.length;
    });

    return groups;
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  getDomaineColor(domaine: DomaineDB, index = 0): string {
    return domaine.couleur ?? FALLBACK_COLORS[index % FALLBACK_COLORS.length];
  }

  getDomaineColorLight(domaine: DomaineDB, index = 0): string {
    return this.getDomaineColor(domaine, index) + '18';
  }

  getDomaineIcon(domaine: DomaineDB): string {
    return domaine.icone ?? 'isax-category';
  }

  allerVersFormation(formationId: number): void {
    this.router.navigate(['/courses/course-details-2', formationId]);
  }

  formatDateFr(dateStr: string | null): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    return `${d.getDate()} ${this.moisFr[d.getMonth()]} ${d.getFullYear()}`;
  }

  onRecherche(event: Event): void {
    this.recherche = (event.target as HTMLInputElement).value;
  }

  trackByDomaine(_: number, g: DomaineGroup): number { return g.domaine.id; }
  trackByDomaine2(_: number, d: DomaineDB): number   { return d.id; }
}