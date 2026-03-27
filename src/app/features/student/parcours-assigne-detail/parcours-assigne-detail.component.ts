import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';
import { Subscription, filter } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-parcours-assigne-detail',
  imports: [CommonModule],
  templateUrl: './parcours-assigne-detail.component.html',
  styleUrls: ['./parcours-assigne-detail.component.scss'],
})
export class ParcoursAssigneDetailComponent implements OnInit, OnDestroy {

  parcoursId!:          number;
  parcours:             any    = null;
  formations:           any[]  = [];
  loading               = true;
  error                 = '';

  // ── Progression ───────────────────────────────────────────
  progressionGlobale    = 0;
  totalFormations       = 0;
  formationsTerminees   = 0;
  estTermine            = false;
  source                = 'assigne';

  // ── Filtre local ──────────────────────────────────────────
  filtreStatut: 'tous' | 'termine' | 'en_cours' | 'non_commence' = 'tous';

  private routerSub?: Subscription;

  constructor(
    private route:             ActivatedRoute,
    private router:            Router,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    this.parcoursId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.parcoursId) {
      this.error   = 'Parcours introuvable';
      this.loading = false;
      return;
    }
    this.loadDetail();

    this.routerSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const url = e.urlAfterRedirects || e.url;
        if (url.includes('parcours') && url.includes(String(this.parcoursId))) {
          this.refreshProgressions();
        }
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  // ── Chargement principal ──────────────────────────────────
  loadDetail(): void {
    this.loading = true;
    this.error   = '';

    this.formationsService.getParcoursDetail(this.parcoursId).subscribe({
      next: (res: any) => {
        this.parcours            = res.parcours             ?? null;
        this.formations          = res.formations           ?? [];
        this.progressionGlobale  = res.progression          ?? 0;
        this.totalFormations     = res.total_formations     ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;
        this.estTermine          = res.est_termine          ?? false;
        this.source              = res.source               ?? 'assigne';

        if (this.parcours) {
          this.parcours.date_assignation = res.date_assignation ?? null;
          this.parcours.date_expiration  = res.date_expiration  ?? null;
          this.parcours.statut           = res.statut           ?? 'actif';
        }

        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur loadDetail parcours', err);
        this.error   = 'Impossible de charger le parcours. Vérifiez que vous y avez accès.';
        this.loading = false;
      }
    });
  }

  // ── Refresh silencieux ────────────────────────────────────
  refreshProgressions(): void {
    this.formationsService.getParcoursDetail(this.parcoursId).subscribe({
      next: (res: any) => {
        this.formations          = res.formations           ?? [];
        this.progressionGlobale  = res.progression          ?? 0;
        this.totalFormations     = res.total_formations     ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;
        this.estTermine          = res.est_termine          ?? false;
      },
      error: () => {}
    });
  }

  // ── Expiration ─────────────────────────────────────────────

  /** Vrai si le parcours est expiré (date dépassée ET pas terminé) */
  get estExpire(): boolean {
    if (this.estTermine) return false;
    if (!this.parcours?.date_expiration) return false;
    return new Date(this.parcours.date_expiration) < new Date();
  }

  // ── Formations filtrées ───────────────────────────────────
  get formationsFiltrees(): any[] {
    if (this.filtreStatut === 'tous') return this.formations;
    return this.formations.filter(f => f.statut_formation === this.filtreStatut);
  }

  get countTerminees(): number   { return this.formations.filter(f => f.statut_formation === 'termine').length; }
  get countEnCours(): number     { return this.formations.filter(f => f.statut_formation === 'en_cours').length; }
  get countNonCommence(): number { return this.formations.filter(f => f.statut_formation === 'non_commence').length; }

  setFiltre(f: 'tous' | 'termine' | 'en_cours' | 'non_commence'): void {
    this.filtreStatut = f;
  }

  // ── Navigation ────────────────────────────────────────────

  /**
   * Tunnel : students-parcours → parcours-assigne/:id → course-details-2
   * On passe fromPage + parcoursId pour que le retour revienne ici
   */
  voirDetail(formationId: number, event: Event): void {
    event.stopPropagation();
    if (this.estExpire) return;
    this.router.navigate(['/courses/course-details-2', formationId], {
      state: {
        fromPage:  'parcours',
        parcoursId: this.parcoursId,
      }
    });
  }

  commencerFormation(formationId: number, event: Event): void {
    event.stopPropagation();
    if (this.estExpire) return;
    this.router.navigate(['/student/lecture-formation', formationId], {
      state: {
        fromPage:  'parcours',
        parcoursId: this.parcoursId,
      }
    });
  }

  goToFormation(formationId: number): void {
    if (this.estExpire) return;
    this.router.navigate(['/student/lecture-formation', formationId], {
      state: {
        fromPage:  'parcours',
        parcoursId: this.parcoursId,
      }
    });
  }

  /**
   * Retour vers la liste des parcours
   * Tunnel : students-parcours → parcours-assigne/:id
   */
  goBack(): void {
    this.router.navigate(['/student/mes-parcours-assignes']);
  }

  // ── Helpers statut ────────────────────────────────────────
  getStatutLabel(statut: string): string {
    return ({ termine: 'Terminé', en_cours: 'En cours', non_commence: 'À commencer' } as any)[statut] ?? 'À commencer';
  }

  getStatutClass(statut: string): string {
    return ({ termine: 'pad-statut--done', en_cours: 'pad-statut--ongoing', non_commence: 'pad-statut--todo' } as any)[statut] ?? 'pad-statut--todo';
  }

  getProgressionColor(statut: string): string {
    return ({ termine: '#16a34a', en_cours: '#069b8f', non_commence: '#e5e7eb' } as any)[statut] ?? '#e5e7eb';
  }

  getNiveauClass(niveau: string): string {
    return ({ debutant: 'niveau-debutant', intermediaire: 'niveau-inter', avance: 'niveau-avance' } as any)[niveau] ?? '';
  }

  getCTALabel(statut: string): string {
    return ({ termine: 'Revoir', en_cours: 'Continuer', non_commence: 'Commencer' } as any)[statut] ?? 'Commencer';
  }

  // ── Helpers expiration ────────────────────────────────────
  isExpiringSoon(dateExpiration: string | null): boolean {
    if (!dateExpiration) return false;
    const diff = new Date(dateExpiration).getTime() - new Date().getTime();
    return diff > 0 && diff < 7 * 24 * 60 * 60 * 1000;
  }

  getJoursRestants(dateExpiration: string | null): number | null {
    if (!dateExpiration) return null;
    const diff = new Date(dateExpiration).getTime() - new Date().getTime();
    return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0;
  }
}