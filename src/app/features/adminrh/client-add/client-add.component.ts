import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Client } from '../../../shared/models/client-company.models';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-add',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() clientData: Client | null = null;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<void>();

  clientForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private clientCompanyService: ClientCompanyService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  ngOnChanges() {
    if (this.visible && this.clientData && this.isEditMode) {
      this.populateForm();
    } else if (this.visible && !this.isEditMode) {
      this.resetForm();
    }
  }

  initForm() {
    this.clientForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', Validators.required],
      ninea: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      contact_principal: ['', Validators.required],
      adresse: ['', Validators.required],
      secteur_activite: ['', Validators.required],
      taille: ['', Validators.required],
      statut: ['actif', Validators.required],
      date_contrat: ['', Validators.required],
      date_fin_contrat: ['', Validators.required]
    });
  }

  populateForm() {
    if (this.clientData) {
      this.clientForm.patchValue({
        nom: this.clientData.nom,
        type: this.clientData.type,
        ninea: this.clientData.ninea,
        email: this.clientData.email,
        telephone: this.clientData.telephone,
        contact_principal: this.clientData.contact_principal,
        adresse: this.clientData.adresse,
        secteur_activite: this.clientData.secteur_activite,
        taille: this.clientData.taille,
        statut: this.clientData.statut,
        date_contrat: this.formatDateForInput(this.clientData.date_contrat),
        date_fin_contrat: this.formatDateForInput(this.clientData.date_fin_contrat)
      });
    }
  }

  resetForm() {
    this.clientForm.reset({
      statut: 'actif'
    });
  }

  formatDateForInput(date: string | Date | undefined): string {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  saveClient() {
    if (this.clientForm.invalid) {
      Object.keys(this.clientForm.controls).forEach(key => {
        this.clientForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.loading = true;
    const formData = this.clientForm.value;

    if (this.isEditMode && this.clientData) {
      // Mise à jour
      this.clientCompanyService.updateClient(this.clientData.id, formData).subscribe({
        next: (response) => {
          console.log('Client mis à jour avec succès', response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour:', error);
          this.loading = false;
          alert('Erreur lors de la mise à jour du client');
        }
      });
    } else {
      // Création
      this.clientCompanyService.createClient(formData).subscribe({
        next: (response: any) => {
          console.log('Client créé avec succès', response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error: any) => {
          console.error('Erreur lors de la création:', error);
          this.loading = false;
          alert('Erreur lors de la création du client');
        }
      });
    }
  }

  hideDialog() {
    this.resetForm();
    this.onClose.emit();
  }
}