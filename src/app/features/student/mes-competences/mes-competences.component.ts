import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

interface CompetenceFormation {
  formation_id:    number;
  formation_titre: string;
  image:           string | null;
  progression:     number;
  competences:     string[];
  nb_competences:  number;
  date_fin:        string | null;
}

interface CompetencesStats {
  total_acquises:       number;
  total_en_cours:       number;
  total_possible:       number;
  taux_maitrise:        number;
  formations_terminees: number;
  formations_en_cours:  number;
}

interface CompetencesData {
  stats:               CompetencesStats;
  competences_a_plat:  string[];
  par_formation: {
    acquises: CompetenceFormation[];
    en_cours: CompetenceFormation[];
  };
}

@Component({
  selector:    'app-mes-competences',
  standalone:  true,
  imports:     [CommonModule, RouterModule],
  templateUrl: './mes-competences.component.html',
  styleUrl:    './mes-competences.component.scss',
})
export class MesCompetencesComponent implements OnInit {

  loading = true;
  error   = '';
  data:   CompetencesData | null = null;

  recherche = '';
  vue: 'liste' | 'formation' = 'formation';

  // Labels mois en français
  private moisFr = ['janvier','février','mars','avril','mai','juin',
                    'juillet','août','septembre','octobre','novembre','décembre'];

  constructor(
    private formationsService: FormationsService,
    private router: Router
  ) {}

  ngOnInit(): void { this.loadCompetences(); }

  loadCompetences(): void {
    this.loading = true;
    this.error   = '';
    this.formationsService.getMesCompetences().subscribe({
      next: (res: any) => { this.data = res; this.loading = false; },
      error: () => { this.error = 'Impossible de charger les compétences.'; this.loading = false; }
    });
  }

  // ── Getters ────────────────────────────────────────────
  get stats(): CompetencesStats | null { return this.data?.stats ?? null; }

  get competencesAcquises(): string[] {
    const all = this.data?.competences_a_plat ?? [];
    if (!this.recherche.trim()) return all;
    return all.filter(c => c.toLowerCase().includes(this.recherche.toLowerCase()));
  }

  get formationsAcquises(): CompetenceFormation[] { return this.data?.par_formation.acquises ?? []; }
  get formationsEnCours(): CompetenceFormation[]  { return this.data?.par_formation.en_cours  ?? []; }
  get hasEnCours(): boolean                        { return this.formationsEnCours.length > 0; }

  // ── Navigation vers formation ──────────────────────────
 // Après
allerVersFormation(formationId: number, statut: 'termine' | 'en_cours'): void {
  if (statut === 'en_cours') {
    this.router.navigate(['/student/lecture-formation', formationId]);
  } else {
    this.router.navigate(['/courses/course-details-2', formationId]);
  }
}

  // ── Date acquisition en français ──────────────────────
  formatDateFr(dateStr: string | null): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    return `${d.getDate()} ${this.moisFr[d.getMonth()]} ${d.getFullYear()}`;
  }

  // ── Helpers ────────────────────────────────────────────
  getProgressionColor(v: number): string {
    if (v >= 75) return '#10b981';
    if (v >= 40) return '#f59e0b';
    return '#ef4444';
  }

  setVue(v: 'liste' | 'formation'): void { this.vue = v; }

  onRecherche(event: Event): void {
    this.recherche = (event.target as HTMLInputElement).value;
  }
}