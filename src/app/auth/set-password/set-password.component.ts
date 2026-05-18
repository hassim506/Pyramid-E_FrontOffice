import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DataService } from '../../shared/service/data/data.service';
import { AuthService } from '../../shared/service/authentification/auth.service';
import { routes } from '../../shared/service/routes/routes';
import { welcomeLogin } from '../../shared/models/model';

@Component({
  standalone: true,
  selector: 'app-set-password',
  imports: [CommonModule, FormsModule, RouterLink, SlickCarouselModule],
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.scss'
})
export class SetPasswordComponent implements OnInit {
  routes = routes;
  public welcomeLogin: welcomeLogin[] = [];

  token = '';
  email = '';

  password        = '';
  passwordConfirm = '';
  showPass        = false;
  showConfirm     = false;

  isLoading  = false;
  success    = false;
  errorMsg   = '';

  strengthLevel = '';
  strengthMsg   = '';
  strengthColor = '';

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
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.welcomeLogin = this.dataService.welcomeLogin;
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token') ?? '';
    this.email = this.route.snapshot.queryParamMap.get('email') ?? '';
    if (!this.token || !this.email) {
      this.errorMsg = 'Lien de réinitialisation invalide ou incomplet.';
    }
  }

  checkStrength(value: string): void {
    this.password = value;
    if (!value) { this.strengthLevel = ''; this.strengthMsg = ''; return; }
    const len     = value.length;
    const hasLow  = /[a-z]/.test(value);
    const hasNum  = /[0-9]/.test(value);
    const hasSym  = /[#?!@$%^&*\-]/.test(value);
    if (len < 8)                             { this.strengthLevel = 'poor';   this.strengthMsg = 'Trop court (min. 8 caractères)';     this.strengthColor = '#dc2626'; }
    else if (hasLow && !hasNum && !hasSym)   { this.strengthLevel = 'weak';   this.strengthMsg = 'Moyen — ajoutez des chiffres';       this.strengthColor = '#f59e0b'; }
    else if (hasLow && hasNum && !hasSym)    { this.strengthLevel = 'strong'; this.strengthMsg = 'Bien — ajoutez un symbole spécial';  this.strengthColor = '#3b82f6'; }
    else if (hasLow && hasNum && hasSym)     { this.strengthLevel = 'heavy';  this.strengthMsg = 'Excellent mot de passe !';           this.strengthColor = '#059669'; }
  }

  submit(): void {
    this.errorMsg = '';
    if (!this.token || !this.email) { this.errorMsg = 'Lien invalide.'; return; }
    if (!this.password)             { this.errorMsg = 'Veuillez saisir un mot de passe.'; return; }
    if (this.password.length < 8)   { this.errorMsg = 'Le mot de passe doit contenir au moins 8 caractères.'; return; }
    if (this.password !== this.passwordConfirm) { this.errorMsg = 'Les mots de passe ne correspondent pas.'; return; }

    this.isLoading = true;
    this.authService.resetPassword(this.token, this.email, this.password, this.passwordConfirm).subscribe({
      next: () => { this.isLoading = false; this.success = true; },
      error: (err: any) => {
        this.isLoading = false;
        this.errorMsg  = err?.message || 'Une erreur est survenue.';
      }
    });
  }
}
