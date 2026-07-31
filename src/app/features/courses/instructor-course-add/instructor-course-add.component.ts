import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { CategorieService, CategorieFormation, CategorieFormationRequest } from '../../../shared/service/categorie/categorie-service.service';
import { QuizService } from '../../../shared/service/quiz/quiz.service';
import { QuestionQuizService } from '../../../shared/service/quiz/question-quiz.service';






declare var bootstrap: any;

interface Module {
  titre: string;
  description: string;
  duree_estimee: number;
  ordre: number;
  sections: Section[];
}

interface Section {
  titre: string;
  type: string;
  duree_estimee: number;
  contenu: string;
  description: string;
  ressources: string;
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
  titre: string;
  description: string;
  score_minimum: number;
  tentatives_max: number;
  duree_minutes: number;
  questions: QuizQuestion[];
}

// @Component({
//   selector: 'app-add-course',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
//   templateUrl: './add-course.component.html',
//   styleUrls: ['./add-course.component.scss']
// })


@Component({
  selector: 'app-instructor-course-add',
 imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './instructor-course-add.component.html',
  styleUrl: './instructor-course-add.component.scss'
})

export class InstructorCourseAddComponent implements OnInit {
  // État général
  loading = false;
  saving = false;
  error = '';
  success = '';
  currentStep = 0;

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

  constructor(
    private fb: FormBuilder,
    private formationService: FormationService,
    private categorieService: CategorieService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private quizService: QuizService,
    private questionService: QuestionQuizService,
  ) {
    this.initForms();
  }

  ngOnInit(): void {
    this.loadCategories();
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
      image: [''],
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
  loadCategories(): void {
  this.loading = true;
  this.error = '';

  this.categorieService.getCategories().subscribe({
    next: (response: any) => {
      this.loading = false;

      try {
        // Extraction robuste des catégories selon différents formats de réponse
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

        // Validation des données
        this.categories = this.categories.filter(cat =>
          cat && typeof cat === 'object' && cat.id && cat.nom
        );

        console.log(`${this.categories.length} catégories chargées:`, this.categories);

        // Message informatif si aucune catégorie trouvée
        if (this.categories.length === 0) {
          console.warn('Aucune catégorie valide trouvée dans la réponse');
          this.error = 'Aucune catégorie de formation disponible. Veuillez contacter l\'administrateur.';
        }
      } catch (error) {
        console.error('Erreur lors du traitement des catégories:', error);
        this.categories = [];
        this.error = 'Erreur lors du traitement des catégories.';
      }
    },
    error: (err) => {
      this.loading = false;
      console.error('Erreur chargement catégories:', err);

      this.categories = [];

      // Gestion spécifique des erreurs
      if (err.status === 0) {
        this.error = 'Impossible de contacter le serveur. Vérifiez votre connexion.';
      } else if (err.status === 401) {
        this.error = 'Session expirée. Veuillez vous reconnecter.';
      } else if (err.status === 403) {
        this.error = 'Accès non autorisé aux catégories.';
      } else if (err.status >= 500) {
        this.error = 'Erreur serveur. Veuillez réessayer plus tard.';
      } else {
        this.error = 'Impossible de charger les catégories. Veuillez réessayer.';
      }

      // Auto-clear error après 8 secondes
      setTimeout(() => {
        this.error = '';
      }, 8000);
    }
  });
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
          return false;
        }
        break;
      case 1: break; // Média optionnel
      case 2: break; // Modules optionnels
      case 3: break; // Quiz optionnel
      case 4:
        if (this.additionalInfoForm.invalid) {
          this.markFormGroupTouched(this.additionalInfoForm);
          return false;
        }
        break;
    }
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
    if (v) { this.objectifs.push(v); this.newObjectif = ''; }
  }

  removeObjectif(index: number): void {
    if (this.objectifs.length > 1) {
      this.objectifs.splice(index, 1);
    }
  }

  // ==================== PREREQUIS ====================

  addPrerequis(): void {
    const v = this.newPrerequis.trim();
    if (v) { this.prerequis.push(v); this.newPrerequis = ''; }
  }

  removePrerequis(index: number): void {
    if (this.prerequis.length > 1) {
      this.prerequis.splice(index, 1);
    }
  }

  // ==================== COMPETENCES ====================

  addCompetence(): void {
    const v = this.newCompetence.trim();
    if (v) { this.competencesAcquises.push(v); this.newCompetence = ''; }
  }

  removeCompetence(index: number): void {
    if (this.competencesAcquises.length > 1) {
      this.competencesAcquises.splice(index, 1);
    }
  }

  // ==================== OUTILS ====================

  addOutil(): void {
    const v = this.newOutil.trim();
    if (v) { this.outilsRequis.push(v); this.newOutil = ''; }
  }

  removeOutil(index: number): void {
    if (this.outilsRequis.length > 1) {
      this.outilsRequis.splice(index, 1);
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

    // Validation du type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      this.imageError = 'Format non supporté. Utilisez JPEG, PNG ou WebP.';
      return;
    }

    // Validation de la taille (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      this.imageError = 'L\'image est trop volumineuse. Taille max: 5MB.';
      return;
    }

    this.selectedImageFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  removeImage(): void {
    this.imagePreview = null;
    this.selectedImageFile = null;
    this.imageError = '';
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
  }

  removeModule(index: number): void {
    if (confirm('Supprimer ce module et toutes ses sections ?')) {
      this.modules.splice(index, 1);
      this.modules.forEach((m, i) => m.ordre = i);
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
      type: 'video',
      duree_estimee: 0,
      contenu: '',
      description: '',
      ressources: '',
      obligatoire: true,
      visible: true,
      ordre: 0
    };
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
      const sec = this.modules[moduleIndex]?.sections[sectionIndex];
      lq = {
        moduleIndex, sectionIndex,
        titre: sec?.titre || 'Nouveau quiz',
        description: '',
        score_minimum: 70,
        tentatives_max: 2,
        duree_minutes: 0,
        questions: [],
      };
      this.localQuizzes.push(lq);
    }
    return lq;
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
      return [
        { reponse_text: 'Vrai', is_correct: true,  ordre: 1 },
        { reponse_text: 'Faux', is_correct: false, ordre: 2 },
      ];
    }
    if (type === 'multiple_choice' || type === 'multiple_choice_multi') {
      return [
        { reponse_text: '', is_correct: true,  ordre: 1 },
        { reponse_text: '', is_correct: false, ordre: 2 },
      ];
    }
    return [];
  }

  addQuizQuestion(type: string): void {
    const lq = this.activeLocalQuiz;
    if (!lq) return;
    const newQ: QuizQuestion = {
      id: Date.now(),
      question_text: '',
      type,
      points: 1,
      ordre: (lq.questions.length || 0) + 1,
      reponses: this.quizDefaultOptions(type),
      explication: '',
      _new: true,
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
    if (q.type === 'multiple_choice' || q.type === 'true_false') {
      // Sélection exclusive : une seule bonne réponse
      q.reponses.forEach((r: any) => r.is_correct = false);
      opt.is_correct = true;
    } else {
      // multiple_choice_multi : bascule libre
      opt.is_correct = !opt.is_correct;
    }
  }

  addQuizOption(q: QuizQuestion): void {
    q.reponses = [...(q.reponses || []), {
      reponse_text: '', is_correct: false, ordre: (q.reponses?.length || 0) + 1,
    }];
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

  // ==================== SOUMISSION ====================
submitCourse(): void {
  this.saving = true;
  this.error = '';
  this.success = '';

  if (!this.validateAllSteps()) {
    this.saving = false;
    // this.error = 'Veuillez corriger les erreurs dans le formulaire.';
    return;
  }

  const doCreate = (imagePath: string | null) => {
    const formData = this.buildFormData();
    if (imagePath) formData.image_couverture = imagePath;

    this.formationService.createFormation(formData).subscribe({
    next: (response) => {
      const formation = response.formation || response.data || response;
      const formationId = formation?.id;

      if (formationId && this.localQuizzes.length > 0) {
        this.saveLocalQuizzes(formationId, formation).then(() => {
          this.saving = false;
          this.success = 'Formation créée avec succès !';
          setTimeout(() => {
            const modal = new bootstrap.Modal(document.getElementById('successModal'));
            modal.show();
          }, 100);
        });
      } else {
        this.saving = false;
        this.success = 'Formation créée avec succès !';
        setTimeout(() => {
          const modal = new bootstrap.Modal(document.getElementById('successModal'));
          modal.show();
        }, 100);
      }
    },
    error: (err) => {
      this.saving = false;
      console.error('Erreur création:', err);

      // Gestion détaillée des erreurs de validation
      if (err.status === 422 && err.error?.errors) {
        console.error('Erreurs de validation:', err.error.errors);

        // Construire un message d'erreur détaillé
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
        this.error = 'Erreur lors de la création de la formation. Veuillez réessayer.';
      }
    }
  });
  };

  if (this.selectedImageFile) {
    this.formationService.uploadImageCouverture(this.selectedImageFile).subscribe({
      next: (res) => doCreate(res.path || null),
      error: () => doCreate(null),
    });
  } else {
    doCreate(null);
  }
}

buildFormData(): any {
  // Récupérer toutes les valeurs des formulaires
  const basicInfo = this.basicInfoForm.value;
  const mediaInfo = this.mediaForm.value;
  const additionalInfo = this.additionalInfoForm.value;
  const pricingInfo = this.pricingForm.value;

  //user connecté
     const user = this.authService.getUser();


  // Construire l'objet final
  const formData :any = {
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


          formateur_id: user?.id || null,

    // Informations supplémentaires
    difficulte: additionalInfo.difficulte,
    prix: parseFloat(additionalInfo.prix) || 0,
    duree_totale: parseInt(additionalInfo.duree_totale) || null,
    public_cible: additionalInfo.public_cible?.trim() || null,
    tags: additionalInfo.tags?.trim()
      ? additionalInfo.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t)
      : [],
    date_debut: additionalInfo.date_debut || null,
    date_fin: additionalInfo.date_fin || null,
    inscription_ouverte: Boolean(additionalInfo.inscription_ouverte),
    est_publie: Boolean(additionalInfo.est_publie),

    // Média
    media_url: mediaInfo.media_url?.trim() || null,
    video_autoplay: Boolean(mediaInfo.video_autoplay),
    video_show_controls: Boolean(mediaInfo.video_show_controls),

    objectifs_pedagogiques: this.objectifs.filter(obj => obj.trim()).join(', '),
    prerequis: this.prerequis.filter(pre => pre.trim()).join(', '),
    competences_acquises: this.competencesAcquises.filter(comp => comp.trim()),
    outils_requis: this.outilsRequis.filter(outil => outil.trim()),

    // Modules
 modules: this.modules.map(module => ({
  titre: module.titre?.trim(),
  description: module.description?.trim(),
  duree_estimee: module.duree_estimee.toString() || '0',
  ordre: module.ordre,
  sections: module.sections.map(section => ({
    titre: section.titre?.trim(),
    type: section.type,
    duree_estimee: section.duree_estimee.toString() || '0',
    contenu: section.contenu?.trim() || null,
    ressources: section.ressources?.trim()
      ? [section.ressources.trim()]
      : [],
    obligatoire: Boolean(section.obligatoire),
    visible: Boolean(section.visible),
    ordre: section.ordre
  }))
})),
    // Coûts
    estimation_couts: {
      cout_conception: parseFloat(pricingInfo.cout_conception) || 0,
      cout_production: parseFloat(pricingInfo.cout_production) || 0,
      cout_formateur_jour: parseFloat(pricingInfo.cout_formateur_jour) || 0,
      frais_logistique: parseFloat(pricingInfo.frais_logistique) || 0,
      nb_jours: parseInt(pricingInfo.nb_jours) || 1,
      notes_estimation: pricingInfo.notes_estimation?.trim() || null
    }
  };
console.log('Utilisateur connecté:', user);
    console.log('formateur_id ajouté:', formData.formateur_id);
  // Nettoyer les valeurs null/undefined si nécessaire
Object.keys(formData).forEach(key => {
  if ((formData as any)[key] === '' || (formData as any)[key] === undefined) {
    (formData as any)[key] = null;
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
      if (control.errors['email']) {
        errors.push(`• ${fieldName} doit être une adresse email valide`);
      }
      if (control.errors['pattern']) {
        errors.push(`• ${fieldName} n'a pas le bon format`);
      }
    }
  });

  return errors;
}

private getFormErrors(formGroup: FormGroup): any {
  const errors: any = {};
  Object.keys(formGroup.controls).forEach(key => {
    const control = formGroup.get(key);
    if (control && control.errors) {
      errors[key] = control.errors;
    }
  });
  return errors;
}


  private saveLocalQuizzes(formationId: number, _createdFormation?: any): Promise<void> {
    const saves = this.localQuizzes.map(lq => {
      const quizPayload: any = {
        titre: lq.titre,
        description: lq.description,
        formation_id: formationId,
        score_minimum: lq.score_minimum,
        max_tentatives: lq.tentatives_max,
        duree_minutes: lq.duree_minutes,
        type: 'formation',
        is_active: true,
      };
      return this.quizService.createQuiz(quizPayload).toPromise().then((quiz: any) => {
        const quizData = quiz?.quiz || quiz;
        if (!quizData?.id || !lq.questions.length) return;
        const questionSaves = lq.questions.map(q =>
          this.questionService.createQuestion(quizData.id, {
            question_text: q.question_text,
            type: q.type as any,
            points: q.points,
            ordre: q.ordre,
            reponses: q.reponses,
            explication: q.explication,
            quizzes_id: quizData.id,
          }).toPromise().catch(e => {
            console.error('Erreur création question:', e?.error ?? e);
          })
        );
        return Promise.all(questionSaves);
      }).catch(e => {
        console.error('Erreur création quiz:', e?.error ?? e);
        const msg = e?.error?.message
          || (e?.error?.errors ? Object.values(e.error.errors).flat().join(', ') : null)
          || `HTTP ${e?.status}`;
        this.error = (this.error ? this.error + '\n' : '') + `Quiz "${lq.titre}" : ${msg}`;
      });
    });
    return Promise.all(saves).then(() => undefined);
  }

  // ==================== NAVIGATION POST-CREATION ====================

  goToCoursesList(): void {
    this.closeModal('successModal');
    window.close();
    // fallback if window.close() is blocked
    this.router.navigate(['/instructor/instructor-course']);
  }

  createNewCourse(): void {
    this.closeModal('successModal');
    this.resetForm();
  }

  resetForm(): void {
    this.currentStep = 0;
    this.basicInfoForm.reset({
      niveau: 'debutant',
      langue: 'fr',
      type: 'en_ligne',
      nb_max_participants: 25,
      est_certifiante: false
    });
    this.mediaForm.reset({
      video_autoplay: false,
      video_show_controls: true
    });
    this.additionalInfoForm.reset({
      difficulte: 'moyen',
      prix: 0,
      inscription_ouverte: true,
      est_publie: false
    });
    this.pricingForm.reset({
      cout_conception: 0,
      cout_production: 0,
      cout_formateur_jour: 0,
      frais_logistique: 0,
      nb_jours: 1
    });
    this.modules = [];
    this.objectifs = [];
    this.prerequis = [];
    this.competencesAcquises = [];
    this.outilsRequis = [];
    this.newObjectif = '';
    this.newPrerequis = '';
    this.newCompetence = '';
    this.newOutil = '';
    this.imagePreview = null;
    this.selectedImageFile = null;
    this.error = '';
    this.success = '';
  }
}
