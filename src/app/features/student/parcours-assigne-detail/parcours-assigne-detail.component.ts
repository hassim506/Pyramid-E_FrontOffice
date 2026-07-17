import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { ProgressionService } from '../../../shared/service/progression/progression.service';
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
        if (url.includes(`/mes-parcours/${this.parcoursId}`) ||
            url.includes(`/parcours-assigne/${this.parcoursId}`)) {
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

    console.log(`📡 [ParcoursDetail #${this.parcoursId}] loadDetail() → getParcoursDetail() [ASSIGNE]`);

    // ✅ Pour les parcours ASSIGNÉS, utiliser getParcoursDetail qui charge la progression réelle
    this.formationsService.getParcoursDetail(this.parcoursId).subscribe({
      next: (res: any) => {
        console.log(`✅ [ParcoursDetail #${this.parcoursId}] getParcoursDetail réponse:`, res);

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

        // ✅ IMPORTANT: Parcours assigné = toutes formations inscrites automatiquement
        // Ajouter est_inscrit=true pour masquer les boutons "Demander"
        this.formations = this.formations.map(f => ({
          ...f,
          est_inscrit: true,  // Formations accessibles via le parcours assigné
          peut_demander: false // Pas besoin de demander (déjà dans le parcours)
        }));

        console.log(`📋 [ParcoursDetail #${this.parcoursId}] ${this.formations.length} formations chargées (assigné)`);

        this._syncFormationsDepuisService();
        this.loading = false;
      },
      error: (err) => {
        console.error(`❌ [ParcoursDetail #${this.parcoursId}] Erreur getParcoursDetail:`, err);
        this.error   = 'Impossible de charger le parcours. Vérifiez que vous y avez accès.';
        this.loading = false;
      }
    });
  }


  refreshProgressions(): void {
    this.formationsService.getParcoursDetail(this.parcoursId).subscribe({
      next: (res: any) => {
        this.formations          = res.formations           ?? [];
        this.progressionGlobale  = res.progression          ?? 0;
        this.totalFormations     = res.total_formations     ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;
        this.estTermine          = res.est_termine          ?? false;

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

    // ✅ Progression globale = MOYENNE pondérée des progressions individuelles
    // Ainsi 3 formations à 33% / 11% / 50% donnent (33+11+50)/3 = 31% globaux
    // et non 0% parce qu'aucune n'est entièrement terminée
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

  goBack(): void { this.router.navigate(['/student/mes-parcours-assignes']); }

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
