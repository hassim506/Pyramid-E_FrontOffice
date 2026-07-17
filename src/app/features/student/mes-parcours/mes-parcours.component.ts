import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { ProgressionService } from '../../../shared/service/progression/progression.service';

@Component({
  selector: 'app-mes-parcours',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mes-parcours.component.html',
  styleUrls: ['./mes-parcours.component.scss'],
})
export class MesParcoursComponent implements OnInit, OnDestroy {

  allParcours:       any[] = [];
  filteredParcours:  any[] = [];
  displayedParcours: any[] = [];

  loading = false;
  error   = '';

  searchTerm        = '';
  selectedCategorie = '';
  selectedFiltre    = '';

  categories: string[] = [];

  currentPage = 1;
  pageSize    = 9;
  totalPages  = 0;
  totalItems  = 0;

  filtres = [
    { value: '',               label: 'Tous',               icon: 'isax-grid-1'          },
    { value: 'assigne',        label: 'Assignés',           icon: 'isax-tick-circle'     },
    { value: 'demande',        label: 'Demandes acceptées', icon: 'isax-send-2'          },
    { value: 'termine',        label: 'Terminés',           icon: 'isax-medal-star'      },
    { value: 'en_cours',       label: 'En cours',           icon: 'isax-play-circle'     },
    { value: 'permanent',      label: 'Accès permanent',    icon: 'isax-infinity'        },
    { value: 'expire_bientot', label: 'Expire bientôt',     icon: 'isax-warning-2'       },
    { value: 'expire',         label: 'Expiré',             icon: 'isax-calendar-remove' },
  ];

  private _dejaCharge    = false;
  private routerSub?:      Subscription;
  private progressionSub?: Subscription;

  private _visibilityHandler = () => {
    if (document.visibilityState === 'visible') {
      this._refreshProgressionsSilencieux();
    }
  };

  constructor(
    private formationsService:  FormationService,
    public  progressionService: ProgressionService,
    private router:             Router
  ) {}

  ngOnInit(): void {
    console.log('🚀 [ParcoursAssignes] ngOnInit');
    this.loadParcours();

    this.progressionSub = this.progressionService.change$.subscribe((map) => {
      console.log('🔔 [ParcoursAssignes] ProgressionService.change$ émis — map size:', map.size);
      console.log('🔔 [ParcoursAssignes] Contenu du ProgressionService:', [...map.entries()].map(([k, v]) => ({
        clé: k,
        formationId: v.formationId,
        parcoursId: v.parcoursId,
        percent: v.percent,
        completed: [...v.completed],
        totalSections: v.totalSections,
      })));
      this._syncProgressionsDepuisService();
    });

    this.routerSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const url = e.urlAfterRedirects || e.url;
        console.log('🧭 [ParcoursAssignes] NavigationEnd →', url, '| _dejaCharge:', this._dejaCharge);
        if (this._dejaCharge &&
            (url.includes('mes-parcours-assignes') || url.includes('mes-parcours'))) {
          console.log('🔄 [ParcoursAssignes] → déclenchement _refreshProgressionsSilencieux');
          this._refreshProgressionsSilencieux();
        }
        this._dejaCharge = true;
      });

    document.addEventListener('visibilitychange', this._visibilityHandler);
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.progressionSub?.unsubscribe();
    document.removeEventListener('visibilitychange', this._visibilityHandler);
  }

  // ── Chargement initial complet ─────────────────────────────
  loadParcours(): void {
    this.loading = true;
    this.error   = '';
    console.log('📡 [ParcoursAssignes] loadParcours() — appel API...');

    this.formationsService.getMesParcoursAssignes().subscribe({
      next: (res: any) => {
        console.log('✅ [ParcoursAssignes] Réponse API brute complète:', res);
        console.log('✅ [ParcoursAssignes] Nombre de parcours reçus:', res.parcours?.length);

        if (res.parcours?.length) {
          console.log('🔍 [ParcoursAssignes] PREMIER PARCOURS (brut):', JSON.stringify(res.parcours[0], null, 2));
          console.log('🔍 [ParcoursAssignes] Champs clés du 1er parcours:');
          const p0 = res.parcours[0];
          console.table({
            id:                   p0.id,
            titre:                p0.titre,
            progression:          p0.progression,
            formations_terminees: p0.formations_terminees,
            total_formations:     p0.total_formations,
            formation_ids:        JSON.stringify(p0.formation_ids),
            est_termine:          p0.est_termine,
            source:               p0.source,
            statut:               p0.statut,
          });
        }

        this.allParcours = this._normaliserParcours(res.parcours ?? []);
        console.log('🔧 [ParcoursAssignes] Après _normaliserParcours:', this.allParcours.map(p => ({
          id: p.id, titre: p.titre, progression: p.progression,
          est_en_cours: p.est_en_cours, est_termine: p.est_termine,
          formation_ids: p.formation_ids,
        })));

        const cats = this.allParcours.map((p: any) => p.categorie).filter((c: any) => !!c);
        this.categories = [...new Set(cats)] as string[];

        this._syncProgressionsDepuisService();
        this.applyFilters();
        this.loading = false;
      },
      error: (err: any) => {
        console.error('❌ [ParcoursAssignes] Erreur API:', err);
        this.error   = 'Erreur lors du chargement de vos parcours';
        this.loading = false;
      }
    });
  }

  // ── Refresh silencieux depuis l'API ────────────────────────
  private _refreshProgressionsSilencieux(): void {
    console.log('🔄 [ParcoursAssignes] _refreshProgressionsSilencieux() — appel API...');

    this.formationsService.getMesParcoursAssignes().subscribe({
      next: (res: any) => {
        const nouveaux = this._normaliserParcours(res.parcours ?? []);
        console.log('🔄 [ParcoursAssignes] Nouvelles progressions API:', nouveaux.map(p => ({
          id: p.id, titre: p.titre, progression: p.progression,
          formations_terminees: p.formations_terminees,
        })));

        this.allParcours = this.allParcours.map(ancien => {
          const frais = nouveaux.find(n => n.id === ancien.id);
          if (!frais) return ancien;
          return {
            ...ancien,
            progression:          frais.progression,
            formations_terminees: frais.formations_terminees,
            total_formations:     frais.total_formations,
            formation_ids:        frais.formation_ids ?? ancien.formation_ids,
            est_termine:          frais.est_termine,
            est_en_cours:         frais.est_en_cours,
            non_demarre:          frais.non_demarre,
            badge_label:          frais.badge_label,
          };
        });

        this._syncProgressionsDepuisService();
      },
      error: () => {}
    });
  }

  // ── Sync depuis ProgressionService en mémoire ──────────────
  private _syncProgressionsDepuisService(): void {
    if (!this.allParcours.length) {
      console.log('⚠️ [ParcoursAssignes] _syncProgressionsDepuisService() — allParcours vide, skip');
      return;
    }

    console.log('🧮 [ParcoursAssignes] _syncProgressionsDepuisService() — début calcul');

    this.allParcours = this.allParcours.map(p => {
      const ids: number[] = p.formation_ids ?? [];

      console.log(`📦 [Parcours #${p.id} "${p.titre}"] formation_ids:`, ids);

      if (!ids.length) {
        console.warn(`⚠️ [Parcours #${p.id}] Pas de formation_ids → impossible de recalculer depuis le service. progression actuelle: ${p.progression}%`);
        return p;
      }

      const details = ids.map(fid => {
        const pct = this.progressionService.getPercent(fid, p.id);
        return { formationId: fid, parcoursId: p.id, percent: pct };
      });

      console.log(`📊 [Parcours #${p.id}] getPercent par formation:`, details);

      const somme = details.reduce((acc, d) => acc + d.percent, 0);
      const progressionMoyenne = Math.round(somme / ids.length);
      const progression = Math.max(p.progression ?? 0, progressionMoyenne);

      console.log(`📈 [Parcours #${p.id}] somme=${somme} / ${ids.length} = moyenne=${progressionMoyenne}% | API=${p.progression}% | final=${progression}%`);

      const terminees = ids.filter(fid => this.progressionService.getPercent(fid, p.id) >= 100).length;

      const estTermine = progression >= 100 || p.est_termine
        || (p.total_formations > 0 && terminees >= p.total_formations);
      const estExpire  = !estTermine && !!p.date_expiration && new Date(p.date_expiration) < new Date();
      const estEnCours = !estTermine && !estExpire && progression > 0;
      const nonDemarre = !estTermine && !estExpire && progression === 0;

      return {
        ...p,
        progression,
        formations_terminees: terminees > 0 ? terminees : (p.formations_terminees ?? 0),
        est_termine:  estTermine,
        est_expire:   p.est_expire ?? estExpire,
        est_en_cours: estEnCours,
        non_demarre:  nonDemarre,
        badge_label: estTermine
          ? 'Terminé'
          : (p.est_expire ?? estExpire
              ? 'Expiré'
              : p.source === 'demande'
                ? 'Demande acceptée'
                : p.badge_label ?? 'Assigné'),
      };
    });

    console.log('✅ [ParcoursAssignes] Après sync service:', this.allParcours.map(p => ({
      id: p.id, titre: p.titre, progression: p.progression,
      est_en_cours: p.est_en_cours, est_termine: p.est_termine,
    })));

    this.applyFilters();
  }

  // ── Normalisation initiale ─────────────────────────────────
  private _normaliserParcours(liste: any[]): any[] {
    return liste.map((p: any) => {
      let progression = p.progression ?? 0;

      if (progression === 0 && p.total_formations > 0 && p.formations_terminees > 0) {
        progression = Math.round((p.formations_terminees / p.total_formations) * 100);
        console.log(`🔧 [_normaliserParcours] Parcours #${p.id}: progression recalculée ${p.progression}% → ${progression}% (${p.formations_terminees}/${p.total_formations})`);
      }

      const estTermine = p.est_termine
        || progression >= 100
        || (p.total_formations > 0 && p.formations_terminees >= p.total_formations);

      const estExpire = !estTermine
        && !!p.date_expiration
        && new Date(p.date_expiration) < new Date();

      const estEnCours = !estTermine && !estExpire && progression > 0;
      const nonDemarre = !estTermine && !estExpire && progression === 0;

      return {
        ...p,
        progression,
        est_termine:  estTermine,
        est_expire:   p.est_expire ?? estExpire,
        est_en_cours: estEnCours,
        non_demarre:  nonDemarre,
        badge_label: estTermine
          ? 'Terminé'
          : (p.est_expire ?? estExpire
              ? 'Expiré'
              : p.source === 'demande'
                ? 'Demande acceptée'
                : p.badge_label ?? 'Assigné'),
      };
    });
  }

  // ── Filtres ────────────────────────────────────────────────
  applyFilters(): void {
    let result = [...this.allParcours];

    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(p =>
        p.titre?.toLowerCase().includes(term) ||
        p.description?.toLowerCase().includes(term)
      );
    }

    if (this.selectedCategorie) {
      result = result.filter(p => p.categorie === this.selectedCategorie);
    }

    switch (this.selectedFiltre) {
      case 'assigne':        result = result.filter(p => p.source === 'assigne'); break;
      case 'demande':        result = result.filter(p => p.source === 'demande'); break;
      case 'termine':        result = result.filter(p => p.est_termine); break;
      case 'en_cours':       result = result.filter(p => p.est_en_cours); break;
      case 'permanent':      result = result.filter(p => !p.date_expiration); break;
      case 'expire_bientot': result = result.filter(p => this.isExpiringSoon(p.date_expiration)); break;
      case 'expire':         result = result.filter(p => p.est_expire); break;
    }

    this.filteredParcours = result;
    this.totalItems       = result.length;
    this.totalPages       = Math.ceil(this.totalItems / this.pageSize);
    this.currentPage      = 1;
    this.paginate();
  }

  onSearchChange(): void               { this.currentPage = 1; this.applyFilters(); }
  onCategorieChange(c: string): void   { this.selectedCategorie = c; this.currentPage = 1; this.applyFilters(); }
  onFiltreChange(valeur: string): void { this.selectedFiltre = valeur; this.currentPage = 1; this.applyFilters(); }

  clearFilters(): void {
    this.searchTerm        = '';
    this.selectedCategorie = '';
    this.selectedFiltre    = '';
    this.currentPage       = 1;
    this.applyFilters();
  }

  get hasActiveFilters(): boolean {
    return !!this.searchTerm || !!this.selectedCategorie || !!this.selectedFiltre;
  }

  // ── KPI Getters ────────────────────────────────────────────
  get totalParcours():    number { return this.allParcours.length; }
  get totalAssignes():    number { return this.allParcours.filter(p => p.source === 'assigne').length; }
  get totalDemandes():    number { return this.allParcours.filter(p => p.source === 'demande').length; }
  get totalTermines():    number { return this.allParcours.filter(p => p.est_termine).length; }
  get totalEnCours():     number { return this.allParcours.filter(p => p.est_en_cours).length; }
  get totalNonDemarres(): number { return this.allParcours.filter(p => p.non_demarre && !p.est_expire).length; }
  get totalExpires():     number { return this.allParcours.filter(p => p.est_expire).length; }

  // ── Pagination ─────────────────────────────────────────────
  paginate(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedParcours = this.filteredParcours.slice(start, start + this.pageSize);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get pages(): number[] {
    const delta = 2;
    const range: number[] = [];
    const left  = Math.max(1, this.currentPage - delta);
    const right = Math.min(this.totalPages, this.currentPage + delta);
    for (let i = left; i <= right; i++) range.push(i);
    return range;
  }

  // ── Navigation ─────────────────────────────────────────────
  goToDetail(parcoursId: number): void {
    this.router.navigate(['/student/mes-parcours', parcoursId]);
  }

  // ── Helpers badge ──────────────────────────────────────────
  getCTALabel(p: any): string {
    if (p.est_termine) return 'Revoir';
    if (p.est_expire)  return 'Consulter';
    return 'Voir le parcours';
  }

  isGrayed(p: any): boolean {
    return p.est_termine || p.est_expire;
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

  // ── Helpers couleur / icône catégorie ──────────────────────
  getCategorieColor(categorie: string | null): string {
    if (!categorie) return '#069b8f';
    const c = categorie.toLowerCase();
    if (c.includes('technique') || c.includes('dev') || c.includes('web'))  return '#0369a1';
    if (c.includes('management') || c.includes('leadership'))                return '#b45309';
    if (c.includes('securit')    || c.includes('cyber'))                     return '#dc2626';
    if (c.includes('certif'))                                                 return '#7c3aed';
    if (c.includes('soft')       || c.includes('communication'))             return '#0d9488';
    if (c.includes('data')       || c.includes('analyse'))                   return '#6d28d9';
    if (c.includes('marketing')  || c.includes('commercial'))                return '#b45309';
    return '#069b8f';
  }

  getCategorieIcon(categorie: string | null): string {
    if (!categorie) return 'isax isax-routing';
    const c = categorie.toLowerCase();
    if (c.includes('technique') || c.includes('dev') || c.includes('web'))  return 'isax isax-code';
    if (c.includes('management') || c.includes('leadership'))                return 'isax isax-people';
    if (c.includes('securit')    || c.includes('cyber'))                     return 'isax isax-shield';
    if (c.includes('certif'))                                                 return 'isax isax-medal-star';
    if (c.includes('soft')       || c.includes('communication'))             return 'isax isax-message';
    if (c.includes('data')       || c.includes('analyse'))                   return 'isax isax-chart';
    if (c.includes('marketing')  || c.includes('commercial'))                return 'isax isax-trend-up';
    return 'isax isax-routing';
  }
}