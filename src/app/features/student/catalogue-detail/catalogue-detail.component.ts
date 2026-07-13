// filepath: src/app/student/catalogue-detail/catalogue-detail.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription, filter } from 'rxjs';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { ProgressionService } from '../../../shared/service/progression/progression.service';

@Component({
  standalone: true,
  selector: 'app-catalogue-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogue-detail.component.html',
  styleUrls: ['./catalogue-detail.component.scss'],
})
export class CatalogueDetailComponent implements OnInit, OnDestroy {

  catalogueId:  number = 0;
  catalogue:    any    = null;
  formations:   any[]  = [];
  loading              = true;
  error                = '';

  source     = 'assigne';
  badgeLabel = 'Assigné';

  dateExpiration: string | null = null;

  progressionGlobale    = 0;
  totalFormations       = 0;
  formationsTerminees   = 0;

  searchQuery          = '';
  filteredFormations:  any[] = [];

  currentPage          = 1;
  pageSize             = 6;
  totalPages           = 0;
  paginatedFormations: any[] = [];

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

    console.log(`🚀 [CatalogueDetail] ngOnInit → catalogueId=${this.catalogueId}`);

    if (!this.catalogueId) {
      this.error   = 'Catalogue introuvable';
      this.loading = false;
      return;
    }

    this.loadCatalogueDetail();

    // ✅ Écouter le service — met à jour cartes + barre globale en temps réel
    //    On passe catalogueId pour que le contexte soit isolé
    this.progressionSub = this.progressionService.change$.subscribe((map) => {
      console.log(`🔔 [CatalogueDetail #${this.catalogueId}] ProgressionService.change$ émis | map.size=${map.size}`);

      // Vérifier si les données concernent ce catalogue
      const relevantKeys = [...map.keys()].filter(k => k.includes(`_null_${this.catalogueId}`));
      console.log(`🔍 [CatalogueDetail #${this.catalogueId}] Clés pertinentes dans le cache:`, relevantKeys);

      this._syncFormationsDepuisService();
    });

    // ✅ Rafraîchir depuis l'API quand on revient sur cette page
    this.routerSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const url = e.urlAfterRedirects || e.url;
        console.log(`🧭 [CatalogueDetail #${this.catalogueId}] NavigationEnd → ${url}`);
        if (url.includes(`/catalogue-detail/${this.catalogueId}`)) {
          console.log(`🔄 [CatalogueDetail #${this.catalogueId}] Retour sur la page → refreshProgressions()`);
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

  // ── Expiration ─────────────────────────────────────────────
  get estExpire(): boolean {
    if (!this.dateExpiration) return false;
    return new Date(this.dateExpiration) < new Date();
  }

  // ── Chargement ────────────────────────────────────────────
  loadCatalogueDetail(): void {
    this.loading = true;

    console.log(`📡 [CatalogueDetail #${this.catalogueId}] loadCatalogueDetail() → getMesCataloguesAssignes()`);

    this.formationsService.getMesCataloguesAssignes().subscribe({
      next: (res: any) => {
        const all  = res.catalogues ?? [];
        const meta = all.find((c: any) => c.id === this.catalogueId);

        console.log(`✅ [CatalogueDetail #${this.catalogueId}] Meta catalogue trouvé:`, meta);

        this.source         = meta?.source         ?? 'assigne';
        this.badgeLabel     = meta?.badge_label     ?? 'Assigné';
        this.dateExpiration = meta?.date_expiration ?? null;

        console.log(`📋 [CatalogueDetail #${this.catalogueId}] source=${this.source} | dateExpiration=${this.dateExpiration}`);

        this.loadFormations();
      },
      error: (err) => {
        console.error(`❌ [CatalogueDetail #${this.catalogueId}] Erreur getMesCataloguesAssignes:`, err);
        this.error   = 'Impossible de charger le catalogue';
        this.loading = false;
      }
    });
  }

  loadFormations(): void {
    console.log(`📡 [CatalogueDetail #${this.catalogueId}] loadFormations() → getCatalogueProgression()`);

    this.formationsService.getCatalogueProgression(this.catalogueId).subscribe({
      next: (res: any) => {
        console.log(`✅ [CatalogueDetail #${this.catalogueId}] getCatalogueProgression réponse:`, res);
        console.log(`📊 [CatalogueDetail #${this.catalogueId}] progression_globale=${res.progression_globale} | formations_terminees=${res.formations_terminees} | total=${res.total_formations}`);

        if (res.formations?.length) {
          console.log(`🔍 [CatalogueDetail #${this.catalogueId}] Formations reçues (${res.formations.length}):`,
            res.formations.map((f: any) => ({
              id: f.id, titre: f.titre, progression: f.progression, statut: f.statut_formation
            }))
          );
        }

        this.formations          = res.formations           ?? [];
        this.progressionGlobale  = res.progression_globale  ?? 0;
        this.totalFormations     = res.total_formations     ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;

        this.formationsService.getCatalogueDetail(this.catalogueId).subscribe({
          next: (r: any) => {
            console.log(`✅ [CatalogueDetail #${this.catalogueId}] getCatalogueDetail réponse:`, r?.catalogue);

            this.catalogue = r.catalogue;
            this._applySearchAndPaginate();

            // ✅ Synchroniser avec le cache service — contexte catalogue isolé
            this._syncFormationsDepuisService();
            this.loading = false;
          },
          error: (err) => {
            console.error(`❌ [CatalogueDetail #${this.catalogueId}] Erreur getCatalogueDetail:`, err);
            this.loading = false;
          }
        });
      },
      error: (err) => {
        console.warn(`⚠️ [CatalogueDetail #${this.catalogueId}] getCatalogueProgression échec, fallback getCatalogueDetail:`, err);

        this.formationsService.getCatalogueDetail(this.catalogueId).subscribe({
          next: (r: any) => {
            console.log(`✅ [CatalogueDetail #${this.catalogueId}] Fallback getCatalogueDetail réponse:`, r);

            this.catalogue  = r.catalogue;
            this.formations = r.formations ?? [];
            this._applySearchAndPaginate();
            this._syncFormationsDepuisService();
            this.loading = false;
          },
          error: (err2) => {
            console.error(`❌ [CatalogueDetail #${this.catalogueId}] Fallback ERREUR:`, err2);
            this.error = 'Catalogue introuvable';
            this.loading = false;
          }
        });
      }
    });
  }

  // ── Refresh silencieux depuis l'API ───────────────────────
  refreshProgressions(): void {
    console.log(`🔄 [CatalogueDetail #${this.catalogueId}] refreshProgressions() → appel API...`);

    this.formationsService.getCatalogueProgression(this.catalogueId).subscribe({
      next: (res: any) => {
        console.log(`✅ [CatalogueDetail #${this.catalogueId}] refreshProgressions réponse:`, {
          progression_globale:  res.progression_globale,
          formations_terminees: res.formations_terminees,
          total_formations:     res.total_formations,
          formations: res.formations?.map((f: any) => ({ id: f.id, progression: f.progression, statut: f.statut_formation }))
        });

        this.formations          = res.formations           ?? [];
        this.progressionGlobale  = res.progression_globale  ?? 0;
        this.totalFormations     = res.total_formations     ?? 0;
        this.formationsTerminees = res.formations_terminees ?? 0;
        this._applySearchAndPaginate();
        this._syncFormationsDepuisService();
      },
      error: (err) => {
        console.error(`❌ [CatalogueDetail #${this.catalogueId}] refreshProgressions ERREUR:`, err);
      }
    });
  }

  // ✅ Synchronisation formations + barre globale depuis le ProgressionService
  //    CONTEXTE CATALOGUE : parcoursId = null, catalogueId = this.catalogueId
  //    → clé "formationId_null_catalogueId" — totalement isolé des autres contextes
  private _syncFormationsDepuisService(): void {
    if (!this.formations.length) {
      console.log(`⚠️ [CatalogueDetail #${this.catalogueId}] _syncFormationsDepuisService — formations vide, skip`);
      return;
    }

    console.log(`🧮 [CatalogueDetail #${this.catalogueId}] _syncFormationsDepuisService — début sync pour ${this.formations.length} formations`);

    let terminees         = 0;
    let sommeProgressions = 0;

    this.formations = this.formations.map(f => {
      // ✅ CONTEXTE CATALOGUE : parcoursId=null, catalogueId=this.catalogueId
      const percentService = this.progressionService.getPercent(f.id, null, this.catalogueId);
      const progression    = percentService > 0 ? percentService : (f.progression ?? 0);
      const statut         = progression >= 100 ? 'termine'
                           : progression > 0    ? 'en_cours'
                           : (f.statut_formation ?? 'non_commence');

      console.log(`  📦 [Formation #${f.id} "${f.titre}"] getPercent(${f.id}, null, ${this.catalogueId})=${percentService}% | API=${f.progression}% | final=${progression}% | statut=${statut}`);

      if (statut === 'termine') terminees++;
      sommeProgressions += progression;

      return { ...f, progression, statut_formation: statut, est_terminee: progression >= 100 };
    });

    const total = this.formations.length;
    if (total === 0) return;

    // ✅ Progression globale = MOYENNE (cohérent avec parcours)
    const progressionMoyenne = Math.round(sommeProgressions / total);

    console.log(`📈 [CatalogueDetail #${this.catalogueId}] Progression globale: somme=${sommeProgressions} / ${total} = ${progressionMoyenne}% | API=${this.progressionGlobale}% | final=${Math.max(this.progressionGlobale, progressionMoyenne)}%`);

    if (progressionMoyenne > this.progressionGlobale) {
      this.progressionGlobale = progressionMoyenne;
    }
    this.formationsTerminees = terminees;

    console.log(`✅ [CatalogueDetail #${this.catalogueId}] Après sync: progressionGlobale=${this.progressionGlobale}% | formationsTerminees=${this.formationsTerminees}/${total}`);

    // Réappliquer la pagination avec les données mises à jour
    this._applySearchAndPaginate();
  }

  // ── Recherche + pagination ────────────────────────────────
  private _applySearchAndPaginate(): void {
    const q = this.searchQuery.trim().toLowerCase();
    this.filteredFormations = q
      ? this.formations.filter(f =>
          f.titre?.toLowerCase().includes(q) ||
          f.description?.toLowerCase().includes(q) ||
          f.short_description?.toLowerCase().includes(q)
        )
      : [...this.formations];
    this.totalPages  = Math.ceil(this.filteredFormations.length / this.pageSize);
    this.currentPage = 1;
    this.paginate();
  }

  onSearch(): void {
    this._applySearchAndPaginate();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this._applySearchAndPaginate();
  }

  paginate(): void {
    const start              = (this.currentPage - 1) * this.pageSize;
    this.paginatedFormations = this.filteredFormations.slice(start, start + this.pageSize);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginate();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // ── Navigation ────────────────────────────────────────────
  goToDetails(formationId: number): void {
    if (this.estExpire) return;
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/courses/course-details', formationId], {
        queryParams: { fromPage: 'catalogue', catalogueId: this.catalogueId }
      })
    );
    window.open(url, '_blank');
  }

  commencerFormation(formationId: number, event: Event): void {
    event.stopPropagation();
    if (this.estExpire) return;

    const params: Record<string, string> = { fromPage: 'catalogue' };
    if (this.catalogueId) params['catalogueId'] = String(this.catalogueId);

    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/courses/course-watch', formationId], { queryParams: params })
    );
    window.open(url, '_blank');
  }

  goBack(): void {
    this.router.navigate(['/student/mes-catalogues']);
  }

  // ── Helpers ───────────────────────────────────────────────
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

  isFree(formation: any): boolean {
    return Number(formation.prix) === 0;
  }

  getImageUrl(path: string | null | undefined): string {
    return this.formationsService.getImageUrl(path);
  }
}
