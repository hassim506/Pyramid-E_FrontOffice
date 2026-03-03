import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Router }    from '@angular/router';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { Formation }                 from '../../../shared/models/formation.models';
import { FormationsService }         from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-course-details-2',
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './course-details-2.component.html',
  styleUrls: ['./course-details-2.component.scss']
})
export class CourseDetails2Component implements OnInit {

  formation: Formation | null = null;

  mode: 'formation' | 'session' = 'formation';
  demande:  any = null;
  session:  any = null;

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
      this.session = state.demande.session_formation;
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

  getStatutClass(statut: string): string {
    return ({
      en_attente: 'badge-attente',
      validee:    'badge-validee',
      refusee:    'badge-refusee',
      annulee:    'badge-annulee',
    } as any)[statut] ?? 'badge-secondary';
  }

  getTypeIcon(type: string): string {
    return ({ presentiel: 'ti-building', distanciel: 'ti-wifi', hybride: 'ti-layout-distribute-horizontal' } as any)[type] ?? 'ti-calendar';
  }

  getDureeJours(): number {
    if (!this.session?.date_debut || !this.session?.date_fin) return 0;
    const ms = new Date(this.session.date_fin).getTime() - new Date(this.session.date_debut).getTime();
    return Math.ceil(ms / (1000 * 60 * 60 * 24));
  }

  canSubscribe(): boolean {
    return !!this.formation?.inscription_ouverte;
  }

  goBack(): void {
    const state = history.state;
    if (state?.fromCatalogue) {
      this.router.navigate(['/student/students-catalogue']);
    } else {
      this.router.navigate(['/student/students-session']);
    }
  }
}