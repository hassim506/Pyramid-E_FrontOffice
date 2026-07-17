import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { FormationService } from '../../../shared/service/formation/formation.service';

@Component({
  selector: 'app-mes-catalogues',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mes-catalogues.component.html',
  styleUrls: ['./mes-catalogues.component.scss'],
})
export class MesCataloguesComponent implements OnInit, OnDestroy {

  allCatalogues:       any[] = [];
  filteredCatalogues:  any[] = [];
  displayedCatalogues: any[] = [];

  loading = false;
  error   = '';

  searchTerm     = '';
  selectedType   = '';
  selectedFiltre: '' | 'assigne' | 'demande' | 'termine' | 'en_cours' | 'permanent' | 'expire_bientot' | 'expire' = '';

  currentPage  = 1;
  itemsPerPage = 9;
  totalItems   = 0;
  totalPages   = 0;
  pages:       number[] = [];

  types = [
    { value: '',            label: 'Tous les types' },
    { value: 'general',     label: 'Général'        },
    { value: 'specialise',  label: 'Spécialisé'     },
    { value: 'certifiant',  label: 'Certifiant'     },
    { value: 'technique',   label: 'Technique'      },
    { value: 'management',  label: 'Management'     },
    { value: 'soft_skills', label: 'Soft Skills'    },
  ];

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

  private _dejaCharge = false;
  private routerSub?: Subscription;

  private _visibilityHandler = () => {
    if (document.visibilityState === 'visible') {
      this._refreshProgressionsSilencieux();
    }
  };

  constructor(
    private formationsService: FormationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCatalogues();

    this.routerSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const url = e.urlAfterRedirects || e.url;
        if (this._dejaCharge && url.includes('mes-catalogues')) {
          this._refreshProgressionsSilencieux();
        }
        this._dejaCharge = true;
      });

    document.addEventListener('visibilitychange', this._visibilityHandler);
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    document.removeEventListener('visibilitychange', this._visibilityHandler);
  }

  loadCatalogues(): void {
    this.loading = true;
    this.error   = '';
    this.formationsService.getMesCataloguesAssignes().subscribe({
      next: (res) => {
        this.allCatalogues = this._normaliserCatalogues(res.catalogues ?? []);
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.error   = 'Impossible de charger vos catalogues.';
        this.loading = false;
      },
    });
  }

  private _refreshProgressionsSilencieux(): void {
    this.formationsService.getMesCataloguesAssignes().subscribe({
      next: (res) => {
        const nouveaux = this._normaliserCatalogues(res.catalogues ?? []);

        this.allCatalogues = this.allCatalogues.map(ancien => {
          const frais = nouveaux.find(n => n.id === ancien.id);
          if (!frais) return ancien;
          return {
            ...ancien,
            progression:          frais.progression,
            formations_terminees: frais.formations_terminees,
            total_formations:     frais.total_formations,
            est_termine:          frais.est_termine,
          };
        });

        this.applyFilters();
      },
      error: () => {}
    });
  }

  private _normaliserCatalogues(liste: any[]): any[] {
    return liste.map((c: any) => ({
      ...c,
      est_termine: c.est_termine
        || (c.total_formations > 0 && c.formations_terminees >= c.total_formations),
    }));
  }

  isExpire(catalogue: any): boolean {
    if (catalogue.est_termine) return false;
    if (!catalogue.date_expiration) return false;
    return new Date(catalogue.date_expiration) < new Date();
  }

  isExpiringSoon(dateExpiration: string | null): boolean {
    if (!dateExpiration) return false;
    const diff = new Date(dateExpiration).getTime() - Date.now();
    return diff > 0 && diff < 7 * 24 * 60 * 60 * 1000;
  }

  getJoursRestants(dateExpiration: string | null): number {
    if (!dateExpiration) return 0;
    return Math.ceil((new Date(dateExpiration).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  }

  onSearchChange(): void { this.currentPage = 1; this.applyFilters(); }

  onTypeChange(type: string): void {
    this.selectedType = type; this.currentPage = 1; this.applyFilters();
  }

  onFiltreChange(valeur: string): void {
    this.selectedFiltre = valeur as any; this.currentPage = 1; this.applyFilters();
  }

  clearFilters(): void {
    this.searchTerm     = '';
    this.selectedType   = '';
    this.selectedFiltre = '';
    this.currentPage    = 1;
    this.applyFilters();
  }

  get hasActiveFilters(): boolean {
    return !!this.searchTerm || !!this.selectedType || !!this.selectedFiltre;
  }

  applyFilters(): void {
    let result = [...this.allCatalogues];

    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter(c =>
        c.titre?.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q) ||
        c.short_description?.toLowerCase().includes(q)
      );
    }

    if (this.selectedType) {
      result = result.filter(c => c.type === this.selectedType);
    }

    switch (this.selectedFiltre) {
      case 'assigne':        result = result.filter(c => c.source === 'assigne'); break;
      case 'demande':        result = result.filter(c => c.source === 'demande'); break;
      case 'termine':        result = result.filter(c => c.est_termine); break;
      case 'en_cours':       result = result.filter(c => !c.est_termine && !this.isExpire(c) && c.progression > 0); break;
      case 'permanent':      result = result.filter(c => !c.date_expiration); break;
      case 'expire_bientot': result = result.filter(c => this.isExpiringSoon(c.date_expiration)); break;
      case 'expire':         result = result.filter(c => this.isExpire(c)); break;
    }

    this.filteredCatalogues = result;
    this.totalItems         = result.length;
    this.totalPages         = Math.ceil(this.totalItems / this.itemsPerPage);
    this.buildPageNumbers();
    this.updateDisplayed();
  }

  get totalCatalogues():  number { return this.allCatalogues.length; }
  get totalAssignes():    number { return this.allCatalogues.filter(c => c.source === 'assigne').length; }
  get totalDemandes():    number { return this.allCatalogues.filter(c => c.source === 'demande').length; }
  get totalTermines():    number { return this.allCatalogues.filter(c => c.est_termine).length; }
  get totalEnCours():     number { return this.allCatalogues.filter(c => !c.est_termine && !this.isExpire(c) && c.progression > 0).length; }
  get totalNonDemarres(): number { return this.allCatalogues.filter(c => !c.est_termine && !this.isExpire(c) && c.progression === 0).length; }
  get totalExpires():     number { return this.allCatalogues.filter(c => this.isExpire(c)).length; }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.buildPageNumbers();
    this.updateDisplayed();
  }

  private updateDisplayed(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedCatalogues = this.filteredCatalogues.slice(start, start + this.itemsPerPage);
  }

  private buildPageNumbers(): void {
    const delta = 2;
    const start = Math.max(1, this.currentPage - delta);
    const end   = Math.min(this.totalPages, this.currentPage + delta);
    this.pages  = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  goToCatalogue(id: number): void {
    this.router.navigate(['/student/mes-catalogues', id]);
  }

  getTypeColor(type: string): string {
    const colors: Record<string, string> = {
      certifiant:  '#7c3aed',
      technique:   '#0369a1',
      management:  '#b45309',
      soft_skills: '#0d9488',
      specialise:  '#6d28d9',
      general:     '#374151',
    };
    return colors[type] ?? '#374151';
  }

  getTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      general:     'Général',
      specialise:  'Spécialisé',
      certifiant:  'Certifiant',
      technique:   'Technique',
      management:  'Management',
      soft_skills: 'Soft Skills',
    };
    return labels[type] ?? type ?? 'Catalogue';
  }
}
