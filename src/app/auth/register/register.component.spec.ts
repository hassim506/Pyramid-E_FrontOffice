import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/service/authentification/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, SlickCarouselModule]
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  password: boolean[] = [false, false];
  strengthLevel = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numero: ['', Validators.required],
      fonction: ['', Validators.required],
      role_id: [3, Validators.required], // 3 = étudiant, 2 = formateur, 1 = admin
      entreprise_id: [1, Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required],
      statut: [1]
    }, { validators: this.passwordMatchValidator });
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
    // Ajoute ici ta logique de force de mot de passe
    if (value.length < 8) this.strengthLevel = 'poor';
    else if (!/[A-Za-z0-9]/.test(value)) this.strengthLevel = 'weak';
    else if (!/[^A-Za-z0-9]/.test(value)) this.strengthLevel = 'strong';
    else this.strengthLevel = 'heavy';
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res?.success || res?.status) {
          this.successMessage = 'Inscription réussie !';
          setTimeout(() => this.router.navigate(['/auth/login']), 1500);
        } else {
          this.errorMessage = res?.message || 'Erreur lors de l’inscription';
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.message || 'Erreur lors de l’inscription';
      }
    });
  }
}