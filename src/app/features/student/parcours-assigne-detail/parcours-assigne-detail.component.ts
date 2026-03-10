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

  // ── Progression ────────────────────────────────────────────
  progressionGlobale    = 0;
  totalFormations       = 0;
  formationsTerminees   = 0;

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

    // ✅ Recharger les progressions à chaque retour sur cette page
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

  loadDetail(): void {
    this.loading = true;
    this.formationsService.getMesParcoursAssignes().subscribe({
      next: (res: any) => {
        const all     = res.parcours ?? [];
        this.parcours = all.find((p: any) => p.id === this.parcoursId) ?? null;

        if (!this.parcours) {
          this.error   = 'Parcours introuvable ou non assigné';
          this.loading = false;
          return;
        }
        this.loadFormations();
      },
      error: () => {
        this.error   = 'Impossible de charger le parcours';
        this.loading = false;
      }
    });
  }

  // ✅ Chargement initial avec loader
  loadFormations(): void {
    this.formationsService.getParcoursProgression(this.parcoursId).subscribe({
      next: (res: any) => {
        this.formations          = res.formations          ?? [];
        this.progressionGlobale  = res.progression_globale ?? 0;
        this.totalFormations     = res.total_formations    ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;
        this.loading             = false;
      },
      error: () => {
        // Fallback sur l'ancienne méthode
        this.formationsService.getFormationsDuParcoursParCategorie(
          this.parcoursId,
          this.parcours.categorie_id
        ).subscribe({
          next:  (res: any) => { this.formations = res.formations ?? []; this.loading = false; },
          error: ()         => { this.formations = []; this.loading = false; }
        });
      }
    });
  }

  // ✅ Refresh silencieux — pas de loader, juste mise à jour des données
  refreshProgressions(): void {
    this.formationsService.getParcoursProgression(this.parcoursId).subscribe({
      next: (res: any) => {
        this.formations          = res.formations          ?? [];
        this.progressionGlobale  = res.progression_globale ?? 0;
        this.totalFormations     = res.total_formations    ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;
      },
      error: () => {} // silencieux
    });
  }

  // ── Navigation ─────────────────────────────────────────────
  goToFormation(formationId: number): void {
    this.router.navigate(['/courses/course-details-2', formationId], {
      state: {
        fromPage:     'parcours',
        fromParcours: true,
        parcoursId:   this.parcoursId,
      }
    });
  }

 // ✅ Corrigé
commencerFormation(formationId: number, event: Event): void {
  event.stopPropagation();
  this.router.navigate(['/student/lecture-formation', formationId], {
    state: {
      fromPage:  'parcours',
      parcoursId: this.parcoursId,
    }
  });
}

  goBack(): void {
    this.router.navigate(['/student/students-parcours']);
  }

  // ── Helpers progression ────────────────────────────────────
  getStatutLabel(statut: string): string {
    return ({
      termine:      '✅ Terminé',
      en_cours:     '▶ En cours',
      non_commence: '○ À commencer',
    } as any)[statut] ?? '○ À commencer';
  }

  getStatutClass(statut: string): string {
    return ({
      termine:      'pad-statut--done',
      en_cours:     'pad-statut--ongoing',
      non_commence: 'pad-statut--todo',
    } as any)[statut] ?? 'pad-statut--todo';
  }

  getProgressionColor(statut: string): string {
    return ({
      termine:      '#16a34a',
      en_cours:     '#069b8f',
      non_commence: '#e5e7eb',
    } as any)[statut] ?? '#e5e7eb';
  }

  // ── Helpers expiration ─────────────────────────────────────
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

  getNiveauClass(niveau: string): string {
    return ({
      debutant:      'niveau-debutant',
      intermediaire: 'niveau-inter',
      avance:        'niveau-avance',
    } as any)[niveau] ?? '';
  }
}