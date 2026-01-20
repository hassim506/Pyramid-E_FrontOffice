import { Component, EventEmitter, Input, OnInit, Output,OnChanges } from '@angular/core';
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
export class ClientAddComponent implements OnInit, OnChanges {
  @Input() visible: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() clientData: Client | null = null;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<void>();

  clientForm!: FormGroup;
  loading: boolean = false;

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
  }

ngOnChanges() {
  // Réinitialiser le formulaire quand la modal s'ouvre
  if (this.visible) {
    if (this.isEditMode && this.clientData) {
      // Mode édition : populer avec les données existantes
      this.initForm(); // Réinitialiser d'abord
      this.populateForm(); // Puis populer
    } else if (!this.isEditMode) {
      // Mode création : formulaire vide avec valeurs par défaut
      this.initForm(); // Réinitialiser
      this.resetForm(); // Appliquer les valeurs par défaut
    }
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
    date_fin_contrat: ['', Validators.required],
    pays: ['SN', Validators.required] // 🔧 Valeur fixe au lieu de this.clientData?.pays
  });
}

  populateForm() {
    if (this.clientData) {
      console.log('=== POPULATE FORM DEBUG ===');
    console.log('Client data:', this.clientData);
    console.log('Pays:', this.clientData.pays);
    console.log('========================');
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
        date_fin_contrat: this.formatDateForInput(this.clientData.date_fin_contrat),
        pays: this.clientData.pays || 'SN' // 🆕 Ajoutez le champ pays avec fallback

      });
    }
  }

  resetForm() {
    this.clientForm.reset({
      statut: 'actif',
      pays: 'SN' // 🆕 Sénégal par défaut

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
  getCountryFlag(countryCode?: string | null): string {
    if (!countryCode) return '🌍';
    
    const country = this.paysList.find(p => p.code === countryCode);
    return country ? country.flag : '🌍';
}

getCountryName(countryCode?: string | null): string {
    if (!countryCode) return 'Non défini';
    
    const country = this.paysList.find(p => p.code === countryCode);
    return country ? country.nom : countryCode;
}

// Ajoutez la liste des pays si elle n'existe pas déjà


  hideDialog() {
    this.resetForm();
    this.onClose.emit();
  }
}