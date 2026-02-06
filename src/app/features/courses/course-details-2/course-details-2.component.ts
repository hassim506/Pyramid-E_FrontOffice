// src/app/features/courses/course-details-2/course-details-2.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Formation } from '../../../shared/models/formation.models';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';
import { HttpClient } from '@angular/common/http';
import { DemandeFormationService } from '../../../shared/service/demande/demande-formation.service';

declare var bootstrap: any;

@Component({
  standalone: true,
  selector: 'app-course-details-2',
  imports: [
    CommonModule,
    NgIf,
    NgFor,
    ReactiveFormsModule
  ],
  templateUrl: './course-details-2.component.html',
  styleUrls: ['./course-details-2.component.scss']
})
export class CourseDetails2Component implements OnInit {

  formation: Formation | null = null;
  loading = true;
  error = '';

  /** 🔹 DEMANDE FORMATION */
  showRequestForm = false;
  submitting = false;
  successMessage = '';
  requestForm!: FormGroup;

    private modalInstance: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formationsService: FormationsService,
    private fb: FormBuilder,
    private http: HttpClient,
    private demandeFormationService: DemandeFormationService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadFormationDetails(id);
    }

    this.initRequestForm();
  }

  loadFormationDetails(id: number): void {
    this.loading = true;
    this.formationsService.getFormationById(id).subscribe({
      next: (res: any) => {
        this.formation = res?.data || res?.formation || res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Formation introuvable';
        this.loading = false;
      }
    });
  }

  /** =======================
   *  FORM DEMANDE FORMATION
   ======================= */

  initRequestForm(): void {
    this.requestForm = this.fb.group({
      motif_demande: ['', Validators.required],
      objectifs_personnels: ['', Validators.required],
      priorite: ['normale', Validators.required],
      date_souhaitee_debut: [null],
      commentaire_employe: ['']
    });
  }

  openRequestModal(): void {
    const modalEl = document.getElementById('demandeFormationModal');
    if (modalEl) {
      this.modalInstance = new bootstrap.Modal(modalEl, {
        backdrop: 'static',
        keyboard: false
      });
      this.modalInstance.show();
    }
  }

  closeModal(): void {
    if (this.modalInstance) {
      this.modalInstance.hide();
      this.requestForm.reset({ priorite: 'normale' });
      this.submitting = false;
      this.successMessage = '';
    }
  }

  submitRequest(): void {
  if (!this.formation || this.requestForm.invalid) return;

  this.submitting = true;

  // 🔥 convertir la date au format Laravel YYYY-MM-DD
  let formattedDate = null;

  if (this.requestForm.value.date_souhaitee_debut) {
    const d = new Date(this.requestForm.value.date_souhaitee_debut);
    formattedDate = d.toISOString().split('T')[0];
  }

  const payload: {
    formation_id: number;
    motif_demande: string;
    objectifs_personnels: string;
    priorite: string;
    date_souhaitee_debut?: string;
    commentaire_employe?: string;
  } = {
    formation_id: this.formation.id,
    motif_demande: this.requestForm.value.motif_demande,
    objectifs_personnels: this.requestForm.value.objectifs_personnels,
    priorite: this.requestForm.value.priorite,
    commentaire_employe: this.requestForm.value.commentaire_employe
  };

  if (formattedDate) {
    payload.date_souhaitee_debut = formattedDate;
  }

  console.log('Payload envoyé =>', payload); // 👈 pour debug

  this.demandeFormationService.creerDemande(payload).subscribe({
    next: () => {
      this.successMessage = 'Demande envoyée avec succès';
      this.requestForm.reset({ priorite: 'normale' });
      this.submitting = false;

      setTimeout(() => {
        this.closeModal();
      }, 1200);
    },
    error: (err) => {
      console.log('Erreur Laravel =>', err.error); // 🔥 important
      this.error = 'Erreur lors de l’envoi de la demande';
      this.submitting = false;
    }
  });
}




  canSubscribe(): boolean {
    return !!this.formation?.inscription_ouverte;
  }
}
