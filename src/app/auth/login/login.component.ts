import { Component } from '@angular/core';
import { DataService } from '../../shared/service/data/data.service';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../shared/service/routes/routes';
import { welcomeLogin } from '../../shared/models/model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AuthService, LoginRequest } from '../../shared/service/authentification/auth.service';

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
      // Utilisation de role_id pour la redirection
      const roleId = res.user?.role_id;
      if (roleId === 2) {
        this.router.navigate(['/student/student-dashboard']);
      } else if (roleId === 3) {
        this.router.navigate(['/instructor/instructor-dashboard']);
      }else if (roleId === 4) {
        this.router.navigate(['/instructor/instructor-dashboard']);
      } else if (roleId === 1) {
        this.router.navigate(['/superadmin/superadmin-dashboard']);
      } else {
        this.router.navigate(['/index']);
      }
    },
    error: (err: any) => {
      this.isLoading = false;
      this.errorMessage = err?.message || 'Erreur de connexion. Veuillez vérifier vos identifiants.';
      console.error('Erreur login:', err);
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