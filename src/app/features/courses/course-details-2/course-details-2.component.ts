import { Component, OnInit }     from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule }           from '@angular/common';
import { Formation }              from '../../../shared/models/formation.models';
import { FormationsService }      from '../../../shared/service/Formationsss/formations.service';

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
  catalogueId: number | null    = null;
  parcoursId:  number | null    = null;

  // ✅ fromPage : source de navigation
  // 'demandes'  → /student/mes-cours
  // 'catalogue' → /student/catalogue/:id ou /student/students-catalogue
  // 'parcours'  → /student/students-parcours
  // 'session'   → /student/students-session
  fromPage: string | null = null;

  loading = true;
  error   = '';

  constructor(
    private route:             ActivatedRoute,
    private router:            Router,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    const state = history.state as {
      demande?:       any;
      mode?:          string;
      fromPage?:      string;
      // rétrocompat anciens marqueurs
      fromCatalogue?: boolean;
      catalogueId?:   number;
      fromParcours?:  boolean;
      parcoursId?:    number;
    };

    // ── Résoudre fromPage ─────────────────────────────────────
    this.fromPage = state?.fromPage ?? null;

    // Rétrocompatibilité si fromPage absent
    if (!this.fromPage) {
      if (state?.fromCatalogue) this.fromPage = 'catalogue';
      else if (state?.fromParcours) this.fromPage = 'parcours';
    }

    this.catalogueId = state?.catalogueId ?? null;
    this.parcoursId  = state?.parcoursId  ?? null;

    // ── Mode SESSION ──────────────────────────────────────────
    if (state?.mode === 'session' && state?.demande) {
      this.mode     = 'session';
      this.demande  = state.demande;
      this.fromPage = this.fromPage ?? 'session';
      this.session  = state.demande.session_formation ?? state.demande.sessionFormation;
      this.loading  = false;
      return;
    }

    // ── Mode FORMATION / CATALOGUE / PARCOURS ─────────────────
    // Récupérer la demande si elle existe (cas 'demandes')
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
        this.loading   = false;
      },
      error: () => {
        this.error   = 'Formation introuvable';
        this.loading = false;
      }
    });
  }

  // ════════════════════════════════════════════════════════════
  // BOUTON COMMENCER
  // ════════════════════════════════════════════════════════════
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
      if (this.isSessionPresentiel())          return 'Formation en présentiel';
      if (this.demande?.statut === 'validee')  return 'Session pas encore ouverte';
      if (this.demande?.statut === 'en_attente') return 'En attente de validation';
      if (this.demande?.statut === 'refusee')    return 'Demande refusée';
      if (this.demande?.statut === 'annulee')    return 'Demande annulée';
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
      this.router.navigate(['/student/lecture-formation', id]);
    }
  }

  // ════════════════════════════════════════════════════════════
  // RETOUR — switch sur fromPage
  // ════════════════════════════════════════════════════════════
  goBack(): void {
    switch (this.fromPage) {

      case 'demandes':
        // Vient de "Mes demandes de formation"
        this.router.navigate(['/student/mes-cours']);
        break;

      case 'catalogue':
        // Vient d'un catalogue assigné
        if (this.catalogueId) {
          this.router.navigate(['/student/catalogue', this.catalogueId]);
        } else {
          this.router.navigate(['/student/students-catalogue']);
        }
        break;

      case 'parcours':
        // Vient d'un parcours assigné
        if (this.parcoursId) {
          this.router.navigate(['/student/parcours-assigne', this.parcoursId]);
        } else {
          this.router.navigate(['/student/students-parcours']);
        }
        break;

      case 'session':
        // Vient de "Mes sessions"
        this.router.navigate(['/student/students-session']);
        break;

      default:
        this.router.navigate(['/student/mes-cours']);
        break;
    }
  }

  // ── Helpers ──────────────────────────────────────────────
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
  isSessionHybride():    boolean { return this.session?.type === 'hybride'; }
  canSubscribe():        boolean { return !!this.formation?.inscription_ouverte; }
}