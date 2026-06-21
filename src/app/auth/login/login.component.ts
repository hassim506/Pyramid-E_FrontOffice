import { Component } from '@angular/core';
import { DataService } from '../../shared/service/data/data.service';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../shared/service/routes/routes';
import { welcomeLogin } from '../../shared/models/model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AuthService, LoginRequest } from '../../shared/service/authentification/auth.service';
import { RoleRedirectService } from '../../core/services/role-redirect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, SlickCarouselModule]
})
export class LoginComponent {
  public routes = routes;
  loginForm: FormGroup;
  public welcomeLogin: welcomeLogin[] = [];
  password: boolean = false;
  isLoading = false;
  errorMessage = '';

  // Magic link
  loginMode: 'password' | 'magic' = 'password';
  magicEmail = '';
  magicLoading = false;
  magicSent = false;
  magicError = '';

  public authSlider = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private authService: AuthService,
    private roleRedirect: RoleRedirectService,
    public router: Router
  ) {
    this.welcomeLogin = this.dataService.welcomeLogin;
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePassword(): void {
    this.password = !this.password;
  }
onSubmit(): void {
  this.errorMessage = '';

  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  this.isLoading = true;
  const payload: LoginRequest = {
    email: this.loginForm.get('email')?.value.trim(),
    password: this.loginForm.get('password')?.value
  };

  this.authService.login(payload).subscribe({
    next: (res) => {
      this.isLoading = false;
      const roleId    = res.user?.role_id ?? 0;
      // role_type est renvoyé à la racine de la réponse par le backend
      const roleType  = (res.role_type ?? res.user?.['role_type']) as string | undefined;
      const roleNames = res.roles ?? res.user?.roles ?? [];
      this.roleRedirect.redirectAfterLogin(roleId, roleType, roleNames);
    },
    error: (err: any) => {
      this.isLoading = false;
      this.errorMessage = err?.message || 'Erreur de connexion. Veuillez vérifier vos identifiants.';
      console.error('Erreur login:', err);
    }
  });
}

  sendMagicLink(): void {
    this.magicError = '';
    if (!this.magicEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.magicEmail)) {
      this.magicError = 'Veuillez entrer une adresse e-mail valide.';
      return;
    }
    this.magicLoading = true;
    this.authService.sendMagicLink(this.magicEmail).subscribe({
      next: () => {
        this.magicLoading = false;
        this.magicSent = true;
      },
      error: (err: any) => {
        this.magicLoading = false;
        this.magicError = err?.message || 'Une erreur est survenue.';
      }
    });
  }

  directIndex() {
    this.onSubmit();
  }

  get f() {
    return this.loginForm.controls;
  }
}
