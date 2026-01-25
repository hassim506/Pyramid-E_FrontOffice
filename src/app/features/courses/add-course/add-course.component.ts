import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Editor, Toolbar } from 'ngx-editor';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { FormationService } from '../../../shared/service/formation/formation.service';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../../shared/pipe/safe-url-pipe.pipe';
declare var bootstrap: any;

// ==================== INTERFACES ====================

interface Module {
  titre: string;
  description: string;
  duree_estimee?: number;
  sections: Section[];
}

interface Section {
  titre: string;
  description: string;
  contenu: string;
  type: 'video' | 'reading' | 'quiz' | 'hands-on';
  duree_estimee: number;
  video_url?: string;
  ressources?: string;
  est_gratuit: boolean;
  obligatoire: boolean;
  visible?: boolean;
}

interface FAQ {
  question: string;
  reponse: string;
  est_active: boolean;
}

interface Category {
  id: number;
  nom: string;
  description?: string;
}

interface SelectOption<T = string> {
  value: T;
  label: string;
  icon?: string;
}

interface FormationData {
  titre: string;
  categorie_formation_id: number;
  niveau: string;
  langue: string;
  nb_max_participants: number;
  type: string;
  short_description: string;
  description: string;
  est_certifiante: boolean;
  public_cible: string;
  objectifs_pedagogiques: string[];
  prerequis: string[];
  image_couverture?: string;
  media_url?: string;
  prix: number;
  prix_original?: number;
  tags: string[];
  modules: ModuleData[];
  est_publie: boolean;
  inscription_ouverte: boolean;
  statut: string;
}

interface ModuleData {
  titre: string;
  description: string;
  ordre: number;
  type: string;
  duree_estimee: number;
  obligatoire: boolean;
  visible: boolean;
  sections: SectionData[];
}

interface SectionData {
  titre: string;
  description: string;
  contenu: string;
  type: string;
  ordre: number;
  duree_estimee: number;
  ressources: string | null;
  metadata: string | null;
  obligatoire: boolean;
  visible: boolean;
  statut: string;
}

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
   imports: [
    FormsModule,
      CommonModule,
    ReactiveFormsModule,
    SafeUrlPipe
  ],
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit, OnDestroy {
  // ==================== VIEW CHILDREN ====================
  @ViewChild('moduleForm') moduleForm!: NgForm;
  @ViewChild('sectionForm') sectionForm!: NgForm;
  @ViewChild('faqForm') faqForm!: NgForm;

  // ==================== EDITOR ====================
  editor!: Editor;
  readonly toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  // ==================== FORMS ====================
  basicInfoForm!: FormGroup;
  mediaForm!: FormGroup;
  additionalInfoForm!: FormGroup;
  pricingForm!: FormGroup;

  // ==================== STATE ====================
  selectedFieldSet: number[] = [0];
  loading = false;
  saving = false;
  error = '';
  success = '';
  uploadedImageUrl = '';
  private destroy$ = new Subject<void>();
currentSection: Section = this.createEmptySection();

  // ==================== DATA ====================
  categories: Category[] = [];
  modulesData: Module[] = [];
  faqData: FAQ[] = [];
  objectifsData: { text: string }[] = [{ text: '' }];
  prerequisData: { text: string }[] = [{ text: '' }];

  // ==================== CURRENT ITEMS ====================
  newModule: Module = this.createEmptyModule();
  newSection: Section = this.createEmptySection();
  newFaq: FAQ = this.createEmptyFaq();
  selectedModuleIndex: number | null = null;
  editingModuleIndex: number | null = null;
  editingSectionIndex: number | null = null;

  // ==================== OPTIONS ====================
  readonly niveaux: SelectOption[] = [
    { value: 'debutant', label: 'Débutant' },
    { value: 'intermediaire', label: 'Intermédiaire' },
    { value: 'avance', label: 'Avancé' },
    { value: 'expert', label: 'Expert' }
  ];

  readonly types: SelectOption[] = [
    { value: 'en_ligne', label: 'En ligne' },
    { value: 'presentiel', label: 'Présentiel' },
    { value: 'hybride', label: 'Hybride' }
  ];

  readonly langues: SelectOption[] = [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'Anglais' },
    { value: 'es', label: 'Espagnol' }
  ];

  readonly sectionTypes: SelectOption<'video' | 'reading' | 'quiz' | 'hands-on'>[] = [
    { value: 'video', label: 'Vidéo', icon: 'play-circle' },
    { value: 'reading', label: 'Lecture', icon: 'document-text' },
    { value: 'quiz', label: 'Quiz', icon: 'task-square' },
    { value: 'hands-on', label: 'Pratique', icon: 'code' }
  ];

  // ==================== CONSTANTS ====================
  private readonly MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB
  private readonly SUCCESS_MODAL_DELAY = 3000;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formationService: FormationService
  ) {}

  // ==================== LIFECYCLE HOOKS ====================

  ngOnInit(): void {
    this.initializeEditor();
    this.initForms();
    this.setupFormWatchers();
    this.loadCategories();
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ==================== INITIALIZATION ====================

  private initializeEditor(): void {
    this.editor = new Editor();
  }

  private initForms(): void {
    this.basicInfoForm = this.fb.group({
      titre: ['', [Validators.required, Validators.minLength(10)]],
      categorie_formation_id: ['', Validators.required],
      niveau: ['debutant', Validators.required],
      langue: ['fr', Validators.required],
      nb_max_participants: [25, [Validators.required, Validators.min(1)]],
      type: ['en_ligne', Validators.required],
      short_description: ['', [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(200)
      ]],
      description: ['', [Validators.required, Validators.minLength(50)]],
      est_certifiante: [false],
      public_cible: [''],
      difficulte: ['moyen']
    });

    this.mediaForm = this.fb.group({
      image_couverture: [''],
      video_type: ['external'],
      video_presentation: [''],
      media_url: ['']
    });

    this.additionalInfoForm = this.fb.group({
      tags: [''],
      message_reviewer: [''],
      accepte_conditions: [false, Validators.requiredTrue]
    });

    this.pricingForm = this.fb.group({
      est_gratuite: [false],
      prix: [0, [Validators.required, Validators.min(0)]],
      a_remise: [false],
      prix_remise: [0],
      duree_acces: ['lifetime'],
      nb_mois_acces: [12]
    });
  }

  
  private setupFormWatchers(): void {
    // Prix gratuit
    this.pricingForm.get('est_gratuite')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(isGratuite => {
        const prixControl = this.pricingForm.get('prix');
        if (isGratuite) {
          prixControl?.setValue(0);
          prixControl?.disable();
        } else {
          prixControl?.enable();
        }
      });

    // Remise
    this.pricingForm.get('a_remise')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(hasRemise => {
        if (!hasRemise) {
          this.pricingForm.get('prix_remise')?.setValue(0);
        }
      });

    // Durée d'accès
    this.pricingForm.get('duree_acces')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(duree => {
        const nbMoisControl = this.pricingForm.get('nb_mois_acces');
        if (duree === 'lifetime') {
          nbMoisControl?.disable();
        } else {
          nbMoisControl?.enable();
        }
      });
  }

  private loadCategories(): void {
    this.loading = true;
    this.formationService.getCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          this.categories = response.categories || response.data || response;
          this.loading = false;
        },
        error: (error) => {
          console.error('Erreur chargement catégories:', error);
          this.showError('Impossible de charger les catégories');
          this.loading = false;
        }
      });
  }

  getImageUrl(imagePath: string): string {
  if (!imagePath) return 'assets/img/placeholder.jpg'; // ou une image par défaut
  if (imagePath.startsWith('http')) return imagePath;
  return 'https://ton-backend.fr/uploads/' + imagePath; // adapte selon ton API
}

  // ==================== NAVIGATION ====================

  nextStep(): void {
    const currentStep = this.selectedFieldSet[0];
    
    // Validation selon l'étape
    if (!this.validateStep(currentStep)) {
      return;
    }

    this.clearMessages();
    if (currentStep < 4) {
      this.selectedFieldSet[0] = currentStep + 1;
      this.scrollToTop();
    }
  }

  prevStep(): void {
    if (this.selectedFieldSet[0] > 0) {
      this.selectedFieldSet[0]--;
      this.scrollToTop();
    }
  }

  private validateStep(step: number): boolean {
    switch (step) {
      case 0:
        if (!this.basicInfoForm.valid) {
          this.markFormGroupTouched(this.basicInfoForm);
          this.showError('Veuillez remplir tous les champs obligatoires');
          return false;
        }
        break;
      case 2:
        if (!this.validateCurriculum()) {
          return false;
        }
        break;
      case 3:
        if (!this.additionalInfoForm.valid) {
          this.markFormGroupTouched(this.additionalInfoForm);
          this.showError('Veuillez accepter les conditions');
          return false;
        }
        break;
    }
    return true;
  }


  
  get currentStep(): number {
    return this.selectedFieldSet[0];
  }

  get objectifs(): string[] {
    return this.objectifsData.map(obj => obj.text);
  }

  get prerequis(): string[] {
    return this.prerequisData.map(req => req.text);
  }

  get modules(): Module[] {
    return this.modulesData;
  }

  get imagePreview(): string {
    return this.uploadedImageUrl;
  }

  // ...existing code...

  // ==================== COST CALCULATION METHODS ====================

  getCoutDeveloppement(): number {
    const conception = this.pricingForm.get('cout_conception')?.value || 0;
    const production = this.pricingForm.get('cout_production')?.value || 0;
    return conception + production;
  }

  getCoutFormateur(): number {
    const coutJour = this.pricingForm.get('cout_formateur_jour')?.value || 0;
    const nbJours = this.getFormControlValue('nb_jours') || 1;
    return coutJour * nbJours;
  }

  getCoutLogistique(): number {
    const fraisParParticipant = this.pricingForm.get('frais_logistique')?.value || 0;
    const nbParticipants = this.getFormControlValue('nb_max_participants') || 1;
    return fraisParParticipant * nbParticipants;
  }

  getCoutTotal(): number {
    return this.getCoutDeveloppement() + this.getCoutFormateur() + this.getCoutLogistique();
  }

  getCoutParticipant(): number {
    const nbParticipants = this.getFormControlValue('nb_max_participants') || 1;
    const coutTotal = this.getCoutTotal();
    return Math.round(coutTotal / nbParticipants);
  }

  getCoutParHeure(): number {
    const dureeHeures = this.getFormControlValue('duree_totale') || 1;
    const coutTotal = this.getCoutTotal();
    return Math.round(coutTotal / dureeHeures);
  }

  getFormControlValue(controlName: string): any {
    return this.basicInfoForm.get(controlName)?.value || 
           this.additionalInfoForm.get(controlName)?.value || 
           this.pricingForm.get(controlName)?.value;
  }

  // ==================== OBJECTIFS & PREREQUISITES METHODS ====================

  addObjectif(): void {
    this.objectifsData.push({ text: '' });
  }

  removeObjectif(index: number): void {
    if (this.objectifsData.length > 1) {
      this.objectifsData.splice(index, 1);
    }
  }

  addPrerequis(): void {
    this.prerequisData.push({ text: '' });
  }



  // ==================== MODULE METHODS ====================

  openModuleModal(): void {
    this.newModule = this.createEmptyModule();
    this.editingModuleIndex = null;
    this.showModal('moduleModal');
  }

  saveModule(): void {
    if (!this.newModule.titre.trim()) {
      this.showError('Le titre du module est requis');
      return;
    }

    if (this.editingModuleIndex !== null) {
      this.modulesData[this.editingModuleIndex] = { ...this.newModule };
      this.showSuccess('Module modifié avec succès');
    } else {
      this.modulesData.push({ ...this.newModule });
      this.showSuccess('Module ajouté avec succès');
    }

    this.newModule = this.createEmptyModule();
    this.editingModuleIndex = null;
    this.hideModal('moduleModal');
  }

  editModule(index: number): void {
    this.editingModuleIndex = index;
    this.newModule = { ...this.modulesData[index] };
    this.showModal('moduleModal');
  }

  // removeModule(index: number): void {
  //   if (confirm('Êtes-vous sûr de vouloir supprimer ce module et toutes ses sections ?')) {
  //     this.modulesData.splice(index, 1);
  //     this.showSuccess('Module supprimé');
  //   }
  // }

  getTotalSections(): number {
    return this.modulesData.reduce((total, module) => {
      return total + (module.sections?.length || 0);
    }, 0);
  }

  getTotalDuration(): number {
    return this.modulesData.reduce((total, module) => {
      return total + this.getModuleDuration(module);
    }, 0);
  }

  getModuleDuration(module: Module): number {
    if (!module.sections || module.sections.length === 0) return 0;
    
    return module.sections.reduce((total, section) => {
      return total + (section.duree_estimee || 0);
    }, 0);
  }

  // ==================== SECTION METHODS ====================

  openSectionModal(moduleIndex: number): void {
    this.selectedModuleIndex = moduleIndex;
    this.currentSection = this.createEmptySection();
    this.editingSectionIndex = null;
    this.showModal('sectionModal');
  }

  saveSection(): void {
    if (this.selectedModuleIndex === null || !this.currentSection.titre.trim()) {
      this.showError('Le titre de la section est requis');
      return;
    }

    const section = { ...this.currentSection };

    if (this.editingSectionIndex !== null) {
      this.modulesData[this.selectedModuleIndex].sections[this.editingSectionIndex] = section;
      this.showSuccess('Section modifiée avec succès');
    } else {
      this.modulesData[this.selectedModuleIndex].sections.push(section);
      this.showSuccess('Section ajoutée avec succès');
    }

    this.currentSection = this.createEmptySection();
    this.selectedModuleIndex = null;
    this.editingSectionIndex = null;
    this.hideModal('sectionModal');
  }

  // editSection(moduleIndex: number, sectionIndex: number): void {
  //   this.selectedModuleIndex = moduleIndex;
  //   this.editingSectionIndex = sectionIndex;
  //   this.currentSection = { ...this.modulesData[moduleIndex].sections[sectionIndex] };
  //   this.showModal('sectionModal');
  // }

  // removeSection(moduleIndex: number, sectionIndex: number): void {
  //   if (confirm('Êtes-vous sûr de vouloir supprimer cette section ?')) {
  //     this.modulesData[moduleIndex].sections.splice(sectionIndex, 1);
  //     this.showSuccess('Section supprimée');
  //   }
  // }

  // ==================== MEDIA METHODS ====================

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    
    if (!file) return;

    if (file.size > this.MAX_IMAGE_SIZE) {
      this.showError('L\'image ne doit pas dépasser 2 MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.uploadedImageUrl = e.target?.result as string;
      this.mediaForm.patchValue({ image_couverture: file.name });
    };
    reader.readAsDataURL(file);
  }

  removeImage(): void {
    this.uploadedImageUrl = '';
    this.mediaForm.patchValue({ image_couverture: '' });
  }

  // ==================== SUCCESS MODAL METHODS ====================

  createNewCourse(): void {
    // Réinitialiser le composant
    this.selectedFieldSet = [0];
    this.initForms();
    this.modulesData = [];
    this.objectifsData = [{ text: '' }];
    this.prerequisData = [{ text: '' }];
    this.uploadedImageUrl = '';
    this.clearMessages();
    this.hideModal('successModal');
  }

 


  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // ==================== OBJECTIFS & PREREQUIS ====================

  addNewObjectif(): void {
    this.objectifsData.push({ text: '' });
  }


  addNewPrerequis(): void {
    this.prerequisData.push({ text: '' });
  }

  removePrerequis(index: number): void {
    if (this.prerequisData.length > 1) {
      this.prerequisData.splice(index, 1);
    }
  }

  // ==================== MODULES ====================

  private createEmptyModule(): Module {
    return {
      titre: '',
      description: '',
      sections: []
    };
  }

  openAddModuleModal(): void {
    this.newModule = this.createEmptyModule();
    this.editingModuleIndex = null;
    this.showModal('add-module');
  }

  // editModule(index: number): void {
  //   this.editingModuleIndex = index;
  //   this.newModule = { ...this.modulesData[index] };
  //   this.showModal('add-module');
  // }

  // saveModule(): void {
  //   if (!this.newModule.titre.trim()) {
  //     this.showError('Le titre du module est requis');
  //     return;
  //   }

  //   if (this.editingModuleIndex !== null) {
  //     this.modulesData[this.editingModuleIndex] = { ...this.newModule };
  //     this.showSuccess('Module modifié avec succès');
  //   } else {
  //     this.modulesData.push({ ...this.newModule });
  //     this.showSuccess('Module ajouté avec succès');
  //   }

  //   this.newModule = this.createEmptyModule();
  //   this.editingModuleIndex = null;
  //   this.hideModal('add-module');
  // }

  removeModule(index: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce module et toutes ses sections ?')) {
      this.modulesData.splice(index, 1);
      this.showSuccess('Module supprimé');
    }
  }

  // ==================== SECTIONS ====================

  private createEmptySection(): Section {
    return {
      titre: '',
      description: '',
      contenu: '',
      type: 'video',
      duree_estimee: 0,
      video_url: '',
      est_gratuit: false,
      obligatoire: true,
      visible: true
    };
  }

  openAddSectionModal(moduleIndex: number): void {
    this.selectedModuleIndex = moduleIndex;
    this.newSection = this.createEmptySection();
    this.editingSectionIndex = null;
    this.showModal('add-section');
  }

  editSection(moduleIndex: number, sectionIndex: number): void {
    this.selectedModuleIndex = moduleIndex;
    this.editingSectionIndex = sectionIndex;
    this.newSection = { ...this.modulesData[moduleIndex].sections[sectionIndex] };
    this.showModal('add-section');
  }

  // saveSection(): void {
  //   if (this.selectedModuleIndex === null || !this.newSection.titre.trim()) {
  //     this.showError('Le titre de la section est requis');
  //     return;
  //   }

  //   const section = { ...this.newSection };
    
  //   // Définir les ressources selon le type
  //   if (section.type === 'video' && section.video_url) {
  //     section.ressources = section.video_url;
  //   }

  //   if (this.editingSectionIndex !== null) {
  //     this.modulesData[this.selectedModuleIndex].sections[this.editingSectionIndex] = section;
  //     this.showSuccess('Section modifiée avec succès');
  //   } else {
  //     this.modulesData[this.selectedModuleIndex].sections.push(section);
  //     this.showSuccess('Section ajoutée avec succès');
  //   }

  //   this.newSection = this.createEmptySection();
  //   this.selectedModuleIndex = null;
  //   this.editingSectionIndex = null;
  //   this.hideModal('add-section');
  // }

  removeSection(moduleIndex: number, sectionIndex: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette section ?')) {
      this.modulesData[moduleIndex].sections.splice(sectionIndex, 1);
      this.showSuccess('Section supprimée');
    }
  }

  getSectionTypeIcon(type: string): string {
    const typeObj = this.sectionTypes.find(t => t.value === type);
    return typeObj?.icon ? `isax isax-${typeObj.icon}5` : 'isax isax-document-text5';
  }

  getSectionTypeLabel(type: string): string {
    const typeObj = this.sectionTypes.find(t => t.value === type);
    return typeObj?.label || type;
  }

  // ==================== FAQ ====================

  private createEmptyFaq(): FAQ {
    return {
      question: '',
      reponse: '',
      est_active: true
    };
  }

  openAddFaqModal(): void {
    this.newFaq = this.createEmptyFaq();
    this.showModal('add-faq');
  }

  saveFaq(): void {
    if (!this.newFaq.question.trim() || !this.newFaq.reponse.trim()) {
      this.showError('Question et réponse sont requises');
      return;
    }

    this.faqData.push({ ...this.newFaq });
    this.newFaq = this.createEmptyFaq();
    this.showSuccess('FAQ ajoutée avec succès');
    this.hideModal('add-faq');
  }

  removeFaq(index: number): void {
    this.faqData.splice(index, 1);
    this.showSuccess('FAQ supprimée');
  }

  // ==================== MEDIA ====================

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    
    if (!file) return;

    if (file.size > this.MAX_IMAGE_SIZE) {
      this.showError('L\'image ne doit pas dépasser 2 MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.uploadedImageUrl = e.target?.result as string;
      this.mediaForm.patchValue({ image_couverture: file.name });
      
      // Afficher l'image
      const uploadSection = document.getElementById('upload-img-section');
      if (uploadSection) {
        uploadSection.style.backgroundImage = `url(${this.uploadedImageUrl})`;
        uploadSection.style.backgroundSize = 'cover';
        uploadSection.style.backgroundPosition = 'center';
      }
    };
    reader.readAsDataURL(file);
  }

  // ==================== VALIDATION ====================

  isFieldInvalid(formName: string, fieldName: string): boolean {
    const form = this.getForm(formName);
    if (!form) return false;

    const field = form.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(formName: string, fieldName: string): string {
    const form = this.getForm(formName);
    if (!form) return '';

    const field = form.get(fieldName);
    if (!field) return '';

    if (field.hasError('required')) return 'Ce champ est obligatoire';
    if (field.hasError('minlength')) {
      const minLength = field.errors?.['minlength'].requiredLength;
      return `Minimum ${minLength} caractères`;
    }
    if (field.hasError('maxlength')) {
      const maxLength = field.errors?.['maxlength'].requiredLength;
      return `Maximum ${maxLength} caractères`;
    }
    if (field.hasError('min')) {
      const min = field.errors?.['min'].min;
      return `Valeur minimum: ${min}`;
    }
    return '';
  }

  private getForm(formName: string): FormGroup | null {
    switch (formName) {
      case 'basicInfo': return this.basicInfoForm;
      case 'media': return this.mediaForm;
      case 'additionalInfo': return this.additionalInfoForm;
      case 'pricing': return this.pricingForm;
      default: return null;
    }
  }

  private validateCurriculum(): boolean {
    if (this.modulesData.length === 0) {
      this.showError('Veuillez ajouter au moins un module');
      return false;
    }

    const hasEmptyModules = this.modulesData.some(module => 
      !module.sections || module.sections.length === 0
    );

    if (hasEmptyModules) {
      this.showError('Chaque module doit contenir au moins une section');
      return false;
    }

    return true;
  }

  // ==================== SUBMIT ====================

  submitCourse(): void {
    // Validation finale
    if (!this.performFinalValidation()) {
      return;
    }

    this.saving = true;
    this.clearMessages();

    const formationData = this.prepareFormationData();
    console.log('Données envoyées:', formationData);

    this.formationService.createFormation(formationData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('Réponse API:', response);
          this.handleSubmitSuccess();
        },
        error: (error) => {
          console.error('Erreur création formation:', error);
          this.handleSubmitError(error);
        }
      });
  }

  private performFinalValidation(): boolean {
    if (!this.basicInfoForm.valid) {
      this.showError('Veuillez remplir correctement les informations de base');
      this.selectedFieldSet[0] = 0;
      return false;
    }

    if (!this.validateCurriculum()) {
      this.selectedFieldSet[0] = 2;
      return false;
    }

    if (!this.additionalInfoForm.valid) {
      this.showError('Veuillez accepter les conditions');
      this.selectedFieldSet[0] = 3;
      return false;
    }

    if (!this.pricingForm.valid) {
      this.showError('Veuillez définir le prix de la formation');
      this.selectedFieldSet[0] = 4;
      return false;
    }

    return true;
  }

  private prepareFormationData(): FormationData {
    return {
      // Informations de base
      ...this.basicInfoForm.getRawValue(),
      
      // Objectifs et prérequis
      objectifs_pedagogiques: this.objectifsData
        .map(obj => obj.text)
        .filter(text => text?.trim()),
      prerequis: this.prerequisData
        .map(req => req.text)
        .filter(text => text?.trim()),
      
      // Média
      image_couverture: this.mediaForm.value.image_couverture,
      media_url: this.mediaForm.value.video_presentation,
      
      // Prix
      prix: this.pricingForm.value.est_gratuite ? 0 : this.pricingForm.value.prix,
      prix_original: this.pricingForm.value.a_remise ? this.pricingForm.value.prix : null,
      
      // Tags
      tags: this.parseTags(this.additionalInfoForm.value.tags),
      
      // Modules avec sections
      modules: this.prepareModulesData(),

      // Métadonnées
      est_publie: false,
      inscription_ouverte: true,
      statut: 'brouillon'
    };
  }

  private parseTags(tagsString: string): string[] {
    if (!tagsString) return [];
    return tagsString
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
  }

  private prepareModulesData(): ModuleData[] {
    return this.modulesData.map((module, moduleIndex) => ({
      titre: module.titre,
      description: module.description,
      ordre: moduleIndex + 1,
      type: 'video',
      duree_estimee: this.calculateModuleDuration(module),
      obligatoire: true,
      visible: true,
      sections: this.prepareSectionsData(module.sections)
    }));
  }

  private prepareSectionsData(sections: Section[]): SectionData[] {
    return sections.map((section, sectionIndex) => ({
      titre: section.titre,
      description: section.description || '',
      contenu: section.contenu || section.description || '',
      type: section.type,
      ordre: sectionIndex + 1,
      duree_estimee: section.duree_estimee || 0,
      ressources: section.ressources || section.video_url || null,
      metadata: section.video_url ? JSON.stringify({
        video_url: section.video_url,
        est_gratuit: section.est_gratuit
      }) : null,
      obligatoire: section.obligatoire,
      visible: section.visible ?? true,
      statut: 'brouillon'
    }));
  }

  private handleSubmitSuccess(): void {
    this.saving = false;
    this.showSuccess('Formation créée avec succès !');
    this.showModal('success');
    
    setTimeout(() => {
      this.router.navigate(['/courses']);
    }, this.SUCCESS_MODAL_DELAY);
  }

  private handleSubmitError(error: any): void {
    this.saving = false;
    const errorMessage = error.error?.message || 'Erreur lors de la création de la formation';
    this.showError(errorMessage);
    this.scrollToTop();
  }

  // ==================== CALCULATIONS ====================

  private calculateModuleDuration(module: Module): number {
    if (!module.sections || module.sections.length === 0) return 0;
    
    return module.sections.reduce((total, section) => {
      return total + (section.duree_estimee || 0);
    }, 0);
  }

  calculateTotalDuration(): number {
    return this.modulesData.reduce((total, module) => {
      return total + this.calculateModuleDuration(module);
    }, 0);
  }

  // getTotalSections(): number {
  //   return this.modulesData.reduce((total, module) => {
  //     return total + (module.sections?.length || 0);
  //   }, 0);
  // }

  // ==================== UI HELPERS ====================

  private showModal(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  private hideModal(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }

  private showSuccess(message: string, duration = 3000): void {
    this.success = message;
    setTimeout(() => this.success = '', duration);
  }

  private showError(message: string): void {
    this.error = message;
  }

  private clearMessages(): void {
    this.error = '';
    this.success = '';
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==================== NAVIGATION ====================

  goToCoursesList(): void {
    this.router.navigate(['/courses']);
  }

  trackByIndex(index: number): number {
    return index;
  }
}