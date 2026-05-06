import { Component, OnInit }    from '@angular/core';
import { CommonModule }          from '@angular/common';
import { RouterModule }          from '@angular/router';
import { FormationsService }     from '../../../shared/service/Formationsss/formations.service';

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
  annee       = new Date().getFullYear();
  mois        = new Date().getMonth() + 1;
  jours:      JourCalendrier[] = [];
  moisLabels  = ['Janvier','Février','Mars','Avril','Mai','Juin',
                 'Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
  joursLabels = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];

  // Labels jours complets pour formatDateFr
  private joursComplets = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  private moisComplets  = ['janvier','février','mars','avril','mai','juin',
                           'juillet','août','septembre','octobre','novembre','décembre'];

  // ── Données ────────────────────────────────────────────
  evenements: Evenement[]                 = [];
  parDate:    Record<string, Evenement[]> = {};
  statsMonth: Record<string, number>      = {};

  // ── Sélection ──────────────────────────────────────────
  selectedJour:      JourCalendrier | null = null;
  selectedEvenement: Evenement | null      = null;

  // ── Filtres ────────────────────────────────────────────
  filtreActif: 'tous' | 'presentiel' | 'en_ligne' = 'tous';

  constructor(private formationsService: FormationsService) {}

  ngOnInit(): void { this.loadPlanning(); }

  // ── Chargement ─────────────────────────────────────────
  loadPlanning(): void {
    this.loading = true;
    this.error   = '';

    this.formationsService.getMonPlanning(this.annee, this.mois).subscribe({
      next: (res: any) => {
        this.evenements  = res.evenements ?? [];
        this.parDate     = res.par_date   ?? {};
        this.statsMonth  = res.stats      ?? {};
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
    const aujourd  = new Date();
    const premier  = new Date(this.annee, this.mois - 1, 1);
    const dernier  = new Date(this.annee, this.mois, 0);

    // Décalage lundi=0
    let debutSemaine = premier.getDay();
    debutSemaine = debutSemaine === 0 ? 6 : debutSemaine - 1;

    // Jours mois précédent
    const moisPrec = new Date(this.annee, this.mois - 1, 0);
    for (let i = debutSemaine - 1; i >= 0; i--) {
      const d = new Date(moisPrec.getFullYear(), moisPrec.getMonth(), moisPrec.getDate() - i);
      this.jours.push({ date: d, jour: d.getDate(), moisCourant: false, estAujourdhui: false, evenements: [] });
    }

    // Jours mois courant
    for (let d = 1; d <= dernier.getDate(); d++) {
      const date    = new Date(this.annee, this.mois - 1, d);
      const key     = this.formatDate(date);
      const evts    = this.getEvenementsJour(key);
      const estAujd = aujourd.getFullYear() === this.annee &&
                      aujourd.getMonth() + 1 === this.mois &&
                      aujourd.getDate() === d;
      this.jours.push({ date, jour: d, moisCourant: true, estAujourdhui: estAujd, evenements: evts });
    }

    // Compléter 42 cases
    const reste = 42 - this.jours.length;
    for (let d = 1; d <= reste; d++) {
      const date = new Date(this.annee, this.mois, d);
      this.jours.push({ date, jour: d, moisCourant: false, estAujourdhui: false, evenements: [] });
    }
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
    this.selectedJour = null;
    this.loadPlanning();
  }

  moisSuivant(): void {
    if (this.mois === 12) { this.mois = 1; this.annee++; }
    else this.mois++;
    this.selectedJour = null;
    this.loadPlanning();
  }

  allerAujourdhui(): void {
    this.annee = new Date().getFullYear();
    this.mois  = new Date().getMonth() + 1;
    this.selectedJour = null;
    this.loadPlanning();
  }

  // ── Sélection ──────────────────────────────────────────
  selectJour(jour: JourCalendrier): void {
    if (!jour.moisCourant || jour.evenements.length === 0) return;
    this.selectedJour      = jour;
    this.selectedEvenement = null;
  }

  selectEvenement(evt: Evenement): void {
    this.selectedEvenement = this.selectedEvenement?.id === evt.id ? null : evt;
  }

  fermerDetail(): void {
    this.selectedJour      = null;
    this.selectedEvenement = null;
  }

  // ── Filtres ────────────────────────────────────────────
  setFiltre(f: 'tous' | 'presentiel' | 'en_ligne'): void {
    this.filtreActif = f;
    this.buildCalendrier();
    this.selectedJour = null;
  }

  // ── Stats ──────────────────────────────────────────────
  get totalMois(): number        { return this.evenements.length; }
  get totalPresentiels(): number { return this.evenements.filter(e => e.type === 'presentiel').length; }
  get totalEnLigne(): number     { return this.evenements.filter(e => e.type === 'en_ligne').length; }
  get totalSessions(): number    { return this.evenements.filter(e => e.categorie === 'session').length; }

  // ── Helpers ────────────────────────────────────────────
  formatDate(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  // ✅ Date en français sans pipe locale
  formatDateFr(date: Date): string {
    return `${this.joursComplets[date.getDay()]} ${date.getDate()} ${this.moisComplets[date.getMonth()]} ${date.getFullYear()}`;
  }

  // ✅ Heure depuis une string datetime
  formatHeure(datetime: string | null): string {
    if (!datetime) return '';
    const d = new Date(datetime);
    return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  }

  getTypeLabel(type: string): string {
    const map: Record<string, string> = { presentiel: 'Présentiel', en_ligne: 'En ligne' };
    return map[type] ?? type;
  }

  getStatutLabel(statut: string): string {
    const map: Record<string, string> = {
      non_commence: 'Non commencé', en_cours:  'En cours',
      termine:      'Terminé',      planifiee: 'Planifiée',
      annulee:      'Annulée',
    };
    return map[statut] ?? statut;
  }

  get nomMois(): string { return this.moisLabels[this.mois - 1]; }
}