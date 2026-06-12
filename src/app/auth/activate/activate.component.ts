import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/service/authentification/auth.service';
import { routes } from '../../shared/service/routes/routes';

@Component({
  standalone: true,
  selector: 'app-activate',
  imports: [CommonModule, RouterLink],
  templateUrl: './activate.component.html',
  styleUrl: './activate.component.scss',
})
export class ActivateComponent implements OnInit {
  public routes = routes;
  state: 'loading' | 'success' | 'error' = 'loading';
  userName = '';
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
      this.errorMsg = 'Lien d\'activation invalide.';
      return;
    }

    this.authService.activateAccount(token).subscribe({
      next: (res) => {
        this.state = 'success';
        const u = res.user;
        this.userName = u ? (u['prenom'] ? `${u['prenom']} ${u['nom'] ?? ''}`.trim() : (u.name ?? '')) : '';
        const roleId = res.user?.role_id;
        setTimeout(() => {
          if (roleId === 2)                         this.router.navigate(['/student/student-dashboard']);
          else if ([3, 10, 6, 13].includes(roleId!)) this.router.navigate(['/instructor/instructor-dashboard']);
          else if ([4, 5, 9, 14].includes(roleId!))  this.router.navigate(['/adminrh/adminrh-dashboard']);
          else if (roleId === 1)                    this.router.navigate(['/superadmin/superadmin-dashboard']);
          else                                      this.router.navigate(['/auth/login']);
        }, 2500);
      },
      error: (err) => {
        this.state = 'error';
        this.errorMsg = err?.message || 'Lien d\'activation invalide ou déjà utilisé.';
      }
    });
  }
}
