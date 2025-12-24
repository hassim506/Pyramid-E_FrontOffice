import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { welcomeLogin } from '../../shared/models/model';
import { DataService } from '../../shared/service/data/data.service';
import { routes } from '../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel'
import { AuthService } from '../../shared/service/authentification/auth.service';
import { HeaderComponent } from '../../features/layouts/header/header.component';
import { FooterComponent } from '../../features/layouts/footer/footer.component';
import { AdminHeaderComponent } from '../../features/layouts/admin-header/admin-header.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    SlickCarouselModule,
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent
  ]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  password: boolean[] = [false, false];
  strengthLevel = '';
  public routes = routes;
  public welcomeLogin: welcomeLogin[] = [];
  isAdmin = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dataService: DataService
  ) {
    this.welcomeLogin = this.dataService.welcomeLogin;
    this.registerForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numero: ['', Validators.required],
      fonction: ['', Validators.required],
      role_id: ['', Validators.required], // Pas de valeur par défaut
      entreprise_id: [1, Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required],
      statut: [1]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.checkAdminAccess();
  }

  checkAdminAccess(): void {
    const user = this.authService.getUser();
    this.isAdmin = user && (user.role_id === 1 || user.fonction?.toLowerCase().includes('admin'));

    console.log('Current user:', user);
    console.log('Is admin:', this.isAdmin);

    if (!this.isAdmin) {
      this.errorMessage = 'Accès refusé. Seuls les administrateurs peuvent créer des comptes.';
    }
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('password_confirmation')?.value
      ? null : { mismatch: true };
  }

  togglePassword(index: number): void {
    this.password[index] = !this.password[index];
  }

  checkPasswordStrength(event: any): void {
    const value = event.target.value;
    if (value.length < 8) {
      this.strengthLevel = 'poor';
    } else if (!/[A-Za-z0-9]/.test(value)) {
      this.strengthLevel = 'weak';
    } else if (!/[^A-Za-z0-9]/.test(value)) {
      this.strengthLevel = 'strong';
    } else {
      this.strengthLevel = 'heavy';
    }
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    if (!this.isAdmin) {
      this.errorMessage = 'Vous n\'avez pas les droits pour créer un compte.';
      return;
    }

    this.isLoading = true;
    const formData = this.registerForm.value;

    // Convertir role_id en number
    formData.role_id = parseInt(formData.role_id);

    console.log('Form data before submit:', formData);

    this.authService.register(formData).subscribe({
      next: (res) => {
        this.isLoading = false;
        console.log('Register response:', res);

        if (res?.success || res?.status) {
          this.successMessage = res?.message || 'Compte créé avec succès !';
          this.registerForm.reset();
          // Réinitialiser les valeurs par défaut
          this.registerForm.patchValue({
            entreprise_id: 1,
            statut: 1
          });

          // Redirection après 2 secondes
          setTimeout(() => {
            this.router.navigate(['/index']); // ou vers une liste d'utilisateurs
          }, 2000);
        } else {
          this.errorMessage = res?.message || 'Erreur lors de la création du compte';
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Register error:', err);

        if (err.error?.errors) {
          // Erreurs de validation Laravel
          const errors = Object.values(err.error.errors).flat();
          this.errorMessage = errors.join(', ');
        } else {
          this.errorMessage = err.error?.message || err.message || 'Erreur lors de la création du compte';
        }
      }
    });
  }

  get f() {
    return this.registerForm.controls;
  }
}
