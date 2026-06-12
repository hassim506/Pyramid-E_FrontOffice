import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../../shared/models/user.models';
import { Client, Company } from '../../../shared/models/client-company.models';
import { UserService } from '../../../shared/service/user/user.service';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent implements OnInit, OnChanges {
  @Input() visible: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() userData: User | null = null;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<void>();

  userForm!: FormGroup;
  loading: boolean = false;
  clients: Client[] = [];
  companies: Company[] = [];
  roles: any[] = [];
  showPasswordFields = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private clientCompanyService: ClientCompanyService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadClients();
    this.loadCompanies();
    this.loadRoles();
  }
loadRoles() {
  console.log('Chargement des rôles...');
  this.userService.getRoles().subscribe({
    next: (response: any) => {
      console.log('Réponse API roles:', response);
      
      // Gérer différents formats de réponse
      if (Array.isArray(response)) {
        this.roles = response;
      } else if (response && Array.isArray(response.data)) {
        this.roles = response.data;
      } else if (response && Array.isArray(response.roles)) {
        this.roles = response.roles;
      } else if (response && typeof response === 'object') {
        // Si c'est un objet, essayer de convertir en tableau
        this.roles = Object.values(response);
      } else {
        console.error('Format de réponse inattendu pour les rôles:', response);
        this.roles = [];
      }
      
      console.log('Rôles finaux assignés:', this.roles);
    },
    error: (error) => {
      console.error('Erreur chargement rôles:', error);
      // Fallback sur une liste statique
      this.roles = [
        { id: 1, name: 'Super Admin' },
        { id: 2, name: 'Employé' },
        { id: 3, name: 'Formateur' },
        { id: 4, name: 'Responsable RH' },
        { id: 5, name: 'Responsable RH Groupe' },
        
      ];
    }
  });
}
ngOnChanges() {
  if (this.userData && this.isEditMode) {
    this.showPasswordFields = false;
    this.initForm();
    
    // Extraire le role_id depuis l'objet role ou utiliser directement role_id
    const roleId = this.userData.role ? 
      (typeof this.userData.role === 'object' ? this.userData.role.id : this.userData.role_id) : 
      this.userData.role_id;

    this.userForm.patchValue({
      nom: this.userData.nom || '',
      prenom: this.userData.prenom || '',
      email: this.userData.email || '',
      numero: this.userData.numero || '',
      fonction: this.userData.fonction || '',
      role_id: roleId ? String(roleId) : '',
      statut: this.userData.statut,
      entreprise_id: this.userData.entreprise_id || ''
    });

  } else if (!this.isEditMode) {
    this.showPasswordFields = true;
    this.initForm();
  }
}

togglePasswordFields(): void {
  this.showPasswordFields = !this.showPasswordFields;
  const pwValidators = this.showPasswordFields ? [Validators.required, Validators.minLength(8)] : [];
  this.userForm.get('password')?.setValidators(pwValidators);
  this.userForm.get('password_confirmation')?.setValidators(pwValidators);
  this.userForm.get('password')?.updateValueAndValidity();
  this.userForm.get('password_confirmation')?.updateValueAndValidity();
  if (!this.showPasswordFields) {
    this.userForm.patchValue({ password: '', password_confirmation: '' });
  }
}

initForm() {
  const passwordValidators = this.isEditMode ? [] : [Validators.required, Validators.minLength(8)];
  
  this.userForm = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    numero: [''],
    fonction: [''],
    role_id: ['', Validators.required],
    entreprise_id: [''],
    statut: [1, Validators.required],
    password: ['', passwordValidators],
    password_confirmation: ['', passwordValidators]
  });
}

// Ajoutez cette méthode pour debug
isFormValid(): boolean {
  const isValid = this.userForm.valid;
  console.log('Formulaire valide:', isValid);
  if (!isValid) {
    console.log('Champs invalides:', Object.keys(this.userForm.controls)
      .filter(key => this.userForm.get(key)?.invalid)
      .map(key => ({
        field: key,
        errors: this.userForm.get(key)?.errors,
        value: this.userForm.get(key)?.value
      }))
    );
  }
  return isValid;
}
getRoleName(user: any): string {
  if (!user || !user.role) return '';
  if (typeof user.role === 'object' && user.role.name) return user.role.name;
  if (typeof user.role === 'string') return user.role;
  return '';
}
  loadClients() {
    this.clientCompanyService.getClients().subscribe({
      next: (response) => {
        this.clients = response.clients || response.data || [];
      },
      error: (error) => console.error('Erreur chargement clients:', error)
    });
  }

  loadCompanies() {
    this.clientCompanyService.getCompanies().subscribe({
      next: (response) => {
        this.companies = response.entreprises || response.data || [];
      },
      error: (error) => console.error('Erreur chargement entreprises:', error)
    });
  }

  populateForm() {
    if (this.userData) {
      this.userForm.patchValue({
        nom: this.userData.nom,
        prenom: this.userData.prenom,
        email: this.userData.email,
        numero: this.userData.numero,
        fonction: this.userData.fonction,
        role_id: this.userData.role,
        entreprise_id: this.userData.entreprise_id,
        statut: this.userData.statut
      });
    }
  }

  resetForm() {
    this.userForm.reset({ statut: 1 });
  }

  saveUser() {
  if (this.userForm.invalid) {
    Object.keys(this.userForm.controls).forEach(key => {
      this.userForm.get(key)?.markAsTouched();
    });
    return;
  }

  this.loading = true;
  const formData = { ...this.userForm.value };

  // Convertir les valeurs en nombres
  if (formData.role_id) {
    formData.role_id = parseInt(formData.role_id);
  }
  if (formData.statut !== undefined && formData.statut !== '') {
    formData.statut = parseInt(formData.statut);
  }
  if (formData.entreprise_id) {
    formData.entreprise_id = parseInt(formData.entreprise_id);
  } else {
    // Supprimer entreprise_id si vide
    delete formData.entreprise_id;
  }

  // Ajouter created_by (supposons que c'est l'utilisateur connecté avec ID 1)
  formData.created_by = 1;

  if (this.isEditMode && this.userData) {
    if (!formData.password) {
      delete formData.password;
      delete formData.password_confirmation;
    }

    this.userService.updateUser(this.userData.id, formData).subscribe({
      next: () => { this.loading = false; this.onSave.emit(); this.hideDialog(); },
      error: (error) => {
        const msg = error.error?.errors
          ? Object.values(error.error.errors).flat().join('\n')
          : error.error?.message || 'Erreur lors de la mise à jour';
        alert(msg);
        this.loading = false;
      }
    });
  } else {
    this.userService.createUser(formData).subscribe({
      next: () => { this.loading = false; this.onSave.emit(); this.hideDialog(); },
      error: (error) => {
        const msg = error.error?.errors
          ? Object.values(error.error.errors).flat().join('\n')
          : error.error?.message || 'Erreur lors de la création';
        alert(msg);
        this.loading = false;
      }
    });
  }
}

  hideDialog() {
    this.resetForm();
    this.onClose.emit();
  }
}