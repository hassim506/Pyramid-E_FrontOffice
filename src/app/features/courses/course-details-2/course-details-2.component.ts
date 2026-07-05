import { Component, OnInit }     from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule }           from '@angular/common';
import { Formation }              from '../../../shared/models/formation.models';
import { FormationService } from '../../../shared/service/formation/formation.service';

@Component({
  standalone: true,
  selector: 'app-course-details-2',
  imports: [CommonModule],
  templateUrl: './course-details-2.component.html',
  styleUrls: ['./course-details-2.component.scss']
})
export class CourseDetails2Component implements OnInit {

  formation:   Formation | null = null;
  mode:        string           = 'formation';
  demande:     any              = null;
  session:     any              = null;

  // IDs de contexte pour le retour précis
  catalogueId: number | null = null;
  parcoursId:  number | null = null;
  sessionId:   number | null = null;

  /**
   * fromPage — identifie le tunnel emprunté :
   *
   *  'demandes'  → /student/mes-cours
   *              → retour : /student/mes-cours
   *
   *  'catalogue' → /student/students-catalogue
   *                  → /student/catalogue/:catalogueId   (detail-catalogue)
   *                       → course-details
   *              → retour : /student/catalogue/:catalogueId
   *                         (ou /student/students-catalogue si pas d'id)
   *
   *  'parcours'  → /student/students-parcours
   *                  → /student/parcours-assigne/:parcoursId
   *                       → course-details
   *              → retour : /student/parcours-assigne/:parcoursId
   *                         (ou /student/students-parcours si pas d'id)
   *
   *  'session'   → /student/students-session
   *                  → course-details (mode session)
   *              → retour : /student/students-session
   */
  fromPage: string | null = null;

  loading = true;
  error   = '';

  constructor(
    private route:             ActivatedRoute,
    private router:            Router,
    private formationsService: FormationService
  ) {}

  ngOnInit(): void {
    const state = history.state as {
      demande?:       any;
      mode?:          string;
      fromPage?:      string;
      // IDs de contexte
      catalogueId?:   number;
      parcoursId?:    number;
      sessionId?:     number;
      // rétrocompat anciens marqueurs booléens
      fromCatalogue?: boolean;
      fromParcours?:  boolean;
    };

    // ── Résoudre fromPage ──────────────────────────────────────────────
    this.fromPage    = state?.fromPage    ?? null;
    this.catalogueId = state?.catalogueId ?? null;
    this.parcoursId  = state?.parcoursId  ?? null;
    this.sessionId   = state?.sessionId   ?? null;

    // Rétrocompatibilité si fromPage absent (anciens booléens)
    if (!this.fromPage) {
      if (state?.fromCatalogue) this.fromPage = 'catalogue';
      else if (state?.fromParcours) this.fromPage = 'parcours';
    }

    // ── Mode SESSION ──────────────────────────────────────────────────
    if (state?.mode === 'session' && state?.demande) {
      this.mode     = 'session';
      this.demande  = state.demande;
      this.fromPage = this.fromPage ?? 'session';
      this.session  = state.demande.session_formation ?? state.demande.sessionFormation;
      this.loading  = false;
      return;
    }

    // ── Mode FORMATION / CATALOGUE / PARCOURS ─────────────────────────
    if (state?.demande) {
      this.demande = state.demande;
    }

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id && id !== 0) {
      this.loadFormationDetails(id);
    } else {
      this.error   = 'Formation introuvable';
      this.loading = false;
    }
  }

  loadFormationDetails(id: number): void {
    this.loading = true;
    this.formationsService.getFormationById(id).subscribe({
      next: (res: any) => {
        this.formation = res?.data || res?.formation || res;

        // Parser competences_acquises si c'est une string
        if (this.formation && typeof this.formation.competences_acquises === 'string') {
          try {
            const raw = (this.formation.competences_acquises as string)
              .replace(/\\\"/g, '"')
              .replace(/^"|"$/g, '');
            this.formation.competences_acquises = JSON.parse(raw) ?? [];
          } catch {
            this.formation.competences_acquises = [];
          }
        }

        this.loading = false;
      },
      error: () => {
        this.error   = 'Formation introuvable';
        this.loading = false;
      }
    });
  }

  // ══════════════════════════════════════════════════════════════════════
  // RETOUR — navigation exacte selon le tunnel emprunté
  // ══════════════════════════════════════════════════════════════════════
  goBack(): void {
    switch (this.fromPage) {

      // Tunnel : mes-cours → course-details
      case 'demandes':
        this.router.navigate(['/student/mes-cours']);
        break;

      // Tunnel : students-catalogue → catalogue/:id → course-details
     case 'catalogue':
  if (this.catalogueId) {
    this.router.navigate(['/student/catalogue-detail', this.catalogueId]); // ✅
  } else {
    this.router.navigate(['/student/mes-catalogues']);
  }
  break;

      // Tunnel : students-parcours → parcours-assigne/:id → course-details
      case 'parcours':
        if (this.parcoursId) {
          // Retour au détail du parcours d'où on vient
          this.router.navigate(['/student/parcours-assigne', this.parcoursId]);
        } else {
          // Fallback : liste des parcours
          this.router.navigate(['/student/students-parcours']);
        }
        break;

      // Tunnel : students-session → course-details (mode session)
      case 'session':
        this.router.navigate(['/student/students-session']);
        break;

      // Cas non identifié → fallback sécurisé
      default:
        this.router.navigate(['/student/mes-cours']);
        break;
    }
  }

  // ══════════════════════════════════════════════════════════════════════
  // BOUTON COMMENCER
  // ══════════════════════════════════════════════════════════════════════
  canCommencer(): boolean {
    // Catalogue assigné → accès direct, pas de demande requise
    if (this.fromPage === 'catalogue') return true;

    // Parcours assigné → accès direct
    if (this.fromPage === 'parcours') return true;

    // Session → validée + en ligne + date atteinte
    if (this.mode === 'session') {
      if (this.demande?.statut !== 'validee') return false;
      const isEnLigne = this.session?.type === 'distanciel' || this.session?.type === 'hybride';
      const dateDebut = this.session?.date_debut ? new Date(this.session.date_debut) : null;
      const dateOk    = dateDebut ? dateDebut <= new Date() : false;
      return isEnLigne && dateOk;
    }

    // Demande formation → statut validée obligatoire
    return this.demande?.statut === 'validee';
  }

  getLabelBouton(): string {
    if (this.canCommencer()) return 'Commencer la formation';

    // Session
    if (this.mode === 'session') {
      if (this.isSessionPresentiel())              return 'Formation en présentiel';
      if (this.demande?.statut === 'validee')      return 'Session pas encore ouverte';
      if (this.demande?.statut === 'en_attente')   return 'En attente de validation';
      if (this.demande?.statut === 'refusee')      return 'Demande refusée';
      if (this.demande?.statut === 'annulee')      return 'Demande annulée';
    }

    // Formation
    if (this.demande?.statut === 'en_attente') return 'En attente de validation';
    if (this.demande?.statut === 'refusee')    return 'Demande refusée';
    if (this.demande?.statut === 'annulee')    return 'Demande annulée';

    return 'Accès non disponible';
  }

  commencerFormation(): void {
    if (!this.canCommencer()) return;
    const id = this.formation?.id ?? Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.router.navigate(['/courses/course-watch', id]);
    }
  }

  // ── Helpers ────────────────────────────────────────────────────────
  getStatutClass(statut: string): string {
    return ({
      en_attente: 'badge-attente',
      validee:    'badge-validee',
      refusee:    'badge-refusee',
      annulee:    'badge-annulee',
    } as any)[statut] ?? 'badge-secondary';
  }

  getStatutIcon(statut: string): string {
    return ({
      en_attente: 'ti ti-clock',
      validee:    'ti ti-circle-check',
      refusee:    'ti ti-circle-x',
      annulee:    'ti ti-ban',
    } as any)[statut] ?? 'ti ti-help';
  }

  getTypeIcon(type: string): string {
    return ({
      presentiel: 'ti-building',
      distanciel: 'ti-wifi',
      hybride:    'ti-layout-distribute-horizontal'
    } as any)[type] ?? 'ti-calendar';
  }

  getTypeLabel(type: string): string {
    return ({
      presentiel: 'Présentiel',
      distanciel: 'Distanciel',
      hybride:    'Hybride'
    } as any)[type] ?? type;
  }

  getDureeJours(): number {
    if (!this.session?.date_debut || !this.session?.date_fin) return 0;
    const ms = new Date(this.session.date_fin).getTime() - new Date(this.session.date_debut).getTime();
    return Math.ceil(ms / (1000 * 60 * 60 * 24));
  }

  getPlacesRestantes(): number {
    return this.session?.places_restantes ?? this.session?.capacite_max ?? 0;
  }

  isSessionDistanciel(): boolean { return this.session?.type === 'distanciel'; }
  isSessionPresentiel(): boolean { return this.session?.type === 'presentiel'; }
  isSessionHybride():    boolean { return this.session?.type === 'hybride';    }
  canSubscribe():        boolean { return !!this.formation?.inscription_ouverte; }
}
