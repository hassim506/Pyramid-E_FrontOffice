import { Component, OnInit } from '@angular/core';
import { CategorieService, CategorieFormation, CategorieFormationRequest } from '../../../shared/service/categorie/categorie-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminrh-categorie',
    imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
  ],
  templateUrl: './adminrh-categorie.component.html',
  styleUrls: ['./adminrh-categorie.component.scss']
})
export class AdminrhCategorieComponent implements OnInit {
  categories: CategorieFormation[] = [];
  loading = false;
  categorieForm: FormGroup;
  
  editMode = false;
  selectedCategorie: CategorieFormation | null = null;

  constructor(
    private categorieService: CategorieService,
    private formBuilder: FormBuilder
  ) {
    this.categorieForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required]],
      short_description: [''],
      couleur: ['#3B82F6', [Validators.required]],
      icone: ['code', [Validators.required]],
      ordre: [1, [Validators.required, Validators.min(1)]],
      est_active: [true],
      est_visible: [true],
      parent_id: [null]
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.loading = true;
    this.categorieService.getCategories().subscribe({
      next: (response: { status: any; data: { categories: CategorieFormation[]; }; }) => {
        if (response.status) {
          this.categories = response.data.categories;
        }
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des catégories:', error);
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.categorieForm.valid) {
      const formData: CategorieFormationRequest = this.categorieForm.value;
      
      if (this.editMode && this.selectedCategorie) {
        this.updateCategorie(formData);
      } else {
        this.createCategorie(formData);
      }
    }
  }

  createCategorie(categorieData: CategorieFormationRequest): void {
    this.categorieService.createCategorie(categorieData).subscribe({
      next: (response: { status: any; }) => {
        if (response.status) {
          this.loadCategories();
          this.resetForm();
        }
      },
      error: (error: any) => {
        console.error('Erreur lors de la création:', error);
      }
    });
  }

  updateCategorie(categorieData: CategorieFormationRequest): void {
    if (this.selectedCategorie) {
      this.categorieService.updateCategorie(this.selectedCategorie.id, categorieData).subscribe({
        next: (response: { status: any; }) => {
          if (response.status) {
            this.loadCategories();
            this.resetForm();
          }
        },
        error: (error: any) => {
          console.error('Erreur lors de la mise à jour:', error);
        }
      });
    }
  }

  editCategorie(categorie: CategorieFormation): void {
    this.editMode = true;
    this.selectedCategorie = categorie;
    this.categorieForm.patchValue({
      nom: categorie.nom,
      description: categorie.description,
      short_description: categorie.short_description,
      couleur: categorie.couleur,
      icone: categorie.icone,
      ordre: categorie.ordre,
      est_active: categorie.est_active,
      est_visible: categorie.est_visible,
      parent_id: categorie.parent_id
    });
  }

  viewCategorie(categorie: CategorieFormation): void {
    this.selectedCategorie = categorie;
  }

  deleteCategorie(categorie: CategorieFormation): void {
    this.selectedCategorie = categorie;
  }

  confirmDelete(): void {
    // Implémentation de la suppression si l'endpoint existe
    console.log('Suppression de la catégorie:', this.selectedCategorie?.nom);
  }

  resetForm(): void {
    this.editMode = false;
    this.selectedCategorie = null;
    this.categorieForm.reset({
      nom: '',
      description: '',
      short_description: '',
      couleur: '#3B82F6',
      icone: 'code',
      ordre: 1,
      est_active: true,
      est_visible: true,
      parent_id: null
    });
  }

  getIconClass(iconeName: string | undefined): string {
    return `isax isax-${iconeName || 'code'}`;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}