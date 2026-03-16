import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { FormationService } from '../../../shared/service/formation/formation.service';
import { CategorieService } from '../../../shared/service/categorie/categorie-service.service';
// import { AuthService } from '../../../core/services/auth.service';
import { CategorieFormation } from '../../../shared/service/categorie/categorie-service.service';

import { AuthService } from '../../../shared/service/authentification/auth.service';


declare var bootstrap: any;

interface Module {
  id?: string;
  titre: string;
  description: string;
  duree_estimee: number;
  ordre: number;
  sections: Section[];
}

interface Section {
  id?: string;
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
      nb_max_participants: [25, [Validators.min(1)]],
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
      duree_totale: ['', [Validators.min(1)]],
      public_cible: [''],
      tags: [''],
      date_debut: [''],
      date_fin: [''],
      metadata: [''],
      inscription_ouverte: [true],
      est_publie: [false]
    });

    this.pricingForm = this.fb.group({
      cout_conception: [0, [Validators.min(0)]],
      cout_production: [0, [Validators.min(0)]],
      cout_formateur_jour: [600, [Validators.min(0)]],
      frais_logistique: [50, [Validators.min(0)]],
      nb_jours: [1, [Validators.min(1)]],
      notes_estimation: ['']
    });
  }

  // ==================== CHARGEMENT DES DONNÉES ====================

  loadCategories(): void {
    const subscription = this.categorieService.getCategories().subscribe({
      next: (response: any) => {
        this.categories = response.data || response;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des catégories:', err);
        this.error = 'Erreur lors du chargement des catégories';
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

        // Sauvegarder les données originales pour la comparaison
        this.originalCourseData = JSON.parse(JSON.stringify(this.course));

        // Remplir les formulaires avec les données
        this.populateFormsWithCourseData();
        this.loadModulesAndSections();
        this.loading = false;
      },
      error: (err: { status: number; error: { message: any; }; message: any; }) => {
        this.loading = false;
        console.error('Erreur lors du chargement de la formation:', err);

        if (err.status === 404) {
          this.error = 'Formation non trouvée';
        } else if (err.status === 403) {
          this.error = 'Accès non autorisé à cette formation';
        } else {
          this.error = 'Erreur lors du chargement de la formation : ' + (err.error?.message || err.message);
        }
      }
    });
    this.subscriptions.add(subscription);
  }

  populateFormsWithCourseData(): void {
    if (!this.course) return;

    // Formulaire de base
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

    // Formulaire média
    this.mediaForm.patchValue({
      media_url: this.course.media_url || '',
      video_autoplay: Boolean(this.course.video_autoplay),
      video_show_controls: this.course.video_show_controls !== false
    });

    if (this.course.image_url) {
      this.imagePreview = this.course.image_url;
    }

    // Formulaire informations supplémentaires
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

    // Formulaire prix
    this.pricingForm.patchValue({
      cout_conception: this.course.cout_conception || 0,
      cout_production: this.course.cout_production || 0,
      cout_formateur_jour: this.course.cout_formateur_jour || 600,
      frais_logistique: this.course.frais_logistique || 50,
      nb_jours: this.course.nb_jours || 1,
      notes_estimation: this.course.notes_estimation || ''
    });

    // Gestion des tableaux
    this.handleArrayData();

    // Valider l'URL vidéo si présente
    if (this.mediaForm.get('media_url')?.value) {
      this.validateVideoUrl();
    }

    // Marquer les formulaires comme non modifiés après le remplissage initial
    setTimeout(() => {
      this.basicInfoForm.markAsPristine();
      this.mediaForm.markAsPristine();
      this.additionalInfoForm.markAsPristine();
      this.pricingForm.markAsPristine();
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
    // Surveiller les changements dans tous les formulaires
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

  // ==================== VALIDATION DES ÉTAPES ====================

  isStepCompleted(stepIndex: number): boolean {
    switch (stepIndex) {
      case 0:
        return this.basicInfoForm.valid;
      case 1:
        return true; // Média est optionnel
      case 2:
        return this.modules.length > 0;
      case 3:
        return this.additionalInfoForm.valid;
      case 4:
        return true; // Coûts sont optionnels
      default:
        return false;
    }
  }

  hasChangesInStep(stepIndex: number): boolean {
    switch (stepIndex) {
      case 0:
        return this.basicInfoForm.dirty;
      case 1:
        return this.mediaForm.dirty || this.selectedImageFile !== null;
      case 2:
        return true; // Considérer toujours comme modifié pour les modules
      case 3:
        return this.additionalInfoForm.dirty;
      case 4:
        return this.pricingForm.dirty;
      default:
        return false;
    }
  }

  // ==================== NAVIGATION ====================
nextStep(): void {
  console.log('Next step called, current step:', this.currentStep);
  if (this.validateCurrentStep() && this.currentStep < 4) {
    this.currentStep++;
    console.log('Moving to step:', this.currentStep);
  }
}

prevStep(): void {
  console.log('Prev step called, current step:', this.currentStep);
  if (this.currentStep > 0) {
    this.currentStep--;
    console.log('Moving to step:', this.currentStep);
  }
}

validateCurrentStep(): boolean {
  console.log('Validating step:', this.currentStep);
  
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
      // Média optionnel - toujours valide
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
      // Coûts optionnels - toujours valide
      break;
  }
  
  this.error = ''; // Clear any previous errors
  return true;
}
  markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  // ==================== SAUVEGARDE PARTIELLE ====================

  updateBasicInfo(): void {
    if (this.basicInfoForm.invalid) {
      this.markFormGroupTouched(this.basicInfoForm);
      return;
    }

    this.saving = true;
    const basicData = {
      ...this.basicInfoForm.value,
      objectifs: this.objectifs.filter(obj => obj.trim()).join(', '),
      prerequis: this.prerequis.filter(pre => pre.trim()).join(', ')
    };

    const subscription = this.formationService.updateFormation(this.courseId!, basicData).subscribe({
      next: () => {
        this.saving = false;
        this.success = 'Informations de base sauvegardées !';
        this.basicInfoForm.markAsPristine();
        setTimeout(() => this.success = '', 3000);
      },
      error: (err) => {
        this.saving = false;
        this.error = 'Erreur lors de la sauvegarde : ' + (err.error?.message || err.message);
        setTimeout(() => this.error = '', 5000);
      }
    });
    this.subscriptions.add(subscription);
  }

  resetStep(stepIndex: number): void {
    if (confirm('Annuler toutes les modifications de cette étape ?')) {
      switch (stepIndex) {
        case 0:
          this.populateBasicInfoForm();
          break;
        case 1:
          this.populateMediaForm();
          break;
        case 2:
          this.loadModulesAndSections();
          break;
        case 3:
          this.populateAdditionalInfoForm();
          break;
        case 4:
          this.populatePricingForm();
          break;
      }
    }
  }

  saveDraft(): void {
    this.saving = true;
    const draftData = {
      ...this.buildFormData(),
      est_publie: false,
      statut: 'brouillon'
    };

    const subscription = this.formationService.updateFormation(this.courseId!, draftData).subscribe({
      next: () => {
        this.saving = false;
        this.success = 'Brouillon sauvegardé !';
        this.hasUnsavedChanges = false;
        this.markAllFormsAsPristine();
        setTimeout(() => this.success = '', 3000);
      },
      error: (err) => {
        this.saving = false;
        this.error = 'Erreur lors de la sauvegarde : ' + (err.error?.message || err.message);
        setTimeout(() => this.error = '', 5000);
      }
    });
    this.subscriptions.add(subscription);
  }

  saveChanges(): void {
    this.updateCourse();
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

  // ==================== COMPTEURS ====================

  getObjectifsCount(): number {
    return this.objectifs.filter(obj => obj.trim()).length;
  }

  getPrerequisCount(): number {
    return this.prerequis.filter(pre => pre.trim()).length;
  }

  getCompetencesCount(): number {
    return this.competencesAcquises.filter(comp => comp.trim()).length;
  }

  getOutilsCount(): number {
    return this.outilsRequis.filter(outil => outil.trim()).length;
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
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      this.processImageFile(file);
    }
  }
createNewCourse(): void {
  this.router.navigate(['/instructor/courses/create']);
}
  processImageFile(file: File): void {
    // Validation du type de fichier
    if (!file.type.startsWith('image/')) {
      this.imageError = 'Veuillez sélectionner un fichier image';
      return;
    }

    // Validation de la taille (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      this.imageError = 'L\'image ne doit pas dépasser 5MB';
      return;
    }

    this.imageError = '';
    this.selectedImageFile = file;

    // Créer un aperçu
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imagePreview = e.target?.result as string;
      this.markAsChanged();
    };
    reader.readAsDataURL(file);
  }

  removeImage(): void {
    this.imagePreview = null;
    this.selectedImageFile = null;
    this.markAsChanged();
  }

  // ==================== MÉDIA - VIDEO ====================

  onVideoUrlChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const url = target.value;
    
    if (url) {
      this.validateVideoUrl();
    } else {
      this.videoUrlError = '';
      this.videoUrlValid = false;
    }
  }

  validateVideoUrl(): void {
    const url = this.mediaForm.get('media_url')?.value;
    
    if (!url) {
      this.videoUrlError = '';
      this.videoUrlValid = false;
      return;
    }

    try {
      new URL(url);
      
      if (this.isYouTubeUrl(url) || this.isVimeoUrl(url) || this.isDirectVideoUrl(url)) {
        this.videoUrlError = '';
        this.videoUrlValid = true;
      } else {
        this.videoUrlError = 'URL non supportée. Utilisez YouTube, Vimeo ou un lien direct vers une vidéo.';
        this.videoUrlValid = false;
      }
    } catch {
      this.videoUrlError = 'URL invalide';
      this.videoUrlValid = false;
    }
  }

  clearVideoUrl(): void {
    this.mediaForm.patchValue({ media_url: '' });
    this.videoUrlError = '';
    this.videoUrlValid = false;
  }

  isYouTubeUrl(url: string): boolean {
    return /^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)/.test(url);
  }

  isVimeoUrl(url: string): boolean {
    return /^https?:\/\/(www\.)?vimeo\.com\//.test(url);
  }

  isDirectVideoUrl(url: string): boolean {
    return /\.(mp4|webm|ogg)$/i.test(url);
  }

  getYouTubeEmbedUrl(url: string): SafeResourceUrl {
    let videoId = '';
    
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  getVimeoEmbedUrl(url: string): SafeResourceUrl {
    const videoId = url.split('vimeo.com/')[1].split('?')[0];
    const embedUrl = `https://player.vimeo.com/video/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  // ==================== MODULES ====================

  getEmptyModule(): Module {
    return {
      titre: '',
      description: '',
      duree_estimee: 0,
      ordre: this.modules.length + 1,
      sections: []
    };
  }

  openModuleModal(): void {
    this.editingModuleIndex = null;
    this.newModule = this.getEmptyModule();
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
    if (this.editingModuleIndex !== null) {
      this.modules[this.editingModuleIndex] = { ...this.newModule };
    } else {
      this.modules.push({ ...this.newModule });
    }

    this.markAsChanged();
    this.closeModal('moduleModal');
    this.newModule = this.getEmptyModule();
    this.editingModuleIndex = null;
  }

  removeModule(index: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce module et toutes ses sections ?')) {
      this.modules.splice(index, 1);
      this.markAsChanged();
    }
  }

  getModuleDuration(module: Module): number {
    return module.sections.reduce((total, section) => total + (section.duree_estimee || 0), 0);
  }

  getTotalSections(): number {
    return this.modules.reduce((total, module) => total + module.sections.length, 0);
  }

  getTotalDuration(): number {
    return this.modules.reduce((total, module) => total + this.getModuleDuration(module), 0);
  }

  // ==================== SECTIONS ====================

  getEmptySection(): Section {
    return {
      titre: '',
      type: 'video',
      duree_estimee: 0,
      contenu: '',
      ressources: '',
      obligatoire: true,
      visible: true,
      ordre: 0
    };
  }

  openSectionModal(moduleIndex: number): void {
    this.currentModuleIndex = moduleIndex;
    this.editingSectionIndex = null;
    this.currentSection = this.getEmptySection();
    this.currentSection.ordre = this.modules[moduleIndex].sections.length + 1;
    
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
    if (this.currentModuleIndex === null) return;

    if (this.editingSectionIndex !== null) {
      this.modules[this.currentModuleIndex].sections[this.editingSectionIndex] = { ...this.currentSection };
    } else {
      this.modules[this.currentModuleIndex].sections.push({ ...this.currentSection });
    }

    this.markAsChanged();
    this.closeModal('sectionModal');
    this.currentSection = this.getEmptySection();
    this.editingSectionIndex = null;
    this.currentModuleIndex = null;
  }

  removeSection(moduleIndex: number, sectionIndex: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette section ?')) {
      this.modules[moduleIndex].sections.splice(sectionIndex, 1);
      this.markAsChanged();
    }
  }

  // ==================== UTILITAIRES ====================

  closeModal(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }

  getDifficulteLabel(value: string): string {
    const labels: { [key: string]: string } = {
      'facile': 'Facile',
      'moyen': 'Moyen',
      'difficile': 'Difficile',
      'expert': 'Expert'
    };
    return labels[value] || value;
  }

  getFormControlValue(controlName: string): any {
    // Cherche d'abord dans basicInfoForm
    if (this.basicInfoForm.get(controlName)) {
      return this.basicInfoForm.get(controlName)?.value;
    }
    // Puis dans additionalInfoForm
    if (this.additionalInfoForm.get(controlName)) {
      return this.additionalInfoForm.get(controlName)?.value;
    }
    // Puis dans pricingForm
    if (this.pricingForm.get(controlName)) {
      return this.pricingForm.get(controlName)?.value;
    }
    return null;
  }

  // ==================== CALCULS COÛTS ====================

  getCoutDeveloppement(): number {
    const conception = this.pricingForm.get('cout_conception')?.value || 0;
    const production = this.pricingForm.get('cout_production')?.value || 0;
    return conception + production;
  }

  getCoutFormateur(): number {
    const tarifJour = this.pricingForm.get('cout_formateur_jour')?.value || 0;
    const nbJours = this.pricingForm.get('nb_jours')?.value || 1;
    return tarifJour * nbJours;
  }

  getCoutLogistique(): number {
    const fraisParParticipant = this.pricingForm.get('frais_logistique')?.value || 0;
    const nbParticipants = this.basicInfoForm.get('nb_max_participants')?.value || 1;
    return fraisParParticipant * nbParticipants;
  }

  getCoutTotal(): number {
    return this.getCoutDeveloppement() + this.getCoutFormateur() + this.getCoutLogistique();
  }

  getCoutParticipant(): number {
    const total = this.getCoutTotal();
    const nbParticipants = this.basicInfoForm.get('nb_max_participants')?.value || 1;
    return Math.round(total / nbParticipants);
  }

  getCoutParHeure(): number {
    const total = this.getCoutTotal();
    const dureeHeures = this.additionalInfoForm.get('duree_totale')?.value || 1;
    return Math.round(total / dureeHeures);
  }

  // ==================== MISE À JOUR FINALE ====================

  updateCourse(): void {
    if (!this.validateAllSteps()) {
      this.error = 'Veuillez corriger les erreurs avant de sauvegarder';
      return;
    }

    this.saving = true;
    const formData = this.buildFormData();

    console.log('Données à envoyer:', formData);

    const subscription = this.formationService.updateFormation(this.courseId!, formData).subscribe({
      next: (response) => {
        this.saving = false;
        this.hasUnsavedChanges = false;
        this.markAllFormsAsPristine();
        this.showSuccessModal();
        console.log('Formation mise à jour avec succès:', response);
      },
      error: (err) => {
        this.saving = false;
        console.error('Erreur lors de la mise à jour:', err);
        this.error = 'Erreur lors de la mise à jour : ' + (err.error?.message || err.message);
        setTimeout(() => this.error = '', 5000);
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

    return {
      ...basicInfo,
      ...mediaInfo,
      ...additionalInfo,
      ...pricingInfo,
      objectifs: this.objectifs.filter(obj => obj.trim()).join(', '),
      prerequis: this.prerequis.filter(pre => pre.trim()).join(', '),
      competences_acquises: this.competencesAcquises.filter(comp => comp.trim()).join(', '),
      outils_requis: this.outilsRequis.filter(outil => outil.trim()).join(', '),
      modules: JSON.stringify(this.modules),
      metadata: parsedMetadata
    };
  }


  validateAllSteps(): boolean {
    let allValid = true;

    // Valider toutes les étapes
    for (let i = 0; i <= 4; i++) {
      this.currentStep = i;
      if (!this.validateCurrentStep()) {
        allValid = false;
        break;
      }
    }

    return allValid;
  }

  private markAllFormsAsPristine(): void {
    this.basicInfoForm.markAsPristine();
    this.mediaForm.markAsPristine();
    this.additionalInfoForm.markAsPristine();
    this.pricingForm.markAsPristine();
  }

  private showSuccessModal(): void {
    const modal = new bootstrap.Modal(document.getElementById('updateSuccessModal'));
    modal.show();
  }

  // ==================== MÉTHODES DE REMPLISSAGE INDIVIDUELLES ====================

  private populateBasicInfoForm(): void {
    if (!this.originalCourseData) return;
    
    this.basicInfoForm.patchValue({
      titre: this.originalCourseData.titre || '',
      categorie_formation_id: this.originalCourseData.categorie_formation_id || '',
      niveau: this.originalCourseData.niveau || 'debutant',
      langue: this.originalCourseData.langue || 'fr',
      type: this.originalCourseData.type || 'en_ligne',
      nb_max_participants: this.originalCourseData.nb_max_participants || 25,
      short_description: this.originalCourseData.short_description || '',
      description: this.originalCourseData.description || '',
      est_certifiante: Boolean(this.originalCourseData.est_certifiante)
    });
    
    this.basicInfoForm.markAsPristine();
  }

  private populateMediaForm(): void {
    if (!this.originalCourseData) return;
    
    this.mediaForm.patchValue({
      media_url: this.originalCourseData.media_url || '',
      video_autoplay: Boolean(this.originalCourseData.video_autoplay),
      video_show_controls: this.originalCourseData.video_show_controls !== false
    });
    
    this.imagePreview = this.originalCourseData.image_url || null;
    this.selectedImageFile = null;
    this.mediaForm.markAsPristine();
  }

  private populateAdditionalInfoForm(): void {
    if (!this.originalCourseData) return;
    
    this.additionalInfoForm.patchValue({
      difficulte: this.originalCourseData.difficulte || 'moyen',
      prix: this.originalCourseData.prix || 0,
      duree_totale: this.originalCourseData.duree_totale || null,
      public_cible: this.originalCourseData.public_cible || '',
      tags: this.originalCourseData.tags || '',
      date_debut: this.originalCourseData.date_debut ? this.originalCourseData.date_debut.split('T')[0] : '',
      date_fin: this.originalCourseData.date_fin ? this.originalCourseData.date_fin.split('T')[0] : '',
      metadata: this.originalCourseData.metadata ? JSON.stringify(this.originalCourseData.metadata) : '',
      inscription_ouverte: this.originalCourseData.inscription_ouverte !== false,
      est_publie: Boolean(this.originalCourseData.est_publie)
    });
    
    this.additionalInfoForm.markAsPristine();
  }

  private populatePricingForm(): void {
    if (!this.originalCourseData) return;
    
    this.pricingForm.patchValue({
      cout_conception: this.originalCourseData.cout_conception || 0,
      cout_production: this.originalCourseData.cout_production || 0,
      cout_formateur_jour: this.originalCourseData.cout_formateur_jour || 600,
      frais_logistique: this.originalCourseData.frais_logistique || 50,
      nb_jours: this.originalCourseData.nb_jours || 1,
      notes_estimation: this.originalCourseData.notes_estimation || ''
    });
    
    this.pricingForm.markAsPristine();
  }

  // ==================== NAVIGATION POST-MISE À JOUR ====================

  goToCoursesList(): void {
    if (this.hasUnsavedChanges) {
      if (confirm('Vous avez des modifications non sauvegardées. Êtes-vous sûr de vouloir quitter ?')) {
        this.router.navigate(['/instructor/courses']);
      }
    } else {
      this.router.navigate(['/instructor/courses']);
    }
  }

  continueEditing(): void {
    this.closeModal('updateSuccessModal');
    this.hasUnsavedChanges = false;
  }

  previewCourse(): void {
    if (this.courseId) {
      window.open(`/courses/${this.courseId}`, '_blank');
    }
  }

  confirmDeleteCourse(): void {
    if (!this.courseId) return;

    const subscription = this.formationService.deleteFormation(this.courseId).subscribe({
      next: () => {
        this.success = 'Formation supprimée avec succès';
        setTimeout(() => {
          this.router.navigate(['/instructor/courses']);
        }, 1500);
      },
      error: (err) => {
        this.error = 'Erreur lors de la suppression : ' + (err.error?.message || err.message);
        setTimeout(() => this.error = '', 5000);
      }
    });
    this.subscriptions.add(subscription);
  }
}