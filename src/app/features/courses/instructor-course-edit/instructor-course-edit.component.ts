import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { FormationService } from '../../../shared/service/formation/formation.service';
import { CategorieService, CategorieFormation } from '../../../shared/service/categorie/categorie-service.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';

declare var bootstrap: any;

interface Module {
  id?: number;
  titre: string;
  description: string;
  duree_estimee: number;
  ordre: number;
  sections: Section[];
}

interface Section {
  id?: number;
  titre: string;
  type: string;
  duree_estimee: number;
  contenu: string;
  ressources: string;
  obligatoire: boolean;
  visible: boolean;
  ordre: number;
}

@Component({
  selector: 'app-instructor-course-edit',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './instructor-course-edit.component.html',
  styleUrl: './instructor-course-edit.component.scss'
})
export class InstructorCourseEditComponent implements OnInit, OnDestroy {
  // État général
  loading = true;
  saving = false;
  error = '';
  success = '';
  currentStep = 0;

  // ID et données de la formation
  courseId: number | null = null;
  course: any = null;
  originalCourseData: any = null;
  hasUnsavedChanges = false;

  // Formulaires
  basicInfoForm!: FormGroup;
  mediaForm!: FormGroup;
  additionalInfoForm!: FormGroup;
  pricingForm!: FormGroup;

  // Données
  categories: CategorieFormation[] = [];
  modules: Module[] = [];
  objectifs: string[] = [''];
  prerequis: string[] = [''];
  competencesAcquises: string[] = [''];
  outilsRequis: string[] = [''];

  // Média
  imagePreview: string | null = null;
  selectedImageFile: File | null = null;
  isDragOver = false;
  imageError = '';
  videoUrlError = '';
  videoUrlValid = false;

  // Modals - Module
  newModule: Module = this.getEmptyModule();
  editingModuleIndex: number | null = null;

  // Modals - Section
  currentSection: Section = this.getEmptySection();
  editingSectionIndex: number | null = null;
  currentModuleIndex: number | null = null;

  // Subscriptions
  private subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private formationService: FormationService,
    private categorieService: CategorieService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private authService: AuthService
  ) {
    this.initForms();
  }

  ngOnInit(): void {
    // Récupération de l'ID depuis la route
    const idParam = this.route.snapshot.paramMap.get('id');
    this.courseId = idParam ? parseInt(idParam, 10) : null;

    if (!this.courseId || isNaN(this.courseId)) {
      this.error = 'ID de formation manquant ou invalide';
      this.router.navigate(['/instructor/courses']);
      return;
    }

    this.loadCategories();
    this.loadCourseData();
    this.setupChangeDetection();
    this.setupBeforeUnloadHandler();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    window.removeEventListener('beforeunload', this.beforeUnloadHandler);
  }

  // ==================== INITIALISATION ====================

  initForms(): void {
    this.basicInfoForm = this.fb.group({
      titre: ['', [Validators.required, Validators.minLength(5)]],
      categorie_formation_id: ['', Validators.required],
      niveau: ['debutant', Validators.required],
      langue: ['fr', Validators.required],
      type: ['en_ligne', Validators.required],
      nb_max_participants: [25],
      short_description: ['', Validators.required],
      description: ['', Validators.required],
      est_certifiante: [false]
    });

    this.mediaForm = this.fb.group({
      media_url: [''],
      video_autoplay: [false],
      video_show_controls: [true]
    });

    this.additionalInfoForm = this.fb.group({
      difficulte: ['moyen', Validators.required],
      prix: [0, [Validators.required, Validators.min(0)]],
      duree_totale: [null, [Validators.min(1)]],
      public_cible: [''],
      tags: [''],
      date_debut: [''],
      date_fin: [''],
      metadata: [''],
      inscription_ouverte: [true],
      est_publie: [false]
    });

    this.pricingForm = this.fb.group({
      cout_conception: [0],
      cout_production: [0],
      cout_formateur_jour: [0],
      frais_logistique: [0],
      nb_jours: [1],
      notes_estimation: ['']
    });
  }

  // ==================== CHARGEMENT DES DONNÉES ====================

  loadCategories(): void {
    const subscription = this.categorieService.getCategories().subscribe({
      next: (response: any) => {
        try {
          if (Array.isArray(response)) {
            this.categories = response;
          } else if (response?.data?.categories && Array.isArray(response.data.categories)) {
            this.categories = response.data.categories;
          } else if (response?.categories && Array.isArray(response.categories)) {
            this.categories = response.categories;
          } else if (response?.data && Array.isArray(response.data)) {
            this.categories = response.data;
          } else {
            console.warn('Format de réponse inattendu pour les catégories:', response);
            this.categories = [];
          }

          this.categories = this.categories.filter(cat => 
            cat && typeof cat === 'object' && cat.id && cat.nom
          );

          if (this.categories.length === 0) {
            this.error = 'Aucune catégorie de formation disponible.';
          }
        } catch (error) {
          console.error('Erreur lors du traitement des catégories:', error);
          this.categories = [];
          this.error = 'Erreur lors du traitement des catégories.';
        }
      },
      error: (err) => {
        console.error('Erreur chargement catégories:', err);
        this.categories = [];
        this.error = 'Impossible de charger les catégories.';
      }
    });
    this.subscriptions.add(subscription);
  }

  loadCourseData(): void {
    if (!this.courseId) return;

    this.loading = true;
    this.error = '';

    const subscription = this.formationService.getFormationById(this.courseId.toString()).subscribe({
      next: (response: any) => {
        console.log('Réponse API:', response);

        // Gérer différents formats de réponse
        if (response?.data) {
          this.course = response.data;
        } else if (response?.formation) {
          this.course = response.formation;
        } else {
          this.course = response;
        }

        if (!this.course) {
          this.error = 'Formation non trouvée';
          this.loading = false;
          return;
        }

        // Sauvegarder les données originales
        this.originalCourseData = JSON.parse(JSON.stringify(this.course));

        // Remplir les formulaires avec les données
        this.populateFormsWithCourseData();
        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;
        console.error('Erreur lors du chargement de la formation:', err);

        if (err.status === 404) {
          this.error = 'Formation non trouvée';
        } else if (err.status === 403) {
          this.error = 'Accès non autorisé à cette formation';
        } else {
          this.error = 'Erreur lors du chargement de la formation';
        }
      }
    });
    this.subscriptions.add(subscription);
  }

  populateFormsWithCourseData(): void {
    if (!this.course) return;

    // Remplir le formulaire de base
    this.basicInfoForm.patchValue({
      titre: this.course.titre || '',
      categorie_formation_id: this.course.categorie_formation_id || '',
      niveau: this.course.niveau || 'debutant',
      langue: this.course.langue || 'fr',
      type: this.course.type || 'en_ligne',
      nb_max_participants: this.course.nb_max_participants || 25,
      short_description: this.course.short_description || '',
      description: this.course.description || '',
      est_certifiante: Boolean(this.course.est_certifiante)
    });

    // Remplir le formulaire média
    this.mediaForm.patchValue({
      media_url: this.course.media_url || '',
      video_autoplay: Boolean(this.course.video_autoplay),
      video_show_controls: this.course.video_show_controls !== false
    });

    if (this.course.image_url) {
      this.imagePreview = this.course.image_url;
    }

    // Remplir le formulaire d'informations supplémentaires
    this.additionalInfoForm.patchValue({
      difficulte: this.course.difficulte || 'moyen',
      prix: this.course.prix || 0,
      duree_totale: this.course.duree_totale || null,
      public_cible: this.course.public_cible || '',
      tags: this.course.tags || '',
      date_debut: this.course.date_debut ? this.course.date_debut.split('T')[0] : '',
      date_fin: this.course.date_fin ? this.course.date_fin.split('T')[0] : '',
      metadata: this.course.metadata ? JSON.stringify(this.course.metadata) : '',
      inscription_ouverte: this.course.inscription_ouverte !== false,
      est_publie: Boolean(this.course.est_publie)
    });

    // Remplir le formulaire de prix
    this.pricingForm.patchValue({
      cout_conception: this.course.cout_conception || 0,
      cout_production: this.course.cout_production || 0,
      cout_formateur_jour: this.course.cout_formateur_jour || 0,
      frais_logistique: this.course.frais_logistique || 0,
      nb_jours: this.course.nb_jours || 1,
      notes_estimation: this.course.notes_estimation || ''
    });

    // Gestion des tableaux
    this.handleArrayData();
    this.loadModulesAndSections();

    // Valider l'URL vidéo si présente
    if (this.mediaForm.get('media_url')?.value) {
      this.validateVideoUrl();
    }

    // Marquer les formulaires comme non modifiés
    setTimeout(() => {
      this.markAllFormsAsPristine();
      this.hasUnsavedChanges = false;
    }, 100);
  }

  private handleArrayData(): void {
    // Objectifs
    if (this.course.objectifs) {
      if (typeof this.course.objectifs === 'string') {
        this.objectifs = this.course.objectifs.split(',').map((obj: string) => obj.trim()).filter((obj: string) => obj);
      } else if (Array.isArray(this.course.objectifs)) {
        this.objectifs = [...this.course.objectifs];
      }
    }
    if (this.objectifs.length === 0) this.objectifs = [''];

    // Prérequis
    if (this.course.prerequis) {
      if (typeof this.course.prerequis === 'string') {
        this.prerequis = this.course.prerequis.split(',').map((pre: string) => pre.trim()).filter((pre: string) => pre);
      } else if (Array.isArray(this.course.prerequis)) {
        this.prerequis = [...this.course.prerequis];
      }
    }
    if (this.prerequis.length === 0) this.prerequis = [''];

    // Compétences
    if (this.course.competences_acquises) {
      if (typeof this.course.competences_acquises === 'string') {
        this.competencesAcquises = this.course.competences_acquises.split(',').map((comp: string) => comp.trim()).filter((comp: string) => comp);
      } else if (Array.isArray(this.course.competences_acquises)) {
        this.competencesAcquises = [...this.course.competences_acquises];
      }
    }
    if (this.competencesAcquises.length === 0) this.competencesAcquises = [''];

    // Outils
    if (this.course.outils_requis) {
      if (typeof this.course.outils_requis === 'string') {
        this.outilsRequis = this.course.outils_requis.split(',').map((outil: string) => outil.trim()).filter((outil: string) => outil);
      } else if (Array.isArray(this.course.outils_requis)) {
        this.outilsRequis = [...this.course.outils_requis];
      }
    }
    if (this.outilsRequis.length === 0) this.outilsRequis = [''];
  }

  loadModulesAndSections(): void {
    if (!this.course.modules) {
      this.modules = [];
      return;
    }

    try {
      if (typeof this.course.modules === 'string') {
        this.modules = JSON.parse(this.course.modules);
      } else if (Array.isArray(this.course.modules)) {
        this.modules = this.course.modules;
      } else {
        this.modules = [];
      }
    } catch (error) {
      console.error('Erreur lors du parsing des modules:', error);
      this.modules = [];
    }
  }

  // ==================== GESTION DES CHANGEMENTS ====================

  private setupChangeDetection(): void {
    this.subscriptions.add(
      this.basicInfoForm.valueChanges.subscribe(() => {
        this.hasUnsavedChanges = true;
      })
    );

    this.subscriptions.add(
      this.mediaForm.valueChanges.subscribe(() => {
        this.hasUnsavedChanges = true;
      })
    );

    this.subscriptions.add(
      this.additionalInfoForm.valueChanges.subscribe(() => {
        this.hasUnsavedChanges = true;
      })
    );

    this.subscriptions.add(
      this.pricingForm.valueChanges.subscribe(() => {
        this.hasUnsavedChanges = true;
      })
    );
  }

  private setupBeforeUnloadHandler(): void {
    this.beforeUnloadHandler = this.beforeUnloadHandler.bind(this);
    window.addEventListener('beforeunload', this.beforeUnloadHandler);
  }

  private beforeUnloadHandler = (event: BeforeUnloadEvent): string | undefined => {
    if (this.hasUnsavedChanges) {
      const message = 'Vous avez des modifications non sauvegardées. Êtes-vous sûr de vouloir quitter ?';
      event.returnValue = message;
      return message;
    }
    return undefined;
  };

  markAsChanged(): void {
    this.hasUnsavedChanges = true;
  }

  // ==================== NAVIGATION ====================

  nextStep(): void {
    if (this.validateCurrentStep()) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  validateCurrentStep(): boolean {
    switch (this.currentStep) {
      case 0:
        if (this.basicInfoForm.invalid) {
          this.markFormGroupTouched(this.basicInfoForm);
          this.error = 'Veuillez remplir correctement les informations de base';
          setTimeout(() => this.error = '', 5000);
          return false;
        }
        break;
      case 1:
        // Média optionnel
        break;
      case 2:
        if (this.modules.length === 0) {
          this.error = 'Vous devez créer au moins un module';
          setTimeout(() => this.error = '', 5000);
          return false;
        }
        break;
      case 3:
        if (this.additionalInfoForm.invalid) {
          this.markFormGroupTouched(this.additionalInfoForm);
          this.error = 'Veuillez remplir correctement les informations supplémentaires';
          setTimeout(() => this.error = '', 5000);
          return false;
        }
        break;
      case 4:
        // Coûts optionnels
        break;
    }
    this.error = '';
    return true;
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      formGroup.get(key)?.markAsTouched();
    });
  }

  // ==================== OBJECTIFS ====================

  addObjectif(): void {
    this.objectifs.push('');
    this.markAsChanged();
  }

  removeObjectif(index: number): void {
    if (this.objectifs.length > 1) {
      this.objectifs.splice(index, 1);
      this.markAsChanged();
    }
  }

  // ==================== PREREQUIS ====================

  addPrerequis(): void {
    this.prerequis.push('');
    this.markAsChanged();
  }

  removePrerequis(index: number): void {
    if (this.prerequis.length > 1) {
      this.prerequis.splice(index, 1);
      this.markAsChanged();
    }
  }

  // ==================== COMPETENCES ====================

  addCompetence(): void {
    this.competencesAcquises.push('');
    this.markAsChanged();
  }

  removeCompetence(index: number): void {
    if (this.competencesAcquises.length > 1) {
      this.competencesAcquises.splice(index, 1);
      this.markAsChanged();
    }
  }

  // ==================== OUTILS ====================

  addOutil(): void {
    this.outilsRequis.push('');
    this.markAsChanged();
  }

  removeOutil(index: number): void {
    if (this.outilsRequis.length > 1) {
      this.outilsRequis.splice(index, 1);
      this.markAsChanged();
    }
  }

  getCompetencesCount(): number {
    return this.competencesAcquises.filter(c => c.trim()).length;
  }

  getOutilsCount(): number {
    return this.outilsRequis.filter(o => o.trim()).length;
  }

  // ==================== MÉDIA - IMAGE ====================

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.processImageFile(files[0]);
    }
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.processImageFile(input.files[0]);
    }
  }

  processImageFile(file: File): void {
    this.imageError = '';
    
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      this.imageError = 'Format non supporté. Utilisez JPEG, PNG ou WebP.';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      this.imageError = 'L\'image est trop volumineuse. Taille max: 5MB.';
      return;
    }

    this.selectedImageFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      this.markAsChanged();
    };
    reader.readAsDataURL(file);
  }

  removeImage(): void {
    this.imagePreview = null;
    this.selectedImageFile = null;
    this.imageError = '';
    this.markAsChanged();
  }

  // ==================== MÉDIA - VIDEO ====================

  onVideoUrlChange(event: Event): void {
    this.videoUrlError = '';
    this.videoUrlValid = false;
  }

  validateVideoUrl(): void {
    const url = this.mediaForm.get('media_url')?.value;
    if (!url) {
      this.videoUrlValid = false;
      return;
    }

    if (this.isYouTubeUrl(url) || this.isVimeoUrl(url) || this.isDirectVideoUrl(url)) {
      this.videoUrlValid = true;
      this.videoUrlError = '';
    } else {
      this.videoUrlValid = false;
      this.videoUrlError = 'URL non reconnue. Utilisez YouTube, Vimeo ou un lien direct.';
    }
  }

  clearVideoUrl(): void {
    this.mediaForm.patchValue({ media_url: '' });
    this.videoUrlValid = false;
    this.videoUrlError = '';
  }

  isYouTubeUrl(url: string): boolean {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)/.test(url);
  }

  isVimeoUrl(url: string): boolean {
    return /^(https?:\/\/)?(www\.)?vimeo\.com/.test(url);
  }

  isDirectVideoUrl(url: string): boolean {
    return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
  }

  getYouTubeEmbedUrl(url: string): SafeResourceUrl {
    let videoId = '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      videoId = match[2];
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }

  getVimeoEmbedUrl(url: string): SafeResourceUrl {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    const videoId = match ? match[1] : '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://player.vimeo.com/video/${videoId}`
    );
  }

  // ==================== MODULES ====================

  getEmptyModule(): Module {
    return {
      titre: '',
      description: '',
      duree_estimee: 0,
      ordre: 0,
      sections: []
    };
  }

  openModuleModal(): void {
    this.newModule = this.getEmptyModule();
    this.editingModuleIndex = null;
    const modal = new bootstrap.Modal(document.getElementById('moduleModal'));
    modal.show();
  }

  editModule(index: number): void {
    this.editingModuleIndex = index;
    this.newModule = { ...this.modules[index] };
    const modal = new bootstrap.Modal(document.getElementById('moduleModal'));
    modal.show();
  }

  saveModule(): void {
    if (!this.newModule.titre) return;

    if (this.editingModuleIndex !== null) {
      this.modules[this.editingModuleIndex] = {
        ...this.newModule,
        sections: this.modules[this.editingModuleIndex].sections
      };
    } else {
      this.newModule.ordre = this.modules.length;
      this.newModule.sections = [];
      this.modules.push({ ...this.newModule });
    }

    this.closeModal('moduleModal');
    this.markAsChanged();
  }

  removeModule(index: number): void {
    if (confirm('Supprimer ce module et toutes ses sections ?')) {
      this.modules.splice(index, 1);
      this.modules.forEach((m, i) => m.ordre = i);
      this.markAsChanged();
    }
  }

  getModuleDuration(module: Module): number {
    return module.sections?.reduce((sum, s) => sum + (s.duree_estimee || 0), 0) || 0;
  }

  getTotalSections(): number {
    return this.modules.reduce((sum, m) => sum + (m.sections?.length || 0), 0);
  }

  getTotalDuration(): number {
    return this.modules.reduce((sum, m) => sum + this.getModuleDuration(m), 0);
  }

  // ==================== SECTIONS ====================

  getEmptySection(): Section {
    return {
      titre: '',
      type: 'text',
      duree_estimee: 0,
      contenu: '',
      ressources: '',
      obligatoire: true,
      visible: true,
      ordre: 0
    };
  }
private validateSectionType(type: string): string {
  const validTypes = ['text', 'video', 'pdf', 'quiz', 'exercice', 'ressource'];
  return validTypes.includes(type) ? type : 'text';
}
  openSectionModal(moduleIndex: number): void {
    this.currentModuleIndex = moduleIndex;
    this.currentSection = this.getEmptySection();
    this.editingSectionIndex = null;
    const modal = new bootstrap.Modal(document.getElementById('sectionModal'));
    modal.show();
  }

  editSection(moduleIndex: number, sectionIndex: number): void {
    this.currentModuleIndex = moduleIndex;
    this.editingSectionIndex = sectionIndex;
    this.currentSection = { ...this.modules[moduleIndex].sections[sectionIndex] };
    const modal = new bootstrap.Modal(document.getElementById('sectionModal'));
    modal.show();
  }

  saveSection(): void {
    if (!this.currentSection.titre || this.currentModuleIndex === null) return;

    const module = this.modules[this.currentModuleIndex];

    if (this.editingSectionIndex !== null) {
      module.sections[this.editingSectionIndex] = { ...this.currentSection };
    } else {
      this.currentSection.ordre = module.sections.length;
      module.sections.push({ ...this.currentSection });
    }

    this.closeModal('sectionModal');
    this.markAsChanged();
  }

  removeSection(moduleIndex: number, sectionIndex: number): void {
    if (confirm('Supprimer cette section ?')) {
      this.modules[moduleIndex].sections.splice(sectionIndex, 1);
      this.modules[moduleIndex].sections.forEach((s, i) => s.ordre = i);
      this.markAsChanged();
    }
  }

  // ==================== UTILITAIRES ====================

  closeModal(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }

  getDifficulteLabel(value: string): string {
    const labels: { [key: string]: string } = {
      'facile': 'Facile',
      'moyen': 'Moyen',
      'difficile': 'Difficile',
      'expert': 'Expert'
    };
    return labels[value] || value || 'Non défini';
  }

  getFormControlValue(controlName: string): any {
    return this.basicInfoForm.get(controlName)?.value || 
           this.pricingForm.get(controlName)?.value;
  }

  // ==================== CALCULS COÛTS ====================

  getCoutDeveloppement(): number {
    const conception = this.pricingForm.get('cout_conception')?.value || 0;
    const production = this.pricingForm.get('cout_production')?.value || 0;
    return conception + production;
  }

  getCoutFormateur(): number {
    const coutJour = this.pricingForm.get('cout_formateur_jour')?.value || 0;
    const nbJours = this.pricingForm.get('nb_jours')?.value || 1;
    return coutJour * nbJours;
  }

  getCoutLogistique(): number {
    const frais = this.pricingForm.get('frais_logistique')?.value || 0;
    const participants = this.basicInfoForm.get('nb_max_participants')?.value || 1;
    return frais * participants;
  }

  getCoutTotal(): number {
    return this.getCoutDeveloppement() + this.getCoutFormateur() + this.getCoutLogistique();
  }

  getCoutParticipant(): number {
    const total = this.getCoutTotal();
    const participants = this.basicInfoForm.get('nb_max_participants')?.value || 1;
    return Math.round(total / participants);
  }

  getCoutParHeure(): number {
    const total = this.getCoutTotal();
    const duree = this.additionalInfoForm.get('duree_totale')?.value || 1;
    return Math.round(total / duree);
  }

  // ==================== MISE À JOUR ====================

  updateCourse(): void {
    this.saving = true;
    this.error = '';
    this.success = '';

    if (!this.validateAllSteps()) {
      this.saving = false;
      return;
    }

    const formData = this.buildFormData();
    
    console.log('Données envoyées pour mise à jour:', formData);

    const subscription = this.formationService.updateFormation(this.courseId!, formData).subscribe({
      next: (response) => {
        this.saving = false;
        this.success = 'Formation mise à jour avec succès !';
        this.hasUnsavedChanges = false;
        this.markAllFormsAsPristine();
        
        setTimeout(() => {
          const modal = new bootstrap.Modal(document.getElementById('updateSuccessModal'));
          modal.show();
        }, 100);
      },
      error: (err) => {
        this.saving = false;
        console.error('Erreur mise à jour:', err);
        
        if (err.status === 422 && err.error?.errors) {
          const errors = err.error.errors;
          let errorMessage = 'Erreurs de validation :\n';
          
          Object.keys(errors).forEach(field => {
            if (Array.isArray(errors[field])) {
              errorMessage += `• ${field}: ${errors[field].join(', ')}\n`;
            } else {
              errorMessage += `• ${field}: ${errors[field]}\n`;
            }
          });
          
          this.error = errorMessage;
        } else if (err.error?.message) {
          this.error = err.error.message;
        } else {
          this.error = 'Erreur lors de la mise à jour de la formation.';
        }
      }
    });
    this.subscriptions.add(subscription);
  }

  buildFormData(): any {
    const basicInfo = this.basicInfoForm.value;
    const mediaInfo = this.mediaForm.value;
    const additionalInfo = this.additionalInfoForm.value;
    const pricingInfo = this.pricingForm.value;

    // Traitement des métadonnées
    let parsedMetadata = null;
    if (additionalInfo.metadata) {
      try {
        parsedMetadata = JSON.parse(additionalInfo.metadata);
      } catch (e) {
        parsedMetadata = { raw: additionalInfo.metadata };
      }
    }

    const formData: any = {
      // Informations de base
      titre: basicInfo.titre?.trim(),
      short_description: basicInfo.short_description?.trim(),
      description: basicInfo.description?.trim(),
      categorie_formation_id: parseInt(basicInfo.categorie_formation_id) || null,
      niveau: basicInfo.niveau,
      langue: basicInfo.langue,
      type: basicInfo.type,
      nb_max_participants: parseInt(basicInfo.nb_max_participants) || 25,
      est_certifiante: Boolean(basicInfo.est_certifiante),

      // Informations supplémentaires
      difficulte: additionalInfo.difficulte,
      prix: parseFloat(additionalInfo.prix) || 0,
      duree_totale: parseInt(additionalInfo.duree_totale) || null,
      public_cible: additionalInfo.public_cible?.trim() || null,
      tags: additionalInfo.tags?.trim() || null,
      date_debut: additionalInfo.date_debut || null,
      date_fin: additionalInfo.date_fin || null,
      inscription_ouverte: Boolean(additionalInfo.inscription_ouverte),
      est_publie: Boolean(additionalInfo.est_publie),

      // Média
      media_url: mediaInfo.media_url?.trim() || null,
      video_autoplay: Boolean(mediaInfo.video_autoplay),
      video_show_controls: Boolean(mediaInfo.video_show_controls),

      // Objectifs, prérequis, compétences, outils
      objectifs: this.objectifs.filter(obj => obj.trim()).join(', '),
      prerequis: this.prerequis.filter(pre => pre.trim()).join(', '),
      competences_acquises: this.competencesAcquises.filter(comp => comp.trim()).join(', '),
      outils_requis: this.outilsRequis.filter(outil => outil.trim()).join(', '),

      // Modules (JSON stringified pour l'édition)
        modules: this.modules.map(module => ({
        id: module.id,
        titre: module.titre?.trim(),
        description: module.description?.trim(),
        duree_estimee: module.duree_estimee.toString() || '0',
        ordre: module.ordre,
       sections: module.sections.map(section => ({
        id: section.id,
        titre: section.titre?.trim(),
        type: section.type,
        duree_estimee: section.duree_estimee.toString() || '0',
        contenu: section.contenu?.trim() || null,
        ressources: section.ressources?.trim() 
          ? section.ressources.split(',').map(r => r.trim()).filter(r => r) 
          : [],  // Convertir en array au lieu de string
        obligatoire: Boolean(section.obligatoire),
        visible: Boolean(section.visible),
        ordre: section.ordre
      }))
      })),

      // Coûts
      cout_conception: parseFloat(pricingInfo.cout_conception) || 0,
      cout_production: parseFloat(pricingInfo.cout_production) || 0,
      cout_formateur_jour: parseFloat(pricingInfo.cout_formateur_jour) || 0,
      frais_logistique: parseFloat(pricingInfo.frais_logistique) || 0,
      nb_jours: parseInt(pricingInfo.nb_jours) || 1,
      notes_estimation: pricingInfo.notes_estimation?.trim() || null,

      // Métadonnées
      metadata: parsedMetadata
    };

    // Nettoyer les valeurs vides
    Object.keys(formData).forEach(key => {
      if (formData[key] === '' || formData[key] === undefined) {
        formData[key] = null;
      }
    });

    return formData;
  }

  validateAllSteps(): boolean {
    let isValid = true;
    let errorMessages: string[] = [];

    // Valider le formulaire de base
    if (this.basicInfoForm.invalid) {
      this.markFormGroupTouched(this.basicInfoForm);
      isValid = false;
      const formErrors = this.getFormErrorsInFrench(this.basicInfoForm);
      errorMessages.push(...formErrors);
    }

    // Valider le formulaire d'informations supplémentaires
    if (this.additionalInfoForm.invalid) {
      this.markFormGroupTouched(this.additionalInfoForm);
      isValid = false;
      const formErrors = this.getFormErrorsInFrench(this.additionalInfoForm);
      errorMessages.push(...formErrors);
    }

    // Valider que les objectifs ne sont pas vides
    if (this.objectifs.filter(obj => obj.trim()).length === 0) {
      isValid = false;
      errorMessages.push('Au moins un objectif est requis');
    }

    // Afficher les erreurs spécifiques
    if (!isValid) {
      this.error = errorMessages.join('\n');
    }

    return isValid;
  }

  private getFormErrorsInFrench(formGroup: FormGroup): string[] {
    const errors: string[] = [];
    const fieldNames: { [key: string]: string } = {
      'titre': 'Titre',
      'categorie_formation_id': 'Catégorie',
      'niveau': 'Niveau',
      'langue': 'Langue',
      'type': 'Type',
      'short_description': 'Description courte',
      'description': 'Description',
      'difficulte': 'Difficulté',
      'prix': 'Prix',
      'duree_totale': 'Durée totale',
      'public_cible': 'Public cible',
      'nb_max_participants': 'Nombre max de participants'
    };

    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      const fieldName = fieldNames[key] || key;
      
      if (control && control.errors) {
        if (control.errors['required']) {
          errors.push(`• ${fieldName} est requis`);
        }
        if (control.errors['minlength']) {
          const minLength = control.errors['minlength'].requiredLength;
          errors.push(`• ${fieldName} doit contenir au moins ${minLength} caractères`);
        }
        if (control.errors['min']) {
          const minValue = control.errors['min'].min;
          errors.push(`• ${fieldName} doit être supérieur ou égal à ${minValue}`);
        }
      }
    });

    return errors;
  }

  private markAllFormsAsPristine(): void {
    this.basicInfoForm.markAsPristine();
    this.mediaForm.markAsPristine();
    this.additionalInfoForm.markAsPristine();
    this.pricingForm.markAsPristine();
  }

  // ==================== NAVIGATION POST-MISE À JOUR ====================

  goToCoursesList(): void {
    this.closeModal('updateSuccessModal');
    this.router.navigate(['/instructor/courses']);
  }

  continueEditing(): void {
    this.closeModal('updateSuccessModal');
    this.hasUnsavedChanges = false;
  }

  createNewCourse(): void {
    if (this.hasUnsavedChanges) {
      if (confirm('Vous avez des modifications non sauvegardées. Êtes-vous sûr de vouloir créer une nouvelle formation ?')) {
        this.router.navigate(['/instructor/courses/add']);
      }
    } else {
      this.router.navigate(['/instructor/courses/add']);
    }
  }
}