import { User } from '../../../shared/models/user.models';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../../../shared/service/data/data.service';
import { routes } from '../../../shared/service/routes/routes';

interface data {
  active?: boolean;
}

@Component({
    selector: 'app-superadmin-profile',
    templateUrl: './superadmin-profile.component.html',
    styleUrls: ['./superadmin-profile.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class SuperadminProfileComponent implements OnInit {
  public routes = routes;
  superAdminProfile: User | null = null;
  profileForm: FormGroup;
  isEditing = false;
  loading = false;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) {
    this.profileForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: [''],
      fonction: ['', [Validators.required]],
      numero: ['']
    });
  }

  ngOnInit(): void {
    this.loadSuperAdminProfile();
  }

  loadSuperAdminProfile(): void {
    this.loading = true;
    console.log('🔍 Début du chargement du profil...');
    
    try {
      // Récupérer l'utilisateur connecté depuis localStorage avec la bonne clé
      const userDataString = localStorage.getItem('pyramide_user');
      console.log('📦 Données brutes du localStorage:', userDataString);
      
      if (userDataString) {
        const currentUser: any = JSON.parse(userDataString);
        console.log('✅ Utilisateur parsé:', currentUser);
        
        // Ajouter le champ role si absent
        if (!currentUser.role && currentUser.role_id === 1) {
          currentUser.role = 'Super Admin';
          console.log('➕ Ajout du rôle: Super Admin');
        } else if (!currentUser.role) {
          currentUser.role = 'Utilisateur';
        }
        
        this.superAdminProfile = currentUser as User;
        console.log('👤 Profil superAdmin assigné:', this.superAdminProfile);
        
        this.profileForm.patchValue({
          nom: currentUser.nom || '',
          prenom: currentUser.prenom || '',
          email: currentUser.email || '',
          telephone: currentUser.telephone || '',
          fonction: currentUser.fonction || '',
          numero: currentUser.numero || ''
        });
        console.log('📝 Formulaire rempli');
      } else {
        console.error('❌ Aucune donnée dans localStorage avec la clé "pyramide_user"');
      }
    } catch (error) {
      console.error('💥 Erreur lors du chargement du profil:', error);
    } finally {
      this.loading = false;
      console.log('🏁 Fin du chargement. superAdminProfile:', this.superAdminProfile);
      console.log('🏁 Loading:', this.loading);
    }
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (!this.isEditing && this.superAdminProfile) {
      this.profileForm.patchValue({
        nom: this.superAdminProfile.nom,
        prenom: this.superAdminProfile.prenom,
        email: this.superAdminProfile.email,
        telephone: this.superAdminProfile.telephone,
        fonction: this.superAdminProfile.fonction,
        numero: this.superAdminProfile.numero
      });
    }
  }

  saveProfile(): void {
    if (this.profileForm.valid && this.superAdminProfile) {
      this.loading = true;
      const updatedProfile: User = {
        ...this.superAdminProfile,
        ...this.profileForm.value
      };

      try {
        // Sauvegarder avec la bonne clé
        localStorage.setItem('pyramide_user', JSON.stringify(updatedProfile));
        this.superAdminProfile = updatedProfile;
        this.isEditing = false;
        console.log('✅ Profil mis à jour avec succès');
      } catch (error) {
        console.error('❌ Erreur lors de la mise à jour du profil:', error);
      } finally {
        this.loading = false;
      }
    }
  }

  toggleClass(data: data) {
    data.active = !data.active;
  }

  getStatusText(): string {
    if (!this.superAdminProfile) return '';
    return this.superAdminProfile.statut === 1 ? 'Actif' : 'Inactif';
  }

  getStatusClass(): string {
    if (!this.superAdminProfile) return '';
    return this.superAdminProfile.statut === 1 ? 'status-active' : 'status-inactive';
  }

  getInitials(): string {
    if (!this.superAdminProfile) return '';
    const firstNameInitial = this.superAdminProfile.prenom?.charAt(0) || '';
    const lastNameInitial = this.superAdminProfile.nom?.charAt(0) || '';
    return (firstNameInitial + lastNameInitial).toUpperCase();
  }
}