import { Component, EventEmitter, Input, OnInit, Output,OnChanges } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Company, Client } from '../../../shared/models/client-company.models';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
// import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';


@Component({
  selector: 'app-company-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './company-add.component.html',
  styleUrl: './company-add.component.scss'
})
export class CompanyAddComponent implements OnInit, OnChanges {
  @Input() visible: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() companyData: any | null = null;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<void>();

  companyForm!: FormGroup;
  loading: boolean = false;
  clients: any[] = [];
  
  // 🆕 Liste des pays
  paysList = [
    { code: 'SN', nom: 'Sénégal', flag: '🇸🇳' },
    { code: 'FR', nom: 'France', flag: '🇫🇷' },
    { code: 'ML', nom: 'Mali', flag: '🇲🇱' },
    { code: 'BF', nom: 'Burkina Faso', flag: '🇧🇫' },
    { code: 'CI', nom: 'Côte d\'Ivoire', flag: '🇨🇮' },
    { code: 'GN', nom: 'Guinée', flag: '🇬🇳' },
    { code: 'MR', nom: 'Mauritanie', flag: '🇲🇷' },
    { code: 'GM', nom: 'Gambie', flag: '🇬🇲' },
    { code: 'GW', nom: 'Guinée-Bissau', flag: '🇬🇼' },
    { code: 'CV', nom: 'Cap-Vert', flag: '🇨🇻' }
  ];

  constructor(
    private fb: FormBuilder,
    private clientCompanyService: ClientCompanyService
  ) {}

  ngOnInit() {
    this.initForm();
    // Charge les clients une seule fois ; si on est en mode édition, peuple le formulaire après
    this.loadClients(() => {
      if (this.visible && this.companyData && this.isEditMode) {
        this.populateForm();
      }
    });
  }

  ngOnChanges() {
    if (this.visible && this.companyData && this.isEditMode) {
      if (this.clients.length > 0) {
        // Clients déjà chargés : on peut peupler immédiatement
        this.populateForm();
      }
      // Sinon ngOnInit -> loadClients callback s'en chargera
    } else if (this.visible && !this.isEditMode) {
      this.resetForm();
    }
  }

  initForm() {
    this.companyForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      ninea: ['', [Validators.required, Validators.minLength(14)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      secteur_activite: ['', Validators.required],
      taille_effectif: ['', [Validators.required, Validators.min(1)]],
      client_id: ['', Validators.required],
      statut: ['', Validators.required],
      pays: ['', Validators.required] // 🆕 Nouveau champ
    });
  }

  loadClients(afterLoad?: () => void) {
    this.clientCompanyService.getClients().subscribe({
      next: (response) => {
        this.clients = response.clients || response.data || [];
        if (afterLoad) afterLoad();
      },
      error: (error) => console.error('Erreur chargement clients:', error)
    });
  }

  populateForm() {
    if (!this.companyData) return;
    const clientId = this.companyData.client_id
      ?? this.companyData.client?.id
      ?? '';
    this.companyForm.patchValue({
      nom:              this.companyData.nom,
      ninea:            this.companyData.ninea,
      email:            this.companyData.email,
      telephone:        this.companyData.telephone,
      adresse:          this.companyData.adresse,
      secteur_activite: this.companyData.secteur_activite,
      taille_effectif:  this.companyData.taille_effectif,
      client_id:        String(clientId),
      statut:           this.companyData.statut,
      pays:             this.companyData.pays
    });
  }

  resetForm() {
    this.companyForm.reset();
    // Prédéfinir le Sénégal par défaut
    this.companyForm.patchValue({ pays: 'SN' });
  }

  // 🆕 Méthode pour obtenir le drapeau d'un pays
  getCountryFlag(countryCode: string): string {
    const country = this.paysList.find(p => p.code === countryCode);
    return country ? country.flag : '🌍';
  }

  saveCompany() {
    if (this.companyForm.invalid) {
      Object.keys(this.companyForm.controls).forEach(key => {
        this.companyForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.loading = true;
    const formData = { ...this.companyForm.value };

    // Convertir les valeurs numériques
    if (formData.client_id) {
      formData.client_id = parseInt(formData.client_id);
    }
    if (formData.taille_effectif) {
      formData.taille_effectif = parseInt(formData.taille_effectif);
    }

    console.log('===== DONNÉES ENVOYÉES =====');
    console.log(JSON.stringify(formData, null, 2));
    console.log('============================');

    if (this.isEditMode && this.companyData) {
      this.clientCompanyService.updateCompany(this.companyData.id, formData).subscribe({
        next: (response) => {
          console.log('Entreprise mise à jour:', response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          this.handleError(error);
        }
      });
    } else {
      this.clientCompanyService.createCompany(formData).subscribe({
        next: (response) => {
          console.log('Entreprise créée:', response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          this.handleError(error);
        }
      });
    }
  }

  private handleError(error: any): void {
    let errorMessage = 'Erreur lors de l\'opération';
    
    if (error.error?.errors) {
      errorMessage = Object.values(error.error.errors).flat().join('\n');
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    }
    
    alert(errorMessage);
    this.loading = false;
  }

  hideDialog() {
    this.resetForm();
    this.onClose.emit();
  }
}