import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  standalone: true,
  selector: 'app-verify-certificate',
  imports: [CommonModule, RouterLink],
  templateUrl: './verify-certificate.component.html',
  styleUrl: './verify-certificate.component.scss',
})
export class VerifyCertificateComponent implements OnInit {
  state: 'loading' | 'valid' | 'invalid' | 'error' = 'loading';
  cert: any = null;
  errorMsg = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code');
    if (!code) {
      this.state = 'error';
      this.errorMsg = 'Aucun code de certificat fourni.';
      return;
    }

    this.http.get<any>(`${environment.apiUrl}/certificats/verify?code=${encodeURIComponent(code)}`).subscribe({
      next: (res) => {
        this.cert = res;
        this.state = res.valid ? 'valid' : 'invalid';
      },
      error: (err) => {
        if (err.status === 404) {
          this.state = 'invalid';
          this.cert = null;
        } else {
          this.state = 'error';
          this.errorMsg = 'Impossible de vérifier le certificat. Veuillez réessayer.';
        }
      }
    });
  }
}
