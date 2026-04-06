import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

export interface DomaineDB {
  id: number; nom: string; slug?: string; couleur: string | null; icone: string | null;
}

export interface FormationEcart {
  formation_id: number;
  formation_titre: string;
  competences: string[];
}

export interface DomaineGroupEcart {
  domaine: DomaineDB;
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

const FALLBACK_COLORS = [
  '#4f46e5','#059669','#db2777','#ea580c',
  '#0284c7','#0d9488','#64748b','#7c3aed',
];

@Component({
  selector: 'app-ecart-competences',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ecart-competences.component.html',
  styleUrl: './ecart-competences.component.scss',
})
export class EcartCompetencesComponent implements OnInit {

  loading = true;
  error   = '';
  data: EcartData | null = null;
  recherche = '';

  /** Chip domaine actif — null = tous les domaines */
  domaineFiltre: number | null = null;

  constructor(private formationsService: FormationsService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.error   = '';
    this.formationsService.getEcartCompetences().subscribe({
      next:  (res: any) => { this.data = res; this.loading = false; },
      error: ()         => { this.error = 'Impossible de charger l\'écart de compétences.'; this.loading = false; },
    });
  }

  // ── Domaine utilisateur ───────────────────────────────────────────────────

  get domaineUser(): DomaineDB | null {
    return this.data?.domaine_user ?? null;
  }

  get groupeDomaineUser(): DomaineGroupEcart | null {
    if (!this.domaineUser) return null;
    return this.data?.par_domaine.find(g => g.domaine.id === this.domaineUser!.id) ?? null;
  }

  // ── Chips ─────────────────────────────────────────────────────────────────

  /** Domaines affichables en chips (hors domaine principal),
   *  triés par pertinence décroissante. */
  get domainesDisponibles(): DomaineDB[] {
    const groupes     = this.data?.par_domaine ?? [];
    const userDomaineId = this.domaineUser?.id;
    return groupes
      .filter(g => g.domaine.id !== userDomaineId)
      .sort((a, b) => b.competences.length - a.competences.length)
      .map(g => g.domaine);
  }

  /** Nb compétences en écart pour un domaine — affiché dans le badge du chip. */
  getNbEcartDomaine(domaineId: number): number {
    return this.data?.par_domaine.find(g => g.domaine.id === domaineId)
      ?.competences.length ?? 0;
  }

  setDomaineFiltre(id: number | null): void {
    this.domaineFiltre = id;
  }

  /** Le bloc domaine principal doit-il s'afficher selon le chip actif ? */
  get showDomainePrincipal(): boolean {
    if (!this.domaineUser) return false;
    if (this.domaineFiltre === null) return true;
    return this.domaineFiltre === this.domaineUser.id;
  }

  // ── Groupes grille (hors domaine principal) ───────────────────────────────
  // Pipeline : 1) exclure domaine principal  2) filtre chip
  //            3) tri pertinence             4) filtre recherche texte

  get groupesSansDomainePrincipal(): DomaineGroupEcart[] {
    const groupes     = this.data?.par_domaine ?? [];
    const userDomaineId = this.domaineUser?.id;

    // 1. Exclure domaine principal
    let filtered = userDomaineId
      ? groupes.filter(g => g.domaine.id !== userDomaineId)
      : [...groupes];

    // 2. Filtre chip
    if (this.domaineFiltre !== null) {
      filtered = filtered.filter(g => g.domaine.id === this.domaineFiltre);
    }

    // 3. Tri pertinence
    filtered = [...filtered].sort((a, b) => b.competences.length - a.competences.length);

    // 4. Recherche texte
    if (!this.recherche.trim()) return filtered;
    const q = this.recherche.toLowerCase();
    return filtered
      .map(g => ({
        ...g,
        competences: g.competences.filter(c => c.toLowerCase().includes(q)),
        formations:  g.formations.map(f => ({
          ...f,
          competences: f.competences.filter(c => c.toLowerCase().includes(q)),
        })).filter(f => f.competences.length > 0),
      }))
      .filter(g => g.competences.length > 0);
  }

  get groupesFiltres(): DomaineGroupEcart[] {
    const groupes = this.data?.par_domaine ?? [];
    if (!this.recherche.trim() && this.domaineFiltre === null) return groupes;

    let filtered = [...groupes];
    if (this.domaineFiltre !== null) {
      filtered = filtered.filter(g => g.domaine.id === this.domaineFiltre);
    }
    if (!this.recherche.trim()) return filtered;
    const q = this.recherche.toLowerCase();
    return filtered
      .map(g => ({
        ...g,
        competences: g.competences.filter(c => c.toLowerCase().includes(q)),
        formations:  g.formations.map(f => ({
          ...f,
          competences: f.competences.filter(c => c.toLowerCase().includes(q)),
        })).filter(f => f.competences.length > 0),
      }))
      .filter(g => g.competences.length > 0);
  }

  get hasGroupes(): boolean { return this.groupesFiltres.length > 0; }

  // ── Stats ─────────────────────────────────────────────────────────────────

  get tauxProgression(): number {
    if (!this.data) return 0;
    const visees = this.data.total_acquises + this.data.total_ecart;
    if (visees === 0) return 100;
    return Math.round((this.data.total_acquises / visees) * 100);
  }

  get totalDomaines(): number {
    return this.data?.par_domaine?.length ?? 0;
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  getColor(domaine: DomaineDB, i = 0): string {
    return domaine.couleur ?? FALLBACK_COLORS[i % FALLBACK_COLORS.length];
  }

  getColorLight(domaine: DomaineDB, i = 0): string {
    return this.getColor(domaine, i) + '18';
  }

  getIcon(domaine: DomaineDB): string {
    return domaine.icone ?? 'isax-category';
  }

  onRecherche(e: Event): void {
    this.recherche = (e.target as HTMLInputElement).value;
  }

  trackBy(_: number, g: DomaineGroupEcart): number { return g.domaine.id; }
  trackByDomaine(_: number, d: DomaineDB): number  { return d.id; }
}