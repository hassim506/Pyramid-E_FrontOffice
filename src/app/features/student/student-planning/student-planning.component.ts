import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';
import { FormationService } from '../../../shared/service/formation/formation.service';

interface Evenement {
  id:                    string;
  type:                  'presentiel' | 'en_ligne';
  categorie:             'formation' | 'session';
  titre:                 string;
  date_debut:            string;
  date_fin:              string | null;
  lieu:                  string;
  image:                 string | null;
  duree:                 string | null;
  statut:                string;
  progression:           number;
  formation_titre?:      string;
  statut_participation?: string;
  statut_inscription?:   string;
  couleur:               string;
  icone:                 string;
  label_type:            string;
}

interface JourCalendrier {
  date:          Date;
  jour:          number;
  moisCourant:   boolean;
  estAujourdhui: boolean;
  evenements:    Evenement[];
}

// Largeur du popover (doit correspondre au CSS : width: 340px)
const POPOVER_WIDTH  = 340;
const POPOVER_MARGIN = 12;   // marge minimale par rapport aux bords du wrapper

@Component({
  selector:    'app-student-planning',
  standalone:  true,
  imports:     [CommonModule, RouterModule],
  templateUrl: './student-planning.component.html',
  styleUrl:    './student-planning.component.scss',
})
export class StudentPlanningComponent implements OnInit {

  loading = true;
  error   = '';

  // ── Calendrier ─────────────────────────────────────────
  annee  = new Date().getFullYear();
  mois   = new Date().getMonth() + 1;   // 1-12
  jours: JourCalendrier[] = [];

  readonly moisLabels  = ['Janvier','Février','Mars','Avril','Mai','Juin',
                          'Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
  readonly joursLabels = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];

  private readonly joursComplets = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  private readonly moisComplets  = ['janvier','février','mars','avril','mai','juin',
                                    'juillet','août','septembre','octobre','novembre','décembre'];

  // ── Données ────────────────────────────────────────────
  evenements: Evenement[]                 = [];
  parDate:    Record<string, Evenement[]> = {};

  // ── Sélection ──────────────────────────────────────────
  selectedJour:      JourCalendrier | null = null;
  selectedEvenement: Evenement | null      = null;

  // ── Position du popover ────────────────────────────────
  popoverTop       = 0;
  popoverLeft      = 0;
  popoverArrowLeft = 0;   // position de la flèche à l'intérieur du popover

  // ── Filtres ────────────────────────────────────────────
  filtreActif: 'tous' | 'presentiel' | 'en_ligne' = 'tous';

  // Référence à l'élément wrapper (pour calculer les positions relatives)
  @ViewChild('calendarGrid') calendarGridRef!: ElementRef<HTMLElement>;

  constructor(
    private formationsService: FormationService,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void { this.loadPlanning(); }

  // ── Fermeture sur clic en dehors ───────────────────────
  onWrapClick(event: MouseEvent): void {
    // Si le clic n'est pas sur une case ni sur le popover, on ferme
    const target = event.target as HTMLElement;
    if (!target.closest('.pl-day') && !target.closest('.pl-popover')) {
      this.fermerDetail();
    }
  }

  // ── Chargement ─────────────────────────────────────────
  loadPlanning(): void {
    this.loading = true;
    this.error   = '';

    this.formationsService.getMonPlanning(this.annee, this.mois).subscribe({
      next: (res: any) => {
        this.evenements = res.evenements ?? [];
        this.parDate    = res.par_date   ?? {};
        this.buildCalendrier();
        this.loading = false;
      },
      error: () => {
        this.error   = 'Impossible de charger le planning.';
        this.loading = false;
      }
    });
  }

  // ── Construction calendrier ────────────────────────────
  buildCalendrier(): void {
    this.jours = [];

    const aujourd     = new Date();
    const premierJour = new Date(this.annee, this.mois - 1, 1);

    const jourSemaine = premierJour.getDay();
    const offsetLundi = jourSemaine === 0 ? 6 : jourSemaine - 1;

    const dernierMoisPrec = new Date(this.annee, this.mois - 1, 0);
    for (let i = offsetLundi - 1; i >= 0; i--) {
      const d = new Date(
        dernierMoisPrec.getFullYear(),
        dernierMoisPrec.getMonth(),
        dernierMoisPrec.getDate() - i
      );
      this.jours.push(this.makeJour(d, false, false));
    }

    const dernierJour = new Date(this.annee, this.mois, 0).getDate();
    for (let d = 1; d <= dernierJour; d++) {
      const date = new Date(this.annee, this.mois - 1, d);
      const key  = this.formatDate(date);
      const estAujd = this.annee === aujourd.getFullYear()
                   && this.mois  === aujourd.getMonth() + 1
                   && d          === aujourd.getDate();
      this.jours.push({ date, jour: d, moisCourant: true, estAujourdhui: estAujd, evenements: this.getEvenementsJour(key) });
    }

    const reste = 42 - this.jours.length;
    for (let d = 1; d <= reste; d++) {
      const date = new Date(this.annee, this.mois, d);
      this.jours.push(this.makeJour(date, false, false));
    }
  }

  private makeJour(date: Date, moisCourant: boolean, estAujourdhui: boolean): JourCalendrier {
    return { date, jour: date.getDate(), moisCourant, estAujourdhui, evenements: [] };
  }

  private getEvenementsJour(key: string): Evenement[] {
    const evts = this.parDate[key] ?? [];
    if (this.filtreActif === 'tous') return evts;
    return evts.filter(e => e.type === this.filtreActif);
  }

  // ── Navigation ─────────────────────────────────────────
  moisPrecedent(): void {
    if (this.mois === 1) { this.mois = 12; this.annee--; }
    else this.mois--;
    this.resetSelection();
    this.loadPlanning();
  }

  moisSuivant(): void {
    if (this.mois === 12) { this.mois = 1; this.annee++; }
    else this.mois++;
    this.resetSelection();
    this.loadPlanning();
  }

  allerAujourdhui(): void {
    const now  = new Date();
    this.annee = now.getFullYear();
    this.mois  = now.getMonth() + 1;
    this.resetSelection();
    this.loadPlanning();
  }

  private resetSelection(): void {
    this.selectedJour      = null;
    this.selectedEvenement = null;
  }

  // ── Sélection + calcul position popover ────────────────
  selectJour(jour: JourCalendrier, event: MouseEvent): void {
    if (!jour.moisCourant || jour.evenements.length === 0) return;

    // Si on reclique sur la même case → fermeture
    if (this.selectedJour?.date?.getTime() === jour.date?.getTime()) {
      this.fermerDetail();
      return;
    }

    this.selectedJour      = jour;
    this.selectedEvenement = null;

    // Calcul du positionnement après le prochain cycle de rendu
    setTimeout(() => this.computePopoverPosition(event), 0);
  }

  /**
   * Calcule top/left du popover pour qu'il apparaisse
   * juste AU-DESSUS de la case cliquée, centré sur elle,
   * en restant à l'intérieur du wrapper .pl-calendar-wrap.
   */
  private computePopoverPosition(event: MouseEvent): void {
    const wrap = this.elRef.nativeElement.querySelector('.pl-calendar-wrap') as HTMLElement;
    const cell = (event.currentTarget as HTMLElement);

    if (!wrap || !cell) return;

    const wrapRect = wrap.getBoundingClientRect();
    const cellRect = cell.getBoundingClientRect();

    // Position de la case par rapport au wrapper
    const cellRelTop  = cellRect.top  - wrapRect.top  + wrap.scrollTop;
    const cellRelLeft = cellRect.left - wrapRect.left + wrap.scrollLeft;
    const cellCenterX = cellRelLeft + cellRect.width / 2;

    // Hauteur du popover (on estime, puis ajustera via offsetHeight si dispo)
    const popoverEl = this.elRef.nativeElement.querySelector('.pl-popover') as HTMLElement;
    const popoverH  = popoverEl ? popoverEl.offsetHeight : 300;

    // Placement : au-dessus de la case (avec 10px d'espace + flèche de 9px)
    const top = cellRelTop - popoverH - 10 - 9;

    // Centrage horizontal sur la case, contraint aux bords du wrapper
    let left = cellCenterX - POPOVER_WIDTH / 2;
    const maxLeft = wrap.clientWidth - POPOVER_WIDTH - POPOVER_MARGIN;
    left = Math.max(POPOVER_MARGIN, Math.min(left, maxLeft));

    // Position de la flèche dans le popover (pointe vers le centre de la case)
    const arrowLeft = cellCenterX - left - 9;   // 9 = moitié de la flèche 18px

    this.popoverTop       = top;
    this.popoverLeft      = left;
    this.popoverArrowLeft = Math.max(12, Math.min(arrowLeft, POPOVER_WIDTH - 30));
  }

  selectEvenement(evt: Evenement): void {
    this.selectedEvenement = this.selectedEvenement?.id === evt.id ? null : evt;
  }

  fermerDetail(): void { this.resetSelection(); }

  // ── Filtres ────────────────────────────────────────────
  setFiltre(f: 'tous' | 'presentiel' | 'en_ligne'): void {
    this.filtreActif  = f;
    this.selectedJour = null;
    this.buildCalendrier();
  }

  // ── Stats ──────────────────────────────────────────────
  get totalMois():        number { return this.evenements.length; }
  get totalPresentiels(): number { return this.evenements.filter(e => e.type === 'presentiel').length; }
  get totalEnLigne():     number { return this.evenements.filter(e => e.type === 'en_ligne').length; }
  get totalSessions():    number { return this.evenements.filter(e => e.categorie === 'session').length; }

  // ── Helpers ────────────────────────────────────────────
  formatDate(d: Date): string {
    const y  = d.getFullYear();
    const m  = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${dd}`;
  }

  formatDateFr(date: Date): string {
    return `${this.joursComplets[date.getDay()]} ${date.getDate()} ${this.moisComplets[date.getMonth()]} ${date.getFullYear()}`;
  }

  formatHeure(datetime: string | null): string {
    if (!datetime) return '';
    const d = new Date(datetime);
    return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  }

  getStatutLabel(statut: string): string {
    const map: Record<string, string> = {
      non_commence: 'Non commencé',
      en_cours:     'En cours',
      termine:      'Terminé',
      planifiee:    'Planifiée',
      annulee:      'Annulée',
    };
    return map[statut] ?? statut;
  }

  get nomMois(): string { return this.moisLabels[this.mois - 1]; }
}