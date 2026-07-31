import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { FormationService } from '../../../shared/service/formation/formation.service';
import { CategorieService, CategorieFormation } from '../../../shared/service/categorie/categorie-service.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { QuizService } from '../../../shared/service/quiz/quiz.service';
import { QuestionQuizService } from '../../../shared/service/quiz/question-quiz.service';

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
  ressources: string | string[];
  obligatoire: boolean;
  visible: boolean;
  ordre: number;
}

interface QuizQuestion {
  id: number;
  question_text: string;
  type: string;
  points: number;
  ordre: number;
  explication: string;
  reponses: any[];
  _new?: boolean;
}

interface LocalQuiz {
  moduleIndex: number;
  sectionIndex: number;
  quizId?: number;
  titre: string;
  description: string;
  score_minimum: number;
  tentatives_max: number;
  duree_minutes: number;
  questions: QuizQuestion[];
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
  objectifs: string[] = [];
  prerequis: string[] = [];
  competencesAcquises: string[] = [];
  outilsRequis: string[] = [];
  newObjectif = '';
  newPrerequis = '';
  newCompetence = '';
  newOutil = '';

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

  // Section upload (modal)
  sectionVideoMode: 'url' | 'upload' = 'url';
  sectionUploadFile: File | null = null;
  sectionUploading = false;
  sectionUploadError = '';
  sectionUploadPreview: string | null = null;

  // ── quiz editor (step 3) ───────────────────────────────────────────────
  localQuizzes: LocalQuiz[] = [];
  activeQuizKey: string | null = null;
  expandedQuestion: number | null = null;
  loadingQuiz = false;

  // Subscriptions
  private subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private formationService: FormationService,
    private categorieService: CategorieService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private quizService: QuizService,
    private questionService: QuestionQuizService,
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
      short_description: [''],
      description: [''],
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

    const subscription = this.formationService.getFormationById(this.courseId).subscribe({
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

    const rawImage = this.course.image_couverture || this.course.image_url;
    if (rawImage) {
      this.imagePreview = this.formationService.getImageUrl(rawImage);
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
    const rawObjectifs = this.course.objectifs_pedagogiques ?? this.course.objectifs;
    if (rawObjectifs) {
      if (typeof rawObjectifs === 'string') {
        this.objectifs = rawObjectifs.split(',').map((obj: string) => obj.trim()).filter((obj: string) => obj);
      } else if (Array.isArray(rawObjectifs)) {
        this.objectifs = [...rawObjectifs];
      }
    }
    if (this.objectifs.length === 0) this.objectifs = [];

    // Prérequis
    if (this.course.prerequis) {
      if (typeof this.course.prerequis === 'string') {
        this.prerequis = this.course.prerequis.split(',').map((pre: string) => pre.trim()).filter((pre: string) => pre);
      } else if (Array.isArray(this.course.prerequis)) {
        this.prerequis = [...this.course.prerequis];
      }
    }
    if (this.prerequis.length === 0) this.prerequis = [];

    // Compétences
    if (this.course.competences_acquises) {
      if (typeof this.course.competences_acquises === 'string') {
        this.competencesAcquises = this.course.competences_acquises.split(',').map((comp: string) => comp.trim()).filter((comp: string) => comp);
      } else if (Array.isArray(this.course.competences_acquises)) {
        this.competencesAcquises = [...this.course.competences_acquises];
      }
    }
    if (this.competencesAcquises.length === 0) this.competencesAcquises = [];

    // Outils
    if (this.course.outils_requis) {
      if (typeof this.course.outils_requis === 'string') {
        this.outilsRequis = this.course.outils_requis.split(',').map((outil: string) => outil.trim()).filter((outil: string) => outil);
      } else if (Array.isArray(this.course.outils_requis)) {
        this.outilsRequis = [...this.course.outils_requis];
      }
    }
    if (this.outilsRequis.length === 0) this.outilsRequis = [];
  }

  loadModulesAndSections(): void {
    if (!this.course.modules) {
      this.modules = [];
      return;
    }

    try {
      let raw: any[];
      if (typeof this.course.modules === 'string') {
        raw = JSON.parse(this.course.modules);
      } else if (Array.isArray(this.course.modules)) {
        raw = this.course.modules;
      } else {
        raw = [];
      }
      // Normaliser les sections : ressources en string pour le sectionModal
      this.modules = raw.map((m: any) => ({
        ...m,
        sections: (m.sections ?? []).map((s: any) => ({
          ...s,
          ressources: Array.isArray(s.ressources)
            ? s.ressources.join(', ')
            : (s.ressources ?? ''),
        })),
      }));
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
      case 1: break; // Média optionnel
      case 2: break; // Modules optionnels
      case 3: break; // Quiz optionnel
      case 4:
        if (this.additionalInfoForm.invalid) {
          this.markFormGroupTouched(this.additionalInfoForm);
          this.error = 'Veuillez remplir correctement les informations supplémentaires';
          setTimeout(() => this.error = '', 5000);
          return false;
        }
        break;
      case 5: break; // Coûts optionnels
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
    const v = this.newObjectif.trim();
    if (v) { this.objectifs.push(v); this.newObjectif = ''; this.markAsChanged(); }
  }

  removeObjectif(index: number): void {
    if (this.objectifs.length > 1) {
      this.objectifs.splice(index, 1);
      this.markAsChanged();
    }
  }

  // ==================== PREREQUIS ====================

  addPrerequis(): void {
    const v = this.newPrerequis.trim();
    if (v) { this.prerequis.push(v); this.newPrerequis = ''; this.markAsChanged(); }
  }

  removePrerequis(index: number): void {
    if (this.prerequis.length > 1) {
      this.prerequis.splice(index, 1);
      this.markAsChanged();
    }
  }

  // ==================== COMPETENCES ====================

  addCompetence(): void {
    const v = this.newCompetence.trim();
    if (v) { this.competencesAcquises.push(v); this.newCompetence = ''; this.markAsChanged(); }
  }

  removeCompetence(index: number): void {
    if (this.competencesAcquises.length > 1) {
      this.competencesAcquises.splice(index, 1);
      this.markAsChanged();
    }
  }

  // ==================== OUTILS ====================

  addOutil(): void {
    const v = this.newOutil.trim();
    if (v) { this.outilsRequis.push(v); this.newOutil = ''; this.markAsChanged(); }
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
    return module.sections?.reduce((sum, s) => sum + (parseInt(String(s.duree_estimee), 10) || 0), 0) || 0;
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
    this.sectionVideoMode = 'url';
    this.sectionUploadFile = null;
    this.sectionUploading = false;
    this.sectionUploadError = '';
    this.sectionUploadPreview = null;
    const modal = new bootstrap.Modal(document.getElementById('sectionModal'));
    modal.show();
  }

  editSection(moduleIndex: number, sectionIndex: number): void {
    this.currentModuleIndex = moduleIndex;
    this.editingSectionIndex = sectionIndex;
    this.currentSection = { ...this.modules[moduleIndex].sections[sectionIndex] };
    this.sectionVideoMode = 'url';
    this.sectionUploadFile = null;
    this.sectionUploading = false;
    this.sectionUploadError = '';
    this.sectionUploadPreview = null;
    const modal = new bootstrap.Modal(document.getElementById('sectionModal'));
    modal.show();
  }

  onSectionFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];
    this.sectionUploadFile = file;
    this.sectionUploadError = '';
    if (this.currentSection.type === 'image') {
      const reader = new FileReader();
      reader.onload = () => { this.sectionUploadPreview = reader.result as string; };
      reader.readAsDataURL(file);
    } else {
      this.sectionUploadPreview = null;
    }
  }

  saveSection(): void {
    if (!this.currentSection.titre || this.currentModuleIndex === null) return;

    const doSave = () => {
      const module = this.modules[this.currentModuleIndex!];
      if (this.editingSectionIndex !== null) {
        module.sections[this.editingSectionIndex] = { ...this.currentSection };
      } else {
        this.currentSection.ordre = module.sections.length;
        module.sections.push({ ...this.currentSection });
      }
      this.closeModal('sectionModal');
      this.markAsChanged();
    };

    if (this.sectionUploadFile) {
      this.sectionUploading = true;
      this.formationService.uploadFile(this.sectionUploadFile).subscribe({
        next: (res: any) => {
          this.sectionUploading = false;
          this.currentSection.ressources = res.url || res.path || '';
          doSave();
        },
        error: () => {
          this.sectionUploading = false;
          this.sectionUploadError = 'Échec de l\'upload, veuillez réessayer.';
        }
      });
    } else {
      doSave();
    }
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

  // ==================== QUIZ EDITOR (step 3) ====================

  getQuizKey(moduleIndex: number, sectionIndex: number): string {
    return `${moduleIndex}-${sectionIndex}`;
  }

  getQuizSections(): { moduleIndex: number; sectionIndex: number; moduleTitle: string; sectionTitle: string }[] {
    const result: { moduleIndex: number; sectionIndex: number; moduleTitle: string; sectionTitle: string }[] = [];
    this.modules.forEach((mod, mi) => {
      (mod.sections || []).forEach((sec, si) => {
        if (sec.type === 'quiz') {
          result.push({ moduleIndex: mi, sectionIndex: si, moduleTitle: mod.titre, sectionTitle: sec.titre });
        }
      });
    });
    return result;
  }

  getOrCreateLocalQuiz(moduleIndex: number, sectionIndex: number): LocalQuiz {
    const key = this.getQuizKey(moduleIndex, sectionIndex);
    let lq = this.localQuizzes.find(q => this.getQuizKey(q.moduleIndex, q.sectionIndex) === key);
    if (!lq) {
      const sec = this.modules[moduleIndex]?.sections[sectionIndex] as any;
      lq = {
        moduleIndex, sectionIndex,
        quizId: sec?.quiz_id || undefined,
        titre: sec?.titre || 'Nouveau quiz',
        description: '',
        score_minimum: 70,
        tentatives_max: 2,
        duree_minutes: 0,
        questions: [],
      };
      this.localQuizzes.push(lq);
      if (lq.quizId) { this.loadExistingQuiz(lq); }
    }
    return lq;
  }

  private loadExistingQuiz(lq: LocalQuiz): void {
    if (!lq.quizId) return;
    this.loadingQuiz = true;
    this.quizService.getQuiz(lq.quizId).pipe(catchError(() => of(null))).subscribe((res: any) => {
      const quiz = res?.quiz || res;
      if (quiz) {
        lq.titre = quiz.titre || lq.titre;
        lq.description = quiz.description || '';
        lq.score_minimum = quiz.score_minimum ?? 70;
        lq.tentatives_max = quiz.max_tentatives ?? quiz.tentatives_max ?? 2;
        lq.duree_minutes = quiz.duree_minutes ?? 0;
        this.questionService.getQuestions(lq.quizId!).pipe(catchError(() => of({ questions: [] }))).subscribe(res => {
          lq.questions = (res.questions || []).map((q: any) => ({
            ...q, reponses: q.reponses || this.quizDefaultOptions(q.type),
          }));
          this.loadingQuiz = false;
        });
      } else { this.loadingQuiz = false; }
    });
  }

  selectQuiz(moduleIndex: number, sectionIndex: number): void {
    this.activeQuizKey = this.getQuizKey(moduleIndex, sectionIndex);
    this.expandedQuestion = null;
    this.getOrCreateLocalQuiz(moduleIndex, sectionIndex);
  }

  get activeLocalQuiz(): LocalQuiz | null {
    if (!this.activeQuizKey) return null;
    return this.localQuizzes.find(q => this.getQuizKey(q.moduleIndex, q.sectionIndex) === this.activeQuizKey) || null;
  }

  quizDefaultOptions(type: string): any[] {
    if (type === 'true_false') {
      return [{ reponse_text: 'Vrai', is_correct: true, ordre: 1 }, { reponse_text: 'Faux', is_correct: false, ordre: 2 }];
    }
    if (type === 'multiple_choice' || type === 'multiple_choice_multi') {
      return [{ reponse_text: '', is_correct: true, ordre: 1 }, { reponse_text: '', is_correct: false, ordre: 2 }];
    }
    return [];
  }

  addQuizQuestion(type: string): void {
    const lq = this.activeLocalQuiz;
    if (!lq) return;
    const newQ: QuizQuestion = {
      id: Date.now(), question_text: '', type, points: 1,
      ordre: (lq.questions.length || 0) + 1,
      reponses: this.quizDefaultOptions(type), explication: '', _new: true,
    };
    lq.questions = [...lq.questions, newQ];
    this.expandedQuestion = newQ.id;
  }

  removeQuizQuestion(q: QuizQuestion): void {
    const lq = this.activeLocalQuiz;
    if (!lq) return;
    lq.questions = lq.questions.filter(x => x.id !== q.id);
  }

  toggleQuizQuestion(id: number): void {
    this.expandedQuestion = this.expandedQuestion === id ? null : id;
  }

  toggleQuizCorrect(q: QuizQuestion, opt: any): void {
    if (q.type === 'multiple_choice') {
      q.reponses.forEach((r: any) => r.is_correct = false);
      opt.is_correct = true;
    } else {
      opt.is_correct = !opt.is_correct;
    }
  }

  addQuizOption(q: QuizQuestion): void {
    q.reponses = [...(q.reponses || []), { reponse_text: '', is_correct: false, ordre: (q.reponses?.length || 0) + 1 }];
  }

  removeQuizOption(q: QuizQuestion, index: number): void {
    q.reponses = q.reponses.filter((_: any, i: number) => i !== index);
  }

  getTypeLabel(type: string): string {
    const map: Record<string, string> = {
      multiple_choice: 'Choix unique', multiple_choice_multi: 'Choix multiple',
      true_false: 'Vrai / Faux', text: 'Texte libre',
    };
    return map[type] || type;
  }

  saveActiveQuiz(): void {
    const lq = this.activeLocalQuiz;
    if (!lq || !this.courseId) return;
    this.saving = true;
    this.error = '';

    const onError = (err: any) => {
      this.saving = false;
      const msg = err?.error?.message
        || (err?.error?.errors ? Object.values(err.error.errors).flat().join(', ') : null)
        || `Erreur ${err?.status ?? ''}`;
      this.error = 'Erreur enregistrement quiz : ' + msg;
      setTimeout(() => this.error = '', 6000);
    };

    const doSaveQuestions = (quizId: number) => {
      if (!lq.questions.length) {
        this.saving = false;
        this.success = 'Quiz enregistré';
        setTimeout(() => this.success = '', 3000);
        return;
      }
      const saves = lq.questions.map((q: QuizQuestion) => {
        const payload = {
          question_text: q.question_text, type: q.type as any, points: q.points, ordre: q.ordre,
          reponses: q.reponses, explication: q.explication, quizzes_id: quizId,
        };
        if (q._new) return this.questionService.createQuestion(quizId, payload).pipe(catchError(e => { onError(e); return of(null); }));
        return this.questionService.updateQuestion(quizId, q.id, payload).pipe(catchError(e => { onError(e); return of(null); }));
      });
      forkJoin(saves).subscribe(() => {
        lq.questions.forEach(q => delete q._new);
        this.saving = false;
        this.success = 'Quiz enregistré avec succès';
        setTimeout(() => this.success = '', 3000);
      });
    };

    if (lq.quizId) {
      this.quizService.updateQuiz(lq.quizId, {
        titre: lq.titre, description: lq.description, type: 'formation',
        score_minimum: lq.score_minimum, max_tentatives: lq.tentatives_max,
        duree_minutes: lq.duree_minutes,
      } as any).subscribe({
        next: () => doSaveQuestions(lq.quizId!),
        error: onError,
      });
    } else {
      this.quizService.createQuiz({
        titre: lq.titre, description: lq.description, formation_id: this.courseId!,
        type: 'formation',
        score_minimum: lq.score_minimum, max_tentatives: lq.tentatives_max,
        duree_minutes: lq.duree_minutes, is_active: true,
      } as any).subscribe({
        next: (quiz: any) => {
          lq.quizId = (quiz?.quiz || quiz).id;
          doSaveQuestions(lq.quizId!);
        },
        error: onError,
      });
    }
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

    let formData: any;
    try {
      formData = this.buildFormData();
    } catch (err) {
      this.saving = false;
      this.error = 'Erreur lors de la préparation des données. Vérifiez les modules et sections.';
      console.error('buildFormData error:', err);
      return;
    }

    const doUpdate = (imagePath: string | null) => {
      if (imagePath) formData.image_couverture = imagePath;

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
    };

    if (this.selectedImageFile) {
      this.formationService.uploadImageCouverture(this.selectedImageFile).subscribe({
        next: (res) => doUpdate(res.path || null),
        error: () => doUpdate(null),
      });
    } else {
      doUpdate(null);
    }
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
      tags: Array.isArray(additionalInfo.tags)
        ? additionalInfo.tags
        : (additionalInfo.tags ? additionalInfo.tags.toString().split(',').map((t: string) => t.trim()).filter((t: string) => t) : null),
      date_debut: additionalInfo.date_debut || null,
      date_fin: additionalInfo.date_fin || null,
      inscription_ouverte: Boolean(additionalInfo.inscription_ouverte),
      est_publie: Boolean(additionalInfo.est_publie),

      // Média
      media_url: mediaInfo.media_url?.trim() || null,
      video_autoplay: Boolean(mediaInfo.video_autoplay),
      video_show_controls: Boolean(mediaInfo.video_show_controls),

      objectifs_pedagogiques: this.objectifs.filter(obj => String(obj).trim()).map(obj => String(obj).trim()).join(', ') || null,
      prerequis: this.prerequis.filter(pre => String(pre).trim()).map(pre => String(pre).trim()).join(', ') || null,
      competences_acquises: this.competencesAcquises.filter(comp => comp.trim()),
      outils_requis: this.outilsRequis.filter(outil => outil.trim()),

      modules: this.modules.map((module: any) => {
        const moduleData: any = {
          titre: String(module.titre ?? '').trim(),
          description: String(module.description ?? '').trim() || null,
          duree_estimee: String(module.duree_estimee ?? '0'),
          ordre: module.ordre,
          sections: (module.sections ?? []).map((section: any) => {
            const sectionData: any = {
              titre: String(section.titre ?? '').trim(),
              type: section.type || 'text',
              duree_estimee: String(section.duree_estimee ?? '0'),
              contenu: section.contenu ? String(section.contenu).trim() : null,
              ressources: Array.isArray(section.ressources)
                ? section.ressources.filter((r: any) => r && String(r).trim())
                : (section.ressources ? String(section.ressources).split(',').map((r: string) => r.trim()).filter(Boolean) : []),
              obligatoire: Boolean(section.obligatoire),
              visible: Boolean(section.visible),
              ordre: section.ordre,
            };
            // N'inclure l'id que s'il existe (section existante)
            if (section.id !== undefined && section.id !== null) {
              sectionData.id = section.id;
            }
            return sectionData;
          })
        };
        // N'inclure l'id que s'il existe (module existant)
        if (module.id !== undefined && module.id !== null) {
          moduleData.id = module.id;
        }
        return moduleData;
      }),

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
    window.close();
    // fallback if window.close() is blocked
    this.router.navigate(['/instructor/instructor-course']);
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