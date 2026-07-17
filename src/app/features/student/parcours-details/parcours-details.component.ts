import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { ProgressionService } from '../../../shared/service/progression/progression.service';
import { Subscription, filter } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-parcours-details',
  imports: [CommonModule],
  templateUrl: './parcours-details.component.html',
  styleUrls: ['./parcours-details.component.scss'],
})
export class ParcoursDetailsComponent implements OnInit, OnDestroy {

  parcoursId!:          number;
  parcours:             any    = null;
  formations:           any[]  = [];
  loading               = true;
  error                 = '';

  progressionGlobale    = 0;
  totalFormations       = 0;
  formationsTerminees   = 0;
  estTermine            = false;
  source                = 'demande';

  filtreStatut: 'tous' | 'termine' | 'en_cours' | 'non_commence' = 'tous';

  private routerSub?:      Subscription;
  private progressionSub?: Subscription;

  private _visibilityHandler = () => {
    if (document.visibilityState === 'visible') {
      this.refreshProgressions();
    }
  };

  constructor(
    private route:              ActivatedRoute,
    private router:             Router,
    private formationsService:  FormationService,
    public  progressionService: ProgressionService
  ) {}

  ngOnInit(): void {
    this.parcoursId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.parcoursId) {
      this.error   = 'Parcours introuvable';
      this.loading = false;
      return;
    }

    this.loadDetail();

    this.progressionSub = this.progressionService.change$.subscribe(() => {
      this._syncFormationsDepuisService();
    });

    this.routerSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const url = e.urlAfterRedirects || e.url;
        if (url.includes(`/parcours-details/${this.parcoursId}`)) {
          this.refreshProgressions();
        }
      });

    document.addEventListener('visibilitychange', this._visibilityHandler);
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.progressionSub?.unsubscribe();
    document.removeEventListener('visibilitychange', this._visibilityHandler);
  }

  loadDetail(): void {
    this.loading = true;
    this.error   = '';

    this.formationsService.getParcoursFormationsWithStatus(this.parcoursId).subscribe({
      next: (res: any) => {
        this.parcours            = res.parcours             ?? null;
        this.formations          = res.formations           ?? [];
        this.progressionGlobale  = res.progression          ?? 0;
        this.totalFormations     = res.total_formations     ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;
        this.estTermine          = res.est_termine          ?? false;
        this.source              = res.source               ?? 'demande';

        if (this.parcours) {
          this.parcours.nombre_formations = this.totalFormations;
        }

        this._syncFormationsDepuisService();
        this.loading = false;
      },
      error: () => {
        this.error   = 'Impossible de charger le parcours.';
        this.loading = false;
      }
    });
  }

  refreshProgressions(): void {
    // Rafraîchir depuis le nouvel endpoint
    this.formationsService.getParcoursFormationsWithStatus(this.parcoursId).subscribe({
      next: (res: any) => {
        this.formations          = res.formations           ?? [];
        this.progressionGlobale  = res.progression          ?? 0;
        this.totalFormations     = res.total_formations     ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;
        this.estTermine          = res.est_termine          ?? false;
        this._syncFormationsDepuisService();
      },
      error: () => {}
    });
  }

  private _syncFormationsDepuisService(): void {
    if (!this.formations.length) return;

    let terminees         = 0;
    let sommeProgressions = 0;

    this.formations = this.formations.map(f => {
      const percentService = this.progressionService.getPercent(f.id, this.parcoursId);
      const progression    = percentService > 0 ? percentService : (f.progression ?? 0);
      const statut         = progression >= 100 ? 'termine'
                           : progression > 0    ? 'en_cours'
                           : (f.statut_formation ?? 'non_commence');

      if (statut === 'termine') terminees++;
      sommeProgressions += progression;

      return { ...f, progression, statut_formation: statut, est_terminee: progression >= 100 };
    });

    const total = this.formations.length;
    if (total === 0) return;

    const progressionMoyenne = Math.round(sommeProgressions / total);

    if (progressionMoyenne > this.progressionGlobale) {
      this.progressionGlobale = progressionMoyenne;
    }
    this.formationsTerminees = terminees;
    this.estTermine          = this.progressionGlobale >= 100;
  }

  get estExpire(): boolean {
    if (this.estTermine) return false;
    if (!this.parcours?.date_expiration) return false;
    return new Date(this.parcours.date_expiration) < new Date();
  }

  isExpiringSoon(dateExpiration: string | null): boolean {
    if (!dateExpiration) return false;
    const today = new Date();
    const expiration = new Date(dateExpiration);
    const diffTime = expiration.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 && diffDays <= 7; // 7 jours ou moins
  }

  getJoursRestants(dateExpiration: string | null): number {
    if (!dateExpiration) return 0;
    const today = new Date();
    const expiration = new Date(dateExpiration);
    const diffTime = expiration.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  get formationsFiltrees(): any[] {
    if (this.filtreStatut === 'tous') return this.formations;
    return this.formations.filter(f => f.statut_formation === this.filtreStatut);
  }

  get countTerminees(): number   { return this.formations.filter(f => f.statut_formation === 'termine').length; }
  get countEnCours(): number     { return this.formations.filter(f => f.statut_formation === 'en_cours').length; }
  get countNonCommence(): number { return this.formations.filter(f => f.statut_formation === 'non_commence').length; }

  setFiltre(f: 'tous' | 'termine' | 'en_cours' | 'non_commence'): void { this.filtreStatut = f; }

  voirDetail(formationId: number, event: Event): void {
    event.stopPropagation();
    if (this.estExpire) return;
    this.router.navigate(['/courses/course-details', formationId], {
      state: { fromPage: 'parcours', parcoursId: this.parcoursId }
    });
  }

  commencerFormation(formationId: number, event: Event): void {
    event.stopPropagation();
    if (this.estExpire) return;
    this.openFormationInNewTab(formationId);
  }

  goToFormation(formationId: number): void {
    if (this.estExpire) return;
    this.openFormationInNewTab(formationId);
  }

  private openFormationInNewTab(formationId: number): void {
    const params: Record<string, string> = { fromPage: 'parcours' };
    if (this.parcoursId) params['parcoursId'] = String(this.parcoursId);
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/courses/course-watch', formationId], { queryParams: params })
    );
    window.open(url, '_blank');
  }

  goBack(): void { this.router.navigate(['/student/students-explorer']); }

  demanderFormation(formationId: number, event: Event): void {
    event.stopPropagation();
    // Rediriger vers l'explorer avec le modal de demande
    this.router.navigate(['/student/students-explorer'], {
      queryParams: { formationId: formationId }
    });
  }

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
    return ({ termine: 'Revoir', en_cours: 'Reprendre', non_commence: 'Commencer' } as any)[statut] ?? 'Commencer';
  }
  getImageUrl(path: string | null | undefined): string {
    return this.formationsService.getImageUrl(path);
  }
}
