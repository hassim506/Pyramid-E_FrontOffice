import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Company, Client } from '../../../shared/models/client-company.models';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { AuthService } from '../../../shared/service/authentification/auth.service'; 
import { UserService } from '../../../shared/service/authentification/user.service';

@Component({
  selector: 'app-company-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './company-add.component.html',
  styleUrl: './company-add.component.scss'
})

export class CompanyAddComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() companyData: Company | null = null;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<void>();

  companyForm!: FormGroup;
  loading: boolean = false;
  clients: Client[] = [];
  currentClient: Client | null = null;

  constructor(
    private fb: FormBuilder,
    private clientCompanyService: ClientCompanyService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadClients();
  }

  ngOnChanges() {
    if (this.visible && this.companyData && this.isEditMode) {
      this.populateForm();
    } else if (this.visible && !this.isEditMode) {
      this.resetForm();
    }
  }

 initForm() {
    this.companyForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      ninea: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      secteur_activite: ['', Validators.required],
      taille_effectif: ['', [Validators.required, Validators.min(1)]],
      // ✅ Retirer client_id du FormGroup car plus besoin d'input
      statut: ['active', Validators.required]
    });
  }
  loadClients() {
    const user = this.authService.getUser();
    const userGroupeId = user?.groupe_id;

    this.clientCompanyService.getClients().subscribe({
      next: (response) => {
        const allClients = response.clients || response.data || [];
        // ✅ Trouver le client du même groupe
        this.currentClient = allClients.find((c: any) => c.groupe_id === userGroupeId) || null;
        console.log('Client du groupe trouvé:', this.currentClient);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des clients:', error);
      }
    });
  }

  saveCompany() {
    if (this.companyForm.invalid) {
      Object.keys(this.companyForm.controls).forEach(key => {
        this.companyForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.loading = true;
    const formData = {
      ...this.companyForm.value,
      client_id: this.currentClient?.id // ✅ Ajouter automatiquement l'ID du client
    };

    if (this.isEditMode && this.companyData) {
      // Mise à jour
      this.clientCompanyService.updateCompany(this.companyData.id, formData).subscribe({
        next: (response) => {
          console.log('Entreprise mise à jour avec succès', response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour:', error);
          this.loading = false;
          alert('Erreur lors de la mise à jour de l\'entreprise');
        }
      });
    } else {
      // Création
      this.clientCompanyService.createMyCompany(formData).subscribe({
        next: (response: any) => {
          console.log('Entreprise créée avec succès', response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error: any) => {
          console.error('Erreur lors de la création:', error);
          this.loading = false;
          alert('Erreur lors de la création de l\'entreprise');
        }
      });
    }
  }

  populateForm() {
    if (this.companyData) {
      this.companyForm.patchValue({
        nom: this.companyData.nom,
        ninea: this.companyData.ninea,
        email: this.companyData.email,
        telephone: this.companyData.telephone,
        adresse: this.companyData.adresse,
        secteur_activite: this.companyData.secteur_activite,
        taille_effectif: this.companyData.taille_effectif,
        client_id: this.companyData.client_id,
        statut: this.companyData.statut
      });
    }
  }

  resetForm() {
    this.companyForm.reset({
      statut: 'active'
    });
  }

  // saveCompany() {
  //   if (this.companyForm.invalid) {
  //     Object.keys(this.companyForm.controls).forEach(key => {
  //       this.companyForm.get(key)?.markAsTouched();
  //     });
  //     return;
  //   }

  //   this.loading = true;
  //   const formData = this.companyForm.value;

  //   if (this.isEditMode && this.companyData) {
  //     // Mise à jour
  //     this.clientCompanyService.updateCompany(this.companyData.id, formData).subscribe({
  //       next: (response) => {
  //         console.log('Entreprise mise à jour avec succès', response);
  //         this.loading = false;
  //         this.onSave.emit();
  //         this.hideDialog();
  //       },
  //       error: (error) => {
  //         console.error('Erreur lors de la mise à jour:', error);
  //         this.loading = false;
  //         alert('Erreur lors de la mise à jour de l\'entreprise');
  //       }
  //     });
  //   } else {
  //     // Création
  //     this.clientCompanyService.createMyCompany(formData).subscribe({
  //       next: (response: any) => {
  //         console.log('Entreprise créée avec succès', response);
  //         this.loading = false;
  //         this.onSave.emit();
  //         this.hideDialog();
  //       },
  //       error: (error: any) => {
  //         console.error('Erreur lors de la création:', error);
  //         this.loading = false;
  //         alert('Erreur lors de la création de l\'entreprise');
  //       }
  //     });
  //   }
  // }

  hideDialog() {
    this.resetForm();
    this.onClose.emit();
  }
}