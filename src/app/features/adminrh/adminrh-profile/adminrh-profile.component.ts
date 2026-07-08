import { User } from '../../../shared/models/user.models';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-adminrh-profile',
  templateUrl: './adminrh-profile.component.html',
  styleUrls: ['./adminrh-profile.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class AdminrhProfileComponent implements OnInit {
  public routes = routes;
  profile: User | null = null;
  profileForm: FormGroup;
  isEditing = false;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      nom:       ['', Validators.required],
      prenom:    ['', Validators.required],
      email:     ['', [Validators.required, Validators.email]],
      telephone: [''],
      fonction:  ['', Validators.required],
      numero:    ['']
    });
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    try {
      const raw = localStorage.getItem('pyramide_user');
      if (raw) {
        const user: any = JSON.parse(raw);
        this.profile = user as User;
        this.profileForm.patchValue({
          nom:       user.nom       || '',
          prenom:    user.prenom    || '',
          email:     user.email     || '',
          telephone: user.telephone || '',
          fonction:  user.fonction  || '',
          numero:    user.numero    || ''
        });
      }
    } catch (e) {}
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (!this.isEditing && this.profile) {
      this.profileForm.patchValue({
        nom:       this.profile.nom,
        prenom:    this.profile.prenom,
        email:     this.profile.email,
        telephone: this.profile.telephone,
        fonction:  this.profile.fonction,
        numero:    this.profile.numero
      });
    }
  }

  saveProfile(): void {
    if (this.profileForm.valid && this.profile) {
      this.loading = true;
      const updated: User = { ...this.profile, ...this.profileForm.value };
      try {
        localStorage.setItem('pyramide_user', JSON.stringify(updated));
        this.profile = updated;
        this.isEditing = false;
      } catch (e) {}
      this.loading = false;
    }
  }

  getStatusText(): string {
    return this.profile?.statut === 1 ? 'Actif' : 'Inactif';
  }

  getInitials(): string {
    if (!this.profile) return '';
    return ((this.profile.prenom?.charAt(0) || '') + (this.profile.nom?.charAt(0) || '')).toUpperCase();
  }
}
