import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { ProgressionService } from '../../../shared/service/progression/progression.service';
import { Subscription, filter } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-mes-catalogues-details',
  imports: [CommonModule],
  templateUrl: './mes-catalogues-details.component.html',
  styleUrls: ['./mes-catalogues-details.component.scss'],
})
export class MesCataloguesDetailsComponent implements OnInit, OnDestroy {

  catalogueId!:          number;
  catalogue:             any    = null;
  formations:           any[]  = [];
  loading               = true;
  error                 = '';

  progressionGlobale    = 0;
  totalFormations       = 0;
  formationsTerminees   = 0;
  estTermine            = false;
  source                = 'assigne';

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
    this.catalogueId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.catalogueId) {
      this.error   = 'Catalogue introuvable';
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
        if (url.includes(`/mes-catalogues/${this.catalogueId}`)) {
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

    this.formationsService.getCatalogueProgression(this.catalogueId).subscribe({
      next: (res: any) => {
        this.formations          = res.formations           ?? [];
        this.progressionGlobale  = res.progression_globale  ?? 0;
        this.totalFormations     = res.total_formations     ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;
        this.estTermine          = this.totalFormations > 0 && this.formationsTerminees >= this.totalFormations;

        this.formations = this.formations.map(f => ({
          ...f,
          est_inscrit: true,
          peut_demander: false
        }));

        this._loadCatalogueInfo();
        this._syncFormationsDepuisService();
        this.loading = false;
      },
      error: () => {
        this.error   = 'Impossible de charger le catalogue. Vérifiez que vous y avez accès.';
        this.loading = false;
      }
    });
  }

  private _loadCatalogueInfo(): void {
    this.formationsService.getCatalogueDetail(this.catalogueId).subscribe({
      next: (res: any) => {
        this.catalogue = res.catalogue ?? res;
        this.source    = this.catalogue?.source ?? 'assigne';
      },
      error: () => {}
    });
  }

  refreshProgressions(): void {
    this.formationsService.getCatalogueProgression(this.catalogueId).subscribe({
      next: (res: any) => {
        this.formations          = res.formations           ?? [];
        this.progressionGlobale  = res.progression_globale  ?? 0;
        this.totalFormations     = res.total_formations     ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;
        this.estTermine          = this.totalFormations > 0 && this.formationsTerminees >= this.totalFormations;

        this.formations = this.formations.map(f => ({
          ...f,
          est_inscrit: true,
          peut_demander: false
        }));

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
      const percentService = this.progressionService.getPercent(f.id, null, this.catalogueId);
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
    if (!this.catalogue?.date_expiration) return false;
    return new Date(this.catalogue.date_expiration) < new Date();
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
      state: { fromPage: 'catalogue', catalogueId: this.catalogueId }
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
    const params: Record<string, string> = { fromPage: 'catalogue' };
    if (this.catalogueId) params['catalogueId'] = String(this.catalogueId);
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/courses/course-watch', formationId], { queryParams: params })
    );
    window.open(url, '_blank');
  }

  goBack(): void { this.router.navigate(['/student/mes-catalogues']); }

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

  getImageUrl(path: string | null | undefined): string {
    return this.formationsService.getImageUrl(path);
  }
}
