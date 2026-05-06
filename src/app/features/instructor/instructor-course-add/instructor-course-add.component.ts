// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { CategorieService, CategorieFormation, CategorieFormationRequest } from '../../../shared/service/categorie/categorie-service.service';






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
  ressources: string;
  obligatoire: boolean;
  visible: boolean;
  ordre: number;
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

  constructor(
    private fb: FormBuilder,
    private formationService: FormationService,
  private categorieService: CategorieService,

    private router: Router,
    private sanitizer: DomSanitizer,
    private authService: AuthService
  ) {
    this.initForms();
  }
  
ngOnInit(): void {
  this.loadCategories();
  this.initIntroductionModule();
}

// Nouvelle méthode à ajouter après ngOnInit:
private initIntroductionModule(): void {
  this.modules = [{
    titre: 'Introduction',
    description: 'Module d\'introduction à la formation',
    duree_estimee: 0,
    ordre: 0,
    sections: [{
      titre: 'Introduction',
      type: 'video',
      duree_estimee: 0,
      contenu: '',
      ressources: '',
      obligatoire: true,
      visible: true,
      ordre: 0
    }]
  }];
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

trackByIndex(index: number): number { return index; }

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
      case 1:
        // Média est optionnel
        break;
      case 2:
        // Modules sont optionnels
        break;
      case 3:
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
    this.objectifs.push('');
  }

  removeObjectif(index: number): void {
    if (this.objectifs.length > 1) {
      this.objectifs.splice(index, 1);
    }
  }

  // ==================== PREREQUIS ====================

  addPrerequis(): void {
    this.prerequis.push('');
  }

  removePrerequis(index: number): void {
    if (this.prerequis.length > 1) {
      this.prerequis.splice(index, 1);
    }
  }

  // ==================== COMPETENCES ====================

  addCompetence(): void {
    this.competencesAcquises.push('');
  }

  removeCompetence(index: number): void {
    if (this.competencesAcquises.length > 1) {
      this.competencesAcquises.splice(index, 1);
    }
  }

  // ==================== OUTILS ====================

  addOutil(): void {
    this.outilsRequis.push('');
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

// Remplacer saveModule():
saveModule(): void {
  if (!this.newModule.titre) return;

  if (this.editingModuleIndex !== null) {
    if (this.editingModuleIndex === 0) {
      this.newModule.titre = 'Introduction'; // le premier module reste toujours "Introduction"
    }
    this.modules[this.editingModuleIndex] = {
      ...this.newModule,
      sections: this.modules[this.editingModuleIndex].sections
    };
  } else {
    this.newModule.ordre = this.modules.length;
    // auto-créer la section Introduction pour chaque nouveau module
    this.newModule.sections = [{
      titre: 'Introduction',
      type: 'video',
      duree_estimee: 0,
      contenu: '',
      ressources: '',
      obligatoire: true,
      visible: true,
      ordre: 0
    }];
    this.modules.push({ ...this.newModule });
  }

  this.closeModal('moduleModal');
}

// Remplacer removeModule():
removeModule(index: number): void {
  if (index === 0) {
    alert('Le module "Introduction" est obligatoire et ne peut pas être supprimé.');
    return;
  }
  if (confirm('Supprimer ce module et toutes ses sections ?')) {
    this.modules.splice(index, 1);
    this.modules.forEach((m, i) => m.ordre = i);
  }
}

// Remplacer removeSection():
removeSection(moduleIndex: number, sectionIndex: number): void {
  if (sectionIndex === 0) {
    alert('La section "Introduction" est obligatoire et ne peut pas être supprimée.');
    return;
  }
  if (confirm('Supprimer cette section ?')) {
    this.modules[moduleIndex].sections.splice(sectionIndex, 1);
    this.modules[moduleIndex].sections.forEach((s, i) => s.ordre = i);
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

  const formData = this.buildFormData();
  
  // Debug: Afficher les données envoyées
  console.log('Données envoyées:', formData);

  this.formationService.createFormation(formData).subscribe({
    next: (response) => {
      this.saving = false;
      this.success = 'Formation créée avec succès !';
      
      // Afficher le modal de succès
      setTimeout(() => {
        const modal = new bootstrap.Modal(document.getElementById('successModal'));
        modal.show();
      }, 100);
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
}

buildFormData(): any {
  // Récupérer toutes les valeurs des formulaires
  const basicInfo = this.basicInfoForm.value;
  const mediaInfo = this.mediaForm.value;
  const additionalInfo = this.additionalInfoForm.value;
  const pricingInfo = this.pricingForm.value;

  //user connecté
     const user = this.authService.getUser();

     console.log('User complet:', user);
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
entreprise_id: user?.entreprise_id || user?.entreprise?.id || null,
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

    // Objectifs, prérequis, etc. (filtrer les valeurs vides)
    objectifs: this.objectifs.filter(obj => obj.trim()).map(obj => obj.trim()),
    prerequis: this.prerequis.filter(pre => pre.trim()).join(', '),
    competences_acquises: this.competencesAcquises.filter(comp => comp.trim()).map(comp => comp.trim()),
    outils_requis: this.outilsRequis.filter(outil => outil.trim()).map(outil => outil.trim()),

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

 
  // ==================== NAVIGATION POST-CREATION ====================

  goToCoursesList(): void {
    this.closeModal('successModal');
    this.router.navigate(['instructor/instructor-course']);
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
    this.objectifs = [''];
    this.prerequis = [''];
    this.competencesAcquises = [''];
    this.outilsRequis = [''];
    this.imagePreview = null;
    this.selectedImageFile = null;
    this.error = '';
    this.success = '';
  }
}