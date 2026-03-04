import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Router }    from '@angular/router';
import { CommonModule }             from '@angular/common';
import { Formation }                from '../../../shared/models/formation.models';
import { FormationsService }        from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-course-details-2',
  imports: [CommonModule],
  templateUrl: './course-details-2.component.html',
  styleUrls: ['./course-details-2.component.scss']
})
export class CourseDetails2Component implements OnInit {

  formation: Formation | null = null;

  mode: 'formation' | 'session' = 'formation';
  demande:  any = null;
  session:  any = null;  // = demande.session_formation (camelCase côté API normalisé)

  loading = true;
  error   = '';

  constructor(
    private route:             ActivatedRoute,
    private router:            Router,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    const state = history.state as { demande?: any; mode?: string; fromCatalogue?: boolean };

    // ── Mode session ──────────────────────────────────────
    if (state?.mode === 'session' && state?.demande) {
      this.mode    = 'session';
      this.demande = state.demande;
      // la relation peut arriver en snake_case ou camelCase selon la normalisation Angular
      this.session = state.demande.session_formation ?? state.demande.sessionFormation;
      this.loading = false;
      return;
    }

    // ── Mode catalogue ou formation classique ─────────────
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id && id !== 0) this.loadFormationDetails(id);
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

  // ── Helpers ───────────────────────────────────────────
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
    const cap = this.session?.capacite_max ?? 0;
    // places_restantes peut être calculé côté API ou estimé
    return this.session?.places_restantes ?? cap;
  }

  isSessionDistanciel(): boolean { return this.session?.type === 'distanciel'; }
  isSessionPresentiel(): boolean { return this.session?.type === 'presentiel'; }
  isSessionHybride():    boolean { return this.session?.type === 'hybride'; }

  canSubscribe(): boolean { return !!this.formation?.inscription_ouverte; }

  goBack(): void {
    const state = history.state;
    if (state?.fromCatalogue) {
      this.router.navigate(['/student/students-catalogue']);
    } else {
      this.router.navigate(['/student/students-session']);
    }
  }
}