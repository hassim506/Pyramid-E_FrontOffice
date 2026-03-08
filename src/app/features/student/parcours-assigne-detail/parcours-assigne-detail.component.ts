import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-parcours-assigne-detail',
  imports: [CommonModule],
  templateUrl: './parcours-assigne-detail.component.html',
  styleUrls: ['./parcours-assigne-detail.component.scss'],
})
export class ParcoursAssigneDetailComponent implements OnInit {

  parcoursId!: number;
  parcours:    any   = null;
  formations:  any[] = [];
  loading      = true;
  error        = '';

  constructor(
    private route:             ActivatedRoute,
    private router:            Router,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    this.parcoursId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.parcoursId) {
      this.error   = 'Parcours introuvable';
      this.loading = false;
      return;
    }
    this.loadDetail();
  }

  loadDetail(): void {
    this.loading = true;
    this.formationsService.getMesParcoursAssignes().subscribe({
      next: (res: any) => {
        const all     = res.parcours ?? [];
        this.parcours = all.find((p: any) => p.id === this.parcoursId) ?? null;

        if (!this.parcours) {
          this.error   = 'Parcours introuvable ou non assigné';
          this.loading = false;
          return;
        }
        this.loadFormations();
      },
      error: () => {
        this.error   = 'Impossible de charger le parcours';
        this.loading = false;
      }
    });
  }

  loadFormations(): void {
    this.formationsService.getFormationsDuParcoursParCategorie(
      this.parcoursId,
      this.parcours.categorie_id
    ).subscribe({
      next:  (res: any) => { this.formations = res.formations ?? []; this.loading = false; },
      error: ()         => { this.formations = []; this.loading = false; }
    });
  }

  // ── Navigation ─────────────────────────────────────────────
  // ✅ Ouvre les détails de la formation (bouton "Voir détails")
  // Parcours assigné → fromPage: 'parcours', accès direct autorisé
  goToFormation(formationId: number): void {
    this.router.navigate(['/courses/course-details-2', formationId], {
      state: {
        fromPage:     'parcours',      // ✅ remplace fromParcours: true
        fromParcours: true,            // rétrocompat
        parcoursId:   this.parcoursId,
        // pas de demande → canCommencer() basé sur fromPage === 'parcours'
      }
    });
  }

  // ✅ Accès direct à la lecture (bouton "Commencer" sur la carte)
  // Pas besoin de passer par course-details-2
  commencerFormation(formationId: number, event: Event): void {
    event.stopPropagation();
    this.router.navigate(['/student/lecture-formation', formationId]);
  }

  // ✅ Retour vers la liste des parcours assignés
  goBack(): void {
    this.router.navigate(['/student/students-parcours']);
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

  getNiveauClass(niveau: string): string {
    return ({
      debutant:      'niveau-debutant',
      intermediaire: 'niveau-inter',
      avance:        'niveau-avance',
    } as any)[niveau] ?? '';
  }
}