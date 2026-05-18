import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/service/authentification/auth.service';
import { routes } from '../../shared/service/routes/routes';

@Component({
  standalone: true,
  selector: 'app-magic-verify',
  imports: [CommonModule, RouterLink],
  templateUrl: './magic-verify.component.html',
})
export class MagicVerifyComponent implements OnInit {
  public routes = routes;
  state: 'loading' | 'success' | 'error' = 'loading';
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (!token) {
      this.state = 'error';
      this.errorMsg = 'Lien de connexion invalide.';
      return;
    }

    this.authService.verifyMagicLink(token).subscribe({
      next: (res) => {
        this.state = 'success';
        const roleId = res.user?.role_id;
        setTimeout(() => {
          if (roleId === 2)       this.router.navigate(['/student/student-dashboard']);
          else if ([3, 10, 6, 13].includes(roleId!)) this.router.navigate(['/instructor/instructor-dashboard']);
          else if ([4, 5, 9, 14].includes(roleId!))  this.router.navigate(['/adminrh/adminrh-dashboard']);
          else if (roleId === 1)  this.router.navigate(['/superadmin/superadmin-dashboard']);
          else                    this.router.navigate(['/index']);
        }, 1200);
      },
      error: (err) => {
        this.state = 'error';
        this.errorMsg = err?.message || 'Lien invalide ou expiré.';
      }
    });
  }
}
