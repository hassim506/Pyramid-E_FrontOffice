import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DataService } from '../../shared/service/data/data.service';
import { AuthService } from '../../shared/service/authentification/auth.service';
import { routes } from '../../shared/service/routes/routes';
import { welcomeLogin } from '../../shared/models/model';

@Component({
  standalone: true,
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  imports: [CommonModule, FormsModule, RouterLink, SlickCarouselModule]
})
export class ForgotPasswordComponent {
  public routes = routes;
  public welcomeLogin: welcomeLogin[] = [];

  email     = '';
  isLoading = false;
  sent      = false;
  errorMsg  = '';

  public authSlider = {
    dots: true, infinite: false, speed: 300,
    slidesToShow: 1, slidesToScroll: 1, arrows: false,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 768,  settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    public router: Router
  ) {
    this.welcomeLogin = this.dataService.welcomeLogin;
  }

  submit(): void {
    this.errorMsg = '';
    if (!this.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      this.errorMsg = 'Veuillez entrer une adresse e-mail valide.';
      return;
    }
    this.isLoading = true;
    this.authService.sendPasswordResetLink(this.email).subscribe({
      next: () => { this.isLoading = false; this.sent = true; },
      error: (err: any) => {
        this.isLoading = false;
        this.errorMsg = err?.message || 'Une erreur est survenue.';
      }
    });
  }
}
