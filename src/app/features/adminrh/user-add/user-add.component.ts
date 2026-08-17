import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../../shared/models/user.models';
import { Client, Company } from '../../../shared/models/client-company.models';
import { UserService } from '../../../shared/service/user/user.service';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { DirectionService } from '../../../shared/service/direction/direction.service';
import { sortRoles } from '../../../shared/utils/role-sort.utils';

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
  loading = false;
  errorMessage = '';
  clients: Client[] = [];
  companies: Company[] = [];
  roles: any[] = [];
  showPasswordFields = false;
  directionOptions: { id: number; label: string; type: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private clientCompanyService: ClientCompanyService,
    private directionService: DirectionService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadClients();
    this.loadCompanies();
    this.loadRoles();
    this.loadDirections();
  }

  loadRoles(): void {
    this.userService.getRoles().subscribe({
      next: (response: any) => {
        let roles: any[] = [];
        if (Array.isArray(response)) roles = response;
        else if (response?.data) roles = response.data;
        else if (response?.roles) roles = response.roles;
        this.roles = sortRoles(roles);
      },
      error: () => {
        this.roles = [
          { id: 4, name: 'Responsable RH' },
          { id: 5, name: 'Responsable RH Groupe' },
          { id: 3, name: 'Formateur' },
          { id: 2, name: 'Employé' },
        ];
      }
    });
  }

  
  ngOnChanges() {
    this.errorMessage = '';
    if (this.visible && this.userData && this.isEditMode) {
      this.showPasswordFields = false;
      this.initForm();
      this.populateForm();
    } else if (this.visible && !this.isEditMode) {
      this.showPasswordFields = true;
      this.initForm();
      this.resetForm();
    }
  }

  initForm() {
    const pwValidators = (!this.isEditMode) ? [Validators.required, Validators.minLength(8)] : [];
    this.userForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      numero: [''],
      matricule: [''],
      direction: [''],
      direction_id: [null],
      fonction: [''],
      role_id: ['', Validators.required],
      entreprise_id: [''],
      statut: [1, Validators.required],
      password: ['', pwValidators],
      password_confirmation: ['', pwValidators],
    });
    this.userForm.addValidators(this.passwordMatchValidator);
  }

  private passwordMatchValidator(control: { get: (k: string) => any }) {
    const pw  = control.get('password')?.value;
    const pwc = control.get('password_confirmation')?.value;
    if (!pw && !pwc) return null;
    return pw === pwc ? null : { passwordMismatch: true };
  }

  togglePasswordFields(): void {
    this.showPasswordFields = !this.showPasswordFields;
    const pwValidators = this.showPasswordFields ? [Validators.required, Validators.minLength(8)] : [];
    this.userForm.get('password')?.setValidators(pwValidators);
    this.userForm.get('password_confirmation')?.setValidators(pwValidators);
    this.userForm.get('password')?.updateValueAndValidity();
    this.userForm.get('password_confirmation')?.updateValueAndValidity();
    this.userForm.updateValueAndValidity();
    if (!this.showPasswordFields) {
      this.userForm.patchValue({ password: '', password_confirmation: '' });
    }
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
    this.clientCompanyService.getMyCompanies().subscribe({
      next: (response) => {
        this.companies = response.entreprises || response.data || [];
      },
      error: (error) => console.error('Erreur chargement entreprises:', error)
    });
  }

  loadDirections() {
    this.directionService.getArborescence().subscribe({
      next: (res) => {
        this.directionOptions = [];
        const arbo = res.arborescence || [];
        for (const dir of arbo) {
          this.directionOptions.push({ id: dir.id, label: dir.nom, type: 'direction' });
          for (const dept of (dir.enfants || [])) {
            this.directionOptions.push({ id: dept.id, label: `${dir.nom} → ${dept.nom}`, type: dept.type });
            for (const equipe of (dept.enfants || [])) {
              this.directionOptions.push({ id: equipe.id, label: `${dir.nom} → ${dept.nom} → ${equipe.nom}`, type: equipe.type });
            }
          }
        }
      },
      error: () => {}
    });
  }

  populateForm() {
    if (this.userData) {
      const rawRoleId = this.userData.role
        ? (typeof this.userData.role === 'object' ? (this.userData.role as any).id : this.userData.role_id)
        : this.userData.role_id;

      this.userForm.patchValue({
        nom: this.userData.nom || '',
        prenom: this.userData.prenom || '',
        email: this.userData.email || '',
        numero: this.userData.numero || '',
        matricule: this.userData.matricule || '',
        direction: this.userData.direction || '',
        direction_id: this.userData.direction_id || null,
        fonction: this.userData.fonction || '',
        role_id: rawRoleId ? String(rawRoleId) : '',
        entreprise_id: this.userData.entreprise_id || '',
        statut: this.userData.statut
      });
    }
  }

  resetForm() {
    this.userForm.reset({ statut: 1 });
  }

  saveUser() {
  this.errorMessage = '';
  if (this.userForm.invalid) {
    Object.keys(this.userForm.controls).forEach(key => {
      this.userForm.get(key)?.markAsTouched();
    });
    if (this.userForm.hasError('passwordMismatch')) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
    } else {
      const missing: string[] = [];
      if (this.userForm.get('nom')?.invalid)    missing.push('Nom');
      if (this.userForm.get('prenom')?.invalid) missing.push('Prénom');
      if (this.userForm.get('email')?.invalid)  missing.push('Email valide');
      if (this.userForm.get('role_id')?.invalid) missing.push('Rôle');
      if (this.userForm.get('password')?.invalid) missing.push('Mot de passe (min. 8 caractères)');
      this.errorMessage = missing.length
        ? `Champs obligatoires manquants : ${missing.join(', ')}`
        : 'Veuillez corriger les erreurs dans le formulaire.';
    }
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
    delete formData.entreprise_id;
  }
  if (formData.direction_id) {
    formData.direction_id = parseInt(formData.direction_id);
  } else {
    delete formData.direction_id;
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
        this.errorMessage = this.parseApiError(error);
        this.loading = false;
      }
    });
  } else {
    this.userService.createUser(formData).subscribe({
      next: () => { this.loading = false; this.onSave.emit(); this.hideDialog(); },
      error: (error) => {
        this.errorMessage = this.parseApiError(error);
        this.loading = false;
      }
    });
  }
}

  private parseApiError(error: any): string {
    const errs = error?.error?.errors;
    if (errs) {
      const labels: Record<string, string> = {
        email:     'Email',
        numero:    'Numéro de téléphone',
        matricule: 'Matricule',
      };
      const duplicateMap: Record<string, string> = {
        'has already been taken': 'déjà utilisé',
        'unique':                  'déjà utilisé',
      };
      const messages: string[] = [];
      for (const [field, fieldErrors] of Object.entries(errs)) {
        const label = labels[field] || field;
        const arr = Array.isArray(fieldErrors) ? fieldErrors : [fieldErrors];
        for (const msg of arr as string[]) {
          const isDuplicate = Object.keys(duplicateMap).some(k => msg.toLowerCase().includes(k));
          messages.push(isDuplicate
            ? `${label} déjà utilisé dans le système`
            : `${label} : ${msg}`);
        }
      }
      if (messages.length) return messages.join(' · ');
    }
    return error?.error?.message || 'Erreur lors de l\'enregistrement.';
  }

  hideDialog() {
    this.resetForm();
    this.onClose.emit();
  }
}